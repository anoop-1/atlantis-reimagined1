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
    { question: "How much does the AWS CWI exam cost in 2026?", answer: "The AWS CWI exam fee in 2026 is $1,150 for AWS Members and $1,335 for Non-Members. This is the body-of-knowledge exam fee covering all three parts (Part A Fundamentals, Part B Practical, Part C Code Book). On top of the exam fee, candidates must pay a $250 non-refundable application/processing fee to AWS regardless of membership status. The optional 5-day pre-exam seminar costs an additional $1,725 for Members and approximately $1,925 for Non-Members. Bottom-line minimum AWS-direct cost without seminar: $1,400 for Members, $1,585 for Non-Members. With the recommended seminar: $3,125 for Members, $3,510 for Non-Members. These figures reflect AWS's most recent fee schedule effective for 2026 testing windows." },
    { question: "Is the AWS CWI seminar worth $1,725?", answer: "For most first-time candidates, yes - the 5-day pre-exam seminar pays for itself by raising pass rates from roughly 65% (self-study) to 80-85% (seminar attendees). The seminar covers Part A theory, Part C code book navigation under timed conditions, and proctor-led mock exams. The math is straightforward: a single retake costs $510 per part ($1,530 if all three parts are failed), which exceeds the seminar fee. Candidates already holding strong welding/QC backgrounds with 5+ years of code experience may skip the seminar and self-study using the CWI Pre-Seminar Reference Materials ($300-$450). For career-changers, technicians transitioning from production welding, or anyone weak on AWS D1.1 code navigation, the seminar is the single highest-ROI line item in the entire CWI investment." },
    { question: "What does a CWI retake cost if I fail one part?", answer: "AWS allows individual part retakes - you do not have to repay the full $1,150 exam fee if you fail one or two parts. Each individual part retake (Part A, Part B, or Part C) costs approximately $510 for Members and $595 for Non-Members. You have a 12-month retest window from your original exam date, and a maximum of two retakes are allowed within that window before you must restart the full application process. If you fail all three parts and want to retake everything, the smarter path is usually to repay the full exam fee rather than three individual retakes. Most candidates who fail fail only Part B (Practical) - the hands-on Book of Specifications portion - so the typical retake bill is $510 plus any travel costs to the test site." },
    { question: "How much does the full 9-year CWI lifecycle cost?", answer: "Over a complete 9-year CWI lifecycle, total AWS-direct fees run approximately $2,650-$3,200 for Members and $3,100-$3,800 for Non-Members, assuming first-attempt pass and one renewal cycle. Breakdown: Year 1 initial cert ($1,400 minimum, $3,125 with seminar). Year 3 part-time renewal application ($395 Member / $560 Non-Member, no retest if continuous employment documented). Year 6 mid-cycle renewal ($395 / $560). Year 9 full 9-year recertification requiring a 40-question Part B-style retest ($760 Member / $935 Non-Member). Total decade-of-CWI investment with seminar, study materials, one endorsement, and one minor retake: $5,500-$7,500. Spread across nine years that is roughly $700/year - trivial against the $25,000-$45,000 annual salary uplift that CWI typically delivers." },
    { question: "What is the difference between AWS Member and Non-Member CWI pricing?", answer: "AWS Individual Membership costs $295/year and discounts the CWI exam by $185 ($1,150 vs $1,335), the seminar by approximately $200, retakes by $85 each, and the 9-year recertification by $175. If you plan to take only the CWI exam once and never renew or buy publications, membership barely breaks even. If you plan to renew, add endorsements, buy AWS D1.1/D1.5/B31.3 code books (which Members get at 25-40% off), or attend any AWS event, membership pays for itself in the first transaction. The vast majority of working CWIs join AWS as Individual Members for the lifetime cost savings on code books alone - D1.1 retails at $625 for Non-Members and $469 for Members ($156 saved on a single code). Recommendation: join AWS as a Member before paying any exam fee." },
    { question: "How much do CWI endorsements cost?", answer: "AWS CWI endorsements demonstrate competency in specific codes beyond the base D1.1 exam. Standard endorsement pricing (2026): AWS D1.1 Structural Steel Endorsement $390 Member / $475 Non-Member. AWS D1.5 Bridge Welding Code $390 / $475. API 1104 Pipeline Welding $475 / $590. ASME B31.1 Power Piping $475 / $590. ASME B31.3 Process Piping $475 / $590. Structural Steel Endorsement (D1.1 advanced) $390 / $475. Each endorsement is a 2-hour, 40-question open-book code-specific exam. Most working CWIs hold 2-4 endorsements over their career, adding $800-$2,400 in lifetime endorsement fees. Endorsements typically increase hourly billing rate by $5-$15/hour, recovering the fee within 50-100 billable hours." },
    { question: "What is SCWI and what does it cost?", answer: "Senior Certified Welding Inspector (SCWI) is AWS's advanced credential requiring an active CWI certification, six years of additional weld inspection experience after CWI certification, and passing a more rigorous Senior CWI exam focused on supervisory inspection, audit programs, and welding metallurgy. SCWI exam fee is $1,335 for Members and $1,520 for Non-Members. The application/processing fee remains $250. There is no separate pre-exam seminar - SCWI candidates are expected to self-study using AWS handbooks and code experience. Total SCWI upgrade cost: $1,585 Member / $1,770 Non-Member, plus study materials ($300-$500). SCWI holders typically command 15-25% premium over standard CWI salaries and qualify for chief inspector, NDT manager, and welding engineer roles. Roughly 8% of active CWIs hold SCWI." },
    { question: "Can I take the CWI exam internationally to save on travel?", answer: "Yes. AWS conducts CWI exams in over 50 countries through authorized international test centers. The exam fee structure is identical regardless of country - the savings come from drastically reduced travel and seminar costs. AWS partners and approved Authorized Training Sites in India, UAE, Saudi Arabia, Singapore, Brazil, and several European countries deliver the full seminar-plus-exam package locally, typically for 30-50% less than equivalent US-based seminar costs once airfare and US lodging are factored in. Atlantis NDT supports international CWI candidates by combining AWS-aligned pre-seminar coaching with hands-on practical inspection drills using real coupons, weld samples, and B-book exercises. The exam itself is identical worldwide - the certificate carries the same AWS authority whether issued from a Houston exam or a Dubai exam." },
    { question: "What hidden costs surprise CWI candidates?", answer: "Five hidden costs blindside most first-time CWI candidates. (1) AWS D1.1 code book - $469 Member / $625 Non-Member - mandatory for Part C and not included in any exam fee. (2) Pre-seminar reference materials and practice exams - $300-$500 - critical for self-study candidates. (3) Travel and lodging if seminar/exam is not local - $800-$2,500 for a week in Houston, Miami, or Las Vegas including airfare, hotel, meals, and ground transport. (4) Time off work - five seminar days plus one exam day equals six unpaid or PTO days, opportunity cost $1,800-$3,600 for a $75K technician. (5) Pre-exam vision test - $30-$80 - required documentation and easy to forget until application week. Total hidden costs typically add $2,000-$4,500 on top of the $1,400 minimum AWS fee, pushing realistic first-attempt all-in cost to $4,500-$8,000." },
    { question: "What is the ROI on a CWI certification?", answer: "CWI is one of the highest-ROI certifications in the welding and inspection industry. Typical pre-CWI welding inspector salary: $55,000-$75,000. Typical post-CWI inspector salary: $80,000-$110,000. Salary uplift averages $25,000-$35,000 annually. Against a realistic all-in first-year cost of $5,000-$8,000 including seminar, code book, travel, and code endorsement, the payback period is roughly 2-4 months of post-CWI employment. Over a 9-year certification cycle, total AWS+study spend rarely exceeds $7,500 while salary uplift compounds to $225,000-$315,000. Senior roles (SCWI, chief inspector, welding engineer) push annual compensation to $120,000-$160,000+, particularly in oil and gas, shipbuilding, nuclear, and offshore wind sectors. Bottom line: no other single $5K investment in the welding trade returns this much, this fast." }
];

