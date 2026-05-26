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
    { question: "Is there a 2026 edition of API 653?", answer: "No. There is no 2026 edition of the API 653 standard. The current edition of API 653 (Tank Inspection, Repair, Alteration, and Reconstruction) remains the 5th Edition, originally published November 2014, maintained through subsequent addenda (Addendum 1 in 2018, Addendum 2 in 2020, and Addendum 3 in 2023). When candidates and tank owners search 'API 653 latest edition 2026' or 'API 653 2026', they are usually conflating two different things: the standard itself (a stable engineering document revised on a multi-year cycle) and the Body of Knowledge (BoK) exam window, which is updated by API ICP twice a year. The 2026 BoK windows reference the 5th Edition plus the latest addendum effective at the time of the exam." },
    { question: "What is the current edition of API 653?", answer: "The current edition of API 653 is the 5th Edition, published November 2014, with cumulative addenda issued thereafter. As of May 2026, Addendum 3 (issued April 2023) is the latest published addendum and is incorporated into the consolidated standard available on the API webstore. API typically issues new full editions on a ~10-year cycle, with addenda in between to capture interpretations, errata, and technical revisions. Tank owners and inspectors should always cite 'API 653, 5th Edition, November 2014, including Addendum 3 (April 2023)' when referencing the standard in inspection reports, repair documentation, and engineering calculations." },
    { question: "What is the API 653 Body of Knowledge (BoK)?", answer: "The Body of Knowledge (BoK) is a separate document published by API Individual Certification Programs (ICP) listing the exact publications, edition years, and sections that candidates will be tested on during a specific exam window. The BoK is NOT the standard itself — it is the exam syllabus. For each exam window, the BoK specifies which edition of API 653, API 650, API 651, API 575, API 12R1, API 2350, API 579-1/ASME FFS-1, and applicable ASME codes (Section V, Section VIII, Section IX, B31.3) are valid references. The BoK is refreshed twice yearly to align with newly issued addenda, errata, and standard revisions, so the BoK referenced in an April exam may differ from one referenced in a September exam." },
    { question: "What does the 2026 BoK window cover?", answer: "API ICP publishes two main exam windows per calendar year — Window 1 (roughly Q1-Q2) and Window 2 (roughly Q3-Q4). The 2026 BoK windows for API 653 reference API 653 5th Edition (November 2014) with Addendum 3 (April 2023), API 650 13th Edition with applicable addenda, API 651 5th Edition, API 575 4th Edition, API 12R1 6th Edition, API 2350 5th Edition, API 579-1/ASME FFS-1 2021 Edition, and selected sections of ASME Section V, Section VIII Division 1, Section IX, and B31.3. Candidates must verify the specific BoK posted for their exam date — never study against a prior window's BoK, as edition references and ASME section scoping change." },
    { question: "How do addenda get added to the API 653 BoK?", answer: "API addenda are not retroactively forced into active exam windows mid-cycle. When API publishes a new addendum (for example, Addendum 4 to API 653 5th Edition), API ICP typically waits until the next BoK refresh — usually 6 to 12 months later — before updating the exam BoK to reference the new addendum. This protects candidates who have already begun studying. The practical implication: even if a new addendum is published in, say, March 2026, candidates writing the exam in April 2026 will likely still be tested against the prior addendum referenced in the published BoK. Always check the dated BoK document on the API ICP website for your specific exam window." },
    { question: "What changed in API 653 5th Edition vs 4th Edition?", answer: "The transition from API 653 4th Edition (2009) to 5th Edition (November 2014) introduced several substantive changes: (1) Revised inspection interval methodology, with more explicit linkage to corrosion-rate-based and Risk-Based Inspection (RBI) calculations; (2) Expanded fitness-for-service references aligning with API 579-1/ASME FFS-1 methodology for tank-specific defect evaluation; (3) Updated requirements for tank bottom inspection including under-tank measurement techniques and release prevention barrier considerations; (4) Clarified repair and alteration sections distinguishing in-service vs out-of-service procedures; (5) Refined external inspection intervals and visual inspection scope; (6) Updated welding requirements and qualification procedures aligned with current ASME Section IX. Subsequent addenda (1-3) have layered additional clarifications, errata corrections, and technical updates on top of the 5th Edition baseline." },
    { question: "Does Addendum 3 change my tank inspection program?", answer: "Addendum 3 (April 2023) introduced incremental clarifications rather than fundamental rewrites. Tank owners operating under an established API 653 inspection program built on 5th Edition baseline generally do not need to redesign their integrity management approach because of Addendum 3 — but they DO need to review the addendum against existing procedures to identify (1) any clarified inspection scope items, (2) updated references to other API or ASME documents, (3) clarified acceptance criteria for specific defect types, and (4) editorial or numerical corrections that affect calculations. Most refineries and tank farm operators conduct a formal management-of-change review after each addendum is released, updating inspection procedures, internal training, and document references accordingly." },
    { question: "Which API 653 edition should I cite in my inspection report?", answer: "Cite the edition and addendum that was current at the time the inspection was performed AND that is consistent with your jurisdiction's adopted standard. Most jurisdictions and operating company specifications reference 'the latest edition' of API 653, which as of May 2026 means 5th Edition + Addendum 3. Format example: 'Inspection performed in accordance with API 653, 5th Edition (November 2014), including Addendum 3 (April 2023), in conjunction with API 650 13th Edition and API 579-1/ASME FFS-1 (2021).' Do not cite the standard as 'API 653 2026' — there is no 2026 edition. Citing it that way may invite challenges in audit, litigation, or insurance claim contexts." },
    { question: "Where can I download or buy API 653?", answer: "API 653 is a copyrighted standard sold through the official API Publications Webstore (publications.api.org). Pricing is approximately USD 220 for the PDF download and USD 275 for printed copy at typical list prices; API member companies receive discounted pricing. Many engineering firms maintain enterprise licenses through IHS Markit / S&P Global Engineering Workbench, which provides controlled access to the consolidated current edition plus all addenda. ASNT, university libraries, and some professional society chapters maintain reference copies. There is no legitimate free download — beware of pirated PDFs circulating online, which are often outdated (frequently 4th Edition without addenda) and legally compromised. Always work from the official current consolidated edition with the latest addendum applied." },
    { question: "I am taking the API 653 exam in 2026 — which edition do I study?", answer: "Study exactly the edition and addendum referenced in the API ICP Body of Knowledge document for your specific exam window. As of May 2026, both Window 1 and Window 2 of 2026 reference API 653 5th Edition (November 2014) including Addendum 3 (April 2023). Do not study an older edition (4th Edition is obsolete for exam purposes) and do not assume a future addendum will appear in your window — API ICP gives notice on the BoK refresh cycle. Download the BoK PDF for your exam window directly from the API ICP website, print it, and tick off each referenced document as you obtain it. Bring only those exact referenced editions into the exam room — bringing a different edition can result in the proctor confiscating your reference materials." }
];

