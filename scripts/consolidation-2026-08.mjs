/**
 * Consolidation + buyer-intent depth — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * Companion to scripts/ctr-wave5-overrides.mjs. Wave 5 fixed the titles; this
 * supplies the body content those titles now promise.
 *
 * FOUR JOBS, all evidence-led from the 90d GSC pull:
 *
 * 1. LEVEL III CONSULTING — the most commercially valuable cluster on the site
 *    and the worst cannibalised. Four pages competed for "asnt level iii
 *    consulting" (268 impressions, 0 clicks, best position 12.1), and two of the
 *    four were CITY pages ranking for a national service query
 *    (San Diego p81.5, Corpus Christi p62.1). The winner was only 665 words.
 *
 * 2. /radiographic-testing — 794 words, the thinnest page in its group, being
 *    outweighed roughly 7:1 by its own 5,830-word blog post. The commercial page
 *    should own commercial intent; the blog keeps the explainer.
 *
 * 3. TIER B BUYER QUERIES — real hiring intent sitting far down:
 *      mfl corrosion inspection pipeline   624i  p44.6  0 clicks
 *      ship hull inspection                611i  p51.6  0 clicks
 *      crack inspection technology         504i  p36.2  0 clicks
 *    A title rewrite cannot reach page one from there. These need substance.
 *
 * 4. FEATURED-SNIPPET BLOCKS — question-intent queries at position ≤8 earning
 *    0% CTR, because an AI Overview or snippet answers above us. The counter is
 *    a heading that restates the query verbatim followed immediately by a
 *    40–55 word direct answer.
 *
 * Owner direction 2026-08-04: Atlantis does NOT sell API 510/570/653 training.
 * Primary services are NDT training at all levels, ASNT Level III consulting,
 * and inspection services. Nothing here promotes API exam prep as a service.
 *
 * No prices anywhere (CLAUDE.md §18) — assertNoPricesInConsolidation() enforces it.
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── 1. Level III consulting — the winner takes the cluster ────────────────── */

