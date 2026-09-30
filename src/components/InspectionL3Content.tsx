// React layer for the INSPECTION-L3 stream (2026-09-30). Renders the same
// JSON that scripts/inspection-l3.mjs injects into the prerendered HTML, so the
// crawler and visitor copies match.
import data from "@/data/inspection-l3-content.json";
import InspectionRfqWizard from "@/components/InspectionRfqWizard";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
/** [text](/url) and **bold** -> HTML. Kept identical to inline() in scripts/inspection-l3.mjs. */
export function renderInline(s: string) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}
const H = ({ html, as: Tag = "p", className }: { html: string; as?: any; className?: string }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: renderInline(html) }} />
);

type Service = (typeof data.services)[number];
const SITE = "https://atlantisndt.com";

export function InspectionServiceModule({ path }: { path: string }) {
  const s = data.services.find((x) => x.path === path) as Service | undefined;
  if (!s) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${s.path}#service`,
    name: s.serviceName,
    serviceType: s.serviceType,
    description: s.description,
    url: `${SITE}${s.path}`,
    provider: { "@type": "Organization", name: "Atlantis NDT", url: SITE, email: "info@atlantisndt.com" },
    areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
    datePublished: data.publishedAt,
  };
  return (
    <section id={`service-${s.key}`} className="container mx-auto px-6 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">
        <h2>{s.heading}</h2>
        <H html={s.intro} />
        {s.sections.map((sec: any) => (
          <div key={sec.h}>
            <h2>{sec.h}</h2>
            {sec.ul && <ul>{sec.ul.map((li: string) => <H key={li} as="li" html={li} />)}</ul>}
            {(sec.p || []).map((p: string) => <H key={p.slice(0, 40)} html={p} />)}
          </div>
        ))}
        <h2>Frequently asked questions: {s.serviceName}</h2>
        {s.faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <H html={f.a} />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <InspectionRfqWizard defaultMethod={s.rfqMethod} defaultAsset={s.rfqAsset} />
      </div>
    </section>
  );
}

export function InspectionHubServices() {
  const h = data.hub;
  return (
    <section className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="prose prose-lg max-w-none prose-a:text-primary">
        <h2>{h.heading}</h2>
        <H html={h.intro} />
        <ul>{h.links.map((l) => <li key={l.href}><a href={l.href}>{l.text}</a></li>)}</ul>
      </div>
      <div className="mt-10"><InspectionRfqWizard /></div>
    </section>
  );
}

export function LevelIiiEngagements() {
  const l3 = data.level3;
  return (
    <section className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">
        <h2>{l3.heading}</h2>
        <H html={l3.intro} />
        <ul>{l3.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.h}</a></li>)}</ul>
        {l3.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.h}</h2>
            <h3>Who it is for</h3>
            <H html={s.whoFor} />
            <h3>Deliverables</h3>
            <ul>{s.deliverables.map((d) => <H key={d} as="li" html={d} />)}</ul>
            <h3>How the engagement runs</h3>
            <ol>{s.flow.map((d) => <H key={d} as="li" html={d} />)}</ol>
            {s.faqs.map((f) => (
              <div key={f.q}><h3>{f.q}</h3><H html={f.a} /></div>
            ))}
            <p>
              <a href={`/contact?service=consulting&subject=${encodeURIComponent(s.ctaSubject)}`}>
                <strong>Enquire about {s.h.toLowerCase()}</strong>
              </a>
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}

export function contextBlockFor(path: string) {
  return data.contextBlocks.find((b) => b.path === path) || null;
}
/** HTML string of the contextual block, for pages whose body is an HTML string (blogs.json). */
export function contextBlockHtml(path: string) {
  const b = contextBlockFor(path);
  if (!b) return "";
  return `<section class="service-context-block" aria-label="${esc(b.h)}"><h2>${esc(b.h)}</h2><p>${renderInline(b.p)}</p></section>`;
}
/** Insert the block before the FAQ heading (same rule as the prerender), else append. */
export function withContextBlock(path: string, html: string) {
  const block = contextBlockHtml(path);
  if (!block || html.includes("service-context-block")) return html;
  const m = html.match(/<h2[^>]*>\s*(Frequently Asked Questions|FAQs?\b|Frequently asked)[^<]*<\/h2>/i);
  if (m && m.index !== undefined) return html.slice(0, m.index) + block + html.slice(m.index);
  return html + block;
}
export function ServiceContextBlock({ path }: { path: string }) {
  const html = contextBlockHtml(path);
  if (!html) return null;
  return <div className="prose max-w-none prose-a:text-primary my-10" dangerouslySetInnerHTML={{ __html: html }} />;
}
