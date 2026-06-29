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
        <span className="subtitle">Employment</span>
        <h2 className="section-title">Professional Experience</h2>
      </div>
      <div id="experience-card" className="experience-card glass-card">
        <div className="exp-header">
          <div className="exp-title-group">
            <h3 className="exp-role">Junior Developer (MIS)</h3>
            <h4 className="exp-company text-gradient">South Point &amp; Company</h4>
          </div>
          <span className="exp-date badge badge-success">June 2026 - Present</span>
        </div>
        <p className="exp-description">
          Recruited to architect, implement, and optimize internal Management Information Systems (MIS).
          Responsible for consolidating key operational indicators, designing performant relational schema
          layouts, and automating reporting pipelines to drive company-wide analytics.
        </p>
        <ul className="exp-bullets">
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Database Query Optimization</strong>: Designed relational database queries and schema layouts to aggregate
            cross-functional business metrics, reducing reporting latency by 35%.
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Pipeline Automation</strong>: Engineered weekly MIS automated reporting pipelines using backend microservices, eliminating 8+
            hours of manual data consolidation weekly.
          </li>
          <li>
            <i data-lucide="check-circle" className="bullet-icon"></i>{' '}
            <strong>Stakeholder Dashboards</strong>: Developed sleek operational dashboards enabling department heads to monitor data indicators in real-time.
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
