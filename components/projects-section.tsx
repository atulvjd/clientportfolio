'use client';

import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle, ContentGrid } from './section-container';
import { GlassCard, SkillBadge } from './cards';
import { projects } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my best work and notable achievements"
        />

        <ContentGrid columns={1}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <GlassCard className="overflow-hidden hover:border-primary/50">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70">{project.description}</p>
                    </div>
                    <motion.a
                      href={project.link}
                      className="p-2 rounded-lg glass border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <SkillBadge
                        key={tech}
                        label={tech}
                        variant="secondary"
                      />
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border/30">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm"
                      >
                        <div className="text-primary font-semibold">{highlight.split(' ')[0]}</div>
                        <div className="text-foreground/60 text-xs">
                          {highlight.substring(highlight.indexOf(' ') + 1)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </ContentGrid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 mb-4">Interested in more projects?</p>
          <motion.a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/5 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View on GitHub <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
