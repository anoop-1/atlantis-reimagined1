import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: rewritten from the API 510 Publications Effectivity Sheet (Sept 2026 - May 2027). Prior version invented question counts, topic weights, editions and pass rates.
const sections: { id: string; h2: string; html: string }[] = [{"id":"editions","h2":"Referenced Publications and Editions","html":"<table><tr><th>Publication</th><th>Edition</th><th>Exam scope</th></tr><tr><td>API 510</td><td>11th edition, October 2022, Errata 1 (March 2023), Errata 2 (2025)</td><td>Whole code</td></tr><tr><td>API RP 571</td><td>3rd edition, March 2020</td><td>Section 2 plus 16 listed mechanisms</td></tr><tr><td>API RP 572</td><td>5th edition, November 2023</td><td>Per BoK</td></tr><tr><td>API RP 576</td><td>5th edition, September 2024</td><td>Per BoK</td></tr><tr><td>API RP 577</td><td>3rd edition, October 2020, Errata 1 (September 2025)</td><td>Per BoK</td></tr><tr><td>API RP 578</td><td>4th edition, February 2023</td><td>Per BoK</td></tr><tr><td>ASME BPVC Section V</td><td>2025 edition</td><td>Articles 1, 2, 6, 7 and 23 (SE-797 only)</td></tr><tr><td>ASME BPVC Section VIII Div. 1</td><td>2025 edition</td><td>U, UG, UW, UCS, Appendices 1-4, 6, 8 and 12</td></tr><tr><td>ASME BPVC Section IX</td><td>2025 edition</td><td>Welding only</td></tr><tr><td>ASME PCC-2</td><td>2022</td><td>Articles 101, 201, 202, 209, 210, 211, 212, 215, 216, 304, 305, 312, 501, 502</td></tr></table>"},{"id":"mechanisms","h2":"RP 571 Mechanisms on the Exam","html":"<p>Section 2 (terms and definitions) and paragraphs 3.3 amine SCC, 3.8 atmospheric corrosion, 3.9 boiler water and steam condensate corrosion, 3.11 brittle fracture, 3.14 caustic corrosion, 3.15 caustic SCC, 3.17 chloride SCC, 3.22 corrosion under insulation, 3.27 erosion/erosion-corrosion, 3.35 high-temperature H2/H2S corrosion, 3.36 high-temperature hydrogen attack, 3.37 hydrochloric acid corrosion, 3.46 naphthenic acid corrosion, 3.61 sulfidation and 3.67 wet H2S damage.</p>"},{"id":"changes","h2":"What Changed on the Latest Sheet","html":"<p>Items API highlights as updated include API 510 Errata 2 (2025), RP 571 paragraphs 3.9, 3.35 and 3.46, RP 577 Errata 1 (September 2025), and the move to the 2025 edition of the ASME Boiler and Pressure Vessel Code. API does not publish topic weightings, so any &ldquo;weight change&rdquo; claims are estimates.</p>"},{"id":"not-on-bok","h2":"What Is Not on the API 510 BoK","html":"<p>API 579-1/ASME FFS-1 (fitness-for-service) and API RP 580/581 (risk-based inspection) are not referenced publications. Know how API 510 itself treats RBI-based intervals and when it refers damage to an FFS evaluation, but there are no FFS or RBI calculation sets to study. ASME Section II Part D is not listed either.</p>"},{"id":"format","h2":"Exam Format","html":"<ul><li>170 multiple-choice questions, 140 scored and 30 unscored pretest items</li><li>Closed-book part: 110 questions in 2.75 hours; open-book part: 60 questions in 3.75 hours with the references provided on screen; about 7.5 hours in total including a tutorial and a 45-minute break</li><li>In person at Prometric test centers only &mdash; API 510, 570 and 653 are not available by remote proctoring (remote delivery ended with the September 2024 window)</li><li>Scaled scoring; Prometric emails a score report, typically within 24 hours, and API uploads final results to the ICP portal afterwards</li></ul><p>Certification is valid for 3 years. Recertification requires at least 20% of working time on inspection activities during the cycle and 24 continuing professional development (CPD) hours, plus an online web quiz every 6 years; applications open 90 days before expiry.</p>"},{"id":"study","h2":"Study Strategy for This BoK","html":"<ul><li>Obtain study copies of the listed editions and build an index for the open-book part</li><li>Drill the BoK calculations: corrosion rates, remaining life, inspection intervals, MAWP, ASME VIII shell and head thickness, joint efficiency, test pressures and UCS-66 impact-test exemptions</li><li>Learn the 16 RP 571 mechanisms: appearance, critical factors, affected units and inspection methods</li><li>Practise WPS/PQR review against ASME IX and the listed PCC-2 repair articles</li><li>Do full timed practice runs</li></ul><p>Free practice: <a href=\"/blog/api-510-practice-questions\">API 510 practice questions</a>.</p>"}];

const faqs: { question: string; answer: string }[] = [{"question":"Which BoK applies to my API 510 exam?","answer":"The one published for your window. The current API 510 BoK and effectivity sheet cover the September 2026, January 2027 and May 2027 windows."},{"question":"How many questions are on the API 510 exam?","answer":"170 questions (140 scored): 110 closed-book in 2.75 hours and 60 open-book in 3.75 hours, about 7.5 hours in total at a Prometric test center."},{"question":"Which edition of RP 571 is used?","answer":"The 3rd edition (March 2020), limited to Section 2 and the 16 listed mechanisms."},{"question":"Is API 579 FFS on the API 510 exam?","answer":"No. API 579-1/ASME FFS-1 is not on the effectivity sheet."},{"question":"Is RBI (API 580/581) on the API 510 exam?","answer":"No. Only API 510 itself, which permits RBI-based intervals, is examined."},{"question":"What is the API 510 pass rate?","answer":"API's ICP status update (April 2025) shows per-window API 510 pass rates of roughly 54-69% between 2020 and early 2025."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-510-570-653-exam-schedule-2026","title":"API Exam Schedule 2026","desc":"Windows and application deadlines"},{"to":"/blog/api-icp-pass-rates-510-vs-570-vs-653-2026","title":"API ICP Pass Rates","desc":"What API’s published data shows"}];

export default function API510BoK2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 510 Body of Knowledge 2026: Reference Editions + What Changed",
                "description": "API 510 BoK for the Sept 2026 - May 2027 windows: the 10 referenced publications and editions, the 16 RP 571 mechanisms, the 110 closed-book + 60 open-book format, and what changed.",
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
                title="API 510 Body of Knowledge 2026: Reference Editions + What Changed"
                description="API 510 BoK for the Sept 2026 - May 2027 windows: the 10 referenced publications and editions, the 16 RP 571 mechanisms, the 110 closed-book + 60 open-book format, and what changed."
                keywords="api 510 body of knowledge 2026, api 510 bok, api 510 effectivity sheet, api 510 exam references, api 510 exam format"
                canonical="https://atlantisndt.com/blog/api-510-body-of-knowledge-2026-changes-explained"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Body of Knowledge • Updated October 2026 • Source: API effectivity sheet</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 Body of Knowledge 2026: Reference Editions and What Changed</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "The API 510 Body of Knowledge (BoK) and Publications Effectivity Sheet define what the API 510 Pressure Vessel Inspector exam can test. API&#39;s current sheet covers the <strong>September 2026, January 2027 and May 2027</strong> windows. This page summarises it; download the originals from api.org before you study." }} />
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
