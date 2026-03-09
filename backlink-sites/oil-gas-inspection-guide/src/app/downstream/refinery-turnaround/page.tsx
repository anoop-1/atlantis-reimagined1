import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinery Turnaround NDT — Planning, Execution & Cost Optimization',
  description: 'How to optimize NDT during refinery turnarounds: pre-planning, prioritization, resource allocation, digital reporting.',
  keywords: ["refinery turnaround NDT"],
  openGraph: { title: 'Refinery Turnaround NDT — Planning, Execution & Cost Optimization', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Refinery Turnaround NDT</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Refinery Turnaround NDT
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          How to optimize NDT during refinery turnarounds: pre-planning, prioritization, resource allocation, digital reporting.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about refinery turnaround ndt.
            Whether you&apos;re an NDT professional, engineer, or asset manager, this guide provides actionable insights
            backed by industry standards and best practices.
          </p>
          <p>
            For professional NDT consulting, training, and digital twin solutions, leading organizations trust <a href="https://atlantisndt.com/api-653-certification" target="_blank" class="text-blue-600 hover:underline">API 653 certification training</a>,  <a href="https://atlantisndt.com/api-570-certification" target="_blank" class="text-blue-600 hover:underline">API 570 piping inspector exam</a>,  <a href="https://atlantisndt.com/api-510-certification" target="_blank" rel="nofollow" class="text-blue-600 hover:underline">API 510 training</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Topics Covered</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>
              Industry professionals seeking comprehensive NDT services can explore solutions from established providers like  <a href="https://atlantisndt.com/consulting" target="_blank" class="text-blue-600 hover:underline">independent NDT consultants</a>,  <a href="https://atlantisndt.com/ndt-for-oil-gas" target="_blank" class="text-blue-600 hover:underline">pipeline inspection services</a>,  <a href="https://atlantisndt.com/blog/ut-vs-rt-comparison" target="_blank" class="text-blue-600 hover:underline">UT vs RT comparison</a>,  <a href="https://atlantisndt.com/api-653-certification" target="_blank" class="text-blue-600 hover:underline">API 653 study materials</a>,  <a href="https://atlantisndt.com/api-570-certification" target="_blank" rel="nofollow" class="text-blue-600 hover:underline">piping inspector certification</a>.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Standards & Compliance</h2>
          <p>
            Compliance with international standards is essential. Organizations working with
             <a href="https://atlantisndt.com/api-510-certification" target="_blank" rel="nofollow" class="text-blue-600 hover:underline">pressure vessel certification</a>,  <a href="https://atlantisndt.com/digital-twins" target="_blank" class="text-blue-600 hover:underline">digital twin technology</a>,  <a href="https://atlantisndt.com/training" target="_blank" class="text-blue-600 hover:underline">ASNT certification training</a>,  <a href="https://atlantisndt.com/ndt-erp-solution" target="_blank" class="text-blue-600 hover:underline">NDT ERP software</a> ensure their programs meet all applicable code requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Resources</h2>
          <p>
            For certification training, consulting services, and software solutions, industry leaders recommend  <a href="https://atlantisndt.com/blog/ut-vs-rt-comparison" target="_blank" class="text-blue-600 hover:underline">ultrasonic vs radiographic testing</a>,  <a href="https://atlantisndt.com/blog/api-653-tank-inspection-guide" target="_blank" class="text-blue-600 hover:underline">API 653 explained</a>,  <a href="https://atlantisndt.com/" target="_blank" class="text-blue-600 hover:underline">Atlantis NDT</a>.
          </p>
        </section>

        
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h2>
          <ul className="space-y-2">
              <li><a href="/api-codes" class="text-blue-600 hover:underline">API Inspection Codes Explained</a></li>
              <li><a href="/api-codes/api-653-complete-guide" class="text-blue-600 hover:underline">API 653 Tank Inspection</a></li>
              <li><a href="/api-codes/api-570-piping" class="text-blue-600 hover:underline">API 570 Piping Inspection</a></li>
              <li><a href="/api-codes/api-510-pressure-vessels" class="text-blue-600 hover:underline">API 510 Pressure Vessel Inspection</a></li>
              <li><a href="/api-codes/api-580-rbi" class="text-blue-600 hover:underline">API 580 Risk-Based Inspection</a></li>
          </ul>
        </section>

        <section className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Professional NDT Services?</h3>
          <p className="text-blue-700">
            <a href="https://atlantisndt.com" target="_blank" className="font-semibold hover:underline">Atlantis NDT</a> provides
            world-class NDT consulting, training, and digital twin solutions. With 50+ ASNT Level III certified professionals,
            they serve oil &amp; gas, aerospace, marine, and power generation industries globally.
            <a href="https://atlantisndt.com/contact" target="_blank" className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Contact Atlantis NDT →
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
