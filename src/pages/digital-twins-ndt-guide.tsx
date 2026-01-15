import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    Eye,
    BarChart3,
    Cpu,
    Shield,
    Clock,
    Layers,
    Database,
    Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyFeatures = [
    { icon: Eye, title: "3D Visualization", description: "Interactive 3D models displaying real-time inspection data" },
    { icon: BarChart3, title: "Data Analytics", description: "Historical trending and predictive failure analysis" },
    { icon: Database, title: "Data Integration", description: "Connects with CMMS, ERP, and inspection databases" },
    { icon: Globe, title: "Remote Access", description: "Cloud-based access from anywhere in the world" }
];

const implementationSteps = [
    { step: 1, title: "Asset Modeling", description: "Create accurate 3D CAD models of your physical assets" },
    { step: 2, title: "Data Integration", description: "Connect NDT inspection systems and historical databases" },
    { step: 3, title: "Visualization Setup", description: "Configure color coding, thresholds, and alarm levels" },
    { step: 4, title: "Training & Deployment", description: "Train your team and deploy across your organization" }
];

const faqs = [
    {
        question: "What is the difference between a 3D model and a Digital Twin?",
        answer: "A 3D model is a static visual representation, while a Digital Twin is a dynamic, data-connected replica that updates in real-time with inspection data, sensor readings, and operational parameters."
    },
    {
        question: "How long does it take to implement a Digital Twin solution?",
        answer: "Implementation typically takes 4-12 weeks depending on asset complexity and data sources. Simple assets like storage tanks can be deployed in 4 weeks, while complex facilities like refineries may require 8-12 weeks."
    },
    {
        question: "What file formats are supported for 3D models?",
        answer: "We support all major CAD formats including STEP, IGES, STL, OBJ, FBX, and native formats from AutoCAD, SolidWorks, CATIA, and PTC Creo. We can also create models from as-built surveys."
    },
    {
        question: "Can Digital Twins integrate with our existing systems?",
        answer: "Yes, our Digital Twin platform offers REST APIs and connectors for popular CMMS systems (SAP, Maximo, etc.), inspection management software, and IoT sensor platforms."
    }
];

export default function DigitalTwinsNDTGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Complete Guide to Digital Twins in NDT",
                "description": "Learn how digital twin technology is transforming non-destructive testing and asset integrity management in the oil & gas, petrochemical, and aerospace industries.",
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
                title="Complete Guide to Digital Twins in NDT 2026 | 3D Visualization for Asset Integrity | Atlantis NDT"
                description="Learn how digital twin technology transforms NDT inspection. 3D visualization, predictive maintenance, real-time data. Implementation guide for oil & gas, aerospace, marine."
                keywords="digital twins NDT, digital twin guide, NDT 3D visualization, asset integrity digital twin, inspection data visualization, predictive maintenance NDT"
                canonical="https://atlantisndt.com/blog/digital-twins-ndt-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004aad] to-[#0066cc] text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-blue-200 mb-4">Guide • January 2026 • 12 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Complete Guide to Digital Twins in NDT
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            How 3D visualization technology is revolutionizing non-destructive testing,
                            asset integrity management, and predictive maintenance across industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="prose prose-lg max-w-none mb-12">
                        <h2 className="text-3xl font-bold mb-4">What is a Digital Twin in NDT?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            A <strong>Digital Twin</strong> in NDT (Non-Destructive Testing) is a dynamic,
                            data-connected 3D replica of a physical asset that displays real-time inspection
                            data, defect locations, and integrity status. Unlike static 3D models or CAD
                            drawings, Digital Twins continuously update with the latest inspection findings,
                            enabling engineers to visualize, analyze, and make decisions faster than ever before.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The technology originated in manufacturing and aerospace (NASA used it for space
                            mission simulations), but has rapidly gained adoption in oil & gas, petrochemical,
                            power generation, and marine industries where asset integrity is critical.
                        </p>
                    </section>

                    {/* Key Features */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Key Features of NDT Digital Twins</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {keyFeatures.map((feature, index) => (
                                <Card key={feature.title} className="border-l-4 border-l-[#004aad]">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <feature.icon className="w-6 h-6 text-[#004aad]" />
                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How NDT Digital Twins Work</h2>
                        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <Layers className="w-8 h-8 text-[#004aad]" />
                                    </div>
                                    <h3 className="font-bold mb-2">1. Data Collection</h3>
                                    <p className="text-slate-600 text-sm">
                                        NDT inspection data (UT thickness, RT images, ET signals) is collected and digitized
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <Cpu className="w-8 h-8 text-[#004aad]" />
                                    </div>
                                    <h3 className="font-bold mb-2">2. Data Processing</h3>
                                    <p className="text-slate-600 text-sm">
                                        Inspection data is mapped to 3D model coordinates and processed for visualization
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <Eye className="w-8 h-8 text-[#004aad]" />
                                    </div>
                                    <h3 className="font-bold mb-2">3. Visualization</h3>
                                    <p className="text-slate-600 text-sm">
                                        Interactive 3D display with color-coded severity, clickable details, and trend analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Benefits for NDT Operations</h2>
                        <ul className="space-y-4">
                            {[
                                "30-40% reduction in inspection planning and reporting time",
                                "50% faster decision-making for repairs and maintenance",
                                "Improved communication between inspectors, engineers, and management",
                                "Historical data tracking for trending and remaining life calculations",
                                "Remote collaboration capabilities reducing travel costs",
                                "Enhanced regulatory compliance with visual documentation",
                                "Risk-based inspection optimization using data analytics"
                            ].map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Implementation Steps */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Implementation Roadmap</h2>
                        <div className="space-y-4">
                            {implementationSteps.map((step) => (
                                <div key={step.step} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm">
                                    <div className="bg-[#004aad] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{step.title}</h3>
                                        <p className="text-slate-600">{step.description}</p>
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
                    <section className="bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Implement Digital Twins?</h2>
                        <p className="text-blue-100 mb-6">
                            Contact our team for a personalized demonstration of how Digital Twins can transform your NDT operations.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3 bg-white text-[#004aad] font-semibold rounded-lg hover:bg-gray-100 transition"
                        >
                            Request a Demo
                        </Link>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/digital-twins-oil-gas" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-[#004aad] transition">Digital Twins for Oil & Gas Industry</h3>
                                <p className="text-slate-600 text-sm mt-2">How refineries use digital twins for predictive maintenance</p>
                            </Link>
                            <Link to="/digital-twins" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-[#004aad] transition">Interactive Digital Twins Demo</h3>
                                <p className="text-slate-600 text-sm mt-2">Try our 3D digital twin models yourself</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
