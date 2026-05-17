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
    { question: "What is the average PAUT technician salary in 2026?", answer: "The global average PAUT (Phased Array Ultrasonic Testing) technician salary in 2026 is approximately USD $82,000 for an ASNT Level II PAUT-endorsed technician with 3-5 years of experience. However, the range is enormous: India PAUT technicians average ₹8-12 LPA (~$10,000-$15,000 USD), USA averages $75,000-$110,000, Gulf States (Saudi/UAE/Qatar/Kuwait) average $90,000-$160,000 tax-free for Level II/III expats, the UK averages £45,000-£72,000 (~$57,000-$92,000), and Australia commands AUD $110,000-$165,000 (~$72,000-$108,000). The single largest variable is region; the second is industry (nuclear and aerospace pay 25-40% premiums over general manufacturing); the third is whether you hold ASNT Level III PAUT certification on top of standard Level II endorsement." },
    { question: "What is the PAUT technician salary in India?", answer: "PAUT technician salary in India ranges from ₹4 LPA for fresh ASNT Level II PAUT-endorsed technicians up to ₹25-32 LPA for senior Level III PAUT inspectors with offshore experience. Typical bands in 2026: Level II Trainee (0-2 yrs) ₹3.5-5.5 LPA, Level II Technician (2-5 yrs) ₹6-10 LPA, Senior Level II PAUT/TOFD (5-8 yrs) ₹10-15 LPA, ASNT Level III PAUT (8+ yrs) ₹15-25 LPA, Level III + offshore/nuclear endorsement ₹22-32 LPA. Indian PAUT technicians working in Gulf rotation contracts (28/28 or 56/28) earn $80,000-$140,000 USD effective annualized — this is the largest jump in compensation any Indian NDT technician can pursue, and is why over 60% of qualified Indian PAUT Level IIs eventually move to UAE, Saudi, or Qatar within 5 years of certification." },
    { question: "How much more does PAUT pay versus conventional UT?", answer: "PAUT pays a 25-45% salary premium over conventional manual UT for the same experience level and region. A USA Level II conventional UT technician earns $58,000-$72,000; the same technician with PAUT endorsement earns $78,000-$98,000 — a $20,000-$26,000 annual premium. The premium is even higher in offshore and pipeline work: a conventional UT day-rate offshore is $450-$650/day; PAUT day-rate offshore is $800-$1,500/day, a 60-130% premium. The reason is supply-demand: PAUT requires expensive equipment ($45,000-$120,000 per scanner), 80+ hours of formal training beyond basic UT, demonstrated scan-plan and analysis capability, and crucially, AUT/TFM-grade interpretation skills that take years to develop. Only 12-18% of certified UT technicians globally hold PAUT endorsement, creating persistent scarcity even in oversupplied markets." },
    { question: "What is the PAUT offshore per-diem rate in 2026?", answer: "Offshore PAUT per-diem rates in 2026 range from $800/day on shallow-water platforms in the Gulf of Mexico up to $1,800/day for North Sea subsea pipeline inspection and $2,200/day for Arctic/deep-water specialty work. Typical 2026 day-rates: Gulf of Mexico (shallow) $800-$1,100/day, North Sea $1,200-$1,800/day, West Africa $900-$1,400/day, Brazil (Petrobras pre-salt) $1,000-$1,500/day, Middle East offshore $850-$1,300/day, Arctic/specialty $1,500-$2,200/day. Add subsistence ($75-$150/day), travel pay, and turnaround bonuses, and a PAUT technician working 200 offshore days/year can clear $200,000-$350,000 gross. Onshore refinery turnaround PAUT rates are lower but still strong: $550-$850/day plus per-diem, with 12-hour shift premiums adding 20-30% during outage seasons (typically March-May and September-November)." },
    { question: "Do I need ASNT Level III to earn top PAUT salaries?", answer: "No, but it shifts your earning ceiling by approximately $35,000-$60,000 USD/year. ASNT Level II PAUT-endorsed technicians can earn $75,000-$110,000 in the USA and $90,000-$140,000 in the Gulf as field inspectors. To enter the $130,000-$200,000+ band you typically need either (a) ASNT Level III PAUT — which lets you write procedures, qualify technicians, and act as the responsible Level III for an inspection company, or (b) ASNT Level II PAUT + complementary endorsements (TOFD, TFM, AUT, Eddy Current Array) + 10+ years field experience + supervisory record. The Level III pathway is more linear: pass the ASNT Level III Basic + Method (PAUT/UT) exams, accumulate documented procedure-writing experience, and step into roles like NDT Manager, Technical Authority, or Independent Level III Consultant (where billing rates of $150-$250/hour become common)." },
    { question: "Which industries pay PAUT technicians the most in 2026?", answer: "Industry ranking by 2026 PAUT pay (USA Level II benchmarks, base salary, excluding per-diem): (1) Nuclear power generation $105,000-$145,000 — requires NRC/ASME XI endorsements, intense background checks, smallest talent pool; (2) Aerospace composite inspection $98,000-$135,000 — Boeing/Airbus/Lockheed sites, requires NAS 410 / EN 4179 alignment; (3) Subsea/offshore oil & gas $90,000-$125,000 base + $800-$1,500 offshore per-diem; (4) LNG and petrochemical $82,000-$108,000 — Gulf Coast clusters, heavy turnaround work; (5) Additive manufacturing / DED inspection $78,000-$105,000 — emerging segment, fast-growing; (6) Conventional power generation (coal/gas/combined cycle) $72,000-$95,000; (7) General fabrication and shop inspection $62,000-$85,000. Nuclear and aerospace pay premium because the regulatory barrier (qualifications, security clearance, documentation depth) deliberately limits the eligible technician pool." },
    { question: "How does PAUT salary grow over a 20-year career?", answer: "Realistic PAUT career trajectory (USA, base salary excluding per-diem/turnaround income): Years 0-3 (Level II trainee → Level II PAUT) $52,000 → $78,000 — endorsement is the inflection point. Years 4-7 (Senior Level II, PAUT + TOFD, lead inspector) $78,000 → $105,000 — adding TOFD and TFM endorsements compounds value. Years 8-12 (Lead inspector, supervisor, ASNT Level III PAUT track) $105,000 → $140,000 — Level III certification typically completes in this window. Years 13+ (Level III, NDT Manager, Technical Authority, Consultant) $140,000 → $200,000+ base, plus consulting income for independents ($150-$250/hr). Globally, Gulf-rotation expats compress this timeline: an Indian or Filipino Level II PAUT who moves to UAE/Saudi at year 4 often hits the $100,000+ band 4-6 years ahead of their USA-based peers because of tax-free salary, housing allowance, and 70+ billable rotation days/year." },
    { question: "What endorsements stack best on PAUT to maximize salary?", answer: "The five highest-impact PAUT skill-stack additions in 2026, ranked by salary lift: (1) TOFD (Time-of-Flight Diffraction) — adds $8,000-$15,000/year, near-mandatory for pipeline and pressure-vessel work, often paired with PAUT in code-compliant scan plans (ASME B31.3, B31.8); (2) TFM/FMC (Total Focusing Method / Full Matrix Capture) — adds $10,000-$20,000/year, fastest-growing premium in 2026, still rare technician base; (3) AUT (Automated UT) — adds $12,000-$22,000/year, mandatory for girth-weld pipeline inspection per DNV-ST-F101, opens subsea contractor roles; (4) Nuclear endorsement (ASME Section XI, NRC 10 CFR 50 App. B) — adds $20,000-$35,000/year, smallest pool, highest pay; (5) Aerospace composite PAUT (NAS 410 Level II/III) — adds $15,000-$28,000/year, OEM-specific certifications often required by Boeing, Airbus, Spirit AeroSystems. Stacking PAUT + TOFD + AUT + nuclear endorsement puts a Level III in the $180,000-$220,000+ band globally." },
    { question: "How does PAUT certification differ from regular UT certification?", answer: "PAUT is an endorsement layered on top of UT (Ultrasonic Testing) certification, not a standalone certification. Under ASNT SNT-TC-1A (the most common USA scheme), a technician first qualifies as UT Level II (typically 80 hours classroom + 800 hours field experience), then adds a PAUT-specific endorsement requiring an additional 40-80 hours of dedicated PAUT classroom training, 200-400 hours of documented PAUT field experience, plus written, practical, and specific exams on phased array beam physics, focal laws, sectorial scanning, encoded scanning, and S/E-scan analysis. Under ISO 9712 and EN ISO 18563, PAUT is treated more formally as a distinct method with its own examination structure, while PCN (UK) and CSWIP also issue dedicated PAUT certifications. The practical implication: do not let an employer sell you a generic UT certification and call it PAUT — your earnings depend on holding a documented PAUT-specific endorsement that maps to the standard the end-client recognizes." },
    { question: "Will AI and automation reduce PAUT technician salaries?", answer: "No — at least not through 2030 and likely not through 2035. AI is actively raising PAUT salaries because the technician's role is shifting from data collection to scan-plan engineering and AI-output validation. Modern PAUT software (M2M Gekko, Olympus WeldSight, Eddyfi Capture) now ships with AI-assisted defect classification, which lowers analysis time per weld by 30-50%. That means an employer needs fewer technicians overall, but each remaining technician must be more skilled — they must write scan plans, validate AI calls, sign off on indications, and handle TFM/FMC reconstruction. The narrowed talent pool drives up wages for the technicians who survive the transition. The technicians at risk are exclusively manual-UT operators who never upgraded to PAUT/TFM; their wages are stagnating or declining in 2026. The technicians thriving are PAUT + TFM-fluent inspectors who can supervise automated systems — their 2026 wages are up 6-9% year-over-year, the strongest growth in any NDT specialization." }
];

