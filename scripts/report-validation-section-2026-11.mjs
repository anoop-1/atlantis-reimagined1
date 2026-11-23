// NDT report validation section (owner request 2026-11-23): crawler routes and the build guard.
// Model and copy: src/data/report-validation-section/model.mjs + list.json + root.json + pages/*.json, shared with
// src/pages/ReportValidationSection.tsx.
//
// Owner decisions 2026-11-23: independent review and impartial analysis of reports and inspection data the client
// sends, by a review team drawn from nuclear, maritime, oil and gas and petrochemical work; US cities (North Carolina
// excluded) and Middle East cities; method pages (DR, CR, PAUT, eddy current tube inspection …); keywords such as
// digital inspection, review and digital reporting; maritime mentioned only while maritime SEO is paused; NO pricing
// anywhere (buyers contact us for scope and a quote); every page 2,000+ words of its own copy (project preference).
// The guard fails the build if a page is under 2,000 own words, a title/description is out of range or duplicated, a
// link points at an unbuilt page, two pages share a sentence, a North Carolina page appears, or the copy carries price
// wording, a presence claim, a time promise, a credential the founder does not hold, a class-approval or nuclear QA
// claim, a US radiography offer, an inspector-of-record or FFS offer, a sanctioned country or company, or names the
// founder.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildRvSection, ROOT, pathFor } from '../src/data/report-validation-section/model.mjs';
import { SITE } from '../src/data/service-section/core.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', 'src', 'data', 'report-validation-section');
export const RV_ROWS = JSON.parse(readFileSync(join(DATA, 'list.json'), 'utf8')).pages;
export const RV_ROOT_REC = JSON.parse(readFileSync(join(DATA, 'root.json'), 'utf8'));

function loadRecords() {
  const records = {}; const missing = [];
  for (const r of RV_ROWS) {
    const f = join(DATA, 'pages', `${r.slug}.json`);
    if (existsSync(f)) records[r.slug] = JSON.parse(readFileSync(f, 'utf8')); else missing.push(`pages/${r.slug}.json`);
  }
  return { records, missing };
}
const { records: RECORDS, missing: MISSING } = loadRecords();
// Only rows with a record are published (the list can run ahead of the writing; the build log reports the gap).
const LIVE_ROWS = RV_ROWS.filter((r) => RECORDS[r.slug]);
export const RV_SECTION = buildRvSection(LIVE_ROWS, RECORDS, RV_ROOT_REC);
export const RV_PATHS = RV_SECTION.PATHS;

