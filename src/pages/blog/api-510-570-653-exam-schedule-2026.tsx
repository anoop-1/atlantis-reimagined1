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
    { question: "When is the next API 510 exam in 2026?", answer: "The next API 510 paper-based test (PBT) window in 2026 is the Q2 administration running May 5-23, 2026, with application deadlines closing approximately March 18, 2026 (about 7 weeks before the exam window opens). After that, candidates can target the Q3 window of August 4-22, 2026 (apply by June 17, 2026) or the Q4 window of November 3-21, 2026 (apply by September 16, 2026). API ICP also offers Computer-Based Testing (CBT) at Prometric centers with rolling monthly availability for candidates who need faster scheduling. Always verify final dates at api.org as API has historically adjusted windows by 1-2 weeks." },
    { question: "What is the API 570 exam schedule for 2026?", answer: "API 570 follows the same three paper-based windows as the rest of the ICP family in 2026: May 5-23, August 4-22, and November 3-21. Applications typically open 12-14 weeks before each window and close 6-8 weeks before. For the August 2026 window, plan to submit your application package (including experience verification and PSM-101 affidavit) by mid-June 2026. CBT delivery for API 570 is also available year-round at Prometric centers, though seat availability tightens within 30 days of popular windows. Results are released approximately 8-10 weeks after the close of each PBT window — expect August 2026 results in early November 2026." },
    { question: "When is the API 653 exam scheduled in 2026?", answer: "API 653 (tank inspection) uses the standard API ICP calendar: three paper-based exam windows per year on May 5-23, 2026, August 4-22, 2026, and November 3-21, 2026. The application window for each exam typically opens 14 weeks prior and closes 6-8 weeks prior — for May 2026 that means applications were due by mid-March 2026. API 653 is also available via CBT at Prometric centers with rolling appointments, but most candidates choose PBT because it allows hard-copy reference standards and the cohort study advantage. Verify the latest dates at api.org before finalizing your prep schedule." },
    { question: "What is the application deadline for the 2026 API exams?", answer: "API ICP application deadlines fall approximately 6-8 weeks before the start of each exam window. For 2026: May 5-23 window requires applications by approximately March 18, 2026; August 4-22 window requires applications by approximately June 17, 2026; November 3-21 window requires applications by approximately September 16, 2026. The application includes experience documentation, employer attestation, government-issued ID, and fee payment. Late applications are not accepted and missed deadlines force candidates to wait for the next window (3-4 month delay). API recommends submitting at least 10 weeks before the window opens to allow for application review and any correction requests." },
    { question: "How do paper-based (PBT) and computer-based (CBT) API exams differ?", answer: "Paper-based testing (PBT) runs three times per year in fixed 3-week windows (May, August, November in 2026). Candidates take the exam at proctored locations and can bring hard-copy reference standards (API 510, API 570, API 653, ASME Section V, VIII, B31.3, etc.) with tabs and highlighting allowed. Computer-based testing (CBT) is offered year-round at Prometric centers with rolling appointments — most candidates can secure a seat within 2-6 weeks. CBT uses electronic versions of the standards (no personal markup) and the same question pool as PBT. PBT pass rates run slightly higher (45-55%) versus CBT (40-50%) because most veterans prefer the tabbed-book familiarity. Both deliveries award identical ICP certificates." },
    { question: "Which Body of Knowledge edition applies to 2026 API exams?", answer: "API publishes a Body of Knowledge (BoK) document for each ICP certification that lists the exact editions of API standards, ASME codes, and recommended practices in effect for each exam window. For 2026, the May, August, and November PBT windows all reference the 2026 BoK editions. API typically locks the BoK 6 months before the first window of the calendar year, so changes effective January 1, 2026 (addenda to API 510 11th Ed., API 570 5th Ed., and API 653 6th Ed.) apply to all 2026 administrations. Read our detailed breakdown at /blog/api-510-body-of-knowledge-2026-changes-explained before purchasing standards — buying the wrong edition is the #1 wasted-money mistake." },
    { question: "What happens if I miss an API exam window in 2026?", answer: "If you miss the application deadline for an API ICP window, you cannot test during that window — there are no late registrations or makeup sessions. Your options are: (1) Wait for the next PBT window (typically 3-4 months later), (2) Switch to CBT delivery at Prometric if your BoK edition is still current — CBT seats are usually available within 2-6 weeks, (3) Defer to 2027 if a BoK change is coming and your prep is incomplete. Application fees are non-refundable but exam fees can be transferred to the next window if requested via the APIcheck portal within 30 days of the missed deadline. Plan your application 10-12 weeks before any window to avoid missing it." },
    { question: "How early should I start studying for the August 2026 API exam?", answer: "For the August 4-22, 2026 window, start studying by early February 2026 — that gives you 26 weeks (6 months) of preparation, which aligns with the average 300-400 study hours successful candidates invest. Work backward from the exam date: Week 1-8 foundation building (read all BoK standards once), Week 9-16 deep-dive on weak content areas, Week 17-22 practice exams under timed conditions, Week 23-26 final review and memorization of key tables/formulas. Candidates with strong prior tank or vessel experience can compress this to 12-16 weeks. The application must be submitted by mid-June, so finalize study schedule and register at least 4 months out." },
    { question: "Where do I register for the 2026 API ICP exams?", answer: "All API ICP exam registration happens through the APIcheck portal at my.api.org/icp. Create an APIcheck account, complete the experience attestation form (signed by employer), upload supporting documents (resume, ID, education), and pay the exam fee. After API approves your application (typically 2-4 weeks), you receive an Authorization to Test (ATT) letter. For PBT delivery, the ATT confirms your seat in the chosen window. For CBT delivery, the ATT directs you to Prometric.com/api to schedule a specific date, time, and test center. Bring the ATT and government-issued photo ID on exam day. Always verify final dates and any window adjustments at api.org before locking in study plans." }
];

