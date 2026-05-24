import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";
import LanguageDropdown from "@/components/LanguageDropdown";
import { buildAlternates } from "@/lib/hreflang";
import type { LangCode } from "@/data/language-map";

/**
 * Hub page for /ndt-erp-software with optional /{lang}/ndt-erp-software variants.
 * The 5 hub translations live in /src/data/translations/{lang}/ndt-erp-software.json.
 */

type HubTranslation = {
  lang: LangCode;
  route: string;
  title60: string;
  meta155: string;
  h1: string;
  heroLead: string;
  sections: { heading: string; body: string }[];
  featureBullets: string[];
  paaQuestions: { q: string; a: string }[];
  cta: { heading: string; body: string; button: string };
};

const ORIGIN = "https://atlantisndt.com";
const HUB_LANGS: LangCode[] = ["en", "es", "pt", "de", "ko", "ar"];

const hubTranslations = import.meta.glob<HubTranslation>(
  "/src/data/translations/*/ndt-erp-software.json",
  { eager: true, import: "default" }
);

function findHubTranslation(lang: LangCode): HubTranslation | undefined {
  const key = Object.keys(hubTranslations).find(k => k.endsWith(`/${lang}/ndt-erp-software.json`));
  return key ? hubTranslations[key] : undefined;
}

// Default EN hub copy — kept inline so EN doesn't depend on a translation JSON.
const EN_HUB: HubTranslation = {
  lang: "en",
  route: "/ndt-erp-software",
  title60: "NDT ERP Software — Inspection Management System | Atlantis",
  meta155: "Atlantis NDT ERP — purpose-built inspection management for refineries, aerospace MRO, shipyards, power, and NDE service providers. SAP / Maximo integration.",
  h1: "Atlantis NDT ERP — Inspection Management Software",
  heroLead: "Purpose-built ERP for NDT and inspection programs. Designed by ASNT Level III practitioners. Deployed remotely in 30 days under Level III supervision.",
  sections: [
    { heading: "What it does", body: "Unifies field inspection capture, integrity management, and work-order flow against your existing SAP PM, IBM Maximo, or Oracle EAM instance — without ripping out your CMMS of record." },
    { heading: "Who it's for", body: "Refineries, petrochemical operators, aerospace MRO, shipyards, power generation (incl. nuclear), and the NDE service-provider network supplying them." },
  ],
  featureBullets: [
    "API 510/570/653 + ASME V/VIII/XI native inspection scheduling",
    "PAUT/TOFD/UT/RT/MT/PT/VT method support — DICONDE-compliant scan archive",
    "Bidirectional SAP PM + IBM Maximo integration via REST + MIF",
    "Remote ASNT Level III review with 48-hour SLA (12-hour for turnaround-critical)",
    "Technician certification tracking under SNT-TC-1A / NAS 410 / ISO 9712",
    "30/60/90-day remote deployment — no on-site consulting fees",
  ],
  paaQuestions: [
    { q: "Does this replace SAP PM or IBM Maximo?", a: "No — Atlantis sits as the inspection data layer and pushes due dates and findings into your CMMS of record. We complement, we don't replace." },
    { q: "Can it integrate with our existing RBI platform (Meridium, AssetWise)?", a: "Yes — RBI outputs (next inspection date, scope, damage mechanism) ingest via API or flat file, and findings flow back so your RBI model gets fed real evidence." },
    { q: "Is the data hosted in a way that passes refinery IT review?", a: "AWS US regions, SOC 2 Type II, AES-256 at rest, TLS 1.3 in transit, SSO via SAML/OIDC, RBAC, full audit log. Private-tenant deployment available." },
    { q: "How long does deployment take?", a: "30/60/90 days remote — no on-site consulting required. We've done this with refineries, MRO bases, shipyards, and nuclear plant operators." },
    { q: "Do you support non-English deployments?", a: "Yes — Spanish, Portuguese, German, Korean, and Arabic UI/PDF report variants. French and Russian on request." },
  ],
  cta: { heading: "Talk to an ASNT Level III about your program", body: "30-minute scoping call. No pressure. We tell you whether Atlantis fits before we quote.", button: "Request a call" },
};

export default function ERPSoftwareHubPage() {
  const { lang } = useParams<{ lang?: LangCode }>();
  const requestedLang: LangCode = (lang as LangCode) || "en";
  const isRtl = requestedLang === "ar";
  const t = requestedLang === "en" ? EN_HUB : (findHubTranslation(requestedLang) ?? EN_HUB);

  const canonicalRoute = requestedLang === "en"
    ? "/ndt-erp-software"
    : `/${requestedLang}/ndt-erp-software`;

  const alternates = buildAlternates(ORIGIN, "ndt-erp-software", "ndt-erp-software", HUB_LANGS);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", requestedLang);
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
    return () => {
      root.setAttribute("lang", "en");
      root.setAttribute("dir", "ltr");
    };
  }, [requestedLang, isRtl]);

  return (
    <>
      <SEOHead
        title={t.title60}
        description={t.meta155}
        canonical={`${ORIGIN}${canonicalRoute}`}
        alternates={alternates}
        lang={requestedLang}
        dir={isRtl ? "rtl" : "ltr"}
        breadcrumb={[
          { name: "Home", url: `${ORIGIN}/` },
          { name: "NDT ERP Software", url: `${ORIGIN}${canonicalRoute}` },
        ]}
        faq={t.paaQuestions}
        software={{
          name: "Atlantis NDT ERP",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { price: "0", priceCurrency: "USD", description: "Custom quote" },
        }}
      />
      <Navigation />
      <PillarHubNav />

      <main className="min-h-screen" dir={isRtl ? "rtl" : "ltr"}>
        <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-14 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{t.h1}</h1>
              <p className="text-slate-300 text-lg max-w-3xl">{t.heroLead}</p>
            </div>
            <LanguageDropdown
              currentLang={requestedLang}
              supportedLangs={HUB_LANGS}
              routeKey="ndt-erp-software"
              slug="ndt-erp-software"
            />
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-10">
          {t.sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">{s.heading}</h2>
              <p className="text-slate-700 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <h2 className="text-2xl font-semibold mb-6">Capabilities</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-10">
            {t.featureBullets.map((b, i) => (
              <li key={i} className="bg-slate-50 border-l-4 border-slate-700 p-4 rounded">{b}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-4 mb-10">
            {t.paaQuestions.map((qa, i) => (
              <details key={i} className="bg-slate-50 border border-slate-200 rounded p-4">
                <summary className="font-semibold cursor-pointer">{qa.q}</summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{qa.a}</p>
              </details>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-3">{t.cta.heading}</h2>
            <p className="mb-6 text-slate-300">{t.cta.body}</p>
            <a href="/contact" className="inline-block bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded hover:bg-yellow-300 transition">{t.cta.button}</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
