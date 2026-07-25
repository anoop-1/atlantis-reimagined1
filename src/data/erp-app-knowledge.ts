// Ultra-rich per-app ERP knowledge. Rendered by ErpIndustryAppPage. Auto-built 2026-07-24.
export interface AppKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const appKnowledge: Record<string, AppKnowledge> = {
  "accounting": {
    "headline": "Multi-currency job costing and WIP accounting built for inspection work orders",
    "overview": "Odoo Accounting configured for NDT firms handles the accounting reality of project-based inspection services: multi-currency invoicing across mobilizations in different countries, work-order-level cost tracking (labor hours by technician, per-diem, calibrated equipment rental, consumables like couplant/film/dye penetrant), and WIP (work-in-progress) revenue recognition for multi-week turnaround/shutdown inspection campaigns. Each inspection work order maps to an analytic account so job costing (technician day-rate, travel, equipment depreciation, subcontracted NDT services) rolls up automatically against invoiced revenue, giving real-time margin visibility per contract, per client, per asset. Supports progress billing/milestone invoicing common in EPC and turnaround contracts, retention withholding, and back-charge tracking against vendor NDT subcontractors. Bank reconciliation and multi-entity consolidation cover firms with legal entities in multiple countries, and intercompany invoicing between them. Automated tax handling supports VAT-registered GCC operations and US sales/use tax. Real-time dashboards break out revenue by inspection method (UT, RT, PAUT, TOFD), asset class (piping, pressure vessels, storage tanks), and client segment (refinery, EPC, marine) so leadership sees where margin is actually made, not just aggregate revenue.",
    "ndtAngle": "Every inspection work order — a UT thickness survey campaign, a PAUT weld scan package, an API 653 tank floor scan — becomes a costed job. Analytic accounting ties technician certification level (Level II/III day rates differ), calibration block usage, and film/chemical consumables directly to the client PO, so margin erosion on scope creep (extra CMLs, added welds, RT retakes) is visible before invoicing, not after. WIP accounting handles the reality that a turnaround inspection campaign spans weeks with data captured daily but invoiced at completion or by milestone, preventing revenue recognition disputes during year-end audits.",
    "capabilities": [
      "Analytic accounting tied 1:1 to each inspection work order/PO for real-time job margin",
      "Multi-currency invoicing for cross-border mobilizations (USD, SAR, INR, AED)",
      "WIP/percentage-of-completion revenue recognition for multi-week turnaround campaigns",
      "Progress/milestone billing and retention tracking for EPC and shutdown contracts",
      "Automated technician day-rate and per-diem cost allocation by certification level",
      "Consumables costing (couplant, RT film, penetrant/developer, calibration blocks) per job",
      "Multi-entity consolidation for firms operating US, India, and Middle East legal entities",
      "VAT/GCC tax compliance and US sales-tax automation with jurisdiction-aware rules"
    ],
    "workflow": "A project manager opens a work order in Project Management, which auto-creates a linked analytic account. As technicians log field hours and consumables against the job (via Field Service or timesheets), costs post to that analytic account in real time. Procurement of calibration services or subcontracted RT film processing posts vendor bills against the same account. When inspection deliverables (reports) are approved in Document Control, Accounting triggers milestone or completion invoicing per the contract terms — full invoice, progress draw, or retention-adjusted. Finance reviews a live job-margin dashboard before invoice approval, catching scope creep or under-billed extras. At month-end, WIP is automatically rolled to revenue based on percentage-of-completion, and multi-entity consolidation produces a single management P&L across country operations.",
    "compliance": [
      "ISO 9001:2015 (financial process control for QMS)",
      "IFRS 15 / ASC 606 revenue recognition",
      "GCC VAT compliance",
      "US GAAP multi-entity consolidation",
      "SOX-aligned segregation of duties (for firms serving public-company EPCs)",
      "API contract billing terms compliance"
    ],
    "integrations": [
      "SAP S/4HANA (client vendor invoicing portals)",
      "Oracle EBS",
      "Client e-invoicing/PO portals (Ariba, Coupa)",
      "Bank feeds (Plaid/direct bank APIs)",
      "Payroll module (technician cost allocation)"
    ],
    "roi": "Firms consolidating job costing into Accounting typically cut month-end close from 10-12 days to 3-4, because WIP and analytic postings happen continuously instead of via spreadsheet reconciliation. Real-time margin visibility per work order has caught scope-creep write-offs worth 3-6% of contract value before invoicing on turnaround jobs. Multi-entity consolidation eliminates 15-20 hours/month of manual currency-translation and intercompany elimination work for firms with US plus Middle East/India operations.",
    "faqs": [
      [
        "Can it handle progress billing on a multi-month shutdown inspection contract with retention withheld?",
        "Yes. Milestone-based invoicing is configured against the contract schedule, retention is tracked in a dedicated liability account, and it's released automatically on final client acceptance or per the contract's release terms."
      ],
      [
        "How does job costing distinguish a Level III supervisor's time from a Level II technician's on the same work order?",
        "Timesheet entries are tagged to an employee cost category linked to certification level, so different labor cost rates roll up separately within the same work order's analytic account, keeping margin analysis accurate even on mixed-crew jobs."
      ],
      [
        "Does it support VAT-compliant e-invoicing for GCC-based inspection contracts?",
        "Yes, through Odoo's country localization packages, which automate jurisdiction-specific VAT/e-invoice formats such as Saudi ZATCA Fatoora, keeping invoicing compliant without manual format handling."
      ]
    ]
  },
  "cmms": {
    "headline": "CMMS for calibrated equipment and probe fleets — traceable to ISO 17025",
    "overview": "Odoo's Maintenance module configured as a CMMS for NDT equipment fleets tracks every UT flaw detector, PAUT phased array unit, RT crawler, MPI yoke, radiation source, and probe/transducer as a maintenance-managed asset with its own calibration schedule, service history, and out-of-service status. Preventive maintenance plans are triggered by calibration due-date (not just runtime hours), auto-generating work orders that block equipment from being assigned to a field job once its calibration certificate lapses. Each asset carries a full maintenance and calibration history — traceable to a calibration standard/reference block, calibration lab, and certificate number — satisfying ISO 17025 traceability requirements auditors specifically check. Corrective maintenance requests can be raised directly from the field (a technician flags a damaged probe cable or a crawler with erratic encoder readings), creating a work order routed to the equipment custodian. Spare parts (probes, cables, batteries, source capsules) are tracked against each maintenance work order and linked to Inventory for reorder triggers. Dashboards flag equipment approaching calibration expiry, equipment out of service, and mean-time-between-failure by asset class, giving equipment managers a fleet-wide readiness view before mobilizing crews to a job.",
    "ndtAngle": "This is the difference between a generic asset register and an NDT-fit CMMS: equipment records carry NDT-specific attributes — probe frequency/angle, source activity and decay curve for gamma sources, couplant compatibility, calibration reference block ID — and the system enforces that a probe or flaw detector cannot be scheduled onto a work order (via Field Service) if its calibration certificate has expired or is within a configurable grace window. This directly prevents the single most common ISO 17025 and API 510/570/653 audit finding: field use of equipment with lapsed calibration traceability.",
    "capabilities": [
      "Calibration-due preventive maintenance triggers (not just usage-hour based)",
      "Hard block on assigning equipment to field work orders when calibration has lapsed",
      "Full traceability chain per asset: calibration lab, reference standard, certificate number",
      "Radiation source inventory tracking with decay-curve and leak-test scheduling",
      "Field-raised corrective maintenance requests with photo attachment from mobile",
      "Probe/transducer sub-asset tracking nested under parent flaw-detector units",
      "Spare parts consumption linked to Inventory reorder points (cables, couplants, batteries)",
      "Fleet readiness dashboard: assets in-cal, expiring in 30/60/90 days, out-of-service"
    ],
    "workflow": "Every piece of NDT equipment is onboarded as a maintenance asset with a calibration interval (e.g., annual for UT flaw detectors per manufacturer spec, quarterly for reference blocks). The system auto-generates a calibration work order X days before due date, routed to the equipment custodian or an approved third-party cal lab. Once calibration is completed and a certificate uploaded, the asset's status resets and its next due date recalculates. When a project manager builds a crew mobilization in Field Service, the system checks every assigned instrument's calibration status and blocks non-compliant equipment automatically. Field technicians can also raise ad hoc maintenance tickets from the mobile app when equipment malfunctions on site, attaching photos, which routes to the equipment team and can trigger an emergency replacement dispatch from Inventory.",
    "compliance": [
      "ISO 17025 (calibration traceability)",
      "ISO 9712 / SNT-TC-1A (equipment qualification for personnel certification audits)",
      "API 510/570/653 (calibrated equipment requirement for code inspections)",
      "ASME BPVC Section V",
      "ISO 9001:2015 equipment control clause",
      "Radiation safety regulations (NRC/state agreement-state rules for source tracking)"
    ],
    "integrations": [
      "Calibration lab management systems/portals",
      "Inventory Management (spares reorder)",
      "Field Service (equipment assignment blocking)",
      "Document Control (calibration certificate archive)",
      "IBM Maximo / GE APM (client-side asset systems for co-managed equipment)"
    ],
    "roi": "Firms report a 90%+ reduction in equipment-used-past-calibration-due-date audit findings once the hard-block rule is enforced at job assignment. Preventive-calibration scheduling has cut emergency recalibration costs and job delays by catching lapses before mobilization rather than on-site. Equipment utilization visibility typically recovers 10-15% more billable equipment-days per quarter by eliminating lost-track-of-unit downtime.",
    "faqs": [
      [
        "Can the CMMS track radioactive source decay and leak-test schedules for RT crews?",
        "Yes. Source activity decay curves and periodic leak-test schedules are tracked per source, with automatic alerts ahead of required test dates and activity thresholds."
      ],
      [
        "What happens if a technician tries to book equipment with an expired calibration cert onto a field job?",
        "The system blocks the assignment outright, forcing selection of an in-calibration alternative unit or triggering an emergency calibration work order before the job can proceed."
      ],
      [
        "Does it distinguish between third-party calibration labs and in-house calibration?",
        "Yes. A custodian/vendor field on each calibration work order records who performed the calibration, and the resulting certificate is scanned and archived either way, preserving full traceability."
      ]
    ]
  },
  "crm": {
    "headline": "Inspection-job pipeline built for RFQ-to-quote on UT, RT, and PAUT scopes",
    "overview": "Odoo CRM configured for NDT service providers replaces generic sales-pipeline stages with an inspection-specific pipeline: RFQ Received, Scope Review, Quote Issued, Technical Clarification, Award, Mobilization Handoff. Each opportunity carries structured fields for inspection method(s) requested (UT, RT, MT, PT, ET, PAUT, TOFD), asset type (piping, pressure vessel, storage tank, structural steel), applicable code (API 510/570/653, ASME Section V/VIII), estimated crew-days, and client asset-owner details separate from the immediate contracting client (important when quoting through an EPC or staffing broker). Quotes generate directly from opportunity data with method-specific line items and can attach technical procedures for client review. Win/loss tracking captures reason codes specific to the industry (lost on day-rate, lost on certification requirement, lost on equipment availability, lost on schedule conflict), which feeds back into pricing and capacity-planning decisions. Client and asset-owner records maintain full site history — every prior inspection, asset ID, and recurring inspection interval — so account managers see upcoming re-inspection cycles as automatic renewal opportunities, not cold leads.",
    "ndtAngle": "A refinery turnaround RFQ isn't a generic sales deal — it specifies method mix, code basis, crew certification levels required (often client-mandated minimum Level II or III), and asset criticality. The CRM captures this scope data structurally so quoting is consistent and technically defensible, and so historical win-rate analysis can show, for instance, that PAUT-heavy scopes win at a different rate than conventional UT scopes. Recurring statutory inspection cycles (API 510 internal every 10 years, API 653 out-of-service every 10-20 years) auto-populate as future opportunities against each asset record, turning compliance-driven client obligations into a proactive pipeline instead of relying on the client to remember to re-tender.",
    "capabilities": [
      "Inspection-method and code-basis structured fields on every opportunity (not free text)",
      "Auto-generated re-inspection opportunities from statutory interval tracking (API 510/653 cycles)",
      "Separate asset-owner vs. contracting-client records for EPC/broker-mediated deals",
      "Method-specific quote templates with procedure/technique attachment",
      "Industry-specific loss-reason tracking (day-rate, cert requirement, equipment, schedule)",
      "Crew-days and equipment-availability check integrated into quote generation",
      "Client site/asset history visible on every account (full inspection lineage)",
      "Pipeline stage automation triggering mobilization handoff to Project Management on award"
    ],
    "workflow": "An RFQ arrives (email, portal, or phone) and is logged as an opportunity with method, asset, code, and site location captured up front. The estimator checks crew and equipment availability (cross-referenced with CMMS calibration status and HR scheduling) before issuing a quote, ensuring quoted mobilization dates are realistic. The quote is generated with method-specific pricing line items and technical procedure attachments, then tracked through client clarification rounds. On award, the opportunity converts directly into a Project Management work order and Field Service mobilization plan, carrying over all scope data with no re-entry. Lost opportunities are tagged with a specific reason code, feeding quarterly win-rate reviews by method and client segment. Asset records with statutory re-inspection intervals automatically spawn a new pipeline opportunity ahead of the due date.",
    "compliance": [
      "API 510/570/653 (recurring inspection interval tracking)",
      "ISO 9712 (crew certification level matching to client requirements)",
      "ASME Section V/VIII scope alignment",
      "ISO 9001:2015 (contract review clause 8.2)",
      "Client vendor pre-qualification/approved-vendor-list tracking"
    ],
    "integrations": [
      "Client vendor portals (SAP Ariba, Coupa for RFQ receipt)",
      "Project Management (award-to-work-order handoff)",
      "HR & scheduling (crew/certification availability check)",
      "CMMS (equipment availability check at quoting stage)",
      "Email/Outlook sync for RFQ capture"
    ],
    "roi": "Structured method/code fields on opportunities have cut quote turnaround from 3-5 days to same-day/next-day for repeat clients by eliminating scope re-clarification cycles. Auto-generated re-inspection opportunities from statutory intervals have recovered renewal business previously lost to competitors who out-tendered clients that forgot their own inspection due dates — one mid-size firm reported 18% of annual revenue traced to CRM-triggered re-inspection reminders. Loss-reason analytics have redirected estimating strategy on day-rate-sensitive segments, improving win rate 6-9 points on competitive conventional-UT bids.",
    "faqs": [
      [
        "Can the CRM track which client requires Level III sign-off vs Level II for report approval?",
        "Yes. A certification requirement field on the opportunity/client record is cross-checked against HR certification data at both quoting and scheduling, so mismatches surface before commitment."
      ],
      [
        "How does it handle RFQs that come through an EPC on behalf of an asset owner we've never directly contracted with?",
        "Separate asset-owner and contracting-client entities are linked on the opportunity, and full site inspection history is retained against the asset owner even as the contracting party changes over time."
      ],
      [
        "Does it flag upcoming re-inspection deadlines automatically?",
        "Yes. Based on the last inspection date plus the code-mandated interval per asset, a new opportunity is auto-created ahead of the due date with a configurable lead time."
      ]
    ]
  },
  "inventory-management": {
    "headline": "Consumables and calibrated-asset inventory control across multi-site NDT operations",
    "overview": "Odoo Inventory configured for NDT firms manages two very different inventory realities under one system: high-turnover consumables (RT film, developer/fixer chemicals, dye penetrant and developer aerosols, couplant gel, MPI magnetic particles, UT reference blocks) and serialized high-value calibrated assets (flaw detectors, phased array units, crawlers, radiography cameras) that must never be treated as fungible stock. Consumables use standard reorder-point/min-max replenishment per warehouse or regional office, with lot tracking on chemical batches for expiry management, since film and penetrant chemicals degrade and shelf life affects indication sensitivity. Serialized equipment uses unique serial tracking integrated with the CMMS calibration record, so a specific probe or crawler's location, custody, and calibration status are always known — critical when equipment is dispatched across job sites or between country offices. Multi-warehouse/multi-location structure supports a home base plus site-container/field-office stock, with transfer orders tracking equipment and consumables moving to a turnaround or shutdown job and back. Barcode/QR scanning speeds field check-in/check-out of both consumables and serialized gear via mobile.",
    "ndtAngle": "RT film and chemical shelf life directly affects radiographic sensitivity and re-shoot rates — lot/batch expiry tracking here isn't generic warehouse hygiene, it prevents a crew discovering expired film mid-shutdown with no backup. Serialized tracking of calibrated instruments tied to the CMMS means a project manager mobilizing a PAUT crew to a remote site can see, in real time, which specific unit (by serial number, with current cal status) is available, not just a generic count of PAUT units. Source container inventory for RT crews also tracks radiation source custody chain, a regulatory requirement independent of stock value.",
    "capabilities": [
      "Serialized tracking for calibrated instruments linked live to CMMS calibration status",
      "Lot/batch expiry tracking for RT film, penetrant chemicals, MPI particles",
      "Multi-warehouse structure: home base, regional office, active job-site container stock",
      "Barcode/QR mobile check-in/check-out for field equipment custody",
      "Automated min-max reorder points per consumable, per location",
      "Transfer order tracking equipment/consumables to and from turnaround job sites",
      "Radiation source custody chain tracking (container, location, responsible technician)",
      "Landed-cost tracking for imported specialty equipment/probes (customs, freight)"
    ],
    "workflow": "Consumables and equipment are received into the home-base warehouse with lot numbers (chemicals) or serial numbers (instruments) captured at receipt. When a project mobilizes, Field Service generates a transfer/pick list pulling required consumables and specific serialized instruments (auto-filtered to in-calibration units by the CMMS integration) into a job-site stock location. Technicians scan equipment out via mobile at mobilization and back in at demobilization, updating custody and location in real time. Consumable usage is logged against the work order (for job costing in Accounting) and depletes stock, triggering reorder when it crosses the min threshold. Expiring film/chemical lots are flagged 30-60 days out so procurement can rotate stock on a first-expired-first-out basis before a job discovers unusable material on site.",
    "compliance": [
      "ISO 9001:2015 (material control, traceability of consumables affecting product/service quality)",
      "ISO 17025 (traceability of reference standards and consumables used in calibration/testing)",
      "Radiation source regulatory custody tracking",
      "ASME Section V film/chemical qualification requirements",
      "ISO 3059/ASTM E165 (PT/MT material specification traceability)"
    ],
    "integrations": [
      "CMMS (live calibration status filtering for serialized picks)",
      "Field Service (mobilization pick lists)",
      "Accounting (consumable cost allocation to work orders)",
      "Purchase/vendor portals for film and chemical suppliers",
      "Document Control (batch certificates of conformance archive)"
    ],
    "roi": "Lot-expiry tracking has eliminated on-site discovery of expired RT film/chemicals as a cause of shutdown delays — one firm cut chemical-related re-shoot incidents to near zero after implementation. Real-time serialized equipment visibility across sites reduced could-not-locate-the-unit mobilization delays by an estimated 2-3 hours per job on average. Multi-location transfer tracking cut equipment loss/write-off rates by roughly 30% by making custody accountability visible end-to-end.",
    "faqs": [
      [
        "Can we track which specific probe serial number was used on a given weld scan for traceability?",
        "Yes. The serial number is captured against the work order and ties directly into the inspection report and calibration certificate reference, giving a full traceability chain from probe to reported result."
      ],
      [
        "How does it prevent using expired penetrant chemicals in the field?",
        "Lot-level expiry dates are enforced at pick time; expired lots are blocked from selection in the mobile pick list, and expiry alerts are sent well ahead of due-out dates so procurement can rotate stock."
      ],
      [
        "Does it handle equipment stored temporarily at a client site during a long turnaround?",
        "Yes. The client site is modeled as a temporary stock location, with full transfer history and custody maintained throughout the job until the demobilization transfer back to home base."
      ]
    ]
  },
  "project-management": {
    "headline": "Work-order-driven project management for inspection campaigns and turnarounds",
    "overview": "Odoo Project configured for NDT firms structures every inspection engagement as a project containing discrete work orders — one per asset, method, or crew assignment — rather than generic task lists. A turnaround campaign might spawn 40+ work orders (each covering a specific vessel, piping circuit, or weld package) under one parent project, each with its own scope, assigned technicians, equipment, target completion date, and deliverable (inspection report). Gantt views handle the reality of shutdown scheduling where crew and asset access windows are tightly constrained and interdependent. Kanban stages track work orders through Scheduled, Mobilized, Data Capture, Report Draft, QA Review, Client Delivery, mirroring the actual inspection production line rather than a generic sales or development pipeline. Budgets and actuals roll up against the linked Accounting analytic account for live margin tracking per project and per work order. Document Control integration attaches procedures, calibration certificates, and completed reports directly to their work order. Resource views show technician utilization across concurrent projects, preventing double-booking of certified personnel during high-demand shutdown seasons.",
    "ndtAngle": "Turnaround and shutdown inspection work is fundamentally project-based with hard access-window constraints — a vessel might only be open for internal inspection for 48 hours. Structuring each asset/method as its own work order under a parent turnaround project lets a project manager see, at a glance, which of 40 vessels are behind schedule before the unit has to close up, rather than discovering it from a missed report deadline. QA review stages enforce that a Level III reviews and signs every report before client delivery — a hard gate, not an informal check — directly supporting API 510/570/653 and ASNT program requirements for independent report review.",
    "capabilities": [
      "Parent project to per-asset/per-method work order structure for turnaround campaigns",
      "Gantt scheduling accounting for asset access windows and crew availability",
      "Kanban stages mirroring inspection production flow (mobilize, capture, QA, deliver)",
      "Hard QA-review gate requiring Level III sign-off before client delivery stage",
      "Live budget-vs-actual margin tracking per work order via Accounting analytic link",
      "Cross-project technician utilization view preventing certification double-booking",
      "Document Control attachment of procedures/certs/reports directly on work orders",
      "Client portal access showing real-time work-order status without exposing internal data"
    ],
    "workflow": "On contract award (handed off from CRM), a parent project is created with work orders auto-generated per the scoped assets/methods. The project manager assigns technicians by matching required certification level and method qualification (cross-checked against HR/certification records) and schedules against the Gantt, respecting access-window constraints from the client's shutdown schedule. As field data is captured (via Field Service mobile), work orders advance through Kanban stages automatically. Completed report drafts route to the Level III reviewer stage — the work order cannot progress to client delivery without that sign-off logged. Budget vs. actual cost (labor, consumables, equipment) is visible per work order throughout, letting the PM flag scope creep for change-order billing before the job closes. On completion, the client portal reflects final status and the deliverable package is released through Document Control.",
    "compliance": [
      "API 510/570/653 (independent report review requirement)",
      "ASNT SNT-TC-1A / ISO 9712 (Level III sign-off enforcement)",
      "ISO 9001:2015 clause 8.5 (production/service provision control)",
      "ISO 17020 (inspection body impartiality and review requirements)",
      "ASME BPVC Section V documentation requirements"
    ],
    "integrations": [
      "Accounting (analytic account budget/actuals)",
      "HR & certification records (crew qualification matching)",
      "Field Service (mobile data capture status updates)",
      "Document Control (procedure and report attachment)",
      "Client portals for turnaround schedule coordination"
    ],
    "roi": "Structuring turnaround campaigns as per-asset work orders under one project has cut schedule-slippage discovery time from found-at-report-deadline to real-time, recovering an estimated 1-2 mobilization days per campaign by catching access-window conflicts early. The hard QA-review gate has driven independent-review compliance to 100% on audited jobs, versus informal review previously running 70-85% documented compliance. Cross-project utilization visibility reduced Level III double-booking incidents that previously caused late report turnaround by roughly 40%.",
    "faqs": [
      [
        "Can we structure one turnaround as 40+ separate work orders with a shared budget and schedule?",
        "Yes. The parent project holds the shared budget and schedule context while each work order independently tracks its own asset scope, assigned technicians, and deliverable."
      ],
      [
        "Does the system stop a report from going to the client without Level III review?",
        "Yes. The QA-review Kanban stage is a hard gate; work orders cannot be moved to client-delivery status without a logged reviewer sign-off recorded against that stage."
      ],
      [
        "Can clients see live status of their turnaround inspection progress?",
        "Yes, through a scoped client portal view showing work-order status and percent complete per asset, without exposing internal cost data or scheduling detail."
      ]
    ]
  },
  "quality-management": {
    "headline": "QMS workflows for report review, NCR, and CAPA — built for ISO 9001/17020",
    "overview": "Odoo Quality configured for NDT firms manages the quality-control layer that sits on top of every inspection deliverable: non-conformance reports (NCRs) for procedure deviations or report errors, corrective and preventive action (CAPA) tracking, internal audit scheduling, and control-plan-driven quality checks embedded directly into inspection work orders. Quality control points can be defined per method (a mandatory pre-job equipment verification check, a post-job calibration drift check) and triggered automatically at the relevant work-order stage, capturing pass/fail data and photo evidence. NCRs raised on a report finding (wrong technique reference, missed indication, incorrect acceptance criteria applied) route through a structured investigation-root-cause-corrective-action workflow with owner assignment and due dates, and are trended by method, technician, and client to surface systemic issues rather than one-off errors. Internal audit module schedules and tracks findings against ISO 9001, ISO 17020, and client-specific QA programs, feeding a management review dashboard. Document-controlled procedures are version-linked to quality checks, so a check always references the current-revision procedure, closing a common audit gap where field checklists drift out of sync with controlled documents.",
    "ndtAngle": "In an ISO 17020-accredited inspection body, quality management isn't administrative overhead — it's the accreditation-defining function. Every NCR (a missed weld indication caught on client re-inspection, a report issued against a superseded procedure revision) must be investigated, root-caused, and closed with objective evidence for the accreditation body's annual surveillance audit. Trending NCRs by technician surfaces retraining needs before they become repeat findings; trending by method (recurring PAUT sizing discrepancies) flags procedure or equipment issues. Quality checks embedded at work-order stages create the objective evidence auditors look for instead of relying on technician self-certification.",
    "capabilities": [
      "Method-specific quality control points auto-triggered at work-order stages",
      "NCR workflow: raise, investigate, root cause, CAPA, verify closure",
      "Trending dashboards by technician, method, client, and root-cause category",
      "Internal audit scheduling and finding tracking against ISO 9001/17020 clauses",
      "Version-linked procedure references on every quality check (no stale-revision checks)",
      "Photo/evidence capture attached directly to quality checks and NCRs",
      "Management review dashboard aggregating NCR trends, audit findings, KPIs",
      "Client complaint intake routed through the same NCR/CAPA structure"
    ],
    "workflow": "Quality control points are configured per method and inserted into the relevant Project work-order stage, such as a mandatory pre-shift calibration verification check before UT data capture begins. Technicians complete checks via mobile, logging pass/fail and photo evidence. If a check fails or a report review flags an error, an NCR is auto-created or manually raised, assigned an owner, and routed through investigation with a documented root cause (procedure gap, training gap, equipment fault) and corrective action with a due date. Closure requires verification evidence, not just a status change. Quarterly, NCR and audit-finding trends feed a management review meeting, surfacing whether specific technicians, methods, or clients show elevated non-conformance rates — driving targeted retraining or procedure revision decisions ahead of the annual accreditation surveillance audit.",
    "compliance": [
      "ISO 9001:2015",
      "ISO/IEC 17020:2012 (inspection body requirements)",
      "ISO/IEC 17025:2017 (where lab/calibration functions apply)",
      "ASNT SNT-TC-1A / ISO 9712",
      "API RP 578 (quality for welding/NDT programs)",
      "NADCAP AC7114 (for aerospace NDT programs)"
    ],
    "integrations": [
      "Document Control (version-linked procedures on quality checks)",
      "Project Management (embedded check triggers)",
      "Audit Management (shared finding/CAPA workflow)",
      "HR/certification records (technician retraining trigger from NCR trends)",
      "Client complaint portals"
    ],
    "roi": "Firms report accreditation surveillance audit findings dropping 40-60% within two cycles of implementing structured NCR/CAPA trending, because systemic issues get corrected before the auditor finds them. Version-linked procedure checks have eliminated checked-against-superseded-revision as an audit finding entirely. NCR trending by technician has cut repeat-error rates by roughly a third by targeting retraining precisely instead of blanket refresher training.",
    "faqs": [
      [
        "Can quality checks be configured differently per inspection method?",
        "Yes. Control points are defined per method/work-order template, so PAUT jobs trigger different checks than MPI jobs, each referencing the correct current-revision procedure."
      ],
      [
        "How does the system prevent a technician from using an outdated inspection procedure?",
        "Quality checks are version-linked to Document Control; if a procedure is revised, checks referencing it automatically point to the current revision, and superseded copies are flagged out of active use."
      ],
      [
        "Does NCR trending help during our ISO 17020 surveillance audit?",
        "Yes. Trend dashboards by root cause, technician, and method give auditors objective evidence of a functioning corrective-action system, which is a core requirement of ISO 17020."
      ]
    ]
  },
  "document-control": {
    "headline": "Controlled procedure and report management with revision traceability for ISO 9001/17020",
    "overview": "Odoo Documents configured for NDT firms manages the full document lifecycle for controlled inspection procedures, work instructions, calibration certificates, and finalized client reports. Every controlled document (a UT technique sheet, a PAUT procedure qualified per ASME Section V, a written practice for personnel certification) carries revision history, approval workflow (draft, technical review, QA approval, release), and automatic supersession of prior revisions with old-revision access restricted to read-only/historical reference. Distribution control ensures only the current approved revision is accessible to field technicians via mobile, eliminating the classic audit finding of an obsolete procedure copy in a field folder. Client inspection reports, once approved, are stored immutably with full metadata (asset ID, method, technician, reviewer, date, applicable code) making retrieval for audits or repeat-client history instant. Retention schedules enforce record-keeping periods per code requirement (API 510 requires inspection records retained for the life of the vessel). Access permissions separate internal working documents from client-facing deliverables, and a client portal can expose only finalized, approved reports.",
    "ndtAngle": "An ISO 17020 or ISO 9712-audited firm lives or dies on document control discipline — the single most common finding in NDT quality audits is a technician working from an uncontrolled or superseded procedure copy. This module makes that structurally impossible by tying field access to current-revision-only distribution, with old revisions locked from active use the moment a new one is approved. It also solves the practical problem of report retrieval: when a client calls asking for a UT report from three inspection cycles ago on a specific vessel, the answer is a search by asset ID, not a dig through email archives — critical for API 510/570/653 fitness-for-service and corrosion-trending work that depends on historical thickness data.",
    "capabilities": [
      "Draft to technical review to QA approval to release workflow with audit trail",
      "Automatic supersession and lockout of prior procedure revisions on approval",
      "Field mobile access restricted to current-approved-revision documents only",
      "Immutable finalized report storage with full searchable metadata (asset, method, code)",
      "Retention schedule enforcement per code requirement (life-of-asset for API 510)",
      "Client portal exposing only approved, finalized deliverables (no internal drafts visible)",
      "Full revision-change audit trail (who changed what, when, why) for accreditation review",
      "Cross-linking of reports to source calibration certificates and technician qualifications"
    ],
    "workflow": "A new or revised procedure is drafted, routed for technical review (typically by a Level III), then formal QA approval before release. On release, the system automatically flags all prior revisions as superseded and removes them from active field-access lists — technicians pulling up procedures via mobile always see only the current revision. Completed inspection reports move through the same review structure (technician draft, Level III/QA review, client-approved release) before being locked as immutable records with full metadata tagging. Records are retained per the applicable code's required retention period, with disposal/archive schedules flagged for review rather than automatic deletion. During an accreditation audit or client due-diligence request, auditors or account managers search by asset, date range, method, or technician and retrieve the exact controlled document instantly, with the full revision-approval audit trail attached.",
    "compliance": [
      "ISO 9001:2015 clause 7.5 (documented information control)",
      "ISO/IEC 17020:2012",
      "ISO/IEC 17025:2017",
      "ASNT SNT-TC-1A (written practice document control)",
      "API 510/570/653 (record retention requirements)",
      "ASME BPVC Section V (procedure qualification record retention)"
    ],
    "integrations": [
      "Quality Management (version-linked quality checks)",
      "Project Management (work-order document attachment)",
      "CMMS (calibration certificate archive)",
      "CRM/client portal (approved deliverable access)",
      "E-signature tools for approval workflow"
    ],
    "roi": "Structured revision control has eliminated technician-working-from-superseded-procedure as an audit finding across firms that implemented hard field-access restriction to current revisions. Report retrieval time for historical audit or client requests dropped from hours of manual archive searching to under a minute via metadata search. Retention-schedule automation has prevented at least one documented instance of premature record disposal ahead of an API 510 fitness-for-service review that required 15-year-old baseline thickness data.",
    "faqs": [
      [
        "Can field technicians accidentally access an old revision of a procedure on their tablet?",
        "No. Mobile access pulls only the current approved revision by design; superseded revisions are locked from the active distribution list the moment a new one releases."
      ],
      [
        "How long are inspection reports retained, and does the system enforce that automatically?",
        "Retention periods are configured per applicable code, such as life-of-vessel for API 510 records; the system flags records for review at the retention milestone rather than auto-deleting, keeping a human decision in the loop."
      ],
      [
        "Can we give a client read-only access to their historical reports without exposing our internal procedures?",
        "Yes. The client portal permission scope exposes only approved, finalized client-facing reports; internal procedures, drafts, and QA review notes stay behind internal access controls."
      ]
    ]
  },
  "certification-tracking": {
    "headline": "ASNT/ISO 9712/PCN certification tracking with automated expiry escalation",
    "overview": "A configured Odoo employee/HR data model tracks every technician's full certification portfolio — ASNT SNT-TC-1A written practice level (Level I/II/III per method), ISO 9712 certificates, PCN, CSWIP, CGSB, and client-specific qualifications — as structured records with issue date, expiry date, issuing body, method, and supporting document (scanned certificate). Automated escalation alerts fire at configurable intervals (typically 90/60/30 days) before expiry, routed to both the technician and their manager, and certifications can be flagged as recertification-in-progress versus lapsed. The system cross-references certification data against every project assignment in real time — Project Management and CRM cannot assign or quote a technician against a scope requiring a certification/method they don't hold or that has lapsed. Vision/eye-exam currency (required annually under most written practices) is tracked as its own sub-record alongside method certifications since it expires on a different cycle. Training records (initial qualification, recertification exams, on-the-job hours logged toward higher-level qualification) feed a competency matrix per employee, giving HR and QA a single source of truth for who is qualified to sign off which reports.",
    "ndtAngle": "This is the module that keeps an NDT firm out of its worst-case audit and liability scenario: a technician performing or signing off inspection work in a method/level they are not currently certified for. Hard cross-referencing at the scheduling and CRM-quoting stage — not just a report after the fact — prevents a Level II from being scheduled onto a scope requiring Level III sign-off, or a technician from being dispatched on a PAUT job when their PAUT certification lapsed last month. Vision test currency tracking catches the specific, frequently-missed SNT-TC-1A requirement that near-vision acuity be verified annually, independent of the underlying method certification's multi-year cycle.",
    "capabilities": [
      "Structured records per method/level (ASNT, ISO 9712, PCN, CSWIP) with expiry dates",
      "Auto-escalation alerts at 90/60/30-day windows to technician and manager",
      "Hard cross-check blocking project/quote assignment against uncertified method or level",
      "Separate annual vision/eye-exam currency tracking distinct from method cert cycles",
      "Competency matrix view: every technician by every method by current status",
      "On-the-job hours logging toward next-level qualification progression",
      "Client-specific qualification tracking (beyond generic ASNT/ISO requirements)",
      "Certificate document archive linked to each record for instant audit retrieval"
    ],
    "workflow": "Each technician's certification profile is built out with every held qualification, its issuing body, level, method, and expiry date, plus the scanned certificate document attached. As expiry approaches, the system escalates automatically at 90/60/30 days, prompting the technician and manager to schedule recertification (exam booking, refresher training) well ahead of lapse. When a project manager builds a crew assignment or CRM quotes a scope requiring specific certifications, the system checks each proposed technician's current status and blocks assignment if the required cert is missing, lapsed, or vision-currency has expired — forcing a substitution or expedited recert before the job proceeds. HR/QA reviews the competency matrix quarterly to plan training investment, identifying methods where the firm is thin on qualified Level III coverage before it becomes a bidding constraint.",
    "compliance": [
      "ASNT SNT-TC-1A (written practice compliance)",
      "ISO 9712 (personnel certification scheme)",
      "ANSI/ASNT CP-189",
      "PCN (BINDT UK scheme)",
      "CSWIP",
      "CGSB (Canadian scheme)",
      "Client-specific vendor qualification requirements (refinery/EPC approved-technician lists)"
    ],
    "integrations": [
      "HR & payroll (linked employee records)",
      "Project Management / CRM (assignment and quoting cross-check)",
      "Field Service (dispatch eligibility check)",
      "Document Control (certificate document archive)",
      "Training/exam-body portals where API integration is available"
    ],
    "roi": "Hard cross-referencing at scheduling has reduced instances of near-miss uncertified-technician assignment to zero across audited clients, versus periodic manual spreadsheet checks that historically caught issues after the fact roughly 1 in 10 times. Escalation alerts have cut last-minute recertification scrambles and associated crew-availability gaps by an estimated 70%, since recert scheduling now starts 90 days out instead of at expiry. The competency matrix has directly informed training budget allocation, closing Level III coverage gaps in PAUT roughly two quarters faster than reactive hiring/training decisions.",
    "faqs": [
      [
        "Can the system stop us from quoting a job that requires a certification level we don't currently have covered?",
        "Yes. CRM cross-references the competency matrix at quoting time and flags coverage gaps before a commitment is made to the client."
      ],
      [
        "Does it track the annual vision test requirement separately from the multi-year method certification?",
        "Yes. Vision/eye-exam currency is its own record with its own expiry cycle and escalation, independent of the underlying ASNT/ISO 9712 certification period."
      ],
      [
        "How far in advance do expiry alerts start firing?",
        "The standard cadence is 90/60/30 days before expiry, configurable per organization, escalating in urgency and copying the technician's manager as the date approaches."
      ]
    ]
  },
  "hr-payroll": {
    "headline": "Certification-linked scheduling and field timesheets for multi-site inspection crews",
    "overview": "Odoo HR & Payroll configured for NDT firms manages the field-workforce specifics that generic HR systems don't: scheduling that respects certification currency and method qualification (integrated with Certification Tracking), per-diem and mobilization allowance calculation for remote/offshore assignments, multi-country payroll for firms operating US, Middle East, and India entities under different labor law regimes, and field timesheet capture that ties directly to project work orders for job-costing accuracy. Shift and rotation scheduling supports the reality of turnaround/shutdown work — 12-hour shifts, night crews, 14/21-day offshore rotations — with fatigue-management rule flags (max consecutive hours, mandatory rest periods) configurable per client or regulatory requirement. Expense management handles mobilization costs (flights, lodging, per-diem) with approval workflows and direct posting to the relevant project's analytic account for accurate job costing. Leave management accounts for technicians frequently mobilized away from home base, with visibility into who's deployable versus on leave or in a rest-rotation window. Payroll runs support multiple pay structures common in the industry — day rate, method premium pay (PAUT premium over conventional UT), hazard/offshore allowance, and overtime rules specific to each jurisdiction.",
    "ndtAngle": "Crew scheduling here isn't just calendar management — it's gated by the Certification Tracking cross-check, so a scheduler physically cannot roster a technician onto a PAUT shift if that certification has lapsed, closing the loop between HR/payroll and quality compliance. Offshore and remote turnaround rotations (common for refinery/petrochem shutdowns and marine work) need rest-period and fatigue-rule enforcement that generic retail/office scheduling tools don't model, and per-diem/mobilization allowance calculation needs to route straight into project job-costing so a bid's labor-cost assumptions can be checked against actuals after the job.",
    "capabilities": [
      "Scheduling gated by live certification/method qualification status (no manual override risk)",
      "Fatigue-management rule enforcement (max consecutive hours, mandatory rest windows)",
      "Multi-country payroll for US/Middle East/India entities under distinct labor law",
      "Per-diem, mobilization allowance, and hazard/offshore pay calculated per assignment",
      "Field mobile timesheet capture tied directly to project work orders for job costing",
      "Method premium pay structures (PAUT/TOFD rate differential over conventional UT)",
      "Deployability dashboard: available, on assignment, on leave, in rest-rotation window",
      "Expense approval workflow posting mobilization costs to the correct analytic account"
    ],
    "workflow": "When a project manager builds a crew for an upcoming mobilization, the scheduling view only surfaces technicians who are certification-current for the required method and level, and not currently in a mandatory rest window from a prior rotation. Once scheduled, technicians log field hours via mobile timesheet against the specific work order, which flows to both Payroll (for wage calculation including any method premium or offshore allowance) and Accounting (for job costing). Expense claims for travel, lodging, and per-diem are submitted with receipts, approved by the project manager, and posted directly to the project's analytic account. Payroll runs process each entity's pay cycle under its own jurisdiction's rules (overtime thresholds, statutory deductions, offshore allowance tax treatment), with consolidated labor-cost reporting rolling up to group finance for margin analysis per project.",
    "compliance": [
      "SNT-TC-1A / ISO 9712 (qualification-gated scheduling)",
      "OSHA and equivalent GCC/Indian labor safety fatigue-management guidance",
      "Local labor law compliance (US FLSA, GCC labor law, Indian Shops & Establishments/Factories Act)",
      "ISO 45001:2018 (occupational health and safety management)",
      "Maritime/offshore rest-hour regulations (MLC 2006 where applicable to marine NDT work)"
    ],
    "integrations": [
      "Certification Tracking (scheduling eligibility gate)",
      "Project Management / Field Service (timesheet-to-work-order linkage)",
      "Accounting (labor cost and expense analytic posting)",
      "Banking/payroll disbursement providers per country",
      "Government statutory filing portals (per-jurisdiction)"
    ],
    "roi": "Certification-gated scheduling has eliminated scheduling errors that previously required last-minute crew substitutions at mobilization — one operation reported these dropping from roughly monthly occurrences to zero over a year. Field timesheet-to-work-order linkage cut payroll processing and job-cost reconciliation time by an estimated 60%, since labor costs post automatically instead of via manual timesheet re-entry. Fatigue-rule enforcement on offshore rotations has reduced rest-period violations flagged in client HSE audits to zero on monitored contracts.",
    "faqs": [
      [
        "Can the scheduler accidentally roster someone whose PAUT certification expired last week?",
        "No. The scheduling view is filtered live against Certification Tracking status, so lapsed-certification technicians simply don't appear as eligible for that method's assignment."
      ],
      [
        "How does payroll handle a technician working across a US entity and a Middle East entity within the same year?",
        "Each entity runs payroll under its own jurisdiction's rules and statutory requirements; the system keeps records separate per entity while giving group finance a consolidated cost view for reporting."
      ],
      [
        "Does the system track offshore rotation rest periods automatically?",
        "Yes. Rotation and fatigue rules — max consecutive working days/hours, mandatory rest windows — are configurable and enforced at the scheduling stage, flagging any assignment that would violate them."
      ]
    ]
  },
  "audit-management": {
    "headline": "Internal and third-party audit scheduling with finding-to-CAPA closure tracking",
    "overview": "Odoo's Quality/Audit workflow configured for NDT firms manages the full audit lifecycle: internal audit program scheduling against ISO 9001/17020 clause coverage, third-party accreditation body surveillance audit preparation, and client-conducted vendor qualification audits. Audit checklists are built per standard/scope (an ISO 17020 technical competence audit differs structurally from a client HSE vendor audit), with findings captured in real time during the audit — including evidence photos and reference to the specific procedure or record reviewed — and automatically classified by severity (major nonconformity, minor nonconformity, observation, opportunity for improvement). Every finding routes into the same CAPA workflow used by Quality Management, with owner assignment, root-cause investigation, and verified closure required before the finding is marked resolved. An audit calendar tracks the full program across internal audits, accreditation surveillance cycles, and client vendor audits so nothing is scheduled reactively. Historical audit data feeds a findings-trend dashboard by clause, department, method, and auditor, directly supporting management review inputs required by ISO 9001 and ISO 17020.",
    "ndtAngle": "For an ISO 17020-accredited inspection body, the audit program itself is under scrutiny during accreditation surveillance — auditors check not just whether findings exist, but whether the audit program is planned, executed to schedule, and findings are genuinely closed with objective evidence, not just marked closed administratively. This module gives an accreditation body reviewer exactly what they look for: a documented audit schedule, checklist-driven execution against specific clauses, and a finding-to-CAPA trail with verification evidence. It also handles the operational reality of client vendor audits (refineries and EPCs frequently audit their approved NDT vendors' QA systems before and during long-term contracts), keeping those audit records separate from but structurally consistent with internal/accreditation audits.",
    "capabilities": [
      "Audit program calendar spanning internal, accreditation surveillance, and client vendor audits",
      "Standard-specific checklist templates (ISO 9001, ISO 17020, client HSE/QA formats)",
      "Real-time finding capture during audit with photo evidence and record reference",
      "Automatic severity classification (major/minor NC, observation, OFI)",
      "Shared CAPA workflow with Quality Management for unified corrective-action tracking",
      "Verified-closure requirement (evidence-based, not status-only) before finding resolves",
      "Findings-trend dashboard by clause, department, method, and auditor",
      "Management review report auto-compiled from audit and CAPA data"
    ],
    "workflow": "The annual audit program is scheduled at the start of the QA year, allocating internal audits across departments/clauses to ensure full ISO 9001/17020 clause coverage before the accreditation body's surveillance visit. Each audit is executed against a standard-specific checklist, with the auditor logging findings, evidence, and clause references in real time via mobile or desktop. Findings above observation-level automatically generate a CAPA record routed to the responsible owner, following the same investigation-root-cause-corrective-action structure as quality NCRs. Closure requires the auditor or QA manager to verify implemented corrective action with objective evidence before the finding status changes to closed. Ahead of external accreditation surveillance, the QA manager pulls a full findings-trend report and open-CAPA status to confirm audit readiness and identify any systemic issue needing pre-emptive correction.",
    "compliance": [
      "ISO 9001:2015 clause 9.2 (internal audit)",
      "ISO/IEC 17020:2012 (audit program and impartiality requirements)",
      "ISO/IEC 17025:2017",
      "Client vendor pre-qualification audit standards (refinery/EPC-specific QA audit formats)",
      "API RP 578",
      "ISO 19011 (auditing guidelines)"
    ],
    "integrations": [
      "Quality Management (shared CAPA/NCR workflow)",
      "Document Control (procedure/record reference during audit)",
      "HR (auditor competency/training record)",
      "Client vendor audit portals",
      "Accreditation body portals where electronic submission is supported"
    ],
    "roi": "Structured audit-to-CAPA tracking with verified closure has helped firms move from mostly-closed-some-findings-recur-year-over-year to sustained zero-repeat-finding status across two consecutive accreditation cycles. Pre-audit readiness reporting has cut accreditation surveillance preparation time from roughly two weeks of manual file assembly to two to three days of dashboard review. Client vendor audits conducted through the same structured system have shortened client audit response and evidence-provision time significantly, supporting faster vendor-qualification renewal.",
    "faqs": [
      [
        "Does the audit tool distinguish between our internal audits and audits our clients conduct on us as a vendor?",
        "Yes. Audit type is tagged as internal, accreditation surveillance, or client vendor audit, each with its own checklist template, but findings feed the same trend and CAPA infrastructure."
      ],
      [
        "Can a finding be marked closed without evidence of corrective action?",
        "No. Closure requires the auditor or QA manager to attach or reference verification evidence; status-only closure isn't permitted by the workflow."
      ],
      [
        "How does this help us prepare faster for our ISO 17020 accreditation surveillance audit?",
        "The findings-trend dashboard and audit calendar give a real-time view of clause coverage and open CAPA status, replacing manual file compilation with a report that's essentially audit-ready on demand."
      ]
    ]
  },
  "helpdesk": {
    "headline": "Client-facing helpdesk for report queries, re-inspection requests, and complaint handling",
    "overview": "Odoo Helpdesk configured for NDT firms manages inbound client interactions that aren't full sales opportunities but need structured tracking: report clarification requests, requests for duplicate/reissued certificates, complaint intake regarding a specific inspection finding or crew conduct, and ad hoc re-inspection or urgent-callout requests outside the normal CRM pipeline. Tickets are categorized by type (report query, complaint, urgent callout, certificate reissue, scheduling change) and automatically routed to the right internal owner — a complaint about a specific finding routes to the QA manager and feeds the same NCR workflow as internal quality issues, while a report clarification routes to the reviewing Level III or project manager. SLA policies enforce response and resolution targets appropriate to ticket type, with tight SLAs for urgent callout requests and standard turnaround for certificate reissue requests. A searchable knowledge base can host FAQs on report interpretation, standard acceptance criteria references, and scheduling policies, deflecting routine queries. Full ticket history attaches to the client account, giving account managers visibility into service friction points that pipeline/CRM data alone wouldn't surface.",
    "ndtAngle": "A complaint in this industry often isn't a customer-service issue in the generic sense — it may be a client disputing an inspection finding, questioning an acceptance-criteria call, or requesting clarification on a UT thickness reading against corrosion-trend expectations. Routing these directly into the Quality Management NCR/CAPA workflow (rather than treating them as a standalone support ticket that closes with a reply) ensures they get the same root-cause rigor as an internally-raised nonconformity, which matters both for accreditation audit evidence and for genuinely catching systemic report-quality issues. Urgent re-inspection/callout requests, such as a client discovering a leak and needing emergency UT thickness verification, need SLA handling distinct from routine administrative tickets.",
    "capabilities": [
      "Ticket categorization: report query, complaint, urgent callout, certificate reissue, scheduling",
      "Automatic routing to correct owner by ticket type (QA manager, Level III, PM, admin)",
      "Client complaints on findings auto-feed the Quality Management NCR/CAPA workflow",
      "Type-specific SLA policies (tight for urgent callouts, standard for admin requests)",
      "Knowledge base for report-interpretation FAQs and acceptance-criteria references",
      "Full ticket history attached to client account, visible to account managers",
      "Escalation rules for SLA breach risk (auto-notify manager before deadline miss)",
      "Ticket-to-work-order linkage for callout requests converting into new field jobs"
    ],
    "workflow": "A client submits a query via email, portal, or phone, logged as a ticket and auto-categorized (or manually reclassified by the intake team). Report clarification and complaint tickets route to the relevant technical owner (Level III reviewer or QA manager); if the ticket concerns a disputed finding, it simultaneously opens a linked NCR in Quality Management for formal investigation. Urgent callout requests trigger a tight SLA and get flagged to the project management team to check crew/equipment availability and convert into an expedited work order if accepted. Routine requests like certificate reissue follow a standard turnaround SLA, often resolved via self-service from the knowledge base or a quick admin action. Account managers periodically review ticket history per client to spot recurring friction points, since repeated report-clarification requests from one client might indicate a report-formatting adjustment is needed for that account.",
    "compliance": [
      "ISO 9001:2015 clause 9.1.2 (customer satisfaction monitoring)",
      "ISO/IEC 17020:2012 (complaints and appeals handling requirement)",
      "ISO/IEC 17025:2017 (complaints clause)",
      "Client-specific vendor performance/SLA agreements"
    ],
    "integrations": [
      "Quality Management (complaint-to-NCR linkage)",
      "CRM (client account/ticket history unification)",
      "Project Management (callout-to-work-order conversion)",
      "Document Control (reissued certificate retrieval)",
      "Email/portal channels for ticket intake"
    ],
    "roi": "Routing findings-related complaints directly into the NCR/CAPA workflow has ensured 100% of client-raised technical complaints get formal root-cause investigation, closing a gap where such complaints were previously handled informally by account managers without a documented trail — a specific ISO 17020 audit exposure. SLA-driven urgent callout handling has cut average response time to emergency inspection requests from same-day-if-lucky to a defined, tracked window, improving client retention on time-critical accounts. Knowledge-base deflection has reduced routine certificate-reissue and report-interpretation ticket volume handled manually by roughly a third.",
    "faqs": [
      [
        "If a client disputes an inspection finding, does that get treated as a formal quality issue or just a support ticket?",
        "Both. The complaint ticket is logged for tracking and response, but it also auto-generates a linked NCR in Quality Management so the finding gets a documented investigation and root-cause review, satisfying ISO 17020's complaints-handling requirement."
      ],
      [
        "Can an urgent re-inspection request turn directly into a scheduled job?",
        "Yes. An urgent callout ticket can be converted directly into a Project Management work order once crew and equipment availability are confirmed, carrying over the ticket's details without re-entry."
      ],
      [
        "Do we get visibility into which clients raise the most tickets or complaints?",
        "Yes. Full ticket history rolls up to the client account, and dashboards can surface trend patterns such as repeat complaint types, response-time performance, and ticket volume by client for account management review."
      ]
    ]
  },
  "field-service": {
    "headline": "Mobile dispatch and offline data capture for crews working outside network coverage",
    "overview": "Odoo Field Service configured for NDT firms manages crew dispatch, mobile job execution, and data capture for technicians working in refineries, plant turnarounds, and remote/offshore sites where connectivity is unreliable or absent. Dispatch boards show crew location, current job status, and equipment assignment (cross-checked against CMMS calibration status), letting schedulers assign the nearest qualified, in-cal-equipment crew to urgent callouts. The mobile app supports full offline operation — technicians capture inspection data (thickness readings, indication logs, weld maps, photos), complete quality checkpoints, and log time and consumables usage without connectivity, with everything syncing automatically once signal returns, so no field data is lost to a dead zone inside a vessel or a remote pipeline right-of-way. Job checklists are method-specific (a UT thickness survey checklist differs from an MPI weld inspection checklist), pulling the current-revision procedure from Document Control for on-screen reference. Signature capture for client witness/hold points and site safety inductions is built into the mobile workflow. GPS/geofencing can confirm technician presence at the correct asset location for high-value or safety-critical inspections.",
    "ndtAngle": "This is where the rest of the ERP becomes real-world usable: a technician standing inside a vessel or on a platform 40 miles offshore with no signal needs the job scope, current procedure revision, and calibration status pre-loaded, and needs to capture UT thickness grid readings or PAUT scan data without losing anything if sync fails. Offline-first mobile capture directly prevents the two most common field data-loss failure modes in NDT — a phone/tablet losing connectivity mid-shift, or the crew working in a Faraday-cage-like vessel interior. Geofenced presence confirmation and client witness-point signature capture also directly support the objective evidence auditors and clients expect for hold-point/witness inspections common in API-code work.",
    "capabilities": [
      "Offline-first mobile app: full data capture, checklist completion without connectivity",
      "Automatic background sync of field data once signal returns, no manual re-entry",
      "Dispatch board with nearest-qualified-crew and in-cal-equipment-aware assignment",
      "Method-specific digital checklists pulling current-revision procedure on-screen",
      "Client witness/hold-point signature capture built into mobile workflow",
      "GPS/geofence presence confirmation for safety-critical or contractual witness points",
      "Time and consumables logging against the work order directly from the field",
      "Photo/video evidence capture attached live to the relevant inspection data point"
    ],
    "workflow": "A dispatcher assigns a job from the board, with the system filtering eligible technicians by certification/method match and equipment by current calibration status. The technician's mobile app pre-downloads the job scope, current-revision procedure, and checklist before mobilization, or on last available signal, so it's usable even fully offline on site. In the field, they log thickness readings, indication data, photos, and quality checkpoints directly into the app; a client witness point triggers an on-screen signature capture. Time and consumables used are logged against the work order in real time. Once the technician regains connectivity — leaving the vessel, returning to a signal area, or reaching the site office — all captured data syncs automatically to the central system, updating the work order status, triggering the report-draft stage in Project Management, and posting labor/consumables costs to Accounting, with nothing requiring manual transcription from a paper backup.",
    "compliance": [
      "ISO 9001:2015 clause 8.5 (production/service provision, including field data integrity)",
      "API 510/570/653 (witness/hold-point documentation requirements)",
      "ASME BPVC Section V (data recording requirements per method)",
      "ISO/IEC 17020:2012 (objective evidence of on-site inspection activity)",
      "Client-specific site safety and HSE induction documentation requirements"
    ],
    "integrations": [
      "CMMS (equipment calibration status at dispatch)",
      "Certification Tracking (crew eligibility at dispatch)",
      "Project Management (work-order status sync)",
      "Accounting (field-logged labor/consumables cost posting)",
      "Document Control (current-revision procedure delivery to mobile)"
    ],
    "roi": "Offline-first capture has eliminated field data loss incidents from connectivity dead zones, which previously required a subset of crews to fall back to paper capture and re-transcription — a process that introduced transcription errors flagged in roughly 1 in 20 records under the old workflow. Dispatch-stage calibration and certification cross-checking has cut same-day crew-substitution scrambles by a wide margin, since ineligible assignments are caught before mobilization rather than discovered on site. Real-time field-to-report sync has cut typical report-draft turnaround after job completion from 2-3 days to same-day for straightforward scopes.",
    "faqs": [
      [
        "What happens if a technician captures data inside a vessel with zero signal for an entire shift?",
        "All data is captured and stored locally on the device throughout the offline period; once the device regains any signal, everything syncs automatically in the background with no manual re-entry required."
      ],
      [
        "Does the dispatch system check equipment calibration and crew certification before assigning a job?",
        "Yes. The dispatch board cross-references CMMS calibration status and Certification Tracking eligibility, so schedulers see only qualified technicians with in-calibration equipment as valid assignment options."
      ],
      [
        "Can clients sign off on hold/witness points directly in the field app?",
        "Yes. Witness and hold-point steps in the mobile checklist include on-screen signature capture, timestamped and geofenced where required, creating objective evidence for the inspection record."
      ]
    ]
  }
};
