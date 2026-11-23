/**
 * Risk-based inspection (RBI) section — 2026-11-23 (owner: "include RBI as a service that we offer … all performed
 * remotely … USA, Middle East, Canada, Singapore, China, India, all places where there's storage tank involvement").
 * Owner decisions the same day: Russia and Venezuela are left out (US sanctions: OFAC's EO 14071 determination on
 * engineering services to Russia, and the PdVSA/Government of Venezuela blocking); pages describe deliverables only
 * (no named credentials, no named software); fitness-for-service (API 579) stays NOT offered; scope = topic pages +
 * country pages + researched tank/refining hub pages, each 2,000+ words.
 *
 * The section root, /inspection/risk-based-inspection, stays in the inspection section (sections.mjs). Every page here
 * is a child of it: /inspection/risk-based-inspection/{slug}. Hubs sit under their country in the breadcrumb.
 * One source for both layers: React (src/pages/RbiSection.tsx) loads only the record it shows; the crawler
 * (scripts/rbi-section-2026-11.mjs) loads them all.
 */
import { createServiceSection } from '../service-section/core.mjs';

export const ROOT = '/inspection/risk-based-inspection';
export const pathFor = (slug) => `${ROOT}/${slug}`;
export const RBI_FORM_ID = 'rbi-enquiry';

const CTA = {
  primaryHref: `#${RBI_FORM_ID}`, primaryLabel: 'Request an RBI proposal',
  secondaryHref: ROOT, secondaryLabel: 'How our RBI service works',
  bandTitle: 'Talk to us about a risk-based inspection study',
  bandText: 'Send the equipment list, the codes you work to and what inspection data you hold. RBI studies are delivered remotely, and each proposal is prepared for the facility and scope.',
  formId: RBI_FORM_ID,
};

const stub = (row) => ({ path: pathFor(row.slug), navLabel: row.navLabel, title: row.navLabel, description: '', h1: row.navLabel, intro: '', __stub: true });

/** rows: list.json pages; records: { slug: record } (only what is loaded). */
export function buildRbiSection(rows, records = {}) {
  const bySlug = Object.fromEntries(rows.map((r) => [r.slug, r]));
  const pages = rows.map((row) => {
    const rec = records[row.slug];
    const parent = row.parent ? pathFor(row.parent) : ROOT;
    if (!rec) return { ...stub(row), kind: 'service', parent };
    const areaServed = row.kind === 'topic' ? undefined
      : row.kind === 'country' ? [{ '@type': 'Country', name: row.country }]
      : [{ '@type': 'Place', name: row.place }, { '@type': 'Country', name: row.country }];
    const related = rec.related || [];
    // Every hub links its country page; every country page links the topic pages.
    const extra = [];
    if (row.kind === 'hub' && bySlug[row.parent] && !related.some(([h]) => h === parent)) extra.push([parent, bySlug[row.parent].navLabel]);
    if (row.kind !== 'topic') for (const t of rows.filter((x) => x.kind === 'topic').slice(0, 4)) if (!related.some(([h]) => h === pathFor(t.slug))) extra.push([pathFor(t.slug), t.navLabel]);
    if (!related.some(([h]) => h === ROOT)) extra.push([ROOT, 'Risk-based inspection services']);
    return { ...rec, path: pathFor(row.slug), navLabel: row.navLabel, kind: 'service', parent, rbiKind: row.kind, ...(areaServed ? { areaServed } : {}), related: [...related, ...extra] };
  });
  return createServiceSection({
    pages,
    rootPath: ROOT,
    ancestors: [{ path: '/inspection', label: 'Inspection' }, { path: ROOT, label: 'Risk-based inspection (RBI)' }],
    iconFor: {},
    highlightIcons: ['Gauge', 'FileCheck', 'Layers'],
    defaultEyebrow: 'Risk-based inspection',
    areaServed: ['United States', 'Canada', 'Middle East', 'Singapore', 'India', 'China', 'Malaysia'],
    cta: CTA,
  });
}

/** Which record a URL needs (React). */
export function recordFor(pathname, rows) {
  const p = String(pathname || '').replace(/\/+$/, '');
  const m = /^\/inspection\/risk-based-inspection\/([a-z0-9-]+)$/.exec(p);
  return m && rows.some((r) => r.slug === m[1]) ? m[1] : null;
}
