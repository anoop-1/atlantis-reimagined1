// Global click-based GA4 event tracker for ERP funnel.
// Auto-detects:
//   - mailto: links (info@atlantisndt.com) → erp_mailto_click
//   - /contact links → erp_demo_request_click
//   - /templates/*.{xlsx|docx} downloads → template_download
//   - /press/* clicks → press_view
//   - /case-studies/* clicks → case_study_view
//   - /compare/* clicks → comparison_view
// Mounted once in App.tsx layout to capture all child link clicks.
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function track(event: string, params: Record<string, unknown>) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...params });
    }
  } catch {
    // silent
  }
}

export default function GA4EventTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!target) return;

      const href = (target as HTMLAnchorElement).href || "";
      const text = (target.textContent || "").slice(0, 100).trim();

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
