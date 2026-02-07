import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock';
import { CheckCircle, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Professional Cleaning Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every type of sofa with eco-friendly products and guaranteed results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                        {service.price}
                      </span>
                      <span className="text-white/90 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-700">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                      <span className="text-sm text-gray-600">Deep cleaning with eco-friendly solutions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                      <span className="text-sm text-gray-600">Trained and verified professionals</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                      <span className="text-sm text-gray-600">100% satisfaction guarantee</span>
                    </div>
                  </div>
                  <Link to="/book">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white">
                      Book This Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SofaShine?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the best sofa cleaning experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: 'Eco-Friendly Products',
                description: 'Safe for your family, pets, and the environment'
              },
              {
                icon: Shield,
                title: '100% Satisfaction Guarantee',
                description: 'Not happy? We will re-clean for free or full refund'
              },
              {
                icon: Clock,
                title: 'Same Day Service',
                description: 'Book today, get cleaned today in most areas'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Quick booking, transparent pricing, and professional results guaranteed
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl text-lg px-8 py-6">
              Book Now - Get 10% Off
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
