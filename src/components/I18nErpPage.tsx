import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────

export interface I18nErpModule {
  title: string;
  description: string;
  features: string[];
}

export interface I18nErpFAQ {
  question: string;
  answer: string;
}

export interface I18nErpPainPoint {
  title: string;
  problem: string;
  solution: string;
}

export interface I18nErpUiStrings {
  /** Hero badge text */
  heroBadge: string;
  /** Main H1 — should contain {city} placeholder substituted upstream */
  heroTitle: string;
  /** H1 subtitle */
  heroSubtitle: string;
  /** Hero intro paragraph (substituted upstream) */
  heroIntro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Trust stat labels */
  statCompanies: string;
  statRating: string;
  statAdminReduction: string;
  statModules: string;
  /** Section: market context */
  marketContextLabel: string;
  /** Section: pain points */
  painPointsTitle: string;
  painPointsSubtitle: string;
  problemLabel: string;
  solutionLabel: string;
  /** Section: modules */
  modulesTitle: string;
  modulesSubtitle: string;
  /** Section: ROI */
  roiTitle: string;
  /** Section: FAQ */
  faqTitle: string;
  /** Section: related */
  alsoServingTitle: string;
  /** Section: final CTA */
  finalCtaTitle: string;
  finalCtaBody: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  /** Switch to English link label */
  switchLangLabel: string;
}

interface I18nErpPageProps {
  /** "ar" | "es" — controls hreflang + html lang attribute */
  lang: 'ar' | 'es';
  /** Document direction. "rtl" for ar, "ltr" for es. */
  dir: 'rtl' | 'ltr';
  /** Localised city name (e.g. "الرياض", "Ciudad de México") */
  city: string;
  /** ISO country code (e.g. "SA", "AE", "MX", "BR", "AR", "CO") */
  countryCode: string;
  /** Localised country name */
  countryName: string;
  /** URL slug WITHOUT the language prefix (e.g. "ndt-erp-saudi-arabia") */
  slug: string;
  /** Full canonical path including language prefix (e.g. "/ar/ndt-erp-saudi-arabia") */
  canonicalPath: string;
  /** English equivalent path used in hreflang alternate (e.g. "/ndt-erp-saudi-arabia") */
  englishPath: string;
  /** Page title (already in target language) */
  pageTitle: string;
  /** Meta description (already in target language) */
  pageDescription: string;
  /** Keywords (in target language) */
  keywords: string;
  /** Long-form market context paragraph (≥120 words in target language) */
  marketContext: string;
  /** ROI / quantified outcomes paragraph (≥80 words in target language) */
  roiBody: string;
  /** Three pain points specific to the city */
  painPoints: [I18nErpPainPoint, I18nErpPainPoint, I18nErpPainPoint];
  /** Six ERP modules (translated) */
  modules: I18nErpModule[];
  /** Local integrations / regulators / operator names */
  integrations: string[];
  /** FAQ items in target language */
  faqs: I18nErpFAQ[];
  /** UI strings localised */
  ui: I18nErpUiStrings;
}

function FAQItem({ question, answer, dir }: { question: string; answer: string; dir: 'rtl' | 'ltr' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className={`w-full flex items-center justify-between px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} font-semibold text-foreground hover:bg-secondary/40 transition-colors duration-200`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ms-3" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ms-3" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function I18nErpPage(props: I18nErpPageProps) {
  const {
    lang,
    dir,
    city,
    countryCode,
    countryName,
    slug,
    canonicalPath,
    englishPath,
    pageTitle,
    pageDescription,
    keywords,
    marketContext,
    roiBody,
    painPoints,
    modules,
    integrations,
    faqs,
    ui,
  } = props;

  const SITE_URL = 'https://atlantisndt.com';
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const englishUrl = `${SITE_URL}${englishPath}`;

  const hreflangLinks = [
    { hreflang: lang, href: canonicalUrl },
    { hreflang: 'en', href: englishUrl },
    { hreflang: 'x-default', href: englishUrl },
  ];

  // JSON-LD: SoftwareApplication + LocalBusiness (single aggregateRating)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "Atlantis NDT ERP",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Inspection Management Software",
        "operatingSystem": "Web Browser",
        "description": pageDescription,
        "url": canonicalUrl,
        "inLanguage": lang,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1",
        },
        "provider": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "url": SITE_URL,
        },
        "areaServed": {
          "@type": "Place",
          "name": city,
          "containedInPlace": {
            "@type": "Country",
            "name": countryName,
          },
        },
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": lang,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "primaryImageOfPage": `${SITE_URL}/og-image.jpg`,
      },
    ],
  };

  // LocalBusiness payload — keeps a single aggregateRating
  const localBusiness = {
    name: `Atlantis NDT — ${city}`,
    serviceType: "NDT ERP Software",
    city,
    country: countryCode,
    description: pageDescription,
  };

  return (
    <div className="min-h-screen pt-20" dir={dir} lang={lang}>
      <Navigation />
      <PillarHubNav active="ndt-erp" />

      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonical={canonicalUrl}
        structuredData={structuredData}
        hreflangLinks={hreflangLinks}
        localBusiness={localBusiness}
        faq={faqs}
        lang={lang}
        dir={dir}
      />

      {/* Hero */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {ui.heroBadge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {ui.heroTitle}
              <br />
              <span className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                {ui.heroSubtitle}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              {ui.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {ui.ctaPrimary} <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to={englishPath}
                className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
              >
                {ui.switchLangLabel}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "127+", label: ui.statCompanies },
                { value: "4.8/5", label: ui.statRating },
                { value: "40%", label: ui.statAdminReduction },
                { value: "6", label: ui.statModules },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-card rounded-xl p-4 shadow-sm border border-border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Market context */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {ui.marketContextLabel} — {city}, {countryName}
              </span>
            </div>
            <p className="text-lg text-foreground leading-relaxed">{marketContext}</p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ui.painPointsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{ui.painPointsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {painPoints.map((item, idx) => {
              const Icon = [AlertCircle, Clock, Shield][idx] ?? AlertCircle;
              const color = ["text-red-500", "text-amber-500", "text-blue-500"][idx];
              const bg = ["bg-red-50 dark:bg-red-950/20", "bg-amber-50 dark:bg-amber-950/20", "bg-blue-50 dark:bg-blue-950/20"][idx];
              return (
                <Card key={item.title} className="h-full border-0 shadow-md hover-scale">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">{ui.problemLabel}</p>
                      <p className="text-sm text-muted-foreground">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">{ui.solutionLabel}</p>
                      <p className="text-sm text-foreground">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ui.modulesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{ui.modulesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => (
              <Card key={m.title} className="h-full hover-scale border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{m.description}</p>
                  <ul className="space-y-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {integrations.map((it) => (
                <div key={it} className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{ui.roiTitle}</h2>
            </div>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">{roiBody}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{ui.faqTitle}</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <FAQItem key={f.question} question={f.question} answer={f.answer} dir={dir} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ui.finalCtaTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{ui.finalCtaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                {ui.finalCtaPrimary} <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to={englishPath}
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/50 transition-colors"
              >
                {ui.finalCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
