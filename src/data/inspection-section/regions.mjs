// Inspection section — regional pages (2026-10-19, owner: "with menu & submenu organized …
// with regional pages optimized"). No new city pages are built here (CLAUDE.md §20.2, §44.7):
// the regional inspection pages that already exist are tied into the /inspection tree instead.
//   * INSPECTION_REGIONS        — "Inspection by region" on /inspection (US state hubs first, then
//                                 the third-party inspection city pages, in the §32.1 geo order).
//   * inspectionRegionalLinksFor(path) — the up-link block on each regional inspection page:
//                                 Inspection › the service line(s) that page belongs to.
// One list for both layers: React (InspectionSection.tsx, InspectionRegionalLinks.tsx) and the
// crawler (scripts/inspection-section-2026-10.mjs). Every href is checked against the built routes
// by assertInspectionSectionClean.

const NDT = '/inspection/ndt-inspection-services';
const ADV = `${NDT}/advanced-ndt`;
const CON = `${NDT}/conventional-ndt`;

const tpi = (slug, label) => [`/inspection/third-party-inspection-${slug}`, label];
const state = (slug, label) => [`/inspection-services-${slug}`, label];

export const INSPECTION_REGIONS = {
  h2: 'Inspection by region',
  intro: 'Atlantis NDT mobilises inspection teams to the site. Each regional page covers the codes, regulators and industries that shape inspection there; quotes are prepared for each scope and region.',
  groups: [
    { name: 'United States', links: [
      state('texas', 'Texas'), state('louisiana', 'Louisiana'), state('oklahoma', 'Oklahoma'), state('california', 'California'),
      state('alaska', 'Alaska'), state('washington', 'Washington'), state('alabama', 'Alabama'), state('mississippi', 'Mississippi'),
      state('illinois', 'Illinois'), state('indiana', 'Indiana'), state('ohio', 'Ohio'), state('michigan', 'Michigan'),
      state('pennsylvania', 'Pennsylvania'), state('new-jersey', 'New Jersey'), state('new-york', 'New York'),
    ] },
    { name: 'Canada', links: [tpi('calgary', 'Calgary'), tpi('edmonton', 'Edmonton'), tpi('fort-mcmurray', 'Fort McMurray'), tpi('halifax', 'Halifax')] },
    { name: 'Europe', links: [
      tpi('aberdeen', 'Aberdeen'), tpi('london', 'London'), tpi('glasgow', 'Glasgow'), tpi('edinburgh', 'Edinburgh'), tpi('newcastle', 'Newcastle'),
      tpi('rotterdam', 'Rotterdam'), tpi('antwerp', 'Antwerp'), tpi('hamburg', 'Hamburg'), tpi('bergen', 'Bergen'), tpi('gdansk', 'Gdańsk'),
      tpi('katowice', 'Katowice'), tpi('marseille', 'Marseille'), tpi('genoa', 'Genoa'), tpi('brescia', 'Brescia'), tpi('barcelona', 'Barcelona'),
      tpi('bilbao', 'Bilbao'), tpi('madrid', 'Madrid'), tpi('istanbul', 'Istanbul'),
    ] },
    { name: 'Australia & New Zealand', links: [
      tpi('brisbane', 'Brisbane'), tpi('melbourne', 'Melbourne'), tpi('darwin', 'Darwin'), tpi('karratha', 'Karratha'), tpi('gladstone', 'Gladstone'),
      tpi('auckland', 'Auckland'), tpi('christchurch', 'Christchurch'),
    ] },
    { name: 'Middle East', links: [
      tpi('dubai', 'Dubai'), tpi('abu-dhabi', 'Abu Dhabi'), tpi('jebel-ali', 'Jebel Ali'), tpi('fujairah', 'Fujairah'), tpi('doha', 'Doha'),
      tpi('mesaieed', 'Mesaieed'), tpi('manama', 'Manama'), tpi('kuwait', 'Kuwait'), tpi('al-zour', 'Al Zour'), tpi('dammam', 'Dammam'),
      tpi('jubail', 'Jubail'), tpi('khobar', 'Khobar'), tpi('abqaiq', 'Abqaiq'), tpi('khurais', 'Khurais'), tpi('basrah', 'Basrah'),
    ] },
    { name: 'Asia', links: [
      tpi('jurong-island', 'Jurong Island, Singapore'), tpi('kuala-lumpur', 'Kuala Lumpur'), tpi('bintulu', 'Bintulu'), tpi('kerteh', 'Kerteh'),
      tpi('jakarta', 'Jakarta'), tpi('balikpapan', 'Balikpapan'), tpi('batam', 'Batam'), tpi('cilacap', 'Cilacap'), tpi('bangkok', 'Bangkok'),
      tpi('ho-chi-minh', 'Ho Chi Minh City'), tpi('manila', 'Manila'), tpi('busan', 'Busan'), tpi('ulsan', 'Ulsan'), tpi('shanghai', 'Shanghai'),
      tpi('ningbo', 'Ningbo'), tpi('tianjin', 'Tianjin'), tpi('dalian', 'Dalian'),
    ] },
    { name: 'India', links: [
      tpi('mumbai', 'Mumbai'), tpi('delhi', 'Delhi'), tpi('chennai', 'Chennai'), tpi('kolkata', 'Kolkata'), tpi('hyderabad', 'Hyderabad'),
      tpi('bangalore', 'Bangalore'), tpi('pune', 'Pune'), tpi('ahmedabad', 'Ahmedabad'), tpi('vadodara', 'Vadodara'), tpi('kochi', 'Kochi'),
      tpi('visakhapatnam', 'Visakhapatnam'),
    ] },
    { name: 'Latin America & Africa', links: [
      tpi('mexico-city', 'Mexico City'), tpi('monterrey', 'Monterrey'), tpi('antofagasta', 'Antofagasta'), tpi('lagos', 'Lagos'), tpi('johannesburg', 'Johannesburg'),
    ] },
  ],
  footnote: [['/inspection-services', 'API 510, 570 and 653 inspection by city'], ['/contact?service=inspection&subject=Inspection%20enquiry', 'Not listed? Ask about your location']],
};

