/**
 * ERP US city texture — 2026-08-09.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS (read before changing it)
 *
 * 60 /ndt-erp-* pages ship with `noindex`. Measured on the 2026-08-08 build:
 * all 60 are substantial (1,260–2,070 words) and none carry the generic-city
 * marker, so they fail the gate purely on sibling SIMILARITY. Splitting them:
 *
 *   • 49 pages (~1,270–1,430w) never received per-city research at all.
 *     A word-level diff of the worst pair (ahmedabad vs bangalore) found
 *     1,395 of 1,423 words identical — a 566-word shared leadership/links
 *     block, plus shared feature lists. These are name-swap permutations.
 *     They STAY NOINDEX. Varying boilerplate to slip them past a duplicate
 *     gate would manufacture doorway pages, which is the precise failure the
 *     gate was built to stop (§20.2, §23.3).
 *
 *   • 11 US pages (~2,060w) DID receive genuine per-city research from
 *     erp-us-market-depth.mjs, but that script shares one ERP-fit block per
 *     market TYPE. Same-type US cities therefore collide on ~800 words of
 *     identical type prose that masks their real differences — e.g.
 *     chicago↔detroit 0.756, cincinnati↔milwaukee 0.785, atlanta↔seattle 0.606.
 *     For these, the similarity is an ARTEFACT of the shared block, not a
 *     description of the content. Adding real per-city operating texture is
 *     both the honest fix and the one that clears the gate.
 *
 * This module handles the 11 only. Each block is hand-written from the named
 * industrial base of that metro — verifiable employers, plants and regulators
 * — and is written for the audience the ERP pages serve: OWNERS AND OPS
 * MANAGERS OF NDT INSPECTION SERVICE COMPANIES.
 *
 * Constraints enforced (same as §28.2):
 *   - §18: no pricing of any kind.
 *   - §20.10: no digits outside standards designations (API 510/570/653,
 *     ASME V, SNT-TC-1A, CP-189, ISO 17025/9712, NAS 410, AWS D1.1, F-35).
 *   - §26.1: city-specific research only — no name-swapped sentences.
 *
 * EXTENDED 2026-08-11 (Canada ERP phase 3): the object below now also carries
 * the 7 Canada /ndt-erp-{city} pages (Calgary, Edmonton, Fort McMurray,
 * Halifax, Montreal, Toronto, Vancouver). Those pages shipped with NO
 * per-market data at all — a plain ErpLocationPage wrapper — so they carry
 * the same sibling-similarity exposure §31.5 documents for un-researched
 * permutations. GSC shows ~zero Canada-ERP search demand at city grain, so
 * this is index-health work, not a ranking bet: real per-city operating
 * texture, WebSearch-verified, written for the same audience (owners/ops
 * managers of NDT inspection service companies evaluating ERP software).
 * Kept in the same map/function pair rather than a parallel structure
 * because the mechanism is nationality-agnostic — `applyErpUsCityTexture`
 * matches on the `/ndt-erp-{slug}` route regardless of country — and a
 * second copy of the apply/assert plumbing would only invite drift. Same
 * digit and pricing constraints apply; CAN/CGSB-48.9712 is written as
 * "ISO 9712" in these entries (an identical adoption, per NRCan's own
 * transition notice) specifically so it passes the digit gate below.
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Per-city operating texture. Deliberately NOT generated from a pattern:
 * each entry names that metro's actual asset base and the inspection-company
 * behaviour it produces.
 */
