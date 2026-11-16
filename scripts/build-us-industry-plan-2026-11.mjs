// Writes src/data/us-industry-ndt-2026-11/_pages.json — the page plan for the US MT/PT/UT industry and
// job pages (2026-11-17). Run once; the JSON is the source the validator, the writers and the build read.
//
// Owner, 2026-11-16: "further refine our inspection services for all industries (MT, PT & UT) across all
// cities in USA, and scale it large with all segments". 2026-11-17: "perform competitor analysis, to further
// refine, and improve ranking & position". Owner chose (AskUserQuestion) "Industry + job pages": rewrite the
// 39 MT/PT/UT × industry pages for the US, add US industries and job pages, link them from the 228 city pages.
//
// Evidence (GSC, USA, 90 days to 2026-11-14, country-filtered = shape only): 484 queries name ultrasonic,
// magnetic or penetrant (UT 3,144 impressions, MT 928, PT 433; 1 click). ~11% name an industry or job (weld
// 218, pipe 180, pipeline 70, vessels 70, aerospace 34, structural 32, tank 22, rail 15, marine 15); 4% name a
// US place. Worldwide, the method × industry pages earn impressions at p40–80 (UT pipeline 339, UT aviation 149,
// UT fabrication 118, MT fabrication 116, PT refining 98) on ~600 words of generic copy.
//
// Competitors (2026-11-17 SERP review): ATS (atslab.com) owns pipe/pipeline UT terms with ~700-word job pages
// in a dense internal cluster; Mistras/Acuren UT pages 350–600 words, no codes or report detail, no FAQ; IIA
// industry hub lists methods + API codes, no FAQ; Element PT 1,200 words with spec lists and a 4-question FAQ
// including "when PT is the wrong method". Gaps we fill: job-specific technique, US codes per job, what the
// report contains, what to send for a quote, honest limits, visible FAQ, links to US city pages.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';

const CITY_SLUGS = new Set(JSON.parse(readFileSync('src/data/us-conventional-ndt-2026-11/_cities.json', 'utf8')).cities.map((c) => c.slug));
const M = { ut: 'ultrasonic-testing', mt: 'magnetic-particle-testing', pt: 'penetrant-testing' };

