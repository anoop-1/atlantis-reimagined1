/**
 * Thin sweep — 2026-08-06. Owner-directed "upgrade all thin quality pages".
 * Clusters (demand from gsc-report 90d):
 *   12 /compare/* pages (~370i)   — comparison pages are the proven DT/ERP
 *                                    asset class (§23.2); each written per the
 *                                    §23.3 rule: lead with what the rival is
 *                                    genuinely good at.
 *   13 /corporate-training/* verticals (~340i)
 *   Singles: /tofd-testing 88i · /api-570-training 65i · /consulting-me 47i ·
 *            /contact 423i · /press 92i · /faq 58i
 * No pricing anywhere. Competitor products described qualitatively (§18).
 */

/* ── /compare/* ───────────────────────────────────────────────────────────── */
export const COMPARE_DEPTH = {
  'vs-ge-vernova-apm': `
      <h2>Where GE Vernova APM genuinely leads</h2>
      <p>GE Vernova's APM suite (the former Predix/Meridium line) is the incumbent for utility-scale asset performance management: deep reliability analytics, an enormous installed base in power generation, and integration muscle for fleets with thousands of monitored assets and a dedicated reliability engineering team to run it. If you are a generating utility standardising APM across a fleet, it belongs on your shortlist on merit.</p>
      <h2>Where the fit breaks for inspection-led organisations</h2>
      <p>APM platforms model asset health from condition data someone else collects. The inspection layer — who examined what, under which procedure, with which certification, producing which structured findings — is an input assumption, not a managed workflow. Inspection companies and owner teams that live in that layer end up building it beside the platform. Atlantis starts from the examination record: NDT data capture, technician certification tracking, calibration chains and code-referenced reporting, with asset health views built on records the system itself created. Enterprise-suite deployments also assume enterprise implementation programmes; Atlantis deploys configured rather than programmed.</p>
      <p>Honest guidance: fleet-wide reliability analytics with a reliability team → evaluate APM seriously. Inspection operations, contractor data, or a digital twin fed by real examination records → <a href="/digital-twins">see the Atlantis platform</a> or <a href="/contact?service=digital-twins">talk through the fit</a>.</p>`,
  'vs-sap-pm': `
      <h2>What SAP PM does well</h2>
      <p>SAP Plant Maintenance is the system of record for maintenance execution in a large share of the world's heavy industry — work orders, notifications, spares and cost controlling, woven into the same ERP that runs finance and procurement. Where an owner already runs S/4HANA, PM's integration into purchasing and costing is genuinely unmatched, and corporate IT will rightly resist duplicating it.</p>
      <h2>What it was never built for</h2>
      <p>PM treats an inspection as a task that gets closed, not an examination that produces structured evidence. Thickness histories with instrument attribution, technician certification currency, flaw records an FFS assessment can consume, calibration traceability — these live in attachments and custom Z-tables, which is where they go to die. Atlantis is the inspection layer: examination data, personnel qualification and reporting managed natively, coexisting with SAP rather than replacing it — findings and completed work flowing back to PM notifications where the owner requires it.</p>
      <p>Honest guidance: maintenance execution and cost control inside an SAP estate → keep PM. The inspection evidence chain — for your own plant or as an inspection contractor serving SAP-running clients → <a href="/ndt-erp-solution">the Atlantis platform</a> alongside it. <a href="/contact?service=erp">Ask us about coexistence</a>; forcing either system to do the other's job is the expensive mistake.</p>`,
  'vs-etq-reliance': `
      <h2>Where ETQ Reliance is strong</h2>
      <p>ETQ Reliance is a leading enterprise QMS: document control, CAPA, audit management and supplier quality with the workflow flexibility quality directors want, proven at regulated manufacturers at global scale. As the corporate quality backbone for a large manufacturer, it earns its reputation.</p>
      <h2>The gap for inspection-driven operations</h2>
      <p>A QMS manages the quality system's documents and events; it does not capture examinations. NDT data, certification-per-method tracking under SNT-TC-1A, calibration chains and code-referenced inspection reporting sit outside its model — an inspection company running Reliance would still run its actual operations elsewhere. Atlantis packages the operational layer: the examination records, personnel qualification matrix and equipment registers ARE the system, with the quality-system artefacts (written practice, procedures, findings) attached to the operational records they govern.</p>
      <p>Honest guidance: corporate QMS for a manufacturing enterprise → Reliance-class tools fit. Running an inspection business or an inspection function — where the evidence chain is the product — <a href="/ndt-inspection-software">start from the inspection layer</a>.</p>`,
  'atlantis-dt-vs-ibm-maximo': `
      <h2>What IBM Maximo is</h2>
      <p>Maximo is one of the most deployed enterprise asset management systems on earth: work and asset management at scale, strong in utilities, transit and facilities, now wrapped in IBM's application suite with condition-monitoring and AI add-ons. Organisations with a mature Maximo estate have years of asset history and process built around it — that gravity is real and switching costs are legitimate.</p>
      <h2>Digital twin against EAM: different questions</h2>
      <p>An EAM answers "what work happened and what did it cost." A digital twin answers "what condition is this asset actually in, and what will it look like next inspection" — a visual, inspection-data-driven model where NDT findings, thickness histories and anomalies live on the geometry they belong to. Atlantis DT is built inspection-first: examination records feed the twin natively rather than through integration projects. Where Maximo runs the work management, the twin consumes its history and returns inspection-driven condition insight — coexistence, not replacement.</p>
      <p>Honest guidance: work management and cost history → Maximo does the job it was built for. Seeing condition, walking an asset remotely, and grounding decisions in examination evidence → <a href="/digital-twins">the Atlantis digital twin</a>, whatever EAM sits underneath.</p>`,
  'vs-maximo': `
      <h2>Maximo's home ground</h2>
      <p>As an enterprise EAM, Maximo excels at exactly what large asset owners need: work order lifecycles, preventive maintenance scheduling, spares and procurement integration, and the audit trail of maintenance execution across thousands of assets. Utilities and transit systems standardise on it for good reasons.</p>
      <h2>Why inspection companies are a mismatch for it</h2>
      <p>An NDT services company is not an asset owner — its "assets" are technicians, certifications, instruments and examination records, and its revenue is jobs quoted, executed and invoiced. Deploying an owner-side EAM into that business means bending every workflow: certifications become custom fields, examination reports become attachments, and quoting lives somewhere else entirely. Atlantis was built for the service-provider shape — certification tracking, calibration, field capture, code-referenced reporting, and the commercial spine from quote to invoice in one system.</p>
      <p>Honest guidance: owning and maintaining heavy assets → Maximo-class EAM. Selling inspection services → <a href="/ndt-erp-solution">a provider-built system</a>. Serving Maximo-running clients → Atlantis speaks to their world through structured deliverables their EAM can consume.</p>`,
  'vs-netsuite': `
      <h2>NetSuite's strengths, honestly stated</h2>
      <p>NetSuite is a mature cloud ERP with excellent financials, multi-entity consolidation and a vast partner ecosystem — for a growing services company that needs serious accounting, revenue recognition and reporting, it is a credible backbone, and its project-accounting modules handle professional-services billing well.</p>
      <h2>What it cannot know about inspection work</h2>
      <p>NetSuite has no concept of an examination, a method certification, a calibration chain or a code-referenced report — the operational heart of an NDT company would live in customisations and attachments, built and maintained at consulting rates. Atlantis inverts the shape: the inspection operations are native, and the business layer (quoting, work orders, invoicing, job costing) is built around them. For most inspection companies that removes the need for a second system; where corporate requires NetSuite financials, Atlantis runs operations and hands the ledger clean summaries.</p>
      <p>Honest guidance: complex multi-entity financials as the dominant requirement → NetSuite deserves evaluation. Operations-led inspection business → <a href="/erp/odoo-vs-netsuite-ndt-companies">the fuller comparison</a> · <a href="/ndt-erp-solution">the Atlantis approach</a>.</p>`,
  'vs-procore': `
      <h2>What Procore owns</h2>
      <p>Procore is the construction-management standard bearer: project management, drawings, RFIs, submittals and field coordination for general contractors and their subs, with an ecosystem to match. On a construction project's management side, it has earned its position.</p>
      <h2>Inspection is adjacent, not identical</h2>
      <p>An NDT or QA/QC company working construction projects touches Procore as a document destination — but its own operations are certifications, examinations, technique sheets and code acceptance, none of which Procore models. Running the inspection business inside a construction PM tool means the evidence chain lives in PDFs. Atlantis runs the inspection company itself — personnel qualification, field capture, reporting to AWS/ASME acceptance — and its deliverables drop into whatever PM environment the project mandates, Procore included.</p>
      <p>Honest guidance: managing construction projects → Procore. Running the inspection and testing function on those projects → <a href="/ndt-inspection-software">an inspection-native system</a> that feeds it.</p>`,
  'vs-quickbooks': `
      <h2>Where QuickBooks is exactly right</h2>
      <p>For a small inspection company's bookkeeping — invoices out, expenses in, taxes filed — QuickBooks is inexpensive, accountant-friendly and everywhere. Nothing here argues against it as a ledger; most Atlantis customers ran it for years and many keep it.</p>
      <h2>The ceiling every growing inspection company hits</h2>
      <p>QuickBooks knows money moved; it does not know which technician was certified for the job, whether the instrument was in calibration, which work orders are unbilled because the report is stuck in review, or what any job actually cost in hours and consumables. Those answers live in spreadsheets around it, and the spreadsheets stop scaling with the second crew. Atlantis carries the operational record — certifications, calibration, scheduling, field capture, reporting, job costing — and either invoices natively or hands QuickBooks clean invoice data, ending the double entry.</p>
      <p>Honest guidance: bookkeeping → keep whatever your accountant loves. Running the operation that generates the books → <a href="/ndt-erp-solution">see what the operational spine looks like</a>.</p>`,
  'vs-aspentech-mtell': `
      <h2>What Aspen Mtell does well</h2>
      <p>Mtell is prescriptive maintenance done seriously: machine-learning agents trained on process and vibration history to catch failure signatures weeks ahead, strongest on rotating and process equipment in data-rich plants. Where a site has the historian depth and reliability engineering to feed it, its early-warning record is genuine.</p>
      <h2>Different evidence, different questions</h2>
      <p>Mtell predicts from sensor patterns; fixed-equipment integrity runs on examination evidence — measured wall thickness, found cracks, corrosion rates a certified inspector signed. The two are complementary layers, not rivals: a prediction still ends in an inspection, and the inspection record is what codes and regulators accept. Atlantis manages that evidence layer — NDT data, certifications, reporting, and the digital twin views built from real examinations — and is the natural system of record for the inspections a prescriptive alert triggers.</p>
      <p>Honest guidance: rotating-equipment early warning in a data-rich plant → Mtell merits evaluation. The fixed-equipment evidence chain and the inspection operations behind it → <a href="/digital-twins">Atlantis</a>. Mature sites run both.</p>`,
  'vs-bentley-assetwise': `
      <h2>Bentley AssetWise's territory</h2>
      <p>AssetWise is strong where Bentley is strong: linear and civil infrastructure — rail, roads, bridges, networks — with asset lifecycle information management tied into Bentley's engineering and reality-modelling stack. Infrastructure owners deep in Bentley's design ecosystem get continuity no outsider can offer.</p>
      <h2>Where Atlantis differs</h2>
      <p>Atlantis approaches the asset from the examination record up, not the engineering model down: inspection data capture, personnel certification, calibration and code-referenced reporting as the native layer, with digital twin visualisation built on what was actually examined. For industrial plant owners and the inspection companies serving them, that means condition truth without an enterprise information-management programme around it — configured deployment, priced for operations rather than capital programmes, and honest about being inspection-first rather than design-first.</p>
      <p>Honest guidance: managing engineering information across a civil infrastructure portfolio → AssetWise belongs on the list. Industrial inspection operations and inspection-driven twins → <a href="/digital-twins">Atlantis DT</a> · <a href="/contact?service=digital-twins">talk through your asset mix</a>.</p>`,
  'atlantis-erp-vs-floodlight': `
      <h2>Floodlight, credited properly</h2>
      <p>Floodlight built its product specifically for NDT companies — inspection reporting, technician management and scheduling aimed at the same market Atlantis serves — and deserves credit as one of the few vendors that understands the service-provider shape at all. Companies evaluating this space should demo both; category-aware rivals make the whole market better.</p>
      <h2>Where the approaches part</h2>
      <p>Atlantis is built on a full open-source ERP foundation, which changes the ceiling: beyond inspection operations, the same system carries accounting, purchasing, inventory, HR and CRM — the whole company, not the inspection department — and full customisation without vendor-locked development. Data ownership is structural: open standards, complete export, no proprietary trap. For companies that want inspection software today and a company-wide platform as they grow, that foundation is the difference between a tool and an operating system for the business.</p>
      <p>Honest guidance: compare on your own workflows — <a href="/ndt-erp-solution">what Atlantis covers</a> · <a href="/contact?service=erp">arrange a demo on your templates</a> — and ask both vendors the same two questions: what happens at the edges of the inspection workflow, and how does data leave.</p>`,
  'ndt-consulting-vs-in-house': `
      <h2>The real decision: build the capability or engage it</h2>
      <p>An in-house Level III makes sense when the volume does: procedures changing monthly, multiple crews to qualify, client audits arriving weekly. Full-time attention, institutional knowledge, immediate availability — if the workload fills the role, hiring wins and a consultant should tell you so.</p>
      <h2>Where outsourced wins on the merits</h2>
      <p>Most small and mid-sized inspection functions need Level III authority continuously but Level III work intermittently: a written practice reviewed yearly, procedures when methods change, qualification examinations on renewal cycles, an audit presence quarterly. Paying a full-time senior salary for intermittent work is how the role ends up buried in billable examinations instead — at which point the oversight the title promises quietly stops existing. An engaged Level III delivers the authority without the idle capacity, brings cross-industry pattern recognition a single-employer career cannot, and scales up for the audit season and down after.</p>
      <p>The honest test: list the Level III duties your written practice names and estimate the hours honestly. Full workload → hire. Authority with intermittent execution → <a href="/consulting/ndt-consulting-level-iii">the outsourced model</a>. In-between → engage now, hire when the hours prove it, and we will say so when they do.</p>`,
};

