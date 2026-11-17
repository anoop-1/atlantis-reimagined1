// US MT, PT and UT inspection pages by industry and by job — 2026-11-17.
//
// Owner, 2026-11-16: "further refine our inspection services for all industries (MT, PT & UT) across all cities in
// USA, and scale it large with all segments"; 2026-11-17: "perform competitor analysis, to further refine, and
// improve ranking & position". Owner chose "Industry + job pages" (rewrite the 39 MT/PT/UT × industry pages for the
// US, add US industries and job pages, link them from the 228 city pages) and "build only, I'll review first".
// Evidence and competitor notes: scripts/build-us-industry-plan-2026-11.mjs.
//
// Plan: src/data/us-industry-ndt-2026-11/_pages.json; one record per page (validated by
// scripts/us-industry-validate.mjs). This module:
//   applyUsIndustryRoutes(routes)      title, description, canonical, indexable, body, Service + FAQPage +
//                                       BreadcrumbList JSON-LD; replaces the 2026-08-16 bodies, adds new pages.
//   usIndustryUpgrades()               the same <main> for the editorial pass (published page = React page).
//   usIndustryLinksForCity(slug, key)  "By industry and job" items for the US city pages (us-conventional).
//   applyUsIndustryHubRoute(route)     "UT/MT by industry and job" block on /ultrasonic-testing and
//                                       /magnetic-particle-testing (published pages).
//   assertUsIndustryClean(built)       build guard.
import { readFileSync } from 'node:fs';
import { PLAN, METHOD_SLUG, loadRecords, validateUsIndustry } from './us-industry-validate.mjs';

const SITE = 'https://atlantisndt.com';
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const METHODS = {
  ut: { label: 'Ultrasonic testing (UT)', service: 'ultrasonic testing', short: 'UT', pillar: '/ultrasonic-testing', pillarLabel: 'Ultrasonic inspection services', l1: '/ut-level-1-training', l2: '/ut-level-2-training', sim: '/practical-ndt/ultrasonic-testing-simulator' },
  mt: { label: 'Magnetic particle inspection (MT)', service: 'magnetic particle inspection', short: 'MT', pillar: '/magnetic-particle-testing', pillarLabel: 'Magnetic particle inspection services', l1: '/mt-level-1-training', l2: '/mt-level-2-training', sim: '/practical-ndt/magnetic-particle-simulator' },
  pt: { label: 'Liquid penetrant testing (PT)', service: 'liquid penetrant testing', short: 'PT', pillar: '/penetrant-testing', pillarLabel: 'Liquid penetrant testing services', l1: '/pt-level-1-training', l2: '/pt-level-2-training', sim: '/practical-ndt/penetrant-testing-simulator' },
};
// Industry training nationals (only pages that exist).
const INDUSTRY_TRAINING = {
  refining: '/oil-gas-ndt-training', petrochemical: '/oil-gas-ndt-training', lng: '/oil-gas-ndt-training', offshore: '/oil-gas-ndt-training',
  oilfield: '/oil-gas-ndt-training', pipeline: '/pipeline-ndt-training', marine: '/maritime-ndt-training', aviation: '/aviation-ndt-training',
  power: '/power-generation-ndt-training', wind: '/power-generation-ndt-training', mining: '/manufacturing-ndt-training',
  fabrication: '/manufacturing-ndt-training', automotive: '/manufacturing-ndt-training', steel: '/manufacturing-ndt-training',
  rail: '/manufacturing-ndt-training', 'food-pharma': '/manufacturing-ndt-training',
};
// The same job seen through each method (cross-links between job pages).
const JOB_FAMILIES = [
  ['/ultrasonic-weld-inspection', '/magnetic-particle-weld-inspection', '/penetrant-testing-welds'],
  ['/ultrasonic-testing-castings-forgings', '/magnetic-particle-inspection-castings-forgings', '/penetrant-testing-castings'],
];
const CITY_NAMES = Object.fromEntries(JSON.parse(readFileSync(new URL('../src/data/us-conventional-ndt-2026-11/_cities.json', import.meta.url), 'utf8')).cities.map((c) => [c.slug, c.st === 'DC' ? 'Washington, DC' : `${c.city}, ${c.st}`]));

let _recs = null;
const recs = () => (_recs ||= loadRecords(null));
const byPath = new Map(PLAN.map((p) => [p.path, p]));

/** Every path this module owns that has a record. */
export function usIndustryPaths() {
  const out = new Map();
  for (const p of PLAN) { const r = recs()[p.slug]; if (r) out.set(p.path, { plan: p, rec: r }); }
  return out;
}
const have = (path) => byPath.has(path) && !!recs()[byPath.get(path).slug];
const labelOf = (path) => { const p = byPath.get(path); const r = p && recs()[p.slug]; return r ? r.h1 : path; };

