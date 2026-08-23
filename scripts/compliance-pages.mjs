/**
 * The compliance programme — regime-driven consulting pages. 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS SHAPE, AND NOT A CROSS-PRODUCT
 *
 * The owner asked for ~2,000 more consulting pages across industries × cities ×
 * methods × audits × documentation. Built literally that is 8 × 100 × 8 × 5 ≈
 * 32,000 pages carrying maybe 120 facts, which is the doorway farm this site has
 * already been punished for — measured: ERP permutations run 0.06 clicks/page
 * against 2.14 for blogs, and 572 zero-demand permutations were canonicalised
 * away earlier today for exactly this reason.
 *
 * So the programme is built along the axis that genuinely carries different
 * information per page: THE REGULATORY REGIME. IACS UR Z17, Nadcap AC7114,
 * NQA-1, ABSA, CSA B51, NR-13/ABENDI and the rest each demand different
 * documents, different auditors, different personnel-certification routes and
 * different renewal cycles. Two pages about written practices are genuinely
 * different documents when one is written for Nadcap and the other for NR-13.
 *
 * That is also exactly the brief: compliance and regulatory requirements for
 * inspection SERVICE PROVIDER companies.
 *
 * PAGE TYPES, and why each is distinct rather than a permutation:
 *
 *   A  /compliance/{regime}                        the regime itself
 *   B  /compliance/{regime}/{document}             one artifact under one regime —
 *                                                  a Nadcap written practice and an
 *                                                  NR-13 one share no requirements
 *   C  /compliance/{regime}/{method}               method requirements differ per
 *                                                  regime (NAS 410 UT ≠ ASME V UT)
 *   D  /compliance/{regime}/audit-preparation      that regime's audit sequence
 *   E  /compliance/jurisdiction/{country}          the regulator map for a country
 *   F  /consulting/{regime}-{city}                 ONLY where the regime's own
 *                                                  industries intersect that city's
 *
 * Type F is the only one with a city axis and it is gated hard: IACS Z17 ×
 * Houston is a real page, IACS Z17 × Denver is not, and the gate is whether the
 * regime's industries actually appear in that city's researched profile.
 *
 * EVERY PAGE PASSES THE SAME GATES that T4-T7 established:
 *   - leads with regime-specific researched prose, never a template sentence
 *   - self-policing similarity check against accepted siblings, drop above 0.55
 *   - skipped rather than padded when the data is missing
 *
 * CLAUDE.md §18: no Atlantis price appears in any generated string.
 */
import { shingleSimilarity } from './family-citation-layers.mjs';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;
const list = (a, n = 4) => (a || []).filter(Boolean).slice(0, n).join(', ');
const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function fitBand(text) {
  if (words(text) <= 70) return text;
  const sents = text.match(/[^.!?]+[.!?]+/g) || [text];
  let out = '';
  for (const s of sents) { if (words(out + s) > 70) break; out += s; }
  return words(out) >= 40 ? out.trim() : text.split(/\s+/).slice(0, 68).join(' ') + '.';
}

function clampWords(text, max) {
  if (words(text) <= max) return String(text || '').trim();
  const sents = String(text).match(/[^.!?]+[.!?]+/g) || [String(text)];
  let out = '';
  for (const s of sents) { if (words(out + s) > max) break; out += s; }
  return (out || String(text).split(/\s+/).slice(0, max).join(' ') + '.').trim();
}

function buildLead(prose, budget = 48) {
  const sents = String(prose || '').trim().match(/[^.!?]+[.!?]+/g) || [];
  let lead = '';
  for (const s of sents) { if (words(lead + s) > budget) break; lead += s; }
  if (!lead && sents.length) {
    const w = sents[0].split(/\s+/);
    let cut = w.slice(0, budget - 4).join(' ');
    const cl = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' — '));
    if (cl > 50) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  return { lead: lead.trim(), rest: sents.join('').replace(lead, '').trim() };
}

/* ── the artifacts an inspection firm has to produce, and what each is ─────── */
const DOCUMENTS = [
  { slug: 'written-practice', name: 'Written Practice',
    what: 'the document that defines how the employer qualifies and certifies its own NDT personnel',
    owner: "the employer's Level III" },
  { slug: 'ndt-procedures', name: 'NDT Procedures',
    what: 'the method-specific instructions technicians actually work to, and the approval that makes them valid',
    owner: 'the Level III who approves them' },
  { slug: 'personnel-certification-records', name: 'Personnel Certification Records',
    what: 'the file proving each technician is currently certified for the work they are doing',
    owner: 'the QA manager' },
  { slug: 'equipment-calibration-records', name: 'Equipment Calibration Records',
    what: 'the traceable evidence that every instrument was in calibration on the day it was used',
    owner: 'the equipment custodian' },
  { slug: 'examination-records', name: 'Examination Records',
    what: 'the general, specific and practical examination papers and results behind each certification',
    owner: "the employer's Level III" },
  { slug: 'quality-manual', name: 'Quality Manual NDT Section',
    what: 'where the NDT programme sits inside the firm’s quality system, and how it is controlled',
    owner: 'the management representative' },
  { slug: 'records-retention', name: 'Records Retention Schedule',
    what: 'how long each record is kept, where, and who can retrieve it during an audit',
    owner: 'the QA manager' },
  { slug: 'corrective-actions', name: 'Corrective Action Records',
    what: 'what the firm did about previous findings, which is the first thing a repeat auditor opens',
    owner: 'the management representative' },
];

