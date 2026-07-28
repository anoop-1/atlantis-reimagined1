/**
 * Noindex audit + recovery — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THE AUDIT FOUND
 * 349 prerendered pages carry `noindex, follow`. 275 of them come from
 * `scripts/pseo-noindex-list.json`, generated 2026-05-16 as a doorway-page
 * defence when those pages were thin programmatic permutations. The remaining
 * 74 are gated by the reconciler's uniqueness check and the curated-city list.
 *
 * Two problems with the current state:
 *
 * 1. THE LIST IS STALE. It was correct in May and is not correct now. Pages on
 *    it include /ndt-erp-india (1,443 words, 15 impressions and 2 clicks in the
 *    last 90 days) and /ndt-erp-malaysia, /ndt-erp-oman, /ndt-erp-nigeria and
 *    /ndt-erp-netherlands — several of which are the REGION HUBS built on
 *    2026-07-27 with named operators and jurisdictional regulatory content.
 *    Those hubs were noindexed by a decision made before their content existed.
 *    455 impressions/90d currently land on noindexed pages.
 *
 * 2. THE THIN ONES STAYED THIN. Every thin-page generator skips `noindex`
 *    routes, so the 146 noindexed pages under 400 words were never upgraded.
 *    A page nobody will index is still crawled, and a crawl budget spent on
 *    322-word permutations is a crawl budget not spent elsewhere.
 *
 * WHAT THIS MODULE DOES
 * a) Gives the /industry, /inspection and /training permutation families real
 *    sector-specific and city-specific content, the same way /services was
 *    handled — so the page is worth reading whether or not it is indexed.
 * b) Replaces the stale hard-coded list with a MEASURED decision. Each
 *    noindexed page is compared against its own family siblings using word-
 *    shingle similarity. A page is re-indexed only when it is both substantial
 *    AND genuinely differentiated from its siblings. Near-duplicates stay
 *    noindexed — the original doorway-page concern was legitimate and is
 *    preserved, it is simply now enforced by evidence rather than by a snapshot
 *    taken two months ago.
 *
 * Pricing policy (CLAUDE.md §18): no Atlantis price appears below.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '../src');

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

const ACRONYMS = new Set(['ndt', 'ut', 'rt', 'mt', 'pt', 'vt', 'et', 'paut', 'tofd', 'mfl', 'ae', 'api', 'asme', 'aws', 'iso', 'uk', 'usa', 'uae', 'cwi', 'lng', 'fpso']);
const label = (slug) =>
  String(slug).split('-').map((w) => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');

let CITY_CONTEXT = {};
export async function loadCityContext() {
  try {
    const dt = await import(pathToFileURL(resolve(SRC, 'data/dt-city-data.mjs')).href);
    CITY_CONTEXT = dt.digitalTwinLocationContext || {};
  } catch { /* optional */ }
  return CITY_CONTEXT;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Sector knowledge — /industry/{sector}-ndt-{city}
 * ────────────────────────────────────────────────────────────────────────── */

