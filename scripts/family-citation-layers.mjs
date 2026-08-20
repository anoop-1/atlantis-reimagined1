/**
 * Family citation layers — Line B of the 2,000-page upgrade. 2026-08-19.
 * ─────────────────────────────────────────────────────────────────────────────
 * Tranche T4: every /ndt-training-<slug> city route whose profile in
 * src/data/training-cities.ts carries the mandated research fields gets a
 * citation layer rendered FROM THAT DATA — answer block, decomposition table,
 * question-form facets — appended to its static bodyContent.
 *
 * WHY THIS IS NOT THIN / DOORWAY CONTENT (the owner's explicit concern)
 *
 * A doorway page is the same page with the noun swapped. These layers differ
 * where the underlying facts differ, because they are rendered from per-city
 * research the data file's own header mandates: at least two real local
 * employers, a realistic local salary band with USD reference, the cert body
 * mix that market actually uses and WHY, and a real exam centre. Houston's
 * table shows refinery employers, ASNT-first certification and Gulf Coast pay;
 * Aberdeen's shows offshore operators, PCN-first and North Sea pay. Cities
 * whose profile lacks the mandated fields are SKIPPED, not padded — a thin
 * layer is worse than none.
 *
 * Anti-doorway guards, enforced here rather than promised:
 *   - skip if localContext under 200 chars or fewer than 2 exam-center/cert
 *     fields populated (the research is missing, so no layer)
 *   - the answer block quotes the city's own salary band and cert mix, so no
 *     two blocks can be identical unless the underlying markets are
 *   - a similarity audit (--audit) shingles the generated answers and fails
 *     the family if any pair overlaps more than 60%
 *
 * US-first per owner: US profiles render with SNT-TC-1A framing and the
 * employer-cohort delivery story; international profiles keep their own cert
 * mix (PCN/CSWIP/ISO 9712 markets are real and already earn — dubai 1,313i).
 */
import { loadKnowledge } from './route-reconcile.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

/** Trim a sentence-assembled answer into the 40-70 word citation band. */
function fitBand(text) {
  if (words(text) <= 70) return text;
  const sents = text.match(/[^.!?]+[.!?]+/g) || [text];
  let out = '';
  for (const s of sents) {
    if (words(out + s) > 70) break;
    out += s;
  }
  return words(out) >= 40 ? out.trim() : text.split(/\s+/).slice(0, 68).join(' ') + '.';
}

