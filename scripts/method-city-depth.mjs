/**
 * Method × city depth — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE EVIDENCE (90d to 2026-08-01)
 * 485 top-level /{method}-{city} pages split into two populations:
 *
 *   12 pages with city-specific research  →  2,584 impr  →  215 impr/page
 *   473 pages with generic method blocks  →  4,635 impr  →   10 impr/page
 *
 * A 22× per-page gap. The thin 473 ALREADY carry the generic method enrichment
 * from seo-postpass (`enrichMethodCityPages`) — so more generic method prose is
 * proven not to move these pages. What earns is local specificity, which is the
 * same conclusion 20.9 reached from the similarity data: a template with a city
 * name swapped in is a doorway page.
 *
 * HOW THIS STAYS GENUINELY LOCAL RATHER THAN TEMPLATED
 * Two authored knowledge sets compose per page:
 *   - CITIES: ~40 markets (89% of measured demand), each with unique prose
 *     about its industrial base, what gets inspected there, and the
 *     certification / regulatory regime that actually governs acceptance in
 *     that market. No two entries share sentences.
 *   - METHOD_IN_INDUSTRY: what each NDT method is actually used for in each
 *     industry — so a city's page only discusses the method against the
 *     industries that exist there.
 * The intersection differs per (method, city) pair, and the similarity gate in
 * noindex-recovery.mjs stays the referee: if this were template-swapping, it
 * would suppress it.
 *
 * HONESTY RULE (same as training-city-depth.mjs): no claimed office, lab or
 * crew base in any city where Atlantis has none. Delivery is described as it
 * is — teams mobilised to site under Atlantis procedures and Level III
 * oversight. No prices anywhere (CLAUDE.md §18).
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Methods ──────────────────────────────────────────────────────────────── */

const METHODS = {
  'ultrasonic-testing': {
    name: 'Ultrasonic Testing', short: 'UT',
    codes: 'ASME Section V Articles 4 and 5, ISO 17640 and ISO 16810, with thickness data feeding API 510, 570 and 653 remaining-life calculation',
  },
  'radiographic-testing': {
    name: 'Radiographic Testing', short: 'RT',
    codes: 'ASME Section V Article 2 and ISO 17636, with acceptance from the referencing construction code and API 1104 on pipeline girth welds',
  },
  'magnetic-particle-testing': {
    name: 'Magnetic Particle Testing', short: 'MT',
    codes: 'ASME Section V Article 7, ASTM E709 and E1444, and the ISO 9934 series, with acceptance from the governing construction code',
  },
  'penetrant-testing': {
    name: 'Penetrant Testing', short: 'PT',
    codes: 'ASME Section V Article 6, ASTM E165 and E1417, and the ISO 3452 series, with acceptance from the referencing construction code',
  },
  'eddy-current-testing': {
    name: 'Eddy Current Testing', short: 'ET',
    codes: 'ASME Section V Article 8 and its tubing appendices, ISO 15548, and ASTM E243 for tube examination',
  },
  'visual-testing': {
    name: 'Visual Testing', short: 'VT',
    codes: 'ASME Section V Article 9, AWS D1.1 visual acceptance for structural welds, and API 510, 570 and 653 in-service visual requirements',
  },
};

/* ── What each method does per industry ──────────────────────────────────── */

