import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './AdminHome.css';
import main1 from '../assets/slide/main1.jpg';
import main2 from '../assets/slide/main2.jpg';
import main3 from '../assets/slide/main3.jpg';
import main4 from '../assets/slide/main4.jpg';
import main5 from '../assets/slide/main5.jpg';
import main6 from '../assets/slide/main6.jpg';
import main7 from '../assets/slide/main7.jpg';
import main8 from '../assets/slide/main8.jpg';
import main9 from '../assets/slide/main9.jpg';
import main10 from '../assets/slide/main10.jpg';
import main11 from '../assets/slide/main11.jpg';
import main12 from '../assets/slide/main12.jpg';
import main13 from '../assets/slide/main13.jpg';
import main14 from '../assets/slide/main14.jpg';
import main16 from '../assets/slide/main16.jpg';
import main17 from '../assets/slide/main17.jpg';

const photos = [main1, main2, main3, main4, main5];
const sliderImages = [main6, main7, main8, main9, main10, main11, main12, main13, main14, main16, main17];

const AdminHomepage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <img 
            key={index}
            src={photo} 
            alt={`Slideshow image ${index + 1}`} 
            className={index === currentPhotoIndex ? "fade" : ""} 
            style={{ display: index === currentPhotoIndex ? 'block' : 'none' }}
          />
        ))}
      </div>

      

       {/* Centered Admin Login Button */}
       <div className="admin-login-link">
        <Link to="/admin/login" className="admin-login-button">Admin Login</Link>
      </div>
      
    </div>
  );
};

export default AdminHomepage;
