import React from 'react';


import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <Link to="/" className={`app__navbar-link ${location.pathname === "/" ? "active" : ""}`}>Shop</Link>
        <span>|</span>
        <Link to="/cart" className={`app__navbar-link ${location.pathname === "/cart" ? "active" : ""}`}>
          Shoping Cart
        </Link>
      </div>
    </div>
  )
}

export default Navbar