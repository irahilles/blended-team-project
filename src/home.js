//Логіка сторінки Home
import { getProducts } from './products-api.js';
import { createProductsMarkup } from './render-functions.js';

const productsList = document.querySelector('.products');

async function loadProducts() {
  try {
    const data = await getProducts(1);
    productsList.innerHTML = createProductsMarkup(data.products);
  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

loadProducts();
