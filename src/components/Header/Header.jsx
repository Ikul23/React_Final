import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="navFooter container">
      <nav>
        <div className="navFooter__left-group">
          <Link to="/">
            <img 
              src="/assets/images/logo.png" 
              alt="Brand Logo" 
              className="logo" 
            />
          </Link>
          <button className="search-button">
            <img 
              src="/assets/images/search.svg" 
              alt="Search" 
            />
          </button>
        </div>
        
        <div className="navFooter__right-group">
          <button className="icon-button">
            <img 
              src="/assets/images/menu.svg" 
              alt="Menu" 
              className="icon" 
            />
          </button>
          
          <Link to="/registration" className="icon-button">
            <img 
              src="/assets/images/reg.svg" 
              alt="Registration" 
              className="icon" 
            />
          </Link>
          
          <Link to="/cart" className="icon-button">
            <img 
              src="/assets/images/cart.svg" 
              alt="Shopping Cart" 
              className="icon" 
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;