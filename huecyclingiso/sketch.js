let tools;
let brushOpacity;
let brushSize;
let brush1;
let brush2;
let brush3;
let brush4;
let brush5;
let brush6;
let brush7;
let brush8;
let brush9;
let brush10;
let currentBrush;
let brush;
let saveButton;
let rotationAngle = 0; // Variable to store the rotation angle

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

  let button1 = createButton("");
  button1.mousePressed(() => currentBrush = brush1);
  button1.position(20, 20);
  button1.size(50, 50);
  button1.style("background-image", "url('images/image1.png')");
  button1.style("background-size", "cover");

  let button2 = createButton("");
  button2.mousePressed(() => currentBrush = brush2);
  button2.position(80, 20);
  button2.size(50, 50);
  button2.style("background-image", "url('images/image2.png')");
  button2.style("background-size", "cover");

  let button3 = createButton("");
  button3.mousePressed(() => currentBrush = brush3);
  button3.position(140, 20);
  button3.size(50, 50);
  button3.style("background-image", "url('images/image3.png')");
  button3.style("background-size", "cover");

  let button4 = createButton("");
  button4.mousePressed(() => currentBrush = brush4);
  button4.position(200, 20);
  button4.size(50, 50);
  button4.style("background-image", "url('images/image4.png')");
  button4.style("background-size", "cover");

  let button5 = createButton("");
  button5.mousePressed(() => currentBrush = brush5);
  button5.position(260, 20);
  button5.size(50, 50);
  button5.style("background-image", "url('images/image5.png')");
  button5.style("background-size", "cover");

  let button6 = createButton("");
  button6.mousePressed(() => currentBrush = brush6);
  button6.position(320, 20);
  button6.size(50, 50);
  button6.style("background-image", "url('images/image6.png')");
  button6.style("background-size", "cover");

  let button7 = createButton("");
  button7.mousePressed(() => currentBrush = brush7);
  button7.position(20, 80);
  button7.size(50, 50);
  button7.style("background-image", "url('images/image7.png')");
  button7.style("background-size", "cover");

  let button8 = createButton("");
  button8.mousePressed(() => currentBrush = brush8);
  button8.position(80, 80);
  button8.size(50, 50);
  button8.style("background-image", "url('images/image8.png')");
  button8.style("background-size", "cover");

  let button9 = createButton("");
  button9.mousePressed(() => currentBrush = brush9);
  button9.position(140, 80);
  button9.size(50, 50);
  button9.style("background-image", "url('images/image9.png')");
  button9.style("background-size", "cover");

  let button10 = createButton("");
  button10.mousePressed(() => currentBrush = brush10);
  button10.position(200, 80);
  button10.size(50, 50);
  button10.style("background-image", "url('images/image10.png')");
  button10.style("background-size", "cover");

  saveButton = createButton("Save");
  saveButton.position(320, 130);
  saveButton.mousePressed(saveImage);
}

function saveImage() {
  saveCanvas('myCanvas', 'png');
}

function draw() {
  imageMode(CENTER);

  if (mouseIsPressed) {
    brush = createGraphics(brushSize.value(), brushSize.value());
    brush.imageMode(CENTER);
    brush.translate(brush.width / 2, brush.height / 2); // Move to the center of the brush
    brush.rotate(rotationAngle); // Apply rotation
    brush.image(currentBrush, 0, 0, brush.width, brush.height); // Draw the image
    tint(255, brushOpacity.value());
    image(brush, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') { // Check if 'R' key is pressed
    rotationAngle += radians(15); // Rotate 15 degrees to the right (convert to radians)
  }
}