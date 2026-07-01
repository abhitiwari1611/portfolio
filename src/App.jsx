import React, { useEffect } from 'react';
import CanvasParticles from './components/CanvasParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll Reveal — staggered entrance per section
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Don't unobserve — keep stagger intact on re-entry
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Lucide icon initialization — retry pattern for CDN timing
    const initIcons = () => {
      if (window.lucide) {
        window.lucide.createIcons();
        return true;
      }
      return false;
    };

    if (!initIcons()) {
      // CDN not yet loaded — wait for it
      const interval = setInterval(() => {
        if (initIcons()) clearInterval(interval);
      }, 100);
      setTimeout(() => clearInterval(interval), 5000);
    }

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Interactive canvas background */}
      <CanvasParticles />

      {/* Status banner */}
      <div className="status-banner">
        <span className="pulse-indicator"></span>
        <span className="status-text">
          Active — building MIS systems at <strong>South Point &amp; Company</strong>
        </span>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main */}
      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
