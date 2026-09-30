// Comparison content: new NDT ERP vs field service software page, plus additive
// deep-content sections for the existing Floodlight-alternatives, vs-Excel and
// vs-generic-ERP pages.
import { vendorTable, sourcesList, FULL_COLS, cta, CHECKED, esc } from './vendors.mjs';
import { faqHtml } from './common.mjs';

// ── New page: NDT ERP vs field service software ─────────────────────────────
const fsmFaq = [
  { q: 'Can ServiceTitan, ServiceTrade or Jobber be used by an NDT company?', a: 'They can run scheduling, dispatch, quotes, invoicing and a technician app, and some NDT companies do start there. What they do not provide out of the box is NDT-specific: method-specific inspection reports with code references, technician certification tracking to an SNT-TC-1A written practice with vision tests, and instrument calibration records that stop an out-of-calibration instrument from being assigned.' },
  { q: 'What is the difference between NDT ERP and field service management software?', a: 'Field service management software is built around the service visit: book it, dispatch it, complete it, invoice it. An NDT ERP is built around the inspection record: who was qualified to perform it, with which calibrated instrument, to which procedure and acceptance criteria, reviewed and approved by whom, and then invoiced.' },
  { q: 'Which field service software is built for commercial contractors?', a: 'ServiceTrade positions itself for commercial HVAC, mechanical and fire contractors. ServiceTitan supports residential and commercial service and construction divisions in the trades. Jobber targets growing home and commercial service businesses. None of the three positions itself for NDT inspection.' },
  { q: 'When is field service software enough for an inspection company?', a: 'When most of your work is visual or simple checklist inspection, your clients accept a generic report, and you have few certified technicians to track. Once clients audit technician qualifications and calibration, or ask for method-specific reports to ASME or API codes, an NDT-specific system pays for itself.' },
  { q: 'Can Atlantis replace both our field service tool and our reporting tool?', a: 'Yes, that is the design. Atlantis ERP includes team assignments for dispatch, an offline field app, 17 NDT report types, certification and calibration records, quotations, timesheets and invoicing. It is configured for each company and quoted on request.' },
];

