/**
 * TrainingEnquiryCTA — the training lead capture. 2026-08-19.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * Training enquiries were not arriving, and the cause was not traffic or
 * click-through. Measured over 90 days to 2026-08-17:
 *
 *   ms_form_click            6 events, ALL SIX from /training
 *   erp_demo_request_click   535 events, spread across the ERP tree
 *
 * The Microsoft Form is the owner-designated lead channel — "every lead journey
 * ends at the Microsoft Form" (src/lib/enquiry-endpoint.ts) — and it was
 * deployed across ~1,000 ERP pages and only 21 source files elsewhere. The
 * training pages where US organic traffic actually lands had no way to enquire
 * at all:
 *
 *   /resources/training-requirements-matrix   57 US sessions, 63% engagement
 *   /training (hub)                           22 US sessions, 68% engagement
 *   /ndt-training-online                       8 US sessions
 *   /training-usa                              7 US sessions, 71% engagement
 *   every level page, every method page        no CTA
 *
 * Those engagement rates are the point. Visitors were reading to the end and
 * finding nothing to do. This is a missing-CTA problem wearing a traffic
 * problem's clothes, and adding a form link is a far cheaper fix than the
 * ranking work it was mistaken for.
 *
 * DESIGN NOTES
 *
 * The label comes from enquiry-endpoint.ts so it stays recognisable across the
 * site, and the URL is imported rather than repeated — it was hard-coded across
 * 19 pages before that module existed.
 *
 * The click is tracked by GA4EventTracker, which already matches both
 * forms.cloud.microsoft and forms.office.com and fires ms_form_click with the
 * originating section. Nothing extra is needed here, and adding a second
 * handler would double-count.
 *
 * `variant` exists because a page-end CTA and an inline mid-article CTA need
 * different weight. Both point at the same form.
 */
import { MS_FORM_URL, MS_FORM_LABEL } from "@/lib/enquiry-endpoint";
import { Link } from "react-router-dom";

export interface TrainingEnquiryCTAProps {
  /** Sets the heading and supporting line to the page's context. */
  heading?: string;
  body?: string;
  /** "block" is the full page-end panel; "inline" is a lighter mid-page prompt. */
  variant?: "block" | "inline";
  /** Shown under the CTA so an employer buyer sees the other route. */
  showCorporateLink?: boolean;
}

export default function TrainingEnquiryCTA({
  heading = "Ask about NDT training dates and delivery",
  body = "Tell us the methods and levels you need and how many technicians. We reply with available dates, the delivery options that fit, and what your written practice requires — usually the same working day.",
  variant = "block",
  showCorporateLink = true,
}: TrainingEnquiryCTAProps) {
  if (variant === "inline") {
    return (
      <p className="my-6 rounded-md border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 px-4 py-3 text-sm">
        <a
          href={MS_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-800 dark:text-blue-300 underline underline-offset-2"
        >
          {MS_FORM_LABEL}
        </a>{" "}
        — tell us the methods, levels and headcount, and we reply with dates and delivery options.
      </p>
    );
  }

  return (
    <section
      data-cta="training-enquiry"
      aria-labelledby="training-enquiry-heading"
      className="my-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-6"
    >
      <h2 id="training-enquiry-heading" className="text-xl font-bold mb-2">
        {heading}
      </h2>
      <p className="text-slate-700 dark:text-slate-300 mb-5 max-w-2xl">{body}</p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={MS_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          {MS_FORM_LABEL}
        </a>
        {showCorporateLink && (
          <Link
            to="/corporate-ndt-training"
            className="text-blue-800 dark:text-blue-300 underline underline-offset-2 text-sm"
          >
            Training a whole crew? See employer-sponsored cohorts
          </Link>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-600 dark:text-slate-400">
        Prefer email? <a href="mailto:info@atlantisndt.com" className="underline">info@atlantisndt.com</a>
      </p>
    </section>
  );
}
