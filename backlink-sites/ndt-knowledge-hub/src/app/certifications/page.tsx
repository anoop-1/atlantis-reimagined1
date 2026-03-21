import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDT Certifications Guide | Complete Overview of Inspection Certifications',
  description: 'Comprehensive guide to NDT certifications including ASNT Level I, II, III, API 570, API 653, and API 510. Learn requirements, exam details, and career benefits of NDT credentials.',
  keywords: 'NDT certifications, ASNT certification, API 570, API 653, API 510, inspector certification, non-destructive testing certification, certification levels',
  openGraph: {
    title: 'NDT Certifications Guide | Complete Overview',
    description: 'Explore major NDT certifications, requirements, and career opportunities in non-destructive testing.',
    type: 'website',
    url: 'https://ndtknowledgehub.com/certifications',
    images: [
      {
        url: 'https://ndtknowledgehub.com/og-certifications.jpg',
        width: 1200,
        height: 630,
        alt: 'NDT Certifications Guide',
      },
    ],
  },
};

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'ASNT Level III Certification',
      slug: 'asnt-level-iii',
      description: 'The most comprehensive NDT certification for ultrasonic testing, radiography, magnetic particle, and liquid penetrant inspection. Demonstrates advanced expertise in non-destructive testing.',
      difficulty: 'Advanced',
    },
    {
      title: 'API 570 Piping Inspector',
      slug: 'api-570',
      description: 'Specialized certification for piping systems inspection under pressure. Essential for professionals in refining, petrochemical, and power generation industries.',
      difficulty: 'Intermediate',
    },
    {
      title: 'API 653 Tank Inspector',
      slug: 'api-653',
      description: 'Certification for storage tank inspection and assessment. Covers above-ground and underground storage tanks in oil, chemical, and water industries.',
      difficulty: 'Intermediate',
    },
    {
      title: 'API 510 Pressure Vessel Inspector',
      slug: 'api-510',
      description: 'Comprehensive certification for pressure vessel inspection and maintenance. Critical for professionals in manufacturing and petrochemical sectors.',
      difficulty: 'Advanced',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NDT Certifications Guide',
    description: 'Comprehensive overview of major NDT certifications',
    url: 'https://ndtknowledgehub.com/certifications',
    publisher: {
      '@type': 'Organization',
      name: 'NDT Knowledge Hub',
      url: 'https://ndtknowledgehub.com',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-slate-200" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-700 font-medium">Certifications</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            NDT Certifications Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl">
            Non-destructive testing certifications validate your expertise in inspection and quality assurance. This comprehensive guide covers the most recognized and valued certifications in the NDT industry, helping you understand requirements, exam content, and career advancement opportunities.
          </p>
          <p className="text-lg text-slate-700 max-w-3xl">
            Whether you're pursuing your first NDT certification or advancing to specialized inspector credentials, understanding the differences between certifications is crucial for career planning. Each certification pathway offers unique benefits and opens doors to specific industries and career advancement opportunities.
          </p>
        </div>
      </section>

      {/* Certification Overview Section */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding NDT Certifications</h2>
          <p className="text-slate-600 mb-6 text-lg max-w-4xl">
            NDT certifications fall into two main categories: general NDT certifications (ASNT) and equipment/industry-specific certifications (API codes). ASNT certifications validate broad NDT expertise across multiple inspection methods. API certifications focus on specific equipment (piping, tanks, pressure vessels) and industry-specific regulations. Most professionals hold multiple certifications to increase versatility and earning potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">General NDT Certifications (ASNT)</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Advantage:</strong> Broad recognition across industries</li>
                <li><strong>Methods Covered:</strong> UT, RT, MT, PT, ET, Thermal IR</li>
                <li><strong>Career Flexibility:</strong> Qualify for jobs across industries</li>
                <li><strong>Certification Path:</strong> Level I → Level II → Level III</li>
                <li><strong>Maintenance:</strong> Level III requires 5-year renewal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Equipment-Specific Certifications (API)</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Advantage:</strong> Industry-recognized credentials</li>
                <li><strong>Focus:</strong> Piping (570), Tanks (653), Vessels (510)</li>
                <li><strong>Career Growth:</strong> Premium compensation in oil & gas</li>
                <li><strong>Prerequisites:</strong> Relevant experience required</li>
                <li><strong>Maintenance:</strong> Renewal typically every 5-6 years</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Major NDT Certifications
        </h2>
        <p className="text-slate-600 mb-12 text-lg max-w-4xl">
          Explore the most respected non-destructive testing certifications available today. Each certification is designed to validate specific expertise areas within the NDT field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Link
              key={cert.slug}
              href={`/certifications/${cert.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                    {cert.difficulty}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  {cert.description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-sm border border-slate-200 my-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Certification Comparison Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-semibold text-slate-900">Certification</th>
                <th className="px-6 py-3 font-semibold text-slate-900">Industry Focus</th>
                <th className="px-6 py-3 font-semibold text-slate-900">Experience Required</th>
                <th className="px-6 py-3 font-semibold text-slate-900">Exam Duration</th>
                <th className="px-6 py-3 font-semibold text-slate-900">Typical Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">ASNT Level III</td>
                <td className="px-6 py-4 text-slate-600">Multi-method NDT</td>
                <td className="px-6 py-4 text-slate-600">5-7 years in NDT</td>
                <td className="px-6 py-4 text-slate-600">8 hours</td>
                <td className="px-6 py-4 text-slate-600">$600-1200</td>
              </tr>
              <tr className="bg-slate-50 hover:bg-slate-75">
                <td className="px-6 py-4 font-semibold text-slate-900">API 570</td>
                <td className="px-6 py-4 text-slate-600">Piping Systems</td>
                <td className="px-6 py-4 text-slate-600">3-5 years relevant</td>
                <td className="px-6 py-4 text-slate-600">4 hours</td>
                <td className="px-6 py-4 text-slate-600">$300-500</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">API 653</td>
                <td className="px-6 py-4 text-slate-600">Storage Tanks</td>
                <td className="px-6 py-4 text-slate-600">3-5 years relevant</td>
                <td className="px-6 py-4 text-slate-600">4 hours</td>
                <td className="px-6 py-4 text-slate-600">$300-500</td>
              </tr>
              <tr className="bg-slate-50 hover:bg-slate-75">
                <td className="px-6 py-4 font-semibold text-slate-900">API 510</td>
                <td className="px-6 py-4 text-slate-600">Pressure Vessels</td>
                <td className="px-6 py-4 text-slate-600">5-7 years relevant</td>
                <td className="px-6 py-4 text-slate-600">4 hours</td>
                <td className="px-6 py-4 text-slate-600">$300-500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Get Certified */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Why Pursue NDT Certification?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Career Advancement</h3>
            <p className="text-slate-600">
              Certifications open doors to supervisory and management positions in the NDT field, with significantly higher earning potential. Certified professionals command 20-40% higher salaries.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Recognition</h3>
            <p className="text-slate-600">
              Certifications like ASNT and API are internationally recognized, validating your expertise to employers and clients worldwide. Credentials enable global career opportunities.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-8 border border-purple-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Compensation</h3>
            <p className="text-slate-600">
              Certified NDT professionals earn 20-40% more than non-certified counterparts, with salaries varying by specialization and experience. Leadership roles can exceed $180K annually.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white my-8">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Certified?</h2>
        <p className="text-lg mb-8 max-w-3xl">
          Getting certified in NDT requires dedication, study, and practical experience. Start by exploring the certification guides above to understand requirements and exam content for your target credential.
        </p>
        <p className="text-lg mb-8">
          For comprehensive <a href="https://atlantisndt.com/training" rel="noopener" className="font-bold underline hover:opacity-90">training programs, exam preparation resources</a>, and professional consulting services, contact <a href="https://atlantisndt.com/consulting" rel="noopener" className="font-bold underline hover:opacity-90">Atlantis NDT</a> to discuss your certification goals and training needs.
        </p>
        <a href="https://atlantisndt.com/training" rel="noopener" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
        >
          Explore Training Options
        </a>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              What's the difference between ASNT and API certifications?
            </h3>
            <p className="text-slate-600">
              ASNT (American Society for Nondestructive Testing) certifications validate broad NDT expertise across multiple inspection methods. API (American Petroleum Institute) certifications focus on specific equipment and industry applications—API 570 for piping, API 653 for tanks, and API 510 for pressure vessels. Most professionals hold both ASNT and API certifications.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              How long does it take to prepare for certification exams?
            </h3>
            <p className="text-slate-600">
              Most candidates require 3-6 months of dedicated study, depending on their experience level and the certification chosen. ASNT Level III typically requires the most preparation time due to its comprehensive scope. Many professionals use formal training programs to accelerate their preparation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              What's the pass rate for NDT certification exams?
            </h3>
            <p className="text-slate-600">
              Pass rates vary by certification. ASNT Level III typically has a 40-50% first-attempt pass rate due to its difficulty. API certifications generally have higher pass rates of 60-75% with proper preparation. Success requires adequate study time and understanding of technical content.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Do certifications expire and require renewal?
            </h3>
            <p className="text-slate-600">
              ASNT Level III certification is valid for 5 years and requires renewal through re-examination. API certifications typically last 5-6 years and require continuing education or re-examination for renewal. Staying current with your certifications maintains your professional credentials and demonstrates commitment to your field.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Should I get multiple certifications?
            </h3>
            <p className="text-slate-600">
              Yes! Professionals with multiple certifications have significantly greater career flexibility and earning potential. A common strategy is to combine ASNT Level II certifications in multiple methods (UT + RT, for example) with API certifications (570, 653, or 510). This multi-credential approach is highly valued by employers.
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
