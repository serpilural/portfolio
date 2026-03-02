const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

const observer = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.book-card').forEach(b => {
      b.classList.toggle('hidden', f !== 'all' && b.dataset.category !== f);
    });
  });
});
