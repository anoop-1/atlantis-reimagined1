#!/usr/bin/env node
/**
 * Blog expansion — 2026-08-12 (owner-directed).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY BLOGS AND NOT MORE PAGES
 * §31.1 measured it: a blog page earns 295 impressions, an ERP city page 7.
 * Blog is the only shape on this site with proven yield per page.
 *
 * WHAT IS NEW HERE vs the 718 existing posts (coverage checked before writing):
 *   AI in ERP ............... 0 existing posts — a real gap the owner named
 *   AI in digital twins ..... 5 posts, all tangential (trends/FFS/APM pieces)
 *   VR training ............. 3 posts, all technology-side; none makes the
 *                             EMPLOYER'S case, which is what was asked for
 *   SNT-TC-1A ............... 6 posts, all candidate-side or authoring-side;
 *                             none covers running the programme as an employer
 *
 * US QUERY GROUNDING (GSC 90d, country=usa, position >15 = we do not serve it):
 *   paut equipment .................. 98i p18   → no dedicated page anywhere
 *   pipeline audit preparation ...... 97i p31   → no dedicated page
 *   ndt inspection service market .... 81i p62  → no dedicated page
 *   (+ non-destructive testing services market 68i, us ndt services market 68i)
 *
 * DELIBERATELY NOT WRITTEN: new posts for `eddy current testing` (317i p75),
 * `radiographic testing` (168i p45) or `api 653` (215i p39). Each already has an
 * owning page ranking deep — a second page is cannibalisation, not a fix (§25.2).
 * Those are authority problems, addressed off-page.
 *
 * Every post links internally to money pages and cluster siblings.
 * No pricing anywhere (§18). Run: node scripts/add-blogs-2026-08-12.mjs
 */
import { readFileSync, writeFileSync } from 'fs';

const P = 'src/data/blogs.json';
const raw = readFileSync(P, 'utf8');
const NL = raw.includes('\r\n') ? '\r\n' : '\n';
const blogs = JSON.parse(raw);
const existing = new Set(blogs.map((b) => b.slug));
const maxId = blogs.reduce((m, b) => Math.max(m, Number(b.id) || 0), 0);

