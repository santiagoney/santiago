let tools;
let brushOpacity;
let brushSize;
let brush1, brush2, brush3, brush4, brush5, brush6, brush7, brush8, brush9, brush10;
let currentBrush;
let brush;
let saveButton;
let rotationAngle = 0;
let hueShift = 0;

function preload() {
  brush1 = loadImage('images/image1.png');
  brush2 = loadImage('images/image2.png');
  brush3 = loadImage('images/image3.png');
  brush4 = loadImage('images/image4.png');
  brush5 = loadImage('images/image5.png');
  brush6 = loadImage('images/image6.png');
  brush7 = loadImage('images/image7.png');
  brush8 = loadImage('images/image8.png');
  brush9 = loadImage('images/image9.png');
  brush10 = loadImage('images/image10.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
background (230,210,190)
  tools = createDiv();
  tools.position(10, 10);
  tools.style("width", "370px");
  tools.style("height", "200px");
  tools.style("background-color", "black");
  tools.style("border", "1px solid black");

  currentBrush = brush1;
  brushOpacity = createSlider(0, 255, 255);
  brushSize = createSlider(1, 400, 50);
  brushSize.position(20, 130);
  brushOpacity.position(20, 160);

  let button1 = createButton("").mousePressed(() => currentBrush = brush1);
  button1.position(20, 20).size(50, 50).style("background-image", "url('images/image1.png')").style("background-size", "cover");

  let button2 = createButton("").mousePressed(() => currentBrush = brush2);
  button2.position(80, 20).size(50, 50).style("background-image", "url('images/image2.png')").style("background-size", "cover");

  let button3 = createButton("").mousePressed(() => currentBrush = brush3);
  button3.position(140, 20).size(50, 50).style("background-image", "url('images/image3.png')").style("background-size", "cover");

  let button4 = createButton("").mousePressed(() => currentBrush = brush4);
  button4.position(200, 20).size(50, 50).style("background-image", "url('images/image4.png')").style("background-size", "cover");

  let button5 = createButton("").mousePressed(() => currentBrush = brush5);
  button5.position(260, 20).size(50, 50).style("background-image", "url('images/image5.png')").style("background-size", "cover");

  let button6 = createButton("").mousePressed(() => currentBrush = brush6);
  button6.position(320, 20).size(50, 50).style("background-image", "url('images/image6.png')").style("background-size", "cover");

  let button7 = createButton("").mousePressed(() => currentBrush = brush7);
  button7.position(20, 80).size(50, 50).style("background-image", "url('images/image7.png')").style("background-size", "cover");

  let button8 = createButton("").mousePressed(() => currentBrush = brush8);
  button8.position(80, 80).size(50, 50).style("background-image", "url('images/image8.png')").style("background-size", "cover");

  let button9 = createButton("").mousePressed(() => currentBrush = brush9);
  button9.position(140, 80).size(50, 50).style("background-image", "url('images/image9.png')").style("background-size", "cover");

  let button10 = createButton("").mousePressed(() => currentBrush = brush10);
  button10.position(200, 80).size(50, 50).style("background-image", "url('images/image10.png')").style("background-size", "cover");

  let hueButton = createButton("Cycle Hue (C)").position(260, 80).size(100, 50).mousePressed(cycleHue);

  saveButton = createButton("Save").position(320, 130).mousePressed(saveImage);
}

function saveImage() {
  saveCanvas('myCanvas', 'png');
}

function draw() {
  imageMode(CENTER);

  // If 'V' key is held down, continuously cycle hue every 5 frames
  if (keyIsDown(86) && frameCount % 1 === 0) { // 86 = 'V'
    cycleHue();
  }

  // If 'G' key is held down, increase brush size every 6 frames
  if (keyIsDown(71) && frameCount % 1 === 0) { // 71 = 'G'
    brushSize.value(min(brushSize.value() + 1, 400)); // Max size limit at 400
  }

  // If 'D' key is held down, decrease brush size every 6 frames
  if (keyIsDown(68) && frameCount % 6 === 0) { // 68 = 'D'
    brushSize.value(max(brushSize.value() - 1, 1)); // Min size limit at 1
  }

  if (mouseIsPressed) {
    brush = createGraphics(brushSize.value(), brushSize.value());
    brush.imageMode(CENTER);
    brush.translate(brush.width / 2, brush.height / 2);
    brush.rotate(rotationAngle);

    brush.colorMode(HSB, 360, 100, 100, 255);
    brush.tint((hueShift + 180) % 360, 100, 100);

    brush.image(currentBrush, 0, 0, brush.width, brush.height);
    tint(255, brushOpacity.value());
    image(brush, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') { // Rotate when 'R' is pressed
    rotationAngle += radians(15);
  }
  if (key === 'C' || key === 'c') { // Single hue shift when 'C' is pressed
    cycleHue();
  }
}

function cycleHue() {
  hueShift = (hueShift + 30) % 360; // Increment hue shift by 30 degrees
}
