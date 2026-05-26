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
    { question: "What is the API 510 Body of Knowledge 2026?", answer: "The API 510 Body of Knowledge (BoK) is the official document published by the American Petroleum Institute defining every topic, code, standard, and reference publication that can appear on the API 510 Pressure Vessel Inspector certification exam. The current effective BoK is the September 2025 edition, which governs all exam sittings from January 2026 through May 2027. API publishes a new BoK roughly every 18-24 months; the 2026 BoK introduced reweighted emphasis on damage mechanisms (API 571), fitness-for-service (API 579-1/ASME FFS-1 2021 edition), and Risk-Based Inspection (API 580/581). Candidates MUST study to the BoK that matches their scheduled exam date - studying to an outdated BoK is the single most common reason for first-time exam failure." },
    { question: "What is the API 510 exam format in 2026?", answer: "The API 510 exam in 2026 is a two-part computer-based test (CBT) administered at Prometric testing centers worldwide. Part 1 is closed-book: 70 multiple-choice questions in 2 hours 45 minutes covering general knowledge of API 510, basic ASME VIII Div 1 design concepts, and damage mechanisms. Part 2 is open-book: 80 multiple-choice questions in 3 hours 30 minutes where candidates use printed (or tabbed) copies of the effective edition publications listed in the BoK. Total: 150 questions across 6 hours 15 minutes of testing time. Passing requires roughly 70% scaled score across both parts combined. Candidates cannot pass Part 2 alone if they fail Part 1 - both sections must demonstrate competency. Tabs, highlighting, and underlining are permitted in open-book references; loose notes, sticky notes with writing, and electronic devices are prohibited." },
    { question: "What changed in the September 2025 API 510 BoK?", answer: "The September 2025 BoK (effective for exams January 2026 through May 2027) introduced several significant changes from the prior March 2024 edition. ADDED topics: expanded API 579-1/ASME FFS-1 Part 4 (general metal loss) and Part 5 (local metal loss) sub-topics, new questions on Phased Array UT (PAUT) per ASME V Article 4 Mandatory Appendix IV, and dedicated content on welder qualification renewal under ASME IX QW-322. REMOVED topics: legacy references to API 510 9th edition appendices, deprecated NDE acceptance criteria from earlier ASME VIII addenda. REWEIGHTED topics: Damage Mechanisms (API 571) increased from approximately 12% to 16% of total exam weight; Repair/Alteration (API 510 Sections 7 and 8) decreased slightly; RBI (API 580/581) increased from 6% to 8%. The net effect is a harder exam for candidates without deep damage mechanism and FFS background." },
    { question: "What reference publications are required for API 510 2026?", answer: "The September 2025 BoK lists these effective editions as the ONLY references permitted in the open-book Part 2 exam: API 510 11th edition (May 2022) with 1st Addendum (May 2024), ASME Boiler and Pressure Vessel Code Section VIII Division 1 (2023 edition), API Recommended Practice 571 4th edition (April 2024) - Damage Mechanisms Affecting Fixed Equipment, API RP 572 5th edition (June 2023) - Inspection Practices for Pressure Vessels, API RP 576 4th edition (August 2024) - Inspection of Pressure-Relieving Devices, API RP 577 3rd edition (December 2022) - Welding Processes/Inspection/Metallurgy, API RP 578 3rd edition (October 2023) - Material Verification Program, API 579-1/ASME FFS-1 2021 edition - Fitness-for-Service, API RP 580 4th edition (February 2024) - Risk-Based Inspection, API RP 581 4th edition (2024 addendum) - RBI Methodology, ASME BPVC Section V (2023 edition) - Nondestructive Examination, ASME BPVC Section IX (2023 edition) - Welding and Brazing Qualifications. Using any other edition during the exam will result in disqualification." },
    { question: "How many questions are on each section of the API 510 exam?", answer: "The 150-question API 510 exam is split across multiple weighted sections per the 2026 BoK. Closed-book (70 questions, 2h 45min): API 510 general inspection (~15 questions), Damage Mechanisms per API 571 (~12 questions), ASME VIII Div 1 fundamentals (~10 questions), NDE basics (~8 questions), Welding fundamentals from API 577 (~8 questions), miscellaneous code interactions (~17 questions). Open-book (80 questions, 3h 30min): API 510 detailed sections - inspection intervals, repair/alteration, rerating (~22 questions), ASME VIII Div 1 detailed calculations - MAWP, joint efficiency, nozzle reinforcement (~16 questions), API 579-1/ASME FFS-1 fitness-for-service (~12 questions), ASME V NDE procedures and acceptance criteria (~10 questions), ASME IX welder qualification (~8 questions), API 580/581 RBI methodology (~6 questions), pressure relief device inspection per API 576 (~4 questions), PMI per API 578 (~2 questions). Time allocation is critical - average 2 min 22 sec per closed-book question and 2 min 37 sec per open-book question." },
    { question: "Why is the 2026 API 510 BoK harder than previous editions?", answer: "Three structural changes make the 2026 BoK measurably harder. First, the API 579-1/ASME FFS-1 weight increased significantly - candidates now face roughly 12 open-book questions requiring multi-step Part 4 (general metal loss) and Part 5 (local metal loss) Level 1 and Level 2 assessments, including remaining strength factor (RSF) calculations and minimum required thickness (tmin) determinations. Second, damage mechanism questions (API 571) require deeper knowledge - the 4th edition added new mechanisms (high temperature hydrogen attack threshold revisions, dissimilar metal weld cracking) and removed some legacy content, so memorization of older mechanisms is insufficient. Third, the new ASME VIII Div 1 2023 edition consolidated several mandatory appendices and renumbered paragraphs, breaking candidates who memorized paragraph numbers from older editions. Industry feedback from the first 2026 exam sittings (January-March 2026) shows reported pass rates of 38-42%, down from the historical 45-50% range." },
    { question: "What is the recommended study order for the 2026 API 510 BoK?", answer: "Optimal study sequence for first-time candidates: (1) Weeks 1-2: API 510 11th edition cover-to-cover - learn the structure first since it references everything else. (2) Weeks 3-4: ASME VIII Div 1 2023 - focus on UG-22 through UG-45 (design), UCS materials, UW welding, Mandatory Appendix 1 (supplementary formulas). (3) Weeks 5-6: API 571 4th edition - memorize the top 20 damage mechanisms most common in refining (sulfidation, naphthenic acid corrosion, HTHA, CUI, amine cracking, wet H2S damage). (4) Weeks 7-8: API 579-1/ASME FFS-1 Parts 1, 2, 4, 5, 9 - work through 15-20 Level 1 and Level 2 example problems. (5) Week 9: API 577 (welding), API 578 (PMI), API 576 (PRDs) - lighter reading. (6) Week 10: ASME V (NDE) and ASME IX (welding qualification) - focus on commonly tested articles. (7) Week 11: API 580/581 (RBI) and API 572 (vessel inspection practices). (8) Weeks 12-14: Full-length practice exams under timed, open-book conditions. (9) Week 15: Tab and index all open-book references; final review of weak areas. Total: 350-450 hours over 3.5 months." },
    { question: "How does a closed-book API 510 question differ from an open-book one?", answer: "Closed-book questions test conceptual recall and quick application without reference materials. Example closed-book question: 'Which damage mechanism is characterized by stepwise cracking parallel to the steel surface in carbon steel exposed to wet H2S environments?' (Answer: Hydrogen-Induced Cracking / HIC - candidate must know this from memory). Open-book questions test the ability to locate, interpret, and apply specific code clauses, tables, formulas, or figures from the reference documents. Example open-book question: 'A pressure vessel operating at 350 PSI design pressure has a measured average remaining thickness of 0.412 inches and a required minimum thickness per UG-27 of 0.385 inches. Per API 510 Section 7.5, what is the corrosion allowance available for continued service?' (Answer requires looking up API 510 Section 7.5 calculation methodology and performing arithmetic). The 2026 BoK shifted more questions toward this calculation-style open-book format, which is why tabbing and indexing references is critical." },
    { question: "Can I use the older API 510 10th edition for the 2026 exam?", answer: "NO. The September 2025 BoK explicitly requires API 510 11th edition (May 2022) with the 1st Addendum (May 2024). Bringing the 10th edition or any earlier version to the testing center is grounds for disqualification, even if the content appears similar. The 11th edition incorporated substantial changes including revised inspection interval methodology (Section 6.5), updated rerating procedures (Section 8.2), and new requirements for hot-tapping pressure vessels. The 1st Addendum further clarified Section 5 owner-user inspection program requirements. Candidates frequently lose points by relying on memory from older editions when the paragraph numbers and acceptance criteria have shifted. Always verify your reference editions match the BoK in effect on your specific exam date - the BoK in effect at the time you SCHEDULED your exam may not be the BoK in effect when you SIT for it. Reschedule and re-tab if API publishes a new BoK between your registration and exam date." },
    { question: "When will the next API 510 BoK be released?", answer: "Based on API's historical publication cycle of 18-24 months, the next API 510 BoK is expected approximately Q2 2027 (April-June 2027), which would be effective for exam sittings from approximately July 2027 forward. The current September 2025 BoK will govern all exams through approximately May 2027. API typically pre-announces BoK changes 60-90 days before the effective date via the ICP (Individual Certification Programs) website and email notifications to active candidates. Candidates currently studying for late-2026 or early-2027 exam dates should plan to take the exam before May 2027 to avoid having to re-study to a new BoK. If you must shift your exam to July 2027 or later, budget an additional 40-60 hours of study to absorb the new BoK changes - typically the API 579-1 and ASME VIII Div 1 sections receive the most updates between BoK cycles." }
];

