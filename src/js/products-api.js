import axios from "axios"
import { API_BASE_URL, API_ENDPOINTS } from "./constants"

// 'https://dummyjson.com/products/category-list'
axios.defaults.baseURL = API_BASE_URL;
export async function getCategories () {
    const {data} = await axios.get(API_ENDPOINTS.CATEGORIES);
return data;
}

export async function getProducts (pageNumber = 1){
const skip = (pageNumber - 1) * 12;
const {data} = await axios.get(`${API_ENDPOINTS.PRODUCTS}?limit=12&skip=${skip}`);
return data;
}

export async function getProductsByCategory(category){
    const {data} = await axios.get(`${API_ENDPOINTS.PRODUCTS_BY_CATEGORY}${category}`);
    return data;
}