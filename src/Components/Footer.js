import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerContent}> Made by Akarsh Gupta</p>
        <p style={styles.text}>© 2024 IRIS Photography Society. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}><Facebook strokeWidth={0.8}/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}><Instagram strokeWidth={0.8}/></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}><Linkedin strokeWidth={.8}/></a>
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
    fontFamily: 'Montserrat',
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
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ffffff',
  },
};

export default Footer;
