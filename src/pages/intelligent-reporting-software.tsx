import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    AlertTriangle,
    Shield,
    Eye,
    FileText,
    Database,
    Users,
    ArrowRight,
    Layers,
    Clock,
    TrendingUp,
    Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
    {
        icon: AlertTriangle,
        title: "Audit Non-Conformances",
        description: "ASME Section V procedures rejected. AIA documentation failures. Inspection results challenged during third-party audits."
    },
    {
        icon: FileText,
        title: "Scattered Inspection Data",
        description: "NDT reports in PDFs, spreadsheets, and paper files. No single source of truth for asset condition history."
    },
    {
        icon: Clock,
        title: "Manual Traceability Overhead",
        description: "Hours spent cross-referencing inspection dates, weld IDs, and technician certifications for compliance documentation."
    },
    {
        icon: Eye,
        title: "Limited Defect Visibility",
        description: "2D reports fail to communicate defect locations to stakeholders. Engineering decisions delayed by interpretation gaps."
    }
];

const features = [
    {
        icon: Layers,
        title: "3D Defect Visualization",
        description: "Map UT thickness, RT indications, MT/PT findings directly onto 3D asset geometry. Click any location to see full inspection history."
    },
    {
        icon: Shield,
        title: "Code-Compliant Reporting",
        description: "Built-in templates for ASME Section V, API 510/570/653, and client-specific requirements. Audit-ready documentation every time."
    },
    {
        icon: Database,
        title: "Full Lifecycle Traceability",
        description: "Every inspection, every technician, every calibration record linked to specific asset components. Complete chain of custody."
    },
    {
        icon: Zap,
        title: "Real-Time Data Integration",
        description: "Connect with existing CMMS, ERP, and inspection equipment. Eliminate manual data entry and transcription errors."
    },
    {
        icon: Users,
        title: "Stakeholder Collaboration",
        description: "Remote access for integrity engineers, QA managers, and clients. Shared visibility without email attachments."
    },
    {
        icon: TrendingUp,
        title: "Predictive Insights",
        description: "Corrosion rate trending, remaining life calculations, and risk-based inspection prioritization from your existing data."
    }
];

const targetAudience = [
    {
        title: "QA/QC Managers",
        description: "Facing audit scrutiny on NDT documentation and procedure compliance. Need defensible, traceable records.",
        pain: "Audit failures from disconnected documentation"
    },
    {
        title: "Inspection & Integrity Managers",
        description: "Managing asset condition across multiple facilities. Need lifecycle visibility for turnaround planning.",
        pain: "No unified view of asset health across sites"
    },
    {
        title: "EPC Contractors",
        description: "Coordinating NDT across multiple subcontractors and sites. Need standardized reporting for client deliverables.",
        pain: "Inconsistent reporting quality across teams"
    },
    {
        title: "Pressure Vessel & Piping Fabricators",
        description: "Managing client documentation requirements and third-party inspection coordination.",
        pain: "Manual documentation slowing project delivery"
    }
];

const comparisonPoints = [
    { traditional: "Static PDF reports", digital: "Interactive 3D visualization" },
    { traditional: "Manual cross-referencing", digital: "Automated traceability links" },
    { traditional: "Email-based sharing", digital: "Secure stakeholder portal" },
    { traditional: "Scattered file storage", digital: "Centralized asset database" },
    { traditional: "Retrospective analysis", digital: "Real-time condition monitoring" },
    { traditional: "Generic templates", digital: "Code-specific compliance" }
];

const faqs = [
    {
        question: "How long does implementation take?",
        answer: "Typical deployment is 4-8 weeks depending on asset complexity and data migration requirements. We start with a pilot asset to validate workflows before full rollout."
    },
    {
        question: "Does it integrate with our existing systems?",
        answer: "Yes. REST APIs connect with SAP, Oracle, Maximo, and other CMMS/ERP platforms. We also integrate directly with common NDT equipment for automated data capture."
    },
    {
        question: "What about our historical inspection data?",
        answer: "We migrate your existing PDF reports, spreadsheets, and database records into the platform. Historical data becomes searchable and linked to asset geometry."
    },
    {
        question: "Is this a subscription or one-time purchase?",
        answer: "Software is licensed annually with tiered pricing based on asset count and user seats. Implementation and data migration are separate one-time costs."
    },
    {
        question: "Can we run this on-premise?",
        answer: "Both cloud and on-premise deployments are available. Many clients in regulated industries choose on-premise for data sovereignty requirements."
    },
    {
        question: "What is the best NDT reporting software?",
        answer: "The best NDT reporting software combines digital twin integration, code compliance automation, full inspection traceability, and 3D defect visualization in a single platform. Look for solutions that eliminate manual PDF workflows while supporting ASME Section V, API 510/570/653, and client-specific requirements out of the box. Atlantis intelligent reporting software checks all of these boxes with enterprise-grade security, CMMS/ERP integration, and predictive analytics built in."
    },
    {
        question: "How does NDT reporting software improve compliance?",
        answer: "NDT reporting software improves compliance by automating traceability between inspections, technician certifications, calibration records, and specific asset components. Built-in code templates ensure every report meets ASME, API, and client-specific requirements without manual formatting. A complete digital audit trail tracks every data entry, revision, and approval, so you can demonstrate full compliance history to auditors in seconds rather than hours of cross-referencing paper files and spreadsheets."
    }
];

