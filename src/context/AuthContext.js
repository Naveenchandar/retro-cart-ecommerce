import { createContext, useContext, useState } from "react";
import { useGetLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const getStorage = useGetLocalStorage();

    const [user, setUser] = useState(() => {
        if (getStorage('retro-token', true)?.firstName) {
            return getStorage('retro-token', true)
        }
        return null;
    });

    const updateUser = (user) => {
        if (!user?.firstName) {
            if (getStorage('retro-token', true)?.firstName) {
                setUser(getStorage('retro-token', true))
            } else {
                setUser(null)
            }
        } else {
            setUser(user);
        }
    };

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };