/**
 * T7 — corporate training city citation layers — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * COHORT: /corporate-ndt-training/{city} — 67 unlayered pages, 43 of them
 * invisible over 90 days, median ~950 words. Employer-sponsored cohort training
 * is the highest-intent training page on the site (a company training six
 * technicians, not one person browsing salaries), so an invisible one is an
 * expensive page to leave alone.
 *
 * WHY /training/api-510-training-{city} IS DELIBERATELY EXCLUDED
 * That family looks identical in shape and is left alone on purpose. Atlantis
 * does not sell API 510 training — those pages exist to attract traffic, which
 * the owner has approved — but a citation layer is an ANSWER BLOCK written in
 * the site's own voice, and generating thirty of them across thirty cities would
 * put a confident "here is how we deliver API 510 training in Baltimore" into
 * the layer models quote from. Being cited saying something untrue is worse than
 * not being cited. If those pages are ever layered it needs hand-written copy
 * that keeps the distinction, not a template.
 *
 * THE GATE — carried over from T6, which failed without it. Each generated
 * answer is compared against those already accepted in the family and dropped
 * above 0.55 similarity. Cities whose stored description is auto-generated
 * boilerplate rather than research fail that check and keep their existing body.
 * The pass declining to publish is the feature.
 *
 * CLAUDE.md §18: no Atlantis price appears in any generated string below.
 */
import { loadKnowledge, loadKnowledgeTs } from './route-reconcile.mjs';
import { shingleSimilarity } from './family-citation-layers.mjs';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;
const list = (a, n = 4) => (a || []).filter(Boolean).slice(0, n).join(', ');

function fitBand(text) {
  if (words(text) <= 70) return text;
  const sents = text.match(/[^.!?]+[.!?]+/g) || [text];
  let out = '';
  for (const s of sents) { if (words(out + s) > 70) break; out += s; }
  return words(out) >= 40 ? out.trim() : text.split(/\s+/).slice(0, 68).join(' ') + '.';
}

function buildLead(prose, budget = 50) {
  const sents = String(prose || '').trim().match(/[^.!?]+[.!?]+/g) || [];
  let lead = '';
  for (const s of sents) { if (words(lead + s) > budget) break; lead += s; }
  if (!lead && sents.length) {
    const w = sents[0].split(/\s+/);
    let cut = w.slice(0, budget - 4).join(' ');
    const cl = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' — '));
    if (cl > 55) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  return { lead: lead.trim(), rest: sents.join('').replace(lead, '').trim() };
}

function renderCorporateLayer(city, d) {
  const { lead, rest } = buildLead(d.prose);
  const firms = d.companies || [];
  const codes = d.localCompliance || [];
  const certs = d.certMix || [];

  const answer = fitBand(
    `${lead} Employers here train cohorts on-site rather than sending technicians away one at a time, ` +
    (certs.length ? `qualifying them under ${list(certs, 2)}.` : 'qualifying them under employer-based certification.')
  );

  let expansion = rest;
  if (firms.length) expansion = `${expansion} Operators including ${list(firms, 3)} set the qualification bar their contractors inherit, which is what usually triggers a cohort.`.trim();
  expansion = `${expansion} On-site delivery uses the employer's own equipment and procedures, so the practical is done on the kit the technicians will actually use, and the written practice the training maps to is the employer's own.`.trim();
  if (words(expansion) > 165) {
    const s = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let o = '';
    for (const x of s) { if (words(o + x) > 160) break; o += x; }
    expansion = o.trim();
  }

  const rows = [];
  if (d.industries && d.industries.length) rows.push(['Sectors driving demand', list(d.industries, 5), 'Determines which methods a cohort needs first']);
  if (firms.length) rows.push(['Operators setting the bar', list(firms, 4), 'Their pre-qualification requirements flow down to contractors']);
  if (codes.length) rows.push(['Codes named locally', list(codes, 5), 'The written practice has to satisfy these, and the training has to match it']);
  rows.push(['Delivery', 'On-site at the employer\'s facility · arranged venue · blended online theory with in-person practical', 'The practical cannot be done remotely under any recognised scheme']);
  rows.push(['Cohort economics', 'One trainer, one mobilisation, the whole crew certified together', 'Sending technicians away individually costs more in lost field days than in course fees']);
  rows.push(['What the employer keeps', 'A written practice, examination records, and technicians certified against it', 'These are the three an auditor asks for; the training is what makes them true']);

  const facets = [
    { q: `Why do employers in ${city} train NDT cohorts on-site?`, a: `Because the alternative is losing technicians to travel one at a time. One trainer and one mobilisation certifies the whole crew on the employer's own equipment and against the employer's own written practice, and the field days saved usually dominate the course cost. It also means the practical is done on the kit the technicians actually use.` },
    { q: `Which certification scheme applies to a cohort in ${city}?`, a: certs.length
      ? `${list(certs, 3)}. Under employer-based certification the employer writes the practice and a qualified Level III approves it and administers examinations, so the scheme belongs to the employer rather than to the training provider — which is why the training has to be built against the written practice, not a generic syllabus.`
      : `Employer-based certification under ASNT SNT-TC-1A is the route here. The employer writes the practice and a qualified Level III approves it and administers examinations, so the training has to be built against that written practice rather than a generic syllabus.` },
    { q: `What does an employer in ${city} need in place before training starts?`, a: `A written practice signed by a qualified Level III, the procedures the technicians will work to, and a decision on which methods and levels the cohort needs. Firms without a Level III on staff contract one — that is the signing authority the certification depends on, and it cannot be supplied by the training itself.` },
    { q: `Can theory be delivered online for a cohort in ${city}?`, a: `Theory yes, practical no. Blended delivery puts the theory hours online on the technicians' own schedule and concentrates the in-person time on the practical, which reduces the days a crew is off the tools. No recognised scheme accepts a remote practical, so the in-person element is fixed however the theory is delivered.` },
    { q: `How many technicians make a cohort worth running in ${city}?`, a: `The economics turn on mobilisation rather than headcount, so a crew of four or more is usually where on-site delivery beats sending people away individually. Smaller groups are often combined across sister sites or run at an arranged venue nearby instead.` },
  ];

  const parts = [];
  parts.push(
    '<section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${esc(answer)}</p>` + (expansion ? `<p>${esc(expansion)}</p>` : '') +
    `<p><strong>Source:</strong> ${esc('ASNT SNT-TC-1A employer certification framework; per-city industrial and compliance research file')}</p>` +
    '</section>'
  );
  parts.push(
    `<figure data-citation-block="table"><table><caption>${esc(`Employer-sponsored NDT training in ${city} — demand, scheme and delivery`)}</caption>` +
    '<thead><tr><th scope="col">Factor</th><th scope="col">This market</th><th scope="col">Why it matters</th></tr></thead><tbody>' +
    rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('') +
    '</tbody></table></figure>'
  );
  for (const f of facets) parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  parts.push(
    '<section data-citation-block="related"><p>Related: ' +
    '<a href="/training">NDT training programmes and methods</a>, ' +
    '<a href="/training-usa">delivery across the US</a>, ' +
    '<a href="/asnt-certification">ASNT certification requirements by level</a>, ' +
    '<a href="/consulting/written-practice-development">written practice development</a> and ' +
    '<a href="/consulting/asnt-level-iii-consulting-services">outsourced Level III cover</a>. ' +
    'Budget holders comparing pay bands should see <a href="/ndt-level-2-salary">what a certified Level II earns</a>.' +
    '</p></section>'
  );
  return { html: parts.join('\n'), answer };
}

