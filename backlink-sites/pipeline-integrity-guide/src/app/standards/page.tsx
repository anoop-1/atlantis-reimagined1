export default function Standards() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-800 mb-8">Inspection Standards and Regulations</h1>

      <article className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">ASME B31 Code Framework</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ASME B31 code series establishes baseline design, construction, and operational requirements for pressure piping systems. ASME B31.8 specifically governs gas transmission pipelines, establishing comprehensive standards for materials, design, fabrication, inspection, and testing. The code recognizes inspection frequency requirements based on operating pressure, material properties, and geographic classification relative to population density and environmental sensitivity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            ASME B31.4 addresses liquid transportation pipelines, including crude oil, refined products, and other liquids. This standard requires inspections at defined intervals with methodologies dependent on pipeline category and established risk factors. Both standards now incorporate risk-based inspection frameworks that allow operators to demonstrate equivalent safety through analytical approaches rather than rigid inspection calendars.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Section VIII, Division 1 of the ASME Boiler and Pressure Vessel Code addresses pressure vessel design and construction, with applicability to pipeline components including separators, dehydrators, and storage tanks. In-service inspection programs for these components typically align with API standards and CDP (Compliance Data Program) requirements. <a href="https://ndt-connect.com" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDTConnect platform</a> centralizes documentation of compliance with these complex regulatory frameworks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">DOT and Regulatory Requirements</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The U.S. Department of Transportation Pipeline and Hazardous Materials Safety Administration (PHMSA) establishes mandatory safety standards for pipeline operations. 49 CFR Part 192 specifies gas pipeline requirements, while Part 195 addresses hazardous liquid pipelines. These regulations mandate integrity management programs that include threat assessment, risk ranking, inspection methodology selection, and remediation response procedures. Operators must conduct inspections using DOT-approved methodologies and maintain detailed records of inspection execution and results.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            PHMSA regulations establish specific requirements for inspections in high-consequence areas, with mandatory periodic assessment using in-line inspection or hydrostatic testing. The integrity management framework recognizes pigging, direct examination via excavation, and pressure testing as acceptable methodologies, with specific performance standards for each approach. Recent amendments have incorporated risk-based decision-making frameworks that allow sophisticated operators to optimize inspection strategies while maintaining equivalent or superior safety.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Canadian interprovincial pipelines operate under CSA Z662 Standard, establishing comparable requirements with Canadian-specific risk assessment and inspection protocols. Provincial regulations in Alberta, British Columbia, and other jurisdictions often exceed federal minimums, requiring operators to implement the most stringent applicable standards across regulated segments. <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDT consulting services</a> guide operators through multi-jurisdictional compliance complexity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">API 579 Fitness-for-Service Standard</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            API 579 provides the internationally recognized framework for assessing whether detected defects pose unacceptable risk or allow continued operation pending future intervention. The standard systematizes fitness-for-service analysis by establishing three assessment levels with increasing analytical rigor corresponding to increasing defect severity. Level 1 assessments apply conservative screening criteria based on defect dimensions alone, representing the fastest and most conservative evaluation approach.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Level 2 assessments apply established calculation methodologies that consider stress state, material properties, and defect dimensions to evaluate whether continued operation is justified. For pipeline applications, Level 2 typically incorporates DNV, R6, or RSTRENG methodologies depending on defect morphology and operator preference. Level 3 assessments employ advanced fracture mechanics analysis, detailed finite element modeling, and operational history to support continuation of service for significant indications where Level 2 assessment might require remediation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            API 579 acceptance criteria vary with operating pressure, material grade, and defect orientation, reflecting variations in fracture behavior under different conditions. Competent engineers familiar with applied fracture mechanics and materials science conduct Level 2 and 3 assessments, often with peer review for high-consequence decisions. <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">Atlantis NDT</a> provides engineering analysis supporting fitness-for-service decisions across complex defect scenarios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Quality Assurance and Personnel Qualification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inspection personnel must achieve specific certifications to ensure technical competency and standardized methodology application. ASNT certification, available at three increasing levels, requires demonstration of theoretical knowledge, practical skill, and field experience. Certification maintenance demands continuing education to remain current with evolving standards and technologies. PCN certification, European standard, establishes comparable requirements recognized across international markets.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inspection procedures must address specific pipeline characteristics including diameter, material grade, operating pressure, and environmental conditions. Approved procedures must demonstrate adequate sensitivity through development of artificial defects or reference samples simulating realistic defect conditions. Equipment calibration, performed at defined intervals, ensures that detection and measurement systems remain within specified performance parameters.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Third-party audits and witnessed inspections validate that operators maintain compliance with established procedures and quality standards. <a href="https://atlantisndt.com/training" rel="noopener" className="text-teal-600 hover:text-teal-800 font-semibold">NDT training programs</a> maintain certification accuracy and ensure inspectors understand current standards and best practices applicable to their specific responsibilities.
          </p>
        </section>
      </article>
    </div>
  );
}
