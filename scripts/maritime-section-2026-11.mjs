// Maritime inspection section (owner request 2026-11-07): crawler routes and the build guard.
// Model, copy and classes: src/data/maritime-section/model.mjs + its JSON records, shared with the React
// page (src/pages/MaritimeSection.tsx), so both layers render the same text in the site's design.
//
// The guard fails the build if any city or page record is missing, if any page has fewer than 2,000
// words (owner, 2026-11-10: every maritime page), if a port's own copy is under 1,200 words, if a link
// points at an unbuilt page, or if the copy carries a price, a class-approval claim (while
// CLASS_APPROVALS is empty), a local-presence claim or a service we do not offer.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildMaritimeSection, CLASS_APPROVALS, SERVICE_SLUGS, REGION_SLUGS, LANDING_SLUG, countryHubs, ROOT } from '../src/data/maritime-section/model.mjs';
import { SITE, esc } from '../src/data/service-section/core.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', 'src', 'data', 'maritime-section');
export const MARITIME_CITY_ROWS = JSON.parse(readFileSync(join(DATA, 'city-list.json'), 'utf8')).cities;
export const MARITIME_COUNTRY_HUBS = countryHubs(MARITIME_CITY_ROWS);
const COUNTRY_SLUGS = MARITIME_COUNTRY_HUBS.map(([s]) => s);
const PAGE_SLUGS = [LANDING_SLUG, ...REGION_SLUGS, ...COUNTRY_SLUGS, ...SERVICE_SLUGS];

function loadRecords() {
  const records = {};
  const missing = [];
  for (const slug of PAGE_SLUGS) {
    const f = join(DATA, 'pages', `${slug}.json`);
    if (existsSync(f)) records[slug] = JSON.parse(readFileSync(f, 'utf8')); else missing.push(`pages/${slug}.json`);
  }
  for (const [slug] of MARITIME_CITY_ROWS) {
    const f = join(DATA, 'cities', `${slug}.json`);
    if (existsSync(f)) records[slug] = JSON.parse(readFileSync(f, 'utf8')); else missing.push(`cities/${slug}.json`);
  }
  return { records, missing };
}

const { records: RECORDS, missing: MISSING } = loadRecords();
export const MARITIME_SECTION = buildMaritimeSection(MARITIME_CITY_ROWS, RECORDS);
export const MARITIME_PATHS = MARITIME_SECTION.PATHS;
export const maritimeSectionStats = { routes: 0, cities: 0, minCityWords: 0, avgCityWords: 0 };