export async function applyTrainingFamilyLayers(routes) {
  const [k, ex] = await Promise.all([loadKnowledge(), loadKnowledgeTs('data/expanded-cities.ts')]);

  const data = {};
  const put = (slug, o) => { if (slug && !data[slug]) data[slug] = o; };
  for (const c of ex.expandedLocations || []) {
    const o = { prose: c.industrialProfile, companies: c.companies, industries: c.industries, localCompliance: [], name: c.name };
    put(c.slug, o);
    put(c.slug.replace(/-[a-z]+$/, ''), o);
  }
  // Training profiles carry the certification mix, which is the field that most
  // distinguishes one market's cohort from another's.
  for (const [slug, p] of Object.entries(k.trainingBySlug || {})) {
    const base = data[slug] || {};
    data[slug] = {
      ...base,
      prose: base.prose || p.localContext || '',
      name: base.name || p.city,
      certMix: [p.primaryCert, p.secondaryCert, ...(p.otherCerts || [])].filter(Boolean),
      companies: base.companies || [],
      industries: base.industries || [],
      localCompliance: base.localCompliance || [],
    };
  }
  const { existsSync, readFileSync } = await import('fs');
  const { join, dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const here = dirname(fileURLToPath(import.meta.url));
  for (const f of ['us-city-profiles-supplemental.json', 'us-consulting-profiles-supplemental.json']) {
    const p = join(here, f);
    if (!existsSync(p)) continue;
    for (const r of JSON.parse(readFileSync(p, 'utf-8'))) {
      if (!r || !r.slug) continue;
      const prose = r.localContext || r.industrialProfile;
      if (!prose) continue;
      const base = data[r.slug] || {};
      data[r.slug] = {
        ...base,
        prose: base.prose || prose,
        name: base.name || r.city || r.name,
        certMix: base.certMix || [r.primaryCert, r.secondaryCert, ...(r.otherCerts || [])].filter(Boolean),
        companies: (base.companies && base.companies.length ? base.companies : r.companies) || [],
        industries: (base.industries && base.industries.length ? base.industries : r.industries) || [],
        localCompliance: (base.localCompliance && base.localCompliance.length ? base.localCompliance : r.localCompliance) || [],
      };
    }
  }

  const out = { applied: 0, skippedThin: 0, skippedSimilar: 0, already: 0, answers: {} };
  const accepted = [];
  for (const r of routes) {
    if (!r || !r.path || !r.bodyContent) continue;
    if (!r.path.startsWith('/corporate-ndt-training/')) continue;
    if (r.bodyContent.includes('data-citation-block="answer"')) { out.already++; continue; }

    const slug = r.path.replace('/corporate-ndt-training/', '');
    const d = data[slug];
    if (!d || words(d.prose) < 25) { out.skippedThin++; continue; }

    const city = d.name || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const rendered = renderCorporateLayer(city, d);
    if (accepted.some((a) => shingleSimilarity(rendered.answer, a) > 0.55)) { out.skippedSimilar++; continue; }
    accepted.push(rendered.answer);

    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
      ? r.bodyContent.replace(/<\/main>\s*$/, `${rendered.html}\n  </main>`)
      : `${r.bodyContent}\n${rendered.html}`;
    out.applied++;
    out.answers[slug] = rendered.answer;
  }
  return out;
}
