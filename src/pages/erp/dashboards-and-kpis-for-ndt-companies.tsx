import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart3, ArrowRight, TrendingUp, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with NDT Dashboards inside Atlantis NDT ERP?",
    answer: "Dashboards is bundled inside Atlantis NDT ERP — no per-module licence. Pre-built NDT-industry KPI packs: technician utilisation rate, certification compliance rate (ASNT + ISO 9712 expiry tracking), audit findings trending, project margin by client, RBI workflow throughput, equipment calibration compliance, customer-portal qualification status (Aramco APQS, ADNOC Tejari, Achilles, Avetta, ISNetworld), turnaround revenue by site, and NCR closure rate. All dashboards drillable to the underlying transactional record."
  },
  {
    question: "How are Dashboards configured for NDT inspection companies specifically?",
    answer: "Pre-built KPI packs for inspection-industry realities: chargeable hours vs available hours (technician utilisation); ASNT / ISO 9712 / PCN / CSWIP / NACE expiry projections (30 / 60 / 90 days); API 510 / 570 / 653 inspection-interval compliance; customer-portal qualification status across 8 major operator portals; refinery turnaround revenue by site and year; CAR / NCR closure rate; safety leading indicators (toolbox-talk attendance, near-miss capture). Every metric defines acceptable tolerance bands so the dashboard flags red / amber / green automatically."
  },
  {
    question: "Can Dashboards integrate with our existing systems?",
    answer: "Yes. Native bidirectional sync with the rest of Atlantis NDT ERP — pulls live data from CRM, Project, Helpdesk, HR, Inventory, Field Service, Sales. Power BI, Tableau, Metabase, Looker Studio exports via OData and direct API. Slack / Microsoft Teams / WhatsApp alerts on threshold breach. SAP S/4HANA, IBM Maximo, Oracle EBS, Microsoft Dynamics 365 read-side integration for joint dashboards."
  },
  {
    question: "What does implementation look like for Dashboards?",
    answer: "Standard rollout 2–4 weeks. Week 1: identify priority KPIs from the pre-built packs, set tolerance bands. Week 2: configure user-role-based dashboards (CEO, Ops Director, QA Manager, Project Manager, Sales). Week 3: integrate Slack / Teams alerting. Week 4: launch, calibrate thresholds with real-data noise. Customer Success Manager owns the first 12 months."
  },
  {
    question: "Is the data secure and compliant with regional data-protection laws?",
    answer: "Yes. ISO 27001-certified infrastructure with US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. GDPR, PDPL, DPDP Act 2023, CCPA / CPRA, PIPEDA, Singapore PDPA compliant. AES-256 at rest, TLS 1.3 in transit. Row-level security so each user sees only the data their role permits."
  }
];

export default function DashboardsAndKpisForNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="NDT KPI Dashboards — Utilization, Certification, Audit Tracking"
        description="Track utilisation, certification compliance, audit findings, project margins in real time. Pre-built NDT KPIs out of the box. Affordable, accessible, fully customizable."
        canonical="/erp/dashboards-and-kpis-for-ndt-companies"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Dashboards & KPIs for NDT" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            NDT KPI Dashboards — Utilisation, Certification, Audit Tracking
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Track <span className="text-emerald-400 font-semibold">technician utilisation, certification compliance, audit findings, project margin</span> in real time. Pre-built NDT-industry KPI packs out of the box. Drillable to the transactional record. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300"><BarChart3 className="w-4 h-4" /><span className="font-semibold">Affordable</span></div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300"><Shield className="w-4 h-4" /><span className="font-semibold">ASNT / ISO 9712 ready</span></div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300"><Globe className="w-4 h-4" /><span className="font-semibold">Multi-region data residency</span></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20NDT%20Dashboards" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a demo <ArrowRight className="w-4 h-4" /></a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">See the full ERP suite</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Pre-built NDT KPI dashboards</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Technician utilisation rate (chargeable vs available)</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Certification compliance (ASNT / ISO 9712 / PCN / CSWIP expiry trending)</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Audit findings + CAR / NCR closure rate</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Project margin by client + by site</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>RBI workflow throughput per inspection campaign</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Equipment calibration compliance</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Customer-portal qualification status (APQS / Tejari / Achilles / Avetta / ISNetworld)</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Refinery turnaround revenue by site and year</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Safety leading indicators (toolbox-talk attendance, near-miss capture)</span></li>
            <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Pipeline value, win rate, sales-cycle length</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Power BI, Tableau, Metabase, Looker Studio (OData + REST)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>SAP S/4HANA, IBM Maximo, Oracle EBS read-side joint dashboards</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Slack / Microsoft Teams / WhatsApp threshold-breach alerts</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Native pull from all 35+ Atlantis NDT ERP apps</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Quote &amp; Onboarding</h2>
          <p className="text-slate-300">Pricing accessible across regions. Quote on request. Demo on request — <a href="mailto:info@atlantisndt.com" className="text-emerald-400 hover:underline">info@atlantisndt.com</a></p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <button key={i} onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg p-4 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
                {openIdx === i && <p className="mt-3 text-slate-300 leading-relaxed">{f.answer}</p>}
              </button>
            ))}
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
