import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

/**
 * Soft-404 guard (2026-09-30).
 *
 * GSC reported "Soft 404" for pages such as /training/power-ndt-training-fresno:
 * the prerendered HTML is a real, indexable page, but the React route that
 * catches it (/training/:slug -> CertTrainingLocationPage, the "*" catch-all ->
 * DynamicCityRoute) has no data for that slug and rendered "not found" after
 * hydration — and NotFound also set robots=noindex. Googlebot renders JS, so it
 * saw a not-found page.
 *
 * NotFound now asks this component first: if the page was prerendered (captured
 * by main.tsx before React replaced #root, or fetched for in-app navigation) it
 * shows that published content instead of the 404 screen. `onMissing` fires only
 * when there is genuinely no published page, so real 404s are unchanged.
 */
declare global {
  interface Window { __PRERENDERED__?: { path: string; html: string } }
}

const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

function usable(html: string) {
  return /<h1[\s>]/i.test(html) && !/<h1[^>]*>\s*(page not found|404)\s*</i.test(html);
}

export function usePrerenderedHtml(): { html: string | null; done: boolean } {
  const { pathname } = useLocation();
  const initial = window.__PRERENDERED__;
  const fromBoot = initial && norm(initial.path) === norm(pathname) && usable(initial.html) ? initial.html : null;
  const [state, setState] = useState<{ html: string | null; done: boolean }>({ html: fromBoot, done: !!fromBoot });

  useEffect(() => {
    if (fromBoot) { setState({ html: fromBoot, done: true }); return; }
    let cancelled = false;
    setState({ html: null, done: false });
    fetch(pathname, { headers: { Accept: "text/html" }, credentials: "same-origin" })
      .then(async (res) => {
        if (!res.ok) return null;
        const doc = new DOMParser().parseFromString(await res.text(), "text/html");
        const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
        const robots = doc.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
        const html = doc.getElementById("root")?.innerHTML || "";
        let canonPath = "";
        try { canonPath = new URL(canonical, window.location.origin).pathname; } catch { /* ignore */ }
        if (/noindex/i.test(robots) || norm(canonPath) !== norm(pathname) || !usable(html)) return null;
        return html;
      })
      .catch(() => null)
      .then((html) => { if (!cancelled) setState({ html, done: true }); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return state;
}

export function PrerenderedPage({ html }: { html: string }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div
        className="container mx-auto max-w-4xl px-6 pt-28 pb-16 text-slate-700 leading-relaxed [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_table]:w-full [&_table]:mb-6 [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_header]:hidden"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
