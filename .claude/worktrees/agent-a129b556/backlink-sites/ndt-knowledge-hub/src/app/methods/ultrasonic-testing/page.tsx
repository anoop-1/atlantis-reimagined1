import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ultrasonic Testing (UT) Guide | Principles, Equipment & Applications',
  description: 'Complete guide to ultrasonic testing. Learn how UT detects internal and surface defects using sound waves, including equipment, procedures, standards, and industry applications.',
  keywords: [
    'ultrasonic testing',
    'UT inspection',
    'sound wave testing',
    'flaw detection',
    'thickness measurement',
    'weld inspection',
    'ASME standards',
    'ASTM standards',
    'piezoelectric transducers',
    'A-scan',
    'B-scan',
    'C-scan'
  ],
  openGraph: {
    title: 'Ultrasonic Testing (UT) Guide | Principles, Equipment & Applications',
    description: 'Complete educational guide to ultrasonic testing methods, equipment, and standards.',
    type: 'article',
    url: 'https://www.example.com/methods/ultrasonic-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Ultrasonic Testing' },
  { id: 'equipment', title: 'Equipment and Transducers' },
  { id: 'procedures', title: 'Testing Procedures' },
  { id: 'applications', title: 'Applications and Industry Use' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
  { id: 'conclusion', title: 'Conclusion' },
];