/* ── /corporate-training/* verticals ─────────────────────────────────────── */
export const CORPTRAIN_DEPTH = {
  aerospace: `
      <h2>What aerospace NDT training actually involves</h2>
      <p>Aerospace runs the strictest personnel regime in NDT: NAS 410 / EN 4179 govern qualification, employers hold approval through a Responsible Level III, and Nadcap audits test the training records as hard as the technique. Corporate programmes here are built backwards from the audit: documented classroom hours per method and level, OJT logged against the requirement, examinations with the right question balance, and eye examinations on schedule. Method emphasis follows the fleet — FPI lines and eddy current dominate, UT for bond and composite work, with digital radiography growing.</p>
      <p>Atlantis builds aerospace programmes to the employer's written practice and audit calendar: curriculum mapped to NAS 410 hour requirements, examinations question-banked per method, and the records package delivered audit-ready. <a href="/contact?service=training">Scope a programme</a> before the next Nadcap window, not after the finding.</p>`,
  'battery-manufacturing': `
      <h2>NDT competency for battery plants</h2>
      <p>Gigafactories concentrate three inspection problems: weld integrity at production speed (busbars, can seams, tab welds — laser and ultrasonic processes with tiny defect tolerances), thermal and imaging methods for cell and module screening, and the plant-services layer every heavy factory carries — pressure systems, structural steel, lifting equipment. Training demand splits accordingly: production-line staff need method-specific qualification on the joining processes they screen; plant engineering needs conventional UT/VT/MT competency under SNT-TC-1A.</p>
      <p>Corporate programmes are delivered on the line's actual joint types — training on generic specimens for laser-weld screening wastes everyone's time. <a href="/contact?service=training">Tell us the cell format and processes</a> and the curriculum follows.</p>`,
  'data-centers': `
      <h2>Why data-center construction buys NDT training</h2>
      <p>Hyperscale construction moves faster than any industrial sector, and its inspection load is structural and mechanical: weld quality on steel at AWS D1.1 acceptance, anchor and connection verification, piping for cooling systems to B31.9/B31.3 depending on class, and generator and fuel infrastructure with its own codes. Contractors staffing these programmes need CWI-adjacent visual competence at volume plus UT/MT capability for the structural packages — trained fast, documented properly, because owners audit contractor QA harder each year.</p>
      <p>Atlantis trains site QA teams on the codes their scope actually cites, with SNT-TC-1A qualification for the NDT methods and documentation that survives the owner's audit. <a href="/contact?service=training">Programme scoping</a> fits the construction schedule, including night-shift cohorts.</p>`,
  defense: `
      <h2>Defence NDT training: two regimes at once</h2>
      <p>Defence work spans both worlds — NAS 410-governed aerospace components and NAVSEA/military-standard ship and ground-system work — often inside one supplier. Training programmes must respect the split: aerospace-side technicians qualified under the employer's EN 4179/NAS 410 written practice, heavy-side technicians under SNT-TC-1A with the military standards (and their tighter documentation) layered on. Clearance-friendly delivery matters: on-site programmes with cleared instructors beat sending staff out.</p>
      <p>Atlantis builds defence-supplier programmes to the contract's named standards, delivered at your facility, with records structured for DCMA-style scrutiny. <a href="/contact?service=training">Discuss the contract requirements</a> — the standards list drives everything.</p>`,
  fabrication: `
      <h2>Training a fab shop's inspection bench</h2>
      <p>Fabricators need inspection competency shaped like their order book: visual acceptance to AWS D1.1 or ASME as the daily backbone, MT/PT for surface verification, UT where code work demands volumetric coverage, and enough RT film-reading literacy to talk to the subcontracted radiographer. The commercial logic favours cross-training — a Level II who carries VT, MT and UT keeps work in-house that single-method staffing sends out — and SNT-TC-1A qualification under a written practice the shop actually maintains.</p>
      <p>Atlantis delivers shop programmes on your own weldments and procedures, sequenced so production never stops for training. <a href="/contact?service=training">Scope by your code mix</a> — D1.1 shops and ASME shops need different benches.</p>`,
  marine: `
      <h2>Marine NDT training: shipyard and survey competence</h2>
      <p>Marine inspection work answers to classification societies, and its training needs follow: UT thickness gauging at survey scale (thousands of readings, gauging patterns, condition assessment conventions), weld examination for new construction and repair, MT on structural details, and the reporting discipline class surveyors expect. Yard-based programmes emphasise steel-repair workflows; survey-company programmes emphasise gauging technique and class documentation.</p>
      <p>Atlantis trains marine crews under SNT-TC-1A or ISO 9712 pathways with class-survey reporting built into the practical work. <a href="/contact?service=training">Corporate programmes</a> run on-site at the yard around docking schedules.</p>`,
  maritime: `
      <h2>Maritime infrastructure: the port-side training need</h2>
      <p>Beyond the vessels, maritime infrastructure carries its own inspection load: container cranes and cargo gear under statutory examination cycles, wharf and fender structures, mooring hardware, and terminal piping and tanks. The training profile is structural-mechanical — VT and MT for crane and lifting examinations, UT for structural thickness and pin work, with rope-access pairing common. Port authorities and terminal operators increasingly want in-house first-line competence with contractors reserved for statutory depth.</p>
      <p>Atlantis builds terminal-operator programmes around the equipment register — crane examination routines, lifting-gear discipline, structural monitoring — under SNT-TC-1A qualification. <a href="/contact?service=training">Scope from your equipment list</a>.</p>`,
  nuclear: `
      <h2>Nuclear NDT training: procedure-bound by design</h2>
      <p>Nuclear inspection work adds a layer no other sector carries: qualification to specific procedures (performance demonstration in the US regime), site access and human-performance expectations, and documentation standards where an unsigned line is an event. Training programmes serve two populations — plant staff maintaining ISI programmes under ASME Section XI, and contractor technicians needing both method certification and the site-specific qualifications outage work demands.</p>
      <p>Atlantis delivers the method-competency foundation (SNT-TC-1A/CP-189 pathways, UT emphasis) and outage-readiness preparation; performance-demonstration qualification then runs through the industry's own programmes. <a href="/contact?service=training">Plan against the outage calendar</a> — nuclear training booked late is training missed.</p>`,
  'oil-gas': `
      <h2>Oil and gas: the broadest training demand in NDT</h2>
      <p>Upstream to downstream, oil and gas consumes every method: UT corrosion programmes and phased array on welds, RT on construction, MT/PT across turnaround scopes, tube inspection in exchangers — under API-driven owner programmes that increasingly audit contractor competency directly. Corporate training here is workforce economics: a contractor whose bench carries multi-method Level IIs wins turnaround scopes single-method rosters cannot staff.</p>
      <p>Atlantis builds multi-method programmes sequenced around turnaround seasons — theory in the shoulder months, practical on representative specimens, examinations before mobilisation windows. <a href="/contact?service=training">Programme scoping</a> starts from your contract commitments, not a catalogue.</p>`,
  petrochemical: `
      <h2>Petrochemical training: mechanism-literate inspection</h2>
      <p>Petrochemical plants fail by mechanism — HTHA, amine and caustic cracking, CUI — and inspection competency there means more than method technique: technicians need damage-mechanism literacy to know what a finding means in the service where it appeared. Strong corporate programmes pair method certification with API 571-grounded mechanism training, so a Level II who finds transverse indications at a weld toe in wet H2S service escalates rather than files.</p>
      <p>Atlantis delivers exactly that pairing: SNT-TC-1A method qualification plus mechanism-aware interpretation built by Level IIIs who have run these programmes for operators. <a href="/contact?service=training">Discuss your unit mix</a> — the mechanism list drives the curriculum.</p>`,
  'power-generation': `
      <h2>Power generation: outage-cycle training economics</h2>
      <p>Generation NDT concentrates into outage seasons, and training must respect that calendar: qualification examinations completed before the season, not during it. Method demand centres on UT (boiler tubing, headers, rotor forgings), MT for casing and structural work, and eddy current for condenser and balance-of-plant tubing. Fleet operators increasingly split scopes between in-house first-line teams and contractor depth — both need documented SNT-TC-1A qualification the fleet's QA can audit.</p>
      <p>Atlantis schedules generation programmes against the outage calendar, trains on representative tube and weld specimens, and delivers the records fleet QA expects. <a href="/contact?service=training">Book the shoulder months</a> — spring and fall are for outages, not classrooms.</p>`,
  'rail-infrastructure': `
      <h2>Rail NDT training: track and rolling stock</h2>
      <p>Rail splits its inspection load between infrastructure (rail flaw detection — a specialised ultrasonic discipline with its own defect taxonomy and vehicle-based practice) and rolling stock (axle and wheelset examination at overhaul, MT on bogie frames, UT on axles). Each side has its own competency conventions, and transit agencies add their own qualification layers. Corporate programmes typically build SNT-TC-1A method foundations then specialise: rail-flaw interpretation for track teams, overhaul-shop discipline for depot teams.</p>
      <p>Atlantis trains both populations, on rail and axle specimens with the defect types that matter, and structures records for agency audit. <a href="/contact?service=training">Scope by fleet and network</a>.</p>`,
  'renewable-energy': `
      <h2>Renewables: young assets, real inspection needs</h2>
      <p>Wind carries the sector's inspection weight: blade examination (visual, tap and UT methods on composites), tower welds and bolted connections, foundation monitoring — increasingly by rope access, which pairs IRATA competence with NDT certification. Solar adds tracker structures and electrical thermography; hydrogen and storage projects import pressure-equipment codes into a sector unused to them. Training demand is for versatile technicians: composite-aware UT, structural MT/VT, thermography literacy.</p>
      <p>Atlantis builds renewables programmes around the asset mix — blade-specialist tracks, structural tracks, thermography add-ons — under SNT-TC-1A qualification with rope-access pairing where the work needs it. <a href="/contact?service=training">Start from your O&M scope</a>.</p>`,
};

