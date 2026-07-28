/**
 * BOFU buyer posts — Phase 4 of the 2026-07-27 ERP/DT SEO programme.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THESE EXIST
 * 61% of site clicks land on blog posts written for exam candidates and job
 * seekers — the salary guide, API exam schedules, UT Level II practice questions.
 * That audience does not buy software. The buying committee for ERP and Digital
 * Twin is the QA manager, operations manager or integrity engineer INSIDE an
 * inspection company, and the site had almost nothing written for them.
 *
 * Each post below answers a question that person actually types, from the
 * operator's side of the desk rather than the candidate's. They reuse the
 * MoneyPage shape so scripts/route-reconcile.mjs renders byte-comparable
 * prerendered HTML from the same object the React template consumes.
 *
 * PRICING POLICY (CLAUDE.md §18): no price for any product or service appears.
 */

import type { MoneyPage } from './money-pages';

const P = (
  slug: string,
  title: string,
  description: string,
  keywords: string,
  h1: string,
  subhead: string,
  intro: string,
  sections: MoneyPage['sections'],
  faqs: MoneyPage['faqs'],
  related: MoneyPage['related'],
  enquiryVariant: MoneyPage['enquiryVariant'] = 'erp',
): MoneyPage => ({
  slug: `blog/${slug}`,
  title,
  description,
  keywords,
  h1,
  eyebrow: 'For inspection company owners and managers',
  subhead,
  intro,
  sections,
  faqs,
  related,
  enquiryVariant,
});

