'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      className="group glass p-4 sm:p-6 rounded-lg flex flex-col h-full cursor-pointer"
    >
      {/* Category Badge */}
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4 pt-4 border-t border-border/30">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{post.readTime} min read</span>
        </div>
      </div>

      {/* Read More Link */}
      <Link
        href={`/blog/${post.slug}`}
        className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all text-sm font-semibold"
      >
        Read More
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
