import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Factory, GraduationCap, Users, Cpu, Wrench, Globe, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = ["Ultrasonic Testing (UT, PAUT, TOFD)", "Radiographic Testing (RT, DR)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT, RVI)"];
const industries = ["Aerospace & Defense (HAL, ISRO)", "Power Generation", "Heavy Engineering", "IT Infrastructure", "Pharmaceutical", "Manufacturing"];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "ASNT Level III consulting services", link: "/consulting-india" },
    { icon: GraduationCap, title: "NDT Training", description: "ASNT/ISNT certification courses", link: "/training-india" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization technology", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection management", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning for NDT", link: "/erp" }
];

export default function NDTServicesBangalore() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Bangalore",
        "description": "Complete NDT solutions in Bangalore - consulting, training, digital twins for aerospace, defense, and tech industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" },
        "areaServed": ["Bangalore", "Bengaluru", "Mysore", "Karnataka", "South India"],
        "telephone": "+91-8688325653"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Bangalore | Aerospace & Defense NDT | Training & Consulting | Atlantis"
                description="Complete NDT solutions in Bangalore & Karnataka. Aerospace, defense, manufacturing NDT. HAL, ISRO vendor. Training, consulting, digital twins. Get free quote!"
                keywords="NDT services Bangalore, NDT training Bangalore, NDT consulting Karnataka, aerospace NDT Bangalore, defense NDT India, ASNT Level III Bangalore, HAL NDT vendor"
                canonical="https://atlantisndt.com/ndt-services-bangalore"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-violet-200 mb-4"><MapPin className="w-5 h-5" /><span>Bangalore, Karnataka • India's Tech & Aerospace Hub</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Bangalore</h1>
                        <p className="text-xl text-violet-100 max-w-3xl mb-8">Complete NDT solutions for India's aerospace and technology capital. Training, consulting, and digital twin solutions for HAL, ISRO, and defense contractors.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training-india" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">HAL</div><div className="text-slate-600">Approved Vendor</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">NAS410</div><div className="text-slate-600">Compliant</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">Nadcap</div><div className="text-slate-600">Ready Services</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Bangalore</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive NDT services for the aerospace and defense sectors.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-violet-500 cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-violet-600 mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Inspection Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-violet-600" />NDT Methods</h3><ul className="space-y-3">{ndtMethods.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{s}</span></li>))}</ul></div>
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Plane className="w-6 h-6 text-violet-600" />Industries We Serve</h3><ul className="space-y-3">{industries.map((i) => (<li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{i}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started in Bangalore?</h2>
                    <p className="text-violet-100 mb-8 text-lg">Contact our aerospace and defense NDT specialists today.</p>
                    <Link to="/contact" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
