// NDT practice tests (2026-10-16). Pure functions shared by both render layers; callers
// pass the set data in, so Vite and Node read the same JSON files without import attributes.
//
//   Sets:   src/data/practice-tests/<method>-level-<n>.json (schema: one canonical page per set,
//           30 original questions, answers and explanations).
//   Crawler + React blog JSON: scripts/practice-tests-2026-10.mjs renders each set with
//           practiceTestPageHtml() and merges the result into the editorial upgrades map
//           (scripts/editorial-upgrades.mjs), which feeds BOTH editorialBlogRecord()
//           (BlogDetail's per-slug JSON) and applyEditorialQuality() (the published HTML).
//   Hub:    /ndt-practice-tests. practiceHubModel() is the one source for the React page
//           (src/pages/NdtPracticeTests.tsx) and the crawler HTML (practiceHubHtml()).
//
// Rules: no prices, no exam question counts, time limits or pass marks for real exams, no
// claim that these are ASNT or employer examination questions. Markup deliberately avoids the
// visible-Q&A patterns the FAQPage extractors read (<h3>/<h4> + <p>, <p><strong>…</strong>):
// practice questions are not FAQs. Every link target is checked against the built routes by
// assertPracticeTestsClean() in scripts/practice-tests-2026-10.mjs.

export const SITE = 'https://atlantisndt.com';
export const PRACTICE_TEST_MARKER = 'data-practice-test="2026-10"';
export const PRACTICE_HUB_MARKER = 'data-practice-hub="2026-10"';
export const QUESTIONS_PER_SET = 30;
export const OPTIONS_PER_QUESTION = 4;
export const LETTERS = ['A', 'B', 'C', 'D'];

/** Display order of the sets on the hub and in "all practice tests" lists. */
export const METHOD_ORDER = ['UT', 'PAUT', 'TOFD', 'RT', 'MT', 'PT', 'VT', 'ET'];

const ASCAN = ['/tools/ultrasonic-a-scan-simulator', 'Ultrasonic A-scan simulator', 'rehearse range, gain and gate settings on a simulated flaw detector in the browser'];
const PRACTICAL = ['/practical-ndt', 'Practical NDT simulator', 'browser-based practical training between classroom sessions'];
const UT_TRAINING = ['/ultrasonic-testing-training', 'Ultrasonic testing (UT) training'];
const UT_L3 = ['/asnt-level-iii-ut-exam-prep', 'ASNT Level III UT exam preparation'];

/**
 * Next-step targets per method. /paut-training and /tofd-training do not exist (checked
 * 2026-10-16), so PAUT and TOFD hand to the ultrasonic testing training page; their Level 2
 * course pages are linked by the course next-step block embedded in each page.
 */
export const METHOD_LINKS = {
  UT: { training: UT_TRAINING, simulator: ASCAN, level3: UT_L3 },
  PAUT: { training: UT_TRAINING, simulator: ASCAN, level3: UT_L3, note: 'Phased array is an ultrasonic technique, so it sits inside the ultrasonic method body of knowledge.' },
  TOFD: { training: UT_TRAINING, simulator: ASCAN, level3: UT_L3, note: 'TOFD is an ultrasonic technique, so it sits inside the ultrasonic method body of knowledge.' },
  RT: { training: ['/radiographic-testing-training', 'Radiographic testing (RT) training'], simulator: PRACTICAL, level3: ['/asnt-level-iii-rt-exam-prep', 'ASNT Level III RT exam preparation'] },
  MT: { training: ['/magnetic-particle-testing-training', 'Magnetic particle testing (MT) training'], simulator: PRACTICAL, level3: ['/asnt-level-iii-mt-exam-prep', 'ASNT Level III MT exam preparation'] },
  PT: { training: ['/penetrant-testing-training', 'Penetrant testing (PT) training'], simulator: PRACTICAL, level3: ['/asnt-level-iii-pt-exam-prep', 'ASNT Level III PT exam preparation'] },
  VT: { training: ['/visual-testing-training', 'Visual testing (VT) training'], simulator: PRACTICAL, level3: ['/asnt-level-iii-vt-exam-prep', 'ASNT Level III VT exam preparation'] },
  ET: { training: ['/eddy-current-testing-training', 'Eddy current testing (ET) training'], simulator: PRACTICAL, level3: ['/asnt-level-iii-et-exam-prep', 'ASNT Level III ET exam preparation'] },
};

