// API 510 / 570 / 580 / 653 exam-preparation training pages — 2026-11-28 (owner).
//
// Owner, 2026-11-28: "in training sections we've added new courses, API 510, 570, 580, and 653, and AWS CWI Training.
// build city x region x country pages, primary focus again is US market … all new Training pages should have 2000+
// words of high quality content … targetted for what potential students for API … would search on google".
// Owner answers (same day): delivery "Self-paced online + instructor Q&A"; duration "Don't state a length"; first wave
// "4 national + ~20 hubs each + 20 CWI"; "Push live when checks pass". Fees are quoted on request, as for CWI.
//
// This supersedes the 2026-10-02 rule that Atlantis offers no API 510/570/653/580 training (CLAUDE.md §57–§80
// "does not train for API" lines). What stays true and is enforced below: API (the American Petroleum Institute)
// administers the ICP examinations, in person at Prometric test centres, and issues the certification; the course
// is exam preparation; Atlantis is not an API-approved or API-accredited training provider and claims no such
// status; the course length is not stated; no instructor is named and the founder holds no API certification.
//
// GSC, 90 days to 2026-11-23 (session scratchpad api/q-page-90d.json): training-intent API queries had no owning
// page and landed on the certification explainers — "api 653 course" 160 impressions at p29.8 and "api 570 training"
// 149 at p41.6 on /api-653-certification and /api-570-certification; "api 570 online" 41 at p27 (US). Certification
// and requirements queries stay with the /api-{510,570,653}-certification explainers; course, training, exam-prep
// and online-course queries belong to these pages. Place-named API demand is thin, so city pages are long-tail and
// conversion pages: each one is written around the refineries, terminals and plants that employ API inspectors there.
//
// Pages (src/data/api-training-2026-11/_pages.json; one record per page in the same folder):
//   national  /api-{510,570,580,653}-training                     (4)
//   hub       /api-inspector-training-usa                          (1)
//   region    /api-inspector-training-{region}                     (6)
//   city      /training/api-{code}-training-{city}                 (20 cities × 4 courses)
// A planned row without a record is simply not built (records are written in waves; see scripts/api-training-refine/).
//
// Exports:
//   applyApiTrainingRoutes(routes)  title, description, canonical, indexable, body, JSON-LD (after every prune pass)
//   apiTrainingUpgrades()           the same <main> for the editorial pass (published page = React page)
//   assertApiTrainingClean(built)   build guard
//   API_TRAINING_PATHS              built course paths (other modules link to them)
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { API_LIVE_CITIES } from '../src/data/cwi-us-block-2026-11.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/api-training-2026-11');
const SITE = 'https://atlantisndt.com';
export const PLAN = JSON.parse(readFileSync(join(DIR, '_pages.json'), 'utf8')).pages;
const byPath = new Map(PLAN.map((p) => [p.path, p]));

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
export function apiTrainingPaths() {
  const out = new Map();
  for (const p of PLAN) { const r = recs()[p.slug]; if (r) out.set(p.path, { plan: p, rec: r }); }
  return out;
}
export const API_TRAINING_PATHS = [...apiTrainingPaths().keys()];
const have = (path) => byPath.has(path) && !!recs()[byPath.get(path).slug];
const placeOf = (p) => (p.st ? `${p.city}, ${p.st}` : p.city);

export const COURSE = {
  510: { code: 'API 510', name: 'API 510 Pressure Vessel Inspector', short: 'pressure vessel inspector', cert: '/api-510-certification', asset: 'pressure vessels' },
  570: { code: 'API 570', name: 'API 570 Piping Inspector', short: 'piping inspector', cert: '/api-570-certification', asset: 'process piping' },
  580: { code: 'API 580', name: 'API 580 Risk Based Inspection', short: 'risk-based inspection', cert: '/inspection/risk-based-inspection', asset: 'risk-based inspection programmes' },
  653: { code: 'API 653', name: 'API 653 Aboveground Storage Tank Inspector', short: 'aboveground storage tank inspector', cert: '/api-653-certification', asset: 'aboveground storage tanks' },
};
const NATIONAL = (c) => `/api-${c}-training`;
const HUB = '/api-inspector-training-usa';
const EXAM_SCHEDULE = '/blog/api-510-570-653-exam-schedule-2026';