function quoteHref(plan) {
  const subject = `${METHODS[plan.method].short} inspection quote - ${plan.name} (US)`;
  return `/contact?service=inspection&amp;subject=${encodeURIComponent(subject)}`;
}

function relatedBlock(plan) {
  const m = METHODS[plan.method];
  const items = [];
  if (plan.kind === 'industry') {
    for (const s of plan.siblings) if (have(s)) items.push(`<li><a href="${s}">${esc(labelOf(s))}</a></li>`);
    for (const j of plan.jobs || []) if (have(j)) items.push(`<li><a href="${j}">${esc(labelOf(j))}</a></li>`);
  } else {
    const fam = JOB_FAMILIES.find((f) => f.includes(plan.path));
    if (fam) for (const j of fam) if (j !== plan.path && have(j)) items.push(`<li><a href="${j}">${esc(labelOf(j))}</a></li>`);
    for (const i of plan.industries.slice(0, 4)) if (have(i)) items.push(`<li><a href="${i}">${esc(labelOf(i))}</a></li>`);
    if (plan.owner) items.push(`<li><a href="${plan.owner}">${esc(plan.owner === '/weld-inspection' ? 'Weld inspection services (VT, MT, PT, UT)' : plan.owner === '/inspection/piping-circuit-inspection-cml' ? 'Piping circuit and CML inspection' : plan.owner === '/inspection/ndt-inspection-services' ? 'NDT inspection services' : m.pillarLabel)}</a></li>`);
  }
  if (plan.owner !== m.pillar) items.push(`<li><a href="${m.pillar}">${esc(m.pillarLabel)}</a></li>`);
  const cities = plan.cities.slice(0, 8).map((c) => `<a href="/${METHOD_SLUG[plan.method]}-${c}">${esc(CITY_NAMES[c] || c)}</a>`).join(' · ');
  const train = [`<a href="${m.l1}">${m.short} Level 1 training</a>`, `<a href="${m.l2}">${m.short} Level 2 training</a>`, `<a href="${m.sim}">${m.short} practice simulator</a>`];
  const nat = plan.kind === 'industry' && INDUSTRY_TRAINING[plan.industry];
  if (nat) train.push(`<a href="${nat}">NDT training for ${esc(plan.name.toLowerCase())}</a>`);
  return `<section data-usind-related="2026-11"><h2>Related ${esc(m.short)} inspection pages</h2><ul>${items.join('')}</ul>`
    + `<p>${esc(m.short)} inspection by US city: ${cities}.</p><p>Training your own technicians: ${train.join(' · ')}.</p></section>`;
}

function ctaBlock(plan) {
  const m = METHODS[plan.method];
  const what = plan.kind === 'industry' ? plan.name.toLowerCase() : plan.name.toLowerCase();
  return `<section data-usind-cta="2026-11"><h2>Request a ${esc(m.short)} inspection quote</h2>`
    + `<p>Tell us about the ${esc(what)} work: the components and material, the quantity or weld list, the code or specification, access and temperatures, and the site address in the United States. We reply within one business day with the scope, the procedure we would use and the next step.</p>`
    + `<p><a href="${quoteHref(plan)}">Request a ${esc(m.short)} inspection quote</a></p></section>`;
}

export function usIndustryMain({ plan, rec }) {
  const faq = (rec.faq || []).map((f) => `<h3>${esc(f.q)}</h3><p>${f.a}</p>`).join('');
  return `<h1>${esc(rec.h1)}</h1>${rec.html}<h2>Frequently asked questions</h2>${faq}${relatedBlock(plan)}${ctaBlock(plan)}`;
}

function schemaFor({ plan, rec }, path) {
  const url = SITE + path;
  const m = METHODS[plan.method];
  const out = [{
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: rec.h1, serviceType: m.service,
    description: rec.description, url,
    provider: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT' },
    areaServed: { '@type': 'Country', name: 'United States' },
    ...(plan.kind === 'industry' ? { audience: { '@type': 'BusinessAudience', audienceType: plan.name } } : {}),
  }];
  const qs = (rec.faq || []).filter((f) => f.q && f.a);
  if (qs.length >= 2) out.push({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: qs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') } })) });
  out.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Inspection', item: `${SITE}/inspection` },
    { '@type': 'ListItem', position: 3, name: m.pillarLabel, item: SITE + m.pillar },
    { '@type': 'ListItem', position: 4, name: rec.h1, item: url },
  ] });
  return out;
}

