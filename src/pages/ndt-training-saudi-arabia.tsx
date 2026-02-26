import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GraduationCap, MapPin, Award, TrendingUp, Building2, DollarSign, Users, Briefcase, CheckCircle, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
    {
        method: "Ultrasonic Testing (UT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic physics & math",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Radiographic Testing (RT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Radiation safety awareness",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Magnetic Particle Testing (MT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Liquid Penetrant Testing (PT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Eddy Current Testing (ET)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic electricity knowledge",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Visual Testing (VT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        levelIII: "Advanced",
        prerequisites: "Vision acuity check",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Phased Array UT (PAUT)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A"
    },
    {
        method: "Time of Flight Diffraction (TOFD)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "40 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A"
    }
];

const locations = [
    { name: "Dammam (Eastern Province)", link: "/training-me" },
    { name: "Riyadh", link: "/training-me" },
    { name: "Jubail Industrial City", link: "/training-me" },
    { name: "Yanbu", link: "/training-me" },
    { name: "On-site at Client Facilities", link: "/contact" },
    { name: "Online/Virtual", link: "/ndt-training-online" }
];

const certifications = ["ASNT SNT-TC-1A (SAEP-1112 compliant)", "ISO 9712", "CSWIP Preparation", "Saudi Aramco Approved", "SABIC Recognised"];

const whySaudiArabia = [
    {
        icon: TrendingUp,
        title: "Vision 2030 & Mega-Projects",
        description: "Saudi Vision 2030 is driving over $500 billion in infrastructure and industrial investment. NEOM, the Jizan mega-refinery, Ras Al-Khair industrial city, and green hydrogen projects at NEOM all require large NDT workforces throughout construction and operations phases."
    },
    {
        icon: ShieldCheck,
        title: "SAEP-1112 Compliant Training",
        description: "Saudi Aramco's Engineering Procedure SAEP-1112 governs NDT personnel qualification for Aramco and its contractors. Atlantis NDT training content is aligned to SNT-TC-1A requirements referenced by SAEP-1112, ensuring your certification is accepted by Aramco projects."
    },
    {
        icon: DollarSign,
        title: "Tax-Free Compensation",
        description: "NDT Level II technicians in Saudi Arabia earn SAR 8,000–15,000 per month tax-free. Level III professionals earn SAR 18,000–30,000/month. Expatriate packages often include housing, transport, and annual flights — significantly increasing total compensation."
    },
    {
        icon: Building2,
        title: "Atlantis GCC Presence",
        description: "Atlantis NDT has delivered on-site training for Saudi Aramco contractors, SABIC affiliates, and SEC (Saudi Electricity Company) projects across the Kingdom. Our instructors are familiar with SAEP-1112 documentation requirements and local industry expectations."
    }
];

const industries = [
    {
        title: "Saudi Aramco & Oil Upstream",
        description: "Saudi Aramco is the world's largest oil producer and one of the largest employers of NDT personnel globally. Aramco and its contractors require SAEP-1112 compliant NDT certification for all inspection work on Aramco facilities.",
        demand: "Very High"
    },
    {
        title: "SABIC & Petrochemical",
        description: "SABIC and its 60+ affiliates across Jubail and Yanbu require NDT technicians for refinery turnaround maintenance, heat exchanger inspection, and pressure vessel testing. ASNT SNT-TC-1A and ISO 9712 are both accepted.",
        demand: "Very High"
    },
    {
        title: "SEC, Water & Infrastructure",
        description: "Saudi Electricity Company (SEC) power generation plants, SWCC desalination facilities, and the massive infrastructure build-out for Vision 2030 projects (bridges, railways, metro systems) all require NDT inspection teams.",
        demand: "High"
    },
    {
        title: "Mining & Minerals (Ma'aden)",
        description: "Ma'aden (Saudi Arabian Mining Company) is rapidly expanding phosphate, bauxite, and gold operations. Mining equipment, conveyor structures, and processing plant vessels all require NDT inspection and maintenance.",
        demand: "Moderate"
    }
];

const certificationPath = [
    { step: 1, title: "Apply & Confirm Eligibility", description: "Submit application with ID, educational background, and NDT work experience record. For SAEP-1112 compliance, specific experience hours must be documented before certification is issued." },
    { step: 2, title: "Attend Training Course", description: "Complete classroom theory and practical sessions. ASNT SNT-TC-1A minimum training hours are strictly observed. Training can be conducted at our Dammam facility or on-site at your location in KSA." },
    { step: 3, title: "Written Examination", description: "Sit the ASNT-format written exam covering NDT theory, equipment principles, codes and standards (including ASME and API codes). 70% minimum pass mark required." },
    { step: 4, title: "Practical Examination", description: "Demonstrate detection and characterisation of flaws in reference test specimens. Must meet written practice acceptance criteria. Real specimens representative of KSA oil & gas equipment are used." },
    { step: 5, title: "Eye Examination", description: "Jaeger J-2 near vision and Snellen 20/30 distance vision test per ASNT SNT-TC-1A Section 8. Required before any certification is issued — annual for Level II and III in Aramco projects." },
    { step: 6, title: "Employer Certification", description: "Your employer or Atlantis NDT issues the formal certification letter. For Aramco contractor work, documentation must align to SAEP-1112 format requirements including employer written practice references." },
    { step: 7, title: "Renewal", description: "ASNT SNT-TC-1A certification renews every 3 years (Level I & II) or 5 years (Level III). Aramco contractors typically require annual eye exam re-verification regardless of certification renewal schedule." }
];

const faqs = [
    {
        question: "Is training recognised by Saudi Aramco?",
        answer: "Yes, our training programs meet Saudi Aramco requirements per SAEP-1112 (Qualification and Certification of NDT Personnel). We provide training aligned with SNT-TC-1A minimum hours and documentation requirements that Aramco and its contractors accept. Candidates must still have their certification issued and administered by their employer per SAEP-1112."
    },
    {
        question: "Do you offer training for SABIC projects?",
        answer: "Absolutely. Our courses are recognised by major Saudi petrochemical companies including SABIC affiliates in Jubail and Yanbu. We have delivered on-site training programmes for SABIC contractor companies and can customise content to SABIC-specific inspection procedures."
    },
    {
        question: "Where is the main training center?",
        answer: "Our primary KSA facility is in Dammam (Eastern Province), which is the closest major city to most oil & gas operations. We also run scheduled programs in Riyadh and Jubail. On-site training at client facilities anywhere in the Kingdom is available — contact us for a quotation."
    },
    {
        question: "What is SAEP-1112 and do I need to comply with it?",
        answer: "SAEP-1112 is Saudi Aramco Engineering Procedure 1112 — the governing document for qualification and certification of NDT personnel working on Aramco facilities or for Aramco contractors. It mandates that training follows ASNT SNT-TC-1A, employers maintain a written practice, and technicians are certified by their employer (not just a training provider). Atlantis NDT helps you build the complete documentation package needed for SAEP-1112 compliance."
    },
    {
        question: "Is ASNT SNT-TC-1A accepted by Saudi Aramco?",
        answer: "Yes. SAEP-1112 explicitly references ASNT SNT-TC-1A as the accepted qualification standard for NDT personnel. Aramco does not accept ISNT, BS EN ISO 9712, or other standards as the primary qualification basis — SNT-TC-1A compliance is mandatory. ISO 9712 may be accepted for some specific methods by some Aramco affiliates; always verify with your specific Aramco project requirement."
    },
    {
        question: "Is online NDT training available for KSA-based candidates?",
        answer: "Yes, Atlantis NDT offers online theory training accessible from Saudi Arabia. The theoretical portion can be completed online with live instructor support. Practical examination must be completed at an approved centre. We can coordinate practical sessions in Dammam or at your employer's facility in KSA."
    },
    {
        question: "Do you offer training in Arabic?",
        answer: "Training is primarily delivered in English, which is the working language for NDT in the KSA oil & gas sector. Arabic-speaking instructors and Arabic study notes are available for some methods. All documentation (certificates, written practices) is issued in English per ASNT SNT-TC-1A requirements."
    },
    {
        question: "What are the salary expectations for NDT technicians in Saudi Arabia?",
        answer: "NDT Level I technicians typically earn SAR 5,000–8,000/month. Level II earns SAR 8,000–15,000/month. Level III professionals earn SAR 18,000–30,000/month. Expatriate packages from international inspection companies often add housing, transport, and repatriation benefits on top of the base salary, significantly increasing total compensation. All income is tax-free in Saudi Arabia."
    }
];

export default function NDTTrainingSaudiArabia() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": "NDT Training Saudi Arabia",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "ASNT SNT-TC-1A SAEP-1112 compliant NDT certification training in Saudi Arabia. Level I, II, III for UT, MT, PT, RT, ET, VT. Saudi Aramco and SABIC recognised.",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "inLanguage": "en",
                    "location": { "@type": "Place", "name": "Dammam, Saudi Arabia" }
                },
                "educationalCredentialAwarded": "ASNT SNT-TC-1A Certification"
            },
            faqSchema
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training Saudi Arabia | ARAMCO SAEP-1112 Compliant | Atlantis NDT"
                description="ASNT and ARAMCO-compliant NDT training in Saudi Arabia. SNT-TC-1A Level I, II, III for UT, MT, PT, RT, ET. SAEP-1112 compliant procedures. Vision 2030 project ready."
                keywords="NDT training Saudi Arabia, NDT certification KSA, ASNT training Dammam, NDT courses Riyadh, Saudi Aramco NDT training, SAEP-1112 NDT, NDT Jubail, NDT training Yanbu, SABIC NDT certification, NDT training Saudi Arabia, CSWIP Saudi Arabia"
                canonical="https://atlantisndt.com/ndt-training-saudi-arabia"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <motion.section
                className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-primary mb-4">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Training & Certification</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Training in <span className="gradient-text">Saudi Arabia</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT SNT-TC-1A and SAEP-1112 compliant NDT certification training for Saudi Aramco, SABIC, and major KSA operators. Dammam, Riyadh, Jubail, and on-site locations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto">Enrol Now</Button>
                            </Link>
                            <Link to="/training">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">View All Courses</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-primary mb-2">95%</div><div className="text-muted-foreground">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">5+</div><div className="text-muted-foreground">KSA Locations</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Aramco</div><div className="text-muted-foreground">Aligned</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
                    </div>
                </div>
            </section>

            {/* SAEP-1112 Alert Banner */}
            <section className="py-6 bg-amber-50 border-y border-amber-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-amber-900">SAEP-1112 Compliance Note</p>
                            <p className="text-amber-800 text-sm mt-1">
                                For work on Saudi Aramco facilities and contractor projects, NDT personnel must be qualified and certified under Saudi Aramco Engineering Procedure SAEP-1112, which requires ASNT SNT-TC-1A as the base standard with employer-issued certification. Atlantis NDT training content aligns to these requirements. Ask our team about complete SAEP-1112 documentation packages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Table */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">NDT Courses Available in Saudi Arabia</h2>
                        <p className="text-muted-foreground">All courses aligned to ASNT SNT-TC-1A minimum training hours. Contact us for current scheduling and corporate rates.</p>
                    </motion.div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-primary/10">
                                    <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                                    <th className="text-left p-3 font-semibold border border-border">Levels</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level I Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level II Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Standard</th>
                                    <th className="text-left p-3 font-semibold border border-border">Prerequisites</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <motion.tr
                                        key={course.method}
                                        className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.04 }}
                                    >
                                        <td className="p-3 border border-border font-medium">{course.method}</td>
                                        <td className="p-3 border border-border">{course.levels.join(", ")}</td>
                                        <td className="p-3 border border-border">{course.levelI}</td>
                                        <td className="p-3 border border-border">{course.levelII}</td>
                                        <td className="p-3 border border-border text-xs">{course.standard}</td>
                                        <td className="p-3 border border-border text-muted-foreground text-xs">{course.prerequisites}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Level III training is advanced and requires prior Level II certification. Duration varies by method. On-site delivery available anywhere in KSA.</p>
                </div>
            </section>

            {/* Why Train in Saudi Arabia */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Train in Saudi Arabia?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Saudi Arabia is the world's largest oil producer and one of the most active NDT employment markets globally.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whySaudiArabia.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <item.icon className="w-8 h-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Applications */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Industry Applications in Saudi Arabia</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT technicians trained in KSA find employment across these major sectors — all experiencing rapid growth under Vision 2030.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-base">{industry.title}</CardTitle>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${industry.demand === "Very High" ? "bg-green-100 text-green-800" : industry.demand === "High" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
                                                {industry.demand} Demand
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Path */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Your Certification Path</h2>
                        <p className="text-muted-foreground">From application to SAEP-1112 compliant certified NDT technician — the complete process.</p>
                    </motion.div>
                    <div className="space-y-4">
                        {certificationPath.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="flex gap-4 items-start"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                    {step.step}
                                </div>
                                <div className="bg-background p-4 rounded-lg shadow-sm flex-1">
                                    <h3 className="font-semibold mb-1">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Salary & Career Outlook */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Salary & Career Outlook — Saudi Arabia NDT</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Saudi Arabia offers some of the most competitive NDT salaries in the world — all tax-free. Vision 2030 is accelerating demand for years to come.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level I</CardTitle>
                                    <div className="text-3xl font-bold text-primary">SAR 5,000–8,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Entry-level technician working under Level II supervision. Most packages include housing, transport, and annual return flights for expatriate technicians.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level II</CardTitle>
                                    <div className="text-3xl font-bold text-primary">SAR 8,000–15,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Independent inspector. Most common role at Aramco contractors, SABIC affiliates, and international inspection companies in KSA. PAUT specialists earn at the top of this range.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level III</CardTitle>
                                    <div className="text-3xl font-bold text-primary">SAR 18,000–30,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Senior technical authority. SAEP-1112 requires Level III to review and approve written practices for Aramco projects. Very high demand across Aramco EPC contractors.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-6">
                        <h3 className="font-bold mb-3">Career Demand Outlook</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Saudi Arabia's Vision 2030 programme is generating unprecedented demand for NDT professionals through 2030 and beyond. The Jizan Economic City refinery, NEOM new city development, the Ras Al-Khair industrial city expansion, and Saudi Aramco's ongoing refinery maintenance programme all require thousands of SAEP-1112 compliant NDT technicians. Green hydrogen projects at NEOM will add demand for specialized pressure vessel and pipeline NDT as construction progresses. Atlantis NDT graduates have strong placement rates with Aramco EPC contractors including Saipem, MCDERMOTT, Tecnicas Reunidas, and Bechtel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Certifications & Locations */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Certifications Offered</h2>
                            <ul className="space-y-3">
                                {certifications.map((cert) => (
                                    <li key={cert} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Training Locations</h2>
                            <ul className="space-y-3">
                                {locations.map((loc) => (
                                    <li key={loc.name}>
                                        <Link to={loc.link} className="flex items-center gap-3 hover:text-primary transition">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <span>{loc.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.07 }}
                                className="bg-secondary/30 p-6 rounded-lg"
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Services & Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/consulting/ndt-consulting-saudi-arabia" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Consulting Saudi Arabia</div>
                            <div className="text-xs text-muted-foreground mt-1">SAEP-1112 procedure development</div>
                        </Link>
                        <Link to="/training-me" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Middle East Training Hub</div>
                            <div className="text-xs text-muted-foreground mt-1">GCC-wide training overview</div>
                        </Link>
                        <Link to="/asnt-certification" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Certification Guide</div>
                            <div className="text-xs text-muted-foreground mt-1">SNT-TC-1A full guide</div>
                        </Link>
                        <Link to="/ndt-training-online" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Online NDT Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Train from anywhere in KSA</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in Saudi Arabia</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrol today or contact us for corporate training quotes and SAEP-1112 compliance packages.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg">Enrol Now</Button>
                        </Link>
                        <Link to="/training-me">
                            <Button variant="outline" size="lg">View Middle East Programs</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
