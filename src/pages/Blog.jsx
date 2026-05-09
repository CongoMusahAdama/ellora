import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { FaInstagram } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-brand-brown"
            >
              Clean Beauty <span className="text-brand-gold italic">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-brown/60 max-w-2xl mx-auto text-lg"
            >
              Expert tips on sustainable living, skin health, and the science of rice-based beauty.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-24 bg-brand-cream rounded-[4rem] p-16 text-center border border-brand-brown/5">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-sm text-brand-gold">
                <FaInstagram size={40} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-brown">More Posts Coming Soon</h3>
              <p className="text-brand-brown/70 text-lg">
                We're busy in the lab and on the farms, but we have many more stories to tell. 
                Follow us on Instagram for daily clean beauty inspiration.
              </p>
              <a 
                href="https://instagram.com/elloracosmetics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-brown text-white px-10 py-4 rounded-full font-bold hover:bg-brand-gold transition-colors"
              >
                Follow @elloracosmetics
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
