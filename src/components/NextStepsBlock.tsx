// Global, route-aware "next step" links (2026-10-10, CLAUDE.md §48). Mounted once in
// App.tsx outside <Routes>, like SoftwareCompareLinks. Same data and wording as
// scripts/cycle-2026-10-10.mjs injects into the prerendered <main>, so React and the
// crawler HTML never disagree: src/data/next-steps-2026-10.json.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import data from "@/data/next-steps-2026-10.json";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

type Block = { h: string; p: string; links: string[][] };
const BLOCKS = data.blocks as Record<string, Block>;

export default function NextStepsBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : BLOCKS[path];
  // §49: portal into the page's <main> so the block is not stranded below the footer.
  const slot = useMainSlot(`next:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <section className="container mx-auto max-w-4xl px-6 py-8" data-next-steps="2026-10" aria-label={b.h}>
      <div className="rounded-xl border border-primary/20 bg-card text-card-foreground p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{b.h}</h2>
        <p className="text-muted-foreground mb-3">{b.p}</p>
        <ul className="list-disc pl-6 space-y-1">
          {b.links.map(([href, label]) => (
            <li key={href}><Link to={href} className="text-primary underline underline-offset-2 hover:no-underline">{label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
