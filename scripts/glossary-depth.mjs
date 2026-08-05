/**
 * Glossary depth — 2026-08-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 * The 218 glossary pages earn 9,541 impressions per 90 days and 33 clicks. The
 * definitions behind them have a median length of 37 words, so the rendered
 * pages come out around 500 words, most of which is navigation and related-term
 * boilerplate. Google's treatment splits cleanly along that line:
 *
 *   - terms where we say something specific sit at position 6–17
 *     (flat-bottom-hole p6, lack-of-penetration p6, cswip p8, astm-e165 p7)
 *   - terms where we only restate the name sit at position 40–78
 *     (ultrasonic-testing p64, eddy-current p72, hydrogen-embrittlement p78)
 *
 * A one-line definition cannot outrank a standards body or a textbook. Depth is
 * the only lever, and it has to be real depth — the noindex similarity gate in
 * noindex-recovery.mjs will (correctly) suppress anything that is a template
 * with a term swapped in.
 *
 * HOW IT WORKS
 * Per CLAUDE.md 20.7, knowledge lives in a map, not in per-page copy. TERM_FACTS
 * below carries the specifics for a term; SECTIONS composes them into prose
 * shaped by the term's category, because what a reader needs to know about a
 * defect is not what they need to know about a standard.
 *
 * A term with no TERM_FACTS entry is left alone rather than padded. Padding is
 * what produced the position-60 pages in the first place.
 *
 * Rules honoured: no prices anywhere (CLAUDE.md 18); FAQ schema is only emitted
 * for Q&A actually rendered on the page (20.8).
 */

import { TERM_FACTS_TAIL } from './glossary-depth-tail.mjs';

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Per-term knowledge ────────────────────────────────────────────────────────
 * Fields are optional; only what is true for the term is filled in.
 *   principle  — what is physically or procedurally going on
 *   detects    — what it finds, stated concretely
 *   misses     — what it does NOT find. This is the field readers search for and
 *                the one competitors leave out.
 *   practice   — how it is actually done on site
 *   codes      — governing documents and what each contributes
 *   pitfall    — the mistake that costs people a re-shoot, a rejection or a call
 *   faq        — [{q,a}] rendered visibly; schema is derived from these
 */
