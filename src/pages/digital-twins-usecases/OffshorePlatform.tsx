import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Asset count (typical platform)", atlantis: "600–2,000 fixed-equipment items + jacket / topsides structure + risers", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Splash zone corrosion, jacket member corrosion, conductor wear, riser fatigue, topsides CUI, sour service in produced fluids", competitor: "—" },
    { factor: "Code references", atlantis: "API 510/570, API 2A-WSD, API 17B (risers), DNV-OS-C101, NORSOK M-503, NACE SP0102", competitor: "—" },
    { factor: "Inspection access", atlantis: "Helideck / vessel access only, weather-window driven, ROV for below-water, drone where airspace permits", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$1.5M–$5M/yr through turnaround optimization + integrity defensibility + class survey efficiency", competitor: "—" },
    { factor: "Implementation", atlantis: "12–16 weeks for first platform live", competitor: "—" },
    { factor: "Inspection cycle", atlantis: "Topsides aligned to operator integrity program; jacket and underwater per class society / national regulator (NPD, OGA, BSEE)", competitor: "—" },
];

const faqs = [
    { question: "Is offshore platform integrity different from FPSO integrity?", answer: "Significant overlap on the topsides side — same process equipment integrity workflow, same marine-environment damage mechanisms, similar inspection access constraints. Different on the structural side — fixed offshore platforms have a jacket (steel structural framework) below water rather than a hull, with different inspection access (ROV-led) and different damage mechanisms (member corrosion, conductor wear, mud-line scour). Atlantis Digital Twin treats fixed offshore platforms as a distinct workflow with the structural data model adapted accordingly." },
    { question: "How does jacket inspection work in the platform?", answer: "Jacket member inspection is ROV-led (typically annual + post-event). Atlantis stores per-member records — chord and brace inspection results, member thickness, weld condition, cathodic protection performance, marine growth coverage. The 3D jacket model overlays inspection state — accessible vs marine-growth-obscured, anode condition, member thickness — so structural engineers can review the integrity status at a glance. ROV video archives link to inspection records for post-inspection review." },
    { question: "What about riser inspection?", answer: "Risers (steel catenary risers, top-tensioned risers, flexible risers) are tracked as separate equipment classes with API 17B / 17J / 17K-aligned inspection workflows. Top-end inspection at the platform interface, mid-water inspection by ROV, and touch-down zone inspection (for SCRs) all flow into the riser asset record. Fatigue accumulation is calculated from the platform&rsquo;s metocean data feed where available — riser fatigue is one of the highest-consequence integrity threats." },
    { question: "Conductor and well casing inspection?", answer: "Conductor wear inspection (top-of-hanger to mud-line) is tracked per well with caliper inspection results, ROV video archives, and casing growth measurements. Conductor corrosion / wear is a slow-moving but high-consequence threat — Atlantis maintains the multi-decade record needed for defensible inspection planning." },
    { question: "Drone inspection on offshore platforms?", answer: "Increasingly common where airspace and helideck operations permit. Topsides drone inspection — flare boom, derrick, crane structure, vessel external — captures imagery and IR data that imports as structured records. Reduces rope access requirements, which is valuable for both safety and cost reasons." },
];

