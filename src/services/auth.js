import axios from "axios";
import { fetchNotification } from "utils";

export const loginService = async (info) => {
    let isLoggedIn = false;
    try {
        const { status, data: { encodedToken } } = await axios.post("/api/auth/login", info)
        if (status === 200 && encodedToken) {
            isLoggedIn = true;
            localStorage.setItem("retro-cart-token", encodedToken);
            fetchNotification({ type: 'success', message: 'logged in successfully' });
        } else {
            throw new Error('Email or Password is incorrect');
        }
    } catch (error) {
        isLoggedIn = false;
        fetchNotification({ type: 'error', message: 'Email or Password is incorrect' });
    }
    return isLoggedIn;
};

export const signupService = async (info) => {
    let isSignedUp = false;
    try {
        const { status, data: { createdUser, encodedToken } } = await axios.post("/api/auth/signup", info)
        if (status === 201 && createdUser?.id && encodedToken) {
            isSignedUp = true;
            fetchNotification({ type: 'success', message: 'signup successful' });
        } else {
            throw new Error('Email or Password is incorrect');
        }
    } catch (error) {
        isSignedUp = false;
        fetchNotification({ type: 'error', message: error?.response?.data?.errors?.[0] || error?.message || error || 'Something went wrong, Please try again.' });
    }
    return isSignedUp;
}