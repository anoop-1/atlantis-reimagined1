import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Info,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { certifications, regions } from "@/data/certification-cost-data";
import type { Certification, CostBreakdown } from "@/data/certification-cost-data";

/* ─── Constants ─── */
const CURRENT_LEVELS = ["None", "Level I", "Level II"] as const;
type CurrentLevel = (typeof CURRENT_LEVELS)[number];

const BASE_SALARY: Record<CurrentLevel, number> = {
  None: 35000,
  "Level I": 48000,
  "Level II": 68000,
};

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NDT Certification Cost Calculator 2026",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/ndt-certification-cost-calculator",
  description:
    "Calculate the true cost of NDT certification including exam fees, training, materials, and travel. Compare ASNT, ISO 9712, and API certifications with 5-year ROI projection.",
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

/* ─── Helper: get cost breakdown for a cert + region + level ─── */
function getCost(
  cert: Certification,
  regionId: string,
  level: string
): CostBreakdown | null {
  const regionCosts = cert.costsByRegion[regionId];
  if (!regionCosts) return null;
  return regionCosts[level] ?? null;
}

function totalCost(cb: CostBreakdown): number {
  return cb.examFee + cb.trainingCost + cb.materialsCost + cb.travelEstimate;
}

/* ─── Format currency ─── */
function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function NDTCertificationCostCalculator() {
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("usa");
  const [currentLevel, setCurrentLevel] = useState<CurrentLevel>("None");
  const [viewMode, setViewMode] = useState<"total" | "per-year">("total");

  /* ─── Toggle certification selection ─── */
  const toggleCert = (id: string) => {
    setSelectedCerts((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  /* ─── Calculate costs ─── */
  const costRows = useMemo(() => {
    return selectedCerts
      .map((certId) => {
        const cert = certifications.find((c) => c.id === certId);
        if (!cert) return null;
        // Use first level available for the cert
        const level = cert.levels[cert.levels.length - 1]; // highest level
        const cb = getCost(cert, selectedRegion, level);
        if (!cb) return null;
        const salary =
          cert.salaryByLevel[level] ?? cert.salaryByLevel[cert.levels[0]];
        return { cert, level, cost: cb, salary, total: totalCost(cb) };
      })
      .filter(Boolean) as {
      cert: Certification;
      level: string;
      cost: CostBreakdown;
      salary: { min: number; median: number; max: number };
      total: number;
    }[];
  }, [selectedCerts, selectedRegion]);

  const grandTotal = useMemo(
    () => costRows.reduce((s, r) => s + r.total, 0),
    [costRows]
  );

  /* ─── 5-Year ROI Chart Data ─── */
  const roiChartData = useMemo(() => {
    if (costRows.length === 0) return [];
    const baseSalary = BASE_SALARY[currentLevel];
    // Best salary after certifications: take highest median salary from selected certs
    const bestMedian = Math.max(...costRows.map((r) => r.salary.median));
    const salaryIncrease = Math.max(0, bestMedian - baseSalary);
    const annualGain = salaryIncrease;

    const data = [];
    let cumulativeCost = grandTotal;
    let cumulativeGain = 0;

    for (let year = 0; year <= 5; year++) {
      if (year === 0) {
        data.push({
          year: `Year 0`,
          "Cumulative Cost": cumulativeCost,
          "Cumulative Salary Gain": 0,
          "Net ROI": -cumulativeCost,
        });
      } else {
        cumulativeGain += annualGain;
        data.push({
          year: `Year ${year}`,
          "Cumulative Cost": cumulativeCost,
          "Cumulative Salary Gain": cumulativeGain,
          "Net ROI": cumulativeGain - cumulativeCost,
        });
      }
    }
    return data;
  }, [costRows, currentLevel, grandTotal]);

  const paybackYear = useMemo(() => {
    const row = roiChartData.find((d) => d["Net ROI"] >= 0);
    return row ? row.year : "5+";
  }, [roiChartData]);

  const regionObj = regions.find((r) => r.id === selectedRegion);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="NDT Certification Cost Calculator 2026 | Training Investment & ROI | Atlantis NDT"
        description="Calculate the true cost of NDT certification in 2026: ASNT Level I/II/III, ISO 9712, API 510/570/653. Compare exam fees, training costs, and materials by region with 5-year salary ROI projection."
        keywords="NDT certification cost, ASNT certification cost, API 510 exam cost, NDT training cost, NDT certification ROI, ISO 9712 cost, NDT salary increase"
        canonical="https://atlantisndt.com/tools/ndt-certification-cost-calculator"
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Certification Cost Calculator" },
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
            <Calculator className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Certification Cost Calculator
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Calculate the total investment for NDT certification and see your
            5-year ROI
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ─── LEFT: Inputs ─── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Region Selector */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "#004aad" }}
              >
                1. Select Your Region
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedRegion === region.id
                        ? "border-[#004aad] bg-blue-50 text-[#004aad]"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Current Level */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "#004aad" }}
              >
                2. Your Current Certification Level
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                Used to calculate your salary increase and ROI after earning new
                certifications.
              </p>
              <div className="flex flex-wrap gap-3">
                {CURRENT_LEVELS.map((level) => (
                  <button
                    key={level}
                    onClick={() => setCurrentLevel(level)}
                    className={`px-5 py-2.5 rounded-lg border-2 text-sm font-medium transition-all ${
                      currentLevel === level
                        ? "border-[#004aad] bg-blue-50 text-[#004aad]"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Certification Selection */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: "#004aad" }}
              >
                3. Select Certifications
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                Choose one or more certifications to calculate combined costs.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert) => {
                  const isSelected = selectedCerts.includes(cert.id);
                  const providerColor =
                    cert.provider === "ASNT"
                      ? "bg-blue-100 text-blue-700"
                      : cert.provider === "API"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700";
                  return (
                    <button
                      key={cert.id}
                      onClick={() => toggleCert(cert.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-[#004aad] bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            isSelected
                              ? "border-[#004aad] bg-[#004aad]"
                              : "border-slate-300"
                          }`}
                        >
                          {isSelected && (
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 block text-sm">
                            {cert.name}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${providerColor}`}
                            >
                              {cert.provider}
                            </span>
                            <span className="text-xs text-slate-500">
                              {cert.levels.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Results Sidebar ─── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Cost Summary Card */}
              <motion.div
                className="bg-white rounded-xl shadow border border-slate-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#004aad" }}
                >
                  <DollarSign className="w-5 h-5 inline-block mr-1 -mt-0.5" />
                  Cost Summary
                </h3>

                {costRows.length === 0 ? (
                  <p className="text-slate-500 text-sm italic">
                    Select certifications to see cost breakdown
                  </p>
                ) : (
                  <>
                    {/* Toggle */}
                    <div className="flex bg-slate-100 rounded-lg p-1 mb-4">
                      <button
                        onClick={() => setViewMode("total")}
                        className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition ${
                          viewMode === "total"
                            ? "bg-white text-[#004aad] shadow-sm"
                            : "text-slate-500"
                        }`}
                      >
                        Total
                      </button>
                      <button
                        onClick={() => setViewMode("per-year")}
                        className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition ${
                          viewMode === "per-year"
                            ? "bg-white text-[#004aad] shadow-sm"
                            : "text-slate-500"
                        }`}
                      >
                        Per Year (5yr)
                      </button>
                    </div>

                    <div className="space-y-3">
                      {costRows.map((row) => {
                        const display =
                          viewMode === "per-year"
                            ? row.total / 5
                            : row.total;
                        return (
                          <div
                            key={row.cert.id}
                            className="border-b border-slate-100 pb-3"
                          >
                            <div className="flex justify-between text-sm font-semibold text-slate-800">
                              <span>{row.cert.shortName}</span>
                              <span>{fmt(display)}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 mt-1 text-xs text-slate-500">
                              <span>Exam Fee</span>
                              <span className="text-right">
                                {fmt(
                                  viewMode === "per-year"
                                    ? row.cost.examFee / 5
                                    : row.cost.examFee
                                )}
                              </span>
                              <span>Training</span>
                              <span className="text-right">
                                {fmt(
                                  viewMode === "per-year"
                                    ? row.cost.trainingCost / 5
                                    : row.cost.trainingCost
                                )}
                              </span>
                              <span>Materials</span>
                              <span className="text-right">
                                {fmt(
                                  viewMode === "per-year"
                                    ? row.cost.materialsCost / 5
                                    : row.cost.materialsCost
                                )}
                              </span>
                              <span>Travel</span>
                              <span className="text-right">
                                {fmt(
                                  viewMode === "per-year"
                                    ? row.cost.travelEstimate / 5
                                    : row.cost.travelEstimate
                                )}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Grand Total */}
                    <div className="flex justify-between mt-4 pt-3 border-t-2 border-[#004aad]">
                      <span className="font-bold text-slate-900">
                        Grand Total
                      </span>
                      <span className="font-bold text-xl text-[#004aad]">
                        {fmt(
                          viewMode === "per-year" ? grandTotal / 5 : grandTotal
                        )}
                      </span>
                    </div>

                    {/* Region Note */}
                    <p className="text-xs text-slate-400 mt-2">
                      Estimates for {regionObj?.name ?? selectedRegion} in USD.
                      Actual costs may vary.
                    </p>
                  </>
                )}
              </motion.div>

              {/* Salary Impact */}
              {costRows.length > 0 && (
                <motion.div
                  className="bg-white rounded-xl shadow border border-slate-100 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "#004aad" }}
                  >
                    <TrendingUp className="w-5 h-5 inline-block mr-1 -mt-0.5" />
                    Salary Impact
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Current ({currentLevel})</span>
                      <span className="font-semibold text-slate-800">
                        {fmt(BASE_SALARY[currentLevel])}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">After Certification</span>
                      <span className="font-semibold text-green-700">
                        {fmt(
                          Math.max(
                            ...costRows.map((r) => r.salary.median)
                          )
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-2">
                      <span className="text-slate-600">Annual Increase</span>
                      <span className="font-bold text-[#004aad]">
                        +
                        {fmt(
                          Math.max(
                            0,
                            Math.max(
                              ...costRows.map((r) => r.salary.median)
                            ) - BASE_SALARY[currentLevel]
                          )
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Payback Period</span>
                      <span className="font-bold text-[#004aad]">
                        {paybackYear}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ─── 5-Year ROI Chart ─── */}
        {costRows.length > 0 && roiChartData.length > 0 && (
          <motion.div
            className="bg-white rounded-xl shadow border border-slate-100 p-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#004aad" }}
            >
              5-Year ROI Projection
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Cumulative certification cost vs. cumulative salary increase
              starting from {currentLevel === "None" ? "no" : currentLevel}{" "}
              certification.
            </p>

            <ResponsiveContainer width="100%" height={360}>
              <AreaChart
                data={roiChartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={(v: number) =>
                    `$${(v / 1000).toFixed(0)}k`
                  }
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value: number) => fmt(value)}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
                <Area
                  type="monotone"
                  dataKey="Cumulative Cost"
                  stackId="1"
                  stroke="#dc2626"
                  fill="#fecaca"
                  fillOpacity={0.5}
                />
                <Area
                  type="monotone"
                  dataKey="Cumulative Salary Gain"
                  stackId="2"
                  stroke="#059669"
                  fill="#a7f3d0"
                  fillOpacity={0.5}
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* ROI Callout */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1">
                  Total Investment
                </p>
                <p className="text-2xl font-bold text-red-700">
                  {fmt(grandTotal)}
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">
                  5-Year Salary Gain
                </p>
                <p className="text-2xl font-bold text-green-700">
                  {fmt(
                    roiChartData[roiChartData.length - 1]?.[
                      "Cumulative Salary Gain"
                    ] ?? 0
                  )}
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-xs text-[#004aad] font-semibold uppercase tracking-wider mb-1">
                  5-Year Net ROI
                </p>
                <p className="text-2xl font-bold text-[#004aad]">
                  {fmt(
                    roiChartData[roiChartData.length - 1]?.["Net ROI"] ?? 0
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#004aad] mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                About These Estimates
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                Cost estimates are based on 2026 industry data from ASNT, API,
                and ISO certification bodies. Salary figures reflect US median
                values for full-time NDT professionals. Actual costs and salaries
                vary by employer, location, and experience. Many employers
                partially or fully cover certification costs.{" "}
                <Link
                  to="/ndt-certification-guide"
                  className="text-[#004aad] font-semibold hover:underline"
                >
                  Read our full Certification Guide
                </Link>{" "}
                or{" "}
                <Link
                  to="/contact"
                  className="text-[#004aad] font-semibold hover:underline"
                >
                  contact us
                </Link>{" "}
                for personalized training recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link
            to="/tools/ndt-method-selector"
            className="bg-white rounded-xl shadow border border-slate-100 p-5 hover:shadow-lg hover:border-[#004aad]/30 transition group"
          >
            <h3 className="font-bold text-slate-900 group-hover:text-[#004aad] transition mb-1">
              NDT Method Selector
            </h3>
            <p className="text-slate-600 text-sm">
              Find the right testing method for your application
            </p>
            <span className="inline-flex items-center gap-1 text-[#004aad] font-semibold text-sm mt-2 group-hover:gap-2 transition-all">
              Use Tool <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            to="/tools/ndt-roi-calculator"
            className="bg-white rounded-xl shadow border border-slate-100 p-5 hover:shadow-lg hover:border-[#004aad]/30 transition group"
          >
            <h3 className="font-bold text-slate-900 group-hover:text-[#004aad] transition mb-1">
              Inspection ROI Calculator
            </h3>
            <p className="text-slate-600 text-sm">
              Compare time-based vs risk-based inspection savings
            </p>
            <span className="inline-flex items-center gap-1 text-[#004aad] font-semibold text-sm mt-2 group-hover:gap-2 transition-all">
              Use Tool <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      <ContactDetails />
    </div>
  );
}
