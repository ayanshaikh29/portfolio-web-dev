import { useEffect } from 'react';
import ReactLenis from '@studio-freight/react-lenis';

import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative selection:bg-primary/30 selection:text-white">
        <Cursor />
        <Preloader />
        <Navbar />
        
        <main>
          <Hero />
          <Projects />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </ReactLenis>
  );
}