const header = (key) => `<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="${METHODS[key].pillar}">${METHODS[key].short}</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>`;

export const usIndustryStats = { updated: 0, added: 0 };

/** Route-level changes; runs after every noindex/prune/consolidation pass and before the write loop. */
export function applyUsIndustryRoutes(routes) {
  const map = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));
  for (const [path, entry] of usIndustryPaths()) {
    let r = map.get(path);
    if (!r) { r = { path }; routes.push(r); map.set(path, r); usIndustryStats.added++; } else usIndustryStats.updated++;
    r.title = entry.rec.title;
    r.description = entry.rec.description;
    r.canonical = SITE + path;
    r.bodyContent = `  ${header(entry.plan.method)}\n  <main>${usIndustryMain(entry)}</main>`;
    r.structuredData = schemaFor(entry, path);
    r.noindex = false; r.noindexFollow = false; r.prunedByDemand = false;
    r.publishedAt = r.publishedAt || '2026-11-17';
    r.usIndustry = entry.plan.kind;
  }
  return usIndustryStats;
}

/** Editorial upgrades: the published <main> is exactly what the route renders. */
export function usIndustryUpgrades() {
  const out = {};
  for (const [path, entry] of usIndustryPaths()) out[path] = { title: entry.rec.title, description: entry.rec.description, html: usIndustryMain(entry), replace: true };
  return out;
}

/** Industry and job pages to list on a US city page for one method (us-conventional relatedBlock). */
export function usIndustryLinksForCity(citySlug, key) {
  const out = [];
  for (const p of PLAN) {
    if (p.method !== key || !recs()[p.slug]) continue;
    if (p.kind === 'industry' && p.cities.includes(citySlug)) out.push({ path: p.path, label: p.name, kind: 'industry' });
  }
  for (const p of PLAN) if (p.kind === 'job' && p.method === key && recs()[p.slug]) out.push({ path: p.path, label: p.name, kind: 'job' });
  return out;
}

// ── National method pages: "by industry and job" directory (both are published pages) ─────────────
const HUB_KEYS = { '/ultrasonic-testing': 'ut', '/magnetic-particle-testing': 'mt' };
export function applyUsIndustryHubRoute(route) {
  if (!route || typeof route.bodyContent !== 'string' || !HUB_KEYS[route.path]) return route;
  const key = HUB_KEYS[route.path];
  const m = METHODS[key];
  const ind = PLAN.filter((p) => p.method === key && p.kind === 'industry' && recs()[p.slug]);
  const jobs = PLAN.filter((p) => p.method === key && p.kind === 'job' && recs()[p.slug]);
  if (!ind.length && !jobs.length) return route;
  const li = (p) => `<li><a href="${p.path}">${esc(recs()[p.slug].h1)}</a></li>`;
  const block = `<section data-keep-on-rewrite data-usind-hub="2026-11"><h2>${esc(m.short)} inspection by industry and job in the United States</h2>`
    + `<p>Each page covers the components, the codes and regulators that drive the examination, the technique, what the report contains and what to send for a quote.</p>`
    + (jobs.length ? `<h3>By job</h3><ul>${jobs.map(li).join('')}</ul>` : '')
    + (ind.length ? `<h3>By industry</h3><ul>${ind.map(li).join('')}</ul>` : '') + `</section>`;
  let body = route.bodyContent.replace(/<section data-keep-on-rewrite data-usind-hub="2026-11">[\s\S]*?<\/section>/g, '');
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + block + body.slice(i) : body + block;
  return { ...route, bodyContent: body };
}

// ── US inspection hubs (/inspection-services-{state|city}) — 2026-11-17 cycle (CLAUDE.md §78) ──────────
// GSC 28d to 2026-11-14: the 25 hubs went from 202 to 4,461 impressions (avg position 37.6) on queries such as
// "magnetic particle inspection indiana" (p19), "welding inspections in new jersey" (p41.6), "structural welding
// inspections ny" (p51.5), "ndt companies near me" (Illinois p47) and "maritime ndt services" (coastal states,
// p55-89). Each hub now lists the MT, PT and UT industry pages whose city list includes the hub's member cities,
// the weld and structural jobs, and (coastal states) the marine pages. Member cities come from the hub field of
// src/data/us-conventional-ndt-2026-11/_cities.json.
const MSHORT = { ut: 'UT', mt: 'MT', pt: 'PT' };
const COASTAL = new Set(['/inspection-services-california', '/inspection-services-florida', '/inspection-services-washington',
  '/inspection-services-louisiana', '/inspection-services-alaska', '/inspection-services-mississippi', '/inspection-services-texas',
  '/inspection-services-houston', '/inspection-services-alabama', '/inspection-services-new-jersey', '/inspection-services-new-york',
  '/inspection-services-massachusetts', '/inspection-services-pennsylvania']);
