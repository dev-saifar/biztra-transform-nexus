import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Factory, Hospital, ShoppingCart, TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      icon: Building,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual document processes causing delays and compliance issues",
      solution: "Biztra PrintOps ERP implementation with automated workflows",
      results: [
        "65% reduction in document processing time",
        "95% improvement in compliance audit scores",
        "$2.3M annual cost savings",
        "Zero compliance violations in 18 months"
      ],
      modules: ["PrintOps", "DMS", "Workflow Automation"],
      timeline: "8 months",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      icon: Hospital,
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Fragmented patient data systems and inefficient HR processes",
      solution: "Integrated ERP suite with custom healthcare modules",
      results: [
        "40% faster patient data retrieval",
        "30% reduction in administrative overhead",
        "100% HIPAA compliance achievement",
        "50% improvement in staff satisfaction"
      ],
      modules: ["HR", "DMS", "Custom Development"],
      timeline: "12 months",
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      icon: ShoppingCart,
      company: "E-commerce Logistics Leader",
      industry: "Logistics & Supply Chain",
      challenge: "Inventory mismanagement and poor vendor coordination",
      solution: "Procurement & Inventory module with real-time analytics",
      results: [
        "80% reduction in stock-outs",
        "45% improvement in vendor response times",
        "$1.8M savings in inventory costs",
        "25% faster order fulfillment"
      ],
      modules: ["PI", "Analytics", "CRM"],
      timeline: "6 months",
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 4,
      icon: Factory,
      company: "Industrial Services Group",
      industry: "Industrial Services",
      challenge: "Lack of service visibility and customer communication gaps",
      solution: "Service desk platform with SLA monitoring and customer portal",
      results: [
        "90% improvement in SLA compliance",
        "60% reduction in customer complaints",
        "35% increase in customer retention",
        "50% faster issue resolution"
      ],
      modules: ["PrintOps", "CRM", "Analytics"],
      timeline: "10 months",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const industries = [
    "Manufacturing", "Healthcare", "Logistics & Supply Chain", "Industrial Services", 
    "Financial Services", "Education", "Government", "Technology"
  ];

  const metrics = [
    { icon: TrendingUp, value: "50+%", label: "Average Process Improvement" },
    { icon: DollarSign, value: "$10M+", label: "Total Client Savings" },
    { icon: Clock, value: "95%", label: "On-Time Delivery Rate" },
    { icon: Building, value: "100+", label: "Successful Implementations" }
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
              Success Stories
              <span className="block text-biztra-orange">Real Results, Real Impact</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how leading organizations across industries have transformed 
              their operations and achieved measurable results with Biztra Technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map((industry) => (
                <Badge key={industry} variant="outline" className="text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-biztra-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="h-8 w-8 text-biztra-orange mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-biztra-orange mb-2">
                  {metric.value}
                </div>
                <div className="text-blue-200 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed success stories showcasing our approach, solutions, 
              and the measurable impact delivered to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${study.color}`}>
                        <study.icon className="h-8 w-8" />
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-biztra-orange/10 text-biztra-orange mb-1">
                          {study.industry}
                        </Badge>
                        <div className="text-sm text-gray-500">{study.timeline}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {study.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-biztra-blue mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-biztra-blue mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm mb-2">{study.solution}</p>
                        <div className="flex flex-wrap gap-1">
                          {study.modules.map((module) => (
                            <Badge key={module} variant="outline" className="text-xs">
                              {module}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-biztra-blue mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-biztra-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contact">
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that ensures successful implementations and lasting results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your current processes, pain points, and objectives to define the transformation roadmap.",
                duration: "2-4 weeks"
              },
              {
                step: "02", 
                title: "Solution Design",
                description: "Custom solution architecture and detailed implementation plan tailored to your specific requirements.",
                duration: "2-3 weeks"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Agile development and deployment with regular checkpoints and stakeholder feedback loops.",
                duration: "3-8 months"
              },
              {
                step: "04",
                title: "Go-Live & Support",
                description: "Smooth transition to production with comprehensive training and ongoing support.",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{phase.step}</span>
                    </div>
                    <CardTitle className="text-lg font-heading text-biztra-blue mb-2">
                      {phase.title}
                    </CardTitle>
                    <Badge variant="outline" className="mb-4">{phase.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful organizations that have transformed their operations with Biztra Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;