/**
 * Industry × City × Region training matrix — 2026-08-16 (owner directive).
 * ─────────────────────────────────────────────────────────────────────────────
 * Owner: "all products including training should have Industry x city x region
 * pages … maximum NDT training targeted customer keywords."
 *
 * Execution is research-gated (§26.1: researched cells earn ~22× name-swaps;
 * unresearched permutations join the 43.7% dead — §40.5). Every city cell
 * below reuses employer research already verified in training-cities.ts and
 * the sprint logs (§32.2, §35.5, §37.1); industries with no researched city
 * ship the national page only.
 *
 * .mjs in src/data so BOTH the React component and prerender import the same
 * content (the dt-city-data.mjs pattern) — no two-layer drift by construction.
 *
 * RULES: no pricing (§18) · no fabricated presence — training is delivered
 * on-site at the customer facility, no classroom claimed anywhere (§24.2) ·
 * hour counts described structurally, never invented (§35.1).
 */

/* ═══════════════════ INDUSTRY NATIONALS ═══════════════════
 * slug → page at /{slug}-ndt-training
 * `aerospace` deliberately absent: /aerospace-ndt-training already exists;
 * its city cells below link up to that existing page. */
export const INDUSTRY_TRAINING = {
  /* cellOnly: content for the 4 aerospace city cells; the NATIONAL page
   * pre-exists at /aerospace-ndt-training and no second national is created. */
  aerospace: {
    cellOnly: true,
    name: 'Aerospace',
    h1: 'Aerospace NDT Training',
    title: 'Aerospace NDT Training',
    desc: 'Aerospace manufacturing NDT training under NAS 410 / EN 4179.',
    intro: `Aerospace manufacturing NDT runs under its own certification standard — NAS 410 in the US, EN 4179 in Europe — with OEM requirements layered on top per programme. The methods, the sensitivity requirements and the documentation regime all sit above general industry, which is why aerospace examination experience is one of the most portable credentials in NDT.`,
    methods: `Fluorescent penetrant inspection runs at production scale — entire lines, not benches — and is most technicians' entry point. ET covers machined and formed structure with sensitivity requirements general industry never meets. UT examines forgings, assemblies and, increasingly, composite structure with techniques specific to laminates and bonds. RT and digital radiography handle castings and complex assemblies. MT covers the steel scope.`,
    regime: `NAS 410 sets training, experience and examination requirements with a named responsible Level 3; EN 4179 mirrors it for European programmes; Nadcap audits the special process itself; and each OEM adds its own approval requirements per engine or airframe programme. Certification under an SNT-TC-1A programme does not transfer automatically — the bridge is routine but planned.`,
    employers: `Airframe and engine OEMs, their tier suppliers, and the completion and modification centres. Production NDT hires steadily and trains at scale, which makes aerospace manufacturing one of the strongest structured entry routes in the industry.`,
    career: `Enter through PT or ET on a production line, add UT for structures and composites, and treat programme-specific OEM approvals as the compounding asset: each one makes the next qualification faster and the next employer conversation easier.`,
    entry: `Production lines hire and train at scale — the penetrant line is the classic first job — and the NAS 410 structure means the employer’s responsible Level 3 owns your qualification path from day one. Crossover from SNT-TC-1A general industry is routine but bridged deliberately; <a href="/blog/veterans-transitioning-into-ndt">veterans from aviation maintenance</a> arrive with the strongest head start.`,
    cities: ['wichita', 'east-hartford', 'north-charleston', 'savannah'],
  },
  maritime: {
    name: 'Maritime & Shipbuilding',
    h1: 'Maritime NDT Training — Shipyard, Marine and Naval Inspection Careers',
    title: 'Maritime NDT Training — Shipyard & Marine Inspection Certification',
    desc: 'NDT training for shipyard and marine inspection: the methods yards actually certify in, NAVSEA and classification-society regimes, the US shipbuilding employers, and the career path.',
    intro: `Maritime NDT is its own world. The product is enormous, the material is thick section steel and increasingly aluminium, the welding is measured in miles, and the acceptance regimes — classification societies on the commercial side, NAVSEA technical publications on the naval side — are unlike anything in general plant work. Training for it has to reflect that, which is why a shipyard NDT technician's qualification path looks different from a refinery technician's from the first course onward.`,
    methods: `Volumetric weld examination dominates: UT on hull butts and seams, with phased array increasingly specified for erection joints because a yard cannot wait for film. MT is the everyday surface method — nearly everything is ferromagnetic — with PT covering the aluminium superstructure and non-magnetic fittings. VT under formal acceptance criteria carries survey work, and RT persists in new construction where a permanent image is contractually required. A maritime training plan front-loads VT and MT, then builds UT depth, because that is the order the work arrives in.`,
    regime: `On the naval side, work answers to NAVSEA technical publications with qualification requirements layered over SNT-TC-1A — yards building or repairing naval vessels run some of the most tightly audited certification programmes in US industry. On the commercial side, classification societies (ABS above all in the US) set survey and acceptance requirements, and their surveyors expect examination records in class-recognisable form. A technician who understands why the two regimes differ — one is a customer's technical authority, the other an independent certifier — reads drawings and acceptance criteria correctly from day one.`,
    employers: `US shipbuilding concentrates in a handful of yards, each a certification programme of its own: nuclear carrier and submarine construction in Virginia, submarine work in Connecticut, destroyers in Maine, amphibious and surface combatants in Mississippi, commercial and repair work on every coast. Around them sit the repair yards, the marine terminal operators, and the survey companies — all employing certified technicians against the same method set.`,
    career: `The path that works: VT and MT certification first (the volume work), then UT — because a shipyard UT Level II with thick-section experience is one of the most portable qualifications in NDT. From there the forks are naval QA (programme-side roles), class survey work, or Level III authority over a yard programme.`,
    entry: `Routes into yard NDT are unusually structured: the major shipbuilders run apprentice and trainee pipelines that take people with no inspection background, and trade crossover is constant — <a href="/blog/welder-to-ndt-technician-no-degree-path">welders move into examination</a> faster here than anywhere, because the yards already employ them. Veterans, especially from hull and machinery ratings, <a href="/blog/veterans-transitioning-into-ndt">map directly onto the work</a>.`,
    cities: ['pascagoula', 'groton', 'bath-maine', 'norfolk', 'newport-news', 'san-diego'],
  },
  nuclear: {
    name: 'Nuclear',
    h1: 'Nuclear NDT Training — Plant, Fuel-Cycle and DOE-Complex Inspection Careers',
    title: 'Nuclear NDT Training — ASME XI & DOE-Complex Certification Path',
    desc: 'NDT training for nuclear work: ASME Section XI in-service inspection, performance demonstration, the DOE complex, who employs certified technicians and how the qualification path differs.',
    intro: `Nuclear NDT pays above nearly every other sector for one reason: the qualification bar is higher and the eligible pool is smaller. A technician who clears it works outage seasons at the operating fleet, long-horizon work across the DOE complex, or new construction — and the demand side of that market has been strengthening as the fleet life-extends and new builds return.`,
    methods: `UT carries the in-service load — vessel, piping and component examination under ASME Section XI — and nuclear is where examination technique is most tightly prescribed: some scopes require performance demonstration, where the technician must find and size real flaws in blind test specimens before being allowed on plant. ET owns steam generator tubing. MT and PT cover the surface scope with nuclear-grade cleanliness requirements (halogen and sulphur limits on consumables that general plant work never thinks about). VT is formalised into its own examination categories.`,
    regime: `Commercial plants run under ASME Section XI with 10 CFR 50 Appendix B quality programmes; site access adds security clearance and plant-specific training on top of method certification. The DOE complex — the weapons and cleanup sites — runs its own overlay of DOE orders above SNT-TC-1A programmes. Everywhere in nuclear, the paperwork IS the product: an examination that cannot be reconstructed from its records years later did not happen.`,
    employers: `The employer landscape splits three ways: the operating fleet and its outage contractors (seasonal, intense, well paid), the DOE complex sites (long-horizon cleanup and stockpile work at the national laboratories and legacy sites), and the naval-nuclear construction programme. Each certifies against the same methods but audits differently, and all three are chronically short of qualified people.`,
    career: `Enter through conventional certification — UT Level II is the ticket — then add the nuclear layers: Section XI familiarity, plant access training, and where the work demands it, performance demonstration. Technicians who clear PDI-style qualification are among the best paid Level IIs in the country.`,
    entry: `Almost nobody enters NDT through nuclear; technicians enter general industry first and qualify up. The practical route is conventional certification — <a href="/ndt-level-2-training">UT Level II</a> above all — then the nuclear overlays through an outage contractor or a DOE-site employer. Military nuclear ratings are the exception: <a href="/blog/veterans-transitioning-into-ndt">naval nuclear veterans</a> carry directly relevant qualification culture and clear site-access hurdles faster.`,
    cities: ['oak-ridge', 'richland', 'aiken', 'idaho-falls', 'newport-news', 'charlotte'],
  },
  'oil-gas': {
    name: 'Oil & Gas',
    h1: 'Oil & Gas NDT Training — Refinery, Petrochemical and Upstream Inspection Careers',
    title: 'Oil & Gas NDT Training — API-Regime Inspection Certification Path',
    desc: 'NDT training for oil and gas: the API in-service regime, turnaround work, corrosion monitoring, the Gulf Coast employer base, and the certification sequence that gets you hired.',
    intro: `Oil and gas is the largest NDT employment market in the United States and the one where the career mechanics are best understood: the work is corrosion, the calendar is the turnaround, and the governing regime is the API in-service codes. Training for it is training for a system — thickness monitoring programmes, condition monitoring locations, inspection intervals — not just for a method.`,
    methods: `UT is the backbone: thickness surveys at CMLs across crude, vacuum and coker circuits, corrosion mapping where it matters, and shear-wave weld examination on repairs and tie-ins. Phased array has become the turnaround workhorse. RT clears weld acceptance where a permanent image is required. MT matters most in wet H2S service where surface-breaking cracking is a real mechanism; PT covers the stainless and alloy scope. ET runs the exchanger bundles every turnaround.`,
    regime: `API 510, 570 and 653 govern vessels, piping and tanks in service, with ASME Section V supplying the method rules and B31.3/Section VIII the construction acceptance. Above the codes sits the operators' own layer: contractor approval, site-specific qualification, and operator standards that gate who works. A technician who understands WHY a CML exists — remaining-life calculation, inspection-interval setting — is worth more than one who can only take the reading.`,
    employers: `The employer base is the densest in NDT: the refining and chemical complexes of the Gulf Coast, the inspection contractors that serve them (from the majors to specialist crews), the midstream operators, and the upstream basins with their own inspection cycles. Hiring is permanently constrained by certified supply, and turnaround season amplifies it.`,
    career: `The proven sequence: VT + MT/PT to get productive, UT Level II as fast as supervision capacity allows — that is the hiring trigger — then the API endorsements (${'API 570 first in most piping-heavy markets'}) that move a technician from NDT rates to inspector rates. The <a href="/blog/api-510-570-653-exam-schedule-2026">API exam calendar</a> sets the rhythm of that second phase.`,
    entry: `Entry is the industry’s most trodden path: helper-to-trainee inside an inspection contractor, <a href="/ndt-school">school-then-hire</a>, or trade crossover from the crafts that build the plants. The employer-based model means the fastest route is getting hired by a company that certifies — <a href="/blog/sponsoring-employee-ndt-certification-employer-commitment">how sponsorship works from the employer side</a> is worth understanding before you apply.`,
    cities: ['houston', 'deer-park', 'pasadena-texas', 'texas-city', 'baton-rouge', 'williston', 'billings'],
  },
  pipeline: {
    name: 'Pipeline',
    h1: 'Pipeline NDT Training — Girth Welds, Integrity Digs and In-Line Inspection Follow-Up',
    title: 'Pipeline NDT Training — Girth-Weld & Integrity-Dig Certification Path',
    desc: 'NDT training for pipeline work: girth-weld examination under API 1104, integrity-dig verification, ILI follow-up, and the certification path pipeline contractors actually hire against.',
    intro: `Pipeline NDT is two different jobs wearing one name. New construction is production examination — girth weld after girth weld under API 1104, moving with the spread, where speed and consistency are the skill. Integrity work is the opposite — dig verification after an in-line inspection call, where a technician's measurement decides whether a multi-million-dollar excavation was justified and what the operator must do next.`,
    methods: `On new construction, RT and increasingly automated UT (zonal discrimination) own girth-weld acceptance; the industry's shift toward AUT changed what training must cover. On integrity digs, the kit is corrosion assessment: UT thickness and mapping over the ILI call box, MT for surface cracking (seam and SCC programmes), and precise defect dimensioning because the measurement feeds a fitness-for-service calculation. VT under formal criteria threads through both.`,
    regime: `API 1104 governs construction welding acceptance; the federal pipeline safety regulations (PHMSA) drive integrity management, and operator IMPs translate them into dig programmes. Technicians working integrity digs sit inside an evidence chain that ends at a regulator — the documentation standard reflects it.`,
    employers: `Pipeline contractors and inspection companies that follow the spreads; integrity-services firms working dig programmes for the midstream operators; and the operators' own inspection organisations. The work is geographically mobile by nature — crews follow the projects — which suits technicians who want rate premiums for travel.`,
    career: `Certify VT + MT early, build UT to Level II with corrosion-assessment depth, and treat AUT familiarity as the differentiator on the construction side. The integrity side rewards technicians who understand what happens downstream of their numbers — <a href="/blog/pipeline-audit-preparation-what-operators-check">how operators prepare for audits</a> is worth reading early.`,
    entry: `Crews hire from two pools: certified technicians who want the travel premiums, and construction-side workers who cross into examination — <a href="/blog/welder-to-ndt-technician-no-degree-path">pipeline welders especially</a>, who already know API 1104 from the torch side. The mobility requirement filters harder than the certification requirement.`,
    cities: [],
  },
  'power-generation': {
    name: 'Power Generation',
    h1: 'Power Generation NDT Training — Outage-Season Inspection Careers',
    title: 'Power Generation NDT Training — Outage & Fleet Inspection Certification',
    desc: 'NDT training for the generating fleet: boiler and HRSG examination, turbine work, exchanger tubing, the outage calendar, and the certification path utilities and their contractors hire against.',
    intro: `Power generation NDT runs on the outage calendar: spring and fall windows when units come down and every deferred examination happens at once. The work spans the oldest coal units to the newest combined-cycle plants, and the method mix is broader than most sectors because the equipment is — boilers, headers, rotors, condensers, structural steel, all in one plant.`,
    methods: `UT carries boiler tubing and header examination, rotor and turbine component inspection, and thickness monitoring on feedwater and steam circuits. ET owns condenser and heat-exchanger tubing — thousands of tubes screened inside a fixed window. MT works the ferromagnetic scope during overhaul: casing welds, structural steel, fatigue-critical rotating-equipment details. PT covers blading and the stainless systems. VT decides where everything else gets deployed.`,
    regime: `ASME rules govern pressure parts; the nuclear fleet adds Section XI (covered under nuclear training); and utility fleet programmes add their own examination standards and vendor-qualification gates. Outage work compresses everything — the technician who can produce clean records at outage pace is the one who gets asked back.`,
    employers: `Utilities' own inspection groups, the outage contractors who staff the seasonal peaks, OEM service divisions, and the specialist tubing-inspection firms. Fleet-scale employers hire in seasonal waves, which makes the sector a strong entry point for newly certified technicians willing to travel.`,
    career: `VT + MT to get on outage crews, ET as the differentiator (tubing inspectors are perennially scarce), UT for the pressure-part scope. The seasonal rhythm suits stacking methods fast: two outage seasons expose a technician to more examination variety than years in a single plant.`,
    entry: `Outage season is the entry door: contractors staff spring and fall peaks with trainees alongside certified crews, and two seasons of outage work builds method exposure faster than years in a single plant. From there, <a href="/ndt-level-2-training">Level II certification</a> converts seasonal work into a career, and tubing-inspection specialisation (ET) converts it into scarcity value.`,
    cities: ['charlotte'],
  },
  aviation: {
    name: 'Aviation MRO',
    h1: 'Aviation NDT Training — MRO, Part 145 and Fleet-Maintenance Inspection Careers',
    title: 'Aviation NDT Training — Part 145 MRO Inspection Certification Path',
    desc: 'NDT training for aviation maintenance: NAS 410 versus SNT-TC-1A, the FAA Part 145 environment, engine and airframe inspection methods, and where the MRO employers are.',
    intro: `Aviation NDT — the in-service, maintenance side of aerospace — runs under a different certification standard from general industry, and that single fact shapes the whole career path. Where a refinery technician certifies under an employer's SNT-TC-1A programme, an MRO technician typically certifies under NAS 410, with the FAA's Part 145 repair-station rules wrapped around everything the shop does.`,
    methods: `ET is aviation's signature method — surface crack detection on engine components, wheels, and airframe structure, where sensitivity requirements exceed anything in general industry. UT covers bond integrity and structure; PT under fluorescent examination handles the non-magnetic engine and airframe scope; MT the steel components. RT and increasingly digital radiography examine castings and assemblies. Composites brought their own examination world — bond testing and ultrasonic techniques the general industrial technician never meets.`,
    regime: `NAS 410 (and its European twin EN 4179) set training, experience and examination requirements with named responsible Level 3 oversight; OEM requirements layer on top per engine and airframe type; and FAA Part 145 governs the repair station itself. Cross-qualifying from an SNT-TC-1A background is routine but not automatic — the hours and examination structures differ, and employers plan for the bridge.`,
    employers: `Heavy-maintenance MROs, engine-overhaul shops, military depot maintenance (some of the largest NDT employers in the country), and airline maintenance organisations. The military depots in particular train and employ at scale and their technicians move well into civilian MRO work.`,
    career: `Enter through ET and PT — aviation's volume methods — under a NAS 410 programme, add UT for structure and composites, and treat OEM-specific approvals as the compounding asset: each engine programme qualification makes the next employer conversation easier.`,
    entry: `The military depots are the sector’s training engine — many of the country’s aviation NDT technicians qualified inside depot maintenance and moved to civilian MROs. Direct entry happens through Part 145 shops’ own NAS 410 programmes, typically starting on the penetrant line. <a href="/blog/veterans-transitioning-into-ndt">Aviation-rating veterans</a> carry the strongest transfer of any background.`,
    cities: ['san-antonio'],
  },
  manufacturing: {
    name: 'Manufacturing & Fabrication',
    h1: 'Manufacturing NDT Training — Fab-Shop, Foundry and Mill Inspection Careers',
    title: 'Manufacturing NDT Training — Fabrication & Mill Inspection Certification',
    desc: 'NDT training for manufacturing: fabrication weld examination, casting and forging inspection, mill work, AWS and ASME acceptance, and the shop-floor certification path.',
    intro: `Manufacturing NDT is where most US technicians actually start: the fabrication shops, foundries, forge shops and mills that make what every other sector inspects in service. The work is production-paced examination against construction codes, and it teaches the fundamentals — indications, acceptance criteria, documentation — faster than any other environment because the volume is relentless.`,
    methods: `The method mix follows the product. Weld fabrication runs VT against AWS D1.1 or ASME as the first gate, MT on structural steel, RT or UT for full-penetration volumetric acceptance. Foundries lean on RT for internal soundness and MT/PT for surfaces; forge shops on UT for internal flaws in billets and finished forgings; mills on automated UT and ET lines where the examination is part of the production process itself.`,
    regime: `Construction codes rather than in-service codes: AWS D1.1 for structural steel, ASME Section VIII and B31.3 for pressure parts, customer specifications layered on both. The shop environment also means the technician works beside the people whose product they judge — the impartiality discipline is learned here.`,
    employers: `Structural fabricators, pressure-vessel shops, pipe fabricators, foundries and forge shops, steel mills, and the quality departments of OEMs. Hiring is steady rather than seasonal, entry-level friendly, and geographically everywhere — which is why it is the sector most new technicians pass through.`,
    career: `The classic sequence starts here: VT certification against the shop's code, MT/PT for the surface scope, then UT — and a fab-shop UT Level II with clean documentation habits is hireable in every other sector on this page. Welders crossing into inspection start in exactly this environment — <a href="/blog/welder-to-ndt-technician-no-degree-path">the welder-to-NDT route</a> maps it.`,
    entry: `This is where careers start: fab shops and mills hire trainees continuously, the volume builds fundamentals fast, and the construction-code environment (AWS, ASME) teaches acceptance criteria as daily work. <a href="/blog/welder-to-ndt-technician-no-degree-path">Welders cross over here</a>, <a href="/ndt-school">school graduates get hired here</a>, and the technicians every other sector on this page recruits were mostly made here.`,
    cities: ['gary', 'wichita'],
  },
};

