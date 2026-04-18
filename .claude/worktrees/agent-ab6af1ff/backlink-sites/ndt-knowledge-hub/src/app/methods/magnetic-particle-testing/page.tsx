import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnetic Particle Testing (MT) Guide | Ferromagnetic Defect Detection',
  description: 'Complete guide to magnetic particle testing including magnetization methods, particle suspensions, defect detection, equipment, safety considerations, and industry standards for surface and subsurface inspection.',
  keywords: [
    'magnetic particle testing',
    'MT inspection',
    'magnetic flux leakage',
    'ferromagnetic materials',
    'magnetization',
    'weld inspection',
    'crack detection',
    'ASME standards',
    'ASTM standards',
    'iron powder',
    'fluorescent particles',
    'coercivity'
  ],
  openGraph: {
    title: 'Magnetic Particle Testing (MT) Guide | Ferromagnetic Defect Detection',
    description: 'Comprehensive guide to magnetic particle testing methods, equipment, and inspection procedures.',
    type: 'article',
    url: 'https://www.example.com/methods/magnetic-particle-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Magnetic Particle Testing' },
  { id: 'magnetization', title: 'Magnetization Methods' },
  { id: 'particles', title: 'Magnetic Particles and Suspensions' },
  { id: 'techniques', title: 'Testing Techniques' },
  { id: 'applications', title: 'Applications' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
];

