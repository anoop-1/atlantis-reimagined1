// API inspection guide library — 2026-10-25 (CLAUDE.md §64).
//
// Evidence (GSC Page indexing, 2026-10-25): 23 of the 50 /api-inspection/* guides sit in
// "Discovered – currently not indexed" — Google knows the URLs but has not spent crawl on them.
// They are some of the site's strongest US/Canada pages (API 510/570/653, OSHA PSM, SPCC, ABSA),
// 2,700–3,000 words each, yet each had only 2–7 internal links and no hub: the guides linked to
// unrelated "related" pages rather than to each other.
//
// This module gives them a crawlable home and a topical link graph, in one source for both layers:
//   - /api-inspection: a hub listing every guide by topic (prerender route; React shows the
//     prerendered page through PrerenderedFallback, like the method-training pages).
//   - On every guide: a "More API inspection guides" block with siblings from the same topic.
//   - On the API owner pages (API 510/570/653 certification, /inspection-services, the tank
//     service page and the API 653 guide): a short library block pointing at the hub.
// Data: src/data/geo-hubs.json (family "apiguide"), the same index React's GeoHubRoute uses.
// Blocks carry data-keep-on-rewrite so the editorial main rewrites keep them (§62.3 trap).
//
// Rules: Atlantis does the NDE and data review; the owner's Authorized Inspector stays inspector
// of record. RBI and fitness-for-service appear only as topics, never as an Atlantis service.
import { readFileSync } from 'fs';

const INDEX = JSON.parse(readFileSync(new URL('../src/data/geo-hubs.json', import.meta.url), 'utf8'));
export const API_GUIDE_HUB_PATH = '/api-inspection';
const GUIDES = INDEX.filter((h) => h.family === 'apiguide').map((h) => ({ path: h.path, name: h.name, title: h.title }));

const GROUPS = [
  { key: 'vessels', h: 'Pressure vessels (API 510)', intro: 'Intervals, repairs, pressure tests, inspection plans and who is allowed to inspect and sign for pressure vessels in service.',
    test: (s) => /^api-510-(?!570)|^paut-corrosion-mapping-pressure-vessels|^pressure-vessel-inspection-plan|^asme-authorized-inspector|^who-certifies-pressure-vessel|^owner-user-inspection|^absa-inspector/.test(s) },
  { key: 'piping', h: 'Process piping (API 570)', intro: 'Piping classes and intervals, deadlegs, injection points, small-bore and buried piping, and where plant piping ends and pipeline codes begin.',
    test: (s) => /^api-570-|^cui-in-api-570|^erosion-corrosion-piping|^profile-radiography-piping|^asme-b31q/.test(s) },
  { key: 'tanks', h: 'Storage tanks (API 653, STI SP001 and SPCC)', intro: 'Field-erected and shop-built tanks: checklists, floor pitting, floating roofs, release prevention barriers and the SPCC rule.',
    test: (s) => /^api-650-vs-api-653|^api-653-|^shop-built-tank|^sti-sp001|^spcc-/.test(s) },
  { key: 'damage', h: 'Damage mechanisms and NDE method choice', intro: 'How each damage mechanism is found, which NDE method answers it, and how corrosion rates turn into intervals.',
    test: (s) => /^amine-|^chloride-|^corrosion-rate-|^cui-monitoring|^nde-method-selection|^pulsed-eddy-current|^tofd-in-service|^wfmt-acfm|^time-based-vs-risk-based/.test(s) },
  { key: 'regulation', h: 'Regulation, certification and buying inspection', intro: 'OSHA PSM and EPA RMP, RAGAGEP, verifying certificates, contractor RFPs, source inspection and the Canadian provinces.',
    test: () => true },
];

