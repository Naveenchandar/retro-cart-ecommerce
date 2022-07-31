export const PasswordInput = ({ type, handleInputChange, togglePassword, errorInfo, showPassword, data }) => {
    const { value, label, inputType } = data;
    return (
        <div className="login_password py-1" key={type}>
            <div className="input_group flex align_start flex_dcolumn">
                <label>{label}</label>
                <div className="input_password">
                    <span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="**********"
                            className="input"
                            onChange={(e) => handleInputChange(e.target.value, type)}
                            value={value}
                            required
                        />
                        <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={() => togglePassword(inputType)}></i>
                    </span>
                </div>
            </div>
            {errorInfo[type] && <p className='input_errormsg'>{errorInfo[type]}</p>}
        </div>
    )
}

export const TextInput = ({ handleInputChange, errorInfo, data }) => {
    const { label, placeholder, type, changeType, value } = data;
    return (
        <div className={`${changeType !=='email' ? 'login_password' : 'login_email'} py-1`}>
            <div className="input_group flex align_start flex_dcolumn">
                <label>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="input w-100"
                    onChange={(e) => handleInputChange(e.target.value, changeType)}
                    value={value}
                    required
                />
            </div>
            {errorInfo && <p className='input_errormsg'>{errorInfo}</p>}
        </div>
    )
}