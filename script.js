document.querySelectorAll('#year').forEach(el => { el.textContent = new Date().getFullYear(); });
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const expanded = lightbox.querySelector('img');
  const dismiss = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); expanded.removeAttribute('src'); };
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    expanded.src = button.dataset.image;
    expanded.alt = button.dataset.alt || 'Expanded project image';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.querySelector('button').focus();
  }));
  lightbox.querySelector('button').addEventListener('click', dismiss);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) dismiss(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') dismiss(); });
}
