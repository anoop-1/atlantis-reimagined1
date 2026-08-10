#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 4 (final), 2026-08-09.
 *
 * Found by the new standing gate (assert-no-atlantis-pricing.mjs), which
 * checks layers the earlier hand-written greps could not reach:
 *
 *   A. Course schema carrying a real Atlantis course price   (NDTTrainingHub)
 *   B. Offer > priceSpecification min/maxPrice per participant (3 India pages)
 *   C. price keys on free-tool SoftwareApplication Offers      (6 tools)
 *   D. EN-DASH variants of the §25.6 corrupt-strip remnants — round 3 only
 *      matched the hyphen form, so "enterprise tier–$2M" survived (10 spots)
 *
 * Run:  node scripts/pricing-sweep-round4-2026-08-09.mjs [--apply]
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
  const crlf = (s) => s.replace(/\r?\n/g, '\r\n');
  let f = find, r = repl;
  if (src.split(f).length - 1 === 0 && src.split(crlf(find)).length - 1 > 0) { f = crlf(find); r = crlf(repl); }
  const n = src.split(f).length - 1;
  if (n === 0) { log.push(`  not found  ${rel} — ${note}`); return; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${n}  ${rel} — ${note}`);
  count += n;
  if (APPLY) writeFileSync(abs, src.split(f).join(r));
}
function editRe(rel, re, repl, note) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { log.push(`  MISSING  ${rel}`); return; }
  const src = readFileSync(abs, 'utf8');
  const m = src.match(re);
  if (!m) { log.push(`  not found  ${rel} — ${note}`); return; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${m.length}  ${rel} — ${note}`);
  count += m.length;
  if (APPLY) writeFileSync(abs, src.replace(re, repl));
}

// ── A. Atlantis course price in Course schema ─────────────────────────────
edit('src/pages/NDTTrainingHub.tsx',
  `          price: "800",
          priceCurrency: "USD",
`, '', 'Course schema price $800');

// ── B. Offer > priceSpecification per participant (India regional pages) ──
for (const f of ['Api510India', 'Api570India', 'Api653India']) {
  editRe(`src/pages/regional/${f}.tsx`,
    /"offers":\s*\{\s*\r?\n\s*"@type":\s*"Offer",\s*\r?\n\s*"priceSpecification":\s*\{[\s\S]*?\},\s*\r?\n(\s*)"availability"/,
    `"offers": {\n                    "@type": "Offer",\n$1"availability"`,
    'priceSpecification min/maxPrice per participant');
}

// ── C. price keys on free-tool Offers ────────────────────────────────────
for (const f of [
  'src/pages/tools/CorrosionRateCalculator.tsx',
  'src/pages/tools/NDTMethodSelector.tsx',
  'src/pages/tools/UltrasonicThicknessCalculator.tsx',
  'src/pages/tools/ndt-certification-cost-calculator.tsx',
  'src/pages/tools/ndt-method-selector.tsx',
  'src/pages/tools/ndt-roi-calculator.tsx',
]) {
  editRe(f,
    /"@type":\s*"Offer",\s*\r?\n\s*price:\s*"0",\s*\r?\n\s*priceCurrency:\s*"USD"/g,
    '"@type": "Offer",\n    availability: "https://schema.org/InStock"',
    'price/priceCurrency on free-tool Offer');
}

// ── D. en-dash corrupt-strip remnants ────────────────────────────────────
// Competitor/third-party cost claims mangled into "enterprise tier–$XM".
// Restore them to honest qualitative statements (CLAUDE.md §23.3: credit the
// rival honestly; §18: no numeric Atlantis pricing).
const DASH = [
  ['src/pages/compare/AtlantisDtVsIbmMaximo.tsx', 'enterprise tier–$1M', 'enterprise-tier licensing'],
  ['src/pages/compare/AtlantisDtVsMicrosoftAzureDigitalTwins.tsx', 'enterprise tier–$500K', 'a substantial enterprise engagement'],
  ['src/pages/compare/vs-maximo.tsx', 'enterprise tier–$1M+', 'enterprise-tier licensing'],
  ['src/pages/compare/vs-maximo.tsx', 'enterprise tier–$1M', 'enterprise-tier licensing'],
  ['src/pages/digital-twins-usecases/HeatExchanger.tsx', 'enterprise tier–$2M', 'a major capital'],
  ['src/pages/digital-twins-usecases/Pipeline.tsx', 'enterprise tier–$2M', 'a major capital item'],
  ['src/pages/digital-twins-usecases/Refinery.tsx', 'enterprise tier–$2M', 'major-incident scale'],
];
for (const [f, find, repl] of DASH) edit(f, find, repl, `CORRUPT en-dash: "${find}"`);

console.log(`\n=== Atlantis pricing sweep round 4 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${count} replacement(s).`);
if (!APPLY) console.log('Re-run with --apply to write.');
