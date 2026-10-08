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
 * §18 WAS RELAXED ON 2026-10-07 (owner) FOR EXACTLY TWO THINGS:
 *   A) training fees printed on the regional flyers (US, Middle East 5-method,
 *      Europe, South East Asia) — NEVER India;
 *   B) ERP plan pricing for the USA and Canada, on /erp and /erp/pricing only.
 * Those amounts live ONLY in src/data/approved-training-fees.json and
 * src/data/approved-erp-pricing.json and are formatted at render time by
 * src/lib/approved-pricing.ts (React) and scripts/approved-pricing.mjs
 * (crawler HTML). The allowlist below is derived from those files, so a flyer
 * change is a one-file edit and this gate follows it automatically.
 *
 * WHAT IS A VIOLATION (fails the build):
 *   0. DATA      the approved data files break their own rules: a region other
 *                than US/ME/EU/SEA, an India page, ERP prices on any page other
 *                than /erp and /erp/pricing, ERP markets outside US/CA, or an
 *                amount typed into copy instead of a numeric field
 *   1. price / priceCurrency keys inside any Schema.org Offer
 *   2. a currency figure within PROXIMITY chars of the token "Atlantis"
 *   3. per-student / per-head / per-participant pricing anywhere
 *   4. corrupted remnants of earlier blanket strips (§25.6)
 *   5. APPROVED-AMOUNT-LITERAL  an approved amount typed as text anywhere
 *                outside the data files, in a pricing context (Atlantis / our /
 *                package / licence / plan ...) — the way approved fees leak onto
 *                India pages, ERP city pages or non-ERP products
 *   6. ATLANTIS-PRODUCT-PRICE   a currency figure beside "Atlantis" AND a product
 *                word (ERP, Digital Twin, reporting software, Practical NDT,
 *                consulting, inspection, training). Unlike rule 2 this does NOT
 *                excuse "licence"/"implementation"/"free" or "Atlantis ERP", so
 *                an ERP or Digital Twin price can no longer slip through.
 *   7. PLACEMENT the approved-pricing data/components imported anywhere other
 *                than the allowlisted files
 *   8. DIST (--dist, after a build) a rendered fee/plan block on any path not
 *                allowlisted for it, or on any India path
 *
 * WHAT IS ALLOWED (deliberately not flagged):
 *   - the approved data files themselves, rendered only on allowlisted paths
 *   - market salary data (§29.1), third-party exam/cert fees (ASNT, AWS, API)
 *   - third-party equipment and consumable costs
 *   - competitor licence costs NOT adjacent to a positioning claim
 *   - customer ROI / savings / deferred-capex figures
 *
 * A SELF-TEST runs first on every invocation: known-bad fixtures (India fee,
 * Digital Twin price, ERP price outside the allowlist, Offer schema, bad data
 * file) must fail and known-good ones (salary, ASNT exam fee) must pass. If the
 * self-test itself fails the gate exits 1, so a weakened rule cannot pass
 * silently.
 *
 * Exit code 1 on any violation.
 * Usage:  node scripts/assert-no-atlantis-pricing.mjs [--verbose] [--dist] [--include-docs]
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import {
  TRAINING, ERP, TRAINING_FEES_FILE, ERP_PRICING_FILE, INDIA_PATH,
  approvedAmounts, validateApprovedPricingData, TRAINING_MARKER, ERP_MARKER,
} from './approved-pricing.mjs';

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
const THIRD_PARTY_NAMES = 'Meridium|Cognite|ThingWorx|PTC|Siemens|MindSphere|LabVantage|Renishaw|SAP|Oracle|NetSuite|Microsoft|Dynamics|Azure|IBM|Maximo|Bentley|AssetWise|Hexagon|Sphera|Antea|IRISNDT|MISTRAS|Acuren|InspectNTrack|UpKeep|Limble|Fiix|MaintainX|Hippo|Zoho|monday|Sage|Xero|QuickBooks|Quorum|ECi|Zeiss|Olympus|Eddyfi|GE Vernova|AVEVA|OSIsoft|PI System|Procore|ETQ|Aspen|Floodlight|Primavera|IFS|Acumatica|ProCert|Quest|ASNT|AWS|API|Prometric|BINDT|PCN|CSWIP';
const THIRD_PARTY = new RegExp(`\\b(${THIRD_PARTY_NAMES}|Atlantis ERP)\\b`, 'i');
// Rule 6 does NOT treat "Atlantis ERP" as a third party.
const THIRD_PARTY_STRICT = new RegExp(`\\b(${THIRD_PARTY_NAMES})\\b`);

