/**
 * Single source of truth for the lead-capture endpoint — 2026-08-12.
 *
 * Owner directive: every lead journey ends at the Microsoft Form; enquiries are
 * converted by phone. The on-site Stripe flow was removed 2026-08-12. Since
 * 2026-10-18 the published training fee tables carry one "Register & Buy Now"
 * button to portal.atlantisndt.com (src/data/approved-training-fees.json →
 * buyNow), which prices by country; it is not an enquiry endpoint.
 *
 * The URL was already hard-coded across 19 training pages. Centralising it here
 * means a form change is one edit, not a site-wide grep.
 */
export const MS_FORM_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u';

/** Label used on the primary lead CTA. Kept consistent so it is recognisable. */
export const MS_FORM_LABEL = 'Request a quote / enrol';

/** Anchor props for the Forms CTA — new tab, no referrer leakage. */
export const msFormLinkProps = {
  href: MS_FORM_URL,
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
