import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingCart = () => {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getDiscountAmount,
    getFinalTotal,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const navigate = useNavigate();

  if (!isCartOpen && cartCount === 0) return null;

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <>
      {/* Desktop Floating Cart */}
      <div className={`hidden lg:block fixed right-0 top-20 z-40 transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <Card className="w-96 h-[calc(100vh-6rem)] shadow-2xl border-l-4 border-teal-500 overflow-hidden flex flex-col">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-teal-600" />
                <span>Cart ({cartCount})</span>
              </CardTitle>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4">
            {cartCount === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="font-medium">Your cart is empty</p>
                <p className="text-sm mt-2">Add services to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="p-3 bg-white border-2 border-gray-100 rounded-lg hover:border-teal-200 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">{item.serviceName}</p>
                        <p className="text-xs text-gray-600">{item.type}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-teal-600">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {cartCount > 0 && (
            <div className="border-t p-4 bg-white">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span className="font-medium">Discount (10%)</span>
                  <span className="font-semibold">- ₹{getDiscountAmount()}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-bold">Total</span>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 line-through">₹{getCartTotal()}</div>
                    <div className="text-xl font-bold text-teal-600">₹{getFinalTotal()}</div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleViewCart}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-3"
              >
                View Cart & Checkout
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </Card>
      </div>

      {/* Mobile Sticky Cart Button */}
      {cartCount > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
          <Button
            onClick={handleViewCart}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 text-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">₹{getFinalTotal()}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Button>
        </div>
      )}

      {/* Cart Toggle Button (when closed) */}
      {!isCartOpen && cartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="hidden lg:block fixed right-0 top-32 z-40 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">{cartCount}</span>
          </div>
        </button>
      )}
    </>
  );
};

export default FloatingCart;
