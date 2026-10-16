// Course next step on standards, code-explainer and exam-prep pages (2026-10-12 release,
// SEO audit action 5). One source for both layers: React renders the HTML returned here
// (DepthPage, StandardDetail, BlogDetail, the Level III study guide) and the crawler gets
// the same HTML from scripts/course-next-step-2026-10.mjs, inserted after the page's first
// answer section and again before </main>. Inline styles only, so the block looks the same
// in the crawler copy, in blog HTML strings and in React without Tailwind classes.
//
// Why: the standards pages went from 29 to 210 clicks in the audit window with 0 key events,
// and exam-prep posts convert at 2.6 per 100 organic sessions against 12.4 on training pages.
// A reader of a code explainer is usually a technician who has to apply that code, so the
// natural next step is the matching method course, plus Level III consulting for employers.
//
// Rules: real built URLs only (assertCourseNextStepClean checks them at build); no prices,
// no claims beyond what the linked pages state; a page with no matching Atlantis course
// (RBI, FFS, PMI, cathodic protection, coatings, leak testing, ILI, refractory, API exam
// candidates) gets no block rather than a forced one.

export const COURSE_NEXT_STEP_MARKER = 'data-course-next-step="2026-10"';

export const LEVEL3 = { href: '/consulting/ndt-consulting-level-iii', label: 'ASNT Level III consulting' };

export const COURSES = {
  ut1: { href: '/ut-level-1-training', label: 'UT Level 1 course', covers: 'straight-beam thickness measurement, calibration on reference blocks and recording readings to a written procedure' },
  ut2: { href: '/ut-level-2-training', label: 'UT Level 2 course', covers: 'angle-beam weld examination on flawed samples, calibration and reference sensitivity, and evaluating indications against ASME, AWS and API acceptance criteria' },
  paut: { href: '/paut-level-2-training-course', label: 'PAUT Level 2 course', covers: 'probe and wedge selection, focal-law set-up, sectorial and encoded scanning, and scan-plan execution' },
  tofd: { href: '/tofd-training-certification-course', label: 'TOFD training course', covers: 'probe-pair configuration and probe centre spacing, lateral-wave and back-wall identification, and D-scan depth sizing' },
  rt: { href: '/rt-level-2-training', label: 'RT Level 2 course', covers: 'film and digital image interpretation, densitometry and IQI practice, and code acceptance drills' },
  pt: { href: '/pt-level-2-training', label: 'PT Level 2 course', covers: 'penetrant type, removal method and developer choices, dwell and temperature control, and interpreting indications against acceptance criteria' },
  mt: { href: '/mt-level-2-training', label: 'MT Level 2 course', covers: 'magnetization technique and field direction, field-adequacy checks and interpretation practice on flawed weld samples' },
  vt: { href: '/vt-level-2-training', label: 'VT Level 2 course', covers: 'weld and surface visual examination, measurement with weld gauges, and accept or reject decisions against the governing acceptance criteria' },
  et: { href: '/et-level-2-training', label: 'ET Level 2 course', covers: 'impedance-plane analysis, reference standards with machined notches, and surface, bolt-hole and tubing signal interpretation' },
  l2: { href: '/ndt-level-2-training', label: 'NDT Level 2 training', covers: 'Level 2 theory, calibration and interpretation practice across UT, RT, MT, PT, ET and VT' },
  l3: { href: '/asnt-level-iii-training', label: 'ASNT Level III exam preparation', covers: 'the Basic examination, the Method examinations and the procedure and written-practice knowledge a Level III is tested on' },
  snt: { href: '/snt-tc-1a-training-certification', label: 'SNT-TC-1A training and certification programme', covers: 'method training delivered inside your written practice, with the examinations and records each certification rests on' },
};

// Opening sentence by page kind. `code` is the page's own code or topic label.
const LEAD = {
  method: (code) => `${code} examinations are performed and evaluated by technicians qualified in the method.`,
  construction: (code) => `${code} calls for examinations by technicians qualified in each method it requires.`,
  inservice: (code) => `The corrosion rates and remaining-life figures that ${code} works from come from ultrasonic thickness readings.`,
  weld: (code) => `${code} work is checked first by visual examination of the finished welds.`,
  damage: (code) => `Finding the damage ${code} describes depends on technicians qualified in the right method.`,
  personnel: (code) => `${code} sets how NDT personnel are trained, examined and certified.`,
  exam: () => 'Practice questions check recall. Structured training adds the classroom and hands-on hours your certification route requires.',
};