export default function UltrasonicTestingPage() {
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
            <span className="text-slate-600">Ultrasonic Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ultrasonic Testing (UT): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Ultrasonic testing is a non-destructive testing method that uses high-frequency sound waves to detect internal and surface defects, measure thickness, and evaluate material properties. This comprehensive guide explores the physics behind UT, equipment specifications, testing procedures, and real-world applications across multiple industries.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              UT is one of the most versatile and widely used NDT methods, capable of detecting defects at depths from micrometers to several meters, making it essential for quality assurance in manufacturing, construction, and in-service inspection.
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
              Ultrasonic testing represents a pivotal advancement in non-destructive evaluation, enabling inspectors to detect flaws, measure component thickness, and assess material integrity without damaging the part being tested. Unlike radiographic testing, which uses ionizing radiation, ultrasonic testing relies on the propagation of mechanical waves through materials, offering superior depth penetration and real-time defect detection with minimal safety concerns.
            </p>
            <p className="text-slate-700 mb-4">
              Since its development in the 1940s, ultrasonic testing has become the industry standard for weld inspection, thickness measurement, and composite material evaluation. The method's sensitivity to small defects, coupled with its ability to characterize flaw size and location, makes it indispensable for critical infrastructure and high-reliability applications.
            </p>
            <p className="text-slate-700">
              This guide provides technical professionals with a detailed understanding of UT principles, equipment selection, testing procedures, and industry standards that govern ultrasonic inspections.
            </p>
          </section>

          {/* Principles of Ultrasonic Testing */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Ultrasonic Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Sound Wave Propagation</h3>
            <p className="text-slate-700 mb-4">
              Ultrasonic waves are mechanical vibrations that propagate through solid, liquid, and gaseous media. In NDT applications, frequencies typically range from 0.5 MHz to 15 MHz, well above human hearing range (typically below 20 kHz). These sound waves travel in two primary modes:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Longitudinal Waves (Compression Waves):</strong> Particles vibrate parallel to wave direction, traveling faster through materials, typically 5,900-6,000 m/s in steel.</li>
              <li><strong>Shear Waves (Transverse Waves):</strong> Particles vibrate perpendicular to wave direction, traveling slower, typically 3,200-3,300 m/s in steel.</li>
              <li><strong>Surface Waves (Rayleigh Waves):</strong> Particles move in elliptical paths at material surfaces, useful for detecting surface-breaking cracks.</li>
              <li><strong>Plate Waves (Lamb Waves):</strong> Propagate through thin plates and shell structures with complex dispersion characteristics.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Acoustic Impedance and Reflection</h3>
            <p className="text-slate-700 mb-4">
              Acoustic impedance (Z) is defined as the product of material density (ρ) and sound velocity (v): Z = ρ × v. When an ultrasonic wave encounters a boundary between two materials with different impedances, part of the energy is reflected and part is transmitted. The reflection coefficient depends on the impedance mismatch:
            </p>
            <p className="text-slate-700 mb-4 font-mono text-sm bg-slate-100 p-4 rounded">
              Reflection Coefficient = (Z₂ - Z₁) / (Z₂ + Z₁)
            </p>
            <p className="text-slate-700 mb-4">
              This principle is fundamental to ultrasonic testing: defects create acoustic boundaries that reflect ultrasonic energy back to the transducer, creating signals that indicate flaw presence and characteristics.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Attenuation and Scattering</h3>
            <p className="text-slate-700 mb-4">
              As ultrasonic waves propagate through materials, their amplitude decreases due to two primary mechanisms. Absorption converts acoustic energy to heat through material damping, while scattering redirects energy due to grain boundaries, second-phase particles, and surface irregularities. Coarse-grained materials exhibit higher attenuation, reducing inspection depth and sensitivity. This attenuation must be compensated through equipment settings to maintain consistent defect detection across varying material conditions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Beam Characteristics and Focusing</h3>
            <p className="text-slate-700 mb-4">
              The ultrasonic beam emanating from a transducer exhibits near-field (Fresnel zone) and far-field (Fraunhofer zone) characteristics. The near-field extends to a distance of approximately D²/(4λ), where D is transducer diameter and λ is wavelength. In the near-field, the beam exhibits acoustic pressure variations unsuitable for precise defect detection. The far-field provides a more uniform, conical beam pattern ideal for standardized inspection.
            </p>
            <p className="text-slate-700">
              Focusing transducers and phased array systems can concentrate acoustic energy into defined regions, dramatically improving detection sensitivity and spatial resolution for critical inspection applications.
            </p>
          </section>

          {/* Equipment and Transducers */}
          <section id="equipment" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Equipment and Transducers</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Transducer Types</h3>
            <p className="text-slate-700 mb-4">
              Transducers are the heart of ultrasonic testing systems, converting electrical energy to mechanical ultrasonic waves and vice versa. Most modern transducers use the piezoelectric effect, where certain crystalline materials generate voltage when mechanically stressed.
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">Piezoelectric Materials</h4>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Lead Zirconate Titanate (PZT):</strong> Most common material, excellent frequency range, operating temperatures up to 300°C.</li>
                <li><strong>Lithium Niobate:</strong> High-temperature capability, used in hot surface applications.</li>
                <li><strong>Polyvinylidene Fluoride (PVDF):</strong> Flexible films, broadband characteristics, excellent for immersion testing.</li>
              </ul>
            </div>

            <p className="text-slate-700 mb-4">
              <strong>Transducer Configurations:</strong> Transducers are classified as contact (direct contact with part surface), immersion (part submerged in liquid medium), or angle beam (transmitting at oblique angles for shear wave generation). Contact transducers employ protective wear plates and acoustic coupling through couplants. Immersion transducers enable remote inspection and uniform coupling in automated scanning systems.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Instrumentation Systems</h3>
            <p className="text-slate-700 mb-4">
              Ultrasonic flaw detectors represent the most common field inspection equipment, featuring compact designs with built-in displays for real-time signal monitoring. Modern instruments include:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Pulse generators creating high-voltage electrical pulses to excite transducers</li>
              <li>Preamplifiers and main amplifiers with frequency-dependent gain adjustment</li>
              <li>Time-base circuits controlling signal time-axis scaling and display sweep speed</li>
              <li>Digital displays with A-scan, B-scan, and C-scan visualization capabilities</li>
              <li>Data logging systems for traceability and archival compliance</li>
              <li>Phased array systems with multi-element transducers for electronic beam steering</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Couplers and Couplants</h3>
            <p className="text-slate-700 mb-4">
              Acoustic coupling between transducers and parts is critical for effective ultrasonic transmission. Air presents an impedance mismatch so severe that nearly all acoustic energy reflects at the air-material boundary. Couplants (water, oil, gel-based products) provide the acoustic bridge. Water-based couplants are environmentally friendly and suitable for most inspections, while oil-based products provide superior coupling on rough or curved surfaces. Specialized high-temperature couplants accommodate elevated surface temperatures, typically up to 180°C for standard products and 300°C+ for specialized formulations.
            </p>
          </section>

          {/* Testing Procedures */}
          <section id="procedures" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing Procedures</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Pulse-Echo Method</h3>
            <p className="text-slate-700 mb-4">
              The pulse-echo method is the most widely employed ultrasonic testing technique. The transducer transmits a brief ultrasonic pulse into the part; the instrument then switches to receive mode, detecting echoes reflected from part boundaries and internal defects. By measuring the time delay between pulse transmission and echo reception, combined with known sound velocity, the inspector determines defect location and estimates size.
            </p>
            <p className="text-slate-700 mb-4">
              A-scan displays represent the fundamental signal visualization format, showing signal amplitude (vertical axis) versus time/distance (horizontal axis). The initial pulse appears at zero time, the backwall echo indicates part thickness, and any intermediate signals indicate internal reflectors. Gain adjustment (receiver amplification) is critical—excessive gain creates false signals, while insufficient gain misses small defects.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Through-Transmission Method</h3>
            <p className="text-slate-700 mb-4">
              In through-transmission testing, separate transmitting and receiving transducers are positioned on opposite sides of the part. The transmitter generates continuous or pulsed ultrasonic waves; the receiver detects transmitted energy. Defects along the transmission path attenuate the signal. This method offers superior sensitivity for thin sections and highly attenuating materials but requires access to both surfaces, limiting practical field applications.
            </p>

            <h3 className="text-xl font-semibold text-tableau-900 mb-3 mt-6">Calibration and Standardization</h3>
            <p className="text-slate-700 mb-4">
              Every ultrasonic inspection begins with instrument calibration using standardized reference blocks. The most common standard is the IIW (International Institute of Welding) Block, featuring side-drilled holes at known depths and flat-bottomed holes at various distances from the scanning surface. Initial calibration establishes baseline signal characteristics, grain noise levels, and system sensitivity.
            </p>
            <p className="text-slate-700 mb-4">
              Distance-amplitude correction (DAC) curves compensate for signal attenuation with increasing distance, ensuring consistent defect sensitivity across the inspection volume. Creating accurate DAC curves from reference standards is essential for reliable flaw sizing and acceptance decisions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Weld Inspection Procedures</h3>
            <p className="text-slate-700 mb-4">
              Weld inspection represents the most common industrial ultrasonic testing application. Standard procedures (ASME Section VIII, API 1104) require transverse scanning to detect defects perpendicular to the weld line, and longitudinal scanning to identify defects parallel to weld direction. Angle beam transducers transmitting shear waves are particularly effective for detecting lack of fusion and penetration defects at weld root locations.
            </p>
            <p className="text-slate-700">
              Phased array systems enable electronic beam steering, allowing single transducer units to scan complete weld cross-sections without mechanical repositioning. This advanced technique dramatically reduces inspection time while improving detection probability and defect characterization.
            </p>
          </section>

          {/* Applications and Industry Use */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications and Industry Use</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Pressure Equipment Inspection</h3>
            <p className="text-slate-700 mb-4">
              Ultrasonic testing dominates pressure vessel, boiler, and piping inspections. Longitudinal and shear wave scanning detects weld defects (cracks, lack of fusion, porosity, inclusions) that could compromise structural integrity. Thickness measurements monitor corrosion and erosion degradation, critical for risk-based inspection planning. Periodic in-service inspections per ASME standards identify aging-related degradation before failure occurs.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Structural Steel and Construction</h3>
            <p className="text-slate-700 mb-4">
              Building and bridge inspections rely extensively on ultrasonic methods. Bolted connection evaluation, beam flange cracking, and structural weld integrity assessments determine structural fitness and remaining useful life. UT enables owners to defer expensive replacements while ensuring public safety through quantified defect characterization.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Aerospace and Composite Inspection</h3>
            <p className="text-slate-700 mb-4">
              Aircraft structures contain extensive welded assemblies, riveted connections, and composite panels. Ultrasonic inspection detects fastener hole cracks, corrosion pitting, and internal delamination in composite structures. Phased array systems provide rapid inspection coverage, minimizing aircraft downtime. Specialized techniques detect sub-surface corrosion and fatigue cracks before catastrophic failure.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Manufacturing Quality Control</h3>
            <p className="text-slate-700 mb-4">
              Forging and casting producers use automated ultrasonic scanning to detect internal porosity, segregation, and inclusion defects. Inline inspection systems identify non-conforming parts before machining operations, preventing scrap losses. Material characterization through grain noise analysis and attenuation measurement enables segregation of materials by metallurgical condition.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Thickness Monitoring</h3>
            <p className="text-slate-700">
              Corrosion monitoring through regular thickness measurements is standard practice in process equipment, tanks, and piping. Ultrasonic thickness gauges provide rapid, non-invasive wall thickness data supporting integrity assessments and replacement scheduling. Historical thickness trends enable predictive maintenance planning and equipment lifetime extension.
            </p>
          </section>

          {/* Industry Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            <p className="text-slate-700 mb-4">
              Ultrasonic testing procedures and acceptance criteria are governed by comprehensive industry standards ensuring consistency and reliability:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Boiler and Pressure Vessel Code</h4>
                <p className="text-slate-700 text-sm">Article 4 (ASME V) defines ultrasonic examination standards for pressure equipment welds, establishing acceptance criteria, calibration requirements, and documentation procedures.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E494 & E797</h4>
                <p className="text-slate-700 text-sm">Comprehensive standards covering ultrasonic testing methods, equipment specifications, reference standards, and procedure development for various material conditions.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">API 1104 & 579</h4>
                <p className="text-slate-700 text-sm">Petroleum industry standards specifying weld inspection procedures, acceptance limits, and fitness-for-service evaluations based on defect characteristics.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 22711 & 23278</h4>
                <p className="text-slate-700 text-sm">International standards providing harmonized ultrasonic testing procedures and phased array techniques for global consistency.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">SNT-TC-1A</h4>
                <p className="text-slate-700 text-sm">Personnel qualification standard establishing training, examination, and certification requirements for NDT professionals, including ultrasonic specialists.</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Superior Depth Penetration:</strong> Detects defects at depths from millimeters to several meters, far exceeding alternative methods in thick sections.</li>
              <li><strong>Excellent Defect Characterization:</strong> Provides precise flaw location, size estimation, and orientation assessment critical for engineering decisions.</li>
              <li><strong>Real-Time Results:</strong> Inspectors observe signal responses immediately, enabling rapid decision-making without laboratory analysis delays.</li>
              <li><strong>Minimal Safety Concerns:</strong> No ionizing radiation exposure; sound waves are safe for continuous operator interaction.</li>
              <li><strong>Portable Equipment:</strong> Hand-held flaw detectors enable in-service inspections of stationary equipment without removal.</li>
              <li><strong>Cost-Effectiveness:</strong> Lower operational costs compared to radiography; no specialized facilities or radiation safety protocols required.</li>
              <li><strong>Versatility:</strong> Applicable across material types, geometries, and industrial sectors; compatible with metals, composites, ceramics, and concrete.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Material-Dependent Performance:</strong> Coarse-grained materials, castings, and highly attenuating materials reduce sensitivity and inspection depth.</li>
              <li><strong>Surface Condition Requirements:</strong> Rough, curved, or irregular surfaces complicate coupling and signal interpretation; surface preparation is labor-intensive.</li>
              <li><strong>Operator Dependency:</strong> Interpretation requires significant expertise and experience; inconsistent results between operators are possible without rigorous training.</li>
              <li><strong>Access Requirements:</strong> Angle beam techniques require multiple scanning angles; limited access geometries constrain inspection capabilities.</li>
              <li><strong>Defect Orientation Sensitivity:</strong> Detection probability decreases for defects oriented parallel to beam direction (perpendicular to flaw faces).</li>
              <li><strong>Measurement Uncertainty:</strong> Flaw sizing accuracy is typically ±10-20% of flaw length due to beam geometry and scattering effects.</li>
              <li><strong>Limited Surface Defect Detection:</strong> Surface-breaking cracks are harder to characterize than internal defects; liquid penetrant testing often supplements UT for surface assessment.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
            <p className="text-slate-700 mb-4">
              Ultrasonic testing stands as the most versatile and sensitive method for detecting internal defects and measuring material thickness. Its ability to achieve exceptional depth penetration with real-time results makes it indispensable for critical infrastructure, pressure equipment, and manufacturing quality assurance. Understanding ultrasonic physics, equipment capabilities, and proper procedure development ensures reliable inspections that identify defects before they compromise structural integrity.
            </p>
            <p className="text-slate-700">
              Modern phased array systems and advanced instrumentation continue to expand ultrasonic capabilities, enabling automated scanning, improved signal processing, and enhanced defect characterization. As materials science advances and components become more critical, ultrasonic testing remains at the forefront of non-destructive evaluation, supporting lifecycle management strategies that maximize asset availability while ensuring safety and reliability.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
            <ul className="space-y-2">
              <li><Link href="/methods/radiographic-testing" className="text-blue-600 hover:underline">Radiographic Testing (RT) - X-ray and gamma ray inspection</Link></li>
              <li><Link href="/methods/eddy-current-testing" className="text-blue-600 hover:underline">Eddy Current Testing (ET) - Electromagnetic surface and subsurface inspection</Link></li>
              <li><Link href="/methods/magnetic-particle-testing" className="text-blue-600 hover:underline">Magnetic Particle Testing (MT) - Ferromagnetic material inspection</Link></li>
              <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
            </ul>
          </section>
        </article>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Ultrasonic Testing Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need ultrasonic inspection for your critical equipment? Atlantis NDT provides certified UT inspections using state-of-the-art equipment and experienced technicians. Explore our training programs to develop your ultrasonic testing expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://atlantisndt.com/ultrasonic-testing"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Our UT Services
            </Link>
            <Link
              href="https://atlantisndt.com/training"
              className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors border border-white"
            >
              Training Programs
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
            headline: 'Ultrasonic Testing (UT): Comprehensive Guide',
            description: 'Complete guide to ultrasonic testing methods, equipment, procedures, and industry standards.',
            image: 'https://www.example.com/images/ultrasonic-testing.jpg',
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
