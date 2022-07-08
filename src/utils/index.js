import axios from 'axios';
import toast from 'react-hot-toast';

export const mockApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const fetchNotification = ({ type, message }) => toast[type](message);

export const fetchItemById = (id, data) => {
    return data?.find(item => item?.id === id);
}

export const updateItemById = (data, newObj) => {
    return data?.map(item => {
        if (item.id === newObj?.id) {
            return item = { ...newObj };
        }
        return { ...item };
    })
}

export const productQuantityIncrement = ({ id, price, quantity, data }) => {
    return data.map(item => {
        if (item.id === id) {
            item.quantity += 1;
        }
        return item;
    })
};

export const productQuantityDecrement = ({ id, price, quantity, data, removeFromCart }) => {
    return data.map(item => {
        if (item.id === id && item.quantity > 1) {
            item.quantity -= 1;
        }
        if (item.id === id && item.quantity <= 1) {
            removeFromCart(id);
        }
        return item;
    });
}
