export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-rose-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-rose-900 mb-4">Heat Exchanger NDT</h1>
        <p className="text-lg text-rose-800">Specialized inspection techniques for heat exchanger tubes, fouling detection, and degradation assessment.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Heat Exchanger Inspection Challenges</h2>
        <p className="mb-4">
          Heat exchangers operate at extremes—high temperatures, pressures, corrosive fluids, and thermal cycling stress. Tube bundles containing hundreds or thousands of tubes require rapid, reliable inspection. Corrosion, fouling, and erosion degrade heat transfer and structural integrity. Finding defective tubes among hundreds demands systematic, efficient inspection methods. Failures can force production shutdowns affecting millions daily.
        </p>
        <p className="mb-4">
          Modern heat exchangers span applications from power generation to petrochemicals to HVAC systems. Each application presents unique material, temperature, and corrosion challenges. Professional expertise in heat exchanger assessment through <a href="https://atlantisndt.com" rel="noopener" className="text-rose-600 hover:underline">Atlantis NDT</a> consulting enables effective inspection programs.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Eddy Current Tube Testing</h2>
        <p className="mb-4">
          Eddy current testing represents the standard method for heat exchanger tube inspection. Rotating probes inserted into tubes perform rapid scanning detecting wall loss, pitting, stress corrosion cracks, and fouling. Multiple-frequency systems simultaneously assess different defect types. Probe speeds of 1-2 meters/second enable testing hundreds of tubes daily. Automated scanners process thousands of tubes rapidly, producing probability of defect (POD) values indicating inspection reliability.
        </p>
        <p className="mb-4">
          Eddy current sensitivity to tube material, wall thickness, and condition enables quantitative defect sizing. Results guide decisions about continued service, plugging defective tubes, or scheduling major maintenance. Integration with <a href="https://atlantisndt.com/training" rel="noopener" className="text-rose-600 hover:underline">specialized training</a> develops expert probe operation and data interpretation.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Corrosion and Wall Loss Detection</h2>
        <p className="mb-4">
          Corrosion—gradual material loss from chemical attack—gradually reduces tube wall thickness. Uniform corrosion thins tube walls evenly; localized pitting creates stress concentrations initiating failures at loads below theoretical strength. Eddy current testing quantifies wall loss, enabling corrosion rate calculation. When rates exceed tolerance limits, tubes require replacement before failure.
        </p>
        <p className="mb-4">
          Systematic corrosion monitoring enables predictive maintenance—replacing tubes before failures occur rather than responding to emergencies. Organizations implementing <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-rose-600 hover:underline">predictive maintenance programs</a> minimize downtime and extend asset life.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Stress Corrosion Cracking Detection</h2>
        <p className="mb-4">
          Stress corrosion cracking (SCC) occurs when tensile stress, corrosive environment, and susceptible material combine. Cracks propagate at stresses below yield strength, causing sudden failures. In stainless steel tubes, chloride-induced SCC poses significant risk. Eddy current testing detects SCC through characteristic waveforms. Identifying tubes with SCC enables their removal before crack propagation causes tube rupture.
        </p>
        <p className="mb-4">
          SCC assessment requires experienced personnel understanding material-environment-stress interactions. Professional consultation through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-rose-600 hover:underline">specialized expertise</a> helps organizations manage SCC risk effectively.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Fouling and Blockage Assessment</h2>
        <p className="mb-4">
          Fouling—accumulation of deposits on heat transfer surfaces—reduces heat transfer efficiency and traps corrosive fluids against tube walls. Progressive fouling increases corrosion rates and operating costs. Eddy current probes sometimes cannot penetrate heavily fouled tubes, indicating critical fouling. Other methods including mechanical cleaning verification and ultrasonic wall thickness assessment complement eddy current testing.
        </p>
        <p className="mb-4">
          Fouling management combines inspection with mechanical cleaning. Systematic monitoring through <a href="https://ndt-connect.com" rel="noopener" className="text-rose-600 hover:underline">condition management systems</a> optimizes cleaning timing, balancing fouling risks with cleaning costs and potential damage.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Ultrasonic Thickness Measurement</h2>
        <p className="mb-4">
          Ultrasonic thickness measurement complements eddy current testing, providing rapid wall loss assessment. Portable ultrasonic thickness gages measure from outside the tube, eliminating internal probe insertion. This method works for tubes that eddy current cannot access due to fouling or obstructions. Systematic measurement at multiple tube locations maps wall loss distribution.
        </p>
        <p className="mb-4">
          Combined eddy current and ultrasonic approaches ensure comprehensive tube assessment. Organizations implementing multi-method inspection through <a href="https://atlantisndt.com/erp" rel="noopener" className="text-rose-600 hover:underline">integrated data systems</a> achieve superior reliability and efficiency.
        </p>
      </section>
    </div>
  );
}