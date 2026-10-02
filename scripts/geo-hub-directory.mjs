// Crawler-layer geo hub directory ("Find {Family} by state / province /
// country") injected into the section hubs (/training, /consulting,
// /inspection-services, ...). Without inbound links the geo hubs would be
// orphans that Google finds only via the sitemap. The React layer renders the
// same data in src/components/GeoHubDirectory.tsx (two-layer rule) — keep the
// heading and intro text identical in both.
import { readFileSync, existsSync } from 'fs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// family -> section hub that hosts its directory + display label.
// Keep in step with HUBS in src/components/GeoHubDirectory.tsx.
export const GEO_HUB_HOSTS = {
  training: { hub: '/training', label: 'NDT Training' },
  consulting: { hub: '/consulting', label: 'NDT Level III Consulting' },
  inspection: { hub: '/inspection-services', label: 'NDT Inspection Services' },
  erp: { hub: '/erp', label: 'NDT ERP' },
  practical: { hub: '/practical-ndt', label: 'Practical NDT' },
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
  const parts = groups.map((g) => {
    const head = groups.length > 1 || g.country !== 'United States' ? `<h3>${esc(g.country)}</h3>` : '';
    return `${head}<ul>${g.hubs.map((h) => `<li><a href="${h.path}">${esc(host.label)} in ${esc(h.name)}</a></li>`).join('')}</ul>`;
  });
  return `<section class="geo-hub-directory" data-geo-family="${family}"><h2>Find ${esc(host.label)} by state, province or country</h2>` +
    `<p>${GEO_HUB_INTRO}</p>` +
    `${parts.join('')}</section>`;
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
