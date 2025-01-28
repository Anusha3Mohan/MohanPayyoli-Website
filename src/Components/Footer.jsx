import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si'; // Importing a placeholder for Threads
import './Footer.css';

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/${searchTerm}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div >
          <h2 className='stay'>STAY CONNECTED</h2>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/mohan.payyoli/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/mohanpayyoli/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.threads.net/@mohanpayyoli" target="_blank" rel="noopener noreferrer">
            <SiThreads /> {/* Using a placeholder icon for Threads */}
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact</a>
        </div>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Mohan Photography. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
