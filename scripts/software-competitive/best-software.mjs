// /best-ndt-reporting-software-2026 — the vendor comparison that now leads the
// page. Inserted directly after the page intro in both render layers.
import { readFileSync } from 'fs';
import { VENDORS, vendorTable, sourcesList, FULL_COLS, cta, esc, CHECKED } from './vendors.mjs';

/** 2026-10-18: visible re-check date (vendor pages re-read on this date; vendors.mjs CHECKED_ON). */
export const BEST_RECHECKED = '18 October 2026';

// 2026-10-17: title and description come from the CTR wave 15 file (one source with the crawler
// <title>); the page also owns "ndt reporting software" and "best ndt software" (owner links).
const WAVE15 = JSON.parse(readFileSync(new URL('../../src/data/ctr-wave15-software-meta.json', import.meta.url), 'utf-8'));
// 2026-10-18: wave 16 (src/data/ctr-wave16/software.json) is the newer source; wave 15 is the fallback.
const WAVE16 = JSON.parse(readFileSync(new URL('../../src/data/ctr-wave16/software.json', import.meta.url), 'utf-8'));
const META = (p) => WAVE16[p] || WAVE15[p];

export const BEST_PATH = '/best-ndt-reporting-software-2026';
export const BEST_TITLE = META(BEST_PATH).title;
// 2026-10-25: H1 and title name "NDT software" as well — Google already sends this page "ndt software"
// (406 impr / 90d at p20.3), "best ndt software" (67 at p6.2) and "non destructive testing software"
// (59 at p25.1) alongside "ndt reporting software" (293 at p11.0); none of those words were in the title.
export const BEST_H1 = 'Best NDT Software and NDT Reporting Software: Nine Platforms Compared by an ASNT Level III';
export const BEST_DESC = META(BEST_PATH).description;
/** Page intro under the H1, both layers (replaces the Round-7 intro in the crawler HTML). */
export const BEST_INTRO = 'Reviewed by Atlantis NDT founder Anoop Rayavarapu, ASNT NDT Level III in five methods (UT, RT, MT, PT, VT), with 11+ years of international NDT field experience. Nine NDT reporting and management platforms are compared on what each vendor publishes about itself, with Atlantis included on the same terms and every competitor fact linked to its source.';

/** 2026-10-17 direct answer for the head query, first thing after the intro (§25.4). */
export const BEST_ANSWER = {
  h2: 'What is NDT reporting software?',
  text: 'NDT reporting software turns field inspection data into signed, method-specific reports for UT, RT, MT, PT, VT, PAUT and other methods. It holds the template, the technician and the instrument behind each result, and the review and approval that release the report to the client. Some products stop at the report; an NDT ERP also runs certifications, dispatch and invoicing.',
};

/** 2026-10-25: "NDT software" is three different products; the head query mixes them (GSC 90d, see BEST_H1). */
export const BEST_KINDS = {
  h2: 'What does \u201cNDT software\u201d mean? Three kinds of product',
  intro: 'Searches for NDT software mix three different products, and most buyers only need two of them. Knowing which one you are shopping for saves a demo cycle.',
  items: [
    ['Instrument and data-analysis software.', 'Supplied by the equipment maker to set up scans and analyse acquired data, for example Evident\u2019s <a href="https://ims.evidentscientific.com/en/insights/omnipc-freeware" rel="noopener">OmniPC</a> for OmniScan phased array and TOFD files, or Zetec\u2019s UltraVision. It reads the instrument\u2019s data. It does not run your jobs, your technicians\u2019 certificates or your invoices.'],
    ['NDT reporting software.', 'Turns field results into signed, method-specific reports, with templates, review and approval. This page compares the platforms in this group.'],
    ['NDT inspection management software, often called an NDT ERP.', 'Runs the business around the report: technician certifications, instrument calibration, dispatch, timesheets and invoicing. Atlantis is in this group; our page on <a href="/ndt-inspection-software">NDT inspection software</a> sets out what it covers.'],
  ],
  outro: 'Most inspection companies get the first kind with their instruments and choose one of the other two for everything after acquisition. The comparison below covers the second and third kinds side by side.',
};

