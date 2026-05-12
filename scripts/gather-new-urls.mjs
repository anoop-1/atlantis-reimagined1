// Gather all new ERP / training URLs created in sprints 1-6+ for GSC submission.
// Filters out URLs already in scripts/gsc-multi-progress.json.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

const newPages = [];

// 1. Sprint 2-3 — explicit new training pages
newPages.push(
  `${SITE}/ndt-training-singapore`,
  `${SITE}/ndt-training-jakarta`,
  `${SITE}/api-653-training-saudi-arabia`,
);

// 2. Sprint 4 ERP — module + industry hubs + module pages + industry pages
newPages.push(`${SITE}/erp-modules`, `${SITE}/erp-industries`);

const moduleDir = join(ROOT, 'src/pages/erp-modules');
if (existsSync(moduleDir)) {
  for (const f of readdirSync(moduleDir)) {
    if (f.endsWith('.tsx')) {
      const slug = f.replace(/\.tsx$/, '');
      newPages.push(`${SITE}/erp-modules/${slug}`);
    }
  }
}

const industryDir = join(ROOT, 'src/pages/erp-industries');
if (existsSync(industryDir)) {
  for (const f of readdirSync(industryDir)) {
    if (f.endsWith('.tsx')) {
      const slug = f.replace(/\.tsx$/, '');
      newPages.push(`${SITE}/erp-industries/${slug}`);
    }
  }
}

// 3. Sprint 4 — 89 new city ERP stubs (NOT existing 67)
const pagesDir = join(ROOT, 'src/pages');
const erpCityFiles = readdirSync(pagesDir).filter(f => /^ndt-erp-[a-z0-9-]+\.tsx$/.test(f));

// Heuristic: existing pre-Sprint-4 ERP cities (these were already in gsc-multi-progress most likely):
const preSprint4Cities = new Set([
  'aberdeen','abu-dhabi','anchorage','auckland','bakersfield','basrah','beaumont','bergen',
  'calgary','charlotte','chennai','christchurch','cincinnati','cleveland','darwin','denver',
  'doha','dubai','edmonton','fort-mcmurray','genoa','gladstone','glasgow','halifax','houston',
  'hyderabad','jubail','karratha','kuala-lumpur','kuwait','lagos','london','louisville',
  'madrid','manama','melbourne','midland','milwaukee','minneapolis','mobile','montreal',
  'mumbai','muscat','nashville','new-orleans','newcastle','odessa','oslo','paris','perth',
  'piraeus','plymouth','port-harcourt','ras-al-khaimah','rotterdam','saudi-arabia','sharjah',
  'singapore','sohar','solution','software-comparison','st-louis','sydney','toronto','tulsa',
  'vancouver','wellington','yanbu',
]);
for (const f of erpCityFiles) {
  const slug = f.replace(/^ndt-erp-/, '').replace(/\.tsx$/, '');
  if (!preSprint4Cities.has(slug)) {
    newPages.push(`${SITE}/ndt-erp-${slug}`);
  }
}

// 4. Sprint 6 — module × city combos already in src/pages/erp-modules/*-{city}.tsx
//    (already captured by step 2 since they're in the same dir)

// 5. New resource pages from Agent B (templates expansion)
const resDir = join(ROOT, 'src/pages/resources');
if (existsSync(resDir)) {
  const existingRes = new Set([
    'api-653-inspection-template', 'asnt-level-iii-study-guide',
    'ndt-inspection-checklist', 'ndt-procedure-template',
    'ndt-safety-checklist', 'training-requirements-matrix',
  ]);
  for (const f of readdirSync(resDir)) {
    if (f.endsWith('.tsx')) {
      const slug = f.replace(/\.tsx$/, '');
      if (!existingRes.has(slug)) {
        newPages.push(`${SITE}/resources/${slug}`);
      }
    }
  }
}

// Dedup
const unique = [...new Set(newPages)].sort();

// Filter out URLs already submitted/indexed per multi-progress
let alreadySubmitted = new Set();
let alreadyIndexed = new Set();
try {
  const prog = JSON.parse(readFileSync(join(__dirname, 'gsc-multi-progress.json'), 'utf-8'));
  alreadySubmitted = new Set(prog.submitted || []);
  alreadyIndexed = new Set(prog.alreadyIndexed || []);
} catch {}

const toSubmit = unique.filter(u => !alreadySubmitted.has(u) && !alreadyIndexed.has(u));

writeFileSync(join(__dirname, 'new-urls-for-indexing.txt'), toSubmit.join('\n') + '\n');

console.log(`Total NEW page URLs discovered: ${unique.length}`);
console.log(`Already submitted: ${unique.filter(u => alreadySubmitted.has(u)).length}`);
console.log(`Already indexed: ${unique.filter(u => alreadyIndexed.has(u)).length}`);
console.log(`To submit now: ${toSubmit.length}`);
console.log(`Written to scripts/new-urls-for-indexing.txt`);
console.log(`\nFirst 15:`);
toSubmit.slice(0, 15).forEach(u => console.log(`  ${u}`));
