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
    { question: "How much does NDT inspection cost in 2026?", answer: "NDT inspection cost in 2026 depends on method, location, scope, and access. Typical USA baseline rates: Ultrasonic Thickness (UT) $0.40-$0.75 per square meter of grid scan, Conventional Radiography (RT) $35-$55 per 14x17 film, Phased Array UT (PAUT) $250-$450 per hour for crew with equipment, Magnetic Particle (MT) $95-$165 per hour, Liquid Penetrant (PT) $85-$145 per hour, Visual Testing (VT) $75-$125 per hour, TOFD $180-$320 per joint on standard pipe diameters, Eddy Current $140-$240 per hour, and MFL pipeline scanning $8-$22 per meter for in-line tools. Add mobilization (typically $350-$1,200 for regional crews), per-diem ($150-$275/day), and report fees ($150-$500 per report). Multiply by regional modifier: Saudi Arabia and UAE 0.85-1.0x USA, India and SE Asia 0.25-0.45x, UK 1.05-1.20x, Western EU 1.10-1.30x. Total inspection campaign costs typically run $4,500-$28,000 per crew-week for field NDT, with offshore and turnaround work commanding 1.4-2.1x premiums." },
    { question: "What is the cost per film for radiographic testing (RT)?", answer: "RT film cost in 2026 is $35-$55 per 14x17 inch film shot in the USA, all-inclusive (technician labor, source rental, consumables, processing, interpretation, report). Smaller films (10x12 and 7x17) run $28-$45 each. The price includes: certified Level II radiographer, assistant/helper for barricading and safety, Ir-192 or Se-75 source rental ($85-$160/day source charge usually built into film pricing), film stock ($4-$7 per sheet), developer and fixer chemistry ($1.50-$2.50 per film), lead screens and cassettes, processing time, density and sensitivity verification, and final interpretation report. Computed Radiography (CR) using imaging plates costs $32-$48 per exposure (saves chemistry). Digital Radiography (DR) using flat-panel detectors costs $45-$75 per exposure but is much faster and eliminates film/chemistry/disposal entirely. Source surcharges apply: Co-60 for thick steel adds $50-$100/day source premium over Ir-192. Night-shift radiography (mandatory in many refineries for radiation safety) carries a 25-40% labor premium." },
    { question: "How much does ultrasonic testing (UT) cost per square meter?", answer: "Conventional manual UT thickness gauging costs $0.40-$0.75 per square meter of grid coverage in the USA at standard grid spacing (typically 100mm x 100mm or 4 inches x 4 inches). For dense grids (50mm x 50mm) used in CUI surveys, cost rises to $0.95-$1.60/m². For corrosion mapping with B-scan or C-scan recording, expect $4-$9 per square meter because data acquisition is slower and post-processing time is significant. PAUT corrosion mapping with HydroFORM or similar wedges runs $14-$32/m² but provides 100% coverage versus grid sampling. Pricing assumes accessible surface — scaffolding, rope-access, or insulation removal adds $25-$80/m² to total project cost separate from the UT line item. Calibration block use is typically bundled; expect a $50-$150 per-shift surcharge if the asset requires a job-specific reference block." },
    { question: "What is the typical cost per joint for pipeline weld inspection?", answer: "Per-joint pipeline weld inspection costs in 2026 USA, all-inclusive of labor, equipment, consumables, and reporting: RT film on 6 inch carbon steel weld $145-$215 per joint (typically 3 films per joint), RT-digital (DR) on same weld $165-$245 per joint (single exposure, fastest), PAUT (AUT) on 6 inch weld $185-$295 per joint, TOFD on 6 inch weld $135-$210 per joint, PAUT + TOFD hybrid $240-$385 per joint (often the contractual standard for high-pressure pipelines). Cost scales with diameter: 12 inch weld is roughly 1.6x the 6 inch price, 24 inch weld 2.4x, 36 inch weld 3.1x. New-construction mainline pipelines using fully automated AUT (Olympus PipeWIZARD or similar) achieve $95-$165 per joint at high throughput (40-80 welds per day per crew), substantially below film prices once mobilization is amortized. Decision rule of thumb: under 100 welds total, RT-film is cheapest; 100-500 welds, PAUT manual; over 500 welds, automated AUT wins on cost and schedule." },
    { question: "How are NDT day rates structured for field crews?", answer: "Field NDT crews in the USA bill at three pricing models. Day rate: Level II technician with truck and standard equipment $850-$1,450/day; senior Level II or Level III $1,250-$1,950/day; helper or assistant $450-$650/day; full crew (1 L2 + 1 helper + truck + equipment package) $1,650-$2,400/day baseline plus mobilization. PAUT specialist crew (1 PAUT-certified L2 + helper + equipment) $2,800-$4,400/day. Piece-rate: charged per inspection unit (per film, per joint, per square meter) — better for predictable scopes. Unit-rate: hybrid model with minimum day rate plus per-unit billing once a threshold is hit. Overtime premiums: 1.5x for hours 9-12, 2.0x for hours 13+, 2.0x weekends, 2.5-3.0x holidays. Night-shift premium 20-35%. Hot-work or confined-space premium 15-25%. Offshore day rates carry 60-110% uplift over onshore. Turnaround mobilization at refineries with strict gate procedures and badge cycles adds 1-2 hours unbillable per day, baked into elevated turnaround rates." },
    { question: "What hidden costs do NDT clients usually miss in budgeting?", answer: "Hidden NDT cost categories that surprise first-time buyers: (1) Report fees — formal client-format reports $150-$500 per report, with rush 24-hour reports adding 50-100% surcharge. (2) Calibration block rental — asset-specific reference blocks $50-$300/day; custom-fabricated blocks $1,200-$8,000 one-time. (3) Consumables — couplant gel $25-$45 per gallon (typical job uses 2-5 gallons), penetrant kit $90-$140 per kit, magnetic particle ink $35-$75/can, film $4-$7/sheet, developer/fixer chemistry $80-$120 per 5-gallon set. (4) Waste disposal — radiographic film and silver-bearing fixer must be disposed as hazardous waste in most jurisdictions, $150-$400 per drum. (5) Source storage and transport — radioactive source storage at job site requires bonded magazine $200-$500 setup plus daily monitoring. (6) Safety standby — bottle watch, hole watch, fire watch can run $400-$800/day for confined-space jobs. (7) Per-diem and lodging — $150-$275/day per technician on out-of-town work. (8) Equipment downtime — owner-furnished scaffolding or rope-access delays bill at full day rate. Always request line-item quotes." },
    { question: "Why does NDT cost vary so much between countries?", answer: "Geographic NDT cost variation reflects labor markets, certification recognition, equipment availability, regulatory burden, and currency. USA baseline (1.0x): mature NDT market, ASNT-certified technicians common, established consumables supply. Canada 0.95-1.10x USA (similar standards, CGSB or ASNT certification, slightly higher labor in oil sands regions). UK 1.05-1.20x USA (PCN certification, higher labor cost especially London and Aberdeen). Western Europe (Germany, Netherlands, Norway) 1.10-1.30x USA (rigorous EN ISO 9712 certification, strong unions, high social charges). Saudi Arabia 0.85-1.00x USA (Saudi Aramco-approved vendor pool, expat technician premium offsets lower local cost base). UAE 0.90-1.05x USA (similar to KSA, more competition lowers price). India 0.25-0.40x USA (low labor cost, ISO 9712-trained workforce, dominant export market for outsourced ASME work). SE Asia (Malaysia, Thailand, Vietnam) 0.30-0.45x USA. China 0.35-0.55x USA (variable quality control). However, the cost gap narrows substantially for specialized PAUT, AUT, and TOFD work where equipment cost (USD-denominated) dominates labor — emerging-market PAUT often runs 0.6-0.8x USA, not 0.3x." },
    { question: "Are RT consumables banned in some regions, and what is the cost alternative?", answer: "Yes — several jurisdictions have heavily restricted or de facto banned silver-bearing radiographic film and associated chemistry. EU REACH regulations restrict certain processing chemistry components; the Netherlands and Germany now require specialized hazardous-waste handling that effectively triples disposal cost for film labs. Singapore, Hong Kong, and several Australian states require closed-loop chemistry recycling. California (CARB rules) restricts open-tray developing. In Saudi Arabia and UAE, source-import restrictions and security clearances for Ir-192/Co-60 transport make field radiography 25-40% more expensive than equivalent USA work. The alternative is digital: Computed Radiography (CR) using phosphor imaging plates eliminates wet chemistry — plate cost is amortized over thousands of exposures, per-shot cost $32-$48. Direct Digital Radiography (DR) using flat-panel detectors costs $45-$75 per exposure (higher equipment cost amortized over jobs) but eliminates all consumables and provides instant readback. PAUT and TOFD as RT replacements: weld-by-weld basis they often match or beat RT pricing while eliminating radiation hazard and consumables entirely. Decision rule: if your jurisdiction is moving toward consumables restrictions, transition to DR or PAUT now to avoid scope re-baselines mid-project." },
    { question: "How should I structure an RFP for NDT inspection services?", answer: "A well-structured NDT RFP reduces quoted prices by 15-30% by eliminating contractor risk premiums. Required elements: (1) Asset scope — exact equipment list with dimensions, materials, design pressure/temperature, photos. (2) Inspection scope — methods required by specification (UT, PAUT, MT, PT, RT), applicable code (ASME V, API 510, EN 17640), acceptance criteria. (3) Volume estimate — number of welds, square meters of vessel surface, number of components, with tolerance band. (4) Schedule — start date, daily window, total duration, weekend/night work flag. (5) Site conditions — access (scaffolded? rope? insulated?), hot work permits, confined-space, radiation considerations, security clearance time. (6) Deliverables — report format (client template? PDF? digital data export?), turnaround time, retention. (7) Certifications required — ASNT Level II/III with specific method, PCN, EN ISO 9712, client-specific qualification. (8) Pricing model — day rate vs piece-rate vs lump sum with line items. (9) Mobilization and demob — separately quoted. (10) Insurance, safety stats (TRIR, EMR), references. Vague RFPs invite contingency loading; specific RFPs invite competitive pricing." },
    { question: "What cheap NDT pitfalls should buyers avoid?", answer: "Low-bid NDT pitfalls that destroy total cost of ownership: (1) Uncalibrated or expired equipment — calibration certificates must be within 12 months for UT/PAUT instruments and within validity for reference blocks. Demand certificates with each crew. (2) Expired radiographic film — film loses sensitivity past expiration, producing under-density images that hide defects. Verify film batch numbers and expiry. (3) Couplant contamination — recycled or contaminated couplant alters UT amplitude readings; ensure fresh sealed containers. (4) Unverified technician certifications — request copy of ASNT/PCN/EN certificates, verify on issuing body's database. (5) No second-party review — single-technician interpretation has reported error rates of 8-22%; require independent Level III sign-off on interpretation. (6) Missing procedure qualification — written procedure must be reviewed and approved by client Level III or AI before fieldwork; absent procedures mean re-shoots later. (7) Bottom-of-market bidder with no QA program — fewer than 1 in 10 cheapest bidders maintain documented procedures, calibration records, and personnel qualification logs. (8) No POD (Probability of Detection) data for PAUT — vendors who can't show validation studies for their PAUT setup are guessing. True cost of cheap NDT is re-inspection, missed defects causing failures, and warranty repair work — typically 3-8x the original inspection saving." }
];

