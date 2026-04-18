import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NDT Career Guide | Salary, Jobs, Advancement',
  description: 'Comprehensive NDT career guide covering job opportunities, salary ranges, career advancement paths, and employment options after NDT training.',
  keywords: 'NDT career, NDT jobs, NDT salary, NDT career guide',
  openGraph: {
    title: 'NDT Career Guide',
    description: 'Complete guide to NDT careers, jobs, and advancement opportunities.',
  },
}

export default function CareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NDT Career Guide",
        "description": "Complete guide to NDT careers and advancement",
        "author": { "@type": "Organization", "name": "NDT Training Academy" }
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Career</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NDT Career Guide</h1>
          <p className="text-xl text-green-50">
            Explore opportunities, earning potential, and career advancement in NDT
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
          <h2>Why Choose an NDT Career?</h2>
          <p>
            A career in Non-Destructive Testing offers numerous advantages:
          </p>
          <ul>
            <li><strong>Job Security:</strong> Consistent demand across multiple industries</li>
            <li><strong>Good Pay:</strong> Competitive salaries and benefits</li>
            <li><strong>Skill Development:</strong> Learn cutting-edge technology and inspection techniques</li>
            <li><strong>Career Advancement:</strong> Clear pathways to management and consulting roles</li>
            <li><strong>Global Opportunities:</strong> Work internationally with widely-recognized certifications</li>
            <li><strong>Meaningful Work:</strong> Directly contribute to safety and quality assurance</li>
          </ul>

          <h2>Job Opportunities by Industry</h2>

          <h3>Aerospace and Aviation</h3>
          <p>
            The aerospace industry has the highest demand for NDT professionals due to strict safety requirements. Every component and weld requires rigorous inspection.
          </p>
          <ul>
            <li><strong>Employers:</strong> Boeing, Airbus, Lockheed Martin, Northrop Grumman, regional manufacturers</li>
            <li><strong>Positions:</strong> NDT Technician, Inspector, Quality Engineer, Section Lead</li>
            <li><strong>Requirements:</strong> Level II certifications (UT and PT most common), strong attention to detail</li>
            <li><strong>Salary Range:</strong> $55,000 - $90,000+ for experienced technicians</li>
          </ul>

          <h3>Oil & Gas</h3>
          <p>
            Oil & gas companies maintain massive infrastructure requiring continuous NDT inspection for safe operations and regulatory compliance.
          </p>
          <ul>
            <li><strong>Employers:</strong> ExxonMobil, Shell, Saudi Aramco, BP, regional operators</li>
            <li><strong>Positions:</strong> Inspectors, Field Technicians, Pressure Vessel Inspectors, API Code Holders</li>
            <li><strong>Requirements:</strong> Level II+ certifications, often API 510/570/653 codes</li>
            <li><strong>Salary Range:</strong> $60,000 - $120,000+ (higher for API code holders and overseas assignments)</li>
          </ul>

          <h3>Power Generation</h3>
          <p>
            Nuclear and conventional power plants employ NDT professionals for reactor components, piping, and pressure vessel inspection.
          </p>
          <ul>
            <li><strong>Employers:</strong> Utility companies, nuclear operators, equipment manufacturers</li>
            <li><strong>Positions:</strong> Inspectors, In-Service Inspection (ISI) Technicians, Level III Specialists</li>
            <li><strong>Requirements:</strong> Level II/III certifications, often UT and RT</li>
            <li><strong>Salary Range:</strong> $55,000 - $95,000+</li>
          </ul>

          <h3>Manufacturing and Automotive</h3>
          <p>
            Manufacturers use NDT for quality control of forgings, castings, welds, and finished components.
          </p>
          <ul>
            <li><strong>Employers:</strong> Automotive suppliers, heavy equipment makers, foundries</li>
            <li><strong>Positions:</strong> Quality Control Technicians, NDT Technicians, Lab Supervisors</li>
            <li><strong>Requirements:</strong> Level I/II certifications, often MT and PT for surface defects</li>
            <li><strong>Salary Range:</strong> $40,000 - $70,000</li>
          </ul>

          <h3>Third-Party Inspection Services</h3>
          <p>
            Independent inspection companies serve multiple clients across industries, offering variety and flexibility.
          </p>
          <ul>
            <li><strong>Employers:</strong> Specialized inspection companies, engineering firms, certification bodies</li>
            <li><strong>Positions:</strong> Field Inspectors, Technicians, Project Managers, Training Specialists</li>
            <li><strong>Requirements:</strong> Multiple method certifications, Level II minimum</li>
            <li><strong>Salary Range:</strong> $50,000 - $100,000+</li>
          </ul>

          <h2>Salary and Compensation</h2>

          <h3>Entry Level (Level I)</h3>
          <p>
            <strong>Typical Salary Range:</strong> $35,000 - $48,000 annually
          </p>
          <p>
            Entry-level technicians work under supervision, learning industry practices while developing practical skills. Most professionals use Level I as a stepping stone to Level II certification.
          </p>

          <h3>Professional Level (Level II)</h3>
          <p>
            <strong>Typical Salary Range:</strong> $50,000 - $85,000 annually
          </p>
          <p>
            Level II inspectors work independently, making critical decisions about component acceptability. This is the most common NDT position. Salary increases with experience, additional certifications, and specialization.
          </p>

          <h3>Expert Level (Level III)</h3>
          <p>
            <strong>Typical Salary Range:</strong> $70,000 - $130,000+ annually
          </p>
          <p>
            Level III professionals develop procedures, train others, and make final inspection decisions. Many transition to management, consulting, or training roles at higher compensation.
          </p>

          <h3>Additional Compensation Factors</h3>
          <ul>
            <li><strong>Multiple Certifications:</strong> Each additional method certification increases earning potential $5,000-$10,000+</li>
            <li><strong>API Codes:</strong> API 510/570/653 holders earn $10,000-$20,000+ premium in oil & gas</li>
            <li><strong>Experience:</strong> 10+ years experience typically means 30-50% higher salary than entry-level</li>
            <li><strong>Geographic Location:</strong> Major metropolitan areas and oil & gas regions pay 15-25% more</li>
            <li><strong>Overtime and Travel:</strong> Field work and project-based positions often include overtime and per diem</li>
            <li><strong>Benefits:</strong> Health insurance, retirement plans, paid time off (varies by employer)</li>
          </ul>

          <h2>Career Progression Paths</h2>

          <h3>The Specialist Path</h3>
          <p>
            Become increasingly expert in specific NDT methods or industries. Specialists command premium salaries and serve as technical authorities.
          </p>
          <ul>
            <li>Level I → Level II in one method</li>
            <li>Add additional method certifications (stay technical)</li>
            <li>Pursue Level III in primary method</li>
            <li>Become recognized expert/consultant</li>
          </ul>

          <h3>The Management Path</h3>
          <p>
            Use NDT expertise to move into supervision and management roles overseeing teams and programs.
          </p>
          <ul>
            <li>Level II technician experience</li>
            <li>Demonstrate leadership and planning abilities</li>
            <li>Move to Section Lead or QA Supervisor position</li>
            <li>Progress to Manager, Director, or VP of Quality</li>
          </ul>

          <h3>The Training Path</h3>
          <p>
            Share expertise by developing and delivering training programs. Many Level III professionals transition to training roles.
          </p>
          <ul>
            <li>Level II/III certification in relevant methods</li>
            <li>Gain teaching experience (on-the-job mentoring)</li>
            <li>Join a training organization as instructor</li>
            <li>Develop curriculum and lead certification programs</li>
          </ul>

          <h3>The Consulting Path</h3>
          <p>
            Leverage expertise to provide specialized consulting services to clients with complex inspection challenges.
          </p>
          <ul>
            <li>Level III certification with deep experience</li>
            <li>Develop specialized expertise (e.g., advanced UT, composite inspection)</li>
            <li>Move to senior technical roles</li>
            <li>Establish consulting practice or join consulting firm</li>
          </ul>

          <h2>Skills Development and Advancement</h2>

          <h3>Technical Skills</h3>
          <ul>
            <li>Master multiple NDT methods (UT, RT, MT, PT)</li>
            <li>Specialize in advanced technologies (Phased Array UT, Digital RT)</li>
            <li>Learn related inspection methods (Eddy Current, Thermography)</li>
            <li>Develop expertise in specific applications (weld inspection, composite inspection)</li>
          </ul>

          <h3>Professional Skills</h3>
          <ul>
            <li>Report writing and technical documentation</li>
            <li>Standards and code interpretation</li>
            <li>Procedure development</li>
            <li>Equipment selection and validation</li>
            <li>Data analysis and interpretation</li>
          </ul>

          <h3>Leadership Skills</h3>
          <ul>
            <li>Team management and supervision</li>
            <li>Project coordination</li>
            <li>Budget management</li>
            <li>Communication and presentation</li>
            <li>Mentoring and training others</li>
          </ul>

          <h2>Industries with Strong Job Growth</h2>

          <h3>Renewable Energy</h3>
          <p>
            Wind turbines and solar installations require NDT for manufacturing and in-service inspection. Growing industry provides expanding opportunities.
          </p>

          <h3>Automotive and EV</h3>
          <p>
            Electric vehicle manufacturing requires rigorous quality control. Traditional automotive continues need for NDT services. Strong and stable industry.
          </p>

          <h3>Aerospace</h3>
          <p>
            Commercial aviation recovery post-pandemic drives demand. New aircraft development and aging fleet inspection create consistent opportunities.
          </p>

          <h3>Infrastructure and Bridges</h3>
          <p>
            Aging infrastructure maintenance and new construction drive demand for specialized NDT inspectors.
          </p>

          <h2>Geographic Opportunities</h2>

          <h3>North America</h3>
          <p>
            Mature market with stable employment and good salaries. Many established companies and specialized contractors.
          </p>

          <h3>Europe</h3>
          <p>
            Strong automotive and aerospace industries. Competitive salaries and excellent work conditions. International experience valuable.
          </p>

          <h3>Middle East</h3>
          <p>
            Oil & gas boom creates high demand. Excellent salaries and tax benefits. Expatriate-friendly work environment in Gulf states.
          </p>

          <h3>Asia-Pacific</h3>
          <p>
            Rapid growth in manufacturing, aerospace, and oil & gas. Growing demand for qualified NDT professionals. Lower salaries than Western countries but improving.
          </p>

          <h2>Building a Successful NDT Career</h2>

          <h3>Get Certified</h3>
          <p>
            Start with <a href="/training" className="text-link">comprehensive NDT training</a> and pursue ASNT certification. Certifications are your credential for employment and advancement.
          </p>

          <h3>Gain Experience</h3>
          <p>
            Work in real-world environments. Different industries, equipment, and applications build diverse experience and problem-solving skills.
          </p>

          <h3>Continue Learning</h3>
          <p>
            Stay updated with industry changes, new technologies, and evolving standards. Attend conferences, take advanced courses, and pursue additional certifications.
          </p>

          <h3>Network Professionally</h3>
          <p>
            Join ASNT and professional organizations. Attend industry events. Build relationships with colleagues and industry leaders.
          </p>

          <h3>Document Your Expertise</h3>
          <p>
            Keep detailed records of your experience, training, and accomplishments. Professional reputation and demonstrated expertise drive career advancement.
          </p>

          <h2>Start Your NDT Career</h2>
          <p>
            Ready to launch a rewarding NDT career? The first step is getting the right training and certifications. <a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="text-link">Atlantis NDT offers comprehensive training programs</a> that prepare you for ASNT certification and career success.
          </p>

          <p>
            Whether you're just starting your career or looking to advance to higher positions, quality training is the foundation. For career guidance and insights, read <a href="https://atlantisndt.com/blog/ndt-career-guide" target="_blank" rel="noopener noreferrer" className="text-link">the complete NDT career guide</a> for detailed advice on building and advancing your NDT career.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your NDT Career?</h2>
          <p className="text-xl mb-8">
            Get certified and join thousands of successful NDT professionals worldwide. 
            Begin your career advancement today.
          </p>
          <a href="/training" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition inline-block">
            Explore Training Programs
          </a>
        </div>
      </section>
    </>
  )
}
