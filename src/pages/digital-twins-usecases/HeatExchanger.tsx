import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical refinery)", atlantis: "150–600 heat exchangers + air coolers", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Tube-side internal corrosion, shell-side external corrosion, vibration fatigue, tube-to-tubesheet weld failure, cooling water fouling, dewpoint corrosion", competitor: "—" },
    { factor: "Inspection methods", atlantis: "Eddy current bobbin + array, IRIS (ultrasonic tube), MFL on bundle, hydrotest, thickness CMLs on shell", competitor: "—" },
    { factor: "Code references", atlantis: "API 510 (shell), TEMA (mechanical design), HTRI (thermal), API 661 (air-cooled), HEI (heat exchange institute)", competitor: "—" },
    { factor: "Tube count typical", atlantis: "200–6,000 tubes per bundle", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$300K–$1.2M/yr per refinery — bundle replacement deferral + plug program optimization + tube failure avoidance", competitor: "—" },
    { factor: "Implementation", atlantis: "Heat exchanger workflow ships as part of refinery / petrochem deployment", competitor: "—" },
];

const faqs = [
    { question: "How does Atlantis handle heat exchanger tube inspection data?", answer: "Eddy current bobbin and array probe data from major eddy current platforms (Eddyfi MS5800, Zetec, Olympus OmniScan) imports natively as tube-by-tube inspection records. The data model captures tube ID, signal class (no defect, suspect, defect, plugged), depth interpretation, and inspector confirmation. The 3D bundle model overlays tube status with color-coding so integrity engineers can see the bundle condition at a glance. Multi-inspection trending across outages drives bundle remaining-life and replacement vs continued-service decisions." },
    { question: "What about IRIS (ultrasonic tube inspection)?", answer: "IRIS data from Eddyfi and similar platforms imports natively. IRIS provides quantitative wall thickness measurement that complements the qualitative defect detection from eddy current. Combined eddy current + IRIS workflow is supported — eddy current screens the bundle, IRIS quantifies thickness on suspect tubes. Some operators run IRIS-only on critical bundles (sour service, hydroprocessing) where defect quantification is essential." },
    { question: "Air-cooled heat exchangers (fin-fan)?", answer: "Air-cooled heat exchangers — common in refinery / petrochem for crude / vacuum overhead, hydrogen plant, gas plant cooling — get specific workflow per API 661. Fin condition, tube external corrosion, header inspection, and fan / drive condition all flow into the air-cooler asset record. Air-side fouling (a major performance issue) is tracked alongside integrity." },
    { question: "How does the bundle replacement decision get made?", answer: "Bundle replacement is one of the highest-cost integrity decisions on a heat exchanger — bundle cost typically enterprise tier–$2M, plus outage time and disposal. Atlantis tracks the multi-inspection trend of plugged tube count, defect progression, and remaining-life calculations to support a defensible bundle replacement decision. The integrity team can show the trend curve and the engineering rationale rather than offering a judgment call." },
    { question: "Plug program optimization?", answer: "Plugging tubes reduces bundle thermal capacity. There&rsquo;s an economic limit beyond which plugging more tubes is more expensive than replacing the bundle. Atlantis tracks the plugged-tube trend and calculates the implied performance impact, supporting the operator&rsquo;s plug-vs-retube decision logic. Most refineries report better-aligned plug programs after 12–24 months on the platform." },
];