/** Rule 6: product words that make a figure beside "Atlantis" an Atlantis product price. */
const PRODUCT = /\b(ERP|digital[- ]twins?|reporting software|report(?:ing)? (?:app|platform|tool)|practical ndt|3d practical|consulting|consultanc|inspection services?|LMS|training|course|subscription|seat|plan)\b/i;
/** Rule 6 allow: only market / customer-value contexts — never licence, implementation or free. */
const PRODUCT_ALLOW = /salar(?:y|ies)|wage|\bearn|\bpay\b(?!\s+for)|compensation|roi\b|saved|saving|recover|reclaim|defer|avoid|revenue|penalt|replacement cost|would cost|asset value|exam fee|exam cost|retake|re-take|members|equipment|consumable|scanner|day[- ]rate|per diem|market|industry average|typical(?:ly)? costs?|payback|pays back|tco|total cost of ownership|grant|subsidi|threshold|crore|competitor|\bIRS\b|1099|\btax/i;

/** PRICE-LABEL: a price written as a labelled figure ("Price band: $400-$1,200"). */
const PRICE_LABEL = new RegExp(String.raw`\b(price band|price range|course fees?|tuition|pricing starts? (?:at|from)|prices? starts? (?:at|from)|starting (?:at|from)|from just)\b\s*:?\s*(?:<\/?\w+[^>]*>\s*)*` + CURRENCY, 'i');

/** Rule 6: the sentence states what something costs. */
const PRICE_VERB = /\b(costs?|priced|pricing|prices?|from|starts? at|licen[cs]e|subscription|per (?:year|month|user|site|seat)|a (?:year|month)|fees?|charges?)\b|\/(?:yr|year|mo|month)\b|=\s*[$€£]/i;
/** Rule 5 context: a figure written in a pricing voice. */
const PRICING_CUE = /\b(atlantis|our|we|tuition|course fees?|training fees?|package|per method|bundle|bundled|licen[cs]e|one-time|setup|implementation|plans?|enrol|enroll|subscription|startup professional|enterprise plan|business plan)\b/i;
/** Rule 5 exemption: the figure belongs to the market or a third party. */
const MARKET_CTX = /salar(?:y|ies)|wage|\bearn|compensation|day[- ]?rate|\/day|per day|per hour|\/hr|exam fees?|retake|re-take|members|non-members|scanner|equipment|consumable|market|median|average|turnaround|overtime|base pay/i;

const AMOUNTS = approvedAmounts();
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const amountAlternatives = [...AMOUNTS.training.keys(), ...AMOUNTS.erp].flatMap((s) => {
  if (s.startsWith('AED ')) return [esc(s).replace('AED\\ ', 'AED\\s?')];
  const n = esc(s.slice(1));
  return [`(?:US)?\\$\\s?${n}`, `USD\\s?${n}`, `${n}\\s?USD`];
});
// Exact amounts only: "$300K", "$100-$300" and "$300–$900" are not approved figures.
const APPROVED_LITERAL = new RegExp(`(?<![\\d,.]|[-–]\\s?)(?:${amountAlternatives.join('|')})(?![\\d]|[,.]\\d|\\s?[KkMmBb]\\b|\\s?[-–]\\s?\\$?\\d)`, 'g');

/** Files that may hold approved amounts / render approved blocks. */
const DATA_FILES = new Set([TRAINING_FEES_FILE, ERP_PRICING_FILE]);
const PLACEMENT = {
  // import target -> files allowed to import it
  'approved-training-fees.json': ['src/lib/approved-pricing.ts'],
  'approved-erp-pricing.json': ['src/lib/approved-pricing.ts'],
  '@/lib/approved-pricing': ['src/components/ApprovedTrainingFees.tsx', 'src/components/ErpPlansPricing.tsx', 'src/pages/ErpPricing.tsx', 'src/components/TrainingLocationPage.tsx'],
  'components/ErpPlansPricing': ['src/pages/Erp.tsx', 'src/pages/ErpPricing.tsx'],
  './approved-pricing.mjs': ['scripts/prerender.mjs', 'scripts/assert-no-atlantis-pricing.mjs', 'scripts/lint-citation-spec.mjs'],
};

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

