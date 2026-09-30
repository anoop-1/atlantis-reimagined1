// North American training pages — 2026-09-29 (TRAINING-INFRA stream).
//
// One module, two hooks in prerender.mjs:
//   prepareNaTrainingRoutes(routes)  — runs on the route list just before the
//     deep-content injection: claim sanitiser, <main> guarantee, city-scoped H1,
//     individual-vs-company path block, exact-anchor routing to the national
//     owner pages, "Nationwide" link block on the owner pages, course fact
//     blocks + Course/CourseInstance schema on the per-method course pages, and
//     the new /snt-tc-1a-employer-certification-program route.
//   finalizeNaTrainingRoute(route)  — runs at write time after every CTR layer,
//     so the city-scoped title/description win on the NA city pages (the CTR
//     agent does not touch /ndt-training-{city}; this stream owns them).
//
// Data: src/data/na-training-cities.json, src/data/course-facts.json,
// src/data/snt-tc-1a-hours.json — the same files the React layer reads.
//
// Hard rules honoured: no prices, no dates, no physical centre, ASNT
// SNT-TC-1A training only (API/CSWIP/ISO 9712 mentioned as employer context
// only), instructor = Anoop Rayavarapu, ASNT NDT Level III.
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const SITE = 'https://atlantisndt.com';
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const NA = readJson('src/data/na-training-cities.json').cities;
const FACTS = readJson('src/data/course-facts.json');
const HOURS = readJson('src/data/snt-tc-1a-hours.json');

export const MS_FORM_URL = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u';
export const EMPLOYER_PATH = '/snt-tc-1a-employer-certification-program';
// Owner of "asnt level iii consulting": best-positioned commercial page in the
// 2026-09-29 NA pull (/consulting 27.8 in 28d vs 53-90 for the others; the
// blog that out-ranks it is informational).
export const CONSULTING_OWNER = '/consulting';
const OWNER_PAGES = ['/training', '/ndt-training-online', '/snt-tc-1a-training-certification', '/asnt-level-iii-training', '/corporate-ndt-training', EMPLOYER_PATH];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enc = (s) => encodeURIComponent(s);

export function naSlugOf(path) {
  const m = /^\/ndt-training-([a-z0-9-]+)$/.exec(path || '');
  return m && NA[m[1]] ? m[1] : null;
}

export function naMeta(slug) {
  const e = NA[slug];
  if (!e) return null;
  const [name, st, country, kind] = e;
  const label = kind === 'city' ? `${name}, ${st}` : name;
  const Label = label.charAt(0).toUpperCase() + label.slice(1);
  const title = kind === 'country'
    ? `NDT Training in ${name} — Online & Onsite ASNT SNT-TC-1A Courses`
    : `NDT Training in ${label} — Online & Onsite ASNT Courses`;
  return {
    slug, name, st, country, kind, label, Label,
    title,
    h1: title,
    description: `ASNT SNT-TC-1A Level I, II & III NDT training for ${label} employers and technicians — live online or onsite at your facility. Quote within one business day.`,
  };
}

