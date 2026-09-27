import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Connection method", atlantis: "REST + APM Datalink (legacy where required)", competitor: "Meridium / GE APM exposes REST and Family Manager APIs" },
    { factor: "Supported APM versions", atlantis: "Meridium APM 4.x (legacy), GE APM 4.6+, GE Vernova APM (current)", competitor: "Same" },
    { factor: "Authentication", atlantis: "OAuth2, API key", competitor: "—" },
    { factor: "Equipment master sync", atlantis: "Bi-directional, Meridium master of record", competitor: "—" },
    { factor: "Inspection record sync", atlantis: "Findings written Atlantis → APM as Inspection records", competitor: "—" },
    { factor: "Deployment time", atlantis: "4–6 weeks typical", competitor: "—" },
    { factor: "Migration option", atlantis: "Full APM-to-Atlantis migration available — 10–14 weeks", competitor: "—" },
    { factor: "Coexistence option", atlantis: "Most common — APM and Atlantis run side-by-side", competitor: "—" },
];

const faqs = [
    { question: "Is this Meridium or GE APM or GE Vernova APM?", answer: "All three — they are the same product line. GE acquired Meridium in 2016 and incorporated it into GE Digital&rsquo;s APM suite. Following GE&rsquo;s 2024 corporate split, the APM products now sit within GE Vernova / GE Digital. The platform code base and data model continue from Meridium 4.x through GE APM 4.6+ to GE Vernova APM. Our integration supports the full lineage." },
    { question: "Why integrate Atlantis with APM rather than replace it?", answer: "Two common reasons. (1) APM is working well for your RBI library and corporate integrity reporting and you don&rsquo;t want to disturb it — but your inspectors want a modern mobile inspection capture tool and a 3D twin of their inspection data, which APM doesn&rsquo;t provide as well. (2) APM is up for renewal but the migration risk is high in the short term — running Atlantis alongside lets you build confidence before any migration decision. Many customers stay in coexistence indefinitely; the two systems do different jobs well." },
    { question: "What about migrating fully off APM?", answer: "Full APM-to-Atlantis migration is a 10–14 week project we&rsquo;ve done multiple times. Equipment master, asset hierarchy, inspection events, and CML registers all migrate via APM&rsquo;s Family Manager APIs and structured data export. Most customers see TCO drop 40–60% and inspector adoption climb sharply within 90 days of cutover." },
    { question: "What stays in APM, what moves to Atlantis (in coexistence)?", answer: "Common pattern: APM remains the system of record for the corporate RBI library, the integrity master data, and the long-term inspection history archive. Findings flow Atlantis → APM as Inspection records; APM remains the corporate reporting source." },
];

export default function MeridiumApmIntegration() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "SoftwareApplication", "name": "Atlantis Digital Twin — Meridium / GE APM Integration", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "description": "Native Meridium APM and GE Vernova APM integration. Equipment master sync, inspection events, CML thickness data. Coexistence or full migration paths.", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }, "provider": { "@type": "Organization", "name": "Atlantis NDT" } },
            { "@type": "Article", "headline": "Atlantis Digital Twin — Meridium / GE APM Integration [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin — Meridium / GE Vernova APM Integration [2026]"
            description="Meridium APM + GE Vernova APM integration: equipment master bi-directional, inspection events, CML thickness data. Coexistence or 10-14 week migration. 4-6 week deploy."
            canonical="https://atlantisndt.com/integrations/meridium-apm"
            eyebrow="Integration"
            h1="Atlantis Digital Twin — Meridium / GE Vernova APM Integration [2026]"
            intro="Native integration to the Meridium / GE Vernova APM lineage. Bi-directional equipment master, inspection events, CML thickness data. Coexist with APM or migrate fully — both paths supported."
            heroGradient="from-emerald-700 to-teal-800"
            competitorLabel="Notes"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/integrations/ge-vernova-apm", title: "GE Vernova APM Integration", blurb: "Current GE Vernova product page (post-2024 split)." },
                { href: "/compare/atlantis-dt-vs-ge-predix", title: "vs GE Predix / APM (Comparison)", blurb: "Modern SaaS vs legacy APM trade-offs." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "Equivalent integration for SAP shops." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP — jobs, certs, equipment, invoicing." },
                { href: "/contact", title: "Book a Scoping Call", blurb: "60-minute call with a Level III consultant + integration architect." },
            ]}
            ctaTitle="Coexist or Migrate — We&rsquo;ll Help You Pick"
            ctaSubtitle="Talk to us about your APM contract status, integrity team adoption, and migration appetite. We&rsquo;ll lay out the options."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Architecture overview</h2>
                    <p>Atlantis Digital Twin connects to Meridium APM and GE Vernova APM via the APM REST APIs and Family Manager APIs. Authentication is OAuth2 (recommended) or API key. We do not require APM administrator privileges.</p>

                    <h2>Two deployment patterns</h2>
                    <h3>Pattern 1 — Coexistence (most common)</h3>
                    <p>APM remains the system of record for the corporate RBI library, the integrity master data, and the long-term inspection history archive. Findings flow Atlantis → APM as Inspection records. The integrity team uses Atlantis for daily work; corporate reporting continues from APM. Implementation: 4–6 weeks of integration build.</p>
                    <h3>Pattern 2 — Migration</h3>
                    <p>Full APM-to-Atlantis migration over 10–14 weeks. Equipment master, asset hierarchy, inspection events, and CML registers all migrate via APM&rsquo;s Family Manager APIs and structured data export. APM is decommissioned at the end. Customers see TCO drop 40–60% and adoption climb sharply within 90 days.</p>

                    <h2>Deployment timeline (coexistence pattern)</h2>
                    <ul>
                        <li><strong>Week 1–2:</strong> APM admin kickoff, integration user provisioning, OAuth2 setup, sandbox connection test, equipment-class schema review.</li>
                        <li><strong>Week 3–4:</strong> Initial equipment master mapping, inspection record write test, integrity team walkthrough.</li>
                        <li><strong>Week 5–6:</strong> User acceptance testing, production cut-over, monitoring live, hypercare.</li>
                    </ul>
                </>
            }
        />
    );
}