const editionTimeline = [
    { edition: "API 653 1st Edition", published: "January 1991", latestAddendum: "Addenda through 1996", status: "Superseded", inForce: "1991 – 1995" },
    { edition: "API 653 2nd Edition", published: "December 1995", latestAddendum: "Addenda through 2001", status: "Superseded", inForce: "1995 – 2001" },
    { edition: "API 653 3rd Edition", published: "December 2001", latestAddendum: "Addendum 1 (2003), Addendum 2 (2005)", status: "Superseded", inForce: "2001 – 2009" },
    { edition: "API 653 4th Edition", published: "April 2009", latestAddendum: "Addendum 1 (2010), Addendum 2 (2012), Addendum 3 (2013)", status: "Superseded", inForce: "2009 – 2014" },
    { edition: "API 653 5th Edition", published: "November 2014", latestAddendum: "Addendum 1 (2018), Addendum 2 (2020), Addendum 3 (April 2023)", status: "CURRENT (as of May 2026)", inForce: "November 2014 – present" }
];

const bokWindows2026 = [
    { window: "2026 Window 1", bokEdition: "API 653 5th Ed (Nov 2014) + Add. 3 (Apr 2023)", examDates: "On/about Feb – May 2026 sittings", referenceList: "API 653, API 650 (13th Ed), API 651, API 575, API 12R1, API 2350, API 579-1/ASME FFS-1 (2021); ASME Sec. V, Sec. VIII Div. 1 (selected), Sec. IX, B31.3 (selected)" },
    { window: "2026 Window 2", bokEdition: "API 653 5th Ed (Nov 2014) + Add. 3 (Apr 2023)", examDates: "On/about Aug – Nov 2026 sittings", referenceList: "Same reference set as Window 1 unless API ICP publishes a refresh; candidates must verify the dated BoK PDF for their exam date" },
    { window: "Prior — 2025 Window 2", bokEdition: "API 653 5th Ed + Add. 3 (Apr 2023)", examDates: "Closed (historical)", referenceList: "Historical — do not use for current study" },
    { window: "Future — 2027 Window 1 (anticipated)", bokEdition: "TBD — likely 5th Ed + next addendum if published", examDates: "Anticipated Q1 2027", referenceList: "Will be published by API ICP ~3-6 months before exam window opens" }
];

