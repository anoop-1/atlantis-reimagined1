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
    { question: "What is the AWS CWI pass rate?", answer: "AWS does not publish official CWI pass rates, but industry estimates based on training-provider data, instructor reporting, and candidate surveys suggest: Part A (fundamentals, closed-book) ~70% first-time pass; Part B (practical hands-on) ~50-55% first-time pass; Part C (code book practical, open-book on chosen code) ~60-65% first-time pass. The combined all-three first-time pass rate is approximately 30-40%. Part B is the most common single-part failure because most candidates underestimate the time pressure of six 1.5-hour hands-on inspection scenarios involving plastic weld replicas, gauges, and a written acceptance/rejection report. Pass rates rise substantially - typically 15-25 percentage points - for candidates who attend the official AWS CWI seminar in the week leading up to the exam." },
    { question: "Which CWI part has the lowest pass rate?", answer: "Part B (Practical Application) consistently has the lowest first-time pass rate at approximately 50-55%. Part B tests hands-on inspection competency through six scenarios: visual inspection of plastic weld replicas, fillet weld measurement, groove weld evaluation, macroetch examination, and welder qualification documents. Each scenario gives candidates approximately 1.5 hours and requires both physical measurement (gauges, calipers) and written acceptance/rejection determinations against a hypothetical Book of Specifications (BOS). Candidates fail Part B primarily because: (1) time management - 1.5 hours feels short under exam stress, (2) incorrect gauge application (using the wrong fillet weld gauge for the joint geometry), (3) misreading the BOS acceptance criteria, and (4) sloppy documentation (a correct visual finding with a wrong written report still fails). Part B is the same plastic-replica format regardless of which code candidates select for Part C." },
    { question: "Does the AWS seminar increase CWI pass rates?", answer: "Yes - significantly. Industry estimates suggest the AWS CWI Seminar (the official 5-day prep course held the week before the exam) lifts first-time pass rates by approximately 20 percentage points. Candidates who self-study and take the exam cold show first-time all-three pass rates around 25-30%, while seminar attendees average 45-55%. The lift comes from three factors: (1) instructors walk candidates through the actual Part B physical setup with the same gauges used on exam day, (2) the seminar focuses heavily on the code candidates chose (D1.1, API 1104, B31.1, etc.), reducing Part C surprise, and (3) practice tests under timed conditions calibrate pacing. The seminar costs approximately $1,795-$2,295 in 2026 - a substantial expense, but the retake fee for failing any single part is approximately $375-$425, so two retakes alone cost more than the seminar. For candidates without weld inspection experience, the seminar is strongly recommended." },
    { question: "What is the CWI Part A pass rate?", answer: "Part A (Fundamentals) has an estimated first-time pass rate of approximately 70% - the highest of the three parts. Part A is a 2-hour, 150-question closed-book multiple-choice exam covering welding processes (SMAW, GMAW, GTAW, FCAW, SAW), welding metallurgy, weld discontinuities, destructive and nondestructive testing methods (UT, RT, MT, PT, VT), heat treatment, welder qualification, weld symbols, safety, and welding terminology. Candidates need 72% (108 correct) to pass. Common failure topics include welding metallurgy (HAZ behavior, carbon equivalent calculations), NDT method capabilities and limitations (especially the difference between UT and RT for volumetric vs surface flaws), and safety/health (hexavalent chromium, manganese exposure limits). Part A is the most predictable part because there's no time-pressured hands-on element - candidates who study AWS B5.1, the CWI Body of Knowledge, and take 500+ practice questions consistently pass." },
    { question: "What is the CWI Part C pass rate?", answer: "Part C (Code Book Application) has an estimated first-time pass rate of 60-65%. Part C is a 2-hour, open-book practical exam on the code the candidate selected at registration - most commonly AWS D1.1 (structural steel), AWS D1.5 (bridges), API 1104 (cross-country pipeline), ASME B31.1 (power piping), ASME B31.3 (process piping), or ASME Section IX (welder qualification). Candidates can bring and annotate their personal copy of the code. Failure causes: (1) chose a code they don't work with daily (D1.1 is the easiest for most candidates because it's the most commonly taught), (2) didn't tab the code book - searching unfamiliar code under time pressure burns the clock, (3) failed to read the entire question (Part C questions often hinge on a single clause embedded mid-paragraph), and (4) attempting B31.3 or API 1104 without process/pipeline experience. The code choice matters: D1.1 candidates pass at higher rates than B31.3 candidates." },
    { question: "Should I take the AWS seminar before the CWI exam?", answer: "For most candidates - yes. The seminar costs $1,795-$2,295 but raises pass probability by an estimated 15-25 percentage points. Compare that to retake math: if seminar lifts your pass probability from 35% to 55%, the expected retake savings alone (avoiding $375-$425 single-part retakes or full $850-$1,100 retakes) often justifies the seminar cost. Skip the seminar only if: you have 5+ years hands-on weld inspection experience, you work daily with the code you're testing on, and you can dedicate 200+ hours to structured self-study using the AWS QC1, B5.1, and your specific code book. For career-changers, recent high-school graduates, or technicians transitioning from other NDT methods, the seminar is essentially mandatory - self-study pass rates for these candidates drop into the 15-25% range." },
    { question: "What is the CWI pass rate by industry?", answer: "Pass rates correlate strongly with daily code exposure. Industry estimates by code/sector: Structural steel (D1.1) candidates - approximately 40-45% first-time all-three pass, the highest because D1.1 is the most-taught code and most fabrication shops use it daily. Bridge fabrication (D1.5) - approximately 38-42%, similar to D1.1 but with additional fatigue/CVN requirements. Pipeline (API 1104) - approximately 30-35%, lower because API 1104 has unique terminology (girth welds, line-up clamps) unfamiliar to general fabricators. Petrochemical/process piping (B31.3) - approximately 25-32%, the lowest because B31.3 references multiple ASME sections, has complex impact testing rules, and Severe Cyclic Conditions clauses trip up first-timers. Power piping (B31.1) - approximately 32-38%. Candidates working in a code's primary industry (e.g., a bridge fabricator testing on D1.5) pass at noticeably higher rates than candidates choosing a code they only encounter occasionally." },
    { question: "How long should I study for the CWI exam?", answer: "Recommended preparation time depends on baseline experience. Welder/welding-inspector with 5+ years field experience: 80-120 hours over 6-8 weeks is typically sufficient, with focus on Part C code-book tabbing. NDT technician transitioning to CWI (familiar with codes but limited welding background): 150-200 hours over 2-3 months, with heavy emphasis on Part A welding metallurgy and processes. Career-changer with no welding background: 250-350 hours over 4-6 months, ideally combined with the AWS seminar. Recommended schedule: weeks 1-4 study AWS B5.1 and CWI Body of Knowledge (Part A foundation); weeks 5-6 tab your code book and work practice problems on the actual code edition you'll test on; weeks 7-8 practice Part B with plastic replicas and fillet weld gauges (rent or borrow from a local AWS chapter if possible); week 9 attend the AWS seminar; week 10 take the exam. Cramming the weekend before rarely works - Part B in particular requires muscle memory with gauges that only develops through repetition." },
    { question: "What happens if I fail the CWI exam?", answer: "Failing the CWI exam (any part below 72%) does not end your certification path - it triggers a retake window. AWS retake policy as of 2026: candidates have 1 year from the original exam date to retake failed parts. During that year, candidates can retake any failed part(s) without retaking parts they passed. After 1 year, the entire exam (all three parts) must be retaken from scratch, regardless of which parts were previously passed. Retake fees: single part ~$375-$425, two parts ~$575-$650, all three ~$850-$1,100. Tactically: schedule the retake within 60-90 days of the original exam while material is fresh; focus study time on the specific part(s) failed; if you failed Part B, get hands-on with plastic weld replicas and fillet weld gauges - reading more about weld inspection won't help, only practice will; if you failed Part C, retab your code book and consider switching to D1.1 if you originally chose a more difficult code (allowed at the discretion of AWS - check with your ATF). Most candidates who retake within 90 days pass on the second attempt." }
];