export const BOFU_POSTS: MoneyPage[] = [
  P(
    'tracking-asnt-certification-expiry-at-scale',
    'How NDT Companies Track ASNT Certification Expiry at Scale (Without Losing an Audit)',
    'Tracking SNT-TC-1A, ISO 9712 and NAS 410 currency across a large technician base: what the written practice actually requires, why spreadsheets fail at around 30 technicians, and how to enforce currency at dispatch.',
    'asnt certification tracking, snt-tc-1a certification tracking, ndt certification expiry, iso 9712 recertification tracking, technician qualification management, certification tracking software',
    'Tracking ASNT Certification Expiry Across a Whole Technician Base',
    'The failure mode is never one certificate. It is the interaction between method, level, vision exam, on-the-job hours and a client-specific approval — across a hundred people.',
    'Every inspection company starts with a spreadsheet of technicians and expiry dates, and every one of them eventually gets caught by the same thing: the certificate itself was current, but the annual vision exam had lapsed, or the technician was certified in UT and dispatched to a PAUT scope, or the written practice revision they were certified against had been superseded. This is a data-model problem, not a diligence problem, and it starts to bite somewhere around thirty technicians.',
    [
      {
        h2: 'What the written practice actually obliges you to hold',
        paragraphs: [
          'Under ASNT SNT-TC-1A the employer certifies, which means the employer carries the evidence. For each technician and each method you need the certification level and date, the general, specific and practical examination records with scores, documented training hours, documented on-the-job experience hours, the annual near-vision acuity and colour-contrast examination, and the revision of the written practice under which certification was granted. ANSI/ASNT CP-189 tightens several of these; NAS 410 and EN 4179 add aerospace-specific requirements including outside-agency involvement in some cases; ISO 9712 shifts certification to a third party but leaves you holding the employer-side authorisation record.',
          'The practical consequence is that "is Ahmed certified?" is not a yes/no question. It is a question about a specific method, at a specific level, on a specific date, against a specific written practice revision — and a spreadsheet column cannot represent that.',
        ],
      },
      {
        h2: 'Why the spreadsheet fails, predictably',
        bullets: [
          'One row per person cannot hold five methods at different levels with different expiry dates.',
          'Vision exams are annual while method certifications are typically on a longer cycle, so the two drift out of sync and the shorter one is the one everyone forgets.',
          'Client-specific approvals — an operator-specific qualification, a site induction, a CBT screening — expire on their own schedule and are usually tracked in a different file entirely.',
          'Nobody checks the spreadsheet at the moment of dispatch, which is the only moment that matters.',
          'When a client asks for the qualification record of the technician who signed a report eighteen months ago, the spreadsheet holds today\'s state, not that day\'s state.',
        ],
      },
      {
        h2: 'The control that actually prevents the incident',
        paragraphs: [
          'Reminder emails do not prevent lapses; they inform people about lapses that already happened. The control that works is a hard dependency between the qualification record and the dispatch action: if the certification, the vision exam, the client approval or the instrument calibration is not current for the scope being assigned, the assignment cannot be made. That single constraint converts certification management from an administrative task that competes for attention into a property of the system.',
          'The second control is point-in-time recovery. Every report should carry the certification state applicable on the date of inspection, frozen, so that an audit eighteen months later reconstructs what was true then rather than what is true now.',
        ],
      },
      {
        h2: 'A practical migration if you are on spreadsheets today',
        bullets: [
          'Export what you have and reconcile it against the written practice — most companies discover 5–15% of records are incomplete at this step, which is itself the finding.',
          'Model per method and level, not per person. Accept that one technician generates several qualification records.',
          'Load vision exams and client-specific approvals as first-class records with their own expiry, not as notes.',
          'Wire the dispatch check before you wire the reporting dashboard. The dashboard is nice; the check is what stops the incident.',
          'Freeze certification state onto issued reports from day one, so your point-in-time history starts accumulating immediately.',
        ],
      },
    ],
    [
      {
        question: 'At what size does spreadsheet certification tracking stop working?',
        answer: 'In practice around thirty technicians, or earlier if you run more than three methods or work for more than two clients with their own approval regimes. The trigger is not headcount alone — it is the number of independent expiry clocks. A twelve-technician company running five methods, annual vision exams and two operator-specific approvals is already tracking well over a hundred separate expiry dates.',
      },
      {
        question: 'What does a client audit actually ask for?',
        answer: 'Typically: the written practice in force, the certification record for named technicians including examination and vision-exam evidence, documented training and on-the-job hours, and the ability to tie a specific issued report back to the qualification state of the person who signed it on the day they signed it. The last item is the one that catches most companies, because their system holds current state only.',
      },
      {
        question: 'Can this be handled inside a generic HR system?',
        answer: 'Partly, and it usually goes wrong at the same place. HR systems model people and roles, not method-level technical qualification against a written practice revision, and they have no concept of dispatch. You can store certificates in HR; you cannot enforce that an uncertified technician is undispatchable, which is the control that matters.',
      },
      {
        question: 'How long does it take to get a certification register clean?',
        answer: 'Two to four weeks for a typical mid-size inspection company, and most of that is chasing incomplete historical records rather than configuring software. Budget for the discovery that some records genuinely cannot be reconstructed, and decide deliberately how to treat those rather than leaving gaps in the register.',
      },
    ],
    [
      { href: '/erp-modules/certification-tracking', label: 'Certification tracking module' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/ndt-inspection-software', label: 'NDT inspection software buyer\'s guide' },
      { href: '/asnt-certification', label: 'ASNT certification guide' },
    ],
  ),

  P(
    'calibration-compliance-iso-17025-inspection-labs',
    'Equipment Calibration Compliance for Inspection Companies and ISO 17025 Labs',
    'What calibration control has to cover for NDT instruments, probes, wedges and reference blocks: traceability chains, interval management, out-of-tolerance handling and the evidence an ISO 17025 assessor asks for.',
    'calibration management software, iso 17025 calibration, ndt equipment calibration, reference block traceability, calibration interval management, instrument calibration tracking',
    'Calibration Control That Survives an ISO 17025 Assessment',
    'Assessors do not ask whether your gauge is calibrated. They ask you to show the unbroken chain from that gauge to a national standard, and to prove it was unbroken on the day you used it.',
    'Calibration is the second thing a client audit examines after personnel qualification, and it is where the evidence chain most often breaks — not because instruments go uncalibrated, but because the supporting items do. The flaw detector has a certificate; the wedge, the reference block and the step wedge used with it frequently do not, and traceability is only as strong as its weakest link.',
    [
      {
        h2: 'What has to be in the register',
        bullets: [
          'Flaw detectors, thickness gauges, hardness testers, holiday detectors and their firmware or software versions.',
          'Probes and transducers, including frequency, element configuration and serial identity — a probe swap changes the measurement system.',
          'Wedges, shoes and delay lines, each with its own identity and condition record.',
          'Reference blocks, step wedges and calibration blocks, with traceable certificates and periodic verification for wear.',
          'Ancillary items that affect measurement: couplant type and batch where it matters, temperature compensation devices, cable sets.',
          'For each item: interval, last calibration, next due, certificate, the laboratory that performed it, and that laboratory\'s own accreditation status.',
        ],
      },
      {
        h2: 'Traceability is a chain, not a certificate',
        paragraphs: [
          'ISO 17025 requires measurement results to be metrologically traceable to the International System of Units through an unbroken chain of calibrations, each contributing to the measurement uncertainty. In practice that means holding not just your certificate but evidence that the calibrating laboratory was itself competent and accredited for that measurement, and that the reference standards used are themselves traceable.',
          'The common failure is a calibration performed by an unaccredited provider, or accredited for a scope that does not cover the measurement actually performed. Recording the calibrating body and its accreditation scope alongside the certificate closes that gap and is trivial to do prospectively — and very painful to reconstruct retrospectively.',
        ],
      },
      {
        h2: 'Out-of-tolerance is the test of the system',
        paragraphs: [
          'When an instrument returns from calibration out of tolerance, the question is not what to do with the instrument — it is what to do with every measurement it produced since its last known-good calibration. A defensible system can answer, immediately, which inspections used that instrument in that window, on which client assets, and which reports were issued from them.',
          'If answering that requires cross-referencing spreadsheets against job files, the impact assessment will take days and the client will hear about it from you late. If the instrument is bound to the work order and the work order to the report, it takes minutes and you control the conversation.',
        ],
      },
      {
        h2: 'Interval management that is not just a calendar',
        bullets: [
          'Set intervals from manufacturer guidance and observed drift history rather than a uniform twelve months for everything.',
          'Treat usage intensity and environment as interval drivers — an instrument working offshore in salt spray is not equivalent to one in a workshop.',
          'Enforce the due date at dispatch: an instrument past due should be undispatchable, not flagged.',
          'Track in-service verification checks separately from formal calibration; both are evidence, and assessors look for both.',
          'Keep withdrawn and disposed items in the register with their history intact — historical reports still reference them.',
        ],
      },
    ],
    [
      {
        question: 'Do reference blocks really need traceable certificates?',
        answer: 'Yes, and this is the most common gap found in assessments. The block is part of the measurement system; if its dimensions or reflector geometry are not traceable, neither is any measurement calibrated against it. Blocks also wear and get damaged, so periodic verification alongside the original certificate is expected rather than optional.',
      },
      {
        question: 'How do we handle an instrument that returns out of tolerance?',
        answer: 'Determine the affected window (last known-good calibration to the failed calibration), identify every inspection performed with that instrument in that window, assess technical impact on the measurements — often the error is small relative to acceptance criteria and no re-inspection is needed — and notify affected clients with that assessment. Document the whole chain. The ability to identify the affected work quickly is what separates a controlled response from a crisis.',
      },
      {
        question: 'Can calibration be tracked in the same system as personnel qualification?',
        answer: 'It should be, because the control that matters is the same one: dispatch. A job needs a qualified technician and a calibrated instrument, and if either check lives in a different system than the dispatch decision, neither is enforced. Holding both against the work order also makes audit-evidence assembly a single export.',
      },
      {
        question: 'What does an assessor typically ask to see?',
        answer: 'The equipment register with intervals and current status; certificates for a sample of items including probes, wedges and reference blocks; evidence that the calibrating laboratories were accredited for the relevant scope; your out-of-tolerance procedure and an example of it being applied; and traceability from a specific issued report back to the calibration state of every item used to produce it.',
      },
    ],
    [
      { href: '/erp-modules/calibration-management', label: 'Calibration management module' },
      { href: '/erp-industries/calibration-laboratories', label: 'ERP for calibration laboratories' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp-modules/certification-tracking', label: 'Certification tracking' },
    ],
  ),

  P(
    'passing-an-api-653-client-audit-evidence-pack',
    'Passing an API 653 Client Audit: The Evidence Pack, Assembled',
    'What a client or third-party audit of an API 653 tank inspection programme actually examines, the documents that have to be produced together, and how to assemble the pack without a week of document archaeology.',
    'api 653 audit, tank inspection audit, api 653 evidence pack, storage tank inspection compliance, api 653 inspection records, mechanical integrity audit',
    'Passing an API 653 Client Audit',
    'Audits rarely fail on the inspection. They fail on the ability to prove, quickly, that the inspection was performed by the right person with the right equipment under the right procedure.',
    'An API 653 audit is an exercise in reconstructing decisions. The auditor picks a tank, picks a report, and works backwards: who performed this, were they qualified on that date, was the instrument calibrated, which procedure revision applied, how was the next inspection interval derived, and does the corrosion-rate calculation support it. Companies that can walk that chain in minutes pass comfortably; companies that cannot spend a week in the archive and still get findings.',
    [
      {
        h2: 'What the auditor pulls on',
        bullets: [
          'The inspection report itself, with thickness readings at identified locations rather than as an undifferentiated list.',
          'The inspector\'s API 653 certification and, where NDT was performed, the technician\'s method-level qualification under SNT-TC-1A or ISO 9712 — current on the date of inspection.',
          'Calibration certificates for every instrument, probe and reference block used, again as at the date of inspection.',
          'The procedure and its revision in force on that date, plus the written practice governing personnel certification.',
          'The corrosion-rate calculation and the derivation of the next inspection interval, including which thickness readings were used and why.',
          'Any repair or alteration records, and the evidence that they were performed and accepted under the applicable code.',
        ],
      },
      {
        h2: 'The two findings almost everyone gets',
        paragraphs: [
          'First: point-in-time state. The system holds today\'s certification and calibration status, so the company can prove the technician is qualified now but not that they were qualified then. Fixing this prospectively is straightforward — freeze the qualification and calibration state onto the report at issue — but it cannot be fixed retrospectively, which is why it is worth doing before the audit is scheduled rather than after.',
          'Second: CML identity. Thickness readings recorded against loosely-defined locations cannot support a defensible corrosion rate, because you cannot prove the 2020 reading and the 2026 reading were taken at the same place. A persistent CML register with stable identifiers is the single highest-value structural fix in a tank inspection programme, and it takes longer to establish than any software decision.',
        ],
      },
      {
        h2: 'Assembling the pack',
        paragraphs: [
          'The pack is not a document; it is a query. For a given tank and date range it should return the reports, the personnel qualification state applicable at each, the calibration state of each instrument used, the procedure revisions in force, the thickness history per CML with computed corrosion rates, and the interval derivation. If that is a query, assembly is minutes. If it is a folder structure, it is days and the completeness depends on whoever filed it.',
        ],
      },
      {
        h2: 'Preparing three months out',
        bullets: [
          'Run the query yourself on three tanks and see what is missing. Whatever you cannot produce, the auditor will ask for.',
          'Reconcile the CML register before anything else; everything downstream depends on it.',
          'Check that procedure revision history is recoverable by date, not just the current revision.',
          'Verify calibration certificates exist for probes, wedges and reference blocks, not only for instruments.',
          'Confirm that reports issued in the last two years can be tied to the qualification state of their signatories on their issue dates.',
        ],
      },
    ],
    [
      {
        question: 'How far back do auditors typically look?',
        answer: 'Commonly the current inspection cycle plus the previous one, which for API 653 external inspections can mean five years or more and for internal inspections considerably longer. That is why point-in-time reconstruction matters more than current-state reporting — the records being examined were created under a system, and possibly a written practice, that has since changed.',
      },
      {
        question: 'What if historical CML identity is genuinely unrecoverable?',
        answer: 'Say so explicitly and set a baseline. A documented decision to re-baseline the CML register, with the rationale and the date, is defensible. Silently computing corrosion rates from readings that may not share a location is not, and an auditor who notices will discount the whole interval derivation.',
      },
      {
        question: 'Does software prevent audit findings?',
        answer: 'No — it changes which findings are possible. Structural findings about missing point-in-time evidence, unrecoverable procedure revisions or unidentifiable CMLs largely disappear when the data model handles them. Findings about inspection technique, judgement and coverage remain a matter of competence and are unaffected by tooling.',
      },
      {
        question: 'Who should own the evidence pack internally?',
        answer: 'Whoever owns the inspection record, usually the QA or integrity function rather than the operations manager who runs the crews. The important thing is that assembling it is not a heroic effort by one person who knows where everything is filed — that arrangement fails the moment that person is unavailable.',
      },
    ],
    [
      { href: '/api-653-certification', label: 'API 653 certification guide' },
      { href: '/asset-integrity-management-software', label: 'Asset integrity management software' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp-modules/audit-management', label: 'Audit management module' },
    ],
  ),

  P(
    'multi-crew-inspection-scheduling-without-double-booking',
    'Multi-Crew Inspection Scheduling Without Double-Booking or Compliance Gaps',
    'How inspection contractors schedule multiple crews across multiple sites and clients without dispatching lapsed technicians, double-booking equipment, or losing mobilisation cost against the wrong contract.',
    'inspection scheduling software, ndt crew scheduling, multi-site inspection dispatch, work order management inspection, technician dispatch software',
    'Scheduling Multiple Crews Across Multiple Clients',
    'The scheduling problem is not the calendar. It is the four constraints — competency, calibration, permit and cost — that the calendar does not know about.',
    'Every inspection contractor above a handful of crews runs into the same wall. The whiteboard or shared calendar knows where people are, but it does not know whether the technician assigned is currently qualified for the method, whether the instrument going with them is in calibration, whether the site permit and induction are valid, or which contract absorbs the mobilisation cost. Those four unknowns are where margin and compliance both leak.',
    [
      {
        h2: 'The four constraints a calendar cannot see',
        bullets: [
          'Competency — the scope requires a method and level; the assigned technician must hold it, currently, with vision exam in date.',
          'Calibration — the instruments, probes and reference blocks going to site must be in calibration for the duration of the job, not just on the day of dispatch.',
          'Access — site induction, permit-to-work, client-specific approval and medical clearance each have their own expiry.',
          'Cost — mobilisation, travel, standby and per-diem have to land on the contract that caused them, or per-contract margin is fiction.',
        ],
      },
      {
        h2: 'What good dispatch looks like',
        paragraphs: [
          'A dispatch decision should be a validated action, not an entry. When a scope is assigned, the system checks competency, calibration and access, and refuses the assignment if any fail — surfacing which technician or instrument would satisfy the constraint instead. That turns a compliance risk into a scheduling suggestion, which is the only form in which schedulers will actually engage with it.',
          'The second property is visibility of committed capacity. Standby, travel days and rotation cycles consume crew availability as surely as productive days do, and schedules built only from productive days routinely over-commit by twenty to thirty per cent.',
        ],
      },
      {
        h2: 'Multi-site and rotation realities',
        paragraphs: [
          'Contractors working offshore rotations, remote sites or multiple regions carry constraints that a simple calendar cannot express: a technician on a two-week-on rotation is not available for a shore job on day three regardless of what the calendar shows; a crew mobilising to a remote site cannot be re-tasked mid-mobilisation without absorbing the cost twice. Modelling rotation cycles and mobilisation windows explicitly is what stops the schedule from being aspirational.',
        ],
      },
      {
        h2: 'Costing at the point of dispatch',
        bullets: [
          'Assign every dispatched hour, travel day, standby day and per-diem to the work order at the moment of dispatch rather than reconstructing it at invoicing.',
          'Cost equipment usage to the job, including hire and consumables — small individually, material across a year.',
          'Track subcontracted NDT against the same work order so the true delivered cost of the contract is visible.',
          'Expose per-contract margin while the contract is still running, not at final account when nothing can be changed.',
        ],
      },
    ],
    [
      {
        question: 'How is this different from a generic field service scheduler?',
        answer: 'Generic field service tools schedule people against jobs and handle travel and routing well. What they lack is method-level competency validation against a written practice, instrument and reference-block calibration state as a dispatch constraint, and client-specific approval tracking. Those three are exactly what make inspection dispatch different from, say, appliance repair.',
      },
      {
        question: 'What is the fastest win when scheduling is currently on a whiteboard?',
        answer: 'Put the competency and calibration check on the dispatch action first, before building any scheduling UI. That single control removes the two failure modes that cost mobilisations. Sophisticated optimisation can wait; preventing a lapsed technician reaching a client gate cannot.',
      },
      {
        question: 'How do we handle emergency call-outs and schedule churn?',
        answer: 'Model them as first-class work rather than exceptions handled verbally. Emergency work still consumes capacity, still requires the same competency and calibration validation, and still has a cost that belongs to a contract. Companies that keep call-outs off the system systematically under-report utilisation and over-report margin.',
      },
      {
        question: 'Does this need to integrate with the client\'s system?',
        answer: 'Usually yes, at least one-way. Operators commonly expect inspection findings to raise notifications or work orders in their own SAP PM, Maximo or ServiceNow instance. That integration should be automatic from the work order rather than a person re-keying findings into a client portal, which is both slow and a source of transcription error.',
      },
    ],
    [
      { href: '/erp-modules/inspection-scheduling', label: 'Inspection scheduling module' },
      { href: '/erp-modules/work-order-management', label: 'Work order management' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp', label: 'Atlantis NDT ERP' },
    ],
  ),

  P(
    'what-to-look-for-in-ndt-reporting-software',
    'What to Look For in NDT Reporting Software (From Someone Who Reviews the Reports)',
    'The capabilities that decide whether NDT reporting software actually reduces turnaround: dataset-template separation, provenance capture, offline authoring, approval chains and client-format flexibility.',
    'ndt reporting software, inspection report software, ndt report generation, api 510 report template, inspection reporting platform, ndt documentation software',
    'What Actually Matters in NDT Reporting Software',
    'The demo will show you a beautiful PDF. Ask instead what happens when the same dataset has to become three different clients\' formats.',
    'Report production is where inspection companies lose the most non-billable hours, and reporting software is bought to fix it. Most of it does not, because the tool models a document rather than a dataset — so the second client format is a second document, and you are back to re-keying. These are the properties that separate the tools that reduce turnaround from the ones that just make the output prettier.',
    [
      {
        h2: 'Dataset and template must be separate things',
        paragraphs: [
          'The single most important architectural property is that the inspection dataset is stored independently of its presentation. One UT thickness survey should be issuable as an API 510 vessel report to one client, an internal corrosion-trending summary to another, and a raw tabular export to a third — from one set of readings, with no duplicate entry and no divergence between versions.',
          'Tools that model the report as the primary object fail this immediately, and the failure is invisible in a demo because a demo only ever shows one client.',
        ],
      },
      {
        h2: 'Provenance has to be captured, not attached',
        bullets: [
          'The procedure and revision in force at the time of inspection, recorded automatically rather than typed.',
          'The technician\'s certification state at the time of inspection, frozen onto the report.',
          'The calibration state of every instrument, probe and reference block used, as at that date.',
          'Acceptance criteria and the code edition applied, so the disposition can be reconstructed later.',
          'Approval chain — who reviewed, who approved, when, and at what level — with the approver\'s own qualification state captured.',
        ],
      },
      {
        h2: 'Authoring where the work happens',
        paragraphs: [
          'Reports that must be written back at the office lose a day and lose detail. Authoring has to work on a phone or tablet, fully offline, in gloves, in a confined space, with photo and sketch attachment tied to the CML or weld rather than dumped in a folder. Sync has to be conflict-safe: a record completed offline must never be silently overwritten by a stale server copy.',
          'Test this specifically in evaluation. Put the app in airplane mode, complete a full inspection with photographs, restore connectivity and confirm that nothing is lost, duplicated or reordered.',
        ],
      },
      {
        h2: 'Questions worth asking every vendor',
        bullets: [
          'Show the same dataset rendered into two different client formats, live.',
          'Show me a report from eighteen months ago and prove who was qualified and what was calibrated on that date.',
          'Show the offline path end to end, including a sync conflict.',
          'Export my data in full and show me the schema.',
          'Show what happens when the governing code edition changes — does historical work stay assessed under the old edition?',
        ],
      },
    ],
    [
      {
        question: 'Should reporting software be separate from inspection management?',
        answer: 'It can be, but the join has to exist somewhere. Reports depend on personnel qualification, instrument calibration and procedure revision — data that lives in the management system. If the two are separate products, that provenance is either manually copied (unreliable) or integrated (fine). If they are one platform, it is automatic.',
      },
      {
        question: 'How much time does better reporting actually save?',
        answer: 'The saving comes from three places: not re-keying field data into an office template, not rebuilding the same dataset per client format, and not assembling provenance manually at audit time. Companies that measure it usually find the third is the largest and least anticipated. Measure your own baseline before the pilot so the comparison is real rather than promotional.',
      },
      {
        question: 'What about clients who insist on their own Excel template?',
        answer: 'That is normal and should be supported directly — the dataset renders into their template as one more output format. The failure mode to avoid is a workflow where the client template is filled in manually from your system\'s report, because that reintroduces exactly the transcription risk the system was bought to remove.',
      },
      {
        question: 'Do digital signatures matter?',
        answer: 'They matter where the client or regulator requires non-repudiation, and the useful property is that verification does not depend on your vendor still existing. Signatures anchored to an independent certificate authority remain verifiable long after any software decision, which is the right standard for records with a multi-decade life.',
      },
    ],
    [
      { href: '/best-ndt-reporting-software-2026', label: 'NDT reporting software compared' },
      { href: '/ndt-inspection-software', label: 'NDT inspection software buyer\'s guide' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp-modules/document-control', label: 'Document control module' },
    ],
    'reporting',
  ),

  P(
    'replacing-spreadsheets-in-an-inspection-business',
    'Replacing Spreadsheets in an Inspection Business: A Migration Plan That Works',
    'A staged plan for moving an inspection company off spreadsheets: what to migrate first, what to leave alone, how to handle incomplete historical records, and how to run a pilot that proves value in six weeks.',
    'replace spreadsheets inspection company, ndt company software migration, inspection data migration, moving off excel inspection, inspection business system implementation',
    'Getting an Inspection Business Off Spreadsheets',
    'The spreadsheet is not the problem. The problem is that four spreadsheets have to agree with each other and nobody is responsible for making them.',
    'Most inspection companies do not run on one spreadsheet. They run on a certification tracker, a calibration log, a job schedule and a costing workbook, each owned by a different person, each partially correct, and none of them consulted at the moment a technician is dispatched. Replacing them is less a software project than a sequencing problem — and doing it in the wrong order is why these projects stall.',
    [
      {
        h2: 'Migrate in this order, and only this order',
        bullets: [
          'Certification register first. It is the highest audit risk, the smallest dataset, and the fastest thing to prove value on.',
          'Calibration register second. Same argument, and it shares the same dispatch control as certification.',
          'Client and asset registers third — the structure everything else attaches to.',
          'Work orders and scheduling fourth, once the two dispatch constraints above are enforceable.',
          'Job costing fifth, because it depends on work orders existing.',
          'Historical inspection reports last, and possibly never in full — see below.',
        ],
      },
      {
        h2: 'What to do about incomplete history',
        paragraphs: [
          'Every migration surfaces records that cannot be reconstructed: certifications without examination evidence, calibration certificates that were never filed, inspection reports whose CML identity is ambiguous. The instinct is to delay the project until they are fixed. That is the wrong call — the gaps exist whether or not you migrate, and migration is what makes them visible.',
          'The right move is to load what is verifiable, record explicitly what is not, and make a documented decision about each category. A documented baseline decision is defensible in an audit; a silent gap is not.',
        ],
      },
      {
        h2: 'A pilot that actually proves something',
        paragraphs: [
          'Pick one crew and one client contract, and run six weeks live. The pilot should answer three questions with numbers rather than impressions: did report turnaround time fall, did audit-evidence assembly time fall, and did any compliance gap reach a client gate. Measure the baseline for all three before starting, because nobody remembers accurately afterwards.',
          'Resist the urge to pilot with your easiest client. Pilot with the one whose reporting requirements are most demanding, because that is the case the system has to survive.',
        ],
      },
      {
        h2: 'The change-management part everyone underestimates',
        bullets: [
          'Field technicians will not adopt a tool that is slower than paper. Test the field path with the least enthusiastic technician you have, not the most.',
          'The person who owns the spreadsheet today owns the risk of the migration. Involve them early or the project inherits an internal opponent.',
          'Run the old and new systems in parallel for exactly one cycle — long enough to build trust, short enough that people do not settle into doing both forever.',
          'Turn off the old spreadsheet on a fixed date. Projects that leave it as an optional fallback never finish.',
        ],
      },
    ],
    [
      {
        question: 'How long does the whole migration take?',
        answer: 'Six to ten weeks for a typical 20–60 technician inspection business to be live on the core modules, with historical report migration continuing afterwards if it is being done at all. The pacing constraint is almost always historical data reconciliation, not configuration.',
      },
      {
        question: 'Should we migrate historical inspection reports?',
        answer: 'Often not in full. Reports from closed contracts that are unlikely to be audited can stay archived in place with an index entry, while reports for assets under an active inspection programme should migrate because their thickness data feeds corrosion-rate calculations. Decide by whether the data is still doing work, not by completeness for its own sake.',
      },
      {
        question: 'What if we are mid-contract on a major client?',
        answer: 'That is usually the best time, not the worst — you have a live case to pilot against and a concrete definition of success. What to avoid is migrating during a turnaround or shutdown peak, when nobody has attention to spare and any friction gets blamed on the system.',
      },
      {
        question: 'Can we do this without a full-time internal project owner?',
        answer: 'Realistically, no. Someone internal has to make decisions about incomplete records, written-practice interpretation and client reporting formats, and those decisions cannot be outsourced to the vendor. It does not need to be a full-time role, but it needs a named owner with the authority to decide.',
      },
    ],
    [
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/ndt-inspection-software', label: 'NDT inspection software buyer\'s guide' },
      { href: '/erp', label: 'Atlantis NDT ERP' },
      { href: '/erp-modules/certification-tracking', label: 'Certification tracking' },
    ],
  ),

  P(
    'inspection-job-costing-why-contracts-look-profitable',
    'Inspection Job Costing: Why Contracts Look Profitable and Are Not',
    'Where margin actually leaks in inspection contracts — unallocated mobilisation, standby, rework, subcontracted NDT and equipment time — and how work-order-level costing exposes it while the contract is still running.',
    'inspection job costing, ndt contract profitability, work order costing, inspection company margin, project costing inspection services',
    'Why Inspection Contracts Look Profitable and Are Not',
    'The invoice is right. The cost side is where the fiction lives.',
    'Ask an inspection company which of its contracts are profitable and you will usually get a confident answer based on revenue minus direct technician hours. Ask the same question with mobilisation, standby, travel, equipment, rework and subcontracted NDT allocated properly, and the ranking often changes — sometimes reversing. This is not an accounting problem; it is a data-capture problem at the point of dispatch.',
    [
      {
        h2: 'Where the cost actually goes missing',
        bullets: [
          'Mobilisation and demobilisation absorbed as overhead instead of allocated to the contract that caused them.',
          'Standby and waiting time — permit delays, plant not ready, weather — recorded as non-billable and then forgotten rather than costed to the job.',
          'Travel days on remote and offshore work, which on some contracts exceed productive days.',
          'Equipment time: hire, transport, calibration cycles consumed and consumables, rarely tracked per job.',
          'Rework driven by report rejection or technique disputes, almost never attributed to the contract that generated it.',
          'Subcontracted NDT, which appears in payables but frequently not against the work order it served.',
        ],
      },
      {
        h2: 'Capture at dispatch, not at invoicing',
        paragraphs: [
          'Every one of the items above is knowable at the moment it happens and unknowable three weeks later. If the work order is the object that dispatch, timesheets, equipment issue and subcontractor purchase orders all attach to, cost accumulates automatically. If cost is assembled at invoicing from timesheets and memory, it will be optimistic, consistently and in the same direction.',
        ],
      },
      {
        h2: 'What visibility changes commercially',
        paragraphs: [
          'Contract-level margin visible during delivery changes three decisions: whether to accept scope creep without a variation, whether to renew at the current rate, and which contracts to bid for next. Companies that get this working typically discover that their most operationally demanding client is also their least profitable — which is a difficult conversation, but a much better one to have with numbers than with instinct.',
          'It also changes rate reviews. Walking into a rate discussion with allocated mobilisation and standby cost per job is a materially stronger position than defending a percentage uplift.',
        ],
      },
      {
        h2: 'Getting there without a finance project',
        bullets: [
          'Start by making the work order the mandatory carrier of every hour, not the timesheet.',
          'Add equipment issue against the work order — even coarsely, per day, is far better than nothing.',
          'Route subcontractor purchase orders through the work order so third-party NDT lands where it belongs.',
          'Expose a simple running margin per contract to the operations manager, not only to finance.',
          'Review the three worst contracts quarterly and act on them. Visibility without a decision cadence changes nothing.',
        ],
      },
    ],
    [
      {
        question: 'Is this not just standard project accounting?',
        answer: 'Conceptually yes; practically the difference is where the data originates. In inspection work the costly events — standby, remobilisation, rework, equipment movement — happen in the field and are recorded by technicians, not by finance. Unless the field capture tool records them against the work order at the time, project accounting receives an incomplete picture and produces a confident wrong answer.',
      },
      {
        question: 'How do we cost standby fairly when the delay is the client\'s fault?',
        answer: 'Cost it to the contract regardless, and track its cause separately. Whether it is recoverable is a commercial question; whether it consumed your capacity is not. Contracts with high client-caused standby are still expensive contracts, and the data is what supports either a variation claim or a rate adjustment at renewal.',
      },
      {
        question: 'What granularity is enough?',
        answer: 'Work-order level is enough for almost every decision that matters. Task-level costing sounds better and is usually abandoned within two months because technicians will not maintain it. Choose the granularity your field team will actually sustain, because incomplete fine-grained data is worse than complete coarse data.',
      },
      {
        question: 'How quickly does this change behaviour?',
        answer: 'Faster than expected once operations managers — not just finance — can see running margin. The first quarter usually surfaces one or two contracts everyone privately suspected were unprofitable, and confirming it with allocated cost is what makes action possible.',
      },
    ],
    [
      { href: '/erp-modules/project-management', label: 'Project management module' },
      { href: '/erp-modules/work-order-management', label: 'Work order management' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp', label: 'Atlantis NDT ERP' },
    ],
  ),

  P(
    'offline-field-data-capture-for-inspection-crews',
    'Offline Field Data Capture for Inspection Crews: What Actually Works',
    'Why offline inspection data capture fails in practice — sync conflicts, glove-unusable interfaces, photo handling, permit clocks — and the design properties that make field tools survive real refinery and offshore conditions.',
    'offline inspection app, ndt field data capture, mobile inspection software offline, field inspection app, offline data collection inspection',
    'Offline Field Capture That Survives a Refinery',
    'Every vendor says the app works offline. Test it in a vessel, in gloves, with 200 photographs and a permit expiring in forty minutes.',
    'Field capture is the layer that determines whether the rest of the system holds trustworthy data, and it is the layer most often demonstrated in ideal conditions. Real conditions are confined spaces with no signal, gloved hands, poor light, a permit clock, and a technician who will revert to paper the moment the tool is slower than a notebook. These are the properties that decide whether it is used.',
    [
      {
        h2: 'Offline has to mean fully offline',
        paragraphs: [
          'Partially offline tools — those that cache reads but require connectivity to create records, look up an asset or attach a photo — fail in exactly the places inspection happens. The test is whether a technician can complete an entire inspection, including asset lookup, form completion, photographs, sketches and sign-off, with the device in airplane mode from start to finish.',
          'The second half of the test is sync. When connectivity returns, records must merge without loss, without duplication and without a stale server copy overwriting field work. Ask to see a deliberate conflict during evaluation, not a description of how conflicts are handled.',
        ],
      },
      {
        h2: 'Interface constraints that are not negotiable',
        bullets: [
          'Usable in gloves: large targets, no precision gestures, no small dropdown lists.',
          'Readable in direct sun and in a dark vessel — high contrast, not a light-grey aesthetic.',
          'Minimal typing. Numeric entry, pick-lists and voice notes beat free text at a CML face.',
          'Forms that mirror the technique sheet, in the order the work is physically performed.',
          'Resilient to interruption — a permit call or an evacuation must not lose ten minutes of entry.',
        ],
      },
      {
        h2: 'Photographs and sketches are data, not attachments',
        paragraphs: [
          'A photograph filed against a job is nearly useless three years later; a photograph bound to a specific CML, weld or component is evidence. The tool should attach media to the location within the asset hierarchy automatically, compress sensibly for later sync without destroying diagnostic detail, and keep the original where it matters. Sketch and annotation over the photograph at the point of capture is worth more than any amount of later office markup.',
        ],
      },
      {
        h2: 'What to test in a real evaluation',
        bullets: [
          'Complete a full inspection in airplane mode, with 20+ photographs, then sync.',
          'Force a conflict: edit the same record on two devices offline, then sync both.',
            'Hand the device to your least tech-enthusiastic technician and watch without helping.',
          'Time it against the paper process for the same scope — if it is slower, adoption will fail regardless of features.',
          'Check battery consumption over a full shift with the screen and camera in real use.',
        ],
      },
    ],
    [
      {
        question: 'Why do offline inspection apps fail so often?',
        answer: 'Three recurring reasons: they are only partially offline and break on asset lookup or media attachment; sync is naive and either loses field work or produces duplicates; and the interface was designed for an office device rather than a gloved hand in bad light. All three are visible in a properly-run field trial and invisible in a conference-room demo.',
      },
      {
        question: 'Should technicians use company devices or their own?',
        answer: 'Company devices in almost all cases. Hazardous-area classification alone often mandates it, and beyond that you need control over the OS version, storage, battery condition and camera quality. Personal-device programmes tend to generate support load that exceeds the hardware saving within a year.',
      },
      {
        question: 'How do we handle intrinsically safe area requirements?',
        answer: 'Use certified intrinsically safe tablets or phones appropriate to the area classification, and confirm the software runs on the OS versions those devices actually ship with — certified hardware often lags several OS releases behind consumer devices, and an app requiring the latest OS will simply not run on it.',
      },
      {
        question: 'What happens to data if a device is lost or damaged on site?',
        answer: 'That is what the sync design is for. Records completed before the last sync are already safe; work since then is lost unless the tool syncs opportunistically whenever any connectivity appears. Ask specifically how frequently and how granularly the tool syncs, and whether partial records survive.',
      },
    ],
    [
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/best-ndt-reporting-software-2026', label: 'NDT reporting software' },
      { href: '/erp-modules/work-order-management', label: 'Work order management' },
      { href: '/ndt-inspection-software', label: 'NDT inspection software guide' },
    ],
  ),

  P(
    'document-control-for-ndt-procedures-and-written-practices',
    'Document Control for NDT Procedures and Written Practices Under ISO 9001',
    'How to keep NDT procedures, written practices and technique sheets under revision control so that the revision in force on any historical inspection date is recoverable — and why that single property decides audits.',
    'ndt document control, written practice revision control, iso 9001 document control inspection, procedure revision management, technique sheet control',
    'Document Control That Answers "Which Revision Applied Then?"',
    'Current-revision control is easy and largely useless. The question an audit asks is which revision governed an inspection performed two years ago.',
    'Every quality system controls documents. Very few can reconstruct, for a specific inspection performed on a specific date, which revision of the procedure was in force, which revision of the written practice governed the inspector\'s certification, and which technique sheet was applied. That reconstruction is what an ISO 9001, ISO 17020 or client audit actually tests, and it is a data-model property rather than a filing discipline.',
    [
      {
        h2: 'What has to be under control',
        bullets: [
          'The written practice governing personnel qualification and certification, with full revision history.',
          'NDT procedures per method, including the code and edition they were written against.',
          'Technique sheets and scan plans, which change more often than procedures and are frequently uncontrolled in practice.',
          'Acceptance criteria references, since code editions change and historical work must stay assessed under the edition then in force.',
          'Forms and report templates, because a changed template can silently change what data is captured.',
          'Client-specific procedure approvals, which have their own validity periods independent of your revision cycle.',
        ],
      },
      {
        h2: 'Point-in-time recovery is the whole game',
        paragraphs: [
          'A document control system that stores the current revision and an archive folder of superseded ones technically complies and practically fails, because reconstructing which revision applied on a given date requires reading effective dates across a stack of PDFs. The property you want is that every inspection record references the specific document revisions in force when it was performed, captured automatically at the time.',
          'Done that way, the audit question becomes a lookup rather than an investigation, and — more importantly — it stays answerable after the people who remember the revision history have left.',
        ],
      },
      {
        h2: 'Technique sheets: the uncontrolled document nobody admits to',
        paragraphs: [
          'Procedures get controlled because auditors ask for them. Technique sheets frequently live in a shared folder, get copied and edited per job, and end up in circulation in several inconsistent versions. Since the technique sheet is what the technician actually follows at the CML face, an uncontrolled technique sheet undermines the controlled procedure above it. Bringing them under the same revision control as procedures is usually the single largest practical improvement available to a quality system that already looks compliant on paper.',
        ],
      },
      {
        h2: 'Making control survive real operations',
        bullets: [
          'Push the controlled revision to the field tool so technicians cannot work from a downloaded copy.',
          'Require the revision to be stamped onto the inspection record automatically, not selected from a dropdown.',
          'Handle code-edition changes explicitly: new work moves to the new edition, historical work stays assessed under the old one.',
          'Track client-specific approvals with their own expiry, separately from your internal revision cycle.',
          'Retain superseded revisions permanently. Storage is cheap; an unrecoverable revision is a finding.',
        ],
      },
    ],
    [
      {
        question: 'How long do superseded procedure revisions need to be retained?',
        answer: 'At minimum for as long as any inspection performed under them remains relevant, which for pressure equipment and tanks means decades rather than years. In practice the sensible policy is permanent retention of the document record — the storage cost is negligible and the alternative is an unanswerable audit question.',
      },
      {
        question: 'What happens when a code edition changes mid-programme?',
        answer: 'New work adopts the new edition from an effective date you set and record; work already performed stays assessed under the edition in force at the time. The failure mode is retrospectively applying a new edition to historical assessments, which invalidates the original disposition and creates a much larger problem than the one being solved.',
      },
      {
        question: 'Do technique sheets really need formal revision control?',
        answer: 'Yes, because they are what is actually followed at the point of inspection. A controlled procedure with uncontrolled technique sheets beneath it gives the appearance of control without the substance, and it is one of the more common findings once an auditor looks past the procedure index.',
      },
      {
        question: 'Can this live in SharePoint or a general document system?',
        answer: 'The storage can. What general document systems do not provide is the automatic binding of a document revision to an inspection record at the moment of inspection, which is the property that makes point-in-time recovery a lookup. Without that binding you still have to reconstruct the mapping manually, which is the work you were trying to eliminate.',
      },
    ],
    [
      { href: '/erp-modules/document-control', label: 'Document control module' },
      { href: '/consulting/asnt-level-iii-consulting-services', label: 'ASNT Level III consulting' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/erp-modules/quality-management', label: 'Quality management module' },
    ],
  ),

  P(
    'building-a-cml-register-that-survives-ten-years',
    'Building a CML Register That Survives Ten Years',
    'Corrosion monitoring location registers decay silently and take corrosion-rate accuracy with them. How to establish stable CML identity, place locations against damage mechanisms, and keep the register trustworthy across contractors and decades.',
    'cml register, corrosion monitoring locations, tml identification, thickness monitoring locations, corrosion rate calculation, api 570 cml placement',
    'Building a CML Register That Is Still Trustworthy in Ten Years',
    'A corrosion rate computed from two readings that were not taken at the same place is not a corrosion rate. It is a number with a unit.',
    'The corrosion monitoring location register is the foundation every integrity decision rests on, and it is almost always the weakest part of the programme. Locations get added inconsistently by successive contractors, identifiers get reused, physical marking fades, and within a few inspection cycles the thickness history is a set of readings that cannot be proven to share a location. Everything downstream — corrosion rates, remaining life, next inspection interval, fitness-for-service — inherits that uncertainty.',
    [
      {
        h2: 'Identity is the property that matters most',
        paragraphs: [
          'A CML identifier has to be unique, permanent and never reused. That sounds trivial and is routinely violated: identifiers get renumbered when a circuit is re-drawn, reused after a component is replaced, or duplicated across units because the numbering restarts per drawing. Once identity is ambiguous, the time series is broken and no amount of software fixes it retrospectively.',
          'Practical rules that hold up: allocate identifiers centrally rather than per contractor, never renumber, retire rather than reuse when a component is replaced, and record the physical location precisely enough that a different technician can find the same spot without the previous one present — which usually means a description plus a measured offset from a permanent feature, not just a paint mark.',
        ],
      },
      {
        h2: 'Placement should follow the damage mechanism',
        bullets: [
          'Assign the credible damage mechanisms per API RP 571 for the circuit before placing locations, not after.',
          'Place against mechanism-specific susceptibility: elbows and tees for erosion-corrosion, dead legs and low points for under-deposit and MIC, insulation penetrations and terminations for CUI, hot zones for sulfidation and HTHA.',
          'Distinguish CMLs intended for trending from examination points used for one-off condition assessment; mixing them corrupts the trend.',
          'Record the measurement grid at each location, not just a single reading, where the mechanism is localised.',
          'Revisit placement when process service changes — a circuit that changed feedstock has different credible mechanisms.',
        ],
      },
      {
        h2: 'Surviving contractor turnover',
        paragraphs: [
          'Most CML registers degrade at contractor handover. The incoming contractor cannot find the locations, so they place new ones nearby, and the register grows a parallel set of near-duplicates. Preventing that requires the register to belong to the asset owner rather than to whoever holds the inspection contract, with location descriptions good enough to be found by someone who has never been on the site.',
          'Where a register has already degraded, the honest fix is a documented re-baseline: identify which historical readings can be confidently attributed, retire the ambiguous ones, and record the decision and its date. That is defensible. Continuing to compute corrosion rates across ambiguous locations is not.',
        ],
      },
      {
        h2: 'Keeping it trustworthy',
        bullets: [
          'Store readings against the CML, never against a report file or a drawing revision.',
          'Compute corrosion rates from the full time series with outlier flagging, not from first and last readings.',
          'Flag statistically implausible readings for review rather than silently averaging them away.',
          'Retain the instrument, technician and procedure provenance per reading so a suspect trend can be investigated.',
          'Audit the register annually — a percentage of locations physically re-found and verified, not just reviewed on screen.',
        ],
      },
    ],
    [
      {
        question: 'How many CMLs should a circuit have?',
        answer: 'Enough to represent the credible damage mechanisms, which is a technical judgement rather than a formula. What consistently goes wrong is uniform placement — the same number of locations per circuit regardless of susceptibility — which over-inspects benign circuits and under-inspects the ones that will actually fail. Placement driven by API RP 571 mechanism assignment gives better coverage for the same or less effort.',
      },
      {
        question: 'What do we do with a register we no longer trust?',
        answer: 'Re-baseline deliberately and document it. Identify which historical readings can be confidently attributed to a specific physical location, retire ambiguous identifiers rather than reusing them, and record the date and rationale for the baseline. Auditors accept a documented re-baseline; they do not accept corrosion rates computed across locations that may not be the same place.',
      },
      {
        question: 'Should CML data live with the contractor or the owner?',
        answer: 'With the owner, always. The register outlives any inspection contract, and registers that live with successive contractors are how near-duplicate locations and broken time series get created. Contractors should read from and write to the owner\'s register rather than maintaining their own copy.',
      },
      {
        question: 'How does the register relate to a digital twin?',
        answer: 'The twin is what makes the register spatial rather than tabular: each CML sits at a location on the asset model with its thickness history, computed corrosion rate and governing damage mechanism attached. That changes both trend interpretation and inspection planning, because clustering and spatial pattern become visible in a way a spreadsheet of identifiers never shows.',
      },
    ],
    [
      { href: '/asset-integrity-management-software', label: 'Asset integrity management software' },
      { href: '/digital-twins', label: 'Atlantis Digital Twin platform' },
      { href: '/erp-modules/corrosion-tracking', label: 'Corrosion tracking module' },
      { href: '/api-570-certification', label: 'API 570 certification guide' },
    ],
    'dt',
  ),

  P(
    'cmms-vs-eam-vs-inspection-management-software',
    'CMMS vs EAM vs Inspection Management Software: Which One Do You Actually Need?',
    'The practical difference between CMMS, EAM and inspection management software, which problems each solves, and the specific test that tells you which category you are shopping for.',
    'cmms vs eam, inspection management software vs cmms, eam software comparison, maintenance software for inspection companies, choosing cmms or eam',
    'CMMS, EAM or Inspection Management Software?',
    'One question settles it: do you own the assets you are inspecting?',
    'These three categories overlap enough in marketing copy to be genuinely confusing, and buying the wrong one is expensive because the mistake usually only becomes clear after implementation. The distinction is not feature depth — it is whose assets are being managed and what the organisation is optimising for.',
    [
      {
        h2: 'The three categories, honestly described',
        table: {
          caption: 'What each category is actually built to do',
          headers: ['Category', 'Optimises for', 'Assumes', 'Buy it when'],
          rows: [
            [
              'CMMS',
              'Maintenance execution — work orders, preventive schedules, spares, technician time.',
              'You own a fixed set of assets and maintain them with an internal or contracted workforce.',
              'Maintenance backlog and spares are the operational pain.',
            ],
            [
              'EAM',
              'Asset lifecycle and capital decisions across a large estate — acquisition to disposal, reliability, cost of ownership.',
              'A large owned estate, multiple sites, and a need to consolidate asset cost and performance.',
              'You are making capital and reliability decisions at portfolio scale.',
            ],
            [
              'Inspection management',
              'Qualified people, calibrated equipment, scheduled inspections on client assets, defensible evidence and per-job profitability.',
              'You inspect assets — often other people\'s — and your commercial position depends on the integrity of the record.',
              'Certification, calibration, audit evidence or report turnaround are the pain.',
            ],
          ],
        },
      },
      {
        h2: 'The test that settles it',
        paragraphs: [
          'Do you own the assets? If yes, and your problem is maintenance execution, buy a CMMS. If yes, and your problem is lifecycle cost and reliability across a large estate, buy an EAM. If the assets belong to your clients — or if you own them but your problem is proving inspection competence and evidence rather than executing maintenance — you need inspection management software, and neither of the other two will grow into it.',
          'The reason this matters is that the gap is structural, not cosmetic. CMMS and EAM have no concept of method-level personnel qualification against a written practice, no calibration traceability model for probes and reference blocks, and no notion that your asset register changes with every contract. Those are not missing features; they are absent assumptions.',
        ],
      },
      {
        h2: 'Why "we will customise the CMMS" usually disappoints',
        bullets: [
          'Certification and calibration end up in custom fields with no enforcement at dispatch — the control that actually matters cannot be bolted on.',
          'Client-owned asset registers fight the product\'s ownership model, especially around access control and contract handover.',
          'Every platform upgrade re-tests the customisation, so the cost is recurring rather than one-off.',
          'The customisation becomes tribal knowledge held by one or two people, which is a continuity risk on a system holding audit evidence.',
        ],
      },
      {
        h2: 'When you genuinely need more than one',
        paragraphs: [
          'Large operators legitimately run all three: an EAM for portfolio decisions, a CMMS layer for maintenance execution, and an inspection management or integrity platform for the inspection evidence and condition data. That is not duplication — they hold different data at different resolutions. The integration pattern that works is inspection findings raising notifications and work orders in the maintenance system, and equipment master data flowing the other way so registers stay aligned.',
        ],
      },
    ],
    [
      {
        question: 'Can a CMMS handle NDT certification tracking?',
        answer: 'Only through custom fields, and without the control that matters — preventing dispatch of an unqualified technician. Since certification currency is checked at the moment of assignment and a CMMS has no assignment-time qualification model, the record exists but is not enforced. That is the difference between documentation and control.',
      },
      {
        question: 'We are an owner-operator with an internal inspection team. Which applies?',
        answer: 'Both, usually. Your CMMS or EAM stays authoritative for maintenance work and cost; you still need inspection-side capability for personnel qualification, calibration traceability, CML thickness trending and API 579 assessment, because those are absent from maintenance products. Integrate rather than trying to make one do the other\'s job.',
      },
      {
        question: 'Is inspection management software just a niche CMMS?',
        answer: 'No — the data model is different at the root. A CMMS is organised around assets you own and work you perform on them. Inspection management is organised around qualified people, calibrated equipment and evidence about assets that frequently belong to someone else. Similar screens, incompatible assumptions.',
      },
      {
        question: 'What does it cost to get this wrong?',
        answer: 'Typically the implementation cost plus twelve to eighteen months, and the second decision is harder because the organisation has now been through one failed system and is sceptical. The cheap way to avoid it is to spend a week defining which category you are buying before you take a single vendor demo.',
      },
    ],
    [
      { href: '/ndt-inspection-software', label: 'NDT inspection software buyer\'s guide' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/asset-integrity-management-software', label: 'Asset integrity management software' },
      { href: '/erp', label: 'Atlantis NDT ERP' },
    ],
  ),

  P(
    'operator-pre-mobilisation-checks-what-they-ask-for',
    'Operator Pre-Mobilisation Checks: What Aramco, ADNOC and PETRONAS Actually Ask For',
    'What major operators verify before an inspection crew reaches site, why mobilisations get turned away at the gate, and how to make the evidence pack a two-minute export instead of a scramble.',
    'pre-mobilisation check, aramco contractor requirements, adnoc contractor compliance, petronas vendor requirements, operator vendor approval ndt, contractor mobilisation documentation',
    'What Operators Check Before Your Crew Reaches Site',
    'The mobilisation is not lost on technical grounds. It is lost because one certificate in a pack of forty expired last week.',
    'Major operators — Saudi Aramco, ADNOC, QatarEnergy, KOC, PETRONAS and their peers — run documentary pre-mobilisation checks that are broadly similar in substance and completely unforgiving in execution. The work is awarded; the crew is booked; and then a single lapsed record stops the mobilisation. This is one of the most expensive recurring failures in contract inspection, and it is entirely preventable.',
    [
      {
        h2: 'What is verified, in practice',
        bullets: [
          'Personnel certification per method and level, current on the mobilisation date, with the governing written practice.',
          'Vision examination currency for each technician — the most commonly missed item because it runs on a different clock.',
          'Operator-specific approvals and screening, which are separate from your own certification regime and expire independently.',
          'Site induction and safety training currency, plus medical fitness where the scope requires it.',
          'Instrument, probe and reference-block calibration certificates covering the full mobilisation window, not just the start date.',
          'Approved procedures and technique sheets at the correct revision, sometimes requiring the operator\'s own prior approval.',
          'Radiation-source licensing and radiographer certification where industrial radiography is in scope.',
          'Insurance, right-to-work, visas and, in several jurisdictions, in-country-value or local-content documentation.',
        ],
      },
      {
        h2: 'Why it fails even in well-run companies',
        paragraphs: [
          'The items above live in different systems and expire on different clocks — certifications on multi-year cycles, vision exams annually, site inductions per site, calibrations per instrument, operator approvals on their own schedule. Nobody has visibility of the intersection: "is this specific crew, with these specific instruments, mobilisable to this specific site on this specific date?"',
          'That intersection is the only question that matters and it is exactly the question that a folder of certificates cannot answer. Companies that solve it do so by making mobilisability a computed property rather than a checklist someone works through under time pressure.',
        ],
      },
      {
        h2: 'Making the pack an export',
        paragraphs: [
          'The target state is that selecting a crew, a site and a date range produces the complete evidence pack, and flags anything that will expire inside the window before the crew leaves. That requires certification, calibration, approvals and inductions to live against the same records the dispatch decision uses — not in a shared drive assembled by the QA coordinator the night before.',
          'A useful discipline in the interim: run the pack generation two weeks ahead of every mobilisation rather than two days. Almost every gate turn-away is something that would have been visible with a fortnight\'s notice.',
        ],
      },
      {
        h2: 'Region-specific notes worth knowing',
        bullets: [
          'Saudi Arabia — Aramco engineering standards and procedures (SAES, SAEP, SAIC) plus the approved-vendor regime and, frequently, operator-specific screening for personnel.',
          'UAE — ADNOC AGES specifications with a contractor HSE and competency regime; FANR licensing for any ionising radiation source.',
          'Qatar — QatarEnergy vendor approval, with Ministry of Public Health licensing for radiography sources.',
          'Kuwait — KOC and KNPC contractor approval and their internal inspection standards.',
          'Malaysia — PETRONAS licensing and vendor registration, with DOSH requirements shaping pressure-equipment and lifting inspection.',
        ],
      },
    ],
    [
      {
        question: 'What is the single most common cause of a turned-away mobilisation?',
        answer: 'An expired annual vision examination. It runs on a shorter cycle than the method certification it supports, it is usually tracked separately from certifications, and it is trivially easy to overlook. Close behind it is a calibration certificate that expires mid-mobilisation rather than before it — checked as current on the departure date and lapsing on day nine of a fourteen-day job.',
      },
      {
        question: 'How far ahead should the evidence pack be prepared?',
        answer: 'Two weeks, and generated rather than assembled. That window gives enough time to arrange a vision exam, expedite a calibration or substitute a technician without losing the mobilisation. Preparing two days out means any gap found is a gap you cannot close.',
      },
      {
        question: 'Do operator-specific approvals transfer between contracts?',
        answer: 'Sometimes within the same operator and rarely between operators, and the safe assumption is that they do not. Track them as separate records with their own validity, because assuming a technician approved for one operator\'s site is acceptable at another\'s is a common and costly error.',
      },
      {
        question: 'Can this really be reduced to an export?',
        answer: 'Yes, provided the underlying records are structured rather than filed. Once certification, calibration, approvals and inductions are records with expiry dates attached to the same people and equipment the dispatch uses, "is this crew mobilisable on this date" becomes a query, and the pack is its output. The work is in structuring the data, not in generating the document.',
      },
    ],
    [
      { href: '/erp-modules/certification-tracking', label: 'Certification tracking' },
      { href: '/erp-modules/calibration-management', label: 'Calibration management' },
      { href: '/inspection-management-software', label: 'Inspection management software' },
      { href: '/ndt-erp-saudi-arabia', label: 'Inspection ERP in Saudi Arabia' },
    ],
  ),

  P(
    'proving-rbi-inspection-intervals-to-a-regulator',
    'Proving Risk-Based Inspection Intervals to a Regulator or Client',
    'What has to be defensible when RBI under API 580/581 extends an inspection interval: the condition data behind probability of failure, damage-mechanism assignment, and the audit trail from reading to decision.',
    'rbi inspection intervals, api 580 rbi, api 581 risk based inspection, defending rbi to regulator, inspection interval extension, risk based inspection audit',
    'Defending an RBI-Derived Inspection Interval',
    'Extending an interval is a decision you will be asked to justify years later, by someone who was not in the room.',
    'Risk-based inspection earns its keep by moving effort away from equipment that has been demonstrably stable and toward equipment that is genuinely degrading. That only works if the underlying condition data supports the probability-of-failure input — and when RBI runs on default corrosion rates rather than measured ones, an interval extension is a decision resting on an assumption. Regulators and clients increasingly test exactly that.',
    [
      {
        h2: 'What has to be defensible',
        bullets: [
          'The corrosion rate: measured from a real thickness time series at identified CMLs, with the readings, dates, instruments and technicians behind it recoverable.',
          'The damage mechanisms assigned per API RP 571, and why they are the credible ones for that circuit\'s actual service.',
          'The consequence-of-failure basis — inventory, fluid, location, and the assumptions behind them.',
          'The RBI methodology and its version, plus any deviations from the standard approach and their justification.',
          'The competence of the people who performed the assessment, and the review and approval chain.',
          'The integrity operating windows the assessment assumed, and evidence that operation stayed inside them.',
        ],
      },
      {
        h2: 'The weak link is almost always the condition data',
        paragraphs: [
          'RBI methodology is well documented and rarely the point of challenge. What gets challenged is the input: a corrosion rate derived from two readings whose CML identity cannot be proven, a thickness history missing the instrument and technician provenance, or a default rate quietly substituted where measurements were unavailable and never revisited when they became available.',
          'This is why CML register quality and inspection-evidence provenance are RBI issues rather than administrative ones. The methodology inherits the credibility of its inputs, and no amount of analytical rigour compensates for a broken time series.',
        ],
      },
      {
        h2: 'Integrity operating windows are part of the argument',
        paragraphs: [
          'An RBI assessment assumes an operating envelope. If the unit subsequently ran outside it — higher temperature, different feedstock sulphur, changed water chemistry — the damage-mechanism susceptibility that underpinned the assessment may no longer hold, and the extended interval is no longer supported. Demonstrating that operation stayed within the assumed windows, or that excursions were assessed, is part of defending the interval and is frequently the part nobody has evidence for.',
        ],
      },
      {
        h2: 'Building the trail as you go',
        bullets: [
          'Bind every thickness reading to a persistent CML identity, with instrument, technician and procedure provenance captured automatically.',
          'Record damage-mechanism assignment with its rationale and the process-service basis, not just the mechanism name.',
          'Version the assessment: inputs, methodology, results and approvals frozen at the point of decision.',
          'Re-run the assessment on new data rather than accepting the old interval by default; an interval that has never been re-examined is a weak position.',
          'Track excursions against integrity operating windows and link them to the affected assessments.',
        ],
      },
    ],
    [
      {
        question: 'Is RBI accepted as a basis for extending statutory intervals?',
        answer: 'It depends entirely on jurisdiction and on the regulator, and the answer ranges from broadly accepted to not permitted for certain equipment classes. What is consistent is that where RBI is accepted, the burden of demonstrating the technical basis sits with the operator — so the quality of the condition data and the audit trail determines whether the position holds under examination.',
      },
      {
        question: 'What happens when a new inspection contradicts the RBI assumption?',
        answer: 'The assessment should be re-run rather than the reading treated as an outlier. A measured corrosion rate materially higher than assumed invalidates the interval that was derived from the assumption, and the correct response is to reassess and, if necessary, bring the inspection forward. Documented reassessment is a sign of a functioning programme; unexplained readings left in place are the opposite.',
      },
      {
        question: 'Can RBI be run without a good CML register?',
        answer: 'It can be run; it cannot be defended. Probability of failure driven by default corrosion rates rather than measured ones produces a ranking that reflects assumptions rather than condition, and any interval extension derived from it is exposed the moment someone asks how the corrosion rate was obtained.',
      },
      {
        question: 'How often should assessments be refreshed?',
        answer: 'Whenever significant new condition data arrives, whenever process service or operating windows change, and on a defined cycle regardless — commonly aligned to the inspection cycle. The practical failure mode is an assessment performed once at programme inception and inherited unchanged for a decade, which is difficult to defend however sound the original work was.',
      },
    ],
    [
      { href: '/asset-integrity-management-software', label: 'Asset integrity management software' },
      { href: '/consulting/rbi-program-design', label: 'RBI programme design consulting' },
      { href: '/digital-twins', label: 'Atlantis Digital Twin platform' },
      { href: '/api-510-certification', label: 'API 510 certification guide' },
    ],
    'dt',
  ),
];

export const BOFU_POSTS_BY_SLUG: Record<string, MoneyPage> = Object.fromEntries(
  BOFU_POSTS.map((p) => [p.slug, p]),
);

export function getBofuPost(slug: string): MoneyPage | undefined {
  return BOFU_POSTS_BY_SLUG[slug] || BOFU_POSTS_BY_SLUG[`blog/${slug}`];
}
