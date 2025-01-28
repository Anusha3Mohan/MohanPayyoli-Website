// Slider.jsx
import React, { useState, useEffect } from 'react';
import './Slider.css'; // Make sure to create this CSS file

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
    });

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={handlePrev}>❮</button>
      {images.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`Slide ${index}`} 
          className={index === currentImageIndex ? "fade" : "hidden"} 
        />
      ))}
      <button className="slider-button right" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Slider;
