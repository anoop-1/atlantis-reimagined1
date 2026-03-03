import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Transformation for Asset Integrity | Asset Integrity Hub',
  description: 'Transform your NDT and inspection operations with digital twins, ERP solutions, intelligent reporting software, and modern asset management technology. Learn digital transformation strategies.',
  keywords: 'digital twins, ERP software, NDT software, asset integrity, digital transformation, intelligent reporting',
}

export default function Home() {
  const features = [
    {
      title: 'Digital Twins',
      description: 'Create virtual replicas of physical assets to monitor condition, predict failures, and optimize maintenance schedules in real-time. Digital twins integrate inspection data with operational information for comprehensive asset intelligence.',
      link: '/digital-twins',
    },
    {
      title: 'ERP Solutions',
      description: 'Streamline inspection workflows, scheduling, compliance tracking, and reporting with NDT-specialized enterprise software. Unified platforms improve resource allocation and decision-making.',
      link: '/erp-solutions',
    },
    {
      title: 'Reporting Software',
      description: 'Generate professional, standardized inspection reports automatically with integrated data collection and analysis tools. Mobile inspection apps streamline field data capture and office processing.',
      link: '/ndt-software/reporting-tools',
    },
    {
      title: 'NDTConnect Platform',
      description: 'Connect inspection professionals with companies worldwide using a modern platform designed specifically for the NDT industry. Streamline talent management and service delivery.',
      link: '/ndt-software/ndtconnect-review',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="gradient-text mb-6 text-4xl md:text-5xl font-bold">
              Digital Transformation for Asset Integrity Management
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Modernize your inspection operations with digital twins, intelligent ERP systems, and advanced reporting software. Learn how leading NDT companies are accelerating their digital journey and achieving measurable improvements in efficiency, cost, and safety.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/digital-twins" className="btn">
                Explore Digital Twins
              </a>
              <a href="/erp-solutions" className="btn-outline">
                Learn About ERP
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-900">Core Technology Areas for Asset Integrity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 mb-6">{feature.description}</p>
              <a href={feature.link} className="text-primary-600 hover:text-primary-700 font-semibold inline-block">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section 1: Why Digital Transformation */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Digital Transformation Matters for Asset Integrity</h2>
          <p className="text-lg text-gray-700 mb-6">
            The NDT and inspection industry is undergoing significant transformation. Asset owners and operators increasingly demand faster inspections, more accurate data, better reporting, and predictive insights. Companies that embrace digital tools gain competitive advantages through improved efficiency, reduced risk, and superior customer relationships. Digital transformation isn't optional-it's essential for remaining competitive.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Digital transformation doesn't happen overnight. It requires careful planning, the right technology partners, and clear understanding of your specific business challenges. This hub provides comprehensive guidance and resources you need to make informed decisions about digital twins, ERP systems, and modern software solutions for your inspection business.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Four Pillars of Modern Asset Integrity Management</h3>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li><strong>Data Collection:</strong> Gathering accurate, real-time inspection data from the field using modern tools and sensors. Mobile apps and wireless data transmission enable real-time visibility.</li>
            <li><strong>Digital Representation:</strong> Creating virtual models of assets (digital twins) that integrate all data and enable simulation. Digital twins become the central hub for asset information.</li>
            <li><strong>Intelligent Systems:</strong> Using ERP and specialized software to manage workflows, compliance, and reporting at scale. Automation reduces manual effort and improves consistency.</li>
            <li><strong>Predictive Intelligence:</strong> Applying analytics and AI to identify failure patterns, optimize maintenance, and reduce downtime. Machine learning models improve over time with data.</li>
          </ol>
        </div>
      </div>

      {/* Content Section 2: Getting Started */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Digital Transformation</h2>
        <p className="text-lg text-gray-700 mb-6">
          Many inspection companies wonder where to begin their digital journey. The answer depends on your current state, business goals, and budget. However, most organizations follow a similar progression that builds capabilities systematically over time.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Assessment and Strategy</h3>
        <p className="text-gray-700 mb-6">
          Start by understanding your current technology landscape. Are you still relying on spreadsheets? Do you have fragmented systems that don't communicate? What are your biggest pain points-inefficient workflows, inconsistent reporting, difficulty tracking compliance, or inability to provide clients with real-time data?
        </p>
        <p className="text-gray-700 mb-8">
          Read our guide on <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">why NDT companies need specialized ERP solutions</a> to understand how enterprise systems address these challenges and deliver measurable ROI.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Technology Implementation</h3>
        <p className="text-gray-700 mb-4">
          Based on your assessment, you'll typically implement solutions in this order:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li>Start with a <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">robust ERP system</a> to consolidate operations and establish data governance</li>
          <li>Implement <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">intelligent reporting software</a> to automate report generation and improve consistency</li>
          <li>Deploy <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">NDTConnect platform</a> to improve talent management and service delivery</li>
          <li>Develop <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">digital twins</a> to enable predictive maintenance and asset optimization</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Optimization and Analytics</h3>
        <p className="text-gray-700">
          Once your foundational systems are in place, you can build advanced capabilities including predictive analytics, real-time monitoring dashboards, and integration with IoT sensors. Learn more about <a href="https://atlantisndt.com/consulting" className="text-primary-600 hover:text-primary-700 font-semibold">digital twin reporting capabilities</a> in the context of a complete technology strategy.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Ready to Transform Your Asset Integrity Operations?</h2>
          <p className="text-lg mb-8 text-primary-100">
            Explore our comprehensive guides, case studies, and resources to understand how digital technology can improve your inspection business. <a href="https://atlantisndt.com/consulting" className="text-white font-semibold underline hover:opacity-90">Atlantis NDT consulting</a> helps organizations implement digital transformation strategies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/digital-twins" className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block no-underline">
              Digital Twins Guide
            </a>
            <a href="/erp-solutions" className="border-2 border-white text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-block no-underline">
              ERP Implementation
            </a>
            <a href="https://atlantisndt.com/consulting" className="border-2 border-white text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-block no-underline">
              Get Expert Guidance
            </a>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Asset Integrity Digital Hub',
            'description': 'Digital transformation resource for NDT and inspection companies',
            'url': 'https://asset-integrity-hub.com',
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://asset-integrity-hub.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  )
}
