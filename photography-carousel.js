(function () {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const image = document.getElementById('carousel-image');
  const caption = document.getElementById('carousel-caption');
  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');

  if (!image || !caption || thumbs.length === 0 || !prev || !next) return;

  let index = thumbs.findIndex((thumb) => thumb.classList.contains('is-active'));
  if (index < 0) index = 0;

  function render(newIndex) {
    index = (newIndex + thumbs.length) % thumbs.length;
    const selected = thumbs[index];
    const src = selected.getAttribute('data-src') || '';
    const alt = selected.getAttribute('data-alt') || 'Photography image';
    const text = selected.getAttribute('data-caption') || '';

    image.src = src;
    image.alt = alt;
    caption.textContent = text;

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('is-active', i === index);
    });
  }

  prev.addEventListener('click', () => render(index - 1));
  next.addEventListener('click', () => render(index + 1));

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => render(i));
  });
})();
