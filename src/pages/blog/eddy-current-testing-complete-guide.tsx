import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema } from "@/data/author-schema";

const faqs = [
    { question: "What is eddy current testing (ECT)?", answer: "Eddy Current Testing (ECT) is an electromagnetic NDT method that detects surface and near-surface defects in electrically conductive materials. An alternating current through a probe coil creates an electromagnetic field that induces eddy currents in the test material. Cracks, corrosion, and material variations disrupt these currents, producing measurable signals in the probe impedance. ECT is ideal for detecting fatigue cracks in aircraft components, corrosion under insulation, and tubing inspection." },
    { question: "What are the main types of eddy current testing?", answer: "The seven primary types of ECT are: (1) Conventional single-frequency fixed probe, (2) Differential probes, (3) Absolute (self-comparison) probes, (4) Pancake coils for broad surface coverage, (5) Bobbin coils for tube inspection, (6) Bridge impedance (impedance plane), and (7) Pulsed eddy current for deeper penetration. Each type serves specific applications - conventional EC for aerospace crack detection, bobbin for condenser tubes, and pulsed EC for corrosion under insulation (CUI) detection in pipeline inspection." },
    { question: "Can eddy current testing detect internal defects?", answer: "Eddy Current Testing primarily detects surface and near-surface defects (typically within 5mm of the surface depending on frequency and material). Pulsed Eddy Current (PEC) extends penetration to 10-20mm for corrosion under insulation detection. For deeper internal defects, Ultrasonic Testing (UT) is more effective. However, ECT's superior surface crack sensitivity makes it the preferred method for fatigue crack detection in aircraft engine components, landing gear, and high-stress structures." },
    { question: "How deep can eddy current testing detect?", answer: "Standard ECT penetration depends on frequency and material conductivity: high frequency (>100 kHz) probes detect defects within 1-2mm; mid-frequency (10-50 kHz) reach 3-5mm; low frequency (1-10 kHz) reach 5-10mm. Pulsed Eddy Current (PEC) operates at lower effective frequencies and can detect defects and corrosion under insulation (CUI) up to 15-25mm deep on pipelines. For comparison, Ultrasonic Testing achieves much greater depth (100mm+) but is less sensitive to small surface cracks." },
    { question: "What materials can be inspected with eddy current testing?", answer: "ECT requires electrically conductive materials. Ferromagnetic materials (iron, steel, nickel) show complex impedance responses due to permeability changes. Non-ferromagnetic conductors (aluminum, copper, titanium, austenitic stainless steel) show simpler responses. ECT cannot inspect non-conductive materials like composites, plastics, or ceramics. Special techniques are required for ferromagnetic materials due to magnetic permeability effects, but they remain inspectable - making ECT ideal for steel pipelines, aircraft structures, and cast stainless steel components." },
    { question: "What is the difference between ECT and Magnetic Particle Testing (MT)?", answer: "Both ECT and MT detect surface defects but use different physics. ECT uses electromagnetic induction (works on conductive non-ferromagnetic materials like aluminum) and detects defects within 5mm depth. MT uses permanent magnetic fields (works only on ferromagnetic materials like steel) and primarily detects surface defects. ECT provides faster scanning, no surface prep required (no liquid contamination), and allows simultaneous multi-defect detection. MT is more portable and lower-cost for production environments. For critical aircraft aluminum inspections, ECT is preferred; for steel weld inspection, MT is standard." },
    { question: "What certifications are needed for eddy current testing?", answer: "NDT Level II and Level III certifications in Eddy Current Testing are granted by ASNT (American Society for Nondestructive Testing) or equivalent ISO 9712 bodies. SNT-TC-1A requires 80-160 hours training and 800-1,200 field experience hours for Level II. Aerospace qualifications may require additional TYPE certifications (e.g., Boeing, Airbus structural EC inspection). API 510/570 certifications for pipeline inspection may include ECT qualifications. Employers often require Level II minimum with documented proficiency in specific equipment and procedures (e.g., Eddyfi Cyclone, Olympus NORTEC). Certification renewal typically required every 3-5 years with recertification exams." },
    { question: "What industries use eddy current testing most?", answer: "Primary industries for ECT: (1) Aerospace - fatigue crack detection in engine components, landing gear, structural inspections; (2) Oil & Gas - pipeline corrosion under insulation (CUI), weld flaw detection; (3) Power Generation - steam generator tube inspection in nuclear plants, corrosion assessment; (4) Manufacturing - production quality control of fasteners, bearings, tool inspection; (5) Rail Transportation - axle and wheel defect detection; (6) Automotive - engine component and suspension system inspection. Aerospace and power generation account for approximately 60% of all ECT inspection globally." }
];

