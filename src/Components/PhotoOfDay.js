import React, { useState } from 'react';
import demo from "../Assets/picture.jpg";

const PhotoOfTheDay = () => {
  const [isHovered, setIsHovered] = useState(false);

  const photo = {
    src: demo,
    title: "Akash Balasubramaniam",
    description: "24f1000946@ds.study.iitm.ac.in",
  };

  const handleButtonHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Photo of the Day</h1>
      </header>
      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img
              src={photo.src}
              alt={photo.title}
              style={styles.image}
              loading="lazy"
            />
          </div>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>{photo.title}</h2>
          <p style={styles.description}>{photo.description}</p>
          <a
            href="https://www.instagram.com/cosmo._photography?igsh=eHFoNXpudzRvMnJ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                ...styles.button,
                ...(isHovered ? styles.buttonHover : {}),
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonHover}
            >
              Follow ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "auto",
    backgroundColor: "#000000",
    color: "#e0e0e0",
    fontFamily: "Montserrat, sans-serif",
    padding: "20px",
  },
  header: {
    backgroundColor: "#000000",
    width: "100%",
    textAlign: "center",
    padding: "20px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  headerText: {
    fontSize: "2.5rem",
    color: "#ffffff",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "900px",
    width: "100%",
    marginTop: "30px",
    gap: "20px",
  },
  textContainer: {
    flex: 1,
    textAlign: "right",
  },
  title: {
    fontSize: "1.8rem",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ffffff",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#b0bec5",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1e88e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#ffffff",
    color: "#1e88e5",
  },
  card: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
    // backgroundColor: "#000000",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "auto", // Optional max width
    width: "100%",
    height: "100%", // Adapts to image height
    margin: "0 auto",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // Ensures the image is fully visible
    borderRadius: "15px",
  },
  // Add responsive styles
  '@media (max-width: 768px)': { // For tablets
    title: {
      fontSize: "1.5rem",
    },
  },
  '@media (max-width: 480px)': { // For mobile devices
    headerText: {
      fontSize: "1.2rem",
    },
  },

};


export default PhotoOfTheDay;