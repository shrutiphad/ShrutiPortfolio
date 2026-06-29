import { Header }         from '@/sections/Header';
import { HeroSection }    from '@/sections/Hero';
import { ProjectsSection }from '@/sections/Projects';
import { TapeSection }    from '@/sections/Tape';
import { AboutSection }   from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer }         from '@/sections/Footer';

/* Thin pink→purple gradient line between sections */
const SectionDivider = () => (
  <div className="flex justify-center px-6 pointer-events-none">
    <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
  </div>
);

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased overflow-x-clip">

      {/*
        Global ambient blobs — fixed so they persist while scrolling.
        Using two overlapping radial gradients: pink bloom top-left,
        purple bloom top-right. Kept very subtle (0.10 opacity).
      */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: [
            'radial-gradient(circle at 18% 12%, rgba(236,72,153,0.10), transparent 34%)',
            'radial-gradient(circle at 82% 22%, rgba(168,85,247,0.10), transparent 36%)',
            'radial-gradient(circle at 50% 90%, rgba(168,85,247,0.07), transparent 40%)',
          ].join(', '),
        }}
      />

      <Header />

      {/* ── Hero ── no divider above; the rings bleed into the page naturally */}
      <HeroSection />

      <SectionDivider />

      {/* ── Projects ── */}
      <ProjectsSection />

      <SectionDivider />

      {/* ── Tape marquee ── */}
      <TapeSection />

      <SectionDivider />

      {/* ── About ── */}
      <AboutSection />

      <SectionDivider />

      {/* ── Contact ── */}
      <ContactSection />

      <Footer />
    </div>
  );
}