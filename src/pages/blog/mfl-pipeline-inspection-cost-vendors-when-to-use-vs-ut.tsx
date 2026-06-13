import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { question: "What is the difference between MFL and UT inline inspection?", answer: "MFL (Magnetic Flux Leakage) magnetizes the pipe wall and detects flux leakage where metal is missing - making it excellent for detecting metal loss from corrosion, pitting, and gouges. MFL works on gas, dry, and liquid pipelines without coupling fluid. UT (Ultrasonic) ILI sends sound waves through the pipe wall and measures the echo to directly quantify remaining wall thickness - requiring a liquid coupling medium (typically the product itself). Key differences: MFL is qualitative (estimates depth from flux signal strength), UT is quantitative (measures actual wall thickness in mm). UT detects cracks and laminations that MFL misses. MFL works in gas pipelines where UT cannot couple. MFL handles thicker walls more reliably up to ~25 mm; UT excels on thicker walls if liquid coupling is available. For a typical natural gas transmission pipeline, MFL is the standard choice. For liquid hydrocarbon lines with crack threats (SCC, fatigue cracks at dents), UT or EMAT is preferred. Many operators run MFL + UT combo tools to capture both defect populations in one run." },
    { question: "Which MFL ILI service providers are best in 2026?", answer: "Top global MFL ILI service providers in 2026 are: (1) ROSEN Group (Germany) - dominant in HR-MFL, RoCorr MFL-A axial flux tool, RoCorr CDI for crack-like indications, strongest analyst pool. (2) Baker Hughes / Process & Pipeline Services (formerly GE PII) - well-established axial MFL plus their MagneScan and HD MagneScan tools. (3) NDT Global - leaders in UT but offer combo tools; strong in liquid line crack detection. (4) T.D. Williamson (TDW) - SpirALL MFL spiral-magnetization tool excellent for axial crack detection that conventional MFL misses; widely used in US gas transmission. (5) Onstream Pipeline Inspection - cost-competitive HR-MFL operator focused on North American gas distribution and gathering. (6) Enduro Pipeline Services - active in low-pressure/low-flow lines. (7) Intertek - integrity engineering combined with ILI partnerships. (8) Quest Integrity - InVista UT tool for unpiggable lines and tight-bend pipelines. Choice depends on pipeline geometry, defect threats, geography, and tool availability windows. Top-tier vendors (Rosen, BHGE, NDT Global) charge premium rates but deliver tighter sizing accuracy (typically +/- 10% wall thickness vs +/- 15-20% for tier 2 vendors)." },
    { question: "When should I choose MFL over UT for pipeline inspection?", answer: "Choose MFL over UT when: (1) Your pipeline is gas, multiphase, or dry - no coupling fluid for UT. (2) Primary threat is general metal loss corrosion, pitting, or manufacturing anomalies (not cracks). (3) You need a baseline inspection on a new pipeline. (4) You operate a thin-to-medium wall pipeline (6-25 mm). (5) You have variable wall thickness or pipe schedules (MFL handles transitions better). (6) Budget is constrained - MFL is typically 20-40% cheaper than UT per km. (7) Pipeline operates at low flow rates that may not provide consistent UT coupling. Choose UT over MFL when: (1) Crack detection is mandatory (stress corrosion cracking, hook cracks, fatigue cracks). (2) You need precise wall thickness numerics for fitness-for-service / API 579 evaluations. (3) Liquid product line with stable flow. (4) Heavy wall (>25 mm) requiring high sizing accuracy. (5) Regulatory compliance requires direct measurement of remaining wall thickness. Many operators now run MFL+UT combo on critical lines (HCA segments under PHMSA 49 CFR 192.493) to capture both defect populations and avoid follow-up runs." },
    { question: "What does MFL pipeline inspection NOT detect?", answer: "MFL has known blind spots that operators must understand before relying on it as their sole integrity tool: (1) Axially-oriented cracks - conventional axial-flux MFL aligns flux parallel to the pipe axis, making it relatively insensitive to long axial cracks (the dominant defect in SCC-prone lines). Use Transverse Field Inspection (TFI) or spiral MFL (TDW SpirALL) to address this gap. (2) Tight crack-like indications including SCC, fatigue cracks, hook cracks at the long seam, and lack-of-fusion welds. UT or EMAT is required. (3) Mid-wall and laminar defects - laminations and hydrogen-induced cracking parallel to the wall surface produce minimal flux leakage. (4) Very small pitting (typically <10% wall depth or <3x wall thickness in area) below the tool's reporting threshold. (5) Dent-only features without metal loss - paired caliper or IMU sensor needed. (6) External coating damage without metal loss - direct assessment (DA) tools required. (7) Defects in non-ferromagnetic materials (some duplex stainless, aluminum) - MFL cannot magnetize them. For high-consequence pipelines, MFL should be combined with UT, EMAT, or DA programs to close these gaps per ASME B31.8S risk management." },
    { question: "Is MFL inspection required by PHMSA and DOT regulations?", answer: "PHMSA 49 CFR Part 192 (gas) and Part 195 (hazardous liquid) do not mandate MFL specifically, but they require operators to use 'instrumented internal inspection' tools capable of detecting time-dependent threats in High Consequence Areas (HCAs). In practice, MFL is the dominant tool used to satisfy these requirements for gas transmission pipelines. Key regulatory drivers: (1) 49 CFR 192.493 - requires assessment methods (ILI, hydrotest, direct assessment, or other technology) for HCAs on 7-year reassessment intervals. (2) 49 CFR 195.452 - integrity management for hazardous liquid pipelines, typically 5-year reassessment. (3) ASME B31.8S - 'Managing System Integrity of Gas Pipelines' - recognized industry standard prescribing assessment methods. (4) API 1163 - 'In-line Inspection Systems Qualification Standard' - sets performance specifications MFL vendors must meet. (5) NACE SP0102 / AMPP SP0102 - in-line inspection of pipelines. PHMSA's 'Mega Rule' (effective 2020) expanded reassessment requirements to Moderate Consequence Areas (MCAs) for gas transmission, dramatically increasing MFL demand. Operators must demonstrate tool performance specifications (POD, POI, sizing accuracy) per API 1163 to defend assessment validity in PHMSA audits." },
    { question: "How long does an MFL inspection run take?", answer: "Total MFL inspection project timeline is typically 6-12 weeks from contract award to final report: Pre-job engineering (2-3 weeks) - tool selection, launcher/receiver verification, bend radius checks, operating envelope review. Pipeline preparation (1-2 weeks) - cleaning pig runs to remove debris, paraffin, scale; gauge plate run to verify minimum bore. Mobilization (3-7 days) - tool transport to launch site, crew mobilization. ILI run itself (typically 1-3 days for runs under 200 km at 1-4 m/s pig velocity) - actual MFL data acquisition. Tool demob and data download (2-5 days). Level 1 preliminary report (1-2 weeks post-run) - tool performance verification, top-100 anomalies. Level 2 full analysis report (4-8 weeks post-run) - every anomaly above reporting threshold sized, classified, and provided with dig sheets and GPS coordinates. Dig verification campaign (varies) - typically 5-20 dig validations to confirm sizing accuracy meets API 1163 specifications. Schedule MFL runs 4-6 months in advance with major vendors due to limited tool availability. Emergency runs (post-incident) command 50-100% rush premiums." },
    { question: "What is HR-MFL and when do I need it?", answer: "HR-MFL (High-Resolution MFL) refers to MFL inspection tools with denser sensor spacing (typically 6-12 mm circumferential pitch vs 15-25 mm for standard MFL) and higher sampling rates. The improved spatial resolution provides: (1) Better sizing of small pitting and isolated corrosion features. (2) Improved detection of channeling and selective seam weld corrosion. (3) Tighter sizing accuracy - HR-MFL typically achieves +/- 10% wall thickness sizing at 80% confidence vs +/- 15-20% for standard resolution. (4) Better characterization of clustered/interacting defects per ASME B31G interaction rules. (5) Improved detection of small features near girth welds. You need HR-MFL when: aging pipeline with selective seam weld corrosion concerns; ERW pipe vintage 1970-1995 with hook crack risk; fitness-for-service calculations requiring tight sizing tolerance; first ILI run on high-consequence pipeline where baseline accuracy matters for future growth-rate calculations; refinery and station piping requiring detailed corrosion mapping. HR-MFL adds 15-25% to standard MFL cost but typically pays back through reduced unnecessary digs (false positives) and avoided missed defects (false negatives). Major HR-MFL tools: Rosen RoCorr HR, BHGE HD MagneScan, NDT Global Evo Eclipse Hybrid." },
    { question: "Can MFL inspect unpiggable pipelines?", answer: "Conventional free-swimming MFL tools require a piggable pipeline - meaning equal diameter throughout, sufficient bend radii (typically 1.5D minimum), launchers and receivers, and minimum flow/pressure to propel the tool. Many older or complex pipelines are 'unpiggable' due to: multi-diameter sections; tight bends (<1.5D); valves and fittings restricting bore; no launcher/receiver infrastructure; low or no flow. Solutions for unpiggable lines: (1) Tethered MFL tools - pulled through the pipeline by cable, used for shorter sections (typically <5 km). (2) Robotic MFL crawlers - self-propelled units with onboard power, used in low-pressure gas distribution. Companies: Pipetel Explorer, ULC Robotics. (3) Free-swimming bidirectional tools - launched from one end, retrieved from same end after flow reversal. (4) Pipeline modifications - install launchers/receivers, replace tight bends, add isolation valves. Capital cost $500K-$5M but enables all future ILI. (5) Alternative assessment methods - hydrotest, direct assessment (ECDA, ICDA), or guided wave UT from station piping. Cost premium for unpiggable solutions: 2-5x conventional MFL pricing per km. Quest Integrity, Pipetel, ULC Robotics, and ROSEN PetroScan are leaders in unpiggable inspection." },
    { question: "How accurate is MFL sizing of corrosion defects?", answer: "Per API 1163 and vendor specifications, modern HR-MFL tool sizing accuracy at 80% confidence is typically: Depth: +/- 10% of wall thickness for general metal loss, +/- 15% for pitting. Length: +/- 15 mm to +/- 25 mm depending on tool. Width: +/- 15 mm. Detection threshold: typically 5-10% wall thickness depth, 1x to 3x wall thickness in surface area. Sizing of cluster defects involves more uncertainty due to interaction effects. Real-world performance depends on: pipeline cleanliness (debris reduces accuracy); tool velocity (out-of-spec velocity degrades data); wall thickness (thicker walls reduce flux saturation, decreasing accuracy >20 mm); product temperature (extreme cold/hot affects sensor performance); pipe steel grade and remanent magnetism. Operators verify vendor sizing accuracy through 'dig program' - excavating and direct-measuring a statistical sample of called anomalies (typically 5-20 digs per run). API 1163 requires vendors to demonstrate their tool meets stated sizing specs through field validation. Failed dig verification can require re-running the line at vendor expense. Best practice: contractually require API 1163 Level 2 (proven) tool qualification and tied sizing performance specifications with measurement validation criteria written into the contract." }
];

