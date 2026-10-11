/**
 * /tools/ultrasonic-a-scan-simulator — 2026-10-12 (practical workstream, SEO audit action 8).
 * The browser A-scan demo (2026-10-09, also on /practical-ndt#ut-demo) as its own page, with
 * a guide to the display, gain, range and gates. Copy: src/data/ascan-simulator-2026-10.json;
 * worked example: src/data/ascan-model-2026-10.mjs (the model the tool runs). The crawler HTML
 * (scripts/ascan-simulator-2026-10.mjs) renders the same files. No prices, no Offer schema.
 */
import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import UtAscanDemo from "@/components/sprint/UtAscanDemo";
import T from "@/data/ascan-simulator-2026-10.json";
import { workedExample } from "@/data/ascan-model-2026-10.mjs";

const SITE = "https://atlantisndt.com";
const URL = `${SITE}${T.path}`;

/** Text with [label](/path) links, the same syntax the crawler module renders. */
function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
    out.push(text.slice(last, m.index));
    out.push(<Link key={m.index} to={m[2]} className="text-primary underline underline-offset-2 hover:no-underline">{m[1]}</Link>);
    last = (m.index ?? 0) + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out}</>;
}

type Block = { p?: string; ul?: string[]; ol?: string[]; example?: boolean };

function BlockView({ b }: { b: Block }) {
  if (b.p) return <p><Inline text={b.p} /></p>;
  if (b.ul) return <ul>{b.ul.map((x) => <li key={x}><Inline text={x} /></li>)}</ul>;
  if (b.ol) return <ol>{b.ol.map((x) => <li key={x}><Inline text={x} /></li>)}</ol>;
  if (b.example) {
    const ex = workedExample();
    return (
      <>
        <p>{ex.setup}</p>
        <ol>{ex.steps.map((x) => <li key={x}>{x}</li>)}</ol>
        <p>{ex.check}</p>
      </>
    );
  }
  return null;
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${URL}#app`,
      name: T.appName,
      url: URL,
      description: T.intro,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web browser",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      inLanguage: "en",
      featureList: "A-scan display, probe position, gain in dB, range, one gate with threshold, plate thickness, carbon steel / stainless steel / aluminium velocities, gate reading of depth and amplitude",
      audience: { "@type": "EducationalAudience", educationalRole: "UT trainees, Level II candidates and NDT instructors" },
      publisher: { "@type": "Organization", name: "Atlantis NDT", url: SITE },
    },
    { "@type": "FAQPage", "@id": `${URL}#faq`, mainEntity: T.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
        { "@type": "ListItem", position: 3, name: T.breadcrumb, item: URL },
      ],
    },
  ],
};

export default function UltrasonicAscanSimulator() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navigation />
      <SEOHead title={T.title} description={T.description} canonical={URL} structuredData={schema} />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: T.breadcrumb, href: T.path }]} />
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{T.h1}</h1>
        <p className="text-lg text-muted-foreground mb-2">{T.intro}</p>
        <div className="-mx-6">
          <UtAscanDemo id="ascan-simulator" heading={T.toolHeading} toolUse="ultrasonic-a-scan-simulator" />
        </div>
        <div className="prose prose-lg max-w-none prose-a:text-primary">
          {T.sections.map((s) => (
            <Fragment key={s.id}>
              <h2 id={s.id}>{s.h2}</h2>
              {(s.body as Block[]).map((b, i) => <BlockView key={i} b={b} />)}
            </Fragment>
          ))}
          <h2 id="faq">Frequently asked questions</h2>
          {T.faq.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
          <h2>Related tools</h2>
          <ul>
            {T.related.map((r) => <li key={r.href}><Link to={r.href}>{r.label}</Link></li>)}
          </ul>
        </div>
      </main>
      <ContactDetails />
    </div>
  );
}
