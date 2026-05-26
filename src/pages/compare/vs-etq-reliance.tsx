import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsEtqReliance() {
    return (
        <ErpComparisonPage
            slug="vs-etq-reliance"
            competitorName="ETQ Reliance"
            competitorShortName="ETQ Reliance"
            competitorVendor="ETQ (Hexagon)"
            competitorUrl="https://www.etq.com/products/etq-reliance/"
            metaTitle="Atlantis NDT ERP vs ETQ Reliance 2026 — QMS Platform vs NDT-Native ERP"
            metaDescription="ETQ Reliance QMS vs Atlantis NDT ERP. Dedicated QMS / EHS / compliance platform vs NDT-native ERP. When ETQ wins (regulated manufacturing), when Atlantis wins (inspection services)."
            keywords="etq reliance alternative, atlantis ndt erp vs etq, qms software for inspection, etq comparison, qms vs ndt erp"
            intro="ETQ Reliance is a dedicated QMS / EHS / compliance platform serving regulated manufacturing — life sciences, food & beverage, chemicals, aerospace. Its strength is comprehensive nonconformance, CAPA, supplier quality, audit management, document control, and risk management as a configurable workflow platform. Atlantis NDT ERP includes a QMS module but is fundamentally an inspection-workflow ERP — not a dedicated QMS platform. The honest read: ETQ wins for regulated manufacturers where QMS is a primary investment; Atlantis wins for inspection service companies where QMS is embedded within the inspection workflow."
            competitorWinsTitle="When ETQ Reliance is the right choice"
            competitorWinsLead="ETQ Reliance is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "You are a regulated manufacturer (pharma, biotech, medical device, food, aerospace) where QMS is a primary procurement category.",
                      "You need ETQ's depth in 21 CFR Part 11, GxP validation, ISO 13485, AS9100D supplier quality management.",
                      "Your compliance scope spans manufacturing + supply chain + customer complaints + regulatory submissions.",
                      "You have a dedicated quality organization (Director of Quality, QMS administrator) responsible for ETQ rollout.",
                      "Your QMS budget is separate from operational tools — corporate-level QMS investment."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "You are an inspection service company (NDT, calibration, welding, marine survey) where QMS is operational, not corporate.",
                      "Your QMS scope is ISO 9001 / ISO 17025 / AS9100 audit prep — not pharma GxP / 21 CFR Part 11 depth.",
                      "You need QMS embedded with inspection workflow (CAPA tied to inspection findings, supplier quality tied to sub-contractors) — not a separate QMS platform.",
                      "Your annual QMS / compliance software budget is under $200K — ETQ enterprise tier starts at $100K-$300K/year.",
                      "Your team is 10-150 people and ETQ's enterprise approach is over-scaled."
            ]}
            comparisonRows={[
                      {
                                "dim": "TCO Year 1",
                                "atlantis": "Contact for pricing (inspection + QMS)",
                                "competitor": "$80K-$400K+ (QMS only)"
                      },
                      {
                                "dim": "Primary scope",
                                "atlantis": "Inspection workflow + embedded QMS",
                                "competitor": "Dedicated QMS / EHS / compliance"
                      },
                      {
                                "dim": "NCR / CAPA lifecycle",
                                "atlantis": "Native — tied to inspection findings",
                                "competitor": "Industry-leading depth, configurable workflows"
                      },
                      {
                                "dim": "Supplier quality management",
                                "atlantis": "Sub-contractor scorecards",
                                "competitor": "Industry-leading depth"
                      },
                      {
                                "dim": "Audit management (multi-standard)",
                                "atlantis": "ISO 9001 / 17025 / AS9100 / API Q1 native",
                                "competitor": "Configurable across many standards"
                      },
                      {
                                "dim": "Document control",
                                "atlantis": "Native — controlled procedures + revision history",
                                "competitor": "Industry-leading depth, validated workflows"
                      },
                      {
                                "dim": "21 CFR Part 11 / GxP validation",
                                "atlantis": "Optional Part 11 mode",
                                "competitor": "Industry-leading depth, IQ/OQ/PQ packages"
                      },
                      {
                                "dim": "NDT-native features (ASNT, API ICP)",
                                "atlantis": "Native",
                                "competitor": "Not offered"
                      },
                      {
                                "dim": "Inspection scheduling (API codes)",
                                "atlantis": "Native API 510/570/653",
                                "competitor": "Not offered"
                      },
                      {
                                "dim": "Pricing model",
                                "atlantis": "Per-seat tiered SaaS",
                                "competitor": "Per-user + module add-ons + validation services"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "Inspection workflow + embedded QMS",
                                "competitor": "Comprehensive QMS / EHS for regulated manufacturers"
                      }
            ]}
            migrationParagraph="Migration is rarely the right framing — these serve different scopes. For inspection service companies with simple QMS needs (ISO 9001, ISO 17025, AS9100 audit prep): Atlantis embedded QMS is sufficient and avoids the $100K-$300K/year ETQ cost. For regulated manufacturers (pharma, medical device, aerospace) with dedicated quality organizations: ETQ Reliance is the right anchor; Atlantis can integrate for the inspection-specific workflow. Implementation 4-8 weeks for the integration pattern, $30K-$70K typical."
            scenarios={[
                      {
                                "title": "Small NDT contractor — 8 people, ISO 9001-certified",
                                "description": "Atlantis embedded QMS is sufficient. ETQ Reliance is overscaled — $100K+/year for a 8-person QMS workflow is uneconomic.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Mid-size aerospace NDT shop — 60 people, AS9100D",
                                "description": "Atlantis embedded QMS handles AS9100D audit prep, NCR / CAPA, customer-specific quality clauses (Boeing, Airbus, Pratt & Whitney). For deeper supplier quality management (200+ suppliers), ETQ may add value at higher cost.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Pharma contract manufacturer — 300 employees, FDA / EMA regulated",
                                "description": "ETQ Reliance is the right answer for the dedicated QMS investment. Atlantis adds value only if a specialty industrial inspection scope (e.g., process equipment qualification) becomes a strategic line.",
                                "winner": "competitor"
                      }
            ]}
            faqs={[
                      {
                                "question": "Does Atlantis NDT ERP include a QMS?",
                                "answer": "Yes — embedded QMS module covering ISO 9001:2015, ISO/IEC 17025:2017, ISO 45001:2018, AS9100D, IATF 16949, API Q1 / Q2. Features: NCR / CAPA lifecycle, root-cause analysis (5-Why / fishbone / FMEA), supplier scorecards, customer complaint tracking, management review dashboards, audit-package generation. Adequate for inspection service companies; not a dedicated QMS platform like ETQ."
                      },
                      {
                                "question": "When is Atlantis embedded QMS sufficient vs needing ETQ?",
                                "answer": "Sufficient: inspection service companies (5-150 people), ISO 9001 / 17025 / AS9100 audit prep, embedded with inspection workflow. Needed (ETQ or equivalent): regulated manufacturers (pharma, medical device, aerospace OEM, food / beverage), dedicated quality organization, 21 CFR Part 11 / GxP depth required, $100K+/year QMS investment justified."
                      },
                      {
                                "question": "Can Atlantis integrate with ETQ Reliance?",
                                "answer": "Yes — REST API integration. Inspection findings flow Atlantis to ETQ as NCRs; supplier scorecards from ETQ flow to Atlantis for sub-contractor management. Implementation 3-5 weeks."
                      },
                      {
                                "question": "Does Atlantis support 21 CFR Part 11?",
                                "answer": "Yes — optional Part 11 mode with electronic-signature workflow, audit trail (ALCOA+), tamper-evident time-stamping. IQ / OQ / PQ validation package available for FDA / EMA / ANVISA inspection. Less mature than ETQ's pharma-grade depth but sufficient for many regulated environments."
                      },
                      {
                                "question": "What about supplier quality management depth?",
                                "answer": "Atlantis supplier scorecards track on-time delivery, defect rate (PPM), audit performance, recall history, response-time SLA. ETQ offers deeper supplier-quality workflow (supplier audits at scale, multi-tier supplier visibility, advanced PPAP / production part approval). For inspection service companies with 10-50 sub-contractors, Atlantis is sufficient; for manufacturers with 500+ suppliers, ETQ is better."
                      },
                      {
                                "question": "What about ROI on Atlantis QMS vs ETQ for inspection companies?",
                                "answer": "Typical 60-80% TCO reduction. Inspection service company QMS workflow doesn't require pharma-grade depth — Atlantis embedded QMS covers ISO 9001 / 17025 / AS9100D audit prep at $0 incremental cost vs the standalone Atlantis inspection ERP. ETQ for the same workflow would add $100K-$300K/year."
                      }
            ]}
            ratingValue="4.8"
            ratingCount="92"
            contactSubject="Atlantis NDT ERP vs ETQ Reliance — QMS Architecture Discussion"
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
