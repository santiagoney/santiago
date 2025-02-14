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
let brush11;
let brush12;
let brush13;
let brush14;
let brush15;
let brush16;
let brush17;
let brush18;
let brush19;
let brush20;
let brush21;
let brush22;
let brush23;
let brush24;
let brush25;
let brush26;
let saveButton;
let currentBrush;
let brush;

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
  brush11 = loadImage('images/image11.png');
  brush12 = loadImage('images/image12.png');
  brush13 = loadImage('images/image13.png');
  brush14 = loadImage('images/image14.png');
  brush15 = loadImage('images/image15.png');
  brush16 = loadImage('images/image16.png');
  brush17 = loadImage('images/image17.png');
  brush18 = loadImage('images/image18.png');
  brush19 = loadImage('images/image19.png');
  brush20 = loadImage('images/image20.png');
  brush21 = loadImage('images/image21.png');
  brush22 = loadImage('images/image22.png');
  brush23 = loadImage('images/image23.png');
  brush24 = loadImage('images/image24.png');
  brush25 = loadImage('images/image25.png');
  brush26 = loadImage('images/image26.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  tools = createDiv();
  tools.position(10, 10);
  tools.style("width", "370px");
  tools.style("height", "350px");
  tools.style("background-color", "black");
  tools.style("border", "1px solid black");

  currentBrush = brush1;
  brushOpacity = createSlider(0, 255, 255);
  brushSize = createSlider(1, 400, 50);
  brushSize.position(20, 280);

  brushOpacity.position(20, 320);

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

let button11 = createButton("");
  button11.mousePressed(() => currentBrush = brush11);
  button11.position(260, 80);
  button11.size(50, 50);
  button11.style("background-image", "url('images/image11.png')");
  button11.style("background-size", "cover");

let button12 = createButton("");
  button12.mousePressed(() => currentBrush = brush12);
  button12.position(320, 80);
  button12.size(50, 50);
  button12.style("background-image", "url('images/image12.png')");
  button12.style("background-size", "cover");


  let button13 = createButton("");
  button13.mousePressed(() => currentBrush = brush13);
  button13.position(20, 140);
  button13.size(50, 50);
  button13.style("background-image", "url('images/image13.png')");
  button13.style("background-size", "cover");

   let button14 = createButton("");
  button14.mousePressed(() => currentBrush = brush14);
  button14.position(80,140);
  button14.size(50, 50);
  button14.style("background-image", "url('images/image14.png')");
  button14.style("background-size", "cover");

  let button15 = createButton("");
  button15.mousePressed(() => currentBrush = brush15);
  button15.position(140,140);
  button15.size(50, 50);
  button15.style("background-image", "url('images/image15.png')");
  button15.style("background-size", "cover");

  let button16 = createButton("");
  button16.mousePressed(() => currentBrush = brush16);
  button16.position(200,140);
  button16.size(50, 50);
  button16.style("background-image", "url('images/image16.png')");
  button16.style("background-size", "cover");


  let button17 = createButton("");
  button17.mousePressed(() => currentBrush = brush17);
  button17.position(260,140);
  button17.size(50, 50);
  button17.style("background-image", "url('images/image17.png')");
  button17.style("background-size", "cover");

  let button18 = createButton("");
  button18.mousePressed(() => currentBrush = brush18);
  button18.position(320,140);
  button18.size(50, 50);
  button18.style("background-image", "url('images/image18.png')");
  button18.style("background-size", "cover");

  let button19 = createButton("");
  button19.mousePressed(() => currentBrush = brush19);
  button19.position(20, 200);
  button19.size(50, 50);
  button19.style("background-image", "url('images/image19.png')");
  button19.style("background-size", "cover");

  let button20 = createButton("");
  button20.mousePressed(() => currentBrush = brush20);
  button20.position(320, 200);
  button20.size(50, 50);
  button20.style("background-image", "url('images/image20.png')");
  button20.style("background-size", "cover");


let button21 = createButton("");
  button21.mousePressed(() => currentBrush = brush21);
  button21.position(80, 200);
  button21.size(50, 50);
  button21.style("background-image", "url('images/image21.png')");
  button21.style("background-size", "cover");

  let button22 = createButton("");
  button22.mousePressed(() => currentBrush = brush22);
  button22.position(140, 200);
  button22.size(50, 50);
  button22.style("background-image", "url('images/image22.png')");
  button22.style("background-size", "cover");

    let button23 = createButton("");
  button23.mousePressed(() => currentBrush = brush23);
  button23.position(200, 200);
  button23.size(50, 50);
  button23.style("background-image", "url('images/image23.png')");
  button23.style("background-size", "cover");

  let button24 = createButton("");
  button24.mousePressed(() => currentBrush = brush24);
  button24.position(260, 200);
  button24.size(50, 50);
  button24.style("background-image", "url('images/image24.png')");
  button24.style("background-size", "cover");


  let button25 = createButton("");
  button25.mousePressed(() => currentBrush = brush25);
  button25.position(200, 260);
  button25.size(50, 50);
  button25.style("background-image", "url('images/image25.png')");
  button25.style("background-size", "cover");

  let button26 = createButton("");
  button26.mousePressed(() => currentBrush = brush26);
  button26.position(260, 260);
  button26.size(50, 50);
  button26.style("background-image", "url('images/image26.png')");
  button26.style("background-size", "cover");

saveButton = createButton("Save");
saveButton.position(320, 300);
saveButton.mousePressed(saveImage);
}

function saveImage() {
saveCanvas('myCanvas', 'png');
}

function draw() {
  
  imageMode(CENTER)
  
if (mouseIsPressed) {
brush = createGraphics(brushSize.value(), brushSize.value());
brush.image(currentBrush, 0, 0, brush.width, brush.height);
tint(255, brushOpacity.value());
image(brush, mouseX, mouseY);
}
}
