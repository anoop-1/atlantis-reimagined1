import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    Droplets,
    Factory,
    Flame,
    Gauge,
    AlertTriangle,
    TrendingUp,
    Clock,
    DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const applications = [
    {
        icon: Droplets,
        title: "Storage Tank Inspection",
        description: "Visualize corrosion mapping, floor thickness data, and weld inspection results on 3D tank models. Track shell course degradation over multiple inspection cycles.",
        benefit: "40% faster turnaround planning"
    },
    {
        icon: Flame,
        title: "Heat Exchanger Monitoring",
        description: "Display eddy current and IRIS inspection results on tube bundle models. Identify tubes requiring plugging and predict remaining life.",
        benefit: "60% reduction in unplanned shutdowns"
    },
    {
        icon: Gauge,
        title: "Pressure Vessel Analysis",
        description: "Combine UT, RT, and surface examination data in unified 3D views. Calculate remaining strength per API 579/ASME FFS.",
        benefit: "35% improvement in fitness-for-service decisions"
    },
    {
        icon: Factory,
        title: "Pipeline Integrity",
        description: "Map ILI (intelligent pigging) data onto pipeline digital twins. Identify anomalies, prioritize dig locations, and plan repairs.",
        benefit: "50% better anomaly localization"
    }
];

const caseStudyStats = [
    { value: "78%", label: "Reduction in report preparation time" },
    { value: "45%", label: "Decrease in turnaround duration" },
    { value: "32%", label: "Cost savings on inspections" },
    { value: "90%", label: "Improvement in stakeholder communication" }
];

const challenges = [
    {
        icon: AlertTriangle,
        title: "Data Silos",
        problem: "Inspection data scattered across multiple systems",
        solution: "Digital twins unify all data sources into a single visual platform"
    },
    {
        icon: Clock,
        title: "Slow Reporting",
        problem: "Days or weeks to compile comprehensive inspection reports",
        solution: "Real-time data visualization eliminates manual report creation"
    },
    {
        icon: DollarSign,
        title: "Costly Downtime",
        problem: "Unplanned failures causing production losses",
        solution: "Predictive analytics identify issues before they cause failures"
    }
];

const faqs = [
    {
        question: "What data sources can be integrated into an oil & gas digital twin?",
        answer: "We can integrate UT thickness gauges, PAUT scanners, RT/DR systems, ET instruments, ILI data, SCADA/PLC data, corrosion monitoring systems, and historical inspection databases."
    },
    {
        question: "Is the digital twin solution cloud-based or on-premise?",
        answer: "Both options are available. Cloud deployment offers easier access and lower maintenance, while on-premise installations are preferred by organizations with strict data security requirements."
    },
    {
        question: "How does this help with API 653 and API 510 inspections?",
        answer: "Digital twins automatically calculate corrosion rates, remaining life, and next inspection dates per API standards. They generate compliant reports and track all required documentation."
    }
];