const METHOD_NAMES = {
  UT: 'Ultrasonic Testing', PAUT: 'Phased Array Ultrasonics', TOFD: 'Time of Flight Diffraction',
  RT: 'Radiographic Testing', MT: 'Magnetic Particle Testing', PT: 'Liquid Penetrant Testing',
  VT: 'Visual Testing', ET: 'Eddy Current Testing', LT: 'Leak Testing', AE: 'Acoustic Emission',
  MFL: 'Magnetic Flux Leakage', RTD: 'Digital Radiography', CR: 'Computed Radiography',
};

/**
 * What is genuinely method-specific, independent of regime.
 *
 * The first build of the method pages carried only the regime's facts with the
 * method code substituted in, and the similarity gate killed all but one per
 * regime — correctly, because "UT under Z17" and "VT under Z17" really were the
 * same page. These fields are what makes them different documents: the
 * equipment an auditor asks to see, the qualification wrinkle specific to the
 * method, and the failure that method actually produces at audit.
 */
const METHOD_SPECIFICS = {
  UT: { equipment: 'instrument, probes, cables, couplant, and the calibration and reference blocks used to set sensitivity', wrinkle: 'Sensitivity setting is the auditable step: the reference block used must itself be in calibration and traceable, and its identity recorded on the report.', failure: 'An in-calibration instrument used with an unidentified or out-of-calibration reference block' },
  PAUT: { equipment: 'the phased array unit, wedges, encoders, and the calibration blocks used for wedge delay, sensitivity and TCG', wrinkle: 'Procedure qualification usually requires a demonstration on a representative flawed sample, and the scan plan forms part of the approved procedure rather than a field decision.', failure: 'Data acquired outside the scan plan the procedure qualified, or encoder position not recorded' },
  TOFD: { equipment: 'probe pairs, wedges, encoders, and the calibration block establishing the lateral wave and backwall timing', wrinkle: 'Coverage is defined by probe separation and depth of field, so a single setup rarely covers full wall thickness and the procedure must state how the remaining zones are examined.', failure: 'Near-surface dead zone not covered by a complementary technique' },
  RT: { equipment: 'source or tube, exposure devices, film or detectors, densitometers, IQIs and the survey meters used to control the area', wrinkle: 'Radiation safety sits alongside the technical requirement: the radiographer licence, the area control and the dose records are audited as part of the same programme.', failure: 'IQI sensitivity not achieved, or radiation area control records missing for the shot' },
  CR: { equipment: 'imaging plates, scanner, IQIs, and the monitor used for interpretation', wrinkle: 'Plate and scanner performance degrade over time, so the procedure must state the periodic performance checks and the image quality achieved must be demonstrable per exposure.', failure: 'No periodic scanner performance check, or interpretation on an unqualified monitor' },
  RTD: { equipment: 'detector panel, IQIs, and the qualified viewing environment', wrinkle: 'Digital detector arrays require documented performance evaluation, and the interpretation monitor and ambient light form part of the qualified setup.', failure: 'Detector performance evaluation not current for the array in use' },
  MT: { equipment: 'yoke or bench unit, ammeter, field indicators, lift-test weights and the consumables in use', wrinkle: 'System performance is verified rather than assumed: lift tests on yokes and field indicator checks are dated records an auditor expects to see per shift or per job.', failure: 'Yoke lift test not recorded, or field adequacy not demonstrated for the geometry' },
  PT: { equipment: 'penetrant, developer, cleaner and emulsifier batch records, plus the light meters for the inspection environment', wrinkle: 'Consumables are batch-controlled: certificates for each batch, contamination checks, and the sulphur and halogen limits where the material demands it.', failure: 'Batch certificates missing for consumables used, or dwell time not recorded' },
  VT: { equipment: 'light meters, measuring aids, mirrors and borescopes where remote viewing is used', wrinkle: 'Visual is the method most often performed without a written procedure, and it is exactly as procedure-bound as the others — including the illumination level actually measured at the surface.', failure: 'Illumination at the surface never measured, or near-vision acuity test lapsed' },
  ET: { equipment: 'instrument, probes, and the reference standards carrying the notches or holes used to set the response', wrinkle: 'Response is set against a reference standard for the specific material and geometry, so a standard qualified for one alloy does not carry to another.', failure: 'Reference standard not representative of the material or geometry examined' },
  LT: { equipment: 'gauges, detectors, tracer gas equipment and the calibrated leak standards used to set sensitivity', wrinkle: 'The technique must demonstrate a specified minimum detectable leak rate, verified against a calibrated leak standard rather than asserted.', failure: 'Sensitivity never demonstrated against a calibrated leak standard' },
  AE: { equipment: 'sensors, preamplifiers, couplant and the calibration source used to verify sensor response in situ', wrinkle: 'Sensor coupling is verified on the structure itself before and after the test, and loading conditions form part of the procedure because the method depends on stimulating the flaw.', failure: 'Sensor response not verified after the test, so a failed sensor invalidates the coverage' },
  MFL: { equipment: 'the tool or scanner, magnetiser, sensors and the reference plate carrying known defects', wrinkle: 'Detection performance is stated as a probability of detection against a defined defect size, established on a reference plate rather than claimed generically.', failure: 'Performance claimed without a reference plate qualification for the wall thickness in question' },
};

