/**
 * IndustryTrainingPage — one data-driven component for the Industry × City ×
 * Region training matrix (owner directive, 2026-08-16).
 *
 * Renders three shapes from src/data/industry-training-matrix.mjs:
 *   kind="national"  /{industry}-ndt-training
 *   kind="cell"      /{industry}-ndt-training-{city}
 *   kind="region"    /ndt-training-{region}
 *
 * The crawler-facing bodies are generated from the SAME data file in
 * scripts/industry-training-routes-2026-08-16.mjs — shared source by
 * construction, no two-layer drift (§32.4 class).
 * §18 no pricing · §24.2 honest delivery (DELIVERY_NOTE) everywhere.
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { Factory, MapPin, Compass, ArrowRight } from "lucide-react";
// @ts-ignore — .mjs data module shared with the prerender layer
import { INDUSTRY_TRAINING, CITY_CELLS, TRAINING_REGIONS, DELIVERY_NOTE } from "@/data/industry-training-matrix.mjs";

const cityName = (slug: string) =>
  slug.split("-").map((w) => (w === "ohio" || w === "maine" || w === "texas" ? `(${w[0].toUpperCase()}${w.slice(1)})` : w[0].toUpperCase() + w.slice(1))).join(" ");

const industryHref = (ind: string) => (ind === "aerospace" ? "/aerospace-ndt-training" : `/${ind}-ndt-training`);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="border-l-4 border-[#004aad] bg-muted/40 p-5 rounded-r-lg">
      <p className="text-muted-foreground">{DELIVERY_NOTE}</p>
    </section>
  );
}

export default function IndustryTrainingPage({ kind, slug }: { kind: "national" | "cell" | "region"; slug: string }) {
  if (kind === "national") {
    const ind = INDUSTRY_TRAINING[slug];
    if (!ind) return null;
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title={`${ind.title} | Atlantis NDT`} description={ind.desc} canonicalUrl={`https://atlantisndt.com/${slug}-ndt-training`} />
        <Navigation />
        <Breadcrumbs items={[{ label: "Training", href: "/training" }, { label: `${ind.name} NDT Training` }]} />
        <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{ind.h1}</h1>
            <p className="text-lg text-white/90 max-w-3xl">{ind.intro}</p>
          </div>
        </section>
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <Section title={`The methods ${ind.name.toLowerCase()} work actually certifies in`}><p>{ind.methods}</p></Section>
          <Section title="The governing regime — what acceptance answers to"><p>{ind.regime}</p></Section>
          <Section title="Who employs certified technicians"><p>{ind.employers}</p></Section>
          <Section title="The career path that works">
            <p dangerouslySetInnerHTML={{ __html: ind.career }} />
          </Section>
          <Section title="How people actually enter this sector">
            <p dangerouslySetInnerHTML={{ __html: ind.entry }} />
          </Section>
          <Delivery />
          {ind.cities.length > 0 && (
            <Section title={`${ind.name} training by market`}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {ind.cities.map((c: string) => (
                  <li key={c}>
                    <Link to={`/${slug}-ndt-training-${c}`} className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {cityName(c)} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          )}
          <Section title="Start the path">
            <p>
              Levels and requirements end to end: <Link className="text-[#004aad] hover:underline" to="/ndt-level-1-training">Level I</Link>,{" "}
              <Link className="text-[#004aad] hover:underline" to="/ndt-level-2-training">Level II</Link>,{" "}
              <Link className="text-[#004aad] hover:underline" to="/asnt-level-iii-training">Level III</Link> · every US market:{" "}
              <Link className="text-[#004aad] hover:underline" to="/ndt-training-near-me">the location index</Link> · programme hub:{" "}
              <Link className="text-[#004aad] hover:underline" to="/training">/training</Link>.
            </p>
            <EnquiryCaptureForm variant="training" />
          </Section>
        </main>
        <ContactDetails />
      </div>
    );
  }

  if (kind === "cell") {
    const [industry, city] = slug.split("|");
    const ind = INDUSTRY_TRAINING[industry] || { name: industry === "aerospace" ? "Aerospace" : industry, methods: "", regime: "" };
    const cell = CITY_CELLS[slug];
    if (!cell) return null;
    const natHref = industryHref(industry);
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title={`${ind.name} NDT Training in ${cell.city}, ${cell.state} | Atlantis NDT`}
          description={`${ind.name} NDT training for the ${cell.city} market: the employers, the methods they certify in, and the qualification regime — delivered on-site under ASNT Level III oversight.`}
          canonicalUrl={`https://atlantisndt.com/${industry}-ndt-training-${city}`}
        />
        <Navigation />
        <Breadcrumbs items={[{ label: "Training", href: "/training" }, { label: `${ind.name} NDT Training`, href: natHref }, { label: cell.city }]} />
        <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{ind.name} NDT Training in {cell.city}, {cell.state}</h1>
            <p className="text-lg text-white/90 max-w-3xl">{cell.text}</p>
          </div>
        </section>
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {ind.intro && <Section title={`${ind.name} NDT in brief`}><p>{ind.intro}</p></Section>}
          {ind.methods && <Section title={`What ${ind.name.toLowerCase()} training covers`}><p>{ind.methods}</p></Section>}
          {ind.regime && <Section title="The governing regime"><p>{ind.regime}</p></Section>}
          {ind.employers && <Section title="Who employs certified technicians"><p>{ind.employers}</p></Section>}
          {ind.entry && <Section title="How people enter this sector"><p dangerouslySetInnerHTML={{ __html: ind.entry }} /></Section>}
          <Delivery />
          <Section title="Related pages">
            <p>
              The national picture: <Link className="text-[#004aad] hover:underline" to={natHref}>{ind.name} NDT training</Link> ·{" "}
              {["charlotte", "gary"].includes(city) ? (
                <>every US training market: <Link className="text-[#004aad] hover:underline" to="/ndt-training-near-me">the location index</Link></>
              ) : (
                <>this market's full training page: <Link className="text-[#004aad] hover:underline" to={`/ndt-training-${city}`}>NDT training in {cell.city}</Link></>
              )}{" "}
              · levels: <Link className="text-[#004aad] hover:underline" to="/ndt-level-2-training">Level II path</Link>.
            </p>
            <EnquiryCaptureForm variant="training" />
          </Section>
        </main>
        <ContactDetails />
      </div>
    );
  }

  // region
  const region = TRAINING_REGIONS[slug];
  if (!region) return null;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`${region.title} | Atlantis NDT`} description={region.desc} canonicalUrl={`https://atlantisndt.com/ndt-training-${slug}`} />
      <Navigation />
      <Breadcrumbs items={[{ label: "Training", href: "/training" }, { label: `NDT Training — ${region.name}` }]} />
      <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">NDT Training in the {region.name}: Markets, Industries and the Route In</h1>
          <p className="text-lg text-white/90 max-w-3xl">{region.character}</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <Section title="The industries that drive certification here">
          <ul className="space-y-2">
            {region.industries.map((i: string) => (
              <li key={i} className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-[#004aad]" />
                <Link className="text-[#004aad] hover:underline" to={industryHref(i)}>
                  {(INDUSTRY_TRAINING[i]?.name || "Aerospace") + " NDT training"}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title={`Training markets across the ${region.name}`}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {region.cities.map((c: string) => (
              <li key={c}>
                <Link to={`/ndt-training-${c}`} className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {cityName(c)} <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section title={`How certification works in the ${region.name}`}><p>{region.certification}</p></Section>
        <Delivery />
        <Section title="Not in one of these markets?">
          <p>
            <Link className="text-[#004aad] hover:underline" to="/ndt-training-near-me">The full US location index</Link> resolves the search
            honestly — and on-site delivery means the real answer for employers is "at your facility". The programme itself:{" "}
            <Link className="text-[#004aad] hover:underline" to="/training">/training</Link>.
          </p>
          <EnquiryCaptureForm variant="training" />
        </Section>
      </main>
      <ContactDetails />
    </div>
  );
}
