import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Download, BookOpen, Video, Calendar, Search } from "lucide-react";

const Resources = () => {
  const featuredResources = [
    {
      type: "Whitepaper",
      title: "Digital Transformation in Manufacturing: A Complete Guide",
      description: "Comprehensive guide covering ERP implementation strategies, automation benefits, and ROI analysis for manufacturing organizations.",
      downloadSize: "2.3 MB PDF",
      icon: FileText,
      featured: true
    },
    {
      type: "Case Study",
      title: "How PrintOps ERP Reduced Costs by 30% in 6 Months",
      description: "Detailed analysis of a major manufacturing company's transformation journey with Biztra PrintOps ERP implementation.",
      downloadSize: "1.8 MB PDF",
      icon: Download,
      featured: true
    },
    {
      type: "Product Brochure",
      title: "Biztra ERP Suite Overview",
      description: "Complete overview of all ERP modules, features, benefits, and technical specifications in an easy-to-share format.",
      downloadSize: "4.1 MB PDF",
      icon: BookOpen,
      featured: true
    }
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
                      <Button className="btn-primary" asChild>
                        <Link to="/contact">
                          Download <Download className="ml-2 h-4 w-4" />
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