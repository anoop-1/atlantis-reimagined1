import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced NDT Techniques — In-Depth Articles',
  description: 'Long-form practical articles on advanced NDT techniques for NDT Level III engineers, advanced technique specialists.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Advanced NDT Techniques — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on advanced NDT techniques, written for NDT Level III engineers, advanced technique specialists.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/deepdives/paut-vs-tofd-when-to-combine" className="text-xl font-semibold text-gray-900 hover:text-violet-600">PAUT vs TOFD: When to Combine vs When to Pick One</a>
          <p className="text-sm text-gray-500 mt-2">By Diego Costa, ASNT NDT Level III &middot; 2024-10-14</p>
          <p className="text-gray-700 mt-3">PAUT vs TOFD: When to Combine vs When to Pick One</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/deepdives/guided-wave-screening-program-design" className="text-xl font-semibold text-gray-900 hover:text-violet-600">Guided Wave Screening Program Design for Long Pipelines</a>
          <p className="text-sm text-gray-500 mt-2">By Astrid Vinge, MSc NDT &middot; 2025-02-22</p>
          <p className="text-gray-700 mt-3">Guided Wave Screening Program Design for Long Pipelines</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/deepdives/eddy-current-array-for-heat-exchanger-tubes" className="text-xl font-semibold text-gray-900 hover:text-violet-600">Eddy Current Array for Heat Exchanger Tubes: A Field Workflow</a>
          <p className="text-sm text-gray-500 mt-2">By Diego Costa, ASNT NDT Level III &middot; 2025-08-09</p>
          <p className="text-gray-700 mt-3">Eddy Current Array for Heat Exchanger Tubes: A Field Workflow</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/deepdives/digital-radiography-cr-vs-dr-which-system" className="text-xl font-semibold text-gray-900 hover:text-violet-600">Digital Radiography: CR vs DR — Which System Fits Which Site?</a>
          <p className="text-sm text-gray-500 mt-2">By Astrid Vinge, MSc NDT &middot; 2025-11-26</p>
          <p className="text-gray-700 mt-3">Digital Radiography: CR vs DR — Which System Fits Which Site?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/deepdives/automated-ut-scanner-deployment-2026" className="text-xl font-semibold text-gray-900 hover:text-violet-600">Automated UT Scanner Deployment: A 2026 Playbook</a>
          <p className="text-sm text-gray-500 mt-2">By Diego Costa, ASNT NDT Level III &middot; 2026-04-08</p>
          <p className="text-gray-700 mt-3">Automated UT Scanner Deployment: A 2026 Playbook</p>
        </li>
      </ul>
    </div>
  );
}