/* ═══════════════════ CITY CELLS ═══════════════════
 * Research reused from training-cities.ts profiles + sprint-log research
 * (§32.2, §35.5, §37.1). Each entry is genuinely local: employers, what they
 * examine, which regime applies. Keys: '{industry}|{city-slug}'. */
export const CITY_CELLS = {
  /* maritime */
  'maritime|pascagoula': { city: 'Pascagoula', state: 'Mississippi',
    text: `Pascagoula is Ingalls Shipbuilding — the largest manufacturing employer in Mississippi, building destroyers, amphibious ships and cutters. Yard work here means thick-section structural UT, production MT at scale, and VT under NAVSEA acceptance; the certification programme behind it is audited to naval standards, and technicians trained into that documentation culture carry it anywhere. The Gulf Coast repair and fabrication belt around the yard adds commercial-class work under ABS.` },
  'maritime|groton': { city: 'Groton', state: 'Connecticut',
    text: `Groton is General Dynamics Electric Boat — nuclear submarine construction, the most demanding examination environment in US shipbuilding. Hull and pressure-boundary work drives deep UT scope with qualification layered well above baseline SNT-TC-1A, and the naval-nuclear interface means records discipline at a level few industries ever require. The surrounding New England supplier base examines to the same flow-down requirements.` },
  'maritime|bath-maine': { city: 'Bath', state: 'Maine',
    text: `Bath Iron Works builds destroyers, and its examination demand is classic naval surface-combatant work: erection-joint UT, structural MT through every module, VT to NAVSEA criteria. BIW's certification programme is one of the oldest continuously audited in the country, and the yard's apprentice-to-technician pipeline is a proven entry route for Mainers without prior industry background.` },
  'maritime|norfolk': { city: 'Norfolk', state: 'Virginia',
    text: `Norfolk is repair rather than new construction: the naval base, the private repair yards around Hampton Roads, and the commercial terminals generate continuous survey and repair examination — UT thickness on hulls and tanks, MT on repaired structure, VT for class and naval surveys. Repair work exposes a technician to more varied damage in a year than new construction does in five, which is exactly what assessment skills are built from.` },
  'maritime|newport-news': { city: 'Newport News', state: 'Virginia',
    text: `Newport News Shipbuilding is the only yard in the country building nuclear-powered aircraft carriers, and one of two building submarines. The examination programme spans conventional structural work and the naval-nuclear scope, with qualification requirements at the top of the industry. For a technician, the yard is both the hardest programme to certify into and the strongest credential to carry out.` },
  'maritime|san-diego': { city: 'San Diego', state: 'California',
    text: `San Diego combines NASSCO's new construction with one of the largest ship-repair concentrations on the West Coast, plus the naval base's own demand. Repair-side examination — thickness surveys, weld repair acceptance, class survey support — dominates the hiring, and the aluminium content of modern vessels keeps PT unusually prominent alongside the standard MT/UT load.` },
  /* nuclear */
  'nuclear|oak-ridge': { city: 'Oak Ridge', state: 'Tennessee',
    text: `Oak Ridge means the Y-12 National Security Complex and Oak Ridge National Laboratory — DOE-complex work where examination happens inside 10 CFR 830 quality programmes and DOE-order overlays. The work is long-horizon rather than outage-seasonal: weapons-complex fabrication, research infrastructure, and cleanup scope, all demanding certification records that survive federal audit. Clearance-eligible technicians are the constraint here, not demand.` },
  'nuclear|richland': { city: 'Richland', state: 'Washington',
    text: `Richland serves the Hanford site — the largest environmental cleanup programme in the country. Tank-farm infrastructure, waste-processing construction and legacy-facility surveillance generate steady UT, VT and surface-method demand under DOE quality rules. The multi-decade programme horizon makes it one of the most stable nuclear-sector employment markets anywhere, and the Columbia Generating Station adds commercial Section XI outage work nearby.` },
  'nuclear|aiken': { city: 'Aiken', state: 'South Carolina',
    text: `Aiken is the Savannah River Site — roughly twelve thousand workers across tritium facilities, waste processing and the plutonium mission. Examination work runs under DOE orders with site-specific qualification, and the scale of ongoing construction keeps volumetric and surface demand steady. SRS's contractor structure means several employers certify technicians against the same site requirements, which multiplies entry points.` },
  'nuclear|idaho-falls': { city: 'Idaho Falls', state: 'Idaho',
    text: `Idaho Falls serves Idaho National Laboratory — the nation's lead nuclear-energy laboratory and the proving ground for advanced-reactor programmes. Examination demand spans research-reactor support, fuel-cycle facilities and the new-build demonstrations now under construction; the advanced-reactor pipeline makes this one of the few nuclear markets whose demand curve points up for reasons other than maintenance.` },
  'nuclear|newport-news': { city: 'Newport News', state: 'Virginia',
    text: `The naval-nuclear construction programme at Newport News Shipbuilding is the largest single nuclear-qualified examination workforce in the country. Pressure-boundary UT, nuclear-grade surface examination and the records regime of NAVSEA's nuclear work sit at the top of the qualification ladder — and technicians certified into it are sought by every other nuclear employer on this page.` },
  'nuclear|charlotte': { city: 'Charlotte', state: 'North Carolina',
    text: `Charlotte is the operations centre of the Carolinas nuclear fleet — one of the largest in the country — and the hub from which outage inspection staffing flows. Section XI in-service examination, steam-generator ET campaigns and the vendor ecosystem around the fleet's engineering headquarters make the metro a natural base for nuclear-sector technicians who work the outage circuit.` },
  /* aerospace (national page pre-exists at /aerospace-ndt-training) */
  'aerospace|wichita': { city: 'Wichita', state: 'Kansas',
    text: `Wichita remains the air capital: Textron Aviation's manufacturing base and Spirit AeroSystems' fuselage and structures work (under Boeing ownership since late 2025) anchor an examination market built on NAS 410 programmes — fluorescent penetrant lines running production volume, ET on machined structure, UT on assemblies and composites. Production NDT here is high-volume and procedure-tight, the classic aerospace entry environment.` },
  'aerospace|east-hartford': { city: 'East Hartford', state: 'Connecticut',
    text: `East Hartford is Pratt & Whitney, with Sikorsky and Collins Aerospace in the same corridor — engine manufacture, helicopter structure and aerospace systems all within commuting distance. Engine hardware drives the method mix: fluorescent PT at scale, ET on rotating parts, UT on forgings, all under NAS 410 with OEM requirements layered per programme. The supplier network across the Connecticut River valley examines to the same flow-downs.` },
  'aerospace|north-charleston': { city: 'North Charleston', state: 'South Carolina',
    text: `North Charleston is Boeing's 787 final assembly and its composite aft-fuselage fabrication — one of the largest composite-structure examination operations in the world. Bond and laminate inspection, ultrasonic techniques specific to composite layup, and the documentation regime of commercial-aircraft production define the market; technicians with composite UT experience from here carry a scarce and portable skill.` },
  'aerospace|savannah': { city: 'Savannah', state: 'Georgia',
    text: `Savannah is Gulfstream — business-jet manufacture and completion, with the examination mix of airframe production: PT lines, ET on machined and formed structure, UT on assemblies and increasing composite content. Gulfstream's growth cycle plus the MRO work at the same campus keeps certified demand steady, and the coastal-Georgia supplier base adds fabrication-side scope.` },
  /* aviation MRO */
  'aviation|san-antonio': { city: 'San Antonio', state: 'Texas',
    text: `San Antonio pairs one of the largest military aviation-maintenance concentrations in the country — depot-level engine and airframe overhaul at the former Kelly complex — with a growing commercial MRO cluster on the same runways. Depot work is where many of the country's aviation NDT technicians are trained; the surrounding Part 145 shops hire directly against that pipeline. ET and fluorescent PT dominate, with bond-testing and DR growing as the fleets age.` },
  /* oil & gas */
  'oil-gas|houston': { city: 'Houston', state: 'Texas',
    text: `Houston is the densest NDT employment market in North America — the ship channel refineries and chemical complexes, the fabrication belt building vessels and modules, and the inspection contractors' national headquarters. Every method hires here, but the turnaround economy makes UT thickness/corrosion work and exchanger ET the steady core. For a new technician, Houston offers the shortest distance between certification and full employment anywhere in the country.` },
  'oil-gas|deer-park': { city: 'Deer Park', state: 'Texas',
    text: `Deer Park sits inside the ship channel's chemical corridor — the refinery, the chemical complexes and the terminal infrastructure generate continuous in-service examination under API 510/570/653. Living-wage-to-rate-work distance is short here: contractors staff CML programmes and turnaround crews from the communities along Highway 225, and a technician can build an entire career without leaving the corridor.` },
  'oil-gas|pasadena-texas': { city: 'Pasadena', state: 'Texas',
    text: `Pasadena is the heart of the ship channel workforce — surrounded by refineries and chemical plants on three sides, home to the craft workforce that turns the units around. NDT hiring here is turnaround-driven and volume-heavy: UT thickness crews, MT/PT on repairs, RT on tie-ins. The practical route in is well worn — helpers become trainees, trainees certify, and the plants are visible from the classroom.` },
  'oil-gas|texas-city': { city: 'Texas City', state: 'Texas',
    text: `Texas City concentrates refining and petrochemical capacity at the mouth of Galveston Bay — a compact market where the major complexes run continuous inspection programmes and every turnaround needs certified crews. The scale of the units makes tank and vessel work (API 653/510 scope) unusually prominent, and the proximity to Houston lets technicians work both markets from one base.` },
  'oil-gas|baton-rouge': { city: 'Baton Rouge', state: 'Louisiana',
    text: `Baton Rouge anchors the Mississippi River chemical corridor — one of the largest refining and petrochemical concentrations in the hemisphere. The examination economy mirrors the ship channel's: API-regime in-service programmes, turnaround seasons, exchanger campaigns — with Louisiana's own contractor ecosystem staffing it. River-corridor mobility means a Baton Rouge-based technician works sites from New Orleans to the state line.` },
  'oil-gas|williston': { city: 'Williston', state: 'North Dakota',
    text: `Williston is the Bakken: upstream gathering, processing and the pipeline infrastructure that moves the crude out. Examination work is field-shaped — pipeline integrity digs, facility piping under API 570, tank programmes — with the travel premiums and schedule intensity of a producing basin. Certified technicians willing to work the basin command rates that reflect the scarcity.` },
  'oil-gas|billings': { city: 'Billings', state: 'Montana',
    text: `Billings runs the refining corridor of the northern Rockies — two refineries in the metro and more within range — plus the pipeline network converging on them. It is a compact, stable in-service market under the API codes, and the regional contractor base certifies its own technicians, which makes it a genuine entry market rather than a fly-in one.` },
  /* power generation */
  'power-generation|charlotte': { city: 'Charlotte', state: 'North Carolina',
    text: `Charlotte runs one of the largest utility fleets in the country from its headquarters — the Carolinas' nuclear and combined-cycle stations — and an energy-manufacturing supply chain grew up around it: turbine components, generation equipment, nuclear-grade fabrication. Outage staffing flows through the metro every spring and fall, and the supply chain examines year-round under ASME construction rules, giving the market both seasonal and steady demand.` },
  /* manufacturing */
  'manufacturing|gary': { city: 'Gary', state: 'Indiana',
    text: `Gary is steel: the integrated works on the lakefront and the processing and fabrication economy around it. Mill NDT here means automated UT and ET lines built into production plus the maintenance examination of some of the heaviest rotating and structural plant in the country. The steel base also feeds the region's fabricators, whose AWS-regime weld examination is the classic manufacturing entry environment.` },
  'manufacturing|wichita': { city: 'Wichita', state: 'Kansas',
    text: `Beyond the airframes, Wichita is a general manufacturing town — machine shops, fabricators and suppliers serving aviation and agriculture alike. The overlap matters for a career: a technician can enter through AWS-regime fabrication examination and cross into the NAS 410 aerospace programmes across town, a two-regime fluency few markets can teach.` },
};

