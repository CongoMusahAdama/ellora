import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Search, Filter, X, ChevronDown, Heart, ArrowRight, Plus } from 'lucide-react';
import { products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import shopPromoImg from '../assets/shop_promo.png';
import newRicePattern from '../assets/new_rice_pattern.png';
import mosaicImg from '../assets/image.png';
import { useCart } from '../context/CartContext';


const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(200);
  const [activeSize, setActiveSize] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', 'Face', 'Body', 'Hair', 'Bundles'];
  const sizes = ['All', 'Standard (100g)', 'Jar (250ml)', 'Bar (120g)', 'Spray (100ml)', 'Small (50ml)', 'Large (200ml)', 'Full Set'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesPrice = product.price <= priceRange;
      const matchesSize = activeSize === 'All' || product.size === activeSize;
      return matchesSearch && matchesCategory && matchesPrice && matchesSize;
    });
  }, [searchQuery, activeCategory, priceRange, activeSize]);

  // Duplicate for 16 products as requested
  const displayProducts = [...filteredProducts, ...filteredProducts].slice(0, 16);

  return (
    <div className="pt-20 lg:pt-32 min-h-screen bg-white">
      {/* 1. SHOP HERO - FULL BACKGROUND STYLE */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden bg-brand-brown mx-4 md:mx-8 rounded-[2rem] md:rounded-[3rem]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={mosaicImg} alt="Background" className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/60 to-transparent"></div>
        </div>

        {/* Rice Pattern watermark */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.25] pointer-events-none mix-blend-overlay z-10">
          <img src={newRicePattern} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20 w-full">
          <div className="max-w-2xl py-12 lg:py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-4xl md:text-7xl font-serif font-black text-white leading-tight">
                Shop <span className="text-brand-gold italic">Clean</span> Beauty
              </h1>
              <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-lg">
                Discover our full range of rice-based essentials. Sustainable, ethical, and crafted for your radiant glow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER BAR */}
      <section className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-brand-brown/5 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/40" size={16} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-6 py-3 bg-brand-cream/30 border border-brand-brown/10 rounded-full text-xs md:text-sm focus:outline-none focus:border-brand-gold transition-all"
              />
            </div>

            {/* Filters - Horizontal Scroll on Mobile */}
            <div className="flex items-center gap-6 w-full lg:w-2/3 lg:justify-end overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[9px] uppercase font-black tracking-widest text-brand-brown/40">Category:</span>
                <select 
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="bg-transparent text-[11px] font-bold text-brand-brown focus:outline-none cursor-pointer"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[9px] uppercase font-black tracking-widest text-brand-brown/40">Size:</span>
                <select 
                  value={activeSize}
                  onChange={(e) => setActiveSize(e.target.value)}
                  className="bg-transparent text-[11px] font-bold text-brand-brown focus:outline-none cursor-pointer"
                >
                  {sizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-4 min-w-[120px] shrink-0">
                <span className="text-[9px] uppercase font-black tracking-widest text-brand-brown/40 whitespace-nowrap">Price: <span className="text-brand-brown">GHS {priceRange}</span></span>
                <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="accent-brand-gold h-1 flex-1 min-w-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-brand-brown">Our Collection</h2>
              <p className="text-brand-brown/50 text-xs mt-1">Showing {displayProducts.length} results</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
            {displayProducts.map((product, idx) => (
              <motion.div 
                key={`${product.id}-${idx}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-[#f8f6f2] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-brown text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
                      New
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-brown/40 hover:text-brand-peach transition-colors shadow-sm">
                    <Heart size={16} />
                  </button>
                  {/* Mobile Quick Order always visible/easier access */}
                  <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                     <button 
                       onClick={() => addToCart(product)}
                       className="w-full bg-brand-brown text-white py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-xs md:text-sm font-bold shadow-2xl hover:bg-brand-gold transition-colors"
                     >
                       <Plus size={14} className="md:size-[18px]" />
                       Add to Cart
                     </button>
                  </div>
                </div>
                
                <div className="space-y-1 md:space-y-2 text-center">
                  <div className="flex justify-center gap-0.5 md:gap-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={10} md:size={12} fill="#D4AF37" color="#D4AF37" />)}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-brand-brown group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <span className="text-brand-gold font-bold text-base md:text-lg">{product.currency} {product.price}</span>
                    <span className="text-brand-brown/30 line-through text-xs md:text-sm">{product.currency} {(parseFloat(product.price) * 1.2).toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 text-center px-4">
            <WhatsAppButton 
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-cream border-2 border-brand-brown text-brand-brown px-12 py-4 rounded-full font-bold hover:bg-brand-brown hover:text-white transition-all shadow-lg text-sm md:text-base"
              message="Hi, I want to see more products!"
            >
              View More Products
              <ArrowRight size={20} />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 5. BULK ORDERS */}
      <section className="py-16 md:py-24 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-brown rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <img src={newRicePattern} alt="" className="w-full h-full object-cover rotate-45 scale-150" />
            </div>
            <h3 className="text-2xl md:text-5xl font-serif font-bold italic mb-4 md:mb-6 relative z-10">Bulk Orders</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 md:mb-10 text-sm md:text-lg relative z-10">
              We provide custom sizes and packaging for hotels, spas, and special events.
            </p>
            <WhatsAppButton 
              message="Hi Ellora, I'm interested in wholesale/bulk orders!"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-brown px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-xl hover:scale-105 transition-all shadow-xl relative z-10"
            >
              <ShoppingBag size={20} md:size={24} />
              Inquire Wholesale
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default Shop;
