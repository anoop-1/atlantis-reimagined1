import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Generation NDT — In-Depth Articles',
  description: 'Long-form practical articles on power generation NDT (fossil, gas, nuclear, renewable) for power station inspection engineers, boiler/turbine NDT specialists.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Power Generation NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on power generation NDT (fossil, gas, nuclear, renewable), written for power station inspection engineers, boiler/turbine NDT specialists.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/plant/boiler-tube-inspection-program-for-fossil-plants" className="text-xl font-semibold text-gray-900 hover:text-yellow-600">Boiler Tube Inspection Program for Fossil Plants</a>
          <p className="text-sm text-gray-500 mt-2">By Halvar Strøm, EPRI-certified &middot; 2024-09-30</p>
          <p className="text-gray-700 mt-3">Boiler Tube Inspection Program for Fossil Plants</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/plant/turbine-blade-root-inspection-eddy-current-and-paut" className="text-xl font-semibold text-gray-900 hover:text-yellow-600">Turbine Blade Root Inspection: Eddy Current and PAUT in Practice</a>
          <p className="text-sm text-gray-500 mt-2">By Halvar Strøm, EPRI-certified &middot; 2025-03-04</p>
          <p className="text-gray-700 mt-3">Turbine Blade Root Inspection: Eddy Current and PAUT in Practice</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/plant/gas-turbine-hot-section-inspection-borescope-and-fpi" className="text-xl font-semibold text-gray-900 hover:text-yellow-600">Gas Turbine Hot Section Inspection: Borescope and FPI in Practice</a>
          <p className="text-sm text-gray-500 mt-2">By Yvonne Daw, NDT Engineer &middot; 2025-08-18</p>
          <p className="text-gray-700 mt-3">Gas Turbine Hot Section Inspection: Borescope and FPI in Practice</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/plant/condenser-tube-inspection-for-power-plants" className="text-xl font-semibold text-gray-900 hover:text-yellow-600">Condenser Tube Inspection for Power Plants: A Practical Workflow</a>
          <p className="text-sm text-gray-500 mt-2">By Halvar Strøm, EPRI-certified &middot; 2025-12-21</p>
          <p className="text-gray-700 mt-3">Condenser Tube Inspection for Power Plants: A Practical Workflow</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/plant/inspection-of-wind-turbine-tower-flange-bolts" className="text-xl font-semibold text-gray-900 hover:text-yellow-600">Inspection of Wind Turbine Tower Flange Bolts: Why It Keeps Surprising People</a>
          <p className="text-sm text-gray-500 mt-2">By Yvonne Daw, NDT Engineer &middot; 2026-04-17</p>
          <p className="text-gray-700 mt-3">Inspection of Wind Turbine Tower Flange Bolts: Why It Keeps Surprising People</p>
        </li>
      </ul>
    </div>
  );
}
