import { React, useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink, X } from 'lucide-react';
import Diwali from '../Assets/diwali.png';
import Dussehra from '../Assets/dussehra.png';

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .photo-card {
        position: relative;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
        overflow: hidden;
      }

      .photo-card:hover {
        transform: translateY(-8px); /* Move card up */
        box-shadow: 0 10px 20px rgba(173, 235, 255, 0.3); /* Shadow effect */
      }

      .photo-card img {
        width: 100%; /* Ensure image fills the card */
        height: 250px; /* Fixed height for the image */
        object-fit: cover; /* Maintain aspect ratio */
        transition: transform 0.4s ease; /* Smooth scaling */
      }

      .photo-card .overlay {
        opacity: 0; /* Initial state for overlay */
        transition: opacity 0.4s ease; /* Smooth overlay transition */
      }

      .photo-card:hover .overlay {
        opacity: 1; /* Show overlay on hover */
        background-color: rgba(0, 0, 0, 0.75); /* Dark overlay */
      }

      .photo-card::after {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(225deg, #ADEBFF, #1a1a1a);
        border-radius: 12px;
        z-index: -1;
        opacity: 0; /* Initial state for border effect */
        transition: opacity 0.4s ease; /* Smooth border transition */
      }

      .photo-card:hover::after {
        opacity: 0.5; /* Show border effect on hover */
      }

      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        grid-auto-flow: dense;
      }

      .photo-card.wide {
        grid-column: span 2;
      }

      .photo-card.tall {
        grid-row: span 2;
      }

      @media (max-width: 1024px) {
        .photo-card.wide {
          grid-column: span 1;
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);


  const events = {
    ongoing: [
      // {
      //   title: "Festive Frames: Diwali Unfiltered",
      //   description: "Join us for the biggest festive series from IRIS Society",
      //   date: "29 October-02 November, 2024",
      //   location: "Convention Center",
      //   hosts: 500,
      //   image: Diwali,
      //   category: "Conference",
      //   guidelines: "/festive-frames-details",  // unique link for "Know More"
      //   registerLink: "/register-festive-frames"  // unique link for "Register Now"
      // },

      // Other ongoing events here
    ],
    future: [
      {
        title: "Shutter Safari: Virtual Edition",
        description: "48-hour coding challenge to build innovative solutions for real-world problems.",
        descriptionFull: "Shutter Safari: Virtual Edition is an online adaptation of the original themed photography event, held as part of Margazhi, the IIT Madras BS degree students’ fest. Participants are invited to explore creative themes from wherever they are, capturing and sharing unique perspectives that bring each theme to life in a virtual showcase of photography talent.",
        date: "April 20-22, 2024",
        location: "Margazhi",
        hosts: 'IRIS Society X Kanha House',
        image: "https://via.placeholder.com/600x400",
        category: "Photography",
        guidelines: "https://docs.google.com/document/d/1Qnr3l4ZFjqz6MiQMbnRefJ7PQEUKW-QtNNk0U3Yqp0M/edit?tab=t.0",  // unique link for "Know More"
        registerLink: "/register-hackathon",  // unique link for "Register Now"
        // winners: ['Ritik (123)', 'Anshi (456)', 'Akarsh (789)'],
        // winners: ['not yet decided'],
      },
      {
        title: "Capture Craft",
        description: "48-hour coding challenge to build innovative solutions for real-world problems.",
        descriptionFull: '',
        date: "April 20-22, 2024",
        location: "Margazhi",
        hosts: 'IRIS Society',
        image: "https://via.placeholder.com/600x400",
        category: "Product Photography",
        guidelines: "/hackathon-details",  // unique link for "Know More"
        registerLink: "/register-hackathon"  // unique link for "Register Now"
      },
      {
        title: "Visual Voices",
        description: "48-hour coding challenge to build innovative solutions for real-world problems.",
        descriptionFull: '',
        date: "April 20-22, 2024",
        location: "Margazhi",
        hosts: 'IRIS Society X Aayam Society',
        image: "https://via.placeholder.com/600x400",
        category: "Storytelling",
        guidelines: "/hackathon-details",  // unique link for "Know More"
        registerLink: "/register-hackathon"  // unique link for "Register Now"
      },
    ],
    previous: [
      {
        title: "Festive Frames: Diwali Unfiltered",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "29 Oct- 02 Nov, 2024",
        location: "Online",
        hosts: 'IRIS Society X Namdapha House',
        image: Diwali,
        category: "Street Photography",
        guidelines: "https://docs.google.com/document/d/1S_d1tzooRrKxxZC5Tp3lNHbU7th1KVeXyGmxKNOoyNw/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "Festive Frames: Dussehra Special",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "09 Aug-13 Aug, 2024",
        location: "Online",
        hosts: 'IRIS Society X Kanha House',
        image: Dussehra,
        category: "Editing Skills",
        guidelines: "https://docs.google.com/document/d/15WGKpNeFCjkF85eYyK9L4ORFK5Dyvr6GojZ-gTfR4K0/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "RAW: Pixels to Perfection",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "15 Sept-17 Sept, 2024",
        location: "Online",
        hosts: 'IRIS Photography Society',
        image: "https://via.placeholder.com/600x400",
        category: "Editing Skills",
        guidelines: "https://docs.google.com/document/d/1pt3o4Bvz9uskxf7qsPPmxtMphwnX5CouzeuMGr7mGDI/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "Shutter Safari",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "15 Sept-17 Sept, 2024",
        location: "Paradox",
        hosts: 'IRIS Society x Kanha House',
        image: "https://via.placeholder.com/600x400",
        category: "Photography",
        guidelines: "",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "Mobile Photography and Post Editing Session",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "1 May, 2024",
        location: "Gmeet",
        hosts: 'IRIS Photography Society',
        image: "https://via.placeholder.com/600x400",
        category: "Workshop",
        guidelines: "",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "Colours of Culture",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "25 mar-27 Mar, 2024",
        location: "Virtual",
        hosts: 'IRIS Society X Kanha House',
        image: "https://via.placeholder.com/600x400",
        category: "Event",
        guidelines: "https://docs.google.com/document/d/1g-GT7wVGKL3Vu6V4S1iwMeuHBF0ShJpcom8E0T1hm2E/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "PhotoWalk: Essence of Delhi",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "11 February, 2024",
        location: "Lodhi Garden, Delhi",
        hosts: 'IRIS Society X Kanha House',
        image: "https://via.placeholder.com/600x400",
        category: "Meetup",
        guidelines: "https://docs.google.com/document/d/1g-GT7wVGKL3Vu6V4S1iwMeuHBF0ShJpcom8E0T1hm2E/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
      {
        title: "Colours of Culture",
        description: "Hands-on design workshop for creative enthusiasts.",
        descriptionFull: '',
        date: "15 Sept-17 Sept, 2024",
        location: "Virtual",
        hosts: 'IRIS Society X Kanha House',
        image: "https://via.placeholder.com/600x400",
        category: "Event",
        guidelines: "https://docs.google.com/document/d/1g-GT7wVGKL3Vu6V4S1iwMeuHBF0ShJpcom8E0T1hm2E/edit?usp=sharing",  // unique link for "Know More"
        registerLink: null  // No registration link since the event is over
      },
    ],
  };

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

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
              <EventCard key={index} event={event} onKnowMore={openModal} />
            ))}
          </div>
        )}

        <h3 style={styles.subheading}>Upcoming Events</h3>
        <div style={styles.cardContainer}>
          {events.future.map((event, index) => (
            <EventCard key={index} event={event} onKnowMore={openModal} />
          ))}
        </div>

        <h3 style={styles.subheading}>Previous Events</h3>
        <div style={styles.cardContainer}>
          {events.previous.map((event, index) => (
            <EventCard key={index} event={event} onKnowMore={openModal} registrationClosed />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>
              <X size={24} color="#ffffff" />
            </button>
            <img src={selectedEvent.image} alt={selectedEvent.title} style={styles.modalImage} />
            <h2 style={styles.modalTitle}>{selectedEvent.title}</h2>
            <p>{selectedEvent.descriptionFull}</p>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            {selectedEvent.winners && (
              <div>
                <strong>Winners:</strong>
                <ul style={styles.noBulletList}>
                  {selectedEvent.winners.map((winner, idx) => (
                    <li key={idx}>{winner}</li>
                  ))}
                </ul>
              </div>
            )}
            <p><strong>Hosted by:</strong> {selectedEvent.hosts}</p>
            <a href={selectedEvent.guidelines}><strong>Guidelines</strong> </a>
          </div>
        </div>
      )}
    </section>
  );
};

