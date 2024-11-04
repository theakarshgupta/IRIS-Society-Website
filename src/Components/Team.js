import React from 'react';
import akarsh from '../Assets/akarsh.png';
import anshi from '../Assets/anshi.png';
import ritik from '../Assets/ritik.jpg';
import daksh from '../Assets/daksh.jpg';
import kshitiz from '../Assets/kshitiz.jpg';
import sadhna from '../Assets/sadhna.jpg';
import akansha from '../Assets/akansha.jpg';
import chahat from '../Assets/chahat.png';
import { Linkedin } from 'lucide-react';

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
          linkedinUrl="https://www.linkedin.com/in/theakarshgupta"
        />
        <Card 
          name="Anshi Jain" 
          role="Deputy Secretary" 
          description="Assists in managing events and member engagement." 
          image= {anshi}
          linkedinUrl="https://www.linkedin.com/in/anshi-jain-5853361a8/"
        />
      </div>

      {/* Core Team Members */}
      <h3 style={styles.subheading}>Core Team Members</h3>
      <div style={styles.cardContainer}>
        <Card 
          name="Akansha Nailwal" 
          role="Outreach" 
          description="Plans and executes all events smoothly." 
          image={akansha}
          linkedinUrl="https://www.linkedin.com/in/akansha-nailwal-97041524a/"
        />
        <Card
          name="Akhilesh"
          role="Event Coordinator"
          description="will add later"
          //image={}
          linkedinUrl="https://www.linkedin.com/in/theakarshgupta"
        />
        <Card
          name="Chahat Gupta"
          role="Content Writer"
          description="will add later"
          image={chahat}
          linkedinUrl="https://www.linkedin.com/in/chahat-gupta-030801257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <Card 
          name="Daksh Sharma" 
          role="Design and Editor" 
          description="Captures and curates content for the society." 
          image={daksh}
          linkedinUrl="https://www.linkedin.com/in/daksh-sharma-1b668232b/"
        />
        <Card
          name="Kshitiz Rana"
          role="Event Management Head"
          description="will add later"
          image={kshitiz}
          linkedinUrl="https://www.linkedin.com/in/kshitiz-rana/"
        />
        <Card
          name="Ritik Raghuvanshi"
          role="Engagement Lead"
          description="will add later"
          image={ritik}
          linkedinUrl="https://www.linkedin.com/in/ritik-raghuwanshi-695b0b208/"
        />
        
        <Card
          name="Sadhana "
          role="Social Media Manager"
          description="will add later"
          image={sadhna}
          linkedinUrl="https://www.linkedin.com/in/sadhana-kumari-1658072b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
          name="Kaustubh" 
          role="Contributor" 
          description="will add later" 
        />
        {/* Add more web dev team members here */}
      </div>
    </section>
  );
}

// Individual Team Member Card Component
function Card({ name, role, description, image, linkedinUrl}) {
  return (
    <div style={styles.card}>
      <img src={image} alt={`${name}'s profile`} style={styles.image} />
      <h4 style={styles.name}>{name}</h4>
      <p style={styles.role}>{role}</p>
      <p style={styles.description}>{description}</p>
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={styles.logo}>
          <Linkedin size={25} color="#0A66C2" />
        </a>
      )}
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    padding: '50px 20px',
    height: 'auto',
  },
  logo: {
    marginTop: '10px',
    display: 'inline-block',
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
    width: '300px',
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
    fontSize: '1rem',
    color: '#ADEBFF',
    margin: '5px 0',
  },
  description: {
    fontSize: '0.8rem',
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
