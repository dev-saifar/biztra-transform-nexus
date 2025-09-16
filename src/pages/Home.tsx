import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Home = () => {
  const kpis = [
    { metric: ">50%", description: "Faster Processes" },
    { metric: "15-30%", description: "Cost Reduction" },
    { metric: "100%", description: "Secure & Compliant" },
    { metric: "24/7", description: "Actionable Insights" },
  ];

  const whyBiztra = [
    {
      icon: CheckCircle,
      title: "End-to-End Offering",
      description: "From ERP and DMS to analytics and custom development—everything your business needs from one trusted partner."
    },
    {
      icon: Users,
      title: "Industry Expertise",
      description: "Deep specialization in Managed Document Solutions (MDS) and complex enterprise service workflows."
    },
    {
      icon: Zap,
      title: "Flexible Delivery",
      description: "We meet you where you are—on-premise, cloud, modular implementations, and flexible outsourcing."
    },
    {
      icon: TrendingUp,
      title: "Innovation-Driven",
      description: "Continuously evolving our product suite with new tools and digital platforms to keep you ahead."
    }
  ];

  const techStack = [
    "Python/Flask", "React", "PostgreSQL", "RBAC", "Audit Trails", "API Integration"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-biztra-blue mb-6">
                Where Business
                <span className="block text-biztra-orange">Meets Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Digital transformation partner empowering businesses through innovative 
                enterprise solutions, managed services, and custom technology development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero" size="lg" asChild>
                  <Link to="/contact">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-biztra-blue">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Digital Transformation" 
                className="w-full h-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Biztra Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Why Choose Biztra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive digital transformation solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBiztra.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full text-center p-6">
                  <CardContent className="pt-6">
                    <item.icon className="h-12 w-12 text-biztra-orange mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-biztra-blue mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Solution Spotlight */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-6">
                Flagship Solution: Biztra PrintOps
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive Managed Document Solutions ERP platform designed 
                to streamline your entire document workflow and business operations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-biztra-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Service Desk & SLA Monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-biztra-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contract Lifecycle Management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-biztra-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">QR-enabled Asset & Gate Pass Management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-biztra-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Financial Dashboards & Cost Analytics</span>
                </li>
              </ul>
              <Button className="btn-primary" asChild>
                <Link to="/products">
                  Explore PrintOps <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/assets/biztra-printops-logo.png" 
                alt="Biztra PrintOps ERP" 
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPI Band */}
      <section className="py-16 bg-biztra-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-biztra-orange mb-2">
                  {kpi.metric}
                </div>
                <div className="text-blue-200 font-medium">{kpi.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-heading font-semibold text-biztra-blue mb-8">
            Built on Modern, Secure Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust Biztra Technologies for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;