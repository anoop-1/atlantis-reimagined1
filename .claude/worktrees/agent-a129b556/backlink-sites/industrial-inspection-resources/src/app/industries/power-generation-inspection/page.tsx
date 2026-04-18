import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power Plant Inspection Guide | Boilers, Turbines & Nuclear Systems',
  description: 'Comprehensive guide to power generation facility inspection including boiler tubes, turbine blades, steam systems, nuclear inspection, and preventive maintenance.',
  keywords: 'power plant inspection, boiler inspection, turbine inspection, nuclear NDT, power generation maintenance',
}

export default function PowerGenerationInspectionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Power Generation Facility Inspection Guide',
    description: 'Expert guidance on NDT and inspection for thermal, nuclear, and renewable power systems',
    author: { '@type': 'Organization', name: 'Industrial Inspection Resources' },
  }

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/industries">Industries</a> / <span className="text-gray-400">Power Generation</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Power Generation Inspection Excellence</h1>
          <p className="text-xl text-teal-50">Master inspection techniques for boilers, turbines, steam systems, and nuclear facilities powering modern economies.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>Power Generation Facility Inspection</h2>
            <p>
              Power generation facilities represent some of the most critical and capital-intensive infrastructure worldwide. Reliable inspection 
              programs ensure safe, efficient, and economical operation while maximizing asset life and minimizing unplanned outages.
            </p>

            <h2>Boiler Inspection Programs</h2>
            <p>
              Steam boilers in coal, natural gas, and biomass-fired power plants operate continuously at high pressure and temperature, making 
              them subject to multiple degradation mechanisms.
            </p>

            <h3>Boiler Tube Inspection</h3>
            <p>
              Boiler tubes are critical components subject to internal corrosion, external corrosion, fatigue, and creep. Comprehensive tube 
              inspection includes:
            </p>
            <ul>
              <li><strong>Ultrasonic Thickness Measurement:</strong> Wall thickness trending to detect corrosion and erosion rates</li>
              <li><strong>Eddy Current Testing:</strong> Detection of small cracks and anomalies in tube walls</li>
              <li><strong>Remote Borescope Inspection:</strong> Visual examination of internal surfaces and deposits</li>
              <li><strong>In-Situ Metallography:</strong> Material property assessment and remaining life determination</li>
            </ul>

            <p>
              Risk-based inspection programs prioritize high-temperature, high-pressure tubes in the radiant section where degradation occurs 
              most rapidly. Historical data guides sample selection for targeted examination.
            </p>

            <h3>Refractory & Insulation Assessment</h3>
            <p>
              Boiler refractory linings experience thermal stress, chemical attack, and mechanical wear. Thermographic inspection detects 
              hot spots indicating refractory loss or deterioration. Borescope examination of exposed surfaces verifies coating condition.
            </p>

            <h3>Boiler Casing & Structural Components</h3>
            <p>
              External boiler casings, headers, and support structures undergo ultrasonic thickness surveys and visual inspection for corrosion 
              and mechanical damage. Stress analysis validates component remaining service life under continued operation.
            </p>

            <h2>Steam Turbine Inspection</h2>
            <p>
              Steam turbines convert thermal energy to mechanical energy driving electrical generators. Blade failures and rotor degradation 
              can cause catastrophic damage and extended outages.
            </p>

            <h3>Blade Condition Assessment</h3>
            <p>
              Turbine blades experience creep, fatigue, and erosion from steam impingement. Inspection techniques include:
            </p>
            <ul>
              <li><strong>Eddy Current Inspection:</strong> Detection of stress corrosion cracks and fatigue cracks in blade roots and serrations</li>
              <li><strong>Ultrasonic Thickness:</strong> Blade tip measurement to quantify erosion</li>
              <li><strong>Borescope Examination:</strong> Visual assessment of blade surface condition, deposits, and damage</li>
              <li><strong>Vibration Analysis:</strong> Blade natural frequency measurement to detect cracks and loose components</li>
            </ul>

            <h3>Rotor Inspection</h3>
            <p>
              Turbine rotors experience low-cycle fatigue and creep under sustained high-temperature operation. Periodic rotor inspections 
              include magnetic particle inspection of critical stress areas and ultrasonic examination for internal defects.
            </p>

            <h3>Bearing & Seal Assessment</h3>
            <p>
              Turbine bearings and seals wear through operational life. Oil analysis and vibration monitoring detect developing problems before 
              failure. Periodic seal replacement and bearing clearance verification maintain optimal performance.
            </p>

            <h2>Generator Inspection</h2>
            <p>
              Electrical generators convert mechanical rotation to electrical power. Key inspection focuses include:
            </p>
            <ul>
              <li><strong>Winding Insulation:</strong> Dielectric breakdown testing and moisture content analysis</li>
              <li><strong>Rotor Condition:</strong> Visual inspection and ultrasonic examination for cracks</li>
              <li><strong>Bearing Condition:</strong> Oil analysis and vibration trending</li>
              <li><strong>Cooling System:</strong> Hydrogen pressure and purity monitoring in hydrogen-cooled machines</li>
            </ul>

            <h2>Nuclear Facility Inspection</h2>
            <p>
              Nuclear power plants operate under the world's most stringent regulatory oversight with rigorous inspection and maintenance requirements.
            </p>

            <h3>Reactor Vessel Inspection</h3>
            <p>
              Reactor vessels experience neutron embrittlement and stress corrosion cracking risk. Mandatory inspection programs include:
            </p>
            <ul>
              <li>Ultrasonic examination of vessel walls and welds</li>
              <li>Visual inspection of accessible internal surfaces</li>
              <li>Metallurgical examination of representative material samples</li>
              <li>Fracture mechanics analysis to establish safe operating limits</li>
            </ul>

            <h3>Piping System Inspection</h3>
            <p>
              Primary and secondary piping systems operate under high pressure and temperature. Inspection includes ultrasonic thickness 
              measurement, eddy current weld inspection, and periodic in-service inspections to detect and evaluate stress corrosion cracks.
            </p>

            <h3>Steam Generator Inspection</h3>
            <p>
              Pressurized water reactor (PWR) steam generators are susceptible to tube degradation through stress corrosion cracking, 
              crevice corrosion, and deposits. Routine eddy current inspections detect tube anomalies, guiding plugging and repair decisions.
            </p>

            <h2>Preventive Maintenance & Condition-Based Monitoring</h2>
            <p>
              Modern power plants employ integrated condition monitoring programs combining periodic inspections with continuous online monitoring:
            </p>

            <h3>Online Monitoring Systems</h3>
            <ul>
              <li><strong>Temperature Monitoring:</strong> Early detection of fouling and performance degradation</li>
              <li><strong>Pressure Trending:</strong> Identification of leaks and system anomalies</li>
              <li><strong>Vibration Analysis:</strong> Bearing wear detection and mechanical anomaly identification</li>
              <li><strong>Oil Analysis:</strong> Wear debris and contamination detection in bearing and seal systems</li>
            </ul>

            <h3>Reliability-Centered Maintenance</h3>
            <p>
              Risk-based maintenance optimization balances safety requirements, regulatory mandates, and economic considerations. Failure mode 
              and effects analysis (FMEA) guides inspection frequency and method selection for critical equipment.
            </p>

            <h2>Renewable Power Generation Inspection</h2>
            <p>
              Wind turbines, solar installations, and hydroelectric facilities present specialized inspection challenges:
            </p>

            <h3>Wind Turbine Inspection</h3>
            <ul>
              <li>Blade inspection for lightning damage, fatigue cracks, and internal delamination</li>
              <li>Gearbox condition monitoring through oil analysis and vibration trending</li>
              <li>Bearing inspection and lubrication assessment</li>
              <li>Electrical generator winding inspection</li>
            </ul>

            <h3>Hydroelectric Facility Inspection</h3>
            <ul>
              <li>Dam structural integrity assessment using ultrasonic and visual inspection</li>
              <li>Turbine runner and blade inspection for cavitation damage and corrosion</li>
              <li>Penstock pipeline integrity through in-line inspection and thickness measurement</li>
            </ul>

            <h2>Regulatory Framework</h2>
            <p>
              Power generation facility inspection operates under multiple regulatory frameworks including ASME Boiler and Pressure Vessel Code, 
              IEEE electrical standards, and nuclear regulatory commission requirements. Compliance verification through third-party inspection 
              is mandatory.
            </p>

            <p>
              Expert guidance on developing compliant inspection programs is available through 
              <a href="https://atlantisndt.com/consulting">Atlantis NDT consulting services</a> with extensive power generation experience.
            </p>

            <h2>Outage Planning & Execution</h2>
            <p>
              Planned maintenance outages (refueling, maintenance, and inspection shutdowns) occur on fixed schedules. Efficient execution requires 
              detailed pre-outage planning, resource coordination, and rigorous scheduling to minimize downtime and maximize inspection scope.
            </p>

            <h2>Conclusion</h2>
            <p>
              Comprehensive inspection and preventive maintenance programs are essential to power generation facility reliability, safety, and 
              economics. By combining advanced NDT techniques, condition monitoring technologies, and industry expertise, operators optimize asset 
              life while minimizing safety risk and unplanned outages.
            </p>

            <p>
              For expert guidance on power generation inspection programs, certification, and training, 
              <a href="https://atlantisndt.com/consulting">contact Atlantis NDT specialists</a> with proven expertise across all power generation technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-teal-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/technology/digital-twins-asset-management" className="card group">
              <div className="text-3xl mb-3">🔷</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Digital Twins</h3>
              <p className="text-sm text-gray-600">Predictive maintenance and asset management</p>
            </a>
            <a href="/standards/asme-codes-ndt" className="card group">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">ASME Standards</h3>
              <p className="text-sm text-gray-600">Boiler, pressure vessel, and piping codes</p>
            </a>
            <a href="/case-studies" className="card group">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-teal-700 group-hover:text-teal-900">Case Studies</h3>
              <p className="text-sm text-gray-600">Power plant inspection success stories</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Optimize Your Power Generation Inspection</h2>
          <p className="text-lg text-gray-700 mb-8">
            Atlantis NDT provides specialized consulting for boiler, turbine, and nuclear facility inspection programs.
          </p>
          <a href="https://atlantisndt.com/consulting" className="btn-primary">
            Schedule Expert Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
