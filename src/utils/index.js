import axios from 'axios';
import toast from 'react-hot-toast';

export const mockApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const fetchNotification = ({ type, message }) => toast[type](message);