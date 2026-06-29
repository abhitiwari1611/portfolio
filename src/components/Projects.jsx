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
      desc: 'Cleaned and pre-processed 17,000+ title entries to implement a content-based recommender system alongside collaborative filtering algorithms. Features modular REST endpoints and an interactive React web dashboard.',
      highlights: [
        { icon: 'zap', text: '200ms Recommendation Latency' },
        { icon: 'layers', text: 'Content similarity matching across 5,000+ titles' }
      ],
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'REST API'],
      github: 'https://github.com/abhiofficial1611/netflix-recommendation'
    },
    {
      id: 2,
      name: 'Fake News Detection',
      image: '/images/news.png',
      badge: '95% Validation Accuracy',
      desc: 'An NLP classification pipeline trained on 10,000+ news articles. Performs state-of-the-art tokenization, stopword removal, and TF-IDF matrix generation to classify misinformation with statistical certainty.',
      highlights: [
        { icon: 'activity', text: '60% Dimensionality Reduction' },
        { icon: 'binary', text: '15+ Engineered Custom Text Features' }
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP'],
      github: 'https://github.com/abhiofficial1611/fake-news-detector'
    },
    {
      id: 3,
      name: 'Fabric Classification System',
      image: '/images/fabric.png',
      badge: '85.71% Test Accuracy',
      desc: 'A lightweight CNN-based classifier utilizing custom MobileNet layers to differentiate fabric compositions. Integrates a Streamlit dashboard mapping explanation regions via Grad-CAM heatmaps.',
      highlights: [
        { icon: 'file-code', text: 'Compact 1.09M Parameters (~5MB size)' },
        { icon: 'expand', text: '63x dataset augmentation using ImageDataGenerator' }
      ],
      tech: ['Python', 'TensorFlow / Keras', 'MobileNet', 'Streamlit', 'OpenCV', 'Grad-CAM'],
      github: 'https://github.com/abhiofficial1611/fabric-classification-cnn'
    },
    {
      id: 4,
      name: 'Aadhaar Operational Stress Analysis',
      image: '/images/aadhaar.png',
      badge: 'Stress Index Mapping',
      desc: 'Analyzed Aadhaar enrolment and update data to assess district-level service loads and operational stress. Formulated a regional Stress Index to quantify updates vs enrolments and isolate biometric/demographic anomalies.',
      highlights: [
        { icon: 'activity', text: 'Updates vs enrolments stress quantification' },
        { icon: 'alert-triangle', text: 'Biometric vs demographic root-cause anomaly detection' }
      ],
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analytics'],
      github: 'https://github.com/abhiofficial1611/aadhaar-stress-analysis'
    },
    {
      id: 5,
      name: 'Employee Attrition Analysis (IBM)',
      image: '/images/attrition.png',
      badge: '1,470+ Record Scan',
      desc: 'Analyzed IBM HR datasets to identify key drivers of employee attrition. Evaluated department-specific KPIs around overtime, tenure, and work-life balance to support corporate retention planning.',
      highlights: [
        { icon: 'trending-up', text: 'Overtime, tenure, and work-life balance KPIs' },
        { icon: 'pie-chart', text: 'High-risk employee group correlation profiling' }
      ],
      tech: ['SQL', 'Python', 'Pandas', 'Excel', 'Data Segmentation'],
      github: 'https://github.com/abhiofficial1611/employee-attrition-ibm'
    },
    {
      id: 6,
      name: 'AI Business Analytics Dashboard & Assistant',
      image: '/images/dashboard.png',
      badge: '~70% Reporting Optimization',
      desc: 'Built interactive Power BI reporting dashboards and ad-hoc query tools mapping month-over-month performance. Automates cleaning pipelines and applies regression forecasting to model revenue trends.',
      highlights: [
        { icon: 'layout', text: 'Power BI KPIs & revenue forecasting dashboards' },
        { icon: 'cpu', text: 'Automated Pandas / Power Query cleaning pipeline' }
      ],
      tech: ['Power BI', 'Python', 'Pandas', 'Power Query', 'Regression'],
      github: 'https://github.com/abhiofficial1611/business-analytics-dashboard'
    }
  ];

  return (
    <section id="projects" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Portfolio</span>
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
