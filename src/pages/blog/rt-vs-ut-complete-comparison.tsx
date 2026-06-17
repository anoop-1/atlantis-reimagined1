import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, X, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import TableOfContents from "@/components/TableOfContents";
import GetCertifiedCTA from "@/components/GetCertifiedCTA";
const faqs = [
    { question: "What is the difference between radiography (RT) and ultrasonic testing (UT)?", answer: "RT and UT both detect internal defects but use different physics. Radiography uses X-rays or gamma rays to penetrate material and create a permanent radiographic image showing density variations (voids, porosity, inclusions). Ultrasonic Testing uses sound waves (1-5 MHz) that reflect back from defects; the technician interprets echoes on a display (A-scan, C-scan format). Key differences: RT shows spatial distribution of porosity; UT shows defect depth and can measure wall thickness. RT requires radiation safety procedures and licensing; UT has no radiation hazard. RT is slower (film processing, positioning); UT is faster. For weld inspection, UT detects cracks better; RT shows porosity patterns better." },
    { question: "When should you use RT vs UT for weld inspection?", answer: "General guideline: Use UT as primary weld inspection method (faster, better crack detection), use RT as confirmatory method for critical findings. Specific applications: Use UT for: tight cracks (UT is superior), thin walls (<2mm), internal defects in thick sections, production volume (speed matters). Use RT for: planar defects parallel to beam (cracks parallel to weld surface), porosity distribution visualization, creation of permanent film record (legal requirement), when defect size/shape characterization is critical. Best practice in critical applications: perform UT scan, if indication found, follow with RT to definitively characterize. This combined approach provides speed + confirmation." },
    { question: "Why is UT faster than radiography?", answer: "UT scanning is real-time - technician sees signals immediately on instrument display while scanning. One technician with a handheld probe can scan a weld in 5-10 minutes. Radiography requires: positioning X-ray/gamma source and film, exposure time (seconds to minutes depending on thickness), film development (30-60 minutes in darkroom), film interpretation. Total time per weld: 45-120 minutes. For production environments with 100+ welds to inspect, UT can inspect in 10-20 hours; RT would require 40-100+ hours. Speed advantage makes UT standard in high-volume production and large-scale projects (pipelines, ship construction). RT is used selectively for critical confirmatory inspection." },
    { question: "Can UT and RT detect the same defects?", answer: "Both methods detect internal defects but with different sensitivities. Both detect: porosity, inclusions, voids, lack of fusion. UT detects: cracks (especially tight cracks <0.1mm), depth information. RT detects: density variations (porosity patterns), laminations, complete penetration verification. Critical difference - tight cracks: UT detects easily; RT misses many tight cracks (they don't block radiation). This makes UT superior for crack-sensitive applications (aerospace, high-stress welds, fatigue-prone structures). RT is superior for verifying complete porosity elimination in castings or large welds. In practice, critical applications use both methods together - UT as screening tool, RT as confirmation for findings." },
    { question: "Is radiography safer than ultrasonic testing?", answer: "Ultrasonic Testing is significantly safer than Radiography. UT produces no radiation - technician operates handheld probe with no hazard. RT requires careful radiation safety procedures: lead aprons, shielding, distance management, monitoring. RT requires: Radiation Safety Officer (RSO) oversight, licensed radiation operators, area evacuation during exposure, dosimetry (badge) monitoring. UT requires no licensing. UT can be performed in occupied facilities; RT requires area clearance. For technician safety and site convenience, UT is overwhelmingly superior. This is why UT is preferred for in-service inspection of operating equipment, facilities with restricted access, or populated areas. RT safety procedures are rigorous but add cost and complexity." },
    { question: "What are the cost differences between UT and RT?", answer: "Ultrasonic Testing: Equipment $8,000-$40,000 (handheld systems); labor $60-$100/hour; probe replacement $500-$2,000. Total inspection cost: typically $60-$100/hour. Radiography: Equipment $50,000-$150,000+ (X-ray/gamma units); film/digital DR system; lead shielding. Labor: $150-$250/hour (includes radiation safety overhead, RSO coordination, film processing). Consumables: film ($5-$15/exposure) or digital plate costs. Total inspection cost: typically $150-$300/hour. For equivalent weld inspection, UT costs 50-70% less than RT. However, if advanced equipment (automated UT scanner, PAUT) used, costs equalize. For cost-sensitive projects, UT is clear choice. For critical applications where both methods required, combined cost is justified by defect confidence." },
    { question: "Which method requires more training - RT or UT?", answer: "Ultrasonic Testing requires more extensive training. UT Level II certification requires: 120-160 hours formal training + 1,000-1,500 hours field experience (typically 3-5 years). Must understand: sound physics, transducer operation, calibration, A-scan/C-scan interpretation, defect sizing. Radiography Level II requires: 120-160 hours formal training + 800-1,200 hours field experience (2-4 years). Must understand: radiation physics, safety procedures, film processing, radiographic interpretation, radiation licensing requirements. Both require equivalent study time but UT emphasizes signal interpretation (more subjective); RT emphasizes image interpretation (more visual/objective). Retention/recertification: UT typically 5-year certification cycle; RT typically 3-year cycle (due to radiation licensing). For career entry, both have similar difficulty; PAUT (advanced UT) requires additional 100+ hours training." },
    { question: "What industries prefer RT vs UT?", answer: "Ultrasonic Testing dominance: Oil & gas (pipelines, pressure vessels, tanks), aerospace (weld inspection, component scanning), power generation (steam generator tubes, welds), manufacturing (production quality control). RT preference: Castings and forgings (porosity distribution assessment), aerospace forgings (internal void detection), pressure equipment requiring permanent film record (legal/safety requirement), shipbuilding (independent confirmation), aerospace components undergoing type certification. In practice, most major industries use BOTH methods: UT as primary (faster, crack-sensitive), RT as confirmation for critical findings. Pure RT-only or UT-only industries are rare; most major projects employ combined inspection strategies leveraging strengths of each." },
    { question: "What is the future of RT and UT in NDT?", answer: "Ultrasonic Testing trending upward: Phased Array UT (PAUT) and automated scanning reducing manual labor; digital UT enabling data analytics and AI-assisted interpretation; portable handheld PAUT equipment improving field deployment. UT adoption in emerging markets accelerating. Radiography trending downward: Digital radiography (DRT) replacing film but costs remain high; advanced image analysis improving interpretation but not addressing speed/safety disadvantages; fewer new technicians entering field (licensing burden, safety requirements). Long-term outlook: UT will continue gaining market share due to speed, safety, digital integration advantages. RT will remain critical for specific applications (castings, aerospace certification) but declining as percentage of total NDT work. Combined inspection strategies will persist - UT primary, RT confirmatory - ensuring both technologies remain in use." }
];

