/**
 * Remaining demand-bearing thin singles — 2026-08-13.
 * From the fresh audit (5,264 sitemap URLs, avg 1,152w, 725 under 650w):
 *   /3d-scanning-services ................ 256i @ 639w  (segment hub)
 *   /press ...............................  92i @ 598w
 *   /tools/ndt-certification-cost-calculator 65i @ 603w
 *   /resources/api-653-inspection-template   67i @ 646w  (4 words short)
 *   /tools/ndt-roi-calculator ............  56i @ 610w
 *   /resources/api-570-piping-inspection-record 35i @ 645w
 *   /compare .............................  33i @ 462w  (index page)
 *   /aerospace-ndt-training ..............  32i @ 432w
 *   /atlantis-academy ....................  27i @ 581w
 *
 * NOT touched, deliberately:
 *   `/` (1,682i @ 622w) — a homepage is not improved by SEO text; depth there
 *   costs clarity for the highest-intent visitors on the site.
 *   `/blog/ut-vs-rt-comparison` (1,427i) — canonical donor (§27.5).
 * No pricing (§18).
 */

const BLOCKS = {
  '/3d-scanning-services': `
    <section aria-label="Reality capture in practice">
      <h2>What 3D scanning actually delivers on an industrial site</h2>
      <p>Laser scanning and photogrammetry produce a measured record of what is physically there — as opposed to what the drawings say is there, which on a plant more than a few years old are two different things. The deliverable is a point cloud, and its value depends entirely on what you intend to do with it: a walkthrough model, a clash check against a proposed tie-in, an as-built drawing set, or dimensional verification against design tolerance are four different jobs with four different accuracy requirements.</p>

      <h2>Where it earns its keep</h2>
      <p><strong>Brownfield tie-ins.</strong> The classic failure is a fabricated spool that does not fit because the existing pipework moved during a modification nobody recorded. Scanning the connection area before fabrication converts a site rework into a shop dimension.</p>
      <p><strong>Turnaround planning.</strong> Scanning before a shutdown lets scaffolding, access and lift plans be built against measured reality, which is where most turnaround schedule slip originates.</p>
      <p><strong>Tank and vessel geometry.</strong> Shell distortion, settlement profiles and out-of-roundness are measurable from a scan far faster than by manual survey, and the result is comparable campaign to campaign — which is what makes it evidence rather than an observation.</p>
      <p><strong>As-built records where none exist.</strong> Older facilities frequently have no reliable drawing set. A scan is the cheapest route to one.</p>

      <h2>What it does not do</h2>
      <p>A scan records surfaces. It does not tell you wall thickness, it does not find cracks, and it cannot see inside anything. Reality capture and NDT answer different questions and are complementary rather than alternative — the scan tells you the geometry, the examination tells you the condition. Anyone selling scanning as a substitute for inspection is selling past the physics.</p>
      <p>Accuracy is also a specification, not a property: register the survey properly and control the target network, or the point cloud is precise and wrong. Ask any provider what registration error they achieved, not just what the scanner is rated for.</p>
      <p>Related: <a href="/digital-twins">where a scan becomes a digital twin</a> · <a href="/ultrasonic-testing">thickness and condition by UT</a> · <a href="/contact?service=3d-scanning">scope a scan</a>.</p>
    </section>`,

  '/press': `
    <section aria-label="Working with Atlantis on a story">
      <h2>What we can speak to with authority</h2>
      <p>Our commentary comes from practising ASNT Level III inspectors rather than a communications team, which means we can be specific — and will say when something is outside what we actually know. Subjects we can address in technical depth: the NDT workforce pipeline and what training genuinely fixes; why inspection data is the missing layer in most digital-twin programmes; how smaller inspection companies compete with consolidated majors on systems rather than headcount; the honest limits of AI in defect recognition; and what national contracts now demand of certification record-keeping.</p>
      <h2>How to work with us</h2>
      <p>For interviews, technical review of a draft, or background on a story, <a href="/contact">get in touch</a> with the outlet and the angle. We will tell you quickly whether we are the right source — and if we are not, we will usually know who is. Material published on this page carries its own dates and may be quoted with attribution.</p>
    </section>`,

  '/tools/ndt-certification-cost-calculator': `
    <section aria-label="How to use this estimate">
      <h2>What this estimate can and cannot tell you</h2>
      <p>Certification budgeting has three components and only one of them is an invoice: the certifying body's examination fees, preparation (formal training or structured self-study, plus the code books), and the component employers consistently underestimate — <strong>productive time lost while a technician studies and sits examinations</strong>. A plan built on fees alone will be wrong by a wide margin.</p>
      <p>Fees are set by the certifying body and revised periodically, so price the current schedule from api.org or asnt.org rather than any figure quoted elsewhere, including here. What this tool is genuinely useful for is the <em>shape</em> of the decision — comparing one method against three, or sponsoring internally against contracting the capability.</p>
      <h2>The comparison that actually matters</h2>
      <p>Not the total, but the alternative: contracting the same capability indefinitely. For recurring work, sponsorship usually repays inside the first certificate cycle; for one-off scopes it does not. <a href="/blog/build-in-house-ndt-team-vs-contracting-us">The build-versus-contract decision in full</a> · <a href="/contact?service=training">ask us to scope a programme</a>.</p>
    </section>`,

  '/tools/ndt-roi-calculator': `
    <section aria-label="Reading this ROI estimate honestly">
      <h2>Where inspection ROI actually comes from</h2>
      <p>Most inspection ROI arguments are built on avoided catastrophic failure, which is the least defensible number in the model — it depends on a probability nobody can evidence for a specific asset. The returns that survive scrutiny are duller and more reliable: <strong>avoided unplanned downtime</strong> when a finding converts an emergency outage into a planned one; <strong>extended intervals</strong> where measured condition justifies running longer than a calendar rule; <strong>avoided over-inspection</strong>, which is the saving risk-based programmes most often deliver and least often claim; and <strong>reduced rework</strong> where examination catches a fabrication defect before it ships.</p>
      <h2>Using the output without fooling yourself</h2>
      <p>Treat the result as a range and state the assumptions beside it. An ROI case that survives a CFO's questioning is one where each input can be traced to your own history rather than an industry average. If your corrosion rates rest on two readings within measurement scatter of each other, the model is arithmetic rather than evidence. <a href="/consulting/rbi-program-design">How interval decisions are actually justified</a> · <a href="/resources/business-software-evaluation-checklist">the evaluation checklist</a>.</p>
    </section>`,

  '/resources/api-653-inspection-template': `
    <section aria-label="Using this template well">
      <h2>The fields that carry the weight</h2>
      <p>Tank records outlive careers — the corrosion rate setting the next internal interval may compare readings taken decades apart — so consistency of structure is the template's real job. Floor data belongs as a mapped grid rather than spot readings, shell courses need nominal thickness and joint efficiency recorded so the minimum-thickness calculation is reproducible, and settlement belongs as surveyed elevations against the previous survey rather than an impression. Record what was <em>not</em> examined and why: an internal that could not access under the heating coils is a scoping fact the next campaign needs, and its absence reads as false assurance.</p>
      <p><a href="/blog/api-653-tank-inspection-guide">API 653 intervals and what gets examined</a> · <a href="/api-653-certification">certification requirements</a>.</p>
    </section>`,

  '/resources/api-570-piping-inspection-record': `
    <section aria-label="Using this record well">
      <h2>Circuit identity is what makes the data usable</h2>
      <p>Piping records live or die on circuit definition — bounded by service, material and corrosion behaviour — because that is what makes CML data comparable between campaigns. The record must carry circuit identity, the class determined under API 570's consequence-based system, and the injection-point, deadleg and CUI susceptibilities that drive extra attention. Class sets the external interval, measured rate sets the thickness-driven interval, and the shorter governs.</p>
      <p>The recurring audit finding: CMLs relocated because scaffolding or insulation blocked the original location, with no cross-reference recorded — which splits the history into two halves that cannot be joined. Force a mapping note whenever a location moves. <a href="/api-570-certification">API 570 in detail</a> · <a href="/blog/pipeline-audit-preparation-what-operators-check">what auditors pull first</a>.</p>
    </section>`,

  '/compare': `
    <section aria-label="How to use these comparisons">
      <h2>How to read a vendor comparison — including ours</h2>
      <p>Every comparison published by a vendor is written by an interested party, this one included. What makes one useful anyway is whether it states plainly what the alternative is genuinely good at. Our comparisons are written to that rule: each opens with where the rival wins, because a buyer who is evaluating both can see through anything else, and because the honest answer is frequently that the other product is the right choice for a particular situation.</p>
      <h2>What to bring to the evaluation</h2>
      <p>The decision is rarely feature-by-feature. It is usually: which system fits how we actually work, what happens at the edges of the core workflow, and how does our data leave if we change our minds. Run every vendor — us included — against your own scenarios rather than a demo script, and ask each the same export question. <a href="/resources/business-software-evaluation-checklist">The evaluation checklist</a> puts that in a usable form.</p>
    </section>`,

  '/aerospace-ndt-training': `
    <section aria-label="Aerospace NDT training in detail">
      <h2>Why aerospace NDT training is a different discipline</h2>
      <p>Aerospace runs the strictest personnel regime in non-destructive testing. Qualification is governed by <strong>NAS 410 in the US and EN 4179 in Europe</strong> rather than SNT-TC-1A alone, the employer holds approval through a named Responsible Level III, and Nadcap audits examine the training records as rigorously as the technique. A programme that satisfies industrial requirements will not satisfy an aerospace audit.</p>
      <h2>What the methods look like here</h2>
      <p>Fluorescent penetrant inspection dominates and is run as a controlled special process with lighting, dark-adaptation, bath-concentration and process-control requirements that industrial PT does not carry. Eddy current is the primary surface method on engine and airframe components. Ultrasonics addresses composites and forgings — a different problem from weld examination, tuned to bond lines and delamination rather than crack detection.</p>
      <h2>How programmes are built</h2>
      <p>Backwards from the audit: documented classroom hours per method and level, OJT logged against the requirement, examinations question-banked per method, and a records package that is audit-ready before the audit is scheduled. Atlantis delivers these on-site, configured to your written practice and approval scope. <a href="/penetrant-testing-training">PT training</a> · <a href="/eddy-current-testing-training">ET training</a> · <a href="/corporate-training/aerospace">corporate aerospace programmes</a> · <a href="/contact?service=training">scope a programme</a>.</p>
    </section>`,

  '/atlantis-academy': `
    <section aria-label="How Atlantis training is structured">
      <h2>How the training is actually built</h2>
      <p>Programmes are written and taught by practising ASNT Level III inspectors rather than career instructors, which shows up in one specific way: the material addresses what goes wrong in the field, not only what the syllabus lists. Structure follows the certification pathway — structured theory, supervised practical on representative specimens, then general, specific and practical examinations administered under a Level III's authority.</p>
      <h2>Delivery, stated plainly</h2>
      <p>Corporate programmes run <strong>on-site at your facility</strong>, which is usually the better arrangement for a team because practical specimens can match the equipment your people actually examine. Individuals are served through scheduled cohorts or blended delivery combining online theory with supervised practical. We do not operate walk-in training centres, and where a local provider is the honest answer for a single candidate we will say so.</p>
      <p>Start with the method — <a href="/ultrasonic-testing-training">UT</a>, <a href="/radiographic-testing-training">RT</a>, <a href="/magnetic-particle-testing-training">MT</a>, <a href="/penetrant-testing-training">PT</a>, <a href="/visual-testing-training">VT</a>, <a href="/eddy-current-testing-training">ET</a> — or the level: <a href="/ndt-level-1-training">Level I</a>, <a href="/ndt-level-2-training">Level II</a>, <a href="/asnt-level-iii-training">Level III</a>.</p>
    </section>`,
};

export function applyThinSingles(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let applied = 0; const missing = [];
  for (const [path, html] of Object.entries(BLOCKS)) {
    const r = byPath.get(path);
    if (!r) { missing.push(path); continue; }
    append(r, html);
    applied++;
  }
  return { applied, missing };
}

export function assertNoPricesInThinSingles() {
  const m = JSON.stringify(BLOCKS).match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (m) throw new Error(`thin singles contain pricing: ${[...new Set(m)].join(', ')}`);
}
