import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchCartItems = async () => {
    try {
        const { status, data: { cart } } = await baseUrl.get('user/cart');
        if (status === 200) {
            return cart
        } else {
            throw new Error('Error occurred while loading cart, please try again');
        }
    } catch (error) {
        console.error('fetchCartItems:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while loading cart, please try again'
        });
        return false;
    }
}

export const addCartItem = async (product) => {
    try {
        const { status, data: { cart } } = await baseUrl.post('user/cart', { product });
        if (status === 201) {
            return cart
        } else {
            throw new Error('Error occurred while loading cart, please try again');
        }
    } catch (error) {
        console.error('addCartItem:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while adding cart, please try again'
        });
        return false;
    }
}

export const removeCartItem = async (productId) => {
    try {
        const { status, data: { cart } } = await baseUrl.delete(`user/cart/${productId}`);
        if (status === 200) {
            return cart;
        } else {
            throw new Error('Error occurred while removing cart, please try again');
        }
    } catch (error) {
        console.error('removeCartItem:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while removing cart, please try again'
        });
        return false;
    }
}

export const updateCartItemQuantity = async (productId, type) => {
    try {
        const { status, data: {cart} } = await baseUrl.post(`user/cart/${productId}`, { action: { type } });
        if(status === 200){
            return cart;
        } else {
            throw new Error('Error occurred while updating cart item, please try again')
        }
    } catch (error) {
        console.error('updateCartItemQuantity:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while updating cart item, please try again'
        });
        return false;
    }
}