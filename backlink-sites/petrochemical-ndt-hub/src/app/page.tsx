export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Petrochemical Equipment Integrity</h1>
        <p className="text-lg text-orange-100">Advanced NDT Solutions for Refining and Chemical Processing</p>
      </div>

      <article className="prose prose-lg max-w-none mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">NDT in Petrochemical Operations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Petrochemical facilities represent some of the most demanding environments for non-destructive testing. Operating under high pressures, elevated temperatures, corrosive chemical environments, and continuous 24/7 operations, the equipment systems require vigilant monitoring to prevent catastrophic failures. Effective NDT programs in these facilities directly correlate with operational reliability, safety record improvement, and regulatory compliance achievement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refineries process crude oil and feedstocks through multiple distillation, conversion, and treating units simultaneously. Each unit contains numerous heat exchangers, reactors, fractionators, and separation vessels operating at different pressures and temperatures. The complexity of these interconnected systems means that failure of a single critical component can cascade through multiple units, causing expensive shutdowns and potential safety incidents affecting workers and neighboring communities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT consulting services</a> specialized in petrochemical applications bring understanding of these complex failure mechanisms, regulatory requirements specific to process industries, and equipment design standards that govern typical facility operations. Strategic NDT programs prevent unplanned shutdowns that might cost facilities $500,000 to $5 million per day depending on operational complexity and product values.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Critical Equipment Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat exchanger tube systems represent particularly critical infrastructure requiring specialized NDT approaches. Tube-side corrosion, scaling, and erosion cause wall thinning in economically critical equipment. Shell-side corrosion in two-phase flow environments requires different assessment methodologies. Eddy current testing provides rapid screening of accessible tube bundles, with remote field eddy current enabling inspection even when tubes cannot be accessed directly. Combined with water wall thickness measurement via conventional ultrasonics, comprehensive heat exchanger assessment ensures operators maintain safe operating margins.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reactor vessels and catalytic units require periodic inspection to detect erosion-corrosion damage, localized corrosion, and stress corrosion cracking. Phased array ultrasonic testing combined with radiographic documentation provides comprehensive assessment of vessel integrity. In-service cleaning procedures followed by advanced NDT techniques reveal conditions obscured by operating deposits, enabling accurate remnant life calculations essential for capital planning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pipe rack systems, elevated processing lines, and interconnecting piping require systematic assessment through combination of visual inspection, magnetic particle testing at welds, and ultrasonic wall thickness trending at critical locations. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">Digital twin solutions</a> integrate decades of inspection history, operating conditions, and predictive models to optimize maintenance schedules and identify emerging problems before they impact production.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Corrosion Monitoring and Trending</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Long-term wall thickness trending in critical process lines provides the data necessary to predict remaining service life and optimize replacement timing. Systematic ultrasonic measurements at consistent locations over multiple years establish corrosion rates, allowing calculation of years remaining before equipment reaches minimum safe thickness. This predictive approach reduces unplanned maintenance emergencies and enables integration of replacements into planned turnarounds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Erosion-corrosion in process lines carrying slurries, multiphase flows, or high-velocity streams exhibits non-uniform metal loss. Traditional wall thickness measurements at arbitrary locations may miss localized thin areas. Advanced scanning approaches combined with 3D modeling techniques identify erosion patterns, enabling accurate assessment of minimum remaining thickness. <a href="https://atlantisndt.com/erp" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT ERP software</a> systematizes this data collection, establishing baselines and automatically flagging measurements indicating accelerated corrosion rates requiring investigation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stress corrosion cracking in austenitic materials represents a particular challenge in petrochemical environments. Chemical composition, temperature, stress state, and metallurgical condition combine to create initiation and propagation conditions. Phased array ultrasonic testing with time-of-flight diffraction provides sensitive crack detection and sizing. <a href="https://atlantisndt.com/training" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT training programs</a> ensure that facility personnel understand these mechanisms and can identify process changes that might accelerate stress corrosion initiation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Regulatory Integration and Documentation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Petrochemical facilities operate under Process Safety Management (PSM) regulations that mandate mechanical integrity programs including inspection, testing, and preventative maintenance. OSHA PSM requirements establish baseline inspection frequencies and documentation requirements. Facilities may implement risk-based inspection frameworks that reduce inspection frequency for low-consequence equipment while intensifying assessment of equipment that could impact public safety if failures occur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            EPA RMP (Risk Management Plan) regulations establish consequence-based risk management requirements for facilities handling threshold quantities of regulated chemicals. NDT programs support RMP compliance by providing technical data demonstrating that critical equipment maintaining integrity within acceptable parameters. <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDTConnect platform</a> enables centralized documentation meeting PSM and RMP regulatory requirements across complex facility networks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive NDT programs demonstrate management commitment to safety, reduce regulatory inspection burdens, and establish technical baselines supporting defensible operational decisions. Facilities achieving excellence in NDT execution consistently demonstrate superior safety records and sustained operational availability that directly impacts profitability and stakeholder confidence.
          </p>
        </section>
      </article>
    </div>
  );
}
