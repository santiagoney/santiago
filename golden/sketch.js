let tools;
let brushOpacity;
let brushSize;
let brushes = [];
let currentBrush;
let saveButton;
let rotationAngle = 0;
let hueShift = 0;

function preload() {
  for (let i = 1; i <= 48; i++) {
    brushes[i-1] = loadImage(`images/image${i}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 210, 190);

  // Create tools panel
  tools = createDiv();
  tools.position(10, 10);
  tools.style("width", "730px");
  tools.style("height", "400px");
  tools.style("background-color", "black");
  tools.style("border", "1px solid black");
  tools.style("overflow-y", "auto");

  // Initialize first brush
  currentBrush = brushes[0];

  // Create brush buttons grid
  const cols = 12;
  const buttonSize = 50;
  const spacing = 10;
  
  for (let i = 0; i < brushes.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 20 + col * (buttonSize + spacing);
    const y = 20 + row * (buttonSize + spacing);
    
    let btn = createButton("");
    btn.mousePressed(() => currentBrush = brushes[i]);
    btn.parent(tools);
    btn.position(x, y);
    btn.size(buttonSize, buttonSize);
    btn.style("background-image", `url('images/image${i+1}.png')`);
    btn.style("background-size", "cover");
  }

  // Create controls below brush grid
  brushSize = createSlider(1, 400, 50);
  brushSize.parent(tools);
  brushSize.position(20, 300);
  
  brushOpacity = createSlider(0, 255, 255);
  brushOpacity.parent(tools);
  brushOpacity.position(20, 330);

  let hueButton = createButton("Cycle Hue (C)");
  hueButton.parent(tools);
  hueButton.position(20, 360);
  hueButton.mousePressed(cycleHue);
  hueButton.size(100, 30);

  saveButton = createButton("Save");
  saveButton.parent(tools);
  saveButton.position(130, 360);
  saveButton.mousePressed(saveImage);
  saveButton.size(60, 30);
}

function saveImage() {
  saveCanvas('myCanvas', 'png');
}

function draw() {
  imageMode(CENTER);

  // Continuous hue cycling with 'V'
  if (keyIsDown(86) && frameCount % 1 === 0) {
    cycleHue();
  }

  // Brush size controls with 'G'/'D'
  if (keyIsDown(71)) {
    brushSize.value(min(brushSize.value() + 1, 400));
  }
  if (keyIsDown(68)) {
    brushSize.value(max(brushSize.value() - 1, 1));
  }

  if (mouseIsPressed) {
    let graphic = createGraphics(brushSize.value(), brushSize.value());
    graphic.imageMode(CENTER);
    graphic.translate(graphic.width/2, graphic.height/2);
    graphic.rotate(rotationAngle);
    
    graphic.colorMode(HSB, 360, 100, 100, 255);
    graphic.tint((hueShift + 180) % 360, 100, 100);
    
    graphic.image(currentBrush, 0, 0, graphic.width, graphic.height);
    tint(255, brushOpacity.value());
    image(graphic, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    rotationAngle += radians(15);
  }
  if (key === 'C' || key === 'c') {
    cycleHue();
  }
}

function cycleHue() {
  hueShift = (hueShift + 1) % 360;
}