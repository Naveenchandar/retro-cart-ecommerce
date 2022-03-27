import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function SignUp() {
    const [info, setUserInfo] = useState({
        email: '', password: ''
    });
    const [errorInfo, setErrorInfo] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const { updateUser } = useAuth();

    useDocumentTitle('Retro Cart | Sign up');

    const togglePassword = () => {
        setShowPassword((showPassword) => !showPassword)
    }

    const handleInputChange = (targetValue, type) => {
        setErrorInfo('');
        setUserInfo({ ...info, [type]: targetValue });
    }

    const handleValidation = () => {
        const { email, password } = info;
        if (!email && !password) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id', password: 'Please enter password' });
            return false;
        }
        if (!email) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id' });
            return false;
        }
        if (!password) {
            setErrorInfo({ ...errorInfo, password: 'Please enter password' });
            return false;
        }
        return true;
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            if (handleValidation()) {
                const { status, data: { createdUser, encodedToken } } = await axios.post("/api/auth/signup", info)
                if (status === 201 && createdUser?.id && encodedToken) {
                    updateUser(info);
                    localStorage.setItem("retro-token", encodedToken);
                    navigate('/');
                } else {
                    throw new Error('Email or Password is incorrect');
                }
            } else {
                throw new Error('Email or Password is incorrect');
            }

        } catch (error) {
            setErrorInfo({ error: 'Email or Password is incorrect' });
        }
    }

    return (
        <section id="login">
            <form onSubmit={handleSignup}>
                <div className="flex flex_column h_screen_100">
                    <div className="login_body border px-4 py-2">
                        <div className="login_header">
                            <h4 className="py-2 font_bold text_center">Signup</h4>
                        </div>
                        <div className="login_email py-1">
                            <div className="input_group flex align_start flex_dcolumn">
                                <label>Email address</label>
                                <input
                                    type="text"
                                    placeholder="abc@gmail.com"
                                    className="input w-100"
                                    onChange={(e) => handleInputChange(e.target.value, 'email')}
                                    value={info?.email}
                                />
                            </div>
                        </div>
                        <div className="login_password py-1">
                            <div className="input_group flex align_start flex_dcolumn">
                                <label>Password</label>
                                <div className="input_password">
                                    <span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="**********"
                                            className="input"
                                            onChange={(e) => handleInputChange(e.target.value, 'password')}
                                            value={info?.password}
                                        />
                                        <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={togglePassword}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="login_btn btn btn_primary w-100">Sign up</button>
                        <p className="login_new_acc text_center m-1"><Link to='/login'>Login </Link></p>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SignUp