import axios from "axios";
import toast from "react-hot-toast";
import { fetchNotification } from "utils";

const loginService = async (info) => {
    let isLoggedIn = false;
    try {
        const { status, data: { encodedToken } } = await axios.post("/api/auth/login", info)
        if (status === 200 && encodedToken) {
            isLoggedIn = true;
            localStorage.setItem("retro-cart-token", encodedToken);
            toast.success('logged in successfully');
        } else {
            throw new Error('Email or Password is incorrect');
        }
    } catch (error) {
        isLoggedIn = false;
        fetchNotification({ type: 'error', message: 'Email or Password is incorrect' });
    }
    return isLoggedIn;
}

export {
    loginService
}