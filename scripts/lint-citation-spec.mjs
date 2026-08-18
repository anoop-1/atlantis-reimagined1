#!/usr/bin/env node
/**
 * Citation-spec + render-parity gate — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the day-30 gate from the 90-day plan, made binary and runnable.
 *
 * It reads the BUILT HTML in dist/ — which is exactly what a crawler with
 * JavaScript disabled receives — and asserts that each target page is eligible
 * to be cited. URL accessibility is the highest-evidenced citation factor
 * (9.5/10); a page that fails these checks cannot be cited no matter how well
 * it is written, so this runs before any content is judged.
 *
 * CHECKS
 *   1. RENDER PARITY   exactly one <h1>, non-empty, present without JS.
 *   2. ANSWER BLOCK    a data-citation-block="answer" exists, and its lead
 *                      paragraph is 40-70 words.
 *   3. FACET COVERAGE  at least 6 headings phrased as questions — the fan-out
 *                      surface. One query becomes 8-15 sub-queries.
 *   4. REAL TABLE      at least one <table> carrying a <caption>. Not an image,
 *                      not a div grid.
 *   5. NAMED SOURCE    an inline authority reference. Cited 2.1x more often.
 *   6. NO HEDGING      declarative phrasing; pairwise re-ranking drops hedges.
 *   7. CRAWL ELIGIBLE  no noindex, no nosnippet, canonical present.
 *   8. NO ATLANTIS PRICE  the standing rule, enforced mechanically.
 *
 * USAGE
 *   node scripts/lint-citation-spec.mjs                 # audit the top pages
 *   node scripts/lint-citation-spec.mjs --all           # every built page
 *   node scripts/lint-citation-spec.mjs --path /consulting
 *   node scripts/lint-citation-spec.mjs --strict        # exit 1 on any failure
 *
 * Exit code is 0 unless --strict, so it can run informationally in a normal
 * build and as a gate in CI.
 */
