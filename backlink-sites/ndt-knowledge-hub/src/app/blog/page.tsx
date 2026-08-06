import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | NDT Knowledge Hub",
  description: "In-depth technical articles from NDT Knowledge Hub on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
    {
      title: "Offline-First Field Data Capture: The Feature Inspection Crews Discover They Needed Too Late",
      excerpt: "Dig sites, tank farms and compressor stations are connectivity dead zones. Why offline-first capture beats feature lists when inspection data has to survive the trip back to the office — and what re-keyed field sheets actually cost.",
      date: "August 2026",
      readTime: "9 min read",
      href: "/blog/field-data-capture-offline-first-inspection",
      category: "Inspection Technology",
    },
  {
    "title": "Four Different Things Are Called \"NDT Software\" — and Buyers Keep Confusing Them",
    "description": "Instrument acquisition suites, simulation packages, generic CMMS and inspection business management systems all get returned for the same search. Buying the wrong category is the most expensive mistake in this market.",
    "href": "/blog/four-things-called-ndt-software-and-why-buyers-confuse-them"
  },
  {
    "title": "NDT Inspection Software Buyer's Guide for 2026",
    "description": "A category-by-category buyer's guide to NDT inspection software in 2026: field data capture, report generation, and full ERP platforms compared.",
    "href": "/blog/ndt-inspection-software-buyers-guide-2026"
  },
  {
    "title": "What Is a Digital Twin for NDT? A 2026 Explainer",
    "description": "A plain-language explainer on what an NDT digital twin actually is, how it links to API 510/570/653 and RBI/FFS data, and how deployments are scoped.",
    "href": "/blog/what-is-a-digital-twin-for-ndt-2026"
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
