import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../../pages';
import SignUp from '../auth/signup';
import Mockman from "mockman-js";
import Home from '../../pages/Home';

function NavRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/mock" element={<Mockman />} />
        </Routes>
    )
}

export default NavRoutes;