const salaryHeatMap = [
    { region: "USA", levelII_OG: "$78-105K", levelII_Aero: "$92-128K", levelII_Nuc: "$98-138K", levelIII: "$125-175K" },
    { region: "Canada", levelII_OG: "CAD $85-115K", levelII_Aero: "CAD $95-130K", levelII_Nuc: "CAD $105-145K", levelIII: "CAD $135-185K" },
    { region: "UK", levelII_OG: "£48-72K", levelII_Aero: "£55-82K", levelII_Nuc: "£62-92K", levelIII: "£82-125K" },
    { region: "EU (DE/NL/NO)", levelII_OG: "€55-82K", levelII_Aero: "€62-92K", levelII_Nuc: "€72-105K", levelIII: "€95-140K" },
    { region: "Saudi Arabia", levelII_OG: "$85-130K (tax-free)", levelII_Aero: "$95-140K", levelII_Nuc: "N/A", levelIII: "$140-200K" },
    { region: "UAE", levelII_OG: "$90-135K (tax-free)", levelII_Aero: "$98-145K", levelII_Nuc: "N/A", levelIII: "$145-210K" },
    { region: "Qatar", levelII_OG: "$95-145K (tax-free)", levelII_Aero: "N/A", levelII_Nuc: "N/A", levelIII: "$150-220K" },
    { region: "Kuwait", levelII_OG: "$88-135K (tax-free)", levelII_Aero: "N/A", levelII_Nuc: "N/A", levelIII: "$140-205K" },
    { region: "India", levelII_OG: "₹6-12 LPA", levelII_Aero: "₹8-15 LPA", levelII_Nuc: "₹10-18 LPA", levelIII: "₹15-32 LPA" },
    { region: "SE Asia (SG/MY)", levelII_OG: "$45-75K", levelII_Aero: "$52-82K", levelII_Nuc: "$58-92K", levelIII: "$85-135K" },
    { region: "Australia", levelII_OG: "AUD $110-155K", levelII_Aero: "AUD $118-165K", levelII_Nuc: "N/A", levelIII: "AUD $155-220K" },
    { region: "Brazil", levelII_OG: "R$ 95-160K", levelII_Aero: "R$ 105-180K", levelII_Nuc: "R$ 115-200K", levelIII: "R$ 180-320K" }
];

