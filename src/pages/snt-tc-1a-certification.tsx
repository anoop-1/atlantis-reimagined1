// /* SNT_TC_1A_PILLAR_v1 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Building2, Layers, Scale, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import TableOfContents from "@/components/TableOfContents";
import { buildTechArticleSchema } from "@/data/author-schema";

const levelsAtAGlance = [
    { level: "Level I", role: "Performs specific calibrations, conducts specific examinations, and records results following written instructions. Works under Level II/III supervision." },
    { level: "Level II", role: "Sets up and calibrates equipment, conducts examinations to written procedures, interprets and evaluates results against acceptance criteria, and reports results. The standard production-inspector certification." },
    { level: "Level III", role: "Develops and approves written practices and procedures, interprets codes and specifications, trains and examines Level I/II personnel, and assumes technical responsibility for the NDT program." },
];

const comparisons = [
    {
        scheme: "ANSI/ASNT CP-189",
        icon: Scale,
        summary: "A more prescriptive ASNT standard: mandatory ASNT-administered general and specific exams, stricter documentation, and greater certification portability than SNT-TC-1A — but still employer-issued, not third-party.",
        href: "/blog/asnt-snt-tc-1a-vs-cp-189-comparison",
        linkLabel: "Full SNT-TC-1A vs CP-189 comparison →",
    },
    {
        scheme: "ISO 9712",
        icon: Building2,
        summary: "The international third-party central-certification model: an accredited body (not the employer) examines and certifies, and the credential is portable between employers. Dominant outside North America.",
        href: "/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison",
        linkLabel: "Full SNT-TC-1A vs ISO 9712 comparison →",
    },
    {
        scheme: "ASNT ACCP",
        icon: FileText,
        summary: "ASNT's own third-party portable alternative — ASNT (not the employer) issues the certificate, so it travels between employers without a new written practice. Available at Level II and III only.",
        href: "/blog/asnt-accp-level-2-level-3-complete-path-explained-2026",
        linkLabel: "Full SNT-TC-1A vs ACCP path guide →",
    },
];

const faqs = [
    { question: "Is SNT-TC-1A itself a certification?", answer: "No. SNT-TC-1A (ASNT's Recommended Practice No. SNT-TC-1A) is a guideline document. It is not issued to individuals and does not certify anyone by itself. Each employer writes its own Written Practice that follows SNT-TC-1A's recommendations, and it is the employer — not ASNT — that examines, qualifies, and certifies its own personnel under that Written Practice." },
    { question: "Who actually certifies an inspector under SNT-TC-1A?", answer: "The employer does. This is the single most confused point when SNT-TC-1A is compared to other schemes: under SNT-TC-1A the employer is the certifying agency, training hours and experience are logged against the employer's own Written Practice, and the resulting certification is not automatically portable to a new employer — a new employer's Written Practice governs from day one at the new job." },
    { question: "What is the difference between SNT-TC-1A and ACCP?", answer: "SNT-TC-1A is employer-based: your employer's Written Practice governs your qualification and your employer issues the certificate. ACCP is ASNT's own third-party program: ASNT examines and certifies you directly, so the certificate is portable between employers without a new Written Practice. See the full comparison for exam structure and levels covered." },
    { question: "What is the difference between SNT-TC-1A and ISO 9712?", answer: "SNT-TC-1A is an employer-administered Recommended Practice dominant in North America. ISO 9712 is a third-party central-certification standard, in which an ISO 17024-accredited certification body — not the employer — examines and certifies, and the certificate is portable between employers. See the full comparison for recognition by region and recertification cycles." },
    { question: "Does Canada use SNT-TC-1A or a different scheme?", answer: "Both are used. Canada's federal NDT personnel standard is CAN/CGSB-48.9712, Canada's adoption of ISO 9712 — the standard document is published by the Canadian General Standards Board, but certification is administered by Natural Resources Canada's National NDT Certification Body (NDTCB). ASNT SNT-TC-1A is separately accepted for US-headquartered operators and cross-border crews. See the CGSB comparison section below." },
    { question: "What is CP-189 and how is it different from SNT-TC-1A?", answer: "CP-189 (ANSI/ASNT CP-189) is a more prescriptive ASNT standard than SNT-TC-1A — it mandates ASNT-administered general and specific examinations rather than letting the employer write its own, and produces a more portable credential. Both remain employer-issued, unlike ISO 9712 or ACCP. See the full SNT-TC-1A vs CP-189 comparison." },
];