const examSchedule2026 = [
    { window: "API 510 Q2 (May 2026)", appOpen: "Jan 6, 2026", appClose: "Mar 18, 2026", examDates: "May 5-23, 2026", results: "Jul 17, 2026", bok: "2026 BoK (API 510 11th Ed. + 2026 Addenda)" },
    { window: "API 570 Q2 (May 2026)", appOpen: "Jan 6, 2026", appClose: "Mar 18, 2026", examDates: "May 5-23, 2026", results: "Jul 17, 2026", bok: "2026 BoK (API 570 5th Ed. + 2026 Addenda)" },
    { window: "API 653 Q2 (May 2026)", appOpen: "Jan 6, 2026", appClose: "Mar 18, 2026", examDates: "May 5-23, 2026", results: "Jul 17, 2026", bok: "2026 BoK (API 653 6th Ed. + 2026 Addenda)" },
    { window: "API 510 Q3 (Aug 2026)", appOpen: "Apr 7, 2026", appClose: "Jun 17, 2026", examDates: "Aug 4-22, 2026", results: "Oct 16, 2026", bok: "2026 BoK (API 510 11th Ed. + 2026 Addenda)" },
    { window: "API 570 Q3 (Aug 2026)", appOpen: "Apr 7, 2026", appClose: "Jun 17, 2026", examDates: "Aug 4-22, 2026", results: "Oct 16, 2026", bok: "2026 BoK (API 570 5th Ed. + 2026 Addenda)" },
    { window: "API 653 Q3 (Aug 2026)", appOpen: "Apr 7, 2026", appClose: "Jun 17, 2026", examDates: "Aug 4-22, 2026", results: "Oct 16, 2026", bok: "2026 BoK (API 653 6th Ed. + 2026 Addenda)" },
    { window: "API 510 Q4 (Nov 2026)", appOpen: "Jul 7, 2026", appClose: "Sep 16, 2026", examDates: "Nov 3-21, 2026", results: "Jan 15, 2027", bok: "2026 BoK (API 510 11th Ed. + 2026 Addenda)" },
    { window: "API 570 Q4 (Nov 2026)", appOpen: "Jul 7, 2026", appClose: "Sep 16, 2026", examDates: "Nov 3-21, 2026", results: "Jan 15, 2027", bok: "2026 BoK (API 570 5th Ed. + 2026 Addenda)" },
    { window: "API 653 Q4 (Nov 2026)", appOpen: "Jul 7, 2026", appClose: "Sep 16, 2026", examDates: "Nov 3-21, 2026", results: "Jan 15, 2027", bok: "2026 BoK (API 653 6th Ed. + 2026 Addenda)" },
    { window: "CBT (year-round)", appOpen: "Rolling", appClose: "21 days before seat", examDates: "Any Prometric seat 2026", results: "8 weeks after exam", bok: "2026 BoK (current at exam date)" }
];

