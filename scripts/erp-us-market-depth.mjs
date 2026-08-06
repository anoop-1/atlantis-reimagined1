/**
 * US ERP market depth — 2026-08-06 (owner-directed US ERP push).
 * ─────────────────────────────────────────────────────────────────────────────
 * Audience: OWNERS AND OPS MANAGERS OF US NDT INSPECTION SERVICE COMPANIES.
 * Not asset owners, not exam candidates — the people who run crews, chase
 * certs before audits, and invoice for inspection work.
 *
 * Evidence base (GSC USA 90d, scripts/gsc-usa-90d-2026-08-06.json):
 *   ndt inspection software 128i p28 · ndt software 128i p62 · ndt reporting
 *   software 96i p14 · ndt inspection management software 20i p45 · cloud ndt
 *   software 15i · best ndt software 9i p7. NO city-level ERP queries exist —
 *   these pages win long-tail and convert visitors the head pages send; the
 *   head pages carry the ranking fight.
 *
 * Quality rules (all enforced):
 *  - §26.1: only city-specific research earns. Every market's base/work/anchor
 *    is hand-written and verifiable. No name-swapped templates.
 *  - §20.10 NO NUMBERS in ERP copy: no counts, percentages, timelines or
 *    dollar figures. Digits appear ONLY inside standards designations
 *    (SNT-TC-1A, API 510/570/653, ISO 17025, ASME V) — assertErpUsNoNumbers()
 *    fails the build on any other digit usage.
 *  - §18/§25.5: no pricing anywhere.
 *  - Similarity: per-market prose unique; the ERP-fit block varies by market
 *    TYPE (seven distinct compositions), same pattern that passed the 0.55
 *    gate at 0.18–0.49 in method-city-depth.
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── ERP-fit prose per market TYPE — each written separately, no shared
      sentences, software keywords embedded naturally ─────────────────────── */
const TYPE_FIT = {
  refining: `
    <h2>Why turnaround-driven inspection companies outgrow spreadsheets first</h2>
    <p>A refinery turnaround compresses everything a spreadsheet handles badly into one brutal window: dozens of technicians mobilised at once, every one of them needing current certifications and vision records the owner's contractor portal will check, equipment that must arrive calibrated with certificates in hand, and thousands of examination records that become the client's permanent inspection history. NDT inspection software earns its keep here or nowhere — when the planner asks which UT crews are available with in-date certs for a unit coming down next month, the answer has to come from the system, not from someone's memory of a shared drive.</p>
    <p>The quieter failure is revenue: turnaround work is bid tight, and without job-level costing an inspection company discovers which scopes lost money only at year end. An ERP built for inspection work ties technician hours, equipment days and consumables to each work order as it happens, so the margin conversation happens while the job is still running.</p>`,
  pipeline: `
    <h2>What pipeline inspection work demands from business software</h2>
    <p>Pipeline integrity work scatters crews across hundreds of miles — dig sites, compressor stations, HDD crossings — and the paperwork has to survive that dispersion. Inspection management software matters most exactly where connectivity is worst: technicians capturing wall-thickness readings and coating assessments in the field need mobile data capture that works offline and syncs when the truck reaches signal, because re-keying handwritten field sheets at the motel is where transcription errors and lost records come from.</p>
    <p>Operators audit their inspection contractors against operator-qualification and personnel-certification records, and a finding against the contractor's records is a finding against the contract. Certification tracking that alerts before an OQ or a method cert lapses — not after a technician is already standing on the right-of-way — is the difference between an administrative task and a suspended crew.</p>`,
  fabrication: `
    <h2>Where inspection companies serving fab shops lose margin</h2>
    <p>Fabrication-shop NDT is high-volume, code-driven and unforgiving on documentation: weld maps, technique sheets, acceptance criteria to AWS or ASME, and a report the shop needs before it can ship. The inspection company that turns reports around fastest gets the next call, which is why NDT reporting software — templates matched to the governing code, findings captured once in the shop and flowing straight into the deliverable — is a competitive weapon and not an admin convenience.</p>
    <p>Shop work also produces a scheduling texture unlike plant outages: many small jobs, short notice, same-week turnarounds. Work order management that shows which technicians hold the right stamps and who is actually free beats a whiteboard the moment a company runs more than one crew, and job-level costing shows which shop accounts pay for the relationship and which quietly consume it.</p>`,
  aerospace: `
    <h2>The audit reality of aerospace and defence NDT</h2>
    <p>Aerospace NDT lives under a different regime: NAS 410 personnel requirements, Nadcap special-process audits, OEM approvals per method — and an audit trail expectation that treats a missing record as a nonconformance regardless of whether the work itself was sound. For an inspection company in this market, the system of record is the product: technician qualification histories, eye-exam currency, procedure revisions, equipment calibration chains traceable to standards, all retrievable in the form an auditor expects on the day the auditor asks.</p>
    <p>Inspection management software built for this world holds the written practice, the qualification matrix and the calibration register in one place, so audit preparation stops being an annual archaeology project. The companies that do this well quote Nadcap-scope work with confidence; the ones that do not simply avoid the market's best-paying contracts.</p>`,
  marine: `
    <h2>Marine and port inspection: survey-driven, class-society-shaped</h2>
    <p>Marine NDT runs on the classification societies' clock — gaugings and surveys tied to dry-dock windows that do not move for anyone's staffing problems. Inspection companies serving shipyards and ports juggle vessel projects measured in thousands of thickness readings, crane and cargo-gear examinations under statutory schedules, and clients who want the survey package in the class society's expected format. Software that captures readings against a hull grid and produces the report the surveyor will actually accept saves days per vessel, and days per vessel is what wins yard relationships.</p>
    <p>The business side is feast-and-famine: dry-dockings cluster, then the yard goes quiet. Scheduling and certification tracking across a workforce that surges with contract technicians — each of whom must be verified before they touch class work — is where an ERP for inspection companies earns more than any single feature.</p>`,
  power: `
    <h2>Outage season and the inspection companies that survive it</h2>
    <p>Power-plant NDT concentrates into spring and fall outage seasons, when every generating utility wants the same certified technicians in the same weeks. The inspection company's real product during an outage is orchestration: crews with boiler and HRSG experience, current certs and site clearances, equipment calibrated and staged, findings flowing to the plant's outage management team fast enough to influence repair decisions before the window closes. That flow is a software problem — inspection data captured at the component, interpreted against the code, and reported while the scaffolding is still up.</p>
    <p>Between outages the discipline shifts to readiness: certification renewals sequenced so the bench is deep before season, calibration cycles timed so nothing expires mid-outage, and job costing from last season shaping which bids to chase this year. Companies that run this on institutional memory lose exactly the technicians whose memory it lives in.</p>`,
  industrial: `
    <h2>Diversified industrial inspection: many clients, one system of record</h2>
    <p>An inspection company serving a mixed industrial base — plants, mills, municipal infrastructure, the occasional wind farm or data-centre build — carries a wider operational surface than a single-industry shop: more report formats, more client-specific requirements, more codes in play on any given week. The overhead lands on the office: who tracks which client wants which deliverable, which technician holds which combination of certs, which instrument is due for calibration. Business management software for inspection companies exists to make that surface manageable — certification tracking, equipment and calibration registers, work orders, quoting and invoicing in one place instead of five spreadsheets that disagree.</p>
    <p>Diversity is also the commercial hedge: when one sector slows, the others carry the year. The companies that exploit that hedge are the ones whose systems let them say yes quickly — quote, mobilise, report — in sectors they touch only occasionally.</p>`,
};

