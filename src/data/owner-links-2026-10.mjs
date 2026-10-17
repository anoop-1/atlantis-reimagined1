/**
 * Owner links — de-cannibalisation of product and service pages, 2026-10-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * Audit (GSC 6 Sep – 8 Oct 2026): product and service pages took 3.5% of page clicks
 * because Atlantis's own guides, buyer's-guide posts and Digital Twin city pages
 * outranked them for their own buyer searches. Each buyer search has ONE owning page
 * (owners follow the §51 keyword portfolio). The pages that compete with an owner get:
 *   1. one short in-body paragraph, right after the intro, with an exact-anchor link
 *      to the owner (one or two links, never to itself), and
 *   2. where the title/H1 targeted the buyer phrase head-on, a softer title/H1 that
 *      keeps the page's informational angle.
 *
 * One source for both layers:
 *   - React: src/components/OwnerLinkParagraph.tsx (DepthPage, TSX guides),
 *     src/pages/BlogDetail.tsx (blogs.json HTML bodies, via withOwnerLink),
 *     src/components/DigitalTwinLocationPage.tsx (dtCityMeta).
 *   - Crawler: scripts/owner-links-2026-10.mjs (applyOwnerLinksRoute, last body writer
 *     before writeRoute; assertOwnerLinksClean fails the build on a bad target, a
 *     self-link, a price word, a numeral or a blogs.json title that drifted).
 *
 * blogs.json posts: a retitled post's `title` here MUST equal its blogs.json title
 * (React, the blog index and Article schema read blogs.json; the crawler re-asserts it
 * over older CTR-wave titles). The build fails if they differ.
 *
 * Copy rules: plain, no prices, no numerals (standards names excepted), no claims the
 * repo cannot evidence. Owner descriptions mirror the owners' own H1s and the
 * inspection-l3 city-scope copy.
 */

export const OWNER_LINK_MARKER = 'data-owner-link="2026-10"';

/** Owning page per buyer search (keyword portfolio, CLAUDE.md §51). */
export const OWNERS = {
  l3: '/consulting/ndt-consulting-level-iii',
  consulting: '/consulting',
  erp: '/erp',
  software: '/ndt-inspection-software',
  ims: '/inspection-management-software',
  reporting: '/best-ndt-reporting-software-2026',
  twin: '/digital-twins',
  twinReporting: '/digital-twin-reporting',
  rtut: '/blog/rt-vs-ut-complete-comparison',
  d11: '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide',
  cost: '/blog/ndt-inspection-cost-2026-by-method-pricing-matrix',
  // 2026-10-17 software consolidation (SOFTWARE_INTENT_OWNERS below).
  comparison: '/best-ndt-reporting-software-2026',
  reportsApp: '/erp/apps/ndt-reports',
  tank: '/erp/software-for-tank-inspection-companies-us',
  pipeline: '/erp/software-for-pipeline-inspection-companies-us',
  aerospace: '/erp/software-for-aerospace-ndt-suppliers-us',
  refinery: '/erp/software-for-refinery-petrochemical-inspection-us',
  construction: '/blog/construction-quality-assurance-software-third-party-inspection-meets-erp',
};

/**
 * Software intents → ONE owning page each (2026-10-17). Evidence: US GSC, 90 days to
 * ~16 Oct 2026, software queries spread across 25+ URLs with one click.
 *   product      "ndt inspection software" 429i p21.6 · "ndt software" 415i p45.8 ·
 *                "ndt software solutions" 94i p50.8 · "ndt inspection management software"
 *                78i p35.6 · "non destructive testing software" 46i p46.7. Owner is the
 *                category guide + product page (§51 keyword portfolio).
 *   reporting    "ndt reporting software" 258i p18.9. Owner is the page Google already serves
 *   comparison   for it (US 646 impressions from software queries, p17.4, the strongest URL in
 *                the family) and for "best ndt software" 77i p14.4; it carries the unranked,
 *                vendor-cited comparison, the site navigation already calls it "NDT Software
 *                Compared", and splitting "reporting" from "best/compared" across two URLs is
 *                the cannibalisation this map removes. So both intents share one owner.
 *   app          Atlantis's own reporting app (product description, not the head term).
 *   industries   one national page per industry with US demand.
 * Every page that served the same intent was either 301'd into its owner (vercel.json) or
 * re-angled away from the owner's head term (CTR wave 15). Queries are lowercase.
 */
