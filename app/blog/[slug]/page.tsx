'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  
  const post = portfolioData.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/30">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl mb-12">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-8">
              "{post.excerpt}"
            </p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This is a placeholder for the blog post content. In a real application, 
                this content would be fetched from a CMS or loaded from a Markdown file.
              </p>
              <p>
                The blog post titled <strong>{post.title}</strong> discusses various aspects of 
                {post.category.toLowerCase()} and provides insights into modern development practices.
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding the fundamentals of {post.category}</li>
                <li>Best practices for scalable development</li>
                <li>Performance optimization techniques</li>
                <li>Future trends in the industry</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Share it with your network or reach out to discuss the topics covered.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => router.push('/contact')}>
                Get in Touch
              </Button>
              <Button onClick={() => router.push('/projects')}>
                See My Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
