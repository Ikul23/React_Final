import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

// Импортируем изображения правильно
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search.svg';
import menuIcon from '../../assets/images/menu.svg';
import regIcon from '../../assets/images/reg.svg';
import cartIcon from '../../assets/images/cart.svg';

const Header = () => {
  return (
    <>
      {/* Верхняя навигация */}
      <header className="navFooter container">
        <nav>
          <div className="navFooter__left-group">
            <Link to="/">
              <img 
                src={logo} 
                alt="Brand Logo" 
                className="logo" 
              />
            </Link>
            <button className="search-button">
              <img 
                src={searchIcon} 
                alt="Search" 
              />
            </button>
          </div>
          
          <div className="navFooter__right-group">
            <button className="icon-button">
              <img 
                src={menuIcon} 
                alt="Menu" 
                className="icon" 
              />
            </button>
            
            <NavLink 
              to="/registration" 
              className={({ isActive }) => 
                `icon-button ${isActive ? 'active' : ''}`
              }
            >
              <img 
                src={regIcon} 
                alt="Registration" 
                className="icon" 
              />
            </NavLink>
            
            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                `icon-button ${isActive ? 'active' : ''}`
              }
            >
              <img 
                src={cartIcon} 
                alt="Shopping Cart" 
                className="icon" 
              />
              <span className="cart-count">0</span>
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Хлебные крошки (пример для страницы продукта) */}
      <div className="breadcrumbs container">
        <NavLink to="/" className="breadcrumbs__link">
          Home
        </NavLink>
        <span className="breadcrumbs__separator">/</span>
        <NavLink 
          to="/catalog" 
          className="breadcrumbs__link breadcrumbs__link_site"
        >
          Catalog
        </NavLink>
      </div>
    </>
  );
};

export default Header;