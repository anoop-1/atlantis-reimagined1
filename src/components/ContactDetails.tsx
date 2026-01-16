import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactDetails() {

   const serviceLinks = [
      { name: "NDT Consulting", href: "/consulting" },
      { name: "NDT Training", href: "/training" },
      { name: "Digital Twins", href: "/digital-twins" },
      { name: "NDT Connect", href: "/ndt-connect" },
      { name: "ERP Solutions", href: "/erp" },
   ];

   const resourceLinks = [
      { name: "Resources & Downloads", href: "/resources" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Press & Media", href: "/press" },
   ];

   const methodLinks = [
      { name: "Ultrasonic Testing (UT)", href: "/ultrasonic-testing" },
      { name: "Radiographic Testing (RT)", href: "/radiographic-testing" },
      { name: "Magnetic Particle (MT)", href: "/magnetic-particle-testing" },
      { name: "Penetrant Testing (PT)", href: "/penetrant-testing" },
      { name: "Eddy Current (ET)", href: "/eddy-current-testing" },
      { name: "Visual Testing (VT)", href: "/visual-testing" },
   ];

   const certificationLinks = [
      { name: "API 510 Certification", href: "/api-510-certification" },
      { name: "API 570 Certification", href: "/api-570-certification" },
      { name: "API 653 Certification", href: "/api-653-certification" },
      { name: "ASNT Certification", href: "/asnt-certification" },
   ];

   const socialLinks = [
      { name: "LinkedIn", href: "https://linkedin.com/company/atlantis-ndt", external: true },
      { name: "Google Maps", href: "https://www.google.com/maps/place/Atlantis+NDT", external: true },
      { name: "WhatsApp", href: "https://wa.me/+12818408969", external: true },
   ];

   const offices = [
      { name: "Houston, USA", address: "700 Smith St #61070, SMB#52788" },
      { name: "Hyderabad, India", address: "5-68/48-132, Hyderabad-500078" },
   ];

   return (
      <footer className="bg-gray-900 text-white py-12 px-6">
         <div className="max-w-7xl mx-auto">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
               {/* Services */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Services</h3>
                  <ul className="space-y-2">
                     {serviceLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* NDT Methods */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">NDT Methods</h3>
                  <ul className="space-y-2">
                     {methodLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Certifications */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Certifications</h3>
                  <ul className="space-y-2">
                     {certificationLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Resources */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Resources</h3>
                  <ul className="space-y-2">
                     {resourceLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Contact</h3>
                  <ul className="space-y-3 text-sm">
                     <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">info@atlantisndt.com</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">+1 (281) 840-8969</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">+91 8688325653</span>
                     </li>
                  </ul>
               </div>

               {/* Connect */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Connect</h3>
                  <ul className="space-y-2">
                     {socialLinks.map((link) => (
                        <li key={link.name}>
                           <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
                  {/* Offices */}
                  <div className="mt-6">
                     <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Offices</h4>
                     {offices.map((office) => (
                        <div key={office.name} className="flex items-start gap-2 mb-2">
                           <MapPin className="w-3 h-3 text-accent flex-shrink-0 mt-1" />
                           <div className="text-xs text-gray-400">
                              <strong className="text-gray-300">{office.name}</strong>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Atlantis NDT. All rights reserved.
               </div>
               <div className="flex gap-6 text-sm">
                  <Link to="/about" className="text-gray-400 hover:text-accent transition">About</Link>
                  <Link to="/contact" className="text-gray-400 hover:text-accent transition">Contact</Link>
                  <Link to="/faq" className="text-gray-400 hover:text-accent transition">FAQ</Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
