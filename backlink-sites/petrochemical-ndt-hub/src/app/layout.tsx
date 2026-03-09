import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Petrochemical NDT Hub | Equipment Integrity',
  description: 'Specialized NDT solutions for petrochemical facilities, refineries, and chemical processing equipment.',
  keywords: 'petrochemical NDT, refinery inspection, chemical equipment, pressure vessels',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-orange-50 to-white">
        <header className="border-b border-orange-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-700">Petrochemical NDT Hub</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-orange-600 hover:text-orange-800">Home</a>
              <a href="/processes" className="text-orange-600 hover:text-orange-800">Processes</a>
              <a href="/equipment" className="text-orange-600 hover:text-orange-800">Equipment</a>
              <a href="/safety" className="text-orange-600 hover:text-orange-800">Safety</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-orange-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-orange-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-orange-200">NDT Consulting Services</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-orange-200">NDT Training Programs</a></li>
                  <li><a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="hover:text-orange-200">NDTConnect Platform</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="hover:text-orange-200">NDT ERP Software</a></li>
                  <li><a href="https://atlantisndt.com/ndt-consulting-dubai" rel="noopener" className="hover:text-orange-200">Dubai NDT Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://tank-inspection-resource.com" rel="noopener" className="hover:text-orange-200">Tank Inspection Resource</a></li>
                  <li><a href="https://pressure-vessel-ndt.com" rel="noopener" className="hover:text-orange-200">Pressure Vessel NDT</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-200">About</h3>
                <p className="text-sm text-orange-100">Advancing NDT capabilities in petrochemical facilities worldwide.</p>
              </div>
            </div>
            <div className="border-t border-orange-700 pt-8 text-center text-sm text-orange-200">
              <p>&copy; 2026 Petrochemical NDT Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
