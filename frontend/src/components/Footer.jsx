import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SofaShine</h3>
                <p className="text-xs text-gray-400">Expert Cleaning</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Professional sofa cleaning services with transparent pricing and guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/book" className="hover:text-teal-400 transition-colors">Book Now</Link></li>
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Fabric Sofa Cleaning</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Leather Sofa Cleaning</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Cushion Deep Wash</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Stain Removal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>+91 8920536399</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>hello@sofashine.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 SofaShine. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
