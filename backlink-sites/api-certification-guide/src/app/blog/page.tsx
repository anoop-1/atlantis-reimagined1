import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | API Certification Guide",
  description: "In-depth technical articles from API Certification Guide on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
    {
      title: "What Employers Consistently Underestimate About Certifying Their Own Technicians",
      excerpt: "Under SNT-TC-1A the employer certifies, not the school. The four commitments that follow — and the one that actually sets the timeline.",
      date: "August 2026",
      readTime: "7 min read",
      href: "/blog/what-employers-underestimate-about-certifying-technicians",
      category: "Programme Management",
    },
    {
      title: "Certification Records Are a System, Not a Filing Cabinet: What National Contracts Now Require",
      excerpt: "Master service agreements increasingly demand auditable personnel certification across every crew and every state. Why branch-by-branch record keeping fails national audits, and what centralised written-practice administration looks like.",
      date: "August 2026",
      readTime: "8 min read",
      href: "/blog/certification-records-national-contracts",
      category: "Certification & Compliance",
    },
  {
    "title": "Certification Currency Is an Operations Problem, Not an HR One",
    "description": "Expired certifications are almost never discovered by the company that holds them — they are discovered at a client gate. The reason is structural: the record lives somewhere the dispatch decision never looks.",
    "href": "/blog/certification-currency-is-an-operations-problem-not-an-hr-one"
  },
  {
    "title": "Certification Tracking Software for API 510/570/653 Inspectors",
    "description": "How inspection companies use certification tracking software to manage API 510/570/653 renewals, ASNT levels, and audit readiness without spreadsheets.",
    "href": "/blog/certification-tracking-software-api-510-570-653"
  },
  {
    "title": "Digital Twin for API 510 Pressure Vessel Inspection Programs",
    "description": "How asset owners use digital twins to consolidate API 510 pressure vessel inspection history, thickness readings, and RBI data into one visual model.",
    "href": "/blog/digital-twin-for-api-510-pressure-vessel-inspection"
  }
];

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Articles</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">
        Technical writing on inspection practice, applicable codes, personnel qualification, and the
        records that determine whether an inspection stands up when it is examined.
      </p>
      <ul className="space-y-8">
        {articles.map((a) => (
          <li key={a.href} className="border-b border-slate-200 pb-8 last:border-0">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              <Link href={a.href} className="hover:text-blue-700">{a.title}</Link>
            </h2>
            {a.description ? <p className="text-slate-600 leading-relaxed">{a.description}</p> : null}
            <Link href={a.href} className="inline-block mt-3 text-blue-700 font-medium hover:underline">
              Read the article →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