const awsFeeStructure = [
    { component: "Application / Processing Fee", member: "$250", nonMember: "$250", notes: "Non-refundable, paid with application; required regardless of membership" },
    { component: "CWI Exam Fee (Parts A + B + C)", member: "$1,150", nonMember: "$1,335", notes: "Body-of-knowledge fee; covers Fundamentals, Practical, and Code Book" },
    { component: "Pre-Exam 5-Day Seminar (optional)", member: "$1,725", nonMember: "$1,925", notes: "Highly recommended for first-timers; raises pass rate from ~65% to ~85%" },
    { component: "Part A Retake (individual)", member: "$510", nonMember: "$595", notes: "Fundamentals only; permitted within 12 months of initial exam" },
    { component: "Part B Retake (individual)", member: "$510", nonMember: "$595", notes: "Practical / Book of Specifications; most commonly failed part" },
    { component: "Part C Retake (individual)", member: "$510", nonMember: "$595", notes: "Code Book (D1.1, API 1104, or B31.3); open-book, timed" },
    { component: "3-Year Renewal (Years 3 & 6)", member: "$395", nonMember: "$560", notes: "Continuous employment + 8 hrs PDH; no retest required" },
    { component: "9-Year Recertification", member: "$760", nonMember: "$935", notes: "40-question Part B-style retest required at 9-year mark" },
    { component: "AWS Individual Membership", member: "$295/yr", nonMember: "N/A", notes: "Recommended; pays back via discounts on exam, codes, and seminars" }
];

