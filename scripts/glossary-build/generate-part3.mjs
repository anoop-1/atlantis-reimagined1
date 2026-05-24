// Part 3: Defects + Standards
import { writeFileSync } from 'fs';

const e = (slug, term, category, shortDefinition, definition, relatedTerms = [], relatedBlogs = []) => ({
  slug, term, category, shortDefinition, definition, relatedTerms, relatedBlogs
});

const entries = [
  // ───────── DEFECTS ─────────
  e('crack', 'Crack', 'defect',
    'A crack is a linear discontinuity in a material with negligible opening width, resulting from stress, fabrication, or in-service damage, and is the most safety-critical defect type in pressure equipment and structures.',
    "<h2>Definition</h2><p>A crack is a planar discontinuity that grows under tensile stress, fatigue cycling, or environmental attack. Because of its sharp tip, a crack acts as a stress concentrator and is the dominant flaw type in fatigue and fracture-mechanics analysis. ASME, API, and AWS codes universally reject cracks regardless of size in welded equipment, although <a href='/glossary/fitness-for-service-ffs'>FFS</a> assessment may justify continued operation.</p><h2>Detection</h2><p>Surface cracks are detected by <a href='/glossary/penetrant-testing'>PT</a>, <a href='/glossary/magnetic-particle-testing'>MT</a>, <a href='/glossary/eddy-current-testing'>ET</a>, and <a href='/glossary/alternating-current-field-measurement-acfm'>ACFM</a>. Subsurface and embedded cracks are detected by <a href='/glossary/ultrasonic-testing'>UT</a>, <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a>, <a href='/glossary/time-of-flight-diffraction-tofd'>TOFD</a>, and <a href='/glossary/radiographic-testing'>RT</a>.</p>",
    ['fatigue-crack', 'stress-corrosion-cracking-scc', 'hydrogen-induced-cracking-hic', 'lack-of-fusion-lof'],
    ['surface-breaking-crack-detection-comprehensive-methods', 'fatigue-crack-detection-in-cyclic-loading']
  ),

  e('lack-of-fusion-lof', 'Lack of Fusion (LoF)', 'defect',
    'Lack of fusion is a weld defect in which the deposited weld metal fails to fuse with the base metal or with the previous weld pass, producing a planar discontinuity along the fusion boundary.',
    "<h2>Definition</h2><p>LoF results from inadequate heat input, contaminated joint faces, incorrect electrode angle, or improper torch manipulation. It is a planar flaw similar in mechanical effect to a crack and is universally rejected by code.</p><h2>Detection</h2><p>LoF is best detected by angle-beam <a href='/glossary/ultrasonic-testing'>UT</a> and <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a>; <a href='/glossary/radiographic-testing'>RT</a> detection depends strongly on flaw orientation relative to the beam.</p>",
    ['lack-of-penetration-lop', 'crack', 'slag-inclusion', 'weld-defect-classification-and-detection-methods'],
    ['weld-defect-classification-and-detection-methods', 'weld-inspection-acceptance-criteria-aws-vs-asme']
  ),

  e('lack-of-penetration-lop', 'Lack of Penetration (LoP)', 'defect',
    'Lack of penetration is a weld defect in which the weld root fails to extend completely through the joint thickness, leaving an unfused area at the root face.',
    "<h2>Definition</h2><p>LoP typically occurs when root gap, root face, or amperage are inadequate for full penetration in a single-sided weld. It produces a planar discontinuity at the root that significantly reduces joint strength. RT readily detects LoP as a dark straight line at the root; UT detects it as a strong corner-reflector echo.</p>",
    ['lack-of-fusion-lof', 'crack', 'butt-weld'],
    ['weld-defect-classification-and-detection-methods']
  ),

  e('slag-inclusion', 'Slag Inclusion', 'defect',
    'Slag inclusion is a non-metallic solid trapped in the weld metal during shielded-metal-arc or flux-cored welding, typically from incomplete inter-pass cleaning, appearing as irregular dark indications on a radiograph.',
    "<h2>Definition</h2><p>Slag inclusions are volumetric flaws produced when molten slag from a previous pass is not removed before the next pass deposits weld metal over it. They reduce cross-section and can initiate fatigue cracking but are generally less severe than planar flaws.</p>",
    ['porosity', 'crack', 'lack-of-fusion-lof'],
    ['weld-defect-classification-and-detection-methods']
  ),

  e('porosity', 'Porosity', 'defect',
    'Porosity is a volumetric weld defect consisting of gas-filled cavities trapped in the solidifying weld pool, classified as scattered, clustered, linear, or piping (wormhole) porosity depending on distribution and morphology.',
    "<h2>Definition</h2><p>Porosity results from contamination, inadequate shielding gas, moisture, or incorrect welding parameters. It is volumetric and typically less critical than planar flaws but is reject-by-code when it exceeds size or distribution limits in AWS D1.1 or ASME Section VIII.</p>",
    ['slag-inclusion', 'undercut', 'overlap'],
    ['weld-defect-classification-and-detection-methods']
  ),

  e('undercut', 'Undercut', 'defect',
    'Undercut is a groove melted into the base metal adjacent to the weld toe that is not filled with weld metal, reducing wall thickness and acting as a stress concentrator.',
    "<h2>Definition</h2><p>Undercut is caused by excessive welding amperage, fast travel speed, or incorrect electrode angle. AWS D1.1 limits depth to 1 mm (sometimes 0.25 mm for cyclic-loaded structures). It is detected by visual inspection with a fillet weld gauge.</p>",
    ['overlap', 'porosity', 'visual-testing'],
    []
  ),

  e('overlap', 'Overlap', 'defect',
    'Overlap is the protrusion of weld metal beyond the weld toe without fusion to the base metal, producing a notch-like discontinuity that reduces fatigue performance.',
    "<h2>Definition</h2><p>Overlap (sometimes called \"cold lap\") occurs when weld metal flows onto the base metal without proper fusion, often from low travel speed or contaminated joint surfaces. It is rejectable per AWS D1.1.</p>",
    ['undercut', 'lack-of-fusion-lof', 'visual-testing'],
    []
  ),

  e('burn-through', 'Burn-Through', 'defect',
    'Burn-through is a weld defect in which excessive heat melts completely through the joint root, creating a hole or excessive root reinforcement, common on thin-wall pipe welds.',
    "<h2>Definition</h2><p>Burn-through is caused by excessive amperage or travel speed too slow at root pass. It is visible from the inside of pipe and rejectable per ASME B31.3 and API 1104.</p>",
    ['lack-of-penetration-lop', 'undercut'],
    []
  ),

  e('weld-spatter', 'Weld Spatter', 'defect',
    'Weld spatter is small droplets of weld metal expelled during welding that adhere to the base metal adjacent to the weld, generally a cosmetic defect but capable of acting as a crack-initiation site under cyclic loading.',
    "<h2>Definition</h2><p>Spatter is caused by long arc length, incorrect polarity, or excessive amperage. It must be removed before inspection and before painting/coating, since it can produce false MT/PT indications.</p>",
    ['undercut', 'overlap'],
    []
  ),

  e('lamination', 'Lamination', 'defect',
    'A lamination is a planar separation in rolled plate or pipe parallel to the rolling direction, caused by non-metallic inclusions, gas pockets, or porosity in the original ingot, that opens up during rolling.',
    "<h2>Definition</h2><p>Laminations are mostly parallel to the plate surface and difficult to detect by angle-beam UT. They are best detected by straight-beam (0°) UT thickness scanning, which shows a mid-wall reflection. Laminations rarely affect pressure containment but matter in heavy-wall vessels and in plates that will be welded.</p>",
    ['lamellar-tearing', 'inclusion-detection-in-steel-forgings'],
    ['lamellar-tearing-inspection-in-heavy-forgings']
  ),

  e('lamellar-tearing', 'Lamellar Tearing', 'defect',
    'Lamellar tearing is a step-like cracking that occurs in the base material beneath a weld in heavy plate, parallel to the rolling plane, caused by through-thickness tensile shrinkage stress acting on non-metallic inclusions.',
    "<h2>Definition</h2><p>Lamellar tearing is a problem in T-joints and corner welds on heavy plate. It is prevented by using through-thickness ductile (Z-quality) steel and by joint designs that minimize through-thickness restraint. UT detection requires straight-beam scanning from the plate edge.</p>",
    ['lamination', 'crack'],
    ['lamellar-tearing-inspection-in-heavy-forgings']
  ),

  e('hydrogen-induced-cracking-hic', 'Hydrogen-Induced Cracking (HIC)', 'defect',
    'Hydrogen-induced cracking is a stepwise internal cracking in carbon and low-alloy steel pipelines and vessels exposed to wet H2S service, in which atomic hydrogen accumulates at inclusions and recombines, generating high internal pressure that causes blister-like cracks.',
    "<h2>Definition</h2><p>HIC is described in <a href='/glossary/api-571'>API 571</a> as a sour-service damage mechanism. HIC steel is qualified per NACE TM0284. HIC is detected by UT and identified by its characteristic step-like crack pattern oriented parallel to the rolling plane.</p>",
    ['stress-corrosion-cracking-scc', 'sulfide-stress-cracking-ssc', 'hydrogen-embrittlement', 'api-571'],
    ['hydrogen-assisted-cracking-in-welds-detection']
  ),

  e('stress-corrosion-cracking-scc', 'Stress Corrosion Cracking (SCC)', 'defect',
    'Stress corrosion cracking is the brittle cracking of a normally ductile material under the combined action of tensile stress and a specific corrosive environment, propagating along grain boundaries (intergranular) or through grains (transgranular).',
    "<h2>Definition</h2><p>SCC is a major in-service degradation mechanism: chloride SCC of austenitic stainless steel, caustic SCC of carbon steel, amine SCC, polythionic acid SCC, and ammonia SCC of copper alloys. SCC is detected by <a href='/glossary/penetrant-testing'>PT</a>, <a href='/glossary/eddy-current-testing'>ET</a>, and UT, and is described in detail in <a href='/glossary/api-571'>API 571</a>.</p>",
    ['hydrogen-induced-cracking-hic', 'sulfide-stress-cracking-ssc', 'corrosion-under-insulation-cui', 'api-571'],
    ['stress-corrosion-cracking-scc-detection-methods']
  ),

  e('sulfide-stress-cracking-ssc', 'Sulfide Stress Cracking (SSC)', 'defect',
    'Sulfide stress cracking is hydrogen-assisted brittle cracking of high-strength steels in wet H2S environments, principally affecting hardened steels above approximately 22 HRC such as fasteners, valve internals, and high-strength pipe.',
    "<h2>Definition</h2><p>SSC is governed by NACE MR0175 / ISO 15156, which limits hardness and chemistry of steels used in sour service. SSC is prevented by material selection and post-weld heat treatment that reduces hardness.</p>",
    ['hydrogen-induced-cracking-hic', 'stress-corrosion-cracking-scc', 'hydrogen-embrittlement'],
    ['hydrogen-assisted-cracking-in-welds-detection']
  ),

  e('corrosion-under-insulation-cui', 'Corrosion Under Insulation (CUI)', 'defect',
    'Corrosion under insulation is external corrosion of carbon and low-alloy steel piping and vessels hidden beneath thermal insulation, caused by water ingress that accelerates corrosion in the 60–175 °C temperature range.',
    "<h2>Definition</h2><p>CUI is one of the most costly in-service degradation mechanisms in refineries, chemical plants, and offshore facilities. It is detected by pulsed eddy current (PEC) scanning through insulation, by profile radiography, by UT under stripped insulation windows, and by insulation removal at high-risk locations per <a href='/glossary/api-583'>API 583</a> guidelines.</p>",
    ['pitting-corrosion', 'erosion-corrosion', 'stress-corrosion-cracking-scc'],
    ['corrosion-under-insulation-cui-detection-guide']
  ),

  e('pitting-corrosion', 'Pitting Corrosion', 'defect',
    'Pitting corrosion is a localized form of corrosion that produces small, deep holes (pits) in an otherwise relatively unattacked surface, especially in stainless steels and aluminum alloys exposed to chloride-containing environments.',
    "<h2>Definition</h2><p>Pitting initiates at defects in the passive film and is autocatalytic — chemistry inside the pit accelerates further attack. Pits can perforate thin-wall equipment quickly and are difficult to size by UT due to their small footprint. <a href='/glossary/eddy-current-testing'>ET</a> and visual borescopy are common detection methods.</p>",
    ['erosion-corrosion', 'galvanic-corrosion', 'corrosion-under-insulation-cui'],
    ['internal-corrosion-mapping-in-carbon-steel-piping']
  ),

  e('erosion-corrosion', 'Erosion-Corrosion', 'defect',
    'Erosion-corrosion is accelerated metal loss caused by the combined action of erosive wear (from fluid impingement, particles, or cavitation) and corrosion, typically producing smooth, grooved, or directional wall loss patterns.',
    "<h2>Definition</h2><p>Erosion-corrosion is common at pipe elbows, tees, and reducers where flow direction changes. It is detected and quantified by UT thickness grid surveys and by <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a> corrosion mapping.</p>",
    ['pitting-corrosion', 'corrosion-mapping-with-multiple-ndt-methods'],
    ['corrosion-mapping-with-multiple-ndt-methods']
  ),

  e('galvanic-corrosion', 'Galvanic Corrosion', 'defect',
    'Galvanic corrosion is the accelerated corrosion of the less-noble metal in an electrolytically connected pair of dissimilar metals exposed to an electrolyte, governed by the galvanic series and the area ratio of the two metals.',
    "<h2>Definition</h2><p>Galvanic corrosion is prevented by insulating dissimilar metals, by using sacrificial anodes, or by applying coatings to the cathode. Detection is by visual inspection and UT thickness measurement at dissimilar-metal joints.</p>",
    ['pitting-corrosion', 'erosion-corrosion'],
    []
  ),

  e('fatigue-crack', 'Fatigue Crack', 'defect',
    'A fatigue crack is a crack that initiates and propagates under cyclic loading at stress levels below the static tensile strength of the material, producing characteristic beach marks visible on the fracture surface.',
    "<h2>Definition</h2><p>Fatigue cracks initiate at stress concentrators — weld toes, notches, corrosion pits — and propagate stably until a critical size is reached and fast fracture occurs. Detection is by surface MT/PT/ET and by UT/PAUT for embedded cracks. <a href='/glossary/api-579'>API 579</a> Part 9 provides fatigue assessment procedures.</p>",
    ['crack', 'creep-damage', 'stress-corrosion-cracking-scc'],
    ['fatigue-crack-detection-in-cyclic-loading']
  ),

  e('creep-damage', 'Creep Damage', 'defect',
    'Creep damage is the time-dependent permanent deformation and eventual cracking of materials subjected to constant stress at high temperature (typically above 0.4 of the melting point in Kelvin), occurring in fired heater tubes, reformers, and high-temperature piping.',
    "<h2>Definition</h2><p>Creep damage progresses through micro-void formation, void linking, and macro-crack propagation. It is detected by metallography (replica testing), by surface MT/PT for surface-breaking creep cracks, and by UT for advanced creep cracks. <a href='/glossary/api-579'>API 579</a> Part 10 provides creep assessment procedures.</p>",
    ['fatigue-crack', 'hydrogen-embrittlement'],
    []
  ),

  e('hydrogen-embrittlement', 'Hydrogen Embrittlement', 'defect',
    'Hydrogen embrittlement is the loss of ductility and load-bearing capacity of a metal caused by the absorption of atomic hydrogen, typically affecting high-strength steels, titanium alloys, and some nickel alloys.',
    "<h2>Definition</h2><p>Hydrogen sources include cathodic protection, electroplating, pickling acids, welding moisture, and wet H2S service. Prevention includes baking after plating, low-hydrogen welding processes, and material/hardness control per NACE MR0175. Related: <a href='/glossary/hydrogen-induced-cracking-hic'>HIC</a> and <a href='/glossary/sulfide-stress-cracking-ssc'>SSC</a>.</p>",
    ['hydrogen-induced-cracking-hic', 'sulfide-stress-cracking-ssc', 'stress-corrosion-cracking-scc'],
    ['hydrogen-assisted-cracking-in-welds-detection']
  ),

  // ───────── STANDARDS ─────────
  e('asme-section-v', 'ASME Section V', 'standard',
    'ASME Section V (Nondestructive Examination) is the chapter of the ASME Boiler and Pressure Vessel Code that defines NDT methods, procedures, and personnel qualification requirements for examinations referenced by other ASME construction and in-service codes.',
    "<h2>Definition</h2><p>ASME Section V contains 14 Articles covering the major NDT methods: visual (Art. 9), liquid penetrant (Art. 6), magnetic particle (Art. 7), radiographic (Art. 2), ultrasonic (Art. 4 and 5), eddy current (Art. 8), acoustic emission, leak testing, and more. Sections V references SE-standards (ASTM-derived) and mandatory and non-mandatory appendices.</p><h2>Personnel Qualification</h2><p>Section V references <a href='/glossary/snt-tc-1a'>SNT-TC-1A</a>, <a href='/glossary/cp-189'>CP-189</a>, and ISO 9712 for personnel certification, and requires a written practice that identifies which standard the employer follows.</p>",
    ['asme-section-viii', 'asme-ix', 'asme-xi', 'snt-tc-1a', 'cp-189'],
    ['asme-section-v-ndt-requirements-guide', 'asme-section-v-article-4-ut-requirements-explained']
  ),

  e('asme-section-viii', 'ASME Section VIII', 'standard',
    'ASME Section VIII is the ASME BPVC chapter covering rules for construction of pressure vessels, with Division 1 (design by rule), Division 2 (design by analysis), and Division 3 (high-pressure vessels), each invoking ASME Section V NDT requirements.',
    "<h2>Definition</h2><p>Section VIII Division 1 is the most widely used pressure vessel construction code in the world. It specifies design, materials, fabrication, welding, NDT, and pressure testing requirements. NDT extent depends on joint type, material, and the chosen <a href='/glossary/joint-efficiency'>joint efficiency</a> (1.0 requires full radiography).</p>",
    ['asme-section-v', 'asme-ix', 'joint-efficiency', 'pressure-vessel'],
    ['asme-section-viii-division-1-pressure-vessel-ndt']
  ),

  e('asme-ix', 'ASME Section IX', 'standard',
    'ASME Section IX is the welding and brazing qualification code, defining requirements for Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and welder/operator performance qualification used by all ASME construction codes.',
    "<h2>Definition</h2><p>Section IX classifies welding variables as essential, supplementary essential, and non-essential, and defines which require requalification when changed. Although Section IX itself is not an NDT code, its PQR records require RT or UT acceptance and welder qualification is verified by RT or bend test.</p>",
    ['asme-section-v', 'asme-section-viii', 'aws-d1-1'],
    []
  ),

  e('asme-xi', 'ASME Section XI', 'standard',
    'ASME Section XI is the In-Service Inspection (ISI) code for nuclear power plant components, defining periodic inspection intervals, NDT methods, acceptance criteria, and repair/replacement rules for Class 1, 2, and 3 nuclear pressure equipment.',
    "<h2>Definition</h2><p>Section XI defines 10-year ISI intervals with specific inspection scopes. Performance Demonstration Initiative (PDI) qualification is required for UT examiners on critical nuclear components.</p>",
    ['asme-section-v', 'asme-nb-5000-in-service-inspection-requirements'],
    ['nuclear-power-plant-ndt-strict-standards-compliance']
  ),

  e('asme-b31-1', 'ASME B31.1 Power Piping', 'standard',
    'ASME B31.1 is the power piping code covering design, fabrication, installation, NDT, examination, and testing of piping in electric power generating stations, industrial plants, and central and district heating plants.',
    "<h2>Definition</h2><p>B31.1 references ASME Section V for NDT methods, requires 100% RT for certain Category D and certain pressures, and specifies acceptance criteria for weld defects in power plant piping.</p>",
    ['asme-b31-3', 'asme-b31-4', 'asme-b31-8'],
    ['asme-b31-3-process-piping-requirements']
  ),

  e('asme-b31-3', 'ASME B31.3 Process Piping', 'standard',
    'ASME B31.3 is the process piping code covering chemical plants, petroleum refineries, and similar process facilities, defining fluid service categories (Category D, Normal Fluid Service, Category M, High Pressure, Elevated Temperature) each with specific NDT requirements.',
    "<h2>Definition</h2><p>B31.3 is the most widely used piping code in the chemical, petrochemical, and refining industries. NDT extent ranges from visual only (Category D) to 100% RT or UT (Category M and High Pressure).</p>",
    ['asme-b31-1', 'asme-b31-4', 'asme-b31-8', 'api-570'],
    ['asme-b31-3-process-piping-requirements']
  ),

  e('asme-b31-8', 'ASME B31.8 Gas Transmission and Distribution Piping', 'standard',
    'ASME B31.8 is the code for gas transmission and distribution piping systems, including pipelines and onshore station piping, defining NDT, hydrostatic testing, and integrity management for natural gas service.',
    "<h2>Definition</h2><p>B31.8 governs natural gas pipeline design and operation in the United States, supplemented by 49 CFR Part 192. NDT requirements include 100% RT or UT for certain class locations and a comprehensive integrity management program.</p>",
    ['asme-b31-4', 'api-1104', 'api-1163'],
    []
  ),

  e('asme-b31-4', 'ASME B31.4 Liquid Pipelines', 'standard',
    'ASME B31.4 is the code for transportation of liquids by pipelines, including crude oil, refined petroleum products, liquid alcohols, ammonia, and CO2, defining weld NDT requirements integrated with API 1104.',
    "<h2>Definition</h2><p>B31.4 governs hazardous-liquid pipelines in the United States and is supplemented by 49 CFR Part 195. It references API 1104 for weld acceptance and API 1163 for in-line inspection.</p>",
    ['asme-b31-8', 'api-1104', 'api-1163'],
    []
  ),

  e('api-510', 'API 510 Pressure Vessel Inspection Code', 'standard',
    'API 510 is the inspection, repair, alteration, and rerating code for in-service pressure vessels in refineries and chemical plants, requiring periodic external and internal inspection by certified API 510 inspectors.',
    "<h2>Definition</h2><p>API 510 defines inspection intervals based on remaining life (no more than half of remaining life or 10 years for external, 10 years or half remaining life for internal), and uses RBI per <a href='/glossary/api-580'>API 580</a> to optimize intervals. Inspectors must hold valid API 510 certification.</p>",
    ['api-570', 'api-653', 'api-580', 'api-579', 'pressure-vessel'],
    ['api-510-pressure-vessel-inspection-code']
  ),

  e('api-570', 'API 570 Piping Inspection Code', 'standard',
    'API 570 is the inspection, repair, alteration, and rerating code for in-service piping systems in refineries and chemical plants, defining inspection intervals based on piping class and corrosion rate, and requiring API 570 inspector certification.',
    "<h2>Definition</h2><p>API 570 classifies piping into Class 1 (highest risk), Class 2, Class 3, and Class 4. Inspection intervals (external 5 yr, thickness 10 yr or half remaining life) and CML (Condition Monitoring Locations) are required.</p>",
    ['api-510', 'api-653', 'asme-b31-3', 'api-580'],
    ['api-570-piping-inspection-code-requirements']
  ),

  e('api-571', 'API 571 Damage Mechanisms', 'standard',
    'API 571 is the recommended practice describing damage mechanisms affecting refining and petrochemical equipment, including general/uniform corrosion, localized corrosion, environmentally assisted cracking, metallurgical degradation, mechanical damage, and high-temperature damage.',
    "<h2>Definition</h2><p>API 571 is the foundational document for understanding in-service degradation. It catalogs over 60 damage mechanisms, each with description, affected materials, critical factors, detection methods, and prevention strategies. <a href='/glossary/risk-based-inspection-rbi'>RBI</a> programs reference API 571 to identify likely degradation paths.</p>",
    ['risk-based-inspection-rbi', 'api-580', 'api-581', 'corrosion-under-insulation-cui'],
    ['api-571-damage-mechanisms-complete-industry-guide']
  ),

  e('api-579', 'API 579-1 / ASME FFS-1 Fitness-for-Service', 'standard',
    'API 579-1 / ASME FFS-1 is the recommended practice for quantitative engineering assessment of in-service flaws and damage, providing Level 1, 2, and 3 assessment procedures for brittle fracture, general and local metal loss, pitting, blisters, crack-like flaws, creep, and fatigue.',
    "<h2>Definition</h2><p>API 579 lets inspectors decide whether equipment with measured damage can continue in service, must be derated, must be repaired, or must be retired. Level 1 is conservative and uses simple charts; Level 3 uses finite element analysis. FFS is invoked when measured damage exceeds API 510 / 570 / 653 limits.</p>",
    ['fitness-for-service-ffs', 'remaining-life', 'mawp', 'api-571'],
    ['api-579-fitness-for-service-assessment-procedures', 'api-579-fitness-for-service-guide']
  ),

  e('api-580', 'API 580 Risk-Based Inspection', 'standard',
    'API 580 is the recommended practice defining the elements, framework, and management responsibilities for a Risk-Based Inspection (RBI) program, in which inspection intervals and methods are prioritized by combined probability and consequence of failure.',
    "<h2>Definition</h2><p>API 580 provides the management framework; <a href='/glossary/api-581'>API 581</a> provides the quantitative methodology. RBI shifts inspection effort from time-based intervals to risk-targeted scopes, typically reducing total inspection cost while improving safety.</p>",
    ['risk-based-inspection-rbi', 'api-581', 'api-571', 'api-510'],
    ['risk-based-inspection-rbi-implementation-guide']
  ),

  e('api-581', 'API 581 Risk-Based Inspection Methodology', 'standard',
    'API 581 is the recommended practice that provides the quantitative methodology — probability of failure and consequence of failure calculations — for a Risk-Based Inspection program implemented under API 580.',
    "<h2>Definition</h2><p>API 581 calculates probability of failure from damage mechanism susceptibility, inspection effectiveness, and equipment age, and calculates consequence of failure from fluid inventory, toxicity, and area impact. Risk = POF × COF determines the optimal inspection interval and effectiveness.</p>",
    ['api-580', 'risk-based-inspection-rbi'],
    ['risk-based-inspection-rbi-implementation-guide']
  ),

  e('api-650', 'API 650 Welded Tanks for Oil Storage', 'standard',
    'API 650 is the construction code for welded steel atmospheric storage tanks, defining materials, design, fabrication, welding, examination, and testing requirements for new tank construction.',
    "<h2>Definition</h2><p>API 650 specifies NDT requirements including 100% RT of shell vertical seams (or random per joint efficiency choice), 100% MT/PT of shell-to-bottom welds, and vacuum-box testing of bottom seams. Inspector certification is per API 653 for in-service work.</p>",
    ['api-653', 'storage-tank', 'awwa-d100'],
    []
  ),

  e('api-653', 'API 653 Tank Inspection, Repair, Alteration, and Reconstruction', 'standard',
    'API 653 is the inspection, repair, alteration, and reconstruction code for above-ground welded steel storage tanks built to API 650, defining periodic external (5 yr), ultrasonic (10 yr), and internal (typically 10 yr) inspection intervals.',
    "<h2>Definition</h2><p>API 653 inspectors must be certified by API. Internal inspection includes floor scanning by MFL or UT, shell thickness mapping, and roof inspection. Floor minimum thickness calculations and remaining life determination use API 653 methodology.</p>",
    ['api-650', 'storage-tank', 'magnetic-flux-leakage-mfl', 't-min'],
    ['api-653-tank-inspection-guide', 'api-653-storage-tank-inspector-certification']
  ),

  e('api-1104', 'API 1104 Welding of Pipelines and Related Facilities', 'standard',
    'API 1104 is the welding code for pipelines and related facilities transporting liquids, gases, or slurries, defining procedure and welder qualification, weld inspection (RT, AUT), and acceptance criteria for cross-country and station piping.',
    "<h2>Definition</h2><p>API 1104 acceptance criteria are based on workmanship for most flaws and on engineering critical assessment (ECA, Annex A) for fatigue-critical situations. Automated UT (AUT) per Annex E is now common for pipeline girth welds, often replacing RT.</p>",
    ['asme-b31-4', 'asme-b31-8', 'automated-ultrasonic-testing-aut'],
    []
  ),

  e('api-1163', 'API 1163 In-Line Inspection Systems Qualification', 'standard',
    'API 1163 is the standard for qualifying in-line inspection (ILI) tools and processes for hazardous-liquid and gas pipelines, defining tool performance specifications, dig verification programs, and reporting requirements.',
    "<h2>Definition</h2><p>API 1163 ensures that ILI vendor performance claims (detection threshold, sizing accuracy, location accuracy) are demonstrated through pull-test verification or in-line dig validation. ILI runs every 5–10 years are required by US PHMSA for high-consequence areas.</p>",
    ['magnetic-flux-leakage-mfl', 'asme-b31-8', 'asme-b31-4'],
    ['pipeline-corrosion-and-mechanical-damage-assessment']
  ),

  e('awwa-d100', 'AWWA D100 Welded Carbon Steel Tanks for Water Storage', 'standard',
    'AWWA D100 is the welded carbon steel tank standard for water storage, defining materials, design, fabrication, welding, and NDT requirements for elevated, standpipe, and ground-supported water storage tanks.',
    "<h2>Definition</h2><p>AWWA D100 specifies seismic design, ladder/access requirements, and weld NDT (RT extent depends on joint configuration and material). It is the water-industry counterpart to API 650.</p>",
    ['api-650', 'storage-tank'],
    []
  ),

  e('aws-d1-1', 'AWS D1.1 Structural Welding Code — Steel', 'standard',
    'AWS D1.1 is the structural welding code for steel, covering buildings, bridges, towers, and other structures, defining procedure/welder qualification, NDT (visual, MT, PT, UT, RT), and weld acceptance criteria for statically and cyclically loaded structures.',
    "<h2>Definition</h2><p>AWS D1.1 includes detailed acceptance criteria for cracks (always rejectable), porosity, slag inclusions, fusion defects, and undercut, differing for statically loaded and cyclically loaded connections. UT acceptance Annex K is the most common UT inspection criterion in North American structural fabrication.</p>",
    ['aws-d1-5', 'asme-ix', 'visual-testing'],
    ['aws-d1-1-weld-acceptance-criteria-comprehensive-guide']
  ),

  e('aws-d1-5', 'AWS D1.5 Bridge Welding Code', 'standard',
    'AWS D1.5 is the bridge welding code, jointly published by AWS and AASHTO, defining procedure and welder qualification, materials, NDT (with stricter acceptance than D1.1), and fabrication requirements for highway and railway bridges.',
    "<h2>Definition</h2><p>AWS D1.5 acceptance is stricter than D1.1 because bridges are fatigue-critical structures. PAUT per Annex K is replacing RT for bridge girth welds in recent years.</p>",
    ['aws-d1-1', 'phased-array-ultrasonic-testing-paut'],
    ['bridge-and-structural-steel-inspection']
  ),

  e('iso-9712', 'ISO 9712 NDT Personnel Qualification', 'standard',
    'ISO 9712 is the international standard for qualification and certification of NDT personnel, defining a third-party central-certification model in which an accredited body conducts written and practical examinations independent of the employer.',
    "<h2>Definition</h2><p>ISO 9712 contrasts with employer-based certification under <a href='/glossary/snt-tc-1a'>SNT-TC-1A</a>. ISO 9712 certificates are valid for 5 years and require periodic recertification. Schemes operating under ISO 9712 include <a href='/glossary/pcn'>PCN</a> (UK) and <a href='/glossary/cswip'>CSWIP</a> (UK), COFREND (France), and many national schemes.</p>",
    ['snt-tc-1a', 'cp-189', 'pcn', 'cswip', 'central-certification-body'],
    ['iso-9712-vs-asnt-snt-tc-1a-certification-comparison']
  ),

  e('iso-3452', 'ISO 3452 Penetrant Testing', 'standard',
    'ISO 3452 is the international standard series for liquid penetrant testing, defining general principles, materials testing, equipment, and reference test blocks for both Type I (fluorescent) and Type II (visible) penetrant systems.',
    "<h2>Definition</h2><p>ISO 3452-1 covers general principles, ISO 3452-2 covers penetrant materials testing, and ISO 3452-3 covers reference test blocks. It is the European counterpart to ASME Section V Article 6 and ASTM E165.</p>",
    ['penetrant-testing', 'iso-9712', 'iso-17636'],
    []
  ),

  e('iso-17636', 'ISO 17636 Radiographic Testing of Welds', 'standard',
    'ISO 17636 is the international standard for radiographic testing of fusion-welded joints, comprising Part 1 (X-ray and gamma-ray techniques with film) and Part 2 (digital detectors), and defining classes A and B based on sensitivity and resolution.',
    "<h2>Definition</h2><p>ISO 17636 is the European/international counterpart to ASME Section V Article 2 and API 1104. It defines exposure techniques, IQI selection, and image quality requirements for class A (general) and class B (improved sensitivity) examinations.</p>",
    ['radiographic-testing', 'iso-17640', 'asme-section-v'],
    ['iso-11699-radiography-film-and-processing-standards']
  ),

  e('iso-17640', 'ISO 17640 Ultrasonic Testing of Welds', 'standard',
    'ISO 17640 is the international standard for ultrasonic testing of fusion-welded joints, defining techniques (level A basic, B intermediate, C advanced, D special procedures) and acceptance criteria for weld inspection.',
    "<h2>Definition</h2><p>ISO 17640 references the testing technique level (A, B, C, D) by application — choice determined by criticality, NDT extent, and material. Acceptance criteria are given by ISO 11666 and ISO 23279.</p>",
    ['ultrasonic-testing', 'iso-23279', 'iso-17636'],
    []
  ),

  e('iso-9934', 'ISO 9934 Magnetic Particle Testing', 'standard',
    'ISO 9934 is the international standard for magnetic particle testing, comprising Part 1 (general principles), Part 2 (detection media), and Part 3 (equipment), defining the European/international approach to MT inspection.',
    "<h2>Definition</h2><p>ISO 9934 is the counterpart to ASTM E709 / E1444 and ASME Section V Article 7. Pie-gauge and Bertholt indicator field-strength verification are addressed.</p>",
    ['magnetic-particle-testing', 'iso-9712'],
    []
  ),

  e('iso-23279', 'ISO 23279 Characterization of Indications in Welds', 'standard',
    'ISO 23279 is the international standard for characterization of ultrasonic indications in welds as planar or non-planar, used to apply differential acceptance criteria from ISO 11666 to the most safety-critical (planar) discontinuities.',
    "<h2>Definition</h2><p>ISO 23279 uses scan pattern analysis, length-to-amplitude relationships, and echo-dynamic behavior to distinguish planar (crack-like, LoF) from non-planar (porosity, slag) indications. Planar indications are rejected at lower amplitudes.</p>",
    ['iso-17640', 'phased-array-ultrasonic-testing-paut'],
    []
  ),

  e('iso-13588', 'ISO 13588 Phased Array Ultrasonic Testing', 'standard',
    'ISO 13588 is the international standard for automated and semi-automated phased array ultrasonic testing of fusion welds, defining technique levels, scan plan, calibration, and characterization requirements for PAUT.',
    "<h2>Definition</h2><p>ISO 13588 is referenced by codes that accept PAUT as an alternative to RT. It defines technique levels A, B, C, D paralleling ISO 17640, and requires written procedures and personnel qualified for PAUT per ISO 9712.</p>",
    ['phased-array-ultrasonic-testing-paut', 'iso-17640'],
    ['phased-array-ultrasonic-testing-paut-guide']
  ),

  e('en-12668', 'EN 12668 Characterization and Verification of UT Equipment', 'standard',
    'EN 12668 is the European standard for characterization and verification of ultrasonic test equipment, comprising Part 1 (instruments), Part 2 (probes), and Part 3 (combined equipment), used for the periodic functional verification of UT systems.',
    "<h2>Definition</h2><p>EN 12668 specifies test methods for instrument linearity, dynamic range, gain accuracy, probe sensitivity, beam profile, and time-base linearity. Annual instrument verification per EN 12668 is required in most quality systems.</p>",
    ['ultrasonic-testing', 'iso-17640'],
    []
  ),

  e('astm-e94', 'ASTM E94 Standard Guide for Radiographic Examination', 'standard',
    'ASTM E94 is the standard guide for radiographic examination using industrial X-ray and gamma-ray sources, covering exposure technique, IQI selection, radiation safety, and image quality verification.',
    "<h2>Definition</h2><p>ASTM E94 is a foundational North American RT standard often referenced by ASME and API codes. It defines procedural requirements but does not specify acceptance criteria, which are given by the construction code.</p>",
    ['astm-e165', 'astm-e1417', 'astm-e1444', 'radiographic-testing'],
    []
  ),

  e('astm-e165', 'ASTM E165 Liquid Penetrant Examination', 'standard',
    'ASTM E165 is the standard practice for liquid penetrant testing, defining Type I (fluorescent), Type II (visible) penetrants, and Methods A (water-washable), B (post-emulsifiable lipophilic), C (solvent-removable), D (post-emulsifiable hydrophilic), and developer forms a–e.',
    "<h2>Definition</h2><p>ASTM E165 is the principal North American PT standard, referenced by ASME Section V Article 6 for general industrial use. <a href='/glossary/astm-e1417'>ASTM E1417</a> covers aerospace and other high-sensitivity applications.</p>",
    ['astm-e1417', 'penetrant-testing', 'iso-3452', 'developer'],
    []
  ),

  e('astm-e709', 'ASTM E709 Standard Guide for Magnetic Particle Testing', 'standard',
    'ASTM E709 is the standard guide for magnetic particle testing, defining principles, techniques, materials, equipment, and process control for MT examination of ferromagnetic materials.',
    "<h2>Definition</h2><p>ASTM E709 is a guide (informational); <a href='/glossary/astm-e1444'>ASTM E1444</a> is the practice (mandatory) covering aerospace and high-criticality applications.</p>",
    ['astm-e1444', 'magnetic-particle-testing', 'iso-9934'],
    []
  ),

  e('astm-e1417', 'ASTM E1417 Liquid Penetrant Testing', 'standard',
    'ASTM E1417 is the standard practice for liquid penetrant testing, used principally for aerospace and other high-criticality applications, specifying tighter process controls than ASTM E165.',
    "<h2>Definition</h2><p>E1417 specifies sensitivity levels 1/2/3/4 for fluorescent penetrants, requires daily system performance checks with Type 1 panels, and tighter water-rinse pressure and dwell-time controls.</p>",
    ['astm-e165', 'penetrant-testing', 'nas-410'],
    []
  ),

  e('astm-e1444', 'ASTM E1444 Magnetic Particle Testing', 'standard',
    'ASTM E1444 is the standard practice for magnetic particle testing of aerospace and other high-criticality components, specifying tighter process control than ASTM E709 — including daily system performance checks and verified UV-A intensity.',
    "<h2>Definition</h2><p>E1444 requires Ketos ring quarterly checks, daily QQI shim or pie-gauge field-strength verification, and a documented written procedure. It is the MT counterpart to E1417 for aerospace.</p>",
    ['astm-e709', 'magnetic-particle-testing', 'nas-410'],
    []
  ),

  e('snt-tc-1a', 'SNT-TC-1A', 'standard',
    'ASNT SNT-TC-1A is the recommended practice for personnel qualification and certification in nondestructive testing, defining an employer-based certification model in which the employer issues a written practice and qualifies its own personnel using ASNT-recommended training hours and examinations.',
    "<h2>Definition</h2><p>SNT-TC-1A is the most widely used personnel certification standard in North America. The employer is the certifying agency; certifications are not portable between employers. Contrast with <a href='/glossary/iso-9712'>ISO 9712</a> third-party central certification and with <a href='/glossary/cp-189'>ASNT CP-189</a>.</p>",
    ['cp-189', 'iso-9712', 'level-i', 'level-ii', 'level-iii', 'written-practice'],
    ['asnt-snt-tc-1a-vs-cp-189-comparison', 'asnt-snt-tc-1a-certification-requirements']
  ),

  e('cp-189', 'ASNT CP-189', 'standard',
    'ASNT CP-189 is the standard for qualification and certification of NDT personnel that mandates (rather than recommends) requirements — including a minimum 30-question general examination from an ASNT-furnished question pool — making it the most rigorous employer-based certification standard.',
    "<h2>Definition</h2><p>CP-189 is referenced by ASME Section V as an alternative to SNT-TC-1A. It is structurally similar but more prescriptive — required training hours, examination question pools from ASNT, and stricter audit provisions.</p>",
    ['snt-tc-1a', 'iso-9712', 'level-iii'],
    ['asnt-snt-tc-1a-vs-cp-189-comparison']
  ),

  e('nas-410', 'NAS 410 / EN 4179 Aerospace NDT Personnel Qualification', 'standard',
    'NAS 410 is the aerospace-industry standard for qualification and certification of NDT personnel in the manufacture and overhaul of aerospace products, harmonized with EN 4179 in Europe.',
    "<h2>Definition</h2><p>NAS 410 supersedes the older MIL-STD-410 for commercial aerospace NDT. It defines Level I, II, and III qualification analogous to SNT-TC-1A but with tighter training-hour requirements and required experience for safety-critical aerospace inspection. EN 4179 is the European edition (identical content).</p>",
    ['snt-tc-1a', 'iso-9712', 'level-iii', 'astm-e1417', 'astm-e1444'],
    ['aerospace-composite-inspection-ndt-methods-guide']
  ),

  e('pcn', 'PCN (Personnel Certification in Non-Destructive Testing)', 'standard',
    'PCN is the UK third-party NDT personnel certification scheme operated by the British Institute of NDT (BINDT) under ISO 9712, providing internationally-recognized Level I, II, and III certificates valid for 5 years.',
    "<h2>Definition</h2><p>PCN certificates are recognized in oil & gas, aerospace, and structural industries worldwide. They are particularly prevalent in North Sea operations, where PCN certification is often a contractual requirement.</p>",
    ['iso-9712', 'cswip', 'level-iii'],
    []
  ),

  e('cswip', 'CSWIP (Certification Scheme for Welding and Inspection Personnel)', 'standard',
    'CSWIP is the UK third-party certification scheme operated by TWI Certification for welding inspectors, NDT personnel, and other welding-industry roles, widely recognized in oil & gas and offshore industries worldwide.',
    "<h2>Definition</h2><p>CSWIP 3.0, 3.1, 3.2, and 3.2.2 are the most common welding-inspector grades, parallel to AWS Certified Welding Inspector (CWI). CSWIP NDT certifications operate under ISO 9712 like PCN.</p>",
    ['pcn', 'iso-9712', 'level-ii'],
    ['cwi-certification-requirements-cost-career-impact']
  ),
];

console.log(`Part 3 entries: ${entries.length}`);
writeFileSync(new URL('./part3.json', import.meta.url), JSON.stringify(entries, null, 2));
