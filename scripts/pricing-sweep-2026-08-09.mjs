#!/usr/bin/env node
/**
 * Site-wide Atlantis-pricing sweep — 2026-08-09.
 *
 * CLAUDE.md §18 hard rule: never state the price of an ATLANTIS product or
 * service anywhere. Third-party costs (ASNT/AWS/API exam fees, equipment,
 * competitor licences), market salary data, and customer ROI figures are
 * explicitly ALLOWED and are deliberately NOT touched — the salary corpus is
 * the site's single biggest traffic asset (§29.1 SALARY_EXEMPT).
 *
 * This sweep targets the four layers where violations were actually found:
 *   1. scripts/prerender.mjs  — title/description overrides (SERP-visible)
 *   2. src/pages/*.tsx        — hardcoded "per student" meta descriptions
 *   3. blog page FAQ strings  — Atlantis ERP annual price
 *   4. any Schema.org Offer   — price / priceCurrency keys
 *
 * Run:  node scripts/pricing-sweep-2026-08-09.mjs           (report only)
 *       node scripts/pricing-sweep-2026-08-09.mjs --apply   (write changes)
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

/** [file, find, replace, note] — every edit is an exact, reviewed string. */
const EDITS = [
  // ── Layer 1: prerender.mjs SERP overrides ────────────────────────────────
  ['scripts/prerender.mjs',
    "title: 'ASNT Level III Consulting 2026: $1,500–$3,500/day Independent Approval'",
    "title: 'ASNT Level III Consulting 2026: Independent Written-Practice + Procedure Approval'",
    'Atlantis consulting day-rate in title'],
  ['scripts/prerender.mjs',
    "description: 'Independent ASNT Level III consulting: written-practice authoring, procedure approval, audit support (ADNOC, Aramco, QatarEnergy, NRC). $1,500-$3,500/day depending on method + travel. Free 30-min discovery call.'",
    "description: 'Independent ASNT Level III consulting: written-practice authoring, procedure approval, audit support (ADNOC, Aramco, QatarEnergy, NRC). Scoped per method + travel. Free 30-min discovery call, quote on request.'",
    'Atlantis consulting day-rate in description'],

  ['scripts/prerender.mjs',
    "title: 'Magnetic Particle Testing Singapore 2026: ISO 9712 + ASNT, $400/day, Same-Week Mobilisation'",
    "title: 'Magnetic Particle Testing Singapore 2026: ISO 9712 + ASNT, Same-Week Mobilisation'",
    'MT Singapore day-rate in title'],
  ['scripts/prerender.mjs',
    "title: 'Penetrant Testing Singapore 2026: ASTM E1417 + ISO 3452, $350/day, ASNT Level II'",
    "title: 'Penetrant Testing Singapore 2026: ASTM E1417 + ISO 3452, ASNT Level II'",
    'PT Singapore day-rate in title'],
  ['scripts/prerender.mjs',
    "title: 'Radiographic Testing Singapore 2026: Ir-192/Se-75/X-Ray, NEA-Licensed, $600–$1500/day'",
    "title: 'Radiographic Testing Singapore 2026: Ir-192/Se-75/X-Ray, NEA-Licensed, ASME V'",
    'RT Singapore day-rate in title'],

  ['scripts/prerender.mjs',
    "description: 'ASNT Level I/II/III training across 6 NDT methods + PAUT/TOFD. Online, onsite, blended. $800–$3,000 per course. 91% first-attempt pass rate.'",
    "description: 'ASNT Level I/II/III training across 6 NDT methods + PAUT/TOFD. Online, onsite, blended. 91% first-attempt pass rate. Quote on request.'",
    'Atlantis per-course price in training description'],

  // ── Layer 2: hardcoded "per student" meta descriptions ───────────────────
  ['src/pages/HyderabadTraining.tsx', 'INR 22,000 per student. ', '', 'per-student price'],
  ['src/pages/ndt-training-dubai.tsx', 'AED 4,500 per student. ', '', 'per-student price'],
  ['src/pages/ndt-training-houston.tsx', '$1,500 per student. ', '', 'per-student price'],
  ['src/pages/ndt-training-india.tsx', 'INR 22,000 per student. ', '', 'per-student price'],
  ['src/pages/ndt-training-saudi-arabia.tsx', 'SAR 5,500 per student. ', '', 'per-student price'],
  ['src/pages/ndt-training-singapore.tsx', 'SGD 2,200 per student. ', '', 'per-student price'],
  ['src/pages/Training-India.tsx', 'INR 22,000 per student. ', '', 'per-student price'],
  ['src/pages/Training-ME.tsx', 'AED 4,500 per student. ', '', 'per-student price'],
  ['src/pages/Training-USA.tsx', '$1,500 per student. ', '', 'per-student price'],

  // ── Layer 3: Atlantis ERP annual price inside a blog FAQ answer ──────────
  ['src/pages/blog/erp-software-london-affordable-uk-2026.tsx',
    'Atlantis NDT ERP eliminates this geographic premium entirely — the implementation is included in the regional pricing fee and delivered remotely by our Hyderabad and Houston teams, with travel to UK only for go-live workshops if required. Effective net cost for a London or Aberdeen contractor is identical at £14,500/year over the full 5-year window.',
    'Atlantis NDT ERP eliminates this geographic premium entirely — implementation is included and delivered remotely by our Hyderabad and Houston teams, with travel to the UK only for go-live workshops if required. A London contractor and an Aberdeen contractor are quoted on identical terms; there is no City premium. Quote on request.',
    'Atlantis ERP £14,500/year'],
];

let applied = 0, missing = 0;
const log = [];

for (const [rel, find, repl, note] of EDITS) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { log.push(`  MISSING FILE  ${rel}`); missing++; continue; }
  const src = readFileSync(abs, 'utf8');
  const n = src.split(find).length - 1;
  if (n === 0) { log.push(`  not found     ${rel}  (${note})`); missing++; continue; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${n}   ${rel}  (${note})`);
  if (APPLY) writeFileSync(abs, src.split(find).join(repl));
  applied += n;
}

console.log(`\n=== Atlantis pricing sweep — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${applied} replacement(s), ${missing} not-found.`);
if (!APPLY) console.log('Re-run with --apply to write.');
