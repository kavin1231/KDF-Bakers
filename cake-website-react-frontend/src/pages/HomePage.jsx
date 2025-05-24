import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCakesSection from '../components/FeaturedCakesSection';
// Optional: import './HomePage.css';

const HomePage = () => {
    return (
        <> {/* Use Fragment or a div container if needed */}
            <HeroSection />
            <FeaturedCakesSection />
        </>
    );
};
export default HomePage;
