'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative pl-8 sm:pl-12"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent border-4 border-background" />
          
          {/* Timeline line (not last item) */}
          {idx !== experiences.length - 1 && (
            <div className="absolute left-[0.438rem] top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-accent/0" />
          )}

          {/* Content */}
          <div className="glass p-4 sm:p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-base text-accent font-semibold">
                  {exp.company}
                </p>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {exp.description}
            </p>

            <div className="space-y-2">
              {exp.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="flex-shrink-0 text-accent mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
