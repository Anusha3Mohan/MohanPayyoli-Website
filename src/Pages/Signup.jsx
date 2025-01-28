import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [showModal, setShowModal] = useState(false); // State to control the modal
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent form submission

    // Simulate sign-up success
    setShowModal(true);

    // Hide modal after 2 seconds and navigate to login page
    setTimeout(() => {
      setShowModal(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          <div className="button-group">
            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Sign-Up Successful!</h3>
            <p>You are being redirected to the login page.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
