import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Inspection Technology | Digital Twins, ERP & NDT Software',
  description: 'Guide to modern technologies transforming industrial inspection including digital twins, NDT reporting software, ERP solutions, and asset management platforms.',
  keywords: 'digital twins, NDT software, ERP for inspection, asset management, industrial technology',
}

export default function TechnologyPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <span className="text-gray-400">Technology</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">Inspection Technology & Innovation</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Discover modern technologies transforming industrial inspection, from digital twin asset replicas to intelligent reporting systems and enterprise resource planning solutions. Learn how leading organizations leverage technology to improve efficiency, reduce costs, and enhance decision-making.
          </p>
        </div>
      </section>

      {/* Technology Adoption Trends Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Digital Transformation in Industrial Inspection</h2>
          <p className="text-lg text-gray-700 mb-6">
            The industrial inspection industry is undergoing significant digital transformation. Traditional paper-based inspection practices are being replaced by mobile data collection, cloud-based analysis systems, and intelligent decision support platforms. This transformation is driven by multiple factors: increasing regulatory requirements, rising labor costs, aging infrastructure demanding more intensive inspection, advancement in sensor and computing technology, and growing expectation for real-time data and transparency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Key Technology Trends:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Mobile Inspection Tools:</strong> Field personnel capture data directly into mobile devices, eliminating paper and transcription errors</li>
                <li><strong>Cloud-Based Systems:</strong> Inspection data accessible in real-time to management, enabling rapid decision-making</li>
                <li><strong>AI & Machine Learning:</strong> Algorithms analyze inspection patterns to improve defect detection and predict failures</li>
                <li><strong>IoT Sensors:</strong> Continuous monitoring of critical assets provides real-time condition data</li>
                <li><strong>Digital Twins:</strong> Virtual replicas of physical assets integrate all data for comprehensive condition assessment</li>
                <li><strong>Advanced Analytics:</strong> Predictive models optimize inspection timing and maintenance planning</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Business Benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Operational Efficiency:</strong> 20-30% reduction in inspection time through automation and optimized workflows</li>
                <li><strong>Cost Reduction:</strong> 15-35% lower maintenance and inspection costs through risk-based optimization</li>
                <li><strong>Improved Safety:</strong> Early defect detection prevents catastrophic failures and safety incidents</li>
                <li><strong>Better Compliance:</strong> Automated documentation ensures complete and consistent regulatory compliance</li>
                <li><strong>Competitive Advantage:</strong> Superior asset intelligence enables faster decisions and superior customer service</li>
                <li><strong>Extended Asset Life:</strong> Predictive maintenance extends equipment life by 5-10 years</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            Organizations implementing comprehensive technology strategies report average ROI of 18-24 months, with larger organizations achieving faster returns. Beyond financial benefits, technology adoption improves data quality, enables proactive maintenance, and positions organizations for long-term competitiveness in an increasingly digital industry landscape.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Core Technology Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Twin Technology',
                icon: '🔷',
                description: 'Virtual asset replicas integrating real-time data, degradation models, and operational history for predictive maintenance and intelligent decision-making. Digital twins enable simulation, scenario analysis, and optimization of maintenance strategies.',
                href: '/technology/digital-twins-asset-management',
                benefits: ['Predictive maintenance', 'RUL assessment', 'Scenario analysis', 'Real-time monitoring'],
              },
              {
                title: 'NDT Reporting Software',
                icon: '📱',
                description: 'Intelligent platforms automating inspection data capture, analysis, trending, and report generation for efficiency and accuracy. Mobile inspection apps and cloud integration streamline workflows and improve data consistency.',
                href: '/technology/ndt-reporting-software',
                benefits: ['Mobile inspection', 'Automated analysis', 'Real-time trending', 'Compliance reporting'],
              },
              {
                title: 'ERP Solutions',
                icon: '⚙️',
                description: 'Enterprise systems integrating inspection management, asset management, maintenance scheduling, and business operations. Unified platforms improve resource allocation, enhance visibility, and enable data-driven decision-making.',
                href: '/technology/erp-for-inspection-companies',
                benefits: ['Unified platform', 'Resource optimization', 'Maintenance scheduling', 'Financial integration'],
              },
            ].map((tech) => (
              <a
                key={tech.title}
                href={tech.href}
                className="card group border-l-4 border-teal-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-teal-700 mb-3 group-hover:text-teal-900">{tech.title}</h3>
                <p className="text-gray-700 mb-4">{tech.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Key Benefits:</p>
                  <ul className="space-y-1">
                    {tech.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-gray-600">✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-teal-600 font-semibold group-hover:text-teal-700">Learn More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced NDT Methods */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Advanced NDT Methods & Technologies</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Beyond traditional NDT methods, advanced technologies are revolutionizing industrial inspection. These techniques provide superior capabilities for complex geometries, challenging materials, and critical applications where defect detection is paramount.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                method: 'Phased Array Ultrasonic Testing (PAUT)',
                description: 'Advanced ultrasonic technique using multiple transducers for electronic beam steering, enabling rapid complex geometry inspection with superior imaging. PAUT eliminates need for manual angle adjustment and provides full 3D volumetric data.',
              },
              {
                method: 'Automated Ultrasonic Scanning',
                description: 'Robotic and automated systems provide consistent, repeatable scans of large structures with full 3D volumetric imaging and quantitative defect analysis. Automation reduces inspection time 30-50% while improving consistency.',
              },
              {
                method: 'Advanced Thermography',
                description: 'Infrared thermal imaging detects heat anomalies indicating subsurface defects, delamination, and equipment degradation in real-time without contact. IR technology enables rapid screening of large surface areas.',
              },
              {
                method: 'Guided Wave Ultrasonics',
                description: 'Long-distance screening technique detecting defects in insulated pipes and hard-to-access components with minimal surface preparation. GWT enables inspection of systems otherwise difficult or impossible to evaluate.',
              },
              {
                method: 'Structural Health Monitoring',
                description: 'Integrated sensor networks provide continuous monitoring of critical structures with automated anomaly detection and alert systems. SHM enables predictive maintenance and early warning of developing problems.',
              },
              {
                method: 'Artificial Intelligence & Machine Learning',
                description: 'AI algorithms analyze inspection data patterns, improve defect detection accuracy, and support predictive maintenance decision-making. ML models learn from historical data to identify failure patterns and optimize inspection strategies.',
              },
            ].map((item) => (
              <div key={item.method} className="bg-white p-8 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-teal-700 mb-3">{item.method}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8">Technology Integration Benefits</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Data-Driven Decision Making</h3>
                <p className="text-gray-700">
                  Integrated systems provide comprehensive asset data enabling intelligent prioritization of maintenance activities and strategic asset management decisions. Real-time dashboards and analytics empower managers to make informed decisions quickly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Operational Efficiency</h3>
                <p className="text-gray-700">
                  Automation of data capture, analysis, and reporting reduces manual effort, accelerates decision cycles, and optimizes resource allocation. Mobile tools enable field personnel to work more efficiently without returning to offices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Risk Mitigation</h3>
                <p className="text-gray-700">
                  Advanced monitoring and predictive capabilities identify emerging problems early, enabling proactive intervention before failures occur. Early warning systems reduce safety risks and prevent costly unplanned shutdowns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl">💰</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Cost Optimization</h3>
                <p className="text-gray-700">
                  Risk-based inspection and predictive maintenance reduce unnecessary downtime, extend equipment life, and optimize capital expenditures. Technology investment typically pays for itself in 18-24 months through operational savings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Integrated data systems enable trend analysis, root cause analysis, and continuous refinement of inspection and maintenance strategies. Organizations can systematically improve their programs over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Technology Implementation Roadmap</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-700 mb-2">Phase 1: Assessment & Planning</h3>
              <p className="text-gray-700">Evaluate current processes, identify improvement opportunities, and develop technology adoption strategy. Involve key stakeholders and establish clear success metrics.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-700 mb-2">Phase 2: Pilot Implementation</h3>
              <p className="text-gray-700">Deploy technology on pilot projects, train staff, and validate benefits before full-scale rollout. Gather feedback from early adopters and refine implementation approach.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-700 mb-2">Phase 3: Full Integration</h3>
              <p className="text-gray-700">Scale successful pilots across operations, integrate with existing systems, and optimize workflows. Provide comprehensive training and ongoing support to all users.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-700 mb-2">Phase 4: Continuous Optimization</h3>
              <p className="text-gray-700">Monitor performance, refine configurations, and leverage advanced capabilities for ongoing improvement. Regularly assess ROI and plan for emerging technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="bg-gradient-teal py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Technology Consulting & Implementation</h2>
          <p className="text-lg text-teal-50 mb-8">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-white font-semibold hover:text-teal-100">Atlantis NDT provides strategic guidance</a> on technology selection, implementation planning, and change management to optimize your inspection and asset management programs. Our consultants have experience implementing digital twins, ERP systems, and advanced NDT technologies across multiple industries.
          </p>
          <a href="https://atlantisndt.com/consulting" rel="noopener" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
            Schedule Technology Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
