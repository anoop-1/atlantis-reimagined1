import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aerospace NDT Guide | NADCAP, FAA & Composite Inspection',
  description: 'Complete guide to aerospace non-destructive testing, NADCAP compliance, FAA regulations, composite material inspection, and aircraft maintenance programs.',
  keywords: 'aerospace NDT, NADCAP, FAA regulations, composite inspection, aircraft maintenance, ultrasonic testing aerospace',
}

export default function AerospaceInspectionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Comprehensive Aerospace NDT Guide',
    description: 'Expert guidance on NADCAP, FAA compliance, and advanced NDT in aerospace',
    author: { '@type': 'Organization', name: 'Industrial Inspection Resources' },
  }

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/industries">Industries</a> / <span className="text-gray-400">Aerospace</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Aerospace NDT Excellence</h1>
          <p className="text-xl text-teal-50">Master NADCAP compliance, FAA regulations, and advanced inspection techniques for aircraft and aerospace components.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>Aerospace Inspection Excellence</h2>
            <p>
              The aerospace industry operates under the most stringent safety, quality, and regulatory requirements of any manufacturing sector. 
              Non-destructive testing is critical to ensuring airworthiness and maintaining the exceptional safety record that modern aviation enjoys.
            </p>

            <h2>NADCAP Certification & Requirements</h2>
            <p>
              The National Aerospace and Defense Contractors Accreditation Program (NADCAP) establishes the gold standard for aerospace quality assurance. 
              NADCAP accreditation is required by most aerospace primes for suppliers of critical processes, including non-destructive testing.
            </p>

            <h3>NADCAP NDT Accreditation Scope</h3>
            <p>
              NADCAP accreditation covers multiple NDT disciplines:
            </p>
            <ul>
              <li><strong>Ultrasonic Testing (UT):</strong> Thickness measurement, flaw detection, and advanced array technologies</li>
              <li><strong>Eddy Current Testing (ET):</strong> Surface and near-surface defect detection in conductive materials</li>
              <li><strong>Magnetic Particle Inspection (MPI):</strong> Ferrous material surface crack detection</li>
              <li><strong>Liquid Penetrant Testing (LPT):</strong> Surface flaw detection in both ferrous and non-ferrous materials</li>
              <li><strong>Radiography (RT):</strong> Internal structure visualization and discontinuity detection</li>
              <li><strong>Thermography (IR):</strong> Non-contact temperature and thermal anomaly detection</li>
            </ul>

            <p>
              Organizations maintaining NADCAP accreditation must demonstrate consistent adherence to procedures, equipment calibration, personnel 
              qualification, and documentation standards. Regular surveillance audits verify ongoing compliance.
            </p>

            <h3>Personnel Qualification & Certification</h3>
            <p>
              NADCAP requires structured personnel qualification programs. NDT technicians must be certified to:
            </p>
            <ul>
              <li>ASNT SNT-TC-1A standard (national requirement)</li>
              <li>Specific company procedures and acceptance criteria</li>
              <li>Documented visual acuity and color perception standards</li>
            </ul>

            <p>
              Advanced NDT specialists often hold Level III certifications in multiple disciplines, enabling complex inspection decisions and 
              procedure development. Continuing education and recertification maintain currency in rapidly evolving aerospace standards.
            </p>

            <h2>FAA Regulations & Airworthiness</h2>
            <p>
              Federal Aviation Administration (FAA) regulations govern aircraft design, manufacture, maintenance, and operation. Key regulatory 
              frameworks impacting NDT include:
            </p>

            <h3>Type Certification & Production</h3>
            <p>
              New aircraft and aircraft types undergo rigorous certification programs including extensive non-destructive testing. FAA approval 
              requires demonstration that inspection methods reliably detect critical flaws and that repair processes restore airworthiness.
            </p>

            <h3>Continued Airworthiness & Maintenance</h3>
            <p>
              FAA-mandated Airworthiness Directives (ADs) specify required inspections and modifications based on in-service experience. 
              Maintenance programs integrate periodic inspections, on-condition inspections, and life-limited components.
            </p>

            <h3>Structural Health Monitoring</h3>
            <p>
              Modern aircraft increasingly employ structural health monitoring (SHM) systems integrating sensors for real-time fatigue crack 
              detection and corrosion monitoring. These systems inform maintenance decisions and extend safe operational life.
            </p>

            <h2>Composite Material Inspection</h2>
            <p>
              Advanced composite materials (carbon fiber reinforced polymers, glass fiber, aramid) comprise significant portions of modern aircraft. 
              Composites present unique inspection challenges due to potential internal damage not visible at the surface.
            </p>

            <h3>Composite Damage Modes</h3>
            <p>
              Composite structures are susceptible to several damage mechanisms:
            </p>
            <ul>
              <li><strong>Impact Damage:</strong> Delamination and fiber breakage from impacts (tool drops, hail, ground handling)</li>
              <li><strong>Matrix Cracking:</strong> Transverse cracks in the resin matrix</li>
              <li><strong>Fiber Waviness:</strong> Out-of-plane fiber orientation reducing strength</li>
              <li><strong>Porosity:</strong> Void defects in the consolidated laminate</li>
              <li><strong>Foreign Object Inclusion:</strong> Contamination trapped during manufacturing</li>
              <li><strong>Environmental Degradation:</strong> Moisture absorption and UV exposure effects</li>
            </ul>

            <h3>NDT Methods for Composites</h3>
            <p>
              <strong>Ultrasonic Testing:</strong> Pulse-echo and through-transmission techniques detect internal delamination and fiber matrix 
              separation. Phased array ultrasonic testing (PAUT) provides enhanced imaging of complex geometries.
            </p>

            <p>
              <strong>Thermography:</strong> Infrared thermography detects impact damage, delamination, and environmental degradation through thermal 
              signature analysis. Active thermography applies localized heating to enhance contrast.
            </p>

            <p>
              <strong>Shearography:</strong> Laser shearography detects subsurface defects through measurement of displacement discontinuities. 
              This technique is highly sensitive to delamination and disbond detection.
            </p>

            <p>
              <strong>Visual Inspection Enhancement:</strong> Borescopes and videoscopes enable internal inspection of composite structures through 
              access ports and drilled inspection holes.
            </p>

            <h2>Aircraft Engine & Power Plant Inspection</h2>
            <p>
              Aircraft engines operate at extreme temperatures, pressures, and rotational speeds. High-reliability inspection ensures safe 
              operation and optimal maintenance intervals.
            </p>

            <h3>Engine Overhaul Inspection</h3>
            <p>
              Scheduled engine overhauls (typically at 15,000-20,000 flight hours) include comprehensive non-destructive examination:
            </p>
            <ul>
              <li>Ultrasonic thickness verification of turbine blades and casings</li>
              <li>Eddy current inspection for fatigue cracks in compressor and turbine components</li>
              <li>Magnetic particle inspection of ferrous rotating components</li>
              <li>Liquid penetrant testing of high-stress areas</li>
              <li>Borescope inspection of internal engine surfaces</li>
              <li>Dimensional verification and blade tip rub analysis</li>
            </ul>

            <h3>Condition Monitoring Programs</h3>
            <p>
              Modern engines employ on-condition maintenance (OCM) based on performance trending:
            </p>
            <ul>
              <li><strong>Engine Parameter Monitoring:</strong> Automated systems track temperatures, pressures, fuel consumption, and vibration</li>
              <li><strong>Oil Analysis:</strong> Engine oil sampling detects wear debris indicating component degradation</li>
              <li><strong>Vibration Trending:</strong> Signature analysis identifies developing mechanical problems</li>
              <li><strong>Borescope Inspection:</strong> Periodic visual examination of internal condition between overhauls</li>
            </ul>

            <h2>Quality Control in Aerospace Manufacturing</h2>
            <p>
              Manufacturing inspection prevents defects from entering service. Aerospace suppliers implement comprehensive in-process and 
              final inspection programs.
            </p>

            <h3>First Article Inspection (FAI)</h3>
            <p>
              New components undergo rigorous first article inspection per AS9102 standard, establishing manufacturing process capability 
              and establishing baseline dimensions and material properties.
            </p>

            <h3>In-Process & Final Inspection</h3>
            <p>
              Statistical process control and acceptance sampling verify continued compliance with drawing specifications and material 
              requirements throughout production runs.
            </p>

            <h2>Advanced NDT Technologies</h2>
            <p>
              Aerospace inspection increasingly leverages advanced technologies:
            </p>

            <h3>Phased Array Ultrasonic Testing (PAUT)</h3>
            <p>
              Electronic beam steering and focusing enable rapid imaging of complex geometries. PAUT is particularly effective for composite 
              inspection and weld examination in aircraft structures.
            </p>

            <h3>Automated Ultrasonic Scanning</h3>
            <p>
              Robotic and automated scanning systems improve repeatability and reduce inspection time for large structural components. Full 
              3D reconstruction enables quantitative defect sizing and trending.
            </p>

            <h3>Structural Health Monitoring</h3>
            <p>
              Integrated sensor networks provide continuous monitoring of critical structural areas. Real-time data enables predictive maintenance 
              and optimal inspection timing.
            </p>

            <h2>Training & Certification</h2>
            <p>
              Aerospace NDT professionals require advanced education and training. <a href="https://atlantisndt.com/aerospace-ndt-training">
              Atlantis NDT offers specialized aerospace NDT training programs</a> covering NADCAP requirements, FAA regulations, advanced techniques, 
              and hands-on practical experience.
            </p>

            <h2>Professional Development</h2>
            <p>
              Career development in aerospace NDT includes progression from Level I technician through Level III specialist roles. Advanced 
              certifications in specific technologies (ultrasonic array, thermography) enhance expertise and career opportunities.
            </p>

            <h2>Conclusion</h2>
            <p>
              Aerospace NDT represents the pinnacle of inspection excellence. By combining rigorous NADCAP standards, FAA compliance, advanced 
              technologies, and highly trained personnel, the aerospace industry maintains the exceptional safety record that enables billions 
              of safe air miles annually.
            </p>

            <p>
              For expert guidance on aerospace NDT programs, training, and certification, 
              <a href="https://atlantisndt.com/training"> contact Atlantis NDT training specialists</a> with extensive aerospace industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/standards" className="card group">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Aerospace Standards</h3>
              <p className="text-sm text-gray-600">AS9100, NADCAP, and FAA requirements</p>
            </a>
            <a href="/technology" className="card group">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Advanced NDT Tech</h3>
              <p className="text-sm text-gray-600">Latest inspection technologies and innovations</p>
            </a>
            <a href="/case-studies" className="card group">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Case Studies</h3>
              <p className="text-sm text-gray-600">Real-world aerospace inspection examples</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Aerospace NDT Training & Certification</h2>
          <p className="text-lg text-gray-700 mb-8">
            Achieve NADCAP-compliant NDT certification with Atlantis NDT aerospace training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://atlantisndt.com/aerospace-ndt-training" rel="noopener" className="btn-primary">
              Explore Training Programs
            </a>
            <a href="https://atlantisndt.com/training" rel="noopener" className="btn-secondary">
              View All Training
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
