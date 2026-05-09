import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif font-bold">ELLORA</span>
              <span className="block text-xs uppercase tracking-widest text-brand-gold">Cosmetics</span>
            </Link>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              A Healthier, Radiant You — Naturally. We upcycle rice waste into premium, clean beauty products for the modern African consumer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-serif text-xl">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Impact', 'Shop', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-serif text-xl">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-sm text-brand-cream/70">elloracosmeticsgh@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-sm text-brand-cream/70">0508396233</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-sm text-brand-cream/70">Sunyani, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-serif text-xl">Stay Updated</h4>
            <p className="text-sm text-brand-cream/70">Subscribe for clean beauty tips and exclusive offers.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="bg-brand-gold text-brand-brown font-bold py-3 rounded-lg text-sm hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/10 text-center">
          <p className="text-xs text-brand-cream/50">
            © 2025 Ellora Cosmetics. All rights reserved. Made with ♡ in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
