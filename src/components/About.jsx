import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="about" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">About me</span>
        <h2 className="section-title">Who I am</h2>
      </div>
      <div className="about-grid">
        <div id="about-card" className="about-text-card glass-card">
          <p className="about-para">
            I'm a <strong>Computer Engineering student at PSIT Kanpur (graduating 2026)</strong> who spends most of his time writing backend services, designing databases, and building web apps. I care a lot about writing code that's clean, well-structured, and easy for someone else to pick up.
          </p>
          <p className="about-para">
            Whether it's a REST API, a relational schema, or a frontend dashboard, I try to keep things simple and well-organized. I'm comfortable across the stack and enjoy working on problems that have a real impact.
          </p>
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-number text-gradient">95%</span>
              <span className="stat-label">NLP Accuracy</span>
            </div>
            <div className="stat-box">
              <span className="stat-number text-gradient">200ms</span>
              <span className="stat-label">Model Latency</span>
            </div>
            <div className="stat-box">
              <span className="stat-number text-gradient">63x</span>
              <span className="stat-label">Dataset Expansion</span>
            </div>
          </div>
        </div>
        
        <div className="about-column-group">
          <div id="education-card" className="about-education-card glass-card">
            <h3 className="card-subtitle"><i data-lucide="graduation-cap"></i> Education</h3>
            <div className="edu-item">
              <h4 className="edu-degree">B.Tech in Computer Engineering</h4>
              <p className="edu-inst">Pranveer Singh Institute of Technology (PSIT)</p>
              <div className="edu-meta">
                <span>Kanpur, India</span>
                <span className="edu-divider">|</span>
                <span>2022 – 2026</span>
              </div>
              <div className="gpa-pill">CGPA: 7.1</div>
            </div>

            <h3 className="card-subtitle"><i data-lucide="award"></i> Certifications</h3>
            <ul className="certifications-list">
              <li>
                <i data-lucide="star" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">CS50: Introduction to Computer Science</span>
                  <span className="cert-issuer">Harvard University (edX)</span>
                </div>
              </li>
              <li>
                <i data-lucide="star" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Machine Learning Specialization</span>
                  <span className="cert-issuer">Stanford University</span>
                </div>
              </li>
              <li>
                <i data-lucide="star" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">SQL Certification</span>
                  <span className="cert-issuer">DataCamp</span>
                </div>
              </li>
            </ul>
          </div>

          <div id="extracurricular-card" className="about-extra-card glass-card">
            <h3 className="card-subtitle"><i data-lucide="trophy"></i> Outside of work</h3>
            <ul className="certifications-list">
              <li>
                <i data-lucide="shield" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Sports & Team Leadership</span>
                  <span className="cert-issuer">Interhouse Football Captain & School Karate Representative — DPS Kalyanpur</span>
                </div>
              </li>
              <li>
                <i data-lucide="users" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Festival Coordinator (Panorama)</span>
                  <span className="cert-issuer">Organised and ran DPS Kalyanpur's main cultural festival</span>
                </div>
              </li>
              <li>
                <i data-lucide="music" className="cert-icon"></i>
                <div className="cert-details">
                  <span className="cert-name">Performing Arts</span>
                  <span className="cert-issuer">Interhouse Solo Singing (DPS) & College Dance Events (PSIT)</span>
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