const SECTORS = {
  aerospace: {
    name: 'Aerospace',
    assets: 'airframe structure and skins, engine components including discs, blades and casings, landing gear, composite primary and secondary structure, and the tooling and fixtures used to build them',
    mechanisms:
      'Fatigue cracking at stress concentrations and fastener holes; corrosion, including exfoliation and intergranular attack in aluminium alloys; delamination, disbond and barely visible impact damage in composites; creep and thermal fatigue in hot-section engine parts; and hydrogen embrittlement in high-strength steels.',
    methods: 'Fluorescent penetrant and magnetic particle for surface indications, ultrasonic and phased array for internal defects and composite delamination, eddy current for fastener-hole and surface cracking, radiography for castings and assemblies, and thermography or shearography for bond and honeycomb condition.',
    codes: 'NAS 410 and EN 4179 for personnel qualification, AS9100 for the quality system, Nadcap AC7114 for process accreditation, ASTM E1417 and E1444 for penetrant and magnetic particle, plus the OEM process specification that supplies the acceptance criteria.',
    distinct:
      'The defining difference from industrial work is that acceptance criteria come from the OEM process specification for that part rather than from a general code, so the same indication can be acceptable on one programme and rejectable on another. Records must therefore cite the specification and revision applied, not merely the examination standard.',
  },
  construction: {
    name: 'Construction',
    assets: 'structural steel frames and connections, reinforced concrete elements, pipe racks, cranes and lifting structures, foundations and anchor systems, and site-fabricated pressure piping',
    mechanisms:
      'Weld defects at connections — lack of fusion, undercut, toe cracking; fatigue at cyclically loaded details; corrosion at embedments, splash zones and coating breakdowns; concrete cover loss and reinforcement corrosion; and misalignment or distortion from erection.',
    methods: 'Visual examination to a written procedure as the primary method, magnetic particle and penetrant for surface indications, ultrasonic and phased array for weld volume, radiography where access allows, plus concrete cover meters and rebound testing on reinforced elements.',
    codes: 'AWS D1.1 for structural steel welding, ASME B31.3 for process piping on industrial sites, ASME Section IX for welder qualification, ACI standards for concrete, and the project inspection and test plan which usually governs hold points more strictly than any code.',
    distinct:
      'On construction projects the quality record is what gets audited rather than the programme — welder qualification continuity, NDT results tied to specific joints and drawings, material traceability by heat number, and hold-point evidence signed by the party the ITP names.',
  },
  manufacturing: {
    name: 'Manufacturing',
    assets: 'castings and forgings, machined components, welded fabrications, pressure parts, and the production tooling and dies that make them',
    mechanisms:
      'Casting porosity, shrinkage and inclusions; forging laps, seams and bursts; quench cracking from heat treatment; weld defects in fabrication; grinding burns and surface damage from machining; and fatigue initiation at stress raisers in service.',
    methods: 'Radiography for castings, ultrasonic for forgings and plate, magnetic particle and penetrant for surface examination after machining and heat treatment, eddy current for high-throughput surface screening, and hardness and PMI verification where material substitution is a risk.',
    codes: 'ASTM material and examination specifications, ASME Section V for the examination methods, ASME Section VIII where pressure parts are involved, ISO 9001 for the quality system, and customer-specific requirements which frequently exceed the base standard.',
    distinct:
      'Inspection stage matters as much as method: examining before heat treatment misses quench cracking, examining after final machining risks scrapping value already added. The sequence is normally fixed by the process specification rather than chosen per part.',
  },
  marine: {
    name: 'Marine and offshore',
    assets: 'hull plating and internal structure, ballast and cargo tanks, deck equipment and cranes, propulsion shafting and stern tubes, offshore jackets and topsides, risers and mooring systems',
    mechanisms:
      'General and pitting corrosion accelerated by coating breakdown in ballast tanks; grooving corrosion along weld lines; fatigue cracking at hard points, bracket toes and hatch corners; hydrogen-induced cracking in high-strength steels; and marine growth masking condition underwater.',
    methods: 'Close-up visual survey, ultrasonic thickness gauging against a gauging plan agreed with the class surveyor, magnetic particle on critical welds, and ROV or diver-deployed examination for the underwater hull and subsea structure.',
    codes: 'IACS unified requirements and the class society rules — ABS, DNV, Lloyd\'s Register, Bureau Veritas, RINA, ClassNK — with thickness measurement performed by a firm approved by the class society and the results presented in the society\'s required format.',
    distinct:
      'The class survey regime, not a general inspection code, drives scope and timing. Thickness diminution is calculated against original scantlings, which means the as-built data is part of the inspection record and its absence is a genuine problem rather than an inconvenience.',
  },
  'oil-gas': {
    name: 'Oil and gas',
    assets: 'pressure vessels and separators, process piping and flowlines, aboveground storage tanks, heat exchangers, fired heaters, wellheads and Christmas trees, and gathering and transmission pipelines',
    mechanisms:
      'Sulfidation and naphthenic acid corrosion at temperature; wet H2S cracking including HIC and SOHIC in sour service; CO2 corrosion and top-of-line corrosion in wet gas; microbiologically influenced corrosion in dead legs and low points; corrosion under insulation; and erosion-corrosion at elbows and reducers.',
    methods: 'Ultrasonic thickness measurement at corrosion monitoring locations, phased array and TOFD for weld examination, radiography including profile radiography for small-bore and insulated lines, magnetic particle and penetrant for surface examination, guided wave for screening inaccessible runs, and MFL for tank floors.',
    codes: 'API 510 for pressure vessels, API 570 for piping, API 653 for storage tanks, API 580 and 581 for risk-based inspection, API 579 for fitness-for-service, API RP 571 for damage mechanisms, and ASME Section V and Section VIII throughout.',
    distinct:
      'Inspection intervals derive from measured corrosion rate and remaining life rather than a fixed calendar, which makes the quality of the thickness data decisive. Readings that cannot be proven to come from the same corrosion monitoring location cannot support a defensible interval.',
  },
  petrochemical: {
    name: 'Petrochemical',
    assets: 'reactors and regenerators, cracking furnaces and transfer lines, distillation columns, heat exchangers and air coolers, catalyst handling systems, and utility and flare systems',
    mechanisms:
      'High-temperature hydrogen attack per API 941 in hydroprocessing service; creep and carburisation in furnace tubes; polythionic acid stress corrosion cracking during shutdown; chloride stress corrosion cracking of austenitic stainless; amine and caustic cracking; and refractory degradation behind the shell.',
    methods: 'Ultrasonic and phased array including advanced HTHA-specific techniques, replication metallography for creep assessment, radiography of furnace tubes, thermography for refractory condition, and eddy current or IRIS for exchanger tubing.',
    codes: 'ASME Section VIII, ASME B31.3, API 510, API 570, API 530 for furnace tube design, API 941 for HTHA, API 571 for damage mechanisms and API 579 for fitness-for-service assessment.',
    distinct:
      'Several of the credible mechanisms — HTHA, creep, polythionic acid cracking — are not detectable by routine thickness measurement at all. The inspection plan has to be built from the damage-mechanism review outward, or it measures the wrong thing thoroughly.',
  },
  pipeline: {
    name: 'Pipeline',
    assets: 'transmission and gathering lines, girth and seam welds, pump and compressor stations, road and rail crossings, river crossings, and above-ground installations',
    mechanisms:
      'External corrosion under disbonded coating and at holidays; internal corrosion at low points and water accumulation; stress corrosion cracking, both high and near-neutral pH; manufacturing defects in older seam welds; third-party mechanical damage; and geotechnical strain in unstable ground.',
    methods: 'In-line inspection using MFL, ultrasonic and crack-detection tools; guided wave for cased and inaccessible sections; direct assessment excavation with ultrasonic and magnetic particle at the dig; close interval potential survey and DCVG for coating and cathodic protection condition; and automated ultrasonic testing on new girth welds.',
    codes: 'API 1104 for girth welding, ASME B31.4 and B31.8 for design and operation, ASME B31.8S for integrity management, NACE/AMPP standards for corrosion control, and the applicable regulator\'s integrity management requirements.',
    distinct:
      'Integrity decisions rest on fusing in-line inspection data with cathodic protection and coating survey data and with dig verification. The recurring failure is treating each dataset separately, which produces dig programmes that verify the tool rather than manage the risk.',
  },
  'power-generation': {
    name: 'Power generation',
    assets: 'boilers and waterwall tubing, superheaters and reheaters, headers and steam piping, HRSGs on combined-cycle plant, turbines and rotors, condensers and feedwater heaters, and balance-of-plant piping',
    mechanisms:
      'Creep and creep-fatigue in high-temperature headers and tubing; thermal fatigue at attachments and transitions; flow-accelerated corrosion in wet steam and feedwater; hydrogen damage and caustic gouging under deposits; dissimilar-metal weld failures; and erosion from ash and steam.',
    methods: 'Ultrasonic and phased array for wall loss and creep damage, replication metallography for microstructural assessment, boroscopy of internals, eddy current for condenser tubing, magnetic particle on welds and attachments, and hardness testing for material degradation.',
    codes: 'ASME Section I for power boilers, ASME B31.1 for power piping, ASME Section V for the examination methods, ASME PCC-2 for repair, and the National Board Inspection Code for in-service work.',
    distinct:
      'Failure economics dominate the inspection plan: a forced outage on a large unit costs more per day than most inspection programmes cost per year, so scope is set by consequence rather than by uniform coverage.',
  },
};

