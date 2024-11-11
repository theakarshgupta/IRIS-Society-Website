import React from 'react';
import logo from '../Assets/IRIS.png';
import bg from '../Assets/1.png';
// import EventsPage from './EventsPage';

const HomeSection = () => {
  return (
    <>
      <section style={styles.homeSection}>
        <img src={logo} alt='IRIS logo' style={styles.logo} />
        <h1 style={styles.title}>IRIS Photography Society</h1>
        <p style={styles.subtitle}>Through Our Lenses, Beyond the Ordinary</p>
        <a href="https://linktr.ee/iris_iitm" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.exploreButton}>Join Now</button>
        </a>
      </section>
      {/* <EventsPage /> */}
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
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0',
    fontFamily: "'Poppins', sans-serif", // You can import Poppins or use a similar bold font
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: '300',
    color: '#ADEBFF',
    marginTop: '10px',
    maxWidth: '600px',
    fontFamily: "'Roboto', sans-serif",
  },
  exploreButton: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: '#003459', // Blue accent for button
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

export default HomeSection;
