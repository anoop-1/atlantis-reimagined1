import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { RelatedCityProducts } from "@/components/RelatedProducts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle, Video, Monitor, GraduationCap, Globe, Clock, Award, Users, Briefcase, AlertCircle, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import DeepContent from "@/components/DeepContent";
import onlineDeep from "@/data/deep-content/ndt-training-online.json";
import NaTrainingNationwide from "@/components/NaTrainingNationwide";
import SNT_HOURS from "@/data/snt-tc-1a-hours.json";
import { OnlineNearMePointer } from "@/components/TrainingReleaseBlocks"; // 2026-10-12: pointer to /training#ndt-training-near-me (no second near-me H2)
import ApprovedTrainingFees from "@/components/ApprovedTrainingFees"; // 2026-10-18 (owner): US fees allowed here; path-driven, never typed
import ONLINE from "@/data/online-training-2026-10.json"; // 2026-10-18: "Online NDT courses by method" table, same JSON as the crawler (scripts/online-training-2026-10.mjs)
import WAVE16 from "@/data/ctr-wave16/training.json"; // 2026-10-18: title/description from the wave-16 file

// 2026-10-16: hours read from src/data/snt-tc-1a-hours.json (SNT-TC-1A recommended classroom
// hours; Level II is in addition to Level I) instead of typed figures that disagreed with it.
const COURSE_ROWS: [string, string, string][] = [
    ["UT", "Ultrasonic Testing (UT)", "Theory + written exam prep"],
    ["RT", "Radiographic Testing (RT)", "Theory + radiation safety module"],
    ["MT", "Magnetic Particle Testing (MT)", "Theory + written exam prep"],
    ["PT", "Liquid Penetrant Testing (PT)", "Theory + written exam prep"],
    ["ET", "Eddy Current Testing (ET)", "Theory + virtual signal demonstrations"],
    ["VT", "Visual Testing (VT)", "Theory + written exam prep"],
];
const courses = [
    ...COURSE_ROWS.map(([k, method, included]) => ({
        method,
        levels: ["Level I", "Level II"],
        levelI: `${SNT_HOURS.classroom[k][0]} hrs`,
        levelII: `+${SNT_HOURS.classroom[k][1]} hrs`,
        format: "Self-paced",
        standard: "ASNT SNT-TC-1A",
        included,
    })),
    {
        method: "NDT Theory (All Methods)",
        levels: ["Refresher"],
        levelI: "Scoped to your renewal",
        levelII: "N/A",
        format: "Self-Paced",
        standard: "ASNT SNT-TC-1A revision",
        included: "Pre-recorded video modules"
    }
];

const benefits = [
    "Learn from anywhere in the world — no travel required",
    "Same SNT-TC-1A theory hours as on-site training",
    "Self-paced theory, with an ASNT Level III answering your questions",
    "Enroll any time of year — no fixed course dates",
    "Study at your own pace, around your shifts",
    "A documented training record for your employer",
    "No travel or accommodation needed for the theory",
    "Questions answered by an ASNT Level III"
];

const whyOnline = [
    {
        icon: Globe,
        title: "Train From Anywhere",
        description: "Wherever you work — the United States, Canada, the Middle East, India, Europe or South East Asia — the self-paced online course delivers the same ASNT SNT-TC-1A curriculum. No visa, no travel, no accommodation costs. All you need is a stable internet connection and a computer."
    },
    {
        icon: Clock,
        title: "Start Any Month",
        description: "Enrollment is open all year: access opens the moment you enroll, and there are no fixed course dates. The theory is self-paced, so you study around your shifts and catch up whenever you need to."
    },
    {
        icon: Award,
        title: "Same ASNT-Aligned Curriculum",
        description: "Online theory follows the same ASNT SNT-TC-1A minimum training hours as our on-site courses. Written exam preparation, practice questions and instructor feedback are included, and your training record documents the hours for your employer's written practice."
    },
    {
        icon: Users,
        title: "Level III Support",
        description: "An ASNT NDT Level III answers your course questions throughout, and gives feedback on practice exam questions and calculations. There are no live classes to attend."
    }
];