const passRateByPart = [
    { part: "Part A - Fundamentals", firstTime: "~70%", overall: "~85%", failure: "Welding metallurgy, NDT method limits, safety/health exposure limits", retake: "$375-$425" },
    { part: "Part B - Practical", firstTime: "~50-55%", overall: "~75%", failure: "Time pressure (1.5 hr per scenario), wrong gauge selection, sloppy written reports", retake: "$375-$425" },
    { part: "Part C - Code Book", firstTime: "~60-65%", overall: "~80%", failure: "Untabbed code book, chose unfamiliar code (B31.3 without piping experience)", retake: "$375-$425" },
    { part: "All Three Combined", firstTime: "~30-40%", overall: "~65-70%", failure: "Cumulative probability - failing any one part fails the attempt", retake: "$850-$1,100 (full retest)" }
];

const partBScenarios = [
    { scenario: "Visual Inspection - Plastic Weld Replicas", time: "~1.5 hours", focus: "Identify discontinuities (porosity, undercut, overlap, incomplete fusion) on molded replicas; document on inspection form" },
    { scenario: "Fillet Weld Measurement", time: "~1.5 hours", focus: "Apply fillet weld gauges (Cambridge, V-WAC, bridge cam) to measure leg length, throat, convexity; check acceptance against BOS" },
    { scenario: "Groove Weld Evaluation", time: "~1.5 hours", focus: "Measure reinforcement, undercut depth, mismatch; evaluate against BOS acceptance criteria" },
    { scenario: "Macroetch Examination", time: "~1.5 hours", focus: "Evaluate macroetch cross-sections for fusion, penetration, internal discontinuities" },
    { scenario: "Welder Qualification Documentation", time: "~1.5 hours", focus: "Review WPS/PQR/WPQ paperwork for compliance, identify documentation errors" },
    { scenario: "Mechanical/Visual Combined Scenarios", time: "~1.5 hours", focus: "Multi-step inspection requiring measurement plus written accept/reject report" }
];

