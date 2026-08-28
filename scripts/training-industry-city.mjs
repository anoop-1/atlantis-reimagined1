/**
 * NDT Training — industry × city. 2026-08-25.
 * ─────────────────────────────────────────────────────────────────────────────
 * Training is the best-converting segment on the site: 2.36% CTR against 1.05%
 * for ERP, and 126 impressions per page against 12. It had no industry × city
 * family, which the consulting side has had since 2026-08-20.
 *
 * SAME GATE AS THE CONSULTING PASS, and for the same reason: a page exists only
 * where the CITY'S OWN researched profile lists that industry. The data decides
 * the matrix. Aerospace training in Wichita is a real page because the Wichita
 * research names Spirit AeroSystems and Textron; aerospace training in Whiting
 * is not, because Whiting's research names a refinery.
 *
 * ON METHOD AND LEVEL. The owner asked for industry, method, level and city
 * pages. Method and level are handled as CONTENT here rather than as further
 * page axes, deliberately. Eight sectors × ten methods × three levels × ninety
 * cities is 21,600 pages carrying maybe 200 facts, which is the doorway shape
 * this site has already been penalised for and which the ERP module×city pass
 * failed at 80% similarity. A technician searching "PAUT Level II training
 * Houston" is served better by one page that covers the methods that sector
 * actually runs and the Level I→II→III progression through them than by three
 * near-identical pages split by level. The sector decides which methods matter,
 * and that is real information rather than a permutation.
 *
 * CLAUDE.md §18: no Atlantis price appears in any generated string. Third-party
 * exam fees and salary bands are permitted elsewhere on the site but are not
 * asserted here, because they are not in this data store.
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
function buildLead(prose, budget = 42) {
  const sents = String(prose || '').trim().match(/[^.!?]+[.!?]+/g) || [];
  let lead = '';
  for (const s of sents) { if (words(lead + s) > budget) break; lead += s; }
  if (!lead && sents.length) {
    const w = sents[0].split(/\s+/);
    let cut = w.slice(0, budget - 4).join(' ');
    const cl = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'), cut.lastIndexOf(' — '));
    if (cl > 45) cut = cut.slice(0, cl);
    lead = cut.replace(/[,;\s—]+$/, '') + '.';
  }
  return { lead: lead.trim(), rest: sents.join('').replace(lead, '').trim() };
}

/**
 * What TRAINING each sector actually needs. Distinct from the consulting
 * sector map: that one describes what the Level III signs, this one describes
 * what a cohort has to be able to do on Monday.
 */
