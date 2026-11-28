// Level III audit-support consulting pages + AWS CWI exam-prep pages — 2026-11-18 (CLAUDE.md §80).
//
// Owner, 2026-11-18: "in consulting lets expand more Audit supports, ASME audit - level 3 support, Maritime NDT
// audit (IACS class approval audits) NDT documentation, NAS 410 audit compliance documentation in a professional
// wording, across all US cities and regions based on their demand … Lets include AWS CWI training for exam, we'll
// mark duration as 6 days, scale it across all high demand cities … all new content pages 2000+ words".
//
// GSC, 28 days to 2026-11-14 (scripts/seo-trends-raw/2026-11-17): CWI queries 1,710 impressions / 2 clicks
// ("aws cwi certification" 200 at p9.8, "cwi course" 25 at p25.6, "cwi tampa" 26) with no course page; Nadcap/NAS 410
// audit 648; IACS/class approval 235 (owned by /consulting/iacs-service-supplier-approval, p6.2); ASME/NBIC stamp 214
// ("nbic r-stamp" 58 at p44). Place-named consulting demand is near zero, so city pages go only where the industry
// that buys each audit is concentrated (stamp shops, ports, aerospace clusters, the largest welding metros).
//
// Pages (src/data/audit-cwi-2026-11/_pages.json; one record per page in the same folder):
//   audit/asme      /consulting/asme-audit-ndt-level-iii-support + /consulting/asme-audit-support-{city} (10)
//   audit/nbic      /consulting/nbic-r-stamp-ndt-audit-support
//   audit/nas410    /consulting/nas-410-audit-compliance-documentation + /consulting/nas-410-audit-documentation-{city} (10)
//                   — the only consulting pages allowed to name NAS 410 (NAS410_DOC_PAGES in
//                   src/data/nas-410-clarification-2026-11.mjs; preflight 4b). Atlantis prepares and reviews the
//                   documentation the Responsible Level 3 approves; it is not the RL3 and certifies no one.
//   audit/maritime  REWRITES /consulting/level-iii-audit-support-maritime + 10 thin /consulting/maritime-ndt-consulting-{port}
//                   pages (they had been canonicalised to /consulting by the saturated-family pass).
//   cwi             /aws-cwi-training + /training/cwi-training-{city}: 20 thin pages rewritten, 12 new. The CWI offer is
//                   the owner's 2026-11-18 decision; the claims gate allows CWI course wording on these pages only
//                   (CWI_OFFER_PATHS below, scripts/assert-no-fabricated-claims.mjs).
//
// Exports:
//   applyAuditCwiRoutes(routes)   title, description, canonical, indexable, body, JSON-LD (after every prune/consolidation pass)
//   auditCwiUpgrades()            the same <main> for the editorial pass (published page = React page)
//   assertAuditCwiClean(built)    build guard
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { NAS410_DOC_PAGES } from '../src/data/nas-410-clarification-2026-11.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/audit-cwi-2026-11');
const SITE = 'https://atlantisndt.com';
export const PLAN = JSON.parse(readFileSync(join(DIR, '_pages.json'), 'utf8')).pages;
const byPath = new Map(PLAN.map((p) => [p.path, p]));
export const CWI_OFFER_PATHS = PLAN.filter((p) => p.family === 'cwi').map((p) => p.path);
export const NAS410_DOC_PATHS = PLAN.filter((p) => p.sub === 'nas410').map((p) => p.path);

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let _recs = null;
function recs() {
  if (_recs) return _recs;
  _recs = {};
  for (const p of PLAN) {
    const f = join(DIR, `${p.slug}.json`);
    if (existsSync(f)) _recs[p.slug] = JSON.parse(readFileSync(f, 'utf8'));
  }
  return _recs;
}
export function auditCwiPaths() {
  const out = new Map();
  for (const p of PLAN) { const r = recs()[p.slug]; if (r) out.set(p.path, { plan: p, rec: r }); }
  return out;
}
const have = (path) => byPath.has(path) && !!recs()[byPath.get(path).slug];
const placeOf = (p) => (p.st === 'DC' ? 'Washington, DC' : `${p.city}, ${p.st}`);

