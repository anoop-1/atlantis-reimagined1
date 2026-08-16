import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What Employers Consistently Underestimate About Certifying Their Own Technicians",
  description: "Under SNT-TC-1A the employer certifies, not the school. The four commitments that follow — and the one that actually sets the timeline.",
  keywords: ["snt-tc-1a","employer certification","ndt written practice","technician development"],
  alternates: { canonical: "https://api-certification-guide.vercel.app/blog/what-employers-underestimate-about-certifying-technicians" },
  openGraph: {
    title: "What Employers Consistently Underestimate About Certifying Their Own Technicians",
    description: "Under SNT-TC-1A the employer certifies, not the school. The four commitments that follow — and the one that actually sets the timeline.",
    type: 'article',
    url: "https://api-certification-guide.vercel.app/blog/what-employers-underestimate-about-certifying-technicians",
    siteName: "API Certification Guide",
    locale: 'en_US',
    publishedTime: "2026-08-16T00:00:00.000Z",
    modifiedTime: "2026-08-16T00:00:00.000Z",
    authors: ["Dana Whitfield"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Employers Consistently Underestimate About Certifying Their Own Technicians",
  "description": "Under SNT-TC-1A the employer certifies, not the school. The four commitments that follow — and the one that actually sets the timeline.",
  "author": {
    "@type": "Person",
    "name": "Dana Whitfield"
  },
  "publisher": {
    "@type": "Organization",
    "name": "API Certification Guide"
  },
  "datePublished": "2026-08-16T00:00:00.000Z",
  "dateModified": "2026-08-16T00:00:00.000Z",
  "mainEntityOfPage": "https://api-certification-guide.vercel.app/blog/what-employers-underestimate-about-certifying-technicians"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>What Employers Consistently Underestimate About Certifying Their Own Technicians</h1>
      <p className="text-slate-500 text-base">By Dana Whitfield · 16 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>A company decides to grow its own inspection capability. It budgets for courses, sends three people, and eighteen months later has no additional certified technicians. This is common, and the reason is almost never the training.</p>\n\n<h2>The misunderstanding at the root</h2>\n<p>SNT-TC-1A is a recommended practice that tells an <em>employer</em> how to build its own certification programme. The employer adopts a written practice, counts training hours, documents supervised experience, administers examinations and issues the certification. A school course supplies training hours — often all of them — but nothing else. That distinction is stated plainly in this explanation of <a href=\"https://atlantisndt.com/ndt-school\">what an NDT school can and cannot do</a>, and it is the single most useful thing a company can understand before spending anything.</p>\n\n<h2>The four commitments</h2>\n<p><strong>Training hours</strong> — the part everyone budgets, and the smallest. <strong>Documented experience</strong> — supervised hours in the method, recorded so they survive an audit; this cannot be compressed or purchased. <strong>Examination</strong> — general, specific and practical, with the practical the one candidates most often fail. <strong>The programme itself</strong> — someone must own the written practice, approve examinations and sign certifications, and under SNT-TC-1A that is a Level III. Without one, a company cannot certify anybody regardless of how much training it buys.</p>\n\n<h2>The constraint that actually sets the timeline</h2>\n<p>Not money — <strong>supervision capacity</strong>. Every candidate accumulating experience hours consumes the attention of somebody already certified and already busy. Three candidates against one certified supervisor is not three programmes running in parallel; it is one queue. Companies that sequence candidates against real supervision capacity finish; companies that sequence against budget stall.</p>\n<p>The full commitment — including the awkward question of what happens when a certified employee leaves, since employer-based certification does not transfer — is worked through in this piece on <a href=\"https://atlantisndt.com/blog/sponsoring-employee-ndt-certification-employer-commitment\">what sponsoring a technician actually commits you to</a>.</p>\n\n<h2>What good programmes do differently</h2>\n<p>They fix the written practice before enrolling anyone, because every requirement in it becomes binding. They confirm Level III authority exists — internally or contracted — before the first candidate starts. And they treat repeated examination failures across several candidates as information about the programme rather than about the people.</p>" }} />
    </article>
  );
}
