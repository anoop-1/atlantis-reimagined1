/**
 * T5 — consulting city citation layers — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 * 151 /consulting/ndt-consulting-{city} pages exist. 150 of them carry no
 * citation layer, and 76 earned zero impressions in 90 days. They are not thin —
 * median 1,379 words — so the bucket is "crawled and not chosen": Google has
 * them and does not consider them worth showing. Adding words to a page Google
 * already declined is the wrong move; adding the thing it lacks is the right
 * one, and what it lacks is a directly-extractable answer and a decomposition
 * nobody else publishes.
 *
 * THE ANTI-DOORWAY CONSTRAINT (learned the expensive way on T4)
 * The T4 training-city pass failed its own similarity audit twice — first at
 * 86%, then at 100% — because the layer led with a templated sentence and the
 * skeleton dominated the fingerprint. The fix, kept here: LEAD WITH THE
 * RESEARCHED PROSE. `industrialProfile` is written per city and names that
 * city's own plants and sectors, so leading with it makes the first passage
 * structurally unable to match a sibling.
 *
 * The second defence is the data itself. Every row of the table below is drawn
 * from a per-city store — `industries`, `companies`, `localCompliance` — so
 * Houston's table names OSHA PSM, TCEQ, API 510/570/653 and NBIC against
 * ExxonMobil and Shell, while Wichita's names entirely different codes against
 * entirely different primes. A city with no data is SKIPPED, not padded: the
 * page keeps its existing body and waits for research. That gate is why this
 * pass is safe to run at family scale.
 *
 * WHAT IT DELIBERATELY DOES NOT USE
 * ERP_CITY_PROFILES also carries `uniqueLocalROI` and `localCaseStudy`. Both are
 * ERP-flavoured and quote customer savings figures. They belong on the ERP
 * pages, not on consulting pages, so this pass reads only the compliance and
 * industry fields. CLAUDE.md §18: no Atlantis price appears anywhere below.
 */
import { loadKnowledgeTs } from './route-reconcile.mjs';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

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

/** Same lead-building discipline as T4: researched sentences first, clause-cut if one overruns. */
function buildLead(prose, budget = 52) {
  const sents = String(prose || '').trim().match(/[^.!?]+[.!?]+/g) || [];
  let lead = '';
  for (const s of sents) {
    if (words(lead + s) > budget) break;
    lead += s;
  }
  if (!lead && sents.length) {
    const w = sents[0].split(/\s+/);
    let cut = w.slice(0, budget - 4).join(' ');
    const cl = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' — '));
    if (cl > 60) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  return { lead: lead.trim(), rest: sents.join('').replace(lead, '').trim() };
}

const list = (arr, max = 4) => (arr || []).filter(Boolean).slice(0, max).join(', ');

