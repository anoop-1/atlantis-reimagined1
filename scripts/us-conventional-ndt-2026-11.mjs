// US conventional NDT city pages: magnetic particle (MT), liquid penetrant (PT) and ultrasonic (UT)
// inspection, plus the reworded US radiography (RT) city pages — 2026-11-14.
//
// Owner, 2026-11-14: "Audit for SEO … focus on Conventional NDT inspection services (MT, PT & UT in USA,
// not RT - we cannot perform it due to regulatory requirements), and expand more cities, track cities
// with potential but receiving less traffic and low page ranking & CTR, and upgrade those to higher
// level quality content with 2000+ … do not add advanced NDT methods including PAUT, LRUT or anything".
// RT city pages: owner chose "reword, keep URLs" (no RT performed in the US; UT alternative + Level III
// radiograph review).
//
// Evidence (GSC, USA, 90 days to 2026-11-12): the 36 US cities had UT/MT/PT pages of 400–1,800 words,
// many MT/PT ones noindexed; best UT pages 100–175 impressions at p30–55, zero clicks. Local demand
// exists ("magnetic particle inspection indiana", "…services michigan", "ndt inspections in phoenix",
// "ndt services in huntsville al") but lands on state hubs. GA4 (US, 28 days): inspection landings
// 32 sessions → 2 key events; the pages had no enquiry form.
//
// One record per city: src/data/us-conventional-ndt-2026-11/{slug}.json (writers' copy, validated by
// scripts/us-conventional-validate.mjs). This module:
//   applyUsConventionalRoutes(routes)   route-level: title, description, canonical, indexable, body,
//                                        Service + FAQPage JSON-LD; adds routes for the new cities.
//   usConventionalUpgrades()            the same <main> for the editorial pass (scripts/editorial-
//                                        upgrades.mjs), so the published page and React show it.
//   applyUsConventionalHubRoute(route)  "MT, PT and UT by city" blocks on state hubs and the UT/MT
//                                        service pages, and the US radiography note on /radiographic-testing.
//   assertUsConventionalClean(built)    build guard.
import { CITIES, METHOD_SLUGS, loadRecords, validateUsConventional } from './us-conventional-validate.mjs';
import { US_NO_RT_PATHS } from '../src/data/us-conventional-ndt-2026-11/rt-paths.mjs';

const SITE = 'https://atlantisndt.com';
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

export const METHODS = {
  ut: { slug: 'ultrasonic-testing', label: 'Ultrasonic testing (UT)', service: 'ultrasonic testing', short: 'UT', pillar: '/ultrasonic-testing', pillarLabel: 'Ultrasonic inspection services', l1: '/ut-level-1-training', l2: '/ut-level-2-training', course: '/ultrasonic-testing-training', sim: '/practical-ndt/ultrasonic-testing-simulator' },
  mt: { slug: 'magnetic-particle-testing', label: 'Magnetic particle inspection (MT)', service: 'magnetic particle inspection', short: 'MT', pillar: '/magnetic-particle-testing', pillarLabel: 'Magnetic particle inspection services', l1: '/mt-level-1-training', l2: '/mt-level-2-training', course: '/magnetic-particle-testing-training', sim: null },
  pt: { slug: 'penetrant-testing', label: 'Liquid penetrant testing (PT)', service: 'liquid penetrant testing', short: 'PT', pillar: '/penetrant-testing', pillarLabel: 'Liquid penetrant testing services', l1: '/pt-level-1-training', l2: '/pt-level-2-training', course: '/penetrant-testing-training', sim: '/practical-ndt/penetrant-testing-simulator' },
  rt: { slug: 'radiographic-testing', label: 'Radiographic testing (RT)', short: 'RT', course: '/radiographic-testing-level-2-course' },
};
const KEYS = ['ut', 'mt', 'pt'];
const cityLabel = (c) => (c.st === 'DC' ? 'Washington, DC' : `${c.city}, ${c.st}`);
const cityName = (c) => (c.st === 'DC' ? 'Washington, DC' : c.city);
const pathOf = (key, c) => `/${METHODS[key].slug}-${c.slug}`;

let _records = null;
const records = () => (_records ||= loadRecords(null));

/** Every path this module owns (records present), method pages and RT pages. */
export function usConventionalPaths() {
  const out = new Map();
  const recs = records();
  for (const c of CITIES) {
    const r = recs[c.slug];
    if (!r) continue;
    for (const k of [...KEYS, ...(c.rt ? ['rt'] : [])]) if (r.pages?.[k]) out.set(pathOf(k, c), { city: c, key: k, page: r.pages[k] });
  }
  return out;
}

