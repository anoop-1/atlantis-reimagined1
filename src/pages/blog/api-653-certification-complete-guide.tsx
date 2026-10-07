import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: rewritten from api.org and the 2026 API 653 effectivity sheet. Prior version had a 4-hour exam, invented pass rates, topic weights, salaries and recertification rules.
const sections: { id: string; h2: string; html: string }[] = [{"id":"what","h2":"What an API 653 Inspector Does","html":"<p>The authorized inspector performs and documents external and internal inspections, evaluates tank condition against API 653 (shell and bottom minimum thickness, settlement, brittle-fracture screening), sets inspection intervals under the code, and authorizes and accepts repairs, alterations and reconstruction. Engineering evaluations such as API 579-1 fitness-for-service assessments are performed by qualified engineers; Atlantis NDT does not perform them. See our <a href=\"/blog/api-653-tank-inspection-guide\">API 653 tank inspection guide</a> for the inspection workflow.</p>"},{"id":"eligibility","h2":"Eligibility Requirements (api.org)","html":"<table><tr><th>Education</th><th>Experience (within the last 10 years)</th></tr><tr><td>BS or higher in engineering or technology</td><td>1 year in supervision or performance of inspection</td></tr><tr><td>2-year degree or certificate in engineering or technology</td><td>2 years, including 1 year in supervision or performance of inspection</td></tr><tr><td>High school diploma or equivalent</td><td>3 years, including 1 year in supervision or performance of inspection</td></tr><tr><td>No formal education</td><td>5 or more years, including 1 year in supervision or performance of inspection</td></tr></table><p>Experience must relate to the certification&#39;s equipment (vessels for API 510, piping for API 570, tanks for API 653). No NDT certification is required.</p>"},{"id":"exam","h2":"Exam Structure","html":"<ul><li>170 multiple-choice questions, 140 scored and 30 unscored pretest items</li><li>Closed-book part: 110 questions in 2.75 hours; open-book part: 60 questions in 3.75 hours with the references provided on screen; about 7.5 hours in total including a tutorial and a 45-minute break</li><li>In person at Prometric test centers only &mdash; API 510, 570 and 653 are not available by remote proctoring (remote delivery ended with the September 2024 window)</li><li>Scaled scoring; Prometric emails a score report, typically within 24 hours, and API uploads final results to the ICP portal afterwards</li></ul><p>API 653 is tested in March, July and November windows. API sets the application and exam fees; see api.org.</p>"},{"id":"refs","h2":"Referenced Publications for 2026","html":"<p>API 653 5th edition (November 2014) with Addenda 1-3 and Errata 1-2; API 650 13th edition with Errata 1; API RP 571 3rd edition (10 listed mechanisms); RP 575 5th edition; RP 576 5th edition (Sections 4.3.2 and 6.7 only); RP 577 3rd edition; RP 651 5th edition; RP 652 5th edition; ASME Section V and IX (2023, listed parts). API 579-1 and API RP 580/581 are not on the list. Details: <a href=\"/blog/api-653-current-edition-2026-vs-bok-window-explained\">API 653 current edition vs BoK window</a>.</p>"},{"id":"pass","h2":"Pass Rates Published by API","html":"<table><tr><th>Certification</th><th>Per-window pass rates reported by API (2020 &ndash; early 2025)</th></tr><tr><td>API 510</td><td>About 54% to 69%</td></tr><tr><td>API 570</td><td>About 45% to 70%</td></tr><tr><td>API 653</td><td>About 62% to 76%</td></tr></table><p>Source: API Individual Certification Programs status update, breakdown as of 30 April 2025 (historical exam performance tables). The pass point is a scaled score of 400. API does not break these figures down by first attempt, retake, region or preparation method.</p>"},{"id":"plan","h2":"6-Month Study Plan","html":"<table><tr><th>Month</th><th>Focus</th></tr><tr><td>1</td><td>Download the BoK and effectivity sheet; read API 653 and the inspection-related parts of API 650</td></tr><tr><td>2</td><td>Shell t-min, remaining corrosion allowance and interval calculations; bottom minimums (Table 4.4); hydrotest and brittle-fracture rules</td></tr><tr><td>3</td><td>Settlement evaluation (Annex B), repairs and reconstruction (Sections 9, 10, 12)</td></tr><tr><td>4</td><td>RP 575, RP 651, RP 652, RP 577 and the listed RP 571 mechanisms; ASME V and IX</td></tr><tr><td>5</td><td>Timed practice: closed-book recall, then open-book navigation in electronic copies</td></tr><tr><td>6</td><td>Weak-area review and exam logistics</td></tr></table>"},{"id":"career","h2":"Career Path and Pay","html":"<p>Typical progression runs from NDT technician (ASNT SNT-TC-1A Level II in UT, MT and VT, often with MFL floor-scanning experience) to API 653 inspector, then lead inspector or tank-integrity roles, often adding API 510 or 570. Pay varies by region, sector and employment model; use attributed sources such as the US Bureau of Labor Statistics and the ASNT salary survey, and current postings in your region.</p>"},{"id":"recert","h2":"Recertification","html":"<p>Certification is valid for 3 years. Recertification requires at least 20% of working time on inspection activities during the cycle and 24 continuing professional development (CPD) hours, plus an online web quiz every 6 years; applications open 90 days before expiry.</p>"},{"id":"compare","h2":"API 653 vs API 510 vs API 570","html":"<table><tr><th>Aspect</th><th>API 653</th><th>API 510</th><th>API 570</th></tr><tr><td>Equipment</td><td>Aboveground storage tanks</td><td>Pressure vessels</td><td>Process piping</td></tr><tr><td>Main construction code examined</td><td>API 650</td><td>ASME VIII Div. 1</td><td>ASME B31.3</td></tr><tr><td>Exam windows</td><td>Mar / Jul / Nov</td><td>Jan / May / Sep</td><td>Feb / Jun / Oct</td></tr><tr><td>API-published pass rates (2020-2025)</td><td>~62-76%</td><td>~54-69%</td><td>~45-70%</td></tr></table>"}];

