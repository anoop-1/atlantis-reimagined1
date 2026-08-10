// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/services/mfl-pipeline-inspection": {
//     title: "MFL Pipeline Inspection Service 2026 — In-Line Pigging, Cost & Coverage",
//     description: "MFL pipeline inspection from 4-inch to 56-inch — detects ID/OD corrosion, pitting, gouges. 100% bore coverage, $8K–$45K/mile typical. ASNT Level III oversight."
//   }

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Activity, Zap, Target, Shield, ArrowRight, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const detectableDefects = [
    { defect: "External corrosion (OD)", sensitivity: "Down to ~10% wall loss with HR-MFL", note: "Most common metal-loss mode in buried pipelines" },
    { defect: "Internal corrosion (ID)", sensitivity: "Discriminated by signal shape & sensor depth", note: "Common in wet gas, sour service, low-spot accumulations" },
    { defect: "Pitting (isolated)", sensitivity: "~5 mm dia at 20% WT", note: "Resolved by sensor pitch (HR pigs ~3 mm)" },
    { defect: "Mill / general wall thinning", sensitivity: "Excellent — large surface defects saturate signal", note: "Sized via signal area + amplitude" },
    { defect: "Mechanical damage / gouges", sensitivity: "Detectable; often combined with caliper data", note: "Dent + metal-loss combos require multi-tool runs" },
    { defect: "Girth & long-seam weld anomalies", sensitivity: "Transverse-Field MFL (TFI) detects axial cracks/lack-of-fusion", note: "Standard MFL is blind to tight axial cracks — needs TFI/EMAT" },
    { defect: "Manufacturing laminations", sensitivity: "Marginal — best with EMAT/UT", note: "Plan supplemental UT in flagged segments" },
];

const pipelineSizes = [
    { range: "2\" – 4\"", note: "Specialty mini-pigs; limited HR resolution. Often UT-ILI preferred." },
    { range: "6\" – 12\"", note: "Standard distribution & gathering lines. Full HR-MFL coverage available." },
    { range: "14\" – 24\"", note: "Refined product, NGL, sour service. Combo MFL + caliper + IMU runs." },
    { range: "26\" – 36\"", note: "Trunk crude / gas. HR-MFL + TFI mandatory under ASME B31.8S IM." },
    { range: "38\" – 56\"", note: "Long-haul gas transmission. Highest-spec tools, slowest run windows." },
];

const projectCosts = [
    { service: "MFL pig run (rental + crew)", range: "$8,000 – $25,000 / mile", driver: "Diameter, distance, mobilisation, sour service" },
    { service: "High-resolution MFL + TFI combo", range: "affordable, accessible – $45,000 / mile", driver: "Number of sensor channels, integrity-management deliverables" },
    { service: "Pre-run cleaning pig train", range: "$5,000 – $20,000 / mile", driver: "Pipeline condition, debris loading, multiple cleaning passes" },
    { service: "ILI data analysis & report", range: "$15,000 – $80,000 / project", driver: "Anomaly count, dig sheet preparation, RBI workup" },
    { service: "Tank-floor MFL scan (alt. application)", range: "$3 – $9 / sq ft of floor", driver: "Tank diameter, floor condition, edge-zone UT add-on" },
];

const standards = [
    { code: "API 1163", scope: "In-Line Inspection Systems Qualification — performance specs & validation" },
    { code: "NACE SP0102", scope: "In-Line Inspection of Pipelines — operator & vendor responsibilities" },
    { code: "ASME B31.8S", scope: "Managing System Integrity of Gas Pipelines — when MFL ILI is required" },
    { code: "API 653 App. C", scope: "MFL for AST floor inspection (related application)" },
    { code: "DOT 49 CFR 192/195", scope: "Federal IM rules — high-consequence area assessment intervals" },
    { code: "POF 2021", scope: "Pipeline Operators Forum — defect specs & vendor performance reporting" },
];

