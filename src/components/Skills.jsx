import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  const categories = [
    {
      label: 'Languages',
      skills: ['Python', 'JavaScript', 'C++', 'SQL'],
    },
    {
      label: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Flask', 'TensorFlow', 'Keras', 'Scikit-learn', 'Streamlit'],
    },
    {
      label: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      label: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Jupyter', 'Power BI', 'Agile / Scrum'],
    },
  ];

  return (
    <section id="skills" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Stack</span>
        <h2 className="section-title">Skills</h2>
      </div>

      {/* No card grid — inline category rows separated by rules */}
      <div id="skills-container" className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.label} className="skill-category">
            <div className="category-header">
              <h3>{cat.label}</h3>
            </div>
            <div className="skill-badges">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
