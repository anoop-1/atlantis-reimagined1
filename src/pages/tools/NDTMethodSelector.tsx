import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  RotateCcw,
  Compass,
  Copy,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";

/* ─── Question and Recommendation Data ─── */
const WIZARD_QUESTIONS = [
  {
    id: "material",
    question: "What type of material are you inspecting?",
    options: [
      { value: "ferromagnetic", label: "Ferromagnetic Metal (steel, iron, nickel)" },
      { value: "non-ferromagnetic", label: "Non-Ferromagnetic Metal (aluminum, copper, brass)" },
      { value: "composite", label: "Composite (CFRP, GFRP, aramid)" },
      { value: "ceramic", label: "Ceramic or Glass" },
      { value: "mixed", label: "Mixed Materials or Unknown" },
    ],
  },
  {
    id: "defect",
    question: "What type of defect are you looking for?",
    options: [
      { value: "surface", label: "Surface Defects (cracks, corrosion, pitting)" },
      { value: "subsurface", label: "Subsurface Defects (near-surface flaws)" },
      { value: "volumetric", label: "Volumetric Defects (internal porosity, inclusions)" },
      { value: "thickness", label: "Thickness Measurement (wall thinning, corrosion)" },
      { value: "mixed", label: "Mixed or Unknown Defect Type" },
    ],
  },
  {
    id: "access",
    question: "What's your access situation?",
    options: [
      { value: "full", label: "Full Access (both sides available)" },
      { value: "single", label: "Single Side Access Only" },
      { value: "limited", label: "Limited Access (tight spaces, remote locations)" },
      { value: "confined", label: "Confined Space or Remote Inspection Needed" },
    ],
  },
  {
    id: "surface",
    question: "What is the surface condition?",
    options: [
      { value: "clean", label: "Clean and Smooth" },
      { value: "painted", label: "Painted or Coated" },
      { value: "rough", label: "Rough or Corroded" },
      { value: "contaminated", label: "Contaminated (rust scale, marine growth)" },
    ],
  },
  {
    id: "standard",
    question: "Which industry standard applies?",
    options: [
      { value: "asme", label: "ASME (Boiler & Pressure Vessel Code)" },
      { value: "api", label: "API (Petroleum/Refining Industry)" },
      { value: "aws", label: "AWS (Welding)" },
      { value: "aerospace", label: "Aerospace (NADCAP, BAC standards)" },
      { value: "general", label: "General Quality Assurance" },
    ],
  },
];