export const TERM_FACTS = {
  /* ── methods ─────────────────────────────────────────────────────────────── */
  'phased-array-ultrasonic-testing-paut': {
    principle:
      'A phased array probe carries many small piezoelectric elements in one housing. Firing them on individually calculated delays steers and focuses the beam electronically, so a single probe placed in one position can sweep a range of angles or march a focal spot through the thickness without the operator moving anything.',
    detects:
      'Planar flaws in welds — lack of fusion, lack of penetration, cracking — with the sectorial scan showing where in the cross-section the reflector sits rather than only that something reflected. Corrosion mapping and thickness profiling benefit from the same positional record.',
    misses:
      'Flaws whose orientation presents no usable reflecting surface to any angle in the sweep still return little. Sweeping a range of angles widens the odds, it does not abolish the geometry: a tight, favourably-oriented crack in a coarse-grained austenitic weld can still hide. Near-surface resolution remains limited by the dead zone and the wedge, which is why a complementary surface method is usually specified alongside.',
    practice:
      'Setup is where PAUT is won or lost: wedge selection, element count and aperture, focal law calculation, velocity and wedge-delay calibration, then sensitivity set on a block that represents the geometry and material being examined. Encoded scanning adds a position axis so the data can be re-examined later, which is the difference between an inspection you can defend and one you cannot.',
    codes:
      'ASME Section V Article 4 with its mandatory appendices governs the technique in the ASME world; ISO 13588 covers PAUT of welds in the ISO world; ISO 19285 addresses acceptance for phased array weld testing. Acceptance criteria come from the referencing construction code, not from Article 4 itself.',
    pitfall:
      'Treating the sectorial scan image as self-evident. The S-scan is a reconstruction built from the focal laws that were programmed; if the wedge delay or velocity is wrong, the image is confidently wrong in a way that looks entirely plausible. Verifying the setup on a block with known reflectors before the first weld is not optional.',
    faq: [
      { q: 'Is PAUT better than conventional UT?', a: 'It is better at coverage, at recording what it saw, and at examining geometry that would need several conventional probes. It is not a different physics — the same orientation limits and the same material attenuation apply. On a simple thickness check, conventional UT is faster and no less valid.' },
      { q: 'Does PAUT replace radiography?', a: 'For thick-section weld examination many codes now allow it as an alternative, and it detects planar flaws that radiography can miss. It does not produce the same kind of image, so where a specification demands a radiograph or an owner wants film-equivalent records, the substitution has to be agreed rather than assumed.' },
    ],
  },
  'ultrasonic-testing': {
    principle:
      'A transducer injects a high-frequency sound pulse into the part and listens for what comes back. Sound reflects at any interface where acoustic impedance changes — the back wall, a lamination, a crack face — and the time of flight converts to distance once velocity in the material is known.',
    detects:
      'Internal discontinuities through thickness, remaining wall in corroded components, laminations in plate, and — with angle beams — flaws in welds that a straight beam would never reach. It is the method of choice when the flaw is buried rather than surface-breaking.',
    misses:
      'Anything the beam does not strike at a useful angle. A planar flaw lying parallel to the beam returns almost nothing. Very near-surface defects sit inside the dead zone. Coarse or anisotropic structures — austenitic weld metal, some castings — scatter the beam badly enough that sensitivity collapses. Surface condition and couplant quality quietly govern whether any of it works.',
    practice:
      'Velocity and probe delay are established on a reference block, sensitivity is set against a reflector representing the acceptance level, and transfer correction accounts for the difference between block and component surface. Readings are meaningless without a record of how the instrument was set when they were taken.',
    codes:
      'ASME Section V Article 4 covers ultrasonic examination of welds and Article 5 covers thickness measurement; ISO 17640 addresses weld testing with defined examination levels; API 570 and API 653 govern how the resulting thickness data feeds corrosion rate and remaining life.',
    pitfall:
      'Reporting a thickness to two decimal places from an instrument calibrated on a different material or at a different temperature. Velocity varies with material and with temperature, and an uncorrected reading carries an error far larger than the precision implied by the digits.',
    faq: [
      { q: 'What is the smallest flaw ultrasonic testing can find?', a: 'There is no single answer, because detectability depends on flaw orientation, the surface it presents to the beam, material attenuation, frequency and the sensitivity the procedure sets. A procedure states the reference reflector it is calibrated against — that, not a universal number, is the honest statement of what it will find.' },
      { q: 'Why do two technicians get different thickness readings on the same spot?', a: 'Usually couplant, surface condition, probe pressure, or calibration on a different velocity. Repeatability comes from the procedure being specific about all four, and from re-verifying calibration during the shift rather than only at the start.' },
    ],
  },
  'eddy-current-testing': {
    principle:
      'An alternating current in a coil induces circulating currents in a conductive part. Anything that disturbs those currents — a crack, a change in conductivity, a change in the gap between coil and surface — reflects back as a change in coil impedance, which is displayed as a movement in the impedance plane.',
    detects:
      'Surface and near-surface cracking in conductive materials, including through thin non-conductive coatings, and it does so without couplant. In tubing, bobbin and array probes find wall loss, pitting and cracking at production speed. Conductivity and coating-thickness measurement use the same physics.',
    misses:
      'Anything deep. Penetration falls off exponentially with depth, and faster as frequency, conductivity or permeability rise, so eddy current is a surface and near-surface method whatever the probe. Ferromagnetic materials complicate it further because permeability variation swamps the flaw signal unless the material is saturated.',
    practice:
      'Frequency is chosen for the depth of interest, the instrument is nulled on sound material, and the phase rotation is set on a reference standard with known artificial defects so that lift-off moves along a known direction and flaw signals separate from it. Reading the impedance plane is the skill; the equipment only presents it.',
    codes:
      'ASME Section V Article 8 covers eddy current examination; ISO 15548 addresses equipment characterisation; ASME Section V Article 26 and the various tubing appendices cover heat-exchanger tube examination in service.',
    pitfall:
      'Mistaking lift-off for a defect, or worse, phasing lift-off out so aggressively that a genuine shallow flaw goes with it. The reference standard exists so the two are separated deliberately rather than by eye.',
    faq: [
      { q: 'Can eddy current testing be used on steel?', a: 'Yes, but with care. Carbon steel is ferromagnetic, and permeability variation produces signals far larger than most flaws. Magnetic saturation probes or alternatives such as magnetic flux leakage are usually specified instead, depending on what is being looked for.' },
      { q: 'Does paint have to be removed first?', a: 'Usually not, which is one of the method\'s real advantages. The coating simply adds lift-off, and provided it is reasonably uniform and accounted for during setup, examination proceeds through it. Thick or irregular coatings erode sensitivity, and at some point removal becomes the honest option.' },
    ],
  },
  'radiographic-testing': {
    principle:
      'Penetrating radiation passes through the component and is differentially absorbed on the way. What reaches the film or detector is a shadow image in which anything less dense than surrounding material — a void, a slag inclusion, missing weld metal — appears darker.',
    detects:
      'Volumetric flaws with excellent clarity: porosity, slag, incomplete penetration seen along the beam, and geometry such as root condition. It yields a permanent image a third party can re-read years later, which is why owners and insurers still ask for it.',
    misses:
      'Tight planar flaws lying across the beam. A crack presenting a fraction of a millimetre of missing material along the radiation path may produce no discernible density change, and lack of fusion on a bevel face frequently escapes. This is the reason ultrasonic methods are specified alongside radiography for critical thick-section welds rather than instead of it.',
    practice:
      'Technique selection sets source, energy, geometry and exposure; an image quality indicator placed on the source side proves sensitivity was actually achieved. Density or grey-level checks confirm the image is within the range where the eye can discriminate. Without the IQI, an image proves nothing about its own adequacy.',
    codes:
      'ASME Section V Article 2 governs radiographic examination and defines IQI selection and placement; ISO 17636 covers radiographic testing of welds; API 1104 addresses pipeline girth welds with its own acceptance criteria.',
    pitfall:
      'Accepting an image whose IQI hole or wire is not visible. That is not a marginal result — it is direct evidence that the required sensitivity was not reached, and any interpretation drawn from that image is unsupported.',
    faq: [
      { q: 'Why is a weld radiograph accepted by one code and rejected by another?', a: 'Because acceptance criteria live in the construction code, not in the examination standard. ASME Section V tells you how to take the radiograph; ASME Section VIII, B31.3 or API 1104 tells you what is acceptable in the image. The same film can pass under one and fail under another.' },
      { q: 'Is digital radiography accepted in place of film?', a: 'Increasingly yes, with conditions. Codes have added requirements for spatial resolution, contrast and archiving, because a digital image can be processed in ways film cannot. Where a specification predates those provisions, substitution needs written agreement.' },
    ],
  },
  'magnetic-particle-testing': {
    principle:
      'Magnetising a ferromagnetic component creates flux within it. Where a discontinuity interrupts that flux near the surface, it leaks out and forms local poles; fine magnetic particles applied to the surface are drawn to the leakage and pile up, making an indication far wider than the flaw itself and therefore visible.',
    detects:
      'Surface-breaking and slightly subsurface discontinuities in ferromagnetic materials — cracks, laps, seams — including flaws too tight to see with the unaided eye. Sensitivity to surface cracking is excellent and the method is quick.',
    misses:
      'Everything in non-ferromagnetic material: austenitic stainless steel, aluminium, copper, titanium are all outside its scope. Flaws lying parallel to the flux direction produce little leakage, which is why examination is performed in two roughly perpendicular directions. Depth capability is marginal beyond the immediate subsurface.',
    practice:
      'Field direction and adequacy matter more than particle choice. Field strength is verified — by a Hall probe, by an artificial flaw shim, or by a pie gauge depending on what the procedure calls for — and examination is repeated in a second direction. Demagnetisation follows where residual magnetism would interfere with later machining, welding or service.',
    codes:
      'ASME Section V Article 7 covers magnetic particle examination; ASTM E709 is the standard guide; ASTM E1444 covers the process; ISO 9934 is the ISO series, with acceptance again coming from the referencing construction code.',
    pitfall:
      'Examining in one direction only. A single magnetising shot finds flaws transverse to the flux and can miss a longitudinal crack entirely, which is why every serious procedure requires two directions and why auditors check for evidence that both were performed.',
    faq: [
      { q: 'Why does magnetic particle testing need two directions?', a: 'Flux leakage is strongest where a flaw lies across the field and weakest where it lies along it. One magnetising direction therefore has a blind orientation. Examining again at roughly ninety degrees covers what the first pass could not.' },
      { q: 'Does the surface need to be bare metal?', a: 'Not necessarily bare, but coatings reduce sensitivity because the particles sit further from the leakage field. Codes place limits on coating thickness and generally require it to be demonstrated that the coating does not impair detection, often by using a shim with a known artificial flaw.' },
    ],
  },
  'visual-testing': {
    principle:
      'Direct or aided observation of a surface under controlled conditions of light, angle and distance. It is the oldest method and the only one applied to essentially every component, usually before any other examination is considered.',
    detects:
      'Surface condition of every kind — weld profile, undercut, overlap, arc strikes, misalignment, corrosion, mechanical damage, coating failure, leakage evidence — plus everything that determines whether other methods can even be applied.',
    misses:
      'Anything beneath the surface, and anything the eye cannot resolve at the specified distance and lighting. Tight cracks may be entirely invisible without a surface method to open them up to view.',
    practice:
      'Codes make visual examination a measurable activity rather than a glance: minimum illumination at the surface, maximum viewing distance, maximum angle from perpendicular, and demonstrated visual acuity of the examiner, re-tested at defined intervals.',
    codes:
      'ASME Section V Article 9 covers visual examination; AWS D1.1 sets visual acceptance criteria for structural welds; API 653 and API 510 define visual requirements in tank and vessel inspection.',
    pitfall:
      'Treating it as the method that needs no procedure. Visual examination fails audits more often than any other method precisely because illumination, distance and acuity records are missing — the requirements are explicit and easy to evidence, which is why their absence is noticed.',
    faq: [
      { q: 'Does visual testing require certification?', a: 'Under SNT-TC-1A based programmes it is a method like any other, with training, experience and examination requirements, plus a documented vision test — typically near-vision acuity and colour differentiation — repeated at defined intervals.' },
    ],
  },
  'leak-testing': {
    principle:
      'A pressure differential is established across a boundary and the passage of a tracer — air, a bubble-forming solution, halogen, helium — is detected on the low-pressure side. Sensitivity spans many orders of magnitude depending on the technique chosen.',
    detects:
      'Through-wall breaches, whatever their cause. It answers the question of containment directly, where every other method answers it by inference from wall condition.',
    misses:
      'Anything that is not yet through-wall. A crack ninety percent through the thickness leaks nothing and passes a leak test, which is why leak testing complements rather than replaces volumetric and surface examination.',
    practice:
      'Technique selection follows the sensitivity required: bubble testing for gross leakage, pressure change for closed systems, halogen or helium mass spectrometry where small rates matter. System cleanliness, temperature stability and hold time govern whether a pressure-change result means anything at all.',
    codes:
      'ASME Section V Article 10 covers leak testing and its appendices define the individual techniques; ASME Section VIII references it for pressure boundary acceptance.',
    pitfall:
      'Reading a pressure drop as a leak without correcting for temperature. A modest ambient swing moves system pressure enough to imitate a leak, or to mask one, on any test whose hold time is short relative to the thermal time constant.',
    faq: [
      { q: 'Is a hydrostatic test a leak test?', a: 'It demonstrates strength and gross tightness, but it is not a sensitive leak test. Water is a poor tracer at small leak rates and the test proves the boundary held at pressure — a different and coarser question than whether it leaks.' },
    ],
  },
  'acoustic-emission': {
    principle:
      'Materials under stress release transient elastic waves as damage grows — crack extension, fibre breakage, plastic deformation, leakage-driven turbulence. Sensors on the surface pick up those bursts, and arrival-time differences between sensors locate the source.',
    detects:
      'Active, growing damage across a whole structure at once, while it is loaded. That global-and-live quality is its distinguishing feature: it listens to the entire vessel rather than examining one square metre at a time.',
    misses:
      'Damage that is not growing. A large, stable, benign flaw is silent, and acoustic emission will not find it. The method identifies where something is happening, and follow-up examination by another method is then required to characterise what was heard.',
    practice:
      'Sensor coupling and layout determine location accuracy; background noise from flow, rain, machinery and fretting must be characterised and rejected or the data is uninterpretable. Loading must be controlled, since emission is a response to stress change rather than to stress.',
    codes:
      'ASME Section V Article 11 covers acoustic emission examination of fibre-reinforced vessels and Article 12 covers metallic vessels; ASTM E569 and ASTM E1139 address the practice more broadly.',
    pitfall:
      'Interpreting hit counts as damage severity without source location and waveform discrimination. Noise generates hits abundantly; a clean, well-located cluster of high-energy events means something entirely different from a scatter of low-amplitude ones.',
  },
  'automated-ultrasonic-testing-aut': {
    principle:
      'Ultrasonic examination performed with mechanised probe motion and encoded position, so every A-scan is stored against the coordinate where it was captured rather than being watched live and discarded.',
    detects:
      'The same flaws as manual ultrasonics, but with coverage that can be demonstrated afterwards and data that can be re-analysed without returning to site. Girth weld inspection and corrosion mapping are its established uses.',
    misses:
      'Nothing that manual UT would catch by physics — the limits of orientation, attenuation and near-surface resolution are unchanged. What changes is repeatability and evidence, not detection capability.',
    practice:
      'Scanner tracking, encoder calibration and consistent couplant delivery are the practical constraints. Zone discrimination setups for girth welds are built around the weld bevel geometry, so a change in bevel invalidates the setup.',
    codes:
      'ASME Section V Article 4 with the relevant appendices; ISO 13588 for phased array; API 1104 Annex on ultrasonic examination for pipeline girth welds where mechanised UT substitutes for radiography.',
    pitfall:
      'Assuming an encoded scan proves coverage. It proves where the probe went — coverage of the volume of interest additionally requires the beam angles and focal laws to have interrogated that volume, which is a setup question, not a scanning one.',
  },
  'digital-radiography-dr': {
    principle:
      'Radiation is captured by a digital detector — a flat panel or an array — and converted directly into an image, without film chemistry. The detector\'s response is linear over a much wider exposure range than film, which is why exposure latitude is so much greater.',
    detects:
      'The same volumetric discontinuities as film radiography, with immediate review, adjustable display contrast, and images that can be measured, annotated and archived without degradation.',
    misses:
      'The same tight planar flaws that film misses — the physics of differential absorption is unchanged. Detector unsharpness and pixel pitch set a resolution limit that must be verified rather than assumed.',
    practice:
      'Image quality is proven the same way as with film — an IQI in the image — but additional parameters matter: spatial resolution, signal-to-noise ratio, and detector calibration including bad-pixel maps. Processing must be constrained, since aggressive filtering can create or erase apparent features.',
    codes:
      'ASME Section V Article 2 with the digital appendices; ASTM E2698 for radiographic examination using flat panel detectors; ISO 17636-2 for digital detectors in weld radiography.',
    pitfall:
      'Post-processing an image until an indication looks acceptable. Digital images invite adjustment in a way film does not, so codes require the processing applied to be recorded and constrained, and archives to retain unprocessed data.',
  },
  'computed-radiography-cr': {
    principle:
      'A phosphor imaging plate stores a latent image as trapped electrons; scanning it with a laser releases that energy as light which is digitised. The plate is erasable and reusable, sitting between film and direct digital detectors in workflow terms.',
    detects: 'Volumetric weld and casting discontinuities, with digital handling and reusable plates.',
    misses:
      'Fine detail beyond the scanner\'s spatial resolution and the plate\'s inherent unsharpness, which are typically coarser than a good direct digital detector. Tight planar flaws remain a radiographic weakness regardless of capture medium.',
    practice:
      'Plates must be erased before use and are sensitive to background exposure and scratching; scanner resolution settings must match the required image quality class rather than being left at a default.',
    codes: 'ASME Section V Article 2 digital appendices; ISO 17636-2; ASTM E2033 for computed radiography practice.',
    pitfall:
      'Reusing plates without verifying erasure, leaving ghost images from a previous exposure that can be mistaken for indications or can mask real ones.',
  },
  'real-time-radiography-rtr': {
    principle:
      'Radiographic imaging viewed as it happens, using an image intensifier or digital detector, so the part can be manipulated under the beam and observed from changing angles rather than captured in a single fixed exposure.',
    detects:
      'Volumetric flaws, and — uniquely — behaviour: parts can be rotated to bring a suspected planar flaw into a favourable orientation, and moving components can be observed under the beam.',
    misses:
      'Fine detail, historically, because intensifier resolution trailed film. Modern detectors have narrowed that gap considerably, but the trade of sensitivity against speed remains real.',
    practice:
      'Used heavily for castings and for high-throughput production where the ability to reorient the part interactively is worth more than ultimate sensitivity.',
    codes: 'ASME Section V Article 2; ASTM E1000 as the standard guide for radioscopy.',
    pitfall:
      'Assuming the live image has the same sensitivity as a radiograph of the same part. The IQI requirement applies to radioscopic examination too, and it is the only honest check.',
  },
  'magnetic-flux-leakage-mfl': {
    principle:
      'A ferromagnetic wall is driven near magnetic saturation. Metal loss reduces the cross-section available to carry that flux, so flux is forced out of the wall and into the surrounding space, where sensors detect it. Signal amplitude relates to the volume of metal missing, not to depth alone.',
    detects:
      'Volumetric metal loss — corrosion, pitting, gouging — quickly and over large areas. Tank floors and pipelines are the classic applications, and in-line inspection tools rely on it.',
    misses:
      'Tight planar flaws such as cracks aligned with the flux, which remove almost no metal and therefore leak little. Very gradual general thinning can also under-respond because the flux gradient is what generates the signal.',
    practice:
      'Wall thickness limits apply, since saturation must be achievable; lift-off, scanning speed and coating thickness all modulate signal amplitude and have to be controlled or compensated. Results are usually confirmed by ultrasonic thickness at the indications found.',
    codes:
      'API 653 for tank floor examination; API 1163 for in-line inspection system qualification; ASTM E570 for flux leakage examination of ferromagnetic tubing.',
    pitfall:
      'Reading amplitude as depth. Signal responds to lost volume, so a broad shallow patch and a narrow deep pit can produce comparable amplitudes — which is exactly why MFL screens and ultrasonics confirms.',
  },

  /* ── defects ─────────────────────────────────────────────────────────────── */
  'lack-of-penetration-lop': {
    principle:
      'The weld metal has not reached the root of the joint, leaving the intended fusion face unfilled. It is a geometric shortfall at the root, distinct from lack of fusion on a side wall.',
    detects:
      'Radiography shows it clearly when the beam runs along the unfilled root — a sharp, straight dark line following the joint. Angle-beam ultrasonics gives a strong, consistent corner reflection from the root geometry.',
    misses:
      'It is invisible to surface methods where the root is inaccessible, which describes most single-sided pipe welds. That is precisely why root examination is specified volumetrically.',
    practice:
      'Cause is nearly always procedural rather than accidental: root gap too tight, land too heavy, current too low, or travel speed too high. Fixing the weld without fixing the joint preparation reproduces it on the next joint.',
    codes:
      'ASME Section IX governs the procedure that should have prevented it; acceptance is set by the construction code — ASME Section VIII, B31.3, AWS D1.1 and API 1104 each treat root discontinuities differently, and API 1104 is notably specific about it.',
    pitfall:
      'Confusing it with incomplete fusion in reporting. They have different causes and different code treatments, and a report that uses the terms loosely sends the welding engineer to the wrong parameter.',
    faq: [
      { q: 'Is lack of penetration always rejectable?', a: 'It depends entirely on the referencing code and the service. Some codes reject any root discontinuity in certain service categories; others permit limited amounts against defined length and depth criteria. The examination standard never sets acceptance — the construction code does.' },
    ],
  },
  'hydrogen-induced-cracking-hic': {
    principle:
      'Atomic hydrogen entering the steel — from corrosion in wet sour service, from cathodic protection, or from welding — recombines into molecular hydrogen at internal discontinuities such as elongated inclusions. Molecular hydrogen cannot diffuse back out, so pressure builds and drives planar cracks parallel to the plate surface, which may then step between planes.',
    detects:
      'Ultrasonic examination is the practical method: straight-beam scanning finds the mid-wall planar separations, and time-of-flight or phased array characterises the stepwise linking. It is generally not surface-breaking, so surface methods are of little use.',
    misses:
      'Visual and surface methods find nothing until the damage reaches a surface or causes blistering. Radiography is poor at it because the cracks are tight and lie across the beam in most practical geometries.',
    practice:
      'Susceptibility is governed by steel cleanliness, and HIC-resistant steels are specified for wet sour service on that basis. Where existing equipment is affected, monitoring the extent over time matters more than a single detection.',
    codes:
      'NACE/AMPP TM0284 for HIC resistance testing of plate; NACE MR0175 / ISO 15156 for materials in H2S service; API 571 describes the damage mechanism and where it appears.',
    pitfall:
      'Treating it as ordinary corrosion. Wall thickness readings can be entirely acceptable while the plate is internally laminated by hydrogen damage — thickness is the wrong measurement for this mechanism.',
  },
  'hydrogen-embrittlement': {
    principle:
      'Dissolved atomic hydrogen reduces a metal\'s ductility and its resistance to crack propagation, so a component that would have deformed instead fractures — often well below the stress it was designed for, and often after a delay while hydrogen diffuses to a stress concentration.',
    detects:
      'There is no NDT method that measures embrittlement directly. What is detected is the cracking that results, by magnetic particle or ultrasonic examination depending on location, and often after failure rather than before.',
    misses:
      'The susceptible-but-not-yet-cracked condition, which is the state anyone would actually want to find. This is why it is controlled by process rather than by inspection.',
    practice:
      'Control is preventive: baking after electroplating to drive hydrogen out, low-hydrogen consumables kept dry, preheat and controlled cooling in welding, and limits on cathodic protection potential. High-strength steels are the most vulnerable, and susceptibility rises sharply with hardness.',
    codes:
      'ASTM F1624 and ASTM F519 for susceptibility and process control testing; NACE MR0175 / ISO 15156 for hardness limits in sour service; API 571 for the mechanism in refinery equipment.',
    pitfall:
      'Assuming a delayed failure was a manufacturing defect. Delayed cracking hours or days after load application is characteristic of hydrogen, and looking only for a pre-existing flaw misses the actual cause.',
  },
  'erosion-corrosion': {
    principle:
      'Mechanical removal of the protective film by flowing fluid combines with electrochemical attack of the freshly exposed metal. Neither mechanism alone accounts for the rate; the two together remove metal far faster than either would.',
    detects:
      'Ultrasonic thickness measurement at the locations flow dictates — outer radius of elbows, downstream of orifices and control valves, tube inlets — rather than on a uniform grid, because the damage is localised by hydrodynamics.',
    misses:
      'A grid-based thickness survey that does not include the flow-affected locations will miss it entirely while reporting a comfortable average.',
    practice:
      'The characteristic appearance is directional — grooves, waves, horseshoe-shaped pits undercut in the flow direction. Mitigation is by material selection, flow-path geometry, and velocity limits rather than by coating, which is removed by the same mechanism.',
    codes:
      'API 571 describes the mechanism and its typical locations; API 570 and API 574 drive the CML placement that finds it.',
    pitfall:
      'Placing condition monitoring locations for convenience rather than for mechanism. Erosion-corrosion is precisely the damage that an accessible-locations-only survey is designed to miss.',
  },

  /* ── physics ─────────────────────────────────────────────────────────────── */
  'half-value-layer-hvl': {
    principle:
      'The thickness of a specified material that reduces the intensity of a radiation beam by half. Because attenuation is exponential, each successive HVL halves what remains — two layers give a quarter, ten give roughly a thousandth.',
    practice:
      'It is the working unit of shielding design and barrier calculation, and it is energy-dependent: an HVL quoted for one isotope or one kilovoltage does not transfer to another. Beam hardening means the first HVL of a polychromatic beam is thinner than subsequent ones.',
    codes:
      'Used throughout radiation safety practice; barrier calculations in NCRP and IAEA guidance are built on it, and radiographic site controls derive boundary distances from it.',
    pitfall:
      'Applying an HVL value for the wrong energy or the wrong material. Lead\'s HVL for Ir-192 and for Co-60 differ substantially, and shielding sized on the wrong one is not conservative — it is simply wrong.',
    faq: [
      { q: 'How is half-value layer different from tenth-value layer?', a: 'Same idea, different fraction: TVL reduces intensity to one tenth rather than one half. One TVL is about 3.3 HVLs. Shielding calculations often use TVL because barrier requirements usually span more than an order of magnitude.' },
    ],
  },
  attenuation: {
    principle:
      'The progressive loss of signal amplitude as a wave travels through material. In ultrasonics it comes from absorption, where energy converts to heat, and from scattering at grain boundaries and inclusions; both rise with frequency, and scattering rises sharply once grain size becomes comparable to wavelength.',
    practice:
      'It governs the practical choice of frequency: higher frequency gives better resolution and worse penetration, and the balance is decided by the material. Transfer correction exists because the calibration block and the component rarely attenuate identically, and ignoring the difference biases every amplitude-based assessment.',
    codes:
      'ASME Section V Article 4 requires transfer correction be addressed; ISO 17640 and DGS/AVG sizing approaches build attenuation compensation into the evaluation.',
    pitfall:
      'Calibrating on a fine-grained block and examining a coarse-grained casting or an austenitic weld at the same sensitivity. Real attenuation difference can exceed the acceptance margin, so flaws are under-called with complete confidence.',
  },
  'mode-conversion': {
    principle:
      'When a wave strikes an interface at an angle, part of its energy converts to another wave mode — longitudinal to shear and back — each travelling at its own velocity and refracting at its own angle. It is why angle-beam probes work at all, and why unexpected signals appear where geometry is complex.',
    practice:
      'Wedge angles are chosen to exploit it: beyond the first critical angle only shear survives in the part, which is what gives a clean angle-beam examination. Beyond the second critical angle, surface waves dominate.',
    codes: 'Underpins the angle-beam techniques of ASME Section V Article 4 and ISO 17640.',
    pitfall:
      'Calling a mode-converted signal from a corner or a counterbore a flaw. Geometry produces reproducible, predictable indications, and knowing the component profile is what separates them from real reflectors.',
  },
  'magnetic-flux': {
    principle:
      'The magnetic field passing through a given area. In magnetic particle work, flux flows preferentially through the ferromagnetic component; a discontinuity near the surface constricts the available path and forces flux out of the part, and that leakage is what holds the particles.',
    practice:
      'Adequacy of flux — not merely its presence — is what must be established, and it is verified with a Hall-effect probe, an artificial flaw shim or a pie gauge as the procedure directs. Direction matters as much as magnitude.',
    codes: 'ASME Section V Article 7; ASTM E709; ISO 9934-1.',
    pitfall:
      'Relying on a pie gauge alone as proof of field adequacy. It indicates direction well and magnitude poorly, and several standards limit it to the former.',
  },
  'residual-magnetism': {
    principle:
      'The magnetisation left in a ferromagnetic component after the applied field is removed, determined by the material\'s coercivity and by how it was magnetised.',
    practice:
      'It is useful in the residual technique of magnetic particle testing, and a nuisance almost everywhere else: it deflects arc welding, attracts swarf into machined surfaces and bearings, and disturbs instrumentation. Demagnetisation is specified where any of those follow.',
    codes: 'ASME Section V Article 7 addresses demagnetisation requirements; ISO 9934-1 covers the practice.',
    pitfall:
      'Skipping demagnetisation before welding. Arc blow from residual magnetism produces weld defects that are then attributed to the welder rather than to the inspection that preceded them.',
  },
  'longitudinal-wave': {
    principle:
      'A wave whose particle motion is along the direction of travel — compression and rarefaction. It is the fastest mode in a given material and the only one that propagates in liquids and gases, since they cannot sustain shear.',
    practice:
      'The straight-beam workhorse: thickness measurement, lamination detection and corrosion mapping all use it. Its higher velocity means that for a given frequency the wavelength is longer than shear, so resolution is coarser.',
    codes: 'ASME Section V Article 5 for thickness measurement; Article 4 for straight-beam weld examination.',
    pitfall:
      'Using a longitudinal velocity to size a shear-wave path or vice versa. The velocities differ by roughly a factor of two in steel, so the resulting depth is wrong by about the same factor.',
  },
  'surface-wave': {
    principle:
      'A wave that travels along a free surface with elliptical particle motion, its energy confined to roughly one wavelength of depth. Generated beyond the second critical angle in a wedge.',
    practice:
      'Highly sensitive to surface-breaking cracks and able to follow gentle contours, which suits it to blades, shafts and fillet regions. That same surface confinement makes it exquisitely sensitive to couplant, dirt and hand contact along its path.',
    codes: 'Addressed within ASME Section V Article 4 technique options.',
    pitfall:
      'Letting couplant or a finger touch the surface between probe and target — the wave is absorbed there, and the resulting loss of signal can be mistaken for an absence of flaws.',
  },

  /* ── equipment ───────────────────────────────────────────────────────────── */
  'flat-bottom-hole-fbh': {
    principle:
      'A machined hole with a flat end, drilled to a known depth so that its flat bottom presents a reflector of known area perpendicular to the beam. Because area and depth are both known, it provides a reproducible amplitude reference.',
    practice:
      'It underpins distance-amplitude correction and DGS/AVG evaluation, where flaw response is expressed as an equivalent flat-bottom-hole diameter. It is a reference, not a claim that real flaws look like drilled holes.',
    codes:
      'ASTM E127 and ASTM E428 cover reference block manufacture; ASME Section V Article 4 and its appendices define their use in calibration.',
    pitfall:
      'Reading equivalent-reflector-size as physical flaw size. A rough, irregular, or tilted real flaw scatters energy that a machined flat surface returns, so equivalent size systematically understates it.',
    faq: [
      { q: 'Why are flat-bottom holes used instead of notches?', a: 'They serve different purposes. Flat-bottom holes give an area-based amplitude reference for volumetric evaluation and DGS sizing; notches simulate surface-breaking planar flaws for angle-beam calibration. Codes specify which is required for which technique.' },
    ],
  },
  'calibration-block': {
    principle:
      'A block of defined material, geometry and surface condition containing reflectors of known size and position, against which instrument and probe response is established before examination.',
    practice:
      'Two distinct jobs get confused: system calibration blocks such as IIW establish velocity, probe index, beam angle and resolution; reference blocks containing side-drilled or flat-bottom holes establish sensitivity and distance-amplitude correction. Acoustic properties of the block should represent the component, which is why material and heat treatment are specified rather than merely "steel".',
    codes:
      'ASME Section V Article 4 mandatory appendices define block requirements; ISO 2400 and ISO 7963 cover the V1 and V2 blocks; ASTM E164 addresses reference blocks for weld examination.',
    pitfall:
      'Calibrating on a block whose surface finish and curvature differ markedly from the component and applying no transfer correction. The sensitivity then applies to the block, not to the part.',
  },
  couplant: {
    principle:
      'A liquid or gel filling the gap between probe and component so ultrasonic energy can cross. Air is an almost perfect reflector at these impedances, so without couplant essentially nothing enters the part.',
    practice:
      'Choice affects transmission efficiency, and consistency of application affects repeatability more than most technicians credit. Temperature, viscosity and surface roughness all interact; high-temperature work needs specific formulations.',
    codes:
      'ASME Section V Article 4 requires the couplant used in calibration to be the same as in examination; material compatibility limits appear in ASME Section V and in owner specifications.',
    pitfall:
      'Ignoring compatibility. Sulphur and halogen content are restricted on austenitic stainless and nickel alloys because residues promote stress-corrosion cracking — a couplant chosen for grip can damage the component it was used to inspect.',
  },
  'co-60': {
    principle:
      'Cobalt-60, a gamma source with photon energies around 1.17 and 1.33 MeV and a half-life of roughly five and a quarter years. The high energy gives penetration through thick steel that lower-energy sources cannot reach.',
    practice:
      'Chosen for heavy wall sections where iridium cannot deliver adequate density. The penalty is contrast: high energy reduces subject contrast, so sensitivity on thin material is poor and shielding requirements are substantially greater.',
    codes:
      'ASME Section V Article 2 governs its use in radiographic examination and constrains material thickness ranges by source; transport and licensing follow national regulation and IAEA transport provisions.',
    pitfall:
      'Using it on thin sections because it is what is in the camera. Energy must match thickness; an oversized source on thin wall produces a flat, low-contrast image that will not meet IQI requirements.',
  },
  'bobbin-coil': {
    principle:
      'A circumferential eddy current coil that fills the tube bore, sensing the average condition of the full circumference at each axial position as it is pulled through.',
    practice:
      'Fast and effective for volumetric loss — general wall thinning and pitting — in non-ferromagnetic tubing, which is why it is the first pass in heat-exchanger inspection. Circumferentially oriented cracks are poorly detected because they barely disturb the circumferential current path, so array or rotating probes follow up.',
    codes:
      'ASME Section V Article 8 and its tubing appendices; ASTM E243 for seamless copper and copper-alloy tube examination.',
    pitfall:
      'Concluding a bundle is sound from a bobbin pass alone. The technique averages around the circumference, so a short circumferential crack can sit inside an acceptable-looking trace.',
  },
  'butt-weld': {
    principle:
      'A joint between two members lying approximately in the same plane, with weld metal filling a prepared groove between them. It is the configuration most volumetric examination and most acceptance criteria are written around.',
    practice:
      'Preparation geometry drives which flaws are likely and which techniques will find them: bevel angle governs side-wall fusion risk and the angle at which ultrasonic beams strike the fusion face; root configuration governs penetration defects and the geometry signals that examination must distinguish from flaws.',
    codes:
      'ASME Section IX for the welding procedure; ASME Section VIII, B31.3, AWS D1.1 and API 1104 for acceptance depending on the construction code; ASME Section V for the examination itself.',
    pitfall:
      'Applying a technique qualified on one bevel geometry to another. The beam angles that interrogate a thirty-degree bevel do not necessarily interrogate a narrow-gap preparation.',
  },
  'fillet-weld': {
    principle:
      'A weld of approximately triangular cross-section joining two surfaces at an angle, typically a tee, lap or corner joint. Strength derives from throat dimension rather than from leg length, though leg is what gets measured.',
    practice:
      'It is largely outside the reach of useful volumetric examination — geometry makes radiography and conventional angle-beam ultrasonics difficult to interpret — so acceptance leans heavily on visual and surface methods, with profile, leg size, undercut and root fusion being the practical criteria.',
    codes:
      'AWS D1.1 for structural fillet weld acceptance and sizing; ASME Section V Article 9 for the visual examination; ASME Section IX for procedure qualification.',
    pitfall:
      'Accepting leg size as evidence of throat. A convex weld can show correct legs with an inadequate effective throat, and a concave one can meet throat with legs that look undersized.',
  },

  /* ── data ────────────────────────────────────────────────────────────────── */
  mawp: {
    principle:
      'Maximum allowable working pressure — the highest gauge pressure permitted at the top of a vessel in its normal operating position at a designated temperature, based on the weakest component as actually found, including corrosion allowance remaining and the material allowable stress at that temperature.',
    practice:
      'It is recalculated during in-service inspection using measured thickness rather than design thickness, which is what turns a thickness survey into a fitness decision. A falling MAWP is the mechanism by which corrosion becomes an operating limit.',
    codes:
      'ASME Section VIII Division 1 for the design calculation; API 510 for re-rating and for the in-service recalculation; API 579 where damage exceeds what a simple recalculation can address.',
    pitfall:
      'Confusing it with design pressure or with relief valve set pressure. Design pressure is a specification input; MAWP is a computed property of the vessel as built and as currently corroded, and the two diverge over the life of the equipment.',
  },
  'distance-gain-size-dgs': {
    principle:
      'A calibration and sizing approach relating echo amplitude, sound path distance and equivalent reflector size through a family of curves derived for a given probe. It allows flaw response to be expressed as an equivalent disc-shaped reflector diameter without needing a block containing that exact reflector at that exact depth.',
    practice:
      'Probe-specific: the curves depend on element diameter, frequency and beam characteristics, so a DGS diagram belongs to a probe type, not to ultrasonics generally. Attenuation and transfer correction must be applied or equivalent sizes are systematically wrong.',
    codes:
      'EN/ISO 16811 addresses sensitivity setting and range calibration including DGS; ISO 17640 permits it as an evaluation technique.',
    pitfall:
      'Quoting equivalent reflector size as flaw size in a report without saying so. It is a comparison to an idealised disc; a real planar flaw of the same equivalent size is typically larger and more significant.',
  },
  'time-corrected-gain-tcg': {
    principle:
      'Electronic gain that increases with time of flight, compensating for beam spread and attenuation so that an identical reflector produces the same screen amplitude regardless of depth.',
    practice:
      'It flattens the response curve, which makes amplitude directly comparable across the thickness and makes automated evaluation practical. It is built from the same reference reflectors that would otherwise define a DAC curve.',
    codes:
      'ASME Section V Article 4 permits TCG as an alternative to DAC; ISO 16811 covers the setting procedure.',
    pitfall:
      'Applying gain compensation beyond the depth range over which it was established. Extrapolated TCG amplifies noise as readily as signal, and the resulting apparent indications are an artefact of the setup.',
  },
  'l-scan': {
    principle:
      'A linear scan display in phased array work, where the focal law steps the active aperture along the probe at a fixed angle, producing a cross-sectional view along the probe length rather than a fan of angles from one point.',
    practice:
      'Suited to thickness profiling and to examinations where a single angle is appropriate across a width — corrosion mapping and some weld configurations. Distinct from the sectorial S-scan, which sweeps angle from a fixed aperture.',
    codes: 'ASME Section V Article 4 phased array appendices; ISO 13588 display and recording requirements.',
    pitfall:
      'Reporting an L-scan as though it swept angles. Coverage in a linear scan is at one angle only; flaws requiring a different angle are simply outside what that scan interrogated.',
  },

  /* ── procedure ───────────────────────────────────────────────────────────── */
  'dwell-time': {
    principle:
      'The period a penetrant is left on the surface before excess removal, during which capillary action draws it into surface-breaking discontinuities. Tight, shallow flaws need the longest dwell because the capillary driving force is opposed by viscosity.',
    practice:
      'Specified by penetrant type, material and expected discontinuity, and it must not be allowed to dry — a penetrant that dries in place is far harder to remove correctly and produces background that masks indications. Temperature shifts the appropriate dwell substantially.',
    codes:
      'ASME Section V Article 6 sets dwell requirements; ASTM E165 gives the standard practice; ASTM E1417 defines the process requirements including dwell by penetrant sensitivity level.',
    pitfall:
      'Shortening dwell to keep pace with production. It is the single most common cause of missed tight cracks in penetrant testing, and it leaves no trace in the finished examination record unless dwell is recorded.',
    faq: [
      { q: 'What happens if penetrant dwell time is exceeded?', a: 'Within reason, longer dwell is not harmful to detection, but if the penetrant dries on the surface it becomes difficult to remove without also removing what entered the flaws, and background fluorescence or colour rises to the point where indications are masked. Codes therefore set both a minimum and a practical maximum.' },
    ],
  },
  'controlled-area': {
    principle:
      'A defined area around a radiation source where access is restricted and dose rates are managed, with boundaries established by calculation from source activity, distance and shielding, and then confirmed by survey.',
    practice:
      'Boundaries are physically demarcated, posted and monitored; the survey that confirms them is performed with a calibrated instrument and recorded. It is a legal control, not a courtesy.',
    codes:
      'National radiation protection regulation governs it; IAEA Basic Safety Standards inform most national schemes; ASME Section V presumes it as a precondition of radiographic work.',
    pitfall:
      'Setting the boundary from calculation alone. Scatter from nearby structures routinely produces dose rates above what a line-of-sight calculation predicts, which is why survey confirmation is required.',
  },
  'radiation-safety-officer-rso': {
    principle:
      'The individual formally appointed to oversee a radiation protection programme — source control and accounting, dosimetry, surveys, training, incident response and regulatory liaison.',
    practice:
      'The role carries defined authority as well as responsibility, including the authority to stop work. Where that authority is nominal, the appointment does not achieve what the regulation intends.',
    codes:
      'Defined in national licensing regulation; competence expectations are informed by IAEA guidance and, in industrial radiography, by the licensing conditions attached to source possession.',
    pitfall:
      'Appointing an RSO without the standing to halt operations. Regulators examine whether the authority is real, and the appointment is the first thing reviewed after any incident.',
  },

  /* ── asset types ─────────────────────────────────────────────────────────── */
  wellhead: {
    principle:
      'The pressure-containing assembly at surface terminating the casing strings and supporting the tubing, providing the interface between the well and either the production tree or the drilling equipment.',
    practice:
      'Inspection concerns pressure-containing components, load-bearing shoulders and sealing surfaces. Damage mechanisms include erosion at flow-wetted surfaces, sour service cracking where H2S is present, and fatigue at connections subject to vibration or thermal cycling.',
    codes:
      'API 6A for wellhead and christmas tree equipment; API 6D for valves; NACE MR0175 / ISO 15156 where the service is sour; API 570 where associated piping falls under inspection.',
    pitfall:
      'Inspecting the body and neglecting sealing and load shoulders. Those surfaces govern whether the assembly does its job, and they are the ones handling damages.',
  },
  fpso: {
    principle:
      'A floating production, storage and offloading vessel — a ship-shaped or converted hull carrying process facilities, with crude stored in the hull and periodically offloaded to a tanker.',
    practice:
      'Inspection combines marine classification requirements with process plant integrity: hull structure and ballast tanks under class survey, topsides process equipment under pressure equipment regimes, and the turret and mooring under their own. Fatigue is a dominant hull mechanism because the structure is permanently on station in a seaway.',
    codes:
      'Classification society rules govern hull and marine systems; API and ASME codes govern topsides; API 579 supports fitness-for-service where damage is found.',
    pitfall:
      'Treating hull and topsides as separate integrity worlds. Hull deflection affects topsides supports and piping stress, and the interfaces are where problems concentrate.',
  },
  flange: {
    principle:
      'A bolted joint component providing a demountable pressure-tight connection, with sealing achieved by compressing a gasket between mating faces using controlled bolt load.',
    practice:
      'Leakage is usually assembly rather than component: flange face condition, gasket selection, bolt lubrication and tightening sequence govern it. Inspection covers face damage, distortion, corrosion under the gasket seating area and bolt condition.',
    codes:
      'ASME B16.5 and B16.47 for dimensions and ratings; ASME PCC-1 for bolted joint assembly; ASME Section VIII Appendix 2 for flange design.',
    pitfall:
      'Chasing a leaking joint with more torque. Beyond a point, additional load distorts the flange and crushes the gasket, and the joint then cannot seal at any torque until the gasket and faces are addressed.',
  },
  'fired-heater': {
    principle:
      'A direct-fired heat exchanger in which process fluid passes through tubes heated by combustion — the radiant section receiving heat mainly by radiation from the flame, the convection section from flue gas.',
    practice:
      'Tube integrity is the dominant concern: creep from long-term overheating, oxidation and scaling on the fire side, coking on the process side driving tube metal temperature upward. Inspection uses thermography in service, plus dimensional checks for creep swelling and thickness measurement at shutdown.',
    codes:
      'API 530 for tube thickness calculation; API 573 for inspection of fired boilers and heaters; API 571 for the damage mechanisms.',
    pitfall:
      'Judging tube condition from thickness alone. Creep damage swells and eventually ruptures tubes whose wall may still measure acceptably, so diameter growth and metal temperature history matter as much as wall.',
  },

  /* ── standards & certification ───────────────────────────────────────────── */
  cswip: {
    principle:
      'A UK third-party certification scheme operated by TWI Certification covering welding inspection, NDT and related roles, with examination and certification carried out independently of the employer.',
    practice:
      'Third-party certification means the certificate travels with the individual and is verifiable by any employer, which is why it is widely specified in oil and gas and offshore contracting. Welding inspector grades are structured in ascending scope, and NDT certification within the scheme operates under ISO 9712.',
    codes:
      'ISO 9712 for the NDT certification framework; the CSWIP scheme documents for each grade\'s scope, eligibility and renewal requirements.',
    pitfall:
      'Assuming CSWIP and employer-based SNT-TC-1A certification are interchangeable on a contract. They are different models — third party versus employer-certified — and specifications frequently require one specifically.',
    faq: [
      { q: 'Is CSWIP equivalent to AWS CWI?', a: 'They are comparable in standing and both are widely recognised, but they are separate schemes with different syllabuses, examination formats and renewal rules. Which is accepted is a contractual question, and some owners name one explicitly.' },
      { q: 'Does CSWIP expire?', a: 'Yes. Certification runs for a defined period and requires renewal, with evidence of continued relevant activity and, at longer intervals, re-examination. Lapsed certification generally cannot simply be reinstated.' },
    ],
  },
  'iso-9712': {
    principle:
      'The international standard defining qualification and certification of NDT personnel through an independent certification body, specifying training, industrial experience, examination and recertification for Levels 1, 2 and 3 by method and sector.',
    practice:
      'The defining feature is third-party certification: the certification body, not the employer, examines and certifies, so the certificate is portable. Sector and method scope are stated on the certificate, and working outside that scope is outside the certification.',
    codes:
      'ISO 9712 itself; national schemes such as PCN and CSWIP operate under it; ISO 18436 covers condition monitoring personnel in a parallel structure.',
    pitfall:
      'Reading a Level 2 certificate as universal. It is granted per method and per sector, and a certificate in one sector does not authorise work in another.',
  },
  'snt-tc-1a': {
    principle:
      'An ASNT recommended practice — explicitly a guideline, not a standard — that an employer uses as the basis for its own Written Practice governing training, experience, examination and certification of its NDT personnel.',
    practice:
      'Certification is by the employer, against the employer\'s Written Practice. That makes it flexible and makes verification harder: the meaningful question at audit is not whether someone is certified but whether the Written Practice complies and whether the records demonstrate the individual met it.',
    codes:
      'ASNT SNT-TC-1A as the recommended practice; ANSI/ASNT CP-189 as the standard alternative where a standard rather than a guideline is required; NAS 410 in aerospace.',
    pitfall:
      'Citing SNT-TC-1A as though it were a specification. It recommends; the employer\'s Written Practice is the governing document, and auditors ask for that.',
    faq: [
      { q: 'What is the difference between SNT-TC-1A and CP-189?', a: 'SNT-TC-1A is a recommended practice the employer adapts in its Written Practice; CP-189 is a standard with fixed requirements and less latitude. Contracts that want consistency across suppliers tend to specify CP-189 or ISO 9712 rather than SNT-TC-1A.' },
    ],
  },
  pcn: {
    principle:
      'The Personnel Certification in Non-Destructive Testing scheme operated by BINDT in the UK, providing third-party certification under ISO 9712 across methods and industry sectors.',
    practice:
      'Like other ISO 9712 schemes, certification is by method and sector with defined training and experience prerequisites, examination at an approved centre, and periodic renewal and recertification.',
    codes: 'ISO 9712; BINDT PCN scheme documents; EN 4179 / NAS 410 where aerospace applies.',
    pitfall:
      'Assuming automatic recognition across schemes. PCN, CSWIP and other ISO 9712 bodies are mutually comparable but not automatically interchangeable, and acceptance is set by the specification.',
  },
  'astm-e165': {
    principle:
      'The ASTM standard practice for liquid penetrant examination, describing how the examination is performed — surface preparation, penetrant application and dwell, excess removal, developer application and evaluation.',
    practice:
      'It is a practice, so it tells you how to do the examination and not what is acceptable. Acceptance criteria come from the referencing code or specification.',
    codes: 'ASTM E165; ASTM E1417 for process requirements; ASME Section V Article 6 as the code equivalent.',
    pitfall:
      'Quoting it as an acceptance standard in a report. Doing so leaves the acceptance basis undefined, which is a finding at audit.',
  },
  'astm-e1417': {
    principle:
      'The ASTM standard practice specifying requirements for the liquid penetrant process itself — materials, sensitivity levels, process control checks and system performance verification.',
    practice:
      'Where E165 describes the examination, E1417 governs the process that makes it repeatable: daily and periodic system checks, penetrant and developer control, lighting verification and the records that prove them.',
    codes: 'ASTM E1417; ASTM E165; ASTM E1444 as the magnetic particle counterpart.',
    pitfall:
      'Running the examination correctly with no process control records. The examination is then unverifiable after the fact, which is the failure mode audits look for.',
  },
  'astm-e709': {
    principle:
      'The ASTM standard guide for magnetic particle testing, covering magnetisation techniques, particle types, field adequacy verification, examination and demagnetisation.',
    practice:
      'As a guide it presents options and their applicability rather than mandating a single route, which makes it valuable for technique selection and unsuitable as a sole contractual reference.',
    codes: 'ASTM E709; ASTM E1444 for process requirements; ASME Section V Article 7; ISO 9934 series.',
    pitfall:
      'Treating a guide as a specification. Where a contract needs fixed requirements, E1444 or the applicable code article is the appropriate reference.',
  },
  'asme-section-viii': {
    principle:
      'The ASME Boiler and Pressure Vessel Code section governing pressure vessels: Division 1 by rules-based design, Division 2 by alternative rules with more analysis and closer inspection, Division 3 for high pressure.',
    practice:
      'It sets design, materials, fabrication, examination and certification requirements for new construction, and it is the acceptance authority the examination standards defer to. In-service inspection is API 510\'s territory, not Section VIII\'s.',
    codes:
      'ASME Section VIII Divisions 1–3; Section II for materials; Section V for examination methods; Section IX for welding qualification; API 510 for in-service.',
    pitfall:
      'Applying new-construction acceptance criteria to in-service equipment. The two regimes ask different questions, and API 510 with API 579 governs what a corroded vessel may do next.',
  },
  'api-570': {
    principle:
      'The API inspection code for in-service piping systems, covering inspection intervals, thickness monitoring, corrosion rate and remaining life calculation, repair and alteration, and re-rating.',
    practice:
      'Its logic is condition monitoring locations, measured thickness over time, corrosion rate, and an interval derived from remaining life — with the inspector authorised to make judgements the code defines. Piping is classified by service so that effort follows consequence.',
    codes:
      'API 570; API 574 for inspection practices; API 571 for damage mechanisms; API 578 for material verification; API 579 for fitness-for-service; ASME B31.3 for the construction code.',
    pitfall:
      'Computing corrosion rate from two readings taken at nominally the same location by different technicians with different instruments. Measurement scatter can exceed real loss, and the resulting rate — and interval — is then noise.',
  },
  'api-580': {
    principle:
      'The API recommended practice for risk-based inspection, setting out how to combine likelihood of failure with consequence of failure to plan inspection where it reduces risk most.',
    practice:
      'It is the methodology document; API 581 supplies the quantitative approach. Its value lies in directing effort by risk rather than by calendar, and its integrity depends on the damage mechanism assessment underneath it being honest.',
    codes: 'API 580 for the methodology; API 581 for quantitative RBI; API 571 for damage mechanisms; API 510/570/653 for the inspection regimes it modifies.',
    pitfall:
      'Using RBI to justify longer intervals without maintaining the data that supports the assessment. An RBI interval rests on assumptions about mechanism and rate, and it lapses when those stop being verified.',
  },
  'api-650': {
    principle:
      'The API standard for welded steel storage tanks for oil storage, covering design, materials, fabrication, erection and testing of new atmospheric tanks.',
    practice:
      'It governs new construction; API 653 governs inspection, repair, alteration and reconstruction in service. The relationship mirrors Section VIII to API 510.',
    codes: 'API 650 for construction; API 653 for in-service; API 651 for cathodic protection; API 652 for internal linings.',
    pitfall:
      'Repairing an in-service tank to API 650 alone. Reconstruction and repair provisions live in API 653, and the differences matter for settlement, shell evaluation and floor assessment.',
  },
  'api-1104': {
    principle:
      'The API standard for welding of pipelines and related facilities, containing both welding procedure and welder qualification requirements and its own radiographic and ultrasonic acceptance criteria.',
    practice:
      'Distinctive in that acceptance criteria live in the same document as the welding requirements, and those criteria are length-and-type based rather than the area-based approach found elsewhere. An alternative acceptance annex permits fracture-mechanics-based criteria.',
    codes: 'API 1104; ASME Section IX where the pipeline code is not the governing authority; ASME B31.4 and B31.8 for the piping systems.',
    pitfall:
      'Applying ASME Section VIII acceptance to a pipeline girth weld or vice versa. The criteria are genuinely different, and a weld can pass one and fail the other.',
  },
  'api-1163': {
    principle:
      'The API standard for in-line inspection system qualification, defining how ILI system performance — detection, identification, sizing and location — is validated against stated specifications.',
    practice:
      'It shifts the conversation from vendor claims to demonstrated performance, requiring the tool, procedures and personnel to be qualified as a system and results to be validated against field verification digs.',
    codes: 'API 1163; ASNT ILI-PQ for personnel qualification; NACE SP0102 for in-line inspection of pipelines.',
    pitfall:
      'Accepting a tool specification as achieved performance. The standard exists because unvalidated tolerance claims lead directly to wrong dig decisions.',
  },
  'asme-b31-8': {
    principle:
      'The ASME code for gas transmission and distribution piping systems, covering design, materials, fabrication, testing and operation, with design factors varying by location class and therefore by population density.',
    practice:
      'Location class is the mechanism by which consequence enters the design: the same pressure and diameter demand a heavier wall or lower stress in a populated area. Integrity management provisions in B31.8S govern in-service assessment.',
    codes: 'ASME B31.8 and B31.8S; API 1104 for welding; API 1163 for in-line inspection; 49 CFR Part 192 in US jurisdiction.',
    pitfall:
      'Ignoring class location change. Development around an existing pipeline can move it into a higher class, and the code obliges a response rather than permitting the original design to stand unexamined.',
  },
  'iso-13588': {
    principle:
      'The ISO standard for ultrasonic testing of welds using automated phased array technology, defining testing levels, equipment requirements, setup verification and reporting.',
    practice:
      'It provides the ISO-world framework for PAUT that ASME Section V Article 4 appendices provide in the ASME world, with graded testing levels allowing rigour to match criticality.',
    codes: 'ISO 13588; ISO 19285 for acceptance in phased array weld testing; ISO 17640 for conventional ultrasonic weld testing.',
    pitfall:
      'Selecting a testing level without reference to the criticality it implies. The levels differ in coverage and scanning requirements, and choosing the lowest by default undermines the examination.',
  },
  'iso-17640': {
    principle:
      'The ISO standard for ultrasonic testing of welded joints, defining techniques, testing levels and examination requirements for manual and semi-automated ultrasonic weld examination.',
    practice:
      'Testing levels A through D scale coverage and rigour with criticality; the standard covers technique and examination, with acceptance in ISO 11666 or the application standard.',
    codes: 'ISO 17640 for testing; ISO 11666 for acceptance levels; ISO 23279 for characterisation of indications; ISO 13588 for phased array.',
    pitfall:
      'Reporting to ISO 17640 without stating the testing level. Coverage differs materially between levels, so the report is not reproducible without it.',
  },
  'iso-9934': {
    principle:
      'The ISO series on magnetic particle testing — Part 1 general principles, Part 2 detection media, Part 3 equipment — covering technique, media performance and equipment requirements.',
    practice:
      'It separates what the examination requires from what the consumables and equipment must demonstrate, which makes media and equipment verification an explicit and auditable activity.',
    codes: 'ISO 9934-1/-2/-3; ISO 17638 for magnetic particle testing of welds; ISO 23278 for acceptance levels.',
    pitfall:
      'Verifying equipment and never verifying the detection media. Particle performance degrades in use, and media checks are the part most often missing from records.',
  },
  'awwa-d100': {
    principle:
      'The AWWA standard for welded carbon steel tanks for water storage, covering design, fabrication, erection, inspection and testing of potable and process water tanks.',
    practice:
      'Water service brings requirements petroleum standards do not: coating and lining systems suited to potable contact, and sanitary considerations alongside structural ones. Seismic and wind provisions are prominent because these tanks are frequently elevated.',
    codes: 'AWWA D100 for construction; AWWA D101 and D102 for inspection and coating; API 653 practices are often referenced by analogy but do not govern.',
    pitfall:
      'Applying API 653 evaluation to a water tank as though it governed. It is a useful analogue for shell and floor evaluation, but the governing standard for water storage is the AWWA series.',
  },
};

