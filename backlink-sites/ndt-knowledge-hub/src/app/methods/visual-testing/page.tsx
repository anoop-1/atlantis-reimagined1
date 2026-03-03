import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visual Testing (VT) Guide | Direct and Aided Inspection Method',
  description: 'Complete guide to visual testing including direct examination, optical aids, lighting requirements, defect assessment, and applications for surface inspection of welds, castings, and components.',
  keywords: [
    'visual testing',
    'VT inspection',
    'visual examination',
    'optical aids',
    'borescope inspection',
    'weld inspection',
    'surface inspection',
    'ASME standards',
    'ASTM standards',
    'lighting requirements',
    'acceptance criteria',
    'defect detection'
  ],
  openGraph: {
    title: 'Visual Testing (VT) Guide | Direct and Aided Inspection Method',
    description: 'Comprehensive guide to visual testing methods, optical aids, and inspection procedures.',
    type: 'article',
    url: 'https://www.example.com/methods/visual-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Visual Testing' },
  { id: 'direct-examination', title: 'Direct Visual Examination' },
  { id: 'optical-aids', title: 'Optical Aids and Equipment' },
  { id: 'lighting', title: 'Lighting and Visibility' },
  { id: 'procedures', title: 'Testing Procedures' },
  { id: 'applications', title: 'Applications' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
];