// ── Claim sanitiser ───────────────────────────────────────────────────────
// [label, regex, replacement(html), replacement(text) | undefined = same]
const EXAM_TXT = "Employer examinations (general, specific and practical) are administered by an ASNT Level III under your written practice; ASNT's own central examinations are booked through ASNT's testing arrangements, not through Atlantis.";
const EXAM_HTML = "Employer examinations (general, specific and practical) are administered by an ASNT Level III under your written practice; ASNT&#39;s own central examinations are booked through ASNT&#39;s testing arrangements, not through Atlantis.";
export const SANITISE_RULES = [
  ['exam-centre-sentence', /Examinations are administered locally through [^.<"]+\./g, EXAM_HTML, EXAM_TXT],
  ['exam-centre-market', /[^<>."]*? administers? [A-Za-z, ]*examinations for this market\./g, ' ' + EXAM_HTML, ' ' + EXAM_TXT],
  ['exam-centre-row', /<th scope="row">Examination centre<\/th><td>[^<]*<\/td><td>[^<]*<\/td>/g, '<th scope="row">Examinations</th><td>Employer exams by an ASNT Level III under your written practice</td><td>No Atlantis exam centre; ASNT central exams via ASNT&#39;s own testing arrangements</td>', null],
  ['exam-centre-list', /<h2>Exam centres and practical facilities<\/h2>\s*<ul>[\s\S]*?<\/ul>/g, `<h2>How examinations and practicals work</h2>\n    <p>${EXAM_HTML} Practical examinations run on real specimens at your employer's site; Atlantis does not operate a training or exam centre in this market.</p>`, null],
  ['exam-admin-locally', /(ASNT|CGSB|ASNT, CGSB) examinations administered locally/g, 'Employer exams by an ASNT Level III', null],
  ['exam-slot', /Atlantis NDT books your exam slot as part of the training package\.?/g, 'Your Level III schedules the employer examinations under your written practice.', null],
  ['authorized-exam-centers', /\s*[^.<>"]*one of only three ASNT Authorized Exam Centers worldwide[^.<>"]*\./g, '', ''],
  ['training-runs-on-other-scheme', /Training runs on [A-Z0-9 ]+ and [A-Z0-9 ]+ certification, delivered on-site, at arranged venues, or blended\./g, 'Atlantis training runs to ASNT SNT-TC-1A only, delivered live online, onsite at your facility, or blended.', null],
  ['other-scheme-required', /Local employers here also commonly require ([^.,<"]+), sat separately through its own accredited body\./g, 'Some local employers also ask for $1, a separate scheme sat through its own body; Atlantis does not train or examine for it.', null],
  ['cswip-recognised', /ASNT leads this market, with ([A-Z0-9 ]+) also recognised\./g, 'ASNT SNT-TC-1A leads this market; $1 appears on some contracts as a separate scheme that Atlantis does not deliver.', null],
  ['in-person-classroom', /([Dd])elivered as in-person classroom, /g, '$1elivered as live online classroom, ', null],
  ['public-classroom', /public classroom cohorts/g, 'live online classroom cohorts', null],
  ['classroom-cohorts', /Classroom cohorts with supervised practical hours logged to SNT-TC-1A requirements\./g, 'Live online classroom cohorts, with practical hours supervised at your employer&#39;s site and logged to SNT-TC-1A requirements.', "Live online classroom cohorts, with practical hours supervised at your employer's site and logged to SNT-TC-1A requirements."],
  ['our-locations', /a scheduled cohort at (one of our locations|an Atlantis location)/g, 'a scheduled live-online cohort', null],
  ['other-locations', /scheduled cohorts at other locations/g, 'scheduled live-online cohorts', null],
  ['facility-or-ours', /at your facility or ours/g, 'at your facility or live online', null],
  ['based-in-houston-1', /Atlantis is based in Houston, so training here runs either at your facility or as a scheduled cohort/g, 'Training for Houston employers runs either onsite at your facility or as a live-online cohort', null],
  ['based-in-houston-2', /Yes — Atlantis is based in Houston and runs both on-site and scheduled training here\./g, 'Yes — Atlantis runs onsite training at Houston employers&#39; facilities and live-online cohorts that Houston technicians can join; there is no walk-in training centre.', "Yes — Atlantis runs onsite training at Houston employers' facilities and live-online cohorts that Houston technicians can join; there is no walk-in training centre."],
  ['api-prep-offer', /,? and preparation for API 510, 570 and 653 inspector certification/g, '', ''],
  ['api-prep-offer-2', /(preparation|prep) (for|towards) API 510(\/| ?, ?)570(\/| ?, ?(and )?)653( inspector)?( certification| exams?)?/gi, 'the ASNT method training that sits underneath API inspector roles (API certifications themselves are sat through API)', null],
  ['enroll-email', /enroll@atlantisndt\.com/g, 'info@atlantisndt.com', null],
  ['fact-austin', /aerospace \(Bell, Lockheed Skunk Works\)/g, 'aerospace and defense supply-chain work', null],
  ['fact-baltimore', /, and Constellation Energy Crane Generating Station \(formerly Brandon Shores\)/g, ', and the region&#39;s coal- and gas-fired generating stations', ", and the region's coal- and gas-fired generating stations"],
  ['fact-mobile-1', /,? and ThyssenKrupp Steel USA/g, ', and the AM/NS Calvert steel mill', null],
  ['fact-mobile-2', /and Hyundai Steel feed/g, 'and the AM/NS Calvert mill feed', null],
  ['fact-mobile-3', /\(just east in Pascagoula\)/g, '(just west in Pascagoula)', null],
  ['fact-milstd2132', /MIL-STD-2132/g, 'NAVSEA T9074-AS-GIB-010/271 and MIL-STD-2035', null],
  ['fact-honeywell', /\s?Honeywell uses NAS-410 overlay on aerospace NDT roles\./g, '', ''],
  ['faculty', /Atlantis NDT employs 50\+ ASNT Level III certified instructors globally\.?/g, 'Training is led by Anoop Rayavarapu, ASNT NDT Level III and founder of Atlantis NDT.', null],
  ['pass-rate', /\s?(with )?(an? )?\d{2,3}\s?% (first[- ]time )?pass(ing)? rate/gi, '', ''],
  // Canada (2026-09-30 lead scope): SNT-TC-1A only, no CGSB/NDTCB-recognised
  // courses, no local exam centres, no "training hubs"; CGSB closed 1 April
  // 2026 while NRCan's NDT Certification Body keeps certifying to CAN/CGSB-48.9712.
  ['ca-cgsb-programmes', /runs? ASNT and CGSB (training )?programmes/g, 'runs ASNT SNT-TC-1A training (not CGSB/NDTCB-recognised courses)', null],
  ['ca-lms', /Blended online theory through Atlantis LMS/g, 'Blended live online theory through Atlantis eLearning', null],
  ['ca-lms-2', /Atlantis LMS/g, 'Atlantis eLearning', null],
  ['nearby-markets', /Atlantis NDT also runs training programmes in these nearby markets:/g, 'Nearby markets with their own training pages (delivered live online or onsite at your facility):', null],
  ['training-hubs', /\s*[^.<>"]*Atlantis[^.<>"]*training hubs?[^.<>"]*\./g, '', ''],
  ['exam-centre-named', /\s*[^.<>"]*\b(CINDE|Acuren|MISTRAS|Mistras|Hope Aero|Paragon)\b[^.<>"]*\bexam(ination)?s?\b[^.<>"]*\./g, ' ' + EXAM_HTML, ' ' + EXAM_TXT],
  ['cgsb-exams', /\bCGSB examinations\b/g, 'CAN/CGSB-48.9712 examinations (certified by NRCan&#39;s NDT Certification Body)', "CAN/CGSB-48.9712 examinations (certified by NRCan's NDT Certification Body)"],
  ['cgsb-certifies', /\bCGSB certifies that\b/g, 'A CAN/CGSB-48.9712 certificate, issued through NRCan&#39;s NDT Certification Body, shows that', "A CAN/CGSB-48.9712 certificate, issued through NRCan's NDT Certification Body, shows that"],
  ['cgsb-scheme', /the CGSB scheme is central certification/g, 'the CAN/CGSB-48.9712 scheme (certified by NRCan&#39;s NDT Certification Body) is central certification', "the CAN/CGSB-48.9712 scheme (certified by NRCan's NDT Certification Body) is central certification"],
  ['cgsb-source', /Source:<\/strong> CGSB scheme requirements/g, 'Source:</strong> CAN/CGSB-48.9712 as certified by NRCan&#39;s NDT Certification Body (the CGSB itself closed on 1 April 2026)', null],
  ['cgsb-source-txt', /Source: CGSB scheme requirements/g, "Source: CAN/CGSB-48.9712 as certified by NRCan's NDT Certification Body (the CGSB itself closed on 1 April 2026)", null],
  ['nas410-offer', /SNT-TC-1A and NAS ?410 (Level I\/II )?training/g, 'SNT-TC-1A training (NAS 410 employers qualify separately under their own program)', null],
];

export function sanitiseString(s, counts, isText) {
  let out = s;
  for (const [label, rx, html, txt] of SANITISE_RULES) {
    if (isText && txt === null) continue;
    const rep = isText ? (txt === undefined ? html : txt) : html;
    rx.lastIndex = 0;
    const n = (out.match(rx) || []).length;
    if (!n) continue;
    out = out.replace(rx, rep);
    counts[label] = (counts[label] || 0) + n;
  }
  // collapse back-to-back duplicates of the exam sentence
  for (const e of [EXAM_HTML, EXAM_TXT]) {
    while (out.includes(`${e} ${e}`)) out = out.split(`${e} ${e}`).join(e);
    while (out.includes(e + e)) out = out.split(e + e).join(e);
  }
  return out;
}

function walkStrings(o, fn) {
  if (Array.isArray(o)) return o.map((x) => walkStrings(x, fn));
  if (o && typeof o === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(o)) r[k] = walkStrings(v, fn);
    return r;
  }
  return typeof o === 'string' ? fn(o) : o;
}

// ── Schema ────────────────────────────────────────────────────────────────
const COURSE_MODES = ['online', 'onsite', 'blended'];
const courseInstance = (extra = {}) => ({
  '@type': 'CourseInstance',
  courseMode: COURSE_MODES,
  location: 'Online / at your facility',
  inLanguage: 'en',
  ...extra,
});
const PROVIDER = { '@type': 'Organization', name: 'Atlantis NDT', '@id': `${SITE}/#organization`, url: SITE };

function fixCourseNodes(node) {
  if (Array.isArray(node)) return node.map(fixCourseNodes);
  if (!node || typeof node !== 'object') return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = fixCourseNodes(v);
  const t = out['@type'];
  const isCourse = t === 'Course' || (Array.isArray(t) && t.includes('Course'));
  if (isCourse) {
    out.courseMode = COURSE_MODES;
    delete out.offers;
    out.hasCourseInstance = [courseInstance()];
    if (!out.provider) out.provider = PROVIDER;
  }
  if (t === 'CourseInstance') {
    out.courseMode = COURSE_MODES;
    out.location = 'Online / at your facility';
    delete out.startDate; delete out.endDate; delete out.offers; delete out.courseSchedule; delete out.courseWorkload;
  }
  return out;
}

function hasType(node, type) {
  let found = false;
  const walk = (o) => {
    if (found || !o || typeof o !== 'object') return;
    if (Array.isArray(o)) return o.forEach(walk);
    const t = o['@type'];
    if (t === type || (Array.isArray(t) && t.includes(type))) { found = true; return; }
    Object.values(o).forEach(walk);
  };
  walk(node);
  return found;
}

function addToGraph(sd, nodes) {
  if (!sd) return { '@context': 'https://schema.org', '@graph': nodes };
  if (Array.isArray(sd)) return [...sd, { '@context': 'https://schema.org', '@graph': nodes }];
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': [...sd['@graph'], ...nodes] };
  const { '@context': ctx, ...rest } = sd;
  return { '@context': ctx || 'https://schema.org', '@graph': [rest, ...nodes] };
}

function stripTechArticle(sd) {
  const drop = (arr) => arr.filter((n) => !(n && (n['@type'] === 'TechArticle' || n['@type'] === 'Article')));
  if (!sd) return sd;
  if (Array.isArray(sd)) return sd.map(stripTechArticle).filter((x) => !(x && (x['@type'] === 'TechArticle')));
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': drop(sd['@graph']) };
  if (sd['@type'] === 'TechArticle') return null;
  return sd;
}

// ── HTML blocks ───────────────────────────────────────────────────────────
export function pathsBlockHtml(label) {
  const indiv = `${MS_FORM_URL}&amp;path=individual`;
  return `
    <section class="training-paths" aria-label="Choose your training path">
      <h2>Two ways to train in ${esc(label)}</h2>
      <div class="training-path">
        <h3>I&#39;m an individual technician</h3>
        <p>You want Level I or Level II in one method, or you are preparing for ASNT Level III. Theory runs live online; your employer (or the employer you are joining) certifies you under its written practice, and the practical examination is administered by an ASNT Level III on real specimens. <a href="${indiv}" rel="noopener">Send a course enquiry</a> or read <a href="/ndt-training-online">NDT training online</a> first.</p>
      </div>
      <div class="training-path">
        <h3>I&#39;m training a company team</h3>
        <p>You need a crew trained, examined and certified to your SNT-TC-1A written practice, onsite at your facility or blended with live online theory, with Level III oversight and an audit-ready file. See the <a href="${EMPLOYER_PATH}">SNT-TC-1A certification programme for NDT companies</a> or <a href="/contact?service=training&amp;subject=Company%20team%20training">request a company team training quote</a> — quote within one business day.</p>
      </div>
    </section>`;
}

export function routingBlockHtml(label) {
  return `
    <section class="training-national-links" aria-label="National NDT training programmes">
      <h2>National programmes behind this ${esc(label)} page</h2>
      <p>This page covers NDT training for employers and technicians in ${esc(label)}. The national programmes live on their own pages: <a href="/training">NDT training</a> (every method and level across the USA and Canada), <a href="/ndt-training-online">NDT training online</a>, <a href="/snt-tc-1a-training-certification">SNT-TC-1A training and certification</a>, <a href="${EMPLOYER_PATH}">SNT-TC-1A certification programme for NDT companies</a>, <a href="/asnt-level-iii-training">ASNT Level III training</a> and <a href="${CONSULTING_OWNER}">ASNT Level III consulting</a>. Hours by method and level are in the <a href="/resources/training-requirements-matrix">training requirements matrix</a>; practise on the <a href="/practical-ndt">Practical NDT simulator</a>.</p>
    </section>`;
}

export function nationwideBlockHtml() {
  const groups = [
    ['United States — cities', ([, , c, k]) => c === 'USA' && k === 'city'],
    ['United States — states and regions', ([, , c, k]) => c === 'USA' && (k === 'state' || k === 'region')],
    ['Canada', ([, , c]) => c === 'Canada'],
  ];
  const parts = groups.map(([h, f]) => {
    const items = Object.entries(NA).filter(([, e]) => f(e))
      .map(([slug]) => naMeta(slug))
      .sort((a, b) => a.label.localeCompare(b.label))
      .map((m) => `<li><a href="/ndt-training-${m.slug}">NDT training in ${esc(m.label)}</a></li>`).join('');
    return `<h3>${h}</h3><ul class="nationwide-list">${items}</ul>`;
  }).join('\n      ');
  return `
    <section class="training-nationwide" aria-label="NDT training nationwide">
      <h2>Nationwide: NDT training by city, state and region</h2>
      <p>Every programme below is delivered live online or onsite at the employer&#39;s facility under ASNT Level III oversight — Atlantis does not run walk-in training centres. Pick your market for local industries, codes and employer requirements.</p>
      ${parts}
    </section>`;
}

export function courseFactsHtml(path) {
  const f = FACTS.pages[path];
  if (!f) return '';
  const subject = enc(`Course quote - ${f.short} ${f.level}`);
  const prereq = f.prereq || FACTS.prereqByLevel[f.levelIdx] || FACTS.prereqByLevel[1];
  let hours;
  if (f.hoursKey && HOURS.classroom[f.hoursKey]) {
    const i = f.levelIdx;
    const cls = HOURS.classroom[f.hoursKey][i];
    const ojt = HOURS.ojt[f.hoursKey][i];
    const addl = i > 0 ? ` (in addition to Level I: ${HOURS.classroom[f.hoursKey][0]} h classroom, ${HOURS.ojt[f.hoursKey][0]} h OJT)` : '';
    hours = `${cls} h classroom + ${ojt} h on-the-job experience${addl} — SNT-TC-1A recommended minimums from our <a href="/resources/training-requirements-matrix">training requirements matrix</a>; your written practice sets the binding figures`;
  } else {
    hours = `Set by your employer&#39;s written practice — see the <a href="/resources/training-requirements-matrix">training requirements matrix</a> for SNT-TC-1A recommended hours by method and level`;
  }
  const rows = [
    ['Method', esc(f.method)],
    ['Level', esc(f.level)],
    ['Scheme', 'ASNT SNT-TC-1A (employer-based)'],
    ['Prerequisites', esc(prereq)],
    ['Training hours', hours],
    ['Delivery', 'Live online · Onsite at your facility'],
    ['Practical exam', 'Administered by an ASNT Level III under your written practice'],
    ['Practice', '<a href="/practical-ndt">Practical NDT simulator</a> (practice only — not a substitute for the practical exam)'],
    ['Instructor', 'Anoop Rayavarapu, ASNT NDT Level III'],
  ];
  return `
    <section class="course-facts" aria-label="Course facts">
      <table><caption>${esc(f.short)} ${esc(f.level)} course facts</caption><tbody>
        ${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('\n        ')}
      </tbody></table>
      <p><a href="/contact?service=training&amp;subject=${subject}"><strong>Request a course quote</strong></a> — no published prices; quote within one business day.</p>
    </section>`;
}

function courseSchemaFor(path) {
  const f = FACTS.pages[path];
  return {
    '@type': 'Course',
    '@id': `${SITE}${path}#course`,
    name: `${f.short} ${f.level} Training — ASNT SNT-TC-1A`,
    description: `${f.method} ${f.level} training to ASNT SNT-TC-1A (employer-based certification), delivered live online or onsite at your facility, with practical examinations administered by an ASNT Level III under the employer's written practice.`,
    url: `${SITE}${path}`,
    provider: PROVIDER,
    educationalCredentialAwarded: `${f.level} certification issued by the employer under its SNT-TC-1A written practice`,
    coursePrerequisites: f.prereq || FACTS.prereqByLevel[f.levelIdx],
    courseMode: COURSE_MODES,
    instructor: { '@type': 'Person', name: 'Anoop Rayavarapu', jobTitle: 'ASNT NDT Level III' },
    hasCourseInstance: [courseInstance()],
  };
}

// Insert html right after the first paragraph that follows the H1 (first
// screen); fall back to just after the H1, then to the top of <main>.
function insertAfterIntro(body, html) {
  const h1End = body.search(/<\/h1>/i);
  if (h1End >= 0) {
    const after = body.slice(h1End);
    const pEnd = after.search(/<\/p>/i);
    const nextH2 = after.search(/<h2[\s>]/i);
    const at = (pEnd >= 0 && (nextH2 < 0 || pEnd < nextH2)) ? h1End + pEnd + 4 : h1End + 5;
    return body.slice(0, at) + html + body.slice(at);
  }
  const m = body.search(/<main[^>]*>/i);
  if (m >= 0) { const e = body.indexOf('>', m) + 1; return body.slice(0, e) + html + body.slice(e); }
  return html + body;
}

function insertBeforeMainEnd(body, html) {
  const i = body.lastIndexOf('</main>');
  return i >= 0 ? body.slice(0, i) + html + '\n  ' + body.slice(i) : body + html;
}

function ensureMain(body) {
  if (/<main[\s>]/i.test(body)) return body;
  return `  <main>\n${body}\n  </main>`;
}

function setH1(body, h1) {
  return body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, (m, attrs) => `<h1${attrs}>${esc(h1)}</h1>`);
}

// ── Employer programme page ───────────────────────────────────────────────
export function employerProgramRoute() {
  return JSON.parse(readFileSync(join(ROOT, 'src/data/snt-tc-1a-employer-program.json'), 'utf-8'));
}

function employerRouteObject() {
  const d = employerProgramRoute();
  const sections = d.sections.map((s) => `    <h2>${s.h2}</h2>\n${s.html}`).join('\n');
  const faq = d.faqs.map((f) => `      <h3>${f.q}</h3>\n      <p>${f.a}</p>`).join('\n');
  const body = `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/corporate-ndt-training">Corporate Training</a><a href="/snt-tc-1a-training-certification">SNT-TC-1A</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>${d.h1}</h1>
    <p>${d.intro}</p>
    <p><a href="${MS_FORM_URL}" rel="noopener"><strong>Request a programme quote</strong></a> · <a href="/contact?service=training&amp;subject=SNT-TC-1A%20employer%20programme">Talk to an ASNT Level III</a> — quote within one business day.</p>
${sections}
    <h2>Frequently asked questions</h2>
${faq}
  </main>`;
  const strip = (s) => s.replace(/<[^>]+>/g, '');
  return {
    path: EMPLOYER_PATH,
    title: d.title,
    description: d.description,
    canonical: `${SITE}${EMPLOYER_PATH}`,
    publishedAt: '2026-09-29',
    bodyContent: body,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service', '@id': `${SITE}${EMPLOYER_PATH}#service`,
          name: 'SNT-TC-1A Certification Programme for NDT Companies',
          serviceType: 'Employer NDT personnel qualification and certification programme (ASNT SNT-TC-1A)',
          provider: PROVIDER, areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
          url: `${SITE}${EMPLOYER_PATH}`, description: d.description,
        },
        {
          '@type': 'Course', '@id': `${SITE}${EMPLOYER_PATH}#course`,
          name: 'Employer SNT-TC-1A Level I and II training and certification programme',
          description: 'Written practice, method training, general/specific/practical examinations, OJT logging and certification records for an NDT company crew, under ASNT Level III oversight.',
          provider: PROVIDER, courseMode: COURSE_MODES,
          instructor: { '@type': 'Person', name: 'Anoop Rayavarapu', jobTitle: 'ASNT NDT Level III' },
          hasCourseInstance: [courseInstance()],
        },
        { '@type': 'FAQPage', mainEntity: d.faqs.map((f) => ({ '@type': 'Question', name: strip(f.q), acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })) },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Training', item: `${SITE}/training` },
          { '@type': 'ListItem', position: 3, name: 'SNT-TC-1A Certification Programme for NDT Companies', item: `${SITE}${EMPLOYER_PATH}` },
        ] },
      ],
    },
  };
}

// ── Hooks ─────────────────────────────────────────────────────────────────
export function prepareNaTrainingRoutes(routes) {
  const stats = { cities: 0, noMainWrapped: 0, h1Set: 0, courseFixed: 0, courseAdded: 0, owners: 0, methodPages: 0, employer: 0, sanitised: {} };

  // New employer programme route (before generation so it enters the sitemap).
  // route-reconcile.mjs may already have added a thin stub for this App.tsx
  // route; the programme page content always wins.
  {
    const full = employerRouteObject();
    const existing = routes.find((r) => r && r.path === EMPLOYER_PATH);
    if (existing) Object.assign(existing, full); else routes.push(full);
    stats.employer = 1;
  }

  for (const r of routes) {
    if (!r || !r.path) continue;
    const slug = naSlugOf(r.path);
    if (slug && typeof r.bodyContent === 'string') {
      const m = naMeta(slug);
      stats.cities++;
      let body = r.bodyContent;
      if (!/<main[\s>]/i.test(body)) { body = ensureMain(body); stats.noMainWrapped++; }
      // Inline JSON-LD in the body (e.g. backlog-depth Course blocks): parse,
      // sanitise as text, fix Course/CourseInstance, re-serialise.
      const scripts = [];
      let inlineCourse = false;
      body = body.replace(/<script type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g, (m0, attrs, json) => {
        let out = m0;
        try {
          let j = JSON.parse(json);
          j = walkStrings(j, (s) => sanitiseString(s, stats.sanitised, true));
          if (hasType(j, 'Course')) { j = fixCourseNodes(j); inlineCourse = true; }
          out = `<script type="application/ld+json"${attrs}>${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`;
        } catch { /* leave unparseable blocks untouched */ }
        scripts.push(out);
        return `\u0000LD${scripts.length - 1}\u0000`;
      });
      body = sanitiseString(body, stats.sanitised, false);
      body = body.replace(/\u0000LD(\d+)\u0000/g, (m0, i) => scripts[+i]);
      if (/<h1[\s>]/i.test(body)) { body = setH1(body, m.h1); stats.h1Set++; }
      else { body = body.replace(/<main([^>]*)>/i, `<main$1>\n    <h1>${esc(m.h1)}</h1>`); stats.h1Set++; }
      if (!body.includes('class="training-paths"')) body = insertAfterIntro(body, pathsBlockHtml(m.label));
      if (!body.includes('class="training-national-links"')) body = insertBeforeMainEnd(body, routingBlockHtml(m.label));
      r.bodyContent = body;
      let sd = r.structuredData ? walkStrings(r.structuredData, (s) => sanitiseString(s, stats.sanitised, true)) : r.structuredData;
      if (sd && hasType(sd, 'Course')) { sd = fixCourseNodes(sd); stats.courseFixed++; }
      else if (inlineCourse) { stats.courseFixed++; }
      else {
        sd = addToGraph(sd, [{
          '@type': 'Course', '@id': `${SITE}${r.path}#course`,
          name: `NDT Training in ${m.label} — ASNT SNT-TC-1A Level I, II and III`,
          description: m.description, url: `${SITE}${r.path}`, provider: PROVIDER, courseMode: COURSE_MODES,
          hasCourseInstance: [courseInstance()],
        }]);
        stats.courseAdded++;
      }
      r.structuredData = sd;
      r.naTraining = m;
      continue;
    }
    if (OWNER_PAGES.includes(r.path) && typeof r.bodyContent === 'string') {
      let body = ensureMain(r.bodyContent);
      if (r.path === '/training' && !body.includes('class="training-paths"')) body = insertAfterIntro(body, pathsBlockHtml('the USA and Canada'));
      if (!body.includes('class="training-nationwide"')) body = insertBeforeMainEnd(body, nationwideBlockHtml());
      if (r.path !== EMPLOYER_PATH && !body.includes(`href="${EMPLOYER_PATH}"`)) {
        body = insertBeforeMainEnd(body, `\n    <p>Certifying a whole crew? See the <a href="${EMPLOYER_PATH}">SNT-TC-1A certification programme for NDT companies</a>.</p>`);
      }
      r.bodyContent = body;
      stats.owners++;
      continue;
    }
    if (FACTS.pages[r.path] && typeof r.bodyContent === 'string') {
      let body = ensureMain(r.bodyContent);
      body = body.replace(/at your facility or ours/g, 'at your facility or live online');
      if (!body.includes('class="course-facts"')) body = insertAfterIntro(body, courseFactsHtml(r.path));
      r.bodyContent = body;
      let sd = stripTechArticle(r.structuredData);
      if (sd && hasType(sd, 'Course')) sd = fixCourseNodes(sd);
      sd = addToGraph(sd, [courseSchemaFor(r.path)]);
      // one Course per page: drop any pre-existing Course nodes other than ours
      if (sd && Array.isArray(sd['@graph'])) {
        const ours = `${SITE}${r.path}#course`;
        sd['@graph'] = sd['@graph'].filter((n) => !(n && n['@type'] === 'Course' && n['@id'] !== ours));
      }
      r.structuredData = sd;
      stats.methodPages++;
    }
  }
  return stats;
}

export function finalizeNaTrainingRoute(route) {
  const slug = naSlugOf(route.path);
  if (!slug) return route;
  const m = naMeta(slug);
  // Second sanitiser pass: deep-content blocks are injected after
  // prepareNaTrainingRoutes, so writer copy gets the same claim rules here.
  const counts = {};
  const bodyContent = typeof route.bodyContent === 'string' ? sanitiseString(route.bodyContent, counts, false) : route.bodyContent;
  for (const [k, v] of Object.entries(counts)) FINAL_SANITISED[k] = (FINAL_SANITISED[k] || 0) + v;
  return { ...route, bodyContent, title: m.title, ogTitle: m.title, description: m.description, ogDesc: m.description };
}
export const FINAL_SANITISED = {};

// CLI: node scripts/training-na.mjs --sanitise-deep
// Applies the same claim rules to src/data/deep-content/ndt-training-*.json in
// place, so the React <DeepContent> layer carries the corrected copy too.
if (process.argv[1] && process.argv[1].endsWith('training-na.mjs') && process.argv.includes('--sanitise-deep')) {
  const { readdirSync, writeFileSync } = await import('fs');
  const dir = join(ROOT, 'src/data/deep-content');
  const total = {};
  for (const f of readdirSync(dir).filter((n) => /^ndt-training-.*\.json$/.test(n))) {
    const p = join(dir, f);
    const raw = JSON.parse(readFileSync(p, 'utf-8'));
    const arr = Array.isArray(raw) ? raw : [raw];
    let changed = false;
    for (const d of arr) {
      if (!d || typeof d.bodyHtml !== 'string' || !naSlugOf(d.path || `/${f.replace(/\.json$/, '')}`)) continue;
      const c = {};
      const out = sanitiseString(d.bodyHtml, c, false);
      if (out !== d.bodyHtml) { d.bodyHtml = out; changed = true; for (const [k, v] of Object.entries(c)) total[k] = (total[k] || 0) + v; }
    }
    if (changed) writeFileSync(p, JSON.stringify(Array.isArray(raw) ? arr : arr[0], null, 2) + '\n');
  }
  console.log('deep-content sanitised:', JSON.stringify(total));
}
