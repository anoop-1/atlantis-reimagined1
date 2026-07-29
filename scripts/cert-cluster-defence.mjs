/**
 * Certification cluster defence — 2026-07-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 * /api-570-certification, /api-510-certification, /api-653-certification and
 * /asnt-certification have lost position for three consecutive measurement
 * cycles: API 570 39→20 clicks (pos 9.3→12.4), API 510 22→7 (pos 13.4→18.8).
 * URL Inspection returns *Submitted and indexed*, PASS, canonicals agreeing — so
 * this is competitive loss, not a technical fault. These pages are ~2,000 words
 * with 500–700 inbound internal links each, so it is not thinness or link
 * poverty either.
 *
 * WHAT THE DATA SUGGESTS INSTEAD
 * The pages that are GAINING hard in the same window are the specific,
 * question-shaped ones: exam schedule (27→63 clicks), body-of-knowledge changes
 * (7→31), pass rates, fee structure, study guides. The SERP for these
 * certification terms now rewards pages that answer the operational question
 * — when is the exam, what is on it this cycle, am I eligible, what does it take
 * to pass — rather than pages that describe a certification in general.
 *
 * THE FIX
 * Turn each standalone certification page into the hub of the cluster that is
 * already winning: answer the operational questions directly on the hub, and
 * route explicitly to the specific pages that hold the detail. That transfers
 * relevance in both directions and gives the hub the question-shaped content the
 * SERP is now rewarding.
 *
 * Also fixes: /api-570-certification renders no FAQ at all, so it emits no
 * FAQPage schema while its three siblings do.
 *
 * No pricing anywhere (CLAUDE.md §18) — fee questions are answered structurally.
 */

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ul = (a) => `<ul>${a.map((i) => `<li>${i}</li>`).join('')}</ul>`;

const CERTS = {
  '/api-510-certification': {
    name: 'API 510',
    role: 'Pressure Vessel Inspector',
    scope: 'in-service inspection, repair, alteration and rerating of pressure vessels',
    refs: 'API 510 itself, ASME Section VIII Division 1 as the construction code, ASME Section V for the examination methods, ASME Section IX for welding qualification, and API 571, 572, 576 and 577 as supporting recommended practices',
    calcs: 'minimum required thickness and MAWP, corrosion rate and remaining life, inspection interval derivation, and the rules governing repair, alteration and rerating',
    hardest: 'the MAWP and minimum-thickness calculations under time pressure, and knowing which clause governs a repair versus an alteration',
    siblings: [['/api-570-certification', 'API 570 for piping'], ['/api-653-certification', 'API 653 for storage tanks']],
  },
  '/api-570-certification': {
    name: 'API 570',
    role: 'Piping Inspector',
    scope: 'in-service inspection, repair and alteration of process piping systems',
    refs: 'API 570 itself, ASME B31.3 as the construction code, ASME Section V and Section IX, and API 574, 577 and 578 as supporting practices',
    calcs: 'minimum required thickness, corrosion rate and remaining life, inspection intervals by piping class and service, CML placement and spacing, and injection-point and dead-leg requirements',
    hardest: 'piping classification and the inspection intervals that follow from it, and locating the governing clause quickly in an open-book format',
    siblings: [['/api-510-certification', 'API 510 for pressure vessels'], ['/api-653-certification', 'API 653 for storage tanks']],
  },
  '/api-653-certification': {
    name: 'API 653',
    role: 'Aboveground Storage Tank Inspector',
    scope: 'inspection, repair, alteration and reconstruction of aboveground storage tanks',
    refs: 'API 653 itself, API 650 as the construction code, API 575 as the recommended practice, and ASME Section V and Section IX',
    calcs: 'minimum shell thickness by course including the one-foot method, corrosion rate and remaining life, floor evaluation and MFL interpretation, settlement criteria under Annex B, and hydrostatic test requirements after repair',
    hardest: 'the shell-course thickness calculations and the settlement criteria, which carry more marks than most candidates expect',
    siblings: [['/api-510-certification', 'API 510 for pressure vessels'], ['/api-570-certification', 'API 570 for piping']],
  },
  '/asnt-certification': {
    name: 'ASNT',
    role: 'NDT Level I, II and III',
    scope: 'employer-based certification of NDT personnel by method and level',
    refs: 'ASNT SNT-TC-1A as the recommended practice, ANSI/ASNT CP-189 where a standard rather than a recommended practice is required, ACCP for central certification, and ISO 9712 where third-party certification is specified instead',
    calcs: 'not calculation-driven at Level I and II; the Level III Basic examination covers materials and processes, common discontinuities and the certification schemes themselves, with a method examination for each method sought',
    hardest: 'the Level III Basic — candidates from a single-method background consistently underestimate the materials and processes content',
    siblings: [['/api-510-certification', 'API 510'], ['/api-570-certification', 'API 570'], ['/api-653-certification', 'API 653']],
  },
};

