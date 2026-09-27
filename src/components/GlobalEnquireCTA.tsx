// Global, always-present enquiry CTA. 2026-09-07, made contextual 2026-09-27.
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
// WHY IT BECAME CONTEXTUAL (2026-09-27)
// GA4, 28 days to 2026-09-26: the blog drew 5,949 views and 24 CTA clicks
// (4.2 enquiry actions per 1k views) against Training's 102 per 1k. The pages
// with the most views and zero enquiry actions were ASME B31.3, ASME V,
// SNT-TC-1A, AWS D1.1, a calibration-certificate template and an ITP template,
// read at 50-60% engagement by exactly the buyers (QA/QC, inspection managers,
// NDT techs). One generic "Talk to an ASNT Level III" offer fitted none of them.
// Each cluster now gets the product that reader would actually buy.
//
// It also linked to bare /contact, bypassing the 2026-07-29/08-18 intent-carry
// fix on the contact page (?service= preselects the dropdown, ?subject= seeds
// the message and scrolls the form into view) — built because 88% of CTA intent
// was being lost before anyone typed. Every link here now carries both params.
//
// MEASUREMENT
// GA4EventTracker reports the click as contact_cta_click with `service` and,
// from 2026-09-27, `cta_variant` (the data-cta-variant attribute below), so the
// next cycle can read lift per offer rather than per site.
//
// CONSTRAINTS HELD
// No price appears here (CLAUDE.md hard rule) — every offer is a demo, a
// consultation or a quote on request. API 510/570/653 readers are never offered
// API training (Atlantis does not sell it); cert-seekers are offered ASNT
// SNT-TC-1A only. Brand palette is white ground with blue accent.
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/** Routes where a floating "enquire" prompt is noise rather than help. */
const SUPPRESSED = [/^\/contact/, /^\/404/, /^\/thank-you/, /^\/privacy/];

interface Offer {
  variant: string;
  service: string;
  subject: string;
  title: string;
  sub: string;
  button: string;
}

const METHODS: Array<[RegExp, string]> = [
  [/ultrasonic|(^|[-/])(ut|paut|tofd)([-/]|$)/, "Ultrasonic Testing"],
  [/radiograph|(^|[-/])rt([-/]|$)/, "Radiographic Testing"],
  [/magnetic-particle|(^|[-/])mt([-/]|$)/, "Magnetic Particle Testing"],
  [/penetrant|(^|[-/])pt([-/]|$)/, "Penetrant Testing"],
  [/visual-testing|(^|[-/])vt([-/]|$)/, "Visual Testing"],
  [/eddy-current|(^|[-/])et([-/]|$)/, "Eddy Current Testing"],
];

