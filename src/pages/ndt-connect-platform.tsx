import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Globe, Cloud, Database, BarChart3, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    { title: "Cloud-Based Platform", description: "Access inspection data anywhere, anytime from any device", icon: Cloud },
    { title: "Real-Time Collaboration", description: "Share reports instantly with clients, inspectors, and stakeholders", icon: Users },
    { title: "Centralized Data", description: "All inspection records, reports, and certificates in one place", icon: Database },
    { title: "Analytics Dashboard", description: "Visualize trends, track KPIs, and generate insights", icon: BarChart3 },
    { title: "Compliance Tracking", description: "Stay on top of certifications, calibrations, and deadlines", icon: Shield },
    { title: "Global Access", description: "Multi-language support for international operations", icon: Globe }
];

const benefits = [
    "Eliminate paperwork and manual data entry",
    "Reduce report generation time by 70%",
    "Improve data accuracy and consistency",
    "Enable real-time remote collaboration",
    "Ensure regulatory compliance",
    "Scale seamlessly across projects"
];

const faqs = [
    { question: "What is NDT Connect?", answer: "NDT Connect is a cloud-based platform for managing NDT inspection data, reports, and personnel. It centralizes all your inspection operations in one secure, accessible platform." },
    { question: "How does it integrate with existing systems?", answer: "NDT Connect offers API integration with ERP systems, equipment data loggers, and third-party software. We also provide import tools for legacy data." },
    { question: "Is the data secure?", answer: "Yes, NDT Connect uses enterprise-grade security with encrypted data storage, role-based access controls, and regular backups. We are SOC 2 compliant." }
];

export default function NDTConnectPlatform() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "NDT Connect",
        "applicationCategory": "BusinessApplication",
        "description": "Cloud-based NDT inspection management platform for data, reports, and personnel management.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Connect | Cloud NDT Inspection Management Platform | Atlantis NDT"
                description="NDT Connect cloud platform for inspection data management. Real-time collaboration, analytics, compliance tracking. Reduce report time 70%. Request demo!"
                keywords="NDT Connect, NDT software, inspection management software, cloud NDT platform, NDT data management, inspection reporting software"
                canonical="https://atlantisndt.com/ndt-connect-platform"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-indigo-200 mb-4"><Cloud className="w-5 h-5" /><span>Software Platform</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Connect Platform</h1>
                        <p className="text-xl text-indigo-100 max-w-3xl mb-8">Cloud-based NDT inspection management. Centralize data, collaborate in real-time, and gain insights with powerful analytics.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request Demo</Link>
                            <Link to="/ndt-connect" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Learn More</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-indigo-600 mb-2">70%</div><div className="text-slate-600">Faster Reporting</div></div>
                        <div><div className="text-4xl font-bold text-indigo-600 mb-2">100%</div><div className="text-slate-600">Cloud-Based</div></div>
                        <div><div className="text-4xl font-bold text-indigo-600 mb-2">SOC 2</div><div className="text-slate-600">Compliant</div></div>
                        <div><div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div><div className="text-slate-600">Access</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <Card key={feature.title} className="hover:shadow-lg transition group">
                                <CardHeader className="pb-2">
                                    <feature.icon className="w-8 h-8 text-indigo-500 mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{feature.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your NDT Operations?</h2>
                    <p className="text-indigo-100 mb-8 text-lg">See how NDT Connect can streamline your inspection management.</p>
                    <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Demo</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