export default function SntTc1aCertification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/snt-tc-1a-certification",
                headline: "What Is SNT-TC-1A? Employer-Based NDT Certification Explained (2026)",
                description: "SNT-TC-1A explained: ASNT's Recommended Practice for NDT personnel qualification, why it is an employer-based (not ASNT-issued) model, Level I/II/III at a glance, and how it compares to CP-189, ISO 9712, ACCP, and Canada's CGSB-derived scheme.",
                datePublished: "2026-08-11",
                dateModified: "2026-08-11",
                section: "NDT Certifications",
                keywords: "SNT-TC-1A, snt tc 1a, what is SNT-TC-1A, employer-based certification, ASNT SNT-TC-1A, CP-189, ISO 9712, ACCP, CGSB, NDTCB",
                dependencies: "ASNT SNT-TC-1A, ANSI/ASNT CP-189, ISO 9712, ASNT ACCP, CAN/CGSB-48.9712",
            }),
            {
                "@type": "DefinedTerm",
                name: "SNT-TC-1A",
                description: "ASNT's Recommended Practice for personnel qualification and certification in nondestructive testing, defining an employer-based model in which the employer — not ASNT — issues the certification following a written practice aligned to the document.",
                inDefinedTermSet: { "@type": "DefinedTermSet", name: "Atlantis NDT Glossary", url: "https://atlantisndt.com/glossary" },
                url: "https://atlantisndt.com/snt-tc-1a-certification",
            },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) },
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="What Is SNT-TC-1A? Employer-Based NDT Certification Explained (2026)"
                description="SNT-TC-1A explained in plain terms: it's ASNT's Recommended Practice, not itself a certification. Learn the employer-based model, Level I/II/III at a glance, and how it compares to CP-189, ISO 9712, ACCP, and Canada's CGSB scheme."
                keywords="SNT-TC-1A, snt tc 1a, what is SNT-TC-1A, snt-tc-1a meaning, employer-based NDT certification, ASNT SNT-TC-1A, SNT-TC-1A vs CP-189, SNT-TC-1A vs ISO 9712, SNT-TC-1A vs ACCP, SNT-TC-1A Canada CGSB"
                canonical="https://atlantisndt.com/snt-tc-1a-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
            <TableOfContents items={[
                { id: "what-is-it", label: "What SNT-TC-1A Is" },
                { id: "employer-based", label: "Why It's Employer-Based" },
                { id: "levels", label: "Levels I / II / III" },
                { id: "comparisons", label: "SNT-TC-1A vs Other Schemes" },
                { id: "cgsb", label: "SNT-TC-1A vs Canada's CGSB Scheme" },
                { id: "faq", label: "FAQ" },
            ]} />
            <QuickAnswerBox
                question="What is SNT-TC-1A?"
                answer="SNT-TC-1A is ASNT's Recommended Practice No. SNT-TC-1A — a guideline document, not a certification itself. Each employer writes its own Written Practice aligned to SNT-TC-1A, and the employer — not ASNT — examines, qualifies, and certifies its own NDT personnel under that Written Practice. It is the dominant personnel-qualification model in North America."
                bullets={[
                    "Guideline document — ASNT does not issue SNT-TC-1A certificates to individuals",
                    "The employer is the certifying agency, under its own Written Practice",
                    "Contrast with CP-189, ISO 9712, and ACCP, all covered below",
                ]}
            />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><BookOpen className="w-5 h-5" /><span>NDT Certification Fundamentals</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">What Is SNT-TC-1A? The Employer-Based NDT Certification Model Explained</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">SNT-TC-1A is the document behind most NDT certifications in North America — but it isn't itself a certification. Here's what it actually is, why the employer (not ASNT) does the certifying, and how it stacks up against CP-189, ISO 9712, ACCP, and Canada's CGSB-derived scheme.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/asnt-certification" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">See the Full ASNT Certification Guide</Link>
                            <Link to="/blog/asnt-snt-tc-1a-certification-requirements" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Requirements &amp; 30-Day Pass Plan</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 1. What SNT-TC-1A Is */}
            <section id="what-is-it" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-6">What SNT-TC-1A Actually Is</h2>
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>SNT-TC-1A is short for <strong>ASNT Recommended Practice No. SNT-TC-1A</strong> — <em>Personnel Qualification and Certification in Nondestructive Testing</em>. It was first published by the American Society for Nondestructive Testing in 1966 and has been revised periodically since, most recently in a 2020 edition.</p>
                        <p>The word that matters most in that name is <strong>Recommended Practice</strong>. SNT-TC-1A is a guideline document — it tells an employer what a sound NDT personnel-qualification program should contain: minimum classroom training hours by method and level, minimum on-the-job experience hours, a vision-acuity requirement, and a structure for general, specific, and practical examinations. It does not itself certify anyone. ASNT does not issue an "SNT-TC-1A certificate" to an individual inspector the way it issues an ACCP certificate.</p>
                        <p>Instead, each employer that wants to qualify its NDT personnel under SNT-TC-1A writes its own <Link to="/glossary/written-practice" className="text-[#004aad] font-semibold underline underline-offset-2 hover:opacity-80">Written Practice</Link> — a company document that adapts SNT-TC-1A's recommendations to that employer's specific methods, industries, and codes. That Written Practice, reviewed and approved by an ASNT Level III, is what actually governs how a given inspector at a given company gets qualified.</p>
                    </div>
                </div>
            </section>

            {/* 2. Why it's employer-based */}
            <section id="employer-based" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Why SNT-TC-1A Is an Employer-Based Qualification Model</h2>
                    <div className="rounded-lg border-l-4 border-[#004aad] bg-blue-50 p-6 mb-8">
                        <p className="text-slate-800 text-lg leading-relaxed"><strong>This is the single most commonly confused fact about SNT-TC-1A</strong> when it's compared to the schemes it competes with: under SNT-TC-1A, <strong>the employer — not ASNT — issues the certification.</strong> ASNT publishes the recommended practice; it does not sit an exam board, does not review individual candidate files, and does not put its name on the certificate.</p>
                    </div>
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>In practice this means: the employer's Written Practice sets the training hours, the experience hours, and the exam content (general, specific, and practical) that a candidate must complete — SNT-TC-1A only recommends minimums and a structure. The employer's own qualified Level III examines the candidate and signs the certification. And because the certifying party is the employer rather than a neutral third party, an SNT-TC-1A certification is <strong>not automatically portable</strong>: move to a new employer, and that employer's Written Practice governs from day one, typically requiring re-qualification even if you're performing the exact same method at the exact same level.</p>
                        <p>That employer-based structure is precisely what distinguishes SNT-TC-1A from every scheme it gets compared against — CP-189, ISO 9712, and ACCP all shift certification authority (fully or partly) to a body other than the employer. The comparison section below covers each one directly.</p>
                    </div>
                </div>
            </section>

            {/* 3. Levels I/II/III at a glance */}
            <section id="levels" className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Levels I, II, and III at a Glance</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">SNT-TC-1A defines three qualification levels by scope of responsibility, not by NDT method. For the full hour-by-hour training and experience breakdown per method (UT, RT, MT, PT, ET, VT), see the dedicated requirements guide linked below — this page covers what each level is <em>for</em>.</p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {levelsAtAGlance.map((l) => (
                            <Card key={l.level} className="relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#004aad]"></div>
                                <CardHeader><CardTitle className="text-xl flex items-center gap-2"><Layers className="w-5 h-5 text-[#004aad]" />{l.level}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-600">{l.role}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link to="/blog/asnt-snt-tc-1a-certification-requirements" className="inline-block bg-[#004aad] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">See Training Hours, Experience Hours &amp; a 30-Day Pass Plan →</Link>
                    </div>
                </div>
            </section>

            {/* 4. Comparison section */}
            <section id="comparisons" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">SNT-TC-1A vs Every Other NDT Personnel Scheme</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">SNT-TC-1A gets compared against three other schemes most often. Each comparison below links to the full deep-dive.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {comparisons.map((c) => {
                            const Icon = c.icon;
                            return (
                                <Card key={c.scheme} className="flex flex-col">
                                    <CardHeader><CardTitle className="text-xl flex items-center gap-2"><Icon className="w-5 h-5 text-[#004aad]" />SNT-TC-1A vs {c.scheme}</CardTitle></CardHeader>
                                    <CardContent className="flex flex-col flex-1 justify-between">
                                        <p className="text-slate-600 mb-4">{c.summary}</p>
                                        <Link to={c.href} className="text-[#004aad] font-semibold underline underline-offset-2 hover:opacity-80">{c.linkLabel}</Link>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* NEW: vs CGSB */}
            <section id="cgsb" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-6">SNT-TC-1A vs Canada's CGSB-Derived Scheme</h2>
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>Canada's federal NDT personnel standard is <strong>CAN/CGSB-48.9712</strong> — Canada's national adoption of ISO 9712. Two facts are worth getting right here, because both are commonly muddled:</p>
                        <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-6">
                            <p><strong>Who publishes it vs. who certifies you.</strong> The CAN/CGSB-48.9712 standard document is published by the <strong>Canadian General Standards Board (CGSB)</strong> — but CGSB does not itself certify NDT personnel. Actual certification is administered by <strong>Natural Resources Canada's National NDT Certification Body (NDTCB)</strong>, which examines candidates and issues the credential, following the ISO 9712 third-party central-certification model rather than SNT-TC-1A's employer-based one.</p>
                        </div>
                        <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-6">
                            <p><strong>CGSB's own status is changing.</strong> Per Canada's 2025 federal budget, the Canadian General Standards Board is slated to cease operations as of April 1, 2026. This affects CGSB as an active standards-publishing body — it does not retroactively invalidate the CAN/CGSB-48.9712 standard document or any certification already issued under it, and NRCan's NDTCB continues to administer personnel certification. Anyone qualifying candidates against this standard in Canada should confirm the current administering arrangement directly with NRCan, since this is a live transition rather than a settled fact.</p>
                        </div>
                        <p>Because CAN/CGSB-48.9712 is Canada's implementation of ISO 9712, the practical comparison for an inspector deciding between SNT-TC-1A and the Canadian scheme is the same third-party-vs-employer-based tradeoff covered in the <Link to="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison" className="text-[#004aad] font-semibold underline underline-offset-2 hover:opacity-80">SNT-TC-1A vs ISO 9712 comparison</Link> — with NRCan's NDTCB standing in for a national accredited certification body. ASNT SNT-TC-1A remains widely accepted in Canada for US-headquartered operators and cross-border crews, so many Canadian inspectors working oil-sands, pipeline, or cross-border scopes end up holding both.</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
                    </div>
                </div>
            </section>

            {/* Cluster cross-links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">The Full SNT-TC-1A Cluster</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: "Full ASNT Certification Guide", path: "/asnt-certification" },
                            { name: "SNT-TC-1A Requirements & Pass Plan", path: "/blog/asnt-snt-tc-1a-certification-requirements" },
                            { name: "SNT-TC-1A vs CP-189", path: "/blog/asnt-snt-tc-1a-vs-cp-189-comparison" },
                            { name: "SNT-TC-1A vs ISO 9712", path: "/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison" },
                            { name: "SNT-TC-1A vs ACCP Path", path: "/blog/asnt-accp-level-2-level-3-complete-path-explained-2026" },
                            { name: "SNT-TC-1A Glossary Entry", path: "/glossary/snt-tc-1a" },
                        ].map(link => (
                            <Link key={link.path} to={link.path} className="block p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all group">
                                <span className="font-semibold text-slate-900 group-hover:text-[#004aad] transition-colors text-sm">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-[#004aad] to-blue-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your SNT-TC-1A Pathway?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Atlantis NDT runs ASNT Level III-led SNT-TC-1A training and offers independent Level III consulting for employers building or reviewing their own Written Practice.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Talk to an ASNT Level III</Link>
                        <Link to="/consulting/asnt-level-iii-consulting-services" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Level III Consulting</Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <ErpDtCrossPromoBlock
                        relevantApp="Certification Tracking"
                        relevantAppHref="/erp-modules/certification-tracking"
                    />
                </div>
            </section>

            <RelatedGuidesBlock links={[
                {
                    "title": "Full ASNT Certification Guide",
                    "href": "/asnt-certification",
                    "description": "SNT-TC-1A, ACCP, Level I/II/III, exam costs & salary",
                    "icon": "cert"
                },
                {
                    "title": "SNT-TC-1A Requirements & 30-Day Pass Plan",
                    "href": "/blog/asnt-snt-tc-1a-certification-requirements",
                    "description": "Hour-by-hour training & experience breakdown",
                    "icon": "blog"
                },
                {
                    "title": "SNT-TC-1A vs CP-189",
                    "href": "/blog/asnt-snt-tc-1a-vs-cp-189-comparison",
                    "description": "Which ASNT standard your employer needs",
                    "icon": "blog"
                },
                {
                    "title": "SNT-TC-1A vs ISO 9712",
                    "href": "/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison",
                    "description": "Employer-based vs third-party central certification",
                    "icon": "blog"
                },
                {
                    "title": "ASNT Level III Consulting Services",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Written practice authoring & procedure approval",
                    "icon": "consulting"
                },
                {
                    "title": "Certification Tracking Software",
                    "href": "/erp-modules/certification-tracking",
                    "description": "Automated SNT-TC-1A expiry & Written Practice links",
                    "icon": "erp"
                }
            ]} />

            <ContactDetails />
        </div>
    );
}
