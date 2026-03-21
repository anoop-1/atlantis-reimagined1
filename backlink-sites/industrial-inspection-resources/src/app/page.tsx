import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Inspection Resources | NDT Excellence & Asset Integrity',
  description: 'Comprehensive resource hub for industrial inspection, non-destructive testing, and asset integrity management across oil & gas, aerospace, power generation, and manufacturing.',
  keywords: 'industrial inspection, NDT, non-destructive testing, asset integrity, inspection standards',
}

export default function Home() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Industrial Inspection Resources',
            description: 'Comprehensive guides and resources for industrial inspection and non-destructive testing',
            url: 'https://industrial-inspection-resources.com',
            sameAs: ['https://atlantisndt.com'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="gradient-teal py-20 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industrial Inspection Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-3xl mx-auto">
              Master non-destructive testing, asset integrity, and inspection technologies across oil & gas, aerospace, power generation, and manufacturing industries. Learn from industry experts at Atlantis NDT with comprehensive guides, best practices, and actionable strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/industries" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
                Explore Industries
              </a>
              <a href="/standards" className="btn-secondary border-white text-white hover:bg-teal-700">
                View Standards
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Industrial Inspection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">What is Industrial Inspection?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Industrial inspection encompasses the systematic evaluation of equipment, structures, and systems to ensure they operate safely, reliably, and in compliance with applicable standards and regulations. Non-destructive testing (NDT) forms the foundation of modern industrial inspection, enabling organizations to detect defects and assess asset condition without damaging or interrupting critical operations.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From deepwater platforms in the Gulf of Mexico to aircraft maintenance facilities, from nuclear power plants to manufacturing facilities, industrial inspection is essential to safety, reliability, and profitability. Modern inspection programs leverage multiple NDT methods, risk-based strategies, and advanced technologies to optimize decision-making and resource allocation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The global industrial inspection market is projected to exceed $15 billion annually, driven by aging infrastructure, increasing safety regulations, and the need for efficient asset management across critical industries.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Industry Statistics</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>85%</strong> of major industrial facilities operate asset integrity management programs</li>
                <li><strong>$2.2 trillion</strong> annual asset maintenance spending across North America alone</li>
                <li><strong>30-40%</strong> cost reduction possible through risk-based inspection optimization</li>
                <li><strong>92%</strong> of critical equipment failures could be prevented with effective inspection programs</li>
                <li><strong>5-7 years</strong> average service life extension from condition-based maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2>Key Industries</h2>
            <p>Specialized inspection and NDT resources for critical industrial sectors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Oil & Gas', icon: '⛽', href: '/industries/oil-gas-inspection', desc: 'Upstream, midstream, and downstream inspection' },
              { title: 'Aerospace', icon: '✈️', href: '/industries/aerospace-inspection', desc: 'FAA compliance and composite inspection' },
              { title: 'Power Generation', icon: '⚡', href: '/industries/power-generation-inspection', desc: 'Turbines, boilers, and nuclear systems' },
              { title: 'Manufacturing', icon: '🏭', href: '/industries', desc: 'Quality assurance and process inspection' },
              { title: 'Infrastructure', icon: '🌉', href: '/industries', desc: 'Bridges, pipelines, and structural integrity' },
            ].map((industry) => (
              <a
                key={industry.title}
                href={industry.href}
                className="card group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-teal-700 mb-2 group-hover:text-teal-900">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Methods Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Primary NDT Methods</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Industrial inspection relies on six primary non-destructive testing methods, each with specific capabilities for detecting different defect types. The right method depends on the material, application, and defect type being evaluated.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Ultrasonic Testing (UT)</h3>
              <p className="text-gray-700">Uses high-frequency sound waves to detect internal defects, measure thickness, and evaluate material properties. UT is widely used for pipe inspection, vessel assessment, and weld evaluation across all industries.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Radiographic Testing (RT)</h3>
              <p className="text-gray-700">Employs X-rays or gamma rays to visualize internal structure and detect density variations. RT is essential for weld inspection, casting evaluation, and verification of internal component integrity.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Magnetic Particle Testing (MT)</h3>
              <p className="text-gray-700">Detects surface and near-surface defects in ferromagnetic materials using magnetic fields and iron particles. MT is rapid, cost-effective, and widely used in manufacturing and maintenance applications.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Liquid Penetrant Testing (PT)</h3>
              <p className="text-gray-700">Identifies surface-breaking defects through capillary action of colored or fluorescent penetrant liquids. PT is essential for aerospace, automotive, and manufacturing industries.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Eddy Current Testing (ET)</h3>
              <p className="text-gray-700">Detects surface and near-surface defects in conductive materials using electromagnetic induction. ET is ideal for material characterization, hardness verification, and rapid screening applications.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Visual Inspection (VT)</h3>
              <p className="text-gray-700">Direct or aided visual examination identifies surface anomalies, dimensional issues, and structural problems. VT is often the first inspection method and works in combination with advanced NDT techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2>Latest Insights</h2>
            <p>Stay updated with trends in industrial inspection and NDT technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Twins Transform Asset Management',
                excerpt: 'Discover how digital twin technology is revolutionizing preventive maintenance and asset integrity across industries. Virtual replicas enable real-time monitoring and predictive failure analysis.',
                href: '/technology/digital-twins-asset-management',
                category: 'Technology',
              },
              {
                title: 'API Inspection Standards Evolution',
                excerpt: 'Understanding the latest updates to API 510, 570, and 653 standards for pressure vessel and pipeline inspection. Stay compliant with evolving regulatory requirements.',
                href: '/standards/api-inspection-codes',
                category: 'Standards',
              },
              {
                title: 'NADCAP Compliance in Aerospace NDT',
                excerpt: 'Essential guide to National Aerospace and Defense Contractors Accreditation Program requirements and certifications. Learn how aerospace companies maintain rigorous inspection standards.',
                href: '/industries/aerospace-inspection',
                category: 'Industry',
              },
            ].map((insight) => (
              <a
                key={insight.title}
                href={insight.href}
                className="card group h-full"
              >
                <div className="text-teal-600 text-sm font-semibold mb-2">{insight.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <div className="text-teal-600 font-semibold group-hover:text-teal-700">Read More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 gradient-teal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2>Technology & Innovation</h2>
            <p>Modern tools transforming industrial inspection and asset management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Twin Technology',
                description: 'Virtual replicas enabling real-time asset monitoring and predictive maintenance across all industries. Integrate historical inspection data with operational information for comprehensive asset intelligence.',
                href: '/technology/digital-twins-asset-management',
              },
              {
                title: 'NDT Reporting Software',
                description: 'Advanced platforms automating inspection data collection, analysis, and reporting workflows. Mobile inspection tools and cloud-based systems improve efficiency and consistency.',
                href: '/technology/ndt-reporting-software',
              },
              {
                title: 'ERP Solutions for Inspection',
                description: 'Enterprise resource planning systems optimizing inspection operations and resource allocation. Unified platforms improve scheduling, compliance tracking, and customer communication.',
                href: '/technology/erp-for-inspection-companies',
              },
            ].map((tech) => (
              <div key={tech.title} className="bg-white rounded-lg p-8 border border-teal-200">
                <h3 className="text-xl font-bold text-teal-900 mb-3">{tech.title}</h3>
                <p className="text-gray-700 mb-4">{tech.description}</p>
                <a href={tech.href} className="text-teal-600 font-semibold hover:text-teal-700">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk-Based Inspection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Risk-Based Inspection (RBI)</h2>
          <p className="text-lg text-gray-700 mb-6">
            Risk-Based Inspection (RBI) is a systematic approach to optimizing inspection frequency, scope, and methodology based on quantified risk assessment. Rather than inspecting all equipment on fixed intervals, RBI focuses resources on the highest-risk assets, dramatically improving cost-effectiveness while maintaining safety.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-teal-200">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Probability of Failure</h3>
              <p className="text-gray-700">Assess likelihood of equipment failure based on age, degradation rate, operating conditions, and historical performance. Advanced models predict remaining useful life and optimal inspection timing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-teal-200">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Consequence of Failure</h3>
              <p className="text-gray-700">Evaluate impact of failure including safety hazards, environmental risk, financial loss, and operational downtime. Higher consequence assets receive more intensive inspection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-teal-200">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Risk Mitigation</h3>
              <p className="text-gray-700">Develop targeted inspection and maintenance strategies that reduce overall risk to acceptable levels. RBI programs typically reduce inspection costs 20-35% while improving safety outcomes.</p>
            </div>
          </div>

          <p className="text-gray-700">
            For comprehensive guidance on implementing RBI programs, consult with <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">Atlantis NDT consulting professionals</a> who have helped hundreds of organizations optimize their inspection strategies.
          </p>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-700 mb-8">
            This resource hub is powered by expertise from <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:text-teal-700 font-semibold">Atlantis NDT</a>, 
            a leader in non-destructive testing consulting, training, and digital solutions for industrial inspection across all major industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4">
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-gray-700">Industry Professionals Trained</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-700">Fortune 500 Clients</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
              <p className="text-gray-700">Years of Expertise</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="https://atlantisndt.com/training" rel="noopener" className="btn-secondary">
              View Training Programs
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-teal py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Inspection Program?</h2>
          <p className="text-teal-50 mb-8 text-lg">
            Explore comprehensive guides, case studies, and best practices for industrial inspection excellence. Learn from experienced NDT professionals at Atlantis NDT.
          </p>
          <a href="/industries" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
            Start Exploring Resources
          </a>
        </div>
      </section>
    </div>
  )
}
