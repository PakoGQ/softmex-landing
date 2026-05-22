// ============================================================
// SHARED JS — SoftMex (COMPANY_NAME provisional)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Lucide icons ────────────────────────────────────────────
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // ── Navbar scroll ───────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── Mobile menu ─────────────────────────────────────────────
  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle  = document.getElementById('navToggle');
  const mobileClose = document.getElementById('mobileClose');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) closeMobileMenu();
  });

  // ── Active nav link ─────────────────────────────────────────
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll reveal ───────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => revealObs.observe(el));

  // ── Animated counters ───────────────────────────────────────
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2000;
    const start    = performance.now();
    (function tick(now) {
      const t     = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    })(start);
  }

  const counterEls = document.querySelectorAll('[data-target]');
  if (counterEls.length > 0) {
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObs.observe(el));
  }

  // ── Smooth scroll (solo para links #anchor en la misma página) ─
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // ── FAQ accordion (proceso.html) ────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.faq-item');
      const isOpen  = item.classList.contains('open');
      // Cerrar todos
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Abrir el clickeado si estaba cerrado
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Contact form UX ─────────────────────────────────────────
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('formSubmit');
  if (form && submitBtn) {
    form.addEventListener('submit', () => {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled    = true;
    });
  }

});

// Expuesta globalmente para onclick inline en mobile menu
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}
