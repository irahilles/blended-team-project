//Логіка сторінки Home

import { initHomePage } from "./js/handlers";
import { closeModal} from "./js/modal";
import { refs } from "./js/refs";

document.addEventListener('DOMContentLoaded', initHomePage);
refs.modalCloseBtn.addEventListener('click', closeModal);