const ectTypes = [
    { name: "Conventional Fixed Probe", frequency: "High (50-500 kHz)", depth: "1-2mm", ideal: "Fatigue cracks, surface flaws", industries: "Aerospace, automotive" },
    { name: "Differential Probe", frequency: "High (50-500 kHz)", depth: "1-3mm", ideal: "Material property changes, small cracks", industries: "Manufacturing, aerospace" },
    { name: "Absolute/Self-Comparison Probe", frequency: "Mid (10-100 kHz)", depth: "2-5mm", ideal: "Corrosion, pitting, surface oxidation", industries: "Pipeline, power generation" },
    { name: "Pancake Coil", frequency: "Mid (10-100 kHz)", depth: "2-4mm", ideal: "Broad surface area coverage", industries: "Aircraft fuselage, large plates" },
    { name: "Bobbin Coil", frequency: "Mid-High (20-100 kHz)", depth: "2-5mm", ideal: "Tube and pipe inspection", industries: "Power generation, HVAC" },
    { name: "Bridge Impedance", frequency: "Variable (1-500 kHz)", depth: "1-5mm", ideal: "High precision defect sizing", industries: "Research, aerospace" },
    { name: "Pulsed Eddy Current (PEC)", frequency: "Low (0.1-10 kHz)", depth: "10-25mm", ideal: "CUI under insulation, thick coatings", industries: "Pipeline, oil & gas" }
];

const applications = [
    { industry: "Aerospace", applications: "Engine blade crack detection, landing gear inspection, fuselage fatigue cracks, fastener hole cracking, aerospace alloy defect detection", criticality: "Safety-critical" },
    { industry: "Oil & Gas", applications: "Pipeline corrosion under insulation (CUI), weld flaw detection, tubing inspection, coating integrity, subsea component inspection", criticality: "Critical" },
    { industry: "Power Generation", applications: "Steam generator tube inspection (nuclear), boiler tube cracking, turbine blade assessment, heat exchanger corrosion", criticality: "Safety-critical" },
    { industry: "Automotive", applications: "Crankshaft inspection, suspension component cracking, bearing race defects, engine block assessment, axle inspections", criticality: "Critical" },
    { industry: "Manufacturing", applications: "Fastener quality control, tool life assessment, bearing inspection, gear surface defects, casting porosity detection", criticality: "Quality control" },
    { industry: "Rail/Transportation", applications: "Axle defect detection, wheel crack detection, bearing assessment, rail flaw inspection, bogie component screening", criticality: "Safety-critical" }
];

const standards = [
    { standard: "ASTM E309", title: "Standard Practice for Eddy-Current Testing", scope: "General ECT procedures, equipment calibration, defect detection" },
    { standard: "ASTM E426", title: "Standard Practice for Eddy-Current Testing of Tubing", scope: "Tube and pipe inspection procedures, sensitivity levels, acceptance criteria" },
    { standard: "ASTM E1444", title: "Standard Practice for Electromagnetic Testing of Steel Forgings", scope: "Ferromagnetic material ECT, inclusion detection" },
    { standard: "ISO 15549", title: "Non-destructive testing - Eddy current testing - General principles and equipment", scope: "ISO equivalent to ASTM E309, equipment specifications" },
    { standard: "Boeing BAC 5571", title: "Eddy Current Inspection Requirements", scope: "Aerospace structural ECT procedures, aircraft-specific requirements" },
    { standard: "Airbus 25-1000", title: "Airbus Maintenance Manual ECT Practices", scope: "Airbus aircraft ECT inspection requirements and procedures" },
    { standard: "API RP 578", title: "Materials and Verification Program for New and Used Pressure Equipment", scope: "Pipeline and pressure equipment ECT acceptance criteria" }
];