// US context per industry: drivers (regulators, codes), typical assets, and the US city pages to link.
const INDUSTRIES = {
  refining: { name: 'Refining', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'OSHA PSM 29 CFR 1910.119 mechanical integrity; API 510, 570, 653, 574 and 571 (damage mechanisms); ASME B31.3; NBIC for repairs; turnarounds; crude, FCC, hydroprocessing, alky, sour water, amine units; wet H2S cracking, HTHA screening is not ours, CUI, erosion.',
    cities: ['houston', 'beaumont', 'baton-rouge', 'lake-charles', 'corpus-christi', 'los-angeles', 'philadelphia', 'toledo', 'gary', 'tulsa', 'salt-lake-city', 'joliet'] },
  petrochemical: { name: 'Petrochemical', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'OSHA PSM and EPA RMP (40 CFR 68); ASME Section VIII vessels, B31.3 piping, API 510/570 often adopted; ethylene crackers (furnace coils are not ours), polymer plants, aromatics; Gulf Coast chemical corridor between Houston and Baton Rouge; stainless and carbon steel mix.',
    cities: ['houston', 'beaumont', 'baton-rouge', 'lake-charles', 'corpus-christi', 'new-orleans', 'louisville', 'chicago'] },
  lng: { name: 'LNG', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'PHMSA 49 CFR Part 193 and NFPA 59A for LNG facilities; FERC-regulated export terminals; API 620 and 625 tanks; cryogenic austenitic stainless and 9% nickel steel (MT does not work on austenitic stainless; 9% Ni is ferromagnetic but residual magnetism matters); B31.3 cryogenic piping; Gulf Coast liquefaction trains.',
    cities: ['corpus-christi', 'lake-charles', 'beaumont', 'houston', 'savannah', 'baltimore'] },
  offshore: { name: 'Offshore', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'BSEE 30 CFR Part 250 in the Gulf of Mexico (Outer Continental Shelf); API RP 2A and structural integrity management; AWS D1.1 structural welds; topsides piping B31.3; cranes API Spec 2C / API RP 2D; onshore fabrication yards and supply bases; splash zone corrosion; helidecks.',
    cities: ['houston', 'new-orleans', 'mobile-alabama', 'lake-charles', 'corpus-christi', 'pascagoula'] },
  pipeline: { name: 'Pipeline', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'PHMSA 49 CFR Parts 192 (gas) and 195 (liquids); API 1104 girth welds; ASME B31.4 and B31.8; integrity digs after in-line inspection (Atlantis does not run in-line tools), corrosion and dent assessment data for the operator engineer; compressor and pump stations; operator qualification (OQ) rules; owner /pipeline-inspection-services is the general owner page.',
    cities: ['houston', 'tulsa', 'midland', 'oklahoma-city', 'kansas-city', 'denver', 'shreveport', 'pittsburgh', 'omaha'] },
  marine: { name: 'Marine & Shipbuilding', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'US Coast Guard rules (46 CFR) and class society rules for commercial ships; NAVSEA T9074-AS-GIB-010/271 for Navy work (do not claim NAVSEA qualification); hull, deck and tank welds; port cranes; TWIC cards for port and terminal access; shipyards on the Gulf, Atlantic and Pacific coasts. For class-credited ship thickness gauging Atlantis is in the process of obtaining UR Z17 approval from DNV, Lloyd\'s Register and ABS (link /maritime).',
    cities: ['norfolk', 'pascagoula', 'mobile-alabama', 'san-diego', 'seattle', 'tacoma', 'new-orleans', 'jacksonville', 'charleston-south-carolina', 'baltimore', 'portland', 'philadelphia'] },
  aviation: { name: 'Aviation & Aerospace', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'FAA 14 CFR Parts 43 and 145 (repair stations sign off airworthiness, Atlantis does not); prime and OEM flow-down specifications; ASTM E1444 (MT) and ASTM E1417 (PT) process standards; manufacturers and suppliers in Wichita, Puget Sound, Connecticut, South Carolina, Georgia, Texas, Alabama; ground support equipment, tooling, structural components; employer written practice on SNT-TC-1A aligned to the customer flow-down. Never write NAS 410 or Nadcap.',
    cities: ['wichita', 'seattle', 'hartford', 'charleston-south-carolina', 'savannah', 'fort-worth', 'oklahoma-city', 'san-antonio', 'huntsville', 'cincinnati', 'tucson', 'phoenix'] },
  power: { name: 'Power Generation', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'ASME Section I boilers and B31.1 power piping; NBIC and state boiler inspectors; outages; HRSGs in combined cycle plants; flow-accelerated corrosion programs (EPRI guidance); turbine and generator components; hydro penstocks; nuclear balance-of-plant only where the owner allows (do not claim 10 CFR 50 Appendix B qualification).',
    cities: ['charlotte', 'knoxville', 'atlanta', 'birmingham', 'phoenix', 'chicago', 'pittsburgh', 'tampa', 'omaha', 'kansas-city', 'cincinnati', 'columbus-ohio'] },
  mining: { name: 'Mining & Minerals', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'MSHA 30 CFR Parts 56, 57, 75 and 77; haul trucks, shovel and dragline booms, crushers, mills, conveyor pulleys and structures; copper in Arizona and Utah, iron ore in Minnesota, coal in Alabama, gold and zinc in Alaska; wear and fatigue cracking; remote sites.',
    cities: ['tucson', 'salt-lake-city', 'phoenix', 'spokane', 'anchorage', 'birmingham', 'minneapolis', 'el-paso', 'albuquerque'] },
  fabrication: { name: 'Fabrication & Welding', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'AWS D1.1 structural steel, ASME Section VIII shop vessels, B31.3 spool fabrication, API 650 tanks; fabricator QC vs owner QA; hold points; customer-witnessed examinations; welder qualification support; owner page /weld-inspection.',
    cities: ['houston', 'tulsa', 'pittsburgh', 'chicago', 'milwaukee', 'peoria', 'cleveland', 'birmingham', 'beaumont', 'oklahoma-city', 'joliet'] },
  automotive: { name: 'Automotive Manufacturing', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'Customer-specific requirements under IATF 16949 quality systems (the plant\'s system, not ours); press and die tooling, forgings, castings, weld fixtures, robot cells; plant shutdown weeks; Detroit, Ohio, Indiana, Kentucky, Tennessee, South Carolina and Alabama assembly and supplier plants.',
    cities: ['detroit', 'toledo', 'grand-rapids', 'fort-wayne', 'columbus-ohio', 'louisville', 'greenville-south-carolina', 'nashville', 'birmingham', 'indianapolis'] },
  steel: { name: 'Steel & Primary Metals', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'Integrated and mini mills: ladles, ladle hooks and trunnions, overhead cranes (ASME B30.2, OSHA 1910.179), rolls, shafts, gearboxes, furnace structures, caster segments; outages; heat and scale; aluminum smelting and forging also count here.',
    cities: ['gary', 'pittsburgh', 'cleveland', 'birmingham', 'fort-wayne', 'chicago', 'toledo', 'buffalo'] },
  rail: { name: 'Rail', methods: ['ut', 'mt', 'pt'], existing: true,
    context: 'FRA rules 49 CFR Parts 213, 215, 229 and 231; AAR Manual of Standards and Recommended Practices; freight car and locomotive shops; axles, wheels, couplers, bolsters, side frames, bridges; rail flaw detection vehicles are specialist work (not ours).',
    cities: ['chicago', 'kansas-city', 'omaha', 'fort-worth', 'jacksonville', 'atlanta', 'norfolk', 'louisville', 'st-louis', 'birmingham', 'memphis'] },
  oilfield: { name: 'Oilfield & Drilling', methods: ['ut', 'mt', 'pt'], existing: false,
    context: 'Onshore upstream: API RP 7G-2 (drill stem element inspection), API Spec 5CT / 5DP (OCTG), API RP 4G (drilling and well servicing structures), API RP 8B (hoisting equipment inspection), API Spec 7K, production equipment and API 12F/12D tanks; state oil and gas regulators (Texas Railroad Commission, Oklahoma Corporation Commission, CalGEM); Permian, Eagle Ford, Haynesville, Anadarko, DJ, Bakken, Kern County, North Slope. DS-1 is a proprietary standard: mention only as a customer-specified standard.',
    cities: ['midland', 'bakersfield', 'oklahoma-city', 'shreveport', 'denver', 'san-antonio', 'tulsa', 'anchorage', 'houston'] },
  chemical: { name: 'Chemical Processing', methods: ['ut', 'mt', 'pt'], existing: false,
    context: 'Specialty and commodity chemicals, fertilizers, chlor-alkali, industrial gases; OSHA PSM and EPA RMP; ASME Section VIII vessels, B31.3 piping, NBIC repairs, API 510/570 where adopted; stainless, nickel alloys and lined equipment; chloride stress corrosion cracking, caustic cracking, erosion; differs from petrochemical by smaller batch plants and corrosive service.',
    cities: ['houston', 'baton-rouge', 'lake-charles', 'louisville', 'memphis', 'buffalo', 'newark', 'philadelphia', 'cincinnati'] },
  'pulp-paper': { name: 'Pulp & Paper', methods: ['ut', 'mt', 'pt'], existing: false,
    context: 'Kraft mills: continuous and batch digesters, recovery boilers (BLRBAC guidance, ASME Section I, NBIC, state boiler law), power boilers, black liquor tanks and piping, paper machine dryer cans (pressure vessels), causticizing; TAPPI technical information papers for digester and tank inspection; caustic stress corrosion cracking, thinning; annual mill outages; Southeast and Pacific Northwest mills.',
    cities: ['mobile-alabama', 'savannah', 'jacksonville', 'tacoma', 'spokane', 'shreveport', 'memphis', 'portland', 'richmond-virginia', 'charleston-south-carolina'] },
  wind: { name: 'Wind Energy', methods: ['ut', 'mt', 'pt'], existing: false,
    context: 'Onshore wind: tower flange and circumferential welds (AWS D1.1 and manufacturer specifications), anchor bolts and tower bolts (UT for bolt length/cracks), main shafts, gearbox and bearing housings, nacelle frames; blade inspection is composite work (not ours); rope access or crane access set by the site; Great Plains and Texas wind belt; tower fabrication plants.',
    cities: ['omaha', 'wichita', 'oklahoma-city', 'denver', 'midland', 'tulsa', 'minneapolis', 'albuquerque', 'spokane'] },
  'water-utilities': { name: 'Water & Wastewater Utilities', methods: ['ut', 'mt', 'pt'], existing: false,
    context: 'AWWA D100 welded steel water tanks, AWWA C200 and Manual M11 steel water pipe, penstocks and large-diameter mains, pump station headers, clarifier and digester steelwork; municipal and regional utilities; EPA Safe Drinking Water Act context; coating and lining work; thickness surveys before rehabilitation; Southwest water infrastructure.',
    cities: ['phoenix', 'tucson', 'los-angeles', 'san-diego', 'denver', 'salt-lake-city', 'el-paso', 'albuquerque', 'atlanta', 'dallas', 'austin'] },
  'food-pharma': { name: 'Food, Beverage & Pharmaceutical', methods: ['ut', 'pt'], existing: false,
    context: 'ASME BPE (bioprocessing equipment), 3-A Sanitary Standards, FDA cGMP (21 CFR 210/211 for drugs); austenitic stainless 316L tanks, process piping and orbital welds, jacketed vessels, CIP systems, clean steam; PT with low-halogen, low-sulfur materials and full post-cleaning; UT thickness on vessel shells and jackets. No MT page: austenitic stainless is not ferromagnetic.',
    cities: ['indianapolis', 'philadelphia', 'newark', 'boston', 'chicago', 'omaha', 'san-francisco', 'memphis'] },
};

