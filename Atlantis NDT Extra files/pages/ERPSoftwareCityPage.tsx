import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";
import LanguageDropdown from "@/components/LanguageDropdown";
import allCities from "@/data/erp-cities-all-tiers.json";
import { buildAlternates } from "@/lib/hreflang";
import type { LangCode } from "@/data/language-map";

/**
 * Single dynamic component that renders ALL 120 ERP city pages.
 * Routes:
 *   /ndt-erp-:slug              → EN canonical
 *   /:lang/ndt-erp-:slug        → translated alternate (es/pt/de/ko/ar/fr/ru)
 *
 * Data sources:
 *   /data/erp-cities-all-tiers.json   → 120 city objects (canonical EN content)
 *   /data/translations/{lang}/ndt-erp-{slug}.json   → per-city translation (loaded dynamically)
 *
 * If the slug is not in the city data, render a 404. If the lang is requested but no
 * translation file exists, fall back to EN with hreflang stripped.
 */

type City = {
  slug: string;
  city: string;
  state?: string;
  country: string;
  region: string;
  industries: string[];
  namedFacilities: string[];
  codes: string[];
  integrationStacks: string[];
  languages: LangCode[];
  defaultLanguage: LangCode;
  title60: string;
  meta155: string;
  h1: string;
  localHook: string;
  integrationPainParagraph: string;
  remoteDeliveryPitch: string;
  featureBullets: string[];
  paaQuestions: { q: string; a: string }[];
  tier?: number;
};

type Translation = Partial<Pick<City,
  "title60" | "meta155" | "h1" | "localHook" |
  "integrationPainParagraph" | "remoteDeliveryPitch" |
  "featureBullets" | "paaQuestions"
>> & { lang: LangCode; route: string; canonicalEnRoute: string };

const ORIGIN = "https://atlantisndt.com";

// Eagerly load every translation JSON at build time so prerender can pre-bake them.
// Vite's import.meta.glob handles this lazily for SSR/CSR; statically for prerender.
const translationModules = import.meta.glob<Translation>(
  "/src/data/translations/*/ndt-erp-*.json",
  { eager: true, import: "default" }
);

function findCity(slug: string): City | undefined {
  return (allCities as unknown as City[]).find(c => c.slug === slug);
}

function findTranslation(slug: string, lang: LangCode): Translation | undefined {
  const key = Object.keys(translationModules).find(k =>
    k.endsWith(`/${lang}/ndt-erp-${slug}.json`)
  );
  return key ? translationModules[key] : undefined;
}

export default function ERPSoftwareCityPage() {
  const { slug = "", lang } = useParams<{ slug: string; lang?: LangCode }>();
  const city = findCity(slug);

  if (!city) return <Navigate to="/404" replace />;

  const requestedLang: LangCode = (lang as LangCode) || "en";
  const t = requestedLang !== "en" ? findTranslation(slug, requestedLang) : undefined;

  // Use translation copy if available, else fall back to canonical EN.
  const copy = {
    title60: t?.title60 ?? city.title60,
    meta155: t?.meta155 ?? city.meta155,
    h1: t?.h1 ?? city.h1,
    localHook: t?.localHook ?? city.localHook,
    integrationPainParagraph: t?.integrationPainParagraph ?? city.integrationPainParagraph,
    remoteDeliveryPitch: t?.remoteDeliveryPitch ?? city.remoteDeliveryPitch,
    featureBullets: t?.featureBullets ?? city.featureBullets,
    paaQuestions: t?.paaQuestions ?? city.paaQuestions,
  };

  const isRtl = requestedLang === "ar";
  const canonicalRoute = requestedLang === "en"
    ? `/ndt-erp-${slug}`
    : `/${requestedLang}/ndt-erp-${slug}`;

  const alternates = useMemo(
    () => buildAlternates(ORIGIN, `ndt-erp-${slug}`, `ndt-erp-${slug}`, city.languages),
    [slug, city.languages]
  );

  // Reflect the lang attribute + dir on <html> for translated pages
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", requestedLang);
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
    return () => {
      root.setAttribute("lang", "en");
      root.setAttribute("dir", "ltr");
    };
  }, [requestedLang, isRtl]);

  // Schema.org combo: SoftwareApplication + LocalBusiness + FAQPage + BreadcrumbList
  const breadcrumb = [
    { name: "Home", url: `${ORIGIN}/` },
    { name: "NDT ERP Solution", url: `${ORIGIN}/ndt-erp-software` },
    { name: city.city, url: `${ORIGIN}${canonicalRoute}` },
  ];
  const localBusiness = {
    name: `Atlantis NDT — ${city.city}`,
    address: { addressLocality: city.city, addressRegion: city.state || "", addressCountry: city.country },
    serviceArea: city.region,
    industries: city.industries,
  };
  const faq = copy.paaQuestions.map(q => ({ q: q.q, a: q.a }));
  const software = {
    name: "Atlantis NDT ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { price: "0", priceCurrency: "USD", description: "Custom quote per deployment scope" },
  };

  return (
    <>
      <SEOHead
        title={copy.title60}
        description={copy.meta155}
        canonical={`${ORIGIN}${canonicalRoute}`}
        alternates={alternates}
        lang={requestedLang}
        dir={isRtl ? "rtl" : "ltr"}
        software={software}
        localBusiness={localBusiness}
        faq={faq}
        breadcrumb={breadcrumb}
      />
      <Navigation />
      <PillarHubNav />

      <main className={`min-h-screen ${isRtl ? "text-right" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
        <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{copy.h1}</h1>
              <p className="text-slate-300 text-lg max-w-3xl">{copy.localHook}</p>
            </div>
            <LanguageDropdown
              currentLang={requestedLang}
              supportedLangs={city.languages}
              routeKey={`ndt-erp-${slug}`}
              slug={`ndt-erp-${slug}`}
            />
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6">Why Atlantis NDT ERP for {city.city}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-10">
            {copy.featureBullets.map((b, i) => (
              <li key={i} className="bg-slate-50 border-l-4 border-slate-700 p-4 rounded">
                {b}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Local context — operators & integration</h2>
          <p className="mb-4 text-slate-700 leading-relaxed">{copy.integrationPainParagraph}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white border border-slate-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Named facilities we serve</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {city.namedFacilities.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Codes & standards</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {city.codes.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Integrates with</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {city.integrationStacks.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-3">Remote deployment for {city.city}</h2>
          <p className="mb-10 text-slate-700 leading-relaxed">{copy.remoteDeliveryPitch}</p>

          <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
          <div className="space-y-4 mb-10">
            {copy.paaQuestions.map((qa, i) => (
              <details key={i} className="bg-slate-50 border border-slate-200 rounded p-4">
                <summary className="font-semibold cursor-pointer">{qa.q}</summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{qa.a}</p>
              </details>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Talk to an ASNT Level III about your {city.city} program
            </h2>
            <p className="mb-6 text-slate-300">
              30-minute scoping call. No pressure. We tell you whether Atlantis fits before we quote.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded hover:bg-yellow-300 transition"
            >
              Request a call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