const comparisonMethods = [
    { method: "ECT", speed: "Fast (500-1000 mm/s)", coverage: "Broad (large coils)", depth: "Shallow (1-5mm)", cost: "Moderate ($50-100/hr)", industries: "Aerospace, manufacturing" },
    { method: "Magnetic Particle (MT)", speed: "Moderate (100-300 mm/s)", coverage: "Moderate", depth: "Very shallow (<1mm)", cost: "Low ($30-60/hr)", industries: "Steel welds, castings" },
    { method: "Penetrant Testing (PT)", speed: "Slow (requires drying)", coverage: "Excellent (opens cracks)", depth: "Very shallow", cost: "Moderate ($40-80/hr)", industries: "All metals, castings" },
    { method: "Ultrasonic Testing (UT)", speed: "Slow (point measurement)", coverage: "Point scans", depth: "Very deep (100mm+)", cost: "High ($80-150/hr)", industries: "Welds, pipe thickness" },
    { method: "Radiography (RT)", speed: "Very slow (setup intensive)", coverage: "Excellent (internal defects)", depth: "Complete penetration", cost: "Very high ($150-300/hr)", industries: "Aerospace, critical welds" }
];

const costGuide = [
    { item: "Equipment (Single Probe System)", cost: "$15,000-$40,000" },
    { item: "Multi-Channel System (4-8 probes)", cost: "$40,000-$100,000" },
    { item: "Pulsed Eddy Current System", cost: "$30,000-$60,000" },
    { item: "Automated ECT Scanner (tube inspection)", cost: "$100,000-$200,000" },
    { item: "Inspection Labor (Level II technician)", cost: "$50-$100/hour" },
    { item: "Probe Replacement/Maintenance", cost: "$2,000-$5,000/year" },
    { item: "Calibration Standards/Block", cost: "$500-$2,000" },
    { item: "Training (Level II ASNT)", cost: "$2,000-$4,000" }
];

export default function EddyCurrentTestingCompleteGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/blog/eddy-current-testing-complete-guide",
                headline: "Eddy Current Testing (ECT) 2026: 7 Types, Standards, Equipment $15K-$200K, Applications",
                description: "Complete ECT deep-dive: 7 methods (conventional, ECA, RFEC, pulsed, NFT, IRIS, LFET), EM induction physics (δ = √(2/ωμσ) skin depth), ASTM E309/E426/E2338/E2884 standards, aerospace fatigue crack POD, heat exchanger tubing, equipment $15K-$200K, ASNT ECT Level II path. By ASNT Level III Anoop Rayavarapu.",
                datePublished: "2026-03-09",
                dateModified: "2026-04-18",
                section: "NDT Methods — Electromagnetic",
                keywords: "eddy current testing, ECT, ECA, RFEC, pulsed eddy current, aerospace NDT, tubing inspection",
                dependencies: "ASTM E309, ASTM E426, ASTM E2338, ASTM E2884, ISO 15548-1/2/3, ASNT SNT-TC-1A",
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
                title="Eddy Current Testing 2026: 7 ECT Types, Skin-Depth Physics, $15K–$200K Equipment"
                description="ECT deep-dive: 7 methods (conventional, ECA, RFEC, pulsed, IRIS), skin-depth formula δ=√(2/ωμσ), ASTM E309/E426/E2338, aerospace fatigue POD, tubing."
                keywords="eddy current testing, ECT, eddy current inspection, ECL, pulsed eddy current, PEC, ASTM E309, E426, bobbin coil, pancake coil, aerospace NDT, pipeline inspection, corrosion under insulation, CUI detection, eddy current probe, ECT equipment"
                canonical="https://atlantisndt.com/blog/eddy-current-testing-complete-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Technical Guide • March 2026 • 20 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Eddy Current Testing: Complete Guide</h1>
                        <p className="text-xl text-blue-100 mb-8">Master eddy current testing (ECT). Learn how it works, the 7 types, applications by industry, ASTM standards, equipment selection, and certification requirements for aerospace, oil & gas, and power generation.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="Eddy Current Testing: Complete Guide" description="Master ECT methods, types, standards, and applications across aerospace and oil & gas." />
                </div>
            </div>

            {/* Table of Contents */}
            <section className="bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6 py-8">
                    <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                    <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                        <li><Link to="#what-is-ect" className="text-blue-600 hover:underline">What is Eddy Current Testing?</Link></li>
                        <li><Link to="#how-it-works" className="text-blue-600 hover:underline">How ECT Works</Link></li>
                        <li><Link to="#types" className="text-blue-600 hover:underline">7 Types of ECT</Link></li>
                        <li><Link to="#applications" className="text-blue-600 hover:underline">Industry Applications</Link></li>
                        <li><Link to="#standards" className="text-blue-600 hover:underline">Standards & Codes</Link></li>
                        <li><Link to="#comparison" className="text-blue-600 hover:underline">vs Other Methods</Link></li>
                        <li><Link to="#equipment" className="text-blue-600 hover:underline">Equipment & Costs</Link></li>
                        <li><Link to="#certification" className="text-blue-600 hover:underline">Certification</Link></li>
                    </ul>
                </div>
            </section>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12" id="what-is-ect">
                        <h2 className="text-3xl font-bold mb-6">What is Eddy Current Testing?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            <strong>Eddy Current Testing (ECT)</strong>, also known as Eddy Current Inspection or ECL (Electromagnetic), is an electromagnetic NDT method used to detect surface and near-surface defects in electrically conductive materials. Unlike Magnetic Particle Testing which requires ferromagnetic materials, ECT works on all conductive materials - aluminum, titanium, stainless steel, copper, and ferrous metals.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            ECT is one of the fastest and most sensitive methods for detecting fatigue cracks in aerospace components, making it the preferred choice for critical safety inspections. It's also increasingly used for detecting corrosion under insulation (CUI) in pipeline inspection using Pulsed Eddy Current (PEC) technology.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                            <p className="text-blue-900 font-semibold mb-2">Key Advantages:</p>
                            <ul className="text-blue-800 space-y-1">
                                <li>Extreme sensitivity to surface and near-surface cracks (can detect {'<'}0.5mm cracks)</li>
                                <li>Fast scanning speeds (500-1000 mm/s) - inspects large areas quickly</li>
                                <li>No surface preparation needed - inspects through paint, oxidation</li>
                                <li>Works on all conductive materials (aluminum, steel, titanium, stainless steel)</li>
                                <li>Quantitative results with impedance plane analysis</li>
                            </ul>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-12" id="how-it-works">
                        <h2 className="text-3xl font-bold mb-6">How Eddy Current Testing Works</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing operates on the principle of electromagnetic induction. The ECT probe contains a coil wound around a ferrite core. When alternating current (AC) at a specific frequency flows through this coil, it creates an alternating electromagnetic field that penetrates the test material.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            <strong>Step-by-step process:</strong>
                        </p>
                        <ol className="text-slate-600 text-lg space-y-4 mb-6 list-decimal list-inside">
                            <li><strong>Induction:</strong> The AC-powered probe coil creates a magnetic field in the test material</li>
                            <li><strong>Eddy Current Formation:</strong> This magnetic field induces circular electric currents (eddy currents) in the conductive material, flowing perpendicular to the probe</li>
                            <li><strong>Opposition:</strong> These eddy currents create their own magnetic field that opposes the probe's field (Lenz's law)</li>
                            <li><strong>Impedance Change:</strong> When a defect (crack, corrosion, material change) disrupts eddy current flow, it alters the total impedance of the probe coil</li>
                            <li><strong>Signal Detection:</strong> The equipment measures changes in coil impedance, displaying them as a signal on an impedance plane or in a C-scan format</li>
                        </ol>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The impedance plane (also called Lenz's vector diagram) plots the magnitude and phase of the impedance change, allowing technicians to distinguish between defects, material properties, and geometry changes. Larger cracks produce larger signals; deeper defects produce phase shifts compared to surface cracks.
                        </p>
                    </section>

                    {/* Types of ECT */}
                    <section className="mb-12" id="types">
                        <h2 className="text-3xl font-bold mb-6">7 Types of Eddy Current Testing</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing encompasses seven distinct types, each optimized for specific applications, material geometries, and defect detection needs. Understanding which type to use is essential for achieving the required defect detection sensitivity.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Type</th>
                                        <th className="px-4 py-3 text-left font-semibold">Frequency Range</th>
                                        <th className="px-4 py-3 text-left font-semibold">Penetration</th>
                                        <th className="px-4 py-3 text-left font-semibold">Ideal For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ectTypes.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.name}</td>
                                            <td className="px-4 py-3 text-sm">{item.frequency}</td>
                                            <td className="px-4 py-3 text-sm">{item.depth}</td>
                                            <td className="px-4 py-3 text-sm">{item.ideal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Detailed Type Descriptions</h3>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">1. Conventional Fixed-Frequency Probe ECT</h4>
                            <p className="text-slate-600 mb-2">The most common ECT method, using a single AC frequency (typically 100-500 kHz). The probe is held perpendicular to the surface and scanned over it. Results are displayed as analog or digital signals representing impedance changes.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Fatigue crack detection in aerospace components, quality control in manufacturing, surface defect screening.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">2. Differential Probe ECT</h4>
                            <p className="text-slate-600 mb-2">Contains two identical coils wound together. One acts as a reference, the other as a measurement coil. Differential configuration cancels out material property variations and geometry noise, increasing signal-to-noise ratio.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Detecting small cracks in the presence of material property gradients, fastener hole inspections, precision aerospace applications.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">3. Absolute (Self-Comparison) Probe ECT</h4>
                            <p className="text-slate-600 mb-2">Uses a single coil without a reference. The probe impedance changes relative to a baseline established during setup. Simpler than differential but more sensitive to material property variations.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Corrosion detection, material sorting, general defect screening on uniform materials.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">4. Pancake Coil (Flat Probe) ECT</h4>
                            <p className="text-slate-600 mb-2">A flat, disc-shaped coil for scanning large, flat surfaces (aircraft fuselage, pipe walls). Higher frequencies mean shallower penetration but faster scanning.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Aircraft skin fatigue crack detection, pipeline girth weld inspection, large plate area coverage.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">5. Bobbin Coil ECT</h4>
                            <p className="text-slate-600 mb-2">A hollow cylindrical coil that surrounds the tube during inspection. The probe is either pulled through the tube or the tube rotates over the stationary probe. Ideal for high-volume tube inspection.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Steam generator tube inspection in nuclear power plants, condenser tube screening in HVAC systems, industrial heat exchanger tubing, production tube quality control.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">6. Bridge Impedance (Impedance Plane) Analysis</h4>
                            <p className="text-slate-600 mb-2">Advanced analysis technique that plots real and imaginary components of impedance on the complex plane. Enables defect sizing, material property characterization, and distinction between crack types.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Research and development, aerospace qualification, defect classification, material property mapping.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                            <h4 className="text-lg font-bold mb-2">7. Pulsed Eddy Current (PEC)</h4>
                            <p className="text-slate-600 mb-2">Uses short pulses of electromagnetic energy rather than continuous AC. The decay rate of eddy currents provides information about deeper defects. Penetration extends to 10-25mm.</p>
                            <p className="text-slate-600"><strong>Applications:</strong> Corrosion under insulation (CUI) detection on pipelines, wall thickness measurement through thick coatings, subsea inspection, detection of defects beneath 3-5mm of coating or insulation.</p>
                        </div>
                    </section>

                    {/* Applications by Industry */}
                    <section className="mb-12" id="applications">
                        <h2 className="text-3xl font-bold mb-6">ECT Applications by Industry</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing is mission-critical in safety-sensitive industries. Its ability to detect sub-millimeter fatigue cracks makes it indispensable in aerospace. In oil & gas, Pulsed Eddy Current has become the standard for corrosion under insulation detection on in-service pipelines.
                        </p>
                        <div className="grid gap-4 mb-8">
                            {applications.map((app, idx) => (
                                <Card key={idx}>
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg">{app.industry}</CardTitle>
                                            <span className={`text-sm px-3 py-1 rounded-full font-semibold ${
                                                app.criticality === 'Safety-critical' ? 'bg-red-100 text-red-700' :
                                                app.criticality === 'Critical' ? 'bg-orange-100 text-orange-700' :
                                                'bg-green-100 text-green-700'
                                            }`}>
                                                {app.criticality}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{app.applications}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Standards */}
                    <section className="mb-12" id="standards">
                        <h2 className="text-3xl font-bold mb-6">Standards and Codes for ECT</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing is governed by internationally recognized standards that establish procedures, equipment specifications, and acceptance criteria. Compliance with these standards is mandatory in regulated industries.
                        </p>
                        <div className="grid gap-4 mb-8">
                            {standards.map((std, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="font-bold text-blue-900 mb-1">{std.standard}</h4>
                                    <p className="font-semibold text-slate-700 mb-2">{std.title}</p>
                                    <p className="text-slate-600 text-sm">{std.scope}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <p className="text-slate-700 mb-4">
                                <strong>ASTM E309 (Standard Practice for Eddy-Current Testing)</strong> is the foundational US standard covering general ECT principles, probe types, equipment requirements, and calibration procedures. ASTM E426 specifically addresses tube inspection procedures, establishing sensitivity levels and acceptance criteria for tubing applications.
                            </p>
                            <p className="text-slate-700">
                                Aerospace components follow Boeing BAC 5571 and Airbus 25-1000 specifications, which mandate specific ECT techniques, acceptance criteria, and documentation requirements beyond generic ASTM standards. These aerospace qualifications require initial demonstration of capability followed by periodic re-certification.
                            </p>
                        </div>
                    </section>

                    {/* Comparison with Other Methods */}
                    <section className="mb-12" id="comparison">
                        <h2 className="text-3xl font-bold mb-6">ECT vs Other NDT Methods Comparison</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing excels in specific applications but has limitations compared to other methods. Understanding these trade-offs is essential for selecting the right inspection method.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Speed</th>
                                        <th className="px-3 py-2 text-left font-semibold">Coverage</th>
                                        <th className="px-3 py-2 text-left font-semibold">Depth</th>
                                        <th className="px-3 py-2 text-left font-semibold">Cost/Hr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonMethods.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.method}</td>
                                            <td className="px-3 py-2">{item.speed}</td>
                                            <td className="px-3 py-2">{item.coverage}</td>
                                            <td className="px-3 py-2">{item.depth}</td>
                                            <td className="px-3 py-2">{item.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h3 className="font-bold text-lg mb-4">When to Choose ECT Over Other Methods</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>vs Magnetic Particle (MT):</strong> Choose ECT when inspecting non-ferrous materials (aluminum, titanium), need faster scanning, or require sensitivity to very small ({'<'}0.5mm) surface cracks</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>vs Penetrant Testing (PT):</strong> Choose ECT for speed (avoids liquid drying time), no surface contamination issues, and to scan 3-5mm depth; choose PT for opening small cracks and corrosion pits</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>vs Ultrasonic Testing (UT):</strong> Choose ECT for superior surface crack sensitivity and speed; choose UT for depth capability (100mm+) and ability to measure wall thickness</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>vs Radiography (RT):</strong> Choose ECT for speed, safety (no radiation), and surface defect sensitivity; choose RT when internal defect penetration is required</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Equipment and Costs */}
                    <section className="mb-12" id="equipment">
                        <h2 className="text-3xl font-bold mb-6">ECT Equipment and Cost Analysis</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Eddy Current Testing equipment ranges from portable handheld systems to automated multi-channel scanners. Equipment selection depends on application complexity, throughput requirements, and defect detection sensitivity needed.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Equipment Categories</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Portable/Handheld Systems</h4>
                                <p className="text-slate-600 text-sm mb-3">Field-deployable equipment with single or dual probes. Examples: Olympus NORTEC, Eddyfi Cyclone, GE Phasor.</p>
                                <p className="text-sm"><strong>Cost:</strong> $15,000-$40,000 | <strong>Probes:</strong> 1-2 | <strong>Channels:</strong> Single</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Multi-Channel Systems</h4>
                                <p className="text-slate-600 text-sm mb-3">Laboratory and production systems with 4-8 simultaneous measurement channels. Examples: Eddyfi Shark, GE Compact Tube Inspector.</p>
                                <p className="text-sm"><strong>Cost:</strong> $40,000-$100,000 | <strong>Probes:</strong> 4-8 | <strong>Channels:</strong> Multiple simultaneous</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Pulsed Eddy Current (PEC) Systems</h4>
                                <p className="text-slate-600 text-sm mb-3">Specialized for CUI detection and thick coating inspection. Examples: Eddyfi Lyra, Applied Signal Technology.</p>
                                <p className="text-sm"><strong>Cost:</strong> $30,000-$60,000 | <strong>Probes:</strong> 1-2 | <strong>Depth:</strong> 10-25mm</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Automated ECT Scanners</h4>
                                <p className="text-slate-600 text-sm mb-3">Production systems for tube inspection, ACFM scanning. Fully automated with robotic positioning.</p>
                                <p className="text-sm"><strong>Cost:</strong> $100,000-$200,000+ | <strong>Throughput:</strong> 100+ tubes/day</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Cost Breakdown</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Equipment/Service</th>
                                        <th className="px-4 py-3 text-left font-semibold">Cost Range</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costGuide.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3">{item.item}</td>
                                            <td className="px-4 py-3 font-semibold text-blue-700">{item.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                            <p className="text-amber-900">
                                <strong>Cost Considerations:</strong> A single-channel portable ECT system represents an initial investment of $20,000-$35,000 but enables immediate cost recovery through inspections (typically $50-$100/hour labor billable). Multi-channel and automated systems require higher capital investment but dramatically reduce per-inspection cost for high-volume work. For tube inspection, automated systems can process 100+ tubes daily versus 10-20 tubes with portable systems, making automation ROI-positive in 1-2 years for high-throughput facilities.
                            </p>
                        </div>
                    </section>

                    {/* Certification */}
                    <section className="mb-12" id="certification">
                        <h2 className="text-3xl font-bold mb-6">ECT Certification and Training Requirements</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            NDT professionals performing Eddy Current Testing must obtain ASNT or ISO 9712 Level II or Level III certification. Certification requires training hours, field experience, and examination passing.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">ASNT Level II Requirements</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Training:</strong> 80-160 hours of formal instruction covering ECT physics, probe types, equipment operation, standards, and defect interpretation</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Field Experience:</strong> 800-1,200 hours of practical ECT inspection experience (typically 3-5 years at 20+ hours/week)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Examination:</strong> Written exam (120 minutes), practical exam with unknown defects, and oral exam by ASNT examiner</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Certification Cost:</strong> $2,000-$4,000 for training; $300-$600 for exam fees</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">ASNT Level III Requirements</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <p className="text-slate-700 mb-4">
                                ASNT Level III certification requires significantly more expertise. Level III technicians develop ECT procedures, establish acceptance criteria, train Level I/II technicians, and serve as subject matter experts.
                            </p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Prerequisites:</strong> Minimum Level II certification in ECT plus 3+ years professional NDT experience</span>
                                </li>
                                <li className="flex gap-3">
                                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Advanced Training:</strong> 200-300 hours covering advanced ECT theory, impedance plane analysis, standards interpretation, and procedure development</span>
                                </li>
                                <li className="flex gap-3">
                                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>ASNT ACCP Exam:</strong> Comprehensive exam (3+ hours) on Level III theory and practical application</span>
                                </li>
                                <li className="flex gap-3">
                                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Salary Impact:</strong> Level III certification typically increases salary 30-60% compared to Level II</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Specialized Aerospace Qualifications</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-slate-700 mb-4">
                                Beyond ASNT Level II/III, aerospace inspectors require TYPE qualifications from their employer or aircraft OEM. Boeing BAC 5571 and Airbus 25-1000 certifications require:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>Documented training on specific aircraft components and ECT procedures</li>
                                <li>Demonstrated proficiency on actual aircraft or aircraft-equivalent test samples</li>
                                <li>Understanding of aerospace-specific defect acceptance criteria and reporting</li>
                                <li>Periodic recertification (every 12-24 months) to maintain currency</li>
                            </ul>
                        </div>
                    </section>

                    {/* Advantages & Limitations */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Advantages and Limitations of ECT</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-lg text-green-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    Advantages
                                </h3>
                                <ul className="space-y-2 text-green-800 text-sm">
                                    <li>Extreme surface crack sensitivity (detects {'<'}0.5mm cracks)</li>
                                    <li>Fast scanning speeds enable rapid area coverage</li>
                                    <li>No surface prep needed; inspects through paint/oxidation</li>
                                    <li>Works on all conductive materials (Al, Ti, stainless, carbon steel)</li>
                                    <li>Portable equipment enables field deployment</li>
                                    <li>Quantitative impedance data for defect characterization</li>
                                    <li>PEC variant enables thick coating/insulation penetration</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-bold text-lg text-red-900 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Limitations
                                </h3>
                                <ul className="space-y-2 text-red-800 text-sm">
                                    <li>Limited to electrically conductive materials (no composites, plastics)</li>
                                    <li>Shallow depth of penetration (1-5mm standard; 10-25mm PEC)</li>
                                    <li>Cannot detect internal defects (UT is better for this)</li>
                                    <li>Susceptible to material property variations (heat treat, microstructure)</li>
                                    <li>Complex geometry (tight corners, holes) can produce confusing signals</li>
                                    <li>Requires skilled interpretation to distinguish crack from material noise</li>
                                    <li>Cannot measure remaining wall thickness (UT preferred)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions About ECT</h2>
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
                    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Eddy Current Testing Services?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Our certified ECT technicians provide aerospace-qualified inspections, pulsed eddy current (PEC) corrosion mapping, and tube inspection services with ASNT Level II/III expertise.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request ECT Inspection</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">ECT Training Course</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related NDT Methods</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/ultrasonic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">Ultrasonic Testing (UT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Deep penetration defect detection and wall thickness measurement</p>
                            </Link>
                            <Link to="/magnetic-particle-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">Magnetic Particle Testing (MT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Surface defect detection on ferromagnetic materials</p>
                            </Link>
                            <Link to="/penetrant-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">Penetrant Testing (PT)</h3>
                                <p className="text-slate-600 text-sm mt-2">Detection of surface-opening defects on all materials</p>
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
