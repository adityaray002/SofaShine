import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Star, Clock, CheckCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ServiceModal = ({ service, isOpen, onClose }) => {
  const [selectedPackages, setSelectedPackages] = useState([]);
  const { addToCart } = useCart();

  if (!service) return null;

  const handleAddPackage = (pkg) => {
    const existingIndex = selectedPackages.findIndex(p => p.id === pkg.id);
    
    if (existingIndex >= 0) {
      const newPackages = selectedPackages.filter(p => p.id !== pkg.id);
      setSelectedPackages(newPackages);
    } else {
      setSelectedPackages([...selectedPackages, { ...pkg, serviceId: service.id, serviceName: service.name }]);
    }
  };

  const handleAddToCart = () => {
    if (selectedPackages.length === 0) {
      return;
    }
    
    addToCart(selectedPackages);
    setSelectedPackages([]);
    onClose();
  };

  const isPackageSelected = (pkgId) => selectedPackages.some(p => p.id === pkgId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header with Image */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Service Info */}
          <DialogHeader className="mb-6">
            <div className="space-y-3">
              <DialogTitle className="text-2xl font-bold">{service.name}</DialogTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-gray-500 text-sm">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>
              <div className="text-lg">
                <span className="text-gray-600">Starts at </span>
                <span className="font-bold text-teal-600">₹{service.startingPrice}</span>
              </div>
            </div>
          </DialogHeader>

          {/* Features */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">What's included:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Package Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">Select requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`p-4 cursor-pointer transition-all border-2 hover:border-teal-300 ${
                    isPackageSelected(pkg.id)
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleAddPackage(pkg)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{pkg.type}</h4>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isPackageSelected(pkg.id)
                        ? 'border-teal-500 bg-teal-500'
                        : 'border-gray-300'
                    }`}>
                      {isPackageSelected(pkg.id) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-teal-600">₹{pkg.price}</span>
                    <Button
                      size="sm"
                      variant={isPackageSelected(pkg.id) ? "default" : "outline"}
                      className={isPackageSelected(pkg.id) ? "bg-teal-600 hover:bg-teal-700" : "border-teal-500 text-teal-700 hover:bg-teal-50"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddPackage(pkg);
                      }}
                    >
                      {isPackageSelected(pkg.id) ? 'Added' : 'Add'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          {selectedPackages.length > 0 && (
            <div className="sticky bottom-0 bg-white pt-4 border-t">
              <Button
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-6 text-lg"
                onClick={handleAddToCart}
              >
                Add {selectedPackages.length} package{selectedPackages.length > 1 ? 's' : ''} to Cart
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