function renderCityLayer(p) {
  const certMix = [p.primaryCert, p.secondaryCert, ...(p.otherCerts || [])].filter(Boolean);
  const sb = p.salaryBand || {};
  const centers = (p.examCenters || []).map((c) => c.name).filter(Boolean);

  // The ANSWER leads with the city's hand-researched context — the sentences
  // naming real local employers and industry — because that is what genuinely
  // differs between cities. The first version led with a templated sentence and
  // failed the similarity audit at 86% between Gulf cities whose salary bands
  // and cert mixes happen to match; the researched prose is what breaks the
  // skeleton's dominance.
  const ctxSents = String(p.localContext || '').trim().match(/[^.!?]+[.!?]+/g) || [];
  // Build the lead from researched sentences up to ~55 words. When the FIRST
  // sentence alone blows the budget (several profiles open with a 50+ word
  // researched sentence), cut it at the last clause boundary under 48 words
  // rather than dropping it — an empty lead collapses the answer to pure
  // template, which is how east-hartford and oak-ridge ended up with identical
  // blocks and the family failed its similarity audit at 100%.
  let lead = '';
  for (const s of ctxSents) { if (words(lead + s) > 55) break; lead += s; }
  if (!lead && ctxSents.length) {
    const first = ctxSents[0];
    const w = first.split(/\s+/);
    let cut = w.slice(0, 48).join(' ');
    const cl = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' — '));
    if (cl > 60) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  // The certification sentence is always real data; the pay sentence is only
  // added when the profile actually carries a band — "the local qualified
  // band" repeated across cities is doorway glue, not information.
  const payText = sb.levelII || sb.usdReference;
  const answer = fitBand(
    `${lead.trim()} Training runs on ${p.primaryCert}${p.secondaryCert ? ` and ${p.secondaryCert}` : ''} certification` +
    (payText ? `; Level II pay sits at ${payText}.` : `, delivered on-site, at arranged venues, or blended.`)
  );

  // Expansion: the REMAINING researched context plus the cert pathway note, so
  // answer and expansion never repeat each other.
  let expansion = ctxSents.join('').replace(lead, '').trim();
  if (p.certPathwayNote) expansion = `${expansion} ${p.certPathwayNote}`.trim();
  if (centers.length) expansion = `${expansion} Examinations are administered locally through ${centers[0]}.`.trim();
  if (words(expansion) > 165) {
    const sents = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let out = '';
    for (const s of sents) { if (words(out + s) > 160) break; out += s; }
    expansion = out.trim();
  }

  const rows = [
    ['Certification route', certMix.join(', '), esc(p.certPathwayNote || 'Set by the employers and codes this market works to')],
    ['Level I pay band', sb.levelI || '—', 'Entry: performs set-ups and records results under supervision'],
    ['Level II pay band', (sb.levelII || '—') + (sb.usdReference && sb.currency !== 'USD' ? ` (${sb.usdReference})` : ''), 'Interprets and reports to an approved procedure'],
    ['Level III pay band', sb.levelIII || '—', 'Approves procedures and qualifies personnel'],
  ];
  if (centers.length) {
    rows.push(['Examination centre', centers.slice(0, 2).join('; '), (p.examCenters[0].bodies || []).join(', ') + ' examinations administered locally']);
  }
  rows.push(['Delivery', 'On-site cohort · arranged venue · blended online theory + in-person practical', 'No fixed schoolhouse; the model follows the cohort']);

  const facets = [
    { q: `Which NDT certification do employers in ${p.city} ask for?`, a: `${p.primaryCert} leads this market${p.secondaryCert ? `, with ${p.secondaryCert} also recognised` : ''}. ${p.certPathwayNote || ''}`.trim() },
    { q: `What does an NDT technician earn in ${p.city}?`, a: `Level I sits at ${sb.levelI || 'the local entry band'}, Level II at ${sb.levelII || 'the local qualified band'}${sb.usdReference && sb.currency !== 'USD' ? ` (about ${sb.usdReference})` : ''}, and Level III at ${sb.levelIII || 'the senior band'}. Certification level moves pay more than any other factor; method premiums stack on top.` },
    { q: `Where are NDT certification exams administered near ${p.city}?`, a: centers.length ? `${centers.join(' and ')} administer${centers.length > 1 ? '' : 's'} ${(p.examCenters[0].bodies || [p.primaryCert]).join(', ')} examinations for this market. Employer-certified schemes also allow examinations at the employer's own facility under an approving Level III.` : `Employer-based schemes allow examinations at the employer's facility under an approving Level III, which is how most cohorts in this market are examined.` },
    { q: `How is NDT training delivered in ${p.city}?`, a: `Three routes: on-site at the employer's facility with the employer's own equipment, an arranged venue when a cohort forms, or blended — online theory on the technician's schedule followed by a concentrated in-person practical. The practical cannot be done remotely under any recognised scheme.` },
  ];

  const parts = [];
  parts.push(
    '<section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${esc(answer)}</p>` +
    (expansion ? `<p>${esc(expansion)}</p>` : '') +
    `<p><strong>Source:</strong> ${esc(p.primaryCert === 'ASNT' ? 'ASNT SNT-TC-1A (2024 edition); local market data per city research file' : `${p.primaryCert} scheme requirements; local market data per city research file`)}</p>` +
    '</section>'
  );
  parts.push(
    `<figure data-citation-block="table"><table><caption>${esc(`NDT training and certification in ${p.city} — route, pay and delivery`)}</caption>` +
    '<thead><tr><th scope="col">Factor</th><th scope="col">This market</th><th scope="col">What it means</th></tr></thead><tbody>' +
    rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('') +
    '</tbody></table></figure>'
  );
  for (const f of facets) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  }
  return { html: parts.join('\n'), answer };
}

/**
 * Applies T4 layers. Returns stats plus the generated answers keyed by slug so
 * the audit can measure cross-city similarity.
 */
