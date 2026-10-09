// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "mining-ndt-hub",
  "name": "Mining Equipment NDT",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Mining maintenance and reliability teams",
  "headline": "Prioritize the component and failure question before choosing an examination.",
  "introduction": "Mining equipment varies widely in material, loading and accessibility. Use maintenance history and component drawings to define the suspected condition and inspection area. Plan cleaning and access so the examination can address the intended question rather than simply record accessible surfaces.",
  "questions": [
    "Which components and suspected damage drive the inspection?",
    "What material, loading history and prior repair information are available?",
    "When can the equipment be made accessible and taken out of service?"
  ],
  "boundary": "The responsible engineer defines acceptance and return-to-service requirements. Confirm the method and delivery scope before booking.",
  "domain": "https://mining-ndt-hub.vercel.app",
  "guides": [
    {
      "href": "/equipment",
      "label": "Equipment"
    },
    {
      "href": "/mining",
      "label": "Mining"
    },
    {
      "href": "/safety",
      "label": "Safety"
    }
  ],
  "featured": {
    "title": "Preserving Inspection History When Mining Components Move or Are Replaced",
    "path": "/guides/component-replacement-relocation-inspection-history",
    "description": "How mining maintenance teams can retain physical component histories through replacements, rebuilds, storage and relocation between machines."
  },
  "googleVerification": "",
  "description": "Mining Equipment NDT: practical scoping questions and subject guides for mining maintenance and reliability teams. Prepare a clear technical brief."
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
