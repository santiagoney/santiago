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

let osc, osc2;
let playing = false;
let noteTimeout, noteTimeout2;


window.onload = function() {
  noCanvas();
  osc = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('triangle');
  const btn = document.getElementById('play-music-btn');
  if (btn) {
    btn.textContent = 'music';
    btn.addEventListener('click', () => {
      if (!playing) {
        startPlaying();
        btn.textContent = 'music';
      } else {
        stopPlaying();
        btn.textContent = 'music';
      }
    });
  } else {
    // fallback: auto start if no button (should not happen)
    startPlaying();
  }
}

function startPlaying() {
  if (!playing) {
    playing = true;
    playRandomNote();
    playRandomNote2();
  }
}

function stopPlaying() {
  playing = false;
  osc.stop();
  osc2.stop();
  clearTimeout(noteTimeout);
  clearTimeout(noteTimeout2);
}

  if (!playing) {
    playing = true;
    playRandomNote();
    playRandomNote2();
  }
}

  playing = false;
  osc.stop();
  osc2.stop();
  clearTimeout(noteTimeout);
  clearTimeout(noteTimeout2);
}

  if (!playing) return;
  const note = random(hijazScale);
  osc.freq(note.freq);
  osc.amp(0.18, 0.03); // softer volume, faster attack
  if (!osc.started) osc.start();
  noteTimeout = setTimeout(() => {
    osc.amp(0, 0.06);
    setTimeout(() => {
      if (playing) playRandomNote();
    }, 60);
  }, random(150, 280));
}

function playRandomNote2() {
  if (!playing) return;
  // Offset melody: pick a different note, maybe a 3rd or 4th above or below
  let idx = floor(random(hijazScale.length));
  // Offset by +2, -2, +3, or -3 steps, wrap around
  let offsets = [2, -2, 3, -3];
  let offset = random(offsets);
  let idx2 = (idx + offset + hijazScale.length) % hijazScale.length;
  const note2 = hijazScale[idx2];
  osc2.freq(note2.freq);
  osc2.amp(0.13, 0.03); // even softer
  if (!osc2.started) osc2.start();
  noteTimeout2 = setTimeout(() => {
    osc2.amp(0, 0.06);
    setTimeout(() => {
      if (playing) playRandomNote2();
    }, 60);
  }, random(180, 340));
}
