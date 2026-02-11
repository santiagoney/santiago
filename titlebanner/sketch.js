let t = 0;
function setup() {
  let canvas = createCanvas(windowWidth, 180);
  canvas.parent('p5-banner-container');
  noFill();
  frameRate(60);
}
function windowResized() {
  resizeCanvas(windowWidth, 180);
}
function draw() {
  clear();
  blendMode(MULTIPLY);
  let x0 = 440, y0 = 120, size = 60, gap = 48;
  let letters = 'SANTIAGO';
  let amp = 20;
  // Blue (back)
  for (let i = 0; i < letters.length; i++) {
    let x = x0 + i * (size + gap);
    let y = y0 + sin(t + i * 0.3 + 2) * amp;
    drawLetter(letters[i], x, y, size, t, [0, 100, 255]);
  }
  // Red (middle)
  for (let i = 0; i < letters.length; i++) {
    let x = x0 + i * (size + gap);
    let y = y0 + sin(t + i * 0.3 + 1) * amp;
    drawLetter(letters[i], x, y, size, t, [255, 0, 0]);
  }
  // Yellow (front)
  for (let i = 0; i < letters.length; i++) {
    let x = x0 + i * (size + gap);
    let y = y0 + sin(t + i * 0.3) * amp;
    drawLetter(letters[i], x, y, size, t, [255, 255, 0]);
  }
  t += 0.02;
}
function drawLetter(ch, x, y, s, t, colorArr) {
  push();
  translate(x, y);
  stroke(colorArr[0], colorArr[1], colorArr[2]);
  strokeWeight(12 + 2 * sin(t + x * 0.01));
  noFill();
  switch (ch) {
    case 'S':
      push();
      scale(-1, 1);
      beginShape();
      vertex(-s*0.4, -s*0.4);
      vertex(s*0.4, -s*0.4);
      vertex(s*0.4, 0);
      vertex(-s*0.4, 0);
      vertex(-s*0.4, s*0.4);
      vertex(s*0.4, s*0.4);
      endShape();
      pop();
      break;
    case 'A':
      beginShape();
      vertex(-s*0.4, s*0.4);
      vertex(0, -s*0.4);
      vertex(s*0.4, s*0.4);
      endShape();
      line(-s*0.18, 0, s*0.18, 0);
      break;
    case 'N':
      line(-s*0.4, s*0.4, -s*0.4, -s*0.4);
      line(-s*0.4, -s*0.4, s*0.4, s*0.4);
      line(s*0.4, s*0.4, s*0.4, -s*0.4);
      break;
    case 'T':
      line(-s*0.4, -s*0.4, s*0.4, -s*0.4);
      line(0, -s*0.4, 0, s*0.4);
      break;
    case 'I':
      line(0, -s*0.4, 0, s*0.4);
      break;
    case 'G':
      beginShape();
      vertex(s*0.4, -s*0.4);
      vertex(-s*0.4, -s*0.4);
      vertex(-s*0.4, s*0.4);
      vertex(s*0.4, s*0.4);
      vertex(s*0.4, 0);
      vertex(0, 0);
      endShape();
      break;
    case 'O':
      rect(-s*0.4, -s*0.4, s*0.8, s*0.8, 6);
      break;
  }
  pop();
}
