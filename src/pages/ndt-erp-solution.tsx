import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Wrench, BarChart3, Users, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
    { title: "Resource Management", description: "Schedule technicians, equipment, and vehicles across projects", icon: Users },
    { title: "Project Planning", description: "Create work orders, assign tasks, and track progress", icon: Calendar },
    { title: "Financial Management", description: "Invoice generation, cost tracking, and profitability analysis", icon: DollarSign },
    { title: "Equipment Tracking", description: "Manage calibration schedules, maintenance, and utilization", icon: Wrench },
    { title: "Reporting & Analytics", description: "Business intelligence dashboards and custom reports", icon: BarChart3 },
    { title: "Client Portal", description: "Secure client access to reports, invoices, and project status", icon: TrendingUp }
];

const benefits = [
    "Increase billable utilization by 20%",
    "Reduce administrative overhead by 40%",
    "Improve on-time project delivery",
    "Automate invoicing and collections",
    "Real-time visibility into operations",
    "Scale your business efficiently"
];

const faqs = [
    { question: "What is NDT ERP?", answer: "NDT ERP is an enterprise resource planning system built specifically for NDT companies. It integrates all business operations including scheduling, personnel, equipment, projects, and finances." },
    { question: "Is it suitable for small companies?", answer: "Yes! We offer tiered pricing and module selection so companies of all sizes can benefit. Start with core modules and add more as you grow." },
    { question: "Can it integrate with existing systems?", answer: "Absolutely. Our ERP integrates with accounting software (QuickBooks, Xero), HR systems, and our NDT Connect platform for complete operational visibility." }
];

export default function NDTERPSolution() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "NDT ERP Solution",
        "applicationCategory": "BusinessApplication",
        "description": "Enterprise resource planning software for NDT inspection companies. Resource management, project planning, and financial tracking.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT ERP Solution | Enterprise Resource Planning for NDT Companies | Atlantis"
                description="NDT ERP software for inspection companies. Resource scheduling, project management, financials. Increase utilization 20%. Request demo!"
                keywords="NDT ERP, NDT software, inspection company software, NDT business software, NDT scheduling software, NDT project management"
                canonical="https://atlantisndt.com/ndt-erp-solution"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-200 mb-4"><Wrench className="w-5 h-5" /><span>ERP Solution</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP Solution</h1>
                        <p className="text-xl text-orange-100 max-w-3xl mb-8">Purpose-built ERP for NDT companies. Manage resources, projects, and finances in one integrated platform.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request Demo</Link>
                            <Link to="/erp" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Learn More</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">20%</div><div className="text-slate-600">More Utilization</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">40%</div><div className="text-slate-600">Less Admin Time</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">6</div><div className="text-slate-600">Core Modules</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">Cloud</div><div className="text-slate-600">Based</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">ERP Modules</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((module) => (
                            <Card key={module.title} className="hover:shadow-lg transition group">
                                <CardHeader className="pb-2">
                                    <module.icon className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-lg">{module.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{module.description}</p></CardContent>
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
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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

            <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Operations?</h2>
                    <p className="text-orange-100 mb-8 text-lg">See how NDT ERP can transform your business efficiency.</p>
                    <Link to="/contact" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Demo</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
