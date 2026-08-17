/**
 * API training pages rescue + cert-cluster defence — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * FOUND WHILE DIAGNOSING "TRAFFIC IS FALLING" (it is not — site clicks are
 * +38% MoM and training +51%). What IS real is a five-cycle decline in the
 * four certification money pages, measured across three consecutive 28d
 * windows:
 *
 *   /api-510-certification   3,211i p12 → 1,731i p17 →   842i p26
 *   /api-570-certification   3,923i p 9 → 2,519i p11 → 1,321i p14
 *   /asnt-certification      5,439i p 9 → 3,898i p 9 → 2,709i p11
 *   /api-653-certification   2,849i p20 → 1,661i p20 → 1,338i p27
 *
 * They are NOT technically broken: 864–2,252 inbound links each, 2,785–4,028
 * words, indexed, self-canonical. §21.5 called it competitive and it has run
 * five cycles now.
 *
 * But the diagnosis surfaced something fixable and directly on the owner's
 * goal (training enquiries). The API TRAINING pages — where course intent
 * should land — are orphaned and thin:
 *
 *   /api-570-training    1 inbound link ·   840 words
 *   /api-653-training    3 inbound links ·  737 words
 *   /api-510-training   16 inbound links ·  464 words   ← under the 650 bar
 *
 * Meanwhile the CERT pages rank at p41–48 for course intent they should not
 * own: "api 570 training" (40i, p41→p48), "api 570 course fee" (p1→p42), and
 * "api 653 course" (187i at p41 on /api-653-certification, found 2026-08-16).
 * An orphaned page cannot take the term back, however good its copy is.
 *
 * This module: depth on all three training pages, exact-anchor inbound links
 * from the pages that actually hold the authority, and §25.4 direct-answer
 * openers defending the cert pages on their own head terms.
 *
 * §18 no pricing — exam and course fees are third-party AND stripped
 * site-wide (§27.1); cost intent is answered with structure and a pointer to
 * api.org, never a figure.
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ═══ 1. Depth on the three API training pages ═══ */

const TRAINING_DEPTH = {
  '/api-510-training': {
    code: 'API 510', name: 'Pressure Vessel Inspector',
    scope: `API 510 governs in-service inspection, repair, alteration and rerating of pressure vessels — the vessels themselves, and the pressure-relieving devices protecting them.`,
    bok: `The body of knowledge splits in two, and candidates underestimate the split. The closed-book portion tests what an inspector must carry in their head: damage mechanisms, inspection intervals, the logic of remaining-life calculation. The open-book portion tests whether you can navigate the publications fast enough — API 510 itself, ASME Section VIII Division 1 for construction acceptance, Section V for the examination methods, Section IX for welding qualification, and the API recommended practices (571 damage mechanisms, 572 vessel inspection, 576 relief devices, 577 welding inspection, 578 material verification).`,
    fails: `Where candidates lose: not the technical content, but the clock. The open-book section rewards a tabbed, rehearsed publication set and punishes reading from scratch. The calculations — minimum required thickness, MAWP, remaining life, corrosion rate — must be reflexes rather than derivations. And the closed-book damage-mechanism questions require recognising a mechanism from its service conditions, not reciting a definition.`,
    who: `Typical candidates are inspectors already working refinery, chemical or terminal fixed equipment who need the credential their site's programme requires, and NDT technicians moving from performing examinations into evaluating and dispositioning them.`,
  },
  '/api-570-training': {
    code: 'API 570', name: 'Piping Inspector',
    scope: `API 570 governs in-service inspection, repair, alteration and rerating of metallic piping systems — the largest population of pressure equipment on any process site, and the one where corrosion monitoring programmes live or die.`,
    bok: `Closed-book covers damage mechanisms, piping classes and inspection intervals, and the judgement of when a circuit needs attention. Open-book covers API 570 itself, ASME B31.3 for process piping construction and acceptance, Section V for methods, Section IX for welding, plus the recommended practices — API 571 (damage mechanisms), 574 (piping inspection practices), 577 (welding inspection), 578 (material verification), and 580/581 where risk-based intervals apply.`,
    fails: `Where candidates lose: piping introduces classification logic that vessels do not — service class drives inspection interval, and getting the class wrong makes every downstream answer wrong. The thickness and remaining-life calculations carry more variants than API 510's, and B31.3 navigation under time pressure separates prepared candidates from confident ones.`,
    who: `Typical candidates are inspectors running CML programmes on refinery and chemical piping circuits, contractors whose clients require certified inspectors on site, and NDT Level IIs whose thickness data feeds decisions they want to be qualified to make.`,
  },
  '/api-653-training': {
    code: 'API 653', name: 'Aboveground Storage Tank Inspector',
    scope: `API 653 governs inspection, repair, alteration and reconstruction of aboveground storage tanks built to API 650 or API 12C — including the fitness-for-service judgement that lets a tank deviating from original construction stay in service.`,
    bok: `Closed-book covers tank damage mechanisms, inspection types and intervals, and the evaluation logic. Open-book covers API 653 and API 650 together — the pairing that makes this exam distinct, because evaluation constantly references the construction standard — plus Section V for methods, Section IX for welding, and API 575 for inspection practices. Settlement evaluation against the Annex criteria is examined in a way no other API credential tests.`,
    fails: `Where candidates lose: the API 650 dependency. Candidates who prepare API 653 alone find half the open-book questions routing them into a standard they have not tabbed. Settlement evaluation and the shell-thickness calculations are the other common failures — both are procedural, and both reward rehearsal over understanding.`,
    who: `Typical candidates are terminal and refinery inspectors responsible for tank programmes, contractors performing API 653 scopes who need an inspector of record, and engineers taking on integrity responsibility for a tank farm.`,
  },
};

