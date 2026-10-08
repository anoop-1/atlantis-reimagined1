/**
 * Geographic + product hierarchy for North American location pages. 2026-10-08.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 * Google ranked our own city pages for commercial head terms instead of the
 * hubs ("ndt training": /ndt-training-honolulu p74 while /training-usa sat at
 * p75; "ndt consulting": /consulting/ndt-consulting-detroit p43 vs /consulting
 * p80). City pages had flat breadcrumbs (Home › page) and never linked up to
 * their state or country hub, so nothing told Google which page owns the head
 * term. This module defines the chain city › state › country › family hub.
 *
 * Plain ES module (no TypeScript, no JSX) so both layers share one copy:
 *   - scripts/geo-hierarchy-links.mjs (prerender: JSON-LD BreadcrumbList,
 *     visible breadcrumb, up-links, hub down-links)
 *   - src/lib/geo-hierarchy.ts (React <Breadcrumbs> + SEOHead breadcrumb)
 * Data lives in src/data/geo-hierarchy.json and is passed in, so this file
 * never has to import JSON (Node and Vite disagree on how).
 *
 * `ok(path)` is supplied by the caller: true when the path is a built,
 * indexable page. A level whose hub does not exist is skipped, never linked.
 */

export const SITE = 'https://atlantisndt.com';
export const COUNTRY_LABEL = { US: 'USA', CA: 'Canada' };
const COUNTRY_PHRASE = { US: 'the USA', CA: 'Canada' };

const INDUSTRY = {
  refining: 'Refining', steel: 'Steel', maritime: 'Maritime', aerospace: 'Aerospace', nuclear: 'Nuclear', power: 'Power',
  pipeline: 'Pipeline', rail: 'Rail', petrochemical: 'Petrochemical', offshore: 'Offshore', 'offshore-wind': 'Offshore Wind',
  aviation: 'Aviation', 'oil-gas': 'Oil and Gas', 'energy-utilities': 'Energy and Utilities',
};
const INSPECTION_TYPE = {
  corrosion: 'Corrosion Inspection', pipeline: 'Pipeline Inspection', piping: 'Piping Inspection',
  'pressure-vessel': 'Pressure Vessel Inspection', tank: 'Tank Inspection', weld: 'Weld Inspection',
};
const titleCase = (slug) => String(slug).split('-').filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

/**
 * Families. `cities` patterns capture the place slug (last group) and,
 * optionally, a variant (industry / inspection type) for pages that are not
 * the family's primary city page. `shared` = city pages and state hubs use the
 * same prefix (/ndt-training-houston vs /ndt-training-texas), so a slug that is
 * a city in the data (new-york = NYC) is never read as a state hub.
 */