export default function HeatExchangerUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Heat Exchangers: Tube Inspection, Plug Programs, Bundle Decisions [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/heat-exchanger" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Heat Exchangers: ECT/IRIS Tube Inspection, Plug Programs [2026]"
            description="Heat exchanger digital twin: eddy current + IRIS tube inspection import, bundle remaining-life trending, plug program optimization, air-cooler workflow per API 661. $300K-$1.2M/yr ROI."
            canonical="https://atlantisndt.com/digital-twins/heat-exchanger"
            eyebrow="Asset-Class Use Case"
            h1="Atlantis Digital Twin for Heat Exchangers: ECT/IRIS Inspection to Bundle Decisions [2026]"
            intro="Heat exchangers are 150–600 of the most maintenance-intensive assets in any refinery or petrochem plant. Atlantis Digital Twin manages the eddy current / IRIS tube inspection workflow, plug program optimization, and bundle replacement decisions in one platform — with multi-outage trending."
            heroGradient="from-cyan-700 to-blue-800"
            competitorLabel="Heat Exchanger Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Heat exchanger workflow as part of full refinery integrity." },
                { href: "/digital-twins/pressure-vessel", title: "Pressure Vessel", blurb: "Adjacent asset class — same API 510 workflow on the shell side." },
                { href: "/digital-twins/petrochemical-complex", title: "Petrochem Complex", blurb: "Heat exchanger workflow in petrochem service environments." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/eddy-current-tube-inspection", title: "Eddy Current Tube Inspection", blurb: "The inspection method underpinning the workflow." },
                { href: "/contact", title: "Book an HX Demo", blurb: "Bring a tube inspection report. We&rsquo;ll show your bundle as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Heat Exchanger Bundles as Live Integrity Twins"
            ctaSubtitle="Bring an eddy current report and your bundle history. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Heat exchangers deserve dedicated workflow attention</h2>
                    <p>A typical refinery has 150–600 heat exchangers (shell &amp; tube + air-cooled fin-fans), and they generate a disproportionate share of inspection work, plug program decisions, and bundle replacement spend. Bundle replacement decisions can be enterprise tier–$2M per bundle. Plug programs determine the operating envelope. Tube failures cause unplanned shutdowns. The integrity team needs structured, multi-outage data to make defensible decisions — not a folder of PDF inspection reports per outage.</p>

                    <h2>Inspection workflow per bundle</h2>
                    <h3>Eddy current bobbin and array</h3>
                    <p>Inspection data from major eddy current platforms (Eddyfi MS5800, Zetec MIZ-200, Olympus OmniScan) imports natively as tube-by-tube records. Tube ID, signal class (no defect / suspect / defect / plugged), depth interpretation, length-of-defect, and inspector confirmation all live in the structured record. The 3D bundle model overlays tube status — green / yellow / red / gray (plugged) — so integrity engineers see the bundle condition at a glance.</p>

                    <h3>IRIS (Internal Rotating Inspection System)</h3>
                    <p>IRIS provides quantitative wall thickness measurement on the tube. IRIS data imports natively. Combined eddy current + IRIS workflow is supported — eddy current screens the bundle, IRIS quantifies thickness on suspect tubes. Some operators run IRIS-only on critical bundles (sour service, hydroprocessing) where defect quantification is essential.</p>

                    <h3>MFL on bundle and helical scans</h3>
                    <p>Magnetic Flux Leakage scans (less common but used on specific bundle configurations) and helical eddy current scans for non-bobbin geometry are supported.</p>

                    <h3>Shell-side integrity</h3>
                    <p>Shell, channel, and tubesheet inspection follows the standard API 510 workflow with CMLs and external visual inspection. Integration with the broader pressure vessel workflow means the shell record connects naturally to the bundle record.</p>

                    <h2>Air-cooled heat exchangers (fin-fans)</h2>
                    <p>Air-cooled heat exchangers — common for crude / vacuum overhead, hydrogen plant cooling, gas plant cooling — get dedicated workflow per API 661. Fin condition tracking, tube external corrosion, header box inspection, and fan / gearbox condition all flow into the air-cooler asset record. Air-side fouling tracked alongside integrity since it&rsquo;s a major performance issue.</p>

                    <h2>Bundle replacement decision support</h2>
                    <p>Bundle replacement is one of the highest-cost decisions on a heat exchanger. Atlantis tracks the multi-inspection trend — plugged tube count over time, defect progression, IRIS-derived thickness trend, calculated remaining life — and surfaces the data the integrity team needs to make a defensible decision. Plug programs have an economic limit (plugging more tubes reduces bundle thermal capacity); Atlantis calculates the implied performance impact so the plug-vs-retube tipping point is visible.</p>

                    <h2>Vibration fatigue tracking</h2>
                    <p>Tube vibration fatigue is a common failure mode on steam-side and high-velocity gas-side bundles. Atlantis tracks tube failure history per tube row / per bundle position to identify vibration-driven failure patterns. Combined with thermal-hydraulic re-analysis (HTRI rerun on suspect bundles), this supports tube-stake or anti-vibration baffle modifications during planned bundle work.</p>

                    <h2>ROI for heat exchanger workflow</h2>
                    <ul>
                        <li><strong>Bundle replacement deferral:</strong> Defensible &lsquo;continue in service&rsquo; decisions defer enterprise tier–$2M bundle costs by 1–3 years on average.</li>
                        <li><strong>Plug program optimization:</strong> Avoiding premature retubing on bundles where plug count is well below the economic limit.</li>
                        <li><strong>Tube failure avoidance:</strong> Better-targeted inspection catches failure precursors before tube rupture causes unplanned shutdown.</li>
                        <li><strong>Inspection efficiency:</strong> Structured workflow reduces post-inspection data wrangling time by 30–50%.</li>
                    </ul>
                <UsecaseDeepDive slug="heat-exchanger" />
                </>
            }
        />
    );
}
