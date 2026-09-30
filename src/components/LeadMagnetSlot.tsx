// Lightweight mount point for intent-matched lead magnets (2026-09-29).
//
// ContactDetails (the site footer, on ~320 page components) renders a
// placement="footer" slot, so every matched page gets its magnet just above the
// footer without touching each page. BlogDetail and DepthPage have no footer
// and render placement="inline" right after the article body — directly after
// the free questions on practice pages. If both are on screen, the footer slot
// stands down so the offer never appears twice.
//
// Only the path matcher is in the shared bundle; the card itself (forms,
// EmailJS, question runner) is lazy-loaded on the pages that need it.
import { Suspense, lazy, useEffect, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import { leadMagnetFor } from "@/lib/lead-magnets";

const LeadMagnet = lazy(() => import("./LeadMagnet"));

let inlineMounted = 0;
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
const notify = () => listeners.forEach((fn) => fn());

export default function LeadMagnetSlot({ placement = "footer", path }: { placement?: "inline" | "footer"; path?: string }) {
  const { pathname } = useLocation();
  const match = leadMagnetFor(path || pathname);
  const inlineCount = useSyncExternalStore(subscribe, () => inlineMounted, () => 0);

  useEffect(() => {
    if (placement !== "inline" || !match) return;
    inlineMounted += 1; notify();
    return () => { inlineMounted -= 1; notify(); };
  }, [placement, match?.kind]);

  if (!match) return null;
  if (placement === "footer" && inlineCount > 0) return null;
  return (
    <Suspense fallback={null}>
      <LeadMagnet match={match} placement={placement} />
    </Suspense>
  );
}