export const GEO_FAMILIES = {
  training: {
    label: 'NDT Training', hub: '/training', hubAnchor: 'NDT training',
    hubPhrase: (a) => `the wider ${a} programme at Atlantis NDT`,
    anchor: (place) => `NDT training in ${place}`,
    countryHubs: { US: '/ndt-training-usa', CA: '/ndt-training-canada' },
    statePrefix: '/ndt-training-', shared: true,
    cities: [{ re: /^\/ndt-training-([a-z0-9-]+)$/ }],
  },
  consulting: {
    label: 'NDT Consulting', hub: '/consulting', hubAnchor: 'NDT consulting',
    hubPhrase: (a) => `the wider ${a} practice at Atlantis NDT`,
    anchor: (place) => `NDT consulting in ${place}`,
    countryHubs: { US: '/consulting-usa', CA: '/consulting-canada' },
    statePrefix: '/ndt-consulting-', shared: false,
    cities: [
      { re: /^\/consulting\/ndt-consulting-([a-z0-9-]+)$/ },
      { re: /^\/consulting\/level-iii-of-record-([a-z0-9-]+)$/, variant: () => 'Level III of Record' },
      { re: /^\/consulting\/ultrasonic-testing-level-iii-([a-z0-9-]+)$/, variant: () => 'UT Level III' },
      { re: /^\/consulting\/asnt-level-iii-consulting-([a-z0-9-]+)$/, variant: () => 'ASNT Level III Consulting' },
      { re: /^\/consulting\/([a-z]+(?:-[a-z]+)*?)-ndt-consulting-([a-z0-9-]+)$/, variant: (m) => `${INDUSTRY[m[1]] || titleCase(m[1])} NDT Consulting` },
    ],
  },
  inspection: {
    label: 'NDT Inspection Services', hub: '/inspection-services', hubAnchor: 'NDT inspection services',
    hubPhrase: (a) => `the full range of ${a} from Atlantis NDT`,
    anchor: (place) => `NDT inspection services in ${place}`,
    countryHubs: {},
    statePrefix: '/inspection-services-', shared: false,
    cities: [
      { re: /^\/inspection\/(corrosion|pipeline|piping|pressure-vessel|tank|weld)-inspection-services-([a-z0-9-]+)$/, variant: (m) => INSPECTION_TYPE[m[1]] },
      { re: /^\/inspection\/third-party-inspection-([a-z0-9-]+)$/, variant: () => 'Third-Party Inspection' },
    ],
  },
  erp: {
    label: 'NDT ERP', hub: '/erp', hubAnchor: 'NDT ERP software',
    hubPhrase: (a) => `the wider ${a} platform from Atlantis NDT`,
    anchor: (place) => `NDT ERP software in ${place}`,
    countryHubs: { US: '/ndt-erp-usa' },
    statePrefix: '/ndt-erp-', shared: true,
    cities: [{ re: /^\/ndt-erp-([a-z0-9-]+)$/ }],
  },
  practical: {
    label: 'Practical NDT', hub: '/practical-ndt', hubAnchor: 'practical NDT training',
    hubPhrase: (a) => `the wider ${a} programme at Atlantis NDT`,
    anchor: (place) => `practical NDT training in ${place}`,
    countryHubs: {},
    statePrefix: '/practical-ndt-', shared: true,
    cities: [{ re: /^\/practical-ndt-([a-z0-9-]+)$/ }],
  },
  api653: {
    label: 'Aboveground Storage Tank Inspection', hub: '/inspection/aboveground-storage-tank-inspection', hubAnchor: 'aboveground storage tank inspection',
    section: { label: 'NDT Inspection Services', path: '/inspection-services' },
    hubPhrase: (a) => `the wider ${a} service at Atlantis NDT`,
    anchor: (place) => `API 653 tank inspection support in ${place}`,
    countryHubs: {},
    statePrefix: '/api-653-tank-inspection-', shared: true,
    cities: [{ re: /^\/api-653-tank-inspection-([a-z0-9-]+)$/ }],
  },
  api510: {
    label: 'Pressure Vessel Inspection Services', hub: '/inspection/pressure-vessel-inspection-services', hubAnchor: 'pressure vessel inspection services',
    section: { label: 'NDT Inspection Services', path: '/inspection-services' },
    hubPhrase: (a) => `the full range of ${a} from Atlantis NDT`,
    anchor: (place) => `API 510 pressure vessel inspection support in ${place}`,
    countryHubs: {},
    statePrefix: '/api-510-pressure-vessel-inspection-', shared: true,
    cities: [{ re: /^\/api-510-pressure-vessel-inspection-([a-z0-9-]+)$/ }],
  },
  api570: {
    label: 'Piping Circuit Inspection', hub: '/inspection/piping-circuit-inspection-cml', hubAnchor: 'piping circuit inspection',
    section: { label: 'NDT Inspection Services', path: '/inspection-services' },
    hubPhrase: (a) => `the wider ${a} service at Atlantis NDT`,
    anchor: (place) => `API 570 piping inspection support in ${place}`,
    countryHubs: {},
    statePrefix: '/api-570-piping-inspection-', shared: true,
    cities: [{ re: /^\/api-570-piping-inspection-([a-z0-9-]+)$/ }],
  },
  // Product hierarchy only (no geography): every city reporting page points at
  // the comparison hub and the product page, wherever the city is.
  reporting: {
    label: 'NDT Reporting Software', hub: '/best-ndt-reporting-software-2026', hubAnchor: 'NDT reporting software',
    product: { path: '/intelligent-reporting-software', anchor: 'Atlantis NDT reporting software' },
    anchor: (place) => `NDT reporting software in ${place}`,
    countryHubs: {}, geo: false,
    cities: [{ re: /^\/ndt-reporting-((?!software-|vs-)[a-z0-9-]+)$/ }],
  },
};