/** Spreadsheets vs a reporting-only tool vs an NDT ERP, for report production (no vendor named). */
export const BEST_APPROACHES = {
  h2: 'Spreadsheets, a reporting tool or an NDT ERP?',
  intro: 'Most companies choosing NDT reporting software are leaving Word and Excel. The real choice is how far past the report the software should reach. This is the honest trade-off, without naming vendors.',
  headers: ['What you need', 'Spreadsheets and Word templates', 'Reporting-only tool', 'NDT ERP'],
  rows: [
    ['Reports in your client\u2019s format', 'Yes, but every job is a copy of the last one', 'Usually, through a form or template builder', 'Yes, from versioned company templates'],
    ['Review and sign-off', 'Printed, signed and scanned, or chased by email', 'Built in, with roles for inspector and reviewer', 'Built in, linked to the job, the technician and the client'],
    ['Who signed, with which certificate', 'A separate certificate spreadsheet someone has to check', 'Sometimes a certificate field; depth varies', 'Certificates, vision tests and expiry status in the same system'],
    ['Instrument and calibration on the report', 'Typed in by hand, so serials get copied from last week', 'Depends on the product', 'Instrument register with calibration records and due dates'],
    ['Work with no signal', 'Paper first, typed up later', 'Depends on the app; test it', 'Offline field app that syncs later'],
    ['Billing the job', 'Built again in the accounting package', 'Usually not covered', 'Timesheets and invoices from the same job record'],
    ['Effort to start', 'None', 'Low: sign up and build forms', 'A scoping and configuration phase'],
    ['Best fit', 'A very small crew with a handful of report types', 'Report volume is the only problem', 'Reports, people, instruments and invoices all need to agree'],
  ],
  note: 'The Atlantis ERP is in the right-hand column. If report volume is your only problem, a reporting-only tool from the table above may be the better buy.',
};

/** Folded from the retired /intelligent-reporting-software and /ndt-reporting-software-comparison (2026-10-17). */
export const BEST_FOLDED = [
  {
    h2: 'Marine and class-society report bundles',
    paragraphs: [
      'Ship-repair and offshore work adds a requirement most reporting tools ignore: the surveyor wants one document, not four attachments. In Atlantis NDT Reports, marine mode adds a vessel cover page and photo, the inspection location and dates, and merges the classification-society certificate, the inspector\u2019s Level II certificate and the calibration certificate into the report PDF, with inspection photos laid out two to a row. The class library covers DNV, ABS, Lloyd\u2019s Register, BV, RINA, IRS and ClassNK.',
    ],
  },
  {
    h2: 'Moving off Word and Excel without losing your formats',
    paragraphs: ['The client-facing layout usually stays the same; what changes is where the data comes from. In Atlantis the move runs like this:'],
    bullets: [
      'Collect one recent report per method, plus the formats your largest clients insist on. That is the real requirement, more than any feature list.',
      'Load your Word, Excel or PDF layouts as versioned company templates; where you use Excel, fields are mapped to cells and filled automatically.',
      'Set report numbering per method and assign inspector, reviewer and approver roles to match your written practice.',
      'Load technicians and instruments, so the field app shows each technician the jobs and equipment assigned to them.',
      'Go live one method at a time, starting with the method that produces the most reports.',
    ],
  },
  {
    h2: 'Test these five things in any trial',
    bullets: [
      'Offline: complete a full report with photos in airplane mode, close the app, reconnect and confirm nothing was lost or duplicated.',
      'Lapsed certificate: expire a technician\u2019s certificate in the trial and see what the software does when that person is assigned or signs.',
      'Your own format: rebuild your hardest client template, not the vendor\u2019s sample.',
      'Review loop: return a report for correction, revise it and approve it, then look at the revision history.',
      'Exit: export the reports, attachments and underlying records, and open them without the vendor\u2019s software.',
    ],
  },
];

