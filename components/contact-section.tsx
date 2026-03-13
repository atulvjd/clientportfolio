'use client';

import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle } from './section-container';
import { GlassCard } from './cards';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { resumeData } from '@/lib/constants';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: resumeData.phone,
    href: `tel:${resumeData.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: resumeData.location,
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: resumeData.github, label: 'GitHub' },
  { icon: Linkedin, href: resumeData.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: resumeData.twitter, label: 'Twitter' },
];

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle
          title="Get In Touch"
          subtitle="I'm always interested in hearing about new projects and opportunities"
        />

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <GlassCard className="h-full text-center hover:border-primary/50">
                <method.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{method.label}</h3>
                <p className="text-sm text-foreground/70 break-all">
                  {method.value}
                </p>
              </GlassCard>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <GlassCard className="text-center p-12">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to work together?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Feel free to reach out for collaborations or just a friendly hello. I'll try my best to get back to you!
            </p>
            <motion.a
              href={`mailto:${resumeData.email}`}
              className="inline-flex px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send me an Email
            </motion.a>
          </GlassCard>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center gap-4 mt-12"
        >
          {socialLinks.map((social) => (
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
      </div>
    </SectionContainer>
  );
}
