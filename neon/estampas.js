let dim = 5;
let colors;
let selectedColors = [];
let estampas = [];
function doEstampas() {
  selectedColors = [];
  estampas = [];
  for(let e=0; e<48; e++){
    let tempE = createGraphics(400,400);
    estampas.push(tempE);
  }  
  dim = int(random(4, 30));
  colors = [
    color(242, 162, 24), color(163, 18, 5), color(207, 191, 169), color(0, 0, 0), color(86, 99, 120),
    color(179, 176, 0), color(209, 105, 8), color(168, 8, 64), color(6, 15, 64), color(204, 227, 129),
    color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255, 255, 0), color(255, 0, 255),
    color(0, 255, 255), color(128, 128, 128), color(255, 128, 0), color(0, 255, 128), color(128, 0, 255),
    color(255, 128, 128), color(128, 255, 0), color(0, 128, 255), color(128, 0, 128), color(255, 255, 128),
    color(128, 128, 255), color(255, 0, 128), color(128, 255, 255), color(255, 128, 255), color(255, 255, 128),
    color(192, 192, 192), color(128, 0, 0), color(0, 128, 0), color(0, 0, 128), color(128, 128, 0),
    color(0, 128, 128), color(128, 0, 128)
];

  for (let i = 0; i < random(1,20); i++) {
    let randomIndex = int(random(colors.length));
    selectedColors.push(colors[randomIndex]);
  }
  
  for(let e=0; e<48; e++){
    generateNewImage();
    trabaja(e);
  }
}
function trabaja(e) {
  let myG = estampas[e];
  dim = int(random(4, 30));
  for (let j = 0; j < 400 / dim; j++) {
    for (let i = 0; i < 400 / dim; i++) {
      let randomIndex = int(random(selectedColors.length)); 
      myG.fill(selectedColors[randomIndex]);
      //myG.blendMode(MULTIPLY); 
      myG.noStroke();
      myG.square(0 + i * dim, 0 + j * dim, dim, dim/3);
    }
  }
}
function generateNewImage() {
  blendMode(BLEND)
  selectedColors = []; // Clear the previous selected colors
  for (let i = 0; i < random(3, 20); i++) {
    let randomIndex = int(random(colors.length));
    selectedColors.push(colors[randomIndex]);
  }
}
