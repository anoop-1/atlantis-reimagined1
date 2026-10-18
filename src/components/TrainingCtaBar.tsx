// 2026-10-18 (owner): three buttons on every training city/regional page —
// Check your eligibility · Training FAQs · Register & Buy Now (portal.atlantisndt.com/course,
// which prices by the visitor's country). Same model and class strings as the crawler
// copy (src/data/training-conversion-2026-10.mjs → ctaBarHtml), which sits after the
// page's H1 intro. Here the bar goes straight after the hero section that holds the H1
// (or after the H1's first paragraph when there is no separate hero), so it is near the
// top of every template without editing each page. A page can place it itself with
// <div data-slot-anchor="trainingbar" />. Published pages render the crawler HTML, which
// already carries the bar, so the component stands down there.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import data from "@/data/training-conversion-2026-10.json";
import {
  BAR_CLASS,
  ctaBarButtons,
  isExternal,
  showsTrainingCtaBar,
  type TrainingConversion,
} from "@/data/training-conversion-2026-10.mjs";
import { usesPublishedContent } from "@/lib/published-pages";

const DATA = data as unknown as TrainingConversion;

function useTopSlot(key: string, active: boolean): HTMLElement | null {
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!active) { setSlot(null); return; }
    let el: HTMLElement | null = null;
    let tries = 0;
    let timer: number | undefined;
    const attach = () => {
      const scope = document.getElementById("root") ?? document;
      const anchor = scope.querySelector('[data-slot-anchor="trainingbar"]');
      const h1 = (scope.querySelector("main h1") || scope.querySelector("h1")) as HTMLElement | null;
      if (!anchor && !h1) {
        if (tries++ < 20) timer = window.setTimeout(attach, 150); // lazy route chunk still loading
        return;
      }
      el = document.createElement("div");
      el.setAttribute("data-slot", key);
      if (anchor) {
        anchor.appendChild(el);
      } else {
        const hero = h1!.closest("section, header") as HTMLElement | null;
        const main = h1!.closest("main");
        // The hero is the H1's own section, unless that section is most of the page.
        const useHero = !!hero && hero !== main && !hero.contains(main) && hero.querySelectorAll("h2").length <= 2;
        const next = h1!.nextElementSibling;
        const after: Element = useHero ? hero! : next && next.tagName === "P" ? next : h1!;
        after.parentNode!.insertBefore(el, after.nextSibling);
      }
      setSlot(el);
    };
    attach();
    return () => {
      if (timer) window.clearTimeout(timer);
      if (el && el.parentNode) el.parentNode.removeChild(el);
      setSlot(null);
    };
  }, [key, active]);
  return slot;
}

export function TrainingCtaBarView({ path }: { path: string }) {
  return (
    <div data-training-cta-bar="2026-10" className={BAR_CLASS.wrap}>
      <div className={BAR_CLASS.box}>
        <p className={BAR_CLASS.lead}>{DATA.bar.lead}</p>
        <div className={BAR_CLASS.row}>
          {ctaBarButtons(DATA, path).map((b) =>
            isExternal(b.href) ? (
              <a key={b.variant} href={b.href} target="_blank" rel="noopener" data-cta-variant={b.variant} className={BAR_CLASS.primary}>
                {b.label}
              </a>
            ) : (
              <Link key={b.variant} to={b.href} data-cta-variant={b.variant} className={BAR_CLASS.secondary}>
                {b.label}
              </Link>
            ),
          )}
        </div>
        <p className={BAR_CLASS.note}>{DATA.bar.note}</p>
      </div>
    </div>
  );
}

export default function TrainingCtaBar() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const active = showsTrainingCtaBar(path) && (import.meta.env.DEV || !usesPublishedContent(path));
  const slot = useTopSlot(`trainingbar:${path}`, active);
  if (!active || !slot) return null;
  return createPortal(<TrainingCtaBarView path={path} />, slot);
}
