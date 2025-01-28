import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    projectDate: '',
    sessionType: '',
    referralSource: ''
  });
  const [alertVisible, setAlertVisible] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Reset error messages when user starts typing
    if (name === 'name' || name === 'phone') {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validate name field
    if (formData.name.length < 3) {
      formErrors.name = 'Full name must be at least 3 characters.';
    }

    // Validate phone field (must be 10 digits)
    if (formData.phone && formData.phone.length !== 10) {
      formErrors.phone = 'Phone number must be 10 digits.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Do not proceed if there are errors
    }

    // Show the custom alert if no errors
    setAlertVisible(true);

    // Clear form after submission
    setFormData({ name: '', email: '', message: '', phone: '', projectDate: '', sessionType: '', referralSource: '' });

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div className='container-table'>
      <div className="contact-container">
        <h2 className='contact'>GET IN TOUCH</h2>

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
            {errors.name && <small className="error-message">{errors.name}</small>}  {/* Display error message for name */}
            
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
            {errors.phone && <small className="error-message">{errors.phone}</small>}  {/* Display error message for phone */}
            
          </div>
          <div className="form-group">
            <label htmlFor="projectDate">Project Date</label>
            <input
              type="date"
              id="projectDate"
              name="projectDate"
              value={formData.projectDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sessionType">What type of Session are you Interested in?</label>
            <select
              id="sessionType"
              name="sessionType"
              value={formData.sessionType}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="portrait">Portrait</option>
              <option value="wedding">Wedding</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
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

          {/* Send message button */}
          <button type="submit" className="submit-button">Send Message</button>

          {/* Custom alert below the submit button */}
          {alertVisible && (
            <div className="custom-alert">
              Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>

      {/* Text under the form */}
      <div className='text-contact mt-5'>
        <p>I can't wait to hear from you! Look out in your inbox for a reply from me within 2-3 business days. Also, feel free to email me at ovmohanfineart@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
