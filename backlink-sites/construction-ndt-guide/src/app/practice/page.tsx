import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction NDT Guide — In-Depth Articles',
  description: 'Long-form practical articles on construction & infrastructure NDT for structural inspectors, concrete QC engineers, infrastructure QA.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Construction NDT Guide — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on construction & infrastructure NDT, written for structural inspectors, concrete QC engineers, infrastructure QA.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/practice/gpr-vs-rebar-locator-when-which" className="text-xl font-semibold text-gray-900 hover:text-lime-600">GPR vs Rebar Locator: When Each One Earns the Hourly Rate</a>
          <p className="text-sm text-gray-500 mt-2">By Lars Hagen, ACI &middot; 2024-08-22</p>
          <p className="text-gray-700 mt-3">GPR vs Rebar Locator: When Each One Earns the Hourly Rate</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practice/concrete-strength-with-rebound-hammer-vs-ut-velocity" className="text-xl font-semibold text-gray-900 hover:text-lime-600">Concrete Strength: Rebound Hammer vs Ultrasonic Pulse Velocity</a>
          <p className="text-sm text-gray-500 mt-2">By Lars Hagen, ACI &middot; 2025-01-30</p>
          <p className="text-gray-700 mt-3">Concrete Strength: Rebound Hammer vs Ultrasonic Pulse Velocity</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practice/bridge-deck-deterioration-mapping-methods" className="text-xl font-semibold text-gray-900 hover:text-lime-600">Bridge Deck Deterioration Mapping: Methods That Actually Work</a>
          <p className="text-sm text-gray-500 mt-2">By Salma Vega, PE Civil &middot; 2025-07-08</p>
          <p className="text-gray-700 mt-3">Bridge Deck Deterioration Mapping: Methods That Actually Work</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practice/post-tensioned-cable-inspection-impact-echo-and-ut" className="text-xl font-semibold text-gray-900 hover:text-lime-600">Post-Tensioned Cable Inspection: Impact-Echo and UT Strategies</a>
          <p className="text-sm text-gray-500 mt-2">By Lars Hagen, ACI &middot; 2025-11-12</p>
          <p className="text-gray-700 mt-3">Post-Tensioned Cable Inspection: Impact-Echo and UT Strategies</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practice/steel-structure-weld-inspection-aws-d1-5" className="text-xl font-semibold text-gray-900 hover:text-lime-600">Steel Structure Weld Inspection Under AWS D1.5 (Bridge Welding Code)</a>
          <p className="text-sm text-gray-500 mt-2">By Salma Vega, PE Civil &middot; 2026-04-02</p>
          <p className="text-gray-700 mt-3">Steel Structure Weld Inspection Under AWS D1.5 (Bridge Welding Code)</p>
        </li>
      </ul>
    </div>
  );
}
