import React, { useState, useEffect } from 'react';

function Navbar() {
  const [mobileActive, setMobileActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [mobileActive]);

  // Add shadow when user scrolls past the hero
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileActive(!mobileActive);
  const handleLinkClick = () => setMobileActive(false);

  const mobileMenuStyle = mobileActive ? {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    background: 'var(--bg)',
    padding: '20px 24px',
    borderBottom: '1px solid var(--border)',
    gap: '18px',
  } : {};

  return (
    <nav className={`glass-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={handleLinkClick}>
          Abhishek<span>.</span>
        </a>

        <div
          className={`nav-links${mobileActive ? ' mobile-active' : ''}`}
          style={mobileMenuStyle}
        >
          <a href="#about-card"        className="nav-link" onClick={handleLinkClick}>About</a>
          <a href="#experience-card"   className="nav-link" onClick={handleLinkClick}>Experience</a>
          <a href="#skills-container"  className="nav-link" onClick={handleLinkClick}>Skills</a>
          <a href="#projects-container" className="nav-link" onClick={handleLinkClick}>Projects</a>
          <a href="#contact-card"      className="btn btn-primary btn-sm" onClick={handleLinkClick}>Contact</a>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileActive
            ? <i data-lucide="x"></i>
            : <i data-lucide="menu"></i>
          }
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