export const SOFTWARE_INTENT_OWNERS = {
  product: {
    owner: OWNERS.software,
    queries: ['ndt inspection software', 'ndt software', 'ndt software solutions', 'ndt inspection management software',
      'non destructive testing software', 'nondestructive testing software', 'ndt management software',
      'ndt certification tracking software', 'where can i find the best ndt software for inspection management?'],
  },
  reporting: {
    owner: OWNERS.reporting,
    queries: ['ndt reporting software', 'ndt report software', 'ndt report generator',
      'show me affordable ndt reporting software for small businesses.', 'what ndt reporting software integrates with cmms systems?'],
  },
  comparison: {
    owner: OWNERS.comparison,
    queries: ['best ndt software', 'best ndt reporting software', 'best ndt inspection software', 'ndt software comparison',
      'ndt inspection software comparison', 'ndt reporting software comparison',
      'where can operators compare nde inspection capabilities and pricing?', 'how do top nde inspection vendors compare?'],
  },
  erp: { owner: OWNERS.erp, queries: ['ndt erp', 'ndt erp software', 'erp for inspection companies', 'ndt company management software'] },
  app: { owner: OWNERS.reportsApp, queries: ['atlantis ndt reports', 'ndt reports app'] },
  tank: { owner: OWNERS.tank, queries: ['tank inspection software', 'api 653 inspection software', 'storage tank inspection software'] },
  pipeline: { owner: OWNERS.pipeline, queries: ['pipeline inspection software', 'pipeline ndt software'] },
  aerospace: { owner: OWNERS.aerospace, queries: ['aerospace ndt software', 'nadcap ndt software'] },
  refinery: { owner: OWNERS.refinery, queries: ['refinery inspection software', 'petrochemical inspection software', 'refinery ndt software'] },
  construction: { owner: OWNERS.construction, queries: ['construction quality control software', 'construction quality assurance software', 'construction qa/qc software'] },
  twin: { owner: OWNERS.twinReporting, queries: ['digital twin inspection software', 'digital twin inspection reporting'] },
};

/** Owning page for a software query (exact match on the lowercase query), or null. */
export function softwareOwnerFor(query) {
  const q = String(query || '').trim().toLowerCase();
  for (const g of Object.values(SOFTWARE_INTENT_OWNERS)) if (g.queries.includes(q)) return g.owner;
  return null;
}

/** Head phrases a non-owner title must not lead with (checked on final titles). */
export const SOFTWARE_HEAD_TERMS = [
  ['ndt inspection software', OWNERS.software],
  ['ndt reporting software', OWNERS.reporting],
  ['best ndt software', OWNERS.comparison],
  ['best ndt reporting software', OWNERS.comparison],
];

/** Links on blog pages that point at the duplicate Level III page are re-pointed to the owner. */
export const REPOINT = {
  '/consulting/asnt-level-iii-consulting-services': OWNERS.l3,
};

const L3 = (a = 'NDT Level III consulting services') => `[${a}](${OWNERS.l3})`;
const CONS = `[NDT consulting services](${OWNERS.consulting})`;
const ERP = (a = 'ERP for NDT inspection companies') => `[${a}](${OWNERS.erp})`;
const SW = `[NDT inspection software](${OWNERS.software})`;
const IMS = `[inspection management software](${OWNERS.ims})`;
const REP = `[NDT reporting software](${OWNERS.reporting})`;
const TWIN = `[asset integrity digital twin](${OWNERS.twin})`;
const TWINREP = `[digital twin inspection reporting](${OWNERS.twinReporting})`;
const RTUT = `[RT vs UT comparison](${OWNERS.rtut})`;
const D11 = `[AWS D1.1 acceptance criteria](${OWNERS.d11})`;
const COST = `[NDT inspection cost by method](${OWNERS.cost})`;

