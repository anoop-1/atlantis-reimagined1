export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-600 to-violet-400 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Advanced NDT Technologies</h1>
        <p className="text-lg text-violet-100">Innovation in Inspection and Detection Methodologies</p>
      </div>

      <article className="prose prose-lg max-w-none mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-violet-800 mb-4">The Evolution of NDT Technology</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Non-destructive testing has evolved dramatically from simple mechanical resonance methods toward sophisticated sensor systems, advanced signal processing, and artificial intelligence-enabled analysis. Phased array ultrasonics, advanced eddy current array systems, and automated scanning platforms represent the current state-of-practice. Emerging technologies including machine learning pattern recognition and autonomous inspection systems promise further advancement in detection reliability and inspection efficiency.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern NDT programs leverage technology investments to achieve superior defect detection probability (POD) compared to conventional approaches. Probability of detection studies quantify likelihood that NDT procedures detect flaws of various sizes and morphologies. Advanced techniques consistently demonstrate higher POD, particularly for small flaws representing early-stage degradation. Earlier defect detection enables intervention before critical severity is reached, translating to improved safety and operational economics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">NDT consulting services</a> help operators evaluate emerging technologies, develop implementation strategies, and optimize ROI from technology investments. <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">NDT training programs</a> ensure personnel remain current with rapidly advancing technology landscape.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-violet-800 mb-4">Phased Array Ultrasonics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Phased array ultrasonic testing (PAUT) employs multiple transducers with electronically controlled timing to create focused sound beams at various angles. This enables rapid, complete weld coverage without repositioning equipment. Time-of-flight diffraction (TOFD) combined with phased array provides complementary defect detection and sizing information. Full matrix capture (FMC) with total focusing method (TFM) processing achieves near-imaging-quality results, enabling confident interpretation of complex indications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            PAUT dramatically improves inspection efficiency for complex geometries including elbows, tees, and reducers where conventional ultrasonics struggle. Probability of detection studies confirm that advanced phased array approaches detect significantly smaller flaws than conventional techniques. Regulatory bodies increasingly accept PAUT results as meeting or exceeding conventional ultrasonic standards. <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">Ultrasonic testing services</a> leverage these advances for superior inspection capability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Advanced signal processing algorithms enhance image quality and automate defect detection and measurement. Machine learning systems trained on extensive defect libraries augment human interpreters, improving consistency and reducing fatigue-related errors. <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">Digital twin solutions</a> integrate phased array inspection data with predictive models supporting continuous improvement of defect characterization accuracy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-violet-800 mb-4">Automated Inspection Systems</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Automated ultrasonic scanning systems eliminate manual positioning variability and enable repeatable measurements from consistent coupling points. Robotic systems traveling on magnetic wheels maintain precision positioning while collecting systematic data. This automation achieves superior POD while reducing variability from inspector expertise differences. Baseline measurements captured through automated systems enable sensitive trending of degradation progression over extended time periods.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Automated eddy current systems scan large surface areas rapidly, identifying subsurface defects in locations that would be tedious or impractical for manual scanning. Array-based systems simultaneously examine multiple detection channels, dramatically improving inspection efficiency. These technologies enable economically viable inspection of equipment previously considered too costly to assess comprehensively.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Future autonomous inspection systems will further reduce inspection costs and improve consistency through implementation of robotic platforms with minimal human intervention. These systems promise to maintain high inspection quality while reducing labor costs and improving schedule adherence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-violet-800 mb-4">Artificial Intelligence and Machine Learning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Machine learning algorithms trained on extensive image libraries continue improving NDT data interpretation quality and consistency. Deep learning approaches enable automated defect detection and classification with accuracy approaching or exceeding skilled human interpreters. Pattern recognition algorithms identify subtle signatures indicating emerging problems before they become visually obvious.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <a href="https://ndt-connect.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">NDTConnect platform</a> integrates AI-enabled analysis supporting continuous optimization of NDT procedures and real-time decision support for field inspectors. These technologies represent the frontier of modern inspection, enabling superior defect detection, faster interpretation, and more confident operational decisions based on technical evidence.
          </p>
        </section>
      </article>
    </div>
  );
}
