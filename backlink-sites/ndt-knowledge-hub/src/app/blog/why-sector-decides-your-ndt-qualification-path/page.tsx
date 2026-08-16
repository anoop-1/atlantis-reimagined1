import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why the Sector You Work In Decides Your NDT Qualification Path",
  description: "SNT-TC-1A, NAS 410, NAVSEA and ASME XI qualify people differently. A practical map of which regime governs where, and what it means for a technician planning a career.",
  keywords: ["ndt qualification","snt-tc-1a","nas 410","asme section xi","ndt career path"],
  alternates: { canonical: "https://ndt-knowledge-hub.vercel.app/blog/why-sector-decides-your-ndt-qualification-path" },
  openGraph: {
    title: "Why the Sector You Work In Decides Your NDT Qualification Path",
    description: "SNT-TC-1A, NAS 410, NAVSEA and ASME XI qualify people differently. A practical map of which regime governs where, and what it means for a technician planning a career.",
    type: 'article',
    url: "https://ndt-knowledge-hub.vercel.app/blog/why-sector-decides-your-ndt-qualification-path",
    siteName: "NDT Knowledge Hub",
    locale: 'en_US',
    publishedTime: "2026-08-16T00:00:00.000Z",
    modifiedTime: "2026-08-16T00:00:00.000Z",
    authors: ["Ravi Menon"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why the Sector You Work In Decides Your NDT Qualification Path",
  "description": "SNT-TC-1A, NAS 410, NAVSEA and ASME XI qualify people differently. A practical map of which regime governs where, and what it means for a technician planning a career.",
  "author": {
    "@type": "Person",
    "name": "Ravi Menon"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NDT Knowledge Hub"
  },
  "datePublished": "2026-08-16T00:00:00.000Z",
  "dateModified": "2026-08-16T00:00:00.000Z",
  "mainEntityOfPage": "https://ndt-knowledge-hub.vercel.app/blog/why-sector-decides-your-ndt-qualification-path"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Why the Sector You Work In Decides Your NDT Qualification Path</h1>
      <p className="text-slate-500 text-base">By Ravi Menon · 16 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Most discussions of NDT certification start with the method and stop there — ultrasonics versus radiography, Level I versus Level II. That framing hides the variable that actually shapes a career: the sector you work in decides which certification regime governs you, and those regimes are not interchangeable.</p>\n\n<h2>Four regimes, four different logics</h2>\n<p><strong>SNT-TC-1A</strong> governs most US industrial work and puts certification in the employer's hands. Your credential is issued by the company you work for, valid inside its written practice, and it does not travel — a new employer certifies you again. This is the model in refining, chemicals, fabrication and most general plant work.</p>\n<p><strong>NAS 410</strong> (and EN 4179 in Europe) governs aerospace, and the structural difference is the named responsible Level 3 who owns the programme, with OEM approval requirements layered per programme on top. Certification remains employer-issued, but the audit regime — Nadcap accrediting the process itself — is considerably tighter.</p>\n<p><strong>NAVSEA technical requirements</strong> govern naval shipbuilding and repair, layering qualification demands over SNT-TC-1A. Yards building or repairing naval vessels run some of the most rigorously audited certification programmes in US industry, and technicians trained inside them carry documentation habits that stand out everywhere else. The sector's shape is set out well in this overview of <a href=\"https://atlantisndt.com/maritime-ndt-training\">maritime NDT training and the yards that drive it</a>.</p>\n<p><strong>ASME Section XI</strong>, wrapped in 10 CFR 50 Appendix B quality requirements, governs commercial nuclear in-service inspection — and adds something no other regime has: performance demonstration, where a technician must find and size real flaws in blind specimens before being permitted on plant. The DOE complex adds federal orders above that again. The employer landscape and its qualification layers are mapped in this guide to <a href=\"https://atlantisndt.com/nuclear-ndt-training\">nuclear NDT training and the DOE-complex employers</a>.</p>\n\n<h2>Why this matters more than method choice</h2>\n<p>A UT Level II is not a UT Level II everywhere. Moving from a fab shop into aerospace is a planned bridge, not a paperwork transfer: the hours and examination structures differ, and the receiving employer plans for it. Moving into nuclear means clearing site access and, for some scopes, performance demonstration. Moving into naval work means absorbing a documentation standard that is stricter than what most industrial programmes require.</p>\n<p>None of these transitions is hard in the sense of being gated by talent. They are hard in the sense of being gated by <em>time</em> — and a technician who understands the map early sequences those transitions deliberately instead of discovering them at an interview.</p>\n\n<h2>The practical advice</h2>\n<p>Pick the first method for the market you are physically in, because supervised experience hours are the real constraint and they accrue where you already work. Then choose your second move for the regime you want to end up in, not just the method. A technician who spends three years in fabrication and then bridges deliberately into aerospace or nuclear ends up with two regimes on their record — and that combination is scarcer, and better paid, than any single deep specialisation.</p>" }} />
    </article>
  );
}
