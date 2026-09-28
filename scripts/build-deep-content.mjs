// Validates content-agent output for deep-content sections and writes
// src/data/deep-content/<key>.json (see scripts/deep-content.mjs).
// Usage: node scripts/build-deep-content.mjs <dir-with-deep-out-*.json> [--min 2000]
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { deepContentKey } from './deep-content.mjs';

const SRC = process.argv[2];
const MIN = Number(process.argv[process.argv.indexOf('--min') + 1]) || 2000;
if (!SRC) { console.error('usage: node scripts/build-deep-content.mjs <dir>'); process.exit(1); }

const FORBIDDEN = [
  [/[$€£₹]\s?\d/, 'currency amount'],
  [/\b(USD|CAD|INR|SAR|AED|GBP|EUR)\s?\d/, 'currency amount'],
  [/per (user|seat|month)\b[^.]{0,30}\d/i, 'per-seat price'],
  [/\bOdoo\b/, 'Odoo'],
  [/anu\.anoop485/i, 'personal email'],
  [/<h1[\s>]/i, 'h1 in body'],
  [/\b(Atlantis|our|we)\b[^.]{0,80}\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service)\b(?![^.]{0,40}\b(not|isn't|doesn't|never)\b)/i, 'RBI/FFS offered'],
  [/\b(ERP|Atlantis)\b[^.]{0,80}\b(interval auto-calculation|calculates? (the )?(next )?inspection (interval|date)|corrosion[- ]rate calculation|Gantt|bar-?code|QR[- ]code)/i, 'unsupported ERP feature'],
  [/Atlantis[^.]{0,80}\b(ISO 9712|PCN|CSWIP|API 510|API 570|API 653)\b[^.]{0,30}\b(training|course)\b(?![^.]{0,40}\bnot\b)/i, 'non-ASNT training offer'],
  [/\b\d{1,3}(\.\d)?%\s+(faster|reduction|less|more|fewer|of (our )?(customers|clients))\b/i, 'invented stat'],
];
const words = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;
const shingles = (h) => { const w = h.replace(/<[^>]+>/g, ' ').toLowerCase().split(/\W+/).filter(Boolean); const s = new Set(); for (let i = 0; i + 8 <= w.length; i++) s.add(w.slice(i, i + 8).join(' ')); return s; };

const items = readdirSync(SRC).filter((f) => /^deep-out-.*\.json$/.test(f)).flatMap((f) => {
  try { return JSON.parse(readFileSync(join(SRC, f), 'utf-8')).map((x) => ({ ...x, _file: f })); }
  catch (e) { console.log('BAD JSON', f, e.message.slice(0, 80)); return []; }
});
const ok = []; const bad = [];
for (const it of items) {
  const why = [];
  if (!it.path || !it.bodyHtml) why.push('missing path/bodyHtml');
  else {
    const wc = words(it.bodyHtml); it.wc = wc;
    if (wc < MIN) why.push(`${wc} words`);
    if ((it.bodyHtml.match(/href=["']\/contact/g) || []).length < 3) why.push('<3 contact links');
    if ((it.bodyHtml.match(/<h2[\s>]/g) || []).length < 6) why.push('<6 h2');
    for (const [re, label] of FORBIDDEN) {
      const m = it.bodyHtml.match(re);
      // a disclaimer ("the ERP does not calculate…") is what we want, not a claim
      // an FAQ question ("Does the ERP calculate…?") answered "no" is also a disclaimer
      const asked = m && /\b(does|do|can|will|is)\s+(the\s+)?$/i.test(it.bodyHtml.slice(Math.max(0, m.index - 12), m.index));
      if (m && !asked && !/\b(not|never|no)\b|n['’]t\b/i.test(m[0])) why.push(`${label}: "${m[0].slice(0, 90)}"`);
    }
    if (!existsSync(join('dist', it.path.replace(/^\//, ''), 'index.html'))) why.push('page not in dist');
  }
  (why.length ? bad : ok).push({ ...it, why });
}
// similarity between city pages (8-word shingle Jaccard)
const sh = ok.map((it) => [it.path, shingles(it.bodyHtml)]);
let maxJ = 0, pair = '';
for (let i = 0; i < sh.length; i++) for (let j = i + 1; j < sh.length; j++) {
  const [a, A] = sh[i], [b, B] = sh[j]; let n = 0; for (const x of A) if (B.has(x)) n++;
  const J = n / (A.size + B.size - n); if (J > maxJ) { maxJ = J; pair = `${a} ~ ${b}`; }
}
console.log(`${ok.length} valid / ${items.length} submitted · max similarity ${maxJ.toFixed(3)} (${pair})`);
for (const b of bad) console.log(`  REJECT ${b.path} [${b._file}]: ${b.why.join('; ')}`);
mkdirSync('src/data/deep-content', { recursive: true });
for (const it of ok) writeFileSync(`src/data/deep-content/${deepContentKey(it.path)}.json`, JSON.stringify({ path: it.path, bodyHtml: it.bodyHtml }));
console.log(`wrote ${ok.length} files to src/data/deep-content/`);
if (bad.length) process.exitCode = 2;
