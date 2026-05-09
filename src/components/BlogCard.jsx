import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-brown/5 hover:shadow-lg transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-brown text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center text-xs text-brand-brown/50 gap-2">
          <Calendar size={14} />
          {post.date}
        </div>
        
        <h3 className="text-xl font-serif font-bold text-brand-brown group-hover:text-brand-gold transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-brand-brown/70 text-sm line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm hover:translate-x-1 transition-transform"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
