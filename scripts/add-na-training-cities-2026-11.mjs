// Wire the North American training city pages written on 2026-11-11 into the site (owner: more
// /ndt-training-{city} pages across North America, 2,000+ words each).
// Source records: src/data/na-training-2026-11/_manifest.json + {slug}.json (profile facts) and
// src/data/deep-content/ndt-training-{slug}.json (long-form copy, injected by scripts/deep-content.mjs).
// Idempotent: run again after adding cities; a city already wired is skipped in every file.
//   node scripts/add-na-training-cities-2026-11.mjs            (wire every city whose two files exist)
//   node scripts/add-na-training-cities-2026-11.mjs --check    (report only)
// Touches: na-training-cities.json, geo-hierarchy.json, training-cities.ts (profiles appended to
// TRAINING_CITY_PROFILES), src/pages/ndt-training-{slug}.tsx, RouteTable.tsx, curated-cities.ts
// (TRAINING_CITY_PAGE_SLUGS), us-training-2026-11.mjs + approved-training-fees.json (US pages: fee
// table and US hand-off block), canada-certification-2026-10.json (Canadian pages: SNT-TC-1A lead,
// title, description, H1).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const rd = (p) => readFileSync(join(ROOT, p), 'utf8');
const wr = (p, s) => { if (!CHECK) writeFileSync(join(ROOT, p), s); };
const MANIFEST = JSON.parse(rd('src/data/na-training-2026-11/_manifest.json')).cities;
const ready = Object.keys(MANIFEST).filter((s) => existsSync(join(ROOT, `src/data/na-training-2026-11/${s}.json`)) && existsSync(join(ROOT, `src/data/deep-content/ndt-training-${s}.json`)));
const log = [];
const pascal = (s) => s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join('');

