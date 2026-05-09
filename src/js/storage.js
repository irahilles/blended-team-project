import { i } from 'vite/dist/node/types.d-aGj9QkWt.js';

export function getCartToLS() {
  try {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  } catch (error) {
    console.log(error.message);
  }
}

export function saveCartToLS(item) {
  const cart = getCartToLS();
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
}


export function removeFromCart(id) {
  const cart = getCartToLS();
  const updateCart = cart.filter(itemId => itemId !== id);

  localStorage.setItem("cart", JSON.stringify(updateCart));
}


export function getWishlistToLS() {
  try {
    return JSON.parse(localStorage.getItem("wishlist")) ?? [];
  } catch (error) {
    console.log(error.message);
  }
}

export function saveWishlistToLS(item) {
  const wishlist = getWishlistToLS();
  wishlist.push(item);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

export function removeFromWishlist(id) {
  const wishlist = getWishlistToLS();
  const updateWishlist = wishlist.filter(itemId => itemId !== id);

  localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
}

