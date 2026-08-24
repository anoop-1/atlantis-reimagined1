/**
 * NDT Report Validation — page family. 2026-08-24.
 * ─────────────────────────────────────────────────────────────────────────────
 * A new service line: third-party review of inspection reports already produced.
 * Distinct from doing the inspection — the examination is done, the report
 * exists, and somebody has to decide whether it is correct, complete and
 * defensible before they accept it, pay for it, or rely on it in a dispute.
 *
 * WHY THIS FAMILY IS NOT A REPEAT OF THE COMPLIANCE FAMILY
 * /compliance/{regime}/{method} answers "what does this regime REQUIRE for this
 * method". These pages answer "what does a reviewer OPEN when validating a
 * finished report of this method under this regime" — the evidence trail and the
 * failure modes rather than the rule. The regime store's commonFindings and the
 * method store's `failure` field are the validation angle, and neither is the
 * headline on a compliance page. The similarity gate polices the boundary
 * regardless, and it compares against the compliance answers too.
 *
 * THE EVIDENCE FOR THE SHAPE. Measured over 90 days, impressions per page:
 *   Blog + Resources  320    Training  126    Digital Twins/3D  49
 *   Inspection Svcs    24    ERP        12
 * Deep question-led pages outperform thin permutation pages 27x on this site, so
 * this family is gated hard: a page exists only where the regime genuinely
 * covers that method, and the three-part answer structure proved on the -for-
 * and axis×city passes is used throughout.
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
 * What a reviewer actually opens, per method. The `checks` are the evidence
 * items a validation traces; `failure` is what most often makes a report of that
 * method indefensible. Method-specific and regime-independent, so it supplies
 * one axis of every page below.
 */
const METHOD_REVIEW = {
  UT: { name: 'Ultrasonic Testing', checks: 'the calibration block identity and its own calibration status, the reference level and dB settings, couplant and surface condition, and whether the scan pattern covered the volume the procedure claims', failure: 'a reference block that is unidentified or itself out of calibration, which invalidates every reading taken against it' },
  PAUT: { name: 'Phased Array Ultrasonics', checks: 'the scan plan against what was actually scanned, encoder position data, wedge delay and TCG calibration, gate and merge settings, and whether indications were sized or only detected', failure: 'data acquired outside the scan plan the procedure qualified, or encoder positions absent so coverage cannot be proven' },
  TOFD: { name: 'Time of Flight Diffraction', checks: 'probe separation against the depth of field claimed, the lateral wave and backwall timing, and how the near-surface dead zone was covered', failure: 'a near-surface dead zone left uncovered by any complementary technique, so the most likely flaw location was never examined' },
  RT: { name: 'Radiographic Testing', checks: 'IQI type and the sensitivity actually achieved, film density or detector response, source-to-film distance, coverage and overlap, and location markers tying each radiograph to the weld', failure: 'IQI sensitivity not achieved, which means the radiograph could not have shown the flaw size the acceptance criteria are written against' },
  CR: { name: 'Computed Radiography', checks: 'plate and scanner performance checks, image quality achieved per exposure, the viewing environment, and whether processing was recorded', failure: 'no periodic scanner performance check, so image quality across the batch cannot be established retrospectively' },
  RTD: { name: 'Digital Radiography', checks: 'detector performance evaluation currency, IQI sensitivity per exposure, and the qualified viewing conditions used for interpretation', failure: 'detector performance evaluation out of date for the array in use at the time of the examination' },
  MT: { name: 'Magnetic Particle Testing', checks: 'yoke lift test records for the shift, field adequacy verification for the geometry, technique and current, and consumable batch identity', failure: 'field adequacy never demonstrated for the geometry examined, so detectability at the indication orientation is unproven' },
  PT: { name: 'Liquid Penetrant Testing', checks: 'consumable batch certificates, contamination and sulphur or halogen limits where the material demands them, dwell and developer times, and the inspection light level measured at the surface', failure: 'dwell time not recorded, so the examination cannot be shown to have given the penetrant time to enter a tight flaw' },
  VT: { name: 'Visual Testing', checks: 'the illumination actually measured at the surface, the examiner’s near-vision acuity currency, viewing distance and angle, and whether a written procedure existed at all', failure: 'illumination at the surface never measured — visual is the method most often performed without the procedure the code requires' },
  ET: { name: 'Eddy Current Testing', checks: 'the reference standard used to set the response and whether it represents the material and geometry examined, frequency and phase settings, and fill factor or lift-off compensation', failure: 'a reference standard not representative of the alloy or geometry, so the calibrated response does not correspond to the flaw being sought' },
  LT: { name: 'Leak Testing', checks: 'the calibrated leak standard used to set sensitivity, the minimum detectable leak rate demonstrated, hold times and pressures, and ambient conditions', failure: 'sensitivity asserted rather than demonstrated against a calibrated leak standard' },
  AE: { name: 'Acoustic Emission', checks: 'sensor coupling verification before AND after the test, the loading regime applied, sensor layout against the coverage claimed, and background noise characterisation', failure: 'sensor response not verified after the test, so a sensor that failed mid-examination silently removes coverage' },
  MFL: { name: 'Magnetic Flux Leakage', checks: 'the reference plate qualification for the wall thickness examined, tool speed and lift-off, and the stated probability of detection against a defined defect size', failure: 'detection performance claimed generically rather than qualified on a reference plate for the wall thickness in question' },
};

