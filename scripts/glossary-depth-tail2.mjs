/**
 * Glossary depth — tail round 3, 2026-08-06.
 * Rounds 1+2 authored 91 terms; this adds the next 25 by measured demand
 * (magnetic-bench 33i, asme-b31-4 33i, porosity, RBI, MAWP, yoke, IQI…).
 * Same rule: a term earns an entry only when there is something real to say.
 * Merged into TERM_FACTS by glossary-depth.mjs at load.
 */

export const TERM_FACTS_TAIL2 = {
  'magnetic-bench': {
    principle: 'A stationary magnetizing unit for MT: headstock and tailstock pass current through the part (circular field) while a coil supplies the longitudinal field — letting a part be examined in two perpendicular field directions without repositioning by hand.',
    practice: 'Bench units dominate high-volume component work — crankshafts, spindles, couplings — where consistent contact, repeatable amperage and wet fluorescent particles under a hood beat anything achievable with a yoke. Amperage is set from part diameter per the governing rule-of-thumb ranges, then verified with field indicators, not assumed.',
    codes: 'ASTM E1444 and ASME Section V Article 7 set current levels, verification and demagnetisation expectations.',
    pitfall: 'Arc burns at the headstock contacts on poorly cleaned or lightly clamped parts. An arc strike is a metallurgical defect you just added to a part you were inspecting — contact pads and clamping pressure are not optional details.',
  },
  'asme-b31-4': {
    principle: 'The ASME code for pipeline transportation systems for liquids and slurries — design, construction, examination and testing of liquid pipelines between facilities, the liquid-line counterpart to B31.8 for gas.',
    practice: 'Its examination sections invoke girth-weld NDT with acceptance criteria aligned to API 1104 practice; in-service integrity of the same lines is then governed by regulation (in the US, DOT/PHMSA rules) rather than the construction code.',
    codes: 'ASME B31.4; API 1104 for welding qualification and acceptance; B31.8 for gas service; API 570 covers in-plant piping, not cross-country lines.',
    pitfall: 'Applying B31.3 process-piping thinking to a transportation pipeline. The codes split at the plant fence for a reason — examination percentages, acceptance criteria and repair rules all differ.',
  },
  'asme-b31-1': {
    principle: 'The ASME power piping code — steam, feedwater and related systems for power plants and industrial boilers, from the boiler external piping boundary outward.',
    practice: 'High-energy piping under B31.1 carries specific examination attention where failures have been catastrophic: seam-welded hot reheat lines, girth welds in creep service, and attachment welds. Covered piping systems programmes exist because these lines fail by creep and fatigue mechanisms that develop between outages.',
    codes: 'ASME B31.1 with ASME Section V methods; boiler proper falls under Section I; B31.3 governs process plants.',
    pitfall: 'Treating grade 91 and other creep-strength-enhanced steels like ordinary chrome-moly. Their damage concentrates in fine-grained heat-affected zones (Type IV cracking) and demands examination techniques and locations chosen for that mechanism.',
  },
  'd-scan': {
    principle: 'An ultrasonic presentation showing a top-view slice at a selected depth — with B- and C-scans it completes the set of orthogonal views reconstructable from encoded scanning data.',
    practice: 'In phased array and TOFD work the D-scan (end view along the weld axis in most software conventions — vendors disagree on naming) lets an analyst walk through a weld volume slice by slice, separating a continuous planar flaw from a chain of discrete ones — a distinction that changes the acceptance verdict.',
    codes: 'Encoded-data presentations underpin ASME Section V Article 4 mandatory appendices for PAUT recording.',
    pitfall: 'Vendor naming: one platform\'s D-scan is another\'s side or end view. State the viewing plane in the report rather than trusting the label — analysts reviewing on different software have mis-read geometry from exactly this.',
  },
  porosity: {
    principle: 'Gas trapped during weld solidification, leaving rounded voids — isolated, clustered, aligned or elongated (piping/wormhole) forms, each with its own acceptance treatment.',
    detects: 'Radiography sees porosity superbly (rounded dark indications); UT sees it poorly by comparison — small spherical voids scatter rather than reflect, which is one reason RT persists for porosity-prone processes.',
    practice: 'Porosity is a process message: moisture in consumables or shielding loss (scattered), contamination (clustered), poor technique at starts and stops. Acceptance criteria tolerate rounded indications far more than planar ones because voids concentrate stress mildly — but ALIGNED porosity can shadow a lack-of-fusion path and deserves suspicion beyond its area count.',
    codes: 'Acceptance per the construction code: AWS D1.1 porosity charts, ASME VIII/B31.3 rounded-indication charts (Appendix 4 practice).',
    pitfall: 'Chasing porosity counts while missing the trend. Three films in a row with increasing scattered porosity is a gas-supply or consumable-storage problem about to produce a rejectable weld — the finding worth reporting is the trajectory.',
  },
  'risk-based-inspection-rbi': {
    principle: 'A methodology that sets inspection scope and intervals from risk — probability of failure (damage mechanisms, measured rates) combined with consequence (inventory, energy, location) — instead of fixed calendar intervals.',
    practice: 'Done honestly, RBI concentrates inspection where it changes risk and relieves it where it does not — some equipment gets MORE attention than time-based rules gave it. The programme is only as good as its data discipline: mechanism assignments revisited after process changes, measured corrosion rates displacing defaults, and reassessment after every campaign.',
    codes: 'API 580 (framework) and API 581 (quantitative methodology); implemented through API 510/570/653 programmes; jurisdictions vary in how much interval relief they accept.',
    pitfall: 'Using RBI purely as an interval-stretching tool. A programme whose every reassessment lengthens intervals has been gamed — and the audit that finds stale inputs behind those extensions unwinds years of them at once.',
  },
  'maximum-allowable-working-pressure': {
    principle: 'MAWP: the maximum gauge pressure permitted at the top of a vessel in its operating position at design temperature — the number the relief device protects and the pressure boundary calculations guarantee.',
    practice: 'In-service, MAWP is not a plate-stamped constant forever: corrosion consumes the margin between measured thickness and required thickness, and API 510 rerating can move MAWP up or down with engineering justification. Every remaining-life calculation is implicitly a statement about defending the MAWP.',
    codes: 'ASME Section VIII design formulas define it; API 510 governs in-service rerating; relief sizing per API 520/521 hangs off it.',
    pitfall: 'Confusing MAWP with design pressure or operating pressure. Design pressure is what the designer asked for; MAWP is what the as-built (and as-corroded) vessel can actually sustain — the safety case rests on the latter.',
  },
  'hole-iqi': {
    principle: 'A hole-type image quality indicator: a plaque of radiographically similar material, thickness a set percentage of the part, with drilled holes of one, two and four times plaque thickness (1T/2T/4T). Seeing the required hole in the image demonstrates the technique\'s sensitivity.',
    practice: 'The designated hole visible on the required plaque proves contrast AND definition together — that is the point. Placement rules (source side by default, film side only with allowances and a lead letter F) exist because a film-side IQI flatters the technique.',
    codes: 'ASTM E1025 defines them; ASME Section V Article 2 tables select plaque per thickness; wire IQIs per ASTM E747 are the common alternative.',
    pitfall: 'Reading IQI visibility as flaw detectability. A 2T hole proves the technique meets its sensitivity class — it does not promise a tight crack at an unfavourable angle will show. IQIs qualify technique, not outcomes.',
  },
  yoke: {
    principle: 'A portable electromagnet whose poles induce a longitudinal field in the part between them — the field-work staple of MT because it needs no electrical contact and cannot arc-burn the part.',
    practice: 'Detects discontinuities oriented across the line between the poles, so every area is examined twice at right angles. Capability is verified by dead-weight lift test — a defined weight lifted per ASTM E709/E1444 practice — at intervals, not assumed from the nameplate.',
    codes: 'ASME Section V Article 7 and ASTM E1444 cover yoke technique, lift verification and coverage overlap.',
    pitfall: 'Coverage discipline. A yoke examines a small patch per placement; on a large weld the examination is a mosaic of overlapping placements in two orientations, and the finding rate of a rushed mosaic drops invisibly — nothing looks wrong, things simply are not found.',
  },
  lamination: {
    principle: 'A planar separation inside rolled plate, parallel to the surface — inclusions and voids flattened during rolling. Benign under membrane stress, consequential at welds and nozzles where through-thickness stress finds it.',
    detects: 'Straight-beam UT finds laminations trivially — a mid-wall echo with loss of back-wall. RT largely cannot: the separation presents no thickness change along the beam.',
    practice: 'Plate edges to be welded and nozzle areas get lamination checks because a lamination intersecting a weld can open (lamellar tearing risk) or divert an angle beam during later weld examination — a lamination found during service inspection also confuses corrosion mapping by mimicking mid-wall loss.',
    codes: 'Plate ordered to ASTM A435/A578 is scanned at the mill; ASME construction codes require checks at specific weld and nozzle locations.',
    pitfall: 'Reporting a lamination echo as wall loss during thickness surveys. The corrosion-rate calculation that follows is fiction — the flag is a mid-wall reflector WITH a healthy back-wall still present.',
  },
  'jaeger-j2': {
    principle: 'A near-vision acuity level on the Jaeger test-type scale — some written practices and specifications accept J2 at a defined distance where others require J1; the requirement is whatever the governing document states.',
    practice: 'The operative discipline is identical to J1: annual (or specified) verification, corrected vision acceptable if recorded and worn, and records current for every examiner. Where a client specification demands J1 and the written practice says J2, the contract governs — check before mobilising.',
    codes: 'SNT-TC-1A, CP-189 and NAS 410 each state near-vision requirements; employers pin the specific chart and distance in the Written Practice.',
    pitfall: 'Assuming vision requirements are uniform across programmes. A technician compliant under one employer\'s J2-based practice can be non-compliant on a J1-specified contract the same week — verification against the governing document, not habit.',
  },
  'x-ray-tube': {
    principle: 'The generator of industrial X-rays: electrons accelerated across a vacuum gap into a target, converting a small fraction of their energy to X-rays. Kilovoltage sets penetration (quality), current and time set quantity — the exposure triangle of radiography.',
    practice: 'Tube sets rule below the thickness range where gamma sources take over, and win on image quality there: adjustable energy means contrast can be optimised per thickness, unlike a source\'s fixed spectrum. Focal spot size drives geometric unsharpness, and duty cycles are real — tubes overheat and age.',
    codes: 'ASME Section V Article 2 governs technique regardless of generator; radiation safety under national regulations applies equally to tubes, with the mercy that a tube off is dead.',
    pitfall: 'Warm-up discipline. A cold tube driven straight to full kilovoltage risks target damage and unstable output — the conditioning schedule after idle periods exists because filaments and targets fail expensively.',
  },
  thermography: {
    principle: 'Infrared imaging of surface temperature as an NDT method: passive thermography reads existing thermal patterns (electrical faults, refractory loss, blocked tubes); active thermography injects heat and watches the decay, where subsurface flaws disturb the flow.',
    detects: 'Delaminations and voids in composites, corrosion under insulation indications via wet-insulation signatures, refractory degradation through shell temperature, electrical and rotating-equipment hot spots.',
    misses: 'Depth: sensitivity collapses quickly with flaw depth in conductive materials. Emissivity variation, reflections and wind rewrite surface temperatures — a shiny surface is a mirror, not a thermometer.',
    codes: 'ASNT recognises IR/thermal testing as a method with its own certification track; ISO 18434 covers machinery thermography; ASTM has practice standards for composites (E2582).',
    pitfall: 'Reading absolute temperatures off low-emissivity surfaces without correction. The camera reports a number confidently; on bare metal that number is dominated by reflected sky and surroundings, not the part.',
  },
  transducer: {
    principle: 'The probe element converting electrical pulses to ultrasound and back — a piezoelectric element (or array of them) whose frequency, size and damping define what the examination can resolve.',
    practice: 'Frequency trades penetration against resolution; element size trades beam spread against near-field length; damping trades sensitivity against pulse length. Probe selection IS technique design — and probes age: elements crack, wear plates thin, cables fail intermittently, which is why probe checks belong in the daily verification, not the annual calibration.',
    codes: 'EN 12668-2 / ISO 22232-2 govern probe characterisation; procedure qualification fixes the probe parameters the demonstration used.',
    pitfall: 'Swapping a "same spec" probe mid-job without re-verification. Two probes of identical nominal frequency and size can differ meaningfully in beam profile — the calibration and sensitivity that qualified the technique belong to the probe that did the demonstration.',
  },
  undercut: {
    principle: 'A groove melted into base metal at the weld toe and left unfilled — a geometric stress raiser exactly where fatigue cracks initiate.',
    detects: 'Visual with measurement (depth gauges, profile gauges) is the primary detection; RT shows it as a dark line hugging the toe; MT finds the fatigue cracking undercut later nucleates.',
    practice: 'Acceptance is depth-and-length based and differs sharply between statically and cyclically loaded work — codes tolerate shallow undercut in static service and clamp down for fatigue. The repair (blend grinding or a wash pass) must itself be checked: grinding below minimum thickness converts one defect into another.',
    codes: 'AWS D1.1 tabulates limits by loading class; ASME VIII and B31.3 carry their own; measurement practice per the visual examination procedure.',
    pitfall: 'Eyeballing depth. Undercut acceptance hinges on fractions of a millimetre, and shadowed toe geometry deceives — a finding worth writing is a finding worth measuring.',
  },
  'lamellar-tearing': {
    principle: 'Step-like cracking in base metal beneath highly restrained welds, driven by through-thickness contraction strain acting on planar inclusions in rolled plate — the failure mode low through-thickness ductility makes possible.',
    detects: 'UT finds the terraced cracking under attachment welds; the tell is location (parallel to surface, in base metal, under a restrained joint) rather than in the weld itself.',
    practice: 'Prevention beats detection: joint design that reduces through-thickness demand, buttering layers, and Z-grade plate (through-thickness tested per EN 10164 or equivalent) at critical attachments. It shows up in heavy structural connections, nozzle attachments and lifting lugs — anywhere a stiff weld pulls across the plate thickness.',
    codes: 'AWS D1.1 commentary and EN 1011 address susceptible details; plate to EN 10164 / ASTM A770 offers through-thickness guarantees.',
    pitfall: 'Examining only the weld on restrained attachments. The tearing is in the plate under the joint — a weld-volume-only scan pattern passes right over it.',
  },
  'alternating-current-field-measurement-acfm': {
    principle: 'An electromagnetic method that induces a uniform AC field and reads the magnetic-field perturbations a surface-breaking crack causes — yielding detection AND length/depth sizing without cleaning to bare metal.',
    detects: 'Fatigue cracks at welds through paint and thin coatings — its home ground is offshore structural inspection, where removing coatings for MT costs more than the examination.',
    misses: 'Subsurface flaws; complex geometry complicates the field model behind the sizing; very short or shallow cracks approach the noise floor.',
    practice: 'Probe passes along the weld toe with software matching signal to a crack model. Operator skill concentrates in recognising geometry and seam signals versus genuine indications — the classic ACFM error is a false call at a geometry change.',
    codes: 'Recognised in offshore inspection practice; personnel typically certified under ISO 9712 or employer schemes with method-specific training.',
    pitfall: 'Trusting depth sizing at the extremes. The inversion model is calibrated for a crack-shape family; unusually long-shallow or short-deep cracks size worst exactly when the number matters most.',
  },
  gating: {
    principle: 'The time (equivalently depth) windows an ultrasonic instrument monitors: a gate defines where in the trace the instrument looks, what threshold triggers, and what gets recorded or alarmed.',
    practice: 'Every automated and encoded examination is only as good as its gates: an interface gate tracking the front wall, measurement gates positioned for the volume of interest, thresholds set against the calibration sensitivity. C-scan images show only what the gate captured — gate position IS the examination scope.',
    codes: 'Gate settings are procedure parameters under ASME Section V Article 4 encoded examinations and belong in the scan plan.',
    pitfall: 'A gate that clips the region of interest — set for nominal geometry, wrong where thickness varies. Nothing errors, nothing alarms; the data is simply blind exactly where the component thinned. Verify gates against the extremes of actual geometry, not the drawing.',
  },
  'pressure-vessel': {
    principle: 'A closed container designed to hold pressure significantly different from ambient — the asset class around which most inspection codes grew, because stored pressure energy makes failure consequences severe.',
    practice: 'Lifecycle: designed and built to a construction code (ASME VIII most commonly), then handed to an in-service regime (API 510 or jurisdictional rules) that runs on measured condition — CML thickness histories, corrosion rates, remaining life, and damage-mechanism-driven examination beyond simple thinning: cracking services get surface methods, hydrogen services get specialised UT.',
    codes: 'ASME Section VIII (design/construction), API 510 (in-service), API 572 (inspection practices), API 571 (damage mechanisms), NBIC in many jurisdictions.',
    pitfall: 'Inspecting every vessel as a general-thinning problem. The vessel\'s service assigns its mechanisms — amine cracking, HTHA, CUI at supports — and each mechanism has locations and methods a routine grid survey does not cover.',
  },
  'a-scan': {
    principle: 'The fundamental ultrasonic display: signal amplitude against time. Every other presentation — B, C, D, S-scans — is built from A-scans; every sizing and evaluation decision ultimately resolves to features of this trace.',
    practice: 'Reading an A-scan is the core UT skill: identifying the back wall, recognising mode-converted ghosts, separating a near-surface flaw from the dead zone, watching echo dynamics as the probe moves — the echo-dynamic pattern often tells more about a reflector than its peak amplitude does.',
    codes: 'ASME Section V Article 4 evaluation is defined in A-scan terms (DAC/TCG amplitude comparison); encoded systems must retain A-scan data precisely so evaluations can be re-derived.',
    pitfall: 'Flying on the C-scan and never opening the underlying A-scans. Colour maps compress away the evidence — the analyst who cannot say what the A-scan under a coloured pixel looks like is reporting the software\'s opinion, not an examination.',
  },
  density: {
    principle: 'In film radiography, the degree of darkening — the logarithm of light attenuation through the processed film. Density is the exposure record: codes bound it because contrast sensitivity lives inside a density window.',
    practice: 'Readings are taken with a calibrated densitometer through the area of interest, not estimated on a viewer. Too light and contrast is starved; too dark and viewing equipment cannot punch through. Density variation across a shot also flags technique problems — undercut exposure at edges, scatter.',
    codes: 'ASME Section V Article 2 sets the acceptable density range for the area of interest and requires densitometer verification against calibrated strips.',
    pitfall: 'Accepting film on a bright viewer that "looks fine". A high-luminance viewer reads through over-dark film that a reviewer\'s standard viewer cannot — the densitometer number, not the impression, is the acceptance.',
  },
  'visible-particle': {
    principle: 'MT particles viewed under ordinary white light — the daylight alternative to fluorescent examination, trading peak sensitivity for freedom from darkened conditions and UV lamps.',
    practice: 'Contrast is everything: black or red particles over a thin white contrast paint background, adequate white-light level verified at the surface. The right choice for field structural work and rough surfaces where a portable UV setup is impractical; the wrong one where fine, tight indications are the target.',
    codes: 'ASME Section V Article 7 and ASTM E709 set light levels and technique for visible examination; contrast aids per manufacturer and procedure.',
    pitfall: 'Skipping the light measurement outdoors on the assumption daylight is always enough. Shadowed webs, box sections and late-afternoon work drop below required intensity while looking workable — the meter, not the impression, decides.',
  },
  'central-conductor': {
    principle: 'A conductor threaded through a hollow part\'s bore carrying magnetizing current — inducing a circular field in the part without any contact, so inner and outer surfaces are examined with zero arc-burn risk.',
    practice: 'The technique of choice for rings, nuts, hollow shafts and tubular parts: field strength falls with radius, so amperage is set for the outer diameter, and off-centre conductors bias the field — multiple shots with the conductor repositioned (or centring) restore uniformity on larger bores.',
    codes: 'ASME Section V Article 7 and ASTM E1444 give amperage guidance and coverage rules for central conductor technique.',
    pitfall: 'One off-centre shot on a large-bore ring: the near side saturates while the far side sits under-magnetised — verified coverage means field indicators at the weakest position, not the strongest.',
  },
  'form-c-developer': {
    principle: 'Nonaqueous wet developer — volatile solvent carrying suspended white powder, sprayed to form a thin uniform film that draws penetrant from flaws as the solvent flashes off.',
    practice: 'The highest-resolution developer form for field work: the solvent action lifts penetrant aggressively and the thin white film gives sharp indications, which is why solvent-removable field examinations default to it. Spray technique matters — a thin translucent-to-white coat; puddling drowns fine indications.',
    codes: 'ASME Section V Article 6 and ASTM E1417 classify developer forms (dry, water-soluble, water-suspendable, nonaqueous) and their application.',
    pitfall: 'Over-application. A heavy white blanket masks exactly the fine indications the form exists to reveal — if the surface looks painted rather than misted, the examination is degraded, not enhanced.',
  },
  'burn-through': {
    principle: 'Excess penetration melting through the root, leaving a void or globular sag on the inside of the joint — a root-side defect common in open-root pipe welding on thin wall.',
    detects: 'RT shows it plainly (localised dark area at the root, often with a light halo of sagged metal); direct visual finds it where the root is accessible; UT root evaluation flags it less legibly.',
    practice: 'A heat-input and fit-up message: too much current, too slow travel, too wide a gap. In corrosion service the sagged pocket also becomes a preferential attack site, which is why some owners treat burn-through more severely than its structural effect alone suggests.',
    codes: 'Acceptance per API 1104, ASME B31.3 or the governing construction code — criteria address it under root concavity/excess penetration families.',
    pitfall: 'Confusing burn-through with internal undercut or root concavity on film. The verdicts differ; the film reader who lumps root anomalies together applies the wrong table.',
  },
};
