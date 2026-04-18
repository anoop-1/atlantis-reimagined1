import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDT Career Guides & Professional Development Resources',
  description: 'Comprehensive career guides for nondestructive testing professionals. Learn about NDT career paths, salary expectations, certifications, industry overview, and professional development opportunities.',
  keywords: 'NDT career, career path, certification, professional development, salary guide, NDT training',
};

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NDT Career Guides',
    description: 'Comprehensive career guides and professional development resources for NDT professionals',
    url: 'https://backlinks.atlantisndt.com/guides',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumbs */}
        <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">Career Guides</span>
        </nav>

        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NDT Career Guides & Professional Development
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive resources for building and advancing your career in nondestructive testing. Learn about industry opportunities, compensation, and career progression.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Career Planning
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Certification
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Professional Growth
              </span>
            </div>
          </header>

          {/* Industry Overview */}
          <div className="prose prose-custom max-w-none mb-12">
            <h2>The NDT Industry: Growth & Opportunity</h2>
            <p>
              The nondestructive testing industry is experiencing strong growth driven by aging infrastructure, increasing regulatory requirements, technological advancement, and expanding global operations. The global NDT market exceeds $10 billion annually and grows 5-7% yearly. This growth creates excellent career opportunities for skilled professionals at all levels.
            </p>

            <p>
              Industries requiring NDT services include oil & gas (largest market), aerospace, power generation, manufacturing, automotive, pharmaceuticals, construction, and infrastructure. Each industry offers distinct career paths, compensation levels, and advancement opportunities. Some professionals specialize in specific industries or methods; others develop broad expertise across multiple sectors.
            </p>

            <h2>Main Content</h2>
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {/* Career Path Guide */}
            <Link href="/guides/ndt-career-path" className="group">
              <div className="h-full p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Complete NDT Career Path Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  From entry-level technician to Level III certification. Learn about education requirements, certification roadmap, skill development at each level, and advancement strategies to senior positions.
                </p>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Read the guide →
                </span>
              </div>
            </Link>

            {/* Salary Guide */}
            <Link href="/guides/ndt-salary-guide" className="group">
              <div className="h-full p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">
                  NDT Salary Guide by Level & Method
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive salary data by certification level, inspection method, region, and industry. Understand how experience, specialization, and location impact earning potential.
                </p>
                <span className="text-green-600 font-semibold group-hover:underline">
                  View salary data →
                </span>
              </div>
            </Link>
          </div>

          {/* Professional Development Opportunities */}
          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Development Opportunities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Training and Education</h3>
                <p className="text-gray-700 mb-3">
                  Formal training programs prepare you for NDT certification. Discover <a href="https://atlantisndt.com/training" className="text-blue-600 hover:text-blue-800 font-semibold">comprehensive training programs</a> that build the knowledge and skills required for each certification level. Most organizations offer classroom instruction combined with hands-on practical experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Standards and Best Practices</h3>
                <p className="text-gray-700 mb-3">
                  Understanding the standards that govern NDT practice is essential for professional competence. Standards like ASTM International, API Recommended Practice, and ASME Section VIII define acceptable practice and provide technical guidance for specific applications. Staying current with standard updates ensures your knowledge remains relevant.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certifications and Qualifications</h3>
                <p className="text-gray-700 mb-3">
                  ASNT certification is the primary professional credential in the NDT industry. The certification hierarchy—Level I, Level II, and Level III—reflects increasing expertise and responsibility. Specialized certifications in specific techniques (ultrasonic testing, radiography, magnetic particle testing, penetrant testing, eddy current testing) demonstrate expertise in particular methods.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuing Professional Development</h3>
                <p className="text-gray-700 mb-3">
                  Professional growth continues throughout your career. Industry conferences, technical seminars, manufacturer training programs, and peer learning all contribute to staying current with evolving NDT technology and best practices. Many organizations require continuing education for certification maintenance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Specialization Opportunities</h3>
                <p className="text-gray-700 mb-3">
                  Consider specializing in high-demand areas like phased array ultrasonic testing, digital twin technology, or specific industries like aerospace NADCAP or oil & gas RBI programs. Specialized expertise commands higher compensation and creates competitive advantages.
                </p>
              </div>
            </div>
          </div>

          {/* Career Progression Overview */}
          <div className="bg-white p-8 border border-gray-200 rounded-lg my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">NDT Career Progression Overview</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Level I Technician (Entry Level)</h3>
                  <p className="text-gray-700">
                    Perform NDT inspections under supervision. Require 30 hours classroom training and 200 hours on-the-job training. Entry point for most NDT careers. Typical salary: $45-55K annually.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Level II Technician (Intermediate)</h3>
                  <p className="text-gray-700">
                    Conduct and interpret NDT inspections. Require 2 years experience (can be shortened with formal education). Supervise Level I technicians and carry greater responsibility. Typical salary: $60-85K annually.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Level III Technician (Expert)</h3>
                  <p className="text-gray-700">
                    Develop procedures, train technicians, and make final interpretation decisions. Require 5 years experience with 2 years at Level II. Highest certification in NDT. Typical salary: $90-150K+ annually.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Engineer / Management Positions</h3>
                  <p className="text-gray-700">
                    Many Level III technicians advance to engineering or management roles in NDT companies, working as quality managers, NDT supervisors, or technical specialists. Typical salary: $110-180K+ annually for senior positions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-16 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Advance Your NDT Career?</h3>
            <p className="text-gray-700 mb-6">
              Explore comprehensive training programs designed to prepare you for certification and career advancement. <a href="https://atlantisndt.com/training" className="text-blue-600 hover:text-blue-800 font-semibold">Atlantis NDT training programs</a> combine classroom instruction with hands-on practical experience to ensure your success.
            </p>
            <a 
              href="https://atlantisndt.com/training"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Explore Training Programs
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
