import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oil & Gas Inspection Guide | NDT, API Standards & RBI Programs',
  description: 'Comprehensive guide to oil and gas inspection including upstream, midstream, downstream operations, API standards (510, 570, 653), risk-based inspection, and turnaround management.',
  keywords: 'oil and gas inspection, NDT, API standards, risk-based inspection, RBI, pipeline inspection, pressure vessel inspection',
}

export default function OilGasInspectionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Comprehensive Guide to Oil & Gas Inspection',
    description: 'Expert guide covering upstream, midstream, and downstream inspection requirements',
    author: {
      '@type': 'Organization',
      name: 'Industrial Inspection Resources',
    },
  }

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/industries">Industries</a> / <span className="text-gray-400">Oil & Gas</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Oil & Gas Inspection Excellence</h1>
          <p className="text-xl text-teal-50 max-w-3xl">
            Master upstream, midstream, and downstream inspection requirements with comprehensive guides to API standards, risk-based inspection programs, and turnaround management.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>Understanding Oil & Gas Inspection</h2>
            <p>
              The oil and gas industry operates some of the world's most critical and valuable infrastructure, from offshore platforms 
              and refineries to pipeline networks spanning continents. Non-destructive testing (NDT) and integrity management are essential 
              to safe, efficient, and economically viable operations across all segments of the industry.
            </p>

            <p>
              This comprehensive guide covers inspection requirements and best practices across upstream (exploration and production), 
              midstream (transportation and storage), and downstream (refining and distribution) operations.
            </p>

            <h2>Upstream Inspection Requirements</h2>
            <p>
              Upstream operations include exploration drilling, production facilities, and field development projects. These operations 
              face unique inspection challenges due to remote locations, harsh environments, and critical operational demands.
            </p>

            <h3>Subsea Infrastructure</h3>
            <p>
              Subsea production systems include wellheads, manifolds, and flowlines operating under extreme pressure and temperature conditions. 
              Inspection requirements include:
            </p>
            <ul>
              <li>Corrosion monitoring and coating integrity assessment</li>
              <li>Fatigue crack detection in structural welds</li>
              <li>Pipeline wall thickness verification using ultrasonic inspection</li>
              <li>Cathodic protection system effectiveness evaluation</li>
              <li>ROV-based visual and non-destructive examination</li>
            </ul>

            <p>
              Regular baseline and re-baseline inspections establish condition trends and inform maintenance intervals. Risk-based approaches 
              prioritize critical components based on consequence of failure and probability of defect growth.
            </p>

            <h3>Production Platforms</h3>
            <p>
              Offshore and onshore production platforms require comprehensive structural integrity programs. Fixed platforms must undergo 
              periodic third-party inspection of primary structural members, deck equipment, and mooring systems. Key inspection activities include:
            </p>
            <ul>
              <li>Ultrasonic thickness surveys of structural steel and piping</li>
              <li>Magnetic particle inspection for fatigue cracks in welds</li>
              <li>Cathodic protection surveys and coating condition assessment</li>
              <li>Foundation pile inspection in subsea environments</li>
              <li>Mechanical equipment verification and performance testing</li>
            </ul>

            <p>
              Floating Production, Storage and Offloading (FPSO) vessels and Floating Production Systems (FPS) add additional complexity through 
              motion-related stresses. Specialized mooring and riser inspection programs address the dynamic operational environment.
            </p>

            <h3>Well Integrity</h3>
            <p>
              Well integrity assurance involves inspection of casing, cement, and wellhead equipment. Modern well monitoring includes pressure 
              testing, cement bond logging, and annular pressure monitoring to detect seal degradation early.
            </p>

            <h2>Midstream Inspection & Risk-Based Programs</h2>
            <p>
              Midstream assets include pipelines, compressor stations, pump stations, and storage facilities. The economic scale of these assets 
              and potential safety consequences make efficient, risk-based inspection critical.
            </p>

            <h3>Pipeline Integrity Management</h3>
            <p>
              Pipeline inspection combines in-line inspection (ILI or "pigging") with detailed engineering analysis. Key inspection technologies include:
            </p>
            <ul>
              <li><strong>Ultrasonic Inspection:</strong> High-resolution wall thickness measurement and defect detection</li>
              <li><strong>Magnetic Flux Leakage (MFL):</strong> Corrosion and crack detection in steel pipelines</li>
              <li><strong>Eddy Current Inspection:</strong> Detection of seam anomalies and fatigue cracks</li>
              <li><strong>Guided Wave Ultrasonic:</strong> Long-distance screening for defects in insulated or inaccessible sections</li>
              <li><strong>EMAT & EFRM:</strong> High-temperature and specialist corrosion and erosion detection</li>
            </ul>

            <p>
              Results from ILI programs feed into fitness-for-service (FFS) assessments that determine immediate threats, defects requiring 
              near-term remediation, and candidates for monitoring programs.
            </p>

            <h3>Risk-Based Inspection (RBI) Programs</h3>
            <p>
              API RP 580 Risk Based Inspection provides a structured framework for optimizing inspection frequency and method selection based on:
            </p>
            <ul>
              <li><strong>Probability of Failure (POF):</strong> Likelihood of defect occurrence based on service history, environment, and degradation mechanisms</li>
              <li><strong>Consequence of Failure (COF):</strong> Safety, environmental, and business impact of asset failure</li>
              <li><strong>Risk = POF × COF:</strong> Prioritization matrix directing inspection resources to highest-risk items</li>
            </ul>

            <p>
              Effective RBI programs significantly reduce unnecessary inspections while maintaining safety margins. Probability models account 
              for corrosion rates, erosion patterns, fatigue history, and material degradation mechanisms specific to each application.
            </p>

            <h3>Pressure Equipment & Vessels</h3>
            <p>
              Storage tanks, separators, heat exchangers, and reactors require periodic inspection under API 510 (Pressure Vessel Inspection Code). 
              Inspection activities include thickness surveys, corrosion under insulation (CUI) assessment, and fitness-for-service evaluation of 
              defects. External coatings, fireproofing systems, and foundation conditions also require attention.
            </p>

            <h2>Downstream Inspection Best Practices</h2>
            <p>
              Downstream operations include refineries, chemical plants, and distribution terminals. These facilities operate at high throughput with 
              limited downtime, requiring efficient inspection planning and execution.
            </p>

            <h3>Refinery Turnaround Inspection</h3>
            <p>
              Planned turnarounds (TAR) occur every 3-5 years and represent the primary opportunity for in-depth equipment inspection. Turnaround 
              planning must balance comprehensive examination with schedule and budget constraints.
            </p>

            <p>
              Pre-turnaround risk assessments prioritize equipment for detailed inspection based on service history, failure modes, and regulatory 
              requirements. Common turnaround inspection activities include:
            </p>
            <ul>
              <li>Tube bundle cleaning and internal inspection of heat exchangers</li>
              <li>Distillation column tray and internals inspection</li>
              <li>Fired heater tube inspection and refractory assessment</li>
              <li>Reactor vessel lining and internals examination</li>
              <li>Pressure relief valve testing and calibration</li>
              <li>Pressure safety valve inspection and functional testing</li>
            </ul>

            <h3>Condition Monitoring & Online Inspection</h3>
            <p>
              Between turnarounds, online condition monitoring programs track equipment health. Technologies include:
            </p>
            <ul>
              <li><strong>Ultrasonic Thickness:</strong> Corrosion monitoring on accessible surfaces</li>
              <li><strong>Thermography:</strong> Heat exchanger fouling detection and thermal anomalies</li>
              <li><strong>Vibration Analysis:</strong> Rotating equipment condition and bearing wear detection</li>
              <li><strong>Oil Analysis:</strong> Bearing and gear wear particle monitoring</li>
              <li><strong>Process Monitoring:</strong> Temperature, pressure, and flow deviation trending</li>
            </ul>

            <h2>API Standards for Oil & Gas Inspection</h2>
            <p>
              The American Petroleum Institute publishes critical standards and recommended practices for inspection and integrity management. 
              Key standards include:
            </p>

            <h3>API 510 - Pressure Vessel Inspection Code</h3>
            <p>
              API 510 governs the inspection, repair, alteration, and rerating of in-service pressure vessels. It covers inspection frequency, 
              method selection, and assessment criteria for defects. Inspectors must be certified to API 510 standard.
            </p>
            <p>
              For more information on API 510 certification and training, <a href="https://atlantisndt.com/training">visit Atlantis NDT training programs</a>.
            </p>

            <h3>API 570 - Piping Inspection Code</h3>
            <p>
              API 570 provides guidance for inspection, repair, and alteration of in-service piping systems. It includes inspection frequency 
              tables, defect assessment criteria, and repair method requirements.
            </p>

            <h3>API 580 - Risk-Based Inspection</h3>
            <p>
              API RP 580 establishes the RBI framework used throughout the industry to optimize inspection programs. It provides methodology 
              for POF and COF assessment and guidance on integration with facility asset management systems.
            </p>
            <p>
              Learn more about implementing RBI programs through <a href="https://atlantisndt.com/consulting">Atlantis NDT consulting services</a>.
            </p>

            <h3>API 653 - Storage Tank Inspection Code</h3>
            <p>
              API 653 governs the inspection, maintenance, and modification of aboveground storage tanks. Inspection requirements address 
              foundation condition, shell plate corrosion, seam integrity, and internal coating systems.
            </p>

            <h2>Digital Technologies Transforming Oil & Gas Inspection</h2>
            <p>
              Modern inspection programs increasingly leverage digital technologies to improve data quality, analysis efficiency, and decision-making:
            </p>

            <h3>Digital Twin Technology</h3>
            <p>
              <a href="https://atlantisndt.com/digital-twins-oil-gas-assets">Digital twins create virtual replicas of assets</a> that integrate 
              inspection data, operational history, and degradation models. These platforms enable:
            </p>
            <ul>
              <li>Predictive maintenance scheduling based on remaining useful life assessment</li>
              <li>Real-time anomaly detection and automated alerting</li>
              <li>Scenario analysis for proposed modifications or increased capacity</li>
              <li>Long-term asset integrity roadmaps</li>
            </ul>

            <p>
              Oil and gas operators increasingly employ digital twins to reduce unplanned downtime, optimize inspection timing, and maximize asset 
              longevity. Integration with ERP and asset management systems creates a unified platform for integrity decision-making.
            </p>

            <h3>Intelligent Reporting Systems</h3>
            <p>
              Advanced inspection reporting software automates data capture, analysis, and trending. Mobile-based inspection documentation during 
              field work eliminates manual transcription errors and accelerates reporting timelines.
            </p>

            <h2>Conclusion</h2>
            <p>
              Successful oil and gas inspection programs integrate regulatory compliance, risk-based prioritization, advanced NDT technologies, 
              and digital asset management. By adopting industry best practices and leveraging modern tools, operators can maintain safe, efficient, 
              and economically optimal assets throughout their service life.
            </p>

            <p>
              For expert guidance on developing or enhancing your oil and gas inspection program, 
              <a href="https://atlantisndt.com/consulting"> contact Atlantis NDT consulting professionals</a> with decades of experience in 
              upstream, midstream, and downstream operations.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/standards/api-inspection-codes" className="card group">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">API Inspection Codes</h3>
              <p className="text-sm text-gray-600">Comprehensive guide to API 510, 570, 653, and 580 standards</p>
            </a>
            <a href="/technology/digital-twins-asset-management" className="card group">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Digital Twin Technology</h3>
              <p className="text-sm text-gray-600">Modern asset integrity management and predictive maintenance</p>
            </a>
            <a href="/case-studies" className="card group">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Case Studies</h3>
              <p className="text-sm text-gray-600">Real-world examples of successful inspection programs</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Expert Support for Your Oil & Gas Operations</h2>
          <p className="text-lg text-gray-700 mb-8">
            Atlantis NDT provides specialized consulting, training, and digital solutions for oil and gas inspection and asset integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://atlantisndt.com/consulting" className="btn-primary">
              Get Consulting Support
            </a>
            <a href="https://atlantisndt.com/training" className="btn-secondary">
              View Training Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
