import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Heat Exchanger Inspection | NDT for Tube Testing',
  description: 'Specialized NDT techniques for heat exchanger inspection, tube degradation, and fouling detection.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-rose-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Heat Exchanger NDT</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-rose-200">Home</a>
              <a href="/tube-inspection" className="hover:text-rose-200">Tube Inspection</a>
              <a href="/corrosion-detection" className="hover:text-rose-200">Corrosion</a>
              <a href="/maintenance" className="hover:text-rose-200">Maintenance</a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="bg-gray-100 text-gray-800 mt-16 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-rose-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="text-rose-600 hover:underline">Technical Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="text-rose-600 hover:underline">Specialist Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-rose-600 hover:underline">Condition Tracking</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-rose-600 hover:underline">Asset Management</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="text-rose-600 hover:underline">Data Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://api-certification-guide.local" rel="noopener" className="text-rose-600 hover:underline">API Standards</a></li>
                  <li><a href="https://ndt-safety-compliance.local" rel="noopener" className="text-rose-600 hover:underline">Safety Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Expert heat exchanger inspection and condition assessment.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 Heat Exchanger NDT. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}