const methodPricingMatrix = [
    { method: "Ultrasonic Thickness (UT)", unit: "$/m² grid scan", low: "$0.40", high: "$0.75", notes: "Standard 100x100mm grid; dense grid 1.5-2x" },
    { method: "Phased Array (PAUT)", unit: "$/hour crew", low: "$250", high: "$450", notes: "Manual scan with encoder; AUT higher" },
    { method: "PAUT per Weld", unit: "$/joint (6\" pipe)", low: "$185", high: "$295", notes: "Scales 1.6x at 12\", 2.4x at 24\"" },
    { method: "RT-Film Conventional", unit: "$/14x17 film", low: "$35", high: "$55", notes: "Includes source, dev, interpret" },
    { method: "RT-Digital (DR)", unit: "$/exposure", low: "$45", high: "$75", notes: "Faster; zero chemistry waste" },
    { method: "RT-Computed (CR)", unit: "$/exposure", low: "$32", high: "$48", notes: "Imaging plates, no wet processing" },
    { method: "Magnetic Particle (MT)", unit: "$/hour crew", low: "$95", high: "$165", notes: "Wet fluorescent adds 10-15%" },
    { method: "Liquid Penetrant (PT)", unit: "$/hour crew", low: "$85", high: "$145", notes: "Plus consumables $90-140/kit" },
    { method: "Visual Testing (VT)", unit: "$/hour inspector", low: "$75", high: "$125", notes: "ASNT VT Level II; CWI premium" },
    { method: "TOFD", unit: "$/joint (6\" pipe)", low: "$135", high: "$210", notes: "Often paired with PAUT" },
    { method: "PAUT + TOFD Hybrid", unit: "$/joint (6\" pipe)", low: "$240", high: "$385", notes: "Standard for high-pressure pipe" },
    { method: "Eddy Current (ET)", unit: "$/hour crew", low: "$140", high: "$240", notes: "Tube inspection higher" },
    { method: "MFL (Magnetic Flux Leakage)", unit: "$/m of pipeline", low: "$8", high: "$22", notes: "In-line tool; tank floor $15-35/m²" },
    { method: "Acoustic Emission (AE)", unit: "$/vessel day", low: "$2,800", high: "$5,500", notes: "Sensor array + analyst" },
    { method: "Guided Wave UT (LRUT)", unit: "$/test location", low: "$650", high: "$1,200", notes: "30-50m range per location" }
];

