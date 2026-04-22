import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Activity,
  Zap,
  Target,
  Shield,
  Radio,
  Eye,
  BookOpen,
  Globe,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

/* ─── NDT Methods Data ─── */
const methods = [
  {
    name: "Ultrasonic Testing (UT)",
    abbr: "UT",
    icon: Activity,
    color: "border-t-blue-600",
    desc: "Uses high-frequency sound waves (0.5-25 MHz) to detect internal defects, measure wall thickness, and characterize material properties. The transducer sends a pulse through the material; reflections from defects and back walls are displayed on an A-scan, providing depth and location information. Advanced techniques include Phased Array UT (PAUT) and Time-of-Flight Diffraction (TOFD).",
    applications: "Wall thickness measurement, weld inspection, corrosion mapping, flaw detection in forgings and castings, composite inspection",
    link: "/ultrasonic-testing",
  },
  {
    name: "Radiographic Testing (RT)",
    abbr: "RT",
    icon: Zap,
    color: "border-t-purple-600",
    desc: "X-rays or gamma rays pass through a material and expose film or a digital detector on the other side. Density differences caused by defects create contrast variations on the resulting radiograph. RT provides a permanent image record and is excellent for detecting volumetric defects such as porosity and inclusions.",
    applications: "Weld inspection, casting inspection, pipeline girth welds, corrosion profiling, aerospace component inspection",
    link: "/radiographic-testing",
  },
  {
    name: "Magnetic Particle Testing (MT)",
    abbr: "MT",
    icon: Target,
    color: "border-t-amber-600",
    desc: "A magnetic field is induced in ferromagnetic material. Surface or near-surface discontinuities create local flux leakage that attracts finely divided magnetic particles, forming visible indications. Wet fluorescent MT (WFMT) under UV light is extremely sensitive to tight cracks as small as 0.25mm.",
    applications: "Surface crack detection on welds, castings, forgings; in-service fatigue crack detection; structural steel inspection",
    link: "/magnetic-particle-testing",
  },
  {
    name: "Liquid Penetrant Testing (PT)",
    abbr: "PT",
    icon: Shield,
    color: "border-t-green-600",
    desc: "A low-viscosity liquid penetrant is applied to a clean surface and drawn into surface-breaking discontinuities by capillary action. After a dwell period, excess penetrant is removed and a developer is applied, which draws the trapped penetrant back to the surface, creating visible indications.",
    applications: "Surface crack detection on non-ferromagnetic materials (stainless steel, aluminum, titanium), castings, machined parts, welds on non-magnetic materials",
    link: "/penetrant-testing",
  },
  {
    name: "Eddy Current Testing (ET)",
    abbr: "ET",
    icon: Radio,
    color: "border-t-teal-600",
    desc: "An alternating current coil generates a magnetic field that induces eddy currents in conductive material. Defects, conductivity variations, and dimensional changes alter the eddy current flow, which is detected as impedance changes in the coil. ET is exceptionally fast and can be fully automated.",
    applications: "Heat exchanger tube inspection, aerospace fatigue crack detection, surface crack detection, conductivity measurement, coating thickness measurement",
    link: "/eddy-current-testing",
  },
  {
    name: "Visual Testing (VT)",
    abbr: "VT",
    icon: Eye,
    color: "border-t-slate-600",
    desc: "The most fundamental and widely used NDT method. Visual Testing involves direct or remote examination of surfaces to assess condition, detect discontinuities, and verify dimensional compliance. All other NDT methods begin with visual inspection. Remote VT uses borescopes, video cameras, and drones.",
    applications: "Weld profile assessment, corrosion documentation, dimensional verification, general condition assessment, pre-service and in-service inspection",
    link: "/visual-testing",
  },
];

