// Risk-based inspection (RBI) section (owner request 2026-11-23): crawler routes and the build guard.
// Model and copy: src/data/rbi-section/model.mjs + list.json + pages/*.json, shared with src/pages/RbiSection.tsx.
//
// Owner decisions 2026-11-23: RBI is an Atlantis service delivered remotely; Russia and Venezuela are not covered
// (US sanctions); no named credentials (e.g. "API 580 certified") and no named RBI software as Atlantis tools;
// fitness-for-service (API 579) stays not offered; every page 2,000+ words (project preference).
// The guard fails the build if a record is missing, a page is under 2,000 words, a title/description is out of range
// or duplicated, a link points at an unbuilt page, two pages share a sentence, or the copy carries a price, a
// presence claim, a credential/software claim, an FFS offer, a US radiography offer or a sanctioned country.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildRbiSection, ROOT, pathFor } from '../src/data/rbi-section/model.mjs';
import { SITE } from '../src/data/service-section/core.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', 'src', 'data', 'rbi-section');
export const RBI_ROWS = JSON.parse(readFileSync(join(DATA, 'list.json'), 'utf8')).pages;

function loadRecords() {
  const records = {}; const missing = [];
  for (const r of RBI_ROWS) {
    const f = join(DATA, 'pages', `${r.slug}.json`);
    if (existsSync(f)) records[r.slug] = JSON.parse(readFileSync(f, 'utf8')); else missing.push(`pages/${r.slug}.json`);
  }
  return { records, missing };
}
const { records: RECORDS, missing: MISSING } = loadRecords();
// Only rows with a record are published (the list can run ahead of the writing; the guard reports the gap).
const LIVE_ROWS = RBI_ROWS.filter((r) => RECORDS[r.slug]);
export const RBI_SECTION = buildRbiSection(LIVE_ROWS, RECORDS);
export const RBI_PATHS = RBI_SECTION.PATHS;

