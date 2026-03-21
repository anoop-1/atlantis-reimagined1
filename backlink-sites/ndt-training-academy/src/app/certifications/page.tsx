import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Certification Roadmap | ASNT & API Certifications Overview',
  description: 'Complete certification roadmap showing Level I, II, and III progression paths for ASNT and API certifications. Visual guide to NDT certification requirements and career paths.',
  keywords: 'NDT certification, ASNT certification, API certification, certification levels, certification roadmap',
  openGraph: {
    title: 'NDT Certification Roadmap',
    description: 'Complete guide to NDT certification paths and progression.',
  },
}

export default function CertificationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NDT Certification Roadmap",
        "description": "Complete guide to NDT certifications and progression paths with detailed requirements",
        "author": { "@type": "Organization", "name": "NDT Training Academy" }
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Certifications</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NDT Certification Roadmap</h1>
          <p className="text-xl text-amber-50">
            Visual guide to NDT certifications from entry-level to expert. Understand requirements, progression paths, and career opportunities for each certification level.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Certification Progression Path</h2>

          {/* Certification Flow */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-lg p-8 border border-slate-200 mb-12">
            <div className="space-y-8">
              {/* Level I */}
              <div className="flex items-center gap-4">
                <div className="w-32 bg-blue-500 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold">I</div>
                  <div className="text-sm font-semibold mt-2">Entry Level</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Level I - Entry Technician</h3>
                  <p className="text-slate-700 mb-3"><strong>Training: </strong>40-80 hours per method | <strong>Operation: </strong>Supervised only</p>
                  <p className="text-sm text-slate-600">Can perform inspections under direct supervision. Typical entry point to NDT career. Requires fundamental knowledge of NDT principles and equipment operation.</p>
                  <p className="text-sm text-slate-600 mt-2"><strong>Typical Salary: </strong>$45-55K annually</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-4">
                <div className="text-4xl text-amber-500">↓</div>
              </div>

              {/* Level II */}
              <div className="flex items-center gap-4">
                <div className="w-32 bg-amber-500 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold">II</div>
                  <div className="text-sm font-semibold mt-2">Professional</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Level II - Inspector/Technician</h3>
                  <p className="text-slate-700 mb-3"><strong>Training: </strong>280-350 hours total | <strong>Work Experience: </strong>2 years minimum (can be reduced with formal education)</p>
                  <p className="text-sm text-slate-600">Can independently perform inspections, interpret results, and prepare reports. Supervise Level I technicians. This is where most NDT careers are built.</p>
                  <p className="text-sm text-slate-600 mt-2"><strong>Typical Salary: </strong>$60-85K annually</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-4">
                <div className="text-4xl text-amber-500">↓</div>
              </div>

              {/* Level III */}
              <div className="flex items-center gap-4">
                <div className="w-32 bg-red-500 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold">III</div>
                  <div className="text-sm font-semibold mt-2">Expert</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Level III - Senior Inspector/Consultant</h3>
                  <p className="text-slate-700 mb-3"><strong>Experience: </strong>1000+ hours in NDT + advanced training | <strong>Responsibilities: </strong>All levels</p>
                  <p className="text-sm text-slate-600">Can develop procedures, train technicians, and make final acceptance decisions. Highest qualification in NDT. Often moves into management or consulting roles.</p>
                  <p className="text-sm text-slate-600 mt-2"><strong>Typical Salary: </strong>$90-150K+ annually, with senior roles exceeding $180K</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-900">ASNT Certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-slate-900">What is ASNT Certification?</h3>
              <p className="text-slate-700 mb-4">
                ASNT (American Society for Nondestructive Testing) provides the most recognized and widely-used certification standard in the NDT industry. ASNT certifications are accepted globally and required by most major employers. Certifications validate expertise across all major NDT methods with three distinct levels reflecting increasing proficiency.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">ASNT Training Program →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-slate-900">ASNT Methods Covered</h3>
              <ul className="text-slate-700 space-y-2">
                <li>✓ Ultrasonic Testing (UT)</li>
                <li>✓ Radiographic Testing (RT)</li>
                <li>✓ Magnetic Particle Testing (MT)</li>
                <li>✓ Penetrant Testing (PT)</li>
                <li>✓ Eddy Current Testing (ET)</li>
                <li>✓ Thermal Infrared (IR)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-900">API Certifications</h2>
          <p className="text-slate-700 mb-8">
            API (American Petroleum Institute) certifications are critical for professionals in oil & gas, petrochemical, and pressure equipment industries. These certifications focus on specific codes and equipment inspection, enabling specialization in high-demand areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">API 510</h3>
              <p className="text-slate-700 mb-4">
                <strong>Pressure Vessel Inspection Code</strong>
              </p>
              <p className="text-sm text-slate-600 mb-4">
                For inspection of in-service pressure vessels. Required for professionals working on boilers, tanks, and pressure equipment. Specialization in high-paying sectors.
              </p>
              <p className="text-sm text-slate-600 mb-4"><strong>Experience Required: </strong>5-7 years relevant experience</p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">API 570</h3>
              <p className="text-slate-700 mb-4">
                <strong>Piping Inspection Code</strong>
              </p>
              <p className="text-sm text-slate-600 mb-4">
                For in-service piping inspections. Essential for professionals managing pipeline integrity and maintenance across the industry.
              </p>
              <p className="text-sm text-slate-600 mb-4"><strong>Experience Required: </strong>3-5 years relevant experience</p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">API 653</h3>
              <p className="text-slate-700 mb-4">
                <strong>Tank Inspection Code</strong>
              </p>
              <p className="text-sm text-slate-600 mb-4">
                For storage tank and vessel inspection. Critical for energy, petrochemical, and water treatment facilities globally.
              </p>
              <p className="text-sm text-slate-600 mb-4"><strong>Experience Required: </strong>3-5 years relevant experience</p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training →</a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-900">Certification Exam Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">Written</div>
              <p className="text-slate-700">
                Comprehensive test covering theoretical knowledge, standards, and NDT principles specific to your level and method. Written exams assess conceptual understanding.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-2">Practical</div>
              <p className="text-slate-700">
                Hands-on demonstration of competency. For Level II+, you must show ability to independently operate equipment and interpret results accurately.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">General</div>
              <p className="text-slate-700">
                For ASNT certifications, a general NDT knowledge exam covers principles applicable to all methods and provides baseline competency validation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-900">Multi-Method Certification Strategy</h2>
          <p className="text-slate-700 mb-8">
            Many professionals pursue multiple NDT method certifications to increase their value and versatility. A broader skill set commands higher compensation and enables more diverse career opportunities.
          </p>
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong>Combination Strategy:</strong> Start with MT or PT (faster, lower cost), then add UT and RT as you progress through your career.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong>Specialization Path:</strong> Combine Level II certifications in multiple methods, then pursue Level III in your primary method for expert status.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong>Industry Focus:</strong> Aerospace professionals often pursue UT + PT combinations. Oil & gas professionals focus on UT + RT + API codes.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong>Career Progression:</strong> Each additional certification increases earning potential by 5-10% and expands job opportunities significantly.
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Ready to Get Certified?</h3>
            <p className="text-slate-700 mb-6">
              <a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="text-link">Atlantis NDT offers comprehensive ASNT and API certification training</a> for all methods and levels. Their programs prepare you for certification exams with experienced instructors and modern equipment.
            </p>
            <p className="text-slate-700">
              Whether pursuing ASNT certifications in all methods or specialized API credentials like <a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="text-link">API 570, API 510, or API 653</a>, start your certification journey today with world-class training and expert guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