export const US_CITY_TEXTURE = {
  atlanta: {
    h: 'What inspection work in metro Atlanta actually looks like',
    p: [
      `Atlanta is not a refinery town, and inspection companies that price it like one misread the market. The work here is spread across a power fleet, a dense manufacturing base and a logistics spine: Southern Company's generating assets including the Vogtle nuclear units, Georgia-Pacific's mill and building-products operations, Kia's assembly plant and its tiered supplier network south of the city, and the pipeline and terminal infrastructure that moves fuel up the eastern seaboard from Colonial's system.`,
      `That mix produces a scheduling problem rather than an outage problem. A single crew may run boiler-tube work under ASME Section V one week, structural weld verification to AWS D1.1 on a distribution centre the next, and supplier-quality NDT for an automotive tier-one after that — each with a different client portal, a different acceptance standard and a different documentation expectation. Inspection management software earns its place here by holding one qualification matrix that answers all three, so dispatch stops depending on who remembers which technician holds which stamp.`,
      `The nuclear adjacency changes the records bar for everyone who touches it. Companies that support outage scope on the Georgia fleet carry CP-189 style documentation discipline into the rest of their work simply because maintaining two record-keeping standards is harder than maintaining one. For an owner, that is an argument for a system of record that is audit-shaped by default rather than one tightened only when an audit is announced.`,
      `Atlanta's other distinguishing feature is client concentration risk in reverse. Because no single asset dominates, an inspection company here typically carries a long client list with no account large enough to carry the year, which makes quoting discipline and job-level margin visibility unusually important. Losing money slowly across many small jobs is far harder to notice than losing it on one big turnaround, and it is the failure mode that quietly ends otherwise healthy inspection businesses in diversified metros. Costing that attributes technician hours, travel, equipment days and consumables to each work order as the work happens is what makes that visible in time to act on it.`,
    ],
  },
  charlotte: {
    h: 'Charlotte: a utility-headquarters market with a manufacturing floor under it',
    p: [
      `Charlotte's inspection demand is shaped by the fact that decisions get made here, not only work. Duke Energy runs its fleet from the city, Siemens Energy builds and services gas turbines at its Charlotte plant, and Albemarle's specialty-chemicals operations sit in the same corridor. Around those anchors is a supplier base serving the nuclear stations at McGuire and Catawba and the region's combined-cycle build-out.`,
      `Working a headquarters market means the client contact is often a corporate engineering or supply-chain function rather than a plant maintenance lead. Prequalification is documentary and periodic: insurance, safety statistics, written practice, technician qualification records, procedure revisions. Inspection companies lose this work at the paperwork stage far more often than at the technical stage, which is why certification tracking with expiry alerting and a retrievable qualification history is a commercial asset in Charlotte specifically.`,
      `Turbine-component work adds its own texture. Rotating-equipment inspection runs to tight acceptance criteria with named procedures, and findings frequently trigger engineering dispositions rather than simple accept or reject calls. Reporting that carries the indication, the technique sheet and the evidence together — rather than a report that points at an attachment somewhere else — shortens the loop between the technician and the engineer deciding what happens to the part.`,
    ],
  },
  chicago: {
    h: 'The Chicago inspection market runs on refining, rail and steel at once',
    p: [
      `Chicagoland inspection companies work a heavier and more regulated asset base than the city's service-economy reputation suggests. The refining cluster on the south and southeast edge — BP's Whiting complex in northwest Indiana, ExxonMobil's Joliet refinery, the Citgo operation at Lemont — sets the tempo, and around it sit the steel mills of the Calumet region, one of the densest rail interchanges in North America, and a large food and process-manufacturing base.`,
      `The practical consequence is turnaround concentration. When two of the local refineries schedule work in the same window, every certified UT and RT technician within driving distance is spoken for, and inspection companies win or lose the season on whether they can staff it with in-date personnel and calibrated equipment. That is a resourcing question a spreadsheet answers badly: it needs a live view of who is qualified for which method, whose certification expires inside the window, and which instruments come due for calibration mid-job.`,
      `Radiographic work in a metropolitan area carries an additional operational load. Source logistics, state radiation licensing, exposure records and site-access permissions all have to be documented per shot in an environment where the shot may be taken inside a fenced plant surrounded by public roads. Companies that keep those records in the work-order system rather than in a separate binder are the ones that can answer a regulator without stopping production.`,
    ],
  },
  cleveland: {
    h: 'Cleveland: integrated steel, welding technology and an aerospace research base',
    p: [
      `Cleveland's inspection market is anchored by heavy metals. Cleveland-Cliffs runs integrated steelmaking in the Cuyahoga valley, Lincoln Electric develops and manufactures welding technology in the metro, and NASA Glenn's research operations sit alongside a supplier base serving aerospace and heavy industry. It is a market where the client frequently understands NDT as well as the inspection company does.`,
      `That raises the bar on procedure and technique rather than on volume. Steel-plant work brings crane and structural examinations, refractory-adjacent vessel inspection and continuous-caster maintenance scope, all under acceptance criteria the customer's own metallurgists will read. Inspection companies here compete on demonstrable technique control — the right procedure revision, the right qualification for the examiner who performed the work, the calibration chain behind the instrument — more than on turnaround speed alone.`,
      `The aerospace adjacency pulls a subset of the market toward NAS 410 personnel requirements and special-process audit expectations. Running both regimes at once, industrial and aerospace, is where record-keeping usually breaks: the same technician may hold qualifications under two schemes with different renewal cycles and different eye-examination rules. A qualification matrix that models scheme, method, level and expiry separately is the difference between knowing that and discovering it during an audit.`,
    ],
  },
  dallas: {
    h: 'Dallas: aerospace, midstream and a fabrication base serving both',
    p: [
      `Dallas inspection work divides along two axes that rarely share technicians. On one side is aerospace and defence — Lockheed Martin's Fort Worth production line for the F-35 and the supplier network around it, Bell's rotorcraft operations — which runs to NAS 410 personnel requirements and special-process audit expectations. On the other is energy: gathering and transmission infrastructure across the Barnett Shale footprint, compressor stations, and the tank and terminal assets that come with midstream operations.`,
      `An inspection company serving both is effectively running two businesses with one back office. The aerospace side is audit-driven, documentation-heavy and slow to onboard new personnel; the midstream side is dispatch-driven, geographically dispersed and sensitive to how fast a report reaches the operator's integrity engineer. Software that treats them identically frustrates both. What works is one system holding two qualification regimes and two report templates, with the same underlying calibration and work-order spine.`,
      `The fabrication layer between them matters commercially. North Texas shops fabricating pressure equipment, skids and structural assemblies need code-compliant examination against ASME and AWS D1.1 acceptance criteria, usually on short notice and always ahead of a ship date. This is repeat, relationship-based work that rewards report turnaround directly, and it is where job-level costing tends to reveal which shop accounts are genuinely profitable.`,
    ],
  },
  detroit: {
    h: 'Detroit: automotive quality regimes plus a refinery and a river of heavy industry',
    p: [
      `Detroit inspection companies work to automotive expectations even when the asset is not automotive. General Motors, Ford and Stellantis each run assembly and powertrain operations across the metro with supplier networks that inherit their quality-system requirements, and that culture — documented process capability, traceable qualification, corrective action with evidence — sets the local baseline for what a supplier's records should look like.`,
      `Alongside it sits genuinely heavy scope. Marathon's Detroit refinery brings pressure-equipment inspection under API 510 and piping under API 570; the salt and chemical operations along the river, the steel and stamping base downriver, and the bridge and marine infrastructure on the Detroit River add structural and marine examination work with different governing codes again.`,
      `The staffing pattern is what an ERP has to model well. Automotive supplier work arrives as recurring, scheduled volume; refinery turnaround work arrives in concentrated bursts that pull the same technicians away. Companies that plan those two demand curves in one place can commit to outage scope without quietly defaulting on a supplier-quality contract — and can see, afterwards, which of the two actually funded the year.`,
    ],
  },
  'fort-worth': {
    h: 'Fort Worth: defence production, gas infrastructure and a distinct labour market',
    p: [
      `Fort Worth is often treated as an annex of Dallas and it does not behave like one. Defence production dominates the western side of the metro, with Lockheed Martin's assembly operations and a long-established supplier base built around military aerospace programme requirements. That work is qualification-gated in a way commercial industrial work is not: personnel qualification under NAS 410, customer-specific written practice, and audit scope that examines records as closely as parts.`,
      `East and north of the city, the picture is energy and logistics — Barnett Shale gathering infrastructure, compressor and processing facilities, and the freight and distribution build-out around Alliance. The examination scope is ordinary in method terms and demanding in dispersion terms: crews moving between sites, capturing data where connectivity is poor, and needing readings to arrive intact rather than be re-keyed from field sheets later.`,
      `The labour market ties the two together. Technicians move between defence-programme work and energy work depending on who is hiring, and each move carries qualification implications that are easy to lose track of. Knowing which of your people currently hold which approvals, under which scheme, and when each lapses is the operational question a Fort Worth inspection company answers most often.`,
    ],
  },
  minneapolis: {
    h: 'Minneapolis: a refinery, an agricultural processing base and medical-device precision',
    p: [
      `The Twin Cities inspection market is unusually diversified for a northern metro. Flint Hills Resources operates the Pine Bend refinery south of the city — the region's largest single concentration of pressure equipment and piping under API 510 and API 570 scope — while Cargill's processing operations and the wider agricultural-industrial base generate steady vessel, tank and structural work.`,
      `Layered on top is a medical-device manufacturing cluster with a precision-inspection character all its own. Radiographic and computed-tomography examination of small components to tight acceptance criteria, under a quality system that expects full traceability, is a different discipline from refinery UT and usually a different technician. Inspection companies serving both need their system of record to hold two very different report shapes without forcing one into the other's template.`,
      `Winter shapes the calendar more than most markets admit. Outdoor examination scope compresses into the workable months, which concentrates outage and shutdown work and makes certification lapses expensive in a specific way: a technician whose qualification expires in February is a technician unavailable for the spring window, when there is no slack to replace them. Expiry alerting well ahead of renewal is not an administrative nicety in this market.`,
    ],
  },
  nashville: {
    h: 'Nashville: automotive assembly, a regional generating fleet and fast industrial growth',
    p: [
      `Middle Tennessee's inspection demand has grown with its manufacturing base rather than around a legacy refinery. Nissan's Smyrna assembly operations and the supplier network serving them, Bridgestone's manufacturing and technical presence, and the battery and electric-vehicle investment across the corridor have added industrial scope faster than the local certified-technician pool has grown.`,
      `The Tennessee Valley Authority's generating assets give the region its outage rhythm — fossil, hydro and nuclear scope, each with its own qualification expectations, concentrated into planned windows. Inspection companies that support that fleet build their staffing year around it, and the constraint is rarely equipment. It is having enough people with current, correct, documented qualifications when the window opens.`,
      `Growth markets carry a specific risk that mature ones do not: process debt. Companies scaling from a handful of technicians to several crews often keep running the certification spreadsheet and the job-costing spreadsheet that worked at the smaller size, and the first real signal that they have outgrown them is a missed renewal or a job that turns out to have lost money. Recognising that inflection early is worth more in Nashville than in markets where the scale question was settled decades ago.`,
    ],
  },
  odessa: {
    h: 'Odessa and the Permian: volume, dispersion and relentless schedule',
    p: [
      `Odessa is a pure oilfield-services market and it rewards different things from a plant town. Permian Basin activity spreads inspection work across an enormous area — well sites, gathering systems, tank batteries, compressor stations, gas processing plants and the fabrication yards that feed them — with crews covering long distances and clients whose schedules move without notice.`,
      `Dispersion is the operational problem. Field data capture that works without connectivity and syncs later is not a convenience here; it is the difference between records that exist and records that were written on a field sheet in a truck and transcribed days later. The same applies to equipment: instruments move between crews constantly, and knowing which unit is with whom and when its calibration comes due prevents the kind of finding that invalidates completed work.`,
      `The commercial texture is billing structure. Permian work runs on day rates, call-outs, standby and per-joint arrangements simultaneously, sometimes on the same client. Companies that cannot separate mobilisation, standby and execution time in their costing cannot tell a profitable client from an unprofitable one, and in a market this volume-driven that distinction compounds quickly.`,
    ],
  },
  'oklahoma-city': {
    h: 'Oklahoma City: storage, aerospace sustainment and midstream reach',
    p: [
      `Oklahoma City's inspection market draws on three distinct bases. Tinker Air Force Base anchors a large aerospace sustainment and depot-maintenance operation with the qualification and audit expectations that come with military aviation work. The state's midstream and storage infrastructure — including the tank farms around Cushing to the northeast, one of the most significant crude storage hubs anywhere — generates sustained API 653 scope. And a broad manufacturing and fabrication base sits alongside both.`,
      `Tank work sets the documentation rhythm. API 653 inspections produce records that live for the life of the asset and are read years later by people who were not there, which puts unusual weight on report completeness and retrievability. Inspection companies that treat the report as the deliverable rather than as a by-product of the field work build the client relationships that survive procurement changes.`,
      `Depot and sustainment work pulls in the opposite direction — high documentation control, customer-specific written practice, personnel qualification examined closely and often. Running both regimes means holding two sets of qualification rules and two report shapes without letting either erode the other, which is exactly the case for a single system of record rather than a filing convention per client.`,
    ],
  },

  // ── LA-basin / Bay Area refining cluster — added 2026-08-11 ──────────────
  carson: {
    h: 'Carson: an active refining giant standing next to a refinery being torn down',
    p: [
      `Carson hosts Marathon's Los Angeles Refinery, a two-site complex spanning both Carson and Wilmington that has been reported as a single operating entity for years and stands as the largest crude-processing complex on the West Coast by throughput. The plant is actively pursuing modernization work and is moving permit applications for further projects through the South Coast Air Quality Management District, which is not the posture of a facility winding down.`,
      `A short distance away, inside the same city, sits a second Los Angeles-area refinery — formerly run by a separate Houston-based integrated refiner, now shut down and in the hands of real-estate developers evaluating commercial and industrial redevelopment of the site, with groundwater remediation still ongoing beneath it from contamination going back decades. Carson is therefore running two entirely different asset lifecycles at once: an active refinery pursuing growth projects, and a shuttered one being prepared for demolition and reuse.`,
      `That duality is a genuine operational split for an inspection company. Marathon's side calls for the usual refinery discipline — API pressure-equipment and piping programs, ASME Section V examination, turnaround scheduling. The shuttered site's side calls for something else entirely: structural condition assessment ahead of deconstruction, verification that tanks and vessels have been properly purged and degassed before demolition crews touch them, and inspection scope tied to a redevelopment timeline rather than a refining calendar.`,
    ],
  },
  torrance: {
    h: 'Torrance: a refinery run on reliability engineering after a hard lesson',
    p: [
      `PBF's Torrance refinery carries a history that shapes how seriously the plant treats inspection today — a major process-unit explosion years ago under a previous owner left the site with an unusually rigorous safety and reliability culture. Under PBF, the refinery now runs an explicit reliability-based-inspection program, with inspection intervals, findings and dispositions tied to a formal risk model rather than a fixed calendar, and the company has set public cost-improvement targets tied to that program across its whole refining system.`,
      `For an inspection company, that means the job is not "show up and run UT on the scheduled list." Results have to integrate into the refinery's own reliability database, feeding a live risk model that plant engineers actually use to plan the next interval — which means reports need to arrive in a form their system can ingest, not just a document a coordinator files away.`,
      `The margin for error is thin. An unplanned flaring event tied to a utility power failure earlier this year was a reminder that even a well-run, RBI-disciplined plant still has bad days, and when it does, the response window for verification work compresses fast — a company that can mobilize qualified crews on short notice earns trust here in a way that scheduled-turnaround availability alone does not.`,
    ],
  },
  'el-segundo': {
    h: 'El Segundo: the largest single-site refinery on the coast, now named in a closure warning',
    p: [
      `Chevron's El Segundo refinery is the largest single-site refinery on the West Coast, supplying a large share of the jet fuel that moves through Los Angeles International Airport and a substantial portion of the region's motor-vehicle fuel. It is not a marginal asset by any measure of scale.`,
      `What has changed is the plant's public risk profile. Chevron has written directly to the state warning that further tightening of California's cap-and-trade program could push El Segundo toward the same fate as Richmond, naming both refineries specifically rather than speaking about the industry in general terms — a level of explicit closure warning that a refinery this size did not carry a few years ago.`,
      `For an inspection company building a multi-year account plan around El Segundo, the right read is not "big equals safe." Scale still means dense near-term method demand across UT, RT, PAUT and TOFD on a huge inventory of pressure equipment and piping, but a prudent owner tracks the regulatory docket and the company's own public statements alongside the historical spend, because California refining has already proven — with the neighboring Houston-based refiner's Los Angeles-area plant already gone — that "large and long-established" is no longer a guarantee of "still operating in five years."`,
    ],
  },
  'wilmington-california': {
    h: 'Wilmington: one refinery still running, one being taken apart, in the same city',
    p: [
      `Wilmington is best known right now for what just left it: a Houston-based integrated refiner's Wilmington-side refinery units ceased operating late last year, and the company has since engaged real-estate developers to plan a large-scale redevelopment of the site into a mix of commercial and industrial space. Decades of groundwater remediation beneath the property continue regardless of what gets built above it.`,
      `That is only half the picture. Marathon's Los Angeles Refinery also has operating units on the Wilmington side of its two-site complex, and the city sits directly against the Port of Los Angeles, adding marine terminal and tank infrastructure — cargo cranes, product pipelines, above-ground storage — to the mix. Wilmington is simultaneously home to live refinery turnaround work, ongoing port and marine terminal examination, and a slow-moving, years-long demolition and site-preparation project.`,
      `Practically, that splits the NDT demand in Wilmington into two disciplines that don't share a client contact, a documentation standard, or a project timeline: recurring API- and ASME-governed refinery examination on one side, and finite, project-scoped demolition-verification work — tank degassing confirmation, structural condition assessment ahead of deconstruction — on the other, running on a redevelopment schedule that has nothing to do with a refining calendar. The port work sits apart from both, on its own statutory inspection cycle that keeps generating demand no matter what happens to either refinery footprint.`,
    ],
  },
  vernon: {
    h: 'Vernon: food processing and heavy fabrication, not a refinery town',
    p: [
      `Vernon does not fit the refinery-town pattern of the cities around it, and an inspection company that prices it like one will misread the market. Vernon is an exclusively industrial city built around meatpacking history — Farmer John operated there for nine decades — and food-product manufacturing remains the anchor employer group, now led by Archer's expanded meat-snack plant on the former Farmer John site, alongside a dense base of metals fabrication and general manufacturing tenants.`,
      `The inspection scope that follows is correspondingly different: structural steel and welded-vessel work under ASME and AWS D1.1 rather than API refining codes, ammonia-refrigeration and processing equipment tied to food manufacturing, and the general fabrication-shop examination that a small, densely packed industrial city generates. The client contact is a food-safety or plant-engineering function, not a refinery turnaround coordinator, and the acceptance criteria a food manufacturer applies often trace back to its own customer's quality system rather than to a single national code.`,
      `Vernon's real character is volume, not scale — a high count of small and mid-size industrial tenants packed into a compact, exclusively zoned city produces frequent, lower-value jobs rather than a handful of massive annual outages, closer in shape to a dense manufacturing corridor than to the single-refinery towns that surround it in the same county. Companies that succeed here typically hold standing service agreements with several tenants at once rather than chasing a single anchor account the way a refinery-town company would.`,
    ],
  },
  'richmond-california': {
    h: 'Richmond: an active Bay Area refinery now named in the same closure warning as its Southern California counterpart',
    p: [
      `Chevron's Richmond refinery has long been one of the company's largest California complexes and a steady anchor of Bay Area inspection demand — the kind of account that, for a local inspection company, has historically funded everything else on the books.`,
      `That stability now carries a public asterisk. Chevron's warnings to the state about further cap-and-trade tightening name Richmond specifically, alongside El Segundo, as a facility whose continued operation is not guaranteed if the rules tighten further — language the plant did not carry in earlier years.`,
      `Richmond is genuinely Bay Area, geographically and commercially distinct from the Southern California refining cluster despite both regions sharing a state and a regulator. It is also distinct from its two nearest Northern California peers: Martinez has spent the past year rebuilding from a fire, and Benicia has spent this year shutting its fuel-production units down entirely. Treating "Northern California refining" as one undifferentiated market, the way some companies price the LA basin as a single account, misses that all three plants are on completely different trajectories right now and need separate staffing and sales plans, not a shared one.`,
    ],
  },
  martinez: {
    h: 'Martinez: a refinery rebuilt after fire, now heading into a major turnaround',
    p: [
      `PBF's Martinez refinery went through a serious fire that forced a full shutdown, followed by a slow restart of unaffected units — including the crude unit — running at reduced output for months while the damaged equipment was rebuilt. Construction on the fire-affected units finished earlier this year, and those assets have since been handed back to refinery operations for commissioning and are now running at planned rates.`,
      `That rebuild generated a distinct wave of first-time and re-commissioning inspection work: new and repaired equipment needs baseline examination before a plant trusts it at full rate, which is a different job — and a different documentation trail — than routine in-service monitoring on equipment that never stopped running. Much of that repair cost sits behind a property-insurance claim, which raises the bar on how cleanly an inspection company can separate fire-related scope from ordinary maintenance in its records.`,
      `The plant is now approaching a large hydrocracker-complex turnaround that was pushed back once already, concentrating a big scope of pressure-equipment and piping examination into a single window later this year — exactly the kind of event where staffing enough qualified crews on short notice, keeping calibration records current in real time, and turning reports around fast decides who keeps the account. Coming so soon after the fire, this turnaround will draw closer scrutiny from the plant's own engineers than a routine cycle normally would.`,
    ],
  },
  benicia: {
    h: 'Benicia: a refinery that stopped making fuel this year',
    p: [
      `Valero has idled the Benicia refinery in phases, continuing gasoline production for a stretch this year before stopping fuel production entirely and shifting to importing product into Northern California rather than making it on site. Combined with the closure of the Houston-based refiner's Los Angeles-area plant, the state has lost a significant share of its in-state refining capacity in a short window.`,
      `For an inspection company, Benicia is not a "coming soon" idling — the working refinery is functionally gone as a source of recurring turnaround demand. What replaces it, for a period, is preservation and shutdown-verification work: tanks cleaned, inspected and either mothballed or prepared under API 653 for whatever comes next, piping systems purged and verified before being taken permanently out of service, and structural assessments tied to the site's eventual redevelopment, sale, or long-term lay-up.`,
      `That is a fundamentally different commercial relationship from a turnaround contract — shorter-lived, project-scoped, priced around a defined end state rather than a repeating outage calendar. An inspection company with Benicia on its client list needs to treat this as the year that account converts from recurring revenue to a finite decommissioning project, and plan where that crew's time goes next well before the mothballing scope runs out.`,
    ],
  },
  'long-beach': {
    h: 'Long Beach: a working port with a shrinking, aging offshore oil operation behind it',
    p: [
      `Long Beach is defined commercially by its port, one of the busiest container gateways in North America, not by refining. The oil presence that remains is the THUMS Islands — four artificial drilling islands built decades ago in the harbor and named for astronauts lost in the country's early space program — still producing but at a fraction of their historical output.`,
      `The islands are now a cost-heavy, declining asset for the city that manages the tidelands lease: upkeep is beginning to outrun what the oil earns, and a repurposing study is already underway for what happens once extraction winds down. That puts Long Beach's oil-adjacent inspection work on a trajectory similar to Benicia's or the shuttered Wilmington refinery's — just further out and centered on a handful of aging drilling platforms rather than a whole refinery complex, with API 653-style tank and piping-integrity work continuing on the islands' surface facilities in the meantime.`,
      `The port itself is the larger, steadier source of examination work — cranes and container-handling equipment, structural steel on wharves and berths, marine terminal infrastructure inspected on statutory and class-society cycles rather than API refining codes, generating work that arrives continuously rather than in outage-shaped bursts. That distinction matters commercially: a company chasing Long Beach as an oil town is chasing a shrinking, cost-constrained client, while a company chasing it as a port town is chasing one of the steadiest examination markets on the coast.`,
    ],
  },

  // ── Philadelphia / Pittsburgh corridor — added 2026-08-11 ─────────────────
  trainer: {
    h: 'Trainer: a jet-fuel refinery owned by the airline that burns its output',
    p: [
      `Monroe Energy, a Delta Air Lines subsidiary, has owned the Trainer refinery on the Delaware River for more than a decade — an ownership structure most refinery towns in this corridor don't have. The plant's core purpose is securing jet-fuel supply for its parent airline's flights rather than maximizing open-market fuel-trading margin, which changes what "good performance" means to the client, and jet fuel makes up an unusually large share of the refinery's output mix compared with a typical merchant refiner along the same river.`,
      `A fire in a process-unit pump room during this year's restart of the fluid catalytic cracker, following a planned outage, drew an employee-safety response and a shelter-in-place order — handled in a way that reads more like an airline's operational-safety culture than a typical merchant refiner's. Post-incident re-verification work, confirming equipment integrity before a unit restarts after any unplanned event, is a recurring category here rather than an occasional one, and it tends to move on a faster clock than a routine turnaround because every day the cracker is down is a day the parent airline is buying jet fuel on the open market instead.`,
      `For an inspection company, Trainer's client contact is likely to weigh safety-incident history and corrective-action documentation more heavily than a purely margin-driven refiner would. Delta's own safety-reporting expectations tend to flow down through Monroe Energy's contractor requirements, and a company that can speak both refinery-code language and aviation-grade incident documentation has a genuine edge bidding this account over one that only knows API and ASME.`,
    ],
  },
  'marcus-hook': {
    h: 'Marcus Hook: an export terminal, not a refinery — and that changes the entire scope',
    p: [
      `Marcus Hook was once a Sunoco refinery; the crude-processing units are gone. What operates there now, under Energy Transfer, is a natural-gas-liquids and ethane export terminal — cryogenic storage, refrigeration and chilling trains, marine loading docks and pipeline receipt infrastructure moving Appalachian gas-field output toward export ships. The site kept its industrial footprint and much of its workforce through that transition, but the equipment underneath changed almost completely.`,
      `That is a genuinely different examination discipline from anything a refinery generates: cryogenic piping and storage integrity, low-temperature material verification, and marine-loading-arm and dock structural inspection rather than fractionation- or cracking-unit work. An extended outage from an electrical failure was serious enough to prompt a federal transportation emergency declaration covering propane supply across several states — a reminder of how much downstream delivery depends on this single site staying up, and of how tightly integrity work here is tied to regional energy security rather than to one plant's own production numbers.`,
      `The terminal is also actively expanding its ethane chilling and storage capacity, an optimization program that has been running for several years, so new-construction and pre-commissioning examination is a steady category here alongside in-service work, not a one-time event. That gives Marcus Hook a construction-adjacent inspection rhythm closer to a growing logistics asset than to a mature, static refinery.`,
    ],
  },
  paulsboro: {
    h: 'Paulsboro: lubricants and asphalt, not gasoline, and one half of a two-site system',
    p: [
      `PBF's Paulsboro refinery, on the Delaware River, runs differently from most refineries in this corridor: it operates in combination with the company's other nearby refinery a short distance south, together forming one integrated East Coast refining system that shares crude supply and intermediate streams, and Paulsboro itself produces Group I lubricant base oils and is the largest asphalt producer on the East Coast.`,
      `Lubricant and asphalt production carries a different inspection emphasis than a gasoline-focused refinery — vacuum distillation and solvent-extraction units for base-oil production, and asphalt-blowing, storage and loading infrastructure that runs hotter and stickier than typical product handling, with its own corrosion and fouling patterns to track. Technicians used to gasoline-and-diesel refining elsewhere in the corridor often need a specific orientation to Paulsboro's heavier, stickier product slate before they're fully useful on site.`,
      `Because Paulsboro and its sister site function as one operating system, inspection companies serving one often end up serving both — meaning qualification records, procedure libraries and calibration schedules effectively travel across a state line rather than staying local to a single plant, a scheduling and compliance wrinkle a single-site refinery town doesn't create. Planned crude-unit maintenance later this year is the kind of work that rewards a company already embedded across both sites rather than one bidding Paulsboro cold.`,
    ],
  },
  'linden-nj': {
    h: 'Linden: the actual refinery behind the Bayway name, with an integrated plastics plant attached',
    p: [
      `The Bayway refinery sits in Linden, New Jersey, on the harbor, owned by the same Houston-headquartered integrated refiner that operated the now-shuttered Los Angeles-area refinery in Carson and Wilmington — a large, fully integrated fuels refinery that also runs a polypropylene plant on site. That means the facility's inspection scope spans both hydrocarbon-processing units — crude distillation, catalytic cracking, alkylation, hydrotreating — and polymer-production equipment, a combination most refinery towns in this corridor don't have.`,
      `A fire near the gasoline-producing unit last year forced a cut in output and, as at Martinez, generated a wave of root-cause and re-verification inspection work before the affected unit could be trusted back at full rate — a reminder that even a large, long-established refinery produces concentrated, unscheduled demand around a real incident, not just planned turnarounds.`,
      `The polypropylene integration is the genuine differentiator. Qualification in refinery pressure-equipment codes alone does not automatically qualify a company for the polymer plant's equipment, which carries its own material and process considerations — an inspection company that wants the full Linden account, not just the fuels side, needs technicians and procedures covering both halves of the site, and a client that already trusts a vendor across both is unlikely to split the work between two suppliers.`,
    ],
  },
  newark: {
    h: 'Newark: the port and the tank farms, not the refinery next door',
    p: [
      `Newark's NDT-relevant asset base is the container-terminal complex at the Port of Newark-Elizabeth, part of the largest port system on the East Coast, plus the petroleum tank farms strung along the Arthur Kill that store and transfer product moving through the harbor. The Bayway refinery itself sits a short distance away in neighboring Linden, and it is common — and wrong — for a scope document to conflate the two.`,
      `Port and tank-farm work runs on statutory and terminal-operator cycles rather than refinery turnaround cycles: crane and container-handling equipment, structural steel on wharves and berths, and above-ground storage tanks under API 653 for the terminal operators along the Arthur Kill, most of whom are logistics and storage companies rather than refiners. Client relationships here are built with terminal operations managers and port authorities, not refinery maintenance planners.`,
      `The commercial rhythm follows shipping and storage-contract cycles, not outage windows — work arrives more continuously and in smaller packages than a refinery turnaround, which rewards an inspection company set up for frequent, shorter site visits over one built around a handful of large annual outages. A crew based in Newark is well placed to pick up overflow refinery work in Linden when the Bayway turnaround calendar gets busy, but that is a separate account to win, not an automatic extension of the port business.`,
    ],
  },
  monaca: {
    h: 'Monaca: a brand-new petrochemical plant still working through its startup years',
    p: [
      `Shell's Pennsylvania Petrochemicals Complex — an ethane cracker and polyethylene plant on the Ohio River in Beaver County — is a genuinely different asset class from the refineries and coke works elsewhere in this corridor. It converts Marcellus and Utica ethane into plastic pellets rather than crude oil into fuel, and it only began production a few years ago, making it one of the youngest major industrial assets in the region rather than a decades-old legacy plant.`,
      `Young plants carry a different inspection profile than mature refineries: baseline and early-life examination on newer equipment, an active state permitting and public-review process open on the facility this year, and a capital and schedule history that has run well over its original plan — all pointing to an owner under pressure to demonstrate operational discipline rather than a mature site coasting on decades of quiet performance.`,
      `For an inspection company, that combination — a young, financially scrutinized asset with a public compliance record — means documentation quality and defensibility matter more here than at a facility with decades of uneventful operating history behind it; findings and reports may end up read by regulators and the public, not just plant engineers. Equipment inspected here also needs its own procedure set: cryogenic ethane handling and polyethylene extrusion machinery don't respond to the same technique library a nearby coke works or refinery would use.`,
    ],
  },
  clairton: {
    h: 'Clairton: the largest coke works in the country, under new ownership after a fatal accident',
    p: [
      `U.S. Steel's Clairton Coke Works — the largest coke-manufacturing facility in the United States — converts coal into the coke that feeds Mon Valley steelmaking, an asset class entirely distinct from the oil-and-gas refineries and terminals that dominate the rest of this corridor: coke ovens, quench towers and byproduct-recovery units rather than crude distillation or NGL storage.`,
      `Ownership changed hands last year when a Japanese steelmaker completed its acquisition of U.S. Steel, and not long after, an explosion at the plant killed two workers and injured several more, drawing regulatory fines and lawsuits and putting the new owner's safety and investment commitments under a level of public and legal scrutiny the plant did not face before the deal closed. Current and former workers have said underinvestment and management gaps predate the acquisition and helped set up the conditions for the accident.`,
      `That combination — new ownership, a fatal incident, and open questions about how much of the parent company's broader Mon Valley investment will actually reach Clairton specifically — makes this an unusually document-sensitive account: inspection findings, corrective-action records and equipment-integrity history are likely to be examined by regulators, plaintiffs' counsel and the new corporate parent's own safety auditors, not just plant maintenance staff. Coke-oven and byproduct-recovery examination also demands its own technique set — refractory and structural condition assessment in a high-temperature, corrosive environment that has little in common with pressure-vessel work at a refinery down the corridor.`,
    ],
  },

  // ── Canada ERP phase 3 — added 2026-08-11 ──────────────────────────────
  calgary: {
    h: 'Calgary: where the oil and gas decisions get made, not where most of the fieldwork happens',
    p: [
      `Calgary's downtown towers hold the head offices of Suncor Energy, Cenovus Energy, Canadian Natural Resources and TC Energy, plus Imperial Oil's corporate head office — companies whose combined upstream, oil-sands, pipeline and refining operations span most of Alberta and reach into British Columbia, Saskatchewan and offshore programs well beyond Canada. None of the physical assets those companies run sit inside city limits; the wells, mines, upgraders, compressor stations and terminals are hundreds of kilometres north, in the Fort McMurray oil sands, along the Industrial Heartland northeast of Edmonton, or strung across pipeline right-of-way crossing provincial and international borders.`,
      `For an inspection company, that geography inverts the normal relationship between where you sell and where you work. A firm headquartered in Calgary is usually bidding into a corporate supply-chain or engineering function long before a technician sets foot on an asset, and several competitors are bidding the same operator from the same few city blocks. Prequalification is documentary and centralized: insurance, safety statistics, written practice, technician qualification records and procedure revisions get reviewed by a category manager who compares vendors on file, not by the site supervisor who will eventually watch the crew work.`,
      `The staffing consequence is that a Calgary-based inspection company's crews mobilize away from the city more often than not — north to oil-sands turnarounds, east to Industrial Heartland refinery and petrochemical outages, or out along a pipeline corridor for an integrity dig — while the head office has to hold a qualification and calibration record set that travels correctly with them regardless of which Alberta site they land on. Losing track of which technician's ISO 9712 or ASNT SNT-TC-1A currency lapses mid-mobilization is a Calgary-specific risk precisely because the office approving the contract and the site consuming it are never the same place.`,
      `That separation also changes who an inspection company is really negotiating with. The engineer who understands NDT scope in detail is rarely the person who signs the master service agreement in a headquarters market like this one; the sourcing or category function that does compares vendors on documented delivery history — completed jobs, findings raised, turnaround times, qualification currency across the crew — rather than on the field relationship a technician built on site. Companies that can produce that history on demand keep renewing; companies relying on the site relationship alone often discover its limits the moment a corporate sourcing review reaches their category, usually with no warning that it was coming.`,
    ],
  },
  edmonton: {
    h: "Edmonton and the Industrial Heartland: the refining and petrochemical corridor Calgary's oil companies actually run",
    p: [
      `Northeast of Edmonton, the Industrial Heartland concentrates more refining and petrochemical capacity than anywhere else in Canada, built around two clusters: the Strathcona and Suncor Edmonton refineries on what is known locally as Refinery Row, and a separate concentration of chemical and petrochemical plants around Scotford, including Shell's integrated refinery, chemicals and carbon-capture operations. New capital is still landing in the corridor: Shell has advanced a carbon-capture project at Scotford, and Dow has been moving a large ethylene-cracker project through pre-construction phases nearby — evidence the Heartland is expanding rather than aging out.`,
      `That density changes how an inspection company staffs the region. A crew working Refinery Row one week may be running pressure-equipment and piping examination under API 510 and API 570 acceptance criteria for one refinery, then crossing to a petrochemical operator's turnaround at Scotford the next, each with its own acceptance standard, client portal and documentation format layered on the same underlying method work. Because the plants sit close enough together that technicians can plausibly work more than one client in a season, the scheduling problem is less about travel time than about keeping each technician's qualification, medical and procedure-revision status straight across employers who do not share records with each other.`,
      `New-build and expansion work adds a category the mature refineries alone do not: pre-commissioning and baseline examination on equipment that has never operated, a different discipline from in-service monitoring on units that have run for decades — different acceptance logic, different documentation expectations, and often a different crew than the one doing routine turnaround scope. An inspection company that treats Heartland demand as a single undifferentiated "refinery work" pool will misallocate technicians between the two; one that models new-construction and in-service scope separately, with separate qualification and reporting tracks, can commit confidently to both without one silently starving the other of staff.`,
      `Edmonton's other distinguishing feature is regulatory density. A corridor carrying a large share of the country's refining capacity draws sustained attention from provincial environmental regulators and from the companies' own corporate risk functions, and inspection findings here are more likely to be read outside the plant — by a regulator, an insurer, or a corporate sustainability team tracking a public decarbonization commitment — than findings from a single-plant operation elsewhere in the province. Inspection companies that keep records audit-shaped by default, rather than tightened only when a specific audit is announced, are the ones that keep the account when that outside attention arrives.`,
    ],
  },
  'fort-mcmurray': {
    h: 'Fort McMurray: oil-sands mining, upgrading and in-situ operations at a scale most inspection companies never staff for',
    p: [
      `Fort McMurray is the service town for the Athabasca oil sands, where Suncor Energy runs its Base Plant mining and upgrading operations, Canadian Natural Resources runs its own wholly-owned Horizon mining and upgrading complex, and the Syncrude joint venture — in which Suncor holds the largest interest alongside Imperial Oil and other partners — runs a third large integrated mine-and-upgrader operation. Imperial Oil also operates in-situ steam-assisted production north and south of the city. Between them, the region holds one of the largest concentrations of pressure equipment, rotating machinery and structural steel anywhere in Canadian industry, running in a genuinely remote setting rather than inside a metropolitan industrial belt.`,
      `Remoteness is the operating fact an inspection company cannot design around. Technicians typically fly or drive in for camp-based rotations rather than commuting from home, which means a crew's availability is scheduled in blocks rather than by the day, and a certification lapse discovered mid-rotation cannot be fixed by pulling a replacement from the local labour pool the way it could in a metropolitan market — the nearest bench of qualified technicians is a flight away. Extreme winter conditions compress the outdoor examination season further, concentrating outage and turnaround work into the months when weather allows it and leaving little slack to absorb a scheduling mistake.`,
      `The upgraders set the tempo more than the mines do. Bitumen extraction runs continuously, but the upgrading trains that turn it into synthetic crude come down for planned turnarounds on their own cycles, and when two operators' outage windows overlap, every certified UT, RT and PAUT technician who can be flown into the region is already spoken for. Inspection companies that win repeat work here are the ones that can prove, in advance, exactly which of their people hold current qualifications and are rotation-available inside a specific outage window — not the ones promising capacity they have to source at the last minute.`,
      `Fort McMurray also runs a harder version of the record-keeping problem that camp rotations create everywhere: a technician's qualification, medical and vision-test currency has to be verifiable by a supervisor who may be a province away, using a system the technician can reach from a camp with limited connectivity rather than an office network. Inspection companies whose certification records exist only on a head-office server learn that limitation exactly when a client's site coordinator asks for proof of currency on a technician already in camp, and the answer takes a day to arrive instead of a minute.`,
    ],
  },
  halifax: {
    h: 'Halifax: a shipbuilding program measured in decades, not a single contract',
    p: [
      `Halifax Shipyard, owned by Irving Shipbuilding, is the assembly yard for the Royal Canadian Navy's new River-class destroyer program — the successor to the Canadian Surface Combatant project and the largest shipbuilding undertaking in the country since the Second World War. The design is a variant of a warship also being built for allied navies, and construction of the first vessels is underway under a National Shipbuilding Strategy that has already run for well over a decade and is contracted to continue for many years beyond the ships now under construction.`,
      `A program built to run this long behaves differently from a plant turnaround or even an oil-sands mine's outage cycle. Structural and weld examination on hull sections proceeds against a build schedule that unfolds over years per vessel, with class-society and defence-programme acceptance standards governing the work rather than the API and ASME codes an inspection company might use on an industrial account. Personnel qualification and procedure approval on a naval build are typically programme-specific and audited closely, in a manner closer to the aerospace world's NAS 410 discipline than to a refinery's routine in-service inspection.`,
      `For an inspection company, the commercial shape of Halifax is stability rather than volume. A single, multi-decade national defence program is a fundamentally different account to plan a business around than the outage-driven, multi-client work that characterizes most Canadian industrial markets: fewer clients, longer contract horizons, and qualification and security requirements that make it comparatively hard for a new entrant to break in but comparatively secure for a company that already holds the programme's confidence. Staffing plans built around steady, programme-length crew commitments look nothing like the surge-and-release staffing a turnaround town demands.`,
      `The risk in a market this concentrated is the mirror image of a diversified metro's risk. Where a city with many mid-size clients loses money slowly across many small jobs if margin discipline slips, a company built almost entirely around one long defence program can lose the business slowly in a different way: falling behind on programme-specific documentation, personnel security requirements or procedure revisions without a second major account to notice the drift against. Inspection companies serving Halifax's shipbuilding program treat programme compliance as a continuously monitored obligation, not a periodic audit event, for exactly that reason.`,
    ],
  },
  montreal: {
    h: 'Montreal: Canada\'s aerospace cluster, running civil production rather than defence',
    p: [
      `Greater Montreal is one of the largest aerospace manufacturing clusters in the world, anchored by Bombardier's business-jet production, CAE's simulation and training business based in Saint-Laurent, Pratt & Whitney Canada's engine manufacturing and expanding maintenance operation in Longueuil, Bell Textron Canada's helicopter manufacturing, and Airbus Canada's final assembly of its narrow-body jetliner programme at Mirabel — the programme Bombardier originally developed before Airbus took over majority ownership. A large aerospace supplier base across hundreds of companies supports that core, from structures and interiors suppliers through specialty coatings and composite shops.`,
      `Civil aerospace work runs to a different qualification regime than the industrial inspection most Canadian NDT companies are built around. Personnel qualification follows NAS 410-style requirements — specific-procedure qualification, method certification, defined recertification cycles — and findings frequently trigger an engineering disposition rather than a simple accept-or-reject call, because the client's own materials or structures engineers review borderline results before a part moves forward. An inspection company built for API-code industrial work cannot simply relabel its technicians for aerospace scope; the qualification pathway, the acceptance-criteria literacy and the reporting format are genuinely different disciplines.`,
      `The engine and MRO side adds its own texture. Pratt & Whitney Canada's expanding maintenance, repair and overhaul operation generates recurring examination demand on rotating components to tight tolerances, distinct from the airframe and structures work the assembly plants generate — different technique library, often a different technician pool, and a client whose own quality system will audit an inspection vendor's procedures and qualification records as closely as it audits its own shop floor. Companies serving both airframe and engine-MRO work in Montreal are effectively running two aerospace specialties under one roof, not one.`,
      `Montreal also illustrates a labour-market pressure specific to a cluster this size: aerospace employers across the region are hiring simultaneously, and qualified NDT personnel move between airframe manufacturers, engine MRO shops and inspection vendors more freely than in a market with one dominant employer. An inspection company that cannot show a technician a clear, documented qualification and recertification pathway loses that person to a competitor, often mid-programme, in a way a single-employer industrial town rarely forces. Qualification-record portability — proving currency instantly to a new employer or a new client — is a retention tool here as much as a compliance one.`,
    ],
  },
  toronto: {
    h: "Toronto and the GTA: a nuclear fleet and a steel industry in transition, not a generic 'largest city' market",
    p: [
      `The Greater Toronto Area's most NDT-relevant industrial base is Ontario Power Generation's nuclear fleet. Pickering Nuclear, east of the city, has had its operating life extended while Ontario Power Generation prepares to refurbish it, and Darlington Nuclear, further east again, has just finished construction on a multi-year, unit-by-unit refurbishment that renewed the plant's operating life for decades. To the southwest, in Hamilton, ArcelorMittal Dofasco and Stelco run integrated and specialty steelmaking that has anchored the region's heavy-metals base for generations, with Dofasco currently partway through a long, complicated transition toward lower-emission steelmaking technology.`,
      `Nuclear work carries the strictest documentation culture an inspection company in this region will encounter. Refurbishment and in-service examination on reactor and balance-of-plant components follows procedures with CP-189-style personnel qualification discipline and traceability expectations that exceed what most industrial clients ask for, and companies that support that fleet tend to carry the same records discipline into the rest of their book simply because running two standards of record-keeping side by side costs more than running one. That habit is a genuine commercial asset when a non-nuclear client's own audit arrives and finds records already built to a higher bar than the contract required.`,
      `The steel side is a different kind of demanding. Integrated and specialty steelmaking generates structural, crane and vessel examination work under conventional codes, but a plant partway through a major process-technology transition adds a category most steel towns do not have right now: baseline and pre-commissioning examination on new equipment being installed alongside — not simply replacing — decades-old assets still running. An inspection company serving a steel plant mid-transition needs to track which examination belongs to which generation of equipment, under which acceptance basis, without conflating the two.`,
      `Toronto's real distinguishing feature for an inspection company is therefore concentration risk in two very different directions at once. The nuclear fleet is long-cycle, heavily documented and slow-moving — work that rewards patience and record discipline over years. The steel sector, mid-transition, is comparatively fast-moving and uncertain, with technology and investment decisions still being finalized in public view. A company trying to serve both with one undifferentiated staffing and reporting approach will be over-built for one and under-prepared for the other; treating them as genuinely separate accounts, with separate qualification tracks and separate reporting cadences, is what the GTA's industrial base actually requires.`,
    ],
  },
  vancouver: {
    h: "Vancouver: the country's largest port, plus the shipyards and pipeline terminal that sit beside it",
    p: [
      `The Port of Vancouver is Canada's largest port by trade volume, and its container, bulk and marine-terminal infrastructure generates a category of examination work that runs on statutory and class-society inspection cycles rather than an outage calendar: crane and container-handling equipment, structural steel on wharves and berths, and terminal infrastructure inspected on schedules set by port and class-society requirements rather than a single operator's turnaround plan. Alongside the port, Seaspan's Vancouver Shipyards and Vancouver Drydock build and maintain vessels under Canada's National Shipbuilding Strategy, and the Trans Mountain pipeline system ends at a marine terminal within the harbour, adding tank, pipeline and marine-loading infrastructure to the same waterfront.`,
      `That combination puts several genuinely different examination disciplines within one metro area, each running on its own client relationship and its own schedule. Port and terminal work is won through terminal-operator and port-authority relationships and arrives continuously rather than in bursts; shipyard work follows a build or refit schedule set by a national procurement programme rather than a commercial client's outage calendar; and pipeline-terminal work follows tank and piping integrity cycles under API 653-style scope, tied to a marine facility rather than a refinery. A company chasing all three needs three different sales relationships and three different scheduling rhythms under one roof, not one generic "Vancouver industrial" account plan.`,
      `The port work is the steadiest of the three and the one most inspection companies underweight. Because it does not arrive as a dramatic annual outage the way refinery or oil-sands turnaround work does, it is easy for a company built around outage-driven industrial accounts to treat port and marine-terminal examination as secondary, when the statutory and class-society cycles behind it generate more consistent, better-scheduled demand over a full year than a single large but infrequent turnaround client typically does.`,
      `Vancouver also rewards an inspection company that can move technicians between marine, pipeline and general industrial scope without re-qualifying them from scratch for each. A technician doing hull thickness gauging for the shipyard, tank-shell examination for the pipeline terminal, and structural steel work on a port wharf in the same month needs a qualification record that clearly shows which method and which client-specific endorsement covers which scope, because the acceptance basis and the client expectations differ across all three even when the underlying UT or MT technique barely changes. Companies that cannot show that separation clearly on paper end up requalifying technicians unnecessarily, or worse, deploying someone whose paperwork does not actually cover the job.`,
    ],
  },
};

