import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  Info,
  DollarSign,
  ShieldCheck,
  BarChart3,
  ChevronDown,
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
import {
  industryDefaults,
  inspectionApproaches,
  savingsFactors,
} from "@/data/roi-calculator-data";

/* ─── Types ─── */
interface Inputs {
  industry: string;
  vessels: number;
  piping_km: number;
  tanks: number;
  avg_inspection_cost: number;
  avg_failure_cost: number;
  inspection_frequency_months: number;
}

/* ─── Constants ─── */
const INDUSTRY_OPTIONS = [
  { value: "refinery", label: "Refinery" },
  { value: "petrochemical", label: "Petrochemical Plant" },
  { value: "pipeline", label: "Pipeline Operator" },
  { value: "power-generation", label: "Power Generation" },
  { value: "offshore", label: "Offshore Platform" },
];

const INITIAL_INPUTS: Inputs = {
  industry: "refinery",
  ...industryDefaults["refinery"],
};

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NDT Inspection ROI Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/ndt-roi-calculator",
  description:
    "Calculate the return on investment from switching to risk-based inspection (RBI) vs traditional time-based inspection. Compare annual costs, failure prevention, and 5-year cumulative savings.",
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

/* ─── Format currency ─── */
function fmt(n: number): string {
  if (Math.abs(n) >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(2)}M`;
  }
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function pct(n: number): string {
  return `${(n * 100).toFixed(0)}%`;
}

export default function NDTROICalculator() {
  const [inputs, setInputs] = useState<Inputs>(INITIAL_INPUTS);
  const [showMethodology, setShowMethodology] = useState(false);

  /* ─── Update field helper ─── */
  const setField = useCallback(
    (field: keyof Inputs, value: string | number) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  /* ─── Industry change: load defaults ─── */
  const handleIndustryChange = useCallback((industry: string) => {
    const defaults = industryDefaults[industry];
    if (defaults) {
      setInputs({ industry, ...defaults });
    } else {
      setInputs((prev) => ({ ...prev, industry }));
    }
  }, []);

  /* ─── Core Calculations ─── */
  const results = useMemo(() => {
    const totalAssets =
      inputs.vessels + inputs.piping_km * 10 + inputs.tanks; // piping_km weighted by 10 joints/km
    const inspectionsPerYear = 12 / inputs.inspection_frequency_months;

    const tbi = inspectionApproaches["time-based"];
    const rbi = inspectionApproaches["risk-based"];

    // Time-Based annual costs
    const tbiInspections = totalAssets * inspectionsPerYear * tbi.efficiency_factor;
    const tbiAnnualInspectionCost = tbiInspections * inputs.avg_inspection_cost;
    const tbiExpectedFailures =
      totalAssets * (1 - tbi.coverage_rate) * 0.02 * inspectionsPerYear; // 2% annual failure probability for uncovered assets
    const tbiFailureCost = tbiExpectedFailures * inputs.avg_failure_cost;
    const tbiTotalAnnual = tbiAnnualInspectionCost + tbiFailureCost;

    // Risk-Based annual costs
    const rbiInspections = totalAssets * inspectionsPerYear * rbi.efficiency_factor;
    const rbiAnnualInspectionCost = rbiInspections * inputs.avg_inspection_cost;
    const rbiExpectedFailures =
      totalAssets * (1 - rbi.coverage_rate) * 0.02 * inspectionsPerYear;
    const rbiFailureCost = rbiExpectedFailures * inputs.avg_failure_cost;
    const rbiTotalAnnual = rbiAnnualInspectionCost + rbiFailureCost;

    // Savings
    const annualSavings = tbiTotalAnnual - rbiTotalAnnual;
    const failuresPrevented = Math.max(0, tbiExpectedFailures - rbiExpectedFailures);

    // Additional savings factors
    const downtimeSavings = tbiAnnualInspectionCost * savingsFactors.reduced_downtime_pct;
    const maintenanceOptimization =
      tbiAnnualInspectionCost * savingsFactors.maintenance_optimization_pct;
    const insuranceReduction =
      tbiAnnualInspectionCost * savingsFactors.insurance_reduction_pct;

    const totalAnnualBenefit =
      annualSavings + downtimeSavings + maintenanceOptimization + insuranceReduction;

    // ROI (assumes $50k-$150k RBI implementation cost, scaled by assets)
    const implementationCost = Math.max(
      50000,
      Math.min(totalAssets * 500, 300000)
    );
    const roiPct =
      implementationCost > 0
        ? ((totalAnnualBenefit * 5 - implementationCost) / implementationCost) *
          100
        : 0;

    // 5-year chart data
    const chartData = [];
    let tbiCumulative = 0;
    let rbiCumulative = implementationCost; // RBI has upfront cost

    for (let year = 0; year <= 5; year++) {
      if (year === 0) {
        chartData.push({
          year: `Year 0`,
          "Time-Based (TBI)": 0,
          "Risk-Based (RBI)": implementationCost,
          "Cumulative Savings": -implementationCost,
        });
      } else {
        tbiCumulative += tbiTotalAnnual;
        rbiCumulative += rbiTotalAnnual;
        chartData.push({
          year: `Year ${year}`,
          "Time-Based (TBI)": Math.round(tbiCumulative),
          "Risk-Based (RBI)": Math.round(rbiCumulative),
          "Cumulative Savings": Math.round(tbiCumulative - rbiCumulative),
        });
      }
    }

    return {
      totalAssets,
      tbiAnnualInspectionCost,
      tbiExpectedFailures,
      tbiFailureCost,
      tbiTotalAnnual,
      rbiAnnualInspectionCost,
      rbiExpectedFailures,
      rbiFailureCost,
      rbiTotalAnnual,
      annualSavings,
      failuresPrevented,
      downtimeSavings,
      maintenanceOptimization,
      insuranceReduction,
      totalAnnualBenefit,
      implementationCost,
      roiPct,
      chartData,
      tbiInspections: Math.round(tbiInspections),
      rbiInspections: Math.round(rbiInspections),
    };
  }, [inputs]);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="NDT Inspection ROI Calculator | Time-Based vs Risk-Based Savings | Atlantis NDT"
        description="Calculate the ROI of switching from time-based to risk-based inspection. Input your asset counts and see annual savings, failure prevention, and 5-year cumulative cost comparison for refineries, pipelines, and offshore platforms."
        keywords="NDT ROI calculator, risk based inspection savings, RBI vs TBI, inspection cost reduction, asset integrity ROI, plant inspection optimization"
        canonical="https://atlantisndt.com/tools/ndt-roi-calculator"
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Inspection ROI Calculator" },
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
            <TrendingUp className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Inspection ROI Calculator
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Compare time-based vs risk-based inspection strategies and quantify
            the savings
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ─── LEFT: Inputs ─── */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "#004aad" }}
              >
                Your Facility
              </h2>

              {/* Industry */}
              <label className="block mb-4">
                <span className="text-sm font-semibold text-slate-700 block mb-1">
                  Industry
                </span>
                <div className="relative">
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleIndustryChange(e.target.value)}
                    className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent pr-8"
                  >
                    {INDUSTRY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </label>

              {/* Asset Counts */}
              <div className="border-t border-slate-100 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">
                  Asset Inventory
                </h3>
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Pressure Vessels
                    </span>
                    <input
                      type="number"
                      min={0}
                      value={inputs.vessels}
                      onChange={(e) =>
                        setField("vessels", parseInt(e.target.value) || 0)
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Piping (km)
                    </span>
                    <input
                      type="number"
                      min={0}
                      value={inputs.piping_km}
                      onChange={(e) =>
                        setField("piping_km", parseInt(e.target.value) || 0)
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Storage Tanks
                    </span>
                    <input
                      type="number"
                      min={0}
                      value={inputs.tanks}
                      onChange={(e) =>
                        setField("tanks", parseInt(e.target.value) || 0)
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                </div>
              </div>

              {/* Cost Parameters */}
              <div className="border-t border-slate-100 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">
                  Cost Parameters
                </h3>
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Avg. Inspection Cost ($)
                    </span>
                    <input
                      type="number"
                      min={0}
                      step={100}
                      value={inputs.avg_inspection_cost}
                      onChange={(e) =>
                        setField(
                          "avg_inspection_cost",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Avg. Failure Cost ($)
                    </span>
                    <input
                      type="number"
                      min={0}
                      step={10000}
                      value={inputs.avg_failure_cost}
                      onChange={(e) =>
                        setField(
                          "avg_failure_cost",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs text-slate-500 block mb-0.5">
                      Inspection Frequency (months)
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={60}
                      value={inputs.inspection_frequency_months}
                      onChange={(e) =>
                        setField(
                          "inspection_frequency_months",
                          parseInt(e.target.value) || 12
                        )
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
                    />
                  </label>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                Values auto-populate from industry defaults. Adjust to match
                your facility.
              </p>
            </motion.div>
          </div>

          {/* ─── RIGHT: Results ─── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                className="bg-white rounded-xl shadow border border-slate-100 p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Annual Savings
                </p>
                <p className="text-2xl font-bold text-green-700">
                  {fmt(results.annualSavings)}
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl shadow border border-slate-100 p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <ShieldCheck className="w-8 h-8 text-[#004aad] mx-auto mb-2" />
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Failures Prevented/yr
                </p>
                <p className="text-2xl font-bold text-[#004aad]">
                  {results.failuresPrevented.toFixed(1)}
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl shadow border border-slate-100 p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <BarChart3 className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  5-Year ROI
                </p>
                <p className="text-2xl font-bold text-amber-700">
                  {results.roiPct.toFixed(0)}%
                </p>
              </motion.div>
            </div>

            {/* Side-by-Side Comparison */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2
                className="text-xl font-bold mb-6"
                style={{ color: "#004aad" }}
              >
                Annual Cost Comparison
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Time-Based */}
                <div className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <h3 className="font-bold text-slate-900">
                      Time-Based (TBI)
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        Inspections / year
                      </span>
                      <span className="font-semibold text-slate-800">
                        {results.tbiInspections}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Inspection Cost</span>
                      <span className="font-semibold text-slate-800">
                        {fmt(results.tbiAnnualInspectionCost)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        Expected Failures
                      </span>
                      <span className="font-semibold text-red-600">
                        {results.tbiExpectedFailures.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Failure Cost</span>
                      <span className="font-semibold text-red-600">
                        {fmt(results.tbiFailureCost)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="font-bold text-slate-900">
                        Total Annual
                      </span>
                      <span className="font-bold text-red-700 text-lg">
                        {fmt(results.tbiTotalAnnual)}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {inspectionApproaches["time-based"].description}
                  </p>
                </div>

                {/* Risk-Based */}
                <div className="border-2 border-[#004aad] rounded-xl p-5 bg-blue-50/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#004aad]" />
                    <h3 className="font-bold text-slate-900">
                      Risk-Based (RBI)
                    </h3>
                    <span className="text-xs font-semibold text-[#004aad] bg-blue-100 px-2 py-0.5 rounded-full ml-auto">
                      Recommended
                    </span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        Inspections / year
                      </span>
                      <span className="font-semibold text-slate-800">
                        {results.rbiInspections}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Inspection Cost</span>
                      <span className="font-semibold text-slate-800">
                        {fmt(results.rbiAnnualInspectionCost)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        Expected Failures
                      </span>
                      <span className="font-semibold text-green-600">
                        {results.rbiExpectedFailures.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Failure Cost</span>
                      <span className="font-semibold text-green-600">
                        {fmt(results.rbiFailureCost)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-[#004aad]/20 pt-2">
                      <span className="font-bold text-slate-900">
                        Total Annual
                      </span>
                      <span className="font-bold text-[#004aad] text-lg">
                        {fmt(results.rbiTotalAnnual)}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {inspectionApproaches["risk-based"].description}
                  </p>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="mt-6 bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3">
                  Total Annual Benefit with RBI
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">
                      Direct Inspection Savings
                    </span>
                    <span className="font-semibold text-green-800">
                      {fmt(results.annualSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">
                      Reduced Downtime ({pct(savingsFactors.reduced_downtime_pct)})
                    </span>
                    <span className="font-semibold text-green-800">
                      {fmt(results.downtimeSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">
                      Maintenance Optimization ({pct(savingsFactors.maintenance_optimization_pct)})
                    </span>
                    <span className="font-semibold text-green-800">
                      {fmt(results.maintenanceOptimization)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">
                      Insurance Reduction ({pct(savingsFactors.insurance_reduction_pct)})
                    </span>
                    <span className="font-semibold text-green-800">
                      {fmt(results.insuranceReduction)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-3 pt-3 border-t border-green-200">
                  <span className="font-bold text-green-900">
                    Total Annual Benefit
                  </span>
                  <span className="font-bold text-green-900 text-lg">
                    {fmt(results.totalAnnualBenefit)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 5-Year Chart */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: "#004aad" }}
              >
                5-Year Cumulative Cost Comparison
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                Total cumulative spend for each approach including RBI
                implementation cost of {fmt(results.implementationCost)} in Year
                0.
              </p>

              <ResponsiveContainer width="100%" height={380}>
                <AreaChart
                  data={results.chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    tickFormatter={(v: number) =>
                      v >= 1_000_000
                        ? `$${(v / 1_000_000).toFixed(1)}M`
                        : `$${(v / 1000).toFixed(0)}k`
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
                    dataKey="Time-Based (TBI)"
                    stroke="#dc2626"
                    fill="#fecaca"
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="Risk-Based (RBI)"
                    stroke="#004aad"
                    fill="#bfdbfe"
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="Cumulative Savings"
                    stroke="#059669"
                    fill="#a7f3d0"
                    fillOpacity={0.3}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>

              {/* 5-Year Summary */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1">
                    TBI 5-Year Total
                  </p>
                  <p className="text-xl font-bold text-red-700">
                    {fmt(
                      results.chartData[results.chartData.length - 1]?.[
                        "Time-Based (TBI)"
                      ] ?? 0
                    )}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-[#004aad] font-semibold uppercase tracking-wider mb-1">
                    RBI 5-Year Total
                  </p>
                  <p className="text-xl font-bold text-[#004aad]">
                    {fmt(
                      results.chartData[results.chartData.length - 1]?.[
                        "Risk-Based (RBI)"
                      ] ?? 0
                    )}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">
                    5-Year Net Savings
                  </p>
                  <p className="text-xl font-bold text-green-700">
                    {fmt(
                      results.chartData[results.chartData.length - 1]?.[
                        "Cumulative Savings"
                      ] ?? 0
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Methodology Toggle */}
            <motion.div
              className="bg-white rounded-xl shadow border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <button
                onClick={() => setShowMethodology(!showMethodology)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-bold text-slate-900">
                  Calculation Methodology
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    showMethodology ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showMethodology && (
                <div className="px-6 pb-6 text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    <strong>Total assets</strong> = vessels + (piping km x 10
                    inspection points per km) + tanks.
                  </p>
                  <p>
                    <strong>TBI</strong> inspects every asset at the fixed
                    interval with 100% effort (efficiency factor 1.0) but
                    typically achieves only {pct(inspectionApproaches["time-based"].coverage_rate)}{" "}
                    meaningful coverage.
                  </p>
                  <p>
                    <strong>RBI</strong> reduces inspection volume to{" "}
                    {pct(inspectionApproaches["risk-based"].efficiency_factor)} of
                    TBI (focusing on high-risk assets) while achieving{" "}
                    {pct(inspectionApproaches["risk-based"].coverage_rate)}{" "}
                    effective coverage.
                  </p>
                  <p>
                    <strong>Failure probability</strong> is modeled at 2% per
                    year for uncovered assets. RBI's higher coverage rate
                    significantly reduces the population of uncovered assets.
                  </p>
                  <p>
                    <strong>Additional savings</strong> from reduced downtime,
                    maintenance optimization, and insurance premium reductions
                    are applied as percentages of the TBI inspection budget per
                    API 580/581 industry benchmarks.
                  </p>
                  <p>
                    <strong>Implementation cost</strong> is estimated at $500 per
                    asset (min $50k, max $300k) covering RBI assessment, data
                    collection, and corrosion circuit mapping.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#004aad] mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Need a Detailed RBI Assessment?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                This calculator provides a high-level estimate based on industry
                averages. For a facility-specific RBI assessment compliant with
                API 580/581, including degradation mechanism identification,
                consequence modeling, and optimized inspection planning,{" "}
                <Link
                  to="/contact"
                  className="text-[#004aad] font-semibold hover:underline"
                >
                  contact our consulting team
                </Link>
                . Our ASNT Level III consultants have implemented RBI programs
                for refineries, offshore platforms, and pipeline operators
                worldwide.
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
            to="/tools/ndt-certification-cost-calculator"
            className="bg-white rounded-xl shadow border border-slate-100 p-5 hover:shadow-lg hover:border-[#004aad]/30 transition group"
          >
            <h3 className="font-bold text-slate-900 group-hover:text-[#004aad] transition mb-1">
              Certification Cost Calculator
            </h3>
            <p className="text-slate-600 text-sm">
              Calculate certification costs and 5-year salary ROI
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
