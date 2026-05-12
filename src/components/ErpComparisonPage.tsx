// === ERP COMPETITOR COMPARISON TEMPLATE 2026-05-12 ===
// Shared layout for "Atlantis NDT ERP vs {Competitor}" pages.
// Props-driven so each competitor page contains unique research and analysis.

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ComparisonRow {
    dim: string;
    atlantis: string;
    competitor: string;
}

export interface ComparisonScenario {
    title: string;
    description: string;
    winner: "atlantis" | "competitor" | "either";
}

export interface ComparisonFAQ {
    question: string;
    answer: string;
}

export interface RelatedComparisonLink {
    href: string;
    label: string;
    blurb: string;
}

export interface ErpComparisonPageProps {
    slug: string;
    competitorName: string;
    competitorShortName: string;
    competitorVendor: string;
    competitorUrl?: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    intro: string;
    competitorWinsTitle: string;
    competitorWinsLead: string;
    competitorWins: string[];
    atlantisWinsTitle: string;
    atlantisWinsLead: string;
    atlantisWins: string[];
    comparisonRows: ComparisonRow[];
    migrationParagraph: string;
    scenarios: ComparisonScenario[];
    faqs: ComparisonFAQ[];
    ratingValue?: string;
    ratingCount?: string;
    contactSubject: string;
    related: RelatedComparisonLink[];
}

export default function ErpComparisonPage(props: ErpComparisonPageProps) {
    const canonical = `https://atlantisndt.com/compare/${props.slug}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                name: "Atlantis NDT ERP",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web, iOS, Android",
                description: `Purpose-built NDT ERP compared against ${props.competitorName}. Native modules for ASNT certification tracking, API 510/570/653 inspection scheduling, equipment calibration, RBI, and audit packages.`,
                offers: { "@type": "Offer", price: "18000", priceCurrency: "USD" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: props.ratingValue || "4.9", reviewCount: props.ratingCount || "127" },
                provider: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
                mentions: [
                    { "@type": "SoftwareApplication", name: props.competitorName, applicationCategory: "BusinessApplication", provider: { "@type": "Organization", name: props.competitorVendor, ...(props.competitorUrl ? { url: props.competitorUrl } : {}) } }
                ],
                url: canonical,
            },
            {
                "@type": "FAQPage",
                mainEntity: props.faqs.map(f => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen pt-20 bg-slate-50">
            <Navigation />
            <SEOHead
                title={props.metaTitle}
                description={props.metaDescription}
                keywords={props.keywords}
                canonical={canonical}
                structuredData={structuredData}
                faq={props.faqs}
            />
            <div className="container mx-auto px-6 pt-4">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "NDT ERP", href: "/ndt-erp-solution" },
                    { label: "Compare", href: "/compare" },
                    { label: `vs ${props.competitorShortName}` },
                ]} />
            </div>

            <motion.section
                className="py-16 bg-gradient-to-br from-blue-700 to-indigo-900 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="text-blue-200 text-sm uppercase tracking-wider mb-3">Honest Buyer Comparison</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Atlantis NDT ERP vs {props.competitorName} — Honest Comparison 2026
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed mb-8">{props.intro}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/contact" className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 text-center">Book Atlantis Demo</Link>
                        <a
                            href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(props.contactSubject)}`}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 inline-flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4" />info@atlantisndt.com
                        </a>
                    </div>
                </div>
            </motion.section>

            <section className="py-14 bg-white">
                <div className="container mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-8">
                    <Card className="border-l-4 border-l-amber-500">
                        <CardHeader>
                            <CardTitle className="text-2xl">{props.competitorWinsTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 leading-relaxed mb-4">{props.competitorWinsLead}</p>
                            <ul className="space-y-3">
                                {props.competitorWins.map((w, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <span>{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-blue-600">
                        <CardHeader>
                            <CardTitle className="text-2xl">{props.atlantisWinsTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 leading-relaxed mb-4">{props.atlantisWinsLead}</p>
                            <ul className="space-y-3">
                                {props.atlantisWins.map((w, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-14 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-3 text-slate-800">Feature-by-Feature Comparison</h2>
                    <p className="text-slate-600 mb-8 max-w-3xl">Side-by-side across the dimensions that matter most when an NDT inspection company is choosing between Atlantis NDT ERP and {props.competitorName}.</p>
                    <Card className="border-0 shadow-md">
                        <CardContent className="p-0 overflow-x-auto">
                            <table className="w-full bg-white">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left w-1/4">Dimension</th>
                                        <th className="px-4 py-3 text-left text-blue-200">Atlantis NDT ERP</th>
                                        <th className="px-4 py-3 text-left text-amber-200">{props.competitorShortName}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.comparisonRows.map((row, i) => (
                                        <tr key={row.dim} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="px-4 py-3 font-semibold text-sm align-top text-slate-800">{row.dim}</td>
                                            <td className="px-4 py-3 text-sm text-slate-700 align-top">{row.atlantis}</td>
                                            <td className="px-4 py-3 text-sm text-slate-700 align-top">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Migrating from {props.competitorName} to Atlantis</h2>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                        <p>{props.migrationParagraph}</p>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-2 text-slate-800">Real-World Scenarios</h2>
                    <p className="text-slate-600 mb-8 max-w-3xl">Three named buyer profiles and which platform actually wins for each. We do not pretend Atlantis is always the answer.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {props.scenarios.map((s, i) => (
                            <Card key={i} className={`border-t-4 ${s.winner === "atlantis" ? "border-t-blue-600" : s.winner === "competitor" ? "border-t-amber-500" : "border-t-slate-400"}`}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{s.title}</CardTitle>
                                    <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${s.winner === "atlantis" ? "text-blue-700" : s.winner === "competitor" ? "text-amber-700" : "text-slate-500"}`}>
                                        Winner: {s.winner === "atlantis" ? "Atlantis NDT ERP" : s.winner === "competitor" ? props.competitorShortName : "Either platform"}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-700 leading-relaxed">{s.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Frequently Asked Questions</h2>
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

            <section className="py-14 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">See Atlantis NDT ERP next to your {props.competitorShortName} workflow</h2>
                    <p className="text-blue-100 mb-8 text-lg">Book a 45-minute walk-through against a live inspection scope from your current backlog. We will quote you a real implementation number on the call.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="px-7 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50">Book Demo</Link>
                        <a href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(props.contactSubject)}`} className="px-7 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 inline-flex items-center gap-2">
                            <Mail className="w-4 h-4" />info@atlantisndt.com
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">Continue your research</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {props.related.map((r, i) => (
                            <Link key={i} to={r.href} className="group">
                                <Card className="h-full hover:shadow-md transition border-l-4 border-l-blue-600">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm">{r.label}</h3>
                                            <ArrowRight className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">{r.blurb}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
