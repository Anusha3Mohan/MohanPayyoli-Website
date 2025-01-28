import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:4000/api/admin/login', { email, password });

      // If login is successful, store token in localStorage
      localStorage.setItem('token', response.data.token);

      // Show success notification and navigate to the protected route
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        navigate('/admin/home'); // Redirect to admin home page after successful login
      }, 2000);
    } catch (err) {
      setError('Invalid credentials'); // Show error if login fails
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <div className="button-group">
            <button type="submit" className="login-btn">Login</button>
          </div>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/admin/register">Register here</Link>
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
