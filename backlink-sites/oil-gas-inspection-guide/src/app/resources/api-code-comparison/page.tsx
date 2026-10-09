import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://oil-gas-inspection-guide.vercel.app/resources/api-code-comparison" },
  title: 'API Code Comparison Chart — 510 vs 570 vs 653 Side by Side',
  description: 'Side-by-side comparison of API 510, API 570, and API 653: scope, intervals, exam requirements, career paths.',
  keywords: ["API code comparison"],
  openGraph: { title: 'API Code Comparison Chart — 510 vs 570 vs 653 Side by Side', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">API Code Comparison Chart</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        API Code Comparison Chart
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Side-by-side comparison of API 510, API 570, and API 653: scope, intervals, exam requirements, career paths.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about api code comparison chart.
            Whether you&apos;re an NDT professional, engineer, or asset manager, this guide provides actionable insights
            backed by industry standards and best practices.
          </p>
          <p>When a technical requirement needs external support, review <a href="https://atlantisndt.com/inspection-services">the relevant service scope</a> and confirm capabilities for the actual application.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Topics Covered</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>Provider selection should consider application-specific qualifications, agreed deliverables and availability. A general guide is not evidence of approval for a particular job.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Standards & Compliance</h2>
          <p>The governing documents, approved procedure and responsible technical authority determine project requirements. A provider link does not demonstrate compliance or establish customer approval.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Resources</h2>
          <p>Use an anonymised job example to discuss <a href="https://atlantisndt.com/inspection-services">workflow or service requirements</a>. Agreement on a deliverable is more useful than a broad capability claim.</p>
        </section>


        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h2>
          <ul className="space-y-2">
              <li><a href="/api-codes" className="text-blue-600 hover:underline">API Inspection Codes Explained</a></li>
              <li><a href="/api-codes/api-653-complete-guide" className="text-blue-600 hover:underline">API 653 Tank Inspection</a></li>
              <li><a href="/api-codes/api-570-piping" className="text-blue-600 hover:underline">API 570 Piping Inspection</a></li>
              <li><a href="/api-codes/api-510-pressure-vessels" className="text-blue-600 hover:underline">API 510 Pressure Vessel Inspection</a></li>
              <li><a href="/api-codes/api-580-rbi" className="text-blue-600 hover:underline">API 580 Risk-Based Inspection</a></li>
          </ul>
        </section>

        <section className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Professional NDT Services?</h3>
          <p className="text-blue-700">
            <a href="https://atlantisndt.com/inspection-services" target="_blank" rel="noopener" className="font-semibold hover:underline">The provider</a> provides
            NDT consulting, training, and digital twin solutions. Discuss the required personnel qualifications, scope and delivery availability directly with the provider.
            <a href="https://atlantisndt.com/contact?service=inspection&amp;subject=Oil+and+Gas+Inspection+Guide%3A+NDT+inspection+services&amp;satellite=oil-gas-inspection-guide&amp;cta=article&amp;utm_source=oil-gas-inspection-guide&amp;utm_medium=referral&amp;utm_campaign=satellite-product-funnels&amp;utm_content=article" target="_blank" rel="noopener" className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Contact the provider →
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
