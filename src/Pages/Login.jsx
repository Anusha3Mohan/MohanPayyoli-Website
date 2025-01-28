import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [showNotification, setShowNotification] = useState(false); // State to control the notification
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Simulate login success (you can add your login logic here)
    setShowNotification(true);

    // Hide notification after 2 seconds and navigate to a protected route (like cart)
    setTimeout(() => {
      setShowNotification(false);
      navigate('/cart'); // Navigate to cart or other page after successful login
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="button-group">
            <button type="submit" className="login-btn">Login</button>
          </div>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>

      {showNotification && (
        <div className="notification">
          <div className="notification-content">
            <p>Login Successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
