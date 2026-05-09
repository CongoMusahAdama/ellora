import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('ellora_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ellora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const getWhatsAppMessage = () => {
    let message = "Hi Ellora! I'd like to place an order for:\n\n";
    cart.forEach((item) => {
      message += `• ${item.name} (${item.quantity}x) - GHS ${(parseFloat(item.price) * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal: GHS ${cartTotal.toFixed(2)}`;
    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isDrawerOpen,
        setIsDrawerOpen,
        getWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
