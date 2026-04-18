import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Liquid Penetrant Testing (PT) Guide | Surface Crack Detection Method',
  description: 'Complete guide to liquid penetrant testing including penetrant chemistry, removal methods, developer systems, applications, safety, and standards for detecting surface defects in all material types.',
  keywords: [
    'liquid penetrant testing',
    'penetrant testing',
    'PT inspection',
    'surface crack detection',
    'fluorescent penetrant',
    'dye penetrant',
    'capillary action',
    'developer',
    'ASME standards',
    'ASTM standards',
    'all material types',
    'composite inspection'
  ],
  openGraph: {
    title: 'Liquid Penetrant Testing (PT) Guide | Surface Crack Detection Method',
    description: 'Comprehensive guide to liquid penetrant testing methods, chemistry, and inspection procedures.',
    type: 'article',
    url: 'https://www.example.com/methods/liquid-penetrant-testing',
  },
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'principles', title: 'Principles of Liquid Penetrant Testing' },
  { id: 'penetrants', title: 'Penetrant Chemistry and Types' },
  { id: 'removal', title: 'Removal Methods' },
  { id: 'developers', title: 'Developer Systems' },
  { id: 'procedures', title: 'Testing Procedures' },
  { id: 'applications', title: 'Applications' },
  { id: 'standards', title: 'Industry Standards' },
  { id: 'advantages', title: 'Advantages and Limitations' },
];

