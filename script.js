// Modern Premium Portfolio Script System

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 1. Canvas Particles Engine
    initParticles();

    // 2. Subtitle Text Scrambler
    initTextScrambler();

    // 4. Clipboard Copy System
    initClipboard();

    // 5. Scroll Reveal System
    initScrollReveal();

    // 6. Mobile Nav System
    initMobileNav();

    // 7. Contact Form Simulation
    initContactForm();
});

/* ==========================================
   1. Canvas Particles Engine
   ========================================== */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    // Mouse details
    const mouse = {
        x: null,
        y: null,
        radius: 120 // Connect radius
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticlesArray();
    }

    // Particle Object
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Draw particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Update position
        update() {
            // Check boundary collisions
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Interactive pull towards mouse
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    // Subtle pull
                    this.x += dx * 0.02;
                    this.y += dy * 0.02;
                }
            }

            // Move particle
            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }
    }

    function initParticlesArray() {
        particlesArray = [];
        let numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
        // Cap for performance
        if (numberOfParticles > 120) numberOfParticles = 120;
        if (numberOfParticles < 40) numberOfParticles = 40;

        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            
            // Alternating purple / cyan colors
            let color = i % 2 === 0 ? 'rgba(139, 92, 246, 0.45)' : 'rgba(6, 182, 212, 0.45)';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Connect particles close to each other
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 95) {
                    opacityValue = 1 - (distance / 95);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacityValue * 0.15})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            // Connect particles to mouse
            if (mouse.x !== null && mouse.y !== null) {
                let dx = particlesArray[a].x - mouse.x;
                let dy = particlesArray[a].y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    opacityValue = 1 - (distance / mouse.radius);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue * 0.25})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

/* ==========================================
   2. Subtitle Text Scrambler
   ========================================== */
function initTextScrambler() {
    const target = document.getElementById('scramble-target');
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
    }

    const scrambler = new TextScrambler(target);
    let counter = 0;

    const nextPhrase = () => {
        scrambler.setText(phrases[counter]).then(() => {
            setTimeout(nextPhrase, 3000);
        });
        counter = (counter + 1) % phrases.length;
    };

    nextPhrase();
}


/* ==========================================
   4. Clipboard Copy System
   ========================================== */
function initClipboard() {
    setupCopyAction('copy-email-btn', 'abhiofficial1611@gmail.com');
}

function setupCopyAction(triggerId, textToCopy) {
    const trigger = document.getElementById(triggerId);
    if (!trigger) return;

    const copyIcon = trigger.querySelector('.copy-icon');
    const checkIcon = trigger.querySelector('.check-icon');

    trigger.addEventListener('click', (e) => {
        // Prevent default if it's inside link structure
        e.preventDefault();
        e.stopPropagation();

        navigator.clipboard.writeText(textToCopy).then(() => {
            // Swap icons
            if (copyIcon && checkIcon) {
                copyIcon.classList.add('hidden');
                checkIcon.classList.remove('hidden');
                trigger.classList.add('copied-glow');

                setTimeout(() => {
                    copyIcon.classList.remove('hidden');
                    checkIcon.classList.add('hidden');
                    trigger.classList.remove('copied-glow');
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy to clipboard: ', err);
        });
    });
}

/* ==========================================
   5. Scroll Reveal System
   ========================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Make hero animate instantly
    const hero = document.getElementById('hero');
    if (hero) {
        hero.classList.add('active');
    }
}

/* ==========================================
   6. Mobile Nav System
   ========================================== */
function initMobileNav() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const linksContainer = document.querySelector('.nav-links');
    if (!toggle || !linksContainer) return;

    toggle.addEventListener('click', () => {
        // Toggle mobile class
        linksContainer.classList.toggle('mobile-active');
        
        // Simple overlay style insertion
        if (linksContainer.classList.contains('mobile-active')) {
            linksContainer.style.display = 'flex';
            linksContainer.style.flexDirection = 'column';
            linksContainer.style.position = 'absolute';
            linksContainer.style.top = '100%';
            linksContainer.style.left = '0';
            linksContainer.style.width = '100%';
            linksContainer.style.background = 'rgba(7, 5, 20, 0.95)';
            linksContainer.style.padding = '20px';
            linksContainer.style.borderBottom = '1px solid var(--border-color)';
            linksContainer.style.gap = '20px';
            toggle.innerHTML = '<i data-lucide="x"></i>';
        } else {
            linksContainer.style.display = '';
            toggle.innerHTML = '<i data-lucide="menu"></i>';
        }
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

    // Close when clicking nav-link in mobile mode
    const navLinks = document.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (linksContainer.classList.contains('mobile-active')) {
                linksContainer.classList.remove('mobile-active');
                linksContainer.style.display = '';
                toggle.innerHTML = '<i data-lucide="menu"></i>';
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });
    });
}

/* ==========================================
   7. Contact Form Simulation Engine
   ========================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form || !feedback) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const phone = document.getElementById('form-phone').value;
        const message = document.getElementById('form-message').value;
        const submitBtn = form.querySelector('.form-submit-btn');
        
        if (!name || !email || !message) {
            feedback.innerText = 'Please fill out all required fields.';
            feedback.className = 'form-feedback error';
            feedback.classList.remove('hidden');
            return;
        }
        
        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        
        // Post data to FormSubmit AJAX endpoint
        fetch("https://formsubmit.co/ajax/abhiofficial1611@gmail.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            feedback.innerText = 'Thank you! Abhishek has received your message.';
            feedback.className = 'form-feedback success';
            feedback.classList.remove('hidden');
            form.reset();
        })
        .catch(error => {
            feedback.innerText = 'Oops! Something went wrong. Please email directly.';
            feedback.className = 'form-feedback error';
            feedback.classList.remove('hidden');
            console.error('FormSubmit Error:', error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Auto hide feedback after 6 seconds
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 6000);
        });
    });
}


