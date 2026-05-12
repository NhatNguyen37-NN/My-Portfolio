'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

// 4 project categories as requested
const projects = [
  {
    id: 'poster',
    title: 'Poster',
    category: 'Print Design',
    thumb:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&q=80&fit=crop&w=1200',
  },
  {
    id: 'banner',
    title: 'Banner',
    category: 'Digital Design',
    thumb:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&q=80&fit=crop&w=1200',
  },
  {
    id: 'photobook',
    title: 'Photobook',
    category: 'Editorial',
    thumb:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&q=80&fit=crop&w=1200',
  },
  {
    id: 'webdesign',
    title: 'Web Design',
    category: 'Digital',
    thumb:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&q=80&fit=crop&w=1200',
  },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

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
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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

// Section reveal animation wrapper
function RevealSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
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
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
              Visual Designer
            </p>
            <h1 className="mb-6 text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </RevealSection>

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
