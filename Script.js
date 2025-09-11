document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handler (demo-only: no backend)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  // Simulate async send
  status.textContent = 'Sending…';

  setTimeout(() => {
    status.textContent = `Thanks, ${data.name}! Your message has been noted.`;
    form.reset();
  }, 600);
});
