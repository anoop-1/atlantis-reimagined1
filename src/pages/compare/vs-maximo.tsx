import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsMaximo() {
    return (
        <ErpComparisonPage
            slug="vs-maximo"
            competitorName="IBM Maximo"
            competitorShortName="IBM Maximo"
            competitorVendor="IBM"
            competitorUrl="https://www.ibm.com/products/maximo"
            metaTitle="Atlantis NDT ERP vs IBM Maximo 2026 — Honest TCO, Features & When Maximo Wins"
            metaDescription="IBM Maximo Application Suite vs Atlantis NDT ERP: tier-1 EAM vs NDT-native ERP. $200K–$1M Maximo vs $18K–$120K Atlantis, MAS Health/Predict, mobile, API 510/570/653, RBI. When each platform actually wins for inspection companies."
            keywords="ibm maximo alternative, atlantis ndt erp vs maximo, maximo for ndt, mas health ndt, ibm maximo comparison, maximo vs ndt erp, maximo inspection module, mas inspection"
            intro="IBM Maximo Application Suite (MAS) is genuinely tier-1 enterprise asset management software with a 35-year refinery, utility, transit and defense reference base. If your parent organization is a super-major and Maximo is already the system of record, you should not rip it out. The honest read is that Atlantis NDT ERP wins for pure-play inspection companies under $200M revenue where Maximo's $200K–$1M annual license, 6–18 month implementation cycle, and generic inspection module are a poor fit — and Maximo wins everywhere else."
            competitorWinsTitle="When IBM Maximo is the right choice"
            competitorWinsLead="Maximo is the right answer in five common situations. We have lost deals to all of them, and we agree with the buyer when we do."
            competitorWins={[
                "Your parent company has standardized on Maximo / MAS across multiple business units and the political cost of a separate inspection system exceeds the workflow benefit.",
                "You operate $5B+ of assets across more than 100,000 equipment items where Maximo's scale, asset hierarchy depth, and MRO inventory engine are genuinely required.",
                "Your buyer is the reliability or maintenance organization (not the inspection / integrity team), and the primary workflow is work-order management, PM scheduling, and MRO — not NDT data capture.",
                "You need IBM-grade SLAs, IBM Cloud / OpenShift deployment, or specific compliance certifications (FedRAMP, DoD IL5) that a mid-size vendor cannot match.",
                "You have an established IBM services partner (Cohesive, Banetti, Sirius, Projetech) who has implemented Maximo for similar companies and can run a 12–24 month rollout for you.",
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Five concrete situations where Atlantis is the better choice, even if a consultant recommends Maximo."
            atlantisWins={[
                "NDT inspection is your primary business line (more than 40% of revenue) and you need ASNT SNT-TC-1A Level I/II/III tracking, probe calibration traceability, and ASME Section V report templates as configuration, not as a $500K Maximo customization.",
                "Your annual software budget for inspection workflow is under $150K and Maximo Application Suite per-user / per-asset pricing pushes you past $250K before professional services.",
                "You need to go live in 8–14 weeks for your next refinery turnaround or pipeline integrity program, not in 12+ months.",
                "Your team is 10–150 people and a Maximo rollout would require a dedicated IT lead, an ABAP-equivalent developer, and a six-figure system integrator engagement you cannot justify.",
                "You want native API 510/570/653 inspection scheduling, API 581 RBI, API 579 FFS, and operator template libraries (Saudi Aramco SAEP, ADNOC ACS, Petronas PTS) out of the box.",
            ]}
            comparisonRows={[
                { dim: "Total cost of ownership (Year 1)", atlantis: "$18K–$120K all-in (SaaS + onboarding)", competitor: "$200K–$1M+ (MAS license + implementation services)" },
                { dim: "Implementation time", atlantis: "30–90 days configuration-led", competitor: "6–18 months typical enterprise rollout" },
                { dim: "NDT-native features (ASNT cert, ASME V, API 510/570/653)", atlantis: "Pre-configured out of the box", competitor: "Generic inspection module; deep NDT typically requires Maximo Health + custom Z-app build" },
                { dim: "Industry configs (NDT, calibration lab, welding, marine survey)", atlantis: "12 inspection vertical configs pre-loaded", competitor: "Maximo Oil & Gas, Utilities, Transportation industry solutions; not NDT-specific" },
                { dim: "Mobile field app (offline capture)", atlantis: "Native iOS / Android, offline-first inspection capture", competitor: "Maximo Mobile / Anywhere — capable but requires configuration for NDT workflows" },
                { dim: "Cloud / on-prem", atlantis: "Multi-tenant SaaS, single-tenant cloud, on-prem", competitor: "IBM Cloud, OpenShift, on-prem; MAS SaaS available" },
                { dim: "Multi-tenant SaaS pricing", atlantis: "Yes — published per-seat tiers from $18K/yr", competitor: "No public multi-tenant SaaS pricing; enterprise contracts" },
                { dim: "Operator template library (Aramco, ADNOC, Petronas, KOC)", atlantis: "Pre-built inspection templates per major operator", competitor: "Custom build by IBM services partner" },
                { dim: "Audit-package generation (one-click TPI / regulator pack)", atlantis: "Native — one-click ASNT, ISO 17025, AS9100 packs", competitor: "Custom report engine via Cognos / BIRT" },
                { dim: "Pricing model", atlantis: "Per-seat tiered SaaS, predictable", competitor: "Per-user + per-asset (MAS app points) + add-on apps" },
                { dim: "Customer support", atlantis: "Direct vendor support, ASNT Level III on call", competitor: "IBM Support + implementation partner; tickets routed by tier" },
                { dim: "API integrations (SAP, QuickBooks, Xero, ERP)", atlantis: "Native connectors + REST API", competitor: "OSLC / REST API; integration via IBM App Connect" },
                { dim: "Compliance (ISO 9001, 17025, AS9100D, API Q1)", atlantis: "Native QMS module aligned to all four", competitor: "Generic CAPA module; custom mapping per standard" },
                { dim: "Strongest at", atlantis: "NDT inspection workflow, fast deployment, mid-size shops", competitor: "Enterprise EAM, work orders, MRO, complex asset hierarchies" },
            ]}
            migrationParagraph="Migrating from IBM Maximo to Atlantis NDT ERP is rarely a wholesale rip-and-replace. The pragmatic pattern is to keep Maximo as the enterprise asset register and work-order system, and to extract only the inspection workflow into Atlantis: asset hierarchy and equipment master sync from Maximo (which remains the system of record), inspection findings and FFS / RBI outputs flow back into Maximo as Service Requests via OSLC and REST APIs. A typical 6–8 week migration project covers export of equipment master via IBM Integration Framework, parallel-run of the next inspection turnaround in both systems, ASNT cert and calibration data migration via CSV, and operator-template re-creation for codes the customer had customized in Maximo. Customers retain their Maximo investment for everything Maximo is genuinely better at (work-order management, MRO, technician dispatch) and add Atlantis as the NDT-native layer. Implementation runs $35K–$95K all-in depending on data complexity."
            scenarios={[
                {
                    title: "Small inspection contractor — 5 people",
                    description: "Houston-based UT / MT / PT specialist with 5 technicians and $1.8M annual revenue. Atlantis at $18K–$30K/year ships in 30 days with native ASNT tracking, mobile capture, and ASME V templates. Maximo Application Suite would not be procurable at this scale — minimum viable Maximo deployment for a 5-person team typically requires a $150K+ first-year commitment plus a 6-month implementation, which is uneconomic.",
                    winner: "atlantis",
                },
                {
                    title: "Mid-size NDT multinational — 75 people",
                    description: "Atlantis NDT ERP at $60K–$95K/year for 75 seats, 10–14 week implementation, native API 510/570/653 codes, operator-template library, and one-click audit packs. Maximo MAS would run $250K–$450K/year plus a $300K–$600K implementation. Atlantis wins decisively unless the customer's parent group is already on Maximo and refuses a satellite system.",
                    winner: "atlantis",
                },
                {
                    title: "Enterprise refinery operator — 500+ inspection users",
                    description: "$10B refinery operating company with 500+ inspection users across 8 plants. Maximo (or MAS) is already the system of record for 50,000+ equipment items. The right pattern is to keep Maximo for work orders and asset master, integrate Atlantis via OSLC for the NDT-specific workflow (CMLs, weld registers, FFS, RBI, 3D twin), and let Maximo continue to own the maintenance organization. Either platform alone is the wrong answer.",
                    winner: "either",
                },
            ]}
            faqs={[
                { question: "Is Atlantis NDT ERP cheaper than IBM Maximo for a mid-size inspection company?", answer: "Yes, materially. For a 50–100 user inspection company, IBM Maximo Application Suite typically lands at $250K–$700K per year in license plus a $300K–$1M implementation across 6–18 months. Atlantis NDT ERP for the same headcount lands at $60K–$120K per year SaaS plus a $25K–$75K onboarding inside 12 weeks. Five-year TCO is usually 4–6x lower on Atlantis for a pure-play NDT business." },
                { question: "Can I migrate from IBM Maximo to Atlantis without losing my equipment master?", answer: "Yes. Equipment master, asset hierarchy, job plans, and PM schedules export cleanly from Maximo via the Integration Framework and OSLC APIs. We typically run Atlantis in parallel for one turnaround cycle, validate the data model end-to-end against the live Maximo data, then either fully migrate or — more commonly — keep Maximo as the asset register and use Atlantis for the inspection-specific layer with bi-directional sync." },
                { question: "Does Atlantis integrate with IBM Maximo if I want to keep both?", answer: "Yes. We have a documented Maximo integration via OSLC and REST APIs that supports Maximo 7.6, 8.x, and MAS 8 / 9. Asset hierarchy and equipment master flow Maximo to Atlantis; inspection findings, FFS results, and RBI risk changes flow Atlantis to Maximo as Service Requests that route into your existing work-order workflow. Implementation is 3–4 weeks once both sides have a project sponsor." },
                { question: "What kind of customer support does Atlantis offer compared to IBM?", answer: "Atlantis customers work directly with the vendor — same-day response for production-down issues, weekly office hours with an ASNT Level III consultant, and quarterly business reviews. IBM Maximo support is excellent in absolute terms but routed via IBM Support tiers and almost always involves your implementation partner (Cohesive, Banetti, Projetech) as a primary point of contact. Both models work; the right choice depends on whether you want vendor-direct or partner-led support." },
                { question: "Will my Maximo investment go to waste if I add Atlantis?", answer: "No. The most successful pattern is Maximo for everything Maximo does best (work orders, MRO, asset hierarchy, contracts) and Atlantis layered on top for the NDT-specific workflow that Maximo's generic inspection module struggles with. Customers who run both report 60–80% reductions in inspection report production time without disrupting their reliability and maintenance organizations. The combined annual cost is typically lower than Maximo plus a customized inspection bolt-on plus a separate FFS / RBI vendor." },
                { question: "What is ROI on a switch from IBM Maximo's inspection module to Atlantis?", answer: "Typical payback is 9–14 months for an inspection-heavy organization. Drivers: 60% reduction in report production time, elimination of a separate IDMS or FFS partner ($120K–$200K/year), 50% reduction in cert / cal admin overhead, and removal of expensive Maximo Z-app customization maintenance. We will quote you a real ROI number based on your live job backlog during the demo call — not a generic case study." },
            ]}
            ratingValue="4.9"
            ratingCount="142"
            contactSubject="Atlantis NDT ERP vs IBM Maximo — Demo & TCO Comparison"
            related={[
                { href: "/compare", label: "All ERP Comparisons", blurb: "Hub: 10 Atlantis NDT ERP vs X comparison pages." },
                { href: "/compare/vs-sap-pm", label: "vs SAP S/4HANA PM", blurb: "Other tier-1 enterprise platform comparison." },
                { href: "/compare/vs-meridium", label: "vs Hexagon Meridium APM", blurb: "APM and RBI comparison for refinery integrity." },
                { href: "/compare/vs-ge-vernova-apm", label: "vs GE Vernova APM", blurb: "Predix-derived APM platform comparison." },
                { href: "/erp-modules", label: "ERP Modules Catalog", blurb: "11 modules of the Atlantis NDT ERP." },
                { href: "/erp-industries", label: "ERP by Industry", blurb: "Tailored configs for 12 inspection verticals." },
                { href: "/ndt-erp-solution", label: "Atlantis NDT ERP", blurb: "Product overview, pricing, modules, deployment." },
                { href: "/ndt-erp-vs-generic-erp", label: "NDT ERP vs Generic ERP", blurb: "Category-level decision framework." },
            ]}
        />
    );
}
