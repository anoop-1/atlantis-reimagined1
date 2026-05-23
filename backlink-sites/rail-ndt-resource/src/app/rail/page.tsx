import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rail NDT Resource — In-Depth Articles',
  description: 'Long-form practical articles on rail NDT (track and rolling stock) for rail track engineers, rolling-stock NDT, rail mechanical leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Rail NDT Resource — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on rail NDT (track and rolling stock), written for rail track engineers, rolling-stock NDT, rail mechanical leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/rail/rail-flaw-detection-vehicle-types-and-tradeoffs" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Rail Flaw Detection Vehicles: Types, Speeds, and Trade-Offs</a>
          <p className="text-sm text-gray-500 mt-2">By Kelvin Owen, AREMA &middot; 2024-09-20</p>
          <p className="text-gray-700 mt-3">Rail Flaw Detection Vehicles: Types, Speeds, and Trade-Offs</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/rail/rolling-stock-wheel-set-ndt-paut-and-mt" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Rolling Stock Wheel Set NDT: PAUT and MT in Practice</a>
          <p className="text-sm text-gray-500 mt-2">By Kelvin Owen, AREMA &middot; 2025-02-21</p>
          <p className="text-gray-700 mt-3">Rolling Stock Wheel Set NDT: PAUT and MT in Practice</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/rail/thermite-weld-inspection-on-continuous-welded-rail" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Thermite Weld Inspection on Continuous Welded Rail</a>
          <p className="text-sm text-gray-500 mt-2">By Saskia Vandenburg, IWE &middot; 2025-07-25</p>
          <p className="text-gray-700 mt-3">Thermite Weld Inspection on Continuous Welded Rail</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/rail/rail-corrosion-fatigue-detection-rcf-cracking" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Rail Rolling Contact Fatigue (RCF): Detection and Mitigation</a>
          <p className="text-sm text-gray-500 mt-2">By Kelvin Owen, AREMA &middot; 2025-12-04</p>
          <p className="text-gray-700 mt-3">Rail Rolling Contact Fatigue (RCF): Detection and Mitigation</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/rail/rail-bridge-truss-inspection-aar-mra" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Rail Bridge Truss Inspection: AAR and Operator Practice</a>
          <p className="text-sm text-gray-500 mt-2">By Saskia Vandenburg, IWE &middot; 2026-04-18</p>
          <p className="text-gray-700 mt-3">Rail Bridge Truss Inspection: AAR and Operator Practice</p>
        </li>
      </ul>
    </div>
  );
}
