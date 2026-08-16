/**
 * Phase T — US Training expansion, demand-gated — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Grounded in scripts/phase-harvest-training-2026-08-16.json (USA, 90d):
 * 1,436 queries · 12,173 impressions · 58 clicks. Persona buckets:
 *
 *   salary        210q  2,502i  wtd p10  ← captured audience, not routed
 *   level         114q  1,493i  wtd p45  ← split across up to 17 pages
 *   near_me        24q    790i  wtd p48  ← local pack unwinnable (§34.1)
 *   cost           81q    416i  wtd p24
 *   employer       12q    296i  wtd p30  ← owned since 2026-08-15
 *   online         26q    221i  wtd p40
 *   career_switch  30q    172i  wtd p38  ← welder query 35i, NO owning page
 *   school         21q    149i  wtd p27  ← ranks p3.5–13 already, NO owner
 *
 * DECISION MADE BY THE DATA, recorded so nobody re-litigates it: **no new
 * state pages** (planned T7). The harvest found state-shaped training demand
 * of exactly 3 impressions ("hire a certified welding inspector florida").
 * 37 candidate state pages would have been 37 more dead permutations.
 *
 * Every block here is additive; no pricing (§18); no fabricated presence
 * (§24.2); anchors varied per source (§34.5).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ═══════════════════════════════════════════════════════════════════════════
 * T1 — SALARY → TRAINING ROUTING
 * The salary cluster is the largest candidate audience the site captures:
 * 2,502 impressions at weighted position 10. Those readers are researching a
 * career move, and today the pages answer the number and stop. Each level
 * page gains a "what actually moves the number" block whose links carry the
 * exact anchors of the pages that certify the move.
 * ═══════════════════════════════════════════════════════════════════════════ */

const SALARY_ROUTING = {
  '/ndt-level-1-salary': {
    heading: 'What actually moves a Level I salary',
    body: `A Level I certification is the entry credential, and the fastest raises at this level come from movement, not tenure: adding a second method, and progressing to Level II in the first. A Level I works under supervision by definition, so employers pay for the day they can send you out alone — which is a Level II decision. The route is documented experience hours under your employer's Written Practice plus examination, laid out on the ${L('/ndt-level-2-training', 'NDT Level II training path')}. If you are still choosing a first method, ${L('/blog/which-ndt-method-should-you-learn-first', 'method choice shapes early pay more than employer choice')} — UT pays above the surface methods almost everywhere, and the ${L('/ultrasonic-testing-training', 'UT training path')} is the one with the steepest early curve.`,
    cta: `Employers sponsoring a new technician through Level I should read ${L('/blog/sponsoring-employee-ndt-certification-employer-commitment', 'what sponsorship actually commits you to')} before budgeting only for the course.`,
  },
  '/ndt-level-2-salary': {
    heading: 'What actually moves a Level II salary',
    body: `Level II is where NDT pay spreads widest, and three levers explain most of it. Method stack: a Level II certified in one surface method earns near the bottom of the range; adding UT moves you into the band employers fight over, and an advanced technique on top of it — ${L('/phased-array-ut', 'phased array')} or TOFD — moves you out of the range entirely. Industry: nuclear and aerospace scopes pay above general plant work because their qualification regimes (performance demonstration, NAS 410) shrink the eligible pool. Code exposure: a Level II who can work confidently against ASME Section V and AWS D1.1 acceptance criteria is worth more than one who can only follow a technique sheet. The structured route up is the ${L('/asnt-level-iii-training', 'ASNT Level III path')}, and for method additions, ${L('/training', 'method training delivered on-site')}.`,
    cta: `If your employer runs the certification programme, the retake and progression rules live in their Written Practice — ${L('/blog/snt-tc-1a-employer-programme-us-guide', 'how an SNT-TC-1A programme actually works')} explains whose rules bind you.`,
  },
  '/ndt-level-3-salary': {
    heading: 'What actually moves a Level III salary',
    body: `Level III pay splits on how the authority is used rather than the certificate itself. A staff Level III running one employer's programme earns the figure above; a Level III whose methods span the plant's whole scope earns more because they replace two people; and a Level III operating independently — procedure approval, written practice ownership, audit defence across several client companies — prices per engagement rather than per year. The examination route is on the ${L('/asnt-level-iii-training', 'ASNT Level III training path')}; what the consulting form of the role looks like from the buyer's side is on ${L('/consulting/ndt-consulting-level-iii', 'the Level III consulting page')}, which is worth reading even as a candidate because it shows what companies actually pay Level III authority to do.`,
    cta: `Basic-exam preparation is where most candidates lose time — the ${L('/resources/asnt-level-iii-study-guide', 'Level III study guide')} sequences it.`,
  },
  '/ndt-inspector-salary': {
    heading: 'The certification decisions behind the salary bands',
    body: `Every band in the table above is a certification decision somebody made earlier. Method choice sets the floor — ${L('/blog/which-ndt-method-should-you-learn-first', 'which method to learn first')} covers the trade-offs honestly. Level progression sets the slope: the ${L('/ndt-level-2-training', 'Level II path')} is the single biggest jump in the career, because it is the point where you stop working under supervision. And code endorsements set the ceiling — inspectors who add an API credential move into in-service inspection, where ${L('/blog/api-570-inspector-salary-2026-by-region-experience', 'the API 570 bands')} run above general NDT work.`,
    cta: `Coming from a trade? ${L('/blog/welder-to-ndt-technician-no-degree-path', 'A welder’s route into NDT')} maps trade experience onto the certification requirements.`,
  },
  '/blog/ndt-salary-guide-2026-global': {
    heading: 'From reading the numbers to changing yours',
    body: `The bands in this guide are outputs; the inputs are certification decisions. Per-level detail sits on the ${L('/ndt-level-1-salary', 'Level I')}, ${L('/ndt-level-2-salary', 'Level II')} and ${L('/ndt-level-3-salary', 'Level III salary pages')}, and each names the training route that moves you up a band. If you are entering from another trade, ${L('/blog/welder-to-ndt-technician-no-degree-path', 'the no-degree route from welding into NDT')} covers what transfers and what does not. Training itself is delivered on-site by Atlantis under ASNT Level III oversight — ${L('/training', 'the training hub')} covers levels, methods and delivery.`,
    cta: '',
  },
};

