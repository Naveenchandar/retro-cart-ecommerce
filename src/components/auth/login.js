import React from 'react'
import NavBar from '../navbar';
import './auth.css';

function Login(props) {
    const { handleInputChange, handleLogin, info, errorInfo, loading } = props;
    return (
        <>
            <NavBar />
            <section id="login">
                <div className="flex flex_column h_screen_100">
                    <div className="login_body border px-4 py-2">
                        <div className="login_header">
                            <h4 className="py-2 font_bold text_center">Login</h4>
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
                                {errorInfo?.email && (
                                    <p>{errorInfo.email}</p>
                                )}
                            </div>
                        </div>
                        <div className="login_password py-1">
                            <div className="input_group flex align_start flex_dcolumn">
                                <label>Password</label>
                                <div className="input_password">
                                    <span>
                                        <input
                                            type="text"
                                            placeholder="**********"
                                            className="input"
                                            onChange={(e) => handleInputChange(e.target.value, 'password')}
                                            value={info?.password}
                                        />
                                        <i className='fa fa-eye-slash'></i>
                                    </span>
                                </div>
                                {errorInfo?.password && (
                                    <p>{errorInfo.password}</p>
                                )}
                            </div>
                        </div>
                        <div className="login_checkbox flex justify_spacebtw my-1">
                            <div>
                                <input type="checkbox" /> &ensp;
                                <span>Remember me</span>
                            </div>
                            <div>
                                <label className="primary_text_color">Forgot your password ?</label>
                            </div>
                        </div>
                        <button
                            className="login_btn btn btn_primary w-100"
                            onClick={handleLogin}
                            disabled={loading}
                        >Login</button>
                        <p className="login_new_acc text_center m-1">Create New Account </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login