import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corrosion Management NDT — In-Depth Articles',
  description: 'Long-form practical articles on corrosion management & monitoring for corrosion engineers, AMPP-certified inspectors, materials managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Corrosion Management NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on corrosion management & monitoring, written for corrosion engineers, AMPP-certified inspectors, materials managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/management/cui-inspection-strategy-when-to-strip-insulation" className="text-xl font-semibold text-gray-900 hover:text-rose-600">CUI Inspection Strategy: When to Strip Insulation vs Use Pulsed Eddy Current</a>
          <p className="text-sm text-gray-500 mt-2">By Hannah O\'Connell, NACE/AMPP CIP III &middot; 2024-08-28</p>
          <p className="text-gray-700 mt-3">CUI Inspection Strategy: When to Strip Insulation vs Use Pulsed Eddy Current</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/management/ph-monitoring-vs-corrosion-coupons-which-data-trust" className="text-xl font-semibold text-gray-900 hover:text-rose-600">pH Monitoring vs Corrosion Coupons: Which Data Should You Trust?</a>
          <p className="text-sm text-gray-500 mt-2">By Felipe Moraes, AMPP-certified &middot; 2025-03-04</p>
          <p className="text-gray-700 mt-3">pH Monitoring vs Corrosion Coupons: Which Data Should You Trust?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/management/msl-stress-corrosion-cracking-austenitic-stainless" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Stress Corrosion Cracking in Austenitic Stainless: Detection and Mitigation</a>
          <p className="text-sm text-gray-500 mt-2">By Hannah O\'Connell, NACE/AMPP CIP III &middot; 2025-08-19</p>
          <p className="text-gray-700 mt-3">Stress Corrosion Cracking in Austenitic Stainless: Detection and Mitigation</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/management/inhibitor-injection-program-effectiveness-monitoring" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Inhibitor Injection Program Effectiveness: How to Actually Monitor It</a>
          <p className="text-sm text-gray-500 mt-2">By Felipe Moraes, AMPP-certified &middot; 2025-12-22</p>
          <p className="text-gray-700 mt-3">Inhibitor Injection Program Effectiveness: How to Actually Monitor It</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/management/building-corrosion-management-program-iso-55000" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Building a Corrosion Management Program Under ISO 55000</a>
          <p className="text-sm text-gray-500 mt-2">By Hannah O\'Connell, NACE/AMPP CIP III &middot; 2026-04-30</p>
          <p className="text-gray-700 mt-3">Building a Corrosion Management Program Under ISO 55000</p>
        </li>
      </ul>
    </div>
  );
}
