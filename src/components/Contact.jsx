import React, { useState, useEffect } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', type: '', visible: false });

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [copied, isSubmitting, feedback.visible]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhiofficial1611@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formState;

    if (!name || !email || !message) {
      setFeedback({
        text: 'Please fill out all required fields.',
        type: 'error',
        visible: true
      });
      return;
    }

    setIsSubmitting(true);

    fetch('https://formsubmit.co/ajax/abhiofficial1611@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, message })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setFeedback({
          text: 'Thank you! Abhishek has received your message.',
          type: 'success',
          visible: true
        });
        setFormState({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        setFeedback({
          text: 'Oops! Something went wrong. Please email directly.',
          type: 'error',
          visible: true
        });
        console.error('FormSubmit Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setFeedback((prev) => ({ ...prev, visible: false }));
        }, 6000);
      });
  };

  return (
    <section id="contact" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Get in Touch</span>
        <h2 className="section-title">Connect &amp; Collaborate</h2>
      </div>
      <div id="contact-card" className="contact-card-container">
        
        {/* Contact Info Card */}
        <div className="contact-info-card glass-card">
          <h3 className="contact-card-title">Let's build something exceptional.</h3>
          <p className="contact-card-sub text-gradient">Currently designing active pipelines and full-stack environments.</p>

          <div className="contact-methods">
            {/* Email Contact */}
            <div 
              className={`contact-item ${copied ? 'copied' : ''}`} 
              id="copy-email-btn"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
            >
              <div className="contact-icon-wrapper">
                <i data-lucide="mail"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Address</span>
                <span className="contact-value">abhiofficial1611@gmail.com</span>
              </div>
              <button className="copy-action-btn" title="Copy to clipboard">
                {copied ? (
                  <i data-lucide="check" className="check-icon"></i>
                ) : (
                  <i data-lucide="copy" className="copy-icon"></i>
                )}
              </button>
            </div>

            {/* GitHub Contact */}
            <a 
              href="https://github.com/abhiofficial1611" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item link-item"
            >
              <div className="contact-icon-wrapper">
                <i data-lucide="github"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Code Repositories</span>
                <span className="contact-value">GitHub / abhiofficial1611</span>
              </div>
              <div className="copy-action-btn">
                <i data-lucide="external-link"></i>
              </div>
            </a>

            {/* LinkedIn Contact */}
            <a 
              href="https://www.linkedin.com/in/abhitiwari1611/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item link-item"
            >
              <div className="contact-icon-wrapper">
                <i data-lucide="linkedin"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Professional Profile</span>
                <span className="contact-value">LinkedIn / abhitiwari1611</span>
              </div>
              <div className="copy-action-btn">
                <i data-lucide="external-link"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="contact-form-card glass-card" style={{ padding: '50px' }}>
          <h3 className="contact-card-title">Send a Message</h3>
          <p className="contact-card-sub text-gradient">Or initiate a conversation directly via form submission.</p>
          
          <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Name *</label>
              <input 
                type="text" 
                name="name" 
                id="form-name" 
                placeholder="Your Name" 
                value={formState.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="form-email">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  id="form-email" 
                  placeholder="Your Email" 
                  value={formState.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-phone">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="form-phone" 
                  placeholder="Your Number" 
                  value={formState.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="form-message">Message *</label>
              <textarea 
                name="message" 
                id="form-message" 
                rows="4" 
                placeholder="Your Message" 
                value={formState.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <i data-lucide="send"></i>
                </>
              )}
            </button>
          </form>
          
          {feedback.visible && (
            <div className={`form-feedback ${feedback.type}`}>
              {feedback.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