/* ─── Advanced Methods ─── */
const advancedMethods = [
  {
    name: "Phased Array UT (PAUT)",
    desc: "Uses multiple ultrasonic elements that can be individually timed to steer and focus the sound beam electronically. Produces sector scans (S-scans) and linear scans with superior defect detection and sizing capability compared to conventional UT. Increasingly replacing RT for weld inspection.",
    link: "/phased-array-ut",
  },
  {
    name: "Time-of-Flight Diffraction (TOFD)",
    desc: "Uses diffracted signals from defect tips to accurately measure defect through-wall height. TOFD provides the most accurate crack sizing of any NDT technique, with sizing accuracy of +/- 1mm. Often combined with PAUT for comprehensive weld inspection.",
    link: "/tofd-testing",
  },
  {
    name: "Guided Wave Testing (GWT)",
    desc: "Low-frequency ultrasonic waves propagate along the length of pipes and structures, enabling screening of long distances (up to 100+ meters) from a single probe position. Used for pipeline corrosion screening and corrosion under insulation (CUI) detection.",
    link: "/guided-wave-testing",
  },
  {
    name: "Acoustic Emission Testing (AET)",
    desc: "Passive technique that detects elastic waves generated by active defect growth, leaks, or material deformation. Sensors are placed on the structure and listen for emissions during pressurization or loading. Used for pressure vessel integrity assessment and leak detection.",
    link: "/acoustic-emission-testing",
  },
  {
    name: "Magnetic Flux Leakage (MFL)",
    desc: "The material is magnetized to near-saturation. Areas of wall loss or corrosion cause magnetic flux to leak from the surface, which is detected by Hall-effect sensors or coils. MFL is the primary method used in intelligent pipeline pigging for corrosion detection.",
    link: "/magnetic-flux-leakage-testing",
  },
];

/* ─── NDT Timeline ─── */
const timeline = [
  { era: "1895-1920", event: "Discovery of X-rays (Rontgen, 1895). First industrial use of radiography for casting inspection during World War I." },
  { era: "1920-1940", event: "Development of magnetic particle testing (1930s). First ultrasonic flaw detection experiments. Growth driven by aviation industry quality requirements." },
  { era: "1940-1960", event: "World War II accelerated NDT development for military applications. Post-war establishment of ASNT (1941). Standardization of MT, PT, and RT methods." },
  { era: "1960-1980", event: "Development of portable UT equipment. Introduction of eddy current testing for tube inspection. Nuclear power industry drives advanced NDT requirements." },
  { era: "1980-2000", event: "Digital radiography emerges. Phased array UT technology developed. Computerized data acquisition and storage. TOFD developed in the UK." },
  { era: "2000-2020", event: "PAUT replaces conventional RT in many applications. Automated inspection systems. Remote visual inspection with drones. Transition from film to digital RT." },
  { era: "2020-Present", event: "AI-powered defect recognition. Digital twin integration for asset integrity. Robotics and autonomous inspection. Cloud-based reporting platforms. NDT 4.0 and Industry 4.0 convergence." },
];

/* ─── Industry Applications ─── */
const industries = [
  {
    name: "Oil & Gas",
    desc: "The largest user of NDT services globally (35% of market). NDT is mandatory for pressure vessels (ASME Section VIII), piping (ASME B31.3), pipelines (API 1104), and storage tanks (API 653). Methods: UT for thickness measurement and weld inspection, RT for girth welds, MT/PT for surface examination, VT for all components, PAUT/TOFD replacing RT for new construction.",
    link: "/ndt-for-oil-gas",
  },
  {
    name: "Aerospace",
    desc: "Aerospace NDT follows NAS-410 certification requirements (more stringent than ASNT SNT-TC-1A). Primary methods: ET for fatigue crack detection in airframe structures and engine discs, UT for composite laminate inspection and forging inspection, fluorescent PT for engine components. Every aircraft component undergoes NDT at manufacture and during MRO maintenance intervals.",
    link: "/ndt-for-aerospace",
  },
  {
    name: "Power Generation",
    desc: "Nuclear, fossil, and renewable power plants require extensive NDT programs. Nuclear facilities have the most stringent requirements (ASME Section III and Section XI). Methods: UT for reactor vessel and steam generator inspection, ET for condenser and heat exchanger tube inspection, MT/PT for turbine component inspection, VT for general condition assessment.",
    link: "/ndt-for-power-generation",
  },
  {
    name: "Construction & Structural",
    desc: "Structural steel welding is inspected per AWS D1.1 (buildings and bridges) and AWS D1.5 (bridge structures). CWIs (Certified Welding Inspectors) perform VT on all welds. UT or RT is required for complete joint penetration welds. MT is used for surface examination of structural steel.",
  },
  {
    name: "Manufacturing",
    desc: "NDT is integral to manufacturing quality control. Castings are inspected with RT (ASTM E446) and UT (ASTM A609). Forgings are inspected with UT (ASTM A388) and MT. Machined parts use PT and ET for surface integrity verification. Incoming material inspection uses UT for laminations and internal defects.",
  },
  {
    name: "Marine & Shipbuilding",
    desc: "Classification societies (Lloyd's, DNV, ABS, Bureau Veritas) require NDT of hull welds, propulsion systems, and structural members. UT thickness surveys monitor hull corrosion. MT and UT inspect critical structural welds. Underwater VT and UT are performed on in-service vessels using divers or ROVs.",
  },
];