const SECTORS = {
  aerospace: {
    match: /aerospace|aviation|space|defen[cs]e|missile/i,
    label: 'Aerospace',
    scheme: 'NAS 410 rather than SNT-TC-1A, because the primes flow that down',
    methods: 'PT and MT first — they carry most aerospace part volume — then UT, RT and ET',
    levelNote: 'NAS 410 demands materially more formal training hours than SNT-TC-1A for the same level in several methods, so a technician moving into aerospace from refinery work retrains rather than transfers.',
    cohort: 'process-line technicians and inspectors working to technique sheets written per part number',
    related: '/nas-410-certification-requirements',
  },
  nuclear: {
    match: /nuclear/i,
    label: 'Nuclear',
    scheme: 'ASNT CP-189, which is binding where SNT-TC-1A is advisory',
    methods: 'UT and PAUT for in-service inspection, with RT, VT and ET alongside',
    levelNote: 'CP-189 requires re-examination to recertify — accumulated experience alone does not renew a certificate, which is the difference that catches firms entering nuclear from other sectors.',
    cohort: 'in-service inspection crews and vendor-supply-chain technicians working under a Section XI programme',
    related: '/blog/asnt-snt-tc-1a-vs-cp-189-comparison',
  },
  refining: {
    match: /refin|petrochemical|petroleum|chemical|oil.?&?.?gas|olefin|polymer|plastics/i,
    label: 'Refining and petrochemical',
    scheme: 'ASNT SNT-TC-1A employer certification, with the owner auditing the written practice',
    methods: 'UT thickness and PAUT dominate turnaround scopes, with RT, MT, PT and VT alongside',
    levelNote: 'Level II is the working grade on a turnaround: it interprets and reports to an approved procedure, which is what the owner audits at the gate before mobilisation.',
    cohort: 'turnaround crews who must be certified and current before the mobilisation window, not during it',
    related: '/consulting/osha-psm-mechanical-integrity-ndt',
  },
  pipeline: {
    match: /pipeline|midstream|terminal|transmission/i,
    label: 'Pipeline and midstream',
    scheme: 'SNT-TC-1A employer certification alongside operator qualification under the PHMSA regime',
    methods: 'RT and automated UT for girth welds, with MT, PT and MFL for integrity work',
    levelNote: 'Girth-weld acceptance is the record that resurfaces years later during an integrity dig, so the technician, the level and the procedure in force that day all have to be traceable.',
    cohort: 'construction spread crews and integrity technicians working to API 1104 acceptance',
    related: '/consulting/pipeline-ndt-consulting-tulsa',
  },
  maritime: {
    match: /maritime|marine|shipbuild|shipyard|port|dock|offshore/i,
    label: 'Maritime and offshore',
    scheme: 'SNT-TC-1A employer certification, with class societies adding their own operator approval on top',
    methods: 'UT thickness measurement above all, with VT, MT and PT for structure and welds',
    levelNote: 'Class requires a supervisor holding Level II under a recognised scheme and a documented period of tutored on-the-job training per operator — the operator file is where firms fail the audit, not the technique.',
    cohort: 'gauging operators working class survey scopes and yard weld inspectors',
    related: '/consulting/utm-operator-qualification-class-approval',
  },
  power: {
    match: /power|energy|utilit|electric|turbine|generation/i,
    label: 'Power generation',
    scheme: 'SNT-TC-1A employer certification against the utility\'s own supplier qualification',
    methods: 'UT and PAUT for boiler tubes and headers, with RT, MT, PT and ET across the plant',
    levelNote: 'Outage windows are fixed years ahead, so certification currency is planned against the outage calendar rather than the anniversary of the certificate.',
    cohort: 'outage crews mobilising to a fixed date with no tolerance for a lapsed certification',
    related: '/consulting/energy-utilities-ndt-consulting',
  },
  steel: {
    match: /steel|metal|foundry|forge|mill|manufactur|fabricat|machin|heavy equipment|automotive/i,
    label: 'Steel and heavy fabrication',
    scheme: 'SNT-TC-1A employer certification, frequently paired with AWS CWI on the welding side',
    methods: 'UT and RT for volumetric weld examination, with MT, PT and VT on the shop floor',
    levelNote: 'The CWI and the NDT Level II are different credentials doing different jobs — one accepts the weld against the code, the other performs and interprets the examination — and shops that conflate them collect findings.',
    cohort: 'shop inspectors and fabrication QC staff working to AWS D1.1 acceptance',
    related: '/compare/aws-cwi-vs-api-577-vs-asnt-level-ii',
  },
  rail: {
    match: /rail|locomotive|tank car|intermodal/i,
    label: 'Rail',
    scheme: 'SNT-TC-1A employer certification inside an AAR M-1003 quality system',
    methods: 'UT for wheels, axles and tank shells, with MT, PT and VT for components',
    levelNote: 'M-1003 certification gates the ability to do the work at all, so a lapse stops the shop rather than merely generating a finding — certification currency is a production issue.',
    cohort: 'tank car repair and wheel shop technicians inside a certified facility',
    related: '/consulting/aar-m-1003-ndt-tank-car-facility',
  },
};

function sectorFor(industry) {
  for (const [key, s] of Object.entries(SECTORS)) if (s.match.test(industry)) return { key, ...s };
  return null;
}