export function applySalaryTrainingRouting(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [path, b] of Object.entries(SALARY_ROUTING)) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${esc(b.heading)}">
      <h2>${esc(b.heading)}</h2>
      <p>${b.body}</p>
      ${b.cta ? `<p>${b.cta}</p>` : ''}
    </section>`);
    out.applied++;
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * T4 — ONLINE TRAINING: one page owns the cluster
 * "asnt level 3 online training" (45i) lands on /asnt-certification at p50
 * across SEVEN pages; "online ndt level 3 training" variants (40i combined)
 * land on Level III *city* pages at p61–80. /ndt-training-online exists at
 * 874 words and none of these queries reach it. Depth on the owner + explicit
 * handoffs from the wrong pages holding the impressions.
 * ═══════════════════════════════════════════════════════════════════════════ */

function onlineDepthBlock() {
  return `
    <section aria-label="What online NDT training can and cannot do">
      <h2>ASNT Level III online training — what online delivery legitimately covers</h2>
      <p>Level III is the one certification level where online delivery genuinely fits, because the
      examinations are knowledge examinations: the ASNT Basic covers materials, methods-overview and
      certification-programme administration, and each Method exam covers technique, interpretation and
      procedure knowledge. All of that can be taught and revised remotely, and candidates preparing for
      the ${L('/asnt-level-iii-training', 'ASNT Level III route')} routinely do the majority of their
      preparation this way while working full-time.</p>

      <h2>API 570, 510 and 653 online preparation</h2>
      <p>The API in-service codes are similar: the body of knowledge is documentary — code paragraphs,
      calculation methods, acceptance criteria — and preparation for ${L('/api-570-certification', 'API 570')},
      ${L('/api-510-certification', 'API 510')} and ${L('/api-653-certification', 'API 653')} works well
      online, paced against the ${L('/blog/api-510-570-653-exam-schedule-2026', 'exam windows')}. Note that
      exam delivery itself is administered by API under its own current rules — check api.org for what
      applies to your window rather than relying on last year's arrangements.</p>

      <h2>What online delivery cannot do — stated plainly</h2>
      <p>Two things, and no online provider can waive either. <strong>The practical examination</strong>:
      Level I and II certification requires demonstrating setup, calibration, examination and evaluation on
      physical specimens in front of an examiner — a screen cannot assess a probe technique. And
      <strong>experience hours</strong>: certification under SNT-TC-1A requires documented, supervised
      time in the method that no amount of coursework substitutes for. Online theory plus on-site
      practical is therefore the honest structure for Level I/II — which is exactly how Atlantis delivers
      it, with the practical portion run ${L('/training', 'at your facility')} under a Level III.</p>
    </section>`;
}

const ONLINE_HANDOFFS = [
  ['/asnt-certification',
    'Preparing online',
    `Much of the preparation for these certifications can be done remotely while working — ${L('/ndt-training-online', 'online NDT training')} covers what online delivery legitimately handles at each level, and the two things it never can (the practical examination, and experience hours).`],
  ['/training/asnt-level-iii-training-san-diego',
    'Studying for Level III remotely',
    `Most Level III candidates prepare while working full-time, which makes delivery format matter — see ${L('/ndt-training-online', 'online ASNT Level III training')} for what remote preparation covers.`],
  ['/training/asnt-level-iii-training-cincinnati',
    'Studying for Level III remotely',
    `Level III preparation is knowledge-examination work and fits remote study well — ${L('/ndt-training-online', 'online Level III training')} sets out the structure.`],
  ['/asnt-level-iii-training',
    'Doing the preparation online',
    `The Basic and Method examinations are knowledge exams, so the preparation itself works online — ${L('/ndt-training-online', 'online NDT training')} covers how remote Level III preparation is structured and what it can never replace.`],
];

export function applyOnlineTrainingDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { depth: 0, handoffs: 0, missing: [] };
  const owner = byPath.get('/ndt-training-online');
  if (owner) { append(owner, onlineDepthBlock()); out.depth++; } else out.missing.push('/ndt-training-online');
  for (const [path, heading, sentence] of ONLINE_HANDOFFS) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>${sentence}</p>
    </section>`);
    out.handoffs++;
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * T5 — NEAR-ME ABSORPTION FIX
 * "ndt training near me" 228i: denver absorbs 106i at p47 and atlanta 61i at
 * p68, while dallas ranks p6 with 14i. The absorbers get explicit scope
 * statements handing the national proximity intent to the hub — the §25.2
 * pattern that demonstrably collapsed the san-diego/corpus-christi split.
 * Blocks carry real local substance so they are not template stubs.
 * ═══════════════════════════════════════════════════════════════════════════ */

