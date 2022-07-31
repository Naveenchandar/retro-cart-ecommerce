import axios from "axios";

const token = localStorage.getItem('retro-cart-token');
export const baseUrl = axios.create({
    baseURL: '/api/',
    headers: {'authorization': token}
});