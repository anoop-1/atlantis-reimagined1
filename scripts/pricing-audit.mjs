#!/usr/bin/env node
/**
 * Pricing policy audit — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * CLAUDE.md §18 forbids publishing the price of any Atlantis product or service.
 * It explicitly PERMITS industry salary ranges, third-party exam and equipment
 * fees, and customer ROI figures — so a blanket strip is wrong and would destroy
 * legitimate content that ranks (the salary cluster alone carries thousands of
 * impressions).
 *
 * `scripts/strip-pricing.mjs` only ever scanned `src/` and `docs/marketing/`,
 * never `scripts/prerender.mjs` or the override modules (§19.2). This scans the
 * BUILT output — titles and meta descriptions across every page — which is what
 * Google actually sees, and classifies each hit instead of counting it.
 *
 * That distinction found the real breach: `/consulting/ndt-consulting-level-iii`
 * shipped `ASNT Level III Consulting 2026: $1,500–$3,500/day` — an Atlantis
 * service day rate in a title tag — among ~109 pages whose figures were
 * legitimate salary and exam-fee data.
 *
 * Usage:  node scripts/pricing-audit.mjs [--strict]
 *         --strict exits 1 on any FORBIDDEN hit (for use in a build guard)
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const STRICT = process.argv.includes('--strict');

const MONEY = /(?:[$£€₹]\s?\d[\d,.]*(?:\s?[-–—]\s?[$£€₹]?\d[\d,.]*)?(?:\s?[KkMm]\b)?)|(?:\b\d[\d,.]*\s?(?:USD|EUR|GBP|SAR|AED|INR|CAD|AUD|MYR|SGD|QAR|NOK|BRL|MXN|IDR|NGN|BHD|KWD|OMR)\b)/g;

/**
 * A figure is FORBIDDEN when it is the price of something Atlantis sells.
 * The signal is proximity to an Atlantis service noun plus a rate unit.
 */
// NOTE: /yr and /annum were missing from the first version of this pattern and
// it let a real breach through — "Atlantis NDT ERP £14.5K/yr" in a meta
// description. Keep this list generous; a false positive costs a manual look,
// a false negative publishes a price.
const SERVICE_RATE = /(?:\/\s?(?:day|hr|hour|user|month|mo|seat|licen[cs]e|site|asset|yr|year|annum|pa))\b|(?:per\s+(?:day|hour|user|month|seat|licen[cs]e|site|asset|year|annum))/i;
const ATLANTIS_SERVICE = /(consulting|level iii|level 3|retainer|our (?:rate|fee|price)|we charge|atlantis\s+\w*\s*(?:erp|crm|dt|digital twin|platform|training|inspection|ndt)|subscription|licen[cs]e fee|implementation fee|quote from)/i;

/** A price stated directly against the Atlantis brand is forbidden even with no
 *  rate unit — "Atlantis NDT ERP £14.5K" is still publishing our price. */
const ATLANTIS_PRICE_ADJACENT = /atlantis[^.]{0,40}?[$£€₹]\s?\d|[$£€₹]\s?\d[\d,.]*[KkMm]?\s?(?:\/\s?\w+)?[^.]{0,25}?atlantis/i;

/** Explicitly permitted categories (§18). */
const PERMITTED = [
  [/salary|salaries|\bpay\b|earn|wage|compensation|income/i, 'industry salary data'],
  [/exam fee|exam cost|certification cost|application fee|prometric|asnt (?:membership|fees)|renewal fee|course fees/i, 'third-party exam/cert fee'],
  [/\bsave[sd]?\b|saving|roi|payback|reduce[sd]? cost|cut costs|avoided/i, 'customer ROI / savings figure'],
  [/market (?:size|value)|industry worth|global .*market|revenue of/i, 'market-size statistic'],
  [/equipment|instrument|probe|scanner|camera|hardware/i, 'third-party equipment cost'],
];

const rows = [];
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name === 'index.html') {
      const html = readFileSync(f, 'utf8');
      const path = dir.slice(DIST.length).replace(/\\/g, '/') || '/';
      const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
      const desc = (html.match(/name="description"\s+content="([^"]*)"/) || [])[1] || '';
      for (const [field, text] of [['title', title], ['description', desc]]) {
        const hits = text.match(MONEY);
        if (!hits) continue;
        const permitted = PERMITTED.find(([re]) => re.test(text));
        const looksLikeRate =
          (SERVICE_RATE.test(text) && ATLANTIS_SERVICE.test(text)) ||
          ATLANTIS_PRICE_ADJACENT.test(text);
        rows.push({
          path, field, text, hits: [...new Set(hits)],
          verdict: looksLikeRate ? 'FORBIDDEN' : permitted ? 'permitted' : 'review',
          why: looksLikeRate ? 'Atlantis service rate' : permitted ? permitted[1] : 'unclassified — check manually',
        });
      }
    }
  }
};
walk(DIST);

const forbidden = rows.filter((r) => r.verdict === 'FORBIDDEN');
const review = rows.filter((r) => r.verdict === 'review');
const permitted = rows.filter((r) => r.verdict === 'permitted');

console.log(`pages scanned for money figures in title/description`);
console.log(`  FORBIDDEN (Atlantis service price): ${forbidden.length}`);
console.log(`  review (unclassified)             : ${review.length}`);
console.log(`  permitted (§18 allows)            : ${permitted.length}`);

if (forbidden.length) {
  console.log('\n🚫 FORBIDDEN — Atlantis service pricing must not be published:');
  for (const r of forbidden) console.log(`  ${r.path} [${r.field}] ${r.hits.join(', ')}\n     ${r.text.slice(0, 130)}`);
}

if (review.length) {
  console.log(`\n⚠️  REVIEW — no permitted category matched (showing up to 20):`);
  for (const r of review.slice(0, 20)) console.log(`  ${r.path} [${r.field}] ${r.hits.join(', ')}\n     ${r.text.slice(0, 120)}`);
}

const byReason = {};
for (const r of permitted) byReason[r.why] = (byReason[r.why] || 0) + 1;
console.log('\npermitted breakdown:');
for (const [w, n] of Object.entries(byReason).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(4)}  ${w}`);

if (STRICT && forbidden.length) {
  console.error(`\nFAIL: ${forbidden.length} Atlantis service price(s) in built metadata.`);
  process.exit(1);
}
