import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, DollarSign, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "What is included with Odoo Studio / Low-Code Customisation in Atlantis NDT ERP?",
    "answer": "No-Code / Low-Code Customisation for NDT ERP is bundled inside the standard $18,000/yr Atlantis NDT ERP subscription — there is no additional licence fee. Every customer gets the full Odoo 18-based ERP suite (35+ apps including Odoo Studio / Low-Code Customisation) pre-configured for NDT and inspection-company workflows. We do not nickel-and-dime by module. The annual fee covers hosting on Atlantis cloud infrastructure, quarterly upgrades, knowledge-base access, and email / SMS support."
  },
  {
    "question": "How is Odoo Studio / Low-Code Customisation configured for NDT inspection companies specifically?",
    "answer": "Generic ERPs treat Odoo Studio / Low-Code Customisation as a one-size-fits-all module. Atlantis NDT ERP layers NDT-specific pre-configuration on top: NDT-method libraries (UT, RT, MT, PT, PAUT, TOFD, ECA, LRUT, IRIS, MFL), certification-scheme tracking (ASNT SNT-TC-1A, ISO 9712, PCN, CSWIP, NACE, AWS CWI), API code intervals (510, 570, 653, 1163), and client-specific compliance templates (Aramco SAEP-1112, ADNOC AIM Standard, QatarEnergy NFPS, ABSA Alberta, OSHA PSM, HSE PSSR, PESO IBR, NORSOK). You start productive on day one, not after six months of customisation."
  },
  {
    "question": "Can Odoo Studio / Low-Code Customisation integrate with our existing systems (SAP, Maximo, etc.)?",
    "answer": "Yes. Atlantis NDT ERP supports bidirectional integration with SAP S/4HANA, IBM Maximo, Oracle EBS, Microsoft Dynamics 365 and most major operator portals (Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld). For client-specific portals without public APIs, we support flat-file (CSV / XML / JSON) bidirectional sync. Integrations are scoped during onboarding and most go live within 30–45 days of contract signature."
  },
  {
    "question": "What does implementation look like for Odoo Studio / Low-Code Customisation?",
    "answer": "Standard implementation runs 4–8 weeks depending on company size. Week 1: discovery and configuration scoping. Weeks 2–3: data migration from your current systems (spreadsheets, legacy ERPs, SharePoint document repositories). Week 4: integration setup. Weeks 5–6: user training (2 sessions per role). Weeks 7–8: parallel-run with old system, cutover, hyper-care. Atlantis assigns a dedicated Customer Success Manager for the full first 12 months."
  },
  {
    "question": "Is the data secure and compliant with our regional data-protection laws?",
    "answer": "Yes. Atlantis NDT ERP is hosted on ISO 27001-certified infrastructure with options for US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. We comply with GDPR (EU), PDPL (Saudi, UAE, Bahrain), DPDP Act 2023 (India), CCPA / CPRA (California), PIPEDA (Canada) and Singapore PDPA. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Customer data is never used for AI training or shared with third parties."
  }
];

