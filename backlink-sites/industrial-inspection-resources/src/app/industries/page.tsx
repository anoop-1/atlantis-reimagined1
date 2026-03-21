import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Inspection by Industry | Oil & Gas, Aerospace, Power & Manufacturing',
  description: 'Comprehensive guides to non-destructive testing and inspection requirements across oil & gas, aerospace, power generation, and manufacturing industries.',
  keywords: 'industrial inspection, NDT by industry, oil and gas inspection, aerospace NDT, power plant inspection, manufacturing quality',
}

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <span className="text-gray-400">Industries</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">Industrial Inspection by Sector</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Explore non-destructive testing requirements, standards, and best practices for major industrial sectors. Each industry presents unique inspection challenges and regulatory requirements. Learn how organizations across the globe implement industry-specific inspection programs.
          </p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Why Industry-Specific Inspection Matters</h2>
          <p className="text-lg text-gray-700 mb-8">
            Each industry operates under distinct regulatory frameworks, operates different types of equipment, and faces unique failure modes. Effective inspection programs are tailored to industry-specific requirements, equipment characteristics, and risk profiles. A deepwater platform requires different inspection approaches than an aircraft, which differs from a nuclear power plant or manufacturing facility. Industry expertise enables organizations to implement risk-based strategies that balance safety, compliance, and cost-effectiveness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700 mb-4">
                Each industry operates under distinct regulatory frameworks. From API standards in oil and gas to NADCAP requirements in aerospace, understanding and implementing industry-specific requirements is essential for operational compliance and safety. Regulatory bodies establish minimum standards, and best-in-class organizations exceed these baseline requirements.
              </p>
              <p className="text-gray-700">
                <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">Atlantis NDT consulting</a> helps organizations navigate complex regulatory requirements across all major industries.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Asset-Specific Risks</h3>
              <p className="text-gray-700 mb-4">
                Offshore platforms, aircraft, power turbines, and manufacturing lines each present unique inspection challenges. Industry expertise enables targeted inspection strategies that identify critical defects early, preventing catastrophic failures and ensuring safe operations.
              </p>
              <p className="text-gray-700">
                Understanding failure modes and degradation patterns specific to your equipment type is essential for effective predictive maintenance and asset management.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cost Optimization</h3>
              <p className="text-gray-700 mb-4">
                Risk-based inspection (RBI) and condition monitoring programs reduce unnecessary inspections while maintaining safety. Industry knowledge drives efficient allocation of inspection resources and downtime management, typically reducing inspection and maintenance costs by 20-35%.
              </p>
              <p className="text-gray-700">
                Strategic inspection planning aligns with production schedules, optimizes turnaround timing, and minimizes operational interruptions.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Technology Selection</h3>
              <p className="text-gray-700 mb-4">
                Different industries benefit from different NDT methods. Ultrasonic testing, eddy current, thermography, and advanced digital solutions each serve specific applications in different sectors. Advanced techniques like phased array ultrasonic testing (PAUT) and automated scanning provide superior capabilities for critical applications.
              </p>
              <p className="text-gray-700">
                Selecting the right technology for your specific application improves defect detection, reduces inspection time, and enhances data quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12">Industry-Specific Inspection Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Oil & Gas Inspection',
                icon: '⛽',
                description: 'Comprehensive guide to upstream, midstream, and downstream inspection requirements. Covers API standards, risk-based inspection (RBI) programs, piping integrity, pressure vessel assessment, turnaround planning, and corrosion management across exploration, production, refining, and storage operations.',
                href: '/industries/oil-gas-inspection',
                topics: ['Upstream Inspection', 'Pipeline Integrity', 'RBI Programs', 'Turnaround Management'],
              },
              {
                title: 'Aerospace NDT',
                icon: '✈️',
                description: 'Expertise in NADCAP compliance, FAA regulations, composite materials inspection, and aircraft maintenance protocols. Covers qualification requirements, inspection methodologies for critical components, damage tolerance assessment, and continuing airworthiness programs essential for aviation safety.',
                href: '/industries/aerospace-inspection',
                topics: ['NADCAP Certification', 'FAA Compliance', 'Composite Inspection', 'Engine Overhaul'],
              },
              {
                title: 'Power Generation',
                icon: '⚡',
                description: 'Inspection solutions for thermal power plants, turbine systems, boiler tubes, and nuclear facilities. Addresses unique challenges of steam generation, turbine blade inspection, heat exchanger assessment, and regulatory compliance across conventional and nuclear power generation.',
                href: '/industries/power-generation-inspection',
                topics: ['Boiler Inspection', 'Turbine Blades', 'Nuclear Systems', 'Preventive Maintenance'],
              },
              {
                title: 'Manufacturing & Quality',
                icon: '🏭',
                description: 'Industrial quality assurance, process validation, and continuous manufacturing inspection programs. Covers in-process inspection, final product verification, welded component assessment, casting evaluation, and quality control methodologies across diverse manufacturing sectors.',
                href: '/industries',
                topics: ['Quality Assurance', 'Process Validation', 'Material Testing', 'Defect Detection'],
              },
            ].map((industry) => (
              <a
                key={industry.title}
                href={industry.href}
                className="card group hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-teal-700 mb-2 group-hover:text-teal-900">{industry.title}</h3>
                <p className="text-gray-700 mb-4">{industry.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Key Topics:</p>
                  <ul className="flex flex-wrap gap-2">
                    {industry.topics.map((topic) => (
                      <li key={topic} className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-teal-600 font-semibold group-hover:text-teal-700">Read Full Guide →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Methods by Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">NDT Method Selection by Industry</h2>
          
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-teal-900">Industry</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-teal-900">Primary Methods</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-teal-900">Equipment Focus</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-teal-900">Key Standards</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold">Oil & Gas</td>
                  <td className="border border-gray-200 px-4 py-3">UT, RT, MT</td>
                  <td className="border border-gray-200 px-4 py-3">Pipes, Vessels, Valves</td>
                  <td className="border border-gray-200 px-4 py-3">API 510, 570, 653</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold">Aerospace</td>
                  <td className="border border-gray-200 px-4 py-3">PT, UT, ET, VT</td>
                  <td className="border border-gray-200 px-4 py-3">Aircraft, Engines, Composites</td>
                  <td className="border border-gray-200 px-4 py-3">FAA, NADCAP, MIL-STD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold">Power</td>
                  <td className="border border-gray-200 px-4 py-3">UT, RT, VT, MT</td>
                  <td className="border border-gray-200 px-4 py-3">Boilers, Turbines, Heat Exchangers</td>
                  <td className="border border-gray-200 px-4 py-3">ASME Section V, ASTM E494</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold">Manufacturing</td>
                  <td className="border border-gray-200 px-4 py-3">MT, PT, UT, VT</td>
                  <td className="border border-gray-200 px-4 py-3">Welds, Castings, Forgings</td>
                  <td className="border border-gray-200 px-4 py-3">ASME Section VIII, ASTM E709</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700 text-center">
            For expert guidance on method selection and implementation for your industry, <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">consult with Atlantis NDT specialists</a> who understand your specific operational requirements.
          </p>
        </div>
      </section>

      {/* Regulations and Standards Section */}
      <section className="py-20 bg-gradient-teal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Industry Regulations & Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Oil & Gas Regulations</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>API 510:</strong> Pressure Vessel Inspection</li>
                <li><strong>API 570:</strong> Piping Inspection Code</li>
                <li><strong>API 653:</strong> Tank Inspection Code</li>
                <li><strong>API 580:</strong> Risk-Based Inspection</li>
                <li><strong>ASME Section VIII:</strong> Pressure Vessels</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Aerospace Regulations</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>NADCAP:</strong> Accreditation requirements</li>
                <li><strong>FAA:</strong> Federal Aviation Administration standards</li>
                <li><strong>MIL-STD-1916:</strong> Sampling inspection procedures</li>
                <li><strong>AS9100:</strong> Aerospace quality management</li>
                <li><strong>NAS 410:</strong> Personnel qualification standard</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Power Generation</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ASME Section V:</strong> Nondestructive Examination</li>
                <li><strong>ASME Section VIII:</strong> Pressure Vessel Code</li>
                <li><strong>ASTM E494:</strong> Eddy Current Testing</li>
                <li><strong>IEEE 837:</strong> Electrical Equipment Maintenance</li>
                <li><strong>NRC:</strong> Nuclear Regulatory Commission (Nuclear)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ASME Section VIII:</strong> Pressure Vessel Design</li>
                <li><strong>ASTM E709:</strong> Magnetic Particle Testing</li>
                <li><strong>ASTM E1444:</strong> Liquid Penetrant Examination</li>
                <li><strong>ISO 9000:</strong> Quality Management</li>
                <li><strong>ASNT SNT-TC-1A:</strong> Personnel Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career and Training Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">NDT Career Opportunities by Industry</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Industrial inspection and NDT offers excellent career opportunities across all industries. As infrastructure ages and safety regulations evolve, demand for skilled inspection professionals continues to grow. Salaries, advancement opportunities, and work environments vary significantly by industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Oil & Gas Careers</h3>
              <p className="text-gray-700 mb-3">
                High salaries and opportunities for advancement. Level II technicians earn $60-80K; Level III specialists $90-150K+. International travel opportunities. Potential for offshore assignments with premium compensation.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">Explore Oil & Gas Training</a>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Aerospace Careers</h3>
              <p className="text-gray-700 mb-3">
                Premium salaries and high job security. NADCAP certification essential. Level II technicians $65-85K; Level III $100-160K+. Excellent benefits, career stability, and advancement opportunities within aerospace companies.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-emerald-600 hover:text-emerald-700 font-semibold">Aerospace NDT Training</a>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Power Generation Careers</h3>
              <p className="text-gray-700 mb-3">
                Stable employment with utility companies and consulting firms. Salary ranges $55-75K for Level II, $85-130K for Level III. Strong benefits, pension plans, and long-term employment security.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-700 font-semibold">Power Industry Training</a>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Manufacturing Careers</h3>
              <p className="text-gray-700 mb-3">
                Diverse opportunities across numerous industries. Salary ranges $50-70K for Level II, $80-120K for Level III. Growth potential in quality management, engineering, and management roles.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-purple-600 hover:text-purple-700 font-semibold">Manufacturing NDT Training</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-teal-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Expert Guidance from Industry Leaders</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our comprehensive resources are informed by the expertise of <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">Atlantis NDT consulting professionals</a> 
            with decades of experience across all major industrial sectors. Whether you're implementing an inspection program, training personnel, or optimizing operations, industry specialists can guide your strategy.
          </p>
          <a href="https://atlantisndt.com/consulting" rel="noopener" className="btn-primary">
            Get Expert Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