function linkList(items) { return `<ul>${items.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>`; }
const cities = (course, self) => PLAN.filter((p) => p.kind === 'city' && (course == null || p.course === course) && p.path !== self && have(p.path));
const builtLink = (path, label) => (existsSync(join(ROOT, 'dist', path.replace(/^\//, ''), 'index.html')) ? [path, label] : null);

// 2026-11-28 (owner): one delivery format for all four courses: self-paced online with instructor Q&A. The course
// length is deliberately not stated. Every API page carries this block in both layers (crawler and published page).
export function apiFormatBlock(plan) {
  const c = plan.course === 'all' ? null : COURSE[plan.course];
  const what = c ? `the ${c.code} exam-prep course` : 'the API 510, API 570, API 580 and API 653 exam-prep courses';
  const where = plan.kind === 'city' ? ` from ${placeOf(plan)}` : '';
  return `<section data-api-format="2026-11-28"><h2>How ${esc(what)} works${esc(where)}</h2>`
    + `<p>The course is self-paced and online, on the Atlantis learning portal. You study on your own schedule, there are no scheduled class times, and an instructor answers your questions as you work through the material. You can start when you enrol and set your own pace towards the exam window you are aiming for.</p>`
    + `<h3>What you work through</h3><p>A study plan built on the API Body of Knowledge and the Publications Effectivity Sheet for your exam window, video lessons and study notes for each code and recommended practice the exam draws on, worked calculation examples, original practice questions with explanations, and timed practice papers that copy the closed-book and open-book structure of the real examination.</p>`
    + `<h3>Instructor Q&amp;A</h3><p>When a calculation will not come out, a clause reads two ways or you cannot find where the open-book answer lives, you send the question and the instructor answers it. Questions are answered from the code text, so you learn where the answer sits as well as what it is.</p>`
    + `<p>Fees are quoted on request. The American Petroleum Institute sets the eligibility rules, administers the examination in person at Prometric test centres and issues the certification; each candidate applies to API individually. Atlantis is not an API-approved training provider and the course does not grant certification. <a href="${EXAM_SCHEDULE}">API exam windows and application deadlines</a>.</p></section>`;
}

function relatedBlock(plan) {
  const items = [];
  if (plan.kind === 'national') {
    const cs = cities(plan.course, plan.path);
    const groups = {};
    for (const c of cs) (groups[c.region] ||= []).push(c);
    const order = ['Gulf Coast', 'West Coast', 'Midwest', 'Northeast & Mid-Atlantic', 'Southeast', 'Mountain & Plains'];
    const dir = cs.length ? `<h3>${esc(COURSE[plan.course].code)} training by city</h3>` + order.filter((g) => groups[g]).map((g) =>
      `<p><strong>${esc(g)}:</strong> ${groups[g].map((c) => `<a href="${c.path}">${esc(placeOf(c))}</a>`).join(' · ')}</p>`).join('') : '';
    items.push([COURSE[plan.course].cert, plan.course === '580' ? 'Risk-based inspection (RBI) services' : `${COURSE[plan.course].code} certification requirements`]);
    for (const k of Object.keys(COURSE)) if (k !== plan.course && have(NATIONAL(k))) items.push([NATIONAL(k), `${COURSE[k].code} training`]);
    if (have(HUB)) items.push([HUB, 'API inspector training in the USA']);
    items.push([EXAM_SCHEDULE, 'API exam windows and deadlines'], ['/aws-cwi-training', 'AWS CWI exam prep (6 days)'], ['/training', 'NDT training courses']);
    return `<section data-api-related="2026-11-28"><h2>Related pages</h2>${dir}${linkList(items)}</section>`;
  }
  if (plan.kind === 'hub' || plan.kind === 'region') {
    for (const k of Object.keys(COURSE)) if (have(NATIONAL(k))) items.push([NATIONAL(k), `${COURSE[k].code} training`]);
    if (plan.kind === 'region' && have(HUB)) items.push([HUB, 'API inspector training in the USA']);
    const regionRows = PLAN.filter((p) => p.kind === 'region' && p.path !== plan.path && have(p.path));
    const cs = cities(null, plan.path).filter((c) => plan.kind === 'hub' || c.region === plan.region);
    const byCity = {};
    for (const c of cs) (byCity[c.citySlug] ||= []).push(c);
    const cityHtml = Object.values(byCity).length ? `<h3>${plan.kind === 'hub' ? 'API training by city' : `API training in ${esc(plan.region)} cities`}</h3>`
      + Object.values(byCity).map((list) => `<p><strong>${esc(placeOf(list[0]))}:</strong> ${list.sort((a, b) => a.course.localeCompare(b.course)).map((c) => `<a href="${c.path}">${esc(COURSE[c.course].code)}</a>`).join(' · ')}</p>`).join('') : '';
    const regHtml = regionRows.length ? `<p>${plan.kind === 'hub' ? 'By region' : 'Other regions'}: ${regionRows.map((r) => `<a href="${r.path}">${esc(r.region)}</a>`).join(' · ')}.</p>` : '';
    items.push([EXAM_SCHEDULE, 'API exam windows and deadlines'], ['/aws-cwi-training', 'AWS CWI exam prep (6 days)'], ['/ndt-training-usa', 'NDT training in the USA']);
    return `<section data-api-related="2026-11-28"><h2>Related pages</h2>${cityHtml}${regHtml}${linkList(items)}</section>`;
  }
  // City page
  const c = COURSE[plan.course];
  if (have(NATIONAL(plan.course))) items.push([NATIONAL(plan.course), `${c.code} training: course overview`]);
  items.push([c.cert, plan.course === '580' ? 'Risk-based inspection (RBI) services' : `${c.code} certification requirements`]);
  const same = PLAN.filter((p) => p.kind === 'city' && p.citySlug === plan.citySlug && p.path !== plan.path && have(p.path));
  for (const s of same) items.push([s.path, `${COURSE[s.course].code} training in ${placeOf(s)}`]);
  const reg = PLAN.find((p) => p.kind === 'region' && p.region === plan.region && have(p.path));
  if (reg) items.push([reg.path, `API inspector training in the ${reg.region}`]);
  for (const x of [builtLink(`/ndt-training-${plan.citySlug}`, `NDT training in ${placeOf(plan)}`), builtLink(`/training/cwi-training-${plan.citySlug}`, `AWS CWI exam prep in ${placeOf(plan)}`)]) if (x) items.push(x);
  const sibs = cities(plan.course, plan.path);
  const near = sibs.filter((x) => x.region === plan.region).concat(sibs.filter((x) => x.region !== plan.region)).slice(0, 6);
  const nearHtml = near.length ? `<p>${esc(c.code)} training in other cities: ${near.map((x) => `<a href="${x.path}">${esc(placeOf(x))}</a>`).join(' · ')}.</p>` : '';
  return `<section data-api-related="2026-11-28"><h2>Related pages</h2>${linkList(items)}${nearHtml}</section>`;
}

function ctaBlock(plan) {
  const what = plan.course === 'all' ? 'API exam prep' : `${COURSE[plan.course].code} exam prep`;
  const where = plan.kind === 'city' ? placeOf(plan) : plan.kind === 'region' ? plan.region : 'US';
  const href = `/contact?service=training&amp;subject=${encodeURIComponent(`${what} - ${where}`)}`;
  return `<section data-api-cta="2026-11-28"><h2>Enquire about ${esc(what)}</h2>`
    + `<p>Tell us which API examination you are preparing for, the exam window you are aiming at and, if you are an employer, how many candidates you are sponsoring. We reply within one business day with the course details and a quote.</p>`
    + `<p><a href="${href}">Enquire about ${esc(what)}</a></p></section>`;
}

export function apiTrainingMain({ plan, rec }) {
  const faq = (rec.faq || []).map((f) => `<h3>${esc(f.q)}</h3><p>${f.a}</p>`).join('');
  return `<h1>${esc(rec.h1)}</h1>${rec.html}${apiFormatBlock(plan)}<h2>Frequently asked questions</h2>${faq}${relatedBlock(plan)}${ctaBlock(plan)}`;
}

function schemaFor({ plan, rec }, path) {
  const url = SITE + path;
  const org = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT' };
  const out = [];
  if (plan.kind === 'national') {
    out.push({ '@context': 'https://schema.org', '@type': 'Course', '@id': `${url}#course`, name: `${COURSE[plan.course].code} exam preparation course`,
      description: rec.description, url, provider: org, inLanguage: 'en',
      offers: { '@type': 'Offer', category: 'Paid', availability: 'https://schema.org/InStock' },
      hasCourseInstance: [{ '@type': 'CourseInstance', name: 'Self-paced online with instructor Q&A', courseMode: 'Online' }] });
  } else {
    const about = plan.kind === 'city' && have(NATIONAL(plan.course)) ? { about: { '@id': `${SITE}${NATIONAL(plan.course)}#course` } } : {};
    out.push({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, name: rec.h1, description: rec.description, url, publisher: org, ...about });
  }
  const qs = (rec.faq || []).filter((f) => f.q && f.a);
  if (qs.length >= 2) out.push({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: qs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') } })) });
  const crumbs = [['Home', '/'], ['Training', '/training']];
  if (plan.kind !== 'hub' && have(HUB)) crumbs.push(['API inspector training in the USA', HUB]);
  if (plan.kind === 'city' && have(NATIONAL(plan.course))) crumbs.push([`${COURSE[plan.course].code} training`, NATIONAL(plan.course)]);
  crumbs.push([rec.h1, path]);
  out.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + p })) });
  return out;
}

const header = () => '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/api-inspector-training-usa">API exam prep</a><a href="/aws-cwi-training">AWS CWI exam prep</a><a href="/contact">Contact</a></nav></header>';

export const apiTrainingStats = { updated: 0, added: 0 };
export function applyApiTrainingRoutes(routes) {
  const map = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));
  for (const [path, entry] of apiTrainingPaths()) {
    let r = map.get(path);
    if (!r) { r = { path }; routes.push(r); map.set(path, r); apiTrainingStats.added++; } else apiTrainingStats.updated++;
    r.title = entry.rec.title;
    r.description = entry.rec.description;
    r.canonical = SITE + path;
    r.bodyContent = `  ${header()}\n  <main>${apiTrainingMain(entry)}</main>`;
    r.structuredData = schemaFor(entry, path);
    r.noindex = false; r.noindexFollow = false; r.prunedByDemand = false;
    r.publishedAt = r.publishedAt || entry.rec.published || '2026-11-28';
    r.apiTraining = `${entry.plan.course}:${entry.plan.kind}`;
  }
  return apiTrainingStats;
}

