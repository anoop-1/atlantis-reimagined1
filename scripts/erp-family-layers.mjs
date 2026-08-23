/**
 * T6 — ERP family citation layers — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE COHORT
 * The ERP families are the largest unlayered block on the site and the largest
 * pool of wasted crawl:
 *
 *   /ndt-erp-{city}              373 pages · 210 invisible · median 1,685 words
 *   /erp-industries/{ind}[-city] 373 pages · 49 invisible  · median 1,641 words
 *   /erp-modules/{mod}[-city]    348 pages · 52 invisible  · median 1,616 words
 *
 * None of them carried a citation layer. They are emphatically NOT thin — the
 * median page runs past 1,600 words — so this is the "crawled and not chosen"
 * bucket, and the fix is the missing extractable answer, not more prose. This is
 * also the family the permutation-era post-mortem indicted: ERP averaged 0.06
 * clicks/page against 2.14 for blogs. Layering is the test of whether those
 * pages can be made to earn their crawl, run on the cheap template line.
 *
 * THE COMBINATORIAL DOORWAY PROBLEM — AND WHAT THE AUDIT FORCED
 * The first version of this pass layered the module×city and industry×city
 * permutations too, braiding the city's prose with the module's angle. It
 * failed its own audit on both axes and the numbers are worth keeping:
 *
 *   same module, across cities   worst 72%   97 pairs over the 60% gate
 *   same city, across modules    worst 80%  209 pairs over the gate
 *
 * The 80% is the instructive one. /erp-modules/asset-management-london and
 * /erp-modules/corrosion-tracking-london opened with the same forty words of
 * London context and diverged only at the module name. That is not a rendering
 * bug to tune — it is the honest arithmetic of the permutation. Eleven modules
 * across thirty-one cities is 341 pages carrying 42 facts, and no phrasing makes
 * 42 facts fill 341 distinct answers.
 *
 * So the permutations are NOT layered. Only the 23 base module and industry
 * pages get a layer, where the module's own angle is unique by definition. The
 * permutation pages keep their existing bodies and lose nothing.
 *
 * The ndt-erp-{city} pages failed at 72% for a different and fixable reason:
 * many city descriptions in the store are auto-generated boilerplate ("The city
 * requires comprehensive inspection of refinery equipment, chemical plants...")
 * rather than research, so Sitra and Tula produced near-identical blocks. The
 * fix is a self-policing gate: each generated answer is compared against the
 * ones already accepted in its family, and anything above 0.55 is dropped. That
 * degrades gracefully — genuinely researched cities layer, boilerplate ones do
 * not — and it makes the family audit pass by construction rather than by luck.
 *
 * CLAUDE.md §18: no Atlantis price appears in any generated string below. The
 * `roi` field of the knowledge store is deliberately NOT rendered — it carries
 * cost and saving figures that read as commercial claims, and it is not needed
 * for the answer.
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
  for (const s of sents) {
    if (words(out + s) > 70) break;
    out += s;
  }
  return words(out) >= 40 ? out.trim() : text.split(/\s+/).slice(0, 68).join(' ') + '.';
}

/** Researched sentences first, clause-cut when one overruns. Same rule as T4/T5. */
function buildLead(prose, budget = 42) {
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
    if (cl > 50) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  return { lead: lead.trim(), rest: sents.join('').replace(lead, '').trim() };
}

function block(answer, expansion, source, caption, rows, facets, related) {
  const parts = [];
  parts.push(
    '<section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${esc(answer)}</p>` +
    (expansion ? `<p>${esc(expansion)}</p>` : '') +
    `<p><strong>Source:</strong> ${esc(source)}</p>` +
    '</section>'
  );
  parts.push(
    `<figure data-citation-block="table"><table><caption>${esc(caption)}</caption>` +
    '<thead><tr><th scope="col">Factor</th><th scope="col">What applies</th><th scope="col">Why it matters</th></tr></thead><tbody>' +
    rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('') +
    '</tbody></table></figure>'
  );
  for (const f of facets) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  }
  if (related) parts.push(`<section data-citation-block="related"><p>${related}</p></section>`);
  return parts.join('\n');
}