const LEVEL_III_BODY = `
    <section aria-label="Outsourced ASNT Level III in detail">
      <h2>What a Level III is actually accountable for</h2>
      <p>Under a SNT-TC-1A based programme the Level III is not an advisory role — it is the person who establishes and approves the techniques and procedures, interprets the codes and specifications the work is performed to, and takes responsibility for qualifying and examining the Level I and II personnel who carry it out. The Written Practice that governs all of that carries their name. When a client or accreditation body audits your inspection function, this is the role they ask about first, because everything downstream depends on it.</p>
      <p>That is why the gap hurts disproportionately. An organisation can have competent technicians, calibrated equipment and sound procedures, and still fail an audit because nobody with the authority to approve those procedures actually did so.</p>

      <h2>Why organisations outsource it rather than hire</h2>
      <p>Level III capability is needed continuously but not fully occupied. Written practices are revised occasionally, procedures need approval when work changes, personnel need examining on a cycle, and audits arrive on somebody else's schedule. Between those events the workload does not justify a full-time appointment, and the skill is scarce enough that recruiting for it is slow and competitive.</p>
      <p>Outsourcing converts that into an arrangement that matches the actual demand: the authority is available when it is needed, and the organisation is not carrying it when it is not. For companies operating across several sites it also gives one consistent technical position rather than each site interpreting the code its own way.</p>

      <h2>What the engagement covers</h2>
      <ul>
        <li><strong>Written Practice</strong> — authored or reviewed against SNT-TC-1A or ANSI/ASNT CP-189, stating training and experience requirements by level and method, examination structure, vision requirements, and the certification and recertification rules you will actually be held to.</li>
        <li><strong>Procedure development and approval</strong> — technique-specific procedures written to the governing code, scoped narrowly enough to be demonstrable, with the approval signature that makes them valid.</li>
        <li><strong>Personnel qualification</strong> — general, specific and practical examinations administered and recorded, with the evidence retained in a form that survives staff turnover.</li>
        <li><strong>Audit support</strong> — attendance and technical response when a client, a certifying body or a regulator examines your programme, including closing findings properly rather than cosmetically.</li>
        <li><strong>Technique demonstration</strong> — where a code requires the procedure to be proven on representative geometry, running that demonstration and documenting it.</li>
        <li><strong>Independent review</strong> — a second technical opinion when an examination result is disputed, or when an in-house call carries commercial consequence.</li>
      </ul>

      <h2>SNT-TC-1A, CP-189 and ISO 9712 — which regime you are actually under</h2>
      <p>These are not interchangeable, and the choice is usually contractual rather than technical. <a href="/blog/asnt-snt-tc-1a-certification-requirements">SNT-TC-1A</a> is a recommended practice: the employer certifies its own people against its own Written Practice, which is flexible and is why auditors ask to see that document rather than a certificate. ANSI/ASNT CP-189 is a standard rather than a recommendation, with fixed requirements and less latitude — contracts wanting consistency across suppliers often specify it. <a href="/glossary/iso-9712">ISO 9712</a> certifies through an independent body, so the certificate belongs to the individual and travels with them.</p>
      <p>Getting this wrong is expensive in a specific way: personnel qualified under one regime may not be accepted on a contract written around another, and that is usually discovered at mobilisation.</p>

      <h2>How this works alongside your own people</h2>
      <p>The common misconception is that an outsourced Level III replaces internal capability. In practice it more often builds it — the Level II who is ready to progress needs someone qualified to examine and mentor them, and that is exactly what an external Level III can provide while the organisation grows its own. Several clients use the arrangement as a bridge: outsourced while they develop an internal candidate, then advisory once that person is certified.</p>

      <h2>Frequently asked questions</h2>
      <h3>Can an outsourced Level III sign our Written Practice?</h3>
      <p>Yes — that is one of the principal reasons to engage one. The Level III of record takes technical responsibility for the practice and the procedures issued under it. What matters to an auditor is that the person holds the certification for the methods in scope and that their involvement is real and documented, not that they are on your payroll.</p>
      <h3>Do we still need our own Level III eventually?</h3>
      <p>Not necessarily. Plenty of organisations run indefinitely with an external Level III, particularly where inspection is not their core business. Where volume grows to the point that approvals and examinations are needed continuously, bringing it in-house starts to make sense — and by then you usually have a Level II ready to certify.</p>
      <h3>Which methods can you cover?</h3>
      <p>UT, RT, MT, PT, VT and ET, plus advanced techniques including phased array and TOFD. Certification is granted per method, so the scope of any engagement states which methods the Level III is certified in — a point worth checking with any provider, since a Level III in one method is not a Level III in all of them.</p>
      <h3>How quickly can you take this on?</h3>
      <p>A written practice review and procedure gap assessment can usually start quickly, because it works from documents you already hold. Personnel examination is scheduled around your operation rather than ours. Tell us the deadline you are working to — an audit date, a contract award, a mobilisation — and we will say plainly whether it is achievable.</p>

      <p>Related: <a href="/consulting">all NDT consulting services</a> · <a href="/asnt-certification">how ASNT certification works</a> · <a href="/training">NDT training at all levels</a> · <a href="/contact?service=consulting">discuss an engagement</a>.</p>
    </section>`;

/* City pages must stop competing nationally for this term. */
const CITY_LEVEL_III_FRAMING = (city) => `
    <section aria-label="Scope of this page">
      <h2>This page covers ${esc(city)} specifically</h2>
      <p>What follows relates to inspection and consulting work in and around ${esc(city)}. If you are looking for the service itself rather than local coverage — outsourced ASNT Level III, written practice authoring, procedure approval and audit support, delivered wherever you operate — that is set out in full on the <a href="/consulting/ndt-consulting-level-iii">outsourced ASNT Level III</a> page, which is the right starting point for a national or multi-site enquiry.</p>
    </section>`;

/* ── 2. /radiographic-testing — commercial page reclaims commercial intent ── */

