import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative inline-block"
        >
          <h1 className="text-[10rem] font-serif font-black text-brand-brown/10 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-4xl font-serif font-bold text-brand-gold italic">Oops!</span>
          </div>
        </motion.div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-serif font-bold text-brand-brown">Page Not Found</h2>
          <p className="text-brand-brown/60">
            It seems like you've wandered off the natural path. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 bg-brand-brown text-white px-10 py-4 rounded-full font-bold hover:bg-brand-gold transition-all shadow-xl"
          >
            <Home size={20} />
            Go Back Home
          </Link>
        </div>
        
        <Link 
          to="/shop" 
          className="block text-brand-brown/50 hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-xs"
        >
          Or Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