// ── Up-links on the regional inspection pages ──────────────────────────────────────────────────
const L = {
  hub: ['/inspection', 'Inspection services'],
  ndt: [NDT, 'NDT inspection services'],
  adv: [ADV, 'Advanced NDT services'],
  con: [CON, 'Conventional NDT services'],
  aim: ['/inspection/asset-integrity-services', 'Asset integrity services'],
  rbi: ['/inspection/risk-based-inspection', 'Risk-based inspection (RBI)'],
  tss: ['/inspection/technical-staffing-services', 'Technical staffing services'],
  com: ['/inspection/commissioning', 'Commissioning inspection'],
  ta: ['/inspection/turnarounds-shutdowns', 'Turnaround and shutdown inspection'],
  api: ['/inspection-services', 'API 510, 570, 580 and 653 inspection'],
  mfl: [`${ADV}/mfl-tank-floor-inspection`, 'MFL tank floor scanning'],
  aut: [`${ADV}/automated-ultrasonic-testing`, 'Automated UT of girth welds'],
  pec: [`${ADV}/pulsed-eddy-current`, 'Pulsed eddy current (CUI screening)'],
  leak: [`${CON}/leak-testing`, 'Leak testing'],
  pmi: [`${CON}/positive-material-identification`, 'Positive material identification'],
  hard: [`${CON}/hardness-testing`, 'Portable hardness testing'],
  iris: [`${ADV}/iris-tube-inspection`, 'IRIS tube inspection'],
};

// Which service lines a regional page belongs to, by page family. The first link is always the
// Inspection landing, so every regional page sits under /inspection in the link graph.
const FAMILIES = [
  [/^\/inspection-services-[a-z-]+$/, ['ndt', 'aim', 'rbi', 'ta', 'tss']],
  [/^\/inspection\/tank-inspection-services-[a-z-]+$/, ['mfl', 'api', 'leak', 'ta']],
  [/^\/inspection\/pressure-vessel-inspection-services-[a-z-]+$/, ['aim', 'rbi', 'ta', 'adv']],
  [/^\/inspection\/piping-inspection-services-[a-z-]+$/, ['rbi', 'aim', 'pec', 'adv']],
  [/^\/inspection\/pipeline-inspection-services-[a-z-]+$/, ['aut', 'com', 'adv', 'aim']],
  [/^\/inspection\/corrosion-inspection-services-[a-z-]+$/, ['pec', 'aim', 'adv', 'rbi']],
  [/^\/inspection\/weld-inspection-services-[a-z-]+$/, ['con', 'adv', 'com', 'aut']],
  [/^\/inspection\/third-party-inspection-[a-z-]+$/, ['tss', 'com', 'ta', 'ndt']],
  [/^\/services\/(?:paut|tofd)-inspection-[a-z-]+$/, ['adv', 'aut', 'com', 'ta']],
  [/^\/services\/mfl-inspection-[a-z-]+$/, ['mfl', 'adv', 'api', 'ta']],
  [/^\/services\/(?:guided-wave|acoustic-emission)-inspection-[a-z-]+$/, ['adv', 'pec', 'aim', 'rbi']],
  [/^\/(?:ultrasonic|radiographic|magnetic-particle|penetrant|visual)-testing-(?!training$)[a-z-]+$/, ['con', 'adv', 'com', 'ta']],
  [/^\/eddy-current-testing-(?!training$)[a-z-]+$/, ['adv', 'iris', 'ta', 'aim']],
  [/^\/(?:aboveground-storage-tank-inspection|inspection\/aboveground-storage-tank-inspection)$/, ['mfl', 'api', 'leak', 'ta']],
  [/^\/inspection\/corrosion-under-insulation-inspection$/, ['pec', 'aim', 'rbi', 'adv']],
  [/^\/inspection\/phased-array-inspection-services$/, ['adv', 'aut', 'com', 'ta']],
  [/^\/inspection\/piping-circuit-inspection-cml$/, ['aim', 'rbi', 'pec', 'api']],
];

/** Up-link block for a regional inspection page, or null. Never links a page to itself. */
export function inspectionRegionalLinksFor(path) {
  const p = (path || '').replace(/\/+$/, '') || '/';
  for (const [re, keys] of FAMILIES) {
    if (!re.test(p)) continue;
    const links = [L.hub, ...keys.map((k) => L[k])].filter(([href]) => href !== p);
    return {
      intro: 'Part of Atlantis NDT inspection services',
      links,
    };
  }
  return null;
}

export const INSPECTION_REGIONAL_MARKER = 'data-inspection-regional';
