/**
 * Practical NDT method and workplace pages + hub/city link blocks — 2026-10-17 (p17 practical).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY: the owner asked for Practical NDT "across North America × all cities × all industries ×
 * all methods × all environments", then chose the targeted option after seeing the data: 298
 * Practical NDT city pages earned 207 impressions and 3 clicks in 90 days, so NO new city pages.
 * Instead: national pages where search demand and real product substance exist (one per core
 * method, one per documented workplace), and a stronger /practical-ndt hub for "ndt simulator"
 * (#2 behind a free, long, citation-heavy competitor page).
 *
 * ONE SOURCE for both layers:
 *   React    src/pages/PracticalNdtSimulatorPage.tsx (the pages), src/components/PracticalSimBlocks.tsx
 *            (hub sections, "Practise now", the city/geo-hub link block)
 *   Crawler  scripts/practical-ndt-simulators-2026-10.mjs (routes, hub + city inserts, build assert)
 * SNT-TC-1A hours are NOT typed here: {l1t} {l2t} {l1e} {l2e} are filled from
 * src/data/snt-tc-1a-hours.json by resolveBlock(). Practice-test paths are checked against the
 * set files' canonicalPath at build.
 *
 * FACTS come only from: the owner-approved Practical NDT white paper (Oct 2026: twelve method
 * families, twelve workplaces, 33 practical lessons, 473 catalogued jobs, the twelve-step
 * procedure, what is and is not credited, the model limits, SNT-TC-1A / ISO 9712 / FAA AC 65-31B
 * framing and the published reliability studies it cites), src/data/product-screenshots.json
 * captions, the /practical-ndt page sources and the A-scan tool (src/data/ascan-simulator-2026-10.json).
 * Owner-confirmed (CLAUDE.md §53): integrated with the Atlantis LMS and ERP. In the current
 * release learner records are exported as files.
 *
 * RULES: a training simulation, not a validated engineering tool; simulator time is training,
 * never experience hours, and never replaces the practical examination; no prices, no ratings,
 * no Offer; no first/only claims; no city names (no local presence is implied anywhere); no
 * codes attributed to the simulator's procedures (the sources name none; the training report
 * states that code acceptance is not evaluated). Inline links use [label](/path).
 */

import { PRACTICAL_SIM_SLUGS } from './practical-ndt-simulator-slugs.mjs';

export const SITE = 'https://atlantisndt.com';
export const SIM_MARKER = 'data-practical-sim="2026-10"';
export const HUB_PATH = '/practical-ndt';
export const ASCAN_PATH = '/tools/ultrasonic-a-scan-simulator';
export const PRACTICE_HUB_PATH = '/ndt-practice-tests';
export const SIM_BASE = '/practical-ndt/';

/** Catalogue facts (white paper §3.3, §3.8, §7.1). */
export const CATALOGUE = {
  methodFamilies: 12,
  workplaces: 12,
  sharedWorkplaces: 10,
  dedicatedWorkplaces: 2,
  lessons: 33,
  jobs: 473,
  utSpecimenDatasets: 22,
  equipmentItems: 50,
  equipmentDocumented: 21,
  heatExchangerTubes: '2,000',
};

/** The twelve method families and their job counts (white paper Table 1; sums to CATALOGUE.jobs). */
export const METHOD_FAMILIES = [
  { code: 'UT', name: 'Ultrasonic testing', note: 'normal beam, angle beam, thickness', jobs: 208, href: '/practical-ndt/ultrasonic-testing-simulator' },
  { code: 'PAUT', name: 'Phased array UT', note: 'sectorial and linear scans', jobs: 18, href: '/practical-ndt/phased-array-ut-simulator' },
  { code: 'TOFD', name: 'Time-of-flight diffraction', note: 'two-probe weld scanning', jobs: 9, href: '/practical-ndt/tofd-simulator' },
  { code: 'RT', name: 'Radiography', note: 'film, CR and DDA', jobs: 48, href: '/practical-ndt/radiography-simulator' },
  { code: 'MT', name: 'Magnetic particle testing', note: 'AC and DC yoke', jobs: 49, href: '/practical-ndt/magnetic-particle-simulator' },
  { code: 'PT', name: 'Penetrant testing', note: 'visible and fluorescent', jobs: 41, href: '/practical-ndt/penetrant-testing-simulator' },
  { code: 'VT', name: 'Visual testing', note: 'direct, borescope and drone', jobs: 17, href: '/practical-ndt/visual-testing-simulator' },
  { code: 'ET', name: 'Eddy current testing', note: 'absolute, differential, bobbin, bolt-hole', jobs: 33, href: '/practical-ndt/eddy-current-simulator' },
  { code: 'IRIS', name: 'Internal rotary inspection', note: 'tube wall, on the heat exchanger page', jobs: 8, href: '/practical-ndt/heat-exchanger' },
  { code: 'MFL', name: 'Magnetic flux leakage', note: 'tank floor scanning, on the storage tank page', jobs: 16, href: '/practical-ndt/storage-tank' },
  { code: 'LRUT', name: 'Guided-wave (long-range UT)', note: 'pipe screening, on the process plant page', jobs: 18, href: '/practical-ndt/process-plant' },
  { code: 'PMI', name: 'Positive material identification (XRF)', note: 'alloy checks, on the process plant page', jobs: 8, href: '/practical-ndt/process-plant' },
];

/** The twelve workplaces (white paper §3.3). `slug` = has its own page. */
export const WORKPLACES = [
  { name: 'NDT laboratory', slug: 'ndt-lab', note: 'bench specimens and reference blocks' },
  { name: 'Welding workshop', slug: 'welding-workshop', note: 'weld coupons and fabrication joints' },
  { name: 'Aircraft hangar', slug: 'aviation', note: 'airframe and component inspection' },
  { name: 'Oil and gas site', slug: 'process-plant', note: 'weld, corrosion, tube and screening work' },
  { name: 'Storage tank', slug: 'storage-tank', note: 'dedicated installation: floor and shell' },
  { name: 'Heat exchanger', slug: 'heat-exchanger', note: 'dedicated installation: tube inspection' },
  { name: 'Cross-country pipeline', slug: null },
  { name: 'Offshore wind installation', slug: null },
  { name: 'Superyacht', slug: null },
  { name: 'Merchant vessel', slug: null },
  { name: 'Satellite assembly hall', slug: null },
  { name: 'Space propulsion facility', slug: null },
];

/** Short closer shared by every page (the only text repeated across siblings). */
export const SHARED_CLOSER = 'Practical NDT is a training simulation, not a validated engineering tool. It runs in a standard browser, works offline once downloaded, extends to standalone headsets and is integrated with the Atlantis LMS and ERP, so learners reach it from the client portal with one sign-in. Practice in it does not replace the practical examination or the experience hours your written practice requires.';

export const demoHref = (subject) => `/contact?service=practical-ndt&subject=${encodeURIComponent(subject)}`;

/* ═══════════════════════════════ METHOD PAGES ═══════════════════════════════ */

const UT = {
  slug: 'ultrasonic-testing-simulator',
  kind: 'method',
  code: 'UT',
  hoursCode: 'UT',
  crumb: 'UT practical simulator',
  title: 'Ultrasonic Testing Simulator: Calibration to Report Practice', // 2026-10-18 (traffic): leads with the searched term
  description: 'Practise ultrasonic testing in a browser: probe choice, couplant, two-reference calibration, gated scanning, coverage, angle beams and the training report.',
  h1: 'UT Practical Simulator: Practise Ultrasonic Testing from Calibration to Report',
  intro: 'The UT practical simulator in Atlantis Practical NDT runs normal-beam, angle-beam and thickness jobs in a browser-based 3D workplace. UT is the largest part of the catalogue, with 208 of its 473 jobs. You clean the surface, apply couplant, connect the probe, calibrate on two references, set gates and scan until the coverage map is complete, and each step is credited only when the simulation has recorded the evidence for it. There is no "next" button. To read a single A-scan first, with no sign-up, open the [free ultrasonic A-scan simulator](/tools/ultrasonic-a-scan-simulator).',
  sections: [
    { id: 'practise', h2: 'What you practise in a UT job', body: [
      { ol: [
        'Read the work order and confirm applicability: the component, the procedure, the objective and the limitations stated for the job, then check that specimen, material and method agree.',
        'Assemble the equipment. Pick the probe the work order calls for; a normal-beam probe chosen for a weld job, or an instrument that does not support the probe, is refused with the reason.',
        'Prepare the surface and apply couplant. Lift the probe or lose coupling during a scan and that position earns no data.',
        'Calibrate on two references and set the gates. Change velocity, zero or gain afterwards and the calibration is withdrawn, together with the coverage scanned since, so you recalibrate exactly as you would on a real job.',
        'Scan for coverage. A pass faster than the lesson limit of 100 mm/s (an educational limit, not a procedure value) is not credited, and the data-quality step stays open until 98% of the required area is covered; the coverage map shows the gaps.',
        'Repeat the calibration check after the last scan. Skip it, or run it before the final pass, and the report step stays locked: that is how calibration drift goes undetected on site.',
        'Record each indication against its position, submit the training report and go through the debrief with your instructor.',
      ] },
    ] },
    { id: 'model', h2: 'How the UT model calculates what you see', body: [
      { p: 'Practical NDT computes UT signals analytically, not with a full-wave or finite-element solver, so a scan runs at interactive frame rates on a phone, a laptop or a headset and behaves the same on each. The screen height of an echo before gain is A = 80 · ρ · E · T · exp[−α(f) · s], where ρ is the reflectivity of the reflector, E combines the beam footprint with the reflector\'s size and orientation, T is the share of energy that got past nearer reflectors and s is the sound path. Attenuation is scaled from its value at 5 MHz: α(f) = α₅ · (f / 5 MHz) to the power 1.3.' },
      { p: 'Two consequences are worth practising on purpose. The footprint widens with sound path in proportion to wavelength over probe diameter, so a small, deep reflector returns less than a large, shallow one. And a planar reflector answers strongly only close to normal incidence, so probe angle and scan direction decide what appears on the screen. Grain noise is a fixed function of position, which means the same scan always shows the same noise and one attempt can be compared fairly with the next. Angle-beam jobs unfold the first, second and third legs through the plate. The UT runtime carries 22 specimen datasets: nine base-metal, ten weld and three casting.' },
    ] },
    { id: 'kind', h2: 'Training simulator or engineering simulation?', body: [
      { p: 'Engineering simulation software models wave propagation to design and validate an inspection technique. A training simulator such as Practical NDT uses analytical signal models that run on a phone or a headset, so that a trainee can rehearse performing the procedure: probe choice, calibration, coverage and reporting. Use engineering simulation to qualify a technique, and a training simulator to practise carrying it out.' },
    ] },
    { id: 'evidence', h2: 'Why manual UT is drilled as a procedure', body: [
      { p: 'In the UK PANI 3 programme, 40 operators gave the same manual ultrasonic task to the same welded test pieces. Average detection per test piece ranged from 58% to 67%, individual defects were missed at rates from 13% to 58%, and years of experience predicted performance less well than measures of ability did. The study also found that 54% of operators did not consider all the information available from their scans before deciding what an indication was. That is an error of method, not of knowledge, and it is the kind of error repetition with feedback can reduce. In the simulator, interpretation is written against recorded observations and then reviewed by the instructor; the software gives no automated verdict.' },
    ] },
    { id: 'where', h2: 'Where the UT jobs run', body: [
      { p: 'UT jobs run across the shared catalogue: bench specimens and reference blocks in the [NDT lab](/practical-ndt/ndt-lab), weld coupons in the [welding workshop](/practical-ndt/welding-workshop), thickness and weld work on the [process plant](/practical-ndt/process-plant), jobs in the [aircraft hangar](/practical-ndt/aviation) and shell thickness surveys on the [storage tank](/practical-ndt/storage-tank). Each job pins the revision of its environment, specimen, procedure and equipment, and each equipment model is referenced to the manufacturer documentation of a named real instrument or probe.' },
      { p: 'Every job runs at three levels of assistance. Guided shows the instruction, the expected result and the recovery for each step, which is where a first two-reference calibration belongs. Coached hides the expected result, so you have to recognise a correct calibration response yourself. Independent gives you the work order only, the setting to use before a practical examination.' },
    ] },
    { id: 'limits', h2: 'What the UT simulator cannot teach', body: [
      { p: 'The model is a teaching approximation, and distance-amplitude correction (DAC) and time-corrected gain (TCG) are not yet part of the practice runtime, so evaluating amplitude against a DAC curve is still learned on real blocks. A screen cannot give you the feel of couplant and probe pressure, the drag of a rough or curved surface, real electronic noise, heat, poor light or an awkward scanning position. Telling a real flaw echo from geometry on a real weld needs real specimens, which is why Atlantis runs practical training in the simulator and then in person at the client\'s own facility, on real instruments and the client\'s components.' },
    ] },
    { id: 'snt', h2: 'How UT simulator practice fits SNT-TC-1A', body: [
      { hours: 'SNT-TC-1A leaves training and experience to the employer\'s written practice. Its recommended UT figures are {l1t} training hours for Level I and a further {l2t} for Level II, with {l1e} and {l2e} hours of experience in the method. Organised training may include computer-based or web-based training where the written practice allows it, so a logged UT practical can sit inside the training hours. It is not experience, which means work in the work environment: record simulator time as training unless a certification body has approved otherwise.' },
      { p: 'Plan what is left with the [SNT-TC-1A hours planner](/tools/snt-tc-1a-hours-planner) and check the theory with the free [UT Level II practice questions](/blog/ut-level-2-practice-questions).' },
    ] },
  ],
  faq: [
    { q: 'Is the UT simulator the same as the free A-scan tool?', a: 'No. The [A-scan tool](/tools/ultrasonic-a-scan-simulator) draws one straight-beam A-scan over a flat plate so you can learn gain, range and gates. The Practical NDT UT jobs add the whole procedure: probe choice, couplant, two-reference calibration, gated scanning with a coverage map, angle beams through three legs, the calibration check and the training report.' },
    { q: 'Can I practise ultrasonic testing for free?', a: 'Yes, in part. The free [A-scan tool](/tools/ultrasonic-a-scan-simulator) runs in your browser with no sign-up and teaches gain, range and gates on a straight-beam A-scan. The full UT practicals in Practical NDT are shown on request in a demo.' },
    { q: 'Does the UT simulator include DAC or TCG?', a: 'Not yet. Distance-amplitude correction and time-corrected gain are not part of the practice runtime in the current release, and the job brief says so.' },
    { q: 'Can UT simulator time count as experience hours?', a: 'Record it as training. Experience is work performed in the work environment; simulator practice can count as organised training only where your written practice allows it.' },
  ],
  next: [
    ['/ultrasonic-testing-training', 'Ultrasonic testing training', 'theory online, practicals in the simulator and at your facility'],
    ['/ut-level-2-training', 'UT Level II training'],
    ['/blog/ut-level-2-practice-questions', 'UT Level II practice questions'],
    ['/tools/ut-angle-beam-calculator', 'UT angle beam calculator', 'skip distance, sound path and leg'],
    ['/practical-ndt/phased-array-ut-simulator', 'Phased array UT simulator'],
    ['/practical-ndt/tofd-simulator', 'TOFD simulator'],
  ],
  demoSubject: 'Practical NDT demo: UT simulator',
  demoLabel: 'Request a UT simulator demo',
  teaches: ['Ultrasonic testing set-up and probe selection', 'Calibration on reference reflectors', 'Gated scanning and coverage', 'Angle-beam leg geometry', 'Indication recording and reporting'],
};

