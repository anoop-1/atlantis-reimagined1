// The ONE founder Person entity (2026-10-12). Same data as the crawler layer:
// src/data/author-anoop-profile.json -> scripts/author-entity.mjs (FOUNDER_PERSON),
// emitted by scripts/money-pages-2026-10.mjs on /erp, /consulting and the Level III page.
// Owner-approved facts only: ASNT NDT Level III in UT, RT, MT, PT, VT; 11+ years.
import profile from "@/data/author-anoop-profile.json";

export const SITE = "https://atlantisndt.com";
export const ORG_ID = `${SITE}/#organization`;
export const FOUNDER_PERSON = profile.person;
export const FOUNDER_ID = profile.person["@id"];

type Faq = { q: string; a: string };

/**
 * JSON-LD nodes every money page shares: the founder Person, the Organization ->
 * founder link, and a WebPage that is about the page's main entity and reviewed by
 * the founder. Kept identical to pageNodes() in scripts/money-pages-2026-10.mjs.
 */
export function founderPageNodes(path: string, name: string, aboutId: string) {
  const url = `${SITE}${path}`;
  return [
    FOUNDER_PERSON,
    { "@type": "Organization", "@id": ORG_ID, founder: { "@id": FOUNDER_ID } },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name,
      about: { "@id": aboutId },
      reviewedBy: { "@id": FOUNDER_ID },
      publisher: { "@id": ORG_ID },
    },
  ];
}

/** FAQPage built only from the FAQ the page renders. */
export function faqPageNode(path: string, faq: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE}${path}#faq`,
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