const faqs = [
    { question: "What is MFL pipeline inspection?", answer: "Magnetic Flux Leakage (MFL) pipeline inspection magnetises the steel pipe wall to near-saturation using powerful permanent magnets carried inside an in-line inspection tool (a 'smart pig'). Hall-effect sensors between the magnet poles measure flux that 'leaks' out of the wall at locations of metal loss — corrosion, pitting, gouges, and certain weld anomalies. The pig is launched into a live pipeline, propelled by product flow, and recorded data is analysed to produce a defect list with depth, length, and orientation for every anomaly above the reporting threshold." },
    { question: "What pipeline sizes can MFL inspect?", answer: "Production MFL pigs are available from 4-inch through 56-inch nominal diameter. Most utility distribution and gathering inspections are in the 6\"–12\" range; refined product and crude trunk lines fall in 12\"–36\"; long-distance gas transmission lines are typically 30\"–56\". Multi-diameter and dual-diameter tools exist for systems with reducer fittings. Sub-4-inch lines are usually inspected with specialty UT or remote-field eddy current tools instead of MFL." },
    { question: "How does MFL compare to ultrasonic ILI (UT pigging)?", answer: "MFL is faster, cheaper, requires no liquid couplant, and works in gas lines. UT requires a liquid couplant (so it dominates in liquid lines) and offers direct, quantitative wall-thickness measurement that MFL cannot match. Practical rule: MFL for screening across long mileage; UT for confirmation, sizing, or services where MFL has performance gaps (e.g., laminations, very tight axial cracks). For high-consequence area gas trunk lines, operators often run an HR-MFL + TFI combo, then dig and verify with manual UT and pit gauges." },
    { question: "Can MFL detect cracks?", answer: "Standard axial-field MFL is largely blind to tight axial (longitudinal) cracks — the field runs parallel to the crack and produces little leakage. Transverse-Field Inspection (TFI), a related MFL configuration that magnetises circumferentially, can detect long-seam cracks and lack-of-fusion. For SCC (stress corrosion cracking) and tight fatigue cracks, EMAT or circumferential-MFL tools are the industry standard. Always specify the threat type up front so the right tool combination is mobilised." },
    { question: "What is the difference between standard and high-resolution MFL?", answer: "Standard (or 'low-resolution') MFL uses wider sensor pitch (~10–15 mm) and lower data-sampling rates — adequate for screening larger anomalies but with poor sizing accuracy. High-resolution (HR) MFL uses denser sensor arrays (3–5 mm pitch), more powerful magnets, and higher acquisition rates, achieving reliable detection of ~10% wall loss at small areas with much tighter sizing tolerance. ASME B31.8S integrity-management programs and most modern federal compliance runs require HR-MFL." },
    { question: "How often should MFL ILI be repeated?", answer: "Re-inspection interval is set by the operator's integrity-management plan based on growth rate of the worst remaining anomalies and ASME B31.8S / 49 CFR rules. Typical baseline gas transmission re-runs are every 5–7 years; aggressive sour-service or high-corrosion-rate lines may be re-run every 2–3 years. RBI per API 580/581 can extend or compress intervals based on quantitative risk." },
    { question: "Does Atlantis NDT run pigs or analyse the data?", answer: "Atlantis NDT does not own ILI fleet pigs. We provide independent third-party oversight, vendor selection, run-prep readiness reviews, anomaly verification (manual UT, MT, pit gauging at the dig), data validation against vendor performance specs, and integration of ILI results into your asset-integrity program. Our ASNT Level III consultants frequently support operators who need a neutral technical voice during ILI campaigns." },
];

