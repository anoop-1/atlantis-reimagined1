// Shared helpers for SOFTWARE-COMPETITIVE pages.
import { esc } from './vendors.mjs';

export const SITE = 'https://atlantisndt.com';

/** Atlantis SoftwareApplication node. No offers, no price, no rating (hard rules). */
export function atlantisSoftwareNode(pageUrl, name = 'Atlantis NDT ERP') {
  return {
    '@type': 'SoftwareApplication',
    '@id': pageUrl + '#atlantis-software',
    name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'NDT inspection management and reporting software',
    operatingSystem: 'Web browser; installable offline field app',
    url: SITE + '/erp',
    description:
      'ERP configured for NDT and inspection companies: method-specific NDT reports with review and approval, technician certification tracking (SNT-TC-1A, CP-189, ISO 9712, PCN, CSWIP) with expiry alerts, equipment calibration records, crew dispatch, quotations, timesheets and invoicing. Affordable, accessible, fully customizable; quote on request.',
    featureList: [
      'NDT reports: 17 method-specific report types with draft, review, approve and send workflow',
      'Technician certification and vision-test tracking with alerts 90 days before expiry',
      'Equipment calibration records and certificate register with due-date alerts',
      'Team assignments that block double-booking of technicians and equipment',
      'Quotations, timesheets and invoicing linked to the job',
      'Offline field app with local drafts, photos and on-screen signatures',
      'Open REST API for integrations scoped per implementation',
    ],
    publisher: { '@type': 'Organization', '@id': SITE + '/#organization', name: 'Atlantis NDT', url: SITE },
  };
}

export function faqHtml(faq, heading = 'Frequently asked questions') {
  return `<h2>${esc(heading)}</h2>` + faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('');
}

export function faqNode(faq, pageUrl) {
  return {
    '@type': 'FAQPage',
    '@id': pageUrl + '#faq',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export const words = (html) =>
  String(html).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;

/**
 * Small "compare NDT software" block for ERP city hubs and /erp/apps pages.
 * {{lead}} is replaced per page (city-scoped on the city hubs), so the city
 * pages describe themselves locally while the exact anchor "NDT inspection
 * software" points only at the owner page, /ndt-inspection-software.
 */
export const COMPARE_LINKS_HTML =
  '<aside class="sw-compare-links" aria-label="Compare NDT software"><h2>Compare NDT software</h2><p>{{lead}} see <a href="/best-ndt-reporting-software-2026">the best NDT software compared</a> (Floodlight, AgileNDT, DRIVE NDT, Zertify, OMS, InspectionBank and Atlantis), or go straight to <a href="/floodlight-software-alternatives">Floodlight alternatives</a>, <a href="/agilendt-alternatives">AgileNDT alternatives</a>, <a href="/drive-ndt-alternatives">DRIVE NDT alternatives</a> or <a href="/zertify-alternatives">Zertify alternatives</a>. Still choosing a category? Start with <a href="/ndt-inspection-software">NDT inspection software</a>.</p></aside>';

/** One exact-anchor link to the owner page, added to competing software pages. */
export const OWNER_LINK_HTML =
  '<aside class="sw-owner-link" aria-label="NDT inspection software guide"><p>Choosing a platform? Our main guide to <a href="/ndt-inspection-software">NDT inspection software</a> explains the categories, and <a href="/best-ndt-reporting-software-2026">the best NDT software comparison</a> sets nine platforms side by side.</p></aside>';

/** Pages competing with /ndt-inspection-software for "ndt inspection software" (GSC 90d to 2026-09-27). */
export const OWNER_LINK_PAGES = [
  '/ndt-erp-solution',
  '/inspection-management-software',
  '/intelligent-reporting-software',
  '/ndt-software',
  '/ndt-reporting-software-comparison',
  '/erp/ndt-inspection-software-comparison',
  '/compare/atlantis-erp-vs-floodlight',
  '/blog/ndt-inspection-software-2026-best-platforms-compared',
  '/blog/best-ndt-inspection-software-2026-buyers-guide',
  '/blog/how-to-choose-erp-software-for-an-ndt-inspection-company-2026-buyer-s-guide',
];