const ERP_RELATED =
  'Related: <a href="/erp">the NDT ERP overview</a>, ' +
  '<a href="/erp/ndt-personnel-certification-tracking">personnel certification tracking</a>, ' +
  '<a href="/erp/ndt-equipment-calibration-tracking-software">equipment calibration tracking</a>, ' +
  '<a href="/erp/ndt-software-quickbooks-integration">QuickBooks integration</a> and ' +
  '<a href="/erp/ndt-software-rfp-requirements-checklist">the RFP requirements checklist</a>. ' +
  'Firms preparing for an audit should also read ' +
  '<a href="/consulting/ndt-program-audit-gap-assessment">the NDT programme gap assessment</a>.';

/* ── /ndt-erp-{city} ──────────────────────────────────────────────────────── */
function renderErpCity(city, d) {
  const { lead, rest } = buildLead(d.industrialProfile);
  const codes = d.localCompliance || [];
  const uses = d.localIndustryUseCases || [];

  const answer = fitBand(
    `${lead} An NDT ERP serving this market has to carry the evidence those operators audit against` +
    (codes.length ? ` — ${list(codes, 4)} — ` : ' — ') +
    'with technician certification, equipment calibration and inspection records tied to the job that used them.'
  );

  let expansion = rest;
  if (uses.length) expansion = `${expansion} In practice that means ${uses[0].charAt(0).toLowerCase() + uses[0].slice(1)}`.trim();
  if (d.companies && d.companies.length) {
    expansion = `${expansion} Operators including ${list(d.companies, 3)} set the pre-qualification bar their contractors inherit.`.trim();
  }
  expansion = `${expansion} The system of record for that evidence is the ERP, not a spreadsheet a technician maintains between jobs.`.trim();
  if (words(expansion) > 165) {
    const s = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let o = '';
    for (const x of s) { if (words(o + x) > 160) break; o += x; }
    expansion = o.trim();
  }

  const rows = [];
  if (d.industries && d.industries.length) rows.push(['Sectors served', list(d.industries, 5), 'Sets which methods, report formats and codes the system must handle']);
  if (codes.length) rows.push(['Codes audited against', list(codes, 6), 'Each demands retrievable evidence, not a claim of compliance']);
  if (uses.length) rows.push(['Typical workflow here', uses[0], 'The job shape the configuration follows']);
  if (uses.length > 1) rows.push(['Second workflow', uses[1], 'Where scheduling and record-keeping usually break down first']);
  rows.push(['What must be retrievable on demand', 'Technician certification currency · equipment calibration status · the report against the asset that generated it', 'These three are what an auditor asks for first']);
  rows.push(['Deployment', 'Cloud or on-premise · configured to the codes above · offline field capture', 'Field crews lose connectivity; the record cannot depend on it']);

  const facets = [
    { q: `What must an NDT ERP track for inspection firms in ${city}?`, a: codes.length
      ? `Evidence against ${list(codes, 5)}. That means each technician's certification currency by method and level, each instrument's calibration status on the day it was used, and every inspection report bound to the asset and the job that produced it. An auditor asks for those three before anything else.`
      : `Technician certification currency by method and level, equipment calibration status on the day of use, and every inspection report bound to the asset and job that produced it. Those three are what an audit asks for first, and they are the three a spreadsheet loses.` },
    { q: `Can an inspection company in ${city} run this alongside its existing accounting?`, a: `Yes. The ERP owns operations — jobs, technicians, equipment, reports — and pushes finished invoices to the accounting system, which keeps the chart of accounts, tax and reconciliation. For US firms that usually means QuickBooks; the split is documented in the QuickBooks integration guide rather than forcing a migration nobody asked for.` },
    { q: `Does it work offline for field crews in ${city}?`, a: `Yes. Field capture runs offline and syncs when the device reconnects, because turnaround decks, tank interiors and remote sites have no usable signal and a record that depends on connectivity is a record that gets rewritten from memory hours later. Offline capture is the difference between a contemporaneous record and a reconstruction.` },
    { q: `How long does implementation take for a firm in ${city}?`, a: `The configuration follows the codes and workflows above rather than a fixed template, so the timeline is set by how much existing data has to be migrated and cleaned — certification records and calibration history are the two that consume the time. Firms usually run the first job cycle in parallel before cutting over.` },
    { q: `What happens to inspection records if a technician leaves?`, a: `They stay with the asset and the job, which is the point. Employer-based certification ends when the holder leaves, but the reports they signed remain part of the asset's inspection history and are still auditable. A system that stores records per technician rather than per asset loses that history on every departure.` },
  ];

  return { html: block(answer, expansion, 'Per-city industrial and compliance research file; ASNT SNT-TC-1A employer certification framework', `NDT ERP in ${city} — what the system has to evidence`, rows, facets, ERP_RELATED), answer };
}

