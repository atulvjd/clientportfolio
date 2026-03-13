'use client';

import { SectionContainer, SectionTitle, ContentGrid } from './section-container';
import { BlogCard } from './cards';
import { blog } from '@/lib/constants';
import { motion } from 'framer-motion';

export function BlogSection() {
  return (
    <SectionContainer id="blog">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle
          title="Latest Articles"
          subtitle="Thoughts on web development, architecture, and technology trends"
        />

        <ContentGrid columns={3}>
          {blog.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <BlogCard
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                link={article.link}
              />
            </motion.div>
          ))}
        </ContentGrid>
      </div>
    </SectionContainer>
  );
}
