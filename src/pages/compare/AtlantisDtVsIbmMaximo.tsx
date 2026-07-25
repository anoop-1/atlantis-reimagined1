import ProductPageLayout from "@/components/ProductPageLayout";
import CompetitorDeepDive from "@/components/CompetitorDeepDive";

const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "IBM Maximo Application Suite — per-user + per-asset, enterprise tier–$1M+/yr" },
    { factor: "Primary use case", atlantis: "Inspection integrity twin (NDT, FFS, RBI, 3D)", competitor: "EAM + APM — work orders, PM, MRO, condition monitoring, IoT" },
    { factor: "NDT data depth", atlantis: "Native CMLs, weld registers, FFS, RBI, RT/UT/PAUT scans", competitor: "Inspection module is generic; deep NDT typically requires Maximo Health + custom" },
    { factor: "FFS / RBI", atlantis: "Built-in API 579 + API 581", competitor: "Maximo APM Health + Predict; FFS via partner" },
    { factor: "3D twin", atlantis: "Native browser WebGL", competitor: "Maximo Visual Inspection (image/video AI), 3D via partner" },
    { factor: "Implementation", atlantis: "8–14 weeks first asset live", competitor: "20–48 weeks for an enterprise Maximo rollout" },
    { factor: "Strength", atlantis: "Modern SaaS UX, ASNT Level III support included", competitor: "Tier-1 EAM with deep oil &amp; gas, utilities, transit, defense reference base" },
    { factor: "Best fit", atlantis: "Inspection integrity teams who need a focused tool", competitor: "Large enterprises standardizing on a single EAM across asset classes" },
    { factor: "Hosting", atlantis: "AWS/Azure/GCP, on-prem, hybrid, air-gapped", competitor: "IBM Cloud, Red Hat OpenShift, on-prem; SaaS via Maximo Application Suite (MAS)" },
];

const faqs = [
    { question: "Should I replace Maximo with Atlantis?", answer: "Almost never. Maximo is a tier-1 EAM platform with deep capabilities for work order management, preventive maintenance, MRO inventory, technician dispatch, and contracts. If you have Maximo and it&rsquo;s working, keep it. The right pattern is to add Atlantis Digital Twin as the inspection integrity layer alongside Maximo. Atlantis pulls equipment master from Maximo, captures inspection data and runs FFS/RBI in its native model, and pushes findings back to Maximo as Service Requests that route into the standard work order workflow." },
    { question: "What about Maximo&rsquo;s inspection module?", answer: "The inspection capabilities in Maximo (and in MAS Health/Predict) are designed for time-based and condition-based PM inspections. They&rsquo;re generic — a single &lsquo;inspection record&rsquo; with custom fields. They&rsquo;re not designed for the depth of API 510/570/653 fixed-equipment integrity work: CML registers with t-min/t-actual/corrosion rate/projected next inspection date, weld registers with NDT method-by-method acceptance, API 579 FFS calculations, API 581 RBI scoring. Operators who try to do all of this in Maximo end up with a heavily customized inspection module that&rsquo;s expensive to maintain and not loved by the integrity team." },
    { question: "How does the integration work?", answer: "Bi-directional REST integration via Maximo&rsquo;s OSLC and REST APIs. Asset hierarchy and equipment master flow Maximo → Atlantis (Maximo is the system of record). Inspection findings, FFS/RBI risk changes, and recommended work flow Atlantis → Maximo as Service Requests / Notifications. Cost data and work order completions flow back. Implementation is 3–4 weeks once both sides have a sponsor. We support Maximo 7.6, 8.x, and Maximo Application Suite (MAS)." },
    { question: "What about Maximo Visual Inspection?", answer: "MVI is IBM&rsquo;s computer-vision product for image-based defect detection (usually surface defects on manufactured goods, occasionally welds). It&rsquo;s a useful tool for the right narrow use case but it is not a replacement for an inspection integrity workflow — it doesn&rsquo;t handle CML thickness tracking, FFS, RBI, weld registers, or 3D twin visualization. If you have MVI for surface defect detection, Atlantis is complementary: MVI on the production line for surface defects, Atlantis for fixed-equipment integrity." },
];

