import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Eye, Heart, Award, Users, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every solution we deliver, ensuring quality that exceeds expectations."
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Continuously evolving our technologies and approaches to stay ahead of industry trends."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Operating with the highest ethical standards and maintaining complete transparency with our clients."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Biztra Technologies established with a vision to transform business operations through technology."
    },
    {
      year: "2021",
      title: "First ERP Deployment",
      description: "Successfully launched our flagship PrintOps ERP solution for manufacturing clients."
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Expanded service portfolio to include custom development and business analytics."
    },
    {
      year: "2023",
      title: "Major Milestone",
      description: "Reached 50+ successful implementations and $10M+ in client cost savings."
    },
    {
      year: "2024",
      title: "Product Innovation",
      description: "Launched advanced automation tools and enhanced ERP suite with AI capabilities."
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "20+ years of experience in enterprise software and digital transformation leadership.",
      expertise: ["Strategic Planning", "Business Development", "Enterprise Sales"]
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "Former senior architect at Fortune 500 companies with expertise in scalable enterprise systems.",
      expertise: ["System Architecture", "Cloud Technologies", "AI/ML Integration"]
    },
    {
      name: "Emily Rodriguez",
      title: "Head of Operations",
      bio: "Operations expert specializing in process optimization and client success management.",
      expertise: ["Process Optimization", "Client Success", "Project Management"]
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
              About Biztra
              <span className="block text-biztra-orange">Where Business Meets Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a digital transformation partner dedicated to empowering businesses 
              through innovative enterprise solutions, managed services, and custom technology development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To partner with our clients to optimize processes, reduce operational costs, 
                and drive innovation, enabling them to thrive in the digital era.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should serve business objectives, not complicate them. 
                Our solutions are designed to be intuitive, scalable, and aligned with your 
                strategic goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-elegant p-8">
                <h3 className="text-2xl font-heading font-bold text-biztra-blue mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 mb-6">
                  To be the leading digital transformation partner that empowers organizations 
                  to achieve operational excellence through innovative technology solutions.
                </p>
                <div className="space-y-3">
                  {[
                    "Democratize access to enterprise-grade technology",
                    "Accelerate digital transformation across industries", 
                    "Create lasting partnerships built on trust and results",
                    "Drive measurable business value through innovation"
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                      <span className="text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our commitment to client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full text-center p-6">
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 text-biztra-orange mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-biztra-blue mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to trusted enterprise partner - key milestones in our growth story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-biztra-blue/20"></div>
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="card-elegant">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-biztra-orange" />
                          <Badge className="bg-biztra-blue">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-lg font-heading text-biztra-blue">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-biztra-orange rounded-full border-4 border-white shadow-md"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving our vision and ensuring exceptional client outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-1">
                      {leader.name}
                    </CardTitle>
                    <Badge variant="outline" className="mb-4">{leader.title}</Badge>
                    <p className="text-gray-600 text-sm">{leader.bio}</p>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-biztra-blue mb-2 text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {leader.expertise.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Are you passionate about technology and helping businesses transform? 
                Join our growing team of innovators and make a meaningful impact.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Competitive compensation and benefits",
                  "Flexible work arrangements and remote options",
                  "Professional development and learning opportunities",
                  "Collaborative and inclusive work environment",
                  "Opportunity to work with cutting-edge technologies",
                  "Make a real impact on client success stories"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-biztra-orange rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary" asChild>
                <Link to="/contact">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-elegant p-8">
                <h3 className="text-2xl font-heading font-bold text-biztra-blue mb-6">
                  Apply Now
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                    <Input placeholder="e.g., Software Developer, Business Analyst" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV</label>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                  </div>
                  <Button className="btn-hero w-full">
                    Submit Application
                  </Button>
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
              Ready to Transform Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Biztra Technologies can help your organization achieve its digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white" asChild>
                <Link to="/contact">
                  Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-biztra-blue" asChild>
                <Link to="/case-studies">See Our Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;