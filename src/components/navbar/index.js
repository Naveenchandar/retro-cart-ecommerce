import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';
import { useCart, useWishlist } from '../../context';

function NavBar() {
    const { user, updateUser } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        updateUser(null);
        navigate('/login');
        localStorage.removeItem('retro-token');
    }
    const { addedToWishList } = useWishlist();
    const { cartItems } = useCart();
    return (
        <section id="navbar">
            <div className="nav_group">
                <nav className="nav_bar flex_row justify_spacebtw">
                    <div className="nav_options">
                        <Link to="/" className="navbar_brand nav_link align_center">
                            Retro Cart
                        </Link>
                    </div>
                    <div className="nav_actions flex_row">
                        <Link to="/wishlist" className="badge_container" title="Wishlist"
                            aria-label="Wishlist">
                            <i className="fa fa-heart-o"></i>
                            <span className="badge badge_number">
                                <span>{addedToWishList.length}</span>
                            </span>
                        </Link>
                        <Link to="/cart" className="badge_container" title="Cart Management"
                            aria-label="Cart Management">
                            <i className='fa fa-shopping-cart'></i>
                            <span className="badge badge_number">
                                <span>{cartItems.length}</span>
                            </span>
                        </Link>
                        {user?.email ?
                            <button className="btn auth_btn" onClick={handleLogout}>Logout</button>
                            :
                            <>
                                <button className="btn auth_btn"><Link to="/login">Login</Link></button>
                                <button className="btn auth_btn"><Link to="/signup">Sign up</Link></button>
                            </>
                        }
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default NavBar