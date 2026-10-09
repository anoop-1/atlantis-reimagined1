// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "coating-inspection-guide",
  "name": "Coating Inspection Planning",
  "primary": "consulting",
  "related": [
    "inspection",
    "reporting"
  ],
  "audience": "Coating project and quality managers",
  "headline": "Define the coating acceptance records before the work starts.",
  "introduction": "A coating inspection package depends on the coating system, substrate preparation and project specification. Agree hold points, environmental records, instrument checks and reporting expectations in advance. A complete record identifies both the measured result and the condition under which it was obtained.",
  "questions": [
    "Which coating system and project specification apply?",
    "What preparation, application and final-inspection hold points are required?",
    "Which instruments, personnel qualifications and reports are specified?"
  ],
  "boundary": "Confirm coating-specific personnel and delivery capability with the provider before assuming availability. Project requirements govern acceptance.",
  "domain": "https://coating-inspection-guide.vercel.app",
  "guides": [
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/defects",
      "label": "Defects"
    },
    {
      "href": "/inspections",
      "label": "Inspections"
    },
    {
      "href": "/methods",
      "label": "Methods"
    },
    {
      "href": "/standards",
      "label": "Standards"
    }
  ],
  "featured": {
    "title": "Organizing Coating Hold-Point Evidence and Unresolved Observations",
    "path": "/guides/coating-hold-point-evidence-and-open-observations",
    "description": "How coating project teams can connect work areas, stage evidence, hold-point decisions and open observations without confusing record completeness with acceptance."
  },
  "googleVerification": "",
  "description": "Coating Inspection Planning: practical scoping questions and subject guides for coating project and quality managers. Prepare a clear technical brief."
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
