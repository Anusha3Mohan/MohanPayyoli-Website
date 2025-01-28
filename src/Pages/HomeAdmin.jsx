import React, { useState } from 'react';
import './HomeAdmin.css';
import { useNavigate } from 'react-router-dom';
import mohan from '../assets/Images/mohannew.jpg';
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

const HomeAdmin = () => {
  const navigate = useNavigate();

  const [profilePhoto, setProfilePhoto] = useState(mohan);
  const [description, setDescription] = useState('Your description text here.');
  const [slidingPhotos, setSlidingPhotos] = useState([main1, main2, main3, main4, main5]);
  const [sliderImages, setSliderImages] = useState([main6, main7, main8, main9, main10]);

  // Backup state to handle cancel action
  const [backupState, setBackupState] = useState({
    profilePhoto,
    description,
    slidingPhotos,
    sliderImages,
  });

  // Handle Save Changes
  const handleSaveChanges = () => {
    setBackupState({ profilePhoto, description, slidingPhotos, sliderImages });
    alert('Changes saved successfully!');
  };

  // Handle Cancel
  const handleCancel = () => {
    setProfilePhoto(backupState.profilePhoto);
    setDescription(backupState.description);
    setSlidingPhotos(backupState.slidingPhotos);
    setSliderImages(backupState.sliderImages);
    navigate('/admin/manage'); // Redirect to the Admin Manage page
  };

  const handleAddSlidingPhoto = (e) => {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setSlidingPhotos([...slidingPhotos, newPhoto]);
  };

  const handleDeleteSlidingPhoto = (index) => {
    setSlidingPhotos(slidingPhotos.filter((_, i) => i !== index));
  };

  const handleAddSliderImage = (e) => {
    const newImage = URL.createObjectURL(e.target.files[0]);
    setSliderImages([...sliderImages, newImage]);
  };

  const handleDeleteSliderImage = (index) => {
    setSliderImages(sliderImages.filter((_, i) => i !== index));
  };

  const handleProfilePhotoChange = (e) => {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setProfilePhoto(newPhoto);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="home-admin-container">
      {/* Header Section */}
      <header className="admin-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h2>Manage Home Page</h2>
      </header>

      {/* Profile Photo Section */}
      <div className="admin-section">
        <h3 className="section-title">Profile Photo</h3>
        <div className="profile-photo-wrapper">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <input type="file" onChange={handleProfilePhotoChange} className="upload-input" />
        </div>
      </div>

      {/* Description Section */}
      <div className="admin-section">
        <h3 className="section-title">Description</h3>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          rows="4"
          className="description-textarea"
        />
      </div>

      {/* Sliding Photos Section */}
      <div className="admin-section">
        <h3 className="section-title">Sliding Photos</h3>
        <div className="photo-list">
          {slidingPhotos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img src={photo} alt={`Sliding Photo ${index + 1}`} className="photo-item" />
              <button onClick={() => handleDeleteSlidingPhoto(index)} className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </div>
        <input type="file" onChange={handleAddSlidingPhoto} className="upload-input" />
      </div>

      {/* Slider Images Section */}
      <div className="admin-section">
        <h3 className="section-title">Slider Images</h3>
        <div className="photo-list">
          {sliderImages.map((image, index) => (
            <div key={index} className="photo-card">
              <img src={image} alt={`Slider Image ${index + 1}`} className="photo-item" />
              <button onClick={() => handleDeleteSliderImage(index)} className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </div>
        <input type="file" onChange={handleAddSliderImage} className="upload-input" />
      </div>

      {/* Save and Cancel Buttons */}
      <div className="admin-actions">
        <button className="save-btn" onClick={handleSaveChanges}>Save Changes</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default HomeAdmin;
