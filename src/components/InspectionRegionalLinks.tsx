// 2026-10-19 (owner: "regional pages optimized"): every regional inspection page (state hubs,
// city service pages, third-party inspection cities, method × city pages) links up into the
// /inspection section: Inspection › the service lines that page belongs to. Mounted once in
// App.tsx and portalled into the page's <main> (useMainSlot), where the crawler HTML puts the
// same block. Rules and anchors: src/data/inspection-section/regions.mjs (shared with
// scripts/inspection-section-2026-10.mjs). Same look as the related-services block.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { UI, inspectionRegionalLinksFor } from "@/data/inspection-section/index.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

export default function InspectionRegionalLinks() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : inspectionRegionalLinksFor(path);
  const slot = useMainSlot(`inspection:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <nav className={UI.regional} data-inspection-regional="2026-10" aria-label="Inspection services">
      <p className={UI.regionalIntro}>{b.intro}</p>
      <ul className={UI.regionalList}>
        {b.links.map(([href, label]) => (
          <li key={href}><Link to={href} className={UI.regionalLink}>{label}</Link></li>
        ))}
      </ul>
    </nav>
  );
  return slot ? createPortal(block, slot) : block;
}
