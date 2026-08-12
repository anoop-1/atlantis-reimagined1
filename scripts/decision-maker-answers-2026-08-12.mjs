/**
 * Decision-maker answer blocks — 2026-08-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE CLUSTER (GSC 90d to 2026-08-11, measured)
 * 414 conversational query-page pairs · 2,778 impressions · **ZERO clicks**.
 * These are not exam candidates. They are inspection managers and QA leads
 * asking operational questions in full sentences:
 *
 *   98i p23  "should we mandate api 510, 570, and 653 as the minimum
 *             certifications for all enterprise in-service inspection roles…"
 *   53i p6   "what's the difference between pcn and asnt ndt courses?"
 *   49i p34  "what's the practical difference between holding an asnt ndt
 *             level ii and holding a code inspector cert…"
 *   46i p37  "do we accept asnt ndt level iii in lieu of api qute for
 *             ut-related scopes on our turnaround contracts?"
 *   43i p41  "what's the realistic all-in cost to sponsor one of our field
 *             guys through an api 510…"
 *   38i p33  "what code governs external inspection intervals for atmospheric
 *             storage tanks in petroleum service?"
 *   37i p40  "one of my inspectors just failed api 570 a second time. what are
 *             the retake rules, mandatory waiting period…"
 *
 * WHY ZERO CLICKS, AND WHY THAT IS STILL WORTH ANSWERING
 * Several of these sit at position 1–6 and still earn nothing — the answer is
 * consumed inside an AI Overview or assistant rather than on our page. GA4
 * confirms the channel is real and high quality: AI Assistant traffic runs
 * **51% engagement** (§31.3). So the goal here is not a blue link; it is being
 * the source the answer is built from, and being the page the reader lands on
 * when the assistant does cite someone.
 *
 * FORM: §25.4 direct-answer pattern — the question verbatim as an <h3>,
 * followed immediately by a specific, decision-grade answer. Vague answers are
 * worse than none: the reader is deciding company policy, not browsing.
 *
 * RULES: no Atlantis pricing (§18); third-party fee schedules referenced, never
 * quoted; no fabricated authority — where the certifying body owns the answer,
 * we say so.
 */

