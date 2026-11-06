/**
 * ERP North America cities — 2026-11-06 (owner: "more cities across North America with high
 * quality content of real pages"). Fourteen new /ndt-erp-{slug} markets: eight US, five
 * Canadian, one Mexican, each researched and source-listed (NA_SOURCES, not rendered).
 *
 * Composition per page (applyErpNaCities, run from thin-page-upgrade.mjs after the US texture):
 *   1. market block — buildBlock() from erp-us-market-depth.mjs (base/work/anchor + the
 *      market-TYPE fit prose + capabilities + FAQ); Kincardine gets its own fit prose because
 *      the US power block describes seasonal outages, not a nuclear refurbishment programme;
 *   2. operating texture — hand-written per city (same shape as erp-us-city-texture);
 *   3. regulation and certification note — Canada and Mexico only (CSA B51 authorities,
 *      CNSC, C-NLOER, NRCan CAN/CGSB-48.9712, NOM-020-STPS). The platform records
 *      credentials; it never issues them, and Atlantis does not certify under CGSB/ISO 9712.
 *
 * Rules: no digits outside standards designations (§20.10, assertErpNaClean), no prices,
 * no local-presence claims (Atlantis has no office in these cities), no NAS 410 / Nadcap.
 */
import { buildBlock } from './erp-us-market-depth.mjs';

export const NA_MARKETS = {
  baltimore: {
    name: `Baltimore`, type: `marine`, country: `USA`,
    base: `Baltimore is a port city rebuilding around its harbour: busy public and private terminals, a deep-water container terminal rising on the old Bethlehem Steel ground at Sparrows Point, the replacement for the collapsed Key Bridge, and nearby coal-fired units kept online under a grid-reliability settlement.`,
    work: `Inspection companies divide the year between port and terminal equipment, construction-phase examination on the bridge and terminal projects, boiler scope at the Brandon Shores and Wagner plants, and nuclear and LNG work down the bay at Calvert Cliffs and Cove Point.`,
    anchor: `the harbour terminals, the Sparrows Point redevelopment, the Key Bridge rebuild, and the fossil and nuclear stations within driving range`,
  },
  indianapolis: {
    name: `Indianapolis`, type: `industrial`, country: `USA`,
    base: `Indianapolis is an engine-and-drivetrain city with a construction boom next door: Rolls-Royce builds more of its defence engines here than anywhere else, Allison Transmission designs and builds commercial-duty automatics in the city, and Eli Lilly is raising a pharmaceutical manufacturing campus in neighbouring Boone County.`,
    work: `Demand spans precision examination for aerospace and drivetrain manufacturers, construction-phase work on process plant and the water-supply infrastructure built to serve it, and boiler and piping assessment as the local utility moves its generating fleet off coal.`,
    anchor: `the Rolls-Royce defence campus and its new test cells, the transmission plants, the LEAP District at Lebanon, and the AES Indiana generating stations`,
  },
  'oak-ridge': {
    name: `Oak Ridge`, type: `industrial`, country: `USA`,
    base: `Oak Ridge and the Knoxville area carry an unusual concentration of nuclear construction: a new uranium processing facility at the NNSA national security complex, Kairos Power's advanced-reactor work at the East Tennessee Technology Park, and a TVA site now permitted for a commercial small modular reactor.`,
    work: `The work is construction-phase and quality-programme driven — weld and component examination on nuclear-code buildings beside commercial-code support structures, receiving inspection of factory-built reactor modules, and the documentation federal nuclear owners and the NRC expect from every supplier.`,
    anchor: `the Uranium Processing Facility site, the Kairos Power campus at the technology park, and TVA's Clinch River site`,
  },
  richland: {
    name: `Richland`, type: `power`, country: `USA`,
    base: `Richland and the Tri-Cities sit beside the Hanford Site, where the federal cleanup has begun turning tank waste into glass, and beside Columbia Generating Station, the Northwest's only commercial nuclear plant, with a small-modular-reactor campus planned on Hanford land north of the city.`,
    work: `Inspection companies carry long-cycle integrity programmes on underground waste storage, commissioning and maintenance scope at the cleanup's treatment plant, and the staffing surge of refuelling outages that come round every other spring at Columbia.`,
    anchor: `the Hanford tank farms and the Waste Treatment Plant, Columbia Generating Station, and the planned Cascade Advanced Energy Facility`,
  },
  'san-diego': {
    name: `San Diego`, type: `marine`, country: `USA`,
    base: `San Diego Bay holds the West Coast's only new-build shipyard, a major Navy ship-repair yard with one of the largest dry docks on the coast, and the headquarters of a gas-turbine maker whose packages drive pipelines and power plants worldwide.`,
    work: `Inspection companies split between new-construction weld examination on Navy auxiliaries, dry-dock and pierside repair availabilities on surface combatants and amphibious ships, and manufacturing examination for industrial gas turbines and compressor sets.`,
    anchor: `the NASSCO yard in Barrio Logan, the BAE Systems ship-repair yard and its dry dock, and Solar Turbines' San Diego operations`,
  },
  augusta: {
    name: `Augusta`, type: `power`, country: `USA`,
    base: `Augusta sits between the largest nuclear plant in the United States, Plant Vogtle downriver in Burke County, and the federal Savannah River Site across the river in South Carolina, with paperboard, nitrogen-fertiliser and specialty-polymer plants in the city itself.`,
    work: `Inspection demand runs on commercial nuclear outages at Vogtle, construction and nuclear-quality scope on the Savannah River plutonium-processing project, and the boiler, digester and vessel work of the pulp and chemical plants in town.`,
    anchor: `Plant Vogtle near Waynesboro, the Savannah River Site, and the paperboard, nitrogen and polymer plants around Augusta`,
  },
  peoria: {
    name: `Peoria`, type: `fabrication`, country: `USA`,
    base: `Peoria remains heavy-equipment country even after Caterpillar moved its corporate headquarters away: East Peoria is the single source for Caterpillar's large track-type tractors, Mossville carries manufacturing and a technical center, and Komatsu has opened a new mining and surface-haulage headquarters beside the haul trucks it builds in the city.`,
    work: `The work is production-line and weldment examination: large structural fabrications for tractors and haul trucks, castings and machined components, and supplier inspection across the network that feeds both manufacturers.`,
    anchor: `the East Peoria tractor works, the Mossville and Mapleton plants, and Komatsu's haul-truck operation`,
  },
  memphis: {
    name: `Memphis`, type: `industrial`, country: `USA`,
    base: `Memphis mixes a riverside refinery, a TVA combined-cycle plant, an electric-arc-furnace bar mill and a fast-built AI data-centre complex, with Ford's truck plant and a battery factory taking shape at BlueOval City in Haywood County.`,
    work: `Inspection companies cover refinery programmes and turnarounds, HRSG and turbine outage work, steel-mill maintenance, and construction-phase examination on data-centre power and cooling plant and on the BlueOval City build.`,
    anchor: `the refinery on Lake McKellar, the Allen combined-cycle plant, the Nucor bar mill, the Colossus sites and the BlueOval City campus`,
  },
  kitimat: {
    name: `Kitimat`, type: `industrial`, country: `Canada`,
    base: `Kitimat is a deep-sea industrial town on British Columbia's north coast where LNG Canada now exports liquefied gas, Rio Tinto runs a hydro-powered aluminium smelter with its own terminal, and the Haisla Nation-led Cedar LNG project is building toward a floating liquefaction vessel.`,
    work: `Inspection work spans early-operations integrity scope on the LNG trains, construction examination as the partners build a second phase, smelter and powerhouse maintenance, and marine-terminal and pipeline-receipt work — all in a town far from the province's main labour pools.`,
    anchor: `the LNG Canada site and its marine berths, the BC Works smelter and terminal, and the Cedar LNG pipeline and marine terminal works`,
  },
  kincardine: {
    name: `Kincardine`, type: `power`, country: `Canada`,
    base: `Kincardine's economy turns on the Bruce Power site on Lake Huron, a multi-unit nuclear station whose proposed expansion would make it the largest nuclear facility in the world, and where reactors are being taken down one after another for Major Component Replacement while the rest keep generating.`,
    work: `Inspection work is long-programme nuclear scope — examination tied to replacing steam generators, pressure tubes, calandria tubes and feeders, plus planned maintenance outages on the operating units — under the procedure and personnel regime a nuclear licensee demands.`,
    anchor: `the Bruce A and Bruce B stations, the refurbishment outages moving unit by unit, and the predevelopment work for a potential Bruce C`,
  },
  sudbury: {
    name: `Greater Sudbury`, type: `industrial`, country: `Canada`,
    base: `Greater Sudbury is a deep-mining and smelting basin: Vale runs an integrated complex of underground mines, a mill, the Copper Cliff smelter and a nickel refinery, while Glencore runs the Fraser mine, the Strathcona mill and the Sudbury smelter — and the two are studying a joint copper project.`,
    work: `Inspection work covers smelter and acid-plant maintenance, hoisting and shaft infrastructure at depth, mill equipment, refinery vessels and piping, and the demolition and capital-project scope of a basin renewing its assets.`,
    anchor: `the Copper Cliff smelter and refinery complex, the Clarabelle and Strathcona mills, the Sudbury smelter, and the deep mines across the basin`,
  },
  winnipeg: {
    name: `Winnipeg`, type: `industrial`, country: `Canada`,
    base: `Winnipeg is a Prairie manufacturing and maintenance hub: StandardAero's largest operation, Boeing's Canadian composites centre and Magellan Aerospace on the aerospace side, New Flyer's bus production, CN's Symington Yard on the rail network, and Manitoba Hydro's northern hydro fleet feeding the city over direct-current lines.`,
    work: `Inspection demand spans engine MRO and composite-structure examination under aerospace customer requirements, bus and rail work on production deadlines, and hydro and converter-station scope reached from the city.`,
    anchor: `the StandardAero, Boeing and Magellan plants, the New Flyer facilities, Symington Yard, and the Manitoba Hydro system from the Nelson River stations to its Winnipeg terminals`,
  },
  'st-johns': {
    name: `St. John's`, type: `marine`, country: `Canada`,
    base: `St. John's is the onshore base for Newfoundland and Labrador's offshore oil industry — gravity-based platforms and FPSOs, a new fixed platform at West White Rose, and Bay du Nord in development review — backed by a working harbour dockyard and the province's Bull Arm fabrication site.`,
    work: `Inspection companies work offshore integrity and topsides scope on producing installations, FPSO refit and life-extension campaigns, platform commissioning, Coast Guard and commercial refits in the harbour, and fabrication examination at Bull Arm.`,
    anchor: `the offshore installations served from the city, the St. John's harbour dockyard, and the Bull Arm site on Trinity Bay`,
  },
  monterrey: {
    name: `Monterrey`, type: `fabrication`, country: `Mexico`,
    base: `Monterrey and the Nuevo León industrial belt combine steelmaking, heavy metal fabrication, automotive assembly and one of Mexico's main appliance clusters, with a Pemex refinery at Cadereyta and nearly all exports moving tariff-free to the United States and Canada under the USMCA.`,
    work: `Inspection work runs from mill maintenance and new-plant construction at the Ternium complex to weld and component examination for automotive and appliance suppliers, pressure-equipment testing under Mexican workplace rules, and refinery scope at Cadereyta.`,
    anchor: `the Ternium complex at Pesquería, the Kia assembly plant in the same municipality, the appliance plants around Apodaca, and the Cadereyta refinery`,
  },
};

