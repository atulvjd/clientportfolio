'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/data';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      className="group glass rounded-xl overflow-hidden cursor-pointer h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 bg-muted overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
             <div className="text-5xl font-bold opacity-20 text-foreground/30">{project.id}</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-4 space-y-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{metric.label}</span>
                <span className="text-accent font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary border border-primary/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary border border-primary/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-border/30">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              <span>Visit</span>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
