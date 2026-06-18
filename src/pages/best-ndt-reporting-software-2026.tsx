import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import MarineReportFormatBlock from "@/components/MarineReportFormatBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, Star, AlertCircle, ArrowRight, Database, Cog, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/best-ndt-reporting-software-2026";

const faqs = [
  {
    q: "What is NDT reporting software?",
    a: "NDT reporting software is a specialized application used by ASNT-certified inspectors and Level III approvers to generate audit-grade inspection reports aligned to industry codes (API 510 / 570 / 653, ASME BPVC Section V, AWS D1.1, ISO 17635). Unlike generic word processors, NDT reporting software ships with code templates, captures field data offline (UT thickness, RT density, MT/PT indications), tracks Level II / III approver chains with qualified digital signatures, and pushes findings into CMMS / EAM systems (SAP PM, Maximo, Meridium APM)."
  },
  {
    q: "How much does Atlantis NDT Reporting Software cost?",
    a: "Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com. Atlantis NDT Reporting Software is positioned as the affordable, fully customizable alternative for inspection organizations (typical 25-100 technicians), and includes mobile capture, code template library, Level III approval workflow, eIDAS / Adobe CDS qualified signatures, CMMS integrations, and 24x7 support. Comparable enterprise-tier platforms (Hexagon Meridium APM, IBM Maximo with NDT customization, SAP PM custom NDT layer) sit at the enterprise tier."
  },
  {
    q: "Which inspection codes are supported out of the box?",
    a: "API 510 (pressure vessels), API 570 (piping), API 653 (storage tanks), API 1104 (pipeline welding), ASME BPVC Section V (full Article 4 UT, Article 7 MT, Article 6 PT, Article 9 VT, Article 8 ET, Article 2 RT), ASME B31.3 (process piping), AWS D1.1 (structural steel welding), ISO 17635, ASTM E164. Aerospace add-on covers NAS 410 / EN 4179, Boeing GP-150, Airbus AIPS-01, GE / Rolls-Royce / Pratt-Whitney house specs. We add new codes quarterly based on customer demand."
  },
  {
    q: "Does it work offline at offshore platforms / tank interiors?",
    a: "Yes. Native iOS and Android apps capture data fully offline. Inspectors record UT thickness readings, MT/PT findings, RT density logs, and photos with timestamps and GPS-or-tag references. Data syncs back to the cloud when the device returns to coverage. SHA-256 hash chain is computed offline and verified server-side at sync — the field record cannot be tampered with after capture. Voice-to-text works without connectivity using on-device speech recognition."
  },
  {
    q: "How are Level II and Level III approver signatures handled?",
    a: "Each inspection finding flows through a defined approval chain — Level II inspector creates, Level III reviewer approves. Both sign with eIDAS-qualified or Adobe CDS-qualified certificates tied to their ASNT / ISO 9712 personnel record. The signed PDF embeds the certificate, the signing time (RFC 3161 timestamp), and a SHA-256 hash of the report contents. Signatures are verifiable decades later without dependency on Atlantis remaining in business — the certificate authority chain is independent."
  },
  {
    q: "Can it integrate with our existing EAM / CMMS?",
    a: "Yes. Native two-way connectors for SAP Plant Maintenance, IBM Maximo Asset Suite, Hexagon Meridium APM, AspenTech Mtell, GE Vernova APM, Bentley AssetWise, Microsoft Dynamics 365 Field Service, and Salesforce Field Service. For systems without a native connector we provide a documented REST API. Inspection findings push as work orders, notifications, or APM events with full traceability back to the report."
  },
  {
    q: "Is the AI-drafting feature safe for code-aligned reporting?",
    a: "AI drafting is human-supervised, not autopilot. The model proposes finding narratives based on the field data, calls out API 571 damage mechanisms (e.g. CO2 corrosion, MIC, sulfidation, naphthenic-acid), and suggests API 579-1 fitness-for-service flags. A Level III approver must explicitly accept, edit, or reject each AI-drafted paragraph before it enters the report. The audit log records who reviewed what, when, and what they changed. We do not allow AI signatures or AI-only release of reports."
  },
  {
    q: "How does it pass ADNOC, Aramco, QatarEnergy audits?",
    a: "We map our audit pack to the specific clauses each operator demands — ADNOC PQQ, Aramco SAEP-1131 / SAEP-322, QatarEnergy QPP, KOC HSE, ONGC HVT-INSP, NADCAP MAUP. The pack includes personnel certification matrix as-of-date, calibration register with NIST traceability, procedure register with effective dates and Level III approval, internal audit history, management review minutes, customer complaints, root-cause-corrective-action records. Auditors can query any historical report by hash and verify integrity."
  },
  {
    q: "What about FDA / nuclear ASME Section XI environments?",
    a: "Nuclear/Section-XI deployment uses a hardened tenant: on-premise Docker option, air-gap support, 10 CFR 50 Appendix B records retention, NRC-aligned QA program references, and SQA-grade change-control. We have inspection-of-the-inspector audit support and have served clients qualified by INPO / WANO. This tier is quoted separately and includes dedicated compliance liaison."
  },
  {
    q: "Can we white-label it for our service brand?",
    a: "Yes. The white-label tier replaces report headers, footers, cover pages, and PDF metadata with your brand. Your customers see your name on every report; the underlying engine remains Atlantis. White-label is included for inspection service providers at the enterprise tier — pricing varies by region and scope; request a tailored quote."
  },
  {
    q: "How fast is implementation?",
    a: "30 days for a 25-100 technician shop. Week 1: kickoff, written-practice import, certification-matrix migration, calibration-log migration. Week 2: code-template selection, custom branding, integrations setup. Week 3: parallel-run with 2-3 technician pilot crews. Week 4: full cutover, training (online + on-site option), first month of intensive support. Clients running parallel-run typically halt their old workflow by day 21."
  },
  {
    q: "What if Atlantis stops operations?",
    a: "Customer contracts include an escrow provision with a documented data export path. Your reports, configurations, and templates remain yours and exportable in standard formats (PDF/A for reports, JSON for metadata, XLSX for tables). The mobile app can run in read-only mode against archived data. We carry $5M in professional indemnity insurance and have a structured succession plan documented with our Houston legal counsel."
  }
];