/**
 * Per-page entries. `p` is the paragraph ([text](/url) and **bold** markup); `title`,
 * `h1` and `description` are set only where the old wording targeted the owner's buyer
 * phrase head-on (a blogs.json post's description must equal its metaDescription).
 * `source` says which layer system builds the page: blog (blogs.json), depth
 * (depth-pages.json), tsx (bespoke component).
 */
export const OWNER_PAGES = {
  // ── Level III consulting → /consulting/ndt-consulting-level-iii (+ /consulting) ──
  '/blog/ndt-level-iii-consulting-services-guide': {
    source: 'blog',
    title: 'NDT Level III Oversight Explained: Duties, Compliance, Value',
    description: 'What an NDT Level III is responsible for: procedure development, personnel qualification, audits and compliance oversight, and why industries rely on Level III sign-off.',
    p: `If you want to engage a Level III rather than understand the role, our ${L3()} page sets out how an engagement runs: a named Level III of record, written practice ownership, procedure approval and audit support.`,
  },
  '/blog/ndt-level-iii-consulting-global-oil-gas-aerospace-nuclear-maritime': {
    source: 'blog',
    title: 'Level III Requirements by Industry: Oil & Gas to Nuclear',
    p: `To put a named Level III on your own programme in any of these sectors, see ${L3()}; procedures, audits and project support by industry sit under our wider ${CONS}.`,
  },
  '/blog/ndt-consulting-questions-answered-by-level-iii-expert': {
    source: 'blog',
    title: 'NDT Consulting Questions Answered by an ASNT Level III',
    p: `To put a Level III on your own programme, see ${L3()}; for procedures, audits and project work across methods, see ${CONS}.`,
  },
  '/blog/asnt-level-iii-consulting-for-written-practice-audits-common-findings': {
    source: 'blog',
    title: 'Written Practice Audits: The Findings a Level III Sees Most',
    p: `Where these findings become a corrective-action plan, our ${L3()} cover the written practice rewrite and the audit support that follows it.`,
  },
  '/blog/when-to-hire-an-asnt-level-iii-consultant-vs-train-one-in-house': {
    source: 'blog',
    p: `If the framework below points to bringing one in, ${L3('outsourced NDT Level III')} cover is set out on our Level III consulting page, including how a named Level III of record works alongside your own staff.`,
  },
  '/blog/written-practice-development-what-an-asnt-level-iii-consultant-actually-delivers': {
    source: 'blog',
    p: `Written practice ownership is one part of a wider engagement; the ${L3()} page covers procedure approval and audit support alongside it.`,
  },
  '/blog/third-party-asnt-level-iii-consulting-for-aerospace-nas-410-programs': {
    source: 'blog',
    p: `Atlantis provides NAS 410 Level 3 services through an associate who holds NAS 410 Level 3; how that sits alongside ASNT Level III cover is explained on our ${L3()} page.`,
  },
  '/blog/midstream-api-653-program-audits-what-an-outsourced-level-iii-actually-checks': {
    source: 'blog',
    p: `The programme audit described here is one of the engagements set out on our ${L3('outsourced NDT Level III')} page.`,
  },
  '/blog/ndt-consulting-costs-pricing-guide-2025': {
    source: 'blog',
    p: `Atlantis quotes Level III work by scope and region rather than publishing rates; what an engagement includes is set out on our ${L3()} page.`,
  },
  '/blog/outsourced-vs-in-house-ndt-level-3': {
    source: 'depth',
    p: `If the answer is contract cover, our ${L3('outsourced NDT Level III')} page sets out how a named Level III of record is engaged.`,
  },

  // ── Software: inspection software / ERP / inspection management / reporting ──
  // 2026-10-17: the comparison / buyer's-guide / reporting-comparison pages that competed with the
  // owners were 301'd into them (vercel.json) and their entries removed here: best-platforms-compared,
  // the two buyer's guides, the ten-vendor comparison, /erp/ndt-inspection-software-comparison,
  // beyond-AI-powered, /ndt-reporting-software-comparison, /ndt-software, /ndt-software-buyers-guide-2026.
  '/blog/what-is-ndt-erp-inspection-management-software': {
    source: 'blog',
    p: `To see an NDT ERP rather than read a definition, the ${ERP('NDT ERP software')} page walks through certifications, calibration, dispatch and reports in one system; for service companies, ${IMS} covers the client-asset side.`,
  },
  '/blog/inspection-management-software-vs-spreadsheets-2026': {
    source: 'blog',
    p: `When the spreadsheet stops scaling, the next step is ${IMS} built for companies that inspect other people's assets.`,
  },
  '/blog/how-to-choose-erp-software-for-an-ndt-inspection-company-2026-buyer-s-guide': {
    source: 'blog',
    p: `Once you have a shortlist, compare it against our own ${ERP()} and against the vendor-neutral questions in the buyer's guide to ${SW}.`,
  },
  '/blog/best-ndt-reporting-software-oil-gas-digital-twin': {
    source: 'blog',
    title: 'NDT Reporting for Oil & Gas: When a Digital Twin Belongs',
    p: `For a side-by-side comparison of ${REP}, see our comparison page; for reports issued on the 3D asset itself, see ${TWINREP}.`,
  },
  '/ndt-inspection-management-software': {
    source: 'depth',
    title: 'Inspection Management vs Field-Service Tools: The Hard Rules',
    p: `For a system built around these constraints, see ${IMS} for companies that inspect other people's assets.`,
  },

  // ── Digital Twin → /digital-twins (+ /digital-twin-reporting) ──
  '/blog/what-is-asset-integrity-digital-twin-2026': {
    source: 'blog',
    p: `To see one working on inspection data, the ${TWIN} page shows CMLs and readings on the 3D model, and ${TWINREP} shows the reports it issues.`,
  },
  '/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025': {
    source: 'blog',
    title: 'How NDT Data Feeds a Digital Twin: Methods, Models, Uses',
    p: `For the platform itself, see the ${TWIN} page; for the inspection reports it produces, see ${TWINREP}.`,
  },
  '/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity': {
    source: 'blog',
    title: 'Digital Twins and NDT Reporting in Oil & Gas Integrity',
    p: `To see what a report issued on the 3D asset looks like, open ${TWINREP}; the ${TWIN} page covers CML and thickness data on the model.`,
  },
  '/blog/pdf-ndt-reports-vs-digital-twin-asset-integrity': {
    source: 'blog',
    p: `What replaces the PDF is shown on our ${TWINREP} page, including a labelled sample report.`,
  },
  '/blog/digital-twin-platforms-compared-what-to-look-for-beyond-the-3d-model': {
    source: 'blog',
    p: `For how the Atlantis platform handles inspection data on the model, see the ${TWIN} page.`,
  },
  '/blog/asset-integrity-digital-twin-guide-2026': {
    source: 'tsx',
    title: 'Digital Twins for Integrity Teams: CML and Damage Data in 3D',
    description: 'How a digital twin puts CML thickness trends, damage mapping and corrosion-rate forecasts on one 3D model, and what integrity teams at refineries, FPSOs and pipelines use it for.',
    h1: 'Digital Twins for Integrity Teams: A Practical Guide',
    p: `For the Atlantis platform itself, see the ${TWIN} page; for the inspection reports it issues, see ${TWINREP}.`,
  },
  '/digital-twins-ndt-guide-2026': {
    source: 'tsx',
    p: `To see where a working platform sits on this model, the ${TWIN} page shows inspection data and CMLs on one 3D model, and ${TWINREP} shows the reports.`,
  },

  // ── RT vs UT → /blog/rt-vs-ut-complete-comparison ──
  '/blog/rt-vs-ut-weld-inspection': {
    source: 'depth',
    title: 'RT or UT on a Weld? Decide by Flaw Orientation and Code',
    p: `For the full side-by-side, covering principle, speed, safety, records and cost drivers, see our ${RTUT}.`,
  },
  '/blog/paut-vs-rt-when-phased-array-replaces-radiography': {
    source: 'depth',
    p: `For conventional ultrasonics and radiography compared head to head, see our ${RTUT}.`,
  },
  '/blog/weld-inspection-ndt-methods-guide': {
    source: 'blog',
    p: `For the two volumetric methods compared head to head, see our ${RTUT}; for what a weld must meet once examined, see ${D11}.`,
  },

  // ── AWS D1.1 acceptance criteria → the comprehensive guide ──
  '/blog/aws-d1-1-ut-acceptance-criteria-explained': {
    source: 'depth',
    p: `The visual limits and the radiographic acceptance that sit alongside this rating are collected in our guide to ${D11}.`,
  },
  '/blog/weld-inspection-acceptance-criteria-aws-vs-asme': {
    source: 'blog',
    p: `For the D1.1 limits on their own, including undercut, porosity, fillet size and the ultrasonic rating, see ${D11}.`,
  },
  '/blog/aws-d1-1-structural-welding-code-2026-explained': {
    source: 'blog',
    title: 'AWS D1.1 Explained: Steel Structural Welding Requirements',
    description: 'AWS D1.1 explained: joint design, WPS and PQR, welder qualification, visual and NDT acceptance, prequalified joints and cyclic loading for structural steel.',
    p: `The inspection side of the code, meaning what a weld must meet once it is examined, is covered in our guide to ${D11}.`,
  },

  // ── NDT inspection cost → the cost-by-method guide (quote model, no prices) ──
  '/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut': {
    source: 'depth',
    p: `How the billing unit differs across UT, RT, PAUT, MT and PT is set out in ${COST}.`,
  },
  '/blog/ccs-inspection-cost-2027-what-affects-quote': {
    source: 'blog',
    p: `The same quote logic applied method by method is set out in ${COST}.`,
  },

  // ── Owners of the three refreshed guides cross-link each other ──
  [OWNERS.rtut]: {
    source: 'tsx',
    title: 'RT vs UT: Radiographic vs Ultrasonic Testing Compared',
    h1: 'RT vs UT: Radiographic vs Ultrasonic Testing Compared',
    p: `Once the method is chosen, the weld still has to meet the code: see ${D11} for structural steel, and ${COST} for how each method is quoted.`,
  },
  [OWNERS.d11]: {
    source: 'blog',
    title: 'AWS D1.1 Acceptance Criteria: Visual, UT and RT Limits',
    description: 'AWS D1.1 acceptance criteria in one place: undercut, porosity and profile limits for visual inspection, UT and RT criteria, and static vs cyclic loading.',
    p: `Choosing the volumetric method in the first place is covered in our ${RTUT}.`,
  },
  [OWNERS.cost]: {
    source: 'tsx',
    title: 'NDT Inspection Cost by Method: What Drives the Quote',
    h1: 'NDT Inspection Cost by Method: What Drives the Quote',
    p: `Method choice drives most of the quote; our ${RTUT} explains when each volumetric method is the right call.`,
  },
};

