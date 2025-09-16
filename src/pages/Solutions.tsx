import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Wrench, Code, BarChart } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "ERP Suite",
      description: "Comprehensive enterprise resource planning solutions including PrintOps, HR, DMS, CRM, and Finance modules.",
      features: ["Biztra PrintOps (MDS ERP)", "HR Management", "Document Management", "CRM & Sales", "Financial Controls"],
      link: "/products",
      color: "text-blue-600"
    },
    {
      icon: BarChart,
      title: "Business Support Services",
      description: "Strategic services to optimize your operations, enhance security, and drive intelligent automation.",
      features: ["Data Analytics & BI", "Workflow Automation", "Cybersecurity & Compliance", "Process Re-engineering"],
      link: "/services",
      color: "text-green-600"
    },
    {
      icon: Code,
      title: "Software Services",
      description: "Custom development, testing, and outsourcing solutions tailored to your unique business requirements.",
      features: ["Custom Development", "Software Testing & QA", "Development Outsourcing", "API Integration"],
      link: "/services",
      color: "text-purple-600"
    },
    {
      icon: Wrench,
      title: "Productivity Tools",
      description: "Specialized utilities and tools designed to automate mundane tasks and boost operational efficiency.",
      features: ["MailXtract", "License Management", "Data Converters", "Automation Utilities"],
      link: "/tools",
      color: "text-orange-600"
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
              Comprehensive Solutions for
              <span className="block text-biztra-orange">Digital Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From enterprise ERP systems to custom development, we provide end-to-end 
              solutions that drive efficiency, reduce costs, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gray-50 ${solution.color}`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-heading text-biztra-blue">
                        {solution.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 text-lg">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="btn-outline w-full" asChild>
                      <Link to={solution.link}>
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

      {/* Strategic Advantages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Strategic Advantages of Biztra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why leading organizations choose Biztra Technologies as their transformation partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Offering",
                description: "From ERP and DMS to analytics and custom development—everything your business needs from one trusted partner."
              },
              {
                title: "Industry Expertise",
                description: "Deep specialization in Managed Document Solutions (MDS) and complex enterprise service workflows."
              },
              {
                title: "Flexible Delivery",
                description: "We meet you where you are—on-premise, cloud, modular implementations, and flexible outsourcing."
              },
              {
                title: "Innovation-Driven",
                description: "Continuously evolving our product suite with new tools and digital platforms to keep you ahead of the curve."
              },
              {
                title: "Proven Results",
                description: "Track record of delivering >50% process improvements and 15-30% cost reductions for our clients."
              },
              {
                title: "Trusted Partnership",
                description: "Long-term relationships built on reliability, transparency, and shared success in your digital journey."
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full text-center p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-heading font-semibold text-biztra-blue mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
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
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Biztra Technologies can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;