const RT_SERVICE_BODY = `
    <section aria-label="Radiographic testing service detail">
      <h2>What you receive from a radiographic examination</h2>
      <p>A radiographic inspection is only as useful as the record it leaves behind. Every examination is delivered with the image itself, the technique record stating source, energy, geometry and exposure, evidence that the required sensitivity was achieved through the image quality indicator, and an interpretation against the acceptance criteria in your governing construction code. Those four together are what an auditor, an insurer or a client's own engineer needs in order to rely on the result years later.</p>

      <h2>Where radiography is the right choice</h2>
      <p>Radiography images volume, which makes it strong on the discontinuity types that occupy space — porosity, slag inclusions, incomplete penetration seen along the beam, and root condition. It also produces a permanent image that a third party can re-read independently, which is why owners and insurers still specify it for critical fabrication even where ultrasonic alternatives are permitted.</p>
      <p>It is correspondingly weak on tight planar flaws lying across the beam. A crack presenting a fraction of a millimetre of missing material along the radiation path may produce no discernible density change, and lack of fusion on a bevel face frequently escapes. Where those are the credible failure modes, ultrasonic examination belongs alongside radiography rather than instead of it — and a specification that names only one is worth questioning before work starts.</p>

      <h2>Technique selection, and why it is not a formality</h2>
      <p>Source and energy are matched to wall thickness. Iridium-192 suits mid-range steel sections; cobalt-60 penetrates heavy wall but at a cost in contrast, so using it on thin material produces a flat image that will not meet image quality requirements. Selenium-75 occupies a useful middle ground on thinner sections where contrast matters. Geometry — source-to-film distance, source size, and the resulting geometric unsharpness — is what decides whether fine detail survives to the image at all.</p>
      <p>Digital capture changes the workflow rather than the physics. Detectors have far wider exposure latitude than film and allow immediate review, but they introduce their own requirements around spatial resolution, signal-to-noise and constrained processing, because an image that can be adjusted can also be adjusted until an indication disappears.</p>

      <h2>Codes the work is performed and judged against</h2>
      <p>ASME Section V Article 2 governs the examination method in the ASME world and defines image quality indicator selection and placement; ISO 17636 covers radiographic testing of welds with its own class system; API 1104 addresses pipeline girth welds and carries its own acceptance criteria, which differ genuinely from ASME's. The examination standard never sets acceptance — the referencing construction code does, and the same image can pass under one and fail under another.</p>

      <h2>Radiation safety and site control</h2>
      <p>Industrial radiography is a licensed activity with real exclusion requirements. Controlled area boundaries are established by calculation from source activity, distance and shielding, then confirmed by survey with a calibrated instrument — scatter from surrounding structures routinely produces dose rates above what a line-of-sight calculation predicts. Where a shutdown cannot accommodate exclusion, that constraint should shape technique selection early rather than being discovered on the night.</p>

      <h2>Frequently asked questions</h2>
      <h3>Can ultrasonic testing replace radiography on our welds?</h3>
      <p>Many codes now permit ultrasonic examination as an alternative for thick-section welds, and it detects planar flaws radiography can miss. It does not produce an equivalent image, so where a specification or an owner requires a radiograph, substitution has to be agreed in writing rather than assumed.</p>
      <h3>Do you provide digital radiography or film?</h3>
      <p>Both, chosen against what the specification requires and what the site allows. Digital gives immediate review and archives that do not degrade; film remains specified on some contracts. Where a specification predates the digital provisions in the applicable code, that needs resolving before work begins.</p>
      <h3>How do we know the image was good enough to rely on?</h3>
      <p>The image quality indicator. If the required hole or wire is not visible in the image, the required sensitivity was not achieved and no interpretation drawn from that image is supportable. It is the first thing to check on any radiograph you are handed, from any provider.</p>

      <p>Related: <a href="/blog/radiographic-testing-complete-guide">the full RT technical guide</a> · <a href="/ultrasonic-testing">ultrasonic testing</a> · <a href="/blog/rt-vs-ut-complete-comparison">RT vs UT</a> · <a href="/contact?service=inspection">request an inspection</a>.</p>
    </section>`;

/* ── 3. Tier B — buyer-intent service depth ───────────────────────────────── */

