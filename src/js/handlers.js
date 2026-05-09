import { refs } from './refs';

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
