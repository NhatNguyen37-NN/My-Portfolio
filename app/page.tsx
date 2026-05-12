'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    id: 'noir-poster',
    title: 'Noir Poster Series',
    category: 'Poster Design',
    year: '2025',
    description:
      'A cinematic poster collection with strong contrast, elegant typography, and a luxury editorial feel for premium cultural events.',
    thumb:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&q=80&fit=crop&w=1200',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&q=80&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&q=80&fit=crop&w=1400'
    ],
    tags: ['Editorial', 'Print', 'Luxury']
  },
  {
    id: 'lumina-ui',
    title: 'Lumina UI Exploration',
    category: 'UI/UX',
    year: '2024',
    description:
      'A refined digital product interface built for premium lifestyle brands, blending clean structure with soft motion and modern navigation.',
    thumb:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=80&fit=crop&w=1200',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=80&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&fit=crop&w=1400'
    ],
    tags: ['Digital', 'Interface', 'Motion']
  },
  {
    id: 'editorial-echo',
    title: 'Editorial Echo',
    category: 'Editorial',
    year: '2024',
    description:
      'A story-driven editorial layout with poetic spacing, curated color, and immersive typography for cultural publication campaigns.',
    thumb:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&q=80&fit=crop&w=1200',
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&q=80&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&q=80&fit=crop&w=1400'
    ],
    tags: ['Print', 'Editorial', 'Concept']
  },
  {
    id: 'serif-brand',
    title: 'Serif Brand Identity',
    category: 'Branding',
    year: '2025',
    description:
      'A minimal brand identity system for a boutique studio, focused on tactile materials, memorable typography, and a heritage aesthetic.',
    thumb:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&q=80&fit=crop&w=1200',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&q=80&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&q=80&fit=crop&w=1400'
    ],
    tags: ['Brand', 'Identity', 'Luxury']
  },
  {
    id: 'pages-photobook',
    title: 'Pages Photobook',
    category: 'Photobook',
    year: '2024',
    description:
      'A refined photobook concept combining dark editorial visuals, soft gradients, and thoughtful pacing for creative storytelling.',
    thumb:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&q=80&fit=crop&w=1200',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&q=80&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&q=80&fit=crop&w=1400'
    ],
    tags: ['Book', 'Photography', 'Story']
  }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function ProjectModal({
  project,
  onClose
}: {
  project: (typeof projects)[number] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/95 shadow-luxe"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-slate-900/95 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/5"
            >
              Đóng
            </button>
            <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-slate-800">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.32em] text-slate-400">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-5 text-slate-100">
                <div className="rounded-[24px] border border-white/10 bg-slate-900/90 p-6 shadow-glow">
                  <span className="text-sm uppercase tracking-[0.28em] text-sky-300/80">{project.category}</span>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">{project.title}</h2>
                  <p className="mt-4 text-slate-300 leading-8">{project.description}</p>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <span className="text-sky-300">Year</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-slate-900">
                      <Image src={image} alt={`${project.title} gallery ${index + 1}`} fill className="object-cover transition duration-700 ease-out hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const featured = useMemo(() => projects.slice(0, 3), []);

  return (
    <main className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-400/10 via-transparent"></div>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-night/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.23em] text-slate-100">
            CAO NHAT NGUYEN
          </a>
          <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.28em] text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-slate-100">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <a href="#contact" className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-300/40 hover:text-sky-200">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-600/70 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-200/90 shadow-glow">
              Visual design auteur
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Portfolio</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Cao Nhat Nguyen
                <span className="block text-4xl text-slate-300 sm:text-5xl">Graphic Designer</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I craft luxury visual experiences with cinematic layouts, editorial storytelling and refined brand systems for creative studios and cultural projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#works" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300">
                Explore Works
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3 text-sm uppercase tracking-[0.26em] text-slate-300 transition hover:border-sky-300 hover:text-slate-100">
                Let’s Connect
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-5 shadow-luxe md:p-8">
            <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl"></div>
            <div className="absolute -right-16 bottom-10 h-44 w-44 rounded-full bg-slate-200/10 blur-3xl"></div>
            <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_38%)]" />
              <div className="relative h-full w-full">
                <div className="absolute left-8 top-8 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
                  Featured Studio
                </div>
                <div className="absolute bottom-10 left-8 right-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-slate-900/90 p-5 text-slate-100 shadow-glow backdrop-blur-xl">
                    <h2 className="text-xl font-semibold">Cinematic branding</h2>
                    <p className="mt-3 text-slate-400 leading-7">
                      Premium visual systems built with motion-led direction and elegant editorial composition.
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-slate-900/90 p-5 text-slate-100 shadow-glow backdrop-blur-xl">
                    <h2 className="text-xl font-semibold">Immersive storytelling</h2>
                    <p className="mt-3 text-slate-400 leading-7">
                      A refined vocabulary for projects, campaigns, and digital experiences across multiple media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 p-0 text-left shadow-luxe transition duration-500 hover:border-sky-300/20"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <Image
                  src={project.thumb}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-300/90">{project.category} • {project.year}</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Portfolio</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Full work catalog</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-luxe transition"
            >
              <button type="button" onClick={() => setSelectedProject(project)} className="w-full text-left">
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.8fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">About</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">A refined practice for bold visual narratives</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Cao Nhat Nguyen brings cinematic precision and editorial discipline to every brief. From branding systems to immersive interfaces, the work balances premium minimalism with emotional momentum.
            </p>
            <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
              <div>
                <h3 className="text-xl font-semibold text-white">Design philosophy</h3>
                <p className="mt-3 text-slate-300 leading-8">
                  Thoughtful restraint, intentional detail, and luxurious atmosphere are the foundations of every concept. The goal is always clarity with a sense of wonder.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Experience</p>
                  <p className="mt-3 leading-7 text-slate-300">Collaborating with premium studios, cultural agencies, and luxury brands to create polished visual stories and high-end digital experiences.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Creative mindset</p>
                  <p className="mt-3 leading-7 text-slate-300">I approach every project as an editorial narrative, shaping each frame with hierarchy, contrast, and a calm sense of composition.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
              <h3 className="text-xl font-semibold text-white">Tools & Skills</h3>
              <p className="mt-4 text-slate-400 leading-7">A premium toolkit for design execution, motion, and creative direction.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Lightroom', 'DaVinci Resolve'].map((tool) => (
                  <div key={tool} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 shadow-glow">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
              <h3 className="text-xl font-semibold text-white">Creative direction</h3>
              <p className="mt-4 text-slate-400 leading-7">
                I develop concepts rooted in visual tension and tactile storytelling, using space and contrast to elevate ideas beyond the ordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-8 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let’s create something timeless.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Available for select collaborations, art direction, and identity systems. Reach out to discuss new work, commissions, or creative partnerships.
            </p>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Say hello</p>
              <div className="mt-6 space-y-3 text-slate-300">
                <p>Email: <a href="mailto:hello@caonhatnguyen.com" className="text-slate-100 hover:text-sky-300">hello@caonhatnguyen.com</a></p>
                <p>Instagram: <a href="https://instagram.com" className="text-slate-100 hover:text-sky-300">@caonhatnguyen</a></p>
                <p>Behance: <a href="https://behance.net" className="text-slate-100 hover:text-sky-300">behance.net/caonhatnguyen</a></p>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300">Name</label>
                <input id="name" type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-300">Message</label>
                <textarea id="message" rows={5} placeholder="Tell me about your project" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition duration-300 hover:bg-sky-300">
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-night/80 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2025 Cao Nhat Nguyen. Crafted with premium visual care.</p>
          <p className="text-slate-400">Designed for cinematic, minimal, and luxury creative presentation.</p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
