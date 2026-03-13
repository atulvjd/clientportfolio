'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { SkillsGrid } from '@/components/skills-grid';

export default function Skills() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Over the years, I've developed expertise in various technologies and frameworks. Here's what I'm
            skilled in and constantly learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <SkillsGrid skills={portfolioData.skills} />

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              I'm committed to staying up-to-date with the latest technologies and best practices. I regularly
              explore new frameworks, tools, and methodologies to improve my craft.
            </p>
          </div>

          <div className="glass p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Best Practices</h3>
            <p className="text-muted-foreground">
              I follow industry best practices including clean code principles, responsive design, accessibility
              standards, and performance optimization techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