export default function OffshorePlatformUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Offshore Platforms: Topsides + Jacket + Riser Integrity [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/offshore-platform" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Offshore Platforms: Topsides + Jacket + Riser [2026]"
            description="Offshore platform digital twin: topsides API 510/570, jacket member ROV inspection, riser fatigue (API 17B), conductor wear. NORSOK M-503 / API 2A-WSD aligned. $1.5M-$5M/yr ROI."
            canonical="https://atlantisndt.com/digital-twins/offshore-platform"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Offshore Platforms: Topsides + Jacket + Riser Integrity [2026]"
            intro="Fixed offshore platforms combine refinery-style topsides integrity with structural jacket inspection, riser fatigue management, and conductor wear tracking. Atlantis Digital Twin manages all of it in one platform, aligned to API 2A-WSD, API 17B, and NORSOK M-503."
            heroGradient="from-indigo-700 to-blue-800"
            competitorLabel="Offshore Platform Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/fpso", title: "FPSO", blurb: "Floating production alternative — topsides + hull + mooring." },
                { href: "/digital-twins/subsea", title: "Subsea Equipment", blurb: "Subsea wellhead and flowline integrity workflow." },
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Onshore process integrity equivalent." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "How Atlantis fits with offshore operator SAP / Maximo landscape." },
                { href: "/contact", title: "Book an Offshore Demo", blurb: "Bring a topsides asset list and a jacket ROV survey. We&rsquo;ll show your platform as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Platform as a Live Integrity Twin"
            ctaSubtitle="Topsides + jacket + riser + conductor in one platform. Bring a sample data set, leave with a working twin demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Fixed offshore platforms are integrity-intense</h2>
                    <p>A fixed offshore platform combines the topsides process integrity workload of a small refinery with the structural integrity workload of a large steel structure in a corrosive marine environment, plus risers carrying produced fluids from the seabed to the platform deck. Inspection access is constrained — helideck / supply vessel only, weather-window driven, and the underwater inspection happens by ROV. The North Sea, Gulf of Mexico, West Africa, and increasingly the Eastern Mediterranean and Brazilian basins have hundreds of platforms in operation, many past their original design life and operating under integrity-led life-extension programs. Atlantis Digital Twin manages the full integrity workflow in one platform.</p>

                    <h2>Topsides integrity</h2>
                    <p>Same workflow as a refinery process unit but with marine-environment damage mechanism calibration. CMLs, FFS, RBI, weld registers, NDT scan archive — calibrated for sour-service produced fluids, marine-environment CUI, salt-spray-driven external corrosion. API 571 templates pre-loaded for offshore-relevant mechanisms. The 3D topsides model color-codes integrity state with click-through to the full asset record.</p>

                    <h2>Jacket structure</h2>
                    <p>Jacket member inspection (chords, braces, joint cans) is ROV-led with annual or biennial campaigns plus post-event inspection (after major storms). Atlantis stores per-member records — wall thickness, weld condition, cathodic protection performance, marine growth coverage, anode wastage. Joint inspection per API RP 2A-WSD recommended practice. The 3D jacket model overlays inspection state so structural engineers can see the integrity picture at a glance. ROV video archives link to inspection records for post-inspection review and dispute resolution.</p>

                    <h2>Riser integrity</h2>
                    <p>Risers — top-tensioned, steel catenary, flexible — are some of the highest-consequence integrity assets on an offshore platform. Atlantis tracks risers as separate equipment classes with API 17B / 17J / 17K-aligned inspection workflows: top-end inspection at the platform interface, mid-water inspection by ROV (clamp condition, coating breakdown, anode performance), and touch-down zone inspection for SCRs. Fatigue accumulation calculated from metocean data feed where available. Riser failure consequence is severe — RBI scoring weights it heavily.</p>

                    <h2>Conductor and well casing</h2>
                    <p>Conductor wear inspection (top-of-hanger to mud-line) is tracked per well with caliper inspection results, ROV video archives, and casing growth measurements. Conductor wear is slow-moving but high-consequence — Atlantis maintains the multi-decade record needed for defensible inspection planning and well intervention scheduling.</p>

                    <h2>Splash zone</h2>
                    <p>Splash zone is the highest-corrosion-rate area on the structure (similar pattern to FPSO). Dedicated workflow: segmented member records, coating breakdown tracking, anode wastage records, ICCP performance logging. Drives a meaningful share of the structural inspection workload.</p>

                    <h2>Inspection access realities</h2>
                    <p>Atlantis surfaces access status on every inspection record — topsides accessible vs scaffold required vs hot work required, jacket member ROV-required vs marine-growth-obscured, riser inspection vessel-window-required. Inspection planning is realistic rather than aspirational. Drone inspection on topsides where airspace and helideck operations permit reduces rope access requirements (safety and cost win).</p>

                    <h2>ROI for offshore platform operators</h2>
                    <ul>
                        <li><strong>Turnaround / shutdown optimization:</strong> Inspection windows are scarce — better scoping of the limited windows is high-value.</li>
                        <li><strong>Avoided unplanned shutdown:</strong> A single integrity-driven shutdown event can be $5M–$50M+ in lost production. Even small probability reduction has large expected-value impact.</li>
                        <li><strong>Class survey / regulatory efficiency:</strong> Structured record reduces preparation effort for class society and national regulator audits.</li>
                        <li><strong>Life extension defensibility:</strong> Many platforms operate past original design life — the integrity record is the defensible basis for life extension applications.</li>
                    </ul>
                </>
            }
        />
    );
}
