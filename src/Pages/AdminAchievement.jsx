import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAchievement.css';

const AdminAchievement = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([
    { id: Date.now(), title: '', coverImage: null, details: '', cartDetails: [] },
  ]);

  const handleTitleChange = (e, id) => {
    const { value } = e.target;
    setAchievements((prev) =>
      prev.map((ach) => (ach.id === id ? { ...ach, title: value } : ach))
    );
  };

  const handleCoverImageChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAchievements((prev) =>
        prev.map((ach) => (ach.id === id ? { ...ach, coverImage: imageUrl } : ach))
      );
    }
  };

  const handleDetailsChange = (e, id) => {
    const { value } = e.target;
    setAchievements((prev) =>
      prev.map((ach) => (ach.id === id ? { ...ach, details: value } : ach))
    );
  };

  const handleAddAchievement = () => {
    setAchievements((prev) => [
      ...prev,
      { id: Date.now(), title: '', coverImage: null, details: '', cartDetails: [] },
    ]);
  };

  const handleDeleteAchievement = (id) => {
    setAchievements((prev) => prev.filter((ach) => ach.id !== id));
  };

  const handleSave = () => {
    console.log('Achievements:', achievements);
    alert('Achievements saved successfully!');
  };

  return (
    <div className="admin-achievement-container">
      {/* Header with Back Button */}
      <header className="admin-header">
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
        <h2>Admin: Manage Achievements</h2>
      </header>

      <h3>Manage Achievement Details</h3>

      {achievements.map((achievement, index) => (
        <div key={achievement.id} className="achievement-box">

          {/* Cover Image Section */}
          <div className="cover-image-section">
            <h4>Achievement {index + 1} - Cover Image</h4>
            {achievement.coverImage ? (
              <div className="cover-image-preview">
                <img src={achievement.coverImage} alt="Cover" />
              </div>
            ) : (
              <p>No cover image uploaded</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleCoverImageChange(e, achievement.id)}
            />
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h4>Achievement Image {index + 1} - Title</h4>
            <input
              type="text"
              value={achievement.title}
              onChange={(e) => handleTitleChange(e, achievement.id)}
              placeholder="Enter achievement title here..."
            />
          </div>

          {/* Details Section */}
          <div className="details-section">
            <h4>Achievement Image Details</h4>
            <textarea
              value={achievement.details}
              onChange={(e) => handleDetailsChange(e, achievement.id)}
              placeholder="Enter achievement details here..."
            ></textarea>
          </div>

          <button
            className="delete-button"
            onClick={() => handleDeleteAchievement(achievement.id)}
          >
            Delete Achievement
          </button>
        </div>
      ))}

      {/* Add Achievement Button */}
      <button className="add-achievement-button" onClick={handleAddAchievement}>
        + Add Achievement
      </button>

      {/* Save Button */}
      <button className="save-button" onClick={handleSave}>
        Save All
      </button>
    </div>
  );
};

export default AdminAchievement;
