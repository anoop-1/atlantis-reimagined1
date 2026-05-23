// satellite-enrich: FeaturedArticles component generated at
// ./_featured-articles.tsx. Import and place inside this file's JSX to
// surface the new long-form articles on the home page.

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Training Academy | NDT Training Excellence & Career Development',
  description: 'Comprehensive NDT training programs covering ultrasonic, radiographic, magnetic particle, liquid penetrant, and eddy current testing. Learn about certifications, career paths, and training opportunities.',
  openGraph: {
    title: 'NDT Training Academy | NDT Training Excellence',
    description: 'Learn about NDT training programs, certifications, and career paths. Build your NDT expertise with comprehensive courses.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NDT Training Academy",
        "description": "Comprehensive guide to NDT training, certification, and professional development in non-destructive testing",
        "url": "https://ndt-training-academy.com",
        "logo": "https://ndt-training-academy.com/logo.png",
        "sameAs": ["https://atlantisndt.com"]
      })}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">NDT Training Excellence</h1>
          <p className="text-xl mb-8 text-amber-50 max-w-3xl mx-auto">
            Your Complete Guide to Non-Destructive Testing Training, Certifications, and Professional Development. Build a rewarding career in industrial inspection with comprehensive education and internationally recognized credentials.
          </p>
          <a href="https://atlantisndt.com/training" rel="noopener" className="btn-primary text-lg">
            Explore Training Programs
          </a>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            The NDT Industry: Opportunities & Growth
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            The nondestructive testing industry is experiencing robust growth driven by aging infrastructure, stricter safety regulations, technological advancement, and expanding global operations. The NDT market exceeds $10 billion globally and continues to expand 5-7% annually, creating strong demand for qualified professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <div className="text-4xl text-amber-500 mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Growing Industry</h3>
              <p className="text-slate-700">
                NDT professionals are in high demand across aerospace, oil & gas, manufacturing, and construction sectors. The industry continues to expand globally with increasing regulatory requirements driving demand for qualified inspectors and technicians.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl text-amber-500 mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Excellent Salaries</h3>
              <p className="text-slate-700">
                NDT technicians and inspectors earn competitive salaries with significant opportunities for advancement to senior positions and management roles. Certified professionals earn 20-40% more than non-certified counterparts.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl text-amber-500 mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Global Opportunities</h3>
              <p className="text-slate-700">
                NDT certifications are internationally recognized, opening doors to work opportunities across multiple countries and regions. Skills are in demand worldwide, enabling international career mobility and global project opportunities.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Industry Statistics:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>$10+ billion</strong> global NDT market size</li>
              <li><strong>5-7%</strong> annual market growth rate</li>
              <li><strong>20,000+</strong> new NDT professionals needed annually</li>
              <li><strong>$60-85K</strong> median salary for Level II technicians</li>
              <li><strong>$90-150K+</strong> typical compensation for Level III specialists</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Primary NDT Training Methods
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Effective NDT training combines comprehensive classroom instruction with hands-on practical experience. Professional trainers introduce concepts, standards, and methodologies, while practical labs allow students to develop operator proficiency with actual equipment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Ultrasonic Testing (UT)</h3>
              <p className="text-slate-700 mb-4">
                Use high-frequency sound waves to detect internal defects in materials. UT training covers conventional contact testing, angle-beam inspections, and advanced phased array techniques. Ideal for thickness measurements, flaw detection, and bond line inspection across all material types.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Radiographic Testing (RT)</h3>
              <p className="text-slate-700 mb-4">
                Employ X-rays and gamma rays to create internal images of components. RT training includes radiation safety protocols, film interpretation, digital radiography techniques, and exposure control. Essential for weld inspection and casting evaluation.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Magnetic Particle Testing (MT)</h3>
              <p className="text-slate-700 mb-4">
                Detect surface and near-surface defects using magnetic fields and iron particles. MT is fast, reliable, and widely used in manufacturing and maintenance applications. Training covers wet method, dry method, and continuous magnetization techniques.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Penetrant Testing (PT)</h3>
              <p className="text-slate-700 mb-4">
                Use liquid penetrants to find surface-breaking defects on non-porous materials. PT training covers fluorescent and non-fluorescent methods essential for aerospace and automotive industries. Covers removal, developer application, and interpretation.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Eddy Current Testing (ET)</h3>
              <p className="text-slate-700 mb-4">
                Electromagnetic induction techniques for surface and near-surface defect detection. ET training covers probe selection, frequency selection, and phase analysis. Useful for material characterization and hardness verification.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card-alt">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Visual Inspection (VT)</h3>
              <p className="text-slate-700 mb-4">
                Direct observation and aided visual examination to identify surface anomalies and defects. VT is often the first inspection method and works in combination with advanced NDT techniques. Essential foundational skill for all inspectors.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Quick Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Industry Certifications & Training Roadmap
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Most NDT careers follow a certification progression. Entry-level training prepares you for Level I certification, with advancement to Level II and Level III as you gain experience. Specialized API certifications in piping, tanks, and pressure vessels open additional career paths.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card text-center hover:scale-105 transition-transform">
              <span className="badge">Most Popular</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-slate-900">ASNT Certification</h3>
              <p className="text-sm text-slate-600 mb-4">
                American Society for Nondestructive Testing. Covers all NDT methods with Level I, II, and III progression.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training Info</a>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <span className="badge-alt">Pressure Equipment</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-slate-900">API 570</h3>
              <p className="text-sm text-slate-600 mb-4">
                Piping Inspection Code. Essential for oil & gas and petrochemical professionals.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training Info</a>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <span className="badge-alt">Pressure Equipment</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-slate-900">API 510</h3>
              <p className="text-sm text-slate-600 mb-4">
                Pressure Vessel Inspection. Critical for manufacturing and petrochemical sectors.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training Info</a>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <span className="badge-alt">Pressure Equipment</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-slate-900">API 653</h3>
              <p className="text-sm text-slate-600 mb-4">
                Tank Inspection Code. For storage tank and vessel professionals.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Training Info</a>
            </div>
          </div>
          <div className="text-center">
            <a href="https://atlantisndt.com/training" rel="noopener" className="btn-primary">
              View Full Training Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* Regional Training */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Training Available Worldwide
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Quality NDT training is available globally through accredited training centers. Whether you're in the United States, India, Middle East, or other regions, you can access world-class instruction and internationally recognized certifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-slate-900">United States</h3>
              <p className="text-slate-700 mb-4">
                Comprehensive NDT training programs across major US cities with ASNT-certified instructors and state-of-the-art facilities. Programs available in Houston, Dallas, Los Angeles, New York, and other major markets.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Explore →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-slate-900">India</h3>
              <p className="text-slate-700 mb-4">
                Growing training centers in Hyderabad and other major cities offering internationally recognized NDT certification programs. Cost-effective training with experienced instructors and modern equipment.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Explore →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Middle East</h3>
              <p className="text-slate-700 mb-4">
                Professional NDT training in Dubai, Saudi Arabia, Qatar, and across the GCC region serving the booming oil & gas sector with state-of-the-art facilities and experienced instructors.
              </p>
              <a href="https://atlantisndt.com/training" rel="noopener" className="text-amber-600 font-semibold hover:text-amber-700">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Career Development & Advancement
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            NDT training is an investment in your future. Most Level I technicians progress to Level II within 2-3 years and can achieve Level III status within 5-7 years with dedicated professional development. Multiple certifications significantly increase earning potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Entry-Level Path</h3>
              <p className="text-slate-700 mb-3">
                Start with comprehensive Level I training in your chosen method(s). Entry-level positions typically earn $45-55K annually. Gain 2 years experience, then pursue Level II certification for advancement to inspector roles earning $60-85K.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Path</h3>
              <p className="text-slate-700 mb-3">
                Combine multiple ASNT certifications with API specialty certifications (570, 653, 510) to expand opportunities. Level III certification and API credentials qualify you for senior positions, supervisory roles, and consulting work earning $90-150K+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your NDT Journey?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Professional NDT training from <a href="https://atlantisndt.com/training" rel="noopener" className="font-semibold underline">Atlantis NDT</a> combines comprehensive classroom instruction with hands-on practical experience. Start building your career in non-destructive testing today with world-class training and certification.
          </p>
          <a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition inline-block">
            Enroll in Training Programs
          </a>
        </div>
      </section>
    </>
  )
}