const geographyModifiers = [
    { region: "USA", baseline: "1.00x", labor: "$45-85/hr L2", market: "Mature ASNT market, oil&gas concentrated Gulf Coast" },
    { region: "Canada", baseline: "0.95-1.10x", labor: "CAD $55-95/hr L2", market: "CGSB or ASNT; oil sands premium 1.15x" },
    { region: "UK", baseline: "1.05-1.20x", labor: "£35-70/hr L2", market: "PCN certification; Aberdeen offshore premium" },
    { region: "Western EU", baseline: "1.10-1.30x", labor: "€45-90/hr L2", market: "EN ISO 9712; strong unions, high social charges" },
    { region: "Saudi Arabia", baseline: "0.85-1.00x", labor: "SAR 130-280/hr L2", market: "Aramco-approved vendor pool; expat premium" },
    { region: "UAE", baseline: "0.90-1.05x", labor: "AED 140-300/hr L2", market: "More vendor competition than KSA" },
    { region: "Qatar/Kuwait/Oman", baseline: "0.90-1.10x", labor: "Similar to KSA", market: "QP/KOC/PDO approval pools control access" },
    { region: "India", baseline: "0.25-0.40x", labor: "₹450-1,200/hr L2", market: "ISO 9712-trained; major outsourcing hub" },
    { region: "SE Asia", baseline: "0.30-0.45x", labor: "Varies by country", market: "MY/TH/VN; Singapore at 0.75-0.95x" },
    { region: "China", baseline: "0.35-0.55x", labor: "Varies by tier city", market: "Variable QA; export-quality vendors at 0.6-0.8x" },
    { region: "Australia", baseline: "1.15-1.35x", labor: "AUD $75-140/hr L2", market: "AINDT certification; mining and offshore" },
    { region: "Brazil/LATAM", baseline: "0.45-0.70x", labor: "Varies", market: "ABENDI cert in Brazil; Petrobras approved" }
];

