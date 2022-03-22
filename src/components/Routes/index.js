import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../../pages';
import SignUp from '../auth/signup';
import Mockman from "mockman-js";

function NavRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/mock" element={<Mockman />} />
        </Routes>
    )
}

export default NavRoutes;