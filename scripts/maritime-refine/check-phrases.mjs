// 10-word phrase overlap check for maritime records (2026-11-23).
// Usage: node scripts/maritime-refine/check-phrases.mjs <slug|port--service> ...   (or --all-new <list file>)
// Compares the copy of each named record (cities/, pages/, combos/) against every other maritime record and
// reports shared 10-word runs, ignoring the owner-specified status wording and code/standard titles.
// Advisory: quoted rule text (coating triggers, table wording) may legitimately repeat between guides; the
// build guard and scripts/maritime-validate.mjs enforce the sentence-level rule.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const DATA = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'data', 'maritime-section');
// Owner-specified status wording, the founder credential, standard titles and in-water wording may repeat.
const ALLOW = [/ur z17/, /process of obtaining/, /lloyd'?s register and abs/, /dnv lloyd/, /level iii in ut/, /ut rt mt pt/, /in lieu of a bottom examination/, /hong kong international convention/, /requirements for use of extremely thick/, /info atlantisndt com/];
const strip = (s) => String(s).replace(/<[^>]+>/g, ' ').toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
function copyOf(r) {
  const parts = [r.intro, ...(r.highlights || []).map((h) => h.p), ...(r.faqs || []).map((f) => `${f.q} ${f.a}`), r.logistics];
  for (const s of r.sections || []) parts.push(...[].concat(s.p || []), ...[].concat(s.list || []), ...((s.table?.rows) || []).flat());
  for (const k of ['port', 'facilities', 'context', 'jobs']) if (r[k]) parts.push(...[].concat(r[k].p || []), ...[].concat(r[k].list || []));
  return parts.filter(Boolean).map(strip);
}
function shingles(texts) { const out = new Set(); for (const t of texts) { const w = t.split(' '); for (let i = 0; i + 10 <= w.length; i++) { const g = w.slice(i, i + 10).join(' '); if (!ALLOW.some((a) => a.test(g))) out.add(g); } } return out; }
const recs = new Map();
for (const dir of ['cities', 'pages', 'combos']) for (const f of readdirSync(join(DATA, dir))) if (f.endsWith('.json')) recs.set(f.slice(0, -5), shingles(copyOf(JSON.parse(readFileSync(join(DATA, dir, f), 'utf8')))));
let targets = process.argv.slice(2);
if (targets[0] === '--all-new') targets = readFileSync(targets[1], 'utf8').split(/\s+/).filter(Boolean);
let bad = 0;
for (const t of targets) {
  const mine = recs.get(t); if (!mine) { console.log(`✗ ${t}: no record`); bad++; continue; }
  const hits = [];
  for (const [k, other] of recs) { if (k === t) continue; for (const g of mine) if (other.has(g)) hits.push(`${k}: "${g}"`); }
  if (hits.length) { bad++; console.log(`✗ ${t}: ${hits.length} shared 10-word runs`); for (const h of hits.slice(0, 6)) console.log('   ' + h); }
  else console.log(`✓ ${t}`);
}
process.exit(bad ? 1 : 0);
