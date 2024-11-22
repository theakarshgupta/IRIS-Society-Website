import React, { useState } from "react";
import demo from '../Assets/akansha.jpg';

const CalendarGallery = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const images = {
    "2024-11-21": [
      {
        src: demo,
        title: "Beautiful Scenery",
        description: "A serene view of a sunset captured in nature.",
      },
    ],
    "2024-11-22": [
      {
        src: "https://via.placeholder.com/600/3357FF",
        title: "Abstract Art",
        description: "A vibrant abstract piece showcasing bold colors.",
      },
      {
        src: "https://via.placeholder.com/600/FFFF33",
        title: "Golden Glow",
        description: "A golden moment captured during sunrise.",
      },
    ],
    "2024-11-23": [
      {
        src: "https://via.placeholder.com/600/57FF33",
        title: "Lush Green Field",
        description: "A vast field of greenery with a peaceful vibe.",
      },
    ],
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div
      style={{
        fontFamily: "Montserrat",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "70px"}}>Calendar Gallery</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label
          htmlFor="datePicker"
          style={{
            fontSize: "18px",
            marginRight: "10px",
          }}
        >
          Select a Date:
        </label>
        <input
          id="datePicker"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxWidth: "200px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {images[selectedDate] ? (
          images[selectedDate].map((image, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                padding: "15px",
                width: "350px",
                textAlign: "center",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ margin: "15px 0 10px", fontSize: "22px", color: "#ffffff" }}>
                {image.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#fffff1" }}>{image.description}</p>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "20px", color: "#999" }}>
            {selectedDate ? "No images available for this date." : "Please select a date."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CalendarGallery;
