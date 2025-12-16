import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
   { name: "Home", path: "/" },
   { name: "About", path: "/about" },

   {
      name: "Services",
      dropdown: [
         { name: "Training", path: "/training" },
         { name: "Consulting Services", path: "/consulting" },
      ],
   }, {
      name: "Products",
      dropdown: [
         { name: "Digital Twins", path: "/digital-twins" },
         { name: "ERP", path: "/erp" },
         { name: "NDT Connect", path: "/ndt-connect" },
      ],
   },

   { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const location = useLocation();

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const navVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <motion.nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
            }`}
         initial="hidden"
         animate="visible"
         variants={navVariants}
      >
         <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
               {/* Logo */}
               <motion.div variants={itemVariants}>
                  <Link to="/" className="flex items-center space-x-2 ">
                     <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <img src="/atlantis.png" alt="Logo" />
                     </div>
                     <span className="font-bold text-xl text-primary">
                        Atlantis NDT
                     </span>
                  </Link>
               </motion.div>

               {/* Desktop Navigation */}
               <motion.div
                  className="hidden md:flex items-center space-x-8"
                  variants={itemVariants}
               >
                  {navItems.map((item) =>
                     item.dropdown ? (
                        <div
                           key={item.name}
                           className="relative group"
                           onMouseEnter={() => setActiveDropdown(item.name)}
                           onMouseLeave={() => setActiveDropdown(null)}
                        >
                           <button
                              className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-primary ${activeDropdown === item.name
                                    ? "text-primary"
                                    : "text-foreground"
                                 }`}
                           >
                              <span>{item.name}</span>
                              <ChevronDown size={16} />
                           </button>

                           {/* Dropdown menu */}
                           <div
                              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${activeDropdown === item.name
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                                 }`}
                           >
                              {item.dropdown.map((sub) => (
                                 <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                                 >
                                    {sub.name}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.path}
                           className={`relative font-medium transition-colors duration-300 hover:text-primary ${location.pathname === item.path
                                 ? "text-primary"
                                 : "text-foreground"
                              }`}
                        >
                           {item.name}
                        </Link>
                     )
                  )}
               </motion.div>

               {/* CTA Button */}
               <motion.div className="hidden md:block" variants={itemVariants}>
                  <Button className="btn-primary">
                     <Link to="/contact"> Get Quote</Link>
                  </Button>
               </motion.div>

               {/* Mobile Menu Toggle */}
               <motion.button
                  className="md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                  variants={itemVariants}
               >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
               </motion.button>
            </div>

            {/* Mobile Navigation */}
            <motion.div
               className={`md:hidden overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
               initial={false}
               animate={{ height: isOpen ? "auto" : 0 }}
               transition={{ duration: 0.3 }}
            >
               <div className="py-4 space-y-2 backdrop-blur-md">
                  {navItems.map((item, index) =>
                     item.dropdown ? (
                        <div key={item.name}>
                           <button
                              className="flex justify-between w-full py-2 font-medium text-left"
                              onClick={() =>
                                 setActiveDropdown(
                                    activeDropdown === item.name
                                       ? null
                                       : item.name
                                 )
                              }
                           >
                              {item.name}
                              <ChevronDown
                                 size={16}
                                 className={`transform transition-transform ${activeDropdown === item.name
                                       ? "rotate-180"
                                       : ""
                                    }`}
                              />
                           </button>
                           {activeDropdown === item.name && (
                              <div className="pl-4 space-y-1">
                                 {item.dropdown.map((sub) => (
                                    <Link
                                       key={sub.name}
                                       to={sub.path}
                                       className="block py-1 text-gray-600 hover:text-primary"
                                       onClick={() => setIsOpen(false)}
                                    >
                                       {sub.name}
                                    </Link>
                                 ))}
                              </div>
                           )}
                        </div>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.path}
                           className="block py-2 font-medium transition-colors duration-300"
                           onClick={() => setIsOpen(false)}
                        >
                           {item.name}
                        </Link>
                     )
                  )}

                  <Button className="btn-primary w-full mt-4">
                     <Link to="/contact"> Get Quote</Link>
                  </Button>
               </div>
            </motion.div>
         </div>
      </motion.nav>
   );
};
