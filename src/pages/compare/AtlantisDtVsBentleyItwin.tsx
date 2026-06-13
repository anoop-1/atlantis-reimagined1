import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "iTwin Platform usage-based + per-user; Bentley OpenPlant per-seat. $80K–$500K/yr typical for an integrity-scope deployment" },
    { factor: "Twin lineage", atlantis: "Inspection-record-led — 3D twin generated from asset model + inspection data", competitor: "CAD/BIM-led — twin built from MicroStation, OpenPlant, ContextCapture reality models" },
    { factor: "Strength", atlantis: "Inspection workflow, FFS, RBI, NDT data archive, Level III support", competitor: "Reality modeling, photogrammetry, BIM/engineering CAD lineage, 4D construction sequencing" },
    { factor: "NDT data depth", atlantis: "Native CMLs, weld registers, FFS, RBI", competitor: "iTwin hosts data via custom apps; NDT not native" },
    { factor: "FFS / RBI", atlantis: "Built-in", competitor: "Requires partner integration or custom development on iTwin platform" },
    { factor: "3D fidelity", atlantis: "Browser WebGL, light-weight, fast", competitor: "Best-in-class fidelity from MicroStation/ContextCapture lineage; heavier client" },
    { factor: "Reality modeling", atlantis: "Imports point clouds, photogrammetry from external tools", competitor: "Native — ContextCapture and Bentley Reality Modeling are best-in-class" },
    { factor: "Implementation", atlantis: "8–14 weeks first asset live", competitor: "16–32 weeks for an iTwin platform inspection use case" },
    { factor: "Best fit", atlantis: "Operating-asset inspection integrity teams", competitor: "Engineering-CAD-led owners, large infrastructure projects, capital construction" },
];

const faqs = [
    { question: "Are Bentley iTwin and Atlantis Digital Twin really competitors?", answer: "Only at the surface — both call themselves &lsquo;digital twin&rsquo; products, but they come from very different lineages and solve different jobs. Bentley iTwin is built on Bentley&rsquo;s long heritage in engineering CAD (MicroStation, OpenPlant, ContextCapture, Bentley Reality Modeling). It excels at federating CAD models, BIM data, and reality captures (photogrammetry, point clouds) into a navigable 3D twin — the design / construction / handover side of the asset lifecycle. Atlantis Digital Twin is built on the inspection record and exists for the operating side — capturing UT thickness, scoring RBI, calculating FFS, and showing live integrity state on a 3D model. They&rsquo;re complementary as much as competitive." },
    { question: "When does Bentley iTwin clearly win?", answer: "When your dominant use case is engineering CAD federation — large infrastructure (rail, road, water, power transmission), capital construction projects, BIM-mandated handovers, photogrammetry-heavy reality modeling. Bentley&rsquo;s tools are best-in-class for these workflows. iTwin is the right answer when the people in the seat are designers, BIM coordinators, or construction managers, not inspectors." },
    { question: "When does Atlantis win?", answer: "When the people in the seat are inspectors and integrity engineers, the dominant data is NDT (UT thickness, RT, MT/PT, PAUT), the dominant calculation is FFS / RBI / corrosion rate / inspection interval, and the operating asset is fixed equipment (vessels, piping, tanks, exchangers, structures). Atlantis ships these workflows native; iTwin would require building them on top of the platform — possible but expensive and slow." },
    { question: "Can the two be integrated?", answer: "Yes, and we&rsquo;ve seen this pattern at large infrastructure owners. Bentley iTwin holds the engineering / construction model and the reality-capture data. Atlantis Digital Twin holds the operating inspection record and runs FFS/RBI. Asset master and 3D geometry flow iTwin → Atlantis (via glTF or IFC export). Inspection events, integrity status changes, and findings flow Atlantis → iTwin so they appear on the federated owner view. Integration is custom but well-supported on both sides — typically 6–10 weeks of build." },
];

