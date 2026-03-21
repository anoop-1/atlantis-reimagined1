import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radiographic Testing (RT) Training Guide | X-ray & Gamma Ray',
  description: 'Complete guide to radiographic testing training covering radiation safety, film interpretation, digital RT, and certification requirements.',
  keywords: 'radiographic testing, RT training, X-ray testing, gamma ray, digital radiography',
  openGraph: {
    title: 'Radiographic Testing (RT) Training Guide',
    description: 'Complete guide to RT training covering radiation safety and film interpretation.',
  },
}

export default function RTTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Radiographic Testing (RT) Training Guide",
        "description": "Complete guide to RT training covering radiation safety and techniques",
        "author": { "@type": "Organization", "name": "NDT Training Academy" }
      })}} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/training">Training</a>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Radiographic Testing</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Radiographic Testing (RT) Training Guide</h1>
          <p className="text-xl text-purple-50">
            Master X-ray and gamma-ray imaging techniques with comprehensive safety protocols
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-content">
          <h2>What is Radiographic Testing?</h2>
          <p>
            Radiographic Testing (RT) is a Non-Destructive Testing method that uses X-rays or gamma rays to create images of the internal structure of materials and components. The radiation passes through the object and is captured on film or a digital detector, revealing internal defects, discontinuities, and structural variations.
          </p>

          <p>
            RT is one of the most comprehensive inspection methods available, providing detailed visualization of internal conditions. It's particularly valuable for detecting internal voids, porosity, inclusions, and weld defects that would be invisible with other NDT methods.
          </p>

          <h2>Radiation Safety in RT Training</h2>

          <h3>Critical Safety Component</h3>
          <p>
            Radiation safety is the most critical aspect of RT training. Because RT professionals work directly with ionizing radiation, comprehensive safety training is mandatory. All RT certification programs emphasize:
          </p>

          <ul>
            <li><strong>Radiation Hazards:</strong> Understanding the biological effects of ionizing radiation</li>
            <li><strong>Dose Limits:</strong> ALARA (As Low As Reasonably Achievable) principles and regulatory dose limits</li>
            <li><strong>Protective Equipment:</strong> Lead aprons, gloves, glasses, and other protective gear</li>
            <li><strong>Survey Instruments:</strong> Using radiation detectors to monitor exposure levels</li>
            <li><strong>Regulatory Compliance:</strong> NRC, state, and local radiation regulations</li>
            <li><strong>Emergency Procedures:</strong> Response protocols for radiation incidents</li>
          </ul>

          <h3>Personal Monitoring Devices</h3>
          <p>
            RT professionals must wear personal monitoring devices (dosimeters) to track cumulative radiation exposure. Regular dose monitoring and record-keeping are mandatory. Training includes proper use and care of monitoring devices.
          </p>

          <h2>RT Training Level I</h2>

          <h3>Duration and Requirements</h3>
          <p>
            Level I RT training typically requires 50-80 hours spread over 1-2 weeks. This foundational level teaches basic operation under supervision.
          </p>

          <h3>Level I Curriculum</h3>
          <ul>
            <li><strong>Radiation Physics:</strong> X-ray generation, gamma ray sources, electromagnetic spectrum</li>
            <li><strong>Equipment Overview:</strong> X-ray tubes, gamma ray equipment, portable vs. stationary systems</li>
            <li><strong>Film Technology:</strong> Film types, sensitivity grades, storage and handling</li>
            <li><strong>Basic Exposure Techniques:</strong> Setting voltage, current, and exposure time</li>
            <li><strong>Radiation Safety Fundamentals:</strong> Hazards, protection, and regulatory basics</li>
            <li><strong>Image Quality Indicators (IQI):</strong> Using penetrameters and wire standards</li>
            <li><strong>Simple Film Interpretation:</strong> Identifying obvious defects in radiographs</li>
            <li><strong>Documentation:</strong> Recording inspection parameters and findings</li>
          </ul>

          <h2>RT Training Level II</h2>

          <h3>Duration and Hours</h3>
          <p>
            Level II requires 300-400 hours of training, typically 5-7 weeks full-time or 4-8 months part-time. Level II prepares you for independent operation and detailed film interpretation.
          </p>

          <h3>Level II Curriculum</h3>
          <ul>
            <li><strong>Advanced Radiation Physics:</strong> Attenuation, scatter, half-value layer concepts</li>
            <li><strong>X-ray Generation:</strong> How X-ray tubes work, efficiency factors, heat management</li>
            <li><strong>Gamma Ray Sources:</strong> Cobalt-60, Iridium-192, and other isotopes; handling and storage</li>
            <li><strong>Exposure Techniques:</strong> Wall, pipe, and tank radiography; optimizing image quality</li>
            <li><strong>Film Processing:</strong> Darkroom procedures, chemistry, quality control</li>
            <li><strong>Digital Radiography:</strong> Introduction to DR systems and advantages over film</li>
            <li><strong>Advanced Film Interpretation:</strong> Characterizing defects, acceptance criteria, severity assessment</li>
            <li><strong>Image Quality Standards:</strong> ASTM standards, IQI selection and placement</li>
            <li><strong>Radiation Safety Advanced:</strong> Shielding calculations, dose management, protective strategies</li>
            <li><strong>Report Generation:</strong> Professional radiographic inspection reports</li>
            <li><strong>Industry Standards:</strong> ASTM, AWS, API standards for RT</li>
          </ul>

          <h3>Practical Exams</h3>
          <p>
            Level II practical exams include:
          </p>
          <ul>
            <li>Written examination on all curriculum topics</li>
            <li>Darkroom practical demonstrating film handling and processing</li>
            <li>Equipment setup and exposure technique demonstration</li>
            <li>Film interpretation and defect characterization exam</li>
            <li>Radiation safety practical assessment</li>
          </ul>

          <h2>RT Training Level III</h2>

          <h3>Experience and Qualification</h3>
          <p>
            Level III requires 1000+ hours of documented RT experience (2000+ hours per SNT-TC-1A), Level II certification, and additional advanced coursework. Level III professionals develop RT procedures, validate equipment systems, and make final acceptance decisions.
          </p>

          <h3>Advanced Training Focus</h3>
          <ul>
            <li><strong>Procedure Development:</strong> Creating RT inspection procedures following ASTM and code requirements</li>
            <li><strong>Technique Optimization:</strong> Selecting ideal parameters for specific applications and materials</li>
            <li><strong>Digital System Mastery:</strong> Advanced digital radiography systems and image processing</li>
            <li><strong>Complex Defect Analysis:</strong> Interpreting and characterizing complex indications</li>
            <li><strong>Teaching and Training:</strong> Developing and delivering RT training programs</li>
            <li><strong>Code Expertise:</strong> Mastery of ASME, API, AWS, and ASTM standards</li>
          </ul>

          <h2>Digital Radiography (DR): The Modern Standard</h2>

          <h3>Why Digital is Revolutionizing RT</h3>
          <p>
            Digital Radiography has transformed the field by eliminating film processing, improving image quality, enabling real-time viewing, and reducing radiation dose. Modern RT professionals need proficiency with DR systems.
          </p>

          <h3>DR Advantages</h3>
          <ul>
            <li>Immediate image availability (no darkroom processing needed)</li>
            <li>Image enhancement and manipulation for better defect detection</li>
            <li>Lower radiation dose requirements</li>
            <li>Digital storage and archival capabilities</li>
            <li>Enhanced contrast control for optimized viewing</li>
            <li>Faster inspection cycles</li>
          </ul>

          <p>
            Modern training programs increasingly incorporate digital radiography alongside traditional film techniques. Level II and Level III training should include comprehensive DR system operation and image processing.
          </p>

          <h2>RT Applications Across Industries</h2>

          <h3>Aerospace</h3>
          <p>
            Aircraft components including wing root connections, fuselage joints, and landing gear require radiographic inspection for critical safety assurance.
          </p>

          <h3>Oil and Gas</h3>
          <p>
            Pressure vessels, pipelines, and subsea components rely on RT for weld quality assessment and integrity verification.
          </p>

          <h3>Nuclear Power</h3>
          <p>
            Reactor components, pressure boundary welds, and piping systems undergo rigorous radiographic inspection programs.
          </p>

          <h3>Manufacturing and Casting</h3>
          <p>
            Castings and forgings are routinely inspected radiographically to detect porosity, shrinkage, and inclusions.
          </p>

          <h2>Career Prospects in Radiographic Testing</h2>
          <p>
            RT professionals are in consistent demand. Level II RT technicians typically earn $55,000-$80,000 annually. Level III RT inspectors and consultants earn $75,000-$110,000+. The aerospace, nuclear, and oil & gas sectors actively recruit qualified RT professionals.
          </p>

          <h2>Start Your RT Training Today</h2>
          <p>
            Ready to enter the specialized field of Radiographic Testing? <a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="text-link">Atlantis NDT offers comprehensive RT training programs</a> from Level I through Level III. Their facilities include both traditional film radiography and state-of-the-art digital radiography systems.
          </p>

          <p>
            With ASNT Level III certified instructors and rigorous safety training, <a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="text-link">RT training programs prepare you for certification exams</a> and successful careers in aerospace, nuclear power, oil & gas, and manufacturing sectors.
          </p>
        </div>
      </section>

      {/* Related Methods */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
            Other NDT Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Ultrasonic Testing (UT)</h3>
              <p className="text-slate-700 mb-4">
                Sound wave technology for comprehensive flaw detection and thickness measurements.
              </p>
              <a href="/training/ut-training" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-slate-900">MT & PT Training</h3>
              <p className="text-slate-700 mb-4">
                Surface defect detection for manufacturing and aerospace applications.
              </p>
              <a href="/training/mt-pt-training" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
