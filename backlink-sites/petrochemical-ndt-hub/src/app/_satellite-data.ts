// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "petrochemical-ndt-hub",
  "name": "Petrochemical NDT Planning",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Petrochemical maintenance and turnaround teams",
  "headline": "Plan examinations around the process unit and expected damage.",
  "introduction": "A unit-level scope benefits from equipment identification, process context and known degradation concerns. Keep material information and previous findings available for the technical review. Agree how field exceptions are escalated during the outage rather than leaving reporting questions until demobilization.",
  "questions": [
    "Which unit, equipment types and damage mechanisms are in scope?",
    "What inspection history and process information can be shared?",
    "Who resolves scope changes during the available outage window?"
  ],
  "boundary": "Damage-mechanism review and fitness decisions require competent engineering judgment. Confirm the boundaries of the requested inspection and consulting work.",
  "domain": "https://petrochemical-ndt-hub.vercel.app",
  "guides": [
    {
      "href": "/equipment",
      "label": "Equipment"
    },
    {
      "href": "/processes",
      "label": "Processes"
    },
    {
      "href": "/safety",
      "label": "Safety"
    }
  ],
  "featured": {
    "title": "Recording emergent inspection scope decisions during a turnaround",
    "path": "/guides/turnaround-emergent-scope-decision-log",
    "description": "Structure a turnaround decision log that connects new findings, proposed examination scope, technical decisions and issued work-package revisions."
  },
  "googleVerification": "dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE",
  "description": "Petrochemical NDT Planning: practical scoping questions and subject guides for petrochemical maintenance and turnaround teams. Prepare a clear technical brief."
};
export const offers = [
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
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
