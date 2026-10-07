import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: corrected addendum dates (Addendum 3 November 2023; Addendum 4 July 2025) and the 2026 exam reference list per API effectivity sheet.
const sections: { id: string; h2: string; html: string }[] = [{"id":"timeline","h2":"API 653 5th Edition: Addenda and Errata","html":"<table><tr><th>Document</th><th>Date</th></tr><tr><td>5th edition</td><td>November 2014</td></tr><tr><td>Addendum 1</td><td>April 2018</td></tr><tr><td>Errata 1</td><td>March 2020</td></tr><tr><td>Addendum 2</td><td>May 2020</td></tr><tr><td>Addendum 3</td><td>November 2023</td></tr><tr><td>Errata 2</td><td>February 2025</td></tr><tr><td>Addendum 4</td><td>July 2025 (revises bottom-plate thickness measurement text, among other changes)</td></tr></table><p>Dates for Addenda 1-3 and the errata are as listed on API&#39;s 2026 Publications Effectivity Sheet. Earlier editions: 4th (April 2009), 3rd (December 2001), 2nd (December 1995) and 1st (January 1991).</p>"},{"id":"exam","h2":"What the 2026 API 653 Exam Uses","html":"<p>The effectivity sheet for the March, July and November 2026 windows lists: API 653 5th edition with Addenda 1-3 and Errata 1-2; API 650 13th edition (March 2020) with Errata 1; API RP 571 3rd edition (10 listed mechanisms); RP 575 5th edition (September 2024); RP 576 5th edition (Sections 4.3.2 and 6.7 only); RP 577 3rd edition; RP 651 5th edition (August 2024); RP 652 5th edition (May 2020); and ASME Section V and IX (2023). Addendum 4 to API 653 and the 14th edition of API 650 (August 2025) are not on the 2026 sheet. API 579-1, API 620 and API RP 580/581 are not referenced publications.</p>"},{"id":"practice","h2":"What This Means in Practice","html":"<ul><li><strong>Exam candidates:</strong> study the editions on the effectivity sheet for your window, not the newest documents.</li><li><strong>Tank owners and inspectors:</strong> cite the edition and addenda your program follows, e.g. &ldquo;API 653, 5th edition, November 2014, including Addendum 4 (July 2025)&rdquo;, and record which edition each inspection was performed to.</li><li><strong>Programs written to the 4th edition (2009):</strong> review them against the 5th edition and its addenda.</li></ul>"},{"id":"intervals","h2":"Key Interval Rules in the 5th Edition","html":"<p>Routine owner inspections at intervals not exceeding one month; external inspection by an authorized inspector at the lesser of 5 years or RCA/4N; shell UT at 5 years when the corrosion rate is unknown, otherwise the lesser of RCA/2N or 15 years; first internal inspection within 10 years unless Table 6.1 safeguards add credit (capped at 20 years without a release prevention barrier and 30 years with one); later internals from bottom corrosion rates or an RBI assessment that meets the code&#39;s requirements.</p>"}];

const faqs: { question: string; answer: string }[] = [{"question":"Is there a 2026 edition of API 653?","answer":"No. API 653 is still the 5th edition (November 2014), maintained by addenda and errata; the latest is Addendum 4 (July 2025)."},{"question":"Which API 653 edition is on the 2026 exam?","answer":"The 5th edition with Addenda 1-3 and Errata 1-2, per the effectivity sheet for the March, July and November 2026 windows."},{"question":"Which API 650 edition does the 2026 API 653 exam use?","answer":"The 13th edition (March 2020) with Errata 1, even though the 14th edition was published in August 2025."},{"question":"What did Addendum 4 change?","answer":"Among other changes, it revised the text on bottom-plate thickness measurement (clause 4.4.4). Review it against your licensed copy."},{"question":"Is API 579 on the API 653 exam?","answer":"No. API 579-1/ASME FFS-1 is not on the 2026 API 653 effectivity sheet."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-510-570-653-exam-schedule-2026","title":"API Exam Schedule 2026","desc":"Windows and application deadlines"},{"to":"/blog/api-icp-pass-rates-510-vs-570-vs-653-2026","title":"API ICP Pass Rates","desc":"What API’s published data shows"},{"to":"/blog/api-510-body-of-knowledge-2026-changes-explained","title":"API 510 BoK 2026","desc":"Reference editions and changes"}];

export default function API653CurrentEdition2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 653 Current Edition 2026: Standard vs BoK Window Explained",
                "description": "API 653 is still the 5th edition (November 2014), now with Addendum 4 (July 2025). The 2026 exam uses the edition through Addendum 3. Edition timeline and exam implications.",
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
                title="API 653 Current Edition 2026: Standard vs BoK Window Explained"
                description="API 653 is still the 5th edition (November 2014), now with Addendum 4 (July 2025). The 2026 exam uses the edition through Addendum 3. Edition timeline and exam implications."
                keywords="api 653 current edition, api 653 2026, api 653 addendum 4, api 653 5th edition, api 653 effectivity sheet, api 653 bok 2026"
                canonical="https://atlantisndt.com/blog/api-653-current-edition-2026-vs-bok-window-explained"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Standards • Updated October 2026</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Current Edition 2026: Standard vs BoK Window Explained</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "There is no &ldquo;2026 edition&rdquo; of API 653. The current standard is the <strong>5th edition (November 2014)</strong>, maintained through addenda and errata &mdash; most recently <strong>Addendum 4 (July 2025)</strong>. The &ldquo;2026&rdquo; you see on exam documents refers to the exam windows, and the 2026 exam uses the edition through Addendum 3." }} />
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