export const NA_CITY_TEXTURE = {
  baltimore: {
    h: `Baltimore: a harbour where every major asset runs on a different clock`,
    p: [
      `Few East Coast markets carry as many asset lifecycles inside one harbour. The Maryland Transportation Authority is rebuilding the Francis Scott Key Bridge after its collapse, has split the replacement into separate contracts, moved away from its original progressive-build contractor for the main work, and keeps crews driving permanent piles into the riverbed while it selects a builder for the cable-stayed main span and its vessel-collision protection. Southeast of the old bridge line, Tradepoint Atlantic and Terminal Investment Limited have broken ground on a deep-water container terminal at Sparrows Point, on land that held the Bethlehem Steel works for generations, with large ship-to-shore cranes planned and heavy dredging of sediment contaminated by the mill's past.`,
      `Power adds another clock. Talen Energy's Brandon Shores and Wagner plants were due to retire and instead keep running under a reliability-must-run settlement with the grid operator until transmission upgrades around Baltimore are finished. Down the western shore of the Chesapeake, Constellation's Calvert Cliffs — the state's only nuclear station — sits a short drive from the Cove Point LNG terminal. A boiler examined on a unit with a fixed exit date is a different conversation from one on a unit expected to run for decades: the owner wants enough evidence to operate safely to the end, not a long-horizon programme, and the inspection company has to scope, document and price to that horizon honestly.`,
      `The practical consequence is that one metro produces construction QA on a major bridge and a greenfield terminal, statutory and condition work on working port equipment, deferred-retirement boiler scope, and nuclear and cryogenic work with their own personnel regimes — each with a different owner, acceptance basis and report format. Companies that track those streams in separate spreadsheets lose sight of which technicians are tied up in long construction commitments when an outage call lands. Seeing every commitment in one schedule, with qualification and calibration status attached to the person and the instrument rather than buried in a project folder, is what lets a Baltimore firm accept short-notice work without breaking promises on the long jobs.`,
    ],
  },
  indianapolis: {
    h: `Indianapolis: defence engines, drivetrain plants and a pharmaceutical build-out next door`,
    p: [
      `Rolls-Royce says more of its defence engines are built on its Indianapolis campus than anywhere else in the world, and it has completed a major multi-phase modernisation there that cleared out older buildings and added full engine-test capability, with new test cells and control rooms for Air Force, Army and Navy programmes — including the replacement engine for the Air Force's long-range bomber fleet. Allison Transmission, headquartered in the city, builds commercial-duty automatic transmissions for buses, refuse trucks, fire apparatus, construction equipment and military vehicles. Between them they give the metro a manufacturing base where inspection centres on rotating hardware, gearing and castings rather than on vessels and piping, and where the customer's quality department reads every report.`,
      `The construction side is newer and moving quickly. Eli Lilly is building a large manufacturing campus in the LEAP Research and Innovation District at Lebanon, with active-ingredient and cell and gene therapy facilities among its buildings, and Citizens Energy Group is delivering the water that district needs — added treatment capacity, booster stations, storage and long runs of new water main, with easement disputes worked through the courts on the way. Pharmaceutical plants are built around stainless process and utility piping where weld quality and turnover documentation are scrutinised closely. Meanwhile AES Indiana has moved to repower its large Petersburg station from coal to gas, bringing boiler, header and piping assessment on equipment asked to run on a different fuel.`,
      `For an inspection company, the difficulty is that these clients audit in opposite directions. Aerospace and defence suppliers examine personnel qualification, procedure revision and calibration traceability before they look at a single result; construction owners care about weld maps, release schedules and turnover packages that close out a system on time; the utility wants condition data it can plan a conversion around. Firms that serve all three with one generic report template end up rewriting deliverables by hand. Holding templates, qualification evidence and job costs per client regime inside one work-order history is what lets a mid-sized Indianapolis firm take on construction surges without letting its manufacturing accounts drift out of compliance.`,
    ],
  },
  'oak-ridge': {
    h: `Oak Ridge: nuclear construction on several fronts, each with its own rulebook`,
    p: [
      `Oak Ridge's inspection market is being reshaped by projects still under construction rather than plants already running. At the NNSA national security complex, Bechtel is building the Uranium Processing Facility with the NNSA and the site's operating contractor, Consolidated Nuclear Security, to replace ageing enriched-uranium facilities; its main process and salvage buildings are designed to nuclear codes, while the mechanical-electrical and process-support buildings were built to commercial standards. At the East Tennessee Technology Park, Kairos Power started building its Hermes demonstration reactor and has broken ground on a second, power-producing unit whose reactor equipment modules are fabricated at its Albuquerque campus and shipped in for assembly. Nearby, TVA holds the first NRC construction permit for a commercial small modular reactor, a GE Vernova Hitachi boiling-water design at Clinch River, though no construction start has been announced.`,
      `That combination gives an inspection company two quality regimes on one job and very different procurement models across the area. A crew may examine welds on a building under nuclear quality assurance in the morning and on a commercial-code support structure in the afternoon, and the records for each must show which programme governed the work, which procedure revision applied and which examiner was qualified to it. Factory-built modules move part of the examination upstream to a shop in another state, so the site-side job becomes receiving inspection, fit-up and field-weld verification against documentation produced elsewhere — and the inspection company is only as credible as its ability to reconcile its own records with the vendor's.`,
      `Commercially, Oak Ridge rewards patience and punishes thin paperwork. Projects pass through long licensing and pre-construction phases, cost-sharing negotiations and federal baselining before steel is set, so work arrives in waves that are hard to predict from outside. Inspection companies that keep personnel qualification history, calibration certificates and examination records retrievable for the life of a project, and can walk an auditor through the full chain behind any single result long after the fact, stay on supplier lists through those waves. Firms that rebuild the trail for every audit learn that nuclear owners judge vendors on the evidence they produce on the day, not on the quality of work they remember doing.`,
    ],
  },
  richland: {
    h: `Richland: integrity data compared across decades, and an outage every other spring`,
    p: [
      `The Hanford Site defines the Tri-Cities inspection market. Its ageing underground tanks hold a very large inventory of radioactive and chemical waste near the Columbia River, and the Bechtel-built Waste Treatment and Immobilization Plant — the Vit Plant — has begun vitrifying that waste in its Low-Activity Waste Facility, running in extended hot commissioning on the way to steady production, with the sealed stainless-steel containers going to the site's Integrated Disposal Facility. The double-shell tanks are managed under an integrity programme that combines periodic video inspection of tank walls and annulus floors with ultrasonic wall-thickness measurement at longer intervals, and that ultrasonic work has found thinning of steel tank bottoms in several of the tanks examined.`,
      `That makes Hanford one of the few places where an inspection company's value lies in comparability over very long periods. A thickness reading taken through remote, radiologically controlled access is worth little on its own; it matters because it can be lined up against readings from earlier campaigns taken with different equipment and different crews. Records that tie each measurement to its instrument, calibration, procedure revision and examiner — and that can still be queried long after the technicians involved have moved on — are the real deliverable, and a contractor whose data cannot be trended against the previous campaign has delivered much less than it billed for.`,
      `Columbia Generating Station supplies the other rhythm. Energy Northwest takes the plant down for several weeks every other spring to refuel, bringing in a large temporary workforce, and it is preparing an NRC construction permit application for the Cascade Advanced Energy Facility, an X-energy design with Amazon funding the early work, on leased Hanford land north of Richland. A local inspection business therefore plans around a refuelling surge that recurs on a known cycle, a cleanup programme whose pace depends on commissioning progress and federal budgets, and a possible new-build workload whose timing is still being set. Knowing well before each outage which technicians' site training, medicals and method qualifications will lapse matters more here than chasing headline volume.`,
    ],
  },
  'san-diego': {
    h: `San Diego: shipbuilding, ship repair and turbines on one bay`,
    p: [
      `General Dynamics NASSCO occupies a long stretch of the Barrio Logan waterfront and describes itself as the only new-build shipyard on the West Coast. It has christened the last of its Expeditionary Sea Base ships for the Navy and holds a contract for a run of John Lewis-class fleet oilers, with Congress deciding how many are funded, alongside design work on a next-generation submarine tender and pursuit of commercial orders. Further along the bay, BAE Systems' San Diego ship-repair yard operates the largest dry dock the company runs in the country, built to take cruisers, destroyers, amphibious assault ships, mine countermeasures ships and both Littoral Combat Ship variants, as well as Military Sealift Command and Coast Guard vessels.`,
      `New construction and repair are different inspection businesses even where the same weld procedures apply. New-build work is a steady stream of hull, piping and structural examination tied to a production schedule and to programme funding decisions made in Washington. Repair work arrives as availabilities with fixed docking windows, scope that grows once tanks and spaces are opened, and growth work that has to be inspected, reported and priced before the undocking date. A company serving both needs to see, week by week, how many qualified technicians are committed to the new-build stream and how many can be pulled into a repair availability whose scope has just expanded, without leaving either customer short.`,
      `Solar Turbines, a Caterpillar subsidiary headquartered in San Diego, adds a third discipline: industrial gas turbines for onshore and offshore power generation, and compressor sets used as pumping units on natural-gas pipelines. Rotating-equipment examination runs to tight manufacturer acceptance criteria and often feeds engineering dispositions rather than simple accept-or-reject calls. For a San Diego inspection firm the result is a client list running from Navy programme offices and ship-repair planners to a turbine maker's quality department, each with its own acceptance basis and report expectations — and records that have to satisfy every one of them without any client ever seeing another's data.`,
    ],
  },
  augusta: {
    h: `Augusta: commercial nuclear, federal nuclear and a mill town in one service radius`,
    p: [
      `Plant Vogtle, operated by Southern Nuclear in Burke County on the Savannah River, is the largest nuclear plant in the United States, running its original Westinghouse units alongside newer passive-design units that were the first new commercial nuclear construction completed in the country in more than a generation. Across the river, Savannah River Nuclear Solutions is repurposing an unfinished facility with extensive high-hazard-category space into the Savannah River Plutonium Processing Facility for the NNSA, with Fluor Federal Services managing construction and a long list of support facilities and temporary infrastructure going up around it for the incoming workforce.`,
      `The city's own industrial base is older and more conventional. Clearwater Paper bought the Augusta bleached paperboard mill from Graphic Packaging International, Nutrien runs a nitrogen fertiliser plant in the city, and Syensqo is expanding its Augusta specialty-polymers site to compound polyphenylene sulfide alongside the PEEK and polyphthalamide it already handles there. Pulp and paperboard production brings digesters, recovery boilers and dryer sections; nitrogen production brings vessels and piping in aggressive service; polymer compounding brings automotive-grade quality expectations from its customers. None of it shares a calendar with the nuclear outages downriver or the construction phases across the state line.`,
      `For an inspection company, Augusta's challenge is running three record-keeping cultures without letting the strictest become a drag on the rest or the loosest leak into the strictest. Commercial nuclear outages expect licensee procedures and rigorous personnel-qualification evidence; federal nuclear construction brings its own quality-assurance flow-downs and site badging; mill and chemical clients want fast, clear condition reports during short maintenance shutdowns. A qualification register that shows which technician is cleared for which regime, and a calendar that sees Vogtle's outage windows, the federal project's phases and the mills' shutdowns side by side, is what keeps a firm here from double-booking its scarcest people.`,
    ],
  },
  peoria: {
    h: `Peoria: two rival heavy-equipment makers and the weldments between them`,
    p: [
      `Caterpillar's corporate headquarters is now in Irving, but its footprint around Peoria still carries the region's industrial economy. East Peoria handles manufacturing, components and offices and is the single source for the company's large track-type tractors; Mossville carries manufacturing, offices and a technical center; Mapleton and Peoria produce components; Morton runs parts distribution. Komatsu, described locally as Caterpillar's largest competitor in town, has opened a new mining and surface-haulage headquarters in Peoria, saying the mining trucks built there are among the largest and most capable in its portfolio, with a sizeable workforce and a deep supplier base behind them.`,
      `That base turns NDT into a production function rather than an outage event. Frames, booms, truck bodies and other structural weldments are examined against the manufacturer's own weld-quality specifications, often at line pace, and a rejection holds a machine that already has a ship date. Castings and machined components bring their own examination plans, and the supplier tier brings first-article and lot-release work in which the inspection report becomes part of the part's permanent record. Inspection companies embedded in these plants live on throughput, quick disposition and the ability to show — when a field failure comes back years later — exactly what was examined on that serial number, to which procedure, and by whom.`,
      `Peoria's distinctive wrinkle is serving direct competitors in the same town. A firm with crews at Caterpillar and Komatsu operations, or at suppliers working for each, holds confidential drawings, weld specifications and defect statistics for rivals and must keep them strictly apart inside its own systems. That is a practical argument for per-client data separation, role-based access and templates that never cross accounts — protections a shared drive and a single job spreadsheet cannot guarantee. It is a commercial argument too: an OEM supplier-quality team can reasonably ask how a vendor protects its information, and a clear, demonstrable answer helps win renewals in a market this concentrated.`,
    ],
  },
  memphis: {
    h: `Memphis: a refinery, a steel mill and a data-centre build moving faster than its permits`,
    p: [
      `Valero's Memphis refinery sits on Lake McKellar off the Mississippi, processing mainly light sweet crude delivered by the Diamond pipeline from Cushing and turning nearly all of it into light products — gasoline, diesel, jet fuel and petrochemicals — with its own jet-fuel pipeline. Southwest of downtown, TVA's Allen Combined Cycle Plant runs gas turbines into heat recovery steam generators feeding a steam turbine, and Nucor Steel Memphis melts mostly scrap in an electric arc furnace to roll finished bar for automotive, construction, energy and machinery customers. Those three alone give the city a classic industrial inspection mix: API pressure-equipment and piping scope, HRSG tube and header work, and mill maintenance on furnaces, cranes and rolling equipment.`,
      `The newer layer moves at another speed. xAI converted a vacant Electrolux factory in South Memphis into its Colossus supercomputer, ran gas turbines on site while grid capacity caught up, and has expanded across the state line into Southaven, Mississippi, where its turbine plant is now the subject of litigation and regulatory argument. In Haywood County, Ford has dropped its electric-pickup plan for BlueOval City in favour of gasoline trucks at the renamed Tennessee Truck Plant, while SK On has taken full ownership of the battery plant on the same campus. Fast-track power, cooling and process construction of this kind compresses inspection into narrow windows, and its records are likely to be read later by people looking for gaps.`,
      `For a Memphis inspection company, the same crew pool is being asked for two incompatible things: the steady, code-driven discipline of a refinery and a power plant, and the speed of projects whose owners measure progress in weeks. Firms that let construction urgency set the standard for their documentation pay for it when a permit challenge, an insurer or a regulator asks to see exactly what was examined. Firms that keep both kinds of work on one record-keeping standard — the same qualification evidence, calibration trail and signed reports whether the job is a refinery circuit or a fast-track cooling loop — can take the urgent work without creating liabilities they only discover later.`,
    ],
  },
  kitimat: {
    h: `Kitimat: an LNG plant in its first years, an expansion approved, and a smelter older than both`,
    p: [
      `LNG Canada shipped its first export cargo from Kitimat and is still in what the company calls its early operations phase, when flaring runs higher and equipment shows its first in-service behaviour. The BC Energy Regulator inspected the site and ordered a root-cause report after finding black-smoke flaring outside its permit conditions, a sign of how closely the facility is watched. The joint venture of Shell, PETRONAS, PetroChina, Mitsubishi and Korea Gas has since taken a final investment decision on Phase Two, adding further liquefaction trains, another LNG storage tank, a condensate tank, a loading berth and expanded utilities, while Coastal GasLink adds compression along its pipeline to feed it.`,
      `Rio Tinto's BC Works has operated since the middle of the last century: a smelter modernised with AP smelting technology, powered by the Kemano powerhouse over a long transmission line from water held in the Nechako Reservoir, with a second Kemano tunnel completed to secure supply, and a private deep-sea terminal shipping metal to Japan, South Korea and the United States. Cedar LNG, led by the Haisla Nation, is building its pipeline and marine terminal locally while its floating LNG vessel is fabricated at Samsung Heavy Industries in Geoje for delivery to Kitimat. One inspection company here may be working an operating LNG train, an expansion construction front, a hydro-and-smelter maintenance contract and a marine-terminal build in the same season.`,
      `The operating reality is distance, and documentation written elsewhere. Kitimat sits far from British Columbia's main technician pools, so every mobilisation has to be planned with travel, accommodation and site orientation built in, and a qualification lapse discovered on arrival is costly to fix. Much of the equipment arrives as modules or vessels fabricated overseas, which means receiving inspection and field-weld examination must be reconciled with fabrication records written by foreign yards in their own formats. Companies that hold vendor documentation, their own field results and each technician's certification evidence together, and can hand an owner or regulator one coherent package, are better placed than those assembling it from email attachments after the crew has left.`,
    ],
  },
  kincardine: {
    h: `Kincardine: a refurbishment programme that is the market`,
    p: [
      `Bruce Power's Life Extension Program sets the tempo for the whole Kincardine area. One unit has completed Major Component Replacement and returned to the grid, the next came back well ahead of schedule as the first to use robotics on the reactor face, another is mid-outage and tracking faster still, and a further unit has just been taken offline to start its own, with the remaining units scheduled to follow. Each outage removes and replaces steam generators, pressure tubes, calandria tubes and feeder tubes, extending reactor life by decades. Beyond that, Bruce Power and the Ontario government have signed a predevelopment agreement for Bruce C, a proposed expansion now in federal impact assessment, with a CNSC licence-to-prepare-site application still to come.`,
      `For an inspection company this is not an outage season but a production line of outages, each expected to improve on the last. The examination work — pre-service inspection of new components, verification of installed equipment, in-service inspection on the units still generating — is planned far ahead, and the owner openly measures each successive replacement outage against the one before it. Vendors that cannot show the same crews, procedures and qualification evidence getting faster and cleaner from one unit to the next lose ground to those that can, because performance on the learning curve is exactly what the client is tracking.`,
      `The local labour market adds pressure. A rural lakeshore community hosting a programme of this size has to draw much of its specialised workforce from outside the immediate area, and the same qualified people are courted by every contractor on site. Records portability therefore matters: a technician's nuclear-site training, radiation-protection status, method certifications and procedure qualifications have to be demonstrable instantly when they move between scopes or employers. Inspection companies that hold those records cleanly, alongside equipment calibration traceable to the component examined, spend less time proving currency and more time on billable work — and are ready when a later outage, or Bruce C, asks for the history of what was done before.`,
    ],
  },
  sudbury: {
    h: `Sudbury: deep shafts, hot smelters and a skyline being taken down`,
    p: [
      `Vale's Sudbury complex is a full chain in one basin. Its underground mines — Creighton reaching far below surface, alongside Totten, Garson, Coleman and Copper Cliff — feed the Clarabelle mill, which floats ore into copper and nickel concentrates; the Copper Cliff smelter strips sulphur and iron to make nickel matte and converts the sulphur dioxide into sulphuric acid on site; and the Copper Cliff refinery turns matte into high-purity nickel pellets and powders. The Stobie open pit has resumed with Indigenous partners, and the decommissioned Superstack is being dismantled over several years. Glencore's Sudbury Integrated Nickel Operations runs the Fraser mine, the Strathcona mill and the Sudbury smelter, whose matte travels through Quebec City to the Nikkelverk refinery in Norway.`,
      `That asset mix gives inspection companies an unusually wide method spread inside one market: hoist and headframe components and shaft steel where failure leaves no margin, acid-plant vessels and piping in aggressive service, smelting equipment run hot and cycled hard, refinery process equipment under pressure, and mill crushers, grinding equipment and structures. Ontario treats the hoisting of people and material in mines as a high-risk operation, and its labour ministry has run inspection initiatives focused on hoist maintenance and the training of those who work on hoists — scrutiny that reaches naturally to the contractors whose examination results feed those maintenance decisions.`,
      `The basin is also renewing itself, which changes the commercial shape of the work. Vale and Glencore are studying an equal-share copper venture that would deepen an existing shaft at Glencore's Nickel Rim South mine and drive new drifts toward copper deposits, Glencore's Onaping Depth project targets high-grade ore far below current workings, and the Superstack demolition is a long structural job in its own right. A Sudbury inspection company therefore runs recurring maintenance contracts at operating plants beside finite capital projects with their own owners' engineers and turnover requirements. Knowing which technicians hold the inductions, method certifications and underground or working-at-height training each operator requires decides who gets the call when a smelter shutdown and a shaft project land together.`,
    ],
  },
  winnipeg: {
    h: `Winnipeg: engines, composites, buses and a hydro system that starts far to the north`,
    p: [
      `Winnipeg's aerospace base is larger than its profile suggests. StandardAero, which calls itself the world's largest independent maintenance, repair and overhaul firm, runs its largest operation here, including engine and helicopter work, and operates GE's engine testing and research centre, the primary facility for icing and cold-weather testing. Boeing Canada Winnipeg is described as the largest composites manufacturing centre in Canada, producing parts such as a one-piece acoustic inner barrel for an engine nacelle inlet, and Magellan Aerospace builds horizontal tails for a global fighter programme and integrates satellites. Work for customers like these comes with customer-specified procedures, personnel-qualification expectations and the right to audit every inspection supplier against them.`,
      `The heavy-manufacturing and infrastructure side is just as distinct. NFI's New Flyer has opened a Winnipeg facility that completes heavy-duty transit buses, battery-electric models included, so Canadian customers can have buses built from start to finish in the country. CN's Symington Yard in St. Boniface is one of the largest rail yards in the world. And Manitoba Hydro generates nearly all of its electricity at hydro stations, the largest of them on the Nelson River far to the north, sending power south on direct-current lines to terminals at the Winnipeg end, with gas turbines at Brandon held for peaks, system security and drought.`,
      `For a Winnipeg-based inspection company, the city is both a market and a launch point. Composite ultrasonic examination, engine-component inspection and audit-heavy aerospace reporting sit beside bus and rail work with production deadlines, and hydro-station work that means sending crews a long way north with every credential and instrument already verified. Keeping aerospace customer approvals clearly separate from general industrial certifications, and knowing which calibrated instruments are at a northern station and which are back in the shop, is what stops a diverse book from turning into missed audits and idle crews waiting on paperwork that should have travelled with them.`,
    ],
  },
  'st-johns': {
    h: `St. John's: an offshore province where every asset is reached by sea or air`,
    p: [
      `Newfoundland and Labrador's offshore production comes from structures that shape inspection differently. Hibernia and Hebron stand on fixed gravity-based structures, Hebron being the province's first heavy-oil field; Terra Nova and White Rose produce through FPSOs, and both have recently come through long refits, Terra Nova offline for years before resuming and the SeaRose returning after its own refit. Cenovus's West White Rose project added a concrete gravity structure towed out of Placentia Bay, topsides built by Kiewit Offshore Services and a tie-back to the SeaRose, moving into offshore commissioning once construction and welding were complete. Equinor has filed its Bay du Nord development plan with the offshore regulator, a project that could become the province's first deepwater oil development.`,
      `Onshore, the harbour and the bays carry their own work. St. John's Dockyard, trading as Newdock, refits Canadian Coast Guard ships under the national shipbuilding strategy, including a major conversion and refit of an icebreaking buoy tender with propulsion inspections, on top of its usual short refits. The province owns the Bull Arm site on Trinity Bay, operated by OilCo, and has launched a pre-FEED study for a floating dry dock there aimed at ship repair, marine construction, offshore support, defence and decommissioning, which would add another category of steel and structural examination to the region.`,
      `For an inspection business, the defining constraints are access and evidence. Offshore scope is governed by weather windows, helicopter seats and bed space on the installation, so a technician who arrives with a lapsed certificate or an out-of-calibration instrument has cost far more than a day. FPSO refits and new-platform commissioning generate concentrated examination campaigns reviewed by owners and their certifying bodies, while dockyard refits run against fixed delivery dates. A firm working from St. John's needs personnel, calibration and job records settled before anyone boards a helicopter or a vessel, and reports the operator and the regulator can follow without a phone call back to the field.`,
    ],
  },
  monterrey: {
    h: `Monterrey: a steel-and-assembly economy inspecting to two countries' expectations`,
    p: [
      `Ternium is building a new steel shop at its Pesquería complex that pairs direct-reduction ironmaking with an electric arc furnace, well advanced and due to feed slabs to the hot strip mill on the same site, replacing much of the slab now shipped in from the company's Brazilian operations. Kia's Pesquería plant assembles compact cars for export to dozens of countries, and the state's appliance cluster includes Whirlpool, Mabe, Carrier and Trane Technologies. The base is also shifting: Whirlpool is gradually closing its Supsa refrigerator plant in Apodaca and moving that production to Ramos Arizpe in Coahuila, while keeping its other facilities on the Apodaca campus.`,
      `Energy work brings a different authority and a different temperament. Pemex's Cadereyta refinery is a federal installation, and after odour complaints across the metro the state environment secretary met Pemex executives and the federal safety, energy and environment agency, ASEA, inspected the plant, with federal and state emissions monitoring to follow. Refinery scope there runs to Pemex specifications under federal oversight, while the steel, automotive and appliance plants answer to their customers' quality systems and to Mexican workplace-safety rules for their boilers and pressure vessels. Fabricators building equipment for US buyers frequently examine to ASME and AWS D1.1 acceptance criteria on the same shop floor where domestic work follows Mexican norms.`,
      `For an inspection company in Monterrey, the job is serving two countries' expectations at once. Reports often need to exist in Spanish for the plant and the labour authority and in English for a US customer's supplier-quality team; personnel evidence may have to satisfy an employer-based written practice demanded by an export customer as well as the certified-personnel requirement in Mexican pressure-equipment rules; and the USMCA review keeps export manufacturers alert to anything that could slow a shipment north. Producing bilingual deliverables from one set of field data, with each technician's qualifications mapped to the scheme each client recognises, removes a layer of rework that otherwise eats the margin on short-turnaround fabrication jobs.`,
    ],
  },
};

