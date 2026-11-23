// Maritime inspection section (owner request 2026-11-07): ship ultrasonic thickness measurement (UTM),
// CAP / ESP / renewal-survey gauging, hull structural integrity, ship piping and scrubber piping
// inspection, for ports in Europe, the Middle East and Egypt, China and Singapore.
// 2026-11-10 (owner): moved to /maritime/{port}, /maritime/{inspection} and /maritime/{country};
// survey, compliance and NDT inspection pages added (CAS, special survey, IHM, noise survey, infrared
// thermography, MPI, DPI, VT, UT weld, PAUT, TOFD, ACFM, eddy current, corrosion mapping, hatch-cover
// ultrasonic testing); a country page for every European country with two or more port pages.
// 2026-11-12 (owner): port × inspection pages at /maritime/{port}/{inspection} (./combo-list.json +
// ./combos/{port}--{inspection}.json), Benelux first, then the busiest hubs; each one written for that
// port and that inspection (no name-swapped template copy: the guard checks shared sentences).
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

export const ROOT = '/maritime';
export const LANDING_SLUG = 'maritime';
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

/** [slug, label, card text, group, lucide icon]. Groups: survey | compliance | ndt | advanced. */
export const SERVICE_DEFS = [
  // 2026-11-23 (owner): services for ship owners, buyers, managers and charterers (CLAUDE.md §83).
  ['comprehensive-vessel-inspection-programme', 'CVIP (Comprehensive Vessel Inspection Programme)', 'One owner-commissioned programme for the whole ship: hull and structure, thickness, piping, machinery condition and coatings, with one report the technical manager can act on.', 'owner', 'Ship'],
  ['pre-purchase-inspection', 'Pre-Purchase Inspection', 'Condition inspection of a second-hand ship for the buyer before the deal closes: steel, tanks, machinery condition and records, reported in time for the negotiation.', 'owner', 'FileCheck'],
  ['vessel-condition-survey', 'Vessel Condition Survey', 'Owner, charterer or financier condition assessment survey of a ship in service: structure, thickness, machinery and coatings, independent of the class survey cycle.', 'owner', 'ClipboardCheck'],
  ['condition-monitoring', 'Condition Monitoring', 'Trending the ship between surveys: repeat thickness readings, thermography, vibration and noise measurements, and hull and coating condition tracking.', 'owner', 'Gauge'],
  ['ultrasonic-thickness-measurement', 'Ultrasonic Thickness Measurement (UTM)', 'Hull, tank, deck and bulkhead gauging recorded on the class thickness-measurement formats, with sketches and corrosion flagged against the allowable margins.', 'survey', 'Ruler'],
  ['special-survey-thickness-measurement', 'Special Survey Thickness Measurement', 'Gauging for the 5, 10, 15, 20 and 25-year special (renewal) surveys and intermediate surveys, plus pre-docking steel estimates.', 'survey', 'CalendarClock'],
  ['condition-assessment-scheme', 'CAS (Condition Assessment Scheme)', 'Thickness measurement and survey support for the IMO Condition Assessment Scheme, and what CAS asks of an older tanker today.', 'survey', 'ClipboardList'],
  ['condition-assessment-programme', 'CAP Thickness Measurement', 'Gauging and close-up survey data for a Condition Assessment Programme, the voluntary class service charterers ask for on older tankers and bulk carriers.', 'survey', 'ClipboardCheck'],
  ['enhanced-survey-programme', 'ESP Gauging', 'Thickness measurement and close-up survey support for oil tankers, chemical tankers and bulk carriers under the ESP Code.', 'survey', 'ScanSearch'],
  ['hull-structural-integrity', 'Hull Structural Integrity', 'Substantial and excessive corrosion, pitting, grooving, buckling and fatigue cracks, with magnetic particle and penetrant crack detection.', 'survey', 'ShieldCheck'],
  ['ship-piping-inspection', 'Ship Piping Inspection', 'Wall-thickness gauging of cargo, ballast, fuel, sea-water and fire-main piping, with minimum-wall checks and isometric sketches.', 'survey', 'Workflow'],
  ['scrubber-piping-inspection', 'Scrubber Piping Inspection', 'EGCS wash-water and overboard discharge piping, the hull penetration area and scrubber welds, checked between dockings.', 'survey', 'Factory'],
  ['hatch-cover-ultrasonic-testing', 'Hatch Cover Ultrasonic Tightness Testing', 'Ultrasonic weathertightness testing of hatch covers, doors and closing appliances, with leak locations marked for the crew or the yard.', 'survey', 'Waves'],
  ['inventory-of-hazardous-materials', 'IHM (Inventory of Hazardous Materials)', 'IHM Part I surveys, sampling and maintenance for the EU Ship Recycling Regulation and the Hong Kong Convention.', 'compliance', 'FileWarning'],
  ['noise-survey', 'Ship Noise Survey', 'Noise level measurement in accommodation, work and machinery spaces to the IMO Code on Noise Levels on Board Ships, with a survey report for the ship.', 'compliance', 'Volume2'],
  ['infrared-thermography', 'Infrared Thermography', 'Thermal surveys of switchboards, motor control centres, machinery, exhaust insulation and cargo insulation, to find hot and cold spots before they fail.', 'compliance', 'Thermometer'],
  ['marine-ndt-services', 'Marine NDT Services', 'Every NDT method we use on ships, from visual inspection and MPI to PAUT and ACFM, chosen by the defect you are looking for.', 'ndt', 'Layers'],
  ['visual-inspection', 'Visual Inspection (VT)', 'Close-up visual examination of structure, welds and coatings, recorded so the surveyor and the superintendent see the same thing.', 'ndt', 'Eye'],
  ['magnetic-particle-inspection', 'Magnetic Particle Inspection (MPI)', 'Surface and near-surface crack detection on welds, brackets, crane pedestals, rudder stocks and other ferromagnetic parts.', 'ndt', 'Magnet'],
  ['dye-penetrant-inspection', 'Dye Penetrant Inspection (DPI)', 'Surface crack detection on non-magnetic parts: bronze propellers, stainless and duplex piping, aluminium superstructures.', 'ndt', 'Droplet'],
  ['ultrasonic-weld-inspection', 'Ultrasonic Weld Inspection (UT)', 'Shear-wave UT of butt welds, repairs and inserts to the class or code acceptance criteria, where radiography is impractical.', 'ndt', 'Activity'],
  ['advanced-ndt', 'Advanced Marine NDT', 'PAUT, TOFD, ACFM, eddy current and corrosion mapping for the jobs conventional NDT cannot do well on a ship.', 'advanced', 'Cpu'],
  ['phased-array-ultrasonic-testing', 'Phased Array UT (PAUT)', 'Encoded phased-array examination of welds, repairs and castings, with a stored image of every scan.', 'advanced', 'Radar'],
  ['tofd-inspection', 'TOFD Inspection', 'Time-of-flight diffraction for sizing the height of weld flaws and cracks in thick sections.', 'advanced', 'AudioWaveform'],
  ['acfm-inspection', 'ACFM Inspection', 'Alternating current field measurement: crack detection and sizing through paint on welds, without blasting the coating off.', 'advanced', 'Zap'],
  ['eddy-current-inspection', 'Eddy Current Inspection (ECT)', 'Surface crack detection through thin coatings on steel welds, and on aluminium and non-ferrous parts.', 'advanced', 'Gauge'],
  ['corrosion-mapping', 'Corrosion Mapping', 'Encoded UT C-scans of plating, tank tops and piping, so pitting and wastage are mapped rather than spot-read.', 'advanced', 'Map'],
];
export const SERVICE_GROUPS = [['owner', 'Owner, buyer and charterer surveys'], ['survey', 'Surveys and class work'], ['compliance', 'Compliance surveys'], ['ndt', 'Marine NDT'], ['advanced', 'Advanced NDT']];
export const SERVICES = SERVICE_DEFS.map(([slug, label, text]) => [slug, label, text]);
export const SERVICE_SLUGS = SERVICES.map(([s]) => s);
export const REGIONS = [['europe', 'Europe'], ['middle-east', 'Middle East & Egypt'], ['asia', 'China & Singapore'], ['oceania', 'Australia & New Zealand']];
export const REGION_SLUGS = REGIONS.map(([s]) => s);
const REGION_NAME = Object.fromEntries(REGIONS);
const SERVICE_LABEL = Object.fromEntries(SERVICES.map(([s, l]) => [s, l]));
const path = (slug) => (slug === LANDING_SLUG ? ROOT : `${ROOT}/${slug}`);
export const maritimePath = path;
/** Port × inspection pages (2026-11-12): /maritime/{port}/{inspection}, record combos/{port}--{inspection}.json. */
export const comboSlug = (port, service) => `${port}--${service}`;
export const comboPath = (port, service) => `${ROOT}/${port}/${service}`;
export const serviceLabel = (s) => SERVICE_LABEL[s] || s;