export const FSM = {
  slug: '/ndt-erp-vs-field-service-software',
  title: 'NDT ERP vs Field Service Software: ServiceTrade, Jobber',
  description: 'NDT ERP vs ServiceTitan, ServiceTrade and Jobber: where field service software stops for inspection companies (reports, certs, calibration) and where it fits.',
  h1: 'NDT ERP vs Field Service Software (ServiceTitan, ServiceTrade, Jobber)',
  faq: fsmFaq,
  bodyHtml: `
<p><strong>Short answer:</strong> field service management (FSM) software such as ServiceTitan, ServiceTrade and Jobber is excellent at booking, dispatching and invoicing service visits. An NDT ERP does that too, but it is built around the inspection record: the technician's certification, the instrument's calibration, the method-specific report, and the review and approval before it reaches the client. If your clients audit those things, FSM software leaves the hardest part of your work in spreadsheets.</p>
<p>Disclosure: Atlantis NDT publishes this page and sells an NDT ERP. The descriptions of ServiceTitan, ServiceTrade and Jobber below come from their own positioning, read in ${CHECKED}.</p>

<h2>What field service software is built for</h2>
<p><strong>ServiceTitan</strong> serves the trades: residential and commercial service and construction divisions, with multi-technician jobs, multi-location shops, scheduling and dispatch, estimates and proposals, technician routing, mobile apps, service agreements, CRM, online booking, customer portals and payments. <strong>ServiceTrade</strong> is built for commercial HVAC, mechanical and fire-protection contractors, with scheduling and dispatch, quoting and invoicing, a customer portal showing service history, and a technician app. <strong>Jobber</strong> is aimed at growing home and commercial service businesses: requests, quotes, scheduling, dispatch, invoicing, payments, client communication and marketing tools in one place.</p>
<p>All three are mature, well-funded products with large user bases. For the job they are designed for, sending a qualified tradesperson to a customer, completing the work and getting paid, they are hard to beat.</p>

<h2>Where NDT work is different</h2>
<p>An NDT inspection is not a service visit with a checklist attached. The deliverable is a record that has to stand up to a client auditor, an authorised inspector or a regulator, sometimes years later. Four things make it different:</p>
<ul>
<li><strong>Personnel qualification.</strong> Under ASNT SNT-TC-1A the employer's written practice governs who may perform, interpret and sign. The system has to know each technician's scheme, level, method, expiry date, vision test and training hours, and it has to warn before someone uncertified is sent.</li>
<li><strong>Instrument calibration.</strong> Every reading must trace to an instrument that was in calibration on that day, with its certificate on file.</li>
<li><strong>Method-specific reports.</strong> A UT report carries probe and calibration data, an RT report carries source, technique and IQI, a PT report carries method and developer. One generic form with a method dropdown does not satisfy a client specification written to ASME Section V.</li>
<li><strong>Review and approval.</strong> Reports move from draft to review to approval with named signatures before they are sent.</li>
</ul>

<h2>Side by side: NDT ERP vs field service software</h2>
<div class="table-scroll"><table><caption>What each kind of system is built to do</caption><thead><tr><th scope="col">Capability</th><th scope="col">Field service software (ServiceTitan, ServiceTrade, Jobber)</th><th scope="col">NDT ERP (Atlantis)</th></tr></thead><tbody>
<tr><th scope="row">Scheduling and dispatch</th><td>Core strength: calendars, routing, dispatch boards</td><td>Team assignments; double-booking of technicians and equipment blocked</td></tr>
<tr><th scope="row">Quotes and invoicing</th><td>Core strength, with online payments</td><td>Quotations and invoicing with job, PO, method, equipment and technician lines</td></tr>
<tr><th scope="row">Technician app</th><td>Yes</td><td>Offline field app with photos and on-screen signatures</td></tr>
<tr><th scope="row">NDT method reports</th><td>Generic forms and checklists</td><td>17 method-specific report types (UT, PAUT, TOFD, RT, CR, MT, PT, VT, ECT, IRIS, MFL and more)</td></tr>
<tr><th scope="row">Report review and approval</th><td>Not NDT-specific</td><td>Draft, review, approve and send, with inspector, reviewer and approver signatures</td></tr>
<tr><th scope="row">Certification tracking</th><td>Not built for SNT-TC-1A or ISO 9712 schemes</td><td>SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP; vision tests; alerts 90 days before expiry</td></tr>
<tr><th scope="row">Calibration records</th><td>Not NDT-specific</td><td>Instruments by serial number, calibration certificates, due-date alerts, warning when assigned</td></tr>
<tr><th scope="row">Procedures</th><td>No</td><td>Procedure register with revision history and approval workflow</td></tr>
<tr><th scope="row">Best for</th><td>Trades and service contractors</td><td>NDT and inspection companies</td></tr>
</tbody></table></div>

<h2>The three field service tools, in NDT terms</h2>
<h3>ServiceTitan</h3>
<p>A strong fit for a trades business that also offers some inspection. Its depth in residential and commercial service, service agreements and payments is far beyond what an inspection company needs, and nothing in its positioning addresses NDT personnel qualification or instrument calibration. If you are an NDT company, you would be paying for capability you do not use while building the parts you do need in custom fields and spreadsheets.</p>
<h3>ServiceTrade</h3>
<p>The closest in spirit to inspection work, because fire-protection and mechanical contractors live on recurring inspections, deficiencies and customer portals. For an NDT company it handles the commercial wrapper well: quotes, dispatch, invoicing and a portal. The gap is the technical record behind the visit.</p>
<h3>Jobber</h3>
<p>Easy to adopt and aimed at small and growing service businesses. For a one- or two-person inspection outfit doing simple visual work it may be enough. Once you employ certified technicians under a written practice and your clients audit them, you will outgrow it quickly.</p>

<h2>When field service software is the right call</h2>
<p>Be honest about your work. If most jobs are visual or checklist inspections, clients accept a generic report, you track a handful of certifications and no client audits your calibration records, a field service tool plus a disciplined certification spreadsheet is a reasonable, lower-effort choice. Many companies start there.</p>
<p>The signals that you have outgrown it: a client audit asks for technician and instrument evidence behind a report and it takes a day to assemble; reports are rebuilt in Word after the visit; a technician is dispatched with an expired certificate or an instrument past its calibration date; or invoices are raised days after the report because the hours live in another system.</p>
<p>There is no shame in starting with a trades tool and moving later. The mistake is staying past the point where the workarounds cost more than the switch. Review the decision each time you add certified technicians, a new method, or a client that audits its contractors.</p>

<h2>What the gap costs an NDT company in practice</h2>
<p>The cost of running NDT work on field service software rarely shows up as a line item. It shows up as time. A Level III rebuilds reports in Word after every job because the technician app only captured a checklist. An office manager keeps a certification spreadsheet and checks it by hand before every dispatch, and misses one during a busy shutdown. A client auditor asks for the calibration certificate of the thickness gauge used on a report from last spring, and someone spends an afternoon in shared drives. None of these failures is dramatic, but each one erodes margin and client confidence, and the risk grows with every technician you add.</p>
<p>There is also a commercial cost. Asset owners and EPC contractors increasingly write technician qualification, calibration traceability and report format into their contracts and vendor audits. A company that can produce that evidence in a minute wins renewals that a company assembling it by hand does not.</p>

<h2>Can you run field service software and NDT software together?</h2>
<p>Yes, and some companies do. The usual pattern is field service software for booking, dispatch and invoicing, and a separate NDT reporting tool for the technical record. It works when the link between them is clean: the job number, client, site and technician flow one way, and the finished report and billable hours flow back. It breaks when the two systems disagree about who was on the job or which hours were billable, and someone has to reconcile them every month.</p>
<p>If you go this way, decide which system owns each record. The customer, the job and the invoice should live in one place; the technician's certification, the instrument's calibration and the report in another; and the integration should be tested with real jobs before go-live, not assumed from a feature list. Atlantis ERP has an open REST API, so it can sit beside an existing tool during a transition, with the integration scoped per implementation.</p>

<h2>Questions to ask in a demo if you are coming from field service software</h2>
<ol>
<li>Show me a UT report and an RT report side by side. Are the fields different, and do they carry probe, calibration, source and IQI data?</li>
<li>Assign a technician whose certification expired yesterday. What happens?</li>
<li>Assign an instrument whose calibration is overdue. What happens?</li>
<li>Take a report through draft, review, approval and sending. Who signs, and where is that recorded?</li>
<li>Complete a report on a phone in airplane mode, then reconnect. Is anything lost?</li>
<li>Turn the finished job into an invoice with the client's PO number. How many fields did someone type twice?</li>
</ol>
<p>A field service tool will answer questions one, two, three and four with custom fields or a workaround. An NDT system should answer all six out of the box. ${cta('NDT ERP vs field service software: demo checklist', 'Run these six tests on Atlantis')}.</p>

<h2>Where Atlantis fits</h2>
<p>Atlantis ERP puts dispatch, the offline field app, method-specific <a href="/erp/apps/ndt-reports">NDT reports</a>, <a href="/erp/apps/certificates">certifications</a>, calibration records, quotations, timesheets and invoicing in one system configured for your company. It is led by an ASNT NDT Level III, connects to accounting and client systems through an open REST API scoped per implementation, and is quoted on request: affordable, accessible, fully customizable. It takes a scoping and configuration phase, so it is not a sign-up-today tool. ${cta('NDT ERP vs field service software: Atlantis demo', 'Book a demo with your own jobs')}.</p>
<p>Comparing NDT-specific platforms instead? See <a href="/best-ndt-reporting-software-2026">the best NDT software compared</a>, <a href="/ndt-erp-vs-generic-erp">NDT ERP vs generic ERP</a> and our guide to <a href="/ndt-inspection-software">NDT inspection software</a>.</p>

<h2>Sources</h2>
<ul>
<li>ServiceTitan: <a href="https://www.servicetitan.com/" rel="nofollow noopener">servicetitan.com</a></li>
<li>ServiceTrade: <a href="https://servicetrade.com/" rel="nofollow noopener">servicetrade.com</a></li>
<li>Jobber: <a href="https://www.getjobber.com/" rel="nofollow noopener">getjobber.com</a></li>
</ul>

${faqHtml(fsmFaq, 'NDT ERP vs field service software: frequently asked questions')}
<p>Want help deciding? ${cta('NDT ERP vs field service software: advice', 'Talk to an ASNT Level III about your workflow')}.</p>`,
};

