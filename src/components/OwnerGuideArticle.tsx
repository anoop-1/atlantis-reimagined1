// Owner guides (2026-10-12 owner-links release): body of the refreshed RT vs UT and NDT
// inspection cost guides, rendered from src/data/owner-guides-2026-10.json. The crawler
// HTML is built from the same file by scripts/owner-guides-2026-10.mjs, so both match.
import guides from "@/data/owner-guides-2026-10.json";
import { renderOwnerInline } from "@/data/owner-links-2026-10.mjs";
import OwnerLinkParagraph from "@/components/OwnerLinkParagraph";

type Section = {
  h: string;
  p?: string[];
  pFirst?: boolean;
  ul?: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  faq?: { q: string; a: string }[];
};
type Guide = { updated: string; lede: string; intro: string[]; sections: Section[] };

const G = guides as unknown as Record<string, Guide>;
const html = (s: string) => ({ __html: renderOwnerInline(s) });
const linkCls = "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2";

export function ownerGuide(path: string): Guide | null {
  return G[path] ?? null;
}

export function ownerGuideFaqs(path: string): { question: string; answer: string }[] {
  return (G[path]?.sections ?? []).flatMap((s) => (s.faq ?? []).map((f) => ({ question: f.q, answer: f.a })));
}

function Paragraphs({ items }: { items?: string[] }) {
  return <>{(items ?? []).map((p, i) => <p key={i} className={`text-slate-600 text-lg leading-relaxed mb-6 ${linkCls}`} dangerouslySetInnerHTML={html(p)} />)}</>;
}

export default function OwnerGuideArticle({ path }: { path: string }) {
  const g = G[path];
  if (!g) return null;
  const [first, ...rest] = g.intro;
  return (
    <>
      <section className="mb-12">
        <p className={`text-slate-600 text-lg leading-relaxed mb-6 ${linkCls}`} dangerouslySetInnerHTML={html(first)} />
        <OwnerLinkParagraph path={path} className={`owner-link text-slate-700 text-lg leading-relaxed mb-6 ${linkCls}`} />
        <Paragraphs items={rest} />
      </section>
      {g.sections.map((s) => (
        <section key={s.h} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{s.h}</h2>
          {s.pFirst && <Paragraphs items={s.p} />}
          {s.ul && (
            <ul className={`list-disc pl-6 space-y-2 text-slate-700 mb-6 ${linkCls}`}>
              {s.ul.map((li, i) => <li key={i} dangerouslySetInnerHTML={html(li)} />)}
            </ul>
          )}
          {s.table && (
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <caption className="text-left text-sm text-slate-500 mb-2">{s.table.caption}</caption>
                <thead className="bg-slate-100">
                  <tr>{s.table.columns.map((c) => <th key={c} className="px-3 py-2 text-left font-semibold">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r, i) => (
                    <tr key={i} className="border-t">
                      {r.map((c, j) => <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-semibold" : "text-slate-600"}`} dangerouslySetInnerHTML={html(c)} />)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!s.pFirst && <Paragraphs items={s.p} />}
          {s.faq && (
            <div className="space-y-4">
              {s.faq.map((f) => (
                <div key={f.q} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-3 text-slate-800">{f.q}</h3>
                  <p className={`text-slate-600 leading-relaxed ${linkCls}`} dangerouslySetInnerHTML={html(f.a)} />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
      <p className="text-sm text-slate-500 mb-8">Updated <time dateTime={g.updated}>{g.updated}</time>.</p>
    </>
  );
}
