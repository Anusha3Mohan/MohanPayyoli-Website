import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BioPhotos.css';

const BioPhotos = () => {
  const [photos, setPhotos] = useState([]); // Array to store photo objects
  const [newPhoto, setNewPhoto] = useState(null);

  // Fetch existing photos when the component mounts
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/api/photos');
        setPhotos(Array.isArray(response.data) ? response.data : []); // Ensure the response is an array
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos([]); // Fallback to empty array if error occurs
      }
    };
    fetchPhotos();
  }, []);

  // Handle photo upload
  const handleAddPhoto = async () => {
    if (!newPhoto) return;
    
    const formData = new FormData();
    formData.append('photo', newPhoto); // Add photo to FormData

    try {
      // Send the photo to the server (POST request)
      const response = await axios.post('/api/photos/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      // Assuming the server response includes a "photos" array with the new photos
      console.log('Server response:', response.data); // Logs the server response for debugging

      // Update the state with the new photos returned from the server
      if (response.data && Array.isArray(response.data.photos)) {
        setPhotos(response.data.photos);
      }
      
      setNewPhoto(null); // Reset the file input after uploading
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  // Handle photo deletion
  const handleDeletePhoto = async (imageUrl) => {
    try {
      await axios.delete('/api/photos/delete', { data: { imageUrl } });
      setPhotos(photos.filter((photo) => photo.url !== imageUrl)); // Remove the deleted photo from state
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div className="bio-photos">
      <h2>Recent Photos</h2>
      <div className="add-photo">
        <input
          type="file"
          onChange={(e) => setNewPhoto(e.target.files[0])}
        />
        <button onClick={handleAddPhoto}>Add Photo</button>
      </div>
      <div className="photos-list">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.url} alt={photo.alt || `Bio Photo ${index + 1}`} />
              <button onClick={() => handleDeletePhoto(photo.url)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No photos available.</p>
        )}
      </div>
    </div>
  );
};

export default BioPhotos;