const NATIONAL = {
  asme: '/consulting/asme-audit-ndt-level-iii-support',
  nbic: '/consulting/nbic-r-stamp-ndt-audit-support',
  nas410: '/consulting/nas-410-audit-compliance-documentation',
  maritime: '/consulting/level-iii-audit-support-maritime',
  cwi: '/aws-cwi-training',
};
const NAT_LABEL = {
  asme: 'ASME audit: Level III support for the NDE program',
  nbic: 'NBIC R stamp: NDE audit support',
  nas410: 'NAS 410 audit compliance documentation',
  maritime: 'Maritime NDT audit support: IACS class approval audits',
  cwi: 'AWS CWI exam prep: 6-day course',
};
const SUB_LABEL = { asme: 'ASME audit support', nas410: 'NAS 410 audit documentation', maritime: 'Maritime NDT consulting and class audit support', cwi: 'AWS CWI exam prep' };
// Documentation and audit pages every audit page can point to (all built).
const AUDIT_COMMON = [
  ['/consulting/ndt-audit-consulting', 'NDT audit consulting'],
  ['/consulting/ndt-audit-documentation', 'Audit documentation'],
  ['/consulting/ndt-level-iii-documentation', 'Level III documentation'],
  ['/consulting/subcontractor-approval-audits', 'Client and subcontractor approval audits'],
  ['/ndt-written-practice-development', 'Written practice development'],
  ['/consulting/ndt-procedure-qualification-demonstration', 'Procedure qualification and demonstration'],
];
const MARITIME_RESEARCHED = ['mobile', 'norfolk', 'san-diego', 'seattle', 'jacksonville', 'pascagoula', 'new-orleans', 'tampa', 'houston'];

function cityLinks(sub, self) {
  return PLAN.filter((p) => p.kind === 'city' && (p.family === 'cwi' ? sub === 'cwi' : p.sub === sub) && p.path !== self && have(p.path));
}
function linkList(items) { return `<ul>${items.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>`; }

