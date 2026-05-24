import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heat Exchanger NDT — In-Depth Articles',
  description: 'Long-form practical articles on heat exchanger NDT and tube inspection for heat exchanger inspectors, refinery turnaround engineers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Heat Exchanger NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on heat exchanger NDT and tube inspection, written for heat exchanger inspectors, refinery turnaround engineers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/tubes/iris-vs-ecit-vs-rfet-tube-inspection-decision" className="text-xl font-semibold text-gray-900 hover:text-red-600">IRIS vs ECT vs RFET: Tube Inspection Method Decision Matrix</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2024-10-04</p>
          <p className="text-gray-700 mt-3">IRIS vs ECT vs RFET: Tube Inspection Method Decision Matrix</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/cleaning-tubes-before-ndt-why-it-decides-everything" className="text-xl font-semibold text-gray-900 hover:text-red-600">Cleaning Tubes Before NDT: Why It Decides Everything</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2025-02-26</p>
          <p className="text-gray-700 mt-3">Cleaning Tubes Before NDT: Why It Decides Everything</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/air-cooler-tube-bundle-inspection-program" className="text-xl font-semibold text-gray-900 hover:text-red-600">Air Cooler Tube Bundle Inspection Program: Building One That Works</a>
          <p className="text-sm text-gray-500 mt-2">By Aiko Nakashima, Reliability Engineer &middot; 2025-07-21</p>
          <p className="text-gray-700 mt-3">Air Cooler Tube Bundle Inspection Program: Building One That Works</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/fouling-vs-corrosion-tube-signal-interpretation" className="text-xl font-semibold text-gray-900 hover:text-red-600">Fouling vs Corrosion in Tube Signals: How to Tell Them Apart</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2025-11-30</p>
          <p className="text-gray-700 mt-3">Fouling vs Corrosion in Tube Signals: How to Tell Them Apart</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/plugging-vs-retubing-heat-exchanger-economics" className="text-xl font-semibold text-gray-900 hover:text-red-600">Plugging vs Retubing: The Economics of Tube Failure Response</a>
          <p className="text-sm text-gray-500 mt-2">By Aiko Nakashima, Reliability Engineer &middot; 2026-04-14</p>
          <p className="text-gray-700 mt-3">Plugging vs Retubing: The Economics of Tube Failure Response</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/shell-and-tube-vs-plate-frame-inspection-realities" className="text-xl font-semibold text-gray-900 hover:text-red-600">Shell-and-Tube vs Plate-Frame Heat Exchanger Inspection Realities</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2025-05-24</p>
          <p className="text-gray-700 mt-3">Shell-and-Tube vs Plate-Frame Heat Exchanger Inspection Realities</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/tube-bundle-extraction-and-rebundling-decisions" className="text-xl font-semibold text-gray-900 hover:text-red-600">Tube Bundle Extraction and Rebundling: Decision Framework</a>
          <p className="text-sm text-gray-500 mt-2">By Aiko Nakashima, Reliability Engineer &middot; 2025-09-16</p>
          <p className="text-gray-700 mt-3">Tube Bundle Extraction and Rebundling: Decision Framework</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/air-cooler-header-box-inspection-for-cracks" className="text-xl font-semibold text-gray-900 hover:text-red-600">Air Cooler Header Box Inspection for Cracks and Distortion</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2025-12-07</p>
          <p className="text-gray-700 mt-3">Air Cooler Header Box Inspection for Cracks and Distortion</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/tube-to-tubesheet-weld-inspection-techniques" className="text-xl font-semibold text-gray-900 hover:text-red-600">Tube-to-Tubesheet Weld Inspection: Methods That Hold Up to Audit</a>
          <p className="text-sm text-gray-500 mt-2">By Aiko Nakashima, Reliability Engineer &middot; 2026-02-21</p>
          <p className="text-gray-700 mt-3">Tube-to-Tubesheet Weld Inspection: Methods That Hold Up to Audit</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tubes/expansion-joint-inspection-on-shell-and-tube-exchangers" className="text-xl font-semibold text-gray-900 hover:text-red-600">Expansion Joint Inspection on Shell-and-Tube Exchangers</a>
          <p className="text-sm text-gray-500 mt-2">By Petros Vasilakos, ASNT Level III &middot; 2026-05-02</p>
          <p className="text-gray-700 mt-3">Expansion Joint Inspection on Shell-and-Tube Exchangers</p>
        </li>
      </ul>
    </div>
  );
}
