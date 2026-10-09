// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "rail-ndt-resource",
  "name": "Rail NDT Resources",
  "primary": "consulting",
  "related": [
    "inspection",
    "training"
  ],
  "audience": "Rail maintenance and component quality teams",
  "headline": "Define the rail component and approval route before procuring NDT.",
  "introduction": "Rail, wheel, axle and fabricated components can require different methods and acceptance documents. Establish the applicable operator or customer requirements and personnel approval route first. Keep component identity and examination records connected to the maintenance decision.",
  "questions": [
    "Which component types and examination requirements apply?",
    "What operator-specific procedure and personnel approvals are required?",
    "How are indications escalated and components released or withdrawn?"
  ],
  "boundary": "No railway operator authorization or specialist fleet capability is implied. Confirm the specific scope and qualifications with the provider.",
  "domain": "https://rail-ndt-resource.vercel.app",
  "guides": [
    {
      "href": "/methods",
      "label": "Methods"
    },
    {
      "href": "/rail",
      "label": "Rail"
    },
    {
      "href": "/track-assessment",
      "label": "Track assessment"
    },
    {
      "href": "/wheel-inspection",
      "label": "Wheel inspection"
    }
  ],
  "featured": {
    "title": "Preserving rail component identity through examination handoffs",
    "path": "/guides/component-serial-identity-maintenance-handoffs",
    "description": "Keep serial numbers, assembly relationships and examination records connected when rail components move between maintenance, inspection and storage teams."
  },
  "googleVerification": "",
  "description": "Rail NDT Resources: practical scoping questions and subject guides for rail maintenance and component quality teams. Prepare a clear technical brief."
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
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. The provider confirms method suitability, personnel, delivery availability and quotation scope."
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
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