/* ── Templated families: same link, sentence varied by a stable hash of the path ── */

const REPORTING_POSTS = [
  'ndt-reporting-software-for-multi-method-crews-ut-rt-mt-pt-in-one-system',
  'digital-signature-and-chain-of-custody-in-ndt-reporting-software',
  'ndt-reporting-software-roi-time-saved-from-field-to-client-delivery',
  'ndt-reporting-software-for-radiography-managing-film-and-digital-rt-records',
  'ndt-reporting-software-for-phased-array-ut-storing-and-sharing-scan-data',
  'ndt-reporting-software-integration-with-erp-why-disconnected-systems-cost-you',
  'ndt-reporting-software-for-shipyards-iacs-and-class-society-format-requirements',
  'ndt-reporting-software-for-aerospace-nadcap-ready-documentation',
  'switching-ndt-reporting-software-a-migration-checklist-for-inspection-companies',
  'ndt-reporting-software-for-canadian-inspection-companies-cgsb-format-requirements',
  'ndt-reporting-software-for-uk-inspection-companies-pcn-reporting-standards',
  'ndt-reporting-software-for-australian-inspection-companies-aindt-format-requirements',
  'ndt-reporting-software-vs-generic-inspection-apps-why-method-specific-templates-matter',
  'ndt-reporting-software-for-multi-site-companies-standardizing-across-crews',
];
const REPORTING_P = [
  `When you are ready to compare products on this point, our side-by-side comparison of ${REP} covers it vendor by vendor.`,
  `This is one requirement among several; our comparison of ${REP} sets the others out platform by platform.`,
  `To see how the main platforms handle this, use our side-by-side comparison of ${REP}.`,
];