const costByDiameter = [
    { diameter: "6\" (150 mm)", costPerKm: "$5,000 - $8,000", costPerMile: "$8,000 - $12,800", typicalRun: "10-30 km gathering lines", mobFee: "$25,000 - $40,000" },
    { diameter: "10\"-12\" (250-300 mm)", costPerKm: "$3,500 - $5,500", costPerMile: "$5,600 - $8,800", typicalRun: "20-80 km", mobFee: "$30,000 - $50,000" },
    { diameter: "16\"-20\" (400-500 mm)", costPerKm: "$2,500 - $4,000", costPerMile: "$4,000 - $6,400", typicalRun: "50-150 km", mobFee: "$40,000 - $60,000" },
    { diameter: "24\" (600 mm)", costPerKm: "$2,000 - $3,500", costPerMile: "$3,200 - $5,600", typicalRun: "80-200 km", mobFee: "$50,000 - $70,000" },
    { diameter: "30\" (750 mm)", costPerKm: "$1,800 - $3,000", costPerMile: "$2,900 - $4,800", typicalRun: "100-300 km", mobFee: "$60,000 - $80,000" },
    { diameter: "36\"-42\" (900-1050 mm)", costPerKm: "$1,500 - $2,800", costPerMile: "$2,400 - $4,500", typicalRun: "150-500 km trunklines", mobFee: "$70,000 - $100,000" }
];