import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const args = process.argv.slice(2);
const ALL = args.includes('--all');
const STRICT = args.includes('--strict');
const ONLY = args.includes('--path') ? args[args.indexOf('--path') + 1] : null;

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npx vite build && node scripts/prerender.mjs` first.');
  process.exit(1);
}

/** Pages carrying the most impressions; the plan applies the spec here first. */
const PRIORITY = [
  '/blog/ndt-salary-guide-2026-global',
  '/blog/cwi-pass-rate-by-part-a-b-c-breakdown',
  '/blog/api-510-570-653-exam-schedule-2026',
  '/blog/api-653-tank-inspection-guide',
  '/blog/asnt-snt-tc-1a-certification-requirements',
  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide',
  '/blog/asme-section-v-article-4-ut-requirements-explained',
  '/blog/ut-level-2-practice-questions',
  '/blog/rt-vs-ut-complete-comparison',
  '/asnt-certification',
  '/api-570-certification',
  '/api-653-certification',
  '/ndt-certification-guide',
  '/consulting',
  '/consulting/ndt-consulting-level-iii',
  '/best-ndt-reporting-software-2026',
  '/ndt-reporting-software-comparison',
  '/erp/ndt-inspection-software-comparison',
  '/digital-twins-ndt',
  '/training-usa',
  '/ndt-training-near-me',
  '/glossary/phased-array-ultrasonic-testing-paut',
];

function listBuiltPages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) listBuiltPages(p, out);
    else if (name === 'index.html') {
      const rel = '/' + relative(DIST, dirname(p)).replace(/\\/g, '/');
      out.push({ route: rel === '/.' ? '/' : rel, file: p });
    }
  }
  return out;
}

const HEDGES = ['it depends', 'varies by', 'generally speaking', 'in most cases', 'may vary', 'could be', 'might be'];
// Atlantis pricing ONLY. This deliberately does not flag every currency figure:
// third-party exam fees (ASNT, AWS, API) and industry salary / contractor rate
// bands are explicitly permitted and appear legitimately on the salary and
// certification guides. An earlier version of this rule flagged "Independent
// PAUT consultants: $150-$300/hour" as a violation — that is market data, not
// an Atlantis price. A lint that cries wolf gets switched off, so the figure
// must now be ATTRIBUTED to Atlantis within a short window to count.
const RATE_SHAPE = /[$\u00a3\u20ac]\s?\d[\d,]*(?:\.\d+)?\s*(?:per|\/)\s*(?:day|hour|seat|user|licen[cs]e|month|year)/gi;
const MARKET_CTX = /(salary|consultant|contractor|market|industry|technician|inspector|freelance|typical|earn)/i;
const SELF_ATTRIB = /(atlantis|\bour\b|\bwe\b)/i;
function findAtlantisPrice(body) {
  for (const m of body.matchAll(RATE_SHAPE)) {
    const w = body.slice(Math.max(0, m.index - 90), m.index + 60);
    if (MARKET_CTX.test(w)) continue;   // market rate data is permitted
    if (SELF_ATTRIB.test(w)) return m[0];
  }
  const explicit = body.match(/\b(?:our|atlantis)\s+(?:price|pricing|rate|fee)s?\b[^.]{0,30}[$\u00a3\u20ac]\d/i);
  return explicit ? explicit[0] : null;
}

const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const text = (html) => strip(html).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => s.split(/\s+/).filter(Boolean).length;

function audit(route, html) {
  const issues = [];
  const clean = strip(html);

  // 1. Render parity
  const h1s = [...clean.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length === 0) issues.push(['FAIL', 'render', 'no <h1> in static HTML — invisible to a crawler without JS']);
  else if (h1s.length > 1) issues.push(['FAIL', 'render', `${h1s.length} <h1> elements — ambiguous topic signal`]);
  else if (!text(h1s[0][1])) issues.push(['FAIL', 'render', '<h1> is empty in static HTML']);

  // 2. Answer block
  const block = clean.match(/data-citation-block="answer"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  if (!block) {
    issues.push(['FAIL', 'answer', 'no AnswerBlock — nothing for passage retrieval to lift']);
  } else {
    const n = words(text(block[1]));
    if (n < 40 || n > 70) issues.push(['WARN', 'answer', `lead answer is ${n} words; citation band is 40-70`]);
  }

  // 3. Facet coverage
  const heads = [...clean.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) => text(m[1]));
  const qs = heads.filter((h) => h.includes('?'));
  if (qs.length < 6) issues.push([qs.length === 0 ? 'FAIL' : 'WARN', 'facets', `${qs.length} question-form headings; fan-out needs 6+`]);

  // 4. Real table
  const tables = [...clean.matchAll(/<table[\s\S]*?<\/table>/gi)];
  const withCaption = tables.filter((t) => /<caption/i.test(t[0]));
  if (tables.length === 0) issues.push(['FAIL', 'table', 'no <table> — this is the mechanism that beats high-authority aggregators']);
  else if (withCaption.length === 0) issues.push(['WARN', 'table', `${tables.length} table(s) but none has a <caption>`]);

  // 5. Named source
  const body = text(clean);
  const hasSource = /(ASNT|SNT-TC-1A|CP-189|NAS 410|ISO 9712|ASME|API \d{3}|AWS D1\.1|Section V)/i.test(body);
  if (!hasSource) issues.push(['WARN', 'source', 'no named standard or authority in body text']);

  // 6. Hedging
  const hedged = HEDGES.filter((h) => body.toLowerCase().includes(h));
  if (hedged.length) issues.push(['WARN', 'hedging', `hedged phrasing: ${hedged.slice(0, 3).join(', ')}`]);

  // 7. Crawl eligibility
  if (/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(clean)) issues.push(['FAIL', 'crawl', 'noindex present']);
  if (/nosnippet|max-snippet:\s*0/i.test(clean)) issues.push(['FAIL', 'crawl', 'snippet suppressed — cannot be cited']);
  if (!/rel=["']canonical["']/i.test(clean)) issues.push(['WARN', 'crawl', 'no canonical']);

  // 8. Pricing policy
  const priced = findAtlantisPrice(body);
  if (priced) issues.push(['FAIL', 'policy', `possible Atlantis price: "${String(priced).slice(0, 40)}"`]);

  return issues;
}

const built = listBuiltPages(DIST);
const byRoute = new Map(built.map((b) => [b.route, b.file]));
let targets;
if (ALL) targets = built;
else if (ONLY) targets = built.filter((b) => b.route.startsWith(ONLY));
else targets = PRIORITY.map((r) => ({ route: r, file: byRoute.get(r) })).filter((t) => t.file);

const missing = ALL || ONLY ? [] : PRIORITY.filter((r) => !byRoute.has(r));

console.log(`\nCitation-spec gate — auditing ${targets.length} page(s) of ${built.length} built\n`);

let pass = 0, warned = 0, failed = 0;
const report = [];
for (const t of targets) {
  const issues = audit(t.route, readFileSync(t.file, 'utf-8'));
  const fails = issues.filter((i) => i[0] === 'FAIL');
  const warns = issues.filter((i) => i[0] === 'WARN');
  report.push({ route: t.route, fails: fails.length, warns: warns.length, issues });

  if (fails.length) { failed++; console.log(`  ✗ ${t.route}`); }
  else if (warns.length) { warned++; console.log(`  ~ ${t.route}`); }
  else { pass++; console.log(`  ✓ ${t.route}`); continue; }
  for (const [lvl, cat, msg] of issues) console.log(`      ${lvl === 'FAIL' ? '✗' : '·'} [${cat}] ${msg}`);
}

if (missing.length) {
  console.log(`\n  Not built (route missing from dist/): ${missing.join(', ')}`);
}

console.log(`\n  ${pass} clean · ${warned} with warnings · ${failed} failing`);

// Aggregate: which check fails most often across the corpus. This is what tells
// you whether the problem is the template or a handful of pages.
const tally = {};
for (const r of report) for (const [lvl, cat] of r.issues) tally[`${lvl} ${cat}`] = (tally[`${lvl} ${cat}`] || 0) + 1;
console.log('\n  Most common findings:');
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
  console.log(`    ${String(v).padStart(4)}  ${k}`);
}

writeFileSync(join(__dirname, 'citation-spec-report.json'), JSON.stringify({ generated: new Date().toISOString(), pass, warned, failed, report }, null, 2));
console.log(`\n  Report: scripts/citation-spec-report.json\n`);

if (STRICT && failed > 0) process.exit(1);
