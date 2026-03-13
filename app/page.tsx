'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { BentoGrid, BentoCard } from '@/components/bento-grid';
import {
  HeroCard,
  StatCard,
  SkillCard,
  ProjectBentoCard,
  TextCard,
  ServiceCard,
  TestimonialCard,
} from '@/components/bento-cards';

export default function Home() {
  return (
    <main className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Hero Bento Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24 md:mb-32">
        <BentoGrid>
          {/* Main Hero Card */}
          <HeroCard
            title="Building AI Systems & Modern Software"
            subtitle="Welcome"
            description="Designing beautiful digital experiences with cutting-edge technology and thoughtful engineering."
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            span="large"
            delay={0}
          />

          {/* Stats Cards */}
          {portfolioData.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              stat={stat.value}
              label={stat.label}
              delay={0.1 * (idx + 1)}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24 md:mb-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">What I Do</h2>
        <BentoGrid>
          {portfolioData.services?.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={idx * 0.1}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24 md:mb-32">
        <div className="flex items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Showcasing my latest work and innovations</p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-accent hover:gap-3 transition-all font-semibold whitespace-nowrap"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>
        <BentoGrid>
          {portfolioData.projects.slice(0, 3).map((project, idx) => (
            <ProjectBentoCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.technologies}
              link={`/projects#${project.id}`}
              delay={idx * 0.1}
              span={idx === 0 ? 'large' : 'wide'}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Skills Highlight Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24 md:mb-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Technical Stack</h2>
        <BentoGrid>
          {portfolioData.skills.map((skillGroup, idx) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.items}
              delay={idx * 0.1}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-16 sm:mb-24 md:mb-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Client Testimonials</h2>
        <BentoGrid>
          {portfolioData.testimonials?.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              delay={idx * 0.1}
            />
          ))}
        </BentoGrid>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <BentoGrid>
          <BentoCard span="large" className="flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Let's Create Something <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                I'm always interested in hearing about new projects, innovative ideas, and exciting collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 rounded-lg glass hover:bg-white/10 transition-colors text-white font-semibold"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>
    </main>
  );
}
