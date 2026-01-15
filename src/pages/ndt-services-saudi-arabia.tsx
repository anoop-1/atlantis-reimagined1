import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Factory, GraduationCap, Users, Cpu, Wrench, Globe, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT, PAUT, TOFD)", link: "/ultrasonic-testing" },
    { name: "Radiographic Testing (RT, DR)", link: "/radiographic-testing" },
    { name: "Magnetic Particle Testing (MT)", link: "/magnetic-particle-testing" },
    { name: "Liquid Penetrant Testing (PT)", link: "/penetrant-testing" },
    { name: "Eddy Current Testing (ET)", link: "/eddy-current-testing" },
    { name: "Visual Testing (VT, RVI)", link: "/visual-testing" }
];
const industries = [
    { name: "Oil & Gas (Saudi Aramco)", link: "/ndt-for-oil-gas" },
    { name: "Petrochemical (SABIC)", link: "/ndt-for-oil-gas" },
    { name: "Power Generation", link: "/ndt-for-power-generation" },
    { name: "Construction & Infrastructure", link: null },
    { name: "Desalination Plants", link: null },
    { name: "Marine & Offshore", link: null }
];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "ASNT Level III consulting for Aramco", link: "/consulting-me" },
    { icon: GraduationCap, title: "NDT Training", description: "ASNT/ISO 9712 certification", link: "/training-me" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization technology", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection management", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning for NDT", link: "/erp" }
];

export default function NDTServicesSaudiArabia() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Saudi Arabia",
        "description": "Complete NDT solutions in Saudi Arabia - consulting, training, digital twins for Saudi Aramco, SABIC, and petrochemical industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Dammam", "addressCountry": "SA" },
        "areaServed": ["Dammam", "Jubail", "Yanbu", "Riyadh", "Jeddah", "Saudi Arabia"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Saudi Arabia | Aramco SABIC Approved | Training & Consulting | Atlantis"
                description="Complete NDT solutions in Saudi Arabia. Saudi Aramco, SABIC approved vendor. Dammam, Jubail, Yanbu coverage. Training, consulting, digital twins. Free quote!"
                keywords="NDT services Saudi Arabia, NDT training Dammam, NDT consulting Jubail, Saudi Aramco NDT vendor, SABIC approved NDT, ASNT Level III KSA, petrochemical NDT"
                canonical="https://atlantisndt.com/ndt-services-saudi-arabia"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-green-700 to-emerald-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-green-200 mb-4"><MapPin className="w-5 h-5" /><span>Saudi Arabia • Dammam, Jubail, Yanbu, Riyadh</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Saudi Arabia</h1>
                        <p className="text-xl text-green-100 max-w-3xl mb-8">Complete NDT solutions for the Kingdom's oil & gas and petrochemical sectors. Saudi Aramco and SABIC approved vendor for training, consulting, and digital solutions.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training-me" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-green-700 mb-2">Aramco</div><div className="text-slate-600">Approved Vendor</div></div>
                        <div><div className="text-4xl font-bold text-green-700 mb-2">SABIC</div><div className="text-slate-600">Approved Vendor</div></div>
                        <div><div className="text-4xl font-bold text-green-700 mb-2">ISO</div><div className="text-slate-600">9712 Certified</div></div>
                        <div><div className="text-4xl font-bold text-green-700 mb-2">24/7</div><div className="text-slate-600">Emergency Support</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in KSA</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-green-500 cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-green-700 mx-auto mb-2 group-hover:scale-110 transition" />
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
                    <h2 className="text-3xl font-bold text-center mb-12">Coverage Across Saudi Arabia</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="text-center"><CardHeader><CardTitle>Dammam</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Eastern Province HQ</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Jubail</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Industrial City coverage</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Yanbu</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Western petrochemical hub</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Riyadh</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Central region services</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Inspection Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-primary" />NDT Methods</h3>
                            <ul className="space-y-3">
                                {ndtMethods.map((m) => (<li key={m.name} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><Link to={m.link} className="hover:text-primary hover:underline transition-all duration-200">{m.name}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="w-6 h-6 text-primary" />Industries We Serve</h3>
                            <ul className="space-y-3">
                                {industries.map((ind) => (<li key={ind.name} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />{ind.link ? <Link to={ind.link} className="hover:text-primary hover:underline transition-all duration-200">{ind.name}</Link> : <span>{ind.name}</span>}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Partner with Saudi Arabia's NDT Experts</h2>
                    <p className="text-green-100 mb-8 text-lg">Contact us for Aramco and SABIC compliant NDT solutions.</p>
                    <Link to="/contact" className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
