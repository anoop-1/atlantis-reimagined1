import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { buildTechArticleSchema } from "@/data/author-schema";
import { CheckCircle, AlertTriangle, Cpu, Users, ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Does AI replace the ASNT Level III sign-off on NDT reports?",
        answer: "No. SNT-TC-1A and ASME Section V Article 1 require examinations to be performed and dispositioned by qualified personnel, with an NDT Level III holding final technical authority for procedure interpretation and disposition. AI defect-detection tools can flag likely-defect regions on a PAUT C-scan or a digital radiograph, but the acceptance/reject call and the report sign-off still have to come from a certified inspector. No current code or certification scheme lets a model sign a report."
    },
    {
        question: "How accurate is AI defect detection on PAUT and RT data?",
        answer: "It varies a lot by dataset, geometry, and vendor, and there is no single published industry-wide accuracy figure that applies across every use case. Models trained on a narrow set of weld geometries or scan parameters tend to perform worse when applied to different equipment, materials, or field conditions than their training data — the well-documented 'domain shift' problem. That is exactly why every serious implementation still routes flagged and unflagged data through a qualified human reviewer."
    },
    {
        question: "What NDT methods can AI-assisted review actually be used with today?",
        answer: "The methods generating digital, image-based data are the ones where automated flagging tools are furthest along — phased-array UT (PAUT) C-scans and digital radiography (RT) most prominently, since both produce structured 2D image data that pattern-recognition models can process. Methods that rely on direct sensory judgment in the field — MT, PT, VT — are much less exposed to this kind of tooling today."
    },
    {
        question: "Is there a code that formally addresses AI in NDT yet?",
        answer: "Not a single finished, universally adopted one. ASME Section V's computed-imaging-related subgroups and various industry committees are actively discussing how personnel-qualification and procedure-qualification requirements should treat AI-assisted acquisition and interpretation, but this is an evolving area, not a settled one. Until it is settled, the safe and compliant posture is: AI tools assist, a qualified human still examines and disposes."
    },
];

