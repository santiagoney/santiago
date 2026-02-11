let dim = 5;
let colors;
let selectedColors = [];
let estampas = [];

function doEstampas() {
  selectedColors = [];
  estampas = [];
  for (let e = 0; e < 48; e++) {
    let tempE = createGraphics(400, 400);
    estampas.push(tempE);
  }
  dim = int(random(4, 30));
  colors = [
    // Core dark colors
    color(200, 150, 0),   // Mustard Yellow (dark)
    color(150, 30, 30),   // Muted Red
    color(80, 40, 100),   // Deep Purple
    color(100, 120, 150), // Grayish Blue (dark)
    color(0, 0, 0),       // Black

    // Sampled dark colors
    color(60, 20, 80),    // Dark Purple
    color(180, 120, 0),   // Dark Yellow
    color(100, 20, 20),   // Dark Red
    color(70, 90, 120),   // Dark Blue
    color(150, 150, 150), // Dark Gray

    // Interpolated dark purples (between Deep Purple and Dark Purple)
    color(76, 36, 96),    // t = 0.2
    color(68, 28, 88),    // t = 0.6

    // Interpolated dark yellows (between Mustard Yellow and Dark Yellow)
    color(196, 144, 0),   // t = 0.2
    color(188, 132, 0),   // t = 0.6

    // Interpolated dark reds (between Muted Red and Dark Red)
    color(140, 28, 28),   // t = 0.2
    color(120, 24, 24),   // t = 0.6

    // Interpolated dark blues (between Grayish Blue and Dark Blue)
    color(94, 114, 144),  // t = 0.2
    color(82, 102, 132),  // t = 0.6

    // Interpolated dark gray
    color(130, 130, 130), // t = 0.4 (between Dark Gray and a darker gray)

    // Light colors (reduced to 5)
    color(120, 80, 140),  // Light Purple
    color(220, 180, 50),  // Light Yellow
    color(200, 50, 50),   // Bright Red
    color(180, 180, 180), // Toolbox Gray
    color(220, 200, 180), // Canvas Beige
  ];
  for (let i = 0; i < random(1, 20); i++) {
    let randomIndex = int(random(colors.length));
    selectedColors.push(colors[randomIndex]);
  }

  for (let e = 0; e < 48; e++) {
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
      myG.noStroke();
      myG.square(0 + i * dim, 0 + j * dim, dim, dim / 3);
    }
  }
}

function generateNewImage() {
  blendMode(BLEND);
  selectedColors = [];
  for (let i = 0; i < random(3, 20); i++) {
    let randomIndex = int(random(colors.length));
    selectedColors.push(colors[randomIndex]);
  }
}