const whatIsIncluded = [
    { item: "Self-paced online theory with ASNT Level III support", included: true },
    { item: "Pre-recorded theory module video library", included: true },
    { item: "Digital course notes and study guides (PDF)", included: true },
    { item: "Practical NDT simulator practice", included: true },
    { item: "Practice examination questions for each method", included: true },
    { item: "Answers to your course questions from an ASNT Level III", included: true },
    { item: "Certificate of training completion (a training record, not a certification)", included: true },
    { item: "Hands-on practical training", included: false },
    { item: "Practical examination on reference specimens", included: false },
    { item: "Eye examination", included: false },
    { item: "Final employer certification letter", included: false }
];

const certificationPath = [
    { step: 1, title: "Enrol in Online Theory Course", description: "Enroll in your chosen method and level at any time of year. Access opens the moment you enrol, and you can begin the self-paced material once your enrollment is confirmed." },
    { step: 2, title: "Complete Online Theory Training", description: "Work through the self-paced material online and send your questions to the Level III. Complete all ASNT SNT-TC-1A minimum theory hours. Instructors track your attendance and progress throughout the course." },
    { step: 3, title: "Practice Written Examination", description: "Sit multiple ASNT-format practice examinations online with instant feedback. Review incorrect answers with instructor explanations. Prepare for the final written examination, which is administered under your employer's written practice." },
    { step: 4, title: "Complete Practical Training (In-Person Required)", description: "The practical component CANNOT be completed online. Practical training runs at your employer's facility, on its own equipment and parts, under an ASNT Level III. Practice in the Practical NDT simulator beforehand helps, but it does not replace this. Atlantis does not run training centres." },
    { step: 5, title: "Sit Written & Practical Examinations", description: "Pass the written and practical examinations your employer's written practice sets, including its pass marks, administered by its Level III or an outside Level III. Your employer also carries out the vision examination before certification is issued." },
    { step: 6, title: "Employer Certification", description: "Your employer issues the formal certification under its SNT-TC-1A written practice. Online theory completion is documented as part of your training record." },
    { step: 7, title: "Renewal & Continuing Education", description: "Your employer's written practice sets the recertification interval. Online refresher training is an efficient way to meet continuing education requirements. We offer targeted method-specific refresher modules for renewal preparation." }
];

const faqs = [
    {
        question: "Is online NDT training effective?",
        answer: "For theory, yes. The self-paced material is backed by an ASNT Level III who answers your questions, and the same ASNT SNT-TC-1A minimum training hours are covered. The Practical NDT simulator helps you visualise equipment responses and signal interpretation. Hands-on skill still comes from the supervised practical on real parts."
    },
    {
        question: "What equipment do I need?",
        answer: "A computer or laptop with webcam, microphone and a reliable internet connection. A quiet learning environment is important. We provide the digital course materials. A second monitor is helpful but not essential."
    },
    {
        question: "Are online certificates recognised?",
        answer: "Your certificate of training completion documents the training hours; it is not a certification. ASNT SNT-TC-1A does not differentiate between online and classroom training in its certification requirements — what matters is that the required theory hours are completed and documented. Employer certification (the final step) is issued based on the full training record including online completion."
    },
    {
        question: "Can I get fully certified online — without any in-person attendance?",
        answer: "No. The practical examination component cannot be completed online — this is a fundamental requirement of ASNT SNT-TC-1A certification. You must demonstrate hands-on competence on physical reference test specimens. Online training covers the complete theoretical component. The practical training and examination are completed at your employer's facility, on its own equipment and parts, under an ASNT Level III. Atlantis has no regional centres or public venues."
    },
    {
        question: "How does online NDT training work technically?",
        answer: "The theory is self-paced online: pre-recorded video modules with knowledge-check questions, digital notes and practice exams, with progress tracked on our learning management platform. An ASNT Level III answers your course questions by email or message. There are no live classes to attend, so you study around your shifts."
    },
    {
        question: "How long do I have access to the course materials?",
        answer: "Access periods for the course materials and recordings are confirmed when you enroll. We recommend completing your practical examination soon after you finish the online theory, while the content is fresh."
    },
    {
        question: "Is online NDT training recognised by employers in oil & gas?",
        answer: "Yes. ASNT SNT-TC-1A does not specify that training must be in-person — it specifies minimum training hours and content. Many operators and inspection companies accept online training as long as the hours are properly documented in the training record. Some specific employer written practices may specify in-person requirements — always verify with your employer before enrolling."
    },
    {
        question: "Which NDT certification standards can I prepare for online?",
        answer: "Our online courses are built to ASNT SNT-TC-1A, the recommended practice most US employers base their written practices on. Atlantis does not offer ISO 9712, NAS 410 or other schemes' training; the physics is the same, but if you need another scheme, check its own training requirements first."
    }
];

