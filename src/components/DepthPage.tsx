/**
 * DepthPage — one renderer for every citation-spec depth page. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY A SINGLE RENDERER
 *
 * Phase 2 of the 90-day plan publishes into SERPs the competitor audit found
 * unoccupied. There are 28 such briefs and 10 are being built first. Writing 28
 * bespoke .tsx files would guarantee drift: some would carry an answer block,
 * some would not, tables would be div grids on half of them, and the citation
 * spec would decay page by page.
 *
 * Instead every depth page is DATA in src/data/depth-pages.json, and this
 * component is the only thing that renders it. The spec is therefore structural
 * rather than a convention people remember: a page cannot be published without
 * an answer block, a captioned table and six question-form facets, because the
 * data shape requires them and scripts/build-depth-pages.mjs rejects anything
 * that omits them.
 *
 * IMPORTANT: this component is for HUMAN visitors only. Crawlers and AI
 * retrievers never execute it — scripts/prerender.mjs writes the static HTML
 * from the same JSON. Both layers must stay in step; the lint gate catches
 * drift. See memory: prerender-is-the-only-layer-crawlers-see.
 */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import AnswerBlock from "@/components/citation/AnswerBlock";
import DecompositionTable from "@/components/citation/DecompositionTable";
import { FacetSection, AuthorByline } from "@/components/citation/FacetSection";
import depthPages from "@/data/depth-pages.json";

/**
 * Turn the markdown links carried in the page data into real links.
 *
 * The static layer does the same thing in build-depth-pages.mjs — see
 * renderInline() there — and the two must agree, because the crawler sees one
 * and the visitor sees the other. Site-relative paths become <Link> so
 * navigation stays client-side; anything else is left as text rather than
 * rendered, so a javascript: or data: href can never become an anchor.
 */
function inlineLinks(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const h = href.trim();
    if (/^\/[^\s]*$/.test(h)) {
      parts.push(
        <Link key={`l${k++}`} to={h} className="text-primary hover:underline">
          {label}
        </Link>,
      );
    } else if (/^https:\/\/[^\s]+$/.test(h)) {
      parts.push(
        <a key={`l${k++}`} href={h} rel="noopener" className="text-primary hover:underline">
          {label}
        </a>,
      );
    } else {
      parts.push(label);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

export interface DepthPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  expansion: string;
  source: string;
  table: { caption: string; columns: string[]; rows: string[][]; note?: string };
  facets: { q: string; a: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  faq: { q: string; a: string }[];
}

const PAGES = depthPages as unknown as DepthPageData[];

export function getDepthPage(slug: string): DepthPageData | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export default function DepthPage({ slug }: { slug?: string }) {
  const params = useParams();
  // Explicit prop wins; otherwise derive from the current path so a single
  // route element can serve any depth page.
  const path = slug ?? (typeof window !== "undefined" ? window.location.pathname : `/${params["*"] ?? ""}`);
  const page = getDepthPage(path);

  if (!page) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navigation />
        <main className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold mb-4">Page not found</h1>
          <p className="text-slate-600 dark:text-slate-400">
            This resource has moved. <Link to="/resources" className="underline">Browse all resources</Link>.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`https://atlantisndt.com${page.slug}`}
        faq={page.faq.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Navigation />
      <Breadcrumbs />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{page.h1}</h1>

        <AnswerBlock answer={page.answer} expansion={page.expansion} source={page.source} />

        <AuthorByline />

        <DecompositionTable
          caption={page.table.caption}
          columns={page.table.columns}
          rows={page.table.rows}
          note={page.table.note}
        />

        {page.sections.map((s, i) => (
          <section key={i} className="my-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-balance">{s.heading}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {inlineLinks(p)}
              </p>
            ))}
          </section>
        ))}

        {/* Facets sit after the body: each is scored as its own passage, and
            they answer the predictable follow-up questions rather than the head
            query the answer block already resolved. */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          {page.facets.map((f, i) => (
            <FacetSection key={i} question={f.q} answer={f.a} />
          ))}
        </div>

        <section className="mt-12 rounded-lg border border-slate-300 dark:border-slate-700 p-6">
          <h2 className="text-xl font-bold mb-3">Discuss this with an ASNT Level III</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Atlantis NDT provides outsourced Level III services, inspection programme support and
            NDT software for inspection contractors and asset owners. Scope is quoted on request.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-md bg-blue-700 px-5 py-2.5 text-white font-semibold hover:bg-blue-800"
          >
            Request a consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