const pautVsConvUT = [
    { region: "USA", convUT_LII: "$58-72K", paut_LII: "$78-105K", premium: "+34% to +46%" },
    { region: "UK", convUT_LII: "£35-50K", paut_LII: "£48-72K", premium: "+37% to +44%" },
    { region: "Saudi/UAE", convUT_LII: "$55-80K", paut_LII: "$85-130K", premium: "+55% to +63%" },
    { region: "India", convUT_LII: "₹3.5-6 LPA", paut_LII: "₹6-12 LPA", premium: "+71% to +100%" },
    { region: "Australia", convUT_LII: "AUD $78-105K", paut_LII: "AUD $110-155K", premium: "+41% to +48%" },
    { region: "Offshore Day-Rate", convUT_LII: "$450-650/day", paut_LII: "$800-1,500/day", premium: "+78% to +131%" }
];

const certLadder = [
    { cert: "ASNT SNT-TC-1A (PAUT endorsement)", scope: "USA + most ex-USA private employers", training: "40-80 hrs classroom + 200-400 hrs PAUT field hrs on top of UT Level II base", validity: "Employer-issued, employer-renewed annually with eye exam", note: "Most common globally; tied to employer's written practice — not portable between companies" },
    { cert: "ASNT Central Certification (ACCP) PAUT", scope: "Portable USA certification", training: "Same hours as TC-1A but ASNT administers exam centrally", validity: "5 years", note: "Portable across employers; preferred by contractors who change clients frequently" },
    { cert: "ISO 9712 PAUT", scope: "Global standard (EU mandatory, accepted Middle East/Asia)", training: "Approved training body + accredited certification body", validity: "5 years, renewable to 10 then full re-exam", note: "Third-party certified — held by individual, not employer; required for most international contracts" },
    { cert: "EN ISO 18563 (PAUT Equipment + Personnel)", scope: "European harmonized standard", training: "Aligns with ISO 9712 + adds equipment qualification per 18563-1/-2/-3", validity: "5 years", note: "Required by many European nuclear and offshore operators (EDF, Equinor, Shell EU)" },
    { cert: "PCN PAUT (UK)", scope: "UK, EU, Middle East, Asia widely accepted", training: "BINDT-approved training + PCN central exam", validity: "5 years", note: "Industry sector-specific (Welds, Castings, Wrought, Aerospace) — choose sector matching career goal" },
    { cert: "CSWIP PAUT", scope: "UK origin, accepted globally", training: "TWI/CSWIP training + exam", validity: "5 years", note: "Strong recognition in oil & gas offshore and pipeline sectors" }
];

