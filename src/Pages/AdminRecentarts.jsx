import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AdminArts.css'; // Custom styling for admin art management

const AdminRecentarts = () => {
  const [arts, setArts] = useState([]);
  const fileInputRef = useRef(null);

  // Fetch arts on mount
  useEffect(() => {
    const fetchArts = async () => {
      // Simulated mock data
      const mockArts = [
        { id: 1, url: 'http://example.com/art1.jpg' },
        { id: 2, url: 'http://example.com/art2.jpg' },
      ];
      setArts(mockArts); // Use mock data instead of API
    };
    fetchArts();
  }, []);
  

  // Add art
  const handleAddArt = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/recentarts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setArts([...arts, response.data]); // Add the new art to the list
    } catch (error) {
      console.error('Error adding art:', error);
    }
  };

  // Delete art
  const handleDeleteArt = async (id) => {
    try {
      await axios.delete(`/api/recentarts/${id}`);
      setArts(arts.filter((art) => art.id !== id)); // Remove the deleted art
    } catch (error) {
      console.error('Error deleting art:', error);
    }
  };

  return (
    <div className="admin-arts-container">
      <h2>Manage Recent Arts</h2>
      <div className="art-grid">
        {arts.map((art) => (
          <div key={art.id} className="art-item">
            <img src={art.url} alt={`Art ${art.id}`} />
            <button onClick={() => handleDeleteArt(art.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="add-art">
        <button onClick={() => fileInputRef.current.click()} className="add-button">
          Add Art
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleAddArt}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default AdminRecentarts;
