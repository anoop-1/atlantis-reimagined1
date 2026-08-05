/**
 * Glossary depth — tail extension, 2026-08-05.
 * The 2026-08-02 pass authored 60 terms covering 78% of glossary demand. This
 * adds the next ~30 by measured impressions (roughly half the remaining tail).
 * Same rule as the original: a term with nothing specific to say stays short —
 * these entries exist because there was something real to say.
 * Merged into TERM_FACTS by glossary-depth.mjs at load.
 */

export const TERM_FACTS_TAIL = {
  'aws-d1-1': {
    principle: 'The AWS structural welding code for steel, covering design, qualification, fabrication and inspection of structural steel welds — the document most structural weld acceptance in North America is judged against.',
    detects: 'Its inspection sections set visual acceptance criteria and invoke UT and RT with their own acceptance tables — notably different for statically and cyclically loaded connections.',
    misses: 'It governs structural steel, not pressure equipment: a vessel or piping weld judged against D1.1 has been judged against the wrong document.',
    practice: 'The CWI performing visual acceptance and the UT technician working to Clause 8 both operate inside D1.1\'s own qualification rules, and the engineer of record can modify criteria by contract — always check the job specification before calling a weld.',
    codes: 'AWS D1.1 itself; D1.5 for bridges; ASME Section IX where pressure-boundary welding governs instead.',
    pitfall: 'Applying the static-loading acceptance table to a cyclically loaded connection. The fatigue criteria are deliberately harsher, and the distinction is a design classification, not an inspector judgement.',
  },
  'iso-3452': {
    principle: 'The ISO series for penetrant testing — Part 1 general principles, with further parts covering penetrant materials, reference test blocks and equipment.',
    practice: 'It is the ISO-world counterpart to ASME Section V Article 6 and ASTM E165: technique, dwell, removal and development requirements, with sensitivity classes tied to the reference blocks of Part 3.',
    codes: 'ISO 3452 parts 1–6; ISO 23277 for weld acceptance levels; ASTM E1417 in the US system.',
    pitfall: 'Mixing systems: qualifying materials to ISO 3452 sensitivity classes but accepting against a specification written around ASTM levels. The class systems do not map one-to-one.',
  },
  'en-12668': {
    principle: 'The European standard for characterising and verifying ultrasonic examination equipment — Part 1 instruments, Part 2 probes, Part 3 combined equipment.',
    practice: 'It is what "the flaw detector was verified" should actually mean: measurable checks on linearity, gain accuracy and probe parameters at defined intervals, not just an annual calibration sticker.',
    codes: 'EN 12668-1/-2/-3; ISO 22232 is the current international successor series.',
    pitfall: 'Treating an in-date calibration certificate as proof the combined instrument-probe system performs. Part 3 exists because instrument and probe can each pass alone and still fail together.',
  },
  'magnetic-permeability': {
    principle: 'The measure of how readily a material carries magnetic flux. High-permeability (ferromagnetic) materials concentrate flux, which is what makes magnetic particle testing possible — and what makes eddy current testing of them difficult.',
    practice: 'Permeability varies with heat treatment, stress and prior magnetisation, so it is not a fixed material constant on real components. In ET it produces signals that swamp defect responses unless the part is magnetically saturated.',
    codes: 'Underlies ASME Section V Articles 7 and 8; saturation techniques in the tubing appendices exist specifically to suppress permeability noise.',
    pitfall: 'Assuming a stainless steel is non-magnetic by name. Cold-worked austenitic grades and duplex steels carry real permeability, and both MT applicability and ET behaviour change with it.',
  },
  'fill-factor': {
    principle: 'In tube eddy current testing, the ratio of probe diameter to tube inside diameter (squared, for the flux linkage). It sets how strongly the coil couples to the tube wall.',
    practice: 'Low fill factor means weak coupling and lost sensitivity; too tight risks the probe jamming in dents or deposits. Probes are chosen per tube batch, and heavily fouled bundles may need cleaning before the intended fill factor is achievable at all.',
    codes: 'ASME Section V Article 8 tubing appendices state fill-factor expectations for bobbin examination.',
    pitfall: 'Reporting bundle condition from a run where deposits forced an undersized probe. The reduced fill factor quietly degrades sensitivity, and the report should say so rather than presenting the run as standard.',
  },
  indication: {
    principle: 'Anything an NDT method makes visible or measurable that requires evaluation. An indication is not a defect: it is the raw observation, which evaluation then classifies as relevant, non-relevant or false.',
    practice: 'The discipline is in the sequence — detect, interpret (relevant or not), evaluate (against acceptance criteria). Skipping the middle step is how geometry echoes become "cracks" in reports and how real flaws get dismissed as noise.',
    codes: 'The interpretation/evaluation sequence is written into ASME Section V and every acceptance standard; the vocabulary is defined in ASTM E1316.',
    pitfall: 'Writing "defect" in a report where "indication" is meant. The words carry different contractual weight, and a report that calls everything a defect obliges responses the findings may not justify.',
  },
  'ir-192': {
    principle: 'Iridium-192, the workhorse gamma source of industrial radiography — energies averaging around 0.35 MeV and a 74-day half-life, suited to steel in the mid-thickness range most piping and vessel work occupies.',
    practice: 'The short half-life means activity planning is part of scheduling: a source near the end of its working life doubles exposure times. Source changes, transport and bonded storage are regulated activities with real lead times.',
    codes: 'ASME Section V Article 2 bounds usable thickness ranges by source; transport under IAEA regulations; possession under national licensing.',
    pitfall: 'Stretching an aging source with ever-longer exposures. Beyond a point scatter degrades contrast faster than exposure compensates, and the images stop meeting IQI sensitivity even though density looks right.',
  },
  'galvanic-corrosion': {
    principle: 'Accelerated corrosion of the less noble metal when two dissimilar metals are electrically connected in an electrolyte. The driving force is the potential difference; the damage concentrates on the anodic partner, worst where its area is small against a large cathode.',
    detects: 'Visual examination finds it at the classic locations — bolted joints of mixed metallurgy, weld transitions, tube-to-tubesheet interfaces — and UT thickness quantifies the loss.',
    practice: 'Control is by design: isolation, compatible pairings, coating the cathode (not just the anode), and attention to area ratios. An inspection programme should treat every dissimilar-metal junction as a named CML rather than hoping the grid catches it.',
    codes: 'API 571 describes the mechanism; NACE/AMPP practices cover control; API 570/510 inspection planning should reflect it at junction locations.',
    pitfall: 'Coating only the anode. Coating defects then concentrate the whole galvanic current onto pinpoints of exposed anodic metal, and perforation is faster than with no coating at all.',
  },
  'shear-wave': {
    principle: 'A wave mode whose particle motion is perpendicular to travel. It propagates only in solids, at roughly half the longitudinal velocity in steel — which halves the wavelength at a given frequency and sharpens resolution.',
    practice: 'Angle-beam weld examination is shear-wave work: beyond the first critical angle only the shear mode remains in the part, giving a clean single-mode beam at the standard 45/60/70-degree wedge angles.',
    codes: 'ASME Section V Article 4 and ISO 17640 angle-beam techniques are built on it.',
    pitfall: 'Sizing a shear-wave path with a longitudinal velocity setting. The factor-of-two velocity difference puts the reflector at twice its true depth, and the error looks entirely plausible on screen.',
  },
  'weld-spatter': {
    principle: 'Molten droplets expelled during welding that adhere to the surrounding surface. Cosmetic at first glance, but consequential for inspection and coating.',
    detects: 'Visual examination identifies it; the issue is what it hides and disturbs — spatter masks the weld toe where fatigue cracks start, holds moisture against the surface, and breaks coating continuity.',
    practice: 'Acceptance criteria commonly require removal before inspection and coating, and surface methods (MT/PT) are unreliable over spatter because it traps particles and penetrant indiscriminately.',
    codes: 'AWS D1.1 visual acceptance addresses it; coating specifications (SSPC/NACE) require its removal as surface preparation.',
    pitfall: 'Performing MT or PT over spattered surfaces to save prep time. The background indications generated make the examination unreadable, and the toe — the location that matters — stays hidden.',
  },
  'fitness-for-service-ffs': {
    principle: 'Engineering assessment of whether equipment containing a flaw or degradation can continue operating safely — quantitatively, against the actual condition, rather than by comparison with new-construction acceptance criteria.',
    practice: 'API 579/ASME FFS-1 structures it in assessment levels of increasing rigour. The inputs are inspection data: flaw dimensions, remaining thickness, material properties. The output is a run/repair/re-rate/retire decision with a technical basis that survives review.',
    codes: 'API 579-1/ASME FFS-1; feeding API 510/570/653 in-service decisions; damage mechanisms from API 571.',
    pitfall: 'Feeding an FFS assessment with unsized or poorly located indications. The assessment is only as good as the NDT that characterised the flaw, which is why sizing technique (TOFD, phased array) matters more here than anywhere.',
  },
  'decibel-db': {
    principle: 'The logarithmic ratio unit ultrasonics uses for amplitude: 6 dB is a factor of two in signal amplitude, 20 dB a factor of ten. Gain, attenuation and sizing methods are all expressed in it.',
    practice: 'The 6 dB drop sizing method takes its name directly: moving the probe until amplitude halves nominally places the beam edge at the reflector edge. Transfer corrections and DAC curves are likewise dB constructs.',
    codes: 'Every ultrasonic procedure under ASME Section V Article 4 and ISO 17640 states sensitivities and corrections in dB.',
    pitfall: 'Adding percentages instead of dB. Screen-height percentages do not add; decibels do. Corrections mishandled as percentages produce sensitivity errors that compound silently.',
  },
  'post-emulsifiable-penetrant': {
    principle: 'A penetrant that is not directly water-washable: an emulsifier is applied as a separate timed step to make the surface layer rinsable. This separates penetration from washability and protects indications in shallow flaws from over-washing.',
    practice: 'It is the high-sensitivity choice where wide, shallow defects would be stripped by direct washing. The emulsification time is critical and short — over-emulsification removes penetrant from the flaws themselves.',
    codes: 'ASME Section V Article 6 and ASTM E1417 cover method classifications (Method B lipophilic, Method D hydrophilic) and their control.',
    pitfall: 'Treating emulsification dwell casually because "it is just a rinse aid". It is the sensitivity-controlling step of the whole method, and it is unforgiving in the over direction.',
  },
  'api-510': {
    principle: 'The API in-service inspection code for pressure vessels: inspection intervals, thickness data and corrosion rates, remaining-life calculation, repair, alteration and re-rating.',
    practice: 'Its engine is measured condition: CML thickness history produces a corrosion rate, the rate produces remaining life, and remaining life bounds the interval. The authorised inspector\'s judgement is built into the code rather than being an informal overlay.',
    codes: 'API 510; API 572 inspection practices; API 571 damage mechanisms; API 579 where degradation needs formal assessment; ASME Section VIII as the construction basis.',
    pitfall: 'Letting the vessel\'s corrosion rate come from two readings within measurement scatter of each other. Rate noise becomes interval noise, and both conservative and unconservative errors follow.',
  },
  'c-scan': {
    principle: 'A plan-view ultrasonic image: amplitude or depth mapped over the scanned surface, built from encoded probe position. Where the A-scan is a waveform and the B-scan a cross-section, the C-scan is the map.',
    practice: 'Corrosion mapping and composite inspection live on it — extent and pattern of damage are visible at a glance, and successive scans of the same area make growth measurable rather than anecdotal.',
    codes: 'ASME Section V Article 4 encoded-scanning provisions; corrosion-mapping procedures under API 510/570 programmes.',
    pitfall: 'Reading a C-scan without knowing its gating. The image shows only what the gate was set to capture; damage outside the gate simply does not appear, however vivid the map looks.',
  },
  'asme-b31-3': {
    principle: 'The ASME code for process piping — design, materials, fabrication, examination and testing of piping in refineries, chemical plants and related facilities.',
    practice: 'Its fluid-service categories set examination extent: Normal, Category D, Category M and High Pressure each carry different radiography percentages and acceptance criteria. The examination standard is Section V; the acceptance criteria are B31.3\'s own.',
    codes: 'ASME B31.3; ASME Section V for methods; ASME Section IX for welding qualification; API 570 once the system is in service.',
    pitfall: 'Applying the 100% radiography expectations of severe cyclic service to normal fluid service, or vice versa. Examination extent is a service classification decision made by engineering, not by the inspector at the weld.',
  },
  'api-579': {
    principle: 'The joint API/ASME standard for fitness-for-service assessment — the quantitative framework for deciding whether flawed or degraded equipment keeps running.',
    practice: 'Organised by damage type (general metal loss, local thinning, pitting, cracking, dents...) with three assessment levels of increasing rigour and data demand. Level 1 is deliberately conservative screening; Level 3 is full numerical analysis.',
    codes: 'API 579-1/ASME FFS-1; invoked by API 510, 570 and 653; damage mechanisms per API 571.',
    pitfall: 'Jumping to Level 3 analysis on poor input data. Sophistication in the analysis cannot repair uncertainty in the flaw characterisation — better NDT first, then the assessment level the data supports.',
  },
  'level-iii': {
    principle: 'The senior NDT qualification level: establishes and approves procedures, interprets codes, and is responsible for qualifying and examining Level I and II personnel. Under SNT-TC-1A the employer\'s written practice is administered under a Level III\'s technical responsibility.',
    practice: 'The role is accountable, not ceremonial — audits ask who approved the procedure and who certified the technician, and the answer is a named Level III. Many organisations engage the capability as an outsourced service rather than a full-time post.',
    codes: 'SNT-TC-1A and CP-189 define the employer-based role; ISO 9712 defines the central-certification equivalent.',
    pitfall: 'A written practice signed by a Level III who never actually reviews procedures or examinations. The paper structure exists but the technical responsibility does not, and a competent auditor finds that in one interview.',
  },
  'level-ii': {
    principle: 'The working qualification level: sets up and calibrates equipment, performs examinations, interprets and evaluates results against the applicable code, and writes the report. The level most contracts actually specify.',
    practice: 'Progression to Level II is training hours plus documented experience hours per method — the experience log matters as much as the course certificate, and thin logs are where certifications fail verification.',
    codes: 'SNT-TC-1A / CP-189 employer-based; ISO 9712 central; method-specific hour requirements differ between them.',
    pitfall: 'Assuming a Level II in one method or sector carries into another. Certification is per method — a UT Level II interpreting RT film is operating outside certification, however experienced.',
  },
  'side-drilled-hole-sdh': {
    principle: 'A calibration reflector drilled parallel to the examination surface so its cylindrical wall presents a consistent reflector to a beam at any angle — which is why it is the standard reference for angle-beam DAC construction.',
    practice: 'Where flat-bottom holes suit normal-beam sensitivity, SDHs serve angle-beam work: the same hole set builds distance-amplitude curves across angles, and code blocks specify their sizes and depths.',
    codes: 'ASME Section V Article 4 basic calibration blocks are SDH-based; ISO 17640 references equivalent reflectors.',
    pitfall: 'Comparing amplitudes between SDH-calibrated and FBH-calibrated setups as if equivalent. The reflector geometries respond differently with angle and distance; sensitivities transfer only through the code\'s own correlations.',
  },
  'impedance-plane': {
    principle: 'The display space of eddy current testing: coil impedance plotted as resistance against reactance. Lift-off, conductivity, permeability and defects each move the operating point along characteristic trajectories, and phase separation between them is what makes the method interpretable.',
    practice: 'Setup rotates the display so lift-off runs horizontally; defect responses then rise at an angle that grows with depth. Reading the plane — angle and amplitude together — is the core ET skill.',
    codes: 'ASME Section V Article 8 requires phase-based setup on reference standards.',
    pitfall: 'Interpreting amplitude alone. Two signals of equal height with different phase angles are different things — one may be lift-off wobble, the other a crack.',
  },
  'cp-189': {
    principle: 'ANSI/ASNT CP-189: the standard (not recommended practice) for NDT personnel qualification — fixed minimum requirements where SNT-TC-1A offers adaptable guidance.',
    practice: 'The practical difference is latitude: under CP-189 the employer certifies but cannot tailor hour and examination requirements downward, and a certified Level III must be the examiner. Contracts wanting supplier consistency specify it for exactly that reason.',
    codes: 'ANSI/ASNT CP-189; SNT-TC-1A as the recommended-practice sibling; NAS 410 in aerospace.',
    pitfall: 'Writing "SNT-TC-1A/CP-189" in a written practice as if interchangeable. A programme claiming CP-189 compliance inherits its fixed requirements — auditors check against the standard, not the guideline.',
  },
  'joint-efficiency': {
    principle: 'The factor (E) in pressure design formulas expressing how much of a welded joint\'s theoretical strength may be credited — set by joint type and by how much radiographic examination was performed.',
    practice: 'It is the code\'s explicit trade between inspection and thickness: full radiography earns E = 1.0, spot earns less, none still less — so an owner\'s examination choice at construction is permanently embedded in the vessel\'s pressure calculations.',
    codes: 'ASME Section VIII Division 1 UW-12 table; carried into API 510 remaining-life and re-rating work.',
    pitfall: 'Recalculating MAWP during in-service work with E = 1.0 because "the welds look fine". The efficiency belongs to the original examination records; assuming it upward is a design-margin error, not an inspection opinion.',
  },
  'pitting-corrosion': {
    principle: 'Localised corrosion producing small, deep cavities while surrounding metal stays largely intact — driven by local breakdown of passive films, classically by chlorides on stainless steels.',
    detects: 'Visual finds open pits; UT struggles because a narrow pit reflects poorly and a grid survey steps over it — which is why pitting-prone service uses scanning techniques and why MFL screening plus UT prosecution suits tank floors.',
    practice: 'Assessment is by pit depth and density rather than average thickness: API 579 has a dedicated pitting assessment because general-metal-loss rules mis-handle it.',
    codes: 'API 571 for the mechanism; API 579 Part 6 for assessment; ASTM G46 for pit characterisation.',
    pitfall: 'Reporting average remaining wall over a pitted area. The average is fiction — the deepest pit governs, and perforation arrives at the extreme value, not the mean.',
  },
  'source-to-film-distance-sfd': {
    principle: 'The distance from radiation source to film or detector. Together with source size and flaw-to-film distance it sets geometric unsharpness — the blur that limits what detail can exist in the image.',
    practice: 'Codes set minimum SFD through maximum allowed unsharpness: a larger source or closer geometry needs more distance. Doubling SFD quadruples exposure time, so technique design is a deliberate trade of clarity against productivity.',
    codes: 'ASME Section V Article 2 geometric unsharpness limits; ISO 17636 equivalents.',
    pitfall: 'Shortening SFD to cut exposure time on a night shift. The image gains density but loses definition, and the IQI wire that should prove sensitivity quietly disappears.',
  },
  'aws-d1-5': {
    principle: 'The AWS/AASHTO bridge welding code — D1.1\'s sibling for highway bridges, with fracture-critical provisions reflecting that bridge members see fatigue loading for decades and some have no redundancy.',
    practice: 'Fracture-critical members carry enhanced examination, tighter acceptance and specific welder and consumable controls. RT and UT extent is specified by member classification, not inspector discretion.',
    codes: 'AASHTO/AWS D1.5; state DOT supplements routinely modify it; D1.1 governs non-bridge structural work.',
    pitfall: 'Staffing bridge work as if it were building steel. The fracture-critical requirements — including who may weld and how repairs are made — are the point of the code, and violations are found in records years later.',
  },
  'astm-e1444': {
    principle: 'The ASTM standard practice for magnetic particle testing process requirements — the MT counterpart to E1417 for penetrant: materials control, system checks and verification that make the examination repeatable.',
    practice: 'Where E709 guides technique selection, E1444 is contractable: field strength verification, particle concentration and contamination checks, lighting levels and the records behind them.',
    codes: 'ASTM E1444; ASTM E709 as the guide; ASME Section V Article 7 in code work; ISO 9934 internationally.',
    pitfall: 'Running MT with in-date equipment but no particle-bath checks. The bath degrades in use, and E1444\'s process controls exist precisely because equipment certificates cannot see it.',
  },
  'jaeger-j1': {
    principle: 'The near-vision acuity requirement in NDT eye examinations: reading Jaeger J1 (or equivalent) test type at a defined distance, at least annually, as a condition of performing examinations.',
    practice: 'It is the most audited single record in personnel files because it expires fastest. Corrected vision is fine — the record must say so and the correction must be worn at work.',
    codes: 'SNT-TC-1A, CP-189 and ISO 9712 all carry near-vision (and colour differentiation) requirements with defined recurrence.',
    pitfall: 'A technician examining with an expired vision record. Every examination since expiry is technically unsupported, and auditors read the dates — this exact finding recurs across the industry constantly.',
  },
  'penetrant-testing': {
    principle: 'Surface method using capillary action: penetrant enters surface-breaking discontinuities, excess is removed, and a developer draws trapped penetrant back out into a visible indication.',
    detects: 'Surface-breaking flaws on any non-porous material — including the non-ferromagnetic alloys MT cannot touch: austenitic stainless, aluminium, titanium, nickel alloys.',
    misses: 'Anything not open to the surface: subsurface flaws, flaws under coatings or smeared metal. Surface preparation is not bureaucracy — a peened or blasted surface can close flaws to penetrant entirely.',
    practice: 'The controlling variables are dwell time, removal technique and developer application, in that order of abuse. Sensitivity levels are selected, not assumed, and process checks under E1417 keep the system honest.',
    codes: 'ASME Section V Article 6; ASTM E165 and E1417; ISO 3452 series.',
    pitfall: 'Over-washing. The flaw that took ten minutes of dwell to fill can be rinsed empty in seconds of enthusiastic washing, and the examination then passes clean with the crack still there.',
  },
  'api-581': {
    principle: 'The quantitative companion to API 580: the calculation methodology for risk-based inspection — probability of failure from damage-mechanism models, consequence from release modelling, combined into risk that ranks and schedules inspection.',
    practice: 'Its outputs are only as honest as the damage-mechanism inputs; thickness data, process conditions and mechanism assignments feed the models, and RBI intervals lapse when that data stops being maintained.',
    codes: 'API 581 with API 580; mechanisms from API 571; executed through API 510/570/653 programmes.',
    pitfall: 'Using RBI purely as an interval-extension tool. The methodology redistributes inspection toward risk — some equipment gets MORE attention, and a programme that only ever lengthens intervals has been gamed, not analysed.',
  },
  'normal-beam-probe': {
    principle: 'A probe transmitting perpendicular to the surface — the straight-beam workhorse for thickness, lamination checks and back-wall monitoring, in single or twin-crystal form.',
    practice: 'Twin-crystal (dual) probes cut the dead zone for thin sections and near-surface work; single-crystal probes give cleaner deep response. Delay lines extend use to hot or curved surfaces.',
    codes: 'ASME Section V Articles 4 and 5; EN 12668-2 / ISO 22232-2 for probe characterisation.',
    pitfall: 'Thickness-testing thin material with a single-crystal probe whose dead zone swallows the back-wall echo. The instrument still displays a number — from the wrong echo.',
  },
};