export default function MagneticParticleTestingPage() {
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
            <span className="text-slate-600">Magnetic Particle Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Magnetic Particle Testing (MT): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Magnetic particle testing is an electromagnetic non-destructive testing method that detects surface and subsurface defects in ferromagnetic materials through magnetic flux leakage visualization. This comprehensive guide explores magnetic theory, magnetization techniques, particle formulations, and real-world applications in welding, manufacturing, and maintenance industries.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              Magnetic particle testing offers rapid, cost-effective defect detection with exceptional sensitivity to near-surface cracks—particularly valuable for weld inspection, forging evaluation, and manufacturing quality assurance where surface integrity directly impacts performance.
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
              Magnetic particle testing stands as one of the most widely applied non-destructive testing methods, particularly in weld inspection, forging evaluation, and component manufacturing. The technique's speed, cost-effectiveness, and sensitivity to surface and near-surface defects have made it the industry standard for high-volume production quality assurance. Operating on fundamental principles of magnetism and magnetic attraction, MT requires no complex instrumentation or extensive operator training compared to alternative methods, enabling widespread implementation in manufacturing environments.
            </p>
            <p className="text-slate-700 mb-4">
              The method's applicability is limited to ferromagnetic materials—primarily iron-based alloys including carbon steel, alloy steel, and certain stainless steel grades. Non-ferromagnetic materials (austenitic stainless steel, aluminum, copper) cannot be inspected with conventional magnetic particle methods. However, advanced techniques using permanent magnet arrays and electromagnetic coils continue to expand MT capabilities to challenging material systems.
            </p>
            <p className="text-slate-700">
              This comprehensive guide examines magnetic theory principles underlying MT, magnetization techniques and equipment, particle formulations and suspension chemistry, testing methodologies, industrial applications, and safety considerations that govern safe MT operations.
            </p>
          </section>

          {/* Principles of MT */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Magnetic Particle Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Magnetic Flux and Permeability</h3>
            <p className="text-slate-700 mb-4">
              Magnetic particle testing exploits fundamental magnetic properties of ferromagnetic materials. These materials contain atomic magnetic moments that preferentially align with applied magnetic fields, significantly amplifying field strength within the material (permeability typically 100-10,000 times greater than vacuum). Applied external magnetic fields become concentrated within ferromagnetic material, following paths of least magnetic reluctance.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Magnetic Flux Leakage</h3>
            <p className="text-slate-700 mb-4">
              Defects—cracks, inclusions, voids—disrupt the permeability gradient, forcing magnetic flux to exit the material surface near the defect. This "magnetic flux leakage" creates fringe magnetic fields where flux lines arc away from the material. These fringe fields, though typically small (milligauss range), exert sufficient attraction on suspended magnetic particles to create visible accumulations that outline defect patterns. Cracks perpendicular to magnetization produce the strongest flux leakage; cracks parallel to magnetization produce minimal leakage and escape detection.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Magnetization and Demagnetization</h3>
            <p className="text-slate-700 mb-4">
              Ferromagnetic materials retain residual magnetization after external fields are removed—the basis for both MT sensitivity and operational challenges. Coercivity (resistance to demagnetization) varies with material composition and heat treatment; austenitic stainless steel exhibits low coercivity while hardened martensitic steel shows high coercivity. Post-inspection demagnetization is essential to prevent residual magnetization from interfering with subsequent operations or creating safety hazards from unwanted attraction to ferrous objects.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Particle Attraction Mechanisms</h3>
            <p className="text-slate-700">
              Magnetic particles suspended in liquid media experience both dipole attraction (particles oriented in magnetic fields) and translational forces toward field concentration regions. In flux leakage fields, particles migrate toward defects and accumulate, creating visual particle patterns. Particle size, shape, and density affect mobility; particles too large experience excessive settling while overly fine particles remain suspended despite field gradients. Optimal particle size range (1-10 micrometers) balances detection sensitivity with visibility and pattern clarity.
            </p>
          </section>

          {/* Magnetization Methods */}
          <section id="magnetization" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Magnetization Methods</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Longitudinal Magnetization</h3>
            <p className="text-slate-700 mb-4">
              Longitudinal magnetization applies magnetic field parallel to component's length, typically using solenoid coils where current flow creates the magnetic field. This technique provides excellent sensitivity to transverse defects (perpendicular to magnetic field direction) but minimal sensitivity to longitudinal cracks parallel to applied field. Solenoid equipment typically operates at AC (continuous or half-wave rectified) to enhance saturation and sensitivity. AC magnetization produces smaller magnetic domains, improving sensitivity particularly for shallow surface cracks.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Circular Magnetization</h3>
            <p className="text-slate-700 mb-4">
              Circular magnetization applies magnetic field circumferentially by direct current passing longitudinally through the component (or through a conductor threading the component's center). This circular field effectively detects cracks parallel to component's axis—longitudinal cracks that escape detection by longitudinal magnetization. Combined longitudinal and circular magnetization ensures detection of defects in any orientation, essential for critical applications. Multiple passes with different magnetization directions ensure comprehensive defect coverage.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Electromagnetic Yokes</h3>
            <p className="text-slate-700 mb-4">
              Portable electromagnetic yokes enable flexible field application for components that cannot be passed through solenoids. Yoke coils create focused magnetic fields between yoke poles, effective for inspecting welds, heat-affected zones, and localized surface areas. AC operation at 55-60 Hz provides AC magnetic fields suitable for ferromagnetic material inspection. Yoke performance depends on pole spacing (typically 2-3 inches) and coil design; pole gap should match component thickness to optimize field concentration.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Permanent Magnets</h3>
            <p className="text-slate-700">
              Permanent magnet arrays provide field gradients suitable for field inspection without electricity. Neodymium permanent magnets create moderately intense fields; creative pole arrangements generate field variations effective for defect detection. Permanent magnet advantages include portability, no power requirements, and simplified operation. Limitations include fixed field strength (no adjustment capability) and inability to demagnetize components after inspection. Permanent magnet systems excel for rapid screening inspections where subsequent verification by other methods is acceptable.
            </p>
          </section>

          {/* Particles and Suspensions */}
          <section id="particles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Magnetic Particles and Suspensions</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Particle Types and Characteristics</h3>
            <p className="text-slate-700 mb-4">
              Magnetic particles range from finely divided iron powder to engineered ferrimagnetic particles. Iron powder (natural or processed) provides economical baseline performance; controlled sintering creates particles with optimized morphology and magnetic properties. Ferric oxide particles and carefully formulated proprietary particles enhance visibility and detection characteristics. Fluorescent particles (usually iron oxide coated with fluorescent dyes) enable detection under ultraviolet illumination, improving visibility in difficult lighting conditions and enabling automated optical detection systems.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Suspension Media</h3>
            <p className="text-slate-700 mb-4">
              Particles are typically suspended in light mineral oil (wet method) or dry powder applied directly to magnetized surfaces. Wet suspensions provide superior mobility and particle distribution; carrier oils facilitate particle migration to flux leakage fields while supporting long-term particle suspension. Dry particles suit rapid field screening when equipment is limited but provide reduced sensitivity. Specialized carrier fluids optimize particle behavior and compatibility with component surfaces and subsequent coating processes.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Fluorescent Versus Visible Particles</h3>
            <p className="text-slate-700 mb-4">
              Visible red or black particles suit standard room lighting conditions; trained inspectors easily identify particle accumulation patterns. Fluorescent particles (typically yellow-green under 365 nm ultraviolet light) excel in dim lighting or automated vision systems. Fluorescent particles typically offer superior sensitivity due to dye coating optimization and improved contrast in UV illumination. Regulatory standards (ASTM E1444, ASME Section V) establish minimum particle concentration and visibility requirements ensuring detection capability across inspection procedures.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Contamination and Particle Control</h3>
            <p className="text-slate-700">
              Suspension media require regular maintenance to remove debris, spent particles, and contaminants that degrade detection performance. Filtration (typically 25-40 micron), periodic settling, and fresh particle supplementation maintain optimal suspension properties. Contaminated suspensions exhibit reduced sensitivity and particle visibility, potentially missing small defects. Magnetic particle concentration specification (typically 0.3-0.5 ml of particle suspension per 100 ml of carrier fluid) ensures consistent detection performance across inspections.
            </p>
          </section>

          {/* Testing Techniques */}
          <section id="techniques" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing Techniques</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Wet Method</h3>
            <p className="text-slate-700 mb-4">
              The wet method applies fluorescent or colored particle suspensions to magnetized surfaces. Particles migrate to flux leakage fields, accumulating into visible patterns. Wet method requires removal of excess suspension and careful observation under controlled lighting (white light for visible particles, UV light for fluorescent). Post-inspection cleaning requires solvent removal to prevent staining and residue. Wet method provides superior sensitivity for small cracks and subsurface defects due to enhanced particle mobility and optimal field interaction.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Dry Method</h3>
            <p className="text-slate-700 mb-4">
              Dry powder particles are applied directly to magnetized surfaces without carrier fluid. Particles accumulate at flux leakage sites through magnetic attraction alone. Dry method suits rapid field screening where cleanliness requirements or post-cleaning complications prohibit wet method use. Dry particles exhibit reduced mobility compared to wet suspensions; sensitivity may be 10-25% lower. Dry powder suits elevated temperature applications where carrier fluid evaporation would complicate operations.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Continuous Versus Residual Methods</h3>
            <p className="text-slate-700 mb-4">
              Continuous magnetization applies magnetic field while particles are present—providing maximum particle mobility and sensitivity. Residual method applies magnetization, then removes the field before particle application. Residual magnetization remains sufficient for small to moderate defect detection but provides reduced sensitivity compared to continuous method, particularly for shallow cracks. Residual method suits applications where continuous magnetization is impractical or where component geometry precludes effective field application during particle suspension.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Half-Wave Rectified AC Magnetization</h3>
            <p className="text-slate-700">
              AC and half-wave rectified magnetization (using full-wave diode rectification of 60 Hz AC) enhance sensitivity to surface cracks compared to DC magnetization. Time-varying fields induce eddy currents in surface regions, creating effective surface magnetization that improves flux leakage near superficial defects. AC magnetization at proper frequency ranges (50-100 Hz) provides optimal compromise between surface sensitivity and penetration depth. Adjustable power supplies enable frequency optimization for specific material conditions and defect depths.
            </p>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Weld Inspection</h3>
            <p className="text-slate-700 mb-4">
              Magnetic particle testing is the industrial standard for weld inspection in production and maintenance environments. Surface cracks, lack of fusion, and heat-affected zone cracking are readily detected through MT sensitivity. Rapid inspection capability supports high-volume production quality control; automated systems enable consistent defect detection. MT remains standard for pipeline weld verification, pressure vessel inspection, and structural steel evaluation where speed and cost-effectiveness are paramount.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Forging and Casting Evaluation</h3>
            <p className="text-slate-700 mb-4">
              Forgings undergo MT inspection to detect surface and near-surface cracks from forging operations, heat treatment, and machining. Casting surface cracks, porosity networks, and inclusion patterns are readily visualized. MT provides rapid quality control feedback supporting process optimization and defect source identification.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Bearing and Fastener Inspection</h3>
            <p className="text-slate-700 mb-4">
              Rolling element bearings, fasteners, and precision components undergo MT screening to ensure surface-crack-free condition. High-volume automated systems maintain quality levels and eliminate defective components before assembly. Periodic bearing inspection detects incipient fatigue cracks enabling predictive replacement before catastrophic failure.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Maintenance and Condition Assessment</h3>
            <p className="text-slate-700">
              Portable electromagnetic yokes enable field MT inspection of in-service equipment for fatigue cracks, stress corrosion cracking, and service-induced damage. Rapid field screening supports maintenance planning and risk assessment. MT inspection identifies cracking before failure, enabling planned maintenance versus emergency repairs.
            </p>
          </section>

          {/* Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Section V, Article 7</h4>
                <p className="text-slate-700 text-sm">Comprehensive magnetic particle examination standards, procedures, acceptance criteria, and magnetization specifications for pressure equipment.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E1444 & E1444M</h4>
                <p className="text-slate-700 text-sm">Standard practice for magnetic particle inspection, defining procedures, particle specifications, acceptance criteria, and documentation requirements.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 9934</h4>
                <p className="text-slate-700 text-sm">International standard for magnetic particle inspection, harmonizing procedures and acceptance criteria across global industries.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">API 1104</h4>
                <p className="text-slate-700 text-sm">Pipeline weld inspection standard specifying MT procedures and acceptance requirements for girth and branch welds.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">SNT-TC-1A</h4>
                <p className="text-slate-700 text-sm">Personnel qualification and certification standard for magnetic particle testing professionals.</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Rapid Inspection:</strong> Quick surface screening enables high-volume production quality control.</li>
              <li><strong>Cost-Effective:</strong> Simple equipment and minimal operator training reduce operational costs compared to alternative methods.</li>
              <li><strong>Surface and Subsurface Sensitivity:</strong> Detects surface-breaking and shallow subsurface defects invisible to visual examination.</li>
              <li><strong>Visual Defect Indication:</strong> Direct particle pattern visualization requires minimal interpretation training compared to ultrasonic or electromagnetic methods.</li>
              <li><strong>Portable Equipment:</strong> Electromagnetic yokes enable field inspection without facility infrastructure.</li>
              <li><strong>No Surface Preparation:</strong> Inspects painted, coated, or slightly oxidized surfaces without cleaning.</li>
              <li><strong>Immediate Results:</strong> Real-time defect detection supports decision-making without laboratory processing delays.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Ferromagnetic Requirement:</strong> Non-ferromagnetic materials (austenitic stainless steel, aluminum, copper) cannot be inspected with conventional MT.</li>
              <li><strong>Limited Penetration:</strong> Detects primarily surface and shallow subsurface defects; deep internal cracks require alternative methods.</li>
              <li><strong>Orientation Dependency:</strong> Cracks parallel to magnetization direction are undetectable; multiple magnetization directions required for comprehensive coverage.</li>
              <li><strong>Residual Magnetization:</strong> Post-inspection demagnetization essential to prevent safety hazards and operational complications.</li>
              <li><strong>Material Preparation:</strong> Surface rust, paint, or coatings exceeding 0.1 mm reduce sensitivity; surface cleaning often required.</li>
              <li><strong>Wet Method Cleanup:</strong> Carrier fluid removal and post-cleaning add time and expense; waste disposal environmental considerations.</li>
              <li><strong>Defect Characterization:</strong> Limited sizing accuracy; fine details of 3D flaw geometry are difficult to determine.</li>
            </ul>
          </section>
        </article>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
          <ul className="space-y-2">
            <li><Link href="/methods/liquid-penetrant-testing" className="text-blue-600 hover:underline">Liquid Penetrant Testing (PT) - Surface defect detection for non-magnetic materials</Link></li>
            <li><Link href="/methods/eddy-current-testing" className="text-blue-600 hover:underline">Eddy Current Testing (ET) - Electromagnetic surface and subsurface inspection</Link></li>
            <li><Link href="/methods/ultrasonic-testing" className="text-blue-600 hover:underline">Ultrasonic Testing (UT) - Deep penetration defect detection</Link></li>
            <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Magnetic Particle Testing Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need rapid, cost-effective weld or component inspection? Atlantis NDT provides certified MT services for production quality control and maintenance inspection. Our experienced technicians deliver reliable defect detection with full documentation.
          </p>
          <Link
            href="https://atlantisndt.com/magnetic-particle-testing"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Our MT Services
          </Link>
        </section>
      </main>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Magnetic Particle Testing (MT): Comprehensive Guide',
            description: 'Complete guide to magnetic particle testing methods, equipment, and inspection procedures.',
            image: 'https://www.example.com/images/magnetic-particle-testing.jpg',
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