/* ── Section composition by category ───────────────────────────────────────── */

const HEADINGS = {
  method: {
    principle: 'How it works',
    detects: 'What it finds',
    misses: 'What it will not find',
    practice: 'How it is actually done',
    codes: 'Governing codes and standards',
    pitfall: 'Where it goes wrong',
  },
  defect: {
    principle: 'How this damage forms',
    detects: 'How it is detected',
    misses: 'Why it gets missed',
    practice: 'What causes it, and what prevents it',
    codes: 'Codes that govern assessment',
    pitfall: 'The common reporting error',
  },
  standard: {
    principle: 'What this document is',
    detects: 'What it covers',
    misses: 'What it does not cover',
    practice: 'How it is applied',
    codes: 'Related documents',
    pitfall: 'The common misuse',
  },
  certification: {
    principle: 'How the scheme works',
    detects: 'What it covers',
    misses: 'What it does not cover',
    practice: 'In practice',
    codes: 'Related schemes and standards',
    pitfall: 'The common misunderstanding',
  },
  physics: {
    principle: 'The principle',
    detects: 'Why it matters in inspection',
    misses: 'Its limits',
    practice: 'How it shows up in practice',
    codes: 'Where the codes address it',
    pitfall: 'Where practitioners get caught',
  },
  equipment: {
    principle: 'What it is',
    detects: 'What it is used for',
    misses: 'What it cannot do',
    practice: 'Correct use',
    codes: 'Governing standards',
    pitfall: 'The usual mistake',
  },
  data: {
    principle: 'What it represents',
    detects: 'How it is used',
    misses: 'What it does not tell you',
    practice: 'How it is derived',
    codes: 'Where it is defined',
    pitfall: 'How it is misread',
  },
  procedure: {
    principle: 'What it governs',
    detects: 'Why it matters',
    misses: 'What it does not control',
    practice: 'How it is set',
    codes: 'Governing codes',
    pitfall: 'The common shortcut',
  },
  'asset-type': {
    principle: 'What it is',
    detects: 'Inspection focus',
    misses: 'What routine inspection can miss',
    practice: 'Damage mechanisms in service',
    codes: 'Governing codes',
    pitfall: 'The common oversight',
  },
  safety: {
    principle: 'What it requires',
    detects: 'Why it exists',
    misses: 'What it does not cover',
    practice: 'How it is implemented',
    codes: 'Regulatory basis',
    pitfall: 'Where it fails in practice',
  },
};

