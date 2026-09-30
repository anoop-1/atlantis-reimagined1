// Global, route-aware link block (SOFTWARE-COMPETITIVE, 2026-09-29). Mounted once in
// App.tsx outside <Routes>. Same HTML as scripts/software-competitive.mjs injects
// into the prerendered pages: "Compare NDT software" on the 60 NA ERP city hubs and
// /erp/apps pages, and one exact-anchor link to /ndt-inspection-software on the
// other pages competing for "ndt inspection software".
import { useLocation } from "react-router-dom";
import links from "@/data/software-competitive/compare-links.json";
import { usesPublishedContent } from "@/lib/published-pages";

const PROSE = "prose prose-lg max-w-none prose-a:text-primary";
const CITY_HUBS = new Set<string>(links.cityHubs);
const OWNER_PAGES = new Set<string>(links.ownerLinkPages);
const cityName = (path: string) =>
  path
    .replace(/^\/ndt-erp-/, "")
    .split("-")
    .map((w) => (w === "nj" ? "NJ" : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
const escHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Global: compare-software links on ERP city hubs + /erp/apps, owner link on competing pages. */
export default function SoftwareCompareLinks() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages already render the prerendered <main>, which carries this block.
  if (usesPublishedContent(path) && !import.meta.env.DEV) return null;
  let html: string | null = null;
  if (CITY_HUBS.has(path)) html = links.html.replace("{{lead}}", escHtml(`${cityName(path)} inspection companies comparing NDT software:`));
  else if (path === "/erp/apps" || path.startsWith("/erp/apps/")) html = links.html.replace("{{lead}}", "Comparing NDT software?");
  else if (OWNER_PAGES.has(path)) html = links.ownerHtml;
  if (!html) return null;
  return (
    <section className="container mx-auto max-w-4xl px-6 py-8">
      <div className={PROSE} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
