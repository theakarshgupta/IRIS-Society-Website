import React from 'react';
import logo3 from '../Assets/about.png';
import bg2 from '../Assets/2.png';

const AboutSection = () => {
  return (
    <div style={styles.aboutSection}>
      <div style={styles.textSection}>
        <h2 style={styles.heading}><strong>About Us</strong></h2>
        <p style={styles.description}>
        Welcome to the IRIS Photography Society at IIT Madras, a dynamic community dedicated to celebrating and exploring the art of photography. Our society aims to inspire creativity, enhance skills, and foster a shared passion for capturing moments through the lens.
        </p>
        <p style={styles.description}>
        Founded under the IIT Madras BS Degree program, IRIS is open to all students under this domain, regardless of their photography experience. We believe that photography is a powerful medium for storytelling and self-expression, and we strive to create an inclusive environment where every member can grow and thrive.
        </p>
        <ul style={styles.description}> <strong>Our Activities</strong>
          <li>Workshops and Tutorials</li>
          <li>Photowalks</li>
          <li>Collaborations</li>
          <li>Monthly Photography Competitions</li>
        </ul>
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
    height: '100vh',
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
    width: '90%',
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