/* ── US markets — every base/work/anchor hand-written ─────────────────────── */
export const US_MARKETS = {
  houston: {
    name: 'Houston', type: 'refining',
    base: 'Houston is the densest NDT services market in North America: the ship channel refineries and chemical complexes from Pasadena to Baytown, the upstream and midstream head offices that buy inspection nationally, and a fabrication belt building everything from pressure vessels to offshore modules.',
    work: 'Inspection companies here run continuous plant contracts alongside turnaround surges, with API-driven vessel, piping and tank programmes as the backbone and advanced work — PAUT, corrosion mapping, tube inspection — as the differentiator.',
    anchor: 'the ship channel corridor, Baytown and Deer Park complexes, and the vessel and module fabricators along the Gulf freeway',
  },
  beaumont: {
    name: 'Beaumont', type: 'refining',
    base: 'The Golden Triangle — Beaumont, Port Arthur, Orange — packs refining and LNG into a stretch of coast an inspection crew can cross in an hour: majors\' refineries, the Sabine Pass and Port Arthur LNG trains, and the petrochemical plants between them.',
    work: 'The work is turnaround-heavy and code-formal: API vessel and piping campaigns, tank floors, and the LNG side\'s demanding weld examination during expansion construction.',
    anchor: 'the refineries at Beaumont and Port Arthur and the LNG terminals on Sabine Lake',
  },
  'corpus-christi': {
    name: 'Corpus Christi', type: 'refining',
    base: 'Corpus Christi combines refining, a crude-export port that grew with the Permian, and new petrochemical construction — a market where inspection demand expanded faster than the local technician pool.',
    work: 'Refinery API programmes and tank farms dominate steady work; export-terminal construction and the harbour bridge of new-build petchem added construction-phase weld examination on top.',
    anchor: 'the refinery row along the inner harbor and the export terminals at Ingleside',
  },
  'baton-rouge': {
    name: 'Baton Rouge', type: 'refining',
    base: 'Baton Rouge anchors the upriver end of Louisiana\'s chemical corridor — one of the largest refineries in the country plus a chain of chemical plants along the Mississippi that outsource inspection heavily.',
    work: 'Continuous unit-inspection contracts with major turnaround peaks; the chemical side adds exchanger campaigns and alloy work where PMI and careful surface preparation matter.',
    anchor: 'the Standard Heights refinery complex and the chemical plants strung along the river road',
  },
  'lake-charles': {
    name: 'Lake Charles', type: 'refining',
    base: 'Lake Charles carries refining, LNG export and petrochemical construction simultaneously — a compact market where the same inspection companies rotate between operating-plant programmes and construction-phase examination.',
    work: 'Operating refineries and chemical plants run API-driven programmes; the LNG trains and their expansions bring construction weld examination with demanding acceptance criteria.',
    anchor: 'the refineries west of the lake and the LNG terminals toward Sabine',
  },
  'new-orleans': {
    name: 'New Orleans', type: 'marine',
    base: 'Greater New Orleans mixes river-industrial and marine work: the chemical corridor downriver, one of the busiest port systems in the hemisphere, shipyards and topside fabricators, and offshore logistics for the Gulf.',
    work: 'Inspection companies split between plant programmes on the river, marine gaugings and survey support, and the offshore fabrication and repair work that moves through the yards.',
    anchor: 'the downriver chemical plants, the port\'s wharves and cranes, and the shipyards toward Avondale',
  },
  mobile: {
    name: 'Mobile', type: 'marine',
    base: 'Mobile is a working maritime-industrial city: a major shipbuilder, a fast-growing container port, steel processing, and aerospace final assembly — a genuinely mixed inspection market on the eastern Gulf.',
    work: 'Shipyard weld examination and survey support sit alongside port crane examinations, steel-mill maintenance inspection, and the aerospace supply chain\'s tighter personnel-qualification expectations.',
    anchor: 'the shipyard on the west bank, the container terminals, and the steel and aerospace plants north of town',
  },
  'texas-city': {
    name: 'Texas City', type: 'refining',
    base: 'Texas City is refining and petrochemical at maximum concentration — a small city whose industrial estate holds some of the largest refining capacity on the coast, with inspection demand to match.',
    work: 'API unit programmes, tank farms and turnaround surges are the rhythm; proximity to Houston means crews and clients cross the county line daily in both directions.',
    anchor: 'the refinery complexes along the dike road and the tank farms behind them',
  },
  'deer-park': {
    name: 'Deer Park', type: 'refining',
    base: 'Deer Park sits inside the ship channel\'s chemical crescent — refinery and chemical operations shoulder to shoulder, with inspection contractors effectively embedded in the plants they serve.',
    work: 'Long-running resident inspection contracts, exchanger and tube campaigns, and the constant drumbeat of small-bore piping and CUI programmes that channel-side plants generate.',
    anchor: 'the Deer Park complex and the neighbouring plants along the channel',
  },
  freeport: {
    name: 'Freeport', type: 'refining',
    base: 'Freeport is a chemical-manufacturing town at scale — one of the largest integrated chemical sites in the hemisphere plus LNG export — where inspection work follows the operating cadence of a single dominant complex and its neighbours.',
    work: 'Unit inspection and exchanger campaigns inside the chemical complex, tank and terminal work at the port, and construction-phase examination whenever the site expands.',
    anchor: 'the integrated chemical complex and the LNG terminal at Quintana',
  },
  midland: {
    name: 'Midland', type: 'pipeline',
    base: 'Midland is the office of the Permian Basin: the operators, midstream companies and service firms running the most active oilfield in the country sit here, and inspection demand tracks the basin\'s gathering systems, processing plants and tank batteries.',
    work: 'Pipeline integrity digs, gas-plant inspection, tank batteries and saltwater systems — dispersed work where crews drive long distances and field data capture matters more than anywhere.',
    anchor: 'the gathering and processing infrastructure spread across the basin from the city outward',
  },
  odessa: {
    name: 'Odessa', type: 'pipeline',
    base: 'Odessa is the Permian\'s industrial working floor — the yards, shops and service bases that keep the basin running — with inspection companies serving processing plants, compression and the fabrication shops that support them.',
    work: 'Field crews cover dig sites and facility programmes across the basin; shop-side, vessel repair and new fabrication generate steady code-examination work.',
    anchor: 'the gas plants and compressor stations around the county and the fabrication shops along the highway corridors',
  },
  tulsa: {
    name: 'Tulsa', type: 'pipeline',
    base: 'Tulsa has been a pipeline town for a century: midstream operators, the Cushing storage hub down the road, refineries in town, and a heat-exchanger and vessel fabrication cluster that ships nationally.',
    work: 'Pipeline integrity programmes and tank work anchor field demand — Cushing\'s tank farms alone sustain crews — while the fabricators produce continuous shop examination to ASME.',
    anchor: 'the refineries on the west bank, the Cushing terminal complex, and the exchanger shops around the port of Catoosa',
  },
  'oklahoma-city': {
    name: 'Oklahoma City', type: 'pipeline',
    base: 'Oklahoma City serves the STACK and SCOOP plays and the state\'s gas processing backbone — operator offices in town, field infrastructure in every direction, and a manufacturing base that adds shop work.',
    work: 'Facility inspection at gas plants and compression, pipeline dig support, tank programmes, and enough general-industrial and aerospace-adjacent work to keep shop crews busy between field campaigns.',
    anchor: 'the processing plants and compression west and northwest of the metro and the maintenance base at the air logistics complex',
  },
  williston: {
    name: 'Williston', type: 'pipeline',
    base: 'Williston is the Bakken\'s service base — a market that exists because of the play: gathering systems, gas plants, rail terminals and tank batteries across the basin\'s enormous footprint.',
    work: 'Everything is drive time: dispersed facility programmes, dig-site examination, and tank work where a crew\'s day is shaped by distance more than scope. Offline mobile capture is not a feature here; it is the job.',
    anchor: 'the gas plants and gathering infrastructure across the basin and the rail loading terminals',
  },
  casper: {
    name: 'Casper', type: 'pipeline',
    base: 'Casper is Wyoming\'s oil town — refining in town, pipeline systems crossing the state, and the trona, power and wind industries within service range.',
    work: 'Refinery programmes at the local plants, pipeline integrity work along the corridors, and industrial accounts across a service territory measured in hours of windshield time.',
    anchor: 'the refineries on the west side and the pipeline corridors converging on the city',
  },
  billings: {
    name: 'Billings', type: 'refining',
    base: 'Billings runs on refining for its size like few US cities — multiple refineries in and around town processing Canadian and Rockies crude, plus sugar, power and ag-industrial plants.',
    work: 'API unit and tank programmes at the refineries set the rhythm; the surrounding industrial base and pipeline systems fill the calendar between turnarounds.',
    anchor: 'the refineries in Billings and Laurel and the product pipelines heading east and west',
  },
  denver: {
    name: 'Denver', type: 'pipeline',
    base: 'Denver serves the DJ Basin and the Rockies midstream network, with a refinery in town, gas processing up and down the Front Range, and a growing advanced-manufacturing and aerospace base.',
    work: 'Facility inspection across the basin\'s plants and compression, refinery programmes at Commerce City, and aerospace-supply-chain work that brings NAS-style personnel expectations into an oilfield market.',
    anchor: 'the Commerce City refinery, the DJ Basin processing plants, and the aerospace manufacturers along the front range',
  },
  'salt-lake-city': {
    name: 'Salt Lake City', type: 'refining',
    base: 'Salt Lake City has a compact refining row on its north side, mining and smelting heritage at Bingham, aerospace composites manufacture, and a distribution-hub industrial base.',
    work: 'Refinery API programmes anchor the market; mining plant maintenance, composite-structure examination and general industrial work diversify it.',
    anchor: 'the refinery row along the interstate north of downtown and the copper operations west of the valley',
  },
  anchorage: {
    name: 'Anchorage', type: 'pipeline',
    base: 'Anchorage is the staging point for Alaska\'s oil infrastructure: North Slope facilities, the trans-Alaska pipeline\'s southern reaches, Cook Inlet platforms and the state\'s utility and aviation base.',
    work: 'Slope rotations put technicians on remote facilities for weeks; in-town work covers utilities, tanks and aviation. Logistics, certifications and equipment records must be flawless before anyone flies north.',
    anchor: 'the North Slope facilities served by rotation, the pipeline corridor, and Cook Inlet\'s platforms and terminals',
  },
  pittsburgh: {
    name: 'Pittsburgh', type: 'fabrication',
    base: 'Pittsburgh sits on top of the Appalachian gas play with a steel and heavy-manufacturing inheritance still working: mills, forge shops, a petrochemical complex down the Ohio, and the midstream systems threading the hills.',
    work: 'Shop examination for the mills and fabricators, gas-plant and pipeline programmes across the Marcellus, and speciality work at the cracker complex — a genuinely mixed book.',
    anchor: 'the mills along the Mon Valley, the cracker at Monaca, and the gathering systems across the tri-state gas fields',
  },
  chicago: {
    name: 'Chicago', type: 'fabrication',
    base: 'Greater Chicago is the Midwest\'s industrial clearing house: integrated steel at the lake\'s southern rim, one of the largest refineries in the country at Whiting, heavy fabrication, rail, and manufacturing depth in every direction.',
    work: 'Steel-mill maintenance inspection, refinery programmes, and a fabrication economy producing continuous AWS and ASME shop examination — with rail and bridge work adding structural scopes.',
    anchor: 'the Whiting refinery, the mills from South Works to Gary, and the fabricators across the metro and up the rail corridors',
  },
  gary: {
    name: 'Gary', type: 'fabrication',
    base: 'Gary and the Indiana lakeshore hold the country\'s heaviest concentration of integrated steelmaking — blast furnaces, coke plants, rolling mills — beside the refining complex at Whiting.',
    work: 'Mill outage inspection is the anchor: furnaces, cranes, high-temperature piping and lifting equipment on relentless maintenance cycles, with refinery turnaround surges next door.',
    anchor: 'the integrated works along the lakefront and the refinery at Whiting',
  },
  detroit: {
    name: 'Detroit', type: 'fabrication',
    base: 'Detroit\'s inspection market follows the automotive supply chain — press shops, powertrain plants, tooling — plus a refinery, steel processing, and the bridge and infrastructure work of an old industrial region.',
    work: 'Production-adjacent examination for automotive suppliers, refinery and utility programmes, and structural work; shop crews live on quick-turn jobs with same-week reporting expectations.',
    anchor: 'the automotive plants across the metro, the refinery in southwest Detroit, and the steel processors along the river',
  },
  cleveland: {
    name: 'Cleveland', type: 'fabrication',
    base: 'Cleveland keeps a working heavy-industrial base: integrated steel in the flats, forging and machining shops, chemical plants, a refinery to the west, and Great Lakes marine work.',
    work: 'Mill and forge-shop examination, refinery programmes at Lima and Toledo within range, and lake-freighter survey work in season — a market that rewards multi-code versatility.',
    anchor: 'the steel works in the industrial flats, the forge shops across the east side, and the lake terminals',
  },
  'toledo-ohio': {
    name: 'Toledo', type: 'refining',
    base: 'Toledo is a refining and glass town on the lake: two refineries, glass manufacture, and a solar-panel plant, with automotive suppliers filling the industrial parks.',
    work: 'Refinery API programmes are the backbone — vessels, piping circuits, tank farms — with manufacturing accounts adding shop and plant examination between turnarounds.',
    anchor: 'the two refineries on the city\'s edges and the glass and solar plants north of downtown',
  },
  birmingham: {
    name: 'Birmingham', type: 'fabrication',
    base: 'Birmingham grew on iron and still fabricates: pipe mills, cast-iron pressure pipe, structural fabricators and a heavy-industrial supply chain across central Alabama.',
    work: 'Pipe-mill examination — ERW weld testing, hydrotest support — structural fabrication to AWS, and plant maintenance across the region\'s mills and foundries.',
    anchor: 'the pipe works north of town and the fabrication shops along the valley',
  },
  atlanta: {
    name: 'Atlanta', type: 'industrial',
    base: 'Atlanta is the Southeast\'s commercial hub with an inspection market to match its infrastructure: power generation across Georgia, aerospace maintenance, data-centre construction, and the fabrication and construction economy of a fast-growing region.',
    work: 'Power-plant outage support, construction QA on commercial and data-centre projects, aerospace MRO examination, and the structural work a building boom generates.',
    anchor: 'the generating fleet across the state, the MRO bases, and the data-centre corridors north and east of the city',
  },
  charlotte: {
    name: 'Charlotte', type: 'power',
    base: 'Charlotte is a power-industry city — a major utility headquartered downtown, nuclear and gas fleets across the Carolinas, and an energy-manufacturing supply chain that includes turbine and nuclear-component shops.',
    work: 'Outage-season examination across the utility fleet, nuclear-adjacent work with its stricter personnel and procedure regime, and manufacturing examination for the energy OEM supply chain.',
    anchor: 'the nuclear and combined-cycle stations across the two states and the turbine-component shops around the metro',
  },
  nashville: {
    name: 'Nashville', type: 'industrial',
    base: 'Middle Tennessee\'s boom brought inspection demand with it: automotive assembly and suppliers, power generation on the Cumberland and Tennessee rivers, and relentless commercial construction.',
    work: 'Manufacturing examination for the automotive corridor, utility outage support, and construction QA — with a regional airport and rail base adding steady structural scopes.',
    anchor: 'the assembly plants south and east of the city and the river generating stations',
  },
  philadelphia: {
    name: 'Philadelphia', type: 'industrial',
    base: 'Philadelphia\'s inspection market spans the Delaware River\'s industrial history and its present: refining across the river, a naval shipyard\'s successor industries, chemical plants toward Wilmington, and dense infrastructure.',
    work: 'Refinery and chemical programmes on both banks, marine and shipyard work at the navy yard and downriver, and the bridge and transit examination an old dense region requires.',
    anchor: 'the refineries and chemical plants along the Delaware, the navy yard, and the river crossings',
  },
  newark: {
    name: 'Newark', type: 'marine',
    base: 'Newark and the north Jersey industrial belt run the largest port on the East Coast plus refining at Linden and Bayway, tank farms along the Arthur Kill, and the densest infrastructure corridor in the country.',
    work: 'Port crane and container-handling examination, refinery and terminal programmes, tank campaigns along the kills, and structural work on bridges and transit that never stops.',
    anchor: 'the container terminals at Elizabeth and Newark, the Bayway refinery, and the tank farms along the Arthur Kill',
  },
  norfolk: {
    name: 'Norfolk', type: 'marine',
    base: 'Hampton Roads is the largest naval complex in the world plus one of the East Coast\'s deepest commercial ports — shipbuilding, ship repair, coal export and container terminals in one harbour.',
    work: 'Naval and commercial ship repair examination under NAVSEA and class-society regimes, port equipment surveys, and the shipyard fabrication that supports both.',
    anchor: 'the naval shipyard and repair yards around the harbor, the container terminals, and the coal piers',
  },
  savannah: {
    name: 'Savannah', type: 'marine',
    base: 'Savannah\'s container port has grown into one of the country\'s busiest, alongside heavy manufacturing — construction-equipment plants, paper mills and an aerospace supplier base across the coastal plain.',
    work: 'Port crane and equipment examination on statutory cycles, manufacturing plant support, and construction QA following the port\'s logistics-warehouse boom.',
    anchor: 'the container terminals up the river and the manufacturing plants around the coastal corridor',
  },
  jacksonville: {
    name: 'Jacksonville', type: 'marine',
    base: 'Jacksonville combines three shipyards, a major naval station, port terminals and a rail hub — a marine-industrial market with steady military and commercial repair demand.',
    work: 'Ship repair examination across naval and commercial work, port and terminal equipment surveys, and the structural and rail scopes a logistics city generates.',
    anchor: 'the shipyards on the St. Johns, the naval station at Mayport, and the port terminals',
  },
  tampa: {
    name: 'Tampa', type: 'marine',
    base: 'Tampa Bay is Florida\'s industrial port: phosphate and fertiliser terminals, shipyards, power stations around the bay, and a construction market that never cools.',
    work: 'Terminal and tank examination for the phosphate and fuel trades, ship repair at the yards, power-plant outage support, and construction QA across the metro.',
    anchor: 'the port\'s fertiliser and fuel terminals, the shipyard at Port Tampa Bay, and the bay-side generating stations',
  },
  'los-angeles': {
    name: 'Los Angeles', type: 'refining',
    base: 'Los Angeles concentrates West Coast refining — the complexes at El Segundo, Carson, Wilmington and Torrance — beside the largest port complex in the hemisphere and an aerospace manufacturing base that never left.',
    work: 'Refinery API programmes under the country\'s tightest regulatory scrutiny, port crane and terminal examination, and aerospace work carrying NAS 410 personnel requirements.',
    anchor: 'the refinery belt from El Segundo to Wilmington, the San Pedro Bay terminals, and the aerospace plants across the south bay',
  },
  'long-beach': {
    name: 'Long Beach', type: 'marine',
    base: 'Long Beach pairs the port with refining and oil operations that still work beneath the city — a marine-industrial market where terminal, tank and refinery scopes interleave.',
    work: 'Container-crane and terminal examination, refinery and tank-farm programmes, and marine survey support across the harbor\'s repair facilities.',
    anchor: 'the container terminals, the refinery inland of the port, and the harbor-area tank farms',
  },
  bakersfield: {
    name: 'Bakersfield', type: 'pipeline',
    base: 'Kern County produces most of California\'s oil: mature heavy-oil fields with dense well and steam infrastructure, in-town refining, and the pipeline systems moving crude over the mountains.',
    work: 'Facility examination across steam generation, tank settings and gathering systems, refinery programmes, and pipeline integrity work along the valley corridors.',
    anchor: 'the heavy-oil fields around the city\'s edges and the refineries and pump stations along the valley',
  },
  martinez: {
    name: 'Martinez', type: 'refining',
    base: 'The Carquinez Strait shore holds the Bay Area\'s refining row — Martinez, Rodeo, Benicia, Richmond within a short drive — plus the chemical and terminal infrastructure that serves it.',
    work: 'API unit and tank programmes across the refining row, marine-terminal examination on the strait, and turnaround surges that draw crews from across the West.',
    anchor: 'the refineries along the strait from Richmond to Benicia and their marine terminals',
  },
  seattle: {
    name: 'Seattle', type: 'aerospace',
    base: 'Puget Sound\'s inspection market is aerospace-first — the airframer\'s plants and their supplier web — layered over shipyards, the ports of Seattle and Tacoma, and the refineries up at Anacortes and Cherry Point.',
    work: 'Aerospace examination under NAS 410 and Nadcap expectations, ship repair and naval work at the yards, port equipment surveys, and refinery programmes north along the sound.',
    anchor: 'the airframe plants at Everett and Renton, the shipyards at Bremerton and Harbor Island, and the refineries near Anacortes',
  },
  portland: {
    name: 'Portland', type: 'fabrication',
    base: 'Portland works steel and ships: a steel mill, ship repair on the Willamette, heavy fabricators, and the Columbia River\'s dams, ports and rail infrastructure.',
    work: 'Shipyard examination, mill and fabricator shop work to AWS and ASME, dam and hydro examination for the river system, and terminal work along both rivers.',
    anchor: 'the ship repair yard on Swan Island, the steel mill in north Portland, and the hydro projects up the Columbia',
  },
  minneapolis: {
    name: 'Minneapolis', type: 'industrial',
    base: 'The Twin Cities pair a refinery and river terminals with a diversified manufacturing economy — medical devices, food processing, machining — and the grain-and-rail logistics of the upper Midwest.',
    work: 'Refinery programmes at the Pine Bend complex, terminal and tank work on the river, and manufacturing examination across a supplier base that values quick shop turnaround.',
    anchor: 'the refinery at Rosemount, the river terminals, and the manufacturing corridors around the metro',
  },
  'kansas-city': {
    name: 'Kansas City', type: 'industrial',
    base: 'Kansas City is a rail and manufacturing crossroads with a refinery upstream at El Dorado and one in town\'s orbit, automotive assembly, and grain-processing plants across the region.',
    work: 'Rail-related structural and tank work, manufacturing examination for the assembly plants and their suppliers, and refinery support within the service radius.',
    anchor: 'the rail yards and intermodal terminals, the assembly plants, and the processing plants along the rivers',
  },
  'st-louis': {
    name: 'St. Louis', type: 'industrial',
    base: 'St. Louis holds a refinery across the river at Wood River, aerospace and defence manufacture, chemical plants along the Mississippi, and one of the inland waterway system\'s great barge hubs.',
    work: 'Refinery programmes, defence-aerospace examination with its personnel-qualification overhead, chemical plant support, and barge and terminal work on the river.',
    anchor: 'the Wood River refinery, the defence plants north of the city, and the barge terminals along both banks',
  },
  dallas: {
    name: 'Dallas', type: 'industrial',
    base: 'Dallas–Fort Worth is a headquarters and manufacturing metro: aerospace and defence plants on the Fort Worth side, midstream and services head offices, and a construction market of national scale.',
    work: 'Aerospace examination under military and NAS regimes, manufacturing and fabrication shop work, and construction QA across a metro that pours more concrete than most states.',
    anchor: 'the defence plants in Fort Worth, the supplier network across the metroplex, and the commercial construction corridors',
  },
  'fort-worth': {
    name: 'Fort Worth', type: 'aerospace',
    base: 'Fort Worth builds fighters and moves freight: the defence aviation plant and its supplier web, a major rail hub, and the Barnett Shale\'s remaining midstream infrastructure.',
    work: 'Defence-aerospace examination is the anchor — NAS 410 personnel, OEM approvals, audit-grade records — with rail, fabrication and gas-infrastructure work around it.',
    anchor: 'the aviation plant on the west side, the rail yards, and the gas infrastructure across the basin',
  },
  'san-antonio': {
    name: 'San Antonio', type: 'industrial',
    base: 'San Antonio pairs a refinery and Eagle Ford proximity with military aviation depots and a growing manufacturing base — automotive assembly south of town and aerospace MRO at the former air force bases.',
    work: 'Refinery and Eagle Ford facility programmes, depot-level aviation examination, and manufacturing support — a market that spans oilfield and aerospace regimes.',
    anchor: 'the refinery on the east side, the MRO campuses at the former bases, and the assembly plant to the south',
  },
  phoenix: {
    name: 'Phoenix', type: 'industrial',
    base: 'Phoenix\'s inspection demand rides its construction and semiconductor boom: fab construction QA, power generation including the country\'s largest nuclear station, aerospace suppliers, and mining within range.',
    work: 'Construction and mechanical-completion examination on fab and data-centre projects, outage work at the nuclear and gas fleet, and aerospace supplier examination across the valley.',
    anchor: 'the semiconductor campuses in the north and east valley, the nuclear station west of the city, and the aerospace shops around the airports',
  },
};