export default function MflPipelineInspection() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://atlantisndt.com/services/mfl-pipeline-inspection#service",
                "name": "MFL Pipeline Inspection Service",
                "serviceType": "Magnetic Flux Leakage In-Line Pipeline Inspection",
                "description": "Independent oversight, dig verification, and data validation for MFL ILI pipeline inspection campaigns from 4-inch to 56-inch. ASNT Level III led, API 1163 / NACE SP0102 / ASME B31.8S compliant.",
                "provider": { "@id": "https://atlantisndt.com/#organization" },
                "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "Saudi Arabia" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "Canada" }
                ],
                "category": "Pipeline Integrity / In-Line Inspection",
                "audience": { "@type": "BusinessAudience", "audienceType": "Pipeline operators, midstream, transmission, gathering" },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="MFL Pipeline Inspection Service 2026: In-Line Pigging Cost, Coverage & Standards"
                description="MFL pipeline inspection oversight from 4-inch to 56-inch. Detects ID/OD corrosion, pitting, gouges. $8K–$45K/mile typical. ASNT Level III led, API 1163 compliant."
                keywords="MFL pipeline inspection service, magnetic flux leakage pipeline, MFL ILI, in-line inspection, smart pigging, pipeline integrity, API 1163, NACE SP0102, ASME B31.8S, HR-MFL"
                canonical="https://atlantisndt.com/services/mfl-pipeline-inspection"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 to-cyan-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-cyan-200 mb-4"><Activity className="w-5 h-5" /><span>Pipeline Integrity Service</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">MFL Pipeline Inspection Service</h1>
                        <p className="text-xl text-cyan-100 max-w-3xl mb-8">Independent third-party oversight for Magnetic Flux Leakage in-line inspection campaigns. 4-inch to 56-inch pipelines, ID/OD corrosion discrimination, dig verification, and integration into your asset integrity program.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request a Scoping Call</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Pipeline Consulting</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">4&quot;–56&quot;</div><div className="text-slate-600">Diameter Range</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">100%</div><div className="text-slate-600">Bore Coverage</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">~10%</div><div className="text-slate-600">Wall Loss Detection (HR-MFL)</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">API 1163</div><div className="text-slate-600">Performance Spec</div></div>
                    </div>
                </div>
            </section>

            {/* What is MFL ILI */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What MFL Pipeline Inspection Actually Detects</h2>
                            <p className="text-lg text-slate-600 mb-4">Magnetic Flux Leakage in-line inspection is the workhorse technology for detecting metal-loss corrosion in long-distance steel pipelines. A self-propelled inspection tool — the &ldquo;smart pig&rdquo; — is launched into the live line, magnetises the wall to near-saturation, and records flux leakage signals as it travels with product flow.</p>
                            <p className="text-slate-600 mb-4">The output is a defect list: every anomaly above the reporting threshold sized for depth (% wall loss), length, width, and surface (ID vs OD). That list drives dig sheets, fitness-for-service evaluations per API 579, repair planning, and the next re-inspection interval under ASME B31.8S or 49 CFR 192/195 integrity-management rules.</p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <p className="text-blue-900 text-sm"><strong>Why operators bring us in:</strong> ILI vendors deliver a report — but you still need to validate vendor performance against API 1163 specs, prioritise digs, supervise the verification UT, and feed the data back into your RBI program. That&rsquo;s where independent ASNT Level III oversight pays for itself.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800">Detectable Defect Types</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-blue-800">Defect</th>
                                            <th className="px-4 py-3 text-left font-semibold text-blue-800">Detection</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detectableDefects.map((d) => (
                                            <tr key={d.defect} className="border-t align-top">
                                                <td className="px-4 py-3">
                                                    <div className="font-medium">{d.defect}</div>
                                                    <div className="text-slate-500 text-xs mt-1">{d.note}</div>
                                                </td>
                                                <td className="px-4 py-3 text-slate-700 text-xs">{d.sensitivity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Quoted ranges are vendor-typical for high-resolution tools. Always confirm against API 1163 vendor performance specification for your specific tool run.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pipeline sizes */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Pipeline Diameters We Support</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Tool availability and resolution change with diameter. Below are typical 2026 capabilities across the global ILI vendor pool.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pipelineSizes.map((p) => (
                            <Card key={p.range} className="border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="text-2xl font-bold text-blue-700 mb-2">{p.range}</div>
                                    <p className="text-sm text-slate-600">{p.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* MFL vs UT */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">MFL vs Ultrasonic ILI — When to Use Each</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Both technologies have a place. Choosing wrong wastes money and misses defects.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left">Factor</th>
                                    <th className="px-5 py-3 text-left">MFL</th>
                                    <th className="px-5 py-3 text-left">Ultrasonic (UT) ILI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t"><td className="px-5 py-3 font-medium">Couplant</td><td className="px-5 py-3 text-sm">None — works in dry gas</td><td className="px-5 py-3 text-sm">Required — liquid only (or HCU water-slug)</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-5 py-3 font-medium">Wall-loss sizing</td><td className="px-5 py-3 text-sm">Indirect (signal area + amplitude)</td><td className="px-5 py-3 text-sm">Direct, mm-accurate</td></tr>
                                <tr className="border-t"><td className="px-5 py-3 font-medium">Tool speed</td><td className="px-5 py-3 text-sm">Faster — typical 1–4 m/s</td><td className="px-5 py-3 text-sm">Slower — must hold 0.5–2 m/s for clean data</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-5 py-3 font-medium">Cracks (axial)</td><td className="px-5 py-3 text-sm">Standard MFL: blind. TFI: yes.</td><td className="px-5 py-3 text-sm">UT-CD (crack-detection) tools: yes</td></tr>
                                <tr className="border-t"><td className="px-5 py-3 font-medium">Laminations</td><td className="px-5 py-3 text-sm">Marginal</td><td className="px-5 py-3 text-sm">Excellent</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-5 py-3 font-medium">Cost / mile (HR)</td><td className="px-5 py-3 text-sm">Quote on request (TFI combo available)</td><td className="px-5 py-3 text-sm">$25K–$70K typical</td></tr>
                                <tr className="border-t"><td className="px-5 py-3 font-medium">Best fit</td><td className="px-5 py-3 text-sm">Gas transmission, gathering, screening</td><td className="px-5 py-3 text-sm">Liquid lines, sizing-critical, crack threats</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/blog/ut-vs-rt-comparison" className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1">See full method comparison <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            {/* Project costs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Typical 2026 Project Costs</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Ranges below reflect global market pricing for routine campaigns. Mobilisation, sour-service rigging, remote launchers, and emergency response add cost — sometimes substantially.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-blue-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Service Component</th>
                                    <th className="px-4 py-3 text-left">Typical 2026 Range</th>
                                    <th className="px-4 py-3 text-left">Cost Driver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectCosts.map((c, i) => (
                                    <tr key={c.service} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{c.service}</td>
                                        <td className="px-4 py-3 text-sm text-blue-700 font-semibold">{c.range}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{c.driver}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-amber-900 text-sm"><strong>Hidden costs to budget for:</strong> pre-run cleaning trains, pig-trap modifications, flow-loop diversion fees, dig-and-recoat costs at every flagged anomaly ($15K–$80K per dig depending on access), and post-ILI fitness-for-service evaluation per API 579 if remaining-life calculations are needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries served */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Industries Served</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">MFL ILI oversight is a core service for any operator running buried or insulated steel pipelines.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Zap, name: "Gas Transmission", desc: "Trunk-line HR-MFL + TFI under ASME B31.8S." },
                            { icon: Target, name: "Crude & Product Pipelines", desc: "Liquid-line MFL screening, often paired with caliper." },
                            { icon: Activity, name: "Midstream Gathering", desc: "Sour-service gathering systems, multi-diameter runs." },
                            { icon: Shield, name: "Refinery & Petrochem", desc: "Inter-unit transfer lines, off-plot piping screening." },
                        ].map((i) => (
                            <Card key={i.name} className="border-t-4 border-t-blue-600">
                                <CardHeader className="pb-2">
                                    <i.icon className="w-7 h-7 text-blue-700 mb-2" />
                                    <CardTitle className="text-lg">{i.name}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-sm text-slate-600">{i.desc}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Standards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Standards & Codes Governing MFL ILI</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Every campaign should be qualified against these.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-slate-100">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left w-48">Standard</th>
                                    <th className="px-5 py-3 text-left">Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standards.map((s, i) => (
                                    <tr key={s.code} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-5 py-3 font-bold text-blue-700 text-sm">{s.code}</td>
                                        <td className="px-5 py-3 text-slate-700 text-sm">{s.scope}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>MFL Pipeline Inspection — FAQs</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-blue-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Services & Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/magnetic-flux-leakage-testing" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">MFL Method Overview</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Deep dive into MFL physics, applications, and limitations across tank floors, casings, and pipelines.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/pipeline-inspection-services" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Pipeline Inspection Services</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full-spectrum pipeline NDT — external UT, MT, RT, AUT girth-weld, plus ILI oversight.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/corrosion-mapping" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Corrosion Mapping</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Automated UT corrosion mapping for above-ground sections and dig verification.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-cyan-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">NDT Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Independent ASNT Level III oversight, procedure review, vendor qualification.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-510-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-cyan-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">API 510 Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pressure vessel inspector cert — companion to pipeline inspector qualifications.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-cyan-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">NDT Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">UT, MT, RT, PA-UT, and TOFD training for inspectors supporting pipeline IM programs.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Planning an MFL ILI Campaign?</h2>
                    <p className="text-cyan-100 mb-8 text-lg">Talk to an ASNT Level III about vendor selection, scope of work, dig prioritisation, and integration with your integrity-management plan.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Atlantis NDT</Link>
                        <Link to="/consulting" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">View Consulting</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