function renderConsultingLayer(city, d) {
  const { lead, rest } = buildLead(d.industrialProfile);
  const codes = d.localCompliance || [];
  const firms = d.companies || [];
  const sectors = d.industries || [];

  // The answer pairs the researched industrial lead with the ONE fact a firm
  // buying Level III cover actually needs: which code regime governs the work
  // it will be audited against here. Where no code list exists for the city the
  // sentence falls back to the sector framing rather than inventing a standard.
  const codeSentence = codes.length
    ? `Inspection work here is audited against ${list(codes, 4)}, and each of those regimes requires a qualified Level III to sign the written practice and approve procedures.`
    : `Work in these sectors is qualified under employer-based certification, which requires a Level III to sign the written practice and approve procedures.`;
  const answer = fitBand(`${lead} ${codeSentence}`);

  // Expansion carries the remaining researched prose plus the named operators —
  // never a repeat of the answer.
  let expansion = rest;
  if (firms.length) {
    expansion = `${expansion} Inspection demand is driven by operators including ${list(firms, 4)}, whose contracts set the qualification bar their supply chain has to meet.`.trim();
  }
  expansion = `${expansion} An outsourced ASNT Level III covers the signing authority a firm needs without carrying the role on staff — written practice, procedure approval, examination oversight and audit attendance.`.trim();
  if (words(expansion) > 165) {
    const sents = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let out = '';
    for (const s of sents) {
      if (words(out + s) > 160) break;
      out += s;
    }
    expansion = out.trim();
  }

  const rows = [];
  if (sectors.length) rows.push(['Sectors driving demand', list(sectors, 5), 'Determines which methods and which code regime a firm must qualify to']);
  if (firms.length) rows.push(['Operators setting the bar', list(firms, 4), 'Their approved-supplier requirements flow down to every contractor bidding']);
  if (codes.length) rows.push(['Codes named in local contracts', list(codes, 6), 'Each requires a documented written practice and a Level III to approve it']);
  rows.push(['What the Level III signs', 'Written practice · procedure approval · examination oversight · personnel certification', 'These four signatures are what an auditor asks to see first']);
  rows.push(['Engagement shape', 'Retained cover · project cover · interim cover before an audit date', 'Scope follows the audit calendar, not a fixed schedule']);

  const facets = [
    {
      q: `Which codes govern NDT inspection work in ${city}?`,
      a: codes.length
        ? `${list(codes, 6)} are the regimes named in contracts here. Each puts the obligation on the employer: a written practice, a Level III who signs it, and records that survive an audit. Which one binds a given job is set by the client contract and the construction code, not by preference.`
        : `Employer-based certification under ASNT SNT-TC-1A is the governing route for the sectors active here. The employer writes the practice, a qualified Level III approves it, and the client contract decides which construction code sits above it.`,
    },
    {
      q: `Can an outside Level III sign our written practice in ${city}?`,
      a: `Yes. SNT-TC-1A places the obligation on the employer, and the employer may designate a contracted Level III to write and sign the written practice, approve procedures and administer examinations. The Level III must be qualified in each method they sign for. What an outside Level III cannot do is substitute for the employer's own records.`,
    },
    {
      q: `Which employers in ${city} drive inspection qualification requirements?`,
      a: firms.length
        ? `${list(firms, 4)} and their contractors. Approved-supplier requirements flow down: a firm bidding into that supply chain inherits the qualification bar whether or not its own client names it directly, which is why audit-readiness is a bidding issue rather than a paperwork one.`
        : `The asset owners and EPCs active in these sectors. Approved-supplier requirements flow down the chain, so a subcontractor inherits the qualification bar the top of the chain sets.`,
    },
    {
      q: `How quickly can a firm in ${city} get audit-ready?`,
      a: `The written practice and procedure set can be drafted and signed inside weeks. What cannot be compressed is documented experience: on-the-job hours accumulate in real time, and reconstructing undocumented hours needs employer attestation. Firms that start when the audit is scheduled rather than when it is announced clear it without findings.`,
    },
    {
      q: `Does Atlantis deliver training as well as Level III cover in ${city}?`,
      a: `Yes — training is delivered on-site at the employer's facility, at an arranged venue, or blended with online theory and an in-person practical, under the same Level III oversight. Employers building a cohort rather than certifying one technician usually pair the two so the written practice and the training programme match.`,
    },
  ];

  const parts = [];
  parts.push(
    '<section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${esc(answer)}</p>` +
    (expansion ? `<p>${esc(expansion)}</p>` : '') +
    `<p><strong>Source:</strong> ${esc('ASNT SNT-TC-1A employer certification framework; per-city industrial and compliance research file')}</p>` +
    '</section>'
  );
  parts.push(
    `<figure data-citation-block="table"><table><caption>${esc(`NDT Level III consulting in ${city} — what governs the work and what gets signed`)}</caption>` +
    '<thead><tr><th scope="col">Factor</th><th scope="col">This market</th><th scope="col">Why it matters</th></tr></thead><tbody>' +
    rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('') +
    '</tbody></table></figure>'
  );
  for (const f of facets) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  }
  // The linking the owner asked for — woven, and every destination is a real route.
  parts.push(
    '<section data-citation-block="related"><p>' +
    `Related: <a href="/consulting/asnt-level-iii-consulting-services">outsourced ASNT Level III cover</a>, ` +
    `<a href="/consulting/written-practice-development">written practice development</a>, ` +
    `<a href="/consulting/ndt-technical-procedure-development">NDT procedure development</a>, ` +
    `<a href="/consulting/ndt-level-3-exam-oversight">examination oversight</a> and ` +
    `<a href="/corporate-ndt-training">employer-sponsored training cohorts</a>. ` +
    `A firm whose Level III has just left should start at <a href="/consulting/ndt-level-3-resigned-what-to-do">what to do when your Level III resigns</a>.` +
    '</p></section>'
  );
  return { html: parts.join('\n'), answer };
}

/**
 * Applies T5 layers to the consulting city family. Skips any city with no
 * research behind it — a padded layer at family scale is 150 doorway pages.
 */
/**
 * The per-city research index, exported so the de-cannibalisation pass builds
 * its title differentiators from exactly the same data this layer renders from.
 * Two sources of truth for "what is true about Houston" is how they drift.
 */