/* Aerospace type reuses the aerospace fit; map type→fit with fallback. */
const fitFor = (type) => TYPE_FIT[type] || TYPE_FIT.industrial;

/* ── Software-capability block — keyword-bearing, one shared block is fine
      (it is the product description, identical product everywhere) — but we
      vary the lead-in per market to keep pages distinct. ──────────────────── */
/* Type-specific lead-ins keep the capability block from being identical
   across the family (family baseline similarity is already high from the
   shared page template — every variant helps). */
const CAP_LEAD = {
  refining: (n) => `Turnaround markets punish disconnected tools hardest, so in ${n} Atlantis is deployed as one operational spine — <strong>NDT inspection software</strong> and the business layer on the same records:`,
  pipeline: (n) => `For dispersed field operations like ${n}'s, the system has to work where the trucks are — Atlantis runs as <strong>NDT inspection software</strong> with the office functions attached, not the other way round:`,
  fabrication: (n) => `Shop-driven markets like ${n} live on turnaround speed, and Atlantis is built so the report is a by-product of the work rather than a second job — <strong>NDT inspection software</strong> plus the commercial spine:`,
  aerospace: (n) => `In an audit-regime market like ${n}, the system of record IS the product — Atlantis holds the qualification, calibration and examination records as one auditable body of <strong>NDT inspection software</strong>:`,
  marine: (n) => `Survey-driven work in ${n} needs volume handling — thousands of readings per vessel — which is why Atlantis pairs <strong>NDT inspection software</strong> capture with the scheduling and certification machinery around it:`,
  power: (n) => `Outage-cycle markets like ${n} are won in the preparation months, and Atlantis is the readiness system as much as the <strong>NDT inspection software</strong> used during the outage itself:`,
  industrial: (n) => `A diversified book like ${n}'s needs one system that flexes across codes and clients — Atlantis packages <strong>NDT inspection software</strong> and business management without forcing one industry's workflow on another:`,
};

