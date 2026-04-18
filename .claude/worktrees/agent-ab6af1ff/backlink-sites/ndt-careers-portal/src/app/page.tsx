import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Careers Portal - Start Your NDT Career Journey',
  description: 'Explore NDT career paths, salary data, and job opportunities. Learn about Level I, II, and III positions with average salaries and growing demand worldwide.',
  keywords: 'NDT career, NDT technician, NDT careers, ASNT Level I, salary, job opportunities',
}

export default function HomePage() {
  return (
    <article>
      <div className="breadcrumb">
        <span>Home</span>
      </div>

      <h1>NDT Careers Portal: Your Complete Guide to Non-Destructive Testing Careers</h1>
      
      <p>
        Non-Destructive Testing (NDT) is one of the fastest-growing technical career fields, with consistent demand across industries from manufacturing and aerospace to oil and gas. Whether you're starting your career as a Level I technician or advancing toward Level III consultant status, this portal provides comprehensive guidance on career paths, salary expectations, and global job opportunities.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">$72,500</div>
          <div className="stat-label">Average NDT Salary (US)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">8%</div>
          <div className="stat-label">Annual Growth Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">Countries with Demand</div>
        </div>
      </div>

      <h2>Why Choose an NDT Career?</h2>

      <p>
        NDT technicians and consultants are essential to ensuring the safety and integrity of critical infrastructure, components, and systems across virtually every major industry. From detecting flaws in aircraft welds to monitoring pipeline integrity, NDT professionals make a direct impact on public safety while commanding competitive salaries and benefits.
      </p>

      <h3>Key Career Advantages</h3>
      <ul>
        <li><strong>Competitive Salary Growth:</strong> Entry-level technicians earn $45,000-$55,000, while Level III consultants and senior specialists command $95,000-$150,000+.</li>
        <li><strong>Global Opportunities:</strong> NDT skills are internationally recognized, creating opportunities in the US, Middle East, Europe, Asia-Pacific, and beyond.</li>
        <li><strong>Hands-On Technical Work:</strong> Avoid desk-bound roles while developing specialized expertise in ultrasonic testing, radiography, thermography, and more.</li>
        <li><strong>Strong Job Security:</strong> Regulatory compliance and safety standards ensure consistent demand for qualified NDT professionals.</li>
        <li><strong>Clear Career Progression:</strong> ASNT certification provides a defined pathway from Level I through Level III, with corresponding salary increases.</li>
      </ul>

      <h2>NDT Career Paths at a Glance</h2>

      <div className="content-box">
        <h3>Level I Technician ($45K-$65K)</h3>
        <p>
          Entry point for NDT careers. Level I technicians perform inspections under Level II or III supervision, execute specific procedures, and develop foundational expertise in one or more NDT methods. Typically requires a high school diploma and 2-3 years of experience plus ASNT certification.
        </p>
        <p><a href="/careers">Learn more about NDT career paths</a></p>
      </div>

      <div className="content-box">
        <h3>Level II Inspector ($60K-$85K)</h3>
        <p>
          Intermediate level requiring 4-6 years of experience and advanced ASNT certification. Level II professionals select techniques, set up equipment, interpret results, and supervise Level I technicians. They often specialize in specific methods like ultrasonic testing or radiography.
        </p>
        <p><a href="/salary">Explore detailed salary ranges by level</a></p>
      </div>

      <div className="content-box">
        <h3>Level III Consultant ($85K-$150K+)</h3>
        <p>
          Senior consulting role requiring 8+ years of experience, multiple method certifications, and advanced ASNT Level III qualification. Level III consultants develop procedures, conduct training, oversee program management, and provide expert consultation. <a href="/careers/level-iii-consultant">See how to become a Level III consultant</a>.
        </p>
      </div>

      <h2>Top NDT Job Markets Worldwide</h2>

      <p>
        NDT professionals enjoy strong demand in key global markets. The largest opportunities currently exist in oil and gas regions, aerospace hubs, and rapidly developing industrial centers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div className="bg-cyan-50 border border-cyan-300 rounded p-4">
          <h4 className="text-cyan-800">Houston, Texas</h4>
          <p className="text-sm text-gray-700">
            The global oil & gas capital. High demand for NDT consultants and pipeline inspectors. Average salary: $80K-$95K.
          </p>
          <a href="/job-markets/houston" className="text-cyan-600 text-sm font-medium">Explore Houston market</a>
        </div>
        <div className="bg-cyan-50 border border-cyan-300 rounded p-4">
          <h4 className="text-cyan-800">Middle East (Dubai, Saudi Arabia)</h4>
          <p className="text-sm text-gray-700">
            Booming energy and infrastructure sectors. Premium salaries due to demand and cost of living. Average: $85K-$120K.
          </p>
          <a href="/job-markets/middle-east" className="text-cyan-600 text-sm font-medium">Explore ME market</a>
        </div>
        <div className="bg-cyan-50 border border-cyan-300 rounded p-4">
          <h4 className="text-cyan-800">Asia-Pacific (Singapore, India)</h4>
          <p className="text-sm text-gray-700">
            Rapidly growing manufacturing and energy sectors. Emerging as a major NDT hub. Average: $55K-$85K.
          </p>
          <a href="/job-markets/asia-pacific" className="text-cyan-600 text-sm font-medium">Explore APAC market</a>
        </div>
      </div>

      <h2>NDT Methods & Specializations</h2>

      <p>
        Different NDT methods command different salaries and have varying demand levels. Understanding these specializations helps you plan your career trajectory:
      </p>

      <ul>
        <li><strong>Ultrasonic Testing (UT):</strong> Highest demand and salary potential ($75K-$95K for Level II). Used in aerospace, pressure vessel inspection, and weld quality assurance.</li>
        <li><strong>Radiography (RT):</strong> High compensation ($70K-$90K) but requires radiation safety training. Critical in aerospace and heavy manufacturing.</li>
        <li><strong>Dye Penetrant Testing (PT):</strong> Entry-level friendly, lower barrier to certification. Average $50K-$70K for Level II.</li>
        <li><strong>Magnetic Particle Testing (MT):</strong> Solid demand in automotive and heavy equipment. Average $55K-$75K for Level II.</li>
        <li><strong>Thermography (IRT):</strong> Emerging technology with premium compensation. Average $65K-$85K for specialists.</li>
      </ul>

      <p>
        <a href="/salary/by-method">View detailed salary data by NDT method</a>
      </p>

      <h2>Global Salary Trends</h2>

      <p>
        NDT salaries vary significantly by geography, experience level, and specialization. The following data reflects 2024-2025 market conditions:
      </p>

      <table className="w-full my-6 border-collapse">
        <thead className="bg-sky-100">
          <tr>
            <th className="border border-sky-200 px-4 py-2 text-left">Certification Level</th>
            <th className="border border-sky-200 px-4 py-2 text-left">US Average</th>
            <th className="border border-sky-200 px-4 py-2 text-left">Middle East</th>
            <th className="border border-sky-200 px-4 py-2 text-left">Europe</th>
            <th className="border border-sky-200 px-4 py-2 text-left">Asia-Pacific</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-sky-200 px-4 py-2"><strong>Level I</strong></td>
            <td className="border border-sky-200 px-4 py-2">$45K-$55K</td>
            <td className="border border-sky-200 px-4 py-2">$50K-$70K</td>
            <td className="border border-sky-200 px-4 py-2">$40K-$55K</td>
            <td className="border border-sky-200 px-4 py-2">$35K-$50K</td>
          </tr>
          <tr>
            <td className="border border-sky-200 px-4 py-2"><strong>Level II</strong></td>
            <td className="border border-sky-200 px-4 py-2">$60K-$85K</td>
            <td className="border border-sky-200 px-4 py-2">$70K-$110K</td>
            <td className="border border-sky-200 px-4 py-2">$55K-$80K</td>
            <td className="border border-sky-200 px-4 py-2">$50K-$75K</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-sky-200 px-4 py-2"><strong>Level III</strong></td>
            <td className="border border-sky-200 px-4 py-2">$85K-$150K+</td>
            <td className="border border-sky-200 px-4 py-2">$100K-$180K+</td>
            <td className="border border-sky-200 px-4 py-2">$75K-$120K</td>
            <td className="border border-sky-200 px-4 py-2">$60K-$100K</td>
          </tr>
        </tbody>
      </table>

      <h2>Start Your NDT Career Today</h2>

      <div className="cta-section">
        <h3 className="mt-0 text-white">Ready to explore your NDT career options?</h3>
        <p>
          Browse our comprehensive guides on career paths, certification requirements, salary expectations, and global job opportunities. Connect with industry partners at <a href="https://atlantisndt.com/consulting" className="text-sky-100 hover:text-white underline">Atlantis NDT Consulting</a> for professional guidance and training opportunities.
        </p>
        <a href="/careers" className="cta-button">Explore Career Paths</a>
        <a href="/salary" className="cta-button ml-4">View Salary Data</a>
      </div>

      <h2>Key Resources for Your Career Journey</h2>

      <ul>
        <li><a href="/careers">NDT Career Paths Overview</a> - Detailed progression from Level I to Level III</li>
        <li><a href="/careers/ndt-inspector">Day in the Life of an NDT Inspector</a> - Real-world perspective on daily work</li>
        <li><a href="/careers/level-iii-consultant">How to Become a Level III Consultant</a> - Advanced career guidance</li>
        <li><a href="/salary">Comprehensive Salary Data</a> - Detailed ranges by level, method, and location</li>
        <li><a href="/job-markets">Top NDT Job Markets</a> - Global opportunities and demand</li>
        <li><a href="/consulting-guide">Guide to NDT Consulting Services</a> - Understanding consulting opportunities</li>
        <li><a href="/resources">Career Resources</a> - Job boards, networks, and training platforms</li>
      </ul>

      <p>
        All data reflects current market conditions and is sourced from ASNT surveys, job market analysis, and industry consulting reports. <a href="https://atlantisndt.com/training">Explore training programs</a> from our career partners to advance your qualifications.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'NDT Careers Portal',
            description: 'Complete guide to NDT careers, salary data, and job markets',
            url: 'https://ndtcareersportal.com',
            publisher: {
              '@type': 'Organization',
              name: 'NDT Careers Portal',
            },
          }),
        }}
      />
    </article>
  )
}
