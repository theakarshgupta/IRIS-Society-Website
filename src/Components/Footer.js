import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.text}>© 2024 IRIS Photography Society. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    margin: '0',
    fontSize: '1rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#ADEBFF',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ffffff',
  },
};

export default Footer;
