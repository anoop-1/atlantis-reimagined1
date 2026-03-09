export default function MethodsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-emerald-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Inspection Methods</h1>
        <p className="text-emerald-800">Detailed examination of coating inspection techniques and their applications.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Dry Film Thickness Measurement</h2>
        <p className="mb-4">
          Dry film thickness (DFT) measurement represents the most widely used quantitative coating inspection method. Electromagnetic gages operate on two principles: magnetic induction for ferromagnetic substrates and eddy current for non-ferromagnetic materials. These portable instruments provide instant measurement at individual points, enabling rapid point-to-point inspection or systematic area mapping.
        </p>
        <p className="mb-4">
          Measurement accuracy depends on proper calibration and technique. Standard zero-thickness calibration on uncoated substrates establishes baseline, while certified shims verify measurement accuracy at various thicknesses. Technique matters: holding the gage perpendicular to surfaces ensures consistent results; excess pressure can distort readings. Organizations implementing systematic DFT programs through <a href="https://atlantisndt.com/erp" rel="noopener" className="text-emerald-600 hover:underline">NDT ERP software</a> track measurements over time, identifying trends and planning maintenance.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Cross-Hatch Adhesion Testing</h2>
        <p className="mb-4">
          The cross-hatch adhesion test (ASTM D3359) provides quantitative adhesion measurement through controlled mechanical stress. The method employs specialized tools scoring coating surfaces in a grid pattern, then applying tape and measuring coating removal. Results range from 5B (no removal) through 0B (complete removal), with intermediate ratings indicating partial failure patterns.
        </p>
        <p className="mb-4">
          Cross-hatch testing reveals substrate preparation and application quality. Excellent adhesion (4B-5B) indicates proper preparation and compatible materials. Lower ratings (0B-2B) identify bonding failures requiring investigation—possibly inadequate substrate cleaning, incompatible coating combinations, or surface contamination. The test provides actionable information for quality assurance during new applications. Professional inspectors trained through <a href="https://atlantisndt.com/training" rel="noopener" className="text-emerald-600 hover:underline">NDT training programs</a> interpret results correctly and recommend appropriate remediation.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Pull-Off Adhesion Testing</h2>
        <p className="mb-4">
          Pull-off adhesion testing (ASTM D4541) measures absolute adhesion strength by applying tensile stress perpendicular to coated surfaces. A dolly is bonded to the coating surface, then pulled perpendicular until coating failure occurs. The instrument measures force at failure, quantifying adhesion strength in megapascals or psi. Results indicate whether adhesion strength meets specification requirements.
        </p>
        <p className="mb-4">
          Pull-off testing provides more quantitative adhesion data than cross-hatch methods, enabling trending and comparison with specifications. Interpretation requires understanding failure modes: cohesive failure (film rupture) suggests internal coating weakness, while adhesive failure (substrate separation) indicates bonding problems. These distinctions guide remediation strategies. Organizations managing large coating programs benefit from systematic pull-off testing protocols integrated through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-emerald-600 hover:underline">NDT consulting services</a>.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Infrared Thermography</h2>
        <p className="mb-4">
          Infrared thermography detects subsurface defects through thermal imaging. Active thermography applies controlled heating to coated surfaces, then monitors cooling patterns. Sound coating areas with good substrate contact cool uniformly; areas with delaminations or moisture intrusion show distinct thermal signatures as trapped air insulates underlying regions.
        </p>
        <p className="mb-4">
          Thermography excels at large-area screening, rapidly identifying problem zones requiring detailed investigation. The non-contact method works in environments where contact-based testing proves impractical. Integration with automated data analysis systems enables consistent interpretation and trending. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-emerald-600 hover:underline">Digital twin solutions</a> now incorporate thermal baselines, enabling anomaly detection across coating systems.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Moisture Detection Methods</h2>
        <p className="mb-4">
          Calcium chloride testing quantifies moisture at coating-substrate interfaces through chemical reaction. A weighing compound containing anhydrous calcium chloride is sealed to the coated surface; moisture absorption causes color change and weight gain, indicating moisture presence and approximate concentration. Results guide decisions about coating removal and substrate drying requirements.
        </p>
        <p className="mb-4">
          Electronic moisture meters provide faster, less destructive assessment. Probes placed against coated surfaces detect moisture through electrical conductivity changes. Systematic grid measurement maps moisture distribution, identifying problem areas. When combined with <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-emerald-600 hover:underline">NDTConnect platform</a> data management, moisture mapping becomes integral to predictive maintenance programs.
        </p>
      </section>
    </div>
  );
}