import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ id, image, name, description, price }) => {
  return (
    <div className="main_container__main_item">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="main_image" />
      </Link>
      <div className="main_container__main_text">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="main_container__arrivals_price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;