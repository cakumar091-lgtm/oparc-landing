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

// Contact form — submits to backend API
var API_BASE = 'https://procuretrail.oparc.in/api/v1';
var form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    var payload = {
      name: form.querySelector('#name').value.trim(),
      email: form.querySelector('#email').value.trim(),
      organization: form.querySelector('#org').value.trim(),
      message: form.querySelector('#message').value.trim()
    };

    fetch(API_BASE + '/public/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function (res) {
      if (!res.ok) {
        return res.json().then(function (err) {
          throw new Error(err.detail || 'Something went wrong. Please try again.');
        });
      }
      return res.json();
    })
    .then(function (data) {
      // Show success message
      form.innerHTML = '<div class="form-success">' +
        '<h3>Check Your Email</h3>' +
        '<p>We\'ve sent a confirmation link to <strong>' + payload.email + '</strong>. ' +
        'Click the link to confirm your inquiry and we\'ll get back to you shortly.</p>' +
        '</div>';
    })
    .catch(function (err) {
      btn.textContent = originalText;
      btn.disabled = false;
      // Show error below button
      var existing = form.querySelector('.form-error');
      if (existing) existing.remove();
      var errDiv = document.createElement('p');
      errDiv.className = 'form-error';
      errDiv.style.color = '#e74c3c';
      errDiv.style.marginTop = '12px';
      errDiv.style.fontSize = '14px';
      errDiv.textContent = err.message;
      btn.parentNode.appendChild(errDiv);
    });
  });
}
