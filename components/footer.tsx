'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'Instagram',
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
    href: 'https://behance.net/caonhatnguyen',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11c1.1 0 2-.9 2-2s-.9-2-2-2H3v4h4.5zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2H3v4h4.5zM3 5h4.5a4 4 0 010 8H3v6h4.5a4 4 0 000-8H3V5zm11-1h6v1.5h-6V4zm3 4c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.5-2h-2c-.3.3-.9.5-1.5.5-1.1 0-2-.9-2-2h5.5c0-.2 0-.3 0-.5 0-2.2-1.8-4-4-4zm-2 3c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/caonhatnguyen',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: 'Email',
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
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-night/80">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-lg font-semibold tracking-[0.23em] text-slate-100 transition hover:text-sky-300"
            >
              CAO NHAT NGUYEN
            </button>
            <p className="mt-2 text-sm text-slate-500">
              Crafted with premium visual care
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-sky-300/30 hover:bg-sky-400/10 hover:text-sky-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Cao Nhat Nguyen. All rights reserved.</p>
          <p className="text-slate-400">
            Designed for cinematic, minimal, and luxury creative presentation.
          </p>
        </div>
      </div>
    </footer>
  );
}
