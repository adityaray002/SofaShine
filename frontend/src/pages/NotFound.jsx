import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { ArrowRight, Home, Search } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { to: '/services', label: 'Our Services' },
    { to: '/book', label: 'Book a Cleaning' },
    { to: '/blog', label: 'Care Tips & Guides' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <Helmet>
        <title>Page Not Found | SofaShine</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SofaShine homepage to book professional sofa cleaning in Delhi NCR." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or may have been moved. Head back to find what you need.
          </p>

          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white mb-8">
              <Home className="mr-2 w-5 h-5" />
              Back to Homepage
            </Button>
          </Link>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-teal-200 hover:bg-teal-50 text-gray-700 hover:text-teal-700 transition-colors text-sm font-medium"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Need help?{' '}
            <a href="tel:+919315576914" className="text-teal-600 hover:underline font-medium">
              Call +91 9315576914
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
