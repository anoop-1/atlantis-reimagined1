export default function CaseStudies() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-800 mb-8">Pipeline NDT Case Studies</h1>

      <article className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Subsea Pipeline Integrity Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A major Gulf of Mexico operator faced regulatory pressure to demonstrate integrity of aging subsea transmission pipelines operating at high pressure through seismically active zones. Standard in-line inspection proved problematic due to internal corrosion product deposits requiring pig bypass or intervention. The operator implemented a comprehensive multi-phase assessment approach combining remote ROV-based external visual inspection, guided wave ultrasonics from external access points, and targeted external ultrasonic wall thickness scanning at identified concern areas.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This integrated approach, guided by <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDT consulting services</a> with subsea specialty, enabled defensible risk-based decisions without pipeline decommissioning. The operator identified specific sections requiring intervention and scheduled targeted remediation during planned maintenance windows. The program demonstrated regulatory compliance while deferring expensive replacement of approximately 40% of assessed segments by 5-10 years, resulting in capital savings exceeding $50 million.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">Digital twin solutions</a> enabled integration of survey data with oceanographic information, historical failure modes, and failure consequence analysis to develop risk-informed inspection scheduling. Subsequent inspections focused on highest-consequence sections, optimizing resource allocation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Welds Requiring Advanced Characterization</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A North American gas transmission operator discovered multiple girth welds with indications characterized as possible toe cracks through conventional ultrasonic examination. The indications were too small to characterize via radiography yet large enough to trigger conservative API 579 Level 1 screening criteria requiring immediate remediation. Addressing these welds would have required extensive excavation, cutting, repair, and pressure testing—a multi-million-dollar expense across the network.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Advanced phased array ultrasonic testing with TOFD sizing confirmed that apparent toe cracks were actually noise artifacts or harmless surface porosity rather than through-thickness defects. Full matrix capture processing with total focusing method provided three-dimensional defect visualization at unprecedented clarity, enabling confident rejection of defect indication. The operator prepared comprehensive technical documentation supporting API 579 Level 2 fitness-for-service analysis demonstrating safety margins exceeded acceptance criteria.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com/training" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDT training programs</a> for operator personnel emphasized advanced ultrasonic signal interpretation, enabling in-house validation of consulting recommendations. This investment in personnel capability improved future inspection efficiency and enhanced technical competency across the operator's organization.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Risk-Based Inspection Program Implementation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An operator of 8,000 kilometers of crude oil transmission pipelines faced regulatory compliance challenges under newly implemented PHMSA integrity management requirements. Traditional fixed-interval inspection philosophy would have required expenditure of $200+ million to meet regulatory timelines while providing no differentiation between high-consequence segments and low-risk rural sections.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The operator implemented a sophisticated risk-based inspection (RBI) program combining threat modeling, consequence assessment, and performance data analysis to prioritize segments for inspection. High-consequence urban areas received priority pigging before lower-consequence segments. <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDTConnect platform</a> enabled centralized compilation of pigging data, excavation findings, and historical defect information to continuously refine risk models.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over five years, the program identified and remediated numerous defects in high-consequence areas while deferring inspection of stable segments identified by predictive models as low-probability-of-failure. The operator achieved regulatory compliance with a 65% reduction in total inspection costs compared to fixed-interval philosophy. <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">Atlantis NDT</a> provided ongoing consulting support for program refinement and regulatory defense.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Internal Corrosion Assessment and Remediation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A natural gas transmission pipeline exhibited accelerated internal corrosion in specific segments due to water condensation and inadequate dehydration in higher-elevation sections. Pigging results revealed non-uniform wall loss with isolated pinhole-like defects threatening pressure containment. The operator commissioned comprehensive assessment combining laboratory analysis of corrosion byproducts, detailed pigging data analysis, and field ultrasonic scanning at identified concern areas.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Root cause analysis identified inadequate dehydration capacity combined with seasonal pressure variations that allowed water accumulation at low points. The operator implemented enhanced dehydration procedures and installed cathodic protection at identified susceptible segments. <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDT consulting services</a> developed acceptance criteria for residual defects and monitoring protocols for segments where repair was deferred pending implementation of preventative measures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Within two years of implementing corrective actions, subsequent inspection showed no new defect initiation and stabilization of metal loss in previously affected segments. This case demonstrates the value of combining NDT findings with root cause analysis to implement sustainable solutions rather than merely addressing symptoms through defect remediation alone.
          </p>
        </section>
      </article>
    </div>
  );
}
