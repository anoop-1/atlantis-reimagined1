#!/usr/bin/env node
/**
 * assert-no-atlantis-pricing — the standing gate for CLAUDE.md §18.
 *
 * WHY THIS EXISTS
 * Five separate sessions have each found a NEW, previously-undetected pricing
 * violation, every time in a different layer: a data-field default, an FAQ
 * template string, a legacy page generator, a shared React component, and a
 * Schema.org Offer block. Ad-hoc greps kept missing them because each layer
 * expresses a price differently. This asserts on all of them at once, and is
 * meant to be run before every commit.
 *
 * WHAT IS A VIOLATION (fails the build):
 *   1. price / priceCurrency keys inside any Schema.org Offer
 *   2. a currency figure within PROXIMITY chars of the token "Atlantis"
 *   3. per-student / per-head / per-participant pricing anywhere
 *   4. corrupted remnants of earlier blanket strips (§25.6) — these are a
 *      content-quality defect as well as a pricing one
 *
 * WHAT IS ALLOWED (deliberately not flagged):
 *   - market salary data (the site's biggest traffic asset — §29.1)
 *   - third-party exam/cert fees (ASNT, AWS, API, Prometric)
 *   - third-party equipment and consumable costs
 *   - competitor licence costs NOT adjacent to a positioning claim
 *   - customer ROI / savings / deferred-capex figures
 *
 * Exit code 1 on any violation.
 * Usage:  node scripts/assert-no-atlantis-pricing.mjs [--verbose]
 */
import { readFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const VERBOSE = process.argv.includes('--verbose');
const PROXIMITY = 90; // chars either side of "Atlantis"

const CURRENCY = String.raw`(?:£|\$|€|₹|USD|GBP|EUR|INR|AED|SAR|SGD|MYR|QAR|CAD|AUD|BHD|KWD|OMR|NOK|BRL|MXN|IDR|NGN)\s?[0-9][0-9,.]*\s?[KkMm]?`;

/** Contexts that make a nearby figure legitimate (§18 carve-outs). */
const ALLOW = new RegExp([
  // market compensation data — the site's single biggest traffic asset (§29.1)
  'salar(?:y|ies)|wage|pay\\b|paid|earn|compensation|per annum income|lpa',
  // customer ROI, savings and deferred capex — explicitly permitted by §18
  'roi|saved|saving|savings|recover|reclaim|defer|avoid|revenue|worth|loss|penalt',
  // the value of the CUSTOMER's own asset, not a price we charge
  'replacement cost|cost (?:exceeded|of replacement)|full replacement|would cost|asset value|mobile assets',
  // third-party fees, equipment and consumables
  'exam fee|exam cost|prometric|equipment|consumable|couplant|gauge|scanner|crawler',
  'per diem|day rate|day-rate|budget|capex|opex|labor hours|labour hours',
  'market|typical(?:ly)? costs? (?:in|for|across)',
  // value/ROI framing on our own platform — a benefit figure, not a price
  'measurable value|payback|tco|total cost of ownership|delivers|pays back',
  // named competitor licence/implementation cost on a comparison page (§23.3)
  'licen[cs]e|implementation|per-user pricing|per engineer seat|user-year|/user-year|genuinely wins|wins for',
  // government grants, subsidies and statutory thresholds
  'subsidi|capped at|grant|turnover above|crore|threshold|mandate',
  // free/on-request offers
  'available on request|free|no charge',
].join('|'), 'i');

/**
 * Named third parties. A currency figure sitting beside one of these belongs to
 * THEM, not to us — comparison pages are supposed to state competitor cost
 * (§23.3 "credit the rival honestly"), so those are not violations.
 */
const THIRD_PARTY = /\b(SAP|Oracle|NetSuite|Microsoft|Dynamics|Azure|IBM|Maximo|Bentley|AssetWise|Hexagon|Sphera|Antea|IRISNDT|MISTRAS|Acuren|InspectNTrack|UpKeep|Limble|Fiix|MaintainX|Hippo|Zoho|monday|Sage|Xero|QuickBooks|Odoo|Quorum|ECi|Zeiss|Olympus|Eddyfi|GE Vernova|AVEVA|OSIsoft|PI System|Procore|ETQ|Aspen|Floodlight|Primavera|IFS|Acumatica|ProCert|Quest|ASNT|AWS|API|Prometric|BINDT|PCN|CSWIP)\b/i;

/**
 * Reviewed exceptions — each one read in full on 2026-08-09 and confirmed to
 * be a THIRD-PARTY or CUSTOMER figure, not an Atlantis price. Keyed by file so
 * line drift doesn't cause false passes on new content in the same file; the
 * matcher still requires the recorded reason substring to be present.
 *
 * Adding to this list is a deliberate act. Do not add anything here that
 * states what Atlantis charges.
 */
const REVIEWED = [
  ['src/components/IndustryLocationPage.tsx', 'Boeing structural repair manual'],       // customer repair-vs-replace cost
  ['src/data/city-profiles.ts', 'save ~SAR'],                                           // customer saving
  ['src/pages/blog/affordable-erp-for-marine-survey-2026.tsx', 'Stream BV NaviSafe'],   // competitor price list
  ['src/pages/blog/digital-twin-corrosion-monitoring-vendors-comparison.tsx', 'best fit for transmission pipeline'], // competitor price
  ['src/pages/compare/vs-etq-reliance.tsx', 'pharma-grade depth'],                      // competitor TCO
  ['src/pages/compare/vs-meridium.tsx', 'Meridium $400K-$2M'],                          // competitor price
  ['src/pages/digital-twins-combos/LngTerminalDoha.tsx', 'removing a tank from service'], // customer inspection cost
  ['src/pages/digital-twins-usecases/HydrogenElectrolyzer.tsx', 'project-finance'],     // customer financing scale
  ['src/pages/blog/affordable-erp-for-environmental-testing-labs-2026.tsx', 'LIMS-only'], // cost of running a SEPARATE third-party ERP
];
const isReviewed = (file, text) =>
  REVIEWED.some(([f, reason]) => file === f && text.includes(reason));

const VIOLATIONS = [];
const add = (file, line, kind, text) => {
  const clean = text.replace(/\s+/g, ' ').slice(0, 160);
  if (kind === 'ATLANTIS-ADJACENT-PRICE' && isReviewed(file, clean)) return;
  VIOLATIONS.push({ file, line, kind, text: clean });
};

let FILES;
try {
  // docs/marketing/* are internal drafts, not shipped pages — scanned only
  // with --include-docs so the gate stays focused on what Google can see.
  const scope = process.argv.includes('--include-docs')
    ? 'src/ scripts/prerender.mjs docs/'
    : 'src/ scripts/prerender.mjs';
  FILES = execSync(`git ls-files ${scope}`, { cwd: ROOT })
    .toString().split('\n').filter((f) => /\.(tsx|ts|mjs|json)$/.test(f) || /\.md$/.test(f));
} catch {
  FILES = [];
}
if (!FILES.length) {
  // Fallback when git is unavailable — walk src/ directly.
  const { readdirSync, statSync } = await import('fs');
  const walk = (d, acc = []) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) walk(p, acc);
      else if (/\.(tsx|ts|json)$/.test(e)) acc.push(p.replace(ROOT + '/', ''));
    }
    return acc;
  };
  FILES = walk(join(ROOT, 'src'));
  FILES.push('scripts/prerender.mjs');
}