/* ═══════════════════ REGIONS ═══════════════════
 * slug → page at /ndt-training-{slug}. Member cities are slugs of existing
 * /ndt-training-{city} pages (verified against routes at build time). */
export const TRAINING_REGIONS = {
  'gulf-coast': {
    name: 'Gulf Coast',
    title: 'NDT Training Gulf Coast — Texas & Louisiana Refining Corridor',
    desc: 'NDT training across the Gulf Coast: the ship channel, Golden Triangle and Louisiana river corridor — the densest inspection employment market in the country.',
    character: `The Gulf Coast is the centre of gravity of American NDT: the refining and chemical corridor from Corpus Christi through the Houston Ship Channel to the Louisiana river parishes employs more certified technicians than any comparable region on earth. The work is the API in-service regime — turnarounds, CML programmes, tank farms — and the hiring is continuous because the corrosion never stops.`,
    industries: ['oil-gas', 'maritime', 'manufacturing'],
    certification: `Certification here is the SNT-TC-1A employer model at its purest: the inspection contractors certify their own technicians against API-scope Written Practices, operator approval gates site access on top, and the turnaround calendar sets when hiring spikes. A technician certified by one Gulf Coast contractor re-certifies quickly at the next — the programmes differ, the scope rarely does.`,
    cities: ['houston', 'deer-park', 'pasadena-texas', 'texas-city', 'corpus-christi', 'beaumont', 'baton-rouge', 'new-orleans', 'lake-charles', 'mobile', 'pascagoula'],
  },
  southeast: {
    name: 'Southeast',
    title: 'NDT Training Southeast — Aerospace, Nuclear & Shipbuilding Belt',
    desc: 'NDT training across the Southeast: aerospace manufacture in the Carolinas and Georgia, the Savannah River Site, the Carolinas nuclear fleet and the coastal shipyards.',
    character: `The Southeast stacks three qualification regimes side by side: aerospace manufacturing under NAS 410 (Boeing in Charleston, Gulfstream in Savannah), the nuclear complex (the Carolinas fleet plus Savannah River), and coastal shipbuilding and repair. A technician here can cross between regimes without moving house — rare anywhere else.`,
    industries: ['aerospace', 'nuclear', 'maritime'],
    certification: `Three regimes coexist within commuting distance: NAS 410 programmes at the aerospace plants, DOE and Section XI overlays at the nuclear sites, and NAVSEA requirements at the yards. Employers here read cross-regime experience as a strength, and the technician who holds aerospace PT alongside industrial UT has options no single-regime market offers.`,
    cities: ['north-charleston', 'savannah', 'aiken', 'atlanta', 'nashville', 'jacksonville'],
  },
  northeast: {
    name: 'Northeast',
    title: 'NDT Training Northeast — Shipbuilding, Aerospace & Power Corridor',
    desc: 'NDT training across the Northeast: naval shipbuilding in Connecticut and Maine, the Pratt & Whitney aerospace corridor, and the region’s power and process base.',
    character: `The Northeast's examination economy is built on precision manufacture: naval shipbuilding at Groton and Bath, the engine and airframe corridor around East Hartford, and the power and process plants threaded through New England and the mid-Atlantic. Qualification bars run high — naval and NAS 410 programmes dominate — and so do the rates that follow them.`,
    industries: ['maritime', 'aerospace', 'power-generation'],
    certification: `The naval yards and engine plants run the region’s benchmark programmes — audited hard, documented harder — and their standards bleed outward: New England employers expect records discipline at a level the national average does not. Certification earned here travels down the seaboard with unusual credibility.`,
    cities: ['groton', 'bath-maine', 'east-hartford', 'boston', 'philadelphia', 'pittsburgh', 'new-york', 'baltimore'],
  },
  midwest: {
    name: 'Midwest',
    title: 'NDT Training Midwest — Steel, Fabrication & Refining Belt',
    desc: 'NDT training across the Midwest: the steel and fabrication economy from Gary through Chicago and Detroit, plus the region’s refining and power fleet.',
    character: `The Midwest is manufacturing NDT's homeland: steel at the bottom of Lake Michigan, fabrication across Indiana, Ohio and Michigan, refining at the region's crossroads, and a generating fleet in transition. The construction-code world — AWS structural, ASME pressure parts — dominates, which makes the region the classic place to build fundamentals fast.`,
    industries: ['manufacturing', 'oil-gas', 'power-generation'],
    certification: `Construction codes rule: AWS structural acceptance in the fab economy, ASME on the pressure side, employer-based certification throughout. The density of shops means a trainee can change employers without changing cities — which makes the region the easiest place in the country to accumulate supervised experience hours.`,
    cities: ['chicago', 'detroit', 'cleveland', 'indianapolis', 'milwaukee', 'minneapolis', 'st-louis'],
  },
  'west-coast': {
    name: 'West Coast',
    title: 'NDT Training West Coast — Shipyards, Aerospace & Refining',
    desc: 'NDT training on the West Coast: San Diego and Puget Sound ship work, California refining, and the aerospace and energy base from Seattle to Los Angeles.',
    character: `The West Coast splits between the ports and the plants: ship construction and repair in San Diego and Puget Sound, California's refining complexes, and the aerospace and energy engineering base up and down the coast. Environmental and jurisdictional overlays run heavier here than anywhere else, and technicians who can document to that standard travel well.`,
    industries: ['maritime', 'oil-gas', 'aerospace'],
    certification: `Jurisdictional overlays run heavier than anywhere else — state pressure-vessel programmes, environmental compliance shaping RT practice, port-authority requirements on the marine side — and technicians who document to that standard find every other market simple by comparison.`,
    cities: ['san-diego', 'los-angeles', 'portland', 'seattle'],
  },
  'rockies-plains': {
    name: 'Rockies & Plains',
    title: 'NDT Training Rockies & Plains — Upstream, Pipeline & Refining',
    desc: 'NDT training across the Rockies and northern plains: the DJ Basin and Bakken upstream economies, the refining corridor, and the pipeline network between them.',
    character: `The Rockies and plains markets are field NDT: upstream gathering and processing in the DJ Basin and the Bakken, the refining corridor from Denver to Billings, and the pipeline infrastructure that ties it together. The work rewards mobility — integrity digs, facility campaigns, basin schedules — and pays the premiums that come with it.`,
    industries: ['oil-gas', 'pipeline'],
    certification: `Field certification: the contractors certify against API-scope Written Practices and the work itself is mobile — dig programmes, basin campaigns, refinery turnarounds. Employers weight self-sufficiency alongside method skill, because the nearest Level III may be a state away.`,
    cities: ['denver', 'salt-lake-city', 'billings', 'williston', 'wichita', 'tulsa', 'oklahoma-city'],
  },
  'texas-inland': {
    name: 'Texas Inland',
    title: 'NDT Training Texas Inland — Permian, Metroplex & San Antonio',
    desc: 'NDT training across inland Texas: Permian Basin upstream work, Dallas–Fort Worth aerospace and fabrication, and San Antonio’s aviation-maintenance complex.',
    character: `Inland Texas runs three distinct examination economies: the Permian's upstream and midstream intensity, the Metroplex's aerospace and fabrication base, and San Antonio's aviation-maintenance depots. Between them they cover nearly every regime a technician can certify under — API field work, AWS fabrication, NAS 410 aviation — inside one state.`,
    industries: ['oil-gas', 'aviation', 'manufacturing'],
    certification: `The regime follows the sub-market: API programmes in the Permian, AWS fabrication codes in the Metroplex, NAS 410 at the San Antonio depots. All three run employer-based certification, so movement between them is a re-qualification exercise, not a restart.`,
    cities: ['dallas', 'fort-worth', 'san-antonio', 'austin', 'midland'],
  },
  canada: {
    name: 'Canada',
    title: 'NDT Training Canada — CGSB Pathways & the Energy Provinces',
    desc: 'NDT training across Canada: the CGSB certification scheme, Alberta’s oil sands and gas plants, Ontario’s nuclear fleet and manufacturing, and the coastal yards.',
    character: `Canada certifies differently: the CGSB scheme is central certification — the credential belongs to the technician, issued by Natural Resources Canada, portable between employers — which changes career mechanics from the US employer-based model. The work concentrates in Alberta's oil sands and gas processing, Ontario's nuclear fleet and manufacturing belt, and the coastal shipyards, with jurisdictional boiler-and-pressure-vessel overlays (ABSA in Alberta, TSSA in Ontario) shaping in-service scope.`,
    industries: ['oil-gas', 'nuclear', 'manufacturing'],
    certification: `CGSB changes everything: certification is central, national and portable — the technician owns the credential, examined through Natural Resources Canada, and employers verify rather than issue. Add the provincial jurisdictional layer (ABSA in Alberta, TSSA in Ontario) for in-service scope, and the career mechanics differ enough from the US model that cross-border technicians plan the transition deliberately.`,
    cities: ['calgary', 'edmonton', 'fort-mcmurray', 'sarnia', 'montreal', 'vancouver', 'halifax'],
  },
};

/** Shared honest-delivery closer (§24.2) — one statement, every matrix page. */
export const DELIVERY_NOTE = `Atlantis delivers training on-site at employer facilities — your equipment, your procedures, your Written Practice — under ASNT Level III oversight. We do not operate walk-in classrooms, and say so plainly: for a company qualifying technicians, on-site delivery is the stronger model, and for individuals, cohorts form around employer demand.`;