/** All rules that work on one file's lines. Pure: returns violations. */
function scanLines(rel, lines) {
  const out = [];
  const add = (line, kind, text) => {
    const clean = text.replace(/\s+/g, ' ').slice(0, 160);
    if ((kind === 'ATLANTIS-ADJACENT-PRICE' || kind === 'ATLANTIS-PRODUCT-PRICE') && isReviewed(rel, clean)) return;
    out.push({ file: rel, line, kind, text: clean });
  };
  if (DATA_FILES.has(rel)) return out; // the approved source of truth; validated by rule 0

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
        add(n, 'SCHEMA-PRICE', raw);
      }
      if (/priceCurrency/.test(raw) && !/^\s*(\/\/|\*)/.test(raw) && !/priceCurrency\?:/.test(raw)) {
        add(n, 'SCHEMA-CURRENCY', raw);
      }
    }

    // ── 3. per-student / per-head style pricing ──────────────────────────
    if (new RegExp(`${CURRENCY}[^"']{0,30}per\\s+(student|head|participant|candidate|delegate|trainee|seat)`, 'i').test(raw)) {
      add(n, 'PER-SEAT-PRICE', raw);
    }

    // ── 4. corrupted blanket-strip remnants ──────────────────────────────
    if (/(affordable, accessible|accessible, fully customizable|enterprise[- ]tier)[-–]\s*\$?[0-9]/i.test(raw)
      || /enterprise tier,\s*enterprise tier/i.test(raw)) {
      add(n, 'CORRUPT-STRIP', raw);
    }

    // ── 2. currency figure near the word "Atlantis" ──────────────────────
    // ── 6. ...and beside an Atlantis product word, with no licence/free excuse
    let m;
    const atl = /Atlantis/gi;
    let r2 = false;
    while ((m = atl.exec(raw)) !== null) {
      const win = raw.slice(Math.max(0, m.index - PROXIMITY), m.index + PROXIMITY);
      if (!new RegExp(CURRENCY).test(win)) continue;
      if (!ALLOW.test(win) && !THIRD_PARTY.test(win)) {
        add(n, 'ATLANTIS-ADJACENT-PRICE', win); r2 = true;
        break;
      }
    }
    // Rule 6 is sentence-scoped: the figure, the product word and "Atlantis" /
    // "our" must sit in ONE sentence with a price verb, so a competitor's figure
    // in the neighbouring sentence is not pinned on us.
    if (!r2 && /Atlantis|\bour\b/i.test(raw) && new RegExp(CURRENCY).test(raw)) {
      for (const sent of raw.replace(/&[a-z]+;|&#\d+;/gi, ' ').split(/(?<=[.!?;])\s+|<\/?(?:p|li|td|th|h[1-6]|br)\b[^>]*>/i)) {
        if (!sent || !/Atlantis|\bour\b/i.test(sent) || !new RegExp(CURRENCY).test(sent)) continue;
        if (PRODUCT.test(sent) && PRICE_VERB.test(sent) && !PRODUCT_ALLOW.test(sent) && !THIRD_PARTY_STRICT.test(sent)) {
          add(n, 'ATLANTIS-PRODUCT-PRICE', sent); break;
        }
      }
    }

    // ── 6b. labelled price ("Price band: $400–$1,200 per method") ───────
    {
      const pl = raw.match(PRICE_LABEL);
      if (pl) {
        const at = raw.indexOf(pl[0]);
        const win = raw.slice(Math.max(0, at - PROXIMITY), at + pl[0].length + PROXIMITY);
        // JSX wraps prose across lines, so the subject may sit on the line above.
        const ctx = lines.slice(Math.max(0, i - 2), i).join(' ') + ' ' + win;
        if (!MARKET_CTX.test(ctx) && !THIRD_PARTY_STRICT.test(ctx) && !/\b(generic|competitors?|vendors?|legacy|point tools?|technicians?|inspectors?|career)\b/i.test(ctx)) add(n, 'PRICE-LABEL', win);
      }
    }

    // ── 5. an approved amount typed as text, in a pricing voice ──────────
    APPROVED_LITERAL.lastIndex = 0;
    while ((m = APPROVED_LITERAL.exec(raw)) !== null) {
      const win = raw.slice(Math.max(0, m.index - PROXIMITY), m.index + m[0].length + PROXIMITY);
      if (PRICING_CUE.test(win) && !MARKET_CTX.test(win) && !THIRD_PARTY_STRICT.test(win)) {
        add(n, 'APPROVED-AMOUNT-LITERAL', `${m[0]} outside ${TRAINING_FEES_FILE}/${ERP_PRICING_FILE}: ${win}`);
        break;
      }
    }

    // ── 7. placement of the approved-pricing data / components ───────────
    const imp = raw.match(/\bfrom\s+["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/);
    if (imp) {
      const target = imp[1] || imp[2];
      for (const [needle, allowed] of Object.entries(PLACEMENT)) {
        if (target.endsWith(needle) && !allowed.includes(rel)) add(n, 'PLACEMENT', `${rel} imports ${target} (allowed only in: ${allowed.join(', ')})`);
      }
    }
  });
  return out;
}