// Job pages: method-specific, national, US codes. "owner" = the existing general page to link up to.
const JOBS = [
  { slug: 'ultrasonic-pipe-thickness-testing', method: 'ut', name: 'Ultrasonic pipe thickness testing',
    queries: ['ultrasonic pipe thickness testing', 'ut pipe testing', 'ultrasonic pipe inspection', 'ultrasonic pipe testing', 'pipe wall thickness testing'],
    context: 'API 570 and API 574 (t-min, CMLs, corrosion rate inputs), ASME B31.3 and B31.1, ASME Section V Article 23 (SE-797), ASTM E797; straight-beam dual-element gauges, step-block calibration, high-temperature readings, readings through coating only where the gauge mode is verified, CML grids, data for the owner engineer/AI who computes remaining life.',
    industries: ['refining', 'petrochemical', 'chemical', 'power', 'pulp-paper', 'water-utilities'], owner: '/inspection/piping-circuit-inspection-cml',
    cities: ['houston', 'baton-rouge', 'beaumont', 'chicago', 'philadelphia', 'tulsa', 'los-angeles', 'pittsburgh'] },
  { slug: 'ultrasonic-weld-inspection', method: 'ut', name: 'Ultrasonic weld inspection',
    queries: ['ultrasonic weld inspection', 'ultrasonic weld testing', 'ut weld inspection', 'shear wave ut', 'angle beam ultrasonic testing'],
    context: 'Manual angle-beam (shear wave) UT of groove welds: AWS D1.1 Clause 8 Part F and AWS D1.5 for bridges, ASME Section V Article 4, ASME B31.3 para 344.6, API 1104. ASME Section VIII allows UT in place of RT only under conditions (Code Case 2235 / Appendix 12) that need computerized imaging techniques Atlantis does not offer on these pages, so say that plainly. Reference levels, scanning patterns, sizing limits, coverage.',
    industries: ['fabrication', 'steel', 'offshore', 'marine', 'wind', 'pipeline'], owner: '/weld-inspection',
    cities: ['houston', 'pittsburgh', 'chicago', 'tulsa', 'cleveland', 'birmingham', 'milwaukee', 'norfolk'] },
  { slug: 'ultrasonic-boiler-tube-inspection', method: 'ut', name: 'Ultrasonic boiler tube thickness testing',
    queries: ['boiler tube thickness testing', 'boiler tube ut inspection', 'ultrasonic boiler tube inspection', 'waterwall tube thickness'],
    context: 'Thickness surveys of waterwall, superheater, reheater and economizer tubes and HRSG tubes during outages; ASME Section I, NBIC Part 2, state boiler inspectors, EPRI boiler tube failure guidance; fireside erosion, sootblower erosion, corrosion fatigue context; grid layouts, scaffold and access, surface prep of tubes, high-temperature not applicable during outage; recovery boiler floor and wall tubes in pulp mills under BLRBAC practices (composite tubes need specialist techniques, not ours). Oxide scale measurement is a specialist technique, not offered here.',
    industries: ['power', 'pulp-paper', 'chemical', 'refining'], owner: '/inspection/ndt-inspection-services',
    cities: ['charlotte', 'knoxville', 'birmingham', 'pittsburgh', 'mobile-alabama', 'savannah', 'tampa', 'kansas-city'] },
  { slug: 'ultrasonic-testing-castings-forgings', method: 'ut', name: 'Ultrasonic testing of castings and forgings',
    queries: ['ultrasonic testing of castings', 'ultrasonic inspection of castings', 'ultrasonic testing forgings', 'astm a388 ultrasonic', 'astm a609 ultrasonic'],
    context: 'ASTM A388 / ASME SA-388 (heavy steel forgings), ASTM A609 / SA-609 (carbon and low-alloy steel castings), ASTM E114, ASME Section V Article 23; straight-beam and angle-beam scanning, back-reflection and flat-bottom-hole references, attenuation and coarse grain in castings, quality levels set by the purchase order; shop and foundry work, receiving inspection, shafts and rings.',
    industries: ['steel', 'automotive', 'power', 'mining', 'oilfield', 'rail'], owner: '/ultrasonic-testing',
    cities: ['pittsburgh', 'cleveland', 'milwaukee', 'birmingham', 'detroit', 'peoria', 'houston', 'chicago'] },
  { slug: 'magnetic-particle-weld-inspection', method: 'mt', name: 'Magnetic particle weld inspection',
    queries: ['magnetic particle weld inspection', 'mpi of welds', 'magnetic particle testing of welds', 'mt weld inspection'],
    context: 'ASME Section V Article 7, ASTM E709, AWS D1.1 Clause 8, ASME B31.3 para 344.3, API 1104; AC and DC yokes, lifting power checks, prods (arc strike risk), field direction and two perpendicular magnetizations, wet fluorescent vs visible dry powder, pie gauge / field indicators, lighting and black light intensity, demagnetization when required; root, hot pass and final weld checks; cracks at toes; undercut is VT.',
    industries: ['fabrication', 'pipeline', 'offshore', 'marine', 'steel', 'oilfield'], owner: '/weld-inspection',
    cities: ['houston', 'tulsa', 'pittsburgh', 'chicago', 'birmingham', 'peoria', 'cleveland', 'beaumont'] },
  { slug: 'magnetic-particle-inspection-lifting-equipment', method: 'mt', name: 'Magnetic particle inspection of lifting equipment',
    queries: ['crane hook inspection', 'crane hook magnetic particle inspection', 'lifting equipment ndt inspection', 'shackle inspection mpi'],
    context: 'Crane hooks, shackles, eye bolts, padeyes and lifting lugs, spreader bars and below-the-hook devices, crane sheaves and pins; ASME B30.10 (hooks), B30.26 (rigging hardware), B30.20 (below-the-hook lifting devices), ASME BTH-1; OSHA 29 CFR 1910.179 (overhead cranes), 1910.184 (slings), 1926 Subpart CC; NDT is set by the owner program, the manufacturer or a qualified person (the standards call for periodic inspection; do not claim they always mandate MT); throat opening and wear are visual measurements; Atlantis reports indications, the owner or qualified person decides removal from service.',
    industries: ['steel', 'offshore', 'marine', 'mining', 'oilfield', 'fabrication'], owner: '/magnetic-particle-testing',
    cities: ['houston', 'gary', 'pittsburgh', 'new-orleans', 'mobile-alabama', 'norfolk', 'chicago', 'birmingham'] },
  { slug: 'magnetic-particle-inspection-castings-forgings', method: 'mt', name: 'Magnetic particle inspection of castings and forgings',
    queries: ['magnetic particle inspection castings', 'magnetic particle inspection forgings', 'astm a275', 'mss sp-53'],
    context: 'ASTM E1444 and E709, ASTM A275 / ASME SA-275 (MT of steel forgings), MSS SP-53 (MT of steel castings and forgings for valves, flanges and fittings), ASTM E125 reference photographs for casting indications, ASME Section V Article 7; bench units vs portable yokes for field and receiving inspection, head shot and coil shot concepts for parts, residual vs continuous method; valve bodies, flanges, shafts, gears, hooks.',
    industries: ['automotive', 'steel', 'oilfield', 'mining', 'rail', 'power'], owner: '/magnetic-particle-testing',
    cities: ['detroit', 'pittsburgh', 'milwaukee', 'birmingham', 'houston', 'cleveland', 'peoria', 'fort-wayne'] },
  { slug: 'magnetic-particle-inspection-structural-steel', method: 'mt', name: 'Magnetic particle inspection of structural steel and bridges',
    queries: ['magnetic particle testing structural steel', 'bridge magnetic particle inspection', 'mt testing bridges', 'structural weld mt'],
    context: 'AWS D1.1 for buildings and structures, AWS D1.5 for bridges (state DOT specifications), FHWA National Bridge Inspection Standards (23 CFR 650 Subpart C) and fracture-critical members, AISC 360 Chapter N quality control and quality assurance roles; field MT on fillet and groove welds, coped beams, connection plates, crane runway girders; the special inspector or the engineer of record decides acceptance on building work, and Atlantis does not offer IBC special inspection agency services.',
    industries: ['fabrication', 'steel', 'rail', 'wind'], owner: '/weld-inspection',
    cities: ['pittsburgh', 'chicago', 'new-york', 'philadelphia', 'cleveland', 'kansas-city', 'st-louis', 'minneapolis'] },
  { slug: 'penetrant-testing-welds', method: 'pt', name: 'Dye penetrant weld inspection',
    queries: ['dye penetrant weld inspection', 'liquid penetrant testing of welds', 'pt weld inspection', 'dye penetrant test welding'],
    context: 'ASME Section V Article 6, ASTM E165 (field) and E1417 (process), AWS D1.1 Clause 8, ASME B31.3 para 344.4, API 1104; stainless, aluminum and nickel alloy welds where MT cannot be used; solvent-removable visible dye in the field, fluorescent where specified; temperature range and qualification outside it (Article 6 standard range 40–125 °F / 5–52 °C), dwell times, removal, developer, interpretation and bleed-out, root pass and back-gouge checks.',
    industries: ['fabrication', 'chemical', 'food-pharma', 'lng', 'aviation', 'petrochemical'], owner: '/weld-inspection',
    cities: ['houston', 'baton-rouge', 'chicago', 'philadelphia', 'newark', 'seattle', 'indianapolis', 'cleveland'] },
  { slug: 'penetrant-testing-stainless-steel', method: 'pt', name: 'Penetrant testing of stainless steel and nickel alloys',
    queries: ['penetrant testing stainless steel', 'dye penetrant stainless steel welds', 'low halogen penetrant', 'asme bpe penetrant'],
    context: 'Austenitic stainless, duplex, nickel alloys and titanium; ASME Section V Article 6 contaminant limits (sulfur and halogens) for penetrant materials used on these alloys; ASME BPE hygienic systems; chloride stress corrosion cracking; post-cleaning so residues do not stay in product contact surfaces; cryogenic and high-purity service; MT not possible on austenitic grades.',
    industries: ['food-pharma', 'chemical', 'lng', 'petrochemical', 'power'], owner: '/penetrant-testing',
    cities: ['indianapolis', 'philadelphia', 'newark', 'boston', 'houston', 'lake-charles', 'chicago', 'memphis'] },
  { slug: 'penetrant-testing-castings', method: 'pt', name: 'Penetrant testing of castings',
    queries: ['penetrant testing castings', 'dye penetrant inspection castings', 'mss sp-93', 'aluminum casting penetrant testing'],
    context: 'ASTM E165 and E1417, MSS SP-93 (liquid penetrant examination of castings and forgings for valves, flanges and fittings), ASTM E433 reference photographs, ASME Section V Article 6 for code castings; aluminum, stainless and nonferrous castings; as-cast surface roughness and background, water-washable vs solvent-removable systems, porosity vs shrinkage vs cracks, rework and re-examination after grinding.',
    industries: ['automotive', 'aviation', 'chemical', 'food-pharma', 'power'], owner: '/penetrant-testing',
    cities: ['detroit', 'milwaukee', 'cleveland', 'wichita', 'grand-rapids', 'birmingham', 'houston', 'indianapolis'] },
];

