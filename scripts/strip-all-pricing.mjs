#!/usr/bin/env node
/**
 * Site-wide price removal — 2026-08-04 (owner directive).
 * ─────────────────────────────────────────────────────────────────────────────
 * OWNER DIRECTION, superseding the narrower reading of CLAUDE.md §18:
 * **No pricing on any page, including ERP.** That covers Atlantis prices,
 * competitor prices, third-party exam and course fees, equipment costs and
 * dollar-denominated ROI claims.
 *
 * **Industry salary and pay ranges are explicitly RETAINED** (owner decision,
 * 2026-08-04). Salary is what a person earns, not what something costs, and the
 * salary cluster is the site's largest single CTR opportunity — the pages rank
 * precisely because they answer "what does an NDT technician earn". Stripping
 * those figures would remove the answer they rank for.
 *
 * WHY A SEPARATE SCRIPT FROM strip-pricing.mjs
 * That one only ever scanned `src/` and `docs/marketing/`, never
 * `scripts/prerender.mjs` or the override modules (§19.2) — which is where most
 * of the surviving figures live. This scans every source that can emit page
 * copy, and classifies each hit before touching it.
 *
 * Usage:
 *   node scripts/strip-all-pricing.mjs            # report only
 *   node scripts/strip-all-pricing.mjs --apply    # rewrite in place
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

/* Any currency figure. */
const MONEY = /[$£€₹]\s?\d[\d,.]*\s?(?:[KkMm]\b|million|billion)?(?:\s?[-–—]\s?[$£€₹]?\s?\d[\d,.]*\s?(?:[KkMm]\b)?)?|\b\d[\d,.]*\s?(?:USD|EUR|GBP|SAR|AED|INR|CAD|AUD|MYR|SGD|QAR|NOK|BRL|MXN|IDR|NGN|BHD|KWD|OMR)\b|₹\s?\d[\d,.]*\s?(?:lakh|crore|LPA)?/gi;

/**
 * Salary context — RETAINED. Decided by what surrounds the figure, because the
 * same "$80K" is a salary in one sentence and a course fee in another.
 */
const SALARY_CTX = /\b(salar|salaries|\bpay\b|paid|pays|earn|earning|wage|income|compensation|remuneration|LPA|per annum|takes home|median pay|pay band|pay range|salary band|package|CTC|annual|per year|\/yr salary|junior|senior|mid-level|entry.level|lead \/ principal|technician|inspector pay)/i;

/** Price context — REMOVED. */
const PRICE_CTX = /\b(cost|costs|costing|price|pricing|priced|fee|fees|charge|charged|rate|rates|licen[cs]e|subscription|quote|budget|spend|invoice|per user|per seat|\/yr|\/day|\/hr|\/hour|\/month|tuition|exam fee|worth|saves?|saving|roi|payback|market size)/i;

const FILES = [
  'scripts/prerender.mjs',
  'scripts/round7-body-overrides.mjs',
  'scripts/phase5-ctr-overrides.mjs',
  'scripts/ctr-wave2-overrides.mjs',
  'scripts/ctr-wave3-overrides.mjs',
  'scripts/ctr-wave4-overrides.mjs',
  'scripts/ctr-wave5-overrides.mjs',
  'scripts/thin-page-upgrade.mjs',
  'scripts/thin-page-stragglers.mjs',
  'scripts/faq-content.mjs',
  'scripts/cert-cluster-defence.mjs',
  'scripts/erp-intersection-boost.mjs',
  'scripts/noindex-recovery.mjs',
  'scripts/region-hubs.mjs',
  'src/data/blogs.json',
];

/** Every .tsx page can carry copy too. */
const walkTsx = (dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walkTsx(f, out);
    else if (extname(e.name) === '.tsx') out.push(f.slice(ROOT.length + 1).replace(/\\/g, '/'));
  }
  return out;
};

const all = [...FILES, ...walkTsx(join(ROOT, 'src', 'pages')), ...walkTsx(join(ROOT, 'src', 'components'))];

