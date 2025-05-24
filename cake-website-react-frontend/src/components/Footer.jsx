import React from 'react';
// Optional: import './Footer.css'; // if you create a specific CSS file

const Footer = () => {
    return (
        <footer> {/* Assuming global styles from style.css will target 'footer' tag directly */}
            <div className="container"> {/* Class from original style.css */}
                <p>&copy; {new Date().getFullYear()} The Sweet Spot. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
