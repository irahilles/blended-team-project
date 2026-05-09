const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

function openModal() {
  modal.classList.add('modal--is-open');
}

function closeModal() {
  modal.classList.remove('modal--is-open');
}
