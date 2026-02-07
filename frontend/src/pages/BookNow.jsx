import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { services } from '../mock';
import { ShoppingCart, MessageCircle, Trash2, Plus, Minus } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const BookNow = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleAddToCart = (packages) => {
    const updatedCart = [...cartItems, ...packages];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${packages.length} package(s) added to cart`);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.info('Item removed from cart');
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = [...cartItems];
    const currentQty = updatedCart[index].quantity || 1;
    const newQty = Math.max(1, currentQty + change);
    updatedCart[index].quantity = newQty;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const qty = item.quantity || 1;
      return sum + (item.price * qty);
    }, 0);
  }, [cartItems]);

  const discountAmount = Math.round(subtotal * 0.1);
  const finalPrice = subtotal - discountAmount;

  const handleBooking = () => {
    if (cartItems.length === 0) {
      toast.error('Please add services to cart');
      return;
    }

    if (!customerName || !customerPhone || !address) {
      toast.error('Please fill all required fields');
      return;
    }

    // Create booking
    const booking = {
      id: Date.now(),
      customerName,
      customerPhone,
      address,
      items: cartItems,
      subtotal,
      discount: discountAmount,
      total: finalPrice,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    // Create WhatsApp message
    const itemsList = cartItems.map(item => 
      `${item.serviceName} - ${item.type} (Qty: ${item.quantity || 1}) - ₹${item.price * (item.quantity || 1)}`
    ).join('\\n');

    const message = `*New Booking Request - SofaShine*\\n\\n*Customer Details:*\\nName: ${customerName}\\nPhone: ${customerPhone}\\nAddress: ${address}\\n\\n*Services Booked:*\\n${itemsList}\\n\\n*Payment Summary:*\\nSubtotal: ₹${subtotal}\\nDiscount (10% OFF): -₹${discountAmount}\\n*Total Amount: ₹${finalPrice}*\\n\\nPlease confirm availability!`;

    const whatsappURL = `https://wa.me/918920536399?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Clear cart
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
    toast.success('Booking request sent! Check WhatsApp.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-gray-600 text-lg">
              Select services, add to cart, and book via WhatsApp
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <div className="lg:col-span-2 space-y-6">
              {/* Services Grid */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceClick(service)}
                        className="p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-teal-500 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{service.name}</h3>
                            <p className="text-xs text-gray-500 mb-2">{service.duration}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">From ₹{service.startingPrice}</span>
                              <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Full Name *</Label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label>Complete Address in Delhi *</Label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={3}
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                      placeholder="House no., street, area, landmark"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-teal-200">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5 text-teal-600" />
                    <span>Your Cart ({cartItems.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Your cart is empty</p>
                      <p className="text-sm">Add services to get started</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {cartItems.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <p className="font-semibold text-sm">{item.serviceName}</p>
                                <p className="text-xs text-gray-600">{item.type}</p>
                              </div>
                              <button
                                onClick={() => handleRemoveItem(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleQuantityChange(index, -1)}
                                  className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm font-medium w-6 text-center">{item.quantity || 1}</span>
                                <button
                                  onClick={() => handleQuantityChange(index, 1)}
                                  className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="text-sm font-semibold">₹{item.price * (item.quantity || 1)}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-semibold">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                          <span className="font-medium">Discount (10% OFF)</span>
                          <span className="font-semibold">- ₹{discountAmount}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-bold">Total</span>
                          <div className="text-right">
                            <div className="text-sm text-gray-400 line-through">₹{subtotal}</div>
                            <div className="text-2xl font-bold text-teal-600">₹{finalPrice}</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-4">
                          <p className="font-semibold text-green-800 text-sm mb-1">🎉 You Save ₹{discountAmount}!</p>
                          <p className="text-xs text-green-700">10% discount applied on total</p>
                        </div>

                        <Button
                          onClick={handleBooking}
                          className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-6 text-lg"
                        >
                          <MessageCircle className="mr-2 w-5 h-5" />
                          Book via WhatsApp
                        </Button>

                        <p className="text-xs text-gray-500 text-center mt-2">
                          You'll be redirected to WhatsApp to confirm
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default BookNow;
