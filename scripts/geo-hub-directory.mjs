// Crawler-layer geo hub directory ("Find {Family} by state / province /
// country") injected into the section hubs (/training, /consulting,
// /inspection-services, ...). Without inbound links the geo hubs would be
// orphans that Google finds only via the sitemap. The React layer renders the
// same data in src/components/GeoHubDirectory.tsx (two-layer rule) — keep the
// heading and intro text identical in both.
import { readFileSync, existsSync } from 'fs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Intro copy for the API families (keep identical in GeoHubDirectory.tsx).
export const GEO_API_INTRO = 'Atlantis performs the NDE on API-governed tanks, vessels and piping and hands the data to your own Authorized Inspector, who stays inspector of record. Each page covers the regulators, industrial base and the methods the code calls for.';
export const GEO_GUIDE_INTRO = 'Plain answers to the code questions asset owners ask before scoping an API 510, 570 or 653 inspection: intervals, methods, data requirements and what the Authorized Inspector needs from the NDE contractor.';

// family -> section hub that hosts its directory + display label (+ optional
// heading / intro / flat list). Keep in step with src/components/GeoHubDirectory.tsx.
export const GEO_HUB_HOSTS = {
  training: { hub: '/training', label: 'NDT Training' },
  consulting: { hub: '/consulting', label: 'NDT Level III Consulting' },
  inspection: { hub: '/inspection-services', label: 'NDT Inspection Services' },
  erp: { hub: '/erp', label: 'NDT ERP' },
  practical: { hub: '/practical-ndt', label: 'Practical NDT' },
  // API inspection programme 2026-10-04: three state/province families and the
  // code-question guides, all hosted on /inspection-services.
  api653: { hub: '/inspection-services', label: 'API 653 tank inspection support', heading: 'API 653 storage tank inspection support by state and province', intro: GEO_API_INTRO },
  api510: { hub: '/inspection-services', label: 'API 510 pressure vessel inspection support', heading: 'API 510 pressure vessel inspection support by state and province', intro: GEO_API_INTRO },
  api570: { hub: '/inspection-services', label: 'API 570 piping inspection support', heading: 'API 570 piping inspection support by state and province', intro: GEO_API_INTRO },
  apiguide: { hub: '/inspection-services', label: 'API inspection guide', heading: 'API 510, 570 and 653 inspection guides', intro: GEO_GUIDE_INTRO, flat: true },
};

const COUNTRY_NAMES = { US: 'United States', USA: 'United States', CA: 'Canada', UK: 'United Kingdom', GB: 'United Kingdom', AU: 'Australia', NZ: 'New Zealand' };
export const countryLabel = (c) => COUNTRY_NAMES[String(c || '').toUpperCase()] || c || 'Other';

/** Groups one family's hubs by country (US first, then CA, then A-Z). */
export function groupGeoHubs(index, family) {
  const groups = new Map();
  for (const h of index.filter((x) => x.family === family)) {
    const k = countryLabel(h.country);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(h);
  }
  const order = (k) => (k === 'United States' ? 0 : k === 'Canada' ? 1 : 2);
  return [...groups.entries()]
    .sort((a, b) => order(a[0]) - order(b[0]) || a[0].localeCompare(b[0]))
    .map(([country, hubs]) => ({ country, hubs: hubs.sort((a, b) => a.name.localeCompare(b.name)) }));
}

export const GEO_HUB_INTRO = 'Each page covers the local industries, the regulators and codes that apply there, the cities we support and how Atlantis NDT works with employers in that region.';

export function geoHubDirectoryHtml(index, family) {
  const host = GEO_HUB_HOSTS[family];
  const groups = groupGeoHubs(index, family);
  if (!host || !groups.length) return '';
  const heading = host.heading || `Find ${host.label} by state, province or country`;
  const intro = host.intro || GEO_HUB_INTRO;
  if (host.flat) {
    const all = groups.flatMap((g) => g.hubs).sort((a, b) => a.name.localeCompare(b.name));
    return `<section class="geo-hub-directory" data-geo-family="${family}"><h2>${esc(heading)}</h2><p>${esc(intro)}</p>` +
      `<ul>${all.map((h) => `<li><a href="${h.path}">${esc(h.name)}</a></li>`).join('')}</ul></section>`;
  }
  const parts = groups.map((g) => {
    const head = groups.length > 1 || g.country !== 'United States' ? `<h3>${esc(g.country)}</h3>` : '';
    return `${head}<ul>${g.hubs.map((h) => `<li><a href="${h.path}">${esc(host.label)} in ${esc(h.name)}</a></li>`).join('')}</ul>`;
  });
  return `<section class="geo-hub-directory" data-geo-family="${family}"><h2>${esc(heading)}</h2>` +
    `<p>${esc(intro)}</p>` +
    `${parts.join('')}</section>`;
}

// ── Down-links from state / country hubs (2026-10-08) ─────────────────────
// The section-hub directory above links section hub -> geo hubs. The geo
// hierarchy pass (scripts/geo-hierarchy-links.mjs) adds the next level down:
// each state / province hub lists its city pages, and each country hub
// (/ndt-training-usa, /consulting-usa, /ndt-erp-usa, ...) lists its state hubs.
// The markup lives here so every geo-hub list on the site has one source.

/**
 * "Cities we serve in {Region}" for a state / province hub.
 * items: [{ city, links: [{ href, anchor }] }] — one <li> per city (a city with
 * no primary page lists its variant pages inline).
 */
export function geoHubCitiesHtml(family, regionName, items) {
  if (!items || !items.length) return '';
  const lis = items.map((it) => `<li>${it.links.map((l) => `<a href="${l.href}">${esc(l.anchor)}</a>`).join(' · ')}</li>`).join('');
  return `\n    <section class="geo-hub-cities" data-geo-cities="${family}"><h2>Cities we serve in ${esc(regionName)}</h2><ul>${lis}</ul></section>`;
}

/**
 * "By state" / "By province" list for a country hub, plus the cities and
 * regions in that country whose state has no hub of its own.
 * states / others: [{ href, anchor }]
 */
export function geoHubStatesHtml(family, { heading, states, othersHeading, others }) {
  const li = (l) => `<li><a href="${l.href}">${esc(l.anchor)}</a></li>`;
  const parts = [];
  if (states && states.length) parts.push(`<h2>${esc(heading)}</h2><ul>${states.map(li).join('')}</ul>`);
  if (others && others.length) parts.push(`<h${parts.length ? 3 : 2}>${esc(othersHeading)}</h${parts.length ? 3 : 2}><ul>${others.map(li).join('')}</ul>`);
  if (!parts.length) return '';
  return `\n    <section class="geo-hub-states" data-geo-states="${family}">${parts.join('')}</section>`;
}

export function applyGeoHubDirectory(routes, root = process.cwd()) {
  const file = `${root}/src/data/geo-hubs.json`;
  if (!existsSync(file)) return 0;
  const index = JSON.parse(readFileSync(file, 'utf-8'));
  let n = 0;
  for (const family of Object.keys(GEO_HUB_HOSTS)) {
    const html = geoHubDirectoryHtml(index, family);
    if (!html) continue;
    const r = routes.find((x) => x && x.path === GEO_HUB_HOSTS[family].hub);
    if (!r || typeof r.bodyContent !== 'string' || r.bodyContent.includes(`data-geo-family="${family}"`)) continue;
    const i = r.bodyContent.lastIndexOf('</main>');
    if (i < 0) continue;
    r.bodyContent = r.bodyContent.slice(0, i) + html + r.bodyContent.slice(i);
    n++;
  }
  return n;
}
