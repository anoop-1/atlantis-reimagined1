// Global, always-present enquiry CTA. 2026-09-07.
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
// GA4 shows 28K active users, 9.2K views on the ERP page alone, an average
// engagement time of 23 seconds and a 76.6% bounce rate on that top page — with
// no leads arriving. An audit of the built site found 1,644 indexable pages with
// no /contact link anywhere inside <main>, including the entire 474-page
// compliance family and /consulting/ndt-consulting-level-iii at 340 impressions.
//
// The important subtlety: the prerendered <main> is HIDDEN from real visitors.
// The static layer carries `#root>main { display: none !important }` and re-enables
// it only inside <noscript>, because that markup exists for crawlers while React
// renders the actual UI. So adding a CTA to the prerendered HTML would have been
// invisible to every human on the site. The fix has to live in the React layer.
//
// Mounting this once inside <BrowserRouter> but OUTSIDE <Routes> means every
// route gets it — all 6,743 indexable pages today, and every page added later,
// without touching a single page component.
//
// MEASUREMENT
// The anchor points at /contact, which GA4EventTracker already auto-detects and
// reports as erp_demo_request_click. So this is measurable from the moment it
// ships: if clicks stay near zero the CTA is not the constraint and the problem
// is further up the funnel; if clicks rise but enquiries do not, the constraint
// is the contact form itself. Either way we learn something, which was not true
// before.
//
// CONSTRAINTS HELD
// No price appears here (CLAUDE.md hard rule) — the offer is a consultation and
// a tailored quote on request. Brand palette is white ground with blue accent.
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/** Routes where a floating "enquire" prompt is noise rather than help. */
const SUPPRESSED = [/^\/contact/, /^\/404/, /^\/thank-you/, /^\/privacy/];

export default function GlobalEnquireCTA() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Appear once the visitor has actually engaged — either scrolled past the
  // fold or spent a few seconds on the page. Showing it instantly on a 23-second
  // average session reads as a popup and gets dismissed; showing it after a
  // signal of interest reads as an offer.
  useEffect(() => {
    setVisible(false);
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true);
    };
    const timer = window.setTimeout(() => setVisible(true), 6000);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (SUPPRESSED.some((re) => re.test(pathname))) return null;

  return (
    <div
      className={[
        "fixed z-40 print:hidden",
        // Mobile: a full-width bar pinned to the bottom, clear of thumb reach issues.
        "inset-x-0 bottom-0 px-3 pb-3",
        // Desktop: a compact card in the bottom-right corner.
        "sm:inset-x-auto sm:right-6 sm:bottom-6 sm:px-0 sm:pb-0",
        "transition-all duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-xl border border-primary/20 bg-white px-4 py-3 shadow-lg shadow-primary/10 sm:max-w-sm">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">Talk to an ASNT Level III</p>
          <p className="truncate text-xs text-slate-600">
            Free consultation and a tailored quote — no obligation.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Enquire now — contact Atlantis NDT"
        >
          Enquire now
        </Link>
      </div>
    </div>
  );
}