export const METHOD_IN_INDUSTRY = {
  refining: {
    'ultrasonic-testing': 'In refining, UT is the backbone of the corrosion programme — thickness monitoring at condition monitoring locations across crude, vacuum and coker circuits, shear-wave and phased array on repair welds, and high-temperature techniques where insulation cannot come off.',
    'radiographic-testing': 'Refinery turnarounds pull radiography for weld acceptance on piping tie-ins and vessel repairs, where a permanent image is required before insulation and fireproofing close the work.',
    'magnetic-particle-testing': 'MT is the workhorse for surface cracking on refinery equipment — nozzle welds, skirt attachments and internally on vessels during turnaround entry, particularly where wet H2S service makes surface breaking cracks credible.',
    'eddy-current-testing': 'Refinery exchanger bundles are examined with eddy current at every major turnaround — bobbin screening for wall loss across thousands of non-ferrous tubes, with array or rotating probes on the indications that matter.',
    'penetrant-testing': "Penetrant testing carries the refinery's non-magnetic work: austenitic overlay and cladding checks, stainless and alloy piping welds, and threaded or machined components where MT cannot be applied — with high-sensitivity penetrants on hydrogen-service equipment.",
    'visual-testing': 'Every refinery inspection starts visual: external corrosion under insulation evidence, support and foundation condition, and internal vessel entry examinations that decide what the rest of the scope becomes.',
  },
  petrochemical: {
    'ultrasonic-testing': 'Petrochemical units run aggressive services — thickness surveys and corrosion mapping under UT establish rates on circuits where a single misjudged CML can end a run early.',
    'radiographic-testing': 'New unit construction and revamp tie-ins in petrochemical plants specify radiography for closure welds where hydrotest is impractical, and film or digital records are retained for the unit life.',
    'magnetic-particle-testing': 'Petrochemical reactors and high-pressure equipment take MT on weld overlays and nozzle repairs, where surface-breaking indications must be found before hydrogen service resumes.',
    'eddy-current-testing': 'Cracker and polymer plant exchangers carry large non-ferrous bundles where bobbin eddy current is the only practical way to establish tube condition inside a shutdown window.',
    'penetrant-testing': "PT is the surface method for the stainless and nickel-alloy circuits petrochemical services demand — dye and fluorescent examination of alloy welds, flare components and machined sealing faces where ferromagnetic methods are off the table.",
    'visual-testing': 'Visual examination governs petrochemical turnaround scope — refractory condition, tray and internals damage, and coating breakdown are all visual calls that steer the volumetric work.',
  },
  lng: {
    'ultrasonic-testing': 'LNG service means cryogenic materials — UT on 9% nickel and stainless welds demands procedures qualified for the attenuation and geometry those materials bring, and thickness work on regas and boil-off circuits.',
    'radiographic-testing': 'LNG construction is radiography-heavy: tank shell courses, cryogenic piping and module fabrication welds are examined to demanding acceptance criteria with records kept for the facility life.',
    'magnetic-particle-testing': 'Carbon steel structures around LNG trains — pipe racks, module steel, tank bases — take MT on their welds, while the cryogenic alloys themselves fall to penetrant instead.',
    'eddy-current-testing': 'LNG plant exchangers and the fin-fan fleet supporting liquefaction take eddy current examination between runs, where tube failure means capacity loss on a scheduled cargo.',
    'penetrant-testing': "Cryogenic plant is austenitic almost throughout, which makes penetrant testing the default surface method — stainless piping welds, aluminium exchanger repairs and nickel-steel transitions all take PT to demanding acceptance classes.",
    'visual-testing': 'Perlite settlement evidence, outer-tank condition and pipework support checks make visual examination a scheduled activity across any LNG facility.',
  },
  offshore: {
    'ultrasonic-testing': 'Offshore, UT carries both topside integrity — thickness on separators, risers and process piping — and structural work, with lamination checks and weld examination on primary steel.',
    'radiographic-testing': 'Offshore fabrication yards radiograph structural and piping welds before load-out; in-service, radiography is used selectively where habitat access and source control can be arranged.',
    'magnetic-particle-testing': 'Fatigue is the offshore mechanism, and MT finds it — node welds, conductor guides and crane pedestals are examined on rotation because cyclic loading never stops.',
    'eddy-current-testing': 'Offshore MT gives way to eddy current and ACFM where coatings must stay intact — weld toes on primary structure can be examined through paint, saving the blast-and-recoat cycle.',
    'penetrant-testing': "Offshore, PT handles what MT cannot: duplex and super-duplex welds, clad connections and non-magnetic fittings, examined between weather windows with solvent-removable technique where washdown is impractical.",
    'visual-testing': 'General visual inspection programmes on platforms feed the anomaly register that drives everything else — coating breakdown, anode depletion, dropped-object damage and seafastening condition.',
  },
  pipeline: {
    'ultrasonic-testing': 'Pipeline integrity leans on UT to verify in-line inspection calls — direct assessment digs confirm metal-loss depth at the anomalies MFL reported, and AUT examines new girth welds where radiography is displaced.',
    'radiographic-testing': 'Girth weld radiography under API 1104 remains the default on new pipeline construction in most jurisdictions, with acceptance criteria that differ genuinely from plant codes.',
    'magnetic-particle-testing': 'Pipeline dig sites use MT on exposed weld seams and dents where cracking is suspected, and on repair sleeves before recoating and backfill.',
    'eddy-current-testing': 'Above-ground pipeline facilities — pump and compressor stations — bring exchanger and cooler bundles into eddy current scope alongside the mainline programme.',
    'penetrant-testing': "On pipelines PT serves the fittings and stations more than the line pipe — valve bodies, machined faces and stainless instrument tie-ins, plus weld repairs where a surface method must confirm complete excavation of a flaw.",
    'visual-testing': 'Coating condition, CP test-post readings context and dent or gouge assessment at dig sites are visual work that determines whether a pipeline anomaly needs anything more.',
  },
  marine: {
    'ultrasonic-testing': 'Marine work is thickness gauging at scale — hull plating diminution against class allowables, tank internals, and shaft and rudder stock examination during docking.',
    'radiographic-testing': 'Shipyard new-building and major steel renewal use radiography on butt welds in primary hull structure, to class society acceptance.',
    'magnetic-particle-testing': 'Class surveys call MT on hatch corners, crane pedestals, rudder horns and other fatigue-prone details, where the finding decides steel renewal scope.',
    'eddy-current-testing': 'Marine diesel engine components, turbocharger parts and shaft tapers are examined with eddy current during overhaul, where a missed crack ends up as a tow.',
    'penetrant-testing': "Shipyard PT concentrates on the non-magnetic scope — aluminium superstructures, propeller and shaft components, and stainless systems — where dye penetrant fits survey and repair work without magnetisation concerns.",
    'visual-testing': 'Every class survey is anchored in visual examination — structure, coatings in ballast tanks, and the close-up surveys that scaffolding and rafting exist to enable.',
  },
  aviation: {
    'ultrasonic-testing': 'Aerospace UT covers composite structures and bond lines as well as metal — impact damage mapping on skins, lamination checks on machined billets, and thickness on corrosion-suspect areas.',
    'radiographic-testing': 'Aircraft radiography examines castings, honeycomb water ingress and closed structure where disassembly is uneconomic, under NAS 410 / EN 4179 personnel requirements.',
    'magnetic-particle-testing': 'Landing gear and engine components in martensitic steels are magnetic particle territory — high-strength parts where grinding cracks and fatigue must be found at overhaul.',
    'eddy-current-testing': 'Eddy current is aviation\'s surface method of choice — fastener hole inspection with rotating probes, surface cracks at radii, and conductivity sorting after fire or heat damage.',
    'penetrant-testing': "Fluorescent penetrant inspection is aerospace's signature process: engine and airframe components pass through controlled FPI lines under NAS 410 personnel and Nadcap process audit, at sensitivity levels field methods never reach.",
    'visual-testing': 'Detailed visual inspection under an approved maintenance programme is the most performed aircraft inspection of all, with borescope work extending it inside engines and closed bays.',
  },
  power: {
    'ultrasonic-testing': 'Power plant UT ranges from boiler tube thickness campaigns to turbine rotor bore and blade root examination, where phased array brings coverage a single-angle probe cannot.',
    'radiographic-testing': 'High-energy piping welds in power stations are radiographed at construction and selectively in service, with records retained against creep-life assessment.',
    'magnetic-particle-testing': 'Turbine components, boiler headers and structural welds take MT during outages — surface cracking at stub welds and attachment details is a known header mechanism.',
    'eddy-current-testing': 'Condenser and feedwater heater tubing is eddy current\'s core power-generation work — full-bundle screening each major outage with plugging decisions made tube by tube.',
    'penetrant-testing': "Power-plant PT covers turbine blading, stainless welds in feedwater and steam chemistry systems, and repair excavation checks during outages — fluorescent technique in the shops, visible dye at the machine.",
    'visual-testing': 'Boiler internal inspections, casing and duct condition, and remote visual work in headers and drums set the volumetric scope for every outage.',
  },
  mining: {
    'ultrasonic-testing': 'Mining equipment lives on UT — wear plate and chute thickness, dragline and shovel boom welds, and mill trunnion examination where a failure stops the whole train.',
    'radiographic-testing': 'Fabrication of mining structures and pressure equipment for processing plants uses radiography at the workshop stage, where access is still easy.',
    'magnetic-particle-testing': 'Ground-engaging tools, crane and dragline structural welds and winder components are examined with MT on maintenance cycles driven by fatigue history.',
    'eddy-current-testing': 'Wire ropes on winders and draglines are examined electromagnetically, and processing-plant exchangers bring conventional eddy current into mining scope.',
    'penetrant-testing': "In mining plant PT examines the machined and non-magnetic scope — shaft journals, manganese components and repair welds on equipment where surface cracking decides service life between rebuilds.",
    'visual-testing': 'Structural visual inspection across conveyors, bins and headframes feeds the defect register that maintenance planning runs on.',
  },
  fabrication: {
    'ultrasonic-testing': 'Fabrication shops use UT for plate lamination checks before cutting and shear-wave examination of production welds, keeping repair rates visible while the job is still on the floor.',
    'radiographic-testing': 'Shop radiography remains the reference for coded vessel and spool fabrication — the image travels with the data book the client audits.',
    'magnetic-particle-testing': 'In-process MT on fit-ups, tack repairs and completed structural welds catches surface defects while rework is cheap.',
    'eddy-current-testing': 'Material verification and sorting — mixed stock, heat-treat condition checks — bring eddy current into fabrication QA alongside dedicated weld techniques.',
    'penetrant-testing': "Fab-shop PT clears the stainless and alloy production MT cannot touch — pressure-part welds, food-and-pharma finishes and machined components — usually visible dye at the bench and fluorescent where the class demands it.",
    'visual-testing': 'CWI-style visual acceptance is the first gate on every production weld: profile, undercut and reinforcement checked before any volumetric method is spent.',
  },
  automotive: {
    'ultrasonic-testing': 'Automotive plants apply UT to spot-weld verification and casting soundness, at production takt rather than turnaround pace.',
    'radiographic-testing': 'Safety-critical castings — steering knuckles, suspension components — are radiographed on sampling plans tied to process control.',
    'magnetic-particle-testing': 'Crankshafts, axles and forged steel components pass through MT benches as a production step, with demagnetisation controlled before assembly.',
    'eddy-current-testing': 'Eddy current earns its place in automotive as an inline method — hardness and structure verification, crack detection on machined surfaces, at line speed.',
    'penetrant-testing': "Automotive plants run penetrant lines on non-ferrous castings and machined safety components — fluorescent examination at production rate, with process controls per E1417 keeping bath sensitivity honest.",
    'visual-testing': 'Weld and coating visual inspection at defined stations, increasingly camera-assisted, is the volume NDT of any vehicle plant.',
  },
  steel: {
    'ultrasonic-testing': 'Steel producers run automated UT on plate and bar as a mill process, and maintenance teams use manual UT on mill housings, rolls and crane structures.',
    'radiographic-testing': 'Heavy fabrication attached to steelworks — ladles, furnace shells, structural rebuilds — draws radiography for coded welds.',
    'magnetic-particle-testing': 'Rolls, couplings, hooks and lifting equipment in a steel plant are examined with MT on statutory and maintenance cycles.',
    'eddy-current-testing': 'Hot and cold mill product inspection uses eddy current for surface defect detection at line speed, where a missed defect becomes a claim.',
    'penetrant-testing': "Steel-plant PT works the finishing end: machined rolls, non-magnetic fittings and weld repairs on austenitic furnace components, where dye penetrant confirms surface integrity before parts return to line.",
    'visual-testing': 'Refractory, shell and structural condition assessment across furnaces and casters is visual work under severe access constraints.',
  },
  rail: {
    'ultrasonic-testing': 'Rail flaw detection is an ultrasonic discipline — head, web and bolt-hole defects found from test trains and hand-held verification, plus axle examination in workshops.',
    'radiographic-testing': 'Thermite and flash-butt weld examination on track uses radiography where the geometry defeats other methods.',
    'magnetic-particle-testing': 'Wheelsets, axles and bogie frames pass through MT during overhaul, where fatigue cracking is the dominant find.',
    'eddy-current-testing': 'Rolling-contact fatigue on the railhead is screened with eddy current from inspection vehicles, complementing the ultrasonic programme.',
    'penetrant-testing': "Rail workshops apply PT to the non-magnetic and machined scope — axle journals during overhaul, aluminium body repairs and stainless brake components — beside the MT that owns the ferromagnetic parts.",
    'visual-testing': 'Track patrol and workshop visual examination remain the first detection layer for the whole railway inspection system.',
  },
};

