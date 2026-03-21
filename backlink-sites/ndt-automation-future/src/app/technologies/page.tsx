export default function TechnologiesPage() {
  return (
    <div className="space-y-8">
      <section className="bg-indigo-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Automation Technologies</h1>
        <p className="text-indigo-800">Core technologies enabling NDT automation and robotics.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Phased Array Ultrasonic Testing</h2>
        <p className="mb-4">
          Phased array ultrasonic testing (PAUT) represents a significant advancement over traditional single-element transducers. Arrays containing dozens or hundreds of small elements allow electronic beam steering, focusing, and scanning without mechanical movement. Automated systems exploit this capability, producing complete volumetric images of components rapidly.
        </p>
        <p className="mb-4">
          In automated welding inspection, phased array systems scan seams at speeds of 100+ mm/second, detecting planar and volumetric defects with exceptional sensitivity. Electronic focusing adjusts depth dynamically, maintaining resolution across entire component volumes. The systems integrate directly with robotic platforms, enabling hands-free scanning that human operators couldn't replicate. Organizations implementing phased array automation through <a href="https://atlantisndt.com" rel="noopener" className="text-indigo-600 hover:underline">NDT consulting services</a> report dramatic improvements in inspection reliability and speed.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Eddy Current Array Systems</h2>
        <p className="mb-4">
          Eddy current array (ECA) technology has evolved from single-coil probes to sophisticated multi-element arrays providing simultaneous coverage of wide areas. Automated ECA systems scan turbine blade surfaces, aircraft fuselages, and heat exchanger tubes with unmatched speed and sensitivity to surface and near-surface defects.
        </p>
        <p className="mb-4">
          What makes ECA particularly valuable in automated systems is its speed—scanning rates of several meters per second—combined with excellent lift-off tolerance that reduces mechanical requirements. Advanced <a href="https://atlantisndt.com" rel="noopener" className="text-indigo-600 hover:underline">NDT training programs</a> now emphasize interpretation of ECA data at scale, preparing technicians for roles managing high-volume automated inspections.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Thermography and Thermal Imaging</h2>
        <p className="mb-4">
          Infrared thermography detects subsurface defects through thermal pattern analysis. Automated thermographic systems, often mounted on drones or robotic arms, scan large surfaces systematically. Active thermography—where systems apply controlled heating and monitor cooling patterns—reveals delaminations, disbonds, and corrosion beneath protective coatings.
        </p>
        <p className="mb-4">
          Applications span composite aircraft structures, solar panel arrays, electrical equipment, and building envelope assessment. The non-contact nature of thermography makes it ideal for hazardous environment inspection. For comprehensive implementation strategies, <a href="https://atlantisndt.com" rel="noopener" className="text-indigo-600 hover:underline">digital twin solutions</a> now incorporate thermal baseline models, enabling precise anomaly detection.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Laser Scanning and Metrology</h2>
        <p className="mb-4">
          3D laser scanning and structured light systems generate precise geometric data. While not strictly NDT in the traditional sense, these technologies complement inspection programs by correlating defect locations with precise geometry. Automated laser scanning systems create point clouds, measure thickness variations, and detect surface deformations.
        </p>
        <p className="mb-4">
          Integration with NDT results provides context—understanding whether a detected defect falls in a stress concentration or a low-risk zone. This intersection of dimensional metrology and material characterization represents the future of comprehensive asset assessment. Platforms like <a href="https://ndt-connect.com" rel="noopener" className="text-indigo-600 hover:underline">NDTConnect</a> now integrate laser metrology data alongside traditional inspection results.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Automated Guided Vehicles</h2>
        <p className="mb-4">
          Magnetic wheel crawlers, wheeled robots, and tracked platforms serve as mobile platforms for NDT sensors. Modern AGVs feature autonomous navigation, enabling programmable scan patterns that adapt to environmental feedback. Obstacle detection and dynamic path planning allow operation in cluttered industrial environments.
        </p>
        <p className="mb-4">
          The convergence of NDT robotics and broader industrial robotics ecosystems creates opportunities for integration with manufacturing and maintenance workflows. <a href="https://atlantisndt.com" rel="noopener" className="text-indigo-600 hover:underline">NDT ERP software</a> now interfaces with robotic fleet management systems, coordinating inspections across facilities seamlessly.
        </p>
      </section>
    </div>
  );
}