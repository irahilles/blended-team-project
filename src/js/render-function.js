import { refs } from './refs';

export function renderCategories(categories) {
  const allCategories = ['all', ...categories];
  const markup = allCategories
    .map((category, idx) => {
      const buttonClass = idx === 0 ? 'categories__btn--active' : '';
      return `<li class="categories__item"><button class="categories__btn ${buttonClass}" type="button">${category}</button></li>`;
    })
    .join('');
  refs.categoryList.innerHTML = markup;
}
