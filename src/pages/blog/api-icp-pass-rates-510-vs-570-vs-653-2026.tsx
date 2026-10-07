import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: rewritten from the API ICP status update (April 2025). Prior version published invented first-time/overall pass rates.
const sections: { id: string; h2: string; html: string }[] = [{"id":"data","h2":"Per-Window Pass Rates Reported by API","html":"<table><tr><th>Certification</th><th>Per-window pass rates reported by API (2020 &ndash; early 2025)</th></tr><tr><td>API 510</td><td>About 54% to 69%</td></tr><tr><td>API 570</td><td>About 45% to 70%</td></tr><tr><td>API 653</td><td>About 62% to 76%</td></tr></table><p>Source: API Individual Certification Programs status update, breakdown as of 30 April 2025 (historical exam performance tables). The pass point is a scaled score of 400. API does not break these figures down by first attempt, retake, region or preparation method.</p>"},{"id":"meaning","h2":"How to Read the Numbers","html":"<ul><li>Each figure is for one exam window and all candidates in it; first-time and repeat candidates are combined.</li><li>Rates move by several points between windows; compare ranges rather than single windows.</li><li>API 510 and 653 went through standard settings in November 2019 and API 570 in November 2020, and the March-May 2020 windows were disrupted by COVID-19, so earlier figures are not directly comparable.</li><li>No reliable public data splits pass rates by country, employer or preparation method. Claims of &ldquo;first-time vs overall&rdquo; or &ldquo;self-study vs classroom&rdquo; pass rates are estimates, not API data.</li></ul>"},{"id":"format","h2":"Exam Format (All Three)","html":"<ul><li>170 multiple-choice questions, 140 scored and 30 unscored pretest items</li><li>Closed-book part: 110 questions in 2.75 hours; open-book part: 60 questions in 3.75 hours with the references provided on screen; about 7.5 hours in total including a tutorial and a 45-minute break</li><li>In person at Prometric test centers only &mdash; API 510, 570 and 653 are not available by remote proctoring (remote delivery ended with the September 2024 window)</li><li>Scaled scoring; Prometric emails a score report, typically within 24 hours, and API uploads final results to the ICP portal afterwards</li></ul>"},{"id":"why-fail","h2":"Common Reasons Candidates Fall Short","html":"<p>API does not publish failure analysis; the following is practical guidance. Candidates commonly run short of time in the open-book part, are slow on the calculations listed in the Body of Knowledge (corrosion rate, remaining life, intervals, MAWP and the construction-code thickness formulas), or study documents that are not on the effectivity sheet. API 579 (fitness-for-service) and API RP 580/581 (risk-based inspection) are not referenced publications for API 510, 570 or 653.</p>"},{"id":"compare","h2":"Which Exam Is Hardest?","html":"<p>On API&#39;s 2020&ndash;2025 figures, API 653 windows generally sat at or above API 510, with API 570 showing the widest spread. Difficulty for an individual depends mostly on familiarity with the construction code involved: ASME VIII for API 510, ASME B31.3 for API 570, and API 650 for API 653.</p>"}];

const faqs: { question: string; answer: string }[] = [{"question":"Does API publish official pass rates?","answer":"Yes. API ICP status updates include historical exam-performance tables with candidates, passes, fails and pass percentages per window for each program."},{"question":"What is the API 510 pass rate?","answer":"API's April 2025 status update shows per-window API 510 pass rates of roughly 54% to 69% between 2020 and early 2025."},{"question":"What is the API 570 pass rate?","answer":"Roughly 45% to 70% per window between 2020 and early 2025, according to the same API status update."},{"question":"What is the API 653 pass rate?","answer":"Roughly 62% to 76% per window between 2020 and early 2025, according to the same API status update."},{"question":"What score do I need to pass?","answer":"API uses scaled scoring with a pass point of 400; it does not publish a percent-correct equivalent."},{"question":"Does preparation method change the pass rate?","answer":"API does not publish pass rates by preparation method. Structured study of the referenced editions and timed practice are sensible, but specific uplift percentages quoted online are not API data."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-510-570-653-exam-schedule-2026","title":"API Exam Schedule 2026","desc":"Windows and application deadlines"},{"to":"/blog/api-510-body-of-knowledge-2026-changes-explained","title":"API 510 BoK 2026","desc":"Reference editions and changes"}];

export default function APIICPPassRates2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 510 vs 570 vs 653 Exam Pass Rate 2026: What API’s Published Data Shows",
                "description": "API's own ICP status update (April 2025): per-window pass rates of roughly 54-69% for API 510, 45-70% for API 570 and 62-76% for API 653, with a scaled pass point of 400.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-05-17",
                "dateModified": "2026-10-06"
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
                title="API 510 vs 570 vs 653 Pass Rates 2026 — API's Published Data"
                description="API's own ICP status update (April 2025): per-window pass rates of roughly 54-69% for API 510, 45-70% for API 570 and 62-76% for API 653, with a scaled pass point of 400."
                keywords="api 510 pass rate, api 570 pass rate, api 653 pass rate, api icp pass rates, api exam statistics, api 510 vs 570 vs 653 difficulty"
                canonical="https://atlantisndt.com/blog/api-icp-pass-rates-510-vs-570-vs-653-2026"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Exam Statistics • Updated October 2026 • Source: API ICP status update</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 vs 570 vs 653 Exam Pass Rates: What API Publishes</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "API publishes historical exam performance for its Individual Certification Programs. This page summarises the per-window pass rates for API 510, 570 and 653 from the ICP status update dated April 2025, explains what the numbers can and cannot tell you, and links to the exam format and Body of Knowledge." }} />
                </div>
            </section>
            <article className="py-12">
                <div className="container mx-auto max-w-4xl px-6">
                    {sections.map((sec) => (
                        <section key={sec.id} id={sec.id} className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">{sec.h2}</h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed [&_table]:w-full [&_table]:bg-white [&_table]:text-sm [&_th]:bg-amber-100 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:px-3 [&_td]:py-2 [&_td]:border-t [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-amber-700 [&_a]:underline" dangerouslySetInnerHTML={{ __html: sec.html }} />
                        </section>
                    ))}
                    <section id="faq" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4">Atlantis service scope</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">Atlantis NDT does not offer API 510, API 570 or API 653 exam preparation and does not administer those examinations. We provide ASNT SNT-TC-1A NDT training, ASNT Level III consulting on NDE procedures and written practices, and inspection software (Atlantis ERP and the Digital Twin platform).</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/training" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">ASNT NDT Training</Link>
                            <Link to="/consulting" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Level III Consulting</Link>
                        </div>
                    </section>
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((r) => (
                                <Link key={r.to} to={r.to} className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                    <h3 className="font-bold group-hover:text-amber-600 transition">{r.title}</h3>
                                    <p className="text-slate-600 text-sm mt-2">{r.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </article>
            <ContactDetails />
        </div>
    );
}
