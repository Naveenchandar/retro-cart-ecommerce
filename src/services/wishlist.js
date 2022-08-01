import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchWishListItems = async (token) => {
    try {
        const { status, data: { wishlist } } = await baseUrl.get('user/wishlist', {
            headers: {
                'authorization': token
            }
        });
        if (status === 200) {
            return wishlist
        } else {
            throw new Error('Error occurred while loading wishlst, please try again');
        }
    } catch (error) {
        console.error('fetchWishListItems:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        // fetchNotification({
        //     type: 'error',
        //     message: 'Error occurred while loading wishlst, please try again'
        // });
        return false;
    }
}

export const addWishlistItem = async (product, token) => {
    try {
        const { status, data: { wishlist } } = await baseUrl.post('user/wishlist', { product }, {
            headers: {
                'authorization': token
            }
        });
        if (status === 201) {
            return wishlist
        } else {
            throw new Error('Error occurred while loading wishlst, please try again');
        }
    } catch (error) {
        console.error('addWishlistItem:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while adding wishlst, please try again'
        });
        return false;
    }
}

export const removeWishlistItem = async (product, token) => {
    try {
        const { status, data: { wishlist } } = await baseUrl.delete(`user/wishlist/${product._id}`, {
            headers: {
                'authorization': token
            }
        });
        if (status === 200) {
            return wishlist;
        } else {
            throw new Error('Error occurred while removing wishlst, please try again');
        }
    } catch (error) {
        console.error('removeWishlistItem:', error?.response);
        fetchNotification({
            type: 'error',
            message: 'Error occurred while removing wishlst, please try again'
        });
        return false;
    }
}