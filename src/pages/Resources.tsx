import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Download, BookOpen, Video, Calendar, Search, Play, Monitor, HelpCircle, FileSpreadsheet, Presentation, Image, ExternalLink } from "lucide-react";

const Resources = () => {
  const featuredResources = [
    {
      type: "Whitepaper",
      title: "Digital Transformation in Manufacturing: A Complete Guide",
      description: "Comprehensive guide covering ERP implementation strategies, automation benefits, and ROI analysis for manufacturing organizations.",
      downloadSize: "2.3 MB PDF",
      icon: FileText,
      featured: true,
      downloadUrl: "/downloads/digital-transformation-guide.pdf"
    },
    {
      type: "Case Study",
      title: "How PrintOps ERP Reduced Costs by 30% in 6 Months",
      description: "Detailed analysis of a major manufacturing company's transformation journey with Biztra PrintOps ERP implementation.",
      downloadSize: "1.8 MB PDF",
      icon: Download,
      featured: true,
      downloadUrl: "/downloads/printops-case-study.pdf"
    },
    {
      type: "Product Brochure",
      title: "Biztra ERP Suite Overview",
      description: "Complete overview of all ERP modules, features, benefits, and technical specifications in an easy-to-share format.",
      downloadSize: "4.1 MB PDF",
      icon: BookOpen,
      featured: true,
      downloadUrl: "/downloads/biztra-erp-brochure.pdf"
    }
  ];

  const videoSections = [
    {
      category: "Company Profile",
      videos: [
        { title: "Biztra Technologies Overview", duration: "3:45", thumbnail: "/api/placeholder/300/200", description: "Introduction to our company vision and mission" },
        { title: "Leadership Team Introduction", duration: "5:20", thumbnail: "/api/placeholder/300/200", description: "Meet the minds behind Biztra's innovation" },
        { title: "Our Journey & Milestones", duration: "4:15", thumbnail: "/api/placeholder/300/200", description: "From startup to industry leader" }
      ]
    },
    {
      category: "Product Demos",
      videos: [
        { title: "PrintOps ERP Complete Walkthrough", duration: "12:30", thumbnail: "/api/placeholder/300/200", description: "Full demonstration of our flagship ERP solution" },
        { title: "HR Module Deep Dive", duration: "8:45", thumbnail: "/api/placeholder/300/200", description: "Comprehensive look at HR management features" },
        { title: "DMS Features Overview", duration: "6:20", thumbnail: "/api/placeholder/300/200", description: "Document management system capabilities" },
        { title: "CRM Integration Demo", duration: "7:10", thumbnail: "/api/placeholder/300/200", description: "Customer relationship management in action" }
      ]
    },
    {
      category: "Help & Training",
      videos: [
        { title: "Getting Started with Biztra ERP", duration: "15:30", thumbnail: "/api/placeholder/300/200", description: "Step-by-step onboarding guide" },
        { title: "User Management & Permissions", duration: "9:15", thumbnail: "/api/placeholder/300/200", description: "Setting up users and role-based access" },
        { title: "Reporting & Analytics Tutorial", duration: "11:45", thumbnail: "/api/placeholder/300/200", description: "Creating custom reports and dashboards" },
        { title: "Troubleshooting Common Issues", duration: "8:30", thumbnail: "/api/placeholder/300/200", description: "Solutions to frequently encountered problems" }
      ]
    }
  ];

  const templateCategories = [
    {
      category: "Business Templates",
      items: [
        { title: "ERP ROI Calculator", type: "Excel", size: "0.5 MB", icon: FileSpreadsheet, description: "Calculate potential returns from ERP implementation" },
        { title: "Project Implementation Timeline", type: "Excel", size: "0.3 MB", icon: FileSpreadsheet, description: "Template for planning your ERP rollout" },
        { title: "Digital Transformation Roadmap", type: "PowerPoint", size: "2.1 MB", icon: Presentation, description: "Strategic planning presentation template" },
        { title: "Business Process Analysis", type: "Excel", size: "0.8 MB", icon: FileSpreadsheet, description: "Analyze and optimize your current processes" }
      ]
    },
    {
      category: "Infographics & Visual Assets",
      items: [
        { title: "ERP Benefits Infographic", type: "PNG", size: "1.2 MB", icon: Image, description: "Visual representation of ERP advantages" },
        { title: "Manufacturing Process Flow", type: "PNG", size: "0.9 MB", icon: Image, description: "Streamlined manufacturing workflow diagram" },
        { title: "Digital Transformation Stats", type: "PNG", size: "1.1 MB", icon: Image, description: "Key statistics about digital transformation" },
        { title: "Biztra Solutions Overview", type: "PNG", size: "1.5 MB", icon: Image, description: "Complete solutions portfolio visual" }
      ]
    }
  ];

  const portalResources = [
    { title: "Client Portal", description: "Access your projects, reports, and support tickets", icon: Monitor },
    { title: "Training Portal", description: "Self-paced learning modules and certification paths", icon: BookOpen },
    { title: "Developer Resources", description: "API documentation, SDKs, and integration guides", icon: FileText },
    { title: "Support Center", description: "Knowledge base, FAQs, and ticket submission", icon: HelpCircle }
  ];

  const resourceCategories = [
    {
      category: "Implementation Guides",
      resources: [
        { title: "ERP Implementation Best Practices", type: "Guide", size: "1.5 MB" },
        { title: "Data Migration Checklist", type: "Checklist", size: "0.8 MB" },
        { title: "User Training Materials", type: "Guide", size: "3.2 MB" },
        { title: "Go-Live Preparation Guide", type: "Guide", size: "2.1 MB" }
      ]
    },
    {
      category: "Technical Documentation",
      resources: [
        { title: "API Integration Guide", type: "Technical", size: "2.7 MB" },
        { title: "System Requirements Specification", type: "Technical", size: "1.9 MB" },
        { title: "Security & Compliance Overview", type: "Technical", size: "1.4 MB" },
        { title: "Backup & Recovery Procedures", type: "Technical", size: "1.1 MB" }
      ]
    },
    {
      category: "Industry Reports",
      resources: [
        { title: "Manufacturing ERP Trends 2024", type: "Report", size: "3.5 MB" },
        { title: "Document Management ROI Study", type: "Report", size: "2.8 MB" },
        { title: "Automation Impact Analysis", type: "Report", size: "2.2 MB" },
        { title: "Digital Transformation Survey", type: "Report", size: "1.7 MB" }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "5 Signs Your Business Needs an ERP Upgrade",
      excerpt: "Discover the key indicators that suggest it's time to modernize your enterprise resource planning system.",
      category: "ERP",
      readTime: "5 min read",
      publishDate: "March 15, 2024"
    },
    {
      title: "The Future of Document Management in Manufacturing",
      excerpt: "Exploring how AI and automation are transforming document workflows in manufacturing environments.",
      category: "Manufacturing",
      readTime: "7 min read",
      publishDate: "March 10, 2024"
    },
    {
      title: "ROI Calculation Guide for ERP Implementation",
      excerpt: "Step-by-step methodology for calculating and presenting ERP return on investment to stakeholders.",
      category: "Business",
      readTime: "8 min read",
      publishDate: "March 5, 2024"
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
              Knowledge Hub
              <span className="block text-biztra-orange">Resources & Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access comprehensive guides, whitepapers, case studies, and expert insights 
              to accelerate your digital transformation journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and valuable resources to help you make informed decisions 
              about your technology investments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-biztra-blue/10 text-biztra-blue">
                        <resource.icon className="h-8 w-8" />
                      </div>
                      <Badge className="bg-biztra-orange">Featured</Badge>
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">{resource.type}</Badge>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {resource.title}
                    </CardTitle>
                    <p className="text-gray-600">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.downloadSize}</span>
                      <Button className="btn-primary" onClick={() => window.open(resource.downloadUrl, '_blank')}>
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Sections */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Video Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our comprehensive video library covering product demos, training materials, 
              and company insights to help you get the most out of Biztra solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {videoSections.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-2xl font-heading font-bold text-biztra-blue mb-8">{section.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.videos.map((video, index) => (
                    <Card key={video.title} className="card-elegant hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white rounded-full p-3">
                            <Play className="h-8 w-8 text-biztra-blue" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-heading font-semibold text-biztra-blue mb-2">{video.title}</h4>
                        <p className="text-sm text-gray-600">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates & Downloads */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Free Templates & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our collection of business templates, calculators, and infographics 
              to streamline your operations and planning processes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {templateCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-heading font-bold text-biztra-blue mb-8">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <Card key={item.title} className="card-elegant hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-biztra-blue/10 text-biztra-blue">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-heading font-semibold text-biztra-blue">{item.title}</h4>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{item.type}</Badge>
                                <span className="text-xs text-gray-500">{item.size}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                            <Button size="sm" className="btn-primary">
                              Download <Download className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Access */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Client Portals & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access dedicated portals for ongoing support, training, and project management 
              tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portalResources.map((portal, index) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-biztra-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-biztra-blue/20 transition-colors">
                      <portal.icon className="h-8 w-8 text-biztra-blue" />
                    </div>
                    <h3 className="font-heading font-semibold text-biztra-blue mb-2">{portal.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{portal.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-biztra-blue group-hover:text-biztra-blue">
                      Access Portal <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of resources organized by category 
              to find exactly what you need.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-4">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.resources.map((resource) => (
                        <div key={resource.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex-1">
                            <h4 className="font-medium text-biztra-blue text-sm">{resource.title}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                              <span className="text-xs text-gray-500">{resource.size}</span>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to="/contact">
                        Access All Resources
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-biztra-blue mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and expert insights 
              in enterprise technology and digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elegant h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-heading text-biztra-blue mb-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.publishDate}</span>
                      <Button variant="ghost" className="text-biztra-blue p-0" asChild>
                        <Link to="/contact">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
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

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, product updates, 
              and exclusive resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button size="lg" className="bg-biztra-orange hover:bg-biztra-orange-light text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Double opt-in required. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;