const feeTable = [
    { item: "First-time application fee", amount: "$150", notes: "One-time, non-refundable" },
    { item: "Exam fee (PBT or CBT)", amount: "$945", notes: "Per attempt, per certification" },
    { item: "Recertification fee", amount: "$890", notes: "Every 3 years" },
    { item: "Retake fee (same year)", amount: "$695", notes: "Discounted retake within 12 months" },
    { item: "Prometric CBT seat fee", amount: "$50-75", notes: "Added to exam fee at scheduling" },
    { item: "Reference standards bundle", amount: "$800-1,200", notes: "API 510/570/653 + ASME V/VIII/B31.3" },
    { item: "Review course (optional)", amount: "$500-2,000", notes: "Boosts pass rate from ~45% to 65-75%" }
];

const prepTimeline = [
    { weeks: "Weeks 26-22", focus: "Foundation", actions: "Buy current-edition standards, read each BoK reference once, build personal index/tabs for the code books" },
    { weeks: "Weeks 21-16", focus: "Content mastery", actions: "Deep-dive each content area (inspection, NDE, welding, materials, RBI, repair). Take topic-specific quizzes" },
    { weeks: "Weeks 15-10", focus: "Calculation drills", actions: "Practice MAWP, remaining-life, t-min, corrosion-rate, and pressure-test calculations until automatic" },
    { weeks: "Weeks 9-6", focus: "Full-length practice", actions: "Take 3-4 full timed practice exams (closed-book except your tabbed standards). Identify weak content areas" },
    { weeks: "Weeks 5-3", focus: "Targeted remediation", actions: "Rebuild weak areas. Memorize key tables (Table 4.1 thickness, Table 5.1 MAWP limits, etc.)" },
    { weeks: "Weeks 2-1", focus: "Exam-day readiness", actions: "Light review, verify Prometric/test-center logistics, sleep schedule alignment, final tab check on all standards" }
];

const registrationSteps = [
    { step: "1. Create APIcheck account", detail: "Register at my.api.org/icp with valid email and government ID. Account verification takes 1-2 business days." },
    { step: "2. Complete experience attestation", detail: "Document 10+ years industry experience with 5+ years equipment-specific work. Employer must sign attestation form." },
    { step: "3. Upload supporting documents", detail: "Resume, degree certificates, government-issued photo ID, any prior API or ASNT certifications." },
    { step: "4. Pay application + exam fees", detail: "$150 application + $945 exam = $1,095 total at first registration. Pay via credit card in APIcheck portal." },
    { step: "5. Wait for API approval", detail: "API reviews applications in 2-4 weeks. You receive an Authorization to Test (ATT) email when approved." },
    { step: "6. Schedule with Prometric (CBT only)", detail: "Go to prometric.com/api with your ATT, pick a test center and date. PBT candidates skip this step — your seat is auto-assigned for the chosen window." },
    { step: "7. Confirm exam day logistics", detail: "Print ATT, prepare tabbed reference standards (PBT only), arrive 30 min early with photo ID matching APIcheck registration." }
];

