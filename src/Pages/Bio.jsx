import React from 'react';
import { Link } from 'react-router-dom'; 
import './Bio.css';
import main3 from '../assets/slide/main3.jpg';
import recentphotos from '../assets/Recent/recentmain.jpg';
import recentartcover from '../assets/Recent/recentartcover.jpg';

const Bio = () => {
  return (
    <div className="bio-container">
      <h1>ABOUT ME</h1>
      <h2>"I capture, curate visual stories causing you to linger."</h2>
      <img 
        src={main3} 
        width={"70%"} 
        height={"600px"} 
        alt="Nature Landscape" 
      /> 
      <div className='text-container'>
        <p>
          I love finding unique and creative ways to curate the stories around me into visual narratives.
          Every element of photography is centered around people. Even when there is no human to be seen,
          the image itself is designed to engage someone's eye. People are the focal point, and it's light that captures them.
          I process the world in pictures, understand life through the light that defines it, and speak through the lens of a camera.
        </p>
        <h3>PHOTOGRAPHER / ARTIST</h3>
        <p>
          Welcome to my portfolio! I am a professional photographer with over a decade of experience capturing the beauty of the world through my lens.
           I specialize in  portrait, landscape, wedding, fashion,sports and I strive to create images that tell a story and evoke emotion.
        </p>
        <p>
          My journey in photography began with a passion . Over the years, I have honed my skills and developed a unique style.
        </p>
        <p>
          I believe that every photograph is an opportunity to capture a moment in time—moments that can be cherished forever.
          My goal is to create lasting memories for my clients, pouring my heart into every shot.
        </p>
      </div>

      {/* Photography Section */}
      <div className='photography'>
        <h3>PHOTOGRAPHY</h3>
        <Link to="/photos">
          <div className="image-container">
            <img 
              src={recentphotos} 
              alt="Recent Photography Work" 
              className="recent-image" 
            />
            <span className="image-hover-text">RECENT PHOTOGRAPHS</span>
          </div>
        </Link>
      </div>

      {/* Arts Section */}
      <div className='arts'>
        <h3>ARTS</h3>
        <Link to="/paintings">
          <div className="image-container">
            <img 
              src={recentartcover}  
              alt="Recent Art Work" 
              className="recentart-image" 
            />
            <span className="image-hover-text">RECENT ART</span>
          </div>
        </Link>
      </div>

      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <Link to="/contact" className="get-in-touch-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Bio;
