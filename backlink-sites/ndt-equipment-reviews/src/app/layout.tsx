import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE' },
  title: 'NDT Equipment Reviews | Technology Comparison',
  description: 'Independent reviews and comparisons of NDT equipment, instruments, and inspection systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-teal-600 text-white">
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">NDT Equipment Reviews</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-teal-200">Home</a>
              <a href="/ultrasonic" className="hover:text-teal-200">Ultrasonic</a>
              <a href="/eddy-current" className="hover:text-teal-200">Eddy Current</a>
              <a href="/thermography" className="hover:text-teal-200">Thermography</a>
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
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-teal-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="text-teal-600 hover:underline">Equipment Selection</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="text-teal-600 hover:underline">Instrument Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-teal-600 hover:underline">Data Systems</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-teal-600 hover:underline">Management Platforms</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="text-teal-600 hover:underline">Integration Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://weld-quality-resource.local" rel="noopener" className="text-teal-600 hover:underline">Weld Testing</a></li>
                  <li><a href="https://ndt-automation-future.local" rel="noopener" className="text-teal-600 hover:underline">Automation Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Independent NDT equipment analysis and recommendations.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 NDT Equipment Reviews. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}