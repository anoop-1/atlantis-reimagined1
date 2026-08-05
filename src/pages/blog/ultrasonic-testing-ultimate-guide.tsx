import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema } from "@/data/author-schema";

const faqs = [
    { question: "What is Ultrasonic Testing (UT)?", answer: "Ultrasonic Testing (UT) is an NDT method that uses high-frequency sound waves (typically 1-5 MHz) to detect internal and subsurface defects in materials. A transducer sends ultrasonic pulses through the material; defects (cracks, voids, laminations) reflect sound waves back to the transducer as echoes. Transit time between sending and receiving the echo indicates defect depth. UT detects internal defects up to 300mm+ deep, making it essential for weld inspection, thickness measurement, and fatigue crack detection in thick sections." },
    { question: "What is the difference between conventional UT and Phased Array UT (PAUT)?", answer: "Conventional UT uses a single transducer that sends one beam at a time. Phased Array UT (PAUT) uses 32-256 elements in an array that fire in precise time sequences, steering and focusing the beam without moving the probe. PAUT advantages: faster scanning (covers large areas in seconds vs minutes), better defect characterization (multiple angles simultaneously), superior small flaw detection, and reduced operator dependency. PAUT disadvantages: higher equipment cost (a substantial capital investment) and requires specialized training. Both detect identical defect types but PAUT offers 3-5x faster coverage and better defect sizing." },
    { question: "What is TOFD (Time-of-Flight Diffraction)?", answer: "TOFD is an advanced UT technique using diffraction from defect edges rather than reflection from defect faces. Two angled transducers bracket a weld; sound diffracts off flaw edges, providing extremely accurate depth sizing. Advantages: superior depth accuracy (±0.5mm on 25mm thickness), detects very tight cracks, and provides quantitative defect characterization. Disadvantages: slower than PAUT (requires careful positioning), complex interpretation, and limited to weld inspection. TOFD is preferred when high-accuracy defect sizing is critical; PAUT is preferred for speed and general defect detection." },
    { question: "How does ultrasonic wall thickness measurement work?", answer: "Pulse-echo UT directly measures remaining material thickness by calculating distance based on echo return time: Thickness = (Sound Velocity × Time) / 2. The transducer sends a pulse that reflects from the back surface; the return time indicates material thickness. This works through coatings/paint, does not require surface prep, and is non-destructive. Accuracy is ±0.1-0.5mm depending on surface roughness and material. Used extensively for pipeline corrosion assessment, storage tank floor scanning, heat exchanger tubing, and pressure vessel inspections where thickness degradation indicates remaining safe operating life." },
    { question: "What materials can be inspected with ultrasonic testing?", answer: "UT requires sound-conducting materials with consistent sound velocity. Works excellently on: ferrous metals (steel, cast iron), non-ferrous metals (aluminum, titanium, copper), stainless steel, and composites (if properly set up). Does NOT work well on: polymers (sound scatters), rubbers, composites with high fiber-matrix disbonds. UT is less effective (but possible) on coarse-grained materials (large castings) and austenitic stainless steel (high sound attenuation due to grain size). Material sound velocity varies: steel ~5,850 m/s, aluminum ~6,400 m/s, titanium ~6,100 m/s. Technician must account for these differences when interpreting echo timing." },
    { question: "What weld defects can UT detect?", answer: "UT detects internal weld defects: porosity (gas pores), lack of fusion (incomplete melting between passes), lack of penetration (incomplete fusion at root), inclusions (slag, oxide), tungsten (in GTAW welds), and cracks (including hydrogen-induced delayed cracking). UT is limited for surface-breaking defects—Penetrant or Magnetic Particle testing is better for stress relief cracking and lamellar tears that break the surface. UT is the primary standard for structural steel weld inspection (bridges, buildings, pressure vessels) and pipeline girth weld inspection. Acceptance criteria come from ASME Section V, AWS D1.1, and API 650/1104 depending on application." },
    { question: "How often should pipelines be UT thickness-scanned?", answer: "UT thickness scanning frequency depends on corrosion rate and service. Most operators scan critical sections every 3-5 years; risk-based inspection (RBI) can extend intervals to 7-10 years for low-corrosion services or reduce to 1-2 years for high-corrosion seawater/H2S exposure. Scan spacing: typically 25-50mm intervals perpendicular to flow direction, with circumferential scans at 4-6 inch heights. API 579 (fitness-for-service) provides framework for determining inspection intervals based on historical thickness loss rate. A pipeline showing 0.5mm/year corrosion rate requires scanning every 2-3 years if remaining thickness is 5mm and minimum allowable is 2mm." },
    { question: "What is the difference between UT and Radiography (RT)?", answer: "Both UT and RT detect internal defects but use different physics. UT uses sound waves, RT uses electromagnetic radiation (X-rays, gamma). UT advantages: no radiation hazard, faster (no film development), better crack detection (especially tight cracks), through-transmission works on thick sections. RT advantages: detects density variations (porosity patterns), provides permanent radiographic image record, better for planar defects parallel to beam. Cost: UT bills materially below RT per crew-hour; RT carries source-handling overhead (includes radiation safety). For weld inspection, UT is typically primary method; RT confirms critical findings. For casting inspection, both are often used together. Modern digital radiography (DRT) is faster than film RT but UT still offers superior portability and defect sensitivity." },
    { question: "What are UT coupling agents and how do they affect inspection?", answer: "Coupling agents (couplants) enable acoustic energy transfer between transducer and material surface, since sound doesn't transmit through air gaps. Common couplants: water (0-50°C), glycerin/gel (50-200°C), honey/molasses (200-400°C), and specialized high-temp couplants (>400°C). Selection affects results: water couplant is cheapest but evaporates in sun; gel couplant is most common for field work (sticks to vertical surfaces); high-temp couplants are mandatory for hot piping. Poor coupling reduces echo amplitude by 50-90%, causing missed defects. Technicians must maintain proper coupling and validate before inspection begins. Surface roughness >0.8 microns requires smoothing or extra couplant application." },
    { question: "What training and certifications are needed for UT?", answer: "ASNT Level II UT certification requires: 120-160 hours formal training + 1,000-1,500 field hours + passing written/practical/oral exams. SNT-TC-1A pathway typically takes 3-5 years of active work. Cost: scoped and quoted for training + a scoped, quoted figure exam fees. Specialized certifications include: ASME Section V (welds), API RP 578 (pipelines), AWS D1.1 (structural welding). Advanced techniques: PAUT Level II requires additional 100+ hours training; TOFD requires specialized training. Level III certification for UT requires 3+ years Level II experience + advanced exam. Aerospace qualifications (Boeing, Airbus) layer on top of ASNT, requiring type certifications and recertification every 12-24 months. UT Level III + PAUT + API 510 certification typically commands a scoped, quoted figure salary." }
];