const EventCard = ({ event, onKnowMore, registrationClosed }) => (
  <div className="photo-card" style={styles.card}>
    <div className="overlay"></div> {/* Overlay for hover effect */}
    <img src={event.image} alt={event.title} style={styles.image} />
    <span style={styles.category}>{event.category}</span>
    <div style={styles.cardContent}>
      <h4 style={styles.eventTitle}>{event.title}</h4>
      <p style={styles.eventDescription}>{event.description}</p>
      <div style={styles.eventDetails}>
        <p style={styles.eventDetail}><Calendar size={18} /> {event.date}</p>
        <p style={styles.eventDetail}><MapPin size={18} /> {event.location}</p>
        <p style={styles.eventDetail}><Users size={18} /> {event.hosts}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={() => onKnowMore(event)} style={styles.learnMoreButton}>Know More</button>
        {!registrationClosed ? (
          <a href={event.registerLink} style={styles.registerButton}>Register Now<ExternalLink size={16} /></a>
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
    width: '100%',
    maxWidth: '400px',  // Reduced width for better visibility
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    scrollSnapAlign: 'start',
    flexShrink: 0, // Prevent card from shrinking
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '180px', // Adjusted image height
    objectFit: 'cover',
  },
  category: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
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
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '0 10px',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
    textAlign: 'center',
    overflowY: 'auto',  // Enable scrolling if content is too long
    maxHeight: '80vh',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  modalImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  noBulletList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '15px',
  },

  // Responsive styles for mobile and tablet
  '@media (max-width: 768px)': {
    modalContent: {
      padding: '20px',
      width: '90%',
      maxWidth: '100%',
      maxHeight: '85vh',
      overflowY: 'auto',  // Enable vertical scrolling on mobile if needed
    },
    modalTitle: {
      fontSize: '1.2rem',
    },
    closeButton: {
      top: '10px',
      right: '10px',
    },
  },
};

export default EventCalendar;
