import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbarContainer}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#team" style={styles.navLink}>Team</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  navbarContainer: {
    position:'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
};

// Hover effect for links
styles.navLink[':hover'] = {
  color: '#ffeb3b',
};

export default Navbar;