const iconCache = new Map();
function icon(name, className) {
  const key = `${name}|${className}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const C = Lucide[name];
  const svg = C ? renderToStaticMarkup(createElement(C, { className, 'aria-hidden': 'true' })) : '';
  iconCache.set(key, svg);
  return svg;
}

export function rvFallbackForm() {
  const subject = encodeURIComponent('NDT report validation enquiry');
  return `
    <section class="rv-enquiry" aria-label="Report validation enquiry">
      <h2>Send a report for independent review</h2>
      <p>Tell us what the report covers, the method and the code or procedure it was written to, and what decision depends on it. Reviews are carried out remotely on the reports and data you send. We reply within one business day with the scope and a quote.</p>
      <form action="mailto:info@atlantisndt.com?subject=${subject}" method="post" enctype="text/plain" data-form="rv-enquiry-fallback">
        <p><label for="rv-report">Report and method</label><br><input id="rv-report" name="report" type="text" required placeholder="e.g. PAUT weld report, CR radiographs, eddy current tube data, UT thickness survey"></p>
        <p><label for="rv-code">Code or procedure</label><br><input id="rv-code" name="code" type="text" placeholder="e.g. ASME Section V and VIII, API 570, AWS D1.1, operator standard"></p>
        <p><label for="rv-decision">What the review is for</label><br><input id="rv-decision" name="decision" type="text" placeholder="e.g. accept a contractor report, a client rejection, a dispute, an acquisition"></p>
        <p><label for="rv-name">Name</label><br><input id="rv-name" name="name" type="text" required></p>
        <p><label for="rv-email">Email</label><br><input id="rv-email" name="email" type="email" required></p>
        <p><label for="rv-company">Company</label><br><input id="rv-company" name="company" type="text"></p>
        <p><button type="submit">Request a Review</button></p>
      </form>
      <p>You can also write to info@atlantisndt.com or use the <a href="/contact">contact page</a>.</p>
    </section>`;
}

const HEADER = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/report-validation">Report Validation</a><a href="/consulting">Consulting</a><a href="/inspection">Inspection</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>';

export function rvSectionRoutes() {
  return RV_SECTION.PAGES.filter((p) => !p.__stub).map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    publishedAt: '2026-11-23',
    bodyContent: `${HEADER}\n  <main>\n${RV_SECTION.html(page, { icon, formHtml: rvFallbackForm() })}\n  </main>`,
    structuredData: RV_SECTION.schema(page),
  }));
}

const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ');
const hrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&')).filter((h) => h.startsWith('/')).map((h) => h.split(/[?#]/)[0] || '/');
const NEG = /\b(not|no|never|nor|neither|doesn['’]t|does not|isn['’]t|is not|cannot|can['’]t|without|rather than|instead of|stays? with|remains? with|is theirs|are theirs|belongs? to|outside (?:our|the) (?:scope|review))\b/i;
const FOUNDER_RX = new RegExp(['Raya', 'varapu|\\bour founder|\\bAnoop\\b'].join(''), 'i');

export const RV_BANNED = [
  [/[$£€₹¥]\s?\d|\b(?:usd|eur|gbp|aed|sar|inr|qar|kwd|omr|bhd)\s?\d|\bprices?\b|\bpricing\b|\bpriced\b|\bfees?\b|\bday[- ]rates?\b|\bhourly rates?\b|\bdiscount|cost[- ]effective|\bcheap|low[- ]cost|\baffordable\b|\bbudget[- ]friendly|\bfree (?:review|consultation|quote)\b/i, 'price wording (owner: no pricing on these pages)'],
  [/\b[Oo]ur (?:local|regional|[A-Z][a-z]+) (?:office|team|base|lab)\b|\b[Ll]ocal office\b|\b[Oo]ffice in (?!Houston|Hyderabad)|\b[Oo]ur office\b|\b(?:[Oo]ur|Atlantis(?:['’]s)?) subsidiar|\b[Oo]ur agents?\b|\b[Oo]ur partners? in\b|\b[Oo]ur (?:lab|laboratory|branch)\b|\bbased in (?!Houston|Hyderabad)[A-Z]/, 'local presence'],
  [/24\/7|\bguarantee|state[- ]of[- ]the[- ]art|cutting[- ]edge|world[- ]class|look no further|team of level iiis?|industry[- ]leading|\bbest[- ]in[- ]class\b|\bsame[- ]day\b|within \d+ (?:hours?|days?|business days?)\b(?<!within 1 business day)|\b\d+[- ](?:hour|day) turnaround|turnaround (?:of|in) \d/i, 'banned phrase or time promise (only "we reply within one business day" is allowed)'],
  [/\b(?:the )?(?:first|only|best|leading|#1|top)\b[^.]{0,30}\b(?:provider|company|companies|firm|consultan\w*|choice)\b/i, 'superlative'],
  [/\bRussia|\bRussian\b|\bVenezuela|\bIran\b|\bIranian\b|\bCITGO\b|\bPDVSA\b|\bPdVSA\b|\bLukoil\b|\bRosneft\b|\bNayara\b/i, 'sanctioned country or company'],
  [/NAS[ -]?410|customer-specified aerospace standard|NANDTB/i, 'NAS 410 / hedge wording'],
  [/North Carolina|\bCharlotte\b|\bRaleigh\b|\bWilmington, NC\b/i, 'North Carolina (owner: report validation excludes North Carolina)'],
  [/\b(?:ISO\/IEC|ISO) ?17020[^.]{0,40}\b(?:accredited|accreditation)\b(?![^.]{0,40}\bnot\b)|\baccredited (?:inspection body|laboratory|to ISO)/i, 'accreditation claim (Atlantis holds ISO 9001 and ISO 14001 only)'],
  [/\b(?:approved|recogni[sz]ed) (?:by|under) (?:DNV|ABS|Lloyd|Bureau Veritas|ClassNK|IACS)|\bclass[- ]approved\b|\bUR Z17 approv/i, 'class-approval claim (maritime is a mention only; approvals are in process)'],
];

function sentenceProblems(all) {
  const out = [];
  for (const s of all.split(/(?<=[.!?])\s+/)) {
    if (/\?\s*$/.test(s)) continue; // a question is not an offer
    const subj = /\b(Atlantis|we|our|us)\b/.test(s);
    if (subj && /\b(fitness[- ]for[- ]service|API 579|FFS)\b/i.test(s) && /\b(perform|provide|offer|carry out|deliver|calculate)\w*\b/i.test(s) && !NEG.test(s)) out.push(`FFS offer? "${s.slice(0, 140)}"`);
    if (subj && /\b(radiograph\w*|RT)\b/.test(s) && /\b(perform|offer|carry out|shoot|expose|take)\w*\b/i.test(s) && /United States|USA|U\.S\.|\bUS\b|Texas|Louisiana|California|Oklahoma|Illinois|Indiana|Pennsylvania|New Jersey|Ohio|Michigan|Alabama|Tennessee|Georgia|Colorado|Utah|Arizona|Alaska|Missouri|Minnesota|Washington/.test(s) && !NEG.test(s) && !/review|interpret|training|evaluat|assess/i.test(s)) out.push(`US RT offer? "${s.slice(0, 140)}"`);
    if (subj && /\b(inspector of record|Authori[sz]ed (?:Nuclear )?Inspector|ANI)\b/.test(s) && /\b(act as|serve as|provide|supply|are the|be the|sign as)\b/i.test(s) && !NEG.test(s)) out.push(`inspector-of-record offer? "${s.slice(0, 140)}"`);
    if (subj && /\b(Appendix B|NQA-1)\b/.test(s) && /\b(qualified|approved|compliant|program|supplier|meet|meets)\b/i.test(s) && !NEG.test(s)) out.push(`nuclear QA claim? "${s.slice(0, 140)}"`);
    if (subj && /\bLevel (?:III|3)\b/.test(s) && /\b(ET|eddy current|ECT|RFT|AE|acoustic emission|MFL|leak)\b/i.test(s) && /\b(certified|qualified|holds?|our)\b/i.test(s) && !NEG.test(s)) out.push(`Level III claim outside UT/RT/MT/PT/VT? "${s.slice(0, 140)}"`);
    if (FOUNDER_RX.test(s)) out.push(`founder named? "${s.slice(0, 140)}"`);
  }
  return out;
}

/** Own copy of a record (excludes the template's shared CTA band, form and link pills). */
const ownText = (r) => [r.intro, ...(r.highlights || []).map((h) => `${h.h} ${h.p}`), ...(r.sections || []).flatMap((x) => [].concat(x.p || [], x.list || [], ...(x.table ? x.table.rows.map((row) => row.join(' ')) : []))), ...(r.faqs || []).map((f) => `${f.q} ${f.a}`)].join(' ');

function copyProblems(label, rec, page, html, knownPaths) {
  const out = [];
  const t = text(html);
  const own = ownText(rec).split(/\s+/).filter(Boolean).length;
  // owner 2026-11-23: 2,000+ words of the page's OWN copy (template blocks such as the CTA band, form and link pills do not count)
  if (own < 2000) out.push(`${own} words of the page's own copy (minimum 2,000)`);
  if (!page.title || page.title.length > 62) out.push(`title length ${page.title?.length} (max 62)`);
  if (!page.description || page.description.length < 120 || page.description.length > 160) out.push(`description length ${page.description?.length} (120-160)`);
  if (!page.h1 || page.h1 === page.title) out.push('h1 missing or same as title');
  if ((rec.faqs || []).length < 6) out.push(`${(rec.faqs || []).length} FAQs (6+)`);
  if ((rec.sections || []).filter((s) => !s.linksFrom).length < 6) out.push(`${(rec.sections || []).length} sections (6+)`);
  if (!/\bremote(ly)?\b/i.test(t)) out.push('does not say the review is carried out remotely');
  if (!/\bdigital\b/i.test(t)) out.push('never mentions digital inspection data or digital reporting (owner keywords)');
  if (!/\bindependen/i.test(t)) out.push('never says the review is independent');
  const all = `${page.title} ${page.description} ${t}`;
  for (const [re, lab] of RV_BANNED) { const m = all.match(re); if (m) out.push(`${lab}: "${all.slice(Math.max(0, m.index - 40), m.index + 50)}"`); }
  out.push(...sentenceProblems(all));
  if (knownPaths) for (const h of hrefs(html)) if (!knownPaths.has(h) && h !== '/' && !RV_PATHS.includes(h)) out.push(`link to unbuilt ${h}`);
  return out.map((x) => `${label}: ${x}`);
}

