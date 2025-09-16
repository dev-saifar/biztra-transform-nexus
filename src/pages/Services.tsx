import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Workflow, Shield, Code, TestTube, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      name: "Data Analytics & BI",
      category: "Business Intelligence",
      description: "Transform your data into actionable insights with advanced dashboards and predictive modeling solutions.",
      capabilities: [
        "Power BI dashboard development",
        "Custom web-based analytics platforms",
        "SLA tracking and performance monitoring",
        "Cost optimization analytics",
        "Predictive modeling and forecasting"
      ],
      deliverables: ["Interactive dashboards", "Automated reports", "KPI monitoring", "Data visualization"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Workflow,
      name: "Workflow Management & Automation",
      category: "Process Optimization",
      description: "Streamline operations through intelligent business process re-engineering and automated approval cycles.",
      capabilities: [
        "Business process re-engineering",
        "Manual approval cycle automation",
        "ERP & DMS workflow integration",
        "Custom workflow design",
        "Process optimization consulting"
      ],
      deliverables: ["Automated workflows", "Process documentation", "Integration setup", "Training materials"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Shield,
      name: "Cybersecurity & Compliance",
      category: "Security & Governance",
      description: "Comprehensive security solutions ensuring data protection, compliance, and robust governance frameworks.",
      capabilities: [
        "Endpoint security implementation",
        "Role-based access control (RBAC)",
        "Audit trail development",
        "Compliance audits and assessments",
        "Data governance frameworks"
      ],
      deliverables: ["Security policies", "Compliance reports", "Access control systems", "Audit documentation"],
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Code,
      name: "Custom Software Development",
      category: "Application Development",
      description: "Tailored web, desktop, and mobile applications built with modern frameworks and best practices.",
      capabilities: [
        "Web application development (Python/Flask, React)",
        "Desktop application development",
        "Mobile app development",
        "Database design (PostgreSQL)",
        "API development and integration"
      ],
      deliverables: ["Custom applications", "Source code", "Documentation", "Deployment packages"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: TestTube,
      name: "Software Testing & QA",
      category: "Quality Assurance",
      description: "Comprehensive testing services ensuring software quality, performance, security, and optimal user experience.",
      capabilities: [
        "Manual testing and test case development",
        "Automated testing framework setup",
        "Performance testing and optimization",
        "Security testing and vulnerability assessment",
        "Usability testing and user experience validation"
      ],
      deliverables: ["Test plans", "Automated test suites", "Performance reports", "Security assessments"],
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: Users,
      name: "Development Outsourcing",
      category: "Team Extension",
      description: "Dedicated remote development teams with flexible engagement models for ongoing development and support.",
      capabilities: [
        "Dedicated remote development teams",
        "Staff augmentation services",
        "Project-based development",
        "Ongoing maintenance and support",
        "Technology consulting"
      ],
      deliverables: ["Dedicated teams", "Project deliverables", "Regular progress reports", "Knowledge transfer"],
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const engagementModels = [
    {
      title: "Fixed Price Project",
      description: "Well-defined scope with guaranteed delivery timeline and budget",
      suitableFor: "Clearly defined requirements, specific deliverables",
      sla: "Project completion within agreed timeline",
      pricing: "Fixed cost based on scope"
    },
    {
      title: "Time & Materials",
      description: "Flexible engagement for evolving requirements and ongoing development",
      suitableFor: "Ongoing development, changing requirements",
      sla: "Resource availability and weekly reporting",
      pricing: "Hourly/monthly rates"
    },
    {
      title: "Dedicated Team",
      description: "Long-term partnership with dedicated resources working exclusively on your projects",
      suitableFor: "Long-term projects, team extension",
      sla: "Dedicated resource allocation and monthly reviews",
      pricing: "Monthly retainer per resource"
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
              Professional Services
              <span className="block text-biztra-orange">Tailored to Your Needs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive technology services from data analytics and workflow automation 
              to custom development and quality assurance, delivered by experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" size="lg" asChild>
                <Link to="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Request Proposal</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic consulting to hands-on development, we provide end-to-end 
              technology services to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${service.color}`}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="secondary" className="bg-biztra-orange/10 text-biztra-orange">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {service.name}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-biztra-blue mb-2 text-sm">Core Capabilities:</h4>
                      <ul className="space-y-1">
                        {service.capabilities.slice(0, 3).map((capability) => (
                          <li key={capability} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-biztra-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-xs">{capability}</span>
                          </li>
                        ))}
                        {service.capabilities.length > 3 && (
                          <li className="text-biztra-blue text-xs font-medium">
                            +{service.capabilities.length - 3} more capabilities
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-biztra-blue mb-2 text-sm">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="outline" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>

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

      {/* Engagement Models */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the engagement model that best fits your project requirements, timeline, and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {model.title}
                    </CardTitle>
                    <p className="text-gray-600">{model.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-biztra-blue text-sm mb-1">Suitable For:</h4>
                        <p className="text-gray-700 text-sm">{model.suitableFor}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-biztra-blue text-sm mb-1">SLA:</h4>
                        <p className="text-gray-700 text-sm">{model.sla}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-biztra-blue text-sm mb-1">Pricing:</h4>
                        <p className="text-gray-700 text-sm">{model.pricing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Quality */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-6">
                Quality-Driven Process
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our structured approach ensures consistent quality, transparent communication, 
                and successful project delivery across all engagements.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Discovery & Planning", desc: "Requirements analysis and project roadmap" },
                  { step: "2", title: "Design & Architecture", desc: "Solution design and technical specifications" },
                  { step: "3", title: "Development & Testing", desc: "Agile development with continuous testing" },
                  { step: "4", title: "Deployment & Support", desc: "Go-live support and ongoing maintenance" }
                ].map((phase) => (
                  <div key={phase.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-biztra-orange rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {phase.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-biztra-blue">{phase.title}</h4>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-elegant p-6">
                <h3 className="text-2xl font-heading font-bold text-biztra-blue mb-4">
                  Quality Commitments
                </h3>
                <div className="space-y-4">
                  {[
                    "ISO-standard development processes",
                    "Code review and quality assurance",
                    "Regular progress reporting and updates",
                    "Post-delivery support and maintenance",
                    "Knowledge transfer and documentation",
                    "Client satisfaction guarantee"
                  ].map((commitment) => (
                    <div key={commitment} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                      <span className="text-gray-700">{commitment}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our professional services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Get Project Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;