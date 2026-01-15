import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Clock, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = ["Ultrasonic Testing (UT, PAUT, TOFD)", "Radiographic Testing (RT, DR, CR)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT, RVI)"];
const industries = ["Petrochemical & Refining", "Power Generation (Nuclear)", "Shipbuilding & Marine", "Manufacturing & Fabrication", "Pharmaceutical & Food", "Infrastructure & Construction"];

export default function NDTServicesPhiladelphia() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Philadelphia",
        "description": "ASNT Level III NDT consulting and inspection services in Philadelphia and the Northeast US.",
        "address": { "@type": "PostalAddress", "addressLocality": "Philadelphia", "addressRegion": "PA", "addressCountry": "US" },
        "areaServed": ["Philadelphia", "New Jersey", "Delaware", "Pennsylvania", "Northeast US"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Philadelphia PA | Petrochemical & Nuclear Inspection | ASNT Level III | Atlantis"
                description="Expert NDT services in Philadelphia & Northeast US. Petrochemical, nuclear, marine inspection. ASNT Level III consulting. UT, RT, MT, PT. Free quote today!"
                keywords="NDT services Philadelphia, NDT Philadelphia PA, petrochemical NDT Pennsylvania, nuclear NDT services, ASNT Level III Philadelphia, ultrasonic testing NJ"
                canonical="https://atlantisndt.com/ndt-services-philadelphia"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-indigo-200 mb-4"><MapPin className="w-5 h-5" /><span>Philadelphia, PA • Serving Northeast US</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Philadelphia</h1>
                        <p className="text-xl text-indigo-100 max-w-3xl mb-8">ASNT Level III certified NDT consulting for petrochemical, nuclear, and manufacturing industries across the Northeast.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training-usa" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training Programs</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-indigo-700 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-indigo-700 mb-2">NRC</div><div className="text-slate-600">Nuclear Qualified</div></div>
                        <div><div className="text-4xl font-bold text-indigo-700 mb-2">ASME</div><div className="text-slate-600">Code Compliant</div></div>
                        <div><div className="text-4xl font-bold text-indigo-700 mb-2">24/7</div><div className="text-slate-600">Emergency Response</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Services We Offer in Philadelphia</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-indigo-700" />NDT Methods</h3><ul className="space-y-3">{services.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{s}</span></li>))}</ul></div>
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Factory className="w-6 h-6 text-indigo-700" />Industries Served</h3><ul className="space-y-3">{industries.map((i) => (<li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{i}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlantis NDT in Philadelphia?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center"><CardHeader><Clock className="w-8 h-8 text-indigo-700 mx-auto mb-2" /><CardTitle>Fast Response</CardTitle></CardHeader><CardContent><p className="text-slate-600">Coverage across PA, NJ, DE, MD</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Factory className="w-8 h-8 text-indigo-700 mx-auto mb-2" /><CardTitle>Nuclear Expertise</CardTitle></CardHeader><CardContent><p className="text-slate-600">NRC qualified inspectors available</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Shield className="w-8 h-8 text-indigo-700 mx-auto mb-2" /><CardTitle>ASME/NBIC</CardTitle></CardHeader><CardContent><p className="text-slate-600">Pressure vessel specialists</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need NDT Services in Philadelphia?</h2>
                    <p className="text-indigo-100 mb-8 text-lg">Contact our Northeast team for petrochemical and nuclear inspections.</p>
                    <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
