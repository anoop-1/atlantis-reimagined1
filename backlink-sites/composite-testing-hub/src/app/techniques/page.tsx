import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composite Testing Hub — In-Depth Articles',
  description: 'Long-form practical articles on composite NDT and testing for aerospace composite QA, wind blade inspectors, motorsports QA.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Composite Testing Hub — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on composite NDT and testing, written for aerospace composite QA, wind blade inspectors, motorsports QA.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/techniques/cfrp-phased-array-vs-thermography-which-finds-disbonds" className="text-xl font-semibold text-gray-900 hover:text-fuchsia-600">CFRP Phased Array vs Thermography: Which Finds Disbonds Faster?</a>
          <p className="text-sm text-gray-500 mt-2">By Mira Ostlund, NDT Engineer &middot; 2024-09-18</p>
          <p className="text-gray-700 mt-3">CFRP Phased Array vs Thermography: Which Finds Disbonds Faster?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/wind-blade-inspection-from-rope-access-to-drones" className="text-xl font-semibold text-gray-900 hover:text-fuchsia-600">Wind Blade Inspection: From Rope Access to Drones</a>
          <p className="text-sm text-gray-500 mt-2">By Jonas Aaltonen, GWO trained &middot; 2025-03-25</p>
          <p className="text-gray-700 mt-3">Wind Blade Inspection: From Rope Access to Drones</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/sandwich-panel-honeycomb-core-defects-and-detection" className="text-xl font-semibold text-gray-900 hover:text-fuchsia-600">Sandwich Panel Honeycomb Core Defects and How to Detect Them</a>
          <p className="text-sm text-gray-500 mt-2">By Mira Ostlund, NDT Engineer &middot; 2025-08-20</p>
          <p className="text-gray-700 mt-3">Sandwich Panel Honeycomb Core Defects and How to Detect Them</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/shearography-on-composite-pressure-vessels" className="text-xl font-semibold text-gray-900 hover:text-fuchsia-600">Shearography on Composite Pressure Vessels: When It Earns Its Keep</a>
          <p className="text-sm text-gray-500 mt-2">By Jonas Aaltonen, GWO trained &middot; 2025-12-15</p>
          <p className="text-gray-700 mt-3">Shearography on Composite Pressure Vessels: When It Earns Its Keep</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/pulse-thermography-vs-lock-in-thermography-quick-decision-guide" className="text-xl font-semibold text-gray-900 hover:text-fuchsia-600">Pulse Thermography vs Lock-In Thermography: A Quick Decision Guide</a>
          <p className="text-sm text-gray-500 mt-2">By Mira Ostlund, NDT Engineer &middot; 2026-04-26</p>
          <p className="text-gray-700 mt-3">Pulse Thermography vs Lock-In Thermography: A Quick Decision Guide</p>
        </li>
      </ul>
    </div>
  );
}
