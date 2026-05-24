import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";
import LanguageDropdown from "@/components/LanguageDropdown";
import allCities from "@/data/digital-twin-cities.json";
import { buildAlternates } from "@/lib/hreflang";
import type { LangCode } from "@/data/language-map";

/**
 * Single dynamic component that renders ALL 120 digital-twin city pages.
 * Routes:
 *   /digital-twin-:slug              → EN canonical
 *   /:lang/digital-twin-:slug        → translated alternate (es/pt/de/ko/ar/fr/ru)
 *
 * Data sources:
 *   /data/digital-twin-cities.json                         → 120 city objects (canonical EN)
 *   /data/translations/{lang}/digital-twin-{slug}.json     → per-city translation (lazy)
 *
 * Parallel to /ndt-erp-{slug}: every DT page cross-links to the matching ERP page so
 * the two URL families reinforce each other in Google's eyes.
 */

type DtIndustry =
  | "oil-gas"
  | "petrochemical"
  | "lng"
  | "maritime"
  | "defense"
  | "aerospace"
  | "power-generation";

type DtCity = {
  slug: string;
  city: string;
  country: string;
  tier?: number;
  region: string;
  languages: LangCode[];
  namedFacilities: string[];
  regulatorCodes: string[];
  dtTitle: string;
  dtMetaDescription: string;
  dtH1: string;
  dtHeroSubline: string;
  dtIndustries: DtIndustry[];
  dtPrimaryAssets: string[];
  dtRegulatorCodesApplied: string[];
  dtFaq: { q: string; a: string }[];
  dtPaa: string[];
};

type Translation = Partial<
  Pick<
    DtCity,
    | "dtTitle"
    | "dtMetaDescription"
    | "dtH1"
    | "dtHeroSubline"
    | "dtPrimaryAssets"
    | "dtRegulatorCodesApplied"
    | "dtFaq"
    | "dtPaa"
  >
> & { lang: LangCode; route: string; canonicalEnRoute: string };

const ORIGIN = "https://atlantisndt.com";

// Map primary DT industry -> vertical hub URL.
const HUB_BY_IND: Record<DtIndustry, string> = {
  "oil-gas": "/digital-twins/oil-and-gas",
  petrochemical: "/digital-twins/oil-and-gas",
  lng: "/digital-twins/oil-and-gas",
  maritime: "/digital-twins/maritime",
  defense: "/digital-twins/defense",
  aerospace: "/digital-twins/aerospace",
  "power-generation": "/digital-twins/oil-and-gas",
};

const HUB_LABEL: Record<DtIndustry, string> = {
  "oil-gas": "Oil & Gas digital twins",
  petrochemical: "Oil & Gas digital twins",
  lng: "Oil & Gas digital twins",
  maritime: "Maritime digital twins",
  defense: "Defense digital twins",
  aerospace: "Aerospace digital twins",
  "power-generation": "Oil & Gas digital twins",
};

// Eagerly load every translation JSON at build time so prerender can pre-bake them.
const translationModules = import.meta.glob<Translation>(
  "/src/data/translations/*/digital-twin-*.json",
  { eager: true, import: "default" },
);

function findCity(slug: string): DtCity | undefined {
  return (allCities as unknown as DtCity[]).find((c) => c.slug === slug);
}

function findTranslation(slug: string, lang: LangCode): Translation | undefined {
  const key = Object.keys(translationModules).find((k) =>
    k.endsWith(`/${lang}/digital-twin-${slug}.json`),
  );
  return key ? translationModules[key] : undefined;
}