function capabilityBlock(m) {
  const lead = (CAP_LEAD[m.type] || CAP_LEAD.industrial)(esc(m.name));
  return `
    <h2>What an ERP built for NDT companies covers in ${esc(m.name)}</h2>
    <p>${lead}</p>
    <p><strong>Certification and personnel tracking.</strong> Every technician's methods, levels, expiry dates, eye-exam currency and Written Practice records under SNT-TC-1A or CP-189 — with the audit view a client's quality department expects, ready before they ask.</p>
    <p><strong>Equipment and calibration management.</strong> The instrument register with calibration due dates, certificates attached, and traceability that satisfies ISO 17025-minded reviewers — so nothing leaves the shop out of date.</p>
    <p><strong>Work order and crew scheduling.</strong> Who is qualified, who is available, what the job needs — matched in one view, from a single technician call-out to a full turnaround mobilisation.</p>
    <p><strong>NDT reporting.</strong> Findings captured once — in the field or the shop, offline if needed — flowing into code-referenced report templates, so the deliverable ships while the competitor is still retyping field sheets. This is the inspection management software layer clients actually see.</p>
    <p><strong>Quoting, invoicing and job costing.</strong> Hours, equipment and consumables tied to each work order as they happen, so every job shows its true margin and the next bid learns from the last one.</p>
    <p>Cloud-based, mobile in the field, and fully customizable to how your operation already works. <a href="/ndt-inspection-software">See the NDT inspection software platform</a> · <a href="/erp">the full business management suite</a> · <a href="/contact?service=erp">talk to us about ${esc(m.name)}</a>.</p>`;
}