/** Content problems for one record (used by the guard and the writers' CLI). */
export function rvRecordProblems(slug, knownPaths) {
  const page = RV_SECTION.page(pathFor(slug));
  if (!page || page.__stub) return [`${slug}: no record`];
  return copyProblems(slug, RECORDS[slug], page, RV_SECTION.html(page), knownPaths);
}
export function rvRootProblems(knownPaths) {
  const page = RV_SECTION.page(ROOT);
  return copyProblems(ROOT, RV_ROOT_REC, page, RV_SECTION.html(page), knownPaths);
}

export function rvSharedSentences() {
  const seen = new Map(); const out = [];
  const recs = [['_root', RV_ROOT_REC], ...LIVE_ROWS.map((r) => [r.slug, RECORDS[r.slug]])];
  for (const [slug, rec] of recs) {
    for (const s of ownText(rec).split(/(?<=[.?!])\s+/).map((x) => x.trim().toLowerCase()).filter((x) => x.split(' ').length >= 10)) {
      if (seen.has(s) && seen.get(s) !== slug) out.push(`${slug}: sentence repeated from ${seen.get(s)}: "${s.slice(0, 80)}"`);
      else seen.set(s, slug);
    }
  }
  return out;
}

/** Build guard. knownPaths: every built path. */
export function assertRvSectionClean(knownPaths) {
  const problems = [];
  const titles = new Map(); const descs = new Map();
  problems.push(...rvRootProblems(knownPaths));
  for (const r of LIVE_ROWS) {
    problems.push(...rvRecordProblems(r.slug, knownPaths));
    const pg = RV_SECTION.page(pathFor(r.slug));
    if (titles.has(pg.title)) problems.push(`${pg.path}: duplicate title with ${titles.get(pg.title)}`); titles.set(pg.title, pg.path);
    if (descs.has(pg.description)) problems.push(`${pg.path}: duplicate description with ${descs.get(pg.description)}`); descs.set(pg.description, pg.path);
    if (r.kind === 'city' && /north[- ]carolina|-nc$/i.test(`${r.slug} ${r.region || ''}`)) problems.push(`${pg.path}: North Carolina is excluded by the owner`);
  }
  problems.push(...rvSharedSentences());
  if (problems.length) throw new Error(`\n❌ Report validation section guard (${problems.length}):\n  ${problems.slice(0, 40).join('\n  ')}`);
  console.log(`🔍 Report validation section 2026-11-23: hub + ${LIVE_ROWS.length} of ${RV_ROWS.length} planned pages live (${MISSING.length} not written yet), guard PASS`);
}

