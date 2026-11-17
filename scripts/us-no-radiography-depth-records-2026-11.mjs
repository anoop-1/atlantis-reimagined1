/**
 * One-off, idempotent: apply the US no-radiography rule (src/data/us-no-radiography-2026-11.mjs,
 * force mode) to the depth-page records of /inspection/third-party-inspection-{US city}, so the React
 * layer (DepthPage reads src/data/depth-pages.json via public/data/depth/) says what the crawler pass
 * makes the built HTML say. Edits the JSON as text (one JSON-encoded string replaced by another) so
 * the rest of the 14 MB file keeps its formatting. Prints the US_RT_DEPTH_PATHS list to paste into
 * the data module when it changes.
 *
 *   node scripts/us-no-radiography-depth-records-2026-11.mjs           # dry run
 *   node scripts/us-no-radiography-depth-records-2026-11.mjs --write
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setUsPlaces, isUsInspectionPath, stripUsRtOffer } from '../src/data/us-no-radiography-2026-11.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = join(ROOT, 'src/data/depth-pages.json');
const na = JSON.parse(readFileSync(join(ROOT, 'src/data/na-training-cities.json'), 'utf8')).cities;
const conv = JSON.parse(readFileSync(join(ROOT, 'src/data/us-conventional-ndt-2026-11/_cities.json'), 'utf8'));
setUsPlaces([
  ...Object.entries(na).filter(([, e]) => /USA|United States/.test(e[2])).map(([s]) => s),
  ...(Array.isArray(conv) ? conv : conv.cities).map((c) => c.slug),
]);

let raw = readFileSync(FILE, 'utf8');
const recs = JSON.parse(raw);
function* walk(o, p = '') {
  if (typeof o === 'string') yield [p, o];
  else if (Array.isArray(o)) for (let i = 0; i < o.length; i++) yield* walk(o[i], `${p}[${i}]`);
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) yield* walk(v, `${p}.${k}`);
}
const paths = [];
let edits = 0, missing = 0;
for (const r of recs) {
  const path = '/' + String(r.slug).replace(/^\//, '');
  if (!/^\/inspection\/third-party-inspection-/.test(path) || !isUsInspectionPath(path)) continue;
  // The record's span in the raw text: the top-level object ("\n  {" … "\n  }") holding its slug key.
  const key = `"slug": ${JSON.stringify(r.slug)}`;
  const at = raw.indexOf(key);
  if (at < 0 || raw.indexOf(key, at + 1) >= 0) { console.warn(`slug not unique: ${path}`); missing++; continue; }
  const start = raw.lastIndexOf('\n  {', at);
  const end = raw.indexOf('\n  }', at);
  let span = raw.slice(start, end);
  let any = false;
  for (const [p, s] of walk(r)) {
    if (/^\.(slug|source)/.test(p)) continue;
    const x = stripUsRtOffer(s, { force: true });
    if (!x.n) continue;
    any = true;
    const a = JSON.stringify(s), b = JSON.stringify(x.text);
    if (!span.includes(a)) { missing++; console.warn(`not found in record: ${path} ${p}`); continue; }
    span = span.split(a).join(b);
    edits++;
  }
  raw = raw.slice(0, start) + span + raw.slice(end);
  if (any) paths.push(path);
}
console.log(JSON.stringify({ edits, missing, pages: paths.length }));
console.log('US_RT_DEPTH_PATHS =', JSON.stringify(paths));
if (process.argv.includes('--write') && edits) { writeFileSync(FILE, raw); console.log('written', FILE); }
