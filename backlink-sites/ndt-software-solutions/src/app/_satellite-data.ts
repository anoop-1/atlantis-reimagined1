// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-software-solutions",
  "name": "NDT Software Solutions",
  "primary": "erp",
  "related": [
    "reporting",
    "twin"
  ],
  "audience": "Inspection company owners and operations teams",
  "headline": "Choose software around the inspection job, from request to approved report.",
  "introduction": "A useful software evaluation follows one real job across certification checks, equipment allocation, field capture, review and invoicing. Separate must-have controls from conveniences before comparing platforms. A long feature list is less informative than seeing your own approval path and export requirements work.",
  "questions": [
    "Which records are re-entered between spreadsheets, reports and invoices?",
    "Who prepares, reviews and approves a report, and what changes after approval?",
    "Which historical data and external systems must be included in the initial rollout?"
  ],
  "boundary": "Request a demonstration using sample records. Confirm integrations, hosting, migration and support in the agreed scope; do not assume every configuration is ready-made.",
  "domain": "https://ndt-software-solutions.vercel.app",
  "guides": [
    {
      "href": "/comparisons",
      "label": "NDT Software Comparison 2026"
    },
    {
      "href": "/comparisons/reporting-software",
      "label": "Best NDT Reporting Software 2026"
    },
    {
      "href": "/comparisons/erp-software",
      "label": "NDT ERP Software Comparison"
    },
    {
      "href": "/comparisons/digital-twin-platforms",
      "label": "Digital Twin Platforms for NDT"
    },
    {
      "href": "/features",
      "label": "NDT Software Features"
    }
  ],
  "googleVerification": "",
  "description": "NDT Software Solutions: practical scoping questions and subject guides for inspection company owners and operations teams. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "erp",
    "name": "Atlantis NDT ERP",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with Atlantis."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
  },
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
