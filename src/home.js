//Логіка сторінки Home
import { initHomePage } from './js/handlers';
import { closeModal } from './js/modal';
import { refs } from './js/refs';
import { handleCategoryClick } from './js/handlers';

document.addEventListener('DOMContentLoaded', initHomePage);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.categoryList.addEventListener('click', handleCategoryClick);