/* ── Cities / markets — each entry hand-written, no shared sentences ──────── */

export const CITIES = {
  singapore: {
    name: 'Singapore', industries: ['refining', 'petrochemical', 'marine', 'lng', 'aviation'],
    base: 'Jurong Island concentrates one of the largest refining and petrochemical complexes in Asia, while the shipyards at Tuas and the aviation MRO cluster around Changi keep three distinct inspection markets running in one small territory.',
    scheme: 'Singapore work runs on dual expectations: MOM registration and SS/ISO alignment for statutory equipment, while international owners specify ASNT or PCN certification in contracts. Crews carrying both clear vendor onboarding fastest, and data books are audited closely by the majors operating on Jurong.',
    assets: 'process units on Jurong Island, shipyard newbuild and repair steel, LNG terminal equipment at SLNG, and airframe and engine components in the MRO sector',
  },
  bahrain: {
    name: 'Bahrain', industries: ['refining', 'pipeline', 'power', 'fabrication'],
    base: 'The Bapco Modernization Programme rebuilt the Sitra refinery into one of the Gulf\'s largest single sites, and with the Saudi crude line, ALBA\'s smelter infrastructure and coastal power and water plants, Bahrain packs heavy inspection demand into a small kingdom.',
    scheme: 'Bapco and its EPC contractors run Aramco-influenced specifications, so procedure qualification records and ASNT Level II/III certification are checked at mobilisation, and third-party witnessing of examinations is routine on capital work.',
    assets: 'Sitra refinery units, the A-B pipeline and terminal, aluminium plant equipment, and desalination and power plant pressure parts',
  },
  chicago: {
    name: 'Chicago', industries: ['refining', 'steel', 'fabrication', 'rail'],
    base: 'The Calumet corridor stacks the Whiting refinery — the largest inland refinery in the US — against integrated steel on the lake and one of the country\'s densest rail interchanges, so inspection demand in Chicago spans process, mill and track in a single metro.',
    scheme: 'US Midwest work runs on OSHA PSM, NBIC and state boiler law for in-service equipment, with owners specifying SNT-TC-1A based certification; refinery turnaround access requires TWIC-style site clearances and background processes handled ahead of mobilisation.',
    assets: 'Whiting process units and tank farms, blast furnace and caster equipment, structural fabrication for commercial projects, and rail infrastructure',
  },
  oman: {
    name: 'Oman', industries: ['refining', 'lng', 'pipeline', 'offshore'],
    base: 'Duqm\'s new refinery, the Sohar industrial port, Oman LNG at Qalhat and PDO\'s sprawling interior fields give Oman an inspection market that runs from brand-new capital plant to mature gathering systems in the same programme.',
    scheme: 'PDO and OQ specifications shape most scopes — Omanisation requirements affect crew composition, PDO\'s own approval processes govern procedures on their concessions, and ASNT-based certification with documented experience is the accepted baseline.',
    assets: 'Duqm and Sohar refinery units, LNG trains at Qalhat, the MOL and interior flowlines, and fabrication yards serving field development',
  },
  perth: {
    name: 'Perth', industries: ['mining', 'offshore', 'lng', 'fabrication'],
    base: 'Perth is the operations base for Australia\'s North West Shelf and the Pilbara — LNG trains and offshore platforms are run from here, and the mining fleet maintenance economy around Kwinana and Henderson generates constant structural and thickness work.',
    scheme: 'Australian scopes specify AS/NZS standards with AINDT-certified personnel; offshore work adds NOPSEMA safety-case expectations, and WA mining sites enforce their own inductions and verification of competency before anyone touches plant.',
    assets: 'LNG plant equipment run from Perth, offshore topsides, mining draglines, mills and conveyors, and Henderson fabrication and vessel work',
  },
  netherlands: {
    name: 'the Netherlands', industries: ['refining', 'petrochemical', 'offshore', 'power'],
    base: 'The Rotterdam–Moerdijk corridor is Europe\'s largest refining and chemicals cluster and its busiest port, with offshore wind logistics and gas infrastructure layering additional inspection demand onto an already dense industrial zone.',
    scheme: 'Dutch sites operate under PED/EN codes with Lloyd\'s, Bureau Veritas or TÜV involvement as notified bodies; ISO 9712 certification is the norm rather than the exception, and VCA safety certification is checked before site access.',
    assets: 'Pernis and Botlek process units, tank terminals across the port, offshore wind components at staging, and combined-cycle plant equipment',
  },
  kuwait: {
    name: 'Kuwait', industries: ['refining', 'petrochemical', 'pipeline', 'power'],
    base: 'KNPC\'s Mina Abdullah and Mina Al-Ahmadi refineries plus the giant Al-Zour complex make Kuwait one of the world\'s largest refining concentrations, and KOC\'s gathering centres and export infrastructure keep upstream inspection running year-round.',
    scheme: 'KNPC and KOC standards govern — pre-qualification is formal, ASNT Level II minimum with Level III procedure approval expected, and gate passes and HSE inductions consume real lead time that scheduling has to respect.',
    assets: 'Al-Zour, Mina Abdullah and Mina Al-Ahmadi units, KOC gathering centres, crude and product pipelines, and power and water plant equipment',
  },
  dubai: {
    name: 'Dubai', industries: ['aviation', 'marine', 'fabrication', 'power'],
    base: 'Dubai\'s inspection market is unusually diverse for the Gulf: Emirates\' MRO operations, the drydocks on the creek and at Jebel Ali, dense construction fabrication, and DEWA\'s power and desalination fleet all buy NDT — with ENOC\'s Jebel Ali refinery adding process work.',
    scheme: 'Dubai Municipality and DM-accredited third parties govern statutory equipment, while aviation work runs under GCAA-approved organisation rules with NAS 410-style personnel requirements; multinationals typically specify ASNT or PCN in contracts.',
    assets: 'airframe and engine components in MRO, ship repair steel at the drydocks, structural fabrication for construction, and DEWA generation and desalination plant',
  },
  nigeria: {
    name: 'Nigeria', industries: ['offshore', 'pipeline', 'refining', 'marine'],
    base: 'Nigeria\'s inspection demand centres on the Niger Delta — offshore platforms and FPSOs, an ageing pipeline network under constant integrity pressure, and the Dangote refinery, which added a world-scale process complex to Lagos overnight.',
    scheme: 'NUPRC and NMDPRA oversight frames oil and gas work, operators run their own stringent vendor approval, local-content rules under NOGICD shape crew composition, and security planning is part of every field mobilisation in a way it is not elsewhere.',
    assets: 'FPSO topsides and hulls, delta flowlines and export pipelines, Dangote and NNPC refinery units, and terminal and jetty infrastructure',
  },
  detroit: {
    name: 'Detroit', industries: ['automotive', 'steel', 'power', 'fabrication'],
    base: 'Detroit\'s inspection economy follows its plants: stamping, casting and assembly operations across the metro, the Dearborn steel complex, and the Marathon refinery on the Rouge adding process inspection to a manufacturing-dominated market.',
    scheme: 'Automotive work runs on customer-specific quality systems layered over SNT-TC-1A certification; production support means takt-time discipline and PPAP-style documentation rather than turnaround-style scoping.',
    assets: 'press and weld shop equipment, safety-critical castings and forgings, mill and finishing lines at Dearborn, and refinery units on the Rouge',
  },
  dallas: {
    name: 'Dallas–Fort Worth', industries: ['aviation', 'fabrication', 'pipeline', 'automotive'],
    base: 'DFW\'s market is aerospace-led — airframe manufacturing and MRO, defence programmes at Fort Worth — backed by a large structural fabrication base and the midstream corridors that cross North Texas.',
    scheme: 'Aerospace scopes demand NAS 410 / EN 4179 qualified personnel under Nadcap-audited processes, a materially different regime from the SNT-TC-1A basis that governs the region\'s structural and midstream work.',
    assets: 'airframe assemblies and engine components, structural steel for commercial construction, gathering and transmission pipelines, and manufacturing plant equipment',
  },
  australia: {
    name: 'Australia', industries: ['mining', 'lng', 'offshore', 'power', 'rail'],
    base: 'Australia\'s inspection demand splits between the resource states — Pilbara iron ore, Queensland coal and CSG-LNG, North West Shelf gas — and the east-coast industrial and power base, connected by some of the heaviest-haul railways in the world.',
    scheme: 'AS/NZS standards with AINDT certification are the national baseline; offshore facilities answer to NOPSEMA safety cases, state mines inspectorates impose their own competency verification, and site inductions are non-trivial time costs on every remote mobilisation.',
    assets: 'mining draglines, mills, conveyors and rail cars, LNG trains and offshore platforms, power station boilers and turbines, and heavy-haul track and rolling stock',
  },
  calgary: {
    name: 'Calgary', industries: ['pipeline', 'refining', 'power', 'fabrication'],
    base: 'Calgary is the head-office and engineering centre of the Canadian energy industry — pipeline integrity programmes for continental systems are run from here, with in-situ oil sands support, gas processing across the foothills, and a strong module fabrication sector.',
    scheme: 'Alberta work runs under ABSA on CSA B51-registered equipment, with CGSB certification the Canadian personnel standard; pipeline programmes answer to CER or AER regulation, and winter construction seasons drive scheduling in ways southern markets never see.',
    assets: 'transmission pipelines and pump stations, gas plants and compressor stations, oil sands facility equipment, and fabricated modules leaving Alberta yards',
  },
  chennai: {
    name: 'Chennai', industries: ['automotive', 'refining', 'power', 'fabrication'],
    base: 'Chennai is India\'s Detroit — automotive OEMs and their supplier tiers dominate — with the CPCL refinery, the port, and a heavy engineering base spanning boilers to defence manufacture rounding out a deep inspection market.',
    scheme: 'Indian statutory work references IBR for boilers and PESO where applicable, with ISNT and ASNT certifications both current in the market; OEM quality systems govern automotive supplier work with the documentation intensity that implies.',
    assets: 'automotive castings, forgings and weldments, CPCL process units, boiler pressure parts from the manufacturing cluster, and port and terminal equipment',
  },
  johannesburg: {
    name: 'Johannesburg', industries: ['mining', 'power', 'steel', 'rail'],
    base: 'Johannesburg sits on the Witwatersrand mining economy and serves as the maintenance hub for the deep-level gold and platinum industries, Eskom\'s coal fleet on the highveld, and the steel and rail infrastructure those industries run on.',
    scheme: 'South African scopes reference SANS standards with SAQCC-NDT personnel certification administered through SAIW; mine health and safety law places explicit duties around lifting and winding equipment that make statutory NDT a fixed calendar item.',
    assets: 'winders, headgear and shaft steel, mills and processing plant, Eskom boiler and turbine components, and rolling stock and rail infrastructure',
  },
  'saudi-arabia': {
    name: 'Saudi Arabia', industries: ['refining', 'petrochemical', 'pipeline', 'offshore', 'power'],
    base: 'The Kingdom concentrates the world\'s largest oil-processing infrastructure — Abqaiq, the export terminals, the Jubail and Yanbu industrial cities — alongside offshore fields in the Gulf and a build-out of new industries under Vision 2030 that all consume inspection.',
    scheme: 'Aramco engineering standards (SAES, SAEP) and SABIC specifications define most work: vendor approval is formal, procedures are approved against Aramco requirements before use, and inspector certification is verified — Aramco-approved Level IIs and IIIs are a named contractual requirement on many scopes.',
    assets: 'gas-oil separation plants and stabilisation columns, Jubail and Yanbu process complexes, the East-West pipeline and terminals, offshore platforms, and IWPP power and desalination plant',
  },
  charlotte: {
    name: 'Charlotte', industries: ['power', 'aviation', 'fabrication', 'steel'],
    base: 'Charlotte anchors the Carolinas\' energy engineering corridor — nuclear and gas generation fleets are engineered and supported from here, with turbine manufacturing, aviation MRO growth and a strong fabrication base in the surrounding counties.',
    scheme: 'Nuclear-adjacent work demands ASME Section XI thinking, 10 CFR 50 Appendix B quality programmes and personnel qualified under CP-189 rather than bare SNT-TC-1A — a materially higher documentation bar than commercial work carries.',
    assets: 'turbine and generator components, nuclear plant equipment within programme scope, fabricated structures and vessels, and aviation components',
  },
  seattle: {
    name: 'Seattle', industries: ['aviation', 'marine', 'fabrication', 'power'],
    base: 'Puget Sound\'s inspection market is built around aerospace manufacturing and its supplier web, the shipyards and ferry fleet on the Sound, and hydro generation east of the Cascades supported from the metro.',
    scheme: 'Aerospace primes enforce NAS 410 / EN 4179 qualification under Nadcap-accredited processes; marine work follows class society and USCG requirements — two demanding regimes that rarely accept each other\'s paperwork.',
    assets: 'airframe structures and composite assemblies, ferry and naval steel, supplier-tier machined and welded parts, and hydro turbine components',
  },
  toronto: {
    name: 'Toronto', industries: ['power', 'automotive', 'fabrication', 'rail'],
    base: 'The Greater Toronto area combines Ontario\'s nuclear fleet — Bruce, Pickering, Darlington support all draws on GTA services — with automotive assembly and parts plants, structural fabrication for a construction boom, and one of North America\'s busiest commuter rail systems.',
    scheme: 'Ontario statutory equipment runs under TSSA with CSA B51 registration; nuclear scopes demand CSA N285/N286 programme compliance and security clearances with long lead times, and CGSB certification is the standard personnel credential.',
    assets: 'steam generators, feeders and balance-of-plant equipment in nuclear scope, automotive production tooling and castings, structural steel, and rail vehicles and track',
  },
  pittsburgh: {
    name: 'Pittsburgh', industries: ['steel', 'power', 'fabrication', 'pipeline'],
    base: 'Pittsburgh remains a metals town — specialty steel and mill equipment along the Mon Valley — now overlaid with Appalachian gas processing and midstream build-out, nuclear engineering offices, and heavy fabrication that never left.',
    scheme: 'Pennsylvania in-service work follows NBIC and state boiler law; the gas build-out brought DOT pipeline regulation and API 1104 acceptance into everyday scope, and mill maintenance runs on statutory lifting-equipment cycles.',
    assets: 'mill stands, rolls and cranes, gas processing plant and compressor stations, fabricated vessels and structures, and power plant components',
  },
  thailand: {
    name: 'Thailand', industries: ['refining', 'petrochemical', 'automotive', 'power'],
    base: 'Map Ta Phut is Southeast Asia\'s largest petrochemical hub and sits beside Thailand\'s major refineries, while the Eastern Seaboard\'s automotive plants — the region\'s biggest vehicle exporter — run their own continuous inspection economy.',
    scheme: 'Thai statutory requirements under DIW combine with owner specifications from PTT group companies; ASNT-based certification is standard, and turnaround seasons at Map Ta Phut concentrate demand into sharp peaks that need early crew booking.',
    assets: 'crackers and aromatics units at Map Ta Phut, refinery process equipment, automotive production lines and castings, and gas-fired power plant',
  },
  melbourne: {
    name: 'Melbourne', industries: ['refining', 'power', 'fabrication', 'rail', 'aviation'],
    base: 'Melbourne\'s market spans the Altona and Geelong industrial belts, Latrobe Valley power infrastructure to the east, a large metro rail fleet, and fabrication serving the state\'s infrastructure programme.',
    scheme: 'Victorian scopes run on AS/NZS standards with AINDT-certified personnel and WorkSafe Victoria plant regulations governing statutory equipment; rail work follows the operators\' own engineering standards with tight possession windows.',
    assets: 'refinery and terminal equipment, power station boilers and turbines in the Valley, structural steel for infrastructure projects, and rolling stock and track',
  },
  boston: {
    name: 'Boston', industries: ['power', 'aviation', 'fabrication', 'marine'],
    base: 'New England\'s inspection work runs through Boston — gas and nuclear generation support, aerospace and defence suppliers along the 128 corridor, marine work across the harbour and shipyards, and the LNG import terminal at Everett.',
    scheme: 'Massachusetts statutory equipment follows NBIC with state boiler enforcement; defence and aerospace suppliers carry NAS 410 personnel requirements and ITAR-controlled documentation, which shapes who can even see the work.',
    assets: 'power plant pressure parts, aerospace and defence components, harbour and terminal infrastructure, and LNG import equipment',
  },
  'south-africa': {
    name: 'South Africa', industries: ['mining', 'power', 'petrochemical', 'steel', 'rail'],
    base: 'South Africa\'s inspection base spans the deep-level mines of the Witwatersrand and Bushveld, Eskom\'s coal fleet, Sasol\'s synfuels complex at Secunda — one of the most inspection-intensive plants anywhere — and the heavy-haul ore railways to the coast.',
    scheme: 'SANS standards and SAQCC-NDT certification through SAIW govern personnel; the Mine Health and Safety Act and OHS Act driven statutory inspections put winders, pressure equipment and lifting gear on fixed legal cycles.',
    assets: 'Secunda gasification and synthesis units, Eskom boilers and turbines, mine winders and processing plant, and Transnet rail and port equipment',
  },
  vietnam: {
    name: 'Vietnam', industries: ['refining', 'offshore', 'fabrication', 'power'],
    base: 'Vietnam\'s Dung Quat and Nghi Son refineries, the offshore fields off Vung Tau, fast-growing fabrication yards taking regional work, and a coal-to-gas power transition give it one of Southeast Asia\'s fastest-expanding inspection markets.',
    scheme: 'PetroVietnam group specifications lead oil and gas work with international codes applied directly; ASNT certification is the accepted currency, and yards building for export work routinely host client and class surveillance on top of local requirements.',
    assets: 'refinery process units, offshore platforms and FSOs, fabricated jackets and modules for export, and new-build power plant',
  },
  kochi: {
    name: 'Kochi', industries: ['refining', 'marine', 'fabrication', 'power'],
    base: 'Kochi carries BPCL\'s expanded refinery — among India\'s largest — Cochin Shipyard building and repairing up to carrier scale, the LNG terminal at Puthuvype, and a fabrication base serving all three.',
    scheme: 'IBR governs statutory boilers and steam lines, classification societies rule the shipyard work, and both ISNT and ASNT certifications circulate; refinery shutdown windows concentrate the market\'s demand sharply.',
    assets: 'refinery units and tankage, hull and outfit steel at the shipyard, LNG terminal equipment, and port infrastructure',
  },
  lagos: {
    name: 'Lagos', industries: ['refining', 'marine', 'pipeline', 'fabrication'],
    base: 'Lagos hosts the Dangote refinery and petrochemical complex — the largest single-train refinery in the world — alongside the Apapa and Tin Can port complexes, coastal terminals, and the fabrication yards at Snake Island.',
    scheme: 'NMDPRA oversight and owner specifications govern; the Dangote complex applies international codes with formal vendor approval, and local-content requirements under NOGICD shape team composition on most contracts.',
    assets: 'refinery and petrochemical units, storage terminals and jetty pipelines, fabricated structures from the island yards, and port equipment',
  },
  denver: {
    name: 'Denver', industries: ['pipeline', 'refining', 'mining', 'power'],
    base: 'Denver serves the DJ Basin\'s gathering and processing systems, the Suncor refinery at Commerce City, Front Range aerospace manufacturing, and the mining operations scattered through the mountain west.',
    scheme: 'Colorado oil and gas work answers to ECMC rules alongside DOT pipeline regulation; SNT-TC-1A based certification is the norm, with API 510/570/653 inspectors dispatched from the metro across the mountain states.',
    assets: 'gathering lines, compressor and processing stations, refinery units at Commerce City, and mine and mill equipment across the region',
  },
  japan: {
    name: 'Japan', industries: ['refining', 'power', 'steel', 'automotive', 'rail'],
    base: 'Japan\'s coastal industrial belts — Keihin, Chukyo, Setouchi — stack refineries, steelworks, and the world\'s densest advanced manufacturing base, with a nuclear restart programme and the Shinkansen network adding regulated inspection regimes of their own.',
    scheme: 'JIS standards and NDIS certification under JSNDI govern domestic personnel; METI and NRA regulation frames energy-sector inspection, and international crews typically work alongside Japanese certified inspectors rather than in place of them.',
    assets: 'refinery and petrochemical units, blast furnace and mill equipment, automotive production plants, and power station components',
  },
  'abu-dhabi': {
    name: 'Abu Dhabi', industries: ['offshore', 'refining', 'pipeline', 'power'],
    base: 'ADNOC\'s integrated system — Ruwais refining and petrochemicals, the offshore fields at Zakum and beyond, Habshan gas processing, and the export terminals — makes Abu Dhabi one of the most concentrated inspection markets in the world.',
    scheme: 'ADNOC\'s AGES specifications and ICV (In-Country Value) requirements govern vendor selection and crew composition; FANR adds nuclear-grade regulation around Barakah, and ADNOC approval of procedures and personnel is a gate, not a formality.',
    assets: 'Ruwais process units, offshore platforms and artificial islands, gas processing at Habshan, cross-country pipelines, and Barakah-adjacent conventional plant',
  },
  'los-angeles': {
    name: 'Los Angeles', industries: ['refining', 'aviation', 'marine', 'fabrication'],
    base: 'The South Bay refinery cluster — El Segundo, Carson, Wilmington, Torrance — runs beside the largest port complex in the Americas and an aerospace industry that never left the basin, giving LA parallel process, marine and aviation inspection economies.',
    scheme: 'California adds SCAQMD environmental constraints and Cal/OSHA PSM enforcement on top of the usual NBIC and API framework; aerospace primes require NAS 410 qualification, and refinery turnaround badging processes need lead time.',
    assets: 'South Bay refinery units and tank farms, port cranes and terminal infrastructure, airframe and space hardware, and structural fabrication',
  },
  qatar: {
    name: 'Qatar', industries: ['lng', 'petrochemical', 'offshore', 'pipeline'],
    base: 'Ras Laffan is the largest LNG export complex on earth, and the North Field expansion is adding trains at a pace that keeps construction-phase inspection running alongside the operating fleet\'s turnaround cycle, with Mesaieed\'s petrochemicals to the south.',
    scheme: 'QatarEnergy specifications govern with formal vendor registration; ASNT Level II/III certification is verified at gate level, and the expansion projects run EPC quality regimes with full-time client surveillance over NDT subcontractors.',
    assets: 'LNG trains and storage at Ras Laffan, offshore platforms and trunklines from the North Field, petrochemical units at Mesaieed, and condensate refining',
  },
  france: {
    name: 'France', industries: ['power', 'refining', 'aviation', 'rail', 'marine'],
    base: 'France\'s inspection market is shaped by the largest nuclear fleet in Europe and the aerospace industry around Toulouse, with Normandy and Mediterranean refining, naval construction at the coasts, and the TGV network completing a regulation-heavy landscape.',
    scheme: 'COFREND certification under EN ISO 9712 is the personnel standard; nuclear work runs under RCC-M and ESPN rules with EDF\'s own qualification regimes, and aerospace follows EN 4179 — three separate qualification worlds that do not interchange.',
    assets: 'reactor coolant and secondary-circuit components, refinery units, airframe assemblies, high-speed rolling stock and track, and naval steel',
  },
  germany: {
    name: 'Germany', industries: ['petrochemical', 'automotive', 'steel', 'power', 'fabrication'],
    base: 'Germany combines Europe\'s chemical heartland along the Rhine — Ludwigshafen, Leverkusen, the Ruhr — with the continent\'s largest automotive industry, remaining steel capacity, and an energy transition refitting ports and grids at industrial scale.',
    scheme: 'DIN/EN standards with DGZfP-linked ISO 9712 certification are the baseline; pressure equipment answers to ZÜS inspection bodies under the Betriebssicherheitsverordnung, and automotive OEM quality systems impose their own audit-heavy documentation.',
    assets: 'chemical plant equipment along the Rhine corridor, automotive production and press-shop tooling, mill equipment, and energy infrastructure in conversion',
  },
  indonesia: {
    name: 'Indonesia', industries: ['refining', 'lng', 'mining', 'power', 'offshore'],
    base: 'Indonesia\'s market spreads across the archipelago — Pertamina\'s refinery upgrades, LNG at Bontang and Tangguh, the world\'s largest nickel processing build-out on Sulawesi, and coal and gas power across Java.',
    scheme: 'Migas certification requirements apply to oil and gas work alongside owner specifications; B4T and Depnaker requirements touch statutory equipment, and the nickel smelter boom brings Chinese EPC quality systems into the same market as Western owner standards.',
    assets: 'refinery units under RDMP upgrades, LNG trains, nickel smelters and processing plants, offshore platforms, and power station boilers',
  },
  'new-york': {
    name: 'New York', industries: ['power', 'fabrication', 'marine', 'rail'],
    base: 'The New York market runs on infrastructure — power generation across the state, the harbour and its terminals, one of the world\'s largest transit systems, and the structural steel that a continuously rebuilding city consumes.',
    scheme: 'New York State boiler law and NBIC govern statutory equipment; structural work on public projects carries AWS D1.1 CWI inspection requirements written into contract, and transit work follows the authorities\' own engineering standards with night-possession scheduling.',
    assets: 'generating station pressure parts, bridge and building structural steel, port and terminal equipment, and subway and commuter rail infrastructure',
  },
  norway: {
    name: 'Norway', industries: ['offshore', 'marine', 'lng', 'power'],
    base: 'Norway\'s continental shelf remains one of the world\'s most advanced offshore provinces — subsea-heavy developments, floating production, Hammerfest LNG in the Arctic — supported by yards and bases along a coastline that also builds and services much of the world\'s advanced shipping.',
    scheme: 'NORSOK standards define offshore work, with PSA (Havtil) regulation above them; Nordtest/ISO 9712 certification is standard, and subsea and cold-climate qualification requirements make procedure demonstrations more demanding than warm-water equivalents.',
    assets: 'platform topsides and floating production units, subsea equipment at onshore bases, Melkøya LNG plant, ship steel at the yards, and hydro plant components',
  },
  'south-korea': {
    name: 'South Korea', industries: ['marine', 'refining', 'petrochemical', 'power', 'steel'],
    base: 'The Ulsan–Onsan–Busan corridor concentrates the world\'s largest shipyards beside giant refineries and petrochemical complexes, with POSCO steelworks and a nuclear fleet extending the inspection economy up and down the coast.',
    scheme: 'KS standards with KSNT certification govern domestic work; the yards run class-society regimes across every hull, and nuclear scopes fall under KINS regulation with KEPIC codes — export fabrication routinely carries the destination country\'s requirements on top.',
    assets: 'hull blocks and outfitting at the big-three yards, refinery and cracker equipment, mill and caster components at POSCO, and nuclear plant systems',
  },
  ahmedabad: {
    name: 'Ahmedabad', industries: ['petrochemical', 'pipeline', 'fabrication', 'power'],
    base: 'Gujarat\'s industrial corridor around Ahmedabad reaches from the world\'s largest refinery complex at Jamnagar through Dahej and Hazira\'s petrochemical and LNG hubs, connected by one of India\'s densest pipeline networks and a deep fabrication base.',
    scheme: 'IBR and PESO statutory frameworks apply, with PNGRB regulation over the pipeline network; both ISNT and ASNT certifications circulate, and the private refiners run vendor approval regimes as demanding as any international operator.',
    assets: 'refinery and petrochemical units across the corridor, cross-country gas and product pipelines, fabricated vessels and structures, and terminal equipment',
  },
  brisbane: {
    name: 'Brisbane', industries: ['lng', 'mining', 'power', 'rail', 'fabrication'],
    base: 'Brisbane serves the Queensland CSG-to-LNG chain — the three Curtis Island trains and their upstream gathering — alongside the Bowen Basin coal industry, its heavy-haul railways, and the state\'s power fleet.',
    scheme: 'AS/NZS standards and AINDT certification are the baseline, with Queensland\'s coal mining safety legislation adding site competency requirements; LNG operators run integrated turnaround regimes where NDT slots are booked far ahead.',
    assets: 'LNG trains on Curtis Island, upstream compression and gathering, draglines and CHPP plant in the Bowen Basin, coal rail infrastructure, and power stations',
  },
  /* ── 2026-08-05 additions — markets earning training/method impressions
        that the first 40 missed (doha 252i, jubail 196i, hyderabad 188i…) ── */
  doha: {
    name: 'Doha', industries: ['lng', 'refining', 'fabrication', 'marine'],
    base: 'Qatar\'s inspection economy is built around Ras Laffan — the world\'s largest LNG export complex, now expanding again under the North Field projects — with QatarEnergy\'s Mesaieed refining and petrochemical zone, dense EPC fabrication for those expansions, and Hamad Port\'s marine work rounding out the demand.',
    scheme: 'QatarEnergy approval governs work on its assets, layered over Qatar Construction Specification requirements for the wider industrial base; personnel certification in contracts is typically ASNT SNT-TC-1A or PCN, and the North Field EPC packages import each contractor\'s qualified-welder and NDT regimes wholesale.',
    assets: 'LNG trains and storage at Ras Laffan, GTL and condensate processing, Mesaieed refinery and petrochemical units, expansion-project fabrication, and port and marine structures',
  },
  jubail: {
    name: 'Jubail', industries: ['petrochemical', 'refining', 'power', 'fabrication'],
    base: 'Jubail is the largest industrial city in the world by petrochemical concentration: SABIC affiliate complexes side by side along the Royal Commission grid, the SATORP refinery, Marafiq\'s power and desalination utilities, and the fabrication yards that feed them all — a turnaround somewhere in Jubail nearly every month of the year.',
    scheme: 'Saudi Aramco SAES standards and contractor approval govern Aramco-linked work, while SABIC engineering standards run their own vendor and inspector approval for the affiliate plants; Royal Commission requirements sit over construction, and certification in practice means ASNT-based schemes with operator-specific endorsement.',
    assets: 'crackers and derivative units across the SABIC complexes, SATORP refinery equipment, utility boilers and desalination plant, tank farms, and structural fabrication',
  },
  dammam: {
    name: 'Dammam', industries: ['refining', 'offshore', 'fabrication', 'marine'],
    base: 'The Dammam–Dhahran–Khobar corridor is Saudi Aramco\'s home ground: the company is headquartered next door in Dhahran, Ras Tanura\'s refinery and terminal sit up the coast, offshore field logistics stage through the area, and King Abdulaziz Port brings steady marine and cargo-gear examination alongside the fabrication yards serving Aramco programmes.',
    scheme: 'Aramco SAES standards and its inspector/vendor approval system dominate — an unapproved technician does not touch Aramco work regardless of certificate — with ASNT SNT-TC-1A the underlying personnel scheme and port and classification-society rules governing the marine side.',
    assets: 'refinery and terminal equipment at Ras Tanura, offshore platform components staged onshore, fabrication-yard weldments, port cranes and marine structures',
  },
  'ras-al-khaimah': {
    name: 'Ras Al Khaimah', industries: ['fabrication', 'marine', 'power', 'mining'],
    base: 'RAK\'s industrial base is heavier than its size suggests: cement and lime plants working the Hajar quarries, RAK Gas processing, ceramics manufacturing at world scale, free-zone metal fabrication, and a working port with ship repair — quarrying and bulk handling equipment adding a genuine mining-style inspection load.',
    scheme: 'UAE federal requirements and free-zone authority rules govern statutory plant, with insurers and classification societies driving marine and lifting examination; contracts typically specify ASNT-based certification, and Emirati operators increasingly ask for ISO 9712 as well.',
    assets: 'rotary kilns and mills in the cement plants, gas processing equipment, quarry crushers and conveyors, fabricated structures from the free zones, and port and ship-repair steel',
  },
  hyderabad: {
    name: 'Hyderabad', industries: ['aviation', 'fabrication', 'power', 'automotive'],
    base: 'Hyderabad has become India\'s aerospace manufacturing city: Tata\'s aerostructure joint ventures build fuselage and wing assemblies for global OEMs, Safran and GE run engine-component plants, and defence programmes cluster around the DRDO missile complex — all of it under aerospace NDT rules — alongside pharma equipment fabrication and the NTPC power belt to the north.',
    scheme: 'Aerospace work runs under NAS 410 / EN 4179 personnel requirements with OEM (Nadcap-audited) special-process approval — a different regime from industrial NDT entirely; industrial plant follows IBR for boilers and ISNT (NCB) or ASNT certification in contracts.',
    assets: 'aerostructure assemblies and engine components, defence hardware, pharmaceutical process equipment, boiler and power plant components, and precision castings and forgings',
  },
  surat: {
    name: 'Surat', industries: ['petrochemical', 'steel', 'fabrication', 'lng'],
    base: 'Surat\'s inspection demand comes from the Hazira belt on its doorstep: Reliance\'s Hazira petrochemical complex, ONGC\'s gas processing terminal, AM/NS India\'s flat steel works, L&T\'s heavy engineering yard — which fabricates reactors and defence hulls few other Indian yards can — and Shell\'s Hazira LNG terminal.',
    scheme: 'IBR governs boilers and steam systems, PESO the pressurised gas side, and the operators layer their own approval on top — Reliance and L&T both run demanding vendor and NDT-agency qualification; personnel certification is ISNT (NCB) or ASNT, with EN/ISO 9712 appearing on export fabrication.',
    assets: 'cracker and polymer units at Hazira, gas terminal and LNG regasification equipment, steel mill plant, heavy fabricated reactors and vessels, and marine outfall and jetty structures',
  },
  vizag: {
    name: 'Visakhapatnam', industries: ['refining', 'steel', 'marine', 'power'],
    base: 'Visakhapatnam combines four inspection-heavy industries in one harbour city: HPCL\'s Visakh refinery mid-expansion, the Rashtriya Ispat steel plant, India\'s eastern naval dockyard plus Hindustan Shipyard, and a major port — refinery turnarounds, mill maintenance and survey-driven marine work all drawing on the same technician pool.',
    scheme: 'IBR and PESO cover statutory plant, classification societies and naval standards govern the shipyard side, and HPCL and RINL run their own inspection-agency approvals; ISNT (NCB) certification is the domestic baseline with ASNT specified on refinery contract work.',
    assets: 'refinery columns, heaters and exchangers, blast furnace and rolling mill equipment, ship hulls and naval steel in the yards, port cranes, and captive power plant',
  },
  kolkata: {
    name: 'Kolkata', industries: ['refining', 'marine', 'steel', 'power'],
    base: 'Kolkata anchors eastern India\'s industrial corridor: IOCL\'s Haldia refinery and the petrochemical complex beside it downriver, Garden Reach\'s warship building, the Kolkata and Haldia port systems, and the Durgapur–Burnpur steel belt inland — an old industrial base whose ageing plant needs more examination, not less.',
    scheme: 'IBR governs the boiler stock, classification societies and naval rules the shipbuilding, and IOCL and SAIL their own agency approvals; personnel certification is ISNT (NCB) — whose national office sits in Kolkata — or ASNT where contracts import it.',
    assets: 'refinery and petrochemical equipment at Haldia, warship and commercial hulls at Garden Reach, port infrastructure and cargo gear, blast furnaces and mills in the steel belt, and legacy thermal power plant',
  },
};

