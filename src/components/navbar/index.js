import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
    return (
        <section id="navbar">
            <div className="nav_group">
                <nav className="nav_bar flex_row justify_spacebtw">
                    <div className="nav_options">
                        <a className="navbar_brand nav_link align_center" href="../../index.html">
                            Retro Cart
                        </a>
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
                        <button className="btn auth_btn"><Link to="/login">Login</Link></button>
                        <button className="btn auth_btn"><Link to="/signup">Sign up</Link></button>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default NavBar