// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "aerospace-ndt-standards",
  "name": "Aerospace NDT Planning",
  "primary": "consulting",
  "related": [
    "training",
    "simulation"
  ],
  "audience": "Aerospace quality and personnel qualification teams",
  "headline": "Start aerospace NDT planning with the customer and employer requirements.",
  "introduction": "Identify the applicable customer documents, materials and inspection processes before defining personnel or procedure needs. Qualification records, reference standards and technique approvals should be traceable to the work being released. Keep training support distinct from the authority to approve a production process.",
  "questions": [
    "Which customer specification and personnel qualification scheme apply?",
    "What materials, product forms and methods are in scope?",
    "Who holds approval authority for the procedure and personnel programme?"
  ],
  "boundary": "A resource page is not evidence of aerospace accreditation or customer approval. The provider must confirm the exact engagement and required authorizations.",
  "domain": "https://aerospace-ndt-standards.vercel.app",
  "guides": [
    {
      "href": "/standards",
      "label": "Aerospace NDT Standards Overview"
    },
    {
      "href": "/standards/nas-410",
      "label": "NAS 410 Certification Guide"
    },
    {
      "href": "/standards/nadcap",
      "label": "NADCAP Accreditation Guide"
    },
    {
      "href": "/applications",
      "label": "Aerospace NDT Applications"
    },
    {
      "href": "/applications/composite-inspection",
      "label": "Composite Material NDT"
    }
  ],
  "featured": {
    "title": "Tracing Customer Supplements and Approval Records through an Aerospace Job Pack",
    "path": "/guides/customer-supplement-flowdown-job-pack-traceability",
    "description": "Build a job-specific record trail from customer documents and supplements to internal instructions, subcontractor handoffs and approval evidence."
  },
  "googleVerification": "",
  "description": "Aerospace NDT Planning: practical scoping questions and subject guides for aerospace quality and personnel qualification teams. Prepare a clear technical brief."
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
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with the provider."
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
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
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