export default function DigitalTwinsOilGas() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Twins for Oil & Gas Industry",
                "description": "How refineries and petrochemical plants use digital twin technology for predictive maintenance, turnaround planning, and asset integrity management.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-01-15",
                "dateModified": "2026-01-15"
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
                title="Digital Twins for Oil & Gas 2026 — Save $2M+ Per Turnaround"
                description="2026 digital twins for oil & gas: refinery turnarounds, pipeline integrity, tank monitoring. Case studies show 40% cost cut. Vendor comparison & implementation. Read free."
                keywords="digital twins oil gas, refinery digital twin, pipeline digital twin, storage tank visualization, heat exchanger inspection, petrochemical digital twin, API 653, API 510"
                canonical="https://atlantisndt.com/blog/digital-twins-oil-gas"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-amber-200 mb-4">Industry Guide • January 2026 • 10 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Digital Twins for Oil & Gas Industry
                        </h1>
                        <p className="text-xl text-amber-100 mb-8">
                            How refineries and petrochemical plants are using digital twin technology
                            for predictive maintenance, turnaround optimization, and asset integrity management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">The Digital Transformation of Oil & Gas</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The oil & gas industry faces constant pressure to maximize uptime while managing
                            aging assets and stringent safety regulations. <strong>Digital twins</strong> are
                            emerging as a game-changing technology, enabling operators to visualize NDT inspection
                            data in 3D, predict equipment failures, and optimize maintenance schedules.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            According to McKinsey, digital twin adoption in oil & gas can reduce maintenance
                            costs by 10-25% and increase equipment uptime by 10-20%. Major operators including
                            Shell, BP, and Saudi Aramco have already deployed digital twin solutions across
                            their refining and upstream operations.
                        </p>
                    </section>

                    {/* Stats */}
                    <section className="mb-12 bg-slate-900 text-white p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-6 text-center">Industry Impact Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {caseStudyStats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
                                    <div className="text-sm text-slate-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Key Applications in Oil & Gas</h2>
                        <div className="space-y-6">
                            {applications.map((app, index) => (
                                <motion.div
                                    key={app.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="border-l-4 border-l-amber-500">
                                        <CardHeader className="pb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-amber-100 p-2 rounded-lg">
                                                    <app.icon className="w-6 h-6 text-amber-600" />
                                                </div>
                                                <CardTitle className="text-xl">{app.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-600 mb-3">{app.description}</p>
                                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                                <TrendingUp className="w-4 h-4" />
                                                {app.benefit}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Challenges Digital Twins Solve</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {challenges.map((challenge) => (
                                <div key={challenge.title} className="bg-white p-6 rounded-xl shadow-sm">
                                    <challenge.icon className="w-8 h-8 text-amber-600 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                                    <p className="text-red-600 text-sm mb-2">
                                        <strong>Problem:</strong> {challenge.problem}
                                    </p>
                                    <p className="text-green-600 text-sm">
                                        <strong>Solution:</strong> {challenge.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Case Study */}
                    <section className="mb-12 bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-xl">
                        <h2 className="text-3xl font-bold mb-4">Case Study: Gulf Coast Refinery</h2>
                        <p className="text-slate-600 mb-6">
                            A major Gulf Coast refinery implemented Atlantis NDT's digital twin solution
                            for their 50+ storage tanks and critical pressure vessels. Results after 12 months:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Reduced inspection data compilation time from 5 days to 4 hours",
                                "Identified 3 high-risk tanks that were prioritized for early maintenance",
                                "Saved $2.8M in avoided unplanned shutdowns",
                                "Improved turnaround planning accuracy by 45%",
                                "Achieved 100% compliance with API 653 requirements"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Implementation */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
                        <p className="text-slate-600 text-lg mb-6">
                            Implementing a digital twin solution for your oil & gas facility typically involves:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { step: "1", title: "Asset Prioritization", desc: "Identify critical assets for initial deployment" },
                                { step: "2", title: "3D Model Creation", desc: "Develop accurate 3D models from CAD or laser scans" },
                                { step: "3", title: "Data Integration", desc: "Connect inspection databases and real-time sensors" },
                                { step: "4", title: "Training & Rollout", desc: "Train inspectors and engineers on the platform" }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                                    <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Transform Your Asset Integrity Program</h2>
                        <p className="text-amber-100 mb-6">
                            See how digital twins can reduce costs and improve decision-making at your facility.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition"
                        >
                            Schedule a Consultation
                        </Link>
                    </section>

                    {/* Related */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/digital-twins-ndt-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">Complete Guide to Digital Twins in NDT</h3>
                                <p className="text-slate-600 text-sm mt-2">Everything you need to know about digital twin technology</p>
                            </Link>
                            <Link to="/digital-twins" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">Interactive 3D Demo</h3>
                                <p className="text-slate-600 text-sm mt-2">Try our digital twin models yourself</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
