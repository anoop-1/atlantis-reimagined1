// /* INLINE_ANCHORS_INJECTED_v1 */
// 2026-10-16: all copy, tables and FAQs come from src/data/asnt-certification-2026-10.json, resolved by
// src/data/asnt-certification-2026-10.mjs — the same resolver that builds the crawler page through
// scripts/editorial-upgrades.mjs (one source per fact, CLAUDE.md §19.1/§46.3). Hours come from
// src/data/snt-tc-1a-hours.json. ASNT facts and fees as published on certification.asnt.org, checked
// October 2026. No Atlantis prices; the old ACCP fee table, salary bands and invisible FAQ/HowTo schema are gone.
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import TableOfContents from "@/components/TableOfContents";
import TrainingGapInbound from "@/components/TrainingGapInbound";
import SNT_HOURS from "@/data/snt-tc-1a-hours.json";
import ASNT_CERT from "@/data/asnt-certification-2026-10.json";
import { resolveAsntCertification } from "@/data/asnt-certification-2026-10.mjs";
import { buildTechArticleSchema } from "@/data/author-schema";
import { ServiceContextBlock } from "@/components/InspectionL3Content";

const page = resolveAsntCertification(ASNT_CERT, SNT_HOURS);
const linkClass = "text-[#004aad] font-semibold underline underline-offset-2 hover:opacity-80";

function A({ link: [href, label] }: { link: [string, string] }) {
    return /^https?:\/\//.test(href)
        ? <a href={href} rel="noopener" target="_blank" className={linkClass}>{label}</a>
        : <Link to={href} className={linkClass}>{label}</Link>;
}

