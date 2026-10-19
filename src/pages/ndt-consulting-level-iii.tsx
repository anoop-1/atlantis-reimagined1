import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { LevelIiiEngagements } from "@/components/InspectionL3Content";
import MP from "@/data/money-pages-2026-10.json";
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
import { SITE, ORG_ID, FOUNDER_ID, founderPageNodes } from "@/lib/founder-person";
import { inlineLinks, level3ProfessionalServiceNode } from "@/data/rank-wave14-2026-10.mjs"; // 2026-10-17 §58: same copy + node as the crawler HTML

// 2026-10-12 (SEO audit action 9): "outsourced" and "outside agency Level III" in the
// title, H1 and copy, a query-verbatim "What is an outsourced NDT Level III?" answer,
// the founder Person entity, and claims the business cannot evidence removed (a team
// of Level IIIs, 15+ years, ET and six methods, OEM experience, a 48-hour proposal).
// Copy shared with the crawler HTML: src/data/money-pages-2026-10.json (level3).
const L3 = MP.level3;
const L3_META = MONEY_META["/consulting/ndt-consulting-level-iii"];

// 2026-10-18 consulting teardown (CLAUDE.md §59): the stacked legacy layers (services cards,
// in-house vs outsourced table, industries, second FAQ, related cards) are gone. In production this
// path is published (src/lib/published-pages.ts): visitors see the crawler <main> built by
// scripts/consulting-release-2026-10-18.mjs from the same money-pages-2026-10.json data rendered here.
export default function NDTConsultingLevelIII() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            level3ProfessionalServiceNode(L3, { site: SITE, orgId: ORG_ID, authorId: FOUNDER_ID }),
            ...founderPageNodes(L3.path, L3_META.title, `${SITE}${L3.path}#professional-service`),
            {
                "@type": "FAQPage",
                "@id": `${SITE}${L3.path}#faq`,
                "mainEntity": L3.faq.items.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1") },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title={L3_META.title}
                description={L3_META.description}
                keywords="outsourced NDT Level III, outside agency Level III, NDT Level III consulting, NDT procedure development, NDT program audit, ASNT Level III, NDT independent technical review, NDT technical consulting, Level III consultant, ASNT CP-189, SNT-TC-1A, NDE program audit, NDT technique development, PAUT procedure, NAS 410 consulting"
                canonical="https://atlantisndt.com/consulting/ndt-consulting-level-iii"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* ─── Hero ─── */}
            <section className="bg-gradient-to-br from-slate-700 to-gray-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-slate-300 mb-4">
                            <Users className="w-5 h-5" />
                            <span>Consulting Services</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{L3.h1}</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">{L3.intro}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Request Quote
                            </Link>
                            <Link
                                to="/consulting"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                All Consulting Locations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── What is an outsourced NDT Level III? (query-verbatim H2 + direct answer, §25.4) ─── */}
            <section id={L3.qa.id} className="py-14 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 space-y-4 text-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900">{L3.qa.h2}</h2>
                    <p className="text-lg">{L3.qa.answer}</p>
                    {L3.qa.more.map((p) => <p key={p}>{p}</p>)}
                    <p>
                        {L3.qa.founder}{" "}
                        <Link to="/authors/anoop-rayavarapu" className="text-[#004aad] underline">About the founder</Link>.
                    </p>
                </div>
            </section>
            <section id="level-iii-scope" className="py-10 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{L3.covers.h2}</h2>
                    <p className="mb-3">{L3.covers.p}</p>
                    <p className="text-sm">
                        See also:{" "}
                        {L3.covers.links.map((l, i) => (
                            <span key={l.href}>
                                {i > 0 && ", "}
                                <Link to={l.href} className="text-[#004aad] hover:underline">{l.label}</Link>
                            </span>
                        ))}
                        .
                    </p>
                </div>
            </section>

            {/* ─── 2026-10-17 §58: named Level III, deliverables, process, choosing (money-pages-2026-10.json level3.*) ─── */}
            <section id={L3.expert.id} className="py-12 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 space-y-3 text-slate-700 [&_a]:text-[#004aad] [&_a]:underline">
                    <h2 className="text-2xl font-bold text-slate-900">{L3.expert.h2}</h2>
                    <p>{L3.expert.p}</p>
                    <p dangerouslySetInnerHTML={{ __html: inlineLinks(L3.expert.verify) }} />
                </div>
            </section>
            <section id={L3.deliverables.id} className="py-12 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{L3.deliverables.h2}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border border-slate-200 bg-white">
                            <caption className="sr-only">{L3.deliverables.h2}</caption>
                            <thead className="bg-slate-100 text-slate-900">
                                <tr><th scope="col" className="p-3">Deliverable</th><th scope="col" className="p-3">What you receive</th></tr>
                            </thead>
                            <tbody>
                                {L3.deliverables.items.map((d) => (
                                    <tr key={d.name} className="border-t border-slate-200 align-top">
                                        <th scope="row" className="p-3 font-semibold text-slate-900">{d.name}</th>
                                        <td className="p-3" dangerouslySetInnerHTML={{ __html: inlineLinks(d.text) }} />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id={L3.process.id} className="py-12 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{L3.process.h2}</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        {L3.process.steps.map((st) => (
                            <li key={st.h}><strong>{st.h}.</strong> {st.p}</li>
                        ))}
                    </ol>
                    <p className="mt-4">{L3.process.note}</p>
                </div>
            </section>
            <section id={L3.choose.id} className="py-12 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{L3.choose.h2}</h2>
                    <p className="mb-3">{L3.choose.intro}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        {L3.choose.items.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                </div>
            </section>

            <LevelIiiEngagements />

            {[L3.audit, L3.methodScope].map((sec) => (
                <section key={sec.id} id={sec.id} className="py-12 bg-white scroll-mt-24">
                    <div className="container mx-auto max-w-4xl px-6 space-y-3 text-slate-700 [&_a]:text-[#004aad] [&_a]:underline">
                        <h2 className="text-2xl font-bold text-slate-900">{sec.h2}</h2>
                        {sec.paragraphs.map((p) => <p key={p.slice(0, 40)} dangerouslySetInnerHTML={{ __html: inlineLinks(p) }} />)}
                    </div>
                </section>
            ))}

            <section id={L3.faq.id} className="py-16 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8">{L3.faq.h2}</h2>
                    <div className="space-y-4">
                        {L3.faq.items.map((f) => (
                            <div key={f.q} className="bg-white p-6 rounded-lg shadow-sm [&_a]:text-[#004aad] [&_a]:underline">
                                <h3 className="font-bold text-lg mb-3">{f.q}</h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineLinks(f.a) }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <nav id={L3.related.id} aria-label={L3.related.h2} className="py-12 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{L3.related.h2}</h2>
                    <ul className="grid sm:grid-cols-2 gap-2">
                        {L3.related.links.map((l) => (
                            <li key={l.href}><Link to={l.href} className="text-[#004aad] hover:underline">{l.label}</Link></li>
                        ))}
                    </ul>
                </div>
            </nav>

            <ContactDetails />
        </div>
    );
}
