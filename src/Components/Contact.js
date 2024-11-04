import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import contact from '../Assets/contact.png';

function ContactSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left side - Image */}
        <div style={styles.imageContainer}>
          <img src={contact} alt="Contact Illustration" style={styles.image} />
        </div>
        {/* Right side - Contact Info */}
        <div style={styles.info}>
          <h2 style={styles.heading}><strong>Contact Us</strong></h2>
          <p style={styles.text}>
            Reach out to us through any of the following means, and we’ll get back to you as soon as possible.
          </p>
          <p style={styles.contactDetail}><strong>Email:</strong> <a href="mailto:your-email@example.com?subject=Contact%20Us&body=Hello%2C%20I%20would%20like%20to%20inquire%20about..." style={styles.link}>photography.society@study.iitm.ac.in</a></p>

          {/* <p style={styles.contactDetail}><strong>Phone:</strong> +1 234 567 8901</p> */}
          <div style={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={30} />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Instagram size={30} />
            </a>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#000000',
    padding: '50px 20px',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  },
  link:{
    textDecoration: 'none',
    color: '#ADEBFF',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    width: '100%',
    gap: '20px',
    flexWrap: 'wrap',
  },
  info: {
    flex: '1',
    minWidth: '300px',
  },
  heading: {
    fontSize: '3rem',
    color: '#ADEBFF',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#ddd',
  },
  contactDetail: {
    fontSize: '1.1rem',
    marginBottom: '10px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  },
  socialLink: {
    color: 'Blue',
    textDecoration: 'none',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default ContactSection;
