import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Users, Database, DollarSign, BarChart3, Archive } from "lucide-react";

const Products = () => {
  const erpModules = [
    {
      icon: FileText,
      name: "PrintOps (MDS ERP)",
      tagline: "Flagship Solution",
      description: "Comprehensive Managed Document Solutions ERP platform for end-to-end service management.",
      features: [
        "Service Desk & SLA Monitoring",
        "Contract Lifecycle Management", 
        "QR-enabled Asset & Gate Pass Management",
        "Financial Dashboards & Cost Analytics",
        "Automated Reporting & Insights"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      name: "HR Management",
      tagline: "People-First",
      description: "Complete human resource management system for modern workforce operations.",
      features: [
        "Employee Records & Profiles",
        "Payroll Processing & Benefits",
        "Performance Management",
        "Time & Attendance Tracking",
        "Recruitment & Onboarding"
      ],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Archive,
      name: "Document Management (DMS)",
      tagline: "Paperless Office",
      description: "Secure digital archiving solution with advanced OCR and workflow approvals.",
      features: [
        "Secure Digital Archiving",
        "Advanced OCR Technology",
        "Workflow Approvals & Routing",
        "Compliance & Audit Trails",
        "Version Control & History"
      ],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Database,
      name: "Procurement & Inventory (PI)",
      tagline: "Supply Chain",
      description: "Streamlined procurement and inventory management with automated workflows.",
      features: [
        "Vendor Management & Evaluation",
        "Stock Management & Tracking",
        "Purchase Order Automation",
        "Supplier Performance Analytics",
        "Inventory Optimization"
      ],
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: BarChart3,
      name: "Customer Relationship (CRM)",
      tagline: "Growth Engine",
      description: "Comprehensive CRM for lead management, pipeline tracking, and customer engagement.",
      features: [
        "Lead Management & Scoring",
        "Sales Pipeline Tracking",
        "Customer Engagement History",
        "Marketing Campaign Management",
        "Sales Performance Analytics"
      ],
      color: "bg-red-50 text-red-600"
    },
    {
      icon: DollarSign,
      name: "Finance & Billing",
      tagline: "Financial Control",
      description: "Automated financial management with invoicing, statements, and reporting.",
      features: [
        "Automated Invoicing & Billing",
        "Financial Statements & Reports",
        "Accounts Receivable Management",
        "Budget Planning & Forecasting",
        "Tax Management & Compliance"
      ],
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-biztra-blue mb-6">
              Biztra ERP Suite
              <span className="block text-biztra-orange">Integrated Business Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A fully integrated suite of enterprise modules designed to manage all 
              aspects of your business operations from a single, unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" size="lg" asChild>
                <Link to="/contact">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Download Spec Sheet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ERP Modules Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Complete ERP Module Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each module is designed to work seamlessly together, providing a unified 
              experience across all your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpModules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${module.color}`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="secondary" className="bg-biztra-orange/10 text-biztra-orange">
                        {module.tagline}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {module.name}
                    </CardTitle>
                    <p className="text-gray-600">{module.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-biztra-blue mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-biztra-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-6">
                Seamless Integration, Maximum Impact
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our ERP modules are built from the ground up to work together, 
                ensuring data consistency, streamlined workflows, and unified reporting 
                across your entire organization.
              </p>
              <div className="space-y-4">
                {[
                  "Single Sign-On (SSO) across all modules",
                  "Real-time data synchronization",
                  "Unified reporting and analytics dashboard",
                  "Consistent user experience and interface",
                  "Centralized user management and permissions",
                  "API-first architecture for easy extensibility"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-biztra-orange rounded-full flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/assets/biztra-printops-logo.png" 
                alt="Biztra ERP Integration" 
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Built on Modern, Secure Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade architecture with security, scalability, and performance at its core.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Backend Technology",
                items: ["Python/Flask Framework", "RESTful API Architecture", "PostgreSQL Database", "Redis Caching"]
              },
              {
                category: "Frontend Technology", 
                items: ["React.js Interface", "Responsive Design", "Progressive Web App", "Real-time Updates"]
              },
              {
                category: "Security & Compliance",
                items: ["Role-Based Access Control", "Audit Trails & Logging", "Data Encryption", "GDPR Compliant"]
              },
              {
                category: "Integration & APIs",
                items: ["REST API Endpoints", "Webhook Support", "Third-party Integrations", "Custom Connectors"]
              },
              {
                category: "Deployment Options",
                items: ["Cloud-hosted Solution", "On-premise Installation", "Hybrid Deployment", "Containerized Apps"]
              },
              {
                category: "Support & Maintenance",
                items: ["24/7 Technical Support", "Regular Updates", "Performance Monitoring", "Backup & Recovery"]
              }
            ].map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-heading text-biztra-blue">
                      {spec.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {spec.items.map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the power of integrated ERP solutions designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;