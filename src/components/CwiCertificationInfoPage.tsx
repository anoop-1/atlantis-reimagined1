import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import DeepContent from "@/components/DeepContent";
import { isCuratedCity } from "@/data/curated-cities";
import info from "@/data/cwi-certification-info.json";

/**
 * /training/cwi-training-{city} — AWS CWI INFORMATION page (2026-10-04).
 *
 * Atlantis trains to ASNT SNT-TC-1A only and does not offer CWI training,
 * seminars or exam preparation. These URLs rank for "certified welding
 * inspector {city}", so they stay live as honest information pages. Same
 * source (src/data/cwi-certification-info.json) as the crawler layer in
 * scripts/cwi-certification-routes.mjs, so title, H1 and body match.
 */

type CwiCity = (typeof info.cities)[number];
type CwiSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  showIndustries?: boolean;
};

const SITE = "https://atlantisndt.com";

export const findCwiCity = (slug: string): CwiCity | undefined =>
  info.cities.find((c) => c.slug === slug);

const fill = (text: string, city: CwiCity) =>
  text.replace(/\{city\}/g, city.name).replace(/\{state\}/g, city.state).replace(/\{context\}/g, city.context);

/** Mirrors cwiTitle() in scripts/cwi-certification-routes.mjs (<= 60 chars). */
export const cwiTitle = (city: CwiCity) => {
  const long = fill(info.titleLong, city);
  return long.length <= 60 ? long : fill(info.titleShort, city);
};

export default function CwiCertificationInfoPage({ citySlug }: { citySlug: string }) {
  const city = findCwiCity(citySlug);
  if (!city) return null;
  const f = (t: string) => fill(t, city);
  const path = `/training/cwi-training-${city.slug}`;
  const url = `${SITE}${path}`;
  const title = cwiTitle(city);
  const description = f(info.description);
  const faq = info.faq.map((x) => ({ question: f(x.q), answer: f(x.a) }));
  const sections = info.sections as CwiSection[];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "en-US", isPartOf: { "@id": `${SITE}/#website` }, publisher: { "@id": `${SITE}/#organization` }, about: { "@type": "Thing", name: "AWS Certified Welding Inspector (CWI) certification" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Training", item: `${SITE}/training` },
        { "@type": "ListItem", position: 3, name: `CWI Certification in ${city.name}`, item: url },
      ] },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title={title}
        description={description}
        canonical={url}
        noindex={!isCuratedCity(city.slug)}
        keywords={`CWI certification ${city.name}, certified welding inspector ${city.name}, AWS CWI requirements, CWI exam, ASNT NDT training ${city.name}`}
        structuredData={structuredData}
        faq={faq}
      />
      <Navigation />
      <PillarHubNav active="training" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Training", href: "/training" },
          { label: `CWI Certification in ${city.name}` },
        ]}
      />

      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-wide text-white/70 mb-3">AWS CWI · {city.name}, {city.state}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{f(info.h1)}</h1>
          <p className="text-white/90 text-lg leading-relaxed">{f(info.intro)}</p>
          <div className="mt-6">
            <Link to={info.cta.href} className="inline-block bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold">
              {info.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {sections.map((s) => (
          <section key={s.id} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{f(s.heading)}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-700 leading-relaxed mb-4">{f(p)}</p>
            ))}
            {s.showIndustries && (
              <p className="text-slate-700 leading-relaxed mb-4">
                Main industries in the {city.name} area: {city.industries.join(", ")}.
              </p>
            )}
            {s.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                {s.bullets.map((b, i) => <li key={i}>{f(b)}</li>)}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          {faq.map((x, i) => (
            <div key={i} className="mb-5">
              <h3 className="font-semibold text-slate-900 mb-1">{x.question}</h3>
              <p className="text-slate-700 leading-relaxed">{x.answer}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-lg bg-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-3">{f(info.cta.heading)}</h2>
          <p className="text-white/90 mb-5">{f(info.cta.text)}</p>
          <Link to={info.cta.href} className="inline-block bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold">
            {info.cta.label}
          </Link>
        </section>

        <section className="mb-10 text-slate-700">
          <p className="mb-3">
            Related:{" "}
            {info.related.map((r, i) => (
              <span key={r.href}>
                {i > 0 && " · "}
                <Link to={r.href} className="text-primary underline">{r.label}</Link>
              </span>
            ))}
            .
          </p>
          <p>
            CWI certification information for other cities:{" "}
            {info.cities.filter((c) => c.slug !== city.slug).map((c, i) => (
              <span key={c.slug}>
                {i > 0 && " · "}
                <Link to={`/training/cwi-training-${c.slug}`} className="text-primary underline">{c.name}</Link>
              </span>
            ))}
            .
          </p>
        </section>

        <DeepContent path={path} />
        <ContactDetails />
      </main>
    </div>
  );
}
