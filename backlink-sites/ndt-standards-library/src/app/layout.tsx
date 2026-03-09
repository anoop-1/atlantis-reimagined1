import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NDT Standards Library | ASME, API, ISO',
  description: 'Comprehensive reference library for NDT standards, codes, and regulatory requirements.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-white">
        <header className="border-b border-slate-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-700">NDT Standards Library</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-slate-600 hover:text-slate-800">Home</a>
              <a href="/asme" className="text-slate-600 hover:text-slate-800">ASME</a>
              <a href="/api" className="text-slate-600 hover:text-slate-800">API</a>
              <a href="/international" className="text-slate-600 hover:text-slate-800">International</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-slate-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-slate-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-slate-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-slate-200">NDT Training</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-slate-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com/radiographic-testing" rel="noopener" className="hover:text-slate-200">Radiography</a></li>
                  <li><a href="https://atlantisndt.com/api-653-certification" rel="noopener" className="hover:text-slate-200">API 653</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="hover:text-slate-200">ERP Software</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-slate-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://tank-inspection-resource.com" rel="noopener" className="hover:text-slate-200">Tank Inspection</a></li>
                  <li><a href="https://pressure-vessel-ndt.com" rel="noopener" className="hover:text-slate-200">Pressure Vessels</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-slate-200">About</h3>
                <p className="text-sm text-slate-300">Standards and regulatory resource hub.</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-300">
              <p>&copy; 2026 NDT Standards Library. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