// ── SELF-TEST ────────────────────────────────────────────────────────────────
function selfTest() {
  const failures = [];
  const t = (label, text, expectKind, file = 'src/pages/__fixture__.tsx') => {
    const kinds = scanLines(file, text.split('\n')).map((v) => v.kind);
    const ok = expectKind ? kinds.includes(expectKind) : kinds.length === 0;
    if (!ok) failures.push(`${label}: expected ${expectKind || 'PASS'}, got [${kinds.join(', ') || 'PASS'}]`);
  };
  const usd = (n) => '$' + n.toLocaleString('en-US');
  const [seaPkg] = TRAINING.regions.SEA.tables[0].rows[0].filter((c) => typeof c === 'object').map((c) => usd(c.usd));
  const erpAnnual = usd(ERP.plans[1].annual);
  // must FAIL
  t('India page quoting an approved SEA fee', `<p>Atlantis NDT Level II training in Hyderabad, India: online package ${seaPkg}.</p>`, 'APPROVED-AMOUNT-LITERAL', 'src/pages/ndt-training-hyderabad.tsx');
  t('approved ERP figure reused for Digital Twin', `Atlantis Digital Twin licence from ${erpAnnual} / year`, 'APPROVED-AMOUNT-LITERAL');
  t('unapproved ERP price beside "Atlantis ERP"', 'Atlantis ERP licence is $18,000 a year for small teams', 'ATLANTIS-PRODUCT-PRICE');
  t('reporting software price excused by "implementation"', 'Our NDT reporting software implementation costs $9,500 with Atlantis', 'ATLANTIS-PRODUCT-PRICE');
  t('Digital Twin price', 'Atlantis Digital Twin subscription: $12,000 per site', 'ATLANTIS-ADJACENT-PRICE');
  t('consulting priced with an approved training figure', `Atlantis Level III consulting: ${usd(TRAINING.regions.US.tables[2].rows[0][1].usd)} per method`, 'APPROVED-AMOUNT-LITERAL');
  t('labelled price band on a training page', '<p><strong>Price band:</strong> $400–$1,200 per method.</p>', 'PRICE-LABEL');
  t('invented ERP from-price', 'Typical NDT-shop pricing starts at $300/month for a 3-user package.', 'PRICE-LABEL');
  t('Offer schema', '  "@type": "Offer",\n  "price": "2799",', 'SCHEMA-PRICE');
  t('approved data imported by an India page', 'import fees from "@/data/approved-training-fees.json";', 'PLACEMENT', 'src/pages/ndt-training-india.tsx');
  t('ERP plans component on a city page', 'import ErpPlansPricing from "@/components/ErpPlansPricing";', 'PLACEMENT', 'src/components/ErpLocationPage.tsx');
  // must PASS
  t('salary figure', `Average NDT Level II salary in Texas is ${erpAnnual} per year`, null);
  t('ASNT exam fee', 'ASNT charges $525 for members and $605 for non-members on the MT exam', null);
  t('plain positioning', 'Atlantis NDT publishes its training fees on the regional training pages.', null);
  t('data file itself', JSON.stringify(TRAINING), null, TRAINING_FEES_FILE);
  // data rules
  const bad = JSON.parse(JSON.stringify(TRAINING));
  bad.regions.US.pages = [...bad.regions.US.pages, '/ndt-training-hyderabad'];
  bad.regions.IN = { ...bad.regions.SEA, label: 'India', pages: ['/training-india'] };
  if (!validateApprovedPricingData(bad, ERP).some((e) => /India/.test(e))) failures.push('data: India page/region not rejected');
  const badErp = JSON.parse(JSON.stringify(ERP));
  badErp.markets = ['US', 'CA', 'UK']; badErp.pages['/ndt-erp-london'] = 'section';
  const ee = validateApprovedPricingData(TRAINING, badErp);
  if (!ee.some((e) => /markets/.test(e)) || !ee.some((e) => /ndt-erp-london/.test(e))) failures.push('data: ERP outside NA not rejected');
  return failures;
}