// One-line pointer used in the compact block after the first answer.
const SHORT = {
  method: (code, c) => `Applying ${code} on the job? The ${c} gives you the hands-on method training it assumes.`,
  construction: (code, c) => `Examining welds to ${code}? The ${c} covers the methods it calls for.`,
  inservice: (code, c) => `Taking thickness readings for ${code} work? Start with the ${c}.`,
  weld: (code, c) => `Inspecting welds to ${code}? The ${c} covers visual weld examination.`,
  damage: (code, c) => `Looking for the damage ${code} describes? The ${c} covers the methods that find it.`,
  personnel: (code, c) => `Qualifying technicians to ${code}? See the ${c}.`,
  exam: (code, c) => `Preparing for the ${code} exam? The ${c} adds structured classroom and hands-on training.`,
};

const NOTE_EMPLOYER = 'Completing a course is not certification: under an employer-based scheme such as SNT-TC-1A, your employer certifies you after its own examinations.';
const NOTE_CENTRAL = 'Completing a course is not certification: under a central scheme an independent certification body examines and certifies you.';

// [path, course key, code or topic label, kind, central scheme?]
const P = [
  // /standards/* (standards.json pages and depth explainers)
  ['/standards/api-1104', 'l2', 'API 1104', 'construction'],
  ['/standards/api-510', 'ut1', 'API 510', 'inservice'],
  ['/standards/api-570', 'ut1', 'API 570', 'inservice'],
  ['/standards/api-571', 'l2', 'API RP 571', 'damage'],
  ['/standards/api-574', 'ut1', 'API RP 574', 'inservice'],
  ['/standards/api-575', 'ut1', 'API RP 575', 'inservice'],
  ['/standards/api-577', 'vt', 'API RP 577', 'weld'],
  ['/standards/api-583', 'l2', 'API RP 583', 'damage'],
  ['/standards/api-653', 'ut1', 'API 653', 'inservice'],
  ['/standards/asme-b31-1', 'l2', 'ASME B31.1', 'construction'],
  ['/standards/asme-b31-3', 'l2', 'ASME B31.3', 'construction'],
  ['/standards/asme-b31-4', 'l2', 'ASME B31.4', 'construction'],
  ['/standards/asme-b31-8', 'l2', 'ASME B31.8', 'construction'],
  ['/standards/asme-section-ix', 'vt', 'ASME Section IX', 'weld'],
  ['/standards/asme-section-v-article-1', 'snt', 'ASME Section V Article 1', 'personnel'],
  ['/standards/asme-section-v-article-2', 'rt', 'ASME Section V Article 2', 'method'],
  ['/standards/asme-section-v-article-4', 'ut2', 'ASME Section V Article 4', 'method'],
  ['/standards/asme-section-v-article-5', 'ut2', 'ASME Section V Article 5', 'method'],
  ['/standards/asme-section-v-article-6', 'pt', 'ASME Section V Article 6', 'method'],
  ['/standards/asme-section-v-article-7', 'mt', 'ASME Section V Article 7', 'method'],
  ['/standards/asme-section-v-article-8', 'et', 'ASME Section V Article 8', 'method'],
  ['/standards/asme-section-v-article-9', 'vt', 'ASME Section V Article 9', 'method'],
  ['/standards/asme-section-v-article-23', 'ut1', 'ASME Section V Article 23', 'method'],
  ['/standards/asme-section-viii-div-1', 'l2', 'ASME Section VIII Division 1', 'construction'],
  ['/standards/asme-section-xi', 'l2', 'ASME Section XI', 'construction'],
  ['/standards/astm-e1417', 'pt', 'ASTM E1417', 'method'],
  ['/standards/astm-e1444', 'mt', 'ASTM E1444', 'method'],
  ['/standards/astm-e164', 'ut2', 'ASTM E164', 'method'],
  ['/standards/astm-e165', 'pt', 'ASTM E165', 'method'],
  ['/standards/astm-e2700', 'paut', 'ASTM E2700', 'method'],
  ['/standards/astm-e709', 'mt', 'ASTM E709', 'method'],
  ['/standards/astm-e94', 'rt', 'ASTM E94', 'method'],
  ['/standards/aws-d1-1', 'vt', 'AWS D1.1', 'weld'],
  ['/standards/aws-d1-5', 'vt', 'AWS D1.5', 'weld'],
  ['/standards/en-12668', 'ut2', 'EN 12668', 'method'],
  ['/standards/iso-17636', 'rt', 'ISO 17636', 'method'],
  ['/standards/iso-17640', 'ut2', 'ISO 17640', 'method'],
  ['/standards/iso-3452', 'pt', 'ISO 3452', 'method'],
  ['/standards/iso-9712', 'l2', 'ISO 9712', 'personnel', true],
  ['/standards/iso-9934', 'mt', 'ISO 9934', 'method'],
  ['/standards/nbic-nb-23', 'l2', 'NBIC NB-23', 'construction'],
  // New code explainers in this release (scripts/standards-explainers-2026-10.source.json)
  ['/standards/asme-b31-3-minimum-distance-between-welds', 'l2', 'ASME B31.3', 'construction'],
  ['/standards/asme-pt-mt-acceptance-criteria', 'pt', 'Penetrant and magnetic particle', 'method'],
  ['/standards/api-653-shell-minimum-thickness', 'ut1', 'API 653', 'inservice'],
  ['/standards/api-1104-vs-aws-d1-1', 'vt', 'API 1104 or AWS D1.1', 'weld'],
  // Code-explainer blog posts (not the cannibal workstream's RT vs UT, AWS D1.1 acceptance or cost guides)
  ['/blog/asme-section-v-article-2-radiography-requirements', 'rt', 'ASME Section V Article 2', 'method'],
  ['/blog/asme-section-v-article-2-radiographic-testing-rt-requirements-explained', 'rt', 'ASME Section V Article 2', 'method'],
  ['/blog/asme-section-v-article-4-ut-requirements-explained', 'ut2', 'ASME Section V Article 4', 'method'],
  ['/blog/asme-section-v-article-5-ultrasonic-thickness-measurement-requirements', 'ut1', 'Ultrasonic thickness', 'method'],
  ['/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained', 'pt', 'ASME Section V Article 6', 'method'],
  ['/blog/asme-section-v-article-7-magnetic-particle-mt-requirements-explained', 'mt', 'ASME Section V Article 7', 'method'],
  ['/blog/asme-section-v-article-7-magnetic-particle-requirements', 'mt', 'ASME Section V Article 7', 'method'],
  ['/blog/asme-section-v-article-9-visual-examination-requirements', 'vt', 'ASME Section V Article 9', 'method'],
  ['/blog/asme-section-v-ndt-requirements-guide', 'l2', 'ASME Section V', 'method'],
  ['/blog/asme-b31-3-process-piping-code-explained', 'l2', 'ASME B31.3', 'construction'],
  ['/blog/asme-b31-3-process-piping-requirements', 'l2', 'ASME B31.3', 'construction'],
  ['/blog/asme-b31-1-power-piping-ndt-requirements', 'l2', 'ASME B31.1', 'construction'],
  ['/blog/asme-b31-1-power-piping-code-explained', 'l2', 'ASME B31.1', 'construction'],
  ['/blog/asme-b31-9-building-services-piping-code-2026-decoded', 'l2', 'ASME B31.9', 'construction'],
  ['/blog/asme-section-viii-division-1-pressure-vessel-ndt', 'l2', 'ASME Section VIII Division 1', 'construction'],
  ['/blog/api-1104-weld-acceptance-criteria-pipeline', 'l2', 'API 1104', 'construction'],
  ['/blog/api-653-tank-inspection-intervals-explained', 'ut1', 'API 653', 'inservice'],
  ['/blog/api-510-inspection-intervals-sour-wet-h2s-service', 'ut1', 'API 510', 'inservice'],
  ['/blog/api-570-piping-inspection-code-requirements', 'ut1', 'API 570', 'inservice'],
  ['/blog/api-510-pressure-vessel-inspection-code', 'ut1', 'API 510', 'inservice'],
  ['/blog/nas-410-aerospace-ndt-certification-explained', null, 'NAS 410', 'aero'],
  // Exam-prep posts: the method and level the questions are for. 2026-10-16: the duplicate
  // practice-question URLs are retired (301, vercel.json); only each set's canonical page is mapped.
  ['/blog/ut-level-1-practice-questions', 'ut1', 'UT Level 1', 'exam'],
  ['/blog/ut-level-2-practice-questions', 'ut2', 'UT Level 2', 'exam'],
  ['/blog/ut-level-ii-certification-exam-preparation', 'ut2', 'UT Level 2', 'exam'],
  ['/blog/rt-level-2-practice-questions-2026-free-mock-exam', 'rt', 'RT Level 2', 'exam'],
  ['/blog/mt-level-2-practice-questions-2026-free-mock-exam', 'mt', 'MT Level 2', 'exam'],
  ['/blog/pt-level-2-practice-questions-2026-free-mock-exam', 'pt', 'PT Level 2', 'exam'],
  ['/blog/vt-level-2-practice-questions-2026-free-mock-exam', 'vt', 'VT Level 2', 'exam'],
  ['/blog/et-level-2-practice-questions-2026-free-mock-exam', 'et', 'ET Level 2', 'exam'],
  ['/blog/paut-level-2-practice-questions-2026-free-mock-exam', 'paut', 'PAUT Level 2', 'exam'],
  ['/blog/tofd-level-2-practice-questions-2026-free-mock-exam', 'tofd', 'TOFD', 'exam'],
  ['/blog/asnt-level-3-basic-exam-guide-2026', 'l3', 'ASNT Level III', 'exam'],
  ['/blog/asnt-level-3-basic-exam-prep', 'l3', 'ASNT Level III', 'exam'],
  ['/resources/asnt-level-iii-study-guide', 'l3', 'ASNT Level III', 'exam'],
  ['/blog/what-happens-if-you-fail-the-asnt-level-ii-exam', 'l2', 'Level II', 'exam'],
  ['/blog/pcn-level-2-exam-guide', 'l2', 'PCN Level 2', 'exam', true],
  ['/blog/cswip-31-exam-prep', 'vt', 'CSWIP 3.1', 'exam', true],
];