export const countrySlug = (country) => String(country).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
/**
 * Country pages: every European country with two or more port pages, unless the country name is already
 * a port slug (Malta, Gibraltar). [slug, label, country as written in city-list.json]
 */
export function countryHubs(cityList) {
  const count = new Map();
  for (const [, , country, region] of cityList) if (region === 'europe') count.set(country, (count.get(country) || 0) + 1);
  const citySlugs = new Set(cityList.map((r) => r[0]));
  return [...count].filter(([c, n]) => n >= 2 && !citySlugs.has(countrySlug(c))).map(([c]) => [countrySlug(c), c, c]);
}

export const ICON_FOR = Object.fromEntries(SERVICE_DEFS.map(([slug, , , , icon]) => [path(slug), icon]));
const HIGHLIGHT_ICONS = ['Anchor', 'Ship', 'FileCheck'];

const card = ([slug, label, text]) => ({ href: path(slug), label, text });
const GROUP_INTRO = {
  survey: 'Thickness measurement and inspection tied to the class survey cycle, charterers\' condition ratings and the structure and systems a hull survey looks at: the work most superintendents call us for first.',
  compliance: 'Surveys a ship needs for rules outside the hull survey: the hazardous materials inventory for EU port calls and recycling, noise levels for crew spaces, and thermal checks that catch electrical and insulation faults early.',
  ndt: 'The conventional methods, chosen by the defect: visual inspection for what can be seen, magnetic particle and dye penetrant for surface cracks, and ultrasonic testing for flaws inside a weld.',
  advanced: 'Encoded and electromagnetic methods for what conventional NDT does poorly on a ship: stored weld images, flaw height in thick plate, cracks found through paint, and wall loss mapped over an area.',
};
/** Hubs (landing, regions, countries): survey and compliance services plus the two NDT overview pages. */
const HUB_CARDS = SERVICE_DEFS.filter(([s, , , g]) => g === 'survey' || g === 'compliance' || s === 'marine-ndt-services' || s === 'advanced-ndt').map(card);
/** Port pages: the ten services most ships calling at a European port ask for. */
const CITY_CARD_SLUGS = ['pre-purchase-inspection', 'vessel-condition-survey', 'ultrasonic-thickness-measurement', 'special-survey-thickness-measurement', 'condition-assessment-scheme', 'condition-assessment-programme', 'enhanced-survey-programme', 'hull-structural-integrity', 'ship-piping-inspection', 'scrubber-piping-inspection', 'inventory-of-hazardous-materials', 'marine-ndt-services'];
const CITY_CARDS = CITY_CARD_SLUGS.map((s) => card(SERVICE_DEFS.find((d) => d[0] === s)));

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

