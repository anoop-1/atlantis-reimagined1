import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDT Glossary: 100+ Essential Terms Defined',
  description: 'Comprehensive glossary of nondestructive testing terminology. Over 100 essential terms defined covering NDT methods, equipment, standards, and industry-specific concepts.',
  keywords: 'NDT glossary, NDT terminology, technical terms, ultrasonic testing, radiography, magnetic particle testing',
};

export default function GlossaryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NDT Glossary',
    description: 'Comprehensive glossary of nondestructive testing terms and concepts',
    url: 'https://backlinks.atlantisndt.com/glossary',
  };

  const glossaryTerms = [
    { term: 'A-Scan', definition: 'Amplitude-scan display in ultrasonic testing showing signal amplitude versus time, used to evaluate defect characteristics and distance. A-scans provide quantitative data for defect sizing.' },
    { term: 'ASME', definition: 'American Society of Mechanical Engineers. Develops standards for pressure vessel design, inspection, and fabrication (Section VIII, Section V). ASME codes are widely adopted globally.' },
    { term: 'ASNT', definition: 'American Society for Nondestructive Testing. Primary professional organization in NDT, administers certification programs and develops recommended practices. SNT-TC-1A is the primary certification standard.' },
    { term: 'Attenuation', definition: 'Decrease in ultrasonic signal strength as it travels through material, caused by scattering and absorption. Used to detect defects and evaluate material condition in thickness measurements.' },
    { term: 'B-Scan', definition: 'Two-dimensional cross-sectional display in ultrasonic testing showing material depth versus horizontal distance, creating a profile view of inspected material. B-scans provide spatial visualization.' },
    { term: 'Calibration', definition: 'Process of adjusting and verifying NDT equipment to ensure accuracy and compliance with applicable standards. Periodic calibration is mandatory for all inspection equipment.' },
    { term: 'Certification', definition: 'Official qualification granted by ASNT after successful completion of training, practical experience, and examination. Levels include Level I, II, and III based on expertise.' },
    { term: 'Couplant', definition: 'Liquid substance applied between ultrasonic transducer and inspected surface to facilitate acoustic signal transmission. Common couplings include mineral oil and water-soluble gels.' },
    { term: 'C-Scan', definition: 'Three-dimensional color map display in ultrasonic testing showing signal amplitude at specific depth, useful for visualizing defect locations and sizing. C-scans provide top-down visualization.' },
    { term: 'Defect', definition: 'Discontinuity or imperfection in material that may affect safety or performance. May include cracks, voids, inclusions, or corrosion. Defects are evaluated against acceptance criteria.' },
    { term: 'Discontinuity', definition: 'Interruption in the physical structure or configuration of material. Not all discontinuities are defects; some may not affect performance and may be acceptable.' },
    { term: 'Eddy Current Testing (ET)', definition: 'Electromagnetic NDT method that induces circular electrical currents in conductive materials to detect surface and near-surface defects without contact.' },
    { term: 'Flaw', definition: 'Undesirable condition in material that reduces serviceability or may lead to failure. Similar to defect but often implies severity or rejection criteria.' },
    { term: 'Frequency', definition: 'Number of oscillations per unit time in an ultrasonic or electromagnetic wave, measured in megahertz (MHz). Higher frequencies provide better resolution but less penetration.' },
    { term: 'Gain', definition: 'Electronic amplification of signal in NDT equipment. Increased gain amplifies weak signals but also amplifies noise. Must be properly controlled for accurate results.' },
    { term: 'Gating', definition: 'Electronic process of focusing on specific time interval or material depth in ultrasonic testing to isolate signals of interest and reject unwanted signals.' },
    { term: 'Gray Scale', definition: 'Display format in radiography and ultrasonic testing using shades of gray from black to white to represent signal intensity or image density.' },
    { term: 'Half-Skip Distance', definition: 'Distance traveled by ultrasonic wave from first back-surface reflection to surface in angled beam testing, used for angle verification and calibration.' },
    { term: 'Hardenable Steel', definition: 'Steel capable of significant hardness increase through heat treatment, typically containing alloying elements like manganese, chromium, or molybdenum.' },
    { term: 'Heat Affected Zone (HAZ)', definition: 'Area adjacent to a weld where material properties change due to heat during welding, often susceptible to cracking or property degradation.' },
    { term: 'Impedance', definition: 'Property of material resistance to ultrasonic wave transmission. Impedance mismatch at material boundaries causes signal reflection used in ultrasonic detection.' },
    { term: 'Indication', definition: 'Signal or response detected by NDT equipment. Not all indications represent defects; some may be noise or legitimate material features requiring interpretation.' },
    { term: 'Sensitivity', definition: 'Ability of NDT equipment to detect small defects. Higher sensitivity can detect smaller flaws but may increase false indications if not properly controlled.' },
    { term: 'Lateral Wave', definition: 'Ultrasonic wave traveling along surface of material at velocity of shear waves. Used in surface wave inspection for surface-breaking crack detection.' },
    { term: 'Level I Technician', definition: 'Entry-level NDT certification demonstrating basic knowledge and ability to perform inspections under supervision. Requires 30 hours training and 200 hours experience.' },
    { term: 'Level II Technician', definition: 'Intermediate NDT certification demonstrating ability to conduct and interpret inspections independently. Requires Level I training plus 2 years experience minimum.' },
    { term: 'Level III Technician', definition: 'Expert NDT certification demonstrating ability to develop procedures, train technicians, and make final interpretation decisions. Requires 5 years experience with 2 at Level II.' },
    { term: 'Liquid Penetrant Testing (PT)', definition: 'NDT method using low-viscosity liquid to penetrate surface-breaking defects, followed by removal and application of developer to make indications visible.' },
    { term: 'Magnetic Particle Testing (MPT)', definition: 'NDT method magnetizing ferromagnetic material and applying iron powder particles to reveal surface and near-surface defects through particle agglomeration.' },
    { term: 'NADCAP', definition: 'National Aerospace and Defense Contractors Accreditation Program. Aerospace industry program for qualifying testing and inspection service providers to rigorous standards.' },
    { term: 'Noise', definition: 'Unwanted electronic or acoustic signals that interfere with legitimate NDT indications. Proper setup and filtering minimizes noise and improves signal quality.' },
    { term: 'Phased Array Ultrasonic Testing (PAUT)', definition: 'Advanced ultrasonic method using electronically-controlled transducer arrays enabling rapid beam steering and focusing without mechanical movement.' },
    { term: 'Probe', definition: 'General term for transducer or sensor in NDT equipment. In ultrasonic testing, the device that generates and receives sound waves.' },
    { term: 'Radiography', definition: 'NDT method using X-rays or gamma rays to create images of material internal structure, widely used for weld inspection and defect detection.' },
    { term: 'Rayleigh Wave', definition: 'Surface wave in ultrasonic testing traveling along material surface useful for surface-breaking crack detection without need for coupling.' },
    { term: 'Refraction', definition: 'Change in direction of ultrasonic wave as it enters material with different velocity. Occurs at angle-beam interfaces and enables inspection at angles.' },
    { term: 'Rejection Criteria', definition: 'Specified standards or limits for determining whether indications are acceptable or require remedial action, typically based on applicable standards.' },
    { term: 'Resolution', definition: 'Ability to distinguish between two closely-spaced defects or features. Higher frequency ultrasonic provides better resolution but less penetration depth.' },
    { term: 'Scattering', definition: 'Ultrasonic wave dispersion when traveling through material with multiple small reflective boundaries, causing signal attenuation and noise.' },
    { term: 'Shear Wave', definition: 'Ultrasonic wave where particle motion perpendicular to wave direction. Penetrates steel more effectively than compression waves for deep inspection.' },
    { term: 'Signal-to-Noise Ratio', definition: 'Relative strength of legitimate signal versus background noise. High ratio indicates clean signals; low ratio indicates noisy conditions requiring adjustment.' },
    { term: 'Skip Distance', definition: 'Distance traveled by ultrasonic beam in angled-beam contact inspection, including initial entry and reflection from back surface.' },
    { term: 'Specification', definition: 'Documented requirements defining inspection procedures, standards, acceptance criteria, and documentation requirements for specific applications.' },
    { term: 'Surface Wave', definition: 'Ultrasonic wave traveling along material surface at velocity approximately 90% of shear wave velocity, used for surface-breaking defect detection.' },
    { term: 'Thickness Gauging', definition: 'Ultrasonic measurement of remaining material thickness, commonly used to assess corrosion or erosion of pipes and vessels.' },
    { term: 'Time-Base', definition: 'Horizontal axis on ultrasonic A-scan display representing time (or distance), used to measure defect location and evaluate signals.' },
    { term: 'Transducer', definition: 'Device converting electrical energy to mechanical energy (or vice versa) for ultrasonic or eddy current testing. Quality transducers are critical for reliable inspection.' },
    { term: 'Velocity', definition: 'Speed at which ultrasonic waves travel through material, varying by wave mode and material properties. Used to calculate distance measurements accurately.' },
    { term: 'Visual Inspection', definition: 'NDT method using direct observation (with or without magnification) to detect surface defects, dimensional issues, or structural problems.' },
    { term: 'Wavelength', definition: 'Distance between successive peaks in ultrasonic wave, calculated as velocity divided by frequency. Smaller wavelength provides better resolution.' },
    { term: 'Weld Metal', definition: 'Material deposited during welding process, typically having different properties than base material. Prone to defects like porosity and lack of fusion.' },
    { term: 'Zyglo', definition: 'Trade name for a high-visibility penetrant dye used in liquid penetrant testing, providing excellent contrast for defect visualization.' },
    { term: 'API Standards', definition: 'American Petroleum Institute standards governing oil and gas operations. Includes API 510 (pressure vessels), API 570 (piping), API 653 (tanks), API 580 (RBI).' },
    { term: 'Acoustic Emission', definition: 'Advanced NDT technique detecting stress waves generated by crack growth. Used for monitoring structural integrity and detecting active defects.' },
    { term: 'Backup Ring', definition: 'Support ring used during welding to prevent molten metal penetration. Backup ring removal inspection is often required in critical applications.' },
    { term: 'Beam Angle', definition: 'Angle of ultrasonic transducer relative to material surface, typically 45°, 60°, or 70°. Angle selection depends on geometry and defect type.' },
    { term: 'Coverage', definition: 'Percentage of equipment or structure actually inspected. Higher coverage provides more confidence in asset condition assessment.' },
    { term: 'Degrees Celsius', definition: 'Temperature measurement unit. Important for understanding material properties and environmental conditions during inspection.' },
    { term: 'Electroslag Welding (ESW)', definition: 'Welding process using electrical resistance heating. ESW joints often require additional inspection scrutiny due to process characteristics.' },
    { term: 'False Positive', definition: 'Detection of indication that is not actually a defect. False positives can lead to unnecessary repairs and increased costs.' },
    { term: 'Full Volume Inspection', definition: 'Inspection technique that examines entire volume of material, typically using focused scanning patterns to ensure complete coverage.' },
    { term: 'Gas Tungsten Arc Welding (GTAW)', definition: 'Manual welding process commonly used for pressure equipment. Welds must meet strict inspection requirements per standards.' },
    { term: 'Hardfacing', definition: 'Application of hard, wear-resistant material to surfaces. Hardfaced components require specialized inspection techniques.' },
    { term: 'Inclination Angle', definition: 'Angle of weld defect relative to material surface. Critical for assessing defect severity and fracture potential.' },
    { term: 'Inspection Interval', definition: 'Time period between consecutive inspections. Intervals determined by standards, risk assessment, or regulatory requirements.' },
    { term: 'Joint Efficiency', definition: 'Ratio of weld strength to base material strength, expressed as percentage. Joint efficiency affects pressure vessel design thickness.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumbs */}
        <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">Glossary</span>
        </nav>

        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NDT Glossary: 100+ Essential Terms Defined
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive reference guide to nondestructive testing terminology, from fundamental NDT concepts to method-specific technical terms. Covers all six major NDT methods and industry standards.
            </p>
          </header>

          {/* Introduction */}
          <div className="prose prose-custom max-w-none mb-8">
            <p>
              Nondestructive testing employs specialized terminology that can be challenging for those new to the field. This comprehensive glossary defines over 100 essential NDT terms, from foundational concepts to method-specific vocabulary. Whether you're preparing for <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">ASNT certification</a>, learning NDT technology, or simply need quick reference to technical terminology, this glossary provides clear definitions of key concepts.
            </p>

            <p>
              The terms are arranged alphabetically and cover all major NDT methods including ultrasonic testing, radiography, magnetic particle testing, liquid penetrant testing, and eddy current testing. Additional terms address API standards, ASME codes, and industry-specific applications. Understanding this terminology is essential for NDT professionals seeking certification, for engineers specifying NDT inspections, and for anyone involved in asset integrity management. Use this glossary alongside formal <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">training programs</a> and standards study to build comprehensive knowledge of NDT concepts and terminology.
            </p>
          </div>

          {/* Glossary Terms */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {glossaryTerms.map((item, index) => (
              <div 
                key={index}
                className={`px-6 py-4 ${index !== glossaryTerms.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.term}
                </h3>
                <p className="text-gray-700">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expand Your NDT Knowledge</h2>
            
            <p className="text-gray-700 mb-6">
              This glossary provides quick reference to essential NDT terminology. For deeper understanding of specific methods and applications, explore our comprehensive resource guides and <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">professional training programs</a>.
            </p>

            <div className="space-y-3">
              <p>
                <strong className="text-gray-900">Industry Standards References:</strong> Terms in this glossary are drawn from ASNT standards, ASTM International standards, and API Recommended Practices that govern NDT practice.
              </p>
              <p>
                <strong className="text-gray-900">Certification Preparation:</strong> Understanding these terms is essential for ASNT certification exam success. Review this glossary while studying standards and attending <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">certification preparation courses</a>.
              </p>
              <p>
                <strong className="text-gray-900">Method-Specific Learning:</strong> Each NDT method (ultrasonic, radiography, penetrant, magnetic particle, eddy current) has specialized terminology. This glossary covers cross-method terms relevant to all methods.
              </p>
            </div>
          </div>

          {/* Related Resources */}
          <div className="mt-12 p-8 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Learning Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Career Development</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Build your NDT career with comprehensive guides covering certification pathways and salary expectations. Understand the path to Level II and Level III certification.
                </p>
                <Link href="/guides/ndt-career-path" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Explore Career Path →
                </Link>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Professional Services</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Need expert NDT services or training? <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">Atlantis NDT provides professional services</a> including consultation, training, and certification.
                </p>
                <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Learn About Services →
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>
              This glossary is designed as a quick reference guide. For comprehensive training on NDT concepts and methods, <a href="https://atlantisndt.com/training" rel="noopener" className="text-blue-600 hover:text-blue-800 font-semibold">formal training programs</a> from Atlantis NDT provide in-depth education and preparation for professional certification.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
