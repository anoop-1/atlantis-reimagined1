// 2026-10-10 (CLAUDE.md §49): global content blocks (CompetitiveCoverageBlock,
// NextStepsBlock) are mounted outside <Routes>, so by default they render after the
// page's own footer. This hook gives them a slot at the end of the page's <main>
// instead: just before the page's own <footer> when it has one (some pages put the
// footer inside <main>), otherwise at the end of <main>, matching where the crawler
// HTML puts the same block. With neither, it returns null and the caller renders inline.
import { useEffect, useState } from "react";

const SLOT_ORDER = ["video:", "shots:", "coverage:", "related:", "next:"];

export function useMainSlot(key: string, active: boolean): HTMLElement | null {
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!active) { setSlot(null); return; }
    let el: HTMLElement | null = null;
    let tries = 0;
    let timer: number | undefined;
    const attach = () => {
      // 2026-10-12: a page can place a block itself with <div data-slot-anchor="video" />
      // (the part of the key before ":"), e.g. /erp shows its screenshots and trailer
      // straight after "What you get", matching the order in its crawler HTML.
      const anchor = document.querySelector(`[data-slot-anchor="${key.split(":")[0]}"]`);
      if (anchor) {
        el = document.createElement("div");
        el.setAttribute("data-slot", key);
        anchor.appendChild(el);
        setSlot(el);
        return;
      }
      const footers = document.querySelectorAll("footer");
      const footer = footers[footers.length - 1] as HTMLElement | undefined;
      const mains = document.querySelectorAll("main");
      const main = mains[mains.length - 1] as HTMLElement | undefined;
      if (!footer && !main) {
        if (tries++ < 20) timer = window.setTimeout(attach, 150); // lazy route chunk still loading
        return;
      }
      el = document.createElement("div");
      el.setAttribute("data-slot", key);
      if (footer && footer.parentNode) footer.parentNode.insertBefore(el, footer);
      else main!.appendChild(el);
      // Keep the order stable when several blocks share the anchor, whatever order
      // their effects run in: coverage (§49), related links (§50), then next steps (§48).
      const rank = (k: string) => SLOT_ORDER.findIndex((p) => k.startsWith(p));
      const mine = rank(key);
      const later = Array.from(el.parentNode!.children).find(
        (c) => c !== el && c.hasAttribute("data-slot") && rank(c.getAttribute("data-slot") || "") > mine,
      );
      if (later) el.parentNode!.insertBefore(el, later);
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
