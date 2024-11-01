import React from 'react';
import akarsh from '../Assets/My Image.jpg';
import anshi from '../Assets/Anshi.jpg';

function Team() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}><strong>Our Team</strong></h2>

      {/* Secretary and Deputy Secretary */}
      <div style={styles.cardContainer}>
        <Card 
          name="Akarsh Gupta" 
          role="Secretary" 
          description="Leads the society with a vision for creative excellence." 
          image= {akarsh}
        />
        <Card 
          name="Anshi Jain" 
          role="Deputy Secretary" 
          description="Assists in managing events and member engagement." 
          image= {anshi}
        />
      </div>

      {/* Core Team Members */}
      <h3 style={styles.subheading}>Core Team Members</h3>
      <div style={styles.cardContainer}>
        <Card 
          name="Akansha Nailwal" 
          role="Outreach" 
          description="Plans and executes all events smoothly." 
          // image={}
        />
        <Card
          name="Akhilesh"
          role="Event Coordinator"
          description="will add later"
          //image={}
        />
        <Card
          name="Chahat Gupta"
          role="Content Writer"
          description="will add later"
          //image={}
        />
        <Card 
          name="Daksh Sharma" 
          role="Design and Editor" 
          description="Captures and curates content for the society." 
          //image={}
        />
        <Card
          name="Kshitiz Rana"
          role="Event Management Head"
          description="will add later"
          //image={}
        />
        <Card
          name="Ritik Raghuvanshi"
          role="Engagement Lead"
          description="will add later"
          //image={}
        />
        
        <Card
          name="Sadhna "
          role="Social Media Manager"
          description="will add later"
          //image={}
        />
        {/* Add more core team members here */}
      </div>

      {/* Web Dev Team */}
      <h3 style={styles.subheading}>Web Dev Team</h3>
      <div style={styles.cardContainer}>
        <Card 
          name="Akarsh Gupta" 
          role="Frontend Developer" 
          description="Develops and maintains the society’s website." 
          image={akarsh}
        />
        <Card 
          name="Sam Wilson" 
          role="Backend Developer" 
          description="Ensures smooth backend operations for our digital tools." 
        />
        {/* Add more web dev team members here */}
      </div>
    </section>
  );
}

// Individual Team Member Card Component
function Card({ name, role, description, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={`${name}'s profile`} style={styles.image} />
      <h4 style={styles.name}>{name}</h4>
      <p style={styles.role}>{role}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    textAlign: 'center',
    padding: '50px 20px',
    height: 'auto',
  },
  heading: {
    fontSize: '3rem',
    color: '#ADEBFF',
    marginBottom: '40px',
    fontFamily: "'Poppins', sans-serif",
  },
  subheading: {
    fontSize: '2rem',
    color: '#ffffff',
    margin: '20px 0',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '250px',
    borderRadius: '2%',
    backgroundColor: '#333',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    fontSize: '0.9rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '10px 0',
  },
  role: {
    fontSize: '1.1rem',
    color: '#ADEBFF',
    margin: '5px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#cccccc',
  },
  image: {
    width: '100%',
    height: '250px',
    borderRadius: '2%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
};

export default Team;
