import axios from "axios";
import { fetchNotification } from "utils";

export const fetchCategories = async () => {
    try {
        const { status, data: { categories = [] } } = await axios.get('/api/categories');
        if (status === 200) {
            return categories;
        } else {
            throw new Error('Unable to fetch categories, Please try again');
        }
    } catch (error) {
        console.error('fetchCategories:', error)
        fetchNotification({ type: 'error', message: error?.response?.data?.errors?.[0] || error?.message });
        return false;
    }
}