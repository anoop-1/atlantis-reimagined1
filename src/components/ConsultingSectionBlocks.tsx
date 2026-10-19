// 2026-10-19 NDT Level III consulting section, global blocks (React side; the crawler HTML carries
// the same blocks from scripts/consulting-section-2026-10.mjs):
//   * ConsultingServicesBlock — "NDT Level III consulting services" cards on /consulting and the
//     Level III page (placed at <div data-slot-anchor="consultingsvc"> when a page provides one).
//   * ConsultingTopicLinks — on the detailed consulting pages, a link up to their topic page(s).
// Same look as the rest of the site: Card grid with icon tiles; the up-link block matches the
// related-services block.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Award, BadgeCheck, BookOpen, ClipboardList, FileCheck, FileText, GraduationCap, Handshake, Scale, type LucideIcon } from "lucide-react";
import { UI } from "@/data/service-section/core.mjs";
import { CONSULTING_BLOCK_PATHS, CONSULTING_ICONS, CONSULTING_SERVICES_BLOCK, consultingTopicLinksFor } from "@/data/consulting-section/index.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const ICONS: Record<string, LucideIcon> = { Award, BadgeCheck, BookOpen, ClipboardList, FileCheck, FileText, GraduationCap, Handshake, Scale };

export function ConsultingServicesBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const show = CONSULTING_BLOCK_PATHS.has(path) && !(usesPublishedContent(path) && !import.meta.env.DEV);
  const slot = useMainSlot(`consultingsvc:${path}`, show);
  if (!show) return null;
  const b = CONSULTING_SERVICES_BLOCK;
  const block = (
    <section className={UI.section} data-consulting-services="2026-10">
      <div className={UI.wide}>
        <h2 className={UI.h2Center}>{b.h2}</h2>
        <p className={UI.sub}>{b.intro}</p>
        <div className={UI.cardGrid}>
          {b.cards.map((c) => {
            const I = ICONS[CONSULTING_ICONS[c.href]];
            return (
              <Link key={c.href} to={c.href} className={UI.linkCard}>
                {I && <div className={UI.iconTile}><I className={UI.icon} aria-hidden="true" /></div>}
                <h3 className={UI.linkCardTitle}>{c.label}</h3>
                <p className={UI.linkCardText}>{c.text}</p>
                <span className={UI.linkCardMore}>Explore <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}

export function ConsultingTopicLinks() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : consultingTopicLinksFor(path);
  const slot = useMainSlot(`inspection:consulting:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <nav className={UI.regional} data-consulting-topic="2026-10" aria-label="NDT Level III consulting">
      <p className={UI.regionalIntro}>{b.intro}</p>
      <ul className={UI.regionalList}>
        {b.links.map(([href, label]) => <li key={href}><Link to={href} className={UI.regionalLink}>{label}</Link></li>)}
      </ul>
    </nav>
  );
  return slot ? createPortal(block, slot) : block;
}