export const LEVEL2_EXAM_PREP = ['/asnt-ndt-level-ii-exam-prep', 'ASNT NDT Level II exam preparation'];

export const PRACTICE_HUB = {
  path: '/ndt-practice-tests',
  title: 'NDT Practice Tests and Exam Prep: Free Level II Questions',
  description: 'Free NDT Level II practice tests for UT, PAUT, TOFD, RT, MT, PT, VT and ET: original questions with answers and explanations, plus exam prep guides.',
  h1: 'NDT Practice Tests and Exam Prep',
  enquiry: '/contact?service=training&subject=NDT%20training%20enquiry',
};

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** href for an HTML attribute: escape & in query strings. */
const attr = (href) => esc(href);
const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
export const numberWord = (n) => NUM_WORDS[n] || String(n);
const listJoin = (items) => (items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);
export const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const questionCount = (set) => (set.topics || []).reduce((n, t) => n + (t.questions || []).length, 0);
export const trainingEnquiryHref = (set) => `/contact?service=training&subject=${encodeURIComponent(`${set.method} ${set.level} training`)}`;

export function sortSets(sets) {
  const rank = (s) => { const i = METHOD_ORDER.indexOf(s.method); return i < 0 ? METHOD_ORDER.length : i; };
  return [...sets].sort((a, b) => rank(a) - rank(b) || String(a.id).localeCompare(String(b.id)));
}

// ── validation (the build fails on any error; see assertPracticeTestsClean) ─────────
const PATH_RE = /^(\/[a-z0-9][a-z0-9-]*)+$/;
const HTML_RE = /<\/?[a-z!][^>]*>|&(?:[a-z]+|#\d+|#x[0-9a-f]+);/i;
const MARKDOWN_RE = /\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)/;
const PRICE_RE = /[$£€₹]|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\b(?:price|prices|pricing|fee|fees|tuition|discount)\b|\bper (?:day|hour|seat|student)\b|\bday[- ]rate\b/i;
const CLAIM_RE = /\bguarantee[ds]?\b|\bpass(?:ing)?[- ]rates?\b/i;

function walkStrings(value, at, out) {
  if (typeof value === 'string') out.push([at, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => walkStrings(v, `${at}[${i}]`, out));
  else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) walkStrings(v, at ? `${at}.${k}` : k, out);
  return out;
}