const NEARME_SCOPE = {
  '/ndt-training-denver': {
    name: 'Denver', frame: `Denver training demand comes from the Rockies energy corridor — DJ Basin gas processing, the refinery north of the city, Front Range aerospace and manufacturing — and this page covers exactly that market: who employs certified technicians here, which methods those employers actually examine for, and how on-site delivery works in Colorado.`,
  },
  '/ndt-training-atlanta': {
    name: 'Atlanta', frame: `Atlanta training demand tracks the Southeast's industrial spread — aerospace manufacturing and MRO, power generation across Georgia, and the fabrication base that serves both — and this page stays scoped to that market: the employers, the methods they certify in, and on-site delivery across Georgia.`,
  },
};

function nearMeScopeBlock(c) {
  return `
    <section aria-label="Looking for NDT training near you">
      <h2>This page covers ${esc(c.name)} — searching for training near you?</h2>
      <p>${esc(c.frame)}</p>
      <p>If you searched for ${L('/ndt-training-near-me', 'NDT training near me')} and ${esc(c.name)} is
      not your market, that page resolves the question properly — every US location with a real
      programme, grouped by state, plus the two facts that change the search: under SNT-TC-1A an
      employer certifies you, not a school, and Atlantis delivers training on-site at your facility,
      which makes "near me" mean "at your plant".</p>
    </section>`;
}

export function applyNearMeConsolidation(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [path, c] of Object.entries(NEARME_SCOPE)) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, nearMeScopeBlock(c));
    out.applied++;
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * T-L3 — LEVEL III CONSOLIDATION, ROUND 2
 * The 2026-08-15 consolidation covered 10 pages; the fresh harvest shows the
 * split persists at 406i across 17 pages, and the BEST ranker was not in
 * round 1: /blog/ndt-level-iii-consulting-services-guide holds p12 with 59i.
 * That page + the san-diego training page (56i at p82 on the national term)
 * + the snt-tc-1a two-blog split (114i across 6 pages).
 * ═══════════════════════════════════════════════════════════════════════════ */

const L3_OWNER = '/consulting/ndt-consulting-level-iii';

