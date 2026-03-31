(function () {
  const modal = document.getElementById('map-modal');
  const modalImage = document.getElementById('map-modal-image');
  const closeButton = document.querySelector('.map-modal-close');
  const triggers = Array.from(document.querySelectorAll('[data-map-viewer]'));

  if (!modal || !modalImage || !closeButton || triggers.length === 0) return;

  function closeModal() {
    modal.hidden = true;
    modalImage.removeAttribute('src');
    modalImage.removeAttribute('alt');
    document.body.style.overflow = '';
  }

  triggers.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      const image = link.querySelector('img');
      if (!href || !image) return;

      modalImage.src = href;
      modalImage.alt = image.alt || 'Expanded map view';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
})();