const TIER_B = {
  '/services/mfl-pipeline-inspection': {
    label: 'MFL pipeline inspection',
    body: [
      ['How magnetic flux leakage actually works',
       'The pipe wall is driven close to magnetic saturation. Metal loss reduces the cross-section available to carry that flux, so flux is forced out of the wall into the surrounding space where sensors detect it. The signal responds to the <em>volume</em> of metal missing, not to depth alone — which is the single most important thing to understand about interpreting the results.'],
      ['What it finds, and what it will not',
       'It is fast and effective on volumetric metal loss: corrosion, pitting and gouging, over large areas at survey speed. It is correspondingly poor at tight planar flaws such as cracks aligned with the flux, which remove almost no metal and therefore leak little. Very gradual general thinning can also under-respond, because it is the flux gradient that generates the signal. Where cracking is the credible failure mode, MFL is the wrong screening tool and ultrasonic or EMAT techniques belong in the scope.'],
      ['Why amplitude is not depth',
       'A broad shallow patch and a narrow deep pit can produce comparable signal amplitudes. This is precisely why MFL screens and ultrasonics confirms: the survey identifies where metal is missing and roughly how much, and targeted UT at those indications establishes the remaining wall that a fitness-for-service assessment actually needs. A report that converts amplitude directly to depth without that confirmation should be treated with caution.'],
      ['What governs the work',
       'API 1163 defines how an in-line inspection system is qualified — detection, identification, sizing and location validated against stated performance rather than vendor claim. ASTM E570 covers flux leakage examination of ferromagnetic tubing. API 653 governs tank floor examination, where MFL is the established screening method. NACE SP0102 addresses in-line inspection of pipelines more broadly.'],
      ['What you receive',
       'A survey record locating every indication, sized and classified; ultrasonic confirmation at the indications that matter; and the data in a form that feeds corrosion rate and remaining life rather than stopping at a defect list. The value is in what the next interval decision rests on, not in the length of the anomaly table.'],
      ['Tank floors — where MFL earns its place',
       'A storage tank floor is the classic application, and the reason is geometry rather than preference. The floor is large, flat, largely inaccessible from beneath, and corroding from the soil side where nothing can be seen. Scanning it ultrasonically point by point would take an implausible amount of time; MFL covers it at walking pace and identifies where the metal has gone. Under API 653 that screening result then drives where thickness is confirmed, whether patch plating or floor replacement is required, and how long the tank can run before the next internal.'],
      ['Pipelines and in-line inspection',
       'On pipelines the same physics travels inside a tool driven by the product. The constraints are different: tool speed affects signal, wall thickness must be within the range the magnetiser can saturate, and features such as bends, valves and wall-thickness transitions all produce signals that must be distinguished from metal loss. This is why API 1163 exists — it obliges the system, the procedures and the personnel to be qualified together and the results validated against field verification digs, rather than accepting a specification sheet as achieved performance.'],
      ['How to read an MFL report critically',
       'Three questions separate a report you can act on from one you cannot. First, was the tool qualified for the wall thickness and defect type actually present, or was a generic specification applied? Second, were the reported depths confirmed by ultrasonics at a representative sample of indications, and did the confirmations agree? Third, are the indications located precisely enough to be found again — a depth estimate with a vague position cannot support an excavation decision. A provider who cannot answer all three is offering a defect list rather than an integrity assessment.'],
      ['When MFL is the wrong tool',
       'It is worth being direct about this. If the credible failure mechanism is stress corrosion cracking, fatigue cracking at a weld, or hydrogen damage, MFL will not reliably find it and a survey that comes back clean will be actively misleading. Those mechanisms need ultrasonic, EMAT or crack-specific in-line tools. The right sequence is to establish the damage mechanism first and select the technique second — the reverse, which is more common, is how organisations end up with a clean survey and a failure.'],
    ],
    faq: [
      ['Does MFL work through coatings?', 'Yes, within limits. Coating thickness adds lift-off between sensor and steel, which reduces signal amplitude, so it must be known and accounted for during setup. Heavy or irregular coating erodes sensitivity to the point where the survey stops being reliable, and at that stage removal or an alternative technique is the honest recommendation.'],
      ['Can MFL find cracks?', 'Not dependably. Cracks aligned with the flux path remove almost no metal and produce little leakage. MFL is a metal-loss tool. If cracking is what you are protecting against, the scope needs a technique chosen for it rather than an assumption that one survey covers everything.'],
    ],
  },
  '/blog/ship-hull-and-propulsion-system-inspection': {
    label: 'Ship hull inspection',
    body: [
      ['What hull inspection is actually establishing',
       'Two questions run in parallel: whether the structure retains adequate thickness against the allowable diminution set by class, and whether there is damage — cracking, deformation, coating breakdown — that will propagate before the next survey. Thickness measurement answers the first quantitatively; structural and coating examination answers the second, and the two are planned together rather than as separate campaigns.'],
      ['Thickness measurement and diminution',
       'Ultrasonic thickness readings are taken at locations defined by the survey scheme, and judged against original scantlings and the diminution allowance for that member. Accuracy depends on things easy to get wrong at scale: surface preparation, couplant, probe selection for the coating condition, and calibration verified during the shift rather than only at the start. Readings recorded without their location context are close to useless at the next survey, because the trend is what matters.'],
      ['Where damage concentrates',
       'A vessel on station accumulates load cycles continuously, so fatigue concentrates at structural discontinuities — bracket toes, penetrations, hatch corners and the connections between longitudinals and transverse members. Ballast tanks combine that with an aggressive corrosion environment and difficult access. Coating breakdown is the leading indicator: where coating has failed, corrosion follows, and the survey scheme should weight attention accordingly.'],
      ['Propulsion and shafting',
       'Shafting, sterntube and propeller examination follows its own logic — shaft alignment and wear-down, keyway and taper cracking, propeller blade damage and its effect on balance. These are examined by a mixture of visual, dimensional and surface methods, with magnetic particle or penetrant on the areas where cracking initiates.'],
      ['Evidence that satisfies class',
       'Class survey is a documentary process as much as a technical one. Readings must be attributable to a location, taken by a technician whose qualification is current, with equipment whose calibration is traceable, against a procedure in force on the day. Where that chain is intact, the survey proceeds; where it is not, the readings may be rejected however competently they were taken.'],
    ],
    faq: [
      ['Can hull thickness be measured without dry-docking?', 'Internal readings and above-waterline work proceed afloat, and underwater inspection in lieu of drydocking is accepted by class in defined circumstances using approved diver or ROV techniques. Whether it is acceptable for your vessel and survey cycle is a class question, and worth confirming before planning around it.'],
      ['How many readings does a survey need?', 'It is set by the survey scheme for the vessel type and age, not by a general rule — and it rises as the vessel ages or where substantial corrosion has been recorded previously. The scheme also dictates where readings are taken, which matters more than how many.'],
    ],
  },
  '/blog/surface-breaking-crack-detection-comprehensive-methods': {
    label: 'Surface crack detection',
    body: [
      ['Choosing the method the material allows',
       'The first question is not sensitivity but material. Magnetic particle only works on ferromagnetic material — austenitic stainless, aluminium, copper and titanium are outside its scope entirely. Penetrant works on any non-porous material but requires a surface open to the flaw, so it fails where a coating bridges the crack. Eddy current works on any conductor and tolerates thin coatings. ACFM works through coatings and in adverse conditions and gives depth estimation, which the others do not.'],
      ['What each will actually find',
       'Magnetic particle finds surface and slightly subsurface cracking with excellent sensitivity and speed, provided the field is adequate and applied in two roughly perpendicular directions — a single magnetising direction has a blind orientation. Penetrant finds only what breaks the surface, and its sensitivity depends heavily on dwell time, which is the most commonly shortened step in the whole process. Eddy current finds surface and near-surface cracking without couplant, but reads lift-off as signal unless the setup separates the two deliberately.'],
      ['The failure modes worth knowing',
       'Most missed cracks trace to a small number of causes: examining in one magnetising direction only; cutting penetrant dwell to keep pace with production; phasing out lift-off so aggressively in eddy current that shallow flaws go with it; and surface condition that was never adequate for the method chosen. None of these are visible in the finished report unless the procedure requires them to be recorded.'],
      ['Codes governing the work',
       'ASME Section V Article 7 and ASTM E1444 for magnetic particle; ASME Section V Article 6, ASTM E165 and ASTM E1417 for penetrant; ASME Section V Article 8 for eddy current. ISO equivalents exist for each. Acceptance criteria come from the referencing construction code, never from the examination standard.'],
      ['What you receive',
       'An examination performed to an approved procedure by qualified personnel, with the technique parameters recorded, indications located and characterised, and an evaluation against the acceptance criteria that apply to your component. Where an indication is rejectable, the report says what it is and where, in terms a welding engineer can act on.'],
    ],
    faq: [
      ['Which is more sensitive, magnetic particle or penetrant?', 'On ferromagnetic material, magnetic particle is generally more sensitive to tight cracking and considerably faster, and it detects slightly subsurface flaws that penetrant cannot reach. Penetrant\'s advantage is that it works on materials magnetic particle cannot touch.'],
      ['Can cracks be found through paint?', 'Eddy current and ACFM tolerate thin coatings, and magnetic particle can work through limited coating thickness where it is demonstrated not to impair detection. Penetrant cannot — it needs the flaw open at the surface. Where coating removal is not possible, that constraint should drive method selection rather than be worked around.'],
    ],
  },
};

