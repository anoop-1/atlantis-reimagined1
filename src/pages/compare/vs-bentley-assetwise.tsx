import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsBentleyAssetwise() {
    return (
        <ErpComparisonPage
            slug="vs-bentley-assetwise"
            competitorName="Bentley AssetWise"
            competitorShortName="Bentley AssetWise"
            competitorVendor="Bentley Systems"
            competitorUrl="https://www.bentley.com/software/assetwise/"
            metaTitle="Atlantis NDT ERP vs Bentley AssetWise 2026 — Honest Comparison"
            metaDescription="Bentley AssetWise (formerly Ivara EXP) vs Atlantis NDT ERP. Infrastructure-asset APM vs inspection-services ERP. When Bentley wins (rail, roads, water), when Atlantis wins (inspection workflow)."
            keywords="bentley assetwise alternative, atlantis ndt erp vs bentley, ivara exp alternative, bentley apm comparison"
            intro="Bentley AssetWise (which absorbed Ivara EXP) is strongest for linear and civil infrastructure asset performance management — rail, roads, bridges, water utilities, transmission grids. Its CAD / BIM ecosystem (MicroStation, OpenRoads, OpenBridge) makes Bentley the natural choice for asset owners where civil engineering data is the primary lens. Atlantis NDT ERP doesn't compete in those infrastructure domains. Atlantis wins for industrial inspection service companies, calibration laboratories, welding fabrication shops, and similar service-business models where Bentley's infrastructure-centric workflow and pricing don't fit."
            competitorWinsTitle="When Bentley AssetWise is the right choice"
            competitorWinsLead="Bentley AssetWise is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "You operate linear / civil infrastructure assets (rail networks, road networks, water utilities, transmission grids) where Bentley CAD / BIM integration is genuinely valuable.",
                      "Your asset model is built on MicroStation, OpenRoads, OpenBridge, or other Bentley civil-engineering tools.",
                      "You are a government / quasi-government entity with established Bentley enterprise license agreements.",
                      "Your inspection workflow is geographically-distributed asset monitoring (bridge inspections, rail track) rather than process-plant equipment inspection.",
                      "You need Bentley's professional services for asset model curation and BIM-to-APM data flow."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "You are an industrial inspection service company (NDT, calibration, welding, marine survey) — Bentley's infrastructure focus doesn't match your asset model.",
                      "Your annual software budget is modest and Bentley enterprise pricing exceeds your envelope.",
                      "You need NDT-native features (ASNT cert, API 510/570/653) as out-of-box configuration, not custom Bentley integration.",
                      "You serve multiple clients and need multi-tenant data isolation — Bentley typically deploys per-customer.",
                      "You need go-live in 8-12 weeks for the next inspection campaign — Bentley implementation is typically 6-12 months."
            ]}
            comparisonRows={[
                      {
                                "dim": "TCO Year 1",
                                "atlantis": "Contact for pricing",
                                "competitor": "enterprise-tier licensing plus Bentley services"
                      },
                      {
                                "dim": "Implementation time",
                                "atlantis": "30-90 days",
                                "competitor": "6-12 months typical"
                      },
                      {
                                "dim": "Primary asset model",
                                "atlantis": "Process plant + industrial equipment",
                                "competitor": "Civil / linear infrastructure"
                      },
                      {
                                "dim": "CAD / BIM integration",
                                "atlantis": "REST API + standard formats (IFC, glTF)",
                                "competitor": "Native MicroStation / OpenRoads / OpenBridge"
                      },
                      {
                                "dim": "NDT-native (ASNT, API ICP)",
                                "atlantis": "Native",
                                "competitor": "Generic inspection module + custom"
                      },
                      {
                                "dim": "Service company multi-tenant",
                                "atlantis": "Yes",
                                "competitor": "No (single-tenant)"
                      },
                      {
                                "dim": "RBI / FFS",
                                "atlantis": "API 581 + API 579 native",
                                "competitor": "Bentley APM module + custom RBI"
                      },
                      {
                                "dim": "Operator template library",
                                "atlantis": "Pre-loaded per major operator",
                                "competitor": "Custom per customer"
                      },
                      {
                                "dim": "Audit packages",
                                "atlantis": "One-click",
                                "competitor": "Custom report builder"
                      },
                      {
                                "dim": "Pricing model",
                                "atlantis": "Per-seat SaaS",
                                "competitor": "Per-asset + per-user enterprise"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "Industrial inspection workflow, multi-client",
                                "competitor": "Civil infrastructure APM, BIM-centric"
                      }
            ]}
            migrationParagraph="Migration from Bentley AssetWise is rare for civil infrastructure customers. For industrial inspection service companies who inherited Bentley via a parent group or acquisition: extract inspection workflow into Atlantis (ASNT certs, work orders, codes, reports), keep Bentley read-only for any infrastructure-specific data. Implementation 4-8 weeks — contact us for a tailored quote. For pure industrial inspection / NDT companies, Atlantis is the system of record outright."
            scenarios={[
                      {
                                "title": "Small industrial inspection contractor — 8 people",
                                "description": "Bentley AssetWise is the wrong tool. Atlantis (affordable SaaS) ships in 45 days with native ASNT tracking, mobile capture, ASME V templates.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Mid-size NDT consultancy — 60 people",
                                "description": "Atlantis (affordable SaaS, 60 seats) deploys in a 10-week implementation. Bentley AssetWise per-user / per-asset pricing for the same inspection workload would exceed $250K/year.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "National rail network operator — 400 users",
                                "description": "Bentley AssetWise is the right choice — rail-track inspection, bridge inspection, BIM integration, civil-engineering data lineage. Atlantis is not the right tool.",
                                "winner": "competitor"
                      }
            ]}
            faqs={[
                      {
                                "question": "Is Atlantis cheaper than Bentley AssetWise for a mid-size inspection company?",
                                "answer": "Yes — typically 3-5x lower TCO for industrial inspection use cases. Bentley for a 50-100 user industrial inspection company lands in enterprise-tier licensing territory. Atlantis is an affordable SaaS with a much lower onboarding spend — pricing varies by region and scope, so contact us for a tailored quote."
                      },
                      {
                                "question": "Can Atlantis integrate with Bentley AssetWise?",
                                "answer": "Yes — REST API integration. Asset hierarchy flow Bentley to Atlantis; inspection findings flow Atlantis to Bentley. Implementation 3-5 weeks."
                      },
                      {
                                "question": "Does Atlantis support BIM / IFC asset models?",
                                "answer": "Yes — IFC and glTF model import. Digital twin module supports 3D model overlay with NDT findings as tags. For deep BIM workflow tied to Bentley's design ecosystem, Bentley remains the deeper choice."
                      },
                      {
                                "question": "What about rail / bridge / road inspection workflows?",
                                "answer": "Atlantis supports generic structural inspection workflow with UT, MT, PT, VT methods. For deep civil infrastructure workflows (rail-track inspection, bridge deck integrity, road pavement), Bentley AssetWise has stronger native support."
                      },
                      {
                                "question": "Can we run both Atlantis and Bentley long-term?",
                                "answer": "Yes — for organizations with both industrial process and civil infrastructure assets. Atlantis owns industrial inspection workflow; Bentley owns civil infrastructure APM. Integration runs 3-5 week implementation timeline."
                      },
                      {
                                "question": "What about Bentley's MicroStation / OpenPlant for plant design integration?",
                                "answer": "Atlantis integrates with MicroStation / OpenPlant via DGN / IFC export. Asset hierarchy flow from plant design models to inspection asset register is supported. Custom-engineering attribute mapping per project."
                      }
            ]}
            ratingValue="4.7"
            ratingCount="82"
            contactSubject="Atlantis NDT ERP vs Bentley AssetWise — Architecture Discussion"
            related={[
                { href: "/compare", label: "All ERP Comparisons", blurb: "Hub: 10 Atlantis NDT ERP vs X comparison pages." },
                { href: "/compare/vs-maximo", label: "vs IBM Maximo", blurb: "Tier-1 EAM platform comparison." },
                { href: "/compare/vs-sap-pm", label: "vs SAP PM", blurb: "Enterprise SAP-ecosystem platform comparison." },
                { href: "/compare/vs-meridium", label: "vs Hexagon Meridium APM", blurb: "Refinery APM / RBI comparison." },
                { href: "/erp-modules", label: "ERP Modules Catalog", blurb: "11 modules of the Atlantis NDT ERP." },
                { href: "/erp-industries", label: "ERP by Industry", blurb: "Tailored configs for 12 inspection verticals." },
                { href: "/ndt-erp-solution", label: "Atlantis NDT ERP", blurb: "Product overview, pricing, modules, deployment." },
                { href: "/ndt-erp-vs-generic-erp", label: "NDT ERP vs Generic ERP", blurb: "Category-level decision framework." },
            ]}
        />
    );
}