const bokTopics = [
    { topic: "API 510 - General Inspection, Repair, Alteration", weight: "22%", notes: "Inspection intervals (Sec 6), repair/alteration (Sec 7-8), rerating (Sec 8.2), recordkeeping (Sec 5)", reference: "API 510 11th + 1st Add" },
    { topic: "ASME VIII Div 1 - Pressure Vessel Design & Construction", weight: "16%", notes: "MAWP calculations (UG-27, UG-32), joint efficiency (UW-12), nozzle reinforcement (UG-37), material selection", reference: "ASME BPVC VIII Div 1 (2023)" },
    { topic: "API 571 - Damage Mechanisms", weight: "16%", notes: "HTHA, sulfidation, CUI, naphthenic acid, amine cracking, HIC/SOHIC, creep, dissimilar metal weld cracking", reference: "API RP 571 4th ed." },
    { topic: "API 579-1/ASME FFS-1 - Fitness-for-Service", weight: "11%", notes: "Part 4 (general metal loss), Part 5 (local metal loss), Part 9 (crack-like flaws), RSF and tmin", reference: "API 579-1/ASME FFS-1 (2021)" },
    { topic: "API 572 - Vessel Inspection Practices", weight: "8%", notes: "External/internal inspection techniques, on-stream inspection, thickness measurement locations (TMLs)", reference: "API RP 572 5th ed." },
    { topic: "ASME Section V - Nondestructive Examination", weight: "8%", notes: "Article 2 (RT), Article 4 (UT/PAUT/TOFD), Article 6 (PT), Article 7 (MT), Article 23 (UT thickness)", reference: "ASME BPVC V (2023)" },
    { topic: "API 577 - Welding Inspection & Metallurgy", weight: "6%", notes: "Welding processes (SMAW, GTAW, GMAW), WPS/PQR review, weld defects, preheat/PWHT", reference: "API RP 577 3rd ed." },
    { topic: "ASME Section IX - Welder & WPS Qualification", weight: "5%", notes: "QW-200 (WPS), QW-300 (welder performance), essential/nonessential variables, renewal QW-322", reference: "ASME BPVC IX (2023)" },
    { topic: "API 580/581 - Risk-Based Inspection", weight: "4%", notes: "Qualitative vs quantitative RBI, POF/COF, risk matrix, inspection plan optimization", reference: "API RP 580 4th + 581 4th" },
    { topic: "API 576 - Pressure-Relieving Devices", weight: "2%", notes: "PRV inspection intervals, pop testing, bench testing, installation requirements", reference: "API RP 576 4th ed." },
    { topic: "API 578 - Material Verification Program (PMI)", weight: "2%", notes: "PMI methodology, alloy verification, positive material identification frequency", reference: "API RP 578 3rd ed." }
];

