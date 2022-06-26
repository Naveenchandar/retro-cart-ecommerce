import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../../pages';
import SignUp from '../auth/signup';
import Mockman from "mockman-js";
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import WishList from '../../pages/Wishlist';
import CartManagement from '../../pages/CartManagement';
import PrivateRoutes from './PrivateRoutes';
import Address from '../../pages/Address';

function NavRoutes() {
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

export default NavRoutes;