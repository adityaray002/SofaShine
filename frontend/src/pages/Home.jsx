import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import ServiceModal from '../components/ServiceModal';
import { useCart } from '../context/CartContext';
import { services, reviews, faqs } from '../mock';
import { Star, CheckCircle, Clock, Shield, Sparkles, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <div className="inline-block">
                <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Trusted by 1,000+ Happy Customers
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Bring Back the <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Shine</span> to Your Sofa!
              </h1>
              <p className="text-lg text-gray-600">
                Professional sofa cleaning with eco-friendly products. Book in 30 seconds, get sparkling results in 60 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Now - Get 10% Off
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-teal-500 text-teal-700 hover:bg-teal-50">
                    View Services
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Eco-Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">100% Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right duration-700">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Clean modern sofa"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your sofa professionally cleaned in 3 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Book Online',
                description: 'Select your sofa type, choose a time slot, and book instantly via WhatsApp',
                icon: Sparkles
              },
              {
                step: '2',
                title: 'We Clean',
                description: 'Our trained professionals arrive on time with eco-friendly equipment',
                icon: CheckCircle
              },
              {
                step: '3',
                title: 'You Relax',
                description: 'Enjoy your fresh, clean sofa within 2-4 hours of service completion',
                icon: Star
              }
            ].map((item) => (
              <Card key={item.step} className="relative overflow-hidden border-2 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-blue-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-6xl font-bold text-teal-100 absolute -top-4 -right-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional cleaning solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-teal-200"
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-semibold text-sm">{service.rating}</span>
                      <span className="text-white/80 text-xs">({service.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Starts at</p>
                      <p className="text-xl font-bold text-teal-600">₹{service.startingPrice}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service);
                      }}
                    >
                      Add
                    </Button>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-3">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Our Professional Team in Action
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch how our expert cleaners transform your furniture with advanced equipment and eco-friendly solutions
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative aspect-video bg-gradient-to-br from-teal-100 to-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Professional cleaning in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="w-8 h-8 text-teal-600 ml-1" />
                  </div>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-xl mb-2">Professional Deep Cleaning Process</h3>
                <p className="text-white/90 text-sm">Watch our certified professionals deliver exceptional results</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Trained Professionals', description: 'Certified and experienced cleaners' },
                { title: 'Advanced Equipment', description: 'Industrial-grade cleaning machines' },
                { title: 'Eco-Friendly Products', description: 'Safe for family and pets' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">4.9 out of 5</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Got questions? We've got answers.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 border-gray-200 rounded-xl px-6 hover:border-teal-200 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sofa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book now and get 10% off your first service. Professional cleaning, guaranteed results.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6">
              Book Your Cleaning Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
