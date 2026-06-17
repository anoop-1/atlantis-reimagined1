import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { Calculator, DollarSign, TrendingDown, Clock } from "lucide-react";

const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function DigitalTwinRoiCalculator() {
    const [assets, setAssets] = useState<number>(25);
    const [downtimeHrs, setDowntimeHrs] = useState<number>(120);
    const [downtimeCost, setDowntimeCost] = useState<number>(20000);
    const [inspectors, setInspectors] = useState<number>(6);
    const [inspectHrs, setInspectHrs] = useState<number>(60);
    const [inspectRate, setInspectRate] = useState<number>(125);
    const [implCostLow, setImplCostLow] = useState<number>(50000);
    const [implCostHigh, setImplCostHigh] = useState<number>(500000);

    const results = useMemo(() => {
        const annualDowntimeCost = downtimeHrs * downtimeCost;
        const annualInspectionCost = assets * inspectHrs * inspectRate;
        const baseline = annualDowntimeCost + annualInspectionCost;

        const savings20 = baseline * 0.20;
        const savings35 = baseline * 0.35;
        const savings50 = baseline * 0.50;

        const avgImpl = (implCostLow + implCostHigh) / 2;
        const breakEvenMonths35 = savings35 > 0 ? (avgImpl / savings35) * 12 : 0;
        const breakEvenMonths20 = savings20 > 0 ? (avgImpl / savings20) * 12 : 0;

        return {
            annualDowntimeCost, annualInspectionCost, baseline,
            savings20, savings35, savings50, avgImpl,
            breakEvenMonths20, breakEvenMonths35
        };
    }, [assets, downtimeHrs, downtimeCost, inspectors, inspectHrs, inspectRate, implCostLow, implCostHigh]);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Digital Twin ROI Calculator",
        "applicationCategory": "BusinessApplication",
        "description": "Free calculator estimating ROI of a digital twin NDT program against baseline inspection and downtime cost.",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
    };

    const field = (label: string, val: number, setter: (n: number) => void, hint?: string) => (
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            <input
                type="number"
                value={val}
                onChange={e => setter(Number(e.target.value) || 0)}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
            />
            {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin ROI Calculator — 4 Real Examples (Free Tool)"
                description="Free digital twin ROI calculator for NDT asset integrity. 4 worked examples (refinery, FPSO, pipeline, power plant). Live widget. Updated 2026."
                canonical="https://atlantisndt.com/digital-twin-roi-calculator"
                structuredData={structuredData}
            />
                  <TableOfContents items={[{ id: "overview", label: "Digital Twin ROI Overview" }, { id: "examples", label: "Worked Examples" }, { id: "calculator", label: "Calculator" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><Calculator className="w-5 h-5" /><span>Interactive Tool · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin ROI Calculator</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Enter eight numbers about your current inspection and downtime costs. See the projected annual savings
                        at 20%, 35%, and 50% digital-twin-enabled reduction, and how quickly a $50K-$500K implementation pays
                        back.
                    </p>
                </div>
            </section>

            {/* ─────────────── 4 WORKED EXAMPLE SCENARIOS ─────────────── */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">4 worked ROI examples</h2>
                        <p className="text-slate-600 text-lg">
                            Before plugging in your own numbers, here are four realistic deployment scenarios across the asset classes
                            we deploy most often. All figures are indicative ranges based on industry-typical results, not specific customer quotes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-blue-600" /> Gulf Coast refinery</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-slate-700">
                                <p><strong>Scope:</strong> ~220 fixed-equipment items (vessels, exchangers, columns), API 510/570/653 program.</p>
                                <p><strong>Baseline annual cost:</strong> ~{fmt(7_500_000)} (unplanned downtime + inspection labour).</p>
                                <p><strong>Expected DT savings (35%):</strong> ~{fmt(2_625_000)}/yr — RBI scope reduction, FFS automation, fewer false-positive shutdowns.</p>
                                <p><strong>Implementation midpoint:</strong> ~{fmt(275_000)}.</p>
                                <p><strong>Break-even:</strong> ~1.3 months.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-emerald-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-emerald-600" /> North Sea FPSO</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-slate-700">
                                <p><strong>Scope:</strong> Topsides + hull, ~140 critical components, DNV class survey alignment.</p>
                                <p><strong>Baseline annual cost:</strong> ~{fmt(11_000_000)} (offshore inspection + production deferral exposure).</p>
                                <p><strong>Expected DT savings (35%):</strong> ~{fmt(3_850_000)}/yr — survey throughput, coating-breakdown early-warning, fewer rope-access mobilisations.</p>
                                <p><strong>Implementation midpoint:</strong> ~{fmt(400_000)}.</p>
                                <p><strong>Break-even:</strong> ~1.2 months.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-amber-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-amber-600" /> Transmission pipeline</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-slate-700">
                                <p><strong>Scope:</strong> ~600 km mainline, ILI + IoT corrosion probes, PHMSA 49 CFR 195.</p>
                                <p><strong>Baseline annual cost:</strong> ~{fmt(4_200_000)} (dig verification, ILI processing, integrity ops).</p>
                                <p><strong>Expected DT savings (35%):</strong> ~{fmt(1_470_000)}/yr — dig-list reduction, ILI-to-decision compression, regulator submittals.</p>
                                <p><strong>Implementation midpoint:</strong> ~{fmt(225_000)}.</p>
                                <p><strong>Break-even:</strong> ~1.8 months.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-purple-600" /> Power plant (HRSG + steam piping)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-slate-700">
                                <p><strong>Scope:</strong> ~80 critical pressure parts, ECT tube-bundle data, outage planning.</p>
                                <p><strong>Baseline annual cost:</strong> ~{fmt(3_100_000)} (forced-outage exposure + inspection labour).</p>
                                <p><strong>Expected DT savings (35%):</strong> ~{fmt(1_085_000)}/yr — outage scope tuning, tube-life projection, fewer surprise pulls.</p>
                                <p><strong>Implementation midpoint:</strong> ~{fmt(180_000)}.</p>
                                <p><strong>Break-even:</strong> ~2.0 months.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <p className="text-xs text-slate-500 mt-6 italic">
                        Baseline cost and savings figures are illustrative ranges drawn from published refinery, offshore, pipeline,
                        and power industry case studies plus typical post-deployment outcomes. They are not customer-specific quotes.
                        Plug your own numbers into the calculator below for a tailored estimate.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Your Numbers</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {field("Number of critical assets in scope", assets, setAssets, "Pressure vessels, piping circuits, tanks, compressors")}
                            {field("Unplanned downtime hours per year", downtimeHrs, setDowntimeHrs, "Across the asset base")}
                            {field("Cost per hour of unplanned downtime ($)", downtimeCost, setDowntimeCost, "Lost margin + fixed cost absorption")}
                            {field("Number of NDT inspectors", inspectors, setInspectors)}
                            {field("Average inspection hours per asset per year", inspectHrs, setInspectHrs, "Including RBI/thickness surveys")}
                            {field("Inspector fully-loaded rate ($/hr)", inspectRate, setInspectRate, "Direct + burdened")}
                            {field("Implementation cost — low end ($)", implCostLow, setImplCostLow)}
                            {field("Implementation cost — high end ($)", implCostHigh, setImplCostHigh)}
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card className="border-l-4 border-[#004aad]">
                            <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-[#004aad]" /> Baseline Annual Cost</CardTitle></CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold text-slate-900 mb-2">{fmt(results.baseline)}</div>
                                <div className="text-sm text-slate-600 space-y-1">
                                    <div>Unplanned downtime: <span className="font-semibold">{fmt(results.annualDowntimeCost)}</span></div>
                                    <div>Inspection labour: <span className="font-semibold">{fmt(results.annualInspectionCost)}</span></div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-emerald-600">
                            <CardHeader><CardTitle className="flex items-center gap-2"><TrendingDown className="w-5 h-5 text-emerald-600" /> Projected Annual Savings</CardTitle></CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">Conservative (20%)</div>
                                        <div className="text-2xl font-bold text-emerald-700">{fmt(results.savings20)}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">Expected (35%)</div>
                                        <div className="text-2xl font-bold text-emerald-700">{fmt(results.savings35)}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">Best case (50%)</div>
                                        <div className="text-2xl font-bold text-emerald-700">{fmt(results.savings50)}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-amber-600">
                            <CardHeader><CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5 text-amber-600" /> Break-Even Period</CardTitle></CardHeader>
                            <CardContent>
                                <div className="text-sm text-slate-600 mb-2">Against average implementation of <span className="font-semibold">{fmt(results.avgImpl)}</span>:</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><div className="text-xs text-slate-500">At 20% savings</div><div className="text-xl font-bold">{results.breakEvenMonths20.toFixed(1)} months</div></div>
                                    <div><div className="text-xs text-slate-500">At 35% savings</div><div className="text-xl font-bold">{results.breakEvenMonths35.toFixed(1)} months</div></div>
                                </div>
                            </CardContent>
                        </Card>

                        <Link to="/contact" className="block text-center bg-[#004aad] text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
                            Book a Scoping Demo →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">How the Calculator Works (and Where It's Approximate)</h2>
                    <p className="text-slate-700 mb-4">
                        The baseline is the sum of two well-understood buckets: annual unplanned-downtime cost (hours ×
                        $/hour) and annual inspection-labour cost (assets × hours-per-asset × $/hour). Both are numbers that
                        a reliability or integrity manager can pull from SAP PM or an equivalent system in under an hour.
                        Everything else in the actual P&L — insurance, regulatory, environmental liability, crew safety — we
                        deliberately exclude because the ranges are too wide and industry-specific to model responsibly in
                        a public tool. Treat the baseline as a <em>floor</em>, not the full picture.
                    </p>
                    <p className="text-slate-700 mb-4">
                        The savings bands (20% / 35% / 50%) are calibrated against published case studies in refining,
                        upstream, and power. The 20% floor is achievable with a <em>static twin</em> (Stage 1) that simply
                        consolidates inspection history and ends duplicate reading. The 35% midpoint is where an
                        <em> operational twin</em> (Stage 2) with permanent UT sensors lands after 18-24 months. The 50%
                        ceiling requires a <em>predictive twin</em> (Stage 3) with tuned damage-mechanism models — rare, but
                        documented at several Gulf-Coast refineries and North Sea operators.
                    </p>
                    <p className="text-slate-700 mb-4">
                        Implementation cost ranges $50K at the low end (single-asset static twin, off-the-shelf platform) to
                        $500K at the high end (multi-asset predictive twin with permanent sensor install, custom
                        integrations, and analytics tuning). The calculator uses the mid-point of your range for break-even;
                        if you have a firm quote, enter it as both high and low to lock the number.
                    </p>
                    <p className="text-slate-700 mb-4">
                        A few cautions. Break-even under 12 months is generally too optimistic — real deployments have
                        mobilisation drag. Savings above 50% are extremely rare and usually reflect a baseline that was
                        already exceptionally poor (i.e., the counterfactual was unusually bad, not the twin unusually good).
                        If your calculator output shows 70%+ savings or a 6-month payback, the inputs are almost certainly
                        overstated — sanity-check your downtime hours and $/hr.
                    </p>
                    <p className="text-slate-700">
                        This tool is a conversation-starter, not a business case. When you're ready to build the real model,
                        we'll run a 3-week scoping exercise with your actual SAP PM data, damage-mechanism profile, and
                        sensor count. <Link to="/contact" className="text-[#004aad] font-semibold">Book a demo</Link> and
                        we'll send a worked example from a comparable asset class.
                    </p>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "Digital Twin Platform Hub",
                    "href": "/digital-twins",
                    "description": "Atlantis DT platform features",
                    "icon": "dt"
              },
              {
                    "title": "Digital Twin Readiness Quiz",
                    "href": "/digital-twin-readiness-quiz",
                    "description": "Maturity assessment",
                    "icon": "dt"
              },
              {
                    "title": "Digital Twins NDT Guide 2026",
                    "href": "/digital-twins-ndt-guide-2026",
                    "description": "Implementation roadmap",
                    "icon": "blog"
              },
              {
                    "title": "Fitness for Service per API 579",
                    "href": "/consulting/fitness-for-service-api-579",
                    "description": "ROI from FFS deferrals",
                    "icon": "consulting"
              },
              {
                    "title": "Atlantis NDT ERP Hub",
                    "href": "/erp",
                    "description": "ERP + DT integration",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Senior technical authority",
                    "icon": "consulting"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
