// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "middle-east-ndt-resource",
  "name": "Middle East NDT Resources",
  "primary": "training",
  "related": [
    "inspection",
    "consulting"
  ],
  "audience": "Middle East employers and technicians planning NDT work",
  "headline": "Prepare a regional enquiry with the country, employer and required outcome.",
  "introduction": "Training and inspection arrangements vary with the location, customer requirements and work schedule. For a training enquiry, provide methods, learner experience and delivery preferences. For project support, identify the site, required personnel approvals and scope before arranging mobilization.",
  "questions": [
    "Which country and site or training location are involved?",
    "Is the requirement individual training, a company cohort or project support?",
    "What employer documents, approvals and dates govern the work?"
  ],
  "boundary": "Regional content does not imply a local office or operator approval. Availability and project requirements are confirmed directly with the provider.",
  "domain": "https://middle-east-ndt-resource.vercel.app",
  "guides": [
    {
      "href": "/countries",
      "label": "NDT by Country"
    },
    {
      "href": "/countries/uae",
      "label": "NDT in UAE"
    },
    {
      "href": "/countries/saudi-arabia",
      "label": "NDT in Saudi Arabia"
    },
    {
      "href": "/countries/qatar",
      "label": "NDT in Qatar"
    },
    {
      "href": "/countries/kuwait",
      "label": "NDT in Kuwait"
    }
  ],
  "featured": {
    "title": "Multilingual Technical Document Handoffs Between Site Teams and Remote Reviewers",
    "path": "/guides/multilingual-technical-document-site-review-handoffs",
    "description": "A practical record workflow for preserving technical meaning, source versions, units and unresolved language questions across site-to-reviewer handoffs."
  },
  "googleVerification": "",
  "description": "Middle East NDT Resources: practical scoping questions and subject guides for middle east employers and technicians planning ndt work. Prepare a clear technical brief."
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
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