const mflVsUtMatrix = [
    { useCase: "Dry/Gas Pipeline", mfl: "Best choice - no coupling needed", utIli: "Not suitable without slug/batch fluid", combo: "MFL + EMAT for cracks" },
    { useCase: "Liquid Hydrocarbon Pipeline", mfl: "Good for general corrosion", utIli: "Best - direct WT measurement", combo: "MFL + UT for full threat coverage" },
    { useCase: "Thick Wall (>25 mm)", mfl: "Sizing accuracy drops", utIli: "Excellent if coupling available", combo: "UT primary, MFL backup" },
    { useCase: "Thin Wall (<10 mm)", mfl: "Excellent sensitivity", utIli: "Coupling/standoff challenges", combo: "MFL primary sufficient" },
    { useCase: "Low Flow / Multiphase", mfl: "Tolerant of variable conditions", utIli: "Coupling failures common", combo: "MFL preferred" },
    { useCase: "Post-Construction Baseline", mfl: "Industry standard for new builds", utIli: "Only if crack threats present", combo: "MFL + caliper + IMU" },
    { useCase: "Axial Cracks (SCC, fatigue)", mfl: "Misses axial cracks (use TFI/SpirALL)", utIli: "Detects - best for liquid", combo: "EMAT + UT crack-detection tools" },
    { useCase: "Dent + Gouge / Mechanical Damage", mfl: "Sees gouge metal loss only", utIli: "Detects cracks in dents", combo: "MFL + caliper + IMU + EMAT essential" },
    { useCase: "Selective Seam Weld Corrosion", mfl: "HR-MFL detects but undersizes", utIli: "Better seam sizing", combo: "HR-MFL + UT crack tool" },
    { useCase: "Aging ERW Pipe (pre-1995)", mfl: "Detects metal loss only", utIli: "Detects hook cracks", combo: "Mandatory combo for ERW vintage" }
];

const topVendors = [
    { vendor: "ROSEN Group", hq: "Lingen, Germany", flagship: "RoCorr MFL-A, RoCorr CDI, ProGeo IMU", strength: "HR-MFL leader, deepest analyst pool, global footprint", priceTier: "Premium (top 10%)", typicalProjectMin: "50 km / enterprise tier" },
    { vendor: "Baker Hughes (PII/BHGE)", hq: "Cramlington, UK", flagship: "MagneScan HD, MagneScan Triax, Vectra", strength: "Original PII heritage, strong in gas transmission, dual-field MFL", priceTier: "Premium", typicalProjectMin: "40 km / $180K" },
    { vendor: "NDT Global", hq: "Stutensee, Germany", flagship: "Evo Eclipse Hybrid (MFL+UT), Evo 1.0 UT", strength: "Best UT/MFL combo tools, liquid pipeline specialist", priceTier: "Premium", typicalProjectMin: "30 km / enterprise tier" },
    { vendor: "T.D. Williamson (TDW)", hq: "Tulsa, OK", flagship: "SpirALL MFL (spiral magnetization), Multidataset", strength: "Spiral MFL for axial crack detection, North American gas transmission", priceTier: "Mid-Premium", typicalProjectMin: "30 km / $150K" },
    { vendor: "Onstream Pipeline Inspection", hq: "Calgary, Canada", flagship: "HR-MFL combo tools", strength: "Cost-competitive HR-MFL, fast turnaround, distribution and gathering", priceTier: "Mid-Market", typicalProjectMin: "20 km / $100K" },
    { vendor: "Quest Integrity", hq: "Kent, WA", flagship: "InVista UT for unpiggable lines", strength: "Unpiggable, tight-bend, refinery piping", priceTier: "Specialty Premium", typicalProjectMin: "5 km / $150K" },
    { vendor: "Enduro Pipeline Services", hq: "Tulsa, OK", flagship: "MFL ILI for low-pressure systems", strength: "Low-flow / low-pressure gas distribution", priceTier: "Mid-Market", typicalProjectMin: "15 km / $80K" },
    { vendor: "Pipesurvey International", hq: "Netherlands", flagship: "MFL + caliper combos", strength: "European market, smaller-diameter expertise", priceTier: "Mid-Market", typicalProjectMin: "20 km / $90K" }
];

