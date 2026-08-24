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

/**
 * {industry|module} × {city}, layered ONLY where the city has researched data.
 *
 * These were refused outright when this pass was first written, at 72% and 80%
 * similarity, and the refusal was right at the time: the city store was mostly
 * auto-generated boilerplate, so the "city" half of the answer carried no real
 * information. 601 of these pages hold 5,920 measured impressions between them,
 * which is a lot of demand to leave sitting on unextractable pages.
 *
 * Two things changed. The store now holds 130 researched city profiles naming
 * real plants and the codes actually written into local contracts. And the
 * -for- pass proved the three-part structure: an answer built from a
 * COMBINATION element plus one element per axis overlaps a sibling on about a
 * third rather than a half, which clears the gate honestly.
 *
 * The combination element here is the intersection of what this city is audited
 * against and what this industry must evidence — genuinely different for every
 * (industry, city) pair, and the thing a buyer in that pair actually needs.
 * Cities without research are still skipped; the gate still drops whatever
 * collides.
 */
function renderAxisCity(axisKey, axisKnowledge, axisLabel, city, d, isIndustry) {
  const cityCodes = (d.localCompliance || []).filter(Boolean);
  const axisComp = Array.isArray(axisKnowledge.compliance)
    ? axisKnowledge.compliance
    : (axisKnowledge.compliance ? [axisKnowledge.compliance] : []);

  // Element 1 — the COMBINATION. What this sector, in this city, answers to.
  const shared = cityCodes.filter((c) => axisComp.some((a) => String(a).toLowerCase().includes(String(c).toLowerCase().split(' ')[0])));
  const comboCodes = shared.length ? shared : cityCodes;
  const combo = comboCodes.length
    ? `${axisLabel} work in ${city} is audited against ${list(comboCodes, 3)}.`
    : `${axisLabel} work in ${city} is audited against the codes named in local contracts.`;
  // Element 2 — the CITY.
  const cityPart = buildLead(d.industrialProfile, 26).lead;
  // Element 3 — the AXIS (industry or module).
  const axisPart = buildLead(axisKnowledge.ndtAngle || axisKnowledge.overview || axisKnowledge.headline || '', 22).lead;

  const answer = fitBand(`${combo} ${cityPart} ${axisPart}`.replace(/\s+/g, ' ').trim());

  let expansion = String(axisKnowledge.ndtAngle || axisKnowledge.overview || '');
  if (words(expansion) > 110) expansion = expansion.split(/\s+/).slice(0, 108).join(' ') + '.';
  if ((d.companies || []).length) {
    expansion = `${expansion} Locally, operators including ${list(d.companies, 3)} set the pre-qualification bar contractors inherit.`.trim();
  }
  expansion = expansion.split(/\s+/).slice(0, 165).join(' ');

  const nameOf = (c) => (typeof c === 'string' ? c : c?.name || c?.title || '');
  const caps = (Array.isArray(axisKnowledge.capabilities) ? axisKnowledge.capabilities : []).map(nameOf).filter(Boolean);
  const rows = [];
  if (cityCodes.length) rows.push(['Codes named in this market', list(cityCodes, 5), 'What local contracts actually specify']);
  if (axisComp.length) rows.push([isIndustry ? 'Sector standards' : 'Standards evidenced', list(axisComp, 5), 'What the records must satisfy']);
  if (caps.length) rows.push([isIndustry ? 'What this sector needs' : 'What the module does', caps[0], 'The capability this page is about']);
  if ((d.industries || []).length) rows.push(['Local sectors', list(d.industries, 5), 'Firms working across them answer to more than one regime']);
  if ((d.companies || []).length) rows.push(['Operators setting the bar', list(d.companies, 4), 'Pre-qualification flows down to every contractor bidding']);
  rows.push(['Deployment', 'Cloud or on-premise · offline field capture · configured to the codes above', 'Field capture cannot depend on connectivity']);

  const facets = [];
  for (const f of (Array.isArray(axisKnowledge.faqs) ? axisKnowledge.faqs : []).slice(0, 3)) {
    const q = f.question || f.q;
    let a = String(f.answer || f.a || '');
    if (words(a) > 80) a = a.split(/\s+/).slice(0, 78).join(' ') + '.';
    if (q && a) facets.push({ q, a });
  }
  facets.push({
    q: `What is ${axisLabel.toLowerCase()} inspection in ${city} audited against?`,
    a: comboCodes.length
      ? `${list(comboCodes, 5)}. Those decide which fields are mandatory, what has to be retained and for how long. A configuration built for a different market collects the right data in the wrong shape — fine in daily use, and a finding at audit.`
      : `The codes named in local contracts and by the asset owners operating here. They decide which fields are mandatory and how long records are retained.`,
  });

  return {
    html: block(answer, expansion,
      `Atlantis NDT ERP configuration notes; per-city industrial and compliance research file`,
      `${axisLabel} in ${city} — local codes, sector standards and evidence`,
      rows, facets, ERP_RELATED),
    answer,
  };
}

