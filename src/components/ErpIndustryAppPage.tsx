import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, DollarSign, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

export interface ErpIndustryAppPageProps {
  /** e.g. "CMMS for Aerospace Quality Control" */
  pageTitle: string;
  /** Page slug e.g. "cmms-for-aerospace-quality-control" — used as canonical path */
  slug: string;
  /** App name e.g. "CMMS (Computerized Maintenance Management)" */
  appName: string;
  /** Industry name e.g. "aerospace quality control" */
  industry: string;
  /** Breadcrumb leaf label */
  breadcrumbLabel: string;
  /** Meta description */
  metaDescription: string;
  /** Hero paragraph (1-2 sentences) */
  heroBody: string;
  /** "What it is" paragraph(s) — 2 paragraphs of dense vertical context */
  whatItIs: string[];
  /** Industry-specific use cases (3-4) */
  useCases: { useCase: string; body: string }[];
  /** Key features specific to vertical (10-14 items) */
  keyFeatures: string[];
  /** Integration partners specific to vertical (6-10 items) */
  integrations: string[];
  /** 8 industry-specific FAQs */
  faqs: { question: string; answer: string }[];
  /** Pricing currency note (optional, defaults to USD-only) */
  pricingNote?: string;
  /** Trust badge subtitle e.g. "ASNT / NAS 410 / NADCAP ready" */
  trustBadge?: string;
}

export default function ErpIndustryAppPage(props: ErpIndustryAppPageProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title={`${props.pageTitle} — regional pricing All Odoo Apps Included | Atlantis NDT`}
        description={props.metaDescription}
        canonical={`/erp/${props.slug}`}
        faq={props.faqs}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: props.breadcrumbLabel }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {props.pageTitle}
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            {props.heroBody}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">regional pricing</span>
              <span className="text-emerald-200/70 text-sm">— all 35+ Odoo apps included</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">{props.trustBadge || "ASNT / ISO 9712 ready"}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Multi-region data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:info@atlantisndt.com?subject=Demo%3A%20${encodeURIComponent(props.pageTitle)}`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full ERP suite
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Talk to the team
            </Link>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is {props.appName} for {props.industry} inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            {props.whatItIs.map((para, idx) => (
              <p key={idx} className={`text-slate-300 leading-relaxed${idx > 0 ? " mt-4" : ""}`}>{para}</p>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">How {props.industry} firms use {props.appName}</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {props.useCases.map((uc, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
                <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">{uc.useCase}</p>
                <p className="text-slate-200 leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for {props.industry}</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            {props.keyFeatures.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* INTEGRATIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT ERP plays nicely with the systems your {props.industry} clients already use. Out-of-the-box integrations for {props.appName}:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            {props.integrations.map((i, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PRICING */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Pricing — contact us for a regional quote</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              {props.appName} is included in the standard Atlantis NDT ERP annual subscription. There is no per-module licence fee, no per-user fee for the first 25 users, and no hidden integration surcharges. The subscription fee covers cloud hosting, quarterly upgrades, all 35+ pre-configured Odoo 18 modules, integration with all major industry portals, mobile apps for iOS and Android, training videos, knowledge base, and email / SMS support.
            </p>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              For {props.industry} firms with more than 25 named users, additional users are billed at $50 / user / month. Multi-tenancy is supported at no extra cost. Implementation services (data migration, custom report design, integration build, training) are quoted separately based on scope.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              {props.pricingNote || "Pay annually in USD, AED, SAR, INR, GBP, EUR, AUD or CAD — the same invoice can be settled in the currency that suits your finance team."}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {props.faqs.map((f, idx) => (
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

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to see {props.appName} for {props.industry} in action?</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will walk you through {props.appName} configured for your specific {props.industry} workflow, discuss data-migration scope, and quote your implementation timeline.</p>
            <a href={`mailto:info@atlantisndt.com?subject=Demo%3A%20${encodeURIComponent(props.pageTitle)}`}
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
