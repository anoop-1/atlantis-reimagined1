// Published training fees for pages whose own component does not render <ApprovedTrainingFees />
// (2026-11-10: the US fee table was extended to 152 US city, state and region training pages; about
// half of them are hand-built page components, e.g. src/pages/ndt-training-atlanta.tsx). The crawler
// layer appends the same table to every allowlisted page (scripts/approved-pricing.mjs), so without this
// the React page would drop what the HTML shows. Mounted once in App.tsx outside <Routes>.
// Renders only on paths listed in src/data/approved-training-fees.json (never India) and stands down
// as soon as the page renders its own fee table.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import ApprovedTrainingFees, { hasTrainingFees } from "@/components/ApprovedTrainingFees";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const OWN_TABLE = "[data-approved-training-fees]:not([data-fees-global] *)";

export default function GlobalTrainingFees() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const eligible = hasTrainingFees(path) && !(usesPublishedContent(path) && !import.meta.env.DEV);
  const [ownTable, setOwnTable] = useState<boolean | null>(null);

  useEffect(() => {
    setOwnTable(null);
    if (!eligible) return;
    // Give the lazily loaded page component time to render its own table before deciding.
    const check = () => document.querySelector(OWN_TABLE) !== null;
    const decide = window.setTimeout(() => setOwnTable(check()), 1200);
    const obs = new MutationObserver(() => { if (check()) setOwnTable(true); });
    obs.observe(document.body, { childList: true, subtree: true });
    const stop = window.setTimeout(() => obs.disconnect(), 8000);
    return () => { window.clearTimeout(decide); window.clearTimeout(stop); obs.disconnect(); };
  }, [path, eligible]);

  const active = eligible && ownTable === false;
  const slot = useMainSlot(`fees:${path}`, active);
  if (!active || !slot) return null;
  return createPortal(<div data-fees-global="2026-11-10"><ApprovedTrainingFees /></div>, slot);
}
