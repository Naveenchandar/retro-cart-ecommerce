import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchAllProducts = async () => {
    try {
        const { status, data: { products } } = await baseUrl.get('products');
        if (status === 200) {
            return products
        } else {
            throw new Error('Error occurred while loading products, please try again');
        }
    } catch (error) {
        console.error('fetchCartItems:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while loading products, please try again'
        });
        return false;
    }
}