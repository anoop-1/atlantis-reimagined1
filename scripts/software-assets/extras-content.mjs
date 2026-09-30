// Upgrade blocks for existing pages (2026-09-29): /digital-twin-reporting deep
// section and the /ndt-erp-roi-calculator rebuild (hours-based, ungated).
// Feature claims limited to scripts/erp-apps-content-brief.md FEATURE FACTS;
// Digital Twin Reporting is described as the companion product that places
// inspection results on a 3D model (brief, "Featured products").
import { h2, h3, p, ul, ol, table, contact } from './lib.mjs';

const dtCta = (a) => contact('reporting', 'Digital twin reporting demo', a);

export const DT_REPORTING_BLOCK = {
  path: '/digital-twin-reporting',
  faqs: [
    { q: 'What is digital twin NDT reporting software?', a: 'Software that places NDT inspection results on a 3D model of the inspected asset, so each reading, indication and report is found by location on the asset rather than by file name. Atlantis Digital Twin Reporting does this alongside the NDT Reports app in Atlantis ERP, where the reports are captured, reviewed and approved.' },
    { q: 'Do I need a CAD model of every asset?', a: 'No. Standard geometries can be built from dimensions, and more complex assets can start from existing drawings or models. What matters is that the location scheme on the model matches the one used in the field.' },
    { q: 'Which NDT methods can be shown in 3D?', a: 'The report types in the NDT Reports app cover UT, UT thickness, PAUT, TOFD, RT and computed radiography, MT, PT, VT, ECT, IRIS, MFL, PWHT, PMI, hardness, ferrite and holiday/coating. Anything with a location can be placed on the model.' },
    { q: 'Can technicians capture data without signal?', a: 'Yes. The field app is an installable web app that works offline, stores drafts and photos locally and syncs when a connection returns.' },
    { q: 'Does the 3D model replace the signed report?', a: 'No. The approved, signed report remains the record of the examination. The model is a way to find, compare and share those reports on the asset.' },
  ],
  html:
    h2('Digital twin NDT reporting software, explained') +
    p('Most inspection reporting still ends in a PDF. The PDF is necessary, because it is the signed record of the examination, but it is a poor way to answer the questions asset owners actually ask: where on this vessel is the thinnest reading, which welds on this line were rejected last turnaround, and has anything changed since the previous campaign? Answering those from a folder of PDFs means opening every one of them.') +
    p('Digital twin NDT reporting software puts the results on a 3D model of the asset instead. Each thickness reading, each weld, each indication and each report is attached to the place on the asset it describes. The report is still issued and signed; the model is how people find it, compare it and share it. Atlantis Digital Twin Reporting is the companion product to the <a href="/erp/apps/ndt-reports">NDT Reports app</a> in Atlantis ERP: the ERP is where reports are captured in the field, reviewed and approved, and the 3D model is where those results are presented on the asset.') +
    h2('How inspection data maps onto a 3D asset') +
    p('The link between a report and a point on a model is the location scheme. It is the same scheme good inspectors already use on paper: the asset, the component, the weld or measurement location, and a position along or around it measured from a stated datum. When the field report records those consistently, placing the result on the model is mechanical rather than a matter of interpretation.') +
    table('What each NDT method places on the 3D model', ['Method', 'What lands on the model', 'Location key'], [
      ['UT thickness (UTT)', 'Readings by direction and the minimum per location, shown as colour by thickness', 'CML/TML ID and orientation (for example 0°, 90°, 180°, 270°)'],
      ['UT, PAUT, TOFD', 'Indications with position, depth, length and result', 'Weld ID plus position from the weld datum'],
      ['RT and CR', 'Segment results and discontinuities per film', 'Weld ID plus film segment markers'],
      ['MT and PT', 'Linear and rounded indications with photos', 'Weld or area ID plus position from datum'],
      ['VT', 'Profile and surface findings per weld, with photos', 'Weld ID'],
      ['ECT, IRIS, MFL', 'Tube or scan-line results', 'Tube number or scan line and item'],
      ['PMI, hardness, ferrite, holiday', 'Point results with pass or fail', 'Test point ID'],
    ]) +
    p('The model does not need to be a perfect engineering CAD file. For standard shapes (pipe runs, bends, tees, cylindrical shells, heads, tanks, plate) the geometry can be built from dimensions; for complex assets it can start from existing drawings or models. What matters for reporting is that the location IDs on the model are the same IDs the technician uses in the field.') +
    h2('From field capture to the 3D model: the workflow') +
    ol([
      '<strong>The job is set up once.</strong> Client, work order, drawing, WPS, procedure and acceptance standard sit on the job in Atlantis ERP, so every report on it inherits the same references.',
      '<strong>Technicians capture in the field, offline if needed.</strong> The field app is an installable web app with a method picker, photo capture, on-screen signature and PDF preview. It stores drafts and photos on the device and syncs when there is signal.',
      '<strong>Method-specific data, not free text.</strong> UT reports carry a probe calibration table; RT carries source, technique, IQI type and placement; MT carries technique and particle type; PT carries method and developer; PAUT carries focal laws; UTT carries readings by direction. Weld and item lines carry defect type, orientation and result.',
      '<strong>Review and approval.</strong> Each report moves from draft to in progress, review, approved and sent, with inspector, reviewer and approver signatures and the name and signature of any third-party or authorised inspector.',
      '<strong>Issue and publish.</strong> The approved report is issued as a PDF in your company format, and its results are placed on the asset model by location, alongside earlier campaigns.',
    ]) +
    h2('Methods covered') +
    p('The NDT Reports app has 17 report types, each with its own numbering sequence: UT, RT, MT, PT, VT, ECT, IRIS, PAUT, MFL, TOFD, PWHT, PMI, hardness, UT thickness, ferrite, holiday/coating, and computed radiography. Each produces a method-specific PDF. Company templates can be versioned in Excel, Word, PDF or HTML with your logo, header and footer, and Excel templates are filled automatically by mapping report fields to cells, so the issued report can match the format your clients already accept. For blank starting points by method, see the free <a href="/ndt-report-templates">NDT report templates</a>.') +
    h2('Offline mobile capture that holds up at review') +
    p('A 3D model is only as good as the data behind it, and most bad data is created between the site and the office: readings copied from a notebook, photos renamed from memory, a weld number mistyped. Capturing directly into the method-specific report on site removes that step. Photos are taken inside the report, the technician signs on screen, and the draft is waiting for review when the device next syncs. The same REST API that serves the field app (jobs assigned to me, equipment issued to me, report submission and sync) is what keeps the office and the field on the same record.') +
    p('Because the report sits inside the ERP, the checks that auditors ask about happen before the report exists. Timesheets warn when a technician\'s certificate is not valid, and Team Assignments warns when assigned equipment is out of calibration, so the evidence behind a result on the model is traceable to a qualified person and a calibrated instrument.') +
    h2('3D inspection reporting compared with PDF-only reporting') +
    table('What changes when results are presented on the asset', ['Question', 'PDF-only reporting', 'Digital twin reporting'], [
      ['Where is the lowest reading on this vessel?', 'Open every thickness report and compare', 'Visible on the model by colour, with the reading and report attached'],
      ['Which welds on this line were rejected?', 'Search reports by weld number', 'Rejected welds are marked on the line'],
      ['What changed since the last campaign?', 'Line up two sets of PDFs by hand', 'Campaigns sit on the same geometry, side by side'],
      ['Can the client review without a meeting?', 'Email a zip of PDFs', 'Share the model with the reports linked to it'],
      ['Is the signed record still available?', 'Yes', 'Yes, the approved PDF is attached to each result'],
    ]) +
    h2('Setting up the location scheme before the first report') +
    p('The work that makes 3D reporting pay off happens before anyone scans a weld. Agree the location scheme with the client or the asset owner: how assets, components, welds and measurement locations are numbered, where each datum is, and which way round a pipe is read. If the owner already has a scheme on isometrics or vessel drawings, use it unchanged. If not, the first job is the time to create one, because every later campaign will be compared against it.') +
    ol([
      'Collect the drawings or models for the assets in scope and agree which ones become the reporting geometry.',
      'Fix the location IDs (weld numbers, CML/TML IDs, test points) and publish the list to the field team before they go to site.',
      'Fix the datum and orientation conventions, write them on the job, and use them in every report.',
      'Decide which report types will be placed on the model first; thickness surveys and weld inspection are the usual starting points.',
    ]) +
    p('Once the scheme exists, it is reused on every job for that asset. The second campaign is where the model starts to show its value, because results from both campaigns sit on the same geometry and differences stand out without anyone building a comparison spreadsheet.') +
    h2('Sharing results with clients') +
    p('Inspection results are usually shared with more people than the inspection team: the client\'s integrity engineers, their maintenance planners, a third-party inspector, sometimes an insurer. A 3D view lets those people find what they need without asking the contractor to dig out a report. Each result links to the approved PDF, so the signed record is always one click away, and nothing on the model replaces it.') +
    p('Access is set per customer and per role during implementation, so a client sees their own assets and reports and nothing else. Because the underlying reports sit in Atlantis ERP, the same approval rules apply: only approved reports are presented, and a revised report replaces its earlier revision with the change recorded.') +
    h2('Who uses 3D inspection reporting') +
    ul([
      '<strong>NDT service providers</strong> who want their deliverable to stand out at handover: the client gets the signed reports and a model that makes them usable.',
      '<strong>Asset owners and in-house inspection teams</strong> who need to see inspection history by location across campaigns and contractors.',
      '<strong>Turnaround and shutdown teams</strong> who need to see quickly which items have been inspected, which were rejected and which are waiting on repair and re-inspection.',
      '<strong>QA/QC on fabrication projects</strong> tracking which welds have been examined by which method, and which are clear for the next stage.',
    ]) +
    h2('Getting started') +
    p(`The fastest way to judge whether 3D reporting fits your work is to see your own data on it. Bring one completed report and the drawing it refers to, and we will show the same results on a model. ${dtCta('Request a digital twin reporting demo')}, or read how the <a href="/erp/apps/ndt-reports">NDT Reports app</a> captures the data first. Affordable. Accessible. Fully customizable. Quote on request.`) +
    h2('More questions about 3D inspection reporting') +
    '__FAQ__',
};

