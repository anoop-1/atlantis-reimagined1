import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eddy Current Testing (ET) Guide | Electromagnetic Flaw Detection',
  description: 'Complete guide to eddy current testing, including electromagnetic induction principles, probe types, signal interpretation, applications, and standards for surface and subsurface defect detection.',
  keywords: [
    'eddy current testing',
    'ET inspection',
    'electromagnetic induction',
    'surface cracks',
    'material conductivity',
    'probe design',
    'impedance plane',
    'ASME standards',
    'ASTM standards',
    'coil design',
    'phase angle',
    'lift-off effect'
  ],
  openGraph: {
    title: 'Eddy Current Testing (ET) Guide | Electromagnetic Flaw Detection',
    description: 'Comprehensive guide to eddy current testing methods, equipment, and signal interpretation.',
    type: 'article',
    url: 'https://www.example.com/methods/eddy-current-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Eddy Current Testing' },
  { id: 'probe-types', title: 'Probe Types and Design' },
  { id: 'instrumentation', title: 'Instrumentation and Signal Processing' },
  { id: 'procedures', title: 'Testing Procedures' },
  { id: 'applications', title: 'Applications' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
];

export default function EddyCurrentTestingPage() {
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
            <span className="text-slate-600">Eddy Current Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Eddy Current Testing (ET): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Eddy current testing is an electromagnetic method that detects surface and near-surface defects by sensing changes in electrical conductivity and magnetic permeability. This comprehensive guide explores electromagnetic induction principles, probe design, signal interpretation techniques, and applications across aerospace, automotive, and power generation industries.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              Eddy current testing stands as the most sensitive method for detecting small surface-breaking cracks and can rapidly inspect complex geometries without surface preparation, making it indispensable for high-volume production inspection and critical aircraft maintenance.
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
              Eddy current testing represents a sophisticated electromagnetic non-destructive testing method that exploits the relationship between electrical and magnetic properties of materials. Unlike acoustic methods that depend on wave propagation through materials, eddy current testing creates electromagnetic fields that penetrate conductive materials, enabling sensitive detection of surface and near-surface flaws. The technique achieves exceptional flaw detectability—capable of identifying cracks smaller than 0.1 mm in aerospace critical components—making it essential for high-reliability applications where component failure is catastrophic.
            </p>
            <p className="text-slate-700 mb-4">
              Eddy current testing's versatility extends beyond defect detection to material characterization. The method quantifies electrical conductivity, magnetic permeability, hardness, thickness, and composition, enabling multiparametric inspections in single pass. Automated systems scan complex geometries with full traceability, supporting statistical quality control and predictive maintenance strategies. Phased array eddy current systems extend capabilities to thicker sections and through-thickness flaw characterization.
            </p>
            <p className="text-slate-700">
              This comprehensive guide examines electromagnetic induction principles, probe design considerations, signal interpretation methodologies, industrial applications, and standards governing eddy current inspections across diverse industries.
            </p>
          </section>

          {/* Principles */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Eddy Current Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Electromagnetic Induction</h3>
            <p className="text-slate-700 mb-4">
              Eddy current testing is grounded in Faraday's law of electromagnetic induction: a changing magnetic field induces an electric field in conductive materials. An AC excitation current flowing through a coil creates a time-varying magnetic field that penetrates nearby conductive materials. Within the material, this changing magnetic field induces secondary electrical currents (eddy currents) that circulate in closed loops perpendicular to the primary field direction.
            </p>
            <p className="text-slate-700 mb-4">
              These induced eddy currents generate their own magnetic field that opposes the primary field (Lenz's law), creating a measurable impedance change in the excitation coil. Surface defects disrupt eddy current flow patterns, creating localized impedance changes detected by instrument electronics. The method's sensitivity depends on material conductivity, frequency selection, and probe design—higher conductivity and lower frequency permit deeper penetration but reduce surface sensitivity.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Skin Effect and Penetration Depth</h3>
            <p className="text-slate-700 mb-4">
              Eddy current penetration depth depends on the skin effect in electromagnetic theory. Induced currents concentrate near material surfaces; penetration depth decreases with increasing frequency and conductivity. The standard depth of penetration (where current amplitude decreases to 37% of surface value) is:
            </p>
            <p className="text-slate-700 mb-4 font-mono text-sm bg-slate-100 p-4 rounded">
              δ = 1 / √(π × μ × σ × f)
            </p>
            <p className="text-slate-700 mb-4">
              Where δ is penetration depth, μ is magnetic permeability, σ is electrical conductivity, and f is frequency. Practical inspection depth typically extends to 2-3 times standard penetration depth. Lower frequencies (10-100 kHz) achieve deeper penetration but sacrifice surface sensitivity; higher frequencies (1-10 MHz) provide exceptional surface resolution but limited depth. Frequency selection balances defect depth and size requirements.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Impedance Plane Analysis</h3>
            <p className="text-slate-700 mb-4">
              Eddy current signals are conventionally displayed on impedance planes with resistance (X-axis) and reactance (Y-axis) components. As eddy currents modify the coil impedance, the signal point traces a trajectory on this plane. Reference materials establish baseline impedance; defects and material variations create impedance deviations characterizing defect type, size, and orientation.
            </p>
            <p className="text-slate-700">
              Lissajous patterns on the impedance plane reveal defect characteristics: cracks typically show small-amplitude, high-frequency signals; corrosion appears as broad impedance shifts; thickness variations create characteristic trajectories. Interpreters must develop pattern recognition capability through reference standard comparisons and defect training sets.
            </p>
          </section>

          {/* Probe Types */}
          <section id="probe-types" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Probe Types and Design</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Absolute Probes</h3>
            <p className="text-slate-700 mb-4">
              Absolute probes contain a single excitation coil that simultaneously generates the primary field and detects impedance changes. These probes simultaneously measure conductivity and permeability changes; material properties and defects create overlapping signals. Absolute probes excel for thickness measurement and material property assessment but provide less defect specificity than differential configurations.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Differential Probes</h3>
            <p className="text-slate-700 mb-4">
              Differential probes employ two adjacent coils over defect-free reference and test zones. Each coil's impedance changes with local material conditions; the instrument measures impedance differences between reference and test signals. Differential configuration cancels common-mode signals (temperature, lift-off variations affecting both coils equally), dramatically improving defect signal-to-noise ratio. This design achieves superior crack detection sensitivity, making it standard for aerospace and critical structure inspections.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Probe Frequency Selection</h3>
            <p className="text-slate-700 mb-4">
              Test frequency is perhaps the most important probe parameter. Higher frequencies (&gt; 1 MHz) provide exceptional surface resolution for detecting small cracks (&lt; 0.5 mm) but provide minimal subsurface penetration. Lower frequencies (10-100 kHz) penetrate deeper but sacrifice surface sensitivity. Multi-frequency systems simultaneously excite at multiple frequencies, combining surface sensitivity with subsurface penetration capability. Phase analysis at different frequencies isolates signals by defect depth, characterizing three-dimensional flaw extent.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Encircling Coils</h3>
            <p className="text-slate-700">
              Encircling probe coils surround cylindrical components (fasteners, tubes, rods), detecting defects throughout the circumference without rasterized scanning. These probes efficiently inspect bolt holes for fatigue cracks, tubing for erosion corrosion, and rod threading for manufacturing defects. Encircling configurations provide excellent throughput for repetitive geometries but limited ability to localize defect circumferential position without additional methods.
            </p>
          </section>

          {/* Instrumentation */}
          <section id="instrumentation" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Instrumentation and Signal Processing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Instrument Architecture</h3>
            <p className="text-slate-700 mb-4">
              Modern eddy current instruments typically employ lock-in amplification with phase-sensitive detection. The instrument maintains precise phase relationship between excitation and detection signals; demodulation at specific phase angles isolates signals from defects, conductivity variations, or lift-off effects. Impedance plane displays show real and imaginary impedance components; dedicated axes can display conductivity and permeability independently for multiparameter analysis.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Advanced Signal Processing</h3>
            <p className="text-slate-700 mb-4">
              Sophisticated signal processing algorithms filter noise, compensate for material property variations, and enhance defect signals. Phase rotation algorithms align signals for optimal defect-to-noise discrimination. Conductivity compensation normalizes signals for material property variations that shouldn't affect defect decisions. Multifrequency analysis decomposes signals by defect depth, enabling characterization of three-dimensional defect geometry and orientation. Automated algorithms increasingly replace manual impedance plane interpretation, improving consistency and reducing operator training requirements.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Data Management</h3>
            <p className="text-slate-700">
              Automated scanning systems coupled with data logging create comprehensive inspection records. C-scan displays (color-coded defect maps) provide rapid visual assessment of flaw distribution. Statistical trending over time identifies degradation patterns supporting predictive maintenance scheduling. Standardized data formats enable integration with manufacturing execution systems and quality management platforms.
            </p>
          </section>

          {/* Procedures */}
          <section id="procedures" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing Procedures</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Calibration and Reference Standards</h3>
            <p className="text-slate-700 mb-4">
              Every eddy current inspection begins with instrument setup using calibration blocks. Machined notches and cracks of known dimensions establish baseline impedance signals. Phase angle and gain adjustments normalize signals; defect indication gates (thresholds) separate acceptable from reject signals. Reference standards must simulate the inspected material (composition, heat treatment, surface finish) to achieve relevant calibration.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Lift-Off Effects</h3>
            <p className="text-slate-700 mb-4">
              The probe lift-off (spacing between probe and material) significantly affects eddy current signals. Increasing lift-off decreases signal amplitude and penetration depth. Lift-off variations from surface irregularities create noise that masks small defect signals. Operators must maintain consistent probe pressure and coupling, or employ coil spacing measurements to compensate for lift-off. Differential probe configurations substantially reduce lift-off sensitivity, improving reliability in field conditions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Scanning Techniques</h3>
            <p className="text-slate-700">
              Surface scanning with raster patterns (overlapping parallel passes) ensures complete coverage without missing defects between scan lines. Scanning velocity affects signal quality—faster scanning reduces time but increases noise; slower scanning improves sensitivity at cost of throughput. Automated scanning systems maintain consistent probe pressure, scanning speed, and spacing, improving repeatability and consistency compared to manual inspections.
            </p>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Aerospace Components</h3>
            <p className="text-slate-700 mb-4">
              Aircraft structures undergo intensive eddy current inspection to detect fatigue cracks and stress corrosion cracking in fuselage, wings, and landing gear components. Sensitivity to cracks as small as 0.1 mm makes eddy current essential for safety-critical structures. Automated systems scan aircraft skin, fastener holes, and structural details with 100% coverage, providing defect maps supporting maintenance decisions and fleet management.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Fastener Inspection</h3>
            <p className="text-slate-700 mb-4">
              Eddy current rapidly screens fasteners and bolts for manufacturing defects. Encircling coils detect cracks in bolt shanks and threading, providing high-throughput screening before assembly. Automated inline systems inspect fasteners at production speeds, preventing defective parts from entering service.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Tube and Pipe Inspection</h3>
            <p className="text-slate-700 mb-4">
              Steam generators, condensers, and heat exchangers operate at extremes of pressure and temperature, making them susceptible to erosion-corrosion. Bobbin coil eddy current systems automatically inspect tube bundles, detecting corrosion pitting and through-wall defects. Automated systems inspect thousands of tubes per day, identifying suspect tubes for further evaluation or plugging.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Bearing and Component Inspection</h3>
            <p className="text-slate-700 mb-4">
              Rolling element bearings and precision components require defect-free surfaces; eddy current screening detects surface and near-surface inclusions. Automated inspection systems achieve high-volume throughput, preventing defective components from reaching assembly.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Material Property Assessment</h3>
            <p className="text-slate-700">
              Eddy current characterizes conductivity and permeability, enabling detection of heat treatment variations, alloy composition deviations, and work-hardening gradients. Dual-frequency analysis separates conductivity and permeability effects, supporting material authentication and process validation.
            </p>
          </section>

          {/* Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Section V</h4>
                <p className="text-slate-700 text-sm">Article 8 specifies eddy current examination methods, procedures, and acceptance criteria for pressure equipment.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E1316 & E2375</h4>
                <p className="text-slate-700 text-sm">Comprehensive standards defining eddy current test methods, terminology, and procedure development guidance.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">MIL-STD-1823</h4>
                <p className="text-slate-700 text-sm">Military standard for ultrasonic and eddy current inspection of aerospace components and fasteners.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 15549</h4>
                <p className="text-slate-700 text-sm">International standard for eddy current testing of ferromagnetic and non-ferromagnetic materials.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">SNT-TC-1A</h4>
                <p className="text-slate-700 text-sm">Personnel qualification and certification standard for eddy current testing professionals.</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Exceptional Surface Sensitivity:</strong> Detects small cracks (&lt; 0.1 mm) at material surfaces, superior to competing methods.</li>
              <li><strong>High-Throughput Capability:</strong> Rapid scanning enables automated systems to inspect large components and high-volume production efficiently.</li>
              <li><strong>Minimal Surface Preparation:</strong> No couplants or surface treatment required; inspects painted, coated, or oxidized surfaces directly.</li>
              <li><strong>Multiparameter Assessment:</strong> Simultaneously characterizes defects, conductivity, permeability, and thickness.</li>
              <li><strong>Automated Solutions:</strong> Fully automated systems provide objective, repeatable results with complete data documentation.</li>
              <li><strong>No Radiation Hazards:</strong> Non-ionizing electromagnetic fields eliminate health risks and facility requirements.</li>
              <li><strong>Versatility:</strong> Applicable to metals, composites, coatings, and various material systems.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Limited Penetration:</strong> Primarily surface and shallow subsurface defect detection; deep defects require alternative methods.</li>
              <li><strong>Conductive Material Requirement:</strong> Non-conductive materials (composites, ceramics) cannot be inspected with conventional eddy current methods.</li>
              <li><strong>Magnetic Material Complexity:</strong> Ferromagnetic materials exhibit high permeability variations, complicating signal interpretation and reducing sensitivity.</li>
              <li><strong>Operator Dependency:</strong> Manual impedance plane interpretation requires substantial training and experience; consistency varies between operators.</li>
              <li><strong>Surface Condition Sensitivity:</strong> Rough surfaces, sharp transitions, and edge effects create noise masking small defect signals.</li>
              <li><strong>Reference Standard Requirements:</strong> Defect training sets and material-matched standards essential for reliable procedure development.</li>
              <li><strong>Limited Defect Characterization:</strong> Sizing accuracy typically ±20-30%; orientation difficult without multifrequency analysis.</li>
            </ul>
          </section>
        </article>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
          <ul className="space-y-2">
            <li><Link href="/methods/magnetic-particle-testing" className="text-blue-600 hover:underline">Magnetic Particle Testing (MT) - Ferromagnetic material inspection</Link></li>
            <li><Link href="/methods/liquid-penetrant-testing" className="text-blue-600 hover:underline">Liquid Penetrant Testing (PT) - Surface defect detection</Link></li>
            <li><Link href="/methods/ultrasonic-testing" className="text-blue-600 hover:underline">Ultrasonic Testing (UT) - Deep penetration defect detection</Link></li>
            <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Eddy Current Testing Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need eddy current inspection for aircraft, fasteners, or heat exchangers? Atlantis NDT provides certified ET inspections using advanced automated systems. Learn more about our specialized capabilities and training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://atlantisndt.com/eddy-current-testing"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Our ET Services
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
            headline: 'Eddy Current Testing (ET): Comprehensive Guide',
            description: 'Complete guide to eddy current testing methods, probe types, and signal interpretation.',
            image: 'https://www.example.com/images/eddy-current-testing.jpg',
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