/* ── 4. Featured-snippet answer blocks ────────────────────────────────────── */

const SNIPPETS = {
  '/blog/rt-vs-ut-complete-comparison': {
    q: 'What is the difference between RT and UT?',
    a: 'Radiography passes radiation through the weld and images what it absorbs, so it reads volume well — porosity, slag, incomplete penetration. Ultrasonics sends sound in and times the echoes, so it finds tight planar flaws radiography misses and reports depth. RT leaves a permanent image; UT gives position without one.',
  },
  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison': {
    q: 'What is the difference between ISO 9712 and SNT-TC-1A?',
    a: 'ISO 9712 certification is granted by an independent body, so the certificate belongs to the technician and moves with them between employers. SNT-TC-1A certification is granted by the employer against its own Written Practice, so it is valid only within that organisation and lapses when the technician leaves.',
  },
  '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained': {
    q: 'What does ASME Section V Article 6 cover?',
    a: 'Article 6 governs how liquid penetrant examination is performed: surface preparation, penetrant application and minimum dwell, removal of excess, developer application, and the lighting and viewing conditions for evaluation. It sets the method only — acceptance criteria come from the referencing construction code.',
  },
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    q: 'What is SNT-TC-1A?',
    a: 'SNT-TC-1A is an ASNT recommended practice, not a standard. It gives an employer the framework to write its own Written Practice covering training hours, experience, examinations and vision requirements for certifying NDT personnel. Because it recommends rather than mandates, auditors ask to see the employer\'s Written Practice.',
  },
};