const standardVsBok = [
    { aspect: "What it is", standard: "The engineering document itself — clauses, tables, figures, and acceptance criteria", bok: "The exam syllabus — a list of which publications and which sections you'll be tested on" },
    { aspect: "Who publishes it", standard: "API Standards Committee on Tanks", bok: "API Individual Certification Programs (ICP)" },
    { aspect: "How often updated", standard: "New edition ~every 10 years; addenda every 2-3 years", bok: "Twice per year (Window 1 and Window 2)" },
    { aspect: "Legally binding?", standard: "Adopted by jurisdiction, operator specs, and insurance contracts as the engineering authority", bok: "Not legally binding on operations — it is a candidate study guide" },
    { aspect: "Numbered as?", standard: "Edition 1, 2, 3, 4, 5 + Addendum 1, 2, 3…", bok: "Window 1 / Window 2 of a given calendar year" },
    { aspect: "Where to find it", standard: "API Publications Webstore (paid)", bok: "API ICP website (free PDF download)" }
];

const intervalChanges = [
    { topic: "External Inspection (visual)", fourthEd: "Maximum 5 years OR 1/4 corrosion rate based", fifthEd: "Maximum 5 years OR 1/4 corrosion rate based; clarified scope and documentation; tightened RBI integration" },
    { topic: "Internal Inspection (out-of-service)", fourthEd: "Up to 20 years maximum; RBI permitted to extend with documented justification", fifthEd: "Up to 20 years maximum; RBI extension methodology more rigorously defined; explicit linkage to corrosion rate confidence" },
    { topic: "Ultrasonic Thickness Inspection", fourthEd: "Performed during external inspections; minimum thickness rules per Section 4", fifthEd: "Updated Section 4 acceptance criteria; clarified scan plans for shell course transitions; aligned terminology with API 579" },
    { topic: "Fitness-for-Service", fourthEd: "References API 579 (2007)", fifthEd: "References API 579-1/ASME FFS-1 (current edition, now 2021); explicit Level 1/2/3 assessment hierarchy for tank-specific damage mechanisms" },
    { topic: "Repair & Alteration Documentation", fourthEd: "Repair plan requirements per Section 9", fifthEd: "Expanded Section 9; clearer demarcation between repair, alteration, and reconstruction; updated welding qualification references to ASME IX" }
];