const utMethods = [
    { name: "Conventional Pulse-Echo (A-scan)", frequency: "1-5 MHz", penetration: "100-300mm", ideal: "Thickness measurement, defect detection, depth sizing", industries: "Pipelines, tanks, welds, aerospace" },
    { name: "Through-Transmission (T-scan)", frequency: "1-5 MHz", penetration: "100-300mm", ideal: "Thin material inspection, disbond detection", industries: "Composites, adhesive bonds, thin walls" },
    { name: "Phased Array UT (PAUT)", frequency: "2-5 MHz", penetration: "50-200mm", ideal: "Fast weld scanning, multi-angle inspection, defect characterization", industries: "Pipelines, pressure vessels, welds" },
    { name: "TOFD (Time-of-Flight Diffraction)", frequency: "1-2 MHz", penetration: "50-150mm", ideal: "High-accuracy depth sizing, tight crack detection", industries: "Welds, aerospace, critical inspection" },
    { name: "Automated Ultrasonic Testing (AUT)", frequency: "1-5 MHz", penetration: "50-200mm", ideal: "Pipe scanning, tank floor scanning, production inspection", industries: "Oil & gas, manufacturing, large volume" },
    { name: "Immersion UT", frequency: "1-10 MHz", penetration: "10-150mm", ideal: "Complex geometry, casting inspection, material characterization", industries: "Aerospace, research, fine materials" }
];