/* ─── Standards Overview ─── */
const standards = [
  { code: "ASME Section V", scope: "NDT methods for boilers, pressure vessels, and nuclear components" },
  { code: "ASTM Standards", scope: "Individual method standards (E114 UT, E94 RT, E709 MT, E1417 PT, E376 ET)" },
  { code: "ISO Standards", scope: "International NDT standards (ISO 17640 UT weld, ISO 3452 PT, ISO 9934 MT)" },
  { code: "EN Standards", scope: "European NDT standards (EN 12668 UT equipment, EN 1714 UT weld)" },
  { code: "AWS D1.1/D1.5", scope: "Structural welding code — NDT requirements for structural steel welds" },
  { code: "API Standards", scope: "API 510 (vessels), API 570 (piping), API 653 (tanks), RP 580/581 (RBI)" },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What is the difference between NDT and NDE?",
    a: "NDT (Non-Destructive Testing) and NDE (Non-Destructive Evaluation) are often used interchangeably, but there is a subtle distinction. NDT refers specifically to the act of testing or examining a material or component without damaging it — detecting defects and measuring properties. NDE is a broader term that encompasses NDT plus the evaluation and interpretation of results — assessing the significance of detected indications against acceptance criteria, fitness-for-service analysis, and remaining life assessment. In practice, most professionals use NDT and NDE as synonyms, but NDE implies a higher level of engineering analysis beyond simple defect detection.",
  },
  {
    q: "What are the 6 main NDT methods?",
    a: "The six primary (conventional) NDT methods are: Ultrasonic Testing (UT) — uses sound waves to detect internal defects; Radiographic Testing (RT) — uses X-rays or gamma rays; Magnetic Particle Testing (MT) — detects surface cracks in ferromagnetic materials; Liquid Penetrant Testing (PT) — detects surface cracks in any non-porous material; Eddy Current Testing (ET) — uses electromagnetic induction; and Visual Testing (VT) — direct or remote visual examination. Each method has different capabilities, limitations, and applications. Most inspection codes require a combination of methods for comprehensive coverage.",
  },
  {
    q: "How much does NDT testing cost?",
    a: "NDT testing costs vary by method, component complexity, and location. Typical per-inspection costs in the USA: VT $50-$150, PT $60-$200, MT $80-$250, UT $150-$500, ET $200-$600, RT $300-$800. Complex inspections (PAUT/TOFD weld inspection, automated tube inspection) can cost $1,000-$5,000+. Costs in the Middle East are typically 70-80% of US rates; in India/Southeast Asia, 30-50% of US rates. For ongoing inspection programs, day rates range from $800-$1,500 per Level II technician in the USA, $600-$1,200 in the Middle East.",
  },
  {
    q: "Is NDT safe?",
    a: "Most NDT methods are inherently safe. UT, MT, PT, ET, and VT pose no radiation hazard and minimal safety risks beyond standard industrial safety precautions. Radiographic Testing (RT) involves ionizing radiation (X-rays or gamma rays) and requires strict safety protocols including radiation safety officer oversight, exclusion zones, monitoring badges, and regulatory compliance. PT involves chemicals that require proper ventilation and handling. MT uses electricity (safety precautions for prods and coils). Overall, NDT is significantly safer than destructive testing methods.",
  },
  {
    q: "Can NDT detect all defects?",
    a: "No single NDT method can detect all defect types. Each method has specific detection capabilities and limitations. UT excels at detecting internal defects and measuring thickness but may miss surface cracks in some orientations. RT is excellent for porosity but misses planar defects aligned with the beam. MT and PT detect surface defects only. The selection of NDT methods must match the expected defect types — this is why most codes require multiple methods for comprehensive coverage. A well-designed NDT program uses complementary methods to maximize detection probability.",
  },
  {
    q: "How do I get into NDT as a career?",
    a: "NDT is accessible without a college degree. The typical entry path is: (1) Research the industry and choose a target sector (oil & gas, aerospace, power generation). (2) Enroll in MT and PT Level I/II training courses (40-80 hours per method). (3) Gain employment with an NDT inspection company — many offer on-the-job training. (4) Accumulate experience hours and pass Level II exams. (5) Add UT certification for higher salary potential. (6) Over 5-10 years, progress toward Level III and specialized certifications. Starting salaries are $40,000-$55,000 for Level I, rising to $55,000-$95,000 for multi-method Level II.",
  },
  {
    q: "What is the most common NDT method?",
    a: "Visual Testing (VT) is the most commonly performed NDT method — it is required as the first examination step for all welds and components under virtually every code (ASME, AWS, API). Ultrasonic Testing (UT) is the most commonly performed instrument-based method, accounting for 35% of the NDT market by revenue. UT's dominance is driven by versatility (thickness measurement, weld inspection, flaw detection), portability, real-time results, and the growth of PAUT which is replacing RT in many applications.",
  },
  {
    q: "What is NDT 4.0?",
    a: "NDT 4.0 refers to the integration of NDT with Industry 4.0 technologies including: artificial intelligence for automated defect recognition and classification, digital twins for real-time asset condition monitoring, robotic and drone-based automated inspection, cloud computing for centralized data management and remote expert analysis, Internet of Things (IoT) sensors for continuous monitoring, and augmented reality for technician guidance. NDT 4.0 represents a shift from periodic manual inspection to continuous, data-driven asset integrity management. Companies like Atlantis NDT are at the forefront of this transformation.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function UltimateGuideNDT() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What is Non-Destructive Testing? Complete NDT Guide 2026",
        description:
          "Comprehensive guide to Non-Destructive Testing (NDT): 6 major methods (UT, RT, MT, PT, ET, VT), advanced techniques (PAUT, TOFD), industry applications, standards, certification, and career paths.",
        author: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
        publisher: {
          "@type": "Organization",
          name: "Atlantis NDT",
          logo: { "@type": "ImageObject", url: "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://atlantisndt.com/ndt-complete-guide",
        },
        keywords:
          "what is ndt, non destructive testing, ndt methods, ndt guide, ndt testing types, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, ndt explained",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="What is Non-Destructive Testing? Complete NDT Guide 2026 | Atlantis NDT"
        description="Complete NDT guide: 6 major methods (UT, RT, MT, PT, ET, VT), advanced PAUT/TOFD/GWT, codes, certification paths, and NDT careers. Read now."
        keywords="what is ndt, non destructive testing, ndt methods, ndt guide, ndt testing types, ndt explained, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, PAUT, TOFD, ndt applications, ndt standards"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-complete-guide"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              Complete NDT Guide &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              What is Non-Destructive Testing (NDT)?
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The definitive guide to NDT: learn what non-destructive testing is, how the 6 major methods work, advanced techniques like PAUT and TOFD, industry applications from oil & gas to aerospace, codes and standards, certification pathways, and career opportunities in this $15.8 billion global industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ndt-methods-comparison"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Compare NDT Methods
              </Link>
              <Link
                to="/ndt-certification-guide"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                NDT Certification Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Primary NDT Methods", value: "6 Methods" },
              { label: "Global Market Size", value: "$15.8B" },
              { label: "Key Industries", value: "Oil & Gas, Aero" },
              { label: "Global Workforce", value: "500,000+" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#004aad]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        <article className="md:col-span-2 space-y-14">
          {/* What is NDT */}
          <motion.section
            id="what-is-ndt"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              What is Non-Destructive Testing (NDT)?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Non-Destructive Testing (NDT)</strong> is a group of inspection techniques used to evaluate the properties, integrity, and condition of materials, components, and structures <strong>without causing damage</strong>. Unlike destructive testing — which requires cutting, breaking, or otherwise destroying the test specimen — NDT allows the inspected item to continue in service after examination.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              NDT is essential for ensuring safety, reliability, and quality across virtually every engineering industry. From the welds in a pressure vessel at an oil refinery, to the turbine blades in a jet engine, to the structural steel in a bridge — NDT verifies that these critical components are free from defects that could cause catastrophic failure.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The global NDT market is valued at approximately $15.8 billion (2024) and is growing at 8.1% annually. Over 500,000 certified NDT technicians work globally, with the highest concentrations in the United States, Middle East, Europe, and Asia-Pacific.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">Why NDT Matters</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Safety:</strong> Detects defects before they cause failures, preventing injuries, environmental damage, and loss of life.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Cost Savings:</strong> In-service inspection extends equipment life and prevents unplanned shutdowns. A single turnaround day at a refinery costs $1-5 million.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Regulatory Compliance:</strong> Codes and standards (ASME, API, AWS) mandate NDT for pressure equipment, pipelines, aircraft, and structural steel.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Quality Assurance:</strong> NDT during manufacturing ensures products meet specifications before delivery.</span></li>
              </ul>
            </div>
          </motion.section>

          {/* History */}
          <motion.section
            id="history"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              History of NDT — From X-Rays to Digital Twins
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The history of non-destructive testing parallels the history of industrialization. As engineering structures became more complex and failure consequences more severe, the need for non-destructive inspection methods grew. Here are the key milestones in NDT development.
            </p>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="text-xs font-bold text-[#004aad] bg-blue-50 px-2 py-1 rounded">{item.era}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow border border-slate-100">
                    <p className="text-sm text-slate-700 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6 Major Methods */}
          <motion.section
            id="six-methods"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              The 6 Major NDT Methods
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              There are six primary (conventional) NDT methods, each using different physical principles to detect specific types of defects. Every NDT professional should understand all six methods, even if they specialize in one or two. The methods below are listed in order of market share by revenue.
            </p>
            <div className="space-y-6">
              {methods.map((m, i) => (
                <div key={i} className={`bg-white rounded-xl p-6 shadow border border-slate-100 ${m.color} border-t-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#004aad]">{m.name}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">{m.desc}</p>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>Key Applications:</strong> {m.applications}
                  </p>
                  <Link
                    to={m.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
                  >
                    Read full {m.abbr} guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Advanced Methods */}
          <motion.section
            id="advanced-methods"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Advanced NDT Methods
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Beyond the six conventional methods, several advanced NDT techniques have been developed for specialized applications. These methods typically require additional training and certification beyond standard Level II qualifications. Advanced methods are the fastest-growing segments of the NDT market.
            </p>
            <div className="space-y-4">
              {advancedMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <h3 className="text-lg font-bold text-[#004aad] mb-2">{m.name}</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">{m.desc}</p>
                  <Link
                    to={m.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Applications by Industry */}
          <motion.section
            id="industry-applications"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Applications by Industry
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              NDT is used across every major engineering industry, but the methods, standards, and certification requirements differ. Understanding the primary NDT applications in your target industry is essential for career planning and method selection.
            </p>
            <div className="space-y-4">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <h3 className="text-lg font-bold text-[#004aad] mb-2">{ind.name}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">{ind.desc}</p>
                  {ind.link && (
                    <Link
                      to={ind.link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
                    >
                      NDT for {ind.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Standards & Codes */}
          <motion.section
            id="standards"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Standards & Codes
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              NDT is governed by a comprehensive framework of codes and standards that define examination requirements, acceptance criteria, and personnel qualification. Understanding which standard applies to your application is a core competency for NDT professionals.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-4">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Code / Standard</th>
                    <th className="text-left p-4 font-semibold">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {standards.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{s.code}</td>
                      <td className="p-4 text-slate-700">{s.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              to="/ndt-standards-comparison"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
            >
              View full NDT Standards Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* Certification */}
          <motion.section
            id="certification"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Certification Overview
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              NDT personnel are certified at three levels, each with increasing responsibility and technical authority. The major certification schemes are ASNT SNT-TC-1A (USA employer-based), ISO 9712 (international), PCN (UK), and CSWIP (welding inspection). Certification requires training, experience, examination, and vision acuity verification.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { level: "Level I", desc: "Performs tests under supervision. Cannot interpret results.", icon: BookOpen },
                { level: "Level II", desc: "Interprets results, selects techniques, supervises Level I.", icon: Award },
                { level: "Level III", desc: "Develops procedures, interprets codes, manages programs.", icon: Globe },
              ].map((l) => (
                <div key={l.level} className="bg-white rounded-xl p-5 shadow border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-[#004aad] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <l.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#004aad] mb-2">{l.level}</h3>
                  <p className="text-sm text-slate-600">{l.desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/ndt-certification-guide"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
            >
              Read the complete NDT Certification Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

          {/* Career Paths */}
          <motion.section
            id="careers"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Career Paths
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              NDT offers a clear career path from entry-level technician to senior management/consulting. The industry is accessible without a college degree, offers competitive salaries ($40K-$160K+ in the USA), and provides global mobility. Key career paths include field inspection, consulting, management, training, and technology development.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mb-4">
              <h3 className="font-bold text-[#004aad] mb-2">Salary Highlights</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex gap-2"><DollarSign className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Level I:</strong> $40,000-$55,000 (USA)</span></li>
                <li className="flex gap-2"><DollarSign className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Level II (multi-method):</strong> $55,000-$95,000 (USA)</span></li>
                <li className="flex gap-2"><DollarSign className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>Level III / NDE Manager:</strong> $80,000-$160,000+ (USA)</span></li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/ndt-career-guide"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
              >
                NDT Career Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ndt-technician-salary"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
              >
                NDT Salary Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ndt-learning-path"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
              >
                NDT Learning Path <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          {/* Future of NDT */}
          <motion.section
            id="future"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              The Future of NDT — Digital Twins, AI & Automation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The NDT industry is undergoing a fundamental transformation driven by digital technologies. NDT 4.0 represents the convergence of traditional inspection methods with artificial intelligence, digital twins, robotics, and cloud computing. These technologies are not replacing NDT technicians — they are amplifying their capabilities and shifting the role toward data analysis and decision-making.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Digital Twins",
                  desc: "3D models linked to real-time inspection data. Enable predictive maintenance and risk-based inspection planning. Atlantis NDT offers digital twin solutions for asset integrity.",
                  link: "/digital-twins",
                },
                {
                  icon: Activity,
                  title: "AI & Machine Learning",
                  desc: "Automated defect recognition (ADR) for PAUT and RT. AI can match or exceed human Level II performance for specific defect types. Reduces interpretation time by 60-80%.",
                },
                {
                  icon: Globe,
                  title: "Robotics & Drones",
                  desc: "Robotic crawlers for tank and vessel inspection. Drones for flare stack and elevated structure inspection. Reduces human exposure to hazardous environments.",
                },
                {
                  icon: Clock,
                  title: "Cloud & IoT",
                  desc: "Cloud-based reporting platforms for real-time data sharing. IoT sensors for continuous corrosion monitoring. Remote expert analysis enables global expertise deployment.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-[#004aad]" />
                    <h3 className="font-bold text-[#004aad]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#004aad] hover:underline mt-2"
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ndt-methods-comparison", label: "NDT Methods Comparison Table" },
                { href: "/ndt-certification-guide", label: "NDT Certification Guide" },
                { href: "/ndt-career-guide", label: "NDT Career Guide" },
                { href: "/ndt-technician-salary", label: "NDT Salary Guide 2026" },
                { href: "/ndt-industry-statistics", label: "NDT Industry Statistics" },
                { href: "/ndt-standards-comparison", label: "NDT Standards Comparison" },
                { href: "/ndt-equipment-guide", label: "NDT Equipment Guide" },
                { href: "/ndt-learning-path", label: "NDT Learning Path" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center gap-2 bg-white rounded-lg p-4 shadow border border-slate-100 hover:border-[#004aad] text-[#004aad] text-sm font-medium transition"
                >
                  <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 id="faq" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Start Your NDT Journey with Atlantis NDT
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Whether you are new to NDT and looking for training, an experienced technician seeking Level III certification, or an asset owner needing consulting services — Atlantis NDT provides comprehensive solutions. 50+ ASNT Level III certified professionals. Training in Houston, Dubai, Hyderabad, and online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                NDT Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Consulting Services
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Contact Our Team
              </Link>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#004aad" }}>
              On This Page
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#what-is-ndt", "What is NDT?"],
                ["#history", "History of NDT"],
                ["#six-methods", "The 6 Major Methods"],
                ["#advanced-methods", "Advanced Methods"],
                ["#industry-applications", "Applications by Industry"],
                ["#standards", "Standards & Codes"],
                ["#certification", "NDT Certification"],
                ["#careers", "Career Paths"],
                ["#future", "Future of NDT"],
                ["#faq", "FAQ (8 questions)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#004aad] transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-lg font-bold mb-3 text-green-800">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "Primary Methods", value: "6" },
                { label: "Advanced Methods", value: "5+" },
                { label: "Market Size (2024)", value: "$15.8B" },
                { label: "CAGR", value: "8.1%" },
                { label: "Global Workforce", value: "500K+" },
                { label: "Entry Salary (USA)", value: "$40K-$55K" },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span>{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              NDT Method Pages
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/magnetic-particle-testing", "Magnetic Particle Testing (MT)"],
                ["/penetrant-testing", "Penetrant Testing (PT)"],
                ["/eddy-current-testing", "Eddy Current Testing (ET)"],
                ["/visual-testing", "Visual Testing (VT)"],
                ["/phased-array-ut", "Phased Array UT (PAUT)"],
                ["/tofd-testing", "TOFD Testing"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">NDT Training & Consulting</h3>
            <p className="text-blue-100 text-sm mb-4">
              Atlantis NDT offers training for all NDT methods and certification levels. 50+ ASNT Level III instructors with real-world field experience. Available in Houston, Dubai, Hyderabad, and online.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