/** Schema errors for one set (empty array = valid). `file` names the source in messages. */
export function validatePracticeSet(set, file = set?.id || 'set') {
  const errs = [];
  const e = (m) => errs.push(`${file}: ${m}`);
  if (!set || typeof set !== 'object') return [`${file}: not an object`];
  for (const k of ['id', 'method', 'methodName', 'level', 'canonicalPath', 'title', 'metaDescription', 'h1', 'lastReviewed']) {
    if (typeof set[k] !== 'string' || !set[k].trim()) e(`missing ${k}`);
  }
  if (set.method && !METHOD_LINKS[set.method]) e(`unknown method ${set.method} (add it to METHOD_LINKS)`);
  if (set.canonicalPath && !PATH_RE.test(set.canonicalPath)) e(`canonicalPath ${set.canonicalPath} is not a site path`);
  if (!Array.isArray(set.retiredPaths)) e('retiredPaths must be an array');
  else for (const p of set.retiredPaths) {
    if (typeof p !== 'string' || !PATH_RE.test(p)) e(`retired path ${p} is not a site path`);
    if (p === set.canonicalPath) e('canonicalPath is also listed as retired');
  }
  if (set.lastReviewed && !/^\d{4}-\d{2}-\d{2}$/.test(set.lastReviewed)) e('lastReviewed must be YYYY-MM-DD');
  for (const k of ['intro', 'howToUse']) {
    if (!Array.isArray(set[k]) || !set[k].length || set[k].some((s) => typeof s !== 'string' || !s.trim())) e(`${k} must be a non-empty array of strings`);
  }
  if (!Array.isArray(set.topics) || !set.topics.length) e('topics must be a non-empty array');
  const ids = new Set();
  let n = 0;
  for (const [ti, t] of (Array.isArray(set.topics) ? set.topics : []).entries()) {
    if (typeof t?.name !== 'string' || !t.name.trim()) e(`topic ${ti} has no name`);
    if (!Array.isArray(t?.questions) || !t.questions.length) { e(`topic "${t?.name}" has no questions`); continue; }
    for (const q of t.questions) {
      n++;
      const where = `question ${q?.id || `#${n}`}`;
      if (typeof q?.id !== 'string' || !q.id.trim()) e(`${where}: missing id`);
      else if (ids.has(q.id)) e(`${where}: duplicate id`);
      else ids.add(q.id);
      for (const k of ['q', 'explanation', 'ref']) if (typeof q?.[k] !== 'string' || !q[k].trim()) e(`${where}: missing ${k}`);
      if (!Array.isArray(q?.options) || q.options.length !== OPTIONS_PER_QUESTION) e(`${where}: needs exactly ${OPTIONS_PER_QUESTION} options`);
      else {
        if (q.options.some((o) => typeof o !== 'string' || !o.trim())) e(`${where}: empty option`);
        if (new Set(q.options.map((o) => String(o).trim().toLowerCase())).size !== q.options.length) e(`${where}: duplicate options`);
      }
      if (!Number.isInteger(q?.answer) || q.answer < 0 || q.answer > OPTIONS_PER_QUESTION - 1) e(`${where}: answer must be an integer 0-${OPTIONS_PER_QUESTION - 1}`);
    }
  }
  if (n !== QUESTIONS_PER_SET) e(`has ${n} questions; exactly ${QUESTIONS_PER_SET} required`);
  for (const [at, s] of walkStrings(set, '', [])) {
    if (HTML_RE.test(s)) e(`${at}: HTML in a plain-text field`);
    if (MARKDOWN_RE.test(s)) e(`${at}: Markdown in a plain-text field`);
    if (PRICE_RE.test(s)) e(`${at}: price or fee wording`);
    if (CLAIM_RE.test(s)) e(`${at}: guarantee or pass-rate claim`);
  }
  return errs;
}

/** Non-fatal notes (title length, answer spread) for the build log. */
export function practiceSetWarnings(set) {
  const w = [];
  if (set.title && set.title.length > 60) w.push(`${set.id}: title ${set.title.length} chars (snippet may truncate)`);
  if (set.metaDescription && (set.metaDescription.length < 120 || set.metaDescription.length > 160)) w.push(`${set.id}: meta description ${set.metaDescription.length} chars`);
  const spread = [0, 0, 0, 0];
  for (const t of set.topics || []) for (const q of t.questions || []) if (Number.isInteger(q.answer)) spread[q.answer]++;
  if (Math.max(...spread) > 10) w.push(`${set.id}: answer positions ${spread.join('/')} (one letter used more than 10 times)`);
  return w;
}

// ── per-set page ─────────────────────────────────────────────────────────────────────
const S = {
  meta: 'color:#475569;margin:0 0 16px;',
  toc: 'margin:8px 0 0;',
  q: 'margin:0 0 22px;padding:14px 16px;border:1px solid #d7e1ea;border-radius:8px;',
  stem: 'margin:0 0 8px;font-weight:600;',
  num: 'color:#075fa8;',
  options: 'list-style:none;padding-left:0;margin:0 0 8px;',
  option: 'margin:2px 0;',
  letter: 'display:inline-block;min-width:1.6em;font-weight:600;',
  details: 'margin:6px 0 0;',
  summary: 'cursor:pointer;color:#075fa8;font-weight:600;',
  answerP: 'margin:6px 0;',
  basis: 'margin:6px 0;color:#475569;',
  note: 'border-left:4px solid #d97706;padding:8px 0 8px 16px;margin:24px 0;',
  next: 'border-left:4px solid #2563eb;padding:10px 0 10px 16px;margin:24px 0;',
};

const formatReviewed = (iso) => {
  const t = Date.parse(`${iso}T00:00:00Z`);
  if (!Number.isFinite(t)) return iso;
  return new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
};

