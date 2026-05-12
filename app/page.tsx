'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

// 4 project categories with sub-projects
const projects = [
  {
    id: 'poster',
    title: 'Poster',
    category: 'Print Design',
    thumb:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&q=80&fit=crop&w=1200',
    subProjects: [
      {
        id: 'poster-1',
        title: 'Event Poster',
        description: 'Music festival promotional design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'poster-2',
        title: 'Exhibition Poster',
        description: 'Art gallery opening announcement',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'poster-3',
        title: 'Film Poster',
        description: 'Independent film promotional artwork',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&q=80&fit=crop&w=800',
      },
    ],
  },
  {
    id: 'banner',
    title: 'Banner',
    category: 'Digital Design',
    thumb:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&q=80&fit=crop&w=1200',
    subProjects: [
      {
        id: 'banner-1',
        title: 'Social Media Banner',
        description: 'Brand awareness campaign',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'banner-2',
        title: 'Web Banner',
        description: 'E-commerce promotional design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'banner-3',
        title: 'Event Banner',
        description: 'Conference digital signage',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&q=80&fit=crop&w=800',
      },
    ],
  },
  {
    id: 'photobook',
    title: 'Photobook',
    category: 'Editorial',
    thumb:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&q=80&fit=crop&w=1200',
    subProjects: [
      {
        id: 'photobook-1',
        title: 'Travel Photobook',
        description: 'Visual journey through landscapes',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'photobook-2',
        title: 'Portrait Collection',
        description: 'Studio portrait compilation',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'photobook-3',
        title: 'Wedding Album',
        description: 'Elegant ceremony documentation',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&q=80&fit=crop&w=800',
      },
    ],
  },
  {
    id: 'webdesign',
    title: 'Web Design',
    category: 'Digital',
    thumb:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&q=80&fit=crop&w=1200',
    subProjects: [
      {
        id: 'web-1',
        title: 'Portfolio Website',
        description: 'Creative agency showcase',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'web-2',
        title: 'E-commerce Design',
        description: 'Fashion brand online store',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&fit=crop&w=800',
      },
      {
        id: 'web-3',
        title: 'Landing Page',
        description: 'SaaS product launch page',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=80&fit=crop&w=800',
      },
    ],
  },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Animated falling stars background
function FallingStars() {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 25,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255,255,255,${star.opacity * 0.5})`,
          }}
          initial={{ top: '-2%', opacity: 0 }}
          animate={{
            top: '102%',
            opacity: [0, star.opacity, star.opacity, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// Rotating background light component
function RotatingLight() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -translate-x-1/2">
          <div className="h-full w-full bg-gradient-to-t from-transparent via-white/[0.03] to-transparent blur-xl" />
        </div>
        <div className="absolute left-1/2 top-0 h-1/2 w-32 origin-bottom -translate-x-1/2 rotate-180">
          <div className="h-full w-full bg-gradient-to-b from-slate-400/[0.04] to-transparent blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
}

// Profile image component with hover effect
function ProfileImage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="relative mx-auto mb-8 h-32 w-32 sm:h-40 sm:w-40"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10"
        animate={{
          rotate: isHovering ? 360 : 0,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Image container */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 bg-slate-800"
        animate={{
          y: isHovering ? -4 : 0,
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Replace this placeholder with your image */}
        {/* To add your image: replace the src below with your image path, e.g., "/profile.jpg" */}
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&fit=crop&w=400&h=400"
          alt="Cao Nhat Nguyen"
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovering ? 'scale(1.1)' : 'scale(1)' }}
          sizes="(max-width: 640px) 128px, 160px"
          priority
        />
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"
          animate={{ opacity: isHovering ? 0 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Mouse-follow glow card component
function GlowCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/40 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.12] ${className}`}
    >
      {/* Mouse-follow glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
            : 'none',
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
            : 'none',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Project card with hover zoom and mouse-follow lighting
function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[number];
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/30 transition-colors duration-300 hover:border-white/[0.15]"
    >
      {/* Mouse-follow lighting overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`
            : 'none',
        }}
      />

      {/* Image with zoom effect */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Minimal text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">
          {project.category}
        </p>
        <h3 className="text-2xl font-medium text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Click to view projects
        </p>
      </div>

      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.12), transparent 40%)`
            : 'none',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
    </motion.div>
  );
}

// Project modal component
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white/60 transition hover:border-white/20 hover:text-white"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal header */}
        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
            {project.category}
          </p>
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            {project.title}
          </h2>
        </div>

        {/* Sub-projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.subProjects.map((subProject, index) => (
            <motion.div
              key={subProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl border border-white/[0.06] bg-slate-800/50 transition-colors duration-300 hover:border-white/[0.15]"
            >
              {/* Sub-project image - Replace with your own images */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={subProject.image}
                  alt={subProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Sub-project info */}
              <div className="p-4">
                <h4 className="mb-1 font-medium text-white">
                  {subProject.title}
                </h4>
                <p className="text-sm text-white/50">
                  {subProject.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add more projects hint */}
        <p className="mt-8 text-center text-sm text-white/30">
          Replace placeholder images with your own work in the code
        </p>
      </motion.div>
    </motion.div>
  );
}

// Section reveal animation wrapper
function RevealSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060a12] text-white">
      {/* Animated falling stars */}
      <FallingStars />

      {/* Animated rotating background light */}
      <RotatingLight />

      {/* Subtle static ambient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.02),transparent_50%)]" />

      {/* Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-[#060a12]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-sm font-medium tracking-[0.2em] text-white/90 transition hover:text-white"
          >
            CAO NHAT NGUYEN
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm tracking-[0.15em] text-white/50 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero Section with parallax */}
      <section
        id="home"
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <ProfileImage />

            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
              Visual Designer
            </p>
            <h1 className="mb-6 text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl font-[family-name:var(--font-lodestone)]">
              Cao Nhat Nguyen
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/50">
              Crafting refined visual experiences through thoughtful design,
              editorial precision, and cinematic storytelling.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#works"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-medium tracking-[0.15em] text-slate-900 transition hover:bg-white/90"
              >
                View Works
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-8 py-3 text-sm tracking-[0.15em] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-6 rounded-full border border-white/20 p-1"
          >
            <div className="h-2 w-full rounded-full bg-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* Works Section */}
      <RevealSection
        id="works"
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
            Portfolio
          </p>
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Selected Works
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </RevealSection>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* About Section */}
      <RevealSection
        id="about"
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              About
            </p>
            <h2 className="mb-8 text-4xl font-light text-white sm:text-5xl">
              Design Philosophy
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/50">
              I believe in the power of restraint and intentionality. Every
              element serves a purpose, every space creates meaning. My approach
              combines editorial precision with cinematic atmosphere to craft
              experiences that resonate.
            </p>
          </div>

          <div className="space-y-6">
            <GlowCard className="p-8">
              <h3 className="mb-6 text-xl font-medium text-white">
                Tools & Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Figma',
                  'Photoshop',
                  'Illustrator',
                  'Lightroom',
                  'After Effects',
                  'DaVinci Resolve',
                ].map((tool) => (
                  <div
                    key={tool}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/70 transition hover:border-white/[0.12] hover:text-white"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="mb-4 text-xl font-medium text-white">
                Experience
              </h3>
              <p className="leading-relaxed text-white/50">
                Collaborating with premium studios, cultural agencies, and
                luxury brands to create polished visual stories and high-end
                digital experiences.
              </p>
            </GlowCard>
          </div>
        </div>
      </RevealSection>

      {/* Contact Section */}
      <RevealSection
        id="contact"
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Contact
            </p>
            <h2 className="mb-8 text-4xl font-light text-white sm:text-5xl">
              Let&apos;s create together.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/50">
              Available for select collaborations, art direction, and identity
              systems. Reach out to discuss new work or creative partnerships.
            </p>

            <GlowCard className="p-8">
              <h3 className="mb-6 text-lg font-medium text-white">
                Get in Touch
              </h3>
              <div className="space-y-4 text-white/60">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:hello@caonhatnguyen.com"
                    className="text-white/80 transition hover:text-white"
                  >
                    hello@caonhatnguyen.com
                  </a>
                </p>
                <p>
                  Instagram:{' '}
                  <a
                    href="https://instagram.com"
                    className="text-white/80 transition hover:text-white"
                  >
                    @caonhatnguyen
                  </a>
                </p>
                <p>
                  Behance:{' '}
                  <a
                    href="https://behance.net"
                    className="text-white/80 transition hover:text-white"
                  >
                    behance.net/caonhatnguyen
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a
                    href="https://linkedin.com"
                    className="text-white/80 transition hover:text-white"
                  >
                    linkedin.com/in/caonhatnguyen
                  </a>
                </p>
              </div>
            </GlowCard>
          </div>

          <GlowCard className="p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-white/50"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white/50"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-white/50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  className="w-full resize-none rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium tracking-[0.15em] text-slate-900 transition hover:bg-white/90"
              >
                Send Message
              </button>
            </form>
          </GlowCard>
        </div>
      </RevealSection>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/40 md:flex-row">
          <p>&copy; 2025 Cao Nhat Nguyen</p>
          <p>Designed with care</p>
        </div>
      </footer>
    </main>
  );
}