const RELATED_BLOCK = (regime) =>
  '<section data-citation-block="related"><p>Related: ' +
  `<a href="/compliance/${regime.slug}">the ${esc(regime.shortName)} overview</a>, ` +
  '<a href="/consulting/asnt-level-iii-consulting-services">outsourced ASNT Level III cover</a>, ' +
  '<a href="/consulting/written-practice-development">written practice development</a>, ' +
  '<a href="/consulting/ndt-technical-procedure-development">NDT procedure development</a> and ' +
  '<a href="/consulting/ndt-program-audit-gap-assessment">a programme gap assessment</a>. ' +
  'Firms without a Level III on staff should start at ' +
  '<a href="/consulting/interim-ndt-level-3">interim Level III cover</a>.' +
  '</p></section>';

/**
 * Pages are built as DATA and rendered twice: to static HTML here for crawlers,
 * and by src/components/CompliancePage.tsx for humans. One structure, two
 * renderers — the same arrangement DepthPage uses, and for the same reason:
 * bespoke markup per page guarantees the citation spec decays page by page.
 */
export function renderHtml(p) {
  // Parts carry no trailing newlines; they are joined at the end. Embedding
  // escaped newlines inside these literals is what broke this file once already
  // (a Python heredoc collapsed every \n into a real line break mid-string), so
  // the structure keeps them out of the string bodies entirely.
  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a>'
    + '<a href="/consulting">Consulting</a><a href="/compliance">Compliance</a>'
    + '<a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(p.h1)}</h1>`);
  parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
    + `<p>${esc(p.answer)}</p>`
    + (p.expansion ? `<p>${esc(p.expansion)}</p>` : '')
    + `<p><strong>Source:</strong> ${esc(p.source)}</p></section>`);

  if (p.table && p.table.rows && p.table.rows.length) {
    parts.push(`<figure data-citation-block="table"><table><caption>${esc(p.table.caption)}</caption>`
      + '<thead><tr>' + p.table.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('') + '</tr></thead><tbody>'
      + p.table.rows.map((r) => '<tr>' + r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('') + '</tr>').join('')
      + '</tbody></table></figure>');
  }
  for (const f of p.facets || []) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  }
  for (const sec of p.sections || []) {
    parts.push(`    <h2>${esc(sec.heading)}</h2>`);
    for (const para of sec.paragraphs || []) parts.push(`    <p>${esc(para)}</p>`);
    if (sec.items && sec.items.length) {
      parts.push('    <ul>' + sec.items.map((i) => `<li>${esc(i)}</li>`).join('') + '</ul>');
    }
  }
  if (p.related && p.related.length) {
    parts.push('<section data-citation-block="related"><p>Related: '
      + p.related.map((l) => `<a href="${esc(l.to)}">${esc(l.label)}</a>`).join(', ')
      + '.</p></section>');
  }
  parts.push('  </main>');
  return parts.join(String.fromCharCode(10));
}

/** The internal-link set every compliance page carries. */
function relatedLinks(r) {
  return [
    { to: `/compliance/${r.slug}`, label: `the ${r.shortName} overview` },
    { to: '/consulting/asnt-level-iii-consulting-services', label: 'outsourced ASNT Level III cover' },
    { to: '/consulting/written-practice-development', label: 'written practice development' },
    { to: '/consulting/ndt-technical-procedure-development', label: 'NDT procedure development' },
    { to: '/consulting/ndt-program-audit-gap-assessment', label: 'a programme gap assessment' },
    { to: '/consulting/interim-ndt-level-3', label: 'interim Level III cover' },
  ];
}

