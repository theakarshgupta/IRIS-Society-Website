import React, { useEffect, useState } from 'react';

function Gallery() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .photo-card {
        position: relative;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      .photo-card:hover {
        transform: translateY(-8px) !important;
        box-shadow: 0 0 25px rgba(173, 235, 255, 0.3) !important;
      }

      .photo-card:hover img {
        transform: scale(1.08) !important;
      }

      .photo-card:hover .overlay {
        opacity: 1 !important;
        background-color: rgba(0, 0, 0, 0.75) !important;
      }
      
      .photo-card::after {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(225deg, #ADEBFF, #1a1a1a);
        border-radius: 12px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      .photo-card:hover::after {
        opacity: 0.5;
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
    return () => document.head.removeChild(styleSheet);
  }, []);

  // Sample photos with different aspect ratios
  const photos = [
    { 
      src: '/api/placeholder/800/450', // 16:9
      title: 'Landscape View',
      description: 'A beautiful wide landscape shot.',
      aspectRatio: '16/9'
    },
    { 
      src: '/api/placeholder/400/600', // 2:3
      title: 'Portrait Shot',
      description: 'A vertical portrait composition.',
      aspectRatio: '2/3'
    },
    { 
      src: '/api/placeholder/600/600', // 1:1
      title: 'Square Photo',
      description: 'Perfect square composition.',
      aspectRatio: '1/1'
    },
    { 
      src: '/api/placeholder/800/450', // 16:9
      title: 'Wide Shot',
      description: 'Another panoramic view.',
      aspectRatio: '16/9'
    },
    { 
      src: '/api/placeholder/400/600', // 2:3
      title: 'Vertical View',
      description: 'Beautiful vertical composition.',
      aspectRatio: '2/3'
    },
    { 
      src: '/api/placeholder/600/600', // 1:1
      title: 'Square Memory',
      description: 'Square format capture.',
      aspectRatio: '1/1'
    },
    { 
        src: '/api/placeholder/800/450', // 16:9
        title: 'Landscape View',
        description: 'A beautiful wide landscape shot.',
        aspectRatio: '16/9'
      },
      { 
        src: '/api/placeholder/400/600', // 2:3
        title: 'Portrait Shot',
        description: 'A vertical portrait composition.',
        aspectRatio: '2/3'
      },
      { 
        src: '/api/placeholder/600/600', // 1:1
        title: 'Square Photo',
        description: 'Perfect square composition.',
        aspectRatio: '1/1'
      },
      { 
        src: '/api/placeholder/800/450', // 16:9
        title: 'Wide Shot',
        description: 'Another panoramic view.',
        aspectRatio: '16/9'
      },
      { 
        src: '/api/placeholder/400/600', // 2:3
        title: 'Vertical View',
        description: 'Beautiful vertical composition.',
        aspectRatio: '2/3'
      },
      { 
        src: '/api/placeholder/600/600', // 1:1
        title: 'Square Memory',
        description: 'Square format capture.',
        aspectRatio: '1/1'
      }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Gallery</h2>
      <div style={styles.cardContainer} className="card-container">
        {photos.map((photo, index) => (
          <PhotoCard 
            key={index}
            title={photo.title}
            description={photo.description}
            image={photo.src}
            aspectRatio={photo.aspectRatio}
          />
        ))}
      </div>
    </section>
  );
}

function PhotoCard({ title, description, image, aspectRatio }) {
  const [imageClass, setImageClass] = useState('');

  useEffect(() => {
    // Determine image class based on aspect ratio
    const [width, height] = aspectRatio.split('/').map(Number);
    const ratio = width / height;
    if (ratio > 1.7) { // For wide images (like 16:9)
      setImageClass('wide');
    } else if (ratio < 0.7) { // For tall images
      setImageClass('tall');
    }
  }, [aspectRatio]);

  return (
    <div style={{
      ...styles.card,
      aspectRatio: aspectRatio
    }} className={`photo-card ${imageClass}`}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.overlay} className="overlay">
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    padding: '80px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#ADEBFF',
    marginBottom: '60px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  cardContainer: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  card: {
    position: 'relative',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '2px solid rgba(173, 235, 255, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '30px',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#ADEBFF',
    marginBottom: '15px',
    transform: 'translateY(10px)',
    transition: 'transform 0.4s ease',
  },
  description: {
    fontSize: '1.1rem',
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: '90%',
    lineHeight: '1.5',
    opacity: '0.9',
  },
};

export default Gallery;