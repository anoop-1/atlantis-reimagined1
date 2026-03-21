import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'Pressure Vessel NDT | ASME Section VIII',
  description: 'Comprehensive NDT solutions for pressure vessels, boilers, and heat exchangers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-red-50 to-white">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="border-b border-red-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-700">Pressure Vessel NDT</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-red-600 hover:text-red-800">Home</a>
              <a href="/design" className="text-red-600 hover:text-red-800">Design</a>
              <a href="/fabrication" className="text-red-600 hover:text-red-800">Fabrication</a>
              <a href="/operation" className="text-red-600 hover:text-red-800">Operation</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-red-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Radiography</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Ultrasonic</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-red-200">Digital Twins</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://petrochemical-ndt-hub.com" rel="noopener" className="hover:text-red-200">Petrochemical</a></li>
                  <li><a href="https://ndt-standards-library.com" rel="noopener" className="hover:text-red-200">Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-200">About</h3>
                <p className="text-sm text-red-100">Pressure vessel integrity excellence.</p>
              </div>
            </div>
            <div className="border-t border-red-700 pt-8 text-center text-sm text-red-200">
              <p>&copy; 2026 Pressure Vessel NDT. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
