import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../mock';
import ServiceModal from '../components/ServiceModal';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const BookNow = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Book Sofa Cleaning in Delhi NCR | SofaShine — Instant Booking</title>
        <meta name="description" content="Book professional sofa, carpet, mattress or home cleaning in Delhi NCR. Choose your service, pick a time slot, and get 10% off your first booking. Same-day available." />
        <link rel="canonical" href="https://sofashine.in/book" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Book Cleaning Service | SofaShine Delhi NCR" />
        <meta property="og:description" content="Instant online booking for sofa, carpet and home cleaning in Delhi NCR. Transparent pricing, 10% off first service." />
        <meta property="og:url" content="https://sofashine.in/book" />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-gray-600 text-lg">
              Select services and add them to your cart
            </p>
            {cartCount > 0 && (
              <Button
                onClick={() => navigate('/cart')}
                className="mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
              >
                View Cart ({cartCount} items)
              </Button>
            )}
          </div>

          {/* Services Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Select Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
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
                            Select
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BookNow;
