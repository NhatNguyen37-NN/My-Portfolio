import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Cao Nhat Nguyen | Visual Designer',
  description: 'A cinematic portfolio for visual designer Cao Nhat Nguyen. Specializing in luxury branding, editorial design, and immersive digital experiences.',
  keywords: ['visual designer', 'graphic designer', 'branding', 'editorial design', 'UI/UX', 'portfolio'],
  authors: [{ name: 'Cao Nhat Nguyen' }],
  openGraph: {
    title: 'Cao Nhat Nguyen | Visual Designer',
    description: 'A cinematic portfolio for visual designer Cao Nhat Nguyen.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#07111f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-night antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