const inspectionWorkflow = [
    { step: "Step 1: Engineering & Tool Selection", duration: "2-3 weeks", activities: "Confirm pipeline parameters (diameter, wall thickness range, bend radii, min/max operating pressure, fluid). Select tool from vendor catalog. Submit feasibility study. Confirm launcher/receiver compatibility." },
    { step: "Step 2: Pre-Inspection Cleaning", duration: "1-2 weeks", activities: "Run progressive cleaning pig train: foam, then mandrel, then brush, then magnet/disc to remove paraffin, scale, debris, and ferrous particulate that would mask MFL signal. Critical for data quality." },
    { step: "Step 3: Gauge Plate Run", duration: "1-2 days", activities: "Run a gauge pig with aluminum gauge plates sized to tool minimum bore. Confirms no dents, ovality, or restrictions that would damage the MFL tool. Mandatory before tool launch." },
    { step: "Step 4: MFL Tool Launch & Run", duration: "1-3 days", activities: "Launch MFL tool at operator-controlled pressure and flow. Tool transits pipeline at 1-4 m/s recording flux leakage data. Above/below ground tracking confirms tool location and identifies stops. Receive at downstream trap." },
    { step: "Step 5: Data Download & QA/QC", duration: "2-5 days", activities: "Download raw data from tool memory. Vendor performs Tool Performance Verification (TPV) confirming sensor health, coverage, velocity compliance, and AGM marker alignment. Decision to re-run if tool out-of-spec." },
    { step: "Step 6: Level 1 Preliminary Report", duration: "1-2 weeks post-run", activities: "Top 100 most severe anomalies sized and located. Immediate threats flagged for emergency dig consideration. Tool performance summary delivered to operator." },
    { step: "Step 7: Level 2 Full Analysis Report", duration: "4-8 weeks post-run", activities: "Every anomaly above reporting threshold sized, classified (corrosion, mfg, dent, weld), located with GPS, and prioritized using ASME B31G or modified B31G remaining strength calculations. Dig sheets generated." },
    { step: "Step 8: Dig Verification Campaign", duration: "2-12 months", activities: "Excavate top-priority anomalies. Direct-measure depth, length, width with UT and pit gauges. Compare to ILI sizing. Validate vendor accuracy per API 1163. Update integrity assessment with field truth." }
];

const regulatoryDrivers = [
    { regulation: "PHMSA 49 CFR 192.493", scope: "Gas transmission pipelines", requirement: "Instrumented internal inspection in HCAs - MFL is dominant tool to satisfy. 7-year reassessment cycle." },
    { regulation: "PHMSA 49 CFR 195.452", scope: "Hazardous liquid pipelines", requirement: "Integrity management with periodic ILI - 5-year reassessment in HCAs. MFL + UT typical combo." },
    { regulation: "PHMSA Mega Rule (2020+)", scope: "Gas transmission - expanded scope", requirement: "Extended integrity management to Moderate Consequence Areas (MCAs). Dramatically increased MFL demand 2020-2026." },
    { regulation: "ASME B31.8S", scope: "Gas pipeline integrity management", requirement: "Recognized industry standard - prescribes ILI as preferred assessment method for time-dependent threats." },
    { regulation: "API 1163", scope: "ILI tool qualification standard", requirement: "Performance specifications for ILI tools - sizing accuracy, POD, POI. Required for PHMSA audit defense." },
    { regulation: "NACE/AMPP SP0102", scope: "ILI of pipelines - standard practice", requirement: "Defines required tool deliverables, data formats, dig program design. Industry baseline for MFL contracts." },
    { regulation: "API 1160", scope: "Hazardous liquid integrity management", requirement: "Companion to PHMSA 195.452 - prescribes ILI program design, threat identification, frequency." },
    { regulation: "CSA Z662 (Canada)", scope: "Canadian oil and gas pipelines", requirement: "Mandatory ILI for HCA-equivalent areas with MFL widely accepted as primary tool." }
];

const anomalyGrading = [
    { grade: "Immediate Repair (Class 1)", criteria: "Predicted MAOP <100%, RSF <0.9, or depth >80% wall", action: "Excavate and repair within 30 days per PHMSA HCA rules" },
    { grade: "60-Day Repair (Class 2)", criteria: "RSF 0.9-1.1, depth 50-80% wall, or interacting cluster", action: "Schedule dig within 60-180 days based on growth rate" },
    { grade: "Monitored (Class 3)", criteria: "Depth 20-50% wall, RSF >1.1, no interaction concerns", action: "Track in next ILI run, calculate growth rate" },
    { grade: "Below Reporting Threshold", criteria: "Depth <10-20% wall (vendor-dependent threshold)", action: "Not reported individually but counted in pipeline-level metrics" },
    { grade: "Suspect / Inconclusive", criteria: "Ambiguous signal - possible defect, possible noise", action: "Investigate via verification dig or alternative NDT method" }
];