const INDUSTRY_POSTS = {
  'ndt-software-for-refining-industry-2026-buyer-guide': 'refining',
  'ndt-software-for-marine-industry-2026-buyer-guide': 'marine work',
  'ndt-software-for-aerospace-industry-2026-buyer-guide': 'aerospace',
  'ndt-software-for-power-generation-2026-buyer-guide': 'power generation',
  'ndt-software-for-pharma-chemical-2026-buyer-guide': 'pharma and chemical plants',
  'ndt-software-for-construction-2026-buyer-guide': 'construction',
  'ndt-software-for-mining-2026-buyer-guide': 'mining',
  'ndt-software-for-lng-2026-buyer-guide': 'LNG',
  'ndt-software-for-offshore-wind-2026-buyer-guide': 'offshore wind',
  'ndt-software-for-hydrogen-economy-2026-buyer-guide': 'hydrogen',
};
const INDUSTRY_P = [
  (ind) => `The requirements that apply beyond ${ind} are set out in our general buyer's guide to ${SW}.`,
  (ind) => `For the questions every inspection company should ask, in ${ind} or anywhere else, see our buyer's guide to ${SW}.`,
];

const BUYING_POSTS = [
  'ndt-software-free-trial-vs-paid-2027-decoded',
  'ndt-software-buying-process-decision-2027',
  'ndt-software-procurement-checklist-2027',
  'ndt-software-rfp-template-2027-decoded',
  'ndt-software-vendor-selection-criteria-2027',
  'ndt-software-implementation-timeline-2027',
  'ndt-software-data-migration-2027-decoded',
  'ndt-software-rfp-template-what-to-include-when-evaluating-vendors',
  'ndt-inspection-software-vs-generic-field-service-software-what-s-actually-different',
  'ndt-inspection-software-trends-2027',
];
const BUYING_P = [
  `For the full buyer's guide to ${SW}, see the guide page; the Atlantis ${ERP()} is described on its own page.`,
  `This step sits inside a wider evaluation; our buyer's guide to ${SW} walks through the rest of it.`,
  `To test a shortlist against these points, start with our buyer's guide to ${SW}.`,
];

