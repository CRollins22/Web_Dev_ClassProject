const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterButtons.length > 0) {
  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterButtons.forEach(function(b) {
        b.classList.remove('active');
      });
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
      contactForm.querySelectorAll('.is-valid').forEach(function(f) {
        f.classList.remove('is-valid');
      });
    }
  });
}