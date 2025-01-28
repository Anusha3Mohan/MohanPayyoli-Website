import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import main3 from '../assets/slide/main3.jpg'; // Importing the default photo
import './AdminBio.css';

const AdminBio = () => {
  const navigate = useNavigate();

  const aboutMeInputRef = useRef(null); // Ref for About Me photo input

  const [description, setDescription] = useState({
    intro: "I capture, curate visual stories causing you to linger.",
    bio: [
      "I love finding unique and creative ways to curate the stories around me into visual narratives.",
      "I believe that every photograph is an opportunity to capture a moment in time—moments that can be cherished forever.",
    ],
    about: "PHOTOGRAPHER / ARTIST",
  });

  const [aboutMePhoto, setAboutMePhoto] = useState(main3); // Default to main3

  // Replace "About Me" photo
  const handleReplaceAboutMePhoto = (e) => {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setAboutMePhoto(newPhoto);
  };

  // Add a new bio line
  const handleAddBioLine = () => {
    setDescription({
      ...description,
      bio: [...description.bio, ""], // Add an empty line to the bio
    });
  };

  // Delete a specific bio line
  const handleDeleteBioLine = (index) => {
    const updatedBio = description.bio.filter((_, i) => i !== index); // Remove the selected line
    setDescription({ ...description, bio: updatedBio });
  };

  // Update a specific bio line
  const handleBioChange = (index, value) => {
    const updatedBio = [...description.bio];
    updatedBio[index] = value;
    setDescription({ ...description, bio: updatedBio });
  };

  return (
    <div className="admin-bio-container">
      {/* Header with Back Button */}
      <header className="admin-header">
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
        <h2>Admin: Manage Bio</h2>
      </header>

      {/* Intro Section */}
      <div className="intro-section">
        <h3>Intro Quote</h3>
        <textarea
          value={description.intro}
          onChange={(e) => setDescription({ ...description, intro: e.target.value })}
          rows="2"
          className="styled-textarea"
        ></textarea>
      </div>

      {/* Bio Section */}
      <div className="bio-section">
        <h3>About Me</h3>
        <textarea
          value={description.about}
          onChange={(e) => setDescription({ ...description, about: e.target.value })}
          rows="2"
          className="styled-textarea"
        ></textarea>
        <h4>Bio Lines</h4>
        {description.bio.map((line, index) => (
          <div key={index} className="bio-line">
            <textarea
              value={line}
              onChange={(e) => handleBioChange(index, e.target.value)}
              rows="2"
              className="styled-textarea"
            ></textarea>
            <button
              className="delete-btn"
              onClick={() => handleDeleteBioLine(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddBioLine}>
          Add Line
        </button>
      </div>

      {/* Current About Me Photo Section */}
      <div className="about-me-photo-section">
        <h3>Current About Me Photo</h3>
        <div className="photo-item">
          <img src={aboutMePhoto} alt="About Me" className="preview-image" />
          <div className="photo-actions">
            <button
              className="replace-photo-btn"
              onClick={() => aboutMeInputRef.current.click()}
            >
              Replace Photo
            </button>
          </div>
        </div>
        <input
          type="file"
          ref={aboutMeInputRef}
          style={{ display: "none" }}
          onChange={handleReplaceAboutMePhoto}
          accept="image/*"
        />
      </div>

      {/* Navigation to Recent Photos and Arts */}
      <div className="navigation-buttons">
        <button
          className="nav-btn"
          onClick={() => navigate('/admin/recentphotos')}
        >
          Manage Recent Photos
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate('/admin/recentarts')}
        >
          Manage Recent Arts
        </button>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="admin-actions">
        <button className="save-btn">Save Changes</button>
        <button
          className="cancel-btn"
          onClick={() => navigate('/admin/manage')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminBio;