/* ── singles ──────────────────────────────────────────────────────────────── */
export const SINGLES = {
  '/tofd-testing': `
      <h2>What TOFD does that pulse-echo cannot</h2>
      <p>Time-of-flight diffraction sizes flaws from the diffracted waves at their tips rather than reflected amplitude — which removes the orientation lottery that makes amplitude sizing unreliable on planar flaws. A mis-oriented crack that returns almost nothing to a pulse-echo probe still diffracts at its extremities, and the tip-signal timing gives through-wall size with accuracy amplitude methods cannot match. That is why TOFD anchors critical weld examinations and why codes accept it for detection and sizing in a single pass.</p>
      <h2>What it will not do</h2>
      <p>TOFD has a near-surface dead zone under the lateral wave — the top few millimetres are its blind spot, which is why code-compliant examinations pair TOFD with pulse-echo or phased array covering the surface zones. Coarse-grained austenitic materials degrade it, transverse flaws need supplementary scans, and interpretation demands real training: a TOFD image is a different language from an A-scan.</p>
      <h2>How Atlantis delivers it</h2>
      <p>Encoded TOFD to ASME Section V Article 4 mandatory appendices and ISO 10863 — scan plans engineered per joint, paired PA/PE coverage for the dead zones, analysis by Level IIs qualified in the technique under Level III oversight, and deliverables that include the data, not just the verdict. Common scopes: new-construction girth and long-seam welds, in-service crack monitoring with repeatable encoded baselines, and HTHA-adjacent examinations paired with specialised techniques. <a href="/contact?service=inspection">Scope a TOFD examination</a> · <a href="/phased-array-ut">phased array services</a> · <a href="/glossary/time-of-flight-diffraction-tofd">TOFD in the glossary</a>.</p>`,
  '/api-570-training': `
      <h2>What the API 570 examination actually tests</h2>
      <p>API 570 certifies piping inspectors — and the examination is a code-navigation test as much as a knowledge test: inspection intervals and their bases, thickness and corrosion-rate calculations, CML strategy, classes of piping service, repair and rerating rules, with supporting standards (API 574, 577, 578, ASME B31.3 sections) woven through. Candidates fail less on concepts than on speed — finding the governing paragraph under time pressure is a trained skill.</p>
      <h2>How preparation should be structured</h2>
      <p>Effective preparation runs three passes: the body of knowledge mapped topic by topic; calculation drill (remaining life, MAWP for the exam's piping cases, corrosion rates on real-shaped data); then timed navigation practice in the actual code books, tabbed the way the exam permits. Field experience helps and hurts — practitioners know how things are done, and the exam asks what the code says, which is not always the same answer.</p>
      <p>Atlantis prepares candidates with Level III-built material aligned to the current body of knowledge, calculation workbooks, and timed mock examinations — corporate cohorts on-site, individuals through structured self-paced tracks. <a href="/api-570-certification">Certification requirements in detail</a> · <a href="/blog/api-510-570-653-exam-schedule-2026">exam windows and deadlines</a> · <a href="/contact?service=training">enrol a cohort</a>.</p>`,
  '/consulting-me': `
      <h2>NDT consulting across the Middle East</h2>
      <p>Gulf inspection work runs under operator regimes that shape everything: Aramco's SAES standards and contractor approval, ADNOC's requirements and ICV expectations, QatarEnergy's specifications, KOC and PDO equivalents — each with its own inspector-approval machinery layered over international codes. Consulting engagements here are usually regime-translation problems: a written practice that satisfies both SNT-TC-1A and an operator's approval matrix, procedures that clear operator review the first time, RBI programmes aligned to the operator's implementation of API 580/581, and audit preparation for the operator assessments that gate contract awards.</p>
      <h2>How Atlantis engages in the region</h2>
      <p>Document-side work — written practices, procedures, RBI frameworks, audit-readiness reviews — runs remotely with regional code fluency; site presence is mobilised for qualification examinations, audits and assessments where standing in the facility matters. Engagements state plainly which operator regimes we have worked under and where your local sponsor or in-country presence carries requirements we do not. <a href="/consulting/ndt-consulting-level-iii">Level III services</a> · <a href="/consulting">the consulting practice</a> · <a href="/contact?service=consulting">describe the operator and the requirement</a>.</p>`,
  '/contact': `
      <h2>Which route fits your enquiry</h2>
      <p><strong>Training:</strong> corporate cohorts and individual pathways across UT, RT, MT, PT, VT and ET — the training team responds with a programme outline, not a brochure. <strong>Software:</strong> ERP, inspection reporting and digital twin demonstrations run on scenarios shaped like yours; say what you run today and what breaks first. <strong>Inspection and consulting:</strong> scopes go to an ASNT Level III directly — attach the governing specification if a client requirement drives the work. <strong>Partnerships and marketplace:</strong> provider listings and collaboration route through NDT Connect.</p>
      <h2>What happens after you write</h2>
      <p>Every enquiry lands with a person who can route it properly — training programmes to the training team, ERP and software demonstrations to a consultant who will show the system on scenarios like yours, inspection and consulting scopes to an ASNT Level III who can talk technical detail on the first call. Replies go to the email you provide; if a scope needs a call, we propose times rather than chasing you.</p>
      <h2>Writing a message that gets a useful answer</h2>
      <p>The more shape your enquiry has, the better the first response: for training — how many people, which methods and levels, where, by when; for software — team size, what you run today, what breaks first; for inspection or consulting — the asset, the code or client requirement driving it, and the window. "We need UT Level II for six technicians in Dammam before March" gets a programme outline back; "info please" gets a question back. Both get answered.</p>`,
  '/press': `
      <h2>Story angles we can speak to with authority</h2>
      <p>The inspection industry's workforce gap and what training pipelines actually fix; why inspection data is the missing layer in most digital-twin programmes; how small NDT companies compete with consolidated majors on systems rather than headcount; the honest limits of AI in defect recognition; and what national contracts now demand of certification record keeping. Our commentary comes from practising ASNT Level IIIs, not a communications department — which is precisely why editors use it.</p>
      <h2>About Atlantis NDT</h2>
      <p>Atlantis NDT builds software and delivers services for the industrial inspection sector: an ERP platform built specifically for NDT service companies, digital twin technology that puts inspection data on asset geometry, NDT training across ASNT SNT-TC-1A and ISO 9712 pathways, and Level III consulting. The company is led by its founder, an ASNT Level III, and serves inspection companies and asset owners across North America, the Middle East and Asia. Tagline: Precision Through Innovation.</p>
      <h2>For editors and event organisers</h2>
      <p>We contribute technical commentary on inspection technology, NDT workforce development and inspection-data topics, and our Level III practitioners speak at industry events. For interviews, technical articles, or product information: <a href="/contact">contact us</a> with outlet and angle — releases on this page carry their own dates and details, and anything quoted from them may be used with attribution.</p>`,
  '/faq': `
      <h2>The questions we actually get asked</h2>
      <h3>Do you deliver training at our site?</h3>
      <p>Yes — corporate programmes run at your facility around your shift pattern, with practical work on specimens matched to what your teams examine. Individuals join scheduled cohorts or blended tracks with online theory and supervised practical.</p>
      <h3>Is the ERP only for NDT companies?</h3>
      <p>It is built inspection-first — certifications, calibration, field capture, code-referenced reporting — on a full business platform, so inspection-adjacent companies (coating inspection, lifting examination, industrial services) fit naturally. If your operations revolve around certified people producing examination evidence, the shape fits.</p>
      <h3>Can you work under our client's specifications?</h3>
      <p>That is normal, not exceptional — most engagements run under an owner's specifications layered over the codes. Send the governing documents with your enquiry and the response will address them specifically.</p>
      <h3>Where are you located?</h3>
      <p>Houston, Texas and Hyderabad, India, serving clients globally — with delivery models (remote consulting, mobilised teams, on-site training) stated honestly per engagement rather than implied local offices everywhere.</p>
      <h3>How fast can a training programme start?</h3>
      <p>Scoping to programme outline is quick once headcount, methods and deadline are known; delivery scheduling depends on cohort size and specimen preparation. Programmes tied to an audit or contract date are sequenced backwards from that date — tell us the deadline first.</p>
      <h3>Can we migrate our existing records into the ERP?</h3>
      <p>Yes — certification histories, equipment registers and client templates migrate as structured data during onboarding, and export in the same structured form whenever you ask. Data leaving cleanly is a design commitment, not a negotiation.</p>`,
};