// ── DIST (rendered HTML) ─────────────────────────────────────────────────────
function scanDist() {
  const out = [];
  const dist = join(ROOT, 'dist');
  if (!existsSync(dist)) { console.log('   (--dist: no dist/ folder, skipped)'); return out; }
  const walk = (d, acc = []) => { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, acc); else if (e === 'index.html') acc.push(p); } return acc; };
  const trainingRe = new RegExp(`${TRAINING_MARKER}="(\\w+)"`, 'g');
  const erpRe = new RegExp(`${ERP_MARKER}="(\\w+)"`, 'g');
  for (const file of walk(dist)) {
    const path = '/' + relative(dist, dirname(file)).replace(/\\/g, '/');
    const p = path === '/' ? '/' : path.replace(/\/$/, '');
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(trainingRe)) {
      const region = TRAINING.regions[m[1]];
      if (INDIA_PATH.test(p)) out.push({ file: `dist${p}`, line: 0, kind: 'DIST-INDIA-FEES', text: `training fee block (${m[1]}) on India page` });
      else if (!region || !region.pages.includes(p)) out.push({ file: `dist${p}`, line: 0, kind: 'DIST-PLACEMENT', text: `training fee block (${m[1]}) on a page not allowlisted for it` });
    }
    for (const m of html.matchAll(erpRe)) {
      if (!ERP.pages[p]) out.push({ file: `dist${p}`, line: 0, kind: 'DIST-PLACEMENT', text: `ERP plan pricing (${m[1]}) outside /erp and /erp/pricing` });
    }
  }
  return out;
}

// ── RUN ──────────────────────────────────────────────────────────────────────
const VIOLATIONS = [];

const st = selfTest();
for (const f of st) VIOLATIONS.push({ file: 'scripts/assert-no-atlantis-pricing.mjs', line: 0, kind: 'SELF-TEST', text: f });
for (const e of validateApprovedPricingData()) VIOLATIONS.push({ file: TRAINING_FEES_FILE + ' / ' + ERP_PRICING_FILE, line: 0, kind: 'DATA', text: e });

let FILES;
try {
  // docs/marketing/* are internal drafts, not shipped pages — scanned only
  // with --include-docs so the gate stays focused on what Google can see.
  const scope = process.argv.includes('--include-docs')
    ? 'src/ scripts/prerender.mjs scripts/approved-pricing.mjs docs/'
    : 'src/ scripts/prerender.mjs scripts/approved-pricing.mjs';
  FILES = execSync(`git ls-files --cached --others --exclude-standard ${scope}`, { cwd: ROOT })
    .toString().split('\n').filter((f) => /\.(tsx|ts|mjs|json)$/.test(f) || /\.md$/.test(f));
} catch {
  FILES = [];
}
if (!FILES.length) {
  // Fallback when git is unavailable — walk src/ directly.
  const walk = (d, acc = []) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) walk(p, acc);
      else if (/\.(tsx|ts|json)$/.test(e)) acc.push(relative(ROOT, p).replace(/\\/g, '/'));
    }
    return acc;
  };
  FILES = walk(join(ROOT, 'src'));
  FILES.push('scripts/prerender.mjs', 'scripts/approved-pricing.mjs');
}
FILES = [...new Set(FILES)];

for (const rel of FILES) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) continue;
  VIOLATIONS.push(...scanLines(rel, readFileSync(abs, 'utf8').split(/\r?\n/)));
}
if (process.argv.includes('--dist')) VIOLATIONS.push(...scanDist());

const byKind = {};
for (const v of VIOLATIONS) (byKind[v.kind] = byKind[v.kind] || []).push(v);

console.log('\n=== assert-no-atlantis-pricing (CLAUDE.md §18, revised 2026-10-07) ===');
console.log(`scanned ${FILES.length} files; self-test ${st.length ? 'FAILED' : 'ok'}; approved amounts: ${AMOUNTS.training.size} training, ${AMOUNTS.erp.size} ERP (from the data files)\n`);

if (!VIOLATIONS.length) {
  console.log('PASS — no unapproved Atlantis pricing found in any layer.\n');
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
