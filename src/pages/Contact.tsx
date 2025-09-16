import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
              Get in Touch
              <span className="block text-biztra-orange">Let's Transform Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business operations? Contact our team to discuss 
              your requirements and discover how Biztra Technologies can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-biztra-blue">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input placeholder="Your company name" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="your.email@company.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="printops">PrintOps ERP</SelectItem>
                          <SelectItem value="erp">ERP Suite</SelectItem>
                          <SelectItem value="hr">HR Management</SelectItem>
                          <SelectItem value="dms">Document Management</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="tools">Productivity Tools</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your requirements, challenges, or questions..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="btn-hero flex-1">
                        Request Demo
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-biztra-blue">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-biztra-orange mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@biztrasolutions.com" className="text-biztra-blue hover:underline">
                        info@biztrasolutions.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-biztra-orange mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-biztra-orange mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Enterprise District<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-biztra-orange mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM<br />Weekend: By appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant bg-gradient-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-semibold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Schedule a consultation to discuss your specific requirements and see how we can help transform your business.
                  </p>
                  <Button className="bg-biztra-orange hover:bg-biztra-orange-light text-white w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;