/* ── rendering ────────────────────────────────────────────────────────────── */

const tierBlock = (t) => `
    <section aria-label="${esc(t.label)} in detail">
${t.body.map(([h, p]) => `      <h2>${esc(h)}</h2>\n      <p>${p}</p>`).join('\n\n')}

      <h2>Frequently asked questions</h2>
${t.faq.map(([q, a]) => `      <h3>${esc(q)}</h3>\n      <p>${esc(a)}</p>`).join('\n\n')}

      <p>Related: <a href="/consulting">NDT consulting</a> · <a href="/training">NDT training</a> · <a href="/contact?service=inspection">request this inspection</a>.</p>
    </section>`;

/** Snippet block goes FIRST in the body — a snippet answer buried below the
 *  fold is not what Google lifts. */
const snippetBlock = (s) => `
    <section aria-label="Quick answer">
      <h2>${esc(s.q)}</h2>
      <p>${esc(s.a)}</p>
    </section>`;

function prepend(route, html) {
  const body = route.bodyContent || '  <main>\n  </main>';
  route.bodyContent = /<main[^>]*>/.test(body)
    ? body.replace(/(<main[^>]*>)/, `$1${html}`)
    : html + body;
}

/**
 * @param routes  prerender route list
 * @param append  (route, html) => void  from thin-page-upgrade.mjs
 */
export function applyConsolidation(routes, append) {
  assertNoPricesInConsolidation();
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { levelIII: 0, cityFramed: 0, rt: 0, tierB: 0, snippets: 0 };

  const l3 = byPath.get('/consulting/ndt-consulting-level-iii');
  if (l3) { append(l3, LEVEL_III_BODY); out.levelIII++; }

  // The two city pages that were ranking nationally for the Level III term.
  for (const [path, city] of [
    ['/training/asnt-level-iii-training-san-diego', 'San Diego'],
    ['/consulting/ndt-consulting-corpus-christi', 'Corpus Christi'],
  ]) {
    const r = byPath.get(path);
    if (r) { prepend(r, CITY_LEVEL_III_FRAMING(city)); out.cityFramed++; }
  }

  const rt = byPath.get('/radiographic-testing');
  if (rt) { append(rt, RT_SERVICE_BODY); out.rt++; }

  for (const [path, t] of Object.entries(TIER_B)) {
    const r = byPath.get(path);
    if (r) { append(r, tierBlock(t)); out.tierB++; }
  }

  for (const [path, s] of Object.entries(SNIPPETS)) {
    const r = byPath.get(path);
    if (!r) continue;
    prepend(r, snippetBlock(s));
    r._faqs = [...(r._faqs || []), { question: s.q, answer: s.a }];
    out.snippets++;
  }

  return out;
}

/** No Atlantis price may appear in any of this copy (CLAUDE.md §18). */
export function assertNoPricesInConsolidation() {
  const blobs = [
    LEVEL_III_BODY, RT_SERVICE_BODY,
    ...Object.values(TIER_B).flatMap((t) => [...t.body.flat(), ...t.faq.flat()]),
    ...Object.values(SNIPPETS).flatMap((s) => [s.q, s.a]),
  ].join(' ');
  const m = blobs.match(/[$£€₹]\s?\d[\d,]*|\b\d+\s?(?:USD|EUR|GBP|SAR|AED|INR)\b|per day|\/day|per hour|\/hour/gi);
  if (m) {
    throw new Error(`Consolidation copy contains pricing, which CLAUDE.md §18 forbids: ${[...new Set(m)].join(', ')}`);
  }
}
