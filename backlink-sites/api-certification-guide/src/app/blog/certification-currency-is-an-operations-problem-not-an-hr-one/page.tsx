import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certification Currency Is an Operations Problem, Not an HR One",
  description: "Expired certifications are almost never discovered by the company that holds them — they are discovered at a client gate. The reason is structural: the record lives somewhere the dispatch decision never looks.",
  keywords: ["API certification","SNT-TC-1A","certification tracking","inspector qualification","vision examination"],
  alternates: { canonical: "https://api-certification-guide.vercel.app/blog/certification-currency-is-an-operations-problem-not-an-hr-one" },
  openGraph: {
    title: "Certification Currency Is an Operations Problem, Not an HR One",
    description: "Expired certifications are almost never discovered by the company that holds them — they are discovered at a client gate. The reason is structural: the record lives somewhere the dispatch decision never looks.",
    type: 'article',
    url: "https://api-certification-guide.vercel.app/blog/certification-currency-is-an-operations-problem-not-an-hr-one",
    siteName: "API Certification Guide",
    locale: 'en_US',
    publishedTime: "2026-07-11T00:00:00.000Z",
    modifiedTime: "2026-07-11T00:00:00.000Z",
    authors: ["Daniel Okonkwo, API 510 / 570 / 653"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Certification Currency Is an Operations Problem, Not an HR One",
  "description": "Expired certifications are almost never discovered by the company that holds them — they are discovered at a client gate. The reason is structural: the record lives somewhere the dispatch decision never looks.",
  "author": {
    "@type": "Person",
    "name": "Daniel Okonkwo, API 510 / 570 / 653"
  },
  "publisher": {
    "@type": "Organization",
    "name": "API Certification Guide",
    "url": "https://api-certification-guide.vercel.app"
  },
  "datePublished": "2026-07-11T00:00:00.000Z",
  "dateModified": "2026-07-11T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://api-certification-guide.vercel.app/blog/certification-currency-is-an-operations-problem-not-an-hr-one"
  },
  "keywords": "API certification, SNT-TC-1A, certification tracking, inspector qualification, vision examination"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Certification Currency Is an Operations Problem, Not an HR One</h1>
      <p className="text-slate-500 text-base">By Daniel Okonkwo, API 510 / 570 / 653 · 11 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Ask any inspection contractor how they track certification currency and you will hear about a spreadsheet. Ask how they last discovered an expired certification and you will hear about a client gate, a pre-mobilisation check, or an auditor. Those two answers together describe the entire problem.</p>\n\n      <h2>The number of clocks is the issue</h2>\n      <p>A single technician certified in three methods carries a certification date per method, an annual near-vision acuity examination, a colour-contrast examination where the method requires it, documented on-the-job hours, site inductions per client, and often an operator-specific approval with its own validity. That is comfortably ten independent expiry dates for one person. A twelve-technician company is tracking well over a hundred.</p>\n      <p>Spreadsheets do not fail because people are careless. They fail because one row per person cannot represent that structure, and because the vision examination — running on a shorter cycle than the method certification it supports — falls out of sync with everything around it.</p>\n\n      <h2>Why reminders do not work</h2>\n      <p>A reminder informs someone about a lapse that has already happened or is about to. It does not prevent the assignment. The control that actually works is a dependency between the qualification record and the dispatch action: if the certification, the vision examination, the client approval or the instrument calibration is not current for the scope being assigned, the assignment cannot be made.</p>\n      <p>That is an operations control, not an HR one, which is why holding certificates in an HR system rarely helps. HR systems model people and roles; they have no concept of dispatch, and no concept of method-level qualification against a written practice revision. Platforms built for inspection operations — see how <a href=\"https://atlantisndt.com/inspection-management-software\" target=\"_blank\" rel=\"noopener\">inspection management software enforces currency at the point of dispatch</a> — treat it as a hard constraint rather than a report.</p>\n\n      <h2>The second half: point-in-time recovery</h2>\n      <p>Preventing the lapse solves tomorrow's problem. The audit problem is different and older: an auditor picks a report signed eighteen months ago and asks whether that person was qualified on that date. A system holding current state cannot answer, and the answer cannot be reconstructed retrospectively. Freezing the certification and calibration state onto each report at issue is trivial prospectively and impossible in arrears — which is why it is worth doing before an audit is scheduled rather than after one is announced.</p>\n\n      <h2>What to check this week</h2>\n      <ul>\n        <li>How many independent expiry dates does your business actually track? Count them; the number is usually a surprise.</li>\n        <li>Can a technician whose vision examination expired last week be assigned to a job today? Test it rather than assume.</li>\n        <li>Pick one report from eighteen months ago. Can you produce the signatory's qualification state as at that date?</li>\n      </ul>\n      <p>For a fuller treatment of how this scales past thirty technicians, this walkthrough of <a href=\"https://atlantisndt.com/blog/tracking-asnt-certification-expiry-at-scale\" target=\"_blank\" rel=\"noopener\">tracking ASNT certification expiry across a whole technician base</a> covers the data model and the migration sequence.</p>" }} />
    </article>
  );
}
