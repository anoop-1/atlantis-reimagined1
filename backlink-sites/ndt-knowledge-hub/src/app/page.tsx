// satellite-enrich (2026-05-09): FeaturedArticles component generated at
// ./_featured-articles.tsx. Import and place inside this file's JSX to
// surface the new long-form articles on the home page.

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDT Knowledge Hub - Non-Destructive Testing Education & Resources',
  description:
    'Comprehensive educational resources for Non-Destructive Testing (NDT). Learn about UT, RT, MT, PT, ET, VT methods, certifications, career paths, and NDT technology solutions.',
  keywords: [
    'NDT',
    'Non-Destructive Testing',
    'Ultrasonic Testing',
    'Radiography',
    'Magnetic Particle Testing',
    'Penetrant Testing',
    'Eddy Current',
    'Visual Testing',
    'ASNT Level III',
    'NDT Certification',
    'NDT Training',
    'NDT Career',
  ],
  authors: [{ name: 'NDT Knowledge Hub' }],
  openGraph: {
    title: 'NDT Knowledge Hub - Non-Destructive Testing Education & Resources',
    description:
      'Comprehensive educational resources for Non-Destructive Testing (NDT). Learn about UT, RT, MT, PT, ET, VT methods, certifications, and career paths.',
    type: 'website',
    url: 'https://ndtknowledgehub.com',
    locale: 'en_US',
  },
};

const ndtMethods = [
  {
    id: 'ut',
    title: 'Ultrasonic Testing (UT)',
    icon: '🌊',
    description:
      'Ultrasonic testing uses high-frequency sound waves to detect internal defects, measure thickness, and assess material properties. UT is highly effective for detecting cracks, voids, and delamination in metals and composites.',
    applications: 'Pressure vessels, pipelines, aerospace components, welds',
    advantages:
      'High sensitivity to internal defects, can measure thickness, portable equipment',
    limitations:
      'Requires surface contact, operator skill dependent, limited effectiveness in coarse-grained materials',
    href: '/methods/ultrasonic-testing',
  },
  {
    id: 'rt',
    title: 'Radiographic Testing (RT)',
    icon: '📻',
    description:
      'Radiographic testing uses X-rays or gamma rays to create images of internal structures. RT is excellent for detecting voids, inclusions, and density variations. It provides permanent visual records of inspections.',
    applications: 'Welds, castings, aerospace components, security scanning',
    advantages:
      'Provides permanent records, detects density variations, excellent for complex geometries',
    limitations:
      'Safety concerns with radiation, long exposure times, requires special facilities',
    href: '/methods/radiographic-testing',
  },
  {
    id: 'mt',
    title: 'Magnetic Particle Testing (MT)',
    icon: '🧲',
    description:
      'Magnetic particle testing detects surface and near-surface defects by applying magnetic fields and observing particle accumulation. MT is rapid, cost-effective, and ideal for ferromagnetic materials.',
    applications: 'Forgings, castings, shafts, welds, automotive components',
    advantages: 'Fast inspection, cost-effective, sensitive to surface defects, good permanence',
    limitations:
      'Only works on ferromagnetic materials, cannot detect internal defects, operator dependent',
    href: '/methods/magnetic-particle-testing',
  },
  {
    id: 'pt',
    title: 'Penetrant Testing (PT/LPT)',
    icon: '💧',
    description:
      'Penetrant testing (also called liquid penetrant testing) uses capillary action to detect surface-breaking defects. LPT is versatile, cost-effective, and applicable to virtually all non-porous materials.',
    applications: 'Castings, forgings, welds, ceramics, plastics, composites',
    advantages: 'Universal application, excellent sensitivity, permanent records possible',
    limitations:
      'Only detects surface-breaking defects, requires thorough cleaning, can be messy',
    href: '/methods/penetrant-testing',
  },
  {
    id: 'et',
    title: 'Eddy Current Testing (ET)',
    icon: '⚡',
    description:
      'Eddy current testing uses electromagnetic induction to detect defects, measure conductivity, and determine thickness in conductive materials. ET is fast, automated, and ideal for production environments.',
    applications: 'Heat exchanger tubes, aircraft structures, fasteners, surface treatments',
    advantages: 'High speed, automated, detects small defects, measures conductivity',
    limitations:
      'Only works on conductive materials, limited penetration depth, requires calibration',
    href: '/methods/eddy-current-testing',
  },
  {
    id: 'vt',
    title: 'Visual Testing (VT)',
    icon: '👁️',
    description:
      'Visual testing is the most fundamental and widely used NDT method, examining surfaces and visible features directly or with magnification. VT often serves as a screening tool before other NDT methods.',
    applications: 'Welds, surfaces, dimensional checks, coating integrity, general inspection',
    advantages:
      'Simple, cost-effective, requires minimal equipment, immediate results',
    limitations:
      'Only surface defects, requires good lighting, dependent on experience and eyesight',
    href: '/methods/visual-testing',
  },
];

