import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbarContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 30px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    menuButton: {
      display: isMobile ? 'block' : 'none', // Show button only on mobile
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '5px',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '30px',
    },
    navListMobile: {
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.9)',
      padding: '20px',
    },
    navItem: {
      margin: '10px 0',
    },
    navLink: {
      textDecoration: 'none',
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
  };

  const getLinkStyle = (index) => ({
    ...styles.navLink,
    backgroundColor: hoveredItem === index ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    color: hoveredItem === index ? '#ADEBFF' : '#ffffff',
  });

  return (
    <div style={styles.navbarContainer}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>{isMobile ? 'IRIS Society' : 'IRIS Photography Society'}</div>
        <button 
          style={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul style={isMobile ? styles.navListMobile : styles.navList}>
          {['Home', 'Events', 'Gallery', 'About', 'Contact'].map((item, index) => (
            <li key={item} style={styles.navItem}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={getLinkStyle(index)}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  setIsOpen(false); // Close mobile menu on link click
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
