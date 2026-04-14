
import {Header }from '@/sections/Header';
import {HeroSection} from '@/sections/Hero'; 
import{ ProjectsSection} from '@/sections/Projects'; 
import {TapeSection} from '@/sections/Tape';
import {AboutSection }from '@/sections/About';
import {ContactSection} from '@/sections/Contact';
import{ Footer }from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.12),transparent_34%),radial-gradient(circle_at_80%_25%,rgba(168,85,247,0.12),transparent_36%)]" />
      <Header/>
      <HeroSection />
       <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