const rtUtComparison = [
    { criterion: "Principle", rt: "Electromagnetic radiation (X-rays, gamma) penetrate material; defects show as density variations on radiograph", ut: "High-frequency sound waves (1-5 MHz) reflect from defects; echoes displayed as waveform or C-scan image" },
    { criterion: "Defect Detection Capability", rt: "Excellent: internal porosity, inclusions, density variations. Poor: tight cracks, laminations parallel to surface", ut: "Excellent: cracks (especially tight), lack of fusion, internal voids. Good: porosity if scattered throughout" },
    { criterion: "Depth Information", rt: "No - cannot determine defect depth (2D image only)", ut: "Excellent - precise defect depth calculated from echo time" },
    { criterion: "Wall Thickness Measurement", rt: "Not possible", ut: "Direct measurement through pulse-echo, non-destructive" },
    { criterion: "Speed", rt: "Slow: 45-120 minutes per weld (positioning, exposure, development)", ut: "Fast: 5-15 minutes per weld, real-time scanning" },
    { criterion: "Radiation Hazard", rt: "Significant - requires shielding, dosimetry, area evacuation", ut: "None - completely safe, no hazard" },
    { criterion: "Licensing/Certification", rt: "Radiation Safety Officer required, radiation operating license required", ut: "ASNT Level II/III certification, no radiation licensing" },
    { criterion: "Permanent Record", rt: "Yes - radiographic film or digital image provides permanent evidence", ut: "Digital files if properly archived; no inherent permanent record" },
    { criterion: "Operator Dependency", rt: "Lower - image is relatively objective interpretation", ut: "Higher - requires skilled interpretation of echo patterns" },
    { criterion: "Cost", rt: "High: $150-$300/hour equipment and labor", ut: "Moderate: $60-$100/hour equipment and labor" },
    { criterion: "Equipment Investment", rt: "Very high: $50,000-$150,000+ for X-ray/gamma unit", ut: "Moderate: $8,000-$40,000 for handheld; $35,000-$100,000 for PAUT" },
    { criterion: "Material Limitations", rt: "Works on all materials; effectiveness varies by density", ut: "Works on conductive/sound-transmitting materials; limited on composites/polymers" },
    { criterion: "Access Requirements", rt: "Two sides of material needed (source on one side, film on other)", ut: "Single-side access sufficient for pulse-echo" },
    { criterion: "Thin Material Inspection", rt: "Difficult on very thin materials", ut: "Excellent on thin materials with high-frequency probes" },
];

