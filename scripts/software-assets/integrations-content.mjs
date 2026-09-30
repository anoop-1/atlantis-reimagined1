// Integration pages (2026-09-29). Allowed claim (owner, 2026-09-27): Atlantis
// ERP has an open REST API and integrates with SAP, Maximo, NetSuite or any
// software that accepts API connections, scoped per implementation. NOT allowed:
// prebuilt/certified connectors, partnerships, marketplace listings, fixed
// deployment timelines, customer claims, RBI/FFS or inspection-interval work.
import { h2, h3, p, ul, ol, table, contact } from './lib.mjs';

const demo = (name) => contact('erp', `Integration scoping — ${name}`, `book an integration scoping call`);

const COMMON_WHAT_ATLANTIS_EXPOSES =
  h2('What the Atlantis side offers') +
  p('Atlantis ERP has an open REST API. The same API the offline field app uses to fetch assigned jobs and issued equipment and to submit reports is available for integration, and the records an NDT company cares about are reachable through it: jobs and team assignments, NDT reports and their status, technician certifications with their computed status (active, expiring soon, expired, revoked), equipment with calibration status and due dates, timesheets, quotations and invoices. Which objects are exposed, in which direction and to which system is agreed during implementation, because every integration is scoped to the customer\'s landscape rather than shipped as a fixed connector.') +
  ul([
    '<strong>No prebuilt, certified connector is claimed.</strong> The integration is built against your system\'s published API and Atlantis\'s REST API during implementation.',
    '<strong>Your system stays the system of record</strong> for whatever it owns today, whether that is the asset register, the general ledger or the customer master.',
    '<strong>Mapping is agreed in writing</strong> before anything is built: object, field, direction, trigger, and what happens when a record fails validation.',
  ]);

const COMMON_IMPLEMENTATION =
  h2('What gets configured during implementation') +
  ol([
    '<strong>Scope workshop.</strong> Which records move, in which direction, and who owns each field. Anything not agreed here is not built.',
    '<strong>Access on both sides.</strong> A dedicated integration user or app registration on your system with the minimum permissions for the agreed objects, and API credentials on the Atlantis side.',
    '<strong>Key mapping.</strong> How a record in one system is found in the other: work-order number, equipment or functional-location ID, customer number, invoice number.',
    '<strong>Field mapping and code lists.</strong> Status values, units, methods and result codes translated between the two systems.',
    '<strong>Triggers and timing.</strong> Event-driven (on approval, on posting) or scheduled, depending on what your system supports and what the business needs.',
    '<strong>Errors and retries.</strong> Where a failed record is logged, who is told, and how it is re-sent once fixed.',
    '<strong>Test in a sandbox,</strong> then a controlled go-live on a small set of records before the full flow is switched on.',
  ]);

const COMMON_WHY =
  h2('Why integrate instead of re-keying') +
  p('Every NDT company that works for large asset owners ends up typing the same facts twice: the work order number from the client\'s system onto the job, and the result from the report back into the client\'s system or into accounts. Re-keying is where report numbers get transposed, where a rejected weld is closed as accepted in someone else\'s system, and where invoices wait because nobody has matched the timesheet to the purchase order. An integration removes the second keystroke for the records that matter, and leaves an audit trail showing what was sent, when, and what the other system replied.');

const COMMON_FAQ = [
  { q: 'Is this a certified connector?', a: 'No. Atlantis does not claim a certified or marketplace connector. The integration is built during implementation against your system\'s published API and the Atlantis REST API, scoped to the records you need.' },
  { q: 'Who owns the integration once it is live?', a: 'That is agreed in the scope: typically Atlantis maintains the Atlantis side and the mapping, and your IT team owns credentials and permissions on your system. Changes to the mapping are handled as change requests.' },
];

