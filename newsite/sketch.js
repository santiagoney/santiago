let txt = "santiago";
let fontSize = 160;
let yBase;

function setup() {
  createCanvas(windowWidth, 400);
  textFont('boxmd');
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  yBase = height / 2;
}

function draw() {
  background(255);
  blendMode(MULTIPLY);
  let t = millis() * 0.002;
  let amp = 20;
  let y1 = yBase + sin(t) * amp;
  let y2 = yBase + sin(t + PI / 2) * amp;
  let y3 = yBase + sin(t + PI) * amp;

  // Blue shadow (back)
  fill(0, 100, 255);
  noStroke();
  text(txt, width / 2, y3 + 16);

  // Red shadow (middle)
  fill(255, 0, 0);
  text(txt, width / 2, y2 + 8);

  // Yellow (front)
  fill(255, 255, 0);
  text(txt, width / 2, y1);
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}