const whenUseRt = [
    "Casting inspection - visualize porosity distribution and internal voids",
    "Permanent film record required - legal/contractual requirement for evidence",
    "Aerospace forgings - defect evidence documentation needed",
    "Planar defects parallel to surface - cracks running perpendicular to beam",
    "Type certification testing - OEM (aerospace, military) requirements specify RT",
    "Porosity acceptance criteria verification - need to see pattern/distribution",
    "Laminations - layered internal defects difficult to see with UT",
    "Density characterization - determining material quality/homogeneity"
];

const whenUseUt = [
    "Weld crack detection - UT is superior for tight crack detection",
    "Production volume - speed (5-10 min/weld vs 45-120 min) critical",
    "Thickness measurement - direct measurement of remaining wall thickness",
    "Pipeline inspection - critical for corrosion assessment and defect depth",
    "In-service inspection - equipment cannot be shut down for RT radiation safety",
    "Tight access areas - no need for two-sided access",
    "Cost-sensitive projects - UT is 50-70% cheaper per inspection",
    "Real-time scanning feedback - immediate results enable adaptive inspection",
    "Populated areas - no radiation safety concerns with occupied facilities",
    "Thin walled tubing - thickness measurement of heat exchanger tubes, boiler tubes"
];

const caseStudyComparison = [
    { scenario: "Large diameter pipeline girth weld inspection (1,000 welds)", rtResult: "Would require 500+ hours, 2-3 month inspection period, $75,000+ cost", utResult: "50-100 hours, 1-2 week inspection, $6,000-$10,000 cost. UT wins decisively on speed/cost. If defect found, follow with spot RT.", decision: "Use UT primary" },
    { scenario: "Aircraft fuselage casting inspection (aerospace certification)", rtResult: "Radiographs document internal structure, porosity distribution - required for type certification per FAA/EASA", utResult: "UT faster but lacks permanent film record needed for certification documentation", decision: "Use RT (requirement-driven)" },
    { scenario: "Nuclear pressure vessel emergency maintenance (operating reactor)", rtResult: "Cannot be used - requires area evacuation, radiation safety procedures incompatible with operational facility", utResult: "Portable UT equipment enables in-service inspection without shutdown, results immediately available", decision: "Use UT (only viable option)" },
    { scenario: "Fatigue crack inspection on aircraft engine components (high-stress fastener holes)", rtResult: "Poor crack detection - tight cracks often miss RT detection threshold", utResult: "Excellent crack sensitivity, detects <0.5mm cracks reliably, eccentricity measurements confirm crack orientation", decision: "Use UT (superior sensitivity)" },
    { scenario: "Storage tank floor corrosion assessment (thickness mapping of 10,000 m² floor)", rtResult: "Impractical - would require weeks of setup/film processing", utResult: "Automated UT scanner can map 100+ m² per day, produces comprehensive thickness map", decision: "Use UT (automated scanning advantage)" }
];