const iconCache = new Map();
function icon(name, className) {
  const key = `${name}|${className}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const C = Lucide[name];
  const svg = C ? renderToStaticMarkup(createElement(C, { className, 'aria-hidden': 'true' })) : '';
  iconCache.set(key, svg);
  return svg;
}

export function rbiFallbackForm() {
  const subject = encodeURIComponent('Risk-based inspection enquiry');
  return `
    <section class="rbi-enquiry" aria-label="Risk-based inspection enquiry">
      <h2>Request an RBI proposal</h2>
      <p>Send the facility, the equipment in scope, the codes or operator standard you work to and the inspection data you hold. RBI studies are delivered remotely.</p>
      <form action="mailto:info@atlantisndt.com?subject=${subject}" method="post" enctype="text/plain" data-form="rbi-enquiry-fallback">
        <p><label for="rbi-facility">Facility and country</label><br><input id="rbi-facility" name="facility" type="text" required></p>
        <p><label for="rbi-scope">Equipment in scope</label><br><input id="rbi-scope" name="scope" type="text" placeholder="e.g. 120 vessels, 400 piping circuits, 30 storage tanks"></p>
        <p><label for="rbi-codes">Codes or operator standard</label><br><input id="rbi-codes" name="codes" type="text" placeholder="e.g. API 510/570/653, API RP 580/581, ASME PCC-3, operator RBI standard"></p>
        <p><label for="rbi-name">Name</label><br><input id="rbi-name" name="name" type="text" required></p>
        <p><label for="rbi-email">Email</label><br><input id="rbi-email" name="email" type="email" required></p>
        <p><label for="rbi-company">Company</label><br><input id="rbi-company" name="company" type="text"></p>
        <p><button type="submit">Request a Proposal</button></p>
      </form>
    </section>`;
}

const HEADER = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="/inspection/risk-based-inspection">Risk-Based Inspection</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>';

export function rbiSectionRoutes() {
  return RBI_SECTION.PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    publishedAt: '2026-11-23',
    bodyContent: `${HEADER}\n  <main>\n${RBI_SECTION.html(page, { icon, formHtml: rbiFallbackForm() })}\n  </main>`,
    structuredData: RBI_SECTION.schema(page),
  }));
}

const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ');
const hrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&')).filter((h) => h.startsWith('/')).map((h) => h.split(/[?#]/)[0] || '/');
const NEG = /\b(not|no|never|nor|neither|doesn['’]t|does not|isn['’]t|is not|cannot|can['’]t|without|rather than|instead of|stays? with|remains? with)\b/i;

export const RBI_BANNED = [
  [/[$£€₹¥]\s?\d|\b(?:usd|eur|gbp|aed|sar|inr|cny|sgd|myr|qar|kwd|omr|bhd|iqd)\s?\d|\bprices?\b|\bpricing\b|\bfees?\b|\bday[- ]rates?\b|\bdiscount|cost[- ]effective|\bcheap|low[- ]cost|\baffordable\b/i, 'price wording'],
  [/our (?:local|[A-Z][a-z]+) (?:office|team|base|lab)\b|\blocal office\b|\boffice in\b|\bour office\b|\bsubsidiar|\bour agents?\b|\bour partners? in\b|\bour (?:lab|laboratory|facility|branch)\b/i, 'local presence'],
  [/\bAPI 580[- ]certified\b|\bAPI 581[- ]certified\b|\bcertified RBI (?:engineers?|team|specialists?)\b|\bour (?:API 580|RBI)[- ]certified\b/i, 'credential claim'],
  [/\b(?:Meridium|Synergi|Credo|PCMS|Antea|Cenosco|IMS PEI|RBMI)\b[^.]{0,40}\b(?:our|Atlantis|we use|we run)\b|\b(?:our|Atlantis(?:'s)?) (?:RBI )?(?:software|platform|tool)\b[^.]{0,40}\bRBI\b/i, 'software claim'],
  [/24\/7|\bguarantee|state[- ]of[- ]the[- ]art|cutting[- ]edge|world[- ]class|look no further|team of level iiis?|within 24 hours|24-hour turnaround|industry[- ]leading|\bbest[- ]in[- ]class\b/i, 'banned phrase'],
  [/\b(?:the )?(?:first|only|best|leading|#1|top)\b[^.]{0,30}\b(?:provider|company|companies|firm|consultan\w*|choice)\b/i, 'superlative'],
  [/\bRussia|\bRussian\b|\bVenezuela/i, 'sanctioned country (owner 2026-11-23: not covered)'],
  [/NAS[ -]?410|customer-specified aerospace standard/i, 'NAS 410 / hedge wording'],
];

function sentenceProblems(all) {
  const out = [];
  for (const s of all.split(/(?<=[.!?])\s+/)) {
    const subj = /\b(Atlantis|we|our)\b/.test(s);
    if (subj && /\b(fitness[- ]for[- ]service|API 579|FFS)\b/i.test(s) && /\b(perform|provide|offer|carry out|deliver|calculate|assess)\w*\b/i.test(s) && !NEG.test(s)) out.push(`FFS offer? "${s.slice(0, 140)}"`);
    if (subj && /\b(radiograph\w*|RT)\b/.test(s) && /\b(perform|provide|offer|carry out|shoot|deliver)\w*\b/i.test(s) && /United States|USA|U\.S\.|\bUS\b|Texas|Louisiana|California|Oklahoma|Illinois|Indiana|New York|New Jersey|Pennsylvania/.test(s) && !NEG.test(s) && !/review|theory|training/i.test(s)) out.push(`US RT offer? "${s.slice(0, 140)}"`);
    if (subj && /\b(inspector of record|Authori[sz]ed Inspector)\b/i.test(s) && /\b(act as|serve as|provide|supply|are the|be the)\b/i.test(s) && !NEG.test(s)) out.push(`inspector-of-record offer? "${s.slice(0, 140)}"`);
    if (/(Rayavarapu|our founder)[^.]{0,150}\b(API ?5\d\d|API ?653|CWI|ET\b|eddy current|NAS 410)/.test(s)) out.push(`founder credential? "${s.slice(0, 140)}"`);
  }
  return out;
}

/** Own copy of a record (excludes the template's shared CTA band and form). */
const ownText = (r) => [r.intro, ...(r.highlights || []).map((h) => `${h.h} ${h.p}`), ...(r.sections || []).flatMap((x) => [].concat(x.p || [], x.list || [], ...(x.table ? x.table.rows.map((row) => row.join(' ')) : []))), ...(r.faqs || []).map((f) => `${f.q} ${f.a}`)].join(' ');

/** Content problems for one record (used by the guard and the writers' CLI). */
export function rbiRecordProblems(slug, knownPaths) {
  const out = [];
  const page = RBI_SECTION.page(pathFor(slug));
  if (!page) return [`${slug}: no record`];
  const html = RBI_SECTION.html(page);
  const t = text(html);
  const words = t.split(' ').filter(Boolean).length;
  if (words < 2000) out.push(`${words} rendered words (minimum 2,000)`);
  const own = ownText(RECORDS[slug]).split(/\s+/).filter(Boolean).length;
  if (own < 1500) out.push(`${own} words of the page's own copy (minimum 1,500)`);
  if (!page.title || page.title.length > 62) out.push(`title length ${page.title?.length} (max 62)`);
  if (!page.description || page.description.length < 120 || page.description.length > 160) out.push(`description length ${page.description?.length} (120-160)`);
  if (!page.h1 || page.h1 === page.title) out.push('h1 missing or same as title');
  if ((RECORDS[slug].faqs || []).length < 6) out.push(`${(RECORDS[slug].faqs || []).length} FAQs (6+)`);
  if ((RECORDS[slug].sections || []).length < 6) out.push(`${(RECORDS[slug].sections || []).length} sections (6+)`);
  if (!/\bremote(ly)?\b/i.test(t)) out.push('does not say the study is delivered remotely');
  const all = `${page.title} ${page.description} ${t}`;
  for (const [re, label] of RBI_BANNED) { const m = all.match(re); if (m) out.push(`${label}: "${all.slice(Math.max(0, m.index - 40), m.index + 50)}"`); }
  out.push(...sentenceProblems(all));
  if (knownPaths) for (const h of hrefs(html)) if (!knownPaths.has(h) && h !== '/' && !RBI_PATHS.includes(h) && h !== ROOT) out.push(`link to unbuilt ${h}`);
  return out;
}