/* Shared programme-mechanics closer for the corporate-training family — the
   process is genuinely identical across verticals; the vertical name keys the
   lead sentence so pages stay distinguishable. */
const corptrainCloser = (slug) => {
  const label = slug.replace(/-/g, ' ');
  return `
      <h2>How a corporate programme is actually run</h2>
      <p>Every ${label} programme follows the same honest mechanics. <strong>Scoping:</strong> headcount, methods, levels, the governing written practice (yours, or one we help you establish), and the audit or contract deadline that makes the date real. <strong>Delivery:</strong> theory sequenced around your shift pattern, practical work on specimens representative of what your teams actually examine, and instructors who are practising Level IIIs rather than career presenters. <strong>Examination:</strong> administered under the written practice with question banks matched to the methods and levels in scope — general, specific and practical, graded and documented. <strong>Records:</strong> the certification package handed over in the structure an auditor expects — training hours, examination results, experience attestations, vision records — because in a corporate programme the records are half the deliverable.</p>
      <p>Programmes state plainly what they cover and what the certifying or approving body controls; where a client specification adds requirements above the written practice, the curriculum absorbs them before delivery, not during the audit.</p>`;
};

export function applyThinSweep(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { compare: 0, corptrain: 0, singles: 0 };
  for (const [slug, body] of Object.entries(COMPARE_DEPTH)) {
    const r = byPath.get(`/compare/${slug}`);
    if (r) { append(r, `<section aria-label="Comparison in detail">${body}</section>`); out.compare++; }
  }
  for (const [slug, body] of Object.entries(CORPTRAIN_DEPTH)) {
    const r = byPath.get(`/corporate-training/${slug}`);
    if (r) { append(r, `<section aria-label="Vertical training in detail">${body}${corptrainCloser(slug)}</section>`); out.corptrain++; }
  }
  for (const [path, body] of Object.entries(SINGLES)) {
    const r = byPath.get(path);
    if (r) { append(r, `<section aria-label="In detail">${body}</section>`); out.singles++; }
  }
  return out;
}

export function assertNoPricesInThinSweep() {
  const blob = JSON.stringify(COMPARE_DEPTH) + JSON.stringify(CORPTRAIN_DEPTH) + JSON.stringify(SINGLES);
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr/gi);
  if (m) throw new Error(`thin sweep contains pricing: ${[...new Set(m)].join(', ')}`);
}
