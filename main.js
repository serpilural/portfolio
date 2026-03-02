const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

// ── Fade-up observer ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Hero clip-reveal + photo curtain ───
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.hero-name').classList.add('revealed');
    document.querySelector('.hero-right').classList.add('revealed');
  }, 300);
});

// ── Section heading reveals ───
const headingObserver = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('revealed');
      headingObserver.unobserve(el.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal-heading').forEach(h => headingObserver.observe(h));

// ── Skill chip stagger ───
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('revealed');
      skillsObserver.unobserve(el.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-list').forEach(list => {
  list.querySelectorAll('.skill-chip').forEach((chip, i) => {
    chip.style.setProperty('--i', i);
  });
  skillsObserver.observe(list);
});

// ── Scroll progress bar ───
const progressBar = document.getElementById('scroll-progress');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      ticking = false;
    });
    ticking = true;
  }
});

// ── Book filter (two-phase animation) ───
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    const cards = document.querySelectorAll('.book-card');

    // Phase 1: fade out cards that should hide
    cards.forEach(c => {
      const shouldHide = f !== 'all' && c.dataset.category !== f;
      if (shouldHide && !c.classList.contains('filter-hidden')) {
        c.classList.add('filter-out');
      }
    });

    // Phase 2: after fade out, toggle display and fade in new cards
    setTimeout(() => {
      cards.forEach(c => {
        const shouldHide = f !== 'all' && c.dataset.category !== f;
        if (shouldHide) {
          c.classList.add('filter-hidden');
          c.classList.remove('filter-out');
        } else {
          const wasHidden = c.classList.contains('filter-hidden');
          c.classList.remove('filter-hidden', 'filter-out');
          if (wasHidden) {
            c.classList.add('filter-out');
            requestAnimationFrame(() => {
              requestAnimationFrame(() => c.classList.remove('filter-out'));
            });
          }
        }
      });
    }, 300);
  });
});

// ── Mobile nav toggle ───
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Back to top ───
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('visible', window.scrollY > 600);
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