const codeChoiceImpact = [
    { code: "AWS D1.1 (Structural Steel)", difficulty: "Easiest", passRate: "~62-68% Part C", reason: "Most-taught code, used in seminar examples, broad fabrication exposure" },
    { code: "AWS D1.5 (Bridge Welding)", difficulty: "Moderate", passRate: "~58-63% Part C", reason: "Similar to D1.1 but additional fatigue, CVN, and Fracture Control Plan requirements" },
    { code: "API 1104 (Pipeline)", difficulty: "Moderate-Hard", passRate: "~55-60% Part C", reason: "Unique terminology (girth welds, line-up clamps); requires pipeline field experience" },
    { code: "ASME B31.1 (Power Piping)", difficulty: "Moderate-Hard", passRate: "~55-60% Part C", reason: "References ASME Section IX; impact testing rules trip up first-timers" },
    { code: "ASME B31.3 (Process Piping)", difficulty: "Hardest", passRate: "~48-55% Part C", reason: "Multiple ASME cross-references, Severe Cyclic Conditions, complex material categories" },
    { code: "ASME Section IX (Welder Qualification)", difficulty: "Moderate", passRate: "~58-62% Part C", reason: "Pure qualification testing - narrower scope but heavy paperwork detail" }
];

const seminarImpact = [
    { path: "Self-Study Only (no seminar)", firstTimePass: "~25-30%", studyHours: "200-300 hours", cost: "$1,165 exam + $200 books = ~$1,365" },
    { path: "Self-Study + AWS Seminar", firstTimePass: "~45-55%", studyHours: "150-200 hours + 40 hr seminar", cost: "$1,165 exam + $1,795-$2,295 seminar = ~$3,000-$3,460" },
    { path: "AWS Seminar + 5+ Years Field Experience", firstTimePass: "~65-75%", studyHours: "80-120 hours + 40 hr seminar", cost: "Same as above ~$3,000-$3,460" },
    { path: "Third-Party Bootcamp + Self-Study", firstTimePass: "~40-50%", studyHours: "200 hours + 40 hr bootcamp", cost: "$1,165 exam + $800-$1,500 bootcamp = ~$2,000-$2,665" }
];

