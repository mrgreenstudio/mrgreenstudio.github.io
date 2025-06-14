import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/apps">Apps</Link></li>
      <li><Link to="/games">Games</Link></li>
      <li><Link to="/privacypolicy">Privacy Policy</Link></li>
    </ul>
  </nav>
);

export default Navbar;