/* ── /erp-modules/{module}[-{city}] and /erp-industries/{ind}[-{city}] ────── */
function renderErpKnowledge(kind, label, k, city, cityData) {
  const codes = (cityData && cityData.localCompliance) || [];
  const kCompliance = Array.isArray(k.compliance) ? k.compliance : (k.compliance ? [k.compliance] : []);

  // City variants lead with the city's researched prose — that is the field that
  // differs across this module's 30-odd siblings. Base pages lead with the
  // module's own angle, which is unique by definition.
  let answer;
  if (city && cityData) {
    const { lead } = buildLead(cityData.industrialProfile, 38);
    answer = fitBand(`${lead} ${k.headline}${k.headline.endsWith('.') ? '' : '.'} ${kCompliance.length ? `It carries the ${list(kCompliance, 3)} evidence this market is audited against.` : ''}`);
  } else {
    const { lead } = buildLead(k.overview, 44);
    answer = fitBand(`${k.headline}${k.headline.endsWith('.') ? '' : '.'} ${lead}`);
  }

  let expansion = String(k.ndtAngle || k.overview || '');
  if (words(expansion) > 165) {
    const s = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let o = '';
    for (const x of s) { if (words(o + x) > 160) break; o += x; }
    expansion = o.trim();
  }
  if (city && cityData && cityData.companies && cityData.companies.length && words(expansion) < 140) {
    expansion = `${expansion} Locally, operators including ${list(cityData.companies, 3)} set the pre-qualification bar contractors inherit.`.trim();
  }

  const caps = Array.isArray(k.capabilities) ? k.capabilities : [];
  const ints = Array.isArray(k.integrations) ? k.integrations : [];
  const rows = [];
  if (caps.length) rows.push(['Core capability', typeof caps[0] === 'string' ? caps[0] : (caps[0].name || caps[0].title || ''), 'What the module does that a spreadsheet cannot']);
  if (caps.length > 1) rows.push(['Second capability', typeof caps[1] === 'string' ? caps[1] : (caps[1].name || caps[1].title || ''), 'Where manual process usually fails first']);
  if (kCompliance.length) rows.push(['Standards evidenced', list(kCompliance, 5), 'Each demands retrievable records, not a compliance claim']);
  if (codes.length) rows.push(['Codes named locally', list(codes, 5), 'What contracts in this market actually specify']);
  if (cityData && cityData.industries && cityData.industries.length) rows.push(['Local sectors served', list(cityData.industries, 5), 'Sets the report formats and methods in scope']);
  if (ints.length) rows.push(['Integrates with', list(ints.map((i) => (typeof i === 'string' ? i : i.name || '')), 4), 'The ERP owns operations; finance and maintenance systems keep their own']);
  rows.push(['Deployment', 'Cloud or on-premise · offline field capture · configured to the standards above', 'Field capture cannot depend on connectivity']);

  const kf = Array.isArray(k.faqs) ? k.faqs : [];
  const facets = kf.slice(0, 4).map((f) => ({
    q: f.question || f.q || '',
    a: (() => {
      const a = String(f.answer || f.a || '');
      if (words(a) <= 80) return a;
      const s = a.match(/[^.!?]+[.!?]+/g) || [a];
      let o = '';
      for (const x of s) { if (words(o + x) > 78) break; o += x; }
      return o.trim() || a.split(/\s+/).slice(0, 78).join(' ') + '.';
    })(),
  })).filter((f) => f.q && f.a);

  if (city) {
    facets.push({
      q: `Is this configured differently for inspection firms in ${city}?`,
      a: codes.length
        ? `The capability set is the same; the configuration follows the codes this market is audited against — ${list(codes, 4)} — because those determine which fields are mandatory, which records must be retained and for how long, and what an auditor asks to see. Configuration is where a generic ERP and an NDT ERP diverge.`
        : `The capability set is the same; the configuration follows the codes named in local contracts, because those determine which fields are mandatory, which records are retained and for how long. Configuration is where a generic ERP and an NDT ERP diverge.`,
    });
  }
  while (facets.length < 4) {
    facets.push({
      q: `What does ${label} replace in an inspection company?`,
      a: 'The spreadsheet-and-inbox arrangement most firms grow into: a certification matrix one person maintains, a calibration list in another file, and job records in a shared drive nobody audits until a client does. The value is not the features, it is that the three stop disagreeing with each other.',
    });
    break;
  }

  const cap = city
    ? `${label} for NDT firms in ${city} — capability and local evidence`
    : `${label} for NDT inspection companies — capability and evidence`;
  return { html: block(answer, expansion, `Atlantis NDT ERP ${kind} configuration notes${city ? '; per-city industrial and compliance research file' : ''}`, cap, rows, facets, ERP_RELATED), answer };
}