// ─── ROI calculator (hours-based) ───────────────────────────────────────────
export const ROI = {
  path: '/ndt-erp-roi-calculator',
  title: 'NDT Software Time-Savings Calculator: Hours Saved | Atlantis',
  description: 'Estimate the hours your NDT company spends on reports, cert and calibration tracking, dispatch and invoicing, and what software could give back. Free.',
  h1: 'NDT Software Time-Savings Calculator',
  lead: 'Enter your own figures and see the admin hours your inspection company could recover each month: report writing, certification tracking, calibration tracking, dispatch and timesheets, and invoicing. Results show immediately. No email needed.',
  faqs: [
    { q: 'Where do the default numbers come from?', a: 'They are example assumptions so the calculator shows something when it opens. They are not benchmarks or measured results from Atlantis customers. Replace every one with your own figures.' },
    { q: 'Why does the calculator show hours instead of money?', a: 'Hours are the thing software changes. If you enter your own loaded labour rate, the calculator also shows what those hours are worth to you, using only your number.' },
    { q: 'Does the calculator include the cost of the software?', a: 'No. Atlantis pricing depends on your region, team size and scope, so it is quoted on request. Compare the hours and value you calculate here with the quote you receive.' },
    { q: 'How should I estimate minutes per report?', a: 'Time a few real reports from the end of the site shift to the moment the approved PDF leaves the office: typing up, formatting, checking, correcting and chasing signatures. Use the median, not the best case.' },
    { q: 'What is the invoicing lag figure for?', a: 'It shows how many days sit between a job finishing and the invoice going out. It is a cash-flow measure, not a labour one, so it is shown separately in days.' },
  ],
  method:
    h2('How the calculator works') +
    p('The calculator estimates admin hours in five areas where NDT companies lose time outside the examination itself, and applies the reduction you expect in each. Every input is yours, and every default is an example assumption, clearly labelled, that you should overwrite. Nothing is pre-filled with a money figure.') +
    table('The five areas and how each is calculated', ['Area', 'Your inputs', 'Hours recovered per month'], [
      ['Report production', 'Reports per month; minutes per report now; minutes per report you expect with structured field capture', 'Reports × (minutes now − minutes expected) ÷ 60'],
      ['Certification tracking', 'Hours per month spent chasing expiries, vision tests and cert copies; share you expect to automate', 'Hours × share'],
      ['Calibration tracking', 'Hours per month on instrument and probe calibration records and due dates; share you expect to automate', 'Hours × share'],
      ['Dispatch and timesheets', 'Hours per month on crew assignment, availability and timesheet collection; share you expect to automate', 'Hours × share'],
      ['Invoicing preparation', 'Hours per month matching timesheets, POs and job records to build invoices; share you expect to automate', 'Hours × share'],
    ]) +
    p('The total is shown per month and per year, and as full-time-equivalent staff using the working hours per year you enter. If, and only if, you enter a loaded labour rate, the calculator multiplies the hours by that rate to show their value in your own currency. Invoicing lag is shown separately, in days from job completion to invoice.'),
  example:
    h2('Worked example (hours only)') +
    p('These are illustrative inputs for a mid-sized service company, not benchmarks and not results from any Atlantis customer.') +
    table('Example inputs and results', ['Area', 'Example input', 'Hours recovered per month'], [
      ['Report production', '160 reports; 45 minutes now; 20 minutes expected', '160 × 25 ÷ 60 = 66.7'],
      ['Certification tracking', '10 hours; 60% automated', '6.0'],
      ['Calibration tracking', '6 hours; 50% automated', '3.0'],
      ['Dispatch and timesheets', '20 hours; 40% automated', '8.0'],
      ['Invoicing preparation', '12 hours; 50% automated', '6.0'],
      ['<strong>Total</strong>', '', '<strong>89.7 hours per month, about 1,076 hours per year</strong>'],
    ]) +
    p('At an example 1,800 working hours per full-time employee per year, 1,076 hours is about 0.6 of a full-time role. The same example with an invoicing lag of 9 days now and 3 days expected shows 6 days less between finishing a job and invoicing it.'),
  sources:
    h2('What drives each saving in Atlantis ERP') +
    ul([
      '<strong>Reports:</strong> method-specific report types captured in the offline field app, job references typed once, review and approval workflow, and company templates filled automatically (<a href="/erp/apps/ndt-reports">NDT Reports</a>).',
      '<strong>Certifications:</strong> status computed automatically (active, expiring soon, expired), warning tasks 90 days before cert or vision-test expiry, and configurable daily email alerts (<a href="/erp/apps/certificates">Certificates</a>).',
      '<strong>Calibration:</strong> calibration records and certificate register per instrument with expiry alerts, and a warning when out-of-calibration equipment is assigned to a job (<a href="/erp/apps/asset-management">Asset Management</a>).',
      '<strong>Dispatch and timesheets:</strong> availability calendar, blocked double-booking of technicians and equipment, and timesheets that warn when a technician\'s certificate is not valid (<a href="/erp/apps/team-assignments">Team Assignments</a>, <a href="/erp/apps/timesheets">Timesheets</a>).',
      '<strong>Invoicing:</strong> billable timesheet hours with rate multipliers feed invoices carrying job/PO number, site, method and technician (<a href="/erp/apps/invoicing">Invoicing</a>).',
    ]) +
    p(`If your numbers make a case, ${contact('erp', 'Demo tailored to my time-savings numbers', 'get a demo tailored to them')}. Affordable. Accessible. Fully customizable. Quote on request.`),
};

export { h3 };
