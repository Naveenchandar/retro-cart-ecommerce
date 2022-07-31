import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import './index.css';
import { useCart, useWishlist } from 'context';
import { useComponentVisible } from 'hooks/useVisible';
import { useRemoveLocalStorage } from 'hooks/useLocalStorage';
import { fetchNotification } from 'utils';

export const NavBar = () => {
    const { user, updateUser } = useAuth();
    const removeStorage = useRemoveLocalStorage('retro-cart-token');
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
        removeStorage('retro-cart-token');
        updateUser(null);
        fetchNotification({ type: 'success', message: 'Successfully logged out' });
    }
    const { wishlistItems } = useWishlist();
    const { cartItems } = useCart();
    const { ref, isComponentVisible } = useComponentVisible(true);
    const [isLogoutVisible, setIsLogoutVisible] = useState(false);
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
                                <span>{wishlistItems.length}</span>
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
                            <div ref={ref}>
                                <h3 className="pointer username relative_pos" onClick={() => setIsLogoutVisible(isComponentVisible ? true : false)}>Hi, {user?.firstName}</h3>
                                {isLogoutVisible && isComponentVisible && (
                                    <button className="btn auth_btn logout_btn nav_link absolute_pos" onClick={handleLogout}>Logout</button>
                                )}
                            </div>
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