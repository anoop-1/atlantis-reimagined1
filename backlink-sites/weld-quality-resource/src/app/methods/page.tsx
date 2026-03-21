export default function MethodsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-orange-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-orange-900 mb-2">Weld Inspection Methods</h1>
        <p className="text-orange-800">NDT techniques specifically for weld quality evaluation.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Phased Array Ultrasonic Testing</h2>
        <p className="mb-4">
          Phased array ultrasonic testing (PAUT) revolutionized weld inspection. Arrays containing dozens of elements enable electronic beam steering, focusing, and scanning without mechanical movement. Operator-controlled beam angles and focal depths enable flexible inspection geometries. Electronic scanning produces complete weld volume images, enabling confident defect detection and sizing.
        </p>
        <p className="mb-4">
          PAUT excels at detecting cracks—volumetric defects, tight surface-breaking cracks, and delayed hydrogen cracks. Automated scanning systems increase inspection speed while maintaining sensitivity. Integration with data analysis software through <a href="https://atlantisndt.com" rel="noopener" className="text-orange-600 hover:underline">advanced systems</a> enables quantitative defect characterization.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Magnetic Particle Testing</h2>
        <p className="mb-4">
          Magnetic particle inspection detects surface-breaking and near-surface defects in ferromagnetic materials. Magnetization induces magnetic flux through welds and base metal. Defects disrupt flux, allowing particles to accumulate in visible patterns. The method detects fine surface cracks invisible to visual inspection. Portable equipment enables field inspection of critical welds.
        </p>
        <p className="mb-4">
          Magnetic particle testing complements ultrasonic inspection. While ultrasonic excels at subsurface defect detection, magnetic particle excels at surface and near-surface cracks. Combined inspection provides comprehensive defect detection. Professional training through <a href="https://atlantisndt.com" rel="noopener" className="text-orange-600 hover:underline">certification programs</a> develops reliable magnetic particle interpretation.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Liquid Penetrant Testing</h2>
        <p className="mb-4">
          Liquid penetrant testing (dye penetrant) reveals surface defects on non-ferromagnetic materials where magnetic particle testing is ineffective. Colored or fluorescent penetrant is applied to surfaces, seeping into surface-breaking defects. Excess penetrant is wiped away; developing solution draws penetrant from defects. Defects appear as colored or glowing lines against contrasting background.
        </p>
        <p className="mb-4">
          Penetrant testing is simple, portable, and highly sensitive to surface cracks. It works on stainless steel, aluminum, and other non-ferromagnetic materials where magnetic testing fails. Organizations implementing comprehensive weld inspection programs through <a href="https://atlantisndt.com" rel="noopener" className="text-orange-600 hover:underline">NDT consulting</a> combine multiple methods addressing all material types.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Automated Scanning Systems</h2>
        <p className="mb-4">
          Automated ultrasonic scanning systems mounted on weld tracks perform rapid, consistent inspection with minimal operator variability. Computer control ensures consistent beam angles, scan patterns, and focal depths. Data records provide permanent inspection records. Integration with defect detection algorithms automatically identifies flaws, eliminating human interpretation inconsistencies.
        </p>
        <p className="mb-4">
          Automated systems excel in high-volume production environments. Consistent results enable trending and statistical analysis. Systems integrated with <a href="https://ndt-connect.com" rel="noopener" className="text-orange-600 hover:underline">NDTConnect</a> automation enable real-time defect notifications and seamless quality management.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Eddy Current Testing</h2>
        <p className="mb-4">
          Eddy current testing detects cracks in conductive materials, particularly stainless steel. Electromagnetic fields induce eddy currents in weld material; defects disrupt current flow, producing measurable impedance changes. Surface and near-surface cracks create distinctive signatures enabling reliable detection. Probes require direct contact but enable rapid scanning.
        </p>
        <p className="mb-4">
          Eddy current testing complements ultrasonic and penetrant methods, providing additional defect detection capability. Organizations implementing multi-method inspection through <a href="https://atlantisndt.com" rel="noopener" className="text-orange-600 hover:underline">integrated management systems</a> achieve comprehensive quality assurance.</p>
      </section>
    </div>
  );
}