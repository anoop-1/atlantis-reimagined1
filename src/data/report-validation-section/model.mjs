/**
 * NDT report validation section — 2026-11-23 (owner: "add report validation with multiple US cities … we provide
 * independent review and impartial analysis for the data they've sent, with team of experts from different industries,
 * Nuclear, Maritime, Oil & gas, and petrochemical etc., scale it massive across all US cities except North Carolina";
 * answers the same day: hub + ~10 industry and digital-review pages + ~30 researched US cities now, then daily city
 * additions; keywords such as digital inspection, review and digital reporting; maritime mentioned only (maritime SEO is
 * paused for the class-society audits); no pricing anywhere — buyers contact us for scope and a quote). Later the same
 * day: "include Methods, Digital radiography, Computed radiography, PAUT, Eddy current tube inspection etc., across all
 * US cities and middle eastern cities" — method pages added (PAUT, RT interpretation and UT thickness stay on their
 * existing guides) and Middle East city pages alongside the US ones.
 *
 * Evidence (GSC, 90 days to 2026-11-20): the 19 report-validation pages that existed earned 78 impressions, and no US
 * query named a city. City pages here are conversion pages for people who already know they need a review; the hub,
 * the industry pages and the digital-review pages carry the search terms.
 *
 * The hub /report-validation is the section root (kind 'landing'); every other page is /report-validation/{slug}. The 13
 * older review guides (/report-validation/what-makes-an-ndt-report-defensible etc.) stay on the depth-page system and
 * are linked from the hub. One source for both layers: React (src/pages/ReportValidationSection.tsx) loads only the record
 * it shows; the crawler (scripts/report-validation-section-2026-11.mjs) loads them all.
 */
import { createServiceSection } from '../service-section/core.mjs';

export const ROOT = '/report-validation';
export const pathFor = (slug) => `${ROOT}/${slug}`;
export const RV_FORM_ID = 'rv-enquiry';

/** The review guides that live on the depth-page system (all built, all under /report-validation/). */
export const GUIDES = [
  ['/report-validation/what-makes-an-ndt-report-defensible', 'What makes an NDT report defensible'],
  ['/report-validation/third-party-review-vs-re-inspection', 'Document review or re-inspection?'],
  ['/report-validation/client-rejected-our-ndt-report', 'When a client rejects your NDT report'],
  ['/report-validation/inspection-records-in-dispute-and-litigation', 'Inspection records in a dispute'],
  ['/report-validation/due-diligence-inspection-record-review', 'Due diligence on inspection records'],
  ['/report-validation/insurance-claim-inspection-evidence', 'Inspection evidence for insurance claims'],
  ['/report-validation/ultrasonic-thickness-report-review', 'UT thickness report review'],
  ['/report-validation/phased-array-data-review-paut', 'PAUT data review'],
  ['/report-validation/radiographic-film-and-digital-interpretation-review', 'Radiograph interpretation review'],
  ['/report-validation/api-510-570-653-report-review', 'API 510, 570 and 653 report review'],
  ['/report-validation/tank-inspection-report-review', 'Storage tank inspection report review'],
  ['/report-validation/pipeline-girth-weld-report-review', 'Pipeline girth weld report review'],
  ['/report-validation/nadcap-aerospace-ndt-report-review', 'Aerospace NDT report review'],
];
/** Method guides on the depth-page system, listed with the method pages. */
export const METHOD_GUIDES = [
  ['/report-validation/phased-array-data-review-paut', 'Phased array (PAUT) data review'],
  ['/report-validation/radiographic-film-and-digital-interpretation-review', 'Radiograph interpretation review'],
  ['/report-validation/ultrasonic-thickness-report-review', 'UT thickness report review'],
];
/** Which method pages a city or industry page links, from the industries it lists (first four unique). */
const METHODS_FOR = {
  refinery: ['ect', 'cmap', 'cr', 'utweld'], petrochem: ['ect', 'cmap', 'dr', 'mtpt'], lng: ['tofd', 'dr', 'utweld', 'ect'],
  'oil-gas': ['cmap', 'dr', 'utweld', 'vt'], pipeline: ['dr', 'tofd', 'cmap', 'utweld'], nuclear: ['ect', 'utweld', 'dr', 'vt'],
  power: ['ect', 'utweld', 'mtpt', 'cr'], structural: ['utweld', 'mtpt', 'vt', 'tofd'], fabrication: ['utweld', 'mtpt', 'dr', 'vt'],
};

const CTA = {
  primaryHref: `#${RV_FORM_ID}`, primaryLabel: 'Send a report for review',
  secondaryHref: ROOT, secondaryLabel: 'How report validation works',
  bandTitle: 'Have a report or data set you need checked?',
  bandText: 'Tell us what the report covers, which code or procedure it was written to and what decision rides on it. We reply within one business day with the review scope and a quote.',
  formId: RV_FORM_ID,
};

const stub = (row) => ({ path: pathFor(row.slug), navLabel: row.navLabel, title: row.navLabel, description: '', h1: row.navLabel, intro: '', __stub: true });

/**
 * rows: list.json pages that are live (have a record); records: { slug: record } (only what is loaded);
 * root: the hub record (root.json).
 */
