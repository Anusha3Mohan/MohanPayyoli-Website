import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Photos.css';  // Ensure you have the appropriate styling for your images

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  // Fetch photos when the component mounts
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/api/photos');
        
        // Log the response to check its structure
        console.log('Fetched photos response:', response.data); 
        
        // Ensure the response is an array, and each object contains a 'url' property
        if (Array.isArray(response.data)) {
          setPhotos(response.data);  // Set the photos if the data is an array
        } else {
          console.error('Expected an array of photos, but got:', response.data);
          setPhotos([]); // Set photos to empty if the structure is not as expected
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos([]); // Set photos to empty if there's an error fetching data
      }
    };

    fetchPhotos();  // Fetch photos on component mount
  }, []); // Empty dependency array ensures it runs once

  return (
    <div className="photo-grid">
      {/* Check if photos are available */}
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <div key={index} className="photo-item">
            {/* Display the photo */}
            <img src={photo.url} alt={`Photo ${index + 1}`} />
          </div>
        ))
      ) : (
        <p>No photos available.</p> // Display this if there are no photos
      )}
    </div>
  );
};

export default Photos;