function fnv(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h >>> 0;
}
const pick = (arr, path) => arr[fnv(path) % arr.length];

for (const slug of REPORTING_POSTS) {
  const path = `/blog/${slug}`;
  if (!OWNER_PAGES[path]) OWNER_PAGES[path] = { source: 'blog', family: 'reporting', p: pick(REPORTING_P, path) };
}
// 2026-10-17: where an industry has its own national software page, the industry buyer guide
// points there first (industry intent -> industry owner), then at the general guide.
const INDUSTRY_OWNER_LINK = {
  'ndt-software-for-refining-industry-2026-buyer-guide': `[refinery and petrochemical inspection software](${OWNERS.refinery})`,
  'ndt-software-for-construction-2026-buyer-guide': `[construction quality control software](${OWNERS.construction})`,
  'ndt-software-for-aerospace-industry-2026-buyer-guide': `[aerospace NDT software for Nadcap suppliers](${OWNERS.aerospace})`,
};
for (const [slug, ind] of Object.entries(INDUSTRY_POSTS)) {
  const path = `/blog/${slug}`;
  const own = INDUSTRY_OWNER_LINK[slug];
  const p = own
    ? `For ${ind} specifically, our page on ${own} sets out what the software does and does not do; the general buyer's guide to ${SW} covers the rest.`
    : pick(INDUSTRY_P, path)(ind);
  if (!OWNER_PAGES[path]) OWNER_PAGES[path] = { source: 'blog', family: 'industry', p };
}
for (const slug of BUYING_POSTS) {
  const path = `/blog/${slug}`;
  if (!OWNER_PAGES[path]) OWNER_PAGES[path] = { source: 'blog', family: 'buying', p: pick(BUYING_P, path) };
}