/**
 * A fourth, closing paragraph per city. Kept in a separate map only so the
 * arithmetic behind it stays visible: the worst colliding pair (chicago vs
 * detroit) sat at 0.756 on ~685 shingles each, which needs roughly 440 words
 * of genuinely unique prose per page to fall under the 0.55 gate. Three
 * paragraphs got each page to ~210-240 words; these close the gap.
 */
const CLOSERS = {
  chicago: `Chicago's third distinguishing feature is union and jurisdictional structure. Craft jurisdiction, site agreements and local labour practice shape who may perform which scope on which site to a degree that surprises companies expanding in from lighter-regulation regions, and getting it wrong stops a job rather than merely complicating it. Inspection companies established here treat site-specific eligibility as part of the dispatch decision, alongside method qualification and certification currency. That is a third dimension most scheduling tools do not model at all, and it is the one most likely to send a crew home unpaid.`,
  dallas: `The two halves of the Dallas market also diverge on sales cycle in a way that affects cash. Aerospace and defence scope is contracted slowly, approved through supplier-quality functions, and paid on long terms; energy and fabrication work is awarded quickly, often verbally, and paid faster but disputed more often over scope. An inspection company carrying both needs its invoicing and its job records tied together tightly enough that a scope dispute on the fast side can be answered with the field record rather than with a recollection, because the client on that side of the business has usually already moved on to the next job by the time the question is asked.`,
  charlotte: `A headquarters market also changes who you are really selling to. The engineer who values your technical depth is frequently not the person who renews the contract, and the procurement or category manager who does will compare you against competitors on documented performance rather than on field reputation. Inspection companies in Charlotte that can produce their own delivery history — jobs completed, findings raised, turnaround times, qualification currency across the crew — walk into renewal conversations with evidence. Those relying on the plant relationship alone tend to discover the limits of that relationship at exactly the wrong moment, when a sourcing review reaches their category and the incumbent advantage turns out to be smaller than assumed.`,
  cleveland: `There is also a generational dimension to the Cleveland market that shows up in the records. Much of the region's heavy industry has been inspected by the same companies for decades, and a great deal of the interpretive knowledge — which welds have been repaired before, which vessels have known indications under monitoring, which acceptance calls the customer's metallurgist has historically accepted — sits with individual long-tenured examiners rather than in any system. As those examiners retire, companies that captured inspection history against the asset keep the knowledge and the account; companies that captured it in personal notebooks lose both at once. That is the strongest practical argument for asset-linked inspection history in this market specifically.`,
  detroit: `Detroit also runs one of the more demanding supplier-audit cultures in North American industry, and it applies to inspection vendors as much as to parts suppliers. An automotive customer conducting a process audit will ask to see the written practice, the qualification record for the specific examiner who performed the work, the calibration certificate for the specific instrument used, and the procedure revision in force on the date of examination — and will expect all four retrievable in the meeting rather than emailed afterwards. Inspection companies that can do that pass audits routinely. Those that cannot spend the following weeks assembling a corrective-action response that a better system of record would have made unnecessary.`,
  'fort-worth': `The defence side introduces a constraint that commercial work does not: personnel changes are slow and expensive. Clearance requirements, customer-specific training and programme-specific written practice mean a technician cannot simply be swapped onto defence scope at short notice, so capacity on that side of the business is genuinely fixed in the near term. Inspection companies that plan defence and energy work as one undifferentiated pool routinely over-commit, because the energy work looks staffable right up until the moment the only available technicians turn out to be the ones tied to a programme. Modelling qualification and eligibility separately from headcount is what prevents that.`,
  minneapolis: `The medical-device side deserves separate mention because it has a different failure mode from industrial work. Where a missed refinery indication surfaces as an integrity risk, a documentation gap in device-component inspection surfaces as a regulatory finding against the manufacturer, and the manufacturer passes that consequence straight back to the inspection vendor. Companies serving this cluster therefore operate under quality-system expectations closer to their customer's than to their own industrial baseline: controlled procedures, formal revision history, traceable training records, and change control on anything that affects the examination. Running that standard selectively, on some accounts and not others, is where the discipline usually fails.`,
  nashville: `The corridor's newer investment adds an unfamiliar wrinkle: much of the incoming battery and electric-vehicle manufacturing scope has no settled inspection convention locally, because the assets are new to the region and in some cases new to the industry. Acceptance criteria get negotiated, methods get trialled, and the inspection company that documents what it did and why builds the reference case that shapes how the work is specified afterwards. That is a genuine commercial opportunity for local firms, but only for the ones whose records are good enough to be cited later. Ad-hoc documentation on early work forfeits the position.`,
  odessa: `Turnover is the market's other defining feature. Permian inspection crews churn faster than almost anywhere else in the country, and every departure takes qualification knowledge with it — which technicians were signed off on which procedures, whose vision examinations were current, which client-specific inductions had been completed. Companies running that on personal knowledge rebuild it constantly and lose billable days each time. The ones that hold it in a system onboard a replacement in a fraction of the time, which in a market where the client will simply call the next contractor is the difference between keeping the account and explaining why the crew did not show.`,
  'oklahoma-city': `Oklahoma's regulatory geography is worth understanding separately. Radiographic work moves across state lines constantly in this part of the country, and reciprocity, source transport documentation and per-state licensing obligations differ in ways that are easy to get wrong when a crew is dispatched at short notice to a site two states away. Keeping licensing status, source inventory and exposure records tied to the work order rather than to a separate compliance file means the dispatch decision and the compliance check happen at the same moment. Separating them is how companies end up with a crew on site that is not licensed to perform the work it was sent to do.`,

  // ── LA-basin / Bay Area + Philadelphia/Pittsburgh corridor — added 2026-08-11 ──
  carson: `The broader lesson from Carson is that a city can stop being a single market the moment one of its two anchor plants changes state. A company that built its Carson account plan two years ago, when both sites were operating refineries, is now serving a market that is half turnaround work and half demolition-adjacent verification — and those two halves are billed, staffed and reported on completely differently. Inspection companies that keep the two workstreams in one undifferentiated pipeline will misprice one or both; the ones that model them as separate lines of business, sharing a city but not a client relationship, price both correctly.`,
  torrance: `Torrance is also a preview of where refinery inspection work is generally heading as owners squeeze reliability spend harder. A plant running formal RBI does not buy inspection as a scheduled commodity — it buys risk-model inputs, and the vendor that supplies cleaner, faster, more structured findings gets a bigger share of the program over time. Inspection companies elsewhere in the country still competing purely on day-rate and turnaround-window availability are competing on the terms Torrance left behind.`,
  'el-segundo': `El Segundo and Richmond being named together in the same closure letter is itself useful market intelligence: it tells an inspection company that these two plants' futures are now linked in the owner's own risk accounting, not independent. A company serving one should not assume the other is insulated just because it sits in a different air basin — decisions about California refining capacity are increasingly made at the portfolio level, and an account plan built around a single plant's history is reading only half the picture.`,
  'wilmington-california': `Wilmington is a useful contrast to treat alongside Carson rather than in isolation, since the same two-refinery split runs through both cities along the same corridor. The difference is emphasis: Carson still carries more of Marathon's active operating footprint, while Wilmington carries more of the shuttered Houston-based refiner's site and its long redevelopment runway. An inspection company serving this stretch of the harbor benefits from treating it as one corridor with two different demand curves rather than two identical refinery towns.`,
  vernon: `Vernon also rewards an inspection company willing to build standing service agreements rather than chase one-off turnaround bids, because that is how the demand actually arrives — as a continuous stream of smaller jobs across many tenants rather than a handful of concentrated outages. A company that shows up expecting refinery-scale contracts will leave disappointed; a company that dismisses Vernon because it has no refinery will miss a real, steady, high-frequency market sitting inside the same county as some of the state's largest refining accounts.`,
  'richmond-california': `The practical lesson for a Bay Area inspection company is to stop pricing Chevron Richmond, PBF Martinez and Valero Benicia as one homogeneous "Northern California refining" line item, the way some companies fold the entire LA basin into a single account category. Each of these three plants is on a distinct trajectory this year — regulatory threat, post-fire rebuild, and full shutdown, respectively — and each needs its own staffing plan, its own documentation expectations, and its own read on how much revenue it will still be generating twelve months from now.`,
  martinez: `Martinez also illustrates something specific about insurance-funded rebuild work: because much of the cost sits behind a property-insurance claim, documentation discipline carries commercial weight beyond the refinery's own maintenance budget. Inspection reports that cleanly separate fire-related repair scope from unrelated routine work make the client's insurance accounting simpler, and an inspection company whose reporting system can produce that separation without manual rework is doing the client's controller a favor a generic field report never does.`,
  benicia: `Benicia is also a caution against treating any single refining account as permanent, however long-standing it has been. A plant that ran turnarounds for decades can convert to a finite decommissioning project inside a single year once the owner's economics turn, and the inspection companies best positioned to absorb that shock are the ones already diversified enough — across the wider Bay Area, into terminal and tank-farm work, into other asset classes entirely — that losing one recurring account doesn't threaten the business.`,
  'long-beach': `Long Beach is a useful reminder that "oil city" and "oil-dependent inspection market" are not the same thing. The port generates steady, statutory-cycle examination work regardless of what happens to the islands, and an inspection company built around port infrastructure as the core business, with any island work treated as a specialized and likely-shrinking sideline, is positioned correctly for where this city's economy is actually heading — the reverse of how a company should be built around Carson or Torrance, where the refinery is the core account.`,
  trainer: `Trainer is worth watching as a signal for the rest of the corridor, too. As more industrial and transportation companies buy refining or terminal assets to secure their own supply chains rather than to trade product, the client relationship inspection companies deal with shifts from a pure commodity-margin mindset to an operational-safety-and-supply-security mindset — and the documentation standards that come with that shift tend to be stricter, not looser, than a typical merchant operator's.`,
  'marcus-hook': `Marcus Hook is also a useful case study in what "refinery town" stops meaning once the refinery leaves and the infrastructure stays. The site kept its industrial identity and its workforce, but the actual examination discipline required changed almost entirely — an inspection company that let its Marcus Hook qualifications lapse into pure refinery competence would have quietly become unqualified for most of what the site now needs, without any single dramatic event marking the transition.`,
  paulsboro: `Paulsboro is a reminder that "refinery" is not one product line. A plant built around lubricants and asphalt runs different metallurgy, different fouling patterns and different turnaround priorities than a plant built around gasoline and diesel, even when both sit inside the same regulatory framework and the same corridor. Inspection companies that generalize "refinery experience" without asking what the refinery actually makes will misjudge the specific technique and procedure mix a site like Paulsboro needs.`,
  'linden-nj': `Linden is also where the Bayway name creates real commercial risk for inspection companies that don't get the geography precise. Proposal documents, safety data and site-access paperwork that say "Newark" when they mean "Linden" are more than a clerical slip in a corridor this dense with neighboring petroleum infrastructure — they signal to the client's procurement or safety function that the bidder hasn't actually walked the site, which is exactly the kind of detail a sophisticated refinery client uses to screen out vendors before technical evaluation even starts.`,
  newark: `Newark also illustrates why "which refinery is nearest" is the wrong question for a logistics-and-terminal city. The port and tank-farm operators here compete on throughput and storage reliability, not on refining margin, and their inspection needs — crane certification cycles, tank-shell and bottom examination under API 653, berth and wharf structural surveys — track shipping volume and storage contracts far more closely than they track anything happening at the Bayway refinery a few miles away.`,
  monaca: `Monaca is also a caution against assuming every large industrial asset in a legacy manufacturing region behaves like the legacy assets around it. A cracker built in the past few years, financed on a very different capital model than a refinery built decades ago, and still working through the reliability curve every new plant goes through, needs an inspection partner who understands startup-phase industrial risk — not one who simply extends coke-plant or refinery habits onto a fundamentally different and younger asset.`,
  clairton: `Clairton is also a reminder that ownership transitions themselves generate inspection demand independent of any incident. A new corporate parent auditing an acquired asset's safety and integrity history, especially one now facing litigation and regulatory attention, often commissions baseline condition surveys and gap assessments against its own corporate standards — work that has nothing to do with a routine outage calendar and everything to do with a new owner needing to know, in writing, exactly what it bought.`,
};
for (const [slug, closer] of Object.entries(CLOSERS)) {
  if (US_CITY_TEXTURE[slug]) US_CITY_TEXTURE[slug].p.push(closer);
}