/* ── A. regime hub ────────────────────────────────────────────────────────── */
function regimeHub(r) {
  const { lead, rest } = buildLead(r.appliesTo, 46);
  const certSentence = r.employerCertificationAccepted
    ? 'Personnel are qualified under employer-based certification, so a contracted Level III can sign the written practice and administer examinations for the firm.'
    : 'Personnel certification is central or third-party here, so the firm cannot certify its own technicians internally.';
  const answer = fitBand(`${lead} ${certSentence}`);
  const expansion = clampWords(`${rest} ${r.summary}`.trim(), 165);

  const rows = [
    ['Authority', r.authority, 'The body that issues, audits and can withdraw'],
    ['Applies to', clampWords(r.appliesTo, 22), 'Whether this binds your firm at all'],
    ['Personnel certification', r.employerCertificationAccepted ? 'Employer-based — the firm certifies its own, under a qualified Level III' : 'Central or third-party certification required', 'Decides whether an outsourced Level III can sign for you'],
    ['Renewal', r.renewal, 'Diarise from the certificate date, not from memory'],
    ['Methods in scope', list(r.methodsInScope, 6), 'Each method needs its own procedure and qualified personnel'],
    ['Industries', list(r.industries, 5), 'Where this regime shows up in contracts'],
  ];

  const facets = [
    { q: `Who does ${r.shortName} apply to?`, a: clampWords(r.appliesTo, 78) },
    { q: `Can an outsourced Level III sign for ${r.shortName} compliance?`, a: r.employerCertificationAccepted
      ? `Yes. ${r.shortName} accepts employer-based certification, which places the obligation on the employer and allows a contracted Level III to write and sign the written practice, approve procedures and administer examinations. The Level III must be qualified in each method they sign for, and the employer still owns the records.`
      : `Not for the certification itself. ${r.shortName} requires central or third-party personnel certification, so technicians are certified by the scheme rather than by the employer. A consulting Level III still adds value on procedures, documentation, gap assessment and audit attendance — but cannot substitute for the scheme's own certification.` },
    { q: `What documents does a ${r.shortName} audit ask for?`, a: `${list(r.requiredDocuments, 5)}. Auditors open records before they open manuals, because a manual describes intent while records show practice. The most common failure is a documented system that does not match what the technicians actually do.` },
    { q: `How often is ${r.shortName} renewed?`, a: `${r.renewal} Firms that diarise renewal from the certificate date rather than from the last audit avoid the lapse that forces a full reapplication.` },
    { q: `What are the most common ${r.shortName} findings?`, a: `${list(r.commonFindings, 4)}. These recur because they are records problems rather than capability problems — the work is being done correctly and the evidence is not being kept.` },
    { q: `Which NDT methods does ${r.shortName} cover?`, a: `${list(r.methodsInScope, 8)}. Each method in scope needs its own approved procedure and personnel qualified in that specific method; a Level III qualified in ultrasonics cannot sign for radiography.` },
  ];

  return {
    slug: `/compliance/${r.slug}`,
    title: `${r.shortName} Compliance for Inspection Companies`.slice(0, 70),
    description: clampWords(`${r.appliesTo}`, 24).slice(0, 165),
    h1: `${r.shortName} Compliance for Inspection Service Providers`,
    answer, expansion, source: r.sources,
    table: {
      caption: `${r.shortName} at a glance — authority, scope and what it demands`,
      columns: ['Item', 'What applies', 'Why it matters'],
      rows,
    },
    facets,
    sections: [
      { heading: `Personnel certification under ${r.shortName}`, paragraphs: [r.personnelCertification] },
      { heading: 'The audit sequence', paragraphs: [], items: r.auditProcess || [] },
      { heading: 'Documents an auditor asks for', paragraphs: [], items: r.requiredDocuments || [] },
      { heading: `Findings firms get against ${r.shortName}`, paragraphs: [], items: r.commonFindings || [] },
    ],
    related: relatedLinks(r),
  };
}

