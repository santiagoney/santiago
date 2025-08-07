let tapa;
let masterpiece;
let paletteBkg;
let brushOpacity;
let brushSize = 8;
let brushes = [];
let saveButton;
let clearButton; 
let currentBrush;
let brush;
let brushSizeGrowth = 5; 
let brushRotation = 0;
let currentBrushIndex = 0;
let Bcolors;
let selectedBColors = [];
let Bdim = 5;

let growKeyPressed = false;
let decreaseKeyPressed = false;
let rotateClockwiseKeyPressed = false;
let rotateCounterClockwiseKeyPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tapa = createGraphics(windowWidth, windowHeight);
  masterpiece = createGraphics(windowWidth, windowHeight);
  masterpiece.background(230, 200, 170);
  masterpiece.imageMode(CENTER);

  doEstampas()
  
  for (let i = 0; i < 48; i++) {
    brushes[i] = estampas[i];
  }

  currentBrush = brushes[0];
  brushOpacity = createSlider(0, 255, 255);
  brushSize = createSlider(10, 1000, 50);
  brushSize.position(10, 520);
  brushOpacity.position(10, 540);

  for (let i = 0; i < 48; i++) {
    createBrushButton(i);
  }
  //Save button
  saveButton = createButton("Save");
  saveButton.position(10, 570);
  saveButton.mousePressed(saveImage);
  //New Brushes button
  nbButton = createButton("New Brushes");
  nbButton.position(60, 570); // Adjust position as needed
  nbButton.mousePressed(newBrushes);
  //Clear Canvas button
  clearButton = createButton("Clear Canvas");
  clearButton.position(155, 570); // Adjust position as needed
  clearButton.mousePressed(clearCanvas);
}

function newBrushes(){
  brushes = [];
  doEstampas()
  for (let i = 0; i < 48; i++) {
    brushes[i] = estampas[i];
  }
  for (let i = 0; i < 48; i++) {
    createBrushButton(i);
  }
}

function createBrushButton(index) {
  let button = createButton("");
  let pos = createVector(10 + (index % 7) * 70, 10 + Math.floor(index / 7) * 70);
  button.mousePressed(() => currentBrush = brushes[index]);
  button.position(pos.x,pos.y);
  button.size(70, 70);
  button.style("background-color", "transparent");
  
  tapa.push();
  tapa.translate(pos.x, pos.y);
  tapa.image(estampas[index],0,0,70,70,0,0,400,400)
  tapa.pop();
    
}

function saveImage() {
  save(masterpiece, 'png')
}

function clearCanvas() {
  masterpiece.background(230, 200, 170);
  for (let i = 0; i < 48; i++) {
    createBrushButton(i);
  }
}

function draw() {
  if (mouseIsPressed) {
    if (growKeyPressed) {
      brushSize.value(brushSize.value() + brushSizeGrowth);
    } else if (decreaseKeyPressed) {
      brushSize.value(brushSize.value() - brushSizeGrowth);
      if (brushSize.value() < 0.5) {
        brushSize.value() = 0.5;
      }
    }

    if (rotateClockwiseKeyPressed) {
      brushRotation += 1;
    } else if (rotateCounterClockwiseKeyPressed) {
      brushRotation -= 1;
    }
    
    brush = createGraphics(brushSize.value()/4, brushSize.value()/4);
    brush.image(currentBrush, 0, 0, brush.width, brush.height);
    masterpiece.tint(255, brushOpacity.value());
    masterpiece.push();
    masterpiece.translate(mouseX, mouseY);
    masterpiece.rotate(radians(brushRotation));
    masterpiece.image(brush, 0, 0);
    masterpiece.pop();
  }
  image(masterpiece,0,0)
  image(tapa,0,0)
}


function keyPressed() {
  if (key === "g") {
    growKeyPressed = true;
  }
  if (key === "d") {
    decreaseKeyPressed = true;
  }
  if (key === "r") {
    rotateClockwiseKeyPressed = true;
  }
  if (key === "e") {
    rotateCounterClockwiseKeyPressed = true;
  }
  if (key === "s") {
    saveImage();
  }
}

function keyReleased() {
  if (key === "g") {
    growKeyPressed = false;
  }
  if (key === "d") {
    decreaseKeyPressed = false;
  }
  if (key === "r") {
    rotateClockwiseKeyPressed = false;
  }
  if (key === "e") {
    rotateCounterClockwiseKeyPressed = false;
  }
}