// 2026-11-20: the steps above describe ultrasonic thickness gauging. Port × inspection pages for other
// services (thermography, corrosion mapping, crack detection, hatch-cover tightness) get their own steps,
// so a thermography page never describes gauging and an MPI page never promises a TM report.
const STEPS_CM = [
  'Send the vessel name or IMO number, ship type, the areas to map (tank tops, bottom or deck plating, sea chests, piping), the purpose (steel estimate, trending, pre-purchase), the port and dates.',
  'We define each scan area on the drawings with datum marks, the step size and the thickness thresholds to report against, and agree with the superintendent which areas are mapped before docking and which in dock.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the ship or yard arranges gas-free certificates, staging, lighting, cleaning of the scan areas and a water supply for couplant.',
  'Encoded scanning on a calibrated instrument, with the sound velocity set on a stepped reference block; coverage gaps, minimum values and suspected laminations are checked by hand with a dual-element probe before anything is reported.',
  'Areas below the agreed thresholds are reported to the superintendent and any attending surveyor the same day, with a first map, so the steel estimate can start before the report is final.',
  'The final report gives C-scan maps on a fixed colour scale with datum references, minimum and mean thickness and the area below each threshold, hand-checked minima and pit depths, the raw data and the calibration records.',
];
const STEPS_IR = [
  'Send the vessel name or IMO number, ship type, the equipment to survey (switchboards and motor control centres, machinery, exhaust and hot surfaces, cargo insulation), the port and dates, and when the ship will be working under normal load.',
  'We set the survey plan from the single-line diagram, the machinery list and, for cargo insulation, the containment drawings, and say which items need which operating condition: alongside, during cargo work, with reefers connected or on passage.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the ship provides the electrician or electro-technical officer who opens panels under the ship\'s permit-to-work.',
  'Survey with a calibrated thermal camera, with emissivity, reflected temperature, distance and load recorded for each image; panels are opened only by the ship\'s electrician, and anything that cannot be opened safely is listed as not surveyed.',
  'Findings that need urgent action, such as a connection at risk of failure or a surface above 220 °C left uninsulated near a fuel line, are reported to the chief engineer before the team leaves the space.',
  'The report gives a thermal and a visual image for every finding, the temperature rise, the load at the time, the severity and the recommended action, with the list of equipment surveyed with no anomaly and the camera calibration record.',
];
const STEPS_NDT = [
  'Send the vessel name or IMO number, the class society, the items to examine (welds, repairs, brackets, castings or fittings), the acceptance standard you expect, the port and dates.',
  'We confirm the method and the written procedure against the class rules or the code the work is accepted to, and say what surface preparation and access the examination needs.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the yard or ship arranges staging, lighting, cleaning and gas-free certificates.',
  'Examination with calibrated equipment to the written procedure, with each indication located by frame, strake and position and evaluated against the agreed acceptance criteria.',
  'Rejectable indications are reported to the attending surveyor and the superintendent the same day, so repairs can be planned while the ship is still in the yard.',
  'The report records the procedure, the equipment and its calibration, the areas examined, every recordable indication with its location and evaluation, sketches and photographs, and the technician certificates.',
];
const STEPS_HATCH = [
  'Send the vessel name or IMO number, the hatch cover type and number of covers, the reason for the test (survey, cargo claim, after repairs), the port and dates.',
  'We plan the test around cargo operations and the weather, because the covers have to be closed and dry and the holds empty or safely accessible.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the crew opens and closes the covers.',
  'An ultrasonic transmitter is placed inside the hold and the receiver is passed along every seal, compression bar and cross-joint outside, with readings compared with the open-hatch value for that cover.',
  'Leak positions are marked on the cover for the crew or the yard and shown to the surveyor if one is attending.',
  'The report lists each cover and joint tested, the leak positions and readings, photographs and the equipment calibration.',
];
// 2026-11-23 (owner, CLAUDE.md §83): owner, buyer and charterer services. Pre-purchase inspection works to the
// buyer's timetable under the sale contract; a condition survey or condition monitoring visit works to the owner's.
const STEPS_PPI = [
  'Send the vessel name or IMO number, where and when she can be boarded, the buyer\'s scope (structure, tanks and holds, machinery condition, records), any time window in the sale terms, and who receives the report.',
  'We agree the inspection plan with the buyer or the buyer\'s superintendent: which spaces can be entered with the seller\'s consent, which tanks need to be gas-free, what thickness readings and crack checks are wanted, and what cannot be opened up.',
  'Mobilisation is planned around visa lead times and the ship\'s itinerary; boarding is arranged through the seller\'s agent or broker, and the ship provides access, lighting and the permits for any enclosed space we enter.',
  'On board, the team records structure, coatings and corrosion by space, takes spot thickness readings and crack checks where access allows, takes machinery condition readings where the chief engineer runs the equipment, and photographs every finding against its location.',
  'Findings that could move the negotiation, such as wastage near renewal limits, cracking or a machinery reading out of trend, are reported to the buyer the same day, before the team leaves the ship.',
  'The report gives the condition of each space and system, the readings with their locations, photographs, a list of items that could not be inspected and why, and the points the buyer may want to raise with the seller or the class records.',
];
const STEPS_VCS = [
  'Send the vessel name or IMO number, the purpose of the survey (owner\'s check, charter or financing, planning a docking, after an incident), the port and dates, and any earlier survey or thickness reports.',
  'We set the scope with the technical manager: structure and tanks to enter, thickness readings and crack checks, machinery to measure, coatings to assess, and the format the report must follow for the charterer, financier or owner.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule; the ship\'s agent arranges port access, and the ship arranges gas-free certificates, permits, lighting and the engineer who runs machinery for readings.',
  'The survey is carried out space by space and system by system, with readings, crack checks, coating ratings and machinery measurements located on the drawings and photographed.',
  'Anything that needs attention before the next voyage or survey is reported to the master and the technical manager before the team leaves the ship.',
  'The report rates the condition of each area, compares readings with earlier reports where they exist, lists the defects and recommended actions by priority, and includes the photographs, sketches and calibration records.',
];
const STEPS_CMON = [
  'Send the vessel name or IMO number, the equipment and areas to monitor (machinery for vibration, electrical and exhaust for thermography, hull and tank areas for thickness and coating), the port and dates, and any earlier readings.',
  'We fix the measurement points with the chief engineer and the technical manager, so each later visit repeats exactly the same points, in the same operating condition, with the same settings.',
  'Mobilisation is planned around visa lead times and the vessel\'s schedule, ideally at the same port call pattern each time; the ship\'s agent arranges port access and the ship runs the machinery at the agreed load.',
  'Readings are taken at the fixed points with calibrated instruments: vibration on bearings and casings, thermal images under load, thickness at the marked locations, and coating condition photographed at the same positions.',
  'A reading that has moved beyond the agreed alarm level, or a sharp change since the last visit, is reported to the chief engineer before the team leaves the ship.',
  'The report trends every point against the earlier visits, flags the points that changed, gives the likely cause and the recommended action, and feeds the owner\'s planned maintenance system in the format agreed.',
];
const STEPS_CVIP = [
  'Send the vessel name or IMO number, the fleet context (one ship or several), the next class survey and docking dates, the trading pattern, and what the owner wants from the programme.',
  'We set the programme with the technical manager: a baseline inspection of hull, tanks, piping, closing appliances and machinery condition, then repeat visits timed to the survey cycle and the ship\'s port calls.',
  'Each visit is mobilised from India around the vessel\'s schedule and visa lead times; the ship\'s agent arranges port access and the ship arranges permits, gas-free certificates and machinery running conditions.',
  'At the baseline, thickness, crack detection, coating, thermography and vibration readings are taken at fixed, marked locations, so every later visit measures the same points.',
  'Findings that need action before the next visit are reported to the technical manager the same day, with the location and the reading.',
  'One programme report per visit shows the condition of the whole ship, the trend since the baseline, the work recommended before the next survey or docking, and the data the owner keeps for the life of the programme.',
];
const OWNER_STEPS = { 'pre-purchase-inspection': STEPS_PPI, 'vessel-condition-survey': STEPS_VCS, 'condition-monitoring': STEPS_CMON, 'comprehensive-vessel-inspection-programme': STEPS_CVIP };
const NDT_SERVICES = new Set(['visual-inspection', 'magnetic-particle-inspection', 'dye-penetrant-inspection', 'ultrasonic-weld-inspection', 'phased-array-ultrasonic-testing', 'tofd-inspection', 'acfm-inspection', 'eddy-current-inspection', 'marine-ndt-services', 'advanced-ndt']);
function stepsFor(service) {
  if (OWNER_STEPS[service]) return OWNER_STEPS[service];
  if (service === 'corrosion-mapping') return STEPS_CM;
  if (service === 'infrared-thermography') return STEPS_IR;
  if (service === 'hatch-cover-ultrasonic-testing') return STEPS_HATCH;
  if (NDT_SERVICES.has(service)) return STEPS_NDT;
  return STEPS;
}
const SERVICE_HOW_INTRO = [
  (n, l) => `The sequence below is how ${l} is arranged and carried out for a ship at ${n}, so the superintendent, the crew and the yard know who arranges what.`,
  (n, l) => `Most of the preparation for ${l} at ${n} is done before the team boards: scope, access and the ship's working condition are settled first, so the time on board goes on the examination itself.`,
  (n, l) => `For ${l} at ${n} the steps are short and written down, from the first enquiry to the report.`,
];
const IR_TEAM_PARAS = [
  'Atlantis mobilises its survey team from India to the vessel for each job; there is no office or agent at the port, so the survey is planned around the ship\'s schedule and visa lead times. Thermal surveys are carried out by qualified thermographers working to a written procedure, and Atlantis is certified to ISO 9001 and ISO 14001. If an insurer or a class condition-monitoring arrangement asks for thermographers qualified to a particular scheme, tell us at enquiry and we confirm before anything is booked.',
  'The survey team travels from India to the ship for each job rather than being stationed at the port, which is why the plan is fixed against the vessel\'s itinerary and visa lead times first. The thermal survey itself is done by qualified thermographers to a written procedure; Atlantis holds ISO 9001 and ISO 14001 certification. Where an insurer or a class condition-monitoring notation names a particular qualification scheme for thermographers, say so at enquiry and we confirm before booking.',
  'We send qualified thermographers from India to the vessel for each survey, with no office or agent at the port, and plan the visit around the ship\'s schedule and the visas the team needs. They work to a written thermography procedure, and Atlantis is certified to ISO 9001 and ISO 14001. If a particular qualification scheme for thermographers is required by an insurer or a class condition-monitoring arrangement, tell us at enquiry so we can confirm before anything is booked.',
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
    return `${base} Atlantis is in the process of obtaining UR Z17 approval from ${who}. Until a certificate is issued, the readings we take are for the owner\'s own decisions, not for credit to a class survey, so tell us the vessel\'s class and the survey due when you enquire and we set the scope for the right purpose.${rest}`;
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

const UTM = 'ultrasonic-thickness-measurement';
const SPECIAL = 'special-survey-thickness-measurement';

function cityPage(rec, byslug, hubFor, comboRows = []) {
  const n = rec.name;
  const hub = hubFor[rec.country];
  const here = comboRows.filter(([port]) => port === rec.slug).map(([port, s]) => [comboPath(port, s), `${SERVICE_LABEL[s]} at ${n}`]);
  const nearby = (rec.nearby || []).filter((s) => byslug[s] && s !== rec.slug).map((s) => [path(s), `${byslug[s].name} ship thickness measurement`]);
  return {
    path: path(rec.slug),
    kind: 'city',
    parent: hub ? path(hub) : path(rec.region),
    navLabel: n,
    title: rec.title,
    description: rec.description,
    h1: rec.h1,
    eyebrow: `Maritime inspection · ${rec.country}`,
    intro: rec.intro,
    highlights: rec.highlights,
    cards: CITY_CARDS,
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
    related: [
      ...here,
      ...nearby,
      ...(hub ? [[path(hub), `Ship inspection in ${rec.country}: all ports`]] : []),
      [path(UTM), 'Ultrasonic thickness measurement (UTM)'],
      [path(SPECIAL), 'Special survey thickness measurement'],
      [path(rec.region), `Maritime inspection in ${REGION_NAME[rec.region]}`],
      [ROOT, 'All maritime inspection services'],
    ],
    areaServed: placeFor(rec),
  };
}

const TM_SERVICES = new Set([UTM, SPECIAL, 'condition-assessment-scheme', 'condition-assessment-programme', 'enhanced-survey-programme', 'hull-structural-integrity', 'corrosion-mapping']);

function comboPage(rec, byslug, hubFor, comboRows) {
  const port = byslug[rec.port];
  const n = port.name;
  const label = SERVICE_LABEL[rec.service];
  const hub = hubFor[port.country];
  const sameService = comboRows.filter(([p, s]) => s === rec.service && p !== rec.port).map(([p, s]) => [comboPath(p, s), `${label} at ${byslug[p]?.name || p}`]);
  const samePort = comboRows.filter(([p, s]) => p === rec.port && s !== rec.service).map(([p, s]) => [comboPath(p, s), `${SERVICE_LABEL[s]} at ${n}`]);
  const tm = TM_SERVICES.has(rec.service);
  const sections = [...rec.sections];
  if (tm) sections.push({ id: 'survey-cycle', h: `Where ${label.replace(/ \(.*\)$/, '').toLowerCase()} sits in the survey cycle`, p: [pick(rec.port + rec.service, CYCLE_INTRO)(n)], table: SURVEY_TABLE });
  const steps = stepsFor(rec.service);
  const lower = label.replace(/ \(.*\)$/, '').toLowerCase();
  const howIntro = steps === STEPS ? pick(rec.port + rec.service + 'h', HOW_INTRO)(n) : pick(rec.port + rec.service + 'h', SERVICE_HOW_INTRO)(n, lower);
  sections.push({ id: 'how-it-works', h: `How the job runs at ${n}`, p: [howIntro], list: steps });
  const team = rec.service === 'infrared-thermography' ? pick(rec.port + rec.service + 't', IR_TEAM_PARAS) : pick(rec.port + rec.service + 't', TEAM_PARAS);
  sections.push({ id: 'team', h: tm ? 'Who does the work, and when class approval applies' : 'Who does the work', p: tm ? [team, classApprovalText()] : [team] });
  return {
    path: comboPath(rec.port, rec.service),
    kind: 'combo',
    parent: path(rec.port),
    navLabel: label,
    title: rec.title,
    description: rec.description,
    h1: rec.h1,
    eyebrow: `${label} · ${n}, ${port.country}`,
    intro: rec.intro,
    highlights: rec.highlights,
    sections,
    codes: rec.codes,
    deliverables: rec.deliverables,
    industries: rec.vessels,
    faqs: tm ? [...rec.faqs, { q: `Can ${label.replace(/ \(.*\)$/, '').toLowerCase()} at ${n} be credited to a class survey?`, a: classApprovalText() }] : rec.faqs,
    related: [
      [path(rec.port), `Ship inspection at ${n}: all services`],
      [path(rec.service), label],
      ...samePort,
      ...sameService.slice(0, 8),
      ...(hub ? [[path(hub), `Ship inspection in ${port.country}`]] : []),
      [ROOT, 'All maritime inspection services'],
    ],
    areaServed: placeFor(port),
  };
}

function textPage(rec, kind, parent, cityList, hubs, comboRows = []) {
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
    pg.cards = HUB_CARDS;
    pg.cardsTitle = 'Maritime inspection services';
    pg.cardsSub = 'Start with the survey or problem; each service page explains the method, the class requirements and the report. Marine NDT and Advanced NDT list every inspection method.';
  }
  const hubPairs = hubs.map(([s, l]) => [path(s), `Ship inspection in ${l}`]);
  if (kind === 'region') {
    const byCountry = new Map();
    for (const [, name, country, region] of cityList) if (region === rec.slug) byCountry.set(country, [...(byCountry.get(country) || []), name]);
    const rows = [...byCountry].map(([country, names]) => [country, names.join(', ')]);
    pg.sections.push({ id: 'ports', h: `Ports we cover in ${REGION_NAME[rec.slug]}`, p: [rec.slug === 'europe' ? 'Each European country with more than one port page has its own page, listed under "In this section" below, and every port has a page describing the traffic, the yards and anchorages where gauging happens, and the jobs we see there.' : 'Each port has its own page describing the traffic, the yards and anchorages where gauging happens, and the jobs we see there. The full list of port pages follows at the end of this page.'], table: { head: ['Country', 'Ports'], rows } });
    pg.related = [...SERVICE_DEFS.filter(([, , , g]) => g === 'survey').slice(0, 5).map(([s, l]) => [path(s), l]), [path('marine-ndt-services'), 'Marine NDT services'], ...REGIONS.filter(([s]) => s !== rec.slug).map(([s, l]) => [path(s), `Maritime inspection in ${l}`])];
    pg.areaServed = rec.slug === 'europe' ? ['Europe'] : rec.slug === 'middle-east' ? ['Middle East', 'Egypt'] : ['China', 'Hong Kong', 'Singapore'];
  }
  if (kind === 'country') {
    const hub = hubs.find(([s]) => s === rec.slug);
    const ports = cityList.filter(([, , country]) => country === hub[2]);
    pg.sections.push({ id: 'ports', h: `Port pages in ${hub[1]}`, p: [`There are ${ports.length} ${hub[1]} port pages: ${ports.map(([, name]) => name).join(', ')}. Each covers the ships that call, the yards and berths where gauging happens, the port state control picture and the jobs we see there; the links are under "In this section" below.`] });
    const others = hubPairs.filter(([h]) => h !== path(rec.slug));
    const start = hubs.findIndex(([s]) => s === rec.slug);
    const neighbours = [...others.slice(start), ...others.slice(0, start)].slice(0, 6);
    pg.related = [[path(UTM), 'Ultrasonic thickness measurement (UTM)'], [path(SPECIAL), 'Special survey thickness measurement'], [path('inventory-of-hazardous-materials'), 'IHM surveys'], [path('marine-ndt-services'), 'Marine NDT services'], ...neighbours, [path('europe'), 'Maritime inspection in Europe']];
    pg.areaServed = [hub[1]];
  }
  if (kind === 'service') {
    const def = SERVICE_DEFS.find(([s]) => s === rec.slug);
    const group = def ? def[3] : 'survey';
    const same = SERVICE_DEFS.filter(([s, , , g]) => g === group && s !== rec.slug).map(([s, l]) => [path(s), l]);
    const hubsLinks = [UTM, 'marine-ndt-services', 'advanced-ndt'].filter((s) => s !== rec.slug && !same.some(([h]) => h === path(s))).map((s) => [path(s), SERVICE_LABEL[s]]);
    const top = ['netherlands', 'belgium', 'united-kingdom', 'germany', 'greece', 'norway'].filter((s) => hubs.some(([h]) => h === s)).map((s) => hubPairs.find(([h]) => h === path(s)));
    const ports = Object.fromEntries(cityList.map(([s, name]) => [s, name]));
    const atPorts = comboRows.filter(([, s]) => s === rec.slug).map(([p, s]) => [comboPath(p, s), `${SERVICE_LABEL[s]} at ${ports[p] || p}`]);
    pg.related = [...atPorts, ...same, ...hubsLinks, ...top, ...REGIONS.map(([s, l]) => [path(s), `Maritime inspection in ${l}`])];
  }
  if (kind === 'landing') {
    // Services organised by group (owner, 2026-11-10: "organized in a nice fashion"), after the first section.
    const groupSections = SERVICE_GROUPS.map(([g, label]) => ({ id: `services-${g}`, h: label, p: [GROUP_INTRO[g]], links: SERVICE_DEFS.filter(([, , , gg]) => gg === g).map(([s, l]) => [path(s), l]) }));
    pg.sections = [pg.sections[0], ...groupSections, ...pg.sections.slice(1)];
    pg.related = [...hubPairs.slice(0, 8), ...REGIONS.map(([s, l]) => [path(s), `Maritime inspection in ${l}`])];
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
 * @param comboRows rows [port, service] from combo-list.json (port × inspection pages)
 */
export function buildMaritimeSection(cityList, records = {}, comboRows = []) {
  const byslug = Object.fromEntries(cityList.map(([slug, name, country, region]) => [slug, { slug, name, country, region }]));
  const hubs = countryHubs(cityList);
  const hubFor = Object.fromEntries(hubs.map(([s, , c]) => [c, s]));
  const pages = [];
  const landing = records[LANDING_SLUG];
  pages.push(landing ? textPage(landing, 'landing', null, cityList, hubs) : stub(LANDING_SLUG, 'landing', null, 'Maritime Inspection'));
  for (const [slug, label] of REGIONS) pages.push(records[slug] ? textPage(records[slug], 'region', ROOT, cityList, hubs) : stub(slug, 'region', ROOT, label));
  for (const [slug, label] of hubs) pages.push(records[slug] ? textPage(records[slug], 'country', path('europe'), cityList, hubs) : stub(slug, 'country', path('europe'), label));
  for (const [slug, label] of SERVICES) pages.push(records[slug] ? textPage(records[slug], 'service', ROOT, cityList, hubs, comboRows) : stub(slug, 'service', ROOT, label));
  for (const [slug, name, country, region] of cityList) pages.push(records[slug] ? cityPage(records[slug], byslug, hubFor, comboRows) : stub(slug, 'city', hubFor[country] ? path(hubFor[country]) : path(region), name));
  for (const [port, service] of comboRows) {
    const key = comboSlug(port, service);
    if (!byslug[port] || !SERVICE_LABEL[service]) throw new Error(`maritime combo ${key}: unknown port or service`);
    pages.push(records[key] ? comboPage(records[key], byslug, hubFor, comboRows) : { ...stub(port, 'combo', path(port), SERVICE_LABEL[service]), path: comboPath(port, service) });
  }

  const groups = [];
  const seen = new Map();
  for (const [slug, name, country] of cityList) {
    if (!seen.has(country)) {
      const g = { name: country, links: hubFor[country] ? [[path(hubFor[country]), `All ${country} ports`]] : [] };
      seen.set(country, g); groups.push(g);
    }
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
      intro: 'Each port page covers the traffic, the yards and anchorages where gauging happens, and the jobs we see there. Countries with several ports have their own page. Teams are mobilised from India to the vessel.',
      groups,
      footnote: REGIONS.map(([s, l]) => [path(s), `Maritime inspection in ${l}`]),
    },
    cta: {
      primaryHref: ENQUIRY, primaryLabel: 'Request a Quote',
      secondaryHref: TALK, secondaryLabel: 'Talk to an Inspector',
      bandTitle: 'Planning a survey or a drydock?',
      bandText: 'Send the vessel name or IMO number, the class, the survey due and the port. We reply with the scope, the mobilisation plan and a quote for that vessel. You can also email info@atlantisndt.com.',
      formId: FORM_ID,
    },
    areaServed: ['Europe', 'Middle East', 'Egypt', 'China', 'Singapore', 'Australia', 'New Zealand'],
  });
}

/** Which record a path needs (React loader): { kind: 'city' | 'page' | 'combo', slug } or null. */
export function recordFor(pathname, cityList, comboRows = []) {
  const p = String(pathname || '').replace(/\/+$/, '');
  if (p === ROOT) return { kind: 'page', slug: LANDING_SLUG };
  const c = /^\/maritime\/([a-z0-9-]+)\/([a-z0-9-]+)$/.exec(p);
  if (c) return comboRows.some(([port, s]) => port === c[1] && s === c[2]) ? { kind: 'combo', slug: comboSlug(c[1], c[2]) } : null;
  const m = /^\/maritime\/([a-z0-9-]+)$/.exec(p);
  if (!m) return null;
  if (REGION_SLUGS.includes(m[1]) || SERVICE_SLUGS.includes(m[1]) || countryHubs(cityList).some(([s]) => s === m[1])) return { kind: 'page', slug: m[1] };
  return cityList.some((r) => r[0] === m[1]) ? { kind: 'city', slug: m[1] } : null;
}
