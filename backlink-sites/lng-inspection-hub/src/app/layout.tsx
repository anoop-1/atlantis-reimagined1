import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'LNG Inspection Hub | Liquefied Natural Gas NDT',
  description: 'Specialized NDT solutions for LNG terminals, equipment, and cryogenic infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-sky-50 to-white">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="border-b border-sky-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-sky-700">LNG Inspection Hub</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-sky-600 hover:text-sky-800">Home</a>
              <a href="/terminals" className="text-sky-600 hover:text-sky-800">Terminals</a>
              <a href="/equipment" className="text-sky-600 hover:text-sky-800">Equipment</a>
              <a href="/safety" className="text-sky-600 hover:text-sky-800">Safety</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-sky-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-sky-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-sky-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-sky-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-sky-200">Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-sky-200">Digital Twins</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="hover:text-sky-200">NDTConnect</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-sky-200">Dubai Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-sky-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://pipeline-integrity-guide.com" rel="noopener" className="hover:text-sky-200">Pipelines</a></li>
                  <li><a href="https://pressure-vessel-ndt.com" rel="noopener" className="hover:text-sky-200">Pressure Vessels</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-sky-200">About</h3>
                <p className="text-sm text-sky-100">LNG facility safety and reliability.</p>
              </div>
            </div>
            <div className="border-t border-sky-700 pt-8 text-center text-sm text-sky-200">
              <p>&copy; 2026 LNG Inspection Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
