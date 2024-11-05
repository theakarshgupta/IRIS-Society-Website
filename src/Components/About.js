import React from 'react';
import logo3 from '../Assets/about.png';
import bg2 from '../Assets/2.png';

const AboutSection = () => {
  return (
    <div style={styles.aboutSection}>
      <div style={styles.textSection}>
        <h2 style={styles.heading}><strong>About Us</strong></h2>
        <p style={styles.description}>
          The IRIS Photography Society is a vibrant community of photographers dedicated to capturing the beauty in everyday moments. We celebrate the power of perspective and offer a platform for aspiring photographers to hone their skills, collaborate, and inspire each other through the art of visual storytelling.
        </p>
        <a href="https://linktr.ee/iris_iitm" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.exploreButton}>Learn More</button>
        </a>
      </div>
      <div style={styles.imageSection}>
        <img src={logo3} alt='iamge reference' style={styles.image}></img>
      </div>
    </div>
  );
};

const styles = {
  aboutSection: {
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    textAlign: 'center',
    padding: '50px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'Center',
    justifyContent: 'center',
    gap: '20px',
    height: '95vh',
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    fontSize: '3rem',
    color: '#ADEBFF',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
  },
  textSection: {
    flex: 1,
    minWidth: '300px',
  },
  imageSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    width: '100%',
    Height: 'auto',
    objectFit: 'contain',
    borderRadius: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#cccccc',
    maxWidth: 'auto',
    margin: '0 9px 20px',
    lineHeight: '1.6',
    textAlign: 'justify',
  },
  buttonLink: {
    display: 'inline-block',
    marginTop: '30px',
  },
  exploreButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#003459',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

};

styles.exploreButton[':hover'] = {
  backgroundColor: '#15417e',
};

export default AboutSection;