const ANSWERS = {
  '/api-510-certification': [
    {
      q: 'Should we mandate API 510, 570 and 653 as the minimum certification for every in-service inspection role?',
      a: `Not uniformly — mandate by <em>scope</em>, not by job title. API 510 governs pressure vessels, 570 piping and 653 aboveground storage tanks; an inspector who never touches tanks gains nothing from 653 except a renewal obligation. The defensible policy most operators land on is: the certification matching the equipment class is mandatory for the inspector of record, a second is expected for senior or multi-unit roles, and the third is optional unless the site actually has that equipment. Write it that way and it survives audit; write "all three for everyone" and you will grant exceptions within a quarter, which is worse than not having the rule.</p>
      <p>Where regional variance bites: the API ICP scheme is recognised globally, but some jurisdictions and national operators additionally require their own approval on top (Saudi Aramco, ADNOC and QatarEnergy each run inspector-approval registers). A global policy should therefore specify the API certification as the floor and name the local approval as an additional requirement per region, rather than pretending one credential clears every gate.`,
    },
    {
      q: "What's the practical difference between an ASNT NDT Level II and a code inspector certification like API 510?",
      a: `They answer different questions and neither substitutes for the other. An ASNT NDT Level II is a <strong>method</strong> qualification — this person is competent to set up, perform and interpret ultrasonic (or RT, MT, PT…) examination against a procedure. An API 510 certification is an <strong>equipment and code</strong> qualification — this person can determine inspection intervals, evaluate findings against the code, and sign that a vessel is fit to return to service. The Level II produces the data; the API inspector decides what it means for the asset.</p>
      <p>In practice a competent inspection function needs both, and the confusion costs money in one specific way: sending an ASNT Level II to perform an API 510 inspector's duties produces a report that will not be accepted by the jurisdiction, and paying for API certification for a technician who only performs examinations buys a credential they will never exercise.`,
    },
    {
      q: 'What does it actually cost to sponsor a field technician through API 510?',
      a: `The cost has three parts and only one of them is an invoice: the certifying body's examination fee (published on api.org and revised periodically — always price from their current schedule, not a figure quoted online), preparation whether formal training or structured self-study, and the part employers consistently underestimate — <strong>the productive time lost</strong>. Candidates who pass typically put in a substantial block of study, and the code books themselves are a real line item.</p>
      <p>The comparison that matters is not the total but the alternative: contracting an API inspector for the same scope, indefinitely. For a company with recurring vessel work, sponsorship usually pays back inside the first year of the certificate's life. For one-off work, it does not. <a href="/contact?service=training">Ask us to scope a sponsorship programme</a> and we will tell you honestly which of those two your workload actually is.`,
    },
  ],
  '/api-570-certification': [
    {
      q: 'One of our inspectors failed API 570 a second time — what are the retake rules and waiting period?',
      a: `The retake rules, waiting periods and any limit on attempts are set by API and published in its ICP candidate documentation — they change periodically, so verify against the current publication rather than a remembered figure. Practically, a candidate may re-sit in a later examination window rather than immediately, which means a second failure usually costs a full cycle of availability, not a few weeks.</p>
      <p>The more useful question is <em>why</em>. Two failures on API 570 almost always trace to one of three causes: treating it as a knowledge exam when it is a code-navigation exam under time pressure; strong field experience that answers "how we do it here" rather than "what the code says"; or weak calculation drill on remaining life, MAWP and interval determination. Each has a different remedy, and re-sitting without diagnosing which one applies produces a third failure. <a href="/api-570-training">How structured preparation is built</a>.`,
    },
    {
      q: 'Do we accept an ASNT NDT Level III in lieu of API qualification for UT scopes on turnaround contracts?',
      a: `For the <strong>examination</strong> itself, an ASNT Level III is the stronger qualification — that person can write and approve the UT procedure and qualify the technicians performing it, which API certification does not confer. For the <strong>inspection decision</strong> — interval determination, fitness assessment, return-to-service sign-off — an ASNT Level III is not a substitute, because those authorities sit with the API-certified inspector under the governing code.</p>
      <p>The clean contract language separates the two roles rather than trading one for the other: NDT performed under an ASNT Level III's technical authority, results evaluated and signed by the API-certified inspector of record. Contracts that let one credential cover both create exactly the ambiguity an auditor pulls on.`,
    },
  ],
  '/blog/api-653-tank-inspection-guide': [
    {
      q: 'What code governs external inspection intervals for atmospheric storage tanks in petroleum service?',
      a: `API 653 governs in-service inspection of aboveground storage tanks built to API 650 (and older API 12C tanks), and it sets external and internal intervals differently. External visual inspection runs on a defined maximum interval regardless of condition, while the internal interval is driven by measured corrosion rate and the resulting remaining life — which is why a tank with good thickness history can earn a longer internal interval than its neighbour on the same bund.</p>
      <p>Two qualifications matter. First, the intervals are maxima, not entitlements: a jurisdiction, an insurer or the owner's own programme can require shorter. Second, an interval calculated from thin data is not an interval — if corrosion rate rests on two readings within measurement scatter, the number is arithmetic, not evidence.`,
    },
    {
      q: 'How does API 653 want settlement measured, and what makes it unacceptable?',
      a: `Settlement is assessed by surveying elevations at defined points around the tank shell and evaluating the <em>pattern</em>, not the magnitude alone. API 653 distinguishes uniform settlement (the whole tank drops — largely benign), planar tilt (rigid-body rotation — assessed against limits that protect the shell and any floating roof), and out-of-plane or differential settlement (the shape distorts — the damaging case, evaluated against a fitted curve).</p>
      <p>The acceptance question is therefore never "how much has it settled" but "does the deviation from the fitted profile exceed what the shell can tolerate". Frequency follows the same logic as everything else in the standard: survey on a cycle, and shorten the cycle when successive surveys show movement rather than a stable offset. A single survey establishes a baseline and nothing more.`,
    },
  ],
  '/asnt-certification': [
    {
      q: "What's the difference between PCN and ASNT NDT courses?",
      a: `PCN (administered by BINDT in the UK) is a <strong>central certification</strong> scheme: an independent body examines the candidate and issues a certificate that belongs to the individual and travels with them between employers. ASNT SNT-TC-1A is a <strong>recommended practice</strong> for <em>employer-based</em> certification: the employer writes a Written Practice, administers the examinations under a Level III's authority, and certifies its own people — so the certificate is valid within that organisation and lapses on leaving it.</p>
      <p>Which to train toward is a market question, not a quality one. Contracts in the UK, much of Europe and many international operators name PCN or ISO 9712; North American work and most US-headquartered operators name SNT-TC-1A. For an individual, the central certificate is more portable; for an employer building a crew, the employer-based route is faster and cheaper to administer. <a href="/compare/asnt-vs-pcn">The full comparison</a>.`,
    },
    {
      q: 'Can someone without a degree realistically become a certified pressure vessel inspector?',
      a: `Yes, and it is one of the more common routes in the industry. API's certification requirements are built around <strong>education plus experience in combination</strong> — less formal education requires proportionally more documented inspection experience, and a candidate with substantial field time can qualify without a degree. Welders, NDT technicians and maintenance craft moving into inspection is a well-trodden path.</p>
      <p>The genuine obstacles are not academic. They are documenting experience in the form the application requires (start logging it before you need it), and the code-navigation discipline the examination tests, which rewards structured preparation over field seniority. <a href="/api-510-certification">API 510 requirements in detail</a> · <a href="/ndt-level-2-training">the NDT route in</a>.`,
    },
  ],
  '/api-inspector-guide': [
    {
      q: 'Between API 510 and API 570, which is more useful to hold first?',
      a: `Follow the equipment you actually inspect — but if the work is genuinely mixed, <strong>API 570 tends to be the more transferable first certification</strong>, because piping exists at every facility that has vessels while the reverse is not true, and piping circuits generate continuous inspection work where vessels cluster around turnarounds. API 510 becomes the stronger card in refining and pressure-equipment-heavy plants, and in any organisation where the inspector of record must sign vessel return-to-service.</p>
      <p>Holding both is common and sensible for a senior role; the sequence matters less than aligning the first one with the equipment your current employer's contracts actually name. <a href="/compare/api-510-vs-api-570">Compared side by side</a>.`,
    },
    {
      q: 'What changed with API ICP exam delivery, and does remote proctoring still apply?',
      a: `API moved its ICP examinations to computer-based delivery through its testing partner, replacing the older paper-based sittings, and the arrangements around remote versus test-centre delivery have been revised more than once. Because this is administered by API rather than by training providers, <strong>the only reliable source is api.org's current ICP publication</strong> — anything else, including this page, risks being a cycle out of date.</p>
      <p>What has not changed is the practical consequence for candidates: the examination remains open-book with specified publications, application windows close well before the examination itself, and the binding deadline is the application, not the sitting. Plan preparation backwards from the application date. <a href="/blog/api-510-570-653-exam-schedule-2026">Windows and deadlines</a>.`,
    },
  ],
};

export function applyDecisionMakerAnswers(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let pages = 0, questions = 0;
  for (const [path, list] of Object.entries(ANSWERS)) {
    const r = byPath.get(path);
    if (!r) continue;
    const body = list.map((x) => `      <h3>${x.q}</h3>\n      <p>${x.a}</p>`).join('\n');
    append(r, `
    <section aria-label="Questions inspection managers actually ask">
      <h2>Questions inspection managers actually ask</h2>
${body}
      <p>Have a question shaped like these? <a href="/contact?service=consulting">Put it to an ASNT Level III</a> — we answer the specific case, not the general one.</p>
    </section>`);
    // feed FAQ schema from the visibly rendered Q&A only (§20.8)
    r._faqs = [...(r._faqs || []), ...list.map((x) => ({ question: x.q, answer: x.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 900) }))];
    pages++; questions += list.length;
  }
  return { pages, questions };
}

export function assertNoPricesInDecisionAnswers() {
  const blob = JSON.stringify(ANSWERS);
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (m) throw new Error(`decision-maker answers contain pricing: ${[...new Set(m)].join(', ')}`);
}