function render(city, d, sec) {
  const { lead, rest } = buildLead(d.industrialProfile, 40);
  const firms = (d.companies || []).filter(Boolean);

  const answer = fitBand(
    `${lead} Training for ${sec.label.toLowerCase()} work here certifies under ${clampWords(sec.scheme, 16)}, and the methods that matter are ${clampWords(sec.methods, 14)}.`
  );

  let expansion = rest;
  if (firms.length) expansion = `${expansion} Employers including ${list(firms, 3)} set the qualification bar their contractors inherit.`.trim();
  expansion = `${expansion} ${sec.levelNote}`.trim();
  expansion = clampWords(expansion, 165);

  const rows = [
    ['Certification scheme', clampWords(sec.scheme, 18), 'Decides the training hours and who signs the certificate'],
    ['Methods to train first', clampWords(sec.methods, 18), 'Sector demand, not a generic method list'],
    ['Who the cohort is', clampWords(sec.cohort, 18), 'Shapes the delivery format and the schedule'],
    ['Level I', 'Performs set-ups and records results under supervision', 'Entry grade; cannot interpret or accept'],
    ['Level II', 'Interprets and reports to an approved procedure', 'The working grade — what employers audit for'],
    ['Level III', 'Approves procedures, qualifies personnel, signs the written practice', 'One per programme, and their method scope is the constraint'],
  ];
  if (firms.length) rows.push(['Local employers', list(firms, 4), 'Where trained technicians actually work here']);
  rows.push(['Delivery', 'On-site at the employer\'s facility · arranged venue · blended online theory with in-person practical', 'The practical cannot be done remotely under any recognised scheme']);

  const facets = [
    { q: `Which NDT methods should a ${sec.label.toLowerCase()} cohort in ${city} train first?`, a: `${sec.methods.charAt(0).toUpperCase() + sec.methods.slice(1)}. Training the methods the sector actually runs puts technicians on chargeable work sooner than working through a generic method list, and it matches what the local employers audit for.` },
    { q: `Which certification scheme applies to ${sec.label.toLowerCase()} training in ${city}?`, a: `${sec.scheme.charAt(0).toUpperCase() + sec.scheme.slice(1)}. ${sec.levelNote}` },
    { q: `What is the difference between Level I, II and III here?`, a: `Level I performs set-ups and records results under supervision. Level II interprets and reports to an approved procedure, and is the working grade employers audit for. Level III approves procedures, qualifies personnel and signs the written practice — one per programme, and their method scope limits what they can sign.` },
    { q: `Can theory be delivered online for a cohort in ${city}?`, a: `Theory yes, practical no. Blended delivery puts theory hours online on the technicians' own schedule and concentrates in-person time on the practical, which reduces days off the tools. No recognised scheme accepts a remote practical, so the in-person element is fixed however the theory is delivered.` },
    { q: `Who employs certified NDT technicians in ${city}?`, a: firms.length
      ? `${list(firms, 4)} and the contractors bidding into their supply chains. Approved-supplier requirements flow down, so a subcontractor inherits the qualification bar the top of the chain sets — which is why certification is a bidding issue rather than a training preference.`
      : `The asset owners and contractors active in this sector locally. Approved-supplier requirements flow down the chain, so the qualification bar is set above the firm doing the work.` },
    { q: `What does an employer need in place before ${sec.label.toLowerCase()} training starts?`, a: `A written practice signed by a qualified Level III, the procedures technicians will work to, and a decision on which methods and levels the cohort needs. Firms without a Level III on staff contract one — that is the signing authority certification depends on, and training cannot supply it.` },
  ];

  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a>'
    + '<a href="/training-usa">US Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(sec.label)} NDT Training in ${esc(city)}</h1>`);
  parts.push(`    <p>${esc(d.industrialProfile)}</p>`);
  parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
    + `<p>${esc(answer)}</p><p>${esc(expansion)}</p>`
    + `<p><strong>Source:</strong> ${esc('ASNT SNT-TC-1A employer certification framework; per-city industrial research file')}</p></section>`);
  parts.push(`<figure data-citation-block="table"><table><caption>${esc(`${sec.label} NDT training in ${city} — scheme, methods and levels`)}</caption>`
    + '<thead><tr><th scope="col">Factor</th><th scope="col">What applies</th><th scope="col">Why it matters</th></tr></thead><tbody>'
    + rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')
    + '</tbody></table></figure>');
  for (const f of facets) parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  parts.push('<section data-citation-block="related"><p>Related: '
    + `<a href="${esc(sec.related)}">${esc(sec.label.toLowerCase())} certification requirements</a>, `
    + `<a href="/ndt-training-${esc(slugify(city))}">NDT training across ${esc(city)}</a>, `
    + '<a href="/corporate-ndt-training">employer-sponsored cohorts</a>, '
    + '<a href="/asnt-certification">ASNT certification by level</a> and '
    + '<a href="/blog/ndt-training-hours-requirements-by-method">training hours by method</a>. '
    + 'Budget holders comparing pay bands should see <a href="/ndt-level-2-salary">what a certified Level II earns</a>.'
    + '</p></section>');
  parts.push('  </main>');

  return { html: parts.join(String.fromCharCode(10)), answer };
}

export function buildTrainingIndustryCity(cityData, existingPaths, { gate = 0.55, limit = 500 } = {}) {
  const out = { routes: [], skippedNoSector: 0, skippedThin: 0, skippedSimilar: 0, byCountry: {} };
  const accepted = [];

  for (const [slug, d] of Object.entries(cityData)) {
    if (!d) continue;
    // North America only, per the owner's standing geo priority.
    const country = d.country || '';
    if (!/^(US|CA|Canada|United States)$/i.test(country)) continue;
    if (words(d.industrialProfile) < 28) { out.skippedThin++; continue; }
    if (!(d.companies || []).length) { out.skippedThin++; continue; }

    const city = d.name || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const seen = new Set();
    for (const ind of d.industries || []) {
      const sec = sectorFor(ind);
      if (!sec) { out.skippedNoSector++; continue; }
      if (seen.has(sec.key)) continue;
      seen.add(sec.key);

      const path = `/training/${sec.key}-ndt-training-${slug}`;
      if (existingPaths.has(path)) continue;
      if (out.routes.length >= limit) break;

      const { html, answer } = render(city, d, sec);
      if (accepted.some((a) => shingleSimilarity(answer, a) > gate)) { out.skippedSimilar++; continue; }
      accepted.push(answer);

      out.routes.push({
        path,
        title: `${sec.label} NDT Training in ${city}`.slice(0, 70),
        description: `NDT training for ${sec.label.toLowerCase()} employers in ${city}: ${clampWords(sec.methods, 10)}, certified under ${clampWords(sec.scheme, 8)}, delivered on-site or blended.`.slice(0, 165),
        h1: `${sec.label} NDT Training in ${city}`,
        bodyContent: html,
      });
      out.byCountry[country] = (out.byCountry[country] || 0) + 1;
    }
  }
  return out;
}
