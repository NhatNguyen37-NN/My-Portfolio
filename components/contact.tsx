'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const socialLinks = [
  {
    label: 'Email',
    value: 'hello@caonhatnguyen.com',
    href: 'mailto:hello@caonhatnguyen.com',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    )
  },
  {
    label: 'Instagram',
    value: '@caonhatnguyen',
    href: 'https://instagram.com/caonhatnguyen',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Behance',
    value: 'behance.net/caonhatnguyen',
    href: 'https://behance.net/caonhatnguyen',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11c1.1 0 2-.9 2-2s-.9-2-2-2H3v4h4.5zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2H3v4h4.5zM3 5h4.5a4 4 0 010 8H3v6h4.5a4 4 0 000-8H3V5zm11-1h6v1.5h-6V4zm3 4c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.5-2h-2c-.3.3-.9.5-1.5.5-1.1 0-2-.9-2-2h5.5c0-.2 0-.3 0-.5 0-2.2-1.8-4-4-4zm-2 3c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/caonhatnguyen',
    href: 'https://linkedin.com/in/caonhatnguyen',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-8 lg:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Contact</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-balance">
            {"Let's create something timeless."}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Available for select collaborations, art direction, and identity systems. Reach out
            to discuss new work, commissions, or creative partnerships.
          </p>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Say hello</p>
            <div className="mt-6 space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors group-hover:bg-sky-400/10 group-hover:text-sky-300">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {link.label}
                    </p>
                    <p className="text-slate-100 transition group-hover:text-sky-300">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-luxe"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70 focus:shadow-glow"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70 focus:shadow-glow"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="mt-3 w-full resize-none rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-300/70 focus:shadow-glow"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition duration-300 hover:bg-sky-300 hover:shadow-glow disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send message'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
