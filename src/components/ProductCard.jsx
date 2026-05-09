import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-transparent"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream mb-6 rounded-3xl shadow-sm group-hover:shadow-xl transition-all duration-500">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/5 transition-colors duration-500" />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-brand-brown text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl hover:bg-brand-gold transition-colors"
          >
            <Plus size={18} />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="space-y-1 text-center md:text-left px-2">
        <h3 className="text-xl font-bold text-brand-brown tracking-tight group-hover:text-brand-gold transition-colors">{product.name}</h3>
        <p className="text-brand-gold font-black tracking-widest text-sm">
          {product.currency} {product.price}.00
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
