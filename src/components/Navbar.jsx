import React, { useState, useEffect } from 'react';

function Navbar() {
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [mobileActive]);

  const toggleMenu = () => {
    setMobileActive(!mobileActive);
  };

  const handleLinkClick = () => {
    setMobileActive(false);
  };

  const menuStyle = mobileActive ? {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    background: '#0a0c11',
    padding: '20px',
    borderBottom: '1px solid var(--border-color)',
    gap: '20px',
  } : {};

  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={handleLinkClick}>AT<span>.</span></a>
        
        <div 
          className={`nav-links ${mobileActive ? 'mobile-active' : ''}`} 
          style={menuStyle}
        >
          <a href="#about-card" className="nav-link" onClick={handleLinkClick}>About</a>
          <a href="#experience-card" className="nav-link" onClick={handleLinkClick}>Experience</a>
          <a href="#skills-container" className="nav-link" onClick={handleLinkClick}>Skills</a>
          <a href="#projects-container" className="nav-link" onClick={handleLinkClick}>Projects</a>
          <a href="#contact-card" className="btn btn-primary btn-sm" onClick={handleLinkClick}>Contact</a>
        </div>

        <button className="mobile-nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileActive ? <i data-lucide="x"></i> : <i data-lucide="menu"></i>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
