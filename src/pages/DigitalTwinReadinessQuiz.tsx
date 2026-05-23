import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, RefreshCcw } from "lucide-react";

type Answer = { label: string; score: number };
type Question = { id: string; text: string; answers: Answer[] };

const questions: Question[] = [
    {
        id: "q1",
        text: "How digital is your asset inventory?",
        answers: [
            { label: "Paper drawings + spreadsheets only", score: 0 },
            { label: "Asset register in a CMMS, no 3D", score: 1 },
            { label: "CMMS + partial 3D for some assets", score: 2 },
            { label: "Full 3D model library for all critical assets", score: 3 }
        ]
    },
    {
        id: "q2",
        text: "What is your permanent sensor coverage?",
        answers: [
            { label: "No permanent NDT sensors", score: 0 },
            { label: "A handful of PMUTs on known bad actors", score: 1 },
            { label: "PMUT coverage across most critical circuits", score: 2 },
            { label: "PMUT + AE/ECA arrays + strain across critical assets", score: 3 }
        ]
    },
    {
        id: "q3",
        text: "Do you have a data-integration layer between inspection and DCS/ERP?",
        answers: [
            { label: "No — data lives in silos", score: 0 },
            { label: "Ad-hoc exports, no automation", score: 1 },
            { label: "Scheduled batch jobs between CMMS and inspection tools", score: 2 },
            { label: "Real-time APIs between inspection, DCS, CMMS, ERP", score: 3 }
        ]
    },
    {
        id: "q4",
        text: "Is your RBI program active?",
        answers: [
            { label: "No formal RBI", score: 0 },
            { label: "Semi-quantitative, reviewed every 5 years", score: 1 },
            { label: "Quantitative API 581, reviewed every 2-3 years", score: 2 },
            { label: "Quantitative API 581, re-scored continuously from live data", score: 3 }
        ]
    },
    {
        id: "q5",
        text: "Do you have an ASNT Level III on staff?",
        answers: [
            { label: "No — outsourced only", score: 0 },
            { label: "Contracted Level III on retainer", score: 1 },
            { label: "One Level III on staff across all methods we use", score: 2 },
            { label: "Multiple Level IIIs across UT/RT/MT/PT/ET/VT", score: 3 }
        ]
    },
    {
        id: "q6",
        text: "How aligned is your program with API 580/581?",
        answers: [
            { label: "Not aligned", score: 0 },
            { label: "Aware, partially aligned on paper", score: 1 },
            { label: "Formally adopted, audited internally", score: 2 },
            { label: "Formally adopted, third-party audited, benchmarked", score: 3 }
        ]
    },
    {
        id: "q7",
        text: "Do you use predictive analytics today?",
        answers: [
            { label: "No — reactive only", score: 0 },
            { label: "Basic trend extrapolation in Excel", score: 1 },
            { label: "Statistical forecasting in a dedicated tool", score: 2 },
            { label: "Physics + ML models tuned against historical data", score: 3 }
        ]
    },
    {
        id: "q8",
        text: "What cloud platform will your twin live on?",
        answers: [
            { label: "No plan — on-prem only", score: 0 },
            { label: "Some cloud adoption in IT, not OT", score: 1 },
            { label: "Approved Azure/AWS/GCP footprint with OT segmentation", score: 2 },
            { label: "Mature cloud + OT hybrid with IEC 62443 controls", score: 3 }
        ]
    },
    {
        id: "q9",
        text: "Do inspectors have mobile field tools?",
        answers: [
            { label: "Paper forms only", score: 0 },
            { label: "Generic tablets, manual entry", score: 1 },
            { label: "Purpose-built inspection apps with sync", score: 2 },
            { label: "Inspection apps + AR overlay + live twin read/write", score: 3 }
        ]
    },
    {
        id: "q10",
        text: "How much historical inspection data is digitised?",
        answers: [
            { label: "Almost none — paper archives", score: 0 },
            { label: "Last 2-3 turnarounds scanned as PDFs", score: 1 },
            { label: "Structured digital records for the last 5-10 years", score: 2 },
            { label: "Full digital record, georeferenced, back 15+ years", score: 3 }
        ]
    }
];