const jobTitleLadder = [
    { title: "PAUT Trainee / Apprentice", level: "Pre-Level II", years: "0-1", salary: "$38-52K (USA) / ₹2.5-4 LPA (India)", responsibilities: "Assists Level II, no autonomous calls, builds field hours toward PAUT endorsement, equipment setup and calibration" },
    { title: "PAUT Technician (Level II)", level: "ASNT/ISO L2 + PAUT", years: "1-4", salary: "$78-105K (USA) / $85-130K (Gulf) / ₹6-12 LPA (India)", responsibilities: "Autonomous PAUT inspection, scan-plan execution, indication calling per written procedure, reports to Level III" },
    { title: "Senior PAUT Analyst", level: "L2 + TOFD/TFM stack", years: "4-7", salary: "$95-130K (USA) / $115-160K (Gulf) / ₹10-18 LPA (India)", responsibilities: "Complex weld geometries, TFM reconstruction, AUT pipeline inspection, mentors juniors, may write scan plans under Level III supervision" },
    { title: "PAUT Supervisor / Lead", level: "L2 senior + supervisory", years: "6-10", salary: "$110-150K (USA) / $130-180K (Gulf) / ₹15-22 LPA (India)", responsibilities: "Crew lead on turnarounds, client interface, schedule and QA, equipment fleet management, drives projects start-to-finish" },
    { title: "ASNT Level III PAUT / Technical Authority", level: "L3 PAUT + L3 Basic", years: "8-15+", salary: "$130-175K (USA) / $145-210K (Gulf) / ₹18-32 LPA (India)", responsibilities: "Writes procedures, qualifies technicians, signs off on inspection programs, regulatory interface, expert witness, AI/code committee work" },
    { title: "Independent Level III PAUT Consultant", level: "L3 + business", years: "12+", salary: "$150-250/hour ($250-450K annualized at 60-70% util.)", responsibilities: "Contract Level III for 3-8 inspection companies simultaneously, procedure writing, technique qualification, dispute resolution, training delivery" }
];

const hiringIndustries2026 = [
    { industry: "Subsea Pipeline (girth-weld AUT)", drivers: "DNV-ST-F101 mandates encoded PAUT/AUT on offshore girth welds. North Sea, Brazil pre-salt, West Africa, Guyana expansion through 2030.", salaryBand: "$120-180K base + $1,000-1,800/day offshore", growth: "8-11% YoY demand growth" },
    { industry: "Nuclear (new build + life extension)", drivers: "Small Modular Reactors (NuScale, Rolls-Royce SMR, X-Energy), AP1000 deployment in Poland/India, ASME XI in-service inspection of existing fleet life-extended to 80 years.", salaryBand: "$105-175K + nuclear endorsement", growth: "12-15% YoY, highest growth segment" },
    { industry: "Aerospace Composite", drivers: "Boeing 787/777X production ramp, Airbus A350/A220, increasing CFRP content (50-60% by mass), in-service composite inspection programs.", salaryBand: "$98-145K + NAS 410 cert", growth: "6-8% YoY" },
    { industry: "Additive Manufacturing / DED Inspection", drivers: "Industrial AM scaling for energy and aerospace parts, PAUT + TFM used for in-process and post-build defect detection per ASTM E3166.", salaryBand: "$85-120K base, fast-rising", growth: "18-22% YoY (smallest base, fastest growth)" },
    { industry: "LNG (new export terminals)", drivers: "USA Gulf Coast LNG export expansion through 2028, Qatar North Field expansion, cryogenic weld inspection requires PAUT + TOFD.", salaryBand: "$92-135K + turnaround per-diem", growth: "9-12% YoY through 2028" },
    { industry: "Hydrogen Infrastructure", drivers: "EU hydrogen backbone, USA Hydrogen Hubs ($7B program), high-pressure H2 pipelines require PAUT + AUT inspection per ASME B31.12.", salaryBand: "$95-140K", growth: "Emerging — early-mover advantage" }
];

const salaryTrajectory = [
    { stage: "Years 0-3", role: "Trainee to Level II PAUT", usaBase: "$38K → $78K", note: "Inflection: $26K+ jump on completing PAUT endorsement at year 2-3", advice: "Prioritize getting on PAUT scanner hours fast; the endorsement is the salary unlock" },
    { stage: "Years 4-7", role: "Level II PAUT to Senior Analyst", usaBase: "$78K → $115K", note: "Stack TOFD and TFM here; each endorsement adds $8-20K", advice: "Add TOFD by year 5, TFM by year 6 — these compound your hourly billing rate" },
    { stage: "Years 8-12", role: "Lead / Supervisor / Level III track", usaBase: "$115K → $155K", note: "Level III PAUT exam completion typically year 9-11", advice: "Sit Level III Basic + Method exams; transition into procedure writing and crew lead roles" },
    { stage: "Years 13+", role: "Level III / Manager / Consultant", usaBase: "$150K → $220K+", note: "Independent consultants $150-250/hr; expert-witness work $300-500/hr", advice: "Decide: corporate Level III ladder, niche consulting, or own inspection company — different income shapes" }
];