function trainingBlock(path, d) {
  return `
    <section aria-label="${esc(d.code)} preparation in detail">
      <h2>What ${esc(d.code)} actually certifies you to do</h2>
      <p>${esc(d.scope)}</p>

      <h2>The body of knowledge, and how the exam splits</h2>
      <p>${esc(d.bok)}</p>

      <h2>Where candidates actually lose marks</h2>
      <p>${esc(d.fails)}</p>

      <h2>Who takes this course</h2>
      <p>${esc(d.who)}</p>

      <h2>Timing, and what it costs you</h2>
      <p>Exam windows and delivery arrangements are set by API and change from time to time — the
      ${L('/blog/api-510-570-653-exam-schedule-2026', 'current exam schedule')} tracks them, and
      <a href="https://www.api.org" rel="nofollow">api.org</a> is the authority on eligibility, fees
      and retake rules rather than any training provider. What preparation costs you is mostly time:
      the open-book sections reward rehearsal with your own tabbed publication set, which is work that
      happens before the course as much as during it.</p>

      <h2>How Atlantis delivers it</h2>
      <p>Preparation is delivered on-site for employer cohorts or remotely for individuals, led by
      ASNT Level III instructors who work the codes rather than only teach them. The credential is
      covered on ${L(path.replace('-training', '-certification'), `the ${d.code} certification page`)};
      ${L('/training', 'the training hub')} covers the wider programme, and employers certifying
      several people should read ${L('/blog/sponsoring-employee-ndt-certification-employer-commitment', 'what sponsorship commits you to')}
      before booking. ${L('/contact?service=training', 'Ask about a cohort')}.</p>
    </section>`;
}

/* ═══ 2. Inbound links — the actual fix for orphaned pages (§34.5) ═══ */

const INBOUND = [
  ['/api-510-certification', 'Preparing for the API 510 examination',
    `Eligibility and the body of knowledge are above; preparation is a separate question. ${L('/api-510-training', 'API 510 training')} covers how the closed- and open-book sections split, where candidates actually lose marks, and what to have tabbed before you sit.`],
  ['/api-570-certification', 'Preparing for the API 570 examination',
    `${L('/api-570-training', 'API 570 training')} covers the piping-specific traps — service classification driving intervals, the B31.3 navigation under time pressure, and the calculation variants that catch candidates who prepared for API 510 first.`],
  ['/api-653-certification', 'Preparing for the API 653 examination',
    `${L('/api-653-training', 'API 653 training')} covers the API 650 dependency that surprises most candidates, settlement evaluation against the Annex criteria, and the shell calculations.`],
  ['/blog/api-510-570-653-exam-schedule-2026', 'Preparing for each of the three',
    `Knowing the window is half of it. Preparation differs by credential: ${L('/api-510-training', 'API 510')} (vessels), ${L('/api-570-training', 'API 570')} (piping, with the B31.3 dependency) and ${L('/api-653-training', 'API 653')} (tanks, with the API 650 dependency).`],
  ['/api-inspector-guide', 'Course preparation for each credential',
    `Once you have chosen the credential, preparation is credential-specific: ${L('/api-510-training', 'API 510 training')} · ${L('/api-570-training', 'API 570 training')} · ${L('/api-653-training', 'API 653 training')}.`],
  ['/blog/api-653-tank-inspection-guide', 'Getting qualified for this work',
    `Performing the scope above requires the credential — ${L('/api-653-training', 'API 653 training')} covers preparation, including the API 650 pairing the exam leans on.`],
  ['/training', 'API inspector certification courses',
    `Alongside the NDT method and level programmes, Atlantis prepares candidates for the API in-service credentials: ${L('/api-510-training', 'API 510')} (pressure vessels) · ${L('/api-570-training', 'API 570')} (piping) · ${L('/api-653-training', 'API 653')} (storage tanks).`],
  ['/blog/api-570-inspector-salary-2026-by-region-experience', 'Getting the credential behind these bands',
    `The bands above belong to certified inspectors. ${L('/api-570-training', 'API 570 training')} covers what the examination tests and where candidates lose marks.`],
  ['/consulting/oil-gas-ndt-consulting', 'Certifying your own inspectors',
    `Programmes that depend on contracted inspectors often want their own people credentialled: ${L('/api-510-training', 'API 510')} · ${L('/api-570-training', 'API 570')} · ${L('/api-653-training', 'API 653')} preparation.`],
];

