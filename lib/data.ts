export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'backend';
  link?: string;
  github?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export const portfolioData = {
  name: 'Alex Chen',
  title: 'Full Stack Developer',
  subtitle: 'Crafting Digital Experiences',
  bio: 'I am a passionate full stack developer with 5+ years of experience building scalable web applications. I specialize in modern web technologies and love creating intuitive user experiences.',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  social: [
    { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  ],
  projects: [
    {
      id: '1',
      title: 'NextAI Analytics Platform',
      description: 'A comprehensive analytics platform for AI-powered insights with real-time data processing and visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f9a5?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL'],
      category: 'web',
      link: 'https://example.com',
      github: 'https://github.com/alexchen/nextai-analytics',
      metrics: [
        { label: 'Performance', value: '98/100' },
        { label: 'Users', value: '5K+' },
        { label: 'Uptime', value: '99.9%' },
      ],
    },
    {
      id: '2',
      title: 'Mobile Fitness Tracker',
      description: 'Native iOS and Android app for tracking workouts, nutrition, and personal fitness goals with cloud sync.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      category: 'mobile',
      github: 'https://github.com/alexchen/fitness-tracker',
    },
    {
      id: '3',
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'React', 'PostgreSQL'],
      category: 'web',
      link: 'https://example-store.com',
      metrics: [
        { label: 'Products', value: '10K+' },
        { label: 'Conversion', value: '3.2%' },
        { label: 'Monthly Revenue', value: '$50K+' },
      ],
    },
    {
      id: '4',
      title: 'Design System Library',
      description: 'Comprehensive design system and component library with documentation and interactive examples.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
      technologies: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS'],
      category: 'design',
      github: 'https://github.com/alexchen/design-system',
    },
    {
      id: '5',
      title: 'Real-time Collaboration App',
      description: 'Collaborative workspace application with real-time editing, comments, and team features.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Next.js', 'WebSockets', 'MongoDB', 'Redux', 'Material-UI'],
      category: 'web',
      link: 'https://collab.example.com',
    },
    {
      id: '6',
      title: 'Data Migration Tool',
      description: 'Backend service for migrating large datasets across multiple database systems with validation and rollback.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2022&auto=format&fit=crop',
      technologies: ['Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Bull Queue'],
      category: 'backend',
      github: 'https://github.com/alexchen/data-migration',
    },
  ] as Project[],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vue.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Docker'],
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'Vercel', 'AWS', 'CI/CD', 'Linux', 'Webpack', 'ESLint'],
    },
    {
      category: 'Design',
      items: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Design Systems'],
    },
  ] as Skill[],
  experience: [
    {
      id: '1',
      company: 'Tech Innovations Inc.',
      role: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Leading development of enterprise-scale web applications with a team of 8 developers.',
      highlights: [
        'Architected and launched 3 major SaaS products used by 10K+ users',
        'Improved application performance by 45% through optimization and caching strategies',
        'Mentored 5 junior developers and established best practices for the team',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      id: '2',
      company: 'Digital Agency Pro',
      role: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Built custom web solutions for 20+ clients across various industries.',
      highlights: [
        'Developed responsive websites and applications for diverse client requirements',
        'Increased client satisfaction scores by 35% through improved UX design',
        'Reduced project delivery time by 25% using modern development frameworks',
        'Managed databases and implemented secure authentication systems',
      ],
    },
    {
      id: '3',
      company: 'StartUp Labs',
      role: 'Junior Full Stack Developer',
      period: '2018 - 2019',
      description: 'Contributed to the development of a mobile-first marketplace platform.',
      highlights: [
        'Built responsive UI components using React and modern CSS techniques',
        'Developed RESTful APIs using Node.js and Express',
        'Collaborated with designers and product managers in Agile environment',
        'Implemented user authentication and authorization systems',
      ],
    },
  ] as Experience[],
  blogPosts: [
    {
      id: '1',
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Explore best practices for building large-scale applications that can handle millions of users.',
      category: 'Web Development',
      date: '2024-03-15',
      readTime: 8,
      slug: 'nextjs-scalable-apps',
    },
    {
      id: '2',
      title: 'The Future of TypeScript in Modern Development',
      excerpt: 'Why TypeScript has become essential for professional development and how to leverage it effectively.',
      category: 'Programming',
      date: '2024-03-10',
      readTime: 6,
      slug: 'typescript-future',
    },
    {
      id: '3',
      title: 'Mastering React Performance Optimization',
      excerpt: 'Advanced techniques to optimize React applications for better performance and user experience.',
      category: 'React',
      date: '2024-02-28',
      readTime: 10,
      slug: 'react-performance',
    },
    {
      id: '4',
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Essential patterns and best practices for designing databases that scale with your application.',
      category: 'Backend',
      date: '2024-02-20',
      readTime: 7,
      slug: 'database-patterns',
    },
  ] as BlogPost[],
  milestones: [
    {
      year: 2018,
      title: 'Started Programming Journey',
      description: 'Began learning web development and launched first project',
    },
    {
      year: 2019,
      title: 'First Professional Role',
      description: 'Joined StartUp Labs as Junior Developer',
    },
    {
      year: 2020,
      title: '1M+ Users Reached',
      description: 'Helped build application serving over 1 million users',
    },
    {
      year: 2021,
      title: 'Senior Developer',
      description: 'Promoted to Senior Full Stack Developer',
    },
    {
      year: 2024,
      title: 'Open Source Contributor',
      description: 'Active contributor to major open source projects',
    },
  ] as Milestone[],
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '30+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'GitHub Stars', value: '2.5K' },
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow',
      content: 'Alex is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into scalable solutions is impressive.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Working with Alex was a pleasure. He brings a unique perspective to problem-solving and always keeps the user experience in mind. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    },
    {
      id: '3',
      name: 'Emily Davis',
      role: 'Founder, DesignCo',
      content: 'The attention to detail in Alex\'s work is outstanding. He perfectly implemented our design system and improved the performance significantly.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop',
    },
  ],
  services: [
    {
      id: '1',
      title: 'Web Development',
      description: 'Building modern, responsive, and performant web applications using the latest technologies like React, Next.js, and TypeScript.',
      icon: 'Monitor',
    },
    {
      id: '2',
      title: 'Mobile Development',
      description: 'Creating native-like mobile experiences for iOS and Android using React Native and Flutter.',
      icon: 'Smartphone',
    },
    {
      id: '3',
      title: 'Backend Systems',
      description: 'Designing and implementing scalable backend architectures, RESTful APIs, and database solutions.',
      icon: 'Server',
    },
    {
      id: '4',
      title: 'UI/UX Implementation',
      description: 'Translating design concepts into interactive and pixel-perfect user interfaces.',
      icon: 'Layout',
    },
  ],
};
