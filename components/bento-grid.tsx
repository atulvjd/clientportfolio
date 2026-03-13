'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid gap-3 sm:gap-4 md:gap-6 lg:gap-8',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        'auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[360px] lg:auto-rows-[400px]',
        className
      )}
    >
      {children}
    </div>
  );
}

export interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 'default' | 'wide' | 'tall' | 'large';
  delay?: number;
}

export function BentoCard({
  children,
  className,
  span = 'default',
  delay = 0,
}: BentoCardProps) {
  const spanClasses = {
    default: 'col-span-1 row-span-1',
    wide: 'col-span-1 sm:col-span-2',
    tall: 'row-span-1 sm:row-span-2',
    large: 'col-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        'bento-item group relative overflow-hidden cursor-pointer',
        spanClasses[span],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
}