// CLI for writers: node scripts/report-validation-section-2026-11.mjs --check <slug|_root> [...]
if (process.argv[1] && process.argv[1].endsWith('report-validation-section-2026-11.mjs') && process.argv.includes('--check')) {
  const fs = await import('node:fs');
  const dist = join(HERE, '..', 'dist');
  const known = new Set();
  const walk = (d, p, depth) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (!e.isDirectory() || e.name === 'assets') continue; const q = `${p}/${e.name}`; if (fs.existsSync(join(d, e.name, 'index.html'))) known.add(q); if (depth < 5) walk(join(d, e.name), q, depth + 1); } };
  walk(dist, '', 1);
  const slugs = process.argv.slice(process.argv.indexOf('--check') + 1);
  const shared = rvSharedSentences();
  let bad = 0;
  for (const slug of slugs) {
    if (slug !== '_root' && !RECORDS[slug]) { console.log(`✗ ${slug}: no file src/data/report-validation-section/pages/${slug}.json`); bad++; continue; }
    const probs = slug === '_root' ? [...rvRootProblems(known), ...shared.filter((x) => x.startsWith('_root:'))] : [...rvRecordProblems(slug, known), ...shared.filter((x) => x.startsWith(`${slug}:`))];
    const rec = slug === '_root' ? RV_ROOT_REC : RECORDS[slug];
    const own = ownText(rec).split(/\s+/).filter(Boolean).length;
    if (probs.length) { bad++; console.log(`✗ ${slug} (${own} own words):\n   ${probs.join('\n   ')}`); } else console.log(`✓ ${slug} (${own} own words)`);
  }
  process.exit(bad ? 1 : 0);
}
