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
    CheckCircle,
    Award,
    Briefcase,
    AlertTriangle,
    BookOpen,
    Layers,
    Phone,
    ArrowRight,
    Wrench,
    Database,
} from "lucide-react";

export default function Api653TankInspectorServices() {
    const deliverables = [
        { title: "API 653 External In-Service Inspection", description: "Routine and formal external inspections per API 653 2018 (5th Ed. + Addenda) — shell, roof, bottom course, foundation, settlement (cosine-curve + plane tilt), coating, ladders, gauges, valves. Output: signed external inspection report + recommended internal interval." },
        { title: "API 653 Internal Out-of-Service Inspection", description: "Bottom plate MFL scanning, shell course UT thickness grids, internal floating-roof seal inspections, sump &amp; nozzle examinations, settlement re-survey, NDE re-test of repaired welds. Full out-of-service inspection report with remaining-life calculations." },
        { title: "RBI Program for Tank Farms (API 580/581)", description: "Plant-wide risk-based inspection program covering atmospheric tanks (cone, dome, floating roof), low-pressure tanks and bulk product terminals. LoF per API 581 Annex 2.D (storage tank), CoF per API 581 Part 3 with release modelling, secondary containment credit and detection effectiveness." },
        { title: "Fitness-for-Service per API 579-1 / ASME FFS-1 2021", description: "Level 1, 2 and 3 FFS assessments for general metal loss, local thin areas (LTA), pitting corrosion, blisters, dents, weld misalignment, brittle fracture &amp; fatigue — applied to shell, bottom plate, annular ring and roof. Signed by an API 579 practitioner." },
        { title: "Repair, Alteration &amp; Reconstruction Scope Development", description: "Code-defensible repair scope per API 653 Part 9 — bottom plate replacement, shell plate replacement, shell-to-bottom weld repair, lap-patch versus butt-weld scope, anchor chair rebuild, settlement correction. Includes WPS / PQR review and qualified NDE techniques." },
        { title: "Settlement Analysis &amp; Plane Tilt Survey", description: "Survey-grade settlement measurement (cosine curve + plane tilt + edge settlement) per API 653 Annex B — analysed against acceptance criteria with predictions for the next inspection interval. Survey crew + Level III interpretation." },
        { title: "Bottom Plate MFL / UT Mapping &amp; Reporting", description: "Calibrated MFL scanning (top-side + bottom-side discrimination) and follow-up UT confirmation on critical-zone plate, lap welds and sketch plates. Plate-by-plate corrosion map with remaining-thickness statistics and re-inspection recommendation." },
    ];

    const methodology = [
        { step: "1", title: "Scope &amp; Tank Population Definition", text: "Equipment register review, prior inspection history, product service (crude, refined, ethanol, sour water, chemicals), customer code basis (API 653 2018, NFPA 30, OSHA 1910.106, EPA SPCC, PHMSA 195) and shutdown calendar." },
        { step: "2", title: "External Inspection Mobilisation", text: "Certified API 653 inspector on-site for shell, roof, bottom course, foundation, settlement, coating, appurtenances. NDE crew supports with UT thickness grids and MT/PT on critical welds." },
        { step: "3", title: "Internal Inspection (Out-of-Service)", text: "Confined-space entry, bottom plate MFL scanning, shell course UT grids, nozzle inspections, NDE on previous repair welds, floating roof seal and pontoon inspection (where applicable)." },
        { step: "4", title: "FFS &amp; Remaining-Life Calculation", text: "API 579 Level 1/2 assessment on shell metal loss, bottom plate LTA, settlement-induced stress, weld misalignment. Remaining corrosion rate &amp; remaining life per API 653 6.4." },
        { step: "5", title: "Inspection Report &amp; Repair Scope", text: "Signed inspection report per API 653 Part 12 plus prioritised repair scope per API 653 Part 9 — bottom plate replacement, shell course replacement, settlement correction, anchor &amp; nozzle work." },
        { step: "6", title: "RBI Program Implementation (Optional)", text: "Tank-farm RBI per API 580/581 Annex 2.D. Generates risk-ranked external + internal inspection intervals, replacing fixed-interval default schedules and reducing inspection spend 30-50%." },
    ];

    const caseStudies = [
        {
            title: "Gulf Coast refinery — 124-tank farm RBI program + first-cycle external inspections",
            text: "A US Gulf Coast refinery wanted to consolidate inspection across 124 atmospheric tanks (crude, gasoline, distillate, slop). We delivered a tank-farm RBI program per API 580/581 Annex 2.D, ran 28 external inspections in the first 90 days, and rebuilt the inspection-interval schedule. Result: 38% reduction in annual inspection spend, two leaking bottom plates caught in time, full PHMSA audit defence pack ready." },
        {
            title: "Middle East terminal — 18-tank settlement &amp; FFS campaign",
            text: "An Eastern-Province GCC product terminal had three out of 18 tanks flagged for excessive plane tilt and edge settlement after a 25-year service interval. We mobilised a survey crew + an API 579 practitioner. Result: 11 tanks cleared by FFS Level 2 (no repair), 5 tanks scheduled for settlement correction at next out-of-service window, 2 tanks taken out of service for foundation rebuild. Customer avoided ~$6M of premature shell-plate replacement." },
        {
            title: "Indian chemical plant — internal inspection + repair scope for two stainless tanks",
            text: "An Indian specialty chemicals plant had two stainless steel storage tanks (304L, 22-year-old) with suspected chloride-stress corrosion cracking on the shell-to-bottom weld. We ran the out-of-service inspection — PT on the inside, UT thickness mapping, dye-pen on critical welds — and authored the repair scope per API 653 Part 9. Result: SCC confirmed on tank 1 (shell-to-bottom weld replaced and re-tested per ASME V), tank 2 cleared for service for another 10 years." },
        {
            title: "Indonesian fuel terminal — RBI bottom-plate MFL campaign across 42 tanks",
            text: "An Indonesian downstream operator wanted to risk-rank bottom-plate inspections across a 42-tank fuel distribution terminal. We deployed a calibrated MFL crew with a Level III interpreter. Risk-based prioritisation reduced internal-inspection scope from 42 to 19 tanks across the next 5-year cycle, with three high-risk tanks pulled forward for immediate inspection (one had through-wall pitting). Full audit-defence package delivered." },
    ];

    const industries = [
        "Refineries — crude, distillate, gasoline, asphalt, slop, sour water (API 650 cone &amp; dome roof, API 620 low-pressure)",
        "Product terminals &amp; bulk distribution (gasoline, diesel, jet, ethanol, biodiesel)",
        "Chemical plants — solvents, acids, caustic, glycol, methanol (stainless steel, lined, glass-lined)",
        "Tank farms for upstream production (oil &amp; produced water tanks, NGL spheres = scope-adjacent)",
        "Petrochemical complexes — aromatics, olefins, polyolefin storage",
        "LNG / cryogenic out-of-scope but adjacent cryo-water &amp; refrigerant storage",
        "Power generation — fuel oil tanks, demin water, ammonia storage",
        "Ports, marine terminals &amp; ship-loading facilities",
    ];

    const faqs = [
        { q: "What does API 653 cover that the original API 650 did not?", a: "API 650 is the construction code for new atmospheric storage tanks. API 653 (current edition: API 653 2018, 5th Edition with Addenda) is the in-service code — it covers external &amp; internal inspection intervals, inspector qualifications, repair, alteration, dismantling and reconstruction of existing tanks. Every welded, atmospheric, vertical, cylindrical tank built originally to API 650 (or another recognised code) falls under API 653 the moment it enters service." },
        { q: "How often does API 653 require external and internal inspection?", a: "External inspection: maximum 5 years between formal inspections per API 653 6.3.2.2, supplemented by monthly visual surveys. Internal (out-of-service) inspection: interval set by corrosion rate but never longer than 20 years from the previous internal inspection (API 653 6.4.2.2). Both intervals can be extended via a documented RBI program per API 580/581 Annex 2.D — typically the right answer for large tank populations." },
        { q: "Can RBI per API 580/581 replace the API 653 fixed inspection interval?", a: "Yes. API 653 6.3.4 explicitly allows RBI-based intervals as an alternative to the calendar default, provided the program meets API 580 minimums (documented damage mechanism review, LoF/CoF calculation, inspection effectiveness credit, re-assessment triggers, signed by qualified personnel). Atlantis NDT delivers tank-farm RBI programs sized to your equipment population and customer audit calendar." },
        { q: "Do you use MFL or UT for bottom plate inspection?", a: "Both — sequentially. MFL is the screening tool (fast, calibrated, sensitive to top-side vs. bottom-side wall loss). UT (manual or array) is the confirmation tool on indications above the action threshold. Atlantis NDT&apos;s API 653 inspectors are also ASNT Level III in UT, so the interpretation is unified — no hand-off between an MFL vendor and a separate Level III." },
        { q: "Can Atlantis NDT sign as the API 653 Authorized Inspector on the certified report?", a: "Yes. Our consulting team holds active API 653 certifications and we sign the Inspection Report (API 653 Part 12) and the Repair / Alteration record (Part 9) as the Authorized Inspector on engagements where that responsibility is in scope. Combine with ASNT Level III procedure approval and you have one signed authority across both the inspection and the NDE." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "API 653 Tank Inspector Services",
                "description": "Atlantis API 653 certified tank inspectors — external/internal inspection, RBI per API 580/581 Annex 2.D, FFS per API 579-1/ASME FFS-1 2021, repair scope per API 653 Part 9. Refineries, terminals, chemical plants.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "serviceType": "API 653 Storage Tank Inspection",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "hasCredential": [
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "API 653 Authorized Inspector" },
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "ASNT Level III" },
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "API 579 Practitioner" },
                ],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/api-653-tank-inspector-services" },
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="API 653 Tank Inspector Services — Storage Tank Inspection"
                description="Atlantis API 653 certified tank inspectors — external/internal inspection, RBI, FFS per API 579, repair scope. Refineries, terminals, chemical plants."
                keywords="api 653 inspector, api 653 certified inspector, api 653 tank inspector services, storage tank inspection, atmospheric tank inspection, tank farm RBI, API 580 storage tank, API 653 repair, bottom plate MFL, tank settlement survey, API 579 FFS tank"
                canonical="https://atlantisndt.com/consulting/api-653-tank-inspector-services"
                structuredData={structuredData}
            />
                  <TableOfContents items={[{ id: "overview", label: "API 653 Service Overview" }, { id: "deliverables", label: "What We Deliver" }, { id: "methodology", label: "Methodology" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            API 653 2018 (5th Ed.) — API 579 FFS — API 581 RBI
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">API 653 Tank Inspector Services</h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                            Certified API 653 Authorized Inspectors backed by ASNT Level III NDE authority. External &amp; internal inspections, tank-farm RBI per API 580/581, FFS per API 579-1, and code-defensible repair scope per API 653 Part 9 — for refineries, terminals and chemical plants worldwide. Affordable, accessible, fully customizable engagements.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                                    <Phone className="mr-2 h-5 w-5" /> Request a Quote
                                </Button>
                            </Link>
                            <Link to="/consulting">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                                    Back to Consulting Hub
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">From compliance check to integrity program</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Storage tanks are simultaneously the cheapest large asset on a refinery, the easiest to over-inspect, and the most expensive to fail. A single bottom-plate leak triggers SPCC reporting, secondary-containment scrutiny, lost product, soil remediation and — at the worst end of the curve — a process safety incident. The codified response is <strong>API 653 2018 (5th Edition + Addenda)</strong> — the in-service inspection, repair, alteration and reconstruction code for atmospheric, vertical, cylindrical, welded carbon and stainless steel storage tanks.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Atlantis NDT delivers the full API 653 service line — external in-service inspections, internal out-of-service inspections (with bottom-plate MFL + UT confirmation), settlement and plane-tilt surveys, repair scope per Part 9, and tank-farm RBI programs per <strong>API 580 / 581 Annex 2.D</strong> that replace fixed-interval inspection with risk-ranked intervals. Fitness-for-service work uses <strong>API 579-1 / ASME FFS-1 2021</strong> at Level 1, 2 or 3 depending on the indication and the consequence. Every inspection report is signed by a certified API 653 Authorized Inspector, and every NDE technique is signed by an ASNT Level III consultant on the same team — no hand-off, no responsibility gap.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        We work for refineries, product terminals, bulk distribution operators, chemical plants, petrochemical complexes, fuel terminals, power-station fuel oil farms and port operators. Engagements are <strong>affordable, accessible and fully customizable</strong> — scoped to the tank population, regulatory framework and audit calendar in play. Pricing varies by region and scope — quote on request.
                    </p>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-amber-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <CheckCircle className="text-amber-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: d.title }} />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: d.description }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methodology — how an API 653 engagement runs</h2>
                    <div className="space-y-6">
                        {methodology.map((m) => (
                            <div key={m.step} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: m.title }} />
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: m.text }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Credentials backing every signed report</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <Card>
                            <CardHeader>
                                <Award className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>API 653 Authorized Inspector</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">Certified to inspect, sign and authorize repair / alteration / reconstruction of in-service atmospheric storage tanks per API 653 2018.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Shield className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>API 579 Practitioner</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">Signed FFS assessments per API 579-1 / ASME FFS-1 2021 — Level 1, 2, 3 — for shell metal loss, LTA, settlement-induced stress and weld misalignment.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <BookOpen className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>ASNT Level III + API 580/581</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">UT, MT, PT, VT method authority for every NDE technique. API 580/581 RBI experience across 40+ tank farms.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {industries.map((i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Layers className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: i }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Case studies */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 text-center">Sample client outcomes</h2>
                    <p className="text-center text-slate-600 mb-10">Anonymised — reference letters available under NDA.</p>
                    <div className="space-y-6">
                        {caseStudies.map((c) => (
                            <Card key={c.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-start gap-3 text-lg">
                                        <Briefcase className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: c.title }} />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.text }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement model — no pricing */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement model</h2>
                    <Card className="border-2 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-slate-700 mb-4"><strong>Affordable. Accessible. Fully Customizable.</strong> Engagement scope is tailored to tank population, regulatory framework and shutdown window. Pricing varies by region and scope — quote on request.</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><Wrench className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>External in-service inspection campaign:</strong> mobilised inspector + NDE crew, fixed-fee per-tank. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><Database className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Internal out-of-service inspection:</strong> bottom MFL + UT + shell + nozzles + settlement, signed report per API 653 Part 12. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><Shield className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Tank-farm RBI program (API 580/581 Annex 2.D):</strong> 25-200+ tank engagements. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><AlertTriangle className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>FFS &amp; repair scope (API 579 + API 653 Part 9):</strong> remaining-life calculation + signed repair scope. Quote on request.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <Card key={f.q}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start gap-3">
                                        <AlertTriangle className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        {f.q}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section className="py-12 bg-white border-t">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Related consulting service lines</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/consulting/asnt-level-iii-consulting-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">ASNT Level III Consulting Services</div>
                            <div className="text-sm text-slate-600 mt-1">SNT-TC-1A Written Practice, outsourced Level III of record, procedure development.</div>
                        </Link>
                        <Link to="/consulting/api-510-pressure-vessel-inspector-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">API 510 Pressure Vessel Inspector Services</div>
                            <div className="text-sm text-slate-600 mt-1">In-service inspection programs, RBI per API 581, FFS per API 579.</div>
                        </Link>
                        <Link to="/consulting/api-570-piping-inspector-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">API 570 Piping Inspector Services</div>
                            <div className="text-sm text-slate-600 mt-1">Process piping audits, CUI surveys, RBI implementation.</div>
                        </Link>
                        <Link to="/consulting/rbi-program-design" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">RBI Program Design (API 580/581)</div>
                            <div className="text-sm text-slate-600 mt-1">Plant-wide risk-based inspection program design.</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to plan an API 653 campaign?</h2>
                    <p className="text-lg text-slate-200 mb-8">
                        Start with a 30-minute scoping call. We will tell you the inspection sequence, the NDE method stack, the settlement-survey approach and the RBI option for your tank farm. Affordable, accessible, fully customizable engagements — quote on request.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                            Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "API 653 Certification Prep 2026",
                    "href": "/api-653-certification",
                    "description": "Tank inspector exam prep",
                    "icon": "cert"
              },
              {
                    "title": "API 510 Pressure Vessel Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "Sister service line — vessels",
                    "icon": "consulting"
              },
              {
                    "title": "API 570 Piping Inspector Services",
                    "href": "/consulting/api-570-piping-inspector-services",
                    "description": "Sister service line — piping",
                    "icon": "consulting"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Outsourced Level III of record",
                    "icon": "consulting"
              },
              {
                    "title": "Fitness for Service per API 579",
                    "href": "/consulting/fitness-for-service-api-579",
                    "description": "Tank settlement + bottom FFS",
                    "icon": "consulting"
              },
              {
                    "title": "Digital Twin for Storage Tanks",
                    "href": "/digital-twins/storage-tank",
                    "description": "Bottom-plate corrosion overlay",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