export async function loadConsultingCityData() {
  const [cp, ex] = await Promise.all([
    loadKnowledgeTs('data/city-profiles.ts'),
    loadKnowledgeTs('data/expanded-cities.ts'),
  ]);
  const erpProfiles = cp.ERP_CITY_PROFILES || {};
  const exBySlug = {};
  for (const c of ex.expandedLocations || []) {
    exBySlug[c.slug] = c;
    const short = c.slug.replace(/-[a-z]+$/, '');
    if (!exBySlug[short]) exBySlug[short] = c;
  }
  const suppCompliance = {};
  const { existsSync, readFileSync } = await import('fs');
  const { join, dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const supp = join(dirname(fileURLToPath(import.meta.url)), 'us-consulting-profiles-supplemental.json');
  if (existsSync(supp)) {
    for (const p of JSON.parse(readFileSync(supp, 'utf-8'))) {
      if (!p || !p.slug) continue;
      if (!exBySlug[p.slug]) exBySlug[p.slug] = p;
      if (p.localCompliance && p.localCompliance.length) suppCompliance[p.slug] = p.localCompliance;
    }
  }
  const index = {};
  for (const [slug, c] of Object.entries(exBySlug)) {
    index[slug] = {
      name: c.name,
      country: c.country,
      industrialProfile: c.industrialProfile || '',
      companies: c.companies || [],
      industries: c.industries || [],
      localCompliance: erpProfiles[slug]?.localCompliance || suppCompliance[slug] || [],
    };
  }
  return index;
}

export async function applyConsultingCityLayers(routes) {
  const [cp, ex] = await Promise.all([
    loadKnowledgeTs('data/city-profiles.ts'),
    loadKnowledgeTs('data/expanded-cities.ts'),
  ]);
  const erpProfiles = cp.ERP_CITY_PROFILES || {};

  // expandedLocations keys are "houston-texas"; routes are "houston". Index both
  // so the state-suffixed slug resolves without a hand-maintained alias table.
  const exBySlug = {};
  for (const c of ex.expandedLocations || []) {
    exBySlug[c.slug] = c;
    const short = c.slug.replace(/-[a-z]+$/, '');
    if (!exBySlug[short]) exBySlug[short] = c;
  }

  // US expansion 2026-08-20: the first T5 run skipped 14 US metros that have
  // consulting pages but no entry in expandedLocations — Chicago, Los Angeles,
  // Pittsburgh, New Orleans, Norfolk and the rest, all high-priority under the
  // North-America-first rule. Research agents fill them as JSON so a data drop
  // needs no code change, and they carry localCompliance directly rather than
  // depending on ERP_CITY_PROFILES. Supplemental entries never override the
  // hand-maintained store.
  const { existsSync, readFileSync } = await import('fs');
  const { join, dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const supp = join(dirname(fileURLToPath(import.meta.url)), 'us-consulting-profiles-supplemental.json');
  const suppCompliance = {};
  if (existsSync(supp)) {
    let added = 0;
    for (const p of JSON.parse(readFileSync(supp, 'utf-8'))) {
      if (!p || !p.slug) continue;
      if (!exBySlug[p.slug]) { exBySlug[p.slug] = p; added++; }
      if (p.localCompliance && p.localCompliance.length) suppCompliance[p.slug] = p.localCompliance;
    }
    if (added) console.log(`  (supplemental US consulting profiles merged: ${added})`);
  }

  const out = { applied: 0, skipped: 0, already: 0, us: 0, answers: {} };
  for (const r of routes) {
    if (!r || !r.path || !r.path.startsWith('/consulting/ndt-consulting-')) continue;
    if (!r.bodyContent) continue;
    if (r.bodyContent.includes('data-citation-block="answer"')) { out.already++; continue; }

    const slug = r.path.replace('/consulting/ndt-consulting-', '');
    const exd = exBySlug[slug];
    const erpd = erpProfiles[slug];
    if (!exd && !erpd) { out.skipped++; continue; }

    const d = {
      industrialProfile: exd?.industrialProfile || '',
      companies: exd?.companies || [],
      industries: exd?.industries || [],
      localCompliance: erpd?.localCompliance || suppCompliance[slug] || [],
    };
    // The researched lead is the entire anti-doorway defence. Without it the
    // layer is template-only and the family fails its similarity audit — this
    // is the exact failure T4 hit at 100% similarity, so gate on it.
    if (words(d.industrialProfile) < 25) { out.skipped++; continue; }

    const city = exd?.name || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const { html, answer } = renderConsultingLayer(city, d);

    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
      ? r.bodyContent.replace(/<\/main>\s*$/, `${html}\n  </main>`)
      : `${r.bodyContent}\n${html}`;
    out.applied++;
    if (exd?.country === 'US') out.us++;
    out.answers[slug] = answer;
  }
  return out;
}
