#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 3, 2026-08-09.
 *
 * Two classes of defect, both found by scanning for price figures that sit
 * within ~90 chars of the word "Atlantis":
 *
 *   CLASS A — genuine remaining Atlantis price statements (§18 violations).
 *   CLASS B — CORRUPTED PROSE left behind by an earlier blanket strip that
 *             replaced a bare "$18K" / "$200K" token inside a numeric RANGE,
 *             producing live nonsense such as:
 *               "Average salary increase of affordable, accessible-$30,000"
 *               "Maximo at enterprise tier-$1M"
 *               "enterprise tier, enterprise tier-2M/year"
 *             This is the exact failure CLAUDE.md §25.6 warns about. These
 *             strings are visible to readers and to Google on money pages, so
 *             they are a content-quality defect as much as a pricing one.
 *
 * Run:  node scripts/pricing-sweep-round3-2026-08-09.mjs [--apply]
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

// ══ CLASS A — remaining Atlantis price statements ═════════════════════════
const LON = 'src/pages/blog/erp-software-london-affordable-uk-2026.tsx';
edit(LON, 'Atlantis NDT ERP regional pricing (~£14,500)',
  'Atlantis NDT ERP (quote on request)', 'Aberdeen FAQ Atlantis price');
edit(LON, 'priceGBP: "~£14,500/yr (flat USD affordable, accessible)"',
  'priceGBP: "Quote on request — flat annual, affordable and accessible"', 'comparison-table Atlantis price');
edit(LON, 'Flat £14,500/yr with UK localization, MTD VAT, CIS, PSSR.',
  'Flat annual subscription with UK localization, MTD VAT, CIS, PSSR. Quote on request.', 'related-link card Atlantis price');

edit('src/pages/blog/best-erp-software-singapore-construction-2026.tsx',
  'A Grade B1 contractor paying regional pricing for Atlantis NDT can recover up to SGD 9,000/year via PSG, making net effective cost approximately SGD 15,000/year — roughly 6% of the lowest-tier SAP equ',
  'A Grade B1 contractor adopting Atlantis NDT can recover a material share of the subscription via PSG, bringing the net effective cost to a small fraction of the lowest-tier SAP equ',
  'Atlantis net effective cost in SGD');

edit('src/pages/blog/welding-fabrication-erp-software-guide-2026.tsx',
  'Atlantis NDT ERP is the only solution under $30K/year that ships WPS register',
  'Atlantis NDT ERP is the only affordable-tier solution that ships WPS register',
  'Atlantis price ceiling claim');

edit('src/pages/blog/digital-twin-implementation-roadmap-oil-gas-2026.tsx',
  'Platform license (Atlantis NDT Digital Twins, 3 refinery process units + 1 FPSO + 1 pipeline segment): $1.4M (enterprise tier × 5 refinery-equivalen',
  'Platform license (Atlantis NDT Digital Twins, 3 refinery process units + 1 FPSO + 1 pipeline segment): quote on request, scoped by refinery-equivalen',
  'Atlantis DT platform price in budget list');
edit('src/pages/blog/digital-twin-implementation-roadmap-oil-gas-2026.tsx',
  '<li><strong>Platform license:</strong> $1.4M (Atlantis NDT pricing — enterprise tier × 4 refinery-equivalents + $600K FPSO + pipeline allocation)</li>',
  '<li><strong>Platform license:</strong> Atlantis NDT Digital Twins — scoped by refinery-equivalents plus FPSO and pipeline allocation. Quote on request.</li>',
  'Atlantis DT platform price in body list');

edit('src/pages/blog/atlantis-vs-zoho-vs-monday-erp-comparison.tsx',
  'An honest 2026 comparison of Atlantis NDT ERP (regional pricing flat), Zoho One',
  'An honest 2026 comparison of Atlantis NDT ERP (flat annual, quote on request), Zoho One',
  '"regional pricing" phrasing on Atlantis');

// ══ CLASS B — corrupted prose from the earlier blanket strip (§25.6) ═══════
edit('src/components/CertTrainingLocationPage.tsx',
  'salary: "Average salary increase of affordable, accessible-$30,000 annually"',
  'salary: "Typical salary uplift reported by certified technicians: up to $30,000 annually"',
  'CORRUPT: "increase of affordable, accessible-$30,000"');

edit('src/pages/blog/api-570-inspector-salary-2026-by-region-experience.tsx',
  '₹15-28 LPA (approximately affordable, accessible-$33,000 USD)',
  '₹15-28 LPA (approximately $18,000-$33,000 USD)',
  'CORRUPT: mangled salary range (salary data is §18-exempt)');

edit('src/pages/blog/affordable-cmms-for-small-business-inspection-2026.tsx',
  '(7) IBM Maximo / SAP PM — enterprise tier, enterprise tier-2M/year, not appropriate for SMEs.',
  '(7) IBM Maximo / SAP PM — enterprise-tier licensing, not appropriate for SMEs.',
  'CORRUPT: "enterprise tier, enterprise tier-2M/year"');

edit('src/pages/blog/ndt-inspection-software-comparison-2026.tsx',
  '{ software: "Atlantis NDT ERP+Reporting", price: "affordable, accessible-50K/yr flat"',
  '{ software: "Atlantis NDT ERP+Reporting", price: "Quote on request — flat annual"',
  'CORRUPT: "affordable, accessible-50K/yr flat" (also an Atlantis price slot)');

edit('src/pages/compare/AtlantisDtVsIbmMaximo.tsx',
  'Maximo at enterprise tier-$1M vs Atlantis affordable accessible fully customizable SaaS',
  'Maximo at enterprise-tier licensing vs Atlantis affordable, accessible, fully customizable SaaS',
  'CORRUPT: "enterprise tier-$1M"');

edit('src/pages/compare/vs-bentley-assetwise.tsx',
  '"competitor": "enterprise tier-$800K (license + Bentley services)"',
  '"competitor": "enterprise-tier licensing plus Bentley services"',
  'CORRUPT: "enterprise tier-$800K"');
edit('src/pages/compare/vs-bentley-assetwise.tsx',
  'Bentley for a 50-100 user industrial inspection company lands at enterprise tier-$400K/year.',
  'Bentley for a 50-100 user industrial inspection company lands in enterprise-tier licensing territory.',
  'CORRUPT: "enterprise tier-$400K/year"');

edit('src/pages/compare/vs-ge-vernova-apm.tsx',
  'GE Vernova for a 50-100 user inspection consultancy lands at enterprise tier-$450K/year plus $300K-$700K implementation.',
  'GE Vernova for a 50-100 user inspection consultancy lands in enterprise-tier licensing territory, plus a substantial separate implementation engagement.',
  'CORRUPT: "enterprise tier-$450K/year"');

console.log(`\n=== Atlantis pricing sweep round 3 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${count} replacement(s).`);
if (!APPLY) console.log('Re-run with --apply to write.');
