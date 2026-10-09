// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-knowledge-hub",
  "name": "NDT Knowledge Hub",
  "primary": "training",
  "related": [
    "consulting",
    "simulation"
  ],
  "audience": "Engineers and technicians building practical NDT understanding",
  "headline": "Start with the inspection question before choosing the method.",
  "introduction": "Surface and volumetric methods answer different questions and have different limitations. Identify the likely discontinuity, material and access before narrowing the options. Use the resource library to understand terminology, then discuss the applicable method and qualification pathway with the responsible technical team.",
  "questions": [
    "What type of condition or discontinuity needs to be found?",
    "What material, geometry and surface access are available?",
    "Do you need learning, procedure advice or a defined inspection service?"
  ],
  "boundary": "General educational guidance cannot establish acceptance criteria for a particular component. Use the governing document and approved procedure.",
  "domain": "https://ndt-knowledge-hub.vercel.app",
  "guides": [
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/certifications",
      "label": "Certifications"
    },
    {
      "href": "/glossary",
      "label": "Glossary"
    },
    {
      "href": "/guides",
      "label": "Guides"
    },
    {
      "href": "/methods",
      "label": "Methods"
    },
    {
      "href": "/resources",
      "label": "Resources"
    },
    {
      "href": "/software-reviews",
      "label": "Software reviews"
    }
  ],
  "googleVerification": "dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE",
  "description": "NDT Knowledge Hub: practical scoping questions and subject guides for engineers and technicians building practical ndt understanding. Explore relevant Atlantis NDT support."
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
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
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
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
