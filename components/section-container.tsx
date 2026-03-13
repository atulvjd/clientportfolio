'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlighted?: string;
}

export function SectionTitle({
  title,
  subtitle,
  highlighted,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance-wrap">
        <span className="gradient-text">{title}</span>
        {highlighted && (
          <span className="block text-primary mt-2">{highlighted}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance-wrap">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface ContentGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function ContentGrid({
  children,
  columns = 3,
  gap = 'lg',
}: ContentGridProps) {
  const gapClass = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-4 sm:gap-6 lg:gap-8',
  }[gap];

  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={cn('grid w-full max-w-6xl mx-auto', colClass, gapClass)}>
      {children}
    </div>
  );
}
