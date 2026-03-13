export default function Equipment() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-orange-800 mb-8">Critical Equipment Inspection</h1>
      <article className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Heat Exchanger Integrity</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat exchangers represent some of the highest-cost equipment items requiring replacement in petrochemical facilities. Tube failures compromise process efficiency, create safety hazards through product mixing, and necessitate expensive equipment removal and replacement. Eddy current testing provides rapid screening of accessible tube bundles, with sensitivity to both internal and external corrosion. Remote field eddy current enables inspection when direct access is impossible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tube plugging decisions significantly impact equipment availability and efficiency. Systematic eddy current inspection protocols identify tubes approaching minimum thickness before leakage occurs. When coupled with operating temperature monitoring and process chemistry trending, eddy current results enable predictive maintenance replacing equipment scheduled for shutdown rather than after emergency failures. <a href="https://atlantisndt.com/erp" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT ERP software</a> tracks tube inspection history, plugging progression, and performance trends to optimize maintenance decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shell-side inspection requires different strategies. Flow-assisted corrosion in two-phase regions causes localized metal loss. Ultrasonic scanning identifies thin areas requiring closer evaluation. Hydrostatic testing after major cleaning operations confirms integrity at elevated design pressures. <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT consulting services</a> develop comprehensive assessment approaches maximizing equipment utilization while maintaining safety margins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Fired Heater Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Furnace tubes in fired heaters carry hot, high-pressure fluid through intense thermal gradients. Metal temperatures may reach 400°C or higher while external air at 150°C or lower cools the outer surface. Thermal cycling stresses, combined with pressure cycling from process unit startups and shutdowns, cause creep damage and fatigue failures. Radiographic examination of tube welds combined with creep rupture damage assessment techniques establish remaining service life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ultrasonic thickness scanning of heater tube walls identifies erosion and corrosion damage not visible through radiography. Parametric wall thickness measurements combined with metallurgical analysis of historical samples establish minimum safe operating pressures. <a href="https://atlantisndt.com/training" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDT training programs</a> prepare inspectors for complex assessment of furnace condition, understanding high-temperature material behavior and failure mechanics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refractory lining condition directly impacts tube life through effects on heat transfer efficiency and temperature distribution. Thermal imaging combined with visual inspection identifies refractory degradation zones. Assessment of refractory condition integrated with tube inspection results enables holistic heater performance evaluation and planning of refurbishment timing aligned with facility maintenance schedules.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Vessel and Reactor Inspection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Distillation towers, reactors, and pressure vessels require periodic inspection to verify wall integrity and detect support structure corrosion. Phased array ultrasonic testing enables rapid full-surface scanning identifying metal loss and crack indications. Radiographic examination documents weld integrity, particularly at critical attachment points where vessel nozzles connect to main shells.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Internal inspection accesses limited to small openings require deployment of remote inspection techniques. Borescope examination through inspection ports reveals internal component condition, trays, support structures, and upper shell interior. Magnetic particle testing at accessible internal welds confirms weld integrity where external examination is not feasible. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">Digital twin solutions</a> integrate vessel inspection data with process operational parameters and historical trends to assess remaining service life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Corrosion under insulation (CUI) represents a particular challenge in older facilities with extensive thermal insulation covering process equipment. Thermographic scanning with careful interpretation identifies areas of potential CUI development. Targeted ultrasonic examination at identified zones confirms metal loss extent. Systematic CUI management programs prevent catastrophic failures by identifying and addressing problem areas before perforation occurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Piping System Integrity</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Process piping in petrochemical facilities carries products under pressure through complex networks. Erosion-corrosion at pipe bends and elbows, localized corrosion in stagnant sections, and stress corrosion cracking in austenitic materials represent typical failure mechanisms. Systematic ultrasonic wall thickness measurements at critical locations establish baseline conditions and enable trending for accelerated corrosion rate detection.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Magnetic particle examination of pipe welds detects surface-breaking defects from fabrication or in-service initiation. Radiographic examination documents weld quality at highest-consequence connections. Risk-based piping inspection programs prioritize monitoring of systems with high consequence potential, such as those connected to fired heaters, high-pressure reactors, or hazardous chemical handling. <a href="https://ndt-connect.com" rel="noopener" className="text-orange-600 hover:text-orange-800 font-semibold">NDTConnect platform</a> tracks piping inspection data and supports systematic asset management across distributed facility networks.
          </p>
        </section>
      </article>
    </div>
  );
}
