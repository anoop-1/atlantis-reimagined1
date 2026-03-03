import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Inspection Codes Guide | 510, 570, 653 & 580 Standards',
  description: 'Comprehensive guide to API inspection standards: API 510 pressure vessel inspection, API 570 piping inspection, API 653 storage tank codes, and API 580 risk-based inspection framework.',
  keywords: 'API standards, API 510, API 570, API 653, API 580, RBI, pressure vessel inspection, pipeline inspection',
}

export default function ApiInspectionCodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to API Inspection Standards',
    description: 'Expert coverage of API 510, 570, 653, and 580 standards',
    author: { '@type': 'Organization', name: 'Industrial Inspection Resources' },
  }

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/standards">Standards</a> / <span className="text-gray-400">API Codes</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">API Inspection Standards</h1>
          <p className="text-xl text-teal-50">Master API 510, 570, 653, and 580 standards governing oil and gas equipment inspection and integrity management.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>American Petroleum Institute Inspection Standards</h2>
            <p>
              The American Petroleum Institute (API) publishes critical standards governing inspection, maintenance, and integrity management 
              of equipment throughout the oil, gas, and chemical industries. These standards represent industry consensus on best practices and 
              are often incorporated into regulatory requirements.
            </p>

            <h2>API 510 - Pressure Vessel Inspection Code</h2>
            <p>
              API 510 is the definitive standard for in-service inspection and maintenance of pressure vessels. It covers inspection frequency, 
              methodology, defect assessment, repair procedures, and compliance requirements.
            </p>

            <h3>Scope & Application</h3>
            <p>
              API 510 applies to stationary pressure vessels used in petroleum refineries and allied industries. It covers:
            </p>
            <ul>
              <li>Periodic in-service inspection frequency and methodology</li>
              <li>Defect evaluation and fitness-for-service assessment</li>
              <li>Repair and alteration procedures</li>
              <li>Documentation and record keeping requirements</li>
              <li>Inspector certification and qualifications</li>
            </ul>

            <h3>Inspection Frequency</h3>
            <p>
              API 510 establishes inspection intervals based on equipment category, operating pressure, and service environment. Categories range 
              from Category A (highest risk, maximum 5-year interval) through Category D (lower risk, may exceed 10 years).
            </p>

            <p>
              Risk-based inspection principles allow extension of inspection intervals for equipment with verified low-risk characteristics such as 
              robust design, benign service history, and continuous online monitoring.
            </p>

            <h3>Defect Evaluation</h3>
            <p>
              When defects are discovered during inspection, API 510 requires fitness-for-service (FFS) assessment using engineering analysis. 
              The standard provides guidance on:
            </p>
            <ul>
              <li>Measurement and documentation of defects</li>
              <li>Application of FFS assessment methodologies</li>
              <li>Determination of repairs required versus continued service allowed</li>
              <li>Selection of appropriate repair methods</li>
            </ul>

            <h3>Inspector Certification</h3>
            <p>
              API 510 inspectors must be certified to API 510 standard through a comprehensive examination covering code knowledge, equipment 
              evaluation techniques, and practical inspection experience. Certification must be renewed every 5 years with continuing education.
            </p>

            <h2>API 570 - Piping Inspection Code</h2>
            <p>
              API 570 provides guidance for inspection, repair, and alteration of in-service piping systems in refineries and chemical plants. 
              The standard establishes methodologies and acceptance criteria for evaluating piping integrity.
            </p>

            <h3>Scope & Categories</h3>
            <p>
              API 570 categorizes piping by consequence of failure and corrosion/erosion potential:
            </p>
            <ul>
              <li><strong>Category A:</strong> High consequence of failure (health, safety, environment)</li>
              <li><strong>Category B:</strong> Moderate consequence</li>
              <li><strong>Category C:</strong> Low consequence</li>
            </ul>

            <p>
              Inspection frequency ranges from annually for Category A piping to potentially 20+ years for low-risk Category C systems. 
              Risk-based approaches may extend intervals for verified low-risk service conditions.
            </p>

            <h3>Inspection Methods</h3>
            <p>
              Acceptable inspection methods include:
            </p>
            <ul>
              <li><strong>Ultrasonic Thickness (UT):</strong> Wall thickness measurement and corrosion monitoring</li>
              <li><strong>Radiography (RT):</strong> Weld examination for quality assurance and flaw detection</li>
              <li><strong>Visual Inspection (VT):</strong> Surface condition, corrosion, and damage assessment</li>
              <li><strong>Eddy Current Testing (ET):</strong> Surface and near-surface flaw detection</li>
              <li><strong>Magnetic Particle Inspection (MPI):</strong> Surface crack detection in ferrous materials</li>
              <li><strong>Liquid Penetrant Testing (LPT):</strong> Surface flaw detection in non-ferrous materials</li>
            </ul>

            <h3>Defect Assessment</h3>
            <p>
              API 570 provides tabulated criteria for assessment of common piping defects including corrosion, erosion, fatigue cracks, and 
              stress corrosion cracking. Engineering assessment may be required for defects exceeding tabulated limits.
            </p>

            <h2>API 580 - Risk-Based Inspection</h2>
            <p>
              API RP 580 establishes the risk-based inspection (RBI) framework that optimizes inspection programs through systematic evaluation of 
              failure probability and consequence. This recommended practice provides methodology for integrating RBI into facility asset management.
            </p>

            <h3>Risk Assessment Fundamentals</h3>
            <p>
              RBI quantifies risk as the product of probability of failure and consequence of failure:
            </p>
            <p className="font-bold text-lg text-center">Risk = Probability of Failure × Consequence of Failure</p>

            <h3>Probability of Failure Assessment</h3>
            <p>
              Probability assessment evaluates likelihood of defect occurrence based on:
            </p>
            <ul>
              <li>Service history and actual degradation rates</li>
              <li>Material and design characteristics</li>
              <li>Operating conditions (temperature, pressure, corrosive environment)</li>
              <li>Degradation mechanisms (corrosion, erosion, fatigue, creep)</li>
              <li>Previous inspection findings and repair history</li>
            </ul>

            <p>
              Models may be qualitative (expert judgment) or quantitative (statistical analysis of failure databases). 
              Quantitative models are preferred where sufficient operational data exists.
            </p>

            <h3>Consequence of Failure Assessment</h3>
            <p>
              Consequence evaluation considers safety, environmental, regulatory, and business impacts:
            </p>
            <ul>
              <li><strong>Safety Impact:</strong> Potential for personnel injury or fatality</li>
              <li><strong>Environmental Impact:</strong> Potential for environmental release and regulatory action</li>
              <li><strong>Regulatory Impact:</strong> Violation of applicable regulations or industry standards</li>
              <li><strong>Business Impact:</strong> Production loss, business interruption, repair costs</li>
            </ul>

            <h3>Risk Prioritization</h3>
            <p>
              Equipment is ranked by risk level to prioritize inspection resources on highest-risk items. This allows optimization of inspection 
              frequency, method selection, and timing to achieve best safety and business outcomes within budget constraints.
            </p>

            <p>
              RBI programs typically result in significant reduction of unnecessary inspections while maintaining safety margins and extending 
              equipment life through strategic, targeted examination.
            </p>

            <h2>API 653 - Storage Tank Inspection Code</h2>
            <p>
              API 653 governs the inspection, maintenance, repair, and modification of aboveground steel storage tanks. The code addresses tank 
              design, fabrication, erection, and in-service inspection and maintenance.
            </p>

            <h3>Scope</h3>
            <p>
              API 653 applies to bolted and welded storage tanks of various designs including atmospheric storage tanks, tanks for low-pressure 
              service, and floating roof tanks. The code covers:
            </p>
            <ul>
              <li>Tank foundation design and inspection</li>
              <li>Inspection frequency and methodology for tank shell and internals</li>
              <li>Corrosion assessment and remaining life evaluation</li>
              <li>Repair procedures and acceptance criteria</li>
              <li>Modifications and rerating for increased capacity or changed service</li>
            </ul>

            <h3>Tank Inspection Requirements</h3>
            <p>
              Tank inspection intervals are determined by corrosion rate assessment. Baseline and re-baseline ultrasonic thickness surveys 
              establish corrosion rates guiding future inspection scheduling.
            </p>

            <p>
              Inspection activities include:
            </p>
            <ul>
              <li>External visual inspection for corrosion, mechanical damage, and coating condition</li>
              <li>Internal visual inspection of shell plates, welds, and seams</li>
              <li>Ultrasonic thickness surveys of shell plates to establish corrosion rates</li>
              <li>Internal coating inspection and assessment</li>
              <li>Foundation and support structure examination</li>
              <li>Floating roof inspection and seal assessment</li>
            </ul>

            <h3>Corrosion Monitoring</h3>
            <p>
              API 653 provides guidance on establishing tank-specific inspection intervals based on measured corrosion rates. Historical 
              inspection data enables prediction of remaining service life and optimal timing of major repairs or tank replacement.
            </p>

            <h2>Certification & Professional Development</h2>
            <p>
              API Inspector Certification demonstrates competency and commitment to professional standards. Certification programs are offered by 
              authorized training providers including <a href="https://atlantisndt.com/training">Atlantis NDT</a>, covering all major API standards 
              and inspection methodologies.
            </p>

            <p>
              Certification benefits include:
            </p>
            <ul>
              <li>Enhanced professional credibility and marketability</li>
              <li>Comprehensive knowledge of standard requirements</li>
              <li>Compliance with regulatory and customer requirements</li>
              <li>Improved inspection quality and consistency</li>
              <li>Career advancement opportunities in inspection and integrity management</li>
            </ul>

            <h2>Implementation Best Practices</h2>
            <p>
              Successful implementation of API standards requires:
            </p>

            <h3>Procedure Development</h3>
            <p>
              Written procedures must detail how standards will be applied to specific equipment and processes. Procedures should address 
              inspection methods, acceptance criteria, defect evaluation, and documentation requirements.
            </p>

            <h3>Personnel Qualification</h3>
            <p>
              Inspector training and certification to applicable standards ensures competent execution of inspections and proper application 
              of acceptance criteria.
            </p>

            <h3>Equipment & Calibration</h3>
            <p>
              Inspection equipment must be maintained and calibrated per standard requirements. Regular calibration verification and equipment 
              maintenance ensures measurement accuracy.
            </p>

            <h3>Documentation</h3>
            <p>
              Comprehensive documentation of inspection findings, personnel qualifications, equipment calibration, and procedure compliance 
              creates an auditable record demonstrating standards conformance.
            </p>

            <h2>Conclusion</h2>
            <p>
              API inspection standards represent industry best practices developed through decades of operational experience and technical 
              consensus. Proper implementation protects people, environment, and equipment while optimizing inspection resources and extending 
              asset life.
            </p>

            <p>
              For expert guidance on implementing API standards, training, and certification programs, 
              <a href="https://atlantisndt.com/training">contact Atlantis NDT training specialists</a> with extensive experience in all major 
              API codes.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/industries/oil-gas-inspection" className="card group">
              <div className="text-3xl mb-3">⛽</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Oil & Gas Inspection</h3>
              <p className="text-sm text-gray-600">Industry guide covering upstream, midstream, downstream</p>
            </a>
            <a href="/standards/asme-codes-ndt" className="card group">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">ASME Standards</h3>
              <p className="text-sm text-gray-600">Boiler and pressure vessel code overview</p>
            </a>
            <a href="/technology/digital-twins-asset-management" className="card group">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Digital Twins</h3>
              <p className="text-sm text-gray-600">Asset integrity and RBI program tools</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">API Inspector Certification & Training</h2>
          <p className="text-lg text-gray-700 mb-8">
            Achieve API 510, 570, and 653 certification through comprehensive training from Atlantis NDT experts.
          </p>
          <a href="https://atlantisndt.com/training" className="btn-primary">
            Explore Training Programs
          </a>
        </div>
      </section>
    </div>
  )
}