const INSPECTION_TYPES = {
  'corrosion-inspection': {
    name: 'Corrosion inspection',
    what: 'Corrosion inspection quantifies metal loss and identifies the mechanism causing it, so that remaining life and the next inspection date can be calculated rather than estimated. It combines thickness measurement at defined locations with examination targeted at the damage mechanisms credible for the service.',
    scope: ['Ultrasonic thickness measurement at corrosion monitoring locations with computed corrosion rates', 'Corrosion mapping by encoded phased array or automated ultrasonic scanning where localised loss is expected', 'Profile radiography for small-bore and insulated lines without insulation removal', 'Pulsed eddy current screening for corrosion under insulation', 'Damage-mechanism assignment per API RP 571 against the actual process service'],
    codes: 'API 510, API 570 and API 653 for in-service inspection intervals, API RP 571 for damage mechanisms, API 579-1/ASME FFS-1 for fitness-for-service, and ASME Section V Article 5 for thickness measurement technique.',
  },
  'pipeline-inspection': {
    name: 'Pipeline inspection',
    what: 'Pipeline inspection establishes the condition of a line along its length, combining in-line inspection where the line is piggable with direct assessment where it is not, and verifying both against excavation findings.',
    scope: ['In-line inspection data review and dig prioritisation from MFL, ultrasonic and crack-detection runs', 'Guided wave screening of cased crossings and inaccessible sections', 'Dig verification with ultrasonic wall measurement and magnetic particle crack examination', 'Coating and cathodic protection survey interpretation', 'Girth weld examination by automated ultrasonic testing or radiography on new construction'],
    codes: 'ASME B31.4 and B31.8 for design and operation, B31.8S for integrity management, API 1104 for welding, and the applicable regulator\'s integrity management rule.',
  },
  'tank-inspection': {
    name: 'Tank inspection',
    what: 'Aboveground storage tank inspection covers the shell, floor, roof and appurtenances, establishing minimum thickness by course, floor condition, settlement, and the resulting inspection intervals under API 653.',
    scope: ['External inspection of shell, roof, appurtenances, foundation and containment', 'Ultrasonic shell thickness by course with minimum-required-thickness calculation', 'Floor scanning by magnetic flux leakage with ultrasonic prove-up of indications', 'Settlement survey and evaluation against API 653 Annex B criteria', 'Vacuum box testing of floor welds and, where required, hydrostatic testing after repair'],
    codes: 'API 653 for inspection, repair, alteration and reconstruction, API 650 as the construction code, API 575 for practice, and API 579 where fitness-for-service assessment is required.',
  },
  'weld-inspection': {
    name: 'Weld inspection',
    what: 'Weld inspection verifies that a joint meets the acceptance criteria of the governing construction code, using methods selected for the defect types credible in that joint configuration and material.',
    scope: ['Visual examination of profile, undercut, reinforcement and surface condition to a written procedure', 'Radiography or ultrasonic examination of weld volume, including phased array and TOFD on thicker sections', 'Magnetic particle or penetrant examination for surface-breaking indications', 'Welder and procedure qualification record verification against ASME Section IX', 'Positive material identification where material substitution is a risk'],
    codes: 'ASME Section VIII and Section IX, ASME B31.1 and B31.3, AWS D1.1, API 1104, and ASME Section V for the examination methods themselves.',
  },
};

