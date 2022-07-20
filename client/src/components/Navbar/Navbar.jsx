import React from 'react';
import { useSelector } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const cartQuantity = useSelector(state => state.cart.cartQuantity);

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <Link to="/" className={`app__navbar-link ${location.pathname === "/" ? "active" : ""}`}>Shop</Link>
        <span>|</span>
        <Link to="/cart" className={`app__navbar-link ${location.pathname === "/cart" ? "active" : ""}`}>
          Shoping Cart
          {cartQuantity > 0 ? <span className="app__cart-amount">{cartQuantity}</span> : ""}
        </Link>
      </div>
    </div>
  )
}

export default Navbar