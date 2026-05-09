//Логіка сторінки Home
import { handleCategoryClick } from './js/handlers';
import { refs } from './js/refs';

refs.categoryList.addEventListener('click', handleCategoryClick);
