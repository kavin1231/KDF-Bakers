import React from 'react';
import { Link } from 'react-router-dom';
// Optional: import './Header.css'; // if you create a specific CSS file

const Header = () => {
    return (
        <header> {/* Assuming global styles from style.css will target 'header' tag directly */}
            <div className="container"> {/* Class from original style.css */}
                <h2>The Sweet Spot</h2>
                <nav>  {/* Assuming global styles from style.css will target 'nav' tag directly */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/our-cakes">Our Cakes</Link></li>
                        <li><Link to="/order-now">Order Now</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
