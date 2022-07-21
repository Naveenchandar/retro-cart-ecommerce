import { Routes, Route, Link } from "react-router-dom";
import { LoginPage } from 'pages';
import { SignUp } from 'components/auth/signup';
import Mockman from "mockman-js";
import {
    Home, Products, WishList, CartManagement, Address
} from '../../pages';
import { PrivateRoutes } from './PrivateRoutes';
import './index.css';

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productName" element={<Products />} />
            <Route path="/wishlist" element={
                <PrivateRoutes>
                    <WishList />
                </PrivateRoutes>
            }
            />
            <Route path="/cart" element={
                <PrivateRoutes>
                    <CartManagement />
                </PrivateRoutes>
            }
            />
            <Route path="/address" element={
                <PrivateRoutes>
                    <Address />
                </PrivateRoutes>
            }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mock" element={<Mockman />} />
            <Route
                path="*"
                element={
                    <div className='not_found flex flex_dcolumn justify_center align_center'>
                        <p className="error404">404 | Page Not Found!</p>
                        <p className="error404-msg">
                            Oops!! Looks like you have entered a wrong URL
                        </p>
                        <Link to='/' className="btn btn_primary">Back to home</Link>
                    </div>
                }
            />
        </Routes>
    )
}