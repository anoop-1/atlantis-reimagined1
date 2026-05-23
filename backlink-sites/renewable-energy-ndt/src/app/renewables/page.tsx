import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renewable Energy NDT — In-Depth Articles',
  description: 'Long-form practical articles on renewable energy NDT for wind, solar, hydrogen, and geothermal NDT engineers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Renewable Energy NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on renewable energy NDT, written for wind, solar, hydrogen, and geothermal NDT engineers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/renewables/wind-turbine-foundation-grout-inspection-offshore" className="text-xl font-semibold text-gray-900 hover:text-green-600">Wind Turbine Foundation Grout Inspection (Offshore Monopiles)</a>
          <p className="text-sm text-gray-500 mt-2">By Sven Mortensen, IIMS &middot; 2024-10-12</p>
          <p className="text-gray-700 mt-3">Wind Turbine Foundation Grout Inspection (Offshore Monopiles)</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/renewables/green-hydrogen-pipeline-inspection-considerations" className="text-xl font-semibold text-gray-900 hover:text-green-600">Green Hydrogen Pipeline Inspection: New Considerations</a>
          <p className="text-sm text-gray-500 mt-2">By Sven Mortensen, IIMS &middot; 2025-03-12</p>
          <p className="text-gray-700 mt-3">Green Hydrogen Pipeline Inspection: New Considerations</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/renewables/csp-receiver-tube-inspection-concentrated-solar" className="text-xl font-semibold text-gray-900 hover:text-green-600">CSP Receiver Tube Inspection for Concentrated Solar Plants</a>
          <p className="text-sm text-gray-500 mt-2">By Lior Adani, Solar Eng &middot; 2025-08-23</p>
          <p className="text-gray-700 mt-3">CSP Receiver Tube Inspection for Concentrated Solar Plants</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/renewables/geothermal-well-casing-corrosion-and-inspection" className="text-xl font-semibold text-gray-900 hover:text-green-600">Geothermal Well Casing Corrosion and Inspection Strategy</a>
          <p className="text-sm text-gray-500 mt-2">By Lior Adani, Geothermal Eng &middot; 2025-12-17</p>
          <p className="text-gray-700 mt-3">Geothermal Well Casing Corrosion and Inspection Strategy</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/renewables/wind-blade-leading-edge-erosion-detection-and-repair" className="text-xl font-semibold text-gray-900 hover:text-green-600">Wind Blade Leading Edge Erosion: Detection and Repair</a>
          <p className="text-sm text-gray-500 mt-2">By Sven Mortensen, IIMS &middot; 2026-04-21</p>
          <p className="text-gray-700 mt-3">Wind Blade Leading Edge Erosion: Detection and Repair</p>
        </li>
      </ul>
    </div>
  );
}
