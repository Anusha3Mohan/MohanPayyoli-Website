import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminGallery.css'; // Make sure to style buttons appropriately

function AdminGallery() {
  const navigate = useNavigate();

  // State for managing sections
  const [sections, setSections] = useState([
    { name: 'Achievements', link: '/admin/gallery/achievements' },
    { name: 'Award Photos', link: '/admin/gallery/award-photos' },
    { name: 'Commercial', link: '/admin/gallery/commercial' },
    { name: 'Faces', link: '/admin/gallery/faces' },
    { name: 'Food', link: '/admin/gallery/food' },
    { name: 'General', link: '/admin/gallery/general' },
    { name: 'Travel', link: '/admin/gallery/travel' },
    { name: 'Sports', link: '/admin/gallery/sports' },
  ]);

  // State for showing the form to add a new section
  const [showForm, setShowForm] = useState(false);
  const [newSection, setNewSection] = useState({ name: '', link: '' });

  // Handle adding a new section
  const handleAddSection = () => {
    if (newSection.name && newSection.link) {
      setSections([...sections, newSection]);
      setNewSection({ name: '', link: '' });
      setShowForm(false);
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <div className="admin-gallery-container">
      {/* Header with Back Button and Centered Title */}
      <header className="admin-header">
        <button onClick={() => navigate('/admin/manage')} className="back-btn">← Back</button>
        <h1 className="header-title">Admin Gallery</h1>
      </header>

      <div className="gallery-sections">
        {sections.map((section, index) => (
          <button
            key={index}
            className="gallery-section-button"
            onClick={() => navigate(section.link)}
          >
            {section.name}
          </button>
        ))}

        <button
          className="add-section-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Section'}
        </button>
      </div>

      {showForm && (
        <div className="add-section-form">
          <input
            type="text"
            placeholder="Section Name"
            value={newSection.name}
            onChange={(e) => setNewSection({ ...newSection, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Section Link"
            value={newSection.link}
            onChange={(e) => setNewSection({ ...newSection, link: e.target.value })}
          />
          <button onClick={handleAddSection}>Add Section</button>
        </div>
      )}
    </div>
  );
}

export default AdminGallery;
