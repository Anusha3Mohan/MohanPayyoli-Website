import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditSection() {
  const { sectionName } = useParams();
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState({ src: '', alt: '' });

  const handleAddImage = () => {
    if (newImage.src && newImage.alt) {
      setImages([...images, newImage]);
      setNewImage({ src: '', alt: '' }); // Reset input fields
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, idx) => idx !== index);
    setImages(updatedImages);
  };

  return (
    <div>
      <h1>Edit Section: {sectionName.replace('-', ' ')}</h1>

      {/* Manage Images */}
      <div className="manage-images">
        <h2>Images</h2>
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image.src} alt={image.alt} width={100} />
              <span>{image.alt}</span>
              <button onClick={() => handleDeleteImage(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Image */}
      <div className="add-image">
        <h2>Add New Image</h2>
        <input
          type="text"
          placeholder="Image URL"
          value={newImage.src}
          onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image Alt Text"
          value={newImage.alt}
          onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
    </div>
  );
}

export default EditSection;