for (const [k, ind] of Object.entries(INDUSTRIES)) for (const c of ind.cities) if (!CITY_SLUGS.has(c)) throw new Error(`${k}: unknown city ${c}`);
for (const j of JOBS) for (const c of j.cities) if (!CITY_SLUGS.has(c)) throw new Error(`${j.slug}: unknown city ${c}`);

const pages = [];
for (const [key, ind] of Object.entries(INDUSTRIES)) for (const m of ind.methods)
  pages.push({ slug: `${M[m]}-${key}`, path: `/${M[m]}-${key}`, kind: 'industry', method: m, industry: key, name: ind.name, existing: ind.existing, context: ind.context, cities: ind.cities,
    siblings: ind.methods.filter((x) => x !== m).map((x) => `/${M[x]}-${key}`) });
for (const j of JOBS)
  pages.push({ slug: j.slug, path: `/${j.slug}`, kind: 'job', method: j.method, name: j.name, existing: false, context: j.context, queries: j.queries, owner: j.owner, cities: j.cities,
    industries: j.industries.filter((i) => INDUSTRIES[i] && INDUSTRIES[i].methods.includes(j.method)).map((i) => `/${M[j.method]}-${i}`) });
// Jobs relevant to each industry page (same method), so industry pages can link down.
for (const p of pages.filter((x) => x.kind === 'industry')) p.jobs = pages.filter((j) => j.kind === 'job' && j.method === p.method && j.industries.includes(p.path)).map((j) => j.path);

mkdirSync('src/data/us-industry-ndt-2026-11', { recursive: true });
writeFileSync('src/data/us-industry-ndt-2026-11/_pages.json', JSON.stringify({ generated: '2026-11-17', pages }, null, 2) + '\n');
console.log(`${pages.length} pages: ${pages.filter((p) => p.kind === 'industry').length} industry (${pages.filter((p) => p.kind === 'industry' && p.existing).length} existing), ${pages.filter((p) => p.kind === 'job').length} job`);
