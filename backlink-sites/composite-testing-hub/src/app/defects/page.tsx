export default function DefectsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-purple-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">Composite Damage Types</h1>
        <p className="text-purple-800">Understanding composite failure modes and damage indicators.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Impact Damage and Low-Velocity Impact</h2>
        <p className="mb-4">
          Low-velocity impact—tool drops, ground handling, service interactions—creates internal damage invisible from external view. Matrix cracking and delamination develop while surface appears unchanged. Impact damage reduces residual strength, risking failure under operational loads. Systematic impact inspection enables detection before in-service failures.
        </p>
        <p className="mb-4">
          Ultrasonic C-scan readily detects impact damage, revealing delamination extent. Sizing guidelines establish whether damage is acceptable or requires repair. Organizations implementing systematic post-impact inspection through <a href="https://atlantisndt.com" rel="noopener" className="text-purple-600 hover:underline">expert programs</a> prevent in-service failures.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Delamination and Ply Separation</h2>
        <p className="mb-4">
          Delamination—separation between composite plies—reduces through-thickness strength and stiffness. Loading induces local buckling and propagating cracks. Causes include manufacturing defects, impact, environmental degradation, or stress concentration. Even small delaminations can propagate under fatigue loading, leading to progressive failure.
        </p>
        <p className="mb-4">
          Ultrasonic testing detects delaminations through reflections from ply interfaces. Thermography reveals delamination thermal signatures. C-scan imaging quantifies damage extent. Organizations detecting delamination through systematic inspection can schedule repairs before failure. Integration with <a href="https://ndt-connect.com" rel="noopener" className="text-purple-600 hover:underline">condition monitoring systems</a> enables proactive maintenance.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Fiber Breakage and Matrix Cracks</h2>
        <p className="mb-4">
          Fiber breakage—severing of load-carrying reinforcement—dramatically reduces strength in fiber direction. Sources include manufacturing defects, impact, or overload. Matrix cracking—resin fracture—opens pathways for moisture ingress and environmental degradation. Combined fiber breakage and matrix cracking accelerates structural degradation.
        </p>
        <p className="mb-4">
          Detecting these defects requires sensitive ultrasonic methods. Professional training through <a href="https://atlantisndt.com" rel="noopener" className="text-purple-600 hover:underline">advanced programs</a> develops expertise in recognizing these damage signatures.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Void Content and Manufacturing Defects</h2>
        <p className="mb-4">
          Voids—unfilled resin spaces—weaken composites proportional to void volume. Sources include trapped air during manufacturing, improper layup technique, or inadequate consolidation. Fiber waviness and misalignment reduce properties in intended load directions. Resin-rich zones contain excessive matrix with inadequate reinforcement, reducing local strength.
        </p>
        <p className="mb-4">
          In-process ultrasonic scanning detects manufacturing defects early. Statistical process control based on inspection results guides parameter optimization. Organizations implementing quality-focused manufacturing through <a href="https://atlantisndt.com" rel="noopener" className="text-purple-600 hover:underline">systematic programs</a> prevent these defects.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Environmental Degradation</h2>
        <p className="mb-4">
          Long-term exposure to moisture, heat, and UV degrades composite properties. Matrix resin absorbs moisture, reducing strength and stiffness. UV exposure degrades resin surface properties. Thermal cycling creates residual stresses weakening bonds. Systematic monitoring detects degradation, enabling maintenance or retirement before critical properties are lost.
        </p>
        <p className="mb-4">
          Environmental assessment through <a href="https://atlantisndt.com" rel="noopener" className="text-purple-600 hover:underline">digital monitoring systems</a> predicts service life remaining, enabling optimal maintenance and replacement planning.</p>
      </section>
    </div>
  );
}