const NAV = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a>'
  + '<a href="/report-validation">Report Validation</a><a href="/consulting">Consulting</a>'
  + '<a href="/compliance">Compliance</a><a href="/contact">Contact</a></nav></header>';

function relatedBlock(regime, methodCode) {
  return '<section data-citation-block="related"><p>Related: '
    + '<a href="/report-validation">the report validation service</a>, '
    + '<a href="/report-validation/what-makes-an-ndt-report-defensible">what makes a report defensible</a>, '
    + `<a href="/compliance/${esc(regime.slug)}">${esc(regime.shortName)} requirements</a>, `
    + `<a href="/compliance/${esc(regime.slug)}/${esc(slugify(methodCode))}">${esc(methodCode)} under ${esc(regime.shortName)}</a> and `
    + '<a href="/consulting/asnt-level-iii-consulting-services">outsourced ASNT Level III cover</a>.'
    + '</p></section>';
}

/**
 * The authority field often runs long — "ABSA, the pressure equipment safety
 * authority (originally incorporated as the Alberta Boilers Branch)…". Cutting
 * it to a word budget and then appending a possessive produced genuine garbage
 * on the first build: "…back to ABSA, the pressure equipment safety authority
 * (originally incorporated as the.'s own evidence requirements". Take the name
 * before the first comma, parenthesis or dash instead, so what remains is always
 * a usable noun phrase.
 */