const slug = (p) => p.replace(/^\/api-inspection\//, '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const groupOf = (g) => GROUPS.find((x) => x.test(slug(g.path)));
const byGroup = () => {
  const m = new Map(GROUPS.map((g) => [g.key, []]));
  for (const g of GUIDES) m.get(groupOf(g).key).push(g);
  return m;
};

const NAV = '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/inspection">Inspection</a><a href="/erp">ERP</a><a href="/practical-ndt">Practical NDT</a><a href="/contact">Contact</a></nav></header>';

/** Hub page body: answer first, then every guide grouped by topic. */
export function apiGuideHubHtml() {
  const groups = byGroup();
  const sections = GROUPS.map((g) => {
    const items = groups.get(g.key);
    if (!items.length) return '';
    return `<h2>${esc(g.h)}</h2>
<p>${esc(g.intro)}</p>
<ul>${items.map((i) => `<li><a href="${i.path}">${esc(i.title || i.name)}</a></li>`).join('')}</ul>`;
  }).join('\n');
  return `${NAV}<main>
<section aria-label="API inspection guides">
<h1>API 510, 570 and 653 Inspection Guides for Owner-Users and Inspectors</h1>
<p><strong>Short answer:</strong> this library holds ${GUIDES.length} practical guides to in-service inspection of pressure vessels, process piping and storage tanks in the US and Canada. Each one answers a question inspection managers, owner-users and inspectors actually ask: how an interval is set, who may sign a repair, what an SPCC inspection must cover, which NDE method finds a given damage mechanism, and how OSHA PSM and EPA RMP treat the API codes.</p>
<p>The guides are written from the NDE side of the work. Atlantis NDT carries out the thickness surveys and the NDE and reviews the data for owner-user programmes; your Authorized Inspector remains the inspector of record and signs the inspection. Where a guide touches risk-based inspection or fitness-for-service, it explains the concept and who owns it, because those are engineering decisions for the owner's engineer.</p>
${sections}
<h2>Related services and training</h2>
<p><a href="/inspection-services">NDE support for API 510, 570 and 653 programmes</a> · <a href="/inspection/aboveground-storage-tank-inspection">API 653 tank inspection services</a> · <a href="/inspection/ndt-inspection-services">all NDT inspection services</a> · <a href="/api-510-certification">API 510 certification</a> · <a href="/api-570-certification">API 570 certification</a> · <a href="/api-653-certification">API 653 certification</a> · <a href="/contact?service=inspection&amp;subject=API%20inspection%20programme%20NDE%20support">ask about NDE support for your programme</a>.</p>
</section>
</main>`;
}

export function apiGuideHubRoute() {
  return {
    path: API_GUIDE_HUB_PATH,
    title: 'API 510, 570 and 653 Inspection Guides (US and Canada)',
    description: `${GUIDES.length} practical guides to in-service inspection: API 510 vessels, API 570 piping, API 653 tanks, SPCC, OSHA PSM and NDE method choice.`,
    canonical: `https://atlantisndt.com${API_GUIDE_HUB_PATH}`,
    bodyContent: apiGuideHubHtml(),
  };
}

const OWNERS = new Set(['/inspection-services', '/api-510-certification', '/api-570-certification', '/api-653-certification', '/inspection/aboveground-storage-tank-inspection', '/blog/api-653-tank-inspection-guide']);
const FEATURED = ['pressure-vessel-inspection-plan-contents', 'corrosion-rate-calculation-long-term-short-term', 'api-570-class-1-hydrocarbon-inspection-intervals', 'api-653-tank-inspection-checklist', 'psm-ragagep-api-510-570-653', 'spcc-who-can-inspect-tanks'];
const BLOCK_RE = /<section data-guide-library="2026-10"[\s\S]*?<\/section>/g;
export const apiGuideStats = { guides: 0, owners: 0 };

function blockForGuide(path) {
  const me = GUIDES.find((g) => g.path === path);
  const grp = groupOf(me);
  const sibs = byGroup().get(grp.key).filter((g) => g.path !== path);
  // A stable, page-specific window of siblings (not the same first eight everywhere).
  const i = Math.max(0, byGroup().get(grp.key).findIndex((g) => g.path === path));
  const pick = [...sibs.slice(i), ...sibs.slice(0, i)].slice(0, 8);
  return `<section data-guide-library="2026-10" data-keep-on-rewrite="1" class="container mx-auto px-6 py-8 max-w-4xl"><div class="prose max-w-none"><h2>More API inspection guides: ${esc(grp.h)}</h2><ul>${pick.map((g) => `<li><a href="${g.path}">${esc(g.title || g.name)}</a></li>`).join('')}</ul><p><a href="${API_GUIDE_HUB_PATH}">All ${GUIDES.length} API 510, 570 and 653 inspection guides</a> · <a href="/inspection-services">NDE support for API programmes</a></p></div></section>`;
}

function blockForOwner() {
  const items = FEATURED.map((s) => GUIDES.find((g) => slug(g.path) === s)).filter(Boolean);
  return `<section data-guide-library="2026-10" data-keep-on-rewrite="1" class="container mx-auto px-6 py-8 max-w-4xl"><div class="prose max-w-none"><h2>API inspection guide library</h2><p>Practical answers for owner-users and inspectors, from the NDE side of API 510, 570 and 653 work:</p><ul>${items.map((g) => `<li><a href="${g.path}">${esc(g.title || g.name)}</a></li>`).join('')}</ul><p><a href="${API_GUIDE_HUB_PATH}">Browse all ${GUIDES.length} API inspection guides</a></p></div></section>`;
}

export function applyApiGuideLibrary(route) {
  if (!route || typeof route.bodyContent !== 'string') return route;
  const p = (route.path || '').replace(/\/+$/, '') || '/';
  let html = null;
  if (GUIDES.some((g) => g.path === p)) { html = blockForGuide(p); apiGuideStats.guides++; }
  else if (OWNERS.has(p)) { html = blockForOwner(); apiGuideStats.owners++; }
  if (!html) return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
  return { ...route, bodyContent: body };
}

/** Build guard: every guide grouped, every link target built, no offering of RBI/FFS, no prices. */
export function assertApiGuideLibraryClean(BUILT_PATHS) {
  const errs = [];
  if (GUIDES.length < 40) errs.push(`only ${GUIDES.length} apiguide records found`);
  const hub = apiGuideHubHtml();
  for (const m of hub.matchAll(/href="(\/[^"#?]*)"/g)) if (m[1] !== '/contact' && BUILT_PATHS && !BUILT_PATHS.has(m[1].replace(/\/+$/, '') || '/')) errs.push(`hub links to unbuilt ${m[1]}`);
  for (const s of FEATURED) if (!GUIDES.some((g) => slug(g.path) === s)) errs.push(`featured guide missing: ${s}`);
  if (/[$£€₹]\s?\d|\bprice|\bfee\b/i.test(hub.replace(/<[^>]+>/g, ' '))) errs.push('price wording in hub');
  if (/Atlantis[^.]{0,80}\b(offers|provides|performs)\b[^.]{0,40}\b(RBI|risk-based inspection|fitness-for-service|API 579)\b/i.test(hub)) errs.push('hub offers RBI/FFS');
  if (errs.length) throw new Error('api guide library: ' + errs.join('; '));
  console.log(`📚 API guide library: hub ${API_GUIDE_HUB_PATH} with ${GUIDES.length} guides in ${GROUPS.length} topics; blocks on ${apiGuideStats.guides} guides + ${apiGuideStats.owners} owner pages`);
}
