import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Share2,
  RotateCcw,
  Compass,
  Copy,
  Check,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  selectorSteps,
  methodScores,
  methodInfo,
} from "@/data/ndt-selector-data";

/* ─── Radar Criteria Labels (one per step) ─── */
const radarCriteria = [
  "Material",
  "Defect Type",
  "Access",
  "Code",
  "Priority",
  "Volume",
];

const METHOD_KEYS = Object.keys(methodInfo);
const METHOD_COLORS: Record<string, string> = {
  "ultrasonic-testing": "#2563eb",
  "radiographic-testing": "#dc2626",
  "magnetic-particle-testing": "#059669",
  "penetrant-testing": "#d97706",
  "eddy-current-testing": "#7c3aed",
  "visual-testing": "#0891b2",
};

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NDT Method Selector Tool",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/ndt-method-selector",
  description:
    "Interactive 6-step quiz that recommends the best NDT method for your inspection scenario based on material, defect type, access, governing code, priority, and volume.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "Atlantis NDT",
    url: "https://atlantisndt.com",
  },
};

export default function NDTMethodSelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ─── Restore answers from URL params on mount ─── */
  useEffect(() => {
    const restored: Record<string, string> = {};
    let count = 0;
    selectorSteps.forEach((step, i) => {
      const val = searchParams.get(`s${i + 1}`);
      if (val && step.options.some((o) => o.value === val)) {
        restored[step.id] = val;
        count++;
      }
    });
    if (count > 0) {
      setAnswers(restored);
      if (count === selectorSteps.length) {
        setShowResults(true);
      } else {
        setCurrentStep(count);
      }
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Score Calculation ─── */
  const results = useMemo(() => {
    if (Object.keys(answers).length < selectorSteps.length) return [];

    return METHOD_KEYS.map((methodKey) => {
      const scores = methodScores[methodKey];
      if (!scores) return { key: methodKey, total: 0, perStep: [] as number[] };

      const perStep = selectorSteps.map((step) => {
        const answer = answers[step.id];
        return scores[answer] ?? 0;
      });
      const total = perStep.reduce((s, v) => s + v, 0);
      return { key: methodKey, total, perStep };
    })
      .sort((a, b) => b.total - a.total);
  }, [answers]);

  const maxScore = useMemo(() => {
    if (results.length === 0) return 1;
    // Theoretical max: 6 steps * 95 (max in scoring table)
    return selectorSteps.length * 95;
  }, [results]);

  /* ─── Radar Chart Data ─── */
  const radarData = useMemo(() => {
    if (results.length === 0) return [];
    const top3 = results.slice(0, 3);
    return radarCriteria.map((label, i) => {
      const entry: Record<string, string | number> = { criterion: label };
      top3.forEach((r) => {
        entry[methodInfo[r.key]?.name ?? r.key] = r.perStep[i];
      });
      return entry;
    });
  }, [results]);

  /* ─── Handlers ─── */
  const handleSelect = useCallback(
    (value: string) => {
      const step = selectorSteps[currentStep];
      setAnswers((prev) => ({ ...prev, [step.id]: value }));
    },
    [currentStep]
  );

  const handleNext = useCallback(() => {
    if (currentStep < selectorSteps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Encode answers into URL
      const params = new URLSearchParams();
      selectorSteps.forEach((step, i) => {
        if (answers[step.id]) params.set(`s${i + 1}`, answers[step.id]);
      });
      setSearchParams(params, { replace: true });
      setShowResults(true);
    }
  }, [currentStep, answers, setSearchParams]);

  const handleBack = useCallback(() => {
    if (showResults) {
      setShowResults(false);
      setCurrentStep(selectorSteps.length - 1);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }, [showResults, currentStep]);

  const handleReset = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const handleShare = useCallback(async () => {
    const params = new URLSearchParams();
    selectorSteps.forEach((step, i) => {
      if (answers[step.id]) params.set(`s${i + 1}`, answers[step.id]);
    });
    const url = `${window.location.origin}/tools/ndt-method-selector?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      prompt("Copy this URL to share your results:", url);
    }
  }, [answers]);

  const step = selectorSteps[currentStep];
  const selectedValue = step ? answers[step.id] : undefined;
  const progress = showResults
    ? 100
    : ((currentStep + (selectedValue ? 1 : 0)) / selectorSteps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="NDT Method Selector Tool | Find the Right Testing Method | Atlantis NDT"
        description="Interactive 6-step quiz to find the best NDT method for your inspection. Answer questions about material, defect type, access, code requirements, and priorities to get a ranked recommendation with radar chart visualization."
        keywords="NDT method selector, NDT method comparison, choose NDT method, ultrasonic testing vs radiographic testing, NDT decision tool, inspection method selection"
        canonical="https://atlantisndt.com/tools/ndt-method-selector"
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "NDT Method Selector" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Compass className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              NDT Method Selector
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Answer 6 questions and we will recommend the best NDT method for
            your inspection scenario
          </motion.p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="container mx-auto max-w-6xl px-6 pt-8">
        <div className="bg-white rounded-xl shadow border border-slate-100 p-4">
          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span>
              {showResults
                ? "Results"
                : `Step ${currentStep + 1} of ${selectorSteps.length}`}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div
              className="bg-[#004aad] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Step indicators */}
          <div className="flex justify-between mt-3">
            {selectorSteps.map((s, i) => (
              <div
                key={s.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i < currentStep || showResults
                    ? "bg-[#004aad] text-white"
                    : i === currentStep && !showResults
                    ? "bg-blue-100 text-[#004aad] ring-2 ring-[#004aad]"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {i < currentStep || showResults ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Area */}
      {!showResults && step && (
        <motion.section
          key={step.id}
          className="container mx-auto max-w-6xl px-6 py-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#004aad" }}
            >
              {step.question}
            </h2>
            {/* description for legacy data that may not have it */}
            <p className="text-slate-600 mb-8">
              Select the option that best matches your inspection scenario.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {step.options.map((option) => {
                const isSelected = selectedValue === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`text-left p-5 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-[#004aad] bg-blue-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 mt-0.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-[#004aad] bg-[#004aad]"
                            : "border-slate-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <span
                          className={`font-semibold block ${
                            isSelected ? "text-[#004aad]" : "text-slate-800"
                          }`}
                        >
                          {option.label}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-slate-600 hover:text-[#004aad] disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedValue}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold bg-[#004aad] text-white hover:bg-blue-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                {currentStep === selectorSteps.length - 1
                  ? "See Results"
                  : "Next"}{" "}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Results */}
      {showResults && results.length > 0 && (
        <motion.section
          className="container mx-auto max-w-6xl px-6 py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Action Bar */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-[#004aad] transition text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Edit Answers
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-[#004aad] transition text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" /> Start Over
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#004aad] text-white hover:bg-blue-800 transition text-sm font-medium ml-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" /> Share Results
                </>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Ranked List */}
            <div className="lg:col-span-3 space-y-4">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#004aad" }}
              >
                Recommended NDT Methods
              </h2>

              {results.map((r, i) => {
                const info = methodInfo[r.key];
                if (!info) return null;
                const pct = Math.round((r.total / maxScore) * 100);
                const isTop = i === 0;
                return (
                  <motion.div
                    key={r.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className={`bg-white rounded-xl shadow border p-6 ${
                      isTop
                        ? "border-[#004aad] ring-2 ring-[#004aad]/20"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            isTop
                              ? "bg-[#004aad] text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          #{i + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {info.name}
                          </h3>
                          {isTop && (
                            <span className="text-xs font-semibold text-[#004aad] bg-blue-50 px-2 py-0.5 rounded-full">
                              Best Match
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: METHOD_COLORS[r.key] || "#004aad" }}
                      >
                        {pct}%
                      </span>
                    </div>

                    {/* Confidence Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-3 mb-4">
                      <motion.div
                        className="h-3 rounded-full"
                        style={{
                          backgroundColor:
                            METHOD_COLORS[r.key] || "#004aad",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {info.description}
                    </p>

                    <Link
                      to={info.link}
                      className="inline-flex items-center gap-1 text-[#004aad] font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn more about {info.name.split("(")[0].trim()}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Radar Chart */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24">
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#004aad" }}
                >
                  Performance Comparison (Top 3)
                </h3>
                <ResponsiveContainer width="100%" height={340}>
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={radarData}
                  >
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis
                      dataKey="criterion"
                      tick={{ fill: "#64748b", fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                    />
                    {results.slice(0, 3).map((r) => {
                      const info = methodInfo[r.key];
                      return (
                        <Radar
                          key={r.key}
                          name={info?.name ?? r.key}
                          dataKey={info?.name ?? r.key}
                          stroke={METHOD_COLORS[r.key] || "#004aad"}
                          fill={METHOD_COLORS[r.key] || "#004aad"}
                          fillOpacity={0.15}
                          strokeWidth={2}
                        />
                      );
                    })}
                    <Legend
                      wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>

                {/* Your Selections Summary */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <h4 className="font-semibold text-slate-700 text-sm mb-3">
                    Your Selections
                  </h4>
                  <div className="space-y-2">
                    {selectorSteps.map((s) => {
                      const opt = s.options.find(
                        (o) => o.value === answers[s.id]
                      );
                      return (
                        <div
                          key={s.id}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-[#004aad] mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">
                            <strong className="text-slate-800">
                              {s.question.replace("?", "")}:
                            </strong>{" "}
                            {opt?.label ?? answers[s.id]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Copy URL */}
                <button
                  onClick={handleShare}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-[#004aad] transition text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" /> Link
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy Shareable Link
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-8">
            <h3 className="font-bold text-slate-900 mb-2">
              Need Expert Help Choosing?
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm">
              This tool provides general guidance based on common inspection
              scenarios. For critical inspections, code-specific requirements,
              or complex applications, consult with an ASNT Level III
              professional.{" "}
              <Link
                to="/contact"
                className="text-[#004aad] font-semibold hover:underline"
              >
                Contact our experts
              </Link>{" "}
              for a free consultation.
            </p>
          </div>
        </motion.section>
      )}

      <ContactDetails />
    </div>
  );
}
