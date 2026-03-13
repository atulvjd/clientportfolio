'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData, Project } from '@/lib/data';
import { BentoGrid } from '@/components/bento-grid';
import { ProjectBentoCard } from '@/components/bento-cards';

const categories = ['all', 'web', 'mobile', 'design', 'backend'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of projects I've worked on, showcasing my skills and experience in web development,
            mobile apps, and design systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50'
                  : 'glass hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid>
            {filteredProjects.map((project, idx) => (
              <ProjectBentoCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                link={`#${project.id}`}
                delay={idx * 0.05}
                span={idx % 3 === 0 ? 'large' : 'wide'}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
