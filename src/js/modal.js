const modal = document.querySelector('.modal');

function openModal() {
  modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('modal--is-open');
  document.body.style.overflow = '';
}

document
  .querySelector('.modal__close-btn')
  .addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
