import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import './ProductPage.scss';


const mockProducts = {
  1: {
    id: 1,
    image: '../../assets/images/Img1_product.png',
    name: 'MOSCHINO CHEAP AND CHIC',
    description: 'Compellingly actualize fully researched processes before proactive outsourcing.',
    price: 561,
    colors: ['Red', 'Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  2: {
    id: 2,
    image: '../../assets/images/Product1_prod.png',
    name: 'ELLERY X M\'O CAPSULE 1',
    price: 52.00,
    description: 'Known for her sculptural takes on traditional tailoring...'
  },
  3: {
    id: 3,
    image: '../../assets/images/Product2_prod.png',
    name: 'ELLERY X M\'O CAPSULE 2',
    price: 52.00,
    description: 'Known for her sculptural takes on traditional tailoring...'
  },
  4: {
    id: 4,
    image: '../../assets/images/Product3_prod.png',
    name: 'ELLERY X M\'O CAPSULE 3',
    price: 52.00,
    description: 'Known for her sculptural takes on traditional tailoring...'
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (mockProducts[id]) {
          setProduct(mockProducts[id]);
        } else {
          throw new Error('Product not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;
    
    const cartItem = {
      id: product.id,
      productId: id, 
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: product.image
    };
    
    console.log('Adding to cart:', cartItem);
    
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-page">
      {/* Основная информация о товаре */}
      <section className="centralBlockContent content">
        <div>
          <h2 className="centralBlockContent__header">WOMEN COLLECTION</h2>
          <img className="centralBlockContent__line" src="../../assets/images/Line.png" alt="Line" />
          <h2 className="centralBlockContent__subheader">{product.name}</h2>
          <p className="centralBlockContent__text">{product.description}</p>
          <p className="centralBlockContent__price">${product.price.toFixed(2)}</p>
          
          {product.colors && (
            <div className="centralBlockContent__custom-select">
              <select 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">CHOOSE COLOR</option>
                {product.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              
              {product.sizes && (
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">CHOOSE SIZE</option>
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              )}
              
              <select 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="centralBlockButton">
            <button 
              onClick={addToCart}
              disabled={!selectedColor || (product.sizes && !selectedSize)}
            >
              <img src="../../assets/images/Basket.png" alt="basket" />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </section>

      {/* Похожие товары */}
      <section className="main_container content">
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="similar-products-grid">
          {Object.values(mockProducts)
            .filter(p => p.id !== product.id)
            .slice(0, 3)
            .map(item => (
              <Product
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;