import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { PasswordInput, TextInput } from './input';
import { signupService } from 'services/auth';

export const SignUp = () => {
    const [info, setUserInfo] = useState({
        email: '', password: '', firstName: '', lastName: '', confirmPwd: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        email: '', password: '', firstName: '', lastName: '', confirmPwd: ''
    });

    const [showPassword, setShowPassword] = useState({ pwd: false, confirmPwd: false });

    const navigate = useNavigate();

    useDocumentTitle('Retro Cart | Sign up');

    const togglePassword = (type) => {
        if (type === 'pwd') {
            setShowPassword({ ...showPassword, pwd: !showPassword.pwd });
        } else {
            setShowPassword({ ...showPassword, confirmPwd: !showPassword.confirmPwd });
        }
    }

    const handleInputChange = (targetValue, type) => {
        setErrorInfo('');
        setUserInfo({ ...info, [type]: targetValue });
    }

    const handleValidation = () => {
        const { email, password, firstName, lastName, confirmPwd } = info;
        const isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
        if (!email) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id' });
            return false;
        }
        if (!isValidEmail) {
            setErrorInfo({ ...errorInfo, email: 'Please enter valid email id' });
            return false;
        }
        if (!password) {
            setErrorInfo({ ...errorInfo, password: 'Please enter password' });
            return false;
        }
        if (!firstName) {
            setErrorInfo({ ...errorInfo, firstName: 'Please enter first name' });
            return false;
        }
        if (!lastName) {
            setErrorInfo({ ...errorInfo, lastName: 'Please enter last nmae' });
            return false;
        }
        if (!confirmPwd) {
            setErrorInfo({ ...errorInfo, confirmPwd: 'Please enter confirm password' });
            return false;
        }
        if (password && confirmPwd && password !== confirmPwd) {
            setErrorInfo({ ...errorInfo, confirmPwd: 'Password mismatch', error: '' });
            return false;
        }
        return true;
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            if (handleValidation() && await signupService(info)) {
                navigate('/login');
            } else {
                throw new Error('Email or Password is incorrect');
            }
        } catch (error) {
            setErrorInfo({ error: error?.response?.data?.errors?.[0] || error?.message || error || 'Something went wrong, Please try again.' });
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
                        <TextInput
                            handleInputChange={handleInputChange}
                            errorInfo={errorInfo?.email}
                            data={{
                                label: 'Email address',
                                placeholder: 'abc@gmail.com',
                                type: 'text',
                                changeType: 'email',
                                value: info?.email
                            }}
                        />
                        <TextInput
                            handleInputChange={handleInputChange}
                            errorInfo={errorInfo.firstName}
                            data={{
                                label: 'First name',
                                placeholder: 'first name',
                                type: 'text',
                                changeType: 'firstName',
                                value: info?.firstName
                            }}
                        />
                        <TextInput
                            handleInputChange={handleInputChange}
                            errorInfo={errorInfo.lastName}
                            data={{
                                label: 'Last name',
                                placeholder: 'last name',
                                type: 'text',
                                changeType: 'lastName',
                                value: info?.lastName
                            }}
                        />
                        <PasswordInput
                            type='password'
                            handleInputChange={handleInputChange}
                            togglePassword={togglePassword}
                            errorInfo={errorInfo}
                            showPassword={showPassword?.pwd}
                            data={{ value: info?.password, label: 'Password', inputType: 'pwd' }}
                        />
                        <PasswordInput
                            type='confirmPwd'
                            handleInputChange={handleInputChange}
                            togglePassword={togglePassword}
                            errorInfo={errorInfo}
                            showPassword={showPassword?.confirmPwd}
                            data={{ value: info?.confirmPwd, label: 'Confirm Password', inputType: 'cpwd' }}
                        />
                        {errorInfo.error && <p className='input_errormsg py-1'>{errorInfo.error}</p>}
                        <button className="login_btn btn btn_primary w-100">Sign up</button>
                        <p className="login_new_acc text_center m-1"><Link to='/login'>Login </Link></p>
                    </div>
                </div>
            </form>
        </section>
    )
}