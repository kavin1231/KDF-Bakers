import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurCakesPage from './pages/OurCakesPage';
import OrderNowPage from './pages/OrderNowPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
// Optional: import './App.css'; or global styles from src/index.css

function App() {
    return (
        <Router>
            <div className="App"> {/* Consider if a global "App" class is needed for styling */}
                <Header />
                <main> {/* Added a main tag for content separation */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/our-cakes" element={<OurCakesPage />} />
                        <Route path="/order-now" element={<OrderNowPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        {/* Basic 404/Not Found route */}
                        <Route path="*" element={<div><h2>404 - Page Not Found</h2><p>Sorry, the page you are looking for does not exist.</p></div>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
