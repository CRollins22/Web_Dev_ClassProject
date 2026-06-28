const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterButtons.length > 0) {
  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterButtons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      menuItems.forEach(function(item) {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName');
    const email = document.getElementById('emailAddress');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    [name, subject, message].forEach(function(field) {
      if (field.value.trim() === '') {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        valid = false;
      } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      }
    });

    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    if (valid) {
      document.getElementById('formSuccess').classList.remove('d-none');
      contactForm.reset();
      contactForm.querySelectorAll('.is-valid').forEach(function(f) { f.classList.remove('is-valid'); });
    }
  });
}

const darkToggle = document.getElementById('darkModeToggle');

if (darkToggle) {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = 'Light';
  }
  darkToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    darkToggle.textContent = isDark ? 'Light' : 'Dark';
  });
}

const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', function() {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}