function questionHtml(q, number) {
  const options = q.options.map((o, i) => `<li style="${S.option}"><span style="${S.letter}">${LETTERS[i]}.</span> ${esc(o)}</li>`).join('');
  return `<div class="ptq-question" id="${esc(q.id)}" style="${S.q}">` +
    `<p class="ptq-stem" style="${S.stem}"><span class="ptq-num" style="${S.num}">Question ${number}.</span> ${esc(q.q)}</p>` +
    `<ol class="ptq-options" type="A" style="${S.options}">${options}</ol>` +
    `<details class="ptq-answer" style="${S.details}"><summary style="${S.summary}">Show answer</summary>` +
    `<p style="${S.answerP}">Correct answer: ${LETTERS[q.answer]}. ${esc(q.options[q.answer])}</p>` +
    `<p style="${S.answerP}">${esc(q.explanation)}</p>` +
    `<p style="${S.basis}">Basis: ${esc(q.ref)}</p>` +
    `</details></div>`;
}

/** Labels of every set, in display order, for "all practice tests" lines. */
const methodList = (sets) => listJoin(sortSets(sets).map((s) => s.method));

/**
 * Body HTML of one practice-test page (starts with its <h1>). `inserts` lets the caller add
 * blocks owned by other modules without forking their copy:
 *   afterNote  — after the "practice questions, not exam questions" note (course next step, compact)
 *   beforeNext — after the questions, before "Where to go next" (context block, course next step)
 */
export function practiceTestPageHtml(set, allSets = [set], inserts = {}) {
  const total = questionCount(set);
  const links = METHOD_LINKS[set.method];
  const topics = set.topics.map((t) => ({ ...t, anchor: `topic-${slugify(t.name)}` }));
  const toc = topics.map((t) => `<li><a href="#${t.anchor}">${esc(t.name)}</a> (${t.questions.length} ${t.questions.length === 1 ? 'question' : 'questions'})</li>`).join('');
  let number = 0;
  const topicSections = topics.map((t) => {
    const qs = t.questions.map((q) => questionHtml(q, ++number)).join('');
    return `<section class="ptq-topic" id="${t.anchor}" aria-label="${esc(t.name)}"><h2>${esc(t.name)}</h2>${qs}</section>`;
  }).join('');
  const nextItems = [
    `<li><a href="${attr(links.training[0])}">${esc(links.training[1])}</a>: what Level I and Level II mean in the method and what the practical examination tests.${links.note ? ` ${esc(links.note)}` : ''}</li>`,
    `<li><a href="${attr(links.simulator[0])}">${esc(links.simulator[1])}</a>: ${esc(links.simulator[2])}.</li>`,
    `<li><a href="${PRACTICE_HUB.path}">All NDT practice tests</a>: Level II sets for ${esc(methodList(allSets))}, with exam preparation guides.</li>`,
    `<li><a href="${LEVEL2_EXAM_PREP[0]}">${esc(LEVEL2_EXAM_PREP[1])}</a>: if you are sitting ASNT's central Level II examination.</li>`,
    `<li><a href="${attr(links.level3[0])}">${esc(links.level3[1])}</a>: the route once Level II work and experience are behind you.</li>`,
  ].join('');
  return [
    `<h1>${esc(set.h1)}</h1>`,
    `<p class="ptq-meta" style="${S.meta}">${total} original questions in ${topics.length} topics, each with the correct answer, an explanation and its basis. Last reviewed ${esc(formatReviewed(set.lastReviewed))}.</p>`,
    `<section ${PRACTICE_TEST_MARKER} aria-label="About this practice test"><h2>About this ${esc(set.method)} ${esc(set.level)} practice test</h2>${set.intro.map((p) => `<p>${esc(p)}</p>`).join('')}</section>`,
    `<section aria-label="How to use this practice test"><h2>How to use this practice test</h2><ul>${set.howToUse.map((p) => `<li>${esc(p)}</li>`).join('')}</ul><p style="${S.toc}">Topics in this set:</p><ul>${toc}</ul></section>`,
    `<section class="ptq-note" aria-label="Practice questions, not exam questions" style="${S.note}"><h2>Practice questions, not exam questions</h2>` +
      `<p>Atlantis NDT wrote these questions as original study material. They are not taken from ASNT or from any employer's examination, and real examinations differ in wording, emphasis and format.</p>` +
      `<p>Certification is a separate step: under ASNT SNT-TC-1A the employer certifies its technicians after the examinations its written practice sets, and ASNT runs central Level II examinations for several methods. A good score here is a study signal, not a qualification.</p></section>`,
    inserts.afterNote || '',
    topicSections,
    inserts.beforeNext || '',
    `<section data-practice-next="2026-10" aria-label="Where to go next" style="${S.next}"><h2>Where to go next</h2>` +
      `<p>Atlantis NDT courses run year-round, with theory online and practicals in the Practical NDT simulator and in person at the client's facility. From here:</p>` +
      `<ul>${nextItems}</ul>` +
      `<p><a href="${attr(trainingEnquiryHref(set))}">Enquire about ${esc(set.method)} ${esc(set.level)} training</a> for yourself or for a team. Tell us the method, the level and where the trainees are based.</p></section>`,
  ].join('\n');
}