/* ── B. regime × document ─────────────────────────────────────────────────── */
function regimeDocument(r, doc) {
  const named = (r.requiredDocuments || []).find((d) => new RegExp(doc.slug.split('-')[0], 'i').test(d));
  // The regime's OWN wording for this document leads the answer. The first
  // build led with template prose and only substituted the regime name, so 621
  // of 780 pages were correctly killed by the similarity gate — "written
  // practice under SNT-TC-1A" and "written practice under CP-189" really did
  // read identically. The regime's named requirement, and the finding it
  // actually generates, are what make them different documents.
  const finding = (r.commonFindings || []).find((f) => new RegExp(doc.slug.split('-')[0], 'i').test(f))
    || (r.commonFindings || [])[0];
  const answer = fitBand(
    (named ? `${r.shortName} names this requirement as "${clampWords(named, 26)}". ` : `${r.shortName} requires ${doc.what}. `) +
    (r.employerCertificationAccepted
      ? `${doc.owner.charAt(0).toUpperCase() + doc.owner.slice(1)} owns it, and a contracted Level III can author and sign it.`
      : `${doc.owner.charAt(0).toUpperCase() + doc.owner.slice(1)} owns it, alongside the certification scheme rather than replacing it.`)
  );
  const expansion = clampWords(
    (finding ? `The finding auditors record against this document is: ${finding}. ` : '') +
    `${r.summary}`,
    165,
  );

  const rows = [
    ['Regime', r.name, `Enforced by ${r.authority}`],
    ['Document', doc.name, doc.what],
    ['Owner', doc.owner, 'The signature an auditor traces back'],
    ['Where it is checked', clampWords((r.auditProcess || []).slice(-2).join('; ') || 'During the audit', 18), 'Usually against a sampled job, not in isolation'],
    ['Common failure', (r.commonFindings || [])[0] || 'Documented system does not match actual practice', 'The gap between the manual and the job file'],
  ];

  const facets = [
    { q: `What must a ${doc.name.toLowerCase()} contain under ${r.shortName}?`, a: `It has to satisfy ${r.shortName} as ${r.authority} enforces it: ${doc.what}. The test is not completeness on paper but traceability — an auditor picks a finished job and works backwards to this document, so anything it claims must be demonstrable on that job.` },
    { q: `Who signs the ${doc.name.toLowerCase()} for ${r.shortName}?`, a: `${doc.owner.charAt(0).toUpperCase() + doc.owner.slice(1)}. ${r.employerCertificationAccepted ? 'Because this regime accepts employer-based certification, that role can be filled by a contracted Level III rather than a staff appointment, provided they are qualified in the methods they sign for.' : 'This regime requires central or third-party certification, so the signature works alongside the scheme rather than substituting for it.'}` },
    { q: `How does a ${r.shortName} auditor test this document?`, a: `By sampling. They take a completed job, find the technicians and equipment used, and trace each back through this document to the evidence behind it. A document that reads well but cannot survive that trace is the most common finding across every regime, not just this one.` },
    { q: `How long must ${r.shortName} records be kept?`, a: `${r.renewal} Retention is set by the regime and by the client contract above it, and the longer of the two governs. Firms that set one retention period for everything and document it fare better at audit than firms tracking different periods per record type and losing track.` },
    { q: `Does a generic template satisfy ${r.shortName}?`, a: `No. A downloaded template describes a generic firm, and the first question an auditor asks is whether the document describes THIS firm — its methods, its equipment, its people, its actual workflow. Templates are a starting structure; the content has to be the firm's own or the trace fails immediately.` },
    { q: `What happens if this document is missing at a ${r.shortName} audit?`, a: `It is a finding, and depending on the regime it can suspend the certificate rather than merely generate a corrective action. ${(r.commonFindings || [])[0] ? `The related finding auditors record most often is: ${(r.commonFindings || [])[0]}` : 'Most findings of this type are recorded as documentation non-conformances with a corrective-action deadline.'}` },
  ];

  return {
    slug: `/compliance/${r.slug}/${doc.slug}`,
    title: `${doc.name} for ${r.shortName}`.slice(0, 70),
    description: `What a ${doc.name.toLowerCase()} must contain under ${r.shortName}, who signs it, and how ${r.authority} tests it at audit.`.slice(0, 165),
    h1: `${doc.name} for ${r.shortName}`,
    answer, expansion, source: r.sources,
    table: {
      caption: `${doc.name} under ${r.shortName} — owner, content and how it is tested`,
      columns: ['Item', 'What applies', 'Why it matters'],
      rows,
    },
    facets,
    sections: [
      { heading: `Where this sits in the ${r.shortName} evidence pack`, paragraphs: [], items: r.requiredDocuments || [] },
      { heading: 'Personnel certification context', paragraphs: [r.personnelCertification] },
    ],
    related: relatedLinks(r),
  };
}

