import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASME Boiler & Pressure Vessel Code | NDT & Inspection Guide',
  description: 'Complete guide to ASME Boiler and Pressure Vessel Code sections covering design, fabrication, materials, welding, and in-service inspection requirements.',
  keywords: 'ASME code, boiler code, pressure vessel, BPVC, Section VIII, Section IX, welding, NDT requirements',
}

export default function AsmeCodesNdtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ASME Boiler and Pressure Vessel Code Guide',
    description: 'Expert coverage of ASME BPVC sections and NDT requirements',
    author: { '@type': 'Organization', name: 'Industrial Inspection Resources' },
  }

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/standards">Standards</a> / <span className="text-gray-400">ASME Codes</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">ASME Boiler & Pressure Vessel Code</h1>
          <p className="text-xl text-teal-50">Master the American Society of Mechanical Engineers codes governing design, fabrication, materials, welding, and in-service inspection.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>ASME Boiler and Pressure Vessel Code Overview</h2>
            <p>
              The American Society of Mechanical Engineers (ASME) Boiler and Pressure Vessel Code (BPVC) is the most widely recognized and 
              adopted standard for the design, fabrication, inspection, and operation of pressure vessels and boilers throughout North America 
              and internationally.
            </p>

            <h2>ASME Code Structure</h2>
            <p>
              The ASME BPVC comprises multiple sections addressing different equipment types and requirements:
            </p>

            <h3>ASME Section I - Boilers</h3>
            <p>
              Section I covers design, fabrication, inspection, and testing of power and heating boilers. This section applies to boilers 
              operating at pressures greater than 15 psig and temperatures above 250°F.
            </p>

            <p>
              Key requirements include:
            </p>
            <ul>
              <li>Design pressure and temperature criteria</li>
              <li>Material selection and specifications</li>
              <li>Fabrication procedures and controls</li>
              <li>Welding procedure specifications and performance qualifications</li>
              <li>Pressure vessel testing before service</li>
              <li>Certification and documentation requirements</li>
            </ul>

            <p>
              Section I includes specific provisions for various boiler types including fire-tube boilers, water-tube boilers, and specialty 
              designs. Pressure relief systems must comply with Section VIII requirements.
            </p>

            <h3>ASME Section VIII - Pressure Vessels</h3>
            <p>
              Section VIII is divided into three subsections covering different design approaches:
            </p>

            <p>
              <strong>Section VIII Division 1</strong> - The most widely used standard for unfired pressure vessel design, construction, 
              inspection, testing, and certification. Division 1 covers all vessel sizes and operating ranges, with specified minimum wall 
              thickness requirements.
            </p>

            <p>
              <strong>Section VIII Division 2</strong> - Alternative rules for unfired pressure vessels based on advanced design analysis. 
              Division 2 allows reduced minimum wall thickness and higher design stresses through detailed finite element analysis validation.
            </p>

            <p>
              <strong>Section VIII Division 3</strong> - Rules for pressure vessels with high internal pressure or high external pressure. 
              Specialized design and fabrication requirements address unique challenges of extreme pressure vessels.
            </p>

            <p>
              Section VIII requirements encompass:
            </p>
            <ul>
              <li>Allowable stresses and design factors</li>
              <li>Material selection and testing</li>
              <li>Vessel fabrication and construction techniques</li>
              <li>Welding procedures and quality control</li>
              <li>Non-destructive examination requirements</li>
              <li>Pressure testing before service</li>
              <li>Certification and manufacturer documentation</li>
            </ul>

            <h3>ASME Section IX - Welding and Brazing</h3>
            <p>
              Section IX establishes requirements for welding and brazing procedures and the qualifications of welders and brazers performing 
              work on pressure equipment.
            </p>

            <p>
              Key sections include:
            </p>
            <ul>
              <li><strong>Welding Procedure Specifications (WPS):</strong> Detailed procedures for executing welds</li>
              <li><strong>Welder Qualification Tests:</strong> Performance requirements demonstrating welder competency</li>
              <li><strong>Brazer Qualifications:</strong> Similar requirements for brazing operations</li>
              <li><strong>Prequalified Welding Procedures:</strong> Standard procedures approved without qualification testing</li>
              <li><strong>Non-Destructive Examination:</strong> Testing methods and acceptance criteria for welds</li>
            </ul>

            <h3>ASME Section V - Non-Destructive Examination</h3>
            <p>
              Section V provides detailed guidance on NDT methods acceptable for pressure equipment inspection:
            </p>

            <ul>
              <li><strong>Radiographic Examination (RT):</strong> Internal discontinuity detection and flaw evaluation</li>
              <li><strong>Ultrasonic Examination (UT):</strong> Thickness measurement, flaw detection, and sizing</li>
              <li><strong>Magnetic Particle Examination (MPI):</strong> Ferrous material surface crack detection</li>
              <li><strong>Liquid Penetrant Examination (LPT):</strong> Surface flaw detection in ferrous and non-ferrous materials</li>
              <li><strong>Eddy Current Examination (ET):</strong> Surface and near-surface discontinuity detection</li>
              <li><strong>Visual Examination (VT):</strong> Surface condition and dimensional verification</li>
            </ul>

            <p>
              Section V specifies equipment requirements, personnel qualifications, procedure requirements, and acceptance criteria for each 
              NDT method. Inspectors performing ASME-required examinations must meet qualification standards established in Section V.
            </p>

            <h3>ASME Section X - Fiber-Reinforced Plastic Pressure Vessels</h3>
            <p>
              Section X covers design, fabrication, inspection, and testing of fiber-reinforced plastic (FRP) pressure vessels. The growing 
              use of composite materials in pressure equipment creates unique design and inspection requirements addressed by Section X.
            </p>

            <h2>Material Specifications (Section II)</h2>
            <p>
              ASME Section II provides material specifications and standards referenced throughout the code. Materials must meet specified 
              composition, mechanical properties, and testing requirements to ensure code compliance.
            </p>

            <p>
              Part A covers ferrous material specifications while Part B covers non-ferrous materials. Specifications reference ASTM standards 
              with modifications ensuring compatibility with BPVC requirements.
            </p>

            <h2>Code Adoption & Regulatory Requirements</h2>
            <p>
              Most jurisdictions adopt the ASME BPVC by reference into building codes and safety regulations. This makes code compliance 
              mandatory for manufacturers and inspectors in affected jurisdictions.
            </p>

            <p>
              <a href="https://atlantisndt.com/consulting">Atlantis NDT consulting professionals</a> help organizations understand code 
              requirements and implement compliant inspection programs.
            </p>

            <h2>ASME Pressure Relief Systems</h2>
            <p>
              Pressure vessels must have adequate overpressure protection through pressure relief valves. ASME Section VIII provides guidance 
              on pressure relief system design, sizing, and installation requirements.
            </p>

            <h2>Certification & Code Symbol Stamps</h2>
            <p>
              ASME certification programs validate manufacturer competency in code compliance. Manufacturers holding valid certificate of 
              authorization may apply the ASME Code Symbol Stamp (ASME "U" stamp for Section VIII vessels, "UR" stamp for relief valve systems, 
              "S" stamp for boilers, "R" stamp for pressure relief systems) to equipment.
            </p>

            <p>
              Certificate holders must comply with quality assurance programs, inspection requirements, and documentation standards. Periodic 
              audits verify continued compliance.
            </p>

            <h2>In-Service Inspection Requirements</h2>
            <p>
              While ASME BPVC addresses construction code requirements, API standards (510, 570, 653) provide guidance for in-service 
              inspection and maintenance. Many facilities use ASME for construction compliance and API codes for maintenance planning.
            </p>

            <h2>Professional Development</h2>
            <p>
              Engineers and inspectors benefit from formal training on ASME code requirements. <a href="https://atlantisndt.com/training">
              Atlantis NDT training programs</a> cover ASME code applications across design, fabrication, inspection, and in-service maintenance.
            </p>

            <h2>Conclusion</h2>
            <p>
              The ASME Boiler and Pressure Vessel Code represents the pinnacle of pressure equipment safety standards, developed through 
              decades of engineering consensus and industrial experience. Proper code implementation protects people, environment, and 
              equipment while ensuring competitive equipment manufacturing.
            </p>

            <p>
              For expert guidance on ASME code compliance, inspection program development, and training, 
              <a href="https://atlantisndt.com/consulting">contact Atlantis NDT consulting and training specialists</a>.
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
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">API Standards</h3>
              <p className="text-sm text-gray-600">510, 570, 653, and 580 standards</p>
            </a>
            <a href="/industries/power-generation-inspection" className="card group">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Power Generation</h3>
              <p className="text-sm text-gray-600">Boiler and pressure equipment inspection</p>
            </a>
            <a href="/technology" className="card group">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">NDT Technology</h3>
              <p className="text-sm text-gray-600">Modern inspection methods and tools</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">ASME Code Training & Consulting</h2>
          <p className="text-lg text-gray-700 mb-8">
            Master ASME code requirements through expert training and consulting from Atlantis NDT.
          </p>
          <a href="https://atlantisndt.com/consulting" className="btn-primary">
            Get Expert Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
