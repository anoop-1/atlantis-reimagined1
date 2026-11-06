/**
 * "Problems this solves" links (2026-11-06): ERP module pages, the ERP owner pages each guide
 * names as related, /erp and the ERP city pages point at the /erp/solutions guides.
 * Rules and markup: solutionLinksFor() + solutionLinksHtml() in src/data/erp-solutions-2026-11.mjs;
 * the crawler (scripts/erp-solutions-pages.mjs) inserts the same block.
 *
 * This component is mounted on every route, so the guide content (≈30 kB gzip) is fetched only
 * on paths that can carry the block, never on the rest of the site.
 */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { solutionLinksFor, solutionLinksHtml } from "@/data/erp-solutions-2026-11.mjs";
import type { SolutionRecord } from "@/data/erp-solutions-2026-11.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

const CANDIDATE = /^\/(erp($|\/)|ndt-erp-|best-ndt-reporting-software-2026$|ndt-inspection-software$)/;

export default function ErpSolutionLinksBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const wanted = CANDIDATE.test(path) && !(usesPublishedContent(path) && !import.meta.env.DEV);
  const [pages, setPages] = useState<SolutionRecord[] | null>(null);
  useEffect(() => {
    if (!wanted || pages) return;
    let live = true;
    import("@/data/erp-solutions-2026-11.json").then((m) => { if (live) setPages((m.default as unknown as { pages: SolutionRecord[] }).pages); });
    return () => { live = false; };
  }, [wanted, pages]);
  const hit = wanted && pages ? solutionLinksFor(path, pages) : null;
  const slot = useMainSlot(`solutions:${path}`, Boolean(hit));
  if (!hit) return null;
  // Our own JSON, escaped by solutionLinksHtml(); links are internal paths.
  const block = <div dangerouslySetInnerHTML={{ __html: solutionLinksHtml(hit.list, hit.heading) }} />;
  return slot ? createPortal(block, slot) : block;
}