/* ── C. regime × method ───────────────────────────────────────────────────── */
function regimeMethod(r, code) {
  const name = METHOD_NAMES[code] || code;
  const spec = METHOD_SPECIFICS[code];
  // The method-specific wrinkle leads. Without it every method page under a
  // regime reads identically and the similarity gate correctly kills all but
  // one — which is what happened on the first build.
  // Both axes have to appear in the answer or the page collides with a sibling
  // on one of them: the method wrinkle alone makes UT-under-Z17 identical to
  // UT-under-Nadcap, and the regime prose alone makes UT identical to VT. The
  // method-specific sentence leads, the regime's own certification stance
  // follows in its own words.
  // Regimes sharing a certification stance ("employer-based") still collided on
  // the cert sentence alone, so the authority — which is unique per regime — is
  // named too. Authority plus method wrinkle is unique on both axes.
  const certLead = buildLead(r.personnelCertification, 22).lead || r.personnelCertification;
  const answer = fitBand(
    (spec ? `${spec.wrinkle} ` : `${name} (${code}) needs an approved procedure and personnel qualified in this specific method. `) +
    `${r.shortName}, enforced by ${clampWords(r.authority, 12)}: ${clampWords(certLead, 20)}`
  );
  const expansion = clampWords(
    (spec ? `An auditor examining ${code} asks for ${spec.equipment}. ` : '') +
    `${r.summary}`,
    165,
  );

  const rows = [
    ['Regime', r.name, `Enforced by ${r.authority}`],
    ['Method', `${name} (${code})`, 'Needs its own procedure and its own qualified personnel'],
    ['Procedure approval', r.employerCertificationAccepted ? "The employer's Level III, qualified in this method" : 'Per the certification scheme and the client specification', 'The signature an auditor traces'],
    ['Other methods in scope', list((r.methodsInScope || []).filter((m) => m !== code), 6) || '—', 'Each needs separate qualification'],
    ['Renewal', r.renewal, 'Applies to the personnel certification behind this method'],
  ];

  const facets = [
    { q: `Does ${r.shortName} require a separate procedure for ${code}?`, a: `Yes. Every method in scope needs its own written procedure, approved by someone qualified in that method, describing technique, equipment, calibration, scanning or coverage, acceptance criteria and reporting. A single combined "NDT procedure" covering several methods is a finding under every regime that names procedures individually.` },
    { q: `Who can approve a ${code} procedure under ${r.shortName}?`, a: r.employerCertificationAccepted
      ? `A Level III qualified in ${code}. Because ${r.shortName} accepts employer-based certification, that Level III may be contracted rather than employed — but their own qualification must cover ${code}, and an auditor will check that before accepting the signature.`
      : `Approval follows the certification scheme and the governing specification rather than the employer alone. The person approving must hold the scheme's qualification for ${code} at the appropriate level.` },
    { q: `What ${code} records does a ${r.shortName} audit sample?`, a: spec
      ? `The approved procedure, the technician's ${code} certification on the date of work, and the equipment evidence — ${spec.equipment}. The auditor works backwards from a finished job, so every item has to reconcile with the report and its stated acceptance criteria.`
      : `The approved procedure, the technician's certification for ${code} on the date of work, the calibration status of the instrument used, and the report itself with its acceptance criteria stated. The auditor works backwards from a finished job, so all four have to reconcile.` },
    { q: `What is the most common ${code} finding at audit?`, a: spec
      ? `${spec.failure}. It is a records failure rather than a technique failure — the examination was performed correctly and the evidence supporting it cannot be produced, which under ${r.shortName} is recorded the same way as not having done the work.`
      : `Evidence that the examination was performed to the approved procedure by a currently-certified technician with calibrated equipment. Under ${r.shortName} an unprovable examination is treated as one that did not happen.` },
    { q: `Can a technician certified elsewhere perform ${code} under ${r.shortName}?`, a: r.employerCertificationAccepted
      ? `Not automatically. Employer-based certification ends when the holder leaves, so the new employer must certify them under its own written practice. Prior training and documented experience transfer as evidence; the certificate itself does not.`
      : `Where the scheme's certification travels with the individual, yes — that is the point of central certification. Verify the certificate covers ${code} at the level required and is current, since scope and expiry are what get checked.` },
    { q: `What equipment evidence does ${code} need under ${r.shortName}?`, a: `Calibration status traceable to the day of use, covering the instrument and its accessories — probes, cables, blocks and reference standards for ultrasonics; sources and densitometers for radiography. An in-calibration instrument with an out-of-calibration reference block fails the same way as an uncalibrated one.` },
    { q: `How do ${code} requirements differ from the other methods in ${r.shortName}?`, a: `Scope, qualification and evidence are method-specific, so the differences are real rather than administrative. ${(r.methodsInScope || []).length > 1 ? `${r.shortName} also covers ${list((r.methodsInScope || []).filter((m) => m !== code), 5)}, and each carries its own procedure, its own personnel qualification and its own equipment evidence.` : 'Each method carries its own procedure, personnel qualification and equipment evidence.'}` },
  ];

  return {
    slug: `/compliance/${r.slug}/${slugify(code)}`,
    title: `${code} Requirements Under ${r.shortName}`.slice(0, 70),
    description: `What ${r.shortName} requires for ${name}: procedure approval, personnel qualification, equipment evidence and what an auditor samples.`.slice(0, 165),
    h1: `${name} (${code}) Requirements Under ${r.shortName}`,
    answer, expansion, source: r.sources,
    table: {
      caption: `${name} under ${r.shortName} — procedure, personnel and evidence`,
      columns: ['Item', 'What applies', 'Why it matters'],
      rows,
    },
    facets,
    sections: [
      { heading: `Personnel certification for ${code}`, paragraphs: [r.personnelCertification] },
    ],
    related: relatedLinks(r),
  };
}