const nineYearTCO = [
    { year: "Year 1 — Initial Certification", member: "$3,125", nonMember: "$3,510", scope: "Application + exam + seminar (recommended path); excludes code book and travel" },
    { year: "Year 1 — No-Seminar Path", member: "$1,400", nonMember: "$1,585", scope: "Application + exam only (self-study); add ~$450 for D1.1 code book and study guides" },
    { year: "Year 3 — Part-Time Renewal", member: "$395", nonMember: "$560", scope: "Renewal application + employer continuous-employment letter; no retest" },
    { year: "Year 6 — Part-Time Renewal", member: "$395", nonMember: "$560", scope: "Renewal application + 8 hours documented PDH; no retest" },
    { year: "Year 9 — Full Recertification", member: "$760", nonMember: "$935", scope: "Mandatory Part B-style 40-question retest; resets the 9-year clock" },
    { year: "9-Year AWS-Only TCO", member: "$5,675", nonMember: "$6,500", scope: "Initial (with seminar) + 2 mid-cycle renewals + 9-year recert" },
    { year: "9-Year All-In TCO (realistic)", member: "$7,500–$9,500", nonMember: "$8,500–$11,000", scope: "Adds code books, travel, 1 endorsement, 1 retake, study materials" }
];

const partBreakdown = [
    { part: "Part A — Fundamentals", duration: "2 hours, 150 questions", format: "Closed-book multiple choice", retakeFee: "$510 Member / $595 Non-Member", coverage: "Welding processes, metallurgy, distortion, NDT methods, safety, basic math, terminology", passRate: "~75% first attempt" },
    { part: "Part B — Practical", duration: "2 hours, 46 questions", format: "Open Book of Specifications", retakeFee: "$510 Member / $595 Non-Member", coverage: "Visual inspection of plastic weld replicas using a proprietary B-Book of specs, drawings, and acceptance criteria", passRate: "~55% first attempt (lowest)" },
    { part: "Part C — Code Book", duration: "2 hours, 46 questions", format: "Open code book (D1.1 default)", retakeFee: "$510 Member / $595 Non-Member", coverage: "Navigation and application of AWS D1.1 (or API 1104 / ASME B31.1 / B31.3 if elected)", passRate: "~70% first attempt" }
];

const endorsementCosts = [
    { endorsement: "AWS D1.1 Structural Steel (Advanced)", memberFee: "$390", nonMemberFee: "$475", value: "Highest demand; structural fabricators and steel construction" },
    { endorsement: "AWS D1.5 Bridge Welding Code", memberFee: "$390", nonMemberFee: "$475", value: "Bridge fabrication, DOT and infrastructure projects" },
    { endorsement: "API 1104 Pipeline Welding", memberFee: "$475", nonMemberFee: "$590", value: "Oil & gas transmission pipelines; high billing-rate sector" },
    { endorsement: "ASME B31.1 Power Piping", memberFee: "$475", nonMemberFee: "$590", value: "Power plants, utilities, nuclear support facilities" },
    { endorsement: "ASME B31.3 Process Piping", memberFee: "$475", nonMemberFee: "$590", value: "Refineries, petrochemical plants, process facilities" },
    { endorsement: "AWS D1.1 Structural Steel Endorsement", memberFee: "$390", nonMemberFee: "$475", value: "Required by many structural EOR specifications" }
];

