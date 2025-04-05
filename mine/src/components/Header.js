import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Remove CSS import to fix error
// We'll include the styles in App.css instead

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">Saahithyaa</Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'menu-icon open' : 'menu-icon'}></span>
        </div>
        
        <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/gallery" 
                className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;