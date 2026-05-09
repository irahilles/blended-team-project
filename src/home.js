//Логіка сторінки Home
import { handleCategoryClick } from './js/handlers';
import { refs } from './js/refs';
import { renderCategories } from './js/render-function';
import { getProducts } from './products-api.js';

refs.categoryList.addEventListener('click', handleCategoryClick);
