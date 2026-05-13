import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Clock, Shield, Zap, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const URL = "https://atlantisndt.com/free-trial";

const FEATURES = [
  "All 11 modules unlocked (cert tracking, calibration, work orders, scheduling, audit, doc control, asset mgmt, corrosion / RBI, quality, project, inventory)",
  "Pre-configured operator templates: Saudi Aramco SAEP-1112 / 1142, ADNOC ACS-01, Petronas PTS, Shell DEP, BP ETP, ExxonMobil GP",
  "Native ASNT SNT-TC-1A / ISO 9712 / PCN / CSWIP / AWS CWI / NACE certification tracking",
  "API 510 / 570 / 653 / 580 / 581 inspection scheduling + RBI engine",
  "Mobile field app — offline-first inspection capture (iOS / Android)",
  "Multi-client compliance dashboard with customer portal",
  "One-click audit packages (ISO 9001 / 17025 / AS9100D / API Q1)",
  "Direct vendor support — Atlantis ASNT Level III consultants on call",
];

const HOW_IT_WORKS = [
  { step: "1", title: "Request access", desc: "Submit your work email + a short scope summary. Confirmation within 1 business hour." },
  { step: "2", title: "30-minute setup call", desc: "We pre-configure your tenant with your 1-2 priority modules, ASNT scheme, and a sample operator template." },
  { step: "3", title: "Use Atlantis NDT ERP for 14 days", desc: "Run real work orders, inspection reports, and cert checks on your live data — or sample data if you prefer." },
  { step: "4", title: "Convert or walk away", desc: "Sign up for a paid plan, or export your data and walk. No auto-renewal, no card needed up front." },
];

const FAQS = [
  { q: "Do I need a credit card to start the free trial?", a: "No. Free trial is fully scope-gated to 14 days with full feature access. You convert to paid manually before day 14 if you want to continue. No auto-billing." },
  { q: "How long does setup take?", a: "30-minute call to pre-configure 1-2 modules + sample data. You can start using the platform within 24 hours of the call." },
  { q: "Can I migrate real data during the trial?", a: "Yes. We support up to 200 assets, 50 technicians, and 1,000 inspection records of free data migration via CSV import during the trial. Larger migrations are part of paid onboarding." },
  { q: "What happens to my data if I don't convert?", a: "You can export everything (assets, work orders, reports, cert records) as CSV / XLSX / PDF at any time during the trial, including day 14. Account is deactivated 30 days after trial end if not converted; full data deletion at 90 days unless you've signed up." },
  { q: "Is on-premise / air-gap deployment available in the trial?", a: "Trial defaults to multi-tenant cloud SaaS. On-premise / air-gap deployments require a separate scoping call and aren't part of the free trial. Contact info@atlantisndt.com for on-prem evaluation." },
  { q: "What if my team is bigger than 5 users?", a: "Trial supports up to 10 users at no charge. Larger teams can request an extended trial scoping call. Companies with 50+ users typically prefer a paid 30-day proof-of-concept with a dedicated onboarding consultant." },
];

export default function FreeTrial() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const company = data.get("company")?.toString().trim() || "";
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const role = data.get("role")?.toString().trim() || "";
    const team = data.get("team")?.toString().trim() || "";
    const scope = data.get("scope")?.toString().trim() || "";

    // Build mailto fallback — no backend required for now.
    const body = encodeURIComponent(
      `Free Trial Request\n\nCompany: ${company}\nName: ${name}\nEmail: ${email}\nRole: ${role}\nTeam size: ${team}\nPriority scope: ${scope}\n\n— sent from /free-trial form`
    );
    const subject = encodeURIComponent(`Free Trial Request — ${company}`);
    window.location.href = `mailto:info@atlantisndt.com?subject=${subject}&body=${body}`;

    // GA4 event
    try {
      (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "free_trial_request_submit", {
        company, role, team_size: team, page_path: "/free-trial",
      });
    } catch { /* noop */ }
    setSubmitted(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${URL}#trial`,
        "name": "Atlantis NDT ERP — 14-Day Free Trial",
        "description": "14-day free trial of Atlantis NDT ERP with all 11 modules unlocked, pre-configured operator templates, and 30-minute white-glove setup call. No credit card required.",
        "url": URL,
        "brand": { "@type": "Brand", "name": "Atlantis NDT" },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFor": "PT14D",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="14-Day Free Trial — Atlantis NDT ERP | No Credit Card Required"
        description="14-day free trial of Atlantis NDT ERP. All 11 modules unlocked, pre-configured operator templates (Saudi Aramco, ADNOC, Petronas), 30-min setup call, no credit card."
        keywords="atlantis ndt erp free trial, ndt erp trial, inspection software free trial, asnt erp trial, api 510 erp trial, 14-day trial"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Zap className="w-4 h-4" /><span className="text-sm">14-Day Free Trial — No Card Required</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Try Atlantis NDT ERP — Full Suite, 14 Days, Free</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">All 11 modules unlocked. Pre-configured for your operator (Saudi Aramco, ADNOC, Petronas, Shell, etc.). 30-minute setup call. No credit card, no auto-billing.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">What's included</h2>
            <ul className="space-y-3">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle>Request Free Trial Access</CardTitle>
                <p className="text-sm text-slate-600">5 fields. Confirmation within 1 business hour.</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded">
                    <p className="font-semibold text-emerald-700 mb-2">Mail client opened.</p>
                    <p className="text-sm text-slate-700">If your email didn't open automatically, send manually to <a href="mailto:info@atlantisndt.com" className="text-blue-600 hover:underline">info@atlantisndt.com</a> with the subject <strong>"Free Trial Request — [Your Company]"</strong>.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="company" required placeholder="Company name *" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                    <input name="name" required placeholder="Your name *" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                    <input name="email" type="email" required placeholder="Work email *" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                    <input name="role" placeholder="Your role (e.g., QC Manager, ASNT Level III)" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                    <select name="team" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none">
                      <option value="">Team size</option>
                      <option value="1-5">1-5 inspectors</option>
                      <option value="6-15">6-15 inspectors</option>
                      <option value="16-50">16-50 inspectors</option>
                      <option value="51-200">51-200 inspectors</option>
                      <option value="200+">200+ inspectors</option>
                    </select>
                    <textarea name="scope" rows={3} placeholder="Priority scope — e.g., 'API 510 inspection scheduling for 1,200 vessels' or 'ISO 17025 calibration cert generation'" className="w-full px-3 py-2 border border-slate-300 rounded focus:border-blue-500 focus:outline-none" />
                    <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 flex items-center justify-center gap-2">Request Free Trial <ArrowRight className="w-4 h-4" /></button>
                    <p className="text-xs text-slate-500 mt-2">By submitting you agree to be contacted by Atlantis NDT. We don't sell or share your data.</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">How the Free Trial Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(s => (
              <Card key={s.step} className="border-l-4 border-blue-600">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-2">{s.step}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-slate-600">{s.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-8">Free Trial FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <Card key={i}>
                <CardHeader><CardTitle className="text-lg">{f.q}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600 leading-relaxed">{f.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Talk First?</h2>
          <p className="text-blue-100 mb-8 text-lg">Book a 30-minute demo before starting the trial.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Demo</Link>
            <a href="mailto:info@atlantisndt.com?subject=Free Trial Inquiry" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