/* ─── Method Recommendations Database ─── */
const METHOD_RECOMMENDATIONS: Record<string, Array<{
  method: string;
  abbreviation: string;
  score: number;
  strengths: string[];
  limitations: string[];
  costRelative: string;
  timeToResult: string;
  standards: string[];
}>> = {
  "ferromagnetic-surface-full-clean-asme": [
    {
      method: "Magnetic Particle Testing",
      abbreviation: "MT",
      score: 95,
      strengths: ["Excellent surface defect detection", "High sensitivity to cracks", "Rapid results", "No surface prep required", "ASME approved"],
      limitations: ["Surface defects only", "Ferromagnetic materials only", "Magnetic field demagnetization concerns"],
      costRelative: "$",
      timeToResult: "Fast (minutes)",
      standards: ["ASME V", "ASTM E1309"],
    },
    {
      method: "Liquid Penetrant Testing",
      abbreviation: "PT",
      score: 85,
      strengths: ["Surface cracks and porosity detection", "Works on any non-porous material", "No demagnetization", "ASME approved"],
      limitations: ["Surface defects only", "Requires thorough cleaning", "Environmental concerns"],
      costRelative: "$",
      timeToResult: "Moderate (hours)",
      standards: ["ASME V", "ASTM E1417"],
    },
  ],
  "ferromagnetic-volumetric-single-clean-api": [
    {
      method: "Ultrasonic Testing",
      abbreviation: "UT",
      score: 95,
      strengths: ["Volumetric defect detection", "Internal flaw sizing", "Thickness measurement", "API 510/570 compliant", "Real-time results"],
      limitations: ["Requires couplant", "Skill dependent", "Surface roughness affects results"],
      costRelative: "$$",
      timeToResult: "Fast (real-time)",
      standards: ["API 510", "ASME V", "ISO 5577"],
    },
    {
      method: "Radiographic Testing",
      abbreviation: "RT",
      score: 82,
      strengths: ["Excellent internal defect detection", "Permanent record", "Good for inclusions/porosity"],
      limitations: ["Radiation safety concerns", "Two-way access often needed", "Slow process", "Expensive"],
      costRelative: "$$$",
      timeToResult: "Slow (hours to days)",
      standards: ["API 510", "ASME V"],
    },
  ],
  "non-ferromagnetic-thickness-single-painted-api": [
    {
      method: "Ultrasonic Testing",
      abbreviation: "UT",
      score: 90,
      strengths: ["Works through paint/coatings", "Accurate thickness measurement", "API approved", "Quick results"],
      limitations: ["Thick coatings reduce accuracy", "Surface prep important"],
      costRelative: "$$",
      timeToResult: "Fast",
      standards: ["API 570", "ISO 5577"],
    },
    {
      method: "Eddy Current Testing",
      abbreviation: "ET",
      score: 75,
      strengths: ["Works through thin coatings", "Fast scanning", "No couplant needed"],
      limitations: ["Limited penetration depth", "Material conductivity dependent"],
      costRelative: "$$",
      timeToResult: "Very fast",
      standards: ["ASTM E2375"],
    },
  ],
  "composite-volumetric-full-clean-aerospace": [
    {
      method: "Ultrasonic Testing",
      abbreviation: "UT",
      score: 95,
      strengths: ["Detects delaminations", "Disbonds, voids", "NADCAP approved", "Non-destructive"],
      limitations: ["High attenuation in some composites", "Operator skill critical"],
      costRelative: "$$",
      timeToResult: "Fast",
      standards: ["NADCAP", "BAC 5555", "AS6075"],
    },
    {
      method: "Thermography",
      abbreviation: "IRT",
      score: 80,
      strengths: ["Detects disbonds/delaminations", "Large area coverage", "Non-contact"],
      limitations: ["Subsurface depth limited", "Environmental sensitivity"],
      costRelative: "$$$",
      timeToResult: "Moderate",
      standards: ["Aerospace standards"],
    },
  ],
  "default": [
    {
      method: "Visual Testing",
      abbreviation: "VT",
      score: 50,
      strengths: ["Always applicable", "No equipment needed", "Baseline for other methods"],
      limitations: ["Surface defects only", "Operator dependent", "Limited detection capability"],
      costRelative: "$",
      timeToResult: "Very fast",
      standards: ["ASME V", "API", "General"],
    },
  ],
};

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NDT Method Selector Wizard",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/ndt-method-selector",
  description:
    "Interactive wizard that recommends the best NDT method based on material type, defect type, access conditions, surface condition, and industry standards.",
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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ─── Get recommendations based on answers ─── */
  const recommendations = useMemo(() => {
    if (Object.keys(answers).length < WIZARD_QUESTIONS.length) {
      return [];
    }

    const key = [
      answers.material,
      answers.defect,
      answers.access,
      answers.surface,
      answers.standard,
    ]
      .join("-")
      .toLowerCase();

    return (
      METHOD_RECOMMENDATIONS[key] ||
      METHOD_RECOMMENDATIONS["default"] ||
      []
    );
  }, [answers]);

  /* ─── Handlers ─── */
  const handleSelect = useCallback((value: string) => {
    const question = WIZARD_QUESTIONS[currentStep];
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep < WIZARD_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  }, [currentStep]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleReset = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  }, []);

  const currentAnswer = answers[WIZARD_QUESTIONS[currentStep]?.id];
  const isAnswered = currentAnswer !== undefined;
  const isCompleted = Object.keys(answers).length === WIZARD_QUESTIONS.length;

  const copyResults = () => {
    const text =
      `NDT Method Recommendation\n\n` +
      `Material: ${answers.material}\n` +
      `Defect Type: ${answers.defect}\n` +
      `Access: ${answers.access}\n` +
      `Surface: ${answers.surface}\n` +
      `Standard: ${answers.standard}\n\n` +
      `Recommended Methods:\n` +
      recommendations
        .map(
          (r, i) =>
            `${i + 1}. ${r.method} (${r.abbreviation}) - Score: ${r.score}%\n` +
            `   Strengths: ${r.strengths.join(", ")}`
        )
        .join("\n\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="NDT Method Selector - Interactive Inspection Method Wizard"
        description="Find the best NDT method for your inspection based on material type, defect type, access, surface condition, and industry standards."
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Tools", path: "/tools" },
          { label: "NDT Method Selector" },
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                NDT Method Selector
              </h1>
            </div>
            <p className="text-xl text-gray-600 mt-3">
              Interactive wizard to find the best inspection method for your application
            </p>
          </motion.div>

          {!showResults ? (
            <>
              {/* Progress Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Question {currentStep + 1} of {WIZARD_QUESTIONS.length}
                  </h2>
                  <span className="text-sm text-gray-600">
                    {Object.keys(answers).length} answered
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / WIZARD_QUESTIONS.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Question Card */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {WIZARD_QUESTIONS[currentStep].question}
                </h2>

                {/* Option Buttons */}
                <div className="space-y-3 mb-8">
                  {WIZARD_QUESTIONS[currentStep].options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        currentAnswer === option.value
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 bg-gray-50 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            currentAnswer === option.value
                              ? "border-blue-600 bg-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {currentAnswer === option.value && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium text-gray-900">
                          {option.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isCompleted && currentStep === WIZARD_QUESTIONS.length - 1
                      ? "View Results"
                      : "Next"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 mb-12"
              >
                {/* Summary */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Assessment Summary
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {WIZARD_QUESTIONS.map((q) => (
                      <div
                        key={q.id}
                        className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                      >
                        <p className="text-xs text-gray-600 font-semibold uppercase mb-2">
                          {q.question.split("?")[0]}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {q.options.find((o) => o.value === answers[q.id])
                            ?.label ||
                            "Not selected"}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={copyResults}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          Copy Results
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Start Over
                    </button>
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-blue-600" />
                        Recommended Methods
                      </h2>

                      <div className="space-y-6">
                        {recommendations.map((method, idx) => (
                          <motion.div
                            key={method.abbreviation}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-l-4 border-blue-600 pl-6 py-4"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {method.method}{" "}
                                  <span className="text-blue-600">
                                    ({method.abbreviation})
                                  </span>
                                </h3>
                                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                                  <span>
                                    <strong>Cost:</strong> {method.costRelative}
                                  </span>
                                  <span>
                                    <strong>Speed:</strong> {method.timeToResult}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-blue-600">
                                  {method.score}%
                                </div>
                                <p className="text-xs text-gray-600 uppercase">
                                  Match Score
                                </p>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                              <div>
                                <p className="text-sm font-semibold text-gray-700 mb-2">
                                  Strengths:
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {method.strengths.map((s) => (
                                    <li key={s}>• {s}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-700 mb-2">
                                  Limitations:
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {method.limitations.map((l) => (
                                    <li key={l}>• {l}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {method.standards.length > 0 && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-xs font-semibold text-gray-700 uppercase mb-1">
                                  Standards:
                                </p>
                                <p className="text-sm text-gray-600">
                                  {method.standards.join(", ")}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </>
          )}

          {/* Educational Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12 mb-16"
          >
            {/* Method Selection Criteria */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                NDT Method Selection Criteria
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Selecting the appropriate NDT method is a critical decision that requires careful consideration of multiple factors. No single method is suitable for all applications, and the choice depends on the specific inspection objective, material properties, component geometry, accessibility, applicable standards, and economic constraints.
                </p>
                <p>
                  <strong>Material Type:</strong> The composition and magnetic properties of the material significantly influence which methods are applicable. Ferromagnetic materials (steel, iron, nickel-based alloys) are compatible with magnetic particle testing and electromagnetic methods. Non-ferromagnetic metals (aluminum, copper, titanium) require alternative methods such as ultrasonic testing, eddy current testing, or liquid penetrant testing. Composite materials may require specialized techniques such as ultrasonic testing or thermography.
                </p>
                <p>
                  <strong>Defect Type:</strong> Different NDT methods have varying capabilities for detecting different types of defects. Surface defects such as cracks and corrosion pitting are best detected by surface-sensitive methods like magnetic particle testing and liquid penetrant testing. Subsurface defects require volumetric methods such as ultrasonic testing or radiographic testing. Thickness measurement and wall loss detection are optimized by ultrasonic testing and radiographic testing. Method selection should prioritize sensitivity to the specific defect type being sought.
                </p>
                <p>
                  <strong>Access and Geometry:</strong> Component geometry and physical access constraints dramatically limit method choices. Ultrasonic testing requires access from one side and direct surface contact. Radiographic testing generally requires two-way access. Magnetic particle testing and liquid penetrant testing require surface accessibility. Eddy current testing requires close probe-to-surface spacing. Thermography requires optical line-of-sight. The decision between single-sided and two-sided access often eliminates several methods from consideration.
                </p>
                <p>
                  <strong>Surface Condition:</strong> The condition of the surface to be inspected affects method selection and reliability. Ultrasonic testing through paint or coatings is challenging and may require removal. Eddy current testing works through thin nonconductive coatings but is limited with thick coatings. Magnetic particle testing requires clean surface close to bare metal. Liquid penetrant testing requires thorough cleaning and drying. Surface roughness from corrosion or mechanical damage may degrade signal quality for ultrasonic and eddy current methods.
                </p>
                <p>
                  <strong>Industry Standards and Specifications:</strong> Many industries and standards organizations specify or require specific NDT methods for particular applications. ASME Boiler and Pressure Vessel Code mandates specific methods and procedures for different components. API 510 and API 570 specify inspection intervals and methods for pressure vessels and piping. AWS standards govern weld inspection. Aerospace standards require NADCAP-qualified procedures. The applicable standards often dictate or strongly constrain method selection.
                </p>
              </div>
            </div>

            {/* Comprehensive Method Comparison */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comprehensive NDT Method Comparison Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Method</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Surface</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Volumetric</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Cost</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Speed</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Materials</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Ultrasonic (UT)", surface: "Yes", vol: "Excellent", cost: "$$", speed: "Fast", materials: "Most metals, composites" },
                      { name: "Radiographic (RT)", surface: "Limited", vol: "Excellent", cost: "$$$", speed: "Slow", materials: "Most materials" },
                      { name: "Magnetic Particle (MT)", surface: "Excellent", vol: "Limited", cost: "$", speed: "Fast", materials: "Ferromagnetic only" },
                      { name: "Liquid Penetrant (PT)", surface: "Excellent", vol: "No", cost: "$", speed: "Moderate", materials: "Non-porous materials" },
                      { name: "Eddy Current (ET)", surface: "Excellent", vol: "Limited", cost: "$$", speed: "Very fast", materials: "Conductive materials" },
                      { name: "Visual (VT)", surface: "Good", vol: "No", cost: "$", speed: "Very fast", materials: "Any material" },
                      { name: "Thermography (IRT)", surface: "Good", vol: "Limited", cost: "$$$", speed: "Fast", materials: "Most materials" },
                    ].map((method, idx) => (
                      <tr
                        key={method.name}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-medium text-gray-900">{method.name}</td>
                        <td className="text-center py-3 px-4 text-gray-600">{method.surface}</td>
                        <td className="text-center py-3 px-4 text-gray-600">{method.vol}</td>
                        <td className="text-center py-3 px-4 text-gray-600">{method.cost}</td>
                        <td className="text-center py-3 px-4 text-gray-600">{method.speed}</td>
                        <td className="py-3 px-4 text-gray-600">{method.materials}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Method-Specific Guidance */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                When to Use Each NDT Method
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ultrasonic Testing (UT)
                  </h3>
                  <p>
                    UT is the method of choice for volumetric inspection of metallic components, particularly for detecting internal defects, thickness measurement, and weld evaluation. It provides real-time results, excellent penetration capability, and high detection sensitivity. UT is required or preferred by API 510, API 570, and ASME codes for pressure vessel and piping inspection. Use UT when internal defects must be detected in metallic materials with single-sided access.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Radiographic Testing (RT)
                  </h3>
                  <p>
                    RT provides excellent volumetric defect detection and creates a permanent record of the inspection. It is particularly effective for detecting inclusions, porosity, and density variations. However, RT involves radiation hazards, requires two-way access for many applications, and has slower turnaround time. Use RT when volumetric inspection is critical and permanent documentation is required, or when defect characterization requires radiographic evidence.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Magnetic Particle Testing (MT)
                  </h3>
                  <p>
                    MT is the primary method for rapid surface defect detection in ferromagnetic materials. It offers excellent surface crack sensitivity, fast results, and low cost. MT is ideal for in-service inspection of steel components, weld inspection, and quality control. Use MT for surface defect detection when materials are ferromagnetic and rapid results are needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Liquid Penetrant Testing (PT)
                  </h3>
                  <p>
                    PT detects surface-breaking defects in non-porous materials and works on any material composition. It is particularly valuable for inspection of non-magnetic materials and complex geometries. PT provides excellent sensitivity to tight cracks and surface porosity. Use PT for surface defect detection in non-ferromagnetic materials or when magnetic methods are not applicable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Eddy Current Testing (ET)
                  </h3>
                  <p>
                    ET is ideal for automated scanning of conductive materials and provides rapid surface defect detection. It works through thin nonconductive coatings and can measure coating thickness. ET is particularly valuable for tubing inspection, fastener inspection, and automated production quality control. Use ET when rapid automated scanning of conductive materials is needed.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Expert NDT Inspection Services?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              Our certified NDT professionals specialize in all major inspection methods and can recommend the optimal approach for your specific application and industry requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Inspection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.section>
        </div>
      </main>

      <ContactDetails />
    </>
  );
}