const hiddenCosts = [
    { item: "AWS D1.1 Code Book (2025 Edition)", cost: "$469 Member / $625 Non-Member", note: "Mandatory for Part C unless electing alternate code; not included in exam fee" },
    { item: "Pre-Seminar Reference Materials", cost: "$300–$500", note: "AWS official prep package; critical for self-study candidates" },
    { item: "Practice Exams & Question Banks", cost: "$150–$400", note: "Hobart, Real Education, TWI - multiple vendors; pick one full mock exam minimum" },
    { item: "Travel to Seminar/Exam City", cost: "$800–$2,500", note: "5–6 nights hotel, flights, ground transport, meals; varies by home city" },
    { item: "Time Off Work (Opportunity Cost)", cost: "$1,800–$3,600", note: "6 days unpaid or PTO at $300–$600/day typical inspector wage" },
    { item: "Pre-Exam Vision Examination", cost: "$30–$80", note: "Required documentation; standard optometrist visit" },
    { item: "Optional Review Course (online)", cost: "$300–$1,200", note: "Recommended if not attending the in-person seminar" }
];

const scwiUpgrade = [
    { aspect: "Eligibility", value: "Active CWI + 6 additional years of weld inspection experience post-CWI" },
    { aspect: "Application Fee", value: "$250 (non-refundable)" },
    { aspect: "Exam Fee", value: "$1,335 Member / $1,520 Non-Member" },
    { aspect: "Total Upgrade Cost (AWS only)", value: "$1,585 Member / $1,770 Non-Member" },
    { aspect: "Study Materials", value: "$300–$500 (no pre-exam seminar offered)" },
    { aspect: "Exam Format", value: "Closed-book Fundamentals + Open-code-book + Supervisory inspection scenarios" },
    { aspect: "Salary Premium vs CWI", value: "15–25% (typical $15K–$25K annual uplift)" },
    { aspect: "Holder Population", value: "Approximately 8% of active CWIs hold SCWI" }
];

const cwiVsAtlantis = [
    { feature: "Exam Fee", standardCWI: "$1,150 (Member)", atlantisPlus: "$1,150 (paid to AWS unchanged)" },
    { feature: "Pre-Exam Seminar", standardCWI: "$1,725 (5 days, classroom-only)", atlantisPlus: "Included with hands-on B-book drills and real-coupon practice" },
    { feature: "Practical (Part B) Coaching", standardCWI: "Mock B-book only", atlantisPlus: "Real plastic + steel coupons + acceptance/rejection drills" },
    { feature: "Code Navigation (Part C)", standardCWI: "Standard reading guide", atlantisPlus: "Timed code-book chase exercises against real RFI scenarios" },
    { feature: "International Test Centers", standardCWI: "US-centric", atlantisPlus: "India, UAE, Saudi, Singapore - cuts travel cost 40–60%" },
    { feature: "Pass-Rate Track Record", standardCWI: "~65% self-study / ~85% seminar", atlantisPlus: "88–92% across cohorts since 2023" },
    { feature: "Post-Exam Job Pipeline", standardCWI: "None", atlantisPlus: "Direct intro to Atlantis client base + NDT Connect marketplace" },
    { feature: "All-In Cost (USA candidate)", standardCWI: "$4,500–$8,000", atlantisPlus: "$3,200–$5,500 (international route)" }
];

const roiBreakdown = [
    { stage: "Pre-CWI: Welding Inspector / QC Trainee", years: "0–3 yrs", salary: "$45,000–$65,000", notes: "Production welding, visual inspection support, no authority to sign off" },
    { stage: "Pre-CWI: Senior QC Inspector", years: "3–5 yrs", salary: "$55,000–$75,000", notes: "Lead visual work; cannot independently approve welds to code" },
    { stage: "CWI Year 1 (just certified)", years: "5+ yrs exp + CWI", salary: "$80,000–$100,000", notes: "Authority to approve/reject welds per AWS D1.1; instant uplift of $20K–$30K" },
    { stage: "CWI + 1–2 Endorsements", years: "6–8 yrs", salary: "$95,000–$120,000", notes: "API 1104 or ASME B31.3 endorsements unlock pipeline/refinery work" },
    { stage: "SCWI (Senior CWI)", years: "12+ yrs", salary: "$115,000–$145,000", notes: "Supervisory inspection, audit programs, chief inspector roles" },
    { stage: "Independent CWI Consultant", years: "10+ yrs + CWI + endorsements", salary: "$95–$165/hour contract", notes: "Turnaround inspection, third-party witness, expert testimony" }
];

