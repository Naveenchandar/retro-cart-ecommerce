import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchCartItems = async (token) => {
    try {
        const { status, data: { cart } } = await baseUrl.get('user/cart', {
            headers: {
                'authorization': token
            }
        });
        if (status === 200) {
            return cart
        } else {
            throw new Error('Error occurred while loading cart, please try again');
        }
    } catch (error) {
        console.error('fetchCartItems:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        // fetchNotification({
        //     type: 'error',
        //     message: 'Error occurred while loading cart, please try again'
        // });
        return false;
    }
}

export const addCartItem = async (product, token) => {
    try {
        const { status, data: { cart } } = await baseUrl.post('user/cart', { product },
            {
                headers: {
                    'authorization': token
                }
            }
        );
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

export const removeCartItem = async (productId, token) => {
    try {
        const { status, data: { cart } } = await baseUrl.delete(`user/cart/${productId}`, {
            headers: {
                'authorization': token
            }
        });
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

export const updateCartItemQuantity = async (productId, type, token) => {
    try {
        const { status, data: { cart } } = await baseUrl.post(`user/cart/${productId}`,
            { action: { type } },
            {
                headers: {
                    'authorization': token
                }
            }
        );
        if (status === 200) {
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

export const clearAllCartItems = async (token) => {
    try {
        const { status, data: { cart } } = await baseUrl.get(`user/cart/clear`,{
            headers: {
                'authorization': token
            }
        });
        if (status === 201) {
            fetchNotification({ type: 'success', message: 'Order placed successfully' });
            return cart;
        } else {
            throw new Error('Error occurred while clearing cart item, please try again')
        }
    } catch (error) {
        console.error('clearCartItems:', JSON.parse(JSON.stringify(error)));
        fetchNotification({
            type: 'error',
            message: 'Error occurred while clearing cart item, please try again'
        });
        return false;
    }
}