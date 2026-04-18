import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Training in USA | Regional Training Centers',
  description: 'Find ASNT-certified NDT training programs across the United States. Comprehensive Level I, II, III training in ultrasonic, radiographic, magnetic particle, and penetrant testing.',
  keywords: 'NDT training USA, NDT courses USA, ASNT training centers',
  openGraph: {
    title: 'NDT Training in USA',
    description: 'Find NDT training programs across the United States.',
  },
}

export default function USATrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NDT Training in USA",
        "description": "Find NDT training programs across the United States",
        "author": { "@type": "Organization", "name": "NDT Training Academy" }
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/regional">Regional Guides</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">USA Training</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NDT Training in the USA</h1>
          <p className="text-xl text-blue-50">
            Comprehensive ASNT-certified training programs across major US cities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
          <h2>NDT Training Landscape in the United States</h2>
          <p>
            The United States has a mature and sophisticated NDT training infrastructure. Numerous ASNT-accredited training centers operate across the country, offering comprehensive programs from Level I through Level III certifications in all major NDT methods.
          </p>

          <h2>Major Training Centers and Regions</h2>

          <h3>Northeast Region</h3>
          <p>
            Major cities including New York, Boston, and Philadelphia host excellent training facilities. The Northeast is home to significant aerospace and manufacturing industries, supporting robust NDT training infrastructure.
          </p>

          <h3>Southeast and Gulf Coast</h3>
          <p>
            Houston, New Orleans, and other Gulf Coast cities are hubs for oil & gas industry training. These regions offer specialized programs focused on API certification (API 510, 570, 653) and pipeline inspection.
          </p>

          <h3>Midwest Region</h3>
          <p>
            Chicago, Detroit, and other Midwest cities serve the automotive, manufacturing, and power generation sectors. Training centers here emphasize practical applications for these industries.
          </p>

          <h3>Southwest Region</h3>
          <p>
            Phoenix and Denver area training centers serve aerospace and oil & gas industries. The Southwest region is experiencing growth in NDT training with expanding facilities.
          </p>

          <h3>West Coast Region</h3>
          <p>
            California, Washington, and Oregon host world-class aerospace and technology companies requiring extensive NDT services. West Coast training centers maintain the highest standards and offer cutting-edge technology training.
          </p>

          <h2>Training Program Characteristics</h2>

          <h3>Accreditation and Standards</h3>
          <p>
            US training centers must comply with ASNT SNT-TC-1A certification personnel qualification standard. Most major centers are formally accredited by ASNT, ensuring curriculum quality and instructor qualifications.
          </p>

          <h3>Comprehensive Method Coverage</h3>
          <p>
            Major training centers offer:
          </p>
          <ul>
            <li><strong>Ultrasonic Testing (UT):</strong> Including phased array and automated scanning</li>
            <li><strong>Radiographic Testing (RT):</strong> Both film and digital radiography</li>
            <li><strong>Magnetic Particle Testing (MT):</strong> Wet and dry methods, AC and DC</li>
            <li><strong>Penetrant Testing (PT):</strong> Fluorescent and visible dye methods</li>
            <li><strong>Eddy Current Testing (ET):</strong> Advanced method for metals</li>
            <li><strong>API Certifications:</strong> API 510, 570, 653 for pressure equipment</li>
          </ul>

          <h3>Flexible Scheduling</h3>
          <p>
            US training centers understand the need for working professionals. Most offer:
          </p>
          <ul>
            <li>Full-time intensive programs (1-6 weeks)</li>
            <li>Part-time evening and weekend classes</li>
            <li>Online components for theoretical material</li>
            <li>Customized corporate training programs</li>
            <li>Weekend seminars and short courses</li>
          </ul>

          <h2>Career Opportunities in the USA</h2>

          <h3>Job Market</h3>
          <p>
            The US job market for NDT professionals is strong. Major employers include:
          </p>
          <ul>
            <li><strong>Aerospace:</strong> Boeing, Lockheed Martin, major suppliers</li>
            <li><strong>Oil & Gas:</strong> Major operators and service companies</li>
            <li><strong>Manufacturing:</strong> Automotive, industrial equipment makers</li>
            <li><strong>Power Generation:</strong> Utility companies and equipment suppliers</li>
            <li><strong>Third-Party Inspection:</strong> Independent inspection contractors</li>
            <li><strong>Equipment Suppliers:</strong> NDT equipment and material manufacturers</li>
          </ul>

          <h3>Salary and Benefits</h3>
          <p>
            NDT professionals in the USA earn competitive salaries:
          </p>
          <ul>
            <li><strong>Level I:</strong> $35,000 - $45,000 annually</li>
            <li><strong>Level II:</strong> $50,000 - $80,000 annually</li>
            <li><strong>Level III:</strong> $70,000 - $120,000+ annually</li>
          </ul>
          <p>
            Benefits typically include health insurance, retirement plans, and opportunities for advancement to management and consulting roles.
          </p>

          <h2>Regional Specializations</h2>

          <h3>Aerospace Focus</h3>
          <p>
            West Coast and Connecticut training centers emphasize aerospace NDT standards. You'll learn FAA requirements, aerospace-specific acceptance criteria, and advanced techniques like phased array ultrasonic testing.
          </p>

          <h3>Oil & Gas Focus</h3>
          <p>
            Gulf Coast training centers specialize in pipeline and pressure vessel inspection. Curriculum includes API certification preparation, corrosion assessment, and risk-based inspection principles.
          </p>

          <h3>Automotive and Manufacturing</h3>
          <p>
            Midwest training centers focus on production-line NDT, quality control techniques, and automated inspection systems used in automotive and heavy manufacturing.
          </p>

          <h2>Getting Started with NDT Training in the USA</h2>

          <h3>Choose Your Method</h3>
          <p>
            Begin by selecting which NDT method interests you most. If unsure, many professionals start with MT or PT (entry-level, lower cost) then progress to UT and RT.
          </p>

          <h3>Select Your Training Center</h3>
          <p>
            Consider location (commute time), scheduling (full-time vs. part-time), and specialization (aerospace vs. oil & gas). Visit potential centers to inspect facilities and meet instructors.
          </p>

          <h3>Obtain Training</h3>
          <p>
            Start with Level I for foundational knowledge and hands-on introduction. Many professionals train during evenings/weekends while maintaining current employment.
          </p>

          <h3>Pursue Certification</h3>
          <p>
            After completing training, pass ASNT certification exams. Most training centers provide exam scheduling assistance and support.
          </p>

          <h2>US Training Standards</h2>
          <p>
            All legitimate US NDT training must comply with:
          </p>
          <ul>
            <li><strong>ASNT SNT-TC-1A:</strong> Standard for NDT Personnel Qualification</li>
            <li><strong>ASTM Standards:</strong> E1316, E1444, E1748, and others specific to each method</li>
            <li><strong>Industry Codes:</strong> ASME, AWS, API standards for specific applications</li>
            <li><strong>Regulations:</strong> State and federal regulations including radiation safety (for RT)</li>
          </ul>

          <h2>Begin Your USA NDT Career</h2>
          <p>
            Ready to start NDT training in the United States? <a href="https://atlantisndt.com/training-usa" target="_blank" rel="noopener noreferrer" className="text-link">Atlantis NDT offers comprehensive training programs across the USA</a>. With multiple locations and flexible scheduling, you can find a training program that fits your needs and career goals.
          </p>

          <p>
            <a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="text-link">Explore NDT training options in your region</a> and start your career as a certified NDT professional. The job market is strong, salaries are competitive, and opportunities for advancement are abundant in the dynamic US NDT industry.
          </p>
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Training in Other Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">India Training</h3>
              <p className="text-slate-700 mb-4">
                Growing training centers in Hyderabad and major cities with competitive costs and international certifications.
              </p>
              <a href="/regional/india" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Middle East Training</h3>
              <p className="text-slate-700 mb-4">
                Professional NDT training in Dubai, Saudi Arabia, and across the GCC region.
              </p>
              <a href="/regional/middle-east" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