function buildBlock(slug, m) {
  return `
    <section aria-label="NDT ERP for ${esc(m.name)} inspection companies in detail">
      <h2>The ${esc(m.name)} NDT services market, from the provider's side</h2>
      <p>${esc(m.base)}</p>
      <p>${esc(m.work)} For the companies doing this work, the operational load concentrates around ${esc(m.anchor)} — and the back office that keeps crews certified, equipment calibrated and reports moving is what decides which providers grow.</p>
      ${fitFor(m.type)}
      ${capabilityBlock(m)}
      <h2>Frequently asked questions</h2>
      <h3>Does Atlantis understand how ${esc(m.name)} inspection companies operate?</h3>
      <p>The platform is built by ASNT Level III practitioners around the workflows above — certification tracking, calibration, field data capture, code-referenced reporting — rather than adapted from generic field-service software. Regional specifics like the client mix around ${esc(m.anchor)} shape configuration, not custom development.</p>
      <h3>Can we keep our existing report formats and client requirements?</h3>
      <p>Yes — report templates, client-specific deliverables and your Written Practice structure are configuration. The system adapts to how you already serve your clients; switching software should never mean renegotiating what your clients receive.</p>
      <p>Related: <a href="/ndt-erp-solution">why inspection companies replace spreadsheets</a> · <a href="/ndt-erp-vs-generic-erp">NDT ERP vs generic ERP</a> · <a href="/erp/odoo-vs-netsuite-ndt-companies">compared with NetSuite</a>.</p>
    </section>`;
}

/**
 * Applies to /ndt-erp-{slug} routes present in the build.
 */
export function applyErpUsMarketDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;
  for (const [slug, m] of Object.entries(US_MARKETS)) {
    const r = byPath.get(`/ndt-erp-${slug}`);
    if (!r) continue;
    append(r, buildBlock(slug, m));
    n++;
  }
  return n;
}

/** §20.10: digits allowed ONLY in standards designations. §18: no pricing. */
export function assertErpUsNoNumbers() {
  const STANDARDS = /SNT-TC-1A|CP-189|ISO 17025|API 5\d\d|API 6\d\d|ASME|AWS|NAS 410|ISO 9712/g;
  const blob = (JSON.stringify(TYPE_FIT) + JSON.stringify(US_MARKETS))
    .replace(/<[^>]+>/g, ' ')
    .replace(STANDARDS, '');
  const digits = blob.match(/\d+/g);
  if (digits) throw new Error(`erp-us-market-depth contains numerals outside standards: ${[...new Set(digits)].slice(0, 10).join(', ')}`);
  if (blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr|\/year price/i)) throw new Error('erp-us-market-depth contains a price');
}
