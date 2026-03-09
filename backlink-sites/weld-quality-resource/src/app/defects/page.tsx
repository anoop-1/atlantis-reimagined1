export default function DefectsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-orange-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-orange-900 mb-2">Weld Defects</h1>
        <p className="text-orange-800">Understanding common defects and their implications for structural integrity.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Porosity and Gas Entrapment</h2>
        <p className="mb-4">
          Porosity—spherical voids in weld metal—reduces mechanical properties proportionally to porosity volume. Small scattered porosity has minimal impact; extensive porosity can reduce strength 30% or more. Causes include inadequate shielding gas, contaminated wire, moisture, and incorrect parameter settings. Prevention focuses on eliminating gas sources and ensuring adequate shielding.
        </p>
        <p className="mb-4">
          Radiographic inspection detects porosity readily as dark spots on radiographs. Ultrasonic inspection reveals cluster porosity and confirms internal voids. Acceptance criteria typically limit porosity size and number. Organizations implementing <a href="https://atlantisndt.com/training" rel="noopener" className="text-orange-600 hover:underline">welding process control training</a> reduce porosity incidence significantly.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Cracks and Stress Concentration</h2>
        <p className="mb-4">
          Cracks represent the most serious weld defects. Cold cracks initiate after cooling, typically from high-strength steel, high restraint, and hydrogen. Hot cracks occur during solidification, common in austenitic stainless steel and high-strength materials. Cracks concentrate stress, initiating fatigue failure at loads far below material yield strength. Any crack in critical-stress location mandates rejection.
        </p>
        <p className="mb-4">
          Crack detection requires multiple methods. Ultrasonic testing excels at tight cracks. Magnetic particle testing detects surface cracks. Penetrant testing reveals fine surface cracks. Systematic multi-method inspection through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-orange-600 hover:underline">comprehensive inspection programs</a> ensures crack detection before service.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Lack of Fusion and Incomplete Penetration</h2>
        <p className="mb-4">
          Lack of fusion occurs when adjacent weld metal or base metal fails to melt and bond. Results are unbonded surfaces that act as stress concentrations, initiating cracks under loading. Incomplete penetration occurs when weld fails to penetrate through the joint thickness, leaving unbonded root areas. Both defects dramatically reduce effective section properties and stress-carrying capacity.
        </p>
        <p className="mb-4">
          Ultrasonic testing readily detects lack of fusion and incomplete penetration through characteristic reflections. These defects appear obviously on radiographs. Prevention focuses on process parameter control—adequate heat input, proper root gap, and correct technique. Organizations implementing <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-orange-600 hover:underline">systematic process control</a> prevent these defects.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Inclusions and Contamination</h2>
        <p className="mb-4">
          Inclusions—entrapped non-metallic material such as slag, oxides, and tungsten particles—reduce ductility and fatigue strength. Small inclusions have minimal effect; large or clustered inclusions significantly degrade properties. Sources include inadequate cleaning between passes, contaminated wire, electrode problems, and insufficient shielding.
        </p>
        <p className="mb-4">
          Radiographic inspection readily detects inclusions as dark regions on radiographs. Acceptance criteria limit inclusion size and clustering. Prevention focuses on cleanliness—proper interpass cleaning, high-quality consumables, and appropriate procedures. Training through <a href="https://atlantisndt.com/training" rel="noopener" className="text-orange-600 hover:underline">professional programs</a> emphasizes defect prevention.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Surface Defects and Geometry Issues</h2>
        <p className="mb-4">
          Surface defects include undercut (groove melted into base metal adjacent to weld), overlap (weld metal folded over base metal), and spatter (adhering droplets). These defects create stress concentrations and reduce fatigue strength. Visual inspection detects these defects; magnetic particle and penetrant testing reveal fine surface cracks. Prevention focuses on parameter control and welder technique.
        </p>
        <p className="mb-4">
          Excessive weld reinforcement (bead height) can be acceptable structurally but affects fatigue performance. Insufficient reinforcement suggests incomplete fusion. Geometric consistency indicates process control. Systematic visual assessment through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-orange-600 hover:underline">quality programs</a> prevents geometric nonconformances.</p>
      </section>
    </div>
  );
}