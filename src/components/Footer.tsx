import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-biztra-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src="/assets/biztra-logo-alt.png" 
              alt="Biztra Technologies" 
              className="h-12 w-auto mb-4 brightness-0 invert"  // changed from h-8 to h-12
            />
            <p className="text-blue-100 mb-4 max-w-md">
              Where Business Meets Transformation. Your trusted partner for enterprise 
              solutions, digital transformation, and custom software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-biztra-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-biztra-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-biztra-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-blue-200 hover:text-white transition-colors">ERP Suite</Link></li>
              <li><Link to="/tools" className="text-blue-200 hover:text-white transition-colors">Productivity Tools</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-biztra-orange" />
                <a href="mailto:info@biztrasolutions.com" className="text-blue-200 hover:text-white transition-colors">
                  info@biztrasolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-biztra-orange" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-biztra-orange" />
                <span className="text-blue-200">Enterprise District, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2025 Biztra Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};