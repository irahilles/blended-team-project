import { refs } from './refs';

export function renderCategories(categories) {
  const allCategories = ['all', ...categories];
  const markup = allCategories
    .map(category =>
      `
  <li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
  </li>
  `.trim()
    )
    .join('');
  refs.categoryList.innerHTML = markup;
}