// ── hub ───────────────────────────────────────────────────────────────────────────────
/** Card data for one set. */
export function practiceSetSummary(set) {
  return {
    id: set.id,
    method: set.method,
    methodName: set.methodName,
    level: set.level,
    href: set.canonicalPath,
    title: set.title,
    h1: set.h1,
    count: questionCount(set),
    topics: set.topics.map((t) => t.name),
  };
}

/**
 * Everything the hub shows, as data. React renders it as JSX; practiceHubHtml() renders the
 * same model for the crawler. Link lists are [href, label, note?].
 */
export function practiceHubModel(sets) {
  const ordered = sortSets(sets);
  const cards = ordered.map(practiceSetSummary);
  const perSet = cards.length && cards.every((c) => c.count === cards[0].count) ? cards[0].count : null;
  const methods = listJoin(cards.map((c) => c.method));
  const answer = `Atlantis NDT publishes ${numberWord(cards.length)} free Level II practice tests, one each for ${methods}. ` +
    `Each set has ${perSet ? `${perSet} original multiple-choice questions` : 'original multiple-choice questions'} grouped by topic, and every question shows the correct answer, a short explanation and the basis for it. ` +
    `The questions are written for study: they are not ASNT or employer examination questions. Under SNT-TC-1A your employer certifies you after the examinations in its written practice, and ASNT also runs central Level II examinations for several methods. Use the sets to find weak topics before either route.`;
  const l3 = METHOD_ORDER.filter((m) => !['PAUT', 'TOFD'].includes(m)).map((m) => METHOD_LINKS[m].level3);
  const training = METHOD_ORDER.filter((m) => !['PAUT', 'TOFD'].includes(m)).map((m) => METHOD_LINKS[m].training);
  return {
    ...PRACTICE_HUB,
    canonical: `${SITE}${PRACTICE_HUB.path}`,
    answer,
    cardsHeading: 'Level II practice tests by method',
    cardsIntro: 'Each test opens on its own page. Answers stay hidden until you choose to show them, so you can work through a topic before checking.',
    cards,
    sections: [
      {
        id: 'how',
        h: 'How to get the most from a practice test',
        list: [
          'Answer each question before you open the explanation, and write your choice down.',
          'Score yourself by topic, not only overall; the weakest topic is where study time pays back first.',
          'Re-test after a few days of study and compare topic by topic.',
          'Pair the questions with practical work: calibration and flaw finding are examined with equipment, not on paper.',
        ],
      },
      {
        id: 'exam-prep',
        h: 'ASNT Level II and Level III exam preparation',
        p: 'Preparing for an ASNT examination rather than an employer examination? These guides set out how each examination is organised and what it covers.',
        links: [
          [LEVEL2_EXAM_PREP[0], LEVEL2_EXAM_PREP[1], 'for ASNT\'s central Level II examinations'],
          ...l3.map(([href, label]) => [href, label]),
          ['/asnt-level-iii-training', 'ASNT Level III training', 'the Basic examination, the method examinations and the written-practice knowledge a Level III is tested on'],
        ],
      },
      {
        id: 'more',
        h: 'More practice questions',
        p: 'Free independent study guides on other levels and on the API inspector examinations. Atlantis NDT does not offer API 510, API 570 or API 653 exam preparation and does not administer those examinations.',
        links: [
          ['/blog/ut-level-1-practice-questions', 'UT Level I practice questions', 'worked answers for ultrasonic testing at Level I'],
          ['/blog/api-510-practice-questions', 'API 510 practice questions', 'independent study guide for pressure vessel inspector candidates'],
          ['/blog/api-570-practice-questions', 'API 570 practice questions', 'independent study guide for piping inspector candidates'],
          ['/blog/api-653-practice-questions', 'API 653 practice questions', 'independent study guide for storage tank inspector candidates'],
        ],
      },
      {
        id: 'training',
        h: 'Training and planning tools',
        p: 'Practice questions check recall. Courses add the classroom hours and practical work that the certification route requires. Atlantis NDT runs NDT training year-round, with theory online and practicals in the Practical NDT simulator and in person at the client\'s facility.',
        links: [
          ['/training', 'NDT training', 'courses, delivery formats and how training, examinations and certification fit together'],
          ['/ndt-level-2-training', 'NDT Level 2 training'],
          ['/ndt-training-online', 'Online NDT training'],
          ...training.map(([href, label]) => [href, label]),
          ['/tools/snt-tc-1a-hours-planner', 'SNT-TC-1A hours planner', 'classroom and on-the-job hours still needed per technician'],
          [ASCAN[0], ASCAN[1], ASCAN[2]],
          [PRACTICAL[0], PRACTICAL[1], PRACTICAL[2]],
        ],
        cta: [PRACTICE_HUB.enquiry, 'Enquire about NDT training', 'for yourself or for a team. Tell us the methods, the levels and where the trainees are based.'],
      },
    ],
  };
}

