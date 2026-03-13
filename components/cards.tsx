'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        'glass p-4 sm:p-6 rounded-lg border border-border/50 cursor-pointer transition-all',
        hover && 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

interface SkillBadgeProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function SkillBadge({ label, variant = 'primary' }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'px-3 py-1 rounded-full text-sm font-medium border',
        variant === 'primary'
          ? 'bg-primary/10 border-primary/30 text-primary'
          : 'bg-accent/10 border-accent/30 text-accent'
      )}
    >
      {label}
    </motion.div>
  );
}

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

export function TimelineItem({
  company,
  position,
  period,
  description,
  highlights,
  isFirst,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      <GlassCard className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">{position}</h3>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
          <span className="text-sm text-accent whitespace-nowrap">{period}</span>
        </div>

        <p className="text-sm text-foreground/80 mb-3">{description}</p>

        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-foreground/70 flex gap-2">
              <span className="text-primary mt-1">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}

interface StatsCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export function StatsCard({ value, label, suffix }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="glass p-8 rounded-lg text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  category,
  link,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <GlassCard className="flex flex-col h-full" hover>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </div>

      <a
        href={link}
        className="text-primary text-sm font-medium hover:text-accent transition-colors mt-4 inline-flex items-center gap-1"
      >
        Read More →
      </a>
    </GlassCard>
  );
}
