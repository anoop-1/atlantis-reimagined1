/**
 * /ndt-school — the school-intent owner page — 2026-08-16 (Phase T2).
 * ─────────────────────────────────────────────────────────────────────────────
 * The school cluster is the one candidate cluster that ALREADY RANKS with no
 * owning page (USA 90d): "ndt school near me" p6.4 WITH clicks, "non
 * destructive testing schools near me" p3.5 with clicks, "ndt school" p13.5,
 * "ndt technician school" p22.8 — 21 queries, 149 impressions, currently
 * scattered across dallas/denver/atlanta city pages and the salary guide.
 * Google clearly wants to rank this site for school intent; it has nowhere to
 * put it.
 *
 * The page's honest differentiator — which no school states — is the §35.3
 * fact: under SNT-TC-1A a school cannot certify you; an employer does. That is
 * the single most useful thing a person searching "ndt school" can learn.
 *
 * Title-separated from /ndt-training-near-me (proximity intent) and /training
 * (the programme hub): this page owns the INSTITUTION question.
 * No pricing (§18). Houston named as the genuine base only (§24.2).
 */

const T = 'NDT Schools — What They Teach, What They Can’t Certify, How to Choose';
const D = 'What an NDT school actually provides, why no school can certify you under SNT-TC-1A, how to evaluate a program (instructors, specimens, documented hours), and the employer-based alternative.';

function body() {
  return `
  <article>
    <h1>NDT Schools: What They Teach, What They Cannot Certify, and How to Choose One</h1>

    <section aria-label="Direct answer">
      <h2>What does an NDT school actually give you?</h2>
      <p>An NDT school gives you classroom training hours, hands-on familiarity with equipment, and
      preparation for certification examinations — three genuinely valuable things. What it cannot give
      you is the certification itself: under SNT-TC-1A, the document that governs most US industrial NDT,
      <strong>certification is issued by an employer, not by a school</strong>. Understanding that single
      fact before you enrol anywhere will save you money and months.</p>
    </section>

    <section aria-label="How certification actually works">
      <h2>Why no school can certify you — and what that means for your plan</h2>
      <p>SNT-TC-1A is a recommended practice that tells an <em>employer</em> how to build its own
      certification programme: the employer adopts a Written Practice, counts your training hours,
      documents your supervised experience, administers your examinations, and issues a certification
      that is valid <em>within that employer's programme</em>. A school course counts toward the training
      hours — often all of them — but the experience hours and the certification decision belong to the
      company that hires you.</p>
      <p>Practical consequence: a school certificate is evidence of training, not a licence to work
      alone. Your first employer will still put you through their own programme. The plan that works is
      therefore school (or employer-delivered training) for the knowledge, then a hiring employer for
      the hours and the certification — laid out step by step on the
      <a href="/ndt-level-1-training">Level I</a> and <a href="/ndt-level-2-training">Level II</a> paths.</p>
    </section>

    <section aria-label="Evaluating a school">
      <h2>How to evaluate an NDT school — five questions that separate them</h2>
      <p><strong>Who teaches, and what do they hold?</strong> The instructor should hold a current ASNT
      Level III in the methods taught — ask, and expect a certificate number. A Level III teaching UT has
      passed the hardest examination in the field; a generic "instructor" may not have.</p>
      <p><strong>What specimens will you actually scan?</strong> Practical competence is built on flawed
      specimens — welds with real lack of fusion, castings with real shrinkage, corroded plate. A school
      whose lab is two calibration blocks and a demo kit produces graduates who fail their first
      practical examination. Ask to see the specimen inventory.</p>
      <p><strong>Are the hours documented to SNT-TC-1A's structure?</strong> Your future employer's
      Written Practice will require documented training hours per method. A school that issues a proper
      hours transcript saves you re-doing training later; one that issues a completion certificate with
      no hours breakdown may not.</p>
      <p><strong>Which methods, and in what order?</strong> A school pushing you straight into
      radiography or advanced UT before the surface methods is optimising for its fee schedule, not your
      career — <a href="/blog/which-ndt-method-should-you-learn-first">method order matters</a>.</p>
      <p><strong>Do they tell you the truth about certification?</strong> Any school implying you leave
      "certified" — rather than trained and exam-ready — has failed the most basic honesty test in this
      industry. Walk away.</p>
    </section>

    <section aria-label="Alternatives to a school">
      <h2>The routes that don't start at a school</h2>
      <p>Plenty of working technicians never attended a standalone school. <strong>Employer-sponsored
      training</strong> is the most common route: a company hires you as a trainee and delivers the
      training itself or brings it on-site — this is exactly what Atlantis delivers, at the employer's
      facility under an ASNT Level III, so the training hours, the specimens and the Written Practice
      all line up from day one. <strong>Trade crossover</strong> is the second: welders, machinists and
      pipefitters carry directly relevant knowledge, and
      <a href="/blog/welder-to-ndt-technician-no-degree-path">the welder-to-NDT route</a> is shorter than
      most people assume. <strong>Military experience</strong> is the third —
      <a href="/blog/veterans-transitioning-into-ndt">veterans map onto NDT</a> unusually well, and some
      service training counts toward hours.</p>
    </section>

    <section aria-label="Houston">
      <h2>Looking for an NDT school in Houston?</h2>
      <p>Houston is the densest NDT employment market in North America — the ship channel refineries and
      chemical complexes, the fabrication belt, and the inspection companies that serve them — which is
      why "NDT school Houston" is one of the most-searched school queries in the country. Houston is
      also Atlantis's genuine home base. We do not operate a walk-in classroom; we deliver training
      on-site at employer facilities across the Gulf Coast, which for a company qualifying a crew is the
      better shape: your equipment, your procedures, your Written Practice. Individuals in Houston
      looking for a route in should read the <a href="/ndt-training-houston">Houston training page</a>
      for the local employer landscape, and <a href="/training">enquire directly</a> — cohorts form
      around employer demand.</p>
    </section>

    <section aria-label="Where to go next">
      <h2>Where to go from here</h2>
      <p>If you are choosing a first method, start with
      <a href="/blog/which-ndt-method-should-you-learn-first">which method to learn first</a>. If you are
      mapping the whole path, the <a href="/ndt-level-1-training">Level I</a> and
      <a href="/ndt-level-2-training">Level II</a> pages carry the requirements end to end, and the
      <a href="/blog/ndt-salary-guide-2026-global">salary guide</a> shows what each step is worth. If you
      are an employer building capability rather than an individual seeking a course,
      <a href="/blog/building-us-ndt-crew-certification-sequence">the crew certification sequence</a> is
      written for you. And wherever you are, <a href="/ndt-training-near-me">the location index</a>
      resolves "near me" honestly — including the fact that on-site delivery makes the question moot for
      employers.</p>
    </section>
  </article>`;
}

