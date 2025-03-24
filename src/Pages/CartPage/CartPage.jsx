import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './CartPage.scss';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/assets/images/img2_catalog.png',
      name: 'MANGO PEOPLE T-SHIRT',
      price: 300,
      color: 'Red',
      size: 'XL',
      quantity: 2
    },
    {
      id: 2,
      image: '/assets/images/Img1_product.png',
      name: 'MANGO PEOPLE T-SHIRT',
      price: 300,
      color: 'Red',
      size: 'XL',
      quantity: 2
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = subtotal + 300; // Shipping cost

  return (
    <div className="cart-page">
      <Header />
      
      {}
      <section className="cart-items container">
        <div className="cart-container">
          {}
          <div className="cart-left-column">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="main_container__main_item">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="cart-item-info">
                    <p>Price: <span className="price">${item.price}</span></p>
                    <p>Color: <span className="color">{item.color}</span></p>
                    <p>Size: <span className="size">{item.size}</span></p>
                    <p>Quantity: 
                      <input 
                        type="number" 
                        className="quantity-input" 
                        value={item.quantity} 
                        min="1"
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                      />
                    </p>
                  </div>
                </div>
                <button 
                  className="cart-item-close"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))}

            {}
            <div className="cart-buttons">
              <button 
                className="cart-button clear"
                onClick={clearCart}
              >
                CLEAR SHOPPING CART
              </button>
              <Link to="/catalog" className="cart-button continue">
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>

          {}
          <div className="cart-right-column">
            <div className="shipping-address">
              <h3>SHIPPING ADDRESS</h3>
              <form>
                <input type="text" placeholder="Bangladesh" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Postcode / Zip" />
                <button type="button" className="quote-btn">GET A QUOTE</button>
              </form>
            </div>

            <div className="cart-total">
              <div className="cart-total-inner">
                <p className="subtotal">SUB TOTAL <span>${subtotal}</span></p>
                <p className="grandtotal">GRAND TOTAL <span>${grandTotal}</span></p>
                <button className="checkout-btn">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CartPage;