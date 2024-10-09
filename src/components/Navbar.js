// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden}`}>
      <div className={styles.navbarContainer}>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Characters</Link>
        <Link to="/locations" className={styles.navLink}>Locations</Link>
      </div>
        {/* <Link to="/" className={styles.navbarLink}>Home</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