/** The pages currently gaining hardest in this cluster — route relevance to and from them. */
const DETAIL_PAGES = [
  ['/blog/api-510-570-653-exam-schedule-2026', 'every 2026 exam window and application deadline'],
  ['/blog/api-510-body-of-knowledge-2026-changes-explained', 'what changed in the current body of knowledge'],
  ['/blog/api-icp-pass-rates-510-vs-570-vs-653-2026', 'how the three exams compare in difficulty'],
  ['/blog/asnt-level-3-fees-2026-complete-pricing-table', 'what drives the cost of certification'],
  ['/resources/asnt-level-iii-study-guide', 'the Level III study guide'],
  ['/api-inspector-guide', 'which API certification fits which scope'],
];

function faqsFor(c) {
  return [
    [`Am I eligible for ${c.name} certification?`,
      `Eligibility is set by a combination of education and documented experience, and the required experience falls as the level of formal education rises — an engineering degree needs materially fewer documented years than entry from the shop floor. The experience has to be in work relevant to ${c.scope}, and it must be attested by an employer rather than self-declared. The most common reason an application is delayed is not the exam at all: it is experience documentation that does not stand up.`],
    [`What is on the ${c.name} examination?`,
      `The examination is built around ${c.refs}. The parts candidates most often lose marks on are ${c.calcs} — and, in the open-book portion, simply locating the governing clause quickly enough. In practice the discriminator is ${c.hardest}.`],
    [`How should I prepare for ${c.name}?`,
      `Time spent on calculations is the strongest single predictor of passing, ahead of total reading time. The pattern that works is: buy the current-edition references and tab them properly, read every referenced publication once, then drill the routine calculations until they are automatic, then sit timed full-length practice exams and remediate only the weak areas those expose. Candidates who read widely and calculate rarely tend to fail.`],
    [`Which edition of the references applies?`,
      `The body of knowledge names the exact editions in force for each exam cycle, and it is locked well before the first window. Buying the wrong edition is the most expensive avoidable mistake in preparation, because the clause numbering moves. Check the current body of knowledge before purchasing anything, and see ${'<a href="/blog/api-510-body-of-knowledge-2026-changes-explained">what changed in the current cycle</a>'}.`],
    [`How long does ${c.name} certification last, and what is recertification?`,
      `Certification runs for a defined term and then requires recertification, either by examination or by documented continuing work in the discipline depending on the scheme and how long you have held it. Recertification lapses are a routine audit finding and they are entirely avoidable — the renewal date belongs in the same system that blocks dispatch on any other expired qualification, not in a personal calendar.`],
    [`Is ${c.name} worth holding alongside other certifications?`,
      `Usually yes, and the combinations matter more than the individual credentials. Holding more than one API inspector certification widens the scopes you can be assigned to and is frequently what a client specification asks for, while ASNT or ISO 9712 method certification underpins the NDT the inspection itself relies on. The right sequence is normally the certification your current work already generates experience toward.`],
  ];
}

export function applyCertClusterDefence(routes, append) {
  let n = 0;
  for (const r of routes) {
    const c = CERTS[r.path];
    if (!c || !r.bodyContent) continue;
    if (r.bodyContent.includes('Answering the questions candidates actually ask')) continue;

    const faqs = faqsFor(c);
    const links = DETAIL_PAGES.map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('');
    const sibs = c.siblings.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join(' · ');

    append(r, `
    <section aria-label="${esc(c.name)} certification in practice">
      <h2>Answering the questions candidates actually ask</h2>
      <p><strong>${esc(c.name)} — ${esc(c.role)}</strong> covers ${esc(c.scope)}. The examination is built around ${esc(c.refs)}.</p>

      <h2>What decides the result</h2>
      <p>The marks concentrate in ${esc(c.calcs)}. The genuine discriminator between candidates who pass first time and those who do not is ${esc(c.hardest)} — which is a practised skill rather than a knowledge one, and it is the reason drilling beats reading.</p>

      <h2>Where to go for the operational detail</h2>
      <ul>${links}</ul>

      <h2>How this fits alongside the other certifications</h2>
      <p>Related routes: ${sibs}. Holding more than one widens the scopes you can be assigned to, and client specifications frequently name a combination rather than a single credential. The efficient order is normally whichever certification your current work is already generating documented experience toward.</p>

      <h2>Frequently Asked Questions</h2>
      ${faqs.map(([q, a]) => `<div><h3>${esc(q)}</h3><p>${a}</p></div>`).join('\n      ')}

      <h2>Preparing with support</h2>
      <p>Structured preparation materially outperforms self-study on these examinations, mainly because they reward judgement and clause navigation rather than recall. Programmes run as public cohorts, as on-site corporate cohorts where several candidates prepare together, and as blended delivery with theory completed online through <a href="/lms">Atlantis LMS</a> ahead of an intensive block. <a href="/contact?service=training">Ask about the next cohort</a>.</p>

      <p>Related: <a href="/training">all NDT training</a> · <a href="/asnt-certification">ASNT certification</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/inspection-management-software">tracking certification currency across a team</a>.</p>
    </section>`);
    n++;
  }
  return n;
}