const certifications = [
  {
    id: 'asnt-iii',
    title: 'ASNT Level III',
    icon: '🏆',
    description:
      'The ASNT (American Society for Nondestructive Testing) Level III certification is the highest level, demonstrating comprehensive knowledge, practical expertise, and the ability to establish NDT procedures and interpret results.',
    requirements: '300+ hours of training, 4,000+ hours of experience, written examination',
    importance:
      'Widely recognized globally, required for supervisory roles, demonstrates mastery in specific NDT methods',
    href: '/certifications/asnt-level-iii',
  },
  {
    id: 'api-570',
    title: 'API 570 - Certified Piping Inspector',
    icon: '🏆',
    description:
      'API 570 certification qualifies professionals to inspect in-service piping systems, assess remaining life, and ensure compliance with API standards and regulatory requirements.',
    requirements: 'Piping experience, examination covering codes, standards, and inspection procedures',
    importance:
      'Essential for refinery and chemical plant operations, required for piping integrity management programs',
    href: '/certifications/api-570',
  },
  {
    id: 'api-653',
    title: 'API 653 - Certified Storage Tank Inspector',
    icon: '🏆',
    description:
      'API 653 certification qualifies professionals to inspect storage tanks, evaluate tank integrity, plan and supervise tank repairs, and ensure regulatory compliance.',
    requirements: 'Tank inspection experience, comprehensive examination on tank codes and standards',
    importance:
      'Critical for storage tank operations, required for tank integrity management, ensures safe operations',
    href: '/certifications/api-653',
  },
  {
    id: 'api-510',
    title: 'API 510 - Certified Pressure Vessel Inspector',
    icon: '🏆',
    description:
      'API 510 certification qualifies professionals to inspect in-service pressure vessels, verify compliance with construction codes, and ensure continued safe operation.',
    requirements: 'Pressure vessel experience, comprehensive examination on ASME codes and standards',
    importance:
      'Essential for process facilities, required for pressure vessel integrity programs, validates expertise',
    href: '/certifications/api-510',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NDT Knowledge Hub',
            description:
              'Comprehensive educational resources for Non-Destructive Testing (NDT)',
            url: 'https://ndtknowledgehub.com',
            logo: 'https://ndtknowledgehub.com/logo.png',
            sameAs: ['https://atlantisndt.com'],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              url: 'https://atlantisndt.com/contact',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'NDT Knowledge Hub',
            description:
              'Comprehensive educational resources for Non-Destructive Testing (NDT)',
            url: 'https://ndtknowledgehub.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://ndtknowledgehub.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master Non-Destructive Testing
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive educational resources for NDT methods, certifications, career development,
                and advanced technology solutions. Learn from industry experts and stay current with the
                latest NDT practices and innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#methods"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Explore NDT Methods <span className="ml-2 w-5 h-5" />
                </Link>
                <a href="https://atlantisndt.com/training" rel="noopener" className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Professional Training
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-500 bg-opacity-20 rounded-lg p-8 border-2 border-blue-300">
                <span className="w-32 h-32 text-blue-100 mx-auto" />
                <p className="text-center text-blue-100 mt-4">
                  Trusted by NDT professionals worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDT Methods Section */}
      <section id="methods" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Six Main NDT Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each NDT method has unique capabilities, advantages, and limitations. Understanding when and how
              to apply each method is essential for effective quality assurance and defect detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ndtMethods.map((method) => {
              return (
                <div
                  key={method.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                    <span className="text-4xl block mb-3">{method.icon}</span>
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{method.description}</p>

                    <div className="space-y-3 mb-6 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">Applications:</p>
                        <p className="text-gray-600">{method.applications}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Advantages:</p>
                        <p className="text-gray-600">{method.advantages}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Limitations:</p>
                        <p className="text-gray-600">{method.limitations}</p>
                      </div>
                    </div>

                    <Link
                      href={method.href}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Learn More <span className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-800">
              <span className="font-semibold">Selection Guidance:</span> The choice of NDT method depends on
              material type, defect type, accessibility, and regulatory requirements. For professional guidance on
              selecting the right NDT methods for your specific applications,{' '}
              <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                consult with Atlantis NDT experts
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications validate your expertise and open doors to advanced career
              opportunities. From ASNT Level III to API inspector certifications, we cover the credentials that
              matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <span className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{cert.title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{cert.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                    <p className="text-gray-600">{cert.requirements}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Why It Matters:</p>
                    <p className="text-gray-600">{cert.importance}</p>
                  </div>
                </div>

                <Link
                  href={cert.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Certification Details <span className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Certified Today</h3>
            <p className="text-gray-700 mb-6">
              Advancing your credentials is crucial for career growth in NDT. Whether you're pursuing your first
              certification or climbing the professional ladder, Atlantis NDT offers comprehensive training
              programs designed to prepare you for success.
            </p>
            <a href="https://atlantisndt.com/training" rel="noopener" className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Certification Training Programs
            </a>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Your Career in NDT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NDT professionals are in high demand across aerospace, energy, manufacturing, and infrastructure
              sectors. Discover diverse career paths and advancement opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Career Paths</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Field Inspector</p>
                    <p className="text-gray-600 text-sm">Perform on-site NDT inspections and document results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">NDT Technician</p>
                    <p className="text-gray-600 text-sm">Execute specific NDT methods with precision and accuracy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">NDT Supervisor</p>
                    <p className="text-gray-600 text-sm">Oversee NDT operations, quality, and compliance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Quality Assurance Manager</p>
                    <p className="text-gray-600 text-sm">Manage quality programs and NDT procedures</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">NDT Training Instructor</p>
                    <p className="text-gray-600 text-sm">Develop expertise and mentor the next generation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Industry Sectors</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Aerospace & Defense</p>
                    <p className="text-gray-600 text-sm">Ensure aircraft safety and structural integrity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Oil & Gas</p>
                    <p className="text-gray-600 text-sm">Monitor pipelines, vessels, and equipment integrity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Manufacturing</p>
                    <p className="text-gray-600 text-sm">Quality control and defect detection in production</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Power Generation</p>
                    <p className="text-gray-600 text-sm">Maintain turbines, boilers, and critical equipment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Infrastructure & Construction</p>
                    <p className="text-gray-600 text-sm">Assess bridge integrity, structural components</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your NDT Journey?</h3>
            <p className="mb-6 text-blue-100">
              Whether you're just starting out or looking to advance your career, professional training is the
              foundation for success. Atlantis NDT offers industry-leading training programs that prepare you for
              real-world challenges and certification success.
            </p>
            <a href="https://atlantisndt.com/training" rel="noopener" className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Training Now <span className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Software & Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDT Software & Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern NDT operations rely on advanced software solutions for inspection management, reporting,
              analysis, and digital transformation. Explore cutting-edge technologies that enhance efficiency and
              accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">NDT ERP Solution</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive enterprise resource planning specifically designed for NDT organizations. Streamline
                inspections, manage certifications, automate reporting, and maintain full compliance with industry
                standards.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Inspection scheduling and management
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Digital report generation and storage
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Certification tracking and compliance
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Data analytics and insights
                </p>
              </div>
              <a href="https://atlantisndt.com/ndt-erp-solution" rel="noopener" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn About NDT ERP <span className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border-2 border-indigo-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">NDTConnect Platform</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Cloud-based collaboration platform connecting NDT teams, clients, and equipment. Real-time data
                sharing, inspection coordination, and instant access to reports from anywhere in the world.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span> Real-time inspection tracking
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span> Cloud-based document management
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span> Team collaboration tools
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span> Mobile access and notifications
                </p>
              </div>
              <a
                href="https://ndt-connect.com"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
              >
                Explore NDTConnect <span className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Digital Twins for NDT</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Advanced digital twin technology creates virtual representations of assets for predictive inspection
              planning and analysis. Simulate inspection scenarios, optimize strategies, and reduce downtime with
              data-driven insights.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Asset Monitoring</p>
                <p className="text-sm text-gray-600">Track equipment condition and predict maintenance needs</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Inspection Planning</p>
                <p className="text-sm text-gray-600">Optimize NDT strategies based on virtual models</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Risk Assessment</p>
                <p className="text-sm text-gray-600">Evaluate potential defects before they become critical</p>
              </div>
            </div>
            <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              Learn About Digital Twins <span className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-800">
              <span className="font-semibold">Technology Leadership:</span> Stay ahead of industry trends and
              technological advancements. Explore how modern NDT tools and platforms can transform your operations.
              Visit{' '}
              <a href="https://atlantisndt.com/blog" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Atlantis NDT's blog
              </a>{' '}
              for the latest insights on NDT innovation and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your NDT Operations</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're seeking professional training, expert consulting, or advanced technology solutions,
            Atlantis NDT is your partner for NDT excellence. Leverage decades of industry experience and
            cutting-edge solutions to achieve your operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Consulting Services
            </a>
            <a href="https://atlantisndt.com" rel="noopener" className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Visit Atlantis NDT
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">NDT Methods</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/methods/ultrasonic-testing" className="hover:text-white transition-colors">
                    Ultrasonic Testing
                  </Link>
                </li>
                <li>
                  <Link href="/methods/radiographic-testing" className="hover:text-white transition-colors">
                    Radiographic Testing
                  </Link>
                </li>
                <li>
                  <Link href="/methods/magnetic-particle-testing" className="hover:text-white transition-colors">
                    Magnetic Particle Testing
                  </Link>
                </li>
                <li>
                  <Link href="/methods/penetrant-testing" className="hover:text-white transition-colors">
                    Penetrant Testing
                  </Link>
                </li>
                <li>
                  <Link href="/methods/eddy-current-testing" className="hover:text-white transition-colors">
                    Eddy Current Testing
                  </Link>
                </li>
                <li>
                  <Link href="/methods/visual-testing" className="hover:text-white transition-colors">
                    Visual Testing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Certifications</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/certifications/asnt-level-iii" className="hover:text-white transition-colors">
                    ASNT Level III
                  </Link>
                </li>
                <li>
                  <Link href="/certifications/api-570" className="hover:text-white transition-colors">
                    API 570
                  </Link>
                </li>
                <li>
                  <Link href="/certifications/api-653" className="hover:text-white transition-colors">
                    API 653
                  </Link>
                </li>
                <li>
                  <Link href="/certifications/api-510" className="hover:text-white transition-colors">
                    API 510
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <a href="https://atlantisndt.com/blog" rel="noopener" className="hover:text-white transition-colors"
                  >
                    Blog & Articles
                  </a>
                </li>
                <li>
                  <a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-white transition-colors"
                  >
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Partner</h3>
              <p className="text-sm mb-4">
                NDT Knowledge Hub is powered by{' '}
                <a href="https://atlantisndt.com" rel="noopener" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Atlantis NDT
                </a>
                , your trusted partner for NDT excellence.
              </p>
              <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                Get Expert Consulting
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">
              NDT Knowledge Hub - Comprehensive Educational Resources for Non-Destructive Testing | Powered by
              Atlantis NDT
            </p>
            <p className="text-center text-xs text-gray-500 mt-4">
              © 2026 NDT Knowledge Hub. All rights reserved. | Atlantis NDT:{' '}
              <a href="https://atlantisndt.com" rel="noopener" className="text-gray-400 hover:text-gray-300">
                atlantisndt.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