/**
 * {module}-for-{industry} needs its own renderer, and the reason is arithmetic.
 *
 * Reusing the triple renderer gave 7 layered pages out of 192, with 333 dropped.
 * That was correct behaviour, not a bug: an answer built from two components of
 * roughly equal length shares ~50-60% of its shingles with any sibling holding
 * one component in common, which sits right on the 0.55 gate. Eleven modules
 * across twelve industries cannot survive a two-component answer.
 *
 * The fix is a THIRD element that varies with the combination rather than with
 * either axis — a sentence stating what this specific module does for this
 * specific industry, drawn from the module's capability and the industry's own
 * compliance regime together. With three roughly equal parts, two siblings
 * sharing one axis overlap on about a third, which clears the gate honestly
 * instead of by loosening it.
 */
function renderModuleForIndustry(modKey, indKey, k) {
  const m = k.moduleKnowledge?.[modKey] || k.appKnowledge?.[modKey] || {};
  const ind = k.industryKnowledge?.[indKey] || {};
  const mLabel = titleCaseWords(modKey);
  const iLabel = titleCaseWords(indKey);
  const nameOf = (c) => (typeof c === 'string' ? c : c?.name || c?.title || '');
  const mCaps = (Array.isArray(m.capabilities) ? m.capabilities : []).map(nameOf).filter(Boolean);
  const iComp = Array.isArray(ind.compliance) ? ind.compliance : (ind.compliance ? [ind.compliance] : []);
  const iCaps = (Array.isArray(ind.capabilities) ? ind.capabilities : []).map(nameOf).filter(Boolean);

  // Element 1 — varies with the COMBINATION.
  const combo = iComp.length
    ? `${mLabel} in a ${iLabel.toLowerCase()} firm is the record ${list(iComp, 2)} is audited against.`
    : `${mLabel} in a ${iLabel.toLowerCase()} firm is where that sector's evidence is kept.`;
  // Element 2 — varies with the MODULE.
  const modPart = mCaps.length ? `The module handles ${mCaps[0].charAt(0).toLowerCase() + mCaps[0].slice(1)}.` : buildLead(m.headline || '', 20).lead;
  // Element 3 — varies with the INDUSTRY.
  const indPart = buildLead(ind.ndtAngle || ind.overview || '', 22).lead;

  const answer = fitBand(`${combo} ${modPart} ${indPart}`.replace(/\s+/g, ' ').trim());

  let expansion = String(m.ndtAngle || m.overview || '');
  if (words(expansion) > 120) {
    const s = expansion.match(/[^.!?]+[.!?]+/g) || [expansion];
    let o = '';
    for (const x of s) { if (words(o + x) > 115) break; o += x; }
    expansion = o.trim();
  }
  if (iCaps.length) expansion = `${expansion} For ${iLabel.toLowerCase()} specifically: ${iCaps[0]}.`.trim();
  expansion = expansion.split(/\s+/).slice(0, 165).join(' ');

  const rows = [];
  if (mCaps.length) rows.push(['What the module does', mCaps[0], 'The capability this page is about']);
  if (mCaps.length > 1) rows.push(['Second capability', mCaps[1], 'Where manual process fails first']);
  if (iCaps.length) rows.push(['What this sector needs', iCaps[0], `Where ${iLabel.toLowerCase()} differs from every other sector`]);
  if (iComp.length) rows.push(['Standards evidenced', list(iComp, 5), 'What the records must satisfy at audit']);
  const ints = (Array.isArray(m.integrations) ? m.integrations : []).map(nameOf).filter(Boolean);
  if (ints.length) rows.push(['Integrates with', list(ints, 4), 'The ERP owns operations; finance keeps its own']);
  rows.push(['Deployment', 'Cloud or on-premise · offline field capture · configured to the standards above', 'Field capture cannot depend on connectivity']);

  const facets = [];
  for (const f of (Array.isArray(ind.faqs) ? ind.faqs : []).slice(0, 2)) {
    const q = f.question || f.q;
    let a = String(f.answer || f.a || '');
    if (words(a) > 80) a = a.split(/\s+/).slice(0, 78).join(' ') + '.';
    if (q && a) facets.push({ q, a });
  }
  for (const f of (Array.isArray(m.faqs) ? m.faqs : []).slice(0, 2)) {
    const q = f.question || f.q;
    let a = String(f.answer || f.a || '');
    if (words(a) > 80) a = a.split(/\s+/).slice(0, 78).join(' ') + '.';
    if (q && a) facets.push({ q, a });
  }
  facets.push({
    q: `Why does ${iLabel.toLowerCase()} need ${mLabel.toLowerCase()} configured differently?`,
    a: iComp.length
      ? `Because the records have to satisfy ${list(iComp, 4)}, and those decide which fields are mandatory, what has to be retained and for how long. A generic configuration collects the right data in the wrong shape, which passes daily use and fails at audit.`
      : `Because the sector's own standards decide which fields are mandatory and how long records are retained. A generic configuration collects the right data in the wrong shape — fine in daily use, and a finding at audit.`,
  });

  return {
    html: block(answer, expansion,
      `Atlantis NDT ERP module configuration notes for ${iLabel.toLowerCase()}`,
      `${mLabel} for ${iLabel} — capability, sector standards and evidence`,
      rows, facets, ERP_RELATED),
    answer,
  };
}

