/**
 * National method-training pages — 2026-08-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE GAP (GSC 90d): 51 method+training queries, **502 impressions, ZERO clicks**
 * — and every single one lands on an inspection SERVICES page, which is the
 * wrong intent entirely:
 *
 *   ultrasonic testing training ........ 125i p28 -> /ultrasonic-testing-singapore
 *   ultrasonic testing level 1 training . 55i p56 -> /ultrasonic-testing-denver
 *   ultrasonic testing course ........... 27i p1  -> /ultrasonic-testing-kuwait
 *   eddy current training ............... 21i p1  -> /eddy-current-testing-singapore
 *   eddy current testing training ....... 17i p52 -> /eddy-current-testing-pittsburgh
 *   ndt penetrant test training ......... 12i p38 -> /penetrant-testing-singapore
 *   liquid penetrant testing training .... 8i p50 -> /penetrant-testing-los-angeles
 *
 * Someone searching "ultrasonic testing training" wants to LEARN the method.
 * We answer with a page selling UT inspection in Singapore. Two of these sit at
 * position ONE and still earn nothing, because the page does not match intent.
 *
 * NO method-specific training page exists on the site. `/ndt-level-{1,2}-training`
 * cover the LEVEL axis; `/training` is the hub; nothing covers the METHOD axis,
 * which is how candidates and employers actually search.
 *
 * Six pages, one per method. Each carries what the method is, what training it
 * actually takes at each level, the hour/experience structure, what the
 * practical examination demands, and who employs it — the questions a candidate
 * or a training manager asks before booking.
 *
 * Rules: no pricing (§18). No fabricated centres (§24.2) — delivery stated
 * honestly. Hour figures are described structurally, never invented as specific
 * numbers, because they are set by the employer's Written Practice.
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const METHOD_TRAINING = {
  'ultrasonic-testing-training': {
    name: 'Ultrasonic Testing (UT)', short: 'UT',
    title: 'Ultrasonic Testing Training — UT Level I, II and III Certification',
    desc: 'What UT training actually involves at Level I, II and III: the physics you must hold, calibration and technique skills the practical examination tests, and how employers structure the pathway. Delivered on-site or blended.',
    hero: 'Ultrasonic testing is the method most NDT careers are built on, and the one where the gap between holding a certificate and being genuinely competent is widest. Training has to close that gap, not just satisfy the hour count.',
    physics: 'UT training starts with wave behaviour, because everything downstream depends on it: longitudinal and shear modes and why angle-beam work is shear-wave work, velocity and its effect on depth calculation, attenuation, the near field and why measurements inside it are unreliable, and beam spread. Candidates who skip this arrive at sizing problems unable to explain why the number on screen is wrong.',
    levels: {
      one: 'Level I performs calibrations and examinations to a written instruction and records results. Training concentrates on instrument setup, calibration blocks, couplant discipline, thickness measurement and recognising when a reading is not trustworthy — a Level I who reports a back-wall echo as wall thickness inside the dead zone is the classic failure.',
      two: 'Level II sets up the technique, interprets against the code and signs the report. This is where angle-beam weld examination, DAC and TCG construction, transfer correction, flaw sizing by amplitude and by tip diffraction, and evaluation against ASME or AWS acceptance criteria are learned properly. Most contracts specify Level II, so this is the level that makes a technician employable.',
      three: 'Level III writes and approves the procedure, qualifies the Level I and II personnel, and answers for the technique when a finding is contested. Preparation covers procedure development, technique justification for the material and geometry, and the code knowledge to defend both.',
    },
    practical: 'The practical examination is where UT candidates most often fail, and rarely for lack of theory. It tests calibration performed correctly under time pressure, systematic scanning that actually covers the volume, honest recording of what was seen, and evaluation applied consistently. Repetition on real specimens is the only preparation that works — which is why practical time, not classroom hours, is the constraint on how fast a technician qualifies.',
    codes: 'ASME Section V Articles 4 and 5, AWS D1.1 Clause 8 for structural work, ISO 17640 and ISO 16810 internationally, with thickness data feeding API 510, 570 and 653 remaining-life calculation.',
    employers: 'Refining and petrochemical (corrosion programmes and weld examination), pipeline, power generation, fabrication, aerospace and marine survey. UT is the most transferable method in NDT — a competent UT Level II can work in nearly any sector.',
    advanced: 'Beyond conventional UT, phased array and TOFD are separate qualifications built on the same foundation. Do not attempt them before conventional UT is solid: an analyst who cannot read an A-scan cannot defend a phased-array call. <a href="/blog/paut-equipment-selection-guide-for-inspection-companies">PAUT equipment selection</a> · <a href="/tofd-testing">TOFD explained</a>.',
  },
  'radiographic-testing-training': {
    name: 'Radiographic Testing (RT)', short: 'RT',
    title: 'Radiographic Testing Training — RT Level I, II and III Certification',
    desc: 'RT training covering radiation physics and safety, exposure technique, film and digital interpretation, and the certification pathway at Level I, II and III — plus the licensing that sits alongside NDT certification.',
    hero: 'Radiography is the method with a regulatory layer no other NDT discipline carries. Training has to cover both the examination and the licensed handling of radiation, and the two have separate requirements.',
    physics: 'Training covers radiation production from both X-ray tubes and gamma sources, the inverse-square law, attenuation and half-value layer, and the geometry that governs image quality — source-to-film distance, focal spot size and the geometric unsharpness they produce. Density and contrast are taught as measurable quantities, not impressions, because acceptance depends on them.',
    levels: {
      one: 'Level I performs exposures to a written technique and processes the result. Training centres on radiation safety, technique execution, IQI placement and processing discipline. In many jurisdictions the safety component is a separate licensed qualification and must be held before a candidate touches a source.',
      two: 'Level II develops the technique, interprets the radiograph and evaluates against acceptance criteria. This is the interpretation level — distinguishing porosity from slag, lack of fusion from lack of penetration, and geometry from a defect, then applying the referencing code correctly. Interpretation is a trained skill built on hundreds of images.',
      three: 'Level III approves techniques and procedures, qualifies personnel, and handles the difficult calls. Preparation covers technique justification, the interaction between the examination and the radiation-safety programme, and the acceptance criteria across the codes the employer works to.',
    },
    practical: 'The practical examination tests technique calculation, correct IQI selection and placement, and — the part that separates candidates — reading images consistently against the criteria rather than by instinct. Digital radiography has shifted the tooling but not this: an interpreter who cannot articulate why an indication is rejectable will not survive a challenged report.',
    codes: 'ASME Section V Article 2, ISO 17636, API 1104 for pipeline girth welds, with acceptance from the referencing construction code. Radiation safety runs under national and state licensing separately from NDT certification.',
    employers: 'Fabrication and pressure-equipment manufacture, pipeline construction, refining turnarounds, aerospace and casting inspection. RT remains mandatory in codes where a permanent image is required, which keeps demand steady.',
    advanced: 'Computed and digital radiography are increasingly the delivered form. The interpretation skill transfers directly; the workflow, storage and image-processing discipline do not, and are worth training explicitly. <a href="/glossary/digital-radiography-dr">Digital radiography</a> · <a href="/blog/radiographic-testing-complete-guide">the full RT guide</a>.',
  },
  'magnetic-particle-testing-training': {
    name: 'Magnetic Particle Testing (MT)', short: 'MT',
    title: 'Magnetic Particle Testing Training — MT Level I, II and III Certification',
    desc: 'MT training: magnetisation theory, field direction and adequacy, wet and dry technique, and the certification pathway at Level I, II and III for ferromagnetic surface examination.',
    hero: 'Magnetic particle testing looks simple and is taught badly more often than any other method. The theory that matters — field direction, adequacy and demagnetisation — is exactly what a rushed programme skips.',
    physics: 'Training covers magnetic fields in ferromagnetic material, permeability and why it varies with heat treatment and stress, circular versus longitudinal magnetisation and why every area needs examining in two perpendicular directions, leakage-field behaviour at a discontinuity, and demagnetisation and when it is required.',
    levels: {
      one: 'Level I performs the examination to a written instruction — surface preparation, magnetisation, particle application and recording. Training focuses on technique execution and on field adequacy verification, because a technician who cannot demonstrate the field was adequate has not demonstrated anything.',
      two: 'Level II selects the technique, interprets indications and evaluates against the code. The core skill is distinguishing relevant indications from non-relevant ones — geometry, permeability changes at weld boundaries, magnetic writing — and calling neither a defect nor a false negative.',
      three: 'Level III approves procedures and qualifies personnel, including amperage determination, technique selection for the part geometry, and the process controls that keep a bath or a bench performing between calibrations.',
    },
    practical: 'The practical examination tests coverage discipline more than anything else. A yoke examines a small patch per placement, so a weld is a mosaic of overlapping placements in two orientations — and a rushed mosaic finds nothing while looking exactly like a completed examination. Candidates are also tested on field indicators and on demagnetisation.',
    codes: 'ASME Section V Article 7, ASTM E709 and E1444, ISO 9934 series, with acceptance from the governing construction code.',
    employers: 'Fabrication and welding, oil and gas, structural steel, automotive and rail component overhaul, lifting-equipment examination, and any operation with ferromagnetic components under fatigue loading.',
    advanced: 'MT applies only to ferromagnetic materials — a limit candidates must understand rather than memorise, because it drives when penetrant testing is the correct method instead. <a href="/penetrant-testing-training">PT training</a> covers the non-magnetic alternative.',
  },
  'penetrant-testing-training': {
    name: 'Penetrant Testing (PT)', short: 'PT',
    title: 'Penetrant Testing Training — PT Level I, II and III Certification',
    desc: 'PT training: capillary action, penetrant systems and sensitivity levels, dwell and removal discipline, and the certification pathway at Level I, II and III for surface examination of any non-porous material.',
    hero: 'Penetrant testing is the most forgiving method to perform and the least forgiving to perform badly. Nearly every false-negative traces to one of three controllable steps.',
    physics: 'Training covers capillary action and why flaw geometry governs penetration, penetrant systems and their sensitivity levels, the emulsification chemistry behind post-emulsifiable methods, and developer forms and what each one is for. The theory matters because it explains the failures rather than just naming the steps.',
    levels: {
      one: 'Level I performs the examination to a written instruction. Training concentrates on the three steps that decide the outcome: surface preparation (a blasted or peened surface can close flaws entirely), dwell time, and removal of excess penetrant — where over-washing empties the very flaws the dwell filled.',
      two: 'Level II selects the system and sensitivity level, interprets indications and evaluates against acceptance criteria, and runs the process controls that keep the system honest. Distinguishing a genuine indication from bleed-out at a geometry change is the interpretive skill.',
      three: 'Level III approves procedures, qualifies personnel and owns the process-control regime — reference-block verification, contamination checks and lighting levels, which is where audits find gaps.',
    },
    practical: 'The practical examination tests process discipline under observation: adequate cleaning, correct dwell, controlled removal, thin uniform developer, and evaluation under the required lighting. Fluorescent examination adds dark-adaptation and UV-intensity requirements that candidates routinely underestimate.',
    codes: 'ASME Section V Article 6, ASTM E165 and E1417, ISO 3452 series, with acceptance from the referencing construction code.',
    employers: 'Aerospace above all — fluorescent penetrant inspection is a Nadcap-audited special process — plus casting and forging manufacture, petrochemical alloy and stainless work, marine aluminium, and any operation with non-ferromagnetic components.',
    advanced: 'Aerospace PT runs under NAS 410 or EN 4179 personnel requirements rather than SNT-TC-1A alone, with employer approval per method. A candidate targeting aerospace should train toward that regime deliberately. <a href="/corporate-training/aerospace">Aerospace training programmes</a>.',
  },
  'visual-testing-training': {
    name: 'Visual Testing (VT)', short: 'VT',
    title: 'Visual Testing Training — VT Level I, II and III Certification',
    desc: 'VT training: what visual examination formally requires beyond looking, lighting and acuity requirements, weld acceptance criteria, and the certification pathway at Level I, II and III.',
    hero: 'Visual testing is the most used and least respected method in NDT. It is also the one that finds the most defects, and the first examination every other method depends on.',
    physics: 'Training covers what makes visual examination a formal method rather than an opinion: lighting levels measured at the surface, viewing angle and distance requirements, direct versus remote visual examination, magnification limits, and the vision acuity and colour-differentiation requirements the examiner must personally hold and re-verify.',
    levels: {
      one: 'Level I performs the examination to a written instruction and records what is present. Training focuses on systematic coverage, the measurement tools — weld gauges, profile gauges, depth measurement — and on recording rather than judging.',
      two: 'Level II evaluates against acceptance criteria, which for welds means AWS D1.1 or ASME acceptance applied consistently to undercut depth, reinforcement, profile, porosity and cracking. This is where the method becomes technical: undercut acceptance turns on fractions of a millimetre and on whether the connection is statically or cyclically loaded.',
      three: 'Level III approves procedures and qualifies personnel, and typically owns the interface with welding inspection qualifications such as CWI where the employer holds both.',
    },
    practical: 'The practical examination tests measurement rather than impression — candidates who eyeball undercut fail. It also tests coverage discipline and the discipline of recording what is there before deciding what it means.',
    codes: 'ASME Section V Article 9, AWS D1.1 visual acceptance for structural welds, and API 510, 570 and 653 in-service visual requirements.',
    employers: 'Every sector — VT is the first examination in almost every inspection programme, and in-service inspection under the API codes is substantially a visual discipline supported by volumetric methods.',
    advanced: 'VT sits alongside, not inside, welding inspection certification. A CWI qualification covers welding process knowledge and code application beyond NDT method certification, and many employers want both. <a href="/blog/cwi-certification-requirements-cost-career-impact">CWI certification</a> · <a href="/visual-testing">visual inspection services</a>.',
  },
  'eddy-current-testing-training': {
    name: 'Eddy Current Testing (ET)', short: 'ET',
    title: 'Eddy Current Testing Training — ET Level I, II and III Certification',
    desc: 'ET training: electromagnetic induction and the impedance plane, probe and frequency selection, tube inspection and surface crack detection, and the certification pathway at Level I, II and III.',
    hero: 'Eddy current is the most theory-dependent method in NDT. A technician who has memorised a setup procedure without understanding the impedance plane will misread the first unfamiliar signal they meet.',
    physics: 'Training covers electromagnetic induction, skin depth and why frequency selection determines what depth is examinable, the impedance plane and how lift-off, conductivity, permeability and defects each move the operating point along characteristic paths, and phase analysis — reading angle and amplitude together, which is the whole skill.',
    levels: {
      one: 'Level I performs examinations to a written instruction with an established setup. Training focuses on probe handling, reference-standard calibration, fill factor in tube work, and recognising when a signal is lift-off rather than a finding.',
      two: 'Level II selects frequency and probe, sets up against reference standards, and interprets and evaluates. This is where tube inspection (bobbin screening with array or rotating probes for prosecution), surface crack detection and coating-thickness work are learned, along with the phase discipline that separates a defect from noise.',
      three: 'Level III approves procedures and qualifies personnel, including technique justification for the material and geometry, and the saturation techniques required where permeability would otherwise swamp the examination.',
    },
    practical: 'The practical examination tests calibration on reference standards, correct interpretation of the impedance display, and sizing consistency. Candidates who read amplitude alone fail — two signals of identical height with different phase angles are different things, and the examination is designed to expose exactly that.',
    codes: 'ASME Section V Article 8 and its tubing appendices, ISO 15548, ASTM E243 for tube examination.',
    employers: 'Aerospace (the dominant surface method for airframe and engine components), heat-exchanger and condenser tube inspection across refining, petrochemical and power, plus conductivity and coating measurement in manufacturing.',
    advanced: 'Array eddy current and ACFM extend the method to wider coverage and to sizing through coatings. Both build on the same impedance-plane foundation and should follow conventional ET, not replace it. <a href="/glossary/alternating-current-field-measurement-acfm">ACFM</a> · <a href="/blog/eddy-current-testing-complete-guide">the full ET guide</a>.',
  },
};

function body(slug, m) {
  return `
    <section aria-label="${esc(m.name)} training in detail">
      <h1>${esc(m.title)}</h1>
      <p>${esc(m.hero)}</p>

      <h2>What ${esc(m.short)} training actually covers</h2>
      <p>${esc(m.physics)}</p>

      <h2>${esc(m.short)} training by certification level</h2>
      <h3>${esc(m.short)} Level I</h3>
      <p>${esc(m.levels.one)}</p>
      <h3>${esc(m.short)} Level II</h3>
      <p>${esc(m.levels.two)}</p>
      <h3>${esc(m.short)} Level III</h3>
      <p>${esc(m.levels.three)}</p>

      <h2>How the pathway is structured</h2>
      <p>Under ASNT SNT-TC-1A the employer sets training hours and documented experience hours per method and level in its own Written Practice, so the requirement you must satisfy is <em>your employer's</em> — not a universal number. Under ISO 9712 a central body examines and certifies, and the certificate travels with you between employers. Either way the pattern is the same: classroom or structured theory, supervised practical work, then general, specific and practical examinations. <strong>Training hours and experience hours are separate requirements</strong>, and candidates most often stall on the experience log rather than the coursework. Start documenting hours before you need them. <a href="/blog/snt-tc-1a-employer-programme-us-guide">How employers run the programme</a> · <a href="/asnt-certification">the certification pathway in full</a>.</p>

      <h2>The practical examination — where candidates actually fail</h2>
      <p>${esc(m.practical)}</p>

      <h2>Codes and standards you will work to</h2>
      <p>${esc(m.codes)}</p>

      <h2>Who employs ${esc(m.short)} technicians</h2>
      <p>${esc(m.employers)}</p>

      <h2>Where to go after ${esc(m.short)}</h2>
      <p>${m.advanced}</p>

      <h2>How Atlantis delivers ${esc(m.short)} training</h2>
      <p>Programmes are built and taught by practising ASNT Level IIIs. For companies, delivery is <strong>on-site at your facility</strong> — the practical work uses specimens representative of what your people actually examine, which is the single biggest difference between training that transfers to the job and training that does not. For individuals, scheduled cohorts and blended delivery combine structured theory with supervised practical. We are straightforward about the model: Atlantis does not operate walk-in training centres, and we will tell you when a local provider is the better answer for a single candidate.</p>

      <h2>Frequently asked questions</h2>
      <h3>How long does ${esc(m.short)} certification take?</h3>
      <p>It depends on the level and on how quickly you accumulate documented experience hours, which is usually the binding constraint rather than the coursework. A candidate already working under supervision progresses considerably faster than someone starting cold, because the experience accrues while they work.</p>
      <h3>Can I train in ${esc(m.short)} without prior NDT experience?</h3>
      <p>Yes for Level I — it is designed as an entry point. Level II requires documented Level I experience in the method, so the sequence matters. <a href="/ndt-level-1-training">The Level I route</a> · <a href="/ndt-level-2-training">Level II requirements</a>.</p>
      <h3>Does ${esc(m.short)} certification transfer between employers?</h3>
      <p>Under SNT-TC-1A, no — employer-based certification lapses when you leave, though your documented experience travels with you and the new employer can certify you against their Written Practice. Under ISO 9712 the certificate is yours. This distinction is worth understanding before choosing a route. <a href="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">The comparison in full</a>.</p>

      <p>Next: <a href="/training">all NDT training programmes</a> · <a href="/ndt-training-near-me">finding training near you</a> · <a href="/contact?service=training">ask about ${esc(m.short)} training for your team</a>.</p>
    </section>`;
}

/** Routes to inject — these paths do not exist yet, so they are pushed as new prerender entries. */
export function methodTrainingRoutes() {
  return Object.entries(METHOD_TRAINING).map(([slug, m]) => ({
    path: `/${slug}`,
    title: `${m.title} | Atlantis NDT`,
    description: m.desc,
    canonical: `https://atlantisndt.com/${slug}`,
    bodyContent: body(slug, m),
  }));
}

export function assertNoPricesInMethodTraining() {
  const blob = JSON.stringify(METHOD_TRAINING);
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (m) throw new Error(`method-training copy contains pricing: ${[...new Set(m)].join(', ')}`);
}