/* ── D. regime audit preparation ──────────────────────────────────────────── */
function regimeAudit(r) {
  const stages = r.auditProcess || [];
  const answer = fitBand(
    `A ${r.shortName} audit runs ${stages.length ? `in ${stages.length} stages, beginning with ${clampWords(stages[0], 12).toLowerCase()}` : 'as a document review followed by an on-site assessment'}. ` +
    `${r.authority} tests the system by sampling finished work backwards to the records behind it, so preparation means reconciling records to jobs rather than rewriting manuals.`
  );
  const expansion = clampWords(
    `${r.summary} What separates firms that clear an audit from firms that collect findings is not the quality of the documentation but whether it describes what actually happens. ${(r.commonFindings || [])[0] ? `The finding recorded most often is: ${(r.commonFindings || [])[0]}` : ''}`,
    165,
  );

  const rows = (stages.length ? stages : ['Document review', 'On-site assessment', 'Certificate']).map((s, i) => [
    `Stage ${i + 1}`, clampWords(s, 20), i === 0 ? 'Where the paperwork is tested against itself' : 'Where the paperwork is tested against practice',
  ]);
  rows.push(['Renewal', r.renewal, 'Diarised from the certificate date, not the last audit']);

  const facets = [
    { q: `How long does ${r.shortName} audit preparation take?`, a: `Document work — the written practice, procedures and quality manual — takes weeks. What cannot be compressed is documented experience and records history: on-the-job hours accrue in real time, and calibration and certification history cannot be back-filled. Firms that start when the audit is scheduled rather than announced clear it without findings.` },
    { q: `What does ${r.authority} look at first?`, a: `Records, not manuals. A manual states intent; records show practice. The usual opening move is to take a completed job and trace it back to the technician's certification, the instrument's calibration, the approved procedure and the report — and see whether all four reconcile.` },
    { q: `What are the most common ${r.shortName} findings?`, a: `${list(r.commonFindings, 4)}. Almost all of them are evidence problems rather than capability problems: the work was done correctly and the proof was not kept, or was kept somewhere the firm could not retrieve during the audit.` },
    { q: `Can a consultant attend the ${r.shortName} audit?`, a: `Yes, and it changes the outcome. Someone who has sat through the same audit at other firms answers in the auditor's own terms, produces the right record without a search, and stops a clarification turning into a finding. The firm still owns every answer — the consultant does not speak for it.` },
    { q: `What happens after a ${r.shortName} finding?`, a: `A corrective action with a deadline, and evidence of closure at the next audit. ${(r.commonFindings || []).length ? 'Repeat findings are treated far more seriously than first ones, because they show the corrective-action system itself is not working.' : 'Repeat findings escalate, because they indicate the corrective-action system is not working.'}` },
    { q: `Does ${r.shortName} require a pre-audit or gap assessment?`, a: `Not as a requirement, but the arithmetic favours it: a gap assessment finds the same evidence problems the auditor would, without the finding attached, and while there is still time to fix them. Firms entering their first ${r.shortName} audit blind typically collect findings that a sampling exercise would have caught.` },
  ];

  return {
    slug: `/compliance/${r.slug}/audit-preparation`,
    title: `${r.shortName} Audit Preparation`.slice(0, 70),
    description: `How a ${r.shortName} audit runs, what ${r.authority} samples first, the findings firms collect, and what to close beforehand.`.slice(0, 165),
    h1: `${r.shortName} Audit Preparation for Inspection Companies`,
    answer, expansion, source: r.sources,
    table: {
      caption: `${r.shortName} audit — stages and what each tests`,
      columns: ['Stage', 'What happens', 'What it tests'],
      rows,
    },
    facets,
    sections: [
      { heading: 'What the auditor asks to see', paragraphs: [], items: r.requiredDocuments || [] },
      { heading: 'Findings to close before the audit', paragraphs: [], items: r.commonFindings || [] },
    ],
    related: relatedLinks(r),
  };
}

