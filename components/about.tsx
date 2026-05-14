'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const tools = [
  { name: 'Figma', description: 'UI/UX Design' },
  { name: 'Adobe Photoshop', description: 'Photo Editing' },
  { name: 'Adobe Illustrator', description: 'Vector Graphics' },
  { name: 'Lightroom', description: 'Photo Processing' },
  { name: 'DaVinci Resolve', description: 'Video Editing' }
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pb-16 md:px-8 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_0.8fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">About</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-balance">
            A refined practice for bold visual narratives
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Cao Nhat Nguyen brings cinematic precision and editorial discipline to every brief.
            From branding systems to immersive interfaces, the work balances premium minimalism
            with emotional momentum.
          </p>
          <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
            <div>
              <h3 className="text-xl font-semibold text-white">Design philosophy</h3>
              <p className="mt-3 leading-8 text-slate-300">
                Thoughtful restraint, intentional detail, and luxurious atmosphere are the
                foundations of every concept. The goal is always clarity with a sense of wonder.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-slate-900/90 p-5 text-slate-200 transition-all duration-300 hover:shadow-glow"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Experience</p>
                <p className="mt-3 leading-7 text-slate-300">
                  With over 2 years of experience working with clients on creative visual projects. I specialize in poster design, banners, photobooks, and other visual design work, focusing on creating clean, modern, and impactful visuals that communicate ideas clearly and leave a strong impression.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-slate-900/90 p-5 text-slate-200 transition-all duration-300 hover:shadow-glow"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
                  Creative mindset
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  I approach every project as an editorial narrative, shaping each frame with
                  hierarchy, contrast, and a calm sense of composition.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
            <h3 className="text-xl font-semibold text-white">Tools & Skills</h3>
            <p className="mt-4 leading-7 text-slate-400">
              A premium toolkit for design execution, motion, and creative direction.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-glow transition-all duration-300 hover:border-sky-300/30"
                >
                  <p className="text-sm font-medium text-slate-100">{tool.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
            <h3 className="text-xl font-semibold text-white">Creative direction</h3>
            <p className="mt-4 leading-7 text-slate-400">
              I develop concepts rooted in visual tension and tactile storytelling, using space
              and contrast to elevate ideas beyond the ordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
