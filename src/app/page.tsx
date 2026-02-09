
import {Header }from '@/sections/Header';
import {HeroSection} from '@/sections/Hero'; 
import{ ProjectsSection} from '@/sections/Projects'; 
import {TapeSection} from '@/sections/Tape';
import {AboutSection }from '@/sections/About';
import {ContactSection} from '@/sections/Contact';
import{ Footer }from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased"> 
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