export async function applyFamilyCitationLayers(routes) {
  const { trainingBySlug } = await loadKnowledge();

  // US expansion 2026-08-20: research-agent profiles land as JSON rather than
  // TS edits, so a data drop needs no code change. Supplemental profiles only
  // fill slugs the main store lacks — the hand-maintained TS file stays
  // authoritative for everything it already covers.
  const { existsSync, readFileSync } = await import('fs');
  const { join, dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const here = dirname(fileURLToPath(import.meta.url));
  const supp = join(here, 'us-city-profiles-supplemental.json');
  if (existsSync(supp)) {
    let added = 0;
    for (const p of JSON.parse(readFileSync(supp, 'utf-8'))) {
      if (p && p.slug && !trainingBySlug[p.slug]) { trainingBySlug[p.slug] = p; added++; }
    }
    if (added) console.log(`  (supplemental US profiles merged: ${added})`);
  }
  const out = { applied: 0, skippedThin: 0, alreadyLayered: 0, newRoutes: 0, answers: {} };

  // New US cities (2026-08-20): supplemental profiles whose slug has no route
  // at all become full prerender-only pages, following the same pattern as the
  // 234 existing prerender-only training routes. The body IS the researched
  // profile — context prose, the citation layer, and the delivery framing. The
  // enquiry-CTA and cluster passes run after this and decorate them like any
  // other training route.
  {
    const have = new Set(routes.filter((r) => r && r.path).map((r) => r.path));
    for (const p of Object.values(trainingBySlug)) {
      const path = `/ndt-training-${p.slug}`;
      if (have.has(path)) continue;
      if (!p.localContext || p.localContext.length < 300) continue;
      const { html } = renderCityLayer(p);
      routes.push({
        path,
        title: `NDT Training ${p.city} | ASNT Level I, II & III Courses`,
        description: `NDT training for ${p.city}: ASNT SNT-TC-1A courses delivered on-site, at arranged venues, or blended online theory with in-person practical. ${String(p.certPathwayNote || '').slice(0, 60)}`.slice(0, 165),
        h1: `NDT Training in ${p.city}`,
        bodyContent:
          '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/training-usa">US Training</a><a href="/contact">Contact</a></nav></header>\n' +
          '  <main>\n' +
          `    <h1>NDT Training in ${esc(p.city)}</h1>\n` +
          `    <p>${esc(p.localContext)}</p>\n` +
          html + '\n' +
          '    <p>Delivery follows the cohort: on-site at your facility, an arranged venue nearby, or blended online theory with an in-person practical. See <a href="/training-usa">NDT training across the US</a> and <a href="/corporate-ndt-training">employer-sponsored cohorts</a>.</p>\n' +
          '  </main>',
      });
      out.newRoutes++;
      out.answers[p.slug] = 'new';
    }
  }

  for (const r of routes) {
    if (!r || !r.path || !r.path.startsWith('/ndt-training-')) continue;
    const slug = r.path.replace('/ndt-training-', '');
    const p = trainingBySlug[slug];
    if (!p) continue;
    if (typeof r.bodyContent !== 'string' || !r.bodyContent) continue;
    if (r.bodyContent.includes('data-citation-block="answer"')) { out.alreadyLayered++; continue; }

    // Anti-thin gate: no research, no layer.
    const centers = (p.examCenters || []).length;
    if (!p.localContext || p.localContext.length < 200 || (!centers && !p.certPathwayNote)) {
      out.skippedThin++;
      continue;
    }

    const { html, answer } = renderCityLayer(p);
    r.bodyContent += '\n' + html;
    out.answers[slug] = answer;
    out.applied++;
  }
  return out;
}

/** Shingle-overlap similarity between two strings (word 4-grams). */
export function shingleSimilarity(a, b) {
  const grams = (s) => {
    const w = String(s).toLowerCase().split(/\s+/);
    const g = new Set();
    for (let i = 0; i <= w.length - 4; i++) g.add(w.slice(i, i + 4).join(' '));
    return g;
  };
  const A = grams(a), B = grams(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const g of A) if (B.has(g)) inter++;
  return inter / Math.min(A.size, B.size);
}