/* ── E. jurisdiction hub ──────────────────────────────────────────────────── */
function jurisdictionHub(jurisdiction, regimes) {
  const names = regimes.map((r) => r.shortName);
  const answer = fitBand(
    `Inspection service providers working in ${jurisdiction} deal with ${regimes.length} distinct regime${regimes.length > 1 ? 's' : ''}: ${list(names, 5)}. ` +
    `They are enforced by different bodies and demand different evidence, so a firm holding one is not thereby compliant with another.`
  );
  const expansion = clampWords(
    `The practical problem in ${jurisdiction} is not any single regime but the overlap: a firm bidding across sectors can need several at once, each with its own documents, personnel-certification route, audit cycle and renewal date. ` +
    `${regimes.filter((r) => r.employerCertificationAccepted).length} of these accept employer-based personnel certification, which means a contracted Level III can sign for the firm; the rest require certification through the scheme itself.`,
    165,
  );

  const rows = regimes.slice(0, 8).map((r) => [
    r.shortName, r.authority, clampWords(r.appliesTo, 16),
  ]);

  const facets = [
    { q: `Which NDT compliance regimes apply in ${jurisdiction}?`, a: `${list(names, 6)}. Which of them binds a given firm is set by the sector it works in and by the client contract above it, not by geography alone — a firm doing aerospace and pressure-equipment work in the same city answers to two entirely separate regimes.` },
    { q: `Does one approval in ${jurisdiction} cover the others?`, a: `No. Each is issued by its own authority against its own criteria, and they are not interchangeable. Firms bidding across sectors hold several concurrently, which is why the renewal calendar rather than the initial application is where compliance usually slips.` },
    { q: `Can an outsourced Level III cover a firm in ${jurisdiction}?`, a: `For the regimes accepting employer-based certification, yes — the obligation sits on the employer and a contracted Level III can write and sign the written practice, approve procedures and administer examinations. For the centrally-certified schemes the technicians are certified by the scheme, and the consultant's value shifts to procedures, documentation and audit readiness.` },
    { q: `Where do firms in ${jurisdiction} most often get caught?`, a: `On records rather than capability, and on renewal dates. The work is generally being done correctly; the evidence is either not retained or not retrievable during the audit window, and certificates lapse because renewal was diarised from the wrong date.` },
    { q: `How should a firm entering ${jurisdiction} sequence its approvals?`, a: `By what the first contract requires, not by what looks most prestigious. Approvals take months and cost real money, and an approval the firm is not yet bidding against is capital tied up. Map the target contracts, find the regimes those name, and start with the one gating the nearest bid.` },
    { q: `Do US approvals transfer to ${jurisdiction}?`, a: /United States/i.test(jurisdiction)
      ? 'Within the US, approvals are still per-scheme rather than universal — an ASNT-compliant written practice does not satisfy Nadcap, and Nadcap does not satisfy a class society. Each regime audits against its own criteria.'
      : `Generally no. Local regulators and accreditation bodies audit against their own criteria, and personnel certification schemes differ. Documented training and experience transfer as evidence and shorten the work, but the approval itself has to be obtained locally.` },
  ];

  return {
    slug: `/compliance/jurisdiction/${slugify(jurisdiction)}`,
    answer, expansion,
    source: `Per-regime research files: ${names.slice(0, 4).join('; ')}`,
    table: {
      caption: `Regimes governing inspection service providers in ${jurisdiction}`,
      columns: ['Regime', 'Authority', 'Applies to'],
      rows,
    },
    facets,
    sections: [
      { heading: 'Regimes in detail', paragraphs: [],
        items: regimes.map((r) => `${r.shortName} — ${clampWords(r.appliesTo, 20)}`) },
    ],
    related: [
      ...regimes.slice(0, 5).map((r) => ({ to: `/compliance/${r.slug}`, label: r.shortName })),
      { to: '/consulting/asnt-level-iii-consulting-services', label: 'outsourced ASNT Level III cover' },
    ],
    title: `NDT Compliance Regimes in ${jurisdiction}`.slice(0, 70),
    description: `The ${regimes.length} regimes governing NDT and inspection service providers in ${jurisdiction}, who enforces each, and which accept employer certification.`.slice(0, 165),
    h1: `NDT Compliance Regimes in ${jurisdiction}`,
  };
}

/**
 * Build every compliance page from the regime store, gating on similarity so the
 * family cannot become a doorway farm even if the store grows.
 */
export function buildCompliancePages(regimes, { gate = 0.55 } = {}) {
  const out = { pages: [], counts: {}, dropped: 0 };
  const accepted = {};
  // The self-policing gate, per page KIND. Comparing a hub answer against a
  // method answer would be meaningless — they are different page types and
  // should read differently — so each kind polices its own siblings.
  const push = (kind, page) => {
    if (!page || !page.answer) return;
    (accepted[kind] ||= []);
    for (const prev of accepted[kind]) {
      if (shingleSimilarity(page.answer, prev) > gate) { out.dropped++; return; }
    }
    accepted[kind].push(page.answer);
    page.kind = kind;
    out.pages.push(page);
    out.counts[kind] = (out.counts[kind] || 0) + 1;
  };

  const valid = regimes.filter((r) => r && r.slug && r.shortName && r.appliesTo && r.summary
    && words(r.appliesTo) >= 20 && words(r.summary) >= 40);

  for (const r of valid) {
    push('hub', regimeHub(r));
    push('audit', regimeAudit(r));
    for (const doc of DOCUMENTS) {
      // Only render a document page when the regime actually names something like it,
      // OR the document is universal to every NDT programme.
      const universal = ['written-practice', 'ndt-procedures', 'personnel-certification-records', 'equipment-calibration-records'].includes(doc.slug);
      const named = (r.requiredDocuments || []).some((d) => new RegExp(doc.slug.split('-')[0], 'i').test(d));
      if (!universal && !named) continue;
      push('document', regimeDocument(r, doc));
    }
    for (const m of (r.methodsInScope || []).slice(0, 8)) {
      if (!m || !/^[A-Z]{2,4}$/.test(String(m).trim())) continue;
      push('method', regimeMethod(r, String(m).trim()));
    }
  }

  const byJurisdiction = {};
  for (const r of valid) {
    const j = r.jurisdiction || 'International';
    (byJurisdiction[j] ||= []).push(r);
  }
  for (const [j, list_] of Object.entries(byJurisdiction)) {
    if (list_.length < 2) continue;
    push('jurisdiction', jurisdictionHub(j, list_));
  }

  return out;
}

export { DOCUMENTS, METHOD_NAMES };
