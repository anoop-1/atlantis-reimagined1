// Part 2: RT-specific + MT-specific + PT-specific + ET-specific
import { writeFileSync } from 'fs';

const e = (slug, term, category, shortDefinition, definition, relatedTerms = [], relatedBlogs = []) => ({
  slug, term, category, shortDefinition, definition, relatedTerms, relatedBlogs
});

const entries = [
  // ───────── RT-SPECIFIC ─────────
  e('x-ray-tube', 'X-Ray Tube', 'equipment',
    'An X-ray tube is an electrically powered radiation source that produces X-rays by accelerating electrons across a high-voltage gap and bombarding a tungsten target inside a vacuum envelope.',
    "<h2>Definition</h2><p>An X-ray tube generates penetrating ionizing radiation when electrons are accelerated through a high voltage (typically 50–450 kV for industrial RT) and strike a tungsten target, producing bremsstrahlung X-rays. The tube can be switched off, eliminating the radiation hazard when not in use — a major safety advantage over isotope sources.</p><h2>Technical Context</h2><p>kV controls energy and penetration; mA controls intensity and exposure time. Higher kV is required for thicker or denser materials but reduces image contrast. Modern microfocus and minifocus tubes provide small focal spots for low <a href='/glossary/geometric-unsharpness'>geometric unsharpness</a>.</p><h2>When It Is Used</h2><ul><li>Field and shop radiography of welds, castings, and forgings</li><li>Digital and computed radiography systems</li><li>Real-time radiography</li></ul><h2>Related Standards</h2><p>ASME Section V Article 2, <a href='/glossary/astm-e94'>ASTM E94</a>.</p>",
    ['gamma-source', 'computed-radiography-cr', 'digital-radiography-dr', 'geometric-unsharpness', 'source-to-film-distance-sfd'],
    ['radiography-vs-digital-radiography-complete-comparison']
  ),

  e('gamma-source', 'Gamma Source', 'equipment',
    'A gamma source is a sealed radioactive isotope used in industrial radiography to produce penetrating gamma rays for inspecting thick or remote components without an external power supply.',
    "<h2>Definition</h2><p>A gamma source is a sealed radioactive isotope housed in a shielded exposure device (camera). Common industrial isotopes are <a href='/glossary/ir-192'>Iridium-192</a>, <a href='/glossary/co-60'>Cobalt-60</a>, and <a href='/glossary/se-75'>Selenium-75</a>. Unlike an X-ray tube, a gamma source cannot be turned off and decays continuously, requiring strict <a href='/glossary/alara'>ALARA</a> handling.</p><h2>Technical Context</h2><p>Activity is measured in Curies (Ci) or Becquerels (Bq). Source strength determines exposure time; energy spectrum determines penetration. Gamma radiography offers portability and high penetration in field conditions.</p>",
    ['ir-192', 'co-60', 'se-75', 'half-value-layer-hvl', 'alara', 'radiation-safety-officer-rso'],
    ['radiography-technician-certification-requirements']
  ),

  e('ir-192', 'Iridium-192 (Ir-192)', 'equipment',
    'Iridium-192 is the most common industrial radiography isotope, providing gamma energies around 0.3–0.6 MeV and a 74-day half-life, suitable for inspecting steel between approximately 10 mm and 75 mm.',
    "<h2>Definition</h2><p>Ir-192 is a man-made radioactive isotope with a 74-day half-life and an average gamma energy of about 0.38 MeV. It is the workhorse isotope for industrial field radiography on carbon steel weldments and pipework in the typical 10–75 mm thickness range.</p><h2>Technical Context</h2><p>Strength decays to half every 74 days, so exposure times must be recalculated frequently. The <a href='/glossary/half-value-layer-hvl'>HVL</a> in steel is approximately 13 mm.</p>",
    ['gamma-source', 'co-60', 'se-75', 'half-value-layer-hvl'],
    ['radiography-vs-digital-radiography-complete-comparison']
  ),

  e('co-60', 'Cobalt-60 (Co-60)', 'equipment',
    'Cobalt-60 is a high-energy gamma source (1.17 and 1.33 MeV) with a 5.27-year half-life, used for radiography of thick steel sections from approximately 50 mm to 200 mm where Ir-192 cannot penetrate.',
    "<h2>Definition</h2><p>Co-60 emits two gamma rays at 1.17 and 1.33 MeV — much higher than Ir-192 — giving deep penetration suitable for thick-walled pressure vessels and large castings. Its 5.27-year half-life means slower decay and longer source life.</p>",
    ['gamma-source', 'ir-192', 'half-value-layer-hvl'],
    []
  ),

  e('se-75', 'Selenium-75 (Se-75)', 'equipment',
    'Selenium-75 is a low-energy gamma isotope (average 0.22 MeV, 120-day half-life) used for radiography of thin steel sections from approximately 5 mm to 30 mm, offering better contrast than Ir-192 on light wall material.',
    "<h2>Definition</h2><p>Se-75 fills the gap between X-ray tubes and Ir-192 on thin steel weldments, producing better image contrast on small-diameter pipe and light-wall vessels.</p>",
    ['gamma-source', 'ir-192', 'co-60'],
    []
  ),

  e('image-quality-indicator-iqi', 'Image Quality Indicator (IQI)', 'equipment',
    'An image quality indicator (IQI), also called a penetrameter, is a device placed on the source side of a radiographic test piece to verify image sensitivity and resolution by displaying known features such as wires or holes.',
    "<h2>Definition</h2><p>An IQI is a calibrated device of known thickness, wire diameters, or hole dimensions placed on the part being radiographed. The smallest visible IQI feature establishes the demonstrated sensitivity of the radiograph. Two main styles are used worldwide: <a href='/glossary/wire-iqi'>wire IQIs</a> per ISO/EN and <a href='/glossary/hole-iqi'>hole-type IQIs</a> per ASTM/ASME.</p><h2>When It Is Used</h2><p>Every radiograph requires an IQI as required by <a href='/glossary/asme-section-v'>ASME Section V</a>, <a href='/glossary/api-1104'>API 1104</a>, and <a href='/glossary/iso-17636'>ISO 17636</a>.</p>",
    ['wire-iqi', 'hole-iqi', 'sensitivity', 'asme-section-v'],
    []
  ),

  e('wire-iqi', 'Wire IQI', 'equipment',
    'A wire IQI is a set of parallel wires of progressively decreasing diameter encased in a clear plastic envelope, used per ISO/EN standards to verify radiographic sensitivity.',
    "<h2>Definition</h2><p>The wire IQI contains 6–7 wires of standard diameters per ISO 19232-1 / EN 462. Sensitivity is expressed by identifying the thinnest wire visible.</p>",
    ['image-quality-indicator-iqi', 'hole-iqi', 'iso-17636'],
    []
  ),

  e('hole-iqi', 'Hole-Type IQI', 'equipment',
    'A hole-type IQI is a thin plaque with three drilled holes of diameters 1T, 2T, and 4T (where T is the plaque thickness), used per ASTM/ASME standards to demonstrate radiographic sensitivity.',
    "<h2>Definition</h2><p>The hole IQI plaque has thickness T = 2% of the test piece thickness; the three holes (1T, 2T, 4T) provide the sensitivity reference. ASME Section V typically requires the 2T hole to be visible.</p>",
    ['image-quality-indicator-iqi', 'wire-iqi', 'asme-section-v'],
    []
  ),

  e('geometric-unsharpness', 'Geometric Unsharpness (Ug)', 'physics',
    'Geometric unsharpness is the radiographic image blur caused by the finite size of the radiation source, calculated as Ug = F × t / d, where F is focal-spot size, t is object-to-film distance, and d is source-to-object distance.',
    "<h2>Definition</h2><p>Geometric unsharpness Ug limits the smallest detail resolvable on a radiograph. It is reduced by using a smaller focal spot, increasing the <a href='/glossary/source-to-film-distance-sfd'>source-to-film distance</a>, or minimizing the object-to-film distance.</p><h2>Technical Context</h2><p>ASME Section V specifies maximum allowable Ug values (e.g., 0.5 mm for material under 50 mm thick).</p>",
    ['source-to-film-distance-sfd', 'sensitivity', 'asme-section-v'],
    []
  ),

  e('density', 'Radiographic Density', 'physics',
    'Radiographic density is the degree of film darkening, measured logarithmically with a densitometer, and is a key acceptance parameter ensuring the radiograph carries the full diagnostic information needed for interpretation.',
    "<h2>Definition</h2><p>Density D = log10(I0/I), where I0 is incident light and I is transmitted light through the developed film. ASME Section V requires density between 1.8 and 4.0 for X-ray and 2.0 and 4.0 for gamma radiography in the area of interest.</p>",
    ['contrast', 'fog-level', 'latitude'],
    []
  ),

  e('sensitivity', 'Radiographic Sensitivity', 'physics',
    'Radiographic sensitivity is the smallest detail or thickness change reliably detectable in a radiograph, demonstrated by which IQI feature is visible — for example, 2-2T hole IQI or wire #10 wire IQI sensitivity.',
    "<h2>Definition</h2><p>Sensitivity is typically expressed as a percentage of the part thickness (e.g., 2% sensitivity). The smallest IQI element visible establishes that figure.</p>",
    ['image-quality-indicator-iqi', 'contrast', 'density'],
    []
  ),

  e('contrast', 'Radiographic Contrast', 'physics',
    'Radiographic contrast is the difference in density between two adjacent areas of a radiograph, governed by subject contrast (radiation energy and material) and film contrast (film type and processing).',
    "<h2>Definition</h2><p>Contrast determines visibility of small defects. Lower kV produces higher subject contrast; finer-grain film produces higher film contrast. Excessive scatter reduces contrast.</p>",
    ['density', 'sensitivity', 'fog-level'],
    []
  ),

  e('fog-level', 'Fog Level', 'physics',
    'Fog level is the unwanted base density on radiographic film caused by aging, light exposure, chemical contamination, or excessive scatter radiation, which reduces useful image contrast.',
    "<h2>Definition</h2><p>A high fog level masks subtle indications. ASME Section V limits fog (base + fog density) to 0.3 for medical X-ray film and similar for industrial film.</p>",
    ['density', 'contrast'],
    []
  ),

  e('latitude', 'Radiographic Latitude', 'physics',
    'Latitude is the range of part thicknesses that can be imaged on a single radiograph within the acceptable density range, balanced against contrast — high contrast films have narrow latitude and vice versa.',
    "<h2>Definition</h2><p>Latitude allows a single shot to capture thin and thick areas. High kV and lower-contrast films increase latitude; low kV and high-contrast films reduce it.</p>",
    ['density', 'contrast', 'sensitivity'],
    []
  ),

  e('source-to-film-distance-sfd', 'Source-to-Film Distance (SFD)', 'procedure',
    'Source-to-film distance (SFD), also called focus-film distance (FFD), is the geometric distance between the radiation source focal spot and the film, controlling geometric unsharpness and radiation intensity at the film.',
    "<h2>Definition</h2><p>SFD is a fundamental exposure variable. Increasing SFD reduces <a href='/glossary/geometric-unsharpness'>geometric unsharpness</a> (Ug = F·t/d) but reduces intensity by the inverse-square law, lengthening exposure time. Minimum SFD is calculated to meet a Ug acceptance criterion.</p>",
    ['geometric-unsharpness', 'exposure-chart'],
    []
  ),

  e('exposure-chart', 'Exposure Chart', 'procedure',
    'An exposure chart is a graph or table that gives the required exposure (mA-min for X-ray, Ci-min for gamma) versus material thickness for a specific film, density, kV, and source-to-film distance.',
    "<h2>Definition</h2><p>Exposure charts are developed empirically for each combination of radiation source, film, processing, and density. Inspectors use them to plan field exposures and minimize retakes.</p>",
    ['source-to-film-distance-sfd', 'density', 'half-value-layer-hvl'],
    []
  ),

  e('half-value-layer-hvl', 'Half-Value Layer (HVL)', 'physics',
    'The half-value layer (HVL) is the thickness of a specified material required to reduce the intensity of a beam of radiation by half, used to characterize radiation penetration and design shielding.',
    "<h2>Definition</h2><p>HVL depends on radiation energy and absorber material. For example, Ir-192 has an HVL of about 13 mm in steel and 4.8 mm in lead. Shielding calculations use multiples of HVL to achieve required dose reduction.</p>",
    ['gamma-source', 'alara', 'controlled-area'],
    []
  ),

  e('radiation-safety-officer-rso', 'Radiation Safety Officer (RSO)', 'safety',
    'A Radiation Safety Officer (RSO) is a designated person responsible for ensuring the safe use of radioactive materials and X-ray devices within an organization, including ALARA compliance, training, dose monitoring, and regulatory liaison.',
    "<h2>Definition</h2><p>The RSO is the regulatory point of contact for the radioactive materials license. Responsibilities include personnel training, dosimetry program management, source security, leak testing, emergency response, and regulatory reporting (US: NRC or Agreement State; UK: HSE; etc.).</p>",
    ['alara', 'controlled-area', 'time-distance-shielding'],
    ['ndt-safety-requirements-radiation-safety-guide']
  ),

  e('alara', 'ALARA (As Low As Reasonably Achievable)', 'safety',
    'ALARA is the regulatory principle requiring that radiation exposures be kept "as low as reasonably achievable", applied through the trinity of time, distance, and shielding controls to minimize dose to workers and the public.',
    "<h2>Definition</h2><p>ALARA is the foundation of all radiation safety programs. It is enforced through the <a href='/glossary/time-distance-shielding'>time-distance-shielding</a> hierarchy: reduce exposure time, maximize distance from the source, and use appropriate shielding. ALARA is mandated in US 10 CFR 20 and equivalent regulations worldwide.</p>",
    ['time-distance-shielding', 'controlled-area', 'radiation-safety-officer-rso'],
    ['radiation-exposure-monitoring-and-alara']
  ),

  e('time-distance-shielding', 'Time, Distance, Shielding', 'safety',
    'Time, distance, and shielding are the three fundamental controls used to reduce radiation exposure: minimize the time near the source, maximize the distance from it (inverse-square law), and place shielding between the source and personnel.',
    "<h2>Definition</h2><p>The TDS trinity is the practical implementation of <a href='/glossary/alara'>ALARA</a>. Halving exposure time halves the dose; doubling distance reduces dose to one-quarter; appropriate shielding (lead, concrete, steel) can attenuate by orders of magnitude.</p>",
    ['alara', 'controlled-area', 'half-value-layer-hvl'],
    []
  ),

  e('controlled-area', 'Controlled Area', 'safety',
    'A controlled area is a defined zone around a radiation source where access is restricted and monitored to ensure dose rates remain below regulatory limits, established before any radiography operation begins.',
    "<h2>Definition</h2><p>The boundary of the controlled area is set so that dose rates at the boundary do not exceed regulatory limits — typically 2 mSv/hr (high-radiation area boundary) or 0.02 mSv/hr (controlled-area boundary). Barriers, signs, and alarms are required.</p>",
    ['alara', 'time-distance-shielding', 'radiation-safety-officer-rso'],
    []
  ),

  // ───────── MT-SPECIFIC ─────────
  e('yoke', 'Yoke', 'equipment',
    'A yoke is a handheld electromagnet with two articulated legs used in magnetic particle testing to induce a longitudinal magnetic field between the leg tips for detecting transverse surface defects.',
    "<h2>Definition</h2><p>Yokes are convenient field MT tools. AC yokes give the best surface-defect sensitivity; DC and permanent-magnet yokes give better near-surface sensitivity. A lifting-power check (typically 4.5 kg for AC, 18 kg for DC) verifies adequate field strength.</p>",
    ['prods', 'central-conductor', 'multi-directional-magnetization', 'magnetic-particle-testing'],
    ['magnetic-particle-inspection-procedure-interpretation']
  ),

  e('prods', 'Prods', 'equipment',
    'Prods are a pair of handheld copper or copper-aluminum electrodes that pass high current through a localized area of a ferromagnetic part to induce a circular magnetic field for magnetic particle testing.',
    "<h2>Definition</h2><p>Prod technique passes current (typically 90–125 A per inch of prod spacing) directly through the part. It produces strong circular magnetization but can cause arc-burn damage, so it is limited to applications where light surface damage is acceptable.</p>",
    ['yoke', 'central-conductor', 'magnetic-particle-testing'],
    []
  ),

  e('magnetic-bench', 'Magnetic Particle Bench', 'equipment',
    'A magnetic particle bench is a stationary horizontal wet-method MT unit with headstock and tailstock contacts plus a coil, used to inspect production components under controlled magnetization in a shop environment.',
    "<h2>Definition</h2><p>Bench units provide repeatable head-shot (current through the part) and coil-shot (longitudinal magnetization) inspection on rotating shafts, billets, crankshafts, and similar production parts. They use wet fluorescent particles in a flood bath inspected under UV-A light.</p>",
    ['wet-particle', 'fluorescent-particle', 'magnetic-particle-testing'],
    []
  ),

  e('wet-particle', 'Wet Particle Method', 'procedure',
    'The wet particle method uses fine ferromagnetic particles suspended in a low-viscosity oil or water carrier, sprayed or flooded over the magnetized surface to achieve higher sensitivity than the dry method.',
    "<h2>Definition</h2><p>Wet particles (typically 1–25 μm) flow easily into tiny defects and produce sharp indications. The carrier may be oil-based or water-based with surfactants and corrosion inhibitors. Wet method is the standard for production inspection.</p>",
    ['dry-particle', 'fluorescent-particle', 'visible-particle', 'magnetic-particle-testing'],
    []
  ),

  e('dry-particle', 'Dry Particle Method', 'procedure',
    'The dry particle method applies dry ferromagnetic powder to a magnetized surface using a hand bulb or shaker, used primarily for field inspection of rough welds and castings where wet method is impractical.',
    "<h2>Definition</h2><p>Dry particles are coarser than wet (~50–200 μm) and roll into surface flaws. Dry method is preferred on rough surfaces, in field conditions, and at temperatures above the carrier flash point.</p>",
    ['wet-particle', 'visible-particle', 'magnetic-particle-testing'],
    []
  ),

  e('fluorescent-particle', 'Fluorescent Particles', 'procedure',
    'Fluorescent particles are magnetic particles coated with a fluorescent pigment that emits visible light under UV-A (black light) illumination, providing higher sensitivity than visible particles by yielding bright indications against a dark background.',
    "<h2>Definition</h2><p>Fluorescent MT inspection requires UV-A intensity of at least 1000 μW/cm² at the inspection surface and a low ambient light level (typically less than 20 lux). Sensitivity exceeds visible-method MT by an order of magnitude.</p>",
    ['visible-particle', 'wet-particle', 'magnetic-particle-testing'],
    []
  ),

  e('visible-particle', 'Visible Particles', 'procedure',
    'Visible particles are dark-colored ferromagnetic particles (typically black or red) used against a contrasting white background, inspected under white light without UV illumination.',
    "<h2>Definition</h2><p>A white contrast paint is applied first; black particles produce strong indications under standard white-light inspection. Visible MT is less sensitive than fluorescent but simpler in field conditions and accepted by most codes.</p>",
    ['fluorescent-particle', 'wet-particle', 'dry-particle'],
    []
  ),

  e('demagnetization', 'Demagnetization', 'procedure',
    'Demagnetization is the process of reducing the residual magnetic field in a part after magnetic particle testing, performed by passing the part through a decaying AC field or by AC current with reducing amplitude.',
    "<h2>Definition</h2><p>Demagnetization is required when residual magnetism could interfere with subsequent machining, welding, instruments, or service performance. Acceptance is typically less than 3 Gauss as measured by a Hall-effect or flux meter.</p>",
    ['residual-magnetism', 'magnetic-permeability', 'magnetic-particle-testing'],
    []
  ),

  e('residual-magnetism', 'Residual Magnetism', 'physics',
    'Residual magnetism is the magnetization remaining in a ferromagnetic part after the magnetizing current is removed, dependent on the material\'s magnetic <a href=\"/glossary/hysteresis\">hysteresis</a> behavior and coercive force.',
    "<h2>Definition</h2><p>Residual magnetism enables the so-called residual MT method (especially on hardened tool steels) but can also cause downstream problems such as weld-pool deflection, bearing damage, or compass interference, requiring <a href='/glossary/demagnetization'>demagnetization</a>.</p>",
    ['demagnetization', 'hysteresis', 'magnetic-permeability'],
    []
  ),

  e('central-conductor', 'Central Conductor', 'equipment',
    'A central conductor is a current-carrying copper bar passed through the bore of a hollow ferromagnetic part during magnetic particle testing to induce a circular magnetic field around the inner and outer surfaces.',
    "<h2>Definition</h2><p>Central-conductor technique inspects ring-shaped parts, tubular components, and threaded couplings. The bar must be sized so current density at the part is adequate without overheating, and the part is rotated through multiple positions to inspect the full circumference.</p>",
    ['yoke', 'prods', 'multi-directional-magnetization'],
    []
  ),

  e('multi-directional-magnetization', 'Multi-Directional Magnetization', 'procedure',
    'Multi-directional magnetization applies two or more magnetic fields in different directions simultaneously or in rapid sequence so that defects of any orientation can be detected in a single inspection shot.',
    "<h2>Definition</h2><p>A multi-directional bench uses two AC and one DC current source to combine longitudinal and circular fields. The technique is verified using a Ketos ring or QQI shim before inspection.</p>",
    ['yoke', 'magnetic-flux', 'magnetic-particle-testing'],
    []
  ),

  e('magnetic-flux', 'Magnetic Flux', 'physics',
    'Magnetic flux (Φ) is the total magnetic field passing through a cross-sectional area, measured in Webers (Wb) or Maxwells, and is the physical phenomenon whose leakage at a flaw produces a magnetic particle indication.',
    "<h2>Definition</h2><p>When magnetic flux encounters a discontinuity perpendicular to its path, some flux is forced into the air above the surface — this is the leakage field that holds magnetic particles to form an indication. Flux density (B) is measured in Tesla or Gauss.</p>",
    ['magnetic-flux-leakage-mfl', 'magnetic-permeability', 'magnetic-particle-testing'],
    []
  ),

  e('hysteresis', 'Hysteresis (B-H Curve)', 'physics',
    'Hysteresis is the lag of magnetization (B) behind the magnetizing force (H) in ferromagnetic materials, producing the characteristic B-H loop whose width is governed by coercive force and whose intercept is residual magnetism.',
    "<h2>Definition</h2><p>The B-H loop shows how a ferromagnetic material magnetizes and demagnetizes. Soft magnetic materials have narrow loops (easy to demagnetize); hard materials have wide loops (retain residual magnetism). Hysteresis dictates whether residual or continuous MT technique is preferred.</p>",
    ['residual-magnetism', 'demagnetization', 'magnetic-permeability'],
    []
  ),

  e('magnetic-permeability', 'Magnetic Permeability', 'physics',
    'Magnetic permeability (μ) is a material property describing how easily it can be magnetized, equal to the ratio of magnetic flux density (B) to magnetizing force (H), and is a primary factor in MT current selection.',
    "<h2>Definition</h2><p>Ferromagnetic materials have permeability much greater than free space, enabling high flux densities at modest magnetizing currents. Austenitic stainless steels (paramagnetic) cannot be inspected by MT because their permeability is too low.</p>",
    ['magnetic-flux', 'hysteresis', 'magnetic-particle-testing'],
    []
  ),

  // ───────── PT-SPECIFIC ─────────
  e('solvent-removable-penetrant', 'Solvent-Removable Penetrant', 'procedure',
    'Solvent-removable penetrant is a Type I or II PT system in which excess penetrant is removed by wiping with a solvent-dampened cloth, used in field inspection where water rinsing is impractical.',
    "<h2>Definition</h2><p>Solvent-removable systems (per ASTM E165 Method C) are commonly delivered in aerosol kits containing cleaner, penetrant, and developer. They are widely used for weld inspection in the field but offer slightly lower sensitivity than post-emulsifiable systems.</p>",
    ['water-washable-penetrant', 'post-emulsifiable-penetrant', 'dwell-time', 'developer'],
    ['liquid-penetrant-inspection-surface-crack-detection-methods']
  ),

  e('water-washable-penetrant', 'Water-Washable Penetrant', 'procedure',
    'Water-washable penetrant is a PT system containing self-emulsifying surfactants so that excess penetrant can be removed by a direct water spray, suitable for high-volume production inspection.',
    "<h2>Definition</h2><p>Method A penetrants (per ASTM E165) include built-in emulsifiers. They are economical and fast but more prone to over-washing, which can remove penetrant from shallow defects.</p>",
    ['solvent-removable-penetrant', 'post-emulsifiable-penetrant', 'dwell-time'],
    []
  ),

  e('post-emulsifiable-penetrant', 'Post-Emulsifiable Penetrant', 'procedure',
    'Post-emulsifiable penetrant requires a separate emulsifier (hydrophilic or lipophilic) to be applied after penetrant dwell before water rinsing, offering the highest sensitivity and most controlled wash characteristics.',
    "<h2>Definition</h2><p>Method B (lipophilic) and Method D (hydrophilic) penetrants are preferred for tight, shallow surface cracks because the controlled emulsification step prevents over-washing.</p>",
    ['solvent-removable-penetrant', 'water-washable-penetrant', 'dwell-time'],
    []
  ),

  e('dwell-time', 'Dwell Time', 'procedure',
    'Dwell time is the duration that penetrant is allowed to remain on the test surface before excess removal, allowing capillary action to draw the dye into surface-breaking discontinuities.',
    "<h2>Definition</h2><p>Typical penetrant dwell time is 5–30 minutes; developer dwell (after application) is 7–60 minutes. Dwell times are specified by penetrant manufacturer, code (ASME Section V Article 6), and material/temperature.</p>",
    ['capillary-action', 'developer', 'penetrant-testing'],
    ['liquid-penetrant-inspection-surface-crack-detection-methods']
  ),

  e('developer', 'Developer', 'equipment',
    'A developer is a powdered or suspended absorbent material applied after penetrant removal that draws trapped penetrant out of surface defects by reverse capillary action, producing visible indications.',
    "<h2>Definition</h2><p>Five developer forms are recognized: <a href='/glossary/form-a-developer'>Form a (dry)</a>, <a href='/glossary/form-b-developer'>Form b (water-soluble)</a>, <a href='/glossary/form-c-developer'>Form c (water-suspendable)</a>, <a href='/glossary/form-d-developer'>Form d (nonaqueous wet)</a>, and <a href='/glossary/form-e-developer'>Form e (specific application)</a>.</p>",
    ['form-a-developer', 'form-b-developer', 'form-c-developer', 'form-d-developer', 'form-e-developer', 'dwell-time'],
    []
  ),

  e('form-a-developer', 'Form a Developer (Dry Powder)', 'procedure',
    'Form a developer is a fine dry powder applied to fluorescent penetrant systems by dust cloud, electrostatic spray, or fluidized bed, valued for ease of post-inspection cleaning in production environments.',
    "<h2>Definition</h2><p>Form a is used only with fluorescent penetrants on smooth surfaces. It does not produce a contrasting background, so it is unsuitable for visible-dye systems.</p>",
    ['developer', 'form-b-developer', 'fluorescent-particle'],
    []
  ),

  e('form-b-developer', 'Form b Developer (Water-Soluble)', 'procedure',
    'Form b developer is a water-soluble compound dissolved in water and applied by immersion or spray, drying to a thin uniform film that develops indications during dwell.',
    "<h2>Definition</h2><p>Form b is suitable for fluorescent penetrants only and is most efficient for high-volume production inspection where a quick spray-and-dry cycle is required.</p>",
    ['developer', 'form-c-developer'],
    []
  ),

  e('form-c-developer', 'Form c Developer (Water-Suspendable)', 'procedure',
    'Form c developer is a water-suspendable powder that must be agitated continuously and applied by spray or immersion, forming a chalky coating that absorbs penetrant from defects.',
    "<h2>Definition</h2><p>Form c works with both visible and fluorescent penetrants and is the standard for high-throughput production lines.</p>",
    ['developer', 'form-b-developer'],
    []
  ),

  e('form-d-developer', 'Form d Developer (Nonaqueous Wet)', 'procedure',
    'Form d is a nonaqueous wet developer in which fine powder is suspended in a quick-evaporating solvent and applied by aerosol spray, producing the highest sensitivity of any developer form.',
    "<h2>Definition</h2><p>Nonaqueous developers are the field standard for both visible and fluorescent PT, providing a uniform white contrast background that lifts penetrant from very tight defects.</p>",
    ['developer', 'form-c-developer', 'solvent-removable-penetrant'],
    []
  ),

  e('form-e-developer', 'Form e Developer (Special)', 'procedure',
    'Form e is a special-application developer such as plastic film or strippable polymer used when an inspection record must be permanently retained on the part.',
    "<h2>Definition</h2><p>Form e developers are used in aerospace and specialty applications where the developed indication must be preserved as a permanent record.</p>",
    ['developer', 'form-d-developer'],
    []
  ),

  e('indication', 'Indication', 'data',
    'An indication is the response observed during an NDT examination that requires interpretation to determine whether it represents a relevant defect, a non-relevant geometric effect, or a false signal.',
    "<h2>Definition</h2><p>All NDT methods produce indications; the inspector must classify each as <a href='/glossary/relevant-indication'>relevant</a>, non-relevant (caused by part geometry such as a fillet weld), or <a href='/glossary/false-indication'>false</a> (caused by surface contamination, magnetic writing, or technique issues).</p>",
    ['relevant-indication', 'false-indication', 'reference-reflector'],
    []
  ),

  e('false-indication', 'False Indication', 'data',
    'A false indication is an NDT response not caused by an actual material discontinuity, instead produced by contamination, technique error, magnetic writing, or instrument artifacts.',
    "<h2>Definition</h2><p>Common false indications include penetrant trapped under loose scale, magnetic writing on hardened steel, dirt on the radiograph, or transducer ringing. Eliminating false indications is a primary inspector responsibility.</p>",
    ['indication', 'relevant-indication'],
    []
  ),

  e('relevant-indication', 'Relevant Indication', 'data',
    'A relevant indication is an NDT response produced by an actual material discontinuity that must be evaluated against the applicable acceptance criteria for accept/reject disposition.',
    "<h2>Definition</h2><p>Only relevant indications are subject to code acceptance criteria. ASME Section V/VIII, AWS D1.1, and API standards each define minimum reportable sizes and reject criteria for various flaw types.</p>",
    ['indication', 'false-indication', 'crack'],
    []
  ),

  e('capillary-action', 'Capillary Action', 'physics',
    'Capillary action is the physical phenomenon by which a liquid is drawn into a narrow space against gravity by surface tension and adhesion forces, and is the fundamental mechanism of liquid penetrant testing.',
    "<h2>Definition</h2><p>Capillary action enables low-viscosity penetrants to enter tight surface-breaking cracks during dwell time, then to be drawn back out into the developer coating. The narrower the defect, the stronger the capillary effect and the longer the dwell time required.</p>",
    ['dwell-time', 'penetrant-testing', 'developer'],
    []
  ),

  // ───────── ET-SPECIFIC ─────────
  e('impedance-plane', 'Impedance Plane', 'physics',
    'The impedance plane is a 2D display in eddy current testing showing the probe coil\'s resistive (X-axis) and inductive reactive (Y-axis) components, on which signals from lift-off, defects, and conductivity changes trace characteristic vectors.',
    "<h2>Definition</h2><p>The impedance plane is the analytical core of ET. Defect signals appear at specific phase angles relative to the <a href='/glossary/lift-off'>lift-off</a> signal; experienced inspectors recognize and discriminate signals by their position and shape on the plane.</p>",
    ['lift-off', 'edge-effect', 'eddy-current-testing'],
    ['eddy-current-testing-complete-beginner-guide']
  ),

  e('lift-off', 'Lift-Off', 'physics',
    'Lift-off is the change in eddy current signal caused by a variation in the distance between the probe coil and the test surface, used both as a calibration tool and as a nuisance variable to be minimized.',
    "<h2>Definition</h2><p>Lift-off produces a characteristic signal direction on the <a href='/glossary/impedance-plane'>impedance plane</a>, typically used to null the instrument and to set the phase angle for crack detection.</p>",
    ['impedance-plane', 'edge-effect', 'fill-factor'],
    []
  ),

  e('edge-effect', 'Edge Effect', 'physics',
    'The edge effect is the distortion of an eddy current signal as the probe approaches a part edge, hole, or geometric discontinuity, which can mask defect signals near edges.',
    "<h2>Definition</h2><p>Eddy currents distribute differently near a free edge, producing a large signal that can swamp defect indications. Higher frequencies, smaller-diameter probes, or specialized edge probes minimize edge effect.</p>",
    ['lift-off', 'impedance-plane', 'eddy-current-testing'],
    []
  ),

  e('fill-factor', 'Fill Factor', 'physics',
    'Fill factor is the ratio of the cross-sectional area of an encircling or bobbin coil to that of the tube it inspects, governing inspection sensitivity and the strength of geometric (e.g., support-plate) signals.',
    "<h2>Definition</h2><p>Fill factor (η) = (coil diameter / tube ID or OD)². High fill factor improves sensitivity but reduces clearance for tube variation. Standard heat-exchanger tubing ET uses fill factors of 0.75–0.85.</p>",
    ['bobbin-coil', 'encircling-coil', 'eddy-current-testing'],
    ['heat-exchanger-tube-inspection-methods-procedures']
  ),

  e('frequency-response', 'Frequency Response', 'physics',
    'Frequency response describes how an eddy current signal varies with the test frequency, governed by the standard depth of penetration (skin effect) and used to select frequencies that optimize defect detection at the target depth.',
    "<h2>Definition</h2><p>Higher frequency confines eddy currents near the surface (high sensitivity, low penetration); lower frequency penetrates deeper at the cost of sensitivity. Standard depth of penetration δ = √(ρ/(π·f·μ)).</p>",
    ['multi-frequency-eddy-current', 'impedance-plane'],
    []
  ),

  e('encircling-coil', 'Encircling Coil', 'equipment',
    'An encircling coil is an eddy current probe configuration in which a circular coil surrounds the outside of a tubular or wire product, inspecting the full circumference simultaneously as the product passes through.',
    "<h2>Definition</h2><p>Encircling coils are used in production lines to inspect wire, bar, and tubing at high speeds. Sensitivity is averaged around the circumference, so coil-pair or rotating-probe arrangements are added when defect localization is needed.</p>",
    ['bobbin-coil', 'surface-coil', 'rotating-probe'],
    []
  ),

  e('bobbin-coil', 'Bobbin Coil', 'equipment',
    'A bobbin coil is a differential or absolute eddy current probe that travels axially inside a tube, inspecting the entire tube circumference simultaneously for wall loss, pitting, and through-wall defects.',
    "<h2>Definition</h2><p>Bobbin probes are the standard tool for heat-exchanger tube inspection per ASME Section V Article 8 and EPRI guidelines. They detect circumferential and volumetric defects efficiently but are insensitive to axial cracks and to defect circumferential location.</p>",
    ['encircling-coil', 'rotating-probe', 'fill-factor', 'internal-rotary-inspection-system-iris'],
    ['heat-exchanger-tube-inspection-methods-procedures']
  ),

  e('surface-coil', 'Surface Coil', 'equipment',
    'A surface coil is a small handheld eddy current probe used to scan accessible surfaces of components — typically a pencil-style absolute or reflection probe — for surface-breaking crack detection.',
    "<h2>Definition</h2><p>Surface coils are the workhorse of weld and fastener inspection in aerospace and structural NDT. Pencil probes for tight access, sliding probes for weld toe scanning, and shielded probes for sensitivity-critical work are all variants.</p>",
    ['encircling-coil', 'bobbin-coil', 'eddy-current-testing'],
    ['eddy-current-testing-complete-beginner-guide']
  ),

  e('rotating-probe', 'Rotating Probe', 'equipment',
    'A rotating probe (also called RPC or motorized rotating pancake coil) is an eddy current probe with one or more pancake coils mounted on a rotating head, used inside tubes to detect circumferentially-localized defects that bobbin probes cannot characterize.',
    "<h2>Definition</h2><p>RPCs spin at 600–3000 rpm while being pulled axially, mapping the tube ID like a C-scan. They detect axially-oriented cracks, pitting at U-bends, and tube-to-tubesheet weld defects that escape bobbin inspection.</p>",
    ['bobbin-coil', 'multi-frequency-eddy-current', 'internal-rotary-inspection-system-iris'],
    ['heat-exchanger-tube-inspection-methods-procedures']
  ),

  e('multi-frequency-eddy-current', 'Multi-Frequency Eddy Current', 'procedure',
    'Multi-frequency eddy current testing uses two or more simultaneous frequencies whose responses are mixed in software to suppress unwanted variables (support-plate signals, tube-end effects) and isolate the defect signal of interest.',
    "<h2>Definition</h2><p>By mixing a frequency optimized for the support plate with a frequency optimized for defect detection, multi-frequency techniques produce a residual signal that contains the defect response without the geometric interference. Tube inspection at refineries and nuclear plants relies on multi-frequency mixing.</p>",
    ['frequency-response', 'bobbin-coil', 'rotating-probe'],
    []
  ),
];

console.log(`Part 2 entries: ${entries.length}`);
writeFileSync(new URL('./part2.json', import.meta.url), JSON.stringify(entries, null, 2));
