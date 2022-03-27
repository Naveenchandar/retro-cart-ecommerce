import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';

function NavBar() {
    const { user, updateUser } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        updateUser(null);
        navigate('/login');
        localStorage.removeItem('retro-token');
    }
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
                        <a href="../wishlist/wishlist.html" className="badge_container" title="Wishlist"
                            aria-label="Wishlist">
                            <i className="fa fa-heart-o"></i>
                            <span className="badge badge_number">
                                <span>0</span>
                            </span>
                        </a>
                        <a href="../cart-management/cart-management.html" className="badge_container" title="Cart Management"
                            aria-label="Cart Management">
                            <i className='fa fa-shopping-cart'></i>
                            <span className="badge badge_number">
                                <span>0</span>
                            </span>
                        </a>
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