export default function VisualTestingPage() {
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
            <span className="text-slate-600">Visual Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Visual Testing (VT): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Visual testing is the most fundamental non-destructive testing method, utilizing direct or optical-aided examination to detect surface anomalies and assess component condition. This comprehensive guide explores direct examination techniques, optical aids from simple magnifiers to advanced borescopes, lighting requirements, defect assessment methodologies, and applications across manufacturing, construction, and maintenance industries.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              Visual testing remains the first and most frequently employed NDT method—the foundation upon which other testing methods build. Often used in conjunction with complementary methods, visual inspection provides essential surface condition assessment, defect morphology characterization, and component geometry verification that supports engineering decisions.
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
              Visual testing represents the most fundamental and widely practiced non-destructive testing method. Utilizing human vision—often enhanced by optical aids—inspectors examine component surfaces to identify defects, assess surface conditions, and evaluate structural integrity. Unlike sophisticated instrumental methods (ultrasonic, radiographic, eddy current), visual testing requires minimal equipment, relies on direct evidence available to the human eye, and provides immediate, objective assessment requiring minimal interpretation.
            </p>
            <p className="text-slate-700 mb-4">
              The method's simplicity and universal applicability have made it the foundation of quality assurance and maintenance programs across all industries. Visual testing frequently serves as the initial inspection for new components, and subsequent detailed NDT supplementation is often predicated on visual findings. Advanced optical aids—borescopes, drones, and digital imaging—continue to extend visual testing capabilities to previously inaccessible locations, maintaining relevance despite advances in alternative NDT technologies.
            </p>
            <p className="text-slate-700">
              This comprehensive guide examines the visual inspection principles, direct examination techniques, optical aid capabilities, lighting requirements critical for effective inspections, standardized procedures, and applications that have sustained visual testing as the NDT method of choice for surface assessment and condition monitoring.
            </p>
          </section>

          {/* Principles */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Visual Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Human Vision Limitations and Capabilities</h3>
            <p className="text-slate-700 mb-4">
              Visual testing success depends fundamentally on understanding human visual capabilities and limitations. The human eye, under optimal lighting conditions, can resolve details approximately 0.1 mm at 25 cm (10-inch) viewing distance—a fundamental constraint determining minimum defect size detectability. Acuity decreases with distance, lighting intensity, and defect contrast. Factors affecting visual inspection reliability include inspector age (visual acuity declines with age), fatigue (concentration lapses after extended inspection), lighting quality, and defect accessibility.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Defect Visibility and Contrast</h3>
            <p className="text-slate-700 mb-4">
              Defect visibility depends on contrast between the defect and surrounding surface. Surface cracks against a smooth, uniform background are readily visible; the same cracks on rough or textured surfaces may be virtually invisible. Corrosion stains, discoloration, and oxidation products create visual evidence of material degradation. Surface finish variations, geometry changes, and dimensional deviations provide visual evidence of structural change or damage. Surface preparation—cleaning, grinding, or etching—significantly enhances defect visibility by improving contrast and removing visual obstacles.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Psychophysics of Defect Detection</h3>
            <p className="text-slate-700 mb-4">
              Detection of subtle defects depends on psychological factors beyond simple visual acuity. Expectancy (knowing what defects to look for) improves detection probability. Training with defect images improves recognition accuracy. Fatigue and attention lapses reduce detection probability during extended inspections—periodic breaks improve overall inspection quality. Inspector motivation and inspection speed affect quality; time pressure to complete inspections increases missed-defect risk. Rigorous procedures, adequate lighting, and trained inspectors substantially improve visual inspection reliability compared to casual or rushed visual assessment.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Surface Condition Assessment</h3>
            <p className="text-slate-700">
              Visual testing uniquely assesses surface condition and appearance—critical information for determining component acceptability. Corrosion extent and morphology, coating condition, dimensional accuracy, and surface finish uniformity are directly observable through visual examination. This surface condition information often determines whether components progress to subsequent testing or are rejected without further evaluation. Surface condition assessment frequently precedes other NDT methods, informing method selection and acceptance criteria.
            </p>
          </section>

          {/* Direct Examination */}
          <section id="direct-examination" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Direct Visual Examination</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Accessibility Requirements</h3>
            <p className="text-slate-700 mb-4">
              Direct visual examination requires unobstructed line-of-sight access to inspect surfaces. Inaccessible internal surfaces, locations behind installed components, or remote positions beyond safe reach preclude direct examination. Surface orientation, obstacle placement, and spatial constraints affect whether direct examination is feasible. Many equipment configurations (turbines, pumps, heat exchangers) require component disassembly or removal for direct visual access to interior surfaces. Cost and time requirements for disassembly often necessitate remote inspection methods (borescopes, drones) to assess internal condition without component removal.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Surface Preparation for Visual Inspection</h3>
            <p className="text-slate-700 mb-4">
              Surface cleanliness dramatically affects defect visibility. Dirt, oil, or corrosion products obscure surface details and defects. Cleaning methods range from simple wiping with dry cloths to solvent degreasing or even light abrasive blasting for heavily corroded surfaces. The appropriate cleaning method depends on component material sensitivity and defect type; aggressive cleaning might remove evidence of service-induced corrosion valuable for assessment. Standardized procedures define minimum cleanliness levels ensuring consistent visual inspection results.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Inspection Technique and Movement</h3>
            <p className="text-slate-700 mb-4">
              Systematic inspection technique—methodical scanning from top to bottom, left to right, or other predetermined pattern—improves detection probability compared to random or casual examination. Maintaining consistent viewing distance and angle optimizes visual acuity and defect recognition. Running fingers or hand over component surfaces can detect surface deviations (cracks, dents) invisible from visual examination alone—a supplemental technique particularly valuable for shallow defects or high-frequency surface irregularities.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Wet Film Thickness Assessment</h3>
            <p className="text-slate-700">
              Visual examination can assess coating application quality through wet film thickness comparison during application. Wet film thickness directly correlates to dry film thickness (critical for protective coating performance). Visual inspection of coating appearance (color, flow, leveling, coverage uniformity) identifies application defects (drips, sags, inadequate overlap) requiring correction. Visual coating assessment is routine during application, enabling corrective action before curing hardens the coating.
            </p>
          </section>

          {/* Optical Aids */}
          <section id="optical-aids" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Optical Aids and Equipment</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Magnification Devices</h3>
            <p className="text-slate-700 mb-4">
              Simple magnifying glasses (5-10x magnification) enable defect detection below unaided visual acuity limits. Magnification improves crack visibility and permits dimensional assessment (crack length, spacing, opening width). Stereo microscopes (5-50x magnification) enable detailed defect characterization, documenting defect morphology through photomicrography. Digital camera attachments to microscopes facilitate documentation and automated defect measurement. Magnification utility depends on defect type; fine cracks benefit substantially from magnification while corrosion assessment may not.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Borescope and Endoscope Systems</h3>
            <p className="text-slate-700 mb-4">
              Borescopes extend visual inspection to internal cavities, blind holes, and enclosed spaces. Rigid borescopes (traditional design) enable high-quality visual access to accessible internal surfaces; articulating borescopes permit greater angle flexibility. Fiber-optic borescopes transmit images through flexible fiber bundles, enabling inspection through tortuous paths. Video borescopes couple borescope optics with video cameras, projecting internal images on monitors for easier viewing and documentation. Modern digital borescopes integrate high-resolution video with recording capability and software-assisted measurement, enabling detailed defect characterization and archival documentation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Drone and Remote Inspection Systems</h3>
            <p className="text-slate-700 mb-4">
              Unmanned aerial vehicles (drones) equipped with high-resolution cameras enable visual inspection of elevated structures (bridges, power lines, wind turbines, building facades) without personnel access or scaffolding. Drone visual inspection provides rapid area coverage with documented photographic records. Under-water remotely operated vehicles (ROVs) perform visual inspection of submerged structures (offshore platforms, dams, underwater pipelines). Robotic crawlers traverse horizontal pipes and confined spaces, transmitting real-time video to surface operators. These advanced remote systems extend visual inspection to previously inaccessible or hazardous locations.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Dimensional Measurement Tools</h3>
            <p className="text-slate-700">
              Supplementary tools support visual inspection dimensional assessment: calipers measure component thickness and dimensional changes; thickness gauges assess corrosion depth; straightedges detect warping and shape changes; tape measures quantify large-scale dimensional changes. These simple mechanical devices provide quantitative data complementing visual observation, supporting acceptance decisions and trend analysis.
            </p>
          </section>

          {/* Lighting */}
          <section id="lighting" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lighting and Visibility</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Illumination Requirements</h3>
            <p className="text-slate-700 mb-4">
              Minimum lighting intensity for visual inspection is standardized at 500 lux (approximately 50 foot-candles). Lower illumination reduces visual acuity and increases eyestrain during extended inspection. High-intensity lighting (1000+ lux) improves defect visibility, particularly for subtle surface flaws. Lighting direction significantly affects defect visibility—grazing illumination (light at acute angles to surface) enhances visibility of shallow cracks and surface irregularities; diffuse illumination (perpendicular to surface) provides better overall visibility for general condition assessment.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Lighting Types</h3>
            <p className="text-slate-700 mb-4">
              Natural daylight provides excellent, color-accurate illumination but lacks controllability for industrial inspections. Incandescent lamps provide warm light (2700K color temperature) with good color rendering but generate significant heat. Fluorescent lights (cool white, 4100K) are efficient and economical but may exhibit color-rendering limitations. Light-emitting diode (LED) lamps provide superior efficiency, long life, and excellent color rendering—increasingly the standard for inspection lighting. Inspector-mounted lights or borescope-integrated illumination enable lighting direction adjustment to optimize defect visibility in various geometric configurations.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Glare and Contrast Control</h3>
            <p className="text-slate-700">
              Reflective surfaces (polished metals, wet surfaces, glossy coatings) create glare that reduces visual acuity and obscures defects. Viewing angle adjustment can minimize glare—inspection from directions perpendicular to reflecting surfaces reduces glare impact. Matte surface preparation (light abrasion, chalk marking, dye coating) reduces glare by eliminating surface specularity. In field situations where glare control is difficult, polarizing filters on lighting or protective eyewear reduce glare effect. Adequate contrast between defect and background remains essential; defects visible against one background may be invisible against another.
            </p>
          </section>

          {/* Procedures */}
          <section id="procedures" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing Procedures</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Weld Inspection Procedures</h3>
            <p className="text-slate-700 mb-4">
              Weld visual inspection assesses weld geometry (reinforcement, undercut, profile), surface condition (cracks, porosity, spatter), and dimensional accuracy (width, length, fusion line). Standard acceptance criteria specify maximum acceptable discontinuity sizes and spacing. Visual inspection typically precedes other NDT methods; unacceptable visual defects often result in weld rejection without further testing. Visual inspection identifies geometry and dimension non-conformances requiring rework before subsequent tests.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Casting and Forging Assessment</h3>
            <p className="text-slate-700 mb-4">
              Surface visual inspection of castings identifies gross defects (blowholes, shrinkage cavities, inclusions, cold shuts) visible after knockout from mold. Forging assessment examines dimensional accuracy and surface condition. Flash removal completeness, proper cooling (absence of heat distortion), and machining allowance conformance are visually assessed. Surface cracks from forging operations or heat treatment are readily visible after surface cleaning.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Component Geometry and Assembly Inspection</h3>
            <p className="text-slate-700 mb-4">
              Visual inspection verifies component geometry, dimensional accuracy, and proper assembly. Straightness, flatness, and contour conformance are assessed; surface finish uniformity is evaluated; assembly completeness (all fasteners present, proper orientation) is verified. Visual inspection identifies gross dimensional non-conformances or assembly errors that might escape dimensional gauging if critical dimensions are inaccessible.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">In-Service Condition Monitoring</h3>
            <p className="text-slate-700">
              Regular visual inspection of in-service equipment monitors corrosion progression, erosion patterns, and damage accumulation. Comparison with previous inspections identifies degradation rates supporting replacement scheduling. Visible changes in surface condition, coating integrity, or dimensional accuracy trigger detailed evaluation and potential corrective action before failure occurs. Visual condition monitoring provides cost-effective trend analysis supporting preventive maintenance strategies.
            </p>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Manufacturing Quality Control</h3>
            <p className="text-slate-700 mb-4">
              Visual inspection is the first quality check for components entering production or assembly processes. Surface quality assessment, dimensional verification, and defect screening occur before costly further processing. Visual inspection efficiency supports high-volume production rates; defective components are identified and removed economically before value-added processing.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Weld Inspection Programs</h3>
            <p className="text-slate-700 mb-4">
              Welds undergo visual assessment before, during, and after fabrication. Pre-weld cleaning verification ensures proper surface condition. In-progress visual inspection monitors proper joint preparation and dimensional accuracy. Post-weld visual assessment identifies surface defects, geometry non-conformances, and dimensional issues requiring corrective action before radiographic or other detailed inspection.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Infrastructure Maintenance</h3>
            <p className="text-slate-700 mb-4">
              Bridge inspections, building facade assessment, and structural steelwork evaluation rely heavily on visual inspection supported by drone technology for inaccessible areas. Visual examination identifies corrosion, cracking, deterioration, and structural changes triggering detailed investigation and maintenance planning.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Aerospace and High-Reliability Applications</h3>
            <p className="text-slate-700">
              Aircraft visual inspection under maintenance programs identifies cracks, corrosion, and damage requiring repair or component replacement. Regular visual assessment supported by borescope and optical aid examination maintains airworthiness and prevents service failures. Visual inspection findings determine necessity for detailed NDT or component overhaul.
            </p>
          </section>

          {/* Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Section V, Article 9</h4>
                <p className="text-slate-700 text-sm">Visual examination standards for pressure equipment, establishing acceptance criteria, documentation requirements, and minimum lighting specifications.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E2375</h4>
                <p className="text-slate-700 text-sm">Standard guide for visual testing covering examination techniques, lighting requirements, and defect assessment methodologies.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 20712</h4>
                <p className="text-slate-700 text-sm">International standard for visual inspection of welds, establishing acceptance criteria and inspection techniques.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">AWS D1.1</h4>
                <p className="text-slate-700 text-sm">American Welding Society standard for structural welding specifying visual acceptance criteria for welds.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">SNT-TC-1A</h4>
                <p className="text-slate-700 text-sm">Personnel qualification standard for visual testing professionals (Level 1, 2, and 3 certification).</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Simplicity:</strong> Requires minimal equipment and training compared to instrumental NDT methods.</li>
              <li><strong>Speed:</strong> Rapid assessment enables high-volume production inspection and efficient maintenance screening.</li>
              <li><strong>Cost-Effectiveness:</strong> Lowest equipment and personnel costs of all NDT methods.</li>
              <li><strong>Universal Applicability:</strong> Applicable to all material types and geometric configurations.</li>
              <li><strong>Immediate Results:</strong> Real-time assessment without processing delays or complex interpretation.</li>
              <li><strong>Surface Condition Assessment:</strong> Unique ability to evaluate appearance, coating condition, and corrosion morphology.</li>
              <li><strong>Fundamental Method:</strong> Forms foundation for all inspection programs; identifies candidates for detailed testing.</li>
              <li><strong>Objectivity:</strong> Direct evidence available to trained observer reduces interpretation ambiguity.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Surface Defects Only:</strong> Detects only visible surface anomalies; internal defects remain undetected.</li>
              <li><strong>Accessibility Dependency:</strong> Inaccessible surfaces cannot be examined without optical aids or component removal.</li>
              <li><strong>Subtle Defect Detection:</strong> Small cracks or shallow defects below visual acuity limits are undetectable without magnification.</li>
              <li><strong>Operator Dependency:</strong> Detection probability depends substantially on inspector experience, fatigue, and attention.</li>
              <li><strong>Contrast Sensitivity:</strong> Defects with low contrast to background (similar color, fine details) are difficult to distinguish.</li>
              <li><strong>Limited Characterization:</strong> Defect depth and internal extent difficult to determine; subsurface cracks may extend beyond visible surface evidence.</li>
              <li><strong>Environmental Limitations:</strong> Poor lighting, high temperature surfaces, or hazardous environments restrict visual inspection.</li>
              <li><strong>Quantification Difficulty:</strong> Defect sizing and severity assessment require supplementary measurements or tools.</li>
            </ul>
          </section>
        </article>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
          <ul className="space-y-2">
            <li><Link href="/methods/liquid-penetrant-testing" className="text-blue-600 hover:underline">Liquid Penetrant Testing (PT) - Enhanced surface defect detection</Link></li>
            <li><Link href="/methods/magnetic-particle-testing" className="text-blue-600 hover:underline">Magnetic Particle Testing (MT) - Ferromagnetic surface and subsurface inspection</Link></li>
            <li><Link href="/methods/ultrasonic-testing" className="text-blue-600 hover:underline">Ultrasonic Testing (UT) - Internal defect detection</Link></li>
            <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Visual Testing and Inspection Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need visual inspection for welds, castings, infrastructure, or equipment condition assessment? Atlantis NDT provides certified inspection services with borescope examination for inaccessible locations and comprehensive documentation.
          </p>
          <Link
            href="https://atlantisndt.com/visual-testing"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Our VT Services
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
            headline: 'Visual Testing (VT): Comprehensive Guide',
            description: 'Complete guide to visual testing methods, optical aids, and inspection procedures.',
            image: 'https://www.example.com/images/visual-testing.jpg',
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