export const NA_REG_NOTES = {
  kitimat: {
    h: `Regulation and certification for inspection work in Kitimat`,
    p: [
      `Boilers, pressure vessels and refrigeration equipment in British Columbia fall under the Safety Standards Act and the Power Engineers, Boiler, Pressure Vessel and Refrigeration Safety Regulation, administered by Technical Safety BC, which applies CSA B51 and is consulting on moving to the newest edition. Oil and gas activity brings a second regulator. The BC Energy Regulator, successor to the province's Oil and Gas Commission, issued LNG Canada's facility, pipeline and related permits and inspects against their conditions, as its recent flaring order shows. Technical Safety BC's own bulletin draws the boundary: most pressure piping and gas systems forming part of a pipeline or facility under the Energy Resource Activities Act sit outside the Safety Standards Act, while ASME Section VIII pressure vessels and power and heating boilers stay under it wherever they are installed. On an LNG site, one inspection company can be producing records that two different authorities will read.`,
      `Personnel certification has its own national scheme. Natural Resources Canada's NDT Certification Body certifies technicians to CAN/CGSB-48.9712, the Canadian adoption of the ISO personnel-certification standard, and has said its certification services continue unchanged even though PSPC-CGSB has stopped publishing standards. Owners and contractors working to US engineering standards may instead call for employer-based qualification under SNT-TC-1A; which route applies is set by the owner's specification and the governing code, not by the inspection company. Industrial radiography adds CNSC exposure device operator certification, for which NRCan sets the examination. The platform stores whichever of these a company's scheme requires — national certificate details and expiry, written-practice levels, operator certification — against each technician. It records credentials; it does not issue them.`,
    ],
  },
  kincardine: {
    h: `Regulation and certification around the Bruce site`,
    p: [
      `The Bruce nuclear stations operate under licences from the Canadian Nuclear Safety Commission, and an expansion such as Bruce C must complete a federal impact assessment before Bruce Power can apply to the CNSC for a licence to prepare the site. For pressure-retaining nuclear components, TSSA serves as Ontario's Authorized Inspection Agency, recognised by the CNSC, performing engineering reviews, inspections and quality audits and verifying repairs and alterations against CSA Group, ASME and National Board requirements. Conventional boilers and pressure vessels elsewhere in Ontario come under TSSA's boilers and pressure vessels programme, which adopts CSA B51 through its code adoption document. On nuclear scope, a contractor's examination records can be reviewed by the licensee, by the authorized inspection agency and by the federal regulator.`,
      `Personnel requirements on nuclear work are set by the licensee's programme and the applicable nuclear standards rather than by contractor preference. At national level, NRCan remains the third-party certifier under CAN/CGSB-48.9712 and is also the qualifying body for the CNSC's exposure device operator examination, the certification that operating a radiography exposure device requires. A vendor whose own practice is built on SNT-TC-1A or CP-189 still has to meet whatever the licensee accepts on site. The platform holds all of these credentials per person — national certificates, employer qualifications, operator certification, site-specific nuclear training and every expiry date — so the evidence an authorized inspector or licensee auditor asks for is already assembled. It keeps the records; certification itself comes from the bodies named here.`,
    ],
  },
  sudbury: {
    h: `Regulation and certification for inspection work in Sudbury`,
    p: [
      `Ontario's Technical Standards and Safety Authority administers the province's boilers and pressure vessels regulation under the Technical Standards and Safety Act, and its code adoption document adopts CSA B51 with Ontario amendments — the basis on which smelter, refinery and acid-plant pressure equipment is registered, inspected and repaired. Mines are regulated under the Occupational Health and Safety Act by the Ministry of Labour, Immigration, Training and Skills Development, which treats hoisting of people and material as high-risk and has run targeted inspections of mine hoists, their maintenance and the training of the people who work on them. A basin inspection company therefore works inside two provincial regimes at once: pressure-equipment oversight on the processing side, and mining health and safety enforcement underground and at the headframes.`,
      `The national third-party route for NDT personnel is certification by Natural Resources Canada to CAN/CGSB-48.9712; mine and smelter operators and their engineers decide whether a given scope calls for that, an employer-based SNT-TC-1A qualification or a particular method endorsement, and radiography needs CNSC exposure device operator certification on top. Mine sites then add their own inductions, underground training and permit systems. The platform logs each layer per technician — scheme, method and level, expiry dates, site inductions — so dispatch can see who is cleared for a shaft job and who for a smelter vessel before anyone is sent. It maintains the records a company's scheme calls for and does not certify anyone itself.`,
    ],
  },
  winnipeg: {
    h: `Regulation and certification for inspection work in Winnipeg`,
    p: [
      `In Manitoba, boiler and pressure vessel safety is the responsibility of Inspection and Technical Services Manitoba, part of the Department of Labour and Immigration, which administers The Steam and Pressure Plants Act and The Power Engineers Act and enforces them through design registration, inspections, examinations and licensing. The same branch handles elevating devices, gas and electrical inspection, so an industrial client in the city deals with one provincial office across several equipment classes. Aerospace work runs on a different axis: there the governing requirements belong to the customer — the engine maker, airframer or programme prime — whose procedures, qualification expectations and audit rights flow down to every inspection supplier.`,
      `A Winnipeg firm can therefore be asked for quite different personnel evidence from one client to the next. Canada's federal route, NRCan's certification body working to CAN/CGSB-48.9712, is one that industrial and infrastructure specifications can name; aerospace customers typically set their own personnel-qualification terms in supplier specifications; employer-based SNT-TC-1A programmes appear where a client's engineering standards call for them; and any radiography needs CNSC exposure device operator certification. The platform organises each technician's credentials by scheme — national certificates, employer written-practice levels, customer approvals, operator certification and expiry dates — so an aerospace audit and a hydro-station prequalification can both be answered from the same register. It stores what a scheme requires; it does not grant certification.`,
    ],
  },
  'st-johns': {
    h: `Regulation and certification for inspection work in St. John's`,
    p: [
      `Offshore petroleum activity is regulated by the Canada-Newfoundland and Labrador Offshore Energy Regulator, the former C-NLOPB, renamed when amendments to the Atlantic Accord Acts came into force and its mandate widened to offshore renewable energy. Offshore worker safety and environmental protection remain its stated priorities, and Equinor's Bay du Nord development plan application is now in its review. Onshore, the province's Department of Government Services is the point of contact for boilers, pressure vessels and compressed gas systems, including design approval, so dockyard, fabrication-yard and plant equipment in and around St. John's sits under a provincial regime while offshore installations answer to the joint federal-provincial regulator.`,
      `Offshore and onshore alike, NRCan certification under CAN/CGSB-48.9712 is the national third-party option for NDT personnel, while operators and their contractors may specify employer-based SNT-TC-1A qualification or added requirements for particular scopes, and radiography at the dockside or at Bull Arm brings CNSC exposure device operator certification into play. Offshore work layers the operator's own training and medical requirements over the technical credentials. The platform keeps those layers side by side for each technician — scheme, method, level, expiry, offshore and site training — and flags gaps before a helicopter seat is booked. It holds the records a company's scheme requires rather than issuing any certification.`,
    ],
  },
  monterrey: {
    h: `Regulation and certification for inspection work in Monterrey`,
    p: [
      `Pressure equipment in Mexican workplaces is governed by NOM-020-STPS, enforced by the Secretaría del Trabajo y Previsión Social. It covers pressure vessels, cryogenic vessels and boilers, sorts them into categories by pressure, volume and fluid hazard, and requires employers to keep an up-to-date equipment list, a file for each unit, revision and maintenance programmes, and operating, inspection and maintenance procedures in Spanish. Higher-category equipment must be pressure-tested or examined by non-destructive methods at set intervals, using at least one volumetric method such as radiography, ultrasound or acoustic emission together with a surface or leak method, and for the highest category the tests are witnessed by an accredited and approved unidad de verificación. Hydrocarbon installations such as the Cadereyta refinery add oversight from ASEA, the federal safety, energy and environment agency.`,
      `On personnel, NOM-020-STPS requires that non-destructive examination be performed and its results endorsed by certified personnel with the technical capacity and experience to perform, supervise, interpret and evaluate it, referring to a Mexican qualification standard or an equivalent. Inspection suppliers to export manufacturers may meet that through an employer-based SNT-TC-1A programme recognised by their US customers, through third-party certification under the ISO personnel standard, or both, with the client's specification usually deciding. The platform keeps the evidence each route needs — written practice, levels by method, training and experience records, third-party certificates and expiry dates — alongside the equipment files and verification-unit reports a NOM-020-STPS review looks for. It records whichever scheme the company relies on; it does not certify personnel.`,
    ],
  },
};

