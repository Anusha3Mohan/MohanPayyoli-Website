import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AdminPhotos.css'; // Custom styling for admin photo management

const AdminRecentphotos = () => {
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);

  // Fetch photos on mount
  useEffect(() => {
    const fetchPhotos = async () => {
      // Simulated mock data
      const mockPhotos = [
        { id: 1, url: 'http://example.com/photo1.jpg' },
        { id: 2, url: 'http://example.com/photo2.jpg' },
      ];
      setPhotos(mockPhotos); // Use mock data instead of API
    };
    fetchPhotos();
  }, []);

  // Add photo
  const handleAddPhoto = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/recentphotos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPhotos([...photos, response.data]); // Add the new photo to the list
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  // Delete photo
  const handleDeletePhoto = async (id) => {
    try {
      await axios.delete(`/api/recentphotos/${id}`);
      setPhotos(photos.filter((photo) => photo.id !== id)); // Remove the deleted photo
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div className="admin-photos-container">
      <h2>Manage Recent Photos</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={`Photo ${photo.id}`} />
            <button onClick={() => handleDeletePhoto(photo.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="add-photo">
        <button onClick={() => fileInputRef.current.click()} className="add-button">
          Add Photo
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleAddPhoto}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default AdminRecentphotos;
