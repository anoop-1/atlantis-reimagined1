// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "marine-offshore-ndt",
  "name": "Marine and Offshore NDT",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Vessel, offshore asset and maintenance teams",
  "headline": "Plan inspection around access, asset identification and survey requirements.",
  "introduction": "Marine and offshore work needs clear boundaries between owner requirements, survey obligations and the NDT scope. Map the relevant structure or equipment to drawings and prior findings. Coordinate access and reporting expectations early so results can be used by the responsible reviewer.",
  "questions": [
    "Which structure, equipment and inspection locations are involved?",
    "What owner, class or customer requirements must be addressed?",
    "What access, mobilization and weather-related constraints apply?"
  ],
  "boundary": "Class approval and offshore delivery capability must be confirmed for the specific scope. This resource is not a claim of class-society authorization.",
  "domain": "https://marine-offshore-ndt.vercel.app",
  "guides": [
    {
      "href": "/vessels",
      "label": "Marine Vessel NDT"
    },
    {
      "href": "/vessels/tanker-hull",
      "label": "Tanker Hull Inspection"
    },
    {
      "href": "/vessels/container-ship",
      "label": "Container Ship NDT"
    },
    {
      "href": "/vessels/lng-carrier",
      "label": "LNG Carrier Inspection"
    },
    {
      "href": "/components",
      "label": "Marine Components NDT"
    }
  ],
  "googleVerification": "",
  "description": "Marine and Offshore NDT: practical scoping questions and subject guides for vessel, offshore asset and maintenance teams. Explore relevant Atlantis NDT support."
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