export function apiTrainingUpgrades() {
  const out = {};
  for (const [path, entry] of apiTrainingPaths()) out[path] = { title: entry.rec.title, description: entry.rec.description, html: apiTrainingMain(entry), replace: true };
  return out;
}

// ── Guard ────────────────────────────────────────────────────────────────────────────────────────
const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const NEG = /\b(?:not|no|never|nor|without|isn['’]t|doesn['’]t|don['’]t|cannot|can['’]t|neither|outside)\b/i;
const MONTH = '(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)';
export const API_RULES = [
  ['price figure', /(?:\$|USD|US\$|AED|SAR|QAR|€|£)\s?\d/],
  ['time promise', /\b(?:within|in under|in less than)\s+(?:\d+|two|three|five|24|48|72)\s*(?:business\s+|working\s+)?(?:hours?|days?|weeks?)\b/i],
  ['course length', /\b(?:\d+|one|two|three|four|five|six|seven|eight|ten|twelve)[- ](?:day|week|month|hour)s?(?:[- ]long)?\s+(?:course|programme|program|class|bootcamp|boot camp|seminar)\b|\bcourse (?:lasts|runs for|takes)\s+(?:\d+|one|two|three|four|five|six)\b/i],
  ['scheduled classes', /\b(?:live (?:online )?(?:class|classes|session|sessions|lecture|webinar)s?|next (?:cohort|intake|class|session) (?:starts|begins|runs)|classroom (?:sessions?|course) in\b)/i, true],
  ['exam window date', new RegExp(`\\b${MONTH}\\.?\\s+\\d{1,2}(?:\\s*[–-]\\s*\\d{1,2})?(?:,|\\b)(?!\\d)`)],
  ['presence claim', /\bour\s+(?:[A-Z][a-z]+\s+){0,2}(?:office|lab|laboratory|centre|center|classroom|campus|branch|facility)\b/],
  ['superlative', /\b(?:Atlantis(?: NDT)?(?:['’]s)?|we are|our course is)\b[^.]{0,40}\b(?:the )?(?:first|only|leading|number one|#1|best|premier|world-class)\b/i],
  ['pass rate / guarantee', /\b\d{2}(?:\.\d)?\s?%\s*(?:first[- ]time\s+)?pass|\bguarantee|\bpass (?:on )?your first (?:try|attempt),? (?:or|guaranteed)/i],
  ['API approval claim', /\b(?:Atlantis(?: NDT)?|we|our course|the course)\b[^.]{0,60}\b(?:is|are|has been|as)\s+(?:an?\s+)?(?:API[- ](?:approved|accredited|authori[sz]ed|endorsed|licensed|certified)|official API|approved by (?:API|the American Petroleum Institute)|(?:an? )?API (?:TPCP|training provider))/i, true],
  ['Atlantis certifies / administers', /\b(?:Atlantis(?: NDT)?|we|our instructors?)\b[^.]{0,40}\b(?:issue|issues|grant|grants|award|awards|administer|administers|proctor|proctors)\b[^.]{0,30}\b(?:API|certification|certificates?|exam|examination)\b/i, true],
  ['founder misattribution', /Rayavarapu[^.]{0,160}\b(?:API (?:510|570|580|653)|Authori[sz]ed Inspector|CWI|NAS 410)/i],
  ['instructor named or credentialed', /\b(?:the |our )?instructor(?:s)? (?:is|are) (?:an? )?(?:API|AWS|ASNT|certified|Level III)\b/i],
  ['US RT offer', /\b(?:Atlantis(?: NDT)?|we)\b[^.]{0,40}\b(?:perform|performs|provide|provides|offer|offers)\b[^.]{0,30}\b(?:radiograph(?:y|ic testing)|RT\b)/i, true],
  ['FFS offer', /\b(?:Atlantis(?: NDT)?|we)\b[^.]{0,40}\b(?:perform|performs|provide|provides|offer|offers|deliver|delivers)\b[^.]{0,40}\b(?:fitness[- ]for[- ]service|FFS|remaining[- ]life (?:assessments?|calculations?))/i, true],
  ['NAS 410', /\bNAS[ -]?410\b/],
  ['client claim', /\b(?:our|we (?:have )?(?:trained|prepared))\s+(?:clients?|students?|candidates?)\s+(?:at|from|include)\b/i],
];
export function assertApiTrainingClean(builtPaths) {
  const built = builtPaths instanceof Set ? builtPaths : new Set(builtPaths || []);
  const errors = [];
  const own = new Map();
  // The US training block links API city pages only for cities listed as live; each must have all four records.
  for (const slug of API_LIVE_CITIES) for (const c of ['510', '570', '580', '653']) if (!have(`/training/api-${c}-training-${slug}`)) errors.push(`API_LIVE_CITIES lists ${slug} but /training/api-${c}-training-${slug} has no record`);
  for (const [path, { plan, rec }] of apiTrainingPaths()) {
    if (built.size && !built.has(path)) errors.push(`${path}: not built`);
    if (rec.path && rec.path !== path) errors.push(`${path}: record path ${rec.path}`);
    const words = strip(`${rec.html} ${(rec.faq || []).map((f) => `${f.q} ${f.a}`).join(' ')}`).split(' ').filter(Boolean).length;
    if (words < 2000) errors.push(`${path}: ${words} own words (2,000+ required)`);
    if (!rec.title || rec.title.length > 62) errors.push(`${path}: title length ${rec.title?.length}`);
    if (!rec.description || rec.description.length < 110 || rec.description.length > 160) errors.push(`${path}: description length ${rec.description?.length}`);
    if ((rec.faq || []).length < 6) errors.push(`${path}: ${(rec.faq || []).length} FAQs (6+ required)`);
    if ((rec.html.match(/<h2>/g) || []).length < 6) errors.push(`${path}: fewer than 6 sections`);
    const all = strip(`${rec.title} ${rec.description} ${rec.h1} ${rec.html} ${(rec.faq || []).map((f) => `${f.q} ${f.a}`).join(' ')}`);
    for (const [label, re, negOk] of API_RULES) {
      const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
      let m;
      while ((m = g.exec(all)) !== null) {
        const i = m.index;
        const sent = all.slice(Math.max(0, all.lastIndexOf('. ', i)), all.indexOf('. ', i + m[0].length) + 1 || undefined);
        if (!(negOk && NEG.test(sent))) errors.push(`${path}: ${label}: "${sent.trim().slice(0, 170)}"`);
        if (m[0].length === 0) g.lastIndex++;
      }
    }
    if (!/\bself-paced\b|\bat your own pace\b|\bown pace\b/i.test(all)) errors.push(`${path}: does not say the course is self-paced`);
    if (!/\binstructor\b/i.test(all)) errors.push(`${path}: does not mention instructor Q&A`);
    if (!/\b(?:API|American Petroleum Institute)\b[^.]{0,80}\b(?:administers|issues|certif)/i.test(all)) errors.push(`${path}: does not say API administers the exam / issues the certification`);
    if (plan.kind === 'city' && !new RegExp(`no Atlantis (?:classroom|office|training centre|training center)[^.]{0,20}in ${plan.city.split(' ')[0]}`, 'i').test(all)) errors.push(`${path}: city page must say there is no Atlantis classroom in ${plan.city}`);
    // Sentences of 10+ words must be the page's own.
    for (const s of all.split(/(?<=[.!?])\s+/)) {
      const k = s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
      if (k.split(' ').length < 10) continue;
      if (own.has(k) && own.get(k) !== path) errors.push(`${path}: sentence shared with ${own.get(k)}: "${s.slice(0, 120)}"`);
      else own.set(k, path);
    }
    const html = `${rec.html} ${(rec.faq || []).map((f) => f.a).join(' ')}`;
    for (const m of html.matchAll(/href="(\/[^"?#]*)/g)) {
      const t = m[1].replace(/\/$/, '') || '/';
      if (t === '/contact') continue;
      if (built.size && !built.has(t)) errors.push(`${path}: link to unbuilt ${t}`);
    }
  }
  if (errors.length) throw new Error(`api-training-2026-11: ${errors.length} problem(s):\n  ${errors.slice(0, 50).join('\n  ')}`);
  return true;
}

// Writer CLI: node scripts/api-training-2026-11.mjs --check <slug> [<slug>…]  (checks records without a build)
if (process.argv[1] && process.argv[1].endsWith('api-training-2026-11.mjs') && process.argv.includes('--check')) {
  const want = new Set(process.argv.slice(process.argv.indexOf('--check') + 1));
  const errs = [];
  try { assertApiTrainingClean(new Set()); } catch (e) { errs.push(...String(e.message).split('\n').slice(1).map((s) => s.trim())); }
  // The build also runs the training geo-honesty scan on /training/* pages; run it here too.
  const { scanTrainingGeoHonesty } = await import('./training-geo-honesty-2026-10.mjs');
  for (const [path, entry] of apiTrainingPaths()) {
    for (const v of scanTrainingGeoHonesty(apiTrainingMain(entry), path)) errs.push(`${path}: geo honesty ${v.rule}: "${v.sentence.slice(0, 160)}"`);
  }
  const mine = want.size ? errs.filter((e) => [...want].some((s) => e.includes(`api-training-${s}`) || e.includes(`/${s}`) || e.includes(s))) : errs;
  const n = [...apiTrainingPaths()].filter(([p]) => !want.size || [...want].some((s) => p.endsWith(s))).length;
  console.log(mine.length ? mine.join('\n') : `OK: ${n} record(s) pass`);
  process.exit(mine.length ? 1 : 0);
}
