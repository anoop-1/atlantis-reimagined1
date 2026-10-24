// Researched local "depth" block on geo pages that already earn impressions (2026-10-24).
// Same JSON as scripts/geo-depth-2026-10.mjs injects into the crawler <main>:
// src/data/geo-depth-2026-10/<path>.json. Each file is its own lazy chunk, so pages without a
// block download nothing. Mounted once in App.tsx outside <Routes>.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const files = import.meta.glob<{ default: { path: string; html: string } }>("../data/geo-depth-2026-10/*.json");

export default function GeoDepthBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const key = path.replace(/^\//, "").replace(/\//g, "__");
  const loader = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : files[`../data/geo-depth-2026-10/${key}.json`];
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    setHtml(null);
    if (loader) loader().then((m) => setHtml(m.default.html));
  }, [loader]);
  const slot = useMainSlot(`geodepth:${path}`, Boolean(loader));
  if (!loader || !html) return null;
  const block = (
    <section data-geo-depth="2026-10" className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