export async function applyErpFamilyLayers(routes) {
  const [k, ex] = await Promise.all([loadKnowledge(), loadKnowledgeTs('data/expanded-cities.ts')]);
  const erpProfiles = k.ERP_CITY_PROFILES || {};

  const cityData = {};
  const put = (slug, o) => { if (slug && !cityData[slug]) cityData[slug] = o; };
  for (const c of ex.expandedLocations || []) {
    const o = { industrialProfile: c.industrialProfile, companies: c.companies, industries: c.industries, localCompliance: [], name: c.name, country: c.country };
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
      put(r.slug, { industrialProfile: prose, companies: r.companies || [], industries: r.industries || [], localCompliance: r.localCompliance || [], name: r.name || r.city, country: r.country || 'US' });
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

  const out = { erpCity: 0, modules: 0, industries: 0, triples: 0, newRoutes: 0, skippedPermutation: 0, skippedThin: 0, skippedSimilar: 0, already: 0, answers: {} };

  // NEW US ERP CITY PAGES 2026-08-20. The 80-city research drop covers US
  // industrial cities that have no /ndt-erp-{city} page at all. Same reasoning
  // as the consulting pass: layering cannot reach a page that does not exist,
  // and the research is what makes the page worth having. Gated on profile
  // depth and on similarity to its siblings.
  // ONE accepted bag shared with the layering loop below. The first version kept
  // a separate list for new routes, so a new page was checked against other new
  // pages but never against an already-layered sibling — Richmond, California
  // and Rodeo shipped at 66%, two neighbouring Bay Area refinery towns. Both
  // paths now police against the same set.
  const GATE = 0.55;
  const accepted = { erpcity: [], triple: [], modfor: [], axiscity: [] };
  const tooSimilar = (family, answer) => {
    const bag = accepted[family];
    if (!bag) return false;
    for (const prev of bag) if (shingleSimilarity(answer, prev) > GATE) return true;
    return false;
  };

  {
    const have = new Set(routes.filter((r) => r && r.path).map((r) => r.path));
    for (const [slug, d] of Object.entries(cityData)) {
      const path = `/ndt-erp-${slug}`;
      if (have.has(path)) continue;
      if (d.country && d.country !== 'US') continue;
      if (words(d.industrialProfile) < 45) continue;
      if (!(d.companies || []).length || !(d.localCompliance || []).length) continue;

      const city = d.name || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const rendered = renderErpCity(city, d);
      if (tooSimilar('erpcity', rendered.answer)) { out.skippedSimilar++; continue; }
      accepted.erpcity.push(rendered.answer);

      routes.push({
        path,
        title: `Inspection Management Software ${city} — Compliance Tracking`.slice(0, 70),
        description: `Certification tracking, equipment calibration and audit-ready records for inspection companies in ${city}, configured to ${(d.localCompliance || []).slice(0, 2).join(' and ')}.`.slice(0, 165),
        h1: `Inspection Management Software for ${city}`,
        bodyContent:
          '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">Software</a>' +
          '<a href="/compliance">Compliance</a><a href="/contact">Contact</a></nav></header>\n' +
          '  <main>\n' +
          `    <h1>Inspection Management Software for ${esc(city)}</h1>\n` +
          `    <p>${esc(d.industrialProfile)}</p>\n` +
          rendered.html + '\n' +
          '  </main>',
      });
      out.newRoutes++;
      out.answers[`new:${slug}`] = rendered.answer;
    }
  }
  const appKeys = Object.keys({ ...(k.appKnowledge || {}), ...(k.moduleKnowledge || {}) }).sort((a, b) => b.length - a.length);
  const indKeysAll = Object.keys(k.industryKnowledge || {}).sort((a, b) => b.length - a.length);

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
      if (!mk) { out.skippedPermutation++; continue; }

      // {module}-for-{industry} — a pattern I was mis-reading. The audit
      // surfaced "for-pipeline-integrity-services" as a CITY name, which is what
      // exposed it. These are not city permutations at all: 11 modules across 12
      // industries is 132 combinations, each drawing on two rich knowledge
      // stores (the module's capabilities and the industry's compliance regime),
      // and they carry 1,389 measured impressions. Genuinely differentiable,
      // unlike module×city, so they get layered.
      const after = rest === mk ? '' : rest.slice(mk.length + 1);
      if (after.startsWith('for-')) {
        const indSlug = after.slice(4);
        const ikFor = indKeysAll.find((i) => indSlug === i);
        if (!ikFor) { out.skippedPermutation++; continue; }
        rendered = renderModuleForIndustry(mk, ikFor, k);
        if (tooSimilar('modfor', rendered.answer)) { out.skippedSimilar++; continue; }
        (accepted.modfor ||= []).push(rendered.answer);
        key = `modfor:${rest}`;
        out.triples++;
      } else {
        if (rest === mk) {
          rendered = renderErpKnowledge('module', titleCase(mk), k.moduleKnowledge[mk], null, null);
          key = `mod:${rest}`;
          out.modules++;
        } else {
          // module×city — layered only where the city has researched data.
          const citySlug = rest.slice(mk.length + 1);
          const cd = cityData[citySlug];
          if (!cd || words(cd.industrialProfile) < 28) { out.skippedPermutation++; continue; }
          rendered = renderAxisCity(mk, k.moduleKnowledge[mk] || {}, titleCase(mk), cd.name || titleCase(citySlug), cd, false);
          if (tooSimilar('axiscity', rendered.answer)) { out.skippedSimilar++; continue; }
          (accepted.axiscity ||= []).push(rendered.answer);
          key = `modcity:${rest}`;
          out.triples++;
        }
      }
    } else if (r.path.startsWith('/erp-industries/')) {
      const rest = r.path.replace('/erp-industries/', '');
      const ik = indKeys.find((m) => rest === m || rest.startsWith(m + '-'));
      if (!ik) { out.skippedPermutation++; continue; }
      if (rest === ik) {
        rendered = renderErpKnowledge('industry', titleCase(ik), k.industryKnowledge[ik], null, null);
        key = `ind:${rest}`;
        out.industries++;
      } else {
        const citySlug = rest.slice(ik.length + 1).replace(/^for-/, '');
        const cd = cityData[citySlug];
        if (!cd || words(cd.industrialProfile) < 28) { out.skippedPermutation++; continue; }
        rendered = renderAxisCity(ik, k.industryKnowledge[ik] || {}, titleCase(ik), cd.name || titleCase(citySlug), cd, true);
        if (tooSimilar('axiscity', rendered.answer)) { out.skippedSimilar++; continue; }
        (accepted.axiscity ||= []).push(rendered.answer);
        key = `indcity:${rest}`;
        out.triples++;
      }
    } else if (r.path.startsWith('/erp/')) {
      // /erp/{app}-{industry}-{city}. Three axes, so unlike the two-axis
      // permutations these carry enough distinct material to layer — and they
      // have measured demand, 8,502 impressions across 894 pages.
      const rest = r.path.replace('/erp/', '');
      const ak = appKeys.find((a) => rest === a || rest.startsWith(a + '-'));
      if (!ak) { out.skippedThin++; continue; }
      let afterApp = rest === ak ? '' : rest.slice(ak.length + 1);
      // Same connector forms appear here: "{app}-for-{industry}" and
      // "{app}-erp-for-{country}". Strip the connector so the industry or the
      // place resolves instead of being read as part of the slug.
      const hadFor = /^(erp-)?for-/.test(afterApp);
      afterApp = afterApp.replace(/^erp-for-/, '').replace(/^for-/, '');
      const ik2 = indKeysAll.find((i) => afterApp === i || afterApp.startsWith(i + '-'));
      if (!ik2) {
        // No industry: this is {app}-erp-for-{country}. Treat the remainder as a
        // place and layer it only where that place has researched data.
        const placeD = cityData[afterApp];
        if (!placeD || words(placeD.industrialProfile) < 28) { out.skippedThin++; continue; }
        rendered = renderErpCity(placeD.name || titleCase(afterApp), placeD);
        if (tooSimilar('erpcity', rendered.answer)) { out.skippedSimilar++; continue; }
        accepted.erpcity.push(rendered.answer);
        r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
          ? r.bodyContent.replace(/<\/main>\s*$/, `${rendered.html}\n  </main>`)
          : `${r.bodyContent}\n${rendered.html}`;
        out.triples++;
        out.answers[`appfor:${rest}`] = rendered.answer;
        continue;
      }
      const citySlug = afterApp === ik2 ? null : afterApp.slice(ik2.length + 1);
      const d = citySlug ? cityData[citySlug] : null;
      const cityName = d ? (d.name || titleCase(citySlug)) : (citySlug ? titleCase(citySlug) : null);

      // A "{app}-for-{industry}" page under /erp/ is the SAME KIND of page as
      // "{module}-for-{industry}" under /erp-modules/, so it goes through the
      // same renderer and — this is the part that was wrong — the same gate bag.
      // Routing them separately meant work-order-management-for-construction and
      // field-service-for-construction were never compared, and shipped at 94%.
      if (hadFor && !citySlug) {
        rendered = renderModuleForIndustry(ak, ik2, k);
        if (tooSimilar('modfor', rendered.answer)) { out.skippedSimilar++; continue; }
        (accepted.modfor ||= []).push(rendered.answer);
        r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
          ? r.bodyContent.replace(/<\/main>\s*$/, `${rendered.html}
  </main>`)
          : `${r.bodyContent}
${rendered.html}`;
        out.triples++;
        out.answers[`appfor:${rest}`] = rendered.answer;
        continue;
      }

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
