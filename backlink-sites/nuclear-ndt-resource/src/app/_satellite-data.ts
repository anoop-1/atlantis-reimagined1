// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "nuclear-ndt-resource",
  "name": "Nuclear NDT Programme Resources",
  "primary": "consulting",
  "related": [
    "training",
    "reporting"
  ],
  "audience": "Nuclear quality and inspection programme teams",
  "headline": "Establish qualification and approval requirements before discussing delivery.",
  "introduction": "Nuclear inspection programmes rely on controlled documents, traceable records and defined technical authority. Identify the component classification and applicable programme before scoping external support. Training, procedure review and inspection execution can carry different authorization requirements.",
  "questions": [
    "Which component classification and programme documents apply?",
    "What personnel, procedure and supplier approvals are required?",
    "Which record review and retention obligations must be supported?"
  ],
  "boundary": "This site does not claim nuclear accreditation, regulatory authorization or approved-supplier status. Any engagement requires explicit capability and approval confirmation.",
  "domain": "https://nuclear-ndt-resource.vercel.app",
  "guides": [
    {
      "href": "/reactor-systems",
      "label": "Reactor systems"
    },
    {
      "href": "/regulatory",
      "label": "Regulatory"
    },
    {
      "href": "/techniques",
      "label": "Techniques"
    }
  ],
  "featured": {
    "title": "Freezing a Nuclear Inspection Package Manifest with Clear Approval Status",
    "path": "/guides/nuclear-inspection-package-manifest-approval-status",
    "description": "An administrative workflow for assembling, freezing and reconciling a nuclear inspection document package with mixed revisions and approval states."
  },
  "googleVerification": "",
  "description": "Nuclear NDT Programme Resources: practical scoping questions and subject guides for nuclear quality and inspection programme teams. Prepare a clear technical brief."
};
export const offers = [
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
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
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within the provider's ERP."
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
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. The provider confirms method suitability, personnel, delivery availability and quotation scope."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
