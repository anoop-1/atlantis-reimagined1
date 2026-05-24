// Part 4: Certification + FFS/RBI/data + Equipment + Asset types + remaining items
import { writeFileSync } from 'fs';

const e = (slug, term, category, shortDefinition, definition, relatedTerms = [], relatedBlogs = []) => ({
  slug, term, category, shortDefinition, definition, relatedTerms, relatedBlogs
});

const entries = [
  // ───────── CERTIFICATION ─────────
  e('level-i', 'NDT Level I', 'certification',
    'An NDT Level I is qualified to perform specific calibrations, conduct specific NDT examinations following written procedures, and record results, but is not authorized to set up tests, interpret results for accept/reject, or report results without Level II/III oversight.',
    "<h2>Definition</h2><p>Level I is the entry-level NDT qualification under <a href='/glossary/snt-tc-1a'>SNT-TC-1A</a>, <a href='/glossary/iso-9712'>ISO 9712</a>, and <a href='/glossary/nas-410'>NAS 410</a>. Training requirements typically include 24–40 hours method-specific training plus a documented period of practical experience.</p>",
    ['level-ii', 'level-iii', 'snt-tc-1a', 'qualification-vs-certification'],
    ['ndt-career-progression-from-technician-to-manager']
  ),

  e('level-ii', 'NDT Level II', 'certification',
    'An NDT Level II is qualified to set up and calibrate equipment, conduct examinations to procedures, interpret and evaluate results against acceptance criteria, and report results — the standard certification level for production inspectors.',
    "<h2>Definition</h2><p>Level II is the production-inspector certification level. Most working NDT inspectors hold Level II certifications in one or more methods. Recertification is typically every 5 years (ISO 9712) or per employer written practice (SNT-TC-1A).</p>",
    ['level-i', 'level-iii', 'recertification', 'snt-tc-1a'],
    ['ut-level-ii-certification-exam-preparation']
  ),

  e('level-iii', 'NDT Level III', 'certification',
    'An NDT Level III is qualified to develop and approve procedures, establish techniques, interpret codes and specifications, designate methods to be used, train and examine Level I and II personnel, and assume technical responsibility for the NDT facility.',
    "<h2>Definition</h2><p>Level III is the senior technical authority for NDT. ASNT Level III certification under <a href='/glossary/snt-tc-1a'>SNT-TC-1A</a> requires passing a Basic exam plus a method-specific exam administered by ASNT. Multiple-method Level III is the gold standard for consulting and large-facility technical leadership.</p>",
    ['level-i', 'level-ii', 'asnt-level-iii-training', 'cp-189'],
    ['ndt-level-iii-certification-requirements-guide', 'ndt-level-iii-career-path-complete-guide']
  ),

  e('central-certification-body', 'Central Certification Body', 'certification',
    'A central certification body is an independent organization accredited under ISO 17024 that administers third-party NDT personnel certification per ISO 9712, conducting examinations and issuing certificates that are portable between employers.',
    "<h2>Definition</h2><p>Central certification (PCN, CSWIP, COFREND, ABENDI, etc.) contrasts with employer-based certification under SNT-TC-1A. Central certificates are portable between employers and are required in many regions for oil & gas, aerospace, and nuclear work.</p>",
    ['iso-9712', 'employer-based-certification', 'pcn', 'cswip'],
    []
  ),

  e('employer-based-certification', 'Employer-Based Certification', 'certification',
    'Employer-based certification is an NDT qualification model under SNT-TC-1A or CP-189 in which the employer issues the certificate based on a documented written practice, and the certificate is not portable to another employer.',
    "<h2>Definition</h2><p>Employer-based certification dominates the United States and much of Asia. It is faster and lower-cost than central certification but ties the inspector\'s qualification to a specific employer.</p>",
    ['central-certification-body', 'snt-tc-1a', 'cp-189', 'written-practice'],
    []
  ),

  e('recertification', 'Recertification', 'certification',
    'Recertification is the periodic re-examination of NDT personnel required by certification standards (typically every 5 years for Level II under ISO 9712, or per written practice for SNT-TC-1A) to maintain valid qualification.',
    "<h2>Definition</h2><p>ISO 9712 requires recertification every 5 years through documented evidence of continuous activity plus either a recertification or renewal examination. SNT-TC-1A defers to employer written practice — typically 3 years for Level I/II and 5 years for Level III.</p>",
    ['snt-tc-1a', 'iso-9712', 'qualification-vs-certification'],
    ['ndt-inspector-continuing-education-requirements']
  ),

  e('qualification-vs-certification', 'Qualification vs. Certification', 'certification',
    'Qualification is the demonstration of skills, knowledge, training, and experience required to properly perform NDT; certification is the written testimony — issued by the certifying body — that the individual is qualified.',
    "<h2>Definition</h2><p>The terms are distinct in standards language. ISO 9712 separates them: qualification = the underlying competency; certification = the certificate document. Under SNT-TC-1A both responsibilities lie with the employer.</p>",
    ['snt-tc-1a', 'iso-9712', 'recertification'],
    []
  ),

  e('written-practice', 'Written Practice', 'certification',
    'A written practice is an employer-issued documented procedure required by SNT-TC-1A and CP-189 that defines training, experience, examination, and recertification requirements specific to that employer for each NDT method and level.',
    "<h2>Definition</h2><p>The written practice is the foundational document of an employer-based certification program. It must be reviewed and approved by an ASNT Level III and kept current with the latest edition of the referenced standard.</p>",
    ['snt-tc-1a', 'cp-189', 'employer-based-certification', 'level-iii'],
    []
  ),

  e('sensory-acuity', 'Sensory Acuity Examination', 'certification',
    'Sensory acuity examination is the annual or biennial verification of an NDT candidate\'s vision and (for color-dependent methods) color perception, required by all NDT certification standards before qualifying examinations.',
    "<h2>Definition</h2><p>Vision examinations must demonstrate <a href='/glossary/near-vision-test'>near-vision acuity</a> (e.g., Jaeger J1 or J2 at 30 cm) and <a href='/glossary/color-vision-test'>color perception</a> sufficient for the method. Vision tests are required at least annually under SNT-TC-1A and ISO 9712.</p>",
    ['near-vision-test', 'color-vision-test', 'jaeger-j1', 'jaeger-j2'],
    []
  ),

  e('near-vision-test', 'Near-Vision Test', 'certification',
    'A near-vision test verifies that an NDT candidate can read small print at a defined reading distance, typically Jaeger J1 (smallest standard test type) or J2 at 30 cm with one or both eyes corrected if necessary.',
    "<h2>Definition</h2><p>Most NDT standards specify Jaeger J1 or J2 acuity at 30 cm, or equivalent Times Roman or Snellen test charts. Visual acuity must be tested at least annually for all certified NDT personnel.</p>",
    ['sensory-acuity', 'jaeger-j1', 'jaeger-j2', 'color-vision-test'],
    []
  ),

  e('color-vision-test', 'Color-Vision Test', 'certification',
    'A color-vision test verifies that an NDT candidate can distinguish and differentiate the colors used in the NDT method — particularly important for visible-dye penetrant, magnetic particle, and color-coded eddy current displays.',
    "<h2>Definition</h2><p>The Ishihara plate test is the most common color-vision screening. Some standards accept a contrast-differentiation test specific to the method being performed.</p>",
    ['sensory-acuity', 'near-vision-test'],
    []
  ),

  e('jaeger-j1', 'Jaeger J1', 'certification',
    'Jaeger J1 is the smallest standard near-vision test letter size (corresponding to approximately 20/20 vision at 30 cm), the typical minimum acuity required for NDT personnel by most certification standards.',
    "<h2>Definition</h2><p>Jaeger numbers J1 through J16 describe progressively larger test letters. J1 is the smallest. Most NDT certifications require J1 or J2 with one or both eyes corrected.</p>",
    ['jaeger-j2', 'near-vision-test', 'sensory-acuity'],
    []
  ),

  e('jaeger-j2', 'Jaeger J2', 'certification',
    'Jaeger J2 is a slightly larger near-vision test letter size than J1 (corresponding to approximately 20/25 at 30 cm), accepted by some NDT certification standards as the minimum near-vision acuity.',
    "<h2>Definition</h2><p>Some employer written practices accept J2 instead of J1, particularly for visual examination only or for non-aerospace work. SNT-TC-1A and ISO 9712 both permit J1 or J2 depending on the specific edition.</p>",
    ['jaeger-j1', 'near-vision-test', 'sensory-acuity'],
    []
  ),

  // ───────── FFS / RBI / DATA ─────────
  e('fitness-for-service-ffs', 'Fitness-for-Service (FFS)', 'data',
    'Fitness-for-service is a quantitative engineering assessment of in-service equipment with measured damage to determine whether it can continue in service safely, must be repaired, derated, or retired, performed per API 579-1 / ASME FFS-1.',
    "<h2>Definition</h2><p>FFS bridges the gap between go/no-go workmanship criteria and rigorous fracture-mechanics analysis. Level 1 assessments are conservative screening; Level 2 uses more complete data and analysis; Level 3 uses finite-element analysis and is the most rigorous. FFS is commonly applied to wall loss, pitting, crack-like flaws, fire damage, brittle fracture risk, creep, and fatigue.</p>",
    ['api-579', 'remaining-life', 'risk-based-inspection-rbi', 'mawp'],
    ['api-579-fitness-for-service-guide', 'api-579-fitness-for-service-assessment-procedures']
  ),

  e('risk-based-inspection-rbi', 'Risk-Based Inspection (RBI)', 'data',
    'Risk-based inspection is an inspection strategy in which equipment inspection scope, methods, and intervals are prioritized based on combined probability of failure and consequence of failure, optimizing inspection investment per the API 580/581 framework.',
    "<h2>Definition</h2><p>RBI uses degradation-mechanism analysis (per <a href='/glossary/api-571'>API 571</a>), inspection effectiveness, and consequence modeling to compute risk (POF × COF). High-risk items receive intensified inspection; low-risk items receive reduced inspection. RBI typically reduces total inspection cost by 20–40% while improving safety performance.</p>",
    ['api-580', 'api-581', 'api-571', 'fitness-for-service-ffs'],
    ['risk-based-inspection-rbi-implementation-guide', 'asset-integrity-management-guide-2025-rbi-digital-twins']
  ),

  e('remaining-life', 'Remaining Life', 'data',
    'Remaining life is the calculated time until equipment reaches its <a href="/glossary/retirement-thickness">retirement thickness</a> or minimum required thickness at the current measured corrosion rate, used by API 510/570/653 to set the next inspection interval.',
    "<h2>Definition</h2><p>Remaining life = (t_actual − t_retirement) / corrosion rate. The next inspection interval is the lesser of half the remaining life or the maximum code interval (10 years for piping/vessels, 20 years for tank shells).</p>",
    ['corrosion-rate', 'minimum-required-thickness', 't-min', 't-actual', 'retirement-thickness'],
    []
  ),

  e('corrosion-rate', 'Corrosion Rate', 'data',
    'Corrosion rate is the rate of wall-thickness loss in mm/year (or mils/year) calculated from successive thickness measurements, used to determine remaining life and inspection intervals under API inspection codes.',
    "<h2>Definition</h2><p>Short-term corrosion rate uses the two most recent measurements; long-term rate uses original thickness minus current thickness divided by service years. The higher of the two values is conservatively used for remaining-life calculation.</p>",
    ['remaining-life', 'minimum-required-thickness', 't-min'],
    ['ultrasonic-thickness-measurement-corrosion-monitoring-guide']
  ),

  e('minimum-required-thickness', 'Minimum Required Thickness', 'data',
    'Minimum required thickness is the wall thickness required to safely contain design pressure plus any required corrosion allowance, calculated per ASME Section VIII or B31.3 equations and used as the design-basis comparison for thickness measurements.',
    "<h2>Definition</h2><p>Minimum required thickness is one component of the <a href='/glossary/t-min'>t_min</a> definition. For pressure vessels: t_min = PR/(SE − 0.6P) for shell; for piping per B31.3: t_min = PD/[2(SE+PY)]. The actual <a href='/glossary/retirement-thickness'>retirement thickness</a> may be higher to provide a structural margin.</p>",
    ['t-min', 'retirement-thickness', 'mawp', 'remaining-life'],
    []
  ),

  e('t-min', 'T-min (Minimum Thickness)', 'data',
    'T-min is the minimum acceptable in-service wall thickness, equal to the larger of the pressure-design minimum and the structural-stability minimum, used as the threshold below which equipment must be repaired or retired.',
    "<h2>Definition</h2><p>T-min combines pressure-design minimum thickness with structural-design minimum (e.g., to resist wind/seismic loads or to maintain shell stability). API 510/570/653 inspection programs continually measure <a href='/glossary/t-actual'>t-actual</a> versus t-min to determine remaining life.</p>",
    ['t-actual', 'minimum-required-thickness', 'retirement-thickness', 'remaining-life'],
    []
  ),

  e('t-actual', 'T-Actual (Measured Thickness)', 'data',
    'T-actual is the actual measured wall thickness at a Condition Monitoring Location (CML), recorded periodically by ultrasonic thickness measurement and trended to determine corrosion rate and remaining life.',
    "<h2>Definition</h2><p>T-actual is typically the average of multiple readings at a CML, or the minimum thickness from a UT scan, depending on the inspection procedure. The lowest t-actual on a circuit governs the remaining-life calculation.</p>",
    ['t-min', 'corrosion-rate', 'remaining-life', 'ultrasonic-thickness-measurement-corrosion-monitoring-guide'],
    ['ultrasonic-thickness-measurement-corrosion-monitoring-guide']
  ),

  e('retirement-thickness', 'Retirement Thickness', 'data',
    'Retirement thickness is the wall thickness at which a pressure component must be removed from service, equal to the minimum-required thickness, sometimes increased by an additional safety margin to account for measurement uncertainty.',
    "<h2>Definition</h2><p>Retirement thickness is set by the owner-user\'s engineering authority and approved by an authorized inspector. Reaching retirement thickness triggers repair, derating, or replacement before the next operating interval.</p>",
    ['t-min', 'minimum-required-thickness', 'remaining-life', 'mawp'],
    []
  ),

  e('joint-efficiency', 'Joint Efficiency (E)', 'data',
    'Joint efficiency is a factor used in ASME pressure-vessel design that accounts for the reliability of welded joints based on the extent of NDT performed (E = 1.0 for full RT, E = 0.85 for spot RT, E = 0.70 for no RT for Type 1 joints).',
    "<h2>Definition</h2><p>Joint efficiency directly affects the required wall thickness: t = PR / (SE − 0.6P). Choosing E = 1.0 reduces required thickness but requires 100% RT or UT of all longitudinal welds. ASME Section VIII Division 1 Table UW-12 provides the full matrix.</p>",
    ['asme-section-viii', 'mawp', 'butt-weld'],
    []
  ),

  e('mawp', 'MAWP (Maximum Allowable Working Pressure)', 'data',
    'Maximum allowable working pressure is the highest gauge pressure at the top of a pressure vessel in its operating position that can be safely contained by the weakest element of the vessel, calculated from current measured thickness and used for derating decisions.',
    "<h2>Definition</h2><p>MAWP is calculated per ASME Section VIII Division 1 using current <a href='/glossary/t-actual'>t-actual</a> rather than the original design thickness. When measured thickness drops, MAWP drops; if MAWP falls below the desired operating pressure, the vessel must be repaired, derated, or retired.</p>",
    ['maximum-allowable-working-pressure', 'joint-efficiency', 'asme-section-viii', 'fitness-for-service-ffs'],
    []
  ),

  e('maximum-allowable-working-pressure', 'Maximum Allowable Working Pressure (MAWP)', 'data',
    'See <a href="/glossary/mawp">MAWP</a> — the maximum allowable working pressure of a pressure vessel as limited by the weakest pressure-retaining element at current measured thickness.',
    "<h2>Definition</h2><p>This entry is a synonym for <a href='/glossary/mawp'>MAWP</a>. The full term 'Maximum Allowable Working Pressure' is the formal ASME term; 'MAWP' is the universally used abbreviation in piping, pressure vessel, and tank standards.</p>",
    ['mawp', 'asme-section-viii', 'joint-efficiency'],
    []
  ),

  // ───────── EQUIPMENT / ASSET TYPES ─────────
  e('pressure-vessel', 'Pressure Vessel', 'asset-type',
    'A pressure vessel is a closed container designed to hold gases or liquids at a pressure substantially different from ambient, typically constructed per ASME Section VIII and inspected in service per API 510.',
    "<h2>Definition</h2><p>Pressure vessels include reactors, separators, columns, drums, accumulators, and similar equipment. NDT scope includes weld inspection during construction (per Section VIII), and in-service external (every 5 yr), internal (every 10 yr), and thickness inspection (every 10 yr) per API 510.</p>",
    ['storage-tank', 'heat-exchanger', 'api-510', 'asme-section-viii'],
    ['pressure-vessel-inspection-and-compliance']
  ),

  e('storage-tank', 'Storage Tank', 'asset-type',
    'A storage tank is a low-pressure, large-volume welded container for the storage of liquids — typically atmospheric (API 650), low pressure (API 620), or for water (AWWA D100) — inspected in service per API 653.',
    "<h2>Definition</h2><p>Storage tanks are subject to bottom corrosion (interior and underside soil-side), shell corrosion, roof leaks, settlement, and seismic damage. Internal inspection requires shutdown, cleaning, gas-freeing, and MFL floor scanning per API 653.</p>",
    ['api-650', 'api-653', 'pressure-vessel', 'magnetic-flux-leakage-mfl'],
    ['api-653-tank-inspection-guide', 'storage-tank-floor-scanning-mfl-vs-ut-comparison']
  ),

  e('heat-exchanger', 'Heat Exchanger', 'asset-type',
    'A heat exchanger is a pressure vessel that transfers heat between two fluid streams, with the shell-and-tube configuration the most common in refineries, chemical plants, and power generation, inspected primarily by tube ET/IRIS and shell-side UT.',
    "<h2>Definition</h2><p>Tube inspection methods include <a href='/glossary/bobbin-coil'>bobbin coil ET</a> (general screening), <a href='/glossary/rotating-probe'>rotating probe ET</a> (axial cracks), <a href='/glossary/internal-rotary-inspection-system-iris'>IRIS UT</a> (wall thickness), and remote-field ET (ferromagnetic tubes). Tube-to-tubesheet welds are inspected by visual, PT, MT, or PAUT.</p>",
    ['bobbin-coil', 'rotating-probe', 'internal-rotary-inspection-system-iris', 'pressure-vessel'],
    ['heat-exchanger-tube-inspection-methods-procedures', 'boiler-tube-and-heat-exchanger-inspection-methods']
  ),

  e('fired-heater', 'Fired Heater', 'asset-type',
    'A fired heater is a process unit that heats a process fluid by combustion of fuel in a firebox, with radiant- and convection-section tubes that suffer high-temperature damage mechanisms including creep, oxidation, decarburization, and erosion.',
    "<h2>Definition</h2><p>Fired heaters in refineries (crude heaters, vacuum heaters, coker heaters, reformer furnaces) require periodic infrared tube-skin temperature surveys, UT thickness measurement, replica metallography for creep, and visual inspection of tubes and refractory.</p>",
    ['creep-damage', 'thermography', 'pressure-vessel'],
    []
  ),

  e('pipeline', 'Pipeline', 'asset-type',
    'A pipeline is a long-distance pipe system for transporting fluids (crude oil, refined products, natural gas, water, chemicals), inspected by in-line inspection (ILI/pigging), direct assessment, and hydrostatic testing under API 1163, ASME B31.4, and B31.8.',
    "<h2>Definition</h2><p>Pipelines are subject to internal corrosion, external corrosion (CP failures), mechanical damage (third-party hits, dents), SCC, and weld defects. ILI tools include MFL, UT, and caliper pigs; data is analyzed per API 1163.</p>",
    ['magnetic-flux-leakage-mfl', 'asme-b31-4', 'asme-b31-8', 'api-1104', 'api-1163'],
    ['ndt-pipeline-integrity-inspection-guide', 'pipeline-corrosion-and-mechanical-damage-assessment']
  ),

  e('fpso', 'FPSO (Floating Production, Storage and Offloading)', 'asset-type',
    'An FPSO is a ship-shaped floating offshore facility that receives produced hydrocarbons from subsea wells, separates and treats them, stores the oil in its hull, and offloads to shuttle tankers — inspected to a combination of marine-class (DNV, ABS), API, and operator-specific NDT scopes.',
    "<h2>Definition</h2><p>FPSO NDT scope includes hull inspection (class-society driven), topsides process equipment (pressure vessels, piping, heat exchangers per API 510/570), risers and turret, and mooring chains. Confined-space entry, marine coatings, and salt-air corrosion drive specific NDT challenges.</p>",
    ['riser', 'jacket', 'topsides', 'wellhead'],
    ['offshore-platform-inspection-subsea-ndt-challenges']
  ),

  e('riser', 'Riser', 'asset-type',
    'A riser is the pipe segment that conveys produced hydrocarbons from the seabed to a surface facility (platform or FPSO), subject to dynamic loading, corrosion, and fatigue, inspected by ROV-deployed UT, ACFM, and visual methods.',
    "<h2>Definition</h2><p>Risers (rigid steel, flexible composite, or top-tensioned) are inspected for splash-zone corrosion, weld fatigue cracking, internal CO2/H2S corrosion, and mooring/fairing damage. Internal flexible-riser inspection uses specialized intelligent pigs.</p>",
    ['fpso', 'jacket', 'wellhead', 'guided-wave-testing-gwt'],
    []
  ),

  e('jacket', 'Jacket', 'asset-type',
    'A jacket is the steel tubular space-frame substructure of a fixed offshore platform, founded on piles and supporting the topsides above the waterline, inspected for fatigue cracking at nodes, marine growth, and CP performance.',
    "<h2>Definition</h2><p>Jacket inspection uses ROV-deployed UT, ACFM, MPI/Mag, and visual methods on the underwater portions, focused on fatigue-critical tubular joints where stress concentrations occur. Cathodic protection potential surveys verify corrosion control.</p>",
    ['fpso', 'riser', 'topsides', 'alternating-current-field-measurement-acfm'],
    ['offshore-platform-inspection-subsea-ndt-challenges']
  ),

  e('topsides', 'Topsides', 'asset-type',
    'Topsides are the surface modules of an offshore facility (platform or FPSO) above the splash zone — including process equipment, utilities, accommodation, and helideck — inspected per API 510/570/653 with the additional challenges of offshore logistics and marine environment.',
    "<h2>Definition</h2><p>Topsides inspection covers pressure vessels, piping, heat exchangers, storage tanks, structural steel, and fire & safety systems. Topsides life-extension assessments combine FFS and RBI to defer expensive shutdowns.</p>",
    ['fpso', 'jacket', 'riser', 'api-510', 'api-570'],
    []
  ),

  e('wellhead', 'Wellhead', 'asset-type',
    'A wellhead is the pressure-containing surface assembly at the top of an oil or gas well that provides the structural and pressure interface to the casing strings and supports the <a href="/glossary/christmas-tree">Christmas tree</a> and other surface equipment.',
    "<h2>Definition</h2><p>Wellhead inspection covers casing-head pressures, seal integrity, body corrosion, and bolting condition. Subsea wellheads add ROV-deployed visual and UT inspection challenges.</p>",
    ['christmas-tree', 'blow-out-preventer-bop', 'valve'],
    []
  ),

  e('christmas-tree', 'Christmas Tree', 'asset-type',
    'A Christmas tree is the vertical assembly of valves, fittings, and pressure gauges mounted on top of the wellhead that controls the flow of oil or gas from the well, named for its branching geometry.',
    "<h2>Definition</h2><p>Christmas trees are pressure-tested and visually inspected at installation and periodically thereafter. NDT focuses on valve body integrity, flange face condition, and bolting.</p>",
    ['wellhead', 'blow-out-preventer-bop', 'valve', 'flange'],
    []
  ),

  e('blow-out-preventer-bop', 'Blow-Out Preventer (BOP)', 'asset-type',
    'A blow-out preventer is a large, high-pressure valve stack installed at the wellhead during drilling and well intervention operations to seal, control, and monitor pressure to prevent the uncontrolled flow of formation fluids.',
    "<h2>Definition</h2><p>BOPs are safety-critical and subject to API 16A/Q1 manufacturing standards and API RP 53 / IADC inspection guidelines. Inspection scope includes pressure testing, MT/PT/UT of body and bolting, and elastomeric seal condition.</p>",
    ['wellhead', 'christmas-tree', 'valve'],
    []
  ),

  e('valve', 'Valve', 'asset-type',
    'A valve is a pressure-containing mechanical device that regulates, directs, or controls the flow of a fluid by opening, closing, or partially obstructing passageways, inspected by visual, MT/PT, UT, and pressure testing.',
    "<h2>Definition</h2><p>Valve NDT during manufacture covers castings (RT/UT for porosity, shrinkage), forgings (UT for inclusions, segregation), and welded valves. In service, body wall thickness, sealing-surface condition, and bolting integrity drive the inspection program.</p>",
    ['flange', 'gasket', 'pressure-vessel'],
    []
  ),

  e('flange', 'Flange', 'asset-type',
    'A flange is a forged or cast collar that provides a bolted, removable connection between pressure-piping or vessel components, with a gasket sealing the joint, inspected for surface flaws, face condition, and bolting integrity.',
    "<h2>Definition</h2><p>Flange faces are inspected by visual examination, surface roughness measurement, and (for weld-neck flanges) full UT of the welded transition. ASME B16.5 governs dimensions; ASTM A105/A182 govern materials.</p>",
    ['gasket', 'welded-joint', 'butt-weld', 'valve'],
    ['flange-face-inspection-and-leakage-assessment']
  ),

  e('gasket', 'Gasket', 'asset-type',
    'A gasket is a deformable sealing element installed between two flange faces to fill micro-irregularities and create a leak-tight pressure seal, available in spiral-wound, ring-joint, kammprofile, soft-cut, and other configurations.',
    "<h2>Definition</h2><p>Gasket selection depends on pressure-temperature class, fluid service, and flange type. Inspection of installed gaskets is essentially impossible; preventive integrity comes from bolt-up procedures, torque/tension measurement, and post-installation leak testing.</p>",
    ['flange', 'leak-testing'],
    []
  ),

  e('welded-joint', 'Welded Joint', 'equipment',
    'A welded joint is the connection produced when two metal components are fused together by welding, classified by joint type (butt, fillet, lap, corner, edge) and groove geometry (V, U, J, square), with NDT scope driven by joint type and code.',
    "<h2>Definition</h2><p>Welded-joint NDT involves visual inspection, surface methods (MT or PT), and volumetric methods (RT, UT, or PAUT) as required by the construction code. AWS A3.0 provides the standard welding terminology.</p>",
    ['butt-weld', 'fillet-weld', 'socket-weld', 'aws-d1-1'],
    ['weld-defect-classification-and-detection-methods']
  ),

  e('fillet-weld', 'Fillet Weld', 'equipment',
    'A fillet weld is a weld of triangular cross-section that joins two surfaces approximately at right angles to each other (typically T-joints, lap joints, or corner joints), characterized by leg length and throat thickness rather than by groove preparation.',
    "<h2>Definition</h2><p>Fillet welds are inspected primarily by visual and surface methods. Leg and throat dimensions are checked with fillet weld gauges. Volumetric inspection is generally not practical due to the geometric reflectors at the weld toes.</p>",
    ['butt-weld', 'socket-weld', 'welded-joint'],
    []
  ),

  e('butt-weld', 'Butt Weld', 'equipment',
    'A butt weld is a weld in a butt joint, joining two components edge-to-edge in approximately the same plane, with groove preparation (V, U, J) that allows full-penetration welding from one or both sides.',
    "<h2>Definition</h2><p>Butt welds are amenable to volumetric NDT (RT, UT, PAUT, TOFD) because the groove geometry presents the flaws to the inspection method without geometric noise. Most code-required full-penetration weld NDT applies to butt welds.</p>",
    ['fillet-weld', 'socket-weld', 'welded-joint', 'lack-of-penetration-lop'],
    ['weld-defect-classification-and-detection-methods']
  ),

  e('socket-weld', 'Socket Weld', 'equipment',
    'A socket weld is a fillet weld used in small-bore (typically up to 2") socket-welding pipe fittings, in which the pipe is inserted into a socket and the fillet weld is made around the resulting circumferential gap.',
    "<h2>Definition</h2><p>Socket welds are inspected primarily by visual examination. The required gap (typically 1.5 mm before welding) prevents through-wall liquid-metal embrittlement and accommodates thermal expansion. Socket welds are not recommended for severe cyclic service (B31.3).</p>",
    ['fillet-weld', 'butt-weld', 'welded-joint'],
    []
  ),
];

console.log(`Part 4 entries: ${entries.length}`);
writeFileSync(new URL('./part4.json', import.meta.url), JSON.stringify(entries, null, 2));
