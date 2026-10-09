// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "industrial-inspection-resources",
  "name": "Industrial Inspection Resources",
  "primary": "inspection",
  "related": [
    "consulting",
    "erp"
  ],
  "audience": "Industrial buyers preparing an inspection enquiry",
  "headline": "Write an inspection scope that a provider can actually price and schedule.",
  "introduction": "A useful RFQ identifies the asset, examination objective, governing requirement and access conditions. Separate mandatory deliverables from optional work. Providing a realistic work window and known site constraints helps a provider explain dependencies before quoting.",
  "questions": [
    "What asset, material and quantity require inspection?",
    "Which specification, reporting format and acceptance authority apply?",
    "What location, access preparation and work window are available?"
  ],
  "boundary": "The final method, staffing and delivery commitment follow a technical scope review. A general enquiry is not a confirmed inspection booking.",
  "domain": "https://industrial-inspection-resources.vercel.app",
  "guides": [
    {
      "href": "/industries",
      "label": "Start Exploring Resources"
    },
    {
      "href": "/standards",
      "label": "View Standards"
    }
  ],
  "featured": {
    "title": "Maintaining an Inspection RFQ Clarification Log and Bid Assumptions",
    "path": "/guides/inspection-rfq-clarification-log-bid-assumptions",
    "description": "A focused workflow for recording inspection RFQ questions, controlling answers and making bidder assumptions visible before scope agreement."
  },
  "googleVerification": "",
  "description": "Industrial Inspection Resources: practical scoping questions and subject guides for industrial buyers preparing an inspection enquiry. Prepare a clear technical brief."
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
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
