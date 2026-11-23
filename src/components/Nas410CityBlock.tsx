// "SNT-TC-1A vs NAS 410" section on US aerospace/aviation training city pages (2026-11-23, CLAUDE.md §85).
// Same JSON as scripts/nas410-city-2026-11.mjs injects into the crawler <main>:
// src/data/nas410-city-2026-11/nas410--<path>.json. Each file is its own lazy chunk (named "nas410--…",
// which preflight 4b allows to name NAS 410), so pages without a section download nothing.
// Mounted once in App.tsx outside <Routes>; sits right after the geo-depth block ("nas410:" slot).
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const files = import.meta.glob<{ default: { path: string; html: string } }>("../data/nas410-city-2026-11/*.json");

export default function Nas410CityBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const key = "nas410--" + path.replace(/^\//, "").replace(/\//g, "__");
  const loader = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : files[`../data/nas410-city-2026-11/${key}.json`];
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    setHtml(null);
    if (loader) loader().then((m) => setHtml(m.default.html));
  }, [loader]);
  const slot = useMainSlot(`nas410:${path}`, Boolean(loader));
  if (!loader || !html) return null;
  const block = (
    <section data-nas410-city="2026-11" className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
