import { getCategories, getProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';
import { refs } from './refs';

let currentPage = 1;
export async function initHomePage() {
  try {
    const categories = await getCategories();
    renderCategories(categories);
    const { products } = await getProducts(currentPage);
    renderProducts(products);
  } catch (err) {
    console.error('Error initializing home page', err);
  }
}

export function handleCategoryClick(event) {
  const category = event.target.textContent;
  if (!category) return;

  const button = event.target;
  const activeButton = refs.categoryList.querySelector(
    '.categories__btn--active'
  );
  activeButton.classList.toggle('categories__btn--active', false);
  button.classList.toggle('categories__btn--active', true);
}
