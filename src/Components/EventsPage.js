import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import Diwali from '../Assets/diwali.png';

const EventCalendar = () => {
  const events = {
    ongoing: [
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Join us for the biggest festive series from IRIS Society",
        date: "29 October-02 November, 2024",
        location: "Convention Center",
        attendees: 500,
        image: Diwali,
        category: "Conference",
        knowMoreLink: "/festive-frames-details",  // unique link for "Know More"
        registerLink: "/register-festive-frames"  // unique link for "Register Now"
      },
      // Other ongoing events here
    ],
    future: [
      {
        title: "Hackathon Spring",
        description: "48-hour coding challenge to build innovative solutions for real-world problems.",
        date: "April 20-22, 2024",
        location: "Innovation Hub",
        attendees: 200,
        image: Diwali,
        category: "Hackathon",
        knowMoreLink: "/hackathon-details",  // unique link for "Know More"
        registerLink: "/register-hackathon"  // unique link for "Register Now"
      },
    ],
    previous: [
      {
        title: "Design Workshop 2023",
        description: "Hands-on design workshop for creative enthusiasts.",
        date: "March 10, 2023",
        location: "Design Studio",
        attendees: 150,
        image: "https://via.placeholder.com/600x400",
        category: "Workshop",
        knowMoreLink: "/design-workshop-details",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
    ],
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}><strong>Event Calendar</strong></h2>

      <div style={styles.sectionContainer}>
        <h3 style={styles.subheading}>Ongoing Events</h3>
        {events.ongoing.length === 0 ? (
          <p style={styles.noEventsMessage}>No events are going on right now.</p> 
        ) : (
          <div style={styles.cardContainer}>
            {events.ongoing.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        )}

        <h3 style={styles.subheading}>Future Events</h3>
        <div style={styles.cardContainer}>
          {events.future.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <h3 style={styles.subheading}>Previous Events</h3>
        <div style={styles.cardContainer}>
          {events.previous.map((event, index) => (
            <EventCard key={index} event={event} registrationClosed />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event, registrationClosed }) => (
  <div className="event-card" style={styles.card}>
    <img src={event.image} alt={event.title} style={styles.image} />
    <span style={styles.category}>{event.category}</span>
    <div style={styles.cardContent}>
      <h4 style={styles.eventTitle}>{event.title}</h4>
      <p style={styles.eventDescription}>{event.description}</p>
      <div style={styles.eventDetails}>
        <p style={styles.eventDetail}><Calendar size={18} /> {event.date}</p>
        <p style={styles.eventDetail}><MapPin size={18} /> {event.location}</p>
        <p style={styles.eventDetail}><Users size={18} /> {event.attendees} attendees</p>
      </div>
      <div style={styles.buttonContainer}>
        {!registrationClosed ? (
          <>
            <a href={event.knowMoreLink} style={styles.learnMoreButton}>Know More</a>
            <a href={event.registerLink} style={styles.registerButton}>Register Now <ExternalLink size={16} /></a>
          </>
        ) : (
          <button style={styles.registrationClosedButton}>Registration Closed</button>
        )}
      </div>
    </div>
  </div>
);

const styles = {
  section: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '50px 20px',
  },
  heading: {
    fontSize: '3rem',
    color: '#ADEBFF',
    marginBottom: '30px',
    marginTop: '70px',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  subheading: {
    fontSize: '2rem',
    color: '#ffffff',
    marginBottom: '20px',
    marginTop: '80px',
    fontFamily: "'Poppins', sans-serif",
    borderBottom: '2px solid #ffffff',  // Thin white line
    paddingBottom: '10px',  // Adds some space between text and the line
  },
  cardContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '40px',
    scrollSnapType: 'x mandatory', // Enable scroll snapping
    padding: '10px 0',
    overflowX: 'auto', // Allow horizontal scrolling
    scrollBehavior: 'smooth', // Smooth scrolling
    justifyContent: 'flex-start',
    flexWrap: 'nowrap', // Prevent wrapping
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch', // Smooth scrolling for mobile
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
    msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer / Edge
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    overflow: 'hidden',
    width:'100%',
    maxWidth: '400px',  // Reduced width for better visibility
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    scrollSnapAlign: 'start',
    flexShrink: 0, // Prevent card from shrinking
  },
  image: {
    width: '100%',
    height: '180px', // Adjusted image height
    objectFit: 'cover',
  },
  category: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
  },
  cardContent: {
    padding: '15px',
  },
  eventTitle: {
    fontSize: '1.3rem',
    color: '#ffffff',
    marginBottom: '10px',
  },
  eventDescription: {
    fontSize: '0.9rem',
    color: '#cccccc',
    marginBottom: '10px',
  },
  eventDetails: {
    fontSize: '0.85rem',
    color: '#ADEBFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  eventDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
  },
  learnMoreButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '6px 12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    textDecoration: 'none',  // Make sure it's a link
  },
  registerButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '5px',
    border: '1px solid #ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    textDecoration: 'none',  // Make sure it's a link
  },
  registrationClosedButton: {
    backgroundColor: '#555555',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'not-allowed',
    fontSize: '0.9rem',
  },

  // Responsive styles for mobile and tablet
  '@media (max-width: 768px)': {
    section: {
      padding: '30px 10px',
    },
    heading: {
      fontSize: '2rem',
      marginTop: '40px',
    },
    subheading: {
      fontSize: '1.5rem',
    },
    cardContainer: {
      flexDirection: 'column',
      gap: '20px',
      padding: '10px',
    },
    card: {
      maxWidth: '100%',
    },
    eventDetails: {
      fontSize: '0.8rem',
    },
  },
};

export default EventCalendar;
