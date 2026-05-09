import { refs } from "./refs";

export function openModal() {
  refs.modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscapePress);
  refs.modal.addEventListener('click', onBackdropClick);
}

export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscapePress);
  refs.modal.removeEventListener('click', onBackdropClick);
}


function onEscapePress(e){
if (e.key === 'Escape') closeModal();
}

function onBackdropClick(e){
if (e.target === refs.modal) closeModal();
}

