import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsProcore() {
    return (
        <ErpComparisonPage
            slug="vs-procore"
            competitorName="Procore"
            competitorShortName="Procore"
            competitorVendor="Procore Technologies"
            competitorUrl="https://www.procore.com/"
            metaTitle="Atlantis NDT ERP vs Procore 2026 — Construction QA vs NDT-Native ERP"
            metaDescription="Procore construction management vs Atlantis NDT ERP. Construction project management vs inspection-services ERP. When Procore wins (general contracting), when Atlantis wins (specialty inspection)."
            keywords="procore alternative inspection, atlantis ndt erp vs procore, procore for ndt, procore construction qa, ndt erp vs procore"
            intro="Procore is the dominant construction management platform — project management, daily logs, RFIs, submittals, drawings, punch lists for general contractors, owners, and specialty contractors on construction projects. Atlantis NDT ERP overlaps with Procore only at the QA / QC layer for construction projects. The honest read: Procore wins for general construction project management; Atlantis wins for specialty industrial inspection workflow that extends beyond the construction phase into operating-asset integrity management."
            competitorWinsTitle="When Procore is the right choice"
            competitorWinsLead="Procore is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "You are a general contractor managing construction projects end-to-end (cost, schedule, RFIs, submittals, change orders, financials).",
                      "Your scope is construction-phase project management — not operating-asset integrity beyond commissioning.",
                      "You need Procore's broader ecosystem (Procore Financials, Procore Estimating, Procore Bid Management).",
                      "Your team is already on Procore for non-inspection scope and adding a separate inspection tool creates workflow friction.",
                      "Your projects are short-duration construction (under 3 years) with clear handover to owner / operator on completion."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "Your inspection scope extends beyond construction into operating-asset integrity (turnarounds, plant maintenance, RBI, FFS).",
                      "You are an industrial inspection service company (NDT, calibration, welding) serving operators across construction + operations.",
                      "You need NDT-native features (ASNT, ISO 9712, API 510/570/653, RBI) that Procore's generic QA / QC module doesn't cover.",
                      "Your team is 5-50 people focused on specialty inspection — Procore enterprise pricing is over-scaled for you.",
                      "You serve multiple clients with different inspection scopes and need multi-tenant data isolation."
            ]}
            comparisonRows={[
                      {
                                "dim": "TCO Year 1",
                                "atlantis": "Contact for pricing",
                                "competitor": "$30K-enterprise tier+ (Procore subscription + modules)"
                      },
                      {
                                "dim": "Primary scope",
                                "atlantis": "Inspection workflow across construction + operations",
                                "competitor": "Construction project management"
                      },
                      {
                                "dim": "Construction RFIs / submittals / drawings",
                                "atlantis": "Light (inspection-relevant only)",
                                "competitor": "Comprehensive construction PM"
                      },
                      {
                                "dim": "NDT-native features (ASNT, API ICP)",
                                "atlantis": "Native",
                                "competitor": "Generic inspection module + custom"
                      },
                      {
                                "dim": "Operating-asset integrity (RBI, FFS, turnarounds)",
                                "atlantis": "Native API 581 / 579",
                                "competitor": "Not the intended scope"
                      },
                      {
                                "dim": "Multi-tenant for service providers",
                                "atlantis": "Yes",
                                "competitor": "Yes — Procore multi-project"
                      },
                      {
                                "dim": "Customer-format reports (API / ASME / AWS)",
                                "atlantis": "Pre-built per code",
                                "competitor": "Custom build per project"
                      },
                      {
                                "dim": "Calibration tracking",
                                "atlantis": "Native ISO 17025-ready",
                                "competitor": "Not offered"
                      },
                      {
                                "dim": "Audit packages (ASNT, ISO 17025, AS9100)",
                                "atlantis": "One-click native",
                                "competitor": "Custom build via Procore Reports"
                      },
                      {
                                "dim": "Pricing model",
                                "atlantis": "Per-seat tiered SaaS",
                                "competitor": "Annual subscription + module add-ons"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "Specialty industrial inspection workflow, operating-asset integrity",
                                "competitor": "Construction project management"
                      }
            ]}
            migrationParagraph="Migration is rarely the right framing — these tools serve different scopes. Pragmatic pattern for inspection service companies working construction projects: Procore as the project-management system of record (RFIs, submittals, daily logs, drawings) for the construction phase; Atlantis as the inspection-specific system for ASNT cert tracking, API code scheduling, NDT reports, audit packages. Integration via REST API flows inspection findings into Procore as RFIs / observations. For pure-play industrial inspection companies (operating-phase scope), Atlantis is the system of record outright."
            scenarios={[
                      {
                                "title": "Small industrial inspection contractor — 8 people",
                                "description": "Atlantis (affordable SaaS) is the right system. Procore is overkill — construction PM scope isn't needed for operating-asset inspection.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Mid-size NDT consultancy — 50 people serving construction + operations",
                                "description": "Atlantis (affordable SaaS) for inspection workflow; clients may require Procore access for construction phase. Multi-client data flows from Atlantis to client Procore instances via API.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "General contractor — 200 users, $500M annual revenue",
                                "description": "Procore is the right answer for the broader business. Inspection scope is small fraction. Atlantis adds value if specialty industrial inspection becomes a strategic line.",
                                "winner": "competitor"
                      }
            ]}
            faqs={[
                      {
                                "question": "Is Atlantis cheaper than Procore for a small inspection company?",
                                "answer": "Yes typically. Procore for a 10-20 user team lands at $30K-$80K/year + module add-ons. Atlantis is an affordable SaaS with inspection-specific features Procore doesn't have — pricing varies by region and scope, so contact us for a tailored quote."
                      },
                      {
                                "question": "Does Atlantis integrate with Procore?",
                                "answer": "Yes — REST API integration. Inspection findings flow Atlantis to Procore as RFIs / observations; project structure / customer master flow Procore to Atlantis. Implementation 3-5 weeks."
                      },
                      {
                                "question": "What does Procore do that Atlantis doesn't?",
                                "answer": "Construction-phase project management — RFIs, submittals, drawings, daily logs, punch lists, construction financials, change orders, bid management. Atlantis is built for specialty inspection workflow, not full construction PM."
                      },
                      {
                                "question": "What does Atlantis do that Procore doesn't?",
                                "answer": "ASNT / ISO 9712 / PCN certification tracking with expiry alerts, API 510/570/653 inspection scheduling, RBI per API 581, FFS per API 579, operator-template library (Saudi Aramco, ADNOC, Petronas, etc.), inspection report generation (API formats), multi-client compliance dashboards, calibration tracking, radioactive-source tracking."
                      },
                      {
                                "question": "Can we use both Procore (for construction) and Atlantis (for inspection)?",
                                "answer": "Yes — recommended for construction QA contractors. Procore owns construction project management; Atlantis owns specialty inspection workflow. Integration runs 3-5 week implementation timeline."
                      },
                      {
                                "question": "What about ITP execution — is Procore or Atlantis better?",
                                "answer": "Both support ITP execution. Procore's ITP workflow is generic and well-integrated with construction RFIs / submittals. Atlantis ITP workflow is specialized for industrial QA / QC with hold-point / witness-inspection workflow tied to ASNT-qualified inspectors. For NDT-heavy projects, Atlantis is stronger; for general construction, Procore is more complete."
                      }
            ]}
            ratingValue="4.8"
            ratingCount="108"
            contactSubject="Atlantis NDT ERP + Procore — Architecture Discussion"
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
