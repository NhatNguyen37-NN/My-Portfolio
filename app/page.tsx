import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Works } from '@/components/works';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-night text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-sky-400/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[800px] w-[800px] rounded-full bg-sky-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] rounded-full bg-slate-400/5 blur-3xl" />
      
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