/* ── Composition ──────────────────────────────────────────────────────────── */

function buildBlock(methodKey, city) {
  const method = METHODS[methodKey];
  const industryParas = city.industries
    .map((ind) => METHOD_IN_INDUSTRY[ind] && METHOD_IN_INDUSTRY[ind][methodKey])
    .filter(Boolean)
    .slice(0, 4);

  return `
    <section aria-label="${esc(method.name)} in ${esc(city.name)}">
      <h2>Why ${esc(city.name)} generates ${esc(method.short)} demand</h2>
      <p>${esc(city.base)}</p>
      ${industryParas.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}

      <h2>What typically gets examined</h2>
      <p>In practice that means ${esc(method.short)} work across ${esc(city.assets)} — with scope set by the damage mechanisms each asset actually runs, not by a standard menu.</p>

      <h2>Certification and acceptance in ${esc(city.name)}</h2>
      <p>${esc(city.scheme)}</p>
      <p>Examinations themselves are performed to ${esc(method.codes)}. The evidence chain — technician certification current on the day, instrument and reference block calibration, and the procedure revision in force — travels with every report, because that bundle is what an audit actually checks.</p>

      <h2>Working with Atlantis in ${esc(city.name)}</h2>
      <p>Atlantis delivers ${esc(method.name.toLowerCase())} through inspection teams mobilised to site, working under Atlantis procedures with ASNT Level III oversight — we are straightforward that this is a mobilised model rather than a walk-in local office, because for planned inspection work that is usually the better arrangement anyway: the crew, procedures and equipment arrive matched to your scope. <a href="/${methodKey}">Read the ${esc(method.short)} service overview</a>, see <a href="/inspection-management-software">how results are recorded and retrieved</a>, or <a href="/contact?service=inspection">tell us about the ${esc(city.name)} scope</a> and we will respond with an honest view on mobilisation.</p>
    </section>`;
}