export function ndtSchoolRoute() {
  return {
    path: '/ndt-school',
    title: `${T} | Atlantis NDT`,
    description: D,
    canonical: 'https://atlantisndt.com/ndt-school',
    bodyContent: body(),
  };
}

/** Inbound links — same commit (§34.5). Placed on the pages holding school-intent impressions today. */
const INBOUND = [
  ['/training', 'Choosing between a school and employer-delivered training',
    `Individuals comparing routes in should read <a href="/ndt-school">what an NDT school can and cannot do</a> — including the fact no school can certify you under SNT-TC-1A — before paying for anything.`],
  ['/ndt-training-near-me', 'Searching for a school rather than a course?',
    `If your search was really about institutions — "ndt school near me" — <a href="/ndt-school">the NDT schools guide</a> covers what a school provides, the five questions that separate good ones, and the certification fact none of them advertise.`],
  ['/ndt-level-1-training', 'Thinking of starting at a school',
    `Many Level I candidates start by shortlisting schools — <a href="/ndt-school">how to evaluate an NDT school</a> covers instructor credentials, specimen inventories and hours documentation.`],
  ['/blog/ndt-salary-guide-2026-global', 'Before you pay a school',
    `Candidates pricing a way into these salary bands should first read <a href="/ndt-school">what an NDT school actually gives you</a> — and what it cannot.`],
  ['/ndt-training-houston', 'NDT schools in Houston',
    `Searching for an NDT school in Houston specifically? <a href="/ndt-school">The schools guide</a> covers how to evaluate one, and how on-site employer training compares in this market.`],
];

export function applyNdtSchoolInbound(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [path, heading, sentence] of INBOUND) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${heading.replace(/"/g, '&quot;')}">
      <h2>${heading}</h2>
      <p>${sentence}</p>
    </section>`);
    out.applied++;
  }
  return out;
}

export function assertNoPricesInNdtSchool() {
  const blob = body() + JSON.stringify(INBOUND);
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|student|course)|tuition\s?(fee|cost|rate)/gi);
  if (hits) throw new Error(`ndt-school copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}