const L3_ROUND2 = [
  ['/blog/ndt-level-iii-consulting-services-guide',
    'Engaging the service this guide describes',
    `This guide explains what Level III consulting is and how engagements are structured. When the question stops being "what is it" and becomes "we need one" — a named Level III of record, written practice ownership, procedure and technique approval, audit defence — the engagement itself is set out on ${L(L3_OWNER, 'ASNT Level III consulting')}. Start there to scope actual work; stay here to understand the category.`],
  ['/training/asnt-level-iii-training-san-diego',
    'Training here versus contracting the function',
    `This page covers Level III examination preparation for the San Diego market — shipbuilding and repair at the yards, naval aviation, and the composites base north of the city. It is a candidate page. If what brought you here is a company need for Level III authority — someone to approve procedures and own a written practice now, not after a candidate qualifies — that is a different engagement, covered on ${L(L3_OWNER, 'NDT Level 3 consulting services')}.`],
  ['/blog/asnt-snt-tc-1a-certification-requirements',
    'The document versus the comparison',
    `This page owns the document: what SNT-TC-1A actually requires, section by section. Two adjacent questions have their own pages and are deliberately not repeated here — how the recommended practice differs from its mandatory sibling is ${L('/blog/asnt-snt-tc-1a-vs-cp-189-comparison', 'SNT-TC-1A versus CP-189')}, and how the employer-based model compares with central certification is ${L('/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison', 'ISO 9712 versus SNT-TC-1A')}.`],
];

export function applyLevelIiiRound2(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [path, heading, sentence] of L3_ROUND2) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>${sentence}</p>
    </section>`);
    out.applied++;
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * T8 — METHOD MONEY PAGES → METHOD-TRAINING PAGES
 * The six national method-training pages (§35.1) carry 31 inbound links each,
 * all from city pages. The method money pages — the highest-authority pages
 * in each method's cluster — do not link them. One sentence each.
 * ═══════════════════════════════════════════════════════════════════════════ */

const METHOD_TRAINING_LINKS = [
  ['/ultrasonic-testing', '/ultrasonic-testing-training', 'ultrasonic testing training', 'Clients who want their own people qualified alongside the service'],
  ['/radiographic-testing', '/radiographic-testing-training', 'radiographic testing training', 'Building in-house RT capability'],
  ['/magnetic-particle-testing', '/magnetic-particle-testing-training', 'magnetic particle testing training', 'Qualifying your own MT technicians'],
  ['/penetrant-testing', '/penetrant-testing-training', 'penetrant testing training', 'Qualifying your own PT technicians'],
  ['/visual-testing', '/visual-testing-training', 'visual testing training', 'Certifying your own visual inspectors'],
  ['/eddy-current-testing', '/eddy-current-testing-training', 'eddy current testing training', 'Developing in-house ET capability'],
];

export function applyMethodTrainingLinks(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [from, to, anchor, heading] of METHOD_TRAINING_LINKS) {
    const r = byPath.get(from);
    if (!r) { out.missing.push(from); continue; }
    if (!byPath.has(to)) { out.missing.push(to); continue; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>Many clients pair the service with capability: technicians certified under their own
      programme who handle routine examination between campaigns. ${L(to, anchor)} covers the
      level structure, the practical examination, and how on-site delivery under an ASNT Level III
      works.</p>
    </section>`);
    out.applied++;
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Guards
 * ═══════════════════════════════════════════════════════════════════════════ */

export function assertNoPricesInPhaseT() {
  const blob = JSON.stringify(SALARY_ROUTING) + onlineDepthBlock() + JSON.stringify(ONLINE_HANDOFFS)
    + JSON.stringify(NEARME_SCOPE) + JSON.stringify(L3_ROUND2) + JSON.stringify(METHOD_TRAINING_LINKS);
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|student|head)|\/yr\b|tuition/gi);
  if (hits) throw new Error(`phase-t copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

/** §34.4 — every link target must be a real route at build time. */
export function assertPhaseTTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  const collect = (html) => { for (const m of String(html).matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]); };
  for (const b of Object.values(SALARY_ROUTING)) collect(b.body + b.cta);
  collect(onlineDepthBlock());
  for (const [, , s] of ONLINE_HANDOFFS) collect(s);
  for (const [, , s] of L3_ROUND2) collect(s);
  for (const [, to] of METHOD_TRAINING_LINKS) need.add(to);
  need.add('/ndt-training-near-me');
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`phase-t link targets missing from routes: ${missing.join(', ')}`);
}