/** The 12 pages that already carry hand-authored city research — do not stack
 *  a second local block onto them. */
const ALREADY_ENRICHED = new Set([
  '/eddy-current-testing-dallas', '/eddy-current-testing-dubai', '/eddy-current-testing-singapore',
  '/magnetic-particle-testing-oman', '/radiographic-testing-netherlands', '/radiographic-testing-perth',
  '/radiographic-testing-singapore', '/ultrasonic-testing-bahrain', '/ultrasonic-testing-chicago',
  '/ultrasonic-testing-detroit', '/ultrasonic-testing-kuwait', '/ultrasonic-testing-singapore',
]);

/**
 * @param routes  prerender route list
 * @param append  (route, html) => void  from thin-page-upgrade.mjs
 * @returns count of pages localised
 */
export function applyMethodCityDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;
  for (const methodKey of Object.keys(METHODS)) {
    for (const [slug, city] of Object.entries(CITIES)) {
      const path = `/${methodKey}-${slug}`;
      if (ALREADY_ENRICHED.has(path)) continue;
      const r = byPath.get(path);
      if (!r) continue;
      append(r, buildBlock(methodKey, city));
      n++;
    }
  }
  return n;
}

/** Guard: no prices anywhere in this module's copy (CLAUDE.md §18). */
export function assertNoPricesInMethodCityDepth() {
  const blob = JSON.stringify(CITIES) + JSON.stringify(METHOD_IN_INDUSTRY);
  const m = blob.match(/[$£€₹]\s?\d|\b\d+\s?(?:USD|EUR|GBP|SAR|AED|INR)\b|per day|\/day|per hour/gi);
  if (m) throw new Error(`method-city-depth contains pricing: ${[...new Set(m)].join(', ')}`);
}
