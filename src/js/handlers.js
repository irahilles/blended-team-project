import { getCategories, getProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';
import { getProducts, getProductsByCategory } from './products-api';
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

export async function handleCategoryClick(event) {
  const button = event.target;
  const category = button.textContent;
  if (!category) return;
  if (!(button instanceof HTMLButtonElement)) return;

  const activeButton = refs.categoryList.querySelector(
    '.categories__btn--active'
  );
  activeButton.classList.toggle('categories__btn--active', false);
  button.classList.toggle('categories__btn--active', true);

  try {
    const products =
      category === 'all'
        ? await getProducts()
        : await getProductsByCategory(category);

    const noProductsFound = products.length === 0;

    refs.notFound.classList.toggle('not-found--visible', noProductsFound);
    if (noProductsFound) return;

    // renderProducts(products)
  } catch (err) {
    console.error(err);
  }
}
