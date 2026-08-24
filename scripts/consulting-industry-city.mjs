/**
 * Level III consulting — industry × city. 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * The owner asked for 200 more Level III consulting pages across industries and
 * cities. A blind cross-product would be 12 industries × 90 cities = 1,080
 * pages, and this site has been penalised for exactly that shape before.
 *
 * THE GATE THAT MAKES THIS HONEST: a page is generated only where the CITY'S OWN
 * researched profile lists that industry. Aerospace × Wichita exists because the
 * Wichita research names Spirit AeroSystems and Textron. Aerospace × Whiting
 * does not exist, because Whiting's research names a refinery and nothing else.
 * The data decides the matrix, not a loop over two lists — so a page cannot be
 * generated for a combination that is not real.
 *
 * WHAT MAKES EACH PAGE DIFFERENT, on both axes:
 *   - across cities for one industry: the named local operators and the city's
 *     own industrial prose, which is research written per city
 *   - across industries for one city: the regulatory regime, the methods that
 *     dominate, and what the Level III actually signs — a Nadcap aerospace
 *     programme and an API refinery programme share almost nothing
 *
 * Both are needed. Leading with only the city makes every industry page in that
 * city identical; leading with only the industry makes every city page for that
 * industry identical. This is the mistake the ERP module×city pass made, caught
 * at 80% similarity, and the fix is the same: braid both, then let the
 * self-policing gate drop whatever still collides.
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
function buildLead(prose, budget = 40) {
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
 * What an NDT programme in each sector is actually governed by. This is the
 * axis that distinguishes two pages in the SAME city — an aerospace programme
 * and a refining programme in Wichita share a postcode and nothing else.
 *
 * Every entry describes a real, widely-referenced regime. Where a sector has no
 * distinct regime beyond employer certification, it is not listed at all rather
 * than padded with something invented.
 */
const SECTORS = {
  aerospace: {
    match: /aerospace|aviation|space|defen[cs]e|missile/i,
    label: 'Aerospace',
    regime: 'Nadcap AC7114 accreditation and NAS 410 personnel qualification, flowed down through the prime contractors',
    methods: ['PT', 'MT', 'UT', 'RT', 'ET'],
    signs: 'the written practice against NAS 410 rather than SNT-TC-1A, the technique sheets per part number, and the Nadcap self-audit before the on-site',
    pain: 'A Nadcap audit is scored against the checklist line by line, and the failure rate on first submission is high enough that most firms budget for a re-audit.',
    related: '/consulting/nadcap-ac7114-audit-readiness',
  },
  nuclear: {
    match: /nuclear/i,
    label: 'Nuclear',
    regime: '10 CFR 50 Appendix B and ASME NQA-1, with supplier audits through NUPIC and ASME Section XI governing in-service inspection',
    methods: ['UT', 'PAUT', 'RT', 'VT', 'ET'],
    signs: 'the programme against CP-189 rather than SNT-TC-1A, the commercial-grade dedication basis, and records against a retention regime measured in decades',
    pain: 'Nuclear records outlive the people who wrote them, and a gap found years later cannot be reconstructed from memory.',
    related: '/consulting/nqa-1-nuclear-supplier-ndt-program',
  },
  refining: {
    match: /refin|petrochemical|petroleum|chemical|oil.?&?.?gas|olefin|polymer|plastics/i,
    label: 'Refining and petrochemical',
    regime: 'OSHA PSM mechanical integrity under 29 CFR 1910.119, with API 510, 570 and 653 owner-user inspection programmes above it',
    methods: ['UT', 'PAUT', 'RT', 'MT', 'PT', 'VT'],
    signs: 'the written practice, the UT thickness and PAUT procedures the turnaround runs on, and the examination records the owner audits before mobilisation',
    pain: 'Turnaround work is bid months ahead and audited at the gate; a lapsed certification found at mobilisation removes the technician from the job that day.',
    related: '/consulting/osha-psm-mechanical-integrity-ndt',
  },
  pipeline: {
    match: /pipeline|midstream|terminal|transmission/i,
    label: 'Pipeline and midstream',
    regime: '49 CFR 192 and 195 under PHMSA, with API 1104 governing the welding and its inspection',
    methods: ['RT', 'UT', 'PAUT', 'MT', 'MFL'],
    signs: 'the radiographic and automated ultrasonic procedures, the technician qualifications behind girth-weld acceptance, and the records an operator qualification audit samples',
    pain: 'Girth-weld acceptance is the record that matters years later during an integrity dig, and it has to be traceable to the technician and the procedure in force that day.',
    related: '/consulting/pipeline-ndt-consulting-tulsa',
  },
  maritime: {
    match: /maritime|marine|shipbuild|shipyard|port|dock|offshore/i,
    label: 'Maritime and offshore',
    regime: 'IACS UR Z17 service supplier approval, issued separately by each class society, with NAVSEA requirements on Navy-contract work',
    methods: ['UT', 'VT', 'MT', 'PT'],
    signs: 'the thickness measurement procedure, the operator qualification file class inspects, and the reporting format the surveyor countersigns',
    pain: 'Class approval names one society and does not transfer, so a yard working ABS and DNV tonnage carries two approvals and two audit cycles.',
    related: '/consulting/iacs-service-supplier-approval',
  },
  power: {
    match: /power|energy|utilit|electric|turbine|generation/i,
    label: 'Power generation',
    regime: 'ASME Section V for the examinations and the owner\'s own supplier-qualification programme, with NERC obligations shaping outage scheduling',
    methods: ['UT', 'PAUT', 'RT', 'MT', 'PT', 'ET'],
    signs: 'the boiler tube and header examination procedures, the outage inspection plan, and the personnel qualifications the utility audits before an outage',
    pain: 'Outage windows are fixed years ahead and cost is measured in lost generation per day, so an inspection programme that cannot mobilise on the date is worth nothing.',
    related: '/consulting/energy-utilities-ndt-consulting',
  },
  steel: {
    match: /steel|metal|foundry|forge|mill|manufactur|fabricat|machin|heavy equipment/i,
    label: 'Steel and heavy fabrication',
    regime: 'AWS D1.1 for structural welding inspection, with ASME Section VIII and Section IX where pressure equipment is fabricated',
    methods: ['UT', 'RT', 'MT', 'PT', 'VT'],
    signs: 'the weld inspection procedures, the acceptance criteria mapped to the governing code, and the CWI-to-Level-II interface in the shop',
    pain: 'Fabrication shops fail on the gap between what the procedure says and what the shop floor does, because the procedure was written for the audit rather than the work.',
    related: '/consulting/ndt-technical-procedure-development',
  },
  rail: {
    match: /rail|locomotive|tank car|intermodal/i,
    label: 'Rail',
    regime: 'AAR M-1003 quality assurance certification, with the AAR Tank Car Manual governing repair and qualification',
    methods: ['UT', 'MT', 'PT', 'VT'],
    signs: 'the NDT section of the M-1003 quality manual, the procedures for wheel, axle and tank shell examination, and the personnel records the AAR auditor samples',
    pain: 'M-1003 certification gates the ability to do the work at all, so a lapse stops the shop rather than merely generating a finding.',
    related: '/consulting/aar-m-1003-ndt-tank-car-facility',
  },
};

