'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center pt-24 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance-wrap"
        >
          <span className="block mb-2">Hi, I'm</span>
          <span className="gradient-text">{resumeData.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance-wrap"
        >
          {resumeData.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto text-balance-wrap leading-relaxed"
        >
          {resumeData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap"
        >
          {[
            {
              icon: Github,
              href: resumeData.github,
              label: 'GitHub',
            },
            {
              icon: Linkedin,
              href: resumeData.linkedin,
              label: 'LinkedIn',
            },
            {
              icon: Mail,
              href: `mailto:${resumeData.email}`,
              label: 'Email',
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-lg glass border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full mt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