/* ── Digital Twin city/region pages (one template, every DigitalTwinLocationPage) ── */

/** Title/H1/paragraph for a Digital Twin city or region page. City pages keep the local
 *  intent ("digital twin <city>") and leave "asset integrity digital twin" and
 *  "digital twin inspection reporting" to their owners. */
export function dtCityMeta(city) {
  const c = String(city || '').trim();
  return {
    title: `Digital Twin in ${c}: Local Assets and Codes`,
    h1: `Digital Twin Projects in ${c}: Local Assets and Inspection Codes`,
    p: `This page covers digital twin work for sites in ${c}. How the platform puts inspection data and CMLs on one 3D model is explained on the ${TWIN} page, and the reports it issues on ${TWINREP}.`,
  };
}

/* ── Rendering helpers (identical output in React and the crawler) ── */

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** [text](/url) and **bold** -> HTML. */
export function renderOwnerInline(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}

/** Links inside a paragraph, as [href, anchor] pairs. */
export function ownerLinksIn(text) {
  return [...String(text || '').matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map((m) => [m[2], m[1]]);
}

export function ownerEntryFor(path) {
  return OWNER_PAGES[path] || null;
}

export function ownerParagraphHtml(text) {
  return `<p class="owner-link" ${OWNER_LINK_MARKER}>${renderOwnerInline(text)}</p>`;
}

const CONTAINERS = ['header', 'blockquote', 'table', 'ul', 'ol', 'aside', 'figure', 'details', 'nav'];

/**
 * Insert `block` after the first paragraph found at or after `from`. If that paragraph
 * sits inside a container (header callout, table, list, quote), the block goes after the
 * container instead, so it always lands as a body paragraph of its own.
 */
export function insertAfterFirstParagraph(html, block, from = 0) {
  const s = String(html || '');
  const i = s.indexOf('</p>', from);
  if (i < 0) return null;
  let at = i + 4;
  const before = s.slice(from, i);
  for (const tag of CONTAINERS) {
    const opens = (before.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
    const closes = (before.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
    if (opens > closes) {
      const close = s.toLowerCase().indexOf(`</${tag}>`, i);
      if (close >= 0) at = Math.max(at, close + tag.length + 3);
    }
  }
  return s.slice(0, at) + block + s.slice(at);
}

/** Re-point links to duplicate pages (REPOINT) inside an HTML string. */
export function repointOwnerLinks(html) {
  let s = String(html || '');
  for (const [from, to] of Object.entries(REPOINT)) s = s.split(`href="${from}"`).join(`href="${to}"`);
  return s;
}

/** For HTML-string bodies (blogs.json content in React): re-point + paragraph after the intro. */
export function withOwnerLink(path, html) {
  const e = ownerEntryFor(path);
  let s = repointOwnerLinks(html);
  if (!e || !e.p || s.includes(OWNER_LINK_MARKER)) return s;
  return insertAfterFirstParagraph(s, ownerParagraphHtml(e.p)) ?? s + ownerParagraphHtml(e.p);
}