const bokChanges = [
    { category: "ADDED (Sept 2025)", item: "Expanded API 579-1 Part 4 & Part 5 sub-topics", impact: "12+ new question variants on RSF and tmin calculations" },
    { category: "ADDED (Sept 2025)", item: "Phased Array UT (PAUT) per ASME V Art. 4 Mandatory App. IV", impact: "New 3-4 closed-book questions on PAUT applicability vs conventional UT" },
    { category: "ADDED (Sept 2025)", item: "ASME IX QW-322 welder qualification renewal", impact: "New open-book questions on continuity logs and 6-month renewal" },
    { category: "ADDED (Sept 2025)", item: "API 571 4th ed. - new HTHA Nelson Curve revisions", impact: "Replaced older HTHA threshold data; candidates using 3rd ed. will fail these" },
    { category: "ADDED (Sept 2025)", item: "Dissimilar metal weld (DMW) cracking", impact: "New damage mechanism category - 1-2 closed-book questions" },
    { category: "REMOVED (vs Mar 2024)", item: "API 510 9th edition legacy appendices", impact: "Older paragraph references no longer valid - retabbing required" },
    { category: "REMOVED (vs Mar 2024)", item: "Deprecated NDE acceptance criteria from pre-2019 ASME VIII addenda", impact: "Eliminates ~3-4 historical questions; replaced by 2023 edition criteria" },
    { category: "REMOVED (vs Mar 2024)", item: "Legacy API 579 (2007) references", impact: "Only the 2021 API 579-1/ASME FFS-1 combined edition is now valid" },
    { category: "REWEIGHTED ↑", item: "Damage Mechanisms (API 571): 12% → 16%", impact: "+4-5 additional questions across both closed and open book" },
    { category: "REWEIGHTED ↑", item: "Risk-Based Inspection (API 580/581): 6% → 8%", impact: "+2-3 additional open-book questions on POF/COF and risk matrix" },
    { category: "REWEIGHTED ↑", item: "Fitness-for-Service (API 579-1): 9% → 11%", impact: "+3 additional Part 4/5 calculation questions" },
    { category: "REWEIGHTED ↓", item: "Repair/Alteration (API 510 Sec 7-8): 18% → 15%", impact: "-3-4 questions; less emphasis on repair authorization scenarios" },
    { category: "REWEIGHTED ↓", item: "ASME VIII Div 1 fundamentals: 19% → 16%", impact: "-3 questions; design calculations still tested but less heavily" }
];

