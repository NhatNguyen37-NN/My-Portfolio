import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Cao Nhat Nguyen | Visual Designer',
  description: 'A refined portfolio showcasing graphic design, editorial work, and visual storytelling by Cao Nhat Nguyen.',
};

export const viewport: Viewport = {
  themeColor: '#060a12',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#060a12]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
