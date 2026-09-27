// Per-industry ERP knowledge. Rendered by ErpIndustryCityPage + ErpIndustryPage. Rewritten 2026-09-27 to describe only verified Atlantis NDT ERP features.
export interface IndustryKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const industryKnowledge: Record<string, IndustryKnowledge> = {
  "aerospace-quality-control": {
    "headline": "ERP for aerospace NDT shops: certified personnel, approved procedures and reviewed reports",
    "overview": "Aerospace NDT work, whether in an MRO hangar, a component shop or a supplier to a prime, depends on three things auditors check every time: qualified inspectors, approved techniques and calibrated equipment, all tied to a signed report. The Atlantis NDT ERP covers each of these. The Certificates app records technician certifications with scheme, level, method, certifying body and dates, and the scheme list includes an 'other' option so qualifications under an employer written practice such as NAS 410 can be recorded alongside ASNT, ISO 9712, PCN or CSWIP. Vision tests are tracked separately with near vision, colour perception and contrast, and warnings start 90 days before expiry. The Procedures app controls technique documents through submitted, reviewed, approved and published with locked revisions. Asset Management tracks UT instruments, eddy current units, UV lamps, yokes and reference standards by serial number with calibration certificates and expiry alerts. NDT Reports covers UT, PAUT, ECT, PT, MT, RT, CR and more, with inspector, reviewer and approver signatures. Aerospace-specific records such as first article forms or material review boards are not standard features and are configured during implementation where needed.",
    "ndtAngle": "In aerospace NDT, a single lapsed vision test or an uncontrolled technique sheet can become an audit finding against the whole shop. The Atlantis NDT ERP puts dated, signed records behind each step: certification status computed automatically, procedure revisions locked once approved, calibration certificates stored per serial number, and reports signed by inspector, reviewer and approver. Timesheets warn if a technician logs work while a certificate is not valid.",
    "capabilities": [
      "Technician certifications by scheme, level and method, including an 'other' scheme for employer written practices",
      "Vision tests (near vision Jaeger J1/J2, colour perception, contrast) with 90-day expiry warnings",
      "Examination sheets with general, specific and practical scores",
      "Procedure and technique control with locked approved revisions and full history",
      "Serial-number calibration records for UT, ECT, UV lamps, yokes and reference standards",
      "NDT Reports for UT, PAUT, ECT, PT, MT, RT and Computed Radiography with review and approval signatures",
      "Versioned report templates in the formats your customers require",
      "Aerospace-specific forms configured during implementation"
    ],
    "workflow": "A job is created with the customer PO, part or component details, methods and applicable specifications, and tasks are set up for each component or batch. The planner checks each inspector's certificates, vision test and medical fitness in their NDT profile, then reserves the calibrated equipment the technique requires; if a unit is already reserved or its calibration has lapsed, Team Assignments flags it. The inspector works to the approved technique revision, records results in the method report, for example ECT indications or PT method and developer, and signs. The reviewer and approver sign before the report is sent, and the PDF is produced in the customer's required template. Hours are logged against the job by work type and feed invoicing. Ahead of a customer or accreditation audit, the quality manager reviews the Expiring Soon and Expired menus, the calibration certificate register and pending procedure approvals, so any gap is closed before the auditor arrives.",
    "compliance": [
      "NAS 410 and EN 4179 qualifications recorded under employer written practices",
      "ASNT SNT-TC-1A and CP-189 certification records",
      "Customer and prime specifications referenced on procedures and reports",
      "Calibrated equipment and reference standard records",
      "ISO 9001:2015 and AS9100 quality system evidence records"
    ],
    "integrations": [
      "Certificates and Employees",
      "Procedures",
      "Asset Management (calibration)",
      "NDT Reports",
      "Project, Timesheets and Invoicing"
    ],
    "roi": "Inspector qualification, technique approval and equipment calibration are visible at a glance, so gaps are closed before an audit rather than during it. Vision tests stop lapsing unnoticed between multi-year certification cycles, because they carry their own warnings. Reports carry their signatures and references, which makes customer queries and source inspections quicker to answer, and quality staff spend less time assembling evidence by hand.",
    "faqs": [
      [
        "Can we record NAS 410 qualifications?",
        "Yes. Certification records include an 'other' scheme option, so qualifications under your NAS 410 or EN 4179 written practice can be recorded with level, method and dates."
      ],
      [
        "Does the ERP generate first article inspection forms?",
        "Not as a standard feature. Aerospace-specific forms are configured during implementation as part of the agreed scope."
      ],
      [
        "Does Atlantis train aerospace NDT inspectors?",
        "Atlantis training is based on ASNT SNT-TC-1A. The ERP can record other qualifications your inspectors hold, but Atlantis does not train or certify to other schemes."
      ]
    ]
  },
  "calibration-laboratories": {
    "headline": "Calibration records and certificate registers for labs serving NDT equipment",
    "overview": "Calibration labs that work on NDT equipment, such as flaw detectors, thickness gauges, yokes and UV lamps, can use the Atlantis NDT ERP to run the commercial and records side of the business. Equipment is tracked by serial number, and each calibration record captures provider, certificate number, standard used, range, the uncertainty stated on the certificate, accredited-lab flag, result (pass, fail or conditional) and next due date. The calibration certificate register holds the PDF with the lab's accreditation number and a valid, expiring or expired status, and daily email alerts can be configured with recipients, look-ahead days and resend interval. Staff competencies can be recorded in Certificates. Quotations, projects, timesheets and invoicing handle the commercial flow. The ERP is not a laboratory information system: it does not calculate measurement uncertainty or produce accredited certificates from raw data. Lab-specific workflows such as as-found and as-left data capture or customer recall notices are configured during implementation.",
    "ndtAngle": "For labs that calibrate NDT kit, the value is in the record structure that matches what NDT companies ask for: certificate number, standard, range, uncertainty, accreditation number and next due date against each serial number. The same fields are used by NDT companies running the Atlantis NDT ERP, so records are recognisable to both sides.",
    "capabilities": [
      "Serial-number records for instruments and reference standards",
      "Calibration records with provider, certificate number, standard, range, stated uncertainty and result",
      "Accredited-lab flag and lab accreditation number",
      "Certificate register with PDF and valid/expiring/expired status",
      "Configurable daily expiry alert emails",
      "Staff competency records in Certificates",
      "Quotations, projects, timesheets and invoicing for lab services",
      "Lab-specific workflows configured during implementation"
    ],
    "workflow": "A customer enquiry becomes a quotation listing the instruments to be calibrated, and on acceptance a project is opened. Each customer instrument is received and recorded by serial number with its type and accessories. The calibration is performed using your lab's own validated methods, and the result is entered with certificate number, standard used, range, stated uncertainty, pass, fail or conditional result and next due date, with the PDF certificate attached. The instrument is returned to the customer and the job's hours are logged and invoiced. Your own reference standards are tracked the same way, and expiry alerts, with the recipients and look-ahead days you choose, remind your team when a standard is falling due for its own calibration at an external accredited lab.",
    "compliance": [
      "ISO/IEC 17025 accreditation number recorded on certificates",
      "Reference standard calibration records per serial number",
      "ISO 9001:2015 records",
      "Customer requirements for certificate number, range and due date",
      "Uncertainty values as stated by the lab (not calculated by the ERP)"
    ],
    "integrations": [
      "Asset Management (calibration records and register)",
      "Certificates (staff competency)",
      "Quotations and Invoicing",
      "Purchase (reference standard calibration vendors)",
      "Dashboards"
    ],
    "roi": "Certificates and due dates are kept in one searchable register rather than scattered files. Your own reference standards are less likely to slip past their due dates, and quoting and invoicing run in the same system as the records.",
    "faqs": [
      [
        "Does the ERP calculate measurement uncertainty?",
        "No. It records the uncertainty stated on the certificate. Uncertainty evaluation stays within your lab's validated methods."
      ],
      [
        "Is this a LIMS?",
        "No. It is an NDT-focused ERP. Lab-specific workflows are discussed and configured during implementation as part of the agreed scope."
      ],
      [
        "Can we record our accreditation number on each certificate?",
        "Yes. The calibration certificate register records the lab accreditation number and a valid, expiring or expired status."
      ]
    ]
  },
  "construction-quality-assurance": {
    "headline": "ERP for construction QA firms running weld inspection and NDT on structural projects",
    "overview": "Construction QA and special inspection firms that perform NDT on structural steel, such as UT on complete-joint-penetration welds, MT on fillet welds and VT across the job, can use the Atlantis NDT ERP to manage that NDT work end to end. Projects capture job type, site, client PO, contract, methods, codes, scope and acceptance criteria, and tasks record component, method, technician, result and indication counts with WPS and procedure references. NDT Reports covers UT, MT, PT, VT, RT and Hardness with weld and job lines recording defect type and orientation, and inspector, reviewer and approver signatures. Technician certifications, vision tests and exams are tracked with expiry warnings. Equipment calibration is tracked per serial number. Team Assignments dispatches inspectors to sites and blocks double-booking. Materials testing workflows such as concrete or soils testing are outside the standard product and are configured during implementation if needed.",
    "ndtAngle": "On structural steel jobs, the building official, engineer and contractor all want the same thing: a weld inspection record they can trust. Weld lines with defect type and orientation, WPS references, and signed review give them that, while certification and calibration records back up who did the work and with what.",
    "capabilities": [
      "Projects with codes, scope, acceptance criteria, safety induction and work permit fields",
      "Tasks with component, method, result, indication counts and WPS references",
      "UT, MT, PT, VT, RT and Hardness report types",
      "Weld and job lines with defect type and orientation",
      "Inspector, reviewer and approver signatures",
      "Technician certification and vision-test tracking with 90-day warnings",
      "Equipment calibration per serial number",
      "Team Assignments dispatch with double-booking prevention"
    ],
    "workflow": "The project is opened with the specification, codes, acceptance criteria and safety induction and work permit details for the site. Inspectors are dispatched through Team Assignments with calibrated equipment, and the system blocks any inspector or instrument already committed to another project on the same dates. On site, they record weld results in the offline field app, including weld identification, defect type and orientation, photos and an on-screen signature, and sync when back in coverage. Project tasks show which connections or members have been inspected and how many indications were found. Reports are reviewed and approved in the office and sent to the client and the engineer. Time is logged by work type, approved and invoiced against the client PO.",
    "compliance": [
      "AWS D1.1 acceptance criteria referenced on reports",
      "ASNT SNT-TC-1A certification of NDT technicians",
      "WPS references on weld inspection records",
      "Project specifications and codes recorded per job",
      "Calibrated equipment records"
    ],
    "integrations": [
      "Project and Team Assignments",
      "NDT Reports and offline field app",
      "Certificates",
      "Asset Management",
      "Timesheets and Invoicing"
    ],
    "roi": "Weld inspection reports are completed on site and reviewed quickly, so contractors are not left waiting for results before they can proceed. Inspector and equipment clashes across busy projects are blocked at planning rather than discovered on the morning of the inspection. The firm can show certification, vision test and calibration evidence whenever a client, engineer or building official asks.",
    "faqs": [
      [
        "Does the ERP handle concrete or soils testing?",
        "Not as standard. It is built for NDT work. Materials testing workflows are configured during implementation if they are part of the agreed scope."
      ],
      [
        "Can we record weld defect type and orientation?",
        "Yes. Weld and job lines on reports record defect type and orientation, with an overall result for the report."
      ],
      [
        "Can inspectors work offline on site?",
        "Yes. The offline field app stores reports and photos locally and syncs later."
      ]
    ]
  },
  "environmental-testing-labs": {
    "headline": "ERP support for environmental labs: staff competency, equipment calibration and billing",
    "overview": "Environmental testing labs have needs that belong in a laboratory information system, such as sample chain of custody, holding times and QC batches, and the Atlantis NDT ERP is not that system. What it can provide, particularly for firms that also run inspection or field services, is the surrounding business layer. Staff qualifications and training records can be kept in Certificates with expiry warnings. Equipment such as balances and meters can be tracked by serial number with calibration records and a certificate register. Procedures can be controlled with approval workflow and locked revisions. Quotations, projects, timesheets, expenses and invoicing run the commercial side, and Team Assignments schedules field staff without double-booking. Lab-specific workflows are discussed and configured during implementation.",
    "ndtAngle": "Where an environmental firm also offers NDT or asset inspection, the Atlantis NDT ERP handles that side natively: method reports, technician certification and equipment calibration. The lab side keeps its own specialist system, while quotes, crews and invoicing can run in one place.",
    "capabilities": [
      "Staff qualification and training records with expiry warnings",
      "Equipment calibration records and certificate register per serial number",
      "Procedure control with approval workflow and locked revisions",
      "Quotations with branded PDF and online acceptance",
      "Projects, timesheets and expenses",
      "Invoicing with labour, equipment and consumables subtotals",
      "Team Assignments for field staff scheduling",
      "Lab-specific workflows configured during implementation"
    ],
    "workflow": "A client enquiry arrives through the website form and becomes a CRM lead, then a quotation with a branded PDF that the client can accept and sign online. The accepted quote is opened as a project. Field staff are scheduled through Team Assignments, which blocks overlapping leave and double-booking, and vehicles are assigned through Fleet. Equipment used is issued with approval and tracked with its calibration status. Staff log time and field expenses, which supervisors approve and finance invoices. Staff training and qualification records are kept current with expiry warnings. Analytical work itself is managed in your lab system or in workflows configured during implementation.",
    "compliance": [
      "ISO/IEC 17025 equipment calibration records",
      "Staff competency and training records",
      "Procedure approval and revision control",
      "ISO 9001:2015 records",
      "Data protection requirements configured per region"
    ],
    "integrations": [
      "Certificates",
      "Asset Management",
      "Procedures",
      "Quotations, Project and Invoicing",
      "Team Assignments"
    ],
    "roi": "Staff qualifications and equipment calibration are tracked with alerts, so neither lapses unnoticed before an assessment. Quotes, field scheduling, expenses and invoicing run in one system. Specialist lab functions stay where they belong, without duplicate spreadsheets for everything else.",
    "faqs": [
      [
        "Does the ERP manage sample chain of custody and holding times?",
        "No. Those are laboratory information system functions. They can be discussed as custom scope during implementation."
      ],
      [
        "Can we track calibration of lab equipment?",
        "Yes. Equipment is tracked by serial number with calibration records, a certificate register and expiry alerts."
      ],
      [
        "Can we schedule field staff?",
        "Yes. Team Assignments handles dispatch with availability and double-booking prevention."
      ]
    ]
  },
  "geotechnical-engineering": {
    "headline": "ERP support for geotechnical firms: field crews, equipment, staff records and billing",
    "overview": "Geotechnical firms run field crews, specialist equipment and a steady flow of project billing. The Atlantis NDT ERP can support those parts of the business. Team Assignments schedules crews with site GPS coordinates, mobilisation dates and double-booking prevention for people and equipment. Equipment is tracked by serial number with lifecycle status, issue and return approvals, maintenance log and calibration records. Staff certifications and training can be recorded with expiry warnings, and Fleet tracks vehicles, including whether a vehicle can carry radioactive sources and its transport licence expiry. Projects, timesheets, expenses and invoicing handle the commercial flow. Boring logs, laboratory soil testing and engineering reports are outside the standard product and would be configured during implementation. Where the firm also performs NDT, such as UT or MT on piles or steelwork, the NDT Reports app handles that work natively.",
    "ndtAngle": "Firms combining geotechnical and NDT services benefit most: the NDT side gets method reports, technician certification and calibration tracking, while the shared crew planning and equipment register covers both service lines.",
    "capabilities": [
      "Team Assignments with site GPS coordinates and double-booking prevention",
      "Serial-number equipment register with issue/return approvals and maintenance log",
      "Calibration records and certificate register with expiry alerts",
      "Staff certification and training records",
      "Fleet vehicles with source-carrying flag and transport licence expiry",
      "Projects, timesheets and expenses",
      "Invoicing with labour, equipment and consumables subtotals",
      "NDT Reports for any NDT work performed"
    ],
    "workflow": "A project is opened from an accepted quote with site, client PO and scope. Crews and equipment are assigned through Team Assignments using site GPS coordinates and mobilisation dates, and vehicles are assigned through Fleet with dates and mileage. Equipment is issued with supervisor and manager approval and its condition recorded, and comes back through the same process, with any damage logged in the maintenance record. Calibration and licence expiries are flagged by email in advance. Crews log time by work type, including travel and standby, and submit field expenses, which are approved and invoiced. Specialist geotechnical records are kept in your existing tools or in workflows configured during implementation.",
    "compliance": [
      "Equipment calibration records per serial number",
      "Transport licence records for vehicles carrying radioactive sources",
      "Staff certification records with expiry",
      "ASNT SNT-TC-1A records for any NDT staff",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "Team Assignments",
      "Asset Management",
      "Fleet",
      "Certificates",
      "Project, Timesheets and Invoicing"
    ],
    "roi": "Crews and equipment are planned without clashes, calibration and licence expiries are flagged in advance, and billing is driven from approved time, including travel and standby. Equipment damage is recorded at return rather than found on the next job. Specialist engineering work stays in the tools built for it.",
    "faqs": [
      [
        "Does the ERP produce boring logs?",
        "No. Boring logs and soil testing are outside the standard product and can be discussed as custom scope during implementation."
      ],
      [
        "Can we track vehicles that carry radioactive sources?",
        "Yes. Fleet records whether a vehicle can carry radioactive sources, with transport licence number and expiry."
      ],
      [
        "Can we track density gauge calibration?",
        "Yes. Any instrument can be tracked by serial number with calibration records and a certificate register."
      ]
    ]
  },
  "industrial-coatings-inspection": {
    "headline": "ERP for coatings inspection: Holiday/coating reports, inspector records and equipment calibration",
    "overview": "Coatings inspection firms working on tanks, pipelines, structures and offshore assets can use the Atlantis NDT ERP to run their inspection work. NDT Reports includes a Holiday/coating report type with its own numbering sequence, alongside UT thickness (UTT), VT and other methods often performed on the same assets. Reports capture work order, request, contract, drawing, procedure and standard references, an overall result, and inspector, reviewer and approver signatures. Company report templates in Excel, Word, PDF or HTML can reproduce the formats clients expect, with Excel templates filled automatically from mapped fields. Inspector qualifications can be recorded in Certificates, using the 'other' scheme option for coating inspector certifications, with expiry warnings. Holiday detectors, film thickness gauges and other instruments are tracked by serial number with calibration records and certificate expiry alerts. Detailed environmental condition logging and hold-point sign-off sequences are configured during implementation where needed.",
    "ndtAngle": "Many coatings contractors also carry out UT thickness and VT on the same assets. Having Holiday/coating, UTT and VT reports in one app, with one review workflow and shared templates, keeps the client's close-out package consistent.",
    "capabilities": [
      "Holiday/coating report type with its own numbering sequence",
      "UTT, VT and other method reports in the same app",
      "Work order, contract, drawing, procedure and standard references",
      "Inspector, reviewer and approver signatures",
      "Excel templates filled automatically from mapped fields",
      "Inspector qualification records with 'other' scheme option and expiry warnings",
      "Serial-number calibration records for holiday detectors and gauges",
      "Offline field app for site work"
    ],
    "workflow": "The job is set up as a project with the client's coating specification, drawings and acceptance criteria referenced. Inspectors are dispatched through Team Assignments with holiday detectors and gauges that have been checked against the calibration register. On site, they record holiday test and thickness results in the offline field app with photos and an on-screen signature, working without signal where necessary. Once synced, reports are reviewed and approved, and output in the client's template, with Excel layouts filled automatically. The client's third-party inspector can sign where required. Approved hours, equipment and consumables are invoiced against the client PO.",
    "compliance": [
      "Client coating specifications referenced on reports",
      "Coating inspector certifications recorded",
      "Calibration records for holiday detectors and thickness gauges",
      "ASNT SNT-TC-1A records for NDT staff",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "NDT Reports and offline field app",
      "Certificates",
      "Asset Management",
      "Project and Team Assignments",
      "Invoicing"
    ],
    "roi": "Coating and thickness reports come out in a consistent format with signatures and references in place. Instrument calibration and inspector qualifications are tracked with alerts, so neither lapses unnoticed.",
    "faqs": [
      [
        "Is there a report type for holiday testing?",
        "Yes. Holiday/coating is one of the 17 report types, with its own numbering sequence."
      ],
      [
        "Can we record coating inspector certifications?",
        "Yes. Certificates can be recorded under the 'other' scheme option with level, certifying body and expiry."
      ],
      [
        "Does the system log environmental conditions and hold points?",
        "Not as standard. These are configured during implementation if they are part of the agreed scope."
      ]
    ]
  },
  "marine-survey-companies": {
    "headline": "ERP for marine NDT and survey firms: marine-mode reports with class certificates merged",
    "overview": "The Atlantis NDT ERP includes a marine mode in NDT Reports built for ship and offshore work. Marine reports carry a vessel cover page and photo, inspection location and dates, and the PDF merges the classification-society certificate, the inspector's Level II certificate and the calibration certificate into one document. A library of classification societies covers DNV, ABS, Lloyd's Register, BV, RINA, IRS and ClassNK. Inspection photos are laid out in a 2-up grid. UT thickness (UTT) reports record readings by direction, and UT, MT, PT, VT and other methods are available for weld and repair inspection. Technician certifications and vision tests are tracked with expiry warnings, and equipment calibration per serial number. Team Assignments dispatches crews for port calls and drydock windows with double-booking prevention. Class survey scheduling and structural assessment remain with the vessel owner and class society.",
    "ndtAngle": "Thickness gauging and weld inspection for class are document-heavy: every report needs the firm's class approval, the gauger's certificate and a valid calibration certificate. Marine mode assembles those into the report PDF automatically, removing a tedious manual step on every vessel.",
    "capabilities": [
      "Marine mode with vessel cover page, photo, inspection location and dates",
      "PDF merges classification-society certificate, inspector Level II certificate and calibration certificate",
      "Classification society library: DNV, ABS, Lloyd's Register, BV, RINA, IRS, ClassNK",
      "Inspection photos in a 2-up grid",
      "UT thickness readings by direction",
      "UT, MT, PT and VT reports for weld and repair inspection",
      "Technician certification and vision-test tracking",
      "Crew dispatch with double-booking prevention"
    ],
    "workflow": "The job is created with the vessel name, port or yard, and inspection dates, and the relevant classification society is selected from the library. The crew is dispatched through Team Assignments with thickness gauges and flaw detectors whose calibration certificates are valid; the planner is warned if one is not. Readings by direction, weld results and photos are captured in the offline field app, often below deck with no signal, and synced later. The report is reviewed and approved, and the marine-mode PDF is generated with the vessel cover page, the 2-up photo grid, and the class, inspector Level II and calibration certificates merged in. The report goes to the owner or superintendent, and approved hours, including standby during port delays, are invoiced.",
    "compliance": [
      "Classification society approvals attached to reports (DNV, ABS, LR, BV, RINA, IRS, ClassNK)",
      "Inspector Level II certificate attached to reports",
      "Calibration certificate attached to reports",
      "ASNT SNT-TC-1A certification records",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "NDT Reports (marine mode)",
      "Certificates",
      "Asset Management (calibration certificates)",
      "Team Assignments",
      "Invoicing"
    ],
    "roi": "Marine reports go out with the right certificates attached every time, without manual PDF assembly. Gauger certifications and gauge calibrations are tracked with alerts, so a vessel job is not held up by an expired document.",
    "faqs": [
      [
        "Which classification societies are in the library?",
        "DNV, ABS, Lloyd's Register, BV, RINA, IRS and ClassNK."
      ],
      [
        "Does the ERP track vessel survey due dates?",
        "No. Survey scheduling remains with the owner and class society. The ERP manages your inspection jobs, crews, reports and certificates."
      ],
      [
        "Are the certificates merged automatically?",
        "Yes. In marine mode, the report PDF merges the classification-society certificate, the inspector's Level II certificate and the calibration certificate."
      ]
    ]
  },
  "metrology-laboratories": {
    "headline": "ERP support for metrology labs: instrument records, staff competency and billing",
    "overview": "Metrology labs need specialist measurement software for their technical work, and the Atlantis NDT ERP does not replace it. What it offers is a practical business and records layer. Instruments and reference standards are tracked by serial number with calibration records capturing provider, certificate number, standard, range, stated uncertainty, accredited-lab flag, result and next due date, plus a certificate register with expiry alerts. Staff competencies can be recorded in Certificates. Procedures can be controlled with approval workflow and locked revisions. Quotations, projects, timesheets and invoicing run the commercial side. For firms that offer both metrology and NDT, the NDT side is handled natively with method reports and technician certification. Measurement-specific workflows are configured during implementation.",
    "ndtAngle": "Where a metrology lab sits inside a broader inspection company, shared records help: the same equipment register, calibration certificate register and staff records serve both the measurement and NDT service lines.",
    "capabilities": [
      "Serial-number records for instruments and reference standards",
      "Calibration records with stated uncertainty and accredited-lab flag",
      "Certificate register with expiry alerts",
      "Staff competency records",
      "Procedure control with locked revisions",
      "Quotations with online acceptance",
      "Projects, timesheets and invoicing",
      "Measurement-specific workflows configured during implementation"
    ],
    "workflow": "A customer job is quoted with the items and services required, accepted online and opened as a project. Staff assigned to the job are checked for current competency records, and reference standards used are checked for calibration status in the certificate register. Work is performed in your measurement tools, and results are issued through your established process. Procedures used are controlled in the Procedures app with approved revisions locked. Time is logged against the project, approved and invoiced from the ERP, and the financial dashboard shows revenue and margin over a 12-month view.",
    "compliance": [
      "ISO/IEC 17025 reference standard records",
      "Staff competency records",
      "Procedure approval and revision control",
      "ISO 9001:2015 records",
      "Customer requirements for calibration evidence"
    ],
    "integrations": [
      "Asset Management",
      "Certificates",
      "Procedures",
      "Quotations and Invoicing",
      "Dashboards"
    ],
    "roi": "Reference standards stay in date because expiries are flagged by email, staff competency records are current and easy to show an assessor, and billing runs from approved time. The lab gains a single place for the business side without adding another spreadsheet.",
    "faqs": [
      [
        "Does the ERP calculate measurement uncertainty?",
        "No. It records uncertainty as stated on calibration certificates."
      ],
      [
        "Can it handle both metrology and NDT services?",
        "Yes, for the business and records side. NDT work is handled natively; measurement-specific workflows are configured during implementation."
      ],
      [
        "Can we control our procedures?",
        "Yes. The Procedures app provides approval workflow, locked revisions and revision history."
      ]
    ]
  },
  "ndt-inspection-companies": {
    "headline": "ERP built for NDT inspection companies: reports, certifications, crews, equipment and billing",
    "overview": "The Atlantis NDT ERP is designed first for NDT service companies. NDT Reports covers 17 report types (UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, Hardness, UTT, Ferrite, Holiday/coating and Computed Radiography), each with its own numbering and method-specific fields, a draft to sent workflow with inspector, reviewer and approver signatures, and versioned company templates. An offline field app lets technicians report without signal. Certificates tracks technician certifications, vision tests and exams with automatic status and 90-day warnings. Procedures controls NDT procedures through approval with locked revisions. Team Assignments dispatches crews and blocks double-booking of technicians and equipment. Asset Management tracks instruments and probes by serial number with calibration records and issue approvals. Quotations produce branded quotes with online acceptance, and Invoicing bills from approved timesheets with labour, equipment and consumables subtotals. Assessment of client plant integrity remains with the asset owner; the ERP runs your inspection business.",
    "ndtAngle": "Every part of the system uses NDT language: methods, levels, schemes, IQIs, focal laws, particle types, probe calibration tables, WPS references. That means less configuration to make it fit and less friction for technicians, Level IIIs and coordinators who use it every day.",
    "capabilities": [
      "17 NDT report types with method-specific fields and own numbering",
      "Report workflow with inspector, reviewer, approver and third-party inspector signatures",
      "Offline field app with photos, on-screen signature and sync",
      "Technician certification, vision-test and exam tracking with 90-day warnings",
      "Procedure approval workflow with locked revisions",
      "Crew dispatch with technician and equipment double-booking blocked",
      "Serial-number equipment register with calibration records and issue approvals",
      "Quotations with online acceptance and invoicing from approved timesheets"
    ],
    "workflow": "An enquiry arrives through the website, email or a business card photo and becomes a CRM lead with service type, industry sector, site country and estimated technicians and days; the NDT lead score ranks it. The estimator builds a quotation with method-flagged service products, applicable codes and project dates, and the client accepts and signs online. On acceptance, a project is opened with client PO, scope and acceptance criteria, and the crew and equipment are dispatched through Team Assignments, which blocks double-booking and warns about out-of-calibration units. Technicians report in the offline field app using the right method report and sync when back in coverage. Reports are reviewed and approved, then sent in the company or client template. Approved timesheet hours, equipment and consumables are invoiced, and the financial dashboard shows revenue, gross margin and outstanding invoices.",
    "compliance": [
      "ASNT SNT-TC-1A and CP-189 certification records",
      "ISO 9712, PCN and CSWIP certificates recorded",
      "ASME BPVC Section V procedure and standard references",
      "Calibrated equipment records per serial number",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "CRM and Quotations",
      "Project and Team Assignments",
      "NDT Reports and offline field app",
      "Certificates and Asset Management",
      "Timesheets and Invoicing"
    ],
    "roi": "Reports are captured once on site and go out sooner. Crew and equipment clashes are blocked, expiring certificates are seen weeks ahead, and billable hours reach the invoice. The business runs on one system instead of a patchwork of spreadsheets.",
    "faqs": [
      [
        "Does the ERP calculate inspection intervals for our clients' equipment?",
        "No. It runs your inspection business: quotes, crews, reports, certifications, equipment and billing. Integrity assessment remains with the asset owner."
      ],
      [
        "Which methods are supported?",
        "UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, Hardness, UT thickness, Ferrite, Holiday/coating and Computed Radiography."
      ],
      [
        "Can technicians report offline?",
        "Yes. The offline field app stores drafts and photos locally and syncs later."
      ]
    ]
  },
  "oilfield-services": {
    "headline": "ERP for oilfield NDT services: crew dispatch, method reports and certification tracking",
    "overview": "Oilfield service companies performing NDT on tubulars, wellhead equipment and field facilities can run their inspection operations on the Atlantis NDT ERP. Team Assignments dispatches crews with site GPS coordinates and mobilisation and demobilisation dates, and blocks double-booking of technicians and equipment. NDT Reports covers UT, UTT, MT, PT, VT, MFL scans and other methods, with job lines recording items, defect type and orientation, and signatures from inspector, reviewer and approver. Technician certifications, vision tests and medical fitness expiry are tracked. Equipment is tracked by serial number with calibration and issue approvals. Timesheets separate inspection, travel, standby and setup time with a rate multiplier, which supports day-rate and standby billing. Joint-by-joint tally tracking and client contractor-portal documents are configured during implementation where required.",
    "ndtAngle": "Oilfield work is call-out driven, with standby and travel making up much of the billable time. Timesheets by work type and invoices with labour, equipment and consumables subtotals capture it properly. MFL item lines and job lines give structure to tubular inspection results.",
    "capabilities": [
      "Crew dispatch with GPS site coordinates and mobilisation dates",
      "Technician and equipment double-booking blocked",
      "MFL reports with scan mode and item lines",
      "UT, UTT, MT, PT and VT reports with job lines and defect orientation",
      "Technician certification, vision-test and medical fitness tracking",
      "Serial-number equipment with calibration and issue approvals",
      "Timesheets by work type (inspection, travel, standby, setup) with rate multiplier",
      "Invoices with labour, equipment and consumables subtotals"
    ],
    "workflow": "A call-out is logged against the client and opened as a team assignment with the well site or yard location and mobilisation dates. The coordinator checks technician availability and certifications and assigns the crew, and the system blocks anyone already committed elsewhere. The crew takes calibrated equipment issued with supervisor and manager approval, and a suitable vehicle is assigned through Fleet. Results are recorded in the offline field app, with MFL item lines or job lines capturing each item inspected. Reports are reviewed and approved, and sent to the client. Travel, standby, setup and inspection time are approved and invoiced with the client PO, with labour, equipment and consumables shown separately.",
    "compliance": [
      "ASNT SNT-TC-1A certification records",
      "Client specifications referenced on reports",
      "Calibrated equipment records",
      "Medical fitness records",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "Team Assignments",
      "NDT Reports",
      "Certificates",
      "Asset Management",
      "Timesheets and Invoicing"
    ],
    "roi": "Standby and travel hours are captured and billed rather than lost between the field and the office. Crews go out with certified technicians and calibrated equipment, and reports are ready faster because they are completed on site. Clients get invoices that show labour, equipment and consumables clearly, which tends to shorten approval.",
    "faqs": [
      [
        "Can we bill standby time?",
        "Yes. Timesheets record standby as a work type with a rate multiplier, and approved hours feed invoicing."
      ],
      [
        "Is there a report type for MFL?",
        "Yes. MFL reports record scan mode and item lines."
      ],
      [
        "Do you sync with contractor-management portals?",
        "No. Any portal-related document tracking is configured during implementation as part of the agreed scope."
      ]
    ]
  },
  "pipeline-integrity-services": {
    "headline": "ERP for pipeline NDT contractors: dig-site reports, crew dispatch and certification tracking",
    "overview": "Pipeline NDT contractors, including those doing dig verification, girth weld inspection and thickness surveys, can manage their operations on the Atlantis NDT ERP. Team Assignments dispatches crews to right-of-way sites with GPS coordinates and mobilisation dates, and blocks double-booking of technicians and equipment. NDT Reports covers UT, UTT, PAUT, TOFD, RT, CR, MT and PT, with weld lines, defect type and orientation, and signatures. The offline field app works on remote sites with no signal. Technician certifications and vision tests are tracked with 90-day warnings, and equipment calibration by serial number. In-line inspection data analysis and integrity assessment remain with the operator and ILI vendor; the ERP manages your field work, reports and business.",
    "ndtAngle": "Pipeline crews spend long stretches in remote areas without coverage. Offline reporting with photos and signatures, synced later, keeps reports moving. Crew and equipment clashes across spreads are blocked at planning.",
    "capabilities": [
      "Crew dispatch with site GPS coordinates",
      "Offline field app for remote right-of-way work",
      "UT, UTT, PAUT, TOFD, RT, CR, MT and PT reports",
      "Weld lines with defect type and orientation",
      "RT source, technique, IQI type and placement fields",
      "Technician certification and vision-test tracking",
      "Equipment calibration per serial number",
      "Fleet vehicles with source-carrying flag and licence expiry"
    ],
    "workflow": "Dig sites or weld packages are set up as tasks under a project carrying the operator's PO, specification and acceptance criteria. Crews are dispatched through Team Assignments with site GPS coordinates, calibrated equipment and vehicles; radiography crews are assigned vehicles recorded as able to carry sources, with a valid transport licence. Technicians record results offline, including RT technique and IQI details or UT thickness readings by direction, and sync when they reach coverage. Reports are reviewed and approved and sent to the operator, with third-party inspector signature where required. Travel, standby and inspection hours are approved and invoiced.",
    "compliance": [
      "API 1104 acceptance criteria referenced on weld reports",
      "ASNT SNT-TC-1A certification records",
      "RT technique and IQI records",
      "Transport licence records for source vehicles",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "Team Assignments",
      "NDT Reports and offline field app",
      "Certificates",
      "Asset Management and Fleet",
      "Invoicing"
    ],
    "roi": "Reports from remote sites arrive complete, with photos and signatures attached, instead of waiting for a paper pack to reach the office. Crews, equipment and vehicles are planned across spreads without clashes, and certification, calibration and transport licence expiries are flagged in advance. Travel and standby time on long pipeline jobs is captured and billed.",
    "faqs": [
      [
        "Does the ERP analyse in-line inspection data?",
        "No. ILI analysis and integrity assessment remain with the operator and ILI vendor. The ERP manages your NDT field work and reporting."
      ],
      [
        "Can crews report without signal?",
        "Yes. The offline field app stores reports and photos locally and syncs later."
      ],
      [
        "Are RT technique details recorded?",
        "Yes. RT reports record source, technique, IQI type and placement."
      ]
    ]
  },
  "welding-fabrication-shops": {
    "headline": "ERP for fabrication shops running NDT: weld reports, WPS references and certified inspectors",
    "overview": "Fabrication shops that perform NDT in-house or manage NDT subcontractors can use the Atlantis NDT ERP to control that work. NDT Reports covers RT, CR, UT, PAUT, TOFD, MT, PT, VT, PWHT, PMI, Hardness and Ferrite, with weld lines recording defect type and orientation, and references to WPS, drawing, contract and procedure. Reports move through review and approval with signatures, and third-party or authorised inspector signature is supported. Project tasks record component, method, technician, result and indication counts with WPS references. Technician certifications, vision tests and exams are tracked. Equipment calibration is tracked per serial number. Welder qualification and material traceability are outside the standard product and are configured during implementation if required.",
    "ndtAngle": "Fabrication data books need every weld's NDT results with the right references and signatures. With WPS and drawing references on each report and weld lines recording defects, NDT results can be pulled together consistently. PWHT, PMI, Hardness and Ferrite reports sit in the same system.",
    "capabilities": [
      "RT, CR, UT, PAUT, TOFD, MT, PT and VT weld reports",
      "PWHT, PMI, Hardness and Ferrite report types",
      "Weld lines with defect type and orientation",
      "WPS, drawing, contract and procedure references",
      "Third-party or authorised inspector signature",
      "Project tasks with component, result and indication counts",
      "Technician certification and vision-test tracking",
      "Welder qualification configured during implementation"
    ],
    "workflow": "A project is opened for the fabrication job with the client PO, codes and acceptance criteria. NDT is requested for weld packages as project tasks, and inspectors are assigned with calibrated equipment. Inspectors record results against each weld with WPS and drawing references, defect type and orientation, and an overall result of acceptable, not acceptable or acceptable with remarks. Repairs are re-inspected and reported the same way. Reports are reviewed, approved and signed, including by the authorised or third-party inspector where required, and output in the client's template. Signed reports are gathered for the data book, and in-house NDT hours or subcontracted NDT costs are recorded against the project.",
    "compliance": [
      "ASME BPVC Section V and Section VIII acceptance references",
      "AWS D1.1 acceptance references",
      "WPS references on weld reports",
      "ASNT SNT-TC-1A certification records",
      "ISO 9001:2015 records"
    ],
    "integrations": [
      "NDT Reports",
      "Project",
      "Certificates",
      "Asset Management",
      "Invoicing"
    ],
    "roi": "NDT results come in a consistent format with references and signatures, which makes data book assembly easier and reduces back-and-forth with the client's inspector. Inspector certifications, vision tests and equipment calibration are tracked with alerts, so a lapsed document does not hold up final acceptance. Project tasks show which weld packages are complete at a glance.",
    "faqs": [
      [
        "Does the ERP track welder qualifications?",
        "Not as standard. Welder qualification tracking is configured during implementation if required."
      ],
      [
        "Can the authorised inspector sign reports?",
        "Yes. Reports record a third-party or authorised inspector name and signature."
      ],
      [
        "Are PMI and hardness reports supported?",
        "Yes. PMI, Hardness, Ferrite and PWHT are among the 17 report types."
      ]
    ]
  }
};