export function buildRvSection(rows, records = {}, root = null) {
  const byKey = Object.fromEntries(rows.filter((r) => r.kind === 'industry').map((r) => [r.key, r]));
  const industries = rows.filter((r) => r.kind === 'industry');
  const topics = rows.filter((r) => r.kind === 'topic');
  const methods = rows.filter((r) => r.kind === 'method');
  const byMethod = Object.fromEntries(methods.map((r) => [r.key, r]));
  const cities = rows.filter((r) => r.kind === 'city');
  const methodsFor = (keys) => [...new Set(keys.flatMap((k) => METHODS_FOR[k] || []))].map((k) => byMethod[k]).filter(Boolean).slice(0, 4);
  const pill = (r) => [pathFor(r.slug), r.navLabel];
  const has = (list, href) => list.some(([h]) => h === href);

  const pages = [];
  if (root) {
    // Link sections on the hub are filled from the live rows, so a new page is linked the day it is published.
    const sections = (root.sections || []).map((s) => {
      if (s.linksFrom === 'industry') return { ...s, links: industries.map(pill) };
      if (s.linksFrom === 'topic') return { ...s, links: topics.map(pill) };
      if (s.linksFrom === 'method') return { ...s, links: [...methods.map(pill), ...METHOD_GUIDES] };
      if (s.linksFrom === 'guides') return { ...s, links: GUIDES };
      return s;
    }).filter((s) => !s.linksFrom || s.links.length);
    pages.push({ ...root, sections, path: ROOT, navLabel: 'Report Validation', kind: 'landing', parent: null, areaServed: ['United States', 'Middle East'] });
  }

  for (const row of rows) {
    const rec = records[row.slug];
    if (!rec) { pages.push({ ...stub(row), kind: 'service', parent: ROOT }); continue; }
    const related = [...(rec.related || [])];
    const add = (href, label) => { if (!has(related, href)) related.push([href, label]); };
    if (row.kind === 'city') {
      for (const k of row.industries || []) if (byKey[k]) add(pathFor(byKey[k].slug), byKey[k].navLabel);
      for (const m of methodsFor(row.industries || [])) add(pathFor(m.slug), m.navLabel);
      for (const t of topics) add(pathFor(t.slug), t.navLabel);
      for (const c of cities.filter((x) => x.region === row.region && x.slug !== row.slug).slice(0, 4)) add(pathFor(c.slug), c.navLabel);
    } else if (row.kind === 'industry') {
      for (const m of methodsFor([row.key])) add(pathFor(m.slug), m.navLabel);
      for (const c of cities.filter((x) => (x.industries || []).includes(row.key)).slice(0, 8)) add(pathFor(c.slug), c.navLabel);
      for (const t of topics) add(pathFor(t.slug), t.navLabel);
    } else if (row.kind === 'method') {
      for (const m of methods.filter((x) => x.slug !== row.slug).slice(0, 4)) add(pathFor(m.slug), m.navLabel);
      for (const i of industries.filter((x) => (METHODS_FOR[x.key] || []).includes(row.key)).slice(0, 4)) add(pathFor(i.slug), i.navLabel);
      for (const t of topics) add(pathFor(t.slug), t.navLabel);
    } else {
      for (const t of topics.filter((x) => x.slug !== row.slug)) add(pathFor(t.slug), t.navLabel);
      for (const i of industries.slice(0, 6)) add(pathFor(i.slug), i.navLabel);
    }
    add(ROOT, 'NDT report validation services');
    const areaServed = row.kind !== 'city' ? ['United States', 'Middle East']
      : row.country === 'United States'
        ? [{ '@type': 'City', name: row.place }, { '@type': 'State', name: row.region }, { '@type': 'Country', name: 'United States' }]
        : [{ '@type': 'City', name: row.place }, { '@type': 'Country', name: row.country }];
    pages.push({ ...rec, path: pathFor(row.slug), navLabel: row.navLabel, kind: 'service', parent: ROOT, rvKind: row.kind, areaServed, related });
  }

  // Cities by US state, then by Middle East country, on the hub (the template's 'regions' block, landing page only).
  const usStates = [...new Set(cities.filter((c) => c.country === 'United States').map((c) => c.region))].sort();
  const meCountries = [...new Set(cities.filter((c) => c.country !== 'United States').map((c) => c.region))].sort();
  const regions = cities.length ? {
    h2: 'Report validation by city',
    intro: 'Reviews are carried out remotely on the reports and data you send, so each city page describes the industries, codes and owners in that area rather than an office. Pick the nearest one, or send your report from anywhere in the United States or the Middle East.',
    groups: [...usStates, ...meCountries].map((rg) => ({ name: rg, links: cities.filter((c) => c.region === rg).map((c) => [pathFor(c.slug), c.place]) })),
    footnote: [[`#${RV_FORM_ID}`, 'Send a report from any other city']],
  } : null;

  return createServiceSection({
    pages,
    rootPath: ROOT,
    ancestors: [],
    iconFor: {},
    highlightIcons: ['FileCheck', 'ShieldCheck', 'Scale'],
    defaultEyebrow: 'Independent NDT report validation',
    areaServed: ['United States', 'Middle East'],
    regions,
    cta: CTA,
  });
}

/** Which record a URL needs (React): null for the hub, the slug for a child page, undefined for anything else. */
export function recordFor(pathname, rows) {
  const p = String(pathname || '').replace(/\/+$/, '');
  if (p === ROOT) return null;
  const m = /^\/report-validation\/([a-z0-9-]+)$/.exec(p);
  return m && rows.some((r) => r.slug === m[1]) ? m[1] : undefined;
}
