import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.css';

const Manage = () => {
  return (
    <div className="manage-container">
      {/* Header with only a back button */}
      <header className="manage-header">
        <Link to="/admin/home" className="back-button">&#x2190; Back</Link> {/* Unicode arrow symbol */}
      </header>

      {/* Main content area for managing photos and art */}
      <main className="manage-content">
        <h2>Manage Photos and Art</h2>
        <p>Select a section to manage:</p>
        
        {/* Centered buttons for admin management sections */}
        <div className="manage-buttons">
          <Link to="/admin/homeadmin" className="manage-btn">Home</Link>
          <Link to="/admin/bio" className="manage-btn">Bio</Link>
          <Link to="/admin/gallery" className="manage-btn">Gallery</Link>
          <Link to="/admin/news" className="manage-btn">News</Link>
          <Link to="/admin/awards" className="manage-btn">Awards</Link>
          <Link to="/admin/arts" className="manage-btn">Arts</Link>
          <Link to="/admin/photoorders" className="manage-btn">Photo Orders</Link>
          <Link to="/admin/artorders" className="manage-btn">Art Orders</Link>
          <Link to="/admin/messages" className="manage-btn">Messages</Link>
        </div>
      </main>
    </div>
  );
};

export default Manage;
