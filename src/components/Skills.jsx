import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="skills" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">What I know</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div id="skills-container" className="skills-grid">
        <div className="skill-category glass-card">
          <div className="category-header">
            <i data-lucide="code-2" className="category-icon text-gradient"></i>
            <h3>Languages</h3>
          </div>
          <div className="skill-badges">
            <span className="skill-badge">Python</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">C++</span>
            <span className="skill-badge">SQL</span>
          </div>
        </div>

        <div className="skill-category glass-card">
          <div className="category-header">
            <i data-lucide="layout" className="category-icon text-gradient"></i>
            <h3>Frameworks &amp; Libraries</h3>
          </div>
          <div className="skill-badges">
            <span className="skill-badge">React</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express</span>
            <span className="skill-badge">Flask</span>
            <span className="skill-badge">TensorFlow</span>
            <span className="skill-badge">Keras</span>
            <span className="skill-badge">Scikit-learn</span>
            <span className="skill-badge">Streamlit</span>
          </div>
        </div>

        <div className="skill-category glass-card">
          <div className="category-header">
            <i data-lucide="database" className="category-icon text-gradient"></i>
            <h3>Databases &amp; Storage</h3>
          </div>
          <div className="skill-badges">
            <span className="skill-badge">PostgreSQL</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">SQLite</span>
          </div>
        </div>

        <div className="skill-category glass-card">
          <div className="category-header">
            <i data-lucide="sliders" className="category-icon text-gradient"></i>
            <h3>Methodologies &amp; Tools</h3>
          </div>
          <div className="skill-badges">
            <span className="skill-badge">Git &amp; GitHub</span>
            <span className="skill-badge">VS Code</span>
            <span className="skill-badge">IntelliJ IDEA</span>
            <span className="skill-badge">Jupyter Notebooks</span>
            <span className="skill-badge">Agile / Scrum</span>
            <span className="skill-badge">SDLC Methodologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