const iconCache = new Map();
function icon(name, className) {
  const key = `${name}|${className}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const C = Lucide[name];
  const svg = C ? renderToStaticMarkup(createElement(C, { className, 'aria-hidden': 'true' })) : '';
  iconCache.set(key, svg);
  return svg;
}

/** No-JS fallback for the enquiry form (React renders EnquiryCaptureForm variant="maritime"). */
export function maritimeFallbackForm() {
  const subject = encodeURIComponent('Maritime inspection enquiry');
  return `
    <section class="maritime-enquiry" aria-label="Maritime inspection enquiry">
      <h2>Request a ship gauging quote</h2>
      <p>Send the vessel name or IMO number, the class society, the survey due and the port. We reply with the scope, the mobilisation plan and a quote for that vessel.</p>
      <form action="mailto:info@atlantisndt.com?subject=${subject}" method="post" enctype="text/plain" data-form="maritime-enquiry-fallback">
        <p><label for="me-vessel">Vessel name or IMO number</label><br><input id="me-vessel" name="vessel" type="text" required></p>
        <p><label for="me-class">Class society</label><br><input id="me-class" name="class_society" type="text" placeholder="e.g. DNV, ABS, LR, BV, ClassNK, RINA, KR, CCS"></p>
        <p><label for="me-survey">Survey or scope</label><br><input id="me-survey" name="survey" type="text" placeholder="e.g. renewal survey No. 3, intermediate, CAP, pre-docking gauging, scrubber piping"></p>
        <p><label for="me-port">Port and dates</label><br><input id="me-port" name="port" type="text" required></p>
        <p><label for="me-name">Name</label><br><input id="me-name" name="name" type="text" required></p>
        <p><label for="me-email">Email</label><br><input id="me-email" name="email" type="email" required></p>
        <p><label for="me-company">Company</label><br><input id="me-company" name="company" type="text"></p>
        <p><button type="submit">Request a Quote</button></p>
      </form>
    </section>`;
}

const HEADER = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="/maritime">Maritime Inspection</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>';

export function maritimeSectionRoutes() {
  if (MISSING.length) throw new Error(`maritime section: missing records: ${MISSING.join(', ')}`);
  const out = MARITIME_SECTION.PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    publishedAt: '2026-11-07',
    bodyContent: `${HEADER}\n  <main>\n${MARITIME_SECTION.html(page, { icon, formHtml: maritimeFallbackForm() })}\n  </main>`,
    structuredData: MARITIME_SECTION.schema(page),
  }));
  maritimeSectionStats.routes = out.length;
  return out;
}

const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ');
const hrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&')).filter((h) => h.startsWith('/')).map((h) => h.split(/[?#]/)[0] || '/');

export const BANNED = [
  [/[$£€₹¥]\s?\d|\b(?:usd|eur|gbp|aed|sar|inr|cny|sgd)\s?\d|\bprices?\b|\bpricing\b|\bfees?\b|\bday[- ]rates?\b|\bdiscount|cost[- ]effective|\bcheap|low[- ]cost/i, 'price wording'],
  [/our (?:local|[A-Z][a-z]+) (?:office|team|base)\b|\blocal office\b|\boffice in\b|\bour office\b|\bsubsidiar|\bour agents?\b|\bour partners?\b/i, 'local presence'],
  [/\bdiv(?:er|ers|ing)\b|\brov\b|\bdrones?\b|rope access|\bnace\b|\bampp\b|frosio|cswip|\bpcn\b|iso\/?iec 170(?:20|25)|\biso 170(?:20|25)\b/i, 'service we do not offer'],
  [/24\/7|\bguarantee|state[- ]of[- ]the[- ]art|cutting[- ]edge|world[- ]class|look no further|team of level iiis?|within 24 hours|24-hour turnaround|mobili[sz]\w* within \d+ hours/i, 'banned phrase'],
];
export const APPROVAL_CLAIM = /class[- ](?:approved|certified|recogni[sz]ed) (?:firm|company|supplier|inspection|thickness)|iacs[- ]approved|approved service supplier|we are approved|atlantis is approved|approved by (?:dnv|abs|lr|lloyd|bv|bureau veritas|rina|classnk|kr|ccs|irs)/i;

/** Build guard. knownPaths: every built path (links must resolve). */
export function assertMaritimeSectionClean(knownPaths) {
  const problems = [];
  if (MISSING.length) problems.push(`missing records: ${MISSING.join(', ')}`);
  const titles = new Map();
  const descs = new Map();
  let cityWords = [];
  for (const page of MARITIME_SECTION.PAGES) {
    if (page.__stub) { problems.push(`${page.path}: no record`); continue; }
    const html = MARITIME_SECTION.html(page);
    const t = text(html);
    const words = t.split(' ').filter(Boolean).length;
    if (page.kind === 'city') cityWords.push(words);
    const min = 2000;
    if (words < min) problems.push(`${page.path}: ${words} words (minimum ${min})`);
    if (!page.title || page.title.length > 65) problems.push(`${page.path}: title length ${page.title?.length}`);
    if (!page.description || page.description.length < 120 || page.description.length > 160) problems.push(`${page.path}: description length ${page.description?.length}`);
    if (titles.has(page.title)) problems.push(`${page.path}: duplicate title with ${titles.get(page.title)}`); titles.set(page.title, page.path);
    if (descs.has(page.description)) problems.push(`${page.path}: duplicate description with ${descs.get(page.description)}`); descs.set(page.description, page.path);
    const all = `${page.title} ${page.description} ${t}`;
    for (const [re, label] of BANNED) { const m = all.match(re); if (m) problems.push(`${page.path}: ${label}: "${all.slice(Math.max(0, m.index - 40), m.index + 40)}"`); }
    if (!CLASS_APPROVALS.length) { const m = all.match(APPROVAL_CLAIM); if (m) problems.push(`${page.path}: class-approval claim with no certificate: "${all.slice(Math.max(0, m.index - 40), m.index + 50)}"`); }
    if (knownPaths) for (const h of hrefs(html)) if (!knownPaths.has(h) && h !== '/') problems.push(`${page.path}: link to unbuilt ${h}`);
  }
  // Two port or country pages must not share a sentence of their own copy (the template's shared text is excluded).
  const seen = new Map();
  const citySlugs = new Set(MARITIME_CITY_ROWS.map((r) => r[0]));
  for (const slug of [...MARITIME_CITY_ROWS.map((r) => r[0]), ...COUNTRY_SLUGS]) {
    const r = RECORDS[slug];
    if (!r) continue;
    let own;
    if (citySlugs.has(slug)) {
      own = [r.intro, ...(r.highlights || []).map((h) => h.p), ...(r.port?.p || []), ...(r.facilities?.p || []), ...(r.facilities?.list || []), ...(r.context?.p || []), ...[].concat(r.jobs?.p || []), ...(r.jobs?.list || []), r.logistics, ...(r.faqs || []).map((f) => `${f.q} ${f.a}`)].join(' ');
      const ownWords = own.split(/\s+/).filter(Boolean).length;
      if (ownWords < 1200) problems.push(`${slug}: ${ownWords} words of port-specific copy (minimum 1,200)`);
      for (const n of r.nearby || []) if (!citySlugs.has(n)) problems.push(`${slug}: nearby "${n}" is not a port page`);
    } else {
      own = [r.intro, ...(r.highlights || []).map((h) => h.p), ...(r.sections || []).flatMap((x) => [].concat(x.p || [])), ...(r.faqs || []).map((f) => f.a)].join(' ');
    }
    for (const s of own.split(/(?<=[.?])\s+/).map((x) => x.trim().toLowerCase()).filter((x) => x.split(' ').length >= 10)) {
      if (seen.has(s) && seen.get(s) !== slug) problems.push(`${slug}: sentence repeated from ${seen.get(s)}: "${s.slice(0, 80)}"`);
      else seen.set(s, slug);
    }
  }
  if (problems.length) throw new Error(`\n❌ Maritime section guard (${problems.length}):\n  ${problems.slice(0, 40).join('\n  ')}`);
  cityWords = cityWords.sort((a, b) => a - b);
  maritimeSectionStats.cities = cityWords.length;
  maritimeSectionStats.minCityWords = cityWords[0] || 0;
  maritimeSectionStats.avgCityWords = Math.round(cityWords.reduce((a, b) => a + b, 0) / (cityWords.length || 1));
  console.log(`⚓ Maritime section 2026-11-10: ${MARITIME_SECTION.PAGES.length} pages (${cityWords.length} ports), city words min ${maritimeSectionStats.minCityWords} / avg ${maritimeSectionStats.avgCityWords}, guard PASS`);
}

export { ROOT as MARITIME_ROOT, esc };