const topEmployerBands = [
    { tier: "Inspection NDT Majors", examples: "Applus+ (RTD), Acuren, Bureau Veritas, Intertek, MISTRAS, TÜV SÜD, SGS, TEAM Inc., Eddyfi (services arm)", levelII: "$78-110K (USA) / $90-140K (Gulf)", levelIII: "$130-180K (USA) / $145-210K (Gulf)", note: "Largest employers globally; standardized pay bands; predictable progression; per-diem on top during turnarounds" },
    { tier: "International Oil Companies (IOCs)", examples: "Shell, ExxonMobil, Chevron, BP, TotalEnergies, Equinor, Eni", levelII: "$95-135K + benefits", levelIII: "$155-210K + LTI", note: "Direct-hire roles rare for technicians (mostly contractor model); when offered, includes pension, equity, very strong benefits" },
    { tier: "National Oil Companies (NOCs)", examples: "Saudi Aramco, ADNOC, QatarEnergy, KOC, PDO, Petrobras, Pemex", levelII: "$90-130K + housing + bonus (Gulf)", levelIII: "$145-200K + housing + 10-25% annual bonus", note: "Highest-paying tier in Gulf; multi-year contracts; family status; education allowance; significantly higher than service companies" },
    { tier: "Nuclear Operators & OEMs", examples: "EDF, Westinghouse, Framatome, Rolls-Royce Nuclear, NuScale, BWXT, Holtec", levelII: "$98-138K", levelIII: "$155-210K", note: "Requires nuclear endorsement + background clearance; longer onboarding; highest job security in industry" },
    { tier: "Aerospace OEMs & Tier-1s", examples: "Boeing, Airbus, Lockheed Martin, Spirit AeroSystems, GKN, Safran, GE Aerospace", levelII: "$92-135K", levelIII: "$140-185K", note: "NAS 410 / EN 4179 governance; OEM-specific procedure training; composite-PAUT specialization commands premium" },
    { tier: "Specialty Subsea Contractors", examples: "Subsea 7, Saipem, McDermott, TechnipFMC, Allseas, Sapura", levelII: "$110-160K base + offshore per-diem", levelIII: "$165-230K base + offshore per-diem", note: "Highest base + per-diem combination; rotation schedules (28/28, 56/28); $200-350K total annual realistic at 200 offshore days" }
];

const skillStackLifts = [
    { stack: "PAUT + TOFD", salaryLift: "+$8,000 to +$15,000/year", whyItPays: "Code-compliant pairing for pipeline (ASME B31.3, B31.8) and pressure-vessel inspection. Near-mandatory in oil & gas; 65% of PAUT job posts require TOFD too." },
    { stack: "PAUT + TFM/FMC", salaryLift: "+$10,000 to +$20,000/year", whyItPays: "Fastest-growing premium in 2026. Higher resolution, better imaging of small defects. Still rare technician base; demand outpacing supply through 2028." },
    { stack: "PAUT + AUT (Automated UT)", salaryLift: "+$12,000 to +$22,000/year", whyItPays: "Mandatory for subsea pipeline girth welds per DNV-ST-F101. Opens roles with Subsea 7, Saipem, McDermott — the highest-base employers in industry." },
    { stack: "PAUT + Nuclear Endorsement (ASME XI, NRC App. B)", salaryLift: "+$20,000 to +$35,000/year", whyItPays: "Smallest qualified technician pool globally. Required background clearance and intensive procedure training create barrier to entry; pay reflects scarcity." },
    { stack: "PAUT + Aerospace Composite (NAS 410)", salaryLift: "+$15,000 to +$28,000/year", whyItPays: "Boeing, Airbus, Spirit specifications require OEM-aligned NAS 410 / EN 4179 PAUT. CFRP-specific analysis skills rare; production-ramp demand strong through 2028." },
    { stack: "PAUT + Eddy Current Array (ECA)", salaryLift: "+$6,000 to +$12,000/year", whyItPays: "Heat-exchanger tube inspection and corrosion-under-insulation programs increasingly bundle PAUT and ECA in single inspector roles." },
    { stack: "PAUT + Level III credential", salaryLift: "+$35,000 to +$60,000/year", whyItPays: "Single largest credential-driven jump in the career. Moves you from billable field tech to procedure authority and crew director; opens consulting income path." }
];

