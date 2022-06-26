import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../../pages';
import { SignUp } from '../auth/signup';
import Mockman from "mockman-js";
import {
    Home, Products, WishList, CartManagement, Address
} from '../../pages';
import { PrivateRoutes } from './PrivateRoutes';

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
        </Routes>
    )
}