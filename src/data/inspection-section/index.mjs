// Inspection section (2026-10-18; on the shared service-section template 2026-10-19) — one
// source for React (src/pages/InspectionSection.tsx → ServiceSectionPage), the crawler HTML
// (scripts/inspection-section-2026-10.mjs) and the header navigation.
import { SECTION_PAGES, ADVANCED_LIST, CONVENTIONAL_LIST } from './sections.mjs';
import { METHOD_PAGES } from './methods.mjs';
import { INSPECTION_REGIONS } from './regions.mjs';
import { createServiceSection, UI, GRID_COLS, SITE, upLinkHtml } from '../service-section/core.mjs';

export { SITE, UI, GRID_COLS };
export const ENQUIRY = '/contact?service=inspection&subject=Inspection%20enquiry';
export { ADVANCED_LIST, CONVENTIONAL_LIST };
export { INSPECTION_REGIONS, inspectionRegionalLinksFor, INSPECTION_REGIONAL_MARKER } from './regions.mjs';

const NDT = '/inspection/ndt-inspection-services';
const PARENT = {
  [NDT]: '/inspection',
  [`${NDT}/advanced-ndt`]: NDT,
  [`${NDT}/conventional-ndt`]: NDT,
};

function deliverySection(p) {
  return { id: 'delivery', h: 'How we deliver it', p: [
    `${p.navLabel} is carried out to a written procedure approved for the scope, naming the code and edition, the equipment and calibration, the coverage and the acceptance criteria. The procedure and each technician’s certification are submitted for the client’s review before mobilisation.`,
    'Work is planned and supervised by ASNT Level III personnel; our founder holds ASNT NDT Level III in UT, RT, MT, PT and VT. Reports state the coverage achieved and any limitations, so the engineer reading them knows what was examined and what was not, and any reportable finding is raised the same day.',
  ] };
}

/** lucide-react icon names (React maps them to components; the crawler renders the same SVG). */
export const ICON_FOR = {
  [NDT]: 'ScanSearch',
  [`${NDT}/advanced-ndt`]: 'Radar',
  [`${NDT}/conventional-ndt`]: 'Eye',
  '/inspection/asset-integrity-services': 'ShieldCheck',
  '/inspection/risk-based-inspection': 'Gauge',
  '/inspection/technical-staffing-services': 'Users',
  '/inspection/commissioning': 'ClipboardCheck',
  '/inspection/turnarounds-shutdowns': 'Wrench',
};
export const HIGHLIGHT_ICONS = ['Award', 'FileCheck', 'Layers'];
export const QUOTE_ANCHOR = '#rfq';
export const TALK = ENQUIRY;

const RAW = [
  ...SECTION_PAGES,
  ...METHOD_PAGES.map((p) => ({ ...p, kind: 'method' })),
].map((p) => (p.kind === 'method' ? { ...p, sections: [...(p.sections || []), deliverySection(p)] } : p)).map((p) => {
  let parent = PARENT[p.path];
  if (!parent && p.kind === 'method') parent = p.group === 'advanced' ? `${NDT}/advanced-ndt` : `${NDT}/conventional-ndt`;
  if (!parent && p.path !== '/inspection') parent = '/inspection';
  const extra = {};
  if (p.kind === 'landing') Object.assign(extra, { cardsTitle: 'Inspection services', cardsSub: 'Start with the service line, then go down to the method or scope you need.' });
  else if (p.cards) Object.assign(extra, { cardsTitle: 'Choose a service line', cardsSub: 'Each service line lists its methods, with a page for each one.' });
  if (p.kind === 'list') extra.listTitle = p.group === 'advanced' ? 'Advanced NDT methods' : 'Conventional NDT methods';
  return { ...p, ...extra, parent: parent || null };
});

export const INSPECTION_SECTION = createServiceSection({
  pages: RAW,
  rootPath: '/inspection',
  ancestors: [],
  lists: { advanced: ADVANCED_LIST, conventional: CONVENTIONAL_LIST },
  iconFor: ICON_FOR,
  highlightIcons: HIGHLIGHT_ICONS,
  defaultEyebrow: 'Inspection',
  regions: INSPECTION_REGIONS,
  cta: {
    primaryHref: QUOTE_ANCHOR, primaryLabel: 'Request a Quote',
    secondaryHref: TALK, secondaryLabel: 'Talk to an Inspector',
    bandTitle: 'Talk to an inspection engineer',
    bandText: 'Send the equipment list or drawings, the inspection you need and your timing. Quotes are prepared for each scope and region.',
    formId: 'rfq',
  },
});

export const INSPECTION_PAGES = INSPECTION_SECTION.PAGES;
export const INSPECTION_PATHS = INSPECTION_SECTION.PATHS;
export const inspectionPage = INSPECTION_SECTION.page;
export const inspectionBreadcrumbs = INSPECTION_SECTION.breadcrumbs;
export const listFor = INSPECTION_SECTION.listFor;
export const childPages = INSPECTION_SECTION.childPages;
export const inspectionSchema = INSPECTION_SECTION.schema;
export const inspectionWords = INSPECTION_SECTION.words;
/** Crawler HTML (kept for callers that pass { icon, rfqHtml }). */
export function inspectionHtml(page, { icon, rfqHtml = '' } = {}) {
  return INSPECTION_SECTION.html(page, { icon, formHtml: rfqHtml });
}
/** Crawler copy of the regional up-link block (React: src/components/InspectionRegionalLinks.tsx). */
export const inspectionRegionalHtml = (b) => upLinkHtml(b, 'data-inspection-regional', 'Inspection services');

/** Header navigation tree: Services → Inspection → children (→ grandchildren). */
export const INSPECTION_NAV = {
  name: 'Inspection',
  path: '/inspection',
  blurb: 'NDT, asset integrity, RBI, staffing, commissioning, turnarounds',
  menuTitle: 'Inspection services',
  allLabel: 'All inspection services',
  talk: ['/contact?service=inspection&subject=Inspection%20enquiry', 'Talk to an inspector'],
  children: [
    { name: 'NDT Inspection Services', path: NDT, children: [
      { name: 'Advanced NDT', path: `${NDT}/advanced-ndt` },
      { name: 'Conventional NDT', path: `${NDT}/conventional-ndt` },
    ] },
    { name: 'Asset Integrity Services', path: '/inspection/asset-integrity-services' },
    { name: 'Risk-Based Inspection (RBI)', path: '/inspection/risk-based-inspection' },
    { name: 'Technical Staffing Services (TSS)', path: '/inspection/technical-staffing-services' },
    { name: 'Commissioning', path: '/inspection/commissioning' },
    { name: 'Turnarounds & Shutdowns', path: '/inspection/turnarounds-shutdowns' },
    { name: 'API 510 / 570 / 580 / 653 Inspection', path: '/inspection-services' },
  ],
};