// 1. na-training-cities.json (titles/H1 for NA city pages) — insert rows before the closing of "cities"
{
  const p = 'src/data/na-training-cities.json';
  let s = rd(p);
  const data = JSON.parse(s);
  const add = ready.filter((slug) => !data.cities[slug]);
  if (add.length) {
    const rows = add.map((slug) => { const [n, ab, c] = MANIFEST[slug]; return `    ${JSON.stringify(slug)}: ${JSON.stringify([n, ab, c, 'city'])}`; }).join(',\n');
    const i = s.indexOf('"cities"'); const close = s.indexOf('\n  }', i);
    s = s.slice(0, close) + ',\n' + rows + s.slice(close);
    JSON.parse(s); wr(p, s); log.push(`na-training-cities.json +${add.length}`);
  }
}
// 2. geo-hierarchy.json cities
{
  const p = 'src/data/geo-hierarchy.json';
  let s = rd(p); const data = JSON.parse(s);
  const add = ready.filter((slug) => !data.cities[slug]);
  if (add.length) {
    const rows = add.map((slug) => `  ${JSON.stringify(slug)}: ${JSON.stringify([MANIFEST[slug][0], MANIFEST[slug][3]])}`).join(',\n');
    const i = s.indexOf('"cities"'); const close = s.indexOf('\n }', i);
    s = s.slice(0, close) + ',\n' + rows + s.slice(close);
    JSON.parse(s); wr(p, s); log.push(`geo-hierarchy.json +${add.length}`);
  }
}
// 3. training-cities.ts profiles
{
  const p = 'src/data/training-cities.ts';
  let s = rd(p);
  const has = new Set([...s.matchAll(/slug:\s*"([a-z0-9-]+)",\s*\n\s*city:/g)].map((m) => m[1]));
  const label = (slug) => { const na = JSON.parse(rd('src/data/na-training-cities.json')).cities; return (na[slug] || MANIFEST[slug] || [slug])[0]; };
  // Hand-built city pages (Los Angeles, Denver, Philadelphia, Pittsburgh, Charlotte, New Orleans) have no profile here: use the nearest real profile's band.
  const SALARY_FALLBACK = { 'los-angeles': 'san-diego', denver: 'salt-lake-city', philadelphia: 'baltimore', pittsburgh: 'cleveland', charlotte: 'north-charleston', 'new-orleans': 'baton-rouge' };
  const salaryOf = (slug0) => { const slug = SALARY_FALLBACK[slug0] || slug0; const m = new RegExp(`slug:\\s*"${slug}",\\s*\\n\\s*city:`).exec(s); if (!m) return null; const j = s.indexOf('salary: {', m.index); const k = s.indexOf('},', j); return s.slice(j, k + 2); };
  const blocks = [];
  for (const slug of ready.filter((x) => !has.has(x))) {
    const r = JSON.parse(rd(`src/data/na-training-2026-11/${slug}.json`));
    const [name, , country] = MANIFEST[slug];
    const sal = salaryOf(r.salaryFrom);
    if (!sal) throw new Error(`${slug}: salaryFrom ${r.salaryFrom} not found`);
    const sibs = (r.siblings || []).slice(0, 6).map((x) => `      { slug: ${JSON.stringify(x)}, label: ${JSON.stringify(label(x))} },`).join('\n');
    const canada = country === 'Canada';
    blocks.push(`  {
    slug: ${JSON.stringify(slug)},
    city: ${JSON.stringify(name)},
    country: ${JSON.stringify(country)},
    lat: ${Number(r.lat)}, lng: ${Number(r.lng)},
    localContext:
      ${JSON.stringify(r.localContext)},
    primaryCert: "ASNT",
    secondaryCert: ${canada ? '"CGSB"' : '"ISO 9712"'},
    otherCerts: [],
    certPathwayNote:
      ${JSON.stringify(r.certPathwayNote)},
    ${sal}
    examCenters: [
      { name: "Atlantis NDT — on-site corporate delivery", bodies: ["ASNT"] },
    ],
    siblings: [
${sibs}
    ],
  },`);
  }
  if (blocks.length) {
    const start = s.indexOf('export const TRAINING_CITY_PROFILES');
    const end = s.indexOf('\n];', start);
    s = s.slice(0, end) + `\n  // === North American training expansion 2026-11-11 (scripts/add-na-training-cities-2026-11.mjs) ===\n` + blocks.join('\n') + s.slice(end);
    wr(p, s); log.push(`training-cities.ts +${blocks.length} profiles`);
  }
}
// 4. page wrappers
let wrappers = 0;
for (const slug of ready) {
  const f = `src/pages/ndt-training-${slug}.tsx`;
  if (existsSync(join(ROOT, f))) continue;
  wr(f, `import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

// North American training expansion 2026-11-11: profile in src/data/training-cities.ts, long-form copy in
// src/data/deep-content/ndt-training-${slug}.json (wired by scripts/add-na-training-cities-2026-11.mjs).
export default function NDTTraining${pascal(slug)}() {
  const profile = getTrainingCityProfile('${slug}');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
`); wrappers++;
}
if (wrappers) log.push(`page wrappers +${wrappers}`);
// 5. RouteTable lazy imports + routes
{
  const p = 'src/RouteTable.tsx';
  let s = rd(p);
  const add = ready.filter((slug) => !s.includes(`path="/ndt-training-${slug}"`));
  if (add.length) {
    const anchorImp = 'const NDTTrainingNewportNews = lazy(() => import("./pages/ndt-training-newport-news"));';
    const anchorRoute = '<Route path="/ndt-training-newport-news" element={<LazyRoute Component={NDTTrainingNewportNews} />} />';
    if (!s.includes(anchorImp) || !s.includes(anchorRoute)) throw new Error('RouteTable anchors not found');
    const imps = add.map((slug) => `const NDTTraining${pascal(slug)} = lazy(() => import("./pages/ndt-training-${slug}")); // NA training 2026-11-11`).join('\n');
    const indent = s.slice(s.lastIndexOf('\n', s.indexOf(anchorRoute)) + 1, s.indexOf(anchorRoute));
    const routes = add.map((slug) => `${indent}<Route path="/ndt-training-${slug}" element={<LazyRoute Component={NDTTraining${pascal(slug)}} />} />`).join('\n');
    s = s.replace(anchorImp, `${anchorImp}\n${imps}`).replace(anchorRoute, `${anchorRoute}\n${routes}`);
    wr(p, s); log.push(`RouteTable +${add.length}`);
  }
}
// 6. curated-cities TRAINING_CITY_PAGE_SLUGS
{
  const p = 'src/data/curated-cities.ts';
  let s = rd(p);
  const i = s.indexOf('export const TRAINING_CITY_PAGE_SLUGS');
  const open = s.indexOf('new Set([', i) + 'new Set(['.length;
  const block = s.slice(open, s.indexOf(']);', open));
  const add = ready.filter((slug) => !new RegExp(`'${slug}'`).test(block));
  if (add.length) {
    s = s.slice(0, open) + `\n  ${add.map((x) => `'${x}'`).join(',')}, // NA training expansion 2026-11-11` + s.slice(open);
    wr(p, s); log.push(`curated-cities TRAINING +${add.length}`);
  }
}
// 7. US pages: us-training list + approved fee table
{
  const us = ready.filter((slug) => MANIFEST[slug][2] === 'USA');
  const p = 'src/data/us-training-2026-11.mjs';
  let s = rd(p);
  const add = us.filter((slug) => !s.includes(`"/ndt-training-${slug}"`));
  if (add.length) {
    const end = s.indexOf('\n};', s.indexOf('export const US_TRAINING_PAGES'));
    s = s.slice(0, end) + '\n' + add.map((slug) => `  "/ndt-training-${slug}": ${JSON.stringify(`${MANIFEST[slug][0]}, ${MANIFEST[slug][1]}`)}, // 2026-11-11`).join('\n') + s.slice(end);
    wr(p, s); log.push(`us-training list +${add.length}`);
  }
  const fp = 'src/data/approved-training-fees.json';
  let f = rd(fp); const fd = JSON.parse(f);
  const addF = us.filter((slug) => !fd.regions.US.pages.includes(`/ndt-training-${slug}`));
  if (addF.length) {
    // insert into the US pages array in place (keeps the file's formatting)
    const usStart = f.indexOf('"US"'); const pagesKey = f.indexOf('"pages"', usStart); const close = f.indexOf(']', pagesKey);
    const ins = addF.map((slug) => `"/ndt-training-${slug}"`).join(', ');
    const before = f.slice(0, close).replace(/\s*$/, '');
    f = before + (before.endsWith('[') ? '' : ', ') + ins + f.slice(close);
    JSON.parse(f); wr(fp, f); log.push(`approved fees US +${addF.length}`);
  }
}
// 8. Canadian pages: SNT-TC-1A lead + meta
{
  const ca = ready.filter((slug) => MANIFEST[slug][2] === 'Canada');
  const p = 'src/data/canada-certification-2026-10.json';
  const d = JSON.parse(rd(p));
  let n = 0;
  for (const slug of ca) {
    const path = `/ndt-training-${slug}`;
    const r = JSON.parse(rd(`src/data/na-training-2026-11/${slug}.json`));
    if (!d.paths.includes(path)) { d.paths.push(path); n++; }
    if (r.canadaMeta && !(d.pages && d.pages[path])) { d.pages = d.pages || {}; d.pages[path] = r.canadaMeta; }
  }
  if (n) { wr(p, JSON.stringify(d, null, 2) + '\n'); log.push(`canada-certification +${n}`); }
}
console.log(`NA training wiring 2026-11-11: ${ready.length} cities ready of ${Object.keys(MANIFEST).length}${CHECK ? ' (check only)' : ''}`);
for (const l of log) console.log('  ' + l);
