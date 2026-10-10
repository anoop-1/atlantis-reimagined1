// Global, route-aware "next step" links (2026-10-10, CLAUDE.md §48). Mounted once in
// App.tsx outside <Routes>, like SoftwareCompareLinks. Same data and wording as
// scripts/cycle-2026-10-10.mjs injects into the prerendered <main>, so React and the
// crawler HTML never disagree: src/data/next-steps-2026-10.json.
import { Link, useLocation } from "react-router-dom";
import data from "@/data/next-steps-2026-10.json";
import { usesPublishedContent } from "@/lib/published-pages";

type Block = { h: string; p: string; links: string[][] };
const BLOCKS = data.blocks as Record<string, Block>;

export default function NextStepsBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  if (usesPublishedContent(path) && !import.meta.env.DEV) return null;
  const b = BLOCKS[path];
  if (!b) return null;
  return (
    <section className="container mx-auto max-w-4xl px-6 py-8" data-next-steps="2026-10" aria-label={b.h}>
      <div className="prose prose-lg max-w-none prose-a:text-primary rounded-xl border border-primary/20 bg-card p-6">
        <h2>{b.h}</h2>
        <p>{b.p}</p>
        <ul>
          {b.links.map(([href, label]) => (
            <li key={href}><Link to={href}>{label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
