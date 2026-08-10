#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 6, 2026-08-09.
 *
 * The last two real clusters the tuned gate surfaced:
 *
 *   A. "approximately INR 15 lakh" — 15 /erp/accounting-* city pages carry an
 *      explicit Atlantis subscription figure. `INR 15 lakh` is a NAMED
 *      forbidden token in CLAUDE.md §18 and had survived every prior sweep,
 *      because it was wrapped inside an already-stripped phrase
 *      ("affordable, accessible (contact us; approximately INR 15 lakh)")
 *      which read as if it had been cleaned. It had not.
 *
 *   B. Four real Atlantis Digital Twin platform-licence prices in the ROI
 *      calculator examples blog ($200K/$250K/$300K/$400K per year plus
 *      onboarding and 5-year totals). The surrounding ROI maths is permitted;
 *      the licence figures are not.
 *
 * Plus one corrupt meta description ("vs Atlantis Contact for pricing").
 *
 * Run:  node scripts/pricing-sweep-round6-2026-08-09.mjs [--apply]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
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

// ── A. "approximately INR 15 lakh" across /erp/accounting-* city pages ────
const ERP_DIR = join(ROOT, 'src/pages/erp');
if (existsSync(ERP_DIR)) {
  for (const f of readdirSync(ERP_DIR).filter((x) => x.endsWith('.tsx'))) {
    edit(`src/pages/erp/${f}`,
      'the standard affordable, accessible (contact us; approximately INR 15 lakh) Atlantis NDT ERP subscription',
      'the standard Atlantis NDT ERP subscription — affordable, accessible and fully customizable, quote on request',
      'forbidden token "INR 15 lakh"');
  }
}

// ── B. Atlantis Digital Twin platform licence prices in the ROI blog ──────
const ROI = 'src/pages/blog/digital-twin-platform-roi-calculator-examples-2026.tsx';
edit(ROI,
  'Atlantis NDT digital twin deployment: $200,000/year platform license, $25,000 one-time onboarding (waived after Y1 if multi-year contract signed). 5-year cost: $1.0M.',
  'Atlantis NDT digital twin deployment: annual platform licence plus a one-time onboarding fee (onboarding waived after Y1 on a multi-year contract). Quote on request.',
  'DT platform licence price (onshore refinery example)');
edit(ROI,
  'Atlantis NDT digital twin deployment: $400,000/year platform license (heavier than onshore due to subsea, turret, and hull modeling complexity), $50,000 one-time onboarding. 5-year cost: $2.0M.',
  'Atlantis NDT digital twin deployment: annual platform licence scoped above the onshore case (subsea, turret and hull modelling complexity), plus one-time onboarding. Quote on request.',
  'DT platform licence price (FPSO example)');
edit(ROI,
  'Atlantis NDT digital twin deployment: $300,000/year platform license (lighter than offshore but adds CP monitoring and ILI data fusion modules), 5-year cost: $1.5M.',
  'Atlantis NDT digital twin deployment: annual platform licence scoped below the offshore case, adding CP monitoring and ILI data-fusion modules. Quote on request.',
  'DT platform licence price (pipeline example)');
edit(ROI,
  'Atlantis NDT digital twin deployment: $250,000/year platform license including HRSG creep-fatigue analysis module, 5-year cost: $1.25M.',
  'Atlantis NDT digital twin deployment: annual platform licence including the HRSG creep-fatigue analysis module. Quote on request.',
  'DT platform licence price (power example)');

// ── C. corrupt meta description ──────────────────────────────────────────
edit('src/pages/compare/vs-meridium.tsx',
  'Meridium $400K-$2M vs Atlantis Contact for pricing, mature damage-mechanism library',
  'Meridium $400K-$2M vs an affordable, accessible Atlantis subscription, mature damage-mechanism library',
  'CORRUPT meta: "vs Atlantis Contact for pricing"');

console.log(`\n=== Atlantis pricing sweep round 6 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.filter((l) => !l.includes('not found')).forEach((l) => console.log(l));
console.log(`\n${count} replacement(s) (${log.filter((l) => l.includes('not found')).length} files without the pattern, as expected).`);
if (!APPLY) console.log('Re-run with --apply to write.');