function sectorFor(industry) {
  for (const [key, s] of Object.entries(SECTORS)) if (s.match.test(industry)) return { key, ...s };
  return null;
}

function render(city, d, sec) {
  const { lead, rest } = buildLead(d.industrialProfile, 46);
  const local = (d.companies || []).filter(Boolean);

  // City prose leads (differs across this sector's other cities), the sector's
  // regime follows (differs across this city's other sectors).
  const answer = fitBand(
    `${lead} ${sec.label} inspection work here is governed by ${sec.regime}, and an outsourced ASNT Level III signs ${clampWords(sec.signs, 18)}.`
  );

  let expansion = rest;
  if (local.length) expansion = `${expansion} Operators including ${list(local, 3)} set the qualification bar their contractors inherit.`.trim();
  expansion = `${expansion} ${sec.pain}`.trim();
  expansion = clampWords(expansion, 165);

  const rows = [
    ['Governing regime', clampWords(sec.regime, 22), 'What the programme is audited against'],
    ['Methods in scope', (sec.methods || []).join(', '), 'Each needs its own procedure and qualified personnel'],
    ['What the Level III signs', clampWords(sec.signs, 22), 'The signatures an auditor traces first'],
  ];
  if (local.length) rows.push(['Operators setting the bar', list(local, 4), 'Pre-qualification flows down to every contractor bidding']);
  if ((d.industries || []).length) rows.push(['Other sectors in this market', list(d.industries, 5), 'Firms working across them answer to more than one regime']);
  if ((d.localCompliance || []).length) rows.push(['Codes named locally', list(d.localCompliance, 5), 'What contracts in this metro actually specify']);
  rows.push(['Engagement shape', 'Retained cover · project cover · interim cover before an audit date', 'Scope follows the audit calendar']);

  const facets = [
    { q: `What governs ${sec.label.toLowerCase()} NDT work in ${city}?`, a: `${sec.regime.charAt(0).toUpperCase() + sec.regime.slice(1)}. ${sec.pain}` },
    { q: `Which methods does a ${sec.label.toLowerCase()} programme in ${city} need?`, a: `${(sec.methods || []).join(', ')} are the methods this sector runs on. Each needs its own approved procedure and personnel qualified in that specific method — a Level III qualified in ultrasonics cannot approve a radiographic procedure, and signing outside your own method list is among the most common audit findings.` },
    { q: `Can an outside Level III cover a ${sec.label.toLowerCase()} firm in ${city}?`, a: `Yes, where the regime accepts employer-based certification. The obligation sits on the employer, and a contracted Level III can write and sign the written practice, approve procedures and administer examinations, provided they are qualified in each method they sign for. The employer still owns the records.` },
    { q: `Who sets the qualification bar in ${city}?`, a: local.length
      ? `${list(local, 4)} and the contractors bidding into their supply chains. Approved-supplier requirements flow down, so a subcontractor inherits the bar whether or not its own client names it, which makes audit-readiness a bidding issue rather than a paperwork one.`
      : `The asset owners and EPCs active in this sector. Approved-supplier requirements flow down the chain, so a subcontractor inherits the qualification bar the top of the chain sets.` },
    { q: `How long does it take to get ${sec.label.toLowerCase()} audit-ready?`, a: `The written practice and procedures can be drafted and signed in weeks. What cannot be compressed is documented experience — on-the-job hours accrue in real time, and reconstructing undocumented hours needs employer attestation. Firms that start when the audit is scheduled rather than announced clear it without findings.` },
    { q: `Does a firm in ${city} working several sectors need separate programmes?`, a: (d.industries || []).length > 1
      ? `One written practice can cover several sectors, but it must satisfy the strictest regime it touches. A firm working ${list(d.industries, 3)} in this market answers to different auditors with different criteria, and the usual failure is a practice written for the easiest of them.`
      : `One written practice covers the firm, but it must satisfy the strictest regime it touches. Where a firm adds a sector, the practice is revised before the first job rather than after the first audit.` },
  ];

  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a>'
    + '<a href="/compliance">Compliance</a><a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(sec.label)} NDT Level III Consulting in ${esc(city)}</h1>`);
  parts.push(`    <p>${esc(d.industrialProfile)}</p>`);
  parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
    + `<p>${esc(answer)}</p><p>${esc(expansion)}</p>`
    + `<p><strong>Source:</strong> ${esc('Per-city industrial and compliance research file; ASNT SNT-TC-1A employer certification framework')}</p></section>`);
  parts.push(`<figure data-citation-block="table"><table><caption>${esc(`${sec.label} NDT programmes in ${city} — regime, methods and signatures`)}</caption>`
    + '<thead><tr><th scope="col">Factor</th><th scope="col">What applies</th><th scope="col">Why it matters</th></tr></thead><tbody>'
    + rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')
    + '</tbody></table></figure>');
  for (const f of facets) parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p></section>`);
  parts.push('<section data-citation-block="related"><p>Related: '
    + `<a href="${esc(sec.related)}">${esc(sec.label.toLowerCase())} programme requirements</a>, `
    + `<a href="/consulting/ndt-consulting-${slugify(city)}">NDT consulting across ${esc(city)}</a>, `
    + '<a href="/consulting/asnt-level-iii-consulting-services">outsourced ASNT Level III cover</a>, '
    + '<a href="/consulting/written-practice-development">written practice development</a> and '
    + '<a href="/consulting/ndt-program-audit-gap-assessment">a programme gap assessment</a>.</p></section>');
  parts.push('  </main>');

  return { html: parts.join(String.fromCharCode(10)), answer };
}

/**
 * Build industry × city consulting pages. `cityData` is the shared research
 * index; only US cities with a real profile and a matching sector are used.
 */
export function buildConsultingIndustryCity(cityData, existingPaths, { gate = 0.55, limit = 400 } = {}) {
  const out = { routes: [], skippedNoSector: 0, skippedThin: 0, skippedSimilar: 0, byCity: {} };
  const accepted = [];

  for (const [slug, d] of Object.entries(cityData)) {
    if (!d || (d.country && d.country !== 'US')) continue;
    // 28 words, not 45. The store's median US profile is 30 words and every one
    // of the 304 names real plants — a 45-word bar excluded 241 cities whose
    // research was perfectly good, just concise. T4 and T5 read the same data at
    // a 25-word bar. The similarity gate below is what protects quality here;
    // the length bar only keeps out entries with no research at all.
    if (words(d.industrialProfile) < 28) { out.skippedThin++; continue; }
    if (!(d.companies || []).length) { out.skippedThin++; continue; }

    const city = d.name || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const seen = new Set();
    for (const ind of d.industries || []) {
      const sec = sectorFor(ind);
      if (!sec) { out.skippedNoSector++; continue; }
      if (seen.has(sec.key)) continue;      // two industries mapping to one sector
      seen.add(sec.key);

      const path = `/consulting/${sec.key}-ndt-consulting-${slug}`;
      if (existingPaths.has(path)) continue;
      if (out.routes.length >= limit) break;

      const { html, answer } = render(city, d, sec);
      if (accepted.some((a) => shingleSimilarity(answer, a) > gate)) { out.skippedSimilar++; continue; }
      accepted.push(answer);

      out.routes.push({
        path,
        title: `${sec.label} NDT Level III Consulting in ${city}`.slice(0, 70),
        description: `ASNT Level III cover for ${sec.label.toLowerCase()} inspection firms in ${city}: written practice, procedures and audit readiness against ${clampWords(sec.regime, 12)}.`.slice(0, 165),
        h1: `${sec.label} NDT Level III Consulting in ${city}`,
        bodyContent: html,
      });
      out.byCity[slug] = (out.byCity[slug] || 0) + 1;
    }
  }
  return out;
}