const pricingModels = [
    { model: "Day Rate", whenUsed: "Unknown scope, exploratory work, site walkdowns, complex troubleshooting, fitness-for-service evaluations", proCon: "Pro: simple billing, flexibility. Con: contractor has no incentive to be efficient; client carries volume risk" },
    { model: "Piece Rate (per unit)", whenUsed: "Defined scope: per joint, per film, per square meter. Best for repetitive new-construction welding or shutdown maintenance", proCon: "Pro: predictable budget, contractor incentivized for speed. Con: quality risk if rates too aggressive" },
    { model: "Unit Rate with Minimum", whenUsed: "Hybrid: daily minimum guarantee + per-unit rate above threshold. Common in turnarounds where volume is variable", proCon: "Pro: balances both parties. Con: complex contract administration" },
    { model: "Lump Sum (Fixed Price)", whenUsed: "Fully defined scope, completed engineering, low variability work. Common in pipeline construction NDT subcontracts", proCon: "Pro: total cost certainty. Con: contractor adds risk premium (typically 10-20% over piece-rate equivalent)" },
    { model: "Cost-Plus / Reimbursable", whenUsed: "Emergency response, unknown scope, RBI consulting, expert witness work", proCon: "Pro: no risk premium. Con: minimal cost discipline; client must audit timesheets" }
];

const crewCompositions = [
    { crew: "1 Level II + Truck + Standard Kit", dayCost: "$1,650-$2,400", scope: "Conventional UT thickness, MT, PT, VT — single inspector tasks" },
    { crew: "1 Level II + 1 Helper + Truck + Kit", dayCost: "$2,100-$3,000", scope: "Most field NDT work; helper assists with prep, cleanup, safety standby" },
    { crew: "1 PAUT L2 + 1 Helper + PAUT Equipment", dayCost: "$2,800-$4,400", scope: "Phased array UT inspection of welds, vessels, tank floors" },
    { crew: "RT Crew: 1 Radiographer + 1 Asst + Source", dayCost: "$2,400-$3,600", scope: "Gamma radiography with Ir-192 or Se-75; barricading takes 30-40% of shift" },
    { crew: "AUT Pipeline Crew (2 techs + tractor)", dayCost: "$6,500-$11,000", scope: "Automated PAUT pipeline crawler; 40-80 welds/day throughput" },
    { crew: "Level III Consultant Only (no equipment)", dayCost: "$1,500-$2,500", scope: "Procedure qualification, interpretation oversight, audit, expert witness" },
    { crew: "Rope Access NDT (IRATA L2 + IRATA L3)", dayCost: "$3,200-$5,400", scope: "Wind turbine, flare stack, offshore structure inspection" }
];