function quoteLink(key, c, text) {
  const subject = `${METHODS[key].short} inspection quote - ${cityLabel(c)}`;
  return `<a href="/contact?service=inspection&amp;subject=${encodeURIComponent(subject)}">${esc(text)}</a>`;
}

function relatedBlock(c, key) {
  const items = [];
  for (const k of KEYS) if (k !== key) items.push(`<li><a href="${pathOf(k, c)}">${esc(METHODS[k].label)} in ${esc(cityName(c))}</a></li>`);
  if (key !== 'rt') items.push(`<li><a href="${METHODS[key].pillar}">${esc(METHODS[key].pillarLabel)}</a></li>`);
  if (c.hub) items.push(`<li><a href="${c.hub}">NDT inspection services in ${esc(c.hub.includes('-houston') || c.hub.includes('-phoenix') || c.hub.includes('-huntsville') ? c.city : c.state)}</a></li>`);
  const m = METHODS[key === 'rt' ? 'ut' : key];
  const train = [`<a href="${m.l1}">${m.short} Level 1 training</a>`, `<a href="${m.l2}">${m.short} Level 2 training</a>`];
  if (c.training) train.push(`<a href="${c.training}">NDT training for ${esc(cityName(c))} technicians</a>`);
  return `<section data-usconv-related="2026-11"><h2>Inspection and training around ${esc(cityName(c))}</h2><ul>${items.join('')}</ul><p>Training your own technicians: ${train.join(' · ')}.</p></section>`;
}

function ctaBlock(c, key) {
  if (key === 'rt') {
    return `<section data-usconv-cta="2026-11"><h2>Need a weld examined in ${esc(cityName(c))}?</h2><p>Send the drawing or weld list, the material and thickness, and the code you work to. We will tell you whether ultrasonic testing can be used in place of radiography for that work, or quote a Level III review of radiographs you already have. ${quoteLink('ut', c, `Ask about UT or a radiograph review for ${cityName(c)}`)}.</p></section>`;
  }
  return `<section data-usconv-cta="2026-11"><h2>Request an ${esc(METHODS[key].short)} inspection quote for ${esc(cityName(c))}</h2><p>Send the component and material, the quantity, the code or specification and the site address. We reply within one business day with the scope, the mobilization plan and a quote. ${quoteLink(key, c, `Request a quote for ${METHODS[key].service} in ${cityName(c)}`)}.</p></section>`;
}

export function usConventionalMain({ city: c, key, page: pg }) {
  const faq = (pg.faq || []).map((f) => `<h3>${esc(f.q)}</h3><p>${f.a}</p>`).join('');
  return `<h1>${esc(pg.h1)}</h1>${pg.html}<h2>Frequently asked questions</h2>${faq}${relatedBlock(c, key)}${ctaBlock(c, key)}`;
}

function schemaFor({ city: c, key, page: pg }, path) {
  const url = SITE + path;
  const out = [];
  if (key !== 'rt') {
    out.push({
      '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: pg.h1, serviceType: METHODS[key].service,
      description: pg.description, url,
      provider: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT' },
      areaServed: { '@type': 'City', name: c.st === 'DC' ? 'Washington' : c.city, containedInPlace: { '@type': 'State', name: c.state } },
    });
  }
  const qs = (pg.faq || []).filter((f) => f.q && f.a);
  if (qs.length >= 2) out.push({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: qs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') } })) });
  return out;
}

const header = (key) => `<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="${key === 'rt' ? '/ultrasonic-testing' : METHODS[key].pillar}">${key === 'rt' ? 'UT' : METHODS[key].short}</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>`;

export const usConventionalStats = { updated: 0, added: 0, rt: 0 };

/** Route-level changes; runs after every noindex/prune/consolidation pass and before the write loop. */
export function applyUsConventionalRoutes(routes) {
  const byPath = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));
  for (const [path, entry] of usConventionalPaths()) {
    const main = usConventionalMain(entry);
    let r = byPath.get(path);
    if (!r) { r = { path }; routes.push(r); byPath.set(path, r); usConventionalStats.added++; } else usConventionalStats.updated++;
    if (entry.key === 'rt') usConventionalStats.rt++;
    r.title = entry.page.title;
    r.description = entry.page.description;
    r.canonical = SITE + path;
    r.bodyContent = `  ${header(entry.key)}\n  <main>${main}</main>`;
    r.structuredData = schemaFor(entry, path);
    if (entry.key !== 'rt') { r.noindex = false; r.noindexFollow = false; r.prunedByDemand = false; }
    r.publishedAt = r.publishedAt || '2026-11-14';
    r.usConventional = entry.key;
  }
  return usConventionalStats;
}

/** Editorial upgrades: the published <main> is exactly what the route renders. */
export function usConventionalUpgrades() {
  const out = {};
  for (const [path, entry] of usConventionalPaths()) out[path] = { title: entry.page.title, description: entry.page.description, html: usConventionalMain(entry), replace: true };
  return out;
}

