export default function MethodsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-purple-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">Composite NDT Methods</h1>
        <p className="text-purple-800">Technical examination of composite inspection techniques.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Ultrasonic C-Scan Imaging</h2>
        <p className="mb-4">
          C-scan ultrasonic imaging creates top-down maps of composite structures. Transducers systematically scan surfaces, recording ultrasonic responses at each point. Software displays results as color-coded maps where colors represent ultrasonic amplitude—defects appear as anomalies against baseline responses. Resolution depends on transducer frequency; higher frequencies provide finer detail but less penetration.
        </p>
        <p className="mb-4">
          C-scan excels at detecting delaminations and impact damage. Large-area C-scanning enables comprehensive inspections covering entire structures systematically. Automated scanning systems enable rapid data collection. Integration with <a href="https://atlantisndt.com/training" rel="noopener" className="text-purple-600 hover:underline">interpretation training</a> develops expertise in anomaly recognition.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Tap Testing and Coin Tap</h2>
        <p className="mb-4">
          Simple tap testing—tapping with fingers or coins and listening to acoustic response—detects large delaminations. Sound changes from solid composite (clear ring) to delaminated areas (dull thud). While crude compared to sophisticated NDT, tap testing requires no equipment and detects obvious damage. It serves as first-level screening in many maintenance programs.
        </p>
        <p className="mb-4">
          Tap testing cannot quantify damage or detect small flaws. Combined with ultrasonic inspection, tap testing efficiently identifies priority areas. Organizations implementing systematic inspection programs through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-purple-600 hover:underline">professional guidance</a> combine multiple methods optimizing detection and efficiency.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Shearography and Thermal Imaging</h2>
        <p className="mb-4">
          Shearography applies controlled stress and monitors deformation. Surface deformation patterns reveal internal damage—delaminations create anomalous patterns. Thermal imaging supplements shearography, detecting heat-related anomalies. These optical methods enable contactless inspection of fragile or inaccessible structures. Automated systems acquire data rapidly across large areas.
        </p>
        <p className="mb-4">
          These methods excel at detecting delaminations and global damage patterns. Integration with <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-purple-600 hover:underline">digital platforms</a> enables standardized data acquisition and trending.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Resonance and Vibration Methods</h2>
        <p className="mb-4">
          Vibration analysis detects composite stiffness loss from damage. Exciting structures and analyzing resonant frequencies reveals material degradation. Damage reduces stiffness, shifting resonant frequencies downward. Sophisticated analysis enables damage localization and quantification. Combined with ultrasonic confirmation, vibration methods provide complementary damage assessment.
        </p>
        <p className="mb-4">
          Organizations implementing comprehensive monitoring through <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-purple-600 hover:underline">smart monitoring systems</a> combine vibration analysis with other methods for robust damage detection.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Microscopy and Sectioning</h2>
        <p className="mb-4">
          Destructive analysis through sectioning and microscopy provides definitive damage characterization. Cutting samples, polishing cross-sections, and examining under magnification reveals fiber breaking, matrix cracking, and delamination details. While destructive, sectioning confirms non-destructive findings and supports model development. Representative sampling of large structures enables efficient damage understanding without complete sectioning.
        </p>
        <p className="mb-4">
          Microscopic examination validates NDT findings and guides model development. Organizations balancing NDT efficiency with confirmatory data through <a href="https://atlantisndt.com/training" rel="noopener" className="text-purple-600 hover:underline">comprehensive programs</a> achieve superior understanding of damage mechanisms.</p>
      </section>
    </div>
  );
}