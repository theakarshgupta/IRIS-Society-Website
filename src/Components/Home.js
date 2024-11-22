import React, { useState } from 'react';
import logo from '../Assets/IRIS.png';
import bg from '../Assets/bg5.png';
import PhotoOfDay from './PhotoOfDay';

const HomeSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section style={styles.homeSection}>
        <img src={logo} alt='IRIS logo' style={styles.logo} />
        <h1 style={styles.title}>IRIS Photography Society</h1>
        <p style={styles.subtitle}>Through Our Lenses, Beyond the Ordinary</p>
        <a
          href="https://linktr.ee/iris_iitm"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.buttonLink}
        >
          <button
            style={{
              ...styles.exploreButton,
              ...(isHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Join Now
          </button>
        </a>
      </section>
      <PhotoOfDay />
    </>
  );
};

const styles = {
  homeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0d0d0d', // Dark background to match the theme
    color: '#ffffff',
    textAlign: 'Center',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  logo: {
    width: '200px',
    height: 'auto',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '100',
    color: '#ffffff',
    margin: '0',
    fontFamily: 'Montserrat',
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: '200',
    color: '#ADEBFF',
    marginTop: '10px',
    maxWidth: '600px',
    fontFamily: "'Montserrat','Questrial'",
  },
  exploreButton: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: '#1e88e5', // Blue accent for button
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: "#ffffff", 
    color: "#1e88e5", 
  },
};

export default HomeSection;