const ORDER = ['principle', 'detects', 'misses', 'practice', 'codes', 'pitfall'];

/**
 * Build the depth block for one glossary entry.
 * Returns '' when there are no authored facts — a term with nothing specific to
 * say is better left short than padded.
 */
export function buildGlossaryDepth(entry) {
  const facts = TERM_FACTS[entry.slug];
  if (!facts) return '';

  const h = HEADINGS[entry.category] || HEADINGS.method;
  const term = String(entry.term || '').split('(')[0].trim();
  const out = [];

  for (const field of ORDER) {
    if (!facts[field]) continue;
    out.push(`      <h2>${esc(h[field])}</h2>\n      <p>${facts[field]}</p>`);
  }

  if (facts.faq && facts.faq.length) {
    out.push('      <h2>Frequently asked questions</h2>');
    for (const { q, a } of facts.faq) {
      out.push(`      <h3>${esc(q)}</h3>\n      <p>${esc(a)}</p>`);
    }
  }

  out.push(
    `      <h2>Where ${esc(term)} fits in an inspection programme</h2>\n` +
    `      <p>A term is only useful when it connects to a decision. ${esc(term)} appears in written procedures, in technique sheets, and in the records an owner or accreditation body reviews afterwards — which means the way it is defined in your documentation has to match the way it is applied on site. Where the two drift apart, audits find it. Atlantis writes and reviews procedures against the governing codes, trains inspection personnel to apply them, and builds the record-keeping that makes the evidence retrievable years later. <a href="/consulting">Procedure development and code consulting</a> · <a href="/training">NDT training and certification</a> · <a href="/contact">Ask us about your programme</a>.</p>`,
  );

  return `\n    <section aria-label="${esc(term)} in depth">\n${out.join('\n\n')}\n    </section>`;
}

/** Q&A actually rendered above, for FAQPage schema. Never invented. */
export function glossaryFaqs(entry) {
  const facts = TERM_FACTS[entry.slug];
  return facts && facts.faq ? facts.faq.map(({ q, a }) => ({ question: q, answer: a })) : [];
}

export function glossaryDepthCoverage(entries) {
  const have = entries.filter((e) => TERM_FACTS[e.slug]).length;
  return { authored: have, total: entries.length };
}

// 2026-08-05 tail extension (~30 terms, next half of remaining demand)
Object.assign(TERM_FACTS, TERM_FACTS_TAIL);
