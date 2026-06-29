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
    // Scroll Reveal System
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
    
    if (window.lucide) {
      window.lucide.createIcons();
    }

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Interactive Canvas Background */}
      <CanvasParticles />

      {/* Top Glow Header Banner */}
      <div className="status-banner">
        <span className="pulse-indicator"></span>
        <span className="status-text">
          Active: Building Management Information Systems (MIS) at <strong>South Point &amp; Company</strong>
        </span>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
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