/** Card wording, shared by both layers so the text cannot drift. */
export const cardLabel = (c) => `${c.methodName} (${c.method}) ${c.level} practice test`;
export const cardText = (c) => `${c.count} questions in ${c.topics.length} topics: ${c.topics.join('; ')}.`;
/** Text after a hub link label (": note."), or '' when the link has no note. */
export const linkNoteText = (note) => (note ? `: ${note}.` : '');

/** Every internal link target of the hub (for the build check). */
export function practiceHubTargets(model) {
  const out = [...model.cards.map((c) => c.href)];
  for (const s of model.sections) {
    for (const l of s.links || []) out.push(l[0]);
    if (s.cta) out.push(s.cta[0]);
  }
  return out;
}

const linkItem = ([href, label, note]) => `<li><a href="${attr(href)}">${esc(label)}</a>${esc(linkNoteText(note))}</li>`;

/** Crawler body for the hub (inside <main>). */
export function practiceHubHtml(model) {
  const cards = model.cards.map((c) => `<li><a href="${attr(c.href)}">${esc(cardLabel(c))}</a>: ${esc(cardText(c))}</li>`).join('');
  const sections = model.sections.map((s) => [
    `<section id="${s.id}" aria-label="${esc(s.h)}"><h2>${esc(s.h)}</h2>`,
    s.p ? `<p>${esc(s.p)}</p>` : '',
    s.list ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '',
    s.links ? `<ul>${s.links.map(linkItem).join('')}</ul>` : '',
    s.cta ? `<p><a href="${attr(s.cta[0])}">${esc(s.cta[1])}</a> ${esc(s.cta[2])}</p>` : '',
    '</section>',
  ].join('')).join('\n');
  return [
    `<h1>${esc(model.h1)}</h1>`,
    `<p ${PRACTICE_HUB_MARKER}>${esc(model.answer)}</p>`,
    `<section id="sets" aria-label="${esc(model.cardsHeading)}"><h2>${esc(model.cardsHeading)}</h2><p>${esc(model.cardsIntro)}</p><ul>${cards}</ul></section>`,
    sections,
  ].join('\n');
}

/** JSON-LD for the hub: CollectionPage of the sets + BreadcrumbList. No FAQPage (the page has no FAQ). */
export function practiceHubSchema(model) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${model.canonical}#page`,
        name: model.h1,
        url: model.canonical,
        description: model.description,
        isAccessibleForFree: true,
        inLanguage: 'en',
        publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
        hasPart: model.cards.map((c) => ({
          '@type': 'LearningResource',
          name: c.h1,
          url: `${SITE}${c.href}`,
          learningResourceType: 'Practice test',
          educationalLevel: c.level,
          teaches: c.methodName,
          isAccessibleForFree: true,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'NDT practice tests', item: model.canonical },
        ],
      },
    ],
  };
}
