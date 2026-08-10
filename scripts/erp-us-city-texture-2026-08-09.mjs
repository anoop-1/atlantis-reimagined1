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