let HUB_CITIES = null;
function hubCities() {
  if (HUB_CITIES) return HUB_CITIES;
  const raw = JSON.parse(readFileSync(new URL('../src/data/us-conventional-ndt-2026-11/_cities.json', import.meta.url), 'utf8'));
  HUB_CITIES = {};
  for (const c of (Array.isArray(raw) ? raw : raw.cities)) {
    if (!c.hub) continue;
    (HUB_CITIES[c.hub] ||= { cities: new Set(), label: '' }).cities.add(c.slug);
  }
  return HUB_CITIES;
}
const hubPlaceLabel = (path) => {
  const slug = path.replace('/inspection-services-', '');
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

export function usIndustryHubBlock(path) {
  const hub = hubCities()[path];
  if (!hub) return '';
  const place = hubPlaceLabel(path);
  const byInd = new Map();
  for (const p of PLAN) {
    if (p.kind !== 'industry' || !recs()[p.slug]) continue;
    if (!(p.cities || []).some((c) => hub.cities.has(c))) continue;
    if (!byInd.has(p.industry)) byInd.set(p.industry, { name: p.name, pages: [] });
    byInd.get(p.industry).pages.push(p);
  }
  if (COASTAL.has(path)) for (const p of PLAN) if (p.kind === 'industry' && p.industry === 'marine' && recs()[p.slug]) {
    if (!byInd.has('marine')) byInd.set('marine', { name: p.name, pages: [] });
    if (!byInd.get('marine').pages.includes(p)) byInd.get('marine').pages.push(p);
  }
  const order = ['ut', 'mt', 'pt'];
  const rows = [...byInd.values()].sort((a, b) => b.pages.length - a.pages.length || a.name.localeCompare(b.name)).slice(0, 10)
    .map((g) => `<li>${esc(g.name)}: ${g.pages.sort((a, b) => order.indexOf(a.method) - order.indexOf(b.method))
      .map((p) => `<a href="${p.path}">${MSHORT[p.method]}</a>`).join(' · ')}</li>`);
  const jobs = PLAN.filter((p) => p.kind === 'job' && recs()[p.slug]);
  const weld = jobs.filter((p) => /weld|structural-steel/.test(p.slug));
  const other = jobs.filter((p) => !weld.includes(p));
  const li = (p) => `<li><a href="${p.path}">${esc(p.name)}</a></li>`;
  if (!rows.length && !jobs.length) return '';
  return `<section data-keep-on-rewrite data-usind-hub-state="2026-11"><h2>MT, PT and UT inspection in ${esc(place)} by industry and job</h2>`
    + `<p>Atlantis mobilizes ASNT SNT-TC-1A-qualified technicians to sites in ${esc(place)} for magnetic particle, liquid penetrant and ultrasonic inspection. These pages cover the components, codes, technique, report contents and what to send for a quote.</p>`
    + (weld.length ? `<h3>Weld and structural steel inspection</h3><ul>${weld.map(li).join('')}</ul>` : '')
    + (rows.length ? `<h3>By industry</h3><ul>${rows.join('')}</ul>` : '')
    + (other.length ? `<h3>Other jobs</h3><ul>${other.map(li).join('')}</ul>` : '')
    + `</section>`;
}

/** Adds the block to a US inspection hub route (crawler). */
export function applyUsIndustryStateHubRoute(route) {
  if (!route || typeof route.bodyContent !== 'string' || !/^\/inspection-services-[a-z-]+$/.test(route.path)) return route;
  const block = usIndustryHubBlock(route.path);
  if (!block) return route;
  let body = route.bodyContent.replace(/<section data-keep-on-rewrite data-usind-hub-state="2026-11">[\s\S]*?<\/section>/g, '');
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + block + body.slice(i) : body + block;
  return { ...route, bodyContent: body };
}

/** Build guard: every record valid, every planned page present and built, every link target built. */
export function assertUsIndustryClean(builtPaths) {
  const built = builtPaths instanceof Set ? builtPaths : new Set(builtPaths || []);
  const { errors } = validateUsIndustry(null, { requireAll: process.env.USIND_ALLOW_PARTIAL !== '1', targets: built.size ? built : null });
  for (const path of usIndustryPaths().keys()) if (built.size && !built.has(path)) errors.push(`${path}: not built`);
  if (errors.length) throw new Error(`us-industry-ndt: ${errors.length} problem(s):\n  ${errors.slice(0, 40).join('\n  ')}`);
  return true;
}
