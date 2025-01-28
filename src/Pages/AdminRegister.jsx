import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AdminRegister.css';

function AdminRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',  // email field added here
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/admin/register', formData);
      setMessage(response.data.message);
      
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/admin/login'); // Redirect to login page after successful registration
      }, 2000);
    } catch (err) {
      console.log('Error during registration:', err.response?.data || err.message);
      setMessage(err.response?.data?.message || 'Server error');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Admin Registration</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email field */}
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // This binds the email value from formData
              onChange={handleChange}  // This updates the formData state when the user types
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password field */}
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password field */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit button */}
          <div className="button-group">
            <button type="submit" className="signup-btn">Register</button>
          </div>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/admin/login">Login here</Link>
        </p>
      </div>

      {/* Modal after successful registration */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Registration Successful!</h3>
            <p>You are being redirected to the login page.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRegister;
