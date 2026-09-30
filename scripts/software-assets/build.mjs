// Builds the software-assets data (2026-09-29):
//   src/data/software-assets/report-templates.json
//   src/data/software-assets/integrations.json
//   src/data/software-assets/extras.json
//   public/templates/print/<slug>.html   (print-optimised blank forms, noindex)
//   public/templates/csv/<slug>.csv      (field list + example rows)
// Run: node scripts/software-assets/build.mjs   (idempotent; commit the output)
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { h2, p, ul, table, fieldTable, faqHtml, contact, words, esc } from './lib.mjs';
import { METHODS, HUB, HUB_PATH, HEADER, SIGNOFF, SOURCES, PUBLISHED, EXTRA } from './templates-content.mjs';
import { INTEGRATIONS, INTEGRATIONS_HUB, INTEGRATION_SOURCES } from './integrations-content.mjs';
import { DT_REPORTING_BLOCK, ROI } from './extras-content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DATA = join(ROOT, 'src/data/software-assets');
const PRINT = join(ROOT, 'public/templates/print');
const CSV = join(ROOT, 'public/templates/csv');
for (const d of [DATA, PRINT, CSV]) mkdirSync(d, { recursive: true });

const methodPath = (m) => `${HUB_PATH}/${m.slug}`;
const printUrl = (m) => `/templates/print/${m.slug}.html`;
const csvUrl = (m) => `/templates/csv/${m.slug}.csv`;
const subject = (m) => `Template request — ${m.short}`;

const COMMON_FIELDS =
  h2('The header fields every NDT report shares') +
  p('Whatever the method, a report is only useful if it can be tied to the job, the drawing and the people. Every template in this library starts with the same header block: report number and revision, date, client, job and work-order references, site, component, drawing and revision, procedure and revision, acceptance standard and extent. ASME Section V Article 1 sets general record requirements that each method article then builds on, and client specifications almost always add their own. Keeping the header identical across methods means a reviewer, or the software that reads your reports later, always finds the same facts in the same place.');

function automationSection(m) {
  return (
    h2('Generate these reports automatically in Atlantis NDT Reporting') +
    p(`A template solves the layout. It does not stop the same job, drawing, procedure, instrument and technician details being typed again on every report, or a report going out before anyone checked the technician\'s certificate was in date. In Atlantis ERP, the <a href="/erp/apps/ndt-reports">NDT Reports app</a> holds ${m.short} as its own report type with its own numbering sequence, captured in an offline field app with photos and on-screen signatures, then moved through draft, review, approval and sending with inspector, reviewer and approver signatures.`) +
    p(m.automation) +
    p('Your company format is kept: templates can be versioned in Excel, Word, PDF or HTML with your logo, header and footer, and Excel templates are filled automatically by mapping fields to cells. When the report is approved, <a href="/digital-twin-reporting">Digital Twin Reporting</a> can place its results on a 3D model of the asset, so clients find reports by location rather than by file name.') +
    p(`${contact('reporting', `${m.short} report automation demo`, `See ${m.short} reports generated in Atlantis`)}, or keep using the template: both are fine starting points.`)
  );
}

