import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails() {

   const socialLinks = [
      { name: "LinkedIn", href: "https://linkedin.com/company/atlantis-ndt" },
      {
         name: "Google Maps",
         href: "https://www.google.com/maps/place/Atlantis+NDT",
      },
      { name: "WhatsApp", href: "https://wa.me/+12818408969" },
      { name: "Blog", href: "/blog" },
   ];

   const offices = [
      {
         name: "Houston, USA",
         address:
            "Atlantis Engineering Consultants LLC, 700 Smith St #61070, SMB#52788",
      },
      {
         name: "Hyderabad, India",
         address:
            "Atlantis Inspection Services Pvt. Ltd., 5-68/48-132, Hyderabad-500078",
      },
   ];

   return (
      <footer className="bg-gray-900 text-white py-8 px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emails */}
            <div>
               <h3 className="text-lg font-semibold mb-3">Emails</h3>
               <ul className="space-y-2 break-words">
                  <li className="flex items-center gap-2 text-sm md:text-base">
                     <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                     <span>info@atlantisndt.com</span>
                  </li>
               </ul>
            </div>

            {/* Phones */}
            <div>
               <h3 className="text-lg font-semibold mb-3">Phone</h3>
               <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm md:text-base">
                     <Phone className="w-5 h-5 text-accent flex-shrink-0" /> +1
                     (281) 840-8969
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                     <Phone className="w-5 h-5 text-accent flex-shrink-0" /> +91
                     8688325653
                  </li>
               </ul>
            </div>

            {/* Social Links */}
            <div>
               <h3 className="text-lg font-semibold mb-3">Connect</h3>
               <ul className="space-y-2">
                  {socialLinks.map((social, idx) => (
                     <li key={idx}>
                        <a
                           href={social.href}
                           target="_blank"
                           className="text-gray-300 hover:text-accent hover:underline transition"
                        >
                           {social.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
               <h3 className="text-lg font-semibold mb-3">Our Offices</h3>
               <ul className="space-y-4">
                  {offices.map((office, idx) => (
                     <li
                        key={idx}
                        className="flex flex-col gap-1 text-gray-300"
                     >
                        <div className="flex items-center gap-2">
                           <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                           <strong>{office.name}</strong>
                        </div>
                        <span className="ml-7">{office.address}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {/* Footer Bottom */}
         <div className="mt-8 text-center text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Atlantis NDT. All rights reserved.
         </div>
      </footer>
   );
}
