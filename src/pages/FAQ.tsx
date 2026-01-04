import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQAccordion = ({ question, answer }: FAQItem) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-slate-900">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-slate-600 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQPage() {
    const generalFAQs: FAQItem[] = [
        {
            question: "What is Non-Destructive Testing (NDT)?",
            answer: "Non-Destructive Testing (NDT) is a group of analysis techniques used to evaluate the properties of materials, components, or assemblies without causing damage. NDT methods are essential for quality control, safety inspections, and maintenance in industries like oil & gas, aerospace, power generation, and manufacturing."
        },
        {
            question: "What are the main types of NDT methods?",
            answer: "The main NDT methods include Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT). Each method has specific applications depending on the material type, defect orientation, and accessibility."
        },
        {
            question: "Why is NDT important for industrial safety?",
            answer: "NDT is critical for detecting defects before they lead to equipment failure, environmental damage, or safety incidents. Regular NDT inspections ensure structural integrity, extend asset life, reduce downtime, and comply with regulatory requirements in industries like oil & gas, nuclear, and aerospace."
        },
        {
            question: "How do I choose the right NDT method for my application?",
            answer: "The choice depends on several factors: material type (ferrous vs non-ferrous), defect type (surface vs subsurface), accessibility, and required sensitivity. For surface cracks on ferromagnetic materials, use MT. For subsurface defects, UT or RT is preferred. PT works on non-porous materials for surface defects. Our consultants can help you select the optimal method."
        }
    ];

    const trainingFAQs: FAQItem[] = [
        {
            question: "What NDT certifications does Atlantis offer?",
            answer: "Atlantis NDT offers training and certification for ASNT (American Society for Nondestructive Testing) Level I, II, and III across all major NDT methods including UT, RT, MT, PT, ET, and VT. We also provide preparation for CSWIP and PCN certifications."
        },
        {
            question: "What is the difference between NDT Level I, II, and III?",
            answer: "Level I technicians perform specific calibrations and tests under supervision. Level II technicians can set up equipment, interpret results, and prepare reports. Level III professionals can design test procedures, train others, and interpret codes and specifications. Each level requires more experience and knowledge."
        },
        {
            question: "How long does NDT training take?",
            answer: "Training duration varies by method and level. Level I typically requires 40 hours of classroom training, Level II requires 40-80 hours depending on the method. Certification also requires documented experience hours and passing written and practical exams."
        },
        {
            question: "Do you offer online NDT training?",
            answer: "Yes, we offer blended learning options combining online theoretical training with hands-on practical sessions. This allows flexibility for working professionals while ensuring practical competency through in-person labs."
        }
    ];

    const consultingFAQs: FAQItem[] = [
        {
            question: "What consulting services does Atlantis NDT provide?",
            answer: "We provide Level III consulting services including procedure development, code interpretation (ASME, API, AWS), quality assurance program development, third-party inspection, failure analysis, and expert witness services for legal matters."
        },
        {
            question: "Do you provide on-site NDT consulting?",
            answer: "Yes, our Level III consultants can work on-site at your facility anywhere in the USA, Middle East, or India. We provide turnkey solutions including equipment, personnel, and complete inspection programs."
        },
        {
            question: "Can you help with ASME code compliance?",
            answer: "Absolutely. Our consultants have extensive experience with ASME Section V (Nondestructive Examination), Section VIII (Pressure Vessels), and Section IX (Welding). We can develop compliant procedures, train your team, and provide third-party verification."
        }
    ];

    // FAQPage schema for rich snippets
    const allFAQs = [...generalFAQs, ...trainingFAQs, ...consultingFAQs];
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title="NDT FAQ | Common Questions About Non-Destructive Testing"
                description="Get answers to frequently asked questions about Non-Destructive Testing, NDT training & certification, and our consulting services. Learn about UT, RT, MT, PT, ET, and VT methods."
                keywords="NDT FAQ, what is NDT, NDT testing questions, NDT certification FAQ, ASNT certification questions, ultrasonic testing questions, radiographic testing FAQ, NDT training FAQ"
                canonical="https://atlantisndt.com/faq"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <section className="relative bg-white shadow-md pt-24">
                <div className="container mx-auto max-w-4xl px-6 py-16 text-center">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: "#004aad" }}
                    >
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600">
                        Find answers to common questions about Non-Destructive Testing,
                        our training programs, and consulting services.
                    </p>
                </div>
            </section>

            {/* FAQ Sections */}
            <main className="container mx-auto max-w-4xl px-6 py-16">
                {/* General NDT FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                        General NDT Questions
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {generalFAQs.map((faq, idx) => (
                            <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Training FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                        Training & Certification
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {trainingFAQs.map((faq, idx) => (
                            <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Consulting FAQs */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                        Consulting Services
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {consultingFAQs.map((faq, idx) => (
                            <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-[#004aad] to-blue-600 rounded-xl p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="mb-6 opacity-90">
                        Our team of NDT experts is ready to help you with any questions
                        about testing methods, training, or consulting services.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                    >
                        Contact Us
                    </a>
                </section>
            </main>

            <ContactDetails />
        </div>
    );
}