// ── Deep-content additions for existing pages (appended, additive) ──────────

export const FLOODLIGHT_TITLE = 'Floodlight Alternatives 2026: 8 NDT Platforms Compared';
export const FLOODLIGHT_DESC =
  'Floodlight alternatives compared: AgileNDT, DRIVE NDT, Zertify, OMS, InspectionBank, InspectionWorks and Atlantis on certs, calibration and invoicing.';

export const FLOODLIGHT_DEEP = `
<h2>2026 update: more Floodlight alternatives, checked against vendor pages</h2>
<p>Since this comparison was first written, more platforms have become realistic Floodlight alternatives for North American inspection companies. The table below adds Zertify, OMS, InspectionBank, Waygate InspectionWorks and the reporting-only product sold as NDT Reporting Software, on the same criteria as <a href="/best-ndt-reporting-software-2026">our best NDT software comparison</a>. Every competitor cell comes from the vendor's own page, read in ${CHECKED}; "not stated" means the page does not describe it.</p>
${vendorTable(['floodlight', 'agilendt', 'drive', 'zertify', 'oms', 'inspectionbank', 'waygate', 'therightsw', 'atlantis'], FULL_COLS, `Floodlight and its alternatives (vendor pages checked ${CHECKED})`)}

<h2>Why teams look for Floodlight alternatives</h2>
<p>Floodlight is a strong product, so the reasons are usually specific rather than general dissatisfaction:</p>
<ul>
<li><strong>ERP breadth.</strong> Quoting and invoicing inside an NDT platform is not the same as projects, timesheets, purchasing, inventory, CRM and accounts on one record set. Companies running a separate accounting package and a separate stock system still reconcile three places.</li>
<li><strong>Certification tracking to an unusual written practice.</strong> Every written practice differs on vision-test intervals, OJT hours and re-certification rules. Ask any vendor to configure your most awkward case.</li>
<li><strong>Customisation.</strong> Client-specific report formats, approval chains and fields built for you, rather than adapted to a form builder.</li>
<li><strong>Digital-twin reports.</strong> Asset owners who want results placed on a 3D model of the asset, which is what Atlantis <a href="/digital-twin-reporting">Digital Twin Reporting Software</a> does alongside the ERP.</li>
<li><strong>Lab or lifting-equipment scope.</strong> Accredited labs may prefer OMS; companies that also certify lifting gear may prefer Zertify or AgileNDT.</li>
</ul>

<h2>Other alternatives in more depth</h2>
<p>Each of the main alternatives now has its own page: <a href="/agilendt-alternatives">AgileNDT alternatives</a>, <a href="/drive-ndt-alternatives">DRIVE NDT alternatives</a> and <a href="/zertify-alternatives">Zertify alternatives</a>. For a direct two-way view see <a href="/compare/atlantis-erp-vs-floodlight">Atlantis ERP vs Floodlight</a>, and if you are weighing a trades tool instead, <a href="/ndt-erp-vs-field-service-software">NDT ERP vs field service software</a>.</p>

<h2>Next step</h2>
<p>If Floodlight fits your workflow, it is a good decision. If you need reporting, certifications, calibration, dispatch, quotes and invoicing in one system shaped around your own formats, ${cta('Floodlight alternative: Atlantis demo', 'book an Atlantis demo on your own reports')}, or ${cta('Floodlight alternative: Atlantis quote', 'ask for a scoped quote')}. Affordable, accessible, fully customizable; quote on request. Still choosing a category? Read our guide to <a href="/ndt-inspection-software">NDT inspection software</a>.</p>
<h2>Sources for the 2026 update</h2>
${sourcesList(['floodlight', 'agilendt', 'drive', 'zertify', 'oms', 'inspectionbank', 'waygate', 'therightsw'])}`;