const POSTS = [
  {
    slug: 'ai-in-inspection-erp-what-it-actually-does',
    title: 'AI in Inspection ERP — What It Actually Does, and What It Cannot',
    category: 'Technology & Innovation',
    metaDescription: 'An honest account of where AI genuinely helps inside an ERP for inspection companies — scheduling, report drafting, certification risk, anomaly review — and the places it should not be trusted.',
    snippet: 'Vendors now attach "AI-powered" to every module. Here is where it earns its keep in an inspection business, where it is theatre, and the one place letting it decide would be negligent.',
    content: `<h2>Start by separating the AI that helps from the AI that sells</h2>
<p>Every business-software vendor now claims AI. For an inspection company the claim is worth testing against a single question: <em>does it remove work a human was doing badly, or does it produce output a human must now check?</em> The first saves money. The second moves the work and adds risk.</p>
<p>Below is the honest split, based on what the technology can actually do inside an inspection company's operations — certification records, calibration, scheduling, field capture and reporting.</p>

<h2>Where AI genuinely earns its place</h2>
<p><strong>Report drafting from structured findings.</strong> When examination data is already captured as structured records — locations, readings, indications, acceptance criteria — generating the narrative sections of a report is exactly the kind of pattern work language models do well. The technician still reviews and signs; the blank page disappears. This is the single largest time saving available in most inspection businesses, because report turnaround is the bottleneck between finished work and an invoice.</p>
<p><strong>Certification and calibration risk.</strong> A system that knows every technician's methods, levels and expiry dates, and every instrument's calibration due date, can forecast which jobs in the next quarter are at risk of having nobody qualified or nothing calibrated to run them. That is arithmetic with a good interface rather than intelligence, but it is the arithmetic nobody does until an audit forces it.</p>
<p><strong>Scheduling under constraints.</strong> Matching crews to jobs across qualification, availability, travel and client-approval status is a genuine optimisation problem, and software beats a whiteboard once a company runs more than a couple of crews. Treat the output as a strong proposal a planner accepts or overrides, never as an instruction.</p>
<p><strong>Anomaly review as a second pair of eyes.</strong> On high-volume encoded data — corrosion mapping, tube inspection — algorithms flagging regions that deviate from their neighbours help an analyst prioritise where to look first. As triage this is valuable. As a verdict it is not.</p>

<h2>Where it is theatre</h2>
<p>Dashboards that "use AI" to restate what a filter already showed. Chat interfaces bolted onto reports that answer questions the report already answers, more slowly. Predictive claims about equipment the system holds no condition history for — a model cannot forecast corrosion from an invoice ledger, however confidently it phrases the output.</p>

<h2>The one place it must not decide</h2>
<p>Acceptance. Whether an indication is rejectable under the governing code is a determination a qualified person makes and signs, and every code in this industry is written around that fact. A system may surface, sort, measure and draft — but the moment a machine's classification is recorded as the acceptance decision, the evidence chain that makes an inspection defensible is broken. Ask any vendor claiming automated acceptance who signs, and what happens in litigation when the answer is "the model".</p>
<p>Related reading: <a href="/blog/ai-in-ndt-machine-learning-for-defect-detection">machine learning for defect detection</a> · <a href="/blog/ai-ndt-human-in-the-loop-workflow-2027">human-in-the-loop workflows</a>.</p>

<h2>What to ask a vendor</h2>
<p>Three questions separate substance from marketing quickly. <strong>What data does the feature learn from — mine, or a pooled dataset?</strong> (If pooled, ask what leaves your tenancy.) <strong>What happens when it is wrong, and who sees that it was wrong?</strong> <strong>Can I turn it off and keep the underlying function?</strong> A feature that cannot be disabled without losing the workflow is not a feature, it is a dependency.</p>
<p>See how the operational layer is built at Atlantis: <a href="/ndt-inspection-software">NDT inspection software</a> · <a href="/ndt-erp-solution">the ERP for inspection companies</a> · <a href="/resources/business-software-evaluation-checklist">the evaluation checklist</a> to run vendors against.</p>`,
  },
  {
    slug: 'ai-in-digital-twins-for-asset-integrity',
    title: 'AI in Digital Twins for Asset Integrity — Where the Value Is Real',
    category: 'Digital Twins',
    metaDescription: 'What artificial intelligence genuinely adds to an asset-integrity digital twin, why most predictive claims fail on fixed equipment, and the data conditions that have to be true first.',
    snippet: 'A twin fed by inspection evidence can support real prediction. A twin fed by drawings and hope cannot — no model repairs missing data.',
    content: `<h2>The uncomfortable precondition</h2>
<p>Almost every disappointing digital-twin programme failed for the same reason: the model was built before the data existed. AI does not fix that. A predictive layer trained on a thin, inconsistent inspection history produces confident output with no basis — which is worse than no output, because people act on it.</p>
<p>The precondition for any AI value in an asset-integrity twin is unglamorous: examination records that are structured, attributed to technician and instrument, tied to stable location identity across campaigns, and continuous enough to form a trend. Get that and the twin becomes genuinely predictive. Skip it and you have an expensive visualisation.</p>

<h2>Where AI adds real value on a well-fed twin</h2>
<p><strong>Corrosion-rate modelling across a population.</strong> With enough attributed thickness history, patterns emerge that per-circuit arithmetic misses — which service conditions actually drive loss, which locations behave like each other, where a rate is drifting before it crosses a threshold. This is the strongest application because the input data already exists in any mature inspection programme.</p>
<p><strong>Prioritisation across thousands of items.</strong> Ranking what to inspect next given condition, consequence and interval pressure is a decision most sites make on habit. A model that reranks it against measured condition finds the equipment quietly aging out of its assumptions — and, importantly, also finds equipment being inspected more often than its condition justifies.</p>
<p><strong>Reading the unstructured archive.</strong> Decades of inspection reports sit in PDFs. Extracting findings, locations and recommendations from them into the twin is genuine document-understanding work, and it is how a twin acquires history it was never built with. Expect to verify a sample rather than trust the extraction wholesale.</p>

<h2>Where it overreaches</h2>
<p>Failure prediction on fixed equipment from sensor data alone. Rotating equipment gives off vibration and temperature signatures that precede failure by a useful margin; a pressure vessel corroding under insulation gives off nothing until it leaks. The honest position is that fixed-equipment integrity is an <em>inspection</em> problem informed by modelling, not a monitoring problem — and any vendor blurring that distinction is selling past the physics.</p>
<p>Related: <a href="/blog/digital-twin-vs-apm-vs-eam-vs-historian-explained">digital twin vs APM vs EAM vs historian</a> · <a href="/blog/ffs-api-579-digital-twin-fitness-for-service-explained">feeding an API 579 assessment from a twin</a>.</p>

<h2>What good looks like in practice</h2>
<p>A twin where a corrosion rate on screen can be traced back to the readings, the technician and the instrument that produced it; where a prediction states what would change it; and where the inspection that tests the prediction is scheduled from the same system. That loop — predict, inspect, correct — is the whole value. Everything else is rendering.</p>
<p><a href="/digital-twins">The Atlantis digital twin platform</a> · <a href="/compare/vs-ge-vernova-apm">compared with GE Vernova APM</a> · <a href="/contact?service=digital-twins">talk through your data readiness</a> before committing to a programme.</p>`,
  },
  {
    slug: 'vr-ndt-training-employer-business-case',
    title: 'VR NDT Training — The Employer’s Business Case, Honestly Assessed',
    category: 'Training & Certification',
    metaDescription: 'What virtual reality genuinely changes about NDT training economics for an employer: time to competence, specimen access, scheduling, and the parts of qualification VR cannot satisfy.',
    snippet: 'VR training is usually sold on novelty. The employer case rests on three unglamorous things — specimen access, scheduling, and repetition — and on knowing exactly where it stops.',
    content: `<h2>The three things VR actually changes for an employer</h2>
<p><strong>Specimen access stops being the constraint.</strong> Conventional practical training is limited by the flawed specimens available in the room. A shop can own a handful; a virtual library can hold hundreds, including flaw types and geometries a trainee might not otherwise meet for years — the awkward nozzle weld, the coarse-grained austenitic that defeats a beam, the dissimilar-metal joint. Breadth of exposure is the real gain, not the headset.</p>
<p><strong>Scheduling stops fighting production.</strong> Simulator time does not compete for the calibration bench, the darkroom, or a supervisor's attention in the same way. For a company that cannot release four technicians simultaneously without stopping work, staggered simulator sessions are the difference between training happening and being postponed for another quarter.</p>
<p><strong>Repetition becomes cheap.</strong> Competence in scanning technique comes from repetitions, and repetitions on real specimens cost consumables and supervision. Removing that cost per attempt is what actually shortens time-to-competence — a trainee who has run a technique two hundred times arrives at the practical examination differently than one who has run it twenty.</p>

<h2>Where it stops — and this matters more than the benefits</h2>
<p>Certification bodies require documented practical experience on real equipment, and no simulator satisfies that requirement. Under an employer's Written Practice, VR time is <strong>training</strong> hours, not the experience hours that qualify a technician. Treating it otherwise creates a qualification an audit will unwind.</p>
<p>Nor does it replicate the physical variables that make field work hard: surface condition, couplant behaviour, access, weather, fatigue, the feel of a probe losing contact. A trainee fluent in the simulator still needs supervised time on real steel before signing anything.</p>

<h2>How to evaluate a VR programme as a buyer</h2>
<p>Ask which methods it covers with genuine physics rather than a scripted animation — a simulator that always shows the textbook signal teaches recognition of a thing that does not exist. Ask how trainee performance is recorded, because the value to you is the assessment data, not the experience. Ask how it maps to your Written Practice's hour requirements, and get the answer in writing before it enters your training matrix.</p>
<p>Related: <a href="/blog/virtual-reality-vr-ndt-training-simulations">VR simulation technology in NDT</a> · <a href="/blog/vr-ar-mixed-reality-ndt-training">VR, AR and mixed reality compared</a> · <a href="/blog/augmented-reality-ar-in-ndt-procedures">AR in live procedures</a>.</p>

<h2>The realistic verdict</h2>
<p>VR is a strong supplement and a poor substitute. It works best inside a blended programme — simulator repetitions building technique, classroom building code knowledge, supervised practical building the experience record that certification actually requires. Employers who buy it as a replacement for practical training discover the gap at examination time; those who buy it as a repetition engine get technicians to competence measurably sooner.</p>
<p><a href="/training">Atlantis NDT training programmes</a> · <a href="/contact?service=training">discuss a blended programme for your crew</a>.</p>`,
  },
  {
    slug: 'snt-tc-1a-employer-programme-us-guide',
    title: 'Running an SNT-TC-1A Programme as a US Employer — The Operational Guide',
    category: 'Training & Certification',
    metaDescription: 'What a US employer actually has to build and maintain to certify NDT personnel under ASNT SNT-TC-1A: the Written Practice, the Level III authority, examinations, records, and the findings auditors keep writing.',
    snippet: 'SNT-TC-1A puts the burden on the employer, not the candidate. Here is what that obligation looks like in practice, and the four findings auditors write most often.',
    content: `<h2>The thing most employers misunderstand</h2>
<p>SNT-TC-1A is a <strong>recommended practice</strong>, not a standard, and it does not certify anybody. It tells an employer how to build its own certification programme. That means the credential your technicians hold is issued by you, valid within your organisation, and only as defensible as the programme behind it. Clients audit that programme — not ASNT — when they audit your personnel.</p>

<h2>What you actually have to build</h2>
<p><strong>A Written Practice.</strong> Your document, stating your training hours, experience hours and examination requirements per method and level; your vision requirements and their recurrence; your rules for interrupted service and recertification; and the named Level III under whose technical authority it operates. Where you differ from the recommended tables — which is permitted — state the basis. A Written Practice that is the published template with your logo on it tells an auditor nobody engaged with it.</p>
<p><strong>A Level III with real authority.</strong> Not a name on a signature block. The person who approves procedures, prepares and grades examinations, and can describe the programme when asked. Many companies engage this as <a href="/consulting/ndt-consulting-level-iii">an outsourced service</a> rather than carrying a full-time post — legitimate, provided the engagement is real and documented.</p>
<p><strong>Examinations that exist.</strong> General, specific and practical per method and level, administered and graded under the Level III's authority, with the papers retained. "We assessed competence on the job" is not an examination.</p>
<p><strong>Records that survive scrutiny.</strong> Per technician, per method: training hours with dates, experience hours attested, examination results, vision test currency, and the certification instrument itself with its expiry. Retrievable on the day a client asks, not reconstructable over a week.</p>

<h2>The four findings auditors write most often</h2>
<p><strong>Expired vision records.</strong> The fastest-expiring item in the file, and every examination performed after expiry is unsupported. <strong>Experience hours undocumented</strong> — claimed in a summary with nothing behind them. <strong>A Written Practice that does not match reality</strong>, typically hour requirements nobody applies. <strong>Certifications continuing past a break in service</strong> where the practice's own interrupted-service clause should have triggered requalification.</p>
<p>None of these is about technical competence. All four are about administration, which is why companies with excellent technicians still fail audits.</p>

<h2>SNT-TC-1A, CP-189 or ISO 9712?</h2>
<p>Choose by what your contracts name. CP-189 is a standard rather than a recommended practice — fixed requirements, less latitude, specified by clients wanting consistency across suppliers. ISO 9712 is central certification: the certificate belongs to the technician and travels. SNT-TC-1A remains the default across most US work. <a href="/blog/asnt-snt-tc-1a-vs-cp-189-comparison">SNT-TC-1A vs CP-189</a> · <a href="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">ISO 9712 vs SNT-TC-1A</a> · <a href="/asnt-certification">the certification pathway</a>.</p>
<p>Building or repairing a programme: <a href="/contact?service=consulting">talk to an ASNT Level III</a>. Tracking it once built: <a href="/ndt-erp-solution">certification-tracking software</a> exists because spreadsheets are where the four findings above come from.</p>`,
  },
  {
    slug: 'inspection-contractor-spreadsheets-to-system',
    title: 'What Actually Changes When an Inspection Contractor Leaves Spreadsheets Behind',
    category: 'Business & Operations',
    metaDescription: 'A practical account of what improves — and what does not — when an NDT inspection company moves from spreadsheets to a single operational system, written from the operator side rather than the vendor side.',
    snippet: 'Every vendor lists features. Fewer describe what a working week actually feels like afterwards, or which problems software does not solve.',
    content: `<h2>The week before</h2>
<p>A recognisable pattern in a growing inspection company: certifications tracked in one workbook, calibration in another, the schedule on a whiteboard, quotes in a folder, invoices in the accounting package, and reports produced by retyping field sheets into templates. Each artefact works. None agrees with the others, and the person who knows how they connect is the one you cannot afford to lose.</p>
<p>The failure is rarely dramatic. It is a technician mobilised whose cert lapsed last month, an instrument arriving out of calibration, a job invoiced late because the report sat in review, a scope quoted from memory that loses money. Individually survivable, collectively a ceiling on how large the company can get.</p>

<h2>What genuinely changes</h2>
<p><strong>The certification question becomes instant.</strong> "Who can run PAUT on the Tuesday outage with current certs and site clearance" stops being a phone call and becomes a filter. That single change removes a whole category of mobilisation failure.</p>
<p><strong>Reports leave faster because nothing is retyped.</strong> Findings captured once in the field — offline where there is no signal — flow into the client's template. Report turnaround is the gap between finished work and an invoice, so this is a cash-flow change disguised as a documentation change.</p>
<p><strong>Job margin becomes visible while the job is running.</strong> Hours, equipment and consumables attached to the work order as they happen. Most companies discover which scopes lose money at year end, which is too late to bid differently.</p>
<p><strong>Audits stop being projects.</strong> The evidence a client's quality department asks for is the same data the operation runs on, so producing it is retrieval rather than archaeology.</p>

<h2>What does not change</h2>
<p>Software does not fix an unclear scope, a client who will not sign, or a technician shortage. It does not make an unprofitable contract profitable — it tells you sooner that it is unprofitable. And it does not survive being run alongside the old spreadsheets: companies that keep both end up maintaining two truths and trusting neither. The migration has to be a decision, not an experiment.</p>

<h2>The honest cost</h2>
<p>The real cost is not the licence, it is the fortnight of getting existing records into the system and the discipline of keeping them there. Companies that budget for the first and skip the second get a worse spreadsheet. Where to start: <a href="/resources/spreadsheet-to-system-migration-plan">the migration plan</a> and <a href="/resources/qualification-and-calibration-register">the qualification and calibration register</a>, both usable whether or not you ever buy anything.</p>
<p><a href="/ndt-erp-solution">How the Atlantis platform is put together</a> · <a href="/ndt-erp-vs-generic-erp">why generic ERP breaks on inspection work</a> · <a href="/best-ndt-reporting-software-2026">reporting software compared</a>.</p>`,
  },
  {
    slug: 'paut-equipment-selection-guide-for-inspection-companies',
    title: 'PAUT Equipment Selection — What Actually Matters When You Buy',
    category: 'NDT Methods',
    metaDescription: 'A buyer-side guide to phased array ultrasonic equipment for inspection companies: channels, probes and wedges, encoders, software and data handling, and the specification traps that cost money later.',
    snippet: 'Channel count sells instruments. Probe inventory, encoder discipline and what happens to the data are what decide whether the purchase earns.',
    content: `<h2>Buy for the scopes you actually win</h2>
<p>Phased array purchases go wrong at the start, when the specification is written around the most demanding job the company might ever bid rather than the work it does weekly. The instrument is the smallest part of the decision; the probe and wedge inventory, the encoder discipline and the data workflow decide whether the capability earns.</p>

<h2>The instrument</h2>
<p><strong>Channels and aperture.</strong> More channels buy larger apertures and better focusing at depth. Weld inspection on common wall thicknesses is well served by mainstream configurations; thick-section, coarse-grained or high-attenuation material is where higher channel counts stop being marketing. Specify against your actual material and thickness range, and be honest about how often the extreme case appears.</p>
<p><strong>TFM and total focusing capability.</strong> Genuinely superior imaging on the right applications, and slower and more data-hungry on all of them. Useful as a characterisation tool over an area of interest, rarely as a primary scanning mode. If a vendor demonstrates only TFM, ask to see the conventional PAUT workflow you will actually run daily.</p>
<p><strong>Battery, ruggedness and screen legibility outdoors.</strong> Unglamorous, and the specifications technicians complain about within a month.</p>

<h2>Probes and wedges — where the budget really goes</h2>
<p>An instrument with two probes covers a narrow slice of work. Frequency, element count and pitch determine what you can resolve; wedge angles and curvature determine what you can couple to. Curved-surface wedges for the pipe diameters in your scope are not an accessory, they are the difference between winning and declining that work. Budget for the inventory to grow, and treat probes as consumables with a life, not capital that lasts forever.</p>

<h2>Encoders and repeatability</h2>
<p>Unencoded phased array is a detection tool. Encoded phased array is an <em>evidence</em> tool — position-tied data you can compare against the same weld next year, which is what in-service monitoring requires and what codes expect for recordable examinations. If any part of your work is repeat inspection or corrosion monitoring, encoding is not optional.</p>

<h2>The part buyers underestimate: the data</h2>
<p>An encoded shift produces file sets that dwarf conventional UT records. Ask where those files live, how they are named, who can open them without a licensed seat, and whether the analysis is reproducible by a second analyst months later. Companies that solve acquisition and improvise storage end up unable to answer a client question about an indication from two years ago. <a href="/blog/paut-data-management-bottleneck-2027">Data management for advanced UT</a> covers this in more depth, and <a href="/ndt-inspection-software">inspection software</a> is where the provenance problem is actually solved.</p>

<h2>Before you sign</h2>
<p>Run your own specimens, not the vendor's. Have the technician who will use it daily do the demo, not the manager buying it. Confirm the calibration and service path in your region — an instrument out for weeks is a scope you cannot staff. And confirm export: your scan data should leave in a form another platform can read.</p>
<p>Related: <a href="/phased-array-ut">phased array inspection services</a> · <a href="/glossary/phased-array-ultrasonic-testing-paut">PAUT defined</a> · <a href="/tofd-testing">where TOFD outperforms it</a>.</p>`,
  },
  {
    slug: 'pipeline-audit-preparation-what-operators-check',
    title: 'Pipeline Audit Preparation — What Operators and Regulators Actually Check',
    category: 'Compliance & Standards',
    metaDescription: 'How to prepare for a pipeline integrity audit: the records that get pulled first, the operator-qualification trap, and the findings that recur across contractors.',
    snippet: 'Audits rarely find bad inspection. They find records that cannot be produced — and on a pipeline contract, that is the same thing as a finding.',
    content: `<h2>What an audit is really testing</h2>
<p>A pipeline integrity audit — whether from the operator, a regulator, or a client's own assurance team — is not primarily testing whether the inspection was competent. It is testing whether you can <em>demonstrate</em> that it was, from records, without the person who did the work in the room. That distinction decides how you prepare.</p>

<h2>The records pulled first</h2>
<p><strong>Personnel qualification.</strong> Every technician on the contract: method certifications with levels and expiries, vision records, and — the one contractors most often miss — <strong>operator qualification</strong> for the covered tasks they performed. OQ is a separate regime from NDT certification, task-based, and an inspector certified to the hilt in UT can still be unqualified for the covered task they were assigned. Auditors know this and check it early.</p>
<p><strong>Procedures and their approval.</strong> The procedure that governed the work, at the revision in force on the day, approved by a named Level III. A current revision does not prove the work followed it.</p>
<p><strong>Equipment calibration.</strong> Instruments in calibration at the time of examination, with certificates traceable, and the daily verification checks the procedure requires — not just the annual certificate.</p>
<p><strong>The examination records themselves.</strong> Readings with location identity, technician and instrument attribution, and the evaluation against acceptance criteria. Unattributed data is data an auditor discounts.</p>

<h2>The findings that recur</h2>
<p>A certification that expired mid-contract with work performed after the date. Field data transcribed from paper with no original retained. Location identity that changed between campaigns, so no trend can be built. Procedure revisions with no evidence anyone was retrained on the change. Subcontracted crews whose records were never brought inside the contractor's own system.</p>
<p>Every one of these is administrative, and every one of them lands on the prime contractor regardless of who performed the work.</p>

<h2>Preparing properly</h2>
<p>Audit yourself against the contract's own requirements, not against a generic checklist — the requirements that bite are the operator's specific ones. Do it on a sample of completed jobs, tracing each backwards from report to records, because that is the direction an auditor works. Fix the record-keeping process, not just the sample; a corrected file with an uncorrected process fails the next audit.</p>
<p>The structural fix is having one system where certifications, calibration and examination records live together — which is what makes audit preparation retrieval rather than reconstruction. <a href="/ndt-erp-solution">How that is set up</a> · <a href="/resources/client-audit-evidence-pack-checklist">the audit evidence-pack checklist</a> · <a href="/resources/qualification-and-calibration-register">qualification and calibration register</a>.</p>
<p>Related: <a href="/services/mfl-pipeline-inspection">MFL pipeline inspection</a> · <a href="/consulting/rbi-program-design">risk-based inspection programme design</a> · <a href="/contact?service=consulting">audit-readiness review</a>.</p>`,
  },
  {
    slug: 'us-ndt-inspection-services-market-structure',
    title: 'The US NDT Inspection Services Market — How It Is Actually Structured',
    category: 'Industry Insights',
    metaDescription: 'How the US non-destructive testing services market is segmented, who buys what, where the consolidated majors compete against regional specialists, and what that means for a growing inspection company.',
    snippet: 'A clear-eyed map of who buys NDT in the United States, how work is bought, and where a smaller provider can actually win against a national contractor.',
    content: `<h2>Who buys, and how</h2>
<p>US NDT demand concentrates in a small number of buying patterns, and they behave differently enough that a provider should choose deliberately rather than chase all of them.</p>
<p><strong>Refining and petrochemical</strong> buy on turnaround cycles and long-term site contracts, dominated by API-driven programmes. Work is large, scheduled far ahead, and increasingly awarded to contractors who can staff a surge without importing unfamiliar crews. <strong>Pipeline operators</strong> buy against integrity-management obligations, with operator-qualification requirements layered over NDT certification. <strong>Fabrication</strong> buys per project, decides fast, and rewards report turnaround above almost everything. <strong>Power generation</strong> buys around outage seasons in concentrated windows. <strong>Aerospace and defence</strong> buy under NAS 410 and Nadcap and change suppliers slowly, which cuts both ways.</p>

<h2>The structural split</h2>
<p>The market runs on two tiers that rarely compete head-on. Consolidated national providers win multi-site master agreements where a single supplier across many locations is the point. Regional specialists win on responsiveness, technique depth, and knowing a specific plant — and typically hold those relationships for years, because switching an inspection contractor who knows your equipment carries real cost for the owner.</p>
<p>The genuine competitive question for a growing company is therefore not "how do we beat the majors" but "which tier are we in, and are we investing accordingly". Trying to price like a national contractor while operating regionally is the failure mode.</p>

<h2>Where a smaller provider actually wins</h2>
<p><strong>Advanced technique depth.</strong> Encoded PAUT, TOFD, corrosion mapping and tube inspection are capabilities many regional providers lack, and asset owners pay for them because the alternative is more repairs. <strong>Documentation speed.</strong> Owners describe report turnaround as a recurring frustration with large contractors; a provider who turns them around in hours wins repeat work without competing on rate. <strong>Audit-grade records.</strong> As owners tighten contractor assurance, the provider who produces the evidence pack on request differentiates on something the buyer feels immediately.</p>
<p>All three are operational capabilities, not sales positions — which is why the back office matters more to competitiveness than most inspection companies assume. <a href="/ndt-erp-solution">The systems side of this</a>.</p>

<h2>What is changing</h2>
<p>The workforce is the constraint, not demand: an aging technician population and a thin pipeline mean the companies that can develop their own Level IIs will out-grow those bidding for scarce experienced hires. Digital deliverables are moving from differentiator to expectation, with owners increasingly asking for structured data rather than PDFs. And owner assurance teams are auditing contractor personnel records directly, which turns administration into a qualifying criterion.</p>
<p>Related: <a href="/blog/ndt-salary-guide-2026-global">what the workforce actually earns</a> · <a href="/training">developing technicians in-house</a> · <a href="/consulting/ndt-consulting-level-iii">Level III authority without a full-time hire</a>.</p>`,
  },
];

let added = 0;
const stamp = 'August 2026';
for (const p of POSTS) {
  if (existing.has(p.slug)) { console.log(`  skip (exists): ${p.slug}`); continue; }
  blogs.push({
    id: maxId + added + 1,
    title: p.title,
    slug: p.slug,
    date: stamp,
    author: 'Atlantis NDT',
    category: p.category,
    metaDescription: p.metaDescription,
    snippet: p.snippet,
    content: p.content.trim(),
  });
  added++;
  console.log(`  + ${p.slug}`);
}

// §18 gate on the new copy only
const blob = POSTS.map((p) => p.content + p.title + p.metaDescription + p.snippet).join(' ');
const price = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
if (price) throw new Error(`new blog copy contains pricing: ${[...new Set(price)].join(', ')}`);

writeFileSync(P, JSON.stringify(blogs, null, 2).split('\n').join(NL) + NL, 'utf8');
console.log(`\nadded ${added} posts · blogs.json now ${blogs.length} records · pricing gate clean`);