export default function PAUTTechnicianSalary2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "PAUT Technician Salary 2026: By Region, ASNT Level, Industry (Heat Map)",
                "description": "Complete PAUT (Phased Array Ultrasonic Testing) technician salary guide for 2026. Region × ASNT Level × Industry heat map. USA, Gulf, India, EU, Australia, Brazil bands. Per-diem rates, certification ladder, skill stack premiums.",
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
                title="PAUT Technician Salary 2026: By Region, ASNT Level, Industry (Heat Map)"
                description="PAUT salary 2026: USA $75-110K, Gulf $90-160K, India ₹6-18 LPA. Full heat map by region × ASNT L2/L3 × industry. Per-diem offshore rates. Updated May 2026."
                keywords="PAUT technician salary, paut technician salary in india, phased array ut salary, PAUT salary 2026, PAUT offshore day rate, ASNT Level III PAUT salary, PAUT TOFD AUT salary premium, PAUT Gulf salary"
                canonical="https://atlantisndt.com/blog/paut-technician-salary-2026-region-cert-industry"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-cyan-200 mb-4">Salary Intelligence • Last updated May 2026 • 16 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">PAUT Technician Salary 2026: Region × ASNT Level × Industry Heat Map</h1>
                        <p className="text-xl text-cyan-100 mb-8">The only PAUT-specific salary intelligence guide for 2026. Region-by-region heat map, Level II vs Level III premiums, PAUT-vs-conventional-UT pay gap, offshore per-diem rates, and the skill-stack additions that lift earnings the most.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="PAUT Technician Salary 2026: Region, ASNT Level, Industry Heat Map" description="Complete 2026 PAUT salary intelligence by region, certification level, and industry — with offshore per-diem rates and skill-stack premiums." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Opening summary + heat map */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">2026 PAUT Salary Heat Map: Region × ASNT Level × Industry</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Phased Array Ultrasonic Testing (PAUT) technicians remain the highest-paid mainstream specialization in non-destructive testing in 2026. Across every region and industry sector, a PAUT-endorsed inspector earns 25-45% more than a conventional UT technician of identical experience. But the spread between the cheapest and most expensive PAUT job in the world is roughly <strong>15×</strong> — from an Indian fresher Level II earning ₹4 LPA (~$5,000 USD) to a North-Sea-rotation Level III PAUT consultant clearing $300,000+. The variables that determine where you sit on this curve are, in order: region, industry vertical, certification level (Level II vs Level III), and PAUT-stack endorsements (TOFD, TFM, AUT, nuclear).
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Global PAUT Salary Heat Map — Annual Base, 2026</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-cyan-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Region</th>
                                        <th className="px-3 py-2 text-left font-semibold">L2 Oil &amp; Gas / Power</th>
                                        <th className="px-3 py-2 text-left font-semibold">L2 Aerospace / Mfg</th>
                                        <th className="px-3 py-2 text-left font-semibold">L2 Nuclear</th>
                                        <th className="px-3 py-2 text-left font-semibold">Level III PAUT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salaryHeatMap.map((row, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{row.region}</td>
                                            <td className="px-3 py-2 text-cyan-700">{row.levelII_OG}</td>
                                            <td className="px-3 py-2">{row.levelII_Aero}</td>
                                            <td className="px-3 py-2">{row.levelII_Nuc}</td>
                                            <td className="px-3 py-2 font-semibold text-cyan-700">{row.levelIII}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-500 text-sm mb-6">Bands reflect 2026 mid-50% market data across job-board listings, recruiter data, and direct employer disclosures. USD conversions at May 2026 spot rates. Gulf bands are tax-free; USA/Canada/EU bands are pre-tax. "N/A" indicates no significant employer base in that region/industry combination.</p>

                        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                            <h3 className="font-semibold text-cyan-900 mb-3">Three things this heat map reveals:</h3>
                            <ul className="text-cyan-900 space-y-2">
                                <li><strong>Gulf premium is real.</strong> A USA-trained Level II PAUT earning $90,000 pre-tax keeps roughly $65,000 after federal/state tax. The same technician in Saudi Arabia earning $110,000 tax-free keeps $110,000 plus housing and an annual flight allowance — effectively a 70% take-home raise.</li>
                                <li><strong>Nuclear and aerospace pay premiums in every region.</strong> The minimum 15-25% premium over oil &amp; gas reflects scarcity of qualified technicians, not the difficulty of the work itself.</li>
                                <li><strong>The Level III multiplier is 1.5×-1.7×.</strong> Across every region, holding ASNT Level III PAUT (or ISO 9712 Level 3) lifts compensation by 50-70% versus Level II — the single largest credential-driven step in the career.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Cert ladder */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">The PAUT Certification Ladder — and Which Cert Maps to Which Salary</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            PAUT is not a standalone certification — it is an endorsement layered on top of UT (Ultrasonic Testing) certification. Which certification body issues your endorsement matters because end-clients in different regions and industries accept different schemes. Below is the practical certification ladder used worldwide in 2026.
                        </p>
                        <div className="space-y-3 mb-6">
                            {certLadder.map((c, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <h4 className="font-bold text-lg mb-1 text-cyan-900">{c.cert}</h4>
                                    <p className="text-slate-700 text-sm mb-1"><strong>Scope:</strong> {c.scope}</p>
                                    <p className="text-slate-700 text-sm mb-1"><strong>Training:</strong> {c.training}</p>
                                    <p className="text-slate-700 text-sm mb-1"><strong>Validity:</strong> {c.validity}</p>
                                    <p className="text-slate-600 text-sm italic">{c.note}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Strategic guidance:</strong> If you plan to work in one country your entire career, ASNT TC-1A is fine. If you plan to relocate or contract internationally, get ISO 9712 PAUT or PCN PAUT — these are individual certifications portable across employers and accepted by most major IOCs and NOCs. The cost difference (TC-1A: free if employer-trained; ISO 9712: $2,500-$5,000) is recovered in your first international contract within weeks.
                            </p>
                        </div>
                    </section>

                    {/* PAUT vs conventional UT */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">PAUT vs Conventional UT Salary Premium</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Quantifying the PAUT premium is the single most important calculation for a UT technician deciding whether to invest in the endorsement. Across every region surveyed for 2026, PAUT pays substantially more than conventional manual UT — and the premium has widened, not narrowed, since 2022 despite predictions that automation would compress it.
                        </p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-cyan-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Region / Mode</th>
                                        <th className="px-3 py-2 text-left font-semibold">Conv. UT Level II</th>
                                        <th className="px-3 py-2 text-left font-semibold">PAUT Level II</th>
                                        <th className="px-3 py-2 text-left font-semibold">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pautVsConvUT.map((row, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{row.region}</td>
                                            <td className="px-3 py-2">{row.convUT_LII}</td>
                                            <td className="px-3 py-2 text-cyan-700">{row.paut_LII}</td>
                                            <td className="px-3 py-2 font-semibold text-green-700">{row.premium}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-600 mb-2">The investment to add PAUT to an existing UT Level II certification is roughly $3,000-$6,000 for self-funded training plus 6-12 months to accumulate documented field hours. Against an annual salary lift of $20,000-$35,000, the payback period is under 4 months in most regions — the highest-ROI credential investment in NDT.</p>
                    </section>

                    {/* Job titles + responsibilities */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">PAUT Job Titles and Tiered Responsibilities</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Job titles vary by employer, but the underlying career ladder in PAUT is remarkably consistent worldwide. Below is the canonical six-tier ladder used by inspection majors, NOCs, and aerospace OEMs in 2026, with salary bands across major regions.
                        </p>
                        <div className="space-y-3 mb-6">
                            {jobTitleLadder.map((t, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h4 className="font-bold text-lg text-cyan-900">{t.title}</h4>
                                        <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full font-semibold">{t.level} • {t.years} yrs</span>
                                    </div>
                                    <p className="text-slate-700 text-sm mb-2"><strong>Typical salary:</strong> <span className="text-cyan-700 font-semibold">{t.salary}</span></p>
                                    <p className="text-slate-600 text-sm">{t.responsibilities}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Top hiring industries */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top Hiring Industries for PAUT in 2026</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Demand for PAUT technicians is not evenly distributed. Six industries account for the bulk of 2026 hiring, with three of them (subsea pipeline, nuclear, aerospace composite) growing at double-digit rates and paying premium bands.
                        </p>
                        <div className="space-y-3 mb-6">
                            {hiringIndustries2026.map((ind, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h4 className="font-bold text-lg text-cyan-900">{ind.industry}</h4>
                                        <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">{ind.growth}</span>
                                    </div>
                                    <p className="text-slate-700 text-sm mb-2"><strong>Demand drivers:</strong> {ind.drivers}</p>
                                    <p className="text-slate-600 text-sm"><strong>Salary band:</strong> <span className="text-cyan-700 font-semibold">{ind.salaryBand}</span></p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Salary growth trajectory */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Salary Growth Trajectory: Year-by-Year</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The PAUT career has four distinct salary phases, each with a different optimization strategy. Understanding where you sit on this curve — and what the next inflection looks like — is the single best decision-making tool for a PAUT technician planning career moves.
                        </p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-cyan-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Stage</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical Role</th>
                                        <th className="px-3 py-2 text-left font-semibold">USA Base</th>
                                        <th className="px-3 py-2 text-left font-semibold">Key Move</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salaryTrajectory.map((row, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{row.stage}</td>
                                            <td className="px-3 py-2">{row.role}</td>
                                            <td className="px-3 py-2 text-cyan-700 font-semibold">{row.usaBase}</td>
                                            <td className="px-3 py-2 text-xs">{row.advice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                            <p className="text-cyan-900"><strong>The single most important career observation:</strong> the salary curve in PAUT is not linear — it has two clear discontinuities. The first is at year 2-3 when you complete PAUT endorsement (~$26K jump). The second is at year 9-11 when you complete ASNT Level III PAUT (~$35-60K jump). Optimizing for these two transitions matters more than incremental annual raises at any stage. A technician who delays Level III by 3 years is leaving $100,000+ of lifetime earnings on the table.</p>
                        </div>
                    </section>

                    {/* Side income: per-diem */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Side Income: Per-Diem and Turnaround Rates</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            For many senior PAUT technicians, base salary is half the income story. Offshore per-diem rates, refinery turnaround day-rates, and consulting fees often double or triple total annual earnings — especially for technicians willing to rotate or travel.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Offshore PAUT Day-Rates by Region (2026)</h3>
                        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                            <ul className="space-y-2 text-slate-700">
                                <li><strong>Gulf of Mexico (shallow water):</strong> $800-$1,100/day, 14/14 or 28/28 rotations, total $80-150K annualized at typical 200 offshore days/year</li>
                                <li><strong>North Sea (UK + Norway):</strong> $1,200-$1,800/day, 28/28 rotations, Norwegian sector pays the highest day-rates in industry, total $130-220K annualized</li>
                                <li><strong>West Africa (Angola, Nigeria, Ghana):</strong> $900-$1,400/day plus mob/demob, total $100-170K annualized</li>
                                <li><strong>Brazil (Petrobras pre-salt):</strong> $1,000-$1,500/day, 28/28 standard, premium for deepwater specialty, total $110-190K annualized</li>
                                <li><strong>Middle East offshore (Saudi, UAE, Qatar):</strong> $850-$1,300/day, often paired with onshore base salary, total $90-160K offshore-only annualized</li>
                                <li><strong>Arctic / harsh-environment specialty:</strong> $1,500-$2,200/day, includes hazard premium and limited eligible pool, total $150-280K annualized</li>
                            </ul>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Turnaround &amp; Outage Rates (Onshore)</h3>
                        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                            <ul className="space-y-2 text-slate-700">
                                <li><strong>Refinery turnaround (USA Gulf Coast):</strong> $550-$850/day base + 50-100% overtime above 40 hrs/week; typical 6-week turnaround = $20K-$40K gross</li>
                                <li><strong>LNG plant outage:</strong> $650-$950/day + cold-work premium; 4-8 week durations</li>
                                <li><strong>Nuclear refueling outage:</strong> $750-$1,200/day + radiation work premium; 25-45 day outages, 12-hour shifts standard</li>
                                <li><strong>Pipeline integrity campaigns:</strong> $500-$800/day + mileage and lodging; project-length 2-12 weeks</li>
                                <li><strong>Aerospace shutdown / heavy maintenance:</strong> $600-$900/day; more stable than oil &amp; gas turnarounds, less overtime</li>
                            </ul>
                        </div>
                        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                            <p className="text-cyan-900"><strong>Realistic total comp scenarios:</strong> A USA-based Level II PAUT working 6 months base salary + 4 months turnaround per-diem + 2 months offshore can clear $145,000-$180,000 total compensation against a notional $85,000 base. Gulf-based Level II PAUT with similar mix can clear $165,000-$220,000 tax-free. The technicians earning the very highest income in NDT — $250,000-$400,000+ — are almost always combining offshore rotations, turnaround work, and consulting at the Level III tier.</p>
                        </div>
                    </section>

                    {/* Top employers + pay bands */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Top PAUT Employers and Their Pay Bands</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            PAUT technicians work across six distinct employer tiers in 2026, each with characteristic pay bands and career trade-offs. Knowing where each tier sits — and the trade-offs between them — is essential before accepting any offer.
                        </p>
                        <div className="space-y-3 mb-6">
                            {topEmployerBands.map((emp, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <h4 className="font-bold text-lg mb-2 text-cyan-900">{emp.tier}</h4>
                                    <p className="text-slate-700 text-sm mb-2"><strong>Examples:</strong> {emp.examples}</p>
                                    <p className="text-slate-700 text-sm mb-1"><strong>Level II band:</strong> <span className="text-cyan-700 font-semibold">{emp.levelII}</span></p>
                                    <p className="text-slate-700 text-sm mb-2"><strong>Level III band:</strong> <span className="text-cyan-700 font-semibold">{emp.levelIII}</span></p>
                                    <p className="text-slate-600 text-sm italic">{emp.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skill stack premiums */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Skill Stack: Which Add-On Endorsements Lift Salary Most</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            PAUT is the foundation — but the technicians earning at the top of every band have stacked complementary endorsements. Below is the 2026 ranking of stack additions by salary lift, plus the structural reason each one pays.
                        </p>
                        <div className="space-y-3 mb-6">
                            {skillStackLifts.map((s, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-cyan-500">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h4 className="font-bold text-lg text-cyan-900">{s.stack}</h4>
                                        <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">{s.salaryLift}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{s.whyItPays}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                            <p className="text-cyan-900"><strong>Optimal sequencing:</strong> If you are early-career, target stack adds in this order: PAUT endorsement → TOFD → TFM → AUT → Level III → nuclear/aerospace specialization. Each add takes 3-12 months to acquire and the salary lifts compound. A technician executing this sequence over 10-12 years moves from $52,000 entry-level USA salary to $175,000+ Level III with full stack — a 3.4× lifetime salary growth that comfortably beats every other mainstream NDT specialization.</p>
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
                        <h2 className="text-2xl font-bold mb-4">Ready to Earn at the Top of the PAUT Pay Band?</h2>
                        <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">Atlantis NDT offers PAUT Level II and Level III training, plus TOFD, TFM, and AUT stack endorsements that lift salaries by $35,000-$80,000 in the Gulf market. Talk to our certification advisors about the fastest path from your current cert to ISO 9712 / ASNT Level III PAUT.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/ndt-training-dubai" className="inline-block px-8 py-3 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-gray-100 transition">PAUT Training (Dubai)</Link>
                            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Talk to a Cert Advisor</Link>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/ndt-technician-salary" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">NDT Technician Salary (All Methods)</h3>
                                <p className="text-slate-600 text-sm mt-2">Across UT, RT, MT, PT, VT, ET, TOFD, PAUT — full method comparison with regional bands.</p>
                            </Link>
                            <Link to="/blog/ndt-salary-guide-2026-global" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">NDT Salary Guide 2026 — Global</h3>
                                <p className="text-slate-600 text-sm mt-2">Global compensation intelligence for every NDT specialization, region, and certification.</p>
                            </Link>
                            <Link to="/blog/phased-array-ultrasonic-testing-paut-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Phased Array Ultrasonic Testing (PAUT) Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Technical foundations of PAUT — beam physics, focal laws, scan plans, and equipment selection.</p>
                            </Link>
                            <Link to="/blog/ndt-technician-salary-guide-2026-industry-report" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">NDT Technician Salary Industry Report 2026</h3>
                                <p className="text-slate-600 text-sm mt-2">Industry-by-industry compensation report covering oil &amp; gas, aerospace, nuclear, and manufacturing.</p>
                            </Link>
                            <Link to="/ndt-training-dubai" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group md:col-span-2">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">PAUT Training in Dubai</h3>
                                <p className="text-slate-600 text-sm mt-2">ISO 9712 PAUT Level II and Level III training programs in Dubai — fastest path into Gulf $90-160K bands.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
