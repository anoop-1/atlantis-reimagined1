// Page-specific word counts for every US training page (US_TRAINING_PAGES), from the built site.
// <main> text is split into sentences with the page's place name masked; a sentence that appears on 3+ US
// training pages counts as shared template text, the rest as page-specific. Standard: 2,000+ page-specific words.
//   node scripts/training-refine/measure.mjs                 summary + pages under 2,000
//   node scripts/training-refine/measure.mjs --json <file>   write every page's numbers
//   node scripts/training-refine/measure.mjs --exclude-geo   ignore the geo-depth section (to size a new one)
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, builtMainHtml, text } from './lib.mjs';

const STATES = { AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', DC: 'District of Columbia' };

export async function measure({ excludeGeo = false } = {}) {
  const { US_TRAINING_PAGES } = await import(join(ROOT, 'src/data/us-training-2026-11.mjs') + `?t=${Date.now()}`);
  const pages = {};
  const missing = [];
  for (const [p, name] of Object.entries(US_TRAINING_PAGES)) {
    let html = builtMainHtml(p);
    if (html === null) { missing.push(p); continue; }
    if (excludeGeo) html = html.replace(/<section data-geo-depth="2026-10"[\s\S]*?<\/section>/g, ' ');
    const t = html.replace(/<(p|li|h[1-6]|td|th|div|section|dt|dd|summary|figcaption|tr)\b[^>]*>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ');
    const [city, st] = name.replace(/^the /, '').split(/,\s*/);
    const reps = [city]; if (st && STATES[st]) reps.push(STATES[st], st);
    pages[p] = t.split(/\n|(?<=[.!?])\s+(?=[A-Z])/).map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => s.split(' ').length >= 4)
      .map((s) => { let m = s; for (const r of reps) m = m.split(r).join('{X}'); return { m: m.toLowerCase(), w: s.split(' ').filter((x) => /[A-Za-z0-9]/.test(x)).length }; });
  }
  const freq = new Map();
  for (const ss of Object.values(pages)) for (const m of new Set(ss.map((x) => x.m))) freq.set(m, (freq.get(m) || 0) + 1);
  const rows = Object.entries(pages).map(([path, ss]) => {
    let total = 0, unique = 0; for (const x of ss) { total += x.w; if (freq.get(x.m) <= 2) unique += x.w; }
    return { path, name: US_TRAINING_PAGES[path], total, unique };
  }).sort((a, b) => a.unique - b.unique);
  return { rows, missing };
}

if (process.argv[1] && process.argv[1].endsWith('measure.mjs')) {
  const { rows, missing } = await measure({ excludeGeo: process.argv.includes('--exclude-geo') });
  const u = rows.map((r) => r.unique);
  const under = rows.filter((r) => r.unique < 2000);
  console.log(`US training pages measured: ${rows.length}${missing.length ? ` (not built: ${missing.join(', ')})` : ''}`);
  console.log(`page-specific words: min ${u[0]}, median ${u[Math.floor(u.length / 2)]}, max ${u[u.length - 1]}; under 2,000: ${under.length}`);
  for (const r of under) console.log(`  ${r.unique}\t${r.total}\t${r.path}`);
  const j = process.argv.indexOf('--json');
  if (j > 0) writeFileSync(process.argv[j + 1], JSON.stringify(rows, null, 1) + '\n');
}
