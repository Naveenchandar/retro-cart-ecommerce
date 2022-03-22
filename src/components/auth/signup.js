import React from 'react'
import NavBar from '../navbar'

function SignUp() {
    return (
        <section id="login">
            <div className="flex flex_column h_screen_100">
                <div className="login_body border px-4 py-2">
                    <div className="login_header">
                        <h4 className="py-2 font_bold text_center">Signup</h4>
                    </div>
                    <div className="login_email py-1">
                        <div className="input_group flex align_start flex_dcolumn">
                            <label>Email address</label>
                            <input type="text" placeholder="abc@gmail.com" className="input w-100" />
                        </div>
                    </div>
                    <div className="login_password py-1">
                        <div className="input_group flex align_start flex_dcolumn">
                            <label>Password</label>
                            <div className="input_password">
                                <span>
                                    <input type="text" placeholder="**********" className="input" />
                                    <i className='fa fa-eye-slash'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="login_checkbox flex justify_spacebtw my-1">
                        <div>
                            <input type="checkbox" />&ensp;
                            <span>I accept all Terms & conditions</span>
                        </div>
                    </div>
                    <button className="login_btn btn btn_primary w-100"><a href="../../index.html">Sign up</a></button>
                    <p className="login_new_acc text_center m-1">Create New Account </p>
                </div>
            </div>
        </section>
    )
}

export default SignUp