function relatedBlock(plan) {
  const sub = plan.family === 'cwi' ? 'cwi' : plan.sub;
  const items = [];
  if (plan.kind === 'national') {
    // Directory of the city pages, grouped by region.
    const cities = cityLinks(sub, plan.path);
    const groups = {};
    for (const c of cities) (groups[c.region || 'Other'] ||= []).push(c);
    const order = ['Northeast', 'Mid-Atlantic', 'Southeast', 'South Central', 'Midwest', 'West', 'Other'];
    let dir = '';
    if (cities.length) {
      dir = `<h3>${esc(SUB_LABEL[sub] || 'City pages')} by region</h3>` + order.filter((g) => groups[g]).map((g) =>
        `<p><strong>${esc(g)}:</strong> ${groups[g].map((c) => `<a href="${c.path}">${esc(placeOf(c))}</a>`).join(' · ')}</p>`).join('');
    }
    if (plan.family === 'audit') {
      for (const s of ['asme', 'nbic', 'nas410', 'maritime']) if (NATIONAL[s] !== plan.path && have(NATIONAL[s])) items.push([NATIONAL[s], NAT_LABEL[s]]);
      items.push(...AUDIT_COMMON);
    } else {
      items.push(['/visual-testing', 'Visual testing (VT) services'], ['/vt-level-2-training', 'VT Level 2 training (ASNT SNT-TC-1A)'], ['/weld-inspection', 'Weld inspection services'],
        ['/blog/cwi-certification-requirements-cost-career-impact', 'CWI certification requirements and career paths'], ['/training', 'NDT training courses']);
    }
    return `<section data-auditcwi-related="2026-11"><h2>Related pages</h2>${dir}${linkList(items)}</section>`;
  }
  // City page
  if (have(NATIONAL[sub])) items.push([NATIONAL[sub], NAT_LABEL[sub]]);
  const sibs = cityLinks(sub, plan.path);
  const near = sibs.filter((c) => c.region === plan.region).concat(sibs.filter((c) => c.region !== plan.region)).slice(0, 6);
  if (plan.family === 'audit') {
    if (sub === 'asme' && have(NATIONAL.nbic)) items.push([NATIONAL.nbic, NAT_LABEL.nbic]);
    if (sub === 'nas410') items.push(['/consulting/nadcap-ac7114-audit-readiness', 'Nadcap AC7114 audit readiness'], ['/consulting/aerospace-ndt-consulting', 'Aerospace NDT consulting']);
    if (sub === 'maritime') {
      items.push(['/consulting/iacs-service-supplier-approval', 'IACS UR Z17 service supplier approval: requirements guide'], ['/consulting/maritime-ndt-consulting', 'Maritime NDT consulting']);
      for (const s of MARITIME_RESEARCHED) if (`/consulting/maritime-ndt-consulting-${s}` !== plan.path && near.length < 8) near.push({ path: `/consulting/maritime-ndt-consulting-${s}`, city: s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '), st: '' });
    }
    items.push(...AUDIT_COMMON.slice(0, 4));
  } else {
    items.push(['/visual-testing', 'Visual testing (VT) services'], ['/vt-level-2-training', 'VT Level 2 training (ASNT SNT-TC-1A)'], ['/weld-inspection', 'Weld inspection services']);
    if (plan.citySlug && existsSync(join(ROOT, 'dist', `ndt-training-${plan.citySlug}`, 'index.html'))) items.push([`/ndt-training-${plan.citySlug}`, `NDT training in ${placeOf(plan)}`]);
  }
  const nearHtml = near.length ? `<p>${esc(SUB_LABEL[sub])} in other cities: ${near.map((c) => `<a href="${c.path}">${esc(c.st ? placeOf(c) : c.city)}</a>`).join(' · ')}.</p>` : '';
  return `<section data-auditcwi-related="2026-11"><h2>Related pages</h2>${linkList(items)}${nearHtml}</section>`;
}

// 2026-11-20 (owner): three formats, all six days: corporate (at the employer's facility), online (own pace,
// instructor answers questions) and one-to-one (online or in person). The national page states them in its own
// record; every CWI city page gets this block in both layers (crawler and published React page).
export function cwiFormatsBlock(plan) {
  const where = plan.kind === 'city' ? ` from ${placeOf(plan)}` : '';
  return `<section data-cwi-formats="2026-11-20"><h2>Three ways to take the six-day CWI course${esc(where)}</h2>`
    + `<p>All three formats follow the same six-day outline and cover Parts A, B and C. Fees are quoted on request for the format you choose.</p>`
    + `<h3>Corporate: six days for your team</h3><p>For an employer preparing a group. The six days are delivered at your facility, using your welds, your gauges and, where it fits, your code and procedures.</p>`
    + `<h3>Online: six days at your own pace</h3><p>For an individual who wants to set the pace. You get a study plan built on the six-day outline, course materials, original practice questions and timed practice papers, and an instructor answers your questions as you work. There are no scheduled class times.</p>`
    + `<h3>One-to-one: online or in person</h3><p>For a single candidate who wants personal coaching: six days of one-to-one sessions with the instructor, online or in person at a location agreed when you book, with the time spent on the parts of the exam where you need it most.</p>`
    + `<p>Whichever format you choose, AWS administers the examination and issues the certification, and each candidate applies to AWS individually and meets the AWS eligibility and vision rules personally. <a href="${NATIONAL.cwi}">Course outline, exam structure and eligibility</a>.</p></section>`;
}

function ctaBlock(plan) {
  if (plan.family === 'cwi') {
    const where = plan.kind === 'city' ? placeOf(plan) : 'US';
    const href = `/contact?service=training&amp;subject=${encodeURIComponent(`AWS CWI exam prep - ${where}`)}`;
    return `<section data-auditcwi-cta="2026-11"><h2>Enquire about the 6-day CWI exam prep course</h2>`
      + `<p>Tell us which format suits you (corporate for a group at your facility, online at your own pace, or one-to-one online or in person), which code you plan to take for Part C, and when you intend to sit the exam. We reply within one business day. AWS administers the examination and issues the certification.</p>`
      + `<p><a href="${href}">Enquire about AWS CWI exam prep</a></p></section>`;
  }
  const topic = { asme: 'ASME audit Level III support', nbic: 'NBIC R stamp NDE audit support', nas410: 'Aerospace audit documentation', maritime: 'Maritime class audit support' }[plan.sub];
  const where = plan.kind === 'city' ? ` - ${placeOf(plan)}` : '';
  const href = `/contact?service=consulting&amp;subject=${encodeURIComponent(topic + where)}`;
  return `<section data-auditcwi-cta="2026-11"><h2>Talk to an ASNT Level III about your audit</h2>`
    + `<p>Send the audit date, the standard or scheme you are audited against, and the documents you have now. We reply within one business day with the gaps we see and how we would close them.</p>`
    + `<p><a href="${href}">Request an audit-readiness review</a></p></section>`;
}

export function auditCwiMain({ plan, rec }) {
  const faq = (rec.faq || []).map((f) => `<h3>${esc(f.q)}</h3><p>${f.a}</p>`).join('');
  const formats = plan.family === 'cwi' && plan.kind === 'city' ? cwiFormatsBlock(plan) : '';
  return `<h1>${esc(rec.h1)}</h1>${rec.html}${formats}<h2>Frequently asked questions</h2>${faq}${relatedBlock(plan)}${ctaBlock(plan)}`;
}

function schemaFor({ plan, rec }, path) {
  const url = SITE + path;
  const org = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT' };
  const area = plan.kind === 'city'
    ? { '@type': 'City', name: plan.city, containedInPlace: { '@type': plan.st === 'DC' ? 'Country' : 'State', name: plan.st === 'DC' ? 'United States' : plan.st } }
    : { '@type': 'Country', name: 'United States' };
  const out = [];
  if (plan.family === 'cwi' && plan.kind === 'national') {
    out.push({ '@context': 'https://schema.org', '@type': 'Course', '@id': `${url}#course`, name: 'AWS CWI exam preparation course (6 days)',
      description: rec.description, url, provider: org, inLanguage: 'en',
      offers: { '@type': 'Offer', category: 'Paid', availability: 'https://schema.org/InStock' },
      hasCourseInstance: [
        { '@type': 'CourseInstance', name: "Corporate: six days at the employer's facility", courseMode: 'Onsite', courseWorkload: 'P6D', location: { '@type': 'Place', name: "The employer's facility" } },
        { '@type': 'CourseInstance', name: 'Online, at your own pace', courseMode: 'Online', courseWorkload: 'P6D' },
        { '@type': 'CourseInstance', name: 'One-to-one, online or in person', courseMode: ['Online', 'Onsite'], courseWorkload: 'P6D' },
      ] });
  } else if (plan.family === 'cwi') {
    out.push({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, name: rec.h1, description: rec.description, url,
      about: { '@id': `${SITE}${NATIONAL.cwi}#course` }, publisher: org });
  } else {
    out.push({ '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: rec.h1, serviceType: 'ASNT NDT Level III audit support',
      description: rec.description, url, provider: org, areaServed: area });
  }
  const qs = (rec.faq || []).filter((f) => f.q && f.a);
  if (qs.length >= 2) out.push({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: qs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') } })) });
  const crumbs = plan.family === 'cwi'
    ? [['Home', '/'], ['Training', '/training'], ['AWS CWI exam prep', NATIONAL.cwi]]
    : [['Home', '/'], ['Consulting', '/consulting'], ['Audit consulting', '/consulting/ndt-audit-consulting']];
  if (plan.kind === 'city') crumbs.push([NAT_LABEL[plan.family === 'cwi' ? 'cwi' : plan.sub], NATIONAL[plan.family === 'cwi' ? 'cwi' : plan.sub]]);
  const list = crumbs.filter((c, i, a) => a.findIndex((d) => d[1] === c[1]) === i && c[1] !== path);
  list.push([rec.h1, path]);
  out.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: list.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + p })) });
  return out;
}

