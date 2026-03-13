export default function MethodsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-gray-100 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inspection Methods</h1>
        <p className="text-gray-700">NDT techniques specifically applied to railway component inspection.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Ultrasonic Testing for Wheels</h2>
        <p className="mb-4">
          Automated ultrasonic wheel scanners installed trackside perform instantaneous inspection as trains pass at operating speed. Transducers mounted on spring-loaded arms contact wheel treads and flanges, generating ultrasonic pulses that penetrate wheel material. Internal reflections reveal cracks, seams, and material anomalies. A/scan data processes through algorithms detecting specific defect signatures, automatically classifying wheel conditions.
        </p>
        <p className="mb-4">
          Modern systems inspect multiple wheels per train simultaneously, capturing complete fleet data continuously. Results integrate with maintenance systems, automatically scheduling wheel removal when defects exceed safe limits. <a href="https://atlantisndt.com/training" rel="noopener" className="text-gray-700 hover:underline">Professional training</a> ensures inspectors understand ultrasonic principles and system capabilities.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Eddy Current Rail Head Inspection</h2>
        <p className="mb-4">
          Eddy current array probes scan rail heads, detecting subsurface fatigue cracks. Arrays of multiple small coils enable electronic scanning across rail width without mechanical movement. High-speed systems inspect rails at normal operational speed, capturing complete rail head scans. Crack depth and length classification enables risk assessment and maintenance prioritization.
        </p>
        <p className="mb-4">
          Eddy current inspection integrates with track geometry measurement systems, providing comprehensive track condition assessment. Where geometry shows stress concentration, eddy current closely examines for developing cracks. Integration with <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-gray-700 hover:underline">digital twin solutions</a> enables predictive maintenance planning.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Magnetic Particle Testing</h2>
        <p className="mb-4">
          Magnetic particle inspection of wheel sets, axles, and bearing components reveals surface and subsurface flaws. Magnetization induces magnetic flux through components; surface-breaking defects disrupt flux, trapping magnetic particles in visible patterns. Portable equipment enables in-service inspection without component removal. Systematic scanning detects fatigue cracks before they propagate to critical lengths.
        </p>
        <p className="mb-4">
          Organizations implementing <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-gray-700 hover:underline">NDT consulting services</a> establish effective magnetic particle programs addressing critical component safety requirements.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Acoustic Resonance and Vibration Analysis</h2>
        <p className="mb-4">
          Acoustic resonance methods detect wheel cracks by analyzing vibration signatures. Cracked wheels exhibit distinctive resonance frequencies; algorithms differentiate cracked wheels from normal wheels with high accuracy. Vibration analysis systems mounted trackside capture acoustic signatures from passing wheels, automatically alerting maintenance when defects are detected.
        </p>
        <p className="mb-4">
          These methods complement ultrasonic inspection, providing redundant detection and offering advantages in certain scenarios. Integration of multiple detection modalities through <a href="https://ndt-connect.com" rel="noopener" className="text-gray-700 hover:underline">NDTConnect platform</a> ensures comprehensive defect detection.</p>
      </section>
    </div>
  );
}