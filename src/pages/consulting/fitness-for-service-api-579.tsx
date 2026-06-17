import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import {
    Shield,
    Target,
    CheckCircle,
    FileText,
    Award,
    AlertTriangle,
    BookOpen,
    Layers,
    Settings,
    Phone,
    ArrowRight,
    Briefcase,
    BarChart3,
} from "lucide-react";

export default function FitnessForServiceApi579() {
    const deliverables = [
        { title: "Level 1 Screening Assessment", description: "Rapid screening per API 579-1 Part 4-12, with conservative criteria designed for quick run/repair/replace decisions when the inspection finding is fresh." },
        { title: "Level 2 Engineering Assessment", description: "Refined assessment using actual material properties, operating conditions and detailed flaw characterisation — the typical 'commercial' FFS deliverable." },
        { title: "Level 3 Advanced Analysis", description: "Finite-element analysis (FEA), elastic-plastic fracture mechanics, and probabilistic methods when Level 2 criteria are not met and the equipment cannot be replaced." },
        { title: "Remaining-Life Calculation", description: "Quantitative remaining-life per API 579-1 Annex F for corrosion, creep, fatigue and HTHA damage — with documented assumptions, inputs and sensitivity analysis." },
        { title: "Repair vs. Replace Recommendation", description: "Defensible engineering recommendation with cost-benefit analysis, regulatory implications and operating-envelope restrictions if continued service is approved." },
        { title: "FFS Report (Audit-Defensible)", description: "Full FFS report with executive summary, assessment methodology, inputs, calculations, conclusions, and reviewer/signatory credentials. Suitable for jurisdictional inspector and AI body sign-off." },
        { title: "Operating-Envelope Restrictions", description: "Where continued service requires limits — MAWP de-rating, T/P envelope tightening, inspection re-frequencing — these are documented and integrated into your operating procedures." },
    ];

    const damageTypes = [
        { type: "Part 4 — Brittle Fracture", desc: "Screening against MAT (minimum allowable temperature) curves, exemption charts and impact-test requirements." },
        { type: "Part 5 — General Metal Loss", desc: "Wall-thickness assessment of broad uniform thinning, with corrosion-rate projection." },
        { type: "Part 6 — Local Metal Loss (LTA)", desc: "Localised thin-area (LTA) assessment using RSF and Folias factor methods." },
        { type: "Part 7 — Pitting Corrosion", desc: "Pitting density, depth and pattern assessment with structural-integrity criteria." },
        { type: "Part 8 — Blister + HIC/SOHIC", desc: "Hydrogen-induced damage screening per NACE TM0284 and API 579 Part 8." },
        { type: "Part 9 — Crack-Like Flaws", desc: "Fracture-mechanics-based crack assessment using stress-intensity factor (K) vs. material toughness." },
        { type: "Part 10 — Creep Damage", desc: "Creep-life assessment via Larson-Miller parameter, Omega method or Robinson rule for high-T equipment." },
        { type: "Part 11 — Fire Damage", desc: "Post-fire equipment assessment, hardness surveys, replication and re-rating per API 579 Part 11." },
        { type: "Part 12 — Dents, Gouges, Dent-Gouges", desc: "Pipeline-style dent + gouge assessment using B31.4/B31.8/B31G adapted to ASME equipment." },
    ];

    const credentials = [
        "ASNT Level III in UT (including PAUT/TOFD for crack-sizing inputs to Part 9)",
        "API 510, 570, 653 — the three Authorized Inspector credentials whose codes invoke API 579",
        "ASME Section VIII Div 1/2 — design-code fluency required for Level 2/3 assessments",
        "Engineering degrees + PE / CEng / EurIng licensure for senior assessors",
        "40+ FFS reports per year across refining, petrochemicals, upstream and LNG sectors",
    ];

    const outcomes = [
        { metric: "$14M", label: "Avoided replacement cost — Level 3 FFS justified continued service on a 30-year-old hydrocracker shell (Gulf Coast)" },
        { metric: "6 weeks", label: "Typical Level 2 turnaround for a single pressure-vessel flaw" },
        { metric: "100%", label: "Acceptance rate of FFS reports by jurisdictional inspectors and AI bodies (last 3 years)" },
        { metric: "ZERO", label: "Reportable incidents on FFS-approved equipment continuing in service" },
    ];

    const faqs = [
        { q: "What is API 579-1 / ASME FFS-1?", a: "API 579-1 / ASME FFS-1 (2021 edition) is the joint API-ASME standard for fitness-for-service assessment of pressurised process equipment. It provides quantitative methods for evaluating whether equipment with damage (corrosion, cracks, dents, fire, creep) is fit to continue in service, requires repair, requires de-rating, or must be retired. It is invoked by API 510, 570 and 653, and recognised by jurisdictional inspectors worldwide." },
        { q: "When do I need an FFS assessment?", a: "Any time an inspection finding exceeds the acceptance criteria of the relevant code — wall thickness below tmin, a crack found by UT, a dent on a pipeline, post-fire equipment, HTHA evidence, creep cavitation, etc. Rather than defaulting to repair or replacement, an FFS lets you make a defensible run/repair/replace decision based on actual remaining strength and risk." },
        { q: "Level 1 vs. Level 2 vs. Level 3 — which do I need?", a: "Level 1 is a conservative screening, fast and easy, suitable for clear-cut decisions. Level 2 uses actual material properties and refined assessment — the typical commercial deliverable. Level 3 invokes FEA, EPFM (elastic-plastic fracture mechanics) and probabilistic methods, reserved for high-stakes equipment where Level 2 does not pass but replacement is uneconomic. We typically start at Level 2 and escalate only if needed." },
        { q: "Who can sign an FFS report?", a: "API 579-1 Part 1 requires the assessor to be qualified by training and experience, with the depth of qualification matched to the assessment level. In practice, Level 2 reports are signed by a senior ASNT Level III with API 510/570/653 credentials and 5+ years of FFS experience. Level 3 reports typically require a PE / CEng license plus fracture-mechanics specialisation." },
        { q: "How long does an FFS take?", a: "Level 1 screening: 2-5 days. Level 2 assessment: 3-8 weeks depending on flaw complexity and material data availability. Level 3 (FEA): 8-20 weeks. The pacing constraint is usually access to actual material certificates and complete inspection data — bring those to kick-off and we move fast." },
        { q: "Will the regulator / AI body accept an FFS?", a: "Yes — API 579 is recognised by ABSA, TSSA, PESO, OISD, Aramco Inspection, ADNOC Inspection, KOC, KIPIC, Pertamina, PEMEX, jurisdictional inspectors across the US (Texas, Louisiana, California, Alaska BPV laws), and the AI bodies (ABS Group, Bureau Veritas, Lloyd's, DNV). We have signed reports accepted in every jurisdiction we have worked in." },
        { q: "What about FFS for piping (B31.3, B31.4, B31.8)?", a: "API 579 applies. For piping we additionally invoke API 570, ASME B31G (for pipelines), B31.8S, and the relevant piping code's repair provisions. We have completed many B31.3 process-piping FFS, B31.4 liquid pipeline FFS, B31.8 gas pipeline FFS, and B31.1 power-piping FFS." },
        { q: "Can FFS be used for tanks (API 650/653)?", a: "Yes — API 653 explicitly invokes API 579 for fitness-for-service of in-service storage tanks. Bottom thinning, shell distortion, settlement, and floor-soil interface corrosion are all routinely assessed via FFS. We deliver tank FFS reports accepted by API 653 AI bodies and jurisdictional inspectors." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Fitness-for-Service Assessment per API 579-1 / ASME FFS-1",
                "description": "ASNT Level III consulting for Fitness-for-Service (FFS) assessments per API 579-1 / ASME FFS-1. Level 1/2/3 assessments, remaining-life calculations and audit-defensible FFS reports for pressure equipment, piping and tanks.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "serviceType": "Fitness-for-Service Assessment",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/fitness-for-service-api-579" },
            },
            { "@type": "FAQPage", "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="Fitness-for-Service Consulting — API 579-1 / ASME FFS-1 | Atlantis NDT"
                description="API 579-1 / ASME FFS-1 fitness-for-service assessments. Level 1/2/3 analysis, remaining-life calculations, audit-defensible FFS reports for pressure equipment, piping and tanks. ASNT Level III + API 510/570/653 credentials."
                keywords="API 579 consulting, fitness for service, FFS assessment, ASME FFS-1, remaining life calculation, Level 2 FFS, Level 3 FFS, brittle fracture, HTHA, creep, crack assessment, pressure vessel FFS, piping FFS, tank FFS"
                canonical="https://atlantisndt.com/consulting/fitness-for-service-api-579"
                structuredData={structuredData}
            />
                  <TableOfContents items={[{ id: "overview", label: "FFS API 579 Overview" }, { id: "deliverables", label: "What We Deliver" }, { id: "methodology", label: "Methodology" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

            <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            API 579-1 / ASME FFS-1 — ASNT Level III + API AI
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Fitness-for-Service per API 579</h1>
                        <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                            Defensible Level 1/2/3 FFS assessments, remaining-life calculations and audit-ready reports for pressure equipment, piping and tanks — signed by ASNT Level III + API 510/570/653 Authorized Inspectors.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"><Phone className="mr-2 h-5 w-5" /> Book a Consulting Call</Button></Link>
                            <Link to="/consulting"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">Back to Consulting Hub</Button></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Run, repair, replace — defensibly</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        A wall-thickness reading below tmin, a crack indication in a hydrocracker shell, a 12 mm dent on a 30-inch pipeline, a fire-damaged separator, a creep-cavitated reformer outlet — none of these automatically require replacement, and none of them automatically permit continued service. They require a <strong>fitness-for-service (FFS) assessment</strong> per <strong>API 579-1 / ASME FFS-1</strong> — the joint API-ASME standard for quantitative evaluation of damaged pressure equipment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        API 579-1 covers nine damage types — brittle fracture, general metal loss, local metal loss (LTA), pitting, blisters and hydrogen damage, crack-like flaws, creep, fire damage, and dents/gouges. Each has Level 1 (screening), Level 2 (engineering assessment) and Level 3 (advanced analysis) options, with progressively less conservatism and progressively more required data. The goal: a defensible engineering recommendation that holds up in front of the regulator, the AI body, the corporate process-safety committee and (if necessary) a court.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Atlantis NDT delivers FFS reports across all nine API 579 parts. Our reports are signed by ASNT Level III consultants with API 510/570/653 AI credentials, and have been accepted by jurisdictional inspectors (ABSA, TSSA, PESO, OISD, Texas/Louisiana/California BPV authorities), operator inspection departments (Aramco, ADNOC, KOC, KIPIC, Pertamina, PEMEX) and AI bodies (ABS Group, BV, Lloyd's, DNV) on four continents.
                    </p>
                </div>
            </section>

            {/* Damage Types covered */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">API 579 damage types we assess</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {damageTypes.map((d) => (
                            <Card key={d.type} className="border-l-4 border-l-emerald-500">
                                <CardHeader>
                                    <CardTitle className="text-base flex items-start gap-2">
                                        <CheckCircle className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-0.5" />
                                        {d.type}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-700">{d.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <Shield className="text-emerald-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">{d.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methodology</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">1</div><div><h3 className="text-xl font-semibold mb-2">Inspection Data Validation</h3><p className="text-slate-700">UT thickness maps, crack-sizing PAUT/TOFD data, material certificates, design data sheet are validated against API 579 Part 1 input requirements.</p></div></div>
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">2</div><div><h3 className="text-xl font-semibold mb-2">Level 1 Screening</h3><p className="text-slate-700">Conservative screening per the relevant API 579 part. If the equipment passes Level 1, the assessment can stop here with a documented decision.</p></div></div>
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">3</div><div><h3 className="text-xl font-semibold mb-2">Level 2 Engineering Assessment</h3><p className="text-slate-700">Refined assessment using actual material properties, operating conditions, RSF, Folias factor, stress-intensity factor or other Part-specific methods.</p></div></div>
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">4</div><div><h3 className="text-xl font-semibold mb-2">Level 3 Advanced Analysis (if required)</h3><p className="text-slate-700">FEA, EPFM, probabilistic methods. Invoked only when Level 2 does not pass and replacement is uneconomic.</p></div></div>
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">5</div><div><h3 className="text-xl font-semibold mb-2">Remaining-Life Projection</h3><p className="text-slate-700">Quantitative remaining-life per API 579-1 Annex F. Documented assumptions, corrosion-rate projection, sensitivity analysis.</p></div></div>
                        <div className="flex gap-6 items-start"><div className="flex-shrink-0 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">6</div><div><h3 className="text-xl font-semibold mb-2">Report + Operating-Envelope Restrictions</h3><p className="text-slate-700">Audit-defensible FFS report. Where required, MAWP de-rating, T/P restrictions and re-inspection schedules.</p></div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">ASNT Level III + API AI credentials</h2>
                    <ul className="space-y-3 mt-8">
                        {credentials.map((c) => (
                            <li key={c} className="flex items-start gap-3"><Award className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">{c}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Refineries — hydrocrackers, FCC, reformers, hydrotreaters, atmospheric/vacuum, sulphur recovery</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Petrochemicals — crackers, polyolefin reactors, MEG, oxo, methanol, ammonia</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Upstream — GOSPs, separators, gas treating, flowlines, well-pad equipment</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">LNG — cryogenic vessels, transfer piping, storage tanks per API 620 / API 625</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Pipelines — B31.4/B31.8 liquid + gas pipelines with corrosion, dents, cracks</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Storage Tanks — API 650/653 atmospheric tanks with bottom thinning, settlement, shell distortion</span></li>
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Sample client outcomes</h2>
                    <p className="text-center text-slate-600 mb-10">Anonymised examples from recent FFS engagements.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((o) => (
                            <Card key={o.label}>
                                <CardContent className="pt-6">
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">{o.metric}</div>
                                    <p className="text-sm text-slate-700">{o.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement model</h2>
                    <Card className="border-2 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-slate-700 mb-4"><strong>Affordable. Accessible. Fully Customizable.</strong> Engagement scope is tailored to your damage type, assessment level, equipment criticality and regulatory jurisdiction.</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><BarChart3 className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Level 1 screening:</strong> 3-5 business day turnaround. Contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Briefcase className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Level 2 engineering assessment:</strong> 3-8 weeks delivery. Contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Settings className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Level 3 (FEA) assessment:</strong> 8-20 weeks delivery. Contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Target className="text-emerald-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>FFS programme retainer:</strong> ongoing FFS support across a refinery or fleet. Pricing varies by region and scope — contact us for a tailored quote.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <Card key={f.q}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start gap-3">
                                        <AlertTriangle className="text-emerald-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        {f.q}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-700 leading-relaxed">{f.a}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Found a flaw? Need a defensible FFS?</h2>
                    <p className="text-lg text-emerald-100 mb-8">Most engagements start with a 60-minute scoping call — free, no obligation, NDA available on request. Bring your inspection data and we will tell you whether Level 1 will suffice or whether you need to escalate.</p>
                    <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Book a Consulting Call <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "API 510 Pressure Vessel Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "Vessel FFS engagements",
                    "icon": "consulting"
              },
              {
                    "title": "API 570 Piping Inspector Services",
                    "href": "/consulting/api-570-piping-inspector-services",
                    "description": "Piping FFS engagements",
                    "icon": "consulting"
              },
              {
                    "title": "API 653 Tank Inspector Services",
                    "href": "/consulting/api-653-tank-inspector-services",
                    "description": "Tank FFS engagements",
                    "icon": "consulting"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Senior technical authority",
                    "icon": "consulting"
              },
              {
                    "title": "Atlantis NDT Digital Twin",
                    "href": "/digital-twins",
                    "description": "UT/PAUT 3D + API 579 FFS overlay",
                    "icon": "dt"
              },
              {
                    "title": "Inspection Procedures Management",
                    "href": "/erp/inspection-procedures-management-software",
                    "description": "Procedure depth for FFS assessments",
                    "icon": "erp"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