function DataTable({ caption, head, rows }: { caption: string; head: string[]; rows: ReactNode[][] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <caption className="text-left text-slate-600 mb-3">{caption}</caption>
                <thead>
                    <tr className="bg-[#004aad] text-white">
                        {head.map((h) => <th key={h} scope="col" className="px-4 py-3 text-left font-semibold">{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            {row.map((cell, j) => j === 0
                                ? <th key={j} scope="row" className="px-4 py-3 text-left font-medium text-slate-900">{cell}</th>
                                : <td key={j} className="px-4 py-3 text-slate-700">{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const faqs = page.faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function ASNTCertification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/asnt-certification",
                headline: page.h1,
                description: page.description,
                datePublished: "2025-09-01",
                dateModified: "2026-10-16",
                section: "NDT Certifications",
                keywords: "ASNT certification, ASNT NDT Level II, ASNT NDT Level III, ASNT 9712, SNT-TC-1A, CP-189, ASNT exam",
                dependencies: "ASNT SNT-TC-1A (2024), ANSI/ASNT CP-189 (2024), ANSI/ASNT CP-9712:2023, ISO 9712:2021",
            }),
            {
                "@type": "EducationalOccupationalCredential",
                "name": "ASNT NDT Level II and ASNT NDT Level III",
                "credentialCategory": "Professional Certification",
                "recognizedBy": { "@type": "Organization", "name": "American Society for Nondestructive Testing", "url": "https://www.asnt.org" },
                "competencyRequired": "Training, documented NDT experience and ASNT examinations as published on certification.asnt.org"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title={page.title}
                description={page.description}
                keywords="ASNT certification, ASNT 9712, ASNT NDT Level II, ASNT NDT Level III, ASNT Level III, ASNT NDT certification, NDT certification, SNT-TC-1A certification, SNT-TC-1A 2024, CP-189, ASNT exam fees, NDT Level I II III"
                canonical="https://atlantisndt.com/asnt-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
            <TableOfContents items={[{ id: "overview", label: "How to get ASNT certified" }, { id: "paths", label: "SNT-TC-1A vs ASNT central certification" }, { id: "levels", label: "Level I / II / III" }, { id: "methods", label: "Hours by method" }, { id: "how-to-become-certified", label: "ASNT NDT Level II and III" }, { id: "fees", label: "ASNT exam fees" }, { id: "training", label: "Where Atlantis training fits" }, { id: "faq", label: "FAQ" }]} />
            <div id="overview">
                <QuickAnswerBox question={page.answer.q} answer={page.answer.a} bullets={page.answer.bullets} />
            </div>

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{page.h1}</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">{page.lead}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to={page.cta[0][0]} className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">{page.cta[0][1]}</Link>
                            <Link to={page.cta[1][0]} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">{page.cta[1][1]}</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {page.stats.map(([value, label]) => (
                            <div key={label}><div className="text-3xl font-bold text-[#004aad] mb-2">{value}</div><div className="text-slate-600">{label}</div></div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="paths" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">{page.schemes.h2}</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">{page.schemes.intro}</p>
                    <DataTable caption={page.schemes.caption} head={page.schemes.head} rows={page.schemes.rows} />
                    <div className="max-w-4xl mx-auto mt-8 space-y-4 text-slate-700">
                        {page.schemes.notes.map((n) => <p key={n}>{n}</p>)}
                    </div>
                </div>
            </section>

            <section id="levels" className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">{page.levels.h2}</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">{page.levels.intro}</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {page.levels.items.map(([level, does, qualifies]) => (
                            <Card key={level} className="relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#004aad]"></div>
                                <CardHeader><CardTitle className="text-xl">{level}</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-4">{does}</p>
                                    <p className="text-sm"><span className="text-slate-500">{page.levels.head[2]}: </span><span className="font-medium">{qualifies}</span></p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="methods" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">{page.hours.h2}</h2>
                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">{page.hours.intro}</p>
                    <DataTable
                        caption={page.hours.caption}
                        head={page.hours.head}
                        rows={page.hoursRows.map((r) => [<Link key={r.key} to={r.href} className="font-medium text-[#004aad] hover:underline">{r.name}</Link>, r.classroom, r.experience])}
                    />
                    <p className="text-slate-700 mt-6">{page.hours.after} <A link={page.hours.link} />.</p>
                </div>
            </section>

            <section id="how-to-become-certified" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 space-y-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{page.level2.h2}</h2>
                        <p className="text-slate-700">{page.level2.p}</p>
                        <p className="text-slate-700 mt-4">Prepare with <A link={page.level2.link} />.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{page.level3.h2}</h2>
                        <p className="text-slate-700 mb-6">{page.level3.intro}</p>
                        <DataTable caption={page.level3.eligibilityCaption} head={page.level3.eligibilityHead} rows={page.eligibilityRows} />
                        <div className="mt-8"><DataTable caption={page.level3.examsCaption} head={page.level3.examsHead} rows={page.examRows} /></div>
                        <p className="text-slate-700 mt-6">{page.level3.renewal}</p>
                        <p className="text-slate-700 mt-4">Prepare with <A link={page.level3.links[0]} /> and <A link={page.level3.links[1]} />.</p>
                    </div>
                </div>
            </section>

            <section id="fees" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">{page.fees.h2}</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">{page.fees.intro}</p>
                    <div className="space-y-10">
                        {page.fees.tables.map((t) => (
                            <div key={t.caption}>
                                <DataTable caption={t.caption} head={page.fees.head} rows={t.rows} />
                                <p className="text-slate-700 mt-3">Source: <A link={[t.url, t.urlLabel]} />.</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-700 mt-6">{page.fees.renewalNote} See the <A link={page.fees.renewalLink} />.</p>
                </div>
            </section>

            <section id="training" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">{page.training.h2}</h2>
                    <div className="space-y-4 text-slate-700">
                        {page.training.paras.map((p) => <p key={p}>{p}</p>)}
                    </div>
                    <ul className="list-disc pl-6 mt-6 space-y-2">
                        {page.training.links.map((l) => <li key={l[0]}><A link={l} /></li>)}
                    </ul>
                </div>
            </section>

            <section id="faq" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions about ASNT certification</h2>
                    <div className="space-y-4">
                        {page.faqs.map((faq) => (<div key={faq.q} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.q}</h3><p className="text-slate-600">{faq.a}</p></div>))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Related certification guides</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {page.related.map(([path, name]) => (
                            <Link key={path} to={path} className="block p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all group">
                                <span className="font-semibold text-slate-900 group-hover:text-[#004aad] transition-colors text-sm">{name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="max-w-4xl mx-auto mt-10 text-sm text-slate-600">
                        <h2 className="text-xl font-bold text-slate-900 mb-3">Sources</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            {page.sources.map((l) => <li key={l[0]}><A link={l} /></li>)}
                        </ul>
                        <p className="mt-3">{page.sourcesNote}</p>
                    </div>
                </div>
            </section>

            {/* 2026-05-17 additive: Related ASNT guides — links into new GSC-driven posts */}
            <section className="bg-slate-50 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">More ASNT & NDT Certification Guides (2026)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/blog/asnt-level-3-fees-2026-complete-pricing-table" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">ASNT Level 3 Fees 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">What drives the cost of ASNT Level III certification</p>
                        </Link>
                        <Link to="/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">ISO 9712 vs ASNT Decision Flowchart</h3>
                            <p className="text-slate-600 text-sm mt-2">Pick the right NDT cert by country and employer in 2 minutes</p>
                        </Link>
                        <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API ICP Pass Rates 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 pass rates, retake stats, study-hour benchmarks</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
            <section className="bg-white py-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <ErpDtCrossPromoBlock
                        relevantApp="CMMS"
                        relevantAppHref="/erp/cmms-for-inspection-companies"
                    />
                </div>
            </section>
        {/* 2026-10-09 sprint (Day 6): next step for this page's US query (same block in the crawler HTML). */}
        <div className="container mx-auto px-6 max-w-4xl"><ServiceContextBlock path="/asnt-certification" /></div>
        <RelatedGuidesBlock links={[
              {
                    "title": "API 510 Pressure Vessel Inspector",
                    "href": "/api-510-certification",
                    "description": "In-service pressure vessel inspection cert prep",
                    "icon": "cert"
              },
              {
                    "title": "API 570 Piping Inspector",
                    "href": "/api-570-certification",
                    "description": "Process piping inspection cert prep",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Tank Inspector",
                    "href": "/api-653-certification",
                    "description": "Aboveground storage tank inspection prep",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Level III Consulting Services",
                    "href": "/consulting/ndt-consulting-level-iii",
                    "description": "Outsourced Level III of record",
                    "icon": "consulting"
              },
              {
                    "title": "SNT-TC-1A Certification Overview",
                    "href": "/snt-tc-1a-certification",
                    "description": "What it is, employer-based model, levels & comparisons",
                    "icon": "cert"
              },
              {
                    "title": "SNT-TC-1A Requirements Guide",
                    "href": "/blog/asnt-snt-tc-1a-certification-requirements",
                    "description": "2024 employer-based cert deep dive",
                    "icon": "blog"
              },
              {
                    "title": "CMMS for Inspection Companies",
                    "href": "/erp/cmms-for-inspection-companies",
                    "description": "Affordable certification + asset tracking",
                    "icon": "erp"
              }
        ]} />

        <TrainingGapInbound path="/asnt-certification" />
        <ContactDetails />
        </div>
    );
}
