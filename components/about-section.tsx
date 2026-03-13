'use client';

import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle } from './section-container';
import { GlassCard } from './cards';
import { resumeData } from '@/lib/constants';

const features = [
  {
    icon: '🚀',
    title: 'Fast & Performant',
    description: 'Building applications that are optimized for speed and efficiency.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Creating visually stunning interfaces with attention to detail.',
  },
  {
    icon: '🔧',
    title: 'Scalable Solutions',
    description: 'Architecting systems that grow with your business needs.',
  },
  {
    icon: '💡',
    title: 'Problem Solver',
    description: 'Tackling complex challenges with creative and practical solutions.',
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="max-w-5xl mx-auto w-full">
        <SectionTitle
          title="About Me"
          subtitle="Let me tell you a bit about myself and what drives my passion for development"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a full-stack developer with {new Date().getFullYear() - 2018} years of experience building web applications that solve real problems. My journey in tech started with a curiosity about how things work, which evolved into a passion for creating elegant solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud infrastructure. I'm committed to writing clean, maintainable code and continuously learning new technologies.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you can find me writing technical articles, contributing to open source, or exploring new programming paradigms.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="text-primary font-semibold">Email:</span>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {resumeData.email}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="text-primary font-semibold">Location:</span>
                <span className="text-foreground/70">{resumeData.location}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <GlassCard className="h-full">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
