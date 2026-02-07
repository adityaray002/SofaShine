import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('sofashine_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sofashine_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (packages) => {
    const newItems = packages.map(pkg => ({
      ...pkg,
      cartId: Date.now() + Math.random(), // Unique ID for cart item
      quantity: pkg.quantity || 1,
      addedAt: new Date().toISOString()
    }));
    
    setCartItems(prev => [...prev, ...newItems]);
    toast.success(`${packages.length} item(s) added to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    toast.info('Item removed from cart');
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.cartId === cartId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared');
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const getDiscountAmount = () => {
    return Math.round(getCartTotal() * 0.1); // 10% discount
  };

  const getFinalTotal = () => {
    return getCartTotal() - getDiscountAmount();
  };

  const value = {
    cartItems,
    cartCount: cartItems.length,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getDiscountAmount,
    getFinalTotal,
    isCartOpen,
    setIsCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
