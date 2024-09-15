import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase auth
import './Header.css'; // Assuming external CSS
import logo from './logo.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is logged out
      }
    });
    
    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Set the user as logged out after sign out
        window.location.href = '/'; // Redirect to home page after logout
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo */}
        <h1 className="site-title">Atmospheric Water Generator</h1>
      </div>
      <nav className={`nav-links ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="/" className="nav-item">Home</a>
        {isLoggedIn ? (
          <button className="nav-item" onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login" className="nav-item">Login</a>
        )}
        <a href="/about" className="nav-item">About Us</a>
        <a href="/contact" className="nav-item">Contact Us</a>
        <a href="/products" className="nav-item">Products</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
