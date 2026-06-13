import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsSapPm() {
    return (
        <ErpComparisonPage
            slug="vs-sap-pm"
            competitorName="SAP S/4HANA Asset Management (SAP PM)"
            competitorShortName="SAP PM"
            competitorVendor="SAP"
            competitorUrl="https://www.sap.com/products/scm/intelligent-asset-management.html"
            metaTitle="Atlantis NDT ERP vs SAP S/4HANA Asset Management (SAP PM) 2026 — Honest Comparison"
            metaDescription="SAP S/4HANA Asset Management / SAP PM vs Atlantis NDT ERP. Enterprise SAP-ecosystem fit vs NDT-native deployment, $500K+ SAP vs affordable Atlantis SaaS, ABAP customization vs SaaS configuration. When each wins."
            keywords="sap pm alternative, sap s4hana asset management vs atlantis, sap plant maintenance ndt, sap pm inspection module, sap pm comparison"
            intro="SAP S/4HANA Asset Management (the modern successor to SAP PM) is the right choice when SAP is already your ERP backbone. The integrated financial, procurement, and HR data flow is genuinely valuable for refineries, EPCs, and manufacturers running SAP end-to-end. The honest read: SAP PM wins where SAP is already the system of record and the inspection workflow is a small fraction of overall plant operations. Atlantis NDT ERP wins for pure-play inspection / NDT / calibration / welding service companies where SAP licensing, ABAP / Fiori customization, and 12-24 month implementation timelines are economically prohibitive."
            competitorWinsTitle="When SAP PM is the right choice"
            competitorWinsLead="SAP PM is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "Your company is already a $50M+ SAP customer running S/4HANA or ECC for finance, procurement, and HR — the integrated data fabric is genuinely valuable.",
                      "Inspection is a small fraction of overall plant operations (e.g., refinery, chemical complex, utility) and the maintenance organization is the primary owner.",
                      "You have an existing SAP system integrator partner (Accenture, Capgemini, IBM Consulting, Deloitte) running a multi-year SAP rollout.",
                      "Your regulators require integrated financial-operational data lineage that benefits from a single ERP (e.g., SOX, certain EU regulations).",
                      "You operate in geographies (Germany, China, Brazil) where SAP localization for tax, labor, and statutory reporting is non-trivial to replicate."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "NDT inspection is your core revenue line and SAP S/4HANA licensing economics ($1,500-$3,000/user/year per Functional User) don't justify the deployment.",
                      "You need go-live in 60-90 days, not 12-24 months of ABAP customization and S/4HANA conversion projects.",
                      "Your finance team uses QuickBooks Online, Xero, NetSuite, or Sage Intacct and you don't want to convert to SAP for a single inspection use case.",
                      "You need NDT-native features (ASNT certification, API 510/570/653 scheduling, RBI per API 581, FFS per API 579) as out-of-the-box configuration, not custom Z-code.",
                      "Your team is 10-150 people and a SAP rollout requires a dedicated SAP Basis admin, ABAP developer, and Functional Consultant headcount you cannot justify."
            ]}
            comparisonRows={[
                      {
                                "dim": "Total cost of ownership (Year 1)",
                                "atlantis": "Contact for pricing all-in (SaaS + onboarding)",
                                "competitor": "$500K-$2M+ (S/4HANA license + Asset Mgmt module + implementation)"
                      },
                      {
                                "dim": "Implementation time",
                                "atlantis": "30-90 days configuration-led",
                                "competitor": "12-24 months typical S/4HANA project"
                      },
                      {
                                "dim": "NDT-native features",
                                "atlantis": "ASNT, ISO 9712, PCN, API 510/570/653 native",
                                "competitor": "Generic Plant Maintenance + Asset Manager; NDT requires custom Z-tables and ABAP / Fiori work"
                      },
                      {
                                "dim": "Industry configs (inspection verticals)",
                                "atlantis": "12 inspection vertical configs pre-loaded",
                                "competitor": "SAP industry solutions for Oil & Gas, Utilities, Manufacturing; not NDT-specific"
                      },
                      {
                                "dim": "Mobile field app (offline)",
                                "atlantis": "Native iOS/Android offline capture",
                                "competitor": "SAP Mobile Asset Management / Fiori Mobile - functional but needs configuration"
                      },
                      {
                                "dim": "Cloud deployment",
                                "atlantis": "Multi-tenant SaaS, single-tenant cloud, on-prem",
                                "competitor": "SAP S/4HANA Cloud (public/private), or on-prem ECC"
                      },
                      {
                                "dim": "SAP ecosystem integration",
                                "atlantis": "REST API + IDoc / RFC connectors for SAP S/4HANA",
                                "competitor": "Native (it IS the SAP ecosystem)"
                      },
                      {
                                "dim": "Operator template library (Saudi Aramco SAEP, ADNOC ACS, Petronas PTS)",
                                "atlantis": "Pre-built per major operator",
                                "competitor": "Custom build per project"
                      },
                      {
                                "dim": "Audit-package generation",
                                "atlantis": "One-click ASNT, ISO 17025, AS9100 packs",
                                "competitor": "SAP Audit Information System or custom report build"
                      },
                      {
                                "dim": "Pricing model",
                                "atlantis": "Per-seat tiered SaaS, predictable",
                                "competitor": "Per Functional / Professional User + module licenses + add-ons"
                      },
                      {
                                "dim": "Customer support",
                                "atlantis": "Direct vendor + ASNT Level III on call",
                                "competitor": "SAP Premium Engagement + system integrator partner"
                      },
                      {
                                "dim": "Compliance (ISO 9001, 17025, AS9100D, API Q1)",
                                "atlantis": "Native QMS module",
                                "competitor": "SAP QM + custom mapping per standard"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "NDT inspection workflow, fast deployment, mid-size shops",
                                "competitor": "Enterprise ERP integration, manufacturing-finance data lineage"
                      }
            ]}
            migrationParagraph="Migration from SAP PM to Atlantis NDT ERP rarely makes sense as a wholesale replacement when SAP is the enterprise ERP. The pragmatic pattern is to keep SAP as the financial / asset master and integrate Atlantis via REST API + IDoc / RFC for the inspection-specific workflow. A 6-10 week migration covers SAP equipment master export, ASNT certification data migration via CSV, parallel-run of the next inspection campaign, and operator-template re-creation for codes customized in SAP. Implementation is scoped per project — contact us for a tailored quote. For pure-play NDT companies running QuickBooks / Xero / NetSuite (not SAP), Atlantis is the system of record outright."
            scenarios={[
                      {
                                "title": "Small NDT contractor — 8 people",
                                "description": "Calgary-based pipeline integrity team with 8 inspectors and $2.5M revenue. Atlantis (affordable SaaS) ships in 45 days with native API 1163 and PHMSA reporting. SAP is not procurable at this scale — minimum viable SAP S/4HANA Cloud Public Edition starts at ~$150/user/month for 25-seat minimum plus the inspection module, which is uneconomic.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Mid-size NDT multinational — 100 people",
                                "description": "Atlantis (affordable SaaS, 100 seats) deploys in a 12-week implementation. SAP S/4HANA + Asset Manager would run $350K-$700K/year plus a $500K-$1.2M implementation. Atlantis wins unless the parent group is already on SAP.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Enterprise refinery — 800+ inspection users on SAP",
                                "description": "$15B refinery operating company with 800+ inspection users across 12 plants. SAP PM is the system of record for 80,000+ equipment items. Right pattern: keep SAP for work orders / asset master, integrate Atlantis via IDoc for NDT-specific workflow (CMLs, weld registers, FFS, RBI, 3D twin), let SAP own the maintenance organization. Either alone is wrong.",
                                "winner": "either"
                      }
            ]}
            faqs={[
                      {
                                "question": "Is Atlantis NDT ERP cheaper than SAP for a mid-size inspection company?",
                                "answer": "Yes — typically 4-7x lower 5-year TCO. SAP S/4HANA + Asset Manager for a 100-user inspection company lands at $350K-$700K/year license plus $500K-$1.2M implementation. Atlantis is an affordable SaaS with onboarding inside 12 weeks — pricing varies by region and scope, so contact us for a tailored quote."
                      },
                      {
                                "question": "Can Atlantis integrate with SAP S/4HANA if we want to keep both?",
                                "answer": "Yes. REST API + IDoc / RFC integration with SAP S/4HANA (1909 onwards) and SAP ECC EHP7+. Equipment master and asset hierarchy flow SAP to Atlantis; inspection findings, FFS results, and RBI risk changes flow Atlantis to SAP as Service Notifications or Maintenance Orders. Implementation 4-6 weeks with both sides aligned."
                      },
                      {
                                "question": "What if our finance team uses QuickBooks / NetSuite, not SAP?",
                                "answer": "Atlantis ships with native QuickBooks Online, Xero, NetSuite, Sage Intacct, and Microsoft Dynamics 365 Finance integration. Invoicing flows from approved inspection work orders to your AR; vendor bills flow to AP. For non-SAP finance shops, Atlantis is the right system of record for the inspection P&L."
                      },
                      {
                                "question": "Will my SAP investment go to waste if we add Atlantis?",
                                "answer": "No. Most successful pattern: SAP for everything SAP does best (financials, procurement, asset hierarchy, manufacturing) and Atlantis for the NDT-specific workflow that SAP PM's generic inspection module struggles with. Combined cost is typically lower than SAP plus a customized inspection bolt-on plus a separate FFS / RBI vendor."
                      },
                      {
                                "question": "How does Atlantis handle SAP-required statutory reporting?",
                                "answer": "Atlantis provides inspection data (CMLs, findings, FFS results) via API to SAP for incorporation into SAP-driven statutory reports (e.g., DGUV, EHS, regulator-specific). For Germany / EU / Brazil / Japan localization, SAP retains responsibility for the financial statutory layer; Atlantis owns the inspection operational layer."
                      },
                      {
                                "question": "What about ROI on switching from SAP PM inspection to Atlantis?",
                                "answer": "Typical payback 8-14 months. Drivers: 60% reduction in inspection report production time, elimination of separate FFS / RBI vendor ($150K-$250K/year), 50% reduction in cert / cal admin overhead, removal of expensive Z-code maintenance. Real ROI quote based on your live job backlog during the demo call."
                      }
            ]}
            ratingValue="4.9"
            ratingCount="138"
            contactSubject="Atlantis NDT ERP vs SAP S/4HANA Asset Management — Demo & TCO"
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