const header = (plan) => plan.family === 'cwi'
  ? '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/aws-cwi-training">AWS CWI exam prep</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>'
  : '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/consulting/ndt-audit-consulting">Audit consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>';

export const auditCwiStats = { updated: 0, added: 0 };
export function applyAuditCwiRoutes(routes) {
  const map = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));
  for (const [path, entry] of auditCwiPaths()) {
    let r = map.get(path);
    if (!r) { r = { path }; routes.push(r); map.set(path, r); auditCwiStats.added++; } else auditCwiStats.updated++;
    r.title = entry.rec.title;
    r.description = entry.rec.description;
    r.canonical = SITE + path;
    r.bodyContent = `  ${header(entry.plan)}\n  <main>${auditCwiMain(entry)}</main>`;
    r.structuredData = schemaFor(entry, path);
    r.noindex = false; r.noindexFollow = false; r.prunedByDemand = false;
    r.publishedAt = r.publishedAt || '2026-11-18';
    r.auditCwi = `${entry.plan.family}:${entry.plan.kind}`;
  }
  return auditCwiStats;
}

export function auditCwiUpgrades() {
  const out = {};
  for (const [path, entry] of auditCwiPaths()) out[path] = { title: entry.rec.title, description: entry.rec.description, html: auditCwiMain(entry), replace: true };
  return out;
}

