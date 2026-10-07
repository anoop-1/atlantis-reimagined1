import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

// 2026-10-06 audit: rewritten from api.org (ICP Schedules & Fees and Examinations pages). Prior version invented PBT/CBT windows, dates, fees and pass rates.
const sections: { id: string; h2: string; html: string }[] = [{"id":"schedule-2026","h2":"2026 Exam Windows and Application Deadlines","html":"<table><tr><th>Certification</th><th>Exam window</th><th>Application deadline</th></tr><tr><td>API 510</td><td>January 2 &ndash; 23, 2026</td><td>October 31, 2025</td></tr><tr><td>API 570</td><td>February 6 &ndash; 27, 2026</td><td>December 5, 2025</td></tr><tr><td>API 653</td><td>March 13 &ndash; April 3, 2026</td><td>January 9, 2026</td></tr><tr><td>API 510</td><td>May 8 &ndash; 29, 2026</td><td>March 13, 2026</td></tr><tr><td>API 570</td><td>June 5 &ndash; 26, 2026</td><td>April 3, 2026</td></tr><tr><td>API 653</td><td>July 10 &ndash; 31, 2026</td><td>May 8, 2026</td></tr><tr><td>API 510</td><td>September 4 &ndash; 25, 2026</td><td>July 3, 2026</td></tr><tr><td>API 570</td><td>October 9 &ndash; 30, 2026</td><td>August 7, 2026</td></tr><tr><td>API 653</td><td>November 6 &ndash; 27, 2026</td><td>September 4, 2026</td></tr></table><p>API publishes the windows and deadlines in one combined list; the allocation of windows to each certification above follows API&#39;s program pages and effectivity sheets (API 510: January, May, September; API 570: February, June, October; API 653: March, July, November).</p>"},{"id":"schedule-2027","h2":"2027 Exam Windows (Published by API)","html":"<table><tr><th>Certification</th><th>Exam window</th><th>Application deadline</th></tr><tr><td>API 510</td><td>January 2 &ndash; 22, 2027</td><td>October 29, 2026</td></tr><tr><td>API 570</td><td>January 29 &ndash; February 19, 2027</td><td>November 26, 2026</td></tr><tr><td>API 653</td><td>March 12 &ndash; April 2, 2027</td><td>January 7, 2027</td></tr><tr><td>API 510</td><td>May 7 &ndash; 28, 2027</td><td>March 4, 2027</td></tr><tr><td>API 570</td><td>June 4 &ndash; 25, 2027</td><td>April 1, 2027</td></tr><tr><td>API 653</td><td>July 9 &ndash; 30, 2027</td><td>May 6, 2027</td></tr><tr><td>API 510</td><td>September 3 &ndash; 24, 2027</td><td>July 2, 2027</td></tr><tr><td>API 570</td><td>October 8 &ndash; 29, 2027</td><td>August 5, 2027</td></tr><tr><td>API 653</td><td>November 5 &ndash; 26, 2027</td><td>September 2, 2027</td></tr></table><p>API notes that applications are processed in order received and processing can take up to six weeks, so apply well before the deadline for the best choice of dates and test centers.</p>"},{"id":"how-windows-work","h2":"How the API Exam Windows Work","html":"<p>All three exams are computer-based and delivered in person at Prometric test centers during the published windows; there is no paper-based option, no year-round testing and no remote proctoring for API 510, 570 or 653. Once API approves your application you receive an exam authorization email and schedule your seat on Prometric&#39;s website within your window.</p><ul><li>170 multiple-choice questions, 140 scored and 30 unscored pretest items</li><li>Closed-book part: 110 questions in 2.75 hours; open-book part: 60 questions in 3.75 hours with the references provided on screen; about 7.5 hours in total including a tutorial and a 45-minute break</li><li>In person at Prometric test centers only &mdash; API 510, 570 and 653 are not available by remote proctoring (remote delivery ended with the September 2024 window)</li><li>Scaled scoring; Prometric emails a score report, typically within 24 hours, and API uploads final results to the ICP portal afterwards</li></ul>"},{"id":"bok","h2":"Which Body of Knowledge Applies?","html":"<p>Each window has a Body of Knowledge and Publications Effectivity Sheet listing the exact editions examined. Current sheets: API 510 &mdash; September 2026, January 2027 and May 2027 windows (API 510 11th edition with Errata 1 and 2, ASME BPVC 2025); API 570 &mdash; 2026 (API 570 5th edition, ASME B31.3-2024); API 653 &mdash; March, July and November 2026 (API 653 5th edition through Addendum 3 and Errata 2, API 650 13th edition). Read our <a href=\"/blog/api-510-body-of-knowledge-2026-changes-explained\">API 510 BoK breakdown</a> before buying standards.</p>"},{"id":"register","h2":"Registration Steps","html":"<ul><li>Create or sign in to your API ICP account and complete the application for your certification</li><li>Document your education and experience; employer verification is required</li><li>Pay the application and exam fees set by API (see the ICP Schedules &amp; Fees page for current amounts)</li><li>Wait for API review (allow up to six weeks) and your exam authorization email</li><li>Schedule your seat with Prometric within your window and bring matching government ID on exam day</li></ul>"},{"id":"missed","h2":"If You Miss a Window or Do Not Pass","html":"<p>A reschedule/retest application (with its fee) is required if you do not pass, do not show up, fail to schedule with Prometric, or want to move to a later window. Because each certification has three windows a year, the next opportunity is usually about four months later.</p>"},{"id":"timeline","h2":"Planning Backward from Your Window","html":"<table><tr><th>When</th><th>Focus</th></tr><tr><td>5&ndash;6 months before</td><td>Download the BoK and effectivity sheet; obtain study copies of the listed editions</td></tr><tr><td>4&ndash;5 months before</td><td>Submit your application before the deadline</td></tr><tr><td>3&ndash;4 months before</td><td>Work through the referenced documents; drill the calculations listed in the BoK</td></tr><tr><td>1&ndash;2 months before</td><td>Timed practice: closed-book recall, then open-book navigation in electronic copies</td></tr><tr><td>Final weeks</td><td>Review weak areas; confirm Prometric location and ID</td></tr></table>"}];