const costOptimization = [
    { strategy: "Bundle MFL + Caliper + IMU", savings: "20-30% vs separate runs", rationale: "Single mobilization, single shutdown window, comprehensive defect coverage in one pass. Industry trend toward triax combo tools." },
    { strategy: "Multi-Year Vendor Agreement", savings: "10-20% per run", rationale: "Lock pricing across 3-5 years and 5-10 pipelines. Vendors prioritize repeat clients for tool availability." },
    { strategy: "Run During Vendor Off-Peak", savings: "5-15% on rate cards", rationale: "Avoid Q4 (year-end PHMSA deadlines). January-March often discounted." },
    { strategy: "Cluster Geographically Adjacent Lines", savings: "30-50% on mobilization", rationale: "Mobilize once for multiple pipelines in same field/region. Critical for small-diameter gathering systems." },
    { strategy: "Reuse Recent Cleaning Pig Data", savings: "$10K-$30K per run", rationale: "If pipeline was cleaned recently for product reasons, skip redundant cleaning runs. Confirm with vendor." },
    { strategy: "Pre-Negotiate Dig Verification Rate", savings: "Predictable budget", rationale: "Lock per-dig validation pricing in master agreement. Avoid surprise bills on follow-up digs." },
    { strategy: "Specify Performance, Not Tool Brand", savings: "Competitive bidding", rationale: "Write spec to API 1163 performance requirements rather than naming Rosen/BHGE specifically. Opens bidding to 5-7 vendors." }
];

export default function MFLPipelineInspectionCostVendorsGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "MFL Pipeline Inspection 2026: Cost per km, Top Vendors, MFL vs UT Decision Matrix",
                "description": "MFL pipeline inspection cost $2-5/m, vendor comparison (Rosen, BHGE, NDT Global, TDW), MFL vs UT ILI decision matrix. Pick the right ILI tool. Updated May 2026.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-05-17",
                "dateModified": "2026-05-17"
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
                title="MFL vs UT Pipeline Inspection — Cost, Vendors, When to Use"
                description="MFL vs UT pipeline inspection — defect detection, vendor comparison, cost ranges, when each wins. Operator-specific selection matrix."
                keywords="MFL pipeline inspection, magnetic flux leakage pipeline inspection, MFL ILI cost, MFL vs UT pipeline, MFL inline inspection, HR-MFL, TFI inspection, pipeline integrity, Rosen MFL, NDT Global, TD Williamson SpirALL, PHMSA 49 CFR 192.493, ASME B31.8S, API 1163"
                canonical="https://atlantisndt.com/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">Pipeline Integrity Buying Guide • Last updated May 2026 • 22 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">MFL Pipeline Inspection: Cost per km, Top Vendors & MFL vs UT Decision Matrix (2026)</h1>
                        <p className="text-xl text-amber-100 mb-8">Real 2026 ILI pricing by pipeline diameter, vendor comparison across Rosen, Baker Hughes, NDT Global, TDW, Onstream, and Quest, and a buyer-grade decision matrix to pick MFL, UT, or combo tools. Built for integrity managers, not students.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="MFL Pipeline Inspection: Cost, Vendors, MFL vs UT" description="Real 2026 MFL ILI pricing by diameter and a buyer's decision matrix vs UT." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Opening Cost Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">MFL Pipeline Inspection Cost in 2026 (Per Kilometer, Per Mile)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            MFL inline inspection (ILI) pricing in 2026 ranges from <strong>$1,500 to $8,000 per kilometer ($1-$8 per meter)</strong> depending on pipeline diameter, total length, geography, and vendor tier. Small-diameter pipelines (6 inch) cost more per kilometer because tool mobilization is amortized over fewer kilometers; large-diameter trunklines (36 inch+) drop to $1,500-$3,000 per km because long contiguous runs absorb mobilization efficiently. The table below reflects fixed-fee turnkey pricing including pre-cleaning, gauge run, MFL data acquisition, Level 2 analysis report, and dig sheets - the four-line item buyers actually care about.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Pipeline Diameter</th>
                                        <th className="px-3 py-2 text-left font-semibold">Cost / km</th>
                                        <th className="px-3 py-2 text-left font-semibold">Cost / mile</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical Run Length</th>
                                        <th className="px-3 py-2 text-left font-semibold">Mobilization Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costByDiameter.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.diameter}</td>
                                            <td className="px-3 py-2 text-amber-700 font-semibold">{item.costPerKm}</td>
                                            <td className="px-3 py-2">{item.costPerMile}</td>
                                            <td className="px-3 py-2 text-xs">{item.typicalRun}</td>
                                            <td className="px-3 py-2 text-xs">{item.mobFee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900 mb-2">
                                <strong>Pricing modifiers (apply to base rates above):</strong>
                            </p>
                            <ul className="text-amber-800 text-sm space-y-1">
                                <li>• <strong>HR-MFL premium:</strong> +15-25% over standard-resolution MFL</li>
                                <li>• <strong>Combo tool (MFL + caliper + IMU):</strong> +30-40% over standalone MFL but cheaper than separate runs</li>
                                <li>• <strong>Geography:</strong> North America/Europe baseline; Middle East/Africa +20-30%; remote regions +50-100%</li>
                                <li>• <strong>Rush jobs (post-incident):</strong> +50-100% premium</li>
                                <li>• <strong>Unpiggable (tethered/robotic):</strong> 2-5x conventional pricing per km</li>
                                <li>• <strong>Vendor tier:</strong> Top tier (Rosen, BHGE, NDT Global) charge 15-25% over mid-market vendors</li>
                            </ul>
                        </div>
                    </section>

                    {/* What MFL Detects vs Misses */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">What MFL Detects (And What It Misses)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Magnetic Flux Leakage works by saturating the pipe wall with a strong axial magnetic field using powerful permanent magnets or electromagnets. Where the wall is intact, flux flows through the steel. Where metal is missing - corrosion pits, gouges, manufacturing anomalies - flux 'leaks' out of the wall surface and is detected by Hall-effect or coil sensors arranged around the pipe's inner circumference. The strength, location, and shape of the leakage signal correlates with defect depth, length, and width.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                                <h3 className="font-bold text-lg mb-3 text-green-800 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> MFL Excels At</h3>
                                <ul className="text-slate-700 space-y-2 text-sm">
                                    <li>• External corrosion (general metal loss, pitting)</li>
                                    <li>• Internal corrosion (bottom-of-pipe channeling in liquid lines)</li>
                                    <li>• Mechanical damage with metal loss (gouges, scratches)</li>
                                    <li>• Manufacturing anomalies (mill defects, lap defects)</li>
                                    <li>• Weld anomalies (LOF, undercut with measurable depth)</li>
                                    <li>• Pipe wall thinning baselines for new construction</li>
                                    <li>• Operates in gas, dry, or liquid product (no coupling needed)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h3 className="font-bold text-lg mb-3 text-red-800 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> MFL Misses or Undersizes</h3>
                                <ul className="text-slate-700 space-y-2 text-sm">
                                    <li>• Tight axial cracks (SCC, fatigue cracks at long seam)</li>
                                    <li>• Hook cracks in pre-1995 ERW pipe</li>
                                    <li>• Laminations and HIC (parallel to wall surface)</li>
                                    <li>• Mid-wall defects without surface metal loss</li>
                                    <li>• Dents without metal loss (need caliper/IMU)</li>
                                    <li>• Coating damage without metal loss</li>
                                    <li>• Very small pitting below tool reporting threshold (10-20% WT)</li>
                                    <li>• Defects in non-ferromagnetic materials (some stainless, aluminum)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>The axial vs circumferential distinction matters:</strong> Conventional axial-flux MFL aligns its magnetic field parallel to the pipe axis. This makes it sensitive to defects oriented perpendicular to that field (circumferential metal loss like generalized corrosion) and relatively blind to defects parallel to the field (axial cracks). To close this gap, vendors developed Transverse Field Inspection (TFI) and spiral-MFL tools. The next section covers these variants.
                            </p>
                        </div>
                    </section>

                    {/* MFL Inspection Types */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">MFL Pipeline Inspection Tool Types</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Not all MFL is the same tool. Vendors offer multiple MFL variants optimized for different threat populations. Understanding the differences is critical to writing a defensible scope of work.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">Standard-Resolution Axial MFL (SR-MFL)</h3>
                                <p className="text-slate-700 text-sm">The original MFL technology. Sensor pitch typically 15-25 mm circumferential. Detects general metal loss reliably; pitting and small features may go undersized. Industry workhorse for screening runs and lower-consequence pipelines. Examples: Rosen RoCorr SR, BHGE MagneScan SR.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">High-Resolution MFL (HR-MFL)</h3>
                                <p className="text-slate-700 text-sm">Denser sensor spacing (6-12 mm pitch) and faster sampling. Sizing accuracy +/- 10% WT vs +/- 15-20% for SR. Critical for fitness-for-service calculations, selective seam weld corrosion in ERW pipe, and baseline runs where small features matter. Industry default for HCA pipelines. Examples: Rosen RoCorr HR, BHGE HD MagneScan, NDT Global Evo Eclipse Hybrid.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">Transverse Field Inspection (TFI)</h3>
                                <p className="text-slate-700 text-sm">Rotates the magnetic field 90 degrees from conventional axial MFL. Field is now circumferential, making the tool sensitive to axially-oriented defects (the gap in conventional MFL). Used to screen for narrow axial defects including SCC indications and seam weld cracking. Often run as a separate pass or in combination tools. Examples: Rosen RoCorr TFI, BHGE MagneScan TFI.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">Spiral MFL (TDW SpirALL)</h3>
                                <p className="text-slate-700 text-sm">T.D. Williamson's spiral-magnetization variant. Magnets are oriented at an angle to the pipe axis, producing a helical flux pattern that detects defects of any orientation in a single pass. Particularly popular in US natural gas transmission for combining axial-defect detection with general MFL coverage. Sizing accuracy comparable to HR-MFL.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">Triax MFL / Multi-Channel MFL</h3>
                                <p className="text-slate-700 text-sm">Modern combination tools deploy three orthogonal sensor channels (axial, radial, circumferential) to discriminate defect geometry. Improves classification of metal loss vs mill anomaly vs mechanical damage. Examples: BHGE MagneScan Triax, Rosen RoCorr 3D-MFL.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-2">Combo Tools (MFL + Caliper + IMU + UT/EMAT)</h3>
                                <p className="text-slate-700 text-sm">Modern integrity programs increasingly bundle multiple sensor technologies into a single inspection train. A typical combo tool includes MFL (metal loss), caliper (geometry/dents), IMU (XYZ positioning), and optionally EMAT (cracks) or UT (precise WT). Eliminates the need for multiple shutdown windows. Cost premium 30-40% over standalone MFL but typically 30-50% cheaper than separate runs. Industry trend for high-consequence pipelines.</p>
                            </div>
                        </div>
                    </section>

                    {/* MFL vs UT Decision Matrix */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">MFL vs UT ILI Decision Matrix</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The 'MFL or UT?' question is the most common buyer-side decision in pipeline integrity. The answer is rarely binary - it depends on product, threats, wall thickness, and budget. The matrix below maps the eight most common operator scenarios against MFL, UT ILI, and combo recommendations.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Use Case / Scenario</th>
                                        <th className="px-3 py-2 text-left font-semibold">MFL</th>
                                        <th className="px-3 py-2 text-left font-semibold">UT ILI</th>
                                        <th className="px-3 py-2 text-left font-semibold">Hybrid Combo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mflVsUtMatrix.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.useCase}</td>
                                            <td className="px-3 py-2 text-xs">{item.mfl}</td>
                                            <td className="px-3 py-2 text-xs">{item.utIli}</td>
                                            <td className="px-3 py-2 text-xs text-amber-700">{item.combo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                            <h3 className="font-bold text-lg mb-3">Decision Heuristic</h3>
                            <ul className="text-slate-700 space-y-2 text-sm">
                                <li>• <strong>Gas pipeline + metal loss threat only</strong> = standalone HR-MFL</li>
                                <li>• <strong>Gas pipeline + crack threat (SCC, ERW)</strong> = HR-MFL + EMAT combo, or HR-MFL + TFI separate runs</li>
                                <li>• <strong>Liquid pipeline + metal loss + cracks</strong> = MFL + UT crack tool combo (e.g. NDT Global Evo Eclipse Hybrid)</li>
                                <li>• <strong>Thick-wall pipeline ({'>'}25 mm) liquid</strong> = UT ILI primary; MFL supplementary</li>
                                <li>• <strong>Low-flow, multiphase, dry gas distribution</strong> = MFL; UT impractical without coupling</li>
                                <li>• <strong>High-consequence area (HCA) per PHMSA</strong> = combo tool with metal loss + crack + geometry + IMU</li>
                            </ul>
                        </div>
                    </section>

                    {/* Top Vendors */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top MFL ILI Service Providers Globally (2026)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The MFL ILI service market is dominated by 4-5 global vendors with significant tool fleets, complemented by regional and specialty providers. Pricing tier, tool availability, geographic coverage, and analyst quality vary significantly. The comparison below covers the eight vendors most commonly bid for North American, European, and Middle East pipeline integrity contracts.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-xs">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-2 py-2 text-left font-semibold">Vendor</th>
                                        <th className="px-2 py-2 text-left font-semibold">HQ</th>
                                        <th className="px-2 py-2 text-left font-semibold">Flagship Tools</th>
                                        <th className="px-2 py-2 text-left font-semibold">Strength</th>
                                        <th className="px-2 py-2 text-left font-semibold">Price Tier</th>
                                        <th className="px-2 py-2 text-left font-semibold">Typical Min Project</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topVendors.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-2 py-2 font-semibold">{item.vendor}</td>
                                            <td className="px-2 py-2">{item.hq}</td>
                                            <td className="px-2 py-2">{item.flagship}</td>
                                            <td className="px-2 py-2">{item.strength}</td>
                                            <td className="px-2 py-2 text-amber-700 font-semibold">{item.priceTier}</td>
                                            <td className="px-2 py-2">{item.typicalProjectMin}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Buyer tip:</strong> Lead time for top-tier vendors (Rosen, BHGE, NDT Global) often runs 4-6 months. If your reassessment deadline is within 90 days, plan to bid mid-tier vendors (Onstream, Enduro, Pipesurvey International) which typically have shorter availability windows. Always issue an RFP to at least 3 vendors - tool availability and analyst loading create significant price variance month-to-month.
                            </p>
                        </div>
                    </section>

                    {/* Regulatory Drivers */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">When to Choose MFL: Regulatory and Operational Drivers</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            MFL is rarely chosen on technical merit alone - regulatory compliance and integrity management program design drive most MFL contracting decisions. The table below summarizes the key US and international regulations that mandate or strongly recommend MFL ILI for in-service pipelines.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Regulation / Standard</th>
                                        <th className="px-3 py-2 text-left font-semibold">Scope</th>
                                        <th className="px-3 py-2 text-left font-semibold">MFL Requirement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {regulatoryDrivers.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.regulation}</td>
                                            <td className="px-3 py-2 text-xs">{item.scope}</td>
                                            <td className="px-3 py-2 text-xs">{item.requirement}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                            <p className="text-slate-700">
                                <strong>Operational drivers (beyond regulation):</strong> Many operators run MFL on non-HCA pipelines for insurance underwriting compliance, M&A due diligence, asset integrity baseline before sale, post-construction acceptance testing, and pre-pressure-test screening. MFL is also the default tool for refinery interconnect piping, terminal manifolds, and gathering systems where leak consequences justify pre-emptive inspection regardless of regulatory mandate.
                            </p>
                        </div>
                    </section>

                    {/* Inspection Workflow */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">MFL Inspection Workflow: 8 Steps From Contract to Dig Sheets</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Operators new to MFL often underestimate the project timeline. The actual data acquisition run is typically 1-3 days, but the surrounding engineering, cleaning, analysis, and verification work extends total project duration to 3-6 months. The workflow below reflects industry-standard practice for a typical 100 km gas transmission MFL inspection.
                        </p>

                        <div className="space-y-4 mb-6">
                            {inspectionWorkflow.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-bold text-lg text-amber-900">{item.step}</h4>
                                        <span className="text-sm px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold whitespace-nowrap">{item.duration}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.activities}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Cost Optimization */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Cost Optimization: 7 Strategies to Reduce MFL Spend</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            MFL ILI is a significant integrity management line item - large transmission operators spend $5M-$50M annually on ILI contracts. The strategies below reflect best practices we have seen reduce annual MFL spend by 15-30% without sacrificing data quality or regulatory defensibility.
                        </p>

                        <div className="space-y-4 mb-6">
                            {costOptimization.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-bold text-lg text-amber-900 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> {item.strategy}</h4>
                                        <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold whitespace-nowrap">{item.savings}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.rationale}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Biggest single lever:</strong> Combo tools (MFL + caliper + IMU) almost always beat separate single-purpose runs on total cost-per-threat-detected. Even when combo tool day rate is higher, the consolidation of mobilization, cleaning, gauging, and shutdown windows produces 20-30% net savings. Industry leaders moved to combo as default 2018-2022 - if your IM program still runs MFL standalone, audit the business case.
                            </p>
                        </div>
                    </section>

                    {/* Reading MFL Reports */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Reading the MFL Report: Anomaly Grading</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The MFL final deliverable - the Level 2 Anomaly Report - typically contains hundreds to thousands of called anomalies. Integrity engineers must triage these into actionable categories. The grading framework below reflects ASME B31.8S and PHMSA-aligned practice.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Grade</th>
                                        <th className="px-3 py-2 text-left font-semibold">Sizing Criteria</th>
                                        <th className="px-3 py-2 text-left font-semibold">Required Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {anomalyGrading.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.grade}</td>
                                            <td className="px-3 py-2 text-xs">{item.criteria}</td>
                                            <td className="px-3 py-2 text-xs">{item.action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500 mb-6">
                            <h3 className="font-bold text-lg mb-3">Key Report Elements to Demand From Vendors</h3>
                            <ul className="text-slate-700 space-y-2 text-sm">
                                <li>• <strong>API 1163 Tool Performance Verification (TPV) Certificate</strong> - confirms tool met sizing specs on this run</li>
                                <li>• <strong>Per-anomaly sizing with confidence intervals</strong> - depth/length/width plus +/- tolerance at 80% confidence</li>
                                <li>• <strong>GPS coordinates and chainage</strong> with IMU-derived elevation if combo tool used</li>
                                <li>• <strong>ASME B31G or modified B31G remaining strength factor (RSF)</strong> for each metal loss</li>
                                <li>• <strong>Cluster interaction analysis</strong> per ASME B31G rules</li>
                                <li>• <strong>Dig sheet format</strong> compatible with field crew workflows (laminated, weatherproof, with sketch)</li>
                                <li>• <strong>Comparison to prior ILI run</strong> if applicable, with growth-rate calculations</li>
                                <li>• <strong>Raw data deliverable</strong> in vendor-neutral format (Pipeline Open Data Standard / PODS, or vendor format with viewer)</li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Validate sizing accuracy with digs:</strong> Per API 1163, vendor sizing claims must be validated against direct field measurements. Plan for a dig validation campaign of 5-20 anomalies per run. If field measurements consistently exceed reported sizing, you may have grounds for vendor re-run at their cost. Document everything - dig validation is your audit defense if PHMSA inspectors challenge your integrity assessment.
                            </p>
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
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need an MFL ILI Vendor Selection or Bid Review?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">Atlantis NDT provides independent integrity engineering: vendor selection, MFL/UT bid analysis, scope of work drafting per API 1163, and dig validation oversight. We work for pipeline operators, not service vendors - our recommendation is bias-free.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/consulting" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">Integrity Consulting</Link>
                            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Request RFP Support</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Pipeline Integrity Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/api-570-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 570 Pipeline Inspector Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete guide to becoming a certified API 570 pipeline inspector.</p>
                            </Link>
                            <Link to="/blog/api-570-piping-inspection-code-requirements" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 570 Piping Inspection Code Requirements</h3>
                                <p className="text-slate-600 text-sm mt-2">In-service piping inspection intervals, repair authorization, and code requirements.</p>
                            </Link>
                            <Link to="/blog/pipe-wall-thickness-inspection-ut-procedures" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">Pipe Wall Thickness Inspection: UT Procedures</h3>
                                <p className="text-slate-600 text-sm mt-2">UT thickness measurement procedures for piping and pipelines.</p>
                            </Link>
                            <Link to="/blog/ndt-inspection-cost-2026-by-method-pricing-matrix" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">NDT Inspection Cost 2026 by Method</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete pricing matrix across UT, RT, MT, PT, ET, MFL, and more.</p>
                            </Link>
                            <Link to="/consulting" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group md:col-span-2">
                                <h3 className="font-bold group-hover:text-amber-600 transition">Pipeline Integrity Consulting Services</h3>
                                <p className="text-slate-600 text-sm mt-2">Independent vendor selection, RFP support, and integrity engineering for pipeline operators.</p>
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
