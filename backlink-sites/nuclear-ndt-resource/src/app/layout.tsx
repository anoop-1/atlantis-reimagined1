import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE' },
  title: 'Nuclear NDT Resource | Reactor Safety',
  description: 'Specialized NDT solutions for nuclear power plants, research reactors, and nuclear fuel cycle facilities.',
  keywords: 'nuclear NDT, reactor inspection, ASME section XI, pressure vessel testing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-yellow-50 to-white">
        <header className="border-b border-yellow-200 bg-white shadow-sm">
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-yellow-700">Nuclear NDT Resource</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-yellow-600 hover:text-yellow-800">Home</a>
              <a href="/reactor-systems" className="text-yellow-600 hover:text-yellow-800">Reactors</a>
              <a href="/regulatory" className="text-yellow-600 hover:text-yellow-800">Regulatory</a>
              <a href="/techniques" className="text-yellow-600 hover:text-yellow-800">Techniques</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-yellow-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-yellow-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-yellow-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-yellow-200">NDT Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-yellow-200">NDT Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="hover:text-yellow-200">Digital Twins</a></li>
                  <li><a href="https://atlantisndt.com/api-653-certification" rel="noopener" className="hover:text-yellow-200">API 653 Cert</a></li>
                  <li><a href="https://atlantisndt.com/ndt-consulting-houston" rel="noopener" className="hover:text-yellow-200">Houston Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-yellow-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://pressure-vessel-ndt.com" rel="noopener" className="hover:text-yellow-200">Pressure Vessels</a></li>
                  <li><a href="https://ndt-standards-library.com" rel="noopener" className="hover:text-yellow-200">Standards Library</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-yellow-200">About</h3>
                <p className="text-sm text-yellow-100">Advancing nuclear facility safety through rigorous NDT standards.</p>
              </div>
            </div>
            <div className="border-t border-yellow-700 pt-8 text-center text-sm text-yellow-200">
              <p>&copy; 2026 Nuclear NDT Resource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