/**
 * /erp/{app}-{industry}-{city} — the largest remaining unlayered cohort, and
 * unlike the module×city permutations these EARN: 894 pages carrying 8,502
 * impressions between them, at a median of ~1,700 words.
 *
 * Three axes rather than two is what makes them layerable where module×city was
 * not. A module×city page had 11 modules and 31 cities to distinguish 341 pages;
 * these braid the app's own capability, the industry's compliance regime and the
 * city's researched profile, so there is genuinely more to say per page. The
 * self-policing gate still decides — whatever cannot be made distinct is
 * dropped, exactly as before.
 */
function renderErpTriple(app, industry, city, k, d) {
  const appK = k.appKnowledge?.[app] || k.moduleKnowledge?.[app] || {};
  const indK = k.industryKnowledge?.[industry] || {};
  const codes = (d && d.localCompliance) || [];
  const indCompliance = Array.isArray(indK.compliance) ? indK.compliance : (indK.compliance ? [indK.compliance] : []);

  // Industry angle leads (differs across the app's siblings), the app's own
  // capability follows (differs across the industry's siblings), and the city's
  // codes close (differ across both).
  const indLead = buildLead(indK.ndtAngle || indK.overview || '', 34).lead;
  const appLead = buildLead(appK.headline || appK.overview || '', 22).lead;
  const answer = fitBand(
    (indLead ? `${indLead} ` : '') +
    (appLead ? `${appLead} ` : '') +
    (city && codes.length ? `In ${city} the evidence is audited against ${list(codes, 3)}.` : '')
  );

  let expansion = String(appK.ndtAngle || appK.overview || indK.overview || '');
  if (words(expansion) > 160) {
    const s = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let o = '';
    for (const x of s) { if (words(o + x) > 155) break; o += x; }
    expansion = o.trim();
  }
  if (d && d.companies && d.companies.length && words(expansion) < 140) {
    expansion = `${expansion} Locally, operators including ${list(d.companies, 3)} set the pre-qualification bar contractors inherit.`.trim();
  }

  const caps = Array.isArray(appK.capabilities) ? appK.capabilities : [];
  const indCaps = Array.isArray(indK.capabilities) ? indK.capabilities : [];
  const nameOf = (c) => (typeof c === 'string' ? c : c?.name || c?.title || '');
  const rows = [];
  if (caps.length) rows.push(['What the module does', nameOf(caps[0]), 'The capability this page is about']);
  if (indCaps.length) rows.push(['What the sector needs', nameOf(indCaps[0]), 'Where this industry differs from the others']);
  if (indCompliance.length) rows.push(['Sector standards', list(indCompliance, 5), 'What the records have to satisfy']);
  if (codes.length) rows.push(['Codes named locally', list(codes, 5), 'What contracts in this market specify']);
  if (d && d.industries && d.industries.length) rows.push(['Local sectors', list(d.industries, 5), 'Which methods and report formats are in scope']);
  rows.push(['Deployment', 'Cloud or on-premise · offline field capture · configured to the standards above', 'Field capture cannot depend on connectivity']);

  const facets = [];
  const kf = Array.isArray(indK.faqs) ? indK.faqs : [];
  for (const f of kf.slice(0, 2)) {
    const q = f.question || f.q;
    let a = String(f.answer || f.a || '');
    if (words(a) > 80) {
      const s = a.match(/[^.!?]+[.!?]+/g) || [a];
      let o = '';
      for (const x of s) { if (words(o + x) > 78) break; o += x; }
      a = o.trim() || a;
    }
    if (q && a) facets.push({ q, a });
  }
  facets.push({
    q: city ? `How is this configured for ${industry.replace(/-/g, ' ')} firms in ${city}?` : `How is this configured for ${industry.replace(/-/g, ' ')} firms?`,
    a: codes.length
      ? `The capability set is the same everywhere; the configuration follows the codes this market is audited against — ${list(codes, 4)} — because those decide which fields are mandatory, which records are retained and for how long. Configuration is where a generic ERP and an NDT ERP diverge.`
      : `The capability set is the same everywhere; configuration follows the codes named in local contracts, which decide which fields are mandatory and how long records are retained.`,
  });
  facets.push({
    q: 'What does this replace?',
    a: 'The spreadsheet-and-inbox arrangement most firms grow into: a certification matrix one person maintains, a calibration list in another file, and job records in a shared drive nobody audits until a client does. The value is not the feature list, it is that the three stop disagreeing with each other.',
  });

  const label = `${titleCaseWords(app)} for ${titleCaseWords(industry)}${city ? ` in ${city}` : ''}`;
  return {
    html: block(answer, expansion, `Atlantis NDT ERP configuration notes${city ? '; per-city industrial and compliance research file' : ''}`,
      `${label} — capability, sector standards and local evidence`, rows, facets, ERP_RELATED),
    answer,
  };
}