const hiddenCosts = [
    { category: "Report Fees", cost: "$150-$500 per report; rush 24hr +50-100%", note: "Client-format reports require additional admin time; ask if included" },
    { category: "Calibration Block Use", cost: "$50-$300/day rental; custom $1,200-$8,000", note: "Asset-specific reference blocks may need fabrication ahead of mobilization" },
    { category: "Consumables — Couplant", cost: "$25-$45/gallon; 2-5 gal/job typical", note: "High-temp couplant 3-5x standard price" },
    { category: "Consumables — Penetrant Kit", cost: "$90-$140/kit", note: "Type II visible-dye; Type I fluorescent 30-50% more" },
    { category: "Consumables — RT Film", cost: "$4-$7/sheet (14x17)", note: "Plus developer/fixer $80-$120 per 5-gal set" },
    { category: "Hazardous Waste Disposal", cost: "$150-$400/drum film+chemistry", note: "Silver-bearing fixer regulated; EU/CA stricter" },
    { category: "Source Magazine & Transport", cost: "$200-$500 setup + daily monitoring", note: "Bonded storage required for Ir-192/Co-60" },
    { category: "Safety Standby", cost: "$400-$800/day (fire/hole/bottle watch)", note: "Confined-space and hot-work jobs always" },
    { category: "Per-diem & Lodging", cost: "$150-$275/day per technician", note: "Out-of-town work; offshore higher" },
    { category: "Mobilization", cost: "$350-$1,200 regional; $3,500-$15,000 remote/offshore", note: "Round-trip; charge both ways" },
    { category: "Standby/Wait Time", cost: "Full day rate during client delays", note: "Scaffolding delays, permit waits, weather" },
    { category: "Procedure Development", cost: "$800-$3,500 per written procedure", note: "Job-specific procedures; one-time fee" }
];

const rfpChecklist = [
    { item: "Asset scope sheet", description: "Equipment list with dimensions, material, design conditions, photos, GA drawings" },
    { item: "Method and code", description: "Specific NDT method required per spec; applicable code (ASME V, API 510/570/653, EN 17640, ISO 17640)" },
    { item: "Volume estimate with tolerance", description: "Number of welds ±10%, m² of surface ±15%, number of components — uncertainty costs money" },
    { item: "Schedule and shift pattern", description: "Start/end dates, daily window, weekends, nights, holidays explicitly flagged" },
    { item: "Site access conditions", description: "Scaffolded? Rope access? Insulated (CUI removal scope)? Confined space? Hot work permits?" },
    { item: "Deliverable format", description: "Report template, digital data export, retention period, language requirement" },
    { item: "Certification requirements", description: "ASNT Level II/III with specific method, PCN, EN ISO 9712, client-specific Aramco/SABIC/ADNOC qualification" },
    { item: "Pricing model preference", description: "Day rate, piece rate, unit rate, lump sum — invite all and compare normalized" },
    { item: "Mob/demob separate line", description: "Always demand separate mob/demob pricing — bundled mob hides 10-20% margin" },
    { item: "Insurance and safety metrics", description: "Public/employer liability minimum limits, TRIR, EMR, recent incidents" }
];

const cheapPitfalls = [
    { pitfall: "Uncalibrated or out-of-cert equipment", consequence: "Invalid measurements; entire scope may require re-inspection. Demand calibration certificates within 12 months for instruments, valid period for reference blocks" },
    { pitfall: "Expired radiographic film", consequence: "Low density images miss subsurface defects; defects pass to service and fail. Verify film batch and expiry on every job" },
    { pitfall: "Contaminated or recycled couplant", consequence: "Altered UT amplitude readings; thickness measurements off by 5-15%. Demand fresh sealed couplant" },
    { pitfall: "Unverified technician certifications", consequence: "Inspector lacks training/POD; misses defects. Always request and verify certificate copies on issuing body database" },
    { pitfall: "No second-party (Level III) interpretation review", consequence: "Single-tech error rates 8-22% on complex interpretation. Mandate independent Level III sign-off" },
    { pitfall: "Missing written procedure approval", consequence: "Work performed off-procedure may need full re-inspection; insurance gaps for failures. Require client Level III/AI approval before mob" },
    { pitfall: "Bottom-of-market bidder with no QA program", consequence: "Fewer than 1 in 10 cheapest vendors maintain proper QA records. Audit procedures, cal logs, personnel files before award" },
    { pitfall: "No PAUT POD validation data", consequence: "PAUT setup not validated for defect type/size; missed defects. Require demonstration on representative reference block" }
];

