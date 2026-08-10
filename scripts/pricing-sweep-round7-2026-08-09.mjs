#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 7 (generic), 2026-08-09.
 *
 * Round 6 fixed the INR variant of the /erp/* city-page phrase by exact string.
 * That was the wrong shape of fix: the same sentence is emitted per REGION with
 * a per-region currency, so `SAR 67,500` (another explicitly forbidden §18
 * token) survived in the Riyadh pages. This round matches the PATTERN instead
 * of the instance, so every currency variant — present and future — is caught.
 *
 * Also fixes the three India regional prep-cost tables, where Atlantis is named
 * in the provider list for a stated ₹/USD price range, which makes that range
 * an Atlantis price.
 *
 * Run:  node scripts/pricing-sweep-round7-2026-08-09.mjs [--apply]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APPLY = process.argv.includes('--apply');
const log = [];
let count = 0;

function editRe(rel, re, repl, note) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) return;
  const src = readFileSync(abs, 'utf8');
  const m = src.match(re);
  if (!m) return;
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${m.length}  ${rel} — ${note}`);
  count += m.length;
  if (APPLY) writeFileSync(abs, src.replace(re, repl));
}

// ── A. "(contact us; approximately <CUR> <amount>)" — ANY currency ────────
const PAREN = /\(contact us;\s*approximately\s*(?:£|\$|€|₹|USD|GBP|EUR|INR|AED|SAR|SGD|MYR|QAR|CAD|AUD|BHD|KWD|OMR|NOK|BRL|MXN|IDR|NGN)\s?[0-9][0-9,.]*\s*(?:lakh|crore|K|M)?\)\s*/gi;
const ERP_DIR = join(ROOT, 'src/pages/erp');
if (existsSync(ERP_DIR)) {
  for (const f of readdirSync(ERP_DIR).filter((x) => x.endsWith('.tsx'))) {
    editRe(`src/pages/erp/${f}`, PAREN, '', 'parenthetical Atlantis price (any currency)');
  }
}
// The same phrase can appear anywhere else the generator was reused.
for (const dir of ['src/pages', 'src/components', 'src/data']) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) continue;
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|ts|json)$/.test(e.name)) {
        editRe(p.replace(ROOT + '/', ''), PAREN, '', 'parenthetical Atlantis price (any currency)');
      }
    }
  };
  walk(abs);
}

// ── B. India regional prep-cost tables naming Atlantis as a provider ─────
for (const [f, note] of [
  ['src/pages/regional/Api510India.tsx', 'Atlantis NDT, ARC, Indian Institute of Welding, Quality Austria'],
  ['src/pages/regional/Api570India.tsx', 'Atlantis NDT, ARC, IIW, Quality Austria'],
  ['src/pages/regional/Api653India.tsx', 'Atlantis NDT, ARC, IIW, Quality Austria, regional providers'],
]) {
  editRe(f,
    /\{ item: "5-day classroom prep \(India\)", inr: "[^"]*", usd: "[^"]*", note: "[^"]*" \}/,
    `{ item: "5-day classroom prep (India)", inr: "Quote on request", usd: "Quote on request", note: "${note}" }`,
    'Atlantis named against a stated prep price');
}

console.log(`\n=== Atlantis pricing sweep round 7 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${count} replacement(s).`);
if (!APPLY) console.log('Re-run with --apply to write.');
