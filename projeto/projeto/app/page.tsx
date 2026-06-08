import { STUDIO_CONFIG } from '@/lib/config';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Statement from '@/components/sections/Statement';
import Portfolio from '@/components/sections/Portfolio';
import Marquee from '@/components/sections/Marquee';
import Process from '@/components/sections/Process';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import InitialLoader from '@/components/ui/InitialLoader';
import { GothicBackground } from '@/components/ui/GothicBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative page-container bg-[#0A0A0A]">
      {STUDIO_CONFIG.features.customCursor && <CustomCursor />}
      {STUDIO_CONFIG.features.initialLoader && <InitialLoader studioName={STUDIO_CONFIG.name} />}
      
      <GothicBackground />

      <div className="page-content relative z-10">
        <Header />
        <Hero />
        <About />
        <Statement />
        <Portfolio />
        <Marquee />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
