import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuclear NDT Resource — In-Depth Articles',
  description: 'Long-form practical articles on nuclear NDT and ASME Section XI for nuclear ISI engineers, ASME XI inspectors, regulatory specialists.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Nuclear NDT Resource — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on nuclear NDT and ASME Section XI, written for nuclear ISI engineers, ASME XI inspectors, regulatory specialists.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/techniques/asme-section-xi-isi-program-essentials" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">ASME Section XI ISI Program Essentials for Class 1 Components</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2024-07-17</p>
          <p className="text-gray-700 mt-3">ASME Section XI ISI Program Essentials for Class 1 Components</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/reactor-vessel-head-penetration-inspection-pdi-qualification" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Reactor Vessel Head Penetration Inspection: PDI Qualification Explained</a>
          <p className="text-sm text-gray-500 mt-2">By Toshio Hamada, ASNT NDT Level III &middot; 2025-02-12</p>
          <p className="text-gray-700 mt-3">Reactor Vessel Head Penetration Inspection: PDI Qualification Explained</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/piping-weld-inspection-class-1-vs-class-2-rules" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Piping Weld Inspection: ASME XI Class 1 vs Class 2 Rules</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2025-08-04</p>
          <p className="text-gray-700 mt-3">Piping Weld Inspection: ASME XI Class 1 vs Class 2 Rules</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/small-modular-reactor-smr-ndt-emerging-considerations" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Small Modular Reactor (SMR) NDT: Emerging Considerations</a>
          <p className="text-sm text-gray-500 mt-2">By Toshio Hamada, ASNT NDT Level III &middot; 2026-02-26</p>
          <p className="text-gray-700 mt-3">Small Modular Reactor (SMR) NDT: Emerging Considerations</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/phased-array-qualification-for-nuclear-applications" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Phased Array Qualification for Nuclear Applications: Building a Demonstration Block</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2026-04-15</p>
          <p className="text-gray-700 mt-3">Phased Array Qualification for Nuclear Applications: Building a Demonstration Block</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/asme-section-xi-iwe-iwl-containment-inspection" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">ASME Section XI IWE/IWL Containment Inspection: A Field Walkthrough</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2025-05-13</p>
          <p className="text-gray-700 mt-3">ASME Section XI IWE/IWL Containment Inspection: A Field Walkthrough</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/steam-generator-tube-inspection-eddy-current-strategies" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Steam Generator Tube Inspection: Eddy Current Strategies for PWR Plants</a>
          <p className="text-sm text-gray-500 mt-2">By Toshio Hamada, ASNT NDT Level III &middot; 2025-09-22</p>
          <p className="text-gray-700 mt-3">Steam Generator Tube Inspection: Eddy Current Strategies for PWR Plants</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/reactor-coolant-pump-inspection-asme-xi-rules" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Reactor Coolant Pump Inspection: Where ASME XI Rules End and Vendor Rules Begin</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2025-12-12</p>
          <p className="text-gray-700 mt-3">Reactor Coolant Pump Inspection: Where ASME XI Rules End and Vendor Rules Begin</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/spent-fuel-pool-liner-leak-detection-and-inspection" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Spent Fuel Pool Liner Leak Detection and Inspection</a>
          <p className="text-sm text-gray-500 mt-2">By Toshio Hamada, ASNT NDT Level III &middot; 2026-03-17</p>
          <p className="text-gray-700 mt-3">Spent Fuel Pool Liner Leak Detection and Inspection</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/techniques/pdi-paut-procedure-qualification-deep-dive-2026" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">PDI PAUT Procedure Qualification: A Deep Dive for 2026 Programs</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Eve Lindberg, ASNT NDT Level III &middot; 2026-05-07</p>
          <p className="text-gray-700 mt-3">PDI PAUT Procedure Qualification: A Deep Dive for 2026 Programs</p>
        </li>
      </ul>
    </div>
  );
}
