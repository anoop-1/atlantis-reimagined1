import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://power-generation-ndt.vercel.app/technology" },
  title: 'Power Plant Inspection Technology — Digital Twins, RBI & Automation',
  description: 'Emerging technology for power plant inspection: digital twins, risk-based inspection, automated UT.',
  keywords: ["power plant inspection technology"],
  openGraph: { title: 'Power Plant Inspection Technology — Digital Twins, RBI & Automation', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Power Plant Inspection Technology</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Power Plant Inspection Technology
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Emerging technology for power plant inspection: digital twins, risk-based inspection, automated UT.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about power plant inspection technology.
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
              <li><a href="/plant-types" className="text-blue-600 hover:underline">Power Plant Types & NDT Requirements</a></li>
              <li><a href="/plant-types/nuclear" className="text-blue-600 hover:underline">Nuclear Plant NDT</a></li>
              <li><a href="/plant-types/gas-turbine" className="text-blue-600 hover:underline">Gas Turbine Inspection</a></li>
              <li><a href="/plant-types/boiler" className="text-blue-600 hover:underline">Boiler Inspection Guide</a></li>
              <li><a href="/plant-types/wind-turbine" className="text-blue-600 hover:underline">Wind Turbine NDT</a></li>
          </ul>
        </section>

        <section className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Professional NDT Services?</h3>
          <p className="text-blue-700">
            <a href="https://atlantisndt.com/inspection-services" target="_blank" rel="noopener" className="font-semibold hover:underline">The provider</a> provides
            NDT consulting, training, and digital twin solutions. Discuss the required personnel qualifications, scope and delivery availability directly with the provider.
            <a href="https://atlantisndt.com/contact?service=inspection&amp;subject=Power+Generation+NDT%3A+NDT+inspection+services&amp;satellite=power-generation-ndt&amp;cta=article&amp;utm_source=power-generation-ndt&amp;utm_medium=referral&amp;utm_campaign=satellite-product-funnels&amp;utm_content=article" target="_blank" rel="noopener" className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Contact the provider →
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