export default function AtlantisDtVsIbmMaximo() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs IBM Maximo: Inspection Integrity vs EAM [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-ibm-maximo" } },
            { "@type": "ItemList", "name": "Atlantis vs IBM Maximo", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Maximo: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin vs IBM Maximo: Inspection Integrity vs EAM [2026 Features Guide]"
            description="IBM Maximo (MAS) vs Atlantis Digital Twin: tier-1 EAM vs inspection integrity twin. Maximo at enterprise tier-$1M vs Atlantis affordable accessible fully customizable SaaS, FFS/RBI native, when to run both. Honest 2026 guide."
            canonical="https://atlantisndt.com/compare/atlantis-dt-vs-ibm-maximo"
            eyebrow="Digital Twin vs IBM Maximo"
            h1="Atlantis Digital Twin vs IBM Maximo: Inspection Integrity vs EAM [2026]"
            intro="IBM Maximo Application Suite is a tier-1 enterprise asset management platform — best in class at work orders, MRO, and asset hierarchies. Atlantis Digital Twin is an inspection integrity twin. Most operators run both. Here&rsquo;s how to think about the boundary."
            heroGradient="from-sky-700 to-blue-800"
            competitorLabel="IBM Maximo (MAS)"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/integrations/ibm-maximo", title: "IBM Maximo Integration", blurb: "Architecture, REST endpoints, deployment time." },
                { href: "/compare/atlantis-dt-vs-hexagon-eam", title: "vs Hexagon EAM", blurb: "Other major EAM platform with similar trade-offs." },
                { href: "/compare/atlantis-dt-vs-ge-predix", title: "vs GE Predix / APM", blurb: "Meridium-derived APM comparison." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP — jobs, certs, equipment, invoicing." },
                { href: "/contact", title: "Book a Demo", blurb: "60-minute scoping call with an ASNT Level III consultant." },
            ]}
            ctaTitle="See Atlantis Plug Into Your Maximo"
            ctaSubtitle="We&rsquo;ll demo the integration with a sample Maximo asset and show inspection findings flowing as Service Requests."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Maximo and Atlantis solve adjacent problems</h2>
                    <p>IBM Maximo is one of the longest-running, most widely deployed enterprise asset management platforms in industry — refineries, utilities, transit authorities, defense, oil &amp; gas operators, and pharma all run Maximo at scale. Its strengths are work order management, preventive maintenance scheduling, MRO inventory, technician dispatch, contracts, and the Maximo Application Suite (MAS) extensions including Health, Predict, Visual Inspection, and Manage. The platform is mature, scales to hundreds of thousands of equipment items, and has an unmatched reference base.</p>
                    <p>Atlantis Digital Twin is not in the EAM business. It is built for inspection integrity — the workflow that lives between &lsquo;an inspector takes UT thickness readings on a vessel&rsquo; and &lsquo;an integrity engineer decides whether the vessel is fit for continued service.&rsquo; That workflow is fundamentally about CML registers, corrosion rates, FFS calculations, RBI scoring, weld maps, NDT data archiving, and 3D visualization of integrity state — not about scheduling work orders.</p>

                    <h2>The honest summary</h2>
                    <ul>
                        <li><strong>Use IBM Maximo</strong> as your enterprise asset management system: work orders, PM scheduling, MRO inventory, technician dispatch, contracts. Don&rsquo;t replace it.</li>
                        <li><strong>Use Atlantis Digital Twin</strong> as your inspection integrity layer: inspection capture, CML thickness tracking, FFS, RBI, weld registers, 3D twin.</li>
                        <li><strong>Connect them</strong> via REST so inspection findings raise Maximo Service Requests and Maximo equipment master flows into Atlantis.</li>
                    </ul>

                    <h2>Where Maximo&rsquo;s inspection module falls short for fixed equipment</h2>
                    <p>Maximo handles &lsquo;an inspection&rsquo; as a record with custom fields — fine for PM inspections where you want a checklist and a few readings. It is not designed for the structural depth of fixed-equipment integrity:</p>
                    <ul>
                        <li>CML registers with location ID, t-nominal, t-min, t-actual, retirement thickness, calculated corrosion rate, projected next inspection date — typically built with Maximo custom apps and a lot of consultant time.</li>
                        <li>API 579 FFS calculations — not present, requires bolt-on (Becht FFS, E2G PlantStream) or external spreadsheets.</li>
                        <li>API 581 RBI — partial in MAS Health/Predict, but typically supplemented with partner platforms (Antea, Meridium GE APM).</li>
                        <li>Weld registers with NDT method-by-method acceptance, heat number, welder ID, repair history.</li>
                        <li>Live 3D twin — not in Maximo&rsquo;s scope; requires a separate visualization tool.</li>
                    </ul>

                    <h2>Integration architecture</h2>
                    <p>The standard integration is bi-directional REST via Maximo&rsquo;s OSLC and REST APIs. Asset hierarchy, equipment master, locations, and PM job plans flow Maximo → Atlantis (Maximo is the system of record). Inspection findings, FFS/RBI risk changes, recommended corrective work, and integrity status changes flow Atlantis → Maximo as Service Requests or Notifications which then route into the standard Maximo work order workflow. Cost actuals and work completion data flow back to close the loop in Atlantis. Implementation is 3–4 weeks of integration build once both sides have a project sponsor.</p>
                <CompetitorDeepDive slug="ibm-maximo" />
            </>
            }
        />
    );
}
