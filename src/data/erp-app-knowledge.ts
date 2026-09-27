// Per-app ERP knowledge. Rendered by ErpIndustryAppPage. Rewritten 2026-09-27 to describe only verified Atlantis NDT ERP features.
export interface AppKnowledge { headline: string; overview: string; ndtAngle: string; capabilities: string[]; workflow: string; compliance: string[]; integrations: string[]; roi: string; faqs: [string,string][]; }
export const appKnowledge: Record<string, AppKnowledge> = {
  "accounting": {
    "headline": "NDT invoicing from approved timesheets, with labour, equipment and consumables split out",
    "overview": "Invoicing in the Atlantis NDT ERP is set up around how inspection companies actually bill. The invoice header carries the NDT project, job or PO number, site, invoice type and industry sector, and shows separate subtotals for labour, equipment and consumables so the client can see what they are paying for. Each invoice line can carry a cost centre, NDT method, equipment serial, technician, rate type and days or hours. Approved timesheet hours, with their billable flag and rate multiplier, feed billing directly, so standby, travel and overtime are not lost between the field and the office. A custom invoice layout presents all of this cleanly. Cost centres let you see where revenue and costs sit. A financial dashboard shows revenue, cost of sales, gross margin, operating expenses, EBITDA, outstanding invoices, bills and expenses, with a 12-month view. Payments, payment reminders and taxes are part of the standard accounting setup, with taxes configured for your country during implementation. Multi-currency and multi-company needs are also configured during implementation.",
    "ndtAngle": "NDT billing is detailed: day rates by level, standby hours, travel days, equipment hire by serial and consumables by job. When those details live on paper timesheets and spreadsheets, hours go unbilled and clients query invoices. Here each invoice line can name the technician, method and equipment serial, and the hours come from approved timesheets that already carry work type (inspection, travel, standby, setup) and a rate multiplier. The client sees a clear breakdown, and your finance team does not have to rebuild it by hand.",
    "capabilities": [
      "Invoice header with NDT project, job or PO number, site, invoice type and industry sector",
      "Subtotals for labour, equipment and consumables",
      "Invoice lines with cost centre, method, equipment serial, technician, rate type and days or hours",
      "Billable timesheet hours with rate multiplier feeding billing",
      "Custom invoice layout",
      "Financial dashboard: revenue, cost of sales, gross margin, operating expenses, EBITDA, outstanding invoices, bills, expenses, 12-month view",
      "Payments and payment reminders",
      "Taxes, multi-currency and multi-company configured during implementation"
    ],
    "workflow": "Technicians log time against the project with work type, method, site and equipment serial, and supervisors approve it. At the billing point, finance draws the approved billable hours onto the invoice, adds equipment and consumables, and checks the labour, equipment and consumables subtotals. The invoice goes out in your custom layout with the client's PO number on the header. Payments are recorded as they arrive, and reminders go out on overdue invoices. The financial dashboard shows the 12-month picture of revenue, margin and outstanding amounts.",
    "compliance": [
      "Client PO and job number shown on every invoice",
      "Country taxes configured during implementation (no certified e-invoicing claims)",
      "Timesheet approval before hours are billed",
      "Cost centre reporting for management accounts",
      "ISO 9001:2015 contract and billing records"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Timesheets (billable hours and rate multiplier)",
      "Project (NDT project and client PO)",
      "Quotations (accepted quote and sales order)",
      "Asset Management and Inventory (equipment and consumables)",
      "Expenses (field costs re-billed to jobs)",
      "Dashboards (financial dashboard)"
    ],
    "roi": "Standby, travel and overtime hours reach the invoice because they are approved in the system rather than copied from paper. Clients get invoices that show labour, equipment and consumables separately, which tends to mean fewer queries and faster approval. Management sees margin and outstanding invoices on one dashboard instead of waiting for a month-end spreadsheet.",
    "faqs": [
      [
        "Can we bill standby and travel at different rates from inspection time?",
        "Yes. Timesheets carry a work type and a rate multiplier, and invoice lines carry a rate type, so different kinds of time can be billed differently."
      ],
      [
        "Does the invoice show which technician and equipment were used?",
        "Yes. Invoice lines can carry the technician, NDT method and equipment serial, and the header shows subtotals for labour, equipment and consumables."
      ],
      [
        "Is the system certified for government e-invoicing schemes?",
        "No certification is claimed. Taxes and any country-specific invoicing requirements are configured during implementation for your jurisdiction."
      ]
    ]
  },
  "cmms": {
    "headline": "Maintenance and calibration management for NDT instruments, probes and blocks",
    "overview": "For an NDT company, maintenance management is about keeping instruments, probes, blocks and vehicles fit for the next job. In the Atlantis NDT ERP this is handled by Asset Management together with the Maintenance app. Every item is tracked by serial number with its type, asset tag, firmware, accessories, condition and lifecycle status (new, active, in calibration, in repair, rented out, retired, disposed). The maintenance log records preventive, corrective, repair, cleaning, firmware update and probe replacement work, with condition before and after. Calibration records hold the provider, certificate number, standard, range, uncertainty, accredited-lab flag, result and next due date, and the calibration certificate register shows valid, expiring and expired status with PDF copies and expiry alerts. The Maintenance app handles preventive and corrective requests for instruments, vehicles and site equipment. Fleet records note whether a vehicle can carry radioactive sources and track transport licence number and expiry. This is equipment maintenance for your own kit; it does not connect to your clients' plant maintenance systems.",
    "ndtAngle": "A damaged probe cable, a flaw detector with outdated firmware or a UV lamp past its service date can compromise an inspection. Because condition is recorded at every issue and return, problems are caught when a unit comes back rather than when it reaches the next site. Team Assignments warns when equipment assigned to a job is out of calibration, and the calibration register gives an auditor the certificate for any serial number on request.",
    "capabilities": [
      "Serial-number register with lifecycle status: new, active, in calibration, in repair, rented out, retired, disposed",
      "Maintenance log: preventive, corrective, repair, cleaning, firmware update, probe replacement",
      "Condition recorded before and after maintenance, and at issue and return",
      "Calibration records with provider, certificate number, standard, range, uncertainty, accredited-lab flag, result and next due date",
      "Calibration certificate register with valid/expiring/expired status, PDF and expiry alerts",
      "Maintenance requests for instruments, vehicles and site equipment",
      "Fleet records for vehicles able to carry radioactive sources, with transport licence number and expiry",
      "Out-of-calibration warning when equipment is assigned to a job"
    ],
    "workflow": "Each instrument is registered with its calibration frequency and maintenance history. When a technician returns a unit, the store records its condition; if something is wrong, a corrective maintenance entry or maintenance request is opened and the unit goes to in repair. Preventive tasks such as cleaning or firmware updates are logged as they are done. As calibration comes due, the certificate register flags it and alert emails go out, the unit is sent to the lab through a purchase order linked to its serial, and the new certificate is recorded on return. Planners see a warning if they try to send an out-of-calibration unit to a job.",
    "compliance": [
      "ASME BPVC Section V calibration evidence for instruments and blocks",
      "ISO 9001:2015 control of monitoring and measuring equipment",
      "Accredited calibration lab certificates (accreditation number recorded)",
      "Transport licence records for vehicles carrying radioactive sources",
      "ASNT SNT-TC-1A written-practice equipment evidence"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Asset Management (serial-number register and calibration)",
      "Maintenance app (preventive and corrective requests)",
      "Fleet (source-carrying vehicles and licences)",
      "Purchase (calibration lab vendors, serial-linked order lines)",
      "Team Assignments (out-of-calibration warning)"
    ],
    "roi": "Faulty equipment is caught at return rather than on the next job. Calibration expiries are flagged early enough to book the lab without disrupting work. Every serial number has a clear maintenance and calibration history, which makes audits and client equipment queries straightforward.",
    "faqs": [
      [
        "Does this sync with our clients' maintenance systems?",
        "No. It manages your own NDT equipment, vehicles and site equipment. Any exchange of data with a client system would be discussed as custom scope during implementation."
      ],
      [
        "Can we log firmware updates and probe replacements?",
        "Yes. The maintenance log includes firmware update and probe replacement entries alongside preventive, corrective, repair and cleaning work."
      ],
      [
        "Are radiography vehicles covered?",
        "Fleet records whether a vehicle can carry radioactive sources and tracks its transport licence number and expiry, and vehicles can be assigned to a project and driver with dates and mileage."
      ]
    ]
  },
  "crm": {
    "headline": "CRM for NDT sales: lead scoring, service lines, drip emails and branded quotations",
    "overview": "The CRM in the Atlantis NDT ERP is set up for selling inspection services. Leads and opportunities carry the service line, lead source, NDT service type, industry sector, site country, and estimated technicians and days, so estimators see the size of the job before quoting. An NDT lead score from 0 to 100 classes each lead as hot, warm, nurture or cold, helping sales focus on the enquiries most likely to become work. Leads can be imported from CSV, and a lead can be enrolled in a drip email sequence, with an AI-personalised email preview before anything is sent. The Business Cards app turns a photo of a card into a CRM lead in one click, reading name, company, title, email, phones and website. Website enquiry forms feed the CRM directly. When an opportunity is ready, a quotation is created with job type, site, project dates and applicable codes, NDT service products flagged by method and category, and an optional global discount. The quotation PDF is branded, and the client can accept and sign it online, which converts it to a sales order.",
    "ndtAngle": "NDT enquiries rarely look like standard sales leads. A refinery maintenance planner wants a UT and MT crew for a shutdown; a fabricator needs RT on a batch of welds next week. Capturing service type, industry, site country and estimated technicians and days on the lead means the operations manager can judge crew needs early, and the lead score helps separate a real job from a general enquiry. Quotations carry applicable codes and method-flagged service products, so the scope in the quote matches what the crew will actually do.",
    "capabilities": [
      "Lead and opportunity fields for service line, lead source, NDT service type, industry sector and site country",
      "Estimated technicians and days on each opportunity",
      "NDT lead score 0 to 100 with hot, warm, nurture and cold bands",
      "Lead import from CSV",
      "AI-personalised email preview and enrolment in drip email sequences",
      "Business Cards app: card photo to CRM lead or mailing list",
      "Quotations with job type, site, project dates, applicable codes and global discount",
      "Branded quotation PDF with online acceptance and signature converting to a sales order"
    ],
    "workflow": "An enquiry arrives through the website form, email or a business card collected at an event, and becomes a lead with service type, industry and site country. The lead score places it as hot, warm, nurture or cold. Nurture leads can be enrolled in a drip sequence for the relevant service line. Hot leads move to an opportunity where the estimator records estimated technicians and days and builds the quotation from NDT service products. The client receives a branded PDF, accepts and signs online, and the quote becomes a sales order, ready to open as a project.",
    "compliance": [
      "Applicable codes and standards recorded on each quotation",
      "Client contract review before acceptance (ISO 9001:2015)",
      "Unsubscribe handling in drip sequences",
      "Data protection requirements configured for your region during implementation",
      "Online client acceptance and signature on quotations"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Quotations and Sales (online acceptance to sales order)",
      "AI Marketing and Email Marketing (drip sequences)",
      "Business Cards (card photo to lead)",
      "Website (enquiry forms)",
      "Project (accepted work to NDT project)"
    ],
    "roi": "Sales stop losing enquiries in inboxes, because every lead lands in one place with the details operations needs. Scoring helps the team spend time on real jobs first. Quotes go out faster and in a consistent branded format, and online acceptance removes the back-and-forth of signed PDFs.",
    "faqs": [
      [
        "How is the NDT lead score worked out?",
        "Each lead gets a score from 0 to 100 and a band of hot, warm, nurture or cold based on its NDT details. The scoring rules can be tuned during implementation."
      ],
      [
        "Can clients accept quotations online?",
        "Yes. The branded quotation can be accepted and signed online by the client, which converts it to a sales order."
      ],
      [
        "Can we import our existing contact lists?",
        "Yes. Leads can be imported from CSV, and business cards can be added from a photo using the Business Cards app."
      ]
    ]
  },
  "inventory-management": {
    "headline": "NDT equipment by serial number and consumables with reorder levels and movement records",
    "overview": "Inventory in the Atlantis NDT ERP covers the two kinds of stock an inspection company depends on. Equipment, meaning flaw detectors, gauges, probes, yokes, lamps and calibration blocks, is tracked by serial number with equipment type, asset tag, firmware, accessories, assigned person, condition, lifecycle status and calibration status. Consumables such as couplant, penetrant and developer, magnetic particles, chemicals, PPE and stationery carry a reorder level, a low-stock flag and a movement ledger. Equipment issue and return go through supervisor and manager approval with condition recorded both ways, reservations prevent clashes between jobs, and inbound and outbound movements are logged. Purchase supports vendor types such as OEM, dealer and calibration lab, NDT purchase types, and order lines linked to a specific serial. Multiple stock locations, such as a main store and site containers, are configured during implementation using standard locations.",
    "ndtAngle": "For NDT crews the costly failures are simple ones: running out of penetrant on day two of a shutdown, or arriving with the wrong probe because the right one was issued to another job. Low-stock flags and serial-number reservations deal with both. Consumable batch details can be noted where your MT and PT procedures require them, and equipment calibration status is on the same record the store uses when issuing kit.",
    "capabilities": [
      "Serial-number tracking of instruments, probes, blocks and accessories",
      "Lifecycle status and calibration status on each item",
      "Consumables with reorder level, low-stock flag and movement ledger",
      "Issue and return approval by supervisor and manager, condition recorded at both",
      "Reservations with clash prevention",
      "Inbound and outbound movement records",
      "Purchase vendor types (OEM, dealer, calibration lab) and serial-linked order lines",
      "Stock locations such as site containers configured during implementation"
    ],
    "workflow": "Goods are received against purchase orders, with equipment registered by serial number and consumables added to stock. When a job is planned, equipment is reserved; the technician then requests it, a supervisor and manager approve, and the store records condition on issue. Consumables issued to the job are recorded in the movement ledger, and items falling below reorder level are flagged for purchasing. On return, equipment condition is recorded again and any issues go to the maintenance log.",
    "compliance": [
      "ISO 9001:2015 control of purchased products and equipment records",
      "Consumable requirements named in MT and PT procedures",
      "ISO 45001:2018 PPE issue records",
      "Calibration evidence for issued equipment",
      "Client requirements for traceable equipment on site"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Asset Management (equipment register, calibration, maintenance)",
      "Purchase (vendor types and serial-linked lines)",
      "Team Assignments (equipment double-booking block)",
      "Invoicing (equipment and consumables subtotals)",
      "Dashboards (issued equipment overdue)"
    ],
    "roi": "Crews leave with the consumables and equipment they need, and the store knows exactly who holds each serial number. Low stock is seen before it stops a job. Equipment and consumables used on a job can be billed rather than absorbed.",
    "faqs": [
      [
        "Can we trace which probe was used on a particular job?",
        "Equipment is issued by serial number to a technician and job, and UT reports include a probe calibration table, so the unit used can be identified from the issue records and the report."
      ],
      [
        "How do we know when to reorder consumables?",
        "Each consumable has a reorder level, and items below it are flagged as low stock."
      ],
      [
        "Can equipment be kept at a client site during a long job?",
        "Yes. The equipment stays issued to the technician and job with its movement recorded, and site stock locations can be configured during implementation."
      ]
    ]
  },
  "project-management": {
    "headline": "NDT projects with methods, codes, crews, equipment and task-level results",
    "overview": "Projects in the Atlantis NDT ERP are built for inspection jobs. Each project records the NDT job type, site, client PO, contract, methods, codes, scope and acceptance criteria, the assigned equipment and technicians, job status, and safety induction and work permit fields. Tasks carry method, technician, component, result, indication and defect counts, and procedure and WPS references, which gives the project manager a component-by-component view of progress and findings. Timesheets log inspection, travel, standby and setup time with method, billable flag, rate multiplier, site, client and equipment serial, go through approval, and warn if the technician's certificate is not valid. Crew dispatch runs through Team Assignments with planned, dispatched, in field, submitted and closed stages, and blocks double-booking of technicians and equipment. Reports are produced in NDT Reports. Projects can be viewed as kanban, list or calendar, and expenses such as per diems can be re-billed to the job.",
    "ndtAngle": "An NDT project manager needs to know which welds or components have been inspected, by whom, by which method and with what result. Tasks that carry indication and defect counts answer that directly. Site realities such as inductions and permits are on the project, and timesheet warnings flag any technician working on an invalid certificate.",
    "capabilities": [
      "Project fields: NDT job type, site, client PO, contract, methods, codes, scope, acceptance criteria",
      "Assigned equipment and technicians, job status, safety induction and work permit fields",
      "Tasks with method, technician, component, result, indication and defect counts",
      "Procedure and WPS references on tasks",
      "Timesheets by work type with billable flag, rate multiplier and approval",
      "Invalid-certificate warning on timesheets",
      "Crew dispatch through Team Assignments",
      "Kanban, list and calendar views"
    ],
    "workflow": "An accepted quotation becomes a project with client PO, scope, methods, codes and acceptance criteria, plus safety induction and work permit details for the site. The coordinator dispatches the crew and equipment through Team Assignments, which blocks double-booking. Tasks are set up per component, weld package or area and updated with method, technician, result and indication and defect counts as the work proceeds. Technicians log inspection, travel, standby and setup time, and supervisors approve it; any technician on an invalid certificate triggers a warning. Reports are written, reviewed and approved in NDT Reports. Approved billable hours, equipment and consumables are then invoiced, and field expenses can be re-billed.",
    "compliance": [
      "Client PO, contract and applicable codes recorded on each project",
      "Acceptance criteria stated at project level",
      "ASNT SNT-TC-1A certification checks through timesheet warnings",
      "Safety induction and work permit records",
      "ISO 9001:2015 planning and control of service provision"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Quotations (accepted quote to project)",
      "Team Assignments (crew and equipment dispatch)",
      "NDT Reports",
      "Timesheets and Expenses",
      "Invoicing"
    ],
    "roi": "Project status is visible in NDT terms without phoning the site. Billable hours are approved in one place and reach the invoice intact. Crew clashes are blocked at planning rather than discovered at mobilisation.",
    "faqs": [
      [
        "Can one project hold many components or weld packages?",
        "Yes. Tasks under the project carry the component, method, technician, result and indication counts for each piece of work."
      ],
      [
        "Is there a timeline chart view for projects?",
        "Projects use kanban, list and calendar views, and Team Assignments has a calendar of crew assignments. Other planning views are discussed as custom scope during implementation."
      ],
      [
        "Does the system warn if an uncertified technician logs time?",
        "Yes. Timesheets warn when a technician's certificate is not valid."
      ]
    ]
  },
  "quality-management": {
    "headline": "Quality controls built into NDT reports, procedures, certificates and calibration",
    "overview": "The Atlantis NDT ERP puts quality checks where NDT work actually happens rather than in a separate quality module. Reports move through draft, in progress, review, approved and sent, with inspector, reviewer and approver signatures and third-party inspector name and signature. Procedures follow draft, submitted, reviewed, approved and published, with approved revisions locked, rejections recorded with a reason, and a snapshot of every revision. Technician certificates and vision tests carry automatic status (active, expiring soon, expired, revoked) and warning tasks 90 days before expiry, and timesheets warn when a certificate is not valid. Equipment calibration records and the certificate register flag expiring and expired certificates, and Team Assignments warns when assigned equipment is out of calibration. Company certifications are tracked with alert days. Dashboards bring together calibration due and overdue, certificates expiring and expired, and issued equipment overdue. Surveys can be used for client feedback and competency questionnaires. A formal deviation and corrective action process is not a standard feature and is configured during implementation if you need one.",
    "ndtAngle": "Accredited or not, every NDT company is judged on the same basics: was the technician qualified, was the procedure approved, was the equipment calibrated and was the report reviewed. The Atlantis NDT ERP places a check on each of those points, so problems show up before a report reaches the client.",
    "capabilities": [
      "Report review and approval with inspector, reviewer and approver signatures",
      "Procedure approval workflow with locked revisions and revision snapshots",
      "Certificate and vision-test status with 90-day warnings",
      "Timesheet warning for invalid certificates",
      "Calibration certificate register with expiry alerts",
      "Out-of-calibration warning when equipment is assigned",
      "Quality dashboards for certs, calibration and overdue equipment",
      "Surveys for client feedback and competency questionnaires"
    ],
    "workflow": "The quality manager starts from the dashboard: certificates expiring, calibration due and equipment not returned. Technicians flagged as expiring soon are booked for renewal or a new vision test, and units with expiring calibration are sent to the lab before they are needed on a job. Reports in review are checked against the procedure and standard references, the method-specific data such as IQI placement or probe calibration, and the acceptance criteria before approval; reports that need correction go back to the inspector. Procedures pending approval arrive with email reminders, and approved revisions are locked. After a job, a client feedback survey can be sent. Where a formal follow-up process is required, it follows the method configured during implementation.",
    "compliance": [
      "ISO 9001:2015 quality management records",
      "ASNT SNT-TC-1A written practice: certification, vision tests and procedure approval",
      "ASME BPVC Section V procedure and calibration references",
      "Client requirements for reviewed and approved reports",
      "Company certifications tracked with alert days"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "NDT Reports",
      "Procedures",
      "Certificates",
      "Asset Management (calibration)",
      "Dashboards and Surveys"
    ],
    "roi": "Reports are reviewed and signed before they are sent, procedures are approved before they are used, and expiring certificates are seen well in advance. The quality manager can show a clear, dated trail for people, procedures, equipment and reports whenever a client or auditor asks.",
    "faqs": [
      [
        "Is there a built-in corrective action workflow?",
        "Not as a standard feature. If you need a formal process for deviations and follow-up actions, it is configured during implementation as part of the agreed scope."
      ],
      [
        "Can we stop unreviewed reports reaching clients?",
        "The report workflow places review and approval, with signatures, before the sent stage."
      ],
      [
        "Can the system collect client feedback?",
        "Yes. Surveys can be sent to clients after a job, and also used for internal competency questionnaires."
      ]
    ]
  },
  "document-control": {
    "headline": "Procedure and report-template control with approvals, locked revisions and history",
    "overview": "Controlled documents in an NDT company are mainly procedures and report formats, and the Atlantis NDT ERP controls both. The Procedures app holds each procedure with document number, revision, method, scope, material, applicable standard such as ASME Section V, acceptance criteria and body text or an uploaded file. It moves through draft, submitted, reviewed, approved and published, with rejected and archived states. Prepared-by, reviewed-by and approved-by are recorded with dates, approved revisions are locked, and every revision is kept as a snapshot. Approvers get email notifications and reminders. An AI-assisted first draft, with a built-in template fallback, speeds up new procedures, but a Level III still reviews and approves. In NDT Reports, company report templates in Excel, Word, PDF and HTML are versioned, with logo, header and footer, so report formats are controlled too. Broader document management needs are configured during implementation.",
    "ndtAngle": "Auditors and clients want to see that the procedure referenced on a report was approved by a Level III and was the current revision at the time. Locked approved revisions and full snapshots make that easy to show. Versioned report templates mean the client's required format is controlled rather than living on one person's laptop.",
    "capabilities": [
      "Procedure register with number, revision, method, scope, material, standard and acceptance criteria",
      "Approval workflow: draft, submitted, reviewed, approved, published, rejected, archived",
      "Prepared, reviewed and approved signatures with dates",
      "Approved revisions locked, with a snapshot of each revision",
      "Rejection with a recorded reason",
      "Email notifications and reminders to approvers",
      "AI-assisted first draft with built-in template fallback",
      "Versioned report templates in Excel, Word, PDF and HTML"
    ],
    "workflow": "A procedure is drafted, uploaded or generated as an AI-assisted first draft, then submitted for review. The reviewer and approver are notified by email and can approve or reject with a reason. Once approved, the revision is locked and published, and the previous version stays in the history. Report templates are updated as new versions, so reports issued later use the current template while earlier reports keep the format they were issued in.",
    "compliance": [
      "ASNT SNT-TC-1A Level III approval of NDT procedures",
      "ASME BPVC Section V written procedure requirements",
      "ISO 9001:2015 control of documented information",
      "Client specifications for report formats",
      "Procedures written to ISO, EN or client standards as needed"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "NDT Reports (procedure references and versioned templates)",
      "Project tasks (procedure and WPS references)",
      "Certificates (Level III approver)",
      "Email notifications",
      "eLearning (procedure-based training content, where configured)"
    ],
    "roi": "Everyone knows which procedure revision is current and who approved it. Approvals do not stall because approvers are reminded. Report formats stay consistent across technicians and offices.",
    "faqs": [
      [
        "Can we upload our existing procedures?",
        "Yes. A procedure can hold body text or an uploaded file, and goes through the same review and approval workflow."
      ],
      [
        "Can we see what changed between revisions?",
        "Yes. Every revision is kept with a snapshot, so earlier versions can be opened and compared."
      ],
      [
        "Does this replace a full document management system?",
        "It controls NDT procedures and report templates. Wider document management needs are scoped and configured during implementation."
      ]
    ]
  },
  "certification-tracking": {
    "headline": "Technician certification tracking: schemes, levels, vision tests, exams and alerts",
    "overview": "The Certificates app records every technician certification with scheme (SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP or other), level (trainee, I, II, III), method, certifying body, issue, expiry and renewal dates, industry sector, OJT hours, training hours, exam passed and attachments. Status is computed automatically as active, expiring soon (90 days), expired or revoked, with Expiring Soon and Expired menus. Vision tests are recorded separately with near vision (Jaeger J1/J2), far vision, colour perception, contrast, examiner, clinic, certificate file and expiry. Examination sheets hold general, specific and practical scores against a configurable passing score. Certificate templates per scheme define validity months, whether a vision test or exam is required, and minimum OJT and training hours. Each employee's NDT profile shows technician flag, highest level, methods certified, radiation safety training, radiation badge number and medical fitness expiry. Daily checks create warning tasks 90 days before cert or vision-test expiry, and configurable daily email alerts cover technician certs, calibration certificates and company certifications.",
    "ndtAngle": "An expired certificate or lapsed vision test discovered on site can mean a stopped job and an unhappy client. Separate records for each scheme and method, automatic status, and warnings starting 90 days out give the Level III time to arrange renewals. Timesheets add a final check by warning when a technician's certificate is not valid.",
    "capabilities": [
      "Records by scheme, level, method and certifying body",
      "Automatic active, expiring soon, expired and revoked status",
      "Vision test records with Jaeger J1/J2, far vision, colour perception and contrast",
      "Examination sheets with general, specific and practical scores",
      "Certificate templates per scheme with validity, vision/exam requirements and minimum hours",
      "Employee NDT profile with radiation safety training, badge number and medical fitness expiry",
      "90-day warning tasks and configurable daily email alerts",
      "Timesheet warning for invalid certificates"
    ],
    "workflow": "Certificates, vision tests and exam sheets are entered for each technician with scans attached. Daily checks watch the dates and create warning tasks 90 days before expiry, while alert emails go to the recipients you set, with look-ahead days and a resend interval. The Level III arranges renewal, records the new exam or vision test and updates the certificate. Planners check the technician's NDT profile before assigning work, and timesheets warn if a technician logs time on an invalid certificate.",
    "compliance": [
      "ASNT SNT-TC-1A and CP-189 certification records",
      "ISO 9712 certificates recorded",
      "PCN and CSWIP certificates recorded",
      "Annual vision test records",
      "Radiation safety training and badge records"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Employees",
      "Timesheets",
      "Team Assignments",
      "Email alerts and Dashboards",
      "eLearning"
    ],
    "roi": "Renewals are planned rather than rushed, and expired certificates stop reaching client sites. Certification files for prequalification or audits are ready on request. The Level III spends less time maintaining a spreadsheet of dates.",
    "faqs": [
      [
        "Does it track vision tests separately?",
        "Yes. Vision tests have their own records and expiry, and trigger their own 90-day warnings."
      ],
      [
        "Can we record certificates from different schemes for the same technician?",
        "Yes. Each certificate is a separate record with its own scheme, level, method, certifying body and dates."
      ],
      [
        "Does Atlantis train technicians for ISO 9712 or PCN?",
        "No. Atlantis training is based on ASNT SNT-TC-1A only. The Certificates app simply records ISO 9712, PCN or CSWIP certificates your technicians already hold."
      ]
    ]
  },
  "hr-payroll": {
    "headline": "Technician records, availability, timesheets, leave and expenses for NDT crews",
    "overview": "People management in the Atlantis NDT ERP starts with the Employees app, where each technician has an NDT profile: technician flag, highest level, methods certified, radiation safety training, radiation badge number and medical fitness expiry, alongside their certificates, vision tests and exams. Team Assignments shows each technician's status, current assignment, utilisation percentage and next available date, and the availability calendar records assigned, leave, training, sick and unavailable periods with overlaps blocked. Time Off feeds that availability, so approved leave is reflected in planning. Timesheets record work type (inspection, travel, standby, setup), method, billable flag, rate multiplier, site, client and equipment serial, go through approval, and warn if a certificate is not valid. Expenses handle field costs and per diems, which can be re-billed to jobs. Payroll processing depends heavily on country rules, so it is scoped for your jurisdiction during implementation, with approved timesheets and expenses as the inputs.",
    "ndtAngle": "An NDT company's people are its product. Knowing who is certified for what, who is available next week and who is on leave, all in the same place, is what makes crew planning work. Timesheets that separate inspection, travel, standby and setup give both payroll and billing the detail they need.",
    "capabilities": [
      "Employee NDT profile with highest level, methods certified, radiation safety training, badge number and medical fitness expiry",
      "Technician status, current assignment, utilisation percentage and next available date",
      "Availability calendar: assigned, leave, training, sick, unavailable, overlaps blocked",
      "Time Off feeding technician availability",
      "Timesheets by work type with method, billable flag, rate multiplier, site, client and equipment serial",
      "Timesheet approval and invalid-certificate warning",
      "Expenses for field costs and per diems, re-billable to jobs",
      "Payroll scoped per country during implementation"
    ],
    "workflow": "A new technician is added with their NDT profile and certificates. Leave requests go through Time Off, and approved leave appears on the availability calendar. The coordinator assigns crews in Team Assignments, which blocks overlaps. On the job, technicians log time by work type and submit field expenses. Supervisors approve timesheets and expenses, which then feed invoicing and whatever payroll process was configured for your country.",
    "compliance": [
      "ASNT SNT-TC-1A certification records on each technician",
      "Medical fitness and radiation safety training records",
      "ISO 45001:2018 worker health and safety records",
      "Local labour and payroll rules configured during implementation",
      "Data protection requirements for personal data configured per region"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Certificates",
      "Team Assignments",
      "Time Off",
      "Timesheets and Expenses",
      "Invoicing"
    ],
    "roi": "Planners see availability and certification together, so crews are built faster and with fewer clashes. Approved timesheets serve both billing and payroll without retyping. Medical fitness and radiation records sit on the employee file where they are easy to check.",
    "faqs": [
      [
        "Does the ERP run payroll?",
        "Payroll depends on country rules, so it is scoped for your jurisdiction during implementation. Approved timesheets and expenses are the inputs either way."
      ],
      [
        "Is approved leave reflected in crew planning?",
        "Yes. Time Off feeds the technician availability calendar used by Team Assignments."
      ],
      [
        "Can we record a technician's radiation badge number?",
        "Yes. The employee NDT profile includes radiation safety training, radiation badge number and medical fitness expiry."
      ]
    ]
  },
  "audit-management": {
    "headline": "Audit evidence on demand: certificates, procedures, calibration and report sign-offs",
    "overview": "Audits of NDT companies, whether ISO 9001 surveillance, written-practice reviews or client vendor audits, follow a predictable path: pick a report, then check the technician, the procedure, the equipment and the review. The Atlantis NDT ERP keeps each of those as a dated record. Certificates carry scheme, level, method, certifying body and expiry with automatic status, alongside vision tests and exam sheets. Procedures carry prepared, reviewed and approved signatures, locked approved revisions and a snapshot of every revision. The calibration certificate register holds PDFs with lab accreditation number and valid, expiring or expired status. NDT reports carry inspector, reviewer and approver signatures and third-party inspector signature. Company certifications are tracked with alert days. The ERP does not include a dedicated audit-planning or findings module; audit checklists or a findings log are configured during implementation, for example with the Surveys app.",
    "ndtAngle": "The quickest audits are the ones where every link from report to technician to procedure to instrument can be shown on screen. That traceability is built into the Atlantis NDT ERP's everyday records, so preparing for an audit is mostly a matter of checking that nothing is expiring.",
    "capabilities": [
      "Technician certificate, vision test and exam records with automatic status",
      "Procedure approval signatures, locked revisions and revision snapshots",
      "Calibration certificate register with lab accreditation number and status",
      "Report sign-offs by inspector, reviewer, approver and third-party inspector",
      "Company certifications with alert days",
      "Configurable daily email alerts for certs, calibration and company certifications",
      "Dashboards for items expiring or overdue",
      "Audit checklists configured during implementation where needed"
    ],
    "workflow": "Before the audit, the quality manager reviews the Expiring Soon and Expired menus, the calibration certificate register and the company certifications with their alert dates, and resolves anything outstanding. During the audit, sampled reports are opened with their inspector, reviewer and approver signatures and their work order, procedure and standard references. The procedure revision is shown with its prepared, reviewed and approved signatures and the snapshot of that revision. The technician's certificate, exam sheet and vision test are pulled from their NDT profile, and the instrument's calibration certificate is opened from the register with the lab accreditation number. Any points raised are recorded in the checklist or log configured for you.",
    "compliance": [
      "ISO 9001:2015 audit evidence",
      "ASNT SNT-TC-1A and CP-189 written-practice reviews",
      "ISO 9712, PCN and CSWIP certificates recorded",
      "Client vendor audits and prequalification",
      "ISO 45001:2018 health and safety records"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Certificates",
      "Procedures",
      "Asset Management (calibration register)",
      "NDT Reports",
      "Surveys (where configured)"
    ],
    "roi": "Audit preparation becomes a quick review of live records rather than days of collecting paper. Gaps such as expiring certificates are found by you, in advance, rather than by the auditor.",
    "faqs": [
      [
        "Is there an audit findings module?",
        "Not as standard. The ERP holds the evidence auditors check, and audit checklists or a findings log are configured during implementation if required."
      ],
      [
        "Can we prove a procedure was approved before it was used?",
        "Yes. Procedures record prepared, reviewed and approved signatures with dates, and approved revisions are locked with a snapshot kept."
      ],
      [
        "Can we show the calibration certificate for the instrument on a report?",
        "Yes. Equipment is tracked by serial number with its calibration records and certificate PDF in the register."
      ]
    ]
  },
  "helpdesk": {
    "headline": "Client enquiries and service requests handled through CRM, email and the website",
    "overview": "The Atlantis NDT ERP does not include a dedicated helpdesk ticketing app as standard. Client communication for an NDT company is handled through the apps it does include. Website enquiry forms feed the CRM directly, so a request for an urgent callout or a new scope lands as a lead with service type, industry sector and site country. Existing clients' messages are handled through email and Discuss, with Calendar and To-do for follow-ups. Report queries are answered from NDT Reports, where each report shows its status, references and signatures, and a reissued PDF can be produced from the stored report. Surveys collect client feedback after a job. If you need formal ticketing with categories and response targets, that is configured during implementation as part of the agreed scope.",
    "ndtAngle": "Most client queries to an NDT company are about a specific report or a request for more work. Because reports are stored with their workflow status, references and signatures, the answer to a report query is usually a lookup. New work requests entered through the website become CRM leads with the details operations needs to judge crew and timing.",
    "capabilities": [
      "Website enquiry forms feeding the CRM",
      "Leads with service type, industry sector, site country and estimated technicians and days",
      "Email and Discuss for client and internal communication",
      "Calendar and To-do for follow-ups",
      "NDT Reports lookup for report status, references and signatures",
      "Surveys for client feedback",
      "Contacts for client and site contact records",
      "Formal ticketing configured during implementation where required"
    ],
    "workflow": "A client submits a request through the website or by email. New work, such as an urgent callout, becomes a CRM lead with service type and site country, and follows the normal quotation path so operations can check crew availability in Team Assignments before committing. Questions about an existing report are answered by opening the report in NDT Reports, where its status, references and signatures are visible, and, if needed, producing the PDF again. Internal discussion happens in Discuss, and follow-ups are tracked with To-do and Calendar so nothing depends on one person's memory. After a job, a Surveys form asks the client for feedback.",
    "compliance": [
      "ISO 9001:2015 customer communication and feedback",
      "Client report retention requirements met through stored reports",
      "Data protection requirements configured per region",
      "Client contract terms recorded on projects",
      "Formal complaints handling configured during implementation where required"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "CRM",
      "Website (enquiry forms)",
      "NDT Reports",
      "Surveys",
      "Discuss, Calendar and To-do"
    ],
    "roi": "Enquiries stop getting lost in personal inboxes because web requests land in the CRM. Report queries are answered quickly from stored reports. Client feedback is collected consistently rather than informally.",
    "faqs": [
      [
        "Is there a ticketing system?",
        "Not as a standard app. Client requests are handled through CRM, website forms, email and Discuss, and formal ticketing is configured during implementation if you need it."
      ],
      [
        "Can we resend a report the client has lost?",
        "Yes. Reports are stored in NDT Reports with their status and signatures, and the PDF can be produced again."
      ],
      [
        "Can we collect client feedback after a job?",
        "Yes. Surveys can be sent to clients after a job is closed."
      ]
    ]
  },
  "field-service": {
    "headline": "Crew dispatch and offline field reporting for NDT technicians",
    "overview": "Field work in the Atlantis NDT ERP combines Team Assignments for dispatch with the offline field app for reporting. Team Assignments moves each job through planned, dispatched, in field, submitted and closed, with site GPS coordinates and mobilisation and demobilisation dates. It blocks double-booking of technicians and equipment serial numbers, blocks overlapping availability entries, and warns when assigned equipment is out of calibration. The offline field app is an installable web app that works without signal, stores drafts and photos on the device and syncs later, with a method picker, photo capture, on-screen signature and PDF preview. A REST API for field devices provides the jobs assigned to each technician and the equipment issued to them, and handles report submission and sync. Reports support 17 method types with method-specific fields, and move through review and approval once synced. Fleet assigns vehicles to projects and drivers with dates and mileage.",
    "ndtAngle": "NDT crews often work where there is no signal: inside vessels, in tank farms, on remote pipelines or offshore. The offline field app lets them complete method-specific reports, take photos and sign on screen regardless, then sync when back in coverage. Dispatch checks for technician and equipment clashes and calibration status before the crew leaves.",
    "capabilities": [
      "Team assignment stages: planned, dispatched, in field, submitted, closed",
      "Site GPS coordinates and mobilisation and demobilisation dates",
      "Technician and equipment double-booking blocked",
      "Out-of-calibration warning for assigned equipment",
      "Offline field app with method picker, photo capture, on-screen signature and PDF preview",
      "REST API: jobs assigned to me, equipment issued to me, report submission and sync",
      "17 method report types with method-specific fields",
      "Fleet vehicle assignment to project and driver with dates and mileage"
    ],
    "workflow": "The coordinator plans the job with site location and mobilisation dates, assigns the crew and equipment, and dispatches it; clashes with other assignments or leave are blocked, and out-of-calibration units are flagged. A vehicle is assigned through Fleet. Technicians see their jobs and issued equipment in the field app before they leave coverage. On site they pick the method, complete reports offline with photos and on-screen signatures, and preview the PDF. When they reconnect, reports sync as drafts, the assignment moves to submitted, and the reviewer and approver complete the report. The job is then closed, the crew demobilises, and approved hours are invoiced.",
    "compliance": [
      "ASME BPVC Section V method references on reports",
      "Third-party inspector signature where required",
      "ASNT SNT-TC-1A certification of field technicians",
      "Calibrated equipment requirements",
      "Site safety induction and work permit fields on projects"
    ],
    "integrations": [
      "Open REST API — SAP, Maximo, NetSuite and any other system that accepts API connections",
      "Team Assignments",
      "NDT Reports and the offline field app",
      "Asset Management",
      "Fleet",
      "Timesheets and Invoicing"
    ],
    "roi": "Reports are completed on site instead of retyped later, so they reach review sooner. Crew and equipment clashes are blocked before mobilisation. Coordinators always know which jobs are in the field and which are waiting for review.",
    "faqs": [
      [
        "Does the field app need a connection?",
        "No. It works offline, stores drafts and photos locally and syncs when a connection is available."
      ],
      [
        "Can technicians see which equipment is issued to them?",
        "Yes. The REST API for field devices shows jobs assigned to the technician and equipment issued to them."
      ],
      [
        "Is there live location tracking of crews?",
        "No. Team assignments store the site GPS coordinates for the job, but technicians and equipment are not tracked by GPS."
      ]
    ]
  }
};
