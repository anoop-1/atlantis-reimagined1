// Per-module ERP knowledge. Rendered by ErpModuleCityPage + ErpModulePage. Rewritten 2026-09-27 to describe only verified Atlantis NDT ERP features.
export interface ModuleKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const moduleKnowledge: Record<string, ModuleKnowledge> = {
  "asset-management": {
    "headline": "Asset Management for NDT equipment: every instrument, probe and block tracked by serial number",
    "overview": "In the Atlantis NDT ERP, Asset Management means the equipment your inspection company owns and sends to site: flaw detectors, phased array units, thickness gauges, probes and wedges, MT yokes, UV lamps, calibration blocks, radiography-related items and the consumables that travel with them. Every item is tracked by serial number with its equipment type, asset tag, firmware version, accessories, the person it is assigned to and its current condition. A lifecycle status shows whether a unit is new, active, in calibration, in repair, rented out, retired or disposed, so the equipment store knows what is genuinely available before a crew is promised a kit. Issue and return run through a workflow with supervisor and manager approval, and condition is recorded both when a unit goes out and when it comes back. Reservations stop two jobs claiming the same serial number, and every inbound and outbound movement is logged. Calibration frequency, calibration status and the calibration certificate register sit on the same record, with alerts before a certificate expires. Rental rates can be recorded for items you hire out. This module manages your own NDT equipment; it is not a register of client plant assets.",
    "ndtAngle": "For an NDT company, a report is only as defensible as the instrument behind it. Because each flaw detector, probe and reference block is a serial-numbered record with its own calibration history, your Level III can answer the question every client auditor asks: which unit was used, who had it, and was it in calibration on that date. The same serial numbers are used elsewhere in the ERP: Team Assignments blocks double-booking of a serial and warns when assigned equipment is out of calibration, invoice lines can carry the equipment serial, and purchase order lines for calibration services link to the specific unit sent to the lab.",
    "capabilities": [
      "Serial-number register for instruments, probes, wedges, blocks and accessories with equipment type, asset tag, firmware and accessories",
      "Lifecycle status per item: new, active, in calibration, in repair, rented out, retired, disposed",
      "Issue and return workflow with supervisor and manager approval, condition recorded at issue and at return",
      "Reservations with clash prevention, plus inbound and outbound movement records",
      "Maintenance log covering preventive, corrective, repair, cleaning, firmware update and probe replacement, with condition before and after",
      "Calibration records with provider, certificate number, standard, range, uncertainty, accredited-lab flag, pass/fail/conditional result and next due date",
      "Calibration certificate register with lab accreditation number, valid/expiring/expired status, PDF copy and expiry alerts",
      "Consumables such as couplant, chemicals, PPE and stationery with reorder level, low-stock flag and a movement ledger"
    ],
    "workflow": "Equipment is registered once with its serial number, type, firmware, accessories and calibration frequency, and its current calibration certificate is uploaded to the certificate register. When a job is planned, the coordinator reserves the units it needs; if another job already holds that serial for the same dates, the reservation is refused. At mobilisation, the technician requests the kit, a supervisor and manager approve the issue, and the store records the condition going out. On return, condition is recorded again and any damage becomes a maintenance log entry, such as a cable repair or probe replacement. As a calibration due date approaches, the register flags the certificate as expiring and alert emails go to the people you choose. When the unit comes back from the lab, the new certificate is logged and the status returns to valid.",
    "compliance": [
      "ISO 9001:2015 control of monitoring and measuring equipment (records kept per serial number)",
      "ASME BPVC Section V calibration evidence for instruments and reference blocks named in procedures",
      "Calibration certificates from accredited labs, with accreditation number and expiry recorded",
      "ASNT SNT-TC-1A written practices that require calibrated equipment evidence during audits",
      "Client prequalification and audit requests for equipment calibration records"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Team Assignments (equipment double-booking block and out-of-calibration warning)",
      "NDT Reports (probe calibration tables and equipment references on reports)",
      "Purchase (calibration lab vendors and order lines linked to a serial number)",
      "Invoicing (equipment serial on invoice lines)",
      "Inventory and Maintenance apps",
      "Dashboards (calibration due or overdue, issued equipment overdue)"
    ],
    "roi": "The practical gain is fewer surprises. The store stops discovering on the morning of mobilisation that a unit is at the lab or already promised to another crew. Calibration certificates are no longer hunted for in inboxes when a client auditor asks for them, because each one sits against its serial number with a clear valid, expiring or expired status. Damaged equipment is noticed at return rather than on the next job, and the approval trail shows who had which unit and when.",
    "faqs": [
      [
        "Does Asset Management track our clients' plant equipment such as vessels and piping?",
        "No. Asset Management in the Atlantis NDT ERP tracks your own NDT equipment and consumables by serial number. Client component details are captured on the NDT reports and project tasks for each job, not in an asset hierarchy."
      ],
      [
        "Can we stop a technician taking an instrument without approval?",
        "Yes. Equipment issue runs through a workflow with supervisor and manager approval, and the condition of the unit is recorded when it is issued and again when it is returned."
      ],
      [
        "How are calibration certificates kept?",
        "Each calibration record stores the provider, certificate number, standard, range, uncertainty, accredited-lab flag, result and next due date. The certificate register holds the PDF, the lab's accreditation number and a valid, expiring or expired status, and expiry alert emails can be configured."
      ]
    ]
  },
  "audit-management": {
    "headline": "Audit readiness for NDT companies: the records auditors ask for, kept in one place",
    "overview": "Most audits of an NDT company, whether an ISO 9001 surveillance visit, an ASNT written-practice review or a client prequalification audit, come down to the same questions. Are your technicians certified for the methods they performed? Were their vision tests current? Were the procedures approved, and by whom? Was the equipment in calibration? Were the reports reviewed and signed? The Atlantis NDT ERP keeps these answers as structured records rather than folders. Technician certifications carry scheme, level, method, certifying body and expiry dates, with vision tests and examination sheets alongside. Procedures carry prepared, reviewed and approved signatures with dates and a full revision history. Calibration certificates sit in a register with status and lab accreditation number. NDT reports record inspector, reviewer and approver signatures. Company certifications such as ISO certificates carry their own alert dates. A dedicated audit-planning and findings module is not part of the standard product; if you need audit checklists or a findings log, that is configured during implementation, for example using the Surveys app for checklists.",
    "ndtAngle": "An auditor reviewing an NDT operation will usually pick a report and trace it backwards: the technician's certificate for that method, their vision test, the procedure revision used, the instrument's calibration certificate and the reviewer's signature. In the Atlantis NDT ERP each link in that chain is a record with dates. The certificate status is computed automatically as active, expiring soon, expired or revoked. Approved procedure revisions are locked. The calibration certificate register shows whether the lab was accredited. That turns an audit from a document hunt into a series of lookups.",
    "capabilities": [
      "Technician certification records with scheme, level, method, certifying body, issue, expiry and renewal dates",
      "Vision test records (near vision Jaeger J1/J2, far vision, colour perception, contrast) with examiner, clinic and expiry",
      "Examination sheets with general, specific and practical scores and a configurable passing score",
      "Procedure register with prepared, reviewed and approved signatures, dates and locked approved revisions",
      "Calibration certificate register with lab accreditation number and valid/expiring/expired status",
      "Company certifications (ISO and similar accreditations) with alert days before expiry",
      "NDT report sign-off by inspector, reviewer and approver, plus third-party inspector name and signature",
      "Audit checklists or findings logs configured during implementation where required"
    ],
    "workflow": "Ahead of an audit, the quality manager opens the Expiring Soon and Expired menus in Certificates to confirm no technician is working on a lapsed certificate or vision test, and checks the calibration certificate register for anything expiring. When the auditor samples a report, it is opened in NDT Reports showing the inspector, reviewer and approver signatures and the procedure and standard references. The procedure is opened in the Procedures register to show the approved revision, approval dates and revision history. The technician's NDT profile shows their certifications, OJT and training hours and exam results. Where the auditor raises points, they are recorded in whatever checklist or log format was configured for you during implementation.",
    "compliance": [
      "ISO 9001:2015 surveillance and recertification audits (evidence records)",
      "ASNT SNT-TC-1A and CP-189 written-practice audits",
      "ISO 9712, PCN and CSWIP certificates recorded where technicians hold them",
      "Client vendor prequalification and site QA audits",
      "ISO 45001:2018 records such as medical fitness expiry and radiation safety training"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Certificates (technician certs, vision tests, exams, company certifications)",
      "Procedures (approval signatures and revision history)",
      "Asset Management (calibration certificate register)",
      "NDT Reports (review and approval signatures)",
      "Surveys (checklists, where configured)",
      "Dashboards (certs expiring or expired, calibration due or overdue)"
    ],
    "roi": "Audit preparation becomes a check of live records rather than a week of collecting paper. Lapsed certificates, overdue vision tests and expiring calibration certificates show up in advance, while there is still time to fix them, instead of being found by the auditor. The traceability from a report back to the technician, procedure and instrument is already in place, which makes the audit conversation shorter and calmer.",
    "faqs": [
      [
        "Does the Atlantis NDT ERP include an audit findings and corrective action module?",
        "Not as a standard feature. It holds the evidence auditors check: certifications, vision tests, procedure approvals, calibration certificates and report sign-offs. If you need audit checklists or a findings log, that is configured during implementation as part of the agreed scope."
      ],
      [
        "Can we show an auditor that a technician was certified on the date of a job?",
        "Yes. Certification records carry issue, expiry and renewal dates with an automatically computed status, and timesheets warn when a technician's certificate is not valid."
      ],
      [
        "Are company certifications like our ISO certificate tracked too?",
        "Yes. Company certifications are recorded with alert days, and configurable daily email alerts can cover technician certificates, calibration certificates and company certifications."
      ]
    ]
  },
  "calibration-management": {
    "headline": "Calibration management for NDT instruments, probes and reference blocks",
    "overview": "Calibration in the Atlantis NDT ERP lives inside Asset Management, against the serial number of each instrument, probe or reference block. Every calibration record captures the provider, certificate number, standard used, range, the uncertainty stated on the certificate, whether the lab is accredited, the result (pass, fail or conditional) and the next due date. A separate calibration certificate register keeps the certificate PDF with the lab's accreditation number and a status of valid, expiring or expired. Daily email alerts can be configured for calibration certificates, with your choice of recipients, look-ahead days and resend interval, so the right person hears about an expiring certificate before the unit is due on a job. Each item also carries a calibration frequency and calibration status, and a lifecycle state of in calibration while it is away at the lab. Purchase supports calibration labs as a vendor type, with an accredited-lab flag, accreditation number and expiry, and calibration purchase order lines can be linked to the exact serial number sent out.",
    "ndtAngle": "NDT procedures under ASME Section V and client specifications expect calibrated instruments and certified reference blocks, and auditors will pick a report and ask for the certificate of the unit used. Because the NDT Reports app records probe calibration data for UT and the equipment on each job is tracked by serial number, the chain from report to instrument to certificate can be followed. Team Assignments adds a practical check at planning time: it warns when equipment assigned to a job is out of calibration.",
    "capabilities": [
      "Calibration records per serial number with provider, certificate number, standard, range and stated uncertainty",
      "Accredited-lab flag and pass, fail or conditional result on every calibration",
      "Next due date and calibration frequency per instrument, probe or block",
      "Calibration certificate register with PDF, lab accreditation number and valid/expiring/expired status",
      "Configurable daily email alerts with recipients, look-ahead days and resend interval",
      "In-calibration lifecycle status while a unit is away at the lab",
      "Calibration lab vendors in Purchase with accreditation number and expiry, and order lines linked to a serial",
      "Out-of-calibration warning when equipment is assigned to a job in Team Assignments"
    ],
    "workflow": "Each unit is registered with its calibration frequency and current certificate. As the due date approaches, the certificate moves to expiring in the register and alert emails go to the equipment coordinator and quality manager. A purchase order is raised to the calibration lab vendor, with the line linked to the serial number being sent, and the unit's lifecycle status changes to in calibration so no one plans it onto a job. When it returns, the new calibration record is entered with the certificate number, standard, range, uncertainty and result, the PDF is attached, and the unit goes back to active. If a job planner assigns a unit whose calibration has lapsed, Team Assignments shows a warning.",
    "compliance": [
      "ASME BPVC Section V calibration and reference block requirements named in your procedures",
      "ISO 9001:2015 control of monitoring and measuring equipment",
      "Accredited calibration lab certificates (accreditation number and expiry recorded)",
      "ASNT SNT-TC-1A written-practice equipment evidence",
      "Client specifications requiring calibrated equipment on site"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Asset Management (serial-number equipment register)",
      "Purchase (calibration lab vendors and serial-linked order lines)",
      "Team Assignments (out-of-calibration warning)",
      "NDT Reports (UT probe calibration table)",
      "Email alerts and Dashboards (calibration due or overdue)"
    ],
    "roi": "Calibration stops depending on one person's spreadsheet. Expiring certificates surface by email with enough lead time to book the lab, units at the lab are visibly unavailable, and the certificate for any serial number can be produced in front of an auditor or client without searching. Job planners get a warning before an out-of-calibration unit is sent to site rather than after.",
    "faqs": [
      [
        "Does the ERP calculate measurement uncertainty?",
        "No. It records the uncertainty stated on the calibration certificate, along with the provider, certificate number, standard, range, accredited-lab flag and result. Uncertainty evaluation stays with the accredited lab."
      ],
      [
        "What happens if a planner assigns an instrument that is out of calibration?",
        "Team Assignments shows a warning when assigned equipment is out of calibration, so the planner can swap the unit before mobilisation."
      ],
      [
        "Can we record which calibration lab is accredited?",
        "Yes. Calibration lab vendors carry an accredited-lab flag, accreditation number and expiry, and each calibration certificate in the register records the lab accreditation number."
      ]
    ]
  },
  "certification-tracking": {
    "headline": "NDT technician certification tracking with vision tests, exams and expiry alerts",
    "overview": "The Certificates app in the Atlantis NDT ERP keeps a structured record of every certification your technicians hold. Each record captures the scheme (SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP or other), level (trainee, I, II or III), method, certifying body, issue, expiry and renewal dates, industry sector, OJT hours, training hours, whether the exam was passed, and attachments such as the scanned certificate. Status is computed automatically as active, expiring soon (within 90 days), expired or revoked, and the Expiring Soon and Expired menus give the quality manager a daily view of who needs attention. Vision tests are separate records covering near vision (Jaeger J1/J2), far vision, colour perception and contrast, with examiner, clinic, certificate file and expiry. Examination sheets store general, specific and practical scores against a configurable passing score. Certificate templates per scheme define validity in months, whether a vision test or exam is required, and minimum OJT and training hours. Each employee has an NDT profile showing technician status, highest level, methods certified, radiation safety training, radiation badge number and medical fitness expiry.",
    "ndtAngle": "Written practices under ASNT SNT-TC-1A and CP-189 require documented training, experience, examinations and annual vision checks, and clients often specify a scheme such as ISO 9712 or PCN for particular work. Keeping scheme, level and method as separate fields means a technician holding ASNT Level II UT and PCN Level 2 UT has two distinct records, each with its own expiry. Daily checks create warning tasks 90 days before a certificate or vision test expires, and timesheets warn when a technician logs time while their certificate is not valid.",
    "capabilities": [
      "Certification records by scheme (SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP, other), level, method and certifying body",
      "Automatic status: active, expiring soon (90 days), expired, revoked, with Expiring Soon and Expired menus",
      "Vision test records: near vision Jaeger J1/J2, far vision, colour perception, contrast, examiner, clinic and expiry",
      "Examination sheets with general, specific and practical scores and a configurable passing score",
      "Certificate templates per scheme with validity months, vision test or exam requirement and minimum OJT and training hours",
      "Employee NDT profile with highest level, methods certified, radiation safety training, radiation badge number and medical fitness expiry",
      "Warning tasks 90 days before certificate or vision-test expiry, plus configurable daily email alerts",
      "Timesheet warning when a technician's certificate is not valid"
    ],
    "workflow": "When a technician joins, their existing certificates are entered with scheme, level, method and dates, and scanned copies are attached. Their vision test and exam sheets are recorded, and their NDT profile is completed with radiation safety training and medical fitness expiry. From then on, daily checks watch the dates. Ninety days before a certificate or vision test expires, a warning task is created, and daily alert emails go to the recipients you configured. The Level III or quality manager arranges the renewal, records the new exam or vision test and updates the certificate. If a technician logs timesheet hours while a certificate is not valid, the timesheet shows a warning.",
    "compliance": [
      "ASNT SNT-TC-1A and ANSI/ASNT CP-189 employer-based certification records",
      "ISO 9712 certificates recorded where technicians hold them",
      "PCN and CSWIP certificates recorded as distinct schemes",
      "Annual vision test requirements (near vision and colour perception)",
      "Radiation safety training and badge records for radiography crews"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Employees (technician NDT profile)",
      "Timesheets (invalid-certificate warning)",
      "Team Assignments (technician status and availability)",
      "Email alerts and Dashboards (certs expiring or expired)",
      "eLearning (course completion records for internal training)"
    ],
    "roi": "No expired certificate or lapsed vision test slips onto a job unnoticed, because the warnings start 90 days out and keep coming. Pulling a technician's full certification file for a client prequalification or audit takes a lookup rather than a search through shared drives. The Level III spends time on renewals and training rather than on maintaining a spreadsheet of dates.",
    "faqs": [
      [
        "Can one technician hold ASNT and PCN certificates for the same method?",
        "Yes. Each certificate is its own record with scheme, level, method, certifying body and expiry, so both are tracked separately."
      ],
      [
        "Are vision tests tracked separately from certificates?",
        "Yes. Vision tests have their own records covering near vision (Jaeger J1/J2), far vision, colour perception and contrast, with examiner, clinic, certificate file and expiry, and they trigger their own 90-day warning."
      ],
      [
        "Does Atlantis provide ISO 9712 or PCN certification training?",
        "No. The Certificates app can record ISO 9712, PCN and CSWIP certificates your technicians hold, but Atlantis training programs are based on ASNT SNT-TC-1A only."
      ]
    ]
  },
  "corrosion-tracking": {
    "headline": "UT thickness (UTT) readings captured and reported inside NDT Reports",
    "overview": "The Atlantis NDT ERP does not run a corrosion engineering module. What it does do well is capture and report the thickness data your technicians collect. UT thickness (UTT) is one of the 17 report types in the NDT Reports app, with its own numbering sequence, and readings are recorded by direction on each report. The report also captures the work order, request, contract and drawing numbers, the procedure and standard references, and the overall result: acceptable, not acceptable or acceptable with remarks. Reports move through draft, in progress, review, approved and sent, with inspector, reviewer and approver signatures, and third-party inspector name and signature where the client requires it. Your company templates, in Excel, Word, PDF or HTML, can be versioned and branded, and Excel templates are filled automatically by mapping report fields to cells, so a client's thickness grid format can be reproduced without retyping. Technicians can record readings in the offline field app on site and sync when they are back in signal. Engineering assessment of the readings, such as trending and repair decisions, remains with your client's integrity engineers or is scoped separately during implementation.",
    "ndtAngle": "Thickness surveys are routine work for NDT companies serving refineries, tank owners and marine clients, and the pain is usually in the reporting: readings written on paper grids, retyped into spreadsheets, then pasted into a client template. With UTT as a native report type, readings are captured once, reviewed and approved in the same workflow as every other method, and output in the client's own Excel layout. Related report types such as UT, PAUT, MFL and Holiday/coating sit in the same app when a survey covers more than one method.",
    "capabilities": [
      "UT thickness (UTT) report type with its own numbering sequence",
      "Thickness readings recorded by direction on each report",
      "References for work order, request, contract, drawing, procedure and standard",
      "Overall result: acceptable, not acceptable or acceptable with remarks",
      "Review workflow with inspector, reviewer and approver signatures, plus third-party inspector signature",
      "Excel templates filled automatically by mapping fields to cells, for client-specific thickness formats",
      "Offline field app for recording readings and photos without signal, synced later",
      "Related report types in the same app: UT, PAUT, MFL, TOFD and Holiday/coating"
    ],
    "workflow": "The job is set up in Project with the client PO, scope, methods and codes, and the crew is dispatched through Team Assignments. On site, the technician opens a UTT report in the offline field app, records readings by direction, captures photos and signs on screen. Back in coverage, the report syncs as a draft. The reviewer checks it against the procedure and standard references, the approver signs, and the report is output using the client's template, with Excel templates filled cell by cell. The approved report is sent to the client, and the hours logged against the job feed invoicing.",
    "compliance": [
      "ASME BPVC Section V procedure and standard references recorded on each report",
      "Client thickness survey formats reproduced through Excel templates",
      "Third-party or authorised inspector name and signature where required",
      "ASNT SNT-TC-1A certification of the inspector (via the Certificates app)",
      "Marine mode with classification-society certificate merged into the PDF for ship thickness work"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "NDT Reports (UTT and other method report types)",
      "Offline field app and REST API for field devices",
      "Project (job scope, client PO, methods and codes)",
      "Team Assignments (crew dispatch)",
      "Timesheets and Invoicing (billable hours)"
    ],
    "roi": "Thickness readings are entered once, on site, instead of being copied from paper to spreadsheet to report. Client templates are filled automatically, so reports go out in the format the client expects without manual layout work. Review and approval signatures sit on the report, which makes it easier to answer later questions about who checked the data.",
    "faqs": [
      [
        "Does the ERP calculate wall loss trends or inspection intervals from thickness data?",
        "No. The Atlantis NDT ERP captures, reviews and reports UT thickness readings. Engineering assessment of the readings stays with the asset owner's integrity team, or can be discussed as custom scope during implementation."
      ],
      [
        "Can we use our client's thickness grid spreadsheet as the report?",
        "Yes. Excel templates are filled automatically by mapping report fields to cells, so a client's own layout can be used as the output template."
      ],
      [
        "Can technicians record readings where there is no signal?",
        "Yes. The offline field app stores drafts and photos on the device and syncs once a connection is available."
      ]
    ]
  },
  "document-control": {
    "headline": "NDT procedure control with approval workflow, locked revisions and full history",
    "overview": "Document control in the Atlantis NDT ERP centres on the Procedures app, where your NDT procedures are written, reviewed, approved and published. Each procedure carries a document number, revision, method (UT, RT, MT, PT, VT, ET, TOFD, PAUT, LT, AE, hardness, PMI, CR, DR and more), scope, material, applicable standard such as ASME Section V, acceptance criteria and either body text or an uploaded file. The workflow runs draft, submitted, reviewed, approved and published, with rejected and archived states and a reason recorded on rejection. Prepared-by, reviewed-by and approved-by are recorded with dates, and approved revisions are locked against editing. Every revision is kept with a snapshot, so the version in force on any past date can be produced. Approvers receive email notifications and reminders when something is waiting for them. An AI-assisted option can produce a first draft of a new procedure, falling back to a built-in template, which a Level III then reviews and approves. Report templates in NDT Reports are also versioned, so client report formats are controlled in the same disciplined way.",
    "ndtAngle": "Clients and auditors expect every NDT report to reference an approved procedure revision, and ASNT SNT-TC-1A written practices put procedure approval in the hands of a Level III. The Procedures app enforces that sequence: nothing reaches published without passing review and approval, approved text cannot be quietly edited, and the history shows exactly what changed between revisions. NDT reports then capture the procedure and standard references for each job.",
    "capabilities": [
      "Procedure register with document number, revision, method, scope, material, standard and acceptance criteria",
      "Workflow: draft, submitted, reviewed, approved, published, plus rejected and archived",
      "Prepared-by, reviewed-by and approved-by with dates; approved revisions locked",
      "Rejection with a recorded reason",
      "Full revision history with a snapshot of each revision",
      "AI-assisted first draft of a procedure, falling back to a built-in template, always reviewed by a Level III",
      "Email notifications and reminders to approvers for pending approvals",
      "Versioned report templates (Excel, Word, PDF, HTML) in NDT Reports"
    ],
    "workflow": "A new or revised procedure starts as a draft, either written from scratch, uploaded as a file or produced as an AI-assisted first draft. The author submits it, and the reviewer is notified by email. The reviewer checks scope, standard references and acceptance criteria, then passes it to the approver, usually the Level III, or rejects it with a reason. Once approved, the revision is locked and published, and the previous revision remains in the history with its snapshot. Pending approvals generate reminders so procedures do not sit waiting. Technicians and reviewers reference the procedure on NDT reports for each job.",
    "compliance": [
      "ASNT SNT-TC-1A requirement for Level III approval of NDT procedures",
      "ASME BPVC Section V written procedure requirements",
      "ISO 9001:2015 control of documented information",
      "Client specifications requiring approved procedure revisions",
      "Procedures written to ISO, EN or client standards as your scope requires"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "NDT Reports (procedure and standard references on reports)",
      "Project tasks (procedure and WPS references)",
      "Email notifications to approvers",
      "Certificates (Level III who signs the approval)",
      "Versioned report templates"
    ],
    "roi": "Procedures stop living as loose Word files with uncertain status. Everyone can see which revision is approved, who approved it and when, and what changed from the last one. Approvals move faster because approvers are reminded, and the Level III spends review time on technical content rather than on formatting a first draft from nothing.",
    "faqs": [
      [
        "Can an approved procedure be edited?",
        "No. Approved revisions are locked. Changes are made by creating a new revision, which goes through the review and approval workflow again, and the earlier revision stays in the history with its snapshot."
      ],
      [
        "Does the AI write our procedures for us?",
        "It can produce a first draft, or a built-in template if AI is unavailable. A Level III still reviews, edits and approves every procedure before it is published."
      ],
      [
        "Is there a general document management system for every company document?",
        "The Procedures app controls NDT procedures and NDT Reports controls report templates. Wider document control needs are scoped and configured during implementation."
      ]
    ]
  },
  "inspection-scheduling": {
    "headline": "Crew dispatch and technician scheduling with double-booking prevention",
    "overview": "Scheduling in the Atlantis NDT ERP is handled by Team Assignments. Each job becomes a team assignment that moves through planned, dispatched, in field, submitted and closed, so coordinators can see at a glance which crews are mobilised and which jobs are waiting for paperwork. Assignments carry site GPS coordinates and mobilisation and demobilisation dates. A technician availability calendar records assigned days, leave, training, sickness and unavailable periods, and overlapping entries are blocked. The system also blocks double-booking of a technician and of an equipment serial number across assignments, and warns when equipment assigned to the job is out of calibration. For each technician you can see status, current assignment, utilisation percentage and next available date. Calendar, kanban and list views suit different planners. Time Off feeds technician availability, so approved leave is reflected automatically. The ERP does not generate inspection due dates from inspection codes; jobs come from client requests, contracts and your own planning.",
    "ndtAngle": "The daily headache in an NDT company is crew planning: the same Level II PAUT technician promised to two clients, a flaw detector booked on two jobs, or a crew mobilised with a unit that is due at the lab. Team Assignments addresses exactly those problems. Technician and equipment clashes are blocked rather than just highlighted, and the out-of-calibration warning appears at planning time. Certification status sits in each technician's NDT profile, so the planner can check scheme, level and method before confirming the crew.",
    "capabilities": [
      "Team assignment workflow: planned, dispatched, in field, submitted, closed",
      "Site GPS coordinates and mobilisation and demobilisation dates on each job",
      "Technician availability calendar: assigned, leave, training, sick, unavailable, with overlaps blocked",
      "Double-booking of technicians blocked across assignments",
      "Double-booking of equipment serial numbers blocked across assignments",
      "Warning when assigned equipment is out of calibration",
      "Technician status, current assignment, utilisation percentage and next available date",
      "Calendar, kanban and list views"
    ],
    "workflow": "A job is created from an accepted quotation or a client request and opened as a planned team assignment with site location and mobilisation dates. The coordinator checks the availability calendar and each technician's certifications, then assigns the crew and reserves the equipment. If a technician or serial number is already committed for those dates, the system blocks it. When the crew leaves, the assignment moves to dispatched and then in field. Technicians work from the offline field app, where the REST API lists the jobs assigned to them and the equipment issued to them. Once reports are submitted the assignment moves to submitted, and after review it is closed.",
    "compliance": [
      "ASNT SNT-TC-1A certification records checked before assignment (Certificates app)",
      "Client requirements for named, certified technicians on site",
      "Calibrated equipment requirements from procedures and client specifications",
      "Safety induction and work permit fields on the project record",
      "Radiation safety training and badge records for radiography crews"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Certificates and Employees (technician NDT profile)",
      "Asset Management (equipment reservations and calibration status)",
      "Time Off (leave feeding availability)",
      "Project (job scope, client PO, site)",
      "Offline field app and REST API (jobs assigned to me)",
      "Fleet (vehicle assignment to project and driver)"
    ],
    "roi": "Double-booked technicians and equipment stop being discovered on the day of mobilisation, because the system refuses the clash when it is planned. Coordinators see who is free next and who is on leave without phoning around. Crews leave with equipment that has been checked for calibration, which avoids an embarrassing swap on site.",
    "faqs": [
      [
        "Does the ERP calculate when a client's equipment is due for inspection?",
        "No. It does not calculate code-based inspection intervals. Jobs are created from client requests, contracts and your own planning, then scheduled and dispatched through Team Assignments."
      ],
      [
        "What stops us booking the same technician on two jobs?",
        "Team Assignments blocks double-booking of technicians, and the availability calendar blocks overlapping entries such as leave and assignments."
      ],
      [
        "Can technicians see their jobs on a phone or tablet?",
        "Yes. The offline field app, through the REST API for field devices, shows jobs assigned to the technician and the equipment issued to them."
      ]
    ]
  },
  "inventory-management": {
    "headline": "Inventory for NDT equipment by serial number and consumables with reorder levels",
    "overview": "Inventory in the Atlantis NDT ERP works together with Asset Management to cover the two kinds of stock an NDT company holds. Equipment is tracked by serial number: flaw detectors, gauges, probes, yokes, lamps and blocks, each with its lifecycle status, current holder and calibration status. Consumables such as couplant, penetrant and developer, magnetic particles, chemicals, PPE and stationery are tracked with a reorder level, a low-stock flag and a movement ledger showing what came in and what went out. Equipment issue and return run through an approval workflow, reservations prevent clashes between jobs, and every inbound and outbound movement is recorded. Purchase supports NDT purchase types and vendor types such as OEM, dealer and calibration lab, and order lines can be linked to a specific equipment serial. Where you need multiple stock locations, such as a main store and a site container, the setup is configured during implementation using standard inventory locations.",
    "ndtAngle": "Two things go wrong in NDT stores: a crew runs out of penetrant or couplant on site, or nobody knows where a specific probe is. The low-stock flag on consumables catches the first before the job, and the serial-number register with issue records answers the second. Consumable batch details can be noted on receipt where your procedures require it, and equipment calibration status is visible on the same record the store uses to issue the kit.",
    "capabilities": [
      "Equipment stock by serial number with lifecycle status and current holder",
      "Consumables (couplant, penetrant, developer, particles, chemicals, PPE, stationery) with reorder level and low-stock flag",
      "Movement ledger for consumables and inbound/outbound records for equipment",
      "Issue and return workflow with supervisor and manager approval",
      "Reservations with clash prevention across jobs",
      "Purchase vendor types (OEM, dealer, calibration lab) and NDT purchase types",
      "Purchase order lines linked to a specific equipment serial",
      "Stock locations such as site containers configured during implementation"
    ],
    "workflow": "Consumables are set up with a reorder level. As kits are issued to jobs, the movement ledger records the quantities, and when stock falls below the reorder level the item is flagged as low. The store raises a purchase order to the right vendor. Equipment going to site is reserved against the job, requested by the technician, approved by supervisor and manager, and issued with its condition recorded. On return, condition is checked again and the unit goes back into available stock or into the maintenance log if it needs repair.",
    "compliance": [
      "ISO 9001:2015 control of purchased materials and equipment records",
      "Consumable requirements named in MT and PT procedures",
      "ISO 45001:2018 PPE issue records",
      "Calibration evidence for issued equipment",
      "Client requirements for traceable equipment on site"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Asset Management (serial-number equipment, calibration, maintenance log)",
      "Purchase (vendor types and serial-linked order lines)",
      "Team Assignments (equipment double-booking prevention)",
      "Invoicing (equipment and consumables subtotals)",
      "Dashboards (issued equipment overdue)"
    ],
    "roi": "Crews stop running short of consumables mid-job because low stock is flagged before it becomes a problem. The store always knows who holds which serial number and in what condition it went out. Equipment and consumables used on a job can be shown on the invoice rather than absorbed as overhead.",
    "faqs": [
      [
        "Can we see which technician has a particular probe right now?",
        "Yes. Each serial-numbered item shows its assigned person, and the issue and return records show the history of who held it and when."
      ],
      [
        "Does the system warn us when consumables are running low?",
        "Yes. Consumables carry a reorder level, and items below it are flagged as low stock."
      ],
      [
        "Do you use scanning labels for check-out?",
        "Items carry an asset tag field and are issued through the approval workflow. Any scanning hardware you want to use is discussed as custom scope during implementation."
      ]
    ]
  },
  "project-management": {
    "headline": "Project management for NDT jobs: scope, methods, crew, equipment and results in one record",
    "overview": "Projects in the Atlantis NDT ERP are set up for inspection work rather than generic tasks. Each project carries the NDT job type, site, client PO, contract, methods, codes, scope and acceptance criteria, along with the assigned equipment and technicians, job status, and safety induction and work permit fields. Tasks carry the method, technician, component, result, indication and defect counts, and procedure and WPS references, so a project manager can see which components have been inspected and what was found without opening every report. Timesheets log work by type (inspection, travel, standby and setup) with method, billable flag, rate multiplier, site, client, equipment serial and approval, and they feed invoicing. Crew dispatch runs through Team Assignments, and the reports themselves are produced in NDT Reports with the work order, contract and drawing numbers captured. Views include kanban, list and calendar. Expenses, such as field costs and per diems, can be recorded and re-billed to the job.",
    "ndtAngle": "An NDT job is measured in components inspected, methods applied and results reported, not just hours. Because tasks carry indication and defect counts and link to the procedure and WPS used, the project view gives the job lead and the client-facing manager a real progress picture. Safety induction and work permit fields reflect the site access reality of refinery, plant and offshore work.",
    "capabilities": [
      "Project fields for NDT job type, site, client PO, contract, methods, codes, scope and acceptance criteria",
      "Assigned equipment and technicians, job status, safety induction and work permit fields",
      "Tasks with method, technician, component, result, indication and defect counts",
      "Procedure and WPS references on tasks",
      "Timesheets by work type (inspection, travel, standby, setup) with billable flag and rate multiplier",
      "Timesheet approval and invalid-certificate warning",
      "Expenses for field costs and per diems re-billed to jobs",
      "Kanban, list and calendar views"
    ],
    "workflow": "When a quotation is accepted, the project is opened with the client PO, scope, methods, codes and acceptance criteria. Technicians and equipment are assigned and dispatched through Team Assignments. Tasks are created per component or area, and as work proceeds they record the method, technician, result and indication counts. Technicians log inspection, travel, standby and setup time, which supervisors approve. Reports are written in NDT Reports and go through review and approval. At the end of the period, approved billable hours, equipment and consumables flow to the invoice, with job and PO number and site on the header.",
    "compliance": [
      "Client PO and contract terms captured on every project",
      "ASME and client codes and acceptance criteria recorded on the project",
      "ASNT SNT-TC-1A certification checks through timesheet warnings",
      "Site safety induction and work permit records",
      "ISO 9001:2015 planning and control of service provision"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Quotations (accepted quote to project)",
      "Team Assignments (crew and equipment dispatch)",
      "NDT Reports (method reports per job)",
      "Timesheets and Expenses",
      "Invoicing (hours, equipment and consumables billed)"
    ],
    "roi": "Project managers see progress in NDT terms, components done and indications found, rather than chasing technicians by phone. Billable hours are approved in the system and reach the invoice without retyping, which means fewer missed standby or travel hours on the bill. Site access details such as inductions and permits sit on the job record where the crew can see them.",
    "faqs": [
      [
        "Is there a timeline-style planning view?",
        "Projects use kanban, list and calendar views, and Team Assignments provides a calendar of crew assignments. Other planning views are discussed as custom scope during implementation."
      ],
      [
        "Can standby and travel time be billed separately from inspection time?",
        "Yes. Timesheets carry a work type of inspection, travel, standby or setup, a billable flag and a rate multiplier, and approved hours feed invoicing."
      ],
      [
        "Can we record inspection results against each component?",
        "Yes. Project tasks carry the component, method, technician, result and indication and defect counts, with procedure and WPS references."
      ]
    ]
  },
  "quality-management": {
    "headline": "Quality control for NDT reports, procedures, certifications and calibration",
    "overview": "Quality in an NDT company rests on four controls: qualified people, approved procedures, calibrated equipment and reviewed reports. The Atlantis NDT ERP builds each of these into the day-to-day apps rather than a separate quality silo. Reports move through draft, in progress, review, approved and sent, with inspector, reviewer and approver signatures and third-party inspector signature where required. Procedures pass through submitted, reviewed, approved and published, with locked approved revisions and a full history. Technician certificates and vision tests carry automatic status and 90-day warnings, and timesheets warn when a certificate is not valid. Equipment calibration records and the certificate register carry valid, expiring and expired status, and Team Assignments warns when assigned equipment is out of calibration. Dashboards pull the key quality indicators together: equipment calibration due and overdue, certifications expiring and expired, and issued equipment overdue. Surveys can collect client feedback after a job. Formal deviation handling and corrective action records are not a standard module and are configured during implementation if you need them.",
    "ndtAngle": "Most quality failures in NDT are small and preventable: a report issued without review, a procedure revision nobody approved, a technician whose vision test lapsed, a gauge sent out overdue. The Atlantis NDT ERP puts a check at each of those points, so the quality manager spends less time policing and more time on technical review.",
    "capabilities": [
      "Report workflow with inspector, reviewer and approver signatures before a report is sent",
      "Procedure approval workflow with locked approved revisions and revision snapshots",
      "Certificate and vision-test status with 90-day warning tasks",
      "Timesheet warning when a technician's certificate is not valid",
      "Calibration certificate register with valid, expiring and expired status",
      "Out-of-calibration warning in Team Assignments",
      "Dashboards for calibration due or overdue, certs expiring or expired, and issued equipment overdue",
      "Surveys for client feedback and competency questionnaires"
    ],
    "workflow": "Each morning, the quality manager checks the dashboard for expiring certificates, calibration due dates and overdue equipment returns. Reports waiting in review are checked against the procedure and standard references and approved or sent back. Procedures pending approval come with email reminders. When a job closes, a client feedback survey can be sent. Anything that needs a formal follow-up process is handled through the method configured for you during implementation.",
    "compliance": [
      "ISO 9001:2015 quality management system records",
      "ASNT SNT-TC-1A written practice: certification, vision tests and procedure approval",
      "ASME BPVC Section V procedure and calibration references",
      "Client requirements for reviewed and approved reports",
      "Company certifications tracked with alert days"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "NDT Reports (review and approval)",
      "Procedures (approval workflow)",
      "Certificates (technician status and alerts)",
      "Asset Management (calibration register)",
      "Dashboards and Surveys"
    ],
    "roi": "Reports stop leaving the office without a second pair of eyes, because sending follows approval in the workflow. Expiring certificates and calibrations are seen weeks ahead rather than on the day. The quality manager can show an auditor or client a consistent, dated trail for people, procedures, equipment and reports.",
    "faqs": [
      [
        "Can a report be sent to the client before it is approved?",
        "The report workflow runs draft, in progress, review, approved and sent, with reviewer and approver signatures recorded before the sent stage."
      ],
      [
        "Is there a corrective action module?",
        "Not as a standard feature. If you need a formal process for deviations and follow-up actions, it is configured during implementation as part of the agreed scope."
      ],
      [
        "Which quality indicators appear on the dashboard?",
        "Equipment calibration due and overdue, technician certifications expiring and expired, and issued equipment overdue, alongside the financial dashboard in Invoicing."
      ]
    ]
  },
  "work-order-management": {
    "headline": "Field job execution: offline reports, on-screen signatures and sync for NDT crews",
    "overview": "In the Atlantis NDT ERP, a field job is a team assignment linked to a project, and the work itself is recorded in NDT Reports. Technicians use an installable offline field app that works without signal, stores drafts and photos locally and syncs later. The app offers a method picker, photo capture, on-screen signature and PDF preview. Behind it, a REST API for field devices serves the jobs assigned to each technician and the equipment issued to them, and handles report submission and sync. Reports capture the work order, request, WPS, contract and drawing numbers, the procedure and standard references, and method-specific data: UT with a probe calibration table, RT source, technique, IQI type and placement, MT technique and particle type, PT method and developer, PAUT focal laws, MFL scan mode and item lines, UTT readings by direction, and weld or job lines with defect type and orientation. Seventeen report types are available, each with its own numbering sequence. Once synced, reports go through review and approval, and the assignment moves from in field to submitted and then closed.",
    "ndtAngle": "The biggest source of delay and error in NDT reporting is re-keying: paper field sheets typed up at the office days later. The offline field app captures method-specific data at the point of inspection, including photos and signatures, even inside a vessel or on a remote right-of-way with no coverage. Because the data model matches each method, the reviewer sees IQI placement for RT, particle type for MT or focal laws for PAUT in the right fields rather than in free-text notes.",
    "capabilities": [
      "Installable offline field app that works without signal and syncs later",
      "Method picker, photo capture, on-screen signature and PDF preview",
      "REST API for field devices: jobs assigned to me, equipment issued to me, report submission and sync",
      "17 report types (UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, Hardness, UTT, Ferrite, Holiday/coating, CR)",
      "Method-specific fields such as RT IQI type and placement, MT particle type, PT developer and PAUT focal laws",
      "Weld and job lines with defect type and orientation",
      "Work order, request, WPS, contract and drawing references",
      "Team assignment status from dispatched through in field, submitted and closed"
    ],
    "workflow": "The coordinator dispatches the crew through Team Assignments. Before leaving signal, the technician's app downloads the jobs assigned to them and the equipment issued to them. On site, they pick the method, fill in the report, take photos and sign on screen, all offline. When the device reconnects, drafts and photos sync. The reviewer checks the report, the approver signs, and the PDF is produced using the company template for that method. The assignment moves to submitted, then closed, and approved timesheet hours feed invoicing.",
    "compliance": [
      "ASME BPVC Section V method and procedure references on reports",
      "WPS references for weld inspection",
      "Third-party or authorised inspector name and signature",
      "ASNT SNT-TC-1A certification of inspector and reviewer",
      "Client report formats through versioned templates"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Team Assignments (dispatch status)",
      "NDT Reports (review, approval and PDF output)",
      "Asset Management (equipment issued to the technician)",
      "Project and Timesheets",
      "Invoicing"
    ],
    "roi": "Field data is entered once, on site, so the office stops retyping paper sheets and reports go out sooner. Photos and signatures arrive attached to the right report instead of in a separate chat thread. Coordinators can see which jobs are still in the field and which are waiting for review.",
    "faqs": [
      [
        "Does the field app work with no mobile signal?",
        "Yes. It is an installable offline app that stores drafts and photos on the device and syncs when a connection is available."
      ],
      [
        "Which NDT methods have their own report type?",
        "Seventeen: UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, Hardness, UT thickness, Ferrite, Holiday/coating and Computed Radiography, each with its own numbering sequence."
      ],
      [
        "Can the client's inspector sign the report?",
        "Yes. Reports record a third-party or authorised inspector name and signature alongside the inspector, reviewer and approver."
      ]
    ]
  }
};
