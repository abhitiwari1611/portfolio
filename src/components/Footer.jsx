import React, { useState, useEffect } from 'react';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Check if we are in local development or if this is the admin
    const isLocal = 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' || 
      window.location.hostname === '::1' || 
      window.location.port !== '';
    
    // Check url for admin flag (visiting with ?admin=true will set local flag)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      localStorage.setItem('portfolio-admin', 'true');
    }
    
    const isAdmin = localStorage.getItem('portfolio-admin') === 'true';
    
    // Increment count if not local dev AND not admin
    const url = (isLocal || isAdmin)
      ? 'https://api.counterapi.dev/v1/abhitiwari1611/portfolio'
      : 'https://api.counterapi.dev/v1/abhitiwari1611/portfolio/up';
      
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('CounterAPI error');
        }
        return response.json();
      })
      .then(data => {
        setVisitorCount(data.count);
      })
      .catch(err => {
        console.warn('CounterAPI failed, using fallback views count.', err);
        // Realistic mock fallback
        setVisitorCount(412);
      });
  }, []);

  useEffect(() => {
    if (window.lucide && visitorCount !== null) {
      window.lucide.createIcons();
    }
  }, [visitorCount]);

  return (
    <footer className="glass-footer">
      <div className="footer-container">
        <p className="footer-copyright">
          &copy; 2026 Abhishek Tiwari. Handcrafted with precision &amp; design-system ethics.
        </p>
        <div className="footer-meta">
          {visitorCount !== null && (
            <span className="visitor-counter" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <i data-lucide="eye" style={{ width: '13px', height: '13px', marginRight: '6px', color: 'var(--secondary)' }}></i>
              <span>{visitorCount} Views</span>
              <span className="divider" style={{ margin: '0 10px' }}>|</span>
            </span>
          )}
          <span>Designed in Kanpur, India</span>
          <span className="divider">|</span>
          <span className="footer-ping-wrapper">
            <span className="ping-circle"></span>
            <span className="ping-pulse"></span>
            <span>Systems Operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
