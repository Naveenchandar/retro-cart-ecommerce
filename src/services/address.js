import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchAddresses = async () => {
    try {
        const { status, data: { address } } = await baseUrl.get('user/addresses');
        if (status === 200) {
            return address
        } else {
            throw new Error('Error occurred while loading address, please try again');
        }
    } catch (error) {
        console.error('fetchAddresses:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while loading address, please try again'
        });
        return false;
    }
}

export const addressAddNew = async (address) => {
    try {
        const { status, data: { address: addresses } } = await baseUrl.post('user/address', { address });
        if (status === 201) {
            return addresses
        } else {
            throw new Error('Error occurred while adding address, please try again');
        }
    } catch (error) {
        console.log('error:', error.response);
        console.log('error:', JSON.parse(JSON.stringify(error)));
        console.error('addWishlistItem:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while adding address, please try again'
        });
        return false;
    }
}

export const removeAddress = async (addressId) => {
    try {
        const { status, data: { address } } = await baseUrl.delete(`user/wishlist/${addressId}`);
        if(status === 200){
            return address;
        } else {
            throw new Error('Error occurred while removing wishlst, please try again');
        }
    } catch (error) {
        console.log('error:', JSON.parse(JSON.stringify(error)));
        console.error('removeWishlistItem:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while removing wishlst, please try again'
        });
        return false;
    }
}