export default function AiNdtDefectDetection() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/ai-ndt-defect-detection",
                headline: "AI in NDT Defect Detection: What It Actually Does (and Doesn't Replace)",
                description: "How AI and machine learning are actually being used in NDT defect detection today — automated flagging on PAUT C-scans and digital radiographs, current limitations, and why the ASNT Level III sign-off requirement isn't going anywhere.",
                datePublished: "2026-08-10",
                dateModified: "2026-08-10",
                section: "AI in NDT",
                keywords: "AI NDT defect detection, machine learning PAUT, AI radiographic testing, automated defect flagging, AI inspection limitations, ASNT Level III sign-off",
                dependencies: "ASME BPVC Section V, SNT-TC-1A, ASNT NDT Level III",
            }),
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="AI in NDT Defect Detection 2026 — What It Does and Doesn't Replace"
                description="How AI and machine learning actually assist NDT defect detection today: automated flagging on PAUT C-scans and digital radiographs, real limitations, and why ASNT Level III sign-off still can't be automated away."
                keywords="AI NDT defect detection, machine learning NDT, AI PAUT C-scan, AI radiographic testing, automated defect flagging NDT, AI inspection software limitations, ASNT Level III sign-off AI"
                canonical="https://atlantisndt.com/ai-ndt-defect-detection"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
            <TableOfContents items={[
                { id: "how-it-helps", label: "How AI Actually Helps Today" },
                { id: "what-it-doesnt-replace", label: "What AI Doesn't Replace" },
                { id: "limitations", label: "Realistic Limitations" },
                { id: "where-its-heading", label: "Where the Technology Is Heading" },
                { id: "atlantis-stack", label: "How This Connects to Atlantis NDT" },
                { id: "faq", label: "FAQ" },
            ]} />
            <QuickAnswerBox
                question="Does AI actually detect defects in NDT inspection today?"
                answer="Yes, in a specific, bounded way: machine-learning models can flag likely-defect regions on structured, image-based NDT data — mainly phased-array UT (PAUT) C-scans and digital radiographs — which speeds up the review pass for a human inspector. What it does not do is replace the qualified-examiner requirement: SNT-TC-1A and ASME Section V Article 1 still require a certified inspector, with an NDT Level III holding final technical authority, to interpret and disposition every result."
                bullets={[
                    "Best-suited today: image-based methods — PAUT C-scans, digital RT",
                    "Role: first-pass triage / flagging, not autonomous disposition",
                    "Still required: certified human interpretation and Level III sign-off",
                ]}
            />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4">
                            <Cpu className="w-5 h-5" /><span>AI in Inspection</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in NDT Defect Detection: What It Actually Does (and Doesn't Replace)</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">
                            Machine learning is showing up in inspection workflows — mostly as a faster first pass over PAUT C-scans and digital radiographs, not as a replacement for the certified inspector who signs the report. Here is what the technology can realistically do today, where it falls short, and how the compliance framework around it actually works.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Talk to an ASNT Level III</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training Programs</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How AI actually helps today */}
            <section id="how-it-helps" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">How AI Actually Helps NDT Inspection Today</h2>
                    <p className="text-slate-700 mb-4">
                        Strip away the marketing language and what's genuinely happening in the industry is narrower than "AI does inspections." The methods that generate structured, image-based digital data are the ones where machine-learning tools have found real traction — mainly phased-array ultrasonic testing (PAUT), where the output is a C-scan, B-scan, or S-scan image, and radiographic testing (RT), where digital detector arrays and computed radiography produce a digital image file instead of exposed film. Both of those data types are exactly the kind of structured, pixel-based input that pattern-recognition and computer-vision models are built to process.
                    </p>
                    <p className="text-slate-700 mb-4">
                        In practice, the tools are used as a triage layer. A trained model scans through a batch of C-scan images or radiographs and flags the regions most likely to contain an indication — a crack, porosity, lack of fusion, slag, or a geometric anomaly worth a second look. Instead of an inspector paging through every frame of a large data set at the same pace, the flagged frames get prioritized for review. On high-volume jobs — long girth-weld campaigns, large storage-tank floor scans, high-throughput weld-production lines — that kind of triage can meaningfully cut the time it takes to get through a data set, because the reviewer's attention gets directed to the frames statistically most likely to matter first.
                    </p>
                    <p className="text-slate-700 mb-4">
                        That's the honest scope of what's deployed and working today: accelerating the review pass on image-based data. It is not the same as autonomous defect detection, and it is not the same as automated code-acceptance disposition — both of those remain firmly in human territory, for reasons that are as much regulatory as they are technical.
                    </p>
                </div>
            </section>

            {/* What it doesn't replace */}
            <section id="what-it-doesnt-replace" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What AI Does Not Replace: The ASNT Level III Sign-Off</h2>
                    <div className="bg-white border-l-4 border-amber-500 rounded-md p-5 mb-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-slate-700 m-0">
                                <strong>The rule that doesn't move:</strong> SNT-TC-1A and ASME Section V Article 1 require that examinations be performed and results dispositioned by personnel qualified under an employer's Written Practice, with an <Link to="/asnt-certification" className="text-primary underline underline-offset-2">NDT Level III</Link> holding final technical authority for procedure interpretation, personnel qualification, and disposition of results. That requirement doesn't reference software — it references a certified person.
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-700 mb-4">
                        This isn't a temporary gap that better models will eventually close — it's a structural feature of how the certification and code-compliance system works. A Level III's authority comes from documented experience, examination, and continuing accountability under a Written Practice or a third-party scheme like ACCP. A model, however well it performs on a benchmark data set, doesn't hold a certification, can't be held accountable under SNT-TC-1A, and doesn't carry legal responsibility for a disposition decision on a pressure vessel, a pipeline weld, or an aircraft fastener hole.
                    </p>
                    <p className="text-slate-700 mb-4">
                        What's realistic — and what the industry is actually converging on — is a human-in-the-loop model: AI flags candidate indications, a qualified inspector reviews every flagged region (and spot-checks unflagged regions), and the Level III retains sign-off authority on the final report. Nothing about that workflow removes the certified person from the chain; it changes where their attention gets spent first.
                    </p>
                </div>
            </section>

            {/* Limitations */}
            <section id="limitations" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">Realistic Limitations of AI-Assisted Defect Detection</h2>
                    <p className="text-slate-700 mb-6">
                        None of this works as cleanly as a product demo suggests. The limitations below are the reasons every credible implementation still requires full human review — not disclaimers tacked on for legal cover.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader><CardTitle className="text-lg">False Positives and False Negatives</CardTitle></CardHeader>
                            <CardContent className="text-slate-700 text-sm">
                                Every detection model trades off false positives (flagging clean material as a defect, which wastes reviewer time) against false negatives (missing a real indication, which is the failure mode nobody can accept in a safety-critical inspection). There is no published industry-standard accuracy figure that holds across geometries, materials, and vendors — performance is dataset- and application-specific, which is exactly why unflagged data still needs a human pass, not just the flagged frames.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="text-lg">Domain Shift</CardTitle></CardHeader>
                            <CardContent className="text-slate-700 text-sm">
                                A model trained on one weld geometry, material grade, scanner make, or noise profile often performs noticeably worse on a different one it wasn't trained on. Field conditions — new equipment, an unfamiliar joint configuration, a different probe — routinely fall outside a model's training distribution, and there's often no reliable way to know in advance how much accuracy degrades until a qualified reviewer checks the output.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="text-lg">No Settled Code-Acceptance Framework</CardTitle></CardHeader>
                            <CardContent className="text-slate-700 text-sm">
                                Standards bodies are actively discussing how AI-assisted acquisition and interpretation fit within existing personnel- and procedure-qualification requirements, but there isn't yet a single, finished, universally adopted framework the way there is for, say, PAUT procedure qualification. Until that lands, using AI output as anything more than an assist layer is a compliance risk, not just a technical one.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="text-lg">Explainability in a Regulated Context</CardTitle></CardHeader>
                            <CardContent className="text-slate-700 text-sm">
                                A Level III's disposition can be traced back to a documented procedure, an acceptance criterion, and a named, accountable person. A model's "why did it flag this" answer is often much harder to fully explain — which is a real problem when a disposition later needs to be defended in an audit, a client dispute, or a regulatory review.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Where it's heading */}
            <section id="where-its-heading" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">Where the Technology Is Heading</h2>
                    <p className="text-slate-700 mb-4">
                        The trajectory is toward AI becoming a more capable, better-validated triage and second-look layer — not toward autonomous disposition. Standards committees within ASME Section V and various API and industry working groups are actively working through how personnel-capability and procedure-qualification language should account for AI-assisted acquisition and interpretation. That kind of standards work moves deliberately, and for a safety-critical inspection discipline, that's appropriate rather than a shortcoming.
                    </p>
                    <p className="text-slate-700 mb-4">
                        In parallel, the broader shift toward digital, code-aligned data capture across the inspection industry — structured digital radiographs instead of film, encoded PAUT data instead of hand-drawn sketches, digital records instead of paper reports — is what makes AI-assisted triage possible in the first place. As more inspection data moves into structured digital formats with full traceability back to the procedure and equipment used, the practical case for a first-pass flagging layer gets stronger, even as the sign-off requirement stays exactly where it is: with a certified, accountable person.
                    </p>
                    <p className="text-slate-700">
                        The realistic near-term picture: AI as a productivity tool that helps a qualified inspector get through more data faster and focus attention where it's statistically most warranted — not a tool that removes the qualified inspector from the process.
                    </p>
                </div>
            </section>

            {/* Atlantis connection */}
            <section id="atlantis-stack" className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-6">How This Connects to Atlantis NDT</h2>
                    <p className="text-slate-700 mb-6">
                        Atlantis NDT doesn't market an in-house AI defect-detection product — this page exists to give an honest, sourced answer to what AI in NDT actually means today, because it's a question inspection teams are asking us directly. Where Atlantis NDT does have real, shipped capability that connects to this topic is the infrastructure that any AI-assisted (or fully manual) inspection workflow still needs to be audit-defensible:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-5">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Document Control for Procedures and Reports</h3>
                                <p className="text-slate-700 text-sm">
                                    Whether a defect call originated from a manual review or an AI-flagged frame that a Level III subsequently reviewed, the report still has to trace back to a current, approved procedure revision. The <Link to="/erp-modules/document-control-for-ndt-inspection-companies" className="text-primary underline underline-offset-2">Atlantis NDT ERP document-control module</Link> handles exactly that: revision-locked procedures, role-based access so field technicians only ever pull the current approved revision, an approval workflow requiring Level III or QA Manager sign-off before any revision goes live, and report numbering that permanently links every issued report to the exact procedure revision in effect at the time of inspection. That's the compliance backbone any inspection program — AI-assisted or not — actually runs on.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-5">
                            <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Training and Certification — the Part AI Doesn't Replace</h3>
                                <p className="text-slate-700 text-sm">
                                    The Level III sign-off requirement discussed throughout this page is a certification question, not a software question. <Link to="/training" className="text-primary underline underline-offset-2">Atlantis NDT training</Link> and our <Link to="/asnt-certification" className="text-primary underline underline-offset-2">ASNT Level I/II/III certification guide</Link> cover exactly the qualification pathway — training hours, on-the-job experience, exams — that produces the certified inspectors any AI-assisted workflow still depends on for final disposition.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-5">
                            <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Digital Twin — Where Findings Get Consolidated Over Time</h3>
                                <p className="text-slate-700 text-sm">
                                    Regardless of how a defect was first flagged, the resulting finding still needs a home in the asset's inspection history. The <Link to="/digital-twins" className="text-primary underline underline-offset-2">Atlantis NDT Digital Twin platform</Link> consolidates inspection indications — status, assignment, Level III sign-off chain — into the 3D asset model so defect growth can be trended across multiple inspection cycles, whatever review process produced the original finding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                                <p className="text-slate-700 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedGuidesBlock links={[
                {
                    "title": "ASNT NDT Certification Guide",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III path, exam, and the Level III authority AI can't replace",
                    "icon": "cert"
                },
                {
                    "title": "Document Control for NDT Inspection Companies",
                    "href": "/erp-modules/document-control-for-ndt-inspection-companies",
                    "description": "Revision-locked procedures, approval workflow, report traceability",
                    "icon": "erp"
                },
                {
                    "title": "NDT Digital Twins",
                    "href": "/digital-twins",
                    "description": "3D asset model with inspection-finding history and Level III sign-off chain",
                    "icon": "erp"
                },
                {
                    "title": "NDT Technical Procedure Development",
                    "href": "/consulting/ndt-technical-procedure-development",
                    "description": "Level III-authored procedures across UT, PAUT, TOFD, RT, MT, PT, ET, VT",
                    "icon": "consulting"
                },
                {
                    "title": "NDT Training Programs",
                    "href": "/training",
                    "description": "Level I/II/III training across all major NDT methods",
                    "icon": "cert"
                },
            ]} />

            <ContactDetails />
        </div>
    );
}
