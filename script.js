// SparkleNest — interactions
(() => {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav__toggle');

  // Sticky nav shadow
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav__links a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('is-open'))
  );

  // Reveal on scroll
  const io = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();

// Form handler (demo)
function handleBook(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const original = btn.textContent;
  btn.textContent = 'Booking… ✦';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Booked! We\'ll call you shortly';
    setTimeout(() => { btn.textContent = original; btn.disabled = false; e.target.reset(); }, 2600);
  }, 900);
  return false;
}