// ── Guard ────────────────────────────────────────────────────────────────────────────────────────
const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const NEG = /\b(?:not|no|never|nor|without|isn['’]t|doesn['’]t|don['’]t|cannot|can['’]t|neither|outside)\b/i;
const RULES = [
  ['price figure', /(?:\$|USD|US\$|AED|SAR|QAR|€|£)\s?\d/],
  ['time promise', /\b(?:within|in under|in less than)\s+(?:\d+|two|three|five|24|48|72)\s*(?:business\s+|working\s+)?(?:hours?|days?|weeks?)\b/i],
  ['presence claim', /\bour\s+(?:[A-Z][a-z]+\s+){0,2}(?:office|lab|laboratory|centre|center|classroom|campus|branch)\b/],
  ['superlative', /\b(?:Atlantis(?: NDT)?(?:['’]s)?|we are)\b[^.]{0,40}\b(?:the )?(?:first|only|leading|number one|#1|best|premier|world-class)\b/i],
  ['pass rate / guarantee', /\b\d{2}(?:\.\d)?\s?%\s*(?:first[- ]time\s+)?pass|\bguarantee/i],
  ['approval claim', /\b(?:Atlantis(?: NDT)?|we)\b[^.]{0,60}\b(?:is|are|has been)\s+(?:an?\s+)?(?:AWS[- ]approved|AWS[- ]accredited|Nadcap[- ]accredited|class[- ]approved|UR Z17[- ]approved|approved by (?:DNV|ABS|Lloyd|LR|AWS|ASME|the National Board)|an Authori[sz]ed Inspection Agency)/i, true],
  ['WPS authoring', /\b(?:Atlantis(?: NDT)?|we)\b[^.]{0,30}\b(?:write|writes|qualify|qualifies|develop|develops|author|authors)\b[^.]{0,30}\b(?:welding procedure specifications?|WPS|PQRs?)\b/i, true],
  ['US RT offer', /\b(?:Atlantis(?: NDT)?|we)\b[^.]{0,40}\b(?:perform|performs|provide|provides|offer|offers)\b[^.]{0,30}\b(?:radiograph(?:y|ic testing)|RT\b)/i, true],
  ['founder misattribution', /Rayavarapu[^.]{0,160}\b(?:CWI|Certified Welding Inspector|NAS 410 Level|Authori[sz]ed Inspector|API (?:510|570|653)|eddy current|six methods)/i],
];
export { RULES as AUDIT_CWI_RULES, NEG as AUDIT_CWI_NEG }; // 2026-11-28: used by scripts/api-training-refine/check-cwi.mjs
export function assertAuditCwiClean(builtPaths) {
  const built = builtPaths instanceof Set ? builtPaths : new Set(builtPaths || []);
  const errors = [];
  const partial = process.env.AUDITCWI_ALLOW_PARTIAL === '1';
  for (const p of PLAN) if (!recs()[p.slug] && !partial) errors.push(`${p.path}: no record`);
  if ([...NAS410_DOC_PATHS].sort().join() !== [...NAS410_DOC_PAGES].sort().join()) errors.push('NAS410_DOC_PAGES (src/data/nas-410-clarification-2026-11.mjs) differs from the nas410 pages in _pages.json');
  for (const [path, { plan, rec }] of auditCwiPaths()) {
    if (built.size && !built.has(path)) errors.push(`${path}: not built`);
    const words = strip(rec.html).split(' ').filter(Boolean).length;
    if (words < 2000) errors.push(`${path}: ${words} words (2,000+ required)`);
    if (!rec.title || rec.title.length > 62) errors.push(`${path}: title length ${rec.title?.length}`);
    if (!rec.description || rec.description.length > 160) errors.push(`${path}: description length ${rec.description?.length}`);
    const all = strip(`${rec.title} ${rec.description} ${rec.h1} ${rec.html} ${(rec.faq || []).map((f) => `${f.q} ${f.a}`).join(' ')}`);
    for (const [label, re, negOk] of RULES) {
      const m = all.match(new RegExp(re.source, re.flags.replace('g', '')));
      if (!m) continue;
      const i = all.indexOf(m[0]);
      const sent = all.slice(Math.max(0, all.lastIndexOf('. ', i)), all.indexOf('. ', i + m[0].length) + 1 || undefined);
      if (negOk && NEG.test(sent)) continue;
      errors.push(`${path}: ${label}: "${sent.trim().slice(0, 160)}"`);
    }
    const nas = /\bNAS[ -]?410\b/.test(all);
    if (plan.sub === 'nas410') {
      if (!/Responsible Level 3/.test(all)) errors.push(`${path}: NAS 410 page does not explain the Responsible Level 3`);
    } else if (nas) errors.push(`${path}: names NAS 410 (only the NAS 410 documentation pages may)`);
    if (plan.family === 'cwi' && !/\b(?:six|6)[- ]day\b/i.test(all)) errors.push(`${path}: CWI page does not state the 6-day course`);
    if (plan.family === 'cwi' && !/one-to-one/i.test(plan.kind === 'city' ? auditCwiMain({ plan, rec }) : all)) errors.push(`${path}: CWI page does not describe the one-to-one format`);
    const html = `${rec.html} ${(rec.faq || []).map((f) => f.a).join(' ')}`;
    for (const m of html.matchAll(/href="(\/[^"?#]*)/g)) {
      const t = m[1].replace(/\/$/, '') || '/';
      if (t === '/contact') continue;
      // Partial runs (records still being written) may link to planned pages that have no record yet.
      if (built.size && !built.has(t) && !(partial && byPath.has(t))) errors.push(`${path}: link to unbuilt ${t}`);
    }
  }
  if (errors.length) throw new Error(`audit-cwi-2026-11: ${errors.length} problem(s):\n  ${errors.slice(0, 40).join('\n  ')}`);
  return true;
}
