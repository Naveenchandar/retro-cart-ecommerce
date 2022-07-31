import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Login } from 'components';
import { useAuth } from 'context';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useSetLocalStorage } from 'hooks/useLocalStorage';
import { fetchNotification } from 'utils';
import { loginService } from 'services/auth';

export const LoginPage = () => {
    const [info, setUserInfo] = useState({
        email: '', password: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        email: '', password: '', error: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setIsLoading] = useState(false);

    const { updateUser } = useAuth();
    const setLocalStorage = useSetLocalStorage("name", "Bob");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "";

    useDocumentTitle('Retro Cart | Login');

    useEffect(() => {
        return () => {
            setUserInfo({ email: '', password: '' });
            setErrorInfo({ email: '', password: '', error: '' });
            setShowPassword(false);
            setIsLoading(false);
        }
    }, [])


    const handleInputChange = (targetValue, type) => {
        if (type === 'email') {
            setErrorInfo({ ...errorInfo, email: '', error: '' });
        }
        if (type === 'password') {
            setErrorInfo({ ...errorInfo, password: '', error: '' });
        }
        setUserInfo({ ...info, [type]: targetValue });
    }

    const handleValidation = () => {
        const { email, password } = info;
        if (!email && !password) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id', password: 'Please enter password' });
            return false;
        }
        if (!email) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id', error: '' });
            return false;
        }
        if (!password) {
            setErrorInfo({ ...errorInfo, password: 'Please enter password', error: '' });
            return false;
        }
        return true;
    }

    const isLoggedIn = async () => await loginService(info);

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            if (handleValidation() && await isLoggedIn(info)) {
                updateUser();
                navigate(from ? from : '/', { replace: true });
            }
        } catch (error) {
            setErrorInfo({ error: 'Email or Password is incorrect' });
        }
        setIsLoading(false);
    }

    const handleTestLogin = async () => {
        setUserInfo({
            email: "naveen@gmail.com",
            password: "naveen",
            username: "naveenram"
        });
        updateUser({
            email: "naveen@gmail.com",
            password: "naveen",
            firstName: "Naveen",
            lastName: "Ram"
        })
    }

    return (
        <Login
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            info={info}
            errorInfo={errorInfo}
            togglePassword={() => setShowPassword((showPassword) => !showPassword)}
            showPassword={showPassword}
            handleTestLogin={handleTestLogin}
            loading={loading}
        />
    )
}