import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: unsourced salary bands, day rates and certification-volume figures removed; page now explains pay drivers and attributed sources.
const sections: { id: string; h2: string; html: string }[] = [{"id":"sources","h2":"Where to Find Salary Data You Can Trust","html":"<ul><li><strong>US Bureau of Labor Statistics (BLS) OEWS</strong> &mdash; occupation and metro-level pay data; inspection roles fall under several occupations (for example inspectors, testers, sorters, samplers and weighers, and engineering technicians), so use it for direction rather than an API 570-specific figure.</li><li><strong>ASNT salary surveys</strong> &mdash; NDT-industry pay by level, method and region; useful for the NDT technician layer under the API inspector.</li><li><strong>Current job postings and recruiter offers</strong> in your region and sector &mdash; the most specific signal, especially for rotation and per-diem terms.</li></ul><p>See also our <a href=\"/ndt-inspector-salary\">NDT inspector salary guide</a>.</p>"},{"id":"drivers","h2":"What Moves API 570 Pay","html":"<table><tr><th>Factor</th><th>Why it matters</th></tr><tr><td>Region and sector</td><td>Refining hubs, offshore and LNG work, and remote sites typically pay more than general plant work</td></tr><tr><td>Employment model</td><td>Staff roles, contract roles and rotational work differ in base pay, overtime and per diem</td></tr><tr><td>Experience and role</td><td>Lead inspectors and inspection supervisors earn more than field inspectors</td></tr><tr><td>Additional credentials</td><td>Holding API 510 and/or API 653, API 571/577/580, or ASNT Level II/III broadens the roles you can fill</td></tr><tr><td>Turnaround and overtime</td><td>Shutdown work can add materially to annual earnings but is seasonal</td></tr></table>"},{"id":"regions","h2":"Regional Notes","html":"<p><strong>USA and Canada:</strong> demand concentrates around Gulf Coast refining, Midwest refining and Alberta oil sands; contract and turnaround work is common. <strong>Middle East:</strong> packages often include allowances and may be tax-free, so compare total compensation, not base pay. <strong>India:</strong> API 570 is valued for projects with international operators and for overseas assignments. In every region, check current postings for real numbers.</p>"},{"id":"cert","h2":"Getting and Keeping API 570","html":"<table><tr><th>Education</th><th>Experience (within the last 10 years)</th></tr><tr><td>BS or higher in engineering or technology</td><td>1 year in supervision or performance of inspection</td></tr><tr><td>2-year degree or certificate in engineering or technology</td><td>2 years, including 1 year in supervision or performance of inspection</td></tr><tr><td>High school diploma or equivalent</td><td>3 years, including 1 year in supervision or performance of inspection</td></tr><tr><td>No formal education</td><td>5 or more years, including 1 year in supervision or performance of inspection</td></tr></table><p>Experience must relate to the certification&#39;s equipment (vessels for API 510, piping for API 570, tanks for API 653). No NDT certification is required.</p><p>Certification is valid for 3 years. Recertification requires at least 20% of working time on inspection activities during the cycle and 24 continuing professional development (CPD) hours, plus an online web quiz every 6 years; applications open 90 days before expiry.</p>"}];

const faqs: { question: string; answer: string }[] = [{"question":"How much does an API 570 inspector earn?","answer":"It varies widely by region, sector, employment model and experience. Use attributed sources such as the US BLS OEWS data, the ASNT salary survey and current job postings in your region rather than single figures quoted without a source."},{"question":"Does holding API 510 and API 653 as well increase pay?","answer":"Holding more than one API inspector certification widens the roles and contracts you can take, which often improves offers; the size of any premium depends on the employer and market."},{"question":"Is contract work better paid than staff work?","answer":"Contract and turnaround roles often pay higher hourly or day rates plus per diem but are less steady; staff roles offer benefits and continuity. Compare total annual compensation."},{"question":"Do I need ASNT Level III to become an API 570 inspector?","answer":"No. API 570 eligibility is education plus piping-related experience; no NDT certification is required."},{"question":"How often must API 570 be renewed?","answer":"Every 3 years, with at least 20% of working time on inspection activities and 24 CPD hours per cycle, plus a web quiz every 6 years."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-510-570-653-exam-schedule-2026","title":"API Exam Schedule 2026","desc":"Windows and application deadlines"},{"to":"/blog/api-icp-pass-rates-510-vs-570-vs-653-2026","title":"API ICP Pass Rates","desc":"What API’s published data shows"},{"to":"/blog/api-510-body-of-knowledge-2026-changes-explained","title":"API 510 BoK 2026","desc":"Reference editions and changes"}];

export default function API570InspectorSalary2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 570 Inspector Salary 2026: What Drives Pay by Region and Experience",
                "description": "What drives API 570 piping inspector pay in the USA, Gulf and India, which salary sources to trust (BLS, ASNT survey), and how multi-certification and rotation affect offers.",
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
                title="API 570 Inspector Salary 2026 — Pay Drivers by Region + Experience"
                description="What drives API 570 piping inspector pay in the USA, Gulf and India, which salary sources to trust (BLS, ASNT survey), and how multi-certification and rotation affect offers."
                keywords="api 570 inspector salary, api 570 salary 2026, piping inspector salary, api inspector pay, api 570 day rate"
                canonical="https://atlantisndt.com/blog/api-570-inspector-salary-2026-by-region-experience"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Career • Updated October 2026</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 570 Inspector Salary 2026: What Drives Pay by Region and Experience</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "Salary questions about API 570 piping inspectors are common, but most figures circulating online are unsourced. This guide explains what actually moves pay, where to find attributed data, and how to compare offers. It does not publish salary numbers we cannot attribute to a named source." }} />
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