function methodBody(m) {
  const glance = table(`${m.short} report at a glance`, ['Item', 'Reference'], [
    ['ASME code reference', m.asme],
    ['ISO reference', m.iso],
    ['This template covers', 'Header, equipment and calibration, results table, sign-off'],
    ['Formats', `<a href="${printUrl(m)}">Print view (save as PDF)</a> · <a href="${csvUrl(m)}" download>CSV</a> · editable Word/Excel on request`],
  ]);
  const layout =
    h2(`Example ${m.name} layout`) +
    p('The layout below is the template filled with illustrative example values so each field\'s purpose is clear. The print view gives you the same layout blank, ready to fill in on site.') +
    fieldTable('Report header', HEADER) +
    m.groups.map((g) => fieldTable(g.heading, g.rows)).join('') +
    table(m.results.caption, m.results.head, m.results.rows, 'report-results') +
    fieldTable('Personnel and sign-off', SIGNOFF.map(([f, v]) => [f, v.replace('UT Level II', `${m.short === 'UTT' ? 'UT' : m.short} Level II`)]));
  const downloads =
    h2('Download, print or get the editable version') +
    ul([
      `<a href="${printUrl(m)}">Open the printable ${m.short} template</a>: a clean blank form. Use your browser's Print and choose "Save as PDF" to keep a PDF copy.`,
      `<a href="${csvUrl(m)}" download>Download the CSV</a> with every field and the example rows, to build your own spreadsheet.`,
      `Want the editable Word or Excel version with your logo? Use the request form on this page or ${contact('reporting', subject(m), 'ask for it here')}.`,
    ]);
  const others =
    h2('Other NDT report templates') +
    ul([
      `<a href="${HUB_PATH}">All NDT report templates</a>`,
      ...METHODS.filter((o) => o.slug !== m.slug).map((o) => `<a href="${methodPath(o)}">${o.h1.replace(/ Template$/, '')} template</a>`),
    ]);
  const refs = SOURCES.filter(([t]) => {
    const key = { UT: /Article 4|17640/, UTT: /797|16809|Article 23/, PT: /Article 6|3452/, MT: /Article 7|17638/, RT: /Article 2|17636/, VT: /Article 9|17637/, PAUT: /Article 4|13588/, TOFD: /Article 4|10863/ }[m.short];
    return key.test(t);
  });
  const standards = h2('Standards referenced') + ul(refs.map(([t, u]) => `<a href="${u}" rel="nofollow noopener">${t}</a>`)) +
    p('ASME Section V paragraph numbers change between editions. Always check the edition your contract or the referencing construction code names; the template fields are the same.');
  return glance + m.requirements + layout + downloads + m.guidance + (EXTRA[m.slug] || '') + COMMON_FIELDS + automationSection(m) + faqHtml(m.faqs) + others + standards;
}

