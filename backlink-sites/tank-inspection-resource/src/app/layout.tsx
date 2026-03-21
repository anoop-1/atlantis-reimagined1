import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tank Inspection Resource | Storage Tank NDT',
  description: 'Comprehensive NDT solutions for above-ground and underground storage tanks.',
  verification: {
    google: 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-amber-50 to-white">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="border-b border-amber-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-700">Tank Inspection Resource</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-amber-600 hover:text-amber-800">Home</a>
              <a href="/above-ground" className="text-amber-600 hover:text-amber-800">Above-Ground</a>
              <a href="/underground" className="text-amber-600 hover:text-amber-800">Underground</a>
              <a href="/maintenance" className="text-amber-600 hover:text-amber-800">Maintenance</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-amber-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-amber-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">API 653</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">ERP Software</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-amber-200">Digital Twins</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-amber-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://petrochemical-ndt-hub.com" rel="noopener" className="hover:text-amber-200">Petrochemical</a></li>
                  <li><a href="https://pressure-vessel-ndt.com" rel="noopener" className="hover:text-amber-200">Pressure Vessels</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-amber-200">About</h3>
                <p className="text-sm text-amber-100">Storage tank integrity excellence.</p>
              </div>
            </div>
            <div className="border-t border-amber-700 pt-8 text-center text-sm text-amber-200">
              <p>&copy; 2026 Tank Inspection Resource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