function shortAuthority(a) {
  const s = String(a || '').split(/[,(—–]/)[0].trim().replace(/\.$/, '');
  return s && words(s) <= 12 ? s : String(a || '').split(/\s+/).slice(0, 8).join(' ').replace(/[.,]$/, '');
}

function render(regime, code) {
  const m = METHOD_REVIEW[code];
  if (!m) return null;

  // The regime's finding LEADS, because it is the element that varies most
  // across this family. The first build led with the method's checks, which are
  // identical for a given method across all 58 regimes, so 315 pages collided
  // and only 12 survived — the gate was right, the ordering was wrong.
  const finding = (regime.commonFindings || [])[0];
  const regimePart = finding
    ? `Under ${regime.shortName} the recurring finding is: ${clampWords(finding, 20)}`
    : `${regime.shortName} is enforced by ${shortAuthority(regime.authority)}.`;
  // The method's FAILURE mode — varies by method, and is the validation angle.
  const methodPart = `On a ${m.name} report specifically, ${clampWords(m.failure, 20)}`;
  // The combination, kept short so neither axis dominates.
  const combo = `Both are what an independent review of a ${code} report opens first.`;

  const answer = fitBand(`${regimePart} ${methodPart} ${combo}`.replace(/\s+/g, ' ').replace(/\.\./g, '.').trim());

  let expansion = `${m.failure.charAt(0).toUpperCase() + m.failure.slice(1)}. `
    + `${clampWords(regime.summary, 80)} `
    + 'A validation that finds the report sound is as useful as one that does not: the point is a defensible answer, not a defect.';
  expansion = clampWords(expansion, 165);

  const rows = [
    ['Method under review', `${m.name} (${code})`, 'Each method leaves a different evidence trail'],
    ['What the reviewer opens', clampWords(m.checks, 24), 'The items a dispute turns on'],
    ['Most common way it fails', clampWords(m.failure, 22), 'Usually a records failure, not a technique failure'],
    ['Governing regime', regime.name, `Enforced by ${shortAuthority(regime.authority)}`],
    ['Personnel basis', regime.employerCertificationAccepted ? 'Employer-based certification — the written practice is part of the evidence' : 'Central or third-party certification — the scheme certificate is checked directly', 'Whether the certification itself can be verified independently'],
    ['Records regime', clampWords(regime.renewal, 18), 'How far back the trail has to reach'],
  ];

  const facets = [
    { q: `What does a ${code} report have to show under ${regime.shortName}?`, a: `${m.checks.charAt(0).toUpperCase() + m.checks.slice(1)} — plus the procedure number and revision, the technician's ${code} certification current on the date of work, and the acceptance criteria with the code edition they came from. Missing any one of those makes the examination unprovable rather than merely undocumented.` },
    { q: `What most often makes a ${code} report indefensible?`, a: `${m.failure.charAt(0).toUpperCase() + m.failure.slice(1)}. It is a records failure rather than a technique failure — the examination was very likely performed correctly, and the evidence supporting it cannot be produced, which under ${regime.shortName} is treated the same way as not having done the work.` },
    { q: `Can a ${code} report be validated without re-inspecting?`, a: code === 'PAUT' || code === 'TOFD' || code === 'RT' || code === 'CR' || code === 'RTD'
      ? `Substantially, yes — this method leaves recorded data or images a reviewer can reopen and interpret independently, rather than a summary of what someone saw. That is the strongest position a validation can be in: the original evidence is still there to be re-read.`
      : `Partly. A document review establishes whether the examination as recorded was adequate and correctly interpreted, and whether the personnel and equipment evidence holds. It cannot establish that the examination was performed as recorded, because ${code} leaves no reviewable data set — for that, targeted re-inspection is the only answer.` },
    { q: `Who is qualified to validate a ${code} report under ${regime.shortName}?`, a: `A Level III qualified in ${code} specifically. Method scope is the constraint people miss: a Level III qualified in another method cannot approve or credibly challenge a ${code} interpretation, and an opposing reviewer will test that first because it is documentary and binary.` },
    { q: `How far back do ${regime.shortName} records have to reach?`, a: `${regime.renewal} Where a validation is being done for a dispute or a purchase, the retention period is what decides whether the question can be answered at all — records that were never kept cannot be reconstructed afterwards, and a reconstruction is worth markedly less than a contemporaneous record.` },
    { q: `What happens if the validation finds the report was correct?`, a: `That is a normal and useful outcome. The buyer gets a defensible position to accept the work, pay the invoice, close the claim or proceed with the purchase — supported by an independent review rather than by assertion. A validation is commissioned to settle the question, not to find a defect.` },
  ];

  const parts = [];
  parts.push(NAV);
  parts.push('  <main>');
  parts.push(`    <h1>Validating ${esc(m.name)} Reports Under ${esc(regime.shortName)}</h1>`);
  parts.push(`    <p>${esc(clampWords(regime.appliesTo, 60))}</p>`);
  parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
    + `<p>${esc(answer)}</p><p>${esc(expansion)}</p>`
    + `<p><strong>Source:</strong> ${esc(clampWords(regime.sources, 40))}</p></section>`);
  parts.push(`<figure data-citation-block="table"><table><caption>${esc(`${m.name} report validation under ${regime.shortName} — evidence and failure modes`)}</caption>`
    + '<thead><tr><th scope="col">Factor</th><th scope="col">What applies</th><th scope="col">Why it matters</th></tr></thead><tbody>'
    + rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')
    + '</tbody></table></figure>');
  for (const f of facets) parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  parts.push(`    <h2>What the reviewer traces</h2>\n    <p>${esc(m.checks.charAt(0).toUpperCase() + m.checks.slice(1))}.</p>`);
  parts.push(`    <h2>Personnel and records under ${esc(regime.shortName)}</h2>\n    <p>${esc(clampWords(regime.personnelCertification, 90))}</p>`);
  parts.push(relatedBlock(regime, code));
  parts.push('  </main>');

  return { html: parts.join(String.fromCharCode(10)), answer, methodName: m.name };
}

/**
 * Build the family. A page exists only where the regime genuinely covers the
 * method — the regime's own methodsInScope decides, not a loop over both lists.
 */
export function buildReportValidationPages(regimes, existingPaths, { gate = 0.55 } = {}) {
  const out = { routes: [], skippedNoMethod: 0, skippedSimilar: 0, byRegime: {} };
  const accepted = [];

  for (const r of regimes) {
    if (!r || !r.slug || !r.shortName || !r.summary) continue;
    for (const raw of r.methodsInScope || []) {
      const code = String(raw).trim().toUpperCase().replace('CR/DR', 'CR');
      if (!METHOD_REVIEW[code]) { out.skippedNoMethod++; continue; }
      const path = `/report-validation/${r.slug}/${slugify(code)}`;
      if (existingPaths.has(path)) continue;

      const built = render(r, code);
      if (!built) continue;
      if (accepted.some((a) => shingleSimilarity(built.answer, a) > gate)) { out.skippedSimilar++; continue; }
      accepted.push(built.answer);

      out.routes.push({
        path,
        title: `${code} Report Validation Under ${r.shortName}`.slice(0, 70),
        description: `What an independent reviewer checks in a ${built.methodName} report under ${r.shortName}, what makes one indefensible, and whether it can be settled without re-inspection.`.slice(0, 165),
        h1: `Validating ${built.methodName} Reports Under ${r.shortName}`,
        bodyContent: built.html,
      });
      out.byRegime[r.slug] = (out.byRegime[r.slug] || 0) + 1;
    }
  }
  return out;
}

export { METHOD_REVIEW };