export const BEST_CTA = {
  h2: 'Try Atlantis before you talk to sales',
  text: 'Start a free trial and run one real report through it, or book a guided walkthrough on your own report formats with an ASNT NDT Level III.',
  trial: { href: '/free-trial', label: 'Start the free trial' },
  walkthrough: { href: '/contact?service=erp&subject=Guided%20ERP%20walkthrough', label: 'Book a guided walkthrough' },
};

const ORDER = ['floodlight', 'agilendt', 'drive', 'zertify', 'oms', 'inspectionbank', 'waygate', 'therightsw', 'atlantis'];

export const BEST_FAQ = [
  {
    q: 'What is the best NDT software?',
    a: 'There is no single best NDT software; there is a best fit for how your company works. Floodlight is the most complete ready-made platform for North American service companies, AgileNDT leads on controlled report review, DRIVE NDT suits European order-and-billing workflows, InspectionBank suits advanced UT data, and Atlantis fits companies that want reporting, certifications, calibration, dispatch and invoicing in one configured ERP.',
  },
  {
    q: 'What is the difference between NDT reporting software and NDT ERP?',
    a: 'NDT reporting software captures inspection data and issues the report. An NDT ERP also runs the business around the report: technician certifications, equipment calibration, crew dispatch, quotations, timesheets and invoicing. Several platforms in this comparison cover part of that span; check where each one stops before you shortlist it.',
  },
  {
    q: 'Which NDT software works offline in the field?',
    a: 'Floodlight and Atlantis state that data is stored on the device and synced on reconnect, InspectionBank has a disconnected mobile client and AgileNDT describes offline-ready workflows. OMS states that it needs a stable internet connection, and The Right Software lists offline sync as upcoming. Test it yourself: complete a full report in airplane mode, close the app, reconnect and confirm nothing was lost.',
  },
  {
    q: 'Which NDT software publishes its pricing?',
    a: 'Among the platforms compared, Floodlight and AgileNDT publish pricing on their own sites, and Atlantis publishes its plans for the USA and Canada on its ERP pricing page; elsewhere Atlantis is quoted on request. The other vendors reviewed do not publish pricing and offer demos on request.',
    links: [['ERP pricing page', '/erp/pricing']],
  },
  {
    q: 'Does NDT software track technician certifications to SNT-TC-1A?',
    a: 'Floodlight, AgileNDT, OMS, InspectionBank and Atlantis all describe technician certification records. The test is whether the platform can hold your written practice: scheme, level, method, expiry, vision test and alerts before expiry. Atlantis records SNT-TC-1A, CP-189, ISO 9712, PCN and CSWIP certifications with vision tests and alerts ahead of expiry.',
  },
  {
    q: 'How did you compare these NDT platforms?',
    a: 'Each competitor fact was read from the vendor’s own public product page in September 2026, re-checked on ' + BEST_RECHECKED + ', and is linked in the sources list. Where a vendor page does not describe a capability, the table says "not stated" rather than guessing. Atlantis is the publisher of this page and is included in the table on the same criteria.',
  },
  // 2026-10-17: folded from the retired comparison pages; each answers a US query with impressions.
  {
    q: 'Where can operators compare NDE inspection capabilities and pricing?',
    a: 'On each vendor’s own product page; the table above collects nine of them with links, compared on methods, reporting, certifications, calibration, dispatch, invoicing and offline use. Floodlight and AgileNDT publish pricing, Atlantis publishes plans for the USA and Canada on its ERP pricing page, and the others quote on request. Operators planning inspection on their own plant should also compare integrity management systems, which consume the reports these platforms produce.',
    links: [['ERP pricing page', '/erp/pricing']],
  },
  {
    q: 'Is there affordable NDT reporting software for small businesses?',
    a: 'Yes. Reporting-only tools are the cheapest way to replace Word and Excel, and Floodlight and AgileNDT publish their pricing. With Atlantis a small shop can start with reports and certificates only and add other apps later. Plans for the USA and Canada are published on the ERP pricing page, it is quoted on request elsewhere, and there is a free trial to test it on a real report first.',
    links: [['ERP pricing page', '/erp/pricing'], ['free trial', '/free-trial']],
  },
  {
    q: 'Which NDT reporting software integrates with CMMS systems?',
    a: 'AgileNDT describes connections to ERP, accounting or asset-management platforms, with roles synced from single sign-on. Floodlight’s NDT reporting page describes a quote-to-cash workflow but names no integrations. Atlantis ERP has an open REST API, and connections to systems such as SAP, IBM Maximo, Oracle, Microsoft Dynamics and QuickBooks are scoped per implementation. Whichever you shortlist, ask to see one real job exchanged with your own system.',
    links: [['open REST API', '/ndt-erp-integration-matrix']],
  },
  {
    q: 'How do I test offline mode during a software demo?',
    a: 'Put the device in airplane mode, complete a full report with photos and a signature, close the app, then reconnect. Confirm the report arrives once, complete, with nothing duplicated. The Atlantis field app stores drafts and photos on the device and syncs when signal returns; test it the same way.',
  },
  {
    q: 'Can reporting software stop a lapsed technician from signing a report?',
    a: 'Ask to see it rather than taking it on trust. In Atlantis, certificate status is worked out automatically, warning tasks are raised before a certificate or vision test expires, and timesheets warn when a technician’s certificate is not valid. How strictly a lapsed technician is held back from a report step is set during implementation.',
  },
  // 2026-10-18: answer-shaped facts for AI assistants (each one is in the table above).
  {
    q: 'Which NDT reporting software is cloud-based and built for field use?',
    a: 'From the vendors’ own pages: Floodlight is a cloud platform with a mobile app that stores data locally and syncs; AgileNDT is single-tenant, cloud-hosted or on your own infrastructure, and describes offline-ready workflows; DRIVE NDT, Zertify and OMS are cloud platforms; InspectionBank runs an online server with a disconnected mobile client; Atlantis is a web-based ERP with an installable offline field app. Test offline use yourself in airplane mode.',
  },
  {
    q: 'Which NDT reporting software offers a free trial?',
    a: 'Floodlight states a free trial on its site, and Atlantis offers one on its free trial page. The other vendors reviewed offer demos on request. Check each vendor’s current terms before you plan the evaluation.',
    links: [['free trial page', '/free-trial']],
  },
];

