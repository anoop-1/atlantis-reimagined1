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

// 2026-10-08: Atlantis aerospace training is ASNT SNT-TC-1A-based method
// training (unsupported pass-rate, trainee-count, Nadcap and OEM-recognition
// claims removed). 2026-10-29: aerospace content restored on the SNT-TC-1A
// basis, with ASNT NDT Level III consulting for the aerospace written practice
// (owner). Keep the title and H1 identical to the prerender entry for
// /aerospace-ndt-training in scripts/prerender.mjs.

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
    "A plain account of where SNT-TC-1A training stops and your employer's aerospace certification begins"
];

const aerospacePoints = [
    {
        title: "What aerospace customers add",
        body: "Aerospace primes flow personnel-qualification requirements down to suppliers, and Nadcap audits the NDT programme against AC7114. An aerospace written practice built on ASNT SNT-TC-1A adds what those audits look for: a written Level III designation (the Responsible Level 3 in AC7114), Level III approval of instructors and examination material, practical examinations on representative parts, per-method experience logs and vision-examination tracking."
    },
    {
        title: "The employer's written practice",
        body: "In an aerospace programme the employer certifies its own Level 1 and Level 2 personnel under a written practice. The written practice names a Responsible Level 3, who approves procedures and techniques, controls the examinations and signs the certifications. Training hours, experience, examinations and vision checks are recorded against that written practice."
    },
    {
        title: "Outside agency Level III",
        body: "Under SNT-TC-1A the written practice is approved by an NDT Level III, and no one may administer a certification examination to themselves or a subordinate. A firm with no Level III on staff engages an outside agency Level III, who can write and approve the written practice, build and grade examinations and recommend certification. The employer still signs and issues the certificate."
    },
    {
        title: "Where Atlantis fits",
        body: "Atlantis delivers ASNT SNT-TC-1A-based method training for aerospace employers, with records structured for an aerospace written practice. Behind it sits ASNT NDT Level III consulting: written practices, procedures and technique sheets, examinations and Nadcap AC7114 audit preparation, with Atlantis able to act as the outside agency Level III in UT, RT, MT, PT and VT. Your Responsible Level 3 credits the training hours under your written practice."
    }
];

export default function AerospaceNDTTraining() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Aerospace NDT Training (ASNT SNT-TC-1A)",
        "description": "NDT method training under ASNT SNT-TC-1A for aerospace applications: UT, ET, PT, RT and VT, with records structured for the employer's aerospace written practice and ASNT NDT Level III consulting behind it.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Aerospace NDT Training (ASNT SNT-TC-1A) | Atlantis NDT"
                description="Aerospace NDT method training under ASNT SNT-TC-1A in UT, ET, PT, RT and VT for airframes, engines and composites, with ASNT Level III consulting behind it."
                keywords="aerospace NDT training, ASNT SNT-TC-1A aerospace, aircraft NDT training, composite inspection training, aerospace UT training, ASNT Level III aerospace consulting, aerospace written practice"
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
                            Aerospace certification itself is issued by your employer, as explained below.
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
                    <h2 className="text-3xl font-bold text-center mb-4">How Aerospace Certification Works</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
                        Your employer certifies. Atlantis supports the programme behind that certification with ASNT SNT-TC-1A-based training and{" "}
                        <Link to="/consulting/aerospace-ndt-consulting" className="text-blue-700 hover:underline">ASNT NDT Level III consulting for aerospace</Link>:{" "}
                        <Link to="/consulting/written-practice-for-aerospace" className="text-blue-700 hover:underline">aerospace written practices</Link>, examinations and{" "}
                        <Link to="/consulting/nadcap-ac7114-audit-readiness" className="text-blue-700 hover:underline">Nadcap AC7114 audit preparation</Link>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {aerospacePoints.map((p) => (
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
                    <p className="text-slate-300 mb-8 text-lg">Tell us the methods, levels and parts you inspect. We will scope ASNT SNT-TC-1A training and explain how the records sit beside your employer's aerospace written practice.</p>
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
                    "href": "/consulting/ndt-consulting-level-iii",
                    "description": "Written practice and audit preparation",
                    "icon": "consulting"
              },
              {
                    "title": "Digital Twin for Aerospace",
                    "href": "/digital-twins",
                    "description": "UT/PAUT 3D + personnel traceability",
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
