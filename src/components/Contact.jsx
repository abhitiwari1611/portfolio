import React, { useState, useEffect } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', type: '', visible: false });

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [copied, isSubmitting, feedback.visible]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhiofficial1611@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formState;

    if (!name || !email || !message) {
      setFeedback({ text: 'Please fill in name, email, and message.', type: 'error', visible: true });
      return;
    }

    setIsSubmitting(true);

    fetch('https://formsubmit.co/ajax/abhiofficial1611@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(() => {
        setFeedback({ text: 'Message sent — I\'ll get back to you shortly.', type: 'success', visible: true });
        setFormState({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        setFeedback({ text: 'Something went wrong. Email me directly at abhiofficial1611@gmail.com', type: 'error', visible: true });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setFeedback((prev) => ({ ...prev, visible: false })), 6000);
      });
  };

  return (
    <section id="contact" className="section-padding scroll-reveal">
      <div className="section-header">
        <span className="subtitle">Say hello</span>
        <h2 className="section-title">Get in touch</h2>
      </div>

      <div id="contact-card" className="contact-card-container">

        {/* Left — plain contact info, no card chrome */}
        <div className="contact-info-card">
          <h3 className="contact-card-title">Happy to chat.</h3>
          <p className="contact-card-sub">
            Currently working full-time at South Point &amp; Company, but open to interesting
            problems, side projects, and what comes next.
          </p>

          <div className="contact-methods">
            {/* Email — copy on click */}
            <div
              className={`contact-item${copied ? ' copied' : ''}`}
              id="copy-email-btn"
              onClick={handleCopyEmail}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCopyEmail()}
            >
              <div className="contact-icon-wrapper">
                <i data-lucide="mail"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">abhiofficial1611@gmail.com</span>
              </div>
              <button className="copy-action-btn" title={copied ? 'Copied!' : 'Copy email'} tabIndex={-1}>
                {copied
                  ? <i data-lucide="check" className="check-icon"></i>
                  : <i data-lucide="copy"></i>
                }
              </button>
            </div>

            {/* GitHub */}
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
                <span className="contact-label">GitHub</span>
                <span className="contact-value">abhiofficial1611</span>
              </div>
              <div className="copy-action-btn">
                <i data-lucide="external-link"></i>
              </div>
            </a>

            {/* LinkedIn */}
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
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">abhitiwari1611</span>
              </div>
              <div className="copy-action-btn">
                <i data-lucide="external-link"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Right — form, one distinct card treatment */}
        <div className="contact-form-card">
          <h3 className="contact-card-title" style={{ fontSize: '1.3rem', marginBottom: 'var(--s-1)' }}>
            Send a message
          </h3>
          <p className="contact-card-sub" style={{ marginBottom: '0' }}>
            I respond within a day or two.
          </p>

          <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Name *</label>
              <input
                type="text"
                name="name"
                id="form-name"
                placeholder="Your name"
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
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="form-phone"
                  placeholder="Optional"
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
                placeholder="What's on your mind?"
                value={formState.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending…' : (
                <>Send message <i data-lucide="send"></i></>
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
