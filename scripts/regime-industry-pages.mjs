/**
 * Compliance regime × industry — a new axis with real data behind it. 2026-08-26.
 * ─────────────────────────────────────────────────────────────────────────────
 * The 58-regime research store carries an `industries` array per regime, listing
 * the sectors that regime genuinely governs. That array is the gate: a page
 * exists only where the REGIME ITSELF names the industry, so Nadcap × Aerospace
 * is generated and Nadcap × Rail is not. The data decides the matrix, exactly as
 * it does for the consulting and training industry×city families.
 *
 * WHY THIS AXIS IS NOT A REPEAT of /compliance/{regime}
 * The regime hub answers "what does this regime require". These answer "what
 * does complying with it cost a firm in THIS sector" — which methods dominate,
 * which of the regime's documents that sector's auditors actually open first,
 * and the failure mode specific to the pairing. An aerospace firm meeting
 * Nadcap and a rail shop meeting AAR M-1003 share the words "quality system"
 * and nothing else.
 *
 * THE THREE-PART ANSWER, proven on the -for- and axis×city passes: a COMBINATION
 * element plus one element per axis overlaps a sibling by about a third rather
 * than a half, which clears the 0.55 gate honestly instead of by loosening it.
 * Two-part answers on this shape collapse — that is what capped the first
 * report-validation build at 14 pages of 465 attempted.
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
function clampWords(t, max) {
  if (words(t) <= max) return String(t || '').trim();
  const s = String(t).match(/[^.!?]+[.!?]+/g) || [String(t)];
  let o = '';
  for (const x of s) { if (words(o + x) > max) break; o += x; }
  return (o || String(t).split(/\s+/).slice(0, max).join(' ') + '.').trim();
}

/**
 * What each sector brings to a compliance engagement, independent of regime.
 * This is the axis that separates two pages under the SAME regime.
 */
const SECTOR_ANGLE = {
  aerospace: { match: /aerospace|aviation|space|defen[cs]e/i, label: 'Aerospace',
    pressure: 'the prime contractor flows its own requirements down on top of the regime, so the firm is audited twice against overlapping criteria',
    record: 'technique sheets controlled per part number' },
  nuclear: { match: /nuclear/i, label: 'Nuclear',
    pressure: 'records outlive the people who wrote them, and a gap found a decade later cannot be reconstructed',
    record: 'the commercial-grade dedication basis and the retention schedule behind it' },
  refining: { match: /refin|petrochem|petroleum|chemical|oil|gas/i, label: 'Refining and petrochemical',
    pressure: 'turnaround work is bid months ahead and audited at the gate, so a lapse found at mobilisation removes the technician that day',
    record: 'the examination records the owner samples before the crew goes through the gate' },
  pipeline: { match: /pipeline|midstream|transmission/i, label: 'Pipeline and midstream',
    pressure: 'the record resurfaces years later during an integrity dig, long after everyone involved has moved on',
    record: 'girth-weld acceptance traceable to the technician and the procedure in force that day' },
  maritime: { match: /marine|maritime|ship|offshore|port/i, label: 'Maritime and offshore',
    pressure: 'approval names one class society and does not transfer, so a yard working two flags carries two audit cycles',
    record: 'the operator qualification file the surveyor opens first' },
  power: { match: /power|utilit|electric|generation|energy/i, label: 'Power generation',
    pressure: 'outage windows are fixed years ahead and priced in lost generation per day',
    record: 'personnel currency planned against the outage calendar rather than the certificate anniversary' },
  manufacturing: { match: /manufactur|fabricat|steel|metal|construct|welding/i, label: 'Manufacturing and fabrication',
    pressure: 'the gap between the written procedure and what the shop floor actually does is where findings come from',
    record: 'acceptance criteria mapped to the governing construction code, per joint' },
  rail: { match: /rail|transport|tank car/i, label: 'Rail',
    pressure: 'certification gates the ability to do the work at all, so a lapse stops production rather than generating a finding',
    record: 'the NDT section of the quality manual the auditor samples against real jobs' },
  labs: { match: /laborator|calibration|testing|metrolog|inspection compan|service/i, label: 'Inspection and testing services',
    pressure: 'the firm is audited by every client as well as by the scheme, and each client samples differently',
    record: 'the traceability chain from a result back to the instrument and the standard behind it' },
};

