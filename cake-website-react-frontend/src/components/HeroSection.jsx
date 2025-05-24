import React from 'react';
import { Link } from 'react-router-dom';
// import './HeroSection.css'; // Optional: if specific styles are extracted

const HeroSection = () => {
    return (
        <section className="hero"> {/* Ensure class names match original for styling */}
            <div className="hero-content"> {/* Assuming a content wrapper for centering */}
                <h1>Bringing Sweet Dreams to Life</h1>
                <p>Discover our handcrafted custom cakes, made with love and the finest ingredients.</p>
                <Link to="/our-cakes" className="btn btn-primary">Browse Our Cakes</Link>
            </div>
        </section>
    );
};
export default HeroSection;