function hubBody() {
  const rows = METHODS.map((m) => [`<a href="${methodPath(m)}">${m.h1.replace(/ Template$/, '')}</a>`, m.asme, m.iso]);
  return (
    h2('Pick a template by method') +
    table('NDT report templates in this library', ['Template', 'ASME reference', 'ISO reference'], rows) +
    p('Each template page explains what that method\'s report must contain, shows an example layout with illustrative values, and links to a print view you can save as PDF and a CSV of the fields. The editable Word or Excel version can be requested from any template page.') +
    h2('What every NDT report must contain') +
    p('Whatever the method, a report has to let someone who was not there understand what was examined, how, by whom, against what standard, and with what result, and it has to let them find the same place again. ASME Section V Article 1 sets general record requirements that each method article builds on, and ISO method standards each close with a test-report clause. Across all of them, the common core is:') +
    ul([
      'Unique report number and revision, and the date of the examination.',
      'Client, job, work-order and purchase-order references.',
      'The item examined: component, weld or area ID, drawing number and revision, material and thickness.',
      'The procedure and its revision, the technique, and the extent of examination.',
      'The equipment used, identified well enough to trace its calibration.',
      'The personnel: name, method, level and certification scheme, for the examiner and any reviewer.',
      'The indications found, with location from a stated datum, size and evaluation.',
      'The acceptance standard, the result, and signatures.',
    ]) +
    h2('Choosing the right template') +
    p('Choose by method first, then check the report against three documents: your NDT procedure (which fixes the technique and the recording levels), your written practice (which decides who may evaluate and sign), and the client specification (which often adds fields, formats or a required cover sheet). If they disagree, the client specification and the referencing code win. For surface methods on welds, PT and MT reports look similar but record different process controls; for volumetric methods, a PAUT or TOFD report needs the data file and scan plan that a manual UT report does not.') +
    table('Which template for which job', ['Job', 'Template'], [
      ['Manual UT of butt or fillet welds', `<a href="${methodPath(METHODS[0])}">UT weld inspection report</a>`],
      ['Wall-thickness survey of piping, vessels or tanks', `<a href="${methodPath(METHODS[1])}">UT thickness survey report</a>`],
      ['Surface cracks on non-magnetic or magnetic materials', `<a href="${methodPath(METHODS[2])}">PT report</a>`],
      ['Surface and near-surface cracks on ferromagnetic welds', `<a href="${methodPath(METHODS[3])}">MT report</a>`],
      ['Volumetric examination with film or digital detectors', `<a href="${methodPath(METHODS[4])}">RT report</a>`],
      ['Fit-up, in-process or final weld visual', `<a href="${methodPath(METHODS[5])}">VT report</a>`],
      ['Encoded phased array weld scans', `<a href="${methodPath(METHODS[6])}">PAUT report</a>`],
      ['TOFD weld scans and flaw height sizing', `<a href="${methodPath(METHODS[7])}">TOFD report</a>`],
    ]) +
    h2('Why NDT reports get sent back') +
    p('Client reviewers and Authorized Inspectors reject reports for a short list of reasons: no datum, so an indication cannot be found again; equipment named without serial numbers, so calibration cannot be traced; a result with no stated acceptance standard; "no recordable indications" with no recording level; a technician whose certificate had lapsed; and signatures missing or in the wrong order. The templates are built to make each of those visible before the report leaves the office. For more on this, read <a href="/blog/ndt-report-format-what-clients-reject">the NDT report format clients reject</a>.') +
    h2('Report numbering, revisions and retention') +
    p('A template is only half of a reporting system. The other half is how reports are numbered, revised and kept. A numbering scheme that includes the method and a running sequence (for example one sequence per method, per year) makes a missing report obvious and stops two technicians issuing the same number on the same day. Revisions should be explicit: if a report is corrected after issue, it is reissued with a new revision and the reason, and the superseded revision is kept, not overwritten.') +
    p('Retention periods are set by the referencing code, the client contract and your quality system, and they differ: some codes set a minimum for radiographs and review forms, some clients require the full job file for the life of the asset, and your written practice sets how long personnel records are kept. Write the retention rule into your quality procedure and apply it to reports, raw data (films, PAUT and TOFD files, thickness logs), calibration records and certification records together, since an audit of one report will ask for all of them.') +
    ul([
      'One numbering sequence per method keeps gaps visible.',
      'Never edit an issued report in place; reissue with a revision and a reason.',
      'Keep raw data with the report it supports, under the same job reference.',
      'Keep the technician\'s certification and the instrument\'s calibration evidence traceable to the date of the examination.',
    ]) +
    h2('Paper, spreadsheet or software') +
    p('Paper forms are still normal on many sites, and a well-designed paper form is better than a badly designed app. Spreadsheets add sums and consistency but make it easy to overwrite the last good version. Software earns its place when report volume, the number of technicians, or client audit pressure makes retyping and manual checking the bottleneck. These templates work in all three: print them, rebuild them from the CSV, or use them as the specification for your report types in software.') +
    h2('Other free NDT templates') +
    ul([
      '<a href="/resources/ndt-procedure-template">NDT procedure template</a>',
      '<a href="/resources/ndt-written-practice-template">NDT written practice template (SNT-TC-1A)</a>',
      '<a href="/resources/calibration-certificate-template">Calibration certificate template</a>',
      '<a href="/resources/daily-progress-report-dpr">NDT daily progress report template</a>',
      '<a href="/resources/ndt-inspection-checklist">NDT inspection checklist</a>',
      '<a href="/resources">All resources and downloads</a>',
    ]) +
    h2('From templates to software') +
    p('Templates fix the layout. What they cannot fix is the retyping: the same job, drawing, procedure, instrument and technician details on every report, and the manual check that the technician\'s certificate and the instrument\'s calibration were valid on the day. In Atlantis ERP, the <a href="/erp/apps/ndt-reports">NDT Reports app</a> has 17 method-specific report types, captured in an offline field app with photos and signatures, reviewed and approved in a workflow, and issued in your own company format. <a href="/digital-twin-reporting">Digital Twin Reporting</a> then places the results on a 3D model of the asset.') +
    p(`To estimate the hours that could save, try the <a href="/ndt-erp-roi-calculator">NDT software time-savings calculator</a>, or ${contact('reporting', 'NDT report templates to software', 'ask for a demo using one of your own reports')}. Affordable. Accessible. Fully customizable. Quote on request.`) +
    faqHtml(HUB.faqs) +
    h2('Standards referenced') +
    ul(SOURCES.map(([t, u]) => `<a href="${u}" rel="nofollow noopener">${t}</a>`))
  );
}

