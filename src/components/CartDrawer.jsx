import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isDrawerOpen, setIsDrawerOpen, getWhatsAppMessage } = useCart();

  const phoneNumber = "233508396233";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${getWhatsAppMessage()}`;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-brand-brown/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white shadow-2xl z-[110] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-brand-brown/5 flex items-center justify-between bg-brand-cream/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-gold" />
                <h2 className="text-2xl font-serif font-black text-brand-brown">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center text-brand-brown/20">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-brown">Your cart is empty</h3>
                    <p className="text-brand-brown/40 text-sm mt-1">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="bg-brand-brown text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all mt-4"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-cream shrink-0 border border-brand-brown/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-brand-brown leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-brand-brown/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-brand-gold font-bold text-sm mt-1">GHS {item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-brand-cream/50 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-all text-brand-brown"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-black text-brand-brown">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-all text-brand-brown"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-xs font-black text-brand-brown/40">
                          Total: GHS {(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-brand-cream/10 border-t border-brand-brown/5 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-brand-brown/60 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-2xl font-serif font-black text-brand-brown">GHS {cartTotal.toFixed(2)}</span>
                </div>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <MessageSquare size={20} />
                  Checkout via WhatsApp
                </a>
                <p className="text-[10px] text-center text-brand-brown/40 uppercase tracking-widest leading-relaxed">
                  Clicking checkout will open WhatsApp with your <br />order details ready to send.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