const candidateStrategy = [
    { tip: "Print the dated BoK PDF first", description: "Before buying any references, download the exact BoK document for your exam window from the API ICP website. The BoK lists every publication, edition year, and section in scope. This is your single source of truth — every study decision flows from it." },
    { tip: "Verify your editions match the BoK exactly", description: "When you obtain API 653, confirm it says '5th Edition, November 2014' AND that the consolidated copy includes Addendum 3 (April 2023). A pirated or borrowed copy missing the latest addendum will fail you on 5-10% of exam questions where addendum-driven changes are tested." },
    { tip: "Cross-reference API 579-1/ASME FFS-1 to the BoK year", description: "The fitness-for-service standard is updated more frequently than API 653 itself. The 2026 BoK currently references API 579-1/ASME FFS-1 (2021 Edition). Bringing the 2016 edition to the exam will fail you on Level 2/3 assessment questions." },
    { tip: "Tab and index ONLY referenced sections", description: "The BoK explicitly tells you which sections of ASME Section V, VIII Div. 1, IX, and B31.3 are in scope — usually a narrow subset. Tab only those sections. Over-tabbing wastes exam-day reference time." },
    { tip: "Watch for mid-year BoK refreshes", description: "API ICP can refresh the BoK between Window 1 and Window 2 if a new addendum is published. Re-download the BoK 30 days before your exam to catch any refresh — don't rely on the version you printed 6 months earlier." }
];

const ownerImplications = [
    { area: "Inspection Program Documents", impact: "Update procedure references to cite 'API 653 5th Edition (November 2014), Addendum 3 (April 2023)' — not 'API 653 2026' or simply 'latest edition' without dated specificity. Auditors increasingly require dated references." },
    { area: "Inspection Intervals", impact: "5th Edition retains the 20-year maximum internal inspection interval and 5-year external — but RBI extension justification documentation is more rigorous than 4th Edition. Review existing RBI files to confirm they meet 5th Edition expectations." },
    { area: "Fitness-for-Service Workflows", impact: "5th Edition explicitly anchors FFS assessment to API 579-1/ASME FFS-1. Tank owners using legacy in-house FFS methods should formally align procedures with API 579 Level 1/2/3 hierarchy." },
    { area: "Repair Authorization", impact: "Confirm that all in-service and out-of-service repair packages cite the current edition + addendum. Repair plans citing 4th Edition are technically based on a superseded standard and may be challenged in litigation." },
    { area: "Vendor Qualification", impact: "Confirm that NDT vendors, inspection contractors, and engineering consultants are working from the 5th Edition + Addendum 3 consolidated copy. Audit their reference shelf if necessary." },
    { area: "Insurance and Regulatory Filings", impact: "Most property and liability insurance policies referencing API 653 implicitly track 'the latest edition.' Confirm policy language and clarify with insurers whether 'latest edition' means 5th + Addendum 3 today." }
];

