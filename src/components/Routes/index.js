import { Link, useRoutes } from "react-router-dom";
import Mockman from "mockman-js";
import { LoginPage } from 'pages';
import { SignUp } from 'components';
import {
    Home, Products, WishList, CartManagement, Address
} from 'pages';
import { PrivateRoutes } from './PrivateRoutes';
import './index.css';

const NoRouteFound = () => {
    return (
        <div className='not_found flex flex_dcolumn justify_center align_center'>
            <p className="error404">404 | Page Not Found!</p>
            <p className="error404-msg">
                Oops!! Looks like you have entered a wrong URL
            </p>
            <Link to='/' className="btn btn_primary">Back to home</Link>
        </div>
    )
};

const Router = () => {
    const routes = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "products", element: <Products /> },
                { path: "product/:productName", element: <Products /> },
                { path: "wishlist", element: <PrivateRoutes><WishList /></PrivateRoutes> },
                { path: "cart", element: <PrivateRoutes><CartManagement /></PrivateRoutes> },
                { path: "address", element: <PrivateRoutes><Address /></PrivateRoutes> },
                { path: "login", element: <LoginPage /> },
                { path: "signup", element: <SignUp /> },
                { path: "mock", element: <Mockman /> },
                { path: "*", element: <NoRouteFound /> }
            ]
        }
    ];
    let element = useRoutes(routes);
    return element;
};

export const NavRoutes = () => <Router />