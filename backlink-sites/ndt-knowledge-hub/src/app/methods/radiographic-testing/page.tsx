import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Radiographic Testing (RT) Guide | X-ray & Gamma Ray Inspection',
  description: 'Complete guide to radiographic testing including X-ray and gamma ray methods, equipment, image interpretation, safety protocols, and industry standards for weld and casting inspection.',
  keywords: [
    'radiographic testing',
    'RT inspection',
    'X-ray testing',
    'gamma ray testing',
    'weld inspection',
    'casting inspection',
    'radiography',
    'ASME standards',
    'ASTM standards',
    'image quality indicator',
    'film density',
    'digital radiography'
  ],
  openGraph: {
    title: 'Radiographic Testing (RT) Guide | X-ray & Gamma Ray Inspection',
    description: 'Comprehensive guide to radiographic testing methods, equipment setup, and industry standards.',
    type: 'article',
    url: 'https://www.example.com/methods/radiographic-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Radiographic Testing' },
  { id: 'radiation-sources', title: 'Radiation Sources' },
  { id: 'image-recording', title: 'Image Recording Methods' },
  { id: 'procedures', title: 'Inspection Procedures' },
  { id: 'applications', title: 'Applications' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
];

export default function RadiographicTestingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/methods" className="text-blue-600 hover:underline">Methods</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Radiographic Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Radiographic Testing (RT): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Radiographic testing uses X-ray and gamma ray radiation to visualize internal material structure and detect defects. This comprehensive guide explores radiation physics, source technologies, image recording methods, safety protocols, and real-world applications that have made RT essential for critical infrastructure inspection.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              Since its invention in 1895, radiography has provided inspectors with direct visual evidence of internal defects through penetrating radiation, making it one of the most definitive NDT methods for detecting density variations and determining defect severity.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Table of Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline text-sm">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <article className="prose-custom">
          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 mb-4">
              Radiographic testing represents a fundamental non-destructive testing method that creates visual images of part internal structure through differential absorption of penetrating radiation. Unlike ultrasonic testing, which requires sophisticated signal interpretation, radiography provides two-dimensional images that directly reveal defects such as porosity, inclusions, cracks, and lack of fusion in welds. This visual evidence makes radiography the regulatory standard for many critical applications, particularly weld inspection in pressure equipment and pipeline infrastructure.
            </p>
            <p className="text-slate-700 mb-4">
              Two primary radiation sources enable radiographic testing: X-rays generated through electromagnetic interactions and gamma rays emitted through radioactive decay. Each source offers distinct advantages—X-ray systems provide superior image quality and higher throughput in laboratory settings, while gamma ray sources enable portable field radiography without external power requirements. The choice between X-ray and gamma sources depends on accessibility, safety infrastructure, and imaging requirements.
            </p>
            <p className="text-slate-700">
              This comprehensive guide examines the physics underlying radiographic imaging, equipment specifications, image recording technologies, standardized inspection procedures, and safety protocols essential for effective radiographic programs.
            </p>
          </section>

          {/* Principles of Radiographic Testing */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Radiographic Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Radiation Physics Fundamentals</h3>
            <p className="text-slate-700 mb-4">
              Radiographic testing relies on differential X-ray and gamma-ray absorption through materials. When penetrating radiation passes through matter, it undergoes attenuation according to the Lambert-Beer equation:
            </p>
            <p className="text-slate-700 mb-4 font-mono text-sm bg-slate-100 p-4 rounded">
              I = I₀ × e^(-μx)
            </p>
            <p className="text-slate-700 mb-4">
              Where I is transmitted intensity, I₀ is incident intensity, μ (mu) is the linear attenuation coefficient (material and energy dependent), and x is material thickness. Materials with higher density and atomic number absorb more radiation, appearing darker on radiographic images. Internal defects (porosity, cracks, inclusions) absorb less radiation than surrounding material, appearing lighter on images—the basis for defect detection.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Attenuation and Material Response</h3>
            <p className="text-slate-700 mb-4">
              Radiation attenuation occurs through three primary mechanisms: photoelectric absorption (dominant at low energies), Compton scattering (intermediate energies), and pair production (high energies above 1.02 MeV). For industrial radiography, Compton scattering predominates, where photons transfer partial energy to electrons while continuing through material. This scattered radiation creates image fog, reducing contrast and detectability. Lead and tungsten shielding preferentially attenuates scattered radiation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Image Contrast and Sensitivity</h3>
            <p className="text-slate-700 mb-4">
              Radiographic image quality depends fundamentally on contrast—the brightness difference between defects and surrounding material. To visualize a defect, the attenuation difference must exceed the image noise floor. Sensitivity to detect small defects improves at lower energies (higher attenuation coefficients) but decreases inspection depth. Industrial radiography balances these competing requirements through energy selection and exposure optimization. Image quality indicators quantify sensitivity—standardized wires or holes must be visible on acceptable radiographs.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Geometric Magnification Effects</h3>
            <p className="text-slate-700">
              Radiographic images exhibit geometric magnification determined by source-to-defect and defect-to-image distances. A defect appears larger than actual size due to this geometric projection. Magnification factor (MF) equals the ratio of source-to-image distance to source-to-object distance. Minimizing source-to-image distance reduces magnification and geometric unsharpness, improving defect characterization. Typical industrial radiography maintains magnification under 2% to meet acceptance standards.
            </p>
          </section>

          {/* Radiation Sources */}
          <section id="radiation-sources" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Radiation Sources</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">X-ray Systems</h3>
            <p className="text-slate-700 mb-4">
              X-ray tubes generate radiation through energetic electron bombardment of target materials. Tungsten targets, selected for high atomic number and high melting point, efficiently produce X-rays when struck by accelerated electrons. The X-ray spectrum includes characteristic radiation (sharp peaks at energies specific to target material) and continuous Bremsstrahlung radiation across an energy range determined by applied voltage.
            </p>
            <p className="text-slate-700 mb-4">
              Operating voltage directly determines maximum X-ray energy and penetration capability. Industrial systems typically operate at 100-450 kV for steel inspection, with higher voltages penetrating thicker sections but reducing surface defect sensitivity. Current-controlled exposure times enable precise dose control, essential for achieving consistent image density and meeting sensitivity requirements.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Advantages:</strong> Superior image quality and contrast; programmable exposure; no radiation after power shutdown; rapid image acquisition; effective for detecting small defects and precise dimensional analysis.
            </p>
            <p className="text-slate-700">
              <strong>Limitations:</strong> Requires external electrical power; access to outlet for field work; large, expensive equipment; relatively immobile compared to isotope sources.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Gamma Ray Sources</h3>
            <p className="text-slate-700 mb-4">
              Radioactive isotopes emit gamma rays through nuclear decay, creating fixed-energy radiation without external power. Cobalt-60 and Iridium-192 dominate industrial radiography. Cobalt-60 emits 1.17 and 1.33 MeV gamma rays (average 1.25 MeV), providing excellent penetration for thick steel components. Iridium-192 emits lower-energy gamma rays (0.38 MeV average), offering superior image quality and sensitivity for thinner sections and weld inspection.
            </p>
            <p className="text-slate-700 mb-4">
              Cobalt-60 decays with a 5.27-year half-life; Iridium-192 with a 74-day half-life. Source strength decreases predictably, requiring exposure time adjustments and periodic source replacement. Portable gamma sources enable field radiography in locations without electrical infrastructure—critical for pipeline, bridge, and remote equipment inspections.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Advantages:</strong> Portable field deployment; no external power requirements; inherent source shielding reduces facility requirements; excellent for remote locations and outdoor inspections.
            </p>
            <p className="text-slate-700">
              <strong>Limitations:</strong> Continuous radiation emission requires robust shielding; fixed photon energy limits versatility; source decay necessitates replacement; regulatory oversight more stringent; lower throughput than X-ray systems.
            </p>
          </section>

          {/* Image Recording Methods */}
          <section id="image-recording" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Image Recording Methods</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Film Radiography</h3>
            <p className="text-slate-700 mb-4">
              Silver halide film emulsions remain the reference standard for radiographic image recording. X-rays and gamma rays expose silver halide crystals; chemical processing reveals the latent image through reduction of exposed silver halide to metallic silver. Film density (optical transmission) increases with radiation exposure, creating the grayscale image. Processing conditions (temperature, time, developer chemistry) critically affect image quality and must be rigorously controlled.
            </p>
            <p className="text-slate-700 mb-4">
              Film sensitivity varies with incident radiation energy; higher-sensitivity (faster) films require less exposure but exhibit coarser grain structure and lower contrast. Selection balances exposure time requirements against desired image quality. Densitometric analysis quantifies film density (typically 1.5-3.5 for acceptance) ensuring proper exposure and processing consistency.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Digital Radiography</h3>
            <p className="text-slate-700 mb-4">
              Digital radiography uses electronic detectors (flat-panel detectors, image intensifiers, scintillator-coupled systems) to record radiation directly as digital images. Detectors convert X-rays or gamma rays to visible light via scintillators, which is then captured by photodiodes or photomultiplier tubes and converted to digital pixel data. Digital systems enable immediate image review without chemical processing delays, eliminating wet-film handling and environmental compliance issues.
            </p>
            <p className="text-slate-700 mb-4">
              Advanced image processing algorithms enhance contrast, reduce noise, and optimize visualization of specific defect types. Computed tomography (CT) scanning reconstructs three-dimensional images from multiple radiographic projections, providing unprecedented detail for complex geometries and internal structure characterization. While superior in capability, digital systems require higher initial investment and more sophisticated training.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Image Quality Indicators</h3>
            <p className="text-slate-700 mb-4">
              Image quality indicators (IQIs) quantify radiographic sensitivity and ensure consistent defect detection capability. Wire indicators consist of numbered tungsten or steel wires of decreasing diameter; visible wires on radiographs indicate sensitivity levels. Hole or step indicators feature machined cavities of specific depths; visibility confirms ability to detect defects. Penetrameter thickness (typically 2% of inspected material thickness) ensures sensitivity sufficient for detecting relevant defect sizes.
            </p>
            <p className="text-slate-700">
              Placing IQIs directly on radiographs creates photographic evidence of sensitivity; missing IQI visibility indicates unacceptable image quality requiring re-radiography. This requirement ensures every accepted radiograph meets minimum sensitivity standards, eliminating subjective image assessment.
            </p>
          </section>

          {/* Procedures */}
          <section id="procedures" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Inspection Procedures</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Weld Inspection Methodology</h3>
            <p className="text-slate-700 mb-4">
              Weld radiography detects defects through characteristic density variations on radiographic images. Porosity appears as small, round dark spots (less dense than surrounding material). Cracks appear as thin lines following grain boundaries. Inclusions (slag, tungsten particles) appear as irregular shapes with higher contrast. Lack of fusion and penetration defects create characteristic patterns at weld root locations.
            </p>
            <p className="text-slate-700 mb-4">
              Standard weld inspection positions radiographs to visualize the weld in cross-section, with source, part, and film geometry optimizing defect visibility. Multiple exposures at different angles may be required to characterize three-dimensional defect extent. Exposure parameters (kV, mA, exposure time, source-to-film distance) are predetermined for specific material thicknesses to achieve optimal image density and sensitivity.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Casting Evaluation</h3>
            <p className="text-slate-700 mb-4">
              Castings require radiographic examination to reveal internal porosity, shrinkage cavities, and inclusions that compromise structural integrity. Casting heterogeneity and coarse grain structure create inherent radiographic noise, requiring careful technique selection to achieve acceptable image quality. Multiple exposures at various angles improve three-dimensional defect characterization.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Exposure Calculation</h3>
            <p className="text-slate-700">
              Radiographer exposure factors (source strength, distance, filtration) determine achieved image density. Film density proportionally relates to radiation exposure; density recommendations (typically 1.5-3.5) ensure contrast sufficient for visual interpretation. Sources provide radiographic exposure charts predicting exposure times for various material thicknesses and distances, which must be adjusted for source decay and processing variables.
            </p>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications</h2>
            
            <p className="text-slate-700 mb-4">
              Radiographic testing dominates industrial applications requiring regulatory compliance and definitive defect documentation:
            </p>
            
            <ul className="list-disc list-inside text-slate-700 space-y-3 mb-6">
              <li><strong>Pressure Equipment:</strong> ASME Code mandates radiography for critical pressure vessel welds; full radiographic examination is standard for high-pressure, high-temperature applications.</li>
              <li><strong>Piping Systems:</strong> Transmission pipelines (oil, gas, hazardous liquids) require radiographic inspection of girth and branch welds per API standards for assurance of weld quality and remaining life.</li>
              <li><strong>Aerospace Components:</strong> Aircraft fuselage welds, attachment points, and critical structures undergo radiographic inspection per strict aerospace standards; CT scanning enables internal structure evaluation.</li>
              <li><strong>Casting Inspection:</strong> Safety-critical castings (turbine components, structural members) require radiographic examination to reveal internal defects before machining and service.</li>
              <li><strong>Structural Steelwork:</strong> Building columns, connection plates, and critical welds in infrastructure undergo selective radiography to verify weld quality and detect fatigue cracking.</li>
            </ul>
          </section>

          {/* Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Section V</h4>
                <p className="text-slate-700 text-sm">Comprehensive radiographic testing standards for pressure equipment, establishing acceptance criteria, image quality requirements, and documentation procedures.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E94 & E1208</h4>
                <p className="text-slate-700 text-sm">Standards defining radiographic methods, exposure parameters, image quality indicators, and interpretation guidance for various material systems.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">API 1104 & 579</h4>
                <p className="text-slate-700 text-sm">Petroleum standards specifying weld inspection, acceptance criteria, and fitness-for-service evaluation based on defect characteristics visible on radiographs.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 5579 & 11699</h4>
                <p className="text-slate-700 text-sm">International standards harmonizing radiographic methods and image quality requirements across global industries.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">10 CFR Part 20</h4>
                <p className="text-slate-700 text-sm">NRC regulations governing radiation safety, dose limits, facility requirements, and professional qualifications for radiography operations.</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Visual Documentation:</strong> Direct images provide unambiguous evidence of defect presence, location, and severity; legal admissibility exceeds other NDT methods.</li>
              <li><strong>Regulatory Compliance:</strong> Most critical applications (ASME Code vessels, pipeline infrastructure) mandate radiography as the primary acceptance criterion.</li>
              <li><strong>All Material Types:</strong> Applicable to metals, composites, ceramics, and other materials; no material-specific limitations affecting detection capability.</li>
              <li><strong>Geometry Independence:</strong> Detectability largely independent of part geometry; complex shapes radiograph with consistent sensitivity.</li>
              <li><strong>Three-Dimensional Indication:</strong> Defects appear at their actual spatial location, facilitating depth and size characterization.</li>
              <li><strong>Permanent Record:</strong> Film or digital images create archival records for future reference, regulatory compliance, and historical trending.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Radiation Safety:</strong> Ionizing radiation exposure poses health risks; extensive safety infrastructure, training, and regulatory compliance required.</li>
              <li><strong>Two-Dimensional Projection:</strong> Through-thickness defects may be masked by surrounding material; limited orientation information compared to ultrasonic testing.</li>
              <li><strong>Defect Orientation Dependency:</strong> Cracks parallel to beam direction are undetectable; perpendicular orientation optimizes detection.</li>
              <li><strong>Processing Requirements:</strong> Film radiography requires chemical processing, environment-dependent darkroom, and quality control; introduces additional variables.</li>
              <li><strong>Access Requirements:</strong> Source and film require opposite-side access; geometrically constrained parts may be un-inspectable.</li>
              <li><strong>Sensitivity Limitations:</strong> Very small defects and surface-breaking cracks may be missed; complementary surface methods (magnetic particle, liquid penetrant) often required.</li>
              <li><strong>Time and Cost:</strong> Exposure times can exceed those for ultrasonic testing; facilities and trained personnel add operational costs.</li>
            </ul>
          </section>
        </article>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
          <ul className="space-y-2">
            <li><Link href="/methods/ultrasonic-testing" className="text-blue-600 hover:underline">Ultrasonic Testing (UT) - Sound wave inspection for internal defects</Link></li>
            <li><Link href="/methods/liquid-penetrant-testing" className="text-blue-600 hover:underline">Liquid Penetrant Testing (PT) - Surface defect detection</Link></li>
            <li><Link href="/methods/magnetic-particle-testing" className="text-blue-600 hover:underline">Magnetic Particle Testing (MT) - Ferromagnetic surface and subsurface inspection</Link></li>
            <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Radiographic Testing Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need radiographic inspection for pressure equipment, pipelines, or critical welds? Atlantis NDT provides certified RT inspections with full safety compliance. Contact us for consulting services or training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://atlantisndt.com/radiographic-testing"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Our RT Services
            </Link>
            <Link
              href="https://atlantisndt.com/consulting"
              className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors border border-white"
            >
              Consulting Services
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Radiographic Testing (RT): Comprehensive Guide',
            description: 'Complete guide to radiographic testing methods, equipment, image interpretation, and standards.',
            image: 'https://www.example.com/images/radiographic-testing.jpg',
            author: {
              '@type': 'Organization',
              name: 'NDT Knowledge Hub',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
            publisher: {
              '@type': 'Organization',
              name: 'NDT Knowledge Hub',
            },
          }),
        }}
      />
    </div>
  );
}
