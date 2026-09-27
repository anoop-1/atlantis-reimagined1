import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsMeridium() {
    return (
        <ErpComparisonPage
            slug="vs-meridium"
            competitorName="Hexagon Meridium APM"
            competitorShortName="Hexagon Meridium"
            competitorVendor="Hexagon"
            competitorUrl="https://hexagon.com/products/meridium-apm"
            metaTitle="Atlantis NDT ERP vs Hexagon Meridium APM 2026 — Honest APM & Inspection Software Comparison"
            metaDescription="Hexagon Meridium APM vs Atlantis NDT ERP: the refinery APM leader (RBI / FFS modules) vs an NDT-native inspection ERP. Meridium $400K-$2M vs an affordable, accessible Atlantis subscription, mature damage-mechanism library vs operator-template approach."
            keywords="meridium apm alternative, atlantis ndt erp vs meridium, hexagon meridium comparison, meridium rbi"
            intro="Hexagon Meridium APM (formerly GE / Bently Nevada / Meridium) is the industry standard for refinery Asset Performance Management. Its API 581 RBI engine, API 579 FFS calculators, and damage-mechanism library are mature, validated by decades of refinery deployments, and supported by Hexagon's services team. Atlantis NDT ERP does not pretend to replace Meridium where Meridium genuinely wins — at $5B+ refinery operators with established RBI programs. Atlantis wins for inspection service companies and smaller operators where Meridium's $400K-$2M+ enterprise pricing and 9-18 month implementation are economically prohibitive."
            competitorWinsTitle="When Hexagon Meridium is the right choice"
            competitorWinsLead="Hexagon Meridium is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "You operate a $5B+ refinery / petrochemical complex with an established API 581 RBI program and a mature damage-mechanism library.",
                      "Your reliability and integrity engineering organization has 10+ years of Meridium reference data and historical analysis you cannot lose.",
                      "You need GE Bently Nevada vibration monitoring integration or Hexagon Smart Inspect for advanced visual / drone inspection workflows.",
                      "Your scale requires Hexagon's professional services team for ongoing RBI methodology evolution and DM library curation.",
                      "Your buyer is the corporate Reliability & Integrity (R&I) organization with a dedicated APM budget separate from inspection operations."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "You are an inspection service company (not the owner-operator) and Meridium's per-asset / per-user pricing makes you the wrong target customer.",
                      "Your annual APM / inspection software budget is under enterprise tier and Meridium's enterprise license + Hexagon services would push past $400K Year 1.",
                      "You need a single platform spanning ASNT cert tracking, work orders, method-specific NDT reports, crew dispatch, audit packages — not just APM.",
                      "You serve multiple clients and need multi-tenant data isolation with per-client portal access (not Meridium's single-tenant deployment).",
                      "You need go-live in 8-14 weeks for the next refinery turnaround — Meridium typically requires 9-18 months including DM library setup."
            ]}
            comparisonRows={[
                      {
                                "dim": "Total cost of ownership (Year 1)",
                                "atlantis": "Contact for pricing all-in (SaaS + onboarding)",
                                "competitor": "$400K-$2M+ (license + Hexagon services + DM library setup)"
                      },
                      {
                                "dim": "Implementation time",
                                "atlantis": "30-90 days configuration-led",
                                "competitor": "9-18 months typical refinery rollout"
                      },
                      {
                                "dim": "Damage mechanism library (API 571)",
                                "atlantis": "172 mechanisms native",
                                "competitor": "Mature, validated, decade+ refinery reference data"
                      },
                      {
                                "dim": "Multi-tenant SaaS for service providers",
                                "atlantis": "Yes — per-client data isolation",
                                "competitor": "Single-tenant deployment per customer"
                      },
                      {
                                "dim": "NDT-native features (ASNT, ISO 9712)",
                                "atlantis": "Native cert tracking + scheduling",
                                "competitor": "Generic inspection module + custom"
                      },
                      {
                                "dim": "Operator template library",
                                "atlantis": "Pre-built per major operator",
                                "competitor": "Custom build per refinery"
                      },
                      {
                                "dim": "Cloud / on-prem",
                                "atlantis": "Multi-tenant SaaS, single-tenant cloud, on-prem",
                                "competitor": "On-prem typical; SaaS option newer"
                      },
                      {
                                "dim": "Pricing model",
                                "atlantis": "Per-seat tiered SaaS",
                                "competitor": "Per asset + per user + module add-ons"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "Inspection service companies, mid-size operators, multi-client",
                                "competitor": "Major refinery RBI programs, enterprise APM"
                      }
            ]}
            migrationParagraph="Migration from Hexagon Meridium APM to Atlantis NDT ERP is rare and inadvisable for established refinery operators. The pragmatic pattern for an inspection service company that has been issued a Meridium login by a client: keep Meridium read-only access for client-required RBI assessments, run Atlantis as the inspection service company's own system of record for ASNT certs, work orders, technician dispatch, and report generation. Bi-directional integration via API (where available) flows inspection findings into Meridium for the client's RBI workflow. Implementation runs 4-8 weeks — contact us for a tailored quote."
            scenarios={[
                      {
                                "title": "Small inspection contractor — 12 people",
                                "description": "Houston UT/PAUT crew serving 3 refineries. Each refinery has its own Meridium instance for RBI. Inspection findings flow Atlantis to each client's Meridium via API.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Mid-size integrity consultancy — 60 people",
                                "description": "Atlantis (affordable SaaS, 60 seats) deploys in a 10-week implementation, native NDT reports, certification tracking and crew dispatch. Meridium per-user pricing for the consultancy + client-portal access would exceed $300K/year. Atlantis decisive unless one large client mandates Meridium-as-shared-platform.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Major refinery — 200 R&I users with Meridium since 2008",
                                "description": "$8B refinery with mature Meridium deployment, 15,000 equipment items, validated DM library, 200 R&I users. Meridium is the right answer. Atlantis can layer on top for inspection-side workflow if needed, but ripping out Meridium would be a strategic error.",
                                "winner": "competitor"
                      }
            ]}
            faqs={[
                      {
                                "question": "Is Atlantis cheaper than Hexagon Meridium APM for a mid-size inspection company?",
                                "answer": "Yes by 5-10x. Meridium for a 50-100 user inspection consultancy lands at $250K-$500K/year plus $400K-$800K implementation. Atlantis is an affordable SaaS with a much lower onboarding spend — pricing varies by region and scope, so contact us for a tailored quote."
                      },
                      {
                                "question": "Does Atlantis do API 581 RBI like Meridium?",
                                "answer": "No."
                      },
                      {
                                "question": "Can Atlantis run as a service-company platform with Meridium-owning clients?",
                                "answer": "Yes — this is the most common deployment pattern. Atlantis is the inspection service company's system of record; client-owned Meridium instances receive inspection findings via API. Multi-tenant architecture keeps each client's data isolated even when the same inspector serves multiple Meridium customers."
                      },
                      {
                                "question": "Does Atlantis do FFS per API 579?",
                                "answer": "No."
                      },
                      {
                                "question": "Does Atlantis cover Hexagon Smart Inspect or drone inspection workflows?",
                                "answer": "Atlantis supports drone-captured visual / photogrammetry data ingestion and tag-on-3D-model overlay. For Smart Inspect-specific workflows tied to Hexagon's ecosystem, customers typically integrate via REST API."
                      },
                      {
                                "question": "How does Atlantis handle damage-mechanism library updates?",
                                "answer": "172 API 571 DMs are native and updated with each API 571 edition release. Custom DMs (process-specific or proprietary) can be added per customer. Hexagon's DM library is broader because of decades of customer-specific extensions; the gap closes for new-build operators starting fresh."
                      }
            ]}
            contactSubject="Atlantis NDT ERP vs Hexagon Meridium — Demo & TCO"
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
