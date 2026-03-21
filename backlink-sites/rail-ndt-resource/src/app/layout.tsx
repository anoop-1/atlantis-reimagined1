import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'Railway NDT Resource | Track & Wheel Inspection',
  description: 'Comprehensive guide to NDT methods for railway infrastructure, wheel inspection, and track maintenance.',
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
          <header className="bg-gray-700 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Railway NDT Resource</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/methods" className="hover:text-gray-300">Methods</a>
              <a href="/wheel-inspection" className="hover:text-gray-300">Wheel Inspection</a>
              <a href="/track-assessment" className="hover:text-gray-300">Track Assessment</a>
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
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-gray-700 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-gray-700 hover:underline">NDT Consulting</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-gray-700 hover:underline">Professional Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-gray-700 hover:underline">Digital Solutions</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-gray-700 hover:underline">Asset Management</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-gray-700 hover:underline">Data Integration</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://weld-quality-resource.local" rel="noopener" className="text-gray-700 hover:underline">Weld Quality Standards</a></li>
                  <li><a href="https://ndt-safety-compliance.local" rel="noopener" className="text-gray-700 hover:underline">Safety Compliance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Dedicated to railway NDT inspection excellence and safety.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 Railway NDT Resource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}