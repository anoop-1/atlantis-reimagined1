// Renders the long-form deep-content block for a page, if one exists in
// src/data/deep-content/ (same JSON the prerender injects for crawlers — see
// scripts/deep-content.mjs). Each file is its own lazy chunk.
import { useEffect, useState } from "react";

const files = import.meta.glob<{ default: { bodyHtml: string } }>("../data/deep-content/*.json");

export default function DeepContent({ path }: { path: string }) {
  const key = path.replace(/^\//, "").replace(/\//g, "__");
  const loader = files[`../data/deep-content/${key}.json`];
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    setHtml(null);
    if (loader) loader().then((m) => setHtml(m.default.bodyHtml));
  }, [loader]);

  if (!loader || !html) return null;
  return (
    <section className="container mx-auto px-6 py-12 max-w-4xl">
      <div
        className="prose prose-lg max-w-none overflow-x-auto prose-headings:font-bold prose-a:text-primary prose-table:text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