export const EXCEL_DEEP = `
<h2>From Excel to NDT software: what the switch actually changes</h2>
<p>Spreadsheets fail quietly. The template is fine; what breaks is everything around it: a technician's certification that lapsed last month, an instrument whose calibration certificate is in someone's inbox, a report retyped from a field sheet, an invoice raised a week after the report because the hours were on a different sheet. The table shows where each approach stands on the tasks an auditor or client will actually check.</p>
<div class="table-scroll"><table><caption>Excel and Word templates vs NDT software, task by task</caption><thead><tr><th scope="col">Task</th><th scope="col">Excel and Word templates</th><th scope="col">NDT reporting software or NDT ERP</th></tr></thead><tbody>
<tr><th scope="row">Method-specific report</th><td>One template per method, copied and edited per job</td><td>Report types with method fields, numbering and client formats</td></tr>
<tr><th scope="row">Review and approval</th><td>Email and a signed PDF</td><td>Draft, review, approve and send, with named signatures</td></tr>
<tr><th scope="row">Technician certifications</th><td>A register someone has to remember to update</td><td>Scheme, level, method, expiry and vision tests with alerts before expiry</td></tr>
<tr><th scope="row">Calibration</th><td>Due dates in a spreadsheet</td><td>Instrument register with certificates and warnings when an out-of-date instrument is assigned</td></tr>
<tr><th scope="row">Field capture without signal</th><td>Paper, then typed up</td><td>Offline app with photos and signatures, synced later</td></tr>
<tr><th scope="row">Invoice from the job</th><td>Re-keyed into accounting</td><td>Hours, equipment and consumables flow to the invoice (in an NDT ERP)</td></tr>
<tr><th scope="row">Cost to start</th><td>Nothing but time</td><td>Subscription or implementation; scoped per vendor</td></tr>
</tbody></table></div>
<h2>Which NDT software to look at after Excel</h2>
<p>The platforms most North American companies shortlist when they leave spreadsheets are Floodlight, AgileNDT, DRIVE NDT, Zertify, OMS, InspectionBank and Atlantis. They differ in how far they reach beyond the report; <a href="/best-ndt-reporting-software-2026">our best NDT software comparison</a> sets them side by side with sources, and <a href="/floodlight-software-alternatives">Floodlight alternatives</a> goes deeper on the North American market leader.</p>
<p>If you want reports, certifications, calibration, dispatch and invoicing to leave Excel together, ${cta('Excel to NDT software: Atlantis demo', 'book an Atlantis demo using your current templates')}. We can build your existing report layouts into the system so clients see the format they already accept. Affordable, accessible, fully customizable; ${cta('Excel to NDT software: Atlantis quote', 'quote on request')}.</p>`;

