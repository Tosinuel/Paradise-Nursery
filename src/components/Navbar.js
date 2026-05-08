import { Link } from 'react-router-dom';
import logo from '../assets/Paradise Nursery logo.png';
import './Navbar.css';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar({ cartCount }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fade-in">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Paradise Nursery Logo" className="logo" style={{ cursor: 'pointer' }} />
        </Link>
        <Link to="/">Paradise Nursery</Link>
        <Link to="/about" className="about-link">About Us</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart /> <span>{cartCount}</span>
        </Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
