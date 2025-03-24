import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import './ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  
  const product = {
    id: 1,
    image: '../../assets/images/Img1_product.png',
    name: 'MOSCHINO CHEAP AND CHIC',
    description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.',
    price: 561,
    colors: ['Red', 'Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  const addToCart = () => {
    // Логика добавления в корзину
    console.log({
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: product.image
    });
  };

  return (
    <div className="product-page">
      {/* Центральный блок с деталями товара */}
      <section className="centralBlockContent content">
        <div>
          <h2 className="centralBlockContent__header">WOMEN COLLECTION</h2>
          <img className="centralBlockContent__line" src="../../assets/images/Line.png" alt="Line" />
          <h2 className="centralBlockContent__subheader">{product.name}</h2>
          <p className="centralBlockContent__text">{product.description}</p>
          <p className="centralBlockContent__price">${product.price.toFixed(2)}</p>
          
          <div className="centralBlockContent__custom-select">
            <select 
              id="color" 
              name="color" 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">CHOOSE COLOR</option>
              {product.colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
            
            <select 
              name="size" 
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">CHOOSE SIZE</option>
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            
            <select 
              name="quantity" 
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <div className="centralBlockButton">
            <button 
              className="centralBlockButton__button"
              onClick={addToCart}
              disabled={!selectedColor || !selectedSize}
            >
              <img src="../../assets/images/Basket.png" alt="basket" />
              <p className="centralBlockButton__button_text">Add to Cart</p>
            </button>
          </div>
        </div>
      </section>

      {/* Блок с похожими товарами */}
      <section className="main_container content">
        <h2 className="similar-products-title">YOU MAY ALSO LIKE</h2>
        <div className="similar-products-grid">
          <Product
            id={2}
            image="../../assets/images/Product1_prod.png"
            name="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price={52.00}
          />
          <Product
            id={3}
            image="../../assets/images/Product2_prod.png"
            name="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price={52.00}
          />
          <Product
            id={4}
            image="../../assets/images/Product3_prod.png"
            name="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price={52.00}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;