/** Classify a path. Returns null for paths outside the hierarchy. */
export function classifyGeoPath(data, path) {
  if (!path || typeof path !== 'string') return null;
  const regions = data.regions || {};
  const cities = data.cities || {};
  const areas = data.areas || {};
  for (const [family, F] of Object.entries(GEO_FAMILIES)) {
    for (const [cc, hub] of Object.entries(F.countryHubs || {})) {
      if (path === hub) return { family, kind: 'country', cc, name: COUNTRY_LABEL[cc] };
    }
    if (F.statePrefix && path.startsWith(F.statePrefix)) {
      const slug = path.slice(F.statePrefix.length);
      if (/^[a-z0-9-]+$/.test(slug)) {
        const st = slug.endsWith('-state') ? slug.slice(0, -6) : slug;
        const cityClash = F.shared && slug === st && cities[slug];
        if (regions[st] && !cityClash) return { family, kind: 'state', state: st, cc: regions[st][2], name: regions[st][0] };
      }
    }
    for (const pat of F.cities) {
      const m = pat.re.exec(path);
      if (!m) continue;
      const slug = m[m.length - 1];
      const variant = pat.variant ? pat.variant(m) : null;
      if (F.geo === false) {
        const c = cities[slug];
        const city = c ? c[0] : titleCase(slug);
        return { family, kind: 'city', slug, city, variant, cc: c ? regions[c[1]][2] : null, name: city };
      }
      if (areas[slug] && !variant) return { family, kind: 'area', slug, cc: areas[slug][1], name: areas[slug][0] };
      const c = cities[slug];
      if (!c || !regions[c[1]]) return { family, kind: 'unmapped', slug };
      return {
        family, kind: 'city', slug, city: c[0], variant, state: c[1], cc: regions[c[1]][2],
        name: variant ? `${variant} in ${c[0]}` : c[0],
      };
    }
  }
  return null;
}

/** The state / province hub for a family, if one exists and is indexable. */
export function stateHubPath(data, family, state, ok) {
  const F = GEO_FAMILIES[family];
  if (!F || !F.statePrefix || !state) return null;
  const cands = F.shared && (data.cities || {})[state]
    ? [`${F.statePrefix}${state}-state`]
    : [`${F.statePrefix}${state}`, `${F.statePrefix}${state}-state`];
  return cands.find((p) => ok(p)) || null;
}

/**
 * Full chain for a page: crumbs (Home › family hub › country › state › page)
 * and up-links (state, country, family hub) with the family's fixed anchors.
 */
export function geoChain(data, path, ok) {
  const c = classifyGeoPath(data, path);
  if (!c || c.kind === 'unmapped') return null;
  const F = GEO_FAMILIES[c.family];
  const regions = data.regions || {};
  const crumbs = [{ name: 'Home', path: '/' }];
  const geoLinks = [];
  const extraLinks = [];
  if (F.section && ok(F.section.path)) crumbs.push({ name: F.section.label, path: F.section.path });
  const hubOk = F.hub !== path && ok(F.hub);
  if (hubOk) crumbs.push({ name: F.label, path: F.hub });
  let stateHub = null;
  let countryHub = null;
  if (F.geo !== false) {
    const ch = c.kind !== 'country' && c.cc ? (F.countryHubs || {})[c.cc] : null;
    if (ch && ch !== path && ok(ch)) countryHub = ch;
    if (countryHub) crumbs.push({ name: COUNTRY_LABEL[c.cc], path: countryHub });
    if (c.kind === 'city' && c.state) {
      const sh = stateHubPath(data, c.family, c.state, ok);
      if (sh && sh !== path) {
        stateHub = sh;
        crumbs.push({ name: regions[c.state][0], path: sh });
        geoLinks.push({ href: sh, anchor: F.anchor(regions[c.state][0]) });
      }
    }
    if (countryHub) geoLinks.push({ href: countryHub, anchor: F.anchor(COUNTRY_PHRASE[c.cc]) });
  } else if (F.product && F.product.path !== path && ok(F.product.path)) {
    extraLinks.push({ href: F.product.path, anchor: F.product.anchor });
  }
  crumbs.push({ name: c.name, path });
  return {
    ...c,
    crumbs,
    stateHub,
    countryHub,
    geoLinks,
    hubLink: hubOk ? { href: F.hub, anchor: F.hubAnchor } : null,
    extraLinks,
  };
}

/**
 * Anchor a hub uses to link down to this page: the family phrase for a
 * primary city page ("NDT training in Houston"), the variant for the rest
 * ("Weld inspection in Houston"), the area phrase for multi-state regions.
 */
export function downLinkAnchor(data, chain) {
  const F = GEO_FAMILIES[chain.family];
  if (chain.kind === 'area') return F.anchor(((data.areas || {})[chain.slug] || [])[2] || chain.name);
  if (chain.kind === 'state' || chain.kind === 'country') return F.anchor(chain.name);
  if (!chain.variant) return F.anchor(chain.city);
  // Sentence case, acronyms kept: "Third-Party Inspection" -> "Third-party inspection".
  const v = chain.variant.split(' ').map((w, i) => {
    if (/^[A-Z0-9-]+$/.test(w)) return w;
    return i === 0 ? w.replace(/-([A-Z])/g, (_m, ch) => `-${ch.toLowerCase()}`) : w.toLowerCase();
  }).join(' ');
  return `${v} in ${chain.city}`;
}

/** schema.org ListItems for a chain. */
export function breadcrumbListItems(chain) {
  return chain.crumbs.map((cr, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: cr.name,
    item: cr.path === '/' ? SITE : `${SITE}${cr.path}`,
  }));
}