export const INTEGRATIONS = [
  // ── SAP PM / S/4HANA ────────────────────────────────────────────────────
  {
    slug: 'sap-pm',
    name: 'SAP PM / S/4HANA',
    path: '/integrations/sap-pm',
    existing: true,
    title: 'SAP PM & S/4HANA Integration for NDT Data | Atlantis',
    description: 'Connect Atlantis NDT ERP to SAP PM or S/4HANA through the open REST API: work orders in, inspection results, reports and certs out. Scope a call.',
    h1: 'SAP PM and S/4HANA Integration for NDT Inspection Data',
    lead: 'Take maintenance orders and notifications from SAP Plant Maintenance or S/4HANA into Atlantis as NDT jobs, and send approved inspection results, report PDFs and technician certification evidence back, through Atlantis\'s open REST API and the APIs your SAP landscape already exposes.',
    body:
      h2('Who this is for') +
      p('Two kinds of company ask for this. Inspection service providers working inside an asset owner\'s SAP landscape, where the client issues work through PM orders and wants results back against the same order. And asset owners with an in-house NDT team who run SAP PM or S/4HANA Asset Management for maintenance but need a proper NDT system for methods, procedures, technician certifications, equipment calibration and reports.') +
      h2('What data flows, and in which direction') +
      table('Typical SAP PM / S/4HANA data flows (agreed per implementation)', ['Record', 'Direction', 'Notes'], [
        ['Maintenance order / work order', 'SAP → Atlantis', 'Creates or updates an Atlantis job with the order number, plant, functional location and equipment references.'],
        ['Maintenance notification', 'SAP → Atlantis, or Atlantis → SAP', 'Either the trigger for inspection work or the route by which a rejectable finding is raised back into SAP\'s maintenance planning.'],
        ['Equipment and functional location', 'SAP → Atlantis (reference)', 'Keys used to tie reports to the client\'s asset register. SAP remains the register.'],
        ['Inspection result and report status', 'Atlantis → SAP', 'Result (acceptable, not acceptable, acceptable with remarks) and status once the report is approved.'],
        ['Report PDF', 'Atlantis → SAP', 'Attached to the order or notification through SAP\'s document or attachment services, where enabled.'],
        ['Technician certification evidence', 'Atlantis → SAP (on request)', 'The certification status of the technicians on the job, when the client asks for it with the result.'],
        ['Order confirmation / completion', 'SAP → Atlantis', 'Lets the NDT job close when the order closes, and supports invoicing.'],
      ]) +
      h2('Typical architecture') +
      p('S/4HANA publishes its business APIs, including maintenance orders and maintenance notifications, as OData services listed on the SAP Business Accelerator Hub; on-premise ECC and S/4HANA systems expose comparable services through SAP Gateway, and many landscapes also route traffic through middleware the customer already runs, such as SAP Integration Suite or PI/PO. The integration uses whichever route your SAP basis and security teams prefer. Atlantis\'s REST API is the other end.') +
      p('The usual pattern is that SAP stays the system of record for the asset hierarchy and maintenance planning, and Atlantis becomes the system of record for how the inspection was done: who did it, with which instrument and calibration, to which procedure revision, and with what result. Findings that need maintenance action are raised into SAP as notifications rather than by creating orders directly, so SAP\'s own planning workflow decides what happens next.') +
      h3('Authorisations') +
      p('A dedicated SAP service user with the minimum authorisations for the agreed objects, typically read on equipment and functional location, read on maintenance orders, and create or change on notifications and attachments if results flow back. No dialog-user or broad authorisations are needed; the authorisation matrix is part of the written scope.') +
      COMMON_WHAT_ATLANTIS_EXPOSES +
      COMMON_IMPLEMENTATION +
      h2('What this integration does not do') +
      p('Atlantis does not calculate inspection intervals, corrosion rates or remaining life, and does not perform risk-based inspection or fitness-for-service assessments. If your SAP landscape uses those outputs, they come from the engineering tools you already use; Atlantis supplies the inspection records they depend on.') +
      COMMON_WHY +
      p(`If SAP is part of your picture, ${demo('SAP PM / S/4HANA')} and bring a sample order and the list of fields your planners need back. See also the <a href="/integrations">integrations overview</a>, the <a href="/erp/apps/ndt-reports">NDT Reports app</a> and <a href="/digital-twin-reporting">Digital Twin Reporting</a>.`),
    faqs: [
      { q: 'Does this work with both SAP ECC and S/4HANA?', a: 'The pattern is the same. S/4HANA publishes OData APIs for maintenance orders and notifications on the SAP Business Accelerator Hub; ECC and on-premise S/4HANA expose comparable services through SAP Gateway or the middleware you already run. Which one is used is agreed with your SAP team.' },
      { q: 'Will Atlantis create maintenance orders in SAP?', a: 'The usual recommendation is to raise a notification for a finding that needs action and let SAP\'s planning workflow create the order. If your process is different, it is agreed in the scope.' },
      { q: 'Can report PDFs be attached in SAP?', a: 'Where your SAP landscape has attachment or document services enabled for the relevant objects, yes; the report is attached after approval so only issued reports reach SAP.' },
      { q: 'Do we need SAP middleware?', a: 'Not necessarily. Direct API calls work where your security policy allows them; if your landscape routes all external traffic through SAP Integration Suite or PI/PO, the integration uses that.' },
      ...COMMON_FAQ,
    ],
  },

  // ── IBM Maximo ──────────────────────────────────────────────────────────
  {
    slug: 'ibm-maximo',
    name: 'IBM Maximo',
    path: '/integrations/ibm-maximo',
    existing: true,
    title: 'IBM Maximo Integration for NDT Inspection Data | Atlantis',
    description: 'Connect Atlantis NDT ERP to IBM Maximo or MAS Manage via the open REST API: work orders in, inspection results, reports and cert status out.',
    h1: 'IBM Maximo Integration for NDT Inspection Data',
    lead: 'Pull Maximo work orders into Atlantis as NDT jobs and send approved results, report PDFs and technician certification status back against the same work order and asset, using the Maximo REST/JSON API and Atlantis\'s open REST API.',
    body:
      h2('Who this is for') +
      p('Maximo is common at refineries, utilities, pipelines and large manufacturing sites, which means it is common at the clients of NDT service companies. If your client issues inspection work as Maximo work orders and expects results logged back, or your own maintenance organisation runs Maximo but needs a purpose-built system for NDT methods, procedures, certifications and calibration, this is the integration to scope.') +
      h2('What data flows, and in which direction') +
      table('Typical Maximo data flows (agreed per implementation)', ['Record', 'Direction', 'Notes'], [
        ['Work order', 'Maximo → Atlantis', 'Creates or updates an Atlantis job with work-order number, site, asset and location.'],
        ['Asset and location', 'Maximo → Atlantis (reference)', 'Keys that tie each report to the client\'s asset register; Maximo remains the register.'],
        ['Inspection result and status', 'Atlantis → Maximo', 'Result and status recorded against the work order once the report is approved, for example as a work log entry.'],
        ['Report PDF', 'Atlantis → Maximo', 'Attached to the work order as a document where attachments are enabled.'],
        ['Follow-up request', 'Atlantis → Maximo', 'A rejectable finding raised as a service request so Maximo\'s own triage decides the follow-up work.'],
        ['Work order completion', 'Maximo → Atlantis', 'Closes the NDT job and supports invoicing.'],
      ]) +
      h2('Typical architecture') +
      p('Maximo Manage exposes its business objects through object structures, and the Maximo REST/JSON API (built on the same code base as the older OSLC REST API) reads and writes them. The Maximo Integration Framework adds publish channels and enterprise services for event-driven and batch exchanges. The integration uses the route your Maximo administrators prefer, with a dedicated integration user holding only the permissions the agreed object structures need.') +
      p('In steady state Maximo stays the system of record for assets, locations and the work-order workflow, and Atlantis holds the evidence of how each inspection was done: technician and certification, instrument and calibration, procedure revision, method data and result. Maximo is not modified beyond the integration configuration your administrators agree to.') +
      h3('Maximo Application Suite') +
      p('Maximo Manage inside Maximo Application Suite uses the same object structures and REST API, with MAS authentication in front. The integration pattern does not change; the credential setup does, and that is part of the access step below.') +
      COMMON_WHAT_ATLANTIS_EXPOSES +
      COMMON_IMPLEMENTATION +
      h2('What this integration does not do') +
      p('Atlantis does not calculate inspection intervals, corrosion rates or remaining life, and does not perform risk-based inspection or fitness-for-service assessments, so it does not write those values into Maximo job plans or PM records. It supplies the inspection records those processes rely on.') +
      COMMON_WHY +
      p(`If your work arrives as Maximo work orders, ${demo('IBM Maximo')} and bring a sample work order export. See also the <a href="/integrations">integrations overview</a>, the <a href="/erp/apps/ndt-reports">NDT Reports app</a> and the <a href="/erp/apps/certificates">Certificates app</a>.`),
    faqs: [
      { q: 'Which Maximo API is used?', a: 'Usually the Maximo REST/JSON API against the relevant object structures, or Maximo Integration Framework publish channels and enterprise services where your administrators prefer event-driven or batch exchange.' },
      { q: 'Does it work with MAS Manage?', a: 'Yes. Maximo Manage in Maximo Application Suite uses the same object structures and REST API; only the authentication setup differs.' },
      { q: 'Will Atlantis change our Maximo configuration?', a: 'Only by the integration configuration your Maximo administrators approve, such as an integration user and the object structures it can access. The data model is not extended by Atlantis.' },
      { q: 'Can historical inspection records be moved from Maximo?', a: 'Historical records can be imported during implementation if they are needed in Atlantis; what moves and how it is mapped is part of the scope.' },
      ...COMMON_FAQ,
    ],
  },

  // ── QuickBooks ──────────────────────────────────────────────────────────
  {
    slug: 'quickbooks',
    name: 'QuickBooks',
    path: '/integrations/quickbooks',
    title: 'QuickBooks Integration for NDT Companies | Atlantis ERP',
    description: 'Keep QuickBooks as your ledger and run NDT jobs, timesheets and invoices in Atlantis ERP. Customers and invoices sync through the open REST API.',
    h1: 'QuickBooks Integration for NDT Inspection Companies',
    lead: 'Many small and mid-sized NDT companies keep QuickBooks for their books and want everything upstream of the invoice (jobs, technicians, certifications, timesheets and reports) in a system built for inspection work. This is how the two fit together.',
    body:
      h2('Who this is for') +
      p('NDT service companies whose accountant or bookkeeper works in QuickBooks and has no wish to move. The operations side (quotes, jobs, crew dispatch, reports, certifications and calibration) runs in Atlantis ERP, and the finance side stays where it is. Atlantis ERP also includes its own invoicing and financial dashboard, so the integration is only needed if QuickBooks remains the ledger.') +
      h2('What data flows, and in which direction') +
      table('Typical QuickBooks data flows (agreed per implementation)', ['Record', 'Direction', 'Notes'], [
        ['Customer', 'Either direction (one master)', 'Agree which system owns the customer list; the other receives new and changed customers.'],
        ['Service items', 'QuickBooks → Atlantis (reference)', 'So invoice lines from Atlantis map to the income accounts your accountant expects.'],
        ['Invoice', 'Atlantis → QuickBooks', 'Built in Atlantis from approved timesheets and completed jobs, with job/PO number and site, then posted to QuickBooks.'],
        ['Payment status', 'QuickBooks → Atlantis', 'So operations can see which jobs are paid without asking accounts.'],
      ]) +
      h2('Typical architecture') +
      p('QuickBooks Online exposes customers, items, invoices, payments and other accounting entities through the QuickBooks Online Accounting API, a REST API that uses OAuth 2.0 and works per company file. Your QuickBooks administrator authorises the connection once; tokens are refreshed automatically. QuickBooks Desktop uses a different, older integration route and is scoped separately if that is what you run.') +
      p('Invoices are built in Atlantis because that is where the billable facts live: timesheet hours with work type, method, billable flag and rate multiplier, the equipment used, the job and PO number, and the site. Atlantis\'s invoice lines carry cost centre, method, equipment serial and technician. What arrives in QuickBooks is agreed in the mapping, usually a summarised invoice against the right customer and income accounts.') +
      COMMON_WHAT_ATLANTIS_EXPOSES +
      COMMON_IMPLEMENTATION +
      h2('Choosing between integrating and moving the ledger') +
      p('If your accountant is happy in QuickBooks and your reporting needs are met there, integrate. If you are already re-keying bills, expenses and payroll allowances into two places, it can be simpler to run invoicing, expenses and the financial dashboard in Atlantis ERP and let your accountant work from there. We will tell you which is less work for your business during the scoping call; there is no reason to move a ledger that is working.') +
      COMMON_WHY +
      p(`To see how an approved timesheet becomes a posted invoice, ${demo('QuickBooks')}. See also the <a href="/erp/apps/invoicing">Invoicing app</a>, the <a href="/erp/apps/timesheets">Timesheets app</a> and the <a href="/integrations">integrations overview</a>.`),
    faqs: [
      { q: 'Does the integration work with QuickBooks Online and Desktop?', a: 'QuickBooks Online is integrated through its Accounting API with OAuth 2.0. QuickBooks Desktop uses a different, older integration route and is scoped separately.' },
      { q: 'Which system creates the invoice?', a: 'Usually Atlantis, because the timesheets, jobs and PO numbers are there, and the invoice is then posted to QuickBooks. The mapping decides what detail QuickBooks receives.' },
      { q: 'Do we have to keep customers in both systems?', a: 'One system owns the customer list and the other receives changes. Which one owns it is decided in the scope workshop.' },
      { q: 'Can we stop using QuickBooks later?', a: 'Yes. Atlantis ERP includes invoicing and a financial dashboard, so the ledger can move later if that suits you, but nothing forces it.' },
      ...COMMON_FAQ,
    ],
  },

  // ── NetSuite ────────────────────────────────────────────────────────────
  {
    slug: 'netsuite',
    name: 'NetSuite',
    path: '/integrations/netsuite',
    title: 'NetSuite Integration for NDT Inspection Companies | Atlantis',
    description: 'Run NDT jobs, crews, reports and certifications in Atlantis ERP and keep NetSuite for finance. Customers, projects and invoices sync via REST APIs.',
    h1: 'NetSuite Integration for NDT Inspection Companies',
    lead: 'For inspection groups that run NetSuite as the corporate ERP but need NDT-specific operations: method-specific reports, technician certification tracking, equipment calibration and crew dispatch, connected to NetSuite through REST APIs on both sides.',
    body:
      h2('Who this is for') +
      p('Larger NDT and inspection groups, and inspection divisions inside engineering or fabrication companies, where finance, procurement and consolidation already run on NetSuite. NetSuite is a strong general ERP, but it does not know what a written practice, a vision test, a calibration block or an IQI is. Atlantis ERP handles the inspection operation, and NetSuite keeps the financial and corporate records.') +
      h2('What data flows, and in which direction') +
      table('Typical NetSuite data flows (agreed per implementation)', ['Record', 'Direction', 'Notes'], [
        ['Customer and sales order / PO', 'NetSuite → Atlantis', 'Creates or updates the customer and the job with PO number and contract references.'],
        ['Project / job', 'Either direction', 'Where NetSuite projects are used for job costing, the Atlantis job and the NetSuite project share a key.'],
        ['Approved timesheets', 'Atlantis → NetSuite', 'Billable hours by job, work type and technician, if NetSuite does the billing.'],
        ['Invoice', 'Atlantis → NetSuite, or built in NetSuite', 'Either Atlantis builds the invoice and posts it, or NetSuite bills from the timesheets it receives.'],
        ['Vendor bills for calibration and consumables', 'Atlantis → NetSuite (optional)', 'Purchases linked to an equipment serial in Atlantis can be passed to NetSuite for payables.'],
      ]) +
      h2('Typical architecture') +
      p('NetSuite\'s SuiteTalk REST Web Services provide an OpenAPI-described record API for standard and custom records, and NetSuite recommends OAuth 2.0 for new REST integrations, with token-based authentication also supported; RESTlets are available where a custom endpoint is cleaner. Your NetSuite administrator creates an integration record and a role limited to the records in scope.') +
      p('The dividing line is usually simple: NetSuite owns the customer, the ledger and consolidation; Atlantis owns how the work was done and who was qualified to do it. The integration moves the records that cross that line, and nothing else.') +
      COMMON_WHAT_ATLANTIS_EXPOSES +
      COMMON_IMPLEMENTATION +
      h2('Why not build NDT inside NetSuite') +
      p('It can be done with enough customisation, and some groups try. The cost shows up later: custom records for certifications, vision tests, OJT hours, calibration certificates and method-specific report data, plus the field app for offline capture, all maintained against NetSuite release cycles. For a direct comparison of the trade-offs, see <a href="/ndt-erp-vs-generic-erp">NDT ERP vs generic ERP</a>.') +
      COMMON_WHY +
      p(`If NetSuite is your corporate system, ${demo('NetSuite')} with your finance lead and operations lead on the same call. See also the <a href="/integrations">integrations overview</a> and <a href="/erp">Atlantis ERP</a>.`),
    faqs: [
      { q: 'Which NetSuite API is used?', a: 'Usually SuiteTalk REST Web Services with OAuth 2.0, which NetSuite recommends for new REST integrations. RESTlets or SOAP web services are used where the scope needs them.' },
      { q: 'Does NetSuite or Atlantis issue the invoice?', a: 'Either works. Some groups bill in NetSuite from the approved timesheets Atlantis sends; others let Atlantis build the invoice and post it. It is decided in the scope workshop.' },
      { q: 'Can NetSuite projects stay the cost-tracking tool?', a: 'Yes. The Atlantis job and the NetSuite project share a key, and hours or costs flow to the project as agreed.' },
      { q: 'Do we need a NetSuite partner involved?', a: 'Not necessarily. Your NetSuite administrator sets up the integration record and role; if you already work with a NetSuite partner, they can join the scoping call.' },
      ...COMMON_FAQ,
    ],
  },

  // ── Microsoft Dynamics 365 ──────────────────────────────────────────────
  {
    slug: 'microsoft-dynamics-365',
    name: 'Microsoft Dynamics 365',
    path: '/integrations/microsoft-dynamics-365',
    title: 'Microsoft Dynamics 365 Integration for NDT Data | Atlantis',
    description: 'Connect Atlantis NDT ERP to Dynamics 365 Business Central or Finance & Operations via REST/OData APIs: work orders in, results and invoices out.',
    h1: 'Microsoft Dynamics 365 Integration for NDT Companies',
    lead: 'Connect Atlantis ERP to Dynamics 365 Business Central, Finance and Operations, or Field Service. Customers, work orders and invoices move through the Dynamics APIs; inspection results, reports and certification evidence stay traceable in Atlantis.',
    body:
      h2('Who this is for') +
      p('Inspection companies that run Business Central for finance, larger groups on Dynamics 365 Finance and Operations, and asset owners whose maintenance or field teams use Dynamics 365 Field Service. In each case Dynamics is doing a general job well, and the NDT specifics (method-specific reports, certifications against a written practice, calibration of instruments and probes) need a system designed for them.') +
      h2('What data flows, and in which direction') +
      table('Typical Dynamics 365 data flows (agreed per implementation)', ['Record', 'Direction', 'Notes'], [
        ['Customer', 'Dynamics → Atlantis (or one agreed master)', 'Customer numbers shared so invoices land against the right account.'],
        ['Work order', 'Dynamics → Atlantis', 'From Field Service or asset management, creates the NDT job with the work-order reference.'],
        ['Inspection result and status', 'Atlantis → Dynamics', 'Posted back against the work order once the report is approved.'],
        ['Report PDF', 'Atlantis → Dynamics', 'Attached where the Dynamics app in use supports attachments on the record.'],
        ['Invoice', 'Atlantis → Business Central / F&O', 'Posted as a sales invoice from approved timesheets and completed jobs, or billed in Dynamics from hours Atlantis sends.'],
      ]) +
      h2('Typical architecture') +
      p('Business Central publishes REST APIs (API v2.0, OData-based) for records such as customers and sales invoices, under an endpoint per environment and company. Finance and Operations exposes data entities over OData. Field Service and other Dataverse-based apps use the Dataverse Web API. Each uses an Azure AD (Microsoft Entra ID) app registration with permissions limited to the records in scope, set up by your Microsoft administrator.') +
      p('Atlantis\'s REST API is the other end. Which Dynamics product is involved decides which API is used, but the scope conversation is the same: which records cross, who owns each field, and what triggers the transfer.') +
      COMMON_WHAT_ATLANTIS_EXPOSES +
      COMMON_IMPLEMENTATION +
      h2('Business Central, F&O or Field Service: which applies to you') +
      ul([
        '<strong>Business Central:</strong> usually finance only. Customers and invoices are the core of the integration.',
        '<strong>Finance and Operations:</strong> finance, projects and sometimes asset management. Work orders, projects and invoices are in scope.',
        '<strong>Field Service:</strong> work orders and scheduling. Atlantis takes the NDT work orders and returns results; crew dispatch for NDT technicians, with certification and calibration checks, runs in Atlantis Team Assignments.',
      ]) +
      COMMON_WHY +
      p(`If Dynamics is part of your landscape, ${demo('Microsoft Dynamics 365')} and tell us which Dynamics products you run. See also the <a href="/integrations">integrations overview</a>, the <a href="/erp/apps/team-assignments">Team Assignments app</a> and the <a href="/erp/apps/invoicing">Invoicing app</a>.`),
    faqs: [
      { q: 'Which Dynamics 365 products can Atlantis connect to?', a: 'Business Central through its REST API v2.0, Finance and Operations through OData data entities, and Dataverse-based apps such as Field Service through the Dataverse Web API. Each is scoped separately.' },
      { q: 'How is authentication handled?', a: 'Through an app registration in Microsoft Entra ID (Azure AD) with permissions limited to the records in scope, created by your Microsoft administrator.' },
      { q: 'Can technician dispatch stay in Field Service?', a: 'It can. Many NDT companies prefer to dispatch in Atlantis because Team Assignments blocks double-booking and warns when a technician\'s certificate or an instrument\'s calibration is not valid, but that is your choice.' },
      { q: 'Is there a Dynamics AppSource connector?', a: 'No. Atlantis does not claim a marketplace or certified connector; the integration is built against the Dynamics APIs during implementation.' },
      ...COMMON_FAQ,
    ],
  },
];

