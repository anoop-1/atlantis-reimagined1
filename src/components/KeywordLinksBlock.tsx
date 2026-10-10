// Global keyword-anchored related links (2026-10-10, CLAUDE.md §50). Mounted once in
// App.tsx between CompetitiveCoverageBlock and NextStepsBlock and portalled into the
// page's <main> (useMainSlot), where the crawler HTML puts the same block. Path-only
// rules and anchors come from src/data/keyword-links-2026-10.mjs, which
// scripts/keyword-links-2026-10.mjs also renders, so React and crawler HTML match.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { keywordLinksFor } from "@/data/keyword-links-2026-10.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

export default function KeywordLinksBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : keywordLinksFor(path);
  const slot = useMainSlot(`related:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <nav className="container mx-auto max-w-4xl px-6 py-6" data-keyword-links="2026-10" aria-label="Related services">
      <p className="text-sm font-semibold text-foreground mb-2">{b.intro}</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {b.links.map(([href, anchor]) => (
          <li key={href}><Link to={href} className="text-primary underline-offset-4 hover:underline">{anchor}</Link></li>
        ))}
      </ul>
    </nav>
  );
  return slot ? createPortal(block, slot) : block;
}