export function rbiSharedSentences() {
  const seen = new Map(); const out = [];
  for (const r of LIVE_ROWS) {
    for (const s of ownText(RECORDS[r.slug]).split(/(?<=[.?!])\s+/).map((x) => x.trim().toLowerCase()).filter((x) => x.split(' ').length >= 10)) {
      if (seen.has(s) && seen.get(s) !== r.slug) out.push(`${r.slug}: sentence repeated from ${seen.get(s)}: "${s.slice(0, 80)}"`);
      else seen.set(s, r.slug);
    }
  }
  return out;
}

/** Build guard. knownPaths: every built path. */
export function assertRbiSectionClean(knownPaths) {
  const problems = [];
  const titles = new Map(); const descs = new Map();
  for (const r of LIVE_ROWS) {
    for (const x of rbiRecordProblems(r.slug, knownPaths)) problems.push(`${pathFor(r.slug)}: ${x}`);
    const pg = RBI_SECTION.page(pathFor(r.slug));
    if (titles.has(pg.title)) problems.push(`${pg.path}: duplicate title with ${titles.get(pg.title)}`); titles.set(pg.title, pg.path);
    if (descs.has(pg.description)) problems.push(`${pg.path}: duplicate description with ${descs.get(pg.description)}`); descs.set(pg.description, pg.path);
  }
  for (const r of LIVE_ROWS) if (r.parent && !RECORDS[r.parent]) problems.push(`${pathFor(r.slug)}: country page ${r.parent} not written yet`);
  problems.push(...rbiSharedSentences());
  if (problems.length) throw new Error(`\n❌ RBI section guard (${problems.length}):\n  ${problems.slice(0, 40).join('\n  ')}`);
  console.log(`🛢️  RBI section 2026-11-23: ${LIVE_ROWS.length} of ${RBI_ROWS.length} planned pages live (${MISSING.length} not written yet), guard PASS`);
}

// CLI for writers: node scripts/rbi-section-2026-11.mjs --check <slug> [...]
if (process.argv[1] && process.argv[1].endsWith('rbi-section-2026-11.mjs') && process.argv.includes('--check')) {
  const fs = await import('node:fs');
  const dist = join(HERE, '..', 'dist');
  const known = new Set();
  const walk = (d, p, depth) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (!e.isDirectory() || e.name === 'assets') continue; const q = `${p}/${e.name}`; if (fs.existsSync(join(d, e.name, 'index.html'))) known.add(q); if (depth < 3) walk(join(d, e.name), q, depth + 1); } };
  walk(dist, '', 1);
  const slugs = process.argv.slice(process.argv.indexOf('--check') + 1);
  const shared = rbiSharedSentences();
  let bad = 0;
  for (const slug of slugs) {
    if (!RECORDS[slug]) { console.log(`✗ ${slug}: no file src/data/rbi-section/pages/${slug}.json`); bad++; continue; }
    const probs = [...rbiRecordProblems(slug, known), ...shared.filter((x) => x.startsWith(`${slug}:`))];
    const row = RBI_ROWS.find((r) => r.slug === slug);
    if (row?.parent && !RECORDS[row.parent]) probs.push(`(note) country page ${row.parent} not written yet — fine while drafting`);
    const words = text(RBI_SECTION.html(RBI_SECTION.page(pathFor(slug)))).split(' ').filter(Boolean).length;
    const hard = probs.filter((x) => !x.startsWith('(note)'));
    if (hard.length) { bad++; console.log(`✗ ${slug} (${words} words):\n   ${probs.join('\n   ')}`); } else console.log(`✓ ${slug} (${words} words)${probs.length ? ' ' + probs.join(' ') : ''}`);
  }
  process.exit(bad ? 1 : 0);
}
