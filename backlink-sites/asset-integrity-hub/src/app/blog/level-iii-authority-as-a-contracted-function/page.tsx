import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Level III Authority as a Contracted Function: When It Makes Sense",
  description: "Three situations put companies in the market for outside Level III authority — and the decision is different from hiring, because what is being bought is signature authority with a deadline attached.",
  keywords: ["asnt level iii","outsourced level iii","written practice","ndt programme audit"],
  alternates: { canonical: "https://asset-integrity-hub.vercel.app/blog/level-iii-authority-as-a-contracted-function" },
  openGraph: {
    title: "Level III Authority as a Contracted Function: When It Makes Sense",
    description: "Three situations put companies in the market for outside Level III authority — and the decision is different from hiring, because what is being bought is signature authority with a deadline attached.",
    type: 'article',
    url: "https://asset-integrity-hub.vercel.app/blog/level-iii-authority-as-a-contracted-function",
    siteName: "Asset Integrity Hub",
    locale: 'en_US',
    publishedTime: "2026-08-16T00:00:00.000Z",
    modifiedTime: "2026-08-16T00:00:00.000Z",
    authors: ["Priya Raghavan"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Level III Authority as a Contracted Function: When It Makes Sense",
  "description": "Three situations put companies in the market for outside Level III authority — and the decision is different from hiring, because what is being bought is signature authority with a deadline attached.",
  "author": {
    "@type": "Person",
    "name": "Priya Raghavan"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Asset Integrity Hub"
  },
  "datePublished": "2026-08-16T00:00:00.000Z",
  "dateModified": "2026-08-16T00:00:00.000Z",
  "mainEntityOfPage": "https://asset-integrity-hub.vercel.app/blog/level-iii-authority-as-a-contracted-function"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Level III Authority as a Contracted Function: When It Makes Sense</h1>
      <p className="text-slate-500 text-base">By Priya Raghavan · 16 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Level III authority is unusual among industrial qualifications: it is simultaneously a technical credential and an administrative office. A Level III does not simply know more ultrasonics than a Level II — they approve procedures, own the written practice, qualify techniques and sign certifications. That second half is what companies actually find themselves short of.</p>\n\n<h2>The three situations</h2>\n<p><strong>Won work that requires it.</strong> A contract names a Level III of record and the company does not employ one. The deadline is the contract's, not the certification body's, which rules out developing somebody internally in time.</p>\n<p><strong>Lost or oversubscribed coverage.</strong> The Level III is retiring, leaving, or already stretched across more methods than one person can genuinely oversee. Programmes usually discover this at the worst moment, because nothing visibly breaks until an audit or a resignation.</p>\n<p><strong>An audit finding.</strong> A client's auditor has read the written practice, the procedures or the technique qualifications and found them inadequate. There is now a corrective-action deadline, and the fix is programme work rather than inspection work.</p>\n\n<h2>Why this is a different purchase from hiring</h2>\n<p>Hiring a Level III solves the problem permanently and slowly. Contracting the function solves it immediately and provisionally. The two are not competitors — most companies that grow successfully do both, contracting so work can start while an internal candidate qualifies in parallel. What the contracted engagement actually covers — named Level III of record, written practice ownership, procedure and technique approval, and audit defence — is set out on this page describing <a href=\"https://atlantisndt.com/consulting/ndt-consulting-level-iii\">outsourced ASNT Level III consulting</a>.</p>\n\n<h2>The sector variable</h2>\n<p>What the engagement looks like depends heavily on regime. A nuclear programme under Section XI and 10 CFR 50 Appendix B needs different evidence than a shipyard under NAVSEA flow-downs, and both differ from an aerospace supplier facing a Nadcap audit. Practices that organise around that — as in this breakdown of <a href=\"https://atlantisndt.com/consulting/nuclear-ndt-consulting\">nuclear programme consulting</a> — tend to arrive already fluent in the auditor's document set, which is most of what the deadline is really about.</p>\n\n<h2>The question worth asking first</h2>\n<p>Not \"who can we get\" but \"what exactly must be signed, by when, and against which document?\" Companies that answer that precisely scope a short, effective engagement. Companies that do not tend to buy general advice and remain exactly as exposed as they were.</p>" }} />
    </article>
  );
}
