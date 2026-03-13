'use client';

import { SectionContainer, SectionTitle } from './section-container';
import { TimelineItem } from './cards';
import { experience } from '@/lib/constants';

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" className="bg-gradient-to-b from-background to-background/50">
      <div className="max-w-3xl mx-auto w-full">
        <SectionTitle
          title="Professional Experience"
          subtitle="My journey through different roles and companies"
        />

        <div className="space-y-2">
          {experience.map((job, idx) => (
            <TimelineItem
              key={job.id}
              company={job.company}
              position={job.position}
              period={job.period}
              description={job.description}
              highlights={job.highlights}
              isFirst={idx === 0}
              isLast={idx === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