/* ═══ 3. Cert-page defence — §25.4 direct answers on their own head terms ═══ */

const CERT_ANSWERS = [
  {
    path: '/api-510-certification',
    heading: 'What is API 510 certification?',
    body: `API 510 certification is the American Petroleum Institute credential for pressure vessel inspectors: it authorises the holder to inspect in-service pressure vessels, evaluate their condition against API 510, and approve repairs, alterations and reratings. It is a code-competence credential, distinct from NDT method certification — an ASNT Level II performs the examination, an API 510 inspector decides what it means.`,
  },
  {
    path: '/api-570-certification',
    heading: 'What is API 570 certification?',
    body: `API 570 certification is the API credential for piping inspectors: it authorises the holder to inspect in-service metallic piping systems, set and justify inspection intervals by service class, and approve repairs and alterations under API 570. Like API 510 it certifies code judgement rather than examination technique — the two are complementary qualifications, not alternatives.`,
  },
  {
    path: '/api-653-certification',
    heading: 'What is API 653 certification?',
    body: `API 653 certification is the API credential for aboveground storage tank inspectors: it authorises the holder to inspect tanks built to API 650 or API 12C, evaluate settlement and thinning against the standard, and authorise repairs, alterations and reconstruction. Uniquely among the API credentials it is explicitly a fitness-for-service qualification — a tank that no longer meets its original construction requirements can stay in service if the API 653 inspector can defend it.`,
  },
  {
    path: '/asnt-certification',
    heading: 'What is ASNT certification?',
    body: `ASNT certification refers to NDT personnel qualification under the ASNT documents — most commonly SNT-TC-1A, which is a recommended practice telling an employer how to run its own certification programme, and CP-189, its mandatory-standard sibling. Under SNT-TC-1A the credential is issued by your employer and is valid within that employer's written practice; ASNT's own central programmes (ACCP, Level III) are separate and portable.`,
  },
];

/* ═══ apply ═══ */

export function applyApiTrainingRescue(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { depth: 0, inbound: 0, answers: 0, missing: [] };
  for (const [path, d] of Object.entries(TRAINING_DEPTH)) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, trainingBlock(path, d));
    out.depth++;
  }
  for (const [path, heading, html] of INBOUND) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>${html}</p>
    </section>`);
    out.inbound++;
  }
  for (const a of CERT_ANSWERS) {
    const r = byPath.get(a.path);
    if (!r) { out.missing.push(a.path); continue; }
    append(r, `
    <section aria-label="${esc(a.heading)}">
      <h2>${esc(a.heading)}</h2>
      <p>${esc(a.body)}</p>
    </section>`);
    out.answers++;
  }
  return out;
}

/* ═══ Guards ═══ */

export function assertNoPricesInApiRescue() {
  const blob = JSON.stringify(TRAINING_DEPTH) + JSON.stringify(INBOUND) + JSON.stringify(CERT_ANSWERS);
  const hits = blob.match(/[$£€₹]\s?\d|\bfee[s]? (?:are|of|from)\s*[$£€₹\d]|per (day|hour|student|candidate)\b/gi);
  if (hits) throw new Error(`api rescue copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertApiRescueTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  for (const p of Object.keys(TRAINING_DEPTH)) { need.add(p); need.add(p.replace('-training', '-certification')); }
  for (const [path, , html] of INBOUND) { need.add(path); for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]); }
  for (const a of CERT_ANSWERS) need.add(a.path);
  for (const d of Object.values(TRAINING_DEPTH)) void d;
  need.add('/blog/api-510-570-653-exam-schedule-2026');
  need.add('/training');
  need.add('/blog/sponsoring-employee-ndt-certification-employer-commitment');
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`api rescue targets missing: ${missing.join(', ')}`);
}
