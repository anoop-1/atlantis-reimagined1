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
  "featured": {
    "title": "Designing an Exception-Led Inspection Report Approval Demonstration",
    "path": "/guides/exception-led-report-approval-demo-script",
    "description": "Build a repeatable demonstration script that reveals how missing evidence, revisions and review handoffs affect an inspection report approval workflow."
  },
  "googleVerification": "",
  "description": "NDT Software Solutions: practical scoping questions and subject guides for inspection company owners and operations teams. Prepare a clear technical brief."
};
export const offers = [
  {
    "key": "erp",
    "name": "NDT operations software",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with the provider."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within the provider's ERP."
  },
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  },
  {
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with the provider."
  },
  {
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  },
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. The provider confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