const PAUT = {
  slug: 'phased-array-ut-simulator',
  kind: 'method',
  code: 'PAUT',
  hoursCode: null,
  crumb: 'Phased array UT simulator',
  title: 'Phased Array UT Simulator: PAUT Practice | Atlantis NDT',
  description: 'Practise phased array UT set-up in a browser: array and wedge, element check, sectorial or linear laws, skew and encoder datum, then scan the weld.',
  h1: 'Phased Array UT Simulator: Build and Scan a PAUT Set-Up',
  intro: 'Phased array ultrasonic testing (PAUT) adds something conventional UT does not have: the instrument steers and focuses the beam through focal laws, so a careless set-up produces a convincing image of the wrong thing. The phased array simulator in Atlantis Practical NDT, with 18 PAUT jobs in the catalogue, makes you build the set-up in order: select the array and wedge, check the elements, set sectorial or linear laws, set skew and the encoder datum, then scan, while the procedure panel tracks each check from recorded evidence.',
  sections: [
    { id: 'setup', h2: 'The PAUT set-up you rehearse', body: [
      { ol: [
        'Match the array and the wedge to the work order. The component and the objective decide what is suitable, and an instrument that does not support the probe you picked is refused.',
        'Check the elements. A dead element fails the array check and the practical goes no further, because one missing element degrades every focal law that uses it.',
        'Set the laws: a sectorial sweep through a range of angles, or a linear scan at a fixed angle, as the technique requires.',
        'Set skew and the encoder datum, so every A-scan in the image has a known position relative to the weld.',
        'Calibrate, keep coupling and scan. As in every Practical NDT job, an action that would invalidate earlier evidence withdraws it, so a setting changed after calibration sends you back to recalibrate.',
        'Review data quality, interpret the sectorial or linear image and submit the training report for the instructor\'s review.',
      ] },
    ] },
    { id: 'model', h2: 'What the phased array model does, and does not do', body: [
      { p: 'The PAUT runtime uses a ray and envelope model of the focal laws. It traces how each law\'s beam travels and adds up, which is enough to show what steering, focusing and a dead element do to the image, and it is fast enough to run in a browser or on a headset. It provides no calibrated flaw sizing. Use the sectorial image to practise reading geometry, position and the effect of your settings, not as a measurement you could report.' },
      { p: 'One of the real screenshots on the [Practical NDT hub](/practical-ndt) shows a guided sectorial-scan practical: the flaw detector, couplant and weld specimen on the bench, with the procedure checklist tracking each step. Interpretation in that practical is reviewed by the instructor, not scored by the software.' },
    ] },
    { id: 'human', h2: 'Why the operator still matters in phased array', body: [
      { p: 'A study of human factors in mechanised ultrasonic inspection identified potential failures in both data acquisition and evaluation, with human, technological and organisational causes, and observed operators misusing and disusing an automated aid in ways that reduced its sizing reliability. Automation moves the human contribution; it does not remove it. A practical that will not move past a failed array check, and that withdraws evidence when a setting invalidates it, is training the part of the job no phased array instrument does for you.' },
    ] },
    { id: 'where', h2: 'Where the PAUT jobs run', body: [
      { p: 'PAUT jobs sit with the other ultrasonic techniques in the shared catalogue: weld coupons and fabrication joints in the [welding workshop](/practical-ndt/welding-workshop), bench work in the [NDT lab](/practical-ndt/ndt-lab), weld and corrosion work on the [process plant](/practical-ndt/process-plant) and jobs in the [aircraft hangar](/practical-ndt/aviation). Because the set-up sequence is the same twelve-step procedure as every other method, the habit of confirming the array before trusting the image carries straight over from the conventional UT jobs.' },
    ] },
    { id: 'limits', h2: 'What the PAUT simulator cannot teach', body: [
      { p: 'Sizing, first: the model is not calibrated for it, and sizing for acceptance belongs to a qualified procedure on real reference blocks. Beyond the model, a screen cannot reproduce couplant behaviour under a moving wedge, wedge wear, the effect of a weld cap on contact, the noise of a real instrument or the judgement of a real indication against a real geometric reflector. Those are learned in person, on real equipment, which is the second half of every Atlantis practical.' },
    ] },
    { id: 'snt', h2: 'Phased array practice and SNT-TC-1A', body: [
      { hours: 'PAUT is an ultrasonic technique, so it sits within the UT method body of knowledge. The site\'s SNT-TC-1A hours table covers the basic methods only; for UT its recommended figures are {l1t} and {l2t} training hours for Level I and Level II and {l1e} and {l2e} hours of method experience, and your employer\'s written practice sets what phased array adds on top. Simulator sessions can count toward organised training where the written practice allows web-based or computer-based training. They are never experience in the work environment, and they do not replace the practical examination.' },
      { p: 'Test the theory with the free [PAUT Level II practice questions](/blog/paut-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Can the PAUT simulator size a flaw?', a: 'No. The phased array model provides no calibrated flaw sizing, and the job brief says so. Use it for set-up, focal laws, skew, the encoder datum and image reading; learn sizing on real reference blocks under a qualified procedure.' },
    { q: 'What happens if an element is dead?', a: 'The array check fails and the practical does not continue. Spotting a dead element before scanning is part of the job, because it degrades every focal law that uses it.' },
    { q: 'Is there a free phased array demo?', a: 'The free [ultrasonic A-scan simulator](/tools/ultrasonic-a-scan-simulator) covers the single A-scan every phased array image is built from: gain, range and a gate. The PAUT jobs themselves are shown in a Practical NDT demo.' },
  ],
  next: [
    ['/phased-array-training', 'Phased array (PAUT) training'],
    ['/paut-level-2-training-course', 'PAUT Level II course'],
    ['/blog/paut-level-2-practice-questions-2026-free-mock-exam', 'PAUT Level II practice questions'],
    ['/tools/ultrasonic-a-scan-simulator', 'Free ultrasonic A-scan simulator'],
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/practical-ndt/tofd-simulator', 'TOFD simulator'],
  ],
  demoSubject: 'Practical NDT demo: PAUT simulator',
  demoLabel: 'Request a phased array simulator demo',
  teaches: ['Phased array probe and wedge selection', 'Element check', 'Sectorial and linear focal laws', 'Skew and encoder datum', 'Sectorial image reading'],
};

const TOFD = {
  slug: 'tofd-simulator',
  kind: 'method',
  code: 'TOFD',
  hoursCode: null,
  crumb: 'TOFD simulator',
  title: 'TOFD Simulator: Time-of-Flight Diffraction | Atlantis NDT',
  description: 'Practise TOFD in a browser: set the probe-centre separation, couple both probes, scan the weld and read lateral-wave, back-wall and tip arrivals.',
  h1: 'TOFD Simulator: Practise Time-of-Flight Diffraction Set-Up and Scanning',
  intro: 'Time-of-flight diffraction (TOFD) locates and sizes flaws from when diffracted signals arrive, not from how big an echo is, which makes it a technique about geometry and timing. The TOFD simulator in Atlantis Practical NDT, with 9 jobs in the catalogue, makes you set the probe-centre separation, couple both probes and scan, and the simulator computes the lateral-wave, back-wall and tip-diffraction arrival times from the probe geometry you chose. Get the geometry wrong and the timing shows it.',
  sections: [
    { id: 'practise', h2: 'What you set up and scan', body: [
      { ol: [
        'Open the work order and confirm the weld, the procedure, the objective and the limitations of the job.',
        'Set the probe-centre separation (PCS) for the wall thickness and the depth you need the beams to cover. Work the numbers out beforehand with the free [TOFD calculator](/tools/tofd-calculator), which gives PCS, tip depth and dead zone.',
        'Couple both probes. TOFD relies on the transmitter and receiver staying coupled at a fixed separation, and a position where coupling is lost earns no data.',
        'Scan along the weld, then review data quality before you interpret anything.',
        'Read the arrivals: the lateral wave travelling just under the surface, the back-wall echo, and between them any tip-diffraction signals from the upper and lower ends of a flaw.',
        'Record what you found against its position, finish the post-check and submit the training report for instructor review.',
      ] },
    ] },
    { id: 'model', h2: 'What the TOFD model computes', body: [
      { p: 'The TOFD model is geometric. From the probe-centre separation, the beam angles and the wall thickness it computes when the lateral wave, the back-wall echo and each tip-diffraction signal arrive. That is the relationship a TOFD technician has to carry in their head: the depth of a flaw tip comes from where its signal sits in time between the lateral wave and the back wall, and the shallow region hidden under the lateral wave, the dead zone, changes with the separation you set. Moving the probes apart and watching the arrivals shift is a quick way to build that intuition, and it costs nothing to repeat.' },
      { p: 'Like every Practical NDT signal model, it is analytical rather than a full-wave simulation, chosen so that it runs at interactive frame rates on ordinary devices and gives the same answer on each one.' },
    ] },
    { id: 'rehearse', h2: 'Rehearsing a technique you rarely use', body: [
      { p: 'Many technicians use TOFD only on certain contracts, and skills decay without use. A meta-analysis of skill retention found losses growing from negligible straight after training to large after more than a year without use, with greater decay for cognitive and accuracy-based tasks. A technician who has not run TOFD for a year can rehearse it before mobilising for the job, at the independent level of assistance, where only the work order is shown, and arrive with the set-up sequence already back in hand.' },
    ] },
    { id: 'where', h2: 'Where the TOFD jobs run', body: [
      { p: 'TOFD jobs belong with weld work: coupons and fabrication joints in the [welding workshop](/practical-ndt/welding-workshop) and weld jobs on the [process plant](/practical-ndt/process-plant). The [phased array](/practical-ndt/phased-array-ut-simulator) and [conventional UT](/practical-ndt/ultrasonic-testing-simulator) jobs on the same welds make a natural sequence, because many weld procedures pair TOFD with a pulse-echo technique.' },
    ] },
    { id: 'limits', h2: 'What the TOFD simulator cannot teach', body: [
      { p: 'Computing arrivals from geometry does not show every mode-converted signal, the effect of weld cap and root profile on a real scan, or the noise of a real acquisition system. Nor can a screen teach the handling of a two-probe scanner on a real weld: keeping both probes coupled over a crown, round an obstruction or on a hot surface. Flaw sizing for acceptance belongs to a qualified procedure on real blocks, and the training report states that code acceptance is not evaluated.' },
    ] },
    { id: 'snt', h2: 'TOFD practice and SNT-TC-1A', body: [
      { hours: 'TOFD is an ultrasonic technique, so under SNT-TC-1A it falls within the UT method. The hours table on this site has no separate TOFD row: the recommended UT figures are {l1t} and {l2t} training hours and {l1e} and {l2e} hours of method experience for Level I and Level II, and the written practice decides what TOFD adds. Simulator time can be logged as organised training where the written practice allows it; it is not work in the work environment, so it is not experience.' },
      { p: 'Check the theory with the free [TOFD Level II practice questions](/blog/tofd-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'What does the TOFD simulator calculate?', a: 'The arrival times of the lateral wave, the back-wall echo and the tip-diffraction signals, from the probe-centre separation and the probe geometry you set.' },
    { q: 'How do I choose the probe-centre separation?', a: 'From the wall thickness and the depth the beams need to cross. The [TOFD calculator](/tools/tofd-calculator) works out PCS, tip depth and dead zone, and the simulator lets you see what the choice does to the arrivals.' },
    { q: 'Can I practise TOFD without a scanner?', a: 'Yes: in the simulator you set the separation, couple both probes and scan in the browser. Handling a real two-probe scanner on a real weld is learned on equipment, in person.' },
  ],
  next: [
    ['/tofd-training-certification-course', 'TOFD training course'],
    ['/blog/tofd-level-2-practice-questions-2026-free-mock-exam', 'TOFD Level II practice questions'],
    ['/tools/tofd-calculator', 'TOFD calculator'],
    ['/tools/ultrasonic-a-scan-simulator', 'Free ultrasonic A-scan simulator'],
    ['/tofd-testing', 'TOFD inspection services'],
    ['/practical-ndt/phased-array-ut-simulator', 'Phased array UT simulator'],
  ],
  demoSubject: 'Practical NDT demo: TOFD simulator',
  demoLabel: 'Request a TOFD simulator demo',
  teaches: ['Probe-centre separation', 'Two-probe coupling', 'Lateral wave, back wall and tip diffraction', 'Dead zone', 'TOFD scan review'],
};

const RT = {
  slug: 'radiography-simulator',
  kind: 'method',
  code: 'RT',
  hoursCode: 'RT',
  crumb: 'Radiography simulator',
  title: 'Radiography Simulator for RT Practice | Atlantis NDT',
  description: 'Practise radiography with no source: choose SWSI, DWSI or DWDI, place the IQI and film or detector, then expose, process and review the image.',
  h1: 'Radiography Simulator: Make and Review an RT Exposure Without a Source',
  intro: 'Radiographic testing (RT) is the method where practice is hardest to arrange: every real exposure needs a source or an X-ray tube, a controlled area, licensed people and processing time. The radiography simulator in Atlantis Practical NDT has 48 jobs. You choose the source and the technique (single wall single image, double wall single image or double wall double image), place the image quality indicator (IQI) and the film or detector, make the exposure, process it and review the image. No radiation is involved at any point.',
  sections: [
    { id: 'practise', h2: 'The RT practical, step by step', body: [
      { ol: [
        'Read the work order: the component, the procedure and the objective.',
        'Run the pre-exposure checks, which take the place of the calibration step in the common procedure.',
        'Choose the source and the technique, SWSI, DWSI or DWDI, to suit the geometry in front of you.',
        'Place the IQI and the film or digital detector. The IQI is projected as a real body, so its image depends on where you put it.',
        'Make the exposure, then process the film or read the CR or DDA image. Open the darkroom door while film is being processed and the film is spoiled and its review withdrawn.',
        'With a gamma source, retract it and survey to confirm it has returned. Skip the survey and the post-check stays open.',
        'Review the image, write your interpretation and submit the training report, which carries the exposure record.',
      ] },
    ] },
    { id: 'model', h2: 'How the radiographic image is built', body: [
      { p: 'Attenuation comes from tabulated coefficients in NIST XCOM data, with build-up, so material and thickness change the exposure the way they should. The finite size of the source produces penumbra, which is why source size and geometry affect sharpness. The detector is modelled either as film, through its H&D characteristic, or as computed radiography or a digital detector array. What you get is an image you can judge for density and IQI sensitivity before you start looking for indications, which is the order a real film review follows.' },
    ] },
    { id: 'why', h2: 'Why radiography suits simulated practice', body: [
      { p: 'Reviews of virtual and mixed-reality training find its strongest case where danger or cost make conventional practice impractical, and radiography is the clearest example in NDT. A real repetition spends source time and closes an area to everyone else; a simulated one costs almost nothing. Trainees can repeat exposure set-up, IQI placement and darkroom discipline until the sequence is habit, then spend hands-on time with real sources on what only real equipment can teach. The survey after a gamma exposure is drilled the same way: the practical is not finished until the source return has been confirmed.' },
    ] },
    { id: 'where', h2: 'Where the RT jobs run', body: [
      { p: 'RT jobs run in the shared catalogue, from bench specimens in the [NDT lab](/practical-ndt/ndt-lab) to weld coupons and fabrication joints in the [welding workshop](/practical-ndt/welding-workshop). Each job pins the revision of its specimen, procedure and equipment, and the learner record lists the settings, the checks and, for radiography, the exposure record, so an instructor can see exactly how an image was made before discussing what it shows.' },
    ] },
    { id: 'limits', h2: 'What the radiography simulator cannot teach', body: [
      { p: 'The radiation dose display is a fictional exercise, not an exposure chart, and simulator practice does not meet any radiation safety training requirement: real source work stays under your employer\'s licence, its radiation safety programme and its supervision. A screen also cannot teach film handling under a safelight, working a collimator or a crawler, or reading real film on a real viewer. Interpreting real radiographs of real flaws needs real images, reviewed with a qualified interpreter.' },
    ] },
    { id: 'snt', h2: 'How RT simulator practice fits SNT-TC-1A', body: [
      { hours: 'For radiography, SNT-TC-1A recommends {l1t} training hours for Level I and {l2t} more for Level II, with {l1e} and {l2e} hours of experience in the method; the employer\'s written practice sets what is binding. Practical NDT exposures can count as organised training where the written practice allows web-based or computer-based training. They are not experience, which means work performed in the work environment, and they do not count toward any radiation safety qualification.' },
      { p: 'Test yourself with the free [RT Level II practice questions](/blog/rt-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Is there any radiation in the radiography simulator?', a: 'No. Sources, exposures and processing are simulated, and the dose display is a fictional exercise rather than an exposure chart.' },
    { q: 'Which radiographic techniques can I practise?', a: 'Single wall single image, double wall single image and double wall double image, with film or CR and DDA detectors, IQI placement, processing and image review.' },
    { q: 'Does simulator practice count toward radiation safety training?', a: 'No. Radiation safety training and source work are governed by your employer\'s licence and radiation safety programme. The simulator practises technique and discipline, not regulatory qualification.' },
  ],
  next: [
    ['/radiographic-testing-training', 'Radiographic testing training'],
    ['/blog/rt-level-2-practice-questions-2026-free-mock-exam', 'RT Level II practice questions'],
    ['/radiographic-testing', 'Radiographic testing services'],
    ['/blog/rt-vs-ut-complete-comparison', 'RT vs UT: when each method is used'],
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/practical-ndt/welding-workshop', 'Welding workshop workplace'],
  ],
  demoSubject: 'Practical NDT demo: radiography simulator',
  demoLabel: 'Request a radiography simulator demo',
  teaches: ['Radiographic technique selection (SWSI, DWSI, DWDI)', 'IQI and detector placement', 'Exposure, processing and darkroom discipline', 'Gamma source survey', 'Image review for density and IQI sensitivity'],
};

const MT = {
  slug: 'magnetic-particle-simulator',
  kind: 'method',
  code: 'MT',
  hoursCode: 'MT',
  crumb: 'Magnetic particle simulator',
  title: 'Magnetic Particle Testing Simulator (MT) | Atlantis NDT',
  description: 'Practise magnetic particle testing in a browser: AC or DC yoke, lift test, particles applied while energised in two directions, then demagnetise.',
  h1: 'Magnetic Particle Testing Simulator: Yoke, Two Directions, Demagnetise',
  intro: 'Magnetic particle testing (MT) looks simple, which is why its errors are so common: a single field direction, particles applied after the yoke is switched off, a yoke nobody checked. The magnetic particle testing simulator in Atlantis Practical NDT has 49 jobs. You use an AC or DC yoke, perform the lift test, apply particles while the part is energised in two directions and demagnetise afterwards, and the examination is credited only when that sequence has actually happened.',
  sections: [
    { id: 'practise', h2: 'The MT sequence you practise', body: [
      { ol: [
        'Confirm applicability. MT works only on ferromagnetic material and the catalogue enforces it: an MT job assigned to a non-ferromagnetic specimen never opens.',
        'Choose AC or DC and check the yoke with a lift test before it touches the part.',
        'Prepare the component and the area.',
        'Energise, apply particles while the field is on, then turn the yoke through roughly a right angle and examine again in the second direction.',
        'Inspect, and record each indication with its position.',
        'Demagnetise, complete the post-check and submit the training report.',
      ] },
    ] },
    { id: 'model', h2: 'What the magnetic model shows', body: [
      { p: 'Indication strength depends on the angle between the magnetic field and the flaw. A crack lying across the field gives a strong response; one lying along it gives very little. That one relationship is the reason for two examinations at right angles, and in the simulator you can see it: turn the yoke and the response from the same flaw changes. The demagnetisation sequence is modelled too, so leaving a part magnetised is not an invisible omission.' },
      { p: 'The magnetic model is a bounded teaching approximation, not a finite-element model. It teaches field direction and sequence; it does not predict field strength at a point, and it is not a substitute for field verification on real parts.' },
    ] },
    { id: 'errors', h2: 'The MT errors the simulator will not credit', body: [
      { p: 'Applying particles without the field, or magnetising in only one direction, means the examination is not credited. Those are the two errors behind cracks missed because they lie parallel to the field, and both are procedural rather than perceptual: a technician with perfect eyesight still misses the crack if the field is wrong. Many site errors are of this kind, which is why the platform is built to refuse credit for them rather than to grade the final picture. Repeat the sequence until the second direction and the demagnetisation are automatic.' },
    ] },
    { id: 'where', h2: 'Where the MT jobs run', body: [
      { p: 'MT jobs run on ferromagnetic specimens and components across the shared catalogue, from weld coupons and fabrication joints in the [welding workshop](/practical-ndt/welding-workshop) to bench specimens in the [NDT lab](/practical-ndt/ndt-lab) and plant components on the [process plant](/practical-ndt/process-plant). Non-magnetic materials go to the [penetrant testing simulator](/practical-ndt/penetrant-testing-simulator) instead, which is the same choice you make on site.' },
    ] },
    { id: 'limits', h2: 'What the MT simulator cannot teach', body: [
      { p: 'A screen cannot give you the weight of a yoke, its contact on a real weld cap, the way wet or dry particles behave on a real surface, or the lighting and viewing conditions of a real site. Deciding whether a real indication is relevant, or produced by geometry, a scratch or a change in section, needs real parts and an experienced reviewer. Atlantis runs that half of the practical in person, at the client\'s own facility.' },
    ] },
    { id: 'snt', h2: 'How MT simulator practice fits SNT-TC-1A', body: [
      { hours: 'SNT-TC-1A\'s recommended MT figures are {l1t} training hours for Level I and {l2t} more for Level II, with {l1e} and {l2e} hours of experience in the method. Those hours are fixed in the employer\'s written practice. Simulator practice can be counted as organised training where the written practice allows computer-based or web-based training; it is never experience in the work environment, and the practical examination on real parts still decides certification.' },
      { p: 'Check the theory with the free [MT Level II practice questions](/blog/mt-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Why does the MT simulator insist on two directions?', a: 'Because a crack lying parallel to the field gives almost no indication. Examining in two directions at right angles is how real procedures cover that blind spot, and the simulator does not credit an examination that skips it.' },
    { q: 'Can I run an MT job on stainless steel or aluminium?', a: 'No. The job catalogue refuses an MT job on a non-ferromagnetic specimen, as the method itself does. Use the [penetrant testing simulator](/practical-ndt/penetrant-testing-simulator) for those materials.' },
    { q: 'Is the field model accurate enough to qualify a procedure?', a: 'No. It is a bounded teaching approximation, not a finite-element model. It teaches direction and sequence; procedures are qualified on real parts.' },
  ],
  next: [
    ['/magnetic-particle-testing-training', 'Magnetic particle testing training'],
    ['/blog/mt-level-2-practice-questions-2026-free-mock-exam', 'MT Level II practice questions'],
    ['/magnetic-particle-testing', 'Magnetic particle testing services'],
    ['/practical-ndt/penetrant-testing-simulator', 'Penetrant testing simulator'],
    ['/practical-ndt/visual-testing-simulator', 'Visual testing simulator'],
  ],
  demoSubject: 'Practical NDT demo: MT simulator',
  demoLabel: 'Request a magnetic particle simulator demo',
  teaches: ['AC and DC yoke technique', 'Lift test', 'Two-direction magnetisation', 'Particle application while energised', 'Demagnetisation'],
};

const PT = {
  slug: 'penetrant-testing-simulator',
  kind: 'method',
  code: 'PT',
  hoursCode: 'PT',
  crumb: 'Penetrant testing simulator',
  title: 'Liquid Penetrant Testing Simulator (PT) | Atlantis NDT',
  description: 'Practise penetrant testing in a browser: pre-clean, apply, dwell, remove excess, develop and inspect under the right light, each stage timed by area.',
  h1: 'Penetrant Testing Simulator: Clean, Dwell, Remove, Develop, Inspect',
  intro: 'Liquid penetrant testing (PT) is a process method. The result depends on how well, and for how long, each stage was done, far more than on what the inspector sees at the end. The penetrant testing simulator in Atlantis Practical NDT has 41 jobs. You pre-clean, apply penetrant, observe the dwell time, remove the excess, develop and inspect under the correct lighting, and the simulation keeps the timing of each stage for each area of the surface.',
  sections: [
    { id: 'practise', h2: 'The PT process you rehearse', body: [
      { ol: [
        'Confirm the work order, the component and the penetrant system the procedure calls for.',
        'Pre-clean the surface. Penetrant cannot enter a crack that is full of contamination, so nothing later in the process can make up for a poor clean.',
        'Apply penetrant to the whole area to be examined.',
        'Observe the dwell time before removal.',
        'Remove the excess penetrant from the surface without washing it out of the discontinuities.',
        'Apply developer and allow development.',
        'Inspect under the correct viewing conditions for the system in use, record each indication with its position and finish the post-check.',
      ] },
    ] },
    { id: 'model', h2: 'What the PT model tracks', body: [
      { p: 'The PT model works per surface cell: it keeps the timing of each stage for each part of the surface, so the simulation knows which areas met each stage and which did not, rather than treating the part as one pass or fail. It also models the viewing conditions for fluorescent and visible-dye systems, so the conditions you inspect under are part of the practical, not an afterthought. That is the discipline PT needs: the area at the edge of the part, done in a hurry at the end of a shift, counts exactly as much as the area in the middle.' },
    ] },
    { id: 'why', h2: 'Why penetrant is drilled as a process', body: [
      { p: 'Most penetrant failures are process failures: a rushed clean, a short dwell, an over-washed surface or a development time cut short. None of them shows on the finished part; the crack simply produces no indication. A simulator that times each stage on each area makes those omissions visible to the trainee and to the instructor, and lets the full sequence be repeated many times without consuming penetrant, developer, cleaner or specimens, which is where conventional PT practice usually runs out of time.' },
    ] },
    { id: 'where', h2: 'Where the PT jobs run', body: [
      { p: 'PT jobs run across the shared catalogue: weld coupons and fabrication joints in the [welding workshop](/practical-ndt/welding-workshop), bench specimens in the [NDT lab](/practical-ndt/ndt-lab), airframe and component work in the [aircraft hangar](/practical-ndt/aviation) and plant components on the [process plant](/practical-ndt/process-plant). PT is also the answer when the material is not ferromagnetic, which is where the [magnetic particle simulator](/practical-ndt/magnetic-particle-simulator) stops.' },
    ] },
    { id: 'limits', h2: 'What the PT simulator cannot teach', body: [
      { p: 'A screen cannot give you the feel of cleaning a real weld or a rough casting, the way penetrant bleeds out of a real discontinuity, or the judgement between a true indication and a scratch, a weld toe or a surface that was never properly cleaned. Fluorescent inspection in a real booth, with real light levels and dark adaptation, is learned in person. Those skills are covered in the hands-on half of Atlantis training, at the client\'s own facility.' },
    ] },
    { id: 'snt', h2: 'How PT simulator practice fits SNT-TC-1A', body: [
      { hours: 'For penetrant testing, SNT-TC-1A recommends {l1t} training hours for Level I and {l2t} more for Level II, with {l1e} and {l2e} hours of experience in the method, and the employer\'s written practice makes them binding. Logged PT practicals can sit inside organised training where the written practice allows web-based training. They are not experience hours, which are earned on real work, and they do not replace the practical examination.' },
      { p: 'Check the theory with the free [PT Level II practice questions](/blog/pt-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Does the PT simulator time the dwell?', a: 'Yes. It keeps the timing of every stage, including dwell and development, for each area of the surface.' },
    { q: 'Can I practise fluorescent and visible penetrant?', a: 'Yes. The model includes the viewing conditions for both fluorescent and visible-dye systems.' },
    { q: 'Which materials can PT examine?', a: 'Any non-porous material, magnetic or not, which is why PT exists alongside magnetic particle testing. It finds only discontinuities that are open to the surface.' },
    { q: 'Does PT simulator practice count toward certification?', a: 'It can count as organised training where your written practice allows it. Certification still needs experience on real work and the practical examination.' },
  ],
  next: [
    ['/penetrant-testing-training', 'Penetrant testing training'],
    ['/blog/pt-level-2-practice-questions-2026-free-mock-exam', 'PT Level II practice questions'],
    ['/penetrant-testing', 'Penetrant testing services'],
    ['/practical-ndt/magnetic-particle-simulator', 'Magnetic particle simulator'],
    ['/practical-ndt/aviation', 'Aviation workplace'],
  ],
  demoSubject: 'Practical NDT demo: PT simulator',
  demoLabel: 'Request a penetrant testing simulator demo',
  teaches: ['Pre-cleaning', 'Penetrant application and dwell', 'Excess removal', 'Development', 'Fluorescent and visible viewing conditions'],
};

const VT = {
  slug: 'visual-testing-simulator',
  kind: 'method',
  code: 'VT',
  hoursCode: 'VT',
  crumb: 'Visual testing simulator',
  title: 'Visual Testing Simulator: VT and Borescope | Atlantis NDT',
  description: 'Practise visual testing in a browser: direct inspection with gauges, remote work with a borescope and drone views, with coverage earned from frames.',
  h1: 'Visual Testing Simulator: Direct, Borescope and Drone Inspection Practice',
  intro: 'Visual testing (VT) is the method every other method relies on, and the one where inspectors differ most. The visual testing simulator in Atlantis Practical NDT has 17 jobs covering three ways of looking: directly, with gauges; remotely, with a borescope; and from a drone over the plant. Coverage is earned from the frames you capture, so an area you did not actually look at is not counted as inspected.',
  sections: [
    { id: 'practise', h2: 'What you practise in a VT job', body: [
      { ul: [
        'Direct visual inspection with gauges: looking at the component at working distance and measuring what you see rather than estimating it.',
        'Remote visual inspection with a borescope, where the view is narrow and orientation is easy to lose.',
        'Visual inspection from a drone on the plant, where the question is what to capture and from where.',
        'Recording observations with their coordinates, so each finding is tied to a location in the learner record.',
        'The same work order, applicability check, post-check and training report as every other method.',
      ] },
    ] },
    { id: 'coverage', h2: 'How visual coverage is counted', body: [
      { p: 'The simulator does not credit an area because you were near it. It credits what your captured frames actually show, which is the visual equivalent of a UT coverage map: you, and your instructor in the learner record, can see where the inspection is complete and where it is not. That turns a vague instruction, "look at everything", into something you can practise and measure, and it is the same discipline whether the view comes from your own eyes, a borescope tip or a drone camera.' },
    ] },
    { id: 'evidence', h2: 'Why visual inspection needs deliberate practice', body: [
      { p: 'In an FAA benchmark of visual inspection on a Boeing 737, the crack length detected with 90% probability ranged from 0.16 to 0.36 inch across eleven inspectors and was 0.91 inch for the twelfth; individual inspectors found between 22 and 77 of the 117 cracks present. The aircraft was the same for all of them. The difference was the inspector: search pattern, coverage and attention. Those are trainable, and the simulator trains them with repetition and a record of exactly what was and was not covered.' },
    ] },
    { id: 'where', h2: 'Where the VT jobs run', body: [
      { p: 'Drone inspection happens on the [process plant](/practical-ndt/process-plant). Direct and borescope work runs in the shared catalogue, including weld examination in the [welding workshop](/practical-ndt/welding-workshop) and airframe and component work in the [aircraft hangar](/practical-ndt/aviation). Weld profile, corrosion, mechanical damage and access limitations are what the visual jobs are about, and they are also what decides where a volumetric method is worth using next.' },
    ] },
    { id: 'limits', h2: 'What the VT simulator cannot teach', body: [
      { p: 'A screen cannot reproduce glare, low light, heat, a confined space or the PPE you wear on site, all of which change what an inspector sees. It does not test your eyesight either: vision examinations are a separate requirement of the written practice. Drone inspection in the simulator is practice in what to look at and capture; real drone operations have their own rules and qualifications, which simulator practice does not cover.' },
    ] },
    { id: 'snt', h2: 'How VT simulator practice fits SNT-TC-1A', body: [
      { hours: 'SNT-TC-1A\'s recommended visual testing figures are {l1t} training hours for Level I and a further {l2t} for Level II, with {l1e} and {l2e} hours of method experience, all set in the employer\'s written practice. Simulator jobs can be logged as organised training where computer-based or web-based training is allowed. Experience is different: it means work performed in the work environment, so simulator time does not count toward it.' },
      { p: 'Check the theory with the free [VT Level II practice questions](/blog/vt-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Can I practise remote visual inspection?', a: 'Yes. The VT jobs include remote inspection with a borescope and visual inspection from a drone over the plant, as well as direct inspection with gauges.' },
    { q: 'How does the simulator know I covered an area?', a: 'Coverage is earned from the frames you capture. An area that does not appear in a captured frame is not counted as inspected.' },
    { q: 'Does VT simulator practice replace the vision examination?', a: 'No. Vision examinations are a separate requirement of the written practice; the simulator does not test eyesight.' },
    { q: 'What do the VT jobs ask you to look for?', a: 'Weld profile, corrosion, mechanical damage and access limitations, on welds, plant, airframe structure and components.' },
  ],
  next: [
    ['/visual-testing-training', 'Visual testing training'],
    ['/blog/vt-level-2-practice-questions-2026-free-mock-exam', 'VT Level II practice questions'],
    ['/visual-testing', 'Visual testing services'],
    ['/practical-ndt/process-plant', 'Process plant workplace'],
    ['/practical-ndt/magnetic-particle-simulator', 'Magnetic particle simulator'],
  ],
  demoSubject: 'Practical NDT demo: VT simulator',
  demoLabel: 'Request a visual testing simulator demo',
  teaches: ['Direct visual inspection with gauges', 'Remote visual inspection with a borescope', 'Drone visual inspection', 'Coverage', 'Recording observations by position'],
};

const ET = {
  slug: 'eddy-current-simulator',
  kind: 'method',
  code: 'ET',
  hoursCode: 'ET',
  crumb: 'Eddy current simulator',
  title: 'Eddy Current Testing Simulator (ET) | Atlantis NDT',
  description: 'Practise eddy current testing in a browser: absolute, differential, bobbin and bolt-hole techniques, nulling on a reference and the impedance plane.',
  h1: 'Eddy Current Testing Simulator: Null, Scan and Read the Impedance Plane',
  intro: 'Eddy current testing (ET) is learned on the impedance plane: the skill is telling a crack from lift-off, an edge or a change in material, and that takes repetition with feedback. The eddy current simulator in Atlantis Practical NDT has 33 jobs using absolute, differential, bobbin and bolt-hole techniques. You null the instrument on the reference, scan, and read a response computed from skin depth, lift-off, phase and gain.',
  sections: [
    { id: 'techniques', h2: 'The four eddy current techniques in the catalogue', body: [
      { ul: [
        'Absolute: a single coil compared with a reference, which shows gradual changes as well as abrupt ones.',
        'Differential: two coils compared with each other, which emphasises a short, sharp change such as a crack and suppresses slow variation.',
        'Bobbin: an encircling probe pulled through a tube, the standard technique for tube inspection in heat exchangers.',
        'Bolt-hole: a rotating or hand-turned probe in a fastener hole, a classic airframe inspection.',
      ] },
      { p: 'In every technique the sequence is the same as the rest of Practical NDT: work order, applicability, equipment, preparation, null on the reference, scan, review data quality, interpret, post-check, report.' },
    ] },
    { id: 'model', h2: 'What the eddy current model computes', body: [
      { p: 'The response is a complex impedance computed from skin depth, lift-off, phase and gain. Skin depth depends on frequency and on the material\'s conductivity and permeability, so the depth the field reaches is a choice you make; lift-off moves the signal along its own direction on the impedance plane; and phase and gain decide how a flaw signal sits relative to that lift-off line. Nulling on the reference sets the starting point, which is why a careless null makes every later reading harder to interpret.' },
    ] },
    { id: 'evidence', h2: 'What eddy current reliability studies found', body: [
      { p: 'In an FAA eddy current reliability experiment at nine airline facilities, the crack length detected with 90% probability was 0.14 to 0.18 inch for the poorest inspectors and 0.06 to 0.07 inch for the best, and differences between facilities were significant. One or two of the most experienced inspectors got the worst performance scores. Years in the job are not the same as skill, and skills decay without use: a technician who has not done bolt-hole eddy current for a year can rehearse it before mobilising for the job.' },
    ] },
    { id: 'where', h2: 'Where the eddy current jobs run', body: [
      { p: 'Tube work runs on the dedicated [heat exchanger](/practical-ndt/heat-exchanger), a bundle of 2,000 tubes for eddy current, IRIS, remote field and MFL tube inspection. The eddy current model there is not a validated probability-of-detection model, so use it to practise technique, nulling and signal reading, not to estimate what a real bundle would reveal. Airframe and component work runs in the [aircraft hangar](/practical-ndt/aviation), and bench specimens in the [NDT lab](/practical-ndt/ndt-lab).' },
    ] },
    { id: 'limits', h2: 'What the ET simulator cannot teach', body: [
      { p: 'A screen cannot give you the feel of keeping a pencil probe square to a curved surface, the drag of a bobbin probe in a long tube, or the noise and drift of a real instrument on a real part. Real conductivity and permeability variation, paint and coatings, and the geometry of real structure produce signals no teaching model fully reproduces. Interpretation of real eddy current data needs real reference standards and real components.' },
    ] },
    { id: 'snt', h2: 'How ET simulator practice fits SNT-TC-1A', body: [
      { hours: 'For eddy current testing, SNT-TC-1A\'s recommended figures are {l1t} training hours for Level I and {l2t} more for Level II, with {l1e} and {l2e} hours of experience in the method, and the employer\'s written practice sets the binding numbers. Simulator sessions can count as organised training where the written practice allows computer-based training. The FAA\'s advisory circular on NDI personnel defines experience as work in the work environment and excludes classroom and laboratory training, so simulator time is recorded as training, never as experience.' },
      { p: 'Check the theory with the free [ET Level II practice questions](/blog/et-level-2-practice-questions-2026-free-mock-exam).' },
    ] },
  ],
  faq: [
    { q: 'Which eddy current techniques can I practise?', a: 'Absolute, differential, bobbin and bolt-hole, each with nulling on the reference and a computed impedance-plane response.' },
    { q: 'Can I practise heat exchanger tube inspection?', a: 'Yes. The dedicated heat exchanger workplace has 2,000 tubes for eddy current, IRIS, remote field and MFL tube inspection. Its eddy current model is not a validated probability-of-detection model.' },
    { q: 'Does the ET simulator replace practice on reference standards?', a: 'No. It builds the impedance-plane habits; real reference standards and real components are still needed to interpret real signals.' },
  ],
  next: [
    ['/eddy-current-testing-training', 'Eddy current testing training'],
    ['/eddy-current-testing-level-2-course', 'ET Level II course'],
    ['/blog/et-level-2-practice-questions-2026-free-mock-exam', 'ET Level II practice questions'],
    ['/eddy-current-testing', 'Eddy current testing services'],
    ['/practical-ndt/heat-exchanger', 'Heat exchanger workplace'],
    ['/practical-ndt/aviation', 'Aviation workplace'],
  ],
  demoSubject: 'Practical NDT demo: eddy current simulator',
  demoLabel: 'Request an eddy current simulator demo',
  teaches: ['Absolute and differential eddy current', 'Bobbin tube inspection', 'Bolt-hole inspection', 'Nulling on a reference', 'Impedance-plane interpretation'],
};

/* ══════════════════════════════ WORKPLACE PAGES ══════════════════════════════ */

const LAB = {
  slug: 'ndt-lab',
  kind: 'workplace',
  crumb: 'NDT lab',
  title: 'NDT Lab Simulator: Bench Specimens and Blocks | Atlantis NDT',
  description: 'The NDT lab in Practical NDT: bench specimens and reference blocks for learning each method, labelled teaching samples and keyed exam specimens.',
  h1: 'NDT Lab Simulator: Bench Specimens, Reference Blocks and Calibration',
  intro: 'The NDT laboratory is where most Practical NDT trainees start. It is a bench setting with specimens and reference blocks, built for learning each method from first principles before the work moves to weld coupons, plant or aircraft. Known-defect teaching samples are labelled as such. Examination specimens carry unidentified reflectors whose key is held separately by the instructor.',
  sections: [
    { id: 'stages', h2: 'What the lab stages', body: [
      { ul: [
        'Reference blocks for calibration: in a UT job you calibrate on two references before a single scan is credited.',
        'Bench specimens for each method; the UT runtime alone carries 22 specimen datasets (nine base-metal, ten weld and three casting).',
        'Film radiography with darkroom processing, where opening the door while film is processing spoils the film and withdraws its review.',
        'Positive material identification by XRF on alloy references and unidentified samples, with light elements reported as not measured.',
        'An equipment register of 50 instruments, probes and accessories, each referenced to the manufacturer documentation of a named real model.',
      ] },
    ] },
    { id: 'specimens', h2: 'Teaching samples and examination specimens', body: [
      { p: 'The lab separates learning from assessment. A labelled known-defect sample is for learning what an indication looks like; a keyed examination specimen is for showing you can find it without being told. The learner record deliberately leaves out the hidden definitions of examination specimens, so the answers cannot be read from it, and your written interpretation goes to the instructor for review rather than being scored by the software. Instructor time moves from watching set-up to correcting interpretation and judgement.' },
    ] },
    { id: 'methods', h2: 'Methods to start with in the lab', body: [
      { p: 'Start with the method you are training for: the [ultrasonic testing](/practical-ndt/ultrasonic-testing-simulator), [radiography](/practical-ndt/radiography-simulator), [magnetic particle](/practical-ndt/magnetic-particle-simulator), [penetrant](/practical-ndt/penetrant-testing-simulator), [visual](/practical-ndt/visual-testing-simulator) and [eddy current](/practical-ndt/eddy-current-simulator) simulators all have bench jobs here, and the [phased array](/practical-ndt/phased-array-ut-simulator) practical shown on the hub is a bench set-up. Run a first job at the guided level, which shows the instruction, the expected result and the recovery for each step, then repeat it coached and independent before moving to a workplace.' },
    ] },
    { id: 'indications', h2: 'What the specimens are there to teach', body: [
      { p: 'Bench specimens are not damaged plant; they are built to teach the reflectors and discontinuities a procedure is written to find, under conditions where the answer can be checked. That is the value of a lab: every attempt can be compared with a known key, the same specimen can be run again on a different day, and a trainee can see how a change of probe, angle, exposure or field direction changes what appears, before the complications of real geometry arrive in the [welding workshop](/practical-ndt/welding-workshop) and on the [process plant](/practical-ndt/process-plant).' },
    ] },
    { id: 'codes', h2: 'What the lab jobs reference', body: [
      { p: 'Each job binds a work order, an objective, syllabus references and the pinned revisions of its environment, specimen, procedure and equipment, and every practical follows the platform\'s twelve-step procedure. The training report states that it is a training record only, that interpretation requires instructor review and that code acceptance is not evaluated. Acceptance against a construction or in-service code is taught in the course and applied on real work.' },
    ] },
    { id: 'limits', h2: 'What a virtual lab cannot reproduce', body: [
      { p: 'Real blocks have surfaces, wear and couplant behaviour; real instruments have noise and drift. Of the 50 equipment definitions, 21 are documented against manufacturer references and none has yet been compared with measured signals or validated, and the PMI reference samples are not certified reference materials. That is why the lab in the simulator prepares you for the real lab rather than replacing it.' },
    ] },
  ],
  faq: [
    { q: 'Should a trainee start in the NDT lab?', a: 'Usually, yes. The lab is the bench setting for learning each method from first principles, with reference blocks for calibration and labelled teaching samples, before moving to weld coupons, plant or aircraft.' },
    { q: 'Can the trainee see the answers to an examination specimen?', a: 'No. The key is held separately by the instructor and the learner record leaves out the hidden specimen definitions.' },
    { q: 'Are the PMI reference samples certified reference materials?', a: 'No, and the job brief says so. They are teaching samples.' },
    { q: 'Which methods can I practise in the lab?', a: 'All the core methods have bench jobs here, from UT calibration on reference blocks to film radiography, magnetic particle, penetrant, visual and eddy current, plus PMI by XRF on alloy samples.' },
  ],
  next: [
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/practical-ndt/welding-workshop', 'Welding workshop workplace'],
    ['/ndt-practice-tests', 'NDT practice tests'],
    ['/training', 'NDT training'],
    ['/lms', 'Atlantis LMS'],
  ],
  demoSubject: 'Practical NDT demo: NDT lab',
  demoLabel: 'Request an NDT lab demo',
  teaches: ['Calibration on reference blocks', 'Bench specimen inspection', 'Teaching samples versus examination specimens', 'Darkroom discipline', 'PMI by XRF'],
};

const WELD = {
  slug: 'welding-workshop',
  kind: 'workplace',
  crumb: 'Welding workshop',
  title: 'Weld Inspection Simulator: Welding Workshop | Atlantis NDT',
  description: 'The welding workshop in Practical NDT: weld coupons and fabrication joints inspected as a shop QC technician does, by UT, PAUT, TOFD, RT, MT, PT and VT.',
  h1: 'Weld Inspection Simulator: the Welding Workshop Workplace',
  intro: 'The welding workshop puts weld coupons and fabrication joints in front of the trainee, inspected the way a shop quality-control technician would. It is the workplace for angle-beam ultrasonics through the plate, phased array and TOFD on welds, weld radiography, magnetic particle and penetrant examination of weld surfaces, and visual examination of the weld itself.',
  sections: [
    { id: 'stages', h2: 'What the workshop stages', body: [
      { ul: [
        'Weld coupons and fabrication joints, with ten weld specimen datasets in the UT runtime alone.',
        'Angle-beam UT that unfolds the first, second and third legs through the plate; choose a normal-beam probe for a weld work order and the action is refused with the reason.',
        'Phased array sectorial or linear scans with an element check, skew and an encoder datum, and TOFD with a probe-centre separation you set.',
        'Weld radiography by single wall single image, double wall single image or double wall double image, with IQI placement and image review.',
        'MT with a yoke in two directions, PT through the full clean, dwell, remove and develop sequence, and visual examination with gauges.',
      ] },
    ] },
    { id: 'flaws', h2: 'What weld inspection is looking for', body: [
      { p: 'Shop weld inspection is about the discontinuities welding produces: lack of fusion and incomplete penetration, porosity and inclusions, cracks in the weld and the heat-affected zone, and profile problems such as undercut and excess reinforcement. Each method sees some of them well and others poorly, which is why a weld procedure often calls for more than one. Practising several methods on the same kind of joint is how a technician learns which method answers which question, and why a planar flaw that one technique misses can be obvious to another.' },
    ] },
    { id: 'path', h2: 'From the weld booth to the inspection bench', body: [
      { p: 'Many technicians come into inspection from welding, and the workshop is the natural bridge: the joints are familiar, and what changes is how they are examined and documented. The [welder to NDT technician](/blog/welder-to-ndt-technician-no-degree-path) path usually starts with visual and surface methods; the [visual](/practical-ndt/visual-testing-simulator), [magnetic particle](/practical-ndt/magnetic-particle-simulator) and [penetrant](/practical-ndt/penetrant-testing-simulator) jobs come first, followed by the [ultrasonic](/practical-ndt/ultrasonic-testing-simulator), [phased array](/practical-ndt/phased-array-ut-simulator), [TOFD](/practical-ndt/tofd-simulator) and [radiography](/practical-ndt/radiography-simulator) jobs on the same welds.' },
    ] },
    { id: 'lessons', h2: 'One technique, many joints', body: [
      { p: 'Practicals are organised as 33 practical lessons, each a technique profile, and the catalogue generates its 473 jobs by applying each technique to different specimens and workplaces. In practice a technique first met on a bench block in the [NDT lab](/practical-ndt/ndt-lab) comes back here on a weld coupon, with real joint geometry around it: a root, a cap, a bevel and a heat-affected zone. Running one technique on several joints is how a technician learns what belongs to the weld and what belongs to the technique.' },
    ] },
    { id: 'debrief', h2: 'What the instructor sees after a weld practical', body: [
      { p: 'A weld practical produces a learner record in HTML, JSON and PDF: the pinned revisions, the equipment and settings, the calibration values, the checks and each observation with its coordinates. That changes the debrief. Instead of remembering what a trainee did at the bench, the instructor can see which settings were used, where coverage fell short and which checks were repeated and why, and spend the session on the judgement calls a weld presents rather than on reconstructing the set-up. The record states that it is a training record only, not an inspection certificate, qualification or code acceptance decision.' },
    ] },
    { id: 'codes', h2: 'What the workshop jobs reference', body: [
      { p: 'The jobs follow the platform\'s twelve-step training procedure and carry syllabus references and pinned revisions. They do not evaluate acceptance against the construction code your shop works to: the training report says that code acceptance is not evaluated and that interpretation requires instructor review. Applying acceptance criteria to a real weld is part of the course and of supervised work.' },
    ] },
    { id: 'limits', h2: 'What the virtual workshop cannot reproduce', body: [
      { p: 'Real welds have spatter, ripple, a cap that lifts a probe and a root you cannot see, and real shops have heat, noise and production pressure. A screen cannot give you the feel of scanning over a weld cap or the judgement between a real indication and a geometric reflector from the root or the toe. That judgement is built on real joints, in person, after the procedure has become habit in the simulator.' },
    ] },
  ],
  faq: [
    { q: 'Which methods can I practise on welds?', a: 'Angle-beam UT, phased array, TOFD, radiography, magnetic particle, penetrant and visual examination, each on weld coupons and fabrication joints.' },
    { q: 'Does the simulator judge a weld against a code?', a: 'No. The training report states that code acceptance is not evaluated; interpretation is reviewed by the instructor.' },
    { q: 'Is the welding workshop a good start for a welder moving into inspection?', a: 'Often, because the joints are familiar. Start with the visual, magnetic particle and penetrant jobs, then move to the volumetric methods on the same welds.' },
  ],
  next: [
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/practical-ndt/phased-array-ut-simulator', 'Phased array UT simulator'],
    ['/practical-ndt/radiography-simulator', 'Radiography simulator'],
    ['/blog/welder-to-ndt-technician-no-degree-path', 'From welder to NDT technician'],
    ['/manufacturing-ndt-training', 'Manufacturing NDT training'],
  ],
  demoSubject: 'Practical NDT demo: welding workshop',
  demoLabel: 'Request a welding workshop demo',
  teaches: ['Weld inspection by UT, PAUT and TOFD', 'Weld radiography', 'MT and PT on weld surfaces', 'Visual weld examination'],
};

const PLANT = {
  slug: 'process-plant',
  kind: 'workplace',
  crumb: 'Process plant',
  title: 'Process Plant NDT Simulator: Oil and Gas Site | Atlantis NDT',
  description: 'The oil and gas site in Practical NDT: weld, corrosion, tube and screening practice in a plant setting, with guided-wave screening, XRF and drone views.',
  h1: 'Process Plant NDT Simulator: the Oil and Gas Site Workplace',
  intro: 'The oil and gas site is the process-plant workplace in Atlantis Practical NDT: weld, corrosion, tube and screening practice in a plant setting. It is where a trainee moves from bench specimens to the kind of assets an inspection contractor meets on site, such as pipe, fittings, welds, exchanger and boiler tubes and long pipe runs, with visual inspection from a drone over the plant.',
  sections: [
    { id: 'stages', h2: 'What the plant stages', body: [
      { ul: [
        'Thickness and weld work by ultrasonics, with the same two-reference calibration and coverage rules as the bench.',
        'Corrosion work by phased array and weld work by TOFD.',
        'IRIS on exchanger and boiler tubes: the trainee centres the probe in the tube and scans.',
        'Guided-wave screening (long-range ultrasonic testing, LRUT): fit the collar and set the test range.',
        'Positive material identification by XRF on alloy references and unidentified samples.',
        'Visual inspection from a drone, with coverage earned from the frames captured.',
      ] },
    ] },
    { id: 'lrut', h2: 'Guided-wave pipe screening', body: [
      { p: 'The 18 guided-wave jobs start with fitting a collar to the pipe and setting the test range. The simulator computes the range, the dead zone and the attenuation along the pipe, which are the three things that decide what a guided-wave test can and cannot say: how far it reaches in each direction, what it cannot see close to the collar, and how quickly the signal fades with distance. Guided wave is a screening technique; it tells you where to look, and a follow-up method such as ultrasonic thickness measurement tells you what is there.' },
    ] },
    { id: 'pmi', h2: 'Alloy checks by XRF', body: [
      { p: 'The 8 positive material identification jobs analyse alloy references and unidentified samples by X-ray fluorescence. The simulator reports the measured elements and reports light elements as not measured, which is the honest limit of handheld XRF and the point most often misunderstood about it. The reference samples are teaching samples, not certified reference materials.' },
    ] },
    { id: 'mechanisms', h2: 'The plant problems behind the jobs', body: [
      { p: 'Process plant inspection is driven by what operation does to equipment: internal and external corrosion thinning pipe and vessel walls, corrosion under insulation, erosion at bends and fittings, cracking at welds, tube wall loss in exchangers and boilers, and the wrong alloy installed where a specified one was needed. Thickness surveys, corrosion mapping, tube inspection, guided-wave screening and PMI each answer one of those questions. The simulator lets a trainee practise the technique for each before standing in front of the real equipment with a permit, a scaffold and a time limit.' },
    ] },
    { id: 'access', h2: 'Practice that does not wait for plant access', body: [
      { p: 'On real plant, practice has to fit around production, permits and access, which is why technicians often reach a job with fewer repetitions than anyone would choose. The simulator removes that constraint: a thickness survey, a guided-wave set-up or an XRF check can be repeated in minutes, at any hour, and offline packs let a technician practise during a rotation, while travelling or on site before a shift. Real plant time is then spent on what only real plant can teach.' },
    ] },
    { id: 'codes', h2: 'What the plant jobs reference', body: [
      { p: 'The jobs follow the twelve-step training procedure, with syllabus references and pinned revisions. In-service inspection intervals, corrosion rates and acceptance on real plant belong to the owner\'s inspection programme and its inspectors; the training report states that code acceptance is not evaluated. For the real work, see [inspection services](/inspection-services).' },
    ] },
    { id: 'limits', h2: 'What a virtual plant cannot reproduce', body: [
      { p: 'Heat, noise, permits, scaffolding, insulation that has to be removed, coatings, deposits and the time pressure of a turnaround are absent from a screen, and so is the feel of scanning hot, curved, pitted pipe. The models are analytical teaching approximations, not validated engineering tools. The plant in the simulator is preparation for site work, not a substitute for supervised site experience.' },
    ] },
  ],
  faq: [
    { q: 'Can I practise guided-wave screening?', a: 'Yes. The guided-wave jobs have you fit a collar and set the test range, and the simulator computes the range, dead zone and attenuation along the pipe.' },
    { q: 'Does the XRF job measure every element?', a: 'No. Light elements are reported as not measured, as with real handheld XRF, and the reference samples are not certified reference materials.' },
    { q: 'Can technicians practise without a connection on site?', a: 'Yes. Practical NDT installs as a progressive web application, offline packs of environments and equipment can be downloaded, and progress is saved locally.' },
  ],
  next: [
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/practical-ndt/heat-exchanger', 'Heat exchanger workplace'],
    ['/guided-wave-testing', 'Guided wave testing services'],
    ['/oil-gas-ndt-training', 'Oil and gas NDT training'],
    ['/practical-ndt/visual-testing-simulator', 'Visual testing simulator'],
  ],
  demoSubject: 'Practical NDT demo: process plant',
  demoLabel: 'Request a process plant demo',
  teaches: ['Thickness and corrosion surveys', 'Guided-wave pipe screening', 'IRIS tube inspection', 'PMI by XRF', 'Drone visual inspection'],
};

const TANK = {
  slug: 'storage-tank',
  kind: 'workplace',
  crumb: 'Storage tank',
  title: 'Storage Tank NDT Simulator: MFL and UT | Atlantis NDT',
  description: 'The storage tank in Practical NDT: drive an MFL floor scanner, read the live trace and wall-loss C-scan, and survey shell thickness by ultrasonics.',
  h1: 'Storage Tank Inspection Simulator: MFL Floor Scanning and UT Shell Surveys',
  intro: 'The storage tank is one of two dedicated installations in Atlantis Practical NDT, with floor and shell inspection on a full-size tank. On the floor the trainee drives a magnetic flux leakage (MFL) scanner and watches the live MFL trace and an estimated wall-loss C-scan build up; on the shell the job is an ultrasonic thickness survey. The catalogue lists 16 MFL jobs, in which the trainee drives a floor scanner over the tank floor.',
  sections: [
    { id: 'mfl', h2: 'MFL floor screening', body: [
      { ul: [
        'Drive the floor scanner across the floor plates.',
        'Watch the live MFL trace and the estimated wall-loss C-scan as they build up.',
        'Respect the edge and weld exclusion zones the scanner cannot cover, which the model includes.',
        'Switch the reference overlay of planted defects on for teaching; it is labelled as a teaching display, not inspection evidence.',
        'Use the teaching cutaway, with the shell opened, to follow the scanner across the floor from outside the tank.',
      ] },
    ] },
    { id: 'why-mfl', h2: 'Why the floor is screened, and what MFL cannot see', body: [
      { p: 'Tank floors lose metal from the product side and from the soil side, and the soil-side loss cannot be seen from inside the tank at all. MFL screening finds areas of wall-loss response quickly across a large floor, and the areas it flags are then proved up by ultrasonic thickness measurement. The exclusion zones matter as much as the scan: next to the shell and over lap welds the scanner cannot work, so those zones need another method, and a floor report that ignores them is incomplete. Practising the scan pattern and the exclusion zones on a virtual tank costs nothing; learning them on a real one costs a shutdown day.' },
    ] },
    { id: 'shell', h2: 'Shell thickness surveys', body: [
      { p: 'The shell jobs are ultrasonic thickness surveys, part of the UT catalogue, so the discipline of the [UT simulator](/practical-ndt/ultrasonic-testing-simulator) applies: couplant, calibration on references, and a calibration you do not disturb once it is set. The shell is also where work at height comes in, and work at height on storage tanks is exactly the kind of practice the research on virtual training says suits simulation best, because the real thing is dangerous and costly to repeat.' },
    ] },
    { id: 'headset', h2: 'On a screen or in a headset', body: [
      { p: 'The tank runs in a browser and on standalone headsets through WebXR, with hand tracking or controllers, stick locomotion and snap turning. Entering the headset pauses the inspection, and losing a controller releases the tool rather than leaving it in an undefined state. Offline packs, with lighter models for phones and headsets, let a technician practise without a connection.' },
    ] },
    { id: 'codes', h2: 'What the tank jobs reference', body: [
      { p: 'The jobs follow the twelve-step training procedure with pinned revisions. On a real tank, the inspection plan and the acceptance of floor and shell readings belong to the owner\'s tank inspector under API 653; the simulator\'s training report states that code acceptance is not evaluated, and the wall-loss C-scan is an estimate for teaching, not a measurement. For the real work, see [API 653 tank inspection](/consulting/api-653-tank-inspector-services) and the [API 653 tank inspection guide](/blog/api-653-tank-inspection-guide).' },
    ] },
    { id: 'limits', h2: 'What a virtual tank cannot reproduce', body: [
      { p: 'Confined-space entry, ventilation and gas testing, floor plates that are wet, scaled or coated, debris and sludge, the weight of a real scanner and the heat inside a tank in summer are not on a screen. The MFL response is a wall-loss screening model, not a validated sizing tool. The simulator prepares the technique; the real floor teaches the rest.' },
    ] },
  ],
  faq: [
    { q: 'Can I practise tank floor MFL without a tank?', a: 'Yes. In the catalogue\'s 16 MFL jobs you drive a floor scanner over the tank floor, read the live trace and the estimated wall-loss C-scan, and work around the edge and weld exclusion zones.' },
    { q: 'Is the wall-loss C-scan a measurement?', a: 'No. It is an estimated wall-loss display for teaching. Areas flagged on a real floor are proved up by ultrasonic thickness measurement.' },
    { q: 'What does the reference overlay show?', a: 'The planted defects, switched on for teaching. It is labelled as a reference only, not inspection evidence.' },
  ],
  next: [
    ['/practical-ndt/ultrasonic-testing-simulator', 'UT practical simulator'],
    ['/magnetic-flux-leakage-testing', 'Magnetic flux leakage testing services'],
    ['/consulting/api-653-tank-inspector-services', 'API 653 tank inspection'],
    ['/blog/api-653-tank-inspection-guide', 'API 653 tank inspection guide'],
    ['/practical-ndt/process-plant', 'Process plant workplace'],
  ],
  demoSubject: 'Practical NDT demo: storage tank',
  demoLabel: 'Request a storage tank demo',
  teaches: ['MFL tank floor screening', 'Edge and weld exclusion zones', 'Reading a wall-loss C-scan', 'UT shell thickness surveys'],
};

const HX = {
  slug: 'heat-exchanger',
  kind: 'workplace',
  crumb: 'Heat exchanger',
  title: 'Heat Exchanger Tube Simulator: ET and IRIS | Atlantis NDT',
  description: 'The heat exchanger in Practical NDT: 2,000 tubes for eddy current, IRIS, remote field and MFL tube inspection, with probe centring and signal dropouts.',
  h1: 'Heat Exchanger Tube Inspection Simulator: ET, IRIS, Remote Field and MFL',
  intro: 'The heat exchanger is the second dedicated installation in Atlantis Practical NDT: a bundle of 2,000 tubes for eddy current, IRIS, remote field and MFL tube inspection. Tube inspection is a test of procedure and stamina, the same set-up and calibration held steady across hundreds of tubes, with interpretation that decides which tubes stay in service. That makes it a good fit for repeated practice.',
  sections: [
    { id: 'iris', h2: 'IRIS jobs: centring and dropouts', body: [
      { p: 'IRIS, the internal rotary inspection system, measures tube wall with ultrasound reflected from a rotating mirror inside a water-filled tube. In the 8 IRIS jobs the trainee centres the probe in the tube and scans. The simulator computes the water and steel sound paths and the signal dropouts that eccentricity and bubbles cause, which are the two faults that spoil real IRIS data: a probe that is not centred and air in the water column.' },
    ] },
    { id: 'et', h2: 'Eddy current tube jobs', body: [
      { p: 'Eddy current tube inspection uses the bobbin technique: an encircling probe pulled through each tube after nulling on the reference. The response is computed from skin depth, lift-off, phase and gain, so frequency choice and a careful null show up in every tube that follows. The heat exchanger eddy current model is not a validated probability-of-detection model; use it for technique, calibration and signal reading, not to estimate what a real bundle would show. See the [eddy current simulator](/practical-ndt/eddy-current-simulator) for the other techniques.' },
    ] },
    { id: 'choose', h2: 'Remote field, MFL and choosing a technique', body: [
      { p: 'Remote field and MFL tube inspection are part of the same installation. The choice between techniques is mostly about the tube material: bobbin eddy current suits non-ferromagnetic tubes, remote field and MFL are used on ferromagnetic tubes where conventional eddy current struggles, and IRIS gives a direct ultrasonic wall measurement where a quantitative answer is needed. Practising them side by side on one bundle is how a technician learns why a tube campaign is planned around the tube material, not around the technician\'s favourite method.' },
    ] },
    { id: 'campaign', h2: 'What tube inspection is looking for', body: [
      { p: 'Exchanger and boiler tubes lose wall from the inside and the outside, wear where they pass through support plates, pit, and crack. A tube campaign is usually run inside a shutdown window, so the technician\'s ability to keep the same calibration, probe speed and recording discipline from the first tube to the last is what decides the quality of the data. In the simulator, a campaign can be practised at the guided level and then repeated independently until the routine holds.' },
    ] },
    { id: 'record', h2: 'What a tube practical records', body: [
      { p: 'The learner record lists the pinned revisions, the equipment, the settings, the calibration values, the checks and each observation with its coordinates. For a tube practical that is the evidence an instructor needs to see whether the null, the frequency and the recording discipline held steady across the bundle, and where the interpretation went wrong, without having watched every tube being inspected.' },
    ] },
    { id: 'codes', h2: 'What the tube jobs reference', body: [
      { p: 'The jobs follow the twelve-step training procedure with pinned revisions of the bundle, the procedure and the equipment. Plugging decisions and acceptance on a real exchanger belong to the owner\'s programme; the training report states that code acceptance is not evaluated and that interpretation requires instructor review.' },
    ] },
    { id: 'limits', h2: 'What a virtual bundle cannot reproduce', body: [
      { p: 'Tube cleaning before inspection, the water supply for IRIS, pulling a probe through a long, fouled tube, real deposits and real noise are not on a screen. Neither is the physical effort of a long campaign. The simulator builds the procedure and the signal-reading habits; real tubes and real data are still needed before a technician reports on a real bundle.' },
    ] },
  ],
  faq: [
    { q: 'Which tube inspection techniques are in the heat exchanger?', a: 'Eddy current, IRIS, remote field and MFL tube inspection, on a bundle of 2,000 tubes.' },
    { q: 'Why does the IRIS signal drop out?', a: 'Because the probe is not centred in the tube or there are bubbles in the water column. The simulator computes both effects so you can practise avoiding them.' },
    { q: 'Is the heat exchanger model a probability-of-detection model?', a: 'No. The eddy current heat exchanger model is not a validated probability-of-detection model; it is for practising technique and signal reading.' },
  ],
  next: [
    ['/practical-ndt/eddy-current-simulator', 'Eddy current simulator'],
    ['/practical-ndt/process-plant', 'Process plant workplace'],
    ['/blog/heat-exchanger-tube-inspection-methods-procedures', 'Heat exchanger tube inspection methods'],
    ['/eddy-current-testing-training', 'Eddy current testing training'],
    ['/eddy-current-testing', 'Eddy current testing services'],
  ],
  demoSubject: 'Practical NDT demo: heat exchanger',
  demoLabel: 'Request a heat exchanger demo',
  teaches: ['Bobbin eddy current tube inspection', 'IRIS probe centring', 'Remote field and MFL tube inspection', 'Tube campaign discipline'],
};

const AVIATION = {
  slug: 'aviation',
  kind: 'workplace',
  crumb: 'Aviation',
  title: 'Aviation NDT Simulator: Aircraft Hangar Jobs | Atlantis NDT',
  description: 'The aircraft hangar in Practical NDT: airframe and component inspection in a maintenance hangar, with eddy current, penetrant, ultrasonic and visual jobs.',
  h1: 'Aviation NDT Simulator: Practise in the Aircraft Hangar',
  intro: 'The aircraft hangar is the aviation workplace in Atlantis Practical NDT: airframe and component inspection in a maintenance-hangar setting. Aviation is where inspection reliability has been measured most carefully, and the results make a strong case for structured, recorded practice between real jobs.',
  sections: [
    { id: 'stages', h2: 'What the hangar stages', body: [
      { ul: [
        'Eddy current on airframe structure and components; the catalogue\'s eddy current techniques include bolt-hole inspection of fastener holes.',
        'Penetrant inspection of components, timed stage by stage for each area of the surface.',
        'Ultrasonic and phased array jobs on airframe and component geometry.',
        'Visual inspection, with coverage earned from captured frames, and remote work with a borescope.',
      ] },
    ] },
    { id: 'evidence', h2: 'What aviation reliability studies found', body: [
      { p: 'Two FAA studies cited in the design of Practical NDT come from aviation. In a benchmark of visual inspection on a Boeing 737, individual inspectors found between 22 and 77 of the 117 cracks present. In an eddy current reliability experiment at nine airline facilities, the crack length detected with 90% probability was about two to three times larger for the poorest inspectors than for the best, and one or two of the most experienced inspectors scored worst. In both, the variable was the inspector, not the aircraft.' },
    ] },
    { id: 'rehearse', h2: 'Rehearsal before the job', body: [
      { p: 'Aviation NDT is full of techniques used occasionally: a particular bolt-hole inspection, a component that comes round once a year. Skills decay without use, so the hangar is set up for refresher practice at the point of need: run the job at the independent level, with only the work order shown, before the real one. The learner record shows what was practised and how, which gives a supervisor evidence rather than an assurance.' },
    ] },
    { id: 'experience', h2: 'Training hours, not experience', body: [
      { p: 'The FAA\'s advisory circular on training, qualification and certification of NDI personnel defines experience as work performed in the work environment and excludes classroom and laboratory training. Simulator time in the hangar is therefore training. It can sit inside the organised training your written practice allows, and it prepares you for the practical examination and for supervised work on aircraft; it does not replace either.' },
    ] },
    { id: 'consistency', h2: 'The same procedure for every inspector', body: [
      { p: 'Wide variation in detection between inspectors is the finding the aviation studies share, and the response built into Practical NDT is consistency: the same procedure, the same evidence rules and the same records for every trainee, whichever facility or shift they come from. That is implemented in every job; its effect on detection has not yet been measured. No study has yet linked simulator training in NDT to field probability of detection or error rates, and Atlantis has proposed a controlled evaluation, with blind real specimens and several operators per group, to measure it rather than assume it.' },
    ] },
    { id: 'codes', h2: 'What the hangar jobs reference', body: [
      { p: 'The jobs follow the twelve-step training procedure with pinned revisions of the environment, specimen, procedure and equipment. Real aircraft inspection is carried out to the manufacturer\'s and operator\'s approved data under the employer\'s certification programme; the training report states that it is a training record only and that code acceptance is not evaluated. For the career route, see [aviation NDT training](/aviation-ndt-training) and [aerospace NDT training](/aerospace-ndt-training).' },
    ] },
    { id: 'limits', h2: 'What a virtual hangar cannot reproduce', body: [
      { p: 'Real aircraft have paint, sealant, fasteners, access panels, stands and limited time on the ground; real instruments drift and real probes wear. The eddy current responses are computed from a teaching model, not from the structure of a particular aircraft. The hangar in the simulator builds the procedure and the habits; supervised work on aircraft builds the experience.' },
    ] },
  ],
  faq: [
    { q: 'Which methods can I practise in the aircraft hangar?', a: 'Eddy current (including bolt-hole), penetrant, ultrasonic and phased array, and visual inspection with a borescope, on airframe and component work.' },
    { q: 'Does hangar simulator time count as aviation NDI experience?', a: 'No. The FAA advisory circular on NDI personnel excludes classroom and laboratory training from experience. Simulator time is training.' },
    { q: 'Does simulator training improve probability of detection?', a: 'That has not been measured yet. The platform is built on mechanisms that simulation research in medicine and aviation supports, but no NDT study has linked simulator training to field probability of detection, and a controlled evaluation is proposed.' },
    { q: 'Can the hangar be used for refresher practice?', a: 'Yes. Run the job at the independent level, with only the work order shown, before a real inspection you have not done for a while.' },
  ],
  next: [
    ['/practical-ndt/eddy-current-simulator', 'Eddy current simulator'],
    ['/practical-ndt/penetrant-testing-simulator', 'Penetrant testing simulator'],
    ['/practical-ndt/visual-testing-simulator', 'Visual testing simulator'],
    ['/aviation-ndt-training', 'Aviation NDT training'],
    ['/aerospace-ndt-training', 'Aerospace NDT training'],
  ],
  demoSubject: 'Practical NDT demo: aircraft hangar',
  demoLabel: 'Request an aircraft hangar demo',
  teaches: ['Airframe eddy current and bolt-hole inspection', 'Component penetrant inspection', 'Visual and borescope inspection', 'Refresher practice before a job'],
};

/** All pages, method pages first (order = hub grids, sitemap order). */
export const PAGES = [UT, PAUT, TOFD, RT, MT, PT, VT, ET, LAB, WELD, PLANT, TANK, HX, AVIATION];
export const METHOD_PAGES = PAGES.filter((p) => p.kind === 'method');
export const WORKPLACE_PAGES = PAGES.filter((p) => p.kind === 'workplace');
export const pagePath = (p) => `${SIM_BASE}${p.slug}`;
export const PAGE_BY_SLUG = Object.fromEntries(PAGES.map((p) => [p.slug, p]));
export const SIM_PATHS = PAGES.map(pagePath);
if (PAGES.map((p) => p.slug).join() !== PRACTICAL_SIM_SLUGS.join()) {
  throw new Error('practical-ndt-simulators: PAGES and PRACTICAL_SIM_SLUGS (src/data/practical-ndt-simulator-slugs.mjs) differ');
}

/* ═════════════════════════ HUB AND CITY LINK BLOCKS ═════════════════════════ */

export const HUB = {
  practiseNow: { lead: 'Practise now', href: ASCAN_PATH, label: 'free ultrasonic A-scan simulator', tail: 'in your browser, no sign-up' },
  // 2026-10-18 (traffic): replaces the hand-written "Why Hands-On Practice Is the Bottleneck" copy in
  // both layers (its "unlimited, ever-growing library" overstated a 473-job catalogue). Evidence as the
  // white paper states it (§2.1, refs 1-2), attempt checking as §3-4 describe it.
  evidence: {
    h2: 'Why practice is the bottleneck: the evidence',
    paras: [
      'Practical skill is the hardest part of NDT qualification to deliver. Every repetition needs a flawed specimen, a working instrument and an instructor’s time, and a rare defect geometry may turn up once a year on a real job.',
      'Reliability research keeps finding that the person doing the inspection is the largest source of variation. MIL-HDBK-1823A, the US Department of Defense handbook on the reliability of NDE systems, states that “in many applications the human conducting the inspection is the most significant variable in the process” (MIL-HDBK-1823A, 2009). In the UK HSE PANI 3 programme, 40 operators inspecting the same welded test pieces achieved average detection frequencies of 58% to 67% per test piece (HSE Research Report RR617, 2008).',
      'Practical NDT was built so that a technician can repeat complete, procedure-driven inspections, with every attempt recorded.',
    ],
  },
  checked: {
    h2: 'How an attempt is checked',
    paras: [
      'Every practical follows the same twelve-step procedure, from the work order and confirming that specimen, material and method agree, through calibration on the reference, the examination and a data-quality review, to the post-check, the training report and the debrief. A read-only procedure evaluator credits only recorded evidence and withdraws credit for a step that would invalidate a real inspection, such as an unverified calibration or incomplete coverage.',
      'Interpretation is reviewed by the instructor, not scored by the software. Examination specimens carry unidentified reflectors whose key the instructor holds, and the learner record shows the settings, coverage and repeated checks behind each attempt.',
    ],
    levelsIntro: 'Each job runs at three levels of assistance, from guided to independent, so the same job serves first practice, building fluency and rehearsal before an examination:',
    levels: [
      ['Guided', 'the instruction, the expected result and the recovery for each step'],
      ['Coached', 'the instruction and the recovery; the expected result is hidden'],
      ['Independent', 'the work order only'],
    ],
  },
  // The stale crawler sentence ("5 workplace environments, 12 NDT methods and 33 guided lessons")
  // is replaced with this one; React reads the same CATALOGUE for its stat row.
  statsSentence: `Practical NDT currently offers ${CATALOGUE.workplaces} workplaces, ${CATALOGUE.methodFamilies} method families and ${CATALOGUE.lessons} practical lessons, from which the catalogue generates ${CATALOGUE.jobs} jobs.`,
  methodGrid: {
    h2: 'Practise by method',
    intro: `Twelve method families and ${CATALOGUE.jobs} catalogued jobs. Each core method has its own simulator page; the specialist techniques (IRIS, MFL, guided wave and PMI) are covered on the workplace pages where they run.`,
  },
  workplaceGrid: {
    h2: 'Practise by workplace',
    intro: 'Twelve workplaces: ten in the shared catalogue and two dedicated installations, the storage tank and the heat exchanger. Six have their own page.',
    others: 'Also in the catalogue: a cross-country pipeline, an offshore wind installation, a superyacht, a merchant vessel, a satellite assembly hall and a space propulsion facility. Ask for their job lists in a demo.',
  },
  canCannot: {
    h2: 'What an NDT simulator can and cannot do',
    intro: 'A simulator makes practice abundant, recorded and consistent. It does not turn a screen into a flaw detector.',
    canHeading: 'What it can do',
    can: [
      'Repeat a complete, procedure-driven inspection as often as needed, at any hour, without booking a specimen or an instrument.',
      'Refuse to credit the procedural errors behind many site findings: an unverified calibration, incomplete coverage, a scan that is too fast, a single field direction, a skipped post-check.',
      'Keep a learner record of every attempt, with settings, calibration values, coverage and observations, for a focused instructor debrief.',
      'Let a technician rehearse a rarely used technique before mobilising for the job.',
    ],
    cannotHeading: 'What it cannot do',
    cannot: [
      'Reproduce the feel of couplant and probe pressure, rough or curved surfaces, real electronic noise, heat, poor light, awkward access or the weight of PPE.',
      'Replace real specimens for interpreting real signals from real flaws, or hands-on practice on real instruments.',
      'Act as a validated engineering tool: its signal models are analytical teaching approximations and its training report does not evaluate code acceptance.',
      'Stand in for experience hours or the practical examination: simulator time is recorded as training, not experience.',
    ],
  },
};

/** One shared block on every /practical-ndt-{city} page and practical geo hub (both layers). */
export const CITY_BLOCK = {
  h2: 'Practise by method or by workplace',
  p: 'Each Practical NDT method and workplace has its own national page: what you practise, what the simulator computes and what it cannot teach. Practical NDT is delivered online, so the same pages apply wherever your team works.',
  methods: METHOD_PAGES.map((p) => [pagePath(p), p.crumb]),
  workplaces: WORKPLACE_PAGES.map((p) => [pagePath(p), p.crumb]),
  practiseNow: [ASCAN_PATH, 'Free ultrasonic A-scan simulator'],
};

/* ═════════════════════════════ SHARED RENDER HELPERS ═════════════════════════════ */

/** Split text into text and link tokens: [label](/path). Both layers render from this. */
export function tokens(s) {
  const out = [];
  let last = 0;
  for (const m of String(s).matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
    if (m.index > last) out.push({ t: 'text', v: s.slice(last, m.index) });
    out.push({ t: 'link', href: m[2], label: m[1] });
    last = m.index + m[0].length;
  }
  if (last < String(s).length) out.push({ t: 'text', v: String(s).slice(last) });
  return out;
}
export const plain = (s) => String(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');

/** Fill {l1t} {l2t} {l1e} {l2e} from snt-tc-1a-hours.json (passed in, so Vite and Node share it). */
export function resolveBlock(block, page, hours) {
  if (!block.hours) return block;
  const code = page.hoursCode || 'UT';
  const c = hours && hours.classroom && hours.classroom[code];
  const e = hours && hours.ojt && hours.ojt[code];
  if (!c || !e) throw new Error(`practical-ndt-simulators: no SNT-TC-1A hours for ${code}`);
  const text = block.hours.replace(/\{l1t\}/g, c[0]).replace(/\{l2t\}/g, c[1]).replace(/\{l1e\}/g, e[0]).replace(/\{l2e\}/g, e[1]);
  if (/\{l[12][te]\}/.test(text)) throw new Error(`practical-ndt-simulators: unresolved hours placeholder on ${page.slug}`);
  return { p: text };
}

const UT_FAMILY = new Set(['UT', 'PAUT', 'TOFD']);

/** Everything a page renders, resolved. */
export function pageModel(page, hours) {
  const path = pagePath(page);
  const demo = [demoHref(page.demoSubject), page.demoLabel];
  const links = [...page.next];
  for (const extra of [[PRACTICE_HUB_PATH, 'All NDT practice tests'], [HUB_PATH, 'Practical NDT overview'], demo]) {
    if (!links.some(([href]) => href === extra[0])) links.push(extra);
  }
  return {
    ...page,
    path,
    canonical: `${SITE}${path}`,
    sections: page.sections.map((s) => ({ ...s, body: s.body.map((b) => resolveBlock(b, page, hours)) })),
    demo,
    practise: page.kind === 'method' && UT_FAMILY.has(page.code) ? [ASCAN_PATH, 'Practise now: free A-scan simulator'] : null,
    links,
    linksHeading: 'Next steps',
    breadcrumbs: [['/', 'Home'], [HUB_PATH, 'Practical NDT'], [path, page.crumb]],
    closer: SHARED_CLOSER,
  };
}

/** 2026-10-18 (traffic): LearningResource for the /practical-ndt hub, beside its SoftwareApplication (both layers). */
export function hubLearningResource() {
  return {
    '@type': 'LearningResource',
    '@id': `${SITE}${HUB_PATH}#learning-resource`,
    name: 'Atlantis Practical NDT simulator',
    url: `${SITE}${HUB_PATH}`,
    inLanguage: 'en',
    learningResourceType: 'Simulation',
    educationalLevel: ['Beginner', 'Intermediate', 'Advanced'],
    educationalUse: 'Practical NDT training',
    teaches: METHOD_FAMILIES.map((f) => `${f.name} (${f.code})`),
    audience: { '@type': 'EducationalAudience', educationalRole: 'NDT trainees, technicians, instructors and training managers' },
    provider: { '@id': `${SITE}/#organization` },
  };
}

/** WebPage + LearningResource (no Offer, no rating), BreadcrumbList, FAQPage from the visible FAQ. */
export function pageSchema(model) {
  const url = model.canonical;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'LearningResource'],
        '@id': `${url}#page`,
        url,
        name: model.h1,
        description: model.description,
        inLanguage: 'en',
        learningResourceType: model.kind === 'method' ? 'Simulator method guide' : 'Simulator workplace guide',
        educationalUse: 'Practical NDT training',
        teaches: model.teaches,
        audience: { '@type': 'EducationalAudience', educationalRole: 'NDT trainees, technicians, instructors and training managers' },
        about: {
          '@type': 'SoftwareApplication',
          name: 'Atlantis Practical NDT',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web browser',
          url: `${SITE}${HUB_PATH}`,
        },
        publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: model.breadcrumbs.map(([href, name], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${href}` })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: model.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
      },
    ],
  };
}