export default function LiquidPenetrantTestingPage() {
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
            <span className="text-slate-600">Liquid Penetrant Testing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Liquid Penetrant Testing (PT): Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Liquid penetrant testing is a non-destructive testing method that detects surface-breaking defects in all material types through capillary action of liquid dyes. This comprehensive guide explores penetrant chemistry, removal methods, developer systems, and applications across aerospace, automotive, manufacturing, and maintenance industries.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              Liquid penetrant testing remains the method of choice for detecting surface defects in non-magnetic materials and complex geometries where alternative methods prove impractical—offering superior sensitivity with minimal equipment requirements and universal material applicability.
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
              Liquid penetrant testing stands as the most versatile non-destructive testing method, capable of detecting surface-breaking defects in virtually all material types—metals, composites, ceramics, plastics, and glass. Unlike magnetic particle testing (limited to ferromagnetic materials) or radiography (requiring material density variations), liquid penetrant testing exploits capillary action, a universal physical phenomenon, to identify surface-breaking discontinuities regardless of material composition. This universal applicability, combined with minimal equipment requirements and exceptional cost-effectiveness, has made PT the industrial standard for aerospace, automotive, and manufacturing quality assurance.
            </p>
            <p className="text-slate-700 mb-4">
              The method relies on a simple principle: liquid dyes, drawn into surface cracks by capillary forces, subsequently accumulate on the surface when excess penetrant is removed. Developers (absorbent powders) applied over penetrant-wetted surfaces draw remaining liquid from defects to the surface, creating visible indications under appropriate lighting. Fluorescent penetrants enhanced with ultraviolet illumination provide superior sensitivity; visible dye penetrants serve cost-conscious applications and portable field inspections.
            </p>
            <p className="text-slate-700">
              This comprehensive guide examines the physics and chemistry underlying liquid penetrant testing, commercially available penetrant formulations, removal and development methods, standardized inspection procedures, and applications across diverse industrial sectors.
            </p>
          </section>

          {/* Principles */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principles of Liquid Penetrant Testing</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Capillary Action and Surface Tension</h3>
            <p className="text-slate-700 mb-4">
              Capillary action—the spontaneous flow of liquids into narrow spaces against gravity—is the fundamental principle enabling liquid penetrant testing. Liquids with low surface tension (low cohesion between molecules) preferentially wet solid surfaces, creating contact angles less than 90 degrees. Applied to surface cracks, these low-surface-tension liquids spontaneously fill defects without external pressure, penetrating cracks as narrow as 0.1 micrometers. This spontaneous penetration enables detection of extremely small surface-breaking defects using only gravitational forces and surface tension effects.
            </p>
            <p className="text-slate-700 mb-4">
              Penetrant dwell time (contact time between penetrant application and removal) affects penetration depth and sensitivity. Typical dwell times range from 5-30 minutes; longer dwell times permit penetrant to reach deeper into defects. Extremely long dwell times (hours) can saturate penetrant in interconnected porosity, potentially masking discrete cracks. Optimal dwell times for specific applications represent a balance between defect depth and false-signal minimization.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Indication Development</h3>
            <p className="text-slate-700 mb-4">
              After excess surface penetrant is removed, developers (absorbent powders) are applied. Developers create a white background that contrasts with dye indications and absorb residual penetrant from defects, drawing dye from cracks to the visible surface. The white developer background and dye contrast create visible indications on a short time scale (typically 10-20 minutes for aqueous developers). This "development" process amplifies minute penetrant quantities remaining in defects, enabling detection of extremely small discontinuities that would be invisible without developer action.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Detection Sensitivity Factors</h3>
            <p className="text-slate-700">
              Liquid penetrant testing sensitivity depends on multiple factors: penetrant viscosity and surface tension (lower values improve penetration), dye concentration and lightfastness (higher concentrations improve visibility), developer type and thickness (thicker layers enhance dye visibility), and inspection lighting (proper illumination intensity and color balance). Careful control of each parameter ensures consistent detection of relevant defects. Standard reference cracks on comparison samples provide baseline sensitivity; achieving visible indication on reference cracks confirms acceptable sensitivity.
            </p>
          </section>

          {/* Penetrant Chemistry */}
          <section id="penetrants" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Penetrant Chemistry and Types</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Visible Dye Penetrants</h3>
            <p className="text-slate-700 mb-4">
              Visible dye penetrants contain colored dyes (typically bright red or sometimes yellow/green) dissolved or suspended in carrier fluids. Dyes visible under white light require adequate illumination but offer advantages for field inspections where ultraviolet light sources are unavailable. Visible penetrants typically cost less than fluorescent alternatives; trade visibility for reduced sensitivity. Sensitivity remains adequate for most industrial applications where crack detection (rather than ultrasensitive flaw characterization) is the objective.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Fluorescent Penetrants</h3>
            <p className="text-slate-700 mb-4">
              Fluorescent penetrants contain dyes that absorb ultraviolet light (365 nm) and emit visible light (typically yellow-green at 510 nm). Under UV illumination, fluorescent indications appear with exceptional brightness and contrast against dark backgrounds. Fluorescent penetrants achieve sensitivity 25-30% superior to visible dyes, enabling detection of smaller cracks and improved discrimination from background noise. The higher cost and requirement for UV light sources limit fluorescent penetrants to laboratory settings and critical aerospace applications where sensitivity justifies higher costs.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Post-Emulsification Methods</h3>
            <p className="text-slate-700 mb-4">
              Post-emulsifiable penetrants contain lipophilic dyes in water-immiscible carriers (oils). After penetrant dwell, applied emulsifiers modify the carrier fluid, enabling water rinsing to remove surface penetrant while leaving dye within defects. Emulsifier contact time must be carefully controlled—excessive contact spreads dye around defects creating false (smeared) indications. Hydrophilic penetrants (water-based with detergent-soluble dyes) permit direct water rinsing without separate emulsifiers.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Solvent-Removable Penetrants</h3>
            <p className="text-slate-700">
              Solvent-removable penetrants consist of dye dissolved in volatile organic solvents (typically halocarbon or hydrocarbon). Excess penetrant is removed by solvent-soaked wipes; precise control prevents dye removal from defects. Solvent-removable penetrants suit field inspections where water rinsing is impractical. Solvent volatility requires rapid processing; extended exposure times permit solvent evaporation, changing penetrant concentration and sensitivity. Environmental and occupational health regulations increasingly restrict solvent-based systems in favor of water-based alternatives.
            </p>
          </section>

          {/* Removal Methods */}
          <section id="removal" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Removal Methods</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Water Rinsing</h3>
            <p className="text-slate-700 mb-4">
              Hydrophilic penetrants permit direct water rinsing to remove surface penetrant. Rinse water temperature, pressure, and duration affect removal efficiency and false-indication risk. Excessively aggressive rinsing (high pressure, prolonged water contact) removes dye from small defects, reducing sensitivity. Gentle rinsing may leave surface penetrant film creating high background noise. Proper technique balances complete removal of surface penetrant against preservation of penetrant within defects—typically achieved through lukewarm water rinses at moderate pressure with minimal duration.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Emulsifier Application</h3>
            <p className="text-slate-700 mb-4">
              Post-emulsifiable penetrants require emulsifier application before water rinsing. Emulsifiers (typically synthetic detergents) disperse into the lipophilic penetrant carrier, creating a stable emulsion that water readily rinses. Emulsifier contact time ("emulsification time") is critical—too short permits incomplete penetrant modification; too long spreads emulsified penetrant into false indications. Standardized procedures define emulsification time (typically 1-5 minutes depending on product) necessary for proper removal.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Solvent Wiping</h3>
            <p className="text-slate-700">
              Solvent-removable penetrants are wiped with solvent-soaked cloths to remove excess penetrant. Operator technique significantly affects results—excessive wiping removes dye from small defects; insufficient wiping leaves surface penetrant. Controlled wiping technique combined with final light solvent rinse optimizes removal without dye loss. Halocarbon solvents (largely discontinued for environmental reasons) or approved alternative solvents must be used per regulatory requirements. The labor-intensive nature and solvent waste make solvent removal less favorable than water-based alternatives for high-volume inspections.
            </p>
          </section>

          {/* Developers */}
          <section id="developers" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Developer Systems</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Dry Powder Developers</h3>
            <p className="text-slate-700 mb-4">
              Dry powder developers consist of finely divided absorbent powders (typically talc or silica) applied to damp surfaces after penetrant removal. Moisture (either residual rinse water or applied spray) activates the developer, creating a fine white coating that contrasts with dye indications. Dry developers suit field inspections where facilities for processing are unavailable. Powder application and development timing are operator-dependent; excessive powder creates thick coatings that may obscure fine indications while insufficient powder reduces visibility.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Aqueous Developers</h3>
            <p className="text-slate-700 mb-4">
              Aqueous suspension developers consist of absorbent particles suspended in water. Application by spray or immersion provides uniform coating thickness superior to dry powder. Aqueous developers permit precise control of development time and coating thickness. The water base eliminates solvent waste and occupational health concerns. Drying time (typically 5-10 minutes) precedes inspection; premature inspection may show low contrast from wet coating. Aqueous developers have become the standard for laboratory and high-volume production inspections.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Soluble Developers</h3>
            <p className="text-slate-700">
              Soluble developers consist of inorganic salts dissolved in water, forming a protective film as water evaporates. Soluble developers create extremely thin coatings suitable for fine-detail inspection where thick powder layers would obscure small indications. The uniform, thin coating provides excellent contrast for photography and automated optical detection. Soluble developers are particularly valuable for aerospace critical-component inspection where maximum flaw visibility is essential.
            </p>
          </section>

          {/* Procedures */}
          <section id="procedures" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Testing Procedures</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Surface Preparation</h3>
            <p className="text-slate-700 mb-4">
              Surface preparation is critical for liquid penetrant testing success. Oil, grease, and extraneous matter must be removed; these substances block capillary action preventing penetrant penetration into defects. Acceptable cleaning methods include alkaline or ultrasonic cleaning, solvent degreasing, or mechanical abrasion for heavily contaminated surfaces. Post-cleaning drying is essential—water remaining on surfaces dilutes penetrants and impedes capillary penetration. Dried surfaces confirm readiness for penetrant application.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Application and Dwell</h3>
            <p className="text-slate-700 mb-4">
              Penetrant is applied by spray, immersion, or brushing to inspect surfaces. Penetrant must fully wet all areas under examination; dry spots indicate incomplete coverage. After application, penetrant dwells for specified duration (typically 5-30 minutes) allowing capillary penetration into defects. Temperature affects penetration rate; cooler temperatures increase penetrant viscosity reducing penetration speed, while elevated temperatures accelerate penetration but increase false-signal risk from penetrant seepage. Typical inspection temperatures range 16-52°C (60-125°F).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Inspection Technique</h3>
            <p className="text-slate-700 mb-4">
              Developed parts are inspected under appropriate lighting within specified time windows. Visible-dye inspections require white light (typically ≥500 lux). Fluorescent inspections require UV-A illumination (365 nm) in darkened areas; visible background illumination should be minimized. Inspection timing after development is critical—development continues (dye migration to surface) for approximately 20-30 minutes; inspecting too early may miss indications while waiting too long increases background noise from excess surface dye. Documented defect locations and sizes support traceability and repeat inspections.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Post-Inspection Cleaning</h3>
            <p className="text-slate-700">
              After inspection, residual penetrant and developer are removed to prevent staining or reaction with component surfaces. Water rinses typically suffice for aqueous systems; solvent cleaning may be necessary for difficult-to-remove residues. Complete cleaning is essential before further processing (coating, assembly, heat treatment) to prevent penetrant degradation or coating adhesion problems.
            </p>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Applications</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Aerospace Components</h3>
            <p className="text-slate-700 mb-4">
              Aircraft structures undergo intensive liquid penetrant inspection for cracks in titanium fasteners, aluminum forgings, welded joints, and machined details. Composite materials routinely inspected with PT for resin cracks and delaminations invisible to visual examination. Fluorescent penetrants enable detection of hairline cracks critical for aircraft safety and continued airworthiness.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Weld Inspection</h3>
            <p className="text-slate-700 mb-4">
              Liquid penetrant testing supplements magnetic particle and radiographic methods for comprehensive weld assessment. PT detects stress corrosion cracks, reheat cracks in heat-affected zones, and surface porosity in aluminum and stainless steel welds where MT is inapplicable. Portable PT systems enable field weld inspection supporting rapid quality feedback.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Composite and Non-Metallic Inspection</h3>
            <p className="text-slate-700 mb-4">
              Fiber-reinforced polymers, ceramics, and non-metallic materials are primarily inspected with PT since radiography provides limited sensitivity to matrix cracks and other conventional methods prove inapplicable. PT detects resin cracks, fiber fractures, and surface delaminations critical for structural integrity.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Manufacturing Quality Control</h3>
            <p className="text-slate-700 mb-4">
              High-volume production (precision castings, fasteners, forgings) employs automated liquid penetrant systems for rapid defect screening. Automated systems provide consistent technique and documented results supporting statistical quality control and process improvement initiatives.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">In-Service Inspection</h3>
            <p className="text-slate-700">
              Field inspection of in-service components for stress corrosion cracks, fatigue cracks, and other surface defects supports maintenance planning and risk assessment. Portable PT systems and field-friendly liquid penetrants enable inspections at remote locations supporting extended service-life assessments.
            </p>
          </section>

          {/* Standards */}
          <section id="standards" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Industry Standards</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASME Section V, Article 6</h4>
                <p className="text-slate-700 text-sm">Comprehensive liquid penetrant examination standards, procedures, acceptance criteria, and material specifications for pressure equipment inspection.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ASTM E1417 & E1418</h4>
                <p className="text-slate-700 text-sm">Standard practice for liquid penetrant inspection, defining procedures, material specifications, acceptance criteria, and documentation requirements.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">ISO 3452</h4>
                <p className="text-slate-700 text-sm">International standard for penetrant inspection, harmonizing procedures and acceptance criteria across global industries.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">MIL-STD-1949</h4>
                <p className="text-slate-700 text-sm">Military standard for penetrant inspection of aerospace components establishing sensitivity and acceptance requirements.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">SNT-TC-1A</h4>
                <p className="text-slate-700 text-sm">Personnel qualification and certification standard for liquid penetrant testing professionals.</p>
              </div>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section id="advantages" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Significant Advantages</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Universal Applicability:</strong> Applicable to all material types—metals, composites, ceramics, plastics—providing greatest method versatility.</li>
              <li><strong>Surface Defect Sensitivity:</strong> Exceptional sensitivity to surface-breaking cracks and defects smaller than competing methods.</li>
              <li><strong>Simple Equipment:</strong> Minimal equipment requirements compared to ultrasonic, radiographic, or eddy current methods.</li>
              <li><strong>Visual Indications:</strong> Direct visual indication of defects requires minimal interpretation training.</li>
              <li><strong>Complex Geometry:</strong> Inspects complex, intricate, and inaccessible geometries where alternative methods prove impractical.</li>
              <li><strong>Permanent Record:</strong> Photography captures defects for documentation and traceability supporting regulatory compliance.</li>
              <li><strong>Cost-Effective:</strong> Lower equipment and training costs compared to alternative methods.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Notable Limitations</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Surface Defects Only:</strong> Detects only surface-breaking defects; internal defects beyond surface connectivity remain undetected.</li>
              <li><strong>Surface Condition Dependent:</strong> Tight, closed cracks may not permit capillary penetration; corrosion deposits can block defect openings.</li>
              <li><strong>Material Cleanliness Critical:</strong> Oil, grease, or other contaminants blocking capillary action impede detection capability.</li>
              <li><strong>Cleaning and Processing Time:</strong> Surface preparation, multiple process steps, and post-inspection cleaning require significant labor.</li>
              <li><strong>Environmental Concerns:</strong> Waste disposal and occupational exposure to chemicals require environmental controls.</li>
              <li><strong>Operator Dependent:</strong> Technique quality significantly affects results; inconsistent cleaning, dwell time, or development create variable outcomes.</li>
              <li><strong>False Indications Risk:</strong> Excessive penetrant residue or developer application creates background noise masking true defects.</li>
            </ul>
          </section>
        </article>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related NDT Methods</h3>
          <ul className="space-y-2">
            <li><Link href="/methods/magnetic-particle-testing" className="text-blue-600 hover:underline">Magnetic Particle Testing (MT) - Surface inspection for ferromagnetic materials</Link></li>
            <li><Link href="/methods/ultrasonic-testing" className="text-blue-600 hover:underline">Ultrasonic Testing (UT) - Internal defect detection</Link></li>
            <li><Link href="/methods/visual-testing" className="text-blue-600 hover:underline">Visual Testing (VT) - Direct and aided visual examination</Link></li>
            <li><Link href="/methods" className="text-blue-600 hover:underline">Compare all NDT methods</Link></li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Liquid Penetrant Testing Services</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need liquid penetrant inspection for composites, non-magnetic metals, or complex geometries? Atlantis NDT provides certified PT services with both visible and fluorescent penetrants for aerospace and industrial applications.
          </p>
          <Link
            href="https://atlantisndt.com/penetrant-testing"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Our PT Services
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
            headline: 'Liquid Penetrant Testing (PT): Comprehensive Guide',
            description: 'Complete guide to liquid penetrant testing methods, chemistry, and inspection procedures.',
            image: 'https://www.example.com/images/penetrant-testing.jpg',
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
