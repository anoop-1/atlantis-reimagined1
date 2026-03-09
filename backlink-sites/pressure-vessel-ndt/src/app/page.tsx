export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Pressure Vessel Integrity Assurance</h1>
        <p className="text-lg text-red-100">ASME Section VIII Compliance and Advanced NDT</p>
      </div>

      <article className="prose prose-lg max-w-none mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Pressure Vessel Fundamentals</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pressure vessels represent critical infrastructure in power generation, petrochemical processing, chemical manufacturing, and numerous other industries. Operating under significant internal or external pressures, these vessels must maintain structural integrity throughout their design lives while containing hazardous or valuable fluids safely. ASME Boiler and Pressure Vessel Code Section VIII establishes design, construction, and inspection requirements that have become the global standard for pressure equipment safety.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pressure vessels experience degradation through corrosion, fatigue stress from pressure cycling, creep at elevated temperatures, and loss of material from impact or manufacturing defects. Effective NDT programs detect these degradation mechanisms before they compromise vessel integrity, ensuring safe continued operation or enabling timely planned replacement before unexpected failures occur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">NDT consulting services</a> help operators develop comprehensive inspection strategies addressing ASME Section VIII requirements while optimizing cost and operational efficiency. <a href="https://atlantisndt.com/training" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">NDT training programs</a> ensure personnel understand ASME requirements and inspection methodologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Construction and Fabrication Inspection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ASME Section VIII Division 1 establishes comprehensive construction requirements including material specifications, design calculations, welding procedures, and fabrication quality assurance. Radiographic examination of critical welds confirms quality to Section V standards. Ultrasonic testing detects internal defects that radiography might miss. Hydrostatic testing confirms structural adequacy at design pressure before vessel is placed in service.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Material certification documenting properties and traceability supports defensible claims of compliance with construction standards. Welding procedures qualified under ASME Section IX establish baseline construction quality. <a href="https://atlantisndt.com/radiographic-testing" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">Radiographic testing</a> provides definitive evidence of weld quality. Comprehensive construction inspection programs prevent in-service failures originating from fabrication deficiencies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat treatment procedures after welding relieve residual stresses and optimize material properties for service conditions. NDT verification that heat treatment was properly executed establishes confidence that fabricated vessels meet design intent for strength and toughness.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">In-Service Inspection and Maintenance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In-service inspection programs establish baseline conditions and detect degradation requiring corrective action. Phased array ultrasonic examination combined with radiographic verification of critical welds documents vessel structural integrity. Wall thickness measurement via ultrasonics identifies corrosion and metal loss from operating environment exposure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Risk-based inspection frameworks optimize inspection frequency based on equipment consequence and failure probability. High-consequence vessels receive intensive inspection while lower-risk equipment operates under relaxed inspection schedules. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">Digital twin solutions</a> integrate inspection data with operating history to establish degradation baselines and predict remaining useful life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive pressure vessel inspection programs prevent failures with catastrophic consequences including product loss, environmental contamination, personnel injury, and business interruption. Investment in effective NDT capabilities demonstrates management commitment to operational safety and regulatory compliance.
          </p>
        </section>
      </article>
    </div>
  );
}
