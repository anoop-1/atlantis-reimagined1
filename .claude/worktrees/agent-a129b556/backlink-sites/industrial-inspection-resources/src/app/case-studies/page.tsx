import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Inspection Case Studies | Real-World NDT Examples',
  description: 'Case studies demonstrating successful inspection programs, asset integrity improvements, and NDT solutions across oil & gas, aerospace, power generation, and manufacturing industries.',
  keywords: 'inspection case studies, NDT examples, asset integrity, inspection success stories, industrial examples',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Deepwater Platform Inspection Program Optimization',
      industry: 'Oil & Gas - Upstream',
      challenge: 'A major deepwater FPSO platform operated by a global energy company faced rising inspection costs with legacy paper-based systems and inconsistent NDT practices across the fleet. Equipment failure risk was increasing while cost controls became critical.',
      solution: 'Implemented risk-based inspection (RBI) program per API 580 with digital reporting systems and technician training. Consolidated inspection vendors and standardized procedures across the fleet. Deployed ultrasonic thickness monitoring for corrosion tracking.',
      results: ['35% reduction in annual inspection costs', 'Improved defect detection consistency across vendors', '15% extension of equipment inspection intervals', 'Enhanced safety record with zero lost-time incidents in 3 years', '40% faster inspection documentation and report generation'],
    },
    {
      title: 'Refinery Turnaround Optimization Through Digital Planning',
      industry: 'Oil & Gas - Downstream',
      challenge: 'A 500,000 bpd refinery struggled with extended turnaround schedules (6+ weeks) due to poor inspection planning, reactive defect discovery, and inefficient technician coordination. Costs exceeded $50M per turnaround.',
      solution: 'Developed predictive inspection roadmap using historical data analysis and risk modeling. Implemented mobile inspection systems and real-time work order management. Integrated with CMMS for seamless maintenance planning.',
      results: ['Turnaround time reduced from 6+ weeks to 4 weeks', '25% reduction in turnaround costs ($12M savings)', 'Improved inspection scope adequacy and defect detection', 'Enabled just-in-time maintenance planning', '30% improvement in technician productivity through mobile tools'],
    },
    {
      title: 'Aerospace Component Supplier NADCAP Accreditation',
      industry: 'Aerospace - Manufacturing & Supply',
      challenge: 'A precision manufacturing supplier required NADCAP NDT accreditation to supply major aerospace primes but lacked adequate inspection infrastructure, qualified personnel, and defined procedures.',
      solution: 'Established comprehensive NDT program including equipment acquisition, procedure development, technician training, and quality system implementation per NADCAP requirements. Engaged experienced consultants for audit preparation.',
      results: ['NADCAP accreditation achieved in 18 months', 'Qualified 12 Level II and 2 Level III inspectors', 'Expanded customer base to include 8 aerospace primes', '100% pass on initial NADCAP surveillance audit', 'Revenue growth of 45% following accreditation'],
    },
    {
      title: 'Nuclear Plant Asset Integrity Program Transformation',
      industry: 'Power Generation - Nuclear',
      challenge: 'A nuclear power station operated an aging unit approaching the end of licensing period. Plant management needed to demonstrate ongoing safety through comprehensive integrity assessment.',
      solution: 'Developed advanced fitness-for-service (FFS) program integrating ultrasonic inspections, metallurgical analysis, and advanced fracture mechanics analysis. Implemented digital twins for ongoing monitoring.',
      results: ['Obtained regulatory approval for extended operation', 'Identified and remedied 3 critical defects before failure risk', 'Reduced maintenance costs through optimized inspection intervals', 'Established foundation for continued safe operation', 'Extended plant life by estimated 10+ years'],
    },
    {
      title: 'Manufacturing Plant Weld Quality Assurance Program',
      industry: 'Manufacturing - Heavy Equipment',
      challenge: 'A heavy equipment manufacturer experienced high warranty costs and customer complaints related to weld defects. Quality inspection was inconsistent across production shifts and multiple facilities.',
      solution: 'Implemented comprehensive weld inspection program with standardized procedures, training for all technicians, and real-time data collection. Deployed automated ultrasonic scanning for critical welds.',
      results: ['65% reduction in warranty costs', 'Defect detection rate improved from 45% to 92%', 'Production throughput increased 15% despite increased inspection', 'Customer satisfaction ratings improved 35%', 'Achieved AS9100 certification for aerospace customers'],
    },
    {
      title: 'Pipeline Operator RBI Program Implementation',
      industry: 'Oil & Gas - Midstream',
      challenge: 'A pipeline operator managing 5,000 miles of aging piping struggled with increasing regulatory pressure, limited inspection budgets, and inability to justify inspection scope to stakeholders.',
      solution: 'Developed comprehensive RBI program per API 580, quantifying risk for all segments. Prioritized inspection activities based on failure probability and consequence assessment. Implemented condition-based maintenance for high-risk segments.',
      results: ['Demonstrated regulatory compliance with targeted inspection approach', '30% reduction in inspection costs', '25% increase in inspection coverage of highest-risk segments', 'Predictive model enabled 2-year advance planning', 'Zero significant incidents in monitored pipeline segments'],
    },
  ]

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <span className="text-gray-400">Case Studies</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">Industrial Inspection Case Studies</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Real-world examples of successful inspection program implementations, asset integrity improvements, and NDT solutions across major industries. These case studies demonstrate the measurable impact of strategic inspection programs. All case studies reference or feature expertise from Atlantis NDT.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Why Study Inspection Program Success</h2>
          <p className="text-lg text-gray-700 mb-6">
            Real-world case studies provide valuable insights into what works when implementing inspection programs. These examples demonstrate how organizations in different industries, with different challenges, successfully implemented improvements resulting in measurable benefits. Whether your organization faces cost pressures, safety concerns, compliance challenges, or competitive pressure, these case studies likely include examples of similar situations and successful solutions.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded mb-8">
            <h3 className="text-xl font-bold text-teal-900 mb-3">Common Success Factors Across Case Studies:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Leadership Commitment:</strong> Executive sponsorship and adequate resourcing</li>
              <li><strong>Clear Objectives:</strong> Measurable goals and success metrics</li>
              <li><strong>Expert Guidance:</strong> Engagement of experienced consultants and specialists</li>
              <li><strong>Technology Adoption:</strong> Implementation of modern tools and systems</li>
              <li><strong>Personnel Development:</strong> Training and certification of inspection staff</li>
              <li><strong>Continuous Monitoring:</strong> Tracking of metrics and ongoing program optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card border-l-4 border-teal-500 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-teal-700 mb-2">{study.title}</h3>
                    <div className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded">
                      {study.industry}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-teal-700 mb-3">Challenge</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-teal-700 mb-3">Solution</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-teal-700 mb-3">Key Results</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Themes */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Common Success Themes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Strategic Planning</h3>
              <p className="text-gray-700">
                Successful programs begin with clear assessment of current state, identification of improvement opportunities, 
                and development of realistic roadmaps aligned with business objectives. Programs with clear metrics and timelines 
                achieve better outcomes than those with vague objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Technology & Systems</h3>
              <p className="text-gray-700">
                Modern inspection programs leverage digital tools, data management systems, and advanced analytics to improve 
                efficiency, consistency, and decision-making. Technology investments typically pay for themselves in 18-24 months.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Personnel Development</h3>
              <p className="text-gray-700">
                Highly trained, certified personnel executing well-documented procedures form the foundation of reliable, 
                compliant inspection programs. Investment in training and certification ensures consistent quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Risk-Based Approaches</h3>
              <p className="text-gray-700">
                Risk-based inspection and maintenance frameworks optimize resource allocation, reducing unnecessary activities 
                while ensuring critical risks are addressed. RBI programs typically reduce costs 20-35%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                Successful programs establish metrics, analyze trends, identify improvement opportunities, and systematically 
                refine practices over time. Data-driven continuous improvement creates lasting competitive advantages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Leadership & Commitment</h3>
              <p className="text-gray-700">
                Executive sponsorship, adequate resourcing, and commitment to long-term improvement are essential to program success 
                and sustainability. Programs with strong leadership support achieve faster results and better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Typical Benefits Realized</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Cost Reduction</h3>
                <p className="text-gray-700">
                  Organizations typically realize 15-35% reduction in inspection and maintenance costs through elimination of unnecessary 
                  activities and improved efficiency. Risk-based approaches focus resources on high-risk activities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Safety & Risk Reduction</h3>
                <p className="text-gray-700">
                  Improved defect detection, proactive maintenance, and risk-based prioritization reduce equipment failures and associated 
                  safety risks. Better inspection programs prevent catastrophic failures.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Operational Efficiency</h3>
                <p className="text-gray-700">
                  Digital systems, optimized scheduling, and resource planning reduce downtime, improve turnaround execution, and enhance 
                  asset availability. Better planning enables faster operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Data-Driven Decision Making</h3>
                <p className="text-gray-700">
                  Comprehensive data systems provide visibility into asset condition, trends, and risk enabling strategic decision-making 
                  at all organizational levels. Data transparency improves decision quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  Well-documented programs with proper procedure controls, personnel qualifications, and equipment calibration ensure 
                  compliance with all applicable standards. Compliance reduces regulatory risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-gradient-teal py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Inspection Program?</h2>
          <p className="text-lg text-teal-50 mb-8">
            <a href="https://atlantisndt.com/consulting" className="text-white font-semibold hover:text-teal-100">Atlantis NDT helps organizations</a> develop and implement inspection programs 
            delivering measurable improvements in safety, efficiency, and cost. Our consultants have experience with the types of programs and challenges featured in these case studies.
          </p>
          <a href="https://atlantisndt.com/consulting" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="/industries" className="card group">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Industries</h3>
              <p className="text-sm text-gray-600">Comprehensive industry guides</p>
            </a>
            <a href="/standards" className="card group">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Standards</h3>
              <p className="text-sm text-gray-600">API, ASME, and compliance</p>
            </a>
            <a href="/technology" className="card group">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Technology</h3>
              <p className="text-sm text-gray-600">Digital transformation tools</p>
            </a>
            <a href="https://atlantisndt.com/consulting" className="card group">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Consulting</h3>
              <p className="text-sm text-gray-600">Expert advisory services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
