let particles = [];
let audioStarted = false;
let synth;
let reverb;
let delay;
let panner3D;
let bgHue = 0;

// UI state variables
let persistence = 0.5;
let brushSizeMult = 1.0;
let chaosInput = 0.1;

let dragTime = 0; // tracks how long mouse is held for Z depth

// To manage textures
let textures = {};

function preload() {
    // Maybe preload aren't strictly necessary if we generate textures asynchronously or use createGraphics Wait, p5 needs loadImage to be done before or dynamically.
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB, 360, 100, 100, 1);
    
    // UI Event Listeners
    document.getElementById('start-audio').addEventListener('click', async () => {
        await Tone.start();
        initAudio();
        audioStarted = true;
        document.getElementById('start-audio').style.display = 'none';
        document.getElementById('start-audio').innerText = 'Audio Started';
    });
    
    document.getElementById('clear-btn').addEventListener('click', () => {
        particles = [];
    });

    document.getElementById('save-btn').addEventListener('click', () => {
        saveCanvas('ethereal-3d-canvas', 'png');
    });

    document.getElementById('persistence').addEventListener('input', (e) => {
        persistence = parseFloat(e.target.value);
        document.getElementById('pers-val').innerText = Math.round(persistence * 100) + '%';
    });
    document.getElementById('brush-size').addEventListener('input', (e) => {
        brushSizeMult = parseFloat(e.target.value);
        document.getElementById('size-val').innerText = brushSizeMult.toFixed(1) + 'x';
    });
    document.getElementById('chaos').addEventListener('input', (e) => {
        chaosInput = parseFloat(e.target.value);
        document.getElementById('chaos-val').innerText = Math.round(chaosInput * 100) + '%';
    });
}

function initAudio() {
    // Setup 3D Audio
    Tone.Listener.setPosition(0, 0, 0);

    panner3D = new Tone.Panner3D(0, 0, 0).toDestination();

    reverb = new Tone.Reverb({
        decay: 5,
        preDelay: 0.1,
        wet: 0.5
    }).connect(panner3D);
    
    delay = new Tone.PingPongDelay({
        delayTime: "8n",
        feedback: 0.4,
        wet: 0.3
    }).connect(reverb);

    synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "sine" },
        envelope: { attack: 0.1, decay: 0.2, sustain: 0.2, release: 2 }
    }).connect(delay);
}

function draw() {
    // Fade the background manually by drawing a large plane, or using background with alpha?
    // In WEBGL, drawing a large rectangle over screen clears fading.
    let fadeAlpha = map(persistence, 0, 1, 0.3, 0);
    
    // Simple clear, as transparency trails in WEBGL are tricky without framebuffers
    push();
    resetMatrix();
    noStroke();
    fill(0, 0, 5, fadeAlpha);
    rect(-width/2, -height/2, width, height);
    pop();

    orbitControl(2, 2, 0.1);
    
    ambientLight(50);
    directionalLight(0, 0, 100, 0, 0, -1);
    directionalLight(0, 0, 100, 0, 0, 1);

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.update();
        p.display();
        
        if (p.isDead()) {
            particles.splice(i, 1);
        }
    }
}

function mouseDragged() {
    dragTime += 2;
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Map 2D mouse coordinates to 3D space loosely
        let x3D = mouseX - width / 2;
        let y3D = mouseY - height / 2;
        let z3D = map(dragTime, 0, 500, 0, -1000) % -1000;
        
        spawnParticle(x3D, y3D, z3D);
        
        if (audioStarted && frameCount % 5 === 0) {
            playNote(y3D, x3D, z3D);
        }
    }
}

function mouseReleased() {
    dragTime = 0;
}

function mousePressed() {
    if (mouseY > 150 || mouseX > 300) { 
        let x3D = mouseX - width / 2;
        let y3D = mouseY - height / 2;
        if (audioStarted) {
            playNote(y3D, x3D, 0);
        }
        for(let i=0; i<3; i++){
            spawnParticle(x3D + random(-50, 50), y3D + random(-50, 50), random(-100, 100));
        }
    }
    dragTime = 0;
}

function spawnParticle(x, y, z) {
    let hueValue = (map(x, -width/2, width/2, 0, 360) + bgHue) % 360;
    particles.push(new Particle(x, y, z, hueValue));
}

function playNote(yPos, xPos, zPos) {
    if (!synth || !panner3D) return;
    
    // Update panner position
    panner3D.setPositionX(map(xPos, -width/2, width/2, -5, 5));
    panner3D.setPositionY(map(yPos, -height/2, height/2, 5, -5));
    panner3D.setPositionZ(map(zPos, -1000, 1000, -5, 5));

    const notes = ["C3", "D3", "E3", "G3", "A3", "C4", "D4", "E4", "G4", "A4", "C5", "D5", "E5"];
    let index = Math.floor(map(yPos, height/2, -height/2, 0, notes.length - 1));
    index = constrain(index, 0, notes.length - 1);
    
    let velocity = map(yPos, height/2, -height/2, 0.4, 0.8) + random(-0.1, 0.1);
    synth.triggerAttackRelease(notes[index], "8n", undefined, velocity);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Particle Class
class Particle {
    constructor(x, y, z, h) {
        this.pos = createVector(x, y, z);
        this.vel = p5.Vector.random3D().mult(random(0.5, 2));
        this.acc = createVector(0, 0, 0);
        this.size = random(20, 60) * brushSizeMult;
        this.life = 255;
        this.hue = h;
        this.noiseOffset = random(1000);
        
        // Generate random SVG Texture and load it dynamically
        let seed = Math.floor(random(1000000)).toString();
        let svgUrl = generateRandomSVGTextureUrl(seed);
        // Loading texture dynamically. This takes a moment so initially it might not have texture
        this.tex = null;
        loadImage(svgUrl, (loadedTex) => {
            this.tex = loadedTex;
        });

        this.rotation = p5.Vector.random3D();
        this.rotSpeed = random(-0.05, 0.05);
    }
    
    update() {
        let n = noise(this.pos.x * 0.01, this.pos.y * 0.01, this.pos.z * 0.01 + this.noiseOffset);
        let angleX = n * TWO_PI * map(chaosInput, 0, 1, 1, 5);
        let angleY = noise(this.noiseOffset) * TWO_PI * map(chaosInput, 0, 1, 1, 5);
        
        let force = createVector(cos(angleX)*cos(angleY), sin(angleY), sin(angleX)*cos(angleY));
        force.mult(map(chaosInput, 0, 1, 0.02, 0.5));
        
        this.acc.add(force);
        this.vel.add(this.acc);
        this.vel.limit(3);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        this.life -= 1;
        this.size *= 0.99;
        this.noiseOffset += 0.05;
        this.rotation.add(this.rotSpeed, this.rotSpeed, this.rotSpeed);
    }
    
    display() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);
        
        // Use basic material with tint for life fading
        tint(255, map(this.life, 0, 255, 0, 255));
        
        if (this.tex) {
            texture(this.tex);
            noStroke();
        } else {
            fill(this.hue, 60, 100, map(this.life, 0, 255, 0, 1));
            stroke(this.hue, 80, 100);
            strokeWeight(1);
        }
        
        // Map particle representation
        if (this.noiseOffset % 2 > 1) {
            box(this.size);
        } else {
            plane(this.size * 1.5, this.size * 1.5);
        }
        pop();
    }
    
    isDead() {
        return this.life <= 0 || this.size < 0.5;
    }
}
