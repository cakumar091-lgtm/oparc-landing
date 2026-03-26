// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Shrink nav on scroll
window.addEventListener('scroll', function () {
  document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 10);
});

// Simple form submission feedback (works with Formspree or similar)
var form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    var action = form.getAttribute('action');
    // If Formspree not configured, prevent submit and show message
    if (!action || action.includes('FORM_ID')) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Please email kiren@oparc.in';
      btn.disabled = true;
      btn.style.opacity = '0.7';
    }
  });
}
