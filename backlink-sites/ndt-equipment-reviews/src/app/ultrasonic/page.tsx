export default function UltrasonicPage() {
  return (
    <div className="space-y-8">
      <section className="bg-teal-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-teal-900 mb-2">Ultrasonic Equipment Review</h1>
        <p className="text-teal-800">Analysis of ultrasonic instruments and system selection criteria.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Portable Thickness Gages</h2>
        <p className="mb-4">
          Portable ultrasonic thickness gages provide rapid non-destructive measurement of material thickness. Instruments use ultrasonic pulse-echo principle—measuring time for sound to propagate through material and reflect from back surface, then calculating thickness from sound velocity. Accuracy depends on transducer frequency, material properties, and surface condition. Instruments cost $500-$2000, require minimal training, and enable rapid field assessment of corrosion and wear.
        </p>
        <p className="mb-4">
          Portable units excel for rapid screening identifying problem areas for detailed investigation. Repeated measurement at multiple locations maps material loss distribution. Organizations implementing corrosion monitoring through portable thickness gages achieve cost-effective defect detection. Integration with <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">systematic measurement programs</a> enables trending and predictive maintenance.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Advanced Ultrasonic Systems</h2>
        <p className="mb-4">
          Advanced ultrasonic instruments provide A-scan, B-scan, and C-scan imaging. These systems cost $10,000-$50,000+ depending on capabilities. A-scan displays raw waveforms enabling defect detection through echo interpretation. B-scan provides 2D cross-sectional images. C-scan creates top-down maps showing defect distribution. Phased array systems enable electronic beam steering, focusing, and advanced imaging without mechanical movement.
        </p>
        <p className="mb-4">
          System selection considers application requirements. B-scan excels for weld inspection. C-scan suits composite inspection. Phased array enables flexible geometries. Professional selection through <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">expert consultation</a> ensures appropriate capability selection.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Automated Ultrasonic Systems</h2>
        <p className="mb-4">
          Automated systems—scanning rails, gantries, or robotic platforms with integrated transducers—eliminate operator variability and enable rapid data collection. Systems scan consistently at optimized speeds and parameters. Automated data acquisition and analysis reduces human interpretation inconsistencies. Capital costs span $50,000-$500,000+ depending on complexity, but per-inspection costs drop substantially in high-volume applications.
        </p>
        <p className="mb-4">
          ROI analysis should compare automated system costs against manual inspection labor, determining payback periods and lifetime value. Organizations implementing automation through <a href="https://ndt-connect.com" rel="noopener" className="text-teal-600 hover:underline">systematic analysis</a> optimize capital investment returns.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Transducer Selection and Probe Types</h2>
        <p className="mb-4">
          Transducer selection critically affects inspection performance. Transducer frequency determines resolution—higher frequencies provide better detail but less penetration. Frequency ranges from 0.5 MHz for deep penetration to 50 MHz for high resolution. Transducer type affects application—single element, linear arrays, and phased arrays. Angle beam transducers detect cracks; normal beam transducers assess wall thickness and volumetric defects.
        </p>
        <p className="mb-4">
          Proper transducer selection requires understanding application requirements. Professional guidance through <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">specialized training</a> develops transducer selection expertise.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Software and Data Management</h2>
        <p className="mb-4">
          Modern ultrasonic systems include sophisticated software for data acquisition, analysis, and reporting. Software quality affects equipment usability—intuitive interfaces simplify operation; poor interfaces frustrate users and increase errors. Analysis software capabilities vary—basic systems require manual interpretation; advanced systems provide automated defect detection and sizing. Cloud connectivity enables remote data access and expert review.
        </p>
        <p className="mb-4">
          Organizations selecting ultrasonic systems should evaluate software thoroughly. Integration capability with enterprise systems through <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">data management platforms</a> multiplies equipment value.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Maintenance and Calibration Requirements</h2>
        <p className="mb-4">
          Ultrasonic equipment requires regular maintenance and calibration ensuring accuracy. Transducers need periodic replacement—typically every 3-5 years depending on use intensity. Zero-thickness calibration verifies baseline accuracy. Reference standards confirm accuracy at various thicknesses. Cable and connector problems develop over time. Preventive maintenance extends equipment life and ensures reliability.
        </p>
        <p className="mb-4">
          Organizations implementing systematic maintenance through <a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">maintenance programs</a> ensure consistent equipment performance and reliability.</p>
      </section>
    </div>
  );
}