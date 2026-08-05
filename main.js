// Main Application JavaScript - Jisham Vallikkadan Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initNavbar();
  initMobileMenu();
  initStatCounters();
  initSkillsFilter();
  initContactForm();
  initScrollAnimations();
});

/* --- 1. Dynamic Particle Canvas in Hero --- */
function initParticleCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
      ctx.fill();
    }
  }

  // Create 60 particles
  for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --- 2. Navbar Scroll Effects --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --- 3. Mobile Navigation Menu Toggle --- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

/* --- 4. Animated Statistics Counter --- */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const speed = target / 30;

          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 40);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsBanner = document.querySelector('.stats-banner');
  if (statsBanner) observer.observe(statsBanner);
}

/* --- 5. Skills Category Filter --- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --- 6. Contact Form Submission & Toast --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate Network Request
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      if (toast && toastMsg) {
        toastMsg.textContent = 'Thank you! Your message has been sent to Jisham.';
        toast.classList.add('show');

        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
    }, 1200);
  });
}

/* --- 7. Intersection Observer Fade In --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.glass-card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}