/* Pages the facts above were verified from (2026-11-06). Not rendered. */
export const NA_SOURCES = {
  baltimore: [
    'https://marylandmatters.org/2026/05/01/shipping-terminal-tradepoint-atlantic-sparrows-point/',
    'https://www.wypr.org/wypr-news/2026-07-21/maryland-takes-big-step-in-selecting-company-for-the-main-part-of-the-key-bridge-rebuild',
    'https://www.power-eng.com/coal/two-fossil-fired-plants-get-a-life-extension-as-part-of-pjm-agreement/',
    'https://en.wikipedia.org/wiki/Calvert_Cliffs_Nuclear_Power_Plant',
  ],
  indianapolis: [
    'https://www.manufacturingdive.com/news/rolls-royce-expands-indiana-engine-manufacturing-1b-investment-defense/829160/',
    'https://en.wikipedia.org/wiki/Allison_Transmission',
    'https://www.insideindianabusiness.com/articles/lillys-3-7b-manufacturing-campus-in-boone-county-starting-to-take-shape',
    'https://www.theindianalawyer.com/articles/citizens-energy-reaches-agreements-on-multiple-eminent-domain-cases-for-leap-related-project',
    'https://www.ibj.com/articles/aes-to-invest-1-1b-as-it-converts-huge-petersburg-plant-from-coal-to-natural-gas',
  ],
  'oak-ridge': [
    'https://bechtel.com/projects/uranium-processing-facility',
    'https://www.ans.org/news/2026-04-21/article-7964/kairos-power-breaks-ground-on-first-powerproducing-reactor-in-oak-ridge/',
    'https://world-nuclear-news.org/articles/first-construction-permit-issued-for-bwrx300-smr-in-us',
  ],
  richland: [
    'https://content.govdelivery.com/accounts/USDOEOEM/bulletins/417d16f',
    'https://www.ans.org/news/2025-10-17/article-7465/after-decades-hanfords-wtp-begins-vitrifying-tank-waste/',
    'https://materialsperformance.com/articles/material-selection-design/2018/11/tank-integrity-studied-at-radioactive-us-waste-storage-site',
    'https://www.yakimaherald.com/news/northwest/amazon-bringing-one-of-nation-s-1st-new-reactors-to-wa-training-center-to-open/article_bd2dcff3-cf40-5104-ac75-7cfabf5c251a.html',
  ],
  'san-diego': [
    'https://www.sdbj.com/defense/nassco-looks-ahead-as-esb-program-sunsets/',
    'https://www.naval-technology.com/news/newsbae-to-invest-100m-to-expand-dry-docking-capabilities-at-san-diego-shipyard-4544766/',
    'https://en.wikipedia.org/wiki/Solar_Turbines',
  ],
  augusta: [
    'https://en.wikipedia.org/wiki/Vogtle_Electric_Generating_Plant',
    'https://www.ans.org/news/2025-01-10/article-6658/a-series-of-firsts-delivers-new-plant-vogtle-units/',
    'https://public.srs.gov/2025/09/srs-opening-new-construction-work-fronts-to-accelerate-srppf-project/',
    'https://pulpapernews.com/en/node/15641',
    'https://www.wrdw.com/2026/05/19/spike-fertilizer-prices-hurts-farmers-helps-company-with-augusta-plant/',
    'https://www.chemanalyst.com/NewsAndDeals/NewsDetails/syensqo-enhances-specialty-polymer-capabilities-with-expansion-in-augusta-georgia-36691',
  ],
  peoria: [
    'https://caterpillar.com/en/company/global-footprint/americas/united-states.html',
    'https://www.wcbu.org/local-news/2026-06-10/komatsu-bets-28-million-on-peorias-manufacturing-future',
  ],
  memphis: [
    'https://www.valero.com/sites/default/files/valero-documents/Memphis%20Refinery%20Fact%20Sheet%20MAR2020%20REV2.pdf',
    'https://tva.com/energy/our-power-system/natural-gas/allen-combined-cycle-plant',
    'https://gem.wiki/Nucor_Steel_Memphis_plant',
    'https://en.wikipedia.org/wiki/Colossus_(supercomputer)',
    'https://tennesseelookout.com/2026/07/23/what-to-know-about-fords-blueoval-city-plant-5-years-later/',
  ],
  kitimat: [
    'https://www.bc-er.ca/what-we-regulate/major-projects/lng-facilities/lng-canada/',
    'https://www.bnnbloomberg.ca/business/2026/04/23/bc-energy-regulator-finds-non-compliant-black-smoke-flaring-by-lng-canada/',
    'https://worldoil.com/news/2026/9/29/shell-takes-fid-to-double-lng-canada-capacity-to-28-mmtpa/',
    'https://www.riotinto.com/en/operations/canada/bc-works',
    'https://www.cedarlng.com/?p=2176',
    'https://www.technicalsafetybc.ca/regulations/boiler',
    'https://www.technicalsafetybc.ca/regulatory-resources/regulatory-notices/design-registration-requirements-static-pressure-equipment-used-oil-gas-activity-settings',
    'https://engage.technicalsafetybc.ca/bp-codes-2024/csa-b51-24',
    'https://natural-resources.canada.ca/science-data/non-destructive-testing/about-certification-ndt',
  ],
  kincardine: [
    'https://world-nuclear-news.org/articles/bruce-unit-5-refurbishment-begins',
    'https://www.ans.org/news/article-8018/bruce-power-ontario-reach-300m-predevelopment-agreement-on-bruce-c/',
    'https://tssa.org/nuclear-safety',
    'https://tssa.org/sites/default/files/2025-06/Code%20Adoption%20Document%20Amendment-BPV-25-01-CAD.pdf',
    'https://natural-resources.canada.ca/science-data/non-destructive-testing/about-certification-ndt',
  ],
  sudbury: [
    'https://valebasemetals.com/our-operations/sudbury-complex/',
    'https://glencore.ca/en/sudburyino/what-we-do',
    'https://www.mining.com/web/vale-glencore-explore-canada-jv-in-bid-to-boost-copper-exposure',
    'https://ontario.ca/page/inspection-initiative-results-mine-hoists',
    'https://tssa.org/sites/default/files/2025-06/Code%20Adoption%20Document%20Amendment-BPV-25-01-CAD.pdf',
    'https://natural-resources.canada.ca/science-data/non-destructive-testing/about-certification-ndt',
  ],
  winnipeg: [
    'https://www.economicdevelopmentwinnipeg.com/key-industries/aerospace',
    'https://www.electrive.com/2026/03/04/nfi-opens-winnipeg-facility-for-fully-canadian-built-electric-buses/',
    'https://en.wikipedia.org/wiki/Symington_Yard',
    'https://hydro.mb.ca/corporate/operations/generation',
    'https://www.gov.mb.ca/labour/its/bpv/itsm_bpv.html',
    'https://www.gov.mb.ca/mr/its/index.html',
    'https://natural-resources.canada.ca/science-data/non-destructive-testing/about-certification-ndt',
  ],
  'st-johns': [
    'https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/market-snapshots/2026/market-snapshot-canada-newfoundland-labrador-offshore-oil-production-mature-fields-and-new-frontiers.html',
    'https://www.ogj.com/exploration-development/article/55297105/cenovus-begins-tow-out-of-west-white-rose-structure',
    'https://www.offshore-mag.com/regional-reports/canada/news/55358672/cenovus-energy-west-white-rose-platforms-offshore-commissioning-is-advancing',
    'https://www.gov.nl.ca/releases/?p=63241',
    'https://www.cbc.ca/lite/story/1.7085165',
    'https://www.cnlopb.ca/about/cnloer/',
    'https://www.gov.nl.ca/gs/?p=1492',
    'https://natural-resources.canada.ca/science-data/non-destructive-testing/about-certification-ndt',
  ],
  monterrey: [
    'https://clusterindustrial.com.mx/ternium-avanza-70-en-su-nueva-aceria-de-pesqueria-iniciara-operaciones-en-2027/',
    'https://playersoflife.com/monterrey/kia-en-nuevo-leon-como-ha-sido-su-desarrollo-en-2024/',
    'https://mexicoindustry.com/noticia/nuevo-leon-destaca-en-la-produccion-de-electrodomesticos',
    'https://www.adn40.mx/mexico/2026-07-07/whirlpool-anuncia-el-cierre-de-su-planta-de-fabricacion-en-apodaca-nuevo-leon-y-ya-hay-fecha-estimada/',
    'https://www.publimetro.com.mx/nuevo-leon/2026/09/03/un-paso-mas-para-la-solucion-de-malos-olores-secretario-de-medio-ambiente-se-reune-con-directivos-de-pemex/',
    'https://us.liderempresarial.com/posts/que-oportunidades-trae-2026-para-la-industria-metalurgica-en-nuevo-leon',
    'https://mley.mx/normas/nom-020-stps-2011/index.html.md',
  ],
};


