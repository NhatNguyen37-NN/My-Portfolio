'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const projects = [
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-white/10 bg-slate-950/95 shadow-luxe"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-slate-900/95 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10 hover:text-sky-300"
            >
              Close
            </button>
            <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[28px] bg-slate-800">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.32em] text-slate-400">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-sky-300/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-5 text-slate-100">
                <div className="rounded-[24px] border border-white/10 bg-slate-900/90 p-6 shadow-glow">
                  <span className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
                    {project.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <span className="text-sky-300">Year</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <div
                      key={image}
                      className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-slate-900"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
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

export function Works() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const featured = useMemo(() => projects.slice(0, 3), []);

  return (
    <>
      <section id="works" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected projects
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 p-0 text-left shadow-luxe transition duration-500 hover:border-sky-300/30 hover:shadow-glow"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <Image
                  src={project.thumb}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 rounded-full bg-white/10 px-3 py-1.5 text-xs uppercase tracking-wider text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  View Project
                </div>
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-300/90">
                  {project.category} &bull; {project.year}
                </p>
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-sky-300">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Portfolio</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Full work catalog
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-luxe transition hover:border-sky-300/30 hover:shadow-glow"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full text-left"
              >
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-sky-300">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
