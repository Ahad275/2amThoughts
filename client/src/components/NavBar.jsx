import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../services/authorize";
import './NavBar.css';
import App from '../App'
import Contact from './Contact'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
      <nav className="navbar">
      <div className="nav-container ">
        <div className="brand-logo">
          <Link to="/" className="logolink">
            <h4><strong>&lt;2amThoughts</strong>/
            <strong>&gt;</strong></h4>
          </Link>
        </div>
        <span className="hamburger-icon" onClick={toggleNav}>
          &#9776; {/* Hamburger icon */}
        </span>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <a href="#my-blog" className="nav-link">My Story</a>
            {/* <Link to="/" className="nav-link">My Story</Link> */}
          </li>
          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>

          </li>
          {getUser() && (
            <li className="nav-item">
              <Link to="/create" className="nav-link">Articles</Link>
            </li>
          )}
          {!getUser() && (
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          )}
          {getUser() && (
            <li className="nav-item">
              <button className="logout-btn" onClick={() => logout(() => navigate("/"))}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