type Vendor = {
  rank: number;
  name: string;
  bestFor: string;
  strengths: string[];
  weaknesses: string[];
  codes: string;
  pricing: string;
  mobile: string;
  aiFeatures: string;
  verdict: string;
};

const vendors: Vendor[] = [
  {
    rank: 1,
    name: "Atlantis NDT Reporting Software",
    bestFor: "NDT inspection service providers needing fast, code-aligned, audit-proof reporting",
    strengths: [
      "Offline-first mobile capture (iOS, Android, Web)",
      "Ships with API 510/570/653 + ASME V + AWS D1.1 templates day one",
      "AI-assisted drafting with Level III human approval — not autopilot",
      "eIDAS / Adobe CDS qualified signatures + SHA-256 hash chain",
      "Direct CMMS push: SAP PM, IBM Maximo, Meridium APM, AspenTech Mtell",
      "ASNT Level III authored — built by inspectors, not generalists"
    ],
    weaknesses: [
      "Newer vendor (2018) vs multinational incumbents",
      "Primarily English + Arabic + Spanish + French + Chinese (not exhaustive)"
    ],
    codes: "API 510/570/653, ASME V/VIII/B31.3, AWS D1.1, API 1104, ISO 17635, ASTM E164",
    pricing: "Affordable SaaS — fully customizable; request a tailored quote",
    mobile: "Native iOS + Android, full offline, voice-to-text",
    aiFeatures: "API 571 damage mechanism tagging, API 579-1 FFS prompts, finding narrative drafts, multi-lingual translation",
    verdict: "Best overall for NDT-first organisations. Purpose-built for inspection, not retrofit from generic EAM."
  },
  {
    rank: 2,
    name: "Hexagon ALI (PPM / SDx / Meridium APM)",
    bestFor: "Large EPCs and operators with full Hexagon ecosystem already deployed",
    strengths: [
      "Deep Smart 3D / SmartPlant integration for EPC workflows",
      "Enterprise-scale with multi-billion dollar customer base",
      "Meridium APM RBI engine per API 581 — well-regarded",
      "Global support footprint"
    ],
    weaknesses: [
      "Slow inspector UX — desktop-first, poor mobile field capture",
      "Implementation cost and time (6-18 months typical) — high TCO",
      "Customisation required to reach API 510/570/653 inspector-grade reporting",
      "No AI drafting built-in as of mid-2026"
    ],
    codes: "Broad via Meridium APM configuration; not all out-of-box",
    pricing: "Enterprise tier; per-seat + per-asset licensing",
    mobile: "SmartPlant ISO Mobile available; limited offline depth",
    aiFeatures: "Limited AI — Meridium uses statistical RBI, not generative drafting",
    verdict: "Strong fit if you already run Hexagon. Overkill for 20-100 technician inspection service companies."
  },
  {
    rank: 3,
    name: "Bentley AssetWise APM",
    bestFor: "Infrastructure (bridges, rail, tunnels) and large-scale asset integrity programs",
    strengths: [
      "Strong infrastructure asset management heritage",
      "OpenPlant + ProjectWise integration",
      "RBI capabilities per API 581",
      "Good reliability analytics module"
    ],
    weaknesses: [
      "Infrastructure-origin feels across field-NDT-inspection flows",
      "Inspector mobile UX not differentiated",
      "Heavy lift to configure for API 510/570/653 inspection shop"
    ],
    codes: "Configurable; out-of-box coverage mainly civil/infrastructure",
    pricing: "Enterprise; per-seat subscription",
    mobile: "Available; field reports integrate via ProjectWise sync",
    aiFeatures: "Analytics and pattern detection; no generative report drafting",
    verdict: "Good for infrastructure asset owners. Less natural fit for process-industry NDT contractors."
  },
  {
    rank: 4,
    name: "IBM Maximo for Asset Monitoring",
    bestFor: "Large operators with Maximo already as core EAM",
    strengths: [
      "Mature EAM with large operator install base",
      "Maximo Application Suite (MAS) on OpenShift — scalable",
      "Work order + inspection + MRO workflows integrated"
    ],
    weaknesses: [
      "Generic EAM — requires major customisation for API-inspection workflows",
      "Field-inspector mobile UX is adequate but not optimised for NDT capture",
      "No built-in ASNT/ISO 9712 certification tracking out-of-box",
      "AI requires separate Watson integration"
    ],
    codes: "Must configure; no API 510/570/653 templates out-of-box",
    pricing: "Per-asset + per-user; enterprise tier",
    mobile: "Maximo Mobile (Anywhere); offline functional",
    aiFeatures: "IBM Watson integration available but separate cost",
    verdict: "Viable if Maximo is your EAM backbone. Budget 6-12 months customisation for inspection-grade reporting."
  },
  {
    rank: 5,
    name: "AspenTech Mtell + Aspen RBI",
    bestFor: "Process industries using Aspen for APM + predictive maintenance",
    strengths: [
      "Strong in downstream process industries",
      "Aspen RBI per API 581 is widely accepted",
      "Predictive analytics (Mtell) for rotating equipment"
    ],
    weaknesses: [
      "Inspection reporting is secondary to analytics focus",
      "Limited out-of-box API 510/570/653 PDF generation",
      "Integration with Atlantis-class reporting software typical deployment model"
    ],
    codes: "RBI aligned to API 581; report templates limited",
    pricing: "Enterprise (per-module licensing)",
    mobile: "Limited inspector-grade mobile",
    aiFeatures: "Predictive maintenance (Mtell) — not generative report drafting",
    verdict: "Often used ALONGSIDE a dedicated reporting platform like Atlantis — not as a replacement."
  },
  {
    rank: 6,
    name: "SAP Plant Maintenance (PM) + Asset Performance Management",
    bestFor: "Operators with SAP S/4HANA backbone who accept heavy customisation",
    strengths: [
      "Deep SAP ERP integration",
      "Cost centre, work order, materials flow unified",
      "Large SI ecosystem"
    ],
    weaknesses: [
      "Not designed for NDT — no API 510/570/653 concepts built-in",
      "Inspector UX is notoriously poor on mobile",
      "Customisation typically runs 12-24 months to reach NDT-grade reporting"
    ],
    codes: "None out-of-box; all via customisation",
    pricing: "Very high (SAP licence + implementation partner)",
    mobile: "SAP Work Manager / SAP Asset Manager; poor inspector reviews",
    aiFeatures: "SAP AI Core / Joule — generic, not NDT-specific",
    verdict: "Painful fit for inspection work. Choose only if SAP is absolutely mandated corporate-wide."
  },
  {
    rank: 7,
    name: "GE Vernova APM (formerly GE Digital APM / Predix APM)",
    bestFor: "Power generation operators (installed base strong in T&D + generation)",
    strengths: [
      "Strong in power generation asset management",
      "APM Reliability module well-regarded",
      "GE Vernova spin-off gives sharper focus on energy"
    ],
    weaknesses: [
      "Inspection reporting is one module among many — not a specialism",
      "Mobile UX evolving; field-NDT flows secondary",
      "Typically pairs with a purpose-built reporting layer"
    ],
    codes: "Configurable per industry; power-gen templates stronger than O&G",
    pricing: "Enterprise (per-asset licensing)",
    mobile: "APM Mobile; offline mode maturing",
    aiFeatures: "APM Analytics uses ML for anomaly detection; no generative drafting",
    verdict: "Solid choice for power-gen operators. Often layered with a purpose-built NDT reporting platform."
  },
  {
    rank: 8,
    name: "Intertek / Applus+ / Bureau Veritas in-house tools",
    bestFor: "Contractors locked into a large 3rd-party inspection brand's workflow",
    strengths: [
      "Aligned with the 3rd-party inspection organisation's own processes",
      "Known to clients in that brand's ecosystem"
    ],
    weaknesses: [
      "Vendor lock-in — cannot serve other clients effectively",
      "Limited innovation cycle vs dedicated SaaS",
      "UX varies widely — not a consistent class"
    ],
    codes: "Usually API 510/570/653 aligned; varies by contractor",
    pricing: "Internal cost allocation (not separately priced to end users)",
    mobile: "Varies — some modern, some legacy",
    aiFeatures: "Minimal; internal tools not often AI-enabled",
    verdict: "Acceptable if you're a captive contractor. Not a marketplace choice."
  },
  {
    rank: 9,
    name: "Pragma (sage group) / On Key / Eagle CMMS",
    bestFor: "SME inspection contractors looking for mid-market CMMS",
    strengths: [
      "Lower cost than enterprise options",
      "Reasonable for basic work order + inspection workflows",
      "Faster deployment than tier-1 EAM"
    ],
    weaknesses: [
      "Generic CMMS — not NDT-specific",
      "No API-code templates out-of-box",
      "Limited mobile/offline capability",
      "Minimal AI"
    ],
    codes: "None NDT-specific",
    pricing: "$10K-$50K/yr range",
    mobile: "Basic",
    aiFeatures: "Minimal",
    verdict: "Consider if budget-constrained and NDT volume is modest. Upgrade path difficult."
  },
  {
    rank: 10,
    name: "Excel spreadsheets + Word templates (status quo)",
    bestFor: "Very small shops (1-5 inspectors) with low report volume",
    strengths: [
      "Zero software licence cost",
      "Universally understood",
      "Easy to share via email"
    ],
    weaknesses: [
      "No audit trail",
      "No certification tracking",
      "Prone to formatting errors, lost data, version conflicts",
      "Fails ADNOC, Aramco, QatarEnergy, OSHA audits on integrity grounds",
      "No mobile / field capture"
    ],
    codes: "Nothing enforced",
    pricing: "Free",
    mobile: "None",
    aiFeatures: "None",
    verdict: "Viable only for 1-5 inspector shops with low regulatory risk. Actively dangerous at scale."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    buildTechArticleSchema({
      url: URL,
      headline: "Best NDT Reporting Software 2026: Top 10 Compared (Atlantis, Hexagon, Bentley, Maximo, Aspen, SAP)",
      description: "Deep comparison of top 10 NDT reporting software platforms 2026: Atlantis NDT, Hexagon ALI/Meridium APM, Bentley AssetWise, IBM Maximo, AspenTech Mtell, SAP PM, GE Vernova APM. Code support, mobile UX, AI features, pricing, pros/cons. By ASNT Level III Anoop Rayavarapu.",
      datePublished: "2026-04-18",
      dateModified: "2026-05-07",
      section: "NDT Software — Buyer's Guide",
      keywords: "best NDT reporting software 2026, NDT software comparison, API 510 software, inspection reporting platforms, Hexagon Meridium APM alternatives, SAP PM NDT alternative, NDT reporting software buyer guide",
      dependencies: "API 510, API 570, API 653, API 571, API 580, API 581, ASME BPVC Section V, AWS D1.1, API 1104, ISO 17635"
    }),
    { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
    { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
    {
      "@type": "SoftwareApplication",
      "@id": `${URL}#software`,
      "name": "Atlantis NDT Reporting Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud (browser); iOS; Android; on-premise Docker",
      "softwareVersion": "2026.5",
      "description":
        "Code-aligned NDT inspection reporting software with mobile offline capture, AI-assisted drafting (Level III approval gate), eIDAS / Adobe CDS qualified digital signatures, and native CMMS / EAM integrations. Out-of-box templates for API 510 / 570 / 653, ASME BPVC Section V, AWS D1.1, ISO 17635.",
      "url": URL,
      "publisher": { "@id": "https://atlantisndt.com/#organization" },
      "author": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
      "offers": {
        "@type": "Offer",
        "url": URL,

        "availability": "https://schema.org/InStock",
        "category": "subscription"
      },
      "featureList":
        "Mobile offline field capture • API 510 / 570 / 653 templates • ASME BPVC Section V templates • AWS D1.1 templates • AI-drafted finding narratives • API 571 damage mechanism tagging • API 579-1 FFS flags • eIDAS qualified signatures • SHA-256 hash chain • Level III approval chain • CMMS / EAM integration (SAP PM, Maximo, Meridium APM, AspenTech Mtell)",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "63",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@type": "ItemList",
      "name": "Best NDT Reporting Software 2026 — Top 10",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 10,
      "itemListElement": vendors.map((v) => ({
        "@type": "ListItem",
        "position": v.rank,
        "name": v.name,
        "description": v.verdict
      }))
    }
  ]
};

export default function BestNDTReportingSoftware2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Best NDT Reporting Software 2026: Top 10 Compared (Atlantis, Hexagon, Bentley, Maximo)"
        description="Top 10 NDT reporting software 2026 compared — code support, mobile UX, AI drafting, pricing, pros/cons. Atlantis, Hexagon, Bentley, Maximo, AspenTech, SAP PM."
        keywords="best NDT reporting software 2026, NDT software comparison, API 510 software, inspection reporting platforms, Hexagon Meridium APM alternatives, SAP PM NDT alternative"
        canonical={URL}
        structuredData={structuredData}
      />
            <TableOfContents items={[{ id: "overview", label: "Best NDT Reporting Software 2026" }, { id: "comparison", label: "Vendor Comparison" }, { id: "criteria", label: "Selection Criteria" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 to-primary text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Star className="w-5 h-5" />
              <span>Buyer's Guide — April 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best NDT Reporting Software 2026 — Top 10 Compared
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Independent, ASNT Level III-authored comparison of the top 10 NDT reporting software
              platforms across code support (API 510/570/653, ASME V, AWS D1.1), inspector mobile
              UX, AI-assisted drafting, qualified digital signatures, CMMS integrations, and total
              cost of ownership.
            </p>
            <p className="text-sm text-blue-200">
              Author: <strong>Anoop Rayavarapu</strong> — ASNT NDT Level III (multi-method), API 653
              Authorized Inspector, Founder &amp; CEO Atlantis NDT. <em>Disclosure: Atlantis NDT is
              ranked #1 in this comparison — reasoning is documented below. Evaluate independently.</em>
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Evaluation criteria</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              We evaluated each platform against the criteria that actually matter for NDT
              inspection service providers and operator in-house inspection teams:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { t: "Code templates out-of-box", d: "API 510/570/653, ASME V, AWS D1.1, API 1104 — ready on day one, not 6-month customisation projects" },
                { t: "Mobile field capture (offline)", d: "Inspectors working offshore, in tank interiors, in basements with no connectivity — data must capture reliably, sync without loss" },
                { t: "Digital signatures (qualified)", d: "eIDAS or Adobe CDS certificates tied to Level III approver identity, verifiable decades later without vendor dependency" },
                { t: "ASNT/ISO 9712/PCN tracking", d: "Certification expiry, method matrix, vision acuity, annual retest — automated alerts not manual spreadsheet audits" },
                { t: "AI-assisted drafting", d: "LLM-drafted narratives with API 571 damage mechanism awareness and API 579-1 FFS suggestions — with human Level III approval gate" },
                { t: "CMMS / ERP integration", d: "SAP PM, IBM Maximo, Meridium APM, AspenTech Mtell — REST API push, not flat-file import/export" },
                { t: "Audit trail integrity", d: "SHA-256 hash chain, immutable version history, cryptographic proof of integrity — not just access logs" },
                { t: "Total cost of ownership", d: "Licence + implementation + annual maintenance — full 5-year view, not just licence headline" }
              ].map((x) => (
                <Card key={x.t} className="border-slate-200">
                  <CardContent className="pt-5">
                    <div className="font-semibold text-slate-900 mb-1">{x.t}</div>
                    <div className="text-sm text-slate-600">{x.d}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6">At-a-glance comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold">#</th>
                    <th className="px-3 py-3 text-left font-semibold">Platform</th>
                    <th className="px-3 py-3 text-left font-semibold">Best for</th>
                    <th className="px-3 py-3 text-left font-semibold">Pricing</th>
                    <th className="px-3 py-3 text-left font-semibold">Mobile offline</th>
                    <th className="px-3 py-3 text-left font-semibold">AI drafting</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((v) => (
                    <tr key={v.rank} className={`border-t ${v.rank === 1 ? "bg-blue-50" : ""}`}>
                      <td className="px-3 py-3 font-bold text-primary">{v.rank}</td>
                      <td className="px-3 py-3 font-semibold text-slate-900">{v.name}</td>
                      <td className="px-3 py-3 text-slate-700 text-xs">{v.bestFor}</td>
                      <td className="px-3 py-3 text-slate-700 text-xs">{v.pricing}</td>
                      <td className="px-3 py-3 text-slate-700 text-xs">{v.mobile}</td>
                      <td className="px-3 py-3 text-slate-700 text-xs">{v.aiFeatures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {vendors.map((v) => (
            <section key={v.rank} className="mb-12 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  {v.rank}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{v.name}</h3>
                  <p className="text-slate-600 italic">{v.bestFor}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-5">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Strengths
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {v.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-0.5">+</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Weaknesses
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {v.weaknesses.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-rose-600 mt-0.5">−</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-5 text-sm">
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Code support</div>
                  <div className="text-slate-600">{v.codes}</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Pricing</div>
                  <div className="text-slate-600">{v.pricing}</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Mobile</div>
                  <div className="text-slate-600">{v.mobile}</div>
                </div>
              </div>
              <div className="bg-slate-50 border-l-4 border-primary p-4 rounded">
                <div className="text-sm font-semibold text-slate-900 mb-1">Verdict</div>
                <div className="text-slate-700">{v.verdict}</div>
              </div>
            </section>
          ))}

          <section className="mb-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-10 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-center">How to decide</h2>
            <p className="text-slate-700 text-lg mb-6 text-center max-w-2xl mx-auto">
              Match the platform to your organisational profile:
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-5">
                  <div className="font-semibold text-slate-900 mb-2">Inspection service provider</div>
                  <div className="text-sm text-slate-600">
                    Choose Atlantis NDT (#1) or a comparable specialised platform. Generic EAM is
                    wrong tool — inspector UX and code-aligned reporting must be first-class.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-5">
                  <div className="font-semibold text-slate-900 mb-2">Operator (O&amp;G, petrochem)</div>
                  <div className="text-sm text-slate-600">
                    If Hexagon or Maximo is entrenched, layer Atlantis or equivalent purpose-built
                    reporting on top for inspector workflow. RBI via Meridium/AspenTech remains
                    value-additive.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-5">
                  <div className="font-semibold text-slate-900 mb-2">Operator (power-gen, nuclear)</div>
                  <div className="text-sm text-slate-600">
                    GE Vernova APM baseline + dedicated ASME Section XI-aware reporting layer.
                    10 CFR 50 Appendix B records retention is non-negotiable.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 group">
                  <summary className="cursor-pointer font-semibold text-slate-900 px-6 py-4 flex justify-between items-center">
                    <span className="pr-4">{f.q}</span>
                    <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-700 text-sm leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Atlantis platforms</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Link to="/ndt-erp-solution" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                <Database className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">NDT ERP Software</h3>
                <p className="text-sm text-slate-600">Personnel certifications, equipment calibration, project P&amp;L, financials — pre-configured Odoo-based ERP for NDT.</p>
              </Link>
              <Link to="/digital-twins" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                <Cog className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">NDT Digital Twins</h3>
                <p className="text-sm text-slate-600">3D asset visualization with live inspection data overlay. RBI integration, predictive maintenance.</p>
              </Link>
              <Link to="/consulting" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">ASNT Level III Consulting</h3>
                <p className="text-sm text-slate-600">Independent Level III procedure approval, written-practice authoring, audit support.</p>
              </Link>
            </div>
          </section>

          <section className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Evaluating Atlantis NDT?</h2>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              Request a 30-minute technical demo with ASNT Level III-led walkthrough of API 510
              report generation, mobile field capture, eIDAS signing workflow, and CMMS
              integration. No sales pitch, just code-focused engineering answers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Request technical demo <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </article>
        <RelatedGuidesBlock links={[
              {
                    "title": "Atlantis NDT ERP Hub",
                    "href": "/erp",
                    "description": "All-in-one Odoo-based platform",
                    "icon": "erp"
              },
              {
                    "title": "NDT Reports Software",
                    "href": "/erp/ndt-reports-software-for-inspection-companies",
                    "description": "1-click report generation",
                    "icon": "erp"
              },
              {
                    "title": "Inspection Procedures Management",
                    "href": "/erp/inspection-procedures-management-software",
                    "description": "Procedure version-control",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Outsourced Level III of record",
                    "icon": "consulting"
              },
              {
                    "title": "Atlantis Digital Twin",
                    "href": "/digital-twins",
                    "description": "API 579 FFS + UT/PAUT overlay",
                    "icon": "dt"
              },
              {
                    "title": "NDT Salary Guide 2026",
                    "href": "/blog/ndt-salary-guide-2026-global",
                    "description": "Industry salary data",
                    "icon": "blog"
              }
        ]} />

        <MarineReportFormatBlock />

        <ContactDetails />
    </div>
  );
}
