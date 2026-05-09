import { categoryList } from './refs';

function renderCategoryButton(category) {
  return `
  <li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
  </li>
  `.trim();
}

export function renderCategories(categories) {
  categories = ['all', ...categories];
  const markup = categories.map(renderCategoryButton).join('');
  categoryList.innerHTML = markup;
}
