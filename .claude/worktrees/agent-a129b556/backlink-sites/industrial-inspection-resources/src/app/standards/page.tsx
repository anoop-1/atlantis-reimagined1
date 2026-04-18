import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Inspection Standards | API, ASME, ASTM & NDT Codes',
  description: 'Comprehensive guide to industrial inspection and NDT standards including API, ASME, ASTM, ISO, and industry best practices.',
  keywords: 'inspection standards, API standards, ASME codes, ASTM standards, NDT standards, ISO standards',
}

export default function StandardsPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <span className="text-gray-400">Standards</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">Industrial Inspection Standards</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Comprehensive guides to international and industry standards governing non-destructive testing, inspection methodologies, and quality assurance. Understanding and implementing applicable standards is essential for compliance, safety, and operational excellence.
          </p>
        </div>
      </section>

      {/* Standards Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Why Standards Matter in Industrial Inspection</h2>
          <p className="text-lg text-gray-700 mb-6">
            Industrial inspection standards exist for critical reasons. They establish minimum requirements for safety, define acceptance criteria for equipment integrity, require proper personnel qualification, and mandate documentation and traceability. Standards are developed by organizations with deep industry expertise, incorporate collective best practices, and are regularly updated to reflect technological advances and evolving operational experience.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Most industrial facilities operate under regulatory oversight incorporating standards by reference. Standards like API 510, API 570, ASME Section VIII, and ASTM E709 are not optional guidelines-they are regulatory requirements for many operations. Beyond minimum compliance, industry-leading organizations implement standards as the foundation for developing superior inspection and quality programs that deliver measurable competitive advantages.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded mb-8">
            <h3 className="text-xl font-bold text-teal-900 mb-3">Key Functions of Inspection Standards:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Safety Requirements:</strong> Establish minimum inspection scope and frequency to prevent unsafe failures</li>
              <li><strong>Technical Specifications:</strong> Define acceptable materials, construction methods, and inspection procedures</li>
              <li><strong>Acceptance Criteria:</strong> Specify defect limits and rejection criteria for equipment evaluation</li>
              <li><strong>Personnel Qualification:</strong> Establish training, experience, and certification requirements</li>
              <li><strong>Documentation Requirements:</strong> Mandate inspection records, reports, and archival requirements</li>
              <li><strong>Regulatory Compliance:</strong> Satisfy legal and regulatory obligations across jurisdictions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Standards Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Major Standards & Codes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* API Standards */}
            <div className="card border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">API Standards (American Petroleum Institute)</h3>
              <p className="text-gray-700 mb-6">
                API standards govern inspection and integrity management throughout the oil, gas, and chemical industries. Developed through consensus of industry experts, API standards address the unique challenges of pressure equipment, pipelines, tanks, and complex processing facilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <div>
                    <strong>API 510 - Pressure Vessel Inspection</strong>
                    <p className="text-sm text-gray-600">In-service inspection, repair, and alteration of pressure vessels. Covers boilers, tanks, and process equipment. Specifies inspection frequency, methods, acceptance criteria, and repair requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <div>
                    <strong>API 570 - Piping Inspection</strong>
                    <p className="text-sm text-gray-600">In-service inspection, repair, and alteration of piping systems. Addresses corrosion management, risk-based inspection intervals, and repair procedures for onshore and offshore systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <div>
                    <strong>API 580 - Risk-Based Inspection</strong>
                    <p className="text-sm text-gray-600">Framework for optimizing inspection frequency and methodology using risk-based approaches. Reduces unnecessary inspections while ensuring critical risks are adequately addressed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <div>
                    <strong>API 653 - Storage Tank Inspection</strong>
                    <p className="text-sm text-gray-600">Inspection and maintenance of aboveground storage tanks. Covers internal and external inspection, repair, and assessment of bottom, shell, and roof integrity.</p>
                  </div>
                </li>
              </ul>
              <a href="https://atlantisndt.com/consulting" className="text-teal-600 font-semibold hover:text-teal-700">
                Get API Standards Consultation →
              </a>
            </div>

            {/* ASME Standards */}
            <div className="card border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">ASME Standards (American Society of Mechanical Engineers)</h3>
              <p className="text-gray-700 mb-6">
                ASME Boiler and Pressure Vessel Code defines manufacturing and in-service inspection requirements for pressure-containing equipment. The Code is comprehensive, regularly updated, and recognized internationally. ASME Section V specifically addresses nondestructive examination.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3">•</span>
                  <div>
                    <strong>ASME Section I - Boilers</strong>
                    <p className="text-sm text-gray-600">Power and heating boiler design, materials, fabrication, inspection, and testing requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3">•</span>
                  <div>
                    <strong>ASME Section VIII - Pressure Vessels</strong>
                    <p className="text-sm text-gray-600">Unfired pressure vessel design, materials, fabrication, inspection, and testing. Most widely recognized pressure vessel standard globally.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3">•</span>
                  <div>
                    <strong>ASME Section V - Nondestructive Examination</strong>
                    <p className="text-sm text-gray-600">Comprehensive NDT methods, procedures, qualifications, and acceptance criteria applicable across ASME codes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3">•</span>
                  <div>
                    <strong>ASME Section IX - Welding</strong>
                    <p className="text-sm text-gray-600">Welding procedure specification and performance qualification for pressure equipment fabrication.</p>
                  </div>
                </li>
              </ul>
              <a href="https://atlantisndt.com/consulting" className="text-emerald-600 font-semibold hover:text-emerald-700">
                ASME Standards Expertise →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ASTM Standards */}
            <div className="card border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">ASTM Standards (American Society for Testing and Materials)</h3>
              <p className="text-gray-700 mb-6">
                ASTM International develops standards for materials, testing methods, acceptance criteria, and best practices. ASTM standards are widely used globally and address specific NDT methods and applications.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li><strong>ASTM E494</strong> - Eddy-Current (Electromagnetic) Testing methods and acceptance criteria</li>
                <li><strong>ASTM E709</strong> - Magnetic Particle Inspection of ferromagnetic materials</li>
                <li><strong>ASTM E1444</strong> - Liquid Penetrant Examination procedures and acceptance</li>
                <li><strong>ASTM E1316</strong> - Comprehensive terminology for all NDT methods</li>
                <li><strong>ASTM E2375</strong> - Ultrasonic Thickness Measurement</li>
                <li><strong>ASTM E2580</strong> - Phased Array Ultrasonic Testing</li>
              </ul>
            </div>

            {/* ISO Standards */}
            <div className="card border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">ISO Standards (International Organization for Standardization)</h3>
              <p className="text-gray-700 mb-6">
                ISO standards establish international requirements for quality, safety, environmental management, and technical practices. ISO standards ensure consistency and acceptance of inspection practices across borders and industries.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li><strong>ISO 9000</strong> - Quality Management Systems principles and terminology</li>
                <li><strong>ISO 14001</strong> - Environmental Management Systems requirements</li>
                <li><strong>ISO 45001</strong> - Occupational Health & Safety Management Systems</li>
                <li><strong>ISO 12944</strong> - Protective Paint Systems for steel surfaces</li>
                <li><strong>ISO/IEC 17025</strong> - Laboratory competence and accreditation requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NDT Method Standards Section */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">NDT Method Standards</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Each NDT method is governed by specific standards that define procedures, equipment requirements, acceptance criteria, and personnel qualifications. Understanding these standards is essential for proper application of each method.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                method: 'Ultrasonic Testing', 
                standards: 'ASTM E494, ISO 22825, ASME Section V, AWS D1.1',
                description: 'Sound wave propagation through materials for flaw detection and thickness measurement'
              },
              { 
                method: 'Eddy Current', 
                standards: 'ASTM E494, ISO 15549, ASME Section V',
                description: 'Electromagnetic induction techniques for surface and near-surface defect detection'
              },
              { 
                method: 'Magnetic Particle', 
                standards: 'ASTM E709, ISO 9934, ASME Section V',
                description: 'Magnetic field and iron particle methods for ferromagnetic material inspection'
              },
              { 
                method: 'Liquid Penetrant', 
                standards: 'ASTM E1444, ISO 3452, ASME Section V',
                description: 'Capillary penetration techniques for surface-breaking defect detection'
              },
              { 
                method: 'Radiography', 
                standards: 'ASTM E1025, ISO 11699, ASME Section V',
                description: 'X-ray and gamma ray imaging for internal structure visualization'
              },
              { 
                method: 'Visual Inspection', 
                standards: 'ASTM E883, ISO 9624, ASME Section V',
                description: 'Direct observation and aided visual examination of surfaces'
              },
            ].map((item) => (
              <div key={item.method} className="bg-white p-6 rounded-lg border border-teal-200">
                <h3 className="text-lg font-bold text-teal-700 mb-2">{item.method}</h3>
                <p className="text-sm text-gray-600 mb-3"><strong>Standards:</strong> {item.standards}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8">Standards Compliance & Implementation</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Regulatory Requirements</h3>
              <p className="text-gray-700">
                Most industrial facilities operate under regulatory oversight requiring compliance with applicable standards. Standards are often incorporated by reference in building codes, safety regulations, and industry-specific requirements. Failure to comply with applicable standards can result in operational shutdowns, fines, and legal liability. Regulatory agencies increasingly conduct audits and inspections to verify compliance.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-3">Personnel Qualification</h3>
              <p className="text-gray-700">
                Standards establish personnel qualification requirements including ASNT SNT-TC-1A certification, NADCAP accreditation, and industry-specific credentials. Ongoing education and recertification maintain current knowledge and competency. Many organizations require Level II or Level III certification for inspection personnel, and standards define minimum training hours, practical experience requirements, and examination procedures.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Procedure Development</h3>
              <p className="text-gray-700">
                Standards provide frameworks for developing inspection procedures, acceptance criteria, and reporting requirements. Organizations develop detailed procedures implementing standard requirements for specific equipment and applications. Well-developed procedures ensure consistency, improve efficiency, and provide clear guidance to inspection personnel. Procedures should reference applicable standards and define specific acceptance criteria appropriate to your equipment and operations.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Equipment & Calibration</h3>
              <p className="text-gray-700">
                Standards specify equipment requirements and mandatory calibration intervals. Regular maintenance and calibration ensure measurement accuracy and procedure compliance. Documentation of calibration activities is essential for demonstrating standards compliance during regulatory audits or third-party assessments.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Documentation & Records</h3>
              <p className="text-gray-700">
                Standards require comprehensive documentation of inspection findings, personnel qualifications, equipment calibration, and procedure compliance. Records must be maintained for extended periods (often 10+ years). Effective documentation systems support compliance, enable trend analysis, facilitate audits, and provide historical reference for decision-making. Digital systems increasingly replace paper records while improving accessibility and searchability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Evolution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Standards Evolution & Updates</h2>
          <p className="text-lg text-gray-700 mb-6">
            Standards are not static documents. Organizations like API, ASME, ASTM, and ISO regularly update standards to incorporate new technology, reflect operational experience, address safety concerns, and improve clarity. Organizations must stay current with standards updates to maintain compliance and take advantage of improved practices.
          </p>

          <div className="bg-white p-8 rounded-lg border border-teal-200">
            <h3 className="text-xl font-bold text-teal-700 mb-4">Recent Notable Updates:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>API 580 (2020):</strong> Enhanced risk-based inspection framework with improved methodology for probability and consequence assessment</li>
              <li><strong>ASME Section V (2021):</strong> Expanded guidance on advanced NDT methods including phased array and full matrix capture</li>
              <li><strong>ASTM E2375 (2019):</strong> Updated ultrasonic thickness measurement standards incorporating digital equipment advances</li>
              <li><strong>ISO/IEC 17025 (2017):</strong> Revised laboratory competence requirements reflecting modern quality management practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="bg-gradient-teal py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Guidance on Standards Compliance</h2>
          <p className="text-lg text-teal-50 mb-8">
            <a href="https://atlantisndt.com/consulting" className="text-white font-semibold hover:text-teal-100">Atlantis NDT provides comprehensive consulting services</a> to help organizations implement industry standards through consulting, training, and certification programs. Our expertise spans all major standards and industry applications. Whether you're implementing a new inspection program, updating procedures to reflect standard changes, or preparing for regulatory audits, our specialists can provide guidance tailored to your operations.
          </p>
          <a href="https://atlantisndt.com/consulting" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
