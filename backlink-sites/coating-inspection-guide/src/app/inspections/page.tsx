import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coating Inspection Guide — In-Depth Articles',
  description: 'Long-form practical articles on coating and corrosion inspection for AMPP coatings inspectors, blast/paint QC managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Coating Inspection Guide — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on coating and corrosion inspection, written for AMPP coatings inspectors, blast/paint QC managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/inspections/ssp-sp10-vs-sp5-blast-profile-decisions" className="text-xl font-semibold text-gray-900 hover:text-teal-600">SSPC-SP10 vs SP5 Blast Profile Decisions on Carbon Steel</a>
          <p className="text-sm text-gray-500 mt-2">By Renée Bouchard, AMPP CIP Level 3 &middot; 2024-08-30</p>
          <p className="text-gray-700 mt-3">SSPC-SP10 vs SP5 Blast Profile Decisions on Carbon Steel</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspections/wet-film-thickness-vs-dry-film-thickness-when-each-fails" className="text-xl font-semibold text-gray-900 hover:text-teal-600">Wet Film Thickness vs Dry Film Thickness: When Each Fails You</a>
          <p className="text-sm text-gray-500 mt-2">By Renée Bouchard, AMPP CIP Level 3 &middot; 2025-02-10</p>
          <p className="text-gray-700 mt-3">Wet Film Thickness vs Dry Film Thickness: When Each Fails You</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspections/holiday-detection-low-voltage-vs-high-voltage" className="text-xl font-semibold text-gray-900 hover:text-teal-600">Holiday Detection: Low Voltage vs High Voltage Methods Compared</a>
          <p className="text-sm text-gray-500 mt-2">By Pavlov Vance, NACE CIP &middot; 2025-07-03</p>
          <p className="text-gray-700 mt-3">Holiday Detection: Low Voltage vs High Voltage Methods Compared</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspections/tsa-thermal-spray-aluminum-inspection-cui" className="text-xl font-semibold text-gray-900 hover:text-teal-600">TSA (Thermal Spray Aluminum) Inspection for CUI-Critical Service</a>
          <p className="text-sm text-gray-500 mt-2">By Renée Bouchard, AMPP CIP Level 3 &middot; 2025-12-09</p>
          <p className="text-gray-700 mt-3">TSA (Thermal Spray Aluminum) Inspection for CUI-Critical Service</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspections/coating-failure-modes-osmotic-blistering-cathodic-disbondment" className="text-xl font-semibold text-gray-900 hover:text-teal-600">Coating Failure Modes: Osmotic Blistering, Disbondment, and What Each Tells You</a>
          <p className="text-sm text-gray-500 mt-2">By Pavlov Vance, NACE CIP &middot; 2026-04-19</p>
          <p className="text-gray-700 mt-3">Coating Failure Modes: Osmotic Blistering, Disbondment, and What Each Tells You</p>
        </li>
      </ul>
    </div>
  );
}
