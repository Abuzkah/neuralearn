import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">NeuraLearn</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/interactive">Interactive</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/portal">Portal</Link></li>
    </ul>
  </nav>
);

export default Navbar;