export default function NDTTrainingOnline() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            ...faqs.map(faq => ({ q: faq.question, a: faq.answer })),
            // 2026-09-29: visible FAQs from the deep section (same list the prerender folds in)
            ...onlineDeep.faqs.filter(f => !faqs.some(x => x.question === f.q)),
        ].map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": "Online NDT Training",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "Online NDT certification training. Self-paced ASNT SNT-TC-1A courses for UT, MT, PT, RT, ET, VT with ASNT NDT Level III support. Level I and Level II theory from anywhere in the world.",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "online",
                    "inLanguage": "en"
                },
                "educationalCredentialAwarded": "Certificate of Training Completion (ASNT SNT-TC-1A aligned)"
            },
            faqSchema
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title={WAVE16["/ndt-training-online"].title}
                description={WAVE16["/ndt-training-online"].description}
                keywords="online NDT training, virtual NDT courses, NDT training online, ASNT online certification, NDT e-learning, remote NDT training, online UT training, online MT training, NDT Level II online, virtual NDT certification"
                canonical="https://atlantisndt.com/ndt-training-online"
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
                            <Monitor className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Online Training</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Online</span> NDT Training
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Online NDT theory from anywhere in the world: ASNT SNT-TC-1A theory courses for Level I and Level II, self-paced, with an ASNT Level III answering your questions, and enrollment open all year. The practical is completed in person at your employer's facility.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">100%</div><div className="text-muted-foreground">Online Theory</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Level III</div><div className="text-muted-foreground">Support throughout</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Global</div><div className="text-muted-foreground">Access</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Year-round</div><div className="text-muted-foreground">Enrollment</div></div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-6 bg-amber-50 border-y border-amber-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-amber-900">Important: Online Training Covers Theory Only</p>
                            <p className="text-amber-800 text-sm mt-1">
                                Per ASNT SNT-TC-1A, NDT certification requires both theoretical knowledge AND demonstrated hands-on practical competence. Our online courses cover the complete theory component. The practical training and examination must be completed in person, on real specimens at your employer's facility under an ASNT Level III. Contact us to arrange the practical sessions; Atlantis does not run training centres.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <OnlineNearMePointer />

            {/* Courses Table — 2026-10-18: "Online NDT courses by method", from src/data/online-training-2026-10.json + snt-tc-1a-hours.json (same as the crawler) */}
            <section className="py-20" data-online-courses>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">{ONLINE.h2}</h2>
                        <p className="text-muted-foreground">{ONLINE.intro}</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <caption className="text-left text-muted-foreground mb-3">{ONLINE.caption}</caption>
                            <thead>
                                <tr className="bg-primary/10">
                                    {ONLINE.head.map((h) => <th key={h} scope="col" className="text-left p-3 font-semibold border border-border">{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {ONLINE.methods.map(([k, href, label], index) => {
                                    const key = k as keyof typeof SNT_HOURS.classroom;
                                    return (
                                        <tr key={k} className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                                            <th scope="row" className="p-3 border border-border font-medium text-left">{SNT_HOURS.methodNames[key as keyof typeof SNT_HOURS.methodNames]}</th>
                                            <td className="p-3 border border-border">{SNT_HOURS.classroom[key][0]}</td>
                                            <td className="p-3 border border-border">{SNT_HOURS.classroom[key][1]}</td>
                                            <td className="p-3 border border-border">{ONLINE.start}</td>
                                            <td className="p-3 border border-border">{ONLINE.format}</td>
                                            <td className="p-3 border border-border">{ONLINE.practical}</td>
                                            <td className="p-3 border border-border"><Link to={href} className="text-primary underline">{label}</Link></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: ONLINE.after }} />
                    <p className="text-sm text-muted-foreground mt-2">{ONLINE.feesLead}</p>
                </div>
            </section>
            <ApprovedTrainingFees />

            {/* Why Choose Online Training */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Choose Online NDT Training?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Online training removes the barriers of distance, scheduling, and cost — without compromising on quality or ASNT compliance.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyOnline.map((item, index) => (
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

            {/* What is / is not Included */}
            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">What Is (and Is Not) Included Online</h2>
                        <p className="text-muted-foreground">Be clear on what our online courses cover before you enrol.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg text-green-700">Included in Online Training</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {whatIsIncluded.filter(i => i.included).map((item) => (
                                        <li key={item.item} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{item.item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg text-amber-700">Must Be Completed In-Person</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {whatIsIncluded.filter(i => !i.included).map((item) => (
                                        <li key={item.item} className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{item.item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 p-3 bg-amber-50 rounded text-xs text-amber-800">
                                    Contact us to arrange the practical sessions at your employer's facility; Atlantis does not run training centres.
                                </div>
                            </CardContent>
                        </Card>
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
                        <h2 className="text-3xl font-bold mb-4">Your Online-to-Certified Pathway</h2>
                        <p className="text-muted-foreground">From online enrolment to fully certified NDT technician — how the blended learning pathway works.</p>
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
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step.step === 4 ? "bg-amber-500 text-white" : "bg-primary text-primary-foreground"}`}>
                                    {step.step}
                                </div>
                                <div className={`p-4 rounded-lg shadow-sm flex-1 ${step.step === 4 ? "bg-amber-50 border border-amber-200" : "bg-background"}`}>
                                    <h3 className="font-semibold mb-1">
                                        {step.title}
                                        {step.step === 4 && <span className="ml-2 text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">In-Person Required</span>}
                                    </h3>
                                    <p className={`text-sm ${step.step === 4 ? "text-amber-800" : "text-muted-foreground"}`}>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Benefits of Online Training</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary/30">
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
                                className="bg-background p-6 rounded-lg shadow-sm"
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Which level */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-3">Not Sure Which Level You Need?</h2>
                    <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Our online theory courses cover Level I and Level II. Each level has different prerequisites, training hours, and a different exam path — see the full breakdown before you enrol.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link to="/ndt-level-1-training" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Level 1 Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Entry-level prerequisites and hours</div>
                        </Link>
                        <Link to="/ndt-level-2-training" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Level 2 Training</div>
                            <div className="text-xs text-muted-foreground mt-1">ASNT Level II + ASNT 9712 (formerly ACCP) pathway</div>
                        </Link>
                        <Link to="/asnt-level-iii-training" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Level III Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Senior technical authority pathway</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-8">Training Guides by Region</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <Link to="/asnt-certification" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Certification Guide</div>
                            <div className="text-xs text-muted-foreground mt-1">Full SNT-TC-1A overview</div>
                        </Link>
                        <Link to="/ndt-training-near-me" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training Near Me</div>
                            <div className="text-xs text-muted-foreground mt-1">How on-site delivery works in the US</div>
                        </Link>
                        <Link to="/ndt-training-usa" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training USA</div>
                            <div className="text-xs text-muted-foreground mt-1">Online theory + onsite practical</div>
                        </Link>
                        <Link to="/ndt-training-india" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training India</div>
                            <div className="text-xs text-muted-foreground mt-1">Online theory + on-site practical</div>
                        </Link>
                        <Link to="/training-me" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training Middle East</div>
                            <div className="text-xs text-muted-foreground mt-1">Online theory + on-site practical (GCC)</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Learning from Anywhere</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrollment is open all year: access opens the moment you enroll, and there are no fixed course dates.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg">Enrol Now</Button>
                        </Link>
                        <Link to="/training">
                            <Button variant="outline" size="lg">View All Courses</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <RelatedCityProducts currentProduct="training" citySlug="online" city="Online" />
                </div>
            </section>

            <DeepContent path="/ndt-training-online" />

            <TrainingEnquiryCTA />
      <NaTrainingNationwide />
      <ContactDetails />
        </div>
    );
}