const applications = [
    { application: "Pipeline Girth Welds", method: "PAUT/Conventional UT", standard: "API 1104, ASME B31.3", detection: "Cracks, lack of fusion, porosity, inclusions" },
    { application: "Storage Tank Floor Scanning", method: "Automated UT (AUT)", standard: "API 650, EEMUA 159", detection: "Corrosion loss, pitting, remaining thickness" },
    { application: "Structural Steel Welds", method: "Conventional UT + PAUT", standard: "ASME Section V, AWS D1.1", detection: "Porosity, cracks, lack of penetration, inclusions" },
    { application: "Pressure Vessel Welds", method: "PAUT + TOFD", standard: "ASME Section V, ASME Section VIII", detection: "Internal cracks, lack of fusion, tight cracks, laminations" },
    { application: "Composite Inspections", method: "Through-transmission + A-scan", standard: "ASTM E494, ASTM E2375", detection: "Delaminations, disbonds, porosity, fiber waviness" },
    { application: "Aerospace Fastener Holes", method: "Immersion UT + High-frequency", standard: "ASTM E494, Boeing BAC 5571", detection: "Stress corrosion cracking, material degradation, defect initiation" },
    { application: "Heat Exchanger Tubes", method: "Automated UT (Bobbin coil)", standard: "ASME Section V, API 661", detection: "Pitting corrosion, fouling deposits, defects" },
    { application: "Pipe Wall Thickness", method: "Conventional A-scan UT", standard: "ASME Section V, API 579", detection: "Uniform corrosion, localized pitting, remaining thickness" }
];

const standards = [
    { standard: "ASME Section V", scope: "Non-destructive examination code for pressure vessels and welds; UT articles cover pulse-echo, angle beam, and immersion testing" },
    { standard: "ASTM E164", scope: "Standard practice for ultrasonic contact (immersion) testing of weldments; establishes procedures and acceptance criteria" },
    { standard: "ASTM E494", scope: "Standard practice for ultrasonic inspection of composite materials and adhesive bonds; through-transmission testing" },
    { standard: "API 1104", scope: "Pipelining System Code: UT requirements for pipeline girth weld inspection including PAUT and conventional UT acceptance criteria" },
    { standard: "AWS D1.1", scope: "Structural Welding Code - Steel: UT inspection requirements for structural welds; establishes defect acceptance criteria" },
    { standard: "API 650", scope: "Welded tanks for oil storage: UT thickness measurement and weld inspection requirements for storage tanks" },
    { standard: "ISO 14963", scope: "Ultrasonic testing of welds – manual testing of fusion-welded joints; ISO equivalent to ASME Section V" },
    { standard: "ASTM E2375", scope: "Standard practice for ultrasonic testing of composite aerospace materials; establishes defect detection and sizing" }
];

const utVsRt = [
    { criterion: "Defect Detection", ut: "Excellent for internal defects, cracks, lack of fusion", rt: "Excellent for density variations, porosity patterns, inclusions" },
    { criterion: "Depth Accuracy", ut: "Very good (±0.5-1mm on 25mm)", rt: "Fair (±2-5mm, cannot determine depth)" },
    { criterion: "Speed", ut: "Fast (large areas in minutes)", rt: "Slow (film processing, positioning)" },
    { criterion: "Safety", ut: "No hazard", rt: "Radiation hazard, licensing required" },
    { criterion: "Cost/Hour", ut: "a scoped, quoted figure", rt: "a scoped, quoted figure" },
    { criterion: "Tight Cracks", ut: "Superior detection", rt: "Poor detection (tight cracks pass through)" },
    { criterion: "Material Thickness Limits", ut: "Excellent (0.5-300mm)", rt: "Limited (requires equal access both sides)" },
    { criterion: "Permanent Record", ut: "Digital waveforms (searchable)", rt: "Film/digital image (visual interpretation)" }
];

const costGuide = [
    { item: "Conventional UT System (A-scan)", cost: "a scoped, quoted figure" },
    { item: "Phased Array UT System (PAUT)", cost: "a scoped, quoted figure" },
    { item: "Automated Tank Floor Scanner (AUT)", cost: "a scoped, quoted figure" },
    { item: "TOFD Equipment Package", cost: "a scoped, quoted figure" },
    { item: "Inspection Labor (Level II technician)", cost: "a scoped, quoted figure" },
    { item: "Transducer Replacement", cost: "a scoped, quoted figure each" },
    { item: "Calibration Blocks", cost: "a scoped, quoted figure" },
    { item: "Training (ASNT Level II UT)", cost: "a scoped, quoted figure" }
];

export default function UltrasonicTestingUltimateGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/blog/ultrasonic-testing-ultimate-guide",
                headline: "Ultrasonic Testing 2026: Conventional vs PAUT vs TOFD — Physics, Codes, Equipment",
                description: "UT deep-dive: wave physics (c = fλ, acoustic impedance Z = ρc), conventional vs PAUT vs TOFD, pulse-echo + through-transmission, DAC/DGS calibration per ASME V Art 4/5, AWS D1.1 weld inspection, API 1104 pipe, wall thickness accuracy ±0.1mm, Level II path. By ASNT Level III Anoop Rayavarapu.",
                datePublished: "2026-03-09",
                dateModified: "2026-04-18",
                section: "NDT Methods — Ultrasonic",
                keywords: "ultrasonic testing, UT, PAUT, TOFD, weld inspection, wall thickness",
                dependencies: "ASME BPVC Section V, ASTM E164, ASTM E213, ASTM E317, API 1104, AWS D1.1, ISO 17640, ISO 16810, ISO 10863",
            }),
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Ultrasonic Testing 2026: Ultimate Guide to PAUT, TOFD & Conventional UT"
                description="UT 2026 deep-dive by ASNT Level III: wave physics, PAUT vs TOFD vs conventional, ASME V calibration, AWS D1.1 welds, ±0.1mm thickness. Free guide inside."
                keywords="ultrasonic testing, UT, PAUT, phased array, TOFD, time-of-flight diffraction, A-scan, B-scan, C-scan, weld inspection, thickness measurement, ASME V, ASTM E164, API 1104, UT training, ultrasonic probe, transducer, couplant"
                canonical="https://atlantisndt.com/blog/ultrasonic-testing-ultimate-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-purple-200 mb-4">Technical Guide • March 2026 • 22 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ultrasonic Testing: Ultimate Guide 2026</h1>
                        <p className="text-xl text-purple-100 mb-8">Master ultrasonic testing (UT). Learn the principles, conventional vs phased array (PAUT) vs TOFD techniques, equipment selection, weld inspection, thickness measurement, standards, and ASNT Level II certification.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="Ultrasonic Testing: Ultimate Guide 2026" description="Master UT, PAUT, TOFD, weld inspection, and thickness measurement techniques." />
                </div>
            </div>

            {/* Table of Contents */}
            <section className="bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6 py-8">
                    <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                    <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                        <li><Link to="#what-is-ut" className="text-purple-600 hover:underline">What is UT?</Link></li>
                        <li><Link to="#principles" className="text-purple-600 hover:underline">UT Principles</Link></li>
                        <li><Link to="#methods" className="text-purple-600 hover:underline">6 UT Methods</Link></li>
                        <li><Link to="#weld-inspection" className="text-purple-600 hover:underline">Weld Inspection</Link></li>
                        <li><Link to="#thickness" className="text-purple-600 hover:underline">Wall Thickness</Link></li>
                        <li><Link to="#standards" className="text-purple-600 hover:underline">Standards</Link></li>
                        <li><Link to="#vs-rt" className="text-purple-600 hover:underline">UT vs RT</Link></li>
                        <li><Link to="#certification" className="text-purple-600 hover:underline">Certification</Link></li>
                    </ul>
                </div>
            </section>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12" id="what-is-ut">
                        <h2 className="text-3xl font-bold mb-6">What is Ultrasonic Testing?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            <strong>Ultrasonic Testing (UT)</strong> is an NDT method using high-frequency sound waves (typically 1-5 MHz, up to 10 MHz for specialized applications) to detect internal defects and measure material thickness. Unlike surface-only methods like Magnetic Particle Testing or Penetrant Testing, UT penetrates deep into materials - capable of inspecting sections 100-300mm thick and detecting defects 50-200mm below the surface.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            UT is the primary method for weld inspection, pipeline thickness measurement, storage tank integrity assessment, and pressure vessel inspection. It's also the gold standard for detecting internal fatigue cracks in thick aerospace forgings and automotive components.
                        </p>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                            <p className="text-purple-900 font-semibold mb-2">Why UT Dominates NDT Industry:</p>
                            <ul className="text-purple-800 space-y-1">
                                <li>Detects internal defects (cracks, voids, lack of fusion) up to 300mm deep</li>
                                <li>Accurately measures remaining wall thickness, critical for RBI (Risk-Based Inspection)</li>
                                <li>No radiation hazard (safer than radiography)</li>
                                <li>Portable equipment enables field deployment</li>
                                <li>Fast inspection - covers large areas in minutes</li>
                                <li>Works on all metallic materials and many composites</li>
                            </ul>
                        </div>
                    </section>

                    {/* UT Principles */}
                    <section className="mb-12" id="principles">
                        <h2 className="text-3xl font-bold mb-6">How Ultrasonic Testing Works: Physics and Principles</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Ultrasonic Testing operates on the pulse-echo principle. A transducer converts electrical energy into mechanical vibrations (sound waves). These waves travel through the material; when they encounter a boundary (surface or defect), they reflect back to the transducer as echoes. The equipment measures echo return time to calculate distance.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">The Pulse-Echo Measurement Principle</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <p className="text-slate-700 mb-4">
                                <strong>Thickness Measurement Formula:</strong>
                            </p>
                            <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4 border-l-4 border-purple-500">
                                Thickness = (Sound Velocity × Echo Travel Time) / 2
                            </div>
                            <p className="text-slate-700 mb-4">
                                The "÷2" factor accounts for the sound traveling down to the back surface and returning - a round trip.
                            </p>
                            <p className="text-slate-700 mb-4">
                                <strong>Example:</strong> Steel has sound velocity ~5,850 m/s. If echo return time is 3.4 microseconds:
                            </p>
                            <div className="bg-slate-100 p-4 rounded font-mono text-sm border-l-4 border-purple-500">
                                Thickness = (5,850 m/s × 3.4 × 10⁻⁶ s) / 2 = 10.0 mm
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Key Physics Concepts</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Acoustic Impedance</h4>
                                <p className="text-slate-600 text-sm">Product of material density and sound velocity (Z = ρ × v). Differences in impedance between materials cause reflections. Greater impedance difference = stronger reflection.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Attenuation</h4>
                                <p className="text-slate-600 text-sm">Sound energy decreases as it travels through material. Coarse-grained materials (large castings, austenitic stainless) attenuate sound heavily, limiting UT depth. Frequency increases attenuation - 5 MHz penetrates less than 2 MHz.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Coupling</h4>
                                <p className="text-slate-600 text-sm">Sound cannot transmit through air. Couplants (water, gel, oil) fill gaps between transducer and material surface. Poor coupling loses 50-90% of signal amplitude, causing missed defects.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Frequency Selection</h4>
                                <p className="text-slate-600 text-sm">Higher frequency = better resolution (finds tiny defects) but shorter penetration. Lower frequency = deeper penetration but lower resolution. Typically 2-5 MHz for welds, 1-2 MHz for thick sections.</p>
                            </div>
                        </div>
                    </section>

                    {/* UT Methods */}
                    <section className="mb-12" id="methods">
                        <h2 className="text-3xl font-bold mb-6">6 Ultrasonic Testing Methods</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            While all UT methods use the same physics principle, they differ in equipment configuration, scanning approach, and data presentation. Understanding these variations is essential for selecting the right method for each application.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-purple-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Frequency</th>
                                        <th className="px-3 py-2 text-left font-semibold">Penetration</th>
                                        <th className="px-3 py-2 text-left font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {utMethods.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.name}</td>
                                            <td className="px-3 py-2">{item.frequency}</td>
                                            <td className="px-3 py-2">{item.penetration}</td>
                                            <td className="px-3 py-2">{item.ideal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Conventional Pulse-Echo (A-Scan)</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">The traditional and most common UT method. A single transducer sends pulses and receives echoes. Data displays as a 1D waveform (amplitude vs time) called an A-scan. The operator positions the transducer manually and scans the inspection area point-by-point.</p>
                            <p className="text-slate-700">Applications: Thickness measurement, weld inspection, defect depth sizing. Speed: 5-15 mm/sec scan speed - adequate for spot checks but slow for large areas.</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Phased Array UT (PAUT)</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">Revolutionary advancement. An array of 32-256 transducer elements fires in precise time sequences, electronically steering and focusing the beam without moving the probe. Simultaneously inspects at multiple angles (typically 35-70° in 5-10° increments) while maintaining single probe contact position.</p>
                            <p className="text-slate-700 mb-3">Advantages: 5-10x faster than conventional (covers large welds in seconds), superior small flaw detection, multi-angle data enables better defect characterization, reduced operator dependency. Disadvantages: higher cost (a scoped, quoted figure equipment), requires specialized training, more complex interpretation.</p>
                            <p className="text-slate-700">Applications: Pipeline girth welds (gold standard), pressure vessel inspections, structural welds. Industry adoption: PAUT is now standard in oil & gas; API 1104 requires PAUT for critical pipelines.</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Time-of-Flight Diffraction (TOFD)</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">Advanced technique using diffraction physics. Two angled transducers bracket a weld (one sends, one receives). Sound diffracts off defect edges rather than reflects from faces. The diffraction arrival time indicates defect depth with exceptional accuracy (±0.5mm on 25mm thickness).</p>
                            <p className="text-slate-700 mb-3">Advantages: Superior depth accuracy, detects very tight cracks ({'<'}0.1mm), provides quantitative defect sizing, less affected by defect orientation. Disadvantages: slower (requires careful transducer positioning), complex interpretation, limited to weld inspection.</p>
                            <p className="text-slate-700">Applications: Critical welds where high-accuracy defect sizing is mandatory (aerospace, pressure vessels, nuclear). Cost: scoped and quoted equipment + specialized operator training (6-12 months).</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Automated Ultrasonic Testing (AUT)</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">Robotic scanning systems that automatically position transducers and scan large areas. Bobbin coil probes scan tube internals; multi-probe arrays scan pipe walls and tank floors. Produces 3D datasets (C-scans) showing defect location and depth in graphical format.</p>
                            <p className="text-slate-700 mb-3">Advantages: Consistent results (eliminates operator variability), extremely fast (scans 100+ linear meters/hour), produces permanent digital records, excellent for production screening. Disadvantages: high capital cost (a significant cost item), requires setup/qualification, less flexibility than manual scanning.</p>
                            <p className="text-slate-700">Applications: Storage tank floor scanning (detects corrosion loss), steam generator tube inspection, pipeline wall inspection, production quality control.</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Through-Transmission UT</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">Two transducers on opposite sides of material - one transmits, other receives. Sound travels completely through the material. Loss of signal indicates interior defects (delaminations, disbonds, voids).</p>
                            <p className="text-slate-700">Applications: Composite inspection (delamination detection), adhesive bond testing, thin material screening. Limitation: requires access to both sides of material, not useful for thickness measurement.</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Immersion UT</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <p className="text-slate-700 mb-3">Transducers and specimen are immersed in water, eliminating coupling agent variability. Enables use of very high frequencies (up to 50 MHz) for precise defect imaging and material characterization.</p>
                            <p className="text-slate-700">Applications: Laboratory testing, research, aerospace component qualification, fine material analysis. Limitation: impractical for field/in-service inspection.</p>
                        </div>
                    </section>

                    {/* Weld Inspection */}
                    <section className="mb-12" id="weld-inspection">
                        <h2 className="text-3xl font-bold mb-6">Ultrasonic Weld Inspection in Detail</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            UT is the standard method for internal weld flaw detection across all industries. It detects porosity, lack of fusion, cracks, inclusions, and tungsten (in GTAW). UT excels where other methods fail: it finds internal defects regardless of surface condition and provides depth information.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Common Weld Defects Detected by UT</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Porosity</h4>
                                <p className="text-slate-600 text-sm">Gas pores trapped during solidification. Appear as scattered echoes across weld volume. High-frequency PAUT (70° angle) best detects small pores.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Lack of Fusion</h4>
                                <p className="text-slate-600 text-sm">Incomplete melting between weld passes or base metal. Appears as linear echo parallel to weld centerline. Multi-angle PAUT scanning improves detection probability.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Lack of Penetration</h4>
                                <p className="text-slate-600 text-sm">Incomplete fusion at weld root. Creates linear echo at weld root depth. Critical defect - typical acceptance: 0% LOF.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Cracks</h4>
                                <p className="text-slate-600 text-sm">Fatigue, stress-relief, or hydrogen-induced cracking. Tight cracks challenging to detect. TOFD provides superior crack detection; PAUT provides defect location.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">UT Weld Inspection Standards and Acceptance Criteria</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <p className="text-slate-700 mb-4">Acceptance criteria vary by standard and application. Examples:</p>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li><strong>ASME Section V (Pressure Vessels):</strong> Indications are evaluated as relevant or non-relevant. Relevant indications (cracks, LOF) are unacceptable; some porosity distributions may be acceptable within limits.</li>
                                <li><strong>AWS D1.1 (Structural Welds):</strong> Porosity cumulative area limits, LOF/LOB restrictions, 0% acceptance for cracks.</li>
                                <li><strong>API 1104 (Pipeline Welds):</strong> Stricter limits for high-pressure lines. Automated acceptance criteria in newer versions.</li>
                                <li><strong>ASME Section VIII Div 1 (Pressure Vessels):</strong> Maximum flaw depth 6mm or 10% wall thickness (whichever is less); cumulative flaw area limitations.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Wall Thickness Measurement */}
                    <section className="mb-12" id="thickness">
                        <h2 className="text-3xl font-bold mb-6">Ultrasonic Wall Thickness Measurement</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            UT thickness measurement is critical for assessing remaining safe operating life of pipelines, storage tanks, heat exchangers, and pressure vessels. Measuring actual thickness allows prediction of remaining service life based on historical corrosion rates.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">How UT Thickness Measurement Works</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <p className="text-slate-700 mb-4">
                                A pulse-echo transducer sends a signal; the back-surface echo return time indicates material thickness. The instrument displays thickness directly after accounting for material sound velocity. No surface preparation needed - inspects through paint, scale, and light corrosion.
                            </p>
                            <p className="text-slate-700 mb-4">
                                <strong>Accuracy:</strong> ±0.1-0.5mm depending on surface finish, material, and frequency. Rough surfaces degrade accuracy; smooth surfaces achieve ±0.1mm.
                            </p>
                            <p className="text-slate-700">
                                <strong>Typical applications:</strong> Pipeline RBI (Risk-Based Inspection), storage tank floor/shell thickness assessment, boiler tube corrosion mapping, heat exchanger tube thickness verification.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Pipeline Thickness Scanning Best Practices</h3>
                        <ul className="space-y-3 bg-white p-6 rounded-lg shadow-sm text-slate-700 mb-6">
                            <li className="flex gap-3">
                                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Scan Pattern:</strong> Grid pattern with 25-50mm spacing perpendicular to flow; circumferential scans every 100-300mm along length depending on corrosion history</span>
                            </li>
                            <li className="flex gap-3">
                                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Frequency:</strong> 2-5 MHz standard; 1-2 MHz for thick walls or rough surfaces</span>
                            </li>
                            <li className="flex gap-3">
                                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Surface Preparation:</strong> Remove loose scale, rust, and paint in scan area. Grinding to 25-50 micron smoothness optimal; acceptable up to 0.5-1.0mm roughness</span>
                            </li>
                            <li className="flex gap-3">
                                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Calibration:</strong> Calibrate on reference block of same material/thickness before and after scanning; verify every 50-100 measurements</span>
                            </li>
                            <li className="flex gap-3">
                                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Corrosion Rate Calculation:</strong> Compare current measurements against prior year baseline to calculate corrosion rate (mm/year)</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold mb-4">Risk-Based Inspection (RBI) Using UT Thickness Data</h3>
                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <p className="text-purple-900 mb-4">
                                API 579 and AWS provide frameworks for fitness-for-service assessment using UT thickness measurements. Remaining Safe Operating Life (RSOL) is calculated as:
                            </p>
                            <div className="bg-white p-4 rounded font-mono text-sm mb-4 border-l-4 border-purple-500 text-purple-900">
                                RSOL (years) = (Current Thickness - Minimum Allowable Thickness) / Corrosion Rate<br/><br/>
                                Example: If current pipe is 5.5mm, minimum is 2.0mm, corrosion rate is 0.5mm/year:<br/>
                                RSOL = (5.5 - 2.0) / 0.5 = 7 years before replacement needed
                            </div>
                            <p className="text-purple-900">
                                This RBI approach optimizes inspection intervals - instead of fixed 5-year inspections on all pipes, RBI focuses resources on high-corrosion sections needing frequent inspections while extending intervals on low-corrosion sections.
                            </p>
                        </div>
                    </section>

                    {/* Standards */}
                    <section className="mb-12" id="standards">
                        <h2 className="text-3xl font-bold mb-6">UT Standards and Codes</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Ultrasonic Testing is governed by internationally recognized standards establishing procedures, equipment calibration, and acceptance criteria. Compliance is mandatory in regulated industries (oil & gas, power generation, aerospace).
                        </p>
                        <div className="grid gap-4 mb-8">
                            {standards.map((std, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                                    <h4 className="font-bold text-purple-900 mb-1">{std.standard}</h4>
                                    <p className="text-slate-600 text-sm">{std.scope}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* UT vs RT */}
                    <section className="mb-12" id="vs-rt">
                        <h2 className="text-3xl font-bold mb-6">Ultrasonic Testing vs Radiography (RT)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Both UT and RT detect internal defects but use different physics. For weld inspection, UT is typically primary method; RT confirms critical findings. Understanding the trade-offs is essential for NDT planning.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-purple-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Criterion</th>
                                        <th className="px-3 py-2 text-left font-semibold">Ultrasonic Testing</th>
                                        <th className="px-3 py-2 text-left font-semibold">Radiography</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {utVsRt.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.criterion}</td>
                                            <td className="px-3 py-2 text-xs">{item.ut}</td>
                                            <td className="px-3 py-2 text-xs">{item.rt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">When to Use UT vs RT</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-green-900 mb-3">Use UT When:</h4>
                                <ul className="space-y-2 text-green-800 text-sm">
                                    <li>Detecting tight cracks is critical (UT superior)</li>
                                    <li>Measuring defect depth is needed (UT provides exact depth)</li>
                                    <li>Material thickness {'>'}3mm (UT penetrates easily)</li>
                                    <li>Speed is important (UT 5-10x faster)</li>
                                    <li>Safety is critical (no radiation hazard)</li>
                                    <li>Accessibility is limited (only one side needed)</li>
                                </ul>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                                <h4 className="font-bold text-amber-900 mb-3">Use RT When:</h4>
                                <ul className="space-y-2 text-amber-800 text-sm">
                                    <li>Visualizing porosity patterns is important</li>
                                    <li>Permanent radiographic record required</li>
                                    <li>Confirming UT findings on critical welds</li>
                                    <li>Thick planar defects (LOF parallel to beam)</li>
                                    <li>Inspecting material {'<'}1.5mm or very thick ({'>'}75mm)</li>
                                    <li>Legal/contractual requirement for film record</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Equipment & Costs */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">UT Equipment and Cost Analysis</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            UT equipment ranges from simple handheld thickness gauges (a significant cost item) to sophisticated phased array systems (a scoped, quoted figure+). Equipment selection depends on application complexity and required defect detection sensitivity.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-purple-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Equipment/Service</th>
                                        <th className="px-4 py-3 text-left font-semibold">Cost Range</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costGuide.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3">{item.item}</td>
                                            <td className="px-4 py-3 font-semibold text-purple-700">{item.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Certification */}
                    <section className="mb-12" id="certification">
                        <h2 className="text-3xl font-bold mb-6">UT Certification and Training</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            ASNT Level II UT certification requires 120-160 hours of training plus 1,000-1,500 field experience hours. Most technicians take 3-5 years to accumulate required experience. Advanced certifications (PAUT, TOFD) require additional specialized training.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">ASNT Level II Certification Path</h3>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                                <h4 className="font-bold text-lg mb-2">Training Requirements</h4>
                                <ul className="space-y-2 text-slate-700">
                                    <li>120-160 hours formal instruction covering: UT physics, instrument operation, transducer types, coupling, standards, weld defect interpretation</li>
                                    <li>Cost: scoped and quoted depending on provider</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                                <h4 className="font-bold text-lg mb-2">Field Experience</h4>
                                <ul className="space-y-2 text-slate-700">
                                    <li>1,000-1,500 hours practical experience under Level II/III supervision</li>
                                    <li>Must cover diverse applications (welds, thickness measurement, defect depth sizing)</li>
                                    <li>Typically 3-5 years of active work at 20+ hours/week</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                                <h4 className="font-bold text-lg mb-2">Examination</h4>
                                <ul className="space-y-2 text-slate-700">
                                    <li>Written exam (120 minutes, 100 questions) on UT theory and standards</li>
                                    <li>Practical exam with unknown defects - must detect and size flaws</li>
                                    <li>Oral exam by ASNT certified examiner</li>
                                    <li>Cost: scoped and quoted exam fees</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Advanced UT Specializations</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">PAUT Certification</h4>
                                <p className="text-slate-600 text-sm mb-3">Advanced training in phased array equipment, multi-angle beam steering, sector scanning.</p>
                                <p className="text-sm"><strong>Time:</strong> 100+ hours | <strong>Cost:</strong> a scoped, quoted figure | <strong>Salary impact:</strong> +40-70% premium</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">TOFD Certification</h4>
                                <p className="text-slate-600 text-sm mb-3">Diffraction physics, high-accuracy depth sizing, tight crack detection.</p>
                                <p className="text-sm"><strong>Time:</strong> 150+ hours | <strong>Cost:</strong> a scoped, quoted figure | <strong>Salary impact:</strong> +35-55% premium</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Ultrasonic Testing Services?</h2>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">Our ASNT Level II/III UT technicians provide weld inspection, thickness measurement, and PAUT scanning with expertise in API, ASME, and AWS standards.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request UT Inspection</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">UT Training Course</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related NDT Methods</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/radiographic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-purple-600 transition">Radiographic Testing (RT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Internal defect detection with permanent radiographic records</p>
                            </Link>
                            <Link to="/eddy-current-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-purple-600 transition">Eddy Current Testing (ECT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Fast surface and near-surface crack detection</p>
                            </Link>
                            <Link to="/magnetic-particle-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-purple-600 transition">Magnetic Particle Testing (MT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Surface defect detection on ferromagnetic materials</p>
                            </Link>
                        </div>
                    </section>
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>

            <ContactDetails />
        </div>
    );
}