/** Replace a price figure with wording that keeps the sentence readable. */
function replacement(text, idx) {
  const before = text.slice(Math.max(0, idx - 90), idx).toLowerCase();
  if (/\b(sap|oracle|netsuite|hubspot|salesforce|epicor|sage|microsoft|infor|aveva|cognite|bentley|hexagon|ge |predix)\b/.test(before)) return 'enterprise-tier pricing';
  if (/\b(exam|prometric|application|renewal|membership)\b/.test(before)) return 'the current published fee';
  if (/\b(course|training|tuition|enrol)\b/.test(before)) return 'fees on request';
  if (/\b(save|saving|roi|payback|reduce)\b/.test(before)) return 'a material saving';
  if (/\b(equipment|instrument|probe|scanner|camera)\b/.test(before)) return 'current market rates';
  return 'pricing on request';
}

/**
 * Lines that never render to a page: code comments, imports, and the pattern
 * definitions in this file's own siblings. The first version of this script did
 * not check, and rewrote a comment recording a historical breach into
 * "pricing on request/day" — damage with no compliance benefit.
 */
function isNonRendering(src, idx) {
  const nl = src.indexOf('\n', idx);
  const lineStart = src.lastIndexOf('\n', idx) + 1;
  const line = src.slice(lineStart, nl === -1 ? src.length : nl);
  if (/^\s*(\/\/|\*|\/\*|import\b|export \{)/.test(line)) return true;
  if (/(MONEY|PRICE_CTX|SALARY_CTX|new RegExp)/.test(line)) return true;
  const openBlock = src.lastIndexOf('/*', idx);
  const closeBlock = src.lastIndexOf('*/', idx);
  return openBlock > closeBlock;          // inside a block comment
}

let scanned = 0, salaryKept = 0, removed = 0;
const perFile = [];

for (const rel of all) {
  const abs = join(ROOT, rel);
  let s;
  try { s = readFileSync(abs, 'utf8'); } catch { continue; }
  scanned++;
  let out = '', last = 0, fileRemoved = 0, fileKept = 0;
  for (const m of s.matchAll(MONEY)) {
    const i = m.index;
    // Sentence-ish window around the figure decides the verdict.
    const ctx = s.slice(Math.max(0, i - 140), Math.min(s.length, i + 90));
    if (isNonRendering(s, i)) continue;      // comments/imports never reach a page
    const isSalary = SALARY_CTX.test(ctx) && !/\b(cost|fee|price|tuition|licen[cs]e|subscription)\b/i.test(s.slice(Math.max(0, i - 60), i));
    if (isSalary) { fileKept++; continue; }
    // Owner directive 2026-08-04: NO pricing on any page. Anything that is not
    // salary goes — including equipment costs, hourly rates and figures with no
    // explanatory wording nearby. The earlier version only removed figures that
    // sat next to an explicit price word, which left 103 pages still carrying
    // equipment costs and consultant hourly rates.
    out += s.slice(last, i) + replacement(s, i);
    last = i + m[0].length;
    fileRemoved++;
  }
  out += s.slice(last);
  salaryKept += fileKept; removed += fileRemoved;
  if (fileRemoved || fileKept) perFile.push({ rel, fileRemoved, fileKept });
  if (APPLY && fileRemoved) writeFileSync(abs, out, 'utf8');
}

console.log(`scanned ${scanned} source files`);
console.log(`  price figures ${APPLY ? 'REMOVED' : 'to remove'}: ${removed}`);
console.log(`  salary figures retained (owner decision): ${salaryKept}`);
console.log('\nper file (removed / salary-kept):');
for (const f of perFile.sort((a, b) => b.fileRemoved - a.fileRemoved).slice(0, 25)) {
  console.log(`  ${String(f.fileRemoved).padStart(4)} / ${String(f.fileKept).padStart(4)}  ${f.rel}`);
}
if (!APPLY) console.log('\n(report only — re-run with --apply to rewrite)');
