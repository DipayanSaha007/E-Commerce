import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Import a CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="hero-title">Welcome to the E-Commerce Website</h1>
                <p className="hero-subtitle">Your one-stop destination for premium product purchase at your convenience.</p>
            </header>
            <nav className="navbar">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
                <Link to="/admin-signin" className="nav-link">Admin LogIn</Link>
            </nav>
            <footer className="footer">
                <p>&copy; 2025 E-Commerce Website by Joydeep Paul and Dipayan Saha. All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;