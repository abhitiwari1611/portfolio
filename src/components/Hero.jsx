import React, { useEffect, useRef } from 'react';

function Hero() {
  const scrambleRef = useRef(null);

  useEffect(() => {
    const target = scrambleRef.current;
    if (!target) return;

    const phrases = [
      'Software Engineer',
      'Full-Stack Developer',
      'Backend Developer',
      'Systems & MIS Developer',
      'Computer Engineering Student'
    ];

    class TextScrambler {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameId);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="scramble-effect">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameId = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      destroy() {
        cancelAnimationFrame(this.frameId);
      }
    }

    const scrambler = new TextScrambler(target);
    let counter = 0;
    let isMounted = true;
    let timeoutId;

    const nextPhrase = () => {
      if (!isMounted) return;
      scrambler.setText(phrases[counter]).then(() => {
        if (isMounted) {
          timeoutId = setTimeout(nextPhrase, 3000);
        }
      });
      counter = (counter + 1) % phrases.length;
    };

    nextPhrase();

    const heroSec = document.getElementById('hero');
    if (heroSec) {
      heroSec.classList.add('active');
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    return () => {
      isMounted = false;
      scrambler.destroy();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-tag-glow">Open to new opportunities</div>
        <h1 className="hero-title">ABHISHEK TIWARI</h1>
        <div className="hero-subtitle">
          <span id="scramble-prefix">I am a </span>
          <span id="scramble-target" ref={scrambleRef} className="text-gradient">
            Full-Stack Developer
          </span>
        </div>
        <p className="hero-desc">
          Computer Engineering student at PSIT Kanpur, currently working as a Junior Developer at South Point &amp; Company.
          I build full-stack web applications, backend services, and data pipelines that are fast, maintainable, and actually work.
        </p>
        <div className="hero-actions">
          <a href="#projects-container" className="btn btn-primary">
            See my work <i data-lucide="arrow-down"></i>
          </a>
          <a href="/AbhishekTiwari_SoftwareEngineer.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View CV <i data-lucide="eye"></i>
          </a>
          <a href="/AbhishekTiwari_SoftwareEngineer.pdf" download="AbhishekTiwari_SoftwareEngineer.pdf" className="btn btn-outline">
            Download CV <i data-lucide="download"></i>
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-glow"></div>
          <img src="/images/profile.jpg" alt="Abhishek Tiwari" className="hero-avatar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
