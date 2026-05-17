import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Copy,
  Check,
  TrendingDown,
  AlertTriangle,
  Info,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* ─── Types ─── */
interface CalculatorInputs {
  originalThickness: number;
  currentThickness: number;
  timeInService: number;
  minimumAcceptableThickness?: number;
}

interface CorrosionResult {
  corrosionRate: number;
  totalLoss: number;
  remainingThickness: number;
  severity: "low" | "moderate" | "high" | "critical";
  yearsToMinimum: number;
  nextInspectionDate: string;
  projectedThickness5Year: number;
  projectedThickness10Year: number;
}

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Corrosion Rate Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/corrosion-rate-calculator",
  description:
    "Calculate corrosion rate, remaining life, and fitness-for-service based on original and current thickness measurements.",
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

export default function CorrosionRateCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    originalThickness: 12.7,
    currentThickness: 11.2,
    timeInService: 5,
    minimumAcceptableThickness: 6.35,
  });
  const [copied, setCopied] = useState(false);

  /* ─── Update handlers ─── */
  const setField = useCallback(
    (field: keyof CalculatorInputs, value: number | string) => {
      setInputs((prev) => ({
        ...prev,
        [field]: typeof value === "string" ? parseFloat(value) || 0 : value,
      }));
    },
    []
  );

  /* ─── Core Calculation ─── */
  const result = useMemo((): CorrosionResult => {
    const totalLoss = inputs.originalThickness - inputs.currentThickness;
    const corrosionRate = inputs.timeInService > 0 ? totalLoss / inputs.timeInService : 0;

    const minimumThickness = inputs.minimumAcceptableThickness || 0;
    const remainingThickness = inputs.currentThickness - minimumThickness;

    let yearsToMinimum = Infinity;
    if (corrosionRate > 0 && remainingThickness > 0) {
      yearsToMinimum = remainingThickness / corrosionRate;
    } else if (corrosionRate > 0 && remainingThickness <= 0) {
      yearsToMinimum = 0;
    }

    // Determine severity
    let severity: "low" | "moderate" | "high" | "critical" = "low";
    if (corrosionRate > 2.0) severity = "critical";
    else if (corrosionRate > 1.0) severity = "high";
    else if (corrosionRate > 0.3) severity = "moderate";

    // Next inspection date (typically 1 year or sooner if high corrosion)
    const nextInspection = new Date();
    const monthsToInspect = corrosionRate > 1.0 ? 6 : 12;
    nextInspection.setMonth(nextInspection.getMonth() + monthsToInspect);

    // Projections
    const projectedThickness5Year = Math.max(
      0,
      inputs.currentThickness - corrosionRate * 5
    );
    const projectedThickness10Year = Math.max(
      0,
      inputs.currentThickness - corrosionRate * 10
    );

    return {
      corrosionRate: Math.abs(corrosionRate),
      totalLoss,
      remainingThickness: Math.max(0, remainingThickness),
      severity,
      yearsToMinimum,
      nextInspectionDate: nextInspection.toLocaleDateString(),
      projectedThickness5Year,
      projectedThickness10Year,
    };
  }, [inputs]);

  /* ─── Projection Chart Data ─── */
  const chartData = useMemo(() => {
    const data = [];
    for (let year = 0; year <= 10; year++) {
      const projectedThickness = Math.max(
        0,
        inputs.currentThickness - result.corrosionRate * year
      );
      const minThickness = inputs.minimumAcceptableThickness || 0;
      data.push({
        year,
        thickness: parseFloat(projectedThickness.toFixed(2)),
        minimum: minThickness,
      });
    }
    return data;
  }, [inputs, result]);

  /* ─── Severity Styling ─── */
  const severityMap = {
    low: {
      label: "Low Corrosion Rate",
      color: "bg-green-50 border-green-300",
      textColor: "text-green-700",
      bgFull: "bg-green-100",
    },
    moderate: {
      label: "Moderate Corrosion Rate",
      color: "bg-yellow-50 border-yellow-300",
      textColor: "text-yellow-700",
      bgFull: "bg-yellow-100",
    },
    high: {
      label: "High Corrosion Rate",
      color: "bg-orange-50 border-orange-300",
      textColor: "text-orange-700",
      bgFull: "bg-orange-100",
    },
    critical: {
      label: "Critical Corrosion Rate",
      color: "bg-red-50 border-red-300",
      textColor: "text-red-700",
      bgFull: "bg-red-100",
    },
  };

  const severityData = severityMap[result.severity];

  const copyResult = () => {
    const text = `Corrosion Rate Assessment:
Original Thickness: ${inputs.originalThickness} mm
Current Thickness: ${inputs.currentThickness} mm
Time in Service: ${inputs.timeInService} years
Corrosion Rate: ${result.corrosionRate.toFixed(3)} mm/year
Total Loss: ${result.totalLoss.toFixed(2)} mm
Remaining Life: ${result.yearsToMinimum === Infinity ? "Indefinite" : result.yearsToMinimum.toFixed(1)} years
Next Inspection: ${result.nextInspectionDate}
Severity: ${severityData.label}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Corrosion Rate Calculator - Fitness-for-Service Assessment"
        description="Calculate corrosion rate, remaining life, and inspection intervals based on thickness measurements. API 510/570 compliant assessments."
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Tools", path: "/tools" },
          { label: "Corrosion Rate Calculator" },
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Corrosion Rate Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 mt-3">
              Assess material degradation and determine remaining service life based on
              measured thickness loss
            </p>
          </motion.div>

          {/* Calculator Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Measurement Data
                </h2>

                {/* Original Thickness */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Original/Nominal Thickness (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.originalThickness}
                    onChange={(e) => setField("originalThickness", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.1"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Design or measured original thickness
                  </p>
                </div>

                {/* Current Thickness */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Measured Thickness (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentThickness}
                    onChange={(e) => setField("currentThickness", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.1"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Latest UT measurement
                  </p>
                </div>

                {/* Time in Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time in Service (years)
                  </label>
                  <input
                    type="number"
                    value={inputs.timeInService}
                    onChange={(e) => setField("timeInService", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.1"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Operating time since original measurement
                  </p>
                </div>

                {/* Minimum Acceptable Thickness */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Minimum Acceptable Thickness (mm)
                  </label>
                  <input
                    type="number"
                    value={inputs.minimumAcceptableThickness || 0}
                    onChange={(e) =>
                      setField("minimumAcceptableThickness", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.1"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    API/ASME minimum for fitness-for-service (typically 50% of design)
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Calculated Results
                </h2>

                {/* Main Result - Corrosion Rate */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`${severityData.color} border-2 rounded-xl p-6`}
                >
                  <div className="text-center">
                    <p
                      className={`text-sm font-semibold ${severityData.textColor} uppercase tracking-wide mb-2`}
                    >
                      {severityData.label}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {result.corrosionRate.toFixed(3)}
                    </div>
                    <div className="text-xl text-gray-600">mm per year</div>
                  </div>
                </motion.div>

                {/* Secondary Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Total Loss
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {result.totalLoss.toFixed(2)} mm
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Remaining
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {result.remainingThickness.toFixed(2)} mm
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Years to Minimum
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {result.yearsToMinimum === Infinity
                        ? "∞"
                        : result.yearsToMinimum.toFixed(1)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Next Inspection
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {result.nextInspectionDate}
                    </p>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyResult}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Result
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projection Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              10-Year Thickness Projection
            </h2>
            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="year"
                    label={{ value: "Years", position: "insideBottomRight", offset: -5 }}
                  />
                  <YAxis label={{ value: "Thickness (mm)", angle: -90, position: "insideLeft" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="thickness"
                    stroke="#2563eb"
                    name="Projected Thickness"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="minimum"
                    stroke="#dc2626"
                    name="Minimum Acceptable"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Educational Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12 mb-16"
          >
            {/* Corrosion Rate Calculation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                Corrosion Rate Calculation Methodology
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Corrosion rate is calculated using the fundamental formula: <strong>Corrosion Rate = (Original Thickness - Current Thickness) / Time in Service</strong>. This calculation determines the average rate at which material loss occurs over the operational period. The corrosion rate is typically expressed in millimeters per year (mm/year) and forms the basis for remaining life assessment and inspection planning.
                </p>
                <p>
                  The accuracy of corrosion rate calculations depends on the reliability of the original thickness measurement and the accuracy of subsequent measurements. For vessels or piping without documented original thickness, the nominal design thickness is used as the baseline. Current thickness should be measured using calibrated ultrasonic testing equipment at the same locations as previous measurements to ensure consistency and detect localized corrosion patterns.
                </p>
                <p>
                  Corrosion rates are not necessarily linear. The actual corrosion mechanism may exhibit acceleration or deceleration over time depending on changes in operating conditions, environment, chemistry, temperature, and stress state. For long-term remaining life predictions, it is prudent to apply a corrosion rate safety factor of 1.5 to 2.0 to account for variability and potential acceleration. The wizard uses a linear assumption, but more sophisticated risk-based approaches account for probability distributions and confidence intervals.
                </p>
                <p>
                  Localized corrosion (pitting, galvanic, crevice) can occur at rates significantly higher than general corrosion. Inspection programs must account for localized corrosion by measuring at multiple locations and applying the maximum measured corrosion rate for fitness-for-service assessment. Some industries require measurement at 8 to 12 locations on vessels to capture localized variations.
                </p>
              </div>
            </div>

            {/* Severity Classifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Corrosion Rate Severity Classifications
              </h2>
              <div className="space-y-4">
                {[
                  {
                    rate: "< 0.3 mm/year",
                    level: "Low",
                    color: "bg-green-50 border-green-300",
                    desc: "Acceptable for most applications. Typical for well-maintained systems with adequate corrosion protection.",
                  },
                  {
                    rate: "0.3 - 1.0 mm/year",
                    level: "Moderate",
                    color: "bg-yellow-50 border-yellow-300",
                    desc: "Acceptable with caution. Requires more frequent inspection intervals (every 2-3 years). Consider corrosion control measures.",
                  },
                  {
                    rate: "1.0 - 2.0 mm/year",
                    level: "High",
                    color: "bg-orange-50 border-orange-300",
                    desc: "Unacceptable for long-term service. Immediate action required. Increase inspection frequency to annual or semi-annual. Implement aggressive corrosion control.",
                  },
                  {
                    rate: "> 2.0 mm/year",
                    level: "Critical",
                    color: "bg-red-50 border-red-300",
                    desc: "Severe degradation. Equipment may be approaching end-of-life. Consider replacement or retirement. Increase inspections to quarterly or continuous monitoring.",
                  },
                ].map((item) => (
                  <div key={item.rate} className={`${item.color} border-2 rounded-lg p-4`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-gray-900">{item.level}</p>
                        <p className="text-sm text-gray-600 mt-1">{item.rate}</p>
                      </div>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* API and ASME Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                API and ASME Fitness-for-Service Requirements
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>API 510 (Pressure Vessel Inspection Code)</strong> requires fitness-for-service assessment when measured wall thickness falls below the minimum required thickness. The minimum required thickness is calculated based on the ASME Boiler and Pressure Vessel Code Section VIII Division 1 using the formula: t_min = (PR)/(SE - 0.6P) + corrosion allowance, where P is design pressure, R is vessel radius, S is allowable stress, and E is weld joint efficiency. Thickness must be measured at all inspection locations, with measurements made across the full extent of corroded areas.
                </p>
                <p>
                  <strong>API 570 (Piping Inspection Code)</strong> requires corrosion rate monitoring and trending. When measured thickness approaches the minimum acceptable thickness, the inspection interval must be decreased. API 570 allows for remaining life calculation using measured corrosion rates with a safety factor of 2.0 unless higher factors are justified by risk analysis. The code requires that piping systems with corrosion rates exceeding 2.0 mm/year shall be considered unsuitable for continued service without remedial action.
                </p>
                <p>
                  <strong>ASME B31.3 (Process Piping)</strong> incorporates fitness-for-service requirements similar to API 570. Minimum acceptable thickness is established based on design calculations with appropriate safety factors. The code recognizes that operating equipment with thickness below design minimum may be acceptable if demonstrated safe by engineering evaluation, which typically involves corrosion rate trending and remaining life calculation.
                </p>
                <p>
                  <strong>Minimum Thickness Standards:</strong> Industry practice typically establishes minimum acceptable thickness as 50% of the nominal design thickness, with allowance for the amount of corrosion expected during one inspection interval. Some standards allow higher corrosion allowances (up to 3 mm or 1/8 inch) for aggressive service conditions. Risk-based inspection approaches may permit lower minimum thresholds if supported by quantitative risk assessment.
                </p>
                <p>
                  <strong>Inspection Intervals:</strong> API 510 and 570 establish baseline inspection intervals (typically 5 to 10 years) based on equipment class and service. When corrosion rates are measured, intervals are adjusted: High corrosion rates ({'>'} 1.0 mm/year) require intervals of 1 to 2 years; moderate rates (0.3–1.0 mm/year) require 2 to 5 year intervals; low rates ({'<'} 0.3 mm/year) may allow standard or extended intervals.
                </p>
              </div>
            </div>

            {/* Remaining Life Assessment */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Remaining Life Assessment and Planning
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Simple Remaining Life Calculation:</strong> Remaining life is calculated as: Years to Minimum = (Current Thickness - Minimum Acceptable Thickness) / Corrosion Rate. This provides a rough estimate of time until the equipment reaches the minimum acceptable thickness. However, this calculation assumes linear corrosion, which may not be conservative if corrosion is accelerating or if localized pitting is more aggressive than general corrosion.
                </p>
                <p>
                  <strong>Safety Factors in Remaining Life:</strong> Conservative practices apply a safety factor to extend inspection intervals before equipment becomes unacceptable. A common approach is to inspect when remaining life equals 1.5 to 2.0 times the inspection interval. For example, if the next inspection is planned for 2 years, equipment should be reinspected when remaining life falls to 3-4 years.
                </p>
                <p>
                  <strong>Trend Analysis:</strong> Multiple corrosion measurements over time provide confidence in rate estimates. A single measurement pair provides minimum statistical confidence. Three or more measurement points spanning several years allow trend fitting and extrapolation. If corrosion rate appears to be accelerating, more conservative estimates should be used for remaining life calculations.
                </p>
                <p>
                  <strong>Operational Modifications:</strong> When corrosion rates are high and remaining life is limited, consider process changes such as reducing temperature, increasing chemical inhibitor dosing, applying cathodic protection, isolating problematic chemistry, or changing material to a more corrosion-resistant alloy. Cost-benefit analysis should compare remedial action costs against inspection intensification and eventual replacement costs.
                </p>
                <p>
                  <strong>Equipment Retirement Planning:</strong> When remaining life becomes less than 2-3 years or corrosion rates exceed 2.0 mm/year, retirement planning should commence. This allows time to order replacement equipment, schedule installation during planned shutdowns, and avoid emergency repairs or unplanned outages.
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Best Practices for Corrosion Rate Monitoring
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Consistent Measurement Locations:</strong> Establish and maintain fixed measurement locations using marked grids or photographs. Subsequent measurements should be taken at the same locations to ensure valid trending and to detect localized vs. general corrosion patterns.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Multiple Measurements Per Location:</strong> Take a minimum of 3 measurements at each location and record the lowest value. This accounts for localized pitting and provides a more conservative assessment for remaining life calculations.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Document Original Thickness:</strong> Obtain and record design thickness, mill test reports, or historical measurements. If original thickness is unknown, use design thickness per engineering drawings. Document all assumptions in inspection reports.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Equipment Calibration:</strong> Calibrate ultrasonic gauges before each inspection using verified reference blocks. Verify temperature compensation settings match the material temperature at the measurement point.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">5</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Adequate Measurement Frequency:</strong> Minimum of 2-3 year intervals for high-risk equipment; 5+ year intervals for stable, low-corrosion-rate equipment. Increase frequency if corrosion rate is high or trending shows acceleration.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">6</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Maintain Trend Records:</strong> Keep comprehensive records of all measurements, locations, dates, and conditions. Plot measurements on trend charts to visualize corrosion patterns and predict future thickness. Include analysis of any deviations or accelerations in corrosion rate.</p>
                  </div>
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
              Need Corrosion Assessment and Inspection?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              Our certified inspectors provide comprehensive corrosion rate monitoring,
              fitness-for-service assessment, and remaining life predictions using API
              510/570 compliant procedures.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.section>
        </div>
      </main>

      <ContactDetails />
    </>
  );
}