const industryPassRates = [
    { industry: "Structural Steel Fabrication (D1.1)", firstTime: "~40-45%", note: "Highest pass rate - D1.1 is the most-taught code and dominates fabrication shops" },
    { industry: "Bridge Fabrication (D1.5)", firstTime: "~38-42%", note: "Similar to D1.1 with added fatigue/CVN/FCP requirements" },
    { industry: "Pipeline Construction (API 1104)", firstTime: "~30-35%", note: "Unique terminology challenges fabricators without pipeline experience" },
    { industry: "Power Plant Construction (B31.1)", firstTime: "~32-38%", note: "Heavy ASME Section IX cross-references" },
    { industry: "Petrochemical / Process Piping (B31.3)", firstTime: "~25-32%", note: "Most complex code; Severe Cyclic Conditions and material categories trip first-timers" },
    { industry: "Shipbuilding (D3.6M / NAVSEA)", firstTime: "~35-40%", note: "Specialized code with narrower candidate pool" }
];

const retakeStrategy = [
    { failed: "Failed Part A only", strategy: "Focus on weak Body of Knowledge areas - usually welding metallurgy (HAZ, carbon equivalent), NDT method limits, or safety. Take 500+ additional practice questions. Re-read AWS B5.1 cover-to-cover. Target 30-45 days additional prep." },
    { failed: "Failed Part B only", strategy: "Pure hands-on practice. Borrow or buy plastic weld replicas and a complete gauge set (Cambridge, V-WAC, bridge cam). Practice 6 scenarios under strict 1.5-hour timing. Write the accept/reject report every time - the written portion is half the score. Target 30-60 days." },
    { failed: "Failed Part C only", strategy: "Retab your code book using AWS seminar tab system. Practice 100+ code-application questions on YOUR specific code. Consider switching to D1.1 if you originally chose B31.3 or API 1104 and don't work with that code daily. Target 30-45 days." },
    { failed: "Failed Parts A + B", strategy: "Plan 90-120 day retake window. Combine theory review (Part A) with practical sessions (Part B) - they reinforce each other. Strongly consider attending the AWS seminar this time even if you skipped it originally." },
    { failed: "Failed Parts B + C", strategy: "Most common dual-failure pattern. Indicates exam-day stress and weak code familiarity. Take the AWS seminar, then practice Part B scenarios while simultaneously re-tabbing the code. 60-90 days." },
    { failed: "Failed all three parts", strategy: "Step back and reassess prep approach. Almost always indicates insufficient baseline welding knowledge. Recommended: attend AWS seminar, get 6 months of supervised field inspection experience under a current CWI, then schedule retake. Don't rush back - quality prep beats fast retest." }
];

