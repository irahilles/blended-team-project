import"./assets/styles-JE8YjOlG.js";import{a as n}from"./assets/vendor-B1ZHW564.js";const p="https://dummyjson.com/products",d={CATEGORIES:"/category-list",PRODUCTS:"",PRODUCTS_BY_CATEGORY:"/category/"};n.defaults.baseURL=p;async function m(){const{data:t}=await n.get(d.CATEGORIES);return t}async function _(t=1){const e=(t-1)*12,{data:s}=await n.get(`${d.PRODUCTS}?limit=12&skip=${e}`);return s}const o={categoryList:document.querySelector(".categories"),productList:document.querySelector(".products"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn")};function g(t){const e=t.map(({id:s,thumbnail:a,title:c,brand:i,category:l,price:u})=>`
        <li class="products__item" data-id="${s}">
          <img class="products__image" src="${a}" alt="${c}" />
          <p class="products__title">${c}</p>
          <p class="products__brand">
            <span class="products__brand--bold">Brand:</span> ${i}
          </p>
          <p class="products__category">Category: ${l}</p>
          <p class="products__price">Price: $${u}</p>
        </li>
      `).join("");o.productList.insertAdjacentHTML("beforeend",e)}function y(t){const s=["all",...t].map((a,c)=>`<li class="categories__item"><button class="categories__btn ${c===0?"categories__btn--active":""}" type="button">${a}</button></li>`).join("");o.categoryList.innerHTML=s}let C=1;async function f(){try{const t=await m();y(t);const{products:e}=await _(C);g(e)}catch(t){console.error("Error initializing home page",t)}}function r(){o.modal.classList.remove("modal--is-open"),document.body.style.overflow="",document.removeEventListener("keydown",b),o.modal.removeEventListener("click",E)}function b(t){t.key==="Escape"&&r()}function E(t){t.target===o.modal&&r()}document.addEventListener("DOMContentLoaded",f);o.modalCloseBtn.addEventListener("click",r);
//# sourceMappingURL=index.js.map
