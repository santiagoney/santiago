// Arabic scale (Hijaz) notes in C: C, Db, E, F, G, Ab, B, C
// Frequencies for one octave (C4 as root)
const hijazScale = [
  { note: 'C4', freq: 261.63 },
  { note: 'Db4', freq: 277.18 },
  { note: 'E4', freq: 329.63 },
  { note: 'F4', freq: 349.23 },
  { note: 'G4', freq: 392.00 },
  { note: 'Ab4', freq: 415.30 },
  { note: 'B4', freq: 493.88 },
  { note: 'C5', freq: 523.25 }
];

let osc;
let playing = false;
let noteTimeout;

function setup() {
  noCanvas();
  osc = new p5.Oscillator('sine');
  document.getElementById('playBtn').addEventListener('click', startPlaying);
  document.getElementById('stopBtn').addEventListener('click', stopPlaying);
}

function startPlaying() {
  if (!playing) {
    playing = true;
    playRandomNote();
  }
}

function stopPlaying() {
  playing = false;
  osc.stop();
  clearTimeout(noteTimeout);
}

function playRandomNote() {
  if (!playing) return;
  const note = random(hijazScale);
  document.getElementById('noteName').textContent = note.note;
  osc.freq(note.freq);
  osc.amp(0.5, 0.05);
  if (!osc.started) osc.start();
  // Play for 0.4-0.7s, then next note
  noteTimeout = setTimeout(() => {
    osc.amp(0, 0.1);
    setTimeout(() => {
      if (playing) playRandomNote();
    }, 100);
  }, random(400, 700));
}