const titleCaseWords = (s) => String(s).split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

export async function applyErpFamilyLayers(routes) {
  const [k, ex] = await Promise.all([loadKnowledge(), loadKnowledgeTs('data/expanded-cities.ts')]);
  const erpProfiles = k.ERP_CITY_PROFILES || {};

  const cityData = {};
  const put = (slug, o) => { if (slug && !cityData[slug]) cityData[slug] = o; };
  for (const c of ex.expandedLocations || []) {
    const o = { industrialProfile: c.industrialProfile, companies: c.companies, industries: c.industries, localCompliance: [], name: c.name };
    put(c.slug, o);
    put(c.slug.replace(/-[a-z]+$/, ''), o);
  }
  // Research drops from the T4/T5 agent batches — same files, reused.
  const { existsSync, readFileSync } = await import('fs');
  const { join, dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const here = dirname(fileURLToPath(import.meta.url));
  for (const f of ['us-consulting-profiles-supplemental.json', 'us-city-profiles-supplemental.json']) {
    const p = join(here, f);
    if (!existsSync(p)) continue;
    for (const r of JSON.parse(readFileSync(p, 'utf-8'))) {
      if (!r || !r.slug) continue;
      const prose = r.industrialProfile || r.localContext;
      if (!prose) continue;
      put(r.slug, { industrialProfile: prose, companies: r.companies || [], industries: r.industries || [], localCompliance: r.localCompliance || [], name: r.name || r.city });
    }
  }
  // ERP_CITY_PROFILES contributes the compliance list and the local workflows.
  for (const [slug, p] of Object.entries(erpProfiles)) {
    const base = cityData[slug] || { industrialProfile: '', companies: [], industries: [], localCompliance: [] };
    cityData[slug] = {
      ...base,
      localCompliance: p.localCompliance || base.localCompliance || [],
      localIndustryUseCases: p.localIndustryUseCases || [],
      industrialProfile: base.industrialProfile || (p.localIndustryUseCases || []).join(' '),
    };
  }

  const modKeys = Object.keys(k.moduleKnowledge || {}).sort((a, b) => b.length - a.length);
  const indKeys = Object.keys(k.industryKnowledge || {}).sort((a, b) => b.length - a.length);
  const titleCase = (s) => s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const out = { erpCity: 0, modules: 0, industries: 0, triples: 0, skippedPermutation: 0, skippedThin: 0, skippedSimilar: 0, already: 0, answers: {} };
  const appKeys = Object.keys({ ...(k.appKnowledge || {}), ...(k.moduleKnowledge || {}) }).sort((a, b) => b.length - a.length);
  const indKeysAll = Object.keys(k.industryKnowledge || {}).sort((a, b) => b.length - a.length);

  // Self-policing similarity gate. Each accepted answer joins the family's
  // fingerprint set; a new answer that matches any of them above the threshold
  // is dropped rather than shipped. This is what makes the family audit pass by
  // construction — the alternative is generating everything, auditing after the
  // build, and hand-removing the failures on every future data change.
  const GATE = 0.55;
  const accepted = { erpcity: [], triple: [] };
  const tooSimilar = (family, answer) => {
    const bag = accepted[family];
    if (!bag) return false;
    for (const prev of bag) if (shingleSimilarity(answer, prev) > GATE) return true;
    return false;
  };

  for (const r of routes) {
    if (!r || !r.path || !r.bodyContent) continue;
    if (r.bodyContent.includes('data-citation-block="answer"')) { out.already++; continue; }

    let rendered = null;
    let key = null;

    if (/^\/ndt-erp-/.test(r.path)) {
      const slug = r.path.replace('/ndt-erp-', '');
      const d = cityData[slug];
      if (!d || words(d.industrialProfile) < 25) { out.skippedThin++; continue; }
      rendered = renderErpCity(d.name || titleCase(slug), d);
      if (tooSimilar('erpcity', rendered.answer)) { out.skippedSimilar++; continue; }
      accepted.erpcity.push(rendered.answer);
      key = `erpcity:${slug}`;
      out.erpCity++;
    } else if (r.path.startsWith('/erp-modules/')) {
      const rest = r.path.replace('/erp-modules/', '');
      const mk = modKeys.find((m) => rest === m || rest.startsWith(m + '-'));
      // Permutation pages are deliberately NOT layered — see the header. Eleven
      // modules across thirty-one cities is 341 pages carrying 42 facts.
      if (!mk || rest !== mk) { out.skippedPermutation++; continue; }
      rendered = renderErpKnowledge('module', titleCase(mk), k.moduleKnowledge[mk], null, null);
      key = `mod:${rest}`;
      out.modules++;
    } else if (r.path.startsWith('/erp-industries/')) {
      const rest = r.path.replace('/erp-industries/', '');
      const ik = indKeys.find((m) => rest === m || rest.startsWith(m + '-'));
      if (!ik || rest !== ik) { out.skippedPermutation++; continue; }
      rendered = renderErpKnowledge('industry', titleCase(ik), k.industryKnowledge[ik], null, null);
      key = `ind:${rest}`;
      out.industries++;
    } else if (r.path.startsWith('/erp/')) {
      // /erp/{app}-{industry}-{city}. Three axes, so unlike the two-axis
      // permutations these carry enough distinct material to layer — and they
      // have measured demand, 8,502 impressions across 894 pages.
      const rest = r.path.replace('/erp/', '');
      const ak = appKeys.find((a) => rest === a || rest.startsWith(a + '-'));
      if (!ak) { out.skippedThin++; continue; }
      const afterApp = rest === ak ? '' : rest.slice(ak.length + 1);
      const ik2 = indKeysAll.find((i) => afterApp === i || afterApp.startsWith(i + '-'));
      if (!ik2) { out.skippedThin++; continue; }
      const citySlug = afterApp === ik2 ? null : afterApp.slice(ik2.length + 1);
      const d = citySlug ? cityData[citySlug] : null;
      const cityName = d ? (d.name || titleCase(citySlug)) : (citySlug ? titleCase(citySlug) : null);
      rendered = renderErpTriple(ak, ik2, cityName, k, d);
      if (tooSimilar('triple', rendered.answer)) { out.skippedSimilar++; continue; }
      accepted.triple.push(rendered.answer);
      key = `triple:${rest}`;
      out.triples++;
    }

    if (!rendered) continue;
    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
      ? r.bodyContent.replace(/<\/main>\s*$/, `${rendered.html}\n  </main>`)
      : `${r.bodyContent}\n${rendered.html}`;
    out.answers[key] = rendered.answer;
  }
  return out;
}
