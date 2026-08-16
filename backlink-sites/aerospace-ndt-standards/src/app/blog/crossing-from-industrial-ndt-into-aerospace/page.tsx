import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Crossing From Industrial NDT Into Aerospace: What Actually Transfers",
  description: "Moving from an SNT-TC-1A programme into NAS 410 work is routine but never automatic. What carries over, what must be rebuilt, and why manufacturing and MRO differ.",
  keywords: ["nas 410","en 4179","aerospace ndt","nadcap","part 145"],
  alternates: { canonical: "https://aerospace-ndt-standards.vercel.app/blog/crossing-from-industrial-ndt-into-aerospace" },
  openGraph: {
    title: "Crossing From Industrial NDT Into Aerospace: What Actually Transfers",
    description: "Moving from an SNT-TC-1A programme into NAS 410 work is routine but never automatic. What carries over, what must be rebuilt, and why manufacturing and MRO differ.",
    type: 'article',
    url: "https://aerospace-ndt-standards.vercel.app/blog/crossing-from-industrial-ndt-into-aerospace",
    siteName: "Aerospace NDT Standards",
    locale: 'en_US',
    publishedTime: "2026-08-16T00:00:00.000Z",
    modifiedTime: "2026-08-16T00:00:00.000Z",
    authors: ["Helen Ashcroft"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Crossing From Industrial NDT Into Aerospace: What Actually Transfers",
  "description": "Moving from an SNT-TC-1A programme into NAS 410 work is routine but never automatic. What carries over, what must be rebuilt, and why manufacturing and MRO differ.",
  "author": {
    "@type": "Person",
    "name": "Helen Ashcroft"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aerospace NDT Standards"
  },
  "datePublished": "2026-08-16T00:00:00.000Z",
  "dateModified": "2026-08-16T00:00:00.000Z",
  "mainEntityOfPage": "https://aerospace-ndt-standards.vercel.app/blog/crossing-from-industrial-ndt-into-aerospace"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Crossing From Industrial NDT Into Aerospace: What Actually Transfers</h1>
      <p className="text-slate-500 text-base">By Helen Ashcroft · 16 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Technicians and shops move into aerospace NDT constantly, usually because the work is steadier and better paid than general industry. The move is entirely achievable. It is also consistently underestimated, because the differences are structural rather than technical.</p>\n\n<h2>What transfers cleanly</h2>\n<p>Method physics transfers completely — ultrasound behaves the same in a forging as in a pressure vessel. Instrument competence transfers. Indication interpretation transfers in principle. A technician who is genuinely good at conventional UT will be genuinely good at aerospace UT once the acceptance context is learned.</p>\n\n<h2>What does not</h2>\n<p><strong>The certification structure.</strong> NAS 410 is not SNT-TC-1A with a different cover. It requires a named responsible Level 3 with defined authority, and it specifies training, experience and examination requirements that do not map one-to-one onto an industrial programme. Certification does not port; it is re-established. Employers plan the bridge deliberately — the regime differences are laid out in this overview of <a href=\"https://atlantisndt.com/consulting/aerospace-ndt-consulting\">aerospace NDT programme requirements</a>.</p>\n<p><strong>Sensitivity expectations.</strong> Aerospace fluorescent penetrant and eddy current run at sensitivities general industry rarely needs, with process control to match — bath concentration, emulsification timing, light levels, all monitored and recorded.</p>\n<p><strong>The acceptance authority.</strong> In industrial work a code supplies acceptance criteria. In aerospace, particularly maintenance, the OEM manual does. Writing procedures against the wrong document is the most common early error a crossing-over shop makes.</p>\n\n<h2>Manufacturing and MRO are not the same destination</h2>\n<p>Aerospace manufacturing means production-scale examination: penetrant lines, machined-structure eddy current, composite ultrasonics, Nadcap accreditation of the process. Maintenance — the MRO side — means finding in-service damage on assembled aircraft and engine hardware inside an FAA Part 145 repair station, where capability lists and airline vendor audits shape everything. The employer landscape and method mix on that side are described in this guide to <a href=\"https://atlantisndt.com/aviation-ndt-training\">aviation MRO NDT work</a>. A technician should choose deliberately, because the two build different résumés.</p>\n\n<h2>The realistic sequence</h2>\n<p>Get hired into an aerospace programme on the strength of transferable method competence, expect to re-qualify under NAS 410, start on the method with the highest volume (usually penetrant or eddy current), and treat programme-specific OEM approvals as the asset that compounds. Two of those and the next conversation is much easier.</p>" }} />
    </article>
  );
}