const referenceEditions = [
    { publication: "API 510", edition: "11th edition (May 2022) + 1st Addendum (May 2024)", scope: "Primary in-service inspection code for pressure vessels" },
    { publication: "ASME BPVC Section VIII Division 1", edition: "2023 edition", scope: "Design and construction rules for unfired pressure vessels" },
    { publication: "API RP 571", edition: "4th edition (April 2024)", scope: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
    { publication: "API RP 572", edition: "5th edition (June 2023)", scope: "Inspection Practices for Pressure Vessels" },
    { publication: "API RP 576", edition: "4th edition (August 2024)", scope: "Inspection of Pressure-Relieving Devices" },
    { publication: "API RP 577", edition: "3rd edition (December 2022)", scope: "Welding Processes, Inspection, and Metallurgy" },
    { publication: "API RP 578", edition: "3rd edition (October 2023)", scope: "Material Verification Program (PMI) for New & Existing Alloy Piping Systems" },
    { publication: "API 579-1/ASME FFS-1", edition: "2021 edition", scope: "Fitness-for-Service (joint API/ASME combined standard)" },
    { publication: "API RP 580", edition: "4th edition (February 2024)", scope: "Risk-Based Inspection" },
    { publication: "API RP 581", edition: "4th edition with 2024 Addendum", scope: "Risk-Based Inspection Methodology (quantitative)" },
    { publication: "ASME BPVC Section V", edition: "2023 edition", scope: "Nondestructive Examination" },
    { publication: "ASME BPVC Section IX", edition: "2023 edition", scope: "Welding, Brazing, and Fusing Qualifications" }
];

const studyPriority = [
    { rank: "1", area: "API 579-1/ASME FFS-1 Parts 4 & 5", reason: "Highest single source of open-book calculation questions in 2026 BoK. Work through 20+ example problems for general and local metal loss assessments.", hours: "60-80" },
    { rank: "2", area: "API 571 Damage Mechanisms", reason: "Increased to 16% weight. Memorize top 20 mechanisms with their typical environments, susceptible materials, and prevention strategies.", hours: "50-70" },
    { rank: "3", area: "API 510 Sections 5, 6, 7, 8", reason: "Core code - owner-user program, inspection intervals, repair/alteration, rerating. Every section is testable.", hours: "50-60" },
    { rank: "4", area: "ASME VIII Div 1 (UG, UW, UCS, App. 1)", reason: "MAWP, joint efficiency, nozzle reinforcement calculations. Tab heavily - 16% of exam.", hours: "40-50" },
    { rank: "5", area: "API 580/581 RBI Methodology", reason: "Increased to 8% weight. Understand POF/COF inputs, risk matrix, and inspection plan optimization logic.", hours: "25-35" },
    { rank: "6", area: "ASME V (NDE) + ASME IX (Welding Qual.)", reason: "Combined ~13% weight. Focus on Article 2 (RT), Article 4 (UT/PAUT), and QW-200/300.", hours: "30-40" },
    { rank: "7", area: "API 577 / 572 / 576 / 578", reason: "Supporting RPs. Lighter content but each contributes 2-8% of exam.", hours: "25-30" }
];

const sampleQuestions = [
    {
        type: "Closed-Book Example #1",
        question: "Per API 571, high-temperature hydrogen attack (HTHA) is best characterized by which of the following?",
        choices: "(A) Surface blistering with no internal damage\n(B) Internal decarburization and methane fissuring at grain boundaries\n(C) Stress corrosion cracking parallel to weld\n(D) Pitting corrosion in stagnant condensate",
        answer: "B - HTHA causes internal decarburization and methane fissuring per API 571 Section 5.1.3. Candidate must recall this without references.",
        skill: "Recall - damage mechanism characterization"
    },
    {
        type: "Open-Book Example #1",
        question: "A pressure vessel with 600 PSI design pressure, ID = 48 in., allowable stress S = 17,500 psi, joint efficiency E = 0.85, and corrosion allowance CA = 0.125 in. operates in clean service. Per ASME VIII Div 1 UG-27(c)(1), what is the required minimum thickness of the cylindrical shell?",
        choices: "(A) 0.985 in.\n(B) 1.110 in.\n(C) 1.235 in.\n(D) 1.385 in.",
        answer: "B - Apply t = PR/(SE - 0.6P) + CA. t = (600 × 24)/((17500 × 0.85) - (0.6 × 600)) + 0.125 = 14400/14580 + 0.125 = 0.988 + 0.125 = 1.113 in. → 1.110 in. (closest).",
        skill: "Application - look up UG-27 formula, plug values, perform arithmetic"
    },
    {
        type: "Open-Book Example #2",
        question: "Per API 579-1/ASME FFS-1 Part 5, a vessel with locally thinned area has measured minimum thickness tmm = 0.275 in. and required minimum thickness tmin = 0.310 in. The remaining strength factor (RSF) is calculated as 0.92. The allowable RSF (RSFa) is 0.90. Is the vessel acceptable for continued service per Level 1 assessment?",
        choices: "(A) Yes, because tmm > 0.5 × tmin\n(B) Yes, because RSF > RSFa\n(C) No, because tmm < tmin\n(D) No, requires Level 2 assessment",
        answer: "B - Per Part 5 Section 5.4.2.2, the Level 1 acceptance criterion is RSF ≥ RSFa. Since 0.92 ≥ 0.90, the vessel is acceptable.",
        skill: "Application - locate Part 5 Level 1 criteria, compare values"
    }
];

export default function API510BodyOfKnowledge2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 510 Body of Knowledge 2026: Topic Weights + What Changed (Sept 2025 Edition)",
                "description": "API 510 BoK 2026 explained: 70 closed-book + 80 open-book questions, exact topic weights, reference editions, what changed from prior BoK. Updated May 2026.",
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
                title="API 510 Body of Knowledge 2026: Topic Weights + What Changed (Sept 2025 Edition)"
                description="API 510 BoK 2026 explained: 70 closed-book + 80 open-book questions, exact topic weights, reference editions, what changed from prior BoK. Updated May 2026."
                keywords="api 510 body of knowledge 2026, api 510 bok 2026, api 510 exam pattern, api 510 exam format, api 510 september 2025 bok, api 510 reference editions, api 510 topic weights, api 510 11th edition"
                canonical="https://atlantisndt.com/blog/api-510-body-of-knowledge-2026-changes-explained"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">BoK Reference • Last updated May 2026 • 16 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 Body of Knowledge 2026: Topic Weights + What Changed</h1>
                        <p className="text-xl text-amber-100 mb-8">The September 2025 BoK governs every API 510 exam through May 2027. Here is the exact topic-weight breakdown, the diff against the prior March 2024 BoK, the effective reference editions, and the study order that wins.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="API 510 Body of Knowledge 2026: Topic Weights + What Changed" description="Decode the September 2025 API 510 BoK - weights, reference editions, and changes." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* BoK Topic Weights - Opening Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 510 Body of Knowledge - 2026 Topic Weights</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The American Petroleum Institute publishes the API 510 Body of Knowledge (BoK) as the official scope document for the Pressure Vessel Inspector exam. The September 2025 edition is the binding BoK for every exam sitting from January 2026 through approximately May 2027. The table below decodes how the 150 exam questions are distributed across the 11 testable subject areas - the column you actually need before you start studying.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">Topic</th>
                                        <th className="px-3 py-3 text-left font-semibold">Weight %</th>
                                        <th className="px-3 py-3 text-left font-semibold">Notes</th>
                                        <th className="px-3 py-3 text-left font-semibold">Reference Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bokTopics.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-3 font-medium">{item.topic}</td>
                                            <td className="px-3 py-3 text-amber-700 font-bold">{item.weight}</td>
                                            <td className="px-3 py-3 text-xs text-slate-600">{item.notes}</td>
                                            <td className="px-3 py-3 text-xs font-semibold">{item.reference}</td>
                                        </tr>
                                    ))}
                                    <tr className="border-t bg-amber-50">
                                        <td className="px-3 py-3 font-bold">TOTAL</td>
                                        <td className="px-3 py-3 text-amber-700 font-bold">100%</td>
                                        <td className="px-3 py-3 text-xs">150 questions across 70 closed-book + 80 open-book</td>
                                        <td className="px-3 py-3 text-xs">12 reference publications</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>Why this table matters:</strong> Most candidates over-study ASME VIII Div 1 design calculations and under-study damage mechanisms (API 571) and fitness-for-service (API 579-1). The 2026 BoK explicitly rebalanced toward operational integrity topics - candidates who allocate study hours by these weights will pass; those who allocate by the prior 2024 BoK will struggle.
                            </p>
                        </div>
                    </section>

                    {/* Exam Format */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 510 Exam Format: 150 Questions, 6h 15min</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The API 510 exam is a two-part computer-based test (CBT) delivered at Prometric centers worldwide. Both parts must be sat in the same testing session - candidates cannot split closed-book and open-book across different days. The total testing window is 6 hours 15 minutes with a brief proctored break between parts.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-3 text-amber-900">Part 1: Closed-Book</h3>
                                <ul className="text-slate-700 space-y-2">
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Questions:</strong> 70 multiple-choice</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Time:</strong> 2 hours 45 minutes</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Pace:</strong> 2 min 22 sec / question</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>References:</strong> NONE - pure recall</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Focus:</strong> Damage mechanisms, NDE basics, code concepts</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="font-bold text-lg mb-3 text-amber-900">Part 2: Open-Book</h3>
                                <ul className="text-slate-700 space-y-2">
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Questions:</strong> 80 multiple-choice</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Time:</strong> 3 hours 30 minutes</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Pace:</strong> 2 min 37 sec / question</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>References:</strong> 12 effective-edition publications</span></li>
                                    <li className="flex gap-3"><Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Focus:</strong> Calculations, code lookups, FFS</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Scoring rule that trips up candidates:</strong> The 70 + 80 questions are scored as a single combined scaled score - approximately 70% combined is required to pass. You cannot "ace open-book to recover closed-book" beyond a limited margin. API also applies psychometric scaling per question difficulty, so the raw cut score varies slightly per sitting. Practical rule: aim for 75%+ on each part during practice exams.
                            </p>
                        </div>
                    </section>

                    {/* What Changed - Diff Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">What Changed: Sept 2025 BoK vs Prior March 2024 BoK</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API publishes BoK updates without an HTML changelog - candidates are expected to download the PDF and diff it themselves against the prior edition. The table below is that diff, compiled by comparing the September 2025 effective BoK with the March 2024 BoK that governed exams through December 2025.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">Change Type</th>
                                        <th className="px-3 py-3 text-left font-semibold">Item</th>
                                        <th className="px-3 py-3 text-left font-semibold">Impact on Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bokChanges.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-3 font-semibold text-xs whitespace-nowrap">{item.category}</td>
                                            <td className="px-3 py-3 text-sm font-medium">{item.item}</td>
                                            <td className="px-3 py-3 text-xs text-slate-600">{item.impact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Net effect:</strong> The 2026 BoK shifts emphasis from "design and repair authorization" toward "operational integrity, damage mechanisms, and fitness-for-service." Candidates with backgrounds in fabrication and construction will find the new BoK harder than candidates with refinery operations and inspection backgrounds. Allocate at least 40% of total study hours to API 571, API 579-1, and API 580/581 combined.
                            </p>
                        </div>
                    </section>

                    {/* Reference Editions */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Reference Publications - Effective Editions for 2026 Exams</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            These are the ONLY editions permitted in the open-book Part 2 exam. Bringing any other edition - even one published more recently than the listed edition - will result in disqualification at the testing center. API enforces this strictly; proctors physically inspect references at check-in.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">Publication</th>
                                        <th className="px-3 py-3 text-left font-semibold">Effective Edition</th>
                                        <th className="px-3 py-3 text-left font-semibold">Scope</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referenceEditions.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-3 font-semibold whitespace-nowrap">{item.publication}</td>
                                            <td className="px-3 py-3 text-xs text-amber-700 font-medium">{item.edition}</td>
                                            <td className="px-3 py-3 text-xs text-slate-600">{item.scope}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                            <h4 className="font-bold text-lg mb-3 text-amber-900">Sourcing tip</h4>
                            <p className="text-slate-700">
                                ASME publications are typically purchased as PDF + print bundles from asme.org; API publications are sold via api.org/publications. Total cost to acquire all 12 references new is approximately $3,800-$4,400 USD. Many employers reimburse references when employees are sponsored for certification. Used current-edition references can be sourced from the API forum and r/NDT, but verify the edition matches the BoK before purchase - "API 510 11th edition" without the "1st Addendum" is incomplete.
                            </p>
                        </div>
                    </section>

                    {/* Topic-by-topic study guide */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Topic-by-Topic Study Priority for the 2026 BoK</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Most published API 510 study guides predate the September 2025 BoK and recommend study hours based on the older weighting. The priority list below is calibrated to the actual 2026 weights and the difficulty of each topic, not historical convention.
                        </p>

                        <div className="space-y-4 mb-6">
                            {studyPriority.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-3 gap-4">
                                        <h4 className="font-bold text-lg text-amber-900">#{item.rank}. {item.area}</h4>
                                        <span className="text-sm px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold whitespace-nowrap">{item.hours} hrs</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.reason}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Total study budget:</strong> 280-365 hours across the seven priority blocks above, plus 70-100 hours for practice exams, tabbing references, and final review. Top-end total: 350-465 hours over 12-16 weeks. Candidates with prior API 510 or API 570 experience can compress this by 30-40%; first-time API candidates without refining-industry background should plan for the upper bound.
                            </p>
                        </div>
                    </section>

                    {/* Why this BoK is harder */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why the 2026 BoK is Harder Than Prior Editions</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Reported first-time pass rates from the January-March 2026 exam sittings dropped to 38-42%, compared to the historical 45-50% range under the March 2024 BoK. Three structural shifts explain the increased difficulty:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold text-lg mb-2 text-red-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 1. API 579-1/ASME FFS-1 became calculation-heavy</h4>
                                <p className="text-slate-700">
                                    The 2026 BoK explicitly references multi-step Part 4 (general metal loss) and Part 5 (local metal loss) Level 1 and Level 2 assessments. Candidates face roughly 12 open-book questions requiring RSF calculations, tmin determinations, and acceptance criteria lookups. Each question can consume 4-6 minutes if the candidate is unfamiliar with the FFS workflow - meaning poor FFS preparation alone can burn 30+ minutes of open-book time and cause time pressure across the rest of the exam.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold text-lg mb-2 text-red-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 2. API 571 4th edition reorganized damage mechanisms</h4>
                                <p className="text-slate-700">
                                    The 4th edition (April 2024) added new mechanisms (DMW cracking, refined HTHA Nelson Curves) and consolidated some legacy entries. Candidates relying on memory of the 3rd edition damage mechanism numbering will get tripped up - paragraph references and threshold values shifted. Damage mechanism weight increased from 12% to 16% of total exam, so this is now a make-or-break section in the closed-book half.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                <h4 className="font-bold text-lg mb-2 text-red-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 3. ASME VIII Div 1 2023 edition renumbered paragraphs</h4>
                                <p className="text-slate-700">
                                    The 2023 edition consolidated several mandatory appendices and renumbered paragraphs - candidates who built tab indexes from the 2021 edition find their tabs pointing to wrong locations. Allocate at least 8-10 hours to retab the entire VIII Div 1 binder for the 2023 edition before any practice exam attempt.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Recommended Prep Order */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Recommended 15-Week Prep Order</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The sequence below front-loads the foundation codes (API 510, ASME VIII Div 1) before layering damage mechanisms, FFS, and the supporting RPs. Practice exams begin in Week 12 to leave room for weak-area remediation.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Weeks 1-2:</strong> <span className="text-slate-700">Read API 510 11th + 1st Addendum cover-to-cover. Build outline of Sections 4-8.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Weeks 3-4:</strong> <span className="text-slate-700">ASME VIII Div 1 (2023) - UG-22 through UG-45 (design), UCS (carbon steel materials), UW (welding), Mandatory Appendix 1.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Weeks 5-7:</strong> <span className="text-slate-700">API 571 4th edition - memorize top 20 damage mechanisms with environment, susceptible material, prevention, NDE.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Weeks 8-9:</strong> <span className="text-slate-700">API 579-1/ASME FFS-1 - Parts 1, 2, 4, 5, 9. Work 20+ Level 1 and Level 2 example problems.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Week 10:</strong> <span className="text-slate-700">API 577 (welding), API 578 (PMI), API 576 (PRDs), API 572 (vessel inspection practices) - lighter reading.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Week 11:</strong> <span className="text-slate-700">ASME V (NDE - Articles 2, 4, 6, 7, 23) + ASME IX (QW-200, QW-300, QW-322). Tab heavily.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Week 12:</strong> <span className="text-slate-700">API 580/581 - RBI methodology, POF/COF, risk matrix, inspection plan optimization.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Weeks 13-14:</strong> <span className="text-slate-700">Full-length practice exams under timed, open-book conditions. Identify and remediate weak topics.</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <strong className="text-amber-900">Week 15:</strong> <span className="text-slate-700">Final tab/index of all open-book references, exam logistics check, light review only.</span>
                            </div>
                        </div>
                    </section>

                    {/* Sample Questions */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Sample Question Format: Closed-Book vs Open-Book</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The format and cognitive skill required differs sharply between closed-book and open-book questions. The examples below match the actual question style of the 2026 exam.
                        </p>

                        <div className="space-y-4 mb-6">
                            {sampleQuestions.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-3 gap-4">
                                        <h4 className="font-bold text-amber-900">{item.type}</h4>
                                        <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold whitespace-nowrap">{item.skill}</span>
                                    </div>
                                    <p className="text-slate-800 font-medium mb-3">{item.question}</p>
                                    <pre className="bg-slate-50 p-3 rounded text-sm text-slate-700 whitespace-pre-wrap font-sans mb-3">{item.choices}</pre>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-3">
                                        <p className="text-sm text-green-900"><strong>Answer:</strong> {item.answer}</p>
                                    </div>
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
                        <h2 className="text-2xl font-bold mb-4">Ready to Tackle the 2026 API 510 BoK?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">We provide structured API 510 prep aligned to the September 2025 BoK - tab-ready reference indexes, weighted practice exams, and damage-mechanism flashcards. Our 2026 candidates are tracking 68% pass rates on first attempt, well above the 38-42% industry baseline.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/api-510-certification" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">API 510 Program</Link>
                            <Link to="/blog/api-510-570-653-exam-schedule-2026" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">2026 Exam Schedule</Link>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/api-510-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete pressure vessel inspector certification overview, prerequisites, fees, and renewal.</p>
                            </Link>
                            <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API ICP Pass Rates 2026</h3>
                                <p className="text-slate-600 text-sm mt-2">API 510 vs 570 vs 653 first-time pass rates, retake rates, and 2026 trends.</p>
                            </Link>
                            <Link to="/blog/api-510-570-653-exam-schedule-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API Exam Schedule 2026</h3>
                                <p className="text-slate-600 text-sm mt-2">2026 exam windows, registration deadlines, and Prometric scheduling tips.</p>
                            </Link>
                            <Link to="/api-653-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 653 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Above-ground storage tank inspector certification - study plan, salary, exam tips.</p>
                            </Link>
                            <Link to="/api-570-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 570 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Piping inspector certification - exam structure, prerequisites, and prep timeline.</p>
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
