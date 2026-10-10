// Global, route-aware competitor-keyword coverage block (2026-10-10, CLAUDE.md §49).
// Mounted once in App.tsx, like NextStepsBlock, and portalled into the page's <main>
// (useMainSlot) so it sits where the crawler HTML puts it. Same data and wording as
// scripts/competitive-coverage-2026-10.mjs: src/data/competitive-coverage-2026-10.json.
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import data from "@/data/competitive-coverage-2026-10.json";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

type Block = { h2: string; intro: string[]; points: string[][]; faq: { q: string; a: string }[] };
const BLOCKS = data.blocks as Record<string, Block>;

export default function CompetitiveCoverageBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : BLOCKS[path];
  const slot = useMainSlot(`coverage:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <section className="container mx-auto max-w-4xl px-6 py-10" data-coverage="2026-10" aria-label={b.h2}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{b.h2}</h2>
      {b.intro.map((p) => <p key={p.slice(0, 40)} className="text-base md:text-lg text-muted-foreground mb-4">{p}</p>)}
      <ul className="list-disc pl-6 space-y-2 mb-6">
        {b.points.map(([term, text]) => (
          <li key={term}><strong>{term}.</strong> {text}</li>
        ))}
      </ul>
      {b.faq.map((f) => (
        <div key={f.q} className="mb-4">
          <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
          <p className="text-muted-foreground">{f.a}</p>
        </div>
      ))}
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