export default function DigitalTwinCityPage() {
  const { slug = "", lang } = useParams<{ slug: string; lang?: LangCode }>();
  const city = findCity(slug);

  if (!city) return <Navigate to="/404" replace />;

  const requestedLang: LangCode = (lang as LangCode) || "en";
  const t = requestedLang !== "en" ? findTranslation(slug, requestedLang) : undefined;

  // Use translation copy if available, else fall back to canonical EN.
  const copy = {
    dtTitle: t?.dtTitle ?? city.dtTitle,
    dtMetaDescription: t?.dtMetaDescription ?? city.dtMetaDescription,
    dtH1: t?.dtH1 ?? city.dtH1,
    dtHeroSubline: t?.dtHeroSubline ?? city.dtHeroSubline,
    dtPrimaryAssets: t?.dtPrimaryAssets ?? city.dtPrimaryAssets,
    dtRegulatorCodesApplied: t?.dtRegulatorCodesApplied ?? city.dtRegulatorCodesApplied,
    dtFaq: t?.dtFaq ?? city.dtFaq,
    dtPaa: t?.dtPaa ?? city.dtPaa,
  };

  const isRtl = requestedLang === "ar";
  const canonicalRoute =
    requestedLang === "en"
      ? `/digital-twin-${slug}`
      : `/${requestedLang}/digital-twin-${slug}`;

  const alternates = useMemo(
    () =>
      buildAlternates(
        ORIGIN,
        `digital-twin-${slug}`,
        `digital-twin-${slug}`,
        city.languages,
      ),
    [slug, city.languages],
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

  // Parallel ERP page + primary vertical hub
  const erpRoute = `/ndt-erp-${slug}`;
  const primaryIndustry: DtIndustry = city.dtIndustries[0] ?? "oil-gas";
  const hubRoute = HUB_BY_IND[primaryIndustry];
  const hubLabel = HUB_LABEL[primaryIndustry];

  // Schema.org combo: SoftwareApplication + LocalBusiness + FAQPage + BreadcrumbList
  const breadcrumb = [
    { name: "Home", url: `${ORIGIN}/` },
    { name: "Digital Twins", url: `${ORIGIN}/digital-twins` },
    { name: city.city, url: `${ORIGIN}${canonicalRoute}` },
  ];
  const localBusiness = {
    name: `Atlantis NDT — ${city.city} Digital Twin`,
    address: {
      addressLocality: city.city,
      addressRegion: city.region,
      addressCountry: city.country,
    },
    serviceArea: city.region,
    industries: city.dtIndustries,
  };
  const faq = copy.dtFaq.map((q) => ({ q: q.q, a: q.a }));
  const software = {
    name: "Atlantis Industrial Digital Twin",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      price: "0",
      priceCurrency: "USD",
      description: "Custom quote per deployment scope",
    },
  };

  // Four capability cards, tailored to dtPrimaryAssets where possible.
  const asset0 = copy.dtPrimaryAssets[0] ?? "pressure vessels";
  const asset1 = copy.dtPrimaryAssets[1] ?? "piping circuits";
  const asset2 = copy.dtPrimaryAssets[2] ?? "storage tanks";
  const capabilityCards = [
    {
      title: "LIDAR scan-to-twin",
      body: `Tripod and backpack LIDAR capture of ${asset0} and ${asset1}, registered to ±3 mm and served as a navigable 3-D twin in days, not months.`,
      href: "/digital-twins/lidar-scan-to-twin",
    },
    {
      title: "IoT sensor integration",
      body: `OPC UA, Modbus, MQTT, HART and WirelessHART streams from ${city.city} historians mapped one-to-one onto twin geometry for live condition monitoring.`,
      href: "/digital-twins/iot-sensor-integration",
    },
    {
      title: "AI predictive analytics",
      body: `Corrosion-rate, remaining-life and API 581 risk models run against twin-anchored data for ${asset0}, ${asset1} and ${asset2}.`,
      href: "/digital-twins/ai-predictive-analytics",
    },
    {
      title: "NDT data overlay",
      body: `UT grids, PAUT C-scans and RT films geo-registered to twin coordinates, Level III signed, and linked to the parallel NDT ERP work orders.`,
      href: "/digital-twins/ndt-data-overlay",
    },
  ];

  return (
    <>
      <SEOHead
        title={copy.dtTitle}
        description={copy.dtMetaDescription}
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

      <main
        className={`min-h-screen ${isRtl ? "text-right" : ""}`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <nav className="text-xs text-slate-400 mb-3" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/digital-twins" className="hover:text-white">
                  Digital Twins
                </Link>
                <span className="mx-2">/</span>
                <span className="text-slate-200">{city.city}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{copy.dtH1}</h1>
              <p className="text-slate-300 text-lg max-w-3xl">{copy.dtHeroSubline}</p>
            </div>
            <LanguageDropdown
              currentLang={requestedLang}
              supportedLangs={city.languages}
              routeKey={`digital-twin-${slug}`}
              slug={`digital-twin-${slug}`}
            />
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-10">
          {/* Capability cards */}
          <h2 className="text-2xl font-semibold mb-6">
            Digital-twin capabilities for {city.city}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {capabilityCards.map((card, i) => (
              <Link
                key={i}
                to={card.href}
                className="bg-white border border-slate-200 p-5 rounded hover:border-slate-500 hover:shadow-sm transition block"
              >
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">{card.body}</p>
              </Link>
            ))}
          </div>

          {/* Primary assets */}
          <h2 className="text-2xl font-semibold mb-3">
            Primary assets in the {city.city} twin
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 mb-10 text-slate-700">
            {copy.dtPrimaryAssets.map((a, i) => (
              <li
                key={i}
                className="bg-slate-50 border-l-4 border-slate-700 px-4 py-2 rounded"
              >
                {a}
              </li>
            ))}
          </ul>

          {/* Named facilities + codes */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-slate-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Named facilities we serve</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {city.namedFacilities.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Regulator codes applied</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {copy.dtRegulatorCodesApplied.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                RBI runs API 580 / 581 against twin-anchored data. Every inspection
                layer carries an ASNT Level III signature and a timestamp.
              </p>
            </div>
          </div>

          {/* ASNT / remote delivery */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              ASNT Level III, remote delivery
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Atlantis configures and commissions the {city.city} digital twin from
              our engineering centre. Your own scan crew works on the ground; our
              Level III engineers handle LIDAR registration, IoT tag mapping, NDT
              overlay review and API 579 fitness-for-service feeds over secure VPN.
              No Atlantis personnel travel to {city.country}.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
          <div className="space-y-4 mb-10">
            {copy.dtFaq.map((qa, i) => (
              <details
                key={i}
                className="bg-slate-50 border border-slate-200 rounded p-4"
              >
                <summary className="font-semibold cursor-pointer">{qa.q}</summary>
                <p className="mt-3 text-slate-700 leading-relaxed">{qa.a}</p>
              </details>
            ))}
          </div>

          {/* People-Also-Ask */}
          <h2 className="text-2xl font-semibold mb-4">People also ask</h2>
          <ul className="grid md:grid-cols-2 gap-2 mb-10 text-slate-700">
            {copy.dtPaa.map((q, i) => (
              <li
                key={i}
                className="bg-white border border-slate-200 px-4 py-2 rounded text-sm"
              >
                {q}
              </li>
            ))}
          </ul>

          {/* Cross-links — parallel ERP + vertical hub + pillar */}
          <div className="bg-slate-100 border border-slate-300 p-6 rounded mb-10">
            <h3 className="font-semibold mb-3 text-slate-900">
              Related Atlantis pages for {city.city}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={erpRoute}
                  className="text-slate-900 underline hover:no-underline"
                >
                  NDT ERP software for {city.city}
                </Link>{" "}
                — the parallel inspection work-order system that feeds this twin.
              </li>
              <li>
                <Link
                  to={hubRoute}
                  className="text-slate-900 underline hover:no-underline"
                >
                  {hubLabel}
                </Link>{" "}
                — vertical hub covering the wider {primaryIndustry} digital-twin
                offer.
              </li>
              <li>
                <Link
                  to="/digital-twins"
                  className="text-slate-900 underline hover:no-underline"
                >
                  Digital Twins pillar
                </Link>{" "}
                — LIDAR, IoT, AI and NDT-overlay capabilities across all verticals.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Scope a digital twin for your {city.city} assets
            </h2>
            <p className="mb-6 text-slate-300">
              30-minute call with an ASNT Level III. LIDAR + IoT + NDT-overlay only
              — no marketing fluff.
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
