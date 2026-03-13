'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/data';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {skills.map((skillGroup, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="glass p-4 sm:p-6 rounded-lg"
        >
          <h3 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h3>
          <motion.ul
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {skillGroup.items.map((skill, sIdx) => (
              <motion.li
                key={sIdx}
                variants={itemVariants}
                className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </div>
  );
}
