// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "lng-inspection-hub",
  "name": "LNG Inspection Planning",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "LNG facility maintenance and integrity teams",
  "headline": "Connect the inspection scope with the facility’s operating constraints.",
  "introduction": "LNG projects require clear asset boundaries, materials information and site access arrangements. Distinguish fabrication examinations from in-service integrity questions. Bring drawings, prior records and the approved work window to the scope discussion so the appropriate personnel and procedures can be identified.",
  "questions": [
    "Is the scope fabrication, maintenance or an in-service assessment?",
    "Which assets, materials and governing requirements are involved?",
    "What isolation, access and document approvals precede inspection?"
  ],
  "boundary": "No cryogenic or LNG-specific authorization is implied by this resource. Confirm project competence and site requirements for the proposed engagement.",
  "domain": "https://lng-inspection-hub.vercel.app",
  "guides": [
    {
      "href": "/equipment",
      "label": "Equipment"
    },
    {
      "href": "/guides",
      "label": "Guides"
    },
    {
      "href": "/safety",
      "label": "Safety"
    },
    {
      "href": "/terminals",
      "label": "Terminals"
    }
  ],
  "googleVerification": "",
  "description": "LNG Inspection Planning: practical scoping questions and subject guides for lng facility maintenance and integrity teams. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
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
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with Atlantis."
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
