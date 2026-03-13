'use client';

import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle, ContentGrid } from './section-container';
import { GlassCard, SkillBadge } from './cards';
import { skills } from '@/lib/constants';

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <ContentGrid columns={2}>
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold gradient-text">
                    {skill.category}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                    {skill.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <SkillBadge key={item} label={item} variant="primary" />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </ContentGrid>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Full Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Frontend</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  React, Next.js, Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3, Responsive Design
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Backend</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Node.js, Express, Python, REST APIs, GraphQL, Microservices, serverless
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Infrastructure</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  AWS, Docker, Kubernetes, CI/CD, PostgreSQL, MongoDB, Redis, Git
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
