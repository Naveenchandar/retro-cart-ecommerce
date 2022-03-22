import axios from 'axios';
import React, { useState } from 'react';
import Login from '../../components/auth/login';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const LoginPage = () => {
    const [info, setUserInfo] = useState({
        email: '', password: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        email: '', password: ''
    });
    const [loading, setLoading] = useState(false);

    useDocumentTitle('Retro Cart | Login');

    const handleInputChange = (targetValue, type) => {
        setUserInfo({ ...info, [type]: targetValue })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(false);
            await axios.post("/api/auth/login", { info })
            setLoading(false);

        } catch (error) {
            setErrorInfo(error.message)
        }
    }
    return (
        <Login
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            info={info}
            errorInfo={errorInfo}
            loading={loading}
        />
    )
}