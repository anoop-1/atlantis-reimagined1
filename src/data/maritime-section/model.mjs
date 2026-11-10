// Maritime inspection section (owner request 2026-11-07): ship ultrasonic thickness measurement (UTM),
// CAP / ESP / renewal-survey gauging, hull structural integrity, ship piping and scrubber piping
// inspection, for ports in Europe, the Middle East and Egypt, China and Singapore.
//
// One model for both layers, on the shared service-section template (src/data/service-section/core.mjs),
// so the pages carry the site's existing design:
//   React   src/pages/MaritimeSection.tsx loads only the record it is showing (JSON per page) and builds
//           the section with stubs for the rest, so the 112 city records never sit in one bundle.
//   Crawler scripts/maritime-section-2026-11.mjs loads every record and builds the same section.
// Content: ./city-list.json (slug, name, country, region), ./cities/{slug}.json, ./pages/{slug}.json.
//
// Claims (CLAUDE.md standing rules): no prices; no local presence (teams are mobilised from India);
// no class approval unless it is listed in CLASS_APPROVALS below with its certificate.
import { createServiceSection } from '../service-section/core.mjs';

export const ROOT = '/maritime-inspection';
export const FORM_ID = 'maritime-enquiry';
export const ENQUIRY = `#${FORM_ID}`;
export const TALK = '/contact?service=inspection&subject=Maritime%20inspection%20enquiry';

/**
 * Classification-society approvals of Atlantis as a thickness-measurement firm (IACS UR Z17).
 * EMPTY until a certificate is issued. When one is, add
 *   { society: 'DNV', scope: 'Thickness measurement of hull structures', certificate: '<number>', validUntil: 'YYYY-MM-DD' }
 * and every page switches from the rule to the approval statement. Never add an entry without the certificate.
 */
export const CLASS_APPROVALS = [];

/**
 * Class approvals in progress (owner, 2026-11-10: "Under way DNV, LR & ABS approvals, scheduled for audit").
 * Stated as audits in preparation only; never as an approval. Empty this list if the audits are withdrawn.
 * When a certificate is issued, move that society into CLASS_APPROVALS with its certificate number.
 */
export const CLASS_APPROVAL_AUDITS = ['DNV', "Lloyd's Register", 'ABS'];

export const SERVICES = [
  ['ultrasonic-thickness-measurement', 'Ultrasonic Thickness Measurement', 'Hull, tank, deck and bulkhead gauging recorded on the class thickness-measurement formats, with sketches and corrosion flagged against the allowable margins.'],
  ['condition-assessment-programme', 'CAP Thickness Measurement', 'Gauging and close-up survey data for a Condition Assessment Programme, the voluntary class service charterers ask for on older tankers and bulk carriers.'],
  ['enhanced-survey-programme', 'ESP Gauging', 'Thickness measurement and close-up survey support for oil tankers, chemical tankers and bulk carriers under the ESP Code.'],
  ['renewal-survey-thickness-measurement', 'Renewal Survey Gauging', 'Thickness measurement for the 5, 10, 15, 20 and 25-year renewal surveys and intermediate surveys, plus pre-docking steel estimates.'],
  ['hull-structural-integrity', 'Hull Structural Integrity', 'Substantial and excessive corrosion, pitting, grooving, buckling and fatigue cracks, with magnetic particle and penetrant crack detection.'],
  ['ship-piping-inspection', 'Ship Piping Inspection', 'Wall-thickness gauging of cargo, ballast, fuel, sea-water and fire-main piping, with minimum-wall checks and isometric sketches.'],
  ['scrubber-piping-inspection', 'Scrubber Piping Inspection', 'EGCS wash-water and overboard discharge piping, the hull penetration area and scrubber welds, checked between dockings.'],
];
export const SERVICE_SLUGS = SERVICES.map(([s]) => s);
export const REGIONS = [['europe', 'Europe'], ['middle-east', 'Middle East & Egypt'], ['asia', 'China & Singapore']];
export const REGION_SLUGS = REGIONS.map(([s]) => s);
/** Country hubs (owner, 2026-11-10: Belgium and the Netherlands are the top priority in Europe). [slug, label, country in city-list] */
export const COUNTRY_HUBS = [['netherlands', 'Netherlands', 'Netherlands'], ['belgium', 'Belgium', 'Belgium']];
export const COUNTRY_SLUGS = COUNTRY_HUBS.map(([s]) => s);
const COUNTRY_HUB_FOR = Object.fromEntries(COUNTRY_HUBS.map(([s, , c]) => [c, s]));
const REGION_NAME = Object.fromEntries(REGIONS);
const SERVICE_LABEL = Object.fromEntries(SERVICES.map(([s, l]) => [s, l]));
const path = (slug) => (slug === 'maritime-inspection' ? ROOT : `${ROOT}/${slug}`);
export const maritimePath = path;

