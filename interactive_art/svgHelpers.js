// --- PRNG ---
function mkRng(seed) {
  let s = seed >>> 0;
  return () => {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const PAL_SETS = {
  warm: ['#ff6600', '#ff3300', '#ffcc00', '#ff9900', '#cc3300', '#ff5500', '#ffaa00', '#dd2200', '#ff1100', '#aa2200', '#ffdd00', '#cc4400'],
  cool: ['#0066ff', '#00ccff', '#0033cc', '#00ffcc', '#004499', '#33aaff', '#006699', '#00ddff', '#0011aa', '#0088bb', '#00ffee', '#3300ff'],
  acid: ['#00ff00', '#ff00ff', '#ffff00', '#00ffff', '#ff0066', '#66ff00', '#ff6600', '#0000ff', '#ff2200', '#00ff88', '#ff00aa', '#aaff00'],
  neon: ['#ff00ff', '#00ffff', '#ff0066', '#66ff00', '#ff6600', '#0066ff', '#ffff00', '#ff0000', '#00ff00', '#cc00ff', '#ff6600', '#0000ff'],
  full: ['#ff6600', '#5500bb', '#002244', '#aaff00', '#110600', '#ff9900', '#220033', '#1a1a00', '#001133', '#220033', '#f5c5a0', '#cc0000', '#0088ee', '#ff0055', '#00ffdd', '#00ccff']
};

function getPalette(rng) {
  let base = [...PAL_SETS.full];
  for (let i = base.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [base[i], base[j]] = [base[j], base[i]]; }
  return base;
}

const NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs = {}, children = []) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  for (const c of children) if (c) e.appendChild(c);
  return e;
}
function ri(rng, a, b) { return Math.floor(rng() * (b - a + 1)) + a; }
function rc2(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }

function pat_hatch(id, pal, rng, sz) {
  const s = sz * (0.7 + rng() * 1.6);
  const a = [Math.PI / 4, -Math.PI / 4, 0, Math.PI / 2, Math.PI / 3, -Math.PI / 3][Math.floor(rng() * 6)];
  const p = el('svg', { xmlns: NS, width: s * 2, height: s * 2, viewBox: `0 0 ${s*2} ${s*2}` });
  p.appendChild(el('rect', { x: 0, y: 0, width: s * 2, height: s * 2, fill: rc2(pal, rng) }));
  const nL = 1 + ri(rng, 1, 3);
  for (let l = 0; l < nL; l++) {
    const lw = sz * (.1 + rng() * .25);
    const c = rc2(pal, rng);
    const d = Math.sqrt(8) * s * 1.5;
    for (let off = -d; off < d * 3; off += s * (0.6 + rng() * .8)) {
      const co = Math.cos(a + l * 0.3), si = Math.sin(a + l * 0.3);
      p.appendChild(el('line', { x1: off * co - d * si, y1: off * si + d * co, x2: off * co + d * si, y2: off * si - d * co, stroke: c, 'stroke-width': lw }));
    }
  }
  return p;
}

function pat_checker(id, pal, rng, sz) {
  const s = sz * (0.8 + rng() * 1.8);
  const p = el('svg', { xmlns: NS, width: s * 2, height: s * 2, viewBox: `0 0 ${s*2} ${s*2}` });
  const c1 = rc2(pal, rng), c2 = rc2(pal, rng), c3 = rc2(pal, rng);
  p.appendChild(el('rect', { x: 0, y: 0, width: s * 2, height: s * 2, fill: c1 }));
  p.appendChild(el('rect', { x: 0, y: 0, width: s, height: s, fill: c2 }));
  p.appendChild(el('rect', { x: s, y: s, width: s, height: s, fill: c2 }));
  if (rng() < .5) {
    const sm = s * .35;
    p.appendChild(el('rect', { x: s * .5 - sm / 2, y: s * .5 - sm / 2, width: sm, height: sm, fill: c3 }));
    p.appendChild(el('rect', { x: s * 1.5 - sm / 2, y: s * 1.5 - sm / 2, width: sm, height: sm, fill: c3 }));
  }
  return p;
}

function pat_circuit(id, pal, rng, sz) {
  const s = sz * (2 + rng() * 3.5), cols = 4, rows = 4;
  const p = el('svg', { xmlns: NS, width: s * cols, height: s * rows, viewBox: `0 0 ${s*cols} ${s*rows}` });
  p.appendChild(el('rect', { x: 0, y: 0, width: s * cols, height: s * rows, fill: rc2(pal, rng) }));
  const lw = sz * (.18 + rng() * .28);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    if (rng() < .6) {
      const x = c * s, y = r * s, col = rc2(pal, rng);
      const t = Math.floor(rng() * 4);
      let d;
      if (t === 0) d = `M ${x},${y + s / 2} L ${x + s},${y + s / 2}`;
      else if (t === 1) d = `M ${x + s / 2},${y} L ${x + s / 2},${y + s}`;
      else if (t === 2) d = `M ${x},${y + s / 2} L ${x + s / 2},${y + s / 2} L ${x + s / 2},${y + s}`;
      else d = `M ${x + s / 2},${y} L ${x + s / 2},${y + s / 2} L ${x + s},${y + s / 2}`;
      p.appendChild(el('path', { d, fill: 'none', stroke: col, 'stroke-width': lw, 'stroke-linecap': 'square' }));
      if (rng() < .35) p.appendChild(el('circle', { cx: x + s / 2, cy: y + s / 2, r: sz * (.3 + rng() * .4), fill: rc2(pal, rng) }));
    }
  }
  return p;
}

function pat_dots(id, pal, rng, sz) {
  const s = sz * (1 + rng() * 2);
  const r = s * (.22 + rng() * .22);
  const p = el('svg', { xmlns: NS, width: s, height: s, viewBox: `0 0 ${s} ${s}` });
  p.appendChild(el('rect', { x: 0, y: 0, width: s, height: s, fill: rc2(pal, rng) }));
  p.appendChild(el('circle', { cx: s / 2, cy: s / 2, r, fill: rc2(pal, rng) }));
  if (rng() < .4) {
    p.appendChild(el('circle', { cx: s / 2, cy: s / 2, r: r * .5, fill: rc2(pal, rng) }));
  }
  return p;
}

const PATTERN_BUILDERS = [pat_hatch, pat_checker, pat_circuit, pat_dots];

// Returns a p5.Texture data url
function generateRandomSVGTextureUrl(seedStr) {
  const rng = mkRng(seedStr ? seedStr : Math.random() * 0xFFFFFFFF);
  const pal = getPalette(rng);
  const builder = rc2(PATTERN_BUILDERS, rng);
  const svgNode = builder('pat', pal, rng, 20); // base size 20

  const s = new XMLSerializer().serializeToString(svgNode);
  const b64 = btoa(unescape(encodeURIComponent(s)));
  return `data:image/svg+xml;base64,${b64}`;
}
