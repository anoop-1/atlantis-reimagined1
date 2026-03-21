import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'Coating Inspection Guide | NDT Methods & Standards',
  description: 'Comprehensive guide to coating inspection techniques, standards, and best practices for protective systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="bg-emerald-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Coating Inspection Guide</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-emerald-200">Home</a>
              <a href="/methods" className="hover:text-emerald-200">Methods</a>
              <a href="/standards" className="hover:text-emerald-200">Standards</a>
              <a href="/defects" className="hover:text-emerald-200">Defect Detection</a>
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
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">NDT Consulting Services</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">Certification Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">Digital Twin Solutions</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-emerald-600 hover:underline">Inspection Management</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">Data Integration Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://ndt-automation-future.local" rel="noopener" className="text-emerald-600 hover:underline">Automation Technologies</a></li>
                  <li><a href="https://composite-testing-hub.local" rel="noopener" className="text-emerald-600 hover:underline">Composite Materials Testing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Professional resources for coating inspection and protective system evaluation.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 Coating Inspection Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}