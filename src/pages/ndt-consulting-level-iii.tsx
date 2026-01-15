import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Users, FileText, Shield, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const consultingServices = [
    { title: "Procedure Development", description: "Written practice and procedure development per SNT-TC-1A, ASNT CP-189, and client specifications", icon: FileText },
    { title: "Program Audits", description: "Third-party audits of existing NDT programs for compliance and improvement opportunities", icon: Shield },
    { title: "Technique Development", description: "Custom NDT technique development for unique applications and challenging geometries", icon: Target },
    { title: "Personnel Qualification", description: "Review and approval of NDT personnel qualifications and certification programs", icon: Award },
    { title: "Expert Witness", description: "Technical expert services for litigation, failure analysis, and dispute resolution", icon: Users },
    { title: "Regulatory Compliance", description: "Guidance on API, ASME, AWS, and other code compliance requirements", icon: FileText }
];

const industries = ["Oil & Gas", "Petrochemical", "Power Generation", "Aerospace", "Manufacturing", "Infrastructure"];

const faqs = [
    { question: "What does an NDT Level III consultant do?", answer: "An NDT Level III consultant provides technical leadership including procedure development, personnel qualification, technique validation, program audits, and expert technical guidance." },
    { question: "Do you provide on-site consulting?", answer: "Yes, our Level III consultants are available for on-site engagements worldwide. We also offer remote consulting services." },
    { question: "Can you help with certification program development?", answer: "Absolutely. We help companies develop and implement employer-based certification programs compliant with SNT-TC-1A, CP-189, or ISO 9712." }
];

export default function NDTConsultingLevelIII() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "NDT Level III Consulting Services",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" },
        "description": "ASNT Level III NDT consulting services including procedure development, program audits, technique development, and expert witness services."
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Level III Consulting | ASNT Procedures & Program Audits | Atlantis NDT"
                description="ASNT Level III NDT consulting services. Procedure development, program audits, technique development, expert witness. Global availability. Request quote!"
                keywords="NDT Level III consulting, NDT procedure development, NDT program audit, ASNT Level III, NDT expert witness, NDT technical consulting"
                canonical="https://atlantisndt.com/ndt-consulting-level-iii"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-slate-700 to-gray-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-slate-300 mb-4"><Users className="w-5 h-5" /><span>Consulting Services</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Level III Consulting</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">Expert ASNT Level III consulting for procedure development, program audits, and technical guidance. 50+ certified experts available worldwide.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request Quote</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">All Consulting</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-slate-700 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-slate-700 mb-2">30+</div><div className="text-slate-600">Years Experience</div></div>
                        <div><div className="text-4xl font-bold text-slate-700 mb-2">Global</div><div className="text-slate-600">Availability</div></div>
                        <div><div className="text-4xl font-bold text-slate-700 mb-2">All</div><div className="text-slate-600">NDT Methods</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Consulting Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {consultingServices.map((service) => (
                            <Card key={service.title} className="hover:shadow-lg transition group">
                                <CardHeader className="pb-2">
                                    <service.icon className="w-8 h-8 text-slate-600 mb-2 group-hover:text-[#004aad] transition" />
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{service.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((ind) => (<div key={ind} className="bg-slate-100 px-6 py-3 rounded-lg font-medium">{ind}</div>))}
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

            <section className="py-16 bg-gradient-to-r from-slate-700 to-gray-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need Expert NDT Consulting?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Our Level III experts are ready to help with your technical challenges.</p>
                    <Link to="/contact" className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