const faqs: { question: string; answer: string }[] = [{"question":"What are the API 653 eligibility requirements?","answer":"Education plus tank-related experience within the last 10 years: 1 year with an engineering or technology degree, 2 years with a 2-year degree, 3 years with a high school diploma, or 5+ years with no formal education, each including 1 year in supervision or performance of inspection."},{"question":"How long is the API 653 exam?","answer":"About 7.5 hours at a Prometric test center: 110 closed-book questions in 2.75 hours and 60 open-book questions in 3.75 hours, with a tutorial and break."},{"question":"Can I bring my own code books?","answer":"No. In the open-book part the referenced publications are provided electronically on screen; the closed-book part allows no references."},{"question":"What is the API 653 pass rate?","answer":"API's ICP status update (April 2025) showed per-window API 653 pass rates of roughly 62-76% between 2020 and early 2025."},{"question":"Is API 579 on the API 653 exam?","answer":"No. API 579-1/ASME FFS-1 is not on the 2026 API 653 effectivity sheet."},{"question":"How often must API 653 be renewed?","answer":"Every 3 years: at least 20% of working time on inspection activities and 24 CPD hours per cycle, plus an online web quiz every 6 years."},{"question":"Does Atlantis NDT offer API 653 exam preparation?","answer":"No. Atlantis NDT provides ASNT SNT-TC-1A NDT training, tank NDT such as floor MFL and UT, ASNT Level III consulting and inspection software."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-510-570-653-exam-schedule-2026","title":"API Exam Schedule 2026","desc":"Windows and application deadlines"},{"to":"/blog/api-icp-pass-rates-510-vs-570-vs-653-2026","title":"API ICP Pass Rates","desc":"What API’s published data shows"},{"to":"/blog/api-510-body-of-knowledge-2026-changes-explained","title":"API 510 BoK 2026","desc":"Reference editions and changes"}];

export default function API653CertificationCompleteGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 653 Certification: Complete Guide to Tank Inspector Exam 2026",
                "description": "API 653 certification 2026: eligibility, the 170-question Prometric exam, the 2026 referenced editions, API-published pass rates, a 6-month study plan and recertification.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-01-15",
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
                title="API 653 Certification 2026: Complete Guide to Eligibility, Exam and Study Plan"
                description="API 653 certification 2026: eligibility, the 170-question Prometric exam, the 2026 referenced editions, API-published pass rates, a 6-month study plan and recertification."
                keywords="api 653 certification, api 653 exam, api 653 eligibility, api 653 study plan, api 653 pass rate, api 653 recertification, tank inspector certification"
                canonical="https://atlantisndt.com/blog/api-653-certification-complete-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Certification Guide • Updated October 2026</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Certification: Complete Tank Inspector Guide 2026</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "<strong>API 653 certification</strong> is API&#39;s credential for authorized aboveground storage tank inspectors working under API 653, <em>Tank Inspection, Repair, Alteration, and Reconstruction</em>. This guide covers eligibility, the exam, the 2026 referenced editions, API&#39;s published pass rates, a study plan and recertification. Atlantis NDT does not run API 653 exam preparation; our founder holds API 653 and this guide is free." }} />
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
