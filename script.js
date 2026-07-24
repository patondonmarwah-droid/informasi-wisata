document.addEventListener('DOMContentLoaded', () => {
  // Fitur 1: Navigasi Mobile (Hamburger Menu)
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Fitur 2: Filter Pencarian Destinasi
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const destinationCards = document.querySelectorAll('.destination-card');

  function filterDestinations() {
    const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryValue = categoryFilter ? categoryFilter.value : 'all';

    destinationCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const category = card.dataset.category;

      const matchesSearch = title.includes(searchValue);
      const matchesCategory = categoryValue === 'all' || category === categoryValue;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterDestinations);
  if (categoryFilter) categoryFilter.addEventListener('change', filterDestinations);

  // Fitur 3: Modal Lightbox Galeri
  const galleryImages = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.close-modal');

  if (galleryImages.length > 0 && modal && modalImg) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Fitur 4: Validasi Form Kontak
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        formStatus.textContent = 'Harap isi semua kolom formulir!';
        formStatus.style.color = 'red';
      } else {
        formStatus.textContent = `Terima kasih ${name}, pesan Anda berhasil dikirim!`;
        formStatus.style.color = 'green';
        contactForm.reset();
      }
    });
  }
});