const CERT_TRAINING = {
  'api-510': { name: 'API 510 Pressure Vessel Inspector', refs: 'API 510, ASME Section VIII Division 1, ASME Section V, ASME Section IX, API 571, API 576, API 577 and API 572', focus: 'inspection intervals, minimum thickness and MAWP calculation, repair and alteration rules, and rerating' },
  'api-570': { name: 'API 570 Piping Inspector', refs: 'API 570, ASME B31.3, ASME Section V, ASME Section IX, API 574, API 577 and API 578', focus: 'piping classes and inspection intervals, CML placement and spacing, injection points and dead legs, and minimum thickness calculation' },
  'api-653': { name: 'API 653 Aboveground Storage Tank Inspector', refs: 'API 653, API 650, API 575, ASME Section V and ASME Section IX', focus: 'minimum shell thickness by course, floor evaluation and MFL interpretation, settlement criteria, and repair, alteration and reconstruction rules' },
  cwi: { name: 'AWS Certified Welding Inspector', refs: 'AWS D1.1, AWS QC1, AWS B5.1 and the code book supplied for Part C', focus: 'visual inspection of welds, welding processes and discontinuities, code clause navigation under time pressure, and the practical Part B examination using a supplied specification' },
};

/* ────────────────────────────────────────────────────────────────────────────
 * Generators
 * ────────────────────────────────────────────────────────────────────────── */