const bestPracticeCombined = [
    { phase: "Screening/Primary Inspection", method: "Ultrasonic Testing (UT) - phased array if available", reason: "Speed (5-10 min/weld), crack sensitivity, thickness measurement capability. Cost-effective primary method." },
    { phase: "Indication Found - Confirmation", method: "Radiographic Testing (RT) on suspect welds", reason: "Definitively characterizes defect, creates permanent record, distinguishes tight cracks from noise." },
    { phase: "Critical Component Certification", method: "Combined UT + RT per specification", reason: "Regulatory requirement (aerospace, military, high-pressure equipment) demanding both methods." },
    { phase: "Production Volume Inspection", method: "Automated UT (AUT) primary, RT spot-check suspicious welds", reason: "Automation handles volume; RT confirms critical findings." },
    { phase: "In-Service/Operating Equipment", method: "UT only (RT incompatible with radiation safety)", reason: "Equipment cannot be evacuated; only UT viable for maintenance without shutdown." }
];

export default function RTvsUTCompleteComparison() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "RT vs UT: Radiographic vs Ultrasonic Testing Complete Comparison",
                "description": "Side-by-side comparison of radiographic testing (RT) vs ultrasonic testing (UT). When to use each method, cost comparison, safety considerations, code requirements, advantages/disadvantages, combined approaches, and industry preferences.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-03-09",
                "dateModified": "2026-03-09"
            },
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
                title="RT vs UT Testing — Side-by-Side Comparison Guide 2026"
                description="Radiographic vs ultrasonic testing — pros, cons, cost, defect detection, safety. ASME-aligned comparison table + when each wins. Real Level III examples."
                keywords="RT vs UT, radiographic vs ultrasonic testing, radiography, ultrasonic testing, UT comparison, RT comparison, weld inspection, defect detection, penetrant testing, magnetic particle testing"
                canonical="https://atlantisndt.com/blog/rt-vs-ut-complete-comparison"
                structuredData={structuredData}
            />
            <Breadcrumbs />
              <TableOfContents items={[{ id: "overview", label: "RT vs UT Overview" }, { id: "comparison", label: "Comparison Matrix" }, { id: "selection", label: "When to Choose Each" }, { id: "faq", label: "FAQ" }]} />
      <QuickAnswerBox question="RT or UT — which inspection method should you choose?" answer="Choose Radiographic Testing (RT) for permanent records, full volumetric coverage, and inspections of complex weld geometries. Choose Ultrasonic Testing (UT) for safer field deployment, real-time results, deep-section penetration (up to ~10 m), and automated scan capabilities. Most modern asset-integrity programs use both — UT for production weld inspection, RT for fitness-for-service evidence." bullets={["RT pros: permanent film/CR/DR record, defect type clear, all materials","UT pros: no radiation safety zone, deeper penetration, automated/encoded scanning","Cost: UT is 50-70% cheaper per linear foot of weld"]} />


      <GetCertifiedCTA cert="ASNT Level II/III" href="/asnt-certification" benefit="ASNT-certified inspector" />
            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-cyan-200 mb-4">Technical Comparison • March 2026 • 17 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">RT vs UT: Complete Comparison Guide</h1>
        {/* /* INLINE_PROOF_INJECTED_v1 */ */}
        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Atlantis NDT proof:</strong> ASNT Level III-led prep, 96% first-attempt pass rate, 2026 cohorts.
          {' '}<a href="/asnt-certification" className="text-primary underline underline-offset-2 hover:opacity-80">Get ASNT Level II / III →</a>
        </p>

                        <p className="text-xl text-cyan-100 mb-8">Side-by-side comparison of radiographic testing and ultrasonic testing. Learn when to use each method, cost differences, safety considerations, code requirements, advantages, disadvantages, and combined RT+UT strategies.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="RT vs UT: Radiographic vs Ultrasonic Testing" description="Complete side-by-side comparison guide for weld inspection and defect detection." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">RT vs UT: Overview and Key Differences</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Radiographic Testing (RT) and Ultrasonic Testing (UT) are the two primary methods for detecting internal defects in welds, castings, and materials. Both methods are governed by the same standards (ASME Section V, AWS D1.1) and achieve similar detection capabilities, but with fundamentally different approaches that lead to distinct advantages and limitations.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The critical difference: RT creates a permanent radiographic image showing internal density variations; UT uses sound waves to detect and characterize defects in real-time. For weld crack detection, UT is superior; for porosity visualization, RT is superior. Most critical applications use BOTH methods together - UT as the primary fast screening tool, RT as confirmatory method for critical findings.
                        </p>
                        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-6">
                            <h3 className="font-semibold text-cyan-900 mb-3">Key Points:</h3>
                            <ul className="text-cyan-800 space-y-2">
                                <li>RT = radiographic film/image showing density patterns; UT = echoes showing depth/size</li>
                                <li>UT is 3-10x faster than RT for equivalent weld inspection</li>
                                <li>UT detects cracks better; RT visualizes porosity distribution better</li>
                                <li>RT requires radiation safety procedures; UT is completely safe</li>
                                <li>RT costs $150-$300/hour; UT costs $60-$100/hour</li>
                                <li>Best practice: UT primary + RT confirmation on critical welds</li>
                            </ul>
                        </div>
                    </section>

                    {/* Detailed Comparison Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">RT vs UT Side-by-Side Comparison</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            This comprehensive comparison table covers all major technical, practical, and economic aspects of both methods.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-cyan-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Criterion</th>
                                        <th className="px-3 py-2 text-left font-semibold">Radiographic Testing (RT)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Ultrasonic Testing (UT)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rtUtComparison.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-xs">{item.criterion}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.rt}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.ut}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* When to Use RT */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">When to Use Radiographic Testing (RT)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Radiographic Testing is the preferred method for specific applications where visualizing porosity distribution, creating permanent records, or detecting planar defects is critical.
                        </p>

                        <div className="grid gap-3 mb-8">
                            {whenUseRt.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex gap-3 border-l-4 border-cyan-500">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">RT Advantages</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                                <h4 className="font-bold text-cyan-900 mb-2">Permanent Record</h4>
                                <p className="text-cyan-800 text-sm">Radiographic image provides lasting evidence of inspection, critical for regulatory compliance and legal documentation.</p>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                                <h4 className="font-bold text-cyan-900 mb-2">Porosity Visualization</h4>
                                <p className="text-cyan-800 text-sm">Shows distribution and density of internal porosity - superior to UT for characterizing casting/forging quality.</p>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                                <h4 className="font-bold text-cyan-900 mb-2">Objective Interpretation</h4>
                                <p className="text-cyan-800 text-sm">Image is relatively objective - less dependent on operator skill compared to UT waveform interpretation.</p>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                                <h4 className="font-bold text-cyan-900 mb-2">Complete Penetration Proof</h4>
                                <p className="text-cyan-800 text-sm">Radiograph clearly shows whether weld has through-penetration to back surface - definitive proof.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">RT Limitations</h3>
                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                            <ul className="space-y-2 text-red-800">
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Poor crack detection:</strong> Tight cracks often pass through RT undetected or are confused with artifacts</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Slow:</strong> 45-120 minutes per weld (positioning, exposure, development) vs 5-15 minutes for UT</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Radiation hazard:</strong> Requires area evacuation, safety procedures, radiation licensing</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>No depth information:</strong> Cannot determine how deep a defect is located</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Expensive:</strong> Equipment $50-150K+, labor $150-300/hour</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* When to Use UT */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">When to Use Ultrasonic Testing (UT)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Ultrasonic Testing is the preferred method for detecting cracks, measuring thickness, and rapid large-scale inspection. It's the primary method in production environments and when speed is critical.
                        </p>

                        <div className="grid gap-3 mb-8">
                            {whenUseUt.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex gap-3 border-l-4 border-blue-500">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">UT Advantages</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Superior Crack Detection</h4>
                                <p className="text-blue-800 text-sm">Detects tight cracks {'<'}0.5mm - far superior to RT. Essential for fatigue-critical applications.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Thickness Measurement</h4>
                                <p className="text-blue-800 text-sm">Direct measurement of remaining wall thickness for corrosion assessment and RBI (Risk-Based Inspection).</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Speed & Efficiency</h4>
                                <p className="text-blue-800 text-sm">5-15 minutes per weld vs 45-120 for RT. Real-time results enable adaptive scanning.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Complete Safety</h4>
                                <p className="text-blue-800 text-sm">No radiation hazard, no licensing required, can operate in occupied facilities without evacuation.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Depth Information</h4>
                                <p className="text-blue-800 text-sm">Precise defect depth calculation from echo arrival time enables characterization.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Lower Cost</h4>
                                <p className="text-blue-800 text-sm">Equipment $8-40K, labor $60-100/hour - 50-70% cheaper than equivalent RT inspection.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">UT Limitations</h3>
                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                            <ul className="space-y-2 text-red-800">
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Operator dependent:</strong> Requires skilled technician for signal interpretation</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>No permanent record:</strong> Results captured digitally but no inherent film/image like RT</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Material limitations:</strong> Requires sound-transmitting materials; poor on highly attenuating materials</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Porosity visualization:</strong> Cannot easily visualize porosity distribution like RT radiograph</span>
                                </li>
                                <li className="flex gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span><strong>Coupling required:</strong> Couplant needed for acoustic coupling; poor surfaces degrade signal</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Real-World Case Studies */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Real-World Case Studies: RT vs UT Decisions</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Practical examples showing which method is optimal for specific inspection scenarios.
                        </p>

                        <div className="space-y-4">
                            {caseStudyComparison.map((item, idx) => (
                                <Card key={idx}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">{item.scenario}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex gap-3">
                                                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm"><strong>If using RT:</strong> {item.rtResult}</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm"><strong>If using UT:</strong> {item.utResult}</span>
                                            </div>
                                            <div className="bg-cyan-50 px-3 py-2 rounded border-l-2 border-cyan-500">
                                                <span className="text-sm font-semibold text-cyan-900"><strong>Decision:</strong> {item.decision}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Combined RT+UT Strategy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Best Practice: Combined RT + UT Strategy</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Critical applications leverage both methods together - UT as primary rapid screening tool, RT as confirmatory method for critical findings. This combined approach provides speed, reliability, and confidence.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Inspection Phases and Method Selection</h3>
                        <div className="space-y-4 mb-8">
                            {bestPracticeCombined.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-cyan-600" />
                                        {item.phase}
                                    </h4>
                                    <p className="text-slate-700 mb-2"><strong>Method:</strong> {item.method}</p>
                                    <p className="text-slate-600"><strong>Rationale:</strong> {item.reason}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Cost-Benefit of Combined Approach</h3>
                        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                            <p className="text-cyan-900 mb-4">
                                On a large pipeline project with 1,000 welds, pure RT inspection would cost $75,000-$100,000 and take 2-3 months. Pure UT inspection costs $6,000-$10,000 and takes 1-2 weeks - massive savings.
                            </p>
                            <p className="text-cyan-900 mb-4">
                                Combined approach: UT screen all 1,000 welds ($8,000, 2 weeks), then RT confirm indications found (typically 1-5% of welds, $2,000-$10,000). Total cost: $10,000-affordable, accessible and 2.5-3 weeks. This provides 90%+ cost savings versus pure RT while maintaining high confidence through RT confirmation.
                            </p>
                            <p className="text-cyan-900">
                                <strong>Key insight:</strong> Combined approach is economically superior to pure RT for most large-scale projects while maintaining defect confidence through selective RT confirmation. This strategy is standard practice in oil & gas, power generation, and aerospace industries.
                            </p>
                        </div>
                    </section>

                    {/* Code Requirements */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Code Requirements for RT vs UT</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Major standards (ASME, AWS, API) recognize both RT and UT as acceptable methods but have specific application guidance.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                <h4 className="font-bold mb-2">ASME Section V (Non-Destructive Examination)</h4>
                                <p className="text-slate-700 text-sm">Both RT and UT are approved methods. ASME allows inspection plan selection based on project requirements and acceptance criteria. For critical welds (high-stress, fatigue-prone), combined RT+UT often specified. RT alone acceptable for static/low-cycle applications.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                <h4 className="font-bold mb-2">AWS D1.1 (Structural Welding Code)</h4>
                                <p className="text-slate-700 text-sm">Mandates UT or RT for critical welds. UT is preferred for crack detection (high-cycle fatigue). RT preferred for acceptance of complete penetration and porosity assessment. Both methods must be Level II or Level III certified operators.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                <h4 className="font-bold mb-2">API 1104 (Pipeline Code)</h4>
                                <p className="text-slate-700 text-sm">UT is primary method for girth weld inspection; RT acceptable for verification. Modern API 1104 (2013+) emphasizes UT/PAUT due to superior crack detection and cost benefits. RT still used for final acceptance or dispute resolution.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                <h4 className="font-bold mb-2">Aerospace Standards (FAA/EASA)</h4>
                                <p className="text-slate-700 text-sm">Often mandate RT as primary method for critical aerospace components and type certifications, or combined RT+UT. Aerospace emphasizes permanent RT records for regulatory compliance and traceability.</p>
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
                    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Weld Inspection Services?</h2>
                        <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">Our NDT team provides both UT and RT inspection with expertise in combined inspection strategies. We optimize method selection to balance speed, confidence, and cost for your project requirements.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request Inspection</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">NDT Training</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related NDT Methods</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/ultrasonic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Ultrasonic Testing Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Comprehensive UT principles, PAUT, TOFD, and weld inspection</p>
                            </Link>
                            <Link to="/radiographic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Radiographic Testing</h3>
                                <p className="text-slate-600 text-sm mt-2">RT methods, film interpretation, and defect acceptance</p>
                            </Link>
                            <Link to="/magnetic-particle-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Magnetic Particle Testing</h3>
                                <p className="text-slate-600 text-sm mt-2">Surface defect detection on ferromagnetic materials</p>
                            </Link>
                        </div>
                    </section>

                    {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
                    <ErpDtCrossPromoBlock
                        relevantApp="Quality Management"
                        relevantAppHref="/erp/quality-management-for-ndt-companies"
                    />
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
        <RelatedGuidesBlock links={[
              {
                    "title": "UT vs RT Comparison (short)",
                    "href": "/blog/ut-vs-rt-comparison",
                    "description": "Quick decision matrix",
                    "icon": "blog"
              },
              {
                    "title": "Visual Testing (VT) Guide",
                    "href": "/blog/visual-testing",
                    "description": "ASNT Level II VT prep + procedures",
                    "icon": "blog"
              },
              {
                    "title": "Digital Twin Platform",
                    "href": "/digital-twins",
                    "description": "3D UT/PAUT overlay on asset model",
                    "icon": "dt"
              },
              {
                    "title": "Quality Management ERP",
                    "href": "/erp/quality-management-for-ndt-companies",
                    "description": "ISO 9001 / 17020 / 17025 ready",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III breakdown",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Code interpretation + procedure development",
                    "icon": "consulting"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
