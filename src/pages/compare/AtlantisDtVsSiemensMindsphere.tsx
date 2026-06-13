import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "Subscription tiered by data volume + connected assets — $80K–$600K/yr typical" },
    { factor: "Platform focus", atlantis: "Inspection integrity twin (NDT, FFS, RBI)", competitor: "Industrial IoT platform — telemetry ingestion, MindApps marketplace, Mendix low-code" },
    { factor: "NDT data depth", atlantis: "Native CMLs, weld registers, FFS, RBI, RT/UT/PAUT scans", competitor: "Generic IoT data model; NDT requires custom MindApp or partner overlay" },
    { factor: "Strength", atlantis: "Inspection capture → 3D twin → integrity engineering", competitor: "Edge connectivity, time-series at scale, app marketplace, Mendix builder" },
    { factor: "API 579 / 581", atlantis: "Built-in", competitor: "Not native; requires partner MindApp or external tool" },
    { factor: "3D visualization", atlantis: "Browser WebGL twin native", competitor: "Visual Explorer + partner 3D overlays" },
    { factor: "Implementation", atlantis: "8–14 weeks first asset live", competitor: "12–24 weeks typical including MindApp customization" },
    { factor: "Cloud", atlantis: "AWS, Azure, GCP, on-prem, hybrid, air-gapped", competitor: "Originally AWS/Azure; Siemens Insights Hub rebrand 2023" },
    { factor: "Best fit", atlantis: "Inspection-led integrity programs", competitor: "Connected asset telemetry, OEM equipment monitoring (Siemens-installed base)" },
];

const faqs = [
    { question: "Is MindSphere still called MindSphere?", answer: "Siemens rebranded MindSphere as Siemens Insights Hub in 2023, although &lsquo;MindSphere&rsquo; remains the better-known name in industry. The platform direction has also shifted — Siemens has focused Insights Hub on Siemens-native applications (XCelerator, Mendix, Comos) rather than competing with general industrial IoT platforms. The product is alive and well, but its positioning is more tightly tied to the Siemens automation and lifecycle ecosystem than it was in the early MindSphere days." },
    { question: "When does MindSphere / Insights Hub make more sense than Atlantis?", answer: "When you have a large Siemens-installed base — Siemens PLCs, Siemens drives, Siemens motors — and your priority is OEM telemetry, predictive maintenance on rotating equipment, and tight coupling with the Siemens lifecycle stack (XCelerator, NX, Teamcenter, Mendix). Insights Hub is excellent at that, and its connectivity to Siemens equipment is unmatched. It is not built for inspection integrity workflows like CML thickness tracking or FFS." },
    { question: "Can I use both?", answer: "Yes. Atlantis Digital Twin can pull severity-relevant tags from Insights Hub via REST and use them in RBI scoring (operating pressure, temperature, fluid composition trends). Conversely, Atlantis can push integrity events back to Insights Hub for display alongside process telemetry. Most operators with significant Siemens automation footprint plus an inspection integrity team end up running both." },
    { question: "What about Mendix for building custom inspection apps?", answer: "Mendix (a Siemens company since 2018) is a strong low-code platform for building custom enterprise apps, and you absolutely can build inspection workflow apps on top of it. The trade-off is you&rsquo;re building (and then maintaining) the inspection domain logic yourself — CMLs, t-min calculations, FFS, RBI, weld registers, NDT method-specific data structures. Atlantis ships all of this as a product. The buy-vs-build calculation usually favors Atlantis once you cost the build and the multi-year maintenance properly." },
];

