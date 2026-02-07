import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, MessageCircle, Tag } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    cartCount,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getDiscountAmount,
    getFinalTotal
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleBooking = () => {
    if (cartCount === 0) {
      toast.error('Your cart is empty');
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
      subtotal: getCartTotal(),
      discount: getDiscountAmount(),
      total: getFinalTotal(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    // Create WhatsApp message
    const itemsList = cartItems.map(item => 
      `${item.serviceName} - ${item.type} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`
    ).join('\\n');

    const message = `*New Booking Request - SofaShine*\\n\\n*Customer Details:*\\nName: ${customerName}\\nPhone: ${customerPhone}\\nAddress: ${address}\\n\\n*Services Booked:*\\n${itemsList}\\n\\n*Payment Summary:*\\nSubtotal: ₹${getCartTotal()}\\nDiscount (10% OFF): -₹${getDiscountAmount()}\\n*Total Amount: ₹${getFinalTotal()}*\\n\\nPlease confirm availability!`;

    const whatsappURL = `https://wa.me/918920536399?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Clear cart and redirect
    clearCart();
    toast.success('Booking request sent! Check WhatsApp.');
    setTimeout(() => navigate('/'), 2000);
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Add services to get started with your booking</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Browse Services
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Cart</h1>
            <p className="text-gray-600">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Selected Services</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Clear All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.cartId} className="p-4 border-2 border-gray-100 rounded-lg hover:border-teal-200 transition-all">
                      <div className="flex items-start space-x-4">
                        <img
                          src={`https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=100&h=100&fit=crop`}
                          alt={item.serviceName}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-gray-900">{item.serviceName}</h3>
                              <p className="text-sm text-gray-600">{item.type}</p>
                              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.cartId)}
                              className="text-red-500 hover:text-red-700 p-2"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                className="w-8 h-8 rounded border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-lg font-semibold w-10 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                className="w-8 h-8 rounded border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500">₹{item.price} × {item.quantity}</p>
                              <p className="text-lg font-bold text-teal-600">₹{item.price * item.quantity}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      className="w-full mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label>Complete Address in Delhi *</Label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={3}
                      className="w-full mt-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                      placeholder="House no., street, area, landmark"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-teal-200">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
                  <CardTitle>Price Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                      <span className="font-semibold">₹{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-1 text-green-600">
                        <Tag className="w-4 h-4" />
                        <span className="font-medium">Discount (10% OFF)</span>
                      </div>
                      <span className="font-semibold text-green-600">- ₹{getDiscountAmount()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total Amount</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">₹{getCartTotal()}</div>
                        <div className="text-2xl font-bold text-teal-600">₹{getFinalTotal()}</div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200 mb-6">
                      <p className="font-semibold text-green-800 mb-1">🎉 You Save ₹{getDiscountAmount()}!</p>
                      <p className="text-sm text-green-700">10% discount applied on total</p>
                    </div>

                    <Button
                      onClick={handleBooking}
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-6 text-lg"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Book via WhatsApp
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      You'll be redirected to WhatsApp to confirm your booking
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
