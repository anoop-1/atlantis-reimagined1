import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Training Worldwide | Regional Training Programs & Certifications',
  description: 'Find NDT training programs globally. Quality training available in USA, India, Middle East, and other regions with ASNT and API certifications recognized internationally.',
  keywords: 'NDT training worldwide, regional training, international NDT, training centers',
  openGraph: {
    title: 'NDT Training Worldwide',
    description: 'Find NDT training programs in your region with internationally recognized certifications.',
  },
}

export default function RegionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NDT Training Worldwide",
        "description": "Find NDT training programs globally with ASNT and API certifications",
        "author": { "@type": "Organization", "name": "NDT Training Academy" }
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Regional Guides</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NDT Training Worldwide</h1>
          <p className="text-xl text-amber-50 max-w-3xl">
            Quality NDT training programs and ASNT/API certifications available globally. Find the right training location for your learning needs and career goals.
          </p>
        </div>
      </section>

      {/* Global Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Global NDT Training Landscape</h2>
          <p className="text-lg text-gray-700 mb-8">
            NDT training quality has become remarkably consistent globally. Major training providers follow identical ASNT standards and certification procedures, ensuring equivalent education regardless of location. This global standardization enables professionals to obtain recognized credentials in their home countries while maintaining compatibility with international employers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">United States</h3>
              <p className="text-slate-700 mb-6">
                Comprehensive NDT training across major US cities. ASNT-accredited programs with experienced Level III instructors and modern equipment. Training available in petroleum, aerospace, power, and manufacturing sectors.
              </p>
              <a href="https://atlantisndt.com/training" className="btn-primary text-sm inline-block">Learn More</a>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">India</h3>
              <p className="text-slate-700 mb-6">
                Growing training centers in Hyderabad and major cities offering internationally recognized certifications at competitive costs. Excellent infrastructure and experienced instructors supporting regional and international students.
              </p>
              <a href="https://atlantisndt.com/training" className="btn-primary text-sm inline-block">Learn More</a>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Middle East</h3>
              <p className="text-slate-700 mb-6">
                Professional training in Dubai, Saudi Arabia, Qatar serving the thriving oil & gas sector. State-of-the-art facilities with instructors experienced in GCC operations and international best practices.
              </p>
              <a href="https://atlantisndt.com/training" className="btn-primary text-sm inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Regional Training */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Why Choose Regional Training?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card-alt">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Accessibility & Convenience</h3>
              <p className="text-slate-700">
                Training in your region means no need for expensive international travel. Local programs offer flexibility with familiar time zones, shorter distances, and reduced travel costs. Study closer to home while maintaining work and family commitments.
              </p>
            </div>
            <div className="card-alt">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Cost Efficiency</h3>
              <p className="text-slate-700">
                Reduce travel and accommodation expenses significantly. Many regions offer competitive pricing while maintaining highest quality standards. Regional training often costs 30-50% less than international alternatives.
              </p>
            </div>
            <div className="card-alt">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Local Networking</h3>
              <p className="text-slate-700">
                Build relationships with local NDT professionals and instructors. Network within your region's industry community. Local contacts facilitate job placement and career advancement in your home market.
              </p>
            </div>
            <div className="card-alt">
              <h3 className="text-lg font-bold mb-3 text-slate-900">International Certification</h3>
              <p className="text-slate-700">
                All quality regional programs offer globally recognized ASNT and API certifications. Work anywhere in the world with your credentials. Your certificate has equal value whether earned locally or internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Training Standards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Global Training Standards & Quality Assurance</h2>
          <p className="text-lg text-gray-700 mb-8">
            Quality NDT training programs worldwide follow consistent standards ensuring equivalent education regardless of location. ASNT maintains rigorous accreditation and oversight of training providers globally.
          </p>

          <div className="bg-amber-50 p-8 rounded-lg border border-amber-200 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">ASNT Training Requirements (Worldwide)</h3>
            <ul className="text-slate-700 space-y-3">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>ASNT Accreditation:</strong> Curriculum meets ASNT SNT-TC-1A requirements. Training providers must maintain accreditation status through regular audits and compliance verification.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>Level III Instructors:</strong> All instructors hold ASNT Level III certification in their respective methods. Instructors maintain current credentials and continue professional development.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>Modern Equipment:</strong> Professional-grade NDT equipment for hands-on training. Equipment maintained per manufacturer specifications and industry standards.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>Exam Preparation:</strong> Comprehensive preparation for certification exams. Mock exams simulate actual test conditions and content.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>Industry Recognition:</strong> Certifications accepted by employers worldwide. Your credentials open doors to global career opportunities.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div><strong>Documentation:</strong> Complete training records and certification documentation provided per ASNT requirements for regulatory compliance.</div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Global Partner: Atlantis NDT</h3>
            <p className="text-slate-700 mb-4">
              <a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="text-link">Atlantis NDT offers training programs globally</a>, providing internationally recognized ASNT and API certifications across multiple regions. Whether training in the USA, India, Middle East, or elsewhere, their experienced instructors and modern facilities ensure comprehensive preparation for your NDT career.
            </p>
            <p className="text-slate-700">
              Explore regional training programs and <a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="text-link">find the right training location for your needs</a>. Professional NDT training is available everywhere, and your investment in quality education pays dividends throughout your career.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Regional NDT Training Program</h2>
          <p className="text-xl mb-8 text-amber-50">
            Quality NDT training is available in your region. Start your certification journey today with ASNT-accredited training and globally recognized credentials.
          </p>
          <a href="https://atlantisndt.com/training" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition inline-block">
            Explore Regional Training
          </a>
        </div>
      </section>
    </>
  )
}
