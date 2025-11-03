import { motion } from "framer-motion";
import {
   Settings,
   Layers,
   Database,
   Users,
   Zap,
   CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";

export default function Erp() {
   const modules = [
      {
         icon: Database,
         title: "Inventory Management",
         description:
            "Real-time tracking of products, stock levels, and warehouse locations.",
         features: [
            "Stock Alerts",
            "Batch Tracking",
            "Barcode Integration",
            "Warehouse Automation",
         ],
      },
      {
         icon: Users,
         title: "CRM & Sales",
         description:
            "Manage leads, opportunities, and customer relationships efficiently.",
         features: [
            "Lead Management",
            "Sales Pipeline",
            "Customer Portal",
            "Automated Follow-ups",
         ],
      },
      {
         icon: Zap,
         title: "Accounting & Finance",
         description:
            "Streamlined financial operations with automated reporting.",
         features: [
            "Invoice Management",
            "Expense Tracking",
            "Financial Reports",
            "Bank Reconciliation",
         ],
      },
      {
         icon: Layers,
         title: "Project Management",
         description: "Plan, track, and collaborate on projects across teams.",
         features: [
            "Task Assignment",
            "Gantt Charts",
            "Time Tracking",
            "Collaboration Tools",
         ],
      },
      {
         icon: Settings,
         title: "Human Resources",
         description: "Manage employee lifecycle from recruitment to payroll.",
         features: [
            "Attendance & Leave",
            "Payroll Automation",
            "Recruitment",
            "Employee Portal",
         ],
      },
   ];

   const industries = [
      "Manufacturing",
      "Retail",
      "Healthcare",
      "Education",
      "Logistics",
      "Construction",
      "IT Services",
      "Finance",
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "ERP Solution",
      provider: {
         "@type": "Organization",
         name: "Your ERP Company",
      },
      areaServed: "Global",
      hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "ERP Modules",
         itemListElement: modules.map((module, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
               "@type": "Service",
               name: module.title,
               description: module.description,
            },
         })),
      },
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="ERP Solutions"
            description="Comprehensive ERP platform including inventory, sales, accounting, HR, and project management modules for businesses of all sizes."
            keywords="ERP software, business management, Odoo alternative, inventory, sales, finance, HR, project management"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/erp"
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     ERP <span className="gradient-text">Solutions</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                     Streamline your business processes with an all-in-one ERP
                     platform, designed to improve efficiency, visibility, and
                     decision-making.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* ERP Modules */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Key ERP Modules
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     A complete suite of integrated modules covering finance,
                     sales, inventory, HR, and project management.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {modules.map((module, index) => (
                     <motion.div
                        key={module.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group">
                           <CardHeader>
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                 <module.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-xl">
                                 {module.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground mb-6">
                                 {module.description}
                              </p>
                              <ul className="space-y-2">
                                 {module.features.map((feature, idx) => (
                                    <li
                                       key={idx}
                                       className="flex items-center gap-2 text-sm"
                                    >
                                       <CheckCircle className="w-4 h-4 text-primary" />
                                       {feature}
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Industries Section */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Industries We Serve
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Trusted by leading companies across various industries for
                     business automation and process efficiency.
                  </p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {industries.map((industry, index) => (
                     <motion.div
                        key={industry}
                        className="bg-card rounded-lg p-6 text-center shadow-md hover-scale"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <h3 className="font-semibold text-foreground">
                           {industry}
                        </h3>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* ERP Demo CTA Section */}
         <section className="py-20">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Experience Our ERP Solution
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                     Request a demo to see how our ERP platform can transform
                     your business operations.
                  </p>
                  <div className="flex justify-center gap-3">
                     <Button
                        size="lg"
                        variant="outline"
                        className="btn-primary"
                     >
                        <Link to={"https://odoo.atlantisndt.com/"}>
                           Get a Demo
                        </Link>
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="btn-primary"
                     >
                        <Link to={"/contact"}>Get demo Credentials</Link>
                     </Button>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Contact / Footer Details */}
         <ContactDetails />
      </div>
   );
}
