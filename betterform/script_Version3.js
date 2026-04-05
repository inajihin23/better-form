// Fade-in animasi untuk homepage fitur (bonus)
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 200 + 100);
  });
});