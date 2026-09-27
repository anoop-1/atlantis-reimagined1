# Brief: Atlantis NDT ERP app pages (atlantisndt.com/erp/apps/...)

Goal: each page turns a reader who runs or works in an NDT company (inspection service provider, QA/QC manager, NDT Level III, operations manager, owner) into an enquiry. Pages must rank for real searches ("NDT report software", "technician certification tracking software", "NDT equipment calibration tracking", "NDT procedure management", "crew dispatch software for inspection companies", "NDT quotation software", "NDT invoicing", "LMS for NDT training" etc.) and read as expert, specific, useful — not marketing fluff.

The product: Atlantis NDT ERP, built on Odoo (do NOT name a version number), pre-configured and customized for NDT companies, deployed and set up by Atlantis NDT. Positioning words: Affordable. Accessible. Fully customizable. Demo / quote on request.

## HARD RULES (a page breaking any of these is rejected by an automated validator)
1. NO prices, fees, rates, currency amounts, per-user costs, discounts for Atlantis anything. No "$", "€", "£", "₹", "USD 5". Say "quote on request".
2. NO invented numbers about results: no "cuts reporting time by 60%", no "trusted by 200 companies", no customer names, no testimonials, no ratings, no case-study claims. You MAY use qualitative outcomes ("fewer re-keyed reports", "no expired cert slips onto a job").
3. ONLY describe features listed in the FEATURE FACTS below for that app. If a reader need isn't covered, frame it as "configured during implementation" or "part of the customization scope agreed with you" — never as an existing built-in feature. Never claim: RBI, API 579/580/581, corrosion rates/TMLs, Gantt charts, barcode/QR labels, GPS asset tracking, 21 CFR Part 11, NCR/CAPA modules, SMS alerts, DocuSign, Maximo/SAP integrations, ISO 17025 uncertainty budgets, isotope decay logs, certified e-invoicing (ZATCA/GST IRN/MTD) or any "certified compliant with X" statement.
4. Training: Atlantis only offers ASNT SNT-TC-1A-based training. Never say Atlantis offers ISO 9712, PCN, CSWIP or API 510/570/653 training or certification. (The Certificates app can RECORD ISO 9712/PCN/CSWIP certs held by technicians — that's fine.)
5. Never mention anu.anoop485@gmail.com. Contact = the /contact page.
6. No <h1> in bodyHtml (the page template adds it). Use <h2>, <h3>, <p>, <ul>/<ol>/<li>, <table>, <strong>, <a>. No inline styles, no scripts, no markdown.
7. Every bodyHtml must include at least 2 links to the contact page with the service preset, exactly in this form (href in double quotes, & written as &amp;):
   <a href="/contact?service=SERVICE&amp;subject=URL_ENCODED_SUBJECT">anchor text</a>
   SERVICE is given per app in your assignment. Example: <a href="/contact?service=erp&amp;subject=Certificates%20demo">book a Certificates demo</a>
8. LENGTH: bodyHtml must contain at least 2,000 words of visible text (validator counts; pages at 1,990 are rejected). Aim for 2,400–2,700. Plan: 9–11 <h2> sections of ~230–280 words each. Include one FAQ section (<h2>Frequently asked questions</h2> then 5–7 <h3> question + <p> answer pairs, answer-first style).
9. title: max 65 characters, ends with " | Atlantis NDT". metaDescription: 120–160 characters, includes a call to action ("Book a demo", "Request a quote").
10. Write in plain, confident, human English. Short paragraphs. Speak to the reader's daily pain (expired certs discovered on site, reports re-typed from paper, double-booked technicians, lost calibration certificates, quotes built in spreadsheets). No corporate filler ("in today's fast-paced world", "leverage", "seamless", "cutting-edge", "robust solution").
11. Internal links (2–5 per page, where natural): /erp, /erp/apps, /erp/apps/<other-app-slug>, /digital-twin-reporting, /practical-ndt, /training, /consulting, /digital-twins. Only link to these.

## Page types
- GLOBAL app page (key = "<app-slug>"): what the app does for an NDT company, how the workflow runs day to day, who uses it (roles), how it connects to the other apps, what setup/implementation looks like, FAQ, CTA.
- REGIONAL page (key = "<app-slug>--<region-slug>"): same app, but genuinely written for that region: the codes, regulators, certification schemes, client requirements, industries and major asset owners that shape how NDT companies there use this app. Real specifics only, e.g.
  - usa: ASNT SNT-TC-1A and CP-189, ASME Section V/VIII, API 510/570/653 client work, OSHA, NRC for radiography licensing, Gulf Coast refining/petrochemical (Houston, Baton Rouge), pipeline operators, PHMSA, aerospace NAS 410 shops.
  - canada: CGSB / NRCan ISO 9712 certification of technicians (the app records these certs; Atlantis doesn't train for them), CSA standards (e.g. CSA W59, Z662 pipelines), CNSC licensing for radiography, Alberta oil sands and upgraders, ABSA pressure equipment, Ontario nuclear.
  - europe (UK & Europe): EN ISO 9712 and PCN (BINDT) certs recorded, PED 2014/68/EU, EN ISO 17640/17636 etc., North Sea offshore (Aberdeen), UK HSE, GDPR for technician personal data.
  - middle-east: Saudi Aramco (SAES/SAIS, contractor approval), ADNOC, QatarEnergy, KNPC; ASNT and ISO 9712 certs both common; large expatriate technician crews, visa/iqama-linked documents, shutdown/turnaround season; VAT invoicing configured locally (no certification claims).
  - india: ISO 9712 and ASNT certs both common, IBR (Indian Boiler Regulations), PESO, AERB for radiography, refineries (Jamnagar, etc.), PSU tenders (IOCL, BPCL, ONGC), GST invoicing configured locally (no certification claims), DPDP Act for personal data.
  Name industries, regulators and asset owners as CONTEXT for the reader's work — never imply they are Atlantis customers or endorse Atlantis.
- Featured products (mention prominently with a link, on every page of these apps):
  - NDT Reports → Digital Twin Reporting Software (/digital-twin-reporting): Atlantis's companion product that places inspection results on a 3D model of the asset. It is a separate product that works alongside the ERP's NDT Reports app; do NOT claim the ERP app itself builds digital twins.
  - eLearning → Practical NDT (/practical-ndt): Atlantis's immersive 3D, game-like NDT practice platform (UT, PAUT, RT, MT, PT, VT, ET, TOFD scenarios on virtual welds, pipes, vessels, castings). Learners enrolled in the eLearning portal get a Practical NDT section that opens the platform; access is granted automatically on enrolment or manually by an admin.

## FEATURE FACTS (verified in the ERP code — only these may be claimed as built-in)

NDT Reports (service: reporting)
- 17 report types: UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, Hardness, UT thickness (UTT), Ferrite, Holiday/coating, Computed Radiography. Each has its own numbering sequence.
- Method-specific data: UT with probe calibration table; RT source, technique, IQI type and placement; MT technique and particle type; PT method and developer; PAUT focal laws; MFL scan mode and item lines; UTT readings by direction; weld/job lines with defect type and orientation; overall result (acceptable / not acceptable / acceptable with remarks).
- Workflow: draft → in progress → review → approved → sent. Inspector, reviewer, approver with signatures; third-party inspector / authorized inspector name and signature.
- References captured: work order, request, WPS, contract, drawing numbers, procedure and standard references.
- Report templates: versioned company templates (Excel, Word, PDF, HTML) with logo, header/footer; Excel templates filled automatically by mapping fields to cells; PDF output per method.
- Marine mode: vessel cover page and photo, inspection location/dates; PDF merges the classification-society certificate (DNV, ABS, Lloyd's Register, BV, RINA, IRS, ClassNK library), the inspector's Level II cert and the calibration certificate; inspection photos in a 2-up grid.
- Offline field app (installable web app): works without signal, stores drafts/photos locally, syncs later; method picker, photo capture, on-screen signature, PDF preview.
- REST API for field devices: jobs assigned to me, equipment issued to me, report submission, sync.

Certificates (service: erp)
- Technician certifications: scheme (SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP, other), level (trainee, I, II, III), method, certifying body, issue/expiry/renewal dates, industry sector, OJT hours, training hours, exam passed, attachments.
- Status computed automatically: active / expiring soon (90 days) / expired / revoked. Menus: Expiring Soon, Expired.
- Vision tests: near vision (Jaeger J1/J2), far vision, colour perception, contrast, examiner, clinic, certificate file, expiry.
- Examination sheets: general, specific and practical scores, passing score (default 70%), exam files.
- Certificate templates per scheme: validity in months, whether vision test / exam required, minimum OJT and training hours.
- Employee NDT profile: technician flag, highest level, methods certified, radiation safety training, radiation badge number, medical fitness expiry.
- Daily checks create warning tasks 90 days before cert or vision-test expiry; configurable daily email alerts for technician certs, calibration certificates and company certifications (recipients, look-ahead days, resend interval).
- Company certifications (ISO, API-type accreditations of the company) with alert days.
- Timesheets warn when a technician's certificate is not valid.

Procedures (service: erp)
- Procedure register: document number, revision, method (UT, RT, MT, PT, VT, ET, TOFD, PAUT, LT, AE, hardness, PMI, CR, DR and more), scope, material, applicable standard (e.g. ASME Section V), acceptance criteria, body text or uploaded file.
- Workflow: draft → submitted → reviewed → approved → published (plus rejected, archived); prepared/reviewed/approved by with dates; approved revisions locked; rejection with reason.
- Full revision history with a snapshot of each revision.
- AI-assisted first draft of a procedure (falls back to a built-in template) — a Level III still reviews and approves.
- Email notifications and reminders to approvers for pending approvals.

Team Assignments (service: erp)
- Jobs as team assignments with dispatch workflow: planned → dispatched → in field → submitted → closed.
- Site GPS coordinates, mobilisation/demobilisation dates.
- Technician availability calendar: assigned, leave, training, sick, unavailable — overlaps blocked.
- Double-booking of technicians and of equipment serial numbers is blocked.
- Warning when assigned equipment is out of calibration.
- Technician status, current assignment, utilisation %, next available date.
- Calendar, kanban and list views.

Asset Management (service: erp) — NDT equipment and instruments
- Every instrument/probe/source-related item tracked by serial number: equipment type, assigned person, condition, asset tag, firmware, accessories, lifecycle (new, active, in calibration, in repair, rented out, retired, disposed), rental rates can be recorded, calibration frequency and status.
- Issue/return workflow with supervisor and manager approval; condition recorded at issue and return.
- Reservations with clash prevention; inbound/outbound movement records.
- Consumables (chemicals, PPE, stationery, couplant, etc.) with reorder level and low-stock flag, movement ledger.
- Maintenance log: preventive, corrective, repair, cleaning, firmware update, probe replacement; condition before/after.
- Calibration records: provider, certificate number, standard, range, uncertainty, accredited lab flag, pass/fail/conditional, next due date; calibration certificate register with lab accreditation number, valid/expiring/expired status, PDF, expiry alerts.
- NOT: RBI, TMLs, corrosion rates, client plant assets hierarchy, barcodes, GPS tracking, depreciation.

Quotations (service: erp)
- Quotes with job type, site, project dates, applicable codes; global discount; NDT service products flagged with method and category; custom branded quotation PDF; standard Odoo online quote acceptance/signature and conversion to sales order.

Invoicing (service: erp)
- Invoice header: NDT project, job/PO number, site, invoice type, industry sector; subtotals for labour, equipment and consumables.
- Lines: cost centre, method, equipment serial, technician, rate type, days/hours. Cost centres.
- Custom invoice layout. Financial dashboard: revenue, cost of sales, gross margin, operating expenses, EBITDA, outstanding invoices, bills, expenses, 12-month view.
- Timesheet hours (billable flag, rate multiplier) feed billing. Standard Odoo payments, reminders, taxes configured per country during implementation (no certification claims).

eLearning (service: practical-ndt)
- Course portal (Level I / II / III sections), video lessons from OneDrive/SharePoint with download protection, quizzes (questions can be imported from Word files), certificates of completion (standard Odoo), learner accounts created and access granted/revoked by admins, learner dashboard, auto-join for invited members, online course sales.
- Practical NDT section links to the 3D practice platform (see Featured).

Other apps (all Odoo apps configured for NDT work; claim only what's here):
- Project: NDT job type, site, client PO, contract, methods, codes, scope, acceptance criteria, assigned equipment and technicians, job status, safety induction and work permit fields. Tasks carry method, technician, component, result, indication and defect counts, procedure and WPS references.
- Timesheets: work type (inspection, travel, standby, setup), method, billable flag, rate multiplier, site, client, equipment serial, approval; warns if the technician's cert is invalid.
- CRM: service line, lead source, NDT service type, industry sector, site country, estimated technicians and days; NDT lead score 0–100 (hot/warm/nurture/cold); lead import from CSV; AI-personalised email preview; enrol lead in a drip email sequence.
- AI Marketing: AI-generated campaign emails (newsletter, promotion, nurture, announcement) using an AI model that can run on your own server; drip sequences by service line with pause/resume/unsubscribe; scheduling.
- Business Cards: photo of a card → name, company, title, email, phones, website extracted by AI/OCR → one click to create a CRM lead or add to a mailing list; mobile upload.
- Dashboards: KPI dashboards (spreadsheet-style); NDT KPIs such as equipment calibration due/overdue, certs expiring/expired, issued equipment overdue; financial dashboard (see Invoicing).
- Purchase: vendor types (OEM, dealer, calibration lab), accredited-lab flag with accreditation number and expiry; NDT purchase type; order lines linked to a specific equipment serial.
- Inventory: stock of equipment by serial and consumables (with Asset Management).
- Fleet: vehicle purpose, whether it can carry radioactive sources, transport licence number and expiry, vehicle assignment to project/driver with dates and mileage.
- Employees: technician records with NDT profile (see Certificates), availability status and utilisation (see Team Assignments).
- Expenses, Time Off, Discuss, Calendar, To-do, Contacts, Surveys, Email Marketing, Website, Maintenance: standard Odoo apps, set up for an NDT company (e.g. Time Off feeds the technician availability used by Team Assignments; Surveys for competency questionnaires and client feedback; Maintenance for preventive/corrective requests on instruments, vehicles and site equipment; Website is the company site with enquiry forms feeding CRM; Expenses for field expenses and per diems re-billed to jobs). Describe realistic NDT uses of standard features; don't invent custom features.

## Output
Write ONE file with the Write tool: the path given in your assignment. Content = a JSON array:
[
  { "key": "<key>", "h1": "...", "title": "...", "metaDescription": "...", "bodyHtml": "<h2>...</h2><p>...</p>..." }
]
Must be valid JSON: escape double quotes inside strings as \" and use no raw line breaks inside strings (use \n or nothing). Prefer apostrophes ’ or ' in prose; href attributes use \"...\".
h1: natural, includes the app + NDT (+ region on regional pages), e.g. "NDT Technician Certification Tracking in Canada".
If one file would be too long to write in a single call, still produce a single valid JSON file (write it in one go; keep pages complete).
