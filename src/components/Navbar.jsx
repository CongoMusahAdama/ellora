import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsDrawerOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      subLinks: [
        { name: 'Our Story', path: '/about' },
        { name: 'Sustainability', path: '/about' },
        { name: 'Ethical Sourcing', path: '/about' },
        { name: 'Founder Profile', path: '/about' }
      ]
    },
    { 
      name: 'Impact', 
      path: '/impact',
      subLinks: [
        { name: 'Community Care', path: '/impact' },
        { name: 'Environmental Impact', path: '/impact' },
        { name: 'Empowerment', path: '/impact' }
      ]
    },
    { 
      name: 'Shop', 
      path: '/shop',
      subLinks: [
        { name: 'New Arrivals', path: '/shop' },
        { name: 'Face Essentials', path: '/shop' },
        { name: 'Body Care', path: '/shop' },
        { name: 'Special Bundles', path: '/shop' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-700 ease-in-out ${scrolled ? 'pt-0' : 'pt-2'}`}>
        <div className={`w-full px-8 lg:px-16 transition-all duration-500 ${
          scrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-xl border-b border-brand-brown/5 py-3' 
          : 'bg-transparent py-6'
        }`}>
          <div className="flex justify-between items-center w-full">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-black tracking-tight text-brand-brown transition-colors duration-500">
                  ELLORA
                </span>
                <div className="h-[2px] w-0 group-hover:w-full bg-brand-gold transition-all duration-300"></div>
              </div>
              <span className="ml-3 text-[11px] uppercase tracking-[0.4em] text-brand-gold font-bold hidden sm:block border-l border-brand-gold/30 pl-3">Cosmetics</span>
            </Link>

            {/* Nav Items */}
            <div className="flex items-center space-x-12">
              <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group/link py-4">
                    <Link
                      to={link.path}
                      className={`relative text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-gold py-2 flex items-center gap-1 ${
                        isActive(link.path) ? 'text-brand-gold' : 'text-brand-brown'
                      }`}
                    >
                      {link.name}
                      {link.subLinks && <ChevronDown size={12} className="group-hover/link:rotate-180 transition-transform duration-300" />}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.subLinks && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-4 pointer-events-none group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:pointer-events-auto transition-all duration-300">
                        <div className="bg-white min-w-[240px] shadow-[0_20px_50px_rgba(59,31,14,0.15)] border-t-2 border-brand-gold rounded-b-xl overflow-hidden py-4">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-8 py-3 text-[11px] font-bold text-brand-brown/70 hover:text-brand-gold hover:bg-brand-gold/5 uppercase tracking-widest transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {isActive(link.path) && (
                      <motion.div 
                        layoutId="nav-line"
                        className="absolute bottom-2 left-0 w-full h-[2px] bg-brand-gold"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Cart & Shop CTA */}
              <div className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="relative p-2 text-brand-brown hover:text-brand-gold transition-colors"
                >
                  <ShoppingBag size={24} strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-brand-gold text-brand-brown text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </button>

                <Link to="/shop" className="group relative bg-brand-brown text-white px-8 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3">
                  <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <ShoppingBag size={16} className="relative z-10 group-hover:text-brand-brown transition-colors" />
                  <span className="relative z-10 group-hover:text-brand-brown transition-colors">Shop Now</span>
                </Link>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden flex items-center space-x-4">
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="relative p-2 text-brand-brown"
                >
                  <ShoppingBag size={24} />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-brand-gold text-brand-brown text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-brand-brown p-2 hover:bg-brand-brown hover:text-white rounded-lg transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-[80] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-serif font-black text-brand-brown">ELLORA</span>
                <button onClick={() => setIsOpen(false)} className="text-brand-brown hover:rotate-90 transition-all">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-serif font-bold transition-all ${
                        isActive(link.path) ? 'text-brand-gold' : 'text-brand-brown'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-brand-gold/20">
                        {link.subLinks.map(sub => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            onClick={() => setIsOpen(false)} 
                            className="text-sm font-bold text-brand-brown/60 uppercase tracking-widest"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-brown text-white px-8 py-5 rounded-2xl text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={20} />
                  Shop Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;


