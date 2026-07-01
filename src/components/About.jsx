import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <section id="about" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">About me</span>
        <h2 className="section-title">Who I am</h2>
      </div>

      <div className="about-grid">
        {/* Left — main text, no card chrome */}
        <div id="about-card" className="about-text-card">
          <p className="about-para">
            I&apos;m a <strong>Computer Engineering student at PSIT Kanpur</strong> (graduating 2026)
            who spends most of his time writing backend services, designing databases, and building
            web apps end-to-end. I care a lot about code that&apos;s clean, well-structured, and easy
            for someone else to pick up.
          </p>
          <p className="about-para">
            Whether it&apos;s a REST API, a relational schema, or a frontend dashboard, I try to keep
            things simple and well-organised. I&apos;m comfortable across the stack and enjoy problems
            that have a real impact on how people work.
          </p>

          {/* Stats — inline, no separate card */}
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-number">95%</span>
              <span className="stat-label">NLP Accuracy</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">200ms</span>
              <span className="stat-label">Model Latency</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">63×</span>
              <span className="stat-label">Dataset Expansion</span>
            </div>
          </div>
        </div>

        {/* Right — education + extras, plain structure, no card chrome */}
        <div className="about-column-group">

          <div id="education-card" className="about-education-card">
            <h3 className="card-subtitle">
              <i data-lucide="graduation-cap"></i> Education
            </h3>
            <div className="edu-item">
              <h4 className="edu-degree">B.Tech in Computer Engineering</h4>
              <p className="edu-inst">Pranveer Singh Institute of Technology (PSIT)</p>
              <div className="edu-meta">
                <span>Kanpur, India</span>
                <span className="edu-divider">·</span>
                <span>2022 – 2026</span>
              </div>
              <div className="gpa-pill">CGPA: 7.1</div>
            </div>

            <h3 className="card-subtitle" style={{ marginTop: 'var(--s-4)' }}>
              <i data-lucide="award"></i> Certifications
            </h3>
            <ul className="certifications-list">
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">CS50: Introduction to Computer Science</span>
                  <span className="cert-issuer">Harvard University · edX</span>
                </div>
              </li>
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Machine Learning Specialization</span>
                  <span className="cert-issuer">Stanford University · Coursera</span>
                </div>
              </li>
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">SQL Certification</span>
                  <span className="cert-issuer">DataCamp</span>
                </div>
              </li>
            </ul>
          </div>

          <div id="extracurricular-card" className="about-extra-card">
            <h3 className="card-subtitle">
              <i data-lucide="users"></i> Outside of work
            </h3>
            <ul className="certifications-list">
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Sports &amp; Team Leadership</span>
                  <span className="cert-issuer">Interhouse Football Captain &amp; School Karate Representative — DPS Kalyanpur</span>
                </div>
              </li>
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Festival Coordinator — Panorama</span>
                  <span className="cert-issuer">Organised and ran DPS Kalyanpur&apos;s main cultural festival</span>
                </div>
              </li>
              <li>
                <i data-lucide="minus" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Performing Arts</span>
                  <span className="cert-issuer">Interhouse Solo Singing (DPS) &amp; College Dance Events (PSIT)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
