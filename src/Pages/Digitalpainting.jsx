import React, { useState } from 'react';
import './Digitalpainting.css';
import { Link } from 'react-router-dom';


function Digitalpainting() {
    const images = [
        { src: "https://i.pinimg.com/736x/36/c8/fd/36c8fd849543fa608e3e6704f222546d.jpg", alt: "" },
        { src: "https://th.bing.com/th/id/OIP.N7wN7RYdIZFK3O0idl1ZaQHaI9?rs=1&pid=ImgDetMain", alt: ""},
        { src: "https://i.etsystatic.com/23087246/r/il/e0f0d7/3122780304/il_fullxfull.3122780304_6e2h.jpg", alt: "" },
        { src: "https://th.bing.com/th/id/OIP.ucMbHYlR4L9yLxqq0uZAHQHaHa?rs=1&pid=ImgDetMain", alt: ""},
        { src: "https://th.bing.com/th/id/OIP.0_7sRsQZA9Lgh4i-tDCntQAAAA?rs=1&pid=ImgDetMain", alt: "" },
        { src: "https://2.bp.blogspot.com/-w0Z0cQmXfzI/WZrJuGWgUfI/AAAAAAAAE90/ldk6LDi9gdIs5z2QnKMclV2hR_7gGDp4gCLcBGAs/s1600/20766935_135460973727284_8509450787523395584_n.jpg", alt: ""}
      ];

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        projectDate: '',
        sessionType: '',
        referralSource: ''
      });
      const [notification, setNotification] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        setNotification('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '', phone: '', projectDate: '', sessionType: '', referralSource: '' });
        
        setTimeout(() => {
          setNotification('');
        }, 3000);
      };
    
      return (
        <div>
          <nav className="gallery-navbar">
            <ul>
              <li><Link to="/paintings">RECENT PAINTINGS</Link></li>
              <li><Link to="/oil-painting">OIL PAINTING</Link></li>
              <li><Link to="/digital-painting">DIGITAL PAINTING</Link></li>
              <li><Link to="/scribble-art">SCRIBBLE ART</Link></li>
              <li><Link to="/water-colour">WATER COLOUR</Link></li>
              <li><Link to="/pencil-drawing">PENCIL DRAWING</Link></li>
            </ul>
          </nav>

      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="photo-item" key={index}>
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} />
              <div className="overlayburj">
                <span>{image.alt.toUpperCase()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
       
      <div className='head-container'>
        <h1>If You Want a Custom Drawing</h1>
      </div>

      <div className='container-table'>
        <div className="contact-container">
          <h2 className='contact'>CONTACT ME</h2>
          {notification && <div className="notification">{notification}</div>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Your Phone Number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            
            <div className="form-group">
              <label htmlFor="sessionType">Let Me Know Which Type of Painting You are Interested In?</label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="oilpainting">OIL PAINTING</option>
                <option value="scribbleart">SCRIBBLE ART</option>
                <option value="digitaldrawing">DIGITAL DRAWING</option>
                <option value="watercolour">WATER COLOUR</option>
                <option value="pencildrawing">PENCIL DRAWING</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="referralSource">How did you hear about me?</label>
              <input
                type="text"
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      <div className='text-contact'>
        <p>I can't wait to hear from you! Look out in your inbox for a reply from me within 2-3 business days. Also, feel free to email me at mohanpayyoli@gmail.com.</p>
      </div>

    </div>
    
  );
}

export default Digitalpainting;