const missedWindowOptions = [
    { option: "Switch to CBT delivery", detail: "If you missed the PBT application deadline but still want to test soon, CBT seats are usually available within 2-6 weeks at Prometric centers. CBT uses the same question pool and BoK as PBT." },
    { option: "Defer to next PBT window", detail: "Apply early for the next quarterly window (May → Aug, Aug → Nov, Nov → next May). Application fees ($150) carry forward; exam fees ($945) transfer if requested within 30 days via APIcheck." },
    { option: "Use the gap for deeper prep", detail: "A missed window often means you weren't ready anyway. Re-baseline study hours: candidates with 400+ hours hit 80%+ pass rates vs. 25% for those with 100-150 hours." },
    { option: "Stack a second certification", detail: "Use the 3-4 month gap to start prep on a complementary ICP (e.g., add API 570 to your API 510 plan). Triple-crown holders earn $130K-$180K vs. single-cert $105K-$140K." }
];

export default function API510570653ExamSchedule2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 510, 570, 653 Exam Schedule 2026: Application Deadlines + Exam Windows",
                "description": "Full 2026 API ICP exam schedule for 510, 570, 653 inspectors. Application deadlines, exam windows, result dates. Plan your prep with our timeline. Updated May 2026.",
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
                title="API 510 / 570 / 653 Exam Schedule 2026 — All Dates & Centers"
                description="Complete 2026 API 510, 570, 653 exam dates + test centers by region. Application deadlines, retake policy, prep course timing. Updated monthly."
                keywords="api 510 exam schedule 2026, api 570 exam schedule 2026, api 653 exam schedule 2026, API ICP exam dates 2026, API exam windows 2026, API application deadline 2026, API CBT schedule, Prometric API"
                canonical="https://atlantisndt.com/blog/api-510-570-653-exam-schedule-2026"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">Exam Schedule • Last updated May 2026 • 12 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510, 570, 653 Exam Schedule 2026</h1>
                        <p className="text-xl text-amber-100 mb-8">Every 2026 API ICP exam window, application deadline, BoK edition, and result-release date in one live table — plus a prep timeline that works backward from your target window. Updated May 2026.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="API 510, 570, 653 Exam Schedule 2026" description="Live 2026 API ICP exam windows, deadlines, and prep timeline." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Opening Schedule Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">2026 API ICP Exam Schedule (Live Table)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Below is the consolidated 2026 schedule for the three flagship API Individual Certification Programs — <Link to="/api-510-certification" className="text-amber-700 underline">API 510 (Pressure Vessel Inspector)</Link>, <Link to="/api-570-certification" className="text-amber-700 underline">API 570 (Piping Inspector)</Link>, and <Link to="/api-653-certification" className="text-amber-700 underline">API 653 (Tank Inspector)</Link>. Paper-based testing (PBT) runs in three fixed 3-week windows. Computer-based testing (CBT) is offered year-round at Prometric centers. All dates reflect API's published 2026 calendar — always verify final dates at api.org before locking your prep schedule.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Exam Window</th>
                                        <th className="px-3 py-2 text-left font-semibold">Application Open</th>
                                        <th className="px-3 py-2 text-left font-semibold">Application Close</th>
                                        <th className="px-3 py-2 text-left font-semibold">Exam Dates</th>
                                        <th className="px-3 py-2 text-left font-semibold">Result Notification</th>
                                        <th className="px-3 py-2 text-left font-semibold">BoK Edition Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examSchedule2026.map((row, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-amber-900">{row.window}</td>
                                            <td className="px-3 py-2">{row.appOpen}</td>
                                            <td className="px-3 py-2 font-semibold text-orange-700">{row.appClose}</td>
                                            <td className="px-3 py-2">{row.examDates}</td>
                                            <td className="px-3 py-2">{row.results}</td>
                                            <td className="px-3 py-2 text-xs">{row.bok}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Quick read:</strong> Three PBT windows in 2026 — May 5-23, August 4-22, and November 3-21. Applications close 6-8 weeks before each window. Result emails arrive ~8 weeks after the window closes. CBT delivery is rolling and the fastest path if you've already missed a PBT deadline.
                            </p>
                        </div>
                    </section>

                    {/* How API ICP Windows Work */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How API ICP Exam Windows Work: PBT vs CBT</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API's Individual Certification Programs deliver each exam through two parallel channels — paper-based testing (PBT) and computer-based testing (CBT). Understanding the difference determines how you plan your study, your standards purchase, and your test-day strategy.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="text-xl font-bold mb-3 text-amber-900">Paper-Based Testing (PBT)</h3>
                                <ul className="space-y-2 text-slate-700 text-sm">
                                    <li><strong>Frequency:</strong> 3 fixed windows per year (May, August, November)</li>
                                    <li><strong>Window length:</strong> 3 weeks (typically Tue-Sat each week)</li>
                                    <li><strong>References:</strong> Hard-copy standards with personal tabs and highlighting</li>
                                    <li><strong>Pass rate:</strong> 45-55% (slightly higher than CBT)</li>
                                    <li><strong>Best for:</strong> Veteran candidates who study with marked-up books</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h3 className="text-xl font-bold mb-3 text-amber-900">Computer-Based Testing (CBT)</h3>
                                <ul className="space-y-2 text-slate-700 text-sm">
                                    <li><strong>Frequency:</strong> Rolling year-round at Prometric centers</li>
                                    <li><strong>Booking lead-time:</strong> 2-6 weeks typical</li>
                                    <li><strong>References:</strong> Electronic standards (no personal markup)</li>
                                    <li><strong>Pass rate:</strong> 40-50% (slightly lower than PBT)</li>
                                    <li><strong>Best for:</strong> Candidates who missed a PBT deadline or want flexibility</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            Both deliveries award the identical ICP certificate, draw from the same question bank, and use the same Body of Knowledge. The choice is purely about timing, study habit, and whether you've invested time tabbing physical standards.
                        </p>
                    </section>

                    {/* Application Deadline Math */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Application Deadline Math: How Far Ahead to Plan</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The number-one mistake first-time candidates make is registering too late. API ICP applications must be submitted, reviewed, and approved <em>before</em> the application window closes — and API needs 2-4 weeks to review experience documentation. Use this math:
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Application window opens:</strong> ~14 weeks before exam window starts</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Application window closes:</strong> 6-8 weeks before exam window starts</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>API review/approval:</strong> 2-4 weeks after submission</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Authorization to Test (ATT) issued:</strong> 4-6 weeks before exam date</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Recommended submission buffer:</strong> 10-12 weeks before exam window</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Worked example — August 2026 window:</strong> Exam dates Aug 4-22, 2026 → application closes ~Jun 17, 2026 → for a safety buffer submit by ~May 27, 2026 → start gathering employer attestation and documents by ~Apr 15, 2026. If you read this in late May 2026, you're already late for August PBT and should pivot to CBT or target the November window.
                            </p>
                        </div>
                    </section>

                    {/* BoK Edition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Which Body of Knowledge Edition Applies to Each 2026 Window?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API publishes a Body of Knowledge (BoK) document for each ICP certification listing the exact standards editions and addenda in force for each exam window. For all three 2026 windows (May, August, November), the same 2026 BoK applies — meaning you can study once and target any window. However, the 2026 BoK includes meaningful changes from 2025 that affect what you must memorize.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500 mb-6">
                            <h4 className="font-bold text-lg mb-3">Standards in force for 2026 BoK</h4>
                            <ul className="text-slate-700 space-y-2">
                                <li><strong>API 510:</strong> 11th Edition + 2026 Addenda + ASME Section V, VIII Div. 1, B31.3</li>
                                <li><strong>API 570:</strong> 5th Edition + 2026 Addenda + ASME B31.3 + API 574/577/578</li>
                                <li><strong>API 653:</strong> 6th Edition + 2026 Addenda + API 650 + API 579-1/ASME FFS-1</li>
                                <li><strong>Common references:</strong> ASME Section V (NDE), Section IX (Welding Qualifications)</li>
                            </ul>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            Before purchasing or marking up standards, read our full BoK changes breakdown at <Link to="/blog/api-510-body-of-knowledge-2026-changes-explained" className="text-amber-700 underline">/blog/api-510-body-of-knowledge-2026-changes-explained</Link> — using the wrong edition is the most expensive avoidable mistake in API prep.
                        </p>
                    </section>

                    {/* Registration Steps */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Prometric vs APIcheck: 7-Step Registration Process</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            All API ICP registration flows through APIcheck (my.api.org/icp). Prometric only handles CBT seat scheduling after API approves your application. Here is the exact step-by-step:
                        </p>

                        <div className="space-y-3 mb-8">
                            {registrationSteps.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-amber-900 mb-1">{item.step}</h4>
                                    <p className="text-slate-600 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Fee Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">2026 API ICP Fee Table</h2>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Item</th>
                                        <th className="px-4 py-3 text-left font-semibold">Amount (USD)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeTable.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.item}</td>
                                            <td className="px-4 py-3 text-amber-700 font-semibold">{item.amount}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            For a complete breakdown of fee differences across API 510 vs 570 vs 653, plus historical pass-rate data, see <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="text-amber-700 underline">/blog/api-icp-pass-rates-510-vs-570-vs-653-2026</Link>.
                        </p>
                    </section>

                    {/* Missed Window */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">What to Do If You Miss a 2026 Window</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Missing an application deadline is recoverable — there are four practical options. None require waiting a full year:
                        </p>

                        <div className="space-y-3 mb-6">
                            {missedWindowOptions.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-amber-900 mb-1">{idx + 1}. {item.option}</h4>
                                    <p className="text-slate-600 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Atlantis recommendation:</strong> If you've missed two consecutive PBT windows, your prep was probably under-scoped. Reset to a full 26-week timeline targeting the next-but-one window rather than rushing CBT — pass rate gains from the extra study time exceed any income lost by the delay.
                            </p>
                        </div>
                    </section>

                    {/* Prep Timeline */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Recommended Prep Timeline (Working Backward from Each Window)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Successful first-time candidates invest 300-400 study hours across approximately 26 weeks. This timeline plugs into any 2026 window — count backward from the exam dates listed in the schedule table above.
                        </p>

                        <div className="space-y-3 mb-8">
                            {prepTimeline.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-bold text-amber-900">{item.weeks}</h4>
                                        <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">{item.focus}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.actions}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Window-specific countdown:</strong> Target the August 4-22, 2026 window → start studying by Feb 2, 2026. Target November 3-21, 2026 → start by May 4, 2026. Target May 2027 → start by Nov 2, 2026. Anchor your start date to the BoK lock and exam window, not your application date.
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
                        <h2 className="text-2xl font-bold mb-4">Ready to Lock In Your 2026 API Exam Window?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">Atlantis NDT runs structured prep cohorts aligned to each PBT window — 26-week curriculum, weekly live sessions, full practice exam bank, and personal scheduling support to make sure you never miss a deadline. Cohort pass rates hit 65-75%.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">Join 2026 Prep Cohort</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Browse Review Courses</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/api-510-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Pressure vessel inspector guide</p>
                            </Link>
                            <Link to="/api-570-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 570 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Piping inspector guide</p>
                            </Link>
                            <Link to="/api-653-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 653 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Tank inspector guide</p>
                            </Link>
                            <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API ICP Pass Rates 2026</h3>
                                <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 comparison</p>
                            </Link>
                            <Link to="/blog/api-510-body-of-knowledge-2026-changes-explained" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 BoK 2026 Changes</h3>
                                <p className="text-slate-600 text-sm mt-2">What changed for the 2026 exams</p>
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