const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const FIT_OVERRIDE = {
  kincardine: `
    <h2>Refurbishment programmes and the inspection companies that support them</h2>
    <p>A nuclear refurbishment is not an outage season. It is a long sequence of unit outages planned years ahead, each with its own scope, its own contractor qualification requirements and its own documentation expectations. The inspection company's product is consistency: the same qualified technicians, the same approved procedures and the same evidence trail unit after unit, with the licensee's quality programme deciding what is acceptable.</p>
    <p>That puts the pressure on records rather than on dispatch. Certifications under whichever scheme the licensee's programme names, training and experience records, procedure revisions and instrument calibration all have to stay current for the length of the programme and be retrievable whenever the licensee or its authorized inspection agency asks. One system of record for people, procedures, equipment and reports is what keeps that evidence consistent from one unit to the next.</p>`,
};

function section(h, paras, cls) {
  return `\n<section class="${cls}">\n  <h2>${esc(h)}</h2>\n${paras.map((p) => `  <p>${esc(p)}</p>\n`).join('')}</section>\n`;
}

function marketBlock(slug, m) {
  const html = buildBlock(slug, m);
  if (!FIT_OVERRIDE[slug]) return html;
  // Swap the market-TYPE fit prose (between the market intro and the capability section).
  const introH2 = html.indexOf('<h2>');
  const fitStart = html.indexOf('<h2>', introH2 + 4);
  const capStart = html.indexOf('<h2>What an ERP built for NDT companies covers');
  return fitStart > 0 && capStart > fitStart ? html.slice(0, fitStart) + FIT_OVERRIDE[slug].trim() + '\n      ' + html.slice(capStart) : html;
}