function sectorFor(industry) {
  for (const [key, s] of Object.entries(SECTOR_ANGLE)) if (s.match.test(industry)) return { key, ...s };
  return null;
}

function render(regime, sec) {
  const docs = regime.requiredDocuments || [];
  const findings = regime.commonFindings || [];
  const methods = regime.methodsInScope || [];

  // COMBINATION — what this regime demands of this sector specifically.
  const combo = `For ${sec.label.toLowerCase()} firms, ${regime.shortName} compliance turns on ${sec.record}.`;
  // REGIME — its own enforcement character.
  const regimePart = `${regime.shortName} is enforced by ${clampWords(String(regime.authority || '').split(/[,(—–]/)[0], 10)}${regime.employerCertificationAccepted ? ', and accepts employer-based personnel certification' : ', which certifies personnel centrally rather than through the employer'}.`;
  // SECTOR — the commercial pressure that makes it hard here.
  const sectorPart = `In this sector ${sec.pressure}.`;

  const answer = fitBand(`${combo} ${regimePart} ${sectorPart}`.replace(/\s+/g, ' ').trim());

  let expansion = clampWords(regime.summary, 90);
  if (findings.length) expansion = `${expansion} The finding recorded most often is: ${clampWords(findings[0], 24)}`;
  expansion = clampWords(expansion, 165);

  const rows = [
    ['Sector', sec.label, sec.pressure.charAt(0).toUpperCase() + sec.pressure.slice(1)],
    ['Regime', regime.name, `Enforced by ${clampWords(String(regime.authority || '').split(/[,(—–]/)[0], 12)}`],
    ['Personnel basis', regime.employerCertificationAccepted ? 'Employer-based — a contracted Level III can sign the written practice' : 'Central or third-party certification through the scheme', 'Decides whether outsourced cover can carry the signature'],
    ['Record this sector is judged on', sec.record.charAt(0).toUpperCase() + sec.record.slice(1), 'What the auditor opens before anything else'],
  ];
  if (docs.length) rows.push(['Documents demanded', list(docs, 5), 'Each has to survive being traced from a finished job']);
  if (methods.length) rows.push(['Methods in scope', list(methods, 6), 'Each needs its own procedure and qualified personnel']);
  rows.push(['Renewal', clampWords(regime.renewal, 18), 'Diarised from the certificate date, not the last audit']);

  const facets = [
    { q: `What does ${regime.shortName} require of a ${sec.label.toLowerCase()} firm?`, a: `${clampWords(regime.appliesTo, 40)} For this sector the binding detail is ${sec.record}, because ${sec.pressure}.` },
    { q: `Can an outsourced Level III cover ${regime.shortName} in this sector?`, a: regime.employerCertificationAccepted
      ? `Yes. ${regime.shortName} accepts employer-based certification, so a contracted Level III can write and sign the written practice, approve procedures and administer examinations — provided they hold each method they sign for. The employer still owns the records and the outcome.`
      : `Not for the certification itself: ${regime.shortName} certifies personnel through the scheme rather than the employer. A consulting Level III still carries procedures, documentation, gap assessment and audit attendance, which is where most of the preparation work actually sits.` },
    { q: `What gets a ${sec.label.toLowerCase()} firm a finding under ${regime.shortName}?`, a: findings.length
      ? `${list(findings, 3)}. These are records failures rather than capability failures — the work was done correctly and the evidence could not be produced, which under ${regime.shortName} is treated the same as not having done it.`
      : `A documented system that does not match what the technicians actually do. The work is generally right; the evidence either was not kept or could not be retrieved inside the audit window.` },
    { q: `Which methods matter most for ${sec.label.toLowerCase()} under ${regime.shortName}?`, a: methods.length
      ? `${list(methods, 6)}. Each needs its own approved procedure and personnel qualified in that specific method — a Level III qualified in one method cannot approve another, and signing outside your own method list is among the most common findings involving a Level III.`
      : `The methods the sector's construction code names. Each carries its own procedure, personnel qualification and equipment evidence.` },
    { q: `How long does ${regime.shortName} readiness take in this sector?`, a: `Documents take weeks. What cannot be compressed is documented experience and records history — on-the-job hours accrue in real time and calibration history cannot be back-filled. ${sec.pressure.charAt(0).toUpperCase() + sec.pressure.slice(1)}, which is why firms that start when the audit is announced rather than scheduled collect findings.` },
    { q: `How often is ${regime.shortName} renewed?`, a: `${clampWords(regime.renewal, 40)} Firms that diarise from the certificate date rather than the last audit avoid the lapse that forces a full reapplication.` },
  ];

  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a>'
    + '<a href="/compliance">Compliance</a><a href="/report-validation">Report Validation</a><a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(regime.shortName)} for ${esc(sec.label)} Inspection Firms</h1>`);
  parts.push(`    <p>${esc(regime.appliesTo)}</p>`);
  parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
    + `<p>${esc(answer)}</p><p>${esc(expansion)}</p>`
    + `<p><strong>Source:</strong> ${esc(clampWords(regime.sources, 40))}</p></section>`);
  parts.push(`<figure data-citation-block="table"><table><caption>${esc(`${regime.shortName} in ${sec.label.toLowerCase()} — what is demanded and what fails`)}</caption>`
    + '<thead><tr><th scope="col">Factor</th><th scope="col">What applies</th><th scope="col">Why it matters</th></tr></thead><tbody>'
    + rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')
    + '</tbody></table></figure>');
  for (const f of facets) parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  parts.push(`    <h2>Personnel certification under ${esc(regime.shortName)}</h2>\n    <p>${esc(clampWords(regime.personnelCertification, 90))}</p>`);
  if (docs.length) parts.push(`    <h2>What an auditor asks to see</h2>\n    <ul>${docs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>`);
  parts.push('<section data-citation-block="related"><p>Related: '
    + `<a href="/compliance/${esc(regime.slug)}">the ${esc(regime.shortName)} overview</a>, `
    + `<a href="/compliance/${esc(regime.slug)}/audit-preparation">${esc(regime.shortName)} audit preparation</a>, `
    + '<a href="/consulting/asnt-level-iii-consulting-services">outsourced ASNT Level III cover</a>, '
    + '<a href="/consulting/ndt-program-audit-gap-assessment">a programme gap assessment</a> and '
    + '<a href="/report-validation">independent report validation</a>.</p></section>');
  parts.push('  </main>');

  return { html: parts.join(String.fromCharCode(10)), answer };
}

