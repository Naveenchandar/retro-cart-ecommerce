import React from 'react';
import { Link } from 'react-router-dom';

const OptionIcon = ({ className, icon }) => {
    return icon ? <i className={`${className} noproduct_icon`}></i> : ''
}

const NoProductFoundMessage = ({ message }) => {
    return message ? <h4>{message}</h4> : ''
}

const RedirectButton = (redirect) => {
    return redirect ? (
        <button className='btn btn_primary primary_btn_hover'>
            <Link to="/products" className='shop_link'>Start shopping</Link>
        </button>
    ) : ''
}

const NoProductSection = ({ children }) => <>{children}</>

export const NoProduct = ({ message, icon, redirect }) => {
    return (
        <div className='flex flex_dcolumn align_center p-4'>
            <NoProductSection>
                <OptionIcon className={icon?.className} icon={icon?.icon} />
                <NoProductFoundMessage message={message} />
                <RedirectButton redirect={redirect} />
            </NoProductSection>
        </div>
    )
}