export default function NDTInspectionCost2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "NDT Inspection Cost 2026: Method × Region Pricing Matrix (UT, RT, PAUT, MT, PT)",
                "description": "Complete 2026 NDT inspection pricing matrix by method and region. UT $0.50/m², RT $35-55/film, PAUT $250-450/hr. Day rates, mobilization, hidden fees, per-joint pipeline pricing.",
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
                title="NDT Inspection Cost 2026: Method × Region Pricing Matrix (UT, RT, PAUT, MT, PT)"
                description="NDT inspection cost 2026: UT $0.50/m², RT $35-55/film, PAUT $250-450/hr. Full method × region matrix. Day rates, mobilization, hidden fees. Updated May 2026."
                keywords="ndt inspection cost, ndt testing cost, ultrasonic testing cost, radiographic testing cost, PAUT cost, MT cost, PT cost, NDT day rate, NDT per joint, NDT pricing 2026"
                canonical="https://atlantisndt.com/blog/ndt-inspection-cost-2026-by-method-pricing-matrix"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Pricing Guide • Last updated May 2026 • 16 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Inspection Cost 2026: Method × Region Pricing Matrix</h1>
                        <p className="text-xl text-blue-100 mb-8">The complete 2026 reference for NDT inspection cost. Method-by-method pricing (UT, RT, PAUT, MT, PT, TOFD, MFL, ET) cross-referenced with regional cost modifiers for USA, Canada, UK, EU, Saudi Arabia, UAE, India, and SE Asia. Day rates, per-joint pricing, hidden costs, RFP guidance.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="NDT Inspection Cost 2026: Method × Region Pricing Matrix" description="2026 NDT pricing by method and region — UT, RT, PAUT, MT, PT day rates and per-joint costs." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Opening Matrix */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">2026 NDT Method Pricing Matrix (USA Baseline)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            This is the single table most NDT buyers want and most vendors will not publish. The figures below reflect 2026 USA market rates compiled from competitive bids across the Gulf Coast refining belt, mid-continent pipeline construction, and northeast offshore wind installation work. Rates are all-inclusive of standard labor, equipment, basic consumables, and interpretation — but exclude mobilization, per-diem, scaffolding access, and rush-report surcharges (covered in later sections).
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Unit</th>
                                        <th className="px-3 py-2 text-left font-semibold">Low</th>
                                        <th className="px-3 py-2 text-left font-semibold">High</th>
                                        <th className="px-3 py-2 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {methodPricingMatrix.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.method}</td>
                                            <td className="px-3 py-2 text-xs">{item.unit}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.low}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.high}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>How to use this table:</strong> Take the USA baseline rate, multiply by your regional modifier (next section), add mobilization, per-diem, and access costs. Most NDT campaigns total $4,500-$28,000 per crew-week onshore, with offshore and turnaround work commanding 1.4-2.1x premiums. For pipeline projects, use per-joint pricing in the dedicated section below.
                            </p>
                        </div>
                    </section>

                    {/* Geography Modifiers */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Regional Cost Modifiers: How NDT Pricing Changes by Geography</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            NDT pricing varies dramatically by region based on labor market, certification regime, equipment availability, and currency. The multipliers below are applied to the USA baseline matrix. Note that the spread narrows substantially for PAUT, AUT, and TOFD work because equipment cost (USD-denominated) dominates total cost.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Region</th>
                                        <th className="px-3 py-2 text-left font-semibold">vs USA Baseline</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical L2 Labor</th>
                                        <th className="px-3 py-2 text-left font-semibold">Market Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {geographyModifiers.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.region}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.baseline}</td>
                                            <td className="px-3 py-2 text-xs">{item.labor}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.market}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Cross-border NDT economics:</strong> India and Vietnam have become major outsourcing hubs for ASME Code stamped pressure-vessel fabrication NDT, where film and procedure development can be shipped offshore. However, in-service field NDT cannot be offshored — the technician must be onsite. For owner-operators, this means turnaround and inspection budgets remain regional, while fabrication-shop NDT is increasingly globalized.
                            </p>
                        </div>
                    </section>

                    {/* Day Rate vs Piece Rate */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Day Rate vs Piece Rate vs Unit Rate: Which to Use</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            NDT contractors quote on three primary pricing models, and choosing the right one for your scope can change total cost by 20-40%. The wrong model transfers risk to whichever party is least equipped to manage it.
                        </p>

                        <div className="space-y-4 mb-8">
                            {pricingModels.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="font-bold text-lg mb-2 text-blue-900">{item.model}</h4>
                                    <p className="text-slate-700 mb-2"><strong>When to use:</strong> {item.whenUsed}</p>
                                    <p className="text-slate-600 text-sm">{item.proCon}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Premiums */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Mobilization, Callout, and Premium Charges</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Beyond the base rate, every NDT job carries a stack of conditional charges. These are the line items where margins live — and where careful buyers can negotiate substantial savings.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Mobilization Fees</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Regional (under 100 miles): $350-$750</li>
                                    <li>Long-haul (100-500 miles): $750-$1,800</li>
                                    <li>Remote site/offshore helicopter: $3,500-$15,000</li>
                                    <li>International with visas/permits: $5,000-$25,000+</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Callout Fees (Emergency)</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>4-hour minimum bill at 1.5x day rate</li>
                                    <li>After-hours callout: $850-$1,800 plus rate</li>
                                    <li>Holiday callout: 2.0-3.0x day rate, 4hr min</li>
                                    <li>Same-day mob: $500-$1,500 premium</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Overtime & Shift Premiums</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Hours 9-12: 1.5x base</li>
                                    <li>Hours 13+: 2.0x base</li>
                                    <li>Weekends: 2.0x base</li>
                                    <li>Holidays: 2.5-3.0x base</li>
                                    <li>Night shift: +20-35%</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Environmental Premiums</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Hot work/confined space: +15-25%</li>
                                    <li>Offshore uplift: +60-110%</li>
                                    <li>Sour service (H2S): +15-25%</li>
                                    <li>Cold weather (sub -10C): +10-20%</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Per-Joint Pipeline */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Per-Joint Pipeline Weld Inspection Pricing</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Pipeline projects are priced per joint, and the choice between RT-film, RT-digital, PAUT, TOFD, and hybrid PAUT+TOFD affects both unit cost and total schedule. Below is the 2026 USA market for 6-inch carbon steel weld inspection, all-inclusive.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">6" Weld Cost</th>
                                        <th className="px-3 py-2 text-left font-semibold">Throughput</th>
                                        <th className="px-3 py-2 text-left font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">RT-Film (Ir-192)</td><td className="px-3 py-2 font-semibold text-blue-700">$145-$215</td><td className="px-3 py-2 text-xs">15-25 welds/day</td><td className="px-3 py-2 text-xs">Small jobs under 100 welds; remote sites</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">RT-Digital (DR)</td><td className="px-3 py-2 font-semibold text-blue-700">$165-$245</td><td className="px-3 py-2 text-xs">25-40 welds/day</td><td className="px-3 py-2 text-xs">Where instant review beats film cost</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">PAUT (manual encoder)</td><td className="px-3 py-2 font-semibold text-blue-700">$185-$295</td><td className="px-3 py-2 text-xs">12-20 welds/day</td><td className="px-3 py-2 text-xs">100-500 weld scope; radiation-restricted sites</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">TOFD only</td><td className="px-3 py-2 font-semibold text-blue-700">$135-$210</td><td className="px-3 py-2 text-xs">15-25 welds/day</td><td className="px-3 py-2 text-xs">Through-wall sizing; often paired</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">PAUT + TOFD Hybrid</td><td className="px-3 py-2 font-semibold text-blue-700">$240-$385</td><td className="px-3 py-2 text-xs">10-18 welds/day</td><td className="px-3 py-2 text-xs">High-pressure pipelines; default in EU</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">Automated AUT (crawler)</td><td className="px-3 py-2 font-semibold text-blue-700">$95-$165</td><td className="px-3 py-2 text-xs">40-80 welds/day</td><td className="px-3 py-2 text-xs">Mainline new construction, 500+ welds</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                            <p className="text-blue-900 mb-2">
                                <strong>Diameter scaling:</strong> Multiply 6" base price by approximately 1.6x for 12", 2.4x for 24", 3.1x for 36", and 3.8x for 48" pipeline welds. Above 48" diameter, custom quotes apply.
                            </p>
                            <p className="text-blue-900">
                                <strong>Decision rule:</strong> Under 100 welds total, RT-film is cheapest. 100-500 welds, PAUT manual wins on schedule and avoids radiation safety overhead. Over 500 welds on a mainline pipeline, automated AUT cuts per-joint cost in half and finishes weeks earlier.
                            </p>
                        </div>
                    </section>

                    {/* Crew Composition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Field NDT Crew Composition and Daily Cost</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Understanding crew composition helps you sanity-check vendor quotes. A single technician day rate is rarely competitive once you factor that most jobs legally require a helper for safety standby, equipment setup, and radiation barricading.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Crew Configuration</th>
                                        <th className="px-3 py-2 text-left font-semibold">Day Cost (USA)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Scope</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {crewCompositions.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium text-sm">{item.crew}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.dayCost}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.scope}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>The standard equation:</strong> 1 Level II technician + 1 helper + truck + standard equipment package = $1,650-$2,400/day baseline in the USA. Add mobilization on day one, per-diem if out-of-town, and any premium for shift, environment, or specialty equipment. This is the unit economics most refineries use for shutdown planning.
                            </p>
                        </div>
                    </section>

                    {/* Hidden Costs */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Hidden NDT Costs Buyers Always Miss</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            These cost categories are technically legitimate but routinely omitted from initial quotes, surfacing as change orders or invoicing surprises. Bake them into your budget upfront.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Category</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical Cost</th>
                                        <th className="px-3 py-2 text-left font-semibold">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hiddenCosts.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-sm">{item.category}</td>
                                            <td className="px-3 py-2 text-xs text-blue-700 font-semibold">{item.cost}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* RT Consumables Banned */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">RT Consumables Restrictions and Digital Alternatives</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Several jurisdictions have heavily restricted silver-bearing radiographic film and associated wet chemistry. If your operation spans multiple regions, the cost of the same RT scope can vary by 40-60% based on consumables availability alone.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">EU REACH and Wet Chemistry Restrictions</h4>
                                <p className="text-slate-700">EU REACH regulations restrict certain processing chemistry components. Netherlands and Germany require specialized hazardous-waste handling that effectively triples film lab disposal cost. This pushes EU RT-film pricing 25-35% above USA equivalent.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">Singapore, Hong Kong, Australia</h4>
                                <p className="text-slate-700">Closed-loop chemistry recycling mandatory. Field labs are rare; most operators ship film overseas for processing or pivot to CR/DR. Effective per-shot cost premium is 20-40% over baseline.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">California (CARB) and Several US States</h4>
                                <p className="text-slate-700">Restrict open-tray developing. Modern field RT in California is largely CR or DR. Conventional film still permitted but processing infrastructure is shrinking.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">Saudi Arabia and UAE</h4>
                                <p className="text-slate-700">Source-import restrictions and security clearances for Ir-192/Co-60 transport make field radiography 25-40% more expensive than USA. Many operators use PAUT as primary method with RT as backup.</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>The digital transition economics:</strong> CR (Computed Radiography) typically costs $32-$48 per exposure, DR (Direct Digital Radiography) $45-$75 per exposure. Both eliminate film stock, developer/fixer chemistry, hazardous-waste disposal, and lengthy processing time. For repeat work at the same site, DR pays back capital cost in 600-1,200 exposures. For PAUT as RT replacement, weld-by-weld pricing often matches RT while eliminating radiation hazard entirely — increasingly the default for high-pressure pipeline construction.
                            </p>
                        </div>
                    </section>

                    {/* RFP Structure */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How to RFP NDT Services for Best Pricing</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            A well-structured RFP reduces quoted prices by 15-30% by eliminating contractor risk premiums. Vague specs invite contingency loading; precise specs invite competitive pricing. Include the following in every NDT RFP.
                        </p>

                        <div className="space-y-3 mb-6">
                            {rfpChecklist.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="font-bold mb-1 text-blue-900">{idx + 1}. {item.item}</h4>
                                    <p className="text-slate-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>RFP normalization tip:</strong> Always invite all three pricing models (day rate, piece rate, lump sum) and compare normalized. Vendors who can quote all three credibly are usually larger, better-managed, and more competitive. Vendors who refuse anything but day rate are usually carrying volume risk you can take instead.
                            </p>
                        </div>
                    </section>

                    {/* Cheap Pitfalls */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Cheap NDT Pitfalls: Cost vs Quality</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The lowest bidder is rarely the cheapest outcome. Re-inspection, missed defects causing in-service failures, and warranty repair work typically costs 3-8x the original inspection saving. These are the eight quality risks that destroy NDT total cost of ownership.
                        </p>

                        <div className="space-y-4">
                            {cheapPitfalls.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                    <h4 className="font-bold text-lg mb-2 text-red-900">{idx + 1}. {item.pitfall}</h4>
                                    <p className="text-slate-600 text-sm">{item.consequence}</p>
                                </div>
                            ))}
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
                    <section className="bg-gradient-to-r from-blue-700 to-slate-800 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need NDT Inspection Quotes You Can Compare?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Post your NDT scope on NDT Connect and receive normalized quotes from vetted service providers within hours. Compare by method, region, certification, and pricing model — all on a single dashboard. Free for buyers.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/ndt-connect" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">Get NDT Quotes (Free)</Link>
                            <Link to="/consulting" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Inspection Consulting</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">MFL Pipeline Inspection Cost</h3>
                                <p className="text-slate-600 text-sm mt-2">Vendors, pricing, and when to use MFL vs UT</p>
                            </Link>
                            <Link to="/blog/rt-vs-ut-complete-comparison" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">RT vs UT Complete Comparison</h3>
                                <p className="text-slate-600 text-sm mt-2">Radiographic vs ultrasonic — full method comparison</p>
                            </Link>
                            <Link to="/blog/phased-array-ultrasonic-testing-paut-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">PAUT Complete Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Phased Array UT — equipment, procedure, applications</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