const buckets = [
    { name: "Crawl", range: "0-10", emoji: "Crawl",
      verdict: "You are pre-twin. Skip the digital-twin pitch and start with a 3D model + structured inspection record for 5 critical assets. Prove the asset-register hygiene and data-quality foundations first.",
      action: "Start with /digital-twins and the 2026 pillar guide." },
    { name: "Walk", range: "11-18", emoji: "Walk",
      verdict: "You're ready for a static twin (Stage 1). Your asset register and RBI program can support one. Don't jump to predictive — the data quality isn't there yet. 12-18 months at Stage 1 pays back and sets you up for Stage 2.",
      action: "Run the ROI calculator to build the static-twin business case." },
    { name: "Run", range: "19-24", emoji: "Run",
      verdict: "Operational twin (Stage 2) is the right target. You have the Level III coverage, the RBI discipline, and enough sensor presence to extend coverage meaningfully. Expect 24 months to full-value.",
      action: "Compare Stage-2-capable vendors on the vendor matrix." },
    { name: "Fly", range: "25-30", emoji: "Fly",
      verdict: "Predictive twin (Stage 3) is within reach. You have the digital backbone, the analytics capability, and the governance. Your differentiation now is damage-mechanism model quality — not the platform.",
      action: "Book a Level III strategy session to scope a Stage 3 pilot." }
];

export default function DigitalTwinReadinessQuiz() {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [submitted, setSubmitted] = useState(false);

    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const answered = Object.keys(answers).length;
    const allAnswered = answered === questions.length;

    const bucket = (() => {
        if (total <= 10) return buckets[0];
        if (total <= 18) return buckets[1];
        if (total <= 24) return buckets[2];
        return buckets[3];
    })();

    const reset = () => { setAnswers({}); setSubmitted(false); };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        "name": "Digital Twin Readiness Quiz",
        "about": "NDT digital twin maturity assessment",
        "description": "10-question self-assessment that scores your digital-twin readiness on a 0-30 scale across 4 maturity bands (Crawl / Walk / Run / Fly)."
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin Readiness Quiz 2026 — Free 10-Question NDT Score"
                description="Free 10-question quiz scores your NDT digital twin readiness 0-30 across 4 maturity bands. Get a tailored next-step plan in 3 minutes. Take the free quiz."
                canonical="https://atlantisndt.com/digital-twin-readiness-quiz"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><ClipboardCheck className="w-5 h-5" /><span>Self-Assessment · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin Readiness Quiz</h1>
                    <p className="text-xl text-blue-100">
                        Ten questions. Scored 0-30. Maps to four maturity bands (Crawl / Walk / Run / Fly), each with a
                        tailored next step. No email required, no vendor pitch — straight output.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="space-y-6">
                        {questions.map((q, qi) => (
                            <Card key={q.id}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{qi + 1}. {q.text}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {q.answers.map(a => (
                                        <label key={a.label} className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition ${answers[q.id] === a.score ? "border-[#004aad] bg-blue-50" : "border-slate-200 hover:border-slate-400"}`}>
                                            <input
                                                type="radio"
                                                name={q.id}
                                                checked={answers[q.id] === a.score}
                                                onChange={() => setAnswers({ ...answers, [q.id]: a.score })}
                                                className="text-[#004aad]"
                                            />
                                            <span className="text-sm text-slate-800">{a.label}</span>
                                        </label>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}

                        <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                                Answered {answered} / {questions.length}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={reset} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"><RefreshCcw className="w-4 h-4" />Reset</button>
                                <button
                                    onClick={() => setSubmitted(true)}
                                    disabled={!allAnswered}
                                    className="bg-[#004aad] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Score Me →
                                </button>
                            </div>
                        </div>

                        {submitted && allAnswered && (
                            <Card className="border-l-4 border-[#004aad] mt-8">
                                <CardHeader>
                                    <div className="text-sm text-slate-500 mb-1">Your score</div>
                                    <CardTitle className="text-4xl">{total} / 30 · <span className="text-[#004aad]">{bucket.name}</span></CardTitle>
                                    <div className="text-sm text-slate-500">{bucket.range} range</div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-700">{bucket.verdict}</p>
                                    <p className="text-sm text-slate-600"><strong>Recommended next step:</strong> {bucket.action}</p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <Link to="/digital-twins-ndt-guide-2026" className="text-[#004aad] font-semibold hover:underline">Pillar guide</Link>
                                        <Link to="/digital-twin-roi-calculator" className="text-[#004aad] font-semibold hover:underline">ROI calculator</Link>
                                        <Link to="/digital-twin-vendor-comparison" className="text-[#004aad] font-semibold hover:underline">Vendor matrix</Link>
                                        <Link to="/contact" className="text-[#004aad] font-semibold hover:underline">Book strategy session</Link>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
