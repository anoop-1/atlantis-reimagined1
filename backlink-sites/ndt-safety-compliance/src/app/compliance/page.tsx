import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Safety & Compliance — In-Depth Articles',
  description: 'Long-form practical articles on NDT safety and regulatory compliance for NDT safety officers, RSOs, EHS managers, regulatory leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Safety & Compliance — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT safety and regulatory compliance, written for NDT safety officers, RSOs, EHS managers, regulatory leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/compliance/industrial-radiography-safety-program-essentials" className="text-xl font-semibold text-gray-900 hover:text-red-600">Industrial Radiography Safety Program Essentials</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Imogen West, RSO &middot; 2024-09-15</p>
          <p className="text-gray-700 mt-3">Industrial Radiography Safety Program Essentials</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/compliance/transport-of-ndt-sources-iata-imdg" className="text-xl font-semibold text-gray-900 hover:text-red-600">Transport of NDT Radioactive Sources: IATA and IMDG Practical Notes</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Imogen West, RSO &middot; 2025-02-08</p>
          <p className="text-gray-700 mt-3">Transport of NDT Radioactive Sources: IATA and IMDG Practical Notes</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/compliance/incident-investigation-after-ndt-source-loss" className="text-xl font-semibold text-gray-900 hover:text-red-600">Incident Investigation After an NDT Source Loss: A Field Manager Guide</a>
          <p className="text-sm text-gray-500 mt-2">By Aleksey Sevcik, ASNT Level III &middot; 2025-07-18</p>
          <p className="text-gray-700 mt-3">Incident Investigation After an NDT Source Loss: A Field Manager Guide</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/compliance/lockout-tagout-for-ut-and-mt-on-rotating-equipment" className="text-xl font-semibold text-gray-900 hover:text-red-600">Lockout-Tagout for UT and MT on Rotating Equipment</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Imogen West, RSO &middot; 2025-12-01</p>
          <p className="text-gray-700 mt-3">Lockout-Tagout for UT and MT on Rotating Equipment</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/compliance/inspector-fatigue-and-pod-the-data-no-one-shares" className="text-xl font-semibold text-gray-900 hover:text-red-600">Inspector Fatigue and Probability of Detection: The Data No One Shares</a>
          <p className="text-sm text-gray-500 mt-2">By Aleksey Sevcik, ASNT Level III &middot; 2026-04-25</p>
          <p className="text-gray-700 mt-3">Inspector Fatigue and Probability of Detection: The Data No One Shares</p>
        </li>
      </ul>
    </div>
  );
}