export default function AtlantisDtVsSiemensMindsphere() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs Siemens MindSphere (Insights Hub) [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-siemens-mindsphere" } },
            { "@type": "ItemList", "name": "Atlantis vs Siemens MindSphere", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. MindSphere: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };

    return (
        <ProductPageLayout
            title="Atlantis Digital Twin vs Siemens MindSphere (Insights Hub) [2026 Comparison]"
            description="Siemens MindSphere / Insights Hub vs Atlantis Digital Twin: industrial IoT platform vs inspection integrity twin. Native FFS/RBI, 3D twin, affordable accessible fully customizable SaaS."
            canonical="https://atlantisndt.com/compare/atlantis-dt-vs-siemens-mindsphere"
            eyebrow="Digital Twin vs Industrial IoT"
            h1="Atlantis Digital Twin vs Siemens MindSphere: Inspection Integrity vs Industrial IoT [2026]"
            intro="Siemens MindSphere (rebranded Siemens Insights Hub in 2023) is an industrial IoT platform built for connected-asset telemetry. Atlantis Digital Twin is an inspection integrity twin. Different jobs — here&rsquo;s when to use which."
            heroGradient="from-teal-700 to-emerald-800"
            competitorLabel="Siemens MindSphere / Insights Hub"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/compare/atlantis-dt-vs-ge-predix", title: "vs GE Predix", blurb: "Other major industrial IoT platform — same architectural family." },
                { href: "/compare/atlantis-dt-vs-aspen-mtell", title: "vs Aspen Mtell", blurb: "Predictive maintenance ML platform comparison." },
                { href: "/compare/atlantis-dt-vs-aveva-pi-system", title: "vs AVEVA PI", blurb: "Process historian alternative — different architecture." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP for inspection companies." },
                { href: "/contact", title: "Book a Demo", blurb: "60-minute scoping call with an ASNT Level III consultant." },
            ]}
            ctaTitle="See Atlantis Plug Into Your Siemens Estate"
            ctaSubtitle="We&rsquo;ll demo the integration with a sample Siemens PLC tag set in 30 minutes."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Industrial IoT vs inspection integrity — two different products</h2>
                    <p>Siemens MindSphere launched in 2016 as Siemens&rsquo; bid for the industrial IoT platform market — connected-asset telemetry at scale, an app marketplace (MindApps), and tight coupling to Siemens automation hardware. The platform was rebranded Siemens Insights Hub in 2023 as Siemens narrowed the positioning toward Siemens-native applications and the broader Siemens XCelerator portfolio. The current product is technically capable, well-supported, and has particular strength when you operate a large Siemens-installed base.</p>
                    <p>Atlantis Digital Twin is a different product. It is an inspection integrity twin: built to capture NDT data (UT thickness, RT shots, MT/PT indications, PAUT scans), store CML registers, run API 579 FFS calculations, score API 581 RBI, and visualize all of it on a 3D model in the browser. Its primary user is an inspector or integrity engineer, not a controls engineer or data scientist. Its primary KPI is fewer escalations, fewer surprises, and better integrity engineering decisions — not telemetry ingestion throughput.</p>

                    <h2>Where MindSphere / Insights Hub clearly wins</h2>
                    <ul>
                        <li>You operate a large Siemens-installed base and want native PLC, drive, motor, and instrument connectivity at scale.</li>
                        <li>Your dominant use case is condition-based maintenance on rotating equipment with high-frequency vibration / temperature / current telemetry.</li>
                        <li>You want to leverage the Siemens XCelerator portfolio (NX, Teamcenter, Comos, Mendix) end-to-end.</li>
                        <li>You have an in-house data science team that will build custom MindApps for your use cases.</li>
                    </ul>

                    <h2>Where Atlantis Digital Twin clearly wins</h2>
                    <ul>
                        <li>Your dominant use case is inspection integrity — fixed equipment, vessels, piping, tanks, structural welds.</li>
                        <li>You want a tool that ships with FFS, RBI, weld registers, and NDT method-specific data models out of the box.</li>
                        <li>You prefer affordable, accessible, fully customizable SaaS economics over per-asset / per-tag enterprise pricing.</li>
                        <li>You want named ASNT Level III consulting included rather than sourced through a partner.</li>
                    </ul>

                    <h2>Coexistence pattern (most common)</h2>
                    <p>Operators with significant Siemens automation footprint plus an active inspection integrity program typically run both. Atlantis pulls severity-relevant tags from Insights Hub via REST (operating pressure, temperature, fluid composition trends) and uses them in RBI scoring. Atlantis pushes integrity events back to Insights Hub so they appear alongside process telemetry on the operations dashboards. Each platform does what it&rsquo;s designed for.</p>
                </>
            }
        />
    );
}