export default function NoCodeCustomizationOdooStudioForNdt() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Odoo Studio / Low-Code Customisation for NDT Companies — $18,000/yr All Odoo Apps Included | Atlantis NDT"
        description="Atlantis NDT ERP includes Odoo Studio / Low-Code Customisation. Designed for NDT inspection companies and certification labs. $18,000/yr flat, fully customizable, ASNT/ISO 9712 ready. Demo: info@atlantisndt.com"
        canonical="/erp/no-code-customization-odoo-studio-for-ndt"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "No-Code / Low-Code Customisation for NDT ERP" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            No-Code / Low-Code Customisation for NDT ERP
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis NDT ERP includes <span className="text-emerald-400 font-semibold">Odoo Studio / Low-Code Customisation</span> — purpose-configured to help business analysts, ERP administrators, IT managers and operations leads tailor Atlantis NDT ERP to your specific client requirements — adding fields, building approval workflows, designing reports and creating client-specific PDF templates — without writing code. Part of the all-apps-included $18,000 / year subscription.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">$18,000 / year</span>
              <span className="text-emerald-200/70 text-sm">— all 35+ Odoo apps included</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">ASNT / ISO 9712 ready</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Multi-region data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20No-Code%20%2F%20Low-Code%20Customisation%20for%20NDT%20ERP"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full ERP suite
            </Link>
          </div>
        </section>

        {/* ─── WHAT IT IS ───────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is Odoo Studio / Low-Code Customisation inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Odoo Studio / Low-Code Customisation inside Atlantis NDT ERP is the same battle-tested Odoo 18 Odoo Studio / Low-Code Customisation app you would get from a generic Odoo deployment — but pre-configured, pre-loaded and pre-integrated for NDT and inspection businesses. We have spent thousands of hours configuring Odoo's odoo studio / low-code customisation capabilities specifically for business analysts, ERP administrators, IT managers and operations leads at NDT inspection contractors, calibration laboratories, pipeline integrity service providers, asset-integrity consultancies, aerospace quality-control labs, and corrosion engineering firms. The result is a system that helps you tailor Atlantis NDT ERP to your specific client requirements — adding fields, building approval workflows, designing reports and creating client-specific PDF templates — without writing code — from day one, not after a six-month consulting engagement.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Critically, Odoo Studio / Low-Code Customisation is not a stand-alone bolt-on. It lives inside the same Odoo 18 database as your CRM, accounting, inventory, project management, HR, certification tracking and inspection-report generator. That means single source of truth for every contact, every project, every technician, every invoice and every inspection record. No more spreadsheets bridging "the BD tool" and "the operations tool" and "the accounting tool". One system, configured for NDT.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              And because Atlantis NDT ERP is delivered as multi-tenant SaaS on our cloud infrastructure (with ISO 27001-certified hosting and optional in-country data residency for Saudi, UAE, India and EU customers), you do not need internal IT to install, patch, secure or back up the system. Quarterly upgrades are included — every new Odoo release is tested, qualified and pushed to your tenant on a controlled schedule, never on an unannounced Friday afternoon.
            </p>
          </div>
        </section>

        {/* ─── HOW NDT COMPANIES USE IT ─────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">How NDT inspection companies use Odoo Studio / Low-Code Customisation</h2>
          <div className="grid md:grid-cols-1 gap-4">
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 1</p><p className="text-slate-200 leading-relaxed">A Dubai inspection contractor adds 22 ADNOC-specific custom fields to the work-order module in one afternoon — zero developer involvement, zero project budget consumed.</p></div>
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 2</p><p className="text-slate-200 leading-relaxed">A Houston inspection firm builds a custom "Hurricane Recovery Inspection" workflow ahead of the 2025 storm season — used 14 times in the first 30 days post-Beryl recovery.</p></div>
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 3</p><p className="text-slate-200 leading-relaxed">A Mumbai-based ERP customer creates 8 client-specific PDF report templates without IT support — saving an estimated 40 hours of customisation cost.</p></div>
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for business analysts, ERP administrators, IT managers and operations leads</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Drag-and-drop form designer: add new fields without code</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Workflow editor: build approval ladders, escalation paths, sub-process automation</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>PDF report designer: build client-specific report templates (Aramco-format, ADNOC-format, NFPS-format)</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Dashboard editor: build executive dashboards from any underlying data</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Automation rules: "when a UT inspection report is signed off, email the client procurement contact and create a draft invoice"</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Custom data models for client-specific business processes</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Calculated-field expressions for derived metrics</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Audit-trail visibility for every Studio customisation</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Production / staging environments for safe customisation testing</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Industry templates (oilfield services, aerospace QC, calibration labs, pipeline integrity) as starting points</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Zero-code app builder for niche workflows (e.g. specialised LRUT screening tool)</span></li>
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT ERP plays nicely with the systems your refinery, EPC, fabrication-shop and operator clients already use. Out-of-the-box integrations for Odoo Studio / Low-Code Customisation:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
              <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Atlantis NDT ERP base modules (native)</span></li>
              <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>GitHub for version-controlled customisation export</span></li>
              <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Python API for advanced cases</span></li>
              <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>XML-RPC and REST for system-to-system integration</span></li>
          </ul>
        </section>

        {/* ─── PRICING ──────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Pricing — flat $18,000 / year</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              Odoo Studio / Low-Code Customisation is included in the standard Atlantis NDT ERP annual subscription. There is no per-module licence fee, no per-user fee for the first 25 users, and no hidden integration surcharges. The $18,000 / year fee covers cloud hosting, quarterly upgrades, all 35+ pre-configured Odoo 18 modules, integration with all major operator portals, mobile apps for iOS and Android, training videos, a knowledge base, and email / SMS support.
            </p>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              For inspection firms with more than 25 named users, additional users are billed at $50 / user / month. Multi-tenancy is supported at no extra cost (run separate tenants for each legal entity, with consolidated reporting). Implementation services (data migration, custom report design, integration build, training) are quoted separately based on scope.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              Pay annually in USD, AED, SAR, INR, GBP, EUR, AUD or CAD — the same invoice can be settled in the currency that suits your finance team.
            </p>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-700/30 transition-colors"
                >
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-4 text-slate-300 leading-relaxed">{f.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to see Odoo Studio / Low-Code Customisation in action?</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will walk you through Odoo Studio / Low-Code Customisation configured for your specific inspection workflow, discuss data-migration scope, and quote your implementation timeline.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20No-Code%20%2F%20Low-Code%20Customisation%20for%20NDT%20ERP"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              info@atlantisndt.com <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
