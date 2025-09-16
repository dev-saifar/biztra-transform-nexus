import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Tools", href: "/tools" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/biztra-logo.png" 
              alt="Biztra Technologies" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-biztra-blue bg-biztra-blue/10"
                    : "text-gray-700 hover:text-biztra-blue hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button className="btn-hero" size="sm" asChild>
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-biztra-blue bg-biztra-blue/10"
                      : "text-gray-700 hover:text-biztra-blue hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Sales
                  </Link>
                </Button>
                <Button className="btn-hero w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};