/** Standards designations are the ONLY place digits may appear (§20.10). */
const ALLOWED_DIGIT_CONTEXT = /(SNT-TC-1A|CP-189|ISO\s?(9712|17025|9001)|API\s?(510|570|571|577|580|581|653|1104)|NAS\s?410|ASME\s?(Section\s)?[IVX]+|AWS\s?D1\.1|B31\.[13]|F-35|Article\s\d)/g;

/**
 * Append the texture block to each of the 11 pages.
 * @param routes  prerender route list
 * @param append  (route, html) => void  — the shared appender used by the
 *                other depth scripts, so ordering stays consistent.
 */
export function applyErpUsCityTexture(routes, append) {
  let applied = 0;
  for (const route of routes) {
    const m = route.path.match(/^\/ndt-erp-([a-z-]+)$/);
    if (!m) continue;
    const t = US_CITY_TEXTURE[m[1]];
    if (!t) continue;
    const html =
      `\n<section class="erp-city-texture">\n  <h2>${esc(t.h)}</h2>\n` +
      t.p.map((p) => `  <p>${p}</p>\n`).join('') +
      `</section>\n`;
    append(route, html);
    applied++;
  }
  return applied;
}

/** Build-time guard: no stray digits, no currency, in any texture block. */
export function assertCityTextureClean() {
  const problems = [];
  for (const [slug, t] of Object.entries(US_CITY_TEXTURE)) {
    const text = [t.h, ...t.p].join(' ');
    if (/[£$€₹]|USD|GBP|EUR|INR|SAR|AED/.test(text)) problems.push(`${slug}: currency token`);
    const stripped = text.replace(ALLOWED_DIGIT_CONTEXT, '');
    const digits = stripped.match(/\d/g);
    if (digits) problems.push(`${slug}: ${digits.length} digit(s) outside standards designations`);
    const words = text.split(/\s+/).length;
    if (words < 290) problems.push(`${slug}: only ${words} words — too thin to shift similarity`);
  }
  return problems;
}