// ── Hubs: city directory on state hubs + UT/MT service pages; US radiography note ────────────────
const HUB_RE = /^\/inspection-services-[a-z-]+$/;
function directoryHtml(cities, key, heading) {
  const byState = new Map();
  for (const c of cities) { if (!byState.has(c.state)) byState.set(c.state, []); byState.get(c.state).push(c); }
  const rows = [...byState.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([st, cs]) => `<li><strong>${esc(st)}:</strong> ${cs.map((c) => `<a href="${pathOf(key, c)}">${esc(cityName(c))}</a>`).join(' · ')}</li>`).join('');
  return `<section data-keep-on-rewrite data-usconv-directory="2026-11"><h2>${esc(heading)}</h2><p>City pages cover the local industries, the codes the work is judged against, the technique and how a job is planned there. Atlantis does not perform radiography in the United States; where a code allows it, ultrasonic testing is used for volumetric weld examination.</p><ul>${rows}</ul></section>`;
}
const RT_NOTE = `<section data-keep-on-rewrite data-usconv-rt-note="2026-11"><h2>Radiographic testing in the United States</h2><p>Atlantis does not perform field radiography in the United States: industrial radiography there is a licensed activity under NRC rules (10 CFR Part 34) or the equivalent rules of Agreement States, and it is not a service we offer in the US. For US work we offer <a href="/ultrasonic-testing">ultrasonic testing</a> as the volumetric alternative where the construction code and the owner allow it, and ASNT Level III review of radiographs and RT procedures produced by a licensed contractor. <a href="/contact?service=inspection&amp;subject=UT%20in%20place%20of%20RT%20-%20US">Ask about UT in place of radiography</a>.</p></section>`;

export function applyUsConventionalHubRoute(route) {
  if (!route || typeof route.bodyContent !== 'string' || !route.path) return route;
  const recs = records();
  const have = CITIES.filter((c) => recs[c.slug]);
  let block = '';
  if (HUB_RE.test(route.path)) {
    const cs = have.filter((c) => c.hub === route.path);
    if (cs.length) {
      const place = route.path.replace('/inspection-services-', '').split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
      const rows = cs.map((c) => `<li><strong>${esc(cityName(c))}:</strong> ${KEYS.map((k) => `<a href="${pathOf(k, c)}">${esc(METHODS[k].label.replace(/ \(.*\)/, ''))} in ${esc(cityName(c))}</a>`).join(' · ')}</li>`).join('');
      block = `<section data-keep-on-rewrite data-usconv-hub="2026-11"><h2>MT, PT and UT inspection by city in ${esc(place)}</h2><p>Magnetic particle, liquid penetrant and ultrasonic inspection pages for the cities we cover in ${esc(place)}: local industries, governing codes, technique and job planning. Technicians are mobilized to your site; Atlantis does not perform radiography in the United States.</p><ul>${rows}</ul></section>`;
    }
  } else if (route.path === '/ultrasonic-testing') block = directoryHtml(have, 'ut', 'Ultrasonic testing by US city');
  else if (route.path === '/magnetic-particle-testing') block = directoryHtml(have, 'mt', 'Magnetic particle inspection by US city');
  else if (route.path === '/radiographic-testing') block = RT_NOTE;
  if (!block) return route;
  let body = route.bodyContent.replace(/<section data-keep-on-rewrite data-usconv-(hub|directory|rt-note)="2026-11">[\s\S]*?<\/section>/g, '');
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + block + body.slice(i) : body + block;
  return { ...route, bodyContent: body };
}

/** Build guard: every record valid, every page and every link target built, all cities present. */
export function assertUsConventionalClean(builtPaths) {
  const built = builtPaths instanceof Set ? builtPaths : new Set(builtPaths || []);
  const { errors } = validateUsConventional(null, { requireAll: process.env.USCONV_ALLOW_PARTIAL !== '1', targets: built.size ? built : null });
  for (const path of usConventionalPaths().keys()) if (built.size && !built.has(path)) errors.push(`${path}: not built`);
  const rtWant = CITIES.filter((c) => c.rt).map((c) => `/radiographic-testing-${c.slug}`).sort().join(',');
  if ([...US_NO_RT_PATHS].sort().join(',') !== rtWant) errors.push('src/data/us-conventional-ndt-2026-11/rt-paths.mjs is out of date with _cities.json (regenerate it)');
  if (errors.length) throw new Error(`us-conventional-ndt: ${errors.length} problem(s):\n  ${errors.slice(0, 40).join('\n  ')}`);
  return true;
}

export { CITIES as US_CONVENTIONAL_CITIES, METHOD_SLUGS };
