import { refs } from './refs';

export function renderProducts(products) {
  const markup = products
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
        <li class="products__item" data-id="${id}">
          <img class="products__image" src="${thumbnail}" alt="${title}" />
          <p class="products__title">${title}</p>
          <p class="products__brand">
            <span class="products__brand--bold">Brand:</span> ${brand}
          </p>
          <p class="products__category">Category: ${category}</p>
          <p class="products__price">Price: $${price}</p>
        </li>
      `
    )
    .join('');
refs.productList.insertAdjacentHTML('beforeend', markup);
}

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

