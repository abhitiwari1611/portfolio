import React, { useEffect } from 'react';

function Experience() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="experience" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Work</span>
        <h2 className="section-title">Experience</h2>
      </div>
      <div id="experience-card" className="experience-card glass-card">
        <div className="exp-header">
          <div className="exp-title-group">
            <h3 className="exp-role">Junior Developer (MIS)</h3>
            <h4 className="exp-company text-gradient">South Point &amp; Company</h4>
          </div>
          <span className="exp-date badge badge-success">June 2026 – Present</span>
        </div>
        <p className="exp-description">
          I joined to build and maintain the company's internal MIS — basically the system that tracks business data, generates reports, and helps management see what's happening across different departments.
        </p>
        <ul className="exp-bullets">
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Database work:</strong> Wrote and optimised SQL queries to pull together business metrics from multiple tables, cutting report generation time by 35%.
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Report automation:</strong> Built automated pipelines that run each week to prepare and send reports — saved around 8 hours of manual work every week.
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Dashboards:</strong> Built simple, clean dashboards so department heads can check their key numbers without asking someone to pull a report for them.
          </li>
        </ul>
        <div className="exp-tags">
          <span className="tag">SQL</span>
          <span className="tag">Node.js</span>
          <span className="tag">Relational Schemas</span>
          <span className="tag">MIS Design</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
