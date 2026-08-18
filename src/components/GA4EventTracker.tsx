// Global click-based GA4 event tracker for ERP funnel.
// Auto-detects:
//   - mailto: links (info@atlantisndt.com) → erp_mailto_click
//   - /contact links → erp_demo_request_click
//   - /templates/*.{xlsx|docx} downloads → template_download
//   - /press/* clicks → press_view
//   - /case-studies/* clicks → case_study_view
//   - /compare/* clicks → comparison_view
// Mounted once in App.tsx layout to capture all child link clicks.
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function track(event: string, params: Record<string, unknown>) {
  try {
    const enriched = { page_location: window.location.href, ...params };
    if (typeof window.gtag === "function") {
      window.gtag("event", event, enriched);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...enriched });
    }
  } catch {
    // silent
  }
}

export default function GA4EventTracker() {
  // ── SPA page_view emitter (added 2026-08-17) ────────────────────────────────
  // index.html runs gtag('config', …) once, which sends exactly one page_view:
  // the entry page. Every subsequent client-side route change was invisible to
  // GA4, so the property measured ~1.26 page_view per session_start (40,593 vs
  // 32,140 over 90d) on a content site averaging 200s+ sessions. Consequences:
  // depth-of-visit unmeasurable, internal journeys unattributable, and any
  // "views per page" comparison between blog and money pages meaningless.
  // Emitting page_view on navigation makes those real without touching the
  // entry hit, which gtag still owns.
  const location = useLocation();
  const isFirstRoute = useRef(true);

  useEffect(() => {
    if (isFirstRoute.current) {
      // gtag('config') already sent this one; double-counting the entry page
      // would inflate sessions' first hit and corrupt landing-page reports.
      isFirstRoute.current = false;
      return;
    }
    // SEOHead sets document.title during the same commit; let it land first so
    // the hit carries the real title rather than the previous page's.
    const id = window.setTimeout(() => {
      try {
        window.gtag?.("event", "page_view", {
          page_location: window.location.href,
          page_path: location.pathname + location.search,
          page_title: document.title,
        });
      } catch {
        // silent — analytics must never break navigation
      }
    }, 120);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!target) return;

      const href = (target as HTMLAnchorElement).href || "";
      const text = (target.textContent || "").slice(0, 100).trim();

      // Microsoft Form — THE lead channel. Owner converts these by phone, so a
      // click here is the closest thing the site has to a conversion. It was
      // invisible in GA4 until now (§38.4): the Form is an external host, so no
      // pageview, no form_submit, nothing. Checked first, and both hosts are
      // matched because the URL moved from forms.office.com to
      // forms.cloud.microsoft — an old cached page must still report.
      // The link opens in a new tab, so the page never unloads and the event
      // always has time to send.
      if (href.includes("forms.cloud.microsoft") || href.includes("forms.office.com")) {
        track("ms_form_click", {
          page_path: window.location.pathname,
          link_text: text,
          // Which CTA earned it — hero, a level card, or the page footer.
          referrer_section:
            target.closest("section")?.querySelector("h2,h1,h3")?.textContent?.slice(0, 80) || "",
        });
        return;
      }

      // mailto: clicks
      if (href.startsWith("mailto:")) {
        const subject = (() => {
          try {
            const u = new URL(href);
            return u.searchParams.get("subject") || "";
          } catch {
            return "";
          }
        })();
        track("erp_mailto_click", {
          email_target: href.replace("mailto:", "").split("?")[0],
          subject,
          page_path: window.location.pathname,
          link_text: text,
        });
        return;
      }

      // Template downloads (.xlsx | .docx | .pdf in /templates/)
      if (/\/templates\/.+\.(xlsx|docx|pdf)$/i.test(href)) {
        const file = href.split("/").pop() || "";
        track("template_download", {
          template_file: file,
          page_path: window.location.pathname,
        });
        return;
      }

      // /contact CTA
      try {
        const u = new URL(href);
        if (u.pathname === "/contact" || u.pathname.startsWith("/contact?")) {
          track("erp_demo_request_click", {
            page_path: window.location.pathname,
            link_text: text,
            referrer_section: target.closest("section")?.querySelector("h2,h1,h3")?.textContent?.slice(0, 80) || "",
          });
          return;
        }
        if (u.pathname.startsWith("/press/")) {
          track("press_view", { post_slug: u.pathname.replace("/press/", ""), page_path: window.location.pathname });
          return;
        }
        if (u.pathname.startsWith("/case-studies/")) {
          track("case_study_view", { case_slug: u.pathname.replace("/case-studies/", ""), page_path: window.location.pathname });
          return;
        }
        if (u.pathname.startsWith("/compare/")) {
          track("comparison_view", { compare_slug: u.pathname.replace("/compare/", ""), page_path: window.location.pathname });
          return;
        }
      } catch {
        // not a URL — ignore
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