export default function IntelligentReportingSoftware() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Intelligent NDT Reporting Software",
                "applicationCategory": "BusinessApplication",
                "description": "Enterprise NDT reporting software with intelligent visualization. Map inspection data to asset geometry for full lifecycle traceability and audit-ready compliance documentation.",
                "operatingSystem": "Web-based, Cloud or On-Premise",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD"
                    }
                },
                "featureList": [
                    "3D Digital Twin Visualization",
                    "ASME Section V Compliance",
                    "API 510/570/653 Reporting",
                    "Full Inspection Traceability",
                    "CMMS/ERP Integration",
                    "Predictive Analytics"
                ]
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
                title="NDT Reporting Software: Replace PDF Reports with 3D Digital Twins [Free Demo]"
                description="Best NDT reporting software for oil & gas: auto-generate digital inspection reports with 3D visualization, API 510/570/653 compliance built-in, full audit trail. Replace paper-based reports. See ROI in 30 days — request free demo."
                keywords="NDT reporting software, NDT inspection software, best NDT reporting software, digital NDT reports, asset integrity software, NDT compliance software, inspection management system, 3D defect visualization, ASME API inspection software, oil gas NDT software, digital twin NDT, intelligent reporting software, MRO NDT solution, NDT data management"
                canonical="https://atlantisndt.com/intelligent-reporting-software"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4">
                            <Layers className="w-5 h-5" />
                            <span>Scalable Product</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Intelligent NDT Reporting Software
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-4">
                            Stop losing audits to disconnected documentation. Our intelligent reporting platform maps every inspection to asset geometry for complete traceability and compliance confidence.
                        </p>
                        <p className="text-lg text-emerald-200 max-w-2xl mb-8">
                            Built for QA/QC managers, integrity engineers, and asset owners who need defensible records—not scattered PDFs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://dt.atlantisndt.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition text-center shadow-lg"
                            >
                                <Zap className="w-5 h-5" />
                                Try Now
                            </a>
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition text-center shadow-lg"
                            >
                                Request a Demo
                            </Link>
                            <a
                                href="#when-you-need"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                            >
                                See If This Solves Your Problem
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">90%</div>
                            <div className="text-slate-600">Reduction in Report Preparation Time</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">Zero</div>
                            <div className="text-slate-600">Audit Non-Conformances from Documentation</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                            <div className="text-slate-600">Traceability Chain Integrity</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">3D</div>
                            <div className="text-slate-600">Visual Defect Mapping</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section id="when-you-need" className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">When You Need This Software</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            If any of these situations sound familiar, your current NDT reporting approach is creating risk.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-l-4 border-l-amber-500 hover:shadow-lg transition">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-amber-100 rounded-lg">
                                                <problem.icon className="w-6 h-6 text-amber-600" />
                                            </div>
                                            <CardTitle className="text-lg">{problem.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{problem.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What the Software Does</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Enterprise-grade NDT reporting with Digital Twin visualization—purpose-built for compliance and asset integrity.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-t-4 border-t-emerald-500">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <feature.icon className="w-8 h-8 text-emerald-600" />
                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Built for decision-makers responsible for inspection governance and asset integrity outcomes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {targetAudience.map((audience, index) => (
                            <motion.div
                                key={audience.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 p-6 rounded-xl"
                            >
                                <h3 className="text-xl font-bold mb-2 text-emerald-400">{audience.title}</h3>
                                <p className="text-slate-300 mb-4">{audience.description}</p>
                                <div className="flex items-start gap-2 text-amber-400 text-sm">
                                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Current pain: {audience.pain}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent vs. Traditional NDT Reporting</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            See why forward-thinking asset owners are moving beyond PDF-based documentation.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center font-bold text-slate-500 pb-2 border-b">Traditional Approach</div>
                            <div className="text-center font-bold text-emerald-600 pb-2 border-b">Intelligent Reporting</div>
                        </div>
                        {comparisonPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-2 gap-4 py-3 border-b border-slate-100"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="flex items-center gap-2 text-slate-500">
                                    <span className="text-red-400">✗</span>
                                    {point.traditional}
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    {point.digital}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Connects With Your Existing Systems</h2>
                            <p className="text-slate-600 mb-6">
                                The software integrates with your current infrastructure—no rip-and-replace required.
                                Data flows from inspection equipment, through the intelligent reporting platform, and into your CMMS/ERP for maintenance planning.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>SAP, Oracle, Maximo CMMS integration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>Major UT flaw detector data import</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>REST API for custom integrations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>Single sign-on (SSO) support</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <h3 className="font-bold text-xl mb-4 text-slate-800">Related Solutions</h3>
                            <div className="space-y-4">
                                <Link to="/digital-twins" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="font-semibold group-hover:text-emerald-600 transition">Digital Twins for NDT</div>
                                            <div className="text-sm text-slate-600">Consulting & implementation services</div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition" />
                                    </div>
                                </Link>
                                <Link to="/consulting" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="font-semibold group-hover:text-emerald-600 transition">Level III Consulting</div>
                                            <div className="text-sm text-slate-600">Procedure development & oversight</div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition" />
                                    </div>
                                </Link>
                                <Link to="/ndt-connect" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="font-semibold group-hover:text-emerald-600 transition">NDT Connect Platform</div>
                                            <div className="text-sm text-slate-600">Inspection management ecosystem</div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 p-6 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-slate-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Eliminate NDT Documentation Risk?
                    </h2>
                    <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                        Schedule a demonstration to see how intelligent reporting transforms inspection data into actionable asset intelligence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://dt.atlantisndt.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-emerald-900 px-10 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition shadow-lg text-lg"
                        >
                            <Zap className="w-5 h-5" />
                            Try Now
                        </a>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition shadow-lg text-lg"
                        >
                            Request a Demo
                        </Link>
                    </div>
                    <p className="mt-6 text-emerald-200 text-sm">
                        Or call directly: <a href="tel:+1-XXX-XXX-XXXX" className="underline hover:text-white">Contact our team</a>
                    </p>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
