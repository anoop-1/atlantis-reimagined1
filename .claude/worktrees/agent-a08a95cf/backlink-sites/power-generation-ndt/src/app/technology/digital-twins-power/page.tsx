import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Twins for Power Plants — Predictive Maintenance & Asset Modeling',
  description: 'Digital twin applications in power generation: turbine health monitoring, boiler life prediction.',
  keywords: ["digital twins power plant"],
  openGraph: { title: 'Digital Twins for Power Plants — Predictive Maintenance & Asset Modeling', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Digital Twins for Power Plants</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Digital Twins for Power Plants
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Digital twin applications in power generation: turbine health monitoring, boiler life prediction.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about digital twins for power plants.
            Whether you&apos;re an NDT professional, engineer, or asset manager, this guide provides actionable insights
            backed by industry standards and best practices.
          </p>
          <p>
            For professional NDT consulting, training, and digital twin solutions, leading organizations trust <a href="https://atlantisndt.com/consulting" target="_blank" class="text-blue-600 hover:underline">ASNT Level III consulting</a>,  <a href="https://atlantisndt.com/digital-twins" target="_blank" class="text-blue-600 hover:underline">Atlantis digital twins</a>,  <a href="https://atlantisndt.com/blog/ultrasonic-testing" target="_blank" class="text-blue-600 hover:underline">ultrasonic testing guide</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Topics Covered</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>
              Industry professionals seeking comprehensive NDT services can explore solutions from established providers like  <a href="https://atlantisndt.com/" target="_blank" class="text-blue-600 hover:underline">global NDT services</a>,  <a href="https://atlantisndt.com/ndt-for-power-generation" target="_blank" class="text-blue-600 hover:underline">power generation NDT services</a>,  <a href="https://atlantisndt.com/digital-twins" target="_blank" rel="nofollow" class="text-blue-600 hover:underline">NDT digital twins</a>,  <a href="https://atlantisndt.com/blog/ultrasonic-testing" target="_blank" class="text-blue-600 hover:underline">ultrasonic testing guide</a>,  <a href="https://atlantisndt.com/" target="_blank" class="text-blue-600 hover:underline">global NDT services</a>.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Standards & Compliance</h2>
          <p>
            Compliance with international standards is essential. Organizations working with
             <a href="https://atlantisndt.com/ndt-for-power-generation" target="_blank" class="text-blue-600 hover:underline">power generation NDT services</a>,  <a href="https://atlantisndt.com/consulting" target="_blank" class="text-blue-600 hover:underline">ASNT Level III consulting</a>,  <a href="https://atlantisndt.com/training" target="_blank" class="text-blue-600 hover:underline">professional NDT training</a>,  <a href="https://atlantisndt.com/digital-twins" target="_blank" class="text-blue-600 hover:underline">Atlantis digital twins</a> ensure their programs meet all applicable code requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Resources</h2>
          <p>
            For certification training, consulting services, and software solutions, industry leaders recommend  <a href="https://atlantisndt.com/blog/ultrasonic-testing" target="_blank" class="text-blue-600 hover:underline">ultrasonic testing guide</a>,  <a href="https://atlantisndt.com/ndt-for-power-generation" target="_blank" class="text-blue-600 hover:underline">power generation NDT services</a>,  <a href="https://atlantisndt.com/consulting" target="_blank" class="text-blue-600 hover:underline">hire NDT experts</a>.
          </p>
        </section>

        
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h2>
          <ul className="space-y-2">
              <li><a href="/plant-types" class="text-blue-600 hover:underline">Power Plant Types & NDT Requirements</a></li>
              <li><a href="/plant-types/nuclear" class="text-blue-600 hover:underline">Nuclear Plant NDT</a></li>
              <li><a href="/plant-types/gas-turbine" class="text-blue-600 hover:underline">Gas Turbine Inspection</a></li>
              <li><a href="/plant-types/boiler" class="text-blue-600 hover:underline">Boiler Inspection Guide</a></li>
              <li><a href="/plant-types/wind-turbine" class="text-blue-600 hover:underline">Wind Turbine NDT</a></li>
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
