import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Guide to NDT Training Programs | Courses & Duration',
  description: 'Comprehensive guide to NDT training programs including duration, costs, certification paths, and how to choose the right training provider. Learn about ASNT and API certification requirements.',
  keywords: 'NDT training, NDT courses, training programs, certification paths',
  openGraph: {
    title: 'Complete Guide to NDT Training Programs',
    description: 'Comprehensive guide to NDT training including duration, costs, and certification paths.',
  },
}

export default function TrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Complete Guide to NDT Training Programs",
        "description": "Comprehensive guide to NDT training including duration, costs, and certification paths",
        "author": { "@type": "Organization", "name": "NDT Training Academy" },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-15"
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Training Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Complete Guide to NDT Training Programs</h1>
          <p className="text-xl text-amber-50">
            Everything you need to know about NDT training: duration, costs, certification paths, and selecting the right provider
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
          <h2>What to Expect from NDT Training</h2>
          <p>
            Non-Destructive Testing (NDT) training programs are designed to teach professionals how to detect defects in materials and components without causing damage. Whether you're starting your career or advancing to the next level, NDT training provides practical skills and theoretical knowledge essential for the industry.
          </p>

          <h3>Training Structure and Levels</h3>
          <p>
            Most NDT certifications follow a three-level structure established by ASNT (American Society for Nondestructive Testing):
          </p>
          <ul>
            <li><strong>Level I:</strong> Basic knowledge and ability to perform NDT under supervision. Requires 40-80 hours of training depending on the method.</li>
            <li><strong>Level II:</strong> Proficiency to independently set up and operate equipment, interpret results, and prepare reports. Requires 280-350 hours of training.</li>
            <li><strong>Level III:</strong> Expert-level knowledge to develop procedures, train personnel, and make final decisions on rejections. Requires 1000+ hours of experience.</li>
          </ul>

          <h2>Training Duration and Time Commitments</h2>
          <p>
            The time required to complete NDT training varies based on the method and certification level you're pursuing.
          </p>

          <h3>Level I Training Duration</h3>
          <p>
            Level I is the entry point for NDT professionals. Most training programs offer intensive courses lasting 1-2 weeks. You can complete training in your chosen method (UT, RT, MT, or PT) and be ready to work under supervision. Total commitment: 40-80 hours of classroom and hands-on instruction.
          </p>

          <h3>Level II Training Duration</h3>
          <p>
            Level II requires substantially more training. Comprehensive programs typically run 4-6 weeks of full-time instruction. Many training providers offer part-time evening or weekend options that extend over 3-6 months. Total commitment: 280-350 hours of training plus documented work experience.
          </p>

          <h3>Level III Training Duration</h3>
          <p>
            Level III is advanced and requires extensive practical experience (typically 1000+ hours) and advanced training. Most professionals spend 6 months to 2 years gaining the required experience and completing additional coursework before attempting Level III certification.
          </p>

          <h2>Training Costs</h2>
          <p>
            NDT training costs depend on several factors: the method (UT, RT, MT, PT), certification level, course format (full-time vs. part-time), and the training provider.
          </p>

          <h3>Typical Cost Breakdown</h3>
          <ul>
            <li><strong>Level I:</strong> $2,000 - $4,000 per method</li>
            <li><strong>Level II:</strong> $5,000 - $8,000 per method</li>
            <li><strong>Level III:</strong> $4,000 - $10,000 (plus required experience)</li>
            <li><strong>Multiple Methods:</strong> Discounts available when combining UT, RT, MT, and PT training</li>
          </ul>

          <p>
            These costs typically include instruction, study materials, hands-on practice with equipment, and examination fees. Some providers offer financing options or employer sponsorship programs.
          </p>

          <h2>Choosing the Right Training Provider</h2>
          <p>
            Selecting a quality NDT training provider is crucial for your success. Here are key factors to consider:
          </p>

          <h3>Instructor Qualifications</h3>
          <p>
            Ensure instructors are ASNT Level III certified in the methods they teach. Experienced instructors with real-world industry background provide better practical insights and mentoring.
          </p>

          <h3>Course Accreditation</h3>
          <p>
            Look for ASNT-accredited programs. Accreditation ensures the curriculum meets industry standards and prepares you for certification exams. It also enhances your credentials with employers.
          </p>

          <h3>Equipment and Facilities</h3>
          <p>
            Quality training requires modern equipment. The facility should have up-to-date UT scanners, RT sources, MT equipment, and PT supplies. Hands-on practice with real equipment is essential for competency.
          </p>

          <h3>Class Size and Hands-On Time</h3>
          <p>
            Smaller class sizes ensure more individual attention and practice time. Look for programs with a student-to-instructor ratio that allows substantial hands-on experience.
          </p>

          <h3>Job Placement Support</h3>
          <p>
            Many training providers offer job placement assistance or connections with employers actively hiring NDT professionals. This can accelerate your entry into the workforce.
          </p>

          <h2>Certification Exam Requirements</h2>
          <p>
            After completing training, you must pass ASNT or API certification exams to become officially certified. Exams typically include:
          </p>
          <ul>
            <li>Written exam testing theoretical knowledge</li>
            <li>Practical exam demonstrating hands-on competency</li>
            <li>General knowledge exam (for ASNT)</li>
          </ul>

          <h2>Advancing Your NDT Career</h2>
          <p>
            Many professionals start with Level I in one method and progressively advance through multiple levels and methods. You can combine certifications to become a more versatile technician, increasing your marketability and earning potential.
          </p>

          <h2>Training in Your Region</h2>
          <p>
            Quality NDT training is available worldwide. Whether you're in the USA, India, Middle East, or elsewhere, numerous accredited training centers offer ASNT and API certification programs. <a href="/regional" className="text-link">Explore our regional training guides</a> to find programs near you.
          </p>

          <h2>Next Steps</h2>
          <p>
            Ready to start your NDT training? Our partner <a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="text-link">Atlantis NDT offers comprehensive training programs</a> across multiple locations with experienced instructors and state-of-the-art facilities. Whether you're pursuing <a href="https://atlantisndt.com/asnt-certification" target="_blank" rel="noopener noreferrer" className="text-link">ASNT certification</a> or API pressure equipment codes, they provide the training you need to succeed.
          </p>
        </div>
      </section>

      {/* Related Training Methods */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Explore Specific NDT Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Ultrasonic Testing Training</h3>
              <p className="text-slate-700 mb-4">
                Master UT techniques for flaw detection and thickness measurements using sound waves.
              </p>
              <a href="/training/ut-training" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Radiographic Testing Training</h3>
              <p className="text-slate-700 mb-4">
                Comprehensive guide to X-ray and gamma-ray imaging techniques with safety protocols.
              </p>
              <a href="/training/rt-training" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">MT & PT Training</h3>
              <p className="text-slate-700 mb-4">
                Surface defect detection methods essential for manufacturing and maintenance.
              </p>
              <a href="/training/mt-pt-training" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
