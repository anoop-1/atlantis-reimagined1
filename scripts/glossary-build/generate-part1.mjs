// Generates first ~70 glossary terms (NDT methods + UT-specific)
import { writeFileSync } from 'fs';

// Helper to build entries with consistent structure
const e = (slug, term, category, shortDefinition, definition, relatedTerms = [], relatedBlogs = []) => ({
  slug, term, category, shortDefinition, definition, relatedTerms, relatedBlogs
});

const entries = [
  // ───────── NDT METHODS ─────────
  e('ultrasonic-testing', 'Ultrasonic Testing (UT)', 'method',
    'Ultrasonic Testing (UT) is an NDT method that uses high-frequency sound waves (typically 0.5–25 MHz) to detect internal flaws and measure thickness in metals, plastics, and composites by analyzing reflected echoes from a transducer.',
    "<h2>Definition</h2><p>Ultrasonic Testing (UT) is a volumetric non-destructive testing method that uses high-frequency sound waves — typically between 0.5 and 25 MHz — to detect internal discontinuities, measure wall thickness, and characterize material properties. A piezoelectric <a href='/glossary/transducer'>transducer</a> introduces a short ultrasonic pulse into the test piece; reflections from flaws or back surfaces are received, amplified, and displayed as an <a href='/glossary/a-scan'>A-scan</a> on the flaw detector.</p><h2>Technical Context</h2><p>UT relies on the predictable behavior of acoustic waves in elastic media: reflection at interfaces with different acoustic impedances, refraction at angled boundaries, and attenuation through the bulk material. Inspectors calibrate the instrument on a <a href='/glossary/calibration-block'>calibration block</a> with known reference reflectors such as a <a href='/glossary/side-drilled-hole-sdh'>side-drilled hole</a> or <a href='/glossary/flat-bottom-hole-fbh'>flat-bottom hole</a>, then scan the part while monitoring amplitude and time-of-flight.</p><h2>When It Is Used</h2><ul><li>Weld inspection in pressure vessels, piping, and storage tanks</li><li>Thickness gauging for corrosion monitoring</li><li>Lamination and inclusion detection in plate and forgings</li><li>Composite delamination and bond-line inspection</li></ul><h2>Related Standards</h2><p>UT is governed by <a href='/glossary/asme-section-v'>ASME Section V Article 4</a>, ASTM E114 / E317, ISO 17640, and AWS D1.1 Annex K. Personnel must be qualified per <a href='/glossary/iso-9712'>ISO 9712</a> or <a href='/glossary/snt-tc-1a'>SNT-TC-1A</a>.</p><h2>Synonyms and Related Terms</h2><p>Also called pulse-echo testing or UT. Closely related techniques include <a href='/glossary/phased-array-ultrasonic-testing-paut'>Phased Array UT (PAUT)</a>, <a href='/glossary/time-of-flight-diffraction-tofd'>TOFD</a>, and <a href='/glossary/automated-ultrasonic-testing-aut'>AUT</a>.</p>",
    ['phased-array-ultrasonic-testing-paut', 'time-of-flight-diffraction-tofd', 'a-scan', 'transducer', 'calibration-block', 'couplant'],
    ['ultrasonic-testing-ultimate-guide', 'phased-array-ultrasonic-testing-paut-guide']
  ),

  e('radiographic-testing', 'Radiographic Testing (RT)', 'method',
    'Radiographic Testing (RT) is an NDT method that uses X-rays or gamma rays to create a permanent image of the internal structure of a component on film or a digital detector, revealing porosity, cracks, inclusions, and other volumetric defects.',
    "<h2>Definition</h2><p>Radiographic Testing (RT) is a volumetric NDT method in which penetrating ionizing radiation — produced by an <a href='/glossary/x-ray-tube'>X-ray tube</a> or a <a href='/glossary/gamma-source'>gamma source</a> such as <a href='/glossary/ir-192'>Ir-192</a> or <a href='/glossary/co-60'>Co-60</a> — passes through a test piece and exposes a film or digital detector on the opposite side. Variations in thickness or density produce contrast on the resulting radiograph, allowing inspectors to identify internal discontinuities.</p><h2>Technical Context</h2><p>Image quality is verified using an <a href='/glossary/image-quality-indicator-iqi'>image quality indicator (IQI)</a>, and parameters such as <a href='/glossary/geometric-unsharpness'>geometric unsharpness</a>, <a href='/glossary/density'>density</a>, and <a href='/glossary/sensitivity'>sensitivity</a> are tightly controlled. The <a href='/glossary/source-to-film-distance-sfd'>source-to-film distance</a> and exposure time are calculated from an <a href='/glossary/exposure-chart'>exposure chart</a>.</p><h2>When It Is Used</h2><ul><li>Butt-weld inspection in pressure equipment and pipelines (per <a href='/glossary/asme-section-v'>ASME Section V</a> and <a href='/glossary/api-1104'>API 1104</a>)</li><li>Casting inspection for porosity and shrinkage</li><li>Aerospace structural verification</li></ul><h2>Related Standards</h2><p>ASME Section V Article 2, ISO 17636, ASTM E94, EN 12668. Radiation safety follows <a href='/glossary/alara'>ALARA</a> principles under the supervision of a <a href='/glossary/radiation-safety-officer-rso'>Radiation Safety Officer</a>.</p><h2>Synonyms</h2><p>Also called radiography, X-ray testing, or gamma-ray testing. Modern variants include <a href='/glossary/computed-radiography-cr'>Computed Radiography</a> and <a href='/glossary/digital-radiography-dr'>Digital Radiography</a>.</p>",
    ['x-ray-tube', 'gamma-source', 'ir-192', 'image-quality-indicator-iqi', 'computed-radiography-cr', 'digital-radiography-dr'],
    ['radiography-vs-digital-radiography-complete-comparison', 'rt-vs-ut-complete-comparison']
  ),

  e('magnetic-particle-testing', 'Magnetic Particle Testing (MT)', 'method',
    'Magnetic Particle Testing (MT) is a surface and near-surface NDT method for ferromagnetic materials that detects discontinuities by applying a magnetic field and observing the leakage flux attract magnetic particles to the flaw indication.',
    "<h2>Definition</h2><p>Magnetic Particle Testing (MT) detects surface-breaking and slightly subsurface discontinuities in ferromagnetic materials. A magnetic field is induced in the part using a <a href='/glossary/yoke'>yoke</a>, <a href='/glossary/prods'>prods</a>, coil, or <a href='/glossary/central-conductor'>central conductor</a>. When a flaw interrupts the field, leakage flux at the surface attracts iron oxide particles, forming a visible indication.</p><h2>Technical Context</h2><p>Particles may be <a href='/glossary/wet-particle'>wet</a> or <a href='/glossary/dry-particle'>dry</a>, and either <a href='/glossary/visible-particle'>visible</a> or <a href='/glossary/fluorescent-particle'>fluorescent</a> for inspection under UV-A light. Two orthogonal magnetizations are usually required to detect flaws of any orientation; <a href='/glossary/multi-directional-magnetization'>multi-directional magnetization</a> can achieve this in a single shot. <a href='/glossary/demagnetization'>Demagnetization</a> after testing prevents <a href='/glossary/residual-magnetism'>residual magnetism</a> issues.</p><h2>When It Is Used</h2><ul><li>Weld inspection on carbon and low-alloy steels</li><li>Forging and casting inspection</li><li>In-service crack detection on shafts, lifting lugs, and structural members</li></ul><h2>Related Standards</h2><p>ASME Section V Article 7, ASTM E709, ASTM E1444, <a href='/glossary/iso-9934'>ISO 9934</a>.</p><h2>Synonyms</h2><p>Also known as MPI (Magnetic Particle Inspection) or Magnaflux (trademark). Related: <a href='/glossary/penetrant-testing'>Penetrant Testing</a> for non-ferromagnetic materials.</p>",
    ['yoke', 'prods', 'wet-particle', 'fluorescent-particle', 'demagnetization', 'iso-9934'],
    ['magnetic-particle-inspection-procedure-interpretation', 'magnetic-particle-testing']
  ),

  e('penetrant-testing', 'Penetrant Testing (PT)', 'method',
    'Penetrant Testing (PT) is a surface NDT method that uses a colored or fluorescent liquid drawn into surface-breaking defects by capillary action; after excess penetrant is removed and a developer applied, indications bleed out and become visible.',
    "<h2>Definition</h2><p>Penetrant Testing (PT), also called Liquid Penetrant Inspection (LPI) or Dye Penetrant Inspection (DPI), detects surface-breaking discontinuities in non-porous materials — both ferrous and non-ferrous. A penetrant liquid is applied to the cleaned surface, allowed to dwell, then excess is removed and a <a href='/glossary/developer'>developer</a> is applied. The developer draws penetrant out of any flaw by reverse <a href='/glossary/capillary-action'>capillary action</a>, producing a visible <a href='/glossary/indication'>indication</a>.</p><h2>Technical Context</h2><p>Three primary penetrant systems exist: <a href='/glossary/solvent-removable-penetrant'>solvent-removable</a>, <a href='/glossary/water-washable-penetrant'>water-washable</a>, and <a href='/glossary/post-emulsifiable-penetrant'>post-emulsifiable</a>. Each balances sensitivity, cost, and surface-finish requirements. Critical parameters include penetrant <a href='/glossary/dwell-time'>dwell time</a>, removal technique, and developer selection (Form a–e).</p><h2>When It Is Used</h2><ul><li>Aerospace component inspection (aluminum, titanium)</li><li>Weld inspection on austenitic stainless steel and non-ferrous alloys</li><li>Casting and forging surface inspection</li></ul><h2>Related Standards</h2><p>ASME Section V Article 6, ASTM E165, ASTM E1417, <a href='/glossary/iso-3452'>ISO 3452</a>.</p><h2>Synonyms</h2><p>Also known as LPI, DPI, dye check.</p>",
    ['developer', 'dwell-time', 'solvent-removable-penetrant', 'water-washable-penetrant', 'capillary-action', 'iso-3452'],
    ['liquid-penetrant-inspection-surface-crack-detection-methods']
  ),

  e('eddy-current-testing', 'Eddy Current Testing (ET)', 'method',
    'Eddy Current Testing (ET) is an electromagnetic NDT method that induces circulating currents in conductive materials using an AC coil; changes in coil impedance reveal surface and near-surface defects, conductivity variations, and coating thickness.',
    "<h2>Definition</h2><p>Eddy Current Testing (ET) uses an alternating-current coil to induce small circulating currents — eddy currents — in an electrically conductive test piece. Discontinuities, conductivity variations, and geometry changes alter the eddy current flow and therefore the coil's impedance. The resulting impedance shift is plotted on the <a href='/glossary/impedance-plane'>impedance plane</a> for interpretation.</p><h2>Technical Context</h2><p>Probe selection depends on application: <a href='/glossary/encircling-coil'>encircling coils</a> for tubes, <a href='/glossary/bobbin-coil'>bobbin coils</a> for heat-exchanger tubes, <a href='/glossary/surface-coil'>surface coils</a> for plates and welds, and <a href='/glossary/rotating-probe'>rotating probes</a> for bolt holes. Performance is affected by <a href='/glossary/lift-off'>lift-off</a>, <a href='/glossary/edge-effect'>edge effect</a>, and <a href='/glossary/fill-factor'>fill factor</a>.</p><h2>When It Is Used</h2><ul><li>Heat-exchanger and condenser tube inspection</li><li>Aircraft skin and fastener-hole crack detection</li><li>Coating thickness and conductivity sorting</li></ul><h2>Related Standards</h2><p>ASME Section V Article 8, ASTM E309, ASTM E571, ISO 15549.</p><h2>Synonyms</h2><p>Also called ECT. Advanced variants include <a href='/glossary/multi-frequency-eddy-current'>multi-frequency ET</a>, <a href='/glossary/alternating-current-field-measurement-acfm'>ACFM</a>, and Eddy Current Array (ECA).</p>",
    ['impedance-plane', 'lift-off', 'bobbin-coil', 'surface-coil', 'multi-frequency-eddy-current', 'alternating-current-field-measurement-acfm'],
    ['eddy-current-testing-complete-guide', 'eddy-current-testing-complete-beginner-guide']
  ),

  e('visual-testing', 'Visual Testing (VT)', 'method',
    'Visual Testing (VT) is the most basic NDT method, using direct or remote optical observation — sometimes aided by mirrors, borescopes, or cameras — to identify surface defects, geometric anomalies, and condition of components.',
    "<h2>Definition</h2><p>Visual Testing (VT) is the inspection of a component using direct line-of-sight observation, optionally aided by magnifiers, mirrors, borescopes, drones, or remote video systems. Despite its simplicity, VT is the foundational NDT method and is required before any other inspection. ASME Section V recognizes <a href='/glossary/vt-3'>VT-1, VT-2, and VT-3</a> levels with distinct objectives.</p><h2>Technical Context</h2><p>Illumination must meet the minimum required level (typically 1000 lux for direct VT), and inspectors must pass a <a href='/glossary/jaeger-j1'>Jaeger J1 or J2</a> near-vision test plus a <a href='/glossary/color-vision-test'>color vision test</a>. Remote VT (RVT) uses borescopes, fiberscopes, or video probes for internal inspection of pipes, turbines, and pressure vessels.</p><h2>When It Is Used</h2><ul><li>Pre-weld fit-up, in-process welding observation, and post-weld surface inspection</li><li>In-service inspection of tanks, vessels, and structural steel</li><li>Internal turbine and engine inspection via borescope</li></ul><h2>Related Standards</h2><p>ASME Section V Article 9, ISO 17637, AWS D1.1 Clause 6.</p><h2>Synonyms</h2><p>Also called VT or visual inspection.</p>",
    ['vt-3', 'jaeger-j1', 'color-vision-test', 'near-vision-test', 'sensory-acuity'],
    ['visual-inspection-and-borescopy-best-practices']
  ),

  e('acoustic-emission', 'Acoustic Emission Testing (AE)', 'method',
    'Acoustic Emission (AE) is a passive NDT method that detects transient elastic stress waves emitted by active discontinuities such as growing cracks, plastic deformation, or leaks, using sensors mounted on the component during loading.',
    "<h2>Definition</h2><p>Acoustic Emission Testing (AE) is a passive NDT technique in which sensors are bonded to a structure and listen for high-frequency stress waves released when defects grow, materials deform plastically, or fluids leak. Unlike most NDT methods, AE detects only active damage — flaws must be evolving for the sensors to hear them.</p><h2>Technical Context</h2><p>Multiple sensors permit source location by triangulating wave arrival times. AE is typically applied during a controlled pressure or load test of an entire vessel or structure, giving a global view of integrity.</p><h2>When It Is Used</h2><ul><li>Periodic in-service testing of pressure vessels and storage tanks</li><li>Composite pressure vessel and pipeline qualification</li><li>Real-time monitoring of bridges, cranes, and rotating equipment</li></ul><h2>Related Standards</h2><p>ASME Section V Article 11–13, ASTM E1067, ASTM E1419, ISO 12716.</p><h2>Synonyms</h2><p>Also called AE or AET. Related to <a href='/glossary/leak-testing'>leak testing</a> when used for leak detection.</p>",
    ['leak-testing', 'thermography', 'attenuation'],
    ['acoustic-emission-testing-principles-industrial-applications']
  ),

  e('leak-testing', 'Leak Testing (LT)', 'method',
    'Leak Testing (LT) verifies the pressure boundary integrity of vessels, piping, and tanks by detecting and quantifying fluid leakage using methods such as pressure decay, bubble emission, mass spectrometer helium tracing, or ultrasonic leak detection.',
    "<h2>Definition</h2><p>Leak Testing (LT) is the NDT method used to confirm that a closed system holds pressure or vacuum without unacceptable leakage. Techniques range from simple soap-bubble visual inspection to mass spectrometer helium leak detection capable of resolving leaks below 10⁻¹⁰ Pa·m³/s.</p><h2>Technical Context</h2><p>Common methods include: pressure-decay (monitor pressure drop over time), bubble emission, helium mass-spectrometer (sniffer or hood), halogen detection, and ultrasonic leak detection. The method chosen depends on required sensitivity, system geometry, and gas compatibility.</p><h2>When It Is Used</h2><ul><li>Final acceptance testing of pressure vessels and piping</li><li>Vacuum-system qualification in semiconductor and aerospace</li><li>In-service tank-bottom leak monitoring</li></ul><h2>Related Standards</h2><p>ASME Section V Article 10, ASME B31.3 Chapter VI, ASTM E432, ISO 20485, API 510, API 653.</p>",
    ['acoustic-emission', 'pressure-vessel', 'storage-tank'],
    []
  ),

  e('thermography', 'Thermography / Infrared Testing (IRT)', 'method',
    'Thermography uses an infrared camera to map surface temperature patterns; subsurface defects, moisture, missing insulation, electrical hot spots, and CUI alter heat flow and create detectable thermal signatures.',
    "<h2>Definition</h2><p>Thermographic testing (infrared testing, IRT) uses a calibrated infrared camera to capture surface temperature distributions. Subsurface anomalies disturb the heat flow and produce thermal contrasts that the camera resolves as hot or cold spots.</p><h2>Technical Context</h2><p>Two modes are common: passive (observing natural temperature differences, e.g. on energized switchgear) and active (heating the surface and watching the cooling pattern). Active thermography is the basis for composite delamination detection and adhesive bond inspection.</p><h2>When It Is Used</h2><ul><li>Electrical switchgear and motor surveys</li><li>Moisture and <a href='/glossary/corrosion-under-insulation-cui'>CUI</a> screening on insulated piping</li><li>Composite delamination detection</li><li>Building envelope and refractory inspection</li></ul><h2>Related Standards</h2><p>ASTM E1934, ISO 18434, ASNT SNT-TC-1A for IR personnel.</p>",
    ['corrosion-under-insulation-cui', 'acoustic-emission'],
    ['thermography-and-infrared-inspection-techniques']
  ),

  e('microwave-testing', 'Microwave Testing', 'method',
    'Microwave testing uses electromagnetic waves between 300 MHz and 300 GHz to inspect non-conductive dielectric materials such as composites, ceramics, and insulation for moisture, voids, delamination, and disbonds.',
    "<h2>Definition</h2><p>Microwave NDT propagates electromagnetic waves into dielectric materials and analyzes reflected and transmitted signals to detect internal anomalies. Because microwaves do not penetrate metals, the method is used exclusively on non-conductive materials.</p><h2>Technical Context</h2><p>Open-ended waveguides, horn antennas, or near-field probes deliver the energy. Both magnitude and phase of the reflection coefficient are analyzed.</p><h2>When It Is Used</h2><ul><li>Inspection of FRP/composite pressure vessels and pipes</li><li>Moisture detection in insulation systems</li><li>Ceramic component evaluation</li></ul><h2>Related Standards</h2><p>ASTM E2884, ISO/TR 16208.</p>",
    ['acoustic-emission', 'thermography'],
    []
  ),

  e('phased-array-ultrasonic-testing-paut', 'Phased Array Ultrasonic Testing (PAUT)', 'method',
    'PAUT is an advanced ultrasonic technique using a multi-element transducer (16–256 elements) with electronic beam steering and focusing, producing sectorial, linear, and compound scans for superior weld inspection and defect characterization.',
    "<h2>Definition</h2><p>Phased Array Ultrasonic Testing (PAUT) uses a probe containing many small piezoelectric elements that can be pulsed individually with controlled time delays. By varying the delays, the resulting beam is steered, focused, or scanned electronically without physical probe movement.</p><h2>Technical Context</h2><p>Common scan modes include the <a href='/glossary/s-scan'>S-scan (sector scan)</a>, <a href='/glossary/l-scan'>L-scan (linear scan)</a>, and compound scans combining multiple angles. PAUT data is typically captured with an encoder and stored for offline analysis, replay, and audit. Compared to <a href='/glossary/ultrasonic-testing'>conventional UT</a>, PAUT offers higher probability of detection, faster scanning, and superior defect characterization.</p><h2>When It Is Used</h2><ul><li>Pressure-vessel and pipeline girth-weld inspection</li><li>Corrosion mapping on tanks and vessels</li><li>Forging and casting inspection</li><li>Nozzle, T-K-Y joint, and complex-geometry inspection</li></ul><h2>Related Standards</h2><p>ASME Section V Article 4 Mandatory Appendix VII and Article V, ASME Code Case 2235, AWS D1.1 Annex K, <a href='/glossary/iso-13588'>ISO 13588</a>, <a href='/glossary/iso-23279'>ISO 23279</a>.</p><h2>Synonyms</h2><p>Also called PA, PAUT, or Phased Array UT. Related advanced techniques include <a href='/glossary/total-focusing-method-tfm'>TFM</a> and <a href='/glossary/full-matrix-capture-fmc'>FMC</a>.</p>",
    ['ultrasonic-testing', 'time-of-flight-diffraction-tofd', 's-scan', 'l-scan', 'total-focusing-method-tfm', 'full-matrix-capture-fmc'],
    ['phased-array-ultrasonic-testing-paut-guide', 'phased-array-ultrasonic-testing-complete-technical-guide']
  ),

  e('time-of-flight-diffraction-tofd', 'Time-of-Flight Diffraction (TOFD)', 'method',
    'TOFD is an advanced UT technique using two angled probes in pitch-catch arrangement to detect and accurately size defects from the time of arrival of diffracted tip signals, achieving height-sizing accuracy of ±0.5 mm.',
    "<h2>Definition</h2><p>Time-of-Flight Diffraction (TOFD) uses a pair of longitudinal-wave angle probes, one transmitter and one receiver, positioned on either side of a weld. Diffracted waves from the tips of an embedded discontinuity arrive at the receiver at times that correspond to the through-wall position of those tips, allowing very accurate height sizing.</p><h2>Technical Context</h2><p>The TOFD image shows a lateral wave, back-wall echo, and any tip-diffracted signals as grey-scale bands. Phase information distinguishes upper from lower crack tips. TOFD complements <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a> by providing accurate sizing where PAUT's amplitude-based sizing is limited.</p><h2>When It Is Used</h2><ul><li>Pressure-vessel and pipeline girth-weld inspection</li><li>In-service crack growth monitoring</li><li>Fitness-for-service input for <a href='/glossary/api-579'>API 579</a> assessments</li></ul><h2>Related Standards</h2><p>ASME Section V Article 4 Mandatory Appendix III, <a href='/glossary/iso-10863'>ISO 10863</a>, ASTM E2373.</p>",
    ['phased-array-ultrasonic-testing-paut', 'ultrasonic-testing', 'fitness-for-service-ffs', 'api-579'],
    ['tofd-inspection-time-of-flight-diffraction-explained']
  ),

  e('total-focusing-method-tfm', 'Total Focusing Method (TFM)', 'method',
    'TFM is an advanced ultrasonic imaging technique that post-processes Full Matrix Capture (FMC) data to synthetically focus the beam at every pixel in the region of interest, producing high-resolution images of complex defects.',
    "<h2>Definition</h2><p>The Total Focusing Method (TFM) reconstructs an ultrasonic image by post-processing <a href='/glossary/full-matrix-capture-fmc'>FMC</a> data so that every pixel in the inspection grid is the focal point of a synthetically focused beam. The result is uniform resolution across the imaged volume — superior to conventional <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a> S-scans, which focus at only one depth.</p><h2>Technical Context</h2><p>TFM modes can use direct longitudinal, half-skip, full-skip, and mode-converted paths to image complex weld geometries. Code acceptance is recent: ASME Section V Article 4 Mandatory Appendix XI provides TFM rules.</p><h2>When It Is Used</h2><ul><li>Critical weld inspection (austenitic, dissimilar metal)</li><li>High-temperature hydrogen attack (HTHA) detection</li><li>Crack-tip characterization in fitness-for-service</li></ul>",
    ['full-matrix-capture-fmc', 'phased-array-ultrasonic-testing-paut', 'ultrasonic-testing'],
    ['total-focusing-method-tfm-in-ut']
  ),

  e('full-matrix-capture-fmc', 'Full Matrix Capture (FMC)', 'method',
    'FMC is an ultrasonic data acquisition mode in which every element of a phased-array probe transmits in turn while all elements receive, producing a complete matrix of A-scans that can be post-processed using TFM and other algorithms.',
    "<h2>Definition</h2><p>Full Matrix Capture (FMC) acquires a full matrix of N×N A-scans from an N-element phased-array probe by firing one element at a time while receiving on all elements. The resulting dataset contains every possible transmit-receive combination, supporting post-processing techniques such as <a href='/glossary/total-focusing-method-tfm'>TFM</a>, plane-wave imaging, and adaptive imaging.</p><h2>Technical Context</h2><p>FMC files are large; modern instruments compress and stream them. FMC enables retrospective analysis — inspectors can re-image data with different algorithms long after acquisition.</p><h2>When It Is Used</h2><ul><li>Advanced weld imaging with TFM</li><li>Research and development of new imaging algorithms</li><li>Critical-asset baseline scans</li></ul>",
    ['total-focusing-method-tfm', 'phased-array-ultrasonic-testing-paut'],
    ['full-matrix-capture-for-advanced-imaging']
  ),

  e('guided-wave-testing-gwt', 'Guided Wave Testing (GWT)', 'method',
    'Guided Wave Testing uses low-frequency (20–100 kHz) ultrasonic waves that propagate along a pipe wall for tens of meters from a single transducer ring, enabling rapid screening of long, inaccessible, or buried piping for corrosion.',
    "<h2>Definition</h2><p>Guided Wave Testing (GWT, also LRUT — Long-Range Ultrasonic Testing) uses low-frequency torsional or longitudinal <a href='/glossary/lamb-wave'>Lamb-type waves</a> launched by a clamp-on transducer ring. The waves propagate along the pipe and reflect from features such as welds, supports, and corrosion.</p><h2>Technical Context</h2><p>Typical inspection range is 30–60 m on each side of the ring, depending on coating, soil contact, and weld density. GWT is a screening tool, not a sizing tool: anomalies must be confirmed with conventional UT.</p><h2>When It Is Used</h2><ul><li>Insulated piping (CUI screening)</li><li>Buried, road-crossing, and pipe-rack inspection</li><li>Refinery piping baseline surveys</li></ul><h2>Related Standards</h2><p>ASTM E2775, ISO 18211, BS 9690.</p>",
    ['ultrasonic-testing', 'lamb-wave', 'corrosion-under-insulation-cui'],
    ['guided-wave-testing-for-pipeline-inspection']
  ),

  e('internal-rotary-inspection-system-iris', 'Internal Rotary Inspection System (IRIS)', 'method',
    'IRIS is an ultrasonic tube-inspection technique in which a water-driven rotating mirror inside the tube directs an ultrasonic beam radially outward, producing a high-resolution image of wall thickness and ID/OD pitting.',
    "<h2>Definition</h2><p>IRIS is an immersion ultrasonic technique for heat-exchanger tube inspection. A probe pushed through the tube contains a rotating mirror driven by water flow; the mirror reflects a focused ultrasonic pulse perpendicular to the tube wall. The reflected echoes give a precise wall-thickness map of the entire tube.</p><h2>Technical Context</h2><p>IRIS provides absolute thickness data — superior to <a href='/glossary/eddy-current-testing'>eddy current</a> for non-ferromagnetic and ferromagnetic tubes alike — but is slower. It is often used to confirm and quantify anomalies found by faster ECT screening.</p><h2>When It Is Used</h2><ul><li>Heat-exchanger tube wall thickness measurement</li><li>Pitting and ID/OD corrosion quantification</li><li>Confirmation of ECT or RFT findings</li></ul>",
    ['eddy-current-testing', 'ultrasonic-testing', 'heat-exchanger'],
    ['heat-exchanger-tube-inspection-methods-procedures']
  ),

  e('automated-ultrasonic-testing-aut', 'Automated Ultrasonic Testing (AUT)', 'method',
    'AUT is the use of mechanized scanners with encoded position to perform ultrasonic inspection (typically PAUT and/or TOFD) with consistent coverage, full data capture, and repeatable scan plans, widely used for pipeline girth welds.',
    "<h2>Definition</h2><p>Automated Ultrasonic Testing (AUT) employs mechanized scanners — usually band-driven for pipeline girth welds — that carry one or more PAUT and TOFD probes around the weld at a controlled speed. Position is recorded by an <a href='/glossary/encoder'>encoder</a>, and full waveform data are captured for every position.</p><h2>Technical Context</h2><p>AUT replaces radiography on many pipeline construction projects, achieving higher inspection speed and zero radiation exposure. Acceptance is generally per <a href='/glossary/api-1163'>API 1163</a> and <a href='/glossary/iso-13588'>ISO 13588</a> for the system, with weld acceptance per the construction code.</p><h2>When It Is Used</h2><ul><li>Pipeline girth-weld inspection in lay barges and onshore spreads</li><li>Heavy-wall vessel and nozzle weld inspection</li><li>In-service crack monitoring</li></ul>",
    ['phased-array-ultrasonic-testing-paut', 'time-of-flight-diffraction-tofd', 'iso-13588'],
    ['automated-ut-aut-systems-complete-overview', 'automated-ultrasonic-testing-systems-overview-benefits']
  ),

  e('magnetic-flux-leakage-mfl', 'Magnetic Flux Leakage (MFL)', 'method',
    'MFL is an electromagnetic NDT method that magnetizes a ferromagnetic component to saturation and detects flux leakage at metal-loss features using Hall-effect or coil sensors, widely used for tank-floor and pipeline pig inspection.',
    "<h2>Definition</h2><p>Magnetic Flux Leakage (MFL) inspection magnetizes a ferromagnetic component, typically to near magnetic saturation. Where wall thickness is locally reduced — by pitting, corrosion, or grooving — magnetic flux 'leaks' from the surface and is sensed by a Hall sensor or coil array. The leakage amplitude correlates with metal loss.</p><h2>Technical Context</h2><p>MFL is the dominant technique for storage-tank floor scanning and in-line pipeline inspection (ILI pigs). It is fast and reliable for general wall loss but less sensitive to circumferentially oriented cracks.</p><h2>When It Is Used</h2><ul><li>API 653 tank-floor inspection</li><li>Pipeline ILI pigging</li><li>Tube and wire rope inspection</li></ul><h2>Related Standards</h2><p>API 653, API 1163, ASTM E570.</p>",
    ['storage-tank', 'api-653', 'pipeline'],
    ['storage-tank-floor-scanning-mfl-vs-ut-comparison']
  ),

  e('alternating-current-field-measurement-acfm', 'Alternating Current Field Measurement (ACFM)', 'method',
    'ACFM is an electromagnetic NDT technique that induces a uniform AC field in a conductive component and measures the field disturbance over surface-breaking cracks to size their length and depth without surface cleaning.',
    "<h2>Definition</h2><p>ACFM induces a uniform alternating-current magnetic field parallel to the inspected surface. A surface-breaking crack disturbs the resulting current flow; an array of sensors above the surface measures the orthogonal magnetic field components Bx and Bz, from which crack length and depth are calculated.</p><h2>Technical Context</h2><p>Because ACFM is calibrated mathematically rather than against a reference flaw, it works through paint and coatings and on hot surfaces. It is widely used for in-service inspection of structural welds in offshore platforms, ships, and onshore plant.</p><h2>When It Is Used</h2><ul><li>Offshore structural weld inspection (through coating)</li><li>Topside piping and bridge weld inspection</li><li>High-temperature crack monitoring</li></ul>",
    ['eddy-current-testing', 'magnetic-particle-testing'],
    []
  ),

  e('computed-radiography-cr', 'Computed Radiography (CR)', 'method',
    'Computed Radiography (CR) replaces traditional X-ray film with a reusable photostimulable phosphor imaging plate that is scanned by a laser reader to produce a digital radiograph, reducing chemicals, time, and consumables.',
    "<h2>Definition</h2><p>Computed Radiography uses a photostimulable storage phosphor (PSP) imaging plate in place of film. After exposure, the plate is read by a laser scanner that releases the trapped energy as visible light, which is digitized into an image. The plate is then erased and reused.</p><h2>Technical Context</h2><p>CR provides a wider dynamic range than film and eliminates chemical processing, but it has lower spatial resolution than the best film systems. ASME Section V Article 2 Mandatory Appendix VI provides acceptance rules.</p><h2>When It Is Used</h2><ul><li>Construction RT where chemical processing is impractical</li><li>In-service piping RT</li><li>Field weld inspection</li></ul>",
    ['radiographic-testing', 'digital-radiography-dr'],
    ['digital-radiography-vs-film-complete-migration-guide']
  ),

  e('digital-radiography-dr', 'Digital Radiography (DR)', 'method',
    'Digital Radiography uses a flat-panel detector (amorphous silicon or amorphous selenium) to capture an X-ray image directly in digital form in real time, with higher signal-to-noise ratio and faster cycle time than CR or film.',
    "<h2>Definition</h2><p>Digital Radiography (DR) uses a direct-conversion (a-Se) or indirect-conversion (a-Si with scintillator) flat-panel detector to capture an X-ray image directly as digital data. There is no scanning step, so image acquisition is essentially instantaneous.</p><h2>Technical Context</h2><p>DR offers excellent contrast resolution and is well-suited to high-throughput shop radiography. ASME Section V Article 2 Mandatory Appendix IX governs DR acceptance.</p><h2>When It Is Used</h2><ul><li>Production-shop radiography of welds and castings</li><li>Real-time inspection cells</li><li>Security and aerospace component imaging</li></ul>",
    ['radiographic-testing', 'computed-radiography-cr', 'real-time-radiography-rtr'],
    ['digital-radiography-vs-film-complete-migration-guide']
  ),

  e('real-time-radiography-rtr', 'Real-Time Radiography (RTR)', 'method',
    'Real-Time Radiography uses image-intensifier tubes or flat-panel detectors to display a live X-ray video of a component, allowing dynamic inspection of moving parts, fluid flow, or operator-positioned objects.',
    "<h2>Definition</h2><p>Real-Time Radiography (RTR) produces a continuously updating X-ray image at video frame rates. The component or X-ray source can be moved while the operator watches the live image, dramatically increasing throughput for repetitive parts and enabling dynamic studies of valves, castings, and assemblies.</p><h2>Technical Context</h2><p>Modern RTR systems use flat-panel detectors with frame rates of 15–30 fps and image-processing software that integrates multiple frames to improve SNR.</p><h2>When It Is Used</h2><ul><li>Castings inspection (automotive, aerospace)</li><li>Electronic component inspection (BGA, solder joints)</li><li>Security and customs screening</li></ul>",
    ['radiographic-testing', 'digital-radiography-dr'],
    []
  ),

  // ───────── UT-specific ─────────
  e('a-scan', 'A-Scan', 'data',
    'An A-scan is the basic ultrasonic display showing signal amplitude (vertical axis) versus time-of-flight (horizontal axis) from a single transducer position, used to identify, size, and locate reflectors.',
    "<h2>Definition</h2><p>The A-scan is the fundamental display format of an ultrasonic flaw detector: a single-line waveform with amplitude on the vertical axis and time (or equivalent path-length) on the horizontal axis. Each peak represents an echo from an interface or discontinuity.</p><h2>Technical Context</h2><p>Inspectors interpret A-scans by comparing peak amplitudes against the calibrated <a href='/glossary/distance-amplitude-correction-dac'>DAC</a> or <a href='/glossary/distance-gain-size-dgs'>DGS</a> curves and by measuring time-of-flight to compute depth and through-wall position.</p><h2>When It Is Used</h2><ul><li>Every conventional <a href='/glossary/ultrasonic-testing'>ultrasonic test</a></li><li>Calibration verification</li><li>Thickness measurement</li></ul>",
    ['ultrasonic-testing', 'b-scan', 'c-scan', 'distance-amplitude-correction-dac'],
    []
  ),

  e('b-scan', 'B-Scan', 'data',
    'A B-scan is a cross-sectional ultrasonic display showing depth (vertical) versus probe position along the scan axis (horizontal), with signal amplitude encoded as brightness or color, used for thickness profiling and corrosion mapping.',
    "<h2>Definition</h2><p>A B-scan produces a side view of the test piece by collecting A-scans as the probe moves along a scan line and plotting depth vertically and position horizontally. The amplitude at each (depth, position) point is shown as brightness or color.</p><h2>Technical Context</h2><p>B-scans are heavily used for thickness mapping and corrosion profile imaging. They are sometimes confused with the cross-sectional view produced by <a href='/glossary/time-of-flight-diffraction-tofd'>TOFD</a>.</p><h2>When It Is Used</h2><ul><li>Wall thickness profiling of vessels and tanks</li><li>Corrosion mapping</li><li>Quick weld profile visualization</li></ul>",
    ['a-scan', 'c-scan', 'ultrasonic-testing'],
    []
  ),

  e('c-scan', 'C-Scan', 'data',
    'A C-scan is a plan-view ultrasonic display showing peak signal amplitude (color-coded) at every (X, Y) probe position across the inspected surface, producing a top-down map of internal flaws or wall loss.',
    "<h2>Definition</h2><p>A C-scan presents inspection data as a 2D plan view: the probe is scanned over an X-Y grid, and the peak signal amplitude (or time-of-flight) within a chosen gate is plotted as color at each grid point. The result is a top-down map of the inspected volume.</p><h2>Technical Context</h2><p>C-scans are essential for corrosion mapping, composite delamination imaging, and any inspection where the spatial extent of damage matters as much as its severity.</p><h2>When It Is Used</h2><ul><li>Pressure-vessel and tank corrosion mapping</li><li>Composite and bondline imaging</li><li>Forging laminations</li></ul>",
    ['a-scan', 'b-scan', 'ultrasonic-testing', 'corrosion-mapping'],
    []
  ),

  e('d-scan', 'D-Scan', 'data',
    'A D-scan is an end-view ultrasonic display showing depth versus probe index axis (the secondary scan direction), used in encoded raster scanning to visualize defect distribution across the weld width.',
    "<h2>Definition</h2><p>The D-scan is the depth-versus-index view in a raster ultrasonic scan, complementary to the B-scan (depth versus scan axis) and C-scan (plan view). Together, B/C/D scans give the operator three orthogonal projections of the data volume.</p>",
    ['b-scan', 'c-scan', 'ultrasonic-testing'],
    []
  ),

  e('s-scan', 'S-Scan (Sectorial Scan)', 'data',
    'An S-scan is a phased-array ultrasonic image showing a fan of beams swept through a range of angles from a single probe position, displaying defect indications across the angular range in a single view.',
    "<h2>Definition</h2><p>The S-scan, or sectorial scan, is the signature display of <a href='/glossary/phased-array-ultrasonic-testing-paut'>PAUT</a>. By electronically steering the beam from a low to a high angle (for example 40° to 70°), the system builds an angular slice through the inspection volume, displayed as color-coded amplitude over a fan-shaped sector.</p><h2>Technical Context</h2><p>S-scans accelerate weld inspection because every weld zone is interrogated from many angles in one probe stop. The display shows depth and angular position of any reflector.</p>",
    ['phased-array-ultrasonic-testing-paut', 'l-scan', 'a-scan'],
    ['phased-array-ultrasonic-testing-paut-guide']
  ),

  e('l-scan', 'L-Scan (Linear Scan)', 'data',
    'An L-scan is a phased-array ultrasonic image produced by electronically stepping a fixed-angle beam along the array aperture, generating a side-by-side series of A-scans at constant angle and varying position.',
    "<h2>Definition</h2><p>The Linear scan (L-scan) keeps the beam angle constant and steps the active aperture along the array, producing a series of A-scans at successive positions without physically moving the probe. The result is equivalent to a mechanized raster scan but acquired instantaneously.</p><h2>Technical Context</h2><p>L-scans are widely used for corrosion mapping with a 0° beam and for weld inspection with a 45°, 60°, or 70° angle.</p>",
    ['s-scan', 'phased-array-ultrasonic-testing-paut'],
    []
  ),

  e('back-wall-echo', 'Back-Wall Echo', 'physics',
    'The back-wall echo is the ultrasonic signal reflected from the far surface of a test piece; its presence confirms sound transmission and its loss can indicate a major defect or coupling problem.',
    "<h2>Definition</h2><p>The back-wall echo is the first reflection from the back surface of the test piece — the signal that traveled through the full thickness and bounced back. Its time-of-flight equals 2 × thickness / velocity.</p><h2>Technical Context</h2><p>A strong back-wall echo confirms good <a href='/glossary/contact-coupling'>coupling</a> and a sound load path. A reduction or loss of the back-wall echo at certain positions indicates beam blockage by a large reflector — a 'loss of back-wall' indication.</p>",
    ['ultrasonic-testing', 'a-scan', 'attenuation'],
    []
  ),

  e('calibration-block', 'Calibration Block', 'equipment',
    'A calibration block is a reference specimen with known geometry and reference reflectors (side-drilled holes, flat-bottom holes, notches) used to set ultrasonic instrument sensitivity, range, and angle prior to inspection.',
    "<h2>Definition</h2><p>A calibration block is a manufactured reference standard against which the ultrasonic flaw detector is set up. Common designs include the IIW V1 and V2 blocks (used to verify angle, exit point, and sensitivity) and application-specific blocks containing <a href='/glossary/side-drilled-hole-sdh'>side-drilled holes</a>, <a href='/glossary/flat-bottom-hole-fbh'>flat-bottom holes</a>, or <a href='/glossary/notch-reference'>notches</a>.</p><h2>Technical Context</h2><p>Calibration blocks must be made of the same material and surface condition as the test piece. <a href='/glossary/distance-amplitude-correction-dac'>DAC</a> and <a href='/glossary/time-corrected-gain-tcg'>TCG</a> curves are built from SDH responses at multiple depths.</p>",
    ['side-drilled-hole-sdh', 'flat-bottom-hole-fbh', 'distance-amplitude-correction-dac', 'reference-reflector'],
    ['reference-standards-and-block-calibration-in-ut']
  ),

  e('distance-amplitude-correction-dac', 'Distance-Amplitude Correction (DAC)', 'data',
    'DAC is an ultrasonic calibration curve plotted on the A-scan display that shows expected echo amplitude from a reference reflector at varying depths, used to evaluate flaw size while compensating for beam spread and attenuation.',
    "<h2>Definition</h2><p>A Distance-Amplitude Correction (DAC) curve plots the echo amplitude from a chosen reference reflector — typically a <a href='/glossary/side-drilled-hole-sdh'>side-drilled hole</a> — at a series of metal paths. The curve forms a sloping envelope on the A-scan against which any indication's amplitude is compared.</p><h2>Technical Context</h2><p>DAC compensates for the natural amplitude reduction with distance caused by beam divergence and <a href='/glossary/attenuation'>attenuation</a>. Codes typically specify accept/reject thresholds such as 50% DAC, 100% DAC, or 20% DAC.</p>",
    ['distance-gain-size-dgs', 'time-corrected-gain-tcg', 'side-drilled-hole-sdh'],
    []
  ),

  e('distance-gain-size-dgs', 'Distance-Gain-Size (DGS)', 'data',
    'DGS is an ultrasonic sizing technique that compares the echo amplitude from an unknown reflector to a family of curves representing equivalent flat-bottom-hole sizes at varying distances, calculated from probe characteristics.',
    "<h2>Definition</h2><p>The Distance-Gain-Size (DGS) method, also called AVG, uses probe-specific curves derived from acoustic theory rather than reference reflectors in a block. Each curve represents the echo amplitude from a flat-bottom hole of a specific equivalent diameter as a function of distance.</p><h2>Technical Context</h2><p>DGS provides an 'equivalent reflector size' for any indication, useful for sizing volumetric flaws. It is widely used in European weld inspection per <a href='/glossary/iso-11666'>ISO 11666</a> and in forging inspection.</p>",
    ['distance-amplitude-correction-dac', 'flat-bottom-hole-fbh', 'ultrasonic-testing'],
    []
  ),

  e('time-corrected-gain-tcg', 'Time-Corrected Gain (TCG)', 'data',
    'TCG is an ultrasonic instrument feature that automatically increases system gain as a function of time-of-flight, flattening the DAC curve so all reference reflectors display at the same amplitude regardless of depth.',
    "<h2>Definition</h2><p>Time-Corrected Gain (TCG) ramps the receiver gain with time so that the response from identical reflectors at different depths is normalized to the same amplitude. The DAC curve becomes a flat horizontal line, simplifying sizing.</p><h2>Technical Context</h2><p>TCG is essential for phased-array inspections, where many beams must produce consistent amplitude response, and is the basis for ASME Section V phased-array calibration.</p>",
    ['distance-amplitude-correction-dac', 'phased-array-ultrasonic-testing-paut'],
    []
  ),

  e('beam-spread', 'Beam Spread', 'physics',
    'Beam spread is the angular divergence of an ultrasonic beam beyond the near-field distance, governed by transducer diameter and frequency; it sets the lateral resolution of the inspection.',
    "<h2>Definition</h2><p>Beam spread is the half-angle θ of divergence of the ultrasonic beam in the <a href='/glossary/far-field'>far field</a>. For a circular piston transducer, sin θ ≈ 1.22 λ/D, where λ is the wavelength and D the element diameter.</p><h2>Technical Context</h2><p>Higher frequencies and larger diameters give narrower beams (better lateral resolution). Beam spread directly influences DAC and DGS curves and the minimum resolvable flaw spacing.</p>",
    ['near-field', 'far-field', 'transducer'],
    []
  ),

  e('near-field', 'Near-Field', 'physics',
    'The near-field is the region close to an ultrasonic transducer where the beam has complex pressure variations and a converging shape; precise amplitude measurements are unreliable until beyond the near-field length N.',
    "<h2>Definition</h2><p>The near-field (Fresnel zone) extends from the transducer face to a distance N ≈ D²/(4λ), where D is element diameter and λ is wavelength. Within this zone the beam undergoes complex interference and pressure fluctuates rapidly.</p><h2>Technical Context</h2><p>Reliable amplitude-based sizing requires reflectors beyond the near-field, in the <a href='/glossary/far-field'>far field</a>. Probe selection always considers the expected flaw depth versus N.</p>",
    ['far-field', 'beam-spread', 'transducer'],
    ['probe-selection-and-frequency-optimization']
  ),

  e('far-field', 'Far-Field', 'physics',
    'The far-field is the region beyond the near-field distance N where the ultrasonic beam diverges in a predictable manner and amplitude decays inversely with distance, suitable for quantitative sizing.',
    "<h2>Definition</h2><p>The far-field (Fraunhofer zone) lies beyond the near-field length N. In this region the beam shape is well-behaved, amplitude decays predictably with distance, and DAC/DGS analysis is valid.</p>",
    ['near-field', 'beam-spread'],
    []
  ),

  e('dead-zone', 'Dead Zone', 'physics',
    'The dead zone is the region immediately below the surface where ultrasonic flaws cannot be detected because the initial pulse and surface echo mask any signal; minimized by using delay lines, dual-element probes, or higher-frequency probes.',
    "<h2>Definition</h2><p>The dead zone is the depth range near the entry surface in which flaw echoes are obscured by the transmit pulse ring-down and the front-surface echo. Its extent depends on probe damping, frequency, and pulse length.</p><h2>Technical Context</h2><p>For near-surface inspection, <a href='/glossary/dual-element-probe'>dual-element probes</a> or delay-line probes virtually eliminate the dead zone.</p>",
    ['dual-element-probe', 'transducer'],
    []
  ),

  e('gating', 'Gating (UT Gates)', 'data',
    'Gating in ultrasonic testing is the definition of time windows on the A-scan within which the instrument monitors for echoes; used for thickness measurement, alarms, and flaw recording in encoded scans.',
    "<h2>Definition</h2><p>A gate is a user-defined time window on the A-scan. The instrument monitors signal amplitude or first-crossing time within each gate and triggers thickness readings, alarms, or data captures based on user thresholds.</p><h2>Technical Context</h2><p>Most flaw detectors offer two or three independent gates: an interface gate for the front surface, a flaw gate covering the wall, and sometimes a back-wall gate to alarm on loss of back-wall.</p>",
    ['a-scan', 'ultrasonic-testing'],
    []
  ),

  e('transducer', 'Transducer (Ultrasonic)', 'equipment',
    'An ultrasonic transducer is a device — typically containing a piezoelectric element — that converts electrical pulses to mechanical vibrations and vice versa, used to launch and receive ultrasonic waves in the test piece.',
    "<h2>Definition</h2><p>An ultrasonic transducer (probe) contains one or more piezoelectric elements (PZT, composite, or single-crystal) that vibrate when energized and convert returning mechanical waves back into electrical signals. The element is mounted on a backing material that damps unwanted ringing.</p><h2>Technical Context</h2><p>Probes are characterized by frequency (typically 1–10 MHz), element size, near-field length, and beam profile. Variants include <a href='/glossary/normal-beam-probe'>normal-beam (0°)</a>, <a href='/glossary/angle-beam-probe'>angle-beam</a>, <a href='/glossary/dual-element-probe'>dual-element</a>, immersion, and phased-array probes.</p>",
    ['normal-beam-probe', 'angle-beam-probe', 'dual-element-probe', 'phased-array-ultrasonic-testing-paut'],
    ['probe-selection-and-frequency-optimization']
  ),

  e('dual-element-probe', 'Dual-Element Probe', 'equipment',
    'A dual-element (TR) probe contains two piezoelectric elements — one transmit and one receive — separated by an acoustic barrier, used to eliminate the dead zone and improve near-surface and thin-wall inspection.',
    "<h2>Definition</h2><p>A dual-element probe (also called TR, twin-crystal, or sender-receiver probe) has separate transmit and receive elements mounted at slight roof angles. The geometric crossover of the beams creates a focal zone close to the surface, virtually eliminating the <a href='/glossary/dead-zone'>dead zone</a>.</p><h2>When It Is Used</h2><ul><li>Thin-wall thickness gauging</li><li>Near-surface corrosion monitoring</li><li>Inspection of cladded surfaces</li></ul>",
    ['transducer', 'dead-zone', 'ultrasonic-testing'],
    []
  ),

  e('angle-beam-probe', 'Angle-Beam Probe', 'equipment',
    'An angle-beam probe couples ultrasonic energy through a plastic wedge to produce a refracted shear or longitudinal wave at a fixed angle (typically 45°, 60°, or 70°) in the test piece, used primarily for weld inspection.',
    "<h2>Definition</h2><p>An angle-beam probe consists of a longitudinal-wave element bonded to a plastic wedge cut so that Snell's law refracts the wave into the test piece at a desired angle. By choosing the wedge angle, inspectors generate refracted <a href='/glossary/shear-wave'>shear waves</a> at 45°, 60°, or 70° — the canonical weld-inspection angles.</p>",
    ['shear-wave', 'normal-beam-probe', 'mode-conversion', 'transducer'],
    ['shear-wave-ut-for-thick-section-inspection']
  ),

  e('normal-beam-probe', 'Normal-Beam Probe', 'equipment',
    'A normal-beam probe (0°) launches a longitudinal wave perpendicular to the test surface, used primarily for thickness measurement and for detecting laminar defects parallel to the surface.',
    "<h2>Definition</h2><p>A normal-beam probe sends a longitudinal wave straight into the part. It is the workhorse for wall-thickness measurement and lamination detection in plate, forgings, and pressure-vessel walls.</p>",
    ['angle-beam-probe', 'transducer', 'longitudinal-wave'],
    []
  ),

  e('contact-coupling', 'Contact Coupling', 'procedure',
    'Contact coupling is the ultrasonic technique in which the probe is pressed directly against the test surface with a thin film of couplant between them; the simplest and most common UT setup.',
    "<h2>Definition</h2><p>In contact coupling the probe is hand-held against the test surface, with a thin layer of <a href='/glossary/couplant'>couplant</a> bridging the air gap. Most field UT is performed this way.</p>",
    ['couplant', 'immersion-testing', 'ultrasonic-testing'],
    []
  ),

  e('couplant', 'Couplant', 'equipment',
    'A couplant is a liquid or gel (water, glycerin, propylene glycol, or proprietary gel) applied between the ultrasonic probe and the test surface to transmit sound energy by eliminating the air gap.',
    "<h2>Definition</h2><p>Air at the probe-to-part interface reflects 99.99% of ultrasonic energy. A couplant — typically water, oil, gel, or grease — displaces the air and enables efficient sound transmission.</p><h2>Technical Context</h2><p>Couplant choice depends on surface temperature, orientation (overhead vs. flat), and process compatibility. High-temperature couplants extend usable range to several hundred °C.</p>",
    ['contact-coupling', 'ultrasonic-testing'],
    []
  ),

  e('immersion-testing', 'Immersion Testing (Immersion UT)', 'procedure',
    'Immersion ultrasonic testing places the probe and test piece in a water tank; water provides constant coupling and enables precise focused-beam scanning of complex geometries, common in aerospace and tube manufacturing.',
    "<h2>Definition</h2><p>Immersion UT submerges the probe and part in water, using the water as both couplant and as a controllable standoff. Focused immersion probes can be positioned precisely above the test surface to achieve very tight focal spots.</p><h2>When It Is Used</h2><ul><li>Aerospace forging and billet inspection</li><li>Tube and pipe production-line scanning</li><li>Composite and ceramic inspection</li></ul>",
    ['contact-coupling', 'ultrasonic-testing'],
    ['immersion-ultrasonic-testing-for-complex-components']
  ),

  e('shear-wave', 'Shear Wave', 'physics',
    'A shear wave is an ultrasonic mode in which particle motion is perpendicular to the direction of propagation; in steel, shear waves travel at ~3,250 m/s and are produced by mode conversion at angled wedges for weld inspection.',
    "<h2>Definition</h2><p>Shear (transverse) waves vibrate perpendicular to the propagation direction. They cannot propagate in liquids or gases. In metals, shear-wave velocity is roughly half the longitudinal velocity (e.g., 3,250 m/s versus 5,920 m/s in carbon steel).</p><h2>Technical Context</h2><p>Most weld inspection uses shear waves refracted from a plastic wedge at 45°, 60°, or 70°.</p>",
    ['longitudinal-wave', 'mode-conversion', 'angle-beam-probe', 'surface-wave'],
    ['shear-wave-ut-for-thick-section-inspection', 'compression-wave-vs-shear-wave-technical-differences']
  ),

  e('longitudinal-wave', 'Longitudinal Wave', 'physics',
    'A longitudinal (compression) wave is the ultrasonic mode in which particle motion is parallel to the direction of propagation; the fastest wave mode, used for thickness measurement and 0° flaw detection.',
    "<h2>Definition</h2><p>Longitudinal waves compress and rarefy the medium along the propagation axis. They can propagate in solids, liquids, and gases, and travel faster than shear waves. In carbon steel, longitudinal velocity is ~5,920 m/s.</p>",
    ['shear-wave', 'normal-beam-probe', 'mode-conversion'],
    ['compression-wave-vs-shear-wave-technical-differences']
  ),

  e('surface-wave', 'Surface Wave (Rayleigh Wave)', 'physics',
    'A surface wave (Rayleigh wave) is an ultrasonic mode that propagates along the surface of a solid with motion confined within roughly one wavelength of the surface, used for surface-crack detection on curved or complex surfaces.',
    "<h2>Definition</h2><p>Rayleigh surface waves travel along the free surface of a solid with elliptical particle motion confined to about one wavelength depth. They are highly sensitive to surface-breaking defects and follow contoured surfaces around corners.</p><h2>When It Is Used</h2><ul><li>Surface crack detection in welds and shafts</li><li>Stress-corrosion crack inspection</li><li>Aerospace fillet and radius inspection</li></ul>",
    ['shear-wave', 'longitudinal-wave', 'lamb-wave'],
    []
  ),

  e('lamb-wave', 'Lamb Wave', 'physics',
    'A Lamb wave is a guided ultrasonic plate wave that propagates through the full thickness of a thin-walled plate or pipe with symmetric and antisymmetric modes, used in long-range guided-wave inspection and aircraft skin scanning.',
    "<h2>Definition</h2><p>Lamb waves are guided waves that exist in plate-like structures with thickness on the order of one wavelength. They occur in symmetric (S) and antisymmetric (A) modes, each with multiple orders. Lamb waves are the basis for <a href='/glossary/guided-wave-testing-gwt'>Guided Wave Testing</a>.</p>",
    ['guided-wave-testing-gwt', 'surface-wave', 'mode-conversion'],
    []
  ),

  e('mode-conversion', 'Mode Conversion', 'physics',
    'Mode conversion is the partial conversion of an ultrasonic wave from one mode (longitudinal, shear, surface) to another at a refracting or reflecting interface, governed by Snell\'s law and the angle of incidence.',
    "<h2>Definition</h2><p>When an ultrasonic wave strikes an interface at non-normal incidence, part of the energy refracts and reflects in modes different from the incident wave. For an angled wedge on steel, the incident longitudinal wave produces both refracted longitudinal and refracted shear waves; choosing the wedge angle selects which mode dominates.</p>",
    ['shear-wave', 'longitudinal-wave', 'angle-beam-probe'],
    []
  ),

  e('attenuation', 'Attenuation (Ultrasonic)', 'physics',
    'Attenuation is the loss of ultrasonic energy as it propagates through a material due to absorption, scattering, and beam spread, expressed in decibels per unit path length and material-dependent.',
    "<h2>Definition</h2><p>Attenuation describes how rapidly an ultrasonic signal loses amplitude with distance. It combines absorption (energy converted to heat) and scattering (energy redirected by grain boundaries, porosity, or other heterogeneities). Coarse-grained austenitic stainless steel attenuates much more than fine-grained carbon steel.</p><h2>Technical Context</h2><p>Attenuation is corrected for in <a href='/glossary/distance-amplitude-correction-dac'>DAC</a> and <a href='/glossary/time-corrected-gain-tcg'>TCG</a> calibration.</p>",
    ['decibel-db', 'beam-spread', 'distance-amplitude-correction-dac'],
    []
  ),

  e('decibel-db', 'Decibel (dB)', 'data',
    'A decibel is a logarithmic unit of relative amplitude ratio used throughout ultrasonic testing; 6 dB equals a factor of 2 in amplitude, and 20 dB equals a factor of 10.',
    "<h2>Definition</h2><p>The decibel (dB) is 20 × log₁₀(amplitude ratio). It is the standard way to express signal levels, gain settings, and reference offsets in ultrasonic testing. Each 6 dB change doubles or halves amplitude; each 20 dB change is a factor of 10.</p>",
    ['distance-amplitude-correction-dac', 'attenuation'],
    []
  ),

  e('reference-reflector', 'Reference Reflector', 'equipment',
    'A reference reflector is a machined feature in a calibration block — typically a side-drilled hole, flat-bottom hole, or notch — used as a known target to set instrument gain and build sizing curves.',
    "<h2>Definition</h2><p>Reference reflectors are deliberately machined targets of precisely known size and orientation. They provide the repeatable echoes against which the ultrasonic system is calibrated. Common types are <a href='/glossary/side-drilled-hole-sdh'>side-drilled holes</a>, <a href='/glossary/flat-bottom-hole-fbh'>flat-bottom holes</a>, and surface <a href='/glossary/notch-reference'>notches</a>.</p>",
    ['side-drilled-hole-sdh', 'flat-bottom-hole-fbh', 'notch-reference', 'calibration-block'],
    []
  ),

  e('side-drilled-hole-sdh', 'Side-Drilled Hole (SDH)', 'equipment',
    'A side-drilled hole is a cylindrical reference reflector drilled perpendicular to the inspection surface, used as a length-independent angle-beam target for building DAC curves and verifying sensitivity.',
    "<h2>Definition</h2><p>An SDH is a small-diameter (typically 1.5 mm or 3 mm) hole drilled through the side of a calibration block. Its long cylindrical surface presents the same echo amplitude regardless of axial position, making it ideal for angle-beam DAC curves.</p>",
    ['calibration-block', 'flat-bottom-hole-fbh', 'distance-amplitude-correction-dac'],
    ['reference-standards-and-block-calibration-in-ut']
  ),

  e('flat-bottom-hole-fbh', 'Flat-Bottom Hole (FBH)', 'equipment',
    'A flat-bottom hole is a reference reflector drilled into a calibration block to a precise depth with a flat bottom perpendicular to the beam axis, used as a known disc-shaped target for normal-beam sizing.',
    "<h2>Definition</h2><p>An FBH is a blind hole whose flat bottom presents a perfect disc reflector to a normal-beam probe. FBHs are used in <a href='/glossary/distance-gain-size-dgs'>DGS</a> sizing and in aerospace forging acceptance, where flaws are specified in terms of equivalent FBH diameter (for example, '#3 FBH' is a 3/64-inch FBH).</p>",
    ['side-drilled-hole-sdh', 'distance-gain-size-dgs', 'calibration-block'],
    ['flat-bottom-hole-sensitivity-in-ut-inspection']
  ),

  e('notch-reference', 'Notch Reference', 'equipment',
    'A notch reference is a machined surface-breaking notch of known depth, length, and width used to calibrate ultrasonic systems for surface-crack detection and to set acceptance thresholds for shear-wave inspection.',
    "<h2>Definition</h2><p>Notches are typically EDM-cut surface-breaking slots used as reference reflectors for surface or angled-beam inspection. They simulate planar cracks and are widely used in pipeline AUT and aerospace inspection calibration.</p>",
    ['calibration-block', 'reference-reflector', 'shear-wave'],
    []
  ),
];

writeFileSync(new URL('./part1.json', import.meta.url), JSON.stringify(entries, null, 2));
console.log(`Part 1 entries: ${entries.length}`);