export function applyErpNaCities(routes, append) {
  let n = 0;
  for (const route of routes) {
    const slug = /^\/ndt-erp-([a-z-]+)$/.exec(route.path)?.[1];
    const m = slug && NA_MARKETS[slug];
    if (!m) continue;
    append(route, marketBlock(slug, m));
    const t = NA_CITY_TEXTURE[slug];
    if (t) append(route, section(t.h, t.p, 'erp-city-texture'));
    const r = NA_REG_NOTES[slug];
    if (r) append(route, section(r.h, r.p, 'erp-city-regulation'));
    n++;
  }
  return n;
}

const ALLOWED = /SNT-TC-1A|CP-189|API\s?(510|570|653|1104)|ASME\s?Section\s?V|ISO\s?9001|CSA\s?B51|CAN\/CGSB-48\.9712|NOM-020-STPS|AWS\s?D1\.1/g;
export function assertErpNaClean() {
  const problems = [];
  const texts = [];
  for (const [slug, m] of Object.entries(NA_MARKETS)) texts.push([slug, [m.name, m.base, m.work, m.anchor].join(' ')]);
  for (const [slug, t] of Object.entries(NA_CITY_TEXTURE)) texts.push([slug, [t.h, ...t.p].join(' ')]);
  for (const [slug, t] of Object.entries(NA_REG_NOTES)) texts.push([slug, [t.h, ...t.p].join(' ')]);
  for (const [slug, h] of Object.entries(FIT_OVERRIDE)) texts.push([slug, h.replace(/<[^>]+>/g, ' ')]);
  for (const [slug, t] of texts) {
    const d = t.replace(ALLOWED, '').match(/.{0,25}\d.{0,25}/);
    if (d) problems.push(`${slug}: digit "${d[0]}"`);
    if (/nas[ -]?410|nadcap|en ?4179/i.test(t)) problems.push(`${slug}: NAS 410 / Nadcap`);
    if (/[$£€]|\bour (office|team)\b|\blocal office\b/i.test(t)) problems.push(`${slug}: price or presence wording`);
  }
  for (const slug of Object.keys(NA_MARKETS)) if (!NA_CITY_TEXTURE[slug]) problems.push(`${slug}: no texture`);
  if (problems.length) throw new Error(`erp-na-cities: ${problems.join('; ')}`);
}