export default function API653CurrentEdition2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 653 Current Edition 2026: Standard vs BoK Window Explained",
                "description": "API 653 is still 5th Edition (November 2014) with Addendum 3 (April 2023). The 2026 references in search queries point to BoK exam windows, not a new edition of the standard. Full edition timeline, BoK reference list, and implications for tank owners and candidates.",
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
                title="API 653 Current Edition 2026: Standard vs BoK Explained (5th Edition + Addenda)"
                description="API 653 is still 5th Edition (Nov 2014) + addenda — the '2026' refers to the BoK exam window. Edition timeline, BoK changes, exam implications. Updated May 2026."
                keywords="API 653 latest edition 2026, API 653 current edition, API 653 5th edition, API 653 addendum 3, API 653 BoK 2026, API 653 body of knowledge, API 653 standard vs BoK, API 653 edition history"
                canonical="https://atlantisndt.com/blog/api-653-current-edition-2026-vs-bok-window-explained"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">Standards Reference • Last updated May 2026 • 12 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Current Edition 2026: Standard vs BoK Window Explained</h1>
                        <p className="text-xl text-amber-100 mb-8">There is no 2026 edition of API 653. The current standard is still the 5th Edition (November 2014) with Addendum 3 (April 2023). "2026" in search queries refers to the API ICP Body of Knowledge exam window. Here's the full edition timeline, the BoK reference list, and what it means for tank owners and exam candidates.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="API 653 Current Edition 2026: Standard vs BoK Window Explained" description="API 653 is still 5th Edition + Addendum 3. The '2026' refers to the BoK exam window, not a new standard edition." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Opening Clarity */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">The Short Answer</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            If you searched for "API 653 latest edition 2026" or "API 653 current edition," here is the unambiguous answer. The current edition of the API 653 standard (Tank Inspection, Repair, Alteration, and Reconstruction) is the <strong>5th Edition, published November 2014</strong>, maintained through cumulative addenda — with <strong>Addendum 3 (April 2023)</strong> being the latest published addendum as of May 2026.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            There is no 2026 edition. When candidates and tank owners encounter the year "2026" associated with API 653, it almost always refers to the <strong>API ICP Body of Knowledge (BoK)</strong> exam window — a separate document that tells exam candidates which editions of which publications they will be tested on for a specific sitting. The standard itself is stable; the BoK is refreshed twice a year.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">API 653 Edition Timeline at a Glance</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">API 653 Edition</th>
                                        <th className="px-3 py-2 text-left font-semibold">Published</th>
                                        <th className="px-3 py-2 text-left font-semibold">Latest Addendum</th>
                                        <th className="px-3 py-2 text-left font-semibold">Status</th>
                                        <th className="px-3 py-2 text-left font-semibold">When in Force</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {editionTimeline.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.edition}</td>
                                            <td className="px-3 py-2">{item.published}</td>
                                            <td className="px-3 py-2 text-xs">{item.latestAddendum}</td>
                                            <td className={`px-3 py-2 text-xs font-semibold ${item.status.startsWith("CURRENT") ? "text-emerald-700" : "text-slate-500"}`}>{item.status}</td>
                                            <td className="px-3 py-2 text-xs">{item.inForce}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>Bottom line:</strong> Cite API 653 as "API 653, 5th Edition (November 2014), Addendum 3 (April 2023)" in any inspection report, repair authorization, or engineering calculation. Never cite it as "API 653 2026" — there is no such document.
                            </p>
                        </div>
                    </section>

                    {/* The Standard vs the BoK */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">The Standard vs the Body of Knowledge (BoK)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Most of the "API 653 2026" confusion online traces back to a single conflation: the standard and the exam syllabus are different documents, with different release cycles, different publishers within API, and different roles. Clarifying that distinction is the most useful thing this article can do for you.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Aspect</th>
                                        <th className="px-3 py-2 text-left font-semibold">The Standard (API 653)</th>
                                        <th className="px-3 py-2 text-left font-semibold">The BoK (Body of Knowledge)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {standardVsBok.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.aspect}</td>
                                            <td className="px-3 py-2 text-xs">{item.standard}</td>
                                            <td className="px-3 py-2 text-xs">{item.bok}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Operationally: the <strong>standard</strong> is what governs your real tank inspection, your repair authorization, and your engineering calculations. The <strong>BoK</strong> is what governs how you study for the certification exam. A tank owner doing day-to-day integrity management uses the standard and never opens the BoK. An exam candidate uses both — the standard for substance, the BoK for scope.
                        </p>
                    </section>

                    {/* 2026 BoK Windows */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">2026 BoK Windows for API 653</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API ICP publishes two main BoK refresh cycles per calendar year. Each window has a dated BoK PDF that you can download from the API ICP website. The table below summarizes the 2026 windows for API 653, including the reference publications list that defines what you can bring into the exam room and what you'll be tested on.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Window</th>
                                        <th className="px-3 py-2 text-left font-semibold">BoK Edition Referenced</th>
                                        <th className="px-3 py-2 text-left font-semibold">Effective For Exam Dates</th>
                                        <th className="px-3 py-2 text-left font-semibold">Reference Publications List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bokWindows2026.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.window}</td>
                                            <td className="px-3 py-2 text-xs">{item.bokEdition}</td>
                                            <td className="px-3 py-2 text-xs">{item.examDates}</td>
                                            <td className="px-3 py-2 text-xs">{item.referenceList}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>Verify before you study:</strong> The BoK above reflects publicly available API ICP information as of May 2026. Always download the dated BoK PDF for your specific exam window directly from API ICP — references and edition years are subject to API ICP refresh decisions.
                            </p>
                        </div>
                    </section>

                    {/* What Changed in Addendum 3 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">What Changed in Addendum 3 vs Prior Addenda</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Addendum 3 (April 2023) layered onto the 5th Edition baseline along with Addendum 1 (2018) and Addendum 2 (2020). The cumulative effect across these three addenda is a set of clarifications, errata corrections, and updated cross-references — not a rewrite of the standard. The most noteworthy changes include:
                        </p>

                        <div className="grid gap-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Updated cross-references to API 579-1/ASME FFS-1</h4>
                                <p className="text-slate-700">Addenda progressively aligned API 653 fitness-for-service citations with the current edition of API 579-1/ASME FFS-1 (now 2021), including updated Level 1 / Level 2 / Level 3 assessment hierarchy language.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Clarified inspection scope language</h4>
                                <p className="text-slate-700">Errata corrections and editorial clarifications to Section 6 (Inspection) covering external visual, internal, and ultrasonic thickness inspection scope, especially at shell course transitions and floor-to-shell weld areas.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Repair and alteration distinctions</h4>
                                <p className="text-slate-700">Addendum-level clarifications to Section 9 distinguishing between repair, alteration, and reconstruction, and aligning welding qualification language with current ASME Section IX.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Numerical and table corrections</h4>
                                <p className="text-slate-700">Routine errata corrections to tables, figure callouts, and equation references introduced during 5th Edition's first decade of use. These are individually minor but cumulatively important — out-of-date copies of the standard will fail audits on small numerical inconsistencies.</p>
                            </div>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            None of these changes amount to a re-engineering of the tank integrity philosophy embedded in the 5th Edition. They are quality-of-document updates. The strategic implication for tank owners is simply: keep working from a consolidated copy that incorporates Addendum 3, not a 2014-as-issued copy.
                        </p>
                    </section>

                    {/* 5th vs 4th Edition Implications */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">5th Edition vs 4th Edition — Implications for Tank Owners</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The substantive edition-level shift was the 4th-to-5th transition in November 2014. If your inspection program documents, repair plans, or RBI files still cite 4th Edition (April 2009), they are operating on a superseded standard. The most consequential changes were:
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Topic</th>
                                        <th className="px-3 py-2 text-left font-semibold">4th Edition (2009)</th>
                                        <th className="px-3 py-2 text-left font-semibold">5th Edition (Nov 2014, current)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {intervalChanges.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-xs">{item.topic}</td>
                                            <td className="px-3 py-2 text-xs">{item.fourthEd}</td>
                                            <td className="px-3 py-2 text-xs">{item.fifthEd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Action Items for Tank Owners</h3>
                        <div className="grid gap-4 mb-6">
                            {ownerImplications.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-lg mb-2 text-amber-900">{item.area}</h4>
                                    <p className="text-slate-700">{item.impact}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Implications for Candidates */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Implications for Exam Candidates</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            For candidates preparing for an API 653 sitting in 2026, the practical rule is simple: <strong>study the standard edition that is active in your specific exam window</strong>, as defined by the dated BoK PDF on the API ICP website. The same advice applies whether your sitting is in February, May, August, or November of 2026.
                        </p>

                        <div className="grid gap-4 mb-6">
                            {candidateStrategy.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-lg mb-2 text-amber-900">{idx + 1}. {item.tip}</h4>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                            <p className="text-amber-900">
                                <strong>One more candidate warning:</strong> The exam proctor will physically inspect your reference materials at check-in. References that do not match the BoK (wrong edition year, missing addendum, unauthorized markings) can be confiscated. Bringing the wrong edition is more common than candidates realize — and it is almost always fatal to the attempt.
                            </p>
                        </div>
                    </section>

                    {/* How Addenda Get Added to the BoK */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How Addenda Flow Into the API ICP BoK</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            A common candidate question is: "If API publishes a new addendum next month, will it suddenly appear on my exam?" The answer is almost always no. The API ICP BoK refresh cycle is deliberately decoupled from standard-publication events to protect candidates who have already committed study time. The typical sequence is:
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <ol className="space-y-3 text-slate-700 list-decimal pl-6">
                                <li><strong>API Standards Committee</strong> issues a new addendum (or new edition) on its own schedule.</li>
                                <li><strong>API ICP</strong> evaluates the addendum against the current BoK and decides when to incorporate it.</li>
                                <li><strong>API ICP</strong> publishes a refreshed BoK PDF on the ICP website, with a clearly stated effective date. The refresh typically aligns with the next Window 1 or Window 2 transition.</li>
                                <li><strong>Candidates</strong> sitting BEFORE the refresh effective date continue to be tested against the prior BoK. Candidates sitting AFTER the effective date study against the refreshed BoK.</li>
                                <li><strong>Operators and tank owners</strong>, by contrast, are expected to begin operating under the new addendum essentially immediately, subject to their own management-of-change processes.</li>
                            </ol>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            The decoupling means the standard you operate under and the standard you are examined against can briefly diverge — usually by no more than 6 to 12 months. This is normal and expected.
                        </p>
                    </section>

                    {/* Where to Get */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Where to Download or Buy API 653</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API 653 is a copyrighted standard. There is no legitimate free download. Authorized sources are:
                        </p>

                        <div className="grid gap-4 mb-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">API Publications Webstore</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">The primary source: <strong>publications.api.org</strong>. Sells the current consolidated 5th Edition + Addendum 3 as PDF download (around USD 220) or printed copy (around USD 275) at typical list prices. API member companies receive discounted pricing. Always confirm you are buying the consolidated current edition with the latest addendum applied.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">IHS Markit / S&P Global Engineering Workbench</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">Many engineering firms maintain enterprise licenses through IHS / S&P Engineering Workbench. This provides controlled, audited access to the current edition + addendum across an entire engineering organization.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Reference Libraries and Society Chapters</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">ASNT, ASME, AICHE, and university engineering libraries often maintain reference copies for member access. Useful for occasional consultation, but candidates and inspectors should own a personal current copy for daily use.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                            <p className="text-red-900">
                                <strong>Avoid pirated PDFs.</strong> The unofficial copies circulating on file-sharing sites are usually 4th Edition or 5th-Edition-as-issued (without addenda). They will fail you in audit, fail you in exam, and are not legal.
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
                        <h2 className="text-2xl font-bold mb-4">Need Help Aligning Your Tank Program with API 653 5th Edition + Addendum 3?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">Atlantis NDT provides API 653 inspection services, RBI program reviews, fitness-for-service assessments per API 579, and tank integrity gap analyses against the current edition + addendum. Our team includes ASNT Level III and API 653 certified inspectors.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request a Tank Integrity Review</Link>
                            <Link to="/api-653-certification" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">API 653 Certification Guide</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/api-653-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 653 Certification — Complete Overview</h3>
                                <p className="text-slate-600 text-sm mt-2">Prerequisites, exam structure, fees, and pass rates for the API 653 tank inspector certification.</p>
                            </Link>
                            <Link to="/blog/api-653-tank-inspection-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 653 Tank Inspection Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">External, internal, and ultrasonic inspection procedures for above-ground storage tanks under API 653.</p>
                            </Link>
                            <Link to="/blog/api-510-body-of-knowledge-2026-changes-explained" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 BoK 2026 Changes Explained</h3>
                                <p className="text-slate-600 text-sm mt-2">The parallel analysis for API 510 pressure vessel inspectors — what changed in the 2026 BoK windows.</p>
                            </Link>
                            <Link to="/blog/api-510-570-653-exam-schedule-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 / 570 / 653 Exam Schedule 2026</h3>
                                <p className="text-slate-600 text-sm mt-2">Confirmed 2026 exam dates, registration windows, and BoK refresh effective dates across all three API ICP certifications.</p>
                            </Link>
                            <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group md:col-span-2">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API ICP Pass Rates: 510 vs 570 vs 653 (2026)</h3>
                                <p className="text-slate-600 text-sm mt-2">Comparative pass rates, study hour benchmarks, and difficulty analysis across the three API ICP inspector certifications.</p>
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