export default function CWIExamCost2026TotalInvestmentCalculator() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "CWI Exam Cost 2026: Total Investment Calculator (Exam + Seminar + Renewal)",
                "description": "AWS CWI 2026 cost breakdown: $1,150 exam, $1,725 seminar, $250 application, retakes, endorsements, 9-year recertification, and realistic all-in total cost of ownership across a CWI career.",
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
                title="CWI Exam Cost 2026: Total Investment Calculator (Exam + Seminar + Renewal)"
                description="AWS CWI 2026 cost: $1,150 exam, $1,725 seminar, full TCO over 9-year career. Member vs non-member pricing, endorsement fees, retake costs. Updated May 2026."
                keywords="cwi certification cost, aws cwi pricing, cwi exam cost, cwi total cost, aws cwi fee, cwi seminar cost, cwi renewal cost, cwi endorsement cost, scwi cost, cwi retake fee"
                canonical="https://atlantisndt.com/blog/cwi-exam-cost-2026-total-investment-calculator"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-800 to-slate-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Cost Calculator • Last updated May 2026 • 16 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">CWI Exam Cost 2026: Total Investment Calculator</h1>
                        <p className="text-xl text-blue-100 mb-8">The honest, line-item AWS CWI cost breakdown the price-list PDF doesn't show: $1,150 exam, $1,725 seminar, $250 application, retake math, endorsements, and the real 9-year total cost of ownership.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="CWI Exam Cost 2026: Total Investment Calculator" description="Full AWS CWI cost breakdown - exam, seminar, retakes, endorsements, and 9-year career TCO." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Opening cost table - first 400 words */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">AWS CWI 2026 Fee Schedule at a Glance</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The single number most candidates are searching for is the AWS CWI exam fee - <strong>$1,150 for AWS Members and $1,335 for Non-Members</strong> in 2026. But that figure alone is misleading. The CWI is not one fee; it is a stack of fees spread across application, exam, optional seminar, code books, retakes, renewals, and endorsements. The AWS price-list PDF currently ranking on Google shows only the published line items. It does not show the <em>real</em> total cost of ownership across a CWI's 9-year recertification cycle. This guide does.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Complete AWS CWI 2026 Fee Table</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Component</th>
                                        <th className="px-3 py-2 text-left font-semibold">AWS Member</th>
                                        <th className="px-3 py-2 text-left font-semibold">Non-Member</th>
                                        <th className="px-3 py-2 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awsFeeStructure.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.component}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.member}</td>
                                            <td className="px-3 py-2 font-semibold text-slate-700">{item.nonMember}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                            <p className="text-blue-900">
                                <strong>Minimum cash out the door, Year 1:</strong> $1,400 Member / $1,585 Non-Member (application + exam, no seminar, self-study). <strong>Recommended Year 1 spend:</strong> $3,125 Member / $3,510 Non-Member (adds the 5-day pre-exam seminar). <strong>Realistic all-in including travel, code book, and one endorsement:</strong> $5,000-$8,000 for US-based first-time candidates.
                            </p>
                        </div>
                    </section>

                    {/* 9-Year TCO Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Total Cost of Ownership Across a 9-Year CWI Cycle</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            CWI is not a one-time fee. The certification operates on a <strong>9-year cycle</strong> with two part-time renewals (at Year 3 and Year 6) and a mandatory full recertification at Year 9. Skipping any renewal forces a complete re-application and retest. Here is the AWS-only fee schedule across one full lifecycle.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Milestone</th>
                                        <th className="px-3 py-2 text-left font-semibold">AWS Member</th>
                                        <th className="px-3 py-2 text-left font-semibold">Non-Member</th>
                                        <th className="px-3 py-2 text-left font-semibold">Scope</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nineYearTCO.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.year}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.member}</td>
                                            <td className="px-3 py-2 font-semibold text-slate-700">{item.nonMember}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.scope}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                            <p className="text-blue-900">
                                <strong>Annualized cost over 9 years:</strong> A working CWI Member spends roughly <strong>$830/year</strong> all-in across the full cycle - including the front-loaded seminar, code book, one endorsement, and one minor retake. Against typical post-CWI salary uplift of $25,000-$35,000/year, the certification self-funds in <strong>under 2 months of post-CWI employment</strong> and pays back 30x+ over a decade.
                            </p>
                        </div>
                    </section>

                    {/* Part A/B/C Breakdown */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Part A, Part B, Part C - Individual Retake Math</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            One of the most misunderstood features of the AWS CWI is the <strong>individual part retake policy</strong>. If you fail just one part, you do not repay the full $1,150 exam fee - you pay a single-part retake of $510 (Member) or $595 (Non-Member). You have 12 months and up to two retakes per part before you must re-apply from scratch.
                        </p>

                        <div className="space-y-4 mb-8">
                            {partBreakdown.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                                        <h4 className="font-bold text-lg text-blue-900">{item.part}</h4>
                                        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">{item.passRate}</span>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                                        <div><strong>Duration:</strong> {item.duration}</div>
                                        <div><strong>Format:</strong> {item.format}</div>
                                        <div><strong>Retake Fee:</strong> {item.retakeFee}</div>
                                        <div className="md:col-span-2"><strong>Coverage:</strong> {item.coverage}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <div className="flex gap-3 mb-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <p className="text-amber-900 font-semibold">Part B is the bottleneck.</p>
                            </div>
                            <p className="text-amber-900">
                                Roughly 45% of first-attempt failures are on Part B (Practical) alone. Candidates who pass A and C but fail B can re-test just Part B for $510 - <em>provided they retest within 12 months</em>. Miss that window and the full $1,150 exam fee restarts. Atlantis CWI Plus cohorts specifically over-invest seminar time on Part B coupon drills for this reason.
                            </p>
                        </div>
                    </section>

                    {/* Endorsements */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">CWI Endorsement Pricing (D1.1, D1.5, API 1104, B31.1, B31.3)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Endorsements are 2-hour, 40-question, open-code-book exams that prove competency in a specific welding code beyond the base D1.1 Part C. They are the single fastest way to increase your billing rate after initial CWI - each endorsement typically adds $5-$15/hour to consulting and contract rates.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Endorsement</th>
                                        <th className="px-3 py-2 text-left font-semibold">Member Fee</th>
                                        <th className="px-3 py-2 text-left font-semibold">Non-Member Fee</th>
                                        <th className="px-3 py-2 text-left font-semibold">Career Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {endorsementCosts.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.endorsement}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.memberFee}</td>
                                            <td className="px-3 py-2 font-semibold text-slate-700">{item.nonMemberFee}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>Endorsement stack ROI:</strong> A CWI holding D1.1 + API 1104 + ASME B31.3 (the "structural + pipeline + process" trio) typically commands $10-$25/hr more than a base CWI in oil-and-gas and petrochemical work. Total endorsement spend: ~$1,340 Member. Payback: 80-130 billable hours.
                            </p>
                        </div>
                    </section>

                    {/* SCWI Upgrade */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Senior CWI (SCWI) Upgrade Cost</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            After six years of post-CWI experience, candidates may upgrade to <strong>Senior Certified Welding Inspector (SCWI)</strong> - AWS's advanced credential for supervisory and audit-program roles. SCWI is held by roughly 8% of active CWIs and typically commands a 15-25% salary premium.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">SCWI Aspect</th>
                                        <th className="px-3 py-2 text-left font-semibold">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scwiUpgrade.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.aspect}</td>
                                            <td className="px-3 py-2 text-slate-700">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* CWI vs Atlantis CWI Plus */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Standard AWS CWI vs Atlantis CWI Plus / Practical Route</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            AWS administers the exam itself identically worldwide - same questions, same passing scores, same certificate. What differs is the <strong>preparation, seminar quality, and total travel cost</strong>. For international candidates and US candidates open to travel, the Atlantis-supported CWI Plus route consistently delivers higher pass rates at 30-60% lower total cost than the AWS-direct seminar in Miami, Houston, or Las Vegas.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Feature</th>
                                        <th className="px-3 py-2 text-left font-semibold">Standard AWS CWI</th>
                                        <th className="px-3 py-2 text-left font-semibold">Atlantis CWI Plus / Practical</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cwiVsAtlantis.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.feature}</td>
                                            <td className="px-3 py-2 text-xs text-slate-700">{item.standardCWI}</td>
                                            <td className="px-3 py-2 text-xs text-blue-700 font-semibold">{item.atlantisPlus}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Hidden Costs */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Hidden Costs Most Candidates Miss</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The AWS price-list PDF that currently dominates the search snippet shows the published fees. It does not show the <strong>five hidden line items</strong> that turn a $1,400 exam into a $5,000-$8,000 first-year project. Most candidates discover these costs only after they have already committed to a test date.
                        </p>

                        <div className="space-y-4 mb-8">
                            {hiddenCosts.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                                        <h4 className="font-bold text-lg text-blue-900">{item.item}</h4>
                                        <span className="text-sm font-bold text-blue-700">{item.cost}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.note}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Realistic First-Year All-In Estimate:</strong> Application ($250) + Exam ($1,150) + Seminar ($1,725) + Code Book ($469) + Practice Materials ($350) + Travel ($1,500) + Time Off ($2,400) = <strong>~$7,844 for an AWS Member taking the recommended path</strong>. Self-study Members who already own the D1.1 code can compress this to ~$2,200-$2,800.
                            </p>
                        </div>
                    </section>

                    {/* ROI Calculation */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">CWI ROI: Salary Uplift vs Total Investment</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The point of any certification spend is the income it unlocks afterward. CWI consistently ranks among the highest-ROI credentials in the welding and inspection industry because the salary gap between pre-CWI and post-CWI inspectors is large and immediate.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Career Stage</th>
                                        <th className="px-3 py-2 text-left font-semibold">Experience</th>
                                        <th className="px-3 py-2 text-left font-semibold">Salary Range (USA)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roiBreakdown.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.stage}</td>
                                            <td className="px-3 py-2 text-xs">{item.years}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.salary}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <div className="flex gap-3 mb-2">
                                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-blue-900 font-semibold">CWI Payback Calculation</p>
                            </div>
                            <p className="text-blue-900 mb-3">
                                <strong>Typical first-year all-in CWI investment:</strong> $5,000-$8,000 (with seminar and travel). <strong>Typical first-year post-CWI salary uplift:</strong> $25,000-$35,000. <strong>Payback period:</strong> 2-4 months of post-CWI employment. <strong>10-year net financial benefit:</strong> $245,000-$345,000.
                            </p>
                            <p className="text-blue-900">
                                No other $5K investment in the welding trade returns this much, this fast, this reliably. The only certifications that come close on absolute uplift (API 510, API 653, ASNT Level III) require longer prerequisites and are typically held <em>in addition to</em> CWI, not instead of it.
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
                    <section className="bg-gradient-to-r from-blue-700 to-slate-800 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Cut Your CWI All-In Cost by 30-60%</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Atlantis CWI Plus combines AWS-aligned theory with hands-on practical coaching at international test centers in India, UAE, Saudi Arabia, and Singapore. Same AWS exam, same certificate, dramatically lower travel cost - and 88-92% cohort pass rate since 2023.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">Get CWI Plus Pricing</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">View CWI Program</Link>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/cwi-certification-requirements-cost-career-impact" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">CWI Certification Requirements, Cost & Career Impact</h3>
                                <p className="text-slate-600 text-sm mt-2">Eligibility prerequisites, experience documentation, and the full career impact of CWI certification.</p>
                            </Link>
                            <Link to="/blog/cwi-pass-rate-by-part-a-b-c-breakdown" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">CWI Pass Rate by Part A/B/C Breakdown</h3>
                                <p className="text-slate-600 text-sm mt-2">Statistical analysis of where candidates fail and how to allocate study time across Parts A, B, and C.</p>
                            </Link>
                            <Link to="/blog/ndt-salary-guide-2026-global" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">NDT Salary Guide 2026 (Global)</h3>
                                <p className="text-slate-600 text-sm mt-2">Salary benchmarks for CWI, ASNT Level II/III, API inspectors across USA, Middle East, Asia, and Europe.</p>
                            </Link>
                            <Link to="/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">AWS D1.1 Weld Acceptance Criteria - Comprehensive Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Deep dive on the D1.1 code book candidates must master for CWI Part C and structural welding inspection work.</p>
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
