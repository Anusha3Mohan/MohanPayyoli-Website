import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Images/Mohanlogowhite.png'; // Import the logo image

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo} alt="Logo" className="logo" /> {/* Use the imported logo */}
      <h1 className="site-title">MOHAN FINEART PHOTOGRAPHER</h1>
      <div className="header-container">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/news">News</Link>
            <Link to="/awards">Awards</Link>
            <Link to="/art">Art</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