for (const rel of FILES) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) continue;
  const lines = readFileSync(abs, 'utf8').split(/\r?\n/);

  lines.forEach((raw, i) => {
    const n = i + 1;

    // ── 1. Schema.org price keys ─────────────────────────────────────────
    // Only structured-data price fields count. A `price:` field inside a
    // competitor comparison DATA TABLE is editorial content, not schema, and
    // is caught (if it concerns Atlantis) by rule 2 instead.
    const schemaCtx = lines.slice(Math.max(0, i - 8), i + 1).join(' ');
    const inSchema = /"@type":\s*["'](Offer|PriceSpecification|AggregateOffer)["']|offers\s*:|priceSpecification/i.test(schemaCtx);
    if (inSchema) {
      if (/["']?(price|minPrice|maxPrice)["']?\s*:/.test(raw) && !/priceRange|\/\//.test(raw)) {
        add(rel, n, 'SCHEMA-PRICE', raw);
      }
      if (/priceCurrency/.test(raw) && !/^\s*(\/\/|\*)/.test(raw) && !/priceCurrency\?:/.test(raw)) {
        add(rel, n, 'SCHEMA-CURRENCY', raw);
      }
    }

    // ── 3. per-student / per-head style pricing ──────────────────────────
    if (new RegExp(`${CURRENCY}[^"']{0,30}per\\s+(student|head|participant|candidate|delegate|trainee|seat)`, 'i').test(raw)) {
      add(rel, n, 'PER-SEAT-PRICE', raw);
    }

    // ── 4. corrupted blanket-strip remnants ──────────────────────────────
    if (/(affordable, accessible|accessible, fully customizable|enterprise[- ]tier)[-–]\s*\$?[0-9]/i.test(raw)
      || /enterprise tier,\s*enterprise tier/i.test(raw)) {
      add(rel, n, 'CORRUPT-STRIP', raw);
    }

    // ── 2. currency figure near the word "Atlantis" ──────────────────────
    let m;
    const atl = /Atlantis/gi;
    while ((m = atl.exec(raw)) !== null) {
      const win = raw.slice(Math.max(0, m.index - PROXIMITY), m.index + PROXIMITY);
      if (new RegExp(CURRENCY).test(win) && !ALLOW.test(win) && !THIRD_PARTY.test(win)) {
        add(rel, n, 'ATLANTIS-ADJACENT-PRICE', win);
        break;
      }
    }
  });
}

const byKind = {};
for (const v of VIOLATIONS) (byKind[v.kind] = byKind[v.kind] || []).push(v);

console.log('\n=== assert-no-atlantis-pricing (CLAUDE.md §18) ===');
console.log(`scanned ${FILES.length} files\n`);

if (!VIOLATIONS.length) {
  console.log('PASS — no Atlantis pricing found in any layer.\n');
  process.exit(0);
}

for (const [kind, list] of Object.entries(byKind)) {
  console.log(`${kind}  (${list.length})`);
  (VERBOSE ? list : list.slice(0, 12)).forEach((v) => console.log(`   ${v.file}:${v.line}  ${v.text}`));
  if (!VERBOSE && list.length > 12) console.log(`   … ${list.length - 12} more (--verbose)`);
  console.log('');
}
console.log(`FAIL — ${VIOLATIONS.length} violation(s).\n`);
process.exit(1);