/** Escaped answer text with each [phrase, href] in `links` turned into a link (first occurrence). */
export function linkedAnswer(f) {
  let html = esc(f.a);
  for (const [phrase, href] of f.links || []) {
    const e = esc(phrase);
    if (!html.includes(e)) throw new Error(`best-software FAQ: link phrase "${phrase}" not in answer to "${f.q}"`);
    html = html.replace(e, `<a href="${href}">${e}</a>`);
  }
  return html;
}

function faqHtml(faq) {
  return '<h2>Best NDT software: frequently asked questions</h2>' +
    faq.map((f) => `<h3>${esc(f.q)}</h3><p>${linkedAnswer(f)}</p>`).join('');
}

export function bestBlockHtml() {
  const profile = (k, body) => {
    const v = VENDORS.find((x) => x.key === k);
    return `<h3>${esc(v.name)}</h3><p>${body}</p>`;
  };
  const approaches = `<h2>${esc(BEST_APPROACHES.h2)}</h2>
<p>${esc(BEST_APPROACHES.intro)}</p>
<div class="table-scroll"><table><caption>${esc(BEST_APPROACHES.h2)}</caption><thead><tr>${BEST_APPROACHES.headers.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${BEST_APPROACHES.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>
<p>${esc(BEST_APPROACHES.note)}</p>`;
  const ctaBlock = `<h2>${esc(BEST_CTA.h2)}</h2>
<p>${esc(BEST_CTA.text)} <a href="${BEST_CTA.trial.href}">${esc(BEST_CTA.trial.label)}</a> · <a href="${BEST_CTA.walkthrough.href.replace(/&/g, '&amp;')}">${esc(BEST_CTA.walkthrough.label)}</a></p>`;
  const folded = BEST_FOLDED.map((f) => `<h2>${esc(f.h2)}</h2>
${(f.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('\n')}${f.bullets ? `\n<ul>${f.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}`).join('\n');
  return `
<section class="sw-compare" aria-label="NDT software compared">
<section data-citation-block="answer" aria-label="Direct answer">
<h2>${esc(BEST_ANSWER.h2)}</h2>
<p>${esc(BEST_ANSWER.text)}</p>
</section>
<h2>${esc(BEST_KINDS.h2)}</h2>
<p>${esc(BEST_KINDS.intro)}</p>
<ul>${BEST_KINDS.items.map(([h, t]) => `<li><strong>${esc(h)}</strong> ${t}</li>`).join('')}</ul>
<p>${esc(BEST_KINDS.outro)}</p>
<p><strong>Short answer:</strong> the best NDT software for a North American inspection company is the one that covers the whole job, from the request to the invoice, without re-keying. On that test the platforms that actually compete are Floodlight, AgileNDT, DRIVE NDT, Zertify, OMS, InspectionBank, Waygate InspectionWorks, the product sold as NDT Reporting Software, and Atlantis. They are not interchangeable: some are reporting tools, some are data platforms, and a few run the business around the report. The table below shows where each one stops.</p>
<p>Disclosure: Atlantis NDT publishes this page and is one of the platforms compared. The comparison is unranked and every competitor fact links to the vendor's own page, so you can check it.</p>
<p data-last-reviewed="2026-10-18"><strong>Last reviewed:</strong> vendor pages re-checked on ${BEST_RECHECKED} by Anoop Rayavarapu, ASNT NDT Level III (UT, RT, MT, PT, VT).</p>

<h2>NDT inspection software or NDT reporting software?</h2>
<p>NDT reporting software captures the inspection and issues the signed report. NDT inspection software, in the sense inspection companies use it, also runs the work around the report: technician certifications, instrument calibration, crew dispatch and the invoice. Several platforms in the table cover part of that span. If you are still choosing the category, our page on <a href="/ndt-inspection-software">NDT inspection software</a> sets out what each kind of product does and does not do.</p>

<h2>NDT reporting software compared: nine platforms side by side</h2>
${vendorTable(ORDER, FULL_COLS, `NDT reporting and management software compared (vendor pages checked ${CHECKED})`)}
<p>"Not stated" means the vendor's public page does not describe the capability. It does not mean the product lacks it. Ask for it in the demo and ask to see it working on your own data. ${cta('Best NDT software comparison: Atlantis demo', 'Book an Atlantis demo on your own report formats')}.</p>

${approaches}

${ctaBlock}

<h2>How we compared</h2>
<p>We looked at the software through the eyes of an NDT service company owner or Level III, not an IT buyer. Nine criteria decide whether a platform removes work or just moves it:</p>
<ol>
<li><strong>Deployment</strong>: cloud, single-tenant, on-premise, and what runs on the technician's device.</li>
<li><strong>NDT methods</strong>: which report types exist out of the box, and whether each method has its own fields rather than one generic form.</li>
<li><strong>Reporting</strong>: templates, review and approval, signatures, and whether reports come out in your client's format.</li>
<li><strong>Certification tracking</strong>: scheme, level, method, expiry and vision tests per technician, with alerts before anything lapses.</li>
<li><strong>Calibration</strong>: instruments by serial number, calibration certificates, due dates and warnings when an out-of-date instrument is assigned.</li>
<li><strong>Dispatch</strong>: assigning crews and equipment to jobs without double-booking.</li>
<li><strong>ERP and invoicing</strong>: quotes, timesheets and invoices tied to the job, so the report and the bill come from the same record.</li>
<li><strong>Offline mobile</strong>: whether a technician inside a vessel or tank farm can finish a report with no signal.</li>
<li><strong>Pricing model</strong>: whether the vendor publishes pricing or quotes. We do not reproduce anyone's prices; they change, and the vendor's page is the only reliable source.</li>
</ol>
<p>Sources were the vendors' own product pages, first read in September 2026 and re-checked on ${BEST_RECHECKED}; cells that had changed were updated. We did not use review-site scores, because most NDT platforms have too few reviews for a score to mean anything, and we did not rank the list. A ranked list of software built for different jobs would tell you more about the author than about the software.</p>

<h2>The platforms in brief</h2>
${profile('floodlight', 'The reference point in North America. Floodlight covers dispatch and scheduling, a custom form builder, mobile capture that stores data locally and syncs on reconnect, technician certification tracking, equipment and calibration records, job quoting, invoicing and a customer portal. It publishes pricing and offers a free trial, and its homepage states more than a hundred active customers. If your workflow is a standard North American service-company workflow and you want to be live quickly, it is a strong, well-matched choice. See <a href="/floodlight-software-alternatives">Floodlight alternatives</a> if you need something it does not do.')}
${profile('agilendt', 'Operating since 2011 from Scotland, with a modular product: reporting, certifications, work requests, customer portal, dashboards, quotes, billing, inventory, technique sheets and lifting equipment, plus AI report review. It is single-tenant, hosted in the cloud or on your own infrastructure, and it publishes example pricing by deployment scope. Its strength is controlled report review and release. See <a href="/agilendt-alternatives">AgileNDT alternatives</a>.')}
${profile('drive', 'A cloud platform built around inspection order management: record, assign and track orders, create reports with measured values imported directly, then calculate costs and bill. It supports 11 or more methods and lists European references such as Applus+ and DEKRA. It does not publish pricing. See <a href="/drive-ndt-alternatives">DRIVE NDT alternatives</a>.')}
${profile('zertify', 'Spinnsol’s cloud NDT management software, covering planning, scheduling and dispatch, report generation with digital signatures from project managers and owners, and staff, customer and device management across MT, PT, RT, ET, UT and VT, with data entered on a tablet or smartphone. Its NDT page does not describe offline use or invoicing. See <a href="/zertify-alternatives">Zertify alternatives</a>.')}
${profile('oms', 'An Australian cloud NDT platform with a quality-management core, built around ISO/IEC 17020 workflows: method test-record templates, certificates clients can verify by QR code, Level II and III, PCN and CSWIP qualifications with renewal dates, equipment due-date alerts, job scheduling, CAPA and non-conformance tracking. Its page states that a stable internet connection is required.')}
${profile('inspectionbank', 'From Eclipse Scientific in Canada. InspectionBank manages inspection records, scan data files and images, indications, procedures and techniques, employee certifications, asset calibration records and scheduling, with a disconnected mobile client and a client web portal. It is strongest for advanced ultrasonic teams; quoting and invoicing are not described.')}
${profile('waygate', 'Waygate Technologies’ InspectionWorks is a software platform to acquire, analyse and act on inspection data with real-time collaboration, alongside Waygate imaging software such as Rhythm (DICONDE-compliant acquisition and analysis) and X|approver (AI-based defect recognition). It is inspection-data software rather than business-operations software, so it complements, not replaces, the tools that run certifications, dispatch and invoicing.')}
${profile('therightsw', 'A product literally named NDT Reporting Software, listed on Capterra and SourceForge, run in the cloud or on private infrastructure. Its published features are jobs and job requests, report forms with dropdown fields for the common methods plus PWHT and hydro testing, admin, manager, inspector and client roles, and PDF export; its FAQ lists offline sync as upcoming. It is a reporting tool, not an operations platform.')}
${profile('atlantis', 'Atlantis NDT ERP with its NDT Reports app: method-specific report types for every common method, with a draft, review, approve and send workflow; technician certifications for SNT-TC-1A, CP-189, ISO 9712, PCN and CSWIP with vision tests and alerts before expiry; instrument calibration records; team assignments that block double-booking; and quotations, timesheets and invoicing in the same system. The field app works offline. The companion <a href="/digital-twin-reporting">Digital Twin Reporting Software</a> places results on a 3D model of the asset. It is configured for each company; plans for the USA and Canada are published on the <a href="/erp/pricing">ERP pricing page</a>, it is quoted on request elsewhere, and there is a <a href="/free-trial">free trial</a>. It is not the quickest to switch on: expect a scoping and configuration phase.')}

<h2>Who should choose what</h2>
<ul>
<li><strong>You want a proven North American NDT platform running next month:</strong> shortlist Floodlight first, then compare it with AgileNDT.</li>
<li><strong>Report review, release and audit evidence are your pain point:</strong> AgileNDT.</li>
<li><strong>You run a European-style order-and-billing operation with many methods:</strong> DRIVE NDT.</li>
<li><strong>You manage lifting equipment as well as doing NDT:</strong> AgileNDT, which lists a lifting-equipment module.</li>
<li><strong>You are an inspection body working to ISO/IEC 17020 and want quality-system controls in the same tool:</strong> OMS.</li>
<li><strong>Your work is advanced UT with large scan files:</strong> InspectionBank, alongside your instrument software.</li>
<li><strong>Your fleet is Waygate hardware and your problem is inspection data, not admin:</strong> InspectionWorks.</li>
<li><strong>You want a free trial before any sales call:</strong> Floodlight or Atlantis, the two that state a free trial.</li>
<li><strong>You need only standard report forms online:</strong> a reporting-only tool such as NDT Reporting Software.</li>
<li><strong>You want reporting, certifications, calibration, dispatch, quotes and invoicing in one system shaped around your own formats:</strong> Atlantis. ${cta('Best NDT software: Atlantis scoping call', 'Request a scoping call')}.</li>
<li><strong>Fewer than about five technicians and a low report volume:</strong> well-controlled spreadsheets and templates may still be enough. See <a href="/ndt-reporting-software-vs-excel">NDT reporting software vs Excel</a>.</li>
<li><strong>You are an owner-operator planning inspection on your own plant</strong> (risk-based inspection, corrosion rates, inspection intervals): you need an integrity management system. None of the reporting platforms above replaces one, and Atlantis ERP does not perform those calculations; it delivers the inspection reports and records that such a system consumes.</li>
</ul>
${folded}
<p>Also compared: <a href="/ndt-erp-vs-field-service-software">NDT ERP vs field service software (ServiceTitan, ServiceTrade, Jobber)</a> and <a href="/ndt-erp-vs-generic-erp">NDT ERP vs generic ERP</a>.</p>

<h2>Sources</h2>
<p>Vendor pages read in September 2026 and re-checked on ${BEST_RECHECKED}:</p>
${sourcesList(ORDER)}
<p>Spotted something out of date? Tell us and we will correct it. To see Atlantis on your own jobs, ${cta('Best NDT software: Atlantis demo request', 'book a demo')} or <a href="/free-trial">start the free trial</a>. Plans for the USA and Canada are on the <a href="/erp/pricing">ERP pricing page</a>; elsewhere, quote on request.</p>
${faqHtml(BEST_FAQ)}
</section>`;
}

export function bestSchema() {
  const url = 'https://atlantisndt.com' + BEST_PATH;
  return [
    {
      '@type': 'ItemList',
      '@id': url + '#ndt-software-compared',
      name: 'NDT reporting software platforms compared',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: ORDER.length,
      itemListElement: ORDER.map((k, i) => {
        const v = VENDORS.find((x) => x.key === k);
        return { '@type': 'ListItem', position: i + 1, name: v.name, url: v.src };
      }),
    },
  ];
}
