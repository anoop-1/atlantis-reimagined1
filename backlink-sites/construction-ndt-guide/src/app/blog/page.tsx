import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Construction NDT Guide",
  description: "In-depth technical articles from Construction NDT Guide on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
  {
    "title": "Digital Twin for Structural Integrity Monitoring in Construction",
    "description": "How structural engineers use asset digital twins to track weld condition, deflection, and inspection history across buildings, bridges, and civil structures.",
    "href": "/blog/digital-twin-for-structural-integrity-monitoring"
  },
  {
    "title": "On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme",
    "description": "Construction ERP handles cost and schedule well and the quality record badly. On fabrication-heavy projects that is the wrong way round, because the quality record is where the audit lands.",
    "href": "/blog/the-quality-record-is-what-gets-audited-not-the-programme"
  },
  {
    "title": "QA/QC ERP for Structural Weld Inspection Under AWS D1.1",
    "description": "How construction NDT and QA/QC teams manage AWS D1.1 weld inspection records, NDE dispositions, and CWI sign-offs inside an ERP.",
    "href": "/blog/construction-qa-qc-erp-for-weld-inspection"
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