export const GENERIC_ERP_DEEP = `
<h2>A third option: field service software</h2>
<p>Buyers comparing NDT ERP with generic ERP often have a third option on the table: field service management software such as ServiceTitan, ServiceTrade or Jobber. It is quick to adopt and strong on scheduling, dispatch, quoting and invoicing, but it is built around the service visit rather than the inspection record, so technician certifications, instrument calibration and method-specific reports end up in custom fields or spreadsheets. We compare the three approaches in <a href="/ndt-erp-vs-field-service-software">NDT ERP vs field service software</a>.</p>
<div class="table-scroll"><table><caption>Three ways to run an NDT company's systems</caption><thead><tr><th scope="col">Approach</th><th scope="col">Strength</th><th scope="col">Gap for NDT companies</th><th scope="col">Usually right when</th></tr></thead><tbody>
<tr><th scope="row">Generic ERP</th><td>Accounting, purchasing, inventory and HR depth</td><td>No NDT reports, certification schemes or calibration logic without a custom build</td><td>A large group already runs one and adds NDT on top</td></tr>
<tr><th scope="row">Field service software</th><td>Scheduling, dispatch, quoting, invoicing, payments</td><td>Generic forms; no SNT-TC-1A or ISO 9712 tracking; calibration not NDT-specific</td><td>Mostly visual or checklist work with little client auditing</td></tr>
<tr><th scope="row">NDT reporting platform</th><td>Method reports, certifications, field capture</td><td>Varies: some stop at the report, some include quoting and billing</td><td>You want a ready-made NDT tool quickly</td></tr>
<tr><th scope="row">NDT ERP (Atlantis)</th><td>NDT reports, certifications, calibration, dispatch and the full business in one system</td><td>Needs a scoping and configuration phase</td><td>You want one record set and your own formats</td></tr>
</tbody></table></div>
<p>For NDT-specific platforms, including Floodlight, AgileNDT and DRIVE NDT, see <a href="/best-ndt-reporting-software-2026">the best NDT software compared</a>. To see Atlantis run your own jobs, ${cta('NDT ERP vs generic ERP: Atlantis demo', 'book a demo')}; affordable, accessible, fully customizable, and ${cta('NDT ERP vs generic ERP: Atlantis quote', 'quoted on request')}.</p>`;

export const _esc = esc;
