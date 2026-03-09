export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuclear Facility NDT Excellence</h1>
        <p className="text-lg text-yellow-100">Safety-Critical Inspection for Reactor Systems</p>
      </div>

      <article className="prose prose-lg max-w-none mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">NDT in Nuclear Operations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nuclear power facilities represent humanity's most stringently regulated industrial operations, with inspection and safety requirements exceeding those of conventional industrial equipment. The unforgiving consequences of equipment failures demand NDT programs of exceptional sophistication and rigor. Regulatory frameworks including 10 CFR Parts 50 and 100 establish mandatory inspection requirements for critical components, with standards such as ASME Section XI establishing specific methodologies and acceptance criteria.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The primary coolant system, including reactor vessel, piping, pumps, and steam generators, operates under extreme conditions that stress materials continuously. Radiation exposure embrittles vessel steel, potentially altering fracture behavior. Thermal cycling, pressure transients, and residual manufacturing stresses combine to create crack initiation and growth environments requiring vigilant monitoring. Sophisticated ultrasonic techniques enable detection of flaws smaller than those that would pose practical risk, establishing safety margins vastly exceeding conventional industrial practice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">NDT consulting services</a> specialized in nuclear applications bring understanding of ASME Section XI requirements, regulatory acceptance criteria, and plant-specific licensing basis documents. Strategic NDT planning ensures regulatory compliance while optimizing equipment availability and operational flexibility. <a href="https://atlantisndt.com/training" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">NDT training programs</a> specific to nuclear operations prepare personnel for the demanding qualification and certification requirements of utility operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Reactor Vessel Examination</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The reactor pressure vessel represents the ultimate barrier containing the nuclear core. ASME Section XI and 10 CFR 50 establish comprehensive inspection requirements, including specific examination frequencies and acceptance criteria. All potential beltline welds, which experience the highest neutron fluence and greatest radiation embrittlement effects, require periodic ultrasonic examination. Advanced phased array ultrasonic testing with time-of-flight diffraction enables sensitive flaw detection and characterization.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vessel head penetration systems require periodic inspection addressing stress corrosion cracking and manufacturing flaws. Lessons learned from fleet experiences have driven enhanced inspection requirements and alloy improvements. Phased array ultrasonics combined with radiographic examination documents penetration weld integrity. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">Digital twin solutions</a> integrate inspection data with neutron fluence calculations and fracture mechanics analysis to assess vessel continued operability and support license renewal decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Radiation embrittlement assessment combines ultrasonic testing with metallurgical surveillance programs monitoring actual vessel material property changes. Charpy testing of surveillance specimens extracted from reactor vessels provides direct evidence of embrittlement trends. <a href="https://atlantisndt.com/api-653-certification" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">Advanced certification</a> of NDT personnel ensures inspectors maintain current knowledge of evolving Section XI requirements and industry experience with vessel degradation mechanisms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Primary System Piping Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reactor coolant piping carries extremely hot, high-pressure water or liquid sodium, creating conditions that challenge conventional inspection methodologies. Stress corrosion cracking represents the primary threat, requiring ultrasonic examination sensitive to extremely small flaws. All butt welds, tee connections, and branch welds within the primary system boundary require baseline examination and periodic reinspection per Section XI requirements.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Phased array ultrasonic techniques with electronic beam steering enable rapid examination of piping welds from external access, without requiring specialized fixtures or direct coupling surfaces. Time-of-flight diffraction (TOFD) provides supplementary flaw sizing information, supporting defensible flaw evaluation decisions. <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">NDTConnect platform</a> manages complex piping inspection data across multiple reactor units, supporting systematic trending and remaining-life assessment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dissimilar metal welds (DMW), where ferritic and austenitic materials are joined, exhibit particular susceptibility to stress corrosion cracking. Enhanced examination frequencies and advanced ultrasonic methodologies address this elevated-risk category. Fleet-wide experience sharing and cooperative NDT programs enable continuous improvement of crack detection capability through probabilistic analysis and inspection protocol optimization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Steam Generator and Auxiliary Equipment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pressurized water reactor (PWR) steam generators represent massive, economically critical equipment requiring specialized inspection. Tube degradation from stress corrosion cracking, denting, and fatigue damage necessitates systematic eddy current examinations establishing baseline conditions and trending degradation progression. Regulatory limits on plugged tube percentages drive replacement planning and operation limitation decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boiling water reactor (BWR) internal components including shrouds, core shroud welds, and structural components require periodic in-service inspection through available access points. <a href="https://atlantisndt.com" rel="noopener" className="text-yellow-600 hover:text-yellow-800 font-semibold">Atlantis NDT</a> provides specialized expertise in these demanding inspection environments, supporting the industry's commitment to safe extended operations. Regulatory liaison and technical defense support ensure that inspection findings translate to defensible operational decisions meeting all safety and licensing requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive NDT programs in nuclear facilities establish safety baselines and document continued integrity maintenance over decades of operation. These programs represent the ultimate expression of NDT science, employing the most advanced techniques and rigorous quality standards to protect public safety in the most risk-sensitive industrial application.
          </p>
        </section>
      </article>
    </div>
  );
}
