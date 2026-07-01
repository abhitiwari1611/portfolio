import React from 'react';

function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © 2026 Abhishek Tiwari. Built from scratch.
        </p>
        <div className="footer-meta">
          <span>Designed in Kanpur, India</span>
          <span className="divider">|</span>
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
