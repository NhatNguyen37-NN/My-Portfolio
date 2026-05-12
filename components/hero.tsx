'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full border border-slate-600/70 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-200/90 shadow-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            Visual Design Auteur
          </motion.div>

          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm uppercase tracking-[0.28em] text-slate-400"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl"
            >
              <span className="text-balance">Cao Nhat Nguyen</span>
              <span className="mt-2 block text-4xl text-slate-300 sm:text-5xl">Graphic Designer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl text-lg leading-8 text-slate-300"
            >
              I craft luxury visual experiences with cinematic layouts, editorial storytelling and
              refined brand systems for creative studios and cultural projects.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('works')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-glow"
            >
              Explore Works
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3 text-sm uppercase tracking-[0.26em] text-slate-300 transition hover:border-sky-300 hover:text-slate-100"
            >
              {"Let's Connect"}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-5 shadow-luxe md:p-8"
        >
          <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-44 w-44 rounded-full bg-slate-200/10 blur-3xl" />
          <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_38%)]" />
            <div className="relative h-full w-full">
              <div className="absolute left-8 top-8 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
                Featured Studio
              </div>
              <div className="absolute bottom-10 left-8 right-8 grid gap-5 md:grid-cols-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-white/10 bg-slate-900/90 p-5 text-slate-100 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-sky-300/30"
                >
                  <h2 className="text-xl font-semibold">Cinematic branding</h2>
                  <p className="mt-3 leading-7 text-slate-400">
                    Premium visual systems built with motion-led direction and elegant editorial
                    composition.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-white/10 bg-slate-900/90 p-5 text-slate-100 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-sky-300/30"
                >
                  <h2 className="text-xl font-semibold">Immersive storytelling</h2>
                  <p className="mt-3 leading-7 text-slate-400">
                    A refined vocabulary for projects, campaigns, and digital experiences across
                    multiple media.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
