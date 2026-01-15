import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, GraduationCap, Users, Cpu, Wrench, Globe, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = ["Ultrasonic Testing (UT, PAUT, TOFD)", "Radiographic Testing (RT, DR)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT, RVI)"];
const industries = ["North Sea Offshore", "Oil & Gas (Equinor, Aker)", "Subsea & Pipeline", "Shipbuilding & Marine", "Renewable Energy", "Manufacturing"];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "EN ISO 9712 Level III consulting", link: "/consulting" },
    { icon: GraduationCap, title: "NDT Training", description: "Nordtest/EN ISO 9712 certification", link: "/training" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization technology", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection management", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning for NDT", link: "/erp" }
];

export default function NDTServicesNorway() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Norway",
        "description": "Complete NDT solutions in Norway - consulting, training, digital twins for North Sea offshore and subsea industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Stavanger", "addressCountry": "NO" },
        "areaServed": ["Stavanger", "Bergen", "Oslo", "Norway", "Nordic Region"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Norway | North Sea Offshore NDT | Stavanger Bergen | Training & Consulting | Atlantis"
                description="Complete NDT solutions in Norway. North Sea offshore, subsea, oil & gas NDT. Equinor approved. EN ISO 9712 training, consulting, digital twins. Get free quote!"
                keywords="NDT services Norway, NDT training Stavanger, offshore NDT Norway, subsea NDT, Equinor NDT vendor, EN ISO 9712 Norway, North Sea inspection"
                canonical="https://atlantisndt.com/ndt-services-norway"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-red-700 to-rose-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-red-200 mb-4"><MapPin className="w-5 h-5" /><span>Norway • Stavanger, Bergen, Oslo</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Norway</h1>
                        <p className="text-xl text-red-100 max-w-3xl mb-8">Complete NDT solutions for Norway's North Sea offshore and subsea sectors. EN ISO 9712 certified training and consulting for Equinor, Aker, and contractors.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-red-700 mb-2">Equinor</div><div className="text-slate-600">Approved Vendor</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">Nordtest</div><div className="text-slate-600">Certified</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">EN ISO</div><div className="text-slate-600">9712 Compliant</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">24/7</div><div className="text-slate-600">Offshore Support</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Norway</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-red-500 cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-red-700 mx-auto mb-2 group-hover:scale-110 transition" />
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
                    <h2 className="text-3xl font-bold text-center mb-12">Norway Office Locations</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center"><CardHeader><CardTitle>Stavanger</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Oil & gas capital, offshore hub</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Bergen</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Marine & subsea specialists</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Oslo</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Corporate & sales office</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Inspection Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-red-700" />NDT Methods</h3><ul className="space-y-3">{ndtMethods.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{s}</span></li>))}</ul></div>
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="w-6 h-6 text-red-700" />Industries We Serve</h3><ul className="space-y-3">{industries.map((i) => (<li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{i}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-red-700 to-rose-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Partner with Norway's NDT Experts</h2>
                    <p className="text-red-100 mb-8 text-lg">Contact us for Equinor-compliant offshore and subsea NDT solutions.</p>
                    <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