const faqs: { question: string; answer: string }[] = [{"question":"When is the next API 510 exam in 2026?","answer":"API 510 windows in 2026 are January 2-23, May 8-29 and September 4-25 (application deadlines October 31, 2025, March 13, 2026 and July 3, 2026). The next windows are January 2-22, 2027 (deadline October 29, 2026) and May 7-28, 2027. Confirm on api.org."},{"question":"What is the API 570 exam schedule for 2026?","answer":"API 570 windows in 2026 are February 6-27, June 5-26 and October 9-30, with deadlines of December 5, 2025, April 3, 2026 and August 7, 2026. The first 2027 window runs January 29 to February 19, 2027 (deadline November 26, 2026)."},{"question":"When is the API 653 exam in 2026?","answer":"API 653 windows in 2026 are March 13 to April 3, July 10-31 and November 6-27, with deadlines of January 9, May 8 and September 4, 2026. In 2027 the windows are March 12 to April 2, July 9-30 and November 5-26."},{"question":"Can I take the API 510, 570 or 653 exam online?","answer":"No. API states that API 510, 570, 653, 1169 and 1184 are not available for remote testing; they are taken in person at Prometric test centers."},{"question":"How long does it take to get results?","answer":"API states that Prometric emails a score report, typically within 24 hours of testing, and that final results are uploaded to the ICP portal afterwards; certificates are issued once the application has no deficiencies."},{"question":"How much do the API exams cost?","answer":"API sets the application, exam and recertification fees and lists them on its ICP Schedules & Fees page, with different amounts for API members and non-members. Check api.org for the current figures."},{"question":"What happens if I miss an API exam window?","answer":"You need a reschedule/retest application (with its fee) to move to a later window. Each certification has three windows a year, so the next one is usually about four months away."}];

const related: { to: string; title: string; desc: string }[] = [{"to":"/api-510-certification","title":"API 510 Certification","desc":"Pressure vessel inspector guide"},{"to":"/api-570-certification","title":"API 570 Certification","desc":"Piping inspector guide"},{"to":"/api-653-certification","title":"API 653 Certification","desc":"Tank inspector guide"},{"to":"/blog/api-icp-pass-rates-510-vs-570-vs-653-2026","title":"API ICP Pass Rates","desc":"What API’s published data shows"},{"to":"/blog/api-510-body-of-knowledge-2026-changes-explained","title":"API 510 BoK 2026","desc":"Reference editions and changes"}];

export default function API510570653ExamSchedule2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 510, 570, 653 Exam Schedule 2026: Application Deadlines + Exam Windows",
                "description": "API 510, 570 and 653 exam windows and application deadlines for 2026 and 2027 from api.org. Exams are at Prometric test centers; no remote proctoring. Prep timeline included.",
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
                title="API 510 / 570 / 653 Exam Schedule 2026 — Windows & Deadlines"
                description="API 510, 570 and 653 exam windows and application deadlines for 2026 and 2027 from api.org. Exams are at Prometric test centers; no remote proctoring. Prep timeline included."
                keywords="api 510 exam schedule 2026, api 570 exam schedule 2026, api 653 exam schedule 2026, API ICP exam dates 2026, API exam windows 2026, API application deadline 2026, Prometric API"
                canonical="https://atlantisndt.com/blog/api-510-570-653-exam-schedule-2026"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-14">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-amber-200 mb-4">Exam Schedule • Updated October 2026 • Source: api.org</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510, 570, 653 Exam Schedule 2026: Windows, Deadlines and Dates</h1>
                    <p className="text-xl text-amber-100" dangerouslySetInnerHTML={{ __html: "Every 2026 and 2027 exam window and application deadline for <a href=\"/api-510-certification\">API 510</a>, <a href=\"/api-570-certification\">API 570</a> and <a href=\"/api-653-certification\">API 653</a>, taken from API&#39;s ICP Schedules &amp; Fees page. Each certification is tested in three windows a year at Prometric test centers. Always confirm on api.org before you plan." }} />
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