export default function CWIPassRateByPartABCBreakdown() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "CWI Pass Rate 2026: Part A vs B vs C Breakdown (with Retake Stats)",
                "description": "AWS CWI pass rate by part: Part A ~70%, Part B ~52%, Part C ~63%. Why Part B fails most candidates. Retake strategy + seminar uplift data. Updated May 2026.",
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
                title="CWI Pass Rate 2026: Part A vs B vs C Breakdown (with Retake Stats)"
                description="AWS CWI pass rate by part: Part A ~70%, Part B ~52%, Part C ~63%. Why Part B fails most candidates. Retake strategy + seminar uplift data. Updated May 2026."
                keywords="cwi pass rate, aws cwi exam pass rate, cwi part b pass rate, cwi part a pass rate, cwi part c pass rate, cwi retake, aws cwi seminar, cwi exam difficulty, cwi first time pass rate"
                canonical="https://atlantisndt.com/blog/cwi-pass-rate-by-part-a-b-c-breakdown"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">CWI Certification Data • Last updated May 2026 • 14 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">CWI Pass Rate: Part A vs Part B vs Part C Breakdown</h1>
                        <p className="text-xl text-amber-100 mb-8">Most CWI pass-rate articles give one blended number. That hides where candidates actually fail. This guide splits AWS CWI pass rates by Part A (fundamentals), Part B (practical), and Part C (code book) - with retake fees, seminar uplift data, and industry-by-industry breakdowns.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="CWI Pass Rate 2026: Part A vs B vs C Breakdown" description="AWS CWI pass rates by part, retake stats, and seminar uplift data." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Opening pass-rate breakdown */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">CWI Pass Rate by Part: The Numbers That Actually Matter</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The AWS Certified Welding Inspector exam has three parts (A, B, C) and most articles quote a single blended "CWI pass rate" of around 65-70%. That number is misleading because it averages a relatively easy fundamentals exam, a brutal hands-on practical, and an open-book code exam whose difficulty depends entirely on which code the candidate picks. The table below splits those numbers based on industry estimates compiled from training providers, instructor-reported pass rates, and AWS Accredited Testing Facility (ATF) candidate surveys.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Part</th>
                                        <th className="px-4 py-3 text-left font-semibold">First-Time Pass</th>
                                        <th className="px-4 py-3 text-left font-semibold">Overall Pass</th>
                                        <th className="px-4 py-3 text-left font-semibold">Common Failure Reason</th>
                                        <th className="px-4 py-3 text-left font-semibold">Retake Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passRateByPart.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.part}</td>
                                            <td className="px-4 py-3 text-amber-700 font-semibold">{item.firstTime}</td>
                                            <td className="px-4 py-3 text-amber-700 font-semibold">{item.overall}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{item.failure}</td>
                                            <td className="px-4 py-3 text-sm font-medium">{item.retake}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>Important caveat:</strong> AWS does not publish official pass rates. These figures are industry estimates synthesized from authorized training provider data, instructor reports, and candidate forums. Actual pass rates vary by exam window, ATF location, and the code candidates choose for Part C. Treat the numbers as planning benchmarks, not absolute facts.
                            </p>
                        </div>
                    </section>

                    {/* Why no official numbers */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why AWS Doesn't Publish Official Pass Rates</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Unlike ASNT (which publishes blended pass rates in some reports) or API (which discloses pass rates by certification), AWS treats CWI pass rate data as confidential. The reasons are practical: exam content is partially randomized between windows, pass rates vary materially by code choice on Part C, and AWS does not want pass-rate marketing wars between competing training providers.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The numbers in this article come from three sources: (1) AWS-Accredited Testing Facilities (ATFs) that proctor exams and informally track their candidates' results, (2) major training-provider CWI seminars that publish their own success rates as marketing claims, and (3) candidate post-mortems in welding-industry forums where thousands of CWI candidates have shared their experience. Triangulating these sources gives reasonable ranges - not exact percentages.
                        </p>
                    </section>

                    {/* Part A Deep Dive */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Part A Deep Dive: Fundamentals (~70% First-Time Pass)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Part A is the highest-passing of the three parts because it's the most predictable: 150 multiple-choice questions, 2 hours, closed book, 72% to pass. The Body of Knowledge is fixed, study materials are abundant, and there's no time-pressured hands-on element.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Topics That Fail Candidates on Part A</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500 mb-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Welding Metallurgy:</strong> Heat-affected zone (HAZ) behavior, carbon equivalent calculations (Pcm, CE Yurioka), preheat/interpass requirements, martensite formation. Candidates without metallurgy background lose 8-12 questions here.</span>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>NDT Method Limits:</strong> When is UT preferred over RT? Can MT detect subsurface flaws? What's the depth limit of PT? These questions test understanding, not memorization. Common errors: confusing UT (volumetric) with MT (surface/near-surface).</span>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Safety & Health:</strong> Hexavalent chromium exposure limits, manganese fumes, OSHA PEL values, confined space rules. Career welders skip this section in study and lose 5-8 easy questions.</span>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Weld Symbols:</strong> AWS A2.4 symbols - field weld flags, weld-all-around circles, contour symbols, supplementary symbols. Easy questions that candidates miss by not memorizing the standard symbols sheet.</span>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Destructive Testing:</strong> Tensile, bend, Charpy V-notch (CVN), nick-break, macroetch. Differences between transverse vs longitudinal bends, face vs root vs side bends.</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-4">
                            <strong>How to pass Part A:</strong> 500+ practice questions from AWS-licensed question banks, plus full reads of AWS B5.1 (Standard for the Qualification of Welding Inspectors), the AWS Welding Inspection Technology textbook, and the CWI Body of Knowledge document. Most failures on Part A come from under-studying metallurgy and safety - not from the welding-process questions that career welders ace.
                        </p>
                    </section>

                    {/* Part B Deep Dive */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Part B Deep Dive: Practical (~50-55% First-Time Pass)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Part B is where the CWI exam stops being a knowledge test and starts being a competency test. Candidates work through six hands-on inspection scenarios using physical plastic weld replicas, fillet weld gauges, bridge cam gauges, and a hypothetical Book of Specifications (BOS) that mimics real-world inspection paperwork. Each scenario allows approximately 1.5 hours and requires both physical measurement and written accept/reject documentation.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">The Six Part B Scenarios</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Scenario</th>
                                        <th className="px-3 py-2 text-left font-semibold">Time</th>
                                        <th className="px-3 py-2 text-left font-semibold">What's Tested</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partBScenarios.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.scenario}</td>
                                            <td className="px-3 py-2 text-amber-700 font-semibold">{item.time}</td>
                                            <td className="px-3 py-2 text-slate-600">{item.focus}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Why Most Candidates Fail Part B</h3>
                        <div className="space-y-3 mb-6">
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold mb-1">Time pressure on plastic replicas</h4>
                                <p className="text-slate-600 text-sm">1.5 hours sounds generous until you're measuring six discontinuities, applying three gauges, and writing a formal accept/reject report against an unfamiliar BOS. Most candidates run out of time on at least one scenario.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold mb-1">Wrong gauge for the geometry</h4>
                                <p className="text-slate-600 text-sm">Cambridge gauge vs V-WAC gauge vs bridge cam vs fillet weld gauge - each measures different things. Picking the wrong gauge for a convex fillet weld throat measurement burns 10+ minutes and produces an incorrect reading.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold mb-1">Misreading the Book of Specifications (BOS)</h4>
                                <p className="text-slate-600 text-sm">The BOS is a hypothetical spec - not D1.1 or any real code. Candidates who don't carefully read the BOS acceptance criteria apply real-world code limits and get wrong answers.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold mb-1">Sloppy written reports</h4>
                                <p className="text-slate-600 text-sm">A correct physical finding paired with an incomplete or unclear written accept/reject report still fails. Part B grades the documentation as heavily as the measurement.</p>
                            </div>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>The replica reality:</strong> Part B uses plastic weld replicas - not real steel welds. The replicas are dimensionally accurate but visually different from field welds. Candidates who have never handled them before lose precious minutes adjusting to the medium. This is the single biggest argument for attending the AWS seminar, which uses identical replicas in its hands-on lab sessions.
                            </p>
                        </div>
                    </section>

                    {/* Part C Deep Dive */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Part C Deep Dive: Code Book Practical (~60-65% First-Time Pass)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Part C is a 2-hour, 46-question open-book exam on the code candidates select at registration. The candidate brings and annotates their personal copy of the code. Despite being open-book, Part C fails an estimated 35-40% of first-time candidates - because reading a 600-page code under time pressure without tabs is brutal.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Code Choice Materially Affects Pass Rate</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Code</th>
                                        <th className="px-3 py-2 text-left font-semibold">Difficulty</th>
                                        <th className="px-3 py-2 text-left font-semibold">Estimated Part C Pass</th>
                                        <th className="px-3 py-2 text-left font-semibold">Why</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {codeChoiceImpact.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.code}</td>
                                            <td className="px-3 py-2 text-amber-700 font-semibold">{item.difficulty}</td>
                                            <td className="px-3 py-2 text-amber-700 font-semibold">{item.passRate}</td>
                                            <td className="px-3 py-2 text-slate-600">{item.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Part C Failure Modes</h3>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-2 text-slate-700 mb-6">
                            <li>• <strong>Untabbed code book:</strong> Searching unfamiliar tables under 2-hour time pressure burns the clock. AWS seminars provide standardized tab systems.</li>
                            <li>• <strong>Chose the wrong code:</strong> Candidates pick B31.3 because their employer uses it, but they personally have no daily exposure. Result: 25-30% Part C pass rate vs 60%+ for D1.1.</li>
                            <li>• <strong>Skimmed questions:</strong> Part C questions often hinge on a single clause embedded mid-paragraph (e.g., "for Severe Cyclic Conditions" in B31.3). Skip-readers fail.</li>
                            <li>• <strong>Wrong code edition:</strong> AWS specifies the exact edition tested - bringing the wrong year of D1.1 or B31.3 means clauses are renumbered.</li>
                        </ul>
                    </section>

                    {/* Seminar Impact */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Pass Rate by Seminar Attendance (~20pp Uplift)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The single biggest controllable factor in CWI pass rate is whether the candidate attends the official AWS CWI Seminar - the 5-day intensive prep course held the week before the exam at most AWS-Accredited Testing Facilities. Industry data suggests seminar attendance lifts first-time all-three pass rates by approximately 15-25 percentage points.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Prep Path</th>
                                        <th className="px-3 py-2 text-left font-semibold">First-Time Pass (Est.)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Study Hours</th>
                                        <th className="px-3 py-2 text-left font-semibold">Total Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seminarImpact.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.path}</td>
                                            <td className="px-3 py-2 text-amber-700 font-semibold">{item.firstTimePass}</td>
                                            <td className="px-3 py-2 text-slate-600">{item.studyHours}</td>
                                            <td className="px-3 py-2 font-medium">{item.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>Seminar economics:</strong> The AWS seminar costs ~$1,800-$2,300. Single-part retake fees are ~$400 each. If skipping the seminar leads to retaking just two parts, the candidate has already exceeded seminar cost - and lost months of CWI-eligible income. For most candidates, the seminar pays for itself in retake-avoidance alone.
                            </p>
                        </div>
                    </section>

                    {/* Pass rate by industry */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Pass Rate by Industry / Code Choice</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Pass rates correlate strongly with daily code exposure. A structural fabricator testing on D1.1 has a meaningfully different success probability than a refinery technician testing on B31.3 - even though both candidates studied equally. The table below uses industry estimates synthesized from training-provider candidate cohorts.
                        </p>

                        <div className="space-y-3">
                            {industryPassRates.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold">{item.industry}</h4>
                                        <span className="text-amber-700 font-semibold">{item.firstTime}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Retake Strategy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Retake Strategy by Failure Pattern</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            AWS allows candidates a 1-year window from the original exam date to retake failed parts without restarting from scratch. The retake strategy should match the failure pattern - retaking Part B with more textbook study is wasted effort; retaking Part C without re-tabbing the code book is wasted effort.
                        </p>

                        <div className="space-y-4">
                            {retakeStrategy.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-lg mb-2 text-amber-900">{item.failed}</h4>
                                    <p className="text-slate-700">{item.strategy}</p>
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
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Plan Your CWI Path with Atlantis NDT</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">We help candidates build CWI prep plans matched to their experience level and code choice. Hands-on Part B coaching, code-book tabbing workshops, and seminar prep guidance from ASNT Level III instructors.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">Get CWI Prep Plan</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Training Programs</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/cwi-exam-cost-2026-total-investment-calculator" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">CWI Exam Cost 2026: Total Investment Calculator</h3>
                                <p className="text-slate-600 text-sm mt-2">Full breakdown of exam fees, seminar costs, retakes, and 9-year recertification economics</p>
                            </Link>
                            <Link to="/blog/cwi-certification-requirements-cost-career-impact" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">CWI Certification: Requirements, Cost & Career Impact</h3>
                                <p className="text-slate-600 text-sm mt-2">Eligibility, experience requirements, salary impact, and career progression for AWS CWIs</p>
                            </Link>
                            <Link to="/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">AWS D1.1 Weld Acceptance Criteria: Comprehensive Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Visual, UT, RT, and MT acceptance criteria from D1.1 Clause 8 - the most common Part C code</p>
                            </Link>
                            <Link to="/blog/ndt-salary-guide-2026-global" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">NDT Salary Guide 2026 (Global)</h3>
                                <p className="text-slate-600 text-sm mt-2">CWI, ASNT, API salaries by region, certification level, and industry for 2026</p>
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
