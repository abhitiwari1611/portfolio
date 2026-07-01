import React, { useEffect } from 'react';

function Experience() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <section id="experience" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Work</span>
        <h2 className="section-title">Experience</h2>
      </div>

      {/* No glass-card — plain bordered card, one distinct treatment */}
      <div
        id="experience-card"
        className="experience-card"
        style={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-surface)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent left bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '2px',
          height: '100%',
          background: 'var(--accent)',
        }} />

        <div className="exp-header">
          <div className="exp-title-group">
            <h3 className="exp-role">Junior Developer (MIS)</h3>
            <h4 className="exp-company">South Point &amp; Company</h4>
          </div>
          <span className="exp-date badge badge-success">June 2026 – Present</span>
        </div>

        <p className="exp-description">
          Joined to build and own the company&apos;s internal MIS — the system that tracks
          business data, generates management reports, and gives department heads
          visibility into their operations without needing to ask someone to pull a spreadsheet.
        </p>

        <ul className="exp-bullets">
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>
            <span>
              <strong>Database work:</strong> Wrote and optimised SQL queries pulling
              business metrics from multiple tables, cutting report generation time by 35%.
            </span>
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>
            <span>
              <strong>Report automation:</strong> Built weekly pipelines that prepare and
              distribute reports automatically — saving ~8 hours of manual work per week.
            </span>
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>
            <span>
              <strong>Dashboards:</strong> Delivered clean, self-serve dashboards so department
              heads can track KPIs without routing every request through dev.
            </span>
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