// Related code question shown in the end block: links the explainers added in this release
// from the pages whose readers ask that question (contextual inbound links, both layers).
const Q_ACCEPT = ['/standards/asme-pt-mt-acceptance-criteria', 'Where ASME puts PT, MT and visual acceptance criteria'];
const Q_SPACING = ['/standards/asme-b31-3-minimum-distance-between-welds', 'Minimum distance between welds in ASME B31.3'];
const Q_SHELL = ['/standards/api-653-shell-minimum-thickness', 'How API 653 calculates minimum shell thickness'];
const Q_1104 = ['/standards/api-1104-vs-aws-d1-1', 'API 1104 vs AWS D1.1: pipeline and structural welding compared'];
export const RELATED_QUESTION = new Map([
  ['/standards/asme-section-v-article-6', Q_ACCEPT],
  ['/standards/asme-section-v-article-7', Q_ACCEPT],
  ['/standards/asme-section-v-article-9', Q_ACCEPT],
  ['/standards/asme-section-viii-div-1', Q_ACCEPT],
  ['/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained', Q_ACCEPT],
  ['/blog/asme-section-v-article-7-magnetic-particle-mt-requirements-explained', Q_ACCEPT],
  ['/blog/asme-section-v-article-7-magnetic-particle-requirements', Q_ACCEPT],
  ['/blog/asme-section-v-article-9-visual-examination-requirements', Q_ACCEPT],
  ['/blog/asme-section-viii-division-1-pressure-vessel-ndt', Q_ACCEPT],
  ['/standards/asme-b31-3', Q_SPACING],
  ['/blog/asme-b31-3-process-piping-code-explained', Q_SPACING],
  ['/blog/asme-b31-3-process-piping-requirements', Q_SPACING],
  ['/standards/api-653', Q_SHELL],
  ['/standards/api-575', Q_SHELL],
  ['/blog/api-653-tank-inspection-intervals-explained', Q_SHELL],
  ['/standards/api-1104', Q_1104],
  ['/standards/aws-d1-1', Q_1104],
  ['/standards/aws-d1-5', Q_1104],
  ['/blog/api-1104-weld-acceptance-criteria-pipeline', Q_1104],
]);