// ─── print view + CSV ──────────────────────────────────────────────────────
const csvCell = (s) => {
  const t = String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
  return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
};
function csvFor(m) {
  const lines = [['Section', 'Field', 'Example value']];
  for (const [f, v] of HEADER) lines.push(['Report header', f, v]);
  for (const g of m.groups) for (const [f, v] of g.rows) lines.push([g.heading, f, v]);
  for (const [f, v] of SIGNOFF) lines.push(['Personnel and sign-off', f, v]);
  lines.push([]);
  lines.push([m.results.caption]);
  lines.push(m.results.head);
  for (const r of m.results.rows) lines.push(r);
  return '﻿' + lines.map((l) => l.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
function printFor(m) {
  const blankRows = (rows) => rows.map(([f]) => `<tr><th>${esc(f)}</th><td></td></tr>`).join('');
  const results = `<table class="grid"><thead><tr>${m.results.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${Array.from({ length: 12 }, () => `<tr>${m.results.head.map(() => '<td></td>').join('')}</tr>`).join('')}</tbody></table>`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(m.h1)} (print view) | Atlantis NDT</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://atlantisndt.com${methodPath(m)}">
<style>
  *{box-sizing:border-box} body{font:12px/1.35 Arial,Helvetica,sans-serif;color:#111;margin:24px;background:#fff}
  h1{font-size:18px;margin:0 0 4px} .sub{color:#444;margin:0 0 14px}
  h2{font-size:13px;margin:14px 0 4px;text-transform:uppercase;letter-spacing:.03em}
  table{width:100%;border-collapse:collapse;margin-bottom:6px} th,td{border:1px solid #555;padding:5px 6px;text-align:left;vertical-align:top}
  .fields th{width:38%;background:#f2f2f2;font-weight:600} .fields td{height:24px}
  .grid th{background:#f2f2f2;font-size:10.5px} .grid td{height:22px}
  .bar{display:flex;gap:8px;margin-bottom:12px} .bar button,.bar a{font:inherit;padding:6px 10px;border:1px solid #333;background:#fff;color:#111;text-decoration:none;cursor:pointer}
  .foot{margin-top:12px;color:#555;font-size:10px}
  @media print{body{margin:10mm} .bar{display:none} @page{size:A4 landscape;margin:10mm}}
</style></head>
<body>
<div class="bar"><button onclick="window.print()">Print / Save as PDF</button><a href="${methodPath(m)}">Back to the template guide</a><a href="${csvUrl(m)}" download>Download CSV</a></div>
<h1>${esc(m.h1.replace(/ Template$/, ''))}</h1>
<p class="sub">[Company name and logo] · Report no.: __________ · Page ___ of ___</p>
<h2>Report header</h2><table class="fields">${blankRows(HEADER)}</table>
${m.groups.map((g) => `<h2>${esc(g.heading)}</h2><table class="fields">${blankRows(g.rows)}</table>`).join('\n')}
<h2>${esc(m.results.caption.replace(/ \(example values[^)]*\)/, ''))}</h2>${results}
<h2>Remarks</h2><table class="fields"><tr><td style="height:60px"></td></tr></table>
<h2>Personnel and sign-off</h2><table class="fields">${blankRows(SIGNOFF)}</table>
<p class="foot">Free template from atlantisndt.com${methodPath(m)}. Check the fields against your procedure, written practice and client specification before use. Generate these reports automatically in Atlantis NDT Reporting.</p>
</body></html>
`;
}

// ─── assemble ──────────────────────────────────────────────────────────────
const methods = METHODS.map((m) => {
  writeFileSync(join(PRINT, `${m.slug}.html`), printFor(m));
  writeFileSync(join(CSV, `${m.slug}.csv`), csvFor(m));
  const bodyHtml = methodBody(m);
  return {
    slug: m.slug, short: m.short, name: m.name, path: methodPath(m), title: m.title, description: m.description,
    h1: m.h1, lead: m.lead, bodyHtml, faqs: m.faqs, printUrl: printUrl(m), csvUrl: csvUrl(m), subject: subject(m),
    publishedAt: PUBLISHED, words: words(m.lead + bodyHtml),
  };
});
const hubBodyHtml = hubBody();
const templates = {
  hub: { ...HUB, bodyHtml: hubBodyHtml, publishedAt: PUBLISHED, words: words(HUB.lead + hubBodyHtml) },
  methods,
};
writeFileSync(join(DATA, 'report-templates.json'), JSON.stringify(templates, null, 1));

const srcList = (list) => h2('Sources') + ul(list.map(([t, u]) => `<a href="${u}" rel="nofollow noopener">${t}</a>`));
const integrations = {
  hub: { ...INTEGRATIONS_HUB, bodyHtml: INTEGRATIONS_HUB.body + faqHtml(INTEGRATIONS_HUB.faqs) + srcList(INTEGRATION_SOURCES), body: undefined, publishedAt: PUBLISHED },
  pages: INTEGRATIONS.map((i) => {
    const bodyHtml = i.body + faqHtml(i.faqs) + srcList(INTEGRATION_SOURCES);
    return { slug: i.slug, name: i.name, path: i.path, existing: !!i.existing, title: i.title, description: i.description, h1: i.h1, lead: i.lead, bodyHtml, faqs: i.faqs, publishedAt: PUBLISHED, words: words(i.lead + bodyHtml) };
  }),
};
integrations.hub.words = words(integrations.hub.lead + integrations.hub.bodyHtml);
writeFileSync(join(DATA, 'integrations.json'), JSON.stringify(integrations, null, 1));

const dtHtml = DT_REPORTING_BLOCK.html.replace('__FAQ__', DT_REPORTING_BLOCK.faqs.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join(''));
const roiStatic = ROI.method + ROI.example + ROI.sources + faqHtml(ROI.faqs);
const extras = {
  dt: { path: DT_REPORTING_BLOCK.path, bodyHtml: dtHtml, faqs: DT_REPORTING_BLOCK.faqs, words: words(dtHtml) },
  roi: { path: ROI.path, title: ROI.title, description: ROI.description, h1: ROI.h1, lead: ROI.lead, methodHtml: ROI.method, exampleHtml: ROI.example, sourcesHtml: ROI.sources, faqs: ROI.faqs, staticHtml: roiStatic, words: words(ROI.lead + roiStatic) },
};
writeFileSync(join(DATA, 'extras.json'), JSON.stringify(extras, null, 1));

console.log('Report templates:', templates.hub.path, templates.hub.words, 'words');
for (const m of methods) console.log(' ', m.path, m.words, 'words');
console.log('Integrations:', integrations.hub.path, integrations.hub.words, 'words');
for (const i of integrations.pages) console.log(' ', i.path, i.words, 'words');
console.log('DT reporting block', extras.dt.words, 'words; ROI static', extras.roi.words, 'words');
