import jwt_decode from "jwt-decode";

export const useGetLocalStorage = () => {
    const getValue = (key, token) => {
        try {
            if (typeof window !== "undefined" && window.localStorage.getItem(key)) {
                if (token) {
                    return jwt_decode(window.localStorage.getItem(key));
                }
                return JSON.parse(window.localStorage.getItem(key));
            }
        } catch (error) {
            console.error('useGetLocalStorage:', error)
        }
    }

    return getValue;
}

export function useSetLocalStorage() {
    const setValue = (key, value, token) => {
        try {
            if (typeof window !== "undefined") {
                if (token) {
                    window.localStorage.setItem(key, value);
                } else {
                    window.localStorage.setItem(key, JSON.stringify(value));
                }
            }
        } catch (error) {
            console.error('useSetLocalStorage:', error)
        }
    };
    return setValue;
}

export const useRemoveLocalStorage = () => {
    const removeValue = (key) => {
        try {
            if (key) {
                localStorage.removeItem(key);
            } else {
                throw new Error('Key not found')
            }
        } catch (error) {
            console.error('useRemoveLocalStorage:', error)
        }
    }
    return removeValue;
}