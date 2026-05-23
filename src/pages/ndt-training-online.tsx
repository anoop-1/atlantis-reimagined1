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

const courses = [
    {
        method: "Ultrasonic Testing (UT)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A",
        included: "Theory + written exam prep"
    },
    {
        method: "Radiographic Testing (RT)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A",
        included: "Theory + radiation safety module"
    },
    {
        method: "Magnetic Particle Testing (MT)",
        levels: ["Level I", "Level II"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A / ISO 9712 prep",
        included: "Theory + written exam prep"
    },
    {
        method: "Liquid Penetrant Testing (PT)",
        levels: ["Level I", "Level II"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A / ISO 9712 prep",
        included: "Theory + written exam prep"
    },
    {
        method: "Eddy Current Testing (ET)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A",
        included: "Theory + virtual signal demonstrations"
    },
    {
        method: "Visual Testing (VT)",
        levels: ["Level I", "Level II"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        format: "Live Virtual",
        standard: "ASNT SNT-TC-1A",
        included: "Theory + written exam prep"
    },
    {
        method: "Radiographic Safety (RSO)",
        levels: ["Safety Officer"],
        levelI: "40 hrs",
        levelII: "N/A",
        format: "Live Virtual",
        standard: "Regulatory compliance",
        included: "Theory + regulatory framework"
    },
    {
        method: "NDT Theory (All Methods)",
        levels: ["Refresher"],
        levelI: "8–16 hrs",
        levelII: "N/A",
        format: "Self-Paced",
        standard: "ASNT SNT-TC-1A revision",
        included: "Pre-recorded video modules"
    }
];

const benefits = [
    "Learn from anywhere in the world — no travel required",
    "Same curriculum and learning outcomes as classroom courses",
    "Live interaction with ASNT Level III certified instructors",
    "Flexible scheduling — weekend and evening classes available",
    "Recorded sessions available for 30-day review access",
    "Digital certificates of training completion issued immediately",
    "Significantly lower cost than classroom attendance",
    "Chat, Q&A, and breakout sessions throughout each module"
];

const whyOnline = [
    {
        icon: Globe,
        title: "Train From Anywhere",
        description: "Whether you are in Houston, Hyderabad, Dubai, or Dammam — our online platform delivers the same ASNT-aligned curriculum. No visa, no travel, no accommodation costs. All you need is a stable internet connection and a computer."
    },
    {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "We offer morning, evening, and weekend class slots to accommodate working professionals. Classes are recorded so you can review missed sessions. Self-paced modules are available for refresher training and exam preparation."
    },
    {
        icon: Award,
        title: "Same ASNT-Aligned Curriculum",
        description: "Online theory training follows the same ASNT SNT-TC-1A minimum training hours as our classroom courses. Written exam preparation, practice questions, and instructor feedback are all included. The certificate of training completion carries the same recognition."
    },
    {
        icon: Users,
        title: "Live Instructor Support",
        description: "Every live virtual session is delivered by an ASNT Level III certified instructor with industry experience. You can ask questions in real time, participate in discussions, and get personalised feedback on practice exam questions and calculations."
    }
];

const whatIsIncluded = [
    { item: "Live video lecture sessions via Zoom/Teams", included: true },
    { item: "Pre-recorded theory module video library", included: true },
    { item: "Digital course notes and study guides (PDF)", included: true },
    { item: "Virtual laboratory simulations (UT, ET waveforms)", included: true },
    { item: "ASNT-format practice examination questions (100+ per method)", included: true },
    { item: "Instructor Q&A sessions (email and live)", included: true },
    { item: "30-day recorded session replay access", included: true },
    { item: "Certificate of Training Completion (digital)", included: true },
    { item: "Hands-on practical training", included: false },
    { item: "Practical examination on reference specimens", included: false },
    { item: "Eye examination", included: false },
    { item: "Final employer certification letter", included: false }
];

const certificationPath = [
    { step: 1, title: "Enrol in Online Theory Course", description: "Register for your chosen method and level. You will receive login access to the learning platform within 24 hours and can join the next scheduled live session or begin self-paced modules immediately." },
    { step: 2, title: "Complete Online Theory Training", description: "Attend live virtual sessions or work through pre-recorded modules. Complete all ASNT SNT-TC-1A minimum theory hours. Instructors track your attendance and progress throughout the course." },
    { step: 3, title: "Practice Written Examination", description: "Sit multiple ASNT-format practice examinations online with instant feedback. Review incorrect answers with instructor explanations. Prepare for the final written examination at your employer's facility or an approved test centre." },
    { step: 4, title: "Complete Practical Training (In-Person Required)", description: "The practical component CANNOT be completed online. You must attend hands-on practical training at an approved NDT facility — Atlantis NDT centre in your region, or at your employer's facility under a qualified Level III supervisor." },
    { step: 5, title: "Sit Written & Practical Examinations", description: "Pass the ASNT-format written examination (70% minimum) and practical examination on reference specimens at an approved centre. Eye examination must also be completed before certification is issued." },
    { step: 6, title: "Employer Certification", description: "Your employer or Atlantis NDT (as third-party certifier) issues the formal certification letter per ASNT SNT-TC-1A. Online theory completion is documented as part of your training record." },
    { step: 7, title: "Renewal & Continuing Education", description: "ASNT SNT-TC-1A certification renews every 3 years. Online refresher training is an efficient way to meet continuing education requirements. We offer targeted method-specific refresher modules for renewal preparation." }
];

const faqs = [
    {
        question: "Is online NDT training effective?",
        answer: "Yes! Our online training uses live virtual classrooms with real-time interaction delivered by ASNT Level III certified instructors. Theoretical content is equivalent to classroom training — the same ASNT SNT-TC-1A minimum training hours are covered. Virtual laboratory simulations help visualise equipment responses and waveform interpretation. Our online students pass at the same 95% rate as classroom attendees."
    },
    {
        question: "What equipment do I need?",
        answer: "A computer or laptop with webcam, microphone, and reliable broadband internet connection (minimum 10 Mbps). A quiet learning environment is important. We provide all digital course materials — no physical textbooks required. A second monitor is helpful but not essential. We use Zoom or Microsoft Teams, both of which are free to download."
    },
    {
        question: "Are online certificates recognised?",
        answer: "Yes, certificates of training completion from Atlantis NDT online courses carry the same recognition as classroom training. ASNT SNT-TC-1A does not differentiate between online and classroom training in its certification requirements — what matters is that the required theory hours are completed and documented. Employer certification (the final step) is issued based on the full training record including online completion."
    },
    {
        question: "Can I get fully certified online — without any in-person attendance?",
        answer: "No. The practical examination component cannot be completed online — this is a fundamental requirement of ASNT SNT-TC-1A certification. You must demonstrate hands-on competence on physical reference test specimens. Online training covers the complete theoretical component. The practical training and examination must be completed at an approved NDT facility. Contact us to arrange practical sessions at our nearest regional centre."
    },
    {
        question: "How does online NDT training work technically?",
        answer: "Sessions are delivered via Zoom or Microsoft Teams with a live ASNT Level III instructor. You can see the instructor's screen (presentations, equipment diagrams, virtual simulations), ask questions via audio or chat, and participate in group exercises. Sessions are recorded and available for 30 days after each class. Self-paced modules use pre-recorded video with embedded knowledge-check questions. Progress is tracked on our learning management platform."
    },
    {
        question: "How long do I have access to the course materials?",
        answer: "You have access to all digital course materials (PDFs, study guides, practice question banks) for 12 months from enrolment. Recorded live sessions are available for 30 days after each class date. Self-paced module videos are accessible for 6 months. After your access period, you can purchase an extension. We recommend completing your practical examination within 6 months of finishing online theory while the content is fresh."
    },
    {
        question: "Is online NDT training recognised by employers in oil & gas?",
        answer: "Yes. ASNT SNT-TC-1A does not specify that training must be in-person — it specifies minimum training hours and content. The vast majority of US, UAE, and Indian oil & gas operators and inspection companies accept training completed via online/virtual format as long as the hours are properly documented in the training record. Some specific employer written practices may specify in-person requirements — always verify with your employer before enrolling."
    },
    {
        question: "Which NDT certification standards can I prepare for online?",
        answer: "Our online courses are aligned to ASNT SNT-TC-1A (the most widely accepted standard globally). The theory content also covers ISO 9712 examination body of knowledge, making it useful preparation for ISO 9712 candidates. For NAS-410 (aerospace) or BARC (nuclear, India) qualifications, contact us to discuss whether our online content meets your specific certification pathway requirements."
    }
];

export default function NDTTrainingOnline() {
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
                "name": "Online NDT Training",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "Online NDT certification training. Live virtual ASNT SNT-TC-1A courses for UT, MT, PT, RT, ET, VT. Level I and Level II theory from anywhere in the world.",
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
                title="Online NDT Training | ASNT Level I II III Virtual Courses | Atlantis NDT"
                description="Online NDT training for ASNT SNT-TC-1A Level I, II, III certification. UT, MT, PT, RT, ET, VT theory modules. Flexible schedule. Enrol from anywhere."
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
                            Live virtual NDT training from anywhere in the world. ASNT SNT-TC-1A aligned theory courses for Level I and Level II. Same curriculum, flexible schedule, ASNT Level III instructors. Practical component must be completed in-person.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">Live</div><div className="text-muted-foreground">Level III Instructors</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Global</div><div className="text-muted-foreground">Access</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Flexible</div><div className="text-muted-foreground">Scheduling</div></div>
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
                                Per ASNT SNT-TC-1A, NDT certification requires both theoretical knowledge AND demonstrated hands-on practical competence. Our online courses cover the complete theory component. The practical training and examination MUST be completed in-person at an approved NDT facility. Contact us to arrange practical sessions at our nearest centre (Houston, Hyderabad, Dubai, or Dammam) or at your employer's approved facility.
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
                        <h2 className="text-3xl font-bold mb-4">Online Courses Available</h2>
                        <p className="text-muted-foreground">All live virtual courses are delivered by ASNT Level III certified instructors and cover full ASNT SNT-TC-1A minimum theory hours.</p>
                    </motion.div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-primary/10">
                                    <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                                    <th className="text-left p-3 font-semibold border border-border">Levels</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level I Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level II Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Format</th>
                                    <th className="text-left p-3 font-semibold border border-border">Standard</th>
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
                                        <td className="p-3 border border-border">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${course.format === "Live Virtual" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                                                {course.format}
                                            </span>
                                        </td>
                                        <td className="p-3 border border-border text-xs text-muted-foreground">{course.standard}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Online training covers the theory portion only. Practical examination must be completed in-person. Contact us to schedule your combined theory + practical pathway.</p>
                </div>
            </section>

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
                                    Contact us to arrange in-person practical sessions at our Houston, Hyderabad, Dubai, or Dammam centres.
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

            {/* Internal Links */}
            <section className="py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-8">Ready to Train In-Person? Choose a Location</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/asnt-certification" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Certification Guide</div>
                            <div className="text-xs text-muted-foreground mt-1">Full SNT-TC-1A overview</div>
                        </Link>
                        <Link to="/ndt-training-usa" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training USA</div>
                            <div className="text-xs text-muted-foreground mt-1">Houston training center</div>
                        </Link>
                        <Link to="/ndt-training-india" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training India</div>
                            <div className="text-xs text-muted-foreground mt-1">Hyderabad and 5 more cities</div>
                        </Link>
                        <Link to="/training-me" className="bg-secondary/30 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Training Middle East</div>
                            <div className="text-xs text-muted-foreground mt-1">Dubai, KSA, Qatar, Kuwait</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Learning from Anywhere</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrol in our online NDT training today. Classes available morning, evening, and weekend to suit your schedule.</p>
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

            <ContactDetails />
        </div>
    );
}
