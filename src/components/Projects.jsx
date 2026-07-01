import React, { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const projectsData = [
    {
      id: 1,
      name: 'Netflix Recommendation System',
      image: '/images/netflix.png',
      badge: '85% Rating Precision',
      desc: 'Built a movie recommendation engine on top of a dataset of 17,000+ Netflix titles. It uses content-based filtering (genre, cast, description) and collaborative filtering to suggest what to watch next. There\'s a React dashboard to browse recommendations.',
      highlights: [
        { icon: 'zap', text: '200ms average response time' },
        { icon: 'layers', text: 'Matches across 5,000+ titles' }
      ],
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'REST API'],
      github: 'https://github.com/abhiofficial1611/netflix-recommendation'
    },
    {
      id: 2,
      name: 'Fake News Detection',
      image: '/images/news.png',
      badge: '95% Validation Accuracy',
      desc: 'Trained an NLP model on 10,000+ news articles to tell real headlines apart from fake ones. The pipeline cleans and tokenises text, builds a TF-IDF matrix, then runs classification. Hits 95% accuracy on the validation set.',
      highlights: [
        { icon: 'activity', text: '60% dimensionality reduction' },
        { icon: 'binary', text: '15+ custom text features' }
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP'],
      github: 'https://github.com/abhiofficial1611/fake-news-detector'
    },
    {
      id: 3,
      name: 'Fabric Classification System',
      image: '/images/fabric.png',
      badge: '85.71% Test Accuracy',
      desc: 'A CNN that identifies fabric types from photos. Built on MobileNet so it stays small (around 5MB), and ships with a Streamlit app that highlights the parts of the image the model actually looked at to make its decision.',
      highlights: [
        { icon: 'file-code', text: '1.09M parameters, ~5MB total size' },
        { icon: 'expand', text: '63x dataset augmentation' }
      ],
      tech: ['Python', 'TensorFlow / Keras', 'MobileNet', 'Streamlit', 'OpenCV', 'Grad-CAM'],
      github: 'https://github.com/abhiofficial1611/fabric-classification-cnn'
    },
    {
      id: 4,
      name: 'Aadhaar Operational Stress Analysis',
      image: '/images/aadhaar.png',
      badge: 'Stress Index Mapping',
      desc: 'Looked at Aadhaar enrolment and update data across districts to figure out which regions are under the most operational pressure. Built a simple stress index (updates relative to enrolments) to flag districts that need attention.',
      highlights: [
        { icon: 'activity', text: 'Update-to-enrolment ratio per district' },
        { icon: 'alert-triangle', text: 'Flags biometric vs demographic issues separately' }
      ],
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analytics'],
      github: 'https://github.com/abhiofficial1611/aadhaar-stress-analysis'
    },
    {
      id: 5,
      name: 'Employee Attrition Analysis (IBM)',
      image: '/images/attrition.png',
      badge: '1,470+ records',
      desc: 'Used IBM\'s HR dataset to find out why employees leave. Looked at factors like overtime, how long people had been at the company, and work-life balance scores to identify which groups were most likely to quit.',
      highlights: [
        { icon: 'trending-up', text: 'Overtime, tenure & work-life balance analysis' },
        { icon: 'pie-chart', text: 'Identifies highest-risk employee groups' }
      ],
      tech: ['SQL', 'Python', 'Pandas', 'Excel', 'Data Segmentation'],
      github: 'https://github.com/abhiofficial1611/employee-attrition-ibm'
    },
    {
      id: 6,
      name: 'Business Analytics Dashboard',
      image: '/images/dashboard.png',
      badge: '~70% faster reporting',
      desc: 'Built Power BI dashboards to track month-over-month business performance and forecast revenue trends. Also wrote cleaning scripts in Python and Power Query so data goes in clean without manual prep each time.',
      highlights: [
        { icon: 'layout', text: 'KPI tracking & revenue forecasting in Power BI' },
        { icon: 'cpu', text: 'Automated data cleaning pipeline' }
      ],
      tech: ['Power BI', 'Python', 'Pandas', 'Power Query', 'Regression'],
      github: 'https://github.com/abhiofficial1611/business-analytics-dashboard'
    }
  ];

  return (
    <section id="projects" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Things I've built</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <div id="projects-container" className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
              <span className="metric-badge">{project.badge}</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <span key={idx}>
                    <i data-lucide={highlight.icon}></i> {highlight.text}
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
                  <i data-lucide="github"></i> View Source Code{' '}
                  <i data-lucide="external-link" className="link-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
