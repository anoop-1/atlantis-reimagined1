import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Renewable Energy NDT | Wind, Solar, Geothermal',
  description: 'NDT solutions for wind turbines, solar equipment, geothermal systems, and renewable energy infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-50 to-white">
        <header className="border-b border-green-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700">Renewable Energy NDT</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-green-600 hover:text-green-800">Home</a>
              <a href="/wind" className="text-green-600 hover:text-green-800">Wind Energy</a>
              <a href="/solar" className="text-green-600 hover:text-green-800">Solar</a>
              <a href="/geothermal" className="text-green-600 hover:text-green-800">Geothermal</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-green-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-green-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-green-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-green-200">Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="hover:text-green-200">Digital Twins</a></li>
                  <li><a href="https://atlantisndt.com/ultrasonic-testing" rel="noopener" className="hover:text-green-200">Ultrasonic</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="hover:text-green-200">NDTConnect</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://advanced-ndt-techniques.com" rel="noopener" className="hover:text-green-200">Advanced Techniques</a></li>
                  <li><a href="https://ndt-standards-library.com" rel="noopener" className="hover:text-green-200">Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-200">About</h3>
                <p className="text-sm text-green-100">Renewable energy infrastructure integrity.</p>
              </div>
            </div>
            <div className="border-t border-green-700 pt-8 text-center text-sm text-green-200">
              <p>&copy; 2026 Renewable Energy NDT. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