export const COURSE_NEXT_STEP_PAGES = new Map(P.map(([path, course, code, kind, central]) => [path, { course, code, kind, central: Boolean(central) }]));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const norm = (path) => (String(path || '').replace(/[?#].*$/, '').replace(/\/+$/, '') || '/');

/** Structured parts for a path, or null when the page carries no block. */
export function courseNextStepFor(path) {
  const e = COURSE_NEXT_STEP_PAGES.get(norm(path));
  if (!e) return null;
  if (e.kind === 'aero') {
    return {
      kind: 'aero',
      heading: 'Next step: NAS 410 Level 3 services',
      lead: 'NAS 410 certification is employer-based and runs under the employer\'s Responsible Level 3.',
      course: null,
      note: 'Atlantis provides NAS 410 Level 3 services through an associate who holds NAS 410 Level 3.',
    };
  }
  const c = COURSES[e.course];
  return {
    kind: e.kind,
    heading: `Next step: ${c.label}`,
    lead: LEAD[e.kind](e.code),
    short: (linked) => SHORT[e.kind](e.code, linked),
    course: c,
    note: e.central ? NOTE_CENTRAL : NOTE_EMPLOYER,
  };
}

const BOX = 'border-left:4px solid #2563eb;padding:10px 0 10px 16px;margin:24px 0;';
const A = 'color:#2563eb;text-decoration:underline;';
const H2 = 'font-size:1.25rem;font-weight:700;line-height:1.3;margin:0 0 8px;';
const PS = 'margin:0 0 8px;';

/**
 * HTML for one placement: 'answer' (compact, right after the page's first answer) or
 * 'end' (heading + course + employer line, before </main>). Returns '' when unmapped.
 */
export function courseNextStepHtml(path, placement = 'end') {
  const b = courseNextStepFor(path);
  if (!b) return '';
  const l3 = `<a href="${LEVEL3.href}" style="${A}">${esc(LEVEL3.label)}</a>`;
  const course = b.course ? `<a href="${b.course.href}" style="${A}">${esc(b.course.label)}</a>` : '';
  if (placement === 'answer') {
    const body = b.course
      ? `<strong>Next step:</strong> ${b.short(course)} Employers: ${l3} handles procedures, the written practice and qualification exams.`
      : `<strong>Next step for aerospace employers:</strong> ${esc(b.lead)} ${esc(b.note)} See ${l3}.`;
    return `<aside ${COURSE_NEXT_STEP_MARKER} data-placement="answer" aria-label="Next step" style="${BOX}"><p style="margin:0">${body}</p></aside>`;
  }
  const first = b.course
    ? `<p style="${PS}">${esc(b.lead)} The ${course} covers ${esc(b.course.covers)}. ${esc(b.note)}</p>`
    : `<p style="${PS}">${esc(b.lead)} ${esc(b.note)}</p>`;
  const employer = b.course
    ? `<p style="${PS}"><strong>For employers:</strong> ${l3} covers procedures, the written practice, qualification examinations and audit support for your technicians.</p>`
    : `<p style="${PS}"><strong>For employers:</strong> ${l3} covers procedures, written practices, qualification examinations and audit support; NAS 410 Level 3 work is delivered through the associate.</p>`;
  const q = RELATED_QUESTION.get(norm(path));
  const related = q ? `<p style="${PS}"><strong>Related code question:</strong> <a href="${q[0]}" style="${A}">${esc(q[1])}</a>.</p>` : '';
  return `<section ${COURSE_NEXT_STEP_MARKER} data-placement="end" aria-label="Course next step" style="${BOX}"><h2 style="${H2}">${esc(b.heading)}</h2>${first}${employer}${related}</section>`;
}

/**
 * Insert both placements into an HTML string. Works on a full route body (with <main>) and
 * on a bare article fragment (blogs.json content). The answer block goes after the first
 * data-citation-block="answer" section (and its byline) when the page has one, otherwise
 * before the second <h2>, otherwise after the first paragraph. The end block goes before
 * the last </main>, or at the end of a fragment. Idempotent.
 */
export function insertCourseNextStep(html, path) {
  if (typeof html !== 'string' || !html || html.includes(COURSE_NEXT_STEP_MARKER)) return html;
  const answer = courseNextStepHtml(path, 'answer');
  if (!answer) return html;
  const end = courseNextStepHtml(path, 'end');
  const mainAt = html.indexOf('<main');
  const from = mainAt >= 0 ? mainAt : 0;
  // Whichever comes first in reading order: the end of the answer block, or the start of
  // the second <h2> (standards.json pages answer under "Scope"; some carry a later answer
  // block appended by an upgrade pass, which is not the first answer a reader meets).
  let afterAnswer = -1;
  const ans = html.indexOf('data-citation-block="answer"', from);
  if (ans >= 0) {
    const close = html.indexOf('</section>', ans);
    if (close >= 0) {
      afterAnswer = close + '</section>'.length;
      const byline = html.slice(afterAnswer).match(/^\s*<div data-citation-block="byline">[\s\S]*?<\/div>/);
      if (byline) afterAnswer += byline[0].length;
    }
  }
  let beforeH2 = -1;
  const re = /<h2[\s>]/g;
  re.lastIndex = from;
  re.exec(html);
  const second = re.exec(html);
  if (second) beforeH2 = second.index;
  let at = [afterAnswer, beforeH2].filter((n) => n >= 0).reduce((a, n) => (a < 0 || n < a ? n : a), -1);
  if (at < 0) {
    const p = html.indexOf('</p>', from);
    if (p >= 0) at = p + 4;
  }
  let out = at >= 0 ? html.slice(0, at) + answer + html.slice(at) : html;
  const last = out.lastIndexOf('</main>');
  out = last >= 0 ? out.slice(0, last) + end + out.slice(last) : out + end;
  return out;
}
