'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ExperienceTimeline } from '@/components/experience-timeline';

export default function About() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I'm a passionate full stack developer with a mission to create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="glass p-6 sm:p-8 rounded-lg mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Journey</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{portfolioData.bio}</p>
            <p>
              Throughout my career, I've had the opportunity to work with talented teams and deliver
              solutions that make a real impact. I'm passionate about clean code, user-centered design,
              and continuous learning.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Professional Experience</h2>
          <ExperienceTimeline experiences={portfolioData.experience} />
        </motion.div>
      </div>
    </main>
  );
}
