// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-careers-portal",
  "name": "NDT Career Development",
  "primary": "training",
  "related": [
    "simulation"
  ],
  "audience": "Technicians planning their next learning step",
  "headline": "Choose the next method by the work you intend to perform.",
  "introduction": "Start with actual role requirements rather than collecting unrelated course certificates. Compare your documented experience with the intended method and industry. Practical exercises can expose knowledge gaps, while a discussion with your employer clarifies which training investment can be used on real work.",
  "questions": [
    "Which roles and inspection applications are you targeting?",
    "Which method-specific training and experience records do you hold?",
    "Will an employer sponsor training and provide supervised experience?"
  ],
  "boundary": "Training and simulation do not guarantee employment, salary or certification. Use this guide to prepare a focused training enquiry.",
  "domain": "https://ndt-careers-portal.vercel.app",
  "guides": [
    {
      "href": "/careers",
      "label": "NDT Career Paths Overview"
    },
    {
      "href": "/salary",
      "label": "Comprehensive Salary Data"
    },
    {
      "href": "/careers/level-iii-consultant",
      "label": "How to Become a Level III Consultant"
    },
    {
      "href": "/job-markets/houston",
      "label": "Explore Houston market"
    },
    {
      "href": "/job-markets/middle-east",
      "label": "Explore ME market"
    },
    {
      "href": "/job-markets/asia-pacific",
      "label": "Explore APAC market"
    },
    {
      "href": "/salary/by-method",
      "label": "View detailed salary data by NDT method"
    },
    {
      "href": "/careers/ndt-inspector",
      "label": "Day in the Life of an NDT Inspector"
    }
  ],
  "featured": {
    "title": "Reconciling an Incomplete Technician Experience Logbook Before Employer Review",
    "path": "/guides/reconcile-incomplete-experience-logbook-before-review",
    "description": "Prepare a transparent experience-record reconciliation with source evidence, unresolved gaps, overlap checks and clearly bounded verification requests."
  },
  "googleVerification": "",
  "description": "NDT Career Development: practical scoping questions and subject guides for technicians planning their next learning step. Prepare a clear technical brief."
};
export const offers = [
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
