#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 5 (last), 2026-08-09.
 *
 * The final five, all surfaced by the tuned standing gate:
 *   1. "From $800 per course."          — live meta description, /training hub
 *   2. "Procedure development packages start from $3,000." — FAQPage schema
 *   3. "Cost / mile (HR): affordable, accessible–$45K"     — MFL service table
 *   4. blogs.json  "Salary enterprise tier-$400K+"         — CORRUPT (salary)
 *   5. comparison-pages.json "(affordable, accessible-$32,500)" — CORRUPT
 *
 * 4 and 5 are §25.6 corrupt-strip damage inside large JSON content blobs —
 * the earlier rounds only walked .tsx/.ts, so JSON prose was never repaired.
 * Both restore third-party/salary figures, which §18 explicitly permits.
 *
 * Run:  node scripts/pricing-sweep-round5-2026-08-09.mjs [--apply]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APPLY = process.argv.includes('--apply');
const log = [];
let count = 0;

function edit(rel, find, repl, note) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { log.push(`  MISSING  ${rel}`); return; }
  const src = readFileSync(abs, 'utf8');
  const n = src.split(find).length - 1;
  if (n === 0) { log.push(`  not found  ${rel} — ${note}`); return; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${n}  ${rel} — ${note}`);
  count += n;
  if (APPLY) writeFileSync(abs, src.split(find).join(repl));
}

// 1. Atlantis course price in the training hub meta description
edit('src/pages/NDTTrainingHub.tsx',
  'From $800 per course. 95% pass rate.',
  '95% pass rate.',
  'meta description "From $800 per course"');

// 2. Atlantis procedure-development price inside FAQPage schema
edit('scripts/prerender.mjs',
  'Procedure development packages start from $3,000. Contact Atlantis NDT for a free quote.',
  'Procedure development is scoped per package. Contact Atlantis NDT for a free quote.',
  'FAQ schema "packages start from $3,000"');

// 3. Atlantis MFL service cost-per-mile (also corrupt)
edit('src/pages/services/MflPipelineInspection.tsx',
  '<td className="px-5 py-3 text-sm">affordable, accessible–$45K (with TFI combo)</td>',
  '<td className="px-5 py-3 text-sm">Quote on request (TFI combo available)</td>',
  'CORRUPT + Atlantis cost/mile in services table');

// 4. CORRUPT salary band in blogs.json (salary data is §18-permitted)
edit('src/data/blogs.json',
  'Salary enterprise tier-$400K+.',
  'Salary $200K-$400K+.',
  'CORRUPT: "Salary enterprise tier-$400K+"');

// 5. CORRUPT third-party project labour cost in comparison-pages.json
edit('src/data/comparison-pages.json',
  'UT requires 400-500 labor hours (affordable, accessible-$32,500)',
  'UT requires 400-500 labor hours ($20,000-$32,500)',
  'CORRUPT: "(affordable, accessible-$32,500)"');

console.log(`\n=== Atlantis pricing sweep round 5 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${count} replacement(s).`);
if (!APPLY) console.log('Re-run with --apply to write.');