const NAV = `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Free Consultation</a></nav></header>`;

const cityBlock = (city, slug) => {
  const ctx = CITY_CONTEXT[slug];
  return ctx
    ? `<h2>The ${esc(city)} asset base</h2><p>${esc(ctx)}</p>`
    : `<h2>Working in ${esc(city)}</h2><p>Scope in ${esc(city)} is set by the local asset base, the client's own vendor-approval regime and the inspection intervals required by the governing in-service code. Mobilisation, permit and access planning are agreed before the crew travels, because on most sites those constraints decide the cost of a campaign more than the examination itself does.</p>`;
};

const evidenceBlock = `<h2>How the work is controlled</h2>
      <p>Every examination carries its own evidence chain: the technician's certification for the method and level under ASNT SNT-TC-1A or ISO 9712, current on the day of inspection; the calibration status of instruments, probes, wedges and reference blocks, traceable under ISO 17025; and the revision of the procedure and technique sheet in force at the time. An ASNT NDT Level III reviews and signs the final disposition. That bundle is what a client or accreditation audit examines, and it is recorded as the work happens rather than assembled afterwards.</p>`;

export function upgradeIndustryPages(routes, append) {
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(/^\/industry\/([a-z-]+?)-ndt-([a-z0-9-]+)$/);
    if (!m) continue;
    const sector = SECTORS[m[1]];
    if (!sector) continue;
    if ((r.bodyContent || '').length > 5200) continue;
    const city = label(m[2]);

    append(r, `
    <section aria-label="${esc(sector.name)} NDT in ${esc(city)}">
      <h2>What ${esc(sector.name.toLowerCase())} inspection actually covers</h2>
      <p>Assets in scope: ${esc(sector.assets)}.</p>

      <h2>Damage mechanisms that drive the inspection plan</h2>
      <p>${esc(sector.mechanisms)}</p>

      <h2>Methods applied</h2>
      <p>${esc(sector.methods)}</p>

      <h2>Governing codes and standards</h2>
      <p>${esc(sector.codes)}</p>

      <h2>What makes this sector different</h2>
      <p>${esc(sector.distinct)}</p>

      ${cityBlock(city, m[2])}

      ${evidenceBlock}

      <p>Related: <a href="/consulting">ASNT Level III consulting</a> · <a href="/training">NDT training and certification</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a>. <a href="/contact">Request a quote for ${esc(city)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

export function upgradeInspectionPages(routes, append) {
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(/^\/inspection\/([a-z-]+-inspection)-services-([a-z0-9-]+)$/);
    if (!m) continue;
    const t = INSPECTION_TYPES[m[1]];
    if (!t) continue;
    if ((r.bodyContent || '').length > 5200) continue;
    const city = label(m[2]);

    append(r, `
    <section aria-label="${esc(t.name)} in ${esc(city)}">
      <h2>What ${esc(t.name.toLowerCase())} involves</h2>
      <p>${esc(t.what)}</p>

      <h2>Scope of work</h2>
      ${ul(t.scope)}

      <h2>Governing codes</h2>
      <p>${esc(t.codes)}</p>

      ${cityBlock(city, m[2])}

      ${evidenceBlock}

      <h2>What you receive</h2>
      ${ul([
        'A report in your required format, with findings located against the component and, where relevant, against a persistent corrosion monitoring location so trends stay continuous between campaigns',
        'Raw data in the instrument-native format plus an open export, so the dataset outlives any single supplier relationship',
        'The procedure revision, technician certification state and instrument calibration status applicable at the time of examination',
        'Where a finding affects continued service, the specific code clause governing the acceptance decision',
      ])}

      <p>Related: <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/digital-twins">digital twin for asset integrity</a>. <a href="/contact">Request a quote for ${esc(city)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

export function upgradeCertTrainingPages(routes, append) {
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(/^\/training\/([a-z0-9-]+)-training-([a-z0-9-]+)$/);
    if (!m) continue;
    const c = CERT_TRAINING[m[1]];
    if (!c) continue;
    if ((r.bodyContent || '').length > 5200) continue;
    const city = label(m[2]);

    append(r, `
    <section aria-label="${esc(c.name)} preparation in ${esc(city)}">
      <h2>What the ${esc(c.name)} examination tests</h2>
      <p>The examination is built around ${esc(c.refs)}. Preparation concentrates on ${esc(c.focus)} — and, for the open-book portion, on locating the governing clause quickly, which is as much a practised skill as a knowledge one.</p>

      <h2>How the preparation is structured</h2>
      ${ul([
        'Code familiarisation and tabbing, so the reference set is navigable under time pressure rather than merely owned',
        'Calculation drilling until the routine problems are automatic — this is consistently the strongest predictor of passing',
        'Content-area teaching against the current body of knowledge, including any changes from the previous edition',
        'Timed full-length practice examinations, followed by targeted remediation of the weak areas they expose',
        'Guidance on eligibility documentation and employer attestation, which delays more candidates than the examination itself does',
      ])}

      <h2>Delivery in ${esc(city)}</h2>
      <p>Programmes run as public cohorts, as on-site corporate cohorts at your own facility where several candidates are preparing together, and as blended delivery with theory completed online and the intensive block in person. On-site delivery is usually the better economics above about six candidates, and it lets the worked examples use your own equipment and asset types.</p>

      ${cityBlock(city, m[2])}

      <h2>After certification</h2>
      <p>Certification is the beginning of the responsibility rather than the end of the study. Inspectors holding this credential are generally expected to own an inspection programme — interval setting, CML register quality, evidence retention and audit defence — which are programme skills rather than examination skills.</p>

      <p>Related: <a href="/training">all NDT training</a> · <a href="/asnt-certification">ASNT certification pathways</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/inspection-management-software">inspection management software</a>. <a href="/contact">Ask about the next cohort in ${esc(city)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Evidence-based re-index decision
 * ────────────────────────────────────────────────────────────────────────────
 * Replaces the 2026-05-16 hard-coded list with a measurement taken against the
 * content that will actually ship. A page is re-indexed only if it is BOTH
 * substantial and genuinely differentiated from its own family siblings.
 * Everything else keeps `noindex, follow` — the original doorway-page concern
 * was correct and is preserved, just enforced by evidence instead of a snapshot.
 * ────────────────────────────────────────────────────────────────────────── */

const textOf = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

/** 8-word shingles, sampled, to keep the comparison cheap across thousands of pages. */
function shingles(text) {
  const words = text.split(' ').filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 8 <= words.length; i += 3) set.add(words.slice(i, i + 8).join(' '));
  return set;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const s of small) if (large.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

/** Family key: pages that compete with each other for the same intent. */
function familyOf(path) {
  const m =
    path.match(/^\/(industry)\/([a-z-]+?)-ndt-/) ||
    path.match(/^\/(inspection)\/([a-z-]+-inspection)-services-/) ||
    path.match(/^\/(services)\/([a-z-]+?)-inspection-/) ||
    path.match(/^\/(training)\/([a-z0-9-]+?)-training-/);
  if (m) return `${m[1]}:${m[2]}`;
  if (/^\/ndt-erp-/.test(path)) return 'ndt-erp';
  if (/^\/digital-twin-/.test(path)) return 'digital-twin';
  if (/^\/ndt-training-/.test(path)) return 'ndt-training';
  if (/^\/ndt-consulting-/.test(path)) return 'ndt-consulting';
  return null;
}

/**
 * @param routes  final route list
 * @param demand  GSC snapshot keyed by path
 * @param opts.minWords          substance floor for re-indexing
 * @param opts.maxSimilarity     above this, the page is a near-duplicate and stays noindex
 */
/**
 * Fallback copy emitted by cityBlock() when dt-city-data has no research for a
 * slug. Its presence means the page has NO city-specific substance, only the
 * shared sector/method content — exactly the doorway-page shape. Such pages stay
 * noindexed however long they are.
 */
const GENERIC_CITY_MARKER = 'is set by the local asset base';

/** Measured pairwise similarity thresholds, calibrated against the shipped corpus:
 *  median intra-family similarity runs 0.02-0.20 for families carrying real
 *  per-city research, and 0.41-0.54 for families that do not. 0.55 separates the
 *  two populations rather than being an arbitrary round number. */
export function reindexQualifiedPages(routes, demand = {}, { minWords = 650, maxSimilarity = 0.55 } = {}) {
  const candidates = routes.filter((r) => r.noindex && !r.path.includes(':') && r.bodyContent);
  if (!candidates.length) return { reindexed: 0, kept: 0, reasons: {} };

  // Build family buckets from ALL routes so a noindexed page is compared with
  // its indexed siblings too — that is the comparison that actually matters.
  const families = new Map();
  for (const r of routes) {
    if (r.path.includes(':') || !r.bodyContent) continue;
    const f = familyOf(r.path);
    if (!f) continue;
    if (!families.has(f)) families.set(f, []);
    families.get(f).push(r);
  }

  const fingerprints = new Map();
  const fp = (r) => {
    if (!fingerprints.has(r.path)) fingerprints.set(r.path, shingles(textOf(r.bodyContent)));
    return fingerprints.get(r.path);
  };

  let reindexed = 0;
  let kept = 0;
  const reasons = { thin: 0, duplicate: 0, generic: 0, noFamily: 0, ok: 0 };

  for (const r of candidates) {
    const words = textOf(r.bodyContent).split(' ').filter(Boolean).length;
    if (words < minWords) { kept++; reasons.thin++; continue; }

    // A city-permutation page with no city-specific research is a template with
    // a name swapped in, regardless of word count. Keep it noindexed.
    const isCityPermutation = /^\/(industry|inspection|services|training)\//.test(r.path)
      || /^\/(ndt-erp|digital-twin|ndt-training|ndt-consulting|3d-scanning)-/.test(r.path);
    if (isCityPermutation && r.bodyContent.includes(GENERIC_CITY_MARKER)) {
      kept++; reasons.generic = (reasons.generic || 0) + 1; continue;
    }

    const fam = familyOf(r.path);
    const siblings = (fam ? families.get(fam) : null)?.filter((x) => x.path !== r.path) || [];
    if (!siblings.length) {
      // No family to be a duplicate of. Substantial and standalone — index it.
      delete r.noindex; delete r.noindexFollow;
      reindexed++; reasons.noFamily++;
      continue;
    }

    // Compare against a bounded sample; families run to hundreds of pages.
    const sample = siblings.length > 25 ? siblings.filter((_, i) => i % Math.ceil(siblings.length / 25) === 0) : siblings;
    const mine = fp(r);
    let maxSim = 0;
    for (const s of sample) {
      const sim = jaccard(mine, fp(s));
      if (sim > maxSim) maxSim = sim;
      if (maxSim >= maxSimilarity) break;
    }

    if (maxSim >= maxSimilarity) { kept++; reasons.duplicate++; continue; }

    delete r.noindex; delete r.noindexFollow;
    reindexed++; reasons.ok++;
  }

  return { reindexed, kept, reasons };
}
