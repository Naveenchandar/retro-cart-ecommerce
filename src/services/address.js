import { baseUrl } from "services";
import { fetchNotification } from "utils";

export const fetchAddresses = async (token) => {
    try {
        const { status, data: { address } } = await baseUrl.get('user/addresses', {
            headers: {
                'authorization': token
            }
        });
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

export const addressAddNew = async (address, token) => {
    try {
        const { status, data: { address: addresses } } = await baseUrl.post('user/address', { address }, {
            headers: {
                'authorization': token
            }
        });
        if (status === 201) {
            fetchNotification({ type: 'success', message: 'Address added successfully' });
            return addresses;
        } else {
            throw new Error('Error occurred while adding address, please try again');
        }
    } catch (error) {
        console.error('addressAddNew:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while adding address, please try again'
        });
        return false;
    }
}

export const removeAddress = async (addressId, token) => {
    try {
        const { status, data: { address } } = await baseUrl.delete(`user/address/${addressId}`, {
            headers: {
                'authorization': token
            }
        });
        if (status === 200) {
            fetchNotification({ type: 'success', message: 'Address removed successfully' });
            return address;
        } else {
            throw new Error('Error occurred while removing address, please try again');
        }
    } catch (error) {
        console.error('removeAddress:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while removing address, please try again'
        });
        return false;
    }
}

export const addressUpdate = async (address, token) => {
    try {
        const { status, data: { address: address1 } } = await baseUrl.post(`user/address/edit/${address._id}`, { address }, {
            headers: {
                'authorization': token
            }
        });
        if (status === 200) {
            fetchNotification({ type: 'success', message: 'Address updated successfully' });
            return address1;
        } else {
            throw new Error('Error occurred while removing address, please try again');
        }
    } catch (error) {
        console.error('updateAddress:', error?.response?.data?.error || error?.response?.data?.message || error?.message)
        fetchNotification({
            type: 'error',
            message: 'Error occurred while removing address, please try again'
        });
        return false;
    }
}