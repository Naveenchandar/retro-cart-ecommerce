import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchOrders = async () => {
    try {
        const { status, data: { orders } } = await baseUrl.get('user/order');
        if (status === 200) {
            return orders
        } else {
            throw new Error('Error occurred while loading orders, please try again');
        }
    } catch (error) {
        console.error('fetchOrders:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while loading orders, please try again'
        });
        return false;
    }
}

export const addNewOrder = async (order) => {
    try {
        const { status, data: { orders } } = await baseUrl.post('user/order', { order });
        if (status === 201) {
            fetchNotification({ type: 'success', message: 'Order placed successfully' });
            return orders;
        } else {
            throw new Error('Error occurred while processing order, please try again');
        }
    } catch (error) {
        console.error('addNewOrder:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while processing order, please try again'
        });
        return false;
    }
}