export default function AtlantisDtVsBentleyItwin() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs Bentley iTwin: Inspection vs CAD/BIM Twin [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-bentley-itwin" } },
            { "@type": "ItemList", "name": "Atlantis vs Bentley iTwin", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Bentley iTwin: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin vs Bentley iTwin: Inspection Twin vs CAD/BIM Twin [2026]"
            description="Bentley iTwin vs Atlantis Digital Twin: CAD/BIM-rooted federation twin vs inspection-record-rooted integrity twin. Pricing, NDT depth, when each wins. 2026 buyer guide."
            canonical="https://atlantisndt.com/compare/atlantis-dt-vs-bentley-itwin"
            eyebrow="Inspection Twin vs CAD/BIM Twin"
            h1="Atlantis Digital Twin vs Bentley iTwin: Inspection vs CAD/BIM Twin [2026]"
            intro="Bentley iTwin federates CAD, BIM, and reality-capture data into a navigable engineering twin. Atlantis Digital Twin captures inspection data and runs integrity engineering on a live 3D model. Different lineages, complementary jobs."
            heroGradient="from-indigo-700 to-violet-800"
            competitorLabel="Bentley iTwin"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/compare/atlantis-dt-vs-aveva-pi-system", title: "vs AVEVA PI", blurb: "Process historian comparison." },
                { href: "/compare/atlantis-dt-vs-hexagon-eam", title: "vs Hexagon EAM", blurb: "EAM-rooted comparison." },
                { href: "/compare/atlantis-dt-vs-aspen-mtell", title: "vs Aspen Mtell", blurb: "Predictive maintenance ML platform." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features and case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP — jobs, certs, equipment, invoicing." },
                { href: "/contact", title: "Book a Demo", blurb: "60-minute scoping call with an ASNT Level III consultant." },
            ]}
            ctaTitle="See Atlantis Pull from Your iTwin"
            ctaSubtitle="We can ingest geometry, BIM data, and reality models from iTwin and overlay live inspection state."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Two twins, different lineages</h2>
                    <p>Bentley Systems has been the engineering CAD / BIM company for industrial and infrastructure owners since the MicroStation days. Their digital twin product, iTwin, is built natively on that lineage: the twin starts as a federated engineering model — design CAD, BIM data, ContextCapture reality models, point clouds — and adds operational data on top. iTwin is best-in-class for design-to-construction-to-handover lifecycles, federation of large-scale engineering data, and BIM-mandated owner-operator handovers in infrastructure (rail, road, water, power transmission).</p>
                    <p>Atlantis Digital Twin starts at the other end of the asset lifecycle. The twin starts as the inspection record — UT thickness CMLs, RT shots, MT/PT indications, PAUT scans, weld registers — and the 3D model is the visualization layer that makes the inspection data navigable. Atlantis is built for the operating phase, not the design phase. Its primary user is an inspector or integrity engineer, not a designer or BIM coordinator.</p>

                    <h2>Where Bentley iTwin clearly wins</h2>
                    <ul>
                        <li>Capital construction projects and asset handover scenarios where BIM mandates the digital deliverable.</li>
                        <li>Large infrastructure owners with reality-modeling-heavy workflows (photogrammetry, LiDAR, terrestrial scanning).</li>
                        <li>Engineering CAD federation across MicroStation, OpenPlant, AutoCAD, Revit.</li>
                        <li>4D construction sequencing and visualization.</li>
                    </ul>

                    <h2>Where Atlantis wins</h2>
                    <ul>
                        <li>Operating-phase inspection integrity for fixed equipment (vessels, piping, tanks, structures).</li>
                        <li>NDT data archiving and overlay (UT thickness heat-maps, RT shot indexing, PAUT scan storage).</li>
                        <li>Native API 579 FFS and API 581 RBI engineering.</li>
                        <li>SaaS economics on a tool the integrity team actually uses daily.</li>
                    </ul>

                    <h2>Coexistence pattern</h2>
                    <p>Large infrastructure and industrial owners commonly run both. iTwin holds the federated engineering model and the reality-capture data. Atlantis pulls the geometry and asset hierarchy from iTwin (via glTF or IFC export), captures and stores the operating inspection record, and pushes inspection events and integrity status changes back to iTwin so they appear on the federated owner view. This pattern delivers the best of both: engineering CAD lineage from Bentley plus operating integrity workflow from Atlantis.</p>
                </>
            }
        />
    );
}
