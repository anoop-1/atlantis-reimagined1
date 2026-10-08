import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Plane, Gauge, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

// 2026-10-08: Atlantis training is ASNT SNT-TC-1A ONLY. This page used to offer
// "NAS 410 / EN 4179 certification" training (plus unsupported pass-rate,
// trainee-count, Nadcap and OEM-recognition claims). It now offers aerospace
// NDT method training under SNT-TC-1A and explains NAS 410 / EN 4179 as
// information only. Keep the title and H1 identical to the prerender entry
// for /aerospace-ndt-training in scripts/prerender.mjs.

const courses = [
    { name: "Ultrasonic Testing (UT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Composite inspection, bonding" },
    { name: "Radiographic Testing (RT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Weld and casting inspection" },
    { name: "Eddy Current Testing (ET)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Crack detection, conductivity" },
    { name: "Liquid Penetrant Testing (PT)", levels: "Level I, II, III", duration: "16-24 hours", focus: "Surface crack detection" },
    { name: "Visual Testing (VT)", levels: "Level I, II, III", duration: "24-40 hours", focus: "Surface condition assessment" }
];

const benefits = [
    "Method training under ASNT SNT-TC-1A, led by an ASNT NDT Level III",
    "Aerospace applications covered: composites, bonded structure, fastener holes, engine components",
    "Online theory plus hands-on practicals onsite at your facility",
    "Practicals on your own parts and reference standards when delivered onsite",
    "Training and examination records structured for your employer's written practice",
    "A plain account of where SNT-TC-1A training stops and NAS 410 certification begins"
];

const nas410Points = [
    {
        title: "NAS 410 and EN 4179",
        body: "NAS 410, published by the Aerospace Industries Association, is the standard most of the aerospace supply chain uses to qualify and certify NDT personnel. EN 4179 is the European counterpart, and the two are harmonised. Primes and Nadcap audits call for them in place of SNT-TC-1A."
    },
    {
        title: "The employer's written practice",
        body: "Under NAS 410 the employer certifies its own Level 1 and Level 2 personnel under a written practice. The written practice names a Responsible Level 3, who approves procedures and techniques, controls the examinations and signs the certifications. Training hours, experience, examinations and vision checks are recorded against that written practice."
    },
    {
        title: "The National Aerospace NDT Board",
        body: "In countries that have a National Aerospace NDT Board (NANDTB), the board provides independent national oversight. It can examine and qualify Level 3 personnel, approve outside agencies and examination material, and act as the authority aerospace primes recognise. Where no board exists, Level 3 qualification runs through an approved outside agency and the primes' own requirements."
    },
    {
        title: "Where Atlantis fits",
        body: "Atlantis delivers NDT method training under ASNT SNT-TC-1A only. Atlantis does not deliver NAS 410 or EN 4179 training, examinations or certification. If you work to NAS 410, your Responsible Level 3 decides whether and how SNT-TC-1A training hours count toward your record."
    }
];

export default function AerospaceNDTTraining() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Aerospace NDT Training (ASNT SNT-TC-1A)",
        "description": "NDT method training under ASNT SNT-TC-1A for aerospace applications: UT, ET, PT, RT and VT. Atlantis does not deliver NAS 410 or EN 4179 training, examinations or certification; those are issued by the employer under its written practice.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Aerospace NDT Training (ASNT SNT-TC-1A) | NAS 410 Explained | Atlantis NDT"
                description="Aerospace NDT method training under ASNT SNT-TC-1A: UT, ET, PT, RT and VT for aircraft structure, engines and composites. How NAS 410 / EN 4179 certification works and who issues it."
                keywords="aerospace NDT training, ASNT SNT-TC-1A aerospace, aircraft NDT training, composite inspection training, aerospace UT training, NAS 410 explained, EN 4179"
                canonical="https://atlantisndt.com/aerospace-ndt-training"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-28 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-400 mb-4">
                            <Plane className="w-5 h-5" />
                            <span>Industry-Specific Training</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Aerospace NDT Training under ASNT SNT-TC-1A</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">
                            NDT method training under ASNT SNT-TC-1A for aerospace inspectors: aircraft structure,
                            engine components and composites. Led by an ASNT NDT Level III and delivered online and onsite.
                            Aerospace certification itself (NAS 410 / EN 4179) is issued by your employer, as explained below.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">Request a Training Quote</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">SNT-TC-1A</div><div className="text-slate-600">Training scheme</div></div>
                        <div><Award className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">Level III</div><div className="text-slate-600">ASNT NDT Level III-led</div></div>
                        <div><Users className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">Online + Onsite</div><div className="text-slate-600">Delivery</div></div>
                        <div><Gauge className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">UT · ET · PT</div><div className="text-slate-600">Plus RT and VT</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Method Courses for Aerospace (ASNT SNT-TC-1A)</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <Card key={course.name} className="hover:shadow-lg transition border-l-4 border-l-blue-500">
                                <CardHeader><CardTitle className="text-lg">{course.name}</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Levels:</span><span className="font-medium">{course.levels}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Duration:</span><span className="font-medium">{course.duration}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Focus:</span><span className="font-medium">{course.focus}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">What the Training Includes</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NAS 410 and EN 4179: How Aerospace Certification Works</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
                        This section is for information. Atlantis trains to ASNT SNT-TC-1A and does not offer NAS 410 or EN 4179 training or certification.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {nas410Points.map((p) => (
                            <Card key={p.title}>
                                <CardHeader><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-sm text-slate-700 leading-relaxed">{p.body}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Plan Aerospace NDT Method Training</h2>
                    <p className="text-slate-300 mb-8 text-lg">Tell us the methods, levels and parts you inspect. We will scope ASNT SNT-TC-1A training and explain how the records sit beside your employer's NAS 410 written practice.</p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">Request a Training Quote</Link>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "How SNT-TC-1A certification works",
                    "icon": "cert"
              },
              {
                    "title": "Aerospace Corporate Training",
                    "href": "/corporate-training/aerospace",
                    "description": "ASNT SNT-TC-1A programmes for aerospace teams",
                    "icon": "training"
              },
              {
                    "title": "Aerospace Quality Control ERP",
                    "href": "/erp/quality-management-for-ndt-companies",
                    "description": "Certification and calibration records in one place",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Written practice and audit preparation",
                    "icon": "consulting"
              },
              {
                    "title": "Digital Twin for Aerospace",
                    "href": "/digital-twins",
                    "description": "UT/PAUT 3D + NAS 410 traceability",
                    "icon": "dt"
              },
              {
                    "title": "Eddy Current Testing Guide",
                    "href": "/blog/eddy-current-testing-complete-guide",
                    "description": "ET method deep-dive",
                    "icon": "blog"
              }
        ]} />

        <TrainingEnquiryCTA />
      <ContactDetails />
        </div>
    );
}