export const INTEGRATIONS_HUB = {
  path: '/integrations',
  title: 'NDT ERP Integrations: SAP, Maximo, NetSuite, QuickBooks',
  description: 'Atlantis ERP has an open REST API. Connect NDT jobs, reports, certifications and invoices to SAP, Maximo, NetSuite, QuickBooks or Dynamics 365.',
  h1: 'NDT ERP Integrations',
  lead: 'Atlantis ERP has an open REST API, so it connects to SAP, IBM Maximo, NetSuite, QuickBooks, Microsoft Dynamics 365 or any other system that accepts API connections. Each integration is scoped with you during implementation: which records move, in which direction, and which system owns them.',
  body:
    h2('How Atlantis integrates') +
    p('There are no black-box connectors here. The integration is built during implementation between the published API of your system and the Atlantis REST API, which is the same API the offline field app uses for assigned jobs, issued equipment and report submission. That makes the integration explicit: a written mapping of objects, fields, directions and triggers that your IT team can read and sign off.') +
    table('What typically moves between Atlantis and your other systems', ['Atlantis record', 'Typical partner system', 'Usual direction'], [
      ['Jobs / team assignments', 'SAP PM, Maximo, Dynamics Field Service', 'Work orders in'],
      ['NDT reports, results and PDFs', 'SAP PM, Maximo, Dynamics', 'Out, after approval'],
      ['Technician certification status', 'Client systems, HR systems', 'Out, on request'],
      ['Equipment and calibration status', 'Maintenance systems', 'Out, as agreed'],
      ['Timesheets', 'NetSuite, Dynamics, payroll', 'Out, after approval'],
      ['Invoices', 'QuickBooks, NetSuite, Business Central', 'Out, when posted'],
      ['Customers', 'Any CRM or ERP', 'One agreed master'],
    ]) +
    h2('Integration guides') +
    ul([
      '<a href="/integrations/sap-pm">SAP PM and S/4HANA</a>: maintenance orders and notifications in, results and report PDFs out.',
      '<a href="/integrations/ibm-maximo">IBM Maximo</a>: work orders in, results, report PDFs and follow-up service requests out.',
      '<a href="/integrations/netsuite">NetSuite</a>: customers, POs and projects in; timesheets and invoices out.',
      '<a href="/integrations/quickbooks">QuickBooks</a>: invoices posted to your ledger, payment status back.',
      '<a href="/integrations/microsoft-dynamics-365">Microsoft Dynamics 365</a>: Business Central, Finance and Operations, and Field Service.',
      'Other systems: anything with a documented API. Tell us what it is and what should move.',
    ]) +
    p('For the wider picture of how these systems compare, see the <a href="/ndt-erp-integration-matrix">NDT ERP integration matrix</a>. The asset-management integrations for the Digital Twin platform are listed there too, including <a href="/integrations/oracle-erp-cloud">Oracle ERP Cloud</a>.') +
    COMMON_IMPLEMENTATION +
    COMMON_WHY +
    h2('Before you book a scoping call') +
    ul([
      'Which system issues the work (work orders, POs, notifications) and which system needs the result back.',
      'A sample record from each system, with anything confidential removed.',
      'Who administers each system and can create an integration user or app registration.',
      'Whether any middleware already sits between your systems.',
    ]) +
    p(`Then ${contact('erp', 'Integration scoping', 'book an integration scoping call')}. Affordable. Accessible. Fully customizable. Quote on request.`),
  faqs: [
    { q: 'Does Atlantis ERP have an API?', a: 'Yes. Atlantis ERP has an open REST API, and integrations with SAP, Maximo, NetSuite, QuickBooks, Dynamics 365 or any system that accepts API connections are scoped during implementation.' },
    { q: 'Are these prebuilt connectors?', a: 'No. Each integration is built against your system\'s published API and the Atlantis REST API, to a written mapping agreed with you. No certified or marketplace connector is claimed.' },
    { q: 'Which system is the system of record?', a: 'Whatever owns the record today usually keeps it: your asset register, ledger or customer master stays where it is, and Atlantis owns the inspection evidence.' },
    { q: 'Can we start with one integration?', a: 'Yes, and it is the usual approach. Most companies start with the flow that causes the most re-keying, often work orders in or invoices out.' },
    ...COMMON_FAQ,
  ],
};

export const INTEGRATION_SOURCES = [
  ['SAP Business Accelerator Hub (S/4HANA APIs)', 'https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/1e60f14bdc224c2c975c8fa8bcfd7f3f.html'],
  ['IBM Maximo Manage REST APIs', 'https://www.ibm.com/docs/en/masv-and-l/maximo-manage/cd?topic=reference-maximo-manage-rest-apis'],
  ['NetSuite OAuth 2.0 for REST web services', 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157780312610.html'],
  ['QuickBooks Online API (Intuit developer help)', 'https://help.developer.intuit.com/s/topic/0TOG00000004rDDOAY/qbo-api'],
  ['Business Central API v2.0 endpoints', 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/endpoints-apis-for-dynamics'],
];
