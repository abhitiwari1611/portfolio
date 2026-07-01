import React from 'react';

function Footer() {
  const navLinks = [
    { label: 'About', href: '#about-card' },
    { label: 'Experience', href: '#experience-card' },
    { label: 'Skills', href: '#skills-container' },
    { label: 'Projects', href: '#projects-container' },
    { label: 'Contact', href: '#contact-card' },
  ];

  const externalLinks = [
    { label: 'GitHub', href: 'https://github.com/abhiofficial1611' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhitiwari1611/' },
    { label: 'Email', href: 'mailto:abhiofficial1611@gmail.com' },
    { label: 'Resume (PDF)', href: '/AbhishekTiwari_SoftwareEngineer.pdf' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-body">
        {/* Brand column */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">Abhishek<span>.</span></a>
          <p className="footer-tagline">
            Software engineer. Computer Engineering student at PSIT Kanpur.
            Building systems that work, not just ones that look like they do.
          </p>
        </div>

        {/* Navigation column */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* External / Contact column */}
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') || link.href.startsWith('/') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Abhishek Tiwari. All rights reserved.
        </p>
        <div className="footer-meta">
          <span>Handcrafted in Kanpur, India</span>
          <span className="divider">·</span>
          <span className="footer-ping-wrapper">
            <span className="ping-circle"></span>
            <span className="ping-pulse"></span>
            <span>Open to work</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