export function buildRegimeIndustryPages(regimes, existingPaths, { gate = 0.55 } = {}) {
  const out = { routes: [], skippedNoSector: 0, skippedSimilar: 0, byRegime: {} };
  const accepted = [];

  for (const r of regimes) {
    if (!r || !r.slug || !r.shortName || !r.summary || !r.appliesTo) continue;
    const seen = new Set();
    for (const ind of r.industries || []) {
      const sec = sectorFor(ind);
      if (!sec) { out.skippedNoSector++; continue; }
      if (seen.has(sec.key)) continue;
      seen.add(sec.key);

      const path = `/compliance/${r.slug}/for-${slugify(sec.label)}`;
      if (existingPaths.has(path)) continue;

      const built = render(r, sec);
      if (accepted.some((a) => shingleSimilarity(built.answer, a) > gate)) { out.skippedSimilar++; continue; }
      accepted.push(built.answer);

      out.routes.push({
        path,
        title: `${r.shortName} for ${sec.label} Inspection Firms`.slice(0, 70),
        description: `What ${r.shortName} demands of ${sec.label.toLowerCase()} inspection firms: the records audited first, the personnel basis, and the findings this pairing produces.`.slice(0, 165),
        h1: `${r.shortName} for ${sec.label} Inspection Firms`,
        bodyContent: built.html,
      });
      out.byRegime[r.slug] = (out.byRegime[r.slug] || 0) + 1;
    }
  }
  return out;
}
