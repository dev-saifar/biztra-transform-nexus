import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Key, Database, Cog } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: Mail,
      name: "MailXtract",
      category: "Email Productivity",
      description: "Powerful utility designed to automatically extract email attachments from Outlook, EML, and MSG files.",
      features: [
        "Bulk attachment extraction from multiple email formats",
        "Support for Outlook, EML, and MSG files",
        "Automated file organization and naming",
        "Batch processing capabilities",
        "Time-saving automation for routine tasks"
      ],
      benefits: ["Saves hours of manual work", "Reduces human error", "Improves productivity"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Key,
      name: "License Management Tools",
      category: "Software Security",
      description: "Robust systems for generating secure trial and yearly software licenses with comprehensive validation mechanisms.",
      features: [
        "Secure license key generation",
        "Trial and yearly license support",
        "Hardware fingerprinting validation",
        "Expiration date management",
        "Anti-piracy protection mechanisms"
      ],
      benefits: ["Protects intellectual property", "Flexible licensing models", "Automated validation"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Database,
      name: "Data Converters",
      category: "Data Management",
      description: "Comprehensive suite of data conversion utilities for seamless format transformations and data migration.",
      features: [
        "Multi-format data conversion",
        "Excel to database migration",
        "CSV processing and transformation",
        "Data validation and cleaning",
        "Batch conversion capabilities"
      ],
      benefits: ["Streamlines data migration", "Ensures data integrity", "Supports multiple formats"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Cog,
      name: "Automation Utilities",
      category: "Process Automation",
      description: "Suite of specialized utilities including log extractors, reporting tools, and custom automation scripts.",
      features: [
        "Log file extraction and analysis",
        "Custom reporting utilities",
        "Automated data processing scripts",
        "System monitoring tools",
        "Workflow automation helpers"
      ],
      benefits: ["Automates mundane tasks", "Improves operational efficiency", "Reduces manual errors"],
      color: "bg-orange-50 text-orange-600"
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
              Productivity Tools
              <span className="block text-biztra-orange">Built for Efficiency</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized utilities and automation tools designed to eliminate mundane tasks, 
              boost productivity, and streamline your daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" size="lg" asChild>
                <Link to="/contact">
                  Request Tool Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Download Trial Versions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Specialized Productivity Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each tool is crafted to solve specific productivity challenges and automate 
              time-consuming tasks across different business functions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${tool.color}`}>
                        <tool.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="secondary" className="bg-biztra-orange/10 text-biztra-orange">
                        {tool.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-heading text-biztra-blue mb-2">
                      {tool.name}
                    </CardTitle>
                    <p className="text-gray-600 text-lg">{tool.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-biztra-blue mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-biztra-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-biztra-blue mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="btn-primary flex-1" asChild>
                        <Link to="/contact">
                          Get Tool <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">Trial</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Choose Your Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select individual tools or get the complete productivity suite for maximum efficiency gains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Tool",
                price: "Starting at $99",
                description: "Perfect for specific use cases",
                features: [
                  "Single tool license",
                  "Basic support",
                  "Documentation access",
                  "Email support"
                ]
              },
              {
                title: "Tool Bundle",
                price: "Starting at $299",
                description: "Best value for multiple tools",
                features: [
                  "3-4 tools included",
                  "Priority support",
                  "Advanced documentation",
                  "Phone & email support",
                  "Custom configurations"
                ],
                popular: true
              },
              {
                title: "Enterprise Suite",
                price: "Custom Pricing",
                description: "Complete automation solution",
                features: [
                  "All tools included",
                  "24/7 dedicated support",
                  "Custom tool development",
                  "On-site training",
                  "Integration assistance"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`card-elegant h-full text-center relative ${plan.popular ? 'border-biztra-orange border-2' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-biztra-orange">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {plan.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-biztra-orange mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={plan.popular ? "btn-hero w-full" : "btn-outline w-full"} 
                      asChild
                    >
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start automating your workflows today with our specialized productivity tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Try Tools Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/services">Custom Tool Development</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tools;