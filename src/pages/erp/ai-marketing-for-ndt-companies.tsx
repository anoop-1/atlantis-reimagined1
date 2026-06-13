import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, Sparkles, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with AI Marketing in Atlantis NDT ERP?",
    answer: "AI Marketing is bundled inside the standard Atlantis NDT ERP — no per-module licence. You get AI-generated email subject lines, AI-assisted body copy suggestions, automated audience segmentation across your existing customer base, behaviour-based nurture flows, and lead-scoring rules pre-tuned for NDT inspection-buyer personas (asset-integrity managers, EPC procurement leads, refinery turnaround planners, fabrication-shop QC heads). It runs on the same Odoo 18 data store as your CRM, Sales, and Helpdesk — so segmentation pulls live deal stage, RFQ history, and certification-portal status."
  },
  {
    question: "How is AI Marketing configured for NDT inspection companies specifically?",
    answer: "We pre-segment audiences around NDT-buyer realities: refinery turnaround windows, EPC project phases, code-anniversary cycles (API 510 / 570 / 653 inspection intervals), and prequalification renewals (Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld). Subject-line generation is biased toward inspection-industry vocabulary (UT, RT, PAUT, TOFD, FFS, RBI) so the AI does not produce generic SaaS-marketing fluff. Nurture flows are templated for the long, technical NDT sales cycle — months, not days."
  },
  {
    question: "Can AI Marketing integrate with our existing systems?",
    answer: "Yes. Bidirectional sync with Microsoft Outlook, Microsoft 365, Google Workspace, LinkedIn (sales activity), HubSpot (for migration), Mailchimp / Brevo (for one-off blasts), WhatsApp Business API (for GCC + India accounts), and any SMTP gateway. Lead capture from your atlantisndt.com / corporate-site contact forms flows straight into the same segmentation engine. Operator-portal status (APQS, Tejari, Achilles, Avetta, ISNetworld) is exposed as custom fields so segmentation can filter by 'qualified at Aramco — last contacted 90+ days ago'."
  },
  {
    question: "What does implementation look like for AI Marketing?",
    answer: "Standard rollout runs 3–6 weeks alongside your wider ERP onboarding. Week 1: import existing email lists, dedupe, tag by buyer persona. Week 2: configure 6–10 NDT-specific nurture flows (cold-prospect, RFQ-followup, post-inspection-upsell, certification-renewal, turnaround-planning, code-anniversary). Week 3–4: review AI-generated subject-line and body suggestions for tone alignment. Weeks 5–6: launch, A/B test, monitor deliverability. A dedicated Customer Success Manager owns the first 12 months."
  },
  {
    question: "Is the data secure and compliant with regional data-protection laws?",
    answer: "Yes. Hosted on ISO 27001-certified infrastructure with US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. Compliant with GDPR, PDPL (Saudi / UAE / Bahrain), DPDP Act 2023 (India), CCPA / CPRA, PIPEDA, and Singapore PDPA. AES-256 at rest, TLS 1.3 in transit. Customer email-list data is never used for AI training, never sold, never shared with third parties. CAN-SPAM, CASL, and PECR compliance helpers built into every send."
  }
];

export default function AiMarketingForNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="AI Marketing for NDT Companies — Affordable, Accessible | Atlantis NDT"
        description="AI-Powered Marketing inside Atlantis NDT ERP. Automated email subject lines, audience segmentation, lead scoring. Designed for NDT inspection companies. Affordable, accessible, fully customizable. Demo on request."
        canonical="/erp/ai-marketing-for-ndt-companies"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "AI Marketing for NDT Companies" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            AI-Powered Marketing — Inside Atlantis NDT ERP
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Automated <span className="text-emerald-400 font-semibold">email subject lines</span>, audience segmentation, lead scoring and behaviour-based nurture flows. Designed for NDT inspection companies, certification labs, asset-integrity consultancies and inspection-software resellers. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Affordable</span>
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
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20AI%20Marketing%20for%20NDT"
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
          <h2 className="text-3xl font-bold mb-5">What is AI Marketing inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              AI Marketing is the Odoo 18 Marketing Automation + Email Marketing apps layered with AI assistance — subject-line generation, body-copy suggestions, and audience-segment recommendations — and pre-configured for the NDT inspection industry. It lives in the same Odoo database as your CRM, Sales, Helpdesk, Inventory and Certification-Tracking modules, so every segment is live (deal stage, RFQ history, last-inspection date, certification-renewal window) instead of stale CSV exports.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Business development managers at NDT contractors use it to keep dormant accounts warm during refinery off-cycles; technical-sales engineers use it to follow up on RFQs without losing the technical thread; inspection-business owners use it to track which segments actually convert to invoiced jobs. Because everything is in one ERP, the marketing attribution is clean — you see exactly which campaign brought in the $180,000 PAUT scope that closed last quarter.
            </p>
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for NDT marketing teams</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>AI-generated email subject lines tuned to NDT-buyer language (UT, RT, PAUT, TOFD, RBI, FFS)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Audience segmentation by inspection method, code, industry and account tier — pulled live from CRM</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Behaviour-based nurture flows (RFQ-followup, certification-renewal, post-inspection-upsell, dormant-account)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Lead-scoring rules pre-tuned for NDT inspection-buyer personas</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>A/B testing on subject lines, body copy and send time</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Deliverability dashboard with SPF / DKIM / DMARC alignment monitoring</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Drag-and-drop email designer with NDT-industry templates ready to clone</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Landing-page builder linked to the same CRM (lead capture goes straight to the right salesperson)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Campaign attribution to closed-won opportunities in Sales — clean ROI reporting</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>CAN-SPAM, CASL, GDPR, PECR compliance helpers on every send</span></li>
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT ERP AI Marketing connects to:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Microsoft Outlook &amp; Microsoft 365</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Google Workspace (Gmail + Calendar)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>LinkedIn Sales Navigator</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>HubSpot &amp; Mailchimp (migration / dual-run)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>WhatsApp Business API (GCC + India)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SAP S/4HANA &amp; IBM Maximo (account sync)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld (qualification status as segment filter)</span></li>
          </ul>
        </section>

        {/* ─── QUOTE & ONBOARDING ───────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Quote &amp; Onboarding</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              AI Marketing is included in the standard Atlantis NDT ERP subscription — alongside CRM, Sales, Helpdesk, Inventory and Certification Tracking. <span className="text-emerald-400 font-semibold">Affordable, accessible, fully customizable.</span> Pricing tiers are calibrated regionally so inspection companies in the GCC, India, South-East Asia, Europe, North America and Australia get a fair, contextual rate.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              Demo on request. Quote on request. Free trial: <Link to="/erp" className="text-emerald-400 underline">atlantisndt.com/erp</Link>.
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
            <h2 className="text-3xl font-bold mb-3">See AI Marketing in action</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will walk you through the AI subject-line generator, NDT-buyer segmentation, and a nurture flow configured to your inspection-line of business.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20AI%20Marketing%20for%20NDT"
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