// Order matters: first match wins. Narrow, high-intent clusters come first.
const OFFERS: Array<[RegExp, Offer]> = [
  [
    /^\/practical-ndt|^\/erp\/apps\/elearning|practice-questions|practice-test|study-guide|mock-exam|quiz|^\/tools\//,
    { variant: "practice", service: "practical-ndt", subject: "Practical NDT simulator demo",
      title: "Practise it on a 3D NDT simulator", sub: "UT, RT, MT, PT and more — any skill level. Free demo.", button: "Book a demo" },
  ],
  [
    /^\/report-validation/,
    { variant: "review", service: "consulting", subject: "Independent Level III report review",
      title: "Get this report reviewed by a Level III", sub: "Independent ASNT Level III review — quote within 24h.", button: "Get a review" },
  ],
  [
    /^\/business-consulting/,
    { variant: "business", service: "consulting", subject: "Business consulting",
      title: "Growing an NDT business?", sub: "Setup, quality systems, digital operations and growth.", button: "Talk to us" },
  ],
  [
    /^\/consulting/,
    { variant: "level3", service: "consulting", subject: "Outsourced ASNT Level III",
      title: "Need an ASNT Level III on call?", sub: "Outsourced Level III — procedures, audits, sign-off.", button: "Talk to us" },
  ],
  [
    /procedure-template|written-practice/,
    { variant: "procedure", service: "consulting", subject: "NDT procedure writing / review",
      title: "Need a procedure written to this code?", sub: "An ASNT Level III drafts or reviews it for you.", button: "Ask a Level III" },
  ],
  [
    /^\/inspection|inspection-cost|pricing-matrix|third-party|inspection-compan|tank-inspection|pressure-vessel-inspection|piping-inspection|pipeline-inspection|weld-inspection|corrosion-inspection/,
    { variant: "inspection", service: "inspection", subject: "Inspection quote request",
      title: "Need this inspection carried out?", sub: "API 510 / 570 / 653 and NDT inspection — quote within 24h.", button: "Get a quote" },
  ],
  [
    /report/,
    { variant: "reporting", service: "reporting", subject: "NDT reporting software demo",
      title: "Build this report in minutes", sub: "Code-compliant NDT reports, mobile and offline. Free demo.", button: "See a demo" },
  ],
  [
    /template|calibration|(^|[-/])itp([-/]|$)|inspection-test-plan|requirements-matrix|records|certification-tracking|(^|[-/])cml|(^|[-/])erp|cmms|software/,
    { variant: "software", service: "erp", subject: "ERP demo — certs, calibration and records",
      title: "Still running this in spreadsheets?", sub: "Certs, calibration, jobs and records in one system. Free demo.", button: "See a demo" },
  ],
  [
    /digital-twin|asset-integrity|(^|[-/])rbi([-/]|$)|fitness-for-service|(^|[-/])ffs([-/]|$)|corrosion-(monitor|rate)|api-5(79|80|81)/,
    { variant: "twin", service: "digital-twins", subject: "Digital twin demo",
      title: "See your assets as a digital twin", sub: "Inspection data and damage mapping on a live 3D model. Free demo.", button: "See a demo" },
  ],
  [
    /^\/standards\/|standards-comparison|asme|aws-d1|(^|[-/])b31|section-v|section-viii|astm|en-iso|iso-17|procedure|level-iii-consult|audit|nadcap/,
    { variant: "procedure", service: "consulting", subject: "NDT procedure writing / review",
      title: "Need a procedure written to this code?", sub: "An ASNT Level III drafts or reviews it for you.", button: "Ask a Level III" },
  ],
  [
    /asnt|snt-tc-1a|cp-189|iso-9712|level-(1|2|3|i|ii|iii)([-/]|$)|(^|[-/])cwi|(^|[-/])pcn|salary|career|exam|pass-rate|body-of-knowledge|(^|[-/])bok|certification|^\/training|ndt-training|course|ndt-methods|methods-comparison/,
    { variant: "certify", service: "training", subject: "ASNT SNT-TC-1A certification pathway",
      title: "Get certified under SNT-TC-1A", sub: "ASNT Level III-led training and exams, on-site or online.", button: "Plan my path" },
  ],
  [
    /3d-scan/,
    { variant: "scanning", service: "3d-scanning", subject: "3D scanning quote",
      title: "Need this asset scanned?", sub: "Survey-grade LiDAR and photogrammetry. Quote on request.", button: "Get a quote" },
  ],
];

const DEFAULT_OFFER: Offer = {
  variant: "generic", service: "", subject: "",
  title: "Talk to an ASNT Level III", sub: "Free consultation and a tailored quote — no obligation.", button: "Enquire now",
};

export function offerForPath(pathname: string): Offer {
  const p = pathname.toLowerCase();
  for (const [re, offer] of OFFERS) if (re.test(p)) return offer;
  const method = METHODS.find(([re]) => re.test(p));
  if (method) {
    return { variant: "method", service: "training", subject: `${method[1]} certification`,
      title: `Get certified in ${method[1]}`, sub: "ASNT Level III-led, SNT-TC-1A. On-site or online.", button: "Plan my path" };
  }
  return DEFAULT_OFFER;
}

function contactHref(o: Offer): string {
  const q = new URLSearchParams();
  if (o.service) q.set("service", o.service);
  if (o.subject) q.set("subject", o.subject);
  const s = q.toString();
  return s ? `/contact?${s}` : "/contact";
}

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

  const offer = offerForPath(pathname);

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
          <p className="text-sm font-semibold text-slate-900">{offer.title}</p>
          <p className="truncate text-xs text-slate-600">{offer.sub}</p>
        </div>
        <Link
          to={contactHref(offer)}
          data-cta-variant={offer.variant}
          className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`${offer.button} — contact Atlantis NDT`}
        >
          {offer.button}
        </Link>
      </div>
    </div>
  );
}
