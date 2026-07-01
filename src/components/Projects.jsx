import React, { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  // Featured projects get the horizontal card layout
  const featured = [
    {
      id: 1,
      name: 'Netflix Recommendation System',
      image: '/images/netflix.png',
      badge: '85% Rating Precision',
      desc: 'Built a movie recommendation engine on top of a dataset of 17,000+ Netflix titles. Uses content-based filtering (genre, cast, description) and collaborative filtering to suggest what to watch next. Includes a React dashboard to browse recommendations.',
      highlights: [
        { icon: 'zap', text: '200ms average response time' },
        { icon: 'layers', text: 'Matches across 5,000+ titles' },
      ],
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'REST API'],
      github: 'https://github.com/abhiofficial1611/netflix-recommendation',
    },
    {
      id: 2,
      name: 'Fake News Detection',
      image: '/images/news.png',
      badge: '95% Validation Accuracy',
      desc: 'Trained an NLP model on 10,000+ news articles to classify real headlines from fake ones. Pipeline cleans and tokenises text, builds a TF-IDF matrix, then runs classification. Hits 95% accuracy on the validation set.',
      highlights: [
        { icon: 'activity', text: '60% dimensionality reduction via TF-IDF' },
        { icon: 'binary', text: '15+ custom text features engineered' },
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP'],
      github: 'https://github.com/abhiofficial1611/fake-news-detector',
    },
    {
      id: 3,
      name: 'Fabric Classification CNN',
      image: '/images/fabric.png',
      badge: '85.71% Test Accuracy',
      desc: 'A CNN that identifies fabric types from photos. Built on MobileNet so it stays small (~5MB), ships with a Streamlit app, and uses Grad-CAM to highlight the exact regions of the image that drove the model\'s decision.',
      highlights: [
        { icon: 'file-code', text: '1.09M parameters, ~5MB total' },
        { icon: 'expand', text: '63× dataset augmentation' },
      ],
      tech: ['Python', 'TensorFlow / Keras', 'MobileNet', 'Streamlit', 'Grad-CAM'],
      github: 'https://github.com/abhiofficial1611/fabric-classification-cnn',
    },
  ];

  // Smaller projects get the compact 3-col grid
  const compact = [
    {
      id: 4,
      name: 'Aadhaar Stress Analysis',
      image: '/images/aadhaar.png',
      badge: 'Stress Index Mapping',
      desc: 'Looked at Aadhaar enrolment and update data across districts to flag regions under the most operational pressure using a custom stress index.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/abhiofficial1611/aadhaar-stress-analysis',
    },
    {
      id: 5,
      name: 'Employee Attrition — IBM',
      image: '/images/attrition.png',
      badge: '1,470+ records',
      desc: 'Used IBM\'s HR dataset to find out why employees leave — analysing overtime, tenure, and work-life balance to surface the highest-risk employee groups.',
      tech: ['SQL', 'Python', 'Pandas', 'Excel'],
      github: 'https://github.com/abhiofficial1611/employee-attrition-ibm',
    },
    {
      id: 6,
      name: 'Business Analytics Dashboard',
      image: '/images/dashboard.png',
      badge: '~70% faster reporting',
      desc: 'Built Power BI dashboards for month-over-month performance tracking and revenue forecasting, plus automated data cleaning pipelines so data goes in clean each time.',
      tech: ['Power BI', 'Python', 'Power Query', 'Regression'],
      github: 'https://github.com/abhiofficial1611/business-analytics-dashboard',
    },
  ];

  return (
    <section id="projects" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Selected work</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div id="projects-container" className="projects-grid">
        {/* Featured — horizontal cards */}
        {featured.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
              <span className="metric-badge">{project.badge}</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-highlights">
                {project.highlights.map((h, idx) => (
                  <span key={idx}>
                    <i data-lucide={h.icon}></i> {h.text}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i data-lucide="github"></i> View source
                  <i data-lucide="external-link" className="link-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Compact — 3-column grid */}
        <div className="compact-row">
          {compact.map((project) => (
            <div key={project.id} className="project-card compact">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <span className="metric-badge">{project.badge}</span>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i data-lucide="github"></i> View source
                    <i data-lucide="external-link" className="link-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
