'use client';

import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle, ContentGrid } from './section-container';
import { StatsCard } from './cards';
import { stats } from '@/lib/constants';

export function StatsSection() {
  return (
    <SectionContainer id="stats" className="bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle
          title="By The Numbers"
          subtitle="A quick look at my professional journey"
        />

        <ContentGrid columns={4}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <StatsCard
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </ContentGrid>
      </div>
    </SectionContainer>
  );
}
