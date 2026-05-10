// === ERP/DT PRODUCT HUB 2026-05-09 ===
// Shared layout for the 30 ERP + Digital Twin product hub pages built on
// 2026-05-09. Render: hero, comparison table, FAQ accordion, related links,
// CTA. Each page provides its unique content as props.

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export interface CompareRow {
    factor: string;
    atlantis: string;
    competitor: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface RelatedLink {
    href: string;
    title: string;
    blurb: string;
}

export interface ProductPageProps {
    title: string;
    description: string;
    canonical: string;
    eyebrow: string;
    h1: string;
    intro: string;
    heroGradient?: string; // e.g. "from-blue-700 to-indigo-800"
    competitorLabel?: string; // table header
    compareRows?: CompareRow[];
    bodyChildren: ReactNode;
    faqs: FAQ[];
    related: RelatedLink[];
    ctaTitle: string;
    ctaSubtitle: string;
    structuredData: object;
}

export default function ProductPageLayout(props: ProductPageProps) {
    const grad = props.heroGradient || "from-blue-700 to-indigo-800";
    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                structuredData={props.structuredData}
                faq={props.faqs}
            />
            <Breadcrumbs />

            <section className={`bg-gradient-to-br ${grad} text-white pt-24 pb-16`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-blue-100 mb-3 text-sm uppercase tracking-wide">{props.eyebrow}</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{props.h1}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">{props.intro}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Digital Twin Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    {props.bodyChildren}
                </div>
            </section>

            {props.compareRows && props.compareRows.length > 0 && (
                <section className="py-8 bg-slate-50">
                    <div className="container mx-auto max-w-6xl px-6">
                        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Side-by-Side Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-xl shadow-sm">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Factor</th>
                                        <th className="px-4 py-3 text-left text-blue-200">Atlantis Digital Twin</th>
                                        <th className="px-4 py-3 text-left text-amber-200">{props.competitorLabel || "Competitor"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.compareRows.map((row, i) => (
                                        <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="px-4 py-3 font-medium text-sm align-top">{row.factor}</td>
                                            <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.atlantis}</td>
                                            <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {props.faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-blue-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {props.related.map((r, i) => (
                            <Link key={i} to={r.href} className="group">
                                <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-slate-800 group-hover:text-blue-700">{r.title}</h3>
                                            <ArrowRight className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <p className="text-sm text-slate-600">{r.blurb}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`py-16 bg-gradient-to-r ${grad} text-white text-center`}>
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">{props.ctaTitle}</h2>
                    <p className="text-blue-100 mb-8 text-lg">{props.ctaSubtitle}</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Digital Twin Page</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
