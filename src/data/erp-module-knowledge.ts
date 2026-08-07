// Ultra-rich per-module ERP knowledge. Rendered by ErpModuleCityPage + ErpModulePage. Auto-built 2026-07-24.
export interface ModuleKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const moduleKnowledge: Record<string, ModuleKnowledge> = {
  "asset-management": {
    "headline": "Asset Management built for full lifecycle traceability of client-owned inspection assets",
    "overview": "The asset management module maintains a structured register of every client asset your inspection company touches: pressure vessels, piping circuits, storage tanks, structural steel, and rotating equipment. Each asset carries a hierarchy from plant to unit to line to component, tagged with client equipment IDs, P&ID references, material of construction, design code, and commissioning date. Every UT thickness reading, PAUT scan, MT/PT indication, and API inspection report generated against that asset is stored on its timeline, building a permanent run/repair/replace history instead of scattered PDFs in email threads. Asset criticality, service (sour, sweet, caustic, hydrocarbon), and inspection strategy are captured so technicians see context before mobilizing. Assets link to condition monitoring locations, calibration records used to inspect them, and open work orders. When a client audits your inspection history or an operator's turnaround team requests five years of thickness data on a specific line, it is retrievable in one query rather than a document search across job folders. For inspection companies managing hundreds of client assets across multiple refineries or platforms, this register is what separates a repeatable, auditable inspection program from a folder of disconnected PDF reports.",
    "ndtAngle": "Every asset record ties directly to the fixed-equipment integrity programs your NDT technicians execute: API 510 pressure vessel history, API 570 piping circuit data, and API 653 tank shell/floor records. Baseline and follow-up PAUT corrosion-mapping files, UT grid readings, and MFL tank floor scan results attach to the exact component inspected, not a generic job folder. Asset criticality and RBI risk ranking (API 580/581) drive which components get UT vs. PAUT vs. guided-wave coverage, and remaining-life calculations feed straight from the asset's CML history rather than a spreadsheet rebuilt each cycle.",
    "capabilities": [
      "Multi-level asset hierarchy (site > unit > line > component > CML) with client equipment ID cross-referencing",
      "Full inspection history timeline per asset — every UT, RT, MT, PT, PAUT, and TOFD result linked chronologically",
      "Design-basis fields: code of construction (ASME VIII/B31.3), material, MAWP, corrosion allowance, service fluid",
      "Digital twin linkage to Atlantis DT platform for 3D visualization of inspection points on the physical asset",
      "Run/repair/replace decision log with engineering sign-off and FFS (API 579-1) trigger flags",
      "Bulk asset import/export via CSV or direct sync from client CMMS asset lists",
      "Photo and document attachment per asset (nameplate, U-1 form, prior inspection reports)",
      "Asset criticality and RBI risk score display pulled from the corrosion-tracking and RBI feed"
    ],
    "workflow": "New client contracts start with an asset onboarding batch import mapping client tag numbers, P&ID references, and design data into the register. Field technicians select the asset before logging any reading, so every UT thickness point, PAUT scan file, or MT indication is captured against the correct component from the start rather than reconciled afterward. As inspection reports are issued, the system auto-links the report PDF and raw data file to the asset timeline. QA managers and Level III reviewers use the asset view to compare current readings against baseline and prior cycles before sign-off. When a turnaround or client audit requires a full integrity history, the asset record exports a consolidated package — readings, reports, calibration certs used, and technician credentials — in minutes.",
    "compliance": [
      "API 510 Pressure Vessel Inspection Code",
      "API 570 Piping Inspection Code",
      "API 653 Tank Inspection, Repair, Alteration, and Reconstruction",
      "ISO 55000 Asset Management",
      "ISO 14224 Reliability and Maintenance Data Collection",
      "ASME BPVC Section V",
      "ISO 9001:2015"
    ],
    "integrations": [
      "IBM Maximo (asset and work order sync)",
      "Bentley/GE APM (Meridium) RBI platform",
      "SAP S/4HANA Plant Maintenance module",
      "Atlantis Digital Twin platform (dt.atlantisndt.com)",
      "Client vendor and procurement portals (Ariba, ISNetworld)"
    ],
    "roi": "Inspection firms using structured asset registers report cutting turnaround-report compilation time from days to hours because historical readings, reports, and calibration records are pre-linked rather than searched for manually. Audit findings tied to missing or misfiled historical data drop significantly when every reading traces to a single asset record. Firms also recover billable technician hours previously spent reconstructing five-year thickness histories for client audits, and reduce duplicate mobilization trips caused by incomplete asset documentation before a job starts.",
    "faqs": [
      [
        "Can the asset register handle assets with thousands of individual CMLs, like a tank floor MFL scan?",
        "Yes. Each condition monitoring location is a child record under its parent asset, so a single tank can carry hundreds of floor-plate CMLs and shell CMLs, each with its own reading history, without cluttering the top-level asset view."
      ],
      [
        "Does this replace the client's CMMS, like Maximo or SAP PM?",
        "No — it's built to sync with the client's system of record, not replace it. Asset IDs, tag numbers, and inspection due-dates flow in and inspection results flow back out, so your inspection company's data stays consistent with the operator's asset management system."
      ],
      [
        "How is asset criticality determined for inspection planning?",
        "Criticality can be imported from an existing RBI study (API 580/581) or scored within the module using consequence-of-failure and probability-of-failure inputs, which then drives inspection interval and method recommendations shown to schedulers."
      ]
    ]
  },
  "audit-management": {
    "headline": "Audit Management for ISO 17020 and API Spec Q1/Q2 accredited inspection bodies",
    "overview": "The audit management module runs the full audit lifecycle an accredited NDT inspection company depends on: internal quality audits, third-party accreditation surveillance visits, and client-witnessed audits at job sites. Audit schedules are built against a rolling calendar tied to accreditation renewal cycles, with checklist templates mapped to specific clauses of ISO/IEC 17020, ISO 9001, or API Spec Q1/Q2. Findings are logged as observations, minor nonconformances, or major nonconformances, each routed into a corrective and preventive action (CAPA) workflow with owner assignment, root-cause fields, and closure evidence requirements. Auditors record findings on mobile devices during site visits, attaching photos and procedure references directly to the finding. Management review meetings pull a consolidated dashboard of open CAPAs, audit trends by department, and repeat-finding analysis across audit cycles. For companies holding A2LA or ANAB accreditation, the module maintains the audit trail accreditation bodies expect to see: who audited what, when, against which criteria, and how findings were closed and verified.",
    "ndtAngle": "Accreditation bodies auditing an NDT inspection company under ISO/IEC 17020 or ISO/IEC 17025 expect documented evidence of internal audits covering technical competence, equipment control, and personnel qualification — not just administrative QMS clauses. The module's checklist library includes NDT-specific audit points: written practice compliance under ASNT SNT-TC-1A, calibration record traceability, and procedure qualification records under ASME Section IX. For aerospace NDT operations, NADCAP AC7114 audit criteria are pre-loaded so self-assessment and merit-audit prep follow the same nonconformance workflow as routine internal audits.",
    "capabilities": [
      "Audit calendar auto-scheduled against accreditation renewal and surveillance dates",
      "Clause-mapped checklist library for ISO/IEC 17020, ISO 9001, API Spec Q1/Q2, and NADCAP AC7114",
      "Mobile audit capture with photo evidence attached directly to findings",
      "Nonconformance severity classification (observation, minor, major) with automatic CAPA creation",
      "Root-cause analysis fields (5-Why, fishbone) linked to each CAPA",
      "Repeat-finding trend analysis across audit cycles and departments",
      "Client-witnessed audit log for site visits by customer QA representatives",
      "Management review dashboard summarizing open CAPAs, overdue actions, and audit KPIs"
    ],
    "workflow": "An audit is scheduled from the compliance calendar and assigned to a qualified internal auditor with the relevant checklist attached. During the audit — whether internal, client-witnessed, or accreditation surveillance — findings are entered live on a tablet or phone with photo evidence and clause references. Each nonconformance auto-generates a CAPA record routed to the responsible department head, who documents root cause, corrective action, and target closure date. Evidence of closure (revised procedure, retraining record, corrected report) is attached before the finding can be marked closed. QA managers review open items weekly, and the consolidated audit dashboard feeds directly into scheduled management review meetings, giving leadership a single source of truth ahead of the next accreditation body visit.",
    "compliance": [
      "ISO/IEC 17020:2012 (Conformity assessment — inspection bodies)",
      "ISO/IEC 17025:2017 (testing and calibration laboratories)",
      "ISO 9001:2015",
      "API Spec Q1 / API Spec Q2",
      "NADCAP AC7114 (nondestructive testing)",
      "ASNT SNT-TC-1A written practice audit requirements"
    ],
    "integrations": [
      "A2LA and ANAB accreditation body portals",
      "Document-control module (procedure version references in checklists)",
      "Client QA and vendor-audit portals",
      "DocuSign / Adobe Sign for auditor and auditee sign-off",
      "SharePoint / OneDrive for legacy audit archive import"
    ],
    "roi": "Companies moving from spreadsheet-based audit tracking to a structured module typically cut CAPA closure time by half because findings, owners, and evidence live in one workflow instead of email chains. Accreditation surveillance visits go faster when auditors can pull the complete internal-audit and CAPA trail in minutes rather than reconstructing it from folders. Repeat major nonconformances — the finding accreditation bodies scrutinize most — decline measurably once root-cause trend data is visible across audit cycles instead of siloed in individual reports.",
    "faqs": [
      [
        "Can the module handle both internal QMS audits and NDT technical competence audits?",
        "Yes. Separate checklist libraries cover administrative QMS clauses and technical criteria specific to method competence, equipment calibration, and personnel certification, and both feed the same CAPA and trend-analysis engine."
      ],
      [
        "How does this help during an A2LA or ANAB surveillance visit?",
        "The assessor can be given direct or exported access to the full audit history, CAPA closure evidence, and trend reports for the accreditation period, replacing the manual document-pull that typically consumes the first hours of a surveillance visit."
      ],
      [
        "Does it support client-witnessed audits at job sites, not just internal audits?",
        "Yes — a separate audit type logs client QA representative visits, findings raised during field witnessing, and any corrective actions required before the job report is accepted, keeping that record distinct from internal accreditation audits."
      ]
    ]
  },
  "calibration-management": {
    "headline": "Calibration Management with ISO 17025 traceability for every UT probe, gauge, and source",
    "overview": "The calibration management module maintains a serialized register of every piece of NDT equipment your company owns or rents: ultrasonic thickness gauges, phased array units, MT yokes, PT black lights, RT densitometers, and reference calibration blocks. Each instrument record carries its calibration due date, last calibration date, calibrating lab, and certificate number, with automatic status flags (current, due soon, overdue) visible across the fleet. Calibration certificates are stored as attached PDFs and can be auto-generated for in-house calibrations performed against traceable reference standards, formatted to include the required traceability chain back to a national metrology institute. Radioactive sources carry additional fields for activity, half-life decay calculation, and leak-test (wipe test) history. When a technician attempts to check out an instrument for a job, the system blocks assignment if calibration has lapsed, preventing an out-of-cal gauge from ever reaching the field. Fleet-wide calibration compliance is visible on a single dashboard rather than tracked instrument-by-instrument in spreadsheets.",
    "ndtAngle": "Calibration traceability is the backbone of NDT credibility, and this module is built around ASME Section V reference block requirements (IIW block, DSC block, area-amplitude blocks) and ASTM reference standards for MT/PT sensitivity checks. UT and PAUT probe/wedge combinations are tracked as matched sets so a probe's calibration history follows the exact wedge it was verified with. RT source records track activity decay curves for Ir-192 and Co-60 and flag when a source approaches replacement threshold under API RP 577 guidance, alongside the periodic leak-test schedule required for radioactive material licensing.",
    "capabilities": [
      "Serialized instrument register with barcode/RFID tagging for scan-based checkout and check-in",
      "Auto-calculated calibration due dates with 90/60/30/7-day escalation alerts to QA and technicians",
      "Auto-generated calibration certificates with full traceability chain to national metrology standards",
      "Matched probe-and-wedge tracking for UT and PAUT sets, preserved as linked pairs across cal cycles",
      "Radioactive source activity decay tracking (Ir-192, Co-60, Cs-137) with automatic half-life recalculation",
      "Leak-test (wipe test) scheduling and results log for sealed source compliance",
      "Hard-block on job assignment of any instrument with expired or missing calibration",
      "Fleet-wide dashboard showing calibration status by equipment type, location, and technician custody"
    ],
    "workflow": "Every instrument entering service is registered with its serial number, method, manufacturer specs, and initial calibration certificate. As due dates approach, the system escalates alerts to the QA manager and the technician currently holding the instrument, and schedules recalibration with either an internal cal lab or an accredited external provider. Technicians scan the instrument barcode when checking equipment out for a job, and the system validates current calibration status before allowing checkout — an overdue instrument cannot leave the shop. Completed calibrations, whether performed in-house or externally, are logged with certificate upload and the due-date clock resets automatically. QA pulls the fleet dashboard before every audit or client mobilization to confirm 100% of assigned equipment carries current, traceable calibration.",
    "compliance": [
      "ISO/IEC 17025:2017",
      "ASME BPVC Section V (Article 4, 5, 6, 7 reference standards)",
      "ASNT SNT-TC-1A",
      "API RP 577 (Welding Inspection and Metallurgy — NDE equipment)",
      "ISO 9712",
      "10 CFR 34 / NRC radioactive materials licensing (for sealed sources)"
    ],
    "integrations": [
      "External calibration-lab LIMS systems",
      "Barcode / RFID asset-tracking hardware",
      "IBM Maximo equipment records",
      "Inventory-management module (consumables and equipment fleet)",
      "DocuSign / e-signature for calibration certificate approval"
    ],
    "roi": "Firms report eliminating out-of-calibration equipment incidents entirely once checkout is hard-blocked against expired instruments, removing a top cause of client-rejected reports and rework. Calibration-related audit findings — historically among the most common NDT accreditation nonconformances — drop close to zero when every instrument's traceability chain is a stored, retrievable certificate rather than a filing-cabinet search. Administrative time spent chasing overdue calibrations across a multi-technician fleet is cut substantially with automated escalation replacing manual spreadsheet review.",
    "faqs": [
      [
        "What does calibration management software for NDT companies need to handle — in-house reference blocks, third-party accredited lab calibrations, or both?",
        "Both. In-house calibrations against traceable reference standards auto-generate a certificate with the full traceability chain, while externally performed calibrations are logged with the receiving lab's certificate attached and validated against its accreditation scope."
      ],
      [
        "What happens if a technician tries to use an instrument that's overdue for calibration?",
        "The checkout workflow blocks the assignment and flags the instrument as unavailable until recalibration is logged, preventing an out-of-cal gauge from being used on a client job."
      ],
      [
        "Does it track radioactive source replacement timing, or just calibration dates?",
        "Both. Source records calculate current activity from the decay curve and flag when output drops below the exposure-time threshold needed for practical shot times, separate from and in addition to the periodic leak-test compliance schedule."
      ]
    ]
  },
  "certification-tracking": {
    "headline": "Certification Tracking for ASNT, PCN, CSWIP, and ISO 9712 personnel currency",
    "overview": "The certification tracking module maintains a live qualification record for every NDT technician: method, level (I/II/III), certifying body, certificate number, issue date, and expiry date, cross-referenced against a method matrix showing exactly which techniques (UT, RT, MT, PT, ET, PAUT, TOFD) each person is currently qualified to perform. Annual requirements specific to NDT personnel — near-vision and color-vision acuity tests, continuing education hours, and employer recertification under the written practice — are tracked alongside the base certification so a technician isn't shown as \"current\" on paper while missing a mandatory annual check. Individual API certifications (510, 570, 653) carry their own renewal cycle with continuing education unit (CEU) tracking distinct from method certifications. When scheduling a job, dispatchers see only technicians whose certifications are both valid and matched to the required method and code, eliminating the risk of assigning an uncertified person to a client job.",
    "ndtAngle": "Built directly around ASNT SNT-TC-1A and CP-189 employer-based certification, ISO 9712 third-party certification, PCN (BINDT), and CSWIP schemes, the module distinguishes between certification bodies so a technician holding PCN Level 2 UT is never confused with ASNT Level II UT on a job requiring a specific scheme per client specification. It also governs the employer's written practice recertification interval and links each technician's qualification record to the NDT Level III who signs their written practice, satisfying the traceability accreditation bodies check during ISO/IEC 17020 audits.",
    "capabilities": [
      "Method-and-level matrix per technician (UT/RT/MT/PT/ET/PAUT/TOFD × Level I/II/III)",
      "Multi-scheme tracking (ASNT SNT-TC-1A/CP-189, ISO 9712, PCN, CSWIP) held as distinct, non-interchangeable records",
      "90/60/30-day expiry escalation alerts to technician, supervisor, and QA manager",
      "Annual vision test (near-vision and color-vision acuity) tracking separate from base certification expiry",
      "API individual certification (510/570/653) renewal tracking with CEU accumulation log",
      "Written practice sign-off linkage to the responsible NDT Level III",
      "Dispatch-eligibility filter — only currently qualified, matched-method technicians appear for job assignment",
      "Certificate document vault with scanned originals attached per technician per credential"
    ],
    "workflow": "A technician's certifications are entered on hire, including scheme, method, level, and all supporting dates (issue, expiry, last vision test). As expiry windows approach, escalating alerts go to the technician and their supervisor, prompting recertification scheduling well before a credential lapses. When a job requires PAUT Level 2 under ISO 9712 for a client audited to that specification, the scheduling module cross-checks the certification tracker and only surfaces eligible technicians — anyone with an expired credential, missing vision test, or wrong certifying scheme is automatically excluded from the assignment pool. QA managers run periodic fleet-wide currency reports ahead of client audits or ISNetworld/Avetta prequalification renewals, and the NDT Level III reviews written-practice sign-offs during scheduled recertification cycles.",
    "compliance": [
      "ASNT SNT-TC-1A",
      "ASNT CP-189",
      "ISO 9712",
      "PCN (British Institute of NDT)",
      "CSWIP",
      "API individual certification programs (510, 570, 653)",
      "NAS410 (aerospace NDT personnel)"
    ],
    "integrations": [
      "LMS / training-provider platforms for CEU and course completion sync",
      "HRIS systems (BambooHR, Workday) for employee master data",
      "Client vendor-prequalification portals (ISNetworld, Avetta)",
      "Odoo HR module",
      "DocuSign for written-practice acknowledgment sign-off"
    ],
    "roi": "Companies eliminate the client-facing risk of assigning a technician with a lapsed certification once dispatch eligibility is enforced automatically rather than checked manually before mobilization. Vendor prequalification audits (ISNetworld, Avetta) that historically took days to compile technician credential evidence are reduced to a same-day export. Firms also report faster recertification turnaround because expiry alerts reach both the technician and supervisor weeks ahead of the deadline instead of being discovered the week a job requires that credential.",
    "faqs": [
      [
        "Is there NDT technician certification tracking software that keeps ASNT, PCN, and CSWIP records separate for the same technician and method?",
        "Yes. Each certifying scheme is stored as a separate record with its own number, expiry, and scope, so a technician with both ASNT Level II UT and PCN Level 2 UT shows both credentials distinctly rather than merged into one generic \"UT certified\" flag."
      ],
      [
        "Is there software that flags expired NDT certifications automatically, including the annual vision test and not just multi-year expiry?",
        "Yes, both are tracked independently. A technician can show a current, unexpired certification while the vision-test field flags overdue, and the dispatch filter treats either lapse as disqualifying for job assignment."
      ],
      [
        "How does this support ISNetworld or Avetta vendor prequalification renewals?",
        "A single export pulls current certification status, vision test compliance, and supporting scanned certificates for every technician on the roster, matching the documentation format those platforms request during annual prequalification review."
      ]
    ]
  },
  "corrosion-tracking": {
    "headline": "Corrosion Tracking with CML trending, remaining-life calculation, and RBI feed",
    "overview": "The corrosion tracking module manages condition monitoring locations (CMLs) across piping circuits, vessel shells, and tank floors, storing every UT thickness reading and PAUT corrosion-mapping data point against its exact grid coordinate over time. Short-term and long-term corrosion rates are calculated automatically from successive readings, and the module projects remaining life and next-inspection-due date per API 510, 570, and 653 methodology. CML readings below the retirement thickness or showing an accelerated corrosion rate are flagged for engineering review and can trigger a Fitness-for-Service screening under API 579-1/ASME FFS-1. Trend charts show thickness loss over multiple inspection cycles per CML, making localized corrosion or an unexpected rate change immediately visible rather than buried in a spreadsheet of raw numbers. Data feeds directly into risk-based inspection (RBI) platforms so probability-of-failure scoring stays current with the latest field readings rather than a static study updated only every few years.",
    "ndtAngle": "This module is where field UT grid readings and PAUT corrosion-mapping scan exports (from tools like OmniScan or TD Focus LT) become engineering data. Piping circuit CMLs under API 570, vessel shell/head CMLs under API 510, and tank floor MFL/UT scan grids under API 653 each follow that code's specific interval and retirement-thickness logic. When a reading trend crosses a threshold, the module flags an FFS Level 1 or Level 2 screening trigger per API 579-1, giving the inspection company's Level III a documented basis for recommending run, repair, or replace to the client's mechanical integrity engineer.",
    "capabilities": [
      "CML register per asset with grid coordinates, nominal thickness, and retirement thickness",
      "Automatic short-term and long-term corrosion rate calculation from successive readings",
      "Remaining-life and next-inspection-due date projection per API 510/570/653 half-life rule",
      "Thickness-trend charting per CML across all historical inspection cycles",
      "FFS trigger flagging (API 579-1/ASME FFS-1 Level 1/2 screening criteria)",
      "Direct data feed to RBI platforms updating probability-of-failure scores with current readings",
      "PAUT corrosion-map file import (grid/C-scan data) tied to CML coordinates",
      "Localized corrosion and pitting rate alerts distinct from general wall-loss trending"
    ],
    "workflow": "CMLs are established during baseline inspection and geo-tagged to specific points on the asset's UT grid or PAUT scan pattern. Each subsequent inspection cycle, field technicians log new readings against the existing CML IDs, and the system calculates corrosion rate against the prior reading automatically rather than requiring manual recalculation. Any CML approaching retirement thickness or showing a rate spike is auto-flagged to the reviewing Level III, who assesses whether an FFS Level 1/2 screening or engineering escalation is warranted. Remaining-life output determines the next inspection due date, which feeds directly into inspection scheduling. Updated corrosion rates and remaining-life figures push to the client's RBI platform so the risk model reflects the latest field data rather than the original study baseline.",
    "compliance": [
      "API 510 Pressure Vessel Inspection Code",
      "API 570 Piping Inspection Code",
      "API 653 Tank Inspection, Repair, Alteration, and Reconstruction",
      "API 580 / API 581 Risk-Based Inspection",
      "API 579-1 / ASME FFS-1 Fitness-for-Service",
      "ASME B31.3 / B31.4 / B31.8 piping codes"
    ],
    "integrations": [
      "Bentley/GE APM (Meridium) and Synergi Life RBI platforms",
      "PAUT corrosion-mapping software (OmniPC, TD Focus, Capture)",
      "IBM Maximo asset and inspection records",
      "GIS / P&ID viewers for spatial CML visualization",
      "Client mechanical integrity engineering review portals"
    ],
    "roi": "Inspection firms report cutting remaining-life calculation and next-due-date turnaround from days of spreadsheet reconciliation to same-day delivery once corrosion rates auto-calculate from linked CML history. FFS screening triggers get caught earlier because rate-of-change alerts surface automatically instead of relying on a reviewer manually comparing multi-cycle spreadsheets, reducing the risk of an unplanned shutdown from an undetected accelerated corrosion zone. Clients running RBI programs also see fewer stale probability-of-failure scores because field data updates the model continuously rather than at the next multi-year RBI revalidation.",
    "faqs": [
      [
        "Can it ingest PAUT corrosion-mapping scan files directly, or only manual UT point readings?",
        "Both. Manual grid readings are entered per CML, and PAUT corrosion-map exports from common scanning software are imported and correlated to the same CML coordinate system, so trend analysis works across whichever method was used each cycle."
      ],
      [
        "How is the next inspection interval calculated?",
        "The module applies the applicable code's half-life methodology (API 510/570/653) using the calculated long-term corrosion rate and current thickness against retirement thickness, then flags the resulting due date to inspection scheduling automatically."
      ],
      [
        "Does corrosion rate data actually update the client's RBI risk score, or just sit in our system?",
        "Where the client's RBI platform (Meridium/Bentley APM, Synergi Life) accepts data feeds, updated corrosion rates and remaining-life figures push through so the probability-of-failure component of their risk model reflects current field conditions."
      ]
    ]
  },
  "document-control": {
    "headline": "Document Control for revision-locked procedures, WPS, and inspection reports",
    "overview": "The document control module governs every controlled document an accredited NDT inspection company relies on: written NDT procedures, welding procedure specifications (WPS) and procedure qualification records (PQR), quality manual sections, work instructions, and client-specific reporting formats. Every document carries a formal revision number, approval history, and effective date, with prior revisions archived rather than overwritten so a superseded procedure can always be retrieved during an audit. Access is role-based so field technicians can only pull the current approved revision of a procedure — never an outdated version left on a laptop or in an old email attachment. Client-specific document formats (a particular refinery's report template, a specification's required cover-sheet layout) are stored as controlled templates tied to that client relationship, ensuring the correct format is used automatically rather than by memory. Retention scheduling flags documents for required retention periods per client contract or code requirement, and controlled distribution logs show exactly who has acknowledged reading the current revision of any given procedure.",
    "ndtAngle": "Written procedures under ASME Section V and welding procedures under Section IX require formal qualification and revision control that this module enforces structurally — a procedure can't be used on a job until it carries an approved, current revision status. ISO 9712 written instructions and client-specification documents (Saudi Aramco SAES, Shell DEP) are stored as controlled templates so field crews always default to the correct client format. Inspection report numbering and traceability — critical for API 510/570/653 report defensibility — runs through the same controlled-document logic, so every issued report references the exact procedure revision used to generate it.",
    "capabilities": [
      "Formal revision control with full version history retained (no overwritten prior revisions)",
      "Role-based access ensuring field technicians can only retrieve the current approved procedure",
      "WPS/PQR qualification record management tied to ASME Section IX requirements",
      "Client-specific report template and format library keyed to individual client accounts",
      "Controlled distribution log tracking who has acknowledged each current revision",
      "Retention scheduling with alerts for contractually or code-required retention periods",
      "Approval workflow requiring designated sign-off (QA Manager, NDT Level III) before a revision goes live",
      "Report numbering and traceability linking every issued report to the exact procedure revision used"
    ],
    "workflow": "A procedure change originates as a draft revision, routed through an approval workflow to the responsible NDT Level III or QA Manager. Once approved, the new revision becomes the only version field technicians can retrieve — the prior revision is archived, not deleted, preserving the audit trail. Technicians acknowledge reading the current revision as part of onboarding to that procedure, and the acknowledgment log is available for accreditation audit review. When a report is generated for a client job, the system stamps it with the procedure revision in effect at the time of inspection, so years later that exact traceability link remains intact. Retention schedules run in the background, flagging documents approaching their required retention expiry per client contract terms or applicable code, prompting review before any disposal action.",
    "compliance": [
      "ISO 9001:2015",
      "ISO/IEC 17020:2012",
      "ASME BPVC Section IX (WPS/PQR)",
      "ASME BPVC Section V (written procedures)",
      "API Spec Q1 / API Spec Q2",
      "ISO 15489 (records management)",
      "Client-specific specifications (Saudi Aramco SAES, Shell DEP)"
    ],
    "integrations": [
      "SharePoint / OneDrive for legacy document migration",
      "DocuSign / Adobe Sign for approval routing",
      "PDF/A archiving for long-term document preservation",
      "Client document management portals",
      "Quality-management and audit-management modules for cross-referenced clause mapping"
    ],
    "roi": "Firms eliminate the recurring audit finding of technicians working from outdated procedure revisions once access is restricted to current-approved documents only, removing one of the most common ISO/IEC 17020 nonconformances. Time spent locating a specific historical procedure revision during a client dispute or audit drops from hours of folder searching to a direct pull from the version archive. Report traceability disputes — where a client questions which procedure revision governed a given inspection — are resolved immediately because every report is permanently stamped with its governing revision at time of issue.",
    "faqs": [
      [
        "How does ISO 9001 document control software for NDT companies handle an old procedure revision when a new one is approved?",
        "It is archived, not deleted. The system preserves the full revision history with approval dates and superseding revision references, which auditors specifically look for during ISO/IEC 17020 or ISO 9001 surveillance visits."
      ],
      [
        "Can different clients require different report formats, and does the system enforce which one to use?",
        "Yes. Client-specific templates are stored against that client's account, and report generation for that client automatically defaults to their required format rather than relying on a technician remembering which template applies."
      ],
      [
        "Does document control track WPS/PQR the same way as NDT procedures?",
        "Welding procedure specifications and procedure qualification records follow the same revision-control and approval-workflow logic, keeping them in a single controlled system alongside NDT written procedures rather than a separate, disconnected tracking method."
      ]
    ]
  },
  "inspection-scheduling": {
    "headline": "Inspection Scheduling that turns turnaround windows and RBI due-dates into dispatchable jobs",
    "overview": "The inspection scheduling module converts inspection requirements — whether generated by an RBI next-due-date, a client-requested ad-hoc job, or a shutdown/turnaround scope of work — into dispatchable jobs matched to qualified, available technicians. The master calendar shows every scheduled inspection across all client sites simultaneously, color-coded by method, urgency, and technician assignment, so schedulers can spot overlapping demand or crew shortfalls before they become a missed inspection window. Recurring inspection intervals calculated by the corrosion-tracking module (per API 510/570/653) automatically populate the calendar as upcoming jobs rather than requiring manual re-entry each cycle. Turnaround and shutdown scheduling handles the high-density, multi-crew mobilization pattern specific to plant outages, where dozens of technicians across multiple NDT methods need coordinated deployment within a narrow window. Every scheduled job carries its required method, code, and certification level, and the scheduler can only assign technicians who meet those requirements.",
    "ndtAngle": "Scheduling logic is built around real inspection-interval mathematics — the API 510/570/653 half-life rule for setting next-inspection dates, not a generic recurring-task reminder. During turnaround (TAR) windows, the module coordinates simultaneous UT, PAUT, MT, PT, and RT crews against a fixed outage schedule, factoring in radiography exclusion-zone timing that limits when RT work can run alongside other trades on site. Technician-to-job matching pulls directly from the certification tracking module, so only a PCN Level 2 PAUT-qualified technician is ever offered for a job requiring PAUT under a client specification calling for that scheme.",
    "capabilities": [
      "Master calendar view across all client sites, methods, and technician assignments simultaneously",
      "Auto-populated recurring inspections from API 510/570/653-calculated next-due dates",
      "Turnaround/shutdown mode for high-density multi-crew, multi-method mobilization scheduling",
      "Certification-matched technician assignment pulling live from the certification tracking module",
      "Radiography exclusion-zone timing coordination to avoid conflicts with concurrent site trades",
      "Crew travel and mobilization lead-time buffers built into scheduling logic for remote/offshore sites",
      "Client-facing schedule visibility for turnaround planners tracking inspection milestone completion",
      "Automatic rescheduling and re-notification when a technician's certification or availability changes"
    ],
    "workflow": "Inspection requirements enter the calendar either automatically from a corrosion-tracking due-date trigger, manually from a client request, or in bulk from an imported turnaround scope of work. The scheduler assigns technicians, and the system filters the available pool to only those currently certified for the required method, level, and scheme, and free of conflicting assignments. For turnarounds, the module lays out a multi-day, multi-crew grid coordinating method sequencing (e.g., RT exclusion windows before MT/PT crews can enter an area) against the outage's master schedule. As jobs approach, automated reminders go to assigned technicians and to the client contact, and any last-minute certification lapse or availability change triggers an immediate reassignment alert rather than a job left unstaffed. Completed jobs close the calendar entry and hand off directly to work order management for field execution tracking.",
    "compliance": [
      "API 510 Pressure Vessel Inspection Code",
      "API 570 Piping Inspection Code",
      "API 653 Tank Inspection Code",
      "API 580 Risk-Based Inspection",
      "ISO 9712 (qualified-personnel assignment)",
      "OSHA 1910 (permit-required confined space and radiation safety coordination)"
    ],
    "integrations": [
      "Microsoft Outlook / Google Calendar sync",
      "IBM Maximo work order generation",
      "Primavera P6 for client turnaround master schedule import",
      "Mobile field app for technician job acceptance and status updates",
      "GPS / crew location tracking for remote and offshore mobilization"
    ],
    "roi": "Firms scheduling turnarounds through the module report fewer missed inspection windows because RBI-driven due dates populate the calendar automatically instead of depending on a planner remembering to check a spreadsheet. Certification-matched assignment eliminates the risk of dispatching an unqualified technician, a common source of client-rejected jobs and rework. Crew utilization improves measurably during multi-site operation because overlapping demand is visible on one master calendar, letting schedulers rebalance technicians across sites rather than over-booking one location while another sits under-resourced.",
    "faqs": [
      [
        "What should inspection company scheduling and crew dispatch software check before allowing a technician assignment?",
        "Certification, at minimum. Assignment pulls live from the certification tracking module, so a technician whose PAUT certification has lapsed or who lacks the specific scheme (ASNT vs. PCN vs. CSWIP) a client specification requires simply won't appear as an eligible option for that job."
      ],
      [
        "How does it handle the radiography exclusion-zone conflict during a turnaround?",
        "RT jobs are flagged with their required exclusion radius and timing, and the turnaround scheduling grid blocks overlapping trade activity in that zone during the shot window, then automatically opens the area for other crews once the exclusion period ends."
      ],
      [
        "Can a client see the inspection schedule for their turnaround directly?",
        "Yes, through a client-facing view showing scheduled inspection milestones and completion status for their scope of work, without exposing internal crew assignment details for other clients."
      ]
    ]
  },
  "inventory-management": {
    "headline": "Inventory Management for consumables, radioactive sources, and NDT equipment fleets",
    "overview": "The inventory management module tracks three distinct categories an NDT inspection company depends on: consumables (couplant, MT yoke powder, PT dye penetrant and developer, RT film or CR imaging plates), radioactive sources used for gamma radiography, and the capital equipment fleet (UT/PAUT instruments, crawlers, X-ray/gamma projectors, MT/PT kits). Each category carries its own tracking logic — consumables trigger reorder points based on burn rate and upcoming job demand, sources carry activity, transport, and security records, and fleet equipment ties to the calibration management module for cal-status-gated checkout. Batch and lot numbers on consumables like RT film and PT dye are logged against certificates of conformance, so a batch quality issue can be traced to every job it was used on. Reorder alerts factor in upcoming scheduled jobs from the inspection scheduling module, so consumable stock is replenished ahead of a known turnaround demand spike rather than reactively after a shortage halts a crew.",
    "ndtAngle": "RT film and computed radiography (CR) plate batches are tracked against ASTM E1815/E1742 film-processing and imaging quality requirements, with lot traceability back to source certificates. MT and PT consumables (fluorescent particles, penetrant, developer) are logged against batch performance verification required under ASTM E1444 and ASTM E1417 before use on client work. Radioactive source inventory carries DOT 49 CFR transport documentation, security seal logs, and the leak-test schedule mandated under sealed-source licensing, keeping shipping-container custody records defensible during regulatory inspection of the company's radiography operations.",
    "capabilities": [
      "Separate tracking logic for consumables, radioactive sources, and capital equipment fleet",
      "Batch/lot number tracking for RT film, CR plates, MT/PT consumables tied to certificates of conformance",
      "Reorder-point alerts weighted against upcoming scheduled job demand from inspection scheduling",
      "Radioactive source register with activity, transport manifest, and security seal logging",
      "Equipment fleet check-out/check-in via barcode or RFID scan, gated by calibration status",
      "Batch performance verification logging for MT/PT consumables per ASTM E1444/E1417",
      "Multi-warehouse and mobile-unit (truck stock) inventory visibility across sites",
      "Consumable usage-per-job costing feeding into project management job-cost reporting"
    ],
    "workflow": "Stock levels for consumables are set with minimum reorder thresholds, and the module cross-references upcoming scheduled jobs to flag when projected usage will exceed available stock before a turnaround, prompting purchase orders ahead of the actual shortage. Incoming consumable shipments are logged with lot/batch numbers and certificates of conformance attached, giving full traceability if a batch issue is later identified. Equipment checkout for a field job requires a barcode scan, which the system cross-validates against current calibration status before releasing the item — an item due for calibration is blocked from checkout automatically. Radioactive sources are logged out with transport manifest and security documentation for each mobilization, and returned sources trigger the periodic leak-test schedule check. Job-level consumable usage rolls up into project costing so actual material cost per job is visible against the original estimate.",
    "compliance": [
      "DOT 49 CFR (transport of radioactive materials)",
      "10 CFR 34 / NRC sealed-source licensing",
      "ASTM E1444 (magnetic particle testing)",
      "ASTM E1417 (liquid penetrant testing)",
      "ASTM E1815 / E1742 (radiographic film/imaging quality)",
      "ISO 9001:2015",
      "API RP 577"
    ],
    "integrations": [
      "Barcode / RFID scanning hardware",
      "Calibration-management module for equipment cal-status gating",
      "IBM Maximo for spare parts and equipment records",
      "Vendor procurement portals for automated purchase order generation",
      "Mobile field app for on-site consumable usage logging"
    ],
    "roi": "Firms report reducing job-delaying stockouts of critical consumables by tying reorder alerts directly to upcoming scheduled demand instead of relying on manual stock checks. Batch traceability on RT film and MT/PT consumables lets QA isolate and address a supplier quality issue to the specific jobs affected within minutes rather than a broad, costly recall of unaffected work. Equipment fleet visibility also reduces lost or misplaced instrument write-offs because every checkout is logged against a specific technician and job rather than tracked informally.",
    "faqs": [
      [
        "Can it flag when RT film or MT/PT consumable stock will run short before a scheduled turnaround?",
        "Yes. Reorder logic checks projected consumption against jobs already on the inspection scheduling calendar, flagging a shortfall with enough lead time to place a purchase order before the turnaround date, not after stock is already depleted."
      ],
      [
        "How is radioactive source custody documented for regulatory purposes?",
        "Each source checkout logs the transport manifest, security seal number, responsible technician, and destination, and return triggers the periodic leak-test check, building the custody trail regulators expect to see during a sealed-source license inspection."
      ],
      [
        "Does equipment checkout really block items that are due for calibration?",
        "Yes. Scanning an instrument for checkout cross-checks its status in the calibration-management module in real time, and any instrument overdue or approaching its due date within the job's field duration is blocked or flagged before it leaves the shop."
      ]
    ]
  },
  "project-management": {
    "headline": "Project Management for multi-site inspection contracts and turnaround mobilizations",
    "overview": "The project management module manages the commercial and operational execution of inspection contracts, from a single-site API 653 tank inspection to a multi-week, multi-crew turnaround mobilization spanning several client facilities. Each project carries its scope of work against the governing contract or purchase order, tracked as either time-and-materials or lump-sum billing, with change orders logged separately when scope expands beyond the original agreement. Job costing rolls up labor hours (from technician timesheets), consumables usage (from inventory management), equipment costs, and travel/per-diem expenses against budget in real time, so a project manager sees margin erosion during execution rather than after final invoicing. Milestone billing schedules align invoicing triggers to contract terms — percentage of scope complete, specific deliverable acceptance, or turnaround phase completion — rather than a single lump invoice at project close. Multi-site projects show crew allocation across locations simultaneously, critical for firms running concurrent turnarounds at different client facilities during peak outage season.",
    "ndtAngle": "Turnaround (TAR) and shutdown projects are the highest-stakes execution the module handles, coordinating multi-method crews (UT, PAUT, MT, PT, RT teams working in parallel) against a fixed outage window where schedule slippage carries real financial penalty exposure for the client. Remote and offshore mobilizations — refinery turnarounds, platform inspections — carry travel, lodging, and per-diem cost structures distinct from local day-rate jobs, and the module tracks these separately from inspection labor cost for accurate project margin visibility. Crew qualification records from certification tracking are referenced at the project level to confirm the mobilized team meets the client's specified method and scheme requirements before mobilization is finalized.",
    "capabilities": [
      "Real-time job costing rolling up labor, consumables, equipment, and travel against budget",
      "Time-and-materials vs. lump-sum contract tracking with distinct billing logic for each",
      "Change order management logging scope additions separately from original contract value",
      "Milestone-based billing schedule aligned to contract deliverable or phase completion",
      "Multi-site crew allocation view for concurrent projects across different client facilities",
      "Turnaround mode coordinating multi-method crew mobilization against a fixed outage window",
      "Remote/offshore cost tracking (travel, lodging, per-diem) separated from base inspection labor",
      "Project-level crew qualification verification pulling from certification tracking before mobilization"
    ],
    "workflow": "A project is opened from an awarded contract or purchase order, with scope of work, budget, and billing terms (T&M or lump-sum) established at kickoff. As technicians log field hours and consumables are drawn from inventory against the project, costs accrue in real time against the budget baseline, visible to the project manager throughout execution rather than only at closeout. Any scope addition beyond the original agreement is logged as a change order with client approval attached before additional cost is billed against it. Milestone billing triggers generate invoices as contracted phases complete — for example, upon acceptance of the inspection report package for a completed unit during a turnaround. At project close, a final cost-to-budget reconciliation report is generated, feeding into the firm's overall project profitability analysis across the client portfolio.",
    "compliance": [
      "ISO 9001:2015",
      "API Spec Q1 / API Spec Q2",
      "Client Master Service Agreement (MSA) terms",
      "OSHA / vendor safety prequalification (ISNetworld, Avetta)",
      "ASNT SNT-TC-1A crew qualification documentation"
    ],
    "integrations": [
      "SAP S/4HANA (project accounting)",
      "Oracle EBS",
      "Primavera P6 (turnaround master schedule)",
      "Odoo Project and Timesheet modules",
      "Client vendor portals (ISNetworld, Avetta) for prequalification status"
    ],
    "roi": "Project managers report catching margin erosion during execution rather than at invoicing once real-time cost roll-up replaces end-of-project reconciliation, allowing corrective staffing or scope decisions while the project is still active. Change order discipline — logging scope additions before work proceeds rather than after — reduces disputed billing with clients and improves realized margin on expanded-scope turnaround work. Multi-site visibility also reduces crew double-booking incidents during peak turnaround season, when several concurrent projects compete for the same certified technicians.",
    "faqs": [
      [
        "Does inspection company invoicing and project profitability software handle both time-and-materials and lump-sum contracts in the same portfolio?",
        "Yes. Each project is configured with its billing type at setup, and cost roll-up, invoicing triggers, and margin reporting apply the correct logic for that contract structure independently of how other concurrent projects are billed."
      ],
      [
        "How does it prevent double-booking a certified technician across two concurrent turnarounds?",
        "Project-level crew allocation is visible across all active projects simultaneously, and assignment pulls from the same real-time availability and certification data used by inspection scheduling, so a technician already committed to one project shows as unavailable for another."
      ],
      [
        "Does the module handle offshore or remote-site cost tracking differently than local jobs?",
        "Yes. Travel, lodging, and per-diem costs for remote or offshore mobilizations are tracked as separate cost categories from base inspection labor, giving accurate margin visibility on jobs where logistics costs are a significant share of total project expense."
      ]
    ]
  },
  "quality-management": {
    "headline": "Quality Management for ISO 9001 and API Spec Q1/Q2 accredited NDT operations",
    "overview": "The quality management module operates as the central QMS engine tying together document control, audit findings, nonconformance handling, and management review for an accredited NDT inspection company. Nonconformances — whether raised from an internal audit, a client complaint, a failed independent report review, or a field incident — route into a common CAPA workflow with root-cause analysis, corrective action assignment, and closure verification. Customer complaints are logged as a distinct category with response-time tracking against contractual or client-specific service commitments. KPI dashboards track quality metrics specific to inspection services: report review rejection rate, on-time report delivery, repeat nonconformance rate by technician or department, and client complaint trend by account. Management review meetings pull a consolidated package of these KPIs, open CAPA status, and audit summary directly from the module rather than requiring a QA manager to manually assemble a review deck each cycle. The module gives ownership over the entire quality loop — from the moment a nonconformance is raised through its root cause, correction, and effectiveness verification.",
    "ndtAngle": "The module is structured around API Spec Q1 and Q2 quality system requirements specific to service providers to the oil and gas industry, including the independent report review step many client specifications mandate before an inspection report is released — a second, qualified reviewer's sign-off recorded against the report before issue. ASNT SNT-TC-1A written practice governance and technician performance data (report rejection rate, repeat findings by individual) feed the same nonconformance and CAPA system used for broader QMS issues, giving the NDT Level III visibility into whether a specific technician's error pattern requires retraining rather than treating each incident in isolation.",
    "capabilities": [
      "Unified nonconformance workflow covering audit findings, client complaints, and report review rejections",
      "Root-cause analysis and CAPA assignment with effectiveness verification before closure",
      "Independent report review sign-off tracking (second-reviewer approval before report issue)",
      "Customer complaint log with response-time tracking against contractual service commitments",
      "Repeat-finding trend analysis by technician, department, and inspection method",
      "KPI dashboard: report rejection rate, on-time delivery rate, complaint trend, CAPA closure rate",
      "Management review package auto-compiled from live audit, CAPA, and complaint data",
      "Technician performance pattern flagging for targeted retraining recommendations"
    ],
    "workflow": "A quality issue — a failed independent report review, a client complaint, an audit finding, or a field incident — is logged into the nonconformance system with severity classification and immediate containment action if applicable. The assigned owner conducts root-cause analysis and defines a corrective action with a target closure date, and any preventive action needed to stop recurrence elsewhere in the operation. Before closure, evidence of the corrective action's effectiveness is required — a revised procedure, a retraining record, or a corrected report reissue. Repeat findings by the same technician or on the same nonconformance type trigger a pattern flag visible to the NDT Level III and QA manager. On a scheduled cadence, the quality dashboard and open CAPA summary compile automatically into the management review package, giving leadership current KPI trends without manual data assembly ahead of each review meeting.",
    "compliance": [
      "ISO 9001:2015",
      "API Spec Q1",
      "API Spec Q2",
      "ISO/IEC 17020:2012",
      "ASNT SNT-TC-1A",
      "NADCAP (for aerospace NDT operations)",
      "ISO 45001"
    ],
    "integrations": [
      "Audit-management module (shared CAPA workflow)",
      "Document-control module (procedure references in root-cause findings)",
      "Client complaint and QA communication portals",
      "Power BI / BI reporting tools for KPI dashboard export",
      "DocuSign for report review and CAPA sign-off"
    ],
    "roi": "Firms report faster CAPA closure and fewer repeat nonconformances once root-cause and effectiveness-verification steps are enforced structurally rather than left to individual discretion. Client complaint response times improve measurably when tracked against explicit service-level commitments rather than handled ad hoc through email. Management review preparation time drops substantially because the KPI package compiles automatically from live data instead of a QA manager manually building slides each quarter, and report rejection rates typically decline once independent review sign-off is a hard gate rather than an informal step.",
    "faqs": [
      [
        "How is the mandatory independent report review handled — is it enforced or just tracked?",
        "It's enforced as a hard gate: a report cannot move to client-issued status until a qualified second reviewer's sign-off is recorded in the system, satisfying the independent-review requirement many client specifications and API Spec Q1/Q2 call for."
      ],
      [
        "Can the module identify if one technician is generating a disproportionate share of nonconformances?",
        "Yes. Repeat-finding trend analysis is filterable by technician, method, and nonconformance type, surfacing patterns that indicate a need for targeted retraining rather than isolated one-off corrective actions."
      ],
      [
        "What should NDT quality management system software cover for an API Spec Q1 or Q2 certification audit?",
        "A compiled KPI history, CAPA closure evidence, and management review records that map directly to the documented-evidence expectations of an API Spec Q1/Q2 audit, replacing the manual compilation typically needed to prepare for that assessment."
      ]
    ]
  },
  "work-order-management": {
    "headline": "Work Order Management for field inspection job dispatch and mobile data capture",
    "overview": "The work order management module converts a scheduled inspection into an executable field job: a work order carrying the asset, required method and code, assigned technician, equipment checked out, and a mobile data-capture form matched to the inspection type. Technicians use an offline-capable mobile app to log UT thickness grid readings, upload PAUT scan files, record MT/PT indications with photo evidence, or complete an RT exposure shot sheet, all tied to the specific work order and asset in real time or synced once connectivity returns. Digital signatures capture technician sign-off in the field and client representative witness sign-off where required, eliminating paper field sheets that need re-keying back at the office. Completed work orders auto-generate the inspection report from captured field data using the client's approved template, then route through the independent review step before release. Work order closeout ties directly to invoicing, so completed and reviewed jobs flow straight into billing without a separate manual handoff.",
    "ndtAngle": "Field data capture is built around the actual artifacts each method produces: UT thickness readings against CML grid points, PAUT scan file upload with linked calibration record reference, MT/PT indication logging with photographic evidence per ASTM E1444/E1417 acceptance criteria, and RT shot sheets recording source, exposure time, and film/CR identification for chain-of-custody under radiation safety requirements (OSHA 1910.1096). Every captured reading auto-populates back into the corrosion-tracking CML history and the asset's inspection timeline, so field execution and long-term asset data stay connected rather than requiring a separate data-entry step after the report is issued.",
    "capabilities": [
      "Offline-capable mobile app for field data capture with automatic sync on reconnection",
      "Method-specific capture forms (UT grid readings, PAUT scan upload, MT/PT indication log, RT shot sheet)",
      "Digital signature capture for technician sign-off and client witness sign-off in the field",
      "Auto-generated inspection report from captured data using the client's approved template",
      "Direct linkage of captured readings back into corrosion-tracking CML history and asset timeline",
      "Work order closeout gated by independent report review before status moves to invoiceable",
      "Equipment and consumable usage logged per work order, tied to calibration and inventory modules",
      "Photo and GPS-tagged evidence capture for indications, repairs, and site conditions"
    ],
    "workflow": "A work order is generated from the inspection scheduling calendar with the asset, method, code, and assigned technician pre-populated. The technician receives the job on the mobile app, checks out required equipment (validated against current calibration status), and travels to site — where the app functions fully offline if connectivity is unavailable, syncing all captured data once a signal returns. Field data is entered directly into the method-specific form: thickness readings against CML points, PAUT files, MT/PT indications with photos, or an RT shot sheet with source and exposure details. On completion, the technician and, where required, a client witness sign digitally in the field. Back at the office, the captured data auto-populates the client's report template, the report proceeds through independent review per the quality management workflow, and upon approval the work order closes and flows into project invoicing.",
    "compliance": [
      "API 510 / API 570 / API 653",
      "ASME BPVC Section V",
      "ISO 9712",
      "OSHA 1910.1096 (ionizing radiation)",
      "ISO 9001:2015",
      "ASNT SNT-TC-1A"
    ],
    "integrations": [
      "Mobile field app (iOS/Android, offline-first sync)",
      "IBM Maximo work order and asset sync",
      "Client CMMS platforms",
      "Odoo Accounting / invoicing module",
      "Calibration-management module (equipment status validation at checkout)"
    ],
    "roi": "Firms using mobile field capture report cutting report turnaround time significantly by eliminating the paper-to-digital re-keying step between field data collection and report generation. Data entry errors introduced during manual transcription drop close to zero once readings are captured directly into the digital record on site. Work order closeout tied automatically to invoicing shortens the cash-conversion cycle by removing the manual handoff delay between completed field work and the billing team issuing an invoice.",
    "faqs": [
      [
        "Does the mobile app work at remote sites with no cell signal, like offshore platforms or remote pipeline right-of-way?",
        "Yes. The app captures and stores all field data locally in offline mode and syncs automatically once the device reconnects to a network, so remote or low-connectivity sites don't interrupt data capture."
      ],
      [
        "Can a client representative sign off on a report in the field before the technician leaves site?",
        "Yes, where the client requires witnessed sign-off, a digital signature capture step is included in the field workflow, recording the client representative's acceptance alongside the technician's completion sign-off."
      ],
      [
        "How does field-captured data connect to the long-term corrosion trending for that asset?",
        "Thickness readings and scan data captured through a work order write directly into the corresponding CML records in the corrosion-tracking module, so the reading becomes part of that location's trend history immediately rather than through a separate manual update."
      ]
    ]
  }
};
