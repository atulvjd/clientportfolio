'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BentoCard } from './bento-grid';

export function HeroCard({
  title,
  subtitle,
  description,
  image,
  span = "large",
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  span?: 'default' | 'wide' | 'tall' | 'large';
  delay?: number;
}) {
  return (
    <BentoCard span={span} delay={delay} className="relative overflow-hidden">
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
      )}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 }}
            className="text-xs sm:text-sm text-accent font-semibold tracking-widest uppercase"
          >
            {subtitle}
          </motion.span>
        )}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm sm:text-base text-muted-foreground line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </BentoCard>
  );
}

export function StatCard({
  stat,
  label,
  delay = 0,
}: {
  stat: string | number;
  label: string;
  delay?: number;
}) {
  return (
    <BentoCard delay={delay} className="flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">
          {stat}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground font-medium">
          {label}
        </div>
      </motion.div>
    </BentoCard>
  );
}

export function SkillCard({
  category,
  skills,
  delay = 0,
}: {
  category: string;
  skills?: string[];
  delay?: number;
}) {
  // Handle both direct skills array and items property from data structure
  const skillsList = Array.isArray(skills) ? skills : [];

  if (skillsList.length === 0) {
    return null;
  }

  return (
    <BentoCard delay={delay} className="flex flex-col justify-between">
      <h3 className="text-lg sm:text-xl font-bold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}

export function ProjectBentoCard({
  title,
  description,
  image,
  tags,
  link,
  span = "wide",
  delay = 0,
}: {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  span?: 'default' | 'wide' | 'tall' | 'large';
  delay?: number;
}) {
  return (
    <BentoCard span={span} delay={delay} className="group overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
        </div>
      )}
      <div className="relative z-10 flex flex-col justify-end h-full">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all text-sm font-semibold w-fit group"
        >
          View Project
          <ArrowUpRight size={16} className="group-hover:scale-110 transition-transform" />
        </Link>
      </div>
    </BentoCard>
  );
}

export function TextCard({
  title,
  description,
  children,
  delay = 0,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
  delay?: number;
}) {
  return (
    <BentoCard delay={delay} className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-4">{description}</p>
        )}
      </div>
      {children}
    </BentoCard>
  );
}