export const ICON_FOR = {
  [path('ultrasonic-thickness-measurement')]: 'Ruler',
  [path('condition-assessment-programme')]: 'ClipboardCheck',
  [path('enhanced-survey-programme')]: 'ScanSearch',
  [path('renewal-survey-thickness-measurement')]: 'CalendarClock',
  [path('hull-structural-integrity')]: 'ShieldCheck',
  [path('ship-piping-inspection')]: 'Workflow',
  [path('scrubber-piping-inspection')]: 'Factory',
};
const HIGHLIGHT_ICONS = ['Anchor', 'Ship', 'FileCheck'];

const SERVICE_CARDS = SERVICES.map(([slug, label, text]) => ({ href: path(slug), label, text }));

// ── Shared knowledge rendered on every city page (written once, varied by slug) ───────────────────
const hash = (s) => [...String(s)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = (slug, list) => list[hash(slug) % list.length];

export const SURVEY_TABLE = {
  head: ['Survey', 'When it falls', 'What the thickness measurement usually covers'],
  rows: [
    ['Annual survey', 'Every year, within three months of the anniversary date', 'General examination. Gauging where the surveyor finds suspect areas or where substantial corrosion was recorded at an earlier survey.'],
    ['Intermediate survey', 'In place of the second or third annual survey', 'Suspect areas, and on older ships and ESP ships selected ballast and cargo spaces with close-up survey; the extent grows with age.'],
    ['Renewal survey No. 1', 'Around 5 years', 'The first full baseline: suspect areas and selected plating and stiffeners, usually with modest steel renewal.'],
    ['Renewal survey No. 2', 'Around 10 years', 'Wider gauging of deck, bottom and side plating, transverse sections across the cargo area on ESP ships, and more close-up survey.'],
    ['Renewal survey No. 3', 'Around 15 years', 'Extensive gauging of cargo and ballast tank structure and more transverse sections. The survey most likely to turn up steel renewal.'],
    ['Renewal survey No. 4 and later', 'Around 20 and 25 years', 'Gauging extended to most structural members in cargo and ballast spaces. Charterers often add a Condition Assessment Programme.'],
    ['Docking survey', 'Twice in each five-year period', 'Bottom and side shell, sea chests, rudder and stern area while the hull is dry; suspect bottom plating gauged.'],
  ],
};

const CYCLE_INTRO = [
  (n) => `Class rules set the survey cycle, and the cycle sets how much gauging a ship needs. A superintendent planning a call at ${n} usually knows which survey is due; the table shows what the thickness measurement for each one typically involves. The exact extent comes from the class rules for the ship type and the surveyor attending, so the thickness measurement programme is agreed with the class before work starts.`,
  (n) => `How much steel has to be gauged depends on which survey the ship is due for, its type and its age. The pattern below is the usual one under IACS unified requirements; the attending surveyor and the class rules for the ship decide the final extent. For a ship calling at ${n}, we agree the programme with the class and the owner before the team mobilises.`,
  (n) => `Every renewal survey asks for more thickness measurement than the last, and for oil tankers, chemical tankers and bulk carriers the ESP Code adds close-up survey on top. The table is the usual shape of the work; the class rules and the surveyor set the exact extent, which is why the measurement plan for a job at ${n} is agreed in writing before mobilisation.`,
];

const ECA_PARA = {
  'seca-north-sea-baltic': (n) => `Ships trading to ${n} are inside a sulphur emission control area, where fuel must not exceed 0.10% sulphur unless an exhaust gas cleaning system (scrubber) is fitted. Scrubber wash-water piping, the overboard discharge and the hull penetration around it are among the fastest-corroding parts of a modern ship, so they belong in the gauging scope at every docking and, on open-loop systems, between dockings.`,
  'eca-med': (n) => `Since 1 May 2025 the whole Mediterranean has been a sulphur emission control area, so ships calling at ${n} burn 0.10% sulphur fuel or run a scrubber. Scrubber wash-water piping, the overboard discharge and the hull penetration around it corrode quickly in service and are worth adding to the gauging scope at every docking.`,
  none: (n) => `Wherever a ship is outside a sulphur emission control area, the global 0.50% sulphur cap applies, and many of the ships calling at ${n} meet it with an exhaust gas cleaning system rather than compliant fuel. Scrubber wash-water piping, the overboard discharge and the hull penetration around it corrode quickly in service, especially on open-loop systems, and are worth adding to the gauging scope.`,
};

const STEPS = [
  'Send the vessel name or IMO number, ship type, class society, the survey due (annual, intermediate, renewal survey number, CAP or owner\'s condition survey), the port and dates, and the scope you expect.',
  'We confirm the scope against the class rules for that survey, prepare the thickness measurement plan with frame and section references, and say whether the measurement will be credited to a class survey.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the yard or ship arranges staging, lighting, ventilation and gas-free certificates.',
  'Gauging with calibrated ultrasonic thickness gauges: through sound coatings only where the gauge\'s through-coating mode has been verified on a coated reference, otherwise on cleaned bare steel, with every reading tied to its frame, strake and location on the sketch.',
  'Readings are compared with original thicknesses as work proceeds; substantial and excessive corrosion and any cracks are reported to the attending surveyor and the superintendent the same day.',
  'The final report is issued on the class thickness-measurement formats with sketches, a summary of locations exceeding the allowable margins, piping tables where piping was in scope, and the gauge calibration and technician certificates.',
];

const HOW_INTRO = [
  (n) => `A gauging job at ${n} runs the same way whatever the ship type. The sequence below is what the superintendent, the attending surveyor and the yard can expect from us.`,
  (n) => `Most of the work on a ${n} job happens before the team boards: scope, plan and access are settled first, so the time on board goes on measurement.`,
  (n) => `The sequence for a thickness measurement job at ${n} is short and written down, so the yard, the surveyor and the superintendent know who arranges what.`,
];

const TEAM_PARAS = [
  'Atlantis mobilises its inspection team from India to the vessel, for each job. There is no office or agent at the port; the team travels to the ship, which is why the planning step comes first. Work is planned and supervised by our Responsible NDT Level III, the founder, who holds ASNT NDT Level III in UT, RT, MT, PT and VT and has more than eleven years of international field experience. Technicians are qualified and certified under the company\'s written practice to ASNT SNT-TC-1A, and Atlantis is certified to ISO 9001 and ISO 14001.',
  'The inspection team is mobilised from India for each job; nobody is stationed at the port, so mobilisation is planned against the vessel\'s schedule and visa lead times. Our founder and Responsible NDT Level III, who holds ASNT NDT Level III in UT, RT, MT, PT and VT and has over eleven years of international field experience, plans and supervises the work. Technicians are certified under the company\'s written practice to ASNT SNT-TC-1A, and the company holds ISO 9001 and ISO 14001 certification.',
  'We send the team from India to the ship for each job rather than keeping staff at the port, and plan the mobilisation around visas and the vessel\'s itinerary. The work is planned and supervised by the founder, our Responsible NDT Level III (ASNT NDT Level III in UT, RT, MT, PT and VT, with more than eleven years of international field experience). Technicians hold certification under the company\'s written practice to ASNT SNT-TC-1A; Atlantis is ISO 9001 and ISO 14001 certified.',
];

export function classApprovalText() {
  if (CLASS_APPROVALS.length) {
    const list = CLASS_APPROVALS.map((a) => `${a.society} (${a.scope}, certificate ${a.certificate})`).join('; ');
    return `Atlantis is approved as a thickness measurement firm under IACS UR Z17 by ${list}. For a ship classed with another society, tell us the class when you enquire and we confirm before anything is booked whether the measurement can be credited to the survey. Owner's and charterer's condition gauging, pre-docking steel estimates, pre-purchase and on-hire or off-hire gauging, and scrubber and piping condition checks between surveys do not need class approval.`;
  }
  const base = 'Thickness measurement that a classification society credits to a class survey has to be carried out by a firm approved by that society under IACS UR Z17.';
  const rest = ' Owner\'s and charterer\'s condition gauging, pre-docking steel estimates, pre-purchase and on-hire or off-hire gauging, and scrubber and piping condition checks between surveys do not need class approval.';
  if (CLASS_APPROVAL_AUDITS.length) {
    const who = CLASS_APPROVAL_AUDITS.length > 1 ? `${CLASS_APPROVAL_AUDITS.slice(0, -1).join(', ')} and ${CLASS_APPROVAL_AUDITS.at(-1)}` : CLASS_APPROVAL_AUDITS[0];
    return `${base} Atlantis is preparing for UR Z17 audits with ${who}. Until a certificate is issued, the readings we take are for the owner\'s own decisions, not for credit to a class survey, so tell us the vessel\'s class and the survey due when you enquire and we set the scope for the right purpose.${rest}`;
  }
  return `${base} Tell us the vessel\'s class when you enquire and we confirm, before anything is booked, whether the measurement can be credited to that survey.${rest}`;
}

export const CODES = [
  'IACS UR Z7 hull classification surveys',
  'IACS UR Z10.1 to Z10.5 (oil tankers, bulk carriers, chemical tankers, double-hull and double-skin ships)',
  'IACS UR Z17 approval of service suppliers',
  'SOLAS chapter XI-1 regulation 2 and the 2011 ESP Code',
  'MARPOL Annex VI regulation 14 and the 2021 EGCS Guidelines (MEPC.340(77))',
  'The rules of the vessel\'s classification society',
];
export const DELIVERABLES = [
  'Thickness measurement report on the class formats, with sketches',
  'Summary of substantial and excessive corrosion against allowable margins',
  'Pitting and grooving records with depth and extent',
  'Piping wall-thickness tables with isometric sketches',
  'Magnetic particle or penetrant crack-detection reports',
  'Gauge calibration records and technician certificates',
];

function placeFor(rec) {
  return rec.name === rec.country ? [{ '@type': 'Country', name: rec.country }] : [{ '@type': 'City', name: rec.name }, { '@type': 'Country', name: rec.country }];
}

function cityPage(rec, byslug) {
  const n = rec.name;
  const nearby = (rec.nearby || []).filter((s) => byslug[s]).map((s) => [path(s), `${byslug[s].name} ship thickness measurement`]);
  return {
    path: path(rec.slug),
    kind: 'city',
    parent: path(rec.region),
    navLabel: n,
    title: rec.title,
    description: rec.description,
    h1: rec.h1,
    eyebrow: `Maritime inspection · ${rec.country}`,
    intro: rec.intro,
    highlights: rec.highlights,
    cards: SERVICE_CARDS,
    cardsTitle: `Inspection services for ships at ${n}`,
    cardsSub: 'Each service has its own page with the method, the class requirements and what the report contains.',
    sections: [
      { id: 'port', h: rec.port.h, p: rec.port.p },
      { id: 'facilities', h: rec.facilities.h, p: rec.facilities.p, list: rec.facilities.list },
      { id: 'survey-cycle', h: `Thickness measurement through the survey cycle at ${n}`, p: [pick(rec.slug, CYCLE_INTRO)(n)], table: SURVEY_TABLE },
      { id: 'context', h: rec.context.h, p: [...rec.context.p, (ECA_PARA[rec.eca] || ECA_PARA.none)(n)] },
      { id: 'jobs', h: rec.jobs.h, p: rec.jobs.p, list: rec.jobs.list },
      { id: 'how-it-works', h: `How a thickness measurement job runs at ${n}`, p: [pick(rec.slug + 'h', HOW_INTRO)(n), rec.logistics], list: STEPS },
      { id: 'team', h: 'Who does the work, and when class approval applies', p: [pick(rec.slug + 't', TEAM_PARAS), classApprovalText()] },
    ],
    codes: CODES,
    deliverables: DELIVERABLES,
    industries: rec.vessels,
    faqs: [...rec.faqs, { q: `Does thickness measurement at ${n} need class approval?`, a: classApprovalText() }],
    related: [...nearby, ...(COUNTRY_HUB_FOR[rec.country] ? [[path(COUNTRY_HUB_FOR[rec.country]), `Ship thickness measurement in ${rec.country}`]] : []), [path(rec.region), `Maritime inspection in ${REGION_NAME[rec.region]}`], [ROOT, 'All maritime inspection services']],
    areaServed: placeFor(rec),
  };
}

function textPage(rec, kind, parent, byslug, cityList) {
  const pg = {
    path: path(rec.slug),
    kind,
    parent,
    navLabel: rec.navLabel,
    title: rec.title,
    description: rec.description,
    h1: rec.h1,
    eyebrow: rec.eyebrow || 'Maritime inspection',
    intro: rec.intro,
    highlights: rec.highlights,
    sections: [...(rec.sections || [])],
    codes: rec.codes,
    deliverables: rec.deliverables,
    industries: rec.industries,
    faqs: rec.faqs,
  };
  if (CLASS_APPROVALS.length) pg.sections.push({ id: 'class-approval', h: 'Class approval', p: [classApprovalText()] });
  if (kind === 'landing' || kind === 'region' || kind === 'country') {
    pg.cards = SERVICE_CARDS;
    pg.cardsTitle = 'Maritime inspection services';
    pg.cardsSub = 'Start with the survey or problem; each service page explains the method, the class requirements and the report.';
  }
  if (kind === 'region') {
    const rows = [];
    const byCountry = new Map();
    for (const [slug, name, country, region] of cityList) if (region === rec.slug) byCountry.set(country, [...(byCountry.get(country) || []), name]);
    for (const [country, names] of byCountry) rows.push([country, names.join(', ')]);
    pg.sections.push({ id: 'ports', h: `Ports we cover in ${REGION_NAME[rec.slug]}`, p: ['Each port has its own page describing the traffic, the yards and anchorages where gauging happens, and the jobs we see there. The full list of port pages follows at the end of this page.'], table: { head: ['Country', 'Ports'], rows } });
    pg.related = [...SERVICES.slice(0, 4).map(([s, l]) => [path(s), l]), ...REGIONS.filter(([s]) => s !== rec.slug).map(([s, l]) => [path(s), `Maritime inspection in ${l}`])];
    pg.areaServed = rec.slug === 'europe' ? ['Europe'] : rec.slug === 'middle-east' ? ['Middle East', 'Egypt'] : ['China', 'Hong Kong', 'Singapore'];
  }
  if (kind === 'country') {
    const hub = COUNTRY_HUBS.find(([s]) => s === rec.slug);
    const ports = cityList.filter(([, , country]) => country === hub[2]);
    pg.sections.push({ id: 'ports', h: `Port pages in ${hub[1]}`, p: [`Each ${hub[1]} port page covers the ships that call, the yards and berths where gauging happens, the port state control picture and the jobs we see there.`], table: { head: ['Port', 'Page'], rows: ports.map(([, name]) => [name, `Ship thickness measurement in ${name}`]) } });
    pg.related = [...ports.map(([s, name]) => [path(s), `Ultrasonic thickness measurement in ${name}`]), ...COUNTRY_HUBS.filter(([s]) => s !== rec.slug).map(([s, l]) => [path(s), `Ship thickness measurement in ${l}`]), [path('ultrasonic-thickness-measurement'), 'Ultrasonic thickness measurement (UTM)'], [path('europe'), 'Maritime inspection in Europe']];
    pg.areaServed = [hub[1]];
  }
  if (kind === 'region' && rec.slug === 'europe') pg.related = [...COUNTRY_HUBS.map(([s, l]) => [path(s), `Ship thickness measurement in ${l}`]), ...pg.related];
  if (kind === 'service') {
    pg.related = [...SERVICES.filter(([s]) => s !== rec.slug).map(([s, l]) => [path(s), l]), ...REGIONS.map(([s, l]) => [path(s), `Maritime inspection in ${l}`])];
  }
  return pg;
}

/** Stub for a page whose record is not loaded (React): enough for breadcrumbs, child lists and links. */
function stub(slug, kind, parent, navLabel) {
  return { path: path(slug), kind, parent, navLabel, title: navLabel, description: '', h1: navLabel, intro: '', __stub: true };
}

/**
 * @param cityList  rows [slug, name, country, region, batch] from city-list.json
 * @param records   { [slug]: record } for any subset of city / page records that are loaded
 */
export function buildMaritimeSection(cityList, records = {}) {
  const byslug = Object.fromEntries(cityList.map(([slug, name, country, region]) => [slug, { slug, name, country, region }]));
  const pages = [];
  const landing = records['maritime-inspection'];
  pages.push(landing ? textPage(landing, 'landing', null, byslug, cityList) : stub('maritime-inspection', 'landing', null, 'Maritime Inspection'));
  for (const [slug, label] of REGIONS) pages.push(records[slug] ? textPage(records[slug], 'region', ROOT, byslug, cityList) : stub(slug, 'region', ROOT, label));
  for (const [slug, label] of COUNTRY_HUBS) pages.push(records[slug] ? textPage(records[slug], 'country', path('europe'), byslug, cityList) : stub(slug, 'country', path('europe'), label));
  for (const [slug, label] of SERVICES) pages.push(records[slug] ? textPage(records[slug], 'service', ROOT, byslug, cityList) : stub(slug, 'service', ROOT, label));
  for (const [slug, name, , region] of cityList) pages.push(records[slug] ? cityPage(records[slug], byslug) : stub(slug, 'city', path(region), name));

  const groups = [];
  const seen = new Map();
  for (const [slug, name, country] of cityList) {
    if (!seen.has(country)) { seen.set(country, { name: country, links: [] }); groups.push(seen.get(country)); }
    seen.get(country).links.push([path(slug), name]);
  }
  return createServiceSection({
    pages,
    rootPath: ROOT,
    ancestors: [{ path: '/inspection', label: 'Inspection' }],
    iconFor: ICON_FOR,
    highlightIcons: HIGHLIGHT_ICONS,
    defaultEyebrow: 'Maritime inspection',
    regions: {
      h2: 'Ports we cover',
      intro: 'Each port page covers the traffic, the yards and anchorages where gauging happens, and the jobs we see there. Teams are mobilised from India to the vessel.',
      groups,
      footnote: [...COUNTRY_HUBS.map(([s, l]) => [path(s), `Ship thickness measurement in ${l}`]), ...REGIONS.map(([s, l]) => [path(s), `Maritime inspection in ${l}`])],
    },
    cta: {
      primaryHref: ENQUIRY, primaryLabel: 'Request a Quote',
      secondaryHref: TALK, secondaryLabel: 'Talk to an Inspector',
      bandTitle: 'Planning a survey or a drydock?',
      bandText: 'Send the vessel name or IMO number, the class, the survey due and the port. We reply with the scope, the mobilisation plan and a quote for that vessel.',
      formId: FORM_ID,
    },
    areaServed: ['Europe', 'Middle East', 'Egypt', 'China', 'Singapore'],
  });
}

/** Which record a path needs (React loader): { kind: 'city' | 'page', slug } or null. */
export function recordFor(pathname, cityList) {
  const p = String(pathname || '').replace(/\/+$/, '');
  if (p === ROOT) return { kind: 'page', slug: 'maritime-inspection' };
  const m = /^\/maritime-inspection\/([a-z0-9-]+)$/.exec(p);
  if (!m) return null;
  if (REGION_SLUGS.includes(m[1]) || COUNTRY_SLUGS.includes(m[1]) || SERVICE_SLUGS.includes(m[1])) return { kind: 'page', slug: m[1] };
  return cityList.some((r) => r[0] === m[1]) ? { kind